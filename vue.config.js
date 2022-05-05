const { defineConfig } = require('@vue/cli-service')
const WebpackAliyunOss = require('webpack-aliyun-oss')

// region 当前模式  处理环境变量
const mode = (process.env.VUE_APP_MODE = process.VUE_CLI_SERVICE.mode)
const command = mode === 'development' ? 'serve' : 'build'
if (command === 'build') process.env.NODE_ENV = 'production'
// endregion

// region cdn处理
const CDN = {
  HOST: 'https://cdn.xxx.com', // CDN域名
  OSS_DIR: '/XXX/XXX', // 上传到oss的文件目录
}
let publicPath = ''
switch (mode) {
  case 'development':
    break
  case 'production':
    // publicPath = CDN.HOST + CDN.OSS_DIR
    break
}
publicPath = publicPath + '/'
// endregion

module.exports = defineConfig({
  lintOnSave: false,
  publicPath,
  productionSourceMap: false,
  transpileDependencies: true,
  chainWebpack: config => {
    config.entry('app').clear().add('./src/main.tsx')
    config.plugin('html').tap(args => {
      args[0].minify = false
      return args
    })
    config.plugin('define').tap(definitions => {
      Object.assign(definitions[0]['process.env'], {
        MODE: JSON.stringify(mode),
        DEV: command === 'serve',
        PROD: command === 'build',
        BASE_URL: JSON.stringify(publicPath),
      })
      return definitions
    })
    config.resolve.alias.delete('@')
    config.resolve.plugin('tsconfig-paths').use(require('tsconfig-paths-webpack-plugin'))
  },
  configureWebpack: config => {
    // 类组件热更新
    if (mode === 'development') {
      const rule = config.module.rules.find(k => k.test.source === '\\.tsx$')
      rule?.use.push('@vue3-oop/jsx-hot-loader')
    }
    // cdn
    // if (mode === 'prodcution') {
    //   config.plugins.unshift(
    //     new WebpackAliyunOss({
    //       from: ['./dist/**', '!./dist/**/*.html'],
    //       dist: CDN.OSS_DIR,
    //       region: process.env.OSS_REGION,
    //       accessKeyId: process.env.OSS_KEY,
    //       accessKeySecret: process.env.OSS_SECRET,
    //       bucket: process.env.OSS_BUCKET,
    //       verbose: true,
    //     }),
    //   )
    // }
  },
  css: {
    loaderOptions: {
      css: {
        modules: {
          localIdentName: '[local]--[hash:base64:5]',
          exportLocalsConvention: 'camelCaseOnly',
          auto: true,
        },
      },
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0',
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    proxy: {
      // '/api': {
      //   target: 'https://xxxx',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': '',
      //   },
      // },
    },
  },
})
