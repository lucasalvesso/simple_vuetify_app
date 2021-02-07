<template>
  <v-app>
    <v-app-bar
      app
      color="topAppBar"
      dark
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
      dark
      color="sideMenuColor"
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

  // eslint-disable-next-line no-return-assign
  const setPath = (object, path, value) => path.split('.').reduce((o, p, i) => o[p] = path.split('.').length === ++i ? value : o[p] || {}, object);

  export default {
    name: 'App',
    components: {
      'v-drawer': Drawer,
    },

    data: () => ({
      drawer: false,

    }),

    computed: {
      customTheme () {
        return [
          { dark_theme: '$vuetify.theme.dark' },
          { top_app_bar: '$vuetify.theme.themes.light.topAppBar' },
          { side_menu_color: '$vuetify.theme.themes.light.sideMenuColor' },
        ];
      },
    },

    watch: {

    },

    created () {
      this.allStorage().forEach((opt) => {
        const obj = this.customTheme.find(obj => Object.keys(obj)[0] === opt);
        if (obj) {
          let value = localStorage.getItem(Object.keys(obj).join(''));
          if (value === 'true') value = true;
          if (value === 'false') value = false;
          const path = Object.values(obj).join('');

          if (obj) {
            setPath(this, path, value);
          }
        }
      });
    },

    methods: {
      allStorage () {
        return Object.keys(localStorage);
      },
    },
  };
</script>
<style>
@import url("//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons");
</style>
