import { Component, VueComponent } from 'vue3-oop'
import { RouterLink } from '@vue3-oop/vue-router'
import './home.css'

@Component()
export default class HomeView extends VueComponent {
  render() {
    return (
      <div class="home">
        <div>
          link <RouterLink to={'/login'}>login</RouterLink>
        </div>
      </div>
    )
  }
}
