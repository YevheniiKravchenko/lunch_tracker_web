<template>
  <md-layout md-column md-align="center">
    <h2>Next menu</h2>
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

</style>

<script>
  import menu from './next-menu';
  import MenuOption from '../components/MenuOption';

  export default {
    name: 'next-container',
    data() {
      return {
        menu,
      };
    },
    components: {
      'menu-option': MenuOption,
    },
  };
</script>
