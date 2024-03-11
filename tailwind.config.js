/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "primary": {
          50: "#FFF8EB",
          100: "#FEEECD",
          200: "#FEDB95",
          300: "#FDC659",
          400: "#FCA903",
          500: "#DA9403",
          600: "#C98703",
          700: "#B07602",
          800: "#8D5F02",
          900: "#654401",
          950: "#4B3301"
        },
        "secondary": {
          50: "#F4FFE5",
          100: "#EAFFCC",
          200: "#D5FF99",
          300: "#BFFF66",
          400: "#AAFF33",
          500: "#95FF00",
          600: "#77CC00",
          700: "#599900",
          800: "#3B6600",
          900: "#1E3300",
          950: "#0F1900"
        }
      }
    },
  },
  plugins: [],
}

