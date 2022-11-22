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
    searchedText: function (val) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.searchCharacters(val).then(() => {
          this.updateSearchedText(val);
          console.log("Search results updated.");
        });
      }, 600);
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  margin: 5px;
  color: $gemgreen !important;
}
</style>
