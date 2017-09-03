<template>
  <md-layout md-tag="header" md-vertical-align="center">
    <md-layout>
      <span class="logo">Lunch Manager</span>
      <span class="links">
        <router-link to="/next">Next</router-link>
        <router-link to="/orders">Orders</router-link>
      </span>
    </md-layout>

    <md-layout md-align="end">
      <router-link to="/upload">Upload next menu</router-link>
      <a href="/logout" class="logout">Logout</a>
    </md-layout>
  </md-layout>
</template>

<script>
  export default {
    name: 'navbar',
  };
</script>

<style scoped>
  header {
    margin: 0;
    height: 56px;
    padding: 0 16px 0 24px;
    background-color: #35495E;
    color: #ffffff;
    justify-content: space-between;
  }

  header .logo {
    display: block;
    position: relative;
    font-size: 20px;
    line-height: 1;
    letter-spacing: .02em;
    font-weight: 400;
    box-sizing: border-box;
  }

  .links {
    margin-left: 50px;
  }

  a {
    padding: 2px 15px;
    color: white;
    font-size: 1.1em;
  }

  a.router-link-active {
    font-weight: 800;
    color: #e91e63;
  }
</style>
