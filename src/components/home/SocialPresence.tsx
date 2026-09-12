import React from "react";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Instagram, ArrowUpRight } from "lucide-react";

export const SocialPresence: React.FC = () => {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=600&auto=format&fit=crop",
      alt: "EVORA Editorial Campaign",
      tag: "#EVORA",
    },
    {
      src: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=600&auto=format&fit=crop",
      alt: "The Sofia Bag in Espresso",
      tag: "#SofiaBag",
    },
    {
      src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=600&auto=format&fit=crop",
      alt: "Solstice Cuff Detail",
      tag: "#FineJewelry",
    },
    {
      src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=600&auto=format&fit=crop",
      alt: "Evening in Las Vegas",
      tag: "#LasVegasStyle",
    },
    {
      src: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=600&auto=format&fit=crop",
      alt: "Silk Carré Styling",
      tag: "#Silk",
    },
    {
      src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=600&auto=format&fit=crop",
      alt: "The Aria Blazer Ensemble",
      tag: "#AtelierTailoring",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-cream border-b border-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Visual Dialogue"
          title="Follow The EVORA World"
          description="Glimpses into our Las Vegas atelier, editorial campaigns, and client styling portraits."
        />

        {/* Curated Aesthetic Gallery */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {galleryImages.map((img, idx) => (
            <a
              key={idx}
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden bg-espresso focus:outline-none"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-espresso/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-2 text-center text-cream">
                <Instagram className="w-5 h-5 mb-1 text-bronze-light" />
                <span className="text-[10px] tracking-wider uppercase font-mono">{img.tag}</span>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram Link CTA */}
        <div className="mt-12 text-center">
          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury text-espresso hover:text-bronze font-medium py-2 border-b border-espresso/40 hover:border-espresso transition-all"
          >
            <Instagram className="w-4 h-4 text-bronze" />
            <span>Connect on Instagram @evorawomen</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};
