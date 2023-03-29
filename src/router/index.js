import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../pages/HomePage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    props: true,
    component: HomeView
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
});


export default router;
