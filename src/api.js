import Vue from 'vue';
import VueResource from 'vue-resource';
import camelize from 'camelize';
import snakecase from 'snakecase-keys';

Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:4000/api';
Vue.http.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJVc2VyOjIiLCJleHAiOjE1MDcwNjQxMjQsImlhdCI6MTUwNDQ3MjEyNCwiaXNzIjoiTHVuY2hUcmFja2VyIiwianRpIjoiZTg5M2M0OTQtZGIzNC00MWVmLWE5NDMtNmU0MzQ0YzY2MDYwIiwicGVtIjp7fSwic3ViIjoiVXNlcjoyIiwidHlwIjoiYWNjZXNzIn0.Ij1Zjosu5HDJqit3rNTMr5_tCxr8IvelrkqqynCLR10M7doiNNU6CWj6cKAFi0ua06dTsrpAvDM0WkQ4iMs6RQ';

/* eslint-disable */

Vue.http.interceptors.push((request, next) => {
  request.params = snakecase(request.params);
  next();
});

const prepareResponse = response => response.json().then(json => camelize(json.data));

export const uploadMenu = (date, menu) => {
  const data = new FormData();

  data.append('date', date);
  data.append('menu', menu);

  // TODO: handling errors
  Vue.http.post('load_menu', data).then(
    () => { console.log('s', arguments); },
    () => { console.log('e', arguments); }
  );
};

export const fetchMenu = date => {
  return Vue.http.get('menu_options', {
    params: { date },
  }).then(prepareResponse);
};
