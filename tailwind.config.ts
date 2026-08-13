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
        bg: "#020617",
        sur: "#0f172a",
        "sur-2": "#1e293b",
        "fg-1": "#f8fafc",
        "fg-2": "#94a3b8",
        "fg-3": "#64748b",
        "accent-cy": "#3b82f6",
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
