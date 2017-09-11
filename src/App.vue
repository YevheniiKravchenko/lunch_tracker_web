<template>
  <md-layout md-column id="app">
    <navbar />
    <main>
      <router-view></router-view>
    </main>
    <footer> <!-- less 640 px -->
      <md-bottom-bar>
        <md-bottom-bar-item md-icon="history" href="/#/next">Menu</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="favorite" href="/#/orders">Orders</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="near_me" href="/#/upload">Upload</md-bottom-bar-item>
      </md-bottom-bar>
    </footer>
    <notifications group="main" position="bottom right" animation-type="velocity" :speed="500" classes="notify-style" />
  </md-layout>
</template>

<script>
  import Navbar from './components/Navbar';

  export default {
    name: 'app',
    components: {
      Navbar,
    },
  };
</script>

<style>
@import '../node_modules/vue-material/dist/vue-material.css';

body {
  margin: 0;
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

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}

main {
  text-align: center;
  height: calc(100vh - 112px);
  overflow: auto;
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
</style>
