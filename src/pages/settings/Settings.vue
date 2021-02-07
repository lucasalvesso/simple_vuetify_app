<template>
  <v-row class="pa-4">
    <template
      v-for="(obj, index) of allSettings"
    >
      <v-col
        :key="index"
        cols="12"
        sm="6"
      >
        <v-hover
          v-slot:default="{hover}"
        >
          <v-card
            :color="hover ? 'primary' : ''"
            elevation="10"
            height="100px"
            style="cursor:pointer"
            width="100%"
            @click="configDialog = obj.code"
          >
            <v-card-text class="justify-center align-center fill-height headline text-center">
              <v-row class="justify-center align-center fill-height text-center mt-0">
                {{ obj.name }}
              </v-row>
            </v-card-text>
          </v-card>
        </v-hover>
      </v-col>
    </template>
    <v-dialog
      v-model="dialog"
      persistent
      width="600px"
    >
      <themes v-if="configDialog === 'themes'" />
      <themes v-if="configDialog === 'themes2'" />
      <themes v-if="configDialog === 'themes3'" />
    </v-dialog>
  </v-row>
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
        return [{ code: 'themes', name: 'Themes' }, { code: 'themes2', name: 'Themes 2' }, { code: 'themes3', name: 'Themes 3' }];
      },
    },
    watch: {
      configDialog (val) {
        if (val || val === 0) {
          this.getConfigDialog(val);
        }
      },
    },

    created () {
      this.$root.$on('close', () => {
        this.cancelDialog();
      });
    },
    methods: {
      cancelDialog () {
        this.dialog = false;
        this.configDialog = null;
      },
      getConfigDialog (index) {
        this.dialog = true;
        this.dialogLoading = true;
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
