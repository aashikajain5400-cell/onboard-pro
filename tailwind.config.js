/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        violet: {
          50: "#FAF8FF",
          100: "#F0EBFF",
          200: "#E4DFF5",
          300: "#D9D0F7",
          400: "#B3A9D6",
          500: "#7C5CFC",
          600: "#6A4CE0",
        },
        ink: "#332E4D",
        muted: "#7A7391",
        success: "#3FBE83",
        danger: "#E0555F",
      },
      fontFamily: {
        display: ["'Baloo 2'", "'Nunito Sans'", "sans-serif"],
        body: ["'Nunito Sans'", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"],
      },
      borderRadius: {
        xl2: "26px",
      },
    },
  },
  plugins: [],
};
