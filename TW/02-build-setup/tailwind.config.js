/** @type {import('tailwindcss').Config} */
module.exports = {
   prefix: 'b7-',
   content: [
     './src/**/*.html',
     './src/**/*.{js,ts,jsx,tsx}'
   ],
   theme: {
     extend: {
       colors: {
         vermelho: '#ff0000',
         vermelhoescuro: '#990000',
       },
       animation: {
         wiggle: 'wiggle 1s ease-in-out infinite',
       },
       keyframes: {
         wiggle: {
           '0%, 100%': { transform: 'rotate(-3deg)' },
           '50%': { transform: 'rotate(3deg)' },
         },
       },
     },
   },
   plugins: [require('@tailwindcss/line-clamp')],
 }