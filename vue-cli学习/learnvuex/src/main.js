import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


Vue.prototype.$store=store

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
