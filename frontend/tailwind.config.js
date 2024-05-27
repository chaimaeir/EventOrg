/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        imbue: ["Imbue"]
      },
      fontWeight: {
        imbue: {
          300: "light",
          500: "medium",
          400: "regular"
        }
      },
      colors: {
        
        beige: '#F5F5DC',
      }
    },
  },
  plugins: [],
}
