module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    // Full list so `xs` sorts before `sm` in the generated CSS.
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        sans: ["'Plus Jakarta Sans'", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      colors: {
        canvas: "#F8FAFC",
        surface: "#FFFFFF",
        tint: "#F4F6FD",
        ink: "#0F172A",
        slate: "#475569",
        subtle: "#556579",
        line: "#E2E8F0",
        mist: "#CBD5E1",
        haze: "#94A3B8",
        lilac: "#A5B4FC",
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
