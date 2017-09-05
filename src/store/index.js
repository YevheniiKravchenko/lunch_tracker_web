import Vuex from 'vuex';

import menu from './modules/menu';

export default () => new Vuex.Store({
  modules: {
    menu,
  },
});
