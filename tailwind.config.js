/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     
      colors: {
        primary: {
          main: "#01959F",
          surface: "#F7FEFF",
          border: "#4DB5BC",
          dark: "#007c85",
        },
        secondary: {
          main: "#FA9810",
          surface: "#FFFCF5",
          border: "#FEEABC",
        },
        danger: {
          main: "#E11428",
          surface: "#FFFAFA",
          border: "#F5B1B7",
          dark: "#c91022",
        },
        success: {
          main: "#43936C",
          surface: "#F8FBF9",
          border: "#B8DBCA",
        },
        neutral: {
          20: "#FAFAFA",
          30: "#EDEDED",
          40: "#E0E0E0",
          70: "#757575",
          90: "#404040",
          100: "#1D1F20",
        },
      },
    },
  },
  plugins: [],
};
