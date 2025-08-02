import React from 'react';
import { ProjectCaseStudyGallery, sampleCaseStudies } from '@/components/ProjectCaseStudyGallery';
import { InteractiveServiceMap, sydneyServiceAreas } from '@/components/InteractiveServiceMap';
import { EnhancedSocialProof, sampleReviews, sampleCertifications, sampleTrustIndicators } from '@/components/EnhancedSocialProof';
import { ConversionTracking } from '@/components/ConversionTracking';
import { LocalBusinessSchema } from '@/components/LocalSEO/StructuredData';

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      {/* Structured Data */}
      <LocalBusinessSchema />
      
      {/* Project Case Study Gallery */}
      <ProjectCaseStudyGallery caseStudies={sampleCaseStudies} />
      
      {/* Interactive Service Map */}
      <InteractiveServiceMap serviceAreas={sydneyServiceAreas} />
      
      {/* Enhanced Social Proof */}
      <EnhancedSocialProof 
        reviews={sampleReviews}
        certifications={sampleCertifications}
        trustIndicators={sampleTrustIndicators}
      />
      
      {/* Conversion Tracking Analytics */}
      <ConversionTracking />
    </div>
  );
}