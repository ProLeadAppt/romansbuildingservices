import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Landmark, ScrollText, Hammer, ShieldCheck } from 'lucide-react';

const HeritageMasonryPage = () => {
  const siblings = getSiblingServices('heritage-restoration', 'heritage-masonry');

  return (
    <ServicePageTemplate
      title="Heritage Masonry Restoration"
      metaTitle="Sydney Heritage Masonry Restoration | Romans"
      metaDescription="Sydney heritage masonry restoration by Minas Romanakis. Lime mortar, period brick matching and council-approved methods for Federation, Victorian and Colonial work."
      heroImage="/gallery/thumbs/romansstone_1570002705_2145660669121556728_2394650725.webp"
      parentService={{ title: 'Heritage Restoration', href: '/services/heritage-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { label: 'Heritage Masonry Restoration', href: '' },
      ]}
      intro={[
        'Heritage masonry needs a completely different approach to modern brickwork. The materials are softer, the joints are different, and the wall was designed to handle moisture by letting it move through the masonry rather than blocking it out. Modern cement mortar against soft heritage brick traps that moisture inside. The brick face starts blowing out, and you end up with a worse problem than what you started with.',
        'We do heritage masonry the way it was originally done. Lime mortar mixed on site to match the original. Hand-tooled joints in whatever profile the wall had to begin with. Replacement brick sourced from yards that still stock the older sizes, or pulled from heritage demolitions. Sandstone hand-dressed on site to match the original tooling marks. Slow work, but the only way to get it right.',
        'Romans has been doing heritage work across Sydney since the early 2000s. Federation terraces in the Inner West, Victorian shopfronts in the CBD, Colonial sandstone around the harbour, Art Deco apartments on the North Shore. Most of it came through architects and heritage consultants who saw a previous job. Minas runs the heritage scopes himself.',
      ]}
      features={[
        {
          icon: Landmark,
          title: 'Listed building experience',
          description:
            'Three decades of work on heritage-listed properties across Sydney. Churches, terraces, public buildings, harbour-side homes. State and local heritage listings both.',
        },
        {
          icon: ScrollText,
          title: 'Heritage reports prepared',
          description:
            'Methodology statements, scope of works, material specifications, before-and-after photos. We prepare what councils and heritage consultants need for the approval.',
        },
        {
          icon: Hammer,
          title: 'Traditional materials and tools',
          description:
            'Hydraulic lime mortar, hand-cut stone, period-correct pointing tools. We replicate the original methods, not approximate them.',
        },
        {
          icon: ShieldCheck,
          title: 'Council-approved',
          description:
            'Long track record with Sydney City, Woollahra, Inner West, Mosman and Ku-ring-gai heritage councils. We know what each one expects in the documentation.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Hydraulic lime mortar (NHL)',
          detail:
            'Natural hydraulic lime mixed with sharp sand to match the original mortar. NHL 2 for soft brick (pre-1900), NHL 3.5 for harder Federation brick. Cement-free. Same material the wall was built with.',
        },
        {
          title: 'Period brick from heritage yards',
          detail:
            'Bowral brick, Brickworks reclaim, Marrickville brick salvage. For Federation work we usually find a near-perfect match within a few days. For colonial brick we use reclaimed stock from demolitions.',
        },
        {
          title: 'Hawkesbury and Gosford sandstone',
          detail:
            'Active quarries north of Sydney still cutting stone to colonial dimensions. We can also use reclaimed sandstone from heritage demolitions when colour matching is critical.',
        },
        {
          title: 'Stainless steel for any new metal',
          detail:
            'Wall ties, cramps, dowels, brick reinforcement. Stainless not galvanised. Galv lasts 30 to 50 years and then rusts inside the wall. Stainless lasts the life of the building.',
        },
        {
          title: 'Tuckpointing materials for Victorian work',
          detail:
            'Putty lime for the fine white line. Black or red oxide-tinted lime mortar for the bed colour. Special tuck-pointing irons. Slow work but unmistakable when it is done properly.',
        },
        {
          title: 'Hessian for slow lime curing',
          detail:
            'Lime mortar cures by carbonation, not hydration. Needs to stay damp for a week to fortnight. Hessian sheets sprayed twice daily in summer, plastic sheeting in winter.',
        },
      ]}
      processSteps={[
        {
          step: 'Site inspection and documentation',
          detail:
            'On-site inspection by Minas. We photograph the existing wall, sample the mortar (a small section sent to a lab if the engineer wants the mix analysed), identify the era of the brick, and check what previous repairs have been done.',
        },
        {
          step: 'Heritage scope and consent',
          detail:
            'For listed buildings, we prepare a methodology statement that the heritage consultant and council can sign off on. Materials specified, methods documented, sample patches proposed. Approval is usually two to six weeks.',
        },
        {
          step: 'Sample patches and sign-off',
          detail:
            'Two or three test patches go up in different mortar mixes. Cure for a week. Heritage consultant signs off on the closest match before the full job starts. This is the most important step on a heritage scope.',
        },
        {
          step: 'Careful removal of failed material',
          detail:
            'Old mortar raked out by hand to two or three times the joint width. Failed bricks cut out cleanly without damaging the surrounds. Failed stone marked for dutchman or full replacement. No power tools that could damage adjacent material.',
        },
        {
          step: 'Rebuilding to original spec',
          detail:
            'New mortar mixed in small batches because lime starts curing as soon as it is wet. Replacement brick or stone bedded into the wall. Joints tooled to the original profile. Heritage consultant photographs as we go.',
        },
        {
          step: 'Slow curing and handover',
          detail:
            'Hessian sheeting goes on for the first week to slow the cure. We come back daily for the first week to wet it down. After two weeks the wall is solid. Full completion documentation handed over for the heritage file.',
        },
      ]}
      faqs={[
        {
          question: 'Do you work on heritage-listed buildings?',
          answer:
            'Yes, it is a large part of what we do. We work on state-listed and locally-listed buildings, and we understand the heritage approval process in most Sydney councils. References and past project examples available on request.',
        },
        {
          question: 'Why can you not use cement mortar on heritage buildings?',
          answer:
            'Cement mortar is harder than old brick and old sandstone, and it does not breathe. Heritage masonry was designed to handle moisture by moving it through the mortar joints. Cement traps that moisture inside the wall instead. After ten to fifteen years the bricks start spalling, salt deposits appear on the face, and you end up with much more damage than you started with. We see this every week.',
        },
        {
          question: 'Can you help with the heritage council application?',
          answer:
            'Yes. We prepare the methodology statement and scope of works that councils require. For complex listings we work alongside heritage consultants and architects. We know what Sydney City, Woollahra, Inner West, Mosman and Ku-ring-gai councils each expect in the documentation.',
        },
        {
          question: 'What is the difference between heritage restoration and just patching old brick?',
          answer:
            'Patching uses whatever material is on hand. Heritage restoration replaces failed material with new material that matches the original in composition, strength and breathability. It costs more and takes longer but the building reads correctly after the work and the repair lasts decades instead of years.',
        },
        {
          question: 'How long does heritage masonry restoration take?',
          answer:
            'A Federation terrace facade is two to six weeks depending on scope. A heritage church or commercial building can be three to nine months. Sample patches and council approval add weeks at the front. Lime mortar curing means we cannot rush the schedule on the back end.',
        },
        {
          question: 'What does heritage masonry restoration cost?',
          answer:
            'Heritage repointing is usually 200 to 400 dollars per square metre. Tuckpointing is 350 to 600 dollars per square metre. Brick replacement and dutchman stone repair are quoted per piece. A full Federation terrace facade restoration typically runs 30,000 to 100,000 dollars including engineering, materials, council scope and labour. Fixed quote after site visit.',
        },
      ]}
    />
  );
};

export default HeritageMasonryPage;
