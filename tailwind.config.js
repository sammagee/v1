const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './pages/**/*.tsx',
    './components/**/*.tsx',
  ],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        orange: colors.orange,
        teal: colors.teal,
      },
      fontFamily: {
        sans: [
          'Josefin Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ]
      },
      height: {
        '0.5': '0.125rem',
      },
      lineHeight: {
        '0': '0',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['group-hover'],
      boxShadow: ['active', 'group-hover', 'focus-within'],
      ringWidth: ['hover'],
      textColor: ['group-hover', 'group-focus', 'focus-within'],
      translate: ['active', 'group-hover', 'group-focus'],
    },
  },
  plugins: [],
}
