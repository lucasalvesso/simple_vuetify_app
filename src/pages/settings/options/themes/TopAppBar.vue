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
        Top App Bar Color
      </span>
    </v-col>
    <v-col
      sm="4"
      class="d-flex justify-end"
    >
      <app-color-picker
        v-model="topAppBar"
        :disabled="$vuetify.theme.dark"
      />
    </v-col>
  </v-row>
</template>

<script>
  import AppColorPicker from '@/components/router/AppColorPicker';
  export default {
    name: 'TopAppBar',
    tag: 'top-app-bar',
    components: {
      AppColorPicker,
    },

    data: () => ({
      topAppBar: null,
    }),

    computed: {

    },

    watch: {
      topAppBar (val) {
        this.$vuetify.theme.themes.light.topAppBar = val;
        this.$emit('input', val);
      },
    },

    created () {
      this.topAppBar = this.$vuetify.theme.themes.light.topAppBar;
    },
    methods: {

    },
  };
</script>

<style scoped>

</style>
