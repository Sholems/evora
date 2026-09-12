import React from "react";
import type { Metadata } from "next";
import { brandServices } from "@/data/services";
import { ServiceCard } from "@/components/services/ServiceCard";
import { SectionHeading } from "@/components/common/SectionHeading";

export const metadata: Metadata = {
  title: "Private Client Services & Styling — Las Vegas",
  description:
    "Experience bespoke EVORA VIP services: Private Shopping appointments in Las Vegas, Personal Styling, Bespoke Gift Consultation, and Gala Dressing.",
};

export default function ServicesPage() {
  return (
    <div className="bg-cream min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Bespoke Offerings"
          title="Atelier &amp; Concierge Services"
          description="Discover a more personal way to experience EVORA. Our private client team provides individualized styling, private showroom access, and discreet wardrobe curations."
        />

        {/* Services List */}
        <div className="space-y-4">
          {brandServices.map((service, idx) => (
            <ServiceCard key={service.id} service={service} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
