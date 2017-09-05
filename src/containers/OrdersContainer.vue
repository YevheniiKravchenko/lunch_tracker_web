<template>
  <md-layout md-column md-align="center" md-vertical-align="center" >
    <h2>Orders</h2>
    <orders-table :orders="orders" />
  </md-layout>
</template>

<script>
  import orders from './orders';
  import OrdersTable from '../components/OrdersTable';

  export default {
    name: 'orders-container',
    data() {
      return {
        orders,
      };
    },
    components: {
      OrdersTable,
    },
  };
</script>

<style scoped>

</style>
