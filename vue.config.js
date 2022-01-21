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
  productionSourceMap: false,
  publicPath,
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
        BASE_URL: publicPath,
      })
      return definitions
    })
    // ts 编译时启用全局编译，类似 tsc, 对类型的metadata友好
    // config.plugins.delete('fork-ts-checker')
    // ;['ts', 'tsx'].forEach(ext => {
    //   config.module
    //     .rule(ext)
    //     .use('ts-loader')
    //     .tap(options => {
    //       options.transpileOnly = false
    //       return options
    //     })
    // })
  },
  configureWebpack: config => {
    // 热更新
    if (mode === 'development') {
      const rule = config.module.rules.find(k => k.test.source === '\\.tsx$')
      rule.use.push('@vue3-oop/jsx-hot-loader')
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
