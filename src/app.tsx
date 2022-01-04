import { Component, VueComponent } from 'vue3-oop'
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/lib/locale/zh_CN'
import { RouterView } from '@vue3-oop/vue-router'
import { RouterService } from '@/router/router.service'
import { UserService } from '@/auth/user.service'
import { customBusinessInterceptor, HttpService } from '@/api/http'
import { Provider } from 'injection-js'
import { onUnmounted } from 'vue'
import RouterStart from '@/router'

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
export class App extends VueComponent {
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
