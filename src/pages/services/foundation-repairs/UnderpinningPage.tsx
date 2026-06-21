import { ServicePageTemplate } from '@/components/ServicePageTemplate';
import { getSiblingServices } from '@/data/serviceHierarchy';
import { ArrowDownToLine, Ruler, Home, FileCheck, Shovel } from 'lucide-react';

const UnderpinningPage = () => {
  const siblings = getSiblingServices('foundation-repairs', 'underpinning');

  return (
    <ServicePageTemplate
      title="Foundation Underpinning"
      metaTitle="Sydney Foundation Underpinning | Romans"
      metaDescription="Sydney foundation underpinning by Minas Romanakis. Mass concrete, screw pile and mini pile. Engineered, council-approved. Houses, terraces, commercial."
      heroImage="/gallery/thumbs/romansstone_1570002705_2145660669121556728_2394650725.webp"
      parentService={{ title: 'Foundation Repairs', href: '/services/foundation-repairs' }}
      siblingServices={siblings}
      breadcrumbs={[
        { label: 'Services', href: '/services' },
        { label: 'Foundation Repairs', href: '/services/foundation-repairs' },
        { label: 'Foundation Underpinning', href: '' },
      ]}
      intro={[
        'Underpinning is the process of deepening or strengthening existing foundations. Most older Sydney houses have shallow rubble or unreinforced concrete footings sitting at around 600mm depth. When clay soil shrinks in dry summers, expands in wet winters, gets undermined by tree roots, or is loaded with a new extension above, those original footings move. Walls crack diagonally, doors and windows go out of square, floors slope, render fractures the same way every year.',
        'We underpin three ways depending on the site. Mass concrete underpinning is the traditional method: dig sections of pit under the existing footing in a controlled sequence, pour reinforced concrete in each pit, build it up to support the original footing on deeper, more stable ground. Screw pile underpinning drives helical steel piles to stable bearing strata with no excavation and no vibration. Mini pile underpinning bores cased piles where access is too tight for either of the others. The right method depends on soil, access, building type and budget.',
        'Most of our underpinning is on Federation and Victorian terraces and houses in Sydney inner suburbs, where reactive clay soil and old rubble footings combine to produce significant settlement. We also underpin commercial buildings, apartment blocks, and houses where a new second storey or extension is being added above existing inadequate footings.',
      ]}
      features={[
        {
          icon: ArrowDownToLine,
          title: 'Mass concrete underpinning',
          description:
            'Traditional method. Sections of pit excavated under existing footing in 1m wide chunks following a "hit and miss" sequence. Reinforced concrete poured in each pit. Standard for shallow underpinning down to 2 metres.',
        },
        {
          icon: Ruler,
          title: 'Screw pile underpinning',
          description:
            'Steel helical piles screwed in with hydraulic torque head. No excavation, no vibration, no spoil. Full bearing capacity within hours. Best for tight access and reactive clay sites.',
        },
        {
          icon: Home,
          title: 'Residential underpinning',
          description:
            'Most common work. Sydney terraces, Federation cottages, post-war houses. Settlement from clay reactivity, tree roots, plumbing leaks. We underpin and then close up the cracks.',
        },
        {
          icon: FileCheck,
          title: 'Engineered design',
          description:
            'Structural engineer assesses soil and existing footing, designs the underpinning method, specifies pile or pit dimensions, signs off on completion. Council approval where required.',
        },
        {
          icon: Shovel,
          title: 'Tight access work',
          description:
            'Under old houses with 600mm subfloor clearance. Hand digging where machines cannot reach. Conveyor belt removal of spoil. Slow work but we have done it hundreds of times.',
        },
      ]}
      whatWeUse={[
        {
          title: 'Engineer-designed underpin scheme',
          detail:
            'Structural engineer assesses the existing footing, conducts soil testing (boreholes or hand auger), and designs the underpinning method. Pit dimensions, sequence, reinforcement, concrete strength all specified.',
        },
        {
          title: '32 to 40 MPa reinforced concrete for pits',
          detail:
            'High-strength concrete for mass concrete underpinning pits. Mixed off-site and delivered by truck. Steel reinforcement to engineer drawing. Pumped or wheelbarrowed into pits.',
        },
        {
          title: 'Steel screw piles',
          detail:
            'Galvanised steel screw piles (typically 76mm or 89mm diameter shafts with single or triple helix). Driven with a hydraulic torque head mounted on a compact excavator or skid-steer. Installed to engineer-specified torque or depth.',
        },
        {
          title: 'Mini pile rigs for tight access',
          detail:
            'Small diameter cased piles drilled or driven through limited-headroom basements or under existing buildings. 150 to 300mm diameter. Used where screw piles or mass concrete cannot get in.',
        },
        {
          title: 'Hand digging tools and conveyors',
          detail:
            'Picks, shovels, jackhammers for hand digging under existing buildings. Conveyor belts or wheelbarrows to remove spoil from tight subfloor spaces. Temporary lighting and ventilation.',
        },
        {
          title: 'Engineer site inspections',
          detail:
            'Engineer inspects pit excavations before concrete pour, screw pile installations during driving, and final underpinning before backfill. Sign-off certificates issued at each stage.',
        },
      ]}
      processSteps={[
        {
          step: 'Engineer scope',
          detail:
            'Structural engineer assesses the building, takes soil samples or boreholes, and designs the underpinning method. Scope of works produced. We quote against the engineer scope.',
        },
        {
          step: 'Council approval',
          detail:
            'Most Sydney councils require approval for underpinning. We prepare the development application with engineer drawings, construction certificate, and any environmental documentation needed. Typically 4 to 8 weeks for approval.',
        },
        {
          step: 'Site setup and access',
          detail:
            'Hoardings up, access for spoil removal organised, temporary support to the building if needed. For tight subfloor work we open up access through the floor where possible.',
        },
        {
          step: 'Underpin in sequence',
          detail:
            'For mass concrete: pits dug in "hit and miss" sequence (1m wide pits with 2m of original footing between each), each pit excavated, reinforced and poured, then the gaps between are done. For screw piles: piles driven to load, footing modified to bear on the new pile.',
        },
        {
          step: 'Engineer inspection',
          detail:
            'Engineer inspects pit excavations before concrete pour to confirm bearing strata reached. Inspects screw pile installations to confirm torque or depth requirements met. Final inspection on completion.',
        },
        {
          step: 'Crack repair and reinstate',
          detail:
            'Once underpinning is complete, the building is stabilised. Wall cracks repaired (stitched or repointed depending on severity). Render and paint touched up. Site cleaned and handed over.',
        },
      ]}
      faqs={[
        {
          question: 'How do I know if I need underpinning?',
          answer:
            'Diagonal stepped cracks in brickwork, doors and windows going out of square, floors sloping noticeably, gaps opening up at skirting boards or between walls and ceilings, render cracking the same way every winter. Active movement (cracks getting wider over months or seasons) indicates ongoing settlement. A structural engineer can confirm whether underpinning is the right fix or whether the movement is now stable.',
        },
        {
          question: 'Can I stay in the house during underpinning?',
          answer:
            'Usually yes. Mass concrete underpinning is messy and noisy but the building remains structurally supported throughout (the hit and miss sequence ensures at least 2m of original footing is intact at any time). Screw pile work is significantly quieter. Most homeowners stay in place. Major underpinning of multi-storey buildings may require temporary relocation.',
        },
        {
          question: 'How long does underpinning take?',
          answer:
            'A typical Sydney terrace with mass concrete underpinning under one side is 3 to 6 weeks of on-site work. Full perimeter underpinning of a house is 6 to 12 weeks. Screw pile underpinning is faster (usually 2 to 4 weeks). Council approval adds 4 to 8 weeks at the front.',
        },
        {
          question: 'Does underpinning fix the cracks?',
          answer:
            'Underpinning stops the movement that caused the cracks. Once the building is stable, the cracks can be properly repaired (stitched with helical rods or repointed depending on severity). Some minor cracks close up partially when the foundation stabilises. We typically wait 3 to 6 months after underpinning before doing the cosmetic crack repair to confirm movement has stopped.',
        },
        {
          question: 'What about tree roots?',
          answer:
            'Tree roots are a common cause of settlement, especially large eucalypts or paperbarks within 5 to 10 metres of the building. We assess any nearby trees as part of scoping. Often tree removal or root barriers are needed in addition to underpinning. Removing the tree without underpinning can cause heave (the opposite problem) when the clay rehydrates. Engineer guides this decision.',
        },
        {
          question: 'What does underpinning cost?',
          answer:
            'Mass concrete underpinning is typically 4000 to 8000 dollars per pit (one pit per 1 to 1.5m of wall length). A typical Sydney terrace underpinning runs 30,000 to 120,000 dollars depending on extent. Screw pile underpinning is 5000 to 9000 dollars per pile. Engineer fees 4000 to 12,000 dollars. Council fees on top. Fixed quote after engineer scope.',
        },
      ]}
    />
  );
};

export default UnderpinningPage;
