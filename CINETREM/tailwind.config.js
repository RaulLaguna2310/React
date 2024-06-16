/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color_amarelo1': `#FABE3B`,
        'color_amarelo2': `#ECE9D3`,
        'color_roxo1': `#694070`,
        'color_roxo2': `#E1D7E8`,
        'color_roxo3': `#DEC0F3`,
        'color_preto': `#2B2B2B`,
        'color_branco': `#ffffff`, 
      }
    },
  },
  plugins: [],
}