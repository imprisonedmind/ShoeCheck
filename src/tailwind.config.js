module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        '300': '30rem',
      },
      minWidth: {
        '200': '200px',
      },
    },

  },
  variants: {
    extend: {
      scale: ['group-hover'],
    },
  },

  plugins: [],
}
