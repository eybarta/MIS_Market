webpackHotUpdate(0,{

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(11)();\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.results[data-v-c1bb2428] {\\n  padding-top: 49px;\\n  min-height: calc(100% - 42px);\\n  background: #061016 url(\" + __webpack_require__(466) + \") repeat-x 0 bottom;\\n  color: #fff;\\n  position: relative;\\n}\\n.results .content[data-v-c1bb2428] {\\n  margin-top: 125px;\\n  position: relative;\\n  -webkit-transition: margin-top 460ms cubic-bezier(0.215, 0.61, 0.355, 1);\\n  transition: margin-top 460ms cubic-bezier(0.215, 0.61, 0.355, 1);\\n}\\n.results .active + .content[data-v-c1bb2428] {\\n  margin-top: 625px;\\n}\\n.results .results-options[data-v-c1bb2428] {\\n  position: absolute;\\n  top: 0;\\n  right: 2%;\\n}\\n.results .total-label[data-v-c1bb2428] {\\n  font-size: 13px;\\n  color: rgba(255,255,255,0.4);\\n}\\n.results ul.breadcrumbs[data-v-c1bb2428] {\\n  float: left;\\n}\\n.results ul.breadcrumbs li[data-v-c1bb2428] {\\n  display: inline-block;\\n  color: #fff;\\n}\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ../~/css-loader!../~/vue-loader/lib/style-rewriter.js?id=data-v-c1bb2428&scoped=true!../~/stylus-loader!../~/vue-loader/lib/selector.js?type=styles&index=0!./ui/layout/pages/Results.vue\n// module id = 153\n// module chunks = 0\n\n//# sourceURL=webpack:///./ui/layout/pages/Results.vue?../~/css-loader!../~/vue-loader/lib/style-rewriter.js?id=data-v-c1bb2428&scoped=true!../~/stylus-loader!../~/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends2 = __webpack_require__(33);\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _vueCountupV = __webpack_require__(208);\n\nvar _vueCountupV2 = _interopRequireDefault(_vueCountupV);\n\nvar _vuex = __webpack_require__(16);\n\nvar _menuBar = __webpack_require__(484);\n\nvar _menuBar2 = _interopRequireDefault(_menuBar);\n\nvar _Shelf = __webpack_require__(482);\n\nvar _Shelf2 = _interopRequireDefault(_Shelf);\n\nvar _ResultItems = __webpack_require__(474);\n\nvar _ResultItems2 = _interopRequireDefault(_ResultItems);\n\nvar _BreadCrumbs = __webpack_require__(470);\n\nvar _BreadCrumbs2 = _interopRequireDefault(_BreadCrumbs);\n\nvar _utils = __webpack_require__(100);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n\tdata: function data() {\n\t\treturn {\n\t\t\tcountOptions: _utils.countOptions\n\t\t};\n\t},\n\n\twatch: {\n\t\t'$route': function $route(to, from) {\n\t\t\tthis.hideOverlay();\n\t\t}\n\t},\n\tcomponents: {\n\t\tMenuBar: _menuBar2.default,\n\t\tShelf: _Shelf2.default,\n\t\tBreadCrumbs: _BreadCrumbs2.default,\n\t\tCountUp: _vueCountupV2.default,\n\t\tResultItems: _ResultItems2.default\n\t},\n\tmethods: (0, _extends3.default)({}, (0, _vuex.mapActions)(['hideOverlay']), {\n\t\tafterCount: function afterCount() {\n\t\t\tconsole.log(\"counter callback called\");\n\t\t}\n\t}),\n\tcomputed: (0, _extends3.default)({}, (0, _vuex.mapState)(['itemsFilterString']), (0, _vuex.mapGetters)(['filteredItems']), {\n\t\ttotalResults: function totalResults() {\n\t\t\treturn this.items.length;\n\t\t},\n\t\titems: function items() {\n\t\t\tvar filter = this.itemsFilterString;\n\t\t\tconsole.log(\" >> \", filter);\n\t\t\tif (!!filter) {\n\t\t\t\treturn _.filter(this.filteredItems, function (item) {\n\t\t\t\t\tvar item_string = (item.name + item.catNo).toLowerCase();\n\t\t\t\t\treturn item_string.indexOf(filter) > -1;\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\treturn this.filteredItems;\n\t\t\t}\n\t\t}\n\t})\n}; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n//////////////////\n// WEBPACK FOOTER\n// ../~/babel-loader/lib!../~/vue-loader/lib/selector.js?type=script&index=0!./ui/layout/pages/Results.vue\n// module id = 229\n// module chunks = 0\n\n//# sourceURL=webpack:///./ui/layout/pages/Results.vue?../~/babel-loader/lib!../~/vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ 500:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: \"results\"\n  }, [_c('menu-bar'), _vm._v(\" \"), _c('shelf'), _vm._v(\" \"), _c('div', {\n    staticClass: \"content\"\n  }, [_c('bread-crumbs'), _vm._v(\" \"), _c('div', {\n    staticClass: \"results-options\"\n  }, [_vm._m(0), _vm._v(\" \"), _c('span', {\n    staticClass: \"total-label\"\n  }, [_vm._v(\"Total: \"), _c('count-up', {\n    attrs: {\n      \"start\": 0,\n      \"end\": _vm.totalResults,\n      \"decimals\": 0,\n      \"duration\": 3,\n      \"options\": _vm.countOptions,\n      \"callback\": _vm.afterCount\n    }\n  }), _vm._v(\" results\")], 1)]), _vm._v(\" \"), _c('result-items', {\n    attrs: {\n      \"items\": _vm.items\n    }\n  })], 1)], 1)\n},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('span', {\n    staticClass: \"item-size\"\n  }, [_vm._v(\"Item size:\\n\\t\\t\\t\\t\"), _c('button', [_c('span', {\n    staticClass: \"circles small\"\n  }, [_c('i'), _c('i'), _c('i'), _c('i'), _c('i'), _c('i')]), _vm._v(\" \"), _c('span', [_vm._v(\"Small\")])]), _vm._v(\" \"), _c('button', [_c('span', {\n    staticClass: \"circles big\"\n  }, [_c('i'), _c('i'), _c('i'), _c('i')]), _vm._v(\" \"), _c('span', [_vm._v(\"Big\")])])])\n}]}\nmodule.exports.render._withStripped = true\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n     __webpack_require__(1).rerender(\"data-v-c1bb2428\", module.exports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ../~/vue-loader/lib/template-compiler.js?id=data-v-c1bb2428!../~/vue-loader/lib/selector.js?type=template&index=0!./ui/layout/pages/Results.vue\n// module id = 500\n// module chunks = 0\n\n//# sourceURL=webpack:///./ui/layout/pages/Results.vue?../~/vue-loader/lib/template-compiler.js?id=data-v-c1bb2428!../~/vue-loader/lib/selector.js?type=template&index=0");

/***/ })

})