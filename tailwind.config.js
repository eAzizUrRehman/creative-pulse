/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#666666'
      },
      placeholderColor: {
        white: '#ffffff'
      }
    }
  },
  variants: {
    extend: {
      placeholderColor: ['active', 'focus']
    }
  }
}
