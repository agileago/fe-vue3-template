import { Autobind, Component, Mut, VueComponent, VueService } from 'vue3-oop'
import { Button } from 'ant-design-vue'

class CountService extends VueService {
  @Mut() count = 1
  @Autobind()
  add() {
    this.count++
  }
}

@Component()
export default class HomeView extends VueComponent {
  constructor(private countService: CountService) {
    super()
  }
  render() {
    const { countService } = this
    return <Button onClick={countService.add}>{countService.count}</Button>
  }
}
