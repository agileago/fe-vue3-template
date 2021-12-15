import { Component, VueComponent } from 'vue3-oop'
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/lib/locale/zh_CN'
import { RouterView } from '@vue3-oop/vue-router'
import { RouterService } from '@/router/router.service'
import { UserService } from '@/auth/user.service'
import { customBusinessInterceptor, customReuestToken } from '@/api/http'
import { Provider } from 'injection-js'
import { onUnmounted } from 'vue'

const HttpProvider: Provider = {
  provide: customReuestToken,
  useFactory(routerService: RouterService, userService: UserService) {
    const clean = customBusinessInterceptor(routerService, userService)
    onUnmounted(clean)
  },
  deps: [RouterService, UserService],
}

@Component({
  providers: [RouterService, UserService, HttpProvider],
})
export class App extends VueComponent {
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <RouterView></RouterView>
      </ConfigProvider>
    )
  }
}
