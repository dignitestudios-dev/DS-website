import Link from 'next/link';

export function BlogCard({ ID, image, readTime, title, excerpt, date, slug, URL, author }) {
  // Always use internal link for blog posts
  const postUrl = `/blogs/${slug || ID}`;
  
  return (
    <Link href={postUrl} className="block">
      <div className="group flex flex-col overflow-hidden rounded-lg border border-[#D3D3D8] bg-white transition-shadow duration-300 hover:shadow-lg cursor-pointer">
        {/* Thumbnail */}
        <div className="relative h-[218px] w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full  transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.target.src = 'https://placehold.co/384x218/f15c20/ffffff?text=Blog+Post';
            }}
          />
        </div>
 
        {/* Body */}
        <div className="flex flex-1 flex-col gap-2 px-[25px] py-5">
          {/* Read time */}
          <span className="text-xs font-medium capitalize text-[#F15C20]">
            {readTime}
          </span>
 
          {/* Title */}
          <h3 className="text-[18px] font-bold leading-snug text-[#0C0C0C] line-clamp-2 group-hover:text-[#F15C20] transition-colors">
            {title}
          </h3>
 
          {/* Excerpt */}
          <p className="mt-1 text-[13px] leading-[1.5] text-[#0C0C0C]/70 line-clamp-3">
            {excerpt}
          </p>
 
          {/* Author and Date */}
          <div className="mt-auto pt-4 flex items-center justify-between">
            <span className="text-xs font-medium text-[#0C0C0C]/60">
              By {author}
            </span>
            <span className="text-xs font-medium capitalize text-[#F15C20]">
              📅 {date}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}