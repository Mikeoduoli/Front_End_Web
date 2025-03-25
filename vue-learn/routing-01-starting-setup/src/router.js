import { createRouter, createWebHistory } from 'vue-router';

// import App from './App.vue';
import TeamsList from './pages/TeamsList.vue';
import UsersList from './pages/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './pages/TeamsFooter.vue'
import UsersFooter from './pages/UsersFooter.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/teams',
    },
    {
      path: '/teams',
      name: 'teams',
      component: TeamsList,
      meta: {needsAuth: true},
      children: [
        {
          path: ':teamId',
          component: TeamMembers,
          name: 'team-members',
          props: true,
        },
      ],
    },
    {
      path: '/users',
      name: 'users',
      component: UsersList,
      beforeEnter(to, from, beforeEnter){
        console.log('users beforeEnter');
        console.log(to, from);
        next();
      },
    },
    // this route is converted into a nested route inside the route with path /teams
    // {
    //   path: '/teams/:teamId',
    //   name: 'team-members',
    //   component: TeamMembers,
    //   // we add here an option of props to true
    //   props: true,
    // },
    {
      path: '/:notFound(.*)',
      name: 'not-found',
      redirect: '/teams',
      component: NotFound,
    }
  ],
  linkActiveClass: 'active',
  // linkExactActiveClass: 'active',
  scrollBehavior(to, from, savedPosition){
    console.log(to, from, savedPosition)
    if(savedPosition){
      return savedPosition;
    }
    return { left: 0, top: 0 };
  }
});

export default router;