<template>
  <v-card
    height="100%"
    width="256"
    class="mx-auto"
    color="grey lighten-3"
  >
    <v-list>
      <template>
        <v-list dense>
          <v-list-item>
            MENU
          </v-list-item>
        </v-list>
      </template>
      <template v-for="route in routesInApp">
        <v-list-item
          :key="route.order"
          :to="route.path"
          class=""
        >
          <v-list-item-action>
            <v-icon>{{ route.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ route.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>

<script>
  import routerVue from '@/components/router/routerVue';
  export default {
    name: 'Drawer',
    data: () => ({
    }),

    computed: {
      routesInApp () {
        return routerVue.registeredRoutes;
      },
    },

    created () {
    },

    methods: {
    },
  };
</script>

<style scoped>

</style>
