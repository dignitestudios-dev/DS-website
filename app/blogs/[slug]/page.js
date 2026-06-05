export const dynamic = "force-dynamic";

import { connectDB } from "@/lib/db";
import BlogPost from "@/lib/BlogPost";
import GlobalLayout from "@/layout/GlobalLayout";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { generateBreadcrumbJsonLd } from "@/lib/seo";

const WEBSITE_URL = "https://www.dignitestudios.com";

export async function generateMetadata({ params }) {
  await connectDB();
  const post = await BlogPost.findOne({ slug: params.slug, status: "published" })
    .select("title slug seo featuredImage excerpt publishedAt author")
    .lean();

  if (!post) return { title: "Post Not Found" };

  const seo = post.seo ?? {};
  const seoTitle = seo.seoTitle || post.title;
  const metaDescription = seo.metaDescription || post.excerpt || "";
  const canonical = seo.canonicalUrl || `${WEBSITE_URL}/blogs/${post.slug}`;
  const ogImage = seo.ogImage || post.featuredImage?.url || `${WEBSITE_URL}/meta-home.png`;
  const robotsIndex = seo.robots?.index !== false ? "index" : "noindex";
  const robotsFollow = seo.robots?.follow !== false ? "follow" : "nofollow";

  return {
    title: seoTitle,
    description: metaDescription,
    keywords: seo.metaKeywords || undefined,
    alternates: { canonical },
    robots: `${robotsIndex}, ${robotsFollow}`,
    openGraph: {
      type: "article",
      siteName: "Dignite Studios",
      title: seo.ogTitle || seoTitle,
      description: seo.ogDescription || metaDescription,
      url: canonical,
      publishedTime: post.publishedAt?.toISOString?.() ?? undefined,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: seo.twitterCard || "summary_large_image",
      title: seo.twitterTitle || seo.ogTitle || seoTitle,
      description: seo.twitterDescription || seo.ogDescription || metaDescription,
      images: [seo.twitterImage || ogImage],
    },
  };
}

async function getPost(slug) {
  await connectDB();
  const post = await BlogPost.findOne({ slug, status: "published" }).lean();
  return post ? JSON.parse(JSON.stringify(post)) : null;
}

async function getRelatedPosts(categories, currentSlug) {
  if (!categories?.length) return [];
  await connectDB();
  const posts = await BlogPost.find({
    status: "published",
    slug: { $ne: currentSlug },
    categories: { $in: categories },
  })
    .sort({ publishedAt: -1 })
    .limit(3)
    .select("title slug excerpt featuredImage categories publishedAt readTime")
    .lean();
  return JSON.parse(JSON.stringify(posts));
}

function RelatedCard({ post }) {
  return (
    <Link href={`/blogs/${post.slug}`} className="group flex gap-3">
      {post.featuredImage?.url && (
        <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={post.featuredImage.url}
            alt={post.featuredImage.alt || post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
            sizes="80px"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-[#F15C20] transition-colors">
          {post.title}
        </p>
        {post.readTime && (
          <p className="text-xs text-gray-400 mt-1">{post.readTime} min read</p>
        )}
      </div>
    </Link>
  );
}

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug);
  if (!post) notFound();

  const related = await getRelatedPosts(post.categories, post.slug);
  const seo = post.seo ?? {};

  // jsonLd may be stored as a JSON string or plain object
  let parsedJsonLd = null;
  if (seo.jsonLd) {
    try {
      parsedJsonLd = typeof seo.jsonLd === "string" ? JSON.parse(seo.jsonLd) : seo.jsonLd;
    } catch { /* fall through to auto-generated schema */ }
  }

  const articleJsonLd =
    parsedJsonLd && typeof parsedJsonLd === "object" && Object.keys(parsedJsonLd).length > 0
      ? parsedJsonLd
      : {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: seo.metaDescription || post.excerpt || "",
          image: seo.ogImage
            ? [seo.ogImage]
            : post.featuredImage?.url
            ? [post.featuredImage.url]
            : [],
          author: { "@type": "Person", name: post.author?.name || "Dignite Studios" },
          publisher: {
            "@type": "Organization",
            name: "Dignite Studios",
            logo: { "@type": "ImageObject", url: `${WEBSITE_URL}/logo.png` },
          },
          url: `${WEBSITE_URL}/blogs/${post.slug}`,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${WEBSITE_URL}/blogs/${post.slug}`,
          },
          datePublished: post.publishedAt,
          dateModified: post.updatedAt,
        };

  const breadcrumbJsonLd = generateBreadcrumbJsonLd(post.slug, post.title);

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "";

  return (
    <GlobalLayout
      page={
        <>
          {/* JSON-LD structured data — rendered server-side for crawlers */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
          />

          <article className="w-full px-4 md:px-12 lg:px-28 py-12 max-w-[1920px] mx-auto">
            {/* Top nav row: back button + breadcrumb */}
            <div className="flex items-center gap-3 mb-8">
              <Link
                href="/blogs"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 hover:text-[#F15C20] transition-colors group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:-translate-x-0.5 transition-transform"
                >
                  <path d="M19 12H5" />
                  <path d="M12 19l-7-7 7-7" />
                </svg>
                Back to Blog
              </Link>
              <span className="text-gray-300">|</span>
              <nav className="flex items-center gap-1.5 text-xs text-gray-400">
                <Link href="/" className="hover:text-[#F15C20] transition-colors">Home</Link>
                <span>/</span>
                <Link href="/blogs" className="hover:text-[#F15C20] transition-colors">Blog</Link>
                <span>/</span>
                <span className="text-gray-600 line-clamp-1 max-w-xs">{post.title}</span>
              </nav>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-12">
              {/* Main content */}
              <div>
                {post.categories?.length > 0 && (
                  <span className="text-xs font-semibold text-[#F15C20] uppercase tracking-wide">
                    {post.categories[0]}
                  </span>
                )}

                <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  {post.title}
                </h1>

                <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-500">
                  {post.author?.name && (
                    <span className="font-medium text-gray-700">By {post.author.name}</span>
                  )}
                  {date && <span>{date}</span>}
                  {post.readTime && <span>{post.readTime} min read</span>}
                </div>

                {post.featuredImage?.url && (
                  <div
                    className="relative w-full mt-8 rounded-2xl overflow-hidden bg-gray-100"
                    style={{ aspectRatio: "16/9" }}
                  >
                    <Image
                      src={post.featuredImage.url}
                      alt={post.featuredImage.alt || post.title}
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 75vw"
                    />
                  </div>
                )}

                <div
                  className="mt-10 blog-content prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                />

                {post.tags?.length > 0 && (
                  <div className="mt-10 pt-6 border-t border-gray-100">
                    <p className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wide">
                      Tags
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Sidebar */}
              <aside className="space-y-8">
                {related.length > 0 && (
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-4">
                      Related Posts
                    </h3>
                    <div className="space-y-4">
                      {related.map((r) => (
                        <RelatedCard key={r._id} post={r} />
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          </article>
        </>
      }
    />
  );
}
