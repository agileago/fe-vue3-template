const { defineConfig } = require('@vue/cli-service')

// region 当前模式  处理环境变量
const mode = (process.env.VUE_APP_MODE = process.VUE_CLI_SERVICE.mode)
const command = mode === 'development' ? 'serve' : 'build'
if (command === 'build') process.env.NODE_ENV = 'production'
// endregion

module.exports = defineConfig({
  lintOnSave: false,
  publicPath: 'http://localhost:8080/',
  chainWebpack: config => {
    // ts 编译时启用全局编译，类似 tsc, 对类型的metadata友好
    ;['ts', 'tsx'].forEach(ext => {
      config.module
        .rule(ext)
        .use('ts-loader')
        .tap(options => {
          options.transpileOnly = false
          return options
        })
    })
  },
  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0',
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
  },
})
