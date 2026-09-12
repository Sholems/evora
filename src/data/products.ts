import { Product } from "@/types";

export const products: Product[] = [
  // --- HANDBAGS ---
  {
    id: "sofia-bag",
    slug: "sofia-bag",
    name: "Sofia Bag",
    category: "Handbags",
    subtitle: "Architectural Top-Handle in Espresso Box Calfskin",
    shortDescription:
      "A testament to timeless architectural form. Hand-crafted in smooth Italian box calfskin with custom brushed-bronze hardware.",
    description:
      "The Sofia Bag represents the pinnacle of EVORA leather craftsmanship. Designed with clean geometric proportions and a structured trapezoidal silhouette, it transitions effortlessly from day appointments to evening affairs in Las Vegas. Finished with hand-painted tonal edges, an ultra-suede interior lining, and an optional shoulder strap for crossbody versatility.",
    price: "$2,450",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["Espresso", "Cream Noir", "Deep Amber"],
    materials: ["100% Full-Grain Italian Box Calfskin", "Brushed Bronze Hardware", "Micro-Suede Lining"],
    dimensions: "28cm (W) x 21cm (H) x 11cm (D) — 11.0\" x 8.2\" x 4.3\"",
    details: [
      "Reinforced top handle with hand-stitched detailing",
      "Concealed magnetic flap closure with EVORA engraved hardware",
      "Interior dual slip compartments and zippered security pocket",
      "Detachable, adjustable leather shoulder strap (50cm drop)",
      "Protective metal feet at base",
    ],
    care: [
      "Store in the provided organic cotton dust bag away from direct sunlight",
      "Gently buff with a soft microfiber cloth to restore luster",
      "Avoid exposure to rain, oils, and chemical cosmetics",
    ],
    featured: true,
    newArrival: true,
    lookbook: true,
    availability: "Available",
    tags: ["Signature", "Handbags", "Leather", "Essential"],
  },
  {
    id: "palais-minaudiere",
    slug: "palais-minaudiere",
    name: "Palais Evening Minaudière",
    category: "Handbags",
    subtitle: "Sculpted Metal Frame with Duchesse Silk Satin",
    shortDescription:
      "An heirloom evening objet d'art featuring an arched bronze clasp and heavy silk duchesse exterior.",
    description:
      "Sculpted to capture the luminous glamour of private Las Vegas gala evenings, the Palais Minaudière is an exquisite jewel in itself. A brushed warm-gold tone metal casing cradles lustrous silk satin, opening smoothly via a precision jewel clasp to reveal space for evening essentials.",
    price: "$1,850",
    images: [
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["Noir & Bronze", "Champagne Cream"],
    materials: ["Solid Cast Brass Clasp", "Heavy Silk Duchesse", "Nappa Leather Lining"],
    dimensions: "20cm (W) x 12cm (H) x 6cm (D) — 7.8\" x 4.7\" x 2.3\"",
    details: [
      "Hand-finished brushed bronze arch closure",
      "Concealed drop-in fine curb chain for shoulder carry",
      "Single card slot in smooth Italian nappa",
      "Fits standard smartphone sizes",
    ],
    care: ["Keep dry and clean with soft dry chamois", "Store upright in protective keepsake box"],
    featured: true,
    newArrival: false,
    lookbook: true,
    availability: "Limited Atelier Run",
    tags: ["Evening", "Cocktail", "Handbags"],
  },
  {
    id: "verona-daily-tote",
    slug: "verona-daily-tote",
    name: "Verona Carryall Tote",
    category: "Handbags",
    subtitle: "Supple Grained Calfskin with Magnetic Closure",
    shortDescription:
      "An unlined, featherweight masterwork designed for the discerning woman whose day demands uncompromised elegance.",
    description:
      "The Verona Tote celebrates quiet luxury in its purest form. Crafted from supple grained French taurillon leather, it drapes gracefully against the body while maintaining generous volume for travel, business portfolios, or weekend leisure.",
    price: "$2,680",
    images: [
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["Warm Espresso", "Sand Cream", "Midnight Black"],
    materials: ["French Taurillon Grained Calfskin", "Raw Suede Interior"],
    dimensions: "42cm (W) x 30cm (H) x 18cm (D) — 16.5\" x 11.8\" x 7.0\"",
    details: [
      "Includes matching detachable zippered leather pouch",
      "Reinforced double handles designed for comfortable over-the-shoulder wear",
      "Dual hidden magnetic bridge fasteners",
    ],
    care: ["Treat periodically with neutral leather balm", "Avoid abrasive surfaces"],
    featured: false,
    newArrival: true,
    lookbook: false,
    availability: "Available",
    tags: ["Work", "Travel", "Handbags"],
  },
  {
    id: "riviera-crossbody",
    slug: "riviera-crossbody",
    name: "Riviera Crossbody Flap",
    category: "Handbags",
    subtitle: "Interwoven Leather with Monogram Turnlock",
    shortDescription:
      "Artisanal interwoven leather strips accented with EVORA's signature minimalist turnlock clasp.",
    description:
      "Crafted by multi-generational artisans who hand-weave supple calfskin ribbons over a structured core, the Riviera embodies Mediterranean nonchalance reimagined for elevated desert city living.",
    price: "$2,100",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["Espresso Brown", "Ivory Cream"],
    materials: ["Hand-Woven Nappa Leather", "Brass Hardware"],
    dimensions: "24cm (W) x 17cm (H) x 8cm (D)",
    details: ["Rotating EVORA lock clasp", "Adjustable chain-and-leather strap", "Two accordion internal sections"],
    care: ["Avoid snagging on sharp objects", "Professional leather cleaning only"],
    featured: false,
    newArrival: false,
    lookbook: true,
    availability: "Available",
    tags: ["Crossbody", "Handbags"],
  },

  // --- WOMEN'S FASHION ---
  {
    id: "verona-trench",
    slug: "verona-trench",
    name: "The Verona Double-Breasted Trench",
    category: "Women's Fashion",
    subtitle: "Heavyweight Silk-Cotton Twill with Storm Flaps",
    shortDescription:
      "A monumental reinterpretive outerwear staple. Cut long with an authoritative silhouette and fluid drape.",
    description:
      "The Verona Trench marries utilitarian heritage with haute couture tailoring. Woven from an exclusive water-repellent silk-cotton gabardine, it presents an elongated, double-breasted profile accented by horn buttons and a wide self-tie belt that sculpts the waist with dramatic ease.",
    price: "$2,890",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["Desert Cream", "Espresso", "Slate Black"],
    materials: ["65% Cotton, 35% Mulberry Silk Twill", "100% Cupro Bemberg Lining", "Genuine Horn Buttons"],
    dimensions: "Available in Atelier Sizes 34 to 44 FR (US 2 to 12)",
    details: [
      "Elongated storm flap and inverted back pleat",
      "Wide belt with custom rectangular leather-wrapped buckle",
      "Raglan sleeves for seamless layering over tailoring",
      "Deep welt hand pockets with secure horn closures",
    ],
    care: ["Specialist dry clean only", "Steam gently on reverse side"],
    featured: true,
    newArrival: true,
    lookbook: true,
    availability: "Available",
    tags: ["Outerwear", "Fashion", "Iconic"],
  },
  {
    id: "elysian-slip-gown",
    slug: "elysian-slip-gown",
    name: "Elysian Bias-Cut Silk Gown",
    category: "Women's Fashion",
    subtitle: "40mm Double-Faced Mulberry Silk Charmeuse",
    shortDescription:
      "The definitive evening silhouette. Cut on the true bias to caress every curve with luminous liquid drape.",
    description:
      "Crafted from ultra-heavy 40 momme mulberry silk, the Elysian Slip Gown pours like liquid over the body. Featuring an architectural scooped back and subtle puddle train, it embodies the sensual confidence and effortless glamour at the core of the EVORA philosophy.",
    price: "$1,950",
    images: [
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["Rich Espresso", "Pearl Cream", "Onyx Black"],
    materials: ["100% Grade 6A Mulberry Silk (40 Momme Charmeuse)"],
    dimensions: "Floor-length with 15cm puddle train; sizes US 0-10",
    details: [
      "True bias cut allowing natural stretch and body contouring",
      "Deep scoop back with delicate self-rouleau stabilizing strap",
      "French seams and hand-rolled delicate hemline",
    ],
    care: ["Eco-friendly dry clean only", "Do not machine wash or tumble dry"],
    featured: true,
    newArrival: false,
    lookbook: true,
    availability: "Made to Order",
    tags: ["Evening", "Silk", "Gowns", "Fashion"],
  },
  {
    id: "aria-sculpted-blazer",
    slug: "aria-sculpted-blazer",
    name: "Aria Sculpted Wool Blazer",
    category: "Women's Fashion",
    subtitle: "Barathea Virgin Wool with Hourglass Waist",
    shortDescription:
      "Sharp peak lapels meet an engineered hourglass waist for an arresting, commanding feminine presence.",
    description:
      "The Aria Blazer is built on traditional Savile Row internal canvas architecture, modernised with a daringly sculpted waist. Paired with wide-leg trousers or worn solo as an evening jacket, it radiates modern power and aristocratic poise.",
    price: "$2,200",
    images: [
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["Espresso", "Pure Cream", "Midnight Black"],
    materials: ["100% Virgin Wool Barathea (Super 140s)", "Full Canvas Construction"],
    dimensions: "Atelier Sizes US 2 - 12",
    details: [
      "Generous peaked lapels with hand-stitched pick detailing",
      "Single horn statement button closure",
      "Dual jetted hip pockets and interior chest pocket",
      "Working cuff buttonholes with horn buttons",
    ],
    care: ["Dry clean only by luxury garment specialist"],
    featured: false,
    newArrival: true,
    lookbook: true,
    availability: "Available",
    tags: ["Tailoring", "Jackets", "Fashion"],
  },
  {
    id: "palatine-trousers",
    slug: "palatine-trousers",
    name: "Palatine Pleated Wide-Leg Trousers",
    category: "Women's Fashion",
    subtitle: "High-Rise Double Pleat in Fluid Wool-Crepe",
    shortDescription:
      "Impeccably draped high-waist trousers that lengthen the silhouette with effortless movement.",
    description:
      "Double forward pleats fall from an elongated waistband into an expansive, fluid wide leg. Tailored in an Italian wool-crepe that resists creasing throughout long travel and meetings.",
    price: "$1,150",
    images: [
      "https://images.unsplash.com/photo-1551803091-e20673f15770?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["Alabaster Cream", "Espresso", "Black"],
    materials: ["98% Wool Crepe, 2% Elastane", "Pocket bags in 100% cotton"],
    dimensions: "High rise (32cm); 86cm inseam (custom hem available upon request)",
    details: [
      "Extended waistband tab with hidden hook and eye closures",
      "Deep double forward front pleats",
      "Slanted side pockets and rear welt pockets",
    ],
    care: ["Specialist dry clean only"],
    featured: false,
    newArrival: false,
    lookbook: true,
    availability: "Available",
    tags: ["Tailoring", "Trousers", "Fashion"],
  },

  // --- JEWELRY ---
  {
    id: "solstice-hammered-cuff",
    slug: "solstice-hammered-cuff",
    name: "Solstice Hammered Gold Cuff",
    category: "Jewelry",
    subtitle: "Heavy 18k Yellow Gold Vermeil on Solid Sterling Silver",
    shortDescription:
      "A sculptural armor for the wrist. Hand-hammered to reflect ambient desert light with organic warmth.",
    description:
      "The Solstice Cuff is an expression of bold, uncluttered luxury. Individually shaped by master metalsmiths, its undulating surface catches candlelight and desert sunsets alike. Bold enough to wear as a singular statement, refined enough to become your daily signature.",
    price: "$1,450",
    images: [
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1611591475837-3335b375b42d?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["18k Warm Yellow Gold", "Polished Bronze"],
    materials: ["18k Heavy Gold Vermeil (5 Microns) over Solid 925 Sterling Silver"],
    dimensions: "Width: 4.5cm; Inner Circumference: 16cm (gently adjustable)",
    details: [
      "Subtle interior EVORA hallmark engraving",
      "Ergonomically tapered edges for all-day wrist comfort",
      "Presented in a velvet-lined wooden jewel casket",
    ],
    care: ["Buff with polishing cloth provided", "Remove before swimming, spas, or applying fragrance"],
    featured: true,
    newArrival: true,
    lookbook: true,
    availability: "Available",
    tags: ["Jewelry", "Gold", "Cuffs", "Statement"],
  },
  {
    id: "luminary-diamond-pendant",
    slug: "luminary-diamond-pendant",
    name: "Luminary Bezel Diamond Pendant",
    category: "Jewelry",
    subtitle: "1.25 Carat VVS Lab Diamond in 18k Architectural Bezel",
    shortDescription:
      "A timeless solitaire diamond cradled in an ultra-low profile bezel on a diamond-cut cable chain.",
    description:
      "Minimalism meets breathtaking brilliance. A certified 1.25 ct round brilliant lab diamond (Color E, Clarity VVS1) is secured in an exclusive bevelled gold setting that rests flush against the collarbone, capturing light from every angle.",
    price: "$3,200",
    images: [
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["18k Yellow Gold", "18k White Gold"],
    materials: ["18k Solid Recycled Gold", "1.25ct Lab-Grown Brilliant Diamond (IGI Certified)"],
    dimensions: "Chain length: 42cm with extension loops to 45cm",
    details: [
      "Conflict-free ethical lab-created stone with certified grading report",
      "Signature EVORA diamond-sparkle finial tag at clasp",
      "Secure lobster claw closure",
    ],
    care: ["Clean with warm soapy water and soft bristle brush", "Annual complimentary inspection"],
    featured: true,
    newArrival: false,
    lookbook: true,
    availability: "Available",
    tags: ["Fine Jewelry", "Diamonds", "Necklaces"],
  },
  {
    id: "aurora-pearl-earrings",
    slug: "aurora-pearl-earrings",
    name: "Aurora Baroque Pearl Drop Earrings",
    category: "Jewelry",
    subtitle: "Selected South Sea Baroque Pearls with Sculpted Studs",
    shortDescription:
      "No two are alike. Hand-selected baroque pearls boasting a rainbow orient suspended from fluid gold droplets.",
    description:
      "Celebrating organic perfection, the Aurora Earrings pair dramatic natural baroque pearls with an organic cast-gold stud. The baroque silhouette lends an air of effortless Mediterranean sophistication.",
    price: "$1,120",
    images: [
      "https://images.unsplash.com/photo-1630019852942-f89202989a59?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["Natural Lustrous White & 18k Gold"],
    materials: ["Natural Cultured South Sea Baroque Pearls (14-16mm)", "18k Gold Vermeil on Silver"],
    dimensions: "Approximate drop length: 4.2cm",
    details: [
      "Hypoallergenic 18k gold posts with secure comfort disc backs",
      "Individually matched for balance and luminous surface luster",
    ],
    care: ["Put pearls on last after perfume and makeup", "Wipe gently with damp soft cloth"],
    featured: false,
    newArrival: true,
    lookbook: false,
    availability: "Available",
    tags: ["Pearls", "Earrings", "Jewelry"],
  },
  {
    id: "pave-signet-ring",
    slug: "pave-signet-ring",
    name: "Pavé Contour Signet Ring",
    category: "Jewelry",
    subtitle: "Fluid Sculpted Signet with Flush-Set Diamond Pavé",
    shortDescription:
      "A modern reinvention of the classic signet ring featuring a gentle concavity set with micro-pavé diamonds.",
    description:
      "A sign of self-possession and enduring taste. With soft ergonomic shoulders and a face encrusted with pavé diamonds, this ring is substantial yet discreet, designed to be worn across pinky or index finger.",
    price: "$1,680",
    images: [
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["18k Yellow Gold"],
    materials: ["Solid 18k Gold", "0.45ct Total Weight Natural VS Diamonds"],
    dimensions: "Sizes 4 through 9 (custom sizing available)",
    details: [
      "Heavy solid comfort-fit band",
      "Flush-mounted stones to prevent snagging on knitwear and silk",
      "Hand-polished mirror finish",
    ],
    care: ["Store separately to avoid scratching softer gems"],
    featured: false,
    newArrival: false,
    lookbook: false,
    availability: "Available",
    tags: ["Rings", "Diamonds", "Jewelry"],
  },

  // --- ACCESSORIES ---
  {
    id: "cashmere-wrap",
    slug: "cashmere-wrap",
    name: "Woven Cashmere & Silk Wrap",
    category: "Accessories",
    subtitle: "Ultra-Fine Featherweight Mongolian Cashmere",
    shortDescription:
      "Weightless warmth in an expansive generous rectangular scarf with delicate eyelash fringe.",
    description:
      "Spun from the finest combed Mongolian white cashmere blended with pure mulberry silk. Light enough to drape over evening gowns in air-conditioned Las Vegas venues, yet intensely warm when bundled for chilly desert nights.",
    price: "$780",
    images: [
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["Natural Cream", "Warm Espresso", "Charcoal Noir"],
    materials: ["70% Grade-A Mongolian Cashmere, 30% Mulberry Silk"],
    dimensions: "200cm x 90cm (78.7\" x 35.4\")",
    details: [
      "Hand-frayed delicate eyelash borders",
      "Artisan woven on traditional shuttle looms",
      "Subtle tonal embroidered EVORA monogram",
    ],
    care: ["Dry clean or hand wash cold with cashmere wash; dry flat"],
    featured: true,
    newArrival: true,
    lookbook: true,
    availability: "Available",
    tags: ["Cashmere", "Wraps", "Accessories"],
  },
  {
    id: "monogram-silk-carre",
    slug: "monogram-silk-carre",
    name: "The Monogram Silk Twill Carré",
    category: "Accessories",
    subtitle: "90cm Hand-Rolled Mulberry Silk Scarf",
    shortDescription:
      "A geometric dialogue between cream and espresso with delicate bronze flourishes.",
    description:
      "Printed using traditional multi-screen artisanal methods on heavy 16-momme silk twill. The graphic motifs honor classical architectural elements with clean, modern feminine flair. Hand-rolled and sewn edges complete this timeless accent.",
    price: "$490",
    images: [
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["Cream & Espresso Palette"],
    materials: ["100% Mulberry Silk Twill (16 Momme)"],
    dimensions: "90cm x 90cm (35.4\" x 35.4\")",
    details: [
      "Hand-rolled and hand-stitched hem by master seamstresses",
      "Colorfast botanical ink printing",
      "Wearable as a headscarf, neck carré, or bag tie",
    ],
    care: ["Dry clean only; store folded flat"],
    featured: false,
    newArrival: false,
    lookbook: true,
    availability: "Available",
    tags: ["Silk", "Scarves", "Accessories"],
  },
  {
    id: "aurelia-calfskin-belt",
    slug: "aurelia-calfskin-belt",
    name: "Aurelia Reversible Calfskin Belt",
    category: "Accessories",
    subtitle: "Polished Bronze Monogram Buckle with Dual-Tone Leather",
    shortDescription:
      "Reversible Italian calfskin switching seamlessly from rich espresso to warm cream with a twist of the buckle.",
    description:
      "Engineered for versatile styling across both tailored blazers and relaxed day dresses. Crafted from vegetable-tanned French calfskin with hand-creased borders and an architectural solid bronze buckle.",
    price: "$560",
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["Reversible Espresso / Cream"],
    materials: ["Full-Grain French Calfskin", "Solid Cast Architectural Bronze Buckle"],
    dimensions: "Width: 3.2cm; Sizes XS (70cm) to XL (95cm)",
    details: [
      "Ingenious rotating buckle mechanism for instant reversal",
      "Five micro-adjustable sizing holes with tear-drop punch",
    ],
    care: ["Keep away from water; buff metal with dry cloth"],
    featured: false,
    newArrival: true,
    lookbook: false,
    availability: "Available",
    tags: ["Belts", "Leather", "Accessories"],
  },
  {
    id: "noir-sunglasses",
    slug: "noir-sunglasses",
    name: "Noir Sculpted Cat-Eye Sunglasses",
    category: "Accessories",
    subtitle: "Hand-Polished Japanese Mazzucchelli Acetate",
    shortDescription:
      "A razor-sharp, upswept silhouette with warm bronze tinted lenses that offer 100% UV protection.",
    description:
      "Shielding your gaze from the dazzling Nevada sun with unapologetic glamour. Hand-milled from 8mm thick organic acetate, featuring bevelled edges and 5-barrel German hinges for lifetime durability.",
    price: "$480",
    images: [
      "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?q=80&w=1200&auto=format&fit=crop",
    ],
    colors: ["Deep Espresso Tortoise", "Midnight Black"],
    materials: ["Japanese Mazzucchelli Bio-Acetate", "UVA/UVB Category 3 Mineral Glass Lenses"],
    dimensions: "Lens: 53mm | Bridge: 19mm | Temple: 145mm",
    details: [
      "Custom wire core with engraved EVORA diamond emblem",
      "Anti-reflective interior lens coating",
      "Includes hard leather carrying case and cleaning cloth",
    ],
    care: ["Rinse with lukewarm water before wiping with microfiber cloth"],
    featured: false,
    newArrival: false,
    lookbook: true,
    availability: "Available",
    tags: ["Eyewear", "Accessories"],
  },
];

export const getFeaturedProducts = (): Product[] => {
  return products.filter((p) => p.featured);
};

export const getNewArrivals = (): Product[] => {
  return products.filter((p) => p.newArrival);
};

export const getProductsByCategory = (category: string): Product[] => {
  if (!category || category === "All") return products;
  return products.filter((p) => p.category.toLowerCase() === category.toLowerCase());
};

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find((p) => p.slug === slug);
};
