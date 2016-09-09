import Vue from 'vue'
import Vuex from 'vuex'

// very much like Redux' reducers
import mutations from './mutations'

// Make vue aware of Vuex
Vue.use(Vuex)

// intial State
const state = {
  count: 0
}

export default new Vuex.Store({
  state,
  mutations
})
