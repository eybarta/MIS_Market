import * as types from './mutation-types';

export const toggleOverlay = ({commit}, type) => {
    commit('TOGGLE_OVERLAY', type);
}
export const hideOverlay = ({commit}) => {
    commit('HIDE_OVERLAY');
}

export const searchFilterString = ({commit}, filter_string) => {
    commit('SEARCH_FILTER_STRING', filter_string);
}


// CART ACTIONS
export const addToCart = ({commit}, item) => {
    commit('ADD_TO_CART', item);
}