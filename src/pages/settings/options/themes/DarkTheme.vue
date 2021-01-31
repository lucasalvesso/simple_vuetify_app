<template>
  <v-row
    no-gutters
    class="justify-space-around"
  >
    <v-col
      sm="4"
      class="d-flex justify-start pa-6"
    >
      <span class="black--text">
        Turn on Dark Mode
      </span>
    </v-col>
    <v-col
      sm="4"
      class="d-flex justify-end"
    >
      <v-switch
        v-model="darkMode"
        color="primary"
        @click="switchOption(darkMode)"
      />
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'DarkTheme',
    tag: 'dark-theme',
    data: () => ({
      darkMode: false,
    }),
    methods: {
      switchOption (val) {
        this.$vuetify.theme.dark = val;
      },
    },
  };
</script>

<style scoped>

</style>
