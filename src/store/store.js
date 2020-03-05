import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    quizSettings: {
      difficultyLevel: '',
      name: '',
      test: 'TEST'
    }
  },
  mutations: {
    updateSettings(state, settings) {
      state.quizSettings.name = settings;
    }
  }
});
