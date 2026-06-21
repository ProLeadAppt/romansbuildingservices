import { useState, useMemo } from 'react';
import { GalleryLightbox } from './GalleryLightbox';
import type { GalleryImage, GalleryCategory } from '@/data/galleryImages';
import { categories } from '@/data/galleryImages';

interface GalleryGridProps {
  images: GalleryImage[];
}

export const GalleryGrid = ({ images }: GalleryGridProps) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'all'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return images;
    return images.filter((img) => img.category === activeCategory);
  }, [images, activeCategory]);

  return (
    <>
      {/* Category filter tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`font-body text-sm px-4 py-2 rounded-md transition-colors duration-200 ${
              activeCategory === cat.value
                ? 'bg-navy text-white'
                : 'bg-bg-light text-text-muted hover:bg-navy/10 hover:text-navy'
            }`}>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
        {filtered.map((image, index) => (
          <div
            key={image.id}
            className="break-inside-avoid mb-4 group cursor-pointer overflow-hidden rounded-lg relative"
            onClick={() => setLightboxIndex(index)}
          >
            <img
              src={image.thumb}
              alt={image.alt}
              loading="lazy"
              className="w-full h-auto block transition-transform duration-200 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 transition-colors duration-200 flex items-end p-3">
              <span className="font-body text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-navy/60 px-2 py-1 rounded">
                {categories.find((c) => c.value === image.category)?.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          images={filtered}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
};
