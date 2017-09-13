import Vuex from 'vuex';

import menu from './modules/menu';
import orders from './modules/orders';

export default () => new Vuex.Store({
  modules: {
    menu,
    orders,
  },
});
