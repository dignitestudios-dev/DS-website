'use client';

import { useState, useEffect, useRef } from 'react';
import { GoDotFill } from 'react-icons/go';

const WORDPRESS_API_BASE =
  'https://public-api.wordpress.com/rest/v1/sites/dignitestudioscom.wordpress.com';

function stripHtml(html = '') {
  return html.replace(/<[^>]*>/g, '').trim();
}

function readingTime(html = '') {
  const words = stripHtml(html).split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function extractHeadings(html = '') {
  const matches = [...html.matchAll(/<h2[^>]*>(.*?)<\/h2>/gi)];
  return matches.map((m, i) => ({
    id: `heading-${i}`,
    level: 2,
    text: stripHtml(m[1]),
  }));
}

function injectHeadingIds(html = '') {
  let idx = 0;
  return html.replace(/<h2([^>]*)>/gi, (_m, attrs) => {
    return `<h2${attrs} id="heading-${idx++}">`;
  });
}

function extractFirstImageSrc(html = '') {
  const match = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
  return match?.[1] || '';
}

function removeFirstImage(html = '') {
  return html.replace(/<figure[^>]*>[\s\S]*?<img[^>]*>[\s\S]*?<\/figure>|<img[^>]*>/i, '');
}

function Skeleton({ className = '', style = {} }) {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
      style={{ animationDuration: '1.5s', ...style }}
    />
  );
}

function Breadcrumb({ categories }) {
  const cat = categories?.[0] || 'Blog';
  return (
    <nav className="inline-flex flex-wrap items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm text-gray-700 shadow-sm">
      <a href="/" className="hover:text-orange-500 transition-colors">Home</a>
      <span className="text-gray-400">&gt;</span>
      <a href="/blogs" className="hover:text-orange-500 transition-colors">Blog</a>
      <span className="text-gray-400">&gt;</span>
      <span className="text-orange-500">{cat}</span>
    </nav>
  );
}

