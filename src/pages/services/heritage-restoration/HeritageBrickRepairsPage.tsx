import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Layers, Paintbrush, History, ClipboardCheck } from 'lucide-react';

const HeritageBrickRepairsPage = () => {
  const siblings = getSiblingServices('heritage-restoration', 'heritage-brick-repairs');

  return (
    <ServicePageTemplate
      title="Heritage Brick Repairs"
      metaTitle="Heritage Brick Repairs Sydney | Period Brick Matching, Lime Mortar | Romans Building Services"
      metaDescription="Sydney heritage brick repairs by Minas Romanakis. Convict-era to Federation, period brick sourcing, lime mortar, council-approved methods. 30 years on heritage brick."
      heroImage="/gallery/thumbs/romansstone_1451642255_1152781246863726646_2394650725.webp"
      parentService={{ title: 'Heritage Restoration', href: '/services/heritage-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { label: 'Heritage Brick Repairs', href: '' },
      ]}
      intro={[
        'Old bricks are different to modern bricks. Softer, more porous, sized differently. A Federation brick is around 230 by 110 by 76mm. A convict-era brick is bigger and hand-moulded with irregular faces. Victorian brick fits between those two. Modern brick is 230 by 110 by 76 but harder fired and uniform.',
        'Repairing heritage brick means finding bricks that match. We source from salvage yards across Sydney, demolition sites we have relationships with, and a stockpile of period brick built up at the workshop over the years. For very specific colour matching we can tint new bricks to weather in over a few years.',
        'Just as important is the mortar. Heritage brick gets lime mortar, never cement. Cement is harder than the brick and the brick face spalls within ten to fifteen years if cement is used against it. We have repaired convict-era brick on harbour-side buildings, Federation terraces in Paddington and Newtown, and Victorian shopfronts in the CBD. The methods are the same regardless of era.',
      ]}
      features={[
        {
          icon: Layers,
          title: 'Period brick sourcing',
          description:
            'Brick salvage yards across Sydney, demolition contacts, our own workshop stockpile. For Federation brick we usually find a match within a week. Convict-era brick takes longer.',
        },
        {
          icon: Paintbrush,
          title: 'Lime mortar matching',
          description:
            'Mortar mixed on site to match the original in colour, texture and strength. NHL 2 for soft pre-1900 brick, NHL 3.5 for harder Federation brick. Joints tooled to the original profile.',
        },
        {
          icon: History,
          title: 'Every era',
          description:
            'Convict-era 1788-1840 hand-moulded brick. Victorian 1840-1900 machine-pressed brick. Federation 1890-1915 dry-pressed brick. Inter-war 1918-1945. We work with all of them.',
        },
        {
          icon: ClipboardCheck,
          title: 'Heritage documentation',
          description:
            'Before and after photos, methodology statements, material specifications. Heritage consultant sign-off where required. Council documentation prepared for the listing file.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Reclaimed period brick',
          detail:
            'Brick salvage yards in Marrickville and Wetherill Park have stock of most common heritage bricks. We pick brick by brick to match colour, size and weathering. Pricing is by the brick, not by the pallet.',
        },
        {
          title: 'New brick from heritage suppliers',
          detail:
            'Bowral and a few other manufacturers still kiln-fire brick to old sizes and colours. For Federation work we can usually order matching brick within a week.',
        },
        {
          title: 'Hydraulic lime mortar',
          detail:
            'NHL 2 mixed with sharp sand for soft pre-1900 brick. NHL 3.5 for harder Federation brick. Sand colour matched to the original mortar. Never cement on heritage brick.',
        },
        {
          title: 'Hand tools for raking out',
          detail:
            'Plugging chisels, joint rakers, finger trowels. Power tools cut into the brick face. On a soft heritage brick, that face damage is permanent.',
        },
        {
          title: 'Tuckpointing materials for Victorian work',
          detail:
            'Many Victorian Sydney buildings have original tuckpointing. We use putty lime for the fine white line and oxide-tinted lime mortar for the bed colour. Restoring tuckpointing is some of the slowest masonry work there is.',
        },
        {
          title: 'Hessian for slow curing',
          detail:
            'Lime mortar cures by carbonation over weeks, not by hydration over hours like cement. Hessian sheeting goes up over freshly pointed work and gets sprayed twice daily for a week. Skip this step and the mortar cracks.',
        },
      ]}
      processSteps={[
        {
          step: 'Brick identification',
          detail:
            'On site we work out the era of the brick, the size, the colour, and check whether there has been any modern brick or cement mortar repair previously. Photos taken and bricks sampled if specific matching is needed.',
        },
        {
          step: 'Sourcing matching brick',
          detail:
            'For straightforward Federation work, salvage yards have stock available within days. For rarer brick (especially pre-1880 convict-era hand-moulded) it can take weeks. We have a stockpile at the workshop that covers most common cases.',
        },
        {
          step: 'Removing failed brick',
          detail:
            'Failed brick is cut out cleanly with diamond blades along the joints, then split out with chisels. We work brick by brick rather than ripping out sections so we keep as much original fabric as possible.',
        },
        {
          step: 'Cleaning the cavity',
          detail:
            'Old mortar removed from the cavity. Adjacent brick faces brushed clean. Any rusted metal (old wall ties, lintels) extracted. The cavity should be clean and dust-free before new brick goes in.',
        },
        {
          step: 'Bedding new brick',
          detail:
            'New brick bedded on fresh lime mortar, levelled and toothed in with the surrounding wall. Joint widths matched to the original. We work in courses, not in panels, so the bond pattern reads correctly.',
        },
        {
          step: 'Pointing and curing',
          detail:
            'Once the bed mortar is leather-hard, joints are pointed and tooled to the original profile. Hessian sheeting goes up for slow curing. We check in daily for the first week and the wall is fully cured at two to three weeks.',
        },
      ]}
      faqs={[
        {
          question: 'Where do you find old bricks to match my building?',
          answer:
            'Salvage yards in Sydney (Marrickville, Wetherill Park), demolition contacts we have built up over the years, and our own workshop stockpile. For common Federation and Victorian brick we usually find a match within a week. For convict-era brick or very specific Inter-war colours it can take longer. We have never had to walk away from a job because we could not match brick.',
        },
        {
          question: 'Why are my old bricks crumbling?',
          answer:
            'Almost always moisture trapped behind cement mortar. Someone has repointed with modern cement mortar in the past, and the cement is harder than the soft heritage brick. Moisture cannot escape through the joints, so it pushes out through the brick face instead. The face spalls off, the brick reduces in size, and salt deposits appear on the surface. The fix is to remove every bit of cement mortar and repoint properly with lime.',
        },
        {
          question: 'Can you repair just a section of brickwork?',
          answer:
            'Yes, this is most of what we do. Patch repairs where only the damaged bricks come out, plus a metre or two of repointing around them so the patched area blends in. Whole-wall replacement is rarely needed unless the wall is structurally failing.',
        },
        {
          question: 'How can I tell what era my brick is from?',
          answer:
            'Size and surface texture are the giveaways. Convict-era brick (pre-1840) is bigger, hand-moulded with rough faces, and often has straw or other organic inclusions visible. Victorian brick (1840-1900) is machine pressed but still slightly irregular. Federation brick (1890-1915) is dry pressed, very uniform, usually deep red. Most Sydney homes built before 1915 will have one of these three. Send us a photo and we can usually identify it.',
        },
        {
          question: 'Will the new bricks stand out?',
          answer:
            'Initially yes. Newly installed reclaimed brick weathers in within one to two years. New manufactured brick takes three to five years to fully blend. With proper colour matching at the start the difference is usually small and Sydney weather does the rest. For very visible facades we sometimes pre-weather new brick with diluted natural oxides to speed the match.',
        },
        {
          question: 'What does heritage brick repair cost?',
          answer:
            'Brick-for-brick replacement on a Federation wall is around 150 to 300 dollars per brick installed (matched brick plus lime mortar plus labour). Patch repointing around the area is on top of that at 200 to 400 dollars per square metre. A full Federation facade restoration usually runs 25,000 to 70,000 dollars. Fixed quote after site visit.',
        },
      ]}
    />
  );
};

export default HeritageBrickRepairsPage;
