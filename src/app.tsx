import { Component, VueComponent } from 'vue3-oop'
import { ConfigProvider } from 'ant-design-vue'
import zhCN from 'ant-design-vue/lib/locale/zh_CN'
import { RouterView } from '@vue3-oop/vue-router'
import { RouterService } from '@/router/router.service'

@Component({
  providers: [RouterService],
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
