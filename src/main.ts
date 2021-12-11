import '@abraham/reflection'
import { createApp } from 'vue'
import { App } from '@/app'

console.log(process.env.NODE_ENV, process.env.VUE_APP_MODE)

createApp(App).mount('#app')
