<template>
  <md-layout md-align="center" md-column  md-vertical-align="center" class="root">
    <h2>My Profile</h2>
    <md-layout md-column md-vertical-align="center" class="container">
      <md-input-container :class="{'md-input-invalid': errors.has('name')}">
        <label>Name</label>
        <md-input class="md-input" type="text" v-model="name" v-validate data-vv-rules="required" data-vv-name="name" />
        <span class="md-error">{{errors.first('name')}}</span>
      </md-input-container>
      <md-input-container :class="{'md-input-invalid': errors.has('email')}">
        <label>Email</label>
        <md-input class="md-input" type="text" v-model="email" v-validate data-vv-rules="required|email" data-vv-name="email" />
        <span class="md-error">{{errors.first('email')}}</span>
      </md-input-container>
      <md-button class="md-raised md-accent save-button" @click.native="save">Save</md-button>
    </md-layout>
  </md-layout>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import notificationsMixin from '../mixins/notificationsMixin';

  export default {
    name: 'profile-container',
    mixins: [notificationsMixin],
    data() {
      return {
        name: '',
        email: '',
      };
    },
    computed: {
      ...mapGetters('auth', {
        user: 'getUser',
      }),
    },
    watch: {
      user() {
        this.updateData();
      },
    },
    methods: {
      ...mapActions('auth', [
        'updateProfile',
      ]),
      save() {
        const { name, email } = this;
        this.updateProfile({ name, email }).then(
          () => this.notifySuccess('Profile updated'),
        );
      },
      updateData() {
        this.name = this.user.name;
        this.email = this.user.email;
      },
    },
    mounted() {
      this.updateData();
    },
  };
</script>

<style scoped>
  .root {
    height: 100%;
  }
  .container {
    width: 90%;
    max-width: 600px;
    height: 100%;
  }
  .save-button {
    width: 240px;
    height: 60px;
    font-weight: 600;
  }
</style>
