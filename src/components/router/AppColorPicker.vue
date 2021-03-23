<template>
  <v-text-field
    v-model="appbar"
    append-icon="color_lens"
    :disabled="disabled"
    @click:append="colorPickerDialog = !colorPickerDialog"
  >
    <template v-slot:append>
      <v-menu
        v-model="colorPickerDialog"
        style="top: -12px"
        offset-y
        :close-on-click="false"
        :close-on-content-click="false"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-icon
            v-bind="attrs"
            :color="$vuetify.theme.themes.light.primary"
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
            @input="switchOption(appbar)"
          />
          <v-card-actions>
            <v-spacer />
            <v-btn
              color="error"
              @click="switchOption(initValue, true)"
            >
              Cancel
            </v-btn>
            <v-btn
              color="primary"
              @click="switchOption(appbar, true)"
            >
              Select
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </template>
  </v-text-field>
</template>

<script>
  export default {
    name: 'AppColorPicker',
    tag: 'app-color-picker',
    props: {
      value: String,
      disabled: Boolean,
    },
    data: () => ({
      appbar: null,
      initValue: null,
      colorPickerDialog: false,
    }),

    created () {
      this.initValue = this.value;
      this.appbar = this.initValue;
    },

    methods: {
      switchOption (val, closeOnSet = false) {
        this.$emit('input', val);
        if (closeOnSet) this.colorPickerDialog = !this.colorPickerDialog;
      },
    },

  };
</script>

<style scoped>

</style>
