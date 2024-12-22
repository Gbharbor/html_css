/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './p2/**/*.html',//busca por classes tds arquivos html dentro de P2
    './P2/src/**/*.{js,ts,jsx,tsc}'// Busca por classes em arquivos JS/TS na pasta src
  ],
  theme: {
    extend: { 
     }
  },
  plugins: [require('@tailwindcss/line-clamp')],
}

