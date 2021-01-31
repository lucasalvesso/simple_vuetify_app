<template>
  <v-container>
    <template
      v-for="(obj, index) of allSettings"
    >
      <v-hover
        :key="index"
        v-slot="{hover}"
      >
        <v-card
          :color="hover ? 'primary' : ''"
          elevation="10"
          :height="['xl', 'lg', 'md'].includes($vuetify.breakpoint.name) ? '120px' : '100px'"
          style="cursor:pointer"
          width="50%"
          @click="configDialog = index"
        >
          <v-card-text class="justify-center align-center fill-height headline text-center">
            <v-row class="justify-center align-center fill-height text-center">
              {{ obj.name }}
            </v-row>
          </v-card-text>
        </v-card>
      </v-hover>
    </template>
    <v-dialog
      v-model="dialog"
      persistent
      width="600px"
    >
      <themes />
    </v-dialog>
  </v-container>
</template>

<script>
  import './options/index';
  import Themes from '@/pages/settings/options/themes/Themes';
  export default {
    name: 'Settings',
    components: { Themes },
    data: () => ({
      configDialog: null,
      dialog: false,
    }),
    computed: {
      allSettings () {
        return [{ code: 'themes', name: 'Themes' }];
      },
    },
    watch: {
      configDialog (val) {
        this.getConfigDialog(val);
      },
    },

    created () {
    },
    methods: {
      getConfigDialog (index) {
        this.dialog = true;
        this.dialogLoading = true;
        // const set = this.allSettings[index];
      },
    },
  };
</script>

<style scoped>

/*.custom-buttom-hover:hover {*/
/*  box-shadow: black;*/
/*  font-size: 120%;*/

/*}*/
</style>
