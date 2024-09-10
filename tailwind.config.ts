import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // Adjust the paths according to your project structure
  ],
  theme: {
    extend: {
      colors: {
        background: '#0D1117', // Dark background
        textPrimary: 'transparent',
        textSecondary: '#FFFFFF', // White for secondary text
        accent: '#F59E0B', // Amber for buttons
        primary: '#A78BFA', // Pastel Purple for gradients
        secondary: '#4ADE80', // Soft Green for gradients
        grayDark: '#1F2937', // Dark gray for backgrounds
        grayLight: '#E5E7EB', // Light gray for text
      },
      gradientColorStops: theme => ({
        primary: '#A78BFA', // Pastel Purple for gradient text
        secondary: '#4ADE80', // Soft Green for gradient text
      }),
    },
  },
  plugins: [],
};

export default config;
