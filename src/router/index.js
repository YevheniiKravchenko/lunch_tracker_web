import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/containers/Login';
import MenuContainer from '@/containers/MenuContainer';
import OrdersContainer from '@/containers/OrdersContainer';
import UploadMenuContainer from '@/containers/UploadMenuContainer';
import UploadDishesContainer from '@/containers/UploadDishesContainer';
import ProfileContainer from '@/containers/ProfileContainer';
import MyOrdersContainer from '@/containers/MyOrdersContainer';
import AuthLayout from '@/layouts/AuthLayout';
import AppLayout from '@/layouts/AppLayout';

import beforeEach from './beforeEach';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'login',
          name: 'Login',
          component: Login,
        },
      ],
    },
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: 'menu',
          redirect: 'menu/today',
        },
        {
          path: 'menu/:day',
          name: 'menu',
          component: MenuContainer,
          props: true,
        },
        {
          path: 'orders',
          name: 'orders',
          component: OrdersContainer,
        },
        {
          path: 'upload/menu',
          name: 'uploadMenu',
          component: UploadMenuContainer,
        },
        {
          path: 'upload/dishes',
          name: 'uploadDishes',
          component: UploadDishesContainer,
        },
        {
          path: 'profile',
          name: 'profile',
          component: ProfileContainer,
        },
        {
          path: 'my-orders',
          name: 'myOrders',
          component: MyOrdersContainer,
        },
        { path: '/', redirect: 'menu' },
      ],
    },
  ],
});

router.beforeEach(beforeEach);

export default router;
