import Vue from 'vue'

const axios = require('axios')

const state = {
  planets: [],
  currentPlanet: null,
  count: null,
  params: {
    page: 1,
    limit: 20,
    search: '',
    deleted: false
  },
  loading: false
}
const actions = {
  async fetchPlanets({ state, commit }) {
    commit('SET_LOADING', true)
    const res = (await axios.get('https://api.le-systeme-solaire.net/rest/bodies/', {
      params:
      {
        order: 'semimajorAxis,asc',
        page: `${ state.params.page }, ${ state.params.limit }`
      }
    })).data
    commit('SET_PLANETS', res.bodies)
    commit('SET_LOADING', false)
  },
  async fetchPlanet({ state, commit, dispatch }, payload) {
    //async logic simple example
    // res =  api.getPlanet(payload)
    // commit('SET_PLANET', res.data[0])
    if (!state.planets.length)
      await dispatch('fetchPlanets')
    const res = await state.planets.find(planet => planet.id === payload)
    commit('SET_PLANET', res)

  },
  async addPlanet({ commit }, payload) {
    //async logic simple example
    // res =  api.postPlanet(payload)
    // commit('ADD_PLANET', res.data)
    commit('ADD_PLANET', payload)
  },
  async updatePlanet({ commit }, payload) {
    //async logic simple example
    // res =  api.puttPlanet({id: payload.id, payload})
    // commit('SET_UPDATED_PLANET', payload)
    commit('SET_UPDATED_PLANET', payload)
  }

}
const getters = {
  //realizing of search and filtering deleted items. In real must be async
  filteredPlanets({ planets, params }) {
    return planets.filter(planet => planet.name.includes(params.search))
    .filter(item => params.deleted ? item.deleted : !item.deleted)
  },

}
const mutations = {
  SET_LOADING(state, payload) {
    state.loading = payload
  },
  SET_PLANETS(state, payload) {
    state.planets = [ ...state.planets, ...payload ]
  },
  SET_PLANET(state, payload) {
    state.currentPlanet = payload
  },
  ADD_PLANET(state, payload) {
    let res = [ ...state.planets ]
    res.unshift(payload)
    state.planets = res
  },
  SET_UPDATED_PLANET(state, payload) {
    const itemIndex = state.planets.findIndex(planet => planet.id === payload.id)
    if (itemIndex === -1) return
    Object.keys(payload)
    .forEach(key => {
      Vue.set(state.planets[itemIndex], key, payload[key])
    })
  },
  RESET_PLANETS(state) {
    state.planets = []
  },
  SET_PAGE(state) {
    state.params.page += 1
  },
  SET_SEARCH(state, payload) {
    state.params.search = payload
  },
  SET_PARAMS(state, payload) {
    state.params = { ...state.params, ...payload }
  }
}
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}