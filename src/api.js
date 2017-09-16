/* global process */

import Vue from 'vue';
import VueResource from 'vue-resource';
import camelize from 'camelize';
import snakecase from 'snakecase-keys';

Vue.use(VueResource);

Vue.http.options.root = `${process.env.API_PATH}/api`;

/* eslint-disable */

Vue.http.interceptors.push((request, next) => {
  if (request.body && !(request.body instanceof FormData)) {
    request.body = snakecase(request.body);
  }
  request.params = snakecase(request.params);
  next();
});

const prepareDataResponse = response => response.json().then(json => camelize(json.data));

const prepareAuthResponse = response => prepareDataResponse(response).then(data => ({
  user: data.user,
  token: response.headers.get('Authorization'),
}));

const prepareErrorResponse = response => response.json().then(json => camelize(json));

/* AUTH API */
export const login = user => {
  return doAuthRequest(Vue.http.post('login', { user }));
};

export const register = user => {
  return doAuthRequest(Vue.http.post('users', { user }));
};

export const logout = () => {
  return doRequest(Vue.http.get('logout'));
};

const doRequest = request => new Promise((resolve, reject) => {
  request.then(
    response => resolve(prepareDataResponse(response)),
    response => reject(prepareErrorResponse(response)),
  );
});

const doAuthRequest = request => new Promise((resolve, reject) => {
  request.then(
    response => prepareAuthResponse(response).then(data => resolve(data)),
    response => prepareErrorResponse(response).then(error => reject(error)),
  );
});

/* REGULAR API */
export const uploadMenu = (date, menu) => {
  const data = new FormData();

  data.append('date', date);
  data.append('menu', menu);

  // TODO: handling errors
  return Vue.http.post('load_menu', data);
};

export const fetchMenu = date => {
  return doRequest(Vue.http.get('menu_options', {
    params: { date },
  }));
};

export const postOrder = ({ id, date }) => {
  return doRequest(Vue.http.post('orders', {
    order: {
      menuOptionId: id,
      date,
    },
  }));
};
