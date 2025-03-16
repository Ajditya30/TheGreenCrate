/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4CAF50',
          dark: '#388E3C',
          light: '#C8E6C9',
        },
        accent: '#8BC34A',
        text: {
          primary: '#2C3E50',
          secondary: '#607D8B',
        },
        background: {
          light: '#F5F5F5',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 