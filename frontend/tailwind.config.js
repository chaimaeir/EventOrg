/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fray': '#C5C5C5', // Custom color 'fray' with hex value #C5C5C5
        'fray-dark': '#9E9E9E', // Darker shade for focus state
      },
      fontFamily: {
        imbue: ['Imbue'],
      },
    },
  },
  plugins: [],
}
