import './assets/scss/main.scss';

import 'bootstrap';


import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router.js';

createApp(App).use(router).mount('#app')
