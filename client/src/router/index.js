import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Register // TODO: change to Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }
  ]
})
