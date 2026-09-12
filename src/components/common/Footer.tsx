"use client";

import React, { useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/common/Logo";
import { MessageCircle, Mail, MapPin, Instagram, ArrowRight, Check } from "lucide-react";

export const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-espresso text-cream border-t border-espresso-light" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        EVORA Footer
      </h2>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex flex-col items-start">
              <Logo size="lg" variant="light" />
            </div>
            <p className="text-sm text-cream-muted font-light leading-relaxed max-w-md pt-2">
              EVORA was created for the modern woman who understands that style is more than what she wears.
              Contemporary women&apos;s fashion, jewelry, handbags and accessories born in Las Vegas.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-cream/20 text-cream hover:text-bronze-light hover:border-bronze-light transition-colors"
                aria-label="Follow EVORA on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center border border-cream/20 text-cream hover:text-bronze-light hover:border-bronze-light transition-colors"
                aria-label="Direct WhatsApp Concierge"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.generateMailtoUrl()}
                className="w-9 h-9 flex items-center justify-center border border-cream/20 text-cream hover:text-bronze-light hover:border-bronze-light transition-colors"
                aria-label="Email EVORA Concierge"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-luxury text-bronze-light font-medium">Explore</h3>
            <ul className="space-y-2.5">
              {siteConfig.navLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-xs text-cream-muted/80 hover:text-cream transition-colors tracking-wide"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/faq"
                  className="text-xs text-cream-muted/80 hover:text-cream transition-colors tracking-wide"
                >
                  Client FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Concierge & Atelier Contact */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs uppercase tracking-luxury text-bronze-light font-medium">Client Concierge</h3>
            <ul className="space-y-3 text-xs text-cream-muted/80">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-bronze-light mt-0.5 flex-shrink-0" />
                <span>{siteConfig.locationDisplay}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[11px] text-cream-muted/60">{siteConfig.atelierNotice}</span>
              </li>
              <li className="pt-2">
                <a
                  href={siteConfig.generateWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cream transition-colors block"
                >
                  WhatsApp Ordering &amp; Inquiries
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.generateMailtoUrl()}
                  className="hover:text-cream transition-colors block"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          {/* VIP Newsletter Registration */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-luxury text-bronze-light font-medium">The Private Edit</h3>
            <p className="text-xs text-cream-muted font-light leading-relaxed">
              Receive private salon invitations, lookbook previews, and notification of limited atelier releases.
            </p>
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-espresso-light/60 border border-bronze-light/30 text-cream text-xs">
                <Check className="w-4 h-4 text-bronze-light flex-shrink-0" />
                <span>Welcome to the EVORA Private Circle.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full bg-espresso-dark border border-cream/20 px-3.5 py-2.5 text-xs text-cream placeholder-cream/40 focus:border-bronze-light focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1 top-1 bottom-1 px-3 bg-cream text-espresso hover:bg-white text-xs transition-colors flex items-center justify-center"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[10px] text-cream-muted/50">Discreet communication. No spam.</span>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-espresso-light flex flex-col sm:flex-row items-center justify-between text-[11px] text-cream-muted/60 space-y-4 sm:space-y-0">
          <p>© 2026 EVORA. All Rights Reserved.</p>
          <div className="flex items-center space-x-6 text-[11px]">
            <Link href="/faq" className="hover:text-cream transition-colors">
              Atelier Policies
            </Link>
            <Link href="/contact" className="hover:text-cream transition-colors">
              Inquire
            </Link>
            <span>Las Vegas, Nevada</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
