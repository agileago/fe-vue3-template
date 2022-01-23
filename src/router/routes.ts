import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/login', component: () => import('@/auth/login.view') },
  { path: '/', component: () => import('@/module/home/home.view') },
]
