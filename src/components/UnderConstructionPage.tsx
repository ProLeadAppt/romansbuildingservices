import { Phone, Mail, Clock, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const UnderConstructionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <img 
              src="/lovable-uploads/12ca1977-0622-414c-a4b7-fa428cde1018.png" 
              alt="Romans Building Services Logo" 
              className="h-16 w-auto"
            />
          </div>
        </div>

        {/* Construction Icon */}
        <div className="flex justify-center">
          <div className="bg-primary/10 p-6 rounded-full">
            <Wrench className="h-12 w-12 text-primary" />
          </div>
        </div>

        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            We're Building Something Amazing!
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            Our new website is currently under construction. We're working hard to bring you an improved experience.
          </p>
        </div>

        {/* Timeline */}
        <Card className="p-6 bg-card/50 backdrop-blur-sm">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="text-lg font-semibold text-foreground">Expected Launch</span>
          </div>
          <p className="text-2xl font-bold text-primary">Coming Very Soon</p>
          <p className="text-sm text-muted-foreground mt-2">
            We're putting the finishing touches on our new site
          </p>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-foreground">
            Need Our Services Right Now?
          </h2>
          <p className="text-muted-foreground">
            Don't let our website construction stop you from getting the building services you need.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
            <Button 
              size="lg" 
              className="gap-2"
              onClick={() => window.location.href = 'tel:0296482100'}
            >
              <Phone className="h-4 w-4" />
              Call Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2"
              onClick={() => window.location.href = 'mailto:info@romansbuildingservices.com'}
            >
              <Mail className="h-4 w-4" />
              Email Us
            </Button>
          </div>

          <div className="space-y-2 text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              (02) 9648 2100
            </p>
            <p className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4" />
              info@romansbuildingservices.com
            </p>
          </div>
        </div>

        {/* Services Teaser */}
        <Card className="p-6 bg-primary/5 border-primary/20">
          <h3 className="text-lg font-semibold text-foreground mb-3">
            Our Services Include:
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-sm text-muted-foreground">
            <span>• Building Restoration</span>
            <span>• Masonry Work</span>
            <span>• Concrete Repairs</span>
            <span>• Heritage Restoration</span>
            <span>• Structural Repairs</span>
            <span>• Foundation Repairs</span>
          </div>
        </Card>

        {/* Footer */}
        <div className="pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground">
            © 2024 Romans Building Services. Licensed & Insured Building Contractors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnderConstructionPage;