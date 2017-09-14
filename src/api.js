import Vue from 'vue';
import VueResource from 'vue-resource';
import camelize from 'camelize';
import snakecase from 'snakecase-keys';

Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:4000/api';

/* eslint-disable */

Vue.http.interceptors.push((request, next) => {
  if (request.body && !(request.body instanceof FormData)) {
    request.body = snakecase(request.body);
  }
  request.params = snakecase(request.params);
  next();
});

const prepareResponse = response => response.json().then(json => camelize(json.data));

const prepareAuthResponse = response => prepareResponse(response).then(data => ({
  user: data.user,
  token: response.headers.get('Authorization'),
}));


/* AUTH API */
export const login = user => {
  return Vue.http.post('login', { user }).then(prepareAuthResponse);
};

export const logout = () => {
  return Vue.http.get('logout').then(prepareResponse);
};

/* REGULAR API */
export const uploadMenu = (date, menu) => {
  const data = new FormData();

  data.append('date', date);
  data.append('menu', menu);

  // TODO: handling errors
  return Vue.http.post('load_menu', data);
};

export const fetchMenu = date => {
  return Vue.http.get('menu_options', {
    params: { date },
  }).then(prepareResponse);
};

export const postOrder = ({ id, date }) => {
  return Vue.http.post('orders', {
    order: {
      menuOptionId: id,
      date,
    },
  }).then(prepareResponse);
};
