import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Award, CheckCircle } from 'lucide-react';
import { LocalBusinessSchema } from '@/components/LocalSEO/StructuredData';

const NorthShorePage = () => {
  const services = [
    'Heritage Restoration',
    'Structural Repairs', 
    'Foundation Underpinning',
    'Masonry & Brickwork',
    'Concrete Cancer Treatment',
    'Waterproofing Solutions',
    'Building Inspections',
    'Priority Structural Repairs'
  ];

  const suburbs = [
    'Chatswood', 'Mosman', 'Lane Cove', 'Willoughby', 'St Leonards',
    'Neutral Bay', 'Cremorne', 'Cammeray', 'Crows Nest', 'Milsons Point'
  ];

  return (
    <div>
      <LocalBusinessSchema />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-secondary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              North Shore Specialists
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Premium Building Services
              <span className="text-primary block">North Shore Sydney</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Expert building restoration and structural repairs across Sydney's prestigious North Shore. 
              From heritage homes in Mosman to modern developments in Chatswood.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Call 0414 922 276
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Free North Shore Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for North Shore */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why North Shore Residents Choose Romans Building
            </h2>
            <p className="text-lg text-muted-foreground">
              Deep understanding of North Shore architecture, local council requirements, and heritage preservation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Heritage Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Specialized experience with North Shore's Federation and Victorian-era homes, 
                  ensuring authentic restoration that preserves historical integrity.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Local Knowledge</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Understanding of North Shore Council requirements, heritage overlays, 
                  and local building codes specific to this prestigious area.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Premium Service</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  White-glove service standards matching North Shore expectations, 
                  with minimal disruption to your premium lifestyle.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Comprehensive Building Services
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-background rounded-lg border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Suburbs We Service */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              North Shore Suburbs We Service
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
              {suburbs.map((suburb) => (
                <Badge key={suburb} variant="outline" className="p-3 text-center justify-center">
                  {suburb}
                </Badge>
              ))}
            </div>
            
            <Card className="text-left">
              <CardHeader>
                <CardTitle>North Shore Building Expertise</CardTitle>
                <CardDescription>
                  Specialized services for the unique challenges of North Shore properties
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Heritage & Character Homes:</h4>
                  <p className="text-muted-foreground text-sm">
                    Expert restoration of Federation, Victorian, and Edwardian homes across Mosman, 
                    Neutral Bay, and surrounding prestigious suburbs.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Modern Developments:</h4>
                  <p className="text-muted-foreground text-sm">
                    Structural repairs and maintenance for contemporary apartments and townhouses 
                    in Chatswood, St Leonards, and Lane Cove.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Council Compliance:</h4>
                  <p className="text-muted-foreground text-sm">
                    Full understanding of North Shore council requirements, heritage overlays, 
                    and building approval processes.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Enhance Your North Shore Property?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact Romans Building Services for premium building solutions across the North Shore. 
            Expert craftsmanship that matches your expectations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-white text-primary hover:bg-white/90">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 0414 922 276
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-primary/10 backdrop-blur-sm">
              Schedule Assessment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NorthShorePage;