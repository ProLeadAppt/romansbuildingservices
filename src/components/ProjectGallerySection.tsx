import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { ImageSEOStructuredData } from '@/components/ImageSEOStructuredData';
import { ProjectImage } from '@/components/images/ProjectImage';
import { projectImages } from '@/data/projectImages';
export const ProjectGallerySection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Use curated project images (no stock photos or logos)
  const workImages = projectImages;
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 320; // Width of card plus gap
      const newScrollLeft = carouselRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      carouselRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };
  const updateScrollButtons = () => {
    if (carouselRef.current) {
      const {
        scrollLeft,
        scrollWidth,
        clientWidth
      } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', updateScrollButtons);
      updateScrollButtons();
      return () => carousel.removeEventListener('scroll', updateScrollButtons);
    }
  }, []);

  // Generate structured data for all work images
  const allWorkImages = workImages.map(work => ({
    url: work.src,
    description: work.description,
    caption: work.title,
    width: 400,
    height: 500,
    contentLocation: work.location
  }));
  return <div className="py-20 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      {/* SEO Structured Data for Images */}
      <ImageSEOStructuredData images={allWorkImages} />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div className="text-center space-y-6 mb-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }}>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Minas' <span className="gradient-text">Work Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Showcasing decades of quality craftsmanship across Sydney
          </p>
        </motion.div>

        {/* Premium Carousel */}
        <motion.div className="relative" initial={{
        opacity: 0,
        y: 40
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        delay: 0.2,
        duration: 0.8
      }} viewport={{
        once: true
      }}>
          {/* Navigation Buttons */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-20">
            <Button onClick={() => scroll('left')} disabled={!canScrollLeft} size="icon" variant="outline" className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border-primary/20 shadow-xl hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-30 transition-all duration-300">
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-20">
            <Button onClick={() => scroll('right')} disabled={!canScrollRight} size="icon" variant="outline" className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border-primary/20 shadow-xl hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-30 transition-all duration-300">
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Carousel Container */}
          <div ref={carouselRef} className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4" style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
            {workImages.map((project, index) => (
              <motion.div 
                key={project.id} 
                initial={{ opacity: 0, scale: 0.9 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                transition={{ delay: index * 0.1, duration: 0.6 }} 
                viewport={{ once: true }} 
                className="flex-none"
              >
                <ProjectImage
                  src={project.src}
                  alt={project.alt}
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  date={project.date}
                  category={project.category}
                  beforeAfter={project.beforeAfter}
                  onClick={() => setSelectedImage(project.src)}
                  className="w-80 h-96"
                />
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({
            length: Math.ceil(workImages.length / 3)
          }).map((_, index) => <div key={index} className="w-2 h-2 rounded-full bg-muted-foreground/30 transition-colors duration-300" />)}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} exit={{
      opacity: 0
    }} className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <motion.div initial={{
        scale: 0.8,
        opacity: 0
      }} animate={{
        scale: 1,
        opacity: 1
      }} exit={{
        scale: 0.8,
        opacity: 0
      }} className="relative max-w-4xl max-h-full" onClick={e => e.stopPropagation()}>
            <img src={selectedImage} alt="Professional masonry and stonework showcase" className="w-full h-full object-contain rounded-xl shadow-2xl" />
            <Button onClick={() => setSelectedImage(null)} size="icon" variant="outline" className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border-white/20 text-white hover:bg-white/20">
              ×
            </Button>
          </motion.div>
        </motion.div>}

    </div>;
};