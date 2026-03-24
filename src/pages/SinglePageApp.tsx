import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Romans Building Services | Heritage Restoration & Masonry | Sydney</title>
        <meta
          name="description"
          content="Heritage restoration, masonry repairs and stone construction across Sydney since 1995. Licensed, insured, 30 years experience. Call Minas for a quote."
        />
      </Helmet>
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
