import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Star, Clock, Award } from 'lucide-react';
import { BUSINESS_INFO } from './StructuredData';

// Location-specific service pages content
export const locationServices = {
  "sydney-cbd": {
    title: "Masonry & Building Services Sydney CBD",
    description: "Professional building restoration and masonry services in Sydney's Central Business District. Specializing in heritage buildings, commercial properties, and high-rise maintenance.",
    keywords: ["masonry Sydney CBD", "building restoration CBD", "heritage building repairs Sydney"],
    landmarks: ["Circular Quay", "Hyde Park", "Martin Place", "Darling Harbour"],
    projects: [
      "Heritage bank building restoration on Martin Place",
      "Commercial masonry repairs near Circular Quay", 
      "Structural assessment for CBD office building"
    ]
  },
  "eastern-suburbs": {
    title: "Masonry Services Eastern Suburbs Sydney",
    description: "Expert masonry and building restoration services across Sydney's Eastern Suburbs including Bondi, Coogee, and Double Bay. Specializing in coastal property maintenance.",
    keywords: ["masonry eastern suburbs", "building restoration Bondi", "coastal building repairs"],
    landmarks: ["Bondi Beach", "Coogee Beach", "Double Bay", "Paddington"],
    projects: [
      "Coastal erosion repairs Bondi Junction",
      "Heritage terrace restoration Paddington",
      "Waterproofing services Double Bay"
    ]
  },
  "north-sydney": {
    title: "Building Services North Sydney & Lower North Shore",
    description: "Comprehensive building and masonry services for North Sydney, Neutral Bay, and Lower North Shore suburbs. Heritage restoration specialists.",
    keywords: ["masonry north sydney", "building restoration lower north shore", "heritage repairs neutral bay"],
    landmarks: ["Sydney Harbour Bridge", "Luna Park", "Neutral Bay", "Cremorne"],
    projects: [
      "Heritage home restoration North Sydney",
      "Structural repairs near Harbour Bridge",
      "Masonry work Cremorne Point"
    ]
  }
};

// Location-specific content component
export const LocationContent: React.FC<{
  location: keyof typeof locationServices;
  className?: string;
}> = ({ location, className = '' }) => {
  const content = locationServices[location];
  
  if (!content) return null;

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold">{content.title}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {content.description}
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {content.keywords.map((keyword) => (
            <Badge key={keyword} variant="outline">{keyword}</Badge>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="w-5 h-5" />
              <span>Local Landmarks</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {content.landmarks.map((landmark) => (
                <li key={landmark} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span>{landmark}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="w-5 h-5" />
              <span>Recent Projects</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {content.projects.map((project, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                  <span className="text-sm">{project}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

// Local testimonials component
export const LocalTestimonials: React.FC<{ location?: string }> = ({ location }) => {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Paddington",
      rating: 5,
      text: "Excellent heritage restoration work on our Victorian terrace. Romans Building Services really understands the unique challenges of Sydney's older buildings.",
      service: "Heritage Restoration",
      date: "January 2024"
    },
    {
      name: "David L.", 
      location: "North Sydney",
      rating: 5,
      text: "Professional structural repairs with minimal disruption. Great communication throughout the project and fair pricing.",
      service: "Structural Repairs",
      date: "December 2023"
    },
    {
      name: "Maria K.",
      location: "Bondi",
      rating: 5,
      text: "Outstanding waterproofing work. No more leaks and the team was very clean and respectful of our property.",
      service: "Waterproofing",
      date: "November 2023"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        What Sydney Locals Say About Our Work
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="relative">
            <CardContent className="p-6">
              <div className="flex items-center space-x-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <blockquote className="text-sm mb-4 italic">
                "{testimonial.text}"
              </blockquote>
              
              <div className="space-y-1">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground flex items-center space-x-1">
                  <MapPin className="w-3 h-3" />
                  <span>{testimonial.location}</span>
                </div>
                <div className="text-xs text-muted-foreground">
                  {testimonial.service} • {testimonial.date}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

// Local project showcase
export const LocalProjectShowcase: React.FC = () => {
  const projects = [
    {
      title: "Heritage Bank Building Restoration",
      location: "Martin Place, Sydney CBD",
      type: "Commercial Heritage",
      year: "2023",
      description: "Complete facade restoration of 1920s heritage bank building including stonework, pointing, and waterproofing.",
      image: "/images/heritage-bank-restoration.jpg"
    },
    {
      title: "Victorian Terrace Restoration", 
      location: "Paddington",
      type: "Residential Heritage",
      year: "2023",
      description: "Structural repairs and heritage-compliant restoration of 1880s terrace house.",
      image: "/images/paddington-terrace.jpg"
    },
    {
      title: "Coastal Property Waterproofing",
      location: "Bondi Beach",
      type: "Residential Coastal",
      year: "2024", 
      description: "Advanced waterproofing solutions for ocean-facing property with salt air exposure.",
      image: "/images/bondi-waterproofing.jpg"
    }
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        Featured Sydney Projects
      </h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <div className="aspect-video bg-muted relative">
              {/* Add actual project images */}
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                Project Image
              </div>
              <Badge className="absolute top-2 right-2">{project.year}</Badge>
            </div>
            
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">{project.title}</h3>
              
              <div className="flex items-center space-x-1 mb-2 text-sm text-muted-foreground">
                <MapPin className="w-3 h-3" />
                <span>{project.location}</span>
              </div>
              
              <Badge variant="outline" className="mb-3">{project.type}</Badge>
              
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};