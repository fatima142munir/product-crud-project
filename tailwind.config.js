/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: {
          light: '#6EE7B7',
          DEFAULT: '#10B981',
          dark: '#047857',
        },
      },
    },
  },
  plugins: [],
}

