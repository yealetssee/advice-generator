/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", "serif", "sans"],
      },
      backgroundColor: {
        darkBlue: "#202733",
        grayishBlue: "#313A48",
      },
      colors: {
        neonGreen: "#53FFAA",
        lightCyan: "#CEE3E9",
      },
      boxShadow: {
        customShadow: "30px 50px 80px 0px rgba(4, 2, 0, 0.10)",
        hoverNeon: "0px 0px 40px 0px #53FFAA",
      },
    },
  },
  plugins: [],
};
