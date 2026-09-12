import type { Metadata } from "next";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/common/Navbar";
import { Footer } from "@/components/common/Footer";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { ConciergeDrawer } from "@/components/common/ConciergeDrawer";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "EVORA | Luxury Women's Fashion & Jewelry — Las Vegas",
    template: "%s | EVORA Luxury Fashion",
  },
  description: siteConfig.description,
  keywords: [
    "Luxury women's fashion Las Vegas",
    "EVORA",
    "Luxury handbags Las Vegas",
    "Women's jewelry Las Vegas",
    "Private shopping Las Vegas",
    "High fashion atelier",
    "Sofia bag",
    "Designer apparel Las Vegas",
  ],
  authors: [{ name: "EVORA Atelier" }],
  creator: "EVORA",
  publisher: "EVORA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "EVORA | Luxury Women's Fashion & Jewelry — Las Vegas",
    description: siteConfig.description,
    siteName: "EVORA",
    images: [
      {
        url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "EVORA Luxury Women's Fashion & Jewelry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EVORA | Luxury Women's Fashion & Jewelry — Las Vegas",
    description: siteConfig.description,
    images: ["https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop"],
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: "EVORA",
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo/evora-logo.png`,
        description: siteConfig.description,
        sameAs: [siteConfig.instagramUrl],
        contactPoint: [
          {
            "@type": "ContactPoint",
            email: siteConfig.email,
            contactType: "customer service",
            availableLanguage: ["English"],
          },
        ],
      },
      {
        "@type": "ClothingStore",
        "@id": `${siteConfig.url}/#store`,
        name: "EVORA Atelier",
        url: siteConfig.url,
        description: "Las Vegas luxury women's fashion, handbags, fine jewelry and accessories.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Las Vegas",
          addressRegion: "NV",
          addressCountry: "US",
        },
        priceRange: "$$$$",
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: "EVORA",
        description: siteConfig.description,
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-cream text-espresso selection:bg-espresso selection:text-cream">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton variant="floating" />
        <ConciergeDrawer />
      </body>
    </html>
  );
}
