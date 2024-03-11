import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '2-demo1',
      name: '2-demo1',
      component: () => import('@/views/2-demo1/IndexView.vue')
    },
    {
      path: '/3-demo2',
      name: '3-demo2',
      component: () => import('@/views/3-demo2/IndexView.vue')
    },
  ]
})

export default router
