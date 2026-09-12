import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ArrowUpRight } from "lucide-react";

export const FeaturedCollections: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-cream border-b border-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Curated Portfolios"
          title="The EVORA Collection"
          description="Four distinct pillars of timeless feminine expression, designed with quiet architectural restraint."
        />

        {/* 4 Visual Collection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {siteConfig.collectionCategories.map((cat, index) => (
            <Link
              key={cat.slug}
              href={`/collections?category=${encodeURIComponent(cat.name)}`}
              className="group relative flex flex-col justify-end aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-espresso focus:outline-none"
            >
              {/* Background Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={cat.image}
                alt={cat.name}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center opacity-85 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-75"
              />

              {/* Gradient Overlay for Editorial Contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

              {/* Index Watermark */}
              <span className="absolute top-4 right-4 text-cream/40 font-mono text-xs tracking-widest">
                0{index + 1}
              </span>

              {/* Card Copy */}
              <div className="relative z-10 p-6 text-cream transition-transform duration-300">
                <span className="text-[10px] uppercase tracking-ultra-wide text-bronze-light font-medium block mb-1">
                  Collection
                </span>
                <h3 className="text-2xl font-serif text-cream-light font-normal mb-2 leading-tight">
                  {cat.name}
                </h3>
                <p className="text-xs text-cream-muted/90 font-light line-clamp-2 leading-relaxed mb-4">
                  {cat.description}
                </p>

                <div className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-luxury font-medium text-cream border-b border-cream/50 pb-0.5 group-hover:border-cream transition-colors">
                  <span>Explore Pieces</span>
                  <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
