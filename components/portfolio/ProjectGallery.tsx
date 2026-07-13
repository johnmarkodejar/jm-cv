"use client";

import { useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Images, X } from "lucide-react";
import type { GalleryImage } from "@/types";

// Layer order is back-to-front; each entry positions + rotates one shot
// of the collage. Kept to 3 slots — more than that reads as clutter at
// this container size, so extra shots are only reachable via the lightbox.
const LAYER_STYLES = [
  "absolute left-0 top-0 w-[57%] sm:w-[52%] -rotate-6 z-10",
  "absolute right-0 top-[6%] w-[57%] sm:w-[52%] rotate-3 z-20",
  "absolute left-1/2 bottom-0 w-[64%] sm:w-[58%] -translate-x-1/2 rotate-0 z-30",
];

export default function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const open = activeIndex !== null;

  const goTo = (delta: number) => {
    setActiveIndex((current) => current === null ? null : (current + delta + images.length) % images.length);
  };

  // Spread the collage across the set (first / middle / last) rather than
  // always the first three, so it represents more of the product.
  const collage = images.length <= 3
    ? images
    : [images[0], images[Math.floor((images.length - 1) / 2)], images[images.length - 1]];

  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && setActiveIndex(null)}>
      <button
        type="button"
        onClick={() => setActiveIndex(0)}
        className="group relative block w-full aspect-[16/12] sm:aspect-[16/9] my-4 sm:my-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg cursor-zoom-in"
      >
        {collage.map((shot, i) => (
          <span key={shot.src} className={LAYER_STYLES[i % LAYER_STYLES.length]}>
            <Image
              src={shot.src}
              alt={shot.alt}
              width={1440}
              height={900}
              className="w-full h-auto rounded-lg border border-border shadow-2xl shadow-black/50 bg-background transition-transform duration-300 group-hover:-translate-y-1.5"
            />
          </span>
        ))}
        {images.length > 1 && (
          <span className="absolute bottom-2 right-2 z-40 flex items-center gap-1.5 text-[11px] font-medium text-white bg-black/60 backdrop-blur px-2.5 py-1 rounded-full border border-white/10 group-hover:bg-black/75 transition-colors">
            <Images className="w-3 h-3" />
            View all {images.length} screenshots
          </span>
        )}
      </button>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-200" />
        <Dialog.Popup
          className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-10 outline-none"
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") goTo(-1);
            if (e.key === "ArrowRight") goTo(1);
          }}
        >
          {activeIndex !== null && (
            <>
              <Dialog.Close className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                <X className="w-5 h-5" />
                <span className="sr-only">Close</span>
              </Dialog.Close>

              <button
                type="button"
                onClick={() => goTo(-1)}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
                <span className="sr-only">Previous image</span>
              </button>

              <div className="max-w-5xl w-full flex flex-col items-center gap-4">
                <Image
                  key={images[activeIndex].src}
                  src={images[activeIndex].src}
                  alt={images[activeIndex].alt}
                  width={1440}
                  height={900}
                  className="w-full h-auto max-h-[75vh] object-contain rounded-lg border border-white/10"
                  priority
                />
                <div className="flex items-center gap-3 text-white/80 text-sm">
                  <span>{images[activeIndex].caption}</span>
                  <span className="text-white/40">
                    {activeIndex + 1} / {images.length}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => goTo(1)}
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
                <span className="sr-only">Next image</span>
              </button>
            </>
          )}
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
