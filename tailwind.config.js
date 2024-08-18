/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  darkMode: 'selector',
  theme: {
    screens: {
      sm : "480px",
      md : "768px",
      lg : "1024px"
    },
    extend: {
      colors: {
        lightColer: "#abc7ff",
        secondaryColor: "#F9E400",
        blueColor: "#0070e4",
        primeryColer: "#010a5e",
        blackColor: "#021526",
        favariteColer: "#0C1844",
        whiteColor: "#fff",
        darkColor: "#000"
      },

      fontFamily: {
        farsi : ['iransans']

      },

      keyframes: {
        move: {
          "50%": {transform: 'translateY(-1rem)'}
        }
      },
      animation: {
        'movingY': 'move 2s linear infinite'
      },

      container: {
        center: true,
        padding: {
          default: "1rem",
          sm: "1.5rem"
        }
      }
    },
  },
  plugins: [],
}

