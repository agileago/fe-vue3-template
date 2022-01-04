import { Component, Mut, VueComponent, VueService } from 'vue3-oop'
import './home.scss'

class CountService extends VueService {
  @Mut() count = 1
  add() {
    this.count++
  }
  remove() {
    this.count--
  }
}

@Component()
export default class HomeView extends VueComponent {
  constructor(private countService: CountService) {
    super()
  }
  render() {
    const { countService } = this
    return <div onClick={() => countService.add()}>{this.countService.count}</div>
  }
}
