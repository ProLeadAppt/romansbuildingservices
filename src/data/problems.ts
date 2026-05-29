import type { ProblemPageProps } from '@/components/ProblemPageTemplate';

export const PROBLEMS: Record<string, ProblemPageProps> = {
  'concrete-cancer': {
    name: 'Concrete Cancer',
    slug: 'concrete-cancer',
    metaTitle: 'Concrete Cancer Sydney | Signs, Causes & Proper Repair | Romans',
    metaDescription:
      'Concrete cancer explained in plain English. Learn the signs, why it happens in Sydney, how urgent it is, and how a proper repair works. 30 years fixing it.',
    heroTagline:
      'Rusting steel inside concrete walls and balconies — the most common structural problem in Sydney apartment blocks.',
    quickAnswer:
      'Concrete cancer is when steel reinforcement inside concrete rusts and expands, cracking the concrete off from the inside. It is widespread in Sydney apartment blocks built between the 1960s and 1990s, especially near the coast. A proper repair means cutting back to sound concrete, treating the exposed steel with a corrosion inhibitor, and patching with a salt-resistant repair mortar — anything less fails within a few years.',
    whatItIs: [
      'Concrete cancer is what happens when the steel reinforcement inside concrete starts to rust. As the steel rusts, it expands — up to seven times its original size. That expansion cracks the concrete from the inside out, pushing it off in chunks. Left alone, the structural strength of the concrete drops and the damage accelerates.',
      'It is by far the most common structural problem we see in Sydney apartment blocks, especially the ones built between the 1960s and the 1990s. Coastal suburbs — Bondi, Manly, Dee Why — get it worst, because salt air speeds everything up. But we also see plenty of it inland, on older car parks, balcony slabs, and commercial buildings.',
      'The good news: it is fixable, as long as you catch it before the structural steel is too far gone. The bad news: poorly done repairs fail quickly and make the problem worse, because you are trapping moisture and salt against steel that is already compromised.',
    ],
    signs: [
      'Rust stains bleeding out of concrete walls or balconies',
      'Cracks running in straight lines (usually following the steel reinforcement)',
      'Concrete flaking off in chunks, exposing brown rusty steel underneath',
      'Hollow sound when you tap the concrete surface',
      'Bulging or swelling patches on balcony soffits or walls',
      'Paint or render bubbling and peeling off in sheets',
    ],
    causes: [
      'Salt in the air crystallising inside the concrete (biggest cause in coastal Sydney)',
      'Water ingress through cracks, failed waterproofing or poor drainage',
      'Concrete cover over the steel that was too thin when originally built',
      'Carbonation — the concrete losing alkalinity over decades, letting steel rust',
      'Previous repairs done with the wrong materials, sealing moisture against the steel',
    ],
    urgency: 'high',
    urgencyNote:
      'If you can see exposed rusty steel, the damage is already into the structural layer. For balconies, parapets or anything overhead, get it looked at quickly — concrete can fall. For walls at ground level, you have more time, but every year you wait the repair gets bigger and more expensive.',
    howWeFixIt: [
      {
        step: 'Full assessment',
        detail:
          'We probe the concrete with sounding hammers to find all the damage, including hidden sections that are hollow behind intact-looking surface. You need to find every bit of compromised concrete before you start cutting, or the repair will fail at the edges.',
      },
      {
        step: 'Cut out damaged concrete',
        detail:
          'We cut back to sound, well-bonded concrete — usually behind the steel. All the rusty, spalled or delaminated concrete comes out. Halfway measures do not work.',
      },
      {
        step: 'Clean and treat the steel',
        detail:
          'Every bit of exposed steel gets wire-brushed or sandblasted back to clean metal, then treated with a corrosion inhibitor and a protective coating. This is the step that decides whether the repair lasts 5 years or 30.',
      },
      {
        step: 'Apply a proper patch mortar',
        detail:
          'We use a salt-resistant, polymer-modified repair mortar matched to the original concrete. Applied in layers with proper curing. We never use builders mix — it shrinks and cracks off.',
      },
      {
        step: 'Protective coating',
        detail:
          'The repaired area gets a breathable protective coating that keeps water and salt out while letting moisture inside the concrete escape. Without this, the next round of damage starts immediately.',
      },
    ],
    costBand:
      '$2,500 – $15,000+ per balcony, depending on damage. Whole-building programs typically $30k–$300k+ staged over 1–3 years.',
    faqs: [
      {
        question: 'Can concrete cancer spread to other parts of the building?',
        answer:
          'Yes, absolutely. The conditions that caused it in one spot usually exist across the building. If one balcony has concrete cancer, the others are probably at different stages of the same process. A full inspection gives you the real picture.',
      },
      {
        question: 'How long does a proper concrete cancer repair last?',
        answer:
          'Done properly — full removal, steel treated with a corrosion inhibitor, salt-resistant patch mortar, breathable protective coating — 20 to 30 years is realistic in a coastal environment. Done badly, repairs can fail in 3 to 5 years.',
      },
      {
        question: 'We are a strata committee — how do we budget for this?',
        answer:
          'Most strata jobs get staged over 2 or 3 years to spread cost. We inspect the whole building, rank the damage by urgency, and set up a program that deals with critical areas first and less urgent ones in later stages. Happy to work with your strata manager on this.',
      },
      {
        question: 'Is painting over concrete cancer a real fix?',
        answer:
          'No. Painting hides the damage and can make it worse by trapping more moisture. You have to cut out the damaged concrete, treat the steel, and patch properly. Paint is a last step, not a fix on its own.',
      },
    ],
    relatedServices: [
      { title: 'Concrete Cancer Treatment', href: '/services/concrete-repairs/concrete-cancer' },
      { title: 'Spalling Concrete Repair', href: '/services/concrete-repairs/spalling-repair' },
      { title: 'Protective Coatings', href: '/services/concrete-repairs/protective-coatings' },
      { title: 'Strata Repairs', href: '/services/remedial-building/strata-repairs' },
    ],
  },

  'cracked-brick-walls': {
    name: 'Cracked Brick Walls',
    slug: 'cracked-brick-walls',
    metaTitle: 'Cracked Brick Walls Sydney | Romans Building Services',
    metaDescription:
      'Cracks in your brick wall? Learn what different crack patterns mean, which ones matter, and how we fix them properly. 30 years of masonry across Sydney.',
    heroTagline:
      'Not every crack is serious — but some absolutely are. Here is how to tell the difference.',
    quickAnswer:
      'Cracks in brick walls are usually caused by foundation movement, rusting steel lintels, failed wall ties, or thermal stress. Hairline cracks that follow mortar joints are often just age. Stair-step cracks wider than 5mm, horizontal cracks, or cracks that are actively growing are the ones to take seriously. The right fix depends on the cause — filling the crack without fixing the underlying cause means it comes back.',
    whatItIs: [
      'A crack in a brick wall can mean anything from a small cosmetic issue to a serious structural problem. The pattern, width and direction of the crack tell the story. Hairline cracks that follow the mortar joints are usually just age or minor movement. Stair-step cracks that run diagonally through the wall, or cracks that keep widening, are telling you something is moving.',
      'The most common causes in Sydney are foundation movement from reactive clay soils, rusting steel lintels above windows and doors, failed wall ties in cavity brickwork, and thermal or settlement stress in older buildings. Each cause has a different fix. Filling the crack without fixing the cause means it comes back in 6 to 12 months.',
      'Our job is to work out what caused the crack, fix the underlying cause, and then stitch the wall back together properly with a repair that will still be holding 50 years from now.',
    ],
    signs: [
      'Stair-step cracks running diagonally through mortar joints',
      'Horizontal cracks — these are more serious than vertical ones',
      'Cracks that widen or lengthen over weeks or months',
      'Doors and windows sticking or no longer closing properly',
      'Cracks wider than 5mm, or ones you can push a coin into',
      'Gaps opening up between walls and ceilings or floors',
      'Rust staining above windows (failing lintel)',
    ],
    causes: [
      'Foundation movement — reactive clay soils expanding and contracting with moisture',
      'Rusting steel lintels pushing the brickwork apart as the steel expands',
      'Failed wall ties in cavity walls (common in 1960s–80s brick veneer)',
      'Tree roots displacing footings',
      'Water damage from leaking pipes or poor drainage softening the ground under the wall',
      'Original construction defects — undersized footings or poor mortar',
    ],
    urgency: 'medium',
    urgencyNote:
      'Hairline cracks along mortar joints can be watched over time. Stair-step or horizontal cracks wider than a credit card, or any crack that is actively growing, should be looked at soon. If doors and windows have started sticking, or if the crack has appeared suddenly after heavy rain, get it assessed now — those are signs of active movement.',
    howWeFixIt: [
      {
        step: 'Diagnose the cause',
        detail:
          'Before we touch a crack, we work out why it is there. Foundation movement, rusting lintel, failed tie, tree root, drainage issue — the fix depends on the cause. Sometimes we bring in a structural engineer for complex cases.',
      },
      {
        step: 'Stop the cause',
        detail:
          'If it is a rusting lintel, we replace it. If it is drainage, we fix the drainage. If it is foundation movement from a leaking pipe, we find and fix the leak first. Repairing the wall without stopping the cause is throwing money away.',
      },
      {
        step: 'Helical bar stitching',
        detail:
          'Stainless steel helical bars bedded into horizontal mortar joints across the crack. They tie the wall back together while letting small future movement happen without re-cracking. A quiet, non-destructive structural repair.',
      },
      {
        step: 'Rebuild or replace damaged bricks',
        detail:
          'Where bricks are broken or spalled around the crack, we cut them out and replace with matched bricks (reclaimed handmade for heritage, new pressed for modern). The repair blends so you can barely see it.',
      },
      {
        step: 'Repoint and finish',
        detail:
          'New mortar matched to the existing in colour and profile. On heritage walls, lime mortar. On modern, appropriate cement mix. Finished so the wall looks right.',
      },
    ],
    costBand:
      '$800 – $8,000 for typical domestic crack repairs. Major structural work with engineer involvement can run $15,000+.',
    faqs: [
      {
        question: 'How do I know if my cracked wall is dangerous?',
        answer:
          'Width over 5mm, horizontal orientation, or cracks that are actively growing are the warning signs. If you can see daylight through the crack, or if the wall is bulging out of line, call someone that day. For smaller cracks, monitor them over a few weeks to see if they are stable or still moving.',
      },
      {
        question: 'Will filling the crack with sealant fix it?',
        answer:
          'Only if the cause has been fixed. Otherwise the crack just opens up again beside the sealant. We often see old caulked repairs that have failed — the original crack is still there, with new cracks either side of the sealant. Fix the cause first.',
      },
      {
        question: 'What is helical bar stitching and is it invisible?',
        answer:
          'Helical bars are stainless steel spiral rods bedded into the horizontal mortar joints. After repointing, they are completely hidden. They hold the wall together across a crack while allowing minor future movement without re-cracking. One of the best structural repair techniques for brick.',
      },
      {
        question: 'Do I need a structural engineer?',
        answer:
          'For most typical cracks, no. We can diagnose and repair within our scope. For major structural issues — footing failure, wall replacement, significant movement — yes, and we work with engineers regularly. We will tell you up front if yours is one of those cases.',
      },
    ],
    relatedServices: [
      {
        title: 'Structural Crack Repair',
        href: '/services/structural-repairs/structural-crack-repair',
      },
      {
        title: 'Load-Bearing Wall Repairs',
        href: '/services/structural-repairs/load-bearing-walls',
      },
      {
        title: 'Foundation Repairs',
        href: '/services/foundation-repairs',
      },
    ],
  },

  'failing-retaining-walls': {
    name: 'Failing Retaining Walls',
    slug: 'failing-retaining-walls',
    metaTitle: 'Failing Retaining Walls Sydney | Romans',
    metaDescription:
      'Retaining wall leaning, bulging or cracking? Learn why it happens, what proper repair looks like, and when you need to rebuild. Sydney masonry since 1995.',
    heroTagline:
      'Leaning, bulging, cracking — retaining walls fail for a reason, and patching the symptom never works.',
    quickAnswer:
      'Retaining walls fail predominantly from drainage failure — water building up behind the wall pushes it forward — or from inadequate footings. Leaning, bulging and cracking are the classic signs. A proper fix requires excavating behind the wall to install ag-pipe drainage and a gravel drainage blanket, then either rebuilding the wall or stabilising it with tie-backs depending on condition. Without drainage, any retaining wall will fail again.',
    whatItIs: [
      'A retaining wall holds back soil. When it starts leaning, bulging or cracking, it usually means one of two things: the drainage behind the wall has failed and water pressure is pushing the wall forward, or the footing was never adequate for the load. Sometimes both.',
      'We see a lot of failed retaining walls across Sydney — especially in the Eastern Suburbs, North Shore and Northern Beaches where sloped blocks are everywhere. Most were built before modern drainage standards, with no ag pipes behind them, and they have been slowly rotating forward for decades.',
      'Fixing a retaining wall means working out whether a rebuild is needed or whether the wall can be saved with drainage works and stabilisation. A collapsed wall takes the garden with it, damages fences and pools, and can threaten the house above it. It is not something to leave.',
    ],
    signs: [
      'Wall visibly leaning forward at the top',
      'Bulging or bowing in the middle of the wall',
      'Cracks running vertically or diagonally through the wall',
      'Gap opening up between the wall and the ground or structures behind',
      'Water seeping through or around the wall after rain',
      'Soil settling or subsiding behind the wall',
      'Salt staining (efflorescence) on the wall face',
    ],
    causes: [
      'Failed or missing drainage behind the wall — water pressure pushes it forward',
      'Undersized or poorly founded footings',
      'Tree root pressure',
      'Original construction without reinforcement or tie-backs for the wall height',
      'Poor-quality backfill — heavy clay instead of free-draining gravel',
      'Water damage from leaking pipes or gutters above the wall',
    ],
    urgency: 'high',
    urgencyNote:
      'A leaning retaining wall is a failing retaining wall. Once it starts moving it rarely stops on its own. Walls can collapse suddenly — usually after heavy rain — and when they go they can take sections of garden, driveway or fence with them. If yours is visibly leaning or bulging, get it inspected soon.',
    howWeFixIt: [
      {
        step: 'Inspect and diagnose',
        detail:
          'We check the wall, the footing, the drainage and the conditions behind it. We determine whether the wall can be saved with stabilisation and drainage works, or whether rebuild is the honest answer.',
      },
      {
        step: 'Expose the back of the wall',
        detail:
          'We excavate behind the wall to expose the footing and the drainage zone. This is dirty work but there is no substitute. You cannot fix drainage without getting to it.',
      },
      {
        step: 'Install proper drainage',
        detail:
          'Ag pipe wrapped in geotextile at the base of the wall, a drainage blanket of gravel against the back, weep holes through the wall, and a discharge point where the water can go away. This is what makes a retaining wall last 60 years instead of 15.',
      },
      {
        step: 'Rebuild or stabilise',
        detail:
          'For walls past saving: full rebuild with correct footing, reinforcement and tie-backs engineered for the height. For walls with sound footings but drainage failure: drainage works alone may be enough. Helical bar stitching for masonry walls with cracks.',
      },
      {
        step: 'Backfill properly',
        detail:
          'Free-draining gravel against the drainage blanket, topsoil only at the top. Proper compaction. No heavy clay against the wall — that is what caused the problem first time around.',
      },
    ],
    costBand:
      '$2,500 – $4,000 per square metre for heritage-quality sandstone retaining walls. Engineered block walls typically $1,200 – $2,500 per square metre. Site access and wall height affect cost a lot.',
    faqs: [
      {
        question: 'Can a leaning retaining wall be straightened without rebuilding?',
        answer:
          'Sometimes — if the lean is minor, the footing is sound, and the damage is limited. We can install tie-backs and drainage to stop further movement. But if the wall has failed structurally, rebuild is more cost-effective long-term because you are not patching a wall that is going to keep giving you problems.',
      },
      {
        question: 'Do I need council approval to rebuild a retaining wall?',
        answer:
          'For like-for-like repairs on a wall under 600mm, usually no. For walls over 600mm, walls on boundaries, or changes to wall height or position, usually yes. We handle the paperwork if approval is needed.',
      },
      {
        question: 'What is the right material for a Sydney retaining wall?',
        answer:
          'Depends on the property. Sandstone suits heritage and traditional properties — expensive but right for the look. Engineered block is strong and cost-effective and can be faced with stone veneer for aesthetics. For large structural walls we often spec reinforced concrete core with a stone or brick face.',
      },
      {
        question: 'How long does a properly built retaining wall last?',
        answer:
          'With correct drainage and footings — 50 to 80 years is realistic for masonry walls, longer for reinforced concrete. Without drainage: 10 to 20 years before you are looking at repair again. The drainage is what lasts, or does not.',
      },
    ],
    relatedServices: [
      { title: 'Retaining Walls (Masonry)', href: '/services/masonry/retaining-walls' },
      { title: 'Stone Masonry Repairs', href: '/services/masonry/stone-masonry-repairs' },
      { title: 'Structural Foundation Repairs', href: '/services/foundation-repairs/structural-foundation' },
    ],
  },

  'rising-damp': {
    name: 'Rising Damp',
    slug: 'rising-damp',
    metaTitle: 'Rising Damp in Brick Walls Sydney | Signs & Proper Fix | Romans',
    metaDescription:
      'Damp at the base of a brick wall? Learn the difference between rising damp and other moisture problems, and how a proper lime mortar fix works.',
    heroTagline:
      'Damp, salty, crumbling brickwork at the base of a wall — rising damp is an old-building problem that needs an old-building fix.',
    quickAnswer:
      'Rising damp is groundwater moving up through masonry by capillary action, carrying salts that crystallise and break down bricks and mortar. It is common in pre-1930 Sydney buildings with failed or missing damp-proof courses. The correct fix is injecting a new chemical damp-proof course, removing impermeable modern render and paint, and re-rendering with breathable lime-based materials. Cement render and waterproof paint make rising damp worse, not better.',
    whatItIs: [
      'Rising damp is when moisture from the ground moves up through masonry by capillary action — the same way a paper towel soaks up water. It carries dissolved salts with it, and when the moisture evaporates at the wall surface, the salts crystallise and expand, breaking down the mortar and brick faces. Over years it produces the classic tidemark a metre or so above floor level, with salt-crusted, crumbling brickwork below.',
      'Older Sydney buildings — pre-1930, often pre-1910 — frequently have rising damp because they were built before damp-proof courses were standard. Or the original damp course has degraded. Modern fixes often make it worse: cement render and waterproof paint trap the moisture against the wall, accelerating the decay.',
      'Proper treatment is about letting the wall breathe while managing the moisture source. That means breathable lime mortars and renders, not modern cement-based products. The fix takes patience, but it holds.',
    ],
    signs: [
      'Tidemark or staining about 1m up from floor level',
      'Salt efflorescence (white fluffy crystals) on the wall surface',
      'Paint or render bubbling, flaking or falling off in the affected zone',
      'Mortar crumbling when you scratch it with a key',
      'Musty smell in rooms with affected walls',
      'Damp patches at the base of internal walls',
      'Timber skirting boards rotting or warping',
    ],
    causes: [
      'No damp-proof course in original construction (common pre-1930)',
      'Damp-proof course that has failed over time',
      'External ground levels raised above the damp course over the decades',
      'Poor drainage against external walls',
      'Impermeable modern render trapping ground moisture in the wall',
      'Leaking underground pipes or stormwater',
    ],
    urgency: 'medium',
    urgencyNote:
      'Rising damp is rarely an emergency but it never stops on its own, and left for years it seriously damages brickwork and internal finishes. The longer you leave it, the bigger the repair scope when you get around to it. If timber skirtings or floorboards are rotting, move it up the list.',
    howWeFixIt: [
      {
        step: 'Confirm it is actually rising damp',
        detail:
          'Rising damp is often misdiagnosed. Penetrating damp, condensation, leaking pipes and bridged damp courses all look similar. We test moisture levels and salt profiles to confirm before spending money on the wrong treatment.',
      },
      {
        step: 'Remove failed modern materials',
        detail:
          'Cement render, waterproof paint, vinyl wallpaper — anything impermeable in the damp zone comes off. These are what cause the damp to spread and build up salts.',
      },
      {
        step: 'Install a new damp-proof course',
        detail:
          'For older buildings we typically inject a chemical DPC — silane or siloxane cream injected into the mortar bed at ground level. Cures and forms a water-repellent barrier. For heritage work with lime mortar, we match the DPC system to the wall.',
      },
      {
        step: 'Re-render with breathable lime',
        detail:
          'Lime-based render and plaster let the wall dry out instead of trapping moisture. This is the opposite of modern cement render. It takes longer to cure but the wall breathes the way it was designed to.',
      },
      {
        step: 'Address the ground and drainage',
        detail:
          'Lower garden beds and paving so they are below the damp course. Re-direct stormwater away from the wall. Without this the new damp course will eventually be bridged again.',
      },
    ],
    costBand:
      '$3,500 – $15,000 for typical domestic rising damp treatment per wall, depending on length and whether internal finishes also need redoing.',
    faqs: [
      {
        question: 'How do I know if it is rising damp or something else?',
        answer:
          'Rising damp has a classic tidemark — a horizontal stain line, usually about 1m above floor level. It is worse at the bottom and tapers off above. Penetrating damp has isolated patches tied to a specific leak point. Condensation is usually on cold surfaces and windows. We do moisture and salt testing to confirm before treatment.',
      },
      {
        question: 'Will painting the inside wall fix the damp?',
        answer:
          'No — and waterproof paint will make it worse by trapping moisture. Paint is a finishing step after the damp course, render and drainage are sorted. Painting without those other steps fails in months.',
      },
      {
        question: 'Does my heritage building need special treatment?',
        answer:
          'Yes. Heritage buildings need breathable lime-based systems, not modern cement. Using cement render on an old soft brick wall traps moisture and accelerates damage. We match the system to the age and fabric of the building.',
      },
      {
        question: 'How long does a chemical damp course last?',
        answer:
          'Properly injected chemical DPCs typically carry a 20 to 30 year manufacturer warranty. The render and surface finishes need to be done right alongside it — the DPC on its own is not the whole fix.',
      },
    ],
    relatedServices: [
      { title: 'Heritage Brick Repairs', href: '/services/heritage-restoration/heritage-brick-repairs' },
      { title: 'Historic Stuccos & Renders', href: '/services/heritage-restoration/historic-stuccos-renders' },
      { title: 'Period Materials', href: '/services/heritage-restoration/period-materials' },
    ],
  },

  'spalling-render': {
    name: 'Spalling & Falling Render',
    slug: 'spalling-render',
    metaTitle: 'Render Falling Off Walls Sydney | Romans',
    metaDescription:
      'Render bubbling, cracking or falling off your walls? Here is what is really happening and what a proper repair looks like. Sydney masonry since 1995.',
    heroTagline:
      'Render does not fall off healthy walls. When it does, the wall underneath is usually the real problem.',
    quickAnswer:
      'Render that is bubbling, cracking or falling off is almost always a symptom of something going wrong underneath — salt in the masonry, trapped moisture, or a render mix too rigid for the wall behind it. Coastal Sydney walls and cement render on old soft brick are the most common causes. A proper fix means removing all failed render, treating the substrate, and re-rendering with a breathable system matched to the wall — not smearing new cement render over the same problem.',
    whatItIs: [
      'Spalling render is render that is lifting, bubbling, cracking or falling off in patches. It is almost never a render problem on its own — it is a symptom of something happening underneath. The most common causes are salt in the masonry, moisture trapped behind the render, or the render being bonded to a wall that cannot support it properly.',
      'In coastal parts of Sydney — Bondi, Manly, Dee Why — salt crystallising between the render and the brickwork pushes the render off from behind. In older Inner West and Eastern Suburbs terraces, cement render was applied over soft handmade brick in past decades, and the resulting moisture trap is blowing the render off 30 to 60 years later.',
      'A proper fix means working out why the render failed, dealing with that cause, and re-rendering with a material matched to the wall. Smearing new cement render over the same problem means it falls off again in a few years.',
    ],
    signs: [
      'Render bubbling or hollow-sounding when tapped',
      'Large sheets of render detaching from the wall',
      'Cracks around the edges of render patches',
      'White salt deposits (efflorescence) on or behind render',
      'Paint peeling along with the render',
      'Damp patches inside walls where render has failed outside',
    ],
    causes: [
      'Salt crystallisation behind the render (common in coastal Sydney)',
      'Cement render on soft old brick, trapping moisture',
      'Rising damp pushing moisture up through render',
      'Poor original bond — render applied without proper preparation',
      'Wrong mix — too strong, too rigid, or poor-quality aggregate',
      'Failed waterproofing above the rendered area letting water run behind',
    ],
    urgency: 'medium',
    urgencyNote:
      'If render is only bubbling, you have time. If sections are actively falling off — especially on street frontages or above walkways — it becomes a safety issue. Once it starts going, it usually accelerates. Get it inspected so you know the scope.',
    howWeFixIt: [
      {
        step: 'Full inspection',
        detail:
          'We tap every section to find hollow render — the stuff you can see is only part of it. We identify the cause: salt, damp, wrong mix, poor bond. The repair scope depends on the cause.',
      },
      {
        step: 'Remove all failed render',
        detail:
          'Everything hollow or loose comes off. We cut back to sound render with clean edges. Leaving weak render next to new work means the new work fails at the join.',
      },
      {
        step: 'Treat the substrate',
        detail:
          'Wash out salts, let the wall dry, and apply a salt-resistant primer if needed. On heritage brick, we often apply a breathable lime bedding coat so the render bonds properly without trapping moisture.',
      },
      {
        step: 'Re-render with the right material',
        detail:
          'On heritage buildings, lime-based render. On modern masonry, an appropriate cement render with the right flexibility. On coastal walls, salt-resistant render. We match the finish — roughcast, float, bagged — to what is already there.',
      },
      {
        step: 'Apply breathable protective coating',
        detail:
          'Breathable masonry coating or mineral paint keeps water out while letting the wall breathe. Acrylic paint on lime render traps moisture — we never use it. The right finish keeps the repair looking right for decades.',
      },
    ],
    costBand:
      '$150 – $350 per square metre depending on wall type, access, and whether heritage-grade materials are needed.',
    faqs: [
      {
        question: 'Can I just re-render over the bubbling areas?',
        answer:
          'No. Render laid over failing render will fail too, usually faster. You have to remove all the failed render, treat the cause, and re-render properly. Shortcutting this step means you pay twice.',
      },
      {
        question: 'Why did cement render get used on my old brick house?',
        answer:
          'In the 1960s to 1980s it was common to cement-render older brick houses — seen as modernising them. Nobody thought about the fact that soft lime-mortared brick walls need to breathe. 30 to 50 years later, the damage is showing up. Correcting it means going back to breathable lime-based materials.',
      },
      {
        question: 'What is the right render for a coastal home?',
        answer:
          'A salt-resistant, breathable render — lime-based for heritage, polymer-modified for modern. We use products that let moisture escape from the wall without letting salt build up behind. Standard cement render in Bondi or Manly is a 10-year fix.',
      },
      {
        question: 'Can I just paint it instead of re-rendering?',
        answer:
          'If the render is sound but just faded or tired, yes — a breathable mineral paint can refresh it. If the render is bubbling, cracking or falling off, painting is pointless. Fix the render first, paint last.',
      },
    ],
    relatedServices: [
      { title: 'Historic Stuccos & Renders', href: '/services/heritage-restoration/historic-stuccos-renders' },
      { title: 'Concrete Resurfacing', href: '/services/concrete-repairs/concrete-resurfacing' },
      { title: 'Facade Renovation', href: '/services/building-restoration/facade-renovation' },
    ],
  },

  'crumbling-mortar': {
    name: 'Crumbling Mortar Joints',
    slug: 'crumbling-mortar',
    metaTitle: 'Crumbling Mortar Sydney | Repointing | Romans',
    metaDescription:
      'Mortar crumbling out of brick joints? Learn why it happens, why cement pointing damages old bricks, and what proper lime repointing looks like.',
    heroTagline:
      'Soft crumbling joints, gaps between bricks, mortar falling out when you brush it — your wall is overdue for proper repointing.',
    quickAnswer:
      'Mortar does not last forever. On Sydney buildings 80+ years old, the original lime mortar weathers out of the joints and needs repointing. Many old buildings have been incorrectly repointed with cement mortar in past decades, which is too rigid for soft heritage brick and actively damages the bricks themselves. The correct fix is lime mortar matched to the original, raked and pointed by hand — it lasts 40–60 years when done properly.',
    whatItIs: [
      'Mortar does not last forever. Original lime mortar on a 120-year-old terrace has been weathering for a century, and at some point the joints stop holding water out. When mortar fails, water gets into the wall. Water in the wall damages brick faces, rusts any internal metal, and eventually causes structural problems.',
      'A huge amount of Sydney brick is around this age — Victorian and Federation terraces, Interwar homes, old warehouses. Most need repointing at some point, and many have already been repointed incorrectly with hard cement mortar, which is now actively damaging the bricks it was meant to protect.',
      'Proper repointing is about more than just filling the joints. The mortar mix has to match the brick strength (soft brick = soft mortar), the profile has to match the original, and on heritage buildings the aesthetic finish has to be right. Done well, it lasts 40 to 60 years.',
    ],
    signs: [
      'Mortar crumbling or powdering when you scratch it with a key',
      'Visible gaps in mortar joints, especially on exposed elevations',
      'Bricks loose in the wall — moving when pushed',
      'Water stains or damp patches inside appearing where mortar has failed outside',
      'Plant growth in joints (moss, weeds, small plants)',
      'Hard grey cement pointing next to softer original mortar',
      'Brick faces spalling — surface flaking away',
    ],
    causes: [
      'Age — original lime mortar has weathered out over a century',
      'Cement repointing from past decades now damaging the bricks',
      'Salt crystallisation in joints breaking down the mortar',
      'Water ingress from failed flashing, gutters or damp',
      'Wrong original mortar mix — too weak or too strong for the brick',
      'Freeze-thaw cycles slowly fracturing the mortar (minor in Sydney but happens)',
    ],
    urgency: 'low',
    urgencyNote:
      'Crumbling mortar is usually a years-long problem, not an emergency. But it is not going to fix itself, and every year you wait the cost grows as water damage spreads into the bricks themselves. For heritage buildings, doing it properly with lime mortar before the bricks are damaged beyond repair is the right call.',
    howWeFixIt: [
      {
        step: 'Inspect and mix-match',
        detail:
          'We assess the existing mortar — age, composition, colour, profile — and work out what the original mix was. We take samples, test them if needed, and mix replacement mortar to match. For heritage work this is the most important step.',
      },
      {
        step: 'Rake out old mortar by hand',
        detail:
          'For heritage brick, we rake out joints by hand with chisels or specialist tools — never with angle grinders, which damage soft brick faces. Depth is usually 15–25mm. Slow work but essential for old buildings.',
      },
      {
        step: 'Wet the joints',
        detail:
          'Old dry brick sucks water out of fresh mortar too fast, which weakens the bond. We pre-wet joints so the mortar cures properly. Sounds simple but making this step is one of the reasons old repointing jobs fail.',
      },
      {
        step: 'Point the joints correctly',
        detail:
          'Lime or lime-cement gauged mortar, pushed into the joints firmly, tooled to match the original profile — flush, raked, struck, weathered, or tuck pointed depending on the building. Colour-matched to the existing.',
      },
      {
        step: 'Cure slowly',
        detail:
          'Lime mortar needs slow, damp curing. We cover the work, mist-spray for several days, and protect from direct sun or heavy rain. Rushed curing is why some repoints fail in 5 years instead of 50.',
      },
    ],
    costBand:
      'Front facade of a single-width terrace typically $8,000 – $15,000. Full external repointing on a terrace usually $20,000 – $40,000 depending on access, condition and tuckpointing.',
    faqs: [
      {
        question: 'Why is cement pointing bad for my old brick house?',
        answer:
          'Old bricks are soft and permeable — they need to breathe. Cement mortar is too hard and too impermeable. Water that gets into the wall cannot escape through the hard cement joints, so it escapes through the soft bricks instead, damaging them. In 30–50 years, you end up with cement joints intact and bricks destroyed.',
      },
      {
        question: 'What is tuckpointing and does my terrace have it?',
        answer:
          'Tuckpointing is a decorative technique where dark mortar fills the joints, and a fine line of white putty is run through the centre of each joint to create the illusion of very fine, precise brickwork. Common on higher-end Victorian terraces in Paddington, Newtown, Leichhardt and similar areas. If your brickwork has thin white lines running through dark joints, yes.',
      },
      {
        question: 'How long does proper lime repointing last?',
        answer:
          '40 to 60 years with proper specification and installation. Some original lime mortar on Sydney terraces has lasted 120+ years — we are just replacing what time has finally worn out. Cement repoints typically fail earlier, often 20–30 years, because the harder mortar accelerates brick decay.',
      },
      {
        question: 'Can you match the original mortar colour and style?',
        answer:
          'Yes — on heritage work, matching is central to the job. We take samples, mix trial batches, and test against the existing before committing to the scope. Colour, texture and joint profile all get matched so the repoint is barely noticeable.',
      },
    ],
    relatedServices: [
      { title: 'Repointing & Brick Pointing', href: '/services/masonry/repointing' },
      { title: 'Heritage Brick Repairs', href: '/services/heritage-restoration/heritage-brick-repairs' },
      { title: 'Period Materials', href: '/services/heritage-restoration/period-materials' },
    ],
  },

  'foundation-movement': {
    name: 'Foundation Movement & Settlement',
    slug: 'foundation-movement',
    metaTitle: 'Foundation Movement Sydney | Romans Building Services',
    metaDescription:
      'House settling, walls cracking, doors sticking? Learn the signs of foundation movement, when it is serious, and how underpinning works.',
    heroTagline:
      'Cracks appearing in walls, doors that stick, floors that slope — your house may be on the move.',
    quickAnswer:
      'Foundation movement happens when soil under a house expands, contracts or sinks unevenly — reactive clay soils in Sydney are a major cause. Signs include stair-step wall cracks, doors that stick, sloping floors, and gaps opening up between walls and skirtings. Active movement needs underpinning to extend footings deeper to stable ground. Minor finished movement can usually be repaired with crack stitching alone. Monitoring cracks over a few months is the cheapest way to work out which you have.',
    whatItIs: [
      'Foundation movement happens when the soil under a house expands, contracts or sinks unevenly. The footings — and the walls sitting on them — move with it. Sydney has a lot of reactive clay soils, especially in parts of the Inner West, Parramatta, Blacktown and out west. Reactive clay swells when wet and shrinks when dry, and that cycle over years moves houses.',
      'The classic signs are stair-step cracks in brickwork, doors that stop closing, gaps between floors and skirtings, and floors that have developed a noticeable slope. Not every house with a crack is moving — thermal movement and minor settlement happen to every house. The question is whether the movement is ongoing.',
      'Severe or ongoing movement needs structural intervention: usually underpinning, where the footings are extended deeper to reach stable ground. Minor or finished movement can usually be repaired with crack stitching and cosmetic work. Working out which is which is half the job.',
    ],
    signs: [
      'Stair-step cracks running diagonally through brickwork',
      'Cracks wider than 5mm that continue to grow',
      'Doors or windows sticking or no longer closing',
      'Floors sloping — marble test confirms (ball rolls to one side)',
      'Gaps opening between walls and skirtings or ceilings',
      'Brick walls tilting out of vertical',
      'Cracks reappearing after previous repairs',
    ],
    causes: [
      'Reactive clay soils expanding and contracting with moisture changes',
      'Leaking pipes or drains washing out soil under footings',
      'Trees drawing water out of clay soil (causes shrinkage)',
      'Poorly compacted fill from original construction',
      'Undersized or shallow original footings',
      'Drainage issues causing soil softening near foundations',
      'Adjacent excavation (new neighbouring construction)',
    ],
    urgency: 'high',
    urgencyNote:
      'Ongoing foundation movement does not stop on its own and usually accelerates. If cracks are growing, doors have started sticking recently, or the house feels noticeably different, get it assessed soon. Catching it early means a smaller underpinning scope and less collateral damage to walls, floors and services.',
    howWeFixIt: [
      {
        step: 'Investigate',
        detail:
          'Crack monitoring gauges on suspect cracks to measure ongoing movement. Sometimes a drain inspection to rule out leaking services. We usually bring in a structural engineer for anything suspected to be active movement.',
      },
      {
        step: 'Fix the cause',
        detail:
          'Leaking pipes get fixed. Tree roots drawing moisture from under the slab may need addressing. Drainage near footings corrected. Without stopping the cause, any structural repair is temporary.',
      },
      {
        step: 'Underpin if required',
        detail:
          'For active or severe movement, underpinning extends the footing deeper to reach stable ground. Traditional mass concrete underpinning or modern screw-pile underpinning depending on site. Engineered for the specific situation.',
      },
      {
        step: 'Stitch the cracks',
        detail:
          'Once movement has stopped, cracks get structural repair — helical bar stitching tied into the brickwork across the crack. Holds the wall together without needing major demolition.',
      },
      {
        step: 'Repoint and repair',
        detail:
          'Damaged bricks replaced, joints repointed to match, interior finishes made good. The work should be invisible when finished.',
      },
    ],
    costBand:
      'Underpinning typically $2,500 – $7,000 per pier, with houses needing 4 to 20 piers depending on severity. Total jobs often $15,000 – $100,000+. Engineering fees extra.',
    faqs: [
      {
        question: 'How do I know if my house is actively moving?',
        answer:
          'Fit crack monitors across suspect cracks. If the gauge reading changes over 3–6 months, the house is moving. If it stays stable, movement has probably finished and you can do a repair without underpinning. Movement monitoring is cheap and saves expensive guessing.',
      },
      {
        question: 'Do I need a structural engineer?',
        answer:
          'For suspected active movement, yes. The engineer designs the underpinning, certifies the work, and provides documentation for insurance or resale. We work with engineers regularly and can bring one in or work with one you have engaged.',
      },
      {
        question: 'Will my house insurance cover it?',
        answer:
          'Depends on the policy and the cause. Movement from a leaking pipe is often covered. Movement from reactive clay alone is usually not. Check your PDS or ask your insurer. We can provide documentation for claims where relevant.',
      },
      {
        question: 'How long does underpinning take?',
        answer:
          'Depends on scope. A 6-pier traditional underpin typically 2–4 weeks. Screw pile underpinning is faster, often 1–2 weeks. Crack repair and finishing after underpinning adds another week or two.',
      },
    ],
    relatedServices: [
      { title: 'Underpinning', href: '/services/foundation-repairs/underpinning' },
      { title: 'Structural Foundation Repairs', href: '/services/foundation-repairs/structural-foundation' },
      { title: 'Settlement Stabilisation', href: '/services/foundation-repairs/settlement-stabilisation' },
      { title: 'Structural Crack Repair', href: '/services/structural-repairs/structural-crack-repair' },
    ],
  },

  'chimney-cracks': {
    name: 'Chimney Cracks & Leaks',
    slug: 'chimney-cracks',
    metaTitle: 'Chimney Cracks & Leaks Sydney | Romans',
    metaDescription:
      'Chimney cracked, leaking or leaning? Learn why chimneys fail, how to tell if yours is dangerous, and what a proper rebuild involves.',
    heroTagline:
      'Chimneys take the weather full-on for 100+ years — and they show it before the rest of the house does.',
    quickAnswer:
      'Chimney leaks and cracks are almost always caused by weathered mortar, failed flashing at the roof junction, or a missing chimney cap. Older Federation and Interwar chimneys across Sydney need repointing every 40–60 years. A leaning chimney or one with loose bricks can be dangerous in strong wind. Proper repair includes repointing with matched lime mortar, replacing lead flashings, and fitting a chimney cap — if it is beyond saving, partial or full rebuild is the honest answer.',
    whatItIs: [
      'Chimneys sit up above the roof line taking everything the weather throws at them — sun, rain, wind, salt in coastal areas — with no protection from the rest of the building. They crack, lean, lose their mortar, and their flashings fail. A lot of the old Federation and Interwar chimneys across Mosman, Woollahra, Strathfield and similar suburbs are now 80+ years into their life and showing it.',
      'A leaking chimney usually shows up as water stains on ceilings near the flue, damp patches around the fireplace, or rust stains on the external brickwork. Those stains are often weeks or months of water damage inside the roof space before they appear. The fix is rarely just patching the leak — it usually involves repointing, re-flashing, sometimes rebuilding the top section.',
      'Leaning chimneys are more serious. They can be caused by foundation movement, rusting steel inside the brickwork, or decades of weather eroding the mortar on one side more than the other. A chimney that has lost its plumb is a chimney that can eventually fall — especially in strong wind.',
    ],
    signs: [
      'Water stains on ceilings near the flue',
      'Damp patches inside the fireplace or around it',
      'Rust stains running down the external brickwork',
      'Mortar crumbling or missing from chimney joints',
      'Chimney visibly leaning out of vertical',
      'Bricks loose at the top of the chimney',
      'Flashing around the base torn, lifted or damaged',
      'White salt deposits (efflorescence) on the brickwork',
    ],
    causes: [
      'Failed or damaged flashing at the roof junction',
      'Mortar weathered out — most common on older chimneys',
      'Rusting steel cramps or ties inside the chimney expanding',
      'Original flue unlined or liner degraded',
      'Chimney cap missing, allowing water straight in',
      'Tree impact or high wind damage',
      'Foundation movement pulling the chimney base out of plumb',
    ],
    urgency: 'high',
    urgencyNote:
      'A leaning chimney or one with visibly loose bricks is dangerous — in a storm it can fall and do serious damage. Leaks are less urgent but cause accelerating internal damage if left. If you can see bricks moving, the flashing is lifted, or water is entering, it needs attention.',
    howWeFixIt: [
      {
        step: 'Safe access and inspection',
        detail:
          'Scaffold or edge protection for safe access. We inspect the full chimney — mortar joints, flue condition, flashing, cap, bricks. Often internal access to check the flue from inside is also needed.',
      },
      {
        step: 'Repoint failing mortar',
        detail:
          'Rake out failing joints and repoint with matched mortar. For heritage chimneys, lime mortar. We pay extra attention to the top few courses, which take the worst weather.',
      },
      {
        step: 'Replace loose or damaged bricks',
        detail:
          'Any bricks that are loose, cracked or missing get cut out and replaced. Matched handmade or pressed bricks depending on the chimney age. The top 2–4 courses sometimes need full rebuild.',
      },
      {
        step: 'Re-flash properly',
        detail:
          'Lead flashings at the roof junction — base, step, and over-flashing. This is where most chimney leaks come from. Done properly with lead dressed into the mortar joints, it lasts as long as the chimney.',
      },
      {
        step: 'Install a chimney cap',
        detail:
          'If there is no cap, we fit one — a proper chimney cap keeps water out, stops birds nesting in the flue, and improves draught. Small job, big impact on chimney life.',
      },
      {
        step: 'Straighten if leaning',
        detail:
          'For a leaning chimney past saving, partial or full rebuild with reinforced core and new flashings. For chimneys with minor lean but sound fabric, tie-backs to the roof structure can stabilise.',
      },
    ],
    costBand:
      'Repointing and re-flashing typically $3,500 – $8,500. Top-section rebuild $6,000 – $12,000. Full chimney rebuild $15,000 – $30,000+ depending on height and access.',
    faqs: [
      {
        question: 'My chimney is leaking but I have not had a fire in it for years. Do I still need to fix it?',
        answer:
          'Yes. The leak is water getting into your roof space and eventually your ceilings. It does not matter whether the chimney is in use — the damage is the same. And if the chimney is decommissioned, consider getting it capped off properly so it stops being a maintenance item.',
      },
      {
        question: 'Can I keep using the chimney after repairs?',
        answer:
          'If the flue is sound or has been re-lined, yes. If the flue is degraded, we recommend re-lining or decommissioning for wood-burning use. Gas fires have different requirements — usually need a flexible flue liner.',
      },
      {
        question: 'How long do chimney repairs last?',
        answer:
          'Proper repointing with appropriate mortar: 40–60 years. Lead flashings: 50+ years if installed correctly. Full rebuild: same life as the original chimney, typically 100+ years. Cheap short-cut repairs often fail in 5–10 years.',
      },
      {
        question: 'Can you remove a chimney that is beyond saving?',
        answer:
          'Yes. Chimney removal, flue capping, internal make-good and roof patching. Often a cleaner solution for decommissioned chimneys that are failing. We\'ll tell you honestly whether yours is worth saving or whether removal is the right call.',
      },
    ],
    relatedServices: [
      { title: 'Brick & Block Work', href: '/services/masonry/brick-block-work' },
      { title: 'Heritage Brick Repairs', href: '/services/heritage-restoration/heritage-brick-repairs' },
      { title: 'Defect Rectification', href: '/services/building-restoration/defect-rectification' },
    ],
  },

  'efflorescence-salt-damage': {
    name: 'Efflorescence & Salt Damage',
    slug: 'efflorescence-salt-damage',
    metaTitle: 'Salt Damage & Efflorescence Sydney | Romans',
    metaDescription:
      'White salt crystals on brickwork, crumbling mortar, spalling brick faces — salt damage explained. Coastal Sydney specialists.',
    heroTagline:
      'White crystals on your walls are not just ugly — they are telling you salt is inside the brickwork, and it is destroying it from within.',
    quickAnswer:
      'Efflorescence is the white crystalline deposit on masonry — it is salts being carried to the surface by moisture and crystallising as water evaporates. On its own it is harmless, but it signals water is moving through your wall. When salts crystallise inside the wall instead of on the surface — usually because a non-breathable render or paint is trapping them — they expand, spalling bricks and mortar. Fixing it means dealing with the moisture source and using breathable materials.',
    whatItIs: [
      'Efflorescence is the white fluffy deposit you see on brick and masonry walls. It is actually salts — natural salts from the bricks, mortar, or ground — being carried to the surface by moisture in the wall and crystallising when the water evaporates. On its own the white deposit is harmless and can usually be brushed off. The problem is what it tells you: water is moving through your wall carrying dissolved salt.',
      'When salts crystallise inside the wall instead of on the surface — because a non-breathable render or paint is trapping them — they expand. That expansion pushes render off, cracks brick faces, and blows mortar out of joints. This is called salt attack or salt decay, and it is one of the main reasons coastal Sydney brickwork fails.',
      'The fix is never just cleaning the surface. You have to deal with the moisture source, let the wall breathe, and sometimes apply specific salt-treatment systems so existing salts can leach out without causing more damage.',
    ],
    signs: [
      'White fluffy crystals on the surface of brick or render',
      'Salt deposits reappearing after you brush them off',
      'Brick faces flaking, spalling or turning powdery',
      'Mortar crumbling where salt deposits are worst',
      'Paint or render bubbling and peeling in patches',
      'Damp patches inside walls with salt staining on internal finishes',
      'Worst on coastal-facing walls or walls near the ground',
    ],
    causes: [
      'Salt in the air crystallising in brick pores (coastal suburbs)',
      'Rising damp carrying ground salts up through the wall',
      'Leaking pipes or drains depositing salt through the brickwork',
      'Cement mortars and renders trapping salts against soft brick',
      'Waterproof paint sealing moisture and salts into the wall',
      'New building — salts in fresh mortar working their way out (usually self-limiting)',
    ],
    urgency: 'medium',
    urgencyNote:
      'Minor surface efflorescence on a new wall usually self-resolves within a year or two. Ongoing efflorescence on an older wall, or any signs of brick faces spalling or mortar failing, means there is an active moisture problem that will keep damaging the wall until it is fixed. Not an emergency, but not something to ignore either.',
    howWeFixIt: [
      {
        step: 'Identify the moisture source',
        detail:
          'Salt needs moisture to move. We find where the water is coming from — rising damp, leaking pipe, poor drainage, failed waterproofing, coastal exposure. The fix starts with stopping the water.',
      },
      {
        step: 'Remove failed finishes',
        detail:
          'Cement render, waterproof paint, impermeable coatings — anything trapping salts in the wall comes off. We use breathable systems in their place.',
      },
      {
        step: 'Allow the wall to dry',
        detail:
          'With the moisture source stopped and impermeable finishes removed, the wall needs time to dry out. For heritage walls this can be months, and drying naturally is the right approach rather than trying to force it.',
      },
      {
        step: 'Neutralise salts where needed',
        detail:
          'For badly salt-contaminated walls, we apply specialised salt-retarder systems — clay poultices or sacrificial renders that pull salts out of the brick and into material that can be removed.',
      },
      {
        step: 'Restore with breathable materials',
        detail:
          'Repointing with appropriate lime mortar, breathable render where needed, and mineral-based paint that lets the wall continue to breathe. Damaged bricks replaced with matched stock.',
      },
    ],
    costBand:
      'Depends heavily on scope. Cleaning and minor repair $1,500 – $4,000. Full salt-damage restoration on a heritage wall $8,000 – $25,000+.',
    faqs: [
      {
        question: 'Can I just scrub the salt off with a wire brush?',
        answer:
          'For cosmetic efflorescence on a new wall, yes — brush it off dry, do not use water (water just dissolves and re-deposits the salt). For ongoing salt damage on an older wall, scrubbing the surface does nothing to the underlying problem. The salts keep coming because the water keeps moving through the wall.',
      },
      {
        question: 'What is the best paint for a coastal brick wall?',
        answer:
          'Breathable mineral paint — silicate or lime-based. Never acrylic or waterproof paint on old brick, because they trap moisture and salts behind them, which is exactly what you do not want.',
      },
      {
        question: 'Why does my render have salt coming through even though it is new?',
        answer:
          'The salt is either rising from the ground (missing or failed damp course) or coming through from the brick behind the render. New render on a wall with ongoing salt issues will fail again in a few years unless the underlying moisture and salt problem is dealt with first.',
      },
      {
        question: 'Is efflorescence the same as concrete cancer?',
        answer:
          'No, but they are related. Efflorescence is salt deposits on masonry. Concrete cancer is rusting steel inside concrete. Both are caused by moisture and salt — but efflorescence is usually a masonry problem, and concrete cancer is a concrete-and-steel problem. A coastal apartment block often has both.',
      },
    ],
    relatedServices: [
      { title: 'Heritage Brick Repairs', href: '/services/heritage-restoration/heritage-brick-repairs' },
      { title: 'Protective Coatings', href: '/services/concrete-repairs/protective-coatings' },
      { title: 'Historic Stuccos & Renders', href: '/services/heritage-restoration/historic-stuccos-renders' },
    ],
  },

  'leaking-balconies': {
    name: 'Leaking Balconies',
    slug: 'leaking-balconies',
    metaTitle: 'Leaking Balconies Sydney | Romans Building Services',
    metaDescription:
      'Leaking balconies in Sydney apartments. Learn whether the membrane, tile bed, drainage or concrete is failing, and how to repair it properly.',
    heroTagline:
      'Water coming through from the balcony above is almost always the membrane — and almost never fixed by more silicone.',
    quickAnswer:
      'Leaking balconies are usually caused by a failed waterproof membrane beneath the tiles, blocked drainage, or cracked tile bedding allowing water into the slab. Fixing a balcony leak properly means lifting the tiles, removing the failed membrane, treating any concrete damage, installing a new compliant membrane system, and re-bedding tiles with correct falls to drainage. Sealants around tile joints are not a real fix.',
    whatItIs: [
      'A leaking balcony is one of the most common and most expensive problems in Sydney apartments. Water comes through the ceiling of the unit below, or shows up as damp patches on internal walls, or rots out window frames over time. The source is almost always a failed waterproof membrane under the balcony tiles, though drainage failures, cracked slabs and wall-junction failures all contribute.',
      'Balcony waterproofing has a design life of 10–15 years when done properly. Older apartments are well past that, and many balconies have never had a proper membrane replacement since original construction. Even newer buildings often have balcony defects from rushed original waterproofing that fails within 5 years.',
      'The fix is rarely simple. A proper balcony waterproofing repair means lifting tiles, removing bedding, inspecting the concrete slab, treating any damage, installing a new compliant membrane, and re-bedding tiles to correct falls. Cheap fixes — silicone around the edges, sealer painted on top — delay the real job and usually make it worse.',
    ],
    signs: [
      'Water stains or damp patches on the ceiling below the balcony',
      'Cracked or loose tiles on the balcony surface',
      'Efflorescence (white salt deposits) on the underside of the balcony',
      'Rusty steel reinforcement visible in the balcony soffit (concrete cancer starting)',
      'Water pooling on the balcony instead of draining away',
      'Damp patches on internal walls adjacent to balcony door frames',
      'Timber door and window frames warping or rotting near the balcony',
    ],
    causes: [
      'Failed or perished waterproof membrane under the tiles (most common cause)',
      'Blocked or badly positioned balcony drainage outlets',
      'Cracked tile bedding letting water into the slab',
      'Inadequate or non-existent falls to drainage',
      'Wall-to-balcony junction leaks (where the balcony meets the building)',
      'Cracked slab from movement or concrete cancer below the membrane',
      'Original construction defects — membrane installed over wet concrete or dusty substrate',
    ],
    urgency: 'high',
    urgencyNote:
      'A balcony leak is damaging the apartment below right now — typically to ceilings, walls, and sometimes electrical systems. It will also be damaging the structural concrete in the balcony slab, which is a much more expensive fix if left. Get it inspected soon so you understand the scope, even if the full repair is staged over months.',
    howWeFixIt: [
      {
        step: 'Inspect and diagnose',
        detail:
          'Identify where the water is actually entering — membrane failure, drainage, wall junction, slab cracking. Often a combination. We probe the tile bedding, check falls, inspect drainage outlets and examine the underside of the slab for damage.',
      },
      {
        step: 'Lift tiles and remove failed membrane',
        detail:
          'Tiles come up along with bedding and the old membrane. For heritage or expensive tiles we carefully salvage what we can. Everything down to the concrete substrate is exposed and assessed.',
      },
      {
        step: 'Treat the slab',
        detail:
          'Any concrete cancer, cracks, or damage in the slab gets repaired before new waterproofing goes on. This is the step where quick jobs fail — if the slab is wet or damaged, the new membrane fails too.',
      },
      {
        step: 'Install a compliant membrane system',
        detail:
          'New waterproof membrane applied to manufacturer spec with proper upturns at walls, around penetrations, and into drainage outlets. Multiple coats with inspection between. Warranty-backed system.',
      },
      {
        step: 'Re-bed tiles with correct falls',
        detail:
          'Tiles re-laid on new bedding with correct falls to drainage (minimum 1:100). Grout and perimeter sealant to match. Done right, the balcony sheds water properly for the next 15+ years.',
      },
    ],
    costBand:
      'Typical apartment balcony repair: $8,000 – $25,000. Multiple balconies staged across a strata building $50,000 – $300,000+. Depends on tile area, slab damage, and whether scaffolding is needed.',
    faqs: [
      {
        question: 'Can I just reseal the tile grout to stop the leak?',
        answer:
          'No. The water is not coming through the grout — it is coming through the failed membrane underneath. Regrouting or siliconing around the edges is cosmetic at best and often traps moisture, making the damage worse. The membrane has to be replaced.',
      },
      {
        question: 'How long does a proper balcony waterproofing job take?',
        answer:
          'For a single apartment balcony: typically 1–2 weeks including curing time between membrane coats. Strata-wide programs run 2–6 months depending on number of balconies and whether they are done sequentially or in parallel.',
      },
      {
        question: 'Is the balcony leak coming from my unit or the one above?',
        answer:
          'Almost always the balcony directly above. Water tracks down through the slab and appears below where it entered. Occasionally water can travel sideways within the slab, but in nearly every case the leaking balcony is directly overhead.',
      },
      {
        question: 'Who pays for balcony leak repairs in a strata building?',
        answer:
          'Depends on your by-laws. Typically the slab and the waterproof membrane are common property (strata pays) and the tiles are lot property (owner pays). Get advice from your strata manager — bylaws vary and insurance may cover some situations.',
      },
    ],
    relatedServices: [
      { title: 'Concrete Cancer Treatment', href: '/services/concrete-repairs/concrete-cancer' },
      { title: 'Strata Building Repairs', href: '/services/remedial-building/strata-repairs' },
      { title: 'Spalling Concrete Repair', href: '/services/concrete-repairs/spalling-repair' },
      { title: 'Defect Rectification', href: '/services/building-restoration/defect-rectification' },
    ],
  },

  'tuckpointing-restoration': {
    name: 'Tuckpointing Restoration',
    slug: 'tuckpointing-restoration',
    metaTitle: 'Tuckpointing Restoration Sydney | Romans',
    metaDescription:
      'Tuckpointing restoration on Victorian and Federation terraces across Sydney. Colour-matched lime mortar with fine white fillet. 30 years of heritage work.',
    heroTagline:
      'The fine-line decorative pointing on Victorian terraces — when it is done well, it defines the facade.',
    quickAnswer:
      'Tuckpointing is a decorative heritage pointing technique on Victorian and Federation brickwork: dark pigmented mortar fills the joint flush to the brick, then a thin fillet of white lime putty is run through the centre to create the illusion of very fine, precise brickwork. Proper restoration requires lime-based mortar matched to the original, hand-tooled fillets, and correct width — anything else ruins the facade. Expect $10,000–$18,000 for a front facade of a single-width terrace.',
    whatItIs: [
      'Tuckpointing is one of the most beautiful masonry finishes ever developed, and also one of the most misunderstood. On higher-end Victorian and Federation terraces across Paddington, Newtown, Glebe, Leichhardt, Surry Hills and Darlinghurst, the original brickwork was tuckpointed — dark coloured mortar flush to the brick face, with a thin fillet of white lime putty run through the centre of each joint. The visual effect is the illusion of very precise, very fine brickwork.',
      'On most terraces, the original tuckpointing has weathered away. Worse, many have been repointed in recent decades by tradies who did not understand what tuckpointing was — resulting in plain cement pointing where the original decorative finish used to be. This destroys the character of the facade and devalues the property.',
      'Proper tuckpointing restoration brings the facade back to what it was. Matched coloured lime mortar filling the joints flush, matched white lime putty running through the centre as a fine fillet, tooled to the correct width and profile. Done properly, it lasts 40+ years and makes the building look the way it was designed to look.',
    ],
    signs: [
      'Front facade brickwork looks flat or featureless compared to neighbouring terraces',
      'Fine white lines visible in patches where old tuckpointing has worn through',
      'Modern grey cement pointing is smeared across the brick faces',
      'Original tuckpointed joints are crumbling or missing',
      'Mortar colour is a patchy mix of old and recent repairs',
      'Tuckpointing exists but fillet lines are broken, flaked or missing',
    ],
    causes: [
      'Age — original tuckpointing is often 100–150 years old',
      'Incorrect modern repointing without restoring the tuckpoint detail',
      'Weathering of soft lime mortars over decades',
      'Previous sandblasting or harsh cleaning that damaged the fillets',
      'Water ingress breaking down the mortar from behind',
    ],
    urgency: 'low',
    urgencyNote:
      'Tuckpointing restoration is almost never urgent — it is a heritage and aesthetic project. The underlying brickwork is usually still structurally sound. But for heritage-listed properties or homes in Conservation Areas, restoring tuckpointing maintains character and property value. Worth doing while other facade work is scheduled rather than on its own.',
    howWeFixIt: [
      {
        step: 'Assess original specification',
        detail:
          'We examine surviving original tuckpointing to determine the dark mortar colour, fillet width, and profile. Samples and test panels before committing to scope. For heritage properties we document this in methodology reports for council.',
      },
      {
        step: 'Rake out by hand',
        detail:
          'Old cement or damaged lime mortar is raked out by hand with chisels to 15–20mm depth. Never with angle grinders — they damage soft Victorian brick faces. Slow work but the only way to preserve the bricks.',
      },
      {
        step: 'Point with coloured lime mortar',
        detail:
          'Dark pigmented lime mortar pushed into the joints firmly and struck flush to the brick face. Colour matched to surviving original mortar.',
      },
      {
        step: 'Run the white lime putty fillet',
        detail:
          'A thin strip of white lime putty is run through the centre of each joint while the base mortar is still green. Tooled to the correct width — often 3mm, sometimes 2mm for finer work. This is the step that makes or breaks the job.',
      },
      {
        step: 'Slow cure and protect',
        detail:
          'Lime-based tuckpointing needs slow, damp curing. We cover the work and mist-spray for several days, protecting from direct sun and heavy rain. Rushed curing causes shrinkage cracking and failed fillets.',
      },
    ],
    costBand:
      'Front facade of a single-width terrace: $10,000 – $18,000. Full external tuckpointing $25,000 – $45,000. Premium pricing reflects specialist skill — not every mason can do it.',
    faqs: [
      {
        question: 'Does my terrace have tuckpointing?',
        answer:
          'Look closely at the joints. If you see (or used to see) a thin white line running through dark-coloured joints, yes — it is tuckpointed. Most Victorian-era middle and upper-class terraces in Paddington, Newtown, Glebe, Leichhardt, Surry Hills and similar suburbs originally were.',
      },
      {
        question: 'How is tuckpointing different from normal pointing?',
        answer:
          'Normal pointing fills the joint with one material — typically flush, struck, or raked. Tuckpointing uses two materials: a dark mortar fills the joint, then a fine white lime putty fillet is run through the centre. The white line creates the optical illusion of very fine brickwork. It is significantly more labour-intensive and specialised.',
      },
      {
        question: 'Can tuckpointing be done in stages?',
        answer:
          'Yes. Front facade first is common — that is what is visible. Sides and rear can follow in later years. If we use the same mix and techniques consistently, staged work looks cohesive.',
      },
      {
        question: 'Why does tuckpointing cost more than regular repointing?',
        answer:
          'Two-step process with higher skill requirement. The fillet work is slow, precise, and requires hands that have done it many times. Expect 2–3x the cost of regular lime repointing on the same building.',
      },
    ],
    relatedServices: [
      { title: 'Repointing & Brick Pointing', href: '/services/masonry/repointing' },
      { title: 'Heritage Masonry', href: '/services/heritage-restoration/heritage-masonry' },
      { title: 'Heritage Brick Repairs', href: '/services/heritage-restoration/heritage-brick-repairs' },
    ],
  },

  'sandstone-weathering': {
    name: 'Sandstone Weathering & Erosion',
    slug: 'sandstone-weathering',
    metaTitle: 'Sandstone Weathering Sydney | Romans Building Services',
    metaDescription:
      'Sandstone walls eroding, flaking or losing detail? Learn the causes and proper restoration for Sydney heritage sandstone. 30 years of heritage stone work.',
    heroTagline:
      'Sydney sandstone is beautiful but not indestructible — salt, water and poor repairs all wear it down over time.',
    quickAnswer:
      'Sandstone weathers through exposure to salt, water, wind and pollution over decades. Signs include flaking surfaces, loss of carved detail, pitting, and dark staining. Proper restoration means cleaning gently, consolidating weakened stone with breathable lime-based consolidants, replacing stone that is beyond saving with matched Sydney sandstone, and never using impermeable sealers that trap moisture. A good sandstone restoration lasts decades.',
    whatItIs: [
      'Sydney is one of the great sandstone cities — almost every heritage building around the CBD, The Rocks, Paddington, Woollahra, Mosman and beyond has significant sandstone. It is beautiful stone but it weathers. Salt in the air, rain, wind, pollution and ground moisture all slowly break it down over decades. On heritage buildings that have been standing 100+ years, weathering is often significant.',
      'The worst damage is usually to decorative carved detail — cornices, window surrounds, capitals, balustrades. Fine detail erodes faster than flat surfaces. Salt crystallisation inside the stone causes flaking (spalling) on coastal buildings. Past repairs with cement-based mortars or impermeable sealers accelerate damage because they trap moisture in the stone.',
      'Proper restoration is a combination of gentle cleaning, consolidation of weakened stone, replacement of stone beyond saving, and breathable protective finishes. Done well, weathered sandstone can be brought back to good structural condition and kept there for decades.',
    ],
    signs: [
      'Stone surface flaking or powdering — small pieces coming away',
      'Loss of carved detail on decorative elements',
      'Pitting or hollowing in the stone face',
      'Dark staining (black soot, biological growth, or salt bloom)',
      'Stone turning soft or crumbly where touched',
      'Cracks or fractures in individual stone blocks',
      'Mortar weathering faster than the stone (a sign of correct original spec)',
    ],
    causes: [
      'Normal weathering — rain, sun, wind over decades',
      'Salt crystallisation inside the stone (coastal exposure or rising damp)',
      'Pollution deposits (historic coal soot, modern traffic)',
      'Cement-based pointing trapping moisture in the stone',
      'Impermeable sealers applied in past repairs',
      'Ground moisture rising through the stone',
      'Freeze-thaw cycles (minor in Sydney but exists)',
    ],
    urgency: 'medium',
    urgencyNote:
      'Weathering is gradual but not self-limiting — it accelerates once the protective outer surface of the stone is lost. Fine carved detail, once gone, cannot be recovered without replacing the stone block. Structural sandstone failing is more urgent than cosmetic weathering of flat surfaces. Heritage buildings benefit from catching weathering early with consolidation rather than later with replacement.',
    howWeFixIt: [
      {
        step: 'Assess and clean',
        detail:
          'Careful cleaning with appropriate methods — never sandblasting, never harsh chemicals, never pressure washing at high pressure. Usually soft brush, low-pressure water, and occasionally poultices for stubborn staining. We document what we find as we go.',
      },
      {
        step: 'Consolidate weakened stone',
        detail:
          'Breathable lime-based or silicate consolidants penetrate weathered stone and strengthen it without changing appearance or trapping moisture. For significantly weakened stone this can extend life by decades without replacement.',
      },
      {
        step: 'Replace stone beyond saving',
        detail:
          'Individual stones that have lost structural integrity or critical detail are cut out and replaced with matched Sydney sandstone. Hand-carved detail restored where needed. New stone weathered to blend with surroundings.',
      },
      {
        step: 'Repoint with breathable lime mortar',
        detail:
          'Old cement mortar removed if present — it is damaging the stone. Repoint with traditional lime mortar matched to original colour and profile. Lime mortar protects the stone while letting it breathe.',
      },
      {
        step: 'Apply breathable protection',
        detail:
          'Where needed, a breathable silicate or mineral protective treatment. Never acrylic sealers or waterproofing coatings — they trap salt and accelerate damage. Done right, the stone is protected for decades without looking treated.',
      },
    ],
    costBand:
      'Depends heavily on scope. Cleaning and consolidation on a single facade $8,000 – $30,000. Significant replacement with carved detail $25,000 – $150,000+. Heritage projects priced per element.',
    faqs: [
      {
        question: 'Can you restore carved sandstone detail that is mostly gone?',
        answer:
          'Yes, for detail that still has enough profile to reference. We can hand-carve replacement elements matched to surviving sections. For detail entirely lost, we work with heritage architects or conservators to document appropriate replacement — either based on historical photos or matching surviving similar elements.',
      },
      {
        question: 'Should I seal my sandstone to stop weathering?',
        answer:
          'Not with modern waterproofing sealers — they trap moisture and salts inside the stone, accelerating damage. Breathable silicate or mineral treatments are the only appropriate option for sandstone protection. Most heritage conservators prefer no treatment at all unless actively needed.',
      },
      {
        question: 'How do you match Sydney sandstone?',
        answer:
          'Sydney sandstone is still quarried from Hawkesbury-area quarries. We source stone matched to grain, colour and texture of the original. For visible repairs we weather-match with appropriate patina so new stone blends with aged surrounding stone.',
      },
      {
        question: 'Is sandstone weathering a structural concern?',
        answer:
          'Usually not — it is cosmetic at first. But significant weathering of load-bearing sandstone (lintels, large structural blocks) can become structural. Part of the assessment is working out whether the damage is cosmetic or whether the stone is losing structural capacity.',
      },
    ],
    relatedServices: [
      { title: 'Stone Masonry Repairs', href: '/services/masonry/stone-masonry-repairs' },
      { title: 'Heritage Stone Restoration', href: '/services/heritage-restoration/heritage-stone' },
      { title: 'Traditional Stonework', href: '/services/heritage-restoration/traditional-stonework' },
    ],
  },

  'damaged-lintels': {
    name: 'Damaged Lintels Above Windows & Doors',
    slug: 'damaged-lintels',
    metaTitle: 'Damaged Lintels Sydney | Rusting Steel & Brick Cracking | Romans',
    metaDescription:
      'Rust stains above your window, cracks radiating from door corners? That is a failing lintel. Learn the signs, causes and proper replacement for Sydney homes.',
    heroTagline:
      'The horizontal beam above your window or door. When it fails, everything above it starts cracking.',
    quickAnswer:
      'Lintels are the horizontal beams that support brickwork above windows and doors. When steel lintels rust they expand up to 7x their original size, cracking the bricks above and eventually failing structurally. Signs include rust stains on brickwork, cracks radiating from window or door corners, and bulging or bowing brickwork above openings. Proper repair means temporarily propping the load, cutting out the old lintel, installing a new galvanised or stainless steel lintel, and rebuilding the brickwork.',
    whatItIs: [
      'A lintel is the horizontal beam that carries the weight of brickwork above a window or door opening. In Australian homes built from 1900 to around 1970, lintels were almost always mild steel — painted once and then forgotten. Steel rusts when exposed to moisture, and when embedded in brickwork it rusts slowly but continuously.',
      'When steel rusts, it expands up to seven times its original volume. That expansion cracks the bricks above the window, pushes the bricks out of line, and eventually causes structural failure. The classic signs are rust stains bleeding down the brickwork, cracks radiating from the corners of window and door openings, and bricks starting to bulge or come loose above the lintel.',
      'Lintel failure is common on Sydney Federation, Interwar and mid-century homes. The good news: it is a contained repair, not whole-house structural work. The bad news: it has to be done properly, with temporary propping, full lintel replacement, and brickwork rebuild. Quick patch jobs always come back.',
    ],
    signs: [
      'Rust stains bleeding down brickwork from above a window or door',
      'Cracks radiating from the corners of openings (often stair-step)',
      'Bricks loose, bulging, or bowing above windows',
      'Window or door no longer closing properly',
      'Visible rust on any exposed lintel ends',
      'Internal cracks in plaster above the opening',
      'Gaps opening between the lintel and the brickwork',
    ],
    causes: [
      'Steel lintel rusting — moisture reaches the steel through cracks, bad flashing, or masonry porosity',
      'Salt air accelerating corrosion (coastal suburbs)',
      'Failed or missing damp-proof course allowing moisture into the lintel',
      'Original construction without proper rust protection',
      'Direct water ingress from failed window sills or roof flashing above',
      'Age — 50+ year old mild steel lintels commonly fail on pre-1970 homes',
    ],
    urgency: 'high',
    urgencyNote:
      'A visibly failing lintel is a structural concern. Eventually the brickwork above the opening can fall — while you do not want to be standing under it when that happens, the more common problem is that once bricks start moving, the repair scope grows fast. Catch it when cracks first appear and the fix is contained. Leave it five years and the whole wall above the window may need rebuilding.',
    howWeFixIt: [
      {
        step: 'Assess and prop',
        detail:
          'We confirm the lintel is failing, check the extent of brick damage, and install temporary propping to support the load above. Propping stays in place throughout the work.',
      },
      {
        step: 'Remove damaged brickwork',
        detail:
          'Bricks above the lintel that are cracked, spalled or displaced come out carefully. We salvage what we can for reuse or replacement matching. Goal is clean access to remove the lintel.',
      },
      {
        step: 'Cut out the old lintel',
        detail:
          'The failed steel lintel is cut out and removed. The bearing points at each end are cleaned back to sound masonry.',
      },
      {
        step: 'Install new lintel',
        detail:
          'A new lintel — galvanised steel, stainless steel, or precast concrete depending on span and load — is installed with correct bearing at each end and proper DPC to prevent future rusting.',
      },
      {
        step: 'Rebuild brickwork',
        detail:
          'Matched bricks and lime mortar rebuild the damaged area. Replacement bricks sourced to match colour, size and texture. Pointing matched to surrounding mortar. Done right, the repair is invisible when finished.',
      },
    ],
    costBand:
      'Single lintel replacement typically $1,500 – $4,500 depending on span, access and brick matching requirements. Full facade of multiple failing lintels can run $8,000 – $20,000+.',
    faqs: [
      {
        question: 'Why is there rust running down my brickwork above the window?',
        answer:
          'The steel lintel above the window is rusting. Water has reached the steel — usually through a failed sill, cracked pointing, or general masonry porosity — and the rust is bleeding through to the surface. It means the lintel is deteriorating and needs attention.',
      },
      {
        question: 'Can you just paint over the rust to fix it?',
        answer:
          'No. The rust is inside the wall, on the lintel. Painting the surface does nothing. And because the steel is expanding as it rusts, cracking bricks from inside, surface treatment is pointless. The lintel has to come out and be replaced.',
      },
      {
        question: 'How long does a lintel replacement take?',
        answer:
          'Single lintel on a residential property: typically 2–4 days including propping, removal, installation and brick rebuild. Multiple lintels on the same facade can be done together, often 1–2 weeks.',
      },
      {
        question: 'Will the repair be visible?',
        answer:
          'Done properly, no. Matched brick, matched mortar, matched profile — the repair blends into the surrounding wall. On heritage work we take extra care to match aged brick colour and weathering.',
      },
    ],
    relatedServices: [
      { title: 'Structural Crack Repair', href: '/services/structural-repairs/structural-crack-repair' },
      { title: 'Load-Bearing Wall Repairs', href: '/services/structural-repairs/load-bearing-walls' },
      { title: 'Heritage Brick Repairs', href: '/services/heritage-restoration/heritage-brick-repairs' },
      { title: 'Building Reinforcement', href: '/services/structural-repairs/building-reinforcement' },
    ],
  },

  'cavity-wall-tie-failure': {
    name: 'Cavity Wall Tie Failure',
    slug: 'cavity-wall-tie-failure',
    metaTitle: 'Cavity Wall Tie Failure Sydney | Romans',
    metaDescription:
      'Horizontal cracks at regular intervals, bowing walls? Your cavity wall ties may be failing. Romans Building Services remedies tie failure across Sydney homes.',
    heroTagline:
      'The hidden steel ties holding two brick walls together rust and fail — most 1960s-80s brick veneer homes are affected.',
    quickAnswer:
      'Cavity wall ties are steel ties embedded in the mortar between the two leaves of a cavity brick wall, holding them together. In 1960s–80s Australian brick veneer homes they often corrode as the galvanising fails, and once they corrode they stop doing their job. Signs include horizontal cracks at regular spacing, bowing walls, and cracked mortar in horizontal joints. The fix is installing new stainless steel remedial wall ties — a proven, non-destructive repair.',
    whatItIs: [
      'Cavity wall construction has two leaves of brick with a small gap (cavity) between them, tied together by steel ties embedded in the mortar joints. The ties stop the two leaves from separating. They were standard construction for Australian brick veneer homes from the 1940s through to around 1990.',
      'The problem: the ties were galvanised mild steel, and the galvanising fails over decades. Once the galvanising is gone, the steel rusts — and once it rusts significantly, it stops doing its job. The two leaves of the wall are no longer held together properly. Over years, the outer leaf can start to bow outward, and the mortar joints where the ties sit crack horizontally at regular intervals.',
      'This is a widespread issue on Sydney homes built from 1950 to 1985. Most homes of that vintage will have some tie corrosion, and many have significant enough corrosion to need remedial wall ties installed. The fix is non-destructive — new stainless steel ties are installed through small holes drilled from outside, then the holes are repointed.',
    ],
    signs: [
      'Horizontal cracks in mortar joints at regular spacing (roughly 450–600mm apart)',
      'Outer brick leaf bowing or leaning outward',
      'Stair-step cracks radiating from window or door corners',
      'Bricks loose or moving in sections of the wall',
      'Rust stains at mortar joints (rare — usually hidden inside)',
      'Visible gap between internal and external walls at junctions',
      'Home was built between 1950 and 1985 (age bracket for affected construction)',
    ],
    causes: [
      'Original galvanising wearing out over 30+ years',
      'Moisture ingress through cracks, damp or failed flashing',
      'Salt air (coastal homes) accelerating corrosion',
      'Poor original construction — inadequate tie spacing or wrong tie type',
      'Thermal expansion over decades flexing the ties and breaking galvanising',
    ],
    urgency: 'medium',
    urgencyNote:
      'Cavity wall tie failure is rarely an emergency — it progresses slowly over years. But once the outer leaf starts bowing noticeably, the repair scope gets bigger and the risk of more serious structural failure grows. Homes in coastal suburbs or with visible tie corrosion warrant action sooner. For homes showing just hairline horizontal cracking, monitoring for change is reasonable.',
    howWeFixIt: [
      {
        step: 'Diagnose the failure pattern',
        detail:
          'We check the spacing of horizontal cracks, look for bowing with a straight edge, and sometimes open up a small section of mortar to inspect tie condition. Confirms whether the problem is tie failure or something else.',
      },
      {
        step: 'Calculate new tie layout',
        detail:
          'New remedial ties are specified in a grid pattern across the affected walls — typically 450mm vertical spacing and 600–900mm horizontal. More ties near corners and openings where stress concentrates.',
      },
      {
        step: 'Drill and install new ties',
        detail:
          'Small holes (10mm diameter) drilled through the outer leaf into the inner leaf, at the specified locations. Stainless steel helical remedial ties driven in to lock both leaves together. The ties bite into the masonry on both sides and do not need resin or mechanical fixings.',
      },
      {
        step: 'Seal and repoint',
        detail:
          'Tie heads are set back below the brick face and the small drill holes are repointed with matched mortar. Done carefully, the repair is practically invisible.',
      },
      {
        step: 'Monitor movement',
        detail:
          'For homes where the outer leaf had already bowed, we install monitors and review after 12 months to confirm movement has stopped.',
      },
    ],
    costBand:
      'Per tie: $45 – $90 installed. A typical home needs 100–300 ties. Total jobs usually $8,000 – $25,000 depending on home size, wall condition and access.',
    faqs: [
      {
        question: 'How do I know my cavity wall ties have failed?',
        answer:
          'Horizontal cracks in mortar joints at regular spacing (450–600mm) are the classic sign. Bowing of the outer leaf when checked with a straight edge is another. Your home also has to be from the right era — 1950s to 1980s brick veneer — to have this specific problem.',
      },
      {
        question: 'Is cavity wall tie failure dangerous?',
        answer:
          'Eventually, yes — if the outer leaf fully separates it can collapse. In practice this happens over decades of untreated decay. The reasonable approach is to fix the ties when signs appear rather than wait for catastrophic failure.',
      },
      {
        question: 'Will the new ties last?',
        answer:
          'Stainless steel remedial ties have effectively unlimited service life in Australian conditions. 50+ year warranties are standard. They will not rust and will not need replacement during the useful life of the building.',
      },
      {
        question: 'Will the repair damage my interior walls?',
        answer:
          'No — the repair is entirely external. Drilling is from outside only, so there is no interior work, no need to move furniture, and no internal disruption.',
      },
    ],
    relatedServices: [
      { title: 'Structural Crack Repair', href: '/services/structural-repairs/structural-crack-repair' },
      { title: 'Load-Bearing Wall Repairs', href: '/services/structural-repairs/load-bearing-walls' },
      { title: 'Building Reinforcement', href: '/services/structural-repairs/building-reinforcement' },
      { title: 'Repointing & Brick Pointing', href: '/services/masonry/repointing' },
    ],
  },
};

export function getProblem(slug: string): ProblemPageProps | undefined {
  return PROBLEMS[slug];
}

export const PROBLEM_SLUGS = Object.keys(PROBLEMS);

export const PROBLEMS_LIST = Object.values(PROBLEMS).map((p) => ({
  name: p.name,
  slug: p.slug,
  tagline: p.heroTagline,
}));
