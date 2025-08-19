import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn, Download, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MobileOptimizedImage } from './MobileOptimizedImage';
import { useMobileDetection } from '@/hooks/useMobileDetection';

interface ImageData {
  src: string;
  alt: string;
  caption?: string;
  title?: string;
}

interface ResponsiveImageGalleryProps {
  images: ImageData[];
  className?: string;
  columns?: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  enableLightbox?: boolean;
  enableShare?: boolean;
  enableDownload?: boolean;
}

export const ResponsiveImageGallery: React.FC<ResponsiveImageGalleryProps> = ({
  images,
  className = '',
  columns = { mobile: 1, tablet: 2, desktop: 3 },
  enableLightbox = true,
  enableShare = false,
  enableDownload = false
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const { isMobile, isTablet, isDesktop } = useMobileDetection();

  // Determine grid columns based on device
  const getGridColumns = () => {
    if (isMobile) return columns.mobile;
    if (isTablet) return columns.tablet;
    return columns.desktop;
  };

  const gridCols = getGridColumns();

  // Handle keyboard navigation in lightbox
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isLightboxOpen || selectedImageIndex === null) return;

      switch (e.key) {
        case 'ArrowLeft':
          navigateLightbox('prev');
          break;
        case 'ArrowRight':
          navigateLightbox('next');
          break;
        case 'Escape':
          closeLightbox();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isLightboxOpen, selectedImageIndex]);

  const openLightbox = (index: number) => {
    if (!enableLightbox) return;
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
    setSelectedImageIndex(null);
    document.body.style.overflow = 'unset';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;

    const newIndex = direction === 'prev' 
      ? (selectedImageIndex - 1 + images.length) % images.length
      : (selectedImageIndex + 1) % images.length;

    setSelectedImageIndex(newIndex);
  };

  const handleShare = async (image: ImageData) => {
    if (!enableShare || !navigator.share) return;

    try {
      await navigator.share({
        title: image.title || 'Image from Roman\'s Building Services',
        text: image.caption || 'Check out this work from Roman\'s Building Services',
        url: window.location.href
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  const handleDownload = (image: ImageData) => {
    if (!enableDownload) return;

    const link = document.createElement('a');
    link.href = image.src;
    link.download = `romans-building-services-${Date.now()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* Gallery Grid */}
      <div 
        className={`grid gap-4 ${className}`}
        style={{
          gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`
        }}
      >
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="group relative overflow-hidden rounded-xl bg-muted cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-square relative">
              <MobileOptimizedImage
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300" />
              </div>

              {/* Caption */}
              {image.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.caption}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-60 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Navigation Buttons */}
            {images.length > 1 && (
              <>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-60 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox('prev');
                  }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </Button>

                <Button
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-60 bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateLightbox('next');
                  }}
                >
                  <ChevronRight className="w-6 h-6" />
                </Button>
              </>
            )}

            {/* Action Buttons */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {enableShare && (
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShare(images[selectedImageIndex]);
                  }}
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              )}

              {enableDownload && (
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDownload(images[selectedImageIndex]);
                  }}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              )}
            </div>

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm">
                {selectedImageIndex + 1} / {images.length}
              </div>
            )}

            {/* Main Image */}
            <motion.div
              key={selectedImageIndex}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <MobileOptimizedImage
                src={images[selectedImageIndex].src}
                alt={images[selectedImageIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
                priority={true}
              />

              {/* Image Info */}
              {images[selectedImageIndex].title && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white font-semibold text-lg mb-1">
                    {images[selectedImageIndex].title}
                  </h3>
                  {images[selectedImageIndex].caption && (
                    <p className="text-white/80 text-sm">
                      {images[selectedImageIndex].caption}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};