<template>
  <md-layout md-column md-align="center" md-vertical-align="center">
    <h2>Upload menu</h2>
    <md-layout md-column class="container" md-vertical-align="center">
      <md-input-container>
        <label>Date</label>
        <md-input type="date" v-model="date"></md-input>
      </md-input-container>
      <md-input-container>
        <md-file @selected="setFile" placeholder="Select file with next menu"></md-file>
      </md-input-container>
      <md-button class="md-raised md-accent upload-button" @click.native="upload">Upload</md-button>
    </md-layout>
  </md-layout>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    name: 'upload-container',
    data() {
      return {
        date: new Date().toISOString().substr(0, 10),
        menu: '',
      };
    },
    methods: {
      ...mapActions('menu', [
        'uploadMenu',
      ]),
      setFile(files) {
        this.menu = files[0];
      },
      upload() {
        this.uploadMenu({
          date: this.date,
          menu: this.menu,
        }).then(
          () => this.$notify({
            group: 'main',
            type: 'success',
            title: 'Success',
            text: 'Menu successfully uploaded',
          }),
          () => this.$notify({
            group: 'main',
            type: 'error',
            title: 'Error',
            text: 'Error occured during upload',
          }),
        );
      },
    },
  };
</script>

<style scoped>
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
