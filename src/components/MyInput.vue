<template>
  <q-input
    class="q-my-md"
    color="gemgreen"
    outlined
    label="Name"
    v-model="searchedText"
  >
    <template v-slot:append>
      <q-avatar>
        <q-icon name="search" color="gemgreen" size="24px" />
      </q-avatar>
    </template>
  </q-input>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "MyInput",
  data() {
    return {
      searchedText: "",
      debounce: null,
    };
  },
  methods: {
    ...mapActions({
      searchCharacters: "characters/searchCharacters",
      updateSearchedText: "characters/updateSearchedText",
    }),
  },
  watch: {
    //watching searchedText for updated value
    searchedText: function (val) {
      //remove timeout
      clearTimeout(this.debounce);
      //set delay 600ms so that user does not requesting API every time a key is pressed
      this.debounce = setTimeout(() => {
        //call action in Vuex store to request API
        this.searchCharacters(val).then(() => {
          //then call action in Vuex store to update searched text
          this.updateSearchedText(val);
          console.log("Search results updated.");
        });
      }, 600);
    },
  },
};
</script>
