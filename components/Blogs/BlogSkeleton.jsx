const BlogCardSkeleton = () => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-[#D3D3D8] bg-white animate-pulse">
      {/* Thumbnail Skeleton */}
      <div className="h-[218px] w-full bg-gray-200"></div>
      
      {/* Body Skeleton */}
      <div className="flex flex-1 flex-col gap-2 px-[25px] py-5">
        {/* Read time skeleton */}
        <div className="h-3 w-16 bg-gray-200 rounded"></div>
        
        {/* Title skeleton */}
        <div className="space-y-2">
          <div className="h-5 bg-gray-200 rounded w-full"></div>
          <div className="h-5 bg-gray-200 rounded w-3/4"></div>
        </div>
        
        {/* Excerpt skeleton */}
        <div className="mt-1 space-y-2">
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-full"></div>
          <div className="h-3 bg-gray-200 rounded w-2/3"></div>
        </div>
        
        {/* Author and Date skeleton */}
        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="h-3 w-20 bg-gray-200 rounded"></div>
          <div className="h-3 w-24 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
};

const BlogGridSkeleton = ({ count = 6 }) => {
  return (
    <div className="grid w-full max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }, (_, index) => (
        <BlogCardSkeleton key={index} />
      ))}
    </div>
  );
};

export { BlogCardSkeleton, BlogGridSkeleton };