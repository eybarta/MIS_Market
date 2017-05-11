import $ from 'jquery'
import * as types from './mutation-types';

var shelfTimer = 0;

export const toggleOverlay = async ({commit, dispatch}, type) => {
     commit('TOGGLE_OVERLAY', type, await dispatch('hideShelf'));
     return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 200)
    })
    
}
export const showOverlay = async ({commit, dispatch}, type) => {
    commit('SHOW_OVERLAY', type, await dispatch('hideShelf', false));
}
export const hideOverlay = async ({commit}) => {
    commit('HIDE_OVERLAY');
}

export const toggleShelf = async ({commit, dispatch}, type) => {
    console.log("TOGGLE SHELF");
    dispatch('bindCartMouseMove');
    clearTimeout(shelfTimer);
    type = (!!type && typeof type==='string') ? type : 'cart';
    commit('TOGGLE_SHELF', type);
     return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 400)
     })
}
export const changeShelfType =  ({commit}, type) => {
    clearTimeout(shelfTimer);
    commit('CHANGE_SHELF_TYPE', type);
}
export const showShelf = async ({commit, dispatch}) => {
    console.log("SHOW SHELF");
    dispatch('bindCartMouseMove');
    commit('SHOW_SHELF', await dispatch('hideOverlay'));
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            resolve()
        }, 400)
    })
}
export const hideShelf = async ({commit}, animate) => {
    commit('HIDE_SHELF', animate);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 0)
    })
}

export const searchFilterString = ({commit}, filter_string) => {
    console.log("action update>> searchFilterString >> ", filter_string)
    commit('SEARCH_FILTER_STRING', filter_string);
}


// DRAG N DROP
export const updateItemInLimbo = async ({commit, dispatch, state}, item) => {
    if (!!item && !state.shelf.active) {
        await dispatch('showShelf');
    }
    commit('UPDATE_ITEM_IN_LIMBO', item);
}

// CART ACTIONS
export const addToCart = async ({commit, dispatch}, item) => {
    await dispatch('hideOverlay');
    console.log("ADD TO CART >> ", item, " :: ");
    item.amount = (!!item.amount) ? item.amount : 1;
    commit('ADD_TO_CART', item);
    dispatch('showShelf');
}
export const updateItemInCart = async ({commit, dispatch}, item) => {
    console.log("update item in cart>> ", item);
    commit('UPDATE_ITEM_IN_CART', item);
    setTimeout(function() {
        dispatch('showShelf')
    },100)
}
export const removeFromCart = ({commit}, item) => {
    commit('REMOVE_FROM_CART', item);
}
export const openItem = async({commit, dispatch}, item) => {
    commit('OPEN_ITEM', item);
    dispatch('showOverlay', 'item');
}

export const updateItemSize = ({commit}, size) => {
    commit('UPDATE_ITEM_SIZE', size);
}

export const bindCartMouseMove = ({commit, dispatch}) => {
    console.log("BIND CART MOVE");
    clearTimeout(shelfTimer);
    $('#cartWrap').off();
    setTimeout(function() {
        $('#cartWrap').on('mouseenter mouseleave', function(e) {
            console.log("event > ", e.type);
            if (e.type==='mouseleave') {
                shelfTimer = setTimeout(function() {
                    dispatch('hideShelf');
                }, 3500)
            }
            else {
                clearTimeout(shelfTimer);
            }
        })
    }, 500)
}