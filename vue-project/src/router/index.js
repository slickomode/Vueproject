import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import AllView from '../views/AllView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: AllView,
      props: {
        welcomeMessage: 'Välkommen till CountrySearch!'
      }
    },
    {
      path: '/search',
      name: 'search',
      component: HomeView
    },
    {
      path: '/countries',
      name: 'countries',
      component: AboutView
    }
  ]
})

export default router
