import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/data/products";
import { siteConfig } from "@/config/site";
import { ProductGallery } from "@/components/products/ProductGallery";
import { WhatsAppButton } from "@/components/common/WhatsAppButton";
import { ProductCard } from "@/components/products/ProductCard";
import { ArrowLeft, Check, Shield, Sparkles, MapPin } from "lucide-react";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug);
  if (!product) return {};

  return {
    title: `${product.name} — ${product.category}`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} | EVORA Luxury Women's Fashion`,
      description: product.shortDescription,
      images: [
        {
          url: product.images[0],
          width: 1200,
          height: 900,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  // Related pieces in same category or featured
  const relatedProducts = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  return (
    <div className="bg-cream min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link & Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <div className="flex items-center gap-2 text-xs uppercase tracking-luxury text-espresso-muted">
            <Link href="/collections" className="hover:text-espresso flex items-center gap-1 transition-colors">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>The Collections</span>
            </Link>
            <span>/</span>
            <Link
              href={`/collections?category=${encodeURIComponent(product.category)}`}
              className="hover:text-espresso transition-colors"
            >
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-espresso font-medium truncate">{product.name}</span>
          </div>
        </nav>

        {/* Main Product Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Gallery */}
          <div className="lg:col-span-7">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* Right Column: Product Details & Inquiries */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center justify-between gap-4 mb-2">
                <span className="text-xs uppercase tracking-luxury text-bronze font-medium">
                  {product.category}
                </span>
                <span className="text-[11px] uppercase tracking-wider bg-cream-light py-0.5 px-2 border border-luxury text-espresso-muted">
                  {product.availability}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-serif text-espresso font-normal leading-tight">
                {product.name}
              </h1>

              <p className="text-sm font-serif italic text-espresso-muted mt-1">
                {product.subtitle}
              </p>

              <div className="mt-4 pt-4 border-t border-luxury flex items-baseline justify-between">
                <span className="text-2xl font-serif text-espresso font-normal">
                  {product.price || "Price Upon Inquiry"}
                </span>
                <span className="text-[11px] text-espresso-muted font-light">
                  Complimentary Insured Delivery
                </span>
              </div>
            </div>

            {/* Editorial Description */}
            <div className="text-sm font-light text-espresso-muted leading-relaxed space-y-3">
              <p>{product.description}</p>
            </div>

            {/* Colors / Variants */}
            {product.colors && product.colors.length > 0 && (
              <div className="pt-2 border-t border-luxury">
                <label className="block text-xs uppercase tracking-luxury text-espresso font-medium mb-2">
                  Atelier Colorways
                </label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color, idx) => (
                    <span
                      key={idx}
                      className="text-xs py-1.5 px-3 bg-cream-light border border-luxury text-espresso"
                    >
                      {color}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Specifications & Materials */}
            <div className="pt-2 border-t border-luxury space-y-4">
              {product.materials && (
                <div>
                  <h3 className="text-xs uppercase tracking-luxury text-espresso font-medium mb-1.5">
                    Materials &amp; Craft
                  </h3>
                  <ul className="space-y-1 text-xs text-espresso-muted font-light">
                    {product.materials.map((mat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-bronze" />
                        <span>{mat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.dimensions && (
                <div>
                  <h3 className="text-xs uppercase tracking-luxury text-espresso font-medium mb-1">
                    Dimensions / Sizing
                  </h3>
                  <p className="text-xs text-espresso-muted font-light">{product.dimensions}</p>
                </div>
              )}

              {product.details && product.details.length > 0 && (
                <div>
                  <h3 className="text-xs uppercase tracking-luxury text-espresso font-medium mb-1.5">
                    Atelier Details
                  </h3>
                  <ul className="space-y-1 text-xs text-espresso-muted font-light">
                    {product.details.map((det, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-bronze mt-0.5 flex-shrink-0" />
                        <span>{det}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {product.care && (
                <div>
                  <h3 className="text-xs uppercase tracking-luxury text-espresso font-medium mb-1">
                    Care &amp; Preservation
                  </h3>
                  <ul className="space-y-1 text-xs text-espresso-muted font-light">
                    {product.care.map((c, i) => (
                      <li key={i}>• {c}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Conversion CTA Group */}
            <div className="pt-6 border-t border-luxury space-y-3">
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}&inquiry=Product%20Inquiry`}
                className="w-full py-4 bg-espresso hover:bg-black text-cream-light text-xs uppercase tracking-luxury font-medium transition-colors flex items-center justify-center gap-2 shadow-luxury"
              >
                <span>Inquire About This Piece</span>
              </Link>

              <WhatsAppButton
                productName={product.name}
                category={product.category}
                variant="outline"
                className="w-full"
              >
                Order via WhatsApp
              </WhatsAppButton>

              {/* Atelier Trust Badges */}
              <div className="grid grid-cols-2 gap-3 pt-3 text-[11px] text-espresso-muted font-light">
                <div className="flex items-center gap-2">
                  <Shield className="w-3.5 h-3.5 text-bronze" />
                  <span>Authenticity Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-bronze" />
                  <span>Private Styling Available</span>
                </div>
                <div className="flex items-center gap-2 col-span-2">
                  <MapPin className="w-3.5 h-3.5 text-bronze" />
                  <span>Las Vegas Atelier • By Appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Creations */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-luxury">
            <h2 className="text-2xl font-serif text-espresso mb-8">Complementary Creations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
