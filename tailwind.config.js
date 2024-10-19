// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '500px',    // Small screens
        'md': '768px',    // Medium screens
        'lg': '1024px',   // Large screens
        'xl': '1280px',   // Extra-large screens
      },
      
      colors: {
        black: {
          DEFAULT: '#000000',
          lighter: '#1c4b91',
          light: '#173d77',
        },
        pink: '#da2f68',
        orange: '#f89e00',
      },
    },
  },
  plugins: [],
};
