webpackHotUpdate(0,{

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _vuex = __webpack_require__(16);\n\nvar _vueAwesomeSwiper = __webpack_require__(62);\n\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\nexports.default = {\n\tcreated: function created() {\n\t\tconsole.log(\"MAIN CATEGORIES created >> \", this.categories);\n\t},\n\tdata: function data() {\n\t\treturn {\n\t\t\tswiperOption: {\n\t\t\t\t// pagination: '.swiper-pagination',\n\t\t\t\tslidesPerView: 6,\n\t\t\t\tspaceBetween: 45,\n\t\t\t\tfreeMode: true,\n\t\t\t\tpreventClicks: false,\n\t\t\t\tbreakpoints: {\n\t\t\t\t\t1600: {\n\t\t\t\t\t\tslidesPerView: 5.5\n\t\t\t\t\t},\n\t\t\t\t\t1400: {\n\t\t\t\t\t\tslidesPerView: 4.5\n\t\t\t\t\t},\n\t\t\t\t\t1272: {\n\t\t\t\t\t\tslidesPerView: 3.5\n\t\t\t\t\t},\n\t\t\t\t\t1040: {\n\t\t\t\t\t\tslidesPerView: 2.5,\n\t\t\t\t\t\tspaceBetween: 10\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t};\n\t},\n\n\tcomponents: {\n\t\tswiper: _vueAwesomeSwiper.swiper,\n\t\tswiperSlide: _vueAwesomeSwiper.swiperSlide\n\t},\n\tcomputed: (0, _vuex.mapState)(['categories'])\n};\n\n//////////////////\n// WEBPACK FOOTER\n// ../~/babel-loader/lib!../~/vue-loader/lib/selector.js?type=script&index=0!./ui/components/mainCategories.vue\n// module id = 182\n// module chunks = 0\n\n//# sourceURL=webpack:///./ui/components/mainCategories.vue?../~/babel-loader/lib!../~/vue-loader/lib/selector.js?type=script&index=0");

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: \"main-categories\"\n  }, [(!!_vm.categories) ? _c('swiper', {\n    attrs: {\n      \"options\": _vm.swiperOption\n    }\n  }, [_vm._l((_vm.categories), function(category) {\n    return _c('swiper-slide', [_c('router-link', {\n      attrs: {\n        \"to\": {\n          name: 'results-root',\n          params: {\n            rootFilter: category.name\n          }\n        }\n      }\n    }, [_c('img', {\n      attrs: {\n        \"src\": category.src,\n        \"alt\": \"\"\n      }\n    }), _vm._v(\" \"), _c('span', {\n      domProps: {\n        \"textContent\": _vm._s(category.name)\n      }\n    })])], 1)\n  }), _vm._v(\" \"), _c('div', {\n    staticClass: \"swiper-pagination\",\n    slot: \"pagination\"\n  })], 2) : _c('div', [_c('h5', [_vm._v(\"Loading Categories...\")])])], 1)\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n     __webpack_require__(1).rerender(\"data-v-4b4ea98b\", module.exports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ../~/vue-loader/lib/template-compiler.js?id=data-v-4b4ea98b!../~/vue-loader/lib/selector.js?type=template&index=0!./ui/components/mainCategories.vue\n// module id = 433\n// module chunks = 0\n\n//# sourceURL=webpack:///./ui/components/mainCategories.vue?../~/vue-loader/lib/template-compiler.js?id=data-v-4b4ea98b!../~/vue-loader/lib/selector.js?type=template&index=0");

/***/ })

})