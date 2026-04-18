import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { Hammer, Layers, Shield, Home, Wrench, Building } from 'lucide-react';
import { getSubServiceRoutes } from '@/data/serviceHierarchy';

const MasonryPage = () => {
  const childServices = getSubServiceRoutes('masonry');

  return (
  <ServicePageTemplate
    title="Stone & Masonry"
    metaTitle="Stone & Masonry Services Sydney | Roman Building Services"
    metaDescription="Brick and stone masonry across Sydney. Walls, chimneys, retaining walls, feature stone, and repairs. New builds and restorations. Call Minas for a quote."
    heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
    intro={[
      "Minas has been laying stone and brick across Sydney for over 30 years. From garden walls to full commercial facades, this is what we do best. Good masonry is about getting the foundations right, choosing the right materials, and taking the time to do it properly.",
      "We handle all types of masonry work. Retaining walls, chimneys, feature stonework, brick repairs, repointing, and new builds. If it involves stone or brick, we have done it hundreds of times.",
      "Every job gets the same attention to detail. We match existing materials where needed and use traditional methods that have stood the test of time. No rushed work, no cheap substitutes."
    ]}
    features={[
      { icon: Hammer, title: "Brick & Block Work", description: "New brickwork, blockwork, and brick repairs for residential and commercial buildings. Colour-matched mortar and proper bonding." },
      { icon: Layers, title: "Stone Masonry", description: "Sandstone, bluestone, and natural stone work. Feature walls, cladding, and stone restoration using traditional techniques." },
      { icon: Home, title: "Retaining Walls", description: "Engineered retaining walls in stone, brick, or block. Built to handle the load and last for decades." },
      { icon: Wrench, title: "Repointing & Repairs", description: "Mortar joint replacement and brick repairs. We match existing mortar colour and profile so the repair blends in." },
      { icon: Building, title: "Chimneys & Fireplaces", description: "Chimney rebuilds, repairs, and new fireplace surrounds. Proper flashing and weatherproofing included." },
      { icon: Shield, title: "Heritage Masonry", description: "Period-accurate stonework and brickwork for heritage-listed buildings. Traditional lime mortars and matched materials." }
    ]}
    faqs={[
      { question: "What types of stone do you work with?", answer: "We work with all types. Sandstone (mostly Sydney Hawkesbury and Pyrmont stone), bluestone, limestone, granite, and natural fieldstone. Minas will recommend the best stone for your project based on the application, location, and your budget." },
      { question: "Can you match existing brickwork on older buildings?", answer: "Yes. We source matching reclaimed handmade bricks and mix custom mortar colours to blend repairs with the original work. On heritage buildings, we use traditional lime-based mortars to stay true to the original construction." },
      { question: "How long does a masonry retaining wall last?", answer: "A properly built and engineered masonry retaining wall — with correct drainage, sized footings and appropriate reinforcement — will last 50 to 80 years. Walls without proper drainage behind them often fail in 10 to 20 years. The drainage is what lasts, or does not." },
      { question: "Do you handle council approvals for masonry work?", answer: "For retaining walls over 600mm, boundary walls, or any work changing the appearance of a heritage property, yes. We prepare the documentation and work with your engineer or recommend one we trust." },
      { question: "What is the difference between lime mortar and cement mortar?", answer: "Lime mortar is soft, breathable and flexible — it was used on all pre-1930s brickwork. Cement mortar is hard, rigid and impermeable — it was developed for modern fired-clay brick. Using cement on soft heritage brick traps moisture in the brick and causes decay. On heritage work, lime mortar is the correct material." },
      { question: "How much does masonry work cost?", answer: "Depends heavily on scope. Repointing a front terrace facade typically $8,000–$15,000. New sandstone retaining wall $2,500–$4,000 per sqm. Chimney repoint and reflash $3,500–$8,500. Every job is different — we quote after inspection." },
      { question: "Do you work on heritage-listed properties?", answer: "Regularly. We work to NSW Heritage Council and local council heritage requirements, use traditional materials (lime mortar, matched brick and stone) and prepare the documentation needed for approval." }
    ]}
    galleryImages={[
      "/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp",
      "/gallery/thumbs/romansstone_1576440613_2199665757989086550_2394650725.webp",
      "/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp",
      "/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp"
    ]}
    childServices={childServices}
    breadcrumbs={[
      { label: 'Services', href: '/services' },
      { label: 'Stone & Masonry', href: '' },
    ]}
  />
  );
};

export default MasonryPage;
