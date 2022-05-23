import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const app = createApp(App);
const store = createStore({
  state() {
    return {
      counter: 200,
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
