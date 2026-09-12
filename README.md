# EVORA — Luxury Women's Fashion & Lifestyle

> **Luxury, Designed for Her.**  
> Official website and product showcase for **EVORA**, a premier women's fashion, handbag, and fine jewelry brand based in **Las Vegas, Nevada**.

---

## 1. Brand & Business Overview

EVORA is an exclusive luxury fashion and lifestyle brand showcasing:
- **Women's Fashion**: Architectural tailoring, 40-momme silk slip gowns, double-breasted gabardine trenches, and pleated wool trousers.
- **Handbags**: Hand-crafted full-grain Italian box calfskin top-handles (The Sofia Bag), woven leather crossbodies, and duchesse silk minaudières.
- **Jewelry**: Sculptural 18k solid gold vermeil cuffs, certified lab diamond pendants, and organic baroque pearl drop earrings.
- **Accessories**: Lightweight Mongolian cashmere wraps, hand-rolled silk twill carrés, and artisanal acetate sunglasses.

### Business Model
EVORA operates as an **exclusive luxury atelier and product showcase with direct client order inquiries** rather than a self-service ecommerce checkout. Every creation offers high-touch concierge interactions via:
- **"Inquire About This Piece"**: Bespoke inquiry modal with automatic product metadata capture.
- **"Order via WhatsApp"**: One-click direct messaging pre-populated with piece name and category for instant concierge assistance.
- **Private Shopping Appointments**: In-suite and showroom styling bookings in Las Vegas.

---

## 2. Brand Identity & Visual Palette

| Color Token | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Cream** | `#F1E9DC` | Primary luxury background neutral |
| **Cream Light** | `#FAF7F2` | Elevated surface / card background |
| **Espresso** | `#2B211D` | Primary deep brand color for typography, buttons, and contrast |
| **Black** | `#111111` | Deep contrast accent |
| **Bronze / Gold** | `#B89C72` | Restrained accent for flourishes, badges, and icons |

### Approved Logo (Option 5 Signature-Script)
The logo features an expressive flowing calligraphic script "Evora", an expressive capital initial "E", a refined horizontal flourish, a minimal diamond sparkle accent, and the supporting inscription:  
**`LUXURY WOMEN'S FASHION & JEWELRY`**

- Light Background Version: `public/logo/evora-logo-dark.svg`
- Dark Background Version: `public/logo/evora-logo-light.svg`
- Responsive Component: `src/components/common/Logo.tsx`

---

