/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Matching the classes used in Header.jsx and Footer.jsx
        accent: {
          indigo: '#6366f1', // Indigo-500
          purple: '#a855f7', // Purple-500
          teal: '#2dd4bf',   // Teal-400
        },
        // Keeping the core palette just in case
        slate: {
          850: '#151e32',
          950: '#020617',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'conic-gradient(from 180deg at 50% 50%, #1e293b 0deg, #0f172a 360deg)',
      }
    },
  },
  plugins: [],
}
