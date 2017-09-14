import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import menu from './modules/menu';
import orders from './modules/orders';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    menu,
    orders,
  },
});

export default store;
