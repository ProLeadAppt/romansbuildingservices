import { MapPin, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const serviceAreas = [
  {
    name: "Sydney CBD",
    description: "Central business district and surrounding areas",
    suburbs: ["Sydney CBD", "The Rocks", "Circular Quay", "Darling Harbour"]
  },
  {
    name: "Eastern Suburbs",
    description: "From Bondi to Maroubra and everything in between",
    suburbs: ["Bondi", "Coogee", "Randwick", "Paddington", "Double Bay"]
  },
  {
    name: "North Shore",
    description: "Premium residential areas north of the harbour",
    suburbs: ["Mosman", "Chatswood", "Willoughby", "Lane Cove", "Neutral Bay"]
  },
  {
    name: "Inner West",
    description: "Vibrant communities with diverse heritage buildings",
    suburbs: ["Newtown", "Leichhardt", "Balmain", "Glebe", "Marrickville"]
  },
  {
    name: "Northern Beaches",
    description: "Coastal properties from Manly to Palm Beach",
    suburbs: ["Manly", "Dee Why", "Brookvale", "Mona Vale", "Avalon"]
  },
  {
    name: "Greater Sydney",
    description: "We also service surrounding metropolitan areas",
    suburbs: ["Parramatta", "Blacktown", "Liverpool", "Sutherland", "Hornsby"]
  }
];

export const AreasWeServeSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 via-background to-accent/30 section-bg-pattern">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Areas We Serve
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Providing expert masonry, restoration, and remedial building services across Sydney's diverse neighborhoods and communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {serviceAreas.map((area, index) => (
            <div key={index} className="bg-card p-6 rounded-lg trust-shadow hover:elevated-card transition-smooth">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 rounded-lg p-2">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{area.name}</h3>
              </div>
              <p className="text-muted-foreground mb-4">{area.description}</p>
              <div className="space-y-2">
                {area.suburbs.map((suburb, suburbIndex) => (
                  <div key={suburbIndex} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-sm">{suburb}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Coverage Notice */}
        <div className="bg-card/95 backdrop-blur-sm rounded-lg p-8 trust-shadow text-center">
          <h3 className="text-2xl font-bold mb-4">Don't See Your Area Listed?</h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            We service the entire Greater Sydney metropolitan area. If you don't see your suburb listed above, please contact us – we likely serve your area too!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => window.open('tel:+61414922276')}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call +61 414 922 276
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('/contact', '_blank')}
            >
              Get Free Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};