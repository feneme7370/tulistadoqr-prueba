import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ParrillaPipiCucuView from '@/views/005-parrilla-pipi-cucu/ParrillaPipiCucuView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/005-parrilla-pipi-cucu',
      name: '005-parrilla-pipi-cucu',
      component: ParrillaPipiCucuView
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
