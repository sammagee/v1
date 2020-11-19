const colors = require('tailwindcss/colors')
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, '$1')
    .replace(/\.0$/, '')
const rem = (px) => `${round(px / 16)}rem`
const em = (px, base) => `${round(px / base)}em`

module.exports = {
  purge: {
    mode: 'all',
    content: [
      './pages/**/*.tsx',
      './components/**/*.tsx',
    ],
  },
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        orange: colors.orange,
        teal: colors.teal,

        // set the primary color
        primary: colors.amber,
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
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              color: theme('colors.gray.300'),
              a: {
                color: theme('colors.primary.400'),
                transitionDuration: theme('transitionDuration.200'),
                transitionProperty: theme('transitionProperty.colors'),
                transitionTimingFunction: theme('transitionTimingFunction.in-out'),
                '&:hover': {
                  color: theme('colors.primary.300'),
                },
              },
              strong: {
                color: theme('colors.gray.300'),
                fontWeight: theme('fontWeight.bold'),
              },
              'ol > li::before': {
                content: 'counter(list-counter) "."',
                position: 'absolute',
                fontWeight: '400',
                color: theme('colors.gray.500'),
              },
              'ul > li::before': {
                content: '""',
                position: 'absolute',
                backgroundColor: theme('colors.gray.500'),
                borderRadius: '50%',
              },
              code: {
                backgroundColor: theme('colors.gray.900'),
                borderRadius: rem(4),
                color: theme('colors.gray.300'),
                fontWeight: '600',
                padding: `${em(6, 16)} ${em(8, 16)}`,
              },
            },
          ],
        },
      }),
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
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
