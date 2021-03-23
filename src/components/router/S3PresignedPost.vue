<template>
  <div />
</template>

<script>
  import './state/presignedpost';

  export async function releaseFileUpload (vm) {
    return new Promise(resolve => {
      vm.$root.$emit('startUpload');
      vm.$root.$on('uploadedfeedback', (val) => {
        console.log('nbnbv', val);
        resolve(val);
      });
    });
  }

  export default {
    name: 'S3Upload',
    tag: 's3upload-component',
    props: {
      value: Boolean, // component caller
      blobFile: [Blob, Array], // file type blob
      filePath: [String, Array], // file path
    },
    data: () => ({

    }),
    computed: {
      getPresignedPost () {
        return this.$store.getters['presignedpost/GET_PRESIGNEDPOST'];
      },
      getUploadFeedback () {
        return this.$store.getters['presignedpost/GET_UPLOADFEEDBACK'];
      },
    },
    watch: {
      getPresignedPost (val) {
        if (val && val.fields) {
          this.$store.dispatch('presignedpost/FETCH_SEND_S3_PRESIGNEDPOST', {
            id: this.$route.params.id,
            url: val.url,
            fields: val.fields,
            file: this.blobFile,
            filename: { filename: val.fields.key },
          });
        }
      },
      getUploadFeedback (val) {
        if (val) {
          this.$root.$emit('uploadedfeedback', val);
        }
      },
    },
    created () {
      this.$root.$on('startUpload', async () => {
        if (this.filePath) {
          await this.$store.dispatch('presignedpost/FETCH_S3_PRESIGNEDPOST', { id: this.$route.params.id, image: this.filePath });
        } else {
          this.$root.$emit('uploadedfeedback', null);
        }
      });
    },
    mounted: function () {

    },
    methods: {

    },
  };
</script>

<style scoped>

</style>
