"use client";

import React, { useState } from "react";
import Link from "next/link";
import { faqItems } from "@/data/faq";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ChevronDown, MessageCircle, ArrowUpRight } from "lucide-react";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "orders-1": true,
  });

  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Orders",
    "Product Availability",
    "Delivery",
    "Returns",
    "Private Shopping",
  ];

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs =
    selectedCategory === "All"
      ? faqItems
      : faqItems.filter((f) => f.category === selectedCategory);

  return (
    <div className="bg-cream min-h-screen py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Atelier Guidance"
          title="Frequently Asked Questions"
          description="Essential information regarding private client ordering, piece availability, white-glove delivery, and bespoke shopping appointments."
        />

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 border-b border-luxury pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`py-2 px-4 text-xs uppercase tracking-luxury transition-colors ${
                selectedCategory === cat
                  ? "bg-espresso text-cream-light font-medium"
                  : "bg-cream-light text-espresso/70 border border-luxury hover:border-espresso"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-cream-light border border-luxury shadow-sm transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-luxury text-bronze font-medium">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif text-espresso font-normal">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-espresso/70 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-espresso" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-sm font-light text-espresso-muted leading-relaxed border-t border-luxury/40">
                    <p className="pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Inquiry Box */}
        <div className="mt-16 p-8 bg-espresso text-cream text-center shadow-luxury space-y-4">
          <h3 className="text-2xl font-serif text-cream-light">Have an Unanswered Question?</h3>
          <p className="text-xs sm:text-sm text-cream-muted font-light max-w-lg mx-auto">
            Our Las Vegas concierge is pleased to address inquiries regarding specific pieces, bespoke sizing,
            or private in-suite presentations.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-6 py-3 bg-cream text-espresso hover:bg-white text-xs uppercase tracking-luxury font-medium transition-colors inline-flex items-center justify-center gap-1.5"
            >
              <span>Contact Concierge</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={siteConfig.generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 border border-cream/30 text-cream hover:border-cream text-xs uppercase tracking-luxury font-medium transition-colors inline-flex items-center justify-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4 text-bronze-light" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
