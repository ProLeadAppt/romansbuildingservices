export type GalleryCategory =
  | 'heritage'
  | 'stonework'
  | 'structural'
  | 'concrete'
  | 'completed'
  | 'on-the-tools';

export interface GalleryImage {
  id: string;
  thumb: string;
  full: string;
  alt: string;
  category: GalleryCategory;
  featured: boolean;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'romansstone_1451642255_1152781246863726646_2394650725',
    thumb: '/gallery/thumbs/romansstone_1451642255_1152781246863726646_2394650725.webp',
    full: '/gallery/full/romansstone_1451642255_1152781246863726646_2394650725.webp',
    alt: 'Detailed sandstone carving work in progress',
    category: 'on-the-tools',
    featured: false,
  },

  // === Timestamp 1451942173 — Heritage ornamental carving ===
  {
    id: 'romansstone_1451942173_1155297143604075085_2394650725',
    thumb: '/gallery/thumbs/romansstone_1451942173_1155297143604075085_2394650725.webp',
    full: '/gallery/full/romansstone_1451942173_1155297143604075085_2394650725.webp',
    alt: 'Ornate heritage stone capital being restored in workshop',
    category: 'heritage',
    featured: false,
  },
  {
    id: 'romansstone_1451942270_1155297957273885284_2394650725',
    thumb: '/gallery/thumbs/romansstone_1451942270_1155297957273885284_2394650725.webp',
    full: '/gallery/full/romansstone_1451942270_1155297957273885284_2394650725.webp',
    alt: 'Decorative stone capital with ornamental carvings clamped for repair',
    category: 'heritage',
    featured: true,
  },

  // === Timestamp 1452322412 — Ancient masonry inspiration ===
  {
    id: 'romansstone_1452322412_1158486817214519324_2394650725',
    thumb: '/gallery/thumbs/romansstone_1452322412_1158486817214519324_2394650725.webp',
    full: '/gallery/full/romansstone_1452322412_1158486817214519324_2394650725.webp',
    alt: 'Ancient stone ruins showcasing traditional masonry techniques',
    category: 'heritage',
    featured: false,
  },

  // === Timestamp 1452415091 — Brick lintel structural work ===
  {
    id: 'romansstone_1452415091_1159264269511646168_2394650725',
    thumb: '/gallery/thumbs/romansstone_1452415091_1159264269511646168_2394650725.webp',
    full: '/gallery/full/romansstone_1452415091_1159264269511646168_2394650725.webp',
    alt: 'Worker installing steel lintel on brick facade',
    category: 'structural',
    featured: false,
  },

  // === Timestamp 1452669491 — Ancient ruins ===
  {
    id: 'romansstone_1452669491_1161398328954149042_2394650725',
    thumb: '/gallery/thumbs/romansstone_1452669491_1161398328954149042_2394650725.webp',
    full: '/gallery/full/romansstone_1452669491_1161398328954149042_2394650725.webp',
    alt: 'Historic stone and brick ruins showing traditional construction',
    category: 'heritage',
    featured: false,
  },

  // === Timestamp 1452750344 — Heritage sandstone ===
  {
    id: 'romansstone_1452750344_1162076569972988853_2394650725',
    thumb: '/gallery/thumbs/romansstone_1452750344_1162076569972988853_2394650725.webp',
    full: '/gallery/full/romansstone_1452750344_1162076569972988853_2394650725.webp',
    alt: 'Aged sandstone block wall requiring restoration',
    category: 'heritage',
    featured: false,
  },

  // === Timestamp 1452934847 — Sandstone block wall ===
  {
    id: 'romansstone_1452934847_1163624294656989668_2394650725',
    thumb: '/gallery/thumbs/romansstone_1452934847_1163624294656989668_2394650725.webp',
    full: '/gallery/full/romansstone_1452934847_1163624294656989668_2394650725.webp',
    alt: 'Heritage sandstone block wall with weathered patina',
    category: 'heritage',
    featured: false,
  },

  // === Timestamp 1453061971 — Sandstone blocks with chisel ===
  {
    id: 'romansstone_1453061971_1164690693789801198_2394650725',
    thumb: '/gallery/thumbs/romansstone_1453061971_1164690693789801198_2394650725.webp',
    full: '/gallery/full/romansstone_1453061971_1164690693789801198_2394650725.webp',
    alt: 'Sandstone blocks being hand-dressed with traditional tools',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1453101503 — Stone village heritage ===
  {
    id: 'romansstone_1453101503_1165022313365330508_2394650725',
    thumb: '/gallery/thumbs/romansstone_1453101503_1165022313365330508_2394650725.webp',
    full: '/gallery/full/romansstone_1453101503_1165022313365330508_2394650725.webp',
    alt: 'Traditional stone village buildings with heritage masonry',
    category: 'heritage',
    featured: false,
  },

  // === Timestamp 1453245919 — Massive stone block fitting ===
  {
    id: 'romansstone_1453245919_1166233759147317353_2394650725',
    thumb: '/gallery/thumbs/romansstone_1453245919_1166233759147317353_2394650725.webp',
    full: '/gallery/full/romansstone_1453245919_1166233759147317353_2394650725.webp',
    alt: 'Precision-fitted massive stone blocks in ancient wall',
    category: 'heritage',
    featured: false,
  },

  // === Timestamp 1453334412 — Sandstone garden edge ===
  {
    id: 'romansstone_1453334412_1166976093610793096_2394650725',
    thumb: '/gallery/thumbs/romansstone_1453334412_1166976093610793096_2394650725.webp',
    full: '/gallery/full/romansstone_1453334412_1166976093610793096_2394650725.webp',
    alt: 'Completed sandstone garden edge wall with hedge backdrop',
    category: 'completed',
    featured: false,
  },

  // === Timestamp 1456297826 ===
  {
    id: 'romansstone_1456297826_1191835010975095505_2394650725',
    thumb: '/gallery/thumbs/romansstone_1456297826_1191835010975095505_2394650725.webp',
    full: '/gallery/full/romansstone_1456297826_1191835010975095505_2394650725.webp',
    alt: 'Historic stone building facade with traditional craftsmanship',
    category: 'heritage',
    featured: false,
  },

  // === Timestamp 1466993917 — Church brick restoration ===
  {
    id: 'romansstone_1466993917_1281560327394079553_2394650725',
    thumb: '/gallery/thumbs/romansstone_1466993917_1281560327394079553_2394650725.webp',
    full: '/gallery/full/romansstone_1466993917_1281560327394079553_2394650725.webp',
    alt: 'Heritage church brick restoration with worker on-site',
    category: 'heritage',
    featured: true,
  },

  // === Timestamp 1479365790 ===
  {
    id: 'romansstone_1479365790_1385343119755398942_2394650725',
    thumb: '/gallery/thumbs/romansstone_1479365790_1385343119755398942_2394650725.webp',
    full: '/gallery/full/romansstone_1479365790_1385343119755398942_2394650725.webp',
    alt: 'Heritage building facade restoration in progress',
    category: 'heritage',
    featured: false,
  },

  // === Timestamp 1526899418 — Stonemason with mallet ===
  {
    id: 'romansstone_1526899418_1784084085817495016_2394650725',
    thumb: '/gallery/thumbs/romansstone_1526899418_1784084085817495016_2394650725.webp',
    full: '/gallery/full/romansstone_1526899418_1784084085817495016_2394650725.webp',
    alt: 'Minas chiselling sandstone with mallet on heritage wall',
    category: 'on-the-tools',
    featured: true,
  },

  // === Timestamp 1527892299 — Damp course and waterproofing ===
  {
    id: 'romansstone_1527892299_1792412982497913251_2394650725',
    thumb: '/gallery/thumbs/romansstone_1527892299_1792412982497913251_2394650725.webp',
    full: '/gallery/full/romansstone_1527892299_1792412982497913251_2394650725.webp',
    alt: 'Worker applying waterproofing membrane at base of building',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1527892301_1792412996607641255_2394650725',
    thumb: '/gallery/thumbs/romansstone_1527892301_1792412996607641255_2394650725.webp',
    full: '/gallery/full/romansstone_1527892301_1792412996607641255_2394650725.webp',
    alt: 'Damp-proofing installation along heritage building foundation',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1527892303_1792413009266007680_2394650725',
    thumb: '/gallery/thumbs/romansstone_1527892303_1792413009266007680_2394650725.webp',
    full: '/gallery/full/romansstone_1527892303_1792413009266007680_2394650725.webp',
    alt: 'Completed damp course remediation on brick wall',
    category: 'concrete',
    featured: false,
  },

  // === Timestamp 1528793200 — Sandstone block preparation ===
  {
    id: 'romansstone_1528793200_1799970282808993616_2394650725',
    thumb: '/gallery/thumbs/romansstone_1528793200_1799970282808993616_2394650725.webp',
    full: '/gallery/full/romansstone_1528793200_1799970282808993616_2394650725.webp',
    alt: 'Sandstone blocks laid along heritage wall for restoration',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1528793201_1799970294636969158_2394650725',
    thumb: '/gallery/thumbs/romansstone_1528793201_1799970294636969158_2394650725.webp',
    full: '/gallery/full/romansstone_1528793201_1799970294636969158_2394650725.webp',
    alt: 'Heritage sandstone wall restoration with new blocks',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1529916667 — Workers with jackhammers ===
  {
    id: 'romansstone_1529916667_1809394610973444947_2394650725',
    thumb: '/gallery/thumbs/romansstone_1529916667_1809394610973444947_2394650725.webp',
    full: '/gallery/full/romansstone_1529916667_1809394610973444947_2394650725.webp',
    alt: 'Two workers using power tools on concrete foundation',
    category: 'on-the-tools',
    featured: false,
  },
  {
    id: 'romansstone_1529916669_1809394625653605451_2394650725',
    thumb: '/gallery/thumbs/romansstone_1529916669_1809394625653605451_2394650725.webp',
    full: '/gallery/full/romansstone_1529916669_1809394625653605451_2394650725.webp',
    alt: 'Concrete demolition work in residential courtyard',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1529916671_1809394640694315848_2394650725',
    thumb: '/gallery/thumbs/romansstone_1529916671_1809394640694315848_2394650725.webp',
    full: '/gallery/full/romansstone_1529916671_1809394640694315848_2394650725.webp',
    alt: 'Foundation excavation and concrete removal in progress',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1529916673_1809394656590890685_2394650725',
    thumb: '/gallery/thumbs/romansstone_1529916673_1809394656590890685_2394650725.webp',
    full: '/gallery/full/romansstone_1529916673_1809394656590890685_2394650725.webp',
    alt: 'Structural concrete work at residential property',
    category: 'structural',
    featured: false,
  },

  // === Timestamp 1536315380 — Harbour seawall sandstone ===
  {
    id: 'romansstone_1536315380_1863070902587311392_2394650725',
    thumb: '/gallery/thumbs/romansstone_1536315380_1863070902587311392_2394650725.webp',
    full: '/gallery/full/romansstone_1536315380_1863070902587311392_2394650725.webp',
    alt: 'Sandstone seawall restoration on Sydney Harbour foreshore',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1536315382_1863070918425025456_2394650725',
    thumb: '/gallery/thumbs/romansstone_1536315382_1863070918425025456_2394650725.webp',
    full: '/gallery/full/romansstone_1536315382_1863070918425025456_2394650725.webp',
    alt: 'Heritage sandstone harbour wall being rebuilt',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1536315384_1863070933130342687_2394650725',
    thumb: '/gallery/thumbs/romansstone_1536315384_1863070933130342687_2394650725.webp',
    full: '/gallery/full/romansstone_1536315384_1863070933130342687_2394650725.webp',
    alt: 'Waterfront sandstone seawall construction in progress',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1536315385_1863070946510011309_2394650725',
    thumb: '/gallery/thumbs/romansstone_1536315385_1863070946510011309_2394650725.webp',
    full: '/gallery/full/romansstone_1536315385_1863070946510011309_2394650725.webp',
    alt: 'Harbour seawall sandstone blocks being fitted',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1536315387_1863070960485422114_2394650725',
    thumb: '/gallery/thumbs/romansstone_1536315387_1863070960485422114_2394650725.webp',
    full: '/gallery/full/romansstone_1536315387_1863070960485422114_2394650725.webp',
    alt: 'Completed section of harbour sandstone seawall',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1545378343 — Sandstone retaining wall ===
  {
    id: 'romansstone_1545378343_1939096543274841875_2394650725',
    thumb: '/gallery/thumbs/romansstone_1545378343_1939096543274841875_2394650725.webp',
    full: '/gallery/full/romansstone_1545378343_1939096543274841875_2394650725.webp',
    alt: 'New sandstone retaining wall with garden landscaping',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1545378352_1939096625852427775_2394650725',
    thumb: '/gallery/thumbs/romansstone_1545378352_1939096625852427775_2394650725.webp',
    full: '/gallery/full/romansstone_1545378352_1939096625852427775_2394650725.webp',
    alt: 'Sandstone block retaining wall in garden setting',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1545378354_1939096636187095177_2394650725',
    thumb: '/gallery/thumbs/romansstone_1545378354_1939096636187095177_2394650725.webp',
    full: '/gallery/full/romansstone_1545378354_1939096636187095177_2394650725.webp',
    alt: 'Completed sandstone retaining wall along garden bed',
    category: 'completed',
    featured: false,
  },

  // === Timestamp 1545465691 — Sandstone steps bushland ===
  {
    id: 'romansstone_1545465691_1939829271515579573_2394650725',
    thumb: '/gallery/thumbs/romansstone_1545465691_1939829271515579573_2394650725.webp',
    full: '/gallery/full/romansstone_1545465691_1939829271515579573_2394650725.webp',
    alt: 'Rustic sandstone steps winding through bushland garden',
    category: 'stonework',
    featured: true,
  },
  {
    id: 'romansstone_1545465692_1939829280407301775_2394650725',
    thumb: '/gallery/thumbs/romansstone_1545465692_1939829280407301775_2394650725.webp',
    full: '/gallery/full/romansstone_1545465692_1939829280407301775_2394650725.webp',
    alt: 'Natural sandstone garden steps with stone retaining walls',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1545465692_1939829282982638930_2394650725',
    thumb: '/gallery/thumbs/romansstone_1545465692_1939829282982638930_2394650725.webp',
    full: '/gallery/full/romansstone_1545465692_1939829282982638930_2394650725.webp',
    alt: 'Sandstone stairway construction through native garden',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1545465692_1939829283804890313_2394650725',
    thumb: '/gallery/thumbs/romansstone_1545465692_1939829283804890313_2394650725.webp',
    full: '/gallery/full/romansstone_1545465692_1939829283804890313_2394650725.webp',
    alt: 'Finished sandstone steps with boulder retaining edges',
    category: 'completed',
    featured: false,
  },

  // === Timestamp 1568583636 — Stonemason with mallet on wall ===
  {
    id: 'romansstone_1568583636_2133756652208586791_2394650725',
    thumb: '/gallery/thumbs/romansstone_1568583636_2133756652208586791_2394650725.webp',
    full: '/gallery/full/romansstone_1568583636_2133756652208586791_2394650725.webp',
    alt: 'Minas shaping sandstone with mallet and chisel on-site',
    category: 'on-the-tools',
    featured: true,
  },

  // === Timestamp 1568838386 — Church brickwork ===
  {
    id: 'romansstone_1568838386_2135893652470649771_2394650725',
    thumb: '/gallery/thumbs/romansstone_1568838386_2135893652470649771_2394650725.webp',
    full: '/gallery/full/romansstone_1568838386_2135893652470649771_2394650725.webp',
    alt: 'Heritage church brick restoration with cement mixer',
    category: 'heritage',
    featured: false,
  },

  // === Timestamp 1569020025 — Ornamental stone carving ===
  {
    id: 'romansstone_1569020025_2137417347508777039_2394650725',
    thumb: '/gallery/thumbs/romansstone_1569020025_2137417347508777039_2394650725.webp',
    full: '/gallery/full/romansstone_1569020025_2137417347508777039_2394650725.webp',
    alt: 'Ornate heritage stone capital under restoration with clamps',
    category: 'heritage',
    featured: false,
  },
  {
    id: 'romansstone_1569020025_2137417347517283657_2394650725',
    thumb: '/gallery/thumbs/romansstone_1569020025_2137417347517283657_2394650725.webp',
    full: '/gallery/full/romansstone_1569020025_2137417347517283657_2394650725.webp',
    alt: 'Detailed heritage stone carving restoration in workshop',
    category: 'heritage',
    featured: false,
  },

  // === Timestamp 1569273163 — Lintel installation ===
  {
    id: 'romansstone_1569273163_2139540821744323162_2394650725',
    thumb: '/gallery/thumbs/romansstone_1569273163_2139540821744323162_2394650725.webp',
    full: '/gallery/full/romansstone_1569273163_2139540821744323162_2394650725.webp',
    alt: 'Steel lintel installation above brick wall opening',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1569273163_2139540821752764425_2394650725',
    thumb: '/gallery/thumbs/romansstone_1569273163_2139540821752764425_2394650725.webp',
    full: '/gallery/full/romansstone_1569273163_2139540821752764425_2394650725.webp',
    alt: 'Brick wall structural opening with new lintel support',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1569273163_2139540821761096050_2394650725',
    thumb: '/gallery/thumbs/romansstone_1569273163_2139540821761096050_2394650725.webp',
    full: '/gallery/full/romansstone_1569273163_2139540821761096050_2394650725.webp',
    alt: 'Structural lintel work on brick facade in progress',
    category: 'structural',
    featured: false,
  },

  // === Timestamp 1569447376 — Worker on brick wall ===
  {
    id: 'romansstone_1569447376_2141002233607921479_2394650725',
    thumb: '/gallery/thumbs/romansstone_1569447376_2141002233607921479_2394650725.webp',
    full: '/gallery/full/romansstone_1569447376_2141002233607921479_2394650725.webp',
    alt: 'Worker installing steel beam above brick wall opening',
    category: 'on-the-tools',
    featured: false,
  },
  {
    id: 'romansstone_1569447376_2141002233624798310_2394650725',
    thumb: '/gallery/thumbs/romansstone_1569447376_2141002233624798310_2394650725.webp',
    full: '/gallery/full/romansstone_1569447376_2141002233624798310_2394650725.webp',
    alt: 'Bricklayer working on structural opening in brick facade',
    category: 'on-the-tools',
    featured: false,
  },

  // === Timestamp 1569789894 — Waterfront sandstone and waterproofing ===
  {
    id: 'romansstone_1569789894_2143875479596473212_2394650725',
    thumb: '/gallery/thumbs/romansstone_1569789894_2143875479596473212_2394650725.webp',
    full: '/gallery/full/romansstone_1569789894_2143875479596473212_2394650725.webp',
    alt: 'Worker applying waterproofing at base of heritage building',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1569789894_2143875479613247828_2394650725',
    thumb: '/gallery/thumbs/romansstone_1569789894_2143875479613247828_2394650725.webp',
    full: '/gallery/full/romansstone_1569789894_2143875479613247828_2394650725.webp',
    alt: 'Damp course treatment on heritage sandstone building',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1569789894_2143875479613416787_2394650725',
    thumb: '/gallery/thumbs/romansstone_1569789894_2143875479613416787_2394650725.webp',
    full: '/gallery/full/romansstone_1569789894_2143875479613416787_2394650725.webp',
    alt: 'Waterproofing membrane installation at building base',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1569789894_2143875479630097282_2394650725',
    thumb: '/gallery/thumbs/romansstone_1569789894_2143875479630097282_2394650725.webp',
    full: '/gallery/full/romansstone_1569789894_2143875479630097282_2394650725.webp',
    alt: 'Foundation waterproofing remediation on sandstone building',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1569789894_2143875479638595836_2394650725',
    thumb: '/gallery/thumbs/romansstone_1569789894_2143875479638595836_2394650725.webp',
    full: '/gallery/full/romansstone_1569789894_2143875479638595836_2394650725.webp',
    alt: 'Two workers using jackhammers on concrete foundation',
    category: 'on-the-tools',
    featured: false,
  },
  {
    id: 'romansstone_1569789894_2143875479646844172_2394650725',
    thumb: '/gallery/thumbs/romansstone_1569789894_2143875479646844172_2394650725.webp',
    full: '/gallery/full/romansstone_1569789894_2143875479646844172_2394650725.webp',
    alt: 'Concrete foundation demolition and remediation work',
    category: 'concrete',
    featured: false,
  },

  // === Timestamp 1569835443 — Sandstone steps waterfront ===
  {
    id: 'romansstone_1569835443_2144257572780593152_2394650725',
    thumb: '/gallery/thumbs/romansstone_1569835443_2144257572780593152_2394650725.webp',
    full: '/gallery/full/romansstone_1569835443_2144257572780593152_2394650725.webp',
    alt: 'Sandstone block paving along heritage waterfront walkway',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1569835443_2144257572788891656_2394650725',
    thumb: '/gallery/thumbs/romansstone_1569835443_2144257572788891656_2394650725.webp',
    full: '/gallery/full/romansstone_1569835443_2144257572788891656_2394650725.webp',
    alt: 'Heritage sandstone waterfront paving restoration',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1569835443_2144257572797370890_2394650725',
    thumb: '/gallery/thumbs/romansstone_1569835443_2144257572797370890_2394650725.webp',
    full: '/gallery/full/romansstone_1569835443_2144257572797370890_2394650725.webp',
    alt: 'Waterfront sandstone block steps being laid',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1569835443_2144257572805770809_2394650725',
    thumb: '/gallery/thumbs/romansstone_1569835443_2144257572805770809_2394650725.webp',
    full: '/gallery/full/romansstone_1569835443_2144257572805770809_2394650725.webp',
    alt: 'Completed sandstone paving at harbour foreshore',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1569891668 — Stonemason at harbour wall ===
  {
    id: 'romansstone_1569891668_2144729222206594691_2394650725',
    thumb: '/gallery/thumbs/romansstone_1569891668_2144729222206594691_2394650725.webp',
    full: '/gallery/full/romansstone_1569891668_2144729222206594691_2394650725.webp',
    alt: 'Stonemason repointing harbour sandstone seawall',
    category: 'on-the-tools',
    featured: true,
  },
  {
    id: 'romansstone_1569891668_2144729222223364117_2394650725',
    thumb: '/gallery/thumbs/romansstone_1569891668_2144729222223364117_2394650725.webp',
    full: '/gallery/full/romansstone_1569891668_2144729222223364117_2394650725.webp',
    alt: 'Black and white photo of stonemason working on harbour wall',
    category: 'on-the-tools',
    featured: false,
  },

  // === Timestamp 1570002705 — Foundation excavation ===
  {
    id: 'romansstone_1570002705_2145660669121556728_2394650725',
    thumb: '/gallery/thumbs/romansstone_1570002705_2145660669121556728_2394650725.webp',
    full: '/gallery/full/romansstone_1570002705_2145660669121556728_2394650725.webp',
    alt: 'Outdoor patio area with foundation preparation in progress',
    category: 'structural',
    featured: false,
  },

  // === Timestamp 1570068777 — Stone fireplace cladding ===
  {
    id: 'romansstone_1570068777_2146214919442646072_2394650725',
    thumb: '/gallery/thumbs/romansstone_1570068777_2146214919442646072_2394650725.webp',
    full: '/gallery/full/romansstone_1570068777_2146214919442646072_2394650725.webp',
    alt: 'Natural stone fireplace surround under construction',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1570068777_2146214919459364501_2394650725',
    thumb: '/gallery/thumbs/romansstone_1570068777_2146214919459364501_2394650725.webp',
    full: '/gallery/full/romansstone_1570068777_2146214919459364501_2394650725.webp',
    alt: 'Stone cladding being applied to interior fireplace wall',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1570068777_2146214919459516884_2394650725',
    thumb: '/gallery/thumbs/romansstone_1570068777_2146214919459516884_2394650725.webp',
    full: '/gallery/full/romansstone_1570068777_2146214919459516884_2394650725.webp',
    alt: 'Interior stone fireplace surround nearing completion',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1570068777_2146214919467931222_2394650725',
    thumb: '/gallery/thumbs/romansstone_1570068777_2146214919467931222_2394650725.webp',
    full: '/gallery/full/romansstone_1570068777_2146214919467931222_2394650725.webp',
    alt: 'Stone veneer fireplace with timber mantel in new build',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1570136836 — Stone fireplace installation ===
  {
    id: 'romansstone_1570136836_2146785843153888377_2394650725',
    thumb: '/gallery/thumbs/romansstone_1570136836_2146785843153888377_2394650725.webp',
    full: '/gallery/full/romansstone_1570136836_2146785843153888377_2394650725.webp',
    alt: 'Minas building natural stone fireplace surround on-site',
    category: 'on-the-tools',
    featured: false,
  },

  // === Timestamp 1570507975 — Foundation and brick exterior ===
  {
    id: 'romansstone_1570507975_2149899178812541490_2394650725',
    thumb: '/gallery/thumbs/romansstone_1570507975_2149899178812541490_2394650725.webp',
    full: '/gallery/full/romansstone_1570507975_2149899178812541490_2394650725.webp',
    alt: 'Residential brick home with foundation excavation underway',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1570507975_2149899178829383985_2394650725',
    thumb: '/gallery/thumbs/romansstone_1570507975_2149899178829383985_2394650725.webp',
    full: '/gallery/full/romansstone_1570507975_2149899178829383985_2394650725.webp',
    alt: 'Foundation repair excavation beside residential property',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1570507975_2149899178837680326_2394650725',
    thumb: '/gallery/thumbs/romansstone_1570507975_2149899178837680326_2394650725.webp',
    full: '/gallery/full/romansstone_1570507975_2149899178837680326_2394650725.webp',
    alt: 'Underpinning work at brick residential home',
    category: 'structural',
    featured: false,
  },

  // === Timestamp 1570596374 — Block wall construction site ===
  {
    id: 'romansstone_1570596374_2150640720871229474_2394650725',
    thumb: '/gallery/thumbs/romansstone_1570596374_2150640720871229474_2394650725.webp',
    full: '/gallery/full/romansstone_1570596374_2150640720871229474_2394650725.webp',
    alt: 'Construction site with concrete block wall and equipment',
    category: 'on-the-tools',
    featured: false,
  },
  {
    id: 'romansstone_1570596374_2150640720888191532_2394650725',
    thumb: '/gallery/thumbs/romansstone_1570596374_2150640720888191532_2394650725.webp',
    full: '/gallery/full/romansstone_1570596374_2150640720888191532_2394650725.webp',
    alt: 'Block wall construction with cement mixer on urban site',
    category: 'on-the-tools',
    featured: false,
  },
  {
    id: 'romansstone_1570596374_2150640721181721715_2394650725',
    thumb: '/gallery/thumbs/romansstone_1570596374_2150640721181721715_2394650725.webp',
    full: '/gallery/full/romansstone_1570596374_2150640721181721715_2394650725.webp',
    alt: 'Urban construction site with block retaining wall',
    category: 'structural',
    featured: false,
  },

  // === Timestamp 1570650695 — Brick wall repair ===
  {
    id: 'romansstone_1570650695_2151096400518394139_2394650725',
    thumb: '/gallery/thumbs/romansstone_1570650695_2151096400518394139_2394650725.webp',
    full: '/gallery/full/romansstone_1570650695_2151096400518394139_2394650725.webp',
    alt: 'Worker levelling bricks on heritage wall repair',
    category: 'on-the-tools',
    featured: false,
  },

  // === Timestamp 1571172170 — Stonemason heritage sandstone ===
  {
    id: 'romansstone_1571172170_2155470851175603207_2394650725',
    thumb: '/gallery/thumbs/romansstone_1571172170_2155470851175603207_2394650725.webp',
    full: '/gallery/full/romansstone_1571172170_2155470851175603207_2394650725.webp',
    alt: 'Stonemason working on heritage sandstone building facade',
    category: 'on-the-tools',
    featured: false,
  },

  // === Timestamp 1571366258 — Sandstone seawall harbour ===
  {
    id: 'romansstone_1571366258_2157098980180543528_2394650725',
    thumb: '/gallery/thumbs/romansstone_1571366258_2157098980180543528_2394650725.webp',
    full: '/gallery/full/romansstone_1571366258_2157098980180543528_2394650725.webp',
    alt: 'Sandstone seawall with harbour and boats in background',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1571366258_2157098980189015094_2394650725',
    thumb: '/gallery/thumbs/romansstone_1571366258_2157098980189015094_2394650725.webp',
    full: '/gallery/full/romansstone_1571366258_2157098980189015094_2394650725.webp',
    alt: 'Heritage sandstone seawall blocks placed at waterfront',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1571366258_2157098980205706843_2394650725',
    thumb: '/gallery/thumbs/romansstone_1571366258_2157098980205706843_2394650725.webp',
    full: '/gallery/full/romansstone_1571366258_2157098980205706843_2394650725.webp',
    alt: 'Waterfront sandstone wall restoration near wharf',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1571366258_2157098980214218230_2394650725',
    thumb: '/gallery/thumbs/romansstone_1571366258_2157098980214218230_2394650725.webp',
    full: '/gallery/full/romansstone_1571366258_2157098980214218230_2394650725.webp',
    alt: 'Harbour sandstone seawall with jetty in background',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1571366258_2157098980214302698_2394650725',
    thumb: '/gallery/thumbs/romansstone_1571366258_2157098980214302698_2394650725.webp',
    full: '/gallery/full/romansstone_1571366258_2157098980214302698_2394650725.webp',
    alt: 'Completed sandstone seawall section at harbour foreshore',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1571599727 — Completed sandstone garden wall ===
  {
    id: 'romansstone_1571599727_2159057455018301350_2394650725',
    thumb: '/gallery/thumbs/romansstone_1571599727_2159057455018301350_2394650725.webp',
    full: '/gallery/full/romansstone_1571599727_2159057455018301350_2394650725.webp',
    alt: 'Finished sandstone garden wall with landscaped hedge',
    category: 'completed',
    featured: true,
  },
  {
    id: 'romansstone_1571599727_2159057455026612272_2394650725',
    thumb: '/gallery/thumbs/romansstone_1571599727_2159057455026612272_2394650725.webp',
    full: '/gallery/full/romansstone_1571599727_2159057455026612272_2394650725.webp',
    alt: 'Sandstone retaining wall with manicured lawn and hedges',
    category: 'completed',
    featured: false,
  },
  {
    id: 'romansstone_1571599727_2159057455035078564_2394650725',
    thumb: '/gallery/thumbs/romansstone_1571599727_2159057455035078564_2394650725.webp',
    full: '/gallery/full/romansstone_1571599727_2159057455035078564_2394650725.webp',
    alt: 'Completed sandstone block garden edge with paving',
    category: 'completed',
    featured: false,
  },

  // === Timestamp 1571692826 — Sandstone steps bushland ===
  {
    id: 'romansstone_1571692826_2159838430010564709_2394650725',
    thumb: '/gallery/thumbs/romansstone_1571692826_2159838430010564709_2394650725.webp',
    full: '/gallery/full/romansstone_1571692826_2159838430010564709_2394650725.webp',
    alt: 'Natural sandstone steps through bushland garden setting',
    category: 'completed',
    featured: true,
  },

  // === Timestamp 1571801227 — Sandstone harbour wall ===
  {
    id: 'romansstone_1571801227_2160747763900813654_2394650725',
    thumb: '/gallery/thumbs/romansstone_1571801227_2160747763900813654_2394650725.webp',
    full: '/gallery/full/romansstone_1571801227_2160747763900813654_2394650725.webp',
    alt: 'Sandstone block wall overlooking Sydney Harbour',
    category: 'stonework',
    featured: true,
  },
  {
    id: 'romansstone_1571801227_2160747763917553644_2394650725',
    thumb: '/gallery/thumbs/romansstone_1571801227_2160747763917553644_2394650725.webp',
    full: '/gallery/full/romansstone_1571801227_2160747763917553644_2394650725.webp',
    alt: 'Heritage sandstone harbour wall with water views',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1571801227_2160747763925838550_2394650725',
    thumb: '/gallery/thumbs/romansstone_1571801227_2160747763925838550_2394650725.webp',
    full: '/gallery/full/romansstone_1571801227_2160747763925838550_2394650725.webp',
    alt: 'Sandstone seawall construction at harbourside location',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1571801227_2160747763934167790_2394650725',
    thumb: '/gallery/thumbs/romansstone_1571801227_2160747763934167790_2394650725.webp',
    full: '/gallery/full/romansstone_1571801227_2160747763934167790_2394650725.webp',
    alt: 'Harbour sandstone wall with dressed block finish',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1571801227_2160747763934248945_2394650725',
    thumb: '/gallery/thumbs/romansstone_1571801227_2160747763934248945_2394650725.webp',
    full: '/gallery/full/romansstone_1571801227_2160747763934248945_2394650725.webp',
    alt: 'Completed sandstone wall section at waterfront property',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1571859061 — Garden pathway ===
  {
    id: 'romansstone_1571859061_2161232914212472251_2394650725',
    thumb: '/gallery/thumbs/romansstone_1571859061_2161232914212472251_2394650725.webp',
    full: '/gallery/full/romansstone_1571859061_2161232914212472251_2394650725.webp',
    alt: 'Completed sandstone pathway through lush garden setting',
    category: 'completed',
    featured: false,
  },
  {
    id: 'romansstone_1571859061_2161232914229231761_2394650725',
    thumb: '/gallery/thumbs/romansstone_1571859061_2161232914229231761_2394650725.webp',
    full: '/gallery/full/romansstone_1571859061_2161232914229231761_2394650725.webp',
    alt: 'Garden path with sandstone edging and green surrounds',
    category: 'completed',
    featured: false,
  },
  {
    id: 'romansstone_1571859061_2161232914229279999_2394650725',
    thumb: '/gallery/thumbs/romansstone_1571859061_2161232914229279999_2394650725.webp',
    full: '/gallery/full/romansstone_1571859061_2161232914229279999_2394650725.webp',
    alt: 'Finished stone garden walkway with landscaping',
    category: 'completed',
    featured: false,
  },
  {
    id: 'romansstone_1571859061_2161232914237773142_2394650725',
    thumb: '/gallery/thumbs/romansstone_1571859061_2161232914237773142_2394650725.webp',
    full: '/gallery/full/romansstone_1571859061_2161232914237773142_2394650725.webp',
    alt: 'Stone-edged garden pathway in residential property',
    category: 'completed',
    featured: false,
  },

  // === Timestamp 1572296073 — Stonemason building wall ===
  {
    id: 'romansstone_1572296073_2164898831773532747_2394650725',
    thumb: '/gallery/thumbs/romansstone_1572296073_2164898831773532747_2394650725.webp',
    full: '/gallery/full/romansstone_1572296073_2164898831773532747_2394650725.webp',
    alt: 'Stonemason laying sandstone blocks for retaining wall',
    category: 'on-the-tools',
    featured: false,
  },

  // === Timestamp 1572378831 — Hand chiselling sandstone ===
  {
    id: 'romansstone_1572378831_2165593056404182319_2394650725',
    thumb: '/gallery/thumbs/romansstone_1572378831_2165593056404182319_2394650725.webp',
    full: '/gallery/full/romansstone_1572378831_2165593056404182319_2394650725.webp',
    alt: 'Craftsman hand-chiselling sandstone block with mallet',
    category: 'on-the-tools',
    featured: true,
  },
  {
    id: 'romansstone_1572378831_2165593056420904228_2394650725',
    thumb: '/gallery/thumbs/romansstone_1572378831_2165593056420904228_2394650725.webp',
    full: '/gallery/full/romansstone_1572378831_2165593056420904228_2394650725.webp',
    alt: 'Close-up of traditional stone dressing with chisel and mallet',
    category: 'on-the-tools',
    featured: false,
  },
  {
    id: 'romansstone_1572378831_2165593056429410753_2394650725',
    thumb: '/gallery/thumbs/romansstone_1572378831_2165593056429410753_2394650725.webp',
    full: '/gallery/full/romansstone_1572378831_2165593056429410753_2394650725.webp',
    alt: 'Sandstone block being shaped by hand on worksite',
    category: 'on-the-tools',
    featured: false,
  },
  {
    id: 'romansstone_1572378831_2165593056437684712_2394650725',
    thumb: '/gallery/thumbs/romansstone_1572378831_2165593056437684712_2394650725.webp',
    full: '/gallery/full/romansstone_1572378831_2165593056437684712_2394650725.webp',
    alt: 'Hand-dressed sandstone blocks prepared for installation',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1572378831_2165593056446039195_2394650725',
    thumb: '/gallery/thumbs/romansstone_1572378831_2165593056446039195_2394650725.webp',
    full: '/gallery/full/romansstone_1572378831_2165593056446039195_2394650725.webp',
    alt: 'Traditional sandstone dressing techniques on display',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1572463327 — Stone village heritage ===
  {
    id: 'romansstone_1572463327_2166301860074648889_2394650725',
    thumb: '/gallery/thumbs/romansstone_1572463327_2166301860074648889_2394650725.webp',
    full: '/gallery/full/romansstone_1572463327_2166301860074648889_2394650725.webp',
    alt: 'Historic stone village buildings with rustic masonry walls',
    category: 'heritage',
    featured: false,
  },

  // === Timestamp 1572666888 — Concrete block wall ===
  {
    id: 'romansstone_1572666888_2168009450454474883_2394650725',
    thumb: '/gallery/thumbs/romansstone_1572666888_2168009450454474883_2394650725.webp',
    full: '/gallery/full/romansstone_1572666888_2168009450454474883_2394650725.webp',
    alt: 'Worker building concrete block retaining wall on hillside',
    category: 'structural',
    featured: false,
  },

  // === Timestamp 1572809724 — Brick retaining wall ===
  {
    id: 'romansstone_1572809724_2169207652436370701_2394650725',
    thumb: '/gallery/thumbs/romansstone_1572809724_2169207652436370701_2394650725.webp',
    full: '/gallery/full/romansstone_1572809724_2169207652436370701_2394650725.webp',
    alt: 'Long brick retaining wall construction on rural property',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1572809724_2169207652444741596_2394650725',
    thumb: '/gallery/thumbs/romansstone_1572809724_2169207652444741596_2394650725.webp',
    full: '/gallery/full/romansstone_1572809724_2169207652444741596_2394650725.webp',
    alt: 'Brick and stone boundary wall extending along property',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1572809724_2169207652453069207_2394650725',
    thumb: '/gallery/thumbs/romansstone_1572809724_2169207652453069207_2394650725.webp',
    full: '/gallery/full/romansstone_1572809724_2169207652453069207_2394650725.webp',
    alt: 'Completed brick retaining wall on landscaped property',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1572902412 — Sydney Harbour Bridge sandstone ===
  {
    id: 'romansstone_1572902412_2169985170382604428_2394650725',
    thumb: '/gallery/thumbs/romansstone_1572902412_2169985170382604428_2394650725.webp',
    full: '/gallery/full/romansstone_1572902412_2169985170382604428_2394650725.webp',
    alt: 'Heritage sandstone seawall with Sydney Harbour Bridge backdrop',
    category: 'heritage',
    featured: true,
  },

  // === Timestamp 1573008203 — Work truck at stone site ===
  {
    id: 'romansstone_1573008203_2170872612195248871_2394650725',
    thumb: '/gallery/thumbs/romansstone_1573008203_2170872612195248871_2394650725.webp',
    full: '/gallery/full/romansstone_1573008203_2170872612195248871_2394650725.webp',
    alt: 'Romans Building Services truck at heritage stone site',
    category: 'on-the-tools',
    featured: false,
  },

  // === Timestamp 1573068178 — Minas laying bricks ===
  {
    id: 'romansstone_1573068178_2171375719330773847_2394650725',
    thumb: '/gallery/thumbs/romansstone_1573068178_2171375719330773847_2394650725.webp',
    full: '/gallery/full/romansstone_1573068178_2171375719330773847_2394650725.webp',
    alt: 'Minas laying bricks with spirit level on residential project',
    category: 'on-the-tools',
    featured: false,
  },
  {
    id: 'romansstone_1573068178_2171375719339047238_2394650725',
    thumb: '/gallery/thumbs/romansstone_1573068178_2171375719339047238_2394650725.webp',
    full: '/gallery/full/romansstone_1573068178_2171375719339047238_2394650725.webp',
    alt: 'Bricklaying in progress on residential building site',
    category: 'on-the-tools',
    featured: false,
  },
  {
    id: 'romansstone_1573068178_2171375719355898450_2394650725',
    thumb: '/gallery/thumbs/romansstone_1573068178_2171375719355898450_2394650725.webp',
    full: '/gallery/full/romansstone_1573068178_2171375719355898450_2394650725.webp',
    alt: 'Brick facade construction on residential extension',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1573158881 — Sandstone blocks at harbour ===
  {
    id: 'romansstone_1573158881_2172136589462153880_2394650725',
    thumb: '/gallery/thumbs/romansstone_1573158881_2172136589462153880_2394650725.webp',
    full: '/gallery/full/romansstone_1573158881_2172136589462153880_2394650725.webp',
    alt: 'Cut sandstone blocks prepared for harbour wall restoration',
    category: 'stonework',
    featured: true,
  },

  // === Timestamp 1573590714 — Rendered retaining wall ===
  {
    id: 'romansstone_1573590714_2175759068906789215_2394650725',
    thumb: '/gallery/thumbs/romansstone_1573590714_2175759068906789215_2394650725.webp',
    full: '/gallery/full/romansstone_1573590714_2175759068906789215_2394650725.webp',
    alt: 'Freshly rendered retaining wall along garden pathway',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1573590714_2175759068923561034_2394650725',
    thumb: '/gallery/thumbs/romansstone_1573590714_2175759068923561034_2394650725.webp',
    full: '/gallery/full/romansstone_1573590714_2175759068923561034_2394650725.webp',
    alt: 'Cement render applied to garden boundary wall',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1573590714_2175759068931948061_2394650725',
    thumb: '/gallery/thumbs/romansstone_1573590714_2175759068931948061_2394650725.webp',
    full: '/gallery/full/romansstone_1573590714_2175759068931948061_2394650725.webp',
    alt: 'Rendered wall with textured finish in garden setting',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1573590714_2175759068931978497_2394650725',
    thumb: '/gallery/thumbs/romansstone_1573590714_2175759068931978497_2394650725.webp',
    full: '/gallery/full/romansstone_1573590714_2175759068931978497_2394650725.webp',
    alt: 'Long rendered retaining wall alongside walkway',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1573590714_2175759068940281815_2394650725',
    thumb: '/gallery/thumbs/romansstone_1573590714_2175759068940281815_2394650725.webp',
    full: '/gallery/full/romansstone_1573590714_2175759068940281815_2394650725.webp',
    alt: 'Completed rendered boundary wall with smooth finish',
    category: 'concrete',
    featured: false,
  },

  // === Timestamp 1573673113 — Bricklayer mixing mortar ===
  {
    id: 'romansstone_1573673113_2176450280324126948_2394650725',
    thumb: '/gallery/thumbs/romansstone_1573673113_2176450280324126948_2394650725.webp',
    full: '/gallery/full/romansstone_1573673113_2176450280324126948_2394650725.webp',
    alt: 'Worker mixing mortar on residential brick renovation',
    category: 'on-the-tools',
    featured: false,
  },

  // === Timestamp 1574104761 — Structural props and stonework ===
  {
    id: 'romansstone_1574104761_2180071211265247711_2394650725',
    thumb: '/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp',
    full: '/gallery/full/romansstone_1574104761_2180071211265247711_2394650725.webp',
    alt: 'Structural acrow props supporting stone wall during repairs',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1574104761_2180071211282169738_2394650725',
    thumb: '/gallery/thumbs/romansstone_1574104761_2180071211282169738_2394650725.webp',
    full: '/gallery/full/romansstone_1574104761_2180071211282169738_2394650725.webp',
    alt: 'Temporary structural supports in heritage stone building',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1574104761_2180071211290495220_2394650725',
    thumb: '/gallery/thumbs/romansstone_1574104761_2180071211290495220_2394650725.webp',
    full: '/gallery/full/romansstone_1574104761_2180071211290495220_2394650725.webp',
    alt: 'Acrow props and wheelbarrow in stonework repair area',
    category: 'structural',
    featured: false,
  },

  // === Timestamp 1574194528 — Block wall elevator shaft ===
  {
    id: 'romansstone_1574194528_2180824226440146294_2394650725',
    thumb: '/gallery/thumbs/romansstone_1574194528_2180824226440146294_2394650725.webp',
    full: '/gallery/full/romansstone_1574194528_2180824226440146294_2394650725.webp',
    alt: 'Concrete block wall construction around lift shaft',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1574194528_2180824226456786222_2394650725',
    thumb: '/gallery/thumbs/romansstone_1574194528_2180824226456786222_2394650725.webp',
    full: '/gallery/full/romansstone_1574194528_2180824226456786222_2394650725.webp',
    alt: 'Commercial block wall with doorway opening completed',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1574194528_2180824226465172490_2394650725',
    thumb: '/gallery/thumbs/romansstone_1574194528_2180824226465172490_2394650725.webp',
    full: '/gallery/full/romansstone_1574194528_2180824226465172490_2394650725.webp',
    alt: 'Block wall lift shaft enclosure on commercial site',
    category: 'structural',
    featured: false,
  },

  // === Timestamp 1574278523 — Foundation drainage ===
  {
    id: 'romansstone_1574278523_2181528827132774103_2394650725',
    thumb: '/gallery/thumbs/romansstone_1574278523_2181528827132774103_2394650725.webp',
    full: '/gallery/full/romansstone_1574278523_2181528827132774103_2394650725.webp',
    alt: 'Foundation drainage installation with concrete kerbing',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1574278523_2181528827141159706_2394650725',
    thumb: '/gallery/thumbs/romansstone_1574278523_2181528827141159706_2394650725.webp',
    full: '/gallery/full/romansstone_1574278523_2181528827141159706_2394650725.webp',
    alt: 'Subfloor drainage and foundation remediation work',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1574278523_2181528827149566780_2394650725',
    thumb: '/gallery/thumbs/romansstone_1574278523_2181528827149566780_2394650725.webp',
    full: '/gallery/full/romansstone_1574278523_2181528827149566780_2394650725.webp',
    alt: 'Concrete foundation repair with new drainage channel',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1574278523_2181528827174674095_2394650725',
    thumb: '/gallery/thumbs/romansstone_1574278523_2181528827174674095_2394650725.webp',
    full: '/gallery/full/romansstone_1574278523_2181528827174674095_2394650725.webp',
    alt: 'Foundation waterproofing and drainage system installation',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1574278523_2181528827183055533_2394650725',
    thumb: '/gallery/thumbs/romansstone_1574278523_2181528827183055533_2394650725.webp',
    full: '/gallery/full/romansstone_1574278523_2181528827183055533_2394650725.webp',
    alt: 'Remedial foundation work with new concrete base',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1574278523_2181528827191493237_2394650725',
    thumb: '/gallery/thumbs/romansstone_1574278523_2181528827191493237_2394650725.webp',
    full: '/gallery/full/romansstone_1574278523_2181528827191493237_2394650725.webp',
    alt: 'Completed foundation drainage and remediation project',
    category: 'concrete',
    featured: false,
  },

  // === Timestamp 1574628406 — Sandstone blocks waterfront ===
  {
    id: 'romansstone_1574628406_2184463862819396831_2394650725',
    thumb: '/gallery/thumbs/romansstone_1574628406_2184463862819396831_2394650725.webp',
    full: '/gallery/full/romansstone_1574628406_2184463862819396831_2394650725.webp',
    alt: 'Stonemason handling sandstone blocks by harbour waterfront',
    category: 'on-the-tools',
    featured: false,
  },

  // === Timestamp 1574712325 — Harbour seawall at dusk ===
  {
    id: 'romansstone_1574712325_2185167819669748153_2394650725',
    thumb: '/gallery/thumbs/romansstone_1574712325_2185167819669748153_2394650725.webp',
    full: '/gallery/full/romansstone_1574712325_2185167819669748153_2394650725.webp',
    alt: 'Stonemason working on sandstone seawall at dusk by harbour',
    category: 'on-the-tools',
    featured: true,
  },
  {
    id: 'romansstone_1574712325_2185167819686463586_2394650725',
    thumb: '/gallery/thumbs/romansstone_1574712325_2185167819686463586_2394650725.webp',
    full: '/gallery/full/romansstone_1574712325_2185167819686463586_2394650725.webp',
    alt: 'Harbour seawall sandstone restoration in progress',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1574712325_2185167819770397016_2394650725',
    thumb: '/gallery/thumbs/romansstone_1574712325_2185167819770397016_2394650725.webp',
    full: '/gallery/full/romansstone_1574712325_2185167819770397016_2394650725.webp',
    alt: 'Excavator assisting with harbour sandstone wall rebuild',
    category: 'on-the-tools',
    featured: false,
  },

  // === Timestamp 1574881936 — Sandstone retaining wall completed ===
  {
    id: 'romansstone_1574881936_2186590621387736148_2394650725',
    thumb: '/gallery/thumbs/romansstone_1574881936_2186590621387736148_2394650725.webp',
    full: '/gallery/full/romansstone_1574881936_2186590621387736148_2394650725.webp',
    alt: 'Finished sandstone block retaining wall alongside paved path',
    category: 'completed',
    featured: true,
  },

  // === Timestamp 1574969369 — Waterfront property ===
  {
    id: 'romansstone_1574969369_2187324067810810171_2394650725',
    thumb: '/gallery/thumbs/romansstone_1574969369_2187324067810810171_2394650725.webp',
    full: '/gallery/full/romansstone_1574969369_2187324067810810171_2394650725.webp',
    alt: 'Waterfront property with completed stone retaining wall',
    category: 'completed',
    featured: false,
  },

  // === Timestamp 1575057672 — Heritage sandstone wall ===
  {
    id: 'romansstone_1575057672_2188064802843589498_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575057672_2188064802843589498_2394650725.webp',
    full: '/gallery/full/romansstone_1575057672_2188064802843589498_2394650725.webp',
    alt: 'Weathered sandstone wall with timber hoarding above',
    category: 'heritage',
    featured: false,
  },
  {
    id: 'romansstone_1575057672_2188064802852007524_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575057672_2188064802852007524_2394650725.webp',
    full: '/gallery/full/romansstone_1575057672_2188064802852007524_2394650725.webp',
    alt: 'Heritage sandstone facade restoration in progress',
    category: 'heritage',
    featured: false,
  },
  {
    id: 'romansstone_1575057672_2188064802860369591_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575057672_2188064802860369591_2394650725.webp',
    full: '/gallery/full/romansstone_1575057672_2188064802860369591_2394650725.webp',
    alt: 'Aged sandstone block wall undergoing remedial works',
    category: 'heritage',
    featured: false,
  },
  {
    id: 'romansstone_1575057672_2188064802868774190_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575057672_2188064802868774190_2394650725.webp',
    full: '/gallery/full/romansstone_1575057672_2188064802868774190_2394650725.webp',
    alt: 'Heritage sandstone wall needing mortar repointing',
    category: 'heritage',
    featured: false,
  },
  {
    id: 'romansstone_1575057672_2188064802893944247_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp',
    full: '/gallery/full/romansstone_1575057672_2188064802893944247_2394650725.webp',
    alt: 'Sandstone heritage wall with new pointing repairs',
    category: 'heritage',
    featured: false,
  },

  // === Timestamp 1575058571 — Romans Building Services logo ===
  {
    id: 'romansstone_1575058571_2188072348589333644_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575058571_2188072348589333644_2394650725.webp',
    full: '/gallery/full/romansstone_1575058571_2188072348589333644_2394650725.webp',
    alt: 'Romans Building Services logo on stone wall background',
    category: 'completed',
    featured: false,
  },

  // === Timestamp 1575232298 — Brick pillars with scaffolding ===
  {
    id: 'romansstone_1575232298_2189529671048373499_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575232298_2189529671048373499_2394650725.webp',
    full: '/gallery/full/romansstone_1575232298_2189529671048373499_2394650725.webp',
    alt: 'New brick entrance pillars with scaffolding on-site',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1575232298_2189529671065244382_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575232298_2189529671065244382_2394650725.webp',
    full: '/gallery/full/romansstone_1575232298_2189529671065244382_2394650725.webp',
    alt: 'Brick pillar construction with tapered design detail',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1575232298_2189529671073534282_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575232298_2189529671073534282_2394650725.webp',
    full: '/gallery/full/romansstone_1575232298_2189529671073534282_2394650725.webp',
    alt: 'Matching brick gateway pillars nearing completion',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1575321910 — Stone steps retaining wall ===
  {
    id: 'romansstone_1575321910_2190281389470329139_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575321910_2190281389470329139_2394650725.webp',
    full: '/gallery/full/romansstone_1575321910_2190281389470329139_2394650725.webp',
    alt: 'Worker building stone retaining wall with steps',
    category: 'on-the-tools',
    featured: false,
  },

  // === Timestamp 1575423877 — Heritage sandstone kerbing ===
  {
    id: 'romansstone_1575423877_2191136752734123102_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575423877_2191136752734123102_2394650725.webp',
    full: '/gallery/full/romansstone_1575423877_2191136752734123102_2394650725.webp',
    alt: 'Heritage sandstone kerb stone with iron post streetscape',
    category: 'heritage',
    featured: false,
  },
  {
    id: 'romansstone_1575423877_2191136752742441867_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575423877_2191136752742441867_2394650725.webp',
    full: '/gallery/full/romansstone_1575423877_2191136752742441867_2394650725.webp',
    alt: 'Restored sandstone kerbing along heritage streetscape',
    category: 'heritage',
    featured: false,
  },
  {
    id: 'romansstone_1575423877_2191136752750850581_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575423877_2191136752750850581_2394650725.webp',
    full: '/gallery/full/romansstone_1575423877_2191136752750850581_2394650725.webp',
    alt: 'Sandstone kerb stone replacement in heritage precinct',
    category: 'heritage',
    featured: false,
  },
  {
    id: 'romansstone_1575423877_2191136752759247403_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575423877_2191136752759247403_2394650725.webp',
    full: '/gallery/full/romansstone_1575423877_2191136752759247403_2394650725.webp',
    alt: 'Heritage streetscape kerb restoration completed',
    category: 'heritage',
    featured: false,
  },

  // === Timestamp 1575487721 — Structural beam and lintel ===
  {
    id: 'romansstone_1575487721_2191672319871916475_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575487721_2191672319871916475_2394650725.webp',
    full: '/gallery/full/romansstone_1575487721_2191672319871916475_2394650725.webp',
    alt: 'Steel beam installation on residential building extension',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1575487721_2191672319897108416_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575487721_2191672319897108416_2394650725.webp',
    full: '/gallery/full/romansstone_1575487721_2191672319897108416_2394650725.webp',
    alt: 'Structural steel beam supporting new building opening',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1575487721_2191672319905376443_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575487721_2191672319905376443_2394650725.webp',
    full: '/gallery/full/romansstone_1575487721_2191672319905376443_2394650725.webp',
    alt: 'Structural beam and prop support during renovation',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1575487721_2191672319905608559_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575487721_2191672319905608559_2394650725.webp',
    full: '/gallery/full/romansstone_1575487721_2191672319905608559_2394650725.webp',
    alt: 'Temporary structural supports on building renovation site',
    category: 'structural',
    featured: false,
  },

  // === Timestamp 1575574438 — Brick arch repair ===
  {
    id: 'romansstone_1575574438_2192399752099154544_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575574438_2192399752099154544_2394650725.webp',
    full: '/gallery/full/romansstone_1575574438_2192399752099154544_2394650725.webp',
    alt: 'Heritage brick arch with render repair in progress',
    category: 'heritage',
    featured: false,
  },
  {
    id: 'romansstone_1575574438_2192399752116026876_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575574438_2192399752116026876_2394650725.webp',
    full: '/gallery/full/romansstone_1575574438_2192399752116026876_2394650725.webp',
    alt: 'Brick arch and render restoration on heritage facade',
    category: 'heritage',
    featured: false,
  },

  // === Timestamp 1575756805 — Mediterranean harbour ===
  {
    id: 'romansstone_1575756805_2193929554958326793_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575756805_2193929554958326793_2394650725.webp',
    full: '/gallery/full/romansstone_1575756805_2193929554958326793_2394650725.webp',
    alt: 'Bronze sculpture on heritage stone harbour wall',
    category: 'heritage',
    featured: false,
  },

  // === Timestamp 1575832990 — Heritage doorstep repair ===
  {
    id: 'romansstone_1575832990_2194568640194831037_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575832990_2194568640194831037_2394650725.webp',
    full: '/gallery/full/romansstone_1575832990_2194568640194831037_2394650725.webp',
    alt: 'Cracked sandstone doorstep requiring heritage repair',
    category: 'heritage',
    featured: false,
  },
  {
    id: 'romansstone_1575832990_2194568640211527667_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575832990_2194568640211527667_2394650725.webp',
    full: '/gallery/full/romansstone_1575832990_2194568640211527667_2394650725.webp',
    alt: 'Heritage sandstone doorstep crack assessment',
    category: 'heritage',
    featured: false,
  },
  {
    id: 'romansstone_1575832990_2194568640228301326_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575832990_2194568640228301326_2394650725.webp',
    full: '/gallery/full/romansstone_1575832990_2194568640228301326_2394650725.webp',
    alt: 'Damaged stone step at heritage building entrance',
    category: 'heritage',
    featured: false,
  },

  // === Timestamp 1575950236 — Exposed brick feature wall ===
  {
    id: 'romansstone_1575950236_2195552169754061861_2394650725',
    thumb: '/gallery/thumbs/romansstone_1575950236_2195552169754061861_2394650725.webp',
    full: '/gallery/full/romansstone_1575950236_2195552169754061861_2394650725.webp',
    alt: 'Exposed recycled brick interior feature wall with patina',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1576003161 — Pool area concrete ===
  {
    id: 'romansstone_1576003161_2195996136622601152_2394650725',
    thumb: '/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp',
    full: '/gallery/full/romansstone_1576003161_2195996136622601152_2394650725.webp',
    alt: 'Swimming pool area with rendered walls and concrete surrounds',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1576003161_2195996136631037313_2394650725',
    thumb: '/gallery/thumbs/romansstone_1576003161_2195996136631037313_2394650725.webp',
    full: '/gallery/full/romansstone_1576003161_2195996136631037313_2394650725.webp',
    alt: 'Pool surrounds with new concrete and render work',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1576003161_2195996136639413824_2394650725',
    thumb: '/gallery/thumbs/romansstone_1576003161_2195996136639413824_2394650725.webp',
    full: '/gallery/full/romansstone_1576003161_2195996136639413824_2394650725.webp',
    alt: 'Residential pool area render and waterproofing project',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1576003161_2195996136656320614_2394650725',
    thumb: '/gallery/thumbs/romansstone_1576003161_2195996136656320614_2394650725.webp',
    full: '/gallery/full/romansstone_1576003161_2195996136656320614_2394650725.webp',
    alt: 'Concrete pool coping and rendered wall completion',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1576003161_2195996136664630436_2394650725',
    thumb: '/gallery/thumbs/romansstone_1576003161_2195996136664630436_2394650725.webp',
    full: '/gallery/full/romansstone_1576003161_2195996136664630436_2394650725.webp',
    alt: 'Pool area concrete work and wall rendering in progress',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1576003161_2195996136673032903_2394650725',
    thumb: '/gallery/thumbs/romansstone_1576003161_2195996136673032903_2394650725.webp',
    full: '/gallery/full/romansstone_1576003161_2195996136673032903_2394650725.webp',
    alt: 'Completed pool surround with rendered retaining walls',
    category: 'concrete',
    featured: false,
  },

  // === Timestamp 1576440613 — Roof and chimney work ===
  {
    id: 'romansstone_1576440613_2199665757989086550_2394650725',
    thumb: '/gallery/thumbs/romansstone_1576440613_2199665757989086550_2394650725.webp',
    full: '/gallery/full/romansstone_1576440613_2199665757989086550_2394650725.webp',
    alt: 'Roof level brick and structural repair on residential home',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1576440613_2199665758014225784_2394650725',
    thumb: '/gallery/thumbs/romansstone_1576440613_2199665758014225784_2394650725.webp',
    full: '/gallery/full/romansstone_1576440613_2199665758014225784_2394650725.webp',
    alt: 'Chimney and roof line structural repairs underway',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1576440613_2199665758022578466_2394650725',
    thumb: '/gallery/thumbs/romansstone_1576440613_2199665758022578466_2394650725.webp',
    full: '/gallery/full/romansstone_1576440613_2199665758022578466_2394650725.webp',
    alt: 'Residential roof and masonry repair work in progress',
    category: 'structural',
    featured: false,
  },

  // === Timestamp 1576540031 — Concrete trowelling ===
  {
    id: 'romansstone_1576540031_2200499729320902762_2394650725',
    thumb: '/gallery/thumbs/romansstone_1576540031_2200499729320902762_2394650725.webp',
    full: '/gallery/full/romansstone_1576540031_2200499729320902762_2394650725.webp',
    alt: 'Minas trowelling fresh concrete pad at heritage property',
    category: 'on-the-tools',
    featured: false,
  },

  // === Timestamp 1576697632 — Waterfront property ===
  {
    id: 'romansstone_1576697632_2201821786231230565_2394650725',
    thumb: '/gallery/thumbs/romansstone_1576697632_2201821786231230565_2394650725.webp',
    full: '/gallery/full/romansstone_1576697632_2201821786231230565_2394650725.webp',
    alt: 'Luxury waterfront property with stone retaining walls',
    category: 'completed',
    featured: false,
  },
  {
    id: 'romansstone_1576697632_2201821786256258101_2394650725',
    thumb: '/gallery/thumbs/romansstone_1576697632_2201821786256258101_2394650725.webp',
    full: '/gallery/full/romansstone_1576697632_2201821786256258101_2394650725.webp',
    alt: 'Harbourside stonework at premium residential property',
    category: 'completed',
    featured: false,
  },
  {
    id: 'romansstone_1576697632_2201821786264643564_2394650725',
    thumb: '/gallery/thumbs/romansstone_1576697632_2201821786264643564_2394650725.webp',
    full: '/gallery/full/romansstone_1576697632_2201821786264643564_2394650725.webp',
    alt: 'Waterfront stone wall with harbour views beyond',
    category: 'completed',
    featured: false,
  },

  // === Timestamp 1577648590 — Brick boundary wall ===
  {
    id: 'romansstone_1577648590_2209798996292285781_2394650725',
    thumb: '/gallery/thumbs/romansstone_1577648590_2209798996292285781_2394650725.webp',
    full: '/gallery/full/romansstone_1577648590_2209798996292285781_2394650725.webp',
    alt: 'Worker building new brick boundary wall with waterproofing',
    category: 'on-the-tools',
    featured: false,
  },
  {
    id: 'romansstone_1577648590_2209798996309176130_2394650725',
    thumb: '/gallery/thumbs/romansstone_1577648590_2209798996309176130_2394650725.webp',
    full: '/gallery/full/romansstone_1577648590_2209798996309176130_2394650725.webp',
    alt: 'Brick retaining wall construction with iron fence above',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1577648590_2209798996317523783_2394650725',
    thumb: '/gallery/thumbs/romansstone_1577648590_2209798996317523783_2394650725.webp',
    full: '/gallery/full/romansstone_1577648590_2209798996317523783_2394650725.webp',
    alt: 'New brick boundary wall with fence railing detail',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1577648590_2209798996334221646_2394650725',
    thumb: '/gallery/thumbs/romansstone_1577648590_2209798996334221646_2394650725.webp',
    full: '/gallery/full/romansstone_1577648590_2209798996334221646_2394650725.webp',
    alt: 'Brick retaining wall with waterproofing membrane',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1577648590_2209798996334440108_2394650725',
    thumb: '/gallery/thumbs/romansstone_1577648590_2209798996334440108_2394650725.webp',
    full: '/gallery/full/romansstone_1577648590_2209798996334440108_2394650725.webp',
    alt: 'Completed brick boundary wall alongside iron railing',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1578429043 — Concrete kerbing ===
  {
    id: 'romansstone_1578429043_2216345917937099335_2394650725',
    thumb: '/gallery/thumbs/romansstone_1578429043_2216345917937099335_2394650725.webp',
    full: '/gallery/full/romansstone_1578429043_2216345917937099335_2394650725.webp',
    alt: 'New concrete kerbing in commercial car park',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1578429043_2216345917953830471_2394650725',
    thumb: '/gallery/thumbs/romansstone_1578429043_2216345917953830471_2394650725.webp',
    full: '/gallery/full/romansstone_1578429043_2216345917953830471_2394650725.webp',
    alt: 'Concrete kerb and channel installation at car park',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1578429044_2216345917970661937_2394650725',
    thumb: '/gallery/thumbs/romansstone_1578429044_2216345917970661937_2394650725.webp',
    full: '/gallery/full/romansstone_1578429044_2216345917970661937_2394650725.webp',
    alt: 'Finished concrete kerbing along commercial driveway',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1578429044_2216345917978838995_2394650725',
    thumb: '/gallery/thumbs/romansstone_1578429044_2216345917978838995_2394650725.webp',
    full: '/gallery/full/romansstone_1578429044_2216345917978838995_2394650725.webp',
    alt: 'Concrete kerb replacement in commercial area',
    category: 'concrete',
    featured: false,
  },

  // === Timestamp 1579724750 — Site clearing ===
  {
    id: 'romansstone_1579724750_2227215093375181082_2394650725',
    thumb: '/gallery/thumbs/romansstone_1579724750_2227215093375181082_2394650725.webp',
    full: '/gallery/full/romansstone_1579724750_2227215093375181082_2394650725.webp',
    alt: 'Site clearing and preparation for new retaining wall',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1579724750_2227215093383768825_2394650725',
    thumb: '/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp',
    full: '/gallery/full/romansstone_1579724750_2227215093383768825_2394650725.webp',
    alt: 'Earthworks and site preparation for stone wall construction',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1579724750_2227215093400372045_2394650725',
    thumb: '/gallery/thumbs/romansstone_1579724750_2227215093400372045_2394650725.webp',
    full: '/gallery/full/romansstone_1579724750_2227215093400372045_2394650725.webp',
    alt: 'Cleared site ready for foundation and retaining wall',
    category: 'structural',
    featured: false,
  },

  // === Timestamp 1580538811 — Rural fencing ===
  {
    id: 'romansstone_1580538811_2234043932369949975_2394650725',
    thumb: '/gallery/thumbs/romansstone_1580538811_2234043932369949975_2394650725.webp',
    full: '/gallery/full/romansstone_1580538811_2234043932369949975_2394650725.webp',
    alt: 'Rural property structural fencing and post installation',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1580538811_2234043932386573877_2394650725',
    thumb: '/gallery/thumbs/romansstone_1580538811_2234043932386573877_2394650725.webp',
    full: '/gallery/full/romansstone_1580538811_2234043932386573877_2394650725.webp',
    alt: 'Timber post and rail fencing on rural property',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1580538811_2234043932386630519_2394650725',
    thumb: '/gallery/thumbs/romansstone_1580538811_2234043932386630519_2394650725.webp',
    full: '/gallery/full/romansstone_1580538811_2234043932386630519_2394650725.webp',
    alt: 'Rural property fencing construction with new posts',
    category: 'structural',
    featured: false,
  },

  // === Timestamp 1581054104 — Sandstone block cutting ===
  {
    id: 'romansstone_1581054104_2238366519216325765_2394650725',
    thumb: '/gallery/thumbs/romansstone_1581054104_2238366519216325765_2394650725.webp',
    full: '/gallery/full/romansstone_1581054104_2238366519216325765_2394650725.webp',
    alt: 'Sandstone blocks loaded on truck for restoration project',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1581054104_2238366519224762353_2394650725',
    thumb: '/gallery/thumbs/romansstone_1581054104_2238366519224762353_2394650725.webp',
    full: '/gallery/full/romansstone_1581054104_2238366519224762353_2394650725.webp',
    alt: 'Cut sandstone blocks prepared for wall construction',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1584260663 — Staircase concrete repair ===
  {
    id: 'romansstone_1584260663_2265265091065089253_2394650725',
    thumb: '/gallery/thumbs/romansstone_1584260663_2265265091065089253_2394650725.webp',
    full: '/gallery/full/romansstone_1584260663_2265265091065089253_2394650725.webp',
    alt: 'Grand concrete staircase with balustrades requiring repair',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1584260663_2265265091065105563_2394650725',
    thumb: '/gallery/thumbs/romansstone_1584260663_2265265091065105563_2394650725.webp',
    full: '/gallery/full/romansstone_1584260663_2265265091065105563_2394650725.webp',
    alt: 'Ornate concrete staircase and balustrade restoration project',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1584260663_2265265091073326681_2394650725',
    thumb: '/gallery/thumbs/romansstone_1584260663_2265265091073326681_2394650725.webp',
    full: '/gallery/full/romansstone_1584260663_2265265091073326681_2394650725.webp',
    alt: 'Concrete staircase repair with rendered balustrade detail',
    category: 'concrete',
    featured: false,
  },
  {
    id: 'romansstone_1584260663_2265265091090305475_2394650725',
    thumb: '/gallery/thumbs/romansstone_1584260663_2265265091090305475_2394650725.webp',
    full: '/gallery/full/romansstone_1584260663_2265265091090305475_2394650725.webp',
    alt: 'Heritage concrete staircase balustrade remediation',
    category: 'concrete',
    featured: false,
  },

  // === Timestamp 1591332653 — Subfloor and foundation repair ===
  {
    id: 'romansstone_1591332653_2324589237259190979_2394650725',
    thumb: '/gallery/thumbs/romansstone_1591332653_2324589237259190979_2394650725.webp',
    full: '/gallery/full/romansstone_1591332653_2324589237259190979_2394650725.webp',
    alt: 'Subfloor foundation repair with exposed brickwork',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1591332653_2324589237267569443_2394650725',
    thumb: '/gallery/thumbs/romansstone_1591332653_2324589237267569443_2394650725.webp',
    full: '/gallery/full/romansstone_1591332653_2324589237267569443_2394650725.webp',
    alt: 'Foundation underpinning with new supports and brick piers',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1591332653_2324589237275790160_2394650725',
    thumb: '/gallery/thumbs/romansstone_1591332653_2324589237275790160_2394650725.webp',
    full: '/gallery/full/romansstone_1591332653_2324589237275790160_2394650725.webp',
    alt: 'Subfloor structural repair with temporary props',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1591332653_2324589237326087755_2394650725',
    thumb: '/gallery/thumbs/romansstone_1591332653_2324589237326087755_2394650725.webp',
    full: '/gallery/full/romansstone_1591332653_2324589237326087755_2394650725.webp',
    alt: 'Residential foundation repair and restumping work',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1591332653_2324589237343039688_2394650725',
    thumb: '/gallery/thumbs/romansstone_1591332653_2324589237343039688_2394650725.webp',
    full: '/gallery/full/romansstone_1591332653_2324589237343039688_2394650725.webp',
    alt: 'Foundation pier replacement under residential building',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1591332653_2324589237351434245_2394650725',
    thumb: '/gallery/thumbs/romansstone_1591332653_2324589237351434245_2394650725.webp',
    full: '/gallery/full/romansstone_1591332653_2324589237351434245_2394650725.webp',
    alt: 'Completed subfloor foundation repair and restumping',
    category: 'structural',
    featured: false,
  },

  // === Timestamp 1591853350 — Sandstone paving ===
  {
    id: 'romansstone_1591853350_2328957166947902133_2394650725',
    thumb: '/gallery/thumbs/romansstone_1591853350_2328957166947902133_2394650725.webp',
    full: '/gallery/full/romansstone_1591853350_2328957166947902133_2394650725.webp',
    alt: 'Sandstone crazy paving walkway at residential property',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1591853350_2328957166972915386_2394650725',
    thumb: '/gallery/thumbs/romansstone_1591853350_2328957166972915386_2394650725.webp',
    full: '/gallery/full/romansstone_1591853350_2328957166972915386_2394650725.webp',
    alt: 'Natural sandstone flag paving being laid on pathway',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1591853350_2328957166981235151_2394650725',
    thumb: '/gallery/thumbs/romansstone_1591853350_2328957166981235151_2394650725.webp',
    full: '/gallery/full/romansstone_1591853350_2328957166981235151_2394650725.webp',
    alt: 'Sandstone paving pathway with irregular natural edges',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1591853350_2328957166989743835_2394650725',
    thumb: '/gallery/thumbs/romansstone_1591853350_2328957166989743835_2394650725.webp',
    full: '/gallery/full/romansstone_1591853350_2328957166989743835_2394650725.webp',
    alt: 'Finished sandstone paving with garden bed edging',
    category: 'completed',
    featured: false,
  },
  {
    id: 'romansstone_1591853350_2328957167006569406_2394650725',
    thumb: '/gallery/thumbs/romansstone_1591853350_2328957167006569406_2394650725.webp',
    full: '/gallery/full/romansstone_1591853350_2328957167006569406_2394650725.webp',
    alt: 'Completed sandstone paving walkway through garden',
    category: 'completed',
    featured: false,
  },

  // === Timestamp 1593378293 — Sandstone pathway ===
  {
    id: 'romansstone_1593378293_2341749313102980712_2394650725',
    thumb: '/gallery/thumbs/romansstone_1593378293_2341749313102980712_2394650725.webp',
    full: '/gallery/full/romansstone_1593378293_2341749313102980712_2394650725.webp',
    alt: 'Sandstone crazy paving pathway with concrete retaining wall',
    category: 'stonework',
    featured: true,
  },
  {
    id: 'romansstone_1593378293_2341749313111573501_2394650725',
    thumb: '/gallery/thumbs/romansstone_1593378293_2341749313111573501_2394650725.webp',
    full: '/gallery/full/romansstone_1593378293_2341749313111573501_2394650725.webp',
    alt: 'Curved sandstone pathway leading to residential entrance',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1593378293_2341749313119819694_2394650725',
    thumb: '/gallery/thumbs/romansstone_1593378293_2341749313119819694_2394650725.webp',
    full: '/gallery/full/romansstone_1593378293_2341749313119819694_2394650725.webp',
    alt: 'Sandstone flag paving with concrete retaining edge',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1593378293_2341749313128335188_2394650725',
    thumb: '/gallery/thumbs/romansstone_1593378293_2341749313128335188_2394650725.webp',
    full: '/gallery/full/romansstone_1593378293_2341749313128335188_2394650725.webp',
    alt: 'Natural stone pathway installation at residential property',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1593378293_2341749313136586032_2394650725',
    thumb: '/gallery/thumbs/romansstone_1593378293_2341749313136586032_2394650725.webp',
    full: '/gallery/full/romansstone_1593378293_2341749313136586032_2394650725.webp',
    alt: 'Completed sandstone paving with garden landscaping',
    category: 'completed',
    featured: false,
  },
  {
    id: 'romansstone_1593378293_2341749313144940120_2394650725',
    thumb: '/gallery/thumbs/romansstone_1593378293_2341749313144940120_2394650725.webp',
    full: '/gallery/full/romansstone_1593378293_2341749313144940120_2394650725.webp',
    alt: 'Finished sandstone pathway with mature garden setting',
    category: 'completed',
    featured: false,
  },

  // === Timestamp 1597264683 — Sandstone block interior wall ===
  {
    id: 'romansstone_1597264683_2374350711774721597_2394650725',
    thumb: '/gallery/thumbs/romansstone_1597264683_2374350711774721597_2394650725.webp',
    full: '/gallery/full/romansstone_1597264683_2374350711774721597_2394650725.webp',
    alt: 'Interior sandstone block wall with split-face finish',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1597264683_2374350711783111407_2394650725',
    thumb: '/gallery/thumbs/romansstone_1597264683_2374350711783111407_2394650725.webp',
    full: '/gallery/full/romansstone_1597264683_2374350711783111407_2394650725.webp',
    alt: 'Sandstone block feature wall under construction indoors',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1597264683_2374350711799871498_2394650725',
    thumb: '/gallery/thumbs/romansstone_1597264683_2374350711799871498_2394650725.webp',
    full: '/gallery/full/romansstone_1597264683_2374350711799871498_2394650725.webp',
    alt: 'Interior sandstone wall nearing completion in new build',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1598583316 — Stonemason building wall ===
  {
    id: 'romansstone_1598583316_2385412205379497335_2394650725',
    thumb: '/gallery/thumbs/romansstone_1598583316_2385412205379497335_2394650725.webp',
    full: '/gallery/full/romansstone_1598583316_2385412205379497335_2394650725.webp',
    alt: 'Stonemason building sandstone garden wall in sunlight',
    category: 'on-the-tools',
    featured: false,
  },

  // === Timestamp 1601449307 — Sandstone block cutting ===
  {
    id: 'romansstone_1601449307_2409453884352676086_2394650725',
    thumb: '/gallery/thumbs/romansstone_1601449307_2409453884352676086_2394650725.webp',
    full: '/gallery/full/romansstone_1601449307_2409453884352676086_2394650725.webp',
    alt: 'Cut sandstone coping blocks on truck with stone saw',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1601449307_2409453884377743320_2394650725',
    thumb: '/gallery/thumbs/romansstone_1601449307_2409453884377743320_2394650725.webp',
    full: '/gallery/full/romansstone_1601449307_2409453884377743320_2394650725.webp',
    alt: 'Precisely cut sandstone blocks ready for installation',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1601449307_2409453884377874647_2394650725',
    thumb: '/gallery/thumbs/romansstone_1601449307_2409453884377874647_2394650725.webp',
    full: '/gallery/full/romansstone_1601449307_2409453884377874647_2394650725.webp',
    alt: 'Sandstone slab cutting with power saw on worksite',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1601449307_2409453884386221829_2394650725',
    thumb: '/gallery/thumbs/romansstone_1601449307_2409453884386221829_2394650725.webp',
    full: '/gallery/full/romansstone_1601449307_2409453884386221829_2394650725.webp',
    alt: 'Stack of cut sandstone blocks prepared for wall project',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1602622355 — Sandstone cladding on block wall ===
  {
    id: 'romansstone_1602622355_2419294127612293723_2394650725',
    thumb: '/gallery/thumbs/romansstone_1602622355_2419294127612293723_2394650725.webp',
    full: '/gallery/full/romansstone_1602622355_2419294127612293723_2394650725.webp',
    alt: 'Sandstone cladding being applied to concrete block wall',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1602622355_2419294127620805489_2394650725',
    thumb: '/gallery/thumbs/romansstone_1602622355_2419294127620805489_2394650725.webp',
    full: '/gallery/full/romansstone_1602622355_2419294127620805489_2394650725.webp',
    alt: 'Stone veneer cladding installation on retaining wall',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1602622355_2419294127637606407_2394650725',
    thumb: '/gallery/thumbs/romansstone_1602622355_2419294127637606407_2394650725.webp',
    full: '/gallery/full/romansstone_1602622355_2419294127637606407_2394650725.webp',
    alt: 'Sandstone veneer cladding on exterior retaining wall',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1602622355_2419294127646032017_2394650725',
    thumb: '/gallery/thumbs/romansstone_1602622355_2419294127646032017_2394650725.webp',
    full: '/gallery/full/romansstone_1602622355_2419294127646032017_2394650725.webp',
    alt: 'Natural stone cladding on block wall in progress',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1602622355_2419294127654324172_2394650725',
    thumb: '/gallery/thumbs/romansstone_1602622355_2419294127654324172_2394650725.webp',
    full: '/gallery/full/romansstone_1602622355_2419294127654324172_2394650725.webp',
    alt: 'Completed sandstone cladding on retaining wall section',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1604259561 — Stone feature wall ===
  {
    id: 'romansstone_1604259561_2433028003958428549_2394650725',
    thumb: '/gallery/thumbs/romansstone_1604259561_2433028003958428549_2394650725.webp',
    full: '/gallery/full/romansstone_1604259561_2433028003958428549_2394650725.webp',
    alt: 'Worker installing natural stone feature wall panel',
    category: 'on-the-tools',
    featured: false,
  },

  // === Timestamp 1606074993 — Sandstone block building ===
  {
    id: 'romansstone_1606074993_2448256950024466379_2394650725',
    thumb: '/gallery/thumbs/romansstone_1606074993_2448256950024466379_2394650725.webp',
    full: '/gallery/full/romansstone_1606074993_2448256950024466379_2394650725.webp',
    alt: 'Sandstone block construction on new residential building',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1606074993_2448256950041148728_2394650725',
    thumb: '/gallery/thumbs/romansstone_1606074993_2448256950041148728_2394650725.webp',
    full: '/gallery/full/romansstone_1606074993_2448256950041148728_2394650725.webp',
    alt: 'Split-face sandstone block wall rising on building site',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1606074993_2448256950049593144_2394650725',
    thumb: '/gallery/thumbs/romansstone_1606074993_2448256950049593144_2394650725.webp',
    full: '/gallery/full/romansstone_1606074993_2448256950049593144_2394650725.webp',
    alt: 'Sandstone block wall with doorway opening in new build',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1606074993_2448256950057870571_2394650725',
    thumb: '/gallery/thumbs/romansstone_1606074993_2448256950057870571_2394650725.webp',
    full: '/gallery/full/romansstone_1606074993_2448256950057870571_2394650725.webp',
    alt: 'Sandstone block building under construction with framing',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1606074993_2448256950066342376_2394650725',
    thumb: '/gallery/thumbs/romansstone_1606074993_2448256950066342376_2394650725.webp',
    full: '/gallery/full/romansstone_1606074993_2448256950066342376_2394650725.webp',
    alt: 'Sandstone block exterior wall nearing completion',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1606074993_2448256950091494393_2394650725',
    thumb: '/gallery/thumbs/romansstone_1606074993_2448256950091494393_2394650725.webp',
    full: '/gallery/full/romansstone_1606074993_2448256950091494393_2394650725.webp',
    alt: 'Completed sandstone block building exterior wall',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1606764857 — Natural stone feature wall ===
  {
    id: 'romansstone_1606764857_2454043952124684130_2394650725',
    thumb: '/gallery/thumbs/romansstone_1606764857_2454043952124684130_2394650725.webp',
    full: '/gallery/full/romansstone_1606764857_2454043952124684130_2394650725.webp',
    alt: 'Natural stone feature wall with irregular block pattern',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1606764857_2454043952141337092_2394650725',
    thumb: '/gallery/thumbs/romansstone_1606764857_2454043952141337092_2394650725.webp',
    full: '/gallery/full/romansstone_1606764857_2454043952141337092_2394650725.webp',
    alt: 'Stone feature wall construction with mortar joints',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1606764857_2454043952258842697_2394650725',
    thumb: '/gallery/thumbs/romansstone_1606764857_2454043952258842697_2394650725.webp',
    full: '/gallery/full/romansstone_1606764857_2454043952258842697_2394650725.webp',
    alt: 'Completed natural stone feature wall with mixed textures',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1607023035 — Hand dressing sandstone ===
  {
    id: 'romansstone_1607023035_2456209702671200734_2394650725',
    thumb: '/gallery/thumbs/romansstone_1607023035_2456209702671200734_2394650725.webp',
    full: '/gallery/full/romansstone_1607023035_2456209702671200734_2394650725.webp',
    alt: 'Craftsman hand-dressing sandstone slab with mallet and chisel',
    category: 'on-the-tools',
    featured: false,
  },

  // === Timestamp 1607369629 — Harbour seawall repointing ===
  {
    id: 'romansstone_1607369629_2459117142135976036_2394650725',
    thumb: '/gallery/thumbs/romansstone_1607369629_2459117142135976036_2394650725.webp',
    full: '/gallery/full/romansstone_1607369629_2459117142135976036_2394650725.webp',
    alt: 'Stonemason repointing sandstone seawall at harbour wharf',
    category: 'on-the-tools',
    featured: false,
  },

  // === Timestamp 1610048834 — Heritage brick repair ===
  {
    id: 'romansstone_1610048834_2481591947078654951_2394650725',
    thumb: '/gallery/thumbs/romansstone_1610048834_2481591947078654951_2394650725.webp',
    full: '/gallery/full/romansstone_1610048834_2481591947078654951_2394650725.webp',
    alt: 'Heritage sandstone and brick wall with replacement blocks',
    category: 'heritage',
    featured: false,
  },
  {
    id: 'romansstone_1610048834_2481591947095314440_2394650725',
    thumb: '/gallery/thumbs/romansstone_1610048834_2481591947095314440_2394650725.webp',
    full: '/gallery/full/romansstone_1610048834_2481591947095314440_2394650725.webp',
    alt: 'Mixed sandstone and brick heritage wall restoration',
    category: 'heritage',
    featured: false,
  },
  {
    id: 'romansstone_1610048834_2481591947095438166_2394650725',
    thumb: '/gallery/thumbs/romansstone_1610048834_2481591947095438166_2394650725.webp',
    full: '/gallery/full/romansstone_1610048834_2481591947095438166_2394650725.webp',
    alt: 'Brick and stone heritage wall with new mortar joints',
    category: 'heritage',
    featured: false,
  },
  {
    id: 'romansstone_1610048834_2481591947112130223_2394650725',
    thumb: '/gallery/thumbs/romansstone_1610048834_2481591947112130223_2394650725.webp',
    full: '/gallery/full/romansstone_1610048834_2481591947112130223_2394650725.webp',
    alt: 'Heritage wall restoration with matching replacement blocks',
    category: 'heritage',
    featured: false,
  },

  // === Timestamp 1610308835 — Stone fireplace cladding ===
  {
    id: 'romansstone_1610308835_2483772994075744932_2394650725',
    thumb: '/gallery/thumbs/romansstone_1610308835_2483772994075744932_2394650725.webp',
    full: '/gallery/full/romansstone_1610308835_2483772994075744932_2394650725.webp',
    alt: 'Stunning stone veneer fireplace surround in living room',
    category: 'completed',
    featured: true,
  },
  {
    id: 'romansstone_1610308835_2483772994092330738_2394650725',
    thumb: '/gallery/thumbs/romansstone_1610308835_2483772994092330738_2394650725.webp',
    full: '/gallery/full/romansstone_1610308835_2483772994092330738_2394650725.webp',
    alt: 'Natural stone fireplace feature wall with timber mantel',
    category: 'completed',
    featured: false,
  },
  {
    id: 'romansstone_1610308835_2483772994100745426_2394650725',
    thumb: '/gallery/thumbs/romansstone_1610308835_2483772994100745426_2394650725.webp',
    full: '/gallery/full/romansstone_1610308835_2483772994100745426_2394650725.webp',
    alt: 'Interior stone cladding fireplace during installation',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1610308835_2483772994193040023_2394650725',
    thumb: '/gallery/thumbs/romansstone_1610308835_2483772994193040023_2394650725.webp',
    full: '/gallery/full/romansstone_1610308835_2483772994193040023_2394650725.webp',
    alt: 'Completed stone veneer fireplace from side angle',
    category: 'completed',
    featured: false,
  },

  // === Timestamp 1611359339 — Sandstone blocks reclaimed ===
  {
    id: 'romansstone_1611359339_2492585257750451206_2394650725',
    thumb: '/gallery/thumbs/romansstone_1611359339_2492585257750451206_2394650725.webp',
    full: '/gallery/full/romansstone_1611359339_2492585257750451206_2394650725.webp',
    alt: 'Reclaimed sandstone block on grass ready for restoration',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1611359339_2492585257758727958_2394650725',
    thumb: '/gallery/thumbs/romansstone_1611359339_2492585257758727958_2394650725.webp',
    full: '/gallery/full/romansstone_1611359339_2492585257758727958_2394650725.webp',
    alt: 'Heritage sandstone block salvaged for reuse',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1611359339_2492585257775476407_2394650725',
    thumb: '/gallery/thumbs/romansstone_1611359339_2492585257775476407_2394650725.webp',
    full: '/gallery/full/romansstone_1611359339_2492585257775476407_2394650725.webp',
    alt: 'Salvaged sandstone blocks prepared for heritage wall',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1611359339_2492585257775542069_2394650725',
    thumb: '/gallery/thumbs/romansstone_1611359339_2492585257775542069_2394650725.webp',
    full: '/gallery/full/romansstone_1611359339_2492585257775542069_2394650725.webp',
    alt: 'Reclaimed sandstone blocks sorted for restoration project',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1612125180 — Stonemason hand-dressing ===
  {
    id: 'romansstone_1612125180_2499009601087142003_2394650725',
    thumb: '/gallery/thumbs/romansstone_1612125180_2499009601087142003_2394650725.webp',
    full: '/gallery/full/romansstone_1612125180_2499009601087142003_2394650725.webp',
    alt: 'Minas hand-dressing sandstone slab with textured finish',
    category: 'on-the-tools',
    featured: true,
  },

  // === Timestamp 1612767326 — Power tool stone cutting ===
  {
    id: 'romansstone_1612767326_2504396312730193619_2394650725',
    thumb: '/gallery/thumbs/romansstone_1612767326_2504396312730193619_2394650725.webp',
    full: '/gallery/full/romansstone_1612767326_2504396312730193619_2394650725.webp',
    alt: 'Stonemason using power tool to texture sandstone slab',
    category: 'on-the-tools',
    featured: false,
  },
  {
    id: 'romansstone_1612767326_2504396312747073529_2394650725',
    thumb: '/gallery/thumbs/romansstone_1612767326_2504396312747073529_2394650725.webp',
    full: '/gallery/full/romansstone_1612767326_2504396312747073529_2394650725.webp',
    alt: 'Power tool dressing sandstone with bush-hammered finish',
    category: 'on-the-tools',
    featured: false,
  },
  {
    id: 'romansstone_1612767326_2504396312755531386_2394650725',
    thumb: '/gallery/thumbs/romansstone_1612767326_2504396312755531386_2394650725.webp',
    full: '/gallery/full/romansstone_1612767326_2504396312755531386_2394650725.webp',
    alt: 'Textured sandstone slab being shaped with rotary tool',
    category: 'on-the-tools',
    featured: false,
  },
  {
    id: 'romansstone_1612767326_2504396312864589329_2394650725',
    thumb: '/gallery/thumbs/romansstone_1612767326_2504396312864589329_2394650725.webp',
    full: '/gallery/full/romansstone_1612767326_2504396312864589329_2394650725.webp',
    alt: 'Finished hand-textured sandstone slab on workbench',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1615231275 — Sandstone retaining wall harbour ===
  {
    id: 'romansstone_1615231275_2525065410787023410_2394650725',
    thumb: '/gallery/thumbs/romansstone_1615231275_2525065410787023410_2394650725.webp',
    full: '/gallery/full/romansstone_1615231275_2525065410787023410_2394650725.webp',
    alt: 'Sandstone block retaining wall under construction at harbour',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1615231275_2525065410803766922_2394650725',
    thumb: '/gallery/thumbs/romansstone_1615231275_2525065410803766922_2394650725.webp',
    full: '/gallery/full/romansstone_1615231275_2525065410803766922_2394650725.webp',
    alt: 'Harbour sandstone retaining wall with new mortar joints',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1615231275_2525065410812121155_2394650725',
    thumb: '/gallery/thumbs/romansstone_1615231275_2525065410812121155_2394650725.webp',
    full: '/gallery/full/romansstone_1615231275_2525065410812121155_2394650725.webp',
    alt: 'Sandstone seawall block wall nearing completion',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1615231275_2525065410829033895_2394650725',
    thumb: '/gallery/thumbs/romansstone_1615231275_2525065410829033895_2394650725.webp',
    full: '/gallery/full/romansstone_1615231275_2525065410829033895_2394650725.webp',
    alt: 'Completed harbour sandstone retaining wall section',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1617135591 — Team building sandstone chimney ===
  {
    id: 'romansstone_1617135591_2541039971017938059_2394650725',
    thumb: '/gallery/thumbs/romansstone_1617135591_2541039971017938059_2394650725.webp',
    full: '/gallery/full/romansstone_1617135591_2541039971017938059_2394650725.webp',
    alt: 'Two stonemasons building sandstone chimney on rooftop',
    category: 'on-the-tools',
    featured: true,
  },
  {
    id: 'romansstone_1617135591_2541039971026107701_2394650725',
    thumb: '/gallery/thumbs/romansstone_1617135591_2541039971026107701_2394650725.webp',
    full: '/gallery/full/romansstone_1617135591_2541039971026107701_2394650725.webp',
    alt: 'Sandstone chimney construction with spirit level check',
    category: 'on-the-tools',
    featured: false,
  },
  {
    id: 'romansstone_1617135591_2541039971043089004_2394650725',
    thumb: '/gallery/thumbs/romansstone_1617135591_2541039971043089004_2394650725.webp',
    full: '/gallery/full/romansstone_1617135591_2541039971043089004_2394650725.webp',
    alt: 'Hand-dressed sandstone blocks being laid for chimney',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1617135591_2541039971051481684_2394650725',
    thumb: '/gallery/thumbs/romansstone_1617135591_2541039971051481684_2394650725.webp',
    full: '/gallery/full/romansstone_1617135591_2541039971051481684_2394650725.webp',
    alt: 'Sandstone chimney stack nearing completion on rooftop',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1618870848 — Natural stone cladding close-up ===
  {
    id: 'romansstone_1618870848_2555596362608847162_2394650725',
    thumb: '/gallery/thumbs/romansstone_1618870848_2555596362608847162_2394650725.webp',
    full: '/gallery/full/romansstone_1618870848_2555596362608847162_2394650725.webp',
    alt: 'Close-up of natural sandstone crazy paving texture',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1618870848_2555596362625659331_2394650725',
    thumb: '/gallery/thumbs/romansstone_1618870848_2555596362625659331_2394650725.webp',
    full: '/gallery/full/romansstone_1618870848_2555596362625659331_2394650725.webp',
    alt: 'Natural stone cladding detail with irregular pattern',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1618870848_2555596362634032473_2394650725',
    thumb: '/gallery/thumbs/romansstone_1618870848_2555596362634032473_2394650725.webp',
    full: '/gallery/full/romansstone_1618870848_2555596362634032473_2394650725.webp',
    alt: 'Sandstone crazy paving wall texture close-up',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1619658957 — Stone cladding on exterior ===
  {
    id: 'romansstone_1619658957_2562207499374982279_2394650725',
    thumb: '/gallery/thumbs/romansstone_1619658957_2562207499374982279_2394650725.webp',
    full: '/gallery/full/romansstone_1619658957_2562207499374982279_2394650725.webp',
    alt: 'Natural stone cladding on residential exterior in progress',
    category: 'on-the-tools',
    featured: false,
  },
  {
    id: 'romansstone_1619658957_2562207499391743368_2394650725',
    thumb: '/gallery/thumbs/romansstone_1619658957_2562207499391743368_2394650725.webp',
    full: '/gallery/full/romansstone_1619658957_2562207499391743368_2394650725.webp',
    alt: 'Stone cladding feature wall on residential building facade',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1619658957_2562207499400144206_2394650725',
    thumb: '/gallery/thumbs/romansstone_1619658957_2562207499400144206_2394650725.webp',
    full: '/gallery/full/romansstone_1619658957_2562207499400144206_2394650725.webp',
    alt: 'Exterior stone cladding with materials on-site',
    category: 'on-the-tools',
    featured: false,
  },
  {
    id: 'romansstone_1619658957_2562207499408600612_2394650725',
    thumb: '/gallery/thumbs/romansstone_1619658957_2562207499408600612_2394650725.webp',
    full: '/gallery/full/romansstone_1619658957_2562207499408600612_2394650725.webp',
    alt: 'Residential stone cladding nearing completion on facade',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1622761644 — Brickwork at height / railway ===
  {
    id: 'romansstone_1622761644_2588234728206559451_2394650725',
    thumb: '/gallery/thumbs/romansstone_1622761644_2588234728206559451_2394650725.webp',
    full: '/gallery/full/romansstone_1622761644_2588234728206559451_2394650725.webp',
    alt: 'Brickwork repair at height above railway infrastructure',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1622761644_2588234728223400768_2394650725',
    thumb: '/gallery/thumbs/romansstone_1622761644_2588234728223400768_2394650725.webp',
    full: '/gallery/full/romansstone_1622761644_2588234728223400768_2394650725.webp',
    alt: 'Brick parapet repair on elevated railway structure',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1622761644_2588234728223407629_2394650725',
    thumb: '/gallery/thumbs/romansstone_1622761644_2588234728223407629_2394650725.webp',
    full: '/gallery/full/romansstone_1622761644_2588234728223407629_2394650725.webp',
    alt: 'Structural brickwork repair on railway overpass',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1622761644_2588234728231894423_2394650725',
    thumb: '/gallery/thumbs/romansstone_1622761644_2588234728231894423_2394650725.webp',
    full: '/gallery/full/romansstone_1622761644_2588234728231894423_2394650725.webp',
    alt: 'Elevated brickwork construction with crane on-site',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1622761644_2588234728240198238_2394650725',
    thumb: '/gallery/thumbs/romansstone_1622761644_2588234728240198238_2394650725.webp',
    full: '/gallery/full/romansstone_1622761644_2588234728240198238_2394650725.webp',
    alt: 'Completed brick parapet on railway infrastructure',
    category: 'structural',
    featured: false,
  },

  // === Timestamp 1625099894 — Luxury sandstone bathroom ===
  {
    id: 'romansstone_1625099894_2607849386215395716_2394650725',
    thumb: '/gallery/thumbs/romansstone_1625099894_2607849386215395716_2394650725.webp',
    full: '/gallery/full/romansstone_1625099894_2607849386215395716_2394650725.webp',
    alt: 'Luxury sandstone bathroom with freestanding bath and fireplace',
    category: 'completed',
    featured: true,
  },
  {
    id: 'romansstone_1625099894_2607849386223709744_2394650725',
    thumb: '/gallery/thumbs/romansstone_1625099894_2607849386223709744_2394650725.webp',
    full: '/gallery/full/romansstone_1625099894_2607849386223709744_2394650725.webp',
    alt: 'Sandstone block feature wall in premium bathroom design',
    category: 'completed',
    featured: false,
  },
  {
    id: 'romansstone_1625099894_2607849386240562495_2394650725',
    thumb: '/gallery/thumbs/romansstone_1625099894_2607849386240562495_2394650725.webp',
    full: '/gallery/full/romansstone_1625099894_2607849386240562495_2394650725.webp',
    alt: 'Hand-dressed sandstone interior with pendant lighting',
    category: 'completed',
    featured: false,
  },
  {
    id: 'romansstone_1625099894_2607849386248772706_2394650725',
    thumb: '/gallery/thumbs/romansstone_1625099894_2607849386248772706_2394650725.webp',
    full: '/gallery/full/romansstone_1625099894_2607849386248772706_2394650725.webp',
    alt: 'Premium sandstone bathroom feature wall detail',
    category: 'completed',
    featured: false,
  },

  // === Timestamp 1637701918 — Carved sandstone posts ===
  {
    id: 'romansstone_1637701918_2713562825154306254_2394650725',
    thumb: '/gallery/thumbs/romansstone_1637701918_2713562825154306254_2394650725.webp',
    full: '/gallery/full/romansstone_1637701918_2713562825154306254_2394650725.webp',
    alt: 'Hand-carved sandstone posts with textured finish in workshop',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1637701918_2713562825489810455_2394650725',
    thumb: '/gallery/thumbs/romansstone_1637701918_2713562825489810455_2394650725.webp',
    full: '/gallery/full/romansstone_1637701918_2713562825489810455_2394650725.webp',
    alt: 'Dressed sandstone column pieces ready for installation',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1637885997 — Crazy paving stone wall ===
  {
    id: 'romansstone_1637885997_2715106991281766517_2394650725',
    thumb: '/gallery/thumbs/romansstone_1637885997_2715106991281766517_2394650725.webp',
    full: '/gallery/full/romansstone_1637885997_2715106991281766517_2394650725.webp',
    alt: 'Completed blue stone crazy paving feature wall on verandah',
    category: 'completed',
    featured: true,
  },
  {
    id: 'romansstone_1637885997_2715106991583738458_2394650725',
    thumb: '/gallery/thumbs/romansstone_1637885997_2715106991583738458_2394650725.webp',
    full: '/gallery/full/romansstone_1637885997_2715106991583738458_2394650725.webp',
    alt: 'Stone crazy paving wall with garden hedge backdrop',
    category: 'completed',
    featured: false,
  },

  // === Timestamp 1638307738 — Sandstone retaining wall ===
  {
    id: 'romansstone_1638307738_2718644816887226191_2394650725',
    thumb: '/gallery/thumbs/romansstone_1638307738_2718644816887226191_2394650725.webp',
    full: '/gallery/full/romansstone_1638307738_2718644816887226191_2394650725.webp',
    alt: 'New sandstone block retaining wall with timber deck beyond',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1639039203 — Arch and structural stonework ===
  {
    id: 'romansstone_1639039203_2724780787002449114_2394650725',
    thumb: '/gallery/thumbs/romansstone_1639039203_2724780787002449114_2394650725.webp',
    full: '/gallery/full/romansstone_1639039203_2724780787002449114_2394650725.webp',
    alt: 'Sandstone arch formwork under construction on-site',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1639039203_2724780787019025919_2394650725',
    thumb: '/gallery/thumbs/romansstone_1639039203_2724780787019025919_2394650725.webp',
    full: '/gallery/full/romansstone_1639039203_2724780787019025919_2394650725.webp',
    alt: 'Sandstone arch with rebar reinforcement being built',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1639039203_2724780787027413077_2394650725',
    thumb: '/gallery/thumbs/romansstone_1639039203_2724780787027413077_2394650725.webp',
    full: '/gallery/full/romansstone_1639039203_2724780787027413077_2394650725.webp',
    alt: 'Workers positioning large sandstone block with lifting gear',
    category: 'on-the-tools',
    featured: false,
  },
  {
    id: 'romansstone_1639039203_2724780787027625834_2394650725',
    thumb: '/gallery/thumbs/romansstone_1639039203_2724780787027625834_2394650725.webp',
    full: '/gallery/full/romansstone_1639039203_2724780787027625834_2394650725.webp',
    alt: 'Sandstone arch construction with structural formwork',
    category: 'stonework',
    featured: false,
  },

  // === Timestamp 1700556302 — Structural retaining wall ===
  {
    id: 'romansstone_1700556302_3240823616257706375_2394650725',
    thumb: '/gallery/thumbs/romansstone_1700556302_3240823616257706375_2394650725.webp',
    full: '/gallery/full/romansstone_1700556302_3240823616257706375_2394650725.webp',
    alt: 'Retaining wall construction with block work and drainage',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1700556302_3240823616257779047_2394650725',
    thumb: '/gallery/thumbs/romansstone_1700556302_3240823616257779047_2394650725.webp',
    full: '/gallery/full/romansstone_1700556302_3240823616257779047_2394650725.webp',
    alt: 'Block retaining wall with stepped foundation design',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1700556302_3240823616266100581_2394650725',
    thumb: '/gallery/thumbs/romansstone_1700556302_3240823616266100581_2394650725.webp',
    full: '/gallery/full/romansstone_1700556302_3240823616266100581_2394650725.webp',
    alt: 'Stepped structural retaining wall with staircase formwork',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1700556302_3240823616266149185_2394650725',
    thumb: '/gallery/thumbs/romansstone_1700556302_3240823616266149185_2394650725.webp',
    full: '/gallery/full/romansstone_1700556302_3240823616266149185_2394650725.webp',
    alt: 'Retaining wall and stairs under construction at residence',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1700556302_3240823616450756136_2394650725',
    thumb: '/gallery/thumbs/romansstone_1700556302_3240823616450756136_2394650725.webp',
    full: '/gallery/full/romansstone_1700556302_3240823616450756136_2394650725.webp',
    alt: 'Completed structural retaining wall with drainage system',
    category: 'structural',
    featured: false,
  },

  // === Timestamp 1718624066 — Brick house extension ===
  {
    id: 'romansstone_1718624066_3392386998331828962_2394650725',
    thumb: '/gallery/thumbs/romansstone_1718624066_3392386998331828962_2394650725.webp',
    full: '/gallery/full/romansstone_1718624066_3392386998331828962_2394650725.webp',
    alt: 'Residential brick building extension with concrete slab',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1718624066_3392386998331830110_2394650725',
    thumb: '/gallery/thumbs/romansstone_1718624066_3392386998331830110_2394650725.webp',
    full: '/gallery/full/romansstone_1718624066_3392386998331830110_2394650725.webp',
    alt: 'Dark brick residential extension under construction',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1718624066_3392386998390587221_2394650725',
    thumb: '/gallery/thumbs/romansstone_1718624066_3392386998390587221_2394650725.webp',
    full: '/gallery/full/romansstone_1718624066_3392386998390587221_2394650725.webp',
    alt: 'New brick building with gable roof framing visible',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1718624066_3392386998600355063_2394650725',
    thumb: '/gallery/thumbs/romansstone_1718624066_3392386998600355063_2394650725.webp',
    full: '/gallery/full/romansstone_1718624066_3392386998600355063_2394650725.webp',
    alt: 'Brick residential construction with scaffolding on-site',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1718624066_3392386998868872672_2394650725',
    thumb: '/gallery/thumbs/romansstone_1718624066_3392386998868872672_2394650725.webp',
    full: '/gallery/full/romansstone_1718624066_3392386998868872672_2394650725.webp',
    alt: 'Residential brick building exterior taking shape',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1718624066_3392386999112060611_2394650725',
    thumb: '/gallery/thumbs/romansstone_1718624066_3392386999112060611_2394650725.webp',
    full: '/gallery/full/romansstone_1718624066_3392386999112060611_2394650725.webp',
    alt: 'Brick home extension nearing lockup stage',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1718624066_3392386999816555769_2394650725',
    thumb: '/gallery/thumbs/romansstone_1718624066_3392386999816555769_2394650725.webp',
    full: '/gallery/full/romansstone_1718624066_3392386999816555769_2394650725.webp',
    alt: 'Brick house with sandstone entry pillars and balustrades',
    category: 'completed',
    featured: false,
  },

  // === Timestamp 1766279271 — Harbour morning view ===
  {
    id: 'romansstone_1766279271_3792147836721841929_2394650725',
    thumb: '/gallery/thumbs/romansstone_1766279271_3792147836721841929_2394650725.webp',
    full: '/gallery/full/romansstone_1766279271_3792147836721841929_2394650725.webp',
    alt: 'Misty harbour morning view from sandstone seawall worksite',
    category: 'on-the-tools',
    featured: false,
  },

  // === Timestamp 1766296611 — Block retaining wall with excavator ===
  {
    id: 'romansstone_1766296611_3792293300662314514_2394650725',
    thumb: '/gallery/thumbs/romansstone_1766296611_3792293300662314514_2394650725.webp',
    full: '/gallery/full/romansstone_1766296611_3792293300662314514_2394650725.webp',
    alt: 'Mini excavator and block retaining wall construction',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1766296611_3792293300662324416_2394650725',
    thumb: '/gallery/thumbs/romansstone_1766296611_3792293300662324416_2394650725.webp',
    full: '/gallery/full/romansstone_1766296611_3792293300662324416_2394650725.webp',
    alt: 'Block retaining wall with stepped design at residence',
    category: 'structural',
    featured: false,
  },
  {
    id: 'romansstone_1766296611_3792293300662326196_2394650725',
    thumb: '/gallery/thumbs/romansstone_1766296611_3792293300662326196_2394650725.webp',
    full: '/gallery/full/romansstone_1766296611_3792293300662326196_2394650725.webp',
    alt: 'Harbour sandstone wall with wharf timbers at low tide',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1766296611_3792293300662346884_2394650725',
    thumb: '/gallery/thumbs/romansstone_1766296611_3792293300662346884_2394650725.webp',
    full: '/gallery/full/romansstone_1766296611_3792293300662346884_2394650725.webp',
    alt: 'Sandstone seawall formwork in tidal harbour zone',
    category: 'stonework',
    featured: false,
  },
  {
    id: 'romansstone_1766296611_3792293300779807959_2394650725',
    thumb: '/gallery/thumbs/romansstone_1766296611_3792293300779807959_2394650725.webp',
    full: '/gallery/full/romansstone_1766296611_3792293300779807959_2394650725.webp',
    alt: 'Blue stone crazy paving feature wall with spacers curing',
    category: 'stonework',
    featured: false,
  },
];

export const categories: { value: GalleryCategory | 'all'; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'heritage', label: 'Heritage' },
  { value: 'stonework', label: 'Stonework' },
  { value: 'structural', label: 'Structural' },
  { value: 'concrete', label: 'Concrete & Remedial' },
  { value: 'completed', label: 'Completed' },
  { value: 'on-the-tools', label: 'On The Tools' },
];
