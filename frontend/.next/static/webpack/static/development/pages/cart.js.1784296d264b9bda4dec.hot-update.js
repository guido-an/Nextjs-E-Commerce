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
      totalPriceCart: 0,
      vendorBjt: [],
      vendorRinci: []
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "calculateTotalPrice", function (array) {
      var totalPricesArray = [];
      array.forEach(function (product) {
        var productPrice = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(product.price) * product.quantity;
        totalPricesArray.push(productPrice);
      });
      var totalPriceCart = totalPricesArray.reduce(function (a, b) {
        return a + b;
      }, 0);

      _this.setState({
        totalPriceCart: totalPriceCart
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Cart, [{
    key: "componentDidMount",
    // on page load calculate totalPriceCart 
    value: function componentDidMount() {
      this.calculateTotalPrice(this.props.productsInCart);
      this.filterVendorBjt("Bjt");
      this.filterVendorRinci("Rinci");
    } // if a product is removed update totalPriceCart  

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props !== prevProps) {
        this.calculateTotalPrice(this.props.productsInCart);
        this.filterVendorBjt("Bjt");
        this.filterVendorRinci("Rinci");
      }
    } // collect Bjt product 

  }, {
    key: "filterVendorBjt",
    value: function filterVendorBjt(vendorName) {
      var vendorProducts = this.props.productsInCart.filter(function (product) {
        return product.vendor_name == vendorName;
      });
      this.setState({
        vendorBjt: vendorProducts
      });
    } // collect Rinci product 

  }, {
    key: "filterVendorRinci",
    value: function filterVendorRinci(vendorName) {
      var vendorProducts = this.props.productsInCart.filter(function (product) {
        return product.vendor_name == vendorName;
      });
      this.setState({
        vendorRinci: vendorProducts
      });
    } // caluclate totalPriceCart function (array is a parameter for this.props.productsInCart)

  }, {
    key: "render",
    //   render() {
    //     {console.log(this.state)}
    //     return (
    //       <Layout>
    //         {this.props.productsInCart.length > 0 ? (
    //           <div>
    //             {this.props.productsInCart.map((product, index) => {
    //               return (
    //                 <div index={product.id}>
    //                   <p>
    //                     <strong>Product:</strong>
    //                     {product.name}
    //                   </p>
    //                   <p>
    //                     <strong>Quantity:</strong>
    //                     {product.quantity}
    //                   </p>
    //                   <p>
    //                     <strong>Total: </strong>
    //                     {product.quantity * parseInt(product.price)}€
    //                   </p>
    //                   <button onClick={() => this.props.deleteProduct(product.id)}>
    //                     remove product
    //                   </button>
    //                 </div>
    //               );
    //             })}
    //             <h2>Total Price Cart: {this.state.totalPriceCart}€</h2>
    //           </div>
    //         ) : (
    //           <p>no product in cart</p>
    //         )}
    //       </Layout>
    //     );
    //   }
    // }
    value: function render() {
      {
        console.log(this.state.vendorBjt);
      }
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, this.state.vendorBjt.length > 0 ? this.state.vendorBjt.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, "Name: "), " ", product.name), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, "Quantity: "), " ", product.price), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("strong", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, "Name: "), " ", product.name));
      }) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "no product"));
    }
  }]);

  return Cart;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Cart);

/***/ })

})
//# sourceMappingURL=cart.js.1784296d264b9bda4dec.hot-update.js.map