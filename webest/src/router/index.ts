import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/home/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/tender-detail/:id',
      name: 'TenderDetailPage',
      component: () => import('@/pages/tender-detail/index.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFoundPage',
      component: () => import('@/pages/not-found/index.vue'),
    }
  ]
})

export default router
