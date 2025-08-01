import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Star, Shield, Clock, Award } from "lucide-react";
import beforeAfterImage from "@/assets/before-after.jpg";

export default function HeritageRestorationPage() {
  const services = [
    "Heritage Building Assessment",
    "Conservation Management Plans", 
    "Period-Appropriate Materials Sourcing",
    "Traditional Craft Techniques",
    "Council Heritage Approvals",
    "Archaeological Site Protection"
  ];

  const features = [
    { icon: Shield, title: "Heritage Certified", description: "Certified specialists in heritage building conservation" },
    { icon: Clock, title: "25+ Years Heritage Experience", description: "Decades of experience with Sydney's historic buildings" },
    { icon: Award, title: "Council Pre-Approved", description: "Pre-approved with all Sydney councils for heritage work" },
    { icon: Star, title: "Museum Quality Standards", description: "Work meets museum and gallery conservation standards" }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Heritage Conservation Specialists</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Expert Heritage Building Restoration
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Preserving Sydney's architectural heritage with authentic conservation techniques. 
                From Federation terraces to Colonial buildings, we restore with historical accuracy and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Get Heritage Assessment
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Heritage Expert
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={beforeAfterImage} 
                alt="Heritage building restoration work" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-primary">150+</div>
                <div className="text-sm text-muted-foreground">Heritage Projects</div>
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
              Heritage Conservation Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized services for heritage and historically significant buildings
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
                    Professional {service.toLowerCase()} using traditional techniques and 
                    heritage-approved materials for authentic restoration.
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
              Heritage Conservation Experts
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
            Preserve Your Heritage Building
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Expert heritage assessment and conservation planning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Heritage Consultation
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary">
              <Phone className="mr-2 h-5 w-5" />
              Call Heritage Specialist
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}