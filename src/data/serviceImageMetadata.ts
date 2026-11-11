import { projectGalleryImages } from './projectGallery';

// Measured dimensions are retained; captions come from the reviewed archive.
const dimensions: Record<string, { width: number; height: number }> = {
  "/gallery/thumbs/romansstone_1451642255_1152781246863726646_2394650725.webp": {
    "width": 600,
    "height": 600
  },
  "/gallery/thumbs/romansstone_1451942270_1155297957273885284_2394650725.webp": {
    "width": 600,
    "height": 600
  },
  "/gallery/thumbs/romansstone_1569273163_2139540821744323162_2394650725.webp": {
    "width": 600,
    "height": 600
  },
  "/gallery/thumbs/romansstone_1570002705_2145660669121556728_2394650725.webp": {
    "width": 359,
    "height": 359
  },
  "/gallery/thumbs/romansstone_1574104761_2180071211265247711_2394650725.webp": {
    "width": 600,
    "height": 600
  },
  "/gallery/thumbs/romansstone_1574278523_2181528827132774103_2394650725.webp": {
    "width": 600,
    "height": 600
  },
  "/gallery/thumbs/romansstone_1575057672_2188064802893944247_2394650725.webp": {
    "width": 360,
    "height": 360
  },
  "/gallery/thumbs/romansstone_1576003161_2195996136622601152_2394650725.webp": {
    "width": 600,
    "height": 600
  },
  "/gallery/thumbs/romansstone_1576440613_2199665757989086550_2394650725.webp": {
    "width": 600,
    "height": 600
  },
  "/gallery/thumbs/romansstone_1579724750_2227215093383768825_2394650725.webp": {
    "width": 600,
    "height": 600
  },
  "/gallery/thumbs/romansstone_1700556302_3240823616257706375_2394650725.webp": {
    "width": 600,
    "height": 600
  }
};

export const serviceImageMetadata: Record<string, { alt: string; width?: number; height?: number }> =
  Object.fromEntries(projectGalleryImages.flatMap((image) => [
    [image.thumb, { ...dimensions[image.thumb], alt: image.alt }],
    [image.full, { alt: image.alt }],
  ]));
