webpackHotUpdate("static/development/pages/shop.js",{

/***/ "./pages/shop.js":
/*!***********************!*\
  !*** ./pages/shop.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/Users/Guido/Desktop/final-project/frontend/pages/shop.js";






var Shop =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Shop, _Component);

  function Shop() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Shop);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Shop).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Shop, [{
    key: "render",
    value: function render() {
      var vendor = this.props.vendor; // decustructing the object

      var productsVendor = this.props.productsVendor; // decustructing the object

      console.log(productsVendor);
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_8__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
        className: "jsx-3266751508" + " " + "shop-intro text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/images/".concat(vendor.shop_url, "-logo.png"),
        width: "180px",
        className: "jsx-3266751508",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        className: "jsx-3266751508",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "About ", vendor.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-3266751508",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-3266751508" + " " + "products-section container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-3266751508",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, vendor.name, " Products"), productsVendor.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "jsx-3266751508" + " " + "product-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          src: "https://scontent.cdninstagram.com/vp/32e1f51f6b0d69ba0404d035016faeb0/5D558FE2/t51.2885-15/e35/c0.44.1080.1080/s480x480/46263745_2258246997790808_4915867594591644781_n.jpg?_nc_ht=scontent-ort2-1.cdninstagram.com",
          width: "140px",
          className: "jsx-3266751508",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-3266751508",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, product.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-3266751508",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, product.price, "\u20AC"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/product/?product_id=".concat(product.product_id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          className: "jsx-3266751508",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, "link")));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3266751508",
        __self: this
      }, ".shop-intro.jsx-3266751508{margin-top:80px;}h1.jsx-3266751508{text-transform:uppercase;margin-top:20px;}span.jsx-3266751508{text-align:center;width:70%;margin:0 auto;display:block;margin-top:0px;}.products-section.jsx-3266751508{margin-top:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.product-container.jsx-3266751508{margin-top:80px;width:33%;border:2px solid #f7f7f7;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HdWlkby9EZXNrdG9wL2ZpbmFsLXByb2plY3QvZnJvbnRlbmQvcGFnZXMvc2hvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5RG9CLEFBSVUsQUFFMkIsQUFPTixBQU9GLEFBSUQsZ0JBcEJqQixBQWlCZSxBQUlKLEVBWEMsT0FOZCxDQXFCQyxFQWRpQixhQVBqQixDQVFpQixTQWFoQixLQVhELGVBQUMsbUJBSUEiLCJmaWxlIjoiL1VzZXJzL0d1aWRvL0Rlc2t0b3AvZmluYWwtcHJvamVjdC9mcm9udGVuZC9wYWdlcy9zaG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmNsYXNzIFNob3AgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xuICAgIC8vIDEpIGdldCB0aGUgc2luZ2xlIFZFTkRPUlxuICAgIGNvbnN0IHJlc1ZlbmRvciA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC92ZW5kb3IvP3ZlbmRvcl9pZD0ke3F1ZXJ5LnZlbmRvcl9pZH1gXG4gICAgKTtcbiAgICBjb25zdCBkYXRhVmVuZG9yID0gYXdhaXQgcmVzVmVuZG9yLmpzb24oKTtcblxuICAgIC8vIDIpIGdldCBQUk9EVUNUUyBvZiBzaW5nbGUgdmVuZG9yXG4gICAgY29uc3QgcmVzUHJvZHVjdHMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjUwMDAvcHJvZHVjdHNWZW5kb3I/dmVuZG9yX2lkPSR7cXVlcnkudmVuZG9yX2lkfWBcbiAgICApO1xuICAgIGNvbnN0IGRhdGFQcm9kdWN0cyA9IGF3YWl0IHJlc1Byb2R1Y3RzLmpzb24oKTtcblxuICAgIHJldHVybiB7IHZlbmRvcjogZGF0YVZlbmRvciwgcHJvZHVjdHNWZW5kb3I6IGRhdGFQcm9kdWN0cyB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmVuZG9yIH0gPSB0aGlzLnByb3BzOyAvLyBkZWN1c3RydWN0aW5nIHRoZSBvYmplY3RcbiAgICBjb25zdCB7IHByb2R1Y3RzVmVuZG9yIH0gPSB0aGlzLnByb3BzOyAvLyBkZWN1c3RydWN0aW5nIHRoZSBvYmplY3RcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0c1ZlbmRvcik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWludHJvIHRleHQtY2VudGVyXCI+XG4gICAgICAgXG4gICAgICAgIDxpbWcgc3JjPXtgLi4vc3RhdGljL2ltYWdlcy8ke3ZlbmRvci5zaG9wX3VybH0tbG9nby5wbmdgfSB3aWR0aD1cIjE4MHB4XCI+PC9pbWc+XG4gICAgICAgIDxoMT5BYm91dCB7dmVuZG9yLm5hbWV9PC9oMT5cbiAgICAgICAgPHNwYW4+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZHVjdHMtc2VjdGlvbiBjb250YWluZXJcIj5cbiAgICAgICAgICBcbiAgICAgICAgPGgyPnt2ZW5kb3IubmFtZX0gUHJvZHVjdHM8L2gyPiAgICBcbiAgICAgICAgICAgXG4gICAgICAgIHtwcm9kdWN0c1ZlbmRvci5tYXAocHJvZHVjdCA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRhaW5lclwiPlxuXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9zY29udGVudC5jZG5pbnN0YWdyYW0uY29tL3ZwLzMyZTFmNTFmNmIwZDY5YmEwNDA0ZDAzNTAxNmZhZWIwLzVENTU4RkUyL3Q1MS4yODg1LTE1L2UzNS9jMC40NC4xMDgwLjEwODAvczQ4MHg0ODAvNDYyNjM3NDVfMjI1ODI0Njk5Nzc5MDgwOF80OTE1ODY3NTk0NTkxNjQ0NzgxX24uanBnP19uY19odD1zY29udGVudC1vcnQyLTEuY2RuaW5zdGFncmFtLmNvbVwiIHdpZHRoPVwiMTQwcHhcIiAvPlxuICAgICAgICAgICAgICA8cD57cHJvZHVjdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgPHA+e3Byb2R1Y3QucHJpY2V94oKsPC9wPlxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3QvP3Byb2R1Y3RfaWQ9JHtwcm9kdWN0LnByb2R1Y3RfaWR9YH0+XG4gICAgICAgICAgICAgICAgPGE+bGluazwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgIFxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgICBcbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnNob3AtaW50cm97XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4MHB4XG4gICAgICAgICAgfVxuICAgICAgICAgaDF7XG4gICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHhcbiAgICAgICAgIH1cbiAgICAgICAgIGgye1xuICAgICAgICAgICBcbiAgICAgICAgIH1cbiAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHhcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3RzLXNlY3Rpb257XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3QtY29udGFpbmVye1xuICAgICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xuICAgICAgICAgICAgd2lkdGggMzMlO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2Y3ZjdmN1xuICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcDtcbiJdfQ== */\n/*@ sourceURL=/Users/Guido/Desktop/final-project/frontend/pages/shop.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var query, resVendor, dataVendor, resProducts, dataProducts;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = _ref.query;
                _context.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()("http://localhost:5000/vendor/?vendor_id=".concat(query.vendor_id));

              case 3:
                resVendor = _context.sent;
                _context.next = 6;
                return resVendor.json();

              case 6:
                dataVendor = _context.sent;
                _context.next = 9;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()("http://localhost:5000/productsVendor?vendor_id=".concat(query.vendor_id));

              case 9:
                resProducts = _context.sent;
                _context.next = 12;
                return resProducts.json();

              case 12:
                dataProducts = _context.sent;
                return _context.abrupt("return", {
                  vendor: dataVendor,
                  productsVendor: dataProducts
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Shop;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Shop);

/***/ })

})
//# sourceMappingURL=shop.js.5361328b7d6203ed5e7b.hot-update.js.map