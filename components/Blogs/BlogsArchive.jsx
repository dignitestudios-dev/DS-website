"use client"
import React from 'react'
import { BlogCard } from './BlogCard';
import Subscribe from './Subscribe';
import BlogSearch from './BlogSearch';
import BlogPagination from './BlogPagination';
import { BlogGridSkeleton } from './BlogSkeleton';
import BlogError from './BlogError';
import { useWordPressPosts } from '@/hooks/useWordPressPosts';

const BlogsArchive = ({ initialPosts = null }) => {
  const {
    posts,
    pagination,
    filters,
    loading,
    error,
    goToPage,
    searchPosts,
    refreshPosts,
  } = useWordPressPosts({
    per_page: 6,
  });

  // Use initial posts if available and no search/filter is active
  const displayPosts = (initialPosts && !filters.search && !filters.category && !filters.tag && pagination.current_page === 1) 
    ? initialPosts 
    : posts;

  const displayPagination = (initialPosts && !filters.search && !filters.category && !filters.tag && pagination.current_page === 1)
    ? {
        current_page: 1,
        total_pages: Math.ceil((initialPosts?.length || 0) / 6),
        found: initialPosts?.length || 0,
        per_page: 6,
        has_more: (initialPosts?.length || 0) > 6
      }
    : pagination;

  return (
    <section className="flex flex-col items-center gap-[30px] mb-32 py-5">
      {/* Subscribe Section */}
      <Subscribe  />

      <div className="w-full max-w-[1200px] flex flex-col gap-6">

        {(filters.search || filters.category || filters.tag) && (
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Active filters:</span>
            {filters.search && (
              <span className="px-2 py-1 bg-[#F15C20] text-white text-xs rounded-full">
                Search: {filters.search}
              </span>
            )}
            {filters.category && (
              <span className="px-2 py-1 bg-[#F15C20] text-white text-xs rounded-full">
                Category: {filters.category}
              </span>
            )}
            {filters.tag && (
              <span className="px-2 py-1 bg-[#F15C20] text-white text-xs rounded-full">
                Tag: {filters.tag}
              </span>
            )}
            <button
              onClick={() => window.location.reload()}
              className="text-xs text-[#F15C20] hover:underline ml-2"
            >
              Clear all
            </button>
          </div>
        )}
      </div>

      {/* Content Area */}
      <div className="w-full max-w-[1200px]">
        {/* Loading State */}
        {loading && (
          <BlogGridSkeleton count={6} />
        )}

        {/* Error State */}
        {error && !loading && (
          <BlogError 
            error={error}
            onRetry={refreshPosts}
            title="Unable to load blog posts"
          />
        )}

        {/* Posts Grid */}
        {!loading && !error && displayPosts && displayPosts.length > 0 && (
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayPosts.map((post) => (
              <BlogCard key={post.ID} {...post} />
            ))}
          </div>
        )}

        {/* No Posts State */}
        {!loading && !error && (!displayPosts || displayPosts.length === 0) && (
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
              {filters.search ? 'Try adjusting your search terms.' : 'Check back later for new content.'}
            </p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {!loading && !error && displayPosts && displayPosts.length > 0 && displayPagination.total_pages > 1 && (
        <BlogPagination
          currentPage={displayPagination.current_page}
          totalPages={displayPagination.total_pages}
          onPageChange={goToPage}
          loading={loading}
          found={displayPagination.found}
          perPage={displayPagination.per_page}
        />
      )}
    </section>
  );
}

export default BlogsArchive

