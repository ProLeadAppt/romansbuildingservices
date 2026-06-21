import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Gem, Search, Hammer, Sparkles } from 'lucide-react';

const HeritageStoneRestorationPage = () => {
  const siblings = getSiblingServices('heritage-restoration', 'heritage-stone');

  return (
    <ServicePageTemplate
      title="Heritage Stone Restoration"
      metaTitle="Sydney Heritage Stone Restoration | Romans"
      metaDescription="Sydney heritage stone restoration by Minas Romanakis. Sandstone cleaning, dutchman repairs, hand-dressed replacement and lime repointing for long-life repairs."
      heroImage="/gallery/thumbs/romansstone_1700556302_3240823616257706375_2394650725.webp"
      parentService={{ title: 'Heritage Restoration', href: '/services/heritage-restoration' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Heritage Restoration', href: '/services/heritage-restoration' },
        { label: 'Heritage Stone Restoration', href: '' },
      ]}
      intro={[
        'Sydney was built on sandstone. The CBD, the Eastern Suburbs, the harbour edge, the older parts of the Inner West. Most of the heritage stonework in this city is now between 100 and 180 years old, and parts of it are starting to fail. Faces are weathering away. Joints are blowing out. Iron cramps inside the stone are rusting and splitting blocks from inside.',
        'We restore heritage stone using methods that match the original. Hand-dressed replacement stone where blocks are too far gone. Dutchman repairs (where a thinner piece of matching stone is let into the original) for partial damage. Stone repair mortar for surface erosion. Lime mortar throughout. Stainless steel for any new metalwork.',
        'Stone is what Minas trained in and what he is best at. Most of our heritage stone work comes through architects and heritage consultants who have seen a previous job. The CBD, Paddington, Vaucluse, Mosman, harbour-side homes. We do this work all over Sydney.',
      ]}
      features={[
        {
          icon: Gem,
          title: 'Sandstone facades and features',
          description:
            'Heritage sandstone facades, columns, sills, copings, balustrades, decorative mouldings, harbour seawalls. Hawkesbury and Gosford stone is our speciality.',
        },
        {
          icon: Search,
          title: 'Quarry-matched replacement',
          description:
            'We source replacement stone from active NSW quarries that still cut to colonial dimensions. Sample blocks brought to site for colour and grain matching before any cutting starts.',
        },
        {
          icon: Hammer,
          title: 'Hand-tooled to match',
          description:
            'Pitched, rock-faced, tooth chiseled, drag finished, broached, rubbed. Whatever the original finish is, we replicate it by hand. Power tools leave different texture.',
        },
        {
          icon: Sparkles,
          title: 'Gentle cleaning',
          description:
            'Low-pressure steam, poultice cleaning, biocide treatment for biological staining. Never high-pressure water, never chemical strippers. Both damage sandstone permanently.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Hawkesbury sandstone from active quarries',
          detail:
            'Wondabyne, Gosford, and a few smaller operations north of Sydney. Warm cream colour to match most CBD and Eastern Suburbs heritage. Lead time on hand-cut blocks is two to four weeks.',
        },
        {
          title: 'Reclaimed stone for difficult matches',
          detail:
            'For colonial buildings where the stone came from a quarry that no longer operates, we source reclaimed sandstone from heritage demolitions. Saved at the workshop until needed.',
        },
        {
          title: 'Lime mortar bedding only',
          detail:
            'Hydraulic lime (NHL 2 or NHL 3.5) and sharp sand. Never cement. Lets the stone breathe and moves with the building. Cement bedding traps moisture and the stone face spalls in 10 to 15 years.',
        },
        {
          title: 'Stainless steel cramps and dowels',
          detail:
            'Replaces original iron cramps that have rusted and split the surrounding stone. Stainless does not rust so the repair lasts the life of the building. We extract every rusted iron cramp we find.',
        },
        {
          title: 'Stone repair mortar (Lithomex, Jahn)',
          detail:
            'For minor erosion under 30mm deep. Tinted on site with natural oxides to match the host stone. Built up in 10mm layers so it cures properly. Done right, weathers to look like the original.',
        },
        {
          title: 'Silane or siloxane breathable sealers',
          detail:
            'For high-exposure stonework like harbour seawalls. Penetrates the stone but lets moisture out. Never urethane or epoxy sealers, which trap moisture and blow the stone face off within 5 years.',
        },
      ]}
      processSteps={[
        {
          step: 'Condition survey',
          detail:
            'On-site with heritage consultant or architect. We map every piece of failing stone, note the damage type (erosion, salt damage, cracking, rusted cramps), and photograph each block. For complex jobs we produce a stone schedule on a CAD drawing.',
        },
        {
          step: 'Cleaning sample patches',
          detail:
            'Before deciding the cleaning method, we test on a small inconspicuous patch. Steam, poultice and biocide options each get tried. Whichever produces the best result without damaging the stone gets used on the full job.',
        },
        {
          step: 'Source matching stone',
          detail:
            'Sample stones cut from quarry stock and brought to site for sign-off. Heritage consultant compares against the original. Two to four weeks lead time for cut-to-size blocks.',
        },
        {
          step: 'Remove failed stone, extract rusted cramps',
          detail:
            'Failed blocks cut out with diamond blades and chisels, kept square. Any rusted iron cramps inside the wall extracted and replaced with stainless. This is critical, rusted cramps will eventually split every stone they touch.',
        },
        {
          step: 'Hand-dress and install new stone',
          detail:
            'New stone cut to size at the workshop or on site. Face hand-dressed to match the original tooling marks. Bedded into the wall with lime mortar. Stainless cramps where the wall design needs them.',
        },
        {
          step: 'Joint pointing and weathering',
          detail:
            'Joints pointed with matching lime mortar in the original profile. Sample patches sign-off. Slow curing under hessian for one to two weeks. New stone takes one to three winters to weather down to match the surrounding stone.',
        },
      ]}
      faqs={[
        {
          question: 'How do you clean heritage sandstone?',
          answer:
            'Low-pressure steam cleaning for general dirt, poultice cleaning for stubborn staining, biocide treatment for biological growth. High-pressure water and chemical strippers are not used. Both damage the stone surface and accelerate weathering. We test on a small patch before doing the full facade.',
        },
        {
          question: 'Can eroded sandstone be built back up?',
          answer:
            'Up to 30mm of erosion depth can usually be filled with stone repair mortar tinted to match. Deeper than that, the stone gets cut back to a clean face and either repaired with a dutchman (thinner replacement piece) or fully replaced. We assess each piece individually rather than batch-deciding.',
        },
        {
          question: 'How often does heritage stonework need maintenance?',
          answer:
            'A condition survey every 5 to 10 years catches small issues before they become expensive problems. Rusted iron cramps inside the stone are the biggest hidden issue. They split blocks from inside and the damage is invisible until the stone face has already failed. We offer ongoing inspection and maintenance plans for institutional clients.',
        },
        {
          question: 'What is a dutchman repair?',
          answer:
            'A dutchman is a thinner replacement piece (usually 30 to 80mm thick) cut from matching stone and let into the face of the original block. Used when the face of the stone has failed but the bulk of the original is still sound. Much cheaper than full block replacement and lets you keep as much original fabric as possible.',
        },
        {
          question: 'Will the new stone match the old?',
          answer:
            'Newly installed stone is always lighter than the surrounding weathered stone. Within one to three winters of Sydney weather, the new stone weathers to match. Sample patches and quarry selection mean the initial match is close, and then time does the rest.',
        },
        {
          question: 'Are you experienced with heritage council approvals?',
          answer:
            'Yes. We work regularly with Sydney City, Woollahra, Inner West, Mosman and other Sydney heritage councils. We prepare scope of works, methodology statements and material specifications that councils and heritage consultants need for approval. We can work with a heritage architect or under their direction.',
        },
      ]}
    />
  );
};

export default HeritageStoneRestorationPage;
