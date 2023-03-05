/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,stories.tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        inter: ['Inter']
      },
      spacing: {
        width : {
          '150' : '730px'
        },
        height: {
          '150' : '730px'
        }
      }
    },
  },
  plugins: [],
}
