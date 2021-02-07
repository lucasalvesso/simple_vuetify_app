<template>
  <v-card
    class="mx-auto fill-height"
  >
    <v-card-title class="justify-center">
      Themes
    </v-card-title>

    <v-card-text>
      <dark-theme v-model="entity.dark_theme" />
      <v-divider class="pa-2" />
      <top-app-bar v-model="entity.top_app_bar" />
      <v-divider class="pa-2" />
      <side-menu-color v-model="entity.side_menu_color" />
      <v-divider class="pa-2" />
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn
        color="error"
        @click="save()"
      >
        Cancel
      </v-btn>
      <v-btn
        color="primary"
        @click="save()"
      >
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  import DarkTheme from '@/pages/settings/options/themes/DarkTheme';
  import TopAppBar from '@/pages/settings/options/themes/TopAppBar';
  import SideMenuColor from '@/pages/settings/options/themes/SideMenuColor';
  export default {
    name: 'Themes',
    tag: 'themes',
    components: {
      DarkTheme,
      TopAppBar,
      SideMenuColor,
    },

    data: () => ({
      entity: {
        dark_theme: false,
        top_app_bar: null,
        side_menu_color: null,
      },
    }),

    created () {
    },

    methods: {
      save () {
        Object.keys(this.entity).forEach((key) => {
          localStorage.setItem(key, this.entity[key]);
        });
        this.$root.$emit('close', true);
      },
    },
  };
</script>

<style scoped>

</style>
