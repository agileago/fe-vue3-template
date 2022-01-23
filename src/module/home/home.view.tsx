import type { ComponentProps } from 'vue3-oop'
import { Autobind, Component, Mut, VueComponent, VueService } from 'vue3-oop'
import { Button, Modal } from 'ant-design-vue'
import './home.scss'

class CountService extends VueService {
  @Mut() count = 2
  @Autobind()
  add() {
    this.count++
  }
}

@Component()
export default class HomeView extends VueComponent {
  static defaultProps: ComponentProps<any> = []
  constructor(private countService: CountService) {
    super()
  }
  @Mut() showModal = true
  render() {
    const { countService } = this
    return (
      <>
        <Button onClick={() => (this.showModal = true)}>打开弹窗</Button>
        <Modal v-model:visible={this.showModal}>
          <Button onClick={countService.add}>{countService.count}</Button>
        </Modal>
      </>
    )
  }
}