## 3. Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Static HTML Export)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom luxury tokens
- **Icons**: [Lucide React](https://lucide.dev/) (Lightweight, editorial aesthetic)
- **Deployment Target**: [Cloudflare Pages](https://pages.cloudflare.com/) (Zero server maintenance, global edge CDN, 100/100 Core Web Vitals)

---

## 4. Quick Start & Local Development

### Prerequisites
- Node.js 18.18+ or 20+
- npm 9+ or pnpm / yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/evora.git
cd evora

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env.local

# Run development server
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 5. Environment Variables

Create `.env.local` based on `.env.example`:

```bash
# Public canonical URL
NEXT_PUBLIC_SITE_URL=https://evorawomen.com

# WhatsApp Concierge Number (Digits only, international format, e.g. 17025550199)
NEXT_PUBLIC_WHATSAPP_NUMBER=17025550199

# Primary Concierge Email
NEXT_PUBLIC_CONTACT_EMAIL=concierge@evorawomen.com

# Instagram Profile URL
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/evorawomen

# Atelier Regional Display
NEXT_PUBLIC_CITY_REGION="Las Vegas, Nevada"
NEXT_PUBLIC_ATELIER_HOURS="By Private Appointment Only"

# Optional Contact Form Webhook / API Endpoint (e.g. Formspree, Cloudflare Worker)
# If blank, inquiries will gracefully acknowledge client requests in the UI
NEXT_PUBLIC_FORM_ENDPOINT=
```

---

## 6. Production Build & Static Export

The project is pre-configured with `output: 'export'` in `next.config.ts`, generating pure static assets in `/out`.

```bash
# Run lint check
npm run lint

# Build static production export
npm run build
```
The optimized static website will be compiled into the `out/` directory.

---

## 7. Cloudflare Pages Deployment

### Option A: Cloudflare Pages Git Integration (Recommended)
1. Push your repository to **GitHub** or **GitLab**.
2. Log into the [Cloudflare Dashboard](https://dash.cloudflare.com/) and navigate to **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Select your `evora` repository.
4. Set the build settings:
   - **Framework preset**: `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node.js Version** (under Environment Variables): `NODE_VERSION = 20`
5. Add your production environment variables (from `.env.example`).
6. Click **Save and Deploy**. Your site will deploy globally across Cloudflare's 300+ edge locations in seconds.

### Option B: Cloudflare Wrangler CLI Direct Upload
```bash
# Install Wrangler globally or use npx
npx wrangler pages deploy out --project-name=evora
```

---

## 8. Content Management & Customization

### Adding or Updating Products
All product data is centralized in `src/data/products.ts`. To add a new product:

```ts
{
  id: "verona-trench",
  slug: "verona-trench",
  name: "The Verona Double-Breasted Trench",
  category: "Women's Fashion", // "Women's Fashion" | "Handbags" | "Jewelry" | "Accessories"
  subtitle: "Heavyweight Silk-Cotton Twill with Storm Flaps",
  shortDescription: "A monumental reinterpretive outerwear staple...",
  description: "Comprehensive editorial description...",
  price: "$2,890", // Or leave undefined for "Price Upon Inquiry"
  images: [
    "https://images.unsplash.com/photo-...",
  ],
  colors: ["Desert Cream", "Espresso", "Slate Black"],
  materials: ["65% Cotton, 35% Mulberry Silk Twill"],
  dimensions: "Atelier Sizes 34 to 44 FR",
  details: ["Elongated storm flap", "Horn buttons"],
  care: ["Specialist dry clean only"],
  featured: true,
  newArrival: true,
  lookbook: true,
  availability: "Available", // "Available" | "Limited Atelier Run" | "Made to Order" | "Inquire for Waitlist"
  tags: ["Outerwear", "Iconic"]
}
```

### Updating the Lookbook
Editorial lookbook stories are maintained in `src/data/lookbook.ts`. Each entry specifies full-bleed hero photography, supporting detail shots, and direct references to styled pieces.

### Updating VIP Services
Service cards (Private Shopping, Styling, Gift Consultation, Gala Dressing) are defined in `src/data/services.ts`.

### Updating Brand Contact & Atelier Location
Edit `src/config/site.ts` or set the corresponding environment variables in `.env.local` or Cloudflare Pages settings.

### Replacing Images & Logo
- **Logo**: Replace `public/logo/evora-logo-dark.svg` and `public/logo/evora-logo-light.svg`.
- **Favicon**: Place your favicon at `public/favicon.ico`.

---

## 9. SEO & Local Las Vegas Optimization

The website includes comprehensive luxury search engine optimization:
- **Semantic HTML5**: `header`, `nav`, `main`, `section`, `article`, `footer`, `h1`-`h3` hierarchy.
- **Schema.org Structured Data**: Complete JSON-LD graphs for `Organization`, `WebSite`, and `ClothingStore` in Las Vegas, NV.
- **Dynamic XML Sitemap**: Generated automatically at `/sitemap.xml` via `src/app/sitemap.ts`.
- **Search Engine Directive**: Configured at `/robots.txt` via `src/app/robots.ts`.
- **OpenGraph & Twitter Cards**: Dynamic social preview metadata on all pages and individual product routes.

---

## 10. License & Copyright

© 2026 EVORA. All Rights Reserved.
