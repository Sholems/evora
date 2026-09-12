import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export const BrandStatement: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-espresso text-cream overflow-hidden relative">
      {/* Background Subtle Accent Pattern / Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-bronze/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] overflow-hidden shadow-luxury-lg border border-espresso-light">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop"
                alt="EVORA Editorial Presence"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Architectural accent card */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 bg-cream text-espresso p-6 shadow-2xl border border-luxury max-w-xs">
              <span className="text-[10px] uppercase tracking-ultra-wide text-espresso-muted block mb-1">
                Atelier Philosophy
              </span>
              <p className="text-sm font-serif italic text-espresso leading-snug">
                &ldquo;Elegance is the quiet authority of knowing who you are.&rdquo;
              </p>
            </div>
          </div>

          {/* Editorial Text Statement */}
          <div className="lg:col-span-7 space-y-6 lg:pl-6">
            <span className="text-xs uppercase tracking-luxury text-bronze-light font-medium block">
              The EVORA Philosophy
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-cream-light leading-[1.15] font-normal">
              Her Style. Her Presence. Her EVORA.
            </h2>

            <div className="h-[1px] w-16 bg-bronze-light/40 my-4" />

            <div className="space-y-4 text-sm sm:text-base font-light text-cream-muted leading-relaxed">
              <p>
                EVORA was created for the modern woman who understands that style is more than what she wears.
              </p>
              <p className="font-serif italic text-lg sm:text-xl text-cream border-l-2 border-bronze-light/50 pl-4 py-1">
                It is how she enters a room.<br />
                How she carries herself.<br />
                How she expresses who she is.
              </p>
              <p>
                Born in Las Vegas, EVORA brings together contemporary women&apos;s fashion, jewelry, handbags and
                accessories designed to make every moment feel elevated.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-cream text-espresso hover:bg-white text-xs uppercase tracking-luxury font-medium transition-colors"
              >
                <span>Read The Story</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/lookbook"
                className="text-xs uppercase tracking-luxury text-cream-muted hover:text-cream border-b border-cream/40 pb-1 transition-colors"
              >
                Explore The Edit
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
