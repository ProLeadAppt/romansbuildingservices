import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { GalleryCategory } from '@/data/galleryImages';
import { projectGalleryImages } from '@/data/projectGallery';

// Category choices vary the examples; source photos are not tagged by suburb.
// This selection is illustrative, not evidence of local jobs or current activity.
const AREA_CATEGORIES: Record<string, GalleryCategory[]> = {
  'sydney-cbd': ['stonework', 'workshop-tools'],
  'eastern-suburbs': ['stonework', 'brickwork', 'concrete-structures'],
  'north-shore': ['stonework', 'brickwork'],
  'northern-beaches': ['concrete-structures', 'brickwork', 'stonework'],
  'inner-west': ['stonework', 'brickwork', 'workshop-tools'],
  'greater-sydney': ['brickwork', 'stonework'],
};

// FNV-1a hash for a deterministic per-suburb shuffle of the area's photo
// pool. Each suburb in an area sees a different 6-photo subset, so
// neighbouring suburb pages don't look like duplicate galleries.
const hash = (s: string): number => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h>>> 0;
};

interface SuburbGalleryProps {
  suburbSlug: string;
  suburbName: string;
  areaSlug: string;
  count?: number;
}

export const SuburbGallery = ({ suburbSlug, suburbName, areaSlug, count = 6 }: SuburbGalleryProps) => {
  const cats = AREA_CATEGORIES[areaSlug] ?? ['stonework'];
  const pool = projectGalleryImages.filter((img) => cats.includes(img.category));
  if (pool.length === 0) return null;

  const seed = hash(suburbSlug);
  const photos = pool
    .map((img, i) => ({ img, sort: hash(`${suburbSlug}:${i}:${seed}`) }))
    .sort((a, b) => a.sort - b.sort)
    .slice(0, count)
    .map((x) => x.img);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="mb-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl text-navy mb-3">
            Masonry details from the gallery
          </h2>
          <p className="font-body text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Browse stone finishes, brickwork and repair details from the Romans photo archive while planning work in {suburbName}. These examples are not a record of projects in this suburb or a guide to the condition of your property.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="relative aspect-square overflow-hidden rounded-md bg-stone-100">
              <img
                src={photo.thumb}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 font-body text-navy hover:text-amber transition-colors">
            Explore the photo archive <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SuburbGallery;
