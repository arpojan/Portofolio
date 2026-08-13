import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#F8FAFC',
        sur: '#FFFFFF',
        'sur-2': '#F1F5F9',
        'fg-1': '#0F172A',
        'fg-2': '#475569',
        'fg-3': '#94A3B8',
        'accent-cy': '#0EA5E9', // Cheerful Sky Blue
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
