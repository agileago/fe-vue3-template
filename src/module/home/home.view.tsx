import { Component, Mut, VueComponent, VueService } from 'vue3-oop'
import './home.scss'
import { Button } from 'ant-design-vue'

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
    return <Button onClick={() => countService.add()}>啊啊啊啊啊{this.countService.count}</Button>
  }
}
