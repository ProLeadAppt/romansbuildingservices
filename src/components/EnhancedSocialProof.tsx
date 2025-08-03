import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Star, Quote, Calendar, CheckCircle, Shield, 
  Award, Phone, ExternalLink, ChevronLeft, ChevronRight 
} from 'lucide-react';

interface Review {
  id: string;
  author: string;
  initials: string;
  avatar?: string;
  rating: number;
  date: string;
  service: string;
  location: string;
  text: string;
  verified: boolean;
  photos?: string[];
  projectType: string;
}

interface Certification {
  id: string;
  name: string;
  issuer: string;
  logo: string;
  description: string;
  validUntil?: string;
  credentialId?: string;
}

interface TrustIndicator {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  value: string;
  description: string;
  color: string;
}

interface EnhancedSocialProofProps {
  reviews: Review[];
  certifications: Certification[];
  trustIndicators: TrustIndicator[];
  className?: string;
}

export const EnhancedSocialProof: React.FC<EnhancedSocialProofProps> = ({
  reviews,
  certifications,
  trustIndicators,
  className = ""
}) => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [selectedService, setSelectedService] = useState<string>('All');

  // Get unique services for filtering
  const services = ['All', ...Array.from(new Set(reviews.map(review => review.service)))];
  
  // Filter reviews by selected service
  const filteredReviews = selectedService === 'All' 
    ? reviews 
    : reviews.filter(review => review.service === selectedService);

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % filteredReviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex((prev) => (prev - 1 + filteredReviews.length) % filteredReviews.length);
  };

  const currentReview = filteredReviews[currentReviewIndex];
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <section className={`py-16 bg-background ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4">Trust & Credibility</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Trusted by Sydney Property Owners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence is reflected in our certifications, customer reviews, 
            and proven track record across Sydney.
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {trustIndicators.map((indicator) => (
            <Card key={indicator.id} className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${indicator.color} mb-4`}>
                <indicator.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{indicator.value}</div>
              <div className="text-sm font-medium text-foreground mb-2">{indicator.title}</div>
              <div className="text-xs text-muted-foreground">{indicator.description}</div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Customer Reviews Section */}
          <div>
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-3">
                    <Star className="w-6 h-6 text-yellow-500" />
                    <span>Customer Reviews</span>
                    <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                      {averageRating.toFixed(1)}/5.0
                    </Badge>
                  </CardTitle>
                  <div className="text-sm text-muted-foreground">
                    {filteredReviews.length} reviews
                  </div>
                </div>
                
                {/* Service Filter */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {services.map((service) => (
                    <Button
                      key={service}
                      variant={selectedService === service ? "default" : "outline"}
                      size="sm"
                      onClick={() => {
                        setSelectedService(service);
                        setCurrentReviewIndex(0);
                      }}
                    >
                      {service}
                    </Button>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent>
                {currentReview && (
                  <motion.div
                    key={currentReview.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {/* Review Header */}
                    <div className="flex items-start space-x-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={currentReview.avatar} alt={currentReview.author} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                          {currentReview.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h4 className="font-semibold">{currentReview.author}</h4>
                          {currentReview.verified && (
                            <Badge variant="outline" className="text-xs">
                              <CheckCircle className="w-3 h-3 mr-1" />
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <div className="flex">
                            {Array.from({ length: currentReview.rating }).map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span>•</span>
                          <span>{new Date(currentReview.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>

                    {/* Review Content */}
                    <div className="relative">
                      <Quote className="absolute -top-2 -left-2 w-8 h-8 text-muted-foreground/20" />
                      <p className="text-muted-foreground leading-relaxed pl-6">
                        {currentReview.text}
                      </p>
                    </div>

                    {/* Review Details */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t">
                      <Badge variant="secondary">{currentReview.service}</Badge>
                      <Badge variant="outline">{currentReview.projectType}</Badge>
                      <Badge variant="outline" className="text-xs">
                        <Calendar className="w-3 h-3 mr-1" />
                        {currentReview.location}
                      </Badge>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between pt-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={prevReview}
                        disabled={filteredReviews.length <= 1}
                      >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Previous
                      </Button>
                      
                      <div className="text-xs text-muted-foreground">
                        {currentReviewIndex + 1} of {filteredReviews.length}
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={nextReview}
                        disabled={filteredReviews.length <= 1}
                      >
                        Next
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </motion.div>
                )}

                {/* CTA */}
                <div className="mt-6 pt-6 border-t text-center">
                  <Button asChild>
                    <a 
                      href="https://g.page/r/your-business-id/review" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Leave a Google Review
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Certifications & Credentials */}
          <div>
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Shield className="w-6 h-6 text-green-600" />
                  <span>Certifications & Credentials</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {certifications.map((cert) => (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start space-x-4 p-4 border rounded-lg hover:shadow-md transition-shadow"
                  >
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      <img 
                        src={cert.logo} 
                        alt={cert.issuer}
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          (e.target as HTMLImageElement).style.display = 'none';
                        }}
                      />
                      <Award className="w-8 h-8 text-primary" style={{display: 'none'}} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm mb-1">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground mb-2">{cert.issuer}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                      
                      <div className="flex items-center justify-between mt-3">
                        {cert.validUntil && (
                          <div className="text-xs text-muted-foreground">
                            Valid until: {new Date(cert.validUntil).toLocaleDateString()}
                          </div>
                        )}
                        {cert.credentialId && (
                          <div className="text-xs text-muted-foreground">
                            ID: {cert.credentialId}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* Professional Memberships */}
                <div className="pt-6 border-t">
                  <h4 className="font-semibold mb-4 flex items-center">
                    <Award className="w-5 h-5 mr-2 text-primary" />
                    Professional Memberships
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium">Master Builders Association NSW</span>
                      <Badge variant="secondary">Active Member</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium">Housing Industry Association</span>
                      <Badge variant="secondary">Professional Member</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                      <span className="text-sm font-medium">Australian Institute of Building</span>
                      <Badge variant="secondary">Certified</Badge>
                    </div>
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="pt-6 border-t text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Licensed, insured, and certified for your peace of mind
                  </p>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Verify Our Credentials
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sample data
export const sampleReviews: Review[] = [
  {
    id: 'review-1',
    author: 'Sarah Thompson',
    initials: 'ST',
    rating: 5,
    date: '2024-01-15',
    service: 'Heritage Restoration',
    location: 'Paddington',
    text: 'Romans Building Services exceeded our expectations with the restoration of our Victorian terrace. Their attention to detail and respect for the heritage aspects was exceptional. The team was professional, punctual, and the quality of work is outstanding.',
    verified: true,
    projectType: 'Residential Restoration'
  },
  {
    id: 'review-2',
    author: 'Michael Chen',
    initials: 'MC',
    rating: 5,
    date: '2023-12-08',
    service: 'Structural Repairs',
    location: 'Sydney CBD',
    text: 'Professional service from start to finish. The structural repairs on our commercial building were completed on time and within budget. The team worked around our business hours which was greatly appreciated.',
    verified: true,
    projectType: 'Commercial Repair'
  },
  {
    id: 'review-3',
    author: 'Jennifer Williams',
    initials: 'JW',
    rating: 5,
    date: '2023-11-22',
    service: 'Masonry Services',
    location: 'Mosman',
    text: 'The retaining wall project transformed our garden and solved our erosion issues perfectly. The craftsmanship is beautiful and the natural stone work complements our home wonderfully. Highly recommended!',
    verified: true,
    projectType: 'Residential Construction'
  },
  {
    id: 'review-4',
    author: 'David Rodriguez',
    initials: 'DR',
    rating: 5,
    date: '2023-10-30',
    service: 'Building Restoration',
    location: 'Inner West',
    text: 'Excellent work on our heritage building facade. The team understood the heritage requirements and used appropriate materials. The project management was excellent and communication was clear throughout.',
    verified: true,
    projectType: 'Heritage Commercial'
  }
];

export const sampleCertifications: Certification[] = [
  {
    id: 'license-nsw',
    name: 'NSW Building Contractor License',
    issuer: 'NSW Fair Trading',
    logo: '/icons/nsw-fair-trading.png',
    description: 'Licensed building contractor for all types of building work across NSW',
    validUntil: '2025-12-31',
    credentialId: 'NSW123456'
  },
  {
    id: 'insurance-public',
    name: 'Public Liability Insurance',
    issuer: 'QBE Insurance',
    logo: '/icons/qbe-logo.png',
    description: '$20 million public liability coverage for complete protection',
    validUntil: '2025-03-15'
  },
  {
    id: 'heritage-certification',
    name: 'Heritage Building Specialist',
    issuer: 'Heritage Council of NSW',
    logo: '/icons/heritage-council.png',
    description: 'Certified specialist for heritage building conservation and restoration',
    validUntil: '2025-06-30'
  }
];

export const sampleTrustIndicators: TrustIndicator[] = [
  {
    id: 'experience',
    icon: Calendar,
    title: 'Years Experience',
    value: '30+',
    description: 'Established since 1995',
    color: 'bg-blue-500'
  },
  {
    id: 'projects',
    icon: CheckCircle,
    title: 'Projects Completed',
    value: '500+',
    description: 'Successful builds & restorations',
    color: 'bg-green-500'
  },
  {
    id: 'rating',
    icon: Star,
    title: 'Customer Rating',
    value: '4.9/5',
    description: 'Based on 150+ reviews',
    color: 'bg-yellow-500'
  },
  {
    id: 'quality',
    icon: Shield,
    title: 'Quality Assurance',
    value: 'Premium',
    description: 'Professional standard',
    color: 'bg-purple-500'
  }
];