/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C1810', // Deep brown
          light: '#3D2318',
          dark: '#1A0F0A',
        },
        secondary: {
          DEFAULT: '#D4B483', // Warm gold
          light: '#E5C9A3',
          dark: '#B38F5C',
        },
        accent: {
          DEFAULT: '#8B4513', // Saddle brown
          light: '#A0522D',
          dark: '#654321',
        },
        background: {
          DEFAULT: '#1A1A1A', // Dark background
          light: '#2D2D2D',
          dark: '#0D0D0D',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
  ],
} 