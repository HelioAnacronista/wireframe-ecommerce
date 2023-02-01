/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      mainColor: {
        50: "#f5f5f6",
        100: "#e5e5e8",
        200: "#cecdd4",
        300: "#abaab6",
        400: "#828090",
        500: "#676575",
        600: "#5f5c6b",
        700: "#4c4a54",
        800: "#434149",
        900: "#3b3940",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};