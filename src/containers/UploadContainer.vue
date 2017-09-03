<template>
  <md-layout md-column md-align="center" md-vertical-align="center">
    <h2>Upload</h2>
    <md-layout md-column class="container" md-vertical-align="center">
      <md-input-container>
        <label>Date</label>
        <md-input type="date" v-model="date"></md-input>
      </md-input-container>
      <md-input-container>
        <md-file v-model="file" placeholder="Select file with next menu" accept="csv"></md-file>
      </md-input-container>
      <md-button class="md-raised md-accent upload-button">Upload menu</md-button>
    </md-layout>
  </md-layout>
</template>

<script>
  export default {
    name: 'upload-container',
    data() {
      return {
        date: new Date().toISOString().substr(0, 10),
        file: '',
      };
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
  }
</style>
