import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { MessageCircle, ArrowUpRight } from "lucide-react";

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-cream-light text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <span className="text-xs uppercase tracking-ultra-wide text-bronze font-medium block mb-4">
          The Atelier Awaits
        </span>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-espresso font-normal leading-tight tracking-tight">
          Find Something Beautiful.
        </h2>

        <p className="mt-6 text-sm sm:text-base text-espresso-muted font-light leading-relaxed max-w-xl mx-auto">
          Have a question about a product, collection or private shopping experience?
          Our Las Vegas concierge is at your service.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="w-full sm:w-auto px-9 py-4 bg-espresso text-cream-light hover:bg-black text-xs uppercase tracking-luxury font-medium transition-all duration-300 shadow-luxury flex items-center justify-center gap-2"
          >
            <span>Contact EVORA</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={siteConfig.generateWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 border border-espresso text-espresso hover:bg-espresso hover:text-cream text-xs uppercase tracking-luxury font-medium transition-all duration-300 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4 text-bronze" />
            <span>Direct WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
