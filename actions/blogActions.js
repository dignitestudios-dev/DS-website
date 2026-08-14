"use server";

import connectToDatabase from "@/lib/mongoose";
import BlogPost from "@/models/BlogPost";

// Function to extract first paragraph from HTML content
function extractFirstParagraph(html = '') {
  const textContent = html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
  const sentences = textContent.split(/[.!?]+/);
  const firstParagraph = sentences.slice(0, 2).join('.').trim();
  return firstParagraph ? firstParagraph + '.' : textContent.substring(0, 150) + '...';
}

export async function getPaginatedBlogs(page = 1, limit = 5) {
  try {
    await connectToDatabase();
    
    const skip = (page - 1) * limit;
    
    const [blogs, total] = await Promise.all([
      BlogPost.find({ status: 'published' })
        .sort({ publishedAt: -1, createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean(),
      BlogPost.countDocuments({ status: 'published' })
    ]);

    const formattedBlogs = blogs.map(blog => ({
      id: blog._id.toString(),
      title: blog.title,
      description: blog.excerpt || extractFirstParagraph(blog.contentHtml),
      date: new Date(blog.publishedAt || blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      image: blog.featuredImage?.url || '/default-blog-image.jpg',
      slug: blog.slug,
      url: `/blog/${blog.slug}`,
    }));

    return {
      blogs: formattedBlogs,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      totalBlogs: total
    };
  } catch (error) {
    console.error("Failed to fetch paginated blogs:", error);
    return {
      blogs: [],
      totalPages: 0,
      currentPage: page,
      totalBlogs: 0
    };
  }
}
