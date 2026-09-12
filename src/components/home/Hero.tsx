"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

interface HeroScene {
  tag: string;
  headlineMain: string;
  headlineAccent: string;
  copy: string;
  image: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export const Hero: React.FC = () => {
  const scenes: HeroScene[] = [
    {
      tag: "Las Vegas Atelier • Haute Collection",
      headlineMain: "Luxury, Designed ",
      headlineAccent: "for Her.",
      copy: "Contemporary women's fashion, jewelry, handbags and accessories curated for the woman who knows her worth. A poetic union of sculptural form, liquid silks, and quiet confidence.",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=85&w=2200&auto=format&fit=crop",
      primaryCtaText: "Explore the Collection",
      primaryCtaLink: "/collections",
      secondaryCtaText: "Contact Concierge",
      secondaryCtaLink: "/contact",
    },
    {
      tag: "Artisanal Leather Goods • Handcrafted",
      headlineMain: "Architectural Form. ",
      headlineAccent: "The Sofia Bag.",
      copy: "Hand-sculpted in supple Italian box calfskin with custom brushed bronze accents. An icon created for seamless transitions from executive salons to Las Vegas gala evenings.",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=85&w=2200&auto=format&fit=crop",
      primaryCtaText: "Discover The Sofia Bag",
      primaryCtaLink: "/products/sofia-bag",
      secondaryCtaText: "Explore Handbags",
      secondaryCtaLink: "/collections?category=Handbags",
    },
    {
      tag: "Haute Joaillerie • Solid 18k Gold",
      headlineMain: "Radiance Sculpted in ",
      headlineAccent: "18k Gold.",
      copy: "The Solstice hammered cuff and solitaire diamond pendants catch the golden desert twilight. Statement pieces designed to be cherished for generations.",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=85&w=2200&auto=format&fit=crop",
      primaryCtaText: "Explore Fine Jewelry",
      primaryCtaLink: "/collections?category=Jewelry",
      secondaryCtaText: "Inquire Solstice Cuff",
      secondaryCtaLink: "/products/solstice-hammered-cuff",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % scenes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + scenes.length) % scenes.length);
  };

  useEffect(() => {
    if (isPaused) return;
    timerRef.current = setTimeout(() => {
      nextSlide();
    }, 6500);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [currentSlide, isPaused]);

  const activeScene = scenes[currentSlide];

  return (
    <section
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-blush-100 via-cream-soft to-cream select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="EVORA Editorial Carousel"
    >
      {/* Background Editorial Visuals Cross-fade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {scenes.map((scene, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
              currentSlide === idx ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={scene.image}
              alt={scene.headlineMain}
              className={`w-full h-full object-cover object-[center_32%] transition-transform duration-[7000ms] ease-out ${
                currentSlide === idx ? "scale-105" : "scale-100"
              }`}
              style={{ opacity: 0.38 }}
            />
          </div>
        ))}

        {/* Ethereal Soft Rose & Champagne Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/60 to-blush-100/70 z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-blush-rose/10 via-transparent to-cream/80 z-10 pointer-events-none" />

        {/* Feminine ambient glow spheres */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blush-200/40 via-champagne/30 to-blush-rose/15 rounded-full blur-3xl pointer-events-none z-10" />
      </div>

      {/* Hero Editorial Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center flex flex-col items-center">
        {/* Feminine Eyebrow Badge */}
        <div className="inline-flex items-center gap-2.5 mb-6 px-4 py-1.5 rounded-full bg-blush-50/90 border border-bronze-rose/30 shadow-sm backdrop-blur-sm transition-all duration-500">
          <Sparkles className="w-3.5 h-3.5 text-bronze-rose animate-pulse" />
          <span className="text-[10px] sm:text-[11px] uppercase font-medium tracking-ultra-wide text-espresso-muted">
            {activeScene.tag}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-bronze-rose animate-pulse" />
        </div>

        {/* Monumental Hero Headline with Feminine Elegance */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight leading-[1.06] max-w-4xl text-espresso transition-all duration-500 min-h-[2.2em] flex items-center justify-center flex-wrap">
          <span>{activeScene.headlineMain}</span>
          <span className="italic font-normal text-bronze-rose ml-2 sm:ml-3">
            {activeScene.headlineAccent}
          </span>
        </h1>

        {/* Refined Supporting Copy */}
        <p className="mt-5 text-sm sm:text-base md:text-lg font-light text-espresso-muted leading-relaxed max-w-2xl min-h-[4.5em] flex items-center justify-center transition-all duration-500">
          {activeScene.copy}
        </p>

        {/* Soft, Refined Feminine Action CTAs */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href={activeScene.primaryCtaLink}
            className="w-full sm:w-auto px-9 py-4 bg-espresso text-cream-light hover:bg-black text-xs uppercase tracking-luxury font-medium transition-all duration-300 shadow-feminine hover:shadow-luxury-lg flex items-center justify-center gap-2 group"
          >
            <span>{activeScene.primaryCtaText}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-bronze-light" />
          </Link>

          <Link
            href={activeScene.secondaryCtaLink}
            className="w-full sm:w-auto px-9 py-4 bg-cream-soft/80 hover:bg-blush-100 border border-espresso/25 hover:border-espresso text-espresso text-xs uppercase tracking-luxury font-medium transition-all duration-300 backdrop-blur-sm flex items-center justify-center"
          >
            {activeScene.secondaryCtaText}
          </Link>
        </div>

        {/* Sleek Hairline Progress Bar Carousel Controls */}
        <div className="mt-12 flex items-center justify-center gap-3 sm:gap-4 z-30">
          <button
            type="button"
            onClick={prevSlide}
            className="p-2 text-espresso/60 hover:text-espresso transition-colors"
            aria-label="Previous scene"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 sm:gap-3">
            {scenes.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentSlide(idx)}
                className="group py-2 px-1 focus:outline-none"
                aria-label={`Go to slide ${idx + 1}`}
              >
                <div
                  className={`h-0.5 transition-all duration-300 ${
                    currentSlide === idx
                      ? "w-10 sm:w-14 bg-espresso"
                      : "w-4 sm:w-6 bg-espresso/20 group-hover:bg-espresso/40"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            className="p-2 text-espresso/60 hover:text-espresso transition-colors"
            aria-label="Next scene"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Subtle Scroll Cue */}
        <div className="mt-8 flex flex-col items-center gap-1.5 text-espresso-muted/60 text-[10px] uppercase tracking-widest">
          <span>Scroll to Experience</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce text-bronze-rose" />
        </div>
      </div>
    </section>
  );
};
