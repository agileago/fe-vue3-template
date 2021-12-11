import { VueComponent } from 'vue3-oop'
import './app.scss'
import logo from './oop.png'

export class App extends VueComponent {
  render() {
    return (
      <div class={'name'}>
        app start
        <img src={logo} width={'100'} />
      </div>
    )
  }
}
