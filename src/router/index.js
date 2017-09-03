import Vue from 'vue';
import Router from 'vue-router';
import VueMaterial from 'vue-material';
import Login from '@/components/Login';
import NextContainer from '@/containers/NextContainer';
import OrdersContainer from '@/containers/OrdersContainer';
import UploadContainer from '@/containers/UploadContainer';

Vue.use(Router);
Vue.use(VueMaterial);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/next',
      name: 'Next',
      component: NextContainer,
    },
    {
      path: '/orders',
      name: 'Orders',
      component: OrdersContainer,
    },
    {
      path: '/upload',
      name: 'Upload',
      component: UploadContainer,
    },
  ],
});
