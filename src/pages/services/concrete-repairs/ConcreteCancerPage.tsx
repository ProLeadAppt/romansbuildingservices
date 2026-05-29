import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Search, Hammer, Shield, FlaskConical, CheckCircle } from 'lucide-react';

const ConcreteCancerPage = () => {
  const siblings = getSiblingServices('concrete-repairs', 'concrete-cancer');

  return (
    <ServicePageTemplate
      title="Concrete Cancer Treatment"
      metaTitle="Concrete Cancer Treatment Sydney | Romans"
      metaDescription="Sydney concrete cancer repair by Minas Romanakis. Chloride testing, rebar treatment, structural patching, anti-carbonation. Strata-experienced."
      heroImage="/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp"
      parentService={{ title: 'Concrete Repairs', href: '/services/concrete-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Concrete Repairs', href: '/services/concrete-repairs' },
        { label: 'Concrete Cancer Treatment', href: '' },
      ]}
      intro={[
        'Concrete cancer is what happens when steel reinforcement inside concrete starts to rust. Concrete is supposed to protect the steel chemically (the alkaline environment keeps it passive). When the alkalinity drops below pH 11 from carbonation, or when chloride salts penetrate from the outside, the protection fails. The steel starts rusting. Rust takes up about seven times the volume of the original steel, and that expansion cracks the surrounding concrete from inside. By the time you see rust staining or spalling on the outside, the damage inside is well advanced.',
        'We treat concrete cancer properly. That means testing first (chloride levels, carbonation depth, cover meter readings) to map the extent of damage. Then we cut the damaged concrete back behind the rusted steel, clean the steel to bright metal, treat with corrosion-inhibitor primer, and patch with structural repair mortar. Finally an anti-carbonation protective coating goes over the entire area to slow future damage. Skip any step and the repair fails within ten years.',
        'Most of our concrete cancer work is on strata apartment blocks. Carpark soffits, balcony slabs, perimeter beams, parapet walls. Older buildings (1960s to 1980s) are the most common because the original concrete cover was often inadequate and chlorides have had decades to penetrate. We also do balconies on residential terraces and commercial slabs across the CBD and inner suburbs.',
      ]}
      features={[
        {
          icon: Search,
          title: 'Diagnostic testing',
          description:
            'Chloride content testing (lab analysis), carbonation depth probes (phenolphthalein indicator), cover meter readings, half-cell potential survey for corrosion activity. Maps the full extent before any work starts.',
        },
        {
          icon: Hammer,
          title: 'Rebar treatment',
          description:
            'Damaged concrete cut back behind the rusted steel. Rebar wire-brushed or grit-blasted to bright metal. Zinc-rich primer applied to slow future corrosion. Section loss measured to confirm structural capacity.',
        },
        {
          icon: FlaskConical,
          title: 'Structural patching',
          description:
            'Polymer-modified cementitious repair mortar (Sika MonoTop, Mapei Mapegrout, BASF Emaco). Built up in 10 to 20mm layers. Profile matched to original concrete.',
        },
        {
          icon: Shield,
          title: 'Anti-carbonation coating',
          description:
            'Two-coat anti-carbonation protective coating applied to the full repaired area. Breathable, stops CO2 ingress, lasts 15 to 20 years with manufacturer warranty.',
        },
        {
          icon: CheckCircle,
          title: 'Strata experienced',
          description:
            'Defect reports, scope of works, owner corporation meetings, staged works around tenant access. Most of our concrete cancer work is strata.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Chloride and carbonation testing',
          detail:
            'Lab analysis of concrete core samples for chloride content (per BS 1881 or AS 1012). Phenolphthalein indicator for carbonation depth. Half-cell potential survey for active corrosion. Maps the extent of damage.',
        },
        {
          title: 'Cover meter readings',
          detail:
            'Electromagnetic cover meter (Profometer, Hilti Ferroscan) to measure concrete cover over reinforcement and locate rebar before cutting. Critical for planning the cutting depth.',
        },
        {
          title: 'Zinc-rich corrosion inhibitor primer',
          detail:
            'Two-component zinc-rich primer applied to cleaned steel after exposure. Slows future corrosion. Sika FerroGard, Mapei Mapefer or equivalent. Industry standard since the 1990s.',
        },
        {
          title: 'Structural repair mortar',
          detail:
            'Polymer-modified cementitious mortar with shrinkage compensation. Builds up to original concrete profile. Suitable for vertical and overhead application. R3 or R4 class per EN 1504-3 depending on application.',
        },
        {
          title: 'Anti-carbonation coatings',
          detail:
            'Two-coat acrylic or silicate elastomeric coatings (Sikagard, Mapelastic Smart, BASF MasterProtect). 200 to 300 micron dry film thickness. Slows future CO2 ingress, breathable, 15 to 20 year manufacturer warranty.',
        },
        {
          title: 'Engineer involvement',
          detail:
            'For significant concrete cancer, structural engineer assesses remaining capacity and specifies the repair method. Site inspection during works. Completion certificate for the strata or property file.',
        },
      ]}
      processSteps={[
        {
          step: 'Testing and survey',
          detail:
            'Site survey. Core samples taken for chloride testing. Carbonation probes done on site. Cover meter readings across the affected area. Half-cell potential survey on bigger jobs. Engineer report on the findings.',
        },
        {
          step: 'Scope and mobilisation',
          detail:
            'Engineer specifies the repair method, including how far each defect needs to be cut back, what cover the new concrete needs, and what protective coating system is to be applied. Quote built from this scope.',
        },
        {
          step: 'Cut back to sound concrete',
          detail:
            'Diamond blade or pneumatic chipping. Cut back at least 25mm behind the rusted rebar (so the rebar is fully exposed and the repair has somewhere to grip). Edges feathered, not square, so the patch bonds and the profile rebuilds cleanly.',
        },
        {
          step: 'Treat the steel',
          detail:
            'Rebar wire-brushed or grit-blasted to bright metal. Section loss measured. Where loss exceeds 25 percent, new bar is spliced in. Zinc-rich primer applied. Two coats. Allow to cure.',
        },
        {
          step: 'Apply repair mortar',
          detail:
            'Substrate dampened so it does not suck water out of the mortar. Repair mortar built up in 10 to 20mm layers, allowed to cure between layers. Final layer trowelled to original concrete profile.',
        },
        {
          step: 'Protective coating',
          detail:
            'Once the repair has cured (typically 7 to 14 days), the full affected area is coated with anti-carbonation protective coating. Two coats with manufacturer-specified DFT. Warranty registered with manufacturer.',
        },
      ]}
      faqs={[
        {
          question: 'How do I know if I have concrete cancer?',
          answer:
            'Rust staining on concrete surfaces (brown streaks running down from rebar locations), cracking parallel to the rebar lines, spalling concrete (chunks falling off), exposed rusty rebar visible at the surface. Common locations are apartment balconies (especially the undersides), carpark soffits, perimeter beams, and any concrete in coastal locations. The earlier you catch it the cheaper the fix.',
        },
        {
          question: 'Can concrete cancer be fixed permanently?',
          answer:
            'Yes if the repair is done properly. Cut back behind the rusted rebar, treat the steel, patch with proper structural mortar, apply anti-carbonation coating. Done right, the repair outlasts the surrounding concrete. We have repairs we did 20 years ago that are still in excellent condition. Done badly (just patching the surface without treating the steel), the cancer returns within 5 to 10 years.',
        },
        {
          question: 'How much does concrete cancer repair cost?',
          answer:
            'Per square metre of affected area: 600 to 1200 dollars for small localised repair, 800 to 1500 dollars for medium scope on a balcony, 500 to 1000 dollars per square metre on a large carpark project (cheaper per metre because of scale). Testing and engineer fees add 3000 to 8000 dollars at the front. Anti-carbonation coating adds 60 to 120 dollars per square metre on top of repair.',
        },
        {
          question: 'How long does concrete cancer treatment take?',
          answer:
            'A single localised balcony patch repair is 3 to 7 days. A full balcony or apartment-block carpark repair is 2 to 4 months. Time is mostly in the curing periods between steps (primer cure, mortar cure, coating cure). The actual cutting and patching is fast, but you cannot rush the chemistry.',
        },
        {
          question: 'Do strata buildings need concrete cancer treatment?',
          answer:
            'Most Sydney strata buildings older than 25 years have or will have concrete cancer somewhere. Carparks, balconies, perimeter beams. Maintenance scope every 10 to 15 years is normal. Strata committees that ignore it end up with much bigger bills later (failed slabs, balcony bans, structural restrictions on the building).',
        },
        {
          question: 'Will the building need to be vacated during repairs?',
          answer:
            'Usually no. Balcony repairs are typically external and can be done with residents in place (one balcony at a time, residents lose access to that balcony for the work duration). Carpark repairs are staged with sections closed off in rotation. Major perimeter beam work may require temporary relocation of affected units, this is rare.',
        },
      ]}
    />
  );
};

export default ConcreteCancerPage;
