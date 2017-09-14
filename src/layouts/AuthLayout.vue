<template>
  <div class="auth-container">
    <router-view />
  </div>
</template>

<script>
  export default {
    name: 'auth-layout',
  };
</script>

<style>
  .auth-container {
    padding-top: 100px;
  }
</style>
