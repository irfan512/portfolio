module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      colors: {
        canvas: "#F8FAFC",
        surface: "#FFFFFF",
        ink: "#0F172A",
        slate: "#475569",
        subtle: "#556579",
        line: "#E2E8F0",
        accent: {
          DEFAULT: "#4338CA",
          hover: "#3730A3",
          soft: "#EEF2FF",
        },
      },
      maxWidth: {
        page: "1120px",
        prose: "68ch",
      },
      borderRadius: {
        lg: "10px",
        xl: "14px",
      },
    },
  },
  plugins: [],
};
