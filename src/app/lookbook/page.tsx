import React from "react";
import type { Metadata } from "next";
import { lookbookEntries } from "@/data/lookbook";
import { LookCard } from "@/components/lookbook/LookCard";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "The EVORA Edit — Editorial Lookbook",
  description:
    "Explore The EVORA Edit: editorial compositions blending women's tailoring, box calfskin handbags, and sculptural gold jewelry in Las Vegas.",
};

export default function LookbookPage() {
  return (
    <div className="bg-cream min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Editorial Journal"
          title="The EVORA Edit"
          description="A visual discourse on poise, materiality, and contemporary feminine power. Photographed across the private residences and desert vistas of Las Vegas."
        />

        {/* Editorial Feed */}
        <div className="space-y-4">
          {lookbookEntries.map((look, idx) => (
            <LookCard key={look.id} look={look} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
