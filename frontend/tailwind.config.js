/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fray': '#C5C5C5', // Define a custom color 'fray' with hex value #C5C5C5
        'fray-dark': '#9E9E9E', // Define a darker shade for focus state
      },
    },
  },
  plugins: [],
}

