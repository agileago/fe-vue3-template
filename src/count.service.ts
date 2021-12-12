import { Ref, VueService } from 'vue3-oop'

export class CountService extends VueService {
  constructor() {
    super()
    console.log('init')
  }
  @Ref() count = 1
  add() {
    this.count++
  }
}
