import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ProjectImage {
  src: string;
  label: string;
  type: 'before' | 'after';
}

interface ProjectGalleryCarouselProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  service: string;
  className?: string;
}

export const ProjectGalleryCarousel = ({ 
  beforeImage, 
  afterImage, 
  title, 
  service,
  className = "" 
}: ProjectGalleryCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images: ProjectImage[] = [
    { src: beforeImage, label: 'Before', type: 'before' },
    { src: afterImage, label: 'After', type: 'after' }
  ];

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className={`relative rounded-xl overflow-hidden bg-muted ${className}`}>
      {/* Main Image Display */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={`${title} - ${images[currentIndex].label}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>

        {/* Service Badge */}
        <Badge className="absolute top-4 right-4 z-20 bg-background/90 backdrop-blur-sm">
          {service}
        </Badge>

        {/* Before/After Badge */}
        <Badge 
          className={`absolute top-4 left-4 z-20 ${
            images[currentIndex].type === 'before' 
              ? 'bg-red-500/90 text-white' 
              : 'bg-green-500/90 text-white'
          } backdrop-blur-sm`}
        >
          {images[currentIndex].label}
        </Badge>

        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm hover:bg-background"
          onClick={prevImage}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-background/90 backdrop-blur-sm hover:bg-background"
          onClick={nextImage}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>

        {/* View Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-1 z-20">
          <Eye className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-medium">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="flex p-4 space-x-3 bg-background/95 backdrop-blur-sm">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`relative flex-1 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all ${
              currentIndex === index 
                ? 'border-primary shadow-lg scale-105' 
                : 'border-border hover:border-primary/50'
            }`}
          >
            <img
              src={image.src}
              alt={`${title} - ${image.label}`}
              className="w-full h-full object-cover"
            />
            <div className={`absolute inset-0 flex items-center justify-center ${
              image.type === 'before' 
                ? 'bg-red-500/20' 
                : 'bg-green-500/20'
            }`}>
              <Badge 
                className={`text-xs ${
                  image.type === 'before' 
                    ? 'bg-red-500 text-white' 
                    : 'bg-green-500 text-white'
                }`}
              >
                {image.label}
              </Badge>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};