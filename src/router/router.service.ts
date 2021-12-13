import { getCurrentApp, Hook, VueService } from 'vue3-oop'
import { createRouter, createWebHistory } from '@vue3-oop/vue-router'
import { routes } from '@/router/routes'

export class RouterService extends VueService {
  history = createWebHistory(window.__MICRO_APP_BASE_ROUTE__)
  router = createRouter({
    history: this.history,
    routes,
  })
  get currentRoute() {
    return this.router.currentRoute.value
  }
  app = getCurrentApp()!
  constructor() {
    super()
    this.app.use(this.router)
  }

  @Hook('BeforeUnmount')
  unmount() {
    console.log(111)
    this.history.destroy()
  }
}
