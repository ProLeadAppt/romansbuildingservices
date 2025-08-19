import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  ArrowRight, ArrowLeft, Calendar, MapPin, Clock, 
  Star, CheckCircle, Eye, X, ZoomIn 
} from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { UniversalImage } from '@/components/images/UniversalImage';

interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

interface CaseStudy {
  id: string;
  title: string;
  location: string;
  category: string;
  duration: string;
  completedDate: string;
  description: string;
  challenge: string;
  solution: string;
  result: string;
  beforeImages: ProjectImage[];
  afterImages: ProjectImage[];
  testimonial?: {
    text: string;
    author: string;
    rating: number;
  };
  tags: string[];
  featured: boolean;
}

interface ProjectCaseStudyGalleryProps {
  caseStudies: CaseStudy[];
  className?: string;
}

export const ProjectCaseStudyGallery: React.FC<ProjectCaseStudyGalleryProps> = ({
  caseStudies,
  className = ""
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showBefore, setShowBefore] = useState(true);

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(caseStudies.map(study => study.category)))];

  // Filter case studies
  const filteredStudies = selectedCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  // Sort to show featured first
  const sortedStudies = [...filteredStudies].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return new Date(b.completedDate).getTime() - new Date(a.completedDate).getTime();
  });

  const nextImage = () => {
    if (!selectedStudy) return;
    const images = showBefore ? selectedStudy.beforeImages : selectedStudy.afterImages;
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    if (!selectedStudy) return;
    const images = showBefore ? selectedStudy.beforeImages : selectedStudy.afterImages;
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openStudyModal = (study: CaseStudy) => {
    setSelectedStudy(study);
    setCurrentImageIndex(0);
    setShowBefore(true);
  };

  const closeStudyModal = () => {
    setSelectedStudy(null);
    setCurrentImageIndex(0);
  };

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4">Project Showcase</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Work Speaks for Itself
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our portfolio of successful building projects across Sydney. 
            From heritage restorations to modern constructions, see the quality and craftsmanship that sets us apart.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {sortedStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all group cursor-pointer h-full">
                  <div className="relative" onClick={() => openStudyModal(study)}>
                    {/* Featured badge */}
                    {study.featured && (
                      <Badge className="absolute top-3 left-3 z-10 bg-secondary text-secondary-foreground">
                        Featured
                      </Badge>
                    )}
                    
                    {/* Before/After comparison */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="grid grid-cols-2 h-full">
                        <div className="relative">
                          {study.beforeImages[0] && (
                            <UniversalImage
                              src={study.beforeImages[0].src}
                              alt={study.beforeImages[0].alt}
                              className="w-full h-full object-cover"
                              aspectRatio="4/3"
                            />
                          )}
                          <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                            Before
                          </div>
                        </div>
                        <div className="relative">
                          {study.afterImages[0] && (
                            <UniversalImage
                              src={study.afterImages[0].src}
                              alt={study.afterImages[0].alt}
                              className="w-full h-full object-cover"
                              aspectRatio="4/3"
                            />
                          )}
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                            After
                          </div>
                        </div>
                      </div>
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <div className="text-center text-white">
                          <Eye className="w-8 h-8 mx-auto mb-2" />
                          <span className="text-sm font-semibold">View Project</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 line-clamp-2">{study.title}</CardTitle>
                        <div className="flex items-center text-sm text-muted-foreground mb-2">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{study.location}</span>
                        </div>
                      </div>
                      {study.testimonial && (
                        <div className="flex items-center ml-2">
                          {Array.from({ length: study.testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {study.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />
                        <span>{study.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{new Date(study.completedDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {study.tags.slice(0, 3).map((tag, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {study.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{study.tags.length - 3}
                        </Badge>
                      )}
                    </div>

                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => openStudyModal(study)}
                    >
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal for detailed view */}
        <Dialog open={!!selectedStudy} onOpenChange={closeStudyModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedStudy && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedStudy.title}</DialogTitle>
                  <DialogDescription className="flex items-center space-x-4 text-base">
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {selectedStudy.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(selectedStudy.completedDate).toLocaleDateString()}
                    </span>
                    <Badge>{selectedStudy.category}</Badge>
                  </DialogDescription>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Image Viewer */}
                  <div className="relative">
                    <div className="flex items-center justify-center mb-4">
                      <div className="flex rounded-lg border bg-muted p-1">
                        <Button
                          variant={showBefore ? "default" : "ghost"}
                          size="sm"
                          onClick={() => {
                            setShowBefore(true);
                            setCurrentImageIndex(0);
                          }}
                        >
                          Before ({selectedStudy.beforeImages.length})
                        </Button>
                        <Button
                          variant={!showBefore ? "default" : "ghost"}
                          size="sm"
                          onClick={() => {
                            setShowBefore(false);
                            setCurrentImageIndex(0);
                          }}
                        >
                          After ({selectedStudy.afterImages.length})
                        </Button>
                      </div>
                    </div>

                    <div className="relative rounded-lg overflow-hidden bg-muted aspect-video">
                      {selectedStudy && (
                        <>
                          <UniversalImage
                            src={
                              showBefore 
                                ? selectedStudy.beforeImages[currentImageIndex]?.src 
                                : selectedStudy.afterImages[currentImageIndex]?.src
                            }
                            alt={
                              showBefore 
                                ? selectedStudy.beforeImages[currentImageIndex]?.alt 
                                : selectedStudy.afterImages[currentImageIndex]?.alt
                            }
                            className="w-full h-full object-cover"
                            aspectRatio="16/9"
                          />
                          
                          {/* Navigation arrows */}
                          <Button
                            variant="secondary"
                            size="icon"
                            className="absolute left-2 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100"
                            onClick={prevImage}
                          >
                            <ArrowLeft className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="secondary"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 opacity-80 hover:opacity-100"
                            onClick={nextImage}
                          >
                            <ArrowRight className="w-4 h-4" />
                          </Button>

                          {/* Image counter */}
                          <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                            {currentImageIndex + 1} / {showBefore ? selectedStudy.beforeImages.length : selectedStudy.afterImages.length}
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                        Challenge
                      </h3>
                      <p className="text-muted-foreground">{selectedStudy.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2 text-primary" />
                        Solution
                      </h3>
                      <p className="text-muted-foreground">{selectedStudy.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center">
                      <Star className="w-5 h-5 mr-2 text-primary" />
                      Result
                    </h3>
                    <p className="text-muted-foreground">{selectedStudy.result}</p>
                  </div>

                  {/* Testimonial */}
                  {selectedStudy.testimonial && (
                    <Card className="bg-primary/5 border-primary/20">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          {Array.from({ length: selectedStudy.testimonial.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                          ))}
                        </div>
                        <p className="text-muted-foreground italic mb-3">
                          "{selectedStudy.testimonial.text}"
                        </p>
                        <p className="text-sm font-semibold">
                          — {selectedStudy.testimonial.author}
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {/* Tags */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Project Tags</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedStudy.tags.map((tag, i) => (
                        <Badge key={i} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

// Sample case study data
export const sampleCaseStudies: CaseStudy[] = [
  {
    id: 'heritage-terrace-restoration',
    title: 'Victorian Terrace Heritage Restoration',
    location: 'Paddington, Sydney',
    category: 'Heritage Restoration',
    duration: '8 weeks',
    completedDate: '2024-01-15',
    description: 'Complete restoration of a Victorian terrace including stonework, brickwork, and structural repairs while maintaining heritage integrity.',
    challenge: 'The 120-year-old terrace had significant structural damage, deteriorated mortar, and damaged heritage stonework that required specialized restoration techniques.',
    solution: 'Used traditional lime mortar matching, heritage-approved stone replacement, and careful structural reinforcement without compromising the building\'s historical character.',
    result: 'Successfully restored the terrace to its original glory while improving structural integrity and ensuring compliance with heritage regulations.',
    beforeImages: [
      { src: '/lovable-uploads/2020-06-04.png', alt: 'Heritage terrace before restoration' },
      { src: '/lovable-uploads/2020-08-12.png', alt: 'Damaged stonework before repair' }
    ],
    afterImages: [
      { src: '/lovable-uploads/2020-09-01.png', alt: 'Restored heritage terrace' },
      { src: '/lovable-uploads/2020-09-27.png', alt: 'Restored stonework detail' }
    ],
    testimonial: {
      text: 'Romans Building Services exceeded our expectations. They showed incredible attention to detail and respect for our home\'s heritage. The restoration is absolutely beautiful.',
      author: 'Sarah & Michael Thompson',
      rating: 5
    },
    tags: ['Heritage', 'Stonework', 'Structural Repair', 'Victorian', 'Conservation'],
    featured: true
  },
  {
    id: 'commercial-facade-repair',
    title: 'Commercial Building Facade Restoration',
    location: 'Sydney CBD',
    category: 'Commercial Restoration',
    duration: '12 weeks',
    completedDate: '2023-11-20',
    description: 'Major facade restoration for a commercial building including masonry repairs, waterproofing, and structural reinforcement.',
    challenge: 'Water damage had caused significant deterioration to the building facade, requiring urgent repairs while maintaining business operations.',
    solution: 'Implemented staged repair approach with weatherproofing barriers, allowing business to continue while conducting comprehensive facade restoration.',
    result: 'Delivered a fully restored facade with improved weather resistance and extended building lifespan, completed ahead of schedule.',
    beforeImages: [
      { src: '/lovable-uploads/2020-10-13.png', alt: 'Commercial facade before restoration' }
    ],
    afterImages: [
      { src: '/lovable-uploads/2020-11-02.png', alt: 'Restored commercial facade' }
    ],
    testimonial: {
      text: 'Professional service from start to finish. The team worked around our business hours and delivered exceptional results.',
      author: 'David Chen, Property Manager',
      rating: 5
    },
    tags: ['Commercial', 'Facade', 'Waterproofing', 'Masonry', 'CBD'],
    featured: false
  },
  {
    id: 'retaining-wall-construction',
    title: 'Residential Retaining Wall Construction',
    location: 'Mosman, Sydney',
    category: 'Structural Work',
    duration: '4 weeks',
    completedDate: '2023-12-10',
    description: 'Construction of a new retaining wall to prevent soil erosion and create usable outdoor space.',
    challenge: 'Steep slope was causing erosion issues and limiting usable garden space for the family.',
    solution: 'Designed and built a multi-tiered retaining wall system using natural stone that complemented the home\'s architecture.',
    result: 'Created a beautiful, functional outdoor space while solving the erosion problem and adding value to the property.',
    beforeImages: [
      { src: '/lovable-uploads/2020-11-22.png', alt: 'Steep slope before retaining wall' }
    ],
    afterImages: [
      { src: '/lovable-uploads/2020-11-30.png', alt: 'Completed retaining wall with landscaping' }
    ],
    testimonial: {
      text: 'The retaining wall not only solved our erosion problem but created a beautiful garden feature. Highly recommended!',
      author: 'Jennifer Williams',
      rating: 5
    },
    tags: ['Retaining Wall', 'Erosion Control', 'Landscaping', 'Natural Stone', 'Residential'],
    featured: false
  }
];