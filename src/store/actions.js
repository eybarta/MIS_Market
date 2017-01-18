import * as types from './mutation-types';

export const toggleOverlay = async ({commit, dispatch}, type) => {
     commit('TOGGLE_OVERLAY', type, await dispatch('hideShelf'));
     return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 200)
    })
    
}
export const showOverlay = async ({commit, dispatch}, type) => {
    commit('SHOW_OVERLAY', type, await dispatch('hideShelf'));
}
export const hideOverlay = ({commit}) => {
    commit('HIDE_OVERLAY');
}

export const toggleShelf = async ({commit}, type) => {
    type = (!!type && typeof type==='string') ? type : 'cart';
     return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('TOGGLE_SHELF', type);
        resolve()
      }, 400)
     })
}
export const changeShelfType =  ({commit}, type) => {
    commit('CHANGE_SHELF_TYPE', type);
}
export const showShelf = async ({commit}) => {
    return new Promise((resolve, reject) => {
        commit('SHOW_SHELF');
      setTimeout(() => {
        resolve()
      }, 400)
    })
}
export const hideShelf = async ({commit}) => {
    commit('HIDE_SHELF');
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 50)
    })
    
}

export const searchFilterString = ({commit}, filter_string) => {
    commit('SEARCH_FILTER_STRING', filter_string);
}


// CART ACTIONS
export const addToCart = async ({commit, dispatch}, item) => {
    await dispatch('hideOverlay');
    item.amount = (!!item.amount) ? item.amount : 1;
    commit('ADD_TO_CART', item, await dispatch('showShelf'));
    // dispatch('showShelf');   
}
export const updateItemInCart = async ({commit, dispatch}, item) => {
    await dispatch('hideOverlay');
    commit('UPDATE_ITEM_IN_CART', item, await dispatch('showShelf'));
    // dispatch('showShelf');
}
export const removeFromCart = ({commit}, item) => {
    commit('REMOVE_FROM_CART', item);
}
export const openItem = async({commit, dispatch}, item) => {
    commit('OPEN_ITEM', item);
    dispatch('showOverlay', 'item');
}

