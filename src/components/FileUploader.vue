<template>
  <md-layout md-column class="container" md-vertical-align="center">
    <file-picker :placeholder="placeholder" @pick="setFile" />
    <md-button class="md-raised md-accent upload-button" @click.native="upload">Upload</md-button>
  </md-layout>
</template>

<script>
  import FilePicker from './FilePicker';

  export default {
    name: 'file-uploader',
    components: {
      FilePicker,
    },
    props: ['placeholder'],
    data() {
      return {
        file: '',
      };
    },
    methods: {
      setFile(file) {
        this.file = file;
      },
      upload() {
        this.$emit('upload', this.file);
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
