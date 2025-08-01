import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Building, MapPin, Phone, Star } from 'lucide-react';
import { serviceCategories, serviceAreas } from '@/utils/navigationData';
import { Layout } from '@/components/Layout';

const iconMap = {
  Building,
  Hammer: Building, 
  Shield: Building
};

const ServicesOverviewPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            Professional Building Services Across Sydney
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Expert masonry, restoration, and structural solutions for residential and commercial properties. 
            Licensed, insured, and trusted since 1995.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary">
              <Phone className="w-5 h-5 mr-2" />
              0414 922 276
            </Button>
            <Button size="lg" variant="outline">
              Get Free Assessment
            </Button>
          </div>
        </motion.div>

        {/* Service Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => {
              const Icon = iconMap[category.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">{category.label}</h3>
                      </div>
                      
                      <p className="text-muted-foreground mb-6">
                        {category.description}
                      </p>
                      
                      <div className="space-y-3">
                        {category.services.map((service) => (
                          <Link
                            key={service.id}
                            to={service.href}
                            className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors group/service"
                          >
                            <div>
                              <div className="flex items-center space-x-2">
                                <span className="font-medium text-sm group-hover/service:text-primary">
                                  {service.label}
                                </span>
                                {service.badge && (
                                  <Badge variant="secondary" className="text-xs">
                                    {service.badge}
                                  </Badge>
                                )}
                              </div>
                              <p className="text-xs text-muted-foreground mt-1">
                                {service.description}
                              </p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-muted-foreground group-hover/service:text-primary" />
                          </Link>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Service Areas */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Areas We Service</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={area.href}>
                  <Card className="hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {area.label}
                        </h3>
                      </div>
                      
                      <p className="text-muted-foreground text-sm mb-3">
                        {area.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-1">
                        {area.suburbs.slice(0, 4).map((suburb) => (
                          <Badge key={suburb} variant="outline" className="text-xs">
                            {suburb}
                          </Badge>
                        ))}
                        {area.suburbs.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{area.suburbs.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary rounded-2xl p-8 text-center text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-6 opacity-90">
            Get expert evaluation and detailed quote within 24 hours
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Star className="w-5 h-5 mr-2" />
              Get Free Assessment
            </Button>
            <Button size="lg" className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-colors">
              <Phone className="w-5 h-5 mr-2" />
              Call: 0414 922 276
            </Button>
          </div>
          
          <div className="flex items-center justify-center space-x-6 mt-6 text-sm opacity-75">
            <span>✓ Licensed & Insured</span>
            <span>✓ 25+ Years Experience</span>
            <span>✓ 2-Hour Response</span>
          </div>
        </motion.section>
      </div>
    </Layout>
  );
};

export default ServicesOverviewPage;