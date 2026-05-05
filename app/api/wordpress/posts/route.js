import { NextResponse } from 'next/server';

const WORDPRESS_API_BASE = 'https://public-api.wordpress.com/rest/v1/sites/dignitestudioscom.wordpress.com';
const WORDPRESS_API_TOKEN = process.env.WORDPRESS_API_TOKEN;

// Function to extract first image from HTML content
function extractFirstImageSrc(html = '') {
  const match = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  return match?.[1] || '';
}

// Function to extract first paragraph from HTML content
function extractFirstParagraph(html = '') {
  const textContent = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const sentences = textContent.split(/[.!?]+/);
  const firstParagraph = sentences.slice(0, 2).join('.').trim();
  return firstParagraph ? firstParagraph + '.' : textContent.substring(0, 150) + '...';
}

// Function to manually count words
function countWords(text = '') {
  const cleanText = text.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  return cleanText ? cleanText.split(' ').length : 0;
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const perPage = parseInt(searchParams.get('per_page')) || 6;
    const search = searchParams.get('search') || '';
    const category = searchParams.get('category') || '';
    const tag = searchParams.get('tag') || '';

    // Build query parameters
    const queryParams = new URLSearchParams({
      number: perPage.toString(),
      offset: ((page - 1) * perPage).toString(),
      order_by: 'date',
      order: 'DESC',
    });

    // Add search parameter if provided
    if (search) {
      queryParams.append('search', search);
    }

    // Add category filter if provided
    if (category) {
      queryParams.append('category', category);
    }

    // Add tag filter if provided
    if (tag) {
      queryParams.append('tag', tag);
    }

    const headers = {};
    if (WORDPRESS_API_TOKEN) {
      headers.Authorization = `Bearer ${WORDPRESS_API_TOKEN}`;
    }

    const response = await fetch(
      `${WORDPRESS_API_BASE}/posts?${queryParams.toString()}`,
      {
        headers,
        next: { revalidate: 300 }, // Cache for 5 minutes
      }
    );

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const data = await response.json();

    // Transform WordPress posts to match your BlogCard component structure
    const transformedPosts = data.posts?.map(post => {
      const contentFirstImage = extractFirstImageSrc(post.content);
      const wordCount = countWords(post.content);
      return {
        ID: post.ID,
        title: post.title,
        excerpt: extractFirstParagraph(post.excerpt || post.content),
        content: post.content,
        date: new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        readTime: `${Math.ceil(wordCount / 200) || 3} Min Read`,
        image: post.featured_image || post.post_thumbnail?.URL || contentFirstImage || 'https://placehold.co/384x218/f15c20/ffffff?text=Blog+Post',
        slug: post.slug,
        author: post.author?.name || 'Dignite Studios',
        categories: post.categories || {},
        tags: post.tags || {},
        URL: post.URL,
        word_count: wordCount,
      };
    }) || [];

    return NextResponse.json({
      posts: transformedPosts,
      found: data.found || 0,
      total_pages: Math.ceil((data.found || 0) / perPage),
      current_page: page,
      per_page: perPage,
      has_more: (data.found || 0) > (page * perPage),
    });

  } catch (error) {
    console.error('WordPress API Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch posts',
        message: error.message,
        posts: [],
        found: 0,
        total_pages: 0,
        current_page: 1,
        per_page: 6,
        has_more: false,
      },
      { status: 500 }
    );
  }
}