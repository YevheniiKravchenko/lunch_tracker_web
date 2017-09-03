<template>
  <md-card class="card">{{title}}</md-card>
</template>

<style scoped>
  .card {
    padding: 2%;
    margin: 1%;
    word-wrap: break-word;
    justify-content: center;
    height: 100%;
    box-shadow: none;
  }
</style>

<script>
  export default {
    name: 'menu-item',
    props: ['title'],
  };
</script>
