/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // Dark mode qo'shish
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(42.14deg, #9796F0 -17.31%, #FBC7D4 106.72%)',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '100%',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1596px',
        },
      },
      clipPath: {
        'wave': 'polygon(0 85%, 50% 95%, 100% 85%, 100% 100%, 0 100%)',
      },
    },
  },
  plugins: [],
};
