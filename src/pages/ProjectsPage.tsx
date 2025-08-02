import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, MapPin, Calendar, Building, Phone, Star } from 'lucide-react';
import beforeAfterImage from '@/assets/before-after-showcase.jpg';

export default function ProjectsPage() {
  // Organized by service categories
  const workByService = {
    masonry: [
      {
        id: 1,
        title: "Heritage Brick Repointing",
        location: "Paddington",
        year: "2024",
        type: "Masonry & Stonework",
        description: "Detailed heritage brick repointing using traditional lime mortar on 1890s Victorian terrace facade.",
        image: beforeAfterImage,
        tags: ["Heritage", "Repointing", "Lime Mortar"]
      },
      {
        id: 2,
        title: "Sandstone Garden Wall",
        location: "Woollahra",
        year: "2023",
        type: "Masonry & Stonework",
        description: "Custom sandstone garden wall construction with traditional dry-stacked techniques and integrated drainage.",
        image: beforeAfterImage,
        tags: ["Sandstone", "Garden Wall", "Traditional"]
      },
      {
        id: 3,
        title: "Commercial Brick Facade",
        location: "Sydney CBD",
        year: "2024",
        type: "Masonry & Stonework",
        description: "Modern commercial brick facade with architectural detailing and weather-resistant pointing.",
        image: beforeAfterImage,
        tags: ["Commercial", "Facade", "Architectural"]
      }
    ],
    heritage: [
      {
        id: 4,
        title: "Victorian Terrace Conservation",
        location: "Surry Hills",
        year: "2024",
        type: "Heritage Restoration",
        description: "Complete heritage conservation of 1880s Victorian terrace using period-appropriate materials and techniques.",
        image: beforeAfterImage,
        tags: ["Victorian", "Conservation", "Period Materials"]
      },
      {
        id: 5,
        title: "Federation Home Restoration",
        location: "Balmain",
        year: "2023",
        type: "Heritage Restoration",
        description: "Comprehensive Federation-era home restoration including original stonework and architectural features.",
        image: beforeAfterImage,
        tags: ["Federation", "Stonework", "Architectural"]
      },
      {
        id: 6,
        title: "Historic Church Stonework",
        location: "The Rocks",
        year: "2023",
        type: "Heritage Restoration",
        description: "Careful restoration of 1850s church stonework using traditional carving and repair techniques.",
        image: beforeAfterImage,
        tags: ["Church", "Stonework", "Traditional"]
      }
    ],
    foundation: [
      {
        id: 7,
        title: "House Foundation Stabilization",
        location: "Leichhardt",
        year: "2024",
        type: "Foundation Repairs",
        description: "Foundation underpinning and stabilization using micro-piles with minimal disruption to occupants.",
        image: beforeAfterImage,
        tags: ["Underpinning", "Stabilization", "Micro-piles"]
      },
      {
        id: 8,
        title: "Retaining Wall Foundation",
        location: "Mosman",
        year: "2023",
        type: "Foundation Repairs",
        description: "Deep foundation work for sandstone retaining wall with engineered drainage solutions.",
        image: beforeAfterImage,
        tags: ["Retaining Wall", "Drainage", "Engineering"]
      }
    ],
    structural: [
      {
        id: 9,
        title: "Load-Bearing Wall Repair",
        location: "Newtown",
        year: "2024",
        type: "Structural Restoration",
        description: "Structural repair of compromised load-bearing masonry walls with steel reinforcement integration.",
        image: beforeAfterImage,
        tags: ["Load-Bearing", "Steel Reinforcement", "Structural"]
      },
      {
        id: 10,
        title: "Chimney Structural Repair",
        location: "Rozelle",
        year: "2023",
        type: "Structural Restoration",
        description: "Complete structural assessment and repair of heritage chimney with earthquake compliance upgrades.",
        image: beforeAfterImage,
        tags: ["Chimney", "Compliance", "Heritage"]
      }
    ],
    remedial: [
      {
        id: 11,
        title: "Strata Building Defects",
        location: "Bondi",
        year: "2024",
        type: "Remedial Building",
        description: "Comprehensive building defect rectification including facade repairs and compliance upgrades.",
        image: beforeAfterImage,
        tags: ["Strata", "Defects", "Compliance"]
      },
      {
        id: 12,
        title: "Commercial Building Remediation",
        location: "North Sydney",
        year: "2023",
        type: "Remedial Building",
        description: "Large-scale remedial work addressing structural and facade issues in commercial building.",
        image: beforeAfterImage,
        tags: ["Commercial", "Remediation", "Facade"]
      }
    ],
    concrete: [
      {
        id: 13,
        title: "Concrete Cancer Treatment",
        location: "Manly",
        year: "2024",
        type: "Concrete Repairs",
        description: "Comprehensive concrete cancer treatment with protective coatings for coastal building exposure.",
        image: beforeAfterImage,
        tags: ["Concrete Cancer", "Coastal", "Protective"]
      },
      {
        id: 14,
        title: "Balcony Spalling Repairs",
        location: "Double Bay",
        year: "2023",
        type: "Concrete Repairs",
        description: "Detailed spalling repair work on luxury apartment balconies with aesthetic restoration.",
        image: beforeAfterImage,
        tags: ["Spalling", "Balcony", "Luxury"]
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

        {/* Work Gallery Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <Badge className="absolute top-4 left-4">{project.type}</Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Eye className="w-4 h-4 mr-2" />
                    View Project Details
                  </Button>
                </CardContent>
              </Card>
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
            <Button size="lg" variant="secondary">
              <Star className="w-5 h-5 mr-2" />
              Get Free Stonework Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-primary/20 text-primary bg-background/90 hover:bg-primary hover:text-primary-foreground">
              <Phone className="w-5 h-5 mr-2" />
              Discuss Your Stonework Needs
            </Button>
          </div>
        </motion.section>
      </div>
  );
}