/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#7c3aed', // Ana Pracby Moru
          light: '#8b5cf6',
          dark: '#6d28d9',
        },
        positive: '#58cc02',  // Duolingo Yeşili
        negative: '#ff4b4b',  // Yanlış Cevap Kırmızısı
        warning: '#ff9600',   // Uyarı Sarısı
        info: '#1cb0f6',      // Bilgi Mavisi
      },
      fontFamily: {
        // Nunito fontunu varsayılan yapıyoruz
        sans: ['Nunito', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}