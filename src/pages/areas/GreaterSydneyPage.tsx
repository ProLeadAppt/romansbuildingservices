import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Truck, CheckCircle } from 'lucide-react';
import { LocalBusinessSchema } from '@/components/LocalSEO/StructuredData';

const GreaterSydneyPage = () => {
  const services = [
    'Commercial Building Repairs',
    'Industrial Structural Work', 
    'Residential Foundation Repairs',
    'Large-Scale Masonry Projects',
    'Infrastructure Maintenance',
    'Emergency Structural Response',
    'Multi-Unit Developments',
    'Government Contract Work'
  ];

  const suburbs = [
    'Parramatta', 'Hornsby', 'Sutherland', 'Blacktown', 'Liverpool',
    'Penrith', 'Campbelltown', 'Bankstown', 'Fairfield', 'Auburn'
  ];

  return (
    <div>
      <LocalBusinessSchema />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-secondary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Truck className="w-4 h-4 mr-2" />
              Metropolitan Wide Service
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Building Services Across
              <span className="text-primary block">Greater Sydney</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Comprehensive building and structural services across Sydney's outer regions. 
              From commercial projects in Parramatta to residential repairs in Penrith.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Call 0414 922 276
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Metro Wide Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Comprehensive Greater Sydney Coverage
            </h2>
            <p className="text-lg text-muted-foreground">
              Professional building services across Sydney's growth corridors and established suburbs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Rapid Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Quick deployment across Greater Sydney with mobile teams 
                  strategically positioned for optimal response times.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Large Scale Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Capacity for major commercial and residential developments 
                  across outer Sydney growth areas.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Local Expertise</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Understanding of diverse council requirements and local 
                  building conditions across Greater Sydney regions.
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
              Metropolitan Building Services
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

      {/* Major Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Major Greater Sydney Projects
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Parramatta CBD Office Complex</CardTitle>
                  <CardDescription>Large-scale commercial restoration</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive structural repairs and facade restoration of 12-story office building 
                    including concrete cancer treatment and seismic strengthening.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Commercial</Badge>
                    <Badge variant="secondary">Structural Engineering</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Blacktown Industrial Warehouse</CardTitle>
                  <CardDescription>Manufacturing facility restoration</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Complete structural assessment and repair of 5,000m² industrial facility 
                    including foundation stabilization and load-bearing wall reconstruction.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Industrial</Badge>
                    <Badge variant="secondary">Foundation Repair</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Suburbs We Service */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              Greater Sydney Regions We Service
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
                <CardTitle>Greater Sydney Building Solutions</CardTitle>
                <CardDescription>
                  Tailored services for diverse metropolitan requirements
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Western Sydney Growth Areas:</h4>
                  <p className="text-muted-foreground text-sm">
                    Supporting rapid development in Penrith, Campbelltown, and surrounding growth corridors 
                    with scalable building solutions for new communities.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Established Suburban Centers:</h4>
                  <p className="text-muted-foreground text-sm">
                    Heritage and character building preservation in established areas like Hornsby, 
                    Sutherland, and central business districts.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Commercial & Industrial:</h4>
                  <p className="text-muted-foreground text-sm">
                    Large-scale commercial and industrial building maintenance across 
                    Parramatta, Blacktown, and major employment centers.
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
            Ready for Your Greater Sydney Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            No project too large or location too distant. Romans Building Services 
            delivers professional results across all of Greater Sydney.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 0414 922 276
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Project Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GreaterSydneyPage;