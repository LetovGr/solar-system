import Vue from 'vue'
import Vuex from 'vuex'
import VModal from 'vue-js-modal'
import Notify from 'vue-notifyjs'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.use(Vuex)
Vue.use(VModal, { dialog: true })
Vue.use(Notify, {
  horizontalAlign: 'left',
  verticalAlign: 'top',
  timeout: 8000
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
