export default {
  content: ["./index.html", "./src/**/*.js"],
  darkMode: 'class',
  theme: {
      screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1400px",
    },
    extend: {
        colors: {
        bodyColor: "#0a000aff",
        sectionColor: "#1a0019ff",
        cardColor: "#330033ff",
        titleColor: "#750075ff",
        textColor: "#ffffffff",
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "12px",
        md: "32px",
      },
    },
    fontFamily: {
      Jost: ["Jost", "sans-serif"],
      DancingScript: ["Dancing Script", "cursive"],
    },
  },
  plugins: [],
}
