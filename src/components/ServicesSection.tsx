import { Button } from "@/components/ui/button";
import { Hammer, Building, Wrench, Home } from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: Hammer,
      title: "Masonry Services",
      description: "Expert brickwork, stonework, and concrete repairs with precision craftsmanship",
      features: [
        "Brick & Stone Repair",
        "Pointing & Repointing", 
        "Structural Masonry",
        "Custom Stonework"
      ]
    },
    {
      icon: Building,
      title: "Building Restoration", 
      description: "Complete restoration services to bring your property back to its original glory",
      features: [
        "Heritage Building Restoration",
        "Facade Cleaning & Repair",
        "Window & Door Restoration",
        "Architectural Details"
      ]
    },
    {
      icon: Wrench,
      title: "Remedial Works",
      description: "Comprehensive remedial solutions for waterproofing and structural issues",
      features: [
        "Waterproofing Solutions",
        "Concrete Cancer Treatment",
        "Structural Repairs",
        "Balcony Remediation"
      ]
    },
    {
      icon: Home,
      title: "General Building",
      description: "Full-service building solutions for residential and commercial projects",
      features: [
        "New Construction",
        "Renovations & Extensions",
        "Project Management",
        "Building Consulting"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Complete Building Services
            <span className="block text-primary">Under One Roof</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From emergency repairs to complete restorations, we deliver comprehensive solutions with unmatched expertise and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-8 rounded-lg trust-shadow hover:shadow-xl transition-smooth">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-3 flex-shrink-0">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-secondary rounded-full flex-shrink-0"></div>
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-dark text-primary-foreground font-bold px-8 py-6 text-lg cta-shadow transition-smooth"
          >
            Get Expert Assessment
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Free consultation • No obligation • Same day response
          </p>
        </div>
      </div>
    </section>
  );
};