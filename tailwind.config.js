/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'key': '#818384',
        'box': '#3a3a3c'
      }
      
    },
  },
  plugins: [],
}

