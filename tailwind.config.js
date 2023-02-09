/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "ui-sans-serif", "system-ui"],
    },
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
      trout: {
        50: "#f4f5f7",
        100: "#e4e8e9",
        200: "#ccd1d5",
        300: "#a8b1b8",
        400: "#7d8a93",
        500: "#626f78",
        600: "#545e66",
        700: "#495057",
        800: "#40454a",
        900: "#383b41",
      },
      red: {
        50: "#fef2f2",
        100: "#fde3e3",
        200: "#fccccc",
        300: "#f8a9a9",
        400: "#f27777",
        500: "#e63c3c",
        600: "#d42e2e",
        700: "#b32222",
        800: "#942020",
        900: "#7b2121",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
