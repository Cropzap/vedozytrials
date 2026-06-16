/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        victus: {
          // New Premium Branding Palette
          navy: '#0A2540',    // Deep Enterprise Navy anchoring the main text & headers
          green: '#00D46A',   // Vibrant Accent Green for arrows, highlights, and CTAs
          
          // Canvas System
          charcoal: '#111827', // Crisp dark color for heavy reading/dark states
          light: '#FCFDFE',    // Clean, glassy light white background canvas
        },
      },
    },
  },
  plugins: [],
}