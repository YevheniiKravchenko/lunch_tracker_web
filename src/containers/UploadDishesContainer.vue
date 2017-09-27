<template>
  <md-layout md-column md-align="center" md-vertical-align="center" class="root">
    <h2>Upload Categories</h2>
    <file-uploader placeholder="Select file with categories" @upload="onUploadCategories"></file-uploader>
    <h2>Upload Dishes</h2>
    <file-uploader placeholder="Select file with dishes" @upload="onUploadDishes"></file-uploader>
  </md-layout>
</template>

<script>
  import { mapActions } from 'vuex';
  import FileUploader from '../components/FileUploader';
  import notificationsMixin from '../mixins/notificationsMixin';

  export default {
    name: 'upload-dishes-container',
    components: {
      FileUploader,
    },
    mixins: [notificationsMixin],
    methods: {
      ...mapActions('menu', [
        'uploadCategories',
        'uploadDishes',
      ]),
      setFile(files) {
        this.menu = files[0];
      },
      onUploadCategories(file) {
        this.uploadCategories(file).then(
          () => this.notifySuccess('Categories successfully uploaded'),
          () => this.notifyError('Error occured during upload'),
        );
      },
      onUploadDishes(file) {
        this.uploadDishes(file).then(
          () => this.notifySuccess('Dishes successfully uploaded'),
          () => this.notifyError('Error occured during upload'),
        );
      },
    },
  };
</script>

<style scoped>
  .root {
    height: 100%;
  }

  .container {
    width: 90%;
    max-width: 600px;
  }

  .upload-button {
    width: 240px;
    height: 60px;
    font-weight: 600;
  }
</style>
