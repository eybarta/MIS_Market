webpackHotUpdate(0,{

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(11)();\n// imports\n\n\n// module\nexports.push([module.i, \"\\n.cart-wrap > *:not(.not-me),\\n.cart-wrap .cart > *:not(.not-me),\\n.cart-wrap .cart .cart-info > *:not(.not-me) {\\n  display: inline-block;\\n  vertical-align: middle;\\n}\\n.cart-wrap:before,\\n.cart-wrap .cart:before,\\n.cart-wrap .cart .cart-info:before {\\n  display: inline-block;\\n  vertical-align: middle;\\n  content: '';\\n  height: 100%;\\n}\\n.cart-wrap .cart .cart-info .subtotal,\\n.cart-wrap .cart .checkout-info ul li .circle-item {\\n  position: relative;\\n}\\n.cart-wrap .cart .cart-info .subtotal > *:first-child,\\n.cart-wrap .cart .checkout-info ul li .circle-item > *:first-child {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  -webkit-transform: translate(-50%, -50%);\\n          transform: translate(-50%, -50%);\\n}\\n.cart-wrap .cart .checkout-info ul {\\n  padding: 0;\\n  margin: 0;\\n}\\n.cart-wrap .cart .checkout-info ul li .label {\\n  -webkit-font-smoothing: antialiased;\\n  text-shadow: 1px 1px 1px rgba(0,0,0,0.18);\\n  -moz-osx-font-smoothing: grayscale;\\n}\\n.slide-fade-enter-active {\\n  -webkit-transition: all 0.5s cubic-bezier(0.125, 0.585, 0.22, 1.1);\\n  transition: all 0.5s cubic-bezier(0.125, 0.585, 0.22, 1.1);\\n}\\n.slide-fade-leave-active {\\n  -webkit-transition: all 0.5s cubic-bezier(0.125, 0.585, 0.22, 1.1);\\n  transition: all 0.5s cubic-bezier(0.125, 0.585, 0.22, 1.1);\\n}\\n.slide-fade-enter {\\n  -webkit-transform: translateX(-120%);\\n          transform: translateX(-120%);\\n  opacity: 0;\\n}\\n.slide-fade-leave-to {\\n  -webkit-transform: translateX(120%);\\n          transform: translateX(120%);\\n  opacity: 0;\\n}\\n.slide-fade-enter-to,\\n.slide-fade-leave {\\n  -webkit-transform: translateX(0);\\n          transform: translateX(0);\\n  opacity: 1;\\n}\\n.slide-fade-down-enter-active {\\n  -webkit-transition: all 0.5s cubic-bezier(0.125, 0.585, 0.22, 1.1);\\n  transition: all 0.5s cubic-bezier(0.125, 0.585, 0.22, 1.1);\\n}\\n.slide-fade-down-leave-active {\\n  -webkit-transition: all 0.5s cubic-bezier(0.125, 0.585, 0.22, 1.1);\\n  transition: all 0.5s cubic-bezier(0.125, 0.585, 0.22, 1.1);\\n}\\n.slide-fade-down-enter {\\n  -webkit-transform: translateY(-80%);\\n          transform: translateY(-80%);\\n  opacity: 0;\\n}\\n.slide-fade-down-leave-to {\\n  -webkit-transform: translateY(80%);\\n          transform: translateY(80%);\\n  opacity: 0;\\n}\\n.slide-fade-down-enter-to,\\n.slide-fade-down-leave {\\n  -webkit-transform: translateY(0);\\n          transform: translateY(0);\\n  opacity: 1;\\n}\\n.wider,\\n.cart-wrap .cart .checkout-info,\\n.cart-wrap .cart .cart-item-slider {\\n  width: calc(97% - 500px);\\n}\\n@media (max-width: 1024px) {\\n.wider,\\n  .cart-wrap .cart .checkout-info,\\n  .cart-wrap .cart .cart-item-slider {\\n    width: calc(97% - 400px);\\n}\\n}\\n.vue-typer {\\n  min-width: 340px;\\n  text-align: left;\\n  opacity: 0.7;\\n}\\n.vue-typer .typed {\\n  color: #fff !important;\\n}\\n.cart-wrap {\\n  height: 100%;\\n  min-width: 768px;\\n}\\n.cart-wrap .back-link {\\n  position: absolute;\\n  top: 40px;\\n  left: 2%;\\n  color: #989898;\\n  padding-left: 16px;\\n  font-size: 14px;\\n}\\n.cart-wrap .back-link .left-arrow {\\n  width: 12px;\\n  height: 12px;\\n  position: absolute;\\n  border: 2px solid #989898;\\n  top: 50%;\\n  left: 0;\\n  -webkit-transform: translateY(-50%) rotate(135deg);\\n          transform: translateY(-50%) rotate(135deg);\\n  -webkit-transform-origin: 50%;\\n          transform-origin: 50%;\\n  border-top: 0;\\n  border-left: 0;\\n  -webkit-transition: -webkit-transform 400ms ease;\\n  transition: -webkit-transform 400ms ease;\\n  transition: transform 400ms ease;\\n  transition: transform 400ms ease, -webkit-transform 400ms ease;\\n}\\n.cart-wrap h3 {\\n  width: 70%;\\n  font-size: 32px;\\n  font-weight: 400;\\n  color: rgba(255,255,255,0.7);\\n  text-align: center;\\n  position: absolute;\\n  top: 15%;\\n  left: 5%;\\n}\\n.cart-wrap h3 > i {\\n  position: relative;\\n  font-size: 70px;\\n  color: #d0d0d0;\\n  vertical-align: sub;\\n}\\n.cart-wrap h3 > i .icon-wrap {\\n  position: absolute;\\n  left: 50%;\\n  top: 0;\\n  -webkit-transform: translateX(-50%);\\n          transform: translateX(-50%);\\n  display: block;\\n  overflow: hidden;\\n  vertical-align: top;\\n  height: 25px;\\n}\\n.cart-wrap h3 > i .icon-wrap .icon-cart-items {\\n  font-size: 11px;\\n  color: #01cefd;\\n  position: relative;\\n  left: 0;\\n  top: 30px;\\n  display: inline-block;\\n  vertical-align: top;\\n  -webkit-transition: top 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\\n  transition: top 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275);\\n}\\n.cart-wrap:hover .icon-cart-items {\\n  -webkit-animation: living 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 2s infinite alternate;\\n          animation: living 2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 2s infinite alternate;\\n}\\n.checkout .icon-cart-items {\\n  top: 12px !important;\\n}\\n.cart-wrap .cart {\\n  width: 100%;\\n  margin-top: 10%;\\n}\\n.cart-wrap .cart .cart-info {\\n  width: 500px;\\n  height: 150px;\\n}\\n@media (max-width: 1024px) {\\n.cart-wrap .cart .cart-info {\\n    width: 400px;\\n}\\n}\\n.cart-wrap .cart .cart-info .subtotal {\\n  height: 100%;\\n  width: 30%;\\n  padding-right: 30px;\\n  margin-right: 30px;\\n  border-right: 2px solid rgba(111,111,111,0.9);\\n}\\n.cart-wrap .cart .cart-info .subtotal h5 {\\n  margin: 0 0 5px 0;\\n  font-size: 16px;\\n  font-weight: 300;\\n  -webkit-backface-visibility: hidden;\\n          backface-visibility: hidden;\\n  color: rgba(255,255,255,0.5);\\n  -webkit-font-smoothing: antialiased;\\n}\\n.cart-wrap .cart .cart-info .subtotal .amount {\\n  font-size: 24px;\\n  white-space: nowrap;\\n}\\n.cart-wrap .cart .cart-info .cart-actions {\\n  width: 60%;\\n}\\n.cart-wrap .cart .cart-info .cart-actions .btn {\\n  margin-bottom: 10px;\\n}\\n.cart-wrap .cart .cart-info .cart-actions .continue {\\n  font-size: 14px;\\n  text-decoration: underline;\\n  color: rgba(255,255,255,0.4);\\n  display: block;\\n}\\n.cart-wrap .cart .checkout-info {\\n  padding: 0 1%;\\n}\\n@media (min-width: 1024px) {\\n.cart-wrap .cart .checkout-info {\\n    padding: 0 4%;\\n}\\n}\\n.cart-wrap .cart .checkout-info ul li {\\n  width: calc(99.9% * 1/4 - (30px - 30px * 1/4));\\n  position: relative;\\n  list-style: none;\\n  text-align: center;\\n}\\n.cart-wrap .cart .checkout-info ul li:nth-child(1n) {\\n  float: left;\\n  margin-right: 30px;\\n  clear: none;\\n}\\n.cart-wrap .cart .checkout-info ul li:last-child {\\n  margin-right: 0;\\n}\\n.cart-wrap .cart .checkout-info ul li:nth-child(4n) {\\n  margin-right: 0;\\n  float: right;\\n}\\n.cart-wrap .cart .checkout-info ul li:nth-child(4n + 1) {\\n  clear: both;\\n}\\n.cart-wrap .cart .checkout-info ul li .circle-item {\\n  background: #fff;\\n  color: #01cefd;\\n  font-size: calc(65px + 75 * ((100vw - 768px) / 1112));\\n  text-align: center;\\n  margin-bottom: 20px;\\n  width: 75%;\\n  padding-top: 75%;\\n  min-width: 80px;\\n  min-height: 80px;\\n}\\n@media screen and (min-width: 1880px) {\\n  .cart-wrap .cart .checkout-info ul li .circle-item {\\n    font-size: 140px;\\n  }\\n}\\n@media screen and (max-width: 768px) {\\n  .cart-wrap .cart .checkout-info ul li .circle-item {\\n    font-size: 65px;\\n  }\\n}\\n@media (max-width: 1024px) {\\n.cart-wrap .cart .checkout-info ul li .circle-item {\\n    margin-bottom: 10px;\\n}\\n}\\n@media (max-width: 1024px) {\\n.cart-wrap .cart .checkout-info ul li {\\n    width: calc(99.9% * 1/4 - (5px - 5px * 1/4));\\n}\\n.cart-wrap .cart .checkout-info ul li:nth-child(1n) {\\n    float: left;\\n    margin-right: 5px;\\n    clear: none;\\n  }\\n.cart-wrap .cart .checkout-info ul li:last-child {\\n    margin-right: 0;\\n  }\\n.cart-wrap .cart .checkout-info ul li:nth-child(4n) {\\n    margin-right: 0;\\n    float: right;\\n  }\\n.cart-wrap .cart .checkout-info ul li:nth-child(4n + 1) {\\n    clear: both;\\n  }\\n}\\n.cart-wrap .cart .checkout-info ul li:nth-child(4) .circle-item {\\n  background: #464646;\\n}\\n.cart-wrap .cart .checkout-info ul li:nth-child(3) .circle-item {\\n  background: #797979;\\n}\\n.cart-wrap .cart .checkout-info ul li:nth-child(2) .circle-item {\\n  background: #dfdfdf;\\n}\\n.cart-wrap .cart .checkout-info ul li .label {\\n  font-size: calc(13px + 7 * ((100vw - 768px) / 1112));\\n  color: rgba(255,255,255,0.4);\\n  display: block;\\n  text-align: center;\\n}\\n@media screen and (min-width: 1880px) {\\n  .cart-wrap .cart .checkout-info ul li .label {\\n    font-size: 20px;\\n  }\\n}\\n@media screen and (max-width: 768px) {\\n  .cart-wrap .cart .checkout-info ul li .label {\\n    font-size: 13px;\\n  }\\n}\\n.cart-wrap .cart .cart-item-slider {\\n  position: relative;\\n  overflow: hidden;\\n}\\n.cart-wrap .cart .cart-item-slider.many-items:after {\\n  content: '';\\n  height: 100%;\\n  background: url(\" + __webpack_require__(463) + \") no-repeat 100% 0/auto 100%;\\n  width: 20px;\\n  position: absolute;\\n  top: 0;\\n  right: 0;\\n  z-index: 9;\\n}\\n.cart-wrap .cart .cart-item-slider ul,\\n.cart-wrap .cart .cart-item-slider .swiper-container {\\n  width: 100%;\\n  display: inline-block;\\n  list-style: none;\\n  white-space: nowrap;\\n}\\n.cart-wrap .cart .cart-item-slider ul .swiper-wrapper,\\n.cart-wrap .cart .cart-item-slider .swiper-container .swiper-wrapper {\\n  width: 100%;\\n}\\n.cart-wrap .cart .cart-item-slider ul li,\\n.cart-wrap .cart .cart-item-slider .swiper-container li {\\n  display: inline-block;\\n}\\n@-webkit-keyframes living {\\n0% {\\n    top: 30px;\\n}\\n25% {\\n    top: 15px;\\n}\\n50% {\\n    top: 13px;\\n}\\n100% {\\n    top: 30px;\\n}\\n}\\n@keyframes living {\\n0% {\\n    top: 30px;\\n}\\n25% {\\n    top: 15px;\\n}\\n50% {\\n    top: 13px;\\n}\\n100% {\\n    top: 30px;\\n}\\n}\\n\", \"\"]);\n\n// exports\n\n\n//////////////////\n// WEBPACK FOOTER\n// ../~/css-loader!../~/vue-loader/lib/style-rewriter.js?id=data-v-0a38add1!../~/stylus-loader!../~/vue-loader/lib/selector.js?type=styles&index=0!./ui/components/Cart.vue\n// module id = 139\n// module chunks = 0\n\n//# sourceURL=webpack:///./ui/components/Cart.vue?../~/css-loader!../~/vue-loader/lib/style-rewriter.js?id=data-v-0a38add1!../~/stylus-loader!../~/vue-loader/lib/selector.js?type=styles&index=0");

/***/ }),

