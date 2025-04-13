/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ptsans: ['"PT Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}