import React from 'react';
import { CleanNavigation } from '@/components/CleanNavigation';
import { CleanHeroSection } from '@/components/CleanHeroSection';
import { AnimatedAboutSection } from '@/components/AnimatedAboutSection';
import { InteractiveServicesSection } from '@/components/InteractiveServicesSection';
import { ProjectGallerySection } from '@/components/ProjectGallerySection';
import { ProcessTimelineSection } from '@/components/ProcessTimelineSection';
import { ReviewsCarouselSection } from '@/components/ReviewsCarouselSection';
import { ModernContactSection } from '@/components/ModernContactSection';

const SinglePageApp = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <CleanNavigation />
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen">
        <CleanHeroSection />
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-muted/30">
        <AnimatedAboutSection />
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <InteractiveServicesSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-muted/30">
        <ProjectGallerySection />
      </section>

      {/* Process Section */}
      <section id="process" className="py-20">
        <ProcessTimelineSection />
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-muted/30">
        <ReviewsCarouselSection />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <ModernContactSection />
      </section>
    </div>
  );
};

export default SinglePageApp;