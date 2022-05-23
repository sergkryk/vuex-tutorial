import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const authStore = {
  state() {
    return {
      isAuth: false,
    }
  },
  mutations: {
    setAuth(state, payload) {
      state.isAuth = payload.isAuth;
    }
  },
  actions: {
    login(context) {
      context.commit('setAuth', { isAuth: true });
    },
    logout(context) {
      context.commit('setAuth', { isAuth: false })
    }
  },
  getters: {
    isAuth(state) {
      return state.isAuth;
    }
  }
}

const app = createApp(App);
const store = createStore({
  modules: {
    auth: authStore,
  },
  state() {
    return {
      counter: 0,
    }
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    incrementByValue(state, payload) {
      state.counter = state.counter + payload.value;
    }
  },
  actions: {
    asyncIncrementByValue(context, payload) {
      setTimeout(() => {
        context.commit('incrementByValue', payload)
      }, 2000)
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
  }
});

app.use(store)
app.mount('#app');
