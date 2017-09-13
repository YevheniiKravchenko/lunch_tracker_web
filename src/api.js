import Vue from 'vue';
import VueResource from 'vue-resource';
import camelize from 'camelize';
import snakecase from 'snakecase-keys';

Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:4000/api';
Vue.http.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJVc2VyOjIiLCJleHAiOjE1MDc5MDM5MDAsImlhdCI6MTUwNTMxMTkwMCwiaXNzIjoiTHVuY2hUcmFja2VyIiwianRpIjoiNTJjNjgxNWItNWYwZi00YTlhLTk5NWMtOGI4MDIwNzZhNjM4IiwicGVtIjp7fSwic3ViIjoiVXNlcjoyIiwidHlwIjoiYWNjZXNzIn0.dxoT6LdWlHI9FfX_SeGlGU6VCjc07xAcdN8i5WNcAa2CJ7-hZ6dRrJ3V9wRvhbLJDVRmnMXwhdhSe9kziur6PA';

/* eslint-disable */

Vue.http.interceptors.push((request, next) => {
  if (request.body && !(request.body instanceof FormData)) {
    request.body = snakecase(request.body);
  }
  request.params = snakecase(request.params);
  next();
});

const prepareResponse = response => response.json().then(json => camelize(json.data));

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
