import createLogger from 'vuex/dist/logger'
import Vue from 'vue'
import Vuex from 'vuex'

import planets from '@/store/modules/planets'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    planets
  },
  mutations: {
  },
  plugins: process.env.NODE_ENV !== 'production' ? [ createLogger() ] : []
})