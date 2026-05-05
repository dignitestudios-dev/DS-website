import BlogPostPage from '@/components/Blogs/BlogPostPage';
import GlobalLayout from '@/layout/GlobalLayout';
import { notFound } from 'next/navigation';

const WORDPRESS_API_BASE = 'https://public-api.wordpress.com/rest/v1/sites/dignitestudioscom.wordpress.com';
const WORDPRESS_API_TOKEN = process.env.WORDPRESS_API_TOKEN;

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const { slug } = params;

  try {
    const headers = {};
    if (WORDPRESS_API_TOKEN) {
      headers.Authorization = `Bearer ${WORDPRESS_API_TOKEN}`;
    }

    const response = await fetch(
      `${WORDPRESS_API_BASE}/posts/slug:${slug}`,
      {
        headers,
        next: { revalidate: 600 },
      }
    );

    if (!response.ok) {
      return {
        title: 'Post Not Found - Dignite Studios Blog',
        description: 'The requested blog post could not be found.',
      };
    }

    const post = await response.json();

    const cleanExcerpt = post.excerpt?.replace(/<[^>]*>/g, '').substring(0, 160) || '';
    const categories = Object.values(post.categories || {}).map(cat => cat.name).join(', ');
    const tags = Object.values(post.tags || {}).map(tag => tag.name).join(', ');

    return {
      title: `${post.title} - Dignite Studios Blog`,
      description: cleanExcerpt || `Read about ${post.title} on Dignite Studios blog. Expert insights on mobile app development, technology trends, and digital solutions.`,
      keywords: `${categories}, ${tags}, mobile app development, Dignite Studios, technology blog`,
      authors: [{ name: post.author?.name || 'Dignite Studios' }],
      openGraph: {
        title: post.title,
        description: cleanExcerpt,
        type: 'article',
        publishedTime: post.date,
        modifiedTime: post.modified,
        authors: [post.author?.name || 'Dignite Studios'],
        images: [
          {
            url: post.featured_image || post.post_thumbnail?.URL || '/default-blog-image.jpg',
            width: 1200,
            height: 630,
            alt: post.title,
          },
        ],
        url: `https://www.dignitestudios.com/blogs/${slug}`,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: cleanExcerpt,
        images: [post.featured_image || post.post_thumbnail?.URL || '/default-blog-image.jpg'],
        creator: '@dignitestudios',
      },
      alternates: {
        canonical: `https://www.dignitestudios.com/blogs/${slug}`,
      },
      other: {
        'article:author': post.author?.name || 'Dignite Studios',
        'article:published_time': post.date,
        'article:modified_time': post.modified,
        'article:section': categories,
        'article:tag': tags,
      },
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post - Dignite Studios',
      description: 'Read the latest insights on mobile app development and technology trends.',
    };
  }
}

// Generate static params for popular posts (optional)
export async function generateStaticParams() {
  try {
    const headers = {};
    if (WORDPRESS_API_TOKEN) {
      headers.Authorization = `Bearer ${WORDPRESS_API_TOKEN}`;
    }

    const response = await fetch(
      `${WORDPRESS_API_BASE}/posts?number=10&order_by=date&order=DESC`,
      {
        headers,
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    
    return data.posts?.map((post) => ({
      slug: post.slug,
    })) || [];
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

const BlogPost = ({ params }) => {
  const { slug } = params;

  if (!slug) {
    notFound();
  }

  return (
    <GlobalLayout 
      page={<BlogPostPage slug={slug} />}
    />
  );
};

export default BlogPost;