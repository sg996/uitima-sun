import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from '@/layout'

// import games from './modules/games'

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
        path: '/games',
        name: 'gamesLayout',
        component: () => import(/* webpackChunkName: "games" */ '@/views/games/index.vue')
      },
      {
        path: '/games/001',
        name: 'games001',
        component: () => import(/* webpackChunkName: "games" */ '@/views/games/001/[games001].vue')
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/[404].vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

// const asyncRoutes = [
//   games
// ]

// router.beforeEach((to, from, next) => {
//   router.addRoute(asyncRoutes)
//   next({ ...to, replace: true })
// })

export default router
