webpackHotUpdate("static/development/pages/cart.js",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");








var _jsxFileName = "/Users/Guido/Desktop/final-project/frontend/pages/cart.js";



var Cart =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Cart, _Component);

  function Cart() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Cart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Cart)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "state", {
      totalPriceCart: 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "test", function () {
      _this.setState({
        totalPriceCart: totalPriceCart
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Cart, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var totalPricesArray = [];
      this.props.productsInCart.forEach(function (product) {
        var productPrice = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(product.price) * product.quantity;
        totalPricesArray.push(productPrice);
      });
      var totalPriceCart = totalPricesArray.reduce(function (a, b) {
        return a + b;
      }, 0);
      console.log(totalPriceCart);
      this.setState({
        totalPriceCart: totalPriceCart
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, this.props.productsInCart.length > 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, this.props.productsInCart.map(function (product, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          index: product.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, "Product:"), product.name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, "Quantity:"), product.quantity), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, "Total: "), product.quantity * _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(product.price), "\u20AC"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          onClick: function onClick() {
            return _this2.props.deleteProduct(product.id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, "remove product"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          onClick: _this2.test,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, "test"));
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "Total Price Cart: ", this.state.totalPriceCart, "\u20AC")) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, "no product in cart"));
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ })

})
//# sourceMappingURL=cart.js.5ee1b814987e2fde748a.hot-update.js.map