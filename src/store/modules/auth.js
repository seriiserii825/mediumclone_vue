export default {
  state: {
    isSubmitting: false
  },
  mutations: {
    registerStart (state) {
      state.isSubmitting = true
    }
  }
}
