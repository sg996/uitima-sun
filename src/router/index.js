import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue')
      },
      {
        path: '/about',
        name: 'about',
        component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
