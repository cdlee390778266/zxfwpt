import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/login/login'
import Register from '../components/login/register'
import Home from '../components/pages/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      component: Login
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
  ]
})
