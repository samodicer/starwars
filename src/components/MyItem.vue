<template>
  <q-banner class="item" rounded>
    <p
      class="text"
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
      default: "",
    },
  },
  computed: {
    ...mapGetters({
      getSearchedText: "characters/getSearchedText",
    }),
  },
  filters: {
    highlight: function (word, query) {
      var check = new RegExp(query, "ig");
      return word.toString().replace(check, function (matchedText) {
        return "<strong>" + matchedText + "</strong>";
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 5px;
  background-color: $navyblue;
  color: white;
}
</style>
