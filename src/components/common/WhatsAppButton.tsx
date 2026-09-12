"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { MessageCircle } from "lucide-react";

interface WhatsAppButtonProps {
  productName?: string;
  category?: string;
  variant?: "floating" | "inline" | "outline";
  className?: string;
  children?: React.ReactNode;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  productName,
  category,
  variant = "inline",
  className = "",
  children,
}) => {
  const url = siteConfig.generateWhatsAppUrl(productName, category);

  if (variant === "floating") {
    return (
      <aside aria-label="WhatsApp Concierge" className="fixed bottom-6 right-6 z-40 group">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 bg-espresso text-cream-light hover:bg-black py-3 px-4 shadow-luxury-lg border border-bronze/40 transition-all duration-300 transform group-hover:-translate-y-0.5 focus:outline-none"
          title="Direct Concierge via WhatsApp"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bronze opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-bronze"></span>
          </span>
          <MessageCircle className="w-4 h-4 text-bronze-light" />
          <span className="text-xs uppercase tracking-luxury font-medium pr-1">WhatsApp Concierge</span>
        </a>
      </aside>
    );
  }

  if (variant === "outline") {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 py-3 px-6 border border-espresso text-espresso hover:bg-espresso hover:text-cream text-xs uppercase tracking-luxury transition-all duration-200 ${className}`}
      >
        <MessageCircle className="w-4 h-4 text-bronze" />
        <span>{children || "Order via WhatsApp"}</span>
      </a>
    );
  }

  // Default inline solid button
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-espresso text-cream hover:bg-black text-xs uppercase tracking-luxury transition-all duration-200 ${className}`}
    >
      <MessageCircle className="w-4 h-4 text-bronze-light" />
      <span>{children || "Order via WhatsApp"}</span>
    </a>
  );
};
