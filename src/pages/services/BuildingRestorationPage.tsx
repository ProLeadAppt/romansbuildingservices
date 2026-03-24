import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { Building, Layers, Wrench, HardHat, Shield, Hammer } from 'lucide-react';
import { getSubServiceRoutes } from '@/data/serviceHierarchy';

const BuildingRestorationPage = () => {
  const childServices = getSubServiceRoutes('building-restoration');

  return (
  <ServicePageTemplate
    title="Building Restoration"
    metaTitle="Building Restoration Sydney | Roman Building Services"
    metaDescription="Full building restoration in Sydney. Facade repairs, render replacement, structural upgrades, and complete makeovers. Call Minas for a quote."
    heroImage="/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp"
    intro={[
      "Buildings wear out. Render cracks, brickwork deteriorates, facades start looking tired. A proper restoration brings them back to life and adds decades to their lifespan. That is what we do.",
      "Minas and the team handle full facade restoration, render replacement, structural upgrades, and everything in between. We work on terraces, apartment blocks, commercial buildings, and everything from the 1800s to the 1980s.",
      "We do not just patch over problems. We strip back to find the cause, fix it properly, and then restore the finish. The result is a building that looks right and performs for another 30 years."
    ]}
    features={[
      { icon: Building, title: "Facade Restoration", description: "Full facade strip-back and restoration. Render removal, brick repairs, repointing, and new finishes applied properly." },
      { icon: Layers, title: "Render Replacement", description: "Removal of failed or cracked render and replacement with the correct system. Sand and cement, acrylic, or lime render matched to the building." },
      { icon: Wrench, title: "Structural Upgrades", description: "Lintel replacement, crack stitching, and reinforcement of structural elements. Done to engineer specifications." },
      { icon: HardHat, title: "Balcony & Parapet Repairs", description: "Concrete and masonry repairs to balconies, parapets, and rooflines. Waterproofing included where needed." },
      { icon: Shield, title: "Protective Coatings", description: "Anti-carbonation coatings, water repellents, and protective finishes to guard against future damage." },
      { icon: Hammer, title: "Brickwork Restoration", description: "Tuckpointing, repointing, and brick replacement. Colour-matched mortar and sourced bricks for a clean finish." }
    ]}
    faqs={[
      { question: "How long does a full building restoration take?", answer: "It depends on the size and condition. A typical terrace facade takes 4 to 6 weeks. A larger apartment block can take 3 to 6 months. Minas will give you a realistic timeline after inspecting the site." },
      { question: "Do you work on strata buildings?", answer: "Yes. We work with strata managers and owners corporations regularly. We provide detailed scopes, staged payment options, and keep all parties informed throughout the project." },
      { question: "Can you match the existing render or finish?", answer: "Absolutely. We take samples and match the colour, texture, and profile of the original finish. If the whole facade needs re-rendering, we help you choose a finish that suits the building." },
      { question: "Will scaffolding be needed?", answer: "For most facade work, yes. We organise all scaffolding, council permits for footpath occupation, and safety requirements. It is all included in the quote." }
    ]}
    galleryImages={[
      "/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp",
      "/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp",
      "/gallery/thumbs/romansstone_1570002705_2145660669121556728_2394650725.webp"
    ]}
    childServices={childServices}
    breadcrumbs={[
      { label: 'Services', href: '/services' },
      { label: 'Building Restoration', href: '' },
    ]}
  />
  );
};

export default BuildingRestorationPage;
