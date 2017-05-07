webpackHotUpdate(0,{

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _typeof2 = __webpack_require__(241);\n\nvar _typeof3 = _interopRequireDefault(_typeof2);\n\nvar _lodash = __webpack_require__(97);\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _vue = __webpack_require__(5);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nvar _vuex = __webpack_require__(17);\n\nvar _vuex2 = _interopRequireDefault(_vuex);\n\nvar _actions = __webpack_require__(233);\n\nvar actions = _interopRequireWildcard(_actions);\n\nvar _testItems = __webpack_require__(236);\n\nvar _api = __webpack_require__(520);\n\nvar api = _interopRequireWildcard(_api);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import { categories} from './test-categories';\n_vue2.default.use(_vuex2.default);\nvar categories = api.getCategories();\nvar items = (0, _testItems.itemGenerator)(1200);\n\nconsole.log(\"CATEGORIES >> \", categories);\n\nvar itemsFilterString = '';\nvar cart = {\n\titems: [],\n\tsubtotal: 0\n};\nvar state = {\n\tcategories: categories,\n\titems: items,\n\titemsFilterString: itemsFilterString,\n\titemInLimbo: null,\n\tcart: {\n\t\titems: [],\n\t\tsubtotal: 0\n\t},\n\toverlay: {\n\t\tactive: false,\n\t\ttype: 'sortmenu',\n\t\tdata: null\n\t},\n\tshelf: {\n\t\tactive: false,\n\t\tanimate: true,\n\t\ttype: 'cart'\n\t}\n};\n\nvar mutations = {\n\tTOGGLE_OVERLAY: function TOGGLE_OVERLAY(state, type) {\n\t\tstate.overlay.active = !state.overlay.active;\n\t\tstate.overlay.type = !!type ? type : null;\n\t},\n\tSHOW_OVERLAY: function SHOW_OVERLAY(state, type) {\n\t\tstate.overlay.active = true;\n\t\tstate.overlay.type = !!type ? type : null;\n\t},\n\tHIDE_OVERLAY: function HIDE_OVERLAY(state) {\n\t\tstate.overlay.active = false;\n\t},\n\tSEARCH_FILTER_STRING: function SEARCH_FILTER_STRING(state, filter_string) {\n\t\tstate.itemsFilterString = filter_string;\n\t},\n\n\t// DRAG N DROP\n\tUPDATE_ITEM_IN_LIMBO: function UPDATE_ITEM_IN_LIMBO(state, item) {\n\t\tstate.itemInLimbo = item;\n\t},\n\n\t// CART Mutations\n\tTOGGLE_SHELF: function TOGGLE_SHELF(state, type) {\n\t\tstate.shelf.active = !state.shelf.active;\n\t\tstate.shelf.type = !!type ? type : 'cart';\n\t},\n\tCHANGE_SHELF_TYPE: function CHANGE_SHELF_TYPE(state, type) {\n\t\tstate.shelf.type = type;\n\t},\n\tSHOW_SHELF: function SHOW_SHELF(state) {\n\t\tstate.shelf.active = true;\n\t\tstate.shelf.type = 'cart';\n\t},\n\tHIDE_SHELF: function HIDE_SHELF(state, animate) {\n\t\tstate.shelf.animate = _lodash2.default.isNull(animate) || _lodash2.default.isUndefined(animate) ? true : animate;\n\t\tstate.shelf.active = false;\n\t\tsetTimeout(function () {\n\t\t\tstate.shelf.animate = true;\n\t\t}, 600);\n\t},\n\tOPEN_ITEM: function OPEN_ITEM(state, item) {\n\t\t/*\r\n  \tReceives item information, casts it to overlay.data\r\n  \t@/components/Item.vue\r\n  */\n\t\tstate.overlay.data = item;\n\t},\n\tADD_TO_CART: function ADD_TO_CART(state, item) {\n\t\t/*\r\n  \tFind source of item, add it to cart.\r\n  */\n\t\tvar itemsrc = _lodash2.default.find(state.items, { id: item.id });\n\t\t_vue2.default.set(itemsrc, 'inCart', true);\n\t\tstate.cart.items.push(item);\n\t},\n\tUPDATE_ITEM_IN_CART: function UPDATE_ITEM_IN_CART(state, item) {\n\t\t/*\r\n  \tFind item in cart, update the amount.\r\n  */\n\t\tstate.cart.items = _lodash2.default.map(state.cart.items, function (obj) {\n\t\t\treturn obj.id === item.id ? _lodash2.default.merge(obj, { amount: item.amount }) : obj;\n\t\t});\n\t},\n\tREMOVE_FROM_CART: function REMOVE_FROM_CART(state, item) {\n\t\t/*\r\n  \tFind source of item, remove it from cart.\r\n  */\n\t\tvar itemsrc = _lodash2.default.find(state.items, { id: item.id });\n\t\t_vue2.default.set(itemsrc, 'inCart', false);\n\t\t_vue2.default.delete(itemsrc, 'amount');\n\t\t_lodash2.default.remove(state.cart.items, item);\n\t}\n};\n\nvar getters = {\n\tchildrenCategoryIds: function childrenCategoryIds(state) {\n\t\tvar categories = state.categories;\n\t\t/*\r\n  \tReturn Array of categories coupled\r\n  \twith all children categories id's for \r\n  \toptimizing query performance\r\n  */\n\t\treturn _lodash2.default.map(categories, function (obj) {\n\t\t\tvar childrenMapIds = [];\n\t\t\tvar grandchildren = null;\n\t\t\tif (!!obj.children) {\n\t\t\t\tchildrenMapIds = _lodash2.default.map(obj.children, 'id');\n\t\t\t\tgrandchildren = _lodash2.default.filter(obj.children, 'children');\n\t\t\t\tif (!!grandchildren.length) {\n\t\t\t\t\tvar grandIds = _lodash2.default.map(_lodash2.default.find(grandchildren, 'children').children, 'id');\n\t\t\t\t\tchildrenMapIds = _lodash2.default.union(childrenMapIds, grandIds);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn {\n\t\t\t\tid: obj.id,\n\t\t\t\tchildrenIds: childrenMapIds\n\t\t\t};\n\t\t});\n\t},\n\t// RETURN FILTERED ITEMS BY CATEGORY  &&  SEARCH IF EXISTS\n\tfilteredItems: function filteredItems(state, getters) {\n\t\tvar search_filter = state.route.params.searchFilter;\n\t\tif (!!search_filter) {\n\t\t\tvar counter = 0;\n\t\t\treturn _lodash2.default.filter(state.items, function (item) {\n\t\t\t\tvar item_string = item.name + item.catNo.toLowerCase();\n\t\t\t\tvar filter = search_filter.toLowerCase();\n\t\t\t\treturn item_string.indexOf(filter) > -1;\n\t\t\t});\n\t\t} else {\n\t\t\tvar _ret = function () {\n\t\t\t\tvar root_route = state.route.params.rootFilter,\n\t\t\t\t    child_route = state.route.params.childFilter,\n\t\t\t\t    gchild_route = state.route.params.grandchildFilter,\n\t\t\t\t    filter_ids = [];\n\t\t\t\t// will filter out the root category and it's children\n\t\t\t\tvar rootCategory = _lodash2.default.find(state.categories, { name: root_route });\n\t\t\t\tif (!!rootCategory) {\n\t\t\t\t\tif (!!child_route) {\n\t\t\t\t\t\t// will filter out SELECTED CHILDREN categories if exists\n\t\t\t\t\t\tvar childCategory = _lodash2.default.find(rootCategory.children, { name: child_route });\n\t\t\t\t\t\tif (!!gchild_route) {\n\t\t\t\t\t\t\t// will filter out SELECTED GRANDCHILDREN categories if exists\n\t\t\t\t\t\t\tvar gChildCategory = _lodash2.default.find(childCategory.children, { name: gchild_route });\n\t\t\t\t\t\t\tfilter_ids = [gChildCategory.id];\n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tfilter_ids = _lodash2.default.concat(_lodash2.default.map(childCategory.children, 'id'), childCategory.id);\n\t\t\t\t\t\t}\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar childrenOfRoot = _lodash2.default.find(getters.childrenCategoryIds, { id: rootCategory.id });\n\t\t\t\t\t\tfilter_ids = _lodash2.default.concat(childrenOfRoot.childrenIds, rootCategory.id);\n\t\t\t\t\t}\n\t\t\t\t\treturn {\n\t\t\t\t\t\tv: _lodash2.default.filter(state.items, function (item) {\n\t\t\t\t\t\t\t// check to see if any item ids match the filter ids\n\t\t\t\t\t\t\treturn !!_lodash2.default.intersection(filter_ids, item.catId).length;\n\t\t\t\t\t\t})\n\t\t\t\t\t};\n\t\t\t\t}\n\t\t\t}();\n\n\t\t\tif ((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === \"object\") return _ret.v;\n\t\t}\n\t\treturn [];\n\t},\n\tbreadCrumbs: function breadCrumbs(state) {\n\t\t// return Array to render for breadCrumbs\n\t\tvar params = {};\n\t\tvar bc = _lodash2.default.map(state.route.params, function (value, key, obj) {\n\t\t\tparams[key] = value;\n\t\t\treturn {\n\t\t\t\tname: 'results-' + _lodash2.default.split(key, \"Filter\")[0],\n\t\t\t\tparams: _lodash2.default.clone(params),\n\t\t\t\tlabel: value\n\t\t\t};\n\t\t});\n\t\treturn bc;\n\t},\n\tresultsTitle: function resultsTitle(state) {\n\t\tvar filtername = state.route.params.searchFilter || state.route.params.grandchildFilter || state.route.params.childFilter || state.route.params.rootFilter;\n\t\treturn \"Results for: \" + filtername;\n\t},\n\tcartItems: function cartItems(state) {\n\t\tvar _items = state.cart.items;\n\t\treturn state.cart.items;\n\t}\n};\n\nexports.default = new _vuex2.default.Store({\n\tmutations: mutations,\n\tgetters: getters,\n\tactions: actions,\n\tstate: state\n});\n\n//////////////////\n// WEBPACK FOOTER\n// ./store/index.js\n// module id = 212\n// module chunks = 0\n\n//# sourceURL=webpack:///./store/index.js?");

/***/ })

})