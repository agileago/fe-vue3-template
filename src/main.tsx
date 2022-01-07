import '@abraham/reflection'
import { createApp } from 'vue'
import { RouterService } from '@/router/router.service'
import { UserService } from '@/auth/user.service'
import { Component, VueComponent } from 'vue3-oop'
import RouterStart from '@/router'
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/lib/locale/zh_CN'
import { RouterView } from 'vue-router'
import { HttpInterceptor } from '@/api/http.interceptor'
import { setup } from '@/setup'

@Component({ providers: [RouterService, RouterStart, UserService, HttpInterceptor] })
class App extends VueComponent {
  // 此处的服务优先执行
  constructor(private routerStart: RouterStart, private httpInterceptor: HttpInterceptor) {
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
setup(app)
app.mount('#app')
