<template>
  <div>
    <router-view />
    <notifications group="main" position="bottom right" animation-type="velocity" :speed="500" classes="notify-style" />
  </div>
</template>

<script>
  export default {
    name: 'app',
    beforeMount() {
      this.$store.dispatch('auth/checkAuthentication');
    },
  };
</script>

<style>
  @import '../node_modules/vue-material/dist/vue-material.css';

  body {
    margin: 0;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100vh;
  }

  .notifications {
    width: 100% !important;
    bottom: -5px !important;
  }

  .notify-style {
    padding: 10px;

    font-size: 12px;

    color: #ffffff;
    background: #44A4FC;
    border-left: 5px solid #187FE7;
    margin: 0;
  }

  .notify-style.warn {
    background: #ffb648;
    border-left-color: #f48a06;
  }

  .notify-style.error {
    background: #E54D42;
    border-left-color: #B82E24;
  }

  .notify-style.success {
    background: #68CD86;
    border-left-color: #42A85F;
  }
  .notify-style .notification-title, .notify-style .notification-content {
    font-size: 1.2em;
  }

  @media screen and (min-width: 640px) {
    footer {
      display: none;
    }

    .notifications {
      width: 300px !important;
      bottom: 0 !important;
    }

    .notify-style {
      margin: 0 5px 5px;
    }

    main {
      height: calc(100vh - 56px);
    }
  }

  .nowrap {
    flex-wrap: nowrap;
  }

  /*.md-input-container.md-has-password.md-input-focused .md-toggle-password{*/
    /*margin-right: 15px;*/
  /*}*/
</style>
