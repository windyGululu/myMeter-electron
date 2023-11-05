import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'in',
      redirect: '/index'
      // component: HomeView
    },


    {
      path: '/index',
      name: 'index',
      component: () => import('../views/index.vue'),
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/ApiManager',
          name: 'ApiManager',
          component: () => import('../views/ApiManager.vue'),

        },

      ]
    },

  ]
})

export default router
