import React, { useState } from 'react';
import { LazyImage } from '@/components/LazyImage';

interface SEOOptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
  placeholder?: string;
  title?: string;
  loading?: 'lazy' | 'eager';
}

export const SEOOptimizedImage: React.FC<SEOOptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  placeholder,
  title,
  loading = 'lazy'
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // For critical images, use regular img with eager loading
  if (priority) {
    return (
      <div className={`relative ${className}`}>
        <img
          src={src}
          alt={alt}
          title={title}
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width={width}
          height={height}
          sizes={sizes}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          style={{ 
            aspectRatio: width && height ? `${width}/${height}` : undefined
          }}
        />
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-muted animate-pulse rounded" />
        )}
        {imageError && (
          <div className="absolute inset-0 bg-muted flex items-center justify-center rounded">
            <span className="text-muted-foreground text-sm">Image unavailable</span>
          </div>
        )}
      </div>
    );
  }

  // For non-critical images, use lazy loading
  return (
    <LazyImage
      src={src}
      alt={alt}
      className={className}
      placeholder={placeholder}
      width={width}
      height={height}
    />
  );
};