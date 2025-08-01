import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Star, Shield, Clock, Award } from "lucide-react";
import beforeAfterImage from "@/assets/before-after.jpg";

export default function WaterproofingPage() {
  const services = [
    "Basement Waterproofing",
    "Roof & Deck Waterproofing", 
    "Bathroom Waterproofing",
    "Balcony Waterproofing",
    "Foundation Waterproofing",
    "Leak Detection & Repair"
  ];

  const features = [
    { icon: Shield, title: "Waterproofing Specialists", description: "Expert waterproofing solutions for all building types" },
    { icon: Clock, title: "25+ Years Experience", description: "Decades of experience in waterproofing and leak prevention" },
    { icon: Award, title: "Advanced Systems", description: "Latest waterproofing technologies and membrane systems" },
    { icon: Star, title: "Long-Term Warranty", description: "Extended warranties on all waterproofing installations" }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Waterproofing Specialists</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Professional Waterproofing Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Advanced waterproofing solutions for residential and commercial properties. 
                From leak prevention to complete waterproofing systems, we keep your building dry.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Get Waterproofing Quote
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 0414 922 276
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={beforeAfterImage} 
                alt="Waterproofing installation work" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-primary">15 Yr</div>
                <div className="text-sm text-muted-foreground">Warranty</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Waterproofing Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete waterproofing solutions for all areas of your building
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <span>{service}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Professional {service.toLowerCase()} using advanced membrane systems and 
                    proven waterproofing techniques for long-lasting protection.
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Waterproofing Excellence
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Water Leak Problems?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Free leak assessment and waterproofing consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Get Leak Assessment
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-primary-foreground/50 text-primary-foreground bg-transparent hover:bg-primary-foreground hover:text-primary">
              <Phone className="mr-2 h-5 w-5" />
              Emergency Leak Repair
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}