import { RouteRecordRaw } from '@vue3-oop/vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/login', component: () => import('@/auth/login.view') },
  { path: '/list', component: () => import('@/module/list/list.view') },
  { path: '/', component: () => import('@/module/home/home.view') },
]
