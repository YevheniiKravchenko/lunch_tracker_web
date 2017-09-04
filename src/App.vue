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
  </md-layout>
</template>

<script>
  import NavBar from './components/NavBar';

  export default {
    name: 'app',
    components: {
      navbar: NavBar,
    },
  };
</script>

<style>
@import '../node_modules/vue-material/dist/vue-material.css';

body {
  margin: 0;
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

  main {
    height: calc(100vh - 56px);
  }
}
</style>
