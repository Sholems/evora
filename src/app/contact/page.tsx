import React, { Suspense } from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { SectionHeading } from "@/components/common/SectionHeading";
import { MessageCircle, Mail, MapPin, Clock, Instagram } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Concierge Inquiries — Las Vegas Atelier",
  description:
    "Let's find something beautiful. Connect with the EVORA concierge for private client orders, WhatsApp messaging, and private shopping appointments in Las Vegas.",
};

export default function ContactPage() {
  return (
    <div className="bg-cream min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Private Client Concierge"
          title="Let's Find Something Beautiful."
          description="Whether placing an order inquiry, requesting private shopping in Las Vegas, or seeking wardrobe styling assistance, our team is at your disposal."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="bg-cream-light p-12 text-center text-xs uppercase tracking-luxury text-espresso-muted border border-luxury">
                  Loading Concierge Form...
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>

          {/* Contact Details & Atelier Info Column */}
          <div className="lg:col-span-5 space-y-8 lg:pl-4">
            <div className="bg-espresso text-cream p-8 sm:p-10 shadow-luxury border border-espresso-light space-y-6">
              <span className="text-xs uppercase tracking-ultra-wide text-bronze-light font-medium block">
                Direct Channels
              </span>

              <h3 className="text-2xl font-serif text-cream-light font-normal">
                Atelier Communications
              </h3>

              <div className="space-y-5 text-xs text-cream-muted font-light">
                {/* WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-espresso-light flex items-center justify-center flex-shrink-0 text-bronze-light">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-medium text-cream uppercase tracking-wider text-[11px]">
                      WhatsApp Direct
                    </span>
                    <a
                      href={siteConfig.generateWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cream underline transition-colors"
                    >
                      Click to Chat with Concierge
                    </a>
                    <span className="block text-[10px] text-cream-muted/70 mt-0.5">
                      Fastest response for product inquiries &amp; availability
                    </span>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-espresso-light flex items-center justify-center flex-shrink-0 text-bronze-light">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-medium text-cream uppercase tracking-wider text-[11px]">
                      Client Concierge Email
                    </span>
                    <a
                      href={siteConfig.generateMailtoUrl()}
                      className="hover:text-cream underline transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-espresso-light flex items-center justify-center flex-shrink-0 text-bronze-light">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-medium text-cream uppercase tracking-wider text-[11px]">
                      Official Instagram
                    </span>
                    <a
                      href={siteConfig.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-cream underline transition-colors"
                    >
                      @evorawomen
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3 pt-2 border-t border-espresso-light">
                  <div className="w-8 h-8 rounded-none bg-espresso-light flex items-center justify-center flex-shrink-0 text-bronze-light">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-medium text-cream uppercase tracking-wider text-[11px]">
                      Atelier Location
                    </span>
                    <p className="text-cream">{siteConfig.locationDisplay}</p>
                    <span className="block text-[10px] text-cream-muted/70 mt-0.5">
                      {siteConfig.atelierNotice}
                    </span>
                  </div>
                </div>

                {/* Appointment Schedule */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-none bg-espresso-light flex items-center justify-center flex-shrink-0 text-bronze-light">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-medium text-cream uppercase tracking-wider text-[11px]">
                      Concierge Hours
                    </span>
                    <p className="text-cream">Monday — Saturday: 10:00 AM – 7:00 PM PST</p>
                    <span className="block text-[10px] text-cream-muted/70 mt-0.5">
                      Private appointments accommodated seven days a week upon request
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
