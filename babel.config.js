module.exports = {
  presets: ['@vue/cli-plugin-babel/preset', 'babel-preset-vite'],
  plugins: [['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: 'css' }]],
}
