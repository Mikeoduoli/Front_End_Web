<template>
  <div>
    <button v-if="!isAuth" @click="login">Login</button>
    <button v-else @click="logout">Logout</button>
    <p>{{ isTestAuth }}</p>
  </div>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    }
  },
  computed: {
    isAuth(){
      return this.$store.getters.isUserAuthenticated;
    },
    isTestAuth(){
      return this.$store.gettters.testAuth
    }
  },
}

</script>

<style scoped>

</style>