// 环境变量定义
interface ImportMetaEnv
  extends Readonly<Record<string, string | boolean | undefined>> {
  // 更多环境变量...
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}

// 热更新需要用
declare var __VUE_HMR_RUNTIME__: any
