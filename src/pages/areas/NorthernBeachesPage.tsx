import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Waves, Shield, CheckCircle } from 'lucide-react';
import { LocalBusinessSchema } from '@/components/LocalSEO/StructuredData';

const NorthernBeachesPage = () => {
  const services = [
    'Coastal Protection',
    'Salt Damage Restoration', 
    'Structural Marine Repairs',
    'Stone Protection',
    'Concrete Cancer Treatment',
    'Heritage Beach House Restoration',
    'Foundation Stabilization',
    'Professional Storm Damage Repairs'
  ];

  const suburbs = [
    'Manly', 'Dee Why', 'Avalon', 'Mona Vale', 'Collaroy',
    'Freshwater', 'Curl Curl', 'Narrabeen', 'Palm Beach', 'Warriewood'
  ];

  return (
    <div>
      <LocalBusinessSchema />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-secondary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <Waves className="w-4 h-4 mr-2" />
              Coastal Stonework Specialists
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Expert Coastal Stonework Services
              <span className="text-primary block">Northern Beaches</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Specialized stonework restoration and structural repairs for Northern Beaches properties. 
              Expert solutions for coastal weathering, salt damage, and marine environment challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Call +61 483 981 292
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Free Coastal Assessment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Coastal Challenges Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Coastal Stonework Challenges We Solve
            </h2>
            <p className="text-lg text-muted-foreground">
              The Northern Beaches marine environment presents unique challenges that require specialized stonework expertise
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Waves className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Salt Damage Restoration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Expert treatment of salt-induced concrete cancer, mortar degradation, 
                  and structural corrosion common in beachfront properties.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <CardTitle>Stone Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Advanced stone protection solutions designed 
                  to withstand coastal storms and constant salt spray exposure.
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
                  Deep understanding of Northern Beaches building codes, coastal overlays, 
                  and environmental protection requirements.
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
              Specialized Coastal Stonework Services
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

      {/* Featured Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8 text-center">
              Recent Northern Beaches Projects
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Manly Beach House Restoration</CardTitle>
                  <CardDescription>Heritage beachfront property renovation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                     Complete structural restoration of 1920s beach house including salt damage remediation, 
                     foundation stabilization, and heritage masonry restoration.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Heritage Restoration</Badge>
                    <Badge variant="secondary">Salt Damage</Badge>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Avalon Cliff Face Stabilization</CardTitle>
                  <CardDescription>Emergency structural engineering project</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Critical foundation underpinning and retaining wall construction for cliff-top residence 
                    following coastal erosion damage.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Foundation Repair</Badge>
                    <Badge variant="secondary">Professional Service</Badge>
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
              Northern Beaches Suburbs We Service
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
                <CardTitle>Northern Beaches Stonework Solutions</CardTitle>
                <CardDescription>
                  Tailored stonework services for the unique coastal environment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Beachfront Properties:</h4>
                  <p className="text-muted-foreground text-sm">
                    Specialized protection and restoration for properties directly exposed to salt spray, 
                    storm surge, and coastal erosion from Palm Beach to Manly.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Heritage Beach Houses:</h4>
                  <p className="text-muted-foreground text-sm">
                    Authentic restoration of historic beach cottages and heritage homes while 
                    implementing modern coastal protection measures.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Modern Coastal Homes:</h4>
                  <p className="text-muted-foreground text-sm">
                    Structural maintenance and enhancement of contemporary beachside developments 
                    in Dee Why, Collaroy, and surrounding areas.
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
            Protect Your Coastal Property Investment
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Don't let coastal weathering damage your Northern Beaches property. 
            Expert coastal stonework solutions with guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-white text-primary hover:bg-white/90">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: +61 483 981 292
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-primary bg-primary/10 backdrop-blur-sm">
              Book Coastal Assessment
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NorthernBeachesPage;