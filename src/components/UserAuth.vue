<template>
  <button @click="login" v-if="!isAuth">Login</button>
  <button @click="logout" v-if="isAuth">Logout</button>
</template>

<script>
export default {
  methods: {
    login() {
      this.$store.dispatch('login');
      console.log(this.$store.getters.isAuth);
    },
    logout() {
      this.$store.dispatch('logout');
      console.log(this.$store.getters.isAuth);
    },
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    }
  }
}
</script>

<style>

</style>