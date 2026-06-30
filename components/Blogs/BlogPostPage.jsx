'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { GoDotFill } from 'react-icons/go';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Inter } from 'next/font/google';

const interFont = Inter({
  subsets: ['latin'],
  display: 'swap',
});

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
    const cleanedAttrs = attrs.replace(/\s+id=['"][^'"]*['"]/gi, '');
    return `<h2${cleanedAttrs} id="heading-${idx++}">`;
  });
}

function Breadcrumb({ title }) {
  // const cat = categories?.[0] || 'Blog';
  return (
    <nav className="inline-flex flex-wrap items-center gap-2 rounded-xl bg-[#F7F7F7] px-4 py-3 text-sm text-[#0C0C0C] ">
      <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
      <span className="text-[#0C0C0C]">&gt;</span>
      <Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
      <span className="text-[#0C0C0C]">&gt;</span>
      <span className="text-orange-500 capitalize">{title}</span>
    </nav>
  );
}

function TableOfContents({ headings, activeId }) {
  const tocRef = useRef(null);

  useEffect(() => {
    if (!activeId || !tocRef.current) return;
    const activeEl = tocRef.current.querySelector(`a[href="#${activeId}"]`);
    if (activeEl) {
      activeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeId]);

  return (
    <div className="max-h-[calc(100vh-0rem)] sticky top-0 flex flex-col">
      {headings.length > 0 && (
        <div className="fade-up bg-white rounded-2xl p-6 border-gray-100 flex flex-col min-h-0 ">
          <p className="mb-6 text-[20px] font-medium leading-none text-black shrink-0">
            In this article
          </p>
          <div ref={tocRef} className="space-y-2 overflow-y-auto hide-scrollbar min-h-0 relative">
            {headings.map((h) => {
              const isActive = activeId === h.id;
              return (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`group relative block py-2 pl-4 text-[16px] leading-[1.25] transition-all duration-200 z-10 ${isActive
                    ? 'text-[#F15C20] font-medium'
                    : 'text-black/50 hover:text-black/80 font-normal'
                    }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="active-toc-pill"
                      className="absolute inset-0  border-l-2 border-[#F15C20] -z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {!isActive && (
                    <div className="absolute inset-0 border-l-2 border-transparent group-hover:border-orange-300 transition-colors -z-10" />
                  )}
                  <span className="block relative z-10">{h.text}</span>
                </a>
              )
            })}
          </div>
        </div>
      )}

      <div className="flex flex-col m-6 border border-black/10 rounded-[10px] overflow-hidden fade-up shrink-0">
        <div className="bg-[#F15C20] py-5 px-4 flex items-center">
          <h3 className="text-white font-semibold text-[18px] leading-[22px]">
            Subscribe to our newsletter
          </h3>
        </div>
        <div className="bg-white py-5 px-4 flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-black/5 rounded-lg p-3 text-[16px] leading-[19px] text-[#0C0C0C] outline-none placeholder:text-[#0C0C0C] placeholder:opacity-80 font-light"
          />
          <p className="text-[15px] leading-[18px] text-[#0C0C0C]">
            Get the latest update, blogs and news delivered to your inbox.
          </p>
          <button className="w-full bg-[#F15C20] hover:bg-[#d9521c] transition-colors text-white font-semibold text-[16px] leading-[19px] py-[15px] px-[10px] rounded-[12px]">
            Subscribe Now
          </button>
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
          className={`text-orange-500 text-xl font-light transition-transform duration-300 flex-shrink-0 ${open ? 'rotate-45' : ''
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
      className="
        relative
        w-full
        max-w-[761px]
        h-[240px]
        rounded-[10px]
        bg-[#F15C20]
        overflow-hidden
        flex
        items-center
        justify-center
      "
    >

      {/* INNER CIRCLE SVG BACKGROUND */}
      <div
        className="
          absolute
          -left-[15px]
          -top-[20px]
          w-[318px]
          h-[214px]
          pointer-events-none
        "
      >

        <svg
          width="318"
          height="214"
          viewBox="0 0 318 214"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          <g opacity="0.2">


            <g
              opacity="0.2"
              filter="url(#filter0_d_4532_573)"
            >

              <path
                d="M82.0224 -152.965C126.116 -152.965 168.405 -136.968 199.584 -108.493C230.763 -80.0175 248.279 -41.397 248.279 -1.12708C248.279 39.1428 230.763 77.7633 199.584 106.238C168.405 134.714 126.116 150.711 82.0224 150.711H-63.4524C-68.954 150.711 -74.2311 148.718 -78.1269 145.171C-82.0226 141.623 -84.219 136.809 -84.2345 131.785V-1.12708C-84.2345 -41.397 -66.7182 -80.0175 -35.539 -108.493C-4.35977 -136.968 37.9283 -152.965 82.0224 -152.965Z"
                fill="white"
              />

            </g>



            <path
              d="M151.36 -90.5303C195.454 -90.5303 237.743 -74.5331 268.922 -46.058C300.101 -17.5829 317.617 21.0376 317.617 61.3075V194.219C317.617 199.253 315.428 204.08 311.53 207.64C307.633 211.199 302.347 213.199 296.835 213.199H151.36C107.259 213.199 64.963 197.199 33.7783 168.719C2.5936 140.239 -14.9258 101.611 -14.9258 61.3343C-14.9258 21.0573 2.5936 -17.5701 33.7783 -46.0502C64.963 -74.5303 107.259 -90.5303 151.36 -90.5303Z"
              fill="white"
            />



            <g
              opacity="0.2"
              style={{
                mixBlendMode: "exclusion"
              }}
            >

              <path
                d="M16.1513 149.96C-1.62898 127.342 -12.234 100.683 -14.4971 72.9167C-16.7603 45.15 -10.5938 17.3512 3.32379 -7.42187C17.2414 -32.1949 38.371 -52.9823 64.3883 -67.4973C90.4055 -82.0123 120.302 -89.6925 150.79 -89.6932H151.885C178.772 -89.7293 205.261 -83.7657 229.048 -72.3212C242.428 -49.2532 249.049 -23.4179 248.271 2.67673C247.492 28.7714 239.339 54.2389 224.603 76.607C209.868 98.9751 189.05 117.484 164.172 130.337C139.293 143.189 111.198 149.949 82.6149 149.96H16.1513Z"
                fill="#F15C20"
              />

            </g>



          </g>



          <defs>


            <filter
              id="filter0_d_4532_573"
              x="-100.234"
              y="-156.965"
              width="364.514"
              height="335.676"
              filterUnits="userSpaceOnUse"
            >

              <feFlood
                floodOpacity="0"
              />

              <feOffset dy="12" />

              <feGaussianBlur stdDeviation="8" />


            </filter>


          </defs>



        </svg>

      </div>





      {/* CONTENT */}
      <div
        className="
          relative
          z-10
          flex
          flex-col
          items-center
          gap-[25px]
          px-5
          w-full
        "
      >


        <div
          className="
            flex
            flex-col
            items-center
            gap-[15px]
            text-center
          "
        >

          <h3
            className="
              max-w-[427px]
              text-white
              font-semibold
              text-[28px]
              leading-[110%]
            "
          >

            Stay Ahead Of Productivity &
            <br />
            Tech Trends.

          </h3>



          <p
            className="
              text-white
              opacity-95
              font-medium
              text-[14px]
            "
          >

            Join newsletter, receive the expert Insights Weekly.

          </p>


        </div>





        {/* INPUT */}

        <div
          className="
    w-full
    max-w-[502px]
    h-[64px]
    rounded-[22px]
    bg-white
    p-[4px]
    shadow-[0_0_50px_rgba(241,92,32,0.45)]
  "
        >

          <div
            className="
      h-full
      rounded-[18px]
      bg-[#F2F2F2]
      border
      border-[#FFD4C3]
      flex
      items-center
      justify-between
      px-[15px]
      gap-3
    "
          >


            {/* Input section */}
            <div
              className="
        flex
        items-center
        gap-[15px]
        flex-1
      "
            >

              {/* Search icon */}
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="shrink-0"
              >
                <circle
                  cx="6"
                  cy="6"
                  r="4.5"
                  stroke="#5A5A5B"
                />

                <path
                  d="M10 10L13 13"
                  stroke="#5A5A5B"
                  strokeWidth="1.2"
                />

              </svg>


              <input
                type="email"
                placeholder="Enter your Email Address"
                className="
          w-full
          bg-transparent
          outline-none
          border-none
          text-[#5C5C5C]
          placeholder:text-[#5C5C5C]
          placeholder:font-semibold
          placeholder:text-[12px]
          font-semibold
          text-[12px]
        "
              />


            </div>




            {/* Subscribe Button */}
            <button
              type="button"
              className="
        w-[114px]
        h-[37px]
        rounded-[12px]
        bg-[#F15C20]
        text-white
        flex
        items-center
        justify-center
        gap-[5px]
        text-[10px]
        font-extrabold
        shrink-0
        hover:bg-[#dc4f18]
        transition
      "
            >

              <svg
                width="13"
                height="10"
                viewBox="0 0 13 10"
                fill="none"
              >
                <rect
                  x="1"
                  y="1"
                  width="11"
                  height="8"
                  rx="1"
                  stroke="white"
                  strokeWidth="1"
                />
                <path
                  d="M1 2L6.5 6L12 2"
                  stroke="white"
                />
              </svg>
              Subscribe
            </button>


          </div>

        </div>



      </div>


    </div>
  );
}

export default function BlogPostPage({ post, related = [] }) {
  const [activeId, setActiveId] = useState('');
  const contentRef = useRef(null);

  useEffect(() => {
    if (!post) return;

    const handleScroll = () => {
      // Query the live document directly to avoid any detached DOM node issues
      const headingEls = Array.from(document.querySelectorAll('.blog-content h2[id]'));
      if (!headingEls.length) return;

      const offset = window.innerHeight * 0.4;
      let activeHeading = headingEls[0]?.id;

      for (const el of headingEls) {
        const rect = el.getBoundingClientRect();
        // Only consider elements that are actually rendered and visible
        if (rect.height > 0 && rect.top <= offset) {
          activeHeading = el.id;
        }
      }

      if (activeHeading) {
        setActiveId(activeHeading);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true, capture: true });
    // Initialize
    setTimeout(handleScroll, 100);

    return () => {
      document.removeEventListener('scroll', handleScroll, { capture: true });
    };
  }, [post]);

  if (!post) return null;

  const categories = Object.values(post.categories || {});
  const tags = Object.values(post.tags || {});
  const heroImage = post.image;
  const contentWithoutHeroImage = post.content;
  const headings = useMemo(() => extractHeadings(contentWithoutHeroImage), [contentWithoutHeroImage]);
  const processedContent = useMemo(() => injectHeadingIds(contentWithoutHeroImage), [contentWithoutHeroImage]);
  const readMin = post.readTime || readingTime(post.content);
  return (
    <>
      <style>{`
        main, main * {
          font-family: ${interFont.style.fontFamily} !important;
        }
        .blog-content { color: #1a1a1a; max-width: 761px; }
        .blog-content h2 { font-size: 1.6875rem; font-weight: 700; margin: 2rem 0 1rem; line-height: 2.0625rem; color: #1F222E; scroll-margin-top: 130px; }
        .blog-content h3 { font-size: 1.125rem; font-weight: 700; margin: 1.5rem 0 0.75rem; line-height: 1.75rem; color: #222; }
        .blog-content ul { list-style-type: disc; margin: 1rem 0 1rem 1.5rem; padding-left: 1rem; }
        .blog-content ol { list-style-type: decimal; margin: 1rem 0 1rem 1.5rem; padding-left: 1rem; }
        .blog-content li { margin-bottom: 0.5rem; font-size: 18px; color: #1F222E; line-height: 150%; }
        .blog-content p {
          margin: 0 0 1rem 0;
          width: 100%;
          max-width: 761px;
          height: auto;
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 150%;
          color: #1F222E;
          flex: none;
          order: 1;
          align-self: stretch;
          flex-grow: 0;
        }
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
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <main className="min-h-screen bg-[#fafafa] pb-24 w-[1200px] mx-auto">
        {/* Breadcrumb */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto pr-4 pt-4 pb-2">
            <Breadcrumb title={post.title} />
          </div>
        </div>

        <div className="bg-white pb-10 relative">
          <div className="max-w-7xl mx-auto ">
            {/*
              KEY FIX:
              1. items-start  — columns don't stretch to full height, required for sticky
              2. aside gets self-start — same reason
              3. aside uses sticky (not fixed) so it scrolls naturally with the page
            */}
            <div className="grid grid-cols-1 lg:grid-cols-[761px_1fr] gap-10 items-start justify-center">

              {/* ── MAIN CONTENT ── */}
              <div className="w-full lg:max-w-[761px]">
                {heroImage ? (
                  <div className="fade-up pt-2">
                    {/* {categories[0] && (
                      <span className="inline-block bg-orange-50 text-orange-500 border border-orange-200 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
                        {categories[0].name}
                      </span>
                    )} */}
                    <h1 className="text-xl md:text-3xl font-extrabold text-gray-900 leading-tight mb-6">
                      {post.title}
                    </h1>
                    <div className="relative overflow-hidden rounded-[12px] aspect-video">
                      <img
                        src={heroImage}
                        alt={post.title}
                        className="inset-0 w-full h-full object-cover"
                        style={{ objectPosition: 'center' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                      <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 lg:p-10">
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm font-normal text-white">
                          <span>{formatDate(post.date)}</span>
                          <span className=""><GoDotFill /></span>
                          <span>{readMin} min read</span>
                          <span className=""><GoDotFill /></span>
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

                <article className="w-full lg:max-w-[761px] mt-8">
                  <div
                    ref={contentRef}
                    className="blog-content bg-white pb-6 rounded-3xl fade-up"
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

              {/* ── SIDEBAR (sticky TOC) ── */}
              <aside className="hidden relative lg:block self-stretch w-full">
                <TableOfContents headings={headings} activeId={activeId} />
              </aside>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}