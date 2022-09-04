import '@abraham/reflection'
import { createApp } from 'vue'
import { setup } from '@/setup/'
import { App } from '@/app'

const app = createApp(App)
setup(app)
app.mount('#app')
