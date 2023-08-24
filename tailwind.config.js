/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    letterSpacing: {
      widest: ".4em",
    },
    fontFamily: {
      JosefinSans: ["Josefin Sans", "sans-serif"],
    },
    // boxShadow: {
    //    lg: "0px 50px 30px 5px #f1f1f1 ",
    // },
    colors: {
      white: "#ffffff",
      BrightBlue: "hsl(220, 98%, 61%)",
      CheckBackground:
        "linear-gradient(to left, hsl(192, 100%, 67%),hsl(280, 87%, 65%))",

      VeryLightGray: "hsl(0, 0%, 98%)",
      VeryLightGrayishBlue: "hsl(236, 33%, 92%)",
      LightGrayishBlue: "hsl(233, 11%, 84%)",
      DarkGrayishBlue: "hsl(236, 9%, 61%)",
      VeryDarkGrayishBlue: "hsl(235, 19%, 35%)",

      VeryDarkBlue: "hsl(235, 21%, 11%)",
      VeryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
      LightGrayishBlueDark1: "hsl(234, 39%, 85%)",
      LightGrayishBlueDark2: "hsl(236, 33%, 92%)",
      DarkGrayishBlueDark: " hsl(234, 11%, 52%)",
      VeryDarkGrayishBlueDark1: "hsl(233, 14%, 35%)",
      VeryDarkGrayishBlueDark2: "hsl(237, 14%, 26%)",
    },
  },
  plugins: [],
};
