<template>
  <md-card class="card root">
    <menu-item :title="option.main" />
    <menu-item :title="option.side1" />
    <menu-item :title="option.side2" />
    <menu-item :title="option.salad" />
    <div class="cost">{{option.cost}}/{{option.cost_without_main}} uah</div>
  </md-card>
</template>

<style scoped>
  .card.root {
    width: 95%;
    padding: 10px;
    margin: 10px;
  }

  .cost {
    display: block;
    width: 100%;
    margin-top: 15px;
    font-size: 1.3em;
  }

  @media screen and (min-width: 640px) {
    .card.root {
      width: 30%;
      min-width: 300px;
    }
  }
</style>

<script>
  import MenuItem from './MenuItem';

  export default {
    name: 'menu-option',
    props: {
      option: Object,
    },
    components: {
      'menu-item': MenuItem,
    },
  };
</script>
