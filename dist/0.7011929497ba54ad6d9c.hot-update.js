webpackHotUpdate(0,{

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getCategories = undefined;\n\nvar _regenerator = __webpack_require__(164);\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(163);\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar getCategories = exports.getCategories = function () {\n    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {\n        return _regenerator2.default.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        // return Vue.http.post(GET_CATEGORIES).then(response => {\n                        //     console.log('categories > ', response);\n                        //     return response\n                        // }, response => {\n                        //     console.log('err > ', response);\n                        //     return { 'err': response}\n                        // }, {headers: {'X-CSRF-Token': null}})\n                        _jquery2.default.ajax({\n                            method: \"POST\",\n                            url: GET_CATEGORIES,\n                            success: function success(res) {\n                                console.log(res);\n                            },\n                            error: function error(res) {\n                                console.log('err > ', res);\n                            }\n                        });\n\n                    case 1:\n                    case 'end':\n                        return _context.stop();\n                }\n            }\n        }, _callee, this);\n    }));\n\n    return function getCategories() {\n        return _ref.apply(this, arguments);\n    };\n}();\n\nvar _jquery = __webpack_require__(58);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _vue = __webpack_require__(5);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import VueResource from 'vue-resource';\n\n// Vue.use(VueResource);\n\nvar GET_CATEGORIES = \"http://www.mis-events.com/MarketWS/wsMain.asmx/GetCategories\";\nvar GET_ITEMS = \"http://www.mis-events.com/MarketWS/wsMain.asmx?op=GetItems\";\n\n//////////////////\n// WEBPACK FOOTER\n// ./store/api.js\n// module id = 236\n// module chunks = 0\n\n//# sourceURL=webpack:///./store/api.js?");

/***/ }),

/***/ 520:
false,

/***/ 521:
false

})