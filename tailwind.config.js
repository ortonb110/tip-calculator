/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "hsl(172, 67%, 45%)",
        veryDarkCyan: "hsl(183, 100%, 15%)",
        darkGrayishCyan: "hsl(186, 14%, 43%)",
        lightGrayishCyan: "hsl(185, 41%, 84%)",
        grayishCyan: "hsl(184, 14%, 56%)",
        veryLightGrayishCyan: "hsl(189, 41%, 97%)",
      },
    },
  },
  plugins: [],
};
