"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { products } from "@/data/products";
import { siteConfig } from "@/config/site";
import { ProductGrid } from "@/components/products/ProductGrid";
import { SectionHeading } from "@/components/common/SectionHeading";

const categories = [
  "All",
  "Women's Fashion",
  "Handbags",
  "Jewelry",
  "Accessories",
];

function CollectionsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam && categories.includes(categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    if (cat === "All") {
      router.push("/collections", { scroll: false });
    } else {
      router.push(`/collections?category=${encodeURIComponent(cat)}`, { scroll: false });
    }
  };

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  // Category descriptor banner
  const activeCategoryMeta = siteConfig.collectionCategories.find(
    (c) => c.name.toLowerCase() === activeCategory.toLowerCase()
  );

  return (
    <div className="bg-cream min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Curated Portfolios"
          title="The Collections"
          description="A singular expression of modern luxury. Explore made-to-measure tailoring, hand-stitched leather bags, sculptural jewelry, and rare accessories."
        />

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-12 sm:mb-16 border-b border-luxury pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => handleCategoryChange(cat)}
              className={`py-2 px-4 sm:px-6 text-xs uppercase tracking-luxury transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-espresso text-cream-light font-medium shadow-sm"
                  : "bg-cream-light text-espresso/70 border border-luxury/80 hover:border-espresso hover:text-espresso"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category Spotlight Banner when a specific category is chosen */}
        {activeCategoryMeta && (
          <div className="mb-12 p-6 sm:p-8 bg-espresso text-cream flex flex-col sm:flex-row items-center justify-between gap-6 shadow-luxury">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] uppercase tracking-ultra-wide text-bronze-light font-medium">
                Pillar Showcase
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-cream-light">{activeCategoryMeta.name}</h3>
              <p className="text-xs sm:text-sm text-cream-muted font-light max-w-xl">
                {activeCategoryMeta.description}
              </p>
            </div>
            <span className="text-xs uppercase tracking-luxury text-bronze-light border border-bronze-light/40 py-2 px-4 whitespace-nowrap">
              {filteredProducts.length} Atelier Creations
            </span>
          </div>
        )}

        {/* Product Grid */}
        <ProductGrid products={filteredProducts} columns={3} />
      </div>
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-cream">
          <span className="text-xs uppercase tracking-luxury text-espresso-muted">Loading Collections...</span>
        </div>
      }
    >
      <CollectionsContent />
    </Suspense>
  );
}
