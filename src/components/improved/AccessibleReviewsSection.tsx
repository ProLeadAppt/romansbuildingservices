import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, MapPin, Calendar, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AccessibleCarousel } from '@/components/accessibility/AccessibleCarousel';
import { useInclusiveDesign } from '@/components/accessibility/InclusiveDesignProvider';
import { cn } from '@/lib/utils';

const reviews = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    location: 'Paddington, Sydney',
    date: 'March 2024',
    rating: 5,
    title: 'Exceptional Heritage Restoration',
    content: 'Romans Building Services transformed our 1890s terrace house beautifully. Their attention to detail and respect for heritage features was outstanding. The team was professional, punctual, and the quality exceeded our expectations.',
    project: 'Heritage Terrace Restoration',
    verified: true
  },
  {
    id: '2',
    name: 'Michael Chen',
    location: 'North Sydney',
    date: 'February 2024',
    rating: 5,
    title: 'Professional Commercial Work',
    content: 'Outstanding work on our office building. The team delivered on time and within budget. The structural repairs were completed with minimal disruption to our business operations. Highly recommend their commercial services.',
    project: 'Commercial Building Repairs',
    verified: true
  },
  {
    id: '3',
    name: 'Emma Thompson',
    location: 'Manly, Sydney',
    date: 'January 2024',
    rating: 5,
    title: 'Priority Response Excellence',
    content: 'When we had structural damage from storms, Romans Building Services responded within hours. Their priority repair work was swift and thorough. They really saved our property from further damage.',
    project: 'Priority Structural Repairs',
    verified: true
  },
  {
    id: '4',
    name: 'David Wilson',
    location: 'Leichhardt, Sydney',
    date: 'December 2023',
    rating: 5,
    title: 'Perfect Heritage Matching',
    content: 'The brick extension blends seamlessly with our Federation home. You cannot tell where the old ends and new begins. The craftsmanship is exceptional and they used period-appropriate materials throughout.',
    project: 'Federation Home Extension',
    verified: true
  }
];

const stats = [
  { number: '98%', label: 'Customer Satisfaction' },
  { number: '1000+', label: 'Happy Clients' },
  { number: '4.9/5', label: 'Average Rating' },
  { number: '25+', label: 'Years Experience' }
];

export const AccessibleReviewsSection = () => {
  const { preferences } = useInclusiveDesign();
  const [showAllReviews, setShowAllReviews] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const renderStars = (rating: number, reviewerName: string) => {
    return (
      <div className="flex items-center space-x-1" role="img" aria-label={`${rating} out of 5 stars from ${reviewerName}`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star 
            key={i} 
            className={cn(
              "w-5 h-5",
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            )}
            aria-hidden="true"
          />
        ))}
      </div>
    );
  };

  const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
    <Card className="h-full">
      <CardContent className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            {renderStars(review.rating, review.name)}
            <h3 className="text-xl font-bold">{review.title}</h3>
          </div>
          {review.verified && (
            <Badge variant="secondary" className="text-xs">
              Verified Review
            </Badge>
          )}
        </div>

        {/* Quote */}
        <div className="relative">
          <Quote className="w-8 h-8 text-primary/20 absolute -top-2 -left-2" aria-hidden="true" />
          <blockquote className="text-muted-foreground leading-relaxed pl-6">
            "{review.content}"
          </blockquote>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-primary">
                {review.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <div className="font-semibold">{review.name}</div>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <MapPin className="w-4 h-4" aria-hidden="true" />
                  <span>{review.location}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" aria-hidden="true" />
                  <span>{review.date}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm font-medium text-primary">
              {review.project}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  // Prepare carousel items
  const carouselItems = reviews.map(review => ({
    id: review.id,
    title: review.title,
    description: `Review by ${review.name} from ${review.location}`,
    content: <ReviewCard review={review} />
  }));

  return (
    <section 
      ref={sectionRef}
      className="py-16 relative overflow-hidden"
      aria-labelledby="reviews-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <motion.div
          className="text-center space-y-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: preferences.reduceMotion ? 0.2 : 0.8 }}
          viewport={{ once: true }}
        >
          <h2 id="reviews-heading" className="text-4xl font-bold">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real feedback from our satisfied clients about their building service experiences.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: preferences.reduceMotion ? 0 : 0.2, 
            duration: preferences.reduceMotion ? 0.2 : 0.6 
          }}
          viewport={{ once: true }}
          role="group"
          aria-label="Company statistics"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center space-y-2"
              whileHover={preferences.reduceMotion ? {} : { scale: 1.05 }}
              tabIndex={0}
              role="region"
              aria-label={`${stat.label}: ${stat.number}`}
            >
              <div className="text-3xl font-bold text-primary">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Reviews Carousel */}
        <div className="mb-16">
          <AccessibleCarousel
            items={carouselItems}
            autoPlay={!preferences.autoplayPaused}
            autoPlayInterval={6000}
            ariaLabel="Customer reviews carousel"
            reducedMotion={preferences.reduceMotion}
            className="max-w-4xl mx-auto"
          />
        </div>

        {/* Alternative: Show All Reviews Option */}
        <div className="text-center space-y-6">
          <Button
            variant="outline"
            onClick={() => setShowAllReviews(!showAllReviews)}
            aria-expanded={showAllReviews}
            aria-controls="all-reviews"
          >
            {showAllReviews ? 'Hide All Reviews' : 'View All Reviews'}
          </Button>

          {showAllReviews && (
            <motion.div
              id="all-reviews"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: preferences.reduceMotion ? 0.2 : 0.5 }}
            >
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </motion.div>
          )}
        </div>

        {/* External Review Links */}
        <motion.div
          className="mt-16 text-center space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: preferences.reduceMotion ? 0 : 0.4, 
            duration: preferences.reduceMotion ? 0.2 : 0.6 
          }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">See More Reviews</h3>
            <p className="text-muted-foreground">
              Check out hundreds more reviews on our verified business profiles
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Google Reviews', rating: '4.9★', url: 'https://www.google.com/search?q=romans+building+services+reviews#lrd=0x6b12bb0fada7152f:0x1ce36abd4586e82d,3,,,,' },
              { name: 'TrustPilot', rating: '4.8★', url: '#' },
              { name: 'HiPages', rating: '4.9★', url: '#' }
            ].map((platform) => (
              <Button 
                key={platform.name}
                variant="outline" 
                size="lg" 
                asChild
                className="hover:scale-105 transition-transform"
              >
                <a 
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View our ${platform.name} reviews, rated ${platform.rating}`}
                >
                  <Star className="w-5 h-5 mr-2 text-yellow-400" aria-hidden="true" />
                  {platform.name} ({platform.rating})
                </a>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: preferences.reduceMotion ? 0 : 0.6, 
            duration: preferences.reduceMotion ? 0.2 : 0.6 
          }}
          viewport={{ once: true }}
        >
          <Button 
            size="lg" 
            className="text-lg px-8 py-6"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Our Happy Clients
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Experience the Romans Building Services difference for yourself
          </p>
        </motion.div>
      </div>

      {/* Screen reader region for live updates */}
      <div aria-live="polite" aria-atomic="true" className="sr-only">
        Reviews section with {reviews.length} customer testimonials available
      </div>
    </section>
  );
};