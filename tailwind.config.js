module.exports = {
  purge: [
    'public/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        footerBackground: '#191919',
        secondPageBackground: '#fafafa'
      },
      fontFamily: {
        body: ['Nunito']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
