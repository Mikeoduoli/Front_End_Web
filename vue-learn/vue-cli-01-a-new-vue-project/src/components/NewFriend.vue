<template>
  <div>
    <form @submit.prevent="submitData" ref="formInput">
      <input type="text" v-model="name" placeholder="Enter name" />
      <input type="number" v-model="tel"  placeholder="Enter Phone Number"/>
      <input type="email" v-model="email" placeholder="Enter Email"/>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default{
  emits: ['add-contact'],
  data(){
    return {
      name: '',
      tel: '',
      email: ''
    }
  },
  methods: {
    submitData(){
      this.$emit('add-contact',
        this.name, this.tel, this.email
      )
    }
  }
}

</script>

<style>

</style>