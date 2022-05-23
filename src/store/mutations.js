export default {
  increment(state) {
    state.counter++;
  },
  incrementByValue(state, payload) {
    state.counter = state.counter + payload.value;
  }
}
