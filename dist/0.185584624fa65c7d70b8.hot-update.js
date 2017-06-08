webpackHotUpdate(0,{

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _extends2 = __webpack_require__(31);\n\nvar _extends3 = _interopRequireDefault(_extends2);\n\nvar _vuex = __webpack_require__(16);\n\nvar _TopBar = __webpack_require__(422);\n\nvar _TopBar2 = _interopRequireDefault(_TopBar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n\tcreated: function created() {\n\t\tconsole.log(\"Market App Created!\");\n\t\tthis.initCategories();\n\t},\n\n\tcomponents: {\n\t\tTopBar: _TopBar2.default\n\t},\n\tcomputed: (0, _extends3.default)({}, (0, _vuex.mapState)(['overlay'])),\n\tmethods: (0, _extends3.default)({}, (0, _vuex.mapActions)(['initCategories']))\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ../~/babel-loader/lib!../~/vue-loader/lib/selector.js?type=script&index=0!./ui/layout/App.vue\n// module id = 184\n// module chunks = 0\n\n//# sourceURL=webpack:///./ui/layout/App.vue?../~/babel-loader/lib!../~/vue-loader/lib/selector.js?type=script&index=0");

/***/ })

})