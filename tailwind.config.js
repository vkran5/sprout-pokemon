/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        purpleBtn : '#623bea',
        weak : '#ffafae',
        medium: '#ffd6b3',
        strong: '#c5eeac'

    },
    fontFamily: {
      zen: ['Zen Antique Soft', 'serif'],
      rubik: ['Rubik', 'sans-serif']
      }
    }
  },
  plugins: [],
}