const app = Vue.createApp({
  data() {
    return {
      userGoalA: 'Finish the course and learn Vue.Js.',
      userGoalB: 'Master Vue Js and build amazing apps!',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal(){
      const randomNumber =Math.random();
      if(randomNumber < 0.5){
        return this.userGoalA;
      } else {
        return this.userGoalB;
      }
    }
  },
})

app.mount('#user-goal')