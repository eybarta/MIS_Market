import $ from 'jquery'
import Vue from 'vue'
import * as types from './mutation-types'
import {router} from '../index'

const GET_CATEGORIES = "GetCategories"
const GET_ITEMS = "GetItems"
const GET_MEMBER = "GetMember"
const SAVE_CART = "SaveCart"
const GET_MEMBER_CARTS = "GetMemberCarts"

/*
 -------------
    // API -- User, Categories, Items
 -------------
*/
export const initUser = async ({commit, getters}) => {
    let _user = getFromStorage(localStorage, "_marketuser");
    if (!!_user) {
        _user = JSON.parse(_user);
        if (!_.has(_user, 'itemsOrdered')) {
            _user.itemsOrdered = await fetchItemsOrdered(_user.member_id);
        }
        // initIdleTimer()
    }
    commit('INIT_USER', _user);
    return _user;
}
export const initCategories = async ({commit, dispatch}) => {
    let categories = getFromStorage(localStorage, "_marketcategories") // storageSupport() ? localStorage.getItem("_marketcategories") || null : null;
    if (!categories) {
        Vue.http.post(GET_CATEGORIES, { id: 1 }).then(response => {
            // console.log("RESPONSE >> ", response);
            if (!!response.body && !!response.body.d) {
                let cats = JSON.parse(response.body.d);
                cats.unshift({
                    Id: 111101,
                    name: 'Simple Campaign',
                    sort: 0,
                    parent: -1,
                    children: []
                })
                cats.unshift({
                    Id: 111100,
                    name: 'New',
                    sort: 0,
                    parent: -1,
                    children: []
                })
                _.remove(cats, { Id: 85});
                _.each(cats, cat => cat.src = './static/img/categories/' + cat.name.split(' ')[0].toLowerCase() + '.png');
                // save categories to local storage if available 
                setToStorage(localStorage, '_marketcategories', JSON.stringify(cats), 30);
                commit('INIT_CATEGORIES', cats);
            }
            return response;
        }, response => {
            // console.log('categories response err > ', response);
            return { 'err': response }
        }, { headers: { 'Access-Control-Allow-Origin': '*' } })
    } else {
        commit('INIT_CATEGORIES', JSON.parse(categories));
    }
}
export const initItems = async ({commit, dispatch, getters}, items) => {
    console.log("[initItems]");
    let _items = getFromStorage(sessionStorage, "_marketitems");
    if (!_items) {
        Vue.http.post(GET_ITEMS, { id: 1}).then( async response => {
            if (!!response.body && !!response.body.d) {
                // console.log("ITEMS HAVE RETURNED ... ");
                let items = await mapItems(JSON.parse(response.body.d), getters.isDevice, getters.isIE);

                // save items to session storage if available (will be saved only for current tab)
                setToStorage(sessionStorage, '_marketitems', JSON.stringify(items), 10)
                commit('INIT_ITEMS', items);
            }
            return response;
        }, response => {
            // console.log('err > ', response);
            return { 'err': response}
        }, {headers: {'Access-Control-Allow-Origin': '*'}})
    }
    else {
        commit('INIT_ITEMS', JSON.parse(_items));
    }
}
export const signInUser = async ({commit, dispatch}, user) => {
    let errmsg = "Login failed, please try again."
    return Vue.http.post(GET_MEMBER, user).then(response => {
        if (!!response.body && !!response.body.d) {
            let res = JSON.parse(response.body.d);
            if (_.has(res, 'Err')) {
                return errmsg;
            } else {
                commitUser(res);
            }
        }        
    }, response => {
        return errmsg;
    }, {headers: {'Access-Control-Allow-Origin': '*'}})

    async function commitUser(res) {
        let _user = {
            first_name: res.first_name,
            last_name: res.last_name,
            country: res.country,
            member_id: res.member_id,
            email: res.email,
            flag: null,
            itemsOrdered: [],
            timestamp: new Date()
        }
        if (!!res.country) {
            _user.itemsOrdered = await fetchItemsOrdered(_user.member_id);
            _user.flag = await fetchUserFlag(_user.country);
        }

        setToStorage(localStorage, '_marketuser', JSON.stringify(_user), 3);
        commit('INIT_USER', _user);
        router.push({ name: 'home'})
    }
}
export const userSignout = ({commit, dispatch}) => {
    removeFromStorage(localStorage, "_marketuser");
    commit('INIT_USER', null);
    router.push({ name: 'login'})
}

/*
 -------------
    // OVERLAY
 -------------
*/
export const toggleOverlay = async ({commit, dispatch, state}, type) => {

    let act = !!state.overlay.active ? 'HIDE_OVERLAY' : 'SHOW_OVERLAY';
     commit(act, type, await dispatch('hideShelf'));
     return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 200)
    })
    
}
export const showOverlay = async ({commit, dispatch}, type) => {
    
    commit('SHOW_OVERLAY', type);
}
export const hideOverlay = async ({commit}) => {
    commit('HIDE_OVERLAY');
}

