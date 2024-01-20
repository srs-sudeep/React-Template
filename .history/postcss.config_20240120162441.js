import tailwindcss from './tailwindcss'
import autopterfixer from './autoprefixer'
const tailwindcss = require('tailwindcss')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [tailwindcss('./tailwind.js'), autoprefixer],
}
