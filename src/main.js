import Vue from 'vue'
import Element from 'element-ui'
import store from './store'
import router from './router'
import './permission'
import '@/assets/styles/index.scss'
import App from './App'

Vue.use(Element, {
  size: 'mini',
})
;['success', 'error', 'warning', 'info'].forEach((type) => {
  Vue.prototype[`msg${type[0].toUpperCase() + type.slice(1)}`] = function (msg) {
    this.$message({ showClose: true, message: msg, type })
  }
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
})
