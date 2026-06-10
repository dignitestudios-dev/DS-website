"use client";
import React from 'react';

const BlogPagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  loading = false,
  showInfo = true,
  found = 0,
  perPage = 6 
}) => {
  if (totalPages <= 1) return null;

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...');
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages);
    } else {
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  const handlePageClick = (page) => {
    if (page !== '...' && page !== currentPage && !loading) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1 && !loading) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages && !loading) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Pagination Info */}
      {showInfo && (
        <div className="text-sm text-gray-600">
          Showing {((currentPage - 1) * perPage) + 1} to {Math.min(currentPage * perPage, found)} of {found} posts
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex items-center gap-1">
        {/* Previous Button */}
        <button
          onClick={handlePrevious}
          disabled={currentPage === 1 || loading}
          className={`flex h-[33px] px-3 items-center justify-center gap-1 rounded-[1.5px] border text-[13px] transition-colors ${
            currentPage === 1 || loading
              ? 'border-gray-200 text-gray-400 cursor-not-allowed'
              : 'border-[#CCCCCC] text-[#0C0C0C]/70 hover:border-[#F15C20] hover:text-[#F15C20]'
          }`}
        >
          <svg width="6" height="9" viewBox="0 0 6 9" fill="none" className="rotate-180">
            <path
              d="M1 1L5 4.5L1 8"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Prev
        </button>

        {/* Page Numbers */}
        {visiblePages.map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(page)}
            disabled={loading}
            className={`flex h-[33px] w-[33px] items-center justify-center rounded-[2px] text-[13px] transition-colors ${
              page === currentPage
                ? 'bg-[#F15C20] text-white'
                : page === '...'
                ? 'border border-[#CCCCCC] text-[#0C0C0C]/70 cursor-default'
                : loading
                ? 'border border-gray-200 text-gray-400 cursor-not-allowed'
                : 'border border-[#CCCCCC] text-[#0C0C0C]/70 hover:border-[#F15C20] hover:text-[#F15C20]'
            }`}
          >
            {page === '...' ? (
              <span className="flex gap-[2px]">
                <span className="h-[2px] w-[2px] rounded-full bg-current" />
                <span className="h-[2px] w-[2px] rounded-full bg-current" />
                <span className="h-[2px] w-[2px] rounded-full bg-current" />
              </span>
            ) : (
              page
            )}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages || loading}
          className={`flex h-[33px] px-3 items-center justify-center gap-1 rounded-[1.5px] border text-[13px] transition-colors ${
            currentPage === totalPages || loading
              ? 'border-gray-200 text-gray-400 cursor-not-allowed'
              : 'border-[#CCCCCC] text-[#0C0C0C]/70 hover:border-[#F15C20] hover:text-[#F15C20]'
          }`}
        >
          Next
          <svg width="6" height="9" viewBox="0 0 6 9" fill="none">
            <path
              d="M1 1L5 4.5L1 8"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Loading Indicator */}
      {loading && (
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#F15C20]"></div>
          Loading posts...
        </div>
      )}
    </div>
  );
};

export default BlogPagination;