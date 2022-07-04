import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})
export default new Vuex.Store({
  state: {
    user: {},
    nowC: '',
    cityList: []
  },
  getters: {
    cityID (state) {
      return state.cityList.filter(item => item.label === state.nowC)[0].value
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setNowC (state, payload) {
      state.nowC = payload
    },
    setCityList (state, payload) {
      state.cityList = payload
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
