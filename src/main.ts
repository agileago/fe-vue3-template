import '@abraham/reflection'
import { App, createApp } from 'vue'
import { App as Bootstrap } from '@/app'
import config from '@/config'

console.log(config.env)

let app: App<Element> | null

export function mount(target: Element | null = document.getElementById('app')) {
  if (!target) return
  app = createApp(Bootstrap)
  app.mount(target)
}
export function unmount() {
  app?.unmount()
  app = null
}

// 微前端环境下，注册mount和unmount方法
if (window.__MICRO_APP_ENVIRONMENT__) {
  // @ts-ignore
  window[`micro-app-${window.__MICRO_APP_NAME__}`] = { mount, unmount }
} else {
  mount() // 非微前端环境直接渲染
}
