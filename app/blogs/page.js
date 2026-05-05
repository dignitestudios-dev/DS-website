import BlogsArchive from "@/components/Blogs/BlogsArchive";
import GlobalLayout from "@/layout/GlobalLayout";
import React from "react";

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

async function fetchInitialPosts() {
  try {
    const headers = {};
    if (WORDPRESS_API_TOKEN) {
      headers.Authorization = `Bearer ${WORDPRESS_API_TOKEN}`;
    }

    const response = await fetch(
      `${WORDPRESS_API_BASE}/posts?number=6&order_by=date&order=DESC`,
      {
        headers,
        next: { revalidate: 300 }, // Cache for 5 minutes
      }
    );

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Fetched initial posts:', data.posts);
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

    return transformedPosts;
  } catch (error) {
    console.error('Error fetching initial posts:', error);
    return null; // Return null on error, component will handle this
  }
}

export const metadata = {
  title: "Blog - Dignite Studios | Mobile App Development Insights",
  description: "Stay updated with the latest trends in mobile app development, technology insights, and industry best practices from Dignite Studios experts.",
  alternates: {
    canonical: "https://www.dignitestudios.com/blogs",
  },
};

const page = async () => {
  const initialPosts = await fetchInitialPosts();
console.log(initialPosts.image)
  return (
    <GlobalLayout 
      page={
        <BlogsArchive initialPosts={initialPosts} />
      } 
    />
  );
};

export default page;
