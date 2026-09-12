import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "The Story of EVORA — Brand Philosophy & Las Vegas Atelier",
  description:
    "EVORA is a modern expression of feminine confidence, created for women who believe style is personal, powerful and unforgettable. Born in Las Vegas.",
};

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Brand Heritage &amp; Vision"
          title="The Story of EVORA"
          description="A modern expression of feminine confidence, created for women who believe style is personal, powerful and unforgettable."
        />

        {/* Editorial Narrative Grid */}
        <div className="space-y-20 lg:space-y-28">
          {/* Chapter 1: The Origin */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 relative aspect-[4/5] overflow-hidden shadow-luxury">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
                alt="EVORA Las Vegas Origin"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-luxury text-bronze font-medium">Chapter I</span>
              <h3 className="text-3xl sm:text-4xl font-serif text-espresso font-normal leading-tight">
                Born in the Theatre of the Desert
              </h3>
              <div className="h-[1px] w-12 bg-bronze/50" />
              <div className="space-y-4 text-sm sm:text-base font-light text-espresso-muted leading-relaxed">
                <p>
                  Las Vegas is a city of luminous contrast: dramatic desert geology meets world-class architectural
                  theatre. It is an epicenter where high-society galas, international culinary stars, and discerning
                  travelers converge.
                </p>
                <p>
                  EVORA was founded in Las Vegas to offer women garments, handbags, and fine jewelry that match this
                  scale of presence. We craft pieces that hold their own in grand ballrooms, private dining salons,
                  and intimate desert retreats.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 2: Philosophy & Craft */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 lg:order-2 relative aspect-[4/5] overflow-hidden shadow-luxury">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop"
                alt="EVORA Leather and Craftsmanship"
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="lg:col-span-6 lg:order-1 space-y-6">
              <span className="text-xs uppercase tracking-luxury text-bronze font-medium">Chapter II</span>
              <h3 className="text-3xl sm:text-4xl font-serif text-espresso font-normal leading-tight">
                Quiet Luxury &amp; Scrupulous Materiality
              </h3>
              <div className="h-[1px] w-12 bg-bronze/50" />
              <div className="space-y-4 text-sm sm:text-base font-light text-espresso-muted leading-relaxed">
                <p>
                  We reject the noise of seasonal trends and disposable fashion. EVORA champions permanence: 40-momme
                  mulberry silk charmeuse, full-grain Italian box calfskins with hand-painted tonal edges, and
                  sculptural 18k solid vermeil.
                </p>
                <p>
                  Every silhouette is engineered to grant ease of movement and enduring poise. In an era saturated
                  with logos, EVORA represents the quiet confidence of women whose presence needs no introduction.
                </p>
              </div>
            </div>
          </div>

          {/* Chapter 3: The Atelier Vision */}
          <div className="bg-espresso text-cream p-8 sm:p-14 lg:p-20 shadow-luxury-lg text-center space-y-8 max-w-4xl mx-auto">
            <span className="text-xs uppercase tracking-ultra-wide text-bronze-light font-medium block">
              The Horizon
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-cream-light font-normal leading-tight">
              An Evolving Universe of Feminine Refinement
            </h3>
            <p className="text-sm sm:text-base font-light text-cream-muted leading-relaxed max-w-2xl mx-auto">
              As EVORA expands, our atelier continues to curate women&apos;s fashion, rare jewels, and artisanal leather
              accessories for clients worldwide. We invite you to experience our creations through private appointments
              and bespoke consultations.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/collections"
                className="w-full sm:w-auto px-8 py-4 bg-cream text-espresso hover:bg-white text-xs uppercase tracking-luxury font-medium transition-colors"
              >
                Explore The Collections
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-4 border border-cream/30 text-cream hover:border-cream text-xs uppercase tracking-luxury font-medium transition-colors"
              >
                Schedule Private Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
