<template>
  <base-container title="Vuex" v-if="isAuth">
  <h3>{{  $store.getters.counterMultipliedByTwo }}</h3>
  <h3>{{  $store.getters.counterWithValidation }}</h3>
    <button @click="incrementCounter">Add 1</button>
    <button @click="incrementCounterByTen">Add 10</button>
    <button @click="asyncIncrementCounterByTen">Async Add 10</button>
  </base-container>
  <base-container title="Authentication">
    <user-auth></user-auth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    UserAuth,
  },
  methods: {
    incrementCounter() {
      this.$store.commit('increment');
    },
    incrementCounterByTen() {
      this.$store.commit('incrementByValue', {value: 10});
    },
    asyncIncrementCounterByTen() {
      this.$store.dispatch('asyncIncrementByValue', {value: 10});
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    }
  }
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
</style>