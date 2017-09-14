import Vue from 'vue';
import { login as loginAPI, logout as logoutAPI } from '../../api';
import * as types from '../actionTypes';


// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
  token: null,
};

const setToken = token => { Vue.http.headers.common.Authorization = token; };

const getters = {
  getUser: state => state.user,
  isAuthenticated: state => state.isAuthenticated,
};

const actions = {
  login({ commit }, credentials) {
    return loginAPI(credentials).then(
      ({ user, token }) => {
        localStorage.setItem('token', token);
        setToken(token);
        commit(types.USER_LOGGED_IN, { user, token });
      },
    );
  },
  checkAuthentication({ commit }) {
    const token = localStorage.getItem('token');

    if (token) {
      setToken(token);
      commit(types.USER_LOGGED_IN, { token });
    }
  },
  logout({ commit }) {
    return logoutAPI().then(
      () => {
        localStorage.removeItem('token');
        setToken(null);
        commit(types.USER_LOGGED_OUT);
      },
    );
  },
};

const mutations = {
  [types.USER_LOGGED_IN](state, { user, token }) {
    state.user = user;
    state.token = token;
    state.isAuthenticated = true;
  },
  [types.USER_LOGGED_OUT](state) {
    Object.assign(state, initialState);
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
