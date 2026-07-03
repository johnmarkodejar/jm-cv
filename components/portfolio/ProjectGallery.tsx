"use client";

import { useState } from "react";
import { Dialog } from "@base-ui/react/dialog";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/types";

export default function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const open = activeIndex !== null;

  const goTo = (delta: number) => {
    setActiveIndex((current) => current === null ? null : (current + delta + images.length) % images.length);
  };

  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && setActiveIndex(null)}>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {images.map((shot, i) => (
          <figure key={shot.src} className="group">
            <button
              type="button"
              onClick={() => setActiveIndex(i)}
              className="block w-full rounded-lg border border-border overflow-hidden bg-background cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={1440}
                height={900}
                className="w-full h-auto group-hover:scale-[1.03] transition-transform duration-300"
              />
            </button>
            <figcaption className="text-[11px] text-muted-foreground mt-1.5 text-center">
              {shot.caption}
            </figcaption>
          </figure>
        ))}
      </div>

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
