import Vue from 'vue'
import App from './App.vue'
import router from './config/router'
import i18n from './i18n'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  i18n
}).$mount('#app')
