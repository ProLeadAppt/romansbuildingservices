import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Phone, Star, Shield, Clock, Award } from "lucide-react";
import beforeAfterImage from "@/assets/before-after.jpg";

export default function RemedialBuildingPage() {
  const services = [
    "Building Defect Rectification",
    "Strata Building Repairs", 
    "Facade Maintenance",
    "Structural Defect Repair",
    "Building Compliance Upgrades",
    "Emergency Building Repairs"
  ];

  const features = [
    { icon: Shield, title: "Remedial Specialists", description: "Expert building defect identification and rectification" },
    { icon: Clock, title: "25+ Years Experience", description: "Decades of experience in remedial building work" },
    { icon: Award, title: "Strata Approved", description: "Approved contractor for major strata building repairs" },
    { icon: Star, title: "Compliance Experts", description: "Ensuring all repairs meet current building standards" }
  ];

  return (
    <div className="min-h-screen bg-background">
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Remedial Building Specialists</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Expert Remedial Building Services
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Professional building defect rectification and remedial repair services. 
                From minor defects to major building compliance issues, we fix buildings right.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  Get Building Assessment
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
                alt="Remedial building repair work" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="text-3xl font-bold text-primary">300+</div>
                <div className="text-sm text-muted-foreground">Strata Projects</div>
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
              Remedial Building Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive building defect rectification and remedial repair solutions
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
                    Professional {service.toLowerCase()} ensuring compliance with 
                    current building standards and long-term building performance.
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
              Remedial Building Excellence
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
            Building Defects Need Fixing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Free building defect assessment and remedial consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Get Defect Assessment
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 border-primary/20 text-primary bg-background/90 hover:bg-primary hover:text-primary-foreground">
              <Phone className="mr-2 h-5 w-5" />
              Emergency Building Repair
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}