import Layout from '@/layout'

export default {
  path: '/games',
  name: 'games',
  component: Layout,
  redirect: '/games/index',
  children: [
    {
      path: '/index',
      name: 'gamesLayout',
      component: () => import(/* webpackChunkName: "games" */ '@/views/games/index.vue')
    },
    {
      path: '/001',
      name: 'games001',
      component: () => import(/* webpackChunkName: "games" */ '@/views/games/001/[games001].vue')
    }
  ]
}
