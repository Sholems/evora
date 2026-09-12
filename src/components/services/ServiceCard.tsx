import React from "react";
import Link from "next/link";
import { BrandService } from "@/types";
import { Check, ArrowUpRight } from "lucide-react";

interface ServiceCardProps {
  service: BrandService;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <article className="py-12 sm:py-16 border-b border-luxury">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Service Image */}
        <div className={`lg:col-span-6 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
          <div className="relative aspect-[4/3] overflow-hidden shadow-luxury bg-espresso">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={service.image}
              alt={service.title}
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
            {service.duration && (
              <span className="absolute bottom-3 right-3 bg-espresso/90 backdrop-blur-sm text-cream-light text-[10px] uppercase tracking-wider py-1 px-3">
                {service.duration}
              </span>
            )}
          </div>
        </div>

        {/* Service Description */}
        <div className={`lg:col-span-6 ${isReversed ? "lg:order-1" : "lg:order-2"} space-y-5`}>
          <div className="space-y-1.5">
            <span className="text-xs uppercase tracking-luxury text-bronze font-medium">
              EVORA Concierge Service
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-espresso font-normal">
              {service.title}
            </h3>
            <p className="text-sm font-serif italic text-espresso-muted">
              {service.subtitle}
            </p>
          </div>

          <p className="text-sm font-light text-espresso-muted leading-relaxed">
            {service.description}
          </p>

          <ul className="space-y-2.5 pt-2">
            {service.features.map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-espresso">
                <Check className="w-3.5 h-3.5 text-bronze mt-0.5 flex-shrink-0" />
                <span className="font-light">{feat}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <Link
              href={`/contact?inquiry=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-espresso text-cream-light hover:bg-black text-xs uppercase tracking-luxury font-medium transition-colors"
            >
              <span>{service.ctaText}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
