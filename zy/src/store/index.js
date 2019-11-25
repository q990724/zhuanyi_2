import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderStep : {},
    hospitalDetail : {}
  },
  getters : {
    getOrderStep(state){
      return state.orderStep;
    },
    getHospitalDetail(state){
      return state.hospitalDetail;
    }
  },
  mutations: {
    setOrderStep(state,obj){
      state.orderStep[obj.name] = obj.val;
    },
    setHospitalDetail(state,obj){
      state.hospitalDetail = obj;
    }
  },
  actions: {
  },
  modules: {
  }
})
