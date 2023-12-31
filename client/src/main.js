// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@fortawesome/fontawesome-free/css/all.css'
import { sync } from 'vuex-router-sync'
import store from '@/store/store'

Vue.config.productionTip = false

sync(store, router)
// eslint-disable-next-line
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
