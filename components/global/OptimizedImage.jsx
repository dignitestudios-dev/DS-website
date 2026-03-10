import Image from 'next/image';

const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  priority = false,
  quality = 75,
  ...props 
}) => {
  const imageLoader = ({ src, width, quality }) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <Image
      loader={imageLoader}
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      quality={quality}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      loading={priority ? 'eager' : 'lazy'}
      {...props}
    />
  );
};

export default OptimizedImage;