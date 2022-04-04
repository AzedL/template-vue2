import localDict from '@/dict/index'
import Vue from 'vue'
import AzDict from 'az-dict-vue'

const dict = {
  state: {
    hasDict: false,
  },
  mutations: {
    SET_DICT: (state, dict) => {
      state.hasDict = true
      Vue.use(AzDict, Object.assign(dict, localDict))
    },
  },
  actions: {
    async setDict({ commit }, dict) {
      return commit('SET_DICT', dict)
    },
  },
}

export default dict
