import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router'

import App from './App.vue';
import BaseModal from './components/BaseModal.vue';
import AllUsers from './pages/AllUsers.vue';
import CourseGoals from './pages/CourseGoals.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: AllUsers
    },
    {
      path: '/goals',
      component: CourseGoals
    },
    // {
    //   path: '/contact',
    //   component: () => import('./pages/Contact.vue')
    // },
    // {
    //   path: '/products',
    //   component: () => import('./pages/Products.vue'),
    //   children: [
    //     {
    //       path: ':productId',
    //       component: () => import('./pages/ProductDetail.vue')
    //     }
    //   ]
    // },
    // {
    //   path: '/:catchAll(.*)',
    //   component: () => import('./pages/NotFound.vue')
    // }
  ]
})

const app = createApp(App);

app.component('base-modal', BaseModal);

router.isReady().then(() => {
  app.mount('#app');
});

// app.mount('#app');

app.use(router);
