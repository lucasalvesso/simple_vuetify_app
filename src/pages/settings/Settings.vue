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
      <profile v-if="configDialog === 'profile'" />
    </v-dialog>
  </v-row>
</template>

<script>
  import './options/index';
  import Themes from '@/pages/settings/options/themes/Themes';
  import Profile from '@/pages/settings/options/profile/Profile';
  export default {
    name: 'Settings',
    components: { Themes, Profile },
    data: () => ({
      configDialog: null,
      dialog: false,
    }),
    computed: {
      allSettings () {
        return [{ code: 'themes', name: 'Themes' }, { code: 'profile', name: 'Profile' }];
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
