import Vue from 'vue';
import Router from 'vue-router';
import VueMaterial from 'vue-material';
import Login from '@/components/Login';

Vue.use(Router);
Vue.use(VueMaterial);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
