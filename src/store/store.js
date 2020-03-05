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
    updateNameSettings(state, settings) {
      state.quizSettings.name = settings;
    },
    updateDifficultySettings(state, settings) {
      state.quizSettings.difficultyLevel = settings;
    }
  }
});
