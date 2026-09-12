import React from "react";

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  theme?: "dark" | "light";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  description,
  align = "center",
  theme = "dark",
  className = "",
}) => {
  const isLight = theme === "light";
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-3xl ${alignClass} ${className} mb-12 sm:mb-16`}>
      {kicker && (
        <span
          className={`inline-block text-xs uppercase font-medium tracking-luxury mb-3.5 ${
            isLight ? "text-bronze-light" : "text-espresso-muted"
          }`}
        >
          {kicker}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl md:text-5xl font-serif font-normal tracking-tight leading-tight ${
          isLight ? "text-cream-light" : "text-espresso"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-sm sm:text-base leading-relaxed max-w-2xl font-light ${
            align === "center" ? "mx-auto" : ""
          } ${isLight ? "text-cream-muted" : "text-espresso-muted"}`}
        >
          {description}
        </p>
      )}
      <div
        className={`mt-6 h-[1px] w-12 ${
          align === "center" ? "mx-auto" : ""
        } ${isLight ? "bg-bronze-light/40" : "bg-bronze/50"}`}
      />
    </div>
  );
};
