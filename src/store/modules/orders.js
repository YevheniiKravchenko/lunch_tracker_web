import { postOrder as postOrderAPI } from '../../api';
// import * as types from '../actionTypes';

// Initial state
const initialState = {
  // menu: [],
  // date: '',
};

const getters = {
  // getMenu: state => state.menu,
};

const actions = {
  postOrder({ commit }, order) {
    return postOrderAPI(order);
  },
};

const mutations = {
  // [types.MENU_FETCHED](state, { menu, date }) {
  //   state.menu = menu;
  //   state.date = date;
  // },
};


export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
