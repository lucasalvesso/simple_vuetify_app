<template>
  <v-card
    class="mx-auto fill-height"
  >
    <v-card-title class="justify-center">
      Profile
    </v-card-title>

    <v-card-text>
      <profile-picture v-model="entity.picture" />
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
  import Picture from '@/pages/settings/options/profile/Picture';
  export default {
    name: 'Profile',
    tag: 'profile',
    components: {
      'profile-picture': Picture,
    },

    data: () => ({
      entity: {
        picture: null,
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
