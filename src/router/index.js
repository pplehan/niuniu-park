import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: ()=>import('@/views/Login/index.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: ()=>import('@/views/Cart/index.vue')
    },
    {
      path: '/cow/:id',
      name: 'cow',
      component: ()=>import('@/views/Cow/index.vue')
    },
    {
      path: '/knowproducts',
      name: 'knowproducts',
      component: ()=>import('@/views/KnowProducts/index.vue')
    },
    {
      path: '/knowcows',
      name: 'knowcows',
      component: ()=>import('@/views/KnowCows/index.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: ()=>import('@/views/Checkout/index.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name: 'notFound',
      component: ()=>import('@/views/NotFound/index.vue')
    },
  ]
})

export default router