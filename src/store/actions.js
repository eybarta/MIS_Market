import $ from 'jquery'
import Vue from 'vue'
import * as types from './mutation-types'
const GET_CATEGORIES = "./wsMain.asmx/GetCategories"
const GET_ITEMS = "./wsMain.asmx/GetItems"
const GET_MEMBER = "./wsMain.asmx/GetMember"
const SAVE_CART = "./wsMain.asmx/SaveCart"




// API ACTIONS
export const initUser = ({commit}) => {
    let _user = localStorage.getItem("_marketuser");
    if (!!_user) {

        commit('INIT_USER', JSON.parse(_user));
    }
}
export const initCategories = async ({commit, dispatch}, categories) => {
    console.log("INIT CATEGORIES !!!");
    Vue.http.post(GET_CATEGORIES).then(response => {
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
    Vue.http.post(GET_ITEMS).then( async response => {
        if (!!response.body && !!response.body.d) {
            console.log("ITEMS HAVE RETURNED ... ");
            let items = await mapItems(JSON.parse(response.body.d));
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
        let _user = {
            first_name: res.first_name,
            last_name: res.last_name,
            country: res.country,
            member_id: res.member_id,
            email: res.email,
            flag: null,
            timestamp: new Date()
        }
        if (!!res.country) {
            console.log('commit with flag...');
            _user = await getUserWithFlag(_user);
            localStorage.setItem("_marketuser", JSON.stringify(_user));
            commit('INIT_USER', _user);
        }
        else {
            console.log('commit with no flag...');
            localStorage.setItem("_marketuser", JSON.stringify(_user));
            commit('INIT_USER', _user);
        }
    }
}
export const userSignout = ({commit, dispatch}) => {
    localStorage.removeItem("_marketuser");

    commit('INIT_USER', null);
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

export const searchFilterString = ({commit, dispatch, state}, filter_string) => {
    if (!!state.shelf.active) {
        dispatch('hideShelf');
    }
    if (!!state.overlay.active) {
        dispatch('hideOverlay');
    }
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
export const addToCart = async ({commit, dispatch, state}, item) => {
    await dispatch('showShelf')
    await dispatch('hideOverlay');
    console.log("ADD TO CART >> ", item, " :: ");
    let _item = _.find(state.items, {id:item.id});
    Vue.set(_item, 'inCart', true);
    _item.amount = (!!_item.amount) ? _item.amount : 1;
    commit('ADD_TO_CART', _item);
    
}
export const updateItemInCart = async ({commit, dispatch}, item) => {
    console.log("update item in cart>> ", item);
    commit('UPDATE_ITEM_IN_CART', item);
    setTimeout(function() {
        dispatch('showShelf')
    },100)
}
export const removeFromCart = ({commit, dispatch}, item) => {
    commit('REMOVE_FROM_CART', item);
    // dispatch('forceUpdateCartUI')
}
export const openItem = async({commit, dispatch}, item) => {
    commit('OPEN_ITEM', item);
    dispatch('showOverlay', 'item');
}

export const updateItemSize = ({commit}, size) => {
    commit('UPDATE_ITEM_SIZE', size);
}

export const saveCart = ({commit, dispatch, state}, subtotal) => {
    let items = _.map(state.cart.items, item => {
        return {
            Id: item.id,
            Quintity: item.amount
        }
    });
    let mId = state.user.member_id;
    let token = 12345;
    let cartData = { items, subtotal};
    let data = {cartData: items, mId, token}
    console.log("data > ", btoa(JSON.stringify(data)));
    Vue.http.post(SAVE_CART,btoa(JSON.stringify(data))).then(response => {
        console.log("SAVE_CART, RESPONSE >> ", response);
        dispatch('changeShelfType', 'confirm');
    }, response => {
        console.log('save cart error >> ', response);
    })
}




// HELPER FUNCTIONS
async function mapItems(items) {
        // console.log('MAP ITEMS');
        let countryCodes = _.filter(_.compact(_.uniq(_.map(items, 'Description'))), r => { return _.trim(r)!=''}).join(';');
        console.log('2 countryCodes > ', countryCodes);
        let item_country_flags = await retrieveFlagsForItems(countryCodes);

        console.log("rAW ITEMS  > ", items);
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
            if (!!item.TopSeller) {
                catId.push(111100);
            }
            if (!!/simple/i.test(item.Name)) {
                catId.push(111101);
            }
            
            return {
                id: item.Id,
                catId,
                image: "./dist/img/items/"+item.CatalogNo.replace(/\s/g, '_') + ".png",
                catNo: item.CatalogNo,
                name: item.Name,
                price:item.Price || 0,
                flag: !!item_country_flags ? item_country_flags[item.LangCC] || null : null,
                attachments,
                sort: item.Sort
                
            }
        })
        return _.sortBy(mappedItems, 'sort');
}


async function retrieveFlagsForItems(countryCodes) {
    let api = "https://restcountries.eu/rest/v2/alpha?codes=" + countryCodes;
    return new Promise((resolve, reject) => {
        Vue.http.get(api).then(response => {
            let flagCollection = {};
            if (!!response.body) {
                for (var i = 0; i < response.body.length; i++) {
                    let c = response.body[i];
                    console.log("C >> ",c);
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
async function getUserWithFlag(user) {
    return new Promise((resolve, reject) => {
        let api = "https://restcountries.eu/rest/v2/name/"+user.country;
        Vue.http.get(api).then(response => {
            if (!!response.data) {
                user.flag = response.data[0].flag
            }
            resolve(user);
        }), response => {
            resolve(user);
        }
    })
}