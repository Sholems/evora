"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LookbookEntry, LookHotspot } from "@/types";
import { siteConfig } from "@/config/site";
import { InquiryModal } from "@/components/common/InquiryModal";
import { MessageCircle, ArrowUpRight, Sparkles, X } from "lucide-react";

interface LookCardProps {
  look: LookbookEntry;
  index: number;
}

export const LookCard: React.FC<LookCardProps> = ({ look, index }) => {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryProduct, setInquiryProduct] = useState({ name: look.title, category: "Editorial Lookbook", price: "" });
  const [activeHotspot, setActiveHotspot] = useState<LookHotspot | null>(null);

  const isReversed = index % 2 !== 0;

  const handleOpenModal = (name: string, category = "Editorial Lookbook", price = "") => {
    setInquiryProduct({ name, category, price });
    setInquiryModalOpen(true);
  };

  return (
    <>
      <article className="py-16 sm:py-24 border-b border-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Main Visuals Column with Interactive Pins */}
          <div
            className={`lg:col-span-7 ${
              isReversed ? "lg:order-2" : "lg:order-1"
            } space-y-4`}
          >
            {/* Primary Hero Image with Hotspot Overlays */}
            <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/3] overflow-hidden bg-espresso shadow-luxury group">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={look.heroImage}
                alt={look.title}
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />

              <div className="absolute top-4 left-4 bg-espresso/80 backdrop-blur-sm text-cream-light text-[10px] uppercase tracking-luxury py-1 px-3">
                {look.season}
              </div>

              <div className="absolute bottom-4 right-4 bg-cream/90 backdrop-blur-sm text-espresso text-[11px] font-mono py-1 px-3">
                {look.locationNote}
              </div>

              {/* Interactive "Shop the Look" Pins */}
              {look.hotspots &&
                look.hotspots.map((spot) => {
                  const isSelected = activeHotspot?.id === spot.id;
                  return (
                    <div
                      key={spot.id}
                      className="absolute z-20"
                      style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    >
                      {/* Pulsing Pin Trigger */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveHotspot(isSelected ? null : spot);
                        }}
                        onMouseEnter={() => setActiveHotspot(spot)}
                        className="relative -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center bg-espresso/90 text-bronze-light border border-bronze-rose/50 shadow-hotspot hover:scale-110 transition-transform focus:outline-none"
                        aria-label={`Inspect ${spot.pieceName}`}
                      >
                        <span className="absolute inset-0 rounded-full bg-bronze-rose opacity-40 animate-ping" />
                        <Sparkles className="w-3.5 h-3.5 text-bronze-rose" />
                      </button>

                      {/* Floating Luxury Preview Popover */}
                      {isSelected && (
                        <div
                          className="absolute left-1/2 -translate-x-1/2 bottom-full mb-3 w-56 sm:w-64 bg-cream-soft text-espresso p-4 shadow-2xl border border-bronze-rose/40 z-30 animate-fade-in"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <div className="flex items-start justify-between gap-2 mb-1.5">
                            <span className="text-[10px] uppercase tracking-luxury text-bronze-rose font-medium">
                              {spot.role}
                            </span>
                            <button
                              type="button"
                              onClick={() => setActiveHotspot(null)}
                              className="text-espresso/60 hover:text-espresso p-0.5"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </div>

                          <h4 className="text-sm font-serif font-normal text-espresso leading-snug">
                            {spot.pieceName}
                          </h4>

                          {spot.price && (
                            <p className="text-xs font-serif font-medium text-espresso mt-1">
                              {spot.price}
                            </p>
                          )}

                          <div className="mt-3 pt-2.5 border-t border-luxury/70 flex items-center justify-between gap-2">
                            <Link
                              href={`/products/${spot.productId}`}
                              className="text-[10px] uppercase tracking-luxury text-espresso hover:text-bronze font-medium flex items-center gap-0.5"
                            >
                              <span>View Piece</span>
                              <ArrowUpRight className="w-3 h-3" />
                            </Link>

                            <button
                              type="button"
                              onClick={() => handleOpenModal(spot.pieceName, spot.role, spot.price)}
                              className="text-[10px] uppercase tracking-wider bg-espresso text-cream-light hover:bg-black py-1 px-2.5 transition-colors"
                            >
                              Inquire
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>

            {/* Supporting Close-Up Details */}
            {look.supportingImages.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {look.supportingImages.map((img, idx) => (
                  <div key={idx} className="relative aspect-[4/3] overflow-hidden bg-espresso shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img}
                      alt={`${look.title} detail ${idx + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Editorial Description Column */}
          <div
            className={`lg:col-span-5 ${
              isReversed ? "lg:order-1" : "lg:order-2"
            } space-y-6`}
          >
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-luxury text-bronze-rose font-medium">
                {look.title}
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif text-espresso font-normal leading-tight">
                {look.headline}
              </h3>
            </div>

            <p className="text-sm sm:text-base font-light text-espresso-muted leading-relaxed">
              {look.editorialCopy}
            </p>

            {/* Styled Pieces Breakdown */}
            <div className="border-t border-b border-luxury py-5 space-y-3">
              <span className="text-[11px] uppercase tracking-luxury text-espresso font-medium block">
                Styled Pieces in This Composition:
              </span>
              <ul className="space-y-2.5">
                {look.styledItems.map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between text-xs group">
                    <span className="text-espresso-muted text-[11px] uppercase tracking-wider">{item.role}</span>
                    <Link
                      href={`/products/${item.productId}`}
                      className="font-serif italic text-sm text-espresso hover:text-bronze transition-colors inline-flex items-center gap-1"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Look Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={() => handleOpenModal(look.title, "Editorial Lookbook")}
                className="px-6 py-3.5 bg-espresso text-cream-light hover:bg-black text-xs uppercase tracking-luxury font-medium transition-colors flex items-center justify-center gap-2 shadow-feminine"
              >
                <span>Inquire About This Look</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
              <a
                href={siteConfig.generateWhatsAppUrl(look.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 border border-espresso text-espresso hover:bg-espresso hover:text-cream text-xs uppercase tracking-luxury transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-bronze-rose" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </article>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        productName={inquiryProduct.name}
        category={inquiryProduct.category}
        price={inquiryProduct.price}
      />
    </>
  );
};
