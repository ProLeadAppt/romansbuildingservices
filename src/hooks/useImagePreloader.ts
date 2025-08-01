import { useEffect, useState } from 'react';

interface UseImagePreloaderProps {
  sources: string[];
  priority?: boolean;
}

export const useImagePreloader = ({ sources, priority = false }: UseImagePreloaderProps) => {
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [allLoaded, setAllLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    let mounted = true;
    const imagePromises = sources.map((src) =>
      new Promise<string>((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          if (mounted) {
            setLoadedImages(prev => {
              const newSet = new Set(prev);
              newSet.add(src);
              setLoadingProgress((newSet.size / sources.length) * 100);
              return newSet;
            });
          }
          resolve(src);
        };
        img.onerror = () => reject(new Error(`Failed to load ${src}`));
        img.src = src;
      })
    );

    Promise.allSettled(imagePromises).then(() => {
      if (mounted) {
        setAllLoaded(true);
      }
    });

    return () => {
      mounted = false;
    };
  }, [sources]);

  const isImageLoaded = (src: string) => loadedImages.has(src);

  return {
    loadedImages,
    allLoaded,
    loadingProgress,
    isImageLoaded
  };
};