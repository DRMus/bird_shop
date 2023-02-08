/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mgray": "#F9F9F9",
        "mgreen": "#3FCF5E",
        "mstronggreen": "#06D10E",
        "micon": "#333333",
        "mtextgray": "#4F4F4F",
        "msearchgray": "#F2F2F2",
        "mlightgray": "#E0E0E0",
        "mshadowgray": "#BDBDBD"
      },
      boxShadow: {
        "header" : "0px 10px 60px rgba(0, 0, 0, 0.05), inset 0px -5px 15px rgba(255, 255, 255, 0.44)",
        "card": "-8px -8px 15px #FFFFFF, 8px 8px 20px rgba(0, 0, 0, 0.05)"
      },
      width: {
        "mscreen" : "1320px"
      },
      transitionDuration: {
        "277": "277ms"
      }
    },
  },
  plugins: [],
}
