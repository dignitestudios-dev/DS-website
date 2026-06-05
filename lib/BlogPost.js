import mongoose from "mongoose";

const SeoSchema = new mongoose.Schema(
  {
    focusKeyword: String,
    seoTitle: String,
    metaDescription: String,
    ogTitle: String,
    ogDescription: String,
    ogImage: String,
    twitterTitle: String,
    twitterDescription: String,
    twitterImage: String,
    twitterCard: { type: String, default: "summary_large_image" },
    canonicalUrl: String,
    robots: {
      index: { type: Boolean, default: true },
      follow: { type: Boolean, default: true },
    },
    jsonLd: mongoose.Schema.Types.Mixed,
    seoScore: Number,
    readabilityScore: Number,
  },
  { _id: false }
);

const BlogPostSchema = new mongoose.Schema(
  {
    title: String,
    slug: { type: String, unique: true },
    content: mongoose.Schema.Types.Mixed,
    contentHtml: String,
    excerpt: String,
    featuredImage: { url: String, alt: String },
    categories: [String],
    tags: [String],
    author: { name: String, avatar: String },
    status: { type: String, default: "draft" },
    publishedAt: Date,
    scheduledAt: Date,
    seo: SeoSchema,
    readTime: { type: Number, default: 1 },
  },
  { timestamps: true }
);

const BlogPost =
  mongoose.models.BlogPost ?? mongoose.model("BlogPost", BlogPostSchema);

export default BlogPost;
