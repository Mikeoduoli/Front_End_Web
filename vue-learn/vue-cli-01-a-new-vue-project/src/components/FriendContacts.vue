<template>
  <div>
    <li>
      <h2>{{ name }} {{ friendIsFavourite  ? '(Favourite)' : '' }}</h2>
      <button @click="toggleFavourite"> Toggle Favourite</button>
      <button @click="toggleDetails"> {{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
      <ul v-if="detailsAreVisible">
        <li><strong>Phone: </strong>{{ phoneNumber }}</li>
        <li><strong>Email: </strong>{{ emailAddress }}</li>
      </ul>
      <button @click="$emit('delete', id)">Delete</button>
    </li>
  </div>
</template>

<script>
export default{
  // props: [
  //   'name', 
  //   'phoneNumber', 
  //   'emailAddress',
  //   'isFavourite',
  // ],
  // Validations
  props: {
    name: {
      type: String,
      required: true,
    }, 
    phoneNumber : {
      type: Number,
      required: true,
    }, 
    emailAddress: {
      type: String,
      required: true,
    },
    isFavourite: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  emits: ['toggle-favourite', 'delete'],
  // emits: {
  //   'toggle-favourite' : function(id){
  //     if(id){
  //       return true;
  //     } else {
  //       console.log('Invalid id');
  //       return false;
  //     }
  //   }
  // },
  data(){
    return {
      detailsAreVisible: false,
      // friends: [
      //   {
      //     id: 'manuel',
      //     name: 'Manuel Lorenz',
      //     phone: '0707253047',
      //     email: 'manuel@localhost.com',
      //   },
      //   {
      //     id: 'Lina',
      //     name: 'Lina Markov',
      //     phone: '0724681256',
      //     email: 'lina@localhost.com',
      //   },
      // ],
      friendIsFavourite: this.isFavourite,
    }
  },
  methods: {
    // Define your methods here
    toggleDetails(){
      this.detailsAreVisible =!this.detailsAreVisible;
    },
    toggleFavourite() {
      this.isFavourite == !this.isFavourite;
    },
  },
}

</script>

<style>

</style>