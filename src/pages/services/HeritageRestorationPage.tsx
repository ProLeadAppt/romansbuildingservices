import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { Landmark, Hammer, Shield, Layers, FileCheck, Ruler } from 'lucide-react';
import { getSubServiceRoutes } from '@/data/serviceHierarchy';

const HeritageRestorationPage = () => {
  const childServices = getSubServiceRoutes('heritage-restoration');

  return (
  <ServicePageTemplate
    title="Heritage Restoration"
    metaTitle="Sydney Heritage Restoration | Romans"
    metaDescription="Heritage masonry, sandstone, brick and lime mortar restoration across Sydney by Minas Romanakis, using period-correct methods that suit the building."
    heroImage="/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp"
    intro={[
      "Heritage restoration repairs existing brick, stone, mortar and decorative details while retaining as much sound original fabric as possible. Romans works on heritage masonry in the Hawkesbury, Western Sydney and wider Sydney, including sandstone, early brickwork and period facades.",
      "Romans has been operating since 1995. Minas and the team assess the condition of the masonry and previous repairs, then work with heritage architects or advisers where the building and proposed work require their input.",
      "Compatible materials matter as much as the finished appearance. Before removing render, replacing stone or repointing joints, the scope should establish what can be retained, how repairs will be matched and which approvals or conservation requirements apply."
    ]}
    features={[
      { icon: Landmark, title: "Sandstone Restoration", description: "Repair and replacement of deteriorated sandstone using stone sourced to match the original. Hand-finished to blend with existing facades." },
      { icon: Hammer, title: "Convict Brick Repairs", description: "Careful repair and replacement of early colonial brickwork. We source period-correct bricks and use lime-based mortars." },
      { icon: Layers, title: "Lime Mortar Repointing", description: "Removal of failed joints and repointing with traditional lime mortar. Colour-matched and tooled to the original profile." },
      { icon: FileCheck, title: "Council & Heritage Approvals", description: "Repair-scope and methodology information to support approvals. Specialist heritage assessments and approval decisions sit with the relevant advisers and authorities." },
      { icon: Ruler, title: "Period Detail Reproduction", description: "Mouldings, cornices, and decorative elements faithfully reproduced from original profiles. Cast or carved to match." },
      { icon: Shield, title: "Conservation Management", description: "Ongoing maintenance programmes for heritage buildings. Regular inspections and planned repairs to prevent costly damage." }
    ]}
    faqs={[
      { question: "Do you have experience with heritage-listed buildings?", answer: "Yes. Romans carries out repairs to heritage brickwork, sandstone and mortar across Sydney. We work with heritage architects and advisers where required, using the agreed conservation approach and approval conditions to guide the building work." },
      { question: "What approvals are needed for heritage restoration?", answer: "Requirements depend on the listing, location and proposed work. Some work may qualify for an exemption, while other work needs council or Heritage NSW approval. Confirm the pathway before starting. A heritage adviser can prepare specialist assessments; Romans provides repair-scope and methodology information for the building work." },
      { question: "Can you match original heritage materials?", answer: "We source sandstone and reclaimed brick and match mortar colour and joint profile to the existing fabric. Availability and weathering can limit an exact match. Samples and a repair methodology help establish an appropriate result before the main work begins." },
      { question: "How do you handle badly done previous repairs?", answer: "We assess whether previous mortar, render or coatings are damaging the original fabric before recommending removal. Removal itself can damage old masonry, so the method needs care and may require trial areas or heritage advice. Replacement materials should suit the existing wall and its moisture conditions." },
      { question: "Why is lime mortar used instead of cement on heritage buildings?", answer: "Lime-rich mortar can be more compatible with soft historic brick and stone than a harder cement-rich mix. It can allow moisture to pass through the joints and accommodate some movement. The appropriate mortar depends on the original materials, exposure and conservation specification; one mix does not suit every heritage building." },
      { question: "What is tuckpointing?", answer: "Tuckpointing is a decorative mortar finish associated with Victorian and Federation brickwork. A thin, contrasting fillet is applied over a background mortar to create the appearance of fine joints. Existing profiles and colours guide the repair, alongside the condition of the brickwork." },
      { question: "How long does heritage restoration last?", answer: "Durability depends on the condition of the original fabric, material compatibility, exposure, water management and maintenance. Repointing and stone repairs need periodic inspection rather than a promise of permanent performance. The repair scope should explain the materials, maintenance needs and any specific warranty terms." }
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
