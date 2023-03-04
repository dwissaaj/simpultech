/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,stories.tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        inter: ['Inter']
      }
    },
  },
  plugins: [],
}
