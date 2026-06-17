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
        background: "#0a0a0a",
        foreground: "#ededed",
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#2563eb",
        },
        accent: {
          DEFAULT: "#22c55e",
          dark: "#16a34a",
        },
        card: {
          DEFAULT: "#141414",
          border: "#262626",
        }
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-jetbrains-mono)", "var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "slide-up": "slide-up 0.5s ease-out forwards",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};
export default config;
