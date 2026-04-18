import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { Landmark, Hammer, Shield, Layers, FileCheck, Ruler } from 'lucide-react';
import { getSubServiceRoutes } from '@/data/serviceHierarchy';

const HeritageRestorationPage = () => {
  const childServices = getSubServiceRoutes('heritage-restoration');

  return (
  <ServicePageTemplate
    title="Heritage Restoration"
    metaTitle="Heritage Restoration Sydney | Roman Building Services"
    metaDescription="Specialised heritage restoration across Sydney. Sandstone, convict brick, period details. Working with councils and heritage architects. Call Minas."
    heroImage="/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp"
    intro={[
      "Sydney has some of the finest heritage buildings in the country. Sandstone terraces, convict-era brickwork, Federation homes, and Victorian commercial buildings. They all need care from someone who understands how they were built in the first place.",
      "Minas has spent 30 years restoring heritage buildings across Sydney. We work with heritage architects, councils, and conservation officers to make sure every project meets the right standards. Original materials are matched. Traditional methods are used. No modern shortcuts that damage old stone.",
      "If a previous repair was done badly with cement render or incompatible materials, we strip it back and do it properly. Heritage work is about respecting the building and giving it another lifetime."
    ]}
    features={[
      { icon: Landmark, title: "Sandstone Restoration", description: "Repair and replacement of deteriorated sandstone using stone sourced to match the original. Hand-finished to blend with existing facades." },
      { icon: Hammer, title: "Convict Brick Repairs", description: "Careful repair and replacement of early colonial brickwork. We source period-correct bricks and use lime-based mortars." },
      { icon: Layers, title: "Lime Mortar Repointing", description: "Removal of failed joints and repointing with traditional lime mortar. Colour-matched and tooled to the original profile." },
      { icon: FileCheck, title: "Council & Heritage Approvals", description: "We handle the paperwork. Heritage impact statements, methodology documents, and liaison with council heritage officers." },
      { icon: Ruler, title: "Period Detail Reproduction", description: "Mouldings, cornices, and decorative elements faithfully reproduced from original profiles. Cast or carved to match." },
      { icon: Shield, title: "Conservation Management", description: "Ongoing maintenance programmes for heritage buildings. Regular inspections and planned repairs to prevent costly damage." }
    ]}
    faqs={[
      { question: "Do you have experience with heritage-listed buildings?", answer: "Yes. We have restored dozens of heritage-listed properties across Sydney, from state-listed sandstone buildings to locally listed Federation terraces. Minas understands the regulations, the materials and the craft." },
      { question: "What approvals are needed for heritage restoration?", answer: "It depends on the listing level. Locally listed buildings usually need council consent. State-listed buildings may also need Heritage NSW approval. Buildings in the Sydney Harbour Foreshore area go through a different process. We help with the applications and provide the methodology documents councils require." },
      { question: "Can you match original heritage materials?", answer: "Yes — this is core to the job. We source matching Sydney sandstone, reclaimed handmade brick, and mix lime mortars matched to the original colour, grain and profile. For visible repairs, we weather-match so new materials blend with aged surrounding fabric." },
      { question: "How do you handle badly done previous repairs?", answer: "We carefully remove inappropriate materials — cement render, impermeable modern mortar, waterproof paint — that trap moisture and damage old brick and stone. Then we replace with compatible breathable lime-based systems that let the building work as it was designed to." },
      { question: "Why is lime mortar used instead of cement on heritage buildings?", answer: "Heritage brick and stone were made to breathe. Lime mortar is soft, flexible and permeable — it allows moisture to escape through the joints rather than through the brick faces. Cement mortar is too rigid and impermeable — it traps moisture and forces it to escape through the soft bricks, accelerating their decay. Using cement on a heritage wall can halve its life." },
      { question: "What is tuckpointing?", answer: "Tuckpointing is a decorative pointing technique common on Victorian and Federation terraces. The joint is filled with a dark mortar flush to the brick face, then a thin fillet of white lime putty is run through the centre. The visual effect is the illusion of very fine, precise brickwork. Common across Paddington, Newtown, Leichhardt, Balmain, Darlinghurst and similar suburbs." },
      { question: "How long does heritage restoration last?", answer: "Lime mortar repointing: 40 to 60 years. Sandstone repairs with proper consolidation: decades, often longer. Tuckpointing: 40+ years. The correct materials and methods mean the repair is essentially permanent on a heritage-maintenance timeline." }
    ]}
    galleryImages={[
      "/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp",
      "/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp",
      "/gallery/thumbs/romansstone_1570002705_2145660669121556728_2394650725.webp"
    ]}
    childServices={childServices}
    breadcrumbs={[
      { label: 'Services', href: '/services' },
      { label: 'Heritage Restoration', href: '' },
    ]}
  />
  );
};

export default HeritageRestorationPage;
