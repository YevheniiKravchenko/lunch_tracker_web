<template>
  <md-layout md-align="center" >
    <md-card class="card" :class="{error: error}">
      <md-card-media>
        <h3>Lunch Manager</h3>
      </md-card-media>

      <form autocomplete="nope">
        <md-input-container>
          <label>Login</label>
          <md-input v-model="credentials.email" placeholder="Login"></md-input>
        </md-input-container>

        <md-input-container md-has-password>
          <label>Password</label>
          <md-input v-model="credentials.password" type="password" placeholder="Password"></md-input>
        </md-input-container>

        <md-layout md-align="center" md-row md-vertical-align="center">
          <md-button @click.native="doLogin">Login</md-button>
          <div class="divider" />
          <md-button @click.native="doRegister">Register</md-button>
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
  import { mapActions } from 'vuex';
  import capitalize from 'capitalize';

  export default {
    name: 'login',
    data() {
      return {
        credentials: {
          email: 'test_without_pass@yalantis.com',
          password: '123456',
        },
        error: false,
      };
    },
    methods: {
      ...mapActions('auth', [
        'login',
        'register',
      ]),
      doLogin() {
        this.error = false;
        this.login(this.credentials).then(
          () => this.$router.push('/'),
          () => {
            this.$notify({
              group: 'main',
              type: 'error',
              title: 'Error',
              text: 'Invalid credentials',
            });
            this.error = true;
          },
        );
      },
      doRegister() {
        this.register(this.credentials).then(
          () => {
            this.$router.push('/');
            this.$notify({
              group: 'main',
              type: 'success',
              title: 'Success',
              text: 'You\'ve successfully registered',
            });
          },
          errors => {
            this.$notify({
              group: 'main',
              type: 'error',
              title: capitalize(Object.keys(errors)[0]),
              text: capitalize(errors[Object.keys(errors)[0]][0]),
            });
          },
        );
      },
    },
  };
</script>

<style scoped>
  .card.error {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    perspective: 1000px;
  }

  .divider {
    height: 20px;
    border-right: 1px solid #878686;
    width: 1px;
  }

  @keyframes shake {
    10%, 90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%, 80% {
      transform: translate3d(2px, 0, 0);
    }

    30%, 50%, 70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%, 60% {
      transform: translate3d(4px, 0, 0);
    }
  }
</style>
