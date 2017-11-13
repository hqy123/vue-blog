import Vue from 'vue';
import Vuex from 'vuex';
import type from './type'

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    loginToken:null,
    username:null
  },
  mutations:{
    [type.LOGIN](state,param){
      state.loginToken = param.seesionid;
      state.username = param.username;
    },

    [type.LOGOUT](state){
      state.loginToken = null;
      state.username = null;
    }
  }
})

export default store
