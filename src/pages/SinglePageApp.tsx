import React from 'react';
import { ProfessionalHeroSection } from '@/components/ProfessionalHeroSection';
import { OptimizedAnimatedAboutSection } from '@/components/OptimizedAnimatedAboutSection';
import { LazySection } from '@/components/LazySection';
import { InteractiveServicesSection } from '@/components/InteractiveServicesSection';
import { ProjectGallerySection } from '@/components/ProjectGallerySection';
import { ProcessTimelineSection } from '@/components/ProcessTimelineSection';
import { ReviewsCarouselSection } from '@/components/ReviewsCarouselSection';
import { ModernContactSection } from '@/components/ModernContactSection';
import { Footer } from '@/components/Footer';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { EnhancedShowcaseSection } from '@/components/EnhancedShowcaseSection';


// import { PremiumLoadingScreen } from '@/components/PremiumLoadingScreen'; // Removed for performance
import { DynamicScrollToTop } from '@/components/DynamicScrollToTop';
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
            <LazySection fallback={<div className="h-96 bg-muted/10 animate-pulse rounded-lg" />}>
              <OptimizedAnimatedAboutSection />
            </LazySection>
          </ErrorBoundary>
        </RegionLandmark>

        {/* Services Section */}
        <RegionLandmark 
          id="services" 
          regionLabel="Services section showcasing company offerings"
          className="py-16 md:py-20"
        >
          <ErrorBoundary>
            <LazySection fallback={<div className="h-96 bg-muted/10 animate-pulse rounded-lg" />}>
              <InteractiveServicesSection />
            </LazySection>
          </ErrorBoundary>
        </RegionLandmark>

        {/* Projects Section */}
        <RegionLandmark 
          id="projects" 
          regionLabel="Projects gallery showcasing completed work"
          className="py-16 md:py-20 bg-muted/30"
        >
        <ErrorBoundary>
          <LazySection fallback={<div className="h-96 bg-muted/10 animate-pulse rounded-lg" />}>
            <ProjectGallerySection />
          </LazySection>
        </ErrorBoundary>

        <ErrorBoundary>
          <LazySection fallback={<div className="h-96 bg-muted/10 animate-pulse rounded-lg" />}>
            <EnhancedShowcaseSection />
          </LazySection>
        </ErrorBoundary>
        </RegionLandmark>

        {/* Process Section */}
        <RegionLandmark 
          id="process" 
          regionLabel="Process timeline explaining how we work"
          className="py-16 md:py-20"
        >
          <ErrorBoundary>
            <LazySection fallback={<div className="h-96 bg-muted/10 animate-pulse rounded-lg" />}>
              <ProcessTimelineSection />
            </LazySection>
          </ErrorBoundary>
        </RegionLandmark>

        {/* Reviews Section */}
        <RegionLandmark 
          id="reviews" 
          regionLabel="Customer reviews and testimonials"
          className="py-16 md:py-20 bg-muted/30"
        >
          <ErrorBoundary>
            <LazySection fallback={<div className="h-96 bg-muted/10 animate-pulse rounded-lg" />}>
              <ReviewsCarouselSection />
            </LazySection>
          </ErrorBoundary>
        </RegionLandmark>

        {/* Contact Section */}
        <RegionLandmark 
          id="contact" 
          regionLabel="Contact information and inquiry form"
          className="py-16 md:py-20"
        >
          <ErrorBoundary>
            <LazySection fallback={<div className="h-96 bg-muted/10 animate-pulse rounded-lg" />}>
              <ModernContactSection />
            </LazySection>
          </ErrorBoundary>
        </RegionLandmark>

        {/* Footer */}
        <ErrorBoundary>
          <Footer />
        </ErrorBoundary>
      </div>


      {/* Dynamic Scroll to Top */}
      <DynamicScrollToTop />
      
      {/* Removed Premium Loading Screen for performance */}
    </PageStructureManager>
  );
};

export default SinglePageApp;