/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
  presets: [require('tailwindcss-rem2px-preset')],
}
