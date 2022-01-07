import '@abraham/reflection'
import { createApp, onUnmounted } from 'vue'
import { Provider } from 'injection-js'
import { customBusinessInterceptor, HttpService } from '@/api/http'
import { RouterService } from '@/router/router.service'
import { UserService } from '@/auth/user.service'
import { Component, VueComponent } from 'vue3-oop'
import RouterStart from '@/router'
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/lib/locale/zh_CN'
import { RouterView } from 'vue-router'

const HttpProvider: Provider = {
  provide: HttpService,
  useFactory(routerService: RouterService, userService: UserService) {
    const [http, clean] = customBusinessInterceptor(routerService, userService)
    onUnmounted(clean)
    return http
  },
  deps: [RouterService, UserService],
}

@Component({ providers: [RouterService, RouterStart, UserService, HttpProvider] })
class App extends VueComponent {
  // 此处的服务优先执行
  constructor(private routerStart: RouterStart, private httpService: HttpService) {
    super()
  }
  render() {
    return (
      <ConfigProvider locale={zhCN}>
        <RouterView></RouterView>
      </ConfigProvider>
    )
  }
}

const app = createApp(App)
app.mount('#app')
