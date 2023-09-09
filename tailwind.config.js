/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-green': '#308753', 
        'primary-orange': '#FF800B', 
        'primary-blue': '#0F519F', 
      },
      boxShadow: {
        'primary': '0px 0px 10px 3px rgba(0, 0, 0, 0.15)',
        'absolute-card': '0px 4px 11px 0px rgba(0, 0, 0, 0.15)',
        'home-footer': '0px 0px 10px 3px rgba(109, 109, 109, 0.10)',
      },
      lineHeight: {
        "medium": "1.3"
      }
    },
  },
  plugins: [],
}