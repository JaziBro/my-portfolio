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
        primary: '#1F2937',  // Dark Navy
        secondary: '#3B82F6',  // Indigo
        accent: '#F59E0B',  // Amber
        background: '#111827',  // Dark Gray
        text: '#E5E7EB',  // Light Gray
        textPrimary: '#1F2937'
      },
    },
  },
  plugins: [],
};
export default config;
