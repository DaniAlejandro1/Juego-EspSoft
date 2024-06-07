import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../view/LandingPage.vue'
import LoginView from '../view/LoginView.vue'
import RegisterView from '../view/RegisterView.vue'
import WikiView from '../view/WikiView.vue'
import RecordsPage from '../view/RecordsPage.vue'

const routes = [
  {
    name: 'landing',
    path: '/',
    component: LandingPage
  },
  {
    name: 'login',
    path: '/login',
    component: LoginView
  },
  {
    name: 'register',
    path: '/register',
    component: RegisterView
  },
  {
    name: 'wiki',
    path: '/wiki',
    component: WikiView
  },
  {
    name: 'records',
    path: '/records',
    component: RecordsPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
