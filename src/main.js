import Vue from 'vue'
import App from './App.vue'

import router from './router/router'
import utils from './js/utils'

Vue.prototype.utils = utils

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
