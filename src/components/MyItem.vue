<template>
  <q-banner class="q-mb-xs bg-navyblue text-white" rounded>
    <p
      class="q-my-auto"
      v-html="$options.filters.highlight(name, getSearchedText)"
    ></p>
  </q-banner>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MyItem",
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapGetters({
      getSearchedText: "characters/getSearchedText",
    }),
  },
  filters: {
    highlight: function (word, query) {
      //regular expresion for matching text -> i (ignore case), g (global)
      let check = new RegExp(query, "ig");
      //returning text with the highlighted part to html element using v-html
      return word.toString().replace(check, function (matchedText) {
        return "<strong>" + matchedText + "</strong>";
      });
    },
  },
};
</script>
