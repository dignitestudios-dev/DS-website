"use client";
import React from "react";
import Link from "next/link";
import { useRelatedPosts } from "@/hooks/useWordPressPost";

/* ─── Shimmer primitive ──────────────────────────────────────────────────── */
function Shimmer({ className = "" }) {
  return (
    <div
      className={`rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 bg-[length:400%_100%] animate-shimmer ${className}`}
    />
  );
}

/* ─── Single card ────────────────────────────────────────────────────────── */
function RelatedCard({ post }) {
  const thumb = post.featured_image ?? `https://placehold.co/600x360/f15c20/ffffff?text=${encodeURIComponent(post.title.slice(0, 20))}`;
  const firstCat = Object.values(post.categories ?? {})[0];

  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden aspect-video bg-gray-100">
        <img
          src={thumb}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.currentTarget.src = `https://placehold.co/600x360/f15c20/ffffff?text=Blog`;
          }}
        />
        {/* Category badge */}
        {firstCat && (
          <span className="absolute top-3 left-3 bg-[#F15C20] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-sm">
            {firstCat.name}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-4">
        <p className="text-xs text-gray-400 mb-2 flex items-center gap-1">
          {/* calendar icon */}
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1" y="3" width="14" height="12" rx="2" stroke="#9ca3af" strokeWidth="1.5"/>
            <path d="M1 7h14" stroke="#9ca3af" strokeWidth="1.5"/>
            <path d="M5 1v4M11 1v4" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric", month: "short", day: "numeric",
          })}
          <span className="mx-1">·</span>
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8" cy="8" r="6.5" stroke="#9ca3af" strokeWidth="1.5"/>
            <path d="M8 5v3.5L10 10" stroke="#9ca3af" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          {post.reading_time} min
        </p>

        <h4 className="font-bold text-[#0C0C0C] text-sm leading-snug mb-3 line-clamp-2 group-hover:text-[#F15C20] transition-colors duration-200">
          {post.title}
        </h4>

        {post.excerpt && (
          <p className="text-xs text-gray-500 leading-relaxed line-clamp-2 mb-4 flex-1">
            {post.excerpt}
          </p>
        )}

        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#F15C20] mt-auto group-hover:gap-2 transition-all duration-200">
          Read More
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="#F15C20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </Link>
  );
}

/* ─── Skeleton cards ─────────────────────────────────────────────────────── */
function SkeletonCard() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 bg-white">
      <Shimmer className="w-full aspect-video" />
      <div className="p-4 space-y-2">
        <Shimmer className="h-3 w-32" />
        <Shimmer className="h-4 w-full" />
        <Shimmer className="h-4 w-4/5" />
        <Shimmer className="h-3 w-20 mt-3" />
      </div>
    </div>
  );
}

/* ─── Main component ─────────────────────────────────────────────────────── */
/**
 * RelatedPosts
 *
 * Props:
 *  - currentPostId {number}  – ID of the current post (excluded from results)
 *  - categories    {object}  – post.categories from WordPress REST API
 *  - tags          {object}  – post.tags from WordPress REST API
 *  - limit         {number}  – max cards to show (default 3)
 */
const RelatedPosts = ({ currentPostId, categories, tags, limit = 3 }) => {
  const { posts, loading } = useRelatedPosts({ currentPostId, categories, tags, limit });

  // If not loading and nothing to show, render nothing
  if (!loading && posts.length === 0) return null;

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 100% 0; }
          100% { background-position: -100% 0; }
        }
        .animate-shimmer { animation: shimmer 1.6s ease-in-out infinite; }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      <section className="py-12">
        {/* Section header */}
        <div className="flex items-center justify-between mb-7">
          <h2 className="text-2xl font-extrabold text-[#0C0C0C] tracking-tight">
            Related Articles
          </h2>
          <Link
            href="/blogs"
            className="text-sm font-semibold text-[#F15C20] hover:text-[#d94e18] transition-colors inline-flex items-center gap-1"
          >
            View All
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="#F15C20" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {loading
            ? [...Array(limit)].map((_, i) => <SkeletonCard key={i} />)
            : posts.map((p) => <RelatedCard key={p.ID} post={p} />)
          }
        </div>
      </section>
    </>
  );
};

export default RelatedPosts;