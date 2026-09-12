import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F1E9DC",
          light: "#FAF7F2",
          muted: "#E8DFD0",
          dark: "#DED3C1",
        },
        espresso: {
          DEFAULT: "#2B211D",
          light: "#3F322D",
          muted: "#66544C",
          dark: "#1E1714",
        },
        black: {
          DEFAULT: "#111111",
          pure: "#000000",
          soft: "#1A1716",
        },
        bronze: {
          DEFAULT: "#B89C72",
          light: "#D5C2A5",
          dark: "#8C714C",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Didot", "Bodoni MT", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "Italianno", "Great Vibes", "cursive"],
      },
      letterSpacing: {
        widest: "0.2em",
        luxury: "0.25em",
        "ultra-wide": "0.35em",
      },
      lineHeight: {
        relaxed: "1.75",
        loose: "2",
      },
      boxShadow: {
        luxury: "0 10px 40px -15px rgba(43, 33, 29, 0.08)",
        "luxury-lg": "0 20px 50px -15px rgba(43, 33, 29, 0.15)",
      },
    },
  },
  plugins: [],
};

export default config;
