webpackHotUpdate(0,{

/***/ 488:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nexports.getCategories = undefined;\n\nvar _regenerator = __webpack_require__(476);\n\nvar _regenerator2 = _interopRequireDefault(_regenerator);\n\nvar _asyncToGenerator2 = __webpack_require__(475);\n\nvar _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);\n\nvar getCategories = exports.getCategories = function () {\n    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {\n        return _regenerator2.default.wrap(function _callee$(_context) {\n            while (1) {\n                switch (_context.prev = _context.next) {\n                    case 0:\n                        console.log('blody fuk    ');\n                        _vue2.default.http.post(GET_CATEGORIES).then(function (response) {\n                            console.log('categories > ', response);\n                            return response;\n                        }, function (response) {\n                            console.log('err > ', response);\n                            return { 'err': response };\n                        }, { headers: { 'Access-Control-Allow-Origin': '*' } });\n                        // $.ajax({\n                        //     method: \"POST\",\n                        //     url: GET_CATEGORIES,\n                        //     success(res) {\n                        //         console.log(res);\n                        //     },\n                        //     error(res) {\n                        //         console.log('err > ', res);\n                        //     }\n                        // })\n\n                    case 2:\n                    case 'end':\n                        return _context.stop();\n                }\n            }\n        }, _callee, this);\n    }));\n\n    return function getCategories() {\n        return _ref.apply(this, arguments);\n    };\n}();\n\nvar _jquery = __webpack_require__(49);\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nvar _vue = __webpack_require__(5);\n\nvar _vue2 = _interopRequireDefault(_vue);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar GET_CATEGORIES = \"./wsMain.asmx/GetCategories\";\nvar GET_ITEMS = \"./wsMain.asmx?op=GetItems\";\n_vue2.default.http.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8080';\n\n//////////////////\n// WEBPACK FOOTER\n// ./store/api.js\n// module id = 488\n// module chunks = 0\n\n//# sourceURL=webpack:///./store/api.js?");

/***/ }),

/***/ 526:
false,

/***/ 527:
false

})