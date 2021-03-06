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


/* AUTH API */
export const login = user => {
  return doAuthRequest(Vue.http.post('login', { user }));
};

export const register = user => {
  return doAuthRequest(Vue.http.post('register', { user }));
};

export const logout = () => {
  return doRequest(Vue.http.get('logout'));
};

/* REGULAR API */
export const fetchProfile = () => {
  return doRequest(Vue.http.get('profile'));
};

export const updateProfile = user => {
  return doRequest(Vue.http.post('profile', { user }));
};

export const uploadMenu = (date, menu) => {
  const data = new FormData();

  data.append('date', date);
  data.append('menu', menu);

  // TODO: handling errors
  return Vue.http.post('upload_day_menu', data);
};

export const uploadCategories = categories => {
  const data = new FormData();

  data.append('categories', categories);

  return Vue.http.post('upload_categories', data);
};

export const uploadDishes = dishes => {
  const data = new FormData();

  data.append('dishes', dishes);

  return Vue.http.post('upload_dishes', data);
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
