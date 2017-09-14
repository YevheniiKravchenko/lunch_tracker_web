import store from '../store';

const isAuthRoute = route => route.path.indexOf('login') !== -1;

const isLogged = () => store.getters['auth/isAuthenticated'] || localStorage.getItem('token');

export default (to, from, next) => {
  if (!isAuthRoute(to) && !isLogged()) {
    next('/auth/login');
  } else {
    next();
  }
};
