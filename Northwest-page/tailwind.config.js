/** @type {import('tailwindcss').Config} */
// tailwind.config.js
// tailwind.config.js
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: 'media', // or 'media' or 'class'
   theme: {
     extend: {
      fontFamily:{
        Roboto :"Roboto",
        Urbanist: "Urbanist",
        Inter: "Inter",
        Poppins: "Poppins",
      },
     },
   },
   variants: {
     extend: {
      
     },
   },
   plugins: [],
 }
