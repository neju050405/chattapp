import userIcon from "./src/img/userIcon.png";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': '0.75rem',
      }
    },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
}
