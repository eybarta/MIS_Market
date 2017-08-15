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
	preventPageChange: false,
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
	},
	mousepos: null
}

const mutations = {
	// API
	INIT_CATEGORIES (state, categories) {
		
		state.categories = categories;
	},
	INIT_ITEMS (state, items) {
		// console.log("INIT_ITEMS >> ", items);
		state.items = items;
	},
	INIT_USER (state, user) {
		// console.log("INIT USER MUTATION >> ", user, state, " :: ", state.router);
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
	PREVENT_PAGE_CHANGE (state, bool) {
		// temp fix for vue-paginate issue,
		// [GITHUB] https://github.com/TahaSh/vue-paginate/issues/58
		state.preventPageChange = bool;
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
	},
	UPDATE_MOUSE_POS(state, pos) {
		state.mousepos = pos;
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
			console.log('search_filter> ', search_filter);
			let counter = 0;
			return _.filter(state.items, function(item) {
				let item_string = (item.name+item.catNo).toLowerCase();
				let filter = search_filter.toLowerCase();
				console.log('filter > ', item_string, " :: ", filter, " match? ", item_string.indexOf(filter)>-1);
				
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
	},
	isDevice: state => {
		return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
		|| /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)));
	},
	isIE: state => {
		return (/(msie|trident|edge)/gi).test(window.navigator.userAgent);
	}
}

export default new Vuex.Store({
	mutations,
	getters,
	actions,
	state
})