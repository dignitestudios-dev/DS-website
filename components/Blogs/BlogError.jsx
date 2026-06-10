"use client";
import React from "react";
import Link from "next/link";

/**
 * BlogError
 *
 * Props:
 *  - error   {string}   – error message string
 *  - onRetry {function} – callback to re-fetch (optional)
 *  - title   {string}   – headline shown to the user (optional)
 */
const BlogError = ({
  error = "Something went wrong.",
  onRetry,
  title = "Unable to load blog post",
}) => {
  const isNotFound =
    error?.toLowerCase().includes("not found") ||
    error?.toLowerCase().includes("404");

  return (
    <>
      <style>{`
        @keyframes floatUp {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }
        .float-anim { animation: floatUp 3s ease-in-out infinite; }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeIn 0.6s ease forwards; }
        .fade-in-delay { animation: fadeIn 0.6s ease 0.15s forwards; opacity: 0; }
        .fade-in-delay-2 { animation: fadeIn 0.6s ease 0.3s forwards; opacity: 0; }
      `}</style>

      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">

          {/* Illustration */}
          <div className="float-anim mb-6 inline-block">
            {isNotFound ? (
              /* 404 ghost */
              <svg
                width="120" height="120" viewBox="0 0 120 120"
                fill="none" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="60" cy="60" r="56" fill="#FEF3EE" />
                <path
                  d="M38 75 C38 55 82 55 82 75 L82 88 Q60 100 38 88 Z"
                  fill="#F15C20" opacity="0.15"
                />
                <path
                  d="M38 72 C38 52 82 52 82 72 L82 86 Q60 98 38 86 Z"
                  fill="#F15C20"
                />
                {/* eyes */}
                <circle cx="48" cy="62" r="4" fill="white" />
                <circle cx="72" cy="62" r="4" fill="white" />
                <circle cx="49" cy="63" r="2" fill="#1a1a1a" />
                <circle cx="73" cy="63" r="2" fill="#1a1a1a" />
                {/* squiggle mouth */}
                <path
                  d="M50 72 Q55 68 60 72 Q65 76 70 72"
                  stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"
                />
                {/* arms */}
                <path d="M38 70 L28 60" stroke="#F15C20" strokeWidth="3" strokeLinecap="round" />
                <path d="M82 70 L92 60" stroke="#F15C20" strokeWidth="3" strokeLinecap="round" />
                {/* 404 text above */}
                <text x="60" y="42" textAnchor="middle" fontSize="18" fontWeight="800"
                  fill="#F15C20" fontFamily="Georgia, serif">404</text>
              </svg>
            ) : (
              /* Generic error warning */
              <svg
                width="120" height="120" viewBox="0 0 120 120"
                fill="none" xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="60" cy="60" r="56" fill="#FEF3EE" />
                <path
                  d="M60 30 L95 90 H25 Z"
                  fill="#F15C20" opacity="0.15"
                />
                <path
                  d="M60 32 L93 88 H27 Z"
                  fill="none" stroke="#F15C20" strokeWidth="3"
                  strokeLinejoin="round"
                />
                <rect x="57.5" y="52" width="5" height="20" rx="2.5" fill="#F15C20" />
                <circle cx="60" cy="78" r="3" fill="#F15C20" />
              </svg>
            )}
          </div>

          {/* Headline */}
          <h1 className="fade-in text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 leading-tight">
            {title}
          </h1>

          {/* Sub-copy */}
          <p className="fade-in-delay text-gray-500 text-sm leading-relaxed mb-8">
            {isNotFound
              ? "We couldn't find the post you're looking for. It may have been moved or removed."
              : error}
          </p>

          {/* Actions */}
          <div className="fade-in-delay-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/blogs"
              className="inline-flex items-center gap-2 bg-[#F15C20] text-white font-semibold px-6 py-3 rounded-full text-sm hover:bg-[#d94e18] transition-colors shadow-md shadow-orange-100"
            >
              {/* arrow icon */}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 3L5 8L10 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Browse All Posts
            </Link>

            {!isNotFound && onRetry && (
              <button
                onClick={onRetry}
                className="inline-flex items-center gap-2 border border-gray-200 text-gray-600 font-medium px-6 py-3 rounded-full text-sm hover:bg-gray-50 transition-colors"
              >
                {/* retry icon */}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.65 2.35A8 8 0 1 0 14 8h-2a6 6 0 1 1-1.06-3.4L9 6h5V1l-1.35 1.35Z"
                    fill="#6b7280"
                  />
                </svg>
                Try Again
              </button>
            )}

            <Link
              href="/"
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors underline underline-offset-2"
            >
              Go Home
            </Link>
          </div>

          {/* Debug detail (dev only) */}
          {process.env.NODE_ENV === "development" && !isNotFound && (
            <details className="mt-8 text-left">
              <summary className="text-xs text-gray-400 cursor-pointer hover:text-gray-600">
                Error details (dev only)
              </summary>
              <pre className="mt-2 bg-gray-50 rounded-lg p-3 text-xs text-red-500 overflow-auto">
                {error}
              </pre>
            </details>
          )}
        </div>
      </div>
    </>
  );
};

export default BlogError;