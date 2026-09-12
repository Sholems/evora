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

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const displayImage =
    isHovered && product.images.length > 1 ? product.images[1] : product.images[0];

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
            {/* Primary & Secondary Image Transition */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={displayImage}
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
                <ArrowUpRight className="w-3 h-3" />
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
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] uppercase tracking-luxury text-espresso-muted font-light">
              <span>{product.category}</span>
              {product.colors && product.colors.length > 0 && (
                <span className="text-espresso-muted/70">{product.colors.length} Variants</span>
              )}
            </div>

            <h3 className="text-lg font-serif font-normal text-espresso leading-snug group-hover:text-bronze transition-colors">
              <Link href={`/products/${product.slug}`}>{product.name}</Link>
            </h3>

            <p className="text-xs text-espresso-muted/90 font-light line-clamp-2 leading-relaxed">
              {product.shortDescription}
            </p>
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
              <MessageCircle className="w-3.5 h-3.5" />
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
