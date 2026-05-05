"use client";
import React, { useState, useEffect } from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';

const BlogSearch = ({ onSearch, initialValue = '', placeholder = "Search blog posts..." }) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);
  const [isSearching, setIsSearching] = useState(false);

  // Debounce search to avoid too many API calls
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm !== initialValue) {
        setIsSearching(true);
        onSearch(searchTerm);
        setTimeout(() => setIsSearching(false), 500);
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, onSearch, initialValue]);

  const handleClear = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="relative">
        <CiSearch 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" 
          size={20} 
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F15C20] focus:border-transparent transition-all duration-200"
        />
        {searchTerm && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <IoClose size={20} />
          </button>
        )}
      </div>
      
      {isSearching && (
        <div className="absolute top-full left-0 right-0 mt-1 p-2 bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#F15C20]"></div>
            Searching...
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogSearch;