import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/userStore';
import LandingPage from '../view/LandingPage.vue'
import LoginView from '../view/LoginView.vue'
import RegisterView from '../view/RegisterView.vue'
import WikiView from '../view/WikiView.vue'
import RecordsPage from '../view/RecordsPage.vue'
import PhaserGame from '../game/PhaserGame.vue'

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
  },
  {
    name: 'game',
    path: '/game',
    component: PhaserGame,
    meta: { estaLogeado: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    if (to.meta.estaLogeado && !userStore.estaLogeado) {
      next({ name: 'login' });
    } else {
      next();
    }
  });

export default router
