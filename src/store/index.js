import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {counter: 0},
  getters: {
    counter(state) {
      return state.counter
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    }
  },
  actions: {},
  modules: {}
})
