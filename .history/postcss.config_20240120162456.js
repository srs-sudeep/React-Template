import tailwindcss from './tailwindcss'
import autoprefixer from './autoprefixer'

module.exports = {
  plugins: [tailwindcss('./tailwind.js'), autoprefixer],
}
