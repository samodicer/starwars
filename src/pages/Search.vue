<template>
  <q-page class="flex row justify-center">
    <div style="max-width: 300px">
      <q-input color="teal" outlined label="Name">
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
export default {
  name: "Search",
};
</script>
