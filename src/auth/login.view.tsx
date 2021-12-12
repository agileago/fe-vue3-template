import { VueComponent } from 'vue3-oop'
import { RouterLink } from '@vue3-oop/vue-router'

export default class LoginView extends VueComponent {
  render() {
    return (
      <div>
        login
        <div>
          <RouterLink to={'/list'}>list</RouterLink>
        </div>
      </div>
    )
  }
}