/***/ 483:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: \"cart-wrap\",\n    class: [_vm.items.length < 1 ? 'no-items' : 'has-items', _vm.shelf.type == 'checkout' ? 'checkout' : '']\n  }, [_c('div', {\n    directives: [{\n      name: \"show\",\n      rawName: \"v-show\",\n      value: (_vm.items.length > 0),\n      expression: \"items.length>0\"\n    }],\n    staticClass: \"cart\"\n  }, [_c('transition', {\n    attrs: {\n      \"name\": \"slide-fade-down\",\n      \"mode\": \"out-in\",\n      \"appear\": \"\"\n    }\n  }, [(_vm.shelf.type == 'cart') ? _c('div', {\n    key: \"cart\",\n    staticClass: \"cart-item-slider\",\n    class: [_vm.items.length > _vm.slidesPerView ? 'many-items' : '']\n  }, [_c('swiper', {\n    ref: \"swiper\",\n    attrs: {\n      \"options\": _vm.swiperOptions\n    }\n  }, _vm._l((_vm.cart.items), function(item, index) {\n    return _c('swiper-slide', {\n      key: item.id,\n      attrs: {\n        \"data-index\": index\n      }\n    }, [_c('transition', {\n      attrs: {\n        \"name\": \"slide-fade\",\n        \"mode\": \"out-in\",\n        \"appear\": \"\"\n      }\n    }, [_c('item-preview', {\n      attrs: {\n        \"type\": \"cart\",\n        \"item\": item,\n        \"size\": \"small\",\n        \"actions\": ['view', 'remove'],\n        \"info\": [item.amount + ' items'],\n        \"draggable\": false\n      }\n    })], 1)], 1)\n  }))], 1) : _vm._e(), _vm._v(\" \"), (_vm.shelf.type == 'checkout') ? _c('div', {\n    key: \"checkout\",\n    staticClass: \"checkout-info\"\n  }, [_c('ul', _vm._l((_vm.checkoutStatus), function(status) {\n    return _c('li', [_c('div', {\n      staticClass: \"circle-item\"\n    }, [_c('count-up', {\n      attrs: {\n        \"start\": 0,\n        \"end\": status.amount,\n        \"decimals\": 0,\n        \"duration\": 4,\n        \"options\": _vm.countOptions\n      }\n    })], 1), _vm._v(\" \"), _c('span', {\n      staticClass: \"label\"\n    }, [_vm._v(_vm._s(status.label))])])\n  }))]) : _vm._e()]), _vm._v(\" \"), _c('div', {\n    staticClass: \"cart-info\"\n  }, [_c('div', {\n    staticClass: \"subtotal\"\n  }, [_c('div', [_c('h5', [_vm._v(\"SUBTOTAL\")]), _vm._v(\" \"), _c('div', {\n    staticClass: \"amount\"\n  }, [_vm._v(\"$ \"), _c('count-up', {\n    attrs: {\n      \"start\": 0,\n      \"end\": _vm.subtotal,\n      \"decimals\": 0,\n      \"duration\": 1,\n      \"options\": _vm.countOptions\n    }\n  })], 1)])]), _vm._v(\" \"), _c('div', {\n    staticClass: \"cart-actions\"\n  }, [_c('button', {\n    staticClass: \"btn\",\n    on: {\n      \"click\": function($event) {\n        _vm.changeShelfType('checkout')\n      }\n    }\n  }, [_vm._v(_vm._s(_vm.shelf.type === 'cart' ? 'CHECKOUT' : 'PROCEED TO CONFIRMATION'))]), _vm._v(\" \"), (_vm.shelf.type == 'checkout') ? _c('a', {\n    staticClass: \"continue\",\n    attrs: {\n      \"href\": \"#p\"\n    },\n    on: {\n      \"click\": function($event) {\n        $event.preventDefault();\n        _vm.toggleShelf($event)\n      }\n    }\n  }, [_vm._v(\"CONTINUE SHOPPING\")]) : _vm._e()])])], 1), _vm._v(\" \"), _c('h4', {\n    directives: [{\n      name: \"show\",\n      rawName: \"v-show\",\n      value: (_vm.items.length < 1),\n      expression: \"items.length<1\"\n    }],\n    staticClass: \"not-me\"\n  }, [_vm._v(\"There's no items in your cart.\")]), _vm._v(\" \"), (_vm.shelf.type == 'checkout') ? _c('a', {\n    staticClass: \"not-me back-link\",\n    attrs: {\n      \"href\": \"#p\"\n    },\n    on: {\n      \"click\": function($event) {\n        $event.preventDefault();\n        _vm.changeShelfType('cart')\n      }\n    }\n  }, [_c('i', {\n    staticClass: \"left-arrow\"\n  }), _vm._v(\" BACK\")]) : _vm._e(), _vm._v(\" \"), (_vm.items.length > 0) ? _c('h3', {\n    staticClass: \"not-me\"\n  }, [_vm._m(0), _vm._v(\" \"), _c('vue-typer', {\n    attrs: {\n      \"text\": [_vm.cartLabel],\n      \"repeat\": 0,\n      \"shuffle\": false,\n      \"initial-action\": _vm.typeAction,\n      \"pre-type-delay\": 420,\n      \"type-delay\": 30,\n      \"pre-erase-delay\": 100,\n      \"erase-delay\": 250,\n      \"erase-style\": \"select-back\",\n      \"erase-on-complete\": false,\n      \"caret-animation\": \"blink\"\n    }\n  })], 1) : _vm._e()])\n},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('i', {\n    staticClass: \"icon-cart\"\n  }, [_c('span', {\n    staticClass: \"icon-wrap\"\n  }, [_c('i', {\n    staticClass: \"icon-cart-items\"\n  })])])\n}]}\nmodule.exports.render._withStripped = true\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n     __webpack_require__(1).rerender(\"data-v-0a38add1\", module.exports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ../~/vue-loader/lib/template-compiler.js?id=data-v-0a38add1!../~/vue-loader/lib/selector.js?type=template&index=0!./ui/components/Cart.vue\n// module id = 483\n// module chunks = 0\n\n//# sourceURL=webpack:///./ui/components/Cart.vue?../~/vue-loader/lib/template-compiler.js?id=data-v-0a38add1!../~/vue-loader/lib/selector.js?type=template&index=0");

/***/ })

})