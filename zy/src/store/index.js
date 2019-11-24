import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderStep : {}
  },
  getters : {
    getOrderStep(state){
      return state.orderStep;
    }
  },
  mutations: {
    setOrderStep(state,obj){
      state.orderStep[obj.name] = obj.val;
    }
  },
  actions: {
  },
  modules: {
  }
})
