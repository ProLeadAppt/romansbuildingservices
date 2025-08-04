import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { ImageSEOStructuredData } from '@/components/ImageSEOStructuredData';

export const ProjectGallerySection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // High-quality work showcase images using the uploaded files
  const workImages = [
    {
      id: 2,
      title: 'Modern Masonry Project',
      image: "/lovable-uploads/2020-08-12.png",
      description: "Contemporary masonry craftsmanship"
    },
    {
      id: 3,
      title: 'Foundation Repair Excellence',
      image: "/lovable-uploads/2020-08-27.png",
      description: "Structural foundation restoration"
    },
    {
      id: 4,
      title: 'Premium Stonework Detail',
      image: "/lovable-uploads/2020-09-01.png",
      description: "Fine stonework detailing"
    },
    {
      id: 5,
      title: 'Commercial Building Restoration',
      image: "/lovable-uploads/2020-09-27.png",
      description: "Large scale commercial work"
    },
    {
      id: 6,
      title: 'Residential Heritage Project',
      image: "/lovable-uploads/2020-10-13.png",
      description: "Residential heritage restoration"
    },
    {
      id: 7,
      title: 'Custom Stonework Design',
      image: "/lovable-uploads/2020-11-02.png",
      description: "Bespoke stonework creation"
    },
    {
      id: 8,
      title: 'Structural Repair Mastery',
      image: "/lovable-uploads/2020-11-22.png",
      description: "Complex structural repairs"
    },
    {
      id: 9,
      title: 'Artisan Craftsmanship',
      image: "/lovable-uploads/2020-11-30.png",
      description: "Traditional artisan techniques"
    },
    {
      id: 10,
      title: 'Premium Restoration Work',
      image: "/lovable-uploads/2020-12-07.png",
      description: "High-end restoration project"
    },
    {
      id: 11,
      title: 'Concrete Repair Excellence',
      image: "/lovable-uploads/2020-12-29.png",
      description: "Specialized concrete restoration"
    },
    {
      id: 12,
      title: 'Master Stonework Project',
      image: "/lovable-uploads/2021-01-07.png",
      description: "Master level stonework"
    }
  ];

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
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
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
    url: work.image,
    description: `${work.title} - Professional masonry and stonework by Roman's Building Services`,
    caption: work.description,
    width: 400,
    height: 500,
    contentLocation: "Sydney, Australia"
  }));

  return (
    <div className="py-20 bg-gradient-to-br from-background via-muted/20 to-background overflow-hidden">
      {/* SEO Structured Data for Images */}
      <ImageSEOStructuredData images={allWorkImages} />
      
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center space-y-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            Minas' <span className="gradient-text">Masterwork</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover decades of craftsmanship through our premium project showcase
          </p>
        </motion.div>

        {/* Premium Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Navigation Buttons */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-20">
            <Button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              size="icon"
              variant="outline"
              className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border-primary/20 shadow-xl hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-30 transition-all duration-300"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          </div>
          
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-20">
            <Button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              size="icon"
              variant="outline"
              className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border-primary/20 shadow-xl hover:bg-primary hover:text-primary-foreground hover:border-primary disabled:opacity-30 transition-all duration-300"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {workImages.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="flex-none group cursor-pointer"
                onClick={() => setSelectedImage(project.image)}
              >
                <div className="relative w-80 h-96 bg-card rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 hover:scale-105">
                  {/* Image */}
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
                    
                    {/* Expand Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                        {project.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Premium Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/10 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(workImages.length / 3) }).map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-muted-foreground/30 transition-colors duration-300"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Project showcase"
              className="w-full h-full object-contain rounded-xl shadow-2xl"
            />
            <Button
              onClick={() => setSelectedImage(null)}
              size="icon"
              variant="outline"
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border-white/20 text-white hover:bg-white/20"
            >
              ×
            </Button>
          </motion.div>
        </motion.div>
      )}

    </div>
  );
};