import { Button } from "@/components/ui/button";
import { Hammer, Building, Shield, Droplets, Wrench, Award } from "lucide-react";

const services = [
  {
    icon: Hammer,
    title: "Masonry & Brickwork",
    description: "Expert brickwork, stonework and masonry repairs for residential and commercial properties.",
    features: ["Repointing & Tuckpointing", "Brick Replacement", "Stone Restoration", "Heritage Work"]
  },
  {
    icon: Building,
    title: "Structural Restoration",
    description: "Comprehensive restoration services to bring your building back to its original integrity.",
    features: ["Foundation Repairs", "Wall Reconstruction", "Lintel Replacement", "Structural Assessment"]
  },
  {
    icon: Shield,
    title: "Remedial Building",
    description: "Specialized remedial solutions for complex building defects and structural issues.",
    features: ["Waterproofing Systems", "Underpinning", "Crack Repairs", "Building Rectification"]
  },
  {
    icon: Droplets,
    title: "Waterproofing & Damp",
    description: "Advanced waterproofing and damp proofing solutions to protect your property.",
    features: ["Rising Damp Treatment", "Basement Waterproofing", "Balcony Waterproofing", "Leak Detection"]
  },
  {
    icon: Wrench,
    title: "Heritage & Conservation",
    description: "Specialized heritage building conservation using traditional techniques and materials.",
    features: ["Sandstone Restoration", "Heritage Brickwork", "Conservation Reports", "Council Approvals"]
  },
  {
    icon: Award,
    title: "Building Inspections",
    description: "Professional building inspections and structural assessments by qualified experts.",
    features: ["Pre-Purchase Inspections", "Structural Reports", "Dilapidation Surveys", "Expert Witness"]
  }
];

export const ServicesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Complete Building Solutions Since 1995
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Romans Building Services specializes in masonry, restoration, and remedial building works across Sydney. Our qualified professionals deliver lasting solutions backed by 24+ years of expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-card p-6 rounded-lg trust-shadow hover:shadow-xl transition-smooth">
              <div className="bg-primary/10 rounded-lg p-3 w-12 h-12 flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
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
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-bold px-8 py-6 text-lg cta-shadow">
            Get FREE Structural Assessment
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Professional inspection worth $300 • No obligation • 10% off first project
          </p>
        </div>
      </div>
    </section>
  );
};