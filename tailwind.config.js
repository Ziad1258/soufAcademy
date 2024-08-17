/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        
      } ,
      colors : {
        'secondary' : "#555",
        "light-gray" : "gray-100",
        'overlay-bg': '#e5e7eb',  // Custom light gray for overlay
        'navbar-bg': '#ffffff',   // Custom white for navbar background
        'border-gray': '#d1d5db', // Custom gray for borders
        'close-btn-bg': '#4b5563', // Custom dark gray for close button background
        'close-btn-text': '#ffffff', // Custom white for close button text
      }
    },
  },
  plugins: [],
}