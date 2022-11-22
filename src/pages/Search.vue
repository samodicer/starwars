<template>
  <q-page class="flex row justify-center">
    <div style="width: 400px">
      <q-input color="green" outlined label="Name" v-model="searchedText">
        <template v-slot:append>
          <q-avatar>
            <q-icon name="search" />
          </q-avatar>
        </template>
      </q-input>
      <div v-for="(character, index) in getCharacters" :key="index">
        <CharacterItem :name="character.name" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import CharacterItem from "src/components/CharacterItem.vue";

export default {
  name: "Search",
  components: { CharacterItem },
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
    searchedText: function (val) {
      this.searchCharacters(val).then(() => {
        console.log("done");
      });
    },
  },
};
</script>
