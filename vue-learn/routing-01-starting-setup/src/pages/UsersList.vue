<template>
  <div>
    <button @click="confirmInput">Confirm</button>
    <ul>
      <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  methods: {
    confirmInput() {
      //
      
    }
  },
  beforeRouteEnter(to, from, next){
    console.log(to, from, next);
    next();
  },
  beforeRouteLeave(to, from, next){
    console.log('UsersList Cmp beforeRouteLeave');
    console.log(to, from);
    const userWantsToLeave = confirm('Are you sure you want to leave?');
    next(userWantsToLeave);

  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>