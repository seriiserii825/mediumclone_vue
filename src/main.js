//https://demo.realworld.io/
//serii3666
//seriiburduja@gmail.com
//seriiserii825
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
