import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state:{
    loginToken:'',
  },
  mutation:{
    login(state,seesionid){
      state.loginToken = seesionid
    },
  },
});

export default store
