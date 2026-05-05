import { NextResponse } from 'next/server';

const WORDPRESS_API_BASE = 'https://public-api.wordpress.com/rest/v1/sites/dignitestudioscom.wordpress.com';
const WORDPRESS_API_TOKEN = process.env.WORDPRESS_API_TOKEN;

export async function GET() {
  try {
    const headers = {};
    if (WORDPRESS_API_TOKEN) {
      headers.Authorization = `Bearer ${WORDPRESS_API_TOKEN}`;
    }

    const response = await fetch(
      `${WORDPRESS_API_BASE}/categories`,
      {
        headers,
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`WordPress API error: ${response.status}`);
    }

    const data = await response.json();

    // Transform categories data
    const categories = data.categories ? Object.values(data.categories).map(category => ({
      id: category.ID,
      name: category.name,
      slug: category.slug,
      description: category.description || '',
      post_count: category.post_count || 0,
    })) : [];

    return NextResponse.json({
      categories,
      total: categories.length,
    });

  } catch (error) {
    console.error('WordPress Categories API Error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch categories',
        message: error.message,
        categories: [],
        total: 0,
      },
      { status: 500 }
    );
  }
}