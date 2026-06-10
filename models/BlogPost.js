import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema({
  title: String,
  slug: String,
  status: { type: String, enum: ['draft', 'published', 'scheduled'], default: 'draft' },
  publishedAt: Date,
  updatedAt: Date,
  createdAt: Date,
  excerpt: String,
  contentHtml: String,
  featuredImage: {
    url: String,
    alt: String
  },
  categories: [String],
  author: {
    name: String,
    avatar: String
  },
  readTime: Number,
  seo: {
    focusKeyword: String,
    seoTitle: String,
    metaDescription: String,
    metaKeywords: String,
    ogTitle: String,
    ogDescription: String,
    ogImage: String,
    twitterTitle: String,
    twitterDescription: String,
    twitterImage: String,
    twitterCard: String,
    canonicalUrl: String,
    robots: {
      index: Boolean,
      follow: Boolean
    },
    jsonLd: String
  }
}, { timestamps: true });

// Prevent model overwrite upon hot reloads in Next.js
export default mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);
