import { SEO } from '@/components/SEO';
import { RomansPremiumHeroSection } from '@/components/RomansPremiumHeroSection';
import { OptimizedAnimatedAboutSection } from '@/components/OptimizedAnimatedAboutSection';
import { InteractiveServicesSection } from '@/components/InteractiveServicesSection';
import { ProjectGallerySection } from '@/components/ProjectGallerySection';
import { ModernContactSection } from '@/components/ModernContactSection';
import { SectionDivider } from '@/components/SectionDivider';
import { ProcessStrip } from '@/components/ProcessStrip';
import { LocalBusinessSchema } from '@/components/LocalSEO/StructuredData';

const SinglePageApp = () => {
  return (
    <>
      <SEO
        title="Romans Building Services | Heritage Restoration & Masonry | Sydney"
        description="Heritage restoration and masonry by Minas Romanakis. 30 years of stonework, brick repairs, and structural building services across Sydney."
        canonical="/"
        ogImage="/lovable-uploads/12ca1977-0622-414c-a4b7-fa428cde1018.webp"
      />
      <LocalBusinessSchema />

      {/* Hero — full-bleed, cinematic, credential strip included */}
      <RomansPremiumHeroSection />

      {/* About — spacious, grid-breaking, personal */}
      <OptimizedAnimatedAboutSection />

      {/* Angled transition into navy services section */}
      <SectionDivider from="#F5F5F5" to="#0A2E76" variant="angle-down" />

      {/* Services — tiered with photography, navy background */}
      <InteractiveServicesSection />

      {/* Angled transition out of navy into light gallery */}
      <SectionDivider from="#0A2E76" to="#F1F5F9" variant="angle-up" />

      {/* Gallery preview — horizontal portfolio carousel */}
      <ProjectGallerySection />

      {/* Process strip — tight, navy, breaks the rhythm */}
      <ProcessStrip />

      {/* Contact — phone-first, trust-building */}
      <ModernContactSection />
    </>
  );
};

export default SinglePageApp;
