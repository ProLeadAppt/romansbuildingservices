import React from 'react';
import { motion } from 'framer-motion';
import { SmoothScrollNavigation } from '@/components/SmoothScrollNavigation';
import { ModernHeroSection } from '@/components/ModernHeroSection';
import { AnimatedAboutSection } from '@/components/AnimatedAboutSection';
import { InteractiveServicesSection } from '@/components/InteractiveServicesSection';
import { ProjectGallerySection } from '@/components/ProjectGallerySection';
import { ProcessTimelineSection } from '@/components/ProcessTimelineSection';
import { ReviewsCarouselSection } from '@/components/ReviewsCarouselSection';
import { ModernContactSection } from '@/components/ModernContactSection';

const SinglePageApp = () => {
  return (
    <div className="min-h-screen scroll-smooth gradient-mesh">
      <SmoothScrollNavigation />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen">
        <ModernHeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <AnimatedAboutSection />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <InteractiveServicesSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <ProjectGallerySection />
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 bg-muted/30">
        <ProcessTimelineSection />
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20">
        <ReviewsCarouselSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-primary/5">
        <ModernContactSection />
      </section>
    </div>
  );
};

export default SinglePageApp;