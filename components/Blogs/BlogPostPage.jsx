'use client';

import { useState, useEffect, useRef } from 'react';
import { GoDotFill } from 'react-icons/go';
import Link from 'next/link';

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

function Breadcrumb({ categories }) {
  const cat = categories?.[0] || 'Blog';
  return (
    <nav className="inline-flex flex-wrap items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm text-gray-700 shadow-sm">
      <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
      <span className="text-gray-400">&gt;</span>
      <Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
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
  const thumb = post.image || '/default-blog-image.jpg';
  const cats = Object.values(post.categories || {});
  return (
    <Link
      href={`/blog/${post.slug}`}
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
    </Link>
  );
}

function CTABanner() {
  return (
    <div
      className="rounded-2xl p-8 my-10 text-center relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #e54a1a 0%, #e54a1a 50%, #e54a1a 100%)' }}
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

export default function BlogPostPage({ post, related = [] }) {
  const [activeId, setActiveId] = useState('');
  const contentRef = useRef(null);

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

  if (!post) return null;

  const categories = Object.values(post.categories || {});
  const tags = Object.values(post.tags || {});
  const heroImage = post.image;
  const contentWithoutHeroImage = post.content;
  const headings = extractHeadings(contentWithoutHeroImage);
  const processedContent = injectHeadingIds(contentWithoutHeroImage);
  const readMin = post.readTime || readingTime(post.content);

  return (
    <>
      <style>{`
        .blog-content { font-family: 'Inter', sans-serif; color: #1a1a1a; max-width: 761px; }
        .blog-content h2 { font-size: 1.6875rem; font-weight: 700; margin: 2rem 0 1rem; line-height: 2.0625rem; color: #111; }
        .blog-content h3 { font-size: 1.125rem; font-weight: 700; margin: 1.5rem 0 0.75rem; line-height: 1.75rem; color: #222; }
        .blog-content p { margin: 0 0 1.25rem; line-height: 1.8; font-size: 1.125rem; }
        .blog-content ul, .blog-content ol { margin: 0 0 1rem 1.5rem; line-height: 1.8; font-size: 0.97rem; }
        .blog-content li { margin-bottom: 0.4rem; }
        .blog-content a { color: #f97316; text-decoration: underline; }
        .blog-content img { max-width: 100%; border-radius: 12px; margin: 1.5rem 0; }
        .blog-content blockquote { border-left: 4px solid #f97316; padding-left: 1rem; margin: 1.5rem 0; font-style: italic; color: #555; }
        .blog-content pre { background: #1f2937; color: #f9fafb; padding: 1rem; border-radius: 0.5rem; overflow-x: auto; margin-bottom: 1.5rem; }
        .blog-content code { background: #f3f4f6; color: #ef4444; padding: 0.2rem 0.4rem; border-radius: 0.25rem; font-size: 0.875em; }
        .blog-content pre code { background: none; color: inherit; padding: 0; }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
        .fade-up { animation: fadeUp 0.5s ease forwards; }
      `}</style>

      <main className="min-h-screen bg-[#fafafa]">
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 pt-4 pb-4">
            <Breadcrumb categories={categories.map((c) => c.name)} />
          </div>
        </div>

        <div className="bg-white pb-0 relative">
          <div className="max-w-7xl mx-auto px-4 mt-4">
            <div className="grid grid-cols-1 lg:grid-cols-[761px_341px] gap-10 items-start justify-center">
              <div className="w-full lg:max-w-[761px]">
                {heroImage ? (
                  <div className="relative overflow-hidden rounded-[32px] fade-up aspect-video">
                    <img
                      src={heroImage}
                      alt={post.title}
                      className="inset-0 w-full h-full object-cover"
                      style={{ objectPosition: 'center' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 lg:p-10">
                      <div className="max-w-4xl">
                        {categories[0] && (
                          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1 font-bold text-orange-500 shadow-lg text-xs uppercase tracking-wider">
                            {categories[0].name}
                          </span>
                        )}
                        <h1 className="text-2xl md:text-4xl font-extrabold leading-tight text-white mb-4">
                          {post.title}
                        </h1>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-medium text-white/90">
                          <span>{formatDate(post.date)}</span>
                          <span className="text-white/60"><GoDotFill /></span>
                          <span>{readMin} min read</span>
                          <span className="text-white/60"><GoDotFill /></span>
                          <span>By {post.author?.name || 'Dignite Studios'}</span>
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
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                      {post.title}
                    </h1>
                    <AuthorCard author={post.author} date={post.date} readMin={readMin} />
                  </div>
                )}
              </div>

              <aside className="hidden lg:block">
                <TableOfContents headings={headings} activeId={activeId} />
              </aside>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-10 bg-[#fafafa]">
          <article className="w-full lg:max-w-[761px]">
            <div
              ref={contentRef}
              className="blog-content bg-white p-6 md:p-10 rounded-3xl fade-up shadow-sm border border-gray-100"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />

            <CTABanner />

            {related.length > 0 && (
              <div className="mt-12 fade-up">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-6 px-2">Related Articles</h2>
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
