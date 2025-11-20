/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#005A9C",
        secondary: "#00A79D",
        "background-light": "#f8f9fa",
        "background-dark": "#101922",
        "text-light-primary": "#212529",
        "text-dark-primary": "#f8f9fa",
        "text-light-secondary": "#6C757D",
        "text-dark-secondary": "#adb5bd",
        "border-light": "#dee2e6",
        "border-dark": "#343a40",
        "surface-light": "#ffffff",
        "surface-dark": "#182431"
      },
      fontFamily: {
        display: ["Manrope", "sans-serif"]
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      }
    }
  },
  plugins: []
};
