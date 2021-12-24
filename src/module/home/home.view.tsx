import { Component, Mut, VueComponent, VueService } from 'vue3-oop'
import './home.scss'
import axios from 'axios'
import exports from 'webpack'

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
    this.mount()
  }
  async mount() {
    const res = await axios.get('/api/login')
    console.log(res)
  }
  render() {
    return <div onClick={() => this.countService.add()}>{this.countService.count}</div>
  }
}
