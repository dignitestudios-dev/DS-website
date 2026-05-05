"use client";
import React from 'react';
import Link from 'next/link';
import { IoArrowBack, IoCalendarOutline, IoPersonOutline, IoTimeOutline, IoShareSocialOutline } from 'react-icons/io5';
import { FaFacebook, FaTwitter, FaLinkedin, FaCopy } from 'react-icons/fa';
import RelatedPosts from './RelatedPosts';

const BlogPostDetail = ({ post }) => {
  if (!post) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post.title);
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    if (shareUrls[platform]) {
      window.open(shareUrls[platform], '_blank', 'width=600,height=400');
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    // You could add a toast notification here
  };

  return (
    <>
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-8">
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 text-[#F15C20] hover:text-[#E14A1A] transition-colors"
          >
            <IoArrowBack />
            Back to Blog
          </Link>
        </div>

        {/* Featured Image */}
        {post.featured_image && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-[400px] object-cover"
              onError={(e) => {
                e.target.src = 'https://placehold.co/800x400/f15c20/ffffff?text=Blog+Post';
              }}
            />
          </div>
        )}

        {/* Post Header */}
        <header className="mb-8">
          {/* Categories */}
          {Object.keys(post.categories).length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {Object.values(post.categories).map((category) => (
                <span
                  key={category.ID}
                  className="px-3 py-1 bg-[#F15C20] text-white text-sm rounded-full"
                >
                  {category.name}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C0C0C] mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <IoPersonOutline />
              <span>By {post.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <IoCalendarOutline />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <IoTimeOutline />
              <span>{post.reading_time} min read</span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
            <span className="flex items-center gap-2 text-gray-600">
              <IoShareSocialOutline />
              Share:
            </span>
            <button
              onClick={() => handleShare('facebook')}
              className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
              aria-label="Share on Facebook"
            >
              <FaFacebook size={18} />
            </button>
            <button
              onClick={() => handleShare('twitter')}
              className="p-2 text-blue-400 hover:bg-blue-50 rounded-full transition-colors"
              aria-label="Share on Twitter"
            >
              <FaTwitter size={18} />
            </button>
            <button
              onClick={() => handleShare('linkedin')}
              className="p-2 text-blue-700 hover:bg-blue-50 rounded-full transition-colors"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin size={18} />
            </button>
            <button
              onClick={copyToClipboard}
              className="p-2 text-gray-600 hover:bg-gray-50 rounded-full transition-colors"
              aria-label="Copy link"
            >
              <FaCopy size={18} />
            </button>
          </div>
        </header>

        {/* Post Content */}
        <div 
          className="prose prose-lg max-w-none mb-12
            prose-headings:text-[#0C0C0C] prose-headings:font-bold
            prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8
            prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-6
            prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-5
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-[#F15C20] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-[#0C0C0C] prose-strong:font-semibold
            prose-ul:my-4 prose-ol:my-4
            prose-li:text-gray-700 prose-li:mb-2
            prose-blockquote:border-l-4 prose-blockquote:border-[#F15C20] 
            prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
            prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded
            prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg
            prose-img:rounded-lg prose-img:shadow-md
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Tags */}
        {Object.keys(post.tags).length > 0 && (
          <div className="mb-8 pt-6 border-t border-gray-200">
            <h3 className="text-lg font-semibold mb-3">Tags:</h3>
            <div className="flex flex-wrap gap-2">
              {Object.values(post.tags).map((tag) => (
                <span
                  key={tag.ID}
                  className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        {post.author.description && (
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              {post.author.avatar && (
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-16 h-16 rounded-full"
                />
              )}
              <div>
                <h3 className="text-lg font-semibold mb-2">About {post.author.name}</h3>
                <p className="text-gray-600 leading-relaxed">{post.author.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#F15C20] to-[#FF8F62] rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Build Your Next Project?</h3>
          <p className="mb-6 opacity-90">
            Let's discuss how we can help bring your mobile app idea to life with our expert development services.
          </p>
          <Link
            href="/contact-us"
            className="inline-block bg-white text-[#F15C20] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </article>

      {/* Related Posts */}
      <div className="max-w-6xl mx-auto px-4">
        <RelatedPosts 
          currentPostId={post.ID}
          categories={post.categories}
          tags={post.tags}
          limit={3}
        />
      </div>
    </>
  );
};

export default BlogPostDetail;