import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { ArrowUpRight, MessageCircle, Sparkles } from "lucide-react";

export const PrivateShoppingBanner: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-cream border-b border-luxury">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-espresso via-espresso-light to-[#251A17] text-cream p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-luxury-lg border border-bronze-rose/25">
          {/* Subtle feminine rose & bronze ambient glows */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blush-rose/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-champagne-gold/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-bronze-rose text-xs uppercase tracking-luxury font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Bespoke Concierge &amp; Salon</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-cream-light font-normal leading-tight">
                Private Shopping <span className="italic font-normal text-bronze-light">&amp; Styling</span>
              </h2>

              <p className="text-base text-cream font-serif italic">
                Discover a more personal way to experience EVORA.
              </p>

              <p className="text-sm text-cream-muted font-light leading-relaxed max-w-xl">
                Experience one-on-one appointments at our private Las Vegas atelier or in the discretion of your
                resort sky suite. Connect with our dedicated styling advisors for:
              </p>

              {/* Service tags */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  "Private Shopping",
                  "Styling Assistance",
                  "Special Occasion Looks",
                  "Gift Consultations",
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-espresso-dark/70 border border-bronze-rose/20 text-center text-xs text-cream-muted font-light transition-colors hover:border-bronze-rose/50"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col items-stretch justify-center gap-4 lg:pl-8">
              <Link
                href="/contact?inquiry=Private%20Shopping"
                className="w-full py-4 px-6 bg-cream text-espresso hover:bg-white text-xs uppercase tracking-luxury font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-feminine"
              >
                <span>Book a Private Experience</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-bronze" />
              </Link>

              <a
                href={siteConfig.generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 border border-cream/30 hover:border-bronze-light text-cream hover:bg-cream/10 text-xs uppercase tracking-luxury font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-bronze-rose" />
                <span>Inquire via WhatsApp</span>
              </a>

              <p className="text-[11px] text-center text-cream-muted/60 font-light mt-1">
                Las Vegas Metropolitan Area • By Appointment Only
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
