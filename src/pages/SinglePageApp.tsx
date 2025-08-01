import React from 'react';
import { ProfessionalHeroSection } from '@/components/ProfessionalHeroSection';
import { AnimatedAboutSection } from '@/components/AnimatedAboutSection';
import { InteractiveServicesSection } from '@/components/InteractiveServicesSection';
import { ProjectGallerySection } from '@/components/ProjectGallerySection';
import { ProcessTimelineSection } from '@/components/ProcessTimelineSection';
import { ReviewsCarouselSection } from '@/components/ReviewsCarouselSection';
import { ModernContactSection } from '@/components/ModernContactSection';
import { Footer } from '@/components/Footer';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { EnhancedShowcaseSection } from '@/components/EnhancedShowcaseSection';
import { LiveSocialProof } from '@/components/LiveSocialProof';
import { FloatingCTA } from '@/components/FloatingCTA';
import { PremiumLoadingScreen } from '@/components/PremiumLoadingScreen';
import {
  LandmarkSkipNavigation, 
  MainLandmark, 
  RegionLandmark, 
  PageStructureManager 
} from '@/components/ARIALandmarks';

const SinglePageApp = () => {
  return (
    <PageStructureManager>
      <div className="min-h-screen scroll-smooth">
        <LandmarkSkipNavigation />
        
        {/* Main Content Area */}
        <MainLandmark id="main-content" label="Main page content">
          {/* Hero Section */}
          <RegionLandmark 
            id="hero" 
            regionLabel="Hero section with company introduction and contact form"
            className="min-h-screen"
          >
            <ErrorBoundary>
              <ProfessionalHeroSection />
            </ErrorBoundary>
          </RegionLandmark>
        </MainLandmark>

        {/* About Section */}
        <RegionLandmark 
          id="about" 
          regionLabel="About section with company history and team information"
          className="py-16 md:py-20 bg-muted/30"
        >
          <ErrorBoundary>
            <AnimatedAboutSection />
          </ErrorBoundary>
        </RegionLandmark>

        {/* Services Section */}
        <RegionLandmark 
          id="services" 
          regionLabel="Services section showcasing company offerings"
          className="py-16 md:py-20"
        >
          <ErrorBoundary>
            <InteractiveServicesSection />
          </ErrorBoundary>
        </RegionLandmark>

        {/* Projects Section */}
        <RegionLandmark 
          id="projects" 
          regionLabel="Projects gallery showcasing completed work"
          className="py-16 md:py-20 bg-muted/30"
        >
        <ErrorBoundary>
          <ProjectGallerySection />
        </ErrorBoundary>

        <ErrorBoundary>
          <EnhancedShowcaseSection />
        </ErrorBoundary>
        </RegionLandmark>

        {/* Process Section */}
        <RegionLandmark 
          id="process" 
          regionLabel="Process timeline explaining how we work"
          className="py-16 md:py-20"
        >
          <ErrorBoundary>
            <ProcessTimelineSection />
          </ErrorBoundary>
        </RegionLandmark>

        {/* Reviews Section */}
        <RegionLandmark 
          id="reviews" 
          regionLabel="Customer reviews and testimonials"
          className="py-16 md:py-20 bg-muted/30"
        >
          <ErrorBoundary>
            <ReviewsCarouselSection />
          </ErrorBoundary>
        </RegionLandmark>

        {/* Contact Section */}
        <RegionLandmark 
          id="contact" 
          regionLabel="Contact information and inquiry form"
          className="py-16 md:py-20"
        >
          <ErrorBoundary>
            <ModernContactSection />
          </ErrorBoundary>
        </RegionLandmark>

        {/* Footer */}
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </div>

      {/* Live Social Proof */}
      <LiveSocialProof />
      
      {/* Floating CTA */}
      <FloatingCTA />
      
      {/* Premium Loading Screen */}
      <PremiumLoadingScreen />
    </PageStructureManager>
  );
};

export default SinglePageApp;