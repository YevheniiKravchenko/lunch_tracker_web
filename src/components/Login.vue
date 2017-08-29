<template>
  <md-layout md-align="center" >
    <md-card class="card">
      <md-card-media>
        <h3>Lunch Manager</h3>
      </md-card-media>

      <form autocomplete="nope">
        <md-input-container>
          <label>Login</label>
          <md-input v-model="username" placeholder="Login"></md-input>
        </md-input-container>

        <md-input-container>
          <label>Password</label>
          <md-input v-model="password" type="password" placeholder="Password"></md-input>
        </md-input-container>

        <md-layout md-align="center">
          <md-button @click.native="login" >Login</md-button>
        </md-layout>
      </form>
    </md-card>
  </md-layout>
</template>

<style>
  .card {
    padding: 30px;
    width: 350px;
  }
</style>

<script>
  export default {
    name: 'login',
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {},
    },
  };
</script>
