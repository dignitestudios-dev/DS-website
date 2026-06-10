import GlobalLayout from "@/layout/GlobalLayout";
import connectToDatabase from "@/lib/mongoose";
import BlogPost from "@/models/BlogPost";
import BlogsArchive from "@/components/Blogs/BlogsArchive";

export const metadata = {
  title: "Blog | Dignite Studios",
  description: "Read the latest insights, tutorials, and news about mobile app development, web development, and digital design from Dignite Studios experts.",
  alternates: {
    canonical: 'https://www.dignitestudios.com/blog',
  },
  robots: 'index, follow',
};

// Function to extract first paragraph from HTML content
function extractFirstParagraph(html = '') {
  const textContent = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const sentences = textContent.split(/[.!?]+/);
  const firstParagraph = sentences.slice(0, 2).join('.').trim();
  return firstParagraph ? firstParagraph + '.' : textContent.substring(0, 150) + '...';
}

async function getBlogs() {
  try {
    await connectToDatabase();
    const blogs = await BlogPost.find({ status: 'published' })
      .sort({ publishedAt: -1, createdAt: -1 })
      .lean();
    
    return blogs.map(blog => ({
      ID: blog._id.toString(),
      title: blog.title,
      excerpt: blog.excerpt || extractFirstParagraph(blog.contentHtml),
      content: blog.contentHtml,
      date: new Date(blog.publishedAt || blog.createdAt).toISOString(),
      readTime: blog.readTime ? `${blog.readTime} Min Read` : '3 Min Read',
      image: blog.featuredImage?.url || '/default-blog-image.jpg',
      slug: blog.slug,
      author: { 
        name: blog.author?.name || 'Dignite Studios', 
        avatar_URL: blog.author?.avatar 
      },
      categories: blog.categories?.map(c => ({ name: c })) || [],
      tags: [],
      URL: `/blog/${blog.slug}`,
    }));
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return [];
  }
}

export default async function BlogPage() {
  const initialPosts = await getBlogs();

  return (
    <GlobalLayout 
      page={<BlogsArchive initialPosts={initialPosts} />} 
    />
  );
}
