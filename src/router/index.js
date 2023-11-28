import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import CreatePost from '../components/CreatePost.vue';
import PostsList from '../components/PostsList.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/create-post',
      name: 'create-post',
      component: CreatePost,
    },
    {
      path: '/posts',
      name: 'posts-list',
      component: PostsList,
    },
  ],
});

export default router;
