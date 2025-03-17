/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#d2b480',
          DEFAULT: '#daa748',
          dark: '#816e49',
        },
        secondary: {
          DEFAULT: '#967860',
        },
        cream: {
          light: '#eccdae',
          DEFAULT: '#e8c198',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
};