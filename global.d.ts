declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare namespace __WebpackModuleApi {
  interface NodeProcess {
    VUE_CLI_SERVICE: any
    env: {
     NODE_ENV: string
     VUE_APP_MODE: string
     [key: string]: any
    }
  }
}
interface Window {
  /** 是否在微前端环境 */
  __MICRO_APP_ENVIRONMENT__?: boolean
  /** 微前端分配的名字 */
  __MICRO_APP_NAME__?: string
  /** 微前端分配的路有前缀 */
  __MICRO_APP_BASE_ROUTE__?: string
}
