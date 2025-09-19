import { ExternalLink, Calendar, MapPin, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";

const recentProjects = [
  {
    title: "Heritage Sandstone Restoration",
    location: "Paddington",
    date: "November 2024",
    description: "Complete restoration of heritage sandstone facade including repointing, stone repair, and protective sealing.",
    image: "/lovable-uploads/2021-10-09.jpg",
    type: "Heritage Restoration"
  },
  {
    title: "Brick Veneer Repairs",
    location: "Leichhardt",
    date: "October 2024",
    description: "Structural brick repairs and moisture damage remediation for a Federation-era home.",
    image: "/lovable-uploads/2020-12-29.png",
    type: "Masonry Repairs"
  },
  {
    title: "Foundation Underpinning",
    location: "Balmain",
    date: "September 2024",
    description: "Complete foundation stabilization and underpinning work for a Victorian terrace house.",
    image: "/lovable-uploads/2020-11-30.png",
    type: "Foundation Work"
  },
  {
    title: "Commercial Building Restoration",
    location: "Sydney CBD",
    date: "August 2024",
    description: "Comprehensive facade restoration and structural repairs for a heritage commercial building.",
    image: "/lovable-uploads/2020-10-13.png",
    type: "Commercial Restoration"
  }
];

export const RecentProjectsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-accent/30 via-background to-muted/50 section-bg-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Recent Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of our latest masonry, restoration, and remedial building projects completed across Sydney.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {recentProjects.map((project, index) => (
            <div key={index} className="bg-card rounded-lg overflow-hidden trust-shadow hover:elevated-card transition-smooth group">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`${project.title} - ${project.location}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{project.date}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Hammer className="w-4 h-4 text-secondary" />
                    <span className="text-sm font-medium">Project Complete</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Want to See More Projects?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Browse our complete portfolio to see the quality and craftsmanship we bring to every masonry and restoration project.
          </p>
          <Button 
            size="lg" 
            onClick={() => window.open('/projects', '_blank')}
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};