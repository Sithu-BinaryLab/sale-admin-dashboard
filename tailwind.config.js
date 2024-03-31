/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00E086",
        lightPink: "#FFE0E3",
        lightGreen: "#CAFDDC",
        lightPurple: "#EBDCFD",
        lightOrange: "#FEECC8",
        pinkMedium: "#FA5A7D",
        greenMedium: "#F2A300",
        purpleMedium: "#BF83FF",
        orangeMedium: "#FF947A",
        blueDark: "#4200FF"

      },
      borderRadius: {
        'lg': '1.5rem',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}

