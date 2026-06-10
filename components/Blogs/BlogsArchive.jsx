"use client"
import React from 'react'
import { BlogCard } from './BlogCard';
import Subscribe from './Subscribe';
import BlogSearch from './BlogSearch';
import { BlogGridSkeleton } from './BlogSkeleton';

const BlogsArchive = ({ initialPosts = [], loading = false }) => {
  return (
    <section className="flex flex-col items-center gap-[30px] mb-32 py-5">
      {/* Subscribe Section */}
      <Subscribe />

      {/* Content Area */}
      <div className="w-full max-w-[1200px]">
        {/* Loading State */}
        {loading && (
          <BlogGridSkeleton count={6} />
        )}

        {/* Posts Grid */}
        {!loading && initialPosts && initialPosts.length > 0 && (
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {initialPosts.map((post) => (
              <BlogCard key={post.ID} {...post} />
            ))}
          </div>
        )}

        {/* No Posts State */}
        {!loading && (!initialPosts || initialPosts.length === 0) && (
          <div className="text-center py-16">
            <div className="text-gray-500 mb-4">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No blog posts found
            </h3>
            <p className="text-gray-600">
              Check back later for new content.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default BlogsArchive;
