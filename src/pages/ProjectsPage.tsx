import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Building, Phone, Star } from 'lucide-react';
import { AssessmentPopup } from '@/components/AssessmentPopup';
import { PremiumBeforeAfterSlider } from '@/components/PremiumBeforeAfterSlider';

export default function ProjectsPage() {
  const [showAssessmentPopup, setShowAssessmentPopup] = useState(false);
  
  // Before/After work showcases organized by service categories
  const workByService = {
    masonry: [
      {
        id: 1,
        title: "Heritage Brick Repointing",
        location: "Paddington",
        year: "2024",
        service: "Masonry & Stonework",
        beforeImage: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop"
      },
      {
        id: 2,
        title: "Sandstone Garden Wall",
        location: "Woollahra", 
        year: "2023",
        service: "Masonry & Stonework",
        beforeImage: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop"
      },
      {
        id: 3,
        title: "Commercial Brick Facade",
        location: "Sydney CBD",
        year: "2024", 
        service: "Masonry & Stonework",
        beforeImage: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop"
      }
    ],
    heritage: [
      {
        id: 4,
        title: "Victorian Terrace Conservation",
        location: "Surry Hills",
        year: "2024",
        service: "Heritage Restoration",
        beforeImage: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop"
      },
      {
        id: 5,
        title: "Federation Home Restoration", 
        location: "Balmain",
        year: "2023",
        service: "Heritage Restoration",
        beforeImage: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop"
      },
      {
        id: 6,
        title: "Historic Church Stonework",
        location: "The Rocks",
        year: "2023",
        service: "Heritage Restoration", 
        beforeImage: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop"
      }
    ],
    foundation: [
      {
        id: 7,
        title: "House Foundation Stabilization",
        location: "Leichhardt",
        year: "2024",
        service: "Foundation Repairs",
        beforeImage: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop"
      },
      {
        id: 8,
        title: "Retaining Wall Foundation", 
        location: "Mosman",
        year: "2023",
        service: "Foundation Repairs",
        beforeImage: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop"
      }
    ],
    structural: [
      {
        id: 9,
        title: "Load-Bearing Wall Repair",
        location: "Newtown",
        year: "2024",
        service: "Structural Restoration",
        beforeImage: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop"
      },
      {
        id: 10,
        title: "Chimney Structural Repair",
        location: "Rozelle",
        year: "2023", 
        service: "Structural Restoration",
        beforeImage: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop"
      }
    ],
    remedial: [
      {
        id: 11,
        title: "Strata Building Defects",
        location: "Bondi",
        year: "2024",
        service: "Remedial Building",
        beforeImage: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop"
      },
      {
        id: 12,
        title: "Commercial Building Remediation",
        location: "North Sydney",
        year: "2023",
        service: "Remedial Building", 
        beforeImage: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop"
      }
    ],
    concrete: [
      {
        id: 13,
        title: "Concrete Cancer Treatment",
        location: "Manly", 
        year: "2024",
        service: "Concrete Repairs",
        beforeImage: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop"
      },
      {
        id: 14,
        title: "Balcony Spalling Repairs",
        location: "Double Bay",
        year: "2023",
        service: "Concrete Repairs",
        beforeImage: "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?w=800&h=600&fit=crop",
        afterImage: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&h=600&fit=crop"
      }
    ]
  };

  // Flatten all projects for filtering
  const allProjects = Object.values(workByService).flat();

  const categories = [
    { name: "All Work", count: allProjects.length },
    { name: "Masonry & Stonework", count: workByService.masonry.length },
    { name: "Heritage Restoration", count: workByService.heritage.length },
    { name: "Foundation Repairs", count: workByService.foundation.length },
    { name: "Structural Restoration", count: workByService.structural.length },
    { name: "Remedial Building", count: workByService.remedial.length },
    { name: "Concrete Repairs", count: workByService.concrete.length }
  ];

  const [activeCategory, setActiveCategory] = useState("All Work");

  const getFilteredProjects = () => {
    if (activeCategory === "All Work") return allProjects;
    
    const categoryMap: { [key: string]: string } = {
      "Masonry & Stonework": "masonry",
      "Heritage Restoration": "heritage", 
      "Foundation Repairs": "foundation",
      "Structural Restoration": "structural",
      "Remedial Building": "remedial",
      "Concrete Repairs": "concrete"
    };

    const serviceKey = categoryMap[activeCategory];
    return serviceKey ? workByService[serviceKey as keyof typeof workByService] : allProjects;
  };

  const filteredProjects = getFilteredProjects();

  return (
    <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4">Our Work</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Gallery of Stonework Excellence
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover years of specialized stonework and masonry craftsmanship across Sydney. 
            From heritage conservation to modern structural work, witness the expertise and 
            attention to detail that defines our trade.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <Badge 
              key={index} 
              variant={activeCategory === category.name ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
              onClick={() => setActiveCategory(category.name)}
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </motion.div>

        {/* Before/After Work Gallery */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
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
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-muted/50 rounded-2xl p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-center mb-8">Project Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">25+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Stonework Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Heritage Restorations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Trade Expertise</div>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-center bg-primary rounded-2xl p-8 text-white"
        >
          <Building className="w-16 h-16 mx-auto mb-4 opacity-80" />
          <h2 className="text-3xl font-bold mb-4">Ready for Expert Stonework?</h2>
          <p className="text-lg mb-6 opacity-90">
            Experience the quality craftsmanship showcased in our gallery
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" onClick={() => setShowAssessmentPopup(true)}>
              <Star className="w-5 h-5 mr-2" />
              Get Free Stonework Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 text-primary bg-background/90 hover:bg-primary hover:text-primary-foreground" onClick={() => window.open('tel:+61483981292')}>
              <Phone className="w-5 h-5 mr-2" />
              Discuss Your Stonework Needs
            </Button>
          </div>
        </motion.section>
        
        {/* Assessment Popup */}
        <AssessmentPopup isOpen={showAssessmentPopup} onClose={() => setShowAssessmentPopup(false)} />
      </div>
  );
}