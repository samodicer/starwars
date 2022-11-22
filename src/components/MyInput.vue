<template>
  <q-input class="input" outlined label="Name" v-model="searchedText">
    <template v-slot:append>
      <q-avatar>
        <q-icon name="search" />
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
  props: {
    name: {
      type: String,
      default: "",
    },
  },
  methods: {
    ...mapActions({
      searchCharacters: "characters/searchCharacters",
    }),
  },
  watch: {
    searchedText: function (val) {
      clearTimeout(this.debounce);
      this.debounce = setTimeout(() => {
        this.searchCharacters(val).then(() => {
          console.log("done");
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
