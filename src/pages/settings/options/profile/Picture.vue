<template>
  <v-row
    no-gutters
    class="justify-space-around"
  >
    <v-col
      sm="4"
      class="d-flex justify-start pa-6"
    >
      Profile Picture
    </v-col>
    <v-col
      sm="4"
      class="d-flex justify-end"
    >
      <v-file-input
        v-model="file"
        label="File input"
        filled
        prepend-icon="mdi-camera"
      />
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'Picture',
    tag: 'profile-picture',
    data: () => ({
      file: null,
    }),

    created () {
    },
    methods: {
      //
    },
  };
</script>

<style scoped>

</style>
