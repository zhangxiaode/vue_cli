import Vue from 'vue'
import App from './App.vue'
import { f } from './index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  mounted() {
    f();
  }
}).$mount('#app')
