/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{html,js,jsx}",
            "./src/componentjs/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'bac-contact': "url('./src/img/svg/1.svg')",
       
      },
      animation:{
        "linemenu":"linemenu 0.2s linear",
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