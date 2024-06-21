import { createRouter, createWebHashHistory } from "vue-router";

import Home from './pages/Home.vue';
import Restaurants from './pages/Restaurants.vue';
import DishMenu from './pages/DishMenu.vue';
import Cart from './pages/Cart.vue';
import Error404 from './pages/Error404.vue';

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
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/dishMenu',
      name: 'dishmenu',
      component: DishMenu
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error-404',
      component: Error404
    }
  ]
});

export { router };
