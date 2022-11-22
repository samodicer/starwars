<template>
  <q-page class="flex row justify-center">
    <div style="max-width: 300px">
      <q-input color="teal" outlined label="Name" v-model="searchedText">
        <template v-slot:append>
          <q-avatar>
            <q-icon name="search" />
          </q-avatar>
        </template>
      </q-input>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Search",
  data() {
    return {
      searchedText: "",
    };
  },
  methods: {
    ...mapActions({
      searchCharacters: "characters/searchCharacters",
    }),
  },
  computed: {
    ...mapGetters({
      getCharacters: "characters/getCharacters",
    }),
  },
  watch: {
    searchedText: function (val, oldVal) {
      this.searchCharacters(val).then(() => {
        console.log("done");
      });
    },
  },
};
</script>
