<template>
  <md-layout md-column md-align="center">
    <h2>Menu (
      <router-link :to="{name: 'menu', params: {day: 'today'}}">today</router-link>,
      <router-link :to="{name: 'menu', params: {day: 'tomorrow'}}">tomorrow</router-link>
      )</h2>
    <h3 v-if="!menu.length">There is no uploaded menu for {{selectedMenu}}</h3>
    <div class="menu-options">
      <menu-option v-for="item in menu" :option="item" />
    </div>
  </md-layout>
</template>

<style scoped>
  @media screen and (min-width: 640px) {
    .menu-options {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }

  h2 a {
    color: inherit;
  }

  h2 a.router-link-active {
    color: #e91e63;
    text-shadow: 0 0 1px #e91e63;
  }
</style>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import MenuOption from '../components/MenuOption';

// eslint-disable-next-line no-confusing-arrow
  const normalize = value => value < 10 ? `0${value}` : value;

  const getToday = (offset = 0) => {
    const now = new Date();

    return `${now.getFullYear()}-${normalize(now.getMonth() + 1)}-${normalize(now.getDate() + offset)}`;
  };

  const getTomorrow = () => getToday(1);

  const dates = {
    today: getToday(),
    tomorrow: getTomorrow(),
  };

  export default {
    name: 'next-container',
    props: ['day'],
    data() {
      return {
        selectedMenu: this.day,
      };
    },
    computed: {
      ...mapGetters('menu', {
        menu: 'getMenu',
      }),
    },
    methods: {
      ...mapActions('menu', [
        'fetchMenu',
      ]),
    },
    components: {
      MenuOption,
    },
    mounted() {
      this.fetchMenu(dates[this.selectedMenu]);
    },
    beforeRouteUpdate(to, from, next) {
      this.selectedMenu = to.params.day;
      this.fetchMenu(dates[this.selectedMenu]);
      next();
    },
  };
</script>
