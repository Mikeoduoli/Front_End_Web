import { createApp } from 'vue';


import App from './App.vue';
import router from './router';

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     {
//       path: '/',
//       name: 'home',
//       redirect: '/teams',
//     },
//     {
//       path: '/teams',
//       name: 'teams',
//       component: TeamsList,
//       meta: {needsAuth: true},
//       children: [
//         {
//           path: ':teamId',
//           component: TeamMembers,
//           name: 'team-members',
//           props: true,
//         },
//       ],
//     },
//     {
//       path: '/users',
//       name: 'users',
//       component: UsersList,
//       beforeEnter(to, from, beforeEnter){
//         console.log('users beforeEnter');
//         console.log(to, from);
//         next();
//       },
//     },
//     // this route is converted into a nested route inside the route with path /teams
//     // {
//     //   path: '/teams/:teamId',
//     //   name: 'team-members',
//     //   component: TeamMembers,
//     //   // we add here an option of props to true
//     //   props: true,
//     // },
//     {
//       path: '/:notFound(.*)',
//       name: 'not-found',
//       redirect: '/teams',
//       component: NotFound,
//     }
//   ],
//   linkActiveClass: 'active',
//   // linkExactActiveClass: 'active',
//   scrollBehavior(to, from, savedPosition){
//     console.log(to, from, savedPosition)
//     if(savedPosition){
//       return savedPosition;
//     }
//     return { left: 0, top: 0 };
//   }
// });

router.beforeEach(function(to, from ,next) {
  console.log('Global beforeEach');
  console.log(to, from)
  next();
  // next(false); will cancell navigation to the next page
  // if (to.name === 'team-members'){
  //   next();
  // } else {
  //   next({name: 'team-members', params: {teamId: 't2'}});
  // }
});

const app = createApp(App);

app.use(router);
app.mount('#app');
