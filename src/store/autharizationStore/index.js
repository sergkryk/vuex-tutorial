export default {
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