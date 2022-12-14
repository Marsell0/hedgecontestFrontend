import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/queries',
    name: 'queries',
    meta: {layout: 'base'},
    component: () => import('../views/QueriesView.vue')
  },
  {
    path: '/create_query',
    name: 'create_query',
    meta: {layout: 'base'},
    component: () => import('../views/CreateQueryView.vue')
  },
  {
    path: '/query/:id',
    name: 'query',
    meta: {layout: 'base'},
    component: () => import('@/views/QueryView.vue')
  },
  {
    path: '/contest_settings',
    name: 'conSet',
    meta: {layout: 'base'},
    component: () => import('@/views/ContestSettingsView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
