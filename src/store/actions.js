import $ from 'jquery'
import Vue from 'vue'
import * as types from './mutation-types'
const GET_CATEGORIES = "./wsMain.asmx/GetCategories"
const GET_ITEMS = "./wsMain.asmx/GetItems"




// API ACTIONS
export const initCategories = async ({commit, dispatch}, categories) => {
    Vue.http.post(GET_CATEGORIES).then(response => {
        if (!!response.body && !!response.body.d) {
            let cats = JSON.parse(response.body.d);
            _.each(cats, cat => cat.src='./dist/img/categories/'+cat.name.split(' ')[0].toLowerCase()+'.png');
            commit('INIT_CATEGORIES', cats);
        }
        return response;
    }, response => {
        console.log('err > ', response);
        return { 'err': response}
    }, {headers: {'Access-Control-Allow-Origin': '*'}})
}
export const initItems = async ({commit, dispatch}, items) => {
    Vue.http.post(GET_ITEMS).then(response => {
        if (!!response.body && !!response.body.d) {
            console.log("RESPONSE >> ", response);
            // let cats = JSON.parse(response.body.d);
            // _.each(cats, cat => cat.src='./dist/img/categories/'+cat.name.split(' ')[0].toLowerCase()+'.png');
            // commit('INIT_ITEMS', cats);
        }
        return response;
    }, response => {
        console.log('err > ', response);
        return { 'err': response}
    }, {headers: {'Access-Control-Allow-Origin': '*'}})
}


var shelfTimer = 0;
// UI ACTIONS
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
    // clearTimeout(shelfTimer);
    // $('#cartWrap').off();
    // timedShelfClose(dispatch, 5500);
    // setTimeout(function() {
    //     $('#cartWrap').on('mouseenter mouseleave', function(e) {
    //         console.log("event > ", e.type);
    //         if (e.type==='mouseleave') {
    //             timedShelfClose(dispatch, 3500);
    //         }
    //         else {
    //             clearTimeout(shelfTimer);
    //         }
    //     })
    // }, 500)
    // function timedShelfClose(dispatch, time) {
    //     shelfTimer = setTimeout(function() {
    //         dispatch('hideShelf');
    //     }, time)
    // }
}