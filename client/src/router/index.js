import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
import Router from 'vue-router'
import Users from '@/components/Users'
import Stops from '@/components/Stops'
import Login from '@/components/Login'

Vue.use(VueAxios, axios)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/signin',
      name: 'Stops',
      component: Stops
    }
  ]
})
