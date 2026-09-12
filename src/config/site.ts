export const siteConfig = {
  name: "EVORA",
  tagline: "Luxury Women's Fashion & Jewelry",
  editorialHeadline: "Luxury, Designed for Her.",
  description:
    "Contemporary women's fashion, jewelry, handbags and accessories curated for the woman who knows her worth. Born in Las Vegas.",
  city: "Las Vegas",
  state: "Nevada",
  locationDisplay: "Las Vegas, Nevada",
  atelierNotice: "Private Showroom Consultations by Appointment",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://evorawomen.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "17025550199",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "concierge@evorawomen.com",
  instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/evorawomen",
  
  // FormSubmit static email integration for Cloudflare Pages
  formSubmitEmail:
    process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL ||
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
    "concierge@evorawomen.com",

  getFormSubmitEndpoint: () => {
    const targetEmail =
      process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL ||
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
      "concierge@evorawomen.com";
    return `https://formsubmit.co/ajax/${targetEmail}`;
  },

  navLinks: [
    { label: "Home", href: "/" },
    { label: "Collections", href: "/collections" },
    { label: "Lookbook", href: "/lookbook" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],

  collectionCategories: [
    {
      name: "Women's Fashion",
      slug: "womens-fashion",
      description: "Tailored outerwear, sculptural silhouettes, and effortless evening wear.",
      image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Handbags",
      slug: "handbags",
      description: "Architectural leatherwork, structured totes, and evening minaudières.",
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Jewelry",
      slug: "jewelry",
      description: "Statement cuff bracelets, luminous cultured pearls, and sculptural rings.",
      image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
    },
    {
      name: "Accessories",
      slug: "accessories",
      description: "Silk twill carrés, woven cashmere wraps, and sculpted leather belts.",
      image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1200&auto=format&fit=crop",
    },
  ],

  generateWhatsAppUrl: (productName?: string, category?: string) => {
    const rawNumber = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "17025550199").replace(/\D/g, "");
    const base = `https://wa.me/${rawNumber}`;
    if (!productName) {
      const defaultText = encodeURIComponent(
        "Hello EVORA, I would like to inquire about your collections and private client services."
      );
      return `${base}?text=${defaultText}`;
    }
    const message = encodeURIComponent(
      `Hello EVORA, I am interested in the ${productName}${category ? ` (${category})` : ""}. Please provide availability and ordering information.`
    );
    return `${base}?text=${message}`;
  },

  generateMailtoUrl: (subject?: string, body?: string) => {
    const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "concierge@evorawomen.com";
    const encSubject = encodeURIComponent(subject || "EVORA Client Inquiry");
    const encBody = encodeURIComponent(body || "Hello EVORA Concierge,\n\nI am reaching out regarding...");
    return `mailto:${email}?subject=${encSubject}&body=${encBody}`;
  },
};
