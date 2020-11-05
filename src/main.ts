import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ajax from './utils/ajax'

Vue.config.productionTip = false
Vue.use(ajax)
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
