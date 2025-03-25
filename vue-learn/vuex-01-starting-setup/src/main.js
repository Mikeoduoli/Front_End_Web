import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const app = createApp(App);

const counterModule = {
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    addOne(state) {
      state.counter += 2;
    },
    increase(state, payload) {
      state.counter += payload.value;
    },
  },
  actions: {
    addOne(context) {
      setTimeout(function () {
        context.commit('addOne');
      }, 2000);
    },
    increase(context, payload) {
      context.commit('increase', payload);
    },
  },
  getters: {
    // testAuth(state, getters, rootState, rootGetters){
    //   return state.isLoggedIn;
    // }, A way of accessing the state globally
    testAuth(state){
      return state.isLoggedIn;
    },
    finalCounter(state) {
      return state.counter * 4;
    },
    normalizedCounter(_, getters) {
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
};

const store = createStore({
  modules: {
    numbers: counterModule,
  },
  state() {
    return {
      // counter: 0, transferred to the module store
      isLoggedIn: false,
    };
  },
  mutations: {
    // addOne(state){
    //   state.counter += 2;
    // },
    // increase(state, payload){
    //   state.counter += payload.value;
    // }, ttransferred to the module store
    setAuth(state, payload) {
      state.isLoggedIn = payload.isAuth;
    },
  },
  actions: {
    // addOne(context){
    //   setTimeout(function(){
    //     context.commit('addOne');
    //   }, 2000);
    // },
    // increase(context, payload,){
    //   context.commit('increase', payload);
    // }, also transferred to the module store
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false });
    },
  },
  getters: {
    // finalCounter(state){
    //   return state.counter * 4;
    // },
    // normalizedCounter(_, getters){
    //   const finalCounter = getters.finalCounter;
    //   if(finalCounter < 0) {
    //     return 0;
    //   }
    //   if (finalCounter > 100){
    //     return 100;
    //   }
    //   return finalCounter;
    // }, removing them from global store to module level
    isUserAuthenticated(state) {
      return state.isLoggedIn;
    },
  },
});

app.use(store);

app.mount('#app');
