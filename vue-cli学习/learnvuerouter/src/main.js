import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//在原型中添加了test方法
Vue.prototype.test=function(){
  console.log('test')
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
