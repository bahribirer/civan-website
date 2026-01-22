import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: 'about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        },
        {
          path: 'products',
          name: 'products',
          component: () => import('../views/ProductsView.vue')
        },
        {
          path: 'services',
          name: 'services',
          component: () => import('../views/ServicesView.vue')
        },
        {
          path: 'contact',
          name: 'contact',
          component: () => import('../views/ContactView.vue')
        },
        {
          path: 'blog',
          name: 'blog',
          component: () => import('../views/BlogView.vue')
        }
      ]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
