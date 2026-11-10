// Building-era / heritage style pages.
// These target high-intent informational queries from owners of period
// homes — "federation home restoration sydney", "victorian terrace repointing",
// etc. Each page is hand-written long-form expertise, not templated.

export interface HeritageEraData {
  slug: string;
  name: string;
  era: string;
  metaTitle: string;
  metaDescription: string;
  heroTagline: string;
  intro: string[];
  characteristics: string[];
  commonIssues: Array<{ title: string; detail: string }>;
  ourApproach: string[];
  faqs: Array<{ question: string; answer: string }>;
  relatedServices: Array<{ title: string; href: string }>;
}

export const HERITAGE_ERAS: Record<string, HeritageEraData> = {
  "federation-home-restoration": {
    "slug": "federation-home-restoration",
    "name": "Federation Home Restoration",
    "era": "1890 – 1915",
    "metaTitle": "Federation Home Restoration Sydney | Romans Building Services",
    "metaDescription": "Federation home restoration in Sydney. Assessing decorative brickwork, tuckpointing, render and sandstone before planning compatible period-home repairs.",
    "heroTagline": "Care for Federation brickwork, render and detailing starts with the materials and condition of the individual home.",
    "intro": [
      "Federation houses often combine face brickwork, terracotta roofs, leadlight windows and decorative timber. Sydney examples include homes in Haberfield, Strathfield and the North Shore. The era is a useful starting point for understanding their character, but extensions and earlier repairs can make neighbouring houses very different restoration projects.",
      "Look for surviving evidence before choosing a finish: sheltered mortar joints, traces of tuckpointing, original render panels and intact joinery profiles. Neither the construction date nor a red brick colour identifies a mortar mix. Internal finishes can include plaster on masonry as well as lath-and-plaster work.",
      "A useful restoration scope separates maintenance, damaged fabric and proposed changes. Record what can stay, investigate moisture or movement, and check heritage requirements before stripping paint or replacing original details. Later alterations may also have significance; returning everything to an assumed original appearance is not automatically appropriate."
    ],
    "characteristics": [
      "Face brickwork, sometimes contrasted with lighter brick or rendered details",
      "Tuckpointing on some facades; surviving evidence should guide reinstatement",
      "Roughcast or smooth render panels in gables and porches",
      "Terracotta roof tiles, with patterns and later replacements varying by house",
      "Decorative chimneys, finials and gable ornaments",
      "Stone or rendered sills, plinths and steps",
      "Plaster finishes on masonry or timber lath, depending on the location",
      "Verandahs with decorative timber and tiled floors"
    ],
    "commonIssues": [
      {
        "title": "Painted-over tuckpointing",
        "detail": "Paint may conceal tuckpointing or earlier repairs, but removing it can also damage brick faces and historic finishes. Establish whether removal is appropriate, assess the paint for lead, and trial a small area using specialist advice. A trial may show that retaining the coating is the safer option."
      },
      {
        "title": "Failed cement repointing on lime walls",
        "detail": "Hard, poorly matched pointing can contribute to damage around softer bricks. Investigate moisture and salts as well as the mortar. Retain sound original joints and assess the risk of damaging brick edges during removal rather than specifying a full rake-out for every wall."
      },
      {
        "title": "Cracked or detached render",
        "detail": "Cracked or hollow render can reflect water entry, movement or loss of adhesion. Check the cause and whether sound original material can be retained. Specify the repair from the existing render and substrate, not an assumption that every Federation render is a pure lime mix."
      },
      {
        "title": "Rusted lintels and damp courses",
        "detail": "Cracks near openings can involve corroding metal lintels, but the support needs inspection before repair is selected. Damp at the base of a wall does not establish that its damp-proof course has failed. Check drainage, ground levels and leaks before choosing a damp treatment."
      },
      {
        "title": "Sandstone sill and step erosion",
        "detail": "Weathered sandstone sills and steps need assessment of water shedding, salt exposure and remaining sound stone. Some wear can be retained; local repair or replacement needs a conservation specification where deterioration affects use or stability. Cleaning trials should establish whether cleaning is needed and can be done without losing detail."
      }
    ],
    "ourApproach": [
      "Identify original fabric, later alterations and urgent defects during the site assessment",
      "Retain sound joints and details; agree repair samples before wider work",
      "Select brick, stone and mortar for compatibility as well as appearance",
      "Confirm the approval pathway and any need for a heritage specialist before work",
      "Plan access, dust controls and occupancy around the actual scope, including possible temporary relocation"
    ],
    "faqs": [
      {
        "question": "How long does a full Federation home exterior restoration take?",
        "answer": "There is no reliable duration based on the Federation label alone. Access, approvals, drying and curing requirements, hidden defects and material availability all affect the programme. Ask for a staged scope and an occupancy plan after inspection rather than assuming the house can remain occupied throughout."
      },
      {
        "question": "Can you match original mortar and brick colours?",
        "answer": "A close match may be possible, but samples are needed to assess colour, texture, joint profile and compatibility with the existing wall. Salvaged bricks also need condition checks. Ageing and weathering can leave a visible difference, so the agreed sample should set expectations before wider repairs."
      },
      {
        "question": "Do I need council approval to restore my Federation home?",
        "answer": "Check the property listing and proposed work with council and, where relevant, Heritage NSW before starting. Some work may qualify for an exemption, but its conditions and any record requirements must be met. Like-for-like work is not automatically exempt, and local planning requirements may also apply."
      },
      {
        "question": "Is it worth restoring or should we modernise?",
        "answer": "Consider the condition and significance of the surviving details alongside how you want to use the home. Targeted conservation can sit alongside carefully designed upgrades. A restoration proposal should explain what it retains and why; it cannot establish a resale premium or guarantee a financial return."
      }
    ],
    "relatedServices": [
      {
        "title": "Heritage Brick Repairs",
        "href": "/services/heritage-restoration/heritage-brick-repairs"
      },
      {
        "title": "Tuckpointing Restoration",
        "href": "/problems/tuckpointing-restoration"
      },
      {
        "title": "Heritage Masonry",
        "href": "/services/heritage-restoration/heritage-masonry"
      },
      {
        "title": "Heritage Restoration Services",
        "href": "/services/heritage-restoration"
      }
    ]
  },
  "victorian-terrace-restoration": {
    "slug": "victorian-terrace-restoration",
    "name": "Victorian Terrace Restoration",
    "era": "1840 – 1900",
    "metaTitle": "Victorian Terrace Restoration Sydney | Romans Building Services",
    "metaDescription": "Victorian terrace restoration across Sydney. Lime mortar repointing, tuckpointing, render repair and structural work in Paddington, Newtown and Surry Hills.",
    "heroTagline": "Restore Victorian terrace fabric with a repair plan that accounts for shared walls, moisture and surviving details.",
    "intro": [
      "Sydney Victorian terraces range from modest single-storey dwellings to larger houses with balconies and decorative facades. Brick, render, timber, sandstone and cast iron appear in different combinations. The date range covers varied construction, so a terrace in Paddington should not be assigned the same repair specification as another in Newtown simply because both are Victorian.",
      "Narrow access and adjoining buildings make repair planning particularly important. Party walls, rear additions, drainage changes and concealed supports need to be understood before masonry is opened up. Earlier work may be damaging, harmless or significant in its own right; its condition and impact matter more than its age alone.",
      "Begin with a record of cracks, damp areas, original finishes and previous repairs. A conservation-minded scope preserves useful evidence and sound fabric, then addresses causes of deterioration. It should also identify specialist advice and permissions needed for structural work, shared boundaries or changes to significant details."
    ],
    "characteristics": [
      "Brick masonry, often with lime-rich mortar, subject to inspection and sampling",
      "Tuckpointing on some exposed-brick facades",
      "Damp-proofing that may be absent, bridged or altered",
      "Rendered facades, sometimes lined to suggest stone blocks",
      "Cast iron balcony or verandah details on some terraces",
      "Sandstone steps, plinths or basement masonry",
      "Timber sash windows, including later repairs and replacements",
      "Plaster on masonry and lath-and-plaster ceilings, sometimes with decorative cornices"
    ],
    "commonIssues": [
      {
        "title": "Damp behind render",
        "detail": "Dense render or coatings can hinder drying, but damp may also come from leaks, ground levels or drainage. Identify the moisture source and assess adhesion before deciding whether to remove a render. Stripping it can damage the masonry underneath, so removal is not an automatic first step."
      },
      {
        "title": "Hard cement mortar repointing",
        "detail": "An incompatible hard mortar can damage softer masonry. The extent of replacement should follow condition and compatibility checks, with sound historic joints retained where possible. Trial removal is important because cutting out hard pointing may itself break brick edges."
      },
      {
        "title": "Low-level damp and salts",
        "detail": "A low-level stain or salt deposit is a reason to investigate, not proof of a failed damp-proof course. Some terraces have no original course; others have one bridged by render or raised ground. Diagnose moisture and salts before considering interventions such as chemical injection, which is not a universal cure."
      },
      {
        "title": "Cracking from settlement",
        "detail": "Cracks can relate to movement, altered openings, corroding supports or changes to drainage. Do not classify a crack as cosmetic from the age of the terrace. A structural engineer can determine the need for monitoring, further investigation or repair; unstable areas need prompt safety assessment."
      },
      {
        "title": "Lost or damaged original detailing",
        "detail": "Missing ironwork, worn steps and altered joinery should be documented before replacement is proposed. Use surviving details, drawings or photographs to establish a defensible pattern. Retaining and repairing an original element may preserve more of the terrace than replacing it with an approximate reproduction."
      }
    ],
    "ourApproach": [
      "Record significant fabric and assess mortar and render before specifying repairs",
      "Use limited test areas to assess removal risks and the proposed finish",
      "Plan party-wall interfaces, access and occupant protection before opening up",
      "Check council requirements and heritage advice for the actual scope",
      "Separate urgent safety work, necessary repairs and optional appearance changes"
    ],
    "faqs": [
      {
        "question": "What's the difference between repointing and tuckpointing?",
        "answer": "Repointing renews deteriorated mortar at the face of masonry joints. Tuckpointing is a decorative treatment that creates fine contrasting lines over a prepared joint. Not every Victorian terrace was tuckpointed, so surviving evidence should determine whether reinstating that finish is appropriate."
      },
      {
        "question": "My terrace has cement render over the original brick. Should we strip it?",
        "answer": "Not without an assessment first. Establish whether the render is significant, what is causing any damp and whether removal would damage the bricks. A small trial can inform the decision. Retaining sound render may be preferable to exposing a surface that was never intended to be visible."
      },
      {
        "question": "Can we run modern services through the walls during restoration?",
        "answer": "Services can sometimes be upgraded during restoration, but agree routes before chasing walls. Consider less intrusive routes and protect significant finishes. Structural masonry, party walls and fire separation require appropriate professional advice, and electrical and plumbing work belongs with appropriately licensed trades."
      },
      {
        "question": "How much does a Victorian terrace restoration cost?",
        "answer": "A useful estimate needs an inspected scope rather than a generic terrace price range. Access, scaffolding, shared-wall constraints, conservation requirements and hidden damage can change the cost substantially. Ask for exclusions, provisional items and how additional work would be agreed before it proceeds."
      }
    ],
    "relatedServices": [
      {
        "title": "Heritage Brick Repairs",
        "href": "/services/heritage-restoration/heritage-brick-repairs"
      },
      {
        "title": "Tuckpointing Restoration",
        "href": "/problems/tuckpointing-restoration"
      },
      {
        "title": "Repointing",
        "href": "/services/masonry/repointing"
      },
      {
        "title": "Heritage Restoration Services",
        "href": "/services/heritage-restoration"
      }
    ]
  },
  "colonial-sandstone-buildings": {
    "slug": "colonial-sandstone-buildings",
    "name": "Colonial Sandstone Building Restoration",
    "era": "1788 – 1880",
    "metaTitle": "Colonial Sandstone Restoration Sydney | Romans Building Services",
    "metaDescription": "Planning repairs to Sydney colonial sandstone buildings: stone condition, compatible mortar, moisture, cleaning trials and heritage requirements.",
    "heroTagline": "Preserve colonial sandstone through careful investigation, limited intervention and compatible repairs.",
    "intro": [
      "Sandstone is a defining material of many early Sydney buildings, including examples around The Rocks and Parramatta. Stone quality, quarry source, tooling and wall construction vary. A colonial date does not establish how a wall is bonded, which mortar it contains or what later work has changed.",
      "The surviving stone surface contains evidence of workmanship and weathering. Surface loss may involve salts, water, failing joints or corroding embedded metal, and these mechanisms need different responses. Making the surface look new is not a suitable conservation objective on its own.",
      "Before specifying repairs, assemble the available heritage documentation and a condition record. Identify unstable elements, moisture routes and significant details, then seek the conservation and structural advice needed for the scope. Cleaning, consolidation and replacement all need justification; none is a routine treatment for every old sandstone wall."
    ],
    "characteristics": [
      "Sandstone with varying grain, colour, bedding and durability",
      "Ashlar or rubble masonry, with wall bonding to be established on site",
      "Often lime-rich mortar joints, including later repointing in different mixes",
      "Tooled lintels, sills, quoins and string courses on some buildings",
      "Damp-proofing that may be absent or affected by later changes",
      "Embedded metal fixings or ties in some stonework",
      "Historic limewash or other surface finishes that may warrant retention"
    ],
    "commonIssues": [
      {
        "title": "Sugaring and contour scaling",
        "detail": "Grain loss and flaking can have several causes, including salt crystallisation and repeated wetting. Map the deterioration and investigate its source. Consolidants can change stone behaviour and require specialist assessment and trials; they should not be treated as a standard breathable cure for weathering."
      },
      {
        "title": "Failed cement repairs",
        "detail": "Hard or dense cement-rich patches can be incompatible with surrounding sandstone. Assess both their effect and the damage removal might cause. A conservator may recommend staged removal or retention in some locations, rather than automatically cutting out every later repair."
      },
      {
        "title": "Rusted internal iron",
        "detail": "Corroding cramps or ties can crack adjacent stone and may affect stability. Their structural role must be understood before opening up or removal. A repair design should address support, replacement or treatment of the metal and protection of surrounding significant fabric."
      },
      {
        "title": "Eroded mortar joints",
        "detail": "Mortar does not have a fixed service life determined by the building era. Exposure, joint condition and earlier repairs guide the need for repointing. Preserve sound joints and specify compatible replacement mortar only where deterioration or water entry warrants intervention."
      },
      {
        "title": "Inappropriate cleaning damage",
        "detail": "Abrasive cleaning and excessive water pressure can remove tooling and weaken surfaces. Chemical methods also carry risks, but suitability depends on the deposit and stone. A specialist should assess whether to clean at all and trial the least damaging effective method, including control of residues and runoff."
      }
    ],
    "ourApproach": [
      "Record stone condition and significant tooling before intervention",
      "Confirm current Heritage NSW and council requirements for the property",
      "Assess replacement stone for physical compatibility, bedding and appearance",
      "Retain sound original stone and justify any local indent or block replacement",
      "Specify joint repairs and trial areas to suit the existing masonry",
      "Decide whether cleaning is necessary before selecting and testing a method"
    ],
    "faqs": [
      {
        "question": "Can you work on Heritage-listed colonial buildings?",
        "answer": "Work on a listed colonial property needs a scope matched to its significance, condition and applicable approvals. Confirm the required conservation expertise and documentation before commissioning repairs. A listing alone does not identify the approval pathway or establish a contractor's experience on comparable buildings."
      },
      {
        "question": "How do you source matching sandstone for repairs?",
        "answer": "Stone selection considers mineral composition, porosity, bedding, durability, texture and colour, not just the historic quarry name. Availability and suitability need checking for the particular repair. Compare samples with the existing stone and agree the intended finish without promising an invisible or artificially aged match."
      },
      {
        "question": "What's a dutchman repair?",
        "answer": "A dutchman, or stone indent, replaces a localised damaged portion with a fitted stone piece. Whether it is appropriate, and how it is supported or fixed, depends on the element and surrounding material. It removes historic fabric, so a conservation assessment should justify it over retention or other repairs."
      },
      {
        "question": "Why is cement mortar bad for sandstone?",
        "answer": "An overly strong or impermeable mortar can contribute to deterioration of softer adjacent stone. Compatibility depends on the actual stone, mortar, exposure and moisture conditions, not simply whether a mix contains any cement. Existing materials and trial repairs should inform the specification."
      }
    ],
    "relatedServices": [
      {
        "title": "Heritage Stone Restoration",
        "href": "/services/heritage-restoration/heritage-stone"
      },
      {
        "title": "Heritage Masonry",
        "href": "/services/heritage-restoration/heritage-masonry"
      },
      {
        "title": "Sandstone Weathering",
        "href": "/problems/sandstone-weathering"
      },
      {
        "title": "Repointing",
        "href": "/services/masonry/repointing"
      }
    ]
  },
  "art-deco-building-restoration": {
    "slug": "art-deco-building-restoration",
    "name": "Art Deco Building Restoration",
    "era": "1925 – 1945",
    "metaTitle": "Art Deco Building Restoration Sydney | Romans Building Services",
    "metaDescription": "Art Deco building restoration in Sydney. Render and masonry repair on the Inter-war apartments, cinemas and commercial buildings that define Sydney's 1930s architecture.",
    "heroTagline": "Careful assessment helps preserve Art Deco geometry, finishes and structural fabric.",
    "intro": [
      "Sydney Art Deco buildings include apartments, shopfronts and cinemas, with examples in Potts Point, Elizabeth Bay and Bondi. Stepped forms, curved corners and geometric decoration give many their character. The style overlaps with other inter-war architecture and does not imply a single construction system.",
      "Cement-containing renders and reinforced concrete can occur alongside brick masonry, terrazzo, timber and metal windows. Lime may still be present in mortars and renders, and later patches may differ from the original work. Repair specifications need material assessment rather than a rule that all Victorian and Art Deco mixes are opposites.",
      "For a shared building, establish responsibility for the affected elements and the required owners corporation decisions before commissioning work. Record decorative details and investigate facade or balcony defects early. A conservation plan and an engineering repair design serve different purposes and may both be needed."
    ],
    "characteristics": [
      "Smooth or textured render with geometric detailing",
      "Decorative motifs such as chevrons and sunbursts",
      "Masonry walls with construction and later alterations to be verified",
      "Terrazzo in some entrances and stairs",
      "Reinforced concrete elements in some buildings",
      "Stepped parapets, curved corners and porthole windows",
      "Metal or timber windows, depending on the building",
      "Decorative metal balustrades and entrance details"
    ],
    "commonIssues": [
      {
        "title": "Cracked and detached render",
        "detail": "Cracking, hollow areas and detachment warrant assessment of water entry, adhesion and movement. Retain sound render and record decorative profiles before any removal. Loose material above an entrance or footpath needs prompt safety attention, not simply inclusion in a future repainting programme."
      },
      {
        "title": "Concrete cancer in structural elements",
        "detail": "Cracking or spalling near reinforcement may indicate corrosion, but its extent and cause need investigation. An engineer should assess structural adequacy and specify any testing, support and repair design. A patch-and-coating recipe is not enough where corrosion continues beyond the visibly damaged area."
      },
      {
        "title": "Loss of decorative detail",
        "detail": "Repeated painting and unsuitable patches can obscure geometric details. Record surviving profiles before repairs and distinguish missing material from sound historic work. Templates may help reproduce approved details, while samples establish the intended texture and edge definition."
      },
      {
        "title": "Steel window frame deterioration",
        "detail": "Corrosion can affect steel frames, anchors and surrounding masonry. Assess the condition of the frame and its fixings before deciding on repair or replacement. Historic glazing and coatings also need appropriate handling; masonry repairs should be coordinated with the window specification."
      },
      {
        "title": "Salt damage on coastal Art Deco",
        "detail": "Coastal exposure may introduce salts, but salt deposits on masonry and chloride-driven reinforcement corrosion need different investigations. Identify the affected material and moisture routes before selecting treatment. No generic salt-blocking coating can replace diagnosis or make a deteriorating balcony safe."
      }
    ],
    "ourApproach": [
      "Identify render composition, substrate and finish before choosing a repair system",
      "Record geometry from sound details and agree samples for missing sections",
      "Confirm owners corporation authority, access and resident communication needs",
      "Separate urgent safety measures from any later staged remediation programme",
      "Check heritage requirements and obtain structural advice for affected load-bearing elements"
    ],
    "faqs": [
      {
        "question": "Can you match Art Deco render finishes?",
        "answer": "A compatible finish can be developed through inspection and sample panels, but weathered texture and colour may not match exactly. Retain evidence of the original surface and establish whether it was painted. The finish should follow that evidence and the repair specification rather than a blanket rule against paint."
      },
      {
        "question": "My building has concrete cancer in the balconies. What's involved in fixing it?",
        "answer": "Keep people away from loose concrete or an apparently unsafe balcony and seek prompt professional advice. An engineer should establish the defect extent, structural implications and any access restrictions before a repair programme is chosen. Testing and the design determine whether local repairs are sufficient or wider remediation is needed."
      },
      {
        "question": "Do you work on heritage-listed Art Deco buildings?",
        "answer": "For a heritage-listed Art Deco building, confirm the approvals and specialist input required for the proposed work before appointing the team. Heritage documentation should be prepared by appropriately experienced practitioners, with engineering advice where needed. The requirements differ between a local listing and the State Heritage Register."
      },
      {
        "question": "How long does Art Deco restoration take?",
        "answer": "Timing depends on investigation, approvals, access, resident arrangements, curing and the repair scope. Whole-building work may need staging, but unsafe elements cannot simply wait for a convenient budget year. A programme should follow the assessment and distinguish urgent protection from later repairs."
      }
    ],
    "relatedServices": [
      {
        "title": "Building Restoration",
        "href": "/services/building-restoration"
      },
      {
        "title": "Facade Renovation",
        "href": "/services/building-restoration/facade-renovation"
      },
      {
        "title": "Concrete Cancer Treatment",
        "href": "/services/concrete-repairs/concrete-cancer"
      },
      {
        "title": "Strata Repairs",
        "href": "/services/remedial-building/strata-repairs"
      }
    ]
  },
  "inter-war-cottage-restoration": {
    "slug": "inter-war-cottage-restoration",
    "name": "Inter-war Cottage Restoration",
    "era": "1918 – 1945",
    "metaTitle": "Inter-war Cottage Restoration Sydney | Romans Building Services",
    "metaDescription": "Inter-war and California bungalow restoration across Sydney. Brick repointing, render repair, sandstone work and structural repairs on 1920s–1940s homes.",
    "heroTagline": "Repair inter-war cottages and California bungalows with attention to their individual brickwork, porches and finishes.",
    "intro": [
      "Inter-war housing includes California bungalows, Spanish Mission houses and Tudor-influenced designs. Sydney examples combine face brick, textured render, prominent roofs and decorative porch details in different ways. These styles provide clues to what to investigate, not a complete record of how the house was built.",
      "Original fabric may sit alongside extensions, replacement roofing and altered wall finishes. Record those changes before deciding which to keep. A later addition is not necessarily defective, and removing a coating or lining can expose fragile material or previously concealed problems.",
      "The inspection should establish wall construction, roof and porch condition, drainage and signs of movement. Include hazardous-material checks before disturbing older finishes or later additions: asbestos may be present in pre-1990 building work. Age and a solid appearance do not establish structural adequacy or remaining service life."
    ],
    "characteristics": [
      "Brick walls that may be solid or cavity construction; verify rather than infer",
      "Face brick with decorative banding or contrasting details on some homes",
      "Textured render, half-timbered detailing or distinctive porch finishes",
      "Pitched tiled roofs, sometimes with later replacement materials",
      "Timber porch and verandah elements",
      "Stone or concrete plinths and steps",
      "Mortars of varying lime and cement content, including later repairs"
    ],
    "commonIssues": [
      {
        "title": "Painted brick faces",
        "detail": "Paint removal is not guaranteed to recover an undamaged original brick face. Check whether the coating should be retained and assess it for lead before disturbance. A controlled specialist trial can reveal staining, friable bricks or earlier repairs that make stripping unsuitable."
      },
      {
        "title": "Cracked render panels",
        "detail": "Porch render can crack because of movement, moisture or a failing bond. Establish the cause before patching, and retain sound decorative material where possible. Record the texture and details so any justified replacement can be assessed against the original finish."
      },
      {
        "title": "Failed mortar joints",
        "detail": "Joint erosion and open gaps warrant inspection, but an inter-war date does not prescribe a mortar halfway between Victorian and modern mixes. Assess the existing binder, aggregate, masonry and exposure. Specify compatible repairs to deteriorated areas while retaining sound joints."
      },
      {
        "title": "Rusted lintels",
        "detail": "Cracks over openings may relate to corroding lintels or another movement mechanism. Establish the support arrangement and obtain structural advice before cutting out masonry or replacing a lintel. The repair may require designed temporary support and work to prevent further water entry."
      },
      {
        "title": "Foundation settlement",
        "detail": "Cracking can reflect soil movement, drainage issues, altered loads or other defects. Its cause and significance need investigation rather than an assumption that it is cosmetic. Underpinning is only one possible intervention and should follow engineering assessment, not simply the presence of active movement."
      }
    ],
    "ourApproach": [
      "Identify the existing mortar and masonry before selecting a compatible repair",
      "Assess replacement bricks for condition, dimensions, texture and appearance",
      "Check paint hazards and trial any proposed stripping before wider removal",
      "Record porch details and develop render samples for the relevant style",
      "Assess alterations on condition and significance rather than assuming they should be reversed"
    ],
    "faqs": [
      {
        "question": "Can you strip paint off our inter-war brick exterior?",
        "answer": "Paint stripping may be possible after a condition and hazard assessment, but it is not suitable for every wall. Test a limited area with a specialist method before committing. Lead-containing paint requires controlled handling, and the trial may show that retaining the coating is preferable."
      },
      {
        "question": "Our California bungalow has cracked render around the porch. What's the fix?",
        "answer": "First assess movement, moisture and the bond between render and the porch structure. Surface patching will not solve an underlying defect. Retain sound details, establish any structural repair needed and use a trial panel to agree the texture of compatible replacement material."
      },
      {
        "question": "How do you match decorative brick banding?",
        "answer": "Compare available bricks for size, colour, texture and condition, including whether salvaged pieces are suitable for the exposure. Preserve sound original banding where possible. Agree a sample before replacement, particularly where an exact match is unavailable or heritage requirements affect the choice."
      },
      {
        "question": "What's the cost range for inter-war cottage restoration?",
        "answer": "The cost depends on the inspected scope, access, material matching, approvals and concealed damage. Paint removal and extensive joint repairs can add substantial work, but a generic price band is not a dependable budget. Ask for a written scope with allowances and exclusions clearly identified."
      }
    ],
    "relatedServices": [
      {
        "title": "Heritage Brick Repairs",
        "href": "/services/heritage-restoration/heritage-brick-repairs"
      },
      {
        "title": "Repointing",
        "href": "/services/masonry/repointing"
      },
      {
        "title": "Building Restoration",
        "href": "/services/building-restoration"
      },
      {
        "title": "Cracked Brick Walls",
        "href": "/problems/cracked-brick-walls"
      }
    ]
  }
};

export const getHeritageEra = (slug: string): HeritageEraData | undefined => HERITAGE_ERAS[slug];

export const getAllHeritageEras = (): HeritageEraData[] => Object.values(HERITAGE_ERAS);
