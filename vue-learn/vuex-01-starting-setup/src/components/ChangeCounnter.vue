<template>
  <div>
    <button @click="increase({value: 10})">Add 2</button>
    <button @click="addOne">Add 2</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    // addOne(){
    //   this.$store.dispatch('addOne');
    // },
    //  Using mapActions
    ...mapActions(['addOne', 'increase']),
  },
}

</script>

<style scoped>

</style>