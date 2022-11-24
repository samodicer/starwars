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
    console.log("Requesting api...");
    return new Promise((resolve, reject) => {
      //GET request to API
      Vue.prototype.$axios
        .get("people/?search=" + search)
        .then((response) => {
          if (search) {
            //if searched text is not empty -> put response data to characters array
            commit("setSearchedCharacters", response.data.results);
          } else {
            //if searched text is empty -> clear characters array
            commit("clearSearchedCharacters");
          }
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        });
    });
  },
  async updateSearchedText({ commit }, text) {
    commit("setSearchedText", text);
  },
};

const mutations = {
  setSearchedCharacters: (state, data) => {
    //update characters array
    state.characters = data;
  },
  clearSearchedCharacters: (state) => {
    //clear characters array
    state.characters = [];
  },
  setSearchedText: (state, data) => {
    //update searched text
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
