export default {
  asyncIncrementByValue(context, payload) {
    setTimeout(() => {
      context.commit('incrementByValue', payload)
    }, 2000)
  }
}
