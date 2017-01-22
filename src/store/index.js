import _ from 'lodash';
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';

import { categories} from './test-categories';
import { itemGenerator } from './test-items';


Vue.use(Vuex);

let items = itemGenerator(1200);

const itemsFilterString = '';
const cart = {
	items:[],
	subtotal:0
};
const state = {
	categories,
	items,
	itemsFilterString,
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
	},
	SEARCH_FILTER_STRING (state, filter_string) {
		state.itemsFilterString = filter_string;
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
	ADD_TO_CART(state, item) {
		/*
			Find source of item, add it to cart.
		*/
		let itemsrc = _.find(state.items, {id:item.id});
		Vue.set(itemsrc, 'inCart', true);
		state.cart.items.push(item);
	},
	UPDATE_ITEM_IN_CART(state, item) {
		/*
			Find item in cart, update the amount.
		*/
		let cart_item = _.find(state.cart.items, {id:item.id});
		Vue.set(cart_item, 'amount', item.amount);
	},
	REMOVE_FROM_CART(state, item) {
		/*
			Find source of item, remove it from cart.
		*/
		let itemsrc = _.find(state.items, {id:item.id});
		Vue.set(itemsrc, 'inCart', false);
		Vue.delete(itemsrc, 'amount');
		_.remove(state.cart.items, item);
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
		return _.map(categories, function(obj) {
			let childrenMapIds = [];
			let grandchildren = null;
			if (!!obj.children) {
				childrenMapIds = _.map(obj.children, 'id');
				grandchildren = _.filter(obj.children, 'children');
				if (!!grandchildren.length) {
					let grandIds = _.map(_.find(grandchildren, 'children').children, 'id');
					childrenMapIds = _.union(childrenMapIds, grandIds);
				}
			}
			return {
				id: obj.id,
				childrenIds: childrenMapIds
			}
		})
	},
	// RETURN FILTERED ITEMS BY CATEGORY  &&  SEARCH IF EXISTS
	filteredItems: (state, getters) => {	
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
						filter_ids = [gChildCategory.id];
				}
				else {
					filter_ids = _.concat(_.map(childCategory.children, 'id'), childCategory.id);
				}
			}
			else {
				let childrenOfRoot = _.find(getters.childrenCategoryIds, {id:rootCategory.id});
				filter_ids = _.concat(childrenOfRoot.childrenIds, rootCategory.id);
			}
			return _.filter(state.items, function(item) {
				// Filter through search string if exists
				if (!!state.itemsFilterString) {
					let item_string = item.name+item.catNo.toLowerCase();
					let filter = state.itemsFilterString.toLowerCase();
					return !!_.intersection(filter_ids, item.catId).length && item_string.indexOf(filter)>-1;
				}
				// check to see if any item ids match the filter ids
				return !!_.intersection(filter_ids, item.catId).length;
			})
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
		let filtername = state.route.params.searchFilter
		|| state.route.params.grandchildFilter
		|| state.route.params.childFilter
		|| state.route.params.rootFilter;
			return "Results for: " + filtername;
	},
	cartItems: state => {
		return state.cart.items;
	}
}

export default new Vuex.Store({
	mutations,
	getters,
	actions,
	state
})