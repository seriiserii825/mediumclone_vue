import apiAuth from '@/api/auth'

export default {
  state: {
    isSubmitting: false,
  },
  mutations: {
    registerStart(state) {
      state.isSubmitting = true
    },
    registerSuccess(state) {
      state.isSubmitting = false
    },
    registerFailure(state) {
      state.isSubmitting = false
    },
  },
  actions: {
    register(context, credentials) {
      return new Promise((resolve, reject) => {
        context.commit('registerStart')
        apiAuth
          .register(credentials)
          .then((response) => {
            console.log(response.data.user)
            context.commit('registerSuccess', response.data.user)
            resolve(response.data.user)
          })
          .catch((result) => {
            console.log('result ', result.response.data.errors)
            context.commit('registerFailure', result.response.data.errors)
            reject(result.response.data.errors)
          })
      })
    },
  },
}
