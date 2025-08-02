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

  const projects = [
    {
      id: 1,
      title: 'Heritage Terrace Restoration',
      location: 'Paddington, Sydney',
      year: '2024',
      budget: '$85,000',
      category: 'Restoration',
      description: 'Complete restoration of a 1890s heritage terrace including facade renewal, structural repairs, and period-appropriate materials.',
      images: [beforeAfterShowcase, beforeAfterImage, professionalTeam],
      features: ['Heritage facade restoration', 'Structural reinforcement', 'Period sandstone work', 'Council heritage approval'],
      duration: '8 weeks',
      challenge: 'Maintaining heritage character while ensuring modern structural standards',
      solution: 'Used traditional lime mortar and hand-matched heritage bricks for authentic restoration'
    },
    {
      id: 2,
      title: 'Modern Office Complex',
      location: 'North Sydney',
      year: '2024',
      budget: '$150,000',
      category: 'Commercial',
      description: 'New commercial masonry construction with contemporary design elements and earthquake-resistant features.',
      images: [heroBackground, teamImage, heroMasonry],
      features: ['Earthquake-resistant design', 'Modern architectural brickwork', 'Commercial-grade materials', 'Fast-track construction'],
      duration: '12 weeks',
      challenge: 'Meeting tight construction deadlines while ensuring premium quality',
      solution: 'Implemented lean construction methods and prefabricated components'
    },
    {
      id: 3,
      title: 'Waterfront Apartment Repairs',
      location: 'Manly, Sydney',
      year: '2023',
      budget: '$65,000',
      category: 'Repairs',
      description: 'Priority structural repairs and waterproofing for a luxury waterfront apartment building.',
      images: [beforeAfterImage, beforeAfterShowcase, professionalTeam],
      features: ['Priority crack repairs', 'Advanced waterproofing', 'Balcony restoration', 'Ocean-resistant materials'],
      duration: '6 weeks',
      challenge: 'Working in occupied building with saltwater exposure challenges',
      solution: 'Phased construction with marine-grade protective coatings'
    },
    {
      id: 4,
      title: 'Federation Home Extension',
      location: 'Leichhardt, Sydney',
      year: '2023',
      budget: '$120,000',
      category: 'Extension',
      description: 'Seamless brick extension to a Federation home, perfectly matching existing heritage character.',
      images: [teamImage, heroMasonry, heroBackground],
      features: ['Heritage brick matching', 'Foundation work', 'Structural integration', 'Period detailing'],
      duration: '10 weeks',
      challenge: 'Perfectly matching 100-year-old heritage brickwork',
      solution: 'Custom brick production and traditional laying techniques'
    }
  ];

  const categories = ['All', 'Restoration', 'Commercial', 'Repairs', 'Extension'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const nextImage = () => {
    if (selectedProject !== null) {
      const project = projects.find(p => p.id === selectedProject);
      if (project) {
        setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
      }
    }
  };

  const prevImage = () => {
    if (selectedProject !== null) {
      const project = projects.find(p => p.id === selectedProject);
      if (project) {
        setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
      }
    }
  };

  // Generate structured data for all project images
  const allProjectImages = projects.flatMap(project => 
    project.images.map(img => ({
      url: img,
      description: `${project.title} - Professional masonry and building restoration work in ${project.location}`,
      caption: project.description,
      width: 1200,
      height: 800,
      contentLocation: project.location
    }))
  );

  return (
    <div className="container mx-auto mobile-container overflow-safe">
      {/* SEO Structured Data for Images */}
      <ImageSEOStructuredData images={allProjectImages} />
      <motion.div
        className="text-center space-y-4 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">
          Our <span className="gradient-text">Project Portfolio</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore our recent projects showcasing exceptional craftsmanship and attention to detail across Sydney.
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
                  alt={`${project.title} - Professional masonry and building restoration work in ${project.location}`}
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
                  View Project Details
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
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                    {/* Image Gallery */}
                    <div className="relative">
                      <img 
                        src={project.images[currentImageIndex]}
                        alt={`${project.title} - Detailed view of masonry restoration project in ${project.location}`}
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