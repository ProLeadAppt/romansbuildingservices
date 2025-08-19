import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface UniversalImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  placeholder?: string;
  sizes?: string;
  onLoad?: () => void;
  onError?: () => void;
  lazy?: boolean;
  quality?: 'auto' | 'low' | 'medium' | 'high';
  aspectRatio?: string;
}

export const UniversalImage: React.FC<UniversalImageProps> = ({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  placeholder,
  sizes = '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw',
  onLoad,
  onError,
  lazy = true,
  quality = 'auto',
  aspectRatio
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority || !lazy);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (priority || !lazy) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: '100px' 
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [priority, lazy]);

  // Generate responsive image sources
  const generateSrcSet = (baseSrc: string): string => {
    // For lovable-uploads, generate multiple sizes
    if (baseSrc.includes('lovable-uploads')) {
      const ext = baseSrc.split('.').pop()?.toLowerCase();
      const basePath = baseSrc.replace(/\.[^/.]+$/, '');
      
      return [
        `${basePath}-400w.${ext} 400w`,
        `${basePath}-800w.${ext} 800w`,
        `${basePath}-1200w.${ext} 1200w`,
        `${basePath}-1600w.${ext} 1600w`
      ].join(', ');
    }
    
    // For other images, return original
    return baseSrc;
  };

  // Generate WebP source
  const generateWebPSrc = (baseSrc: string): string => {
    if (baseSrc.includes('lovable-uploads')) {
      return baseSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    }
    return baseSrc;
  };

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const handleError = () => {
    setHasError(true);
    onError?.();
  };

  const containerStyle = {
    aspectRatio: aspectRatio || (width && height ? `${width}/${height}` : undefined)
  };

  return (
    <div 
      ref={containerRef}
      className={cn('relative overflow-hidden', className)}
      style={containerStyle}
    >
      {/* Placeholder/Loading state */}
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          {placeholder ? (
            <img
              src={placeholder}
              alt=""
              className="w-full h-full object-cover opacity-50 blur-sm"
              aria-hidden="true"
            />
          ) : (
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          )}
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="w-12 h-12 mx-auto mb-2 opacity-50">
              <svg fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-xs">Image unavailable</span>
          </div>
        </div>
      )}

      {/* Main image with responsive sources */}
      {isInView && (
        <picture>
          {/* WebP format for modern browsers */}
          <source
            srcSet={generateSrcSet(generateWebPSrc(src))}
            sizes={sizes}
            type="image/webp"
          />
          
          {/* Fallback format */}
          <img
            ref={imgRef}
            src={src}
            srcSet={generateSrcSet(src)}
            sizes={sizes}
            alt={alt}
            className={cn(
              'w-full h-full object-cover transition-opacity duration-300',
              isLoaded ? 'opacity-100' : 'opacity-0'
            )}
            loading={priority ? 'eager' : 'lazy'}
            fetchPriority={priority ? 'high' : 'auto'}
            width={width}
            height={height}
            onLoad={handleLoad}
            onError={handleError}
          />
        </picture>
      )}
    </div>
  );
};

// Preset components for common use cases
export const HeroImage: React.FC<Omit<UniversalImageProps, 'priority' | 'lazy' | 'quality'>> = (props) => (
  <UniversalImage {...props} priority={true} lazy={false} quality="high" />
);

export const LazyImage: React.FC<Omit<UniversalImageProps, 'lazy'>> = (props) => (
  <UniversalImage {...props} lazy={true} />
);

export const CriticalImage: React.FC<Omit<UniversalImageProps, 'priority' | 'lazy'>> = (props) => (
  <UniversalImage {...props} priority={true} lazy={false} />
);