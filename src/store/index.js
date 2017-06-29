import _ from 'lodash';
import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import * as actions from './actions';

Vue.use(Vuex);
Vue.use(VueResource);

const itemsFilterString = '';
const cart = {
	items:[],
	subtotal:0
};
const state = {
	user: null,
	categories: null,
	itemsize: 'big',
	items: 'loading',
	itemsFilterString,
	itemInLimbo: null,
	loaded: false,
	cart:{
		items:[],
		subtotal:0
	},
	overlay:{
		active:false,
		type:'sortmenu',
		data: null
	},
	shelf: {
		active: false,
		animate: true,
		type: 'cart'
	}
}

const mutations = {
	// API
	INIT_CATEGORIES (state, categories) {
		console.log("INIT_CATEGORIES >> ", categories);
		state.categories = categories;
	},
	INIT_ITEMS (state, items) {
		console.log("INIT_ITEMS >> ", items);
		state.items = items;
	},
	INIT_USER (state, user) {
		console.log("INIT USER MUTATION >> ", user, state, " :: ", state.router);
		state.user = user;
		state.loaded = true;
	},
	// UI
	TOGGLE_OVERLAY (state, type) {
		state.overlay.active = !state.overlay.active;
		state.overlay.type = (!!type) ? type : null;
	},
	SHOW_OVERLAY (state, type) {
		state.overlay.active = true;
		state.overlay.type = (!!type) ? type : null;
	}, 
	HIDE_OVERLAY (state) {
		state.overlay.active = false;
		state.overlay.data = null;
		state.overlay.item = null;
	},
	SEARCH_FILTER_STRING (state, filter_string) {
		state.itemsFilterString = filter_string;
	},
	// DRAG N DROP
	UPDATE_ITEM_IN_LIMBO (state, item) {
		state.itemInLimbo = item;
	},
	// CART Mutations
	TOGGLE_SHELF (state, type) {
		state.shelf.active = !state.shelf.active;
		state.shelf.type = (!!type) ? type : 'cart';
	},
	CHANGE_SHELF_TYPE (state,type) {
		state.shelf.type = type;
	},
	SHOW_SHELF (state) {
		state.shelf.active = true;
		state.shelf.type = 'cart';
	},
	HIDE_SHELF (state, animate) {
		state.shelf.animate = _.isNull(animate) || _.isUndefined(animate) ? true : animate;
		state.shelf.active = false;
		setTimeout(()=> {state.shelf.animate = true;}, 600)
	},
	OPEN_ITEM(state, item) {
		/*
			Receives item information, casts it to overlay.data
			@/components/Item.vue
		*/
		state.overlay.data = item;
	},
	UPDATE_ITEM_SIZE(state, size) {
		state.itemsize = size;
	},
	ADD_TO_CART(state, item) {
		/*
			Find source of item, add it to cart.
		*/
		
		state.cart.items.push(item);
	},
	UPDATE_ITEM_IN_CART(state, item) {
		/*
			Find item in cart, update the amount.
		*/
		state.cart.items = _.map(state.cart.items, obj => {
			return (obj.id===item.id) ? _.merge(obj, { amount:item.amount}) : obj
		});
	},
	REMOVE_FROM_CART(state, item) {
		/*
			Find source of item, remove it from cart.
		*/
		let itemsrc = _.find(state.items, {id:item.id});
		Vue.set(itemsrc, 'inCart', false);
		Vue.delete(itemsrc, 'amount');
		let _cart = state.cart;
		_.remove(_cart.items, item);
		state.cart = _cart;
	}
}

const getters = {
	childrenCategoryIds: state => {
		let categories = state.categories;
		/*
			Return Array of categories coupled
			with all children categories id's for 
			optimizing query performance
		*/
		let mappedChildren =  _.map(categories, function(obj) {
			let childrenMapIds = [];
			let grandchildren = null;
			if (!!obj.children) {
				childrenMapIds = _.map(obj.children, 'Id');
				grandchildren = _.filter(obj.children, 'children');
				if (!!grandchildren.length) {
					let grandIds = _.map(_.find(grandchildren, 'children').children, 'Id');
					childrenMapIds = _.union(childrenMapIds, grandIds);
				}
			}
			return {
				id: obj.Id,
				childrenIds: childrenMapIds
			}
		})
		return mappedChildren;
	},
	// RETURN FILTERED ITEMS BY CATEGORY  &&  SEARCH IF EXISTS
	filteredItems: (state, getters) => {
		let search_filter = state.route.params.searchFilter;// || state.route.params.rootFilter;
		let items = state.items;
		if (items==='loading') {
			return 'loading';
		}
		if (!!search_filter) {
			let counter = 0;
			return _.filter(state.items, function(item) {
				let item_string = (item.name+item.catNo).toLowerCase();
				let filter = search_filter.toLowerCase();
				return item_string.indexOf(filter)>-1;
			})
		}
		else {

			if (state.route.name==='all') {
				return state.items;
			} else {
				let root_route = state.route.params.rootFilter,
					child_route = state.route.params.childFilter,
					gchild_route = state.route.params.grandchildFilter,
					filter_ids = [];
				
				
				// will filter out the root category and it's children
				let rootCategory = _.find(state.categories, {name: root_route});
				
				if (!!rootCategory) {
					if (!!child_route) {
						// will filter out SELECTED CHILDREN categories if exists
						let childCategory = _.find(rootCategory.children, {name: child_route});
						if (!!gchild_route) {
						// will filter out SELECTED GRANDCHILDREN categories if exists
							let gChildCategory = _.find(childCategory.children, {name: gchild_route});
								filter_ids = [gChildCategory.Id];
						}
						else {
							filter_ids = _.concat(_.map(childCategory.children, 'Id'), childCategory.Id);
						}
					}
					else {
						let childrenOfRoot = _.find(getters.childrenCategoryIds, {id:rootCategory.Id});
						filter_ids = _.concat(childrenOfRoot.childrenIds, rootCategory.Id);
					}
					return _.filter(state.items, function(item) {
						// check to see if any item ids match the filter ids
						return !!_.intersection(filter_ids, item.catId).length;
					})
				}
			}
		}
		return [];
	},
	breadCrumbs: state => {
		// return Array to render for breadCrumbs
		let params = {};
		let bc = _.map(state.route.params, function(value,key, obj){
			params[key] = value;
			return {
				name: 'results-'+_.split(key, "Filter")[0],
				params: _.clone(params),
				label: value
			}
		})
		return bc;
	},
	resultsTitle: state => {
		if (state.route.name==='all') {
			return "All Market Items";
		}
		
		let filtername = state.route.params.searchFilter
		|| state.route.params.grandchildFilter
		|| state.route.params.childFilter
		|| state.route.params.rootFilter;
			return "Results for: " + filtername;
	},
	cartItems: state => {
		let _items = state.cart.items;
		return state.cart.items;
	}
}

export default new Vuex.Store({
	mutations,
	getters,
	actions,
	state
})