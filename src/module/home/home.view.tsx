import { Component, VueComponent } from 'vue3-oop'
import styles from './home.module.scss'

@Component()
export default class HomeView extends VueComponent {
  render() {
    return (
      <div class={styles.home}>
        <span>1111</span>
      </div>
    )
  }
}
