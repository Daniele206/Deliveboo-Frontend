import { createRouter, createWebHashHistory } from "vue-router";

import Home from './pages/Home.vue';
import Restaurants from './pages/Restaurants.vue';
import DishMenu from './pages/DishMenu.vue';
import Error404 from './pages/Error404.vue';
import Success from './pages/Success.vue';
import NotSuccess from './pages/NotSuccess.vue';

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/restaurants',
      name: 'restaurants',
      component: Restaurants
    },
    {
      path: '/dishMenu',
      name: 'dishmenu',
      component: DishMenu
    },
    {
      path: '/Notsuccess',
      name: 'Notsuccess',
      component: NotSuccess
    },
    {
      path: '/Success',
      name: 'Success',
      component: Success
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error-404',
      component: Error404
    }
  ]
});

export { router };
