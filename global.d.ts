declare module '*.vue' {
  import type { DefineComponent } from "vue";
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
