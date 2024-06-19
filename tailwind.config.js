/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"]
      }
    },
    colors: {
      "transparent": "transparent",
      "current": "currentColor",
      "white": "#ffffff",
      "black": "#000000",
      "azul": {
        100: "#F2F4FC",
        200: "#E5E8F9",
        300: "#C7CEF4",
        400: "#A3B0EE",
        500: "#768DE8",
        600: "#205CE2",
        700: "#1D52CA",
        800: "#1947AF",
        900: "#143A8F",
        1000: "#0E2965",
      },
      'chaos-black': {
        100: "#F2F2F2",
        200: "#E4E4E4",
        300: "#C6C6C6",
        400: "#A2A2A2",
        500: "#737373",
        600: "#101010",
        700: "#0E0E0E",
        800: "#0C0C0C",
        900: "#0A0A0A",
        1000: "#070707",
      },
      'chocobo-feather': {
        100: "#FFF9F2",
        200: "#FEF3E4",
        300: "#FDE7C6",
        400: "#FDD9A1",
        500: "#FCCB72",
        600: "#FBBC05",
        700: "#E1A804",
        800: "#C29204",
        900: "#9F7703",
        1000: "#705402",
      }
    },
  },
  plugins: [],
}

