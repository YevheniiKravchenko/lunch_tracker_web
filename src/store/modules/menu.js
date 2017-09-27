import {
  fetchMenu as fetchMenuAPI,
  uploadMenu as uploadMenuAPI,
  uploadCategories as uploadCategoriesAPI,
  uploadDishes as uploadDishesAPI,
} from '../../api';
import * as types from '../actionTypes';


// Initial state
const initialState = {
  menu: [],
  date: '',
};

const getters = {
  getMenu: state => state.menu,
};

const actions = {
  fetchMenu({ commit }, date) {
    fetchMenuAPI(date).then(menu => {
      commit(types.MENU_FETCHED, {
        date,
        menu,
      });
    });
  },
  uploadMenu({ commit }, { date, menu }) {
    return uploadMenuAPI(date, menu);
  },
  uploadCategories({ commit }, categories) {
    return uploadCategoriesAPI(categories);
  },
  uploadDishes({ commit }, dishes) {
    return uploadDishesAPI(dishes);
  },
};

const mutations = {
  [types.MENU_FETCHED](state, { menu, date }) {
    state.menu = menu;
    state.date = date;
  },
};


export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
