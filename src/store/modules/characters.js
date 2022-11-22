import Vue from "vue";

const state = {
  characters: [],
  searchedText: "",
};

const getters = {
  getCharacters: (state) => state.characters,
  getSearchedText: (state) => state.searchedText,
};

const actions = {
  async searchCharacters({ commit }, search) {
    return new Promise((resolve, reject) => {
      Vue.prototype.$axios
        .get("people/?search=" + search)
        .then((response) => {
          if (search) {
            commit("setSearchedCharacters", response.data.results);
          } else {
            commit("clearSearchedCharacters");
          }
          commit("setSearchedText", search);
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  },
};

const mutations = {
  setSearchedCharacters: (state, data) => {
    state.characters = data;
  },
  clearSearchedCharacters: (state) => {
    state.characters = [];
  },
  setSearchedText: (state, data) => {
    state.searchedText = data;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
