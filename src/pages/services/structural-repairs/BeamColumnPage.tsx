import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { Landmark, Wrench, ShieldCheck, Hammer, ClipboardCheck } from 'lucide-react';

const BeamColumnPage = () => {
  const siblings = getSiblingServices('structural-repairs', 'beam-column-restoration');
  return (
    <ServicePageTemplate
      title="Beam & Column Restoration"
      metaTitle="Concrete & Masonry Beam & Column Repairs Sydney | Romans"
      metaDescription="Sydney beam and column restoration. Concrete spalling repair, steel lintel replacement, carbon fibre reinforcement. Strata, commercial, residential."
      heroImage="/gallery/thumbs/romansstone_1576440613_2199665757989086550_2394650725.webp"
      parentService={{ title: 'Structural Repairs', href: '/services/structural-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Structural Repairs', href: '/services/structural-repairs' },
        { label: 'Beam & Column Restoration', href: '' },
      ]}
      intro={[
        'Beams and columns are what hold the building up. Concrete beams in apartment blocks. Brick or stone piers in older buildings. Steel beams in warehouses and commercial. Steel lintels above doors and windows in Federation and Victorian houses. All of them have the same failure mode: rust inside, spalling outside, capacity slowly draining away.',
        'The cause is almost always water getting in. Water plus oxygen plus steel reinforcement equals rust. Rust takes up about seven times the volume of the original steel, which means it pushes the surrounding concrete or brick apart from inside. By the time the damage is visible on the outside, the steel is well into corrosion and the structural capacity is already compromised.',
        'We restore beams and columns properly. Cut back to sound material, treat or replace the corroded steel, rebuild the profile, apply protective coatings so it does not happen again. Most of our beam work is on strata blocks (concrete cancer in carpark soffits and balcony slabs). Most of our column work is on older buildings with corroded steel lintels or failed masonry piers.',
      ]}
      features={[
        {
          icon: Landmark,
          title: 'Concrete beam repair',
          description:
            'Spalled and cracked concrete cut back to sound material. Corroded steel exposed, cleaned and treated. Structural repair mortar applied to rebuild the original profile. Protective coating finishes it.',
        },
        {
          icon: Wrench,
          title: 'Masonry column rebuild',
          description:
            'Brick piers and stone columns cut out and rebuilt course by course. Stainless steel reinforcement where the engineering requires it. Matched mortar and pointing to surrounding wall.',
        },
        {
          icon: ShieldCheck,
          title: 'Steel lintel replacement',
          description:
            'Corroded steel lintels above doors and windows cut out and replaced with hot-dip galvanised or stainless steel. Adjacent brickwork cut out, lintel inserted, brick rebuilt over.',
        },
        {
          icon: Hammer,
          title: 'Carbon fibre reinforcement',
          description:
            'For beams that need additional capacity, carbon fibre fabric epoxy-bonded to the underside or sides. Provides significant tensile strength without adding much weight or thickness.',
        },
        {
          icon: ClipboardCheck,
          title: 'Engineered repair',
          description:
            'Every significant beam or column repair is engineered. Scope of works, design certificate, site inspection, completion certificate. Documentation for strata and insurance files.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Structural repair mortar (Sika, Mapei, BASF)',
          detail:
            'Polymer-modified cementitious mortar designed for vertical and overhead application. Sets fast, bonds strongly to old concrete, replicates original profile. Selected to match the engineer specification.',
        },
        {
          title: 'Corrosion inhibitor for exposed steel',
          detail:
            'Once the steel is exposed and cleaned to bright metal, a corrosion-inhibitor primer goes on. Slows future corrosion if any moisture finds its way back. Standard on all concrete cancer repairs.',
        },
        {
          title: 'Hot-dip galvanised or stainless lintels',
          detail:
            'Hot-dip galvanised for hidden interior lintels. Stainless for exposed work or coastal locations. Sized to span and load. Bedded into the wall with the same mortar as the surrounding brick.',
        },
        {
          title: 'Carbon fibre fabric',
          detail:
            'Unidirectional carbon fibre fabric, epoxy-saturated and bonded to the structural element. Used on beams where additional tensile capacity is needed and a section enlargement would be impractical.',
        },
        {
          title: 'Protective surface coatings',
          detail:
            'Anti-carbonation coatings applied to repaired concrete to slow future corrosion. Breathable so trapped moisture can leave. Long-life coatings carry 10 to 20 year warranties.',
        },
        {
          title: 'Engineer involvement',
          detail:
            'For any beam or column repair we work to a structural engineer scope. Repair method, materials, inspection points. Engineer signs off on completion for the property structural file.',
        },
      ]}
      processSteps={[
        {
          step: 'Inspection and engineer report',
          detail:
            'On-site survey of the affected beams and columns. Visible damage mapped. Engineer comes out for anything significant and writes a report specifying repair method.',
        },
        {
          step: 'Hazard control and propping',
          detail:
            'Loose concrete chipped down so it does not fall on anyone. Temporary propping if the element has lost significant capacity. Access scaffolding for high work.',
        },
        {
          step: 'Cut back to sound concrete',
          detail:
            'Damaged concrete cut back behind the corroded steel. Steel exposed all round. Concrete edges feathered so the patch can bond and the original profile can be rebuilt accurately.',
        },
        {
          step: 'Treat the steel',
          detail:
            'Corroded steel cleaned to bright metal with wire brush or grit blasting. Heavily corroded sections cut out and spliced with new reinforcement. Corrosion-inhibitor primer applied.',
        },
        {
          step: 'Rebuild the profile',
          detail:
            'Structural repair mortar applied in layers up to the original profile. Each layer keys into the previous one. Final layer trowelled flush with the surrounding concrete.',
        },
        {
          step: 'Coat and document',
          detail:
            'Anti-carbonation protective coating applied to the full repaired element. Engineer inspects and certifies completion. Photos and material specs handed to strata committee or owner for the file.',
        },
      ]}
      faqs={[
        {
          question: 'What causes beams and columns to deteriorate?',
          answer:
            'Water ingress is the main cause. Water gets through cracks or porous concrete, reaches the steel reinforcement, and the steel starts to rust. Rust expands and cracks the concrete from inside. Carbonation (where CO2 in the air slowly reduces the protective alkalinity of the concrete) accelerates this on older buildings. Poor original cover (steel sitting too close to the surface) is the third common cause.',
        },
        {
          question: 'Can you repair beams without replacing them entirely?',
          answer:
            'Almost always, yes. Spalled or cracked concrete is cut back, the corroded steel is exposed and treated (or spliced if too damaged), and structural repair mortar rebuilds the profile. Full replacement is rare and only used when the steel has lost more than 25 to 30 percent of its cross-section. Repair is significantly cheaper than replacement.',
        },
        {
          question: 'Do you work on strata buildings?',
          answer:
            'Yes, a lot. Strata apartment blocks are where most of our concrete beam and column work happens. Carpark soffits, balcony slabs, perimeter beams. We work with strata managers, body corporates and remedial engineers regularly. Documentation prepared for the strata file as part of the job.',
        },
        {
          question: 'How long do beam repairs last?',
          answer:
            'With proper materials and a protective surface coating, repairs typically last 25 to 40 years before any maintenance is needed again. The protective coating is the key. It slows future water ingress and carbonation. Without coating, repair life drops to 10 to 15 years.',
        },
        {
          question: 'How long does the work take?',
          answer:
            'A single localised beam patch repair is one to three days. A full carpark soffit or balcony slab repair on a strata block is two to eight weeks depending on the area. Steel lintel replacement above a single window is two to three days. Engineer involvement adds time at the front of every job.',
        },
        {
          question: 'What does beam and column repair cost?',
          answer:
            'Concrete cancer repair is around 600 to 1200 dollars per square metre of affected area. Steel lintel replacement is 1500 to 3500 dollars per opening including brick removal and reinstatement. Carbon fibre reinforcement is engineered per element. Fixed quote after site visit and engineer report.',
        },
      ]}
    />
  );
};
export default BeamColumnPage;
