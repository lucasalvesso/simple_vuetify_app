<template>
  <v-row
    no-gutters
    class="justify-space-around"
  >
    <v-col
      sm="4"
      class="d-flex justify-start pa-6"
    >
      <span class="">
        Side Menu Color
      </span>
    </v-col>
    <v-col
      sm="4"
      class="d-flex justify-end"
    >
      <app-color-picker
        v-model="sideMenuColor"
        :disabled="$vuetify.theme.dark"
      />
    </v-col>
  </v-row>
</template>

<script>
  import AppColorPicker from '@/components/router/AppColorPicker';
  export default {
    name: 'SideMenu',
    tag: 'side-menu',
    components: {
      AppColorPicker,
    },

    data: () => ({
      sideMenuColor: null,

    }),

    computed: {

    },

    watch: {
      sideMenuColor (val) {
        this.$vuetify.theme.themes.light.sideMenuColor = val;
        this.$emit('input', val);
      },
    },

    created () {
      this.sideMenuColor = this.$vuetify.theme.themes.light.sideMenuColor;
    },
    methods: {

    },
  };
</script>

<style scoped>

</style>
