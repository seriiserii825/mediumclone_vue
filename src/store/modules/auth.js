import apiAuth from '@/api/auth'
import {setItem} from '@/helpers/persistanceStorage'

export default {
  state: {
    isSubmitting: false,
    currentUser: null,
    validationErrors: null,
    isUserLoggedIn: null,
  },
  mutations: {
    registerStart(state) {
      state.isSubmitting = true
      state.validationErrors = null
    },
    registerSuccess(state, payload) {
      state.isSubmitting = false
      state.currentUser = payload
      state.isUserLoggedIn = true
    },
    registerFailure(state, payload) {
      state.isSubmitting = false
      state.validationErrors = payload
    },
  },
  actions: {
    register(context, credentials) {
      return new Promise((resolve, reject) => {
        context.commit('registerStart')
        apiAuth
          .register(credentials)
          .then((response) => {
            context.commit('registerSuccess', response.data.user)
            setItem('accessToken', response.data.user.token)
            resolve(response.data.user)
          })
          .catch((result) => {
            context.commit('registerFailure', result.response.data.errors)
            reject(result.response.data.errors)
          })
      })
    },
  },
}
