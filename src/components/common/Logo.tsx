import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  variant?: "dark" | "light";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  asLink?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  variant = "dark",
  className = "",
  size = "md",
  asLink = true,
}) => {
  const sizeClasses = {
    sm: "w-32 sm:w-36",
    md: "w-44 sm:w-52 md:w-56",
    lg: "w-56 sm:w-64 md:w-72",
    xl: "w-72 sm:w-84 md:w-96",
  };

  const isLight = variant === "light";
  const logoSrc = isLight ? "/logo/evora-logo-light.png" : "/logo/evora-logo.png";

  const content = (
    <div
      className={`relative inline-flex items-center justify-center select-none transition-transform duration-300 ${sizeClasses[size]} ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt="EVORA — Luxury Women's Fashion & Jewelry"
        className="w-full h-auto object-contain block"
        loading="eager"
      />
    </div>
  );

  if (!asLink) {
    return content;
  }

  return (
    <Link
      href="/"
      className="inline-flex items-center transition-opacity duration-300 hover:opacity-85 focus:outline-none"
      aria-label="EVORA Home"
    >
      {content}
    </Link>
  );
};
