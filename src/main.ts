import '@abraham/reflection'
import { App, createApp } from 'vue'
import { App as Bootstrap } from '@/app'

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

mount()
