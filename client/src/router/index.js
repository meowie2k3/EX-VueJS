import Vue from 'vue'
import Router from 'vue-router'
// import Register from '@/components/Register'
import Home from '@/components/Home'
import Newsfeed from '@/components/Newsfeed'
import PageNotFound from '@/components/PageNotFound'
import Profile from '@/components/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/newsfeed',
      name: 'Newsfeed',
      component: Newsfeed
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/:catchAll(.*)*',
      name: 'PageNotFound',
      component: PageNotFound
    }
    // {
    //   path: '/register',
    //   name: 'Register',
    //   component: Register
    // }
  ]
})
