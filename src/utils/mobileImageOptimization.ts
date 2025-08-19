/**
 * Mobile Image Optimization Utilities
 * Handles device-specific image loading and optimization
 */

export interface ImageConfig {
  src: string;
  alt: string;
  priority?: boolean;
  lazy?: boolean;
  sizes?: string;
  srcSet?: string;
}

export interface DeviceCapabilities {
  supportsWebP: boolean;
  supportsAvif: boolean;
  connectionSpeed: 'slow' | 'medium' | 'fast';
  devicePixelRatio: number;
  viewportWidth: number;
  isRetina: boolean;
}

/**
 * Detect device capabilities for image optimization
 */
export const getDeviceCapabilities = (): DeviceCapabilities => {
  // Check WebP support
  const supportsWebP = (() => {
    const canvas = document.createElement('canvas');
    canvas.width = 1;
    canvas.height = 1;
    return canvas.toDataURL('image/webp').indexOf('webp') > -1;
  })();

  // Check AVIF support (simplified check)
  const supportsAvif = (() => {
    const canvas = document.createElement('canvas');
    try {
      return canvas.toDataURL('image/avif').indexOf('avif') > -1;
    } catch {
      return false;
    }
  })();

  // Estimate connection speed
  const connection = (navigator as any).connection;
  let connectionSpeed: 'slow' | 'medium' | 'fast' = 'fast';
  
  if (connection) {
    if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
      connectionSpeed = 'slow';
    } else if (connection.effectiveType === '3g') {
      connectionSpeed = 'medium';
    }
  }

  return {
    supportsWebP,
    supportsAvif,
    connectionSpeed,
    devicePixelRatio: window.devicePixelRatio || 1,
    viewportWidth: window.innerWidth,
    isRetina: window.devicePixelRatio >= 2
  };
};

/**
 * Generate optimized image URLs based on device capabilities
 */
export const optimizeImageUrl = (
  src: string, 
  capabilities: DeviceCapabilities,
  targetWidth?: number
): string => {
  // For Lovable uploads, return as-is (they're already optimized)
  if (src.includes('/lovable-uploads/')) {
    return src;
  }

  // For other images, apply optimization logic
  let optimizedSrc = src;

  // Add responsive sizing if target width is specified
  if (targetWidth && capabilities.devicePixelRatio > 1) {
    const scaledWidth = Math.round(targetWidth * capabilities.devicePixelRatio);
    optimizedSrc = src.replace(/\.(jpg|jpeg|png)$/i, `_${scaledWidth}w.$1`);
  }

  return optimizedSrc;
};

/**
 * Generate responsive srcSet for images
 */
export const generateSrcSet = (
  src: string,
  capabilities: DeviceCapabilities,
  widths: number[] = [480, 768, 1024, 1280, 1920]
): string => {
  if (src.includes('/lovable-uploads/')) {
    // For Lovable uploads, provide basic 1x and 2x variants
    return `${src} 1x, ${src} 2x`;
  }

  // Generate multiple sizes for other images
  return widths
    .map(width => {
      const optimizedUrl = optimizeImageUrl(src, capabilities, width);
      return `${optimizedUrl} ${width}w`;
    })
    .join(', ');
};

/**
 * Generate responsive sizes attribute
 */
export const generateSizes = (
  breakpoints: { [key: string]: string } = {
    '(max-width: 768px)': '100vw',
    '(max-width: 1200px)': '50vw',
    default: '33vw'
  }
): string => {
  const sizeEntries = Object.entries(breakpoints);
  const mediaQueries = sizeEntries
    .filter(([key]) => key !== 'default')
    .map(([query, size]) => `${query} ${size}`);
  
  const defaultSize = breakpoints.default || '100vw';
  return [...mediaQueries, defaultSize].join(', ');
};

/**
 * Preload critical images
 */
export const preloadImage = (src: string, priority: boolean = false): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    
    if (priority) {
      img.fetchPriority = 'high';
    }
    
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

/**
 * Lazy load images with intersection observer
 */
export const setupLazyLoading = (
  imageElement: HTMLImageElement,
  src: string,
  options: IntersectionObserverInit = {}
): IntersectionObserver => {
  const defaultOptions: IntersectionObserverInit = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        img.src = src;
        img.classList.remove('lazy');
        observer.unobserve(img);
      }
    });
  }, defaultOptions);

  observer.observe(imageElement);
  return observer;
};

/**
 * Handle image loading errors with fallbacks
 */
export const handleImageError = (
  imageElement: HTMLImageElement,
  fallbackSrc: string = '/placeholder.svg',
  onError?: () => void
): void => {
  imageElement.onerror = () => {
    if (imageElement.src !== fallbackSrc) {
      imageElement.src = fallbackSrc;
      console.warn(`Image failed to load, using fallback: ${fallbackSrc}`);
    } else {
      console.error('Fallback image also failed to load');
      onError?.();
    }
  };
};