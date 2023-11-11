/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            "primary": "#00ffff",
            "default" : "3d3d3d",
            "neutral" : "f6f6f6", 
            "secondary" : "262626"
        }
      },
    },
    plugins: [],
  }