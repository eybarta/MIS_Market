webpackHotUpdate(0,{

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('div', {\n    staticClass: \"item-preview\"\n  }, [_c('div', {\n    staticClass: \"item-preview-image\",\n    class: ['item-' + _vm.size, _vm.quantfocus || !!_vm.activeActions ? 'active' : '', !!_vm.isThisitemInLimbo ? 'flyin' : ''],\n    style: (_vm.previewImageStyle),\n    attrs: {\n      \"draggable\": _vm.draggable\n    },\n    on: {\n      \"dragstart\": _vm.dragStart,\n      \"dragend\": _vm.dragEnd,\n      \"touchstart\": function($event) {\n        _vm.toggleActionsForDevices($event)\n      }\n    }\n  }, [(_vm.showActions || !!_vm.showActionsOnDevices) ? _c('div', {\n    staticClass: \"item-actions\"\n  }, _vm._l((_vm.actions), function(action) {\n    return _c('button', {\n      staticClass: \"action\",\n      on: {\n        \"click\": function($event) {\n          $event.stopPropagation();\n          _vm.actionHandler(action)\n        }\n      }\n    }, [_c('i', {\n      class: ['icon-' + action]\n    }), _c('span', [_vm._v(\" \" + _vm._s(_vm.labelFor(action)) + \" \")])])\n  })) : _vm._e(), _vm._v(\" \"), (!!_vm.info) ? _c('div', {\n    staticClass: \"item-info\",\n    on: {\n      \"click\": _vm.infoClickHandler\n    }\n  }, [_c('div', {\n    staticClass: \"info\",\n    domProps: {\n      \"textContent\": _vm._s(_vm.item.amount + (_vm.item.amount < 2 ? ' item' : ' items'))\n    }\n  })]) : _vm._e()]), _vm._v(\" \"), _c('div', {\n    staticClass: \"label\"\n  }, [_c('span', {\n    staticClass: \"item-mct\"\n  }, [_vm._v(_vm._s(_vm.item.catNo))]), _vm._v(\" \"), _c('span', {\n    staticClass: \"item-name\"\n  }, [_vm._v(_vm._s(_vm.item.name))])])])\n},staticRenderFns: []}\nmodule.exports.render._withStripped = true\nif (true) {\n  module.hot.accept()\n  if (module.hot.data) {\n     __webpack_require__(1).rerender(\"data-v-7b6c3da2\", module.exports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ../~/vue-loader/lib/template-compiler.js?id=data-v-7b6c3da2!../~/vue-loader/lib/selector.js?type=template&index=0!./ui/components/ItemPreview.vue\n// module id = 436\n// module chunks = 0\n\n//# sourceURL=webpack:///./ui/components/ItemPreview.vue?../~/vue-loader/lib/template-compiler.js?id=data-v-7b6c3da2!../~/vue-loader/lib/selector.js?type=template&index=0");

/***/ })

})