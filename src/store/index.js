import _ from 'lodash';
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';

import { categories} from './test-categories';
import { itemGenerator } from './test-items';


Vue.use(Vuex);

let items = itemGenerator(500);

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
		type: null
	}
}

const mutations = {
	TOGGLE_OVERLAY (state, type) {
		state.overlay.active = !state.overlay.active;
		state.overlay.type = (!!type) ? type : null;
	},
	HIDE_OVERLAY (state) {
		state.overlay.active = false;
	},
	SEARCH_FILTER_STRING (state, filter_string) {
		state.itemsFilterString = filter_string;
	},

	// CART Mutations
	ADD_TO_CART(state, item, amount = 1) {
		item.amount = amount;
		let itemsrc = _.find(state.items, {id:item.id});
		Vue.set(itemsrc, 'inCart', true);
		Vue.set(itemsrc, 'amount', amount);
		state.cart.items.push(item);
	},

	REMOVE_FROM_CART(state, item) {
		let itemsrc = _.find(state.items, {id:item.id});
		Vue.set(itemsrc, 'inCart', false);
		Vue.set(itemsrc, 'amount', 0);

		let items = _.reject(state.cart.items, item);
		Vue.set(state.cart, 'items', items)
		// Vue.delete(state.cart.items, item);
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
	},
	cartSubtotal: state => {
		return _.sum(_.map(state.cart.items, item => { return _.multiply(item.price, item.amount)}))
	}

}

export default new Vuex.Store({
	mutations,
	getters,
	actions,
	state
})