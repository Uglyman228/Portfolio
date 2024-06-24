/** @type {import('tailwindcss').Config} */




export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    backgroundImage: {
      heroimg: "url(./src/images/fotor-ai-2024052917581.jpg)"
    },
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)"
      },
    },
    fontFamily: {
      'jura': ['Jura'],
      
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
  },
  
  plugins: [],
}

