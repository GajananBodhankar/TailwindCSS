/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        "main-color": "rgb(29 155 240)",
        "side-hover": "rgba(231, 233, 234, 0.1)",
        "right-main": "rgb(22 24 28)",
        "right-hover": "#1d1f23",
        "icon-hover": "rgb(1 46 76)",
      },
    },
    screens: {
      sm: "300px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
