import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // Mobile-first breakpoints
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      // 8px spacing system
      spacing: {
        "0.5": "4px",
        "1": "8px",
        "2": "16px",
        "3": "24px",
        "4": "32px",
        "5": "40px",
        "6": "48px",
        "7": "56px",
        "8": "64px",
        "10": "80px",
        "12": "96px",
        "16": "128px",
        "20": "160px",
        "24": "192px",
        "32": "256px",
      },
      colors: {
        // Warm paper / cream surfaces
        cream: {
          50: "#FBF7F0",
          100: "#F6EFE3",
          200: "#EDE2D0",
          300: "#E0CFB4",
          400: "#CFB893",
        },
        // Espresso ink for text
        espresso: {
          900: "#1E1710",
          800: "#2A2117",
          700: "#3C3225",
          600: "#544838",
          400: "#8A7C68",
        },
        // Toasted caramel — the single restrained accent
        caramel: {
          300: "#D8B788",
          400: "#C2965B",
          500: "#A9783F",
          600: "#8C6231",
        },
        // Terracotta — used sparingly for warmth
        clay: {
          400: "#C07A4F",
          500: "#A8603A",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Georgia", "serif"],
      },
      fontSize: {
        // Typography hierarchy (modular scale ~1.25)
        "display-xl": ["72px", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "600" }],
        "display-lg": ["56px", { lineHeight: "1.08", letterSpacing: "-0.025em", fontWeight: "600" }],
        "display-md": ["44px", { lineHeight: "1.12", letterSpacing: "-0.02em", fontWeight: "600" }],
        "h1": ["36px", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        "h2": ["28px", { lineHeight: "1.2", letterSpacing: "-0.015em", fontWeight: "600" }],
        "h3": ["22px", { lineHeight: "1.3", letterSpacing: "-0.01em", fontWeight: "500" }],
        "body-lg": ["18px", { lineHeight: "1.6", fontWeight: "400" }],
        "body": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "1.55", fontWeight: "400" }],
        "caption": ["12px", { lineHeight: "1.4", letterSpacing: "0.02em", fontWeight: "500" }],
      },
      borderRadius: {
        "xs": "4px",
        "sm": "8px",
        "md": "12px",
        "lg": "16px",
        "xl": "24px",
        "2xl": "32px",
      },
      boxShadow: {
        "soft": "0 1px 2px rgba(42,33,23,0.04), 0 4px 16px rgba(42,33,23,0.06)",
        "elevated": "0 8px 32px rgba(42,33,23,0.10), 0 2px 8px rgba(42,33,23,0.05)",
        "luxe": "0 24px 80px -16px rgba(42,33,23,0.22)",
      },
      transitionTimingFunction: {
        "luxe": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
