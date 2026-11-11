import { useState, useMemo, useRef } from 'react';
import { GalleryLightbox } from './GalleryLightbox';
import type { GalleryImage, GalleryCategory } from '@/data/galleryImages';
import { categories } from '@/data/galleryImages';

interface GalleryGridProps {
  images: GalleryImage[];
}

export const GalleryGrid = ({ images }: GalleryGridProps) => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory | 'all'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxOpener = useRef<HTMLButtonElement | null>(null);

  const filtered = useMemo(() => {
    if (activeCategory === 'all') return images;
    return images.filter((img) => img.category === activeCategory);
  }, [images, activeCategory]);

  return (
    <>
      {/* Category filters */}
      <div role="group" aria-label="Filter project images" className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.value}
            type="button"
            aria-pressed={activeCategory === cat.value}
            onClick={() => { setLightboxIndex(null); setActiveCategory(cat.value); }}
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
          <button
            key={image.id}
            type="button"
            aria-haspopup="dialog"
            aria-label={`Open image ${index + 1}: ${image.alt}`}
            className="block w-full break-inside-avoid mb-4 group cursor-pointer overflow-hidden rounded-lg relative"
            onClick={(event) => { lightboxOpener.current = event.currentTarget; setLightboxIndex(index); }}
          >
            <img
              src={image.thumb}
              alt={image.alt}
              loading="lazy"
              className="w-full h-auto block transition-transform duration-200 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-navy/0 group-hover:bg-navy/40 group-focus-visible:bg-navy/40 transition-colors duration-200 flex items-end p-3">
              <span className="font-body text-xs text-white opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-200 bg-navy/60 px-2 py-1 rounded">
                {categories.find((c) => c.value === image.category)?.label}
              </span>
            </span>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <GalleryLightbox
          images={filtered}
          currentIndex={lightboxIndex}
          returnFocusTo={lightboxOpener.current}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
};
