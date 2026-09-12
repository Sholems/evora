"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/common/Logo";
import { Menu, X, MessageCircle, Instagram, ArrowUpRight } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Luxury Announcement Bar */}
      <div className="bg-espresso text-cream-light text-[11px] sm:text-xs py-2 px-4 text-center tracking-luxury uppercase border-b border-espresso-light/40">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2">
          <span>{siteConfig.atelierNotice}</span>
          <span className="hidden sm:inline text-bronze-light">•</span>
          <span className="hidden sm:inline font-light text-cream-muted">{siteConfig.locationDisplay}</span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-luxury border-b border-luxury py-3"
            : "bg-cream/80 backdrop-blur-sm border-b border-luxury/40 py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Trigger Button */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 -ml-2 text-espresso hover:text-bronze transition-colors focus:outline-none"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* EVORA Signature Logo */}
            <div className="flex-shrink-0 flex items-center justify-center lg:justify-start">
              <Logo size="md" variant="dark" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10" aria-label="Main navigation">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={`text-xs uppercase tracking-luxury transition-colors duration-200 py-1 relative ${
                      isActive ? "text-espresso font-semibold" : "text-espresso/75 hover:text-espresso"
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-espresso transition-all duration-300" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side Direct Actions */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* WhatsApp Quick Link */}
              <a
                href={siteConfig.generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury text-espresso/80 hover:text-espresso py-1.5 px-3 rounded-none border border-espresso/20 hover:border-espresso transition-all duration-200"
                title="Direct Concierge via WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-bronze" />
                <span>Concierge</span>
              </a>

              {/* Instagram */}
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-espresso/80 hover:text-espresso transition-colors"
                aria-label="Follow EVORA on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* Inquire CTA Button */}
              <Link
                href="/contact"
                className="hidden md:inline-flex items-center gap-1 bg-espresso hover:bg-black text-cream-light text-xs uppercase tracking-luxury px-4 py-2 transition-all duration-200"
              >
                <span>Inquire</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Slide-out Drawer */}
        <aside className="fixed inset-y-0 left-0 max-w-xs w-full bg-cream shadow-2xl flex flex-col justify-between p-6 z-10 border-r border-luxury overflow-y-auto">
          <div>
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-6 border-b border-luxury">
              <Logo size="sm" variant="dark" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-espresso hover:text-bronze focus:outline-none"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <nav className="py-8 flex flex-col space-y-6">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm uppercase tracking-luxury transition-colors ${
                      isActive ? "text-espresso font-semibold pl-2 border-l-2 border-espresso" : "text-espresso/70 hover:text-espresso"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Drawer Footer Actions */}
          <div className="pt-6 border-t border-luxury space-y-4">
            <a
              href={siteConfig.generateWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-espresso text-cream-light text-xs uppercase tracking-luxury hover:bg-black transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-bronze-light" />
              <span>WhatsApp Concierge</span>
            </a>

            <div className="text-center pt-2">
              <p className="text-[11px] text-espresso-muted tracking-wider uppercase">Las Vegas, Nevada</p>
              <p className="text-[10px] text-espresso-muted/80 mt-0.5">{siteConfig.atelierNotice}</p>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};
