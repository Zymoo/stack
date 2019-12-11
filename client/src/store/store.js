import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    id: null,
    username: null,
    stops: null
  },
  mutations: {
    changeId (state, id) {
      state.id = id
    },
    changeUsername (state, username) {
      state.username = username
    },
    changeStops (state, stops) {
      state.stops = stops
    }
  },
  getters: {
    id: state => state.id,
    username: state => state.username,
    stops: state => state.stops
  }
})
