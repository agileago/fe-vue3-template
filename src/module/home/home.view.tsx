import { VueComponent } from 'vue3-oop'
import styles from './home.module.scss'

class HomeView extends VueComponent {
  render() {
    return <div class={styles.home}>111</div>
  }
}

export default HomeView
