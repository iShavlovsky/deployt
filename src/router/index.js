import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'
import HomeView from '../pages/HomePage.vue';
import NotFound404 from "@/pages/NotFound404.vue";
import BlogPage from "@/pages/BlogPage.vue";
import Articles from "@/pages/ArticlesPage.vue";

export default isSsr => {
  const createHistory = isSsr ? createMemoryHistory : createWebHistory;
  const routes = [
    {
      path: '/',
      name: 'home',
      props: true,
      component: HomeView,
      meta: {content: 'home'}
    },
    {
      path: '/articles',
      name: 'blog.item',
      component: Articles,
      meta: { content: 'articles' }

    },
    {
      path: '/articles/:id',
      name: 'articles.item',
      props: true,
      component: BlogPage,
      meta: { content: 'blog' }
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound404
    }
  ]

  return createRouter({
    routes,
    history: createHistory(import.meta.env.BASE_URL)
  });
}
