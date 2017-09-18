import Vue from 'vue';
import {
  login as loginAPI,
  logout as logoutAPI,
  register as registerAPI,
  fetchProfile as fetchProfileAPI,
  updateProfile as updateProfileAPI,
} from '../../api';
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
  register({ commit }, credentials) {
    return new Promise((resolve, reject) => {
      registerAPI(credentials).then(
        ({ user, token }) => {
          localStorage.setItem('token', token);
          setToken(token);
          commit(types.USER_LOGGED_IN, { user, token });

          resolve();
        },
        ({ errors }) => reject(errors),
      );
    });
  },
  checkAuthentication({ commit }) {
    const token = localStorage.getItem('token');

    if (token) {
      setToken(token);
      commit(types.USER_LOGGED_IN, { token });
      fetchProfileAPI().then(user => commit(types.PROFILE_FETCHED, user));
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
  updateProfile({ commit }, user) {
    return updateProfileAPI(user).then(
      updatedUser => {
        commit(types.PROFILE_UPDATED, updatedUser);
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
  [types.PROFILE_FETCHED](state, user) {
    state.user = user;
  },
  [types.USER_LOGGED_OUT](state) {
    state.user = null;
    state.token = null;
    state.isAuthenticated = false;
  },
  [types.PROFILE_UPDATED](state, user) {
    state.user = user;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
