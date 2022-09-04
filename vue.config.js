const { defineConfig } = require('@vue/cli-service')
const WebpackAliyunOss = require('webpack-aliyun-oss')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

// region 当前模式  处理环境变量
const mode = (process.env.VUE_APP_MODE = process.VUE_CLI_SERVICE.mode)
const command = mode === 'development' ? 'serve' : 'build'
if (command === 'build') process.env.BABEL_ENV = process.env.NODE_ENV = 'production'
// endregion

module.exports = defineConfig({
  lintOnSave: false,
  publicPath: process.env.VUE_APP_BASE_URL,
  productionSourceMap: false,
  transpileDependencies: true,
  chainWebpack: config => {
    // html 不压缩
    config.plugin('html').tap(args => {
      args[0].minify = false
      return args
    })
    config.resolve.plugin('tsconfig-paths').use(require('tsconfig-paths-webpack-plugin'))
  },
  configureWebpack: config => {
    // 类组件热更新
    if (command === 'serve') {
      const rule = config.module.rules.find(k => k.test.source === '\\.tsx$')
      rule?.use.push('@vue3-oop/jsx-hot-loader')
    }
    // 上传阿里OSS cdn
    if (command === 'build' && /^http/.test(process.env.VUE_APP_BASE_URL)) {
      // 根据路径获取Oss目录
      const OSS_DIR = new URL(process.env.VUE_APP_BASE_URL).pathname.replace(/\/$/, '')
      config.plugins.unshift(
        new WebpackAliyunOss({
          from: ['./dist/**', '!./dist/**/*.html'],
          dist: OSS_DIR,
          region: process.env.OSS_REGION,
          accessKeyId: process.env.OSS_KEY,
          accessKeySecret: process.env.OSS_SECRET,
          bucket: process.env.OSS_BUCKET,
          verbose: true,
        }),
      )
    }
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
    host: '0.0.0.0',
    headers: { 'Access-Control-Allow-Origin': '*' },
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
