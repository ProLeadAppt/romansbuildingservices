// Image optimization utilities for performance and SEO

interface ImageOptimizationConfig {
  formats: string[];
  breakpoints: number[];
  quality: number;
  lazyLoadThreshold: number;
  preloadCritical: boolean;
}

export const imageConfig: ImageOptimizationConfig = {
  formats: ['webp', 'jpg', 'png'],
  breakpoints: [400, 800, 1200, 1600],
  quality: 85,
  lazyLoadThreshold: 100, // pixels
  preloadCritical: true
};

// Generate responsive image URLs
export const generateResponsiveImageUrls = (baseSrc: string) => {
  const urls: Record<string, string[]> = {};
  
  imageConfig.formats.forEach(format => {
    urls[format] = imageConfig.breakpoints.map(width => {
      const ext = format === 'webp' ? 'webp' : baseSrc.split('.').pop();
      const basePath = baseSrc.replace(/\.[^/.]+$/, '');
      return `${basePath}-${width}w.${ext}`;
    });
  });
  
  return urls;
};

// Generate srcSet attribute
export const generateSrcSet = (baseSrc: string, format?: string): string => {
  if (!baseSrc.includes('lovable-uploads')) {
    return baseSrc;
  }
  
  const targetFormat = format || baseSrc.split('.').pop()?.toLowerCase();
  const basePath = baseSrc.replace(/\.[^/.]+$/, '');
  
  return imageConfig.breakpoints
    .map(width => `${basePath}-${width}w.${targetFormat} ${width}w`)
    .join(', ');
};

// Get WebP version of image
export const getWebPVersion = (src: string): string => {
  if (src.includes('lovable-uploads')) {
    return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  }
  return src;
};

// Preload critical images
export const preloadCriticalImages = (images: string[]) => {
  if (!imageConfig.preloadCritical) return;
  
  images.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    
    // Add WebP version if available
    const webpSrc = getWebPVersion(src);
    if (webpSrc !== src) {
      link.type = 'image/webp';
      link.href = webpSrc;
    }
    
    document.head.appendChild(link);
  });
};

// Image loading performance metrics
export const trackImagePerformance = (src: string, loadTime: number) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    performance.mark(`image-loaded-${src}`);
    console.log(`Image ${src} loaded in ${loadTime}ms`);
  }
};

// Validate image accessibility
export const validateImageAccessibility = (alt: string, src: string): boolean => {
  if (!alt || alt.trim().length === 0) {
    console.warn(`Image ${src} is missing alt text for accessibility`);
    return false;
  }
  
  if (alt.length < 10) {
    console.warn(`Image ${src} has very short alt text: "${alt}"`);
    return false;
  }
  
  return true;
};

// Image SEO score calculation
export const calculateImageSEOScore = (image: {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  lazy?: boolean;
  responsive?: boolean;
}): number => {
  let score = 0;
  
  // Alt text quality (40 points)
  if (image.alt && image.alt.length > 10) score += 40;
  else if (image.alt) score += 20;
  
  // Descriptive filename (20 points)
  const filename = image.src.split('/').pop() || '';
  if (filename.includes('-') && !filename.match(/^\d+/)) score += 20;
  
  // Title attribute (10 points)
  if (image.title) score += 10;
  
  // Caption (10 points)
  if (image.caption) score += 10;
  
  // Lazy loading (10 points)
  if (image.lazy !== false) score += 10;
  
  // Responsive (10 points)
  if (image.responsive !== false) score += 10;
  
  return Math.min(score, 100);
};