/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "app-layout": "60px 1fr",
      },
      gridTemplateColumns: {
        guest: "1fr 2fr 1fr 1fr 40px",
      },
      colors: {
        main: {
          100: "#5985ff",
          200: "#335dd4",
          300: "#254cba",
          400: "#15399e",
          500: "#102359",
          600: "#0d1d4a",
          700: "#0a173b",
          800: "#08122e",
          900: "#040917",
          950: "#02050d",
        },
        secondary: {
          100: "#fabf7f",
          200: "#ffa645",
          300: "#eb8d28",
          400: "#e8861c",
          500: "#db790f",
          600: "#d67204",
          700: "#ad5b02",
          800: "#824400",
          900: "#542c01",
          950: "#241300",
        },
      },
    },
  },
  plugins: [],
};
