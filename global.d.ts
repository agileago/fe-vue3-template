/// <reference types="vite/client" />
declare module '*.vue' {
  import Vue from "vue";
  export default Vue
}
// 热更新需要用
declare var __VUE_HMR_RUNTIME__: any
// 环境变量定义
declare namespace __WebpackModuleApi  {
  interface NodeProcess {
    env: {
      // 程序运行在什么模式下面
      VUE_APP_MODE: string
      // 部署路径 / or /app/
      VUE_APP_BASE_ROUTE: string
      // 静态资源路径
      VUE_APP_BASE_URL: string
    }
  }
}
