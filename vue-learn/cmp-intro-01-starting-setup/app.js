const app = Vue.createApp({
  data(){
    return {
      // deatialsAreVisible: false,
      friends:[
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com'
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com'
        },
      ]
    }
  },
  methods: {
    // toggleDetails () {
    //   this.deatialsAreVisible =!this.deatialsAreVisible;
    // }
  },
});

app.component('friend-contact', {
  template: `
        <li>
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails()">{{ deatialsAreVisible ? 'Hide Details' : 'Show Details' }}</button>
          <ul v-if="deatialsAreVisible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong> {{ friend.email }}</li>
          </ul>
        </li>
        `,
  data() {
    return {
      deatialsAreVisible: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '01234 5678 991',
        email: 'manuel@localhost.com'
      },
    }
  },
  methods: {
    toggleDetails () {
      this.deatialsAreVisible =!this.deatialsAreVisible;
    }

  },
})

app.mount('#app');