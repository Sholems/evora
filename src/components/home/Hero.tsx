import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-[93vh] flex items-center justify-center overflow-hidden bg-espresso">
      {/* Background Editorial Visual with Subtle Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2000&auto=format&fit=crop"
          alt="EVORA Luxury Women's Fashion"
          className="w-full h-full object-cover object-[center_35%] opacity-45 scale-105 transition-transform duration-1000 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/50 to-transparent" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-espresso/30 to-espresso/80" />
      </div>

      {/* Hero Editorial Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center text-cream flex flex-col items-center">
        {/* Brand Eyebrow */}
        <div className="inline-flex items-center gap-3 mb-6">
          <span className="h-[1px] w-8 sm:w-12 bg-bronze-light/60" />
          <span className="text-[11px] sm:text-xs uppercase font-medium tracking-ultra-wide text-bronze-light">
            Las Vegas Atelier
          </span>
          <span className="h-[1px] w-8 sm:w-12 bg-bronze-light/60" />
        </div>

        {/* Monumental Hero Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight leading-[1.08] max-w-4xl text-cream-light">
          Luxury, Designed for Her.
        </h1>

        {/* Refined Supporting Copy */}
        <p className="mt-6 text-sm sm:text-base md:text-lg font-light text-cream-muted leading-relaxed max-w-2xl">
          Contemporary women&apos;s fashion, jewelry, handbags and accessories curated for the woman who knows her worth.
        </p>

        {/* Action CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/collections"
            className="w-full sm:w-auto px-8 py-4 bg-cream text-espresso hover:bg-white text-xs uppercase tracking-luxury font-medium transition-all duration-300 shadow-luxury flex items-center justify-center gap-2 group"
          >
            <span>Explore the Collection</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="/contact"
            className="w-full sm:w-auto px-8 py-4 border border-cream/40 text-cream hover:bg-cream/10 hover:border-cream text-xs uppercase tracking-luxury font-medium transition-all duration-300 flex items-center justify-center"
          >
            Contact EVORA
          </Link>
        </div>

        {/* Subtle Scroll Cue */}
        <div className="mt-16 sm:mt-20 flex flex-col items-center gap-2 text-cream-muted/60 text-[10px] uppercase tracking-widest">
          <span>Scroll to Explore</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
