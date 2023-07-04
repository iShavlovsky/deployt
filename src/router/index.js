import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router';
// import HomeView from '../pages/HomePage.vue';
// import NotFound404 from "@/pages/NotFound404.vue";
// import BlogPage from "@/pages/BlogPage.vue";
// import Articles from "@/pages/ArticlesPage.vue";
const HomePage = () => import('@/pages/HomePage.vue');
const Articles = () => import('@/pages/ArticlesPage.vue');
const ArticlePage = () => import('@/pages/ArticlePage.vue');
const NotFound404 = () => import('@/pages/NotFound404.vue');

export default isSsr => {
  const createHistory = isSsr ? createMemoryHistory : createWebHistory;
  const routes = [
    {
      path: '/',
      name: 'home',
      props: true,
      component: HomePage,
      meta: {content: 'home'}
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles,
      meta: {content: 'articles'}

    },
    {
      path: '/articles/:id',
      name: 'articles.item',
      props: true,
      component: ArticlePage,
      meta: {content: 'article'}
    },
    {
      path: '/:pathMatch(.*)*',
      component: NotFound404
    }
  ];

  return createRouter({
    routes,
    history: createHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
      return {top: 0}; // прокрутка страницы в начало
    }
  });
}
