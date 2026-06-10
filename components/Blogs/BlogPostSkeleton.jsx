"use client";
import React from "react";

/* ─── Primitive shimmer bar ─────────────────────────────────────────────── */
function Shimmer({ className = "" }) {
  return (
    <div
      className={`rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:400%_100%] animate-shimmer ${className}`}
    />
  );
}

/* ─── Full-page skeleton that mirrors BlogPostDetail's layout ────────────── */
const BlogPostSkeleton = () => {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
        .animate-shimmer {
          animation: shimmer 1.6s ease-in-out infinite;
        }
      `}</style>

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Back link */}
        <div className="mb-8">
          <Shimmer className="h-5 w-28" />
        </div>

        {/* Featured image */}
        <Shimmer className="mb-8 w-full h-[400px] rounded-2xl" />

        {/* Header block */}
        <header className="mb-8 space-y-4">
          {/* Category pills */}
          <div className="flex gap-2">
            <Shimmer className="h-7 w-24 rounded-full" />
            <Shimmer className="h-7 w-16 rounded-full" />
          </div>

          {/* Title */}
          <Shimmer className="h-10 w-4/5" />
          <Shimmer className="h-10 w-3/5" />

          {/* Meta row */}
          <div className="flex gap-6 pt-2">
            <Shimmer className="h-5 w-32" />
            <Shimmer className="h-5 w-28" />
            <Shimmer className="h-5 w-20" />
          </div>

          {/* Share row */}
          <div className="flex items-center gap-3 py-4 border-b border-gray-100">
            <Shimmer className="h-5 w-14" />
            {[...Array(4)].map((_, i) => (
              <Shimmer key={i} className="h-9 w-9 rounded-full" />
            ))}
          </div>
        </header>

        {/* Body paragraphs */}
        <div className="space-y-3 mb-12">
          {[100, 95, 88, 100, 72, 90, 100, 60, 85, 100, 78, 93].map((w, i) => (
            <Shimmer key={i} className="h-4" style={{ width: `${w}%` }} />
          ))}

          {/* Mid-content image placeholder */}
          <Shimmer className="my-6 w-full h-56 rounded-xl" />

          {/* Section heading */}
          <Shimmer className="h-7 w-64 mt-8 mb-2" />

          {[100, 90, 82, 100, 70, 88].map((w, i) => (
            <Shimmer key={`b-${i}`} className="h-4" style={{ width: `${w}%` }} />
          ))}
        </div>

        {/* Tags row */}
        <div className="mb-8 pt-6 border-t border-gray-100">
          <Shimmer className="h-5 w-12 mb-3" />
          <div className="flex flex-wrap gap-2">
            {[80, 100, 64, 90, 72].map((w, i) => (
              <Shimmer key={i} className="h-7 rounded-full" style={{ width: `${w}px` }} />
            ))}
          </div>
        </div>

        {/* Author bio card */}
        <div className="bg-gray-50 rounded-2xl p-6 mb-8 flex items-start gap-4">
          <Shimmer className="w-16 h-16 rounded-full flex-shrink-0" />
          <div className="flex-1 space-y-2">
            <Shimmer className="h-5 w-40" />
            <Shimmer className="h-4 w-full" />
            <Shimmer className="h-4 w-5/6" />
          </div>
        </div>

        {/* CTA banner */}
        <Shimmer className="w-full h-44 rounded-2xl" />
      </article>

      {/* Related posts skeleton */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <Shimmer className="h-8 w-48 mb-6" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-gray-100">
              <Shimmer className="w-full h-48" />
              <div className="p-4 space-y-2">
                <Shimmer className="h-4 w-24" />
                <Shimmer className="h-5 w-full" />
                <Shimmer className="h-5 w-4/5" />
                <Shimmer className="h-4 w-16 mt-2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPostSkeleton;