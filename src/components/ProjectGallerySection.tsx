import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar } from 'lucide-react';
import { ImageSEOStructuredData } from '@/components/ImageSEOStructuredData';
import { PremiumBeforeAfterSlider } from '@/components/PremiumBeforeAfterSlider';

export const ProjectGallerySection = () => {
  // Before/After work showcases organized by service categories
  const workByService = {
    masonry: [
      {
        id: 1,
        title: 'Heritage Sandstone Restoration',
        location: 'Paddington, Sydney',
        year: '2024',
        service: 'Masonry & Stonework',
        beforeImage: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop"
      },
      {
        id: 2,
        title: 'Custom Garden Wall Construction',
        location: 'Woollahra, Sydney',
        year: '2024',
        service: 'Masonry & Stonework',
        beforeImage: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop"
      }
    ],
    heritage: [
      {
        id: 3,
        title: 'Victorian Terrace Conservation',
        location: 'Surry Hills, Sydney',
        year: '2024',
        service: 'Heritage Restoration',
        beforeImage: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop"
      },
      {
        id: 4,
        title: 'Church Heritage Stonework',
        location: 'The Rocks, Sydney',
        year: '2023',
        service: 'Heritage Restoration',
        beforeImage: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop"
      }
    ],
    foundation: [
      {
        id: 5,
        title: 'Federation Home Underpinning',
        location: 'Balmain, Sydney',
        year: '2024',
        service: 'Foundation Repairs',
        beforeImage: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop"
      }
    ],
    structural: [
      {
        id: 6,
        title: 'Load-Bearing Wall Restoration',
        location: 'Newtown, Sydney',
        year: '2023',
        service: 'Structural Restoration',
        beforeImage: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop"
      }
    ],
    remedial: [
      {
        id: 7,
        title: 'Strata Building Defects',
        location: 'Bondi, Sydney',
        year: '2024',
        service: 'Remedial Building',
        beforeImage: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop"
      }
    ],
    concrete: [
      {
        id: 8,
        title: 'Coastal Concrete Restoration',
        location: 'Manly, Sydney',
        year: '2023',
        service: 'Concrete Repairs',
        beforeImage: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop"
      }
    ]
  };

  // Flatten all work for filtering
  const allWork = Object.values(workByService).flat();

  const categories = [
    'All Work',
    'Masonry & Stonework', 
    'Heritage Restoration',
    'Foundation Repairs',
    'Structural Restoration', 
    'Remedial Building',
    'Concrete Repairs'
  ];
  const [activeCategory, setActiveCategory] = useState('All Work');

  const getFilteredWork = () => {
    if (activeCategory === 'All Work') return allWork;
    
    const categoryMap: { [key: string]: string } = {
      "Masonry & Stonework": "masonry",
      "Heritage Restoration": "heritage", 
      "Foundation Repairs": "foundation",
      "Structural Restoration": "structural",
      "Remedial Building": "remedial",
      "Concrete Repairs": "concrete"
    };

    const serviceKey = categoryMap[activeCategory];
    return serviceKey ? workByService[serviceKey as keyof typeof workByService] : allWork;
  };

  const filteredProjects = getFilteredWork();

  // Generate structured data for all work images
  const allWorkImages = allWork.flatMap(work => [
    {
      url: work.beforeImage,
      description: `${work.title} Before - Expert stonework and masonry craftsmanship in ${work.location}`,
      caption: `Before restoration of ${work.title}`,
      width: 800,
      height: 600,
      contentLocation: work.location
    },
    {
      url: work.afterImage,
      description: `${work.title} After - Expert stonework and masonry craftsmanship in ${work.location}`,
      caption: `After restoration of ${work.title}`,
      width: 800,
      height: 600,
      contentLocation: work.location
    }
  ]);

  return (
    <div className="container mx-auto mobile-container overflow-safe">
      {/* SEO Structured Data for Images */}
      <ImageSEOStructuredData images={allWorkImages} />
      <motion.div
        className="text-center space-y-4 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">
          Our <span className="gradient-text">Work Gallery</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore our specialized stonework and masonry craftsmanship showcasing years of expertise across Sydney.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-8 sm:mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category)}
            className="hover-lift text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 sm:py-2"
          >
            {category}
          </Button>
        ))}
      </motion.div>

      {/* Before/After Work Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 sm:mb-16">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Before/After Slider */}
              <div className="relative">
                <PremiumBeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  beforeLabel="Before"
                  afterLabel="After"
                  className="h-80"
                />
                <Badge className="absolute top-4 right-4 z-30 bg-background/80 backdrop-blur-sm">
                  {project.service}
                </Badge>
              </div>
              
              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};