import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Search, Hammer, Shield, FlaskConical, CheckCircle } from 'lucide-react';

const ConcreteCancerPage = () => {
  const siblings = getSiblingServices('concrete-repairs', 'concrete-cancer');

  return (
    <ServicePageTemplate
      title="Concrete Cancer Treatment"
      metaTitle="Concrete Cancer Treatment Sydney | Romans Building Services"
      metaDescription="Professional concrete cancer diagnosis and treatment across Sydney. Stopping corrosion and restoring structural integrity."
      heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
      parentService={{ title: 'Concrete Repairs', href: '/services/concrete-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Concrete Repairs', href: '/services/concrete-repairs' },
        { label: 'Concrete Cancer Treatment', href: '' },
      ]}
      intro={[
        "Concrete cancer is steel reinforcement rusting inside the concrete. The rust expands, cracks the concrete, and the whole thing gets worse fast. We see it on balconies, carparks, facades, and structural beams right across Sydney.",
        "We cut out the damaged concrete, clean the rebar back to bright steel, treat it with anti-corrosion coatings, and patch it with structural repair mortar. If the rebar is too far gone, we splice in new steel.",
        "Minas has been treating concrete cancer for over 30 years. We fix the cause, not just the surface. If you have got rust stains or cracking concrete, call us before it spreads."
      ]}
      features={[
        { icon: Search, title: 'Full Diagnosis', description: 'We test chloride levels and carbonation depth to find out how far the damage has spread. No guessing.' },
        { icon: Hammer, title: 'Rebar Treatment', description: 'Damaged concrete is removed, rebar is cleaned back to bright steel and coated with zinc-rich primer to stop future corrosion.' },
        { icon: FlaskConical, title: 'Structural Patching', description: 'We use high-strength polymer-modified repair mortars that bond properly and match the existing concrete profile.' },
        { icon: Shield, title: 'Protective Coatings', description: 'Anti-carbonation coatings applied to stop moisture and CO2 getting back in. Extends the life of the repair by decades.' },
        { icon: CheckCircle, title: 'Strata & Body Corporate', description: 'We work with strata managers and engineers on multi-unit buildings. Reports, scope of works, the lot.' },
      ]}
      faqs={[
        { question: 'How do I know if I have concrete cancer?', answer: 'Look for rust stains on the surface, cracking or flaking concrete, or exposed rusty rebar. If you see any of those, get it checked. The earlier you catch it, the cheaper the fix.' },
        { question: 'Can concrete cancer be fixed permanently?', answer: 'Yes. If you treat the rebar properly, use the right repair materials, and apply protective coatings, the repair will outlast the original concrete. We have done jobs 20 years ago that are still holding up.' },
        { question: 'How much does concrete cancer repair cost?', answer: 'It depends on how much damage there is. A small balcony patch might be a few thousand. A full carpark can run into six figures. We will give you a clear quote after inspecting the job.' },
      ]}
    />
  );
};

export default ConcreteCancerPage;
