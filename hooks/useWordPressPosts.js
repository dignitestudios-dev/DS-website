"use client";
import { useState, useEffect, useCallback } from 'react';

export const useWordPressPosts = (initialOptions = {}) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    current_page: 1,
    total_pages: 0,
    per_page: 6,
    found: 0,
    has_more: false,
  });

  const [filters, setFilters] = useState({
    page: initialOptions.page || 1,
    per_page: initialOptions.per_page || 6,
    search: initialOptions.search || '',
    category: initialOptions.category || '',
    tag: initialOptions.tag || '',
  });

  const fetchPosts = useCallback(async (options = {}) => {
    setLoading(true);
    setError(null);

    try {
      const queryParams = new URLSearchParams({
        ...filters,
        ...options,
      });

      const response = await fetch(`/api/wordpress/posts?${queryParams.toString()}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.error) {
        throw new Error(data.message || 'Failed to fetch posts');
      }

      setPosts(data.posts || []);
      setPagination({
        current_page: data.current_page,
        total_pages: data.total_pages,
        per_page: data.per_page,
        found: data.found,
        has_more: data.has_more,
      });

    } catch (err) {
      console.error('Error fetching posts:', err);
      setError(err.message);
      setPosts([]);
      setPagination({
        current_page: 1,
        total_pages: 0,
        per_page: 6,
        found: 0,
        has_more: false,
      });
    } finally {
      setLoading(false);
    }
  }, [filters]);

  // Update filters and fetch posts
  const updateFilters = useCallback((newFilters) => {
    const updatedFilters = { ...filters, ...newFilters };
    setFilters(updatedFilters);
    fetchPosts(updatedFilters);
  }, [filters, fetchPosts]);

  // Pagination functions
  const goToPage = useCallback((page) => {
    updateFilters({ page });
  }, [updateFilters]);

  const nextPage = useCallback(() => {
    if (pagination.has_more) {
      goToPage(pagination.current_page + 1);
    }
  }, [pagination.has_more, pagination.current_page, goToPage]);

  const prevPage = useCallback(() => {
    if (pagination.current_page > 1) {
      goToPage(pagination.current_page - 1);
    }
  }, [pagination.current_page, goToPage]);

  // Search function
  const searchPosts = useCallback((searchTerm) => {
    updateFilters({ search: searchTerm, page: 1 });
  }, [updateFilters]);

  // Filter by category
  const filterByCategory = useCallback((category) => {
    updateFilters({ category, page: 1 });
  }, [updateFilters]);

  // Filter by tag
  const filterByTag = useCallback((tag) => {
    updateFilters({ tag, page: 1 });
  }, [updateFilters]);

  // Clear all filters
  const clearFilters = useCallback(() => {
    const clearedFilters = {
      page: 1,
      per_page: filters.per_page,
      search: '',
      category: '',
      tag: '',
    };
    setFilters(clearedFilters);
    fetchPosts(clearedFilters);
  }, [filters.per_page, fetchPosts]);

  // Refresh posts
  const refreshPosts = useCallback(() => {
    fetchPosts();
  }, [fetchPosts]);

  // Initial fetch
  useEffect(() => {
    fetchPosts();
  }, []);

  return {
    // Data
    posts,
    pagination,
    filters,
    
    // States
    loading,
    error,
    
    // Actions
    goToPage,
    nextPage,
    prevPage,
    searchPosts,
    filterByCategory,
    filterByTag,
    clearFilters,
    refreshPosts,
    updateFilters,
  };
};