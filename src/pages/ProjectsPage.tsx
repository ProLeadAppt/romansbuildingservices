import React from 'react';
import { motion } from 'framer-motion';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, MapPin, Calendar, Building, Phone, Star } from 'lucide-react';
import beforeAfterImage from '@/assets/before-after-showcase.jpg';

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Heritage Terrace Restoration",
      location: "Paddington",
      year: "2024",
      type: "Heritage Restoration",
      description: "Complete restoration of 1890s Victorian terrace including structural repairs, brickwork restoration, and heritage-compliant updates.",
      image: beforeAfterImage,
      tags: ["Heritage", "Structural", "Masonry"]
    },
    {
      id: 2,
      title: "Commercial Building Facade",
      location: "Sydney CBD",
      year: "2023",
      type: "Commercial Restoration",
      description: "Facade restoration and structural repairs for 12-story commercial building in the heart of Sydney's business district.",
      image: beforeAfterImage,
      tags: ["Commercial", "Facade", "Structural"]
    },
    {
      id: 3,
      title: "Federation Home Foundation",
      location: "Balmain",
      year: "2024",
      type: "Foundation Repair",
      description: "Foundation underpinning and structural stabilization of heritage Federation home with minimal disruption to residents.",
      image: beforeAfterImage,
      tags: ["Foundation", "Heritage", "Residential"]
    },
    {
      id: 4,
      title: "Sandstone Retaining Wall",
      location: "Woollahra",
      year: "2023",
      type: "Masonry Construction",
      description: "Custom sandstone retaining wall construction with integrated drainage and landscaping considerations.",
      image: beforeAfterImage,
      tags: ["Masonry", "Sandstone", "Construction"]
    },
    {
      id: 5,
      title: "Church Restoration Project",
      location: "The Rocks",
      year: "2023",
      type: "Heritage Restoration",
      description: "Comprehensive restoration of 1850s church including stonework, structural repairs, and heritage compliance.",
      image: beforeAfterImage,
      tags: ["Heritage", "Religious", "Stonework"]
    },
    {
      id: 6,
      title: "Apartment Complex Repairs",
      location: "Bondi",
      year: "2024",
      type: "Remedial Building",
      description: "Strata building repairs including concrete cancer treatment, waterproofing, and facade restoration.",
      image: beforeAfterImage,
      tags: ["Strata", "Concrete", "Waterproofing"]
    }
  ];

  const categories = [
    { name: "All Projects", count: projects.length },
    { name: "Heritage Restoration", count: 3 },
    { name: "Commercial", count: 2 },
    { name: "Residential", count: 4 },
    { name: "Foundation", count: 2 },
    { name: "Masonry", count: 3 }
  ];

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <Badge className="mb-4">Our Portfolio</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Project Showcase
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our extensive portfolio of completed projects across Sydney. From heritage 
            restorations to modern commercial builds, see the quality and craftsmanship that 
            sets Romans Building Services apart.
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
              variant={index === 0 ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
            >
              {category.name} ({category.count})
            </Badge>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {projects.map((project, index) => (
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
              <div className="text-3xl font-bold text-primary mb-2">2000+</div>
              <div className="text-sm text-muted-foreground">Total Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <div className="text-sm text-muted-foreground">Heritage Restorations</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Commercial Projects</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-6 opacity-90">
            Join our portfolio of satisfied clients with professional building services
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Star className="w-5 h-5 mr-2" />
              Get Free Project Assessment
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Phone className="w-5 h-5 mr-2" />
              Discuss Your Project
            </Button>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
}