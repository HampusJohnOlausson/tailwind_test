module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true, 
      padding: '2rem',
    },
    extend: {
      colors: {
        primary: "#ff4800",
        blue: {
          450: '#5F99F7'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
