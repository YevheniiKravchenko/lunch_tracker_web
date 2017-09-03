<template>
  <div id="app">
    <navbar />
    <main>
      <router-view></router-view>
    </main>
  </div>
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
}

main {
  text-align: center;
  margin-top: 20px;
}
</style>
