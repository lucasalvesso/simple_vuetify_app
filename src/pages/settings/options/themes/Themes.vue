<template>
  <v-card
    class="mx-auto"
    height="600"
  >
    <v-card-title class="justify-center">
      Themes
    </v-card-title>

    <v-card-text>
      <dark-theme class="mb-n6" />
      <top-app-bar class="mb-n6" />
    </v-card-text>
  </v-card>
</template>

<script>
  import DarkTheme from '@/pages/settings/options/themes/DarkTheme';
  import TopAppBar from '@/pages/settings/options/themes/TopAppBar';
  export default {
    name: 'Themes',
    tag: 'themes',
    components: {
      DarkTheme,
      TopAppBar,
    },
  };
</script>

<style scoped>

</style>
