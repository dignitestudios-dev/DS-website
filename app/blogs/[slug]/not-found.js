import Link from 'next/link';
import { IoArrowBack, IoSearchOutline } from 'react-icons/io5';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        {/* 404 Icon */}
        <div className="mb-8">
          <div className="mx-auto w-24 h-24 bg-[#F15C20] rounded-full flex items-center justify-center">
            <span className="text-white text-3xl font-bold">404</span>
          </div>
        </div>

        {/* Error Message */}
        <h1 className="text-3xl font-bold text-[#0C0C0C] mb-4">
          Blog Post Not Found
        </h1>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          The blog post you're looking for doesn't exist or may have been moved. 
          Let's get you back to reading our latest insights.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#F15C20] text-white rounded-lg hover:bg-[#E14A1A] transition-colors"
          >
            <IoArrowBack />
            Back to Blog
          </Link>
          
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#F15C20] text-[#F15C20] rounded-lg hover:bg-[#F15C20] hover:text-white transition-colors"
          >
            <IoSearchOutline />
            Search Posts
          </Link>
        </div>

        {/* Popular Posts Suggestion */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">
            Or explore our popular topics:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link href="/blogs?search=mobile app development" className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[#F15C20] hover:text-white transition-colors">
              Mobile App Development
            </Link>
            <Link href="/blogs?search=react native" className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[#F15C20] hover:text-white transition-colors">
              React Native
            </Link>
            <Link href="/blogs?search=ui ux design" className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[#F15C20] hover:text-white transition-colors">
              UI/UX Design
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}