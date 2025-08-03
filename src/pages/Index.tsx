import { HeroSection } from "@/components/HeroSection";
import { RomansPremiumHeroSection } from "@/components/RomansPremiumHeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { LocalBusinessSchema } from "@/components/LocalSEO/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen">
      <LocalBusinessSchema />
      <RomansPremiumHeroSection />
      <ProblemSolutionSection />
      <ServicesSection />
      <SocialProofSection />
      <LeadCaptureForm />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
