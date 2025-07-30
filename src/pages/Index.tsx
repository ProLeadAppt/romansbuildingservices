import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSolutionSection } from "@/components/ProblemSolutionSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SocialProofSection } from "@/components/SocialProofSection";
import { LeadCaptureForm } from "@/components/LeadCaptureForm";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
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
