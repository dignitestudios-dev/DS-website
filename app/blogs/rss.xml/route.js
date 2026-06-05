export const dynamic = "force-dynamic";

import { connectDB } from "@/lib/db";
import BlogPost from "@/lib/BlogPost";

const WEBSITE_URL = "https://www.dignitestudios.com";

export async function GET() {
  await connectDB();
  const posts = await BlogPost.find({ status: "published" })
    .sort({ publishedAt: -1 })
    .limit(50)
    .select("title slug excerpt author publishedAt updatedAt featuredImage categories seo")
    .lean();

  const items = posts
    .map((post) => {
      const desc = (post.seo?.metaDescription || post.excerpt || "").replace(/&/g, "&amp;");
      const title = post.title.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
      const link = `${WEBSITE_URL}/blogs/${post.slug}`;
      const pubDate = post.publishedAt
        ? new Date(post.publishedAt).toUTCString()
        : new Date(post.updatedAt).toUTCString();

      const enclosure = post.featuredImage?.url
        ? `<enclosure url="${post.featuredImage.url}" type="image/jpeg" />`
        : "";

      const categories = (post.categories ?? [])
        .map((c) => `<category>${c}</category>`)
        .join("");

      return `<item>
        <title><![CDATA[${title}]]></title>
        <link>${link}</link>
        <guid isPermaLink="true">${link}</guid>
        <description><![CDATA[${desc}]]></description>
        <pubDate>${pubDate}</pubDate>
        <author>noreply@dignitestudios.com (${post.author?.name ?? "Dignite Studios"})</author>
        ${categories}
        ${enclosure}
      </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Dignite Studios Blog</title>
    <link>${WEBSITE_URL}/blogs</link>
    <description>Insights, tutorials, and updates from the Dignite Studios team.</description>
    <language>en-us</language>
    <managingEditor>hello@dignitestudios.com (Dignite Studios)</managingEditor>
    <webMaster>hello@dignitestudios.com (Dignite Studios)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${WEBSITE_URL}/blogs/rss.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
