import React from "react";
import Link from "next/link";
import { lookbookEntries } from "@/data/lookbook";
import { ArrowUpRight } from "lucide-react";

export const LookbookTeaser: React.FC = () => {
  const featuredLook = lookbookEntries[0];

  return (
    <section className="py-20 sm:py-28 bg-cream border-b border-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Visual Composition */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-12 gap-4">
            <div className="sm:col-span-8 relative aspect-[3/4] overflow-hidden shadow-luxury">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={featuredLook.heroImage}
                alt={featuredLook.title}
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <span className="absolute bottom-3 left-3 bg-espresso text-cream-light text-[10px] uppercase tracking-luxury py-1 px-2.5">
                {featuredLook.season}
              </span>
            </div>

            <div className="sm:col-span-4 flex flex-col justify-between gap-4">
              <div className="relative aspect-[3/4] overflow-hidden shadow-luxury">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featuredLook.supportingImages[0]}
                  alt="Leather styling detail"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="relative aspect-[3/4] overflow-hidden shadow-luxury hidden sm:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={featuredLook.supportingImages[1]}
                  alt="Jewelry styling detail"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy & Styled Breakdown */}
          <div className="lg:col-span-5 space-y-6 lg:pl-4">
            <span className="text-xs uppercase tracking-luxury text-bronze font-medium block">
              Curated Ensembles
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif text-espresso font-normal leading-tight">
              The EVORA Edit
            </h2>

            <p className="text-sm font-light text-espresso-muted leading-relaxed">
              Curated compositions pairing tailored outerwear with sculptural box calfskin bags, 18k gold cuffs,
              and whisper-fine cashmere wraps. Experience how each piece converses with the other.
            </p>

            {/* Styled pieces checklist */}
            <div className="pt-2 border-t border-luxury space-y-3">
              <span className="text-[11px] uppercase tracking-luxury text-espresso/70 font-medium block">
                Featured Ensemble In This Look:
              </span>
              <ul className="space-y-2">
                {featuredLook.styledItems.map((item, idx) => (
                  <li key={idx} className="flex items-baseline justify-between text-xs text-espresso">
                    <span className="text-espresso-muted uppercase tracking-wider text-[10px]">{item.role}</span>
                    <span className="font-serif italic text-sm">{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4">
              <Link
                href="/lookbook"
                className="inline-flex items-center gap-2 px-8 py-4 bg-espresso text-cream-light hover:bg-black text-xs uppercase tracking-luxury font-medium transition-colors"
              >
                <span>View The Lookbook</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
