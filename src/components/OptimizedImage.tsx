import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  priority = false,
  width,
  height
}) => {
  // Generate srcset for different screen sizes
  const baseName = src.replace(/\.[^/.]+$/, ''); // Remove extension
  const extension = src.split('.').pop();

  const srcSet = [
    `${baseName}-400w.${extension} 400w`,
    `${baseName}-800w.${extension} 800w`,
    `${baseName}-1200w.${extension} 1200w`,
    `${baseName}-1600w.${extension} 1600w`
  ].join(', ');

  return (
    <picture>
      {/* WebP format for modern browsers */}
      <source
        srcSet={srcSet.replace(new RegExp(extension!, 'g'), 'webp')}
        sizes={sizes}
        type="image/webp"
      />
      
      {/* Fallback format */}
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        className={className}
        loading={priority ? 'eager' : loading}
        fetchPriority={priority ? 'high' : 'auto'}
        width={width}
        height={height}
        style={{ 
          maxWidth: '100%', 
          height: 'auto',
          aspectRatio: width && height ? `${width}/${height}` : undefined
        }}
      />
    </picture>
  );
};