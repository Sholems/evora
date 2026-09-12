import { BrandService } from "@/types";

export const brandServices: BrandService[] = [
  {
    id: "private-shopping",
    slug: "private-shopping",
    title: "Private Shopping Experience",
    subtitle: "One-on-One Atelier Appointments in Las Vegas",
    description:
      "Discover EVORA in an intimate, discreet atmosphere tailored entirely to your pace. Enjoy Champagne while reviewing select pieces from our seasonal and permanent archives before they are showcased publicly.",
    features: [
      "Exclusive private showroom access or in-suite presentation",
      "Dedicated senior EVORA styling advisor",
      "Advance access to limited atelier production runs",
      "Custom champagne and hospitality service",
    ],
    duration: "90 – 120 Minutes",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Request Private Appointment",
  },
  {
    id: "personal-styling",
    slug: "personal-styling",
    title: "Personal Styling & Wardrobe Curation",
    subtitle: "Sculpting Your Signature Aesthetic",
    description:
      "Whether refreshing an executive wardrobe or curating seasonal resort looks, our personal stylists analyze your personal palette, silhouette preferences, and lifestyle to compose cohesive, transformative ensembles.",
    features: [
      "Comprehensive silhouette and lifestyle consultation",
      "Head-to-toe ensemble compositions pairing fashion, bags & jewelry",
      "Digital lookbook cataloging your personalized outfits",
      "Seamless atelier alterations coordination",
    ],
    duration: "Complimentary Consultation",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Inquire for Styling Consultation",
  },
  {
    id: "gift-consultation",
    slug: "gift-consultation",
    title: "Bespoke Gift Consultation",
    subtitle: "Unforgettable Presentations for Significant Moments",
    description:
      "Select an heirloom piece that will be cherished across generations. Our concierge assists in choosing exceptional jewelry, leather goods, or silk accessories, presented in signature EVORA gift packaging with hand-calligraphed notes.",
    features: [
      "Curated recommendations aligned with recipient's personal style",
      "Complimentary monogramming or jewelry engraving on select pieces",
      "Signature cream-and-espresso gift packaging with wax seal",
      "Discreet hand-delivery options within the Las Vegas metropolitan area",
    ],
    duration: "Concierge Assistance",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Contact Gift Concierge",
  },
  {
    id: "special-occasion",
    slug: "special-occasion",
    title: "Special Occasion & Gala Dressing",
    subtitle: "Red Carpet, Galas & Landmark Celebrations",
    description:
      "Las Vegas hosts the world's most glamorous galas, charity balls, and high-profile evenings. EVORA provides complete gala styling, from made-to-order silk gowns to showstopping diamond jewelry and artisanal evening minaudières.",
    features: [
      "Exclusive access to preview eveningwear and limited edition jewelry",
      "Full styling trial with accessories, footwear guidance, and jewelry matching",
      "Priority rush preparation and atelier tailoring",
      "Direct WhatsApp concierge support on the day of your event",
    ],
    duration: "Tailored by Engagement",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    ctaText: "Book Occasion Styling",
  },
];
