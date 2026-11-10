import { galleryImages } from './galleryImages';

// Keep the source archive intact. These entries are labelled as inspiration,
// ruins or village masonry there, and must not be presented as project evidence.
// Pixel review also found caption/content conflicts in the four 2016 entries.
// Withhold them pending provenance and caption review, not a claim about ownership.
const withheldImageIds = new Set([
  'romansstone_1452322412_1158486817214519324_2394650725',
  'romansstone_1452669491_1161398328954149042_2394650725',
  'romansstone_1453101503_1165022313365330508_2394650725',
  'romansstone_1453245919_1166233759147317353_2394650725',
  'romansstone_1572463327_2166301860074648889_2394650725',
]);

// This exclusion is not independent verification of every remaining photograph.
// Display, featured cards and structured data must use the same selection.
export const projectGalleryImages = galleryImages.filter((image) => !withheldImageIds.has(image.id));
