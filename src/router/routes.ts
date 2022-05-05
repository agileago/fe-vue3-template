import type { RouteRecordRaw } from 'vue-router'

let routes: RouteRecordRaw[] = [{ path: '/login', component: () => import('@/auth/login.view') }]

// 处理模块里面分布的路由,用来实现分布式的路由
const rc = require.context('../module', true, /\.router\.ts$/)
rc.keys().forEach(m => (routes = routes.concat(rc(m).default)))

export { routes }
