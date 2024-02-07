module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-inherit'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer')
  ]
}
