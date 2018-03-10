import Vue from 'vue'
import App from './App'
// import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMotion from 'vue-motion'
import VeeValidate from 'vee-validate'
import VueScrollTo from 'vue-scrollto'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueAxios, axios)
Vue.use(VueMotion)
Vue.use(VeeValidate)
Vue.use(VueScrollTo, {
  duration: 1500,
  easing: 'ease-out'
})
Vue.use(VueSweetalert2)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  render: h => h(App)
})
