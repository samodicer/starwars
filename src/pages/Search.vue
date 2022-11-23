<template>
  <q-page class="q-pa-md flex row justify-center">
    <div>
      <p class="flex justify-center q-mb-xl text-h2">StarWars search</p>
      <MyInput />
      <div v-if="getCharacters.length > 0">
        <div v-for="(character, index) in getCharacters" :key="index">
          <MyItem :name="character.name" />
        </div>
      </div>
      <div v-else-if="getSearchedText">
        <MyMessage :message="'Nothing found'" />
      </div>
      <div v-else>
        <MyMessage :message="'Enter search phrase'" />
      </div>
    </div>
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import MyItem from "src/components/MyItem.vue";
import MyInput from "src/components/MyInput.vue";
import MyMessage from "src/components/MyMessage.vue";

export default {
  name: "Search",
  components: { MyItem, MyInput, MyMessage },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      getCharacters: "characters/getCharacters",
      getSearchedText: "characters/getSearchedText",
    }),
  },
};
</script>
