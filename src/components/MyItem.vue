<template>
  <q-banner rounded class="item">{{ name }}</q-banner>
</template>

<script>
export default {
  name: "MyItem",
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
  margin-bottom: 5px;
  background-color: $navyblue;
  color: white;
}
</style>
