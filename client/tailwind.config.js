/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto Mono", "monospace"],
      },
      backgroundImage: {
        "radial-gradient": "",
      },
      gridTemplateColumns: {
        20: "repeat(20, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-14": "span 14 / span 14",
        "span-15": "span 15 / span 15",
      },
    },
  },
  plugins: [],
};

/* background-color: #e5e5f7;
opacity: 0.8;
background-image: radial-gradient(#f30000 1.25px, #e5e5f7 1.25px);
background-size: 25px 25px; */
