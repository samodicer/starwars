<template>
  <div class="message">{{ message }}</div>
</template>

<script>
export default {
  name: "MyMessage",
  props: {
    message: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.message {
  display: flex;
  justify-content: center;
  margin: 5px;
  font-weight: bold;
  color: black;
}
</style>
