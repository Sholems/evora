import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blush-100 via-cream-soft to-cream">
      {/* Editorial High-Fashion Background with Soft Rose & Champagne Ambient Light */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=85&w=2200&auto=format&fit=crop"
          alt="EVORA Feminine Haute Luxury Fashion"
          className="w-full h-full object-cover object-[center_28%] opacity-35 sm:opacity-40 transition-transform duration-1000 ease-out scale-105"
        />

        {/* Ethereal Soft Rose & Champagne Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/60 to-blush-100/70" />
        <div className="absolute inset-0 bg-radial-gradient from-blush-rose/10 via-transparent to-cream/80 pointer-events-none" />

        {/* Feminine ambient glow spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blush-200/40 via-champagne/30 to-blush-rose/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Editorial Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
        {/* Feminine Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-1.5 rounded-full bg-blush-50/90 border border-bronze-rose/30 shadow-sm backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-bronze-rose" />
          <span className="text-[10px] sm:text-[11px] uppercase font-medium tracking-ultra-wide text-espresso-muted">
            Las Vegas Atelier &bull; Haute Collection
          </span>
          <Sparkles className="w-3.5 h-3.5 text-bronze-rose" />
        </div>

        {/* Monumental Hero Headline with Feminine Elegance */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight leading-[1.06] max-w-4xl text-espresso">
          Luxury, Designed <span className="italic font-normal text-bronze-rose">for Her.</span>
        </h1>

        {/* Refined Supporting Copy */}
        <p className="mt-6 text-sm sm:text-base md:text-lg font-light text-espresso-muted leading-relaxed max-w-2xl">
          Contemporary women&apos;s fashion, jewelry, handbags and accessories curated for the woman who knows her worth.
          A poetic union of sculptural form, liquid silks, and quiet confidence.
        </p>

        {/* Soft, Refined Feminine Action CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/collections"
            className="w-full sm:w-auto px-9 py-4 bg-espresso text-cream-light hover:bg-black text-xs uppercase tracking-luxury font-medium transition-all duration-300 shadow-feminine hover:shadow-luxury-lg flex items-center justify-center gap-2 group"
          >
            <span>Explore the Collection</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-bronze-light" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-9 py-4 bg-cream-soft/80 hover:bg-blush-100 border border-espresso/25 hover:border-espresso text-espresso text-xs uppercase tracking-luxury font-medium transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
          >
            Contact Concierge
          </Link>
        </div>

        {/* Curated Category Quick-Jump Tags */}
        <div className="mt-12 hidden md:flex items-center gap-6 text-[11px] uppercase tracking-luxury text-espresso/70">
          <span className="text-bronze-rose font-serif italic normal-case text-sm">Discover:</span>
          {["Women's Fashion", "Handbags", "Fine Jewelry", "Silk & Cashmere"].map((item, idx) => (
            <Link
              key={idx}
              href={`/collections?category=${encodeURIComponent(item === "Fine Jewelry" ? "Jewelry" : item === "Silk & Cashmere" ? "Accessories" : item)}`}
              className="hover:text-espresso hover:border-b hover:border-bronze-rose pb-0.5 transition-all"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Subtle Scroll Cue */}
        <div className="mt-14 sm:mt-16 flex flex-col items-center gap-2 text-espresso-muted/60 text-[10px] uppercase tracking-widest">
          <span>Scroll to Experience</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-bronze-rose" />
        </div>
      </div>
    </section>
  );
};
