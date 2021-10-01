module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '2560px',
      }
    },
    fontFamily: {
      'nissan': ['Roboto']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
