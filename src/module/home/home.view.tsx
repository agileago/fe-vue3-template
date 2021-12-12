import { Component, VueComponent } from 'vue3-oop'
import { RouterService } from '@/router/router.service'
import { watch } from 'vue'
import { RouterLink } from '@vue3-oop/vue-router'

@Component()
export default class HomeView extends VueComponent {
  constructor(private routerService: RouterService) {
    super()
    watch(
      () => routerService.currentRoute,
      v => console.log('change'),
    )
  }
  render() {
    return (
      <div>
        home
        <div>
          link <RouterLink to={'/login'}>login</RouterLink>
        </div>
      </div>
    )
  }
}
