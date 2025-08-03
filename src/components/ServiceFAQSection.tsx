import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Shield, Phone, Star, Award } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

interface ServiceFAQSectionProps {
  serviceName: string;
  faqs: FAQ[];
  emergencyAvailable?: boolean;
  averageProjectTime?: string;
  
  className?: string;
}

export const ServiceFAQSection: React.FC<ServiceFAQSectionProps> = ({
  serviceName,
  faqs,
  emergencyAvailable = true,
  averageProjectTime = "1-3 weeks",
  
  className = ""
}) => {
  // Group FAQs by category if categories are provided
  const groupedFAQs = faqs.reduce((acc, faq) => {
    const category = faq.category || 'General';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(faq);
    return acc;
  }, {} as Record<string, FAQ[]>);

  const quickFacts = [
    {
      icon: Clock,
      label: "Project Timeline",
      value: averageProjectTime,
      color: "text-blue-600"
    },
    {
      icon: Star,
      label: "Customer Rating",
      value: "4.9/5 stars",
      color: "text-yellow-600"
    },
    {
      icon: Award,
      label: "Licensed & Insured",
      value: "Fully Certified",
      color: "text-purple-600"
    }
  ];

  return (
    <section className={`py-16 bg-muted/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge className="mb-4">Frequently Asked Questions</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {serviceName} - FAQ
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get instant answers to common questions about our {serviceName.toLowerCase()} services.
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Quick Facts */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span>Quick Facts</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickFacts.map((fact, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
                    <fact.icon className={`w-5 h-5 ${fact.color}`} />
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">{fact.label}</div>
                      <div className="text-sm font-semibold">{fact.value}</div>
                    </div>
                  </div>
                ))}
                
                {emergencyAvailable && (
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-center space-x-2 text-primary mb-2">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm font-semibold">24/7 Emergency Service</span>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Available for urgent repairs and emergency situations
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* FAQ Accordion */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Common Questions</CardTitle>
              </CardHeader>
              <CardContent>
                {Object.entries(groupedFAQs).map(([category, categoryFAQs]) => (
                  <div key={category} className="mb-6 last:mb-0">
                    {Object.keys(groupedFAQs).length > 1 && (
                      <h3 className="text-lg font-semibold mb-4 text-primary border-b border-border pb-2">
                        {category}
                      </h3>
                    )}
                    
                    <Accordion type="single" collapsible className="w-full space-y-2">
                      {categoryFAQs.map((faq, index) => (
                        <AccordionItem 
                          key={`${category}-${index}`} 
                          value={`${category}-${index}`}
                          className="border border-border rounded-lg px-4"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-4">
                            <span className="text-sm font-medium">{faq.question}</span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-4">
                            <div className="text-sm text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our experts are here to help. Get personalized answers and a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+61483981292" 
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-50 transition-colors touch-target"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Expert Now
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors touch-target"
              >
                Get Free Quote
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

// Default FAQ data for different services
export const masonryFAQs: FAQ[] = [
  {
    question: "How long does a typical masonry project take?",
    answer: "Most residential masonry projects take 1-3 weeks depending on size and complexity. Small repairs may be completed in 1-2 days, while larger projects like retaining walls or extensive brickwork can take 2-4 weeks. We provide detailed timelines during our free assessment.",
    category: "Project Timeline"
  },
  {
    question: "What types of masonry services do you offer?",
    answer: "We offer comprehensive masonry services including brick pointing and repointing, stone masonry repairs, structural brickwork, retaining wall construction, brick and block work, and heritage masonry restoration. All work is performed by licensed masons with 30+ years experience.",
    category: "Services"
  },
  {
    question: "How much do masonry services cost?",
    answer: "Costs vary depending on the scope of work, materials, and access. Small pointing repairs start from $500, while larger projects range from $2,000-$15,000+. We provide detailed quotes after our free on-site assessment.",
    category: "Pricing"
  },
  {
    question: "Can you match existing bricks and mortar?",
    answer: "Yes, we specialize in matching existing materials for seamless repairs. We analyze the existing brick type, color, and mortar composition to ensure perfect color and texture matching, especially important for heritage buildings.",
    category: "Materials"
  },
  {
    question: "Do you work on heritage buildings?",
    answer: "Absolutely. We have extensive experience with heritage masonry restoration using traditional techniques and approved materials. We work closely with heritage consultants and councils to ensure all work meets conservation requirements.",
    category: "Heritage Work"
  },
  {
    question: "What areas do you service?",
    answer: "We service all of Sydney including CBD, North Shore, Eastern Suburbs, Inner West, Northern Beaches, and Greater Sydney areas. Emergency services are available 24/7 across all service areas.",
    category: "Service Areas"
  },
  {
    question: "Do you offer emergency masonry repairs?",
    answer: "Yes, we provide 24/7 emergency services for urgent structural issues, wall collapses, or dangerous masonry conditions. Emergency response typically within 2-4 hours for critical situations.",
    category: "Emergency Services"
  }
];

export const restorationFAQs: FAQ[] = [
  {
    question: "What types of building restoration do you specialize in?",
    answer: "We specialize in heritage building restoration, structural repairs, facade restoration, stonework restoration, and weatherproofing. Our team has experience with Victorian, Federation, and Art Deco buildings across Sydney.",
    category: "Services"
  },
  {
    question: "How do you handle heritage approvals?",
    answer: "We work closely with heritage consultants and local councils to obtain necessary approvals. Our team understands heritage requirements and uses approved materials and techniques that comply with conservation guidelines.",
    category: "Heritage Compliance"
  },
  {
    question: "What's included in a building restoration assessment?",
    answer: "Our comprehensive assessment includes structural evaluation, material analysis, heritage considerations, detailed scope of work, timeline estimates, and cost projections. We also provide ongoing project management and council liaison.",
    category: "Assessment Process"
  },
  {
    question: "How long do restoration projects typically take?",
    answer: "Restoration projects vary significantly based on scope. Small facade repairs may take 2-4 weeks, while major heritage restorations can take 3-12 months. We provide detailed project timelines during our assessment phase.",
    category: "Project Timeline"
  }
];

export const structuralFAQs: FAQ[] = [
  {
    question: "What structural issues do you repair?",
    answer: "We repair foundation problems, cracked walls, settlement issues, load-bearing wall damage, beam and lintel repairs, and earthquake damage. All work is performed by licensed structural repair specialists.",
    category: "Services"
  },
  {
    question: "Do you work with structural engineers?",
    answer: "Yes, we work closely with qualified structural engineers for assessment and certification. We can arrange engineering reports and ensure all work meets Australian Building Standards.",
    category: "Professional Standards"
  },
  {
    question: "How urgent are structural repairs?",
    answer: "Structural issues should be addressed promptly to prevent further damage and ensure safety. We offer priority scheduling for urgent structural problems and emergency stabilization services.",
    category: "Urgency"
  },
];