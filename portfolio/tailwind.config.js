/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: " #2C2C54",
        secondary: "#474787",
        accent: "#AAABB8",
        accent2: "#ECECEC",

      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
        }
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)"
        ]
      },

      backgroundImage: {
        'hero-pattern': "url('./assets/img/hero-bg.jpg')",
        'AboutMe': "url('./assets/img/bg.jpg')"
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow')
  ],
}

