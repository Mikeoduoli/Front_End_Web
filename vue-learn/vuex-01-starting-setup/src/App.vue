<template>
  <div>
    <base-container title="Vuex" v-if="isAuth">
      <!-- <h3>{{ counter }}</h3> -->
      <h3>{{ finalCounter }}</h3>
      <favorite-value></favorite-value>
      <button @click="addOne">Add 10</button>
      <change-counnter></change-counnter>
    </base-container>
    <base-container title="Auth">
      <user-auth></user-auth>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import ChangeCounnter from './components/ChangeCounnter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

import { mapGetters } from 'vuex';

export default {
  components: {
    BaseContainer,
    ChangeCounnter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    // counter() {
    //   // return this.$store.state.counter;
    //   // using getters
    //   // return this.$store.getters.finalCounter;
    // },
    // Using mapper helpers to access getters
    ...mapGetters(['finalCounter']),
    isAuth() {
      return this.$store.getters.isUserAuthenticated;
    },
  },
  methods: {
    addOne() {
      // this.$store.state.counter++;
      // this.$store.commit('increase', {value: 10})
      // using actions
      this.$store.dispatch('increase', { value: 10 });
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
