/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/*.{html,js,ejs}"],
  theme: {
    extend: {},
    fontFamily:{
      "vlight":["v-light"],
      "vmedium":["v-medium"],
      "vbold":["v-bold"]
    }
  },
  plugins: [],
}