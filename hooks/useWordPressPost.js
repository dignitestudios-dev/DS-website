"use client";
import { useState, useEffect, useCallback } from "react";

const WORDPRESS_API_BASE =
  "https://public-api.wordpress.com/rest/v1/sites/dignitestudioscom.wordpress.com";

/**
 * Strips HTML tags and returns plain text
 */
function stripHtml(html = "") {
  return html.replace(/<[^>]*>/g, "").trim();
}

/**
 * Calculates estimated reading time in minutes
 */
function calcReadingTime(html = "") {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

/**
 * Normalises a raw WordPress REST post object into a clean shape
 * consumed by BlogPostDetail / RelatedPosts.
 */
function normalisePost(raw) {
  if (!raw) return null;
  return {
    ID: raw.ID,
    slug: raw.slug,
    title: raw.title ?? "",
    content: raw.content ?? "",
    excerpt: stripHtml(raw.excerpt ?? "").substring(0, 180),
    date: raw.date,
    modified: raw.modified,
    featured_image: raw.featured_image || raw.post_thumbnail?.URL || null,
    reading_time: calcReadingTime(raw.content),
    author: {
      name: raw.author?.name ?? "Dignite Studios",
      avatar: raw.author?.avatar_URL ?? null,
      description: raw.author?.description ?? null,
    },
    categories: raw.categories ?? {},
    tags: raw.tags ?? {},
  };
}

/**
 * Hook: useWordPressPost
 *
 * @param {string} slug  – post slug from the URL
 * @returns {{ post, loading, error, refreshPost }}
 *
 * Usage:
 *   const { post, loading, error, refreshPost } = useWordPressPost(slug);
 */
export function useWordPressPost(slug) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPost = useCallback(async () => {
    if (!slug) {
      setError("No slug provided");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${WORDPRESS_API_BASE}/posts/slug:${slug}`, {
        // Next.js App Router cache — revalidate every 10 minutes
        next: { revalidate: 600 },
      });

      if (res.status === 404) {
        throw new Error("Post not found");
      }

      if (!res.ok) {
        throw new Error(`Failed to fetch post (${res.status})`);
      }

      const raw = await res.json();
      setPost(normalisePost(raw));
    } catch (err) {
      setError(err.message ?? "Something went wrong");
      setPost(null);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  return { post, loading, error, refreshPost: fetchPost };
}

/**
 * Hook: useRelatedPosts
 *
 * Fetches posts that share categories/tags with the current post.
 *
 * @param {{ currentPostId: number, categories: object, tags: object, limit?: number }}
 * @returns {{ posts, loading }}
 */
export function useRelatedPosts({ currentPostId, categories, tags, limit = 3 }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currentPostId) return;

    let cancelled = false;

    async function fetchRelated() {
      setLoading(true);

      try {
        // Use the first available category slug for filtering
        const firstCategorySlug = Object.values(categories ?? {})[0]?.slug;
        const query = firstCategorySlug
          ? `&category=${encodeURIComponent(firstCategorySlug)}`
          : "";

        const res = await fetch(
          `${WORDPRESS_API_BASE}/posts?number=${limit + 1}&order_by=date&order=DESC${query}`,
          { next: { revalidate: 600 } }
        );

        if (!res.ok) throw new Error("Failed to fetch related posts");

        const data = await res.json();

        if (!cancelled) {
          const filtered = (data.posts ?? [])
            .filter((p) => p.ID !== currentPostId)
            .slice(0, limit)
            .map(normalisePost);

          setPosts(filtered);
        }
      } catch {
        if (!cancelled) setPosts([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchRelated();
    return () => {
      cancelled = true;
    };
  }, [currentPostId, limit]);

  return { posts, loading };
}