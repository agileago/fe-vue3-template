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
    ['@vue3-oop/babel-plugin-jsx', { enableObjectSlots: false, slotStable: true }],
    ['import', { libraryName: 'ant-design-vue', libraryDirectory: 'es', style: 'css' }],
  ],
}
