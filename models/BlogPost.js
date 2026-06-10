import mongoose from 'mongoose';

const BlogPostSchema = new mongoose.Schema({
  title: String,
  slug: String,
  status: {
    type: String,
    enum: ['draft', 'published', 'scheduled'],
    default: 'draft'
  },
  publishedAt: Date,
  updatedAt: Date,
  createdAt: Date,
}, { timestamps: true });

// Prevent model overwrite upon hot reloads in Next.js
export default mongoose.models.BlogPost || mongoose.model('BlogPost', BlogPostSchema);
