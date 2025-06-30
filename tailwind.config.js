// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00B14F",
        secondary: "#0070F3",
        background: "#f9f9f9",
        darkText: "#1e1e1e",
        lightText: "#7b7b7b",
        danger: "#ff4d4f",
      },
      fontFamily: {
        body: ['"Inter"', "sans-serif"],
      },
      fontSize: {
        base: "1rem",
        sm: "0.875rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        card: "0 2px 6px rgba(0,0,0,0.08)",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};
