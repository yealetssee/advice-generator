/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        darkBlue: "#202733",
        grayishBlue: "#313A48",
      },
      boxShadow: {
        customShadow: "30px 50px 80px 0px rgba(4, 2, 0, 0.10)",
      },
    },
  },
  plugins: [],
};
