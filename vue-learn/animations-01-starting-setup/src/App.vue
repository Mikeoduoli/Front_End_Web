<template>
  <!-- <div>
    <div class="container">
      <users-list></users-list>
    </div>
    <div class="container">
      <div class="block" :class="{ animate: animatedBlock }"></div>
      <button @click="animateBlock">Animate</button>
    </div> -->
  <!-- name="para" -->
  <!-- <div class="container">
      <transition
       :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @enter-cancelled="enterCancelled"
        @leave-cancelled="leaveCancelled"
      >
        <p v-if="paraIsVisible">This is only sometimes visible...</p>
      </transition>
      <button @click="toggleParagraph">Toggle Paragraph</button>
    </div>
    <div class="container">
      <transition name="fade-button" mode="out-in">
        <button @click="showusers" v-if="!usersAreVisible">Show Users</button>
        <button @click="hideUSers" v-else>Hide Users</button>
      </transition>
    </div> -->
  <!-- <transition name="modal"> -->
  <!-- <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal> -->
  <!-- </transition> -->
  <!-- <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
  </div> -->
  <div class="container">
    <router-view v-slot="slotProps">
      <transition name="fade-button" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
// import UsersList from './components/UsersList.vue'
export default {
  // components: {UsersList},
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    animateBlock() {
      this.animatedBlock = true;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showusers() {
      this.usersAreVisible = true;
    },
    hideUSers() {
      this.usersAreVisible = false;
    },
    beforeEnter(el) {
      console.log('before enter');
      console.log(el);
      el.style.opacity = 0;
    },
    beforeLeave(el) {
      console.log('before leave');
      console.log(el);
    },
    enter(el, done) {
      console.log('Enter');
      console.log(el);
      let round = 1;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter(el) {
      console.log('After Enter');
      console.log(el);
    },
    leave(el, done) {
      console.log('Leave');
      console.log(el);
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave(el) {
      console.log('After Leave');
      console.log(el);
    },
    enterCancelled(el) {
      console.log('Enter cancelled', el);
      clearInterval(this.leaveInterval);
    },
    leaveCancelled(el) {
      console.log('Leave cancelled', el);
      clearInterval(this.enterInterval);
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: transform 0.3 ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-150px); */
  /* We use now @keyframes to manage our animations */
  animation: slide-fade 0.3s ease-out forwards;
}

/* .v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.v-enter-active {
  transition: all .3s ease-out;
} 

.v-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-active {
  transition: all .3s ease-out;
}

.v-leave-from{
  opacity: 0;
  transform: translateY(-30px);
} */

/* Using custom css class names */

/* .para-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.para-enter-active {
  transition: all 2s ease-out;
} 

.para-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.para-leave-active {
  transition: all .3s ease-out;
}

.para-leave-from{
  opacity: 0;
  transform: translateY(-30px);
} */

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-enter-to,
.fade-button-leave-active {
  opacity: 1;
}

/* .route-enter-from {
} */

.route-enter-active {
  animation: slide-scale 0.4s ease-out;
}
/* .route-enter-to {
} */

.route-leave-active {
  animation: slide-scale 0.4s ease-out reverse;
}

@keyframes slide-fade {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>
