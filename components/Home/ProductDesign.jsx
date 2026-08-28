"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { GoClock } from "react-icons/go";
import { getPaginatedBlogs } from "@/actions/blogActions";

const ProductDesign = () => {
  const [insights, setInsights] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const data = await getPaginatedBlogs(currentPage, 5);
      if (data && data.blogs) {
        setInsights(data.blogs);
        setTotalPages(data.totalPages);
      }
      setLoading(false);
    };
    fetchBlogs();
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <section
      className="py-36 w-full bg-[#0A0A0A] px-6 md:px-12 lg:px-24  [clip-path:ellipse(350%_100%_at_50%_100%)]
    sm:[clip-path:ellipse(350%_100%_at_50%_100%)]
    md:[clip-path:ellipse(200%_100%_at_50%_100%)]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-bold mb-6 text-white leading-tight">
            Insights, Ideas and Industry Trends
          </h2>
          <p className="font-extralight max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed">
            Get practical insights into app development, product strategy, UI and UX, emerging technologies and startup growth. Our articles simply break down complex topics to help you analyze options, make smarter decisions and avoid common development mistakes.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64 text-white">
            <p>Loading insights...</p>
          </div>
        ) : insights.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5 h-full">
              <Link href={insights[0].url}>
                <BlogCard post={insights[0]} isFeatured />
              </Link>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mt-12 lg:mt-0">
              {insights.slice(1).map((post) => (
                <Link key={post.id || post.slug} href={post.url}>
                  <BlogCard post={post} />
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center text-white">No insights available.</div>
        )}

        {/* Pagination Controls */}
        {/* {!loading && totalPages > 1 && (
          <div className="flex justify-center items-center gap-6 mt-16">
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                currentPage === 1
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                  : "bg-[#F15C20] text-white hover:bg-[#d84e18]"
              }`}
            >
              Previous
            </button>
            <span className="text-gray-400 font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                currentPage === totalPages
                  ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                  : "bg-[#F15C20] text-white hover:bg-[#d84e18]"
              }`}
            >
              Next
            </button>
          </div>
        )} */}
      </div>
    </section>
  );
};

const BlogCard = ({ post, isFeatured }) => {
  return (
    <div
      className={`flex flex-col group cursor-pointer ${isFeatured ? "h-full" : ""}`}
    >
      <div
        className={`relative overflow-hidden rounded-3xl aspect-video w-full`}
      >
        <Image
          src={post.image}
          alt={post.title}
          width={1200}
          height={630}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {isFeatured && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        )}
      </div>

      <div
        className={`flex flex-col flex-grow ${isFeatured ? "mt-8" : "mt-5"}`}
      >
        <h3
          className={`${isFeatured ? "text-2xl md:text-3xl" : "text-lg md:text-xl"} font-bold text-white line-clamp-2 leading-snug group-hover:text-[#F15C20] transition-colors duration-300`}
        >
          {post.title}
        </h3>

        {isFeatured && post.description && (
          <p className="text-gray-400 mt-4 line-clamp-7 font-light text-base leading-relaxed">
            {post.description}
          </p>
        )}

        <div
          className={`flex items-center gap-2 text-gray-500 mt-auto ${isFeatured ? "pt-8" : "pt-4"}`}
        >
          <GoClock className="text-[#F15C20]" />
          <span className="text-sm font-medium">{post.date}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductDesign;
