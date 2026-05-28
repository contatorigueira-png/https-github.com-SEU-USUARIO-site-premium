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
        ink: {
          50: "#f7f7f8",
          100: "#eeeef0",
          200: "#d9d9de",
          400: "#7c7c85",
          600: "#3a3a42",
          800: "#1a1a1f",
          900: "#0b0b0f",
        },
        gold: {
          300: "#e8d8a8",
          400: "#d4be7a",
          500: "#b8a05a",
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
        "soft": "0 1px 2px rgba(11,11,15,0.04), 0 4px 16px rgba(11,11,15,0.04)",
        "elevated": "0 8px 32px rgba(11,11,15,0.08), 0 2px 8px rgba(11,11,15,0.04)",
        "luxe": "0 24px 80px -16px rgba(11,11,15,0.18)",
      },
      transitionTimingFunction: {
        "luxe": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
