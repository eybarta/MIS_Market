webpackHotUpdate(0,{

/***/ 490:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nvar items = exports.items = [{\n\tid: 1389,\n\tcatId: [1],\n\timage: \"dist/img/items/item1.png\",\n\tcatNo: \"AAA\",\n\tname: \"Asian Girl Poster (Canvas/Foam)\"\n}, {\n\tid: 1384,\n\tcatId: [2, 1],\n\timage: \"dist/img/items/item2.png\",\n\tcatNo: \"BBB\",\n\tname: \"Asian Girl Poster (Canvas/Foam)\"\n}, {\n\tid: 1382,\n\tcatId: [26],\n\timage: \"dist/img/items/item3.png\",\n\tcatNo: \"CCC\",\n\tname: \"Asian Girl Poster (Canvas/Foam)\"\n}, {\n\tid: 1389,\n\tcatId: [4],\n\timage: \"dist/img/items/item4.png\",\n\tcatNo: \"DDD\",\n\tname: \"Asian Girl Poster (Canvas/Foam)\"\n}, {\n\tid: 13845,\n\tcatId: [5],\n\timage: \"dist/img/items/item5.png\",\n\tcatNo: \"EEE\",\n\tname: \"Asian Girl Poster (Canvas/Foam)\"\n}, {\n\tid: 1385678,\n\tcatId: [6],\n\timage: \"dist/img/items/item6.png\",\n\tcatNo: \"FFF\",\n\tname: \"Asian Girl Poster (Canvas/Foam)\"\n}, {\n\tid: 13878,\n\tcatId: [1],\n\timage: \"dist/img/items/item1.png\",\n\tcatNo: \"AAA1212\",\n\tname: \"Asian Girl Poster (Canvas/Foam)\"\n}, {\n\tid: 13878904,\n\tcatId: [2],\n\timage: \"dist/img/items/item2.png\",\n\tcatNo: \"BBB1212\",\n\tname: \"Asian Girl Poster (Canvas/Foam)\"\n}, {\n\tid: 135579,\n\tcatId: [26],\n\timage: \"dist/img/items/item3.png\",\n\tcatNo: \"CCC1212\",\n\tname: \"Asian Girl Poster (Canvas/Foam)\"\n}, {\n\tid: 1382349,\n\tcatId: [4, 2],\n\timage: \"dist/img/items/item4.png\",\n\tcatNo: \"DDD1212\",\n\tname: \"Asian Girl Poster (Canvas/Foam)\"\n}, {\n\tid: 1345689,\n\tcatId: [5, 2],\n\timage: \"dist/img/items/item5.png\",\n\tcatNo: \"EEE1212\",\n\tname: \"Asian Girl Poster (Canvas/Foam)\"\n}, {\n\tid: 1387682,\n\tcatId: [6, 2],\n\timage: \"dist/img/items/item4.png\",\n\tcatNo: \"FFF1212\",\n\tname: \"Asian Girl Poster (Canvas/Foam)\"\n}, {\n\tid: 1388909,\n\tcatId: [11],\n\timage: \"dist/img/items/item5.png\",\n\tcatNo: \"EEE1212\",\n\tname: \"Asian Girl Poster (Canvas/Foam)\"\n}, {\n\tid: 138772,\n\tcatId: [37],\n\timage: \"dist/img/items/item4.png\",\n\tcatNo: \"FFF1212\",\n\tname: \"Asian Girl Poster (Canvas/Foam)\"\n}, {\n\tid: 138889,\n\tcatId: [84],\n\timage: \"dist/img/items/item5.png\",\n\tcatNo: \"EEE1212\",\n\tname: \"Asian Girl Poster (Canvas/Foam)\"\n}, {\n\tid: 138982,\n\tcatId: [4],\n\timage: \"dist/img/items/item4.png\",\n\tcatNo: \"FFF1212\",\n\tname: \"Asian Girl Poster (Canvas/Foam)\"\n}];\n\nvar catIds = [1, 2, 3, 4, 5, 6, 11, 37, 38, 84, 33, 65, 81, 79, 9];\nvar itemGenerator = exports.itemGenerator = function itemGenerator(amount) {\n\tvar items = [];\n\tfor (var i = 0; i < amount; i++) {\n\t\tvar upTo3 = Math.ceil(Math.random() * 3),\n\t\t    upTo5 = Math.ceil(Math.random() * 5),\n\t\t    price = (Math.random() * 2000).toFixed(2),\n\t\t    cats = [];\n\n\t\tfor (var j = 0; j < upTo3; j++) {\n\t\t\tcats.push(_.sample(catIds));\n\t\t}\n\t\titems.push({\n\t\t\tid: ++i,\n\t\t\tcatId: _.uniq(cats),\n\t\t\timage: \"./dist/img/items/item\" + upTo5 + \".png\",\n\t\t\tcatNo: \"FFF1212\" + i,\n\t\t\tname: \"Asian Girl Poster (Canvas/Foam)\" + i,\n\t\t\tattachments: [{\n\t\t\t\ttype: \"pdf\",\n\t\t\t\tlabel: \"PDF File\",\n\t\t\t\tlink: \"http://mis-implants.com/upload/PDF/Catalog_SEVEN_Italy.pdf\"\n\t\t\t}],\n\t\t\tprice: price\n\t\t});\n\t}\n\treturn items;\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ./store/test-items.js\n// module id = 490\n// module chunks = 0\n\n//# sourceURL=webpack:///./store/test-items.js?");

/***/ })

})