function TableOfContents({ headings, activeId }) {
  if (!headings.length) return null;
  return (
    <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto">
      <div className="fade-up bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <p className="mb-6 text-[32px] font-semibold leading-none text-black">
          In this article
        </p>
        <div className="space-y-2">
          {headings.map((h) => (
            <a
              key={h.id}
              href={`#${h.id}`}
              className={`group block border-l-4 py-2 pl-5 text-[15px] font-semibold leading-[1.25] transition-all duration-200 ${
                activeId === h.id
                  ? 'border-orange-500 text-orange-500'
                  : 'border-transparent text-black/35 hover:border-orange-300 hover:text-black/70'
              }`}
            >
              <span className="block">{h.text}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function AuthorCard({ author, date, readMin }) {
  return (
    <div className="flex items-center gap-3 my-5">
      {author?.avatar_URL ? (
        <img
          src={author.avatar_URL}
          alt={author.name}
          className="w-10 h-10 rounded-full object-cover border-2 border-orange-100"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold text-sm">
          {(author?.name || 'D')[0].toUpperCase()}
        </div>
      )}
      <div>
        <p className="font-semibold text-gray-800 text-sm">{author?.name || 'Dignite Studios'}</p>
        <p className="text-xs text-gray-400">
          {formatDate(date)} &nbsp;•&nbsp; {readMin} min read
        </p>
      </div>
    </div>
  );
}

function ShareBar({ title, slug }) {
  const url = encodeURIComponent(`https://www.dignitestudios.com/blogs/${slug}`);
  const text = encodeURIComponent(title || '');
  const links = [
    {
      label: 'Twitter',
      href: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
    },
    {
      label: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="flex items-center gap-2 my-5">
      <span className="text-xs text-gray-400 uppercase tracking-widest mr-1">Share</span>
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          title={l.label}
          className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all duration-200"
        >
          {l.icon}
        </a>
      ))}
    </div>
  );
}

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-100 rounded-xl overflow-hidden mb-3 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-medium text-gray-800 text-sm pr-4">{question}</span>
        <span
          className={`text-orange-500 text-xl font-light transition-transform duration-300 flex-shrink-0 ${
            open ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-4 pb-4 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3 bg-white">
          {answer}
        </div>
      )}
    </div>
  );
}

function RelatedCard({ post }) {
  const thumb =
    post.featured_image || post.post_thumbnail?.URL || '/default-blog-image.jpg';
  const cats = Object.values(post.categories || {});
  return (
    <a
      href={`/blogs/${post.slug}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative overflow-hidden aspect-video">
        <img
          src={thumb}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {cats[0] && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
            {cats[0].name}
          </span>
        )}
      </div>
      <div className="p-4">
        <p className="text-xs text-gray-400 mb-1">{formatDate(post.date)}</p>
        <h4 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-orange-500 transition-colors line-clamp-2">
          {post.title}
        </h4>
      </div>
    </a>
  );
}

function CTABanner() {
  return (
    <div
      className="rounded-2xl p-8 my-10 text-center relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #e54a1a 0%, #e54a1a 50%, #e54a1a 100%)',
      }}
    >
      <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-orange-500 opacity-10" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-orange-400 opacity-10" />
      <h3 className="text-white font-bold text-xl mb-2 relative z-10">
        Stay Ahead Of Productivity &amp; Tech Trends.
      </h3>
      <p className="text-gray-400 text-sm mb-5 relative z-10">
        Get expert insights delivered to your inbox
      </p>
      <div className="flex max-w-sm mx-auto gap-2 relative z-10">
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 rounded-lg text-sm bg-white/10 text-white placeholder-gray-400 border border-white/20 outline-none focus:border-orange-400"
        />
        <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-5 py-2 rounded-lg transition-colors whitespace-nowrap">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default function BlogPostPage({ slug }) {
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeId, setActiveId] = useState('');
  const contentRef = useRef(null);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    setError(null);

    fetch(`${WORDPRESS_API_BASE}/posts/slug:${slug}`)
      .then((r) => {
        if (!r.ok) throw new Error('Post not found');
        return r.json();
      })
      .then((data) => {
        setPost(data);
        const firstCat = Object.keys(data.categories || {})[0];
        const catQuery = firstCat ? `&category=${firstCat}` : '';
        return fetch(
          `${WORDPRESS_API_BASE}/posts?number=3&order_by=date&order=DESC${catQuery}`
        );
      })
      .then((r) => r.json())
      .then((data) => {
        setRelated((data.posts || []).filter((p) => p.slug !== slug).slice(0, 3));
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [slug]);

  useEffect(() => {
    if (!post) return;
    const headingEls = contentRef.current?.querySelectorAll('h2[id]') || [];
    if (!headingEls.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    headingEls.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [post]);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center px-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Post Not Found</h2>
          <p className="text-gray-500 mb-6">{error}</p>
          <a
            href="/blogs"
            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Back to Blog
          </a>
        </div>
      </div>
    );
  }

  const categories = Object.values(post?.categories || {});
  const tags = Object.values(post?.tags || {});
  const contentFirstImage = post ? extractFirstImageSrc(post.content) : '';
  const featuredImage = post?.featured_image || post?.post_thumbnail?.URL;
  const heroImage = featuredImage || contentFirstImage;
  const contentWithoutHeroImage =
    post && !featuredImage ? removeFirstImage(post.content) : post?.content || '';
  const headings = post ? extractHeadings(contentWithoutHeroImage) : [];
  const processedContent = post ? injectHeadingIds(contentWithoutHeroImage) : '';
  const readMin = post ? readingTime(post.content) : 0;

  const faqItems =
    tags.length >= 2
      ? tags.slice(0, 4).map((t) => ({
          question: `Who owns the legal rights to ${t.name}?`,
          answer:
            'The legal rights to the technology developed by a digital studio are typically owned by the client after full payment, unless otherwise specified in the contract. Always review the agreement terms carefully.',
        }))
      : [];

  return (
    <>
      <style>{`
        .blog-content { font-family: 'Inter', sans-serif; color: #1a1a1a; max-width: 761px; }
        .blog-content h2 { font-size: 1.6875rem; font-weight: 700; margin: 2rem 0 1rem; line-height: 2.0625rem; color: #111; font-family: 'Inter', sans-serif; }
        .blog-content h3 { font-size: 1.125rem; font-weight: 700; margin: 1.5rem 0 0.75rem; line-height: 1.75rem; color: #222; font-family: 'Inter', sans-serif; }
        .blog-content p { margin: 0 0 1.25rem; line-height: 1.8; font-size: 1.125rem; }
        .blog-content ul, .blog-content ol { margin: 0 0 1rem 1.5rem; line-height: 1.8; font-size: 0.97rem; }
        .blog-content li { margin-bottom: 0.4rem; }
        .blog-content a { color: #f97316; text-decoration: underline; }
        .blog-content img { max-width: 100%; border-radius: 12px; margin: 1.5rem 0; }
        .blog-content blockquote { border-left: 4px solid #f97316; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #555; }
        .blog-content strong { color: #111; }
        .blog-content .wp-block-image { margin: 1.5rem 0; }
        
        /* WordPress Block Columns Styling */
        .blog-content .wp-block-columns { margin: 2rem 0; }
        .blog-content .wp-block-column { width: 100%; }
        
        /* WordPress Details/FAQ Styling - Matching Existing Design */
        .blog-content .wp-block-details {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-bottom: 1rem;
          padding: 1rem 0;
          border-radius: 1rem 0 0 1rem;
          cursor: pointer;
          background-color: #F6F6F6;
          color: black;
          transition: all 0.3s ease;
          position: relative;
        }
        
        @media (min-width: 768px) {
          .blog-content .wp-block-details {
            padding: 3.5rem 0;
            border-radius: 9999px 0 0 9999px;
          }
        }
        
        .blog-content .wp-block-details[open] {
          background-color: #F15C20;
          color: white;
        }
        
        .blog-content .wp-block-details summary {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          font-weight: 500;
          outline: none;
          position: relative;
          list-style: none;
          padding-left: 2rem;
          padding-right: 1rem;
          font-size: 1rem;
          line-height: 1.25rem;
          text-align: left;
        }
        
        @media (min-width: 768px) {
          .blog-content .wp-block-details summary {
            font-size: 1.125rem;
            line-height: 1.75rem;
          }
        }
        
        @media (min-width: 1024px) {
          .blog-content .wp-block-details summary {
            font-size: 1.25rem;
            line-height: 1.75rem;
            padding-left: 4rem;
          }
        }
        
        .blog-content .wp-block-details summary::-webkit-details-marker {
          display: none;
        }
        
        .blog-content .wp-block-details summary::after {
          content: '+';
          position: absolute;
          right: -1.25rem;
          top: 50%;
          transform: translateY(-50%);
          height: 3rem;
          width: 3rem;
          padding: 0.5rem;
          border-radius: 9999px;
          background-color: white;
          color: #929292;
          font-size: 1.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 0 15px 0 rgba(12, 12, 12, 0.25);
          transition: all 0.3s ease;
        }
        
        @media (min-width: 768px) {
          .blog-content .wp-block-details summary::after {
            right: -1.5rem;
          }
        }
        
        .blog-content .wp-block-details[open] summary::after {
          content: '−';
          color: #F15C20;
          box-shadow: 0 0 15px 0 rgba(241, 92, 32, 0.25);
        }
        
        .blog-content .wp-block-details .wp-block-paragraph {
          margin-top: 0.5rem;
          padding-left: 2rem;
          padding-right: 4rem;
          font-size: 0.75rem;
          line-height: 1.5;
          margin-bottom: 0;
        }
        
        @media (min-width: 1024px) {
          .blog-content .wp-block-details .wp-block-paragraph {
            padding-left: 4rem;
            font-size: 1rem;
          }
        }
        
        .blog-content .wp-block-details .wp-block-paragraph a {
          text-decoration: underline;
        }
        
        .blog-content .wp-block-details[open] .wp-block-paragraph a {
          color: white;
        }
        
        .blog-content .wp-block-details:not([open]) .wp-block-paragraph a {
          color: #F15C20;
        }
        
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.5s ease forwards; }
        @keyframes shimmer { 0%,100%{opacity:1} 50%{opacity:0.4} }
        .animate-pulse { animation: shimmer 1.5s ease-in-out infinite; }
      `}</style>

      <main className="min-h-screen">
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 pt-4">
            {loading ? (
              <Skeleton className="h-12 w-72 rounded-xl" />
            ) : (
              <Breadcrumb categories={categories.map((c) => c.name)} />
            )}
          </div>
        </div>

        <div className="bg-white pb-0 relative">
          <div className="max-w-7xl mx-auto px-4 mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-[761px_341px] gap-10 items-start justify-center">
              <div className="w-full lg:max-w-[761px]">
                {loading ? (
                  <Skeleton className="w-full rounded-2xl" style={{ paddingTop: '42%' }} />
                ) : heroImage ? (
                  <div className="relative  overflow-hidden rounded-[32px] fade-up ">
                    <img
                      src={heroImage}
                      alt={post?.title}
                      className=" inset-0  w-full h-full object-contain"
                      style={{ objectPosition: 'center top' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
                    <div className="absolute backdrop-blur-md  inset-x-0 bottom-0 p-5 md:p-8 lg:p-10">
                      <div className="max-w-4xl ">
                        {categories[0] && (
                          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-2 py-1  font-medium text-orange-500 shadow-lg text-xs">
                            <span className="h-3 text-xs w-3 rounded-full bg-orange-500" />
                            {categories[0].name}
                          </span>
                        )}
                        <h1 className="text-xl font-extrabold leading-tight text-white md:text-2xl">
                          {post?.title}
                        </h1>
                        <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/90 md:text-sm">
                          <span>{formatDate(post?.date)}</span>
                          <span className="text-white/60"><GoDotFill /></span>
                          <span>{readMin} min read</span>
                          <span className="text-white/60"><GoDotFill /></span>
                          <span>By {post?.author?.name || 'Dignite Studios'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="max-w-3xl fade-up pt-2">
                    {categories[0] && (
                      <span className="inline-block bg-orange-50 text-orange-500 border border-orange-200 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                        {categories[0].name}
                      </span>
                    )}
                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-3">
                      {post?.title}
                    </h1>
                    <AuthorCard author={post?.author} date={post?.date} readMin={readMin} />
                  </div>
                )}
              </div>

              <aside className="hidden lg:block">
                {loading ? (
                  <div className="space-y-5">
                    <Skeleton className="h-8 w-40" />
                    {[...Array(6)].map((_, i) => (
                      <Skeleton key={i} className={`h-5 ${i % 2 === 0 ? 'w-full' : 'w-4/5'}`} />
                    ))}
                  </div>
                ) : (
                  <TableOfContents headings={headings} activeId={activeId} />
                )}
              </aside>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10">
          <article className=" w-full lg:max-w-[761px]">
            {loading ? (
              <div className="space-y-4">
                {[...Array(8)].map((_, i) => (
                  <Skeleton key={i} className={`h-4 ${i % 3 === 2 ? 'w-3/4' : 'w-full'}`} />
                ))}
              </div>
            ) : (
              <div
                ref={contentRef}
                className="blog-content bg-white rounded-2xl fade-up"
                dangerouslySetInnerHTML={{ __html: processedContent }}
              />
            )}

            {/* {!loading && <ShareBar title={post?.title} slug={slug} />} */}
            {!loading && <CTABanner />}

            {!loading && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6 fade-up">
                {tags.map((t) => (
                  <span
                    key={t.slug}
                    className="text-xs border border-gray-200 text-gray-500 px-3 py-1 rounded-full hover:border-orange-300 hover:text-orange-500 cursor-pointer transition-colors"
                  >
                    #{t.name}
                  </span>
                ))}
              </div>
            )}

            {!loading && faqItems.length > 0 && (
              <div className="mt-10 fade-up">
                <h2 className="text-xl font-extrabold text-gray-900 mb-5">
                  Frequently Asked Questions
                </h2>
                {faqItems.map((item, i) => (
                  <FAQItem key={i} question={item.question} answer={item.answer} />
                ))}
              </div>
            )}

            {!loading && related.length > 0 && (
              <div className="mt-12 fade-up">
                <h2 className="text-xl font-extrabold text-gray-900 mb-6">Related Articles</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                  {related.map((p) => (
                    <RelatedCard key={p.ID} post={p} />
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </main>
    </>
  );
}
