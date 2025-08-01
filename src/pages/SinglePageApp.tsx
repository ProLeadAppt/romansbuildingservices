import React from 'react';
import { CleanNavigation } from '@/components/CleanNavigation';
import { KeyboardNavigationGuide } from '@/components/KeyboardNavigationGuide';
import { ProfessionalHeroSection } from '@/components/ProfessionalHeroSection';
import { AnimatedAboutSection } from '@/components/AnimatedAboutSection';
import { InteractiveServicesSection } from '@/components/InteractiveServicesSection';
import { ProjectGallerySection } from '@/components/ProjectGallerySection';
import { ProcessTimelineSection } from '@/components/ProcessTimelineSection';
import { ReviewsCarouselSection } from '@/components/ReviewsCarouselSection';
import { ModernContactSection } from '@/components/ModernContactSection';
import { ErrorBoundary } from '@/components/ErrorBoundary';

const SinglePageApp = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <ErrorBoundary>
        <CleanNavigation />
      </ErrorBoundary>
      
      {/* Hero Section */}
      <section id="hero" className="min-h-screen">
        <ErrorBoundary>
          <ProfessionalHeroSection />
        </ErrorBoundary>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-20 bg-muted/30">
        <ErrorBoundary>
          <AnimatedAboutSection />
        </ErrorBoundary>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-20">
        <ErrorBoundary>
          <InteractiveServicesSection />
        </ErrorBoundary>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-20 bg-muted/30">
        <ErrorBoundary>
          <ProjectGallerySection />
        </ErrorBoundary>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 md:py-20">
        <ErrorBoundary>
          <ProcessTimelineSection />
        </ErrorBoundary>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 md:py-20 bg-muted/30">
        <ErrorBoundary>
          <ReviewsCarouselSection />
        </ErrorBoundary>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-20">
        <ErrorBoundary>
          <ModernContactSection />
        </ErrorBoundary>
      </section>
    </div>
  );
};

export default SinglePageApp;