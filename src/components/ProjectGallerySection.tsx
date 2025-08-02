import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, ArrowLeft, ArrowRight, MapPin, Calendar, DollarSign } from 'lucide-react';
import { ImageSEOStructuredData } from '@/components/ImageSEOStructuredData';
import { PerformantImage } from '@/components/PerformantImage';
import beforeAfterShowcase from '@/assets/before-after-showcase.jpg';
import beforeAfterImage from '@/assets/before-after.jpg';
import professionalTeam from '@/assets/professional-team.jpg';
import heroBackground from '@/assets/hero-background.jpg';
import teamImage from '@/assets/team.jpg';
import heroMasonry from '@/assets/hero-masonry.jpg';

export const ProjectGallerySection = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const workByService = {
    masonry: [
      {
        id: 1,
        title: 'Heritage Sandstone Restoration',
        location: 'Paddington, Sydney',
        year: '2024',
        budget: '$75,000',
        category: 'Masonry & Stonework',
        description: 'Expert restoration of heritage sandstone facade using traditional techniques and period-appropriate materials.',
        images: [beforeAfterShowcase, beforeAfterImage, professionalTeam],
        features: ['Traditional stone carving', 'Heritage lime mortar', 'Hand-cut sandstone blocks', 'Council heritage approval'],
        duration: '6 weeks',
        challenge: 'Matching 150-year-old sandstone quarried from closed sites',
        solution: 'Sourced reclaimed sandstone and employed traditional stone carving techniques'
      },
      {
        id: 2,
        title: 'Custom Garden Wall Construction',
        location: 'Woollahra, Sydney',
        year: '2024',
        budget: '$45,000',
        category: 'Masonry & Stonework',
        description: 'Hand-crafted sandstone garden wall with integrated planting beds and drainage solutions.',
        images: [heroBackground, teamImage, heroMasonry],
        features: ['Dry-stack construction', 'Integrated drainage', 'Natural stone selection', 'Landscape integration'],
        duration: '4 weeks',
        challenge: 'Building on sloped site with complex drainage requirements',
        solution: 'Engineered stepped foundation with French drain integration'
      }
    ],
    heritage: [
      {
        id: 3,
        title: 'Victorian Terrace Conservation',
        location: 'Surry Hills, Sydney',
        year: '2024',
        budget: '$95,000',
        category: 'Heritage Restoration',
        description: 'Comprehensive heritage conservation of 1880s Victorian terrace using authentic restoration methods.',
        images: [beforeAfterImage, beforeAfterShowcase, professionalTeam],
        features: ['Period brick restoration', 'Traditional lime pointing', 'Heritage window restoration', 'Conservation approval'],
        duration: '8 weeks',
        challenge: 'Maintaining structural integrity while preserving historical authenticity',
        solution: 'Hidden structural reinforcement with period-appropriate facade restoration'
      },
      {
        id: 4,
        title: 'Church Heritage Stonework',
        location: 'The Rocks, Sydney',
        year: '2023',
        budget: '$180,000',
        category: 'Heritage Restoration',
        description: 'Detailed restoration of 1850s church stonework including carved details and structural repairs.',
        images: [teamImage, heroMasonry, heroBackground],
        features: ['Stone carving restoration', 'Structural stabilization', 'Weather protection', 'Heritage compliance'],
        duration: '12 weeks',
        challenge: 'Restoring intricate carved stonework damaged by 170 years of weathering',
        solution: 'Master stonemason hand-carved replacement elements using period techniques'
      }
    ],
    foundation: [
      {
        id: 5,
        title: 'Federation Home Underpinning',
        location: 'Balmain, Sydney',
        year: '2024',
        budget: '$85,000',
        category: 'Foundation Repairs',
        description: 'Comprehensive foundation underpinning using micro-piles with minimal disruption to residents.',
        images: [beforeAfterShowcase, heroBackground, professionalTeam],
        features: ['Micro-pile underpinning', 'Structural monitoring', 'Minimal excavation', 'Occupied building work'],
        duration: '6 weeks',
        challenge: 'Stabilizing foundation while maintaining full occupancy of heritage home',
        solution: 'Phased micro-pile installation with continuous structural monitoring'
      }
    ],
    structural: [
      {
        id: 6,
        title: 'Load-Bearing Wall Restoration',
        location: 'Newtown, Sydney',
        year: '2023',
        budget: '$65,000',
        category: 'Structural Restoration',
        description: 'Structural repair of compromised masonry walls with steel reinforcement and heritage compliance.',
        images: [teamImage, beforeAfterImage, heroMasonry],
        features: ['Steel reinforcement', 'Masonry restoration', 'Structural engineering', 'Heritage approval'],
        duration: '5 weeks',
        challenge: 'Installing modern structural support while maintaining heritage character',
        solution: 'Concealed steel frame with traditional masonry exterior restoration'
      }
    ],
    remedial: [
      {
        id: 7,
        title: 'Strata Building Defects',
        location: 'Bondi, Sydney',
        year: '2024',
        budget: '$120,000',
        category: 'Remedial Building',
        description: 'Comprehensive building defect rectification including facade repairs and waterproofing.',
        images: [beforeAfterImage, professionalTeam, heroBackground],
        features: ['Defect rectification', 'Facade restoration', 'Protective coatings', 'Compliance upgrades'],
        duration: '8 weeks',
        challenge: 'Coordinating repairs across multiple units while maintaining building operations',
        solution: 'Phased remediation with minimal disruption scheduling'
      }
    ],
    concrete: [
      {
        id: 8,
        title: 'Coastal Concrete Restoration',
        location: 'Manly, Sydney',
        year: '2023',
        budget: '$95,000',
        category: 'Concrete Repairs',
        description: 'Specialized concrete cancer treatment with marine-grade protective coatings for coastal exposure.',
        images: [heroMasonry, beforeAfterShowcase, teamImage],
        features: ['Concrete cancer treatment', 'Marine-grade coatings', 'Structural assessment', 'Corrosion protection'],
        duration: '7 weeks',
        challenge: 'Treating extensive concrete degradation in harsh coastal environment',
        solution: 'Multi-layer protection system with cathodic protection for reinforcement'
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

  const nextImage = () => {
    if (selectedProject !== null) {
      const project = allWork.find(p => p.id === selectedProject);
      if (project) {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }
    }
  };

  const prevImage = () => {
    if (selectedProject !== null) {
      const project = allWork.find(p => p.id === selectedProject);
      if (project) {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
    }
  };

  // Generate structured data for all work images
  const allWorkImages = allWork.flatMap(work => 
    work.images.map(img => ({
      url: img,
      description: `${work.title} - Expert stonework and masonry craftsmanship in ${work.location}`,
      caption: work.description,
      width: 1200,
      height: 800,
      contentLocation: work.location
    }))
  );

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

      {/* Projects Grid */}
      <div className="mobile-grid mb-12 sm:mb-16">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="group hover-lift overflow-hidden floating-shadow micro-interaction">
              <div className="relative overflow-hidden">
                  <img 
                    src={project.images[0]} 
                    alt={`${project.title} - Expert stonework and masonry craftsmanship in ${project.location}`}
                    className="responsive-image w-full h-48 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width="400"
                    height="256"
                  />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* View Button */}
                <motion.button
                  className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                  onClick={() => {
                    setSelectedProject(project.id);
                    setCurrentImageIndex(0);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Eye className="w-5 h-5 text-white" />
                </motion.button>

                {/* Category Badge */}
                <Badge className="absolute top-4 left-4" variant="secondary">
                  {project.category}
                </Badge>

                {/* Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-2 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-4 text-sm">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="w-4 h-4" />
                      <span>{project.budget}</span>
                    </div>
                  </div>
                </div>
              </div>

              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.features.slice(0, 2).map((feature, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {project.features.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.features.length - 2} more
                    </Badge>
                  )}
                </div>

                <Button 
                  className="mobile-button text-sm sm:text-base py-2.5 sm:py-3"
                  onClick={() => {
                    setSelectedProject(project.id);
                    setCurrentImageIndex(0);
                  }}
                >
                  View Work Details
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-background rounded-xl sm:rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto overflow-x-hidden m-2 sm:m-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = allWork.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                    {/* Image Gallery */}
                    <div className="relative">
                      <img 
                        src={project.images[currentImageIndex]}
                        alt={`${project.title} - Detailed view of stonework and masonry project in ${project.location}`}
                        className="w-full h-80 object-cover rounded-xl"
                        loading="lazy"
                        width="800"
                        height="320"
                      />
                      
                      {project.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          >
                            <ArrowLeft className="w-5 h-5 text-white" />
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                          >
                            <ArrowRight className="w-5 h-5 text-white" />
                          </button>
                          
                          {/* Image Indicators */}
                          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                            {project.images.map((_, idx) => (
                              <button
                                key={idx}
                                className={`w-2 h-2 rounded-full transition-colors ${
                                  idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                                }`}
                                onClick={() => setCurrentImageIndex(idx)}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Project Details */}
                    <div className="space-y-6">
                      <div>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                            <div className="flex items-center space-x-4 text-muted-foreground">
                              <div className="flex items-center space-x-1">
                                <MapPin className="w-4 h-4" />
                                <span>{project.location}</span>
                              </div>
                              <div className="flex items-center space-x-1">
                                <Calendar className="w-4 h-4" />
                                <span>{project.year}</span>
                              </div>
                              <Badge>{project.category}</Badge>
                            </div>
                          </div>
                          <button
                            onClick={() => setSelectedProject(null)}
                            className="p-2 hover:bg-muted rounded-full transition-colors"
                          >
                            ×
                          </button>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Project Stats */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                        <div className="bg-muted/50 rounded-xl p-3 sm:p-4 text-center">
                          <div className="text-lg sm:text-2xl font-bold text-primary">{project.budget}</div>
                          <div className="text-xs sm:text-sm text-muted-foreground">Project Value</div>
                        </div>
                        <div className="bg-muted/50 rounded-xl p-3 sm:p-4 text-center">
                          <div className="text-lg sm:text-2xl font-bold text-primary">{project.duration}</div>
                          <div className="text-xs sm:text-sm text-muted-foreground">Duration</div>
                        </div>
                        <div className="bg-muted/50 rounded-xl p-3 sm:p-4 text-center">
                          <div className="text-lg sm:text-2xl font-bold text-primary">{project.features.length}</div>
                          <div className="text-xs sm:text-sm text-muted-foreground">Key Features</div>
                        </div>
                      </div>

                      {/* Challenge & Solution */}
                      <div className="grid grid-cols-1 gap-4 sm:gap-6">
                        <div className="space-y-2 sm:space-y-3">
                          <h4 className="font-semibold text-destructive">Challenge</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">{project.challenge}</p>
                        </div>
                        <div className="space-y-2 sm:space-y-3">
                          <h4 className="font-semibold text-green-600">Solution</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground">{project.solution}</p>
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-semibold mb-3">Project Features</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};