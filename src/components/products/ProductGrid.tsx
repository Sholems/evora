import React from "react";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  columns = 3,
  className = "",
}) => {
  const colClass = {
    2: "grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8",
  }[columns];

  if (!products || products.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-sm font-light text-espresso-muted">
          No pieces currently found matching this selection. Please contact our concierge for bespoke requests.
        </p>
      </div>
    );
  }

  return (
    <div className={`grid ${colClass} ${className}`}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
