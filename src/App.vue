<template>
  <v-app>
    <v-app-bar
      app
      dark
      color="topAppBar"
    >
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
      />
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      floating
      :permanent="drawer"
      app
    >
      <v-drawer />
    </v-navigation-drawer>

    <v-main class="mt-2">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

  import Drawer from '@/components/router/Drawer';

  export default {
    name: 'App',
    components: {
      'v-drawer': Drawer,
    },

    data: () => ({
      //
      drawer: false,

    }),

    created () {
      // this.$vuetify.theme.dark = true;
    },
  };
</script>
<style>
@import url("//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons");
</style>
