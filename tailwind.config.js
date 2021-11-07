module.exports = {
  important: true,
  prefix: 'tw-',
  purge: [
    './components/**/*.vue',
    './pages/**/*.vue'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      minHeight: {
        '155': '55rem',
      },
      height: {
        '17': '4.125rem',
        '133': '33rem',
        '144': '44rem'
      },
      width: {
        '133': '33rem',
        '144': '44rem'
      }
    },
  },
  variants: {
    animation: ['motion-safe'],
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled']
    }
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
}
