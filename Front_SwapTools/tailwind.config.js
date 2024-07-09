/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#2c3e50',
        'brand-green': '#27ae60',
        'brand-red': '#e74c3c',
        'brand-yellow': '#f1c40f',
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
        'Roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

