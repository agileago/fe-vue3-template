declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare namespace __WebpackModuleApi {
  interface NodeProcess {
    VUE_CLI_SERVICE: any
    // 环境变量
    env: {
     NODE_ENV: string
     VUE_APP_MODE: string
     [key: string]: any
    }
  }
}

// 环境变量定义
interface ImportMetaEnv
  extends Readonly<Record<string, string | boolean | undefined>> {
  // 更多环境变量...
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare var __VUE_HMR_RUNTIME__: any
declare var __VUE_HMR_RUNTIME__: any
