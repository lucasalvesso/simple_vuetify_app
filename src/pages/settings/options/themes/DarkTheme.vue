<template>
  <v-row
    no-gutters
    class="justify-space-around"
  >
    <v-col
      sm="4"
      class="d-flex justify-start pa-6"
    >
      Turn on Dark Mode
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

    created () {
      this.darkMode = this.$vuetify.theme.dark;
    },
    methods: {
      switchOption (val) {
        this.$vuetify.theme.dark = val;
        this.$emit('input', val);
      },
    },
  };
</script>

<style scoped>

</style>
