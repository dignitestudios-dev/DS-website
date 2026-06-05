import { connectDB } from "@/lib/db";
import BlogPost from "@/lib/BlogPost";
import GlobalLayout from "@/layout/GlobalLayout";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Blog | Dignite Studios",
  description:
    "Insights, tutorials, and updates from the Dignite Studios team on mobile app development, web development, SEO, and digital marketing.",
  alternates: {
    canonical: "https://www.dignitestudios.com/blogs",
  },
  robots: "index, follow",
  openGraph: {
    type: "website",
    siteName: "Dignite Studios",
    title: "Blog | Dignite Studios",
    description:
      "Insights, tutorials, and updates from the Dignite Studios team on mobile app development, web development, SEO, and digital marketing.",
    url: "https://www.dignitestudios.com/blogs",
    images: [
      {
        url: "https://www.dignitestudios.com/meta-home.png",
        width: 1200,
        height: 630,
        alt: "Dignite Studios Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Dignite Studios",
    description:
      "Insights, tutorials, and updates from the Dignite Studios team.",
    images: ["https://www.dignitestudios.com/meta-home.png"],
  },
};

const POSTS_PER_PAGE = 9;

async function getPosts(page = 1) {
  await connectDB();
  const skip = (page - 1) * POSTS_PER_PAGE;
  const [posts, total] = await Promise.all([
    BlogPost.find({ status: "published" })
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(POSTS_PER_PAGE)
      .select(
        "title slug excerpt featuredImage categories tags author publishedAt readTime seo.seoTitle"
      )
      .lean(),
    BlogPost.countDocuments({ status: "published" }),
  ]);
  return { posts: JSON.parse(JSON.stringify(posts)), total };
}

function BlogCard({ post }) {
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <article className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
      {post.featuredImage?.url && (
        <Link href={`/blogs/${post.slug}`}>
          <div className="relative w-full h-48 overflow-hidden bg-gray-100">
            <Image
              src={post.featuredImage.url}
              alt={post.featuredImage.alt || post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Link>
      )}
      <div className="p-5">
        {post.categories?.length > 0 && (
          <span className="text-xs font-semibold text-[#F15C20] uppercase tracking-wide">
            {post.categories[0]}
          </span>
        )}
        <h2 className="mt-2 text-lg font-bold text-gray-900 leading-snug line-clamp-2 group-hover:text-[#F15C20] transition-colors">
          <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
        </h2>
        {post.excerpt && (
          <p className="mt-2 text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
        )}
        <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-2">
            {post.author?.name && (
              <span className="font-medium text-gray-600">{post.author.name}</span>
            )}
            {post.author?.name && date && <span>·</span>}
            {date && <span>{date}</span>}
          </div>
          {post.readTime && <span>{post.readTime} min read</span>}
        </div>
      </div>
    </article>
  );
}

export default async function BlogsPage({ searchParams }) {
  const page = parseInt(searchParams?.page ?? "1");
  const { posts, total } = await getPosts(page);
  const totalPages = Math.ceil(total / POSTS_PER_PAGE);

  return (
    <GlobalLayout
      page={
        <section className="w-full px-4 md:px-12 lg:px-28 pt-16 pb-32 max-w-[1920px] mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-[#F15C20]">Blog</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Insights, tutorials, and updates from the Dignite Studios team.
            </p>
          </div>

          {/* Posts grid */}
          {posts.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg">No posts published yet.</p>
              <p className="text-sm mt-1">Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <BlogCard key={post._id} post={post} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-12 flex justify-center gap-2">
              {page > 1 && (
                <Link
                  href={`/blogs?page=${page - 1}`}
                  className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:border-[#F15C20] hover:text-[#F15C20] transition-colors"
                >
                  ← Previous
                </Link>
              )}
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <Link
                  key={p}
                  href={`/blogs?page=${p}`}
                  className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                    p === page
                      ? "bg-[#F15C20] text-white"
                      : "border border-gray-200 hover:border-[#F15C20] hover:text-[#F15C20]"
                  }`}
                >
                  {p}
                </Link>
              ))}
              {page < totalPages && (
                <Link
                  href={`/blogs?page=${page + 1}`}
                  className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:border-[#F15C20] hover:text-[#F15C20] transition-colors"
                >
                  Next →
                </Link>
              )}
            </div>
          )}
        </section>
      }
    />
  );
}
