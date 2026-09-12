"use client";

import React from "react";
import { Sparkles } from "lucide-react";

export const RunwayMarquee: React.FC = () => {
  const marqueeItems = [
    "Las Vegas Haute Atelier",
    "Bespoke Tailoring",
    "40-Momme Mulberry Silk",
    "Italian Box Calfskin",
    "18k Solid Vermeil",
    "Private Salon Appointments",
    "Liquid Silk Slip Gowns",
    "Sculptural Handbags",
    "Quiet Feminine Luxury",
  ];

  return (
    <div
      aria-label="Atelier Highlights"
      className="relative overflow-hidden bg-cream-soft border-y border-luxury/70 py-3 sm:py-4 select-none group"
    >
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {[...Array(2)].map((_, loopIdx) => (
          <div key={loopIdx} className="flex items-center space-x-8 sm:space-x-12 pr-8 sm:pr-12">
            {marqueeItems.map((item, idx) => (
              <div key={idx} className="flex items-center space-x-8 sm:space-x-12 whitespace-nowrap">
                <span className="text-[11px] sm:text-xs uppercase tracking-luxury font-medium text-espresso/80">
                  {item}
                </span>
                <Sparkles className="w-3 h-3 text-bronze-rose flex-shrink-0 opacity-75" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
