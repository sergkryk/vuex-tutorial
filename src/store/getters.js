export default {
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
