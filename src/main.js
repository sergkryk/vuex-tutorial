import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const app = createApp(App);
const store = createStore({
  state() {
    return {
      counter: 0,
    }
  },
  getters: {
    counterMultipliedByTwo(state) {
      return state.counter * 2;
    },
    counterWithValidation(_, getters) {
      const finalCounter = getters.counterMultipliedByTwo;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    }
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    incrementByValue(state, payload) {
      state.counter = state.counter + payload.value;
    }
  }
});

app.use(store)
app.mount('#app');
