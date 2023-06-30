/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "button": "var(--button)"
      },
      backgroundImage: {
        'bg-about': "url('./src/assets/bg-1.png')",
      }
    },
  },
  plugins: [],
}
