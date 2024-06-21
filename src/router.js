import { createRouter, createWebHashHistory } from "vue-router";

import Home from './pages/Home.vue';
import Restaurants from './pages/Restaurants.vue';
import Cart from './pages/Cart.vue';
import Error404 from './pages/Error404.vue';

const routes = [
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
    path: '/:pathMatch(.*)*',
    name: 'error-404',
    component: Error404
  }
];

// Configura il router con la funzione scrollBehavior
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  }
});

export { router };
