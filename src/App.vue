<template>
  <base-container title="Vuex">
  <h3>{{  $store.getters.counterMultipliedByTwo }}</h3>
  <h3>{{  $store.getters.counterWithValidation }}</h3>
    <button @click="incrementCounter">Add 1</button>
    <button @click="incrementCounterByTen">Add 10</button>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';

export default {
  components: {
    BaseContainer,
  },
  methods: {
    incrementCounter() {
      this.$store.commit('increment');
    },
    incrementCounterByTen() {
      this.$store.commit('incrementByValue', {value: 10});
    },
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