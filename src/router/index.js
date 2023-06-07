import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import HomeView from '../pages/HomePage.vue';
import NotFound404 from "@/pages/NotFound404.vue";
export default isSsr => {
  const createHistory = isSsr ? createMemoryHistory : createWebHistory;
  const routes = [
  {
    path: '/',
    name: 'home',
    props: true,
    component: HomeView
  },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound404
    }
]

const router = createRouter({
  routes,
  history: createHistory(import.meta.env.BASE_URL)
});

  return router;
}
