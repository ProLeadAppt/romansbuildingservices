import { useRef } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryImage } from '@/data/galleryImages';

interface GalleryLightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  returnFocusTo?: HTMLElement | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const GalleryLightbox = ({
  images,
  currentIndex,
  returnFocusTo,
  onClose,
  onNavigate,
}: GalleryLightboxProps) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const current = images[currentIndex];

  // Invalid or emptied selections must not create a hidden modal/scroll lock.
  if (!current) return null;

  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;
  const goPrevious = () => { if (hasPrevious) onNavigate(currentIndex - 1); };
  const goNext = () => { if (hasNext) onNavigate(currentIndex + 1); };

  return (
    <Dialog.Root open onOpenChange={(open) => { if (!open) onClose(); }}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[90] bg-black/90" />
        <Dialog.Content
          className="fixed inset-0 z-[90] flex items-center justify-center outline-none"
          onOpenAutoFocus={(event) => {
            // This conditionally mounted dialog has no Radix DialogTrigger.
            openerRef.current = returnFocusTo ?? (document.activeElement instanceof HTMLElement ? document.activeElement : null);
            event.preventDefault();
            closeRef.current?.focus();
          }}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            if (openerRef.current?.isConnected) openerRef.current.focus({ preventScroll: true });
          }}
          onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
          onKeyDown={(event) => {
            if (event.defaultPrevented || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
            if (event.key === 'ArrowRight') { event.preventDefault(); goNext(); }
            if (event.key === 'ArrowLeft') { event.preventDefault(); goPrevious(); }
          }}
        >
          <Dialog.Title className="sr-only">Image lightbox</Dialog.Title>
          <Dialog.Close asChild>
            <button
              ref={closeRef}
              type="button"
              className="absolute top-4 right-4 z-10 p-2 rounded-md bg-black/70 hover:bg-black/90 text-white/70 hover:text-white transition-colors focus-visible:ring-white focus-visible:ring-offset-black"
              aria-label="Close lightbox"
            >
              <X className="w-8 h-8" aria-hidden="true" />
            </button>
          </Dialog.Close>

          {/* Keep boundary controls focusable so navigation never removes focus. */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={goPrevious}
              aria-disabled={!hasPrevious}
              className="absolute left-4 z-10 p-2 rounded-md bg-black/70 hover:bg-black/90 text-white/70 hover:text-white transition-colors aria-disabled:opacity-30 aria-disabled:cursor-default focus-visible:ring-white focus-visible:ring-offset-black"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-10 h-10" aria-hidden="true" />
            </button>
          )}

          <img
            src={current.full}
            alt={current.alt}
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          />

          {images.length > 1 && (
            <button
              type="button"
              onClick={goNext}
              aria-disabled={!hasNext}
              className="absolute right-4 z-10 p-2 rounded-md bg-black/70 hover:bg-black/90 text-white/70 hover:text-white transition-colors aria-disabled:opacity-30 aria-disabled:cursor-default focus-visible:ring-white focus-visible:ring-offset-black"
              aria-label="Next image"
            >
              <ChevronRight className="w-10 h-10" aria-hidden="true" />
            </button>
          )}

          <Dialog.Description asChild>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90vw] rounded-md bg-black/70 px-3 py-2 text-center" aria-live="polite" aria-atomic="true">
              <p className="font-body text-sm text-white/70">{current.alt}</p>
              <p className="font-body text-xs text-white/60 mt-1">
                {currentIndex + 1} of {images.length}
              </p>
            </div>
          </Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
