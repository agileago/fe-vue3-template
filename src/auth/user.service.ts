import { Ref, VueService } from 'vue3-oop'
import { RouterService } from '@/router/router.service'
import { Injectable } from 'injection-js'

export interface User {
  name: string
  age?: number
}

const TOKEN = 'TOKEN'

@Injectable()
export class UserService extends VueService {
  constructor(private routerService: RouterService) {
    super()
    this.guardRouter()
  }
  @Ref() user? = this.getUser()
  async login() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    this.user = {
      name: 'rjh11',
      age: 18,
    }
    localStorage.setItem(TOKEN, JSON.stringify(this.user))
    this.routerService.router.replace({ path: '/' })
  }
  guardRouter() {
    this.routerService.router.beforeEach(async (to, frome) => {
      if (!this.user && to.fullPath !== '/login') return { path: '/login' }
    })
  }
  getUser() {
    const store = localStorage.getItem(TOKEN)
    if (!store) return
    return JSON.parse(store) as User
  }
}
