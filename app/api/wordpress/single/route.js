import { NextResponse } from 'next/server';

const WORDPRESS_API_BASE = 'https://public-api.wordpress.com/rest/v1/sites/dignitestudioscom.wordpress.com';
const WORDPRESS_API_TOKEN = process.env.WORDPRESS_API_TOKEN;

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const id = searchParams.get('id');

    if (!slug && !id) {
      return NextResponse.json(
        { error: 'Slug or ID parameter is required' },
        { status: 400 }
      );
    }

    const headers = {};
    if (WORDPRESS_API_TOKEN) {
      headers.Authorization = `Bearer ${WORDPRESS_API_TOKEN}`;
    }

    // Construct the API URL based on whether we have slug or id
    let apiUrl;
    if (id) {
      apiUrl = `${WORDPRESS_API_BASE}/posts/${id}`;
    } else {
      apiUrl = `${WORDPRESS_API_BASE}/posts/slug:${slug}`;
    }

    const response = await fetch(apiUrl, {
      headers,
      next: { revalidate: 600 }, // Cache for 10 minutes
    });

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { error: 'Post not found' },
          { status: 404 }
        );
      }
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const post = await response.json();

    // Transform WordPress post data
    const transformedPost = {
      ID: post.ID,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 200) + '...' || '',
      date: post.date,
      modified: post.modified,
      slug: post.slug,
      status: post.status,
      author: {
        ID: post.author?.ID,
        name: post.author?.name || 'Dignite Studios',
        avatar: post.author?.avatar_URL,
        description: post.author?.description,
      },
      featured_image: post.featured_image || post.post_thumbnail?.URL,
      categories: post.categories || {},
      tags: post.tags || {},
      URL: post.URL,
      short_URL: post.short_URL,
      word_count: post.word_count || 0,
      reading_time: Math.ceil((post.word_count || 600) / 200),
      like_count: post.like_count || 0,
      comment_count: post.comment_count || 0,
      meta: {
        description: post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160) || '',
        keywords: Object.values(post.tags || {}).map(tag => tag.name).join(', '),
      },
      related_posts: [], // We'll fetch this separately if needed
    };

    return NextResponse.json({
      post: transformedPost,
      success: true,
    });

  } catch (error) {
    console.error('WordPress Single Post API Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch post',
        message: error.message,
        post: null,
      },
      { status: 500 }
    );
  }
}