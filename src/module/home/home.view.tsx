import { Autobind, Component, Mut, VueComponent, VueService } from 'vue3-oop'
import { Button, Card, Modal } from 'ant-design-vue'
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
  constructor(private countService: CountService) {
    super()
  }
  @Mut() showModal = false
  render() {
    const { countService } = this
    return (
      <Card title={'内容'}>
        <Button type={'primary'} onClick={() => (this.showModal = true)}>
          打开弹窗
        </Button>
        <Modal v-model:visible={this.showModal} onOk={() => (this.showModal = false)}>
          <Button onClick={countService.add}>{countService.count}</Button>
        </Modal>
      </Card>
    )
  }
}
