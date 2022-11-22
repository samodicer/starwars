import Vue from 'vue'

const state = {
    characters: []
};

const getters = {
  getCharacters: (state) => state.characters,
};

const actions = {
  async searchCharacters({commit}, search){
    return new Promise((resolve, reject) => {
        Vue.prototype.$axios
            .get('people/?search=' + search)
            .then((response) => {
                commit('setSearchedCharacters', response.data.results);
                resolve();
            })
            .catch((error) => {
                console.log(error);
                reject(error);
            });
        });
  }

};

const mutations = {
    setSearchedCharacters: (state, data) => {
        state.characters = data
    },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};