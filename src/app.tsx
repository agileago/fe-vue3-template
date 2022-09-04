import { Component, VueComponent } from 'vue3-oop'
import { RouterService } from '@/router/router.service'
import RouterStart from '@/router'
import { UserService } from '@/auth/user.service'
import { HttpInterceptor } from '@/api/http.interceptor'
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/lib/locale/zh_CN'
import { RouterView } from 'vue-router'
import './theme/app.scss'

@Component({ providers: [RouterService, RouterStart, UserService, HttpInterceptor] })
export class App extends VueComponent {
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
