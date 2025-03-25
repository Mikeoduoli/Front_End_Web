const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(counter_calc){
      if (counter_calc === 'inc') {
        this.counter++;
      } else if(counter_calc === 'dec') {
        this.counter--;
      }
    },
    submitForm(){
      alert(`Form submitted with name: ${this.name} and counter: ${this.counter}`);
    },
    confirmedInput() {
      this.confirmedName = this.name;
    }
  },
});

app.mount('#events');
