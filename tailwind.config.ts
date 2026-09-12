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
          DEFAULT: "#F3ECE3",
          light: "#FAF6F0",
          soft: "#FCF9F5",
          muted: "#EADFD3",
          dark: "#DED0BF",
        },
        blush: {
          50: "#FDFBF9",
          100: "#F8F2EE",
          200: "#F2E4DC",
          300: "#E6CEC2",
          DEFAULT: "#F4EAE4",
          rose: "#D0A093",
          deep: "#8E5F52",
        },
        champagne: {
          light: "#FDF9F2",
          DEFAULT: "#F2E7D5",
          dark: "#DCC5A3",
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
          rose: "#CCA592",
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
        luxury: "0 10px 40px -15px rgba(142, 95, 82, 0.08)",
        "luxury-lg": "0 20px 50px -15px rgba(43, 33, 29, 0.12)",
        feminine: "0 10px 30px -10px rgba(208, 160, 147, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
