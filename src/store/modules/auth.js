import apiAuth from '@/api/auth'

export default {
  state: {
    isSubmitting: false,
  },
  mutations: {
    registerStart(state) {
      state.isSubmitting = true
    },
  },
  actions: {
    register(some, credentials) {
      return new Promise(() => {
        console.log(some)
        apiAuth
          .register(credentials)
          .then((response) => {
            console.log(response)
          })
          .catch((result) => console.log('result error', result))
      })
    },
  },
}
