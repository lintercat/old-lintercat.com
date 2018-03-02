import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VeeValidate from 'vee-validate'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueAxios, axios)
Vue.use(VeeValidate)
Vue.use(VueScrollTo, {
  container: 'body',
  duration: 1500,
  easing: 'ease-out',
  offset: 0,
  cancelable: true,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
