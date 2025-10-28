/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        nunito: ["Nunito Sans", "sans-serif"],
      },
      colors: {
        "custom-green-start": "#01AC74",
        "custom-green-end": "#08A420",
      },
      backgroundImage: {
        "gradient-green": "linear-gradient(to right, #01AC74 0%, #08A420 80%)",
      },
    },
  },
  plugins: [],
};
