import $ from 'jquery'
import Vue from 'vue'
import * as types from './mutation-types'
const GET_CATEGORIES = "./wsMain.asmx/GetCategories"
const GET_ITEMS = "./wsMain.asmx/GetItems"
const GET_MEMBER = "./wsMain.asmx/GetMember"




// API ACTIONS
export const initCategories = async ({commit, dispatch}, categories) => {
    console.log("INIT CATEGORIES !!!");
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
    console.log("INIT ITEMS !!!");
    Vue.http.post(GET_ITEMS).then(response => {
        if (!!response.body && !!response.body.d) {
            let items = mapItems(JSON.parse(response.body.d));
            commit('INIT_ITEMS', items);
        }
        return response;
    }, response => {
        console.log('err > ', response);
        return { 'err': response}
    }, {headers: {'Access-Control-Allow-Origin': '*'}})
}
export const signInUser = async ({commit, dispatch}, user) => {
    console.log("SIGN IN USER ACTION > > ", user);
    return Vue.http.post(GET_MEMBER, user).then(response => {
        console.log("GET USER RESPONSE >> ", response);
        if (!!response.body && !!response.body.d) {
            let res = JSON.parse(response.body.d);
            console.log("RES > ", res);
            if (_.has(res, 'Err')) {
                console.log("HAS ERROR >> ", res);
                return "Login failed, please try again.";
            } else {
                commitUser(res);
                
                
            }
        }        
    }, response => {
        console.log('err > ', response);
        return { 'err': response}
    }, {headers: {'Access-Control-Allow-Origin': '*'}})

    async function commitUser(res) {
        if (!!res.country) {
            console.log('commit with flag...');
            let _user = await getUserWithFlag(res);
            commit('INIT_USER', _user);
        }
        else {
            console.log('commit with no flag...');
            commit('INIT_USER', res);
        }
    }
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

function mapItems(items) {
    return _.map(items, item => {
        let attachments = [];
        if (!!item.PrintCatalog) {
            attachments.push({
                type:"pdf",
                label: "PDF File",
                link: item.PrintCatalog
            })
        }
        if (!!item.NewsLetter) {
            attachments.push({
                type:"newsletter",
                label: "Newsletter",
                link: item.NewsLetter
            })
        }
        if (!!item.Presentation) {
            attachments.push({
                type:"presentation",
                label: "Presentation",
                link: item.Presentation
            })
        }
        return {
            id: item.Id,
			catId: [item.CategoryId],
			image: "./dist/img/items/"+item.CatalogNo+ ".png",
			catNo: item.CatalogNo,
			name: item.Name,
			price:item.Price || 0,
			attachments
        }
    })
}

async function getUserWithFlag(user) {
    console.log("get USER WITH FLAG >> ", user.country);
    return new Promise((resolve, reject) => {
        let api = "https://restcountries.eu/rest/v2/name/"+user.country;
        Vue.http.get(api).then(response => {
            console.log("response from countryfinder > ", response);
            if (!!response.data) {
                user.flag = response.data[0].flag
            }
            resolve(user);
            // return user;
        }), response => {
            console.log("from restcountries err >> ", response);
            resolve(user);
            // return user;
        }
    })
}