export default {
  state: {
    isSubmitting: false
  },
  mutations: {
    registerStart (state) {
      state.isSubmitting = true
    }
  },
  actions: {
    register ({commit}) {
      setTimeout(() => {
        commit('registerStart')
      }, 2000)
    }
  }
}
