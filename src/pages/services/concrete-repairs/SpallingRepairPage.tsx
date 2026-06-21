import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Layers, Hammer, Building, ShieldCheck, HardHat } from 'lucide-react';

const SpallingRepairPage = () => {
  const siblings = getSiblingServices('concrete-repairs', 'spalling-repair');

  return (
    <ServicePageTemplate
      title="Spalling Concrete Repair"
      metaTitle="Sydney Spalling Concrete Repair | Romans"
      metaDescription="Sydney spalling concrete repair by Minas Romanakis. Delamination cut-back, rebar treatment, structural patching, protective coating. Balconies, facades."
      heroImage="/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp"
      parentService={{ title: 'Concrete Repairs', href: '/services/concrete-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Concrete Repairs', href: '/services/concrete-repairs' },
        { label: 'Spalling Concrete Repair', href: '' },
      ]}
      intro={[
        'Concrete spalling is when chunks of concrete break away from the surface. It is the visible end stage of concrete cancer. Steel reinforcement rusts inside the concrete, the rust expands and pushes the surface off, and pieces of concrete fall away. Apart from looking terrible, the falling pieces are a serious safety hazard. From a balcony or a parapet several storeys up, a piece of spalled concrete the size of a fist could kill someone.',
        'We treat spalling the same way as concrete cancer: cut back to sound material, expose and treat the corroded steel, rebuild the profile with structural repair mortar, apply protective coatings. The difference between spalling repair and concrete cancer treatment is mostly visibility. Spalling is the symptom you see from outside, concrete cancer is the problem inside. The fix is the same job either way.',
        'Most of our spalling repair work is on apartment block balcony soffits, parapet walls, and carpark structures across Sydney. Salt-coast buildings on the Eastern Suburbs and Northern Beaches see the most spalling because chloride salt accelerates the corrosion. Older buildings (1960s to 1980s) with inadequate original concrete cover are most affected.',
      ]}
      features={[
        {
          icon: Layers,
          title: 'Delamination survey',
          description:
            'Hammer sound testing across affected areas finds the full extent of delamination. Hidden bad concrete (still attached but failing) is mapped before any cutting starts.',
        },
        {
          icon: Hammer,
          title: 'Balcony spalling repair',
          description:
            'Most common job. Spalled soffit cut back, rebar treated, structural patching, waterproof topping renewed. Balcony usually back in use within four to six weeks.',
        },
        {
          icon: Building,
          title: 'Facade spalling',
          description:
            'High and low-rise facades. Scaffold, swing stage or rope access depending on building height and street access. Often combined with other facade repair scopes.',
        },
        {
          icon: ShieldCheck,
          title: 'Carpark spalling',
          description:
            'Carpark slab soffits and columns. Traffic-grade protective coatings to extend life. Staged works around carpark access.',
        },
        {
          icon: HardHat,
          title: 'Safety first',
          description:
            'Loose concrete is dropped and removed under controlled conditions. Hoarding or protected access for any area below the work. Falling concrete kills people, we treat that risk accordingly.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Hammer sound testing',
          detail:
            'Heavy steel-headed hammer tapped across the surface. Sound concrete rings high, delaminated concrete sounds hollow. Maps the full extent of bad concrete including areas that have not yet visibly spalled.',
        },
        {
          title: 'Pneumatic chipping or diamond cutting',
          detail:
            'Loose and delaminated concrete cut back with chipping hammer or diamond blade. Sound concrete left in place. Edges feathered for the patch to bond.',
        },
        {
          title: 'Steel treatment chemistry',
          detail:
            'Zinc-rich corrosion inhibitor primer applied to cleaned rebar. Two coats. Cure between coats. Stops future corrosion at the repair location.',
        },
        {
          title: 'Polymer-modified structural repair mortar',
          detail:
            'Sika MonoTop, Mapei Mapegrout, BASF Emaco or equivalent. R3 or R4 class per EN 1504-3. Built up in 10 to 20mm layers, allowed to cure between.',
        },
        {
          title: 'Anti-carbonation coating',
          detail:
            'Two-coat anti-carbonation system applied to the full affected area after repair cures. 200 to 300 micron DFT. Slows future carbonation, manufacturer warranty 15 to 20 years.',
        },
        {
          title: 'Traffic-grade topping for carparks',
          detail:
            'Methyl methacrylate (MMA) or polyurethane traffic-grade topping for carpark soffits and slab tops where vehicle exposure occurs. Significantly tougher than standard anti-carbonation.',
        },
      ]}
      processSteps={[
        {
          step: 'Sound testing and mapping',
          detail:
            'Hammer sound test across all affected and adjacent areas. Hollow-sounding sections marked. Photo record of the full scope. Engineer report if structural elements are affected.',
        },
        {
          step: 'Safety and access',
          detail:
            'Falling concrete risk addressed before any work starts. Hoarding below work areas, restricted access during chipping, full PPE. Scaffold or swing stage erected for any height work.',
        },
        {
          step: 'Remove loose and delaminated concrete',
          detail:
            'Loose pieces dropped under controlled conditions. Delaminated concrete chipped back behind any visible rebar. Substrate cleaned of dust and loose material.',
        },
        {
          step: 'Treat exposed steel',
          detail:
            'Rebar wire-brushed or grit-blasted to bright metal. Section loss measured, new bar spliced where loss exceeds 25 percent. Zinc-rich corrosion inhibitor primer applied, allowed to cure.',
        },
        {
          step: 'Apply repair mortar',
          detail:
            'Substrate dampened so it does not pull water out of the new mortar. Structural repair mortar applied in 10 to 20mm layers, each layer keyed into the previous. Final layer trowelled flush with original concrete profile.',
        },
        {
          step: 'Coat and complete',
          detail:
            'Once mortar has cured (typically 7 to 14 days), anti-carbonation coating applied across the full repaired area. Two coats. Manufacturer warranty registered. Engineer signs off on completion.',
        },
      ]}
      faqs={[
        {
          question: 'What causes concrete to spall?',
          answer:
            'Steel reinforcement rusting inside the concrete is the most common cause. The rust expands and pushes the concrete face off. Secondary causes are water ingress through cracks, salt attack near the coast, freeze-thaw cycles (rare in Sydney), and impact damage. By the time the spalling is visible, the underlying corrosion is well advanced.',
        },
        {
          question: 'Is spalling concrete dangerous?',
          answer:
            'Yes. Pieces of concrete falling from height are a real safety hazard. A fist-sized piece falling from a third-storey balcony has enough kinetic energy to seriously injure or kill someone. If you see spalling on a balcony, parapet or facade above any pedestrian area, get it secured immediately. Strata committees have a duty of care.',
        },
        {
          question: 'How long do spalling repairs last?',
          answer:
            'With proper materials and protective coating, 25 to 40 years. Without coating, 10 to 15 years. The coating is the critical step. It slows future carbonation and chloride ingress so the underlying steel stays passive.',
        },
        {
          question: 'How much area needs repair if I see spalling?',
          answer:
            'Always more than you can see. Sound testing typically reveals two to four times more delaminated concrete than is visibly spalling. We map the full extent before quoting. Quotes based only on visible damage are usually significantly low.',
        },
        {
          question: 'How long does spalling repair take?',
          answer:
            'A single localised patch is 3 to 7 days. A balcony soffit or section of facade is 2 to 6 weeks depending on area. A full carpark or apartment block exterior repair is 2 to 9 months. Most of the time is in curing between steps.',
        },
        {
          question: 'What does spalling repair cost?',
          answer:
            'Per square metre of affected area: 700 to 1400 dollars typical. Anti-carbonation coating adds 60 to 120 dollars per square metre. Scaffolding adds 30 to 70 dollars per square metre depending on height and access. Engineer involvement adds 3000 to 8000 dollars at the front. Fixed quote after sound testing survey.',
        },
      ]}
    />
  );
};

export default SpallingRepairPage;
