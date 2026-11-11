import { galleryImages } from './galleryImages';

// Preserve all archive assets. Withhold these entries from public selections
// pending context or relevance review; this is not a finding about ownership.
export const withheldImageIds = new Set([
  'romansstone_1452322412_1158486817214519324_2394650725',
  'romansstone_1452669491_1161398328954149042_2394650725',
  'romansstone_1453101503_1165022313365330508_2394650725',
  'romansstone_1453245919_1166233759147317353_2394650725',
  'romansstone_1572463327_2166301860074648889_2394650725',
  'romansstone_1545465692_1939829282982638930_2394650725',
  'romansstone_1545465692_1939829283804890313_2394650725',
  'romansstone_1569835443_2144257572797370890_2394650725',
  'romansstone_1571859061_2161232914212472251_2394650725',
  'romansstone_1572809724_2169207652444741596_2394650725',
  'romansstone_1572809724_2169207652453069207_2394650725',
  'romansstone_1575058571_2188072348589333644_2394650725',
  'romansstone_1575756805_2193929554958326793_2394650725',
  'romansstone_1579724750_2227215093375181082_2394650725',
  'romansstone_1579724750_2227215093383768825_2394650725',
  'romansstone_1601449307_2409453884386221829_2394650725',
  'romansstone_1766296611_3792293300662326196_2394650725',
]);

// Selection does not independently verify the remaining photographs.
// All archive consumers must derive captions and selection from this list.
export const projectGalleryImages = galleryImages.filter((image) => !withheldImageIds.has(image.id));

export const selectArchiveImages = (ids: readonly string[]) =>
  ids.flatMap((id) => {
    const image = projectGalleryImages.find((entry) => entry.id === id);
    return image ? [image] : [];
  });

export const isArchiveImageWithheld = (src: string) =>
  galleryImages.some((image) => withheldImageIds.has(image.id) && (image.thumb === src || image.full === src));
