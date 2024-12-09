import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/index.vue'
import LoginView from '../views/login/index.vue'
import MarketView from '../views/market/list.vue'
import PersonalView from '../views/personal/index.vue'
import ProfileView from "../views/profile/index.vue";
import WorkbenchView from '../views/workbench/workbench.vue'
import ErrorView from '../views/error/index.vue'
import PublicComponent from '../views/profile/components/public.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        { path: '', name: 'first', component: MarketView },
        { path: 'market', name: 'market', component: MarketView },
        { path: 'personal', name: 'personal', component: PersonalView },
        { path: 'profile', name: 'profile', component: ProfileView,
          children: [
            { path: '', name: 'public', component: PublicComponent }
          ]
        },
        { path: 'workbench', name: 'workbench', component: WorkbenchView },
        { path: 'error', name: 'error', component: ErrorView },
      ]
    },
    { path: '/login', name: 'login', component: LoginView }
  ],
})

export default router
