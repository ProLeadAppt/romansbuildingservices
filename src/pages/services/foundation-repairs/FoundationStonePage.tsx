import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Landmark, Hammer, Droplets, Pickaxe, ShieldCheck } from 'lucide-react';

const FoundationStonePage = () => {
  const siblings = getSiblingServices('foundation-repairs', 'foundation-stone');

  return (
    <ServicePageTemplate
      title="Foundation Stone Repairs"
      metaTitle="Heritage Foundation Stone Repairs Sydney | Romans"
      metaDescription="Sydney foundation stone repair by Minas Romanakis. Sandstone replacement, brick rebuilding, lime mortar repointing, damp course. Heritage-correct methods."
      heroImage="/gallery/thumbs/romansstone_1451642255_1152781246863726646_2394650725.webp"
      parentService={{ title: 'Foundation Repairs', href: '/services/foundation-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Foundation Repairs', href: '/services/foundation-repairs' },
        { label: 'Foundation Stone Repairs', href: '' },
      ]}
      intro={[
        'Heritage Sydney buildings often have foundations made of rough-coursed sandstone, hand-made brick or random rubble masonry. These are different from modern reinforced concrete strip footings and need different repair methods. Stone foundations have specific failure modes: face erosion from rising damp, mortar joint failure from cement repointing done in the wrong era, rubble core washout where surface water has penetrated, and salt damage from groundwater in low-lying buildings.',
        'We repair foundation stonework with matching materials and traditional methods. Eroded sandstone blocks cut out and replaced with hand-dressed new stone. Failed brick replaced with reclaimed period brick. Mortar joints raked back and repointed with lime mortar (never cement, which is the most common cause of secondary damage on heritage foundations). Damp courses retrofitted where rising damp has been an ongoing problem. Drainage improvements to stop groundwater building up against the foundation.',
        'Most of our heritage foundation repair is on Federation and Victorian terraces, plus colonial sandstone buildings in the CBD and harbour suburbs. These foundations are typically 80 to 150 years old. Many have had cement repointing done at some point that made things worse rather than better. We undo that work and put the foundation back together with the materials it was originally built with.',
      ]}
      features={[
        {
          icon: Landmark,
          title: 'Sandstone block replacement',
          description:
            'Eroded sandstone foundation blocks cut out and replaced with hand-dressed new stone from active NSW quarries. Bedded on lime mortar. Stainless cramps where original iron has rusted.',
        },
        {
          icon: Hammer,
          title: 'Brick foundation rebuild',
          description:
            'Failed sections of brick foundation rebuilt with reclaimed period brick from salvage yards. Lime mortar throughout. Matched bond pattern. New bonded into surviving original.',
        },
        {
          icon: Droplets,
          title: 'Damp course retrofit',
          description:
            'For ongoing rising damp issues, chemical injection or physical damp course retrofitted into the existing foundation. Stops moisture rising into walls above.',
        },
        {
          icon: Pickaxe,
          title: 'Lime mortar repointing',
          description:
            'Failed cement repointing raked out and replaced with lime mortar matched to the original. Foundation breathes again, moisture moves through joints instead of being trapped in the stone.',
        },
        {
          icon: ShieldCheck,
          title: 'Heritage compliant',
          description:
            'Sample patches signed off by heritage consultant before bulk work. Methodology and material documentation prepared for the heritage file. Traditional methods throughout.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Hand-dressed sandstone replacement blocks',
          detail:
            'Hawkesbury or Gosford sandstone cut to original block dimensions and hand-tooled to match the original face finish. Lead time 2 to 4 weeks from quarry.',
        },
        {
          title: 'Reclaimed period brick',
          detail:
            'Federation and Victorian brick from salvage yards in Marrickville and Wetherill Park. Picked to match colour, size and weathering. For older convict-era brick, salvage from heritage demolitions.',
        },
        {
          title: 'Hydraulic lime mortar (NHL 3.5)',
          detail:
            'Mixed with sharp sand to match the original mortar. Tinted with natural oxides if needed. Never cement on heritage foundations. NHL 3.5 grade for the structural strength foundations need.',
        },
        {
          title: 'Stainless steel cramps and dowels',
          detail:
            'Where original iron cramps have rusted and split the stone, stainless replacements. Embedded with epoxy or lime grout. Lasts the life of the building.',
        },
        {
          title: 'Chemical damp course injection',
          detail:
            'Silane or silicone-based damp proof course fluid injected into pre-drilled holes along the foundation. Creates a continuous water-repellent barrier. For homes with persistent rising damp.',
        },
        {
          title: 'Subsoil drainage upgrades',
          detail:
            'Ag pipe in gravel and geofabric installed alongside the foundation. Diverts groundwater away from the stone. Critical for low-lying or sloping sites where water collects against the wall.',
        },
      ]}
      processSteps={[
        {
          step: 'Exposure and inspection',
          detail:
            'External soil excavated alongside foundation to expose the stone or brick. Internal floor opened if internal work is needed. Each defect mapped: erosion, joint failure, cracking, salt damage.',
        },
        {
          step: 'Source matching material',
          detail:
            'For stone repairs, sandstone ordered from matching quarry (2-4 weeks lead time). For brick repairs, reclaimed brick sourced from salvage yards. Sample brought to site for sign-off.',
        },
        {
          step: 'Remove failed material',
          detail:
            'Failed stone or brick cut out cleanly with diamond blade. Cement repointing raked out where present. Any rusted iron cramps extracted. Cavity cleaned for new material.',
        },
        {
          step: 'Install replacement',
          detail:
            'New stone or brick bedded on fresh lime mortar. Joints kept consistent with the original wall. Stainless cramps installed where structural connection needed. Each course checked level.',
        },
        {
          step: 'Repoint failed joints',
          detail:
            'Surrounding mortar joints raked back if failed. New lime mortar packed in. Joints tooled to match the original profile. Sample patches signed off by heritage consultant before bulk repointing.',
        },
        {
          step: 'Drainage and backfill',
          detail:
            'New drainage installed where needed (ag pipe in gravel, sloped to outfall). Backfilled with clean granular fill, compacted in layers. Surface reinstated. Lime work cured under hessian for 1 to 2 weeks.',
        },
      ]}
      faqs={[
        {
          question: 'Why use lime mortar instead of cement on foundations?',
          answer:
            'Heritage foundations were built with lime mortar. The stone (sandstone, hand-made brick) is soft and porous. It was designed to move moisture through the joints rather than block it out. Modern cement mortar is too hard and impermeable. Used on heritage foundations, it traps moisture inside the stone. Within 5 to 15 years the stone face starts blowing out and the foundation deteriorates faster than it would have if it had been left alone.',
        },
        {
          question: 'Can eroded sandstone foundations be replaced?',
          answer:
            'Yes. Failed sandstone blocks are cut out and replaced with hand-dressed new sandstone from matching quarries. Bedded on lime mortar. The new block initially looks lighter than the surrounding weathered stone but matches within one to three winters as it weathers down.',
        },
        {
          question: 'How do you access foundations for repair?',
          answer:
            'External foundations: we excavate alongside the foundation wall (typically 1 to 1.5 metres back) to expose it for repair. Internal foundations: we open the floor above where required, or work from inside the subfloor space where there is clearance. Temporary support is installed first if the section being repaired is structural.',
        },
        {
          question: 'What about rising damp in heritage foundations?',
          answer:
            'Common problem. Heritage foundations typically had no damp course or a slate damp course that has failed. Solution is either chemical damp course injection (silane fluid injected through drilled holes to form a barrier) or physical damp course retrofit (saw-cut and insert a membrane). Plus drainage improvements to stop water sitting against the foundation in the first place.',
        },
        {
          question: 'How long does heritage foundation repair take?',
          answer:
            'A typical heritage terrace foundation repair scope is 3 to 8 weeks. Sandstone replacement on a small section is 1 to 2 weeks. Full perimeter repair on a heritage building can be 2 to 4 months. Stone sourcing adds 2 to 4 weeks at the front. Lime curing extends the back end.',
        },
        {
          question: 'What does heritage foundation repair cost?',
          answer:
            'Sandstone block replacement is 2500 to 5500 dollars per block including matched stone, cutting, installation and mortar. Brick foundation rebuild is 800 to 1500 dollars per square metre. Heritage repointing is 250 to 450 dollars per square metre. A typical Sydney terrace heritage foundation scope runs 25,000 to 90,000 dollars depending on extent. Fixed quote after inspection.',
        },
      ]}
    />
  );
};

export default FoundationStonePage;
