import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Define your application state here
    count: 0
  },
  mutations: {
    // Define your mutations here
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
    // Define your actions here
    increment({ commit }) {
      commit('increment');
    },
    decrement({commit}) {
      commit('decrement')
    }
  },
  getters: {
    // Define your getters here
    getCount: state => state.count
  }
});