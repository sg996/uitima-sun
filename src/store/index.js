import { createStore } from 'vuex'

export default createStore({
  state: {
    isCollapse: false
  },
  getters: {
  },
  mutations: {
    toggleCollapse(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
  },
  modules: {
  }
})
