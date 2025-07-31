import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Quote, ArrowLeft, ArrowRight, MapPin, Calendar } from 'lucide-react';

export const ReviewsCarouselSection = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const reviews = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      location: 'Paddington, Sydney',
      date: 'March 2024',
      rating: 5,
      title: 'Exceptional Heritage Restoration',
      content: 'Romans Building Services transformed our 1890s terrace house beautifully. Their attention to detail and respect for heritage features was outstanding. The team was professional, punctual, and the quality exceeded our expectations.',
      project: 'Heritage Terrace Restoration',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'North Sydney',
      date: 'February 2024',
      rating: 5,
      title: 'Professional Commercial Work',
      content: 'Outstanding work on our office building. The team delivered on time and within budget. The structural repairs were completed with minimal disruption to our business operations. Highly recommend their commercial services.',
      project: 'Commercial Building Repairs',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      location: 'Manly, Sydney',
      date: 'January 2024',
      rating: 5,
      title: 'Emergency Response Excellence',
      content: 'When we had structural damage from storms, Romans Building Services responded within hours. Their emergency repair work was swift and thorough. They really saved our property from further damage.',
      project: 'Emergency Structural Repairs',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 4,
      name: 'David Wilson',
      location: 'Leichhardt, Sydney',
      date: 'December 2023',
      rating: 5,
      title: 'Perfect Heritage Matching',
      content: 'The brick extension blends seamlessly with our Federation home. You cannot tell where the old ends and new begins. The craftsmanship is exceptional and they used period-appropriate materials throughout.',
      project: 'Federation Home Extension',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 5,
      name: 'Lisa Rodriguez',
      location: 'Bondi, Sydney',
      date: 'November 2023',
      rating: 5,
      title: 'Waterproofing Specialists',
      content: 'After years of water damage issues, Romans Building Services finally solved our problems. Their waterproofing solution has kept our basement completely dry through multiple storms. Excellent warranty support too.',
      project: 'Basement Waterproofing',
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 6,
      name: 'James Murphy',
      location: 'Surry Hills, Sydney',
      date: 'October 2023',
      rating: 5,
      title: 'Transparent & Professional',
      content: 'From quote to completion, the entire process was transparent and professional. No hidden costs, excellent communication, and the final result exceeded expectations. Will definitely use them again.',
      project: 'Structural Assessment & Repairs',
      avatar: '/api/placeholder/60/60'
    }
  ];

  const stats = [
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '1000+', label: 'Happy Clients' },
    { number: '4.9/5', label: 'Average Rating' },
    { number: '25+', label: 'Years Experience' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="relative overflow-hidden">
      {/* Testimonial Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      <div className="absolute inset-0 trust-pattern opacity-10" />
      
      {/* Floating Trust Elements */}
      <div className="absolute top-10 right-20 opacity-20">
        <Star className="w-16 h-16 text-yellow-400 animate-pulse" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <Quote className="w-12 h-12 text-primary animate-pulse delay-500" />
      </div>
      
      <div className="container mx-auto px-4 relative">
      <motion.div
        className="text-center space-y-4 mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">
          What Our <span className="gradient-text">Clients Say</span>
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Don't just take our word for it. Here's what our satisfied clients have to say about our building services.
        </p>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="text-center space-y-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-3xl font-bold text-primary">{stat.number}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* Review Carousel */}
      <div className="relative max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentReview}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="floating-shadow hover-glow">
              <CardContent className="p-8 lg:p-12">
                <div className="space-y-6">
                  {/* Quote Icon */}
                  <Quote className="w-12 h-12 text-primary/20" />

                  {/* Review Content */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {renderStars(reviews[currentReview].rating)}
                    </div>
                    
                    <h3 className="text-2xl font-bold">{reviews[currentReview].title}</h3>
                    
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      "{reviews[currentReview].content}"
                    </p>
                  </div>

                  {/* Review Footer */}
                  <div className="flex items-center justify-between pt-6 border-t">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-lg font-semibold text-primary">
                          {reviews[currentReview].name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold">{reviews[currentReview].name}</div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{reviews[currentReview].location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{reviews[currentReview].date}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-sm font-medium text-primary">
                        {reviews[currentReview].project}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <button
          onClick={prevReview}
          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-background border rounded-full shadow-lg hover:bg-muted transition-colors z-10"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={nextReview}
          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-background border rounded-full shadow-lg hover:bg-muted transition-colors z-10"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentReview(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentReview 
                  ? 'bg-primary scale-125' 
                  : 'bg-muted hover:bg-muted-foreground/30'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Review Sources */}
      <motion.div
        className="mt-16 text-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">See More Reviews</h3>
          <p className="text-muted-foreground">
            Check out hundreds more reviews on our Google Business profile and industry platforms
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Button variant="outline" size="lg" className="hover-lift">
            <Star className="w-5 h-5 mr-2 text-yellow-400" />
            Google Reviews (4.9★)
          </Button>
          <Button variant="outline" size="lg" className="hover-lift">
            <Star className="w-5 h-5 mr-2 text-yellow-400" />
            TrustPilot (4.8★)
          </Button>
          <Button variant="outline" size="lg" className="hover-lift">
            <Star className="w-5 h-5 mr-2 text-yellow-400" />
            HiPages (4.9★)
          </Button>
        </div>

        {/* CTA */}
        <motion.div
          className="pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 cta-shadow hover-lift"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Our Happy Clients
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Experience the Romans Building Services difference for yourself
          </p>
        </motion.div>
      </motion.div>
    </div>
    </div>
  );
};