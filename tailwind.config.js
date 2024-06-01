/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        iconColor: '#E78895',
        headerColor: '#FFF7F1',
        textPrimary: '#333333',
        greyPrimary: '#5D5D5D'
      }
     
    },
  },
  plugins: [],
}

