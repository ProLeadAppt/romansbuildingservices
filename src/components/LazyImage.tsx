import React from 'react';
import { useLazyLoading } from '@/hooks/useLazyLoading';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  blurDataURL?: string;
  width?: number;
  height?: number;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder = '/images/placeholder-blur.webp',
  blurDataURL,
  width,
  height
}) => {
  const { imgRef, isInView, isLoaded, setIsLoaded } = useLazyLoading();

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/Blur Image */}
      {!isLoaded && (
        <img
          src={blurDataURL || placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-105"
          style={{ filter: 'blur(10px)' }}
        />
      )}
      
      {/* Main Image */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
          width={width}
          height={height}
          style={{ 
            aspectRatio: width && height ? `${width}/${height}` : undefined
          }}
        />
      )}
      
      {/* Loading Spinner */}
      {isInView && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/20">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      )}
    </div>
  );
};