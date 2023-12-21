/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.{html,js,ejs}"],
  theme: {
    extend: {
      keyframes: {
        pup: {
          '0%': {transform:"translateY(10px)"},
          '100%': {transform:"translateY(0px)"},
        }
      },
      animation: {
        pup: 'pup 1s ease-in-out ',
      }
    },
    fontFamily:{
      "vlight":["v-light"],
      "vmedium":["v-medium"],
      "vbold":["v-bold"]
    }
  },
  plugins: [],
}