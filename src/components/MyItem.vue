<template>
  <q-banner rounded class="item">{{ name }}</q-banner>
</template>

<script>
export default {
  name: "CharacterItem",
  props: {
    name: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  margin: 5px;
  background-color: $navyblue;
  color: white;
}
</style>
