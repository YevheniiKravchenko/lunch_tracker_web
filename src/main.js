// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import VueMaterial from 'vue-material';

import App from './App';
import router from './router';
import configureStore from './store';

Vue.use(VueMaterial);
Vue.use(Vuex);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: configureStore(),
  template: '<App/>',
  components: { App },
});
