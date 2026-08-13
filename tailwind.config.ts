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
        bg: "#020C1B",
        sur: "#071524",
        "sur-2": "#0D1E33",
        "accent-cy": "#00D4FF",
        "accent-bl": "#4F8EF7",
        "fg-1": "#E8F4FD",
        "fg-2": "#7BA8CC",
        "fg-3": "#1E3A5A",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Jost", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