/*
 -------------
    // SHELF
 -------------
*/
var shelfTimer = 0;
export const toggleShelf = async ({commit, dispatch}, type) => {
    // console.log("TOGGLE SHELF");
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
export const bindCartMouseMove = ({commit, dispatch, state, getters}) => {
    // console.log('bind mouse events to shelf');
    clearTimeout(shelfTimer);
    let time = 4000;
    $('#cartWrap').off();
    if (!!getters.isDevice) {
        timedShelfClose(dispatch, time);
    }
    else {
        setTimeout(function () {
            if (!state.mousepos || (state.mousepos.y < 130 || state.mousepos.y > 630)) {
                timedShelfClose(dispatch, time);
            }
            $('#cartWrap').on('mouseenter mouseleave', function (e) {
                if (e.type === 'mouseleave') {
                    timedShelfClose(dispatch, time);
                }
                else {
                    clearTimeout(shelfTimer);
                }
            })
        }, 500)
    }
    function timedShelfClose(dispatch, time) {
        shelfTimer = setTimeout(function () {
            dispatch('hideShelf');
        }, time)
    }
}
export const updateMousePos = ({commit}, pos) => {
    commit('UPDATE_MOUSE_POS', pos);
}

/*
 -------------
    // SEARCH FILTER
 -------------
*/
export const searchFilterString = ({commit, dispatch, state}, filter_string) => {
    if (!!state.shelf.active) {
        dispatch('hideShelf');
    }
    if (!!state.overlay.active) {
        dispatch('hideOverlay');
    }

    console.log('commit SEARCH_FILTER_STRING >>> ', filter_string);
    commit('SEARCH_FILTER_STRING', filter_string);
}


/*
 -------------
    // DRAG N DROP
 -------------
*/
export const updateItemInLimbo = async ({commit, dispatch, state}, item) => {
    if (!!item && !state.shelf.active) {
        await dispatch('showShelf');
    }
    commit('UPDATE_ITEM_IN_LIMBO', item);
}


/*
 -------------
    // CART ACTIONS
 -------------
*/

export const addToCart = async ({commit, dispatch, state}, item) => {
    if (!state.shelf.active) {
        await dispatch('showShelf')
        await dispatch('hideOverlay');
    }
    else {
        dispatch('bindCartMouseMove');
    }
    if (!item.inCart) {
        // dispatch('toPreventPageChange', true);
         let _item = _.find(state.items, {id:item.id});
        Vue.set(_item, 'inCart', true);
        _item.amount = (!!_item.amount) ? _item.amount : 1;
        commit('ADD_TO_CART', _item);
    }
}
export const updateItemInCart = async ({commit, dispatch}, item) => {
    // console.log("update item in cart>> ", item);
    commit('UPDATE_ITEM_IN_CART', item);
    setTimeout(function() {
        dispatch('showShelf')
    },100)
}
export const removeFromCart = ({commit, dispatch}, item) => {
    commit('REMOVE_FROM_CART', item);
}
export const emptyCart = async ({commit, dispatch, state}) => {
    setTimeout(function() {
        return true
    }, 500);
    while (!!state.cart.items.length) {
        dispatch('removeFromCart', state.cart.items[0]);
    }
}
export const openItem = async({commit, dispatch}, item) => {
    commit('OPEN_ITEM', item);
    dispatch('showOverlay', 'item');
}
export const updateItemSize = ({commit}, size) => {
    commit('UPDATE_ITEM_SIZE', size);
}

// SAVE CART TO USER
export const saveCart = async ({commit, dispatch, state}, subtotal) => {
    let items = _.map(state.cart.items, item => {
        return {
            ItemId: item.id,
            Quintity: item.amount
        }
    });
    let mId = state.user.member_id;
    let token = 12345;
    let cartData = { items, subtotal};
    let data = {cartData: items, mId, token}
    let _data = { 'cart': btoa(JSON.stringify(data)).toString()}

    // console.log("data > ", _data);
    Vue.http.post(SAVE_CART,_data).then(async (err, response) => {
        // console.log("SAVE_CART, RESPONSE >> ", err, " :: ",  response);

        dispatch('changeShelfType', 'confirm');
        dispatch('bindCartMouseMove', await dispatch('emptyCart'));
        // localStorage.removeItem("_marketuser");
    }, response => {
        // console.log('save cart error >> ', response);
    })
}

/*
 -------------
    // HELPER FUNCTIONS
 -------------
*/
async function mapItems(items, isDevice,isIE) {
        // console.log('MAP ITEMS');
        let countryCodes = _.filter(_.compact(_.uniq(_.map(items, 'LangCC'))), r => { return _.trim(r)!=''}).join(';');
        // console.log('2 countryCodes > ', countryCodes);
        let item_country_flags = await fetchFlagsForItems(countryCodes, isDevice, isIE);

        // console.log("rAW ITEMS  > ", items);
        let mappedItems = _.map(items, item => {
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

            let catId = [item.CategoryId]; 
            let catNo = _.trim(item.CatalogNo);
            // let rootCatId = getRootId(item.CategoryId);
            if (!!item.TopSeller) {
                catId.push(111100);
            }
            if (!!/simple/i.test(item.Name)) {
                catId.push(111101);
            }
            


            return {
                id: item.Id,
                catId,
                description: item.Description,
                image: "./static/img/items/"+catNo.replace(/\s/g, '_').replace(/\'/g, '').replace(/b\+/gi, 'BPLUS_') + ".png",
                catNo,
                name: item.Name,
                price:item.Price || 0,
                flag: !!item_country_flags ? item_country_flags[item.LangCC] || null : null,
                attachments,
                sort: item.Sort
                
            }
        })
        return _.sortBy(mappedItems, 'sort');
}

async function fetchFlagsForItems(countryCodes, isDevice, isIE) {
    // console.log('fetchFlagsForItems >> isIE?? ', isIE);
    let flagCollection = {};
    if (isDevice || isIE) {
        let ccArray = countryCodes.split(';');
        // console.log("countryCodes .. ", countryCodes);
        for (var i = 0; i< ccArray.length; i++ ) {
            let cc = ccArray[i];
            flagCollection[cc] = "./static/img/flags/"+cc+".png";
        }
        // console.log('flagCollection >> ', flagCollection);
        return flagCollection;
    }
    else {
        let api = "https://restcountries.eu/rest/v2/alpha?codes=" + countryCodes;
        return new Promise((resolve, reject) => {
            Vue.http.get(api).then(response => {
                
                if (!!response.body) {
                    for (var i = 0; i < response.body.length; i++) {
                        let c = response.body[i];
                        // console.log("C >> ",c);
                        if (!!c) {
                            flagCollection[c.alpha2Code] = c.flag
                        }
                        
                    }
                }
                resolve(flagCollection);
            }), response => {
                resolve(null);
            }
        });
    }
    
}


async function fetchUserFlag(country) {
    return new Promise((resolve, reject) => {
        let api = "https://restcountries.eu/rest/v2/name/"+country;
        Vue.http.get(api).then(response => {
            if (!!response.data.length && !!response.data[0].flag) {
                resolve(response.data[0].flag);
            } else {
                resolve(null);
            }
        }), response => {
            resolve(null);
        }
    })
}

async function fetchItemsOrdered(id) {
    return Vue.http.post(GET_MEMBER_CARTS, {MemberID:id}).then(async response => {
        if (!!response && !!response.body.d) {
            let res = JSON.parse(response.body.d);
            let itemIds = _.uniq(_.map(_.flatMap(res, 'OrderItems'), 'ItemId'));
            return itemIds;
        }
    }, response => {
        // console.log('GET_MEMBER_CARTS error >> ', response);
        return [];
    })
}

function initIdleTimer() {
    // TODO:: kick idle user out after XX number if minutes...   
}

// LOCAL STORAGE
// CHECK SUPPORT
function storageSupport(){
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch(e) {
        return false;
    }
}

// FETCH FROM STORAGE
function getFromStorage(storageType, key) {
    if (storageSupport()) {
        checkStorageExpiration(storageType, key);
        return storageType.getItem(key) || null
    }
    return null;
}
// SAVE TO STORAGE
function setToStorage(storageType, key, data, daysToExpire) {
    storageSupport() && storageType.setItem(key, data);
    setStorageExpiration(storageType, key, daysToExpire);
}
 
// CHECK EXPIRATION
function checkStorageExpiration(storageType, key) {
    let curdate = new Date(),
    date = new Date(storageType.getItem(key+'_expiration'));
    if (!!date && curdate>date) {
        removeFromStorage(storageType, key) 
    }
}
// SET EXPIRATION
function setStorageExpiration(storageType, key, days=10) {
    let expiredate = new Date();
    expiredate.setDate(expiredate.getDate() + days);  
    storageType.setItem(key+'_expiration', expiredate);
}

// REMOVE FROM STORAGE
function removeFromStorage(storageType, key) {
    storageType.removeItem(key);
    storageType.removeItem(key+"_expiration");
}

// RESTART CACHING
function clearCache() {
    removeFromStorage(localStorage, "_marketcategories");
    removeFromStorage(sessionStorage, "_marketitems");
}

window._cc = clearCache;