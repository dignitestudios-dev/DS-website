"use client";
import React, { useState, useEffect } from 'react';
import { IoChevronDown } from 'react-icons/io5';

const BlogFilters = ({ onCategoryChange, onTagChange, activeCategory = '', activeTag = '' }) => {
  const [categories, setCategories] = useState([]);
  const [showCategories, setShowCategories] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch('/api/wordpress/categories');
      const data = await response.json();
      setCategories(data.categories || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCategorySelect = (categorySlug) => {
    onCategoryChange(categorySlug === activeCategory ? '' : categorySlug);
    setShowCategories(false);
  };

  if (loading) {
    return (
      <div className="flex gap-4">
        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-10 w-32 bg-gray-200 rounded animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-4 items-center">
      {/* Categories Dropdown */}
      <div className="relative">
        <button
          onClick={() => setShowCategories(!showCategories)}
          className={`flex items-center gap-2 px-4 py-2 border rounded-lg text-sm transition-colors ${
            activeCategory 
              ? 'border-[#F15C20] text-[#F15C20] bg-orange-50' 
              : 'border-gray-300 text-gray-700 hover:border-[#F15C20]'
          }`}
        >
          {activeCategory ? 
            categories.find(cat => cat.slug === activeCategory)?.name || 'Category' 
            : 'All Categories'
          }
          <IoChevronDown className={`transition-transform ${showCategories ? 'rotate-180' : ''}`} />
        </button>

        {showCategories && (
          <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
            <button
              onClick={() => handleCategorySelect('')}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                !activeCategory ? 'text-[#F15C20] bg-orange-50' : 'text-gray-700'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategorySelect(category.slug)}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center justify-between ${
                  activeCategory === category.slug ? 'text-[#F15C20] bg-orange-50' : 'text-gray-700'
                }`}
              >
                <span>{category.name}</span>
                <span className="text-xs text-gray-500">({category.post_count})</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Clear Filters */}
      {(activeCategory || activeTag) && (
        <button
          onClick={() => {
            onCategoryChange('');
            onTagChange('');
          }}
          className="text-sm text-[#F15C20] hover:underline"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
};

export default BlogFilters;