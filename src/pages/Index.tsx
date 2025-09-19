import { RomansPremiumHeroSection } from "@/components/RomansPremiumHeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { AreasWeServeSection } from "@/components/AreasWeServeSection";
import { RecentProjectsSection } from "@/components/RecentProjectsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { LocalBusinessSchema } from "@/components/LocalSEO/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LocalBusinessSchema />
      <RomansPremiumHeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <AreasWeServeSection />
      <RecentProjectsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
