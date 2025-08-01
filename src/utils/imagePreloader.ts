// Image preloader utility for critical images
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = () => reject(new Error(`Failed to load image: ${src}`));
    img.src = src;
  });
};

export const preloadCriticalImages = async (images: string[]): Promise<void> => {
  try {
    await Promise.all(images.map(preloadImage));
  } catch (error) {
    console.warn('Some critical images failed to preload:', error);
  }
};

// Add preload link tags to document head for critical images
export const addPreloadLinks = (images: { src: string; as?: string }[]): void => {
  images.forEach(({ src, as = 'image' }) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    link.as = as;
    
    // Add to head if not already present
    if (!document.querySelector(`link[href="${src}"]`)) {
      document.head.appendChild(link);
    }
  });
};

// Lazy load images that come into viewport
export const lazyLoadImages = (): void => {
  const images = document.querySelectorAll('img[data-lazy]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        const src = img.getAttribute('data-lazy');
        
        if (src) {
          img.src = src;
          img.removeAttribute('data-lazy');
          imageObserver.unobserve(img);
        }
      }
    });
  });

  images.forEach(img => imageObserver.observe(img));
};