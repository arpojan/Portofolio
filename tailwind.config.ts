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
        bg: '#0A0A0F',
        sur: '#13131A',
        'sur-2': '#1C1C26',
        'fg-1': '#F8FAFC',
        'fg-2': '#94A3B8',
        'fg-3': '#64748b',
        'accent-cy': '#4F46E5', // Indigo
        'accent-coral': '#FF6B6B',
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
