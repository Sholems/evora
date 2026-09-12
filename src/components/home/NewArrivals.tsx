import React from "react";
import Link from "next/link";
import { getNewArrivals } from "@/data/products";
import { ProductGrid } from "@/components/products/ProductGrid";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ArrowRight } from "lucide-react";

export const NewArrivals: React.FC = () => {
  const newItems = getNewArrivals().slice(0, 4);

  return (
    <section className="py-20 sm:py-28 bg-cream-light border-b border-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <SectionHeading
            kicker="Atelier Additions"
            title="New at EVORA"
            description="Recent creations shaped in limited quantities, capturing modern luxury and sensual poise."
            align="left"
            className="mb-0 sm:mb-0"
          />

          <Link
            href="/collections"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury text-espresso hover:text-bronze font-medium transition-colors mt-6 md:mt-0"
          >
            <span>View All Creations</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Product Grid */}
        <ProductGrid products={newItems} columns={4} />
      </div>
    </section>
  );
};
