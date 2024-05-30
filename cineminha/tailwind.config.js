/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bgHeader': `#FABE3B`,
        'colorTxt': `#2B2B2B`,
        'colorTitle': `#ffffff` 
      }
    },
  },
  plugins: [],
}