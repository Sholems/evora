"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Product } from "@/types";
import { InquiryModal } from "@/components/common/InquiryModal";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, MessageCircle } from "lucide-react";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

const colorMap: Record<string, string> = {
  Espresso: "#2B211D",
  "Warm Espresso": "#342621",
  "Cream Noir": "#2B211D",
  "Deep Amber": "#8A4C27",
  "Desert Cream": "#F0E7D8",
  "Slate Black": "#1A1918",
  "Alabaster Cream": "#FAF5ED",
  Black: "#111111",
  "Midnight Black": "#0E0D0D",
  "Onyx Black": "#151414",
  "Pearl Cream": "#F6F0E6",
  "Pure Cream": "#FCFAF5",
  "Sand Cream": "#EAE0D1",
  "Ivory Cream": "#F7F2E8",
  "Natural Cream": "#F3EDE3",
  "Charcoal Noir": "#262322",
  "18k Warm Yellow Gold": "#C9A76E",
  "18k Yellow Gold": "#D4B07B",
  "18k White Gold": "#E3E4E6",
  "Polished Bronze": "#B89C72",
  "Natural Lustrous White & 18k Gold": "#EDE7DC",
  "Noir & Bronze": "#2B211D",
  "Champagne Cream": "#F3E8D5",
  "Cream & Espresso Palette": "#E8DEC8",
  "Reversible Espresso / Cream": "#2B211D",
  "Deep Espresso Tortoise": "#4A3228",
};

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedColorIndex, setSelectedColorIndex] = useState(0);

  const activeImage =
    product.images[selectedColorIndex] ||
    (isHovered && product.images.length > 1 ? product.images[1] : product.images[0]);

  return (
    <>
      <article
        className="group flex flex-col justify-between"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          {/* Image Container with Editorial 3:4 Ratio */}
          <Link
            href={`/products/${product.slug}`}
            className="block relative aspect-[3/4] overflow-hidden bg-cream-muted/40 mb-4 focus:outline-none"
          >
            {/* Primary & Swatch Image Transition */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeImage}
              alt={product.name}
              loading="lazy"
              className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105"
            />

            {/* Availability / New Tag */}
            <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
              {product.newArrival && (
                <span className="bg-espresso text-cream-light text-[10px] uppercase tracking-luxury font-medium py-1 px-2.5 shadow-sm">
                  New Arrival
                </span>
              )}
              {product.availability !== "Available" && (
                <span className="bg-cream/90 backdrop-blur-sm text-espresso text-[10px] uppercase tracking-wider py-0.5 px-2 border border-luxury">
                  {product.availability}
                </span>
              )}
            </div>

            {/* Quick-Hover Action Bar */}
            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-espresso/80 via-espresso/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-between gap-2">
              <span className="text-[11px] uppercase tracking-luxury text-cream-light font-medium flex items-center gap-1">
                <span>View Piece</span>
                <ArrowUpRight className="w-3 h-3 text-bronze-light" />
              </span>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setInquiryModalOpen(true);
                }}
                className="text-[10px] uppercase tracking-wider bg-cream text-espresso hover:bg-white px-2.5 py-1 transition-colors cursor-pointer"
              >
                Inquire
              </span>
            </div>
          </Link>

          {/* Product Meta */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-luxury text-espresso-muted font-light">
              <span className="text-bronze-rose">{product.category}</span>
              {product.colors && product.colors.length > 0 && (
                <span className="text-espresso-muted/80 text-[10px]">
                  {product.colors[selectedColorIndex] || `${product.colors.length} Variants`}
                </span>
              )}
            </div>

            <h3 className="text-lg font-serif font-normal text-espresso leading-snug group-hover:text-bronze-rose transition-colors">
              <Link href={`/products/${product.slug}`}>{product.name}</Link>
            </h3>

            <p className="text-xs text-espresso-muted/90 font-light line-clamp-2 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Interactive Color Swatches */}
            {product.colors && product.colors.length > 1 && (
              <div className="flex items-center gap-1.5 pt-1">
                {product.colors.map((color, idx) => {
                  const hex = colorMap[color] || "#C5A880";
                  const isSelected = selectedColorIndex === idx;
                  return (
                    <button
                      key={color}
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setSelectedColorIndex(idx);
                      }}
                      onMouseEnter={() => setSelectedColorIndex(idx)}
                      title={color}
                      className={`w-3.5 h-3.5 rounded-full border transition-all duration-200 ${
                        isSelected
                          ? "ring-1 ring-offset-1 ring-espresso scale-110 border-white"
                          : "border-black/20 hover:scale-105"
                      }`}
                      style={{ backgroundColor: hex }}
                      aria-label={`Select color ${color}`}
                    />
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="pt-3 mt-3 border-t border-luxury/60 flex items-center justify-between">
          <span className="text-sm font-medium text-espresso font-serif tracking-wide">
            {product.price || "Price Upon Inquiry"}
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setInquiryModalOpen(true)}
              className="text-[11px] uppercase tracking-luxury text-espresso hover:text-bronze font-medium py-1 px-1 transition-colors"
            >
              Inquire
            </button>
            <a
              href={siteConfig.generateWhatsAppUrl(product.name, product.category)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-espresso/70 hover:text-espresso p-1 transition-colors"
              title="Quick WhatsApp Inquiry"
            >
              <MessageCircle className="w-3.5 h-3.5 text-bronze-rose" />
            </a>
          </div>
        </div>
      </article>

      {/* Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        productName={product.name}
        category={product.category}
        price={product.price}
      />
    </>
  );
};
