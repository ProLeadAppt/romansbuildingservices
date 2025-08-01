import React from 'react';
import { Layout } from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Clock, Star } from 'lucide-react';
import { serviceAreas } from '@/utils/navigationData';
import { LocalBusinessSchema } from '@/components/LocalSEO/StructuredData';

const ServicesAreasPage = () => {
  const allSuburbs = serviceAreas.flatMap(area => area.suburbs);
  
  return (
    <Layout>
      <LocalBusinessSchema />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-secondary/5 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              Sydney Wide Service
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Service Areas Across
              <span className="text-primary block">Greater Sydney</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Professional building services across all Sydney regions. From heritage restoration in Paddington 
              to modern repairs in Parramatta, we deliver expert craftsmanship to your doorstep.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                <Phone className="w-5 h-5 mr-2" />
                Call 0414 922 276
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                Get Free Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Service Areas */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Primary Service Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive building services across Sydney's most prestigious and dynamic neighborhoods
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceAreas.map((area) => (
              <Card key={area.id} className="group hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{area.label}</CardTitle>
                    <Badge variant="outline">
                      {area.suburbs.length} suburbs
                    </Badge>
                  </div>
                  <CardDescription className="text-base">
                    {area.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground mb-2">
                        KEY SUBURBS WE SERVICE:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {area.suburbs.slice(0, 3).map((suburb) => (
                          <Badge key={suburb} variant="secondary" className="text-xs">
                            {suburb}
                          </Badge>
                        ))}
                        {area.suburbs.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{area.suburbs.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>24/7 Emergency Service Available</span>
                    </div>
                    
                    <Button 
                      className="w-full group-hover:bg-primary/90 transition-colors"
                      onClick={() => window.location.href = area.href}
                    >
                      View {area.label} Services
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Suburbs Section */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Complete Suburb Coverage
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Romans Building Services provides expert masonry, restoration, and structural repair services 
              across {allSuburbs.length}+ Sydney suburbs. Local knowledge, professional results.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {allSuburbs.map((suburb) => (
                <div key={suburb} className="text-center p-3 bg-background rounded-lg border hover:border-primary/20 transition-colors">
                  <span className="text-sm font-medium text-foreground">{suburb}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local SEO Keywords Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Professional Building Services Near You
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    Heritage & Restoration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Heritage restoration Paddington</li>
                    <li>• Brick repair Sydney CBD</li>
                    <li>• Stone masonry Woollahra</li>
                    <li>• Building restoration Surry Hills</li>
                    <li>• Sandstone repair Double Bay</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    Structural & Foundation
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Foundation repairs Bondi</li>
                    <li>• Structural engineers Mosman</li>
                    <li>• Underpinning services Manly</li>
                    <li>• Load bearing walls Chatswood</li>
                    <li>• Concrete repairs Parramatta</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contact Romans Building Services today for expert building services across Sydney. 
            Free quotes, professional advice, guaranteed results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Phone className="w-5 h-5 mr-2" />
              Call Now: 0414 922 276
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Get Free Assessment
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesAreasPage;