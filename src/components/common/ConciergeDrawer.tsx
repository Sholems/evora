"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import { Logo } from "@/components/common/Logo";
import { Sparkles, X, MessageCircle, Calendar, Clock, MapPin, Check, Send } from "lucide-react";

export const ConciergeDrawer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [contact, setContact] = useState("");
  const [serviceType, setServiceType] = useState("Private Showroom Appointment");
  const [preferredDate, setPreferredDate] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Floating Vertical Edge Trigger Tab */}
      <aside aria-label="Private Salon & Concierge Quick Access" className="fixed top-1/2 -translate-y-1/2 right-0 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="bg-espresso text-cream-light hover:bg-black py-3 px-2 rounded-l-md shadow-2xl border-l border-y border-bronze-rose/50 transition-transform duration-300 hover:-translate-x-1 flex flex-col items-center gap-2 group focus:outline-none"
          title="Open VIP Atelier Concierge"
          aria-label="Open Private Salon Concierge"
        >
          <Sparkles className="w-3.5 h-3.5 text-bronze-rose animate-pulse" />
          <span className="text-[10px] uppercase font-medium tracking-ultra-wide [writing-mode:vertical-rl] text-cream-muted group-hover:text-cream py-1">
            Private Salon
          </span>
        </button>
      </aside>

      {/* Slide-over VIP Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-espresso/70 backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        />

        {/* Slide-out Panel */}
        <div className="fixed inset-y-0 right-0 max-w-md w-full bg-cream-soft shadow-2xl border-l border-bronze-rose/30 flex flex-col justify-between z-10 overflow-y-auto">
          <div>
            {/* Drawer Header */}
            <div className="p-6 border-b border-luxury bg-cream flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-[10px] uppercase tracking-ultra-wide text-bronze-rose font-medium block">
                  VIP Client Services
                </span>
                <h3 className="text-xl font-serif text-espresso">The Private Atelier Salon</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-2 text-espresso/60 hover:text-espresso focus:outline-none"
                aria-label="Close drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-6 space-y-6">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-12 h-12 bg-espresso text-cream flex items-center justify-center mx-auto shadow-sm">
                    <Check className="w-6 h-6 text-bronze-rose" />
                  </div>
                  <h4 className="text-2xl font-serif text-espresso">Reservation Request Received</h4>
                  <p className="text-xs text-espresso-muted font-light leading-relaxed max-w-xs mx-auto">
                    Thank you, {fullName}. Our senior styling director in Las Vegas will confirm your bespoke
                    consultation within 4 hours.
                  </p>
                  <div className="pt-4 flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setIsOpen(false);
                      }}
                      className="w-full py-3 bg-espresso text-cream text-xs uppercase tracking-luxury hover:bg-black transition-colors"
                    >
                      Return to Website
                    </button>
                    <a
                      href={siteConfig.generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 border border-espresso text-espresso text-xs uppercase tracking-luxury hover:bg-cream transition-colors flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4 text-bronze-rose" />
                      <span>Instant WhatsApp Confirmation</span>
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  {/* Immediate WhatsApp Action Banner */}
                  <div className="p-4 bg-espresso text-cream border border-bronze-rose/30 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase tracking-luxury text-bronze-rose font-medium">
                        Instant Concierge
                      </span>
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bronze-rose opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-bronze-rose"></span>
                      </span>
                    </div>
                    <p className="text-xs text-cream-muted font-light">
                      Speak directly with an EVORA stylist in Las Vegas for real-time piece inquiries:
                    </p>
                    <a
                      href={siteConfig.generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 bg-cream text-espresso hover:bg-white text-xs uppercase tracking-luxury font-medium transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-bronze" />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>

                  {/* Private Appointment Booking Form */}
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="border-b border-luxury pb-2">
                      <h4 className="text-sm uppercase tracking-luxury text-espresso font-medium">
                        Request Private Viewing
                      </h4>
                      <p className="text-[11px] text-espresso-muted font-light">
                        Las Vegas Showroom or Hotel Sky-Suite
                      </p>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-luxury text-espresso font-medium mb-1">
                        Client Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full bg-cream border border-luxury px-3 py-2 text-xs text-espresso focus:border-espresso focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-luxury text-espresso font-medium mb-1">
                        Contact (Phone or Email) *
                      </label>
                      <input
                        type="text"
                        required
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="email@domain.com or phone"
                        className="w-full bg-cream border border-luxury px-3 py-2 text-xs text-espresso focus:border-espresso focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-luxury text-espresso font-medium mb-1">
                        Service Requested
                      </label>
                      <select
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        className="w-full bg-cream border border-luxury px-3 py-2 text-xs text-espresso focus:border-espresso focus:outline-none"
                      >
                        <option>Private Showroom Appointment</option>
                        <option>In-Suite Presentation (Las Vegas)</option>
                        <option>Wardrobe &amp; Gala Styling</option>
                        <option>Fine Jewelry Consultation</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-luxury text-espresso font-medium mb-1">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full bg-cream border border-luxury px-3 py-2 text-xs text-espresso focus:border-espresso focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] uppercase tracking-luxury text-espresso font-medium mb-1">
                        Notes or Specific Pieces
                      </label>
                      <textarea
                        rows={2}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g. Sofia Bag viewing, gala dress sizing..."
                        className="w-full bg-cream border border-luxury px-3 py-2 text-xs text-espresso focus:border-espresso focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-espresso text-cream-light hover:bg-black text-xs uppercase tracking-luxury font-medium transition-colors flex items-center justify-center gap-2 shadow-feminine"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Request</span>
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-4 bg-cream border-t border-luxury text-center space-y-1">
            <p className="text-[10px] text-espresso-muted tracking-wider uppercase font-medium">
              Las Vegas Atelier • Discreet Hospitality
            </p>
            <p className="text-[10px] text-espresso-muted/60">
              Private Showrooms &bull; The Strip &bull; Signature Suites
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
