module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        jsx: false,
      },
    ],
  ],
  plugins: [
    ['@vue3-oop/babel-plugin-jsx', { enableObjectSlots: false }],
    ['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: 'css' }],
  ],
}
