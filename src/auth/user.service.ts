import { Ref, VueService } from 'vue3-oop'

export interface User {
  name: string
  age?: number
}

export class UserService extends VueService {
  @Ref() user?: User
  async login() {
    await new Promise(resolve => setTimeout(resolve, 1000))
    this.user = {
      name: 'rjh',
      age: 18,
    }
  }
}
