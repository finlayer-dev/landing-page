/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#0066cc',
        'primary-dark': '#003399',
        'secondary': '#00cc66',
        'tertiary': '#f2f8ff',
      },
    },
  },
  plugins: [],
}
