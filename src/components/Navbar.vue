<template>
  <md-layout md-tag="header" md-vertical-align="center">
    <md-layout class="nowrap">
      <span class="logo">Lunch Manager</span>
      <span class="links hide-small">
        <router-link to="/menu">Menu</router-link>
        <router-link to="/orders">Orders</router-link>
      </span>
    </md-layout>

    <md-layout md-align="end" class="hide-small">
      <router-link to="/upload">Upload menu</router-link>
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
    min-height: 56px;
    max-height: 56px;
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

  a {
    padding: 2px 15px;
    color: white;
    font-size: 1.1em;
  }

  a.router-link-active {
    font-weight: 800;
    color: #e91e63;
  }

  .nowrap {
    flex-wrap: nowrap;
  }

  @media screen and (min-width: 740px) {
    .links {
      margin-left: 50px;
    }
  }

  @media screen and (max-width: 640px) {
    .hide-small {
      display: none;
    }
  }
</style>
