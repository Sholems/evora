"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export const ProductGallery: React.FC<ProductGalleryProps> = ({ images, productName }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const prevImage = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Primary Display */}
      <div className="relative aspect-[3/4] overflow-hidden bg-cream-muted/30 border border-luxury/40 group">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[activeIndex]}
          alt={`${productName} — View ${activeIndex + 1}`}
          className="w-full h-full object-cover object-center transition-all duration-500 ease-out"
        />

        {/* Carousel Navigation Arrows if multiple */}
        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-cream/80 backdrop-blur-sm text-espresso hover:bg-white flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-cream/80 backdrop-blur-sm text-espresso hover:bg-white flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100 focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Image Counter & Fullscreen trigger */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2">
          <span className="bg-espresso/80 backdrop-blur-sm text-cream-light text-[10px] tracking-widest font-mono py-1 px-2.5">
            0{activeIndex + 1} / 0{images.length}
          </span>
          <button
            type="button"
            onClick={() => setIsZoomed(true)}
            className="w-7 h-7 bg-espresso/80 backdrop-blur-sm text-cream-light hover:text-white flex items-center justify-center transition-colors"
            title="Inspect Close-up"
            aria-label="Zoom image"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Thumbnail Selector */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((img, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`relative aspect-[3/4] overflow-hidden border transition-all ${
                activeIndex === idx
                  ? "border-espresso ring-1 ring-espresso opacity-100"
                  : "border-luxury opacity-60 hover:opacity-100"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                className="w-full h-full object-cover object-center"
              />
            </button>
          ))}
        </div>
      )}

      {/* Zoom Modal */}
      {isZoomed && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[activeIndex]}
              alt={`${productName} zoomed`}
              className="max-w-full max-h-[85vh] object-contain mx-auto"
            />
            <button
              type="button"
              onClick={() => setIsZoomed(false)}
              className="absolute -top-10 right-0 text-cream-light hover:text-bronze text-xs uppercase tracking-luxury"
            >
              Close [ESC]
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
