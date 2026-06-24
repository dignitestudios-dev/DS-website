import GlobalLayout from "@/layout/GlobalLayout";
import connectToDatabase from "@/lib/mongoose";
import BlogPost from "@/models/BlogPost";
import BlogPostPage from "@/components/Blogs/BlogPostPage";
import { notFound } from "next/navigation";
import Script from "next/script";

export const revalidate = 900;

// Function to extract first paragraph from HTML content
function extractFirstParagraph(html = '') {
  const textContent = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const sentences = textContent.split(/[.!?]+/);
  const firstParagraph = sentences.slice(0, 2).join('.').trim();
  return firstParagraph ? firstParagraph + '.' : textContent.substring(0, 150) + '...';
}

function mapToComponentPost(blog) {
  if (!blog) return null;
  return {
    ID: blog._id.toString(),
    title: blog.title,
    excerpt: blog.excerpt || extractFirstParagraph(blog.contentHtml),
    content: blog.contentHtml,
    date: new Date(blog.publishedAt || blog.createdAt).toISOString(),
    readTime: blog.readTime || 3,
    image: blog.featuredImage?.url || '/default-blog-image.jpg',
    slug: blog.slug,
    author: {
      name: blog.author?.name || 'Dignite Studios',
      avatar_URL: blog.author?.avatar
    },
    categories: blog.categories?.map(c => ({ name: c })) || [],
    tags: [],
    URL: `/blog/${blog.slug}`,
  };
}

async function getBlogPostAndRelated(slug) {
  try {
    await connectToDatabase();

    // Fetch current post
    const blog = await BlogPost.findOne({ slug, status: 'published' }).lean();
    if (!blog) return { post: null, related: [] };

    // Fetch related posts (latest 3 excluding current)
    const relatedBlogs = await BlogPost.find({
      slug: { $ne: slug },
      status: 'published'
    })
      .sort({ publishedAt: -1, createdAt: -1 })
      .limit(3)
      .lean();

    return {
      post: mapToComponentPost(blog),
      related: relatedBlogs.map(mapToComponentPost),
      seoData: blog.seo || {},
      rawBlog: blog
    };
  } catch (error) {
    console.error("Failed to fetch blog:", error);
    return { post: null, related: [], seoData: {}, rawBlog: null };
  }
}

export async function generateMetadata({ params }) {
  const { post, seoData, rawBlog } = await getBlogPostAndRelated(params.slug);

  if (!post) {
    return { title: 'Blog Not Found | Dignite Studios' };
  }

  const url = `https://www.dignitestudios.com/blog/${post.slug}`;

  return {
    title: seoData.seoTitle || post.title,
    description: seoData.metaDescription || post.excerpt,
    keywords: seoData.metaKeywords || '',
    alternates: {
      canonical: seoData.canonicalUrl || url,
    },
    robots: {
      index: seoData.robots?.index !== false,
      follow: seoData.robots?.follow !== false,
    },
    openGraph: {
      title: seoData.ogTitle || seoData.seoTitle || post.title,
      description: seoData.ogDescription || seoData.metaDescription || post.excerpt,
      url: url,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: rawBlog?.updatedAt,
      authors: [post.author?.name || 'Dignite Studios'],
      images: [
        {
          url: seoData.ogImage || post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: seoData.twitterCard || 'summary_large_image',
      title: seoData.twitterTitle || seoData.seoTitle || post.title,
      description: seoData.twitterDescription || seoData.metaDescription || post.excerpt,
      images: [seoData.twitterImage || seoData.ogImage || post.image],
    },
  };
}

export default async function SingleBlogRoute({ params }) {
  const { post, related, seoData } = await getBlogPostAndRelated(params.slug);

  if (!post) {
    notFound();
  }

  const pageContent = (
    <>
      {seoData.jsonLd && (
        <Script
          id="blog-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: seoData.jsonLd }}
        />
      )}
      <BlogPostPage post={post} related={related} />
    </>
  );

  return <GlobalLayout page={pageContent} />;
}
