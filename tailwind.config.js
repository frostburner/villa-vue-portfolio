/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage:{
       'bg-about' : "url('/img/5302920.jpg')",
      },
      colors: {
        "primary" : "#00e1e2",
        "secondary" : "#f6f6f6",
        "default" : "#454545",
        "neutral" : "#262626",
        
      },
    },
  },
  plugins: [],
}

