import _ from 'lodash';
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';

import { categories} from './test-categories';
import { items } from './test-items';


Vue.use(Vuex);



const state = {
	categories,

	items
}

const mutations = {

}

const getters = {
	itemsByCategory: state => {
		let category = _.filter(state.categories, {name: state.route.params.filteredBy})
		if (!!category.length) {
			let items = _.filter(state.items, function(item) {
				return item.catId.indexOf(category[0].id) > -1;
			})
			return items;
		}
		return [];
	},
	resultsTitle: state => {
		let category = _.filter(state.categories, {name: state.route.params.filteredBy})
		if (!!category.length) {
			return category[0].name;
		}
		else {
			return "Results for: " + state.route.params.filteredBy;
		}
	}
}

export default new Vuex.Store({
	mutations,
	getters,
	actions,
	state
})