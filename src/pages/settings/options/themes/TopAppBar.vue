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
        Top App Bar Color
      </span>
    </v-col>
    <v-col
      sm="4"
      class="d-flex justify-end"
    >
      <v-text-field
        v-model="appbar"
        append-icon="color_lens"
        @click:append="colorPickerDialog = !colorPickerDialog"
      >
        <template v-slot:append>
          <v-menu
            style="top: -12px"
            offset-y
            :close-on-content-click="false"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                v-bind="attrs"
                :color="$vuetify.theme.themes.light.topAppBar"
                v-on="on"
              >
                color_lens
              </v-icon>
            </template>
            <v-card>
              <v-color-picker
                v-model="appbar"
                dot-size="24"
                hide-inputs
                hide-mode-switch
                mode="hexa"
                swatches-max-height="156"
              />
              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="primary"
                  @click="switchOption(appbar)"
                >
                  Select
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-menu>
        </template>
      </v-text-field>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: 'TopAppBar',
    tag: 'top-app-bar',
    data: () => ({
      appbar: null,
      colorPickerDialog: false,
    }),

    watch: {

    },

    created () {
      this.appbar = this.$vuetify.theme.themes.light.topAppBar;
    },
    methods: {
      switchOption (val) {
        this.$vuetify.theme.themes.light.topAppBar = val;
      },
    },
  };
</script>

<style scoped>

</style>
