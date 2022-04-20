import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {
  }
})
