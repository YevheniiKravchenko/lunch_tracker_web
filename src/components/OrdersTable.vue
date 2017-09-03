<template>
  <md-table v-once class="full-width">
    <md-table-header>
      <md-table-row>
        <md-table-head>Name</md-table-head>
        <md-table-head>Menu Number</md-table-head>
        <md-table-head>Cost</md-table-head>
      </md-table-row>
    </md-table-header>

    <md-table-body>
      <md-table-row v-for="(row, index) in orders" :key="index">
        <md-table-cell>{{row.name}}</md-table-cell>
        <md-table-cell>{{row.option_number}}</md-table-cell>
        <md-table-cell>{{row.cost}}</md-table-cell>
      </md-table-row>
    </md-table-body>
  </md-table>
</template>

<script>
  export default {
    name: 'orders-table',
    props: ['orders'],
  };
</script>

<style>
  .md-table-head-container {
    text-align: center;
  }

  .full-width {
    width: 100%;
  }
</style>
