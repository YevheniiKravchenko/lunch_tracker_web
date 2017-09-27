<template>
  <md-layout md-column id="app">
    <navbar :profileMenuLabel="profileMenuLabel" @onLogout="doLogout" />
    <main>
      <router-view></router-view>
    </main>
    <footer> <!-- less 640 px -->
      <md-bottom-bar>
        <md-bottom-bar-item md-icon="history" href="/#/next">Menu</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="favorite" href="/#/orders">Orders</md-bottom-bar-item>
        <md-bottom-bar-item md-icon="near_me" href="/#/upload/menu">Upload</md-bottom-bar-item>
      </md-bottom-bar>
    </footer>
  </md-layout>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex';
  import Navbar from '../components/Navbar';

  export default {
    name: 'app-layout',
    computed: {
      ...mapGetters('auth', {
        user: 'getUser',
      }),
      profileMenuLabel() {
        return this.user && this.user.name ? this.user.name : 'My Profile';
      },
    },
    components: {
      Navbar,
    },
    methods: {
      ...mapActions('auth', [
        'logout',
      ]),
      doLogout() {
        this.logout().then(() => {
          this.$router.push('/auth/login');
        });
      },
    },
  };
</script>

<style scoped>
  main {
    text-align: center;
    height: calc(100vh - 112px);
    overflow: auto;
  }
</style>
