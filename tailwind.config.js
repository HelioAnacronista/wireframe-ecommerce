/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1980px",
      // => @media (min-width: 1536px) { ... }
    },
    container: {
      center: true,
    },
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
      white: {
        900: "#FFF",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
