<template>
  <p class="message">{{ message }}</p>
</template>

<script>
export default {
  name: "MyMessage",
  props: {
    message: {
      type: String,
      required: true,
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
