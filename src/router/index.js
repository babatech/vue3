import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/admin',
    name: 'Admin panel',
    component: () => import('../views/Admin.vue')
  },
  {
    path: '/entry/:entry_id',
    name: 'Entry detail',
    component: () => import('../views/Entry.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
