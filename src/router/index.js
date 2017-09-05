import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import MenuContainer from '@/containers/MenuContainer';
import OrdersContainer from '@/containers/OrdersContainer';
import UploadContainer from '@/containers/UploadContainer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/menu',
      redirect: '/menu/today',
    },
    {
      path: '/menu/:day',
      name: 'menu',
      component: MenuContainer,
      props: true,
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrdersContainer,
    },
    {
      path: '/upload',
      name: 'Upload',
      component: UploadContainer,
    },
    { path: '/', redirect: '/menu' },
  ],
});
