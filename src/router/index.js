import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CompanyView from '@/views/CompanyView.vue'
import DataView from '@/views/DataView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/company/:id',
      name: 'company',
      component: CompanyView
    },
    {
      path: '/data',
      name: 'data',
      component: DataView
    },
    {
      path: '/:pathMatch(.*)',
      redirect: '/'
    }
    // {
    //   path: '/:catchAll(.*)',
    //   redirect: '/'
    // }
  ]
})

export default router
