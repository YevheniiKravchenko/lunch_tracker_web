<template>
  <md-input-container>
    <md-file @selected="pickFile" :placeholder="placeholder"></md-file>
  </md-input-container>
</template>

<script>
  export default {
    name: 'file-picker',
    props: ['placeholder'],
    methods: {
      pickFile(files) {
        this.$emit('pick', files[0]);
      },
    },
  };
</script>

<style scoped>

</style>
