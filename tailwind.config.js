module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "1/20": "5%",
        "1/15": "6.66%",
        "1/12": "8.33%",
        "1/10": "10%",
        "1/5": "20%",
        "1/4": "25%",
      },
      colors: {
        dark: "#221B22",
        semidark: "#19474D",
        witpink: "#A37B87",
        primary: "#F4F1DE",
        secondary: "#EEFBFC",
      },
      fontSize: {
        xxxl3: "260px",
        xxxl2: "190px",
        xxxl: "170px",
        xxl2: "140px",
        xxl: "110px",
      },
      width: {
        xxxl3: "260px",
        xxxl2: "190px",
        xxxl: "170px",
        xxl2: "140px",
        xxl: "110px",
      },
      height: {
        xxxl3: "260px",
        xxxl2: "190px",
        xxxl: "170px",
        xxl2: "140px",
        xxl: "110px",
      },
      screens: {
        por: {
          raw: "(orientation: portrait)",
        },
        lan: {
          raw: "(orientation: landscape)",
        },
      },
      lineHeight: {
        20: "5rem",
        25: "7.5rem",
      },
    },
  },
  plugins: [],
};
