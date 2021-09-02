import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = () => import('@/views/Home')
const Planets = () => import('@/components/Planets/Planets')
const Planet = () => import('@/components/Planets/Planet/Planet')


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      redirect: { name: 'planets' },
      name: 'home',
      component: Home,
      children: [
        {
          path: '/planets',
          name: 'planets',
          component: Planets,
        },
        {
          path: '/planets/:id',
          name: 'planet',
          component: Planet,
        }
      ]
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})