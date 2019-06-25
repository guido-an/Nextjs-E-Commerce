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
        className: "jsx-1385192778" + " " + "shop-intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/images/".concat(vendor.shop_url, "-logo.png"),
        width: "120px",
        className: "jsx-1385192778",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        className: "jsx-1385192778",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, vendor.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-1385192778",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1385192778" + " " + "products-wrapper container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-1385192778",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, vendor.name, " products"), productsVendor.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          key: product.product_id,
          className: "jsx-1385192778",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          src: product.img,
          width: "140px",
          className: "jsx-1385192778",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-1385192778",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, product.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "/product/?product_id=".concat(product.product_id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          className: "jsx-1385192778",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, "link")));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1385192778",
        __self: this
      }, ".shop-intro.jsx-1385192778{margin-top:80px;}h1.jsx-1385192778{text-align:center;text-transform:uppercase;}span.jsx-1385192778{text-align:center;width:70%;margin:0 auto;display:block;}.products-wrapper.jsx-1385192778{margin-top:60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HdWlkby9EZXNrdG9wL2ZpbmFsLXByb2plY3QvZnJvbnRlbmQvcGFnZXMvc2hvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRG9CLEFBSVUsQUFFcUIsQUFLQSxBQU9yQixnQkFkQyxBQWNBLEVBVEQsQUFHYSxVQUNJLGNBRWpCLENBTkMsYUFNQSIsImZpbGUiOiIvVXNlcnMvR3VpZG8vRGVza3RvcC9maW5hbC1wcm9qZWN0L2Zyb250ZW5kL3BhZ2VzL3Nob3AuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcblxuY2xhc3MgU2hvcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoeyBxdWVyeSB9KSB7XG4gICAgLy8gMSkgZ2V0IHRoZSBzaW5nbGUgVkVORE9SXG4gICAgY29uc3QgcmVzVmVuZG9yID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL3ZlbmRvci8/dmVuZG9yX2lkPSR7cXVlcnkudmVuZG9yX2lkfWBcbiAgICApO1xuICAgIGNvbnN0IGRhdGFWZW5kb3IgPSBhd2FpdCByZXNWZW5kb3IuanNvbigpO1xuXG4gICAgLy8gMikgZ2V0IFBST0RVQ1RTIG9mIHNpbmdsZSB2ZW5kb3JcbiAgICBjb25zdCByZXNQcm9kdWN0cyA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9wcm9kdWN0c1ZlbmRvcj92ZW5kb3JfaWQ9JHtxdWVyeS52ZW5kb3JfaWR9YFxuICAgICk7XG4gICAgY29uc3QgZGF0YVByb2R1Y3RzID0gYXdhaXQgcmVzUHJvZHVjdHMuanNvbigpO1xuXG4gICAgcmV0dXJuIHsgdmVuZG9yOiBkYXRhVmVuZG9yLCBwcm9kdWN0c1ZlbmRvcjogZGF0YVByb2R1Y3RzIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2ZW5kb3IgfSA9IHRoaXMucHJvcHM7IC8vIGRlY3VzdHJ1Y3RpbmcgdGhlIG9iamVjdFxuICAgIGNvbnN0IHsgcHJvZHVjdHNWZW5kb3IgfSA9IHRoaXMucHJvcHM7IC8vIGRlY3VzdHJ1Y3RpbmcgdGhlIG9iamVjdFxuICAgIGNvbnNvbGUubG9nKHByb2R1Y3RzVmVuZG9yKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3AtaW50cm9cIj5cbiAgICAgICAgPGltZyBzcmM9e2AuLi9zdGF0aWMvaW1hZ2VzLyR7dmVuZG9yLnNob3BfdXJsfS1sb2dvLnBuZ2B9IHdpZHRoPVwiMTIwcHhcIj48L2ltZz5cbiAgICAgICAgPGgxPnt2ZW5kb3IubmFtZX08L2gxPlxuICAgICAgICA8c3Bhbj5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG8gZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbSBhZCBtaW5pbSB2ZW5pYW0sIHF1aXMgbm9zdHJ1ZCBleGVyY2l0YXRpb24gdWxsYW1jbyBsYWJvcmlzIG5pc2kgdXQgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC4gPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9kdWN0cy13cmFwcGVyIGNvbnRhaW5lclwiPlxuICAgICAgICA8aDI+e3ZlbmRvci5uYW1lfSBwcm9kdWN0czwvaDI+ICAgICAgIFxuICAgICAgICB7cHJvZHVjdHNWZW5kb3IubWFwKHByb2R1Y3QgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIDxkaXYga2V5PXtwcm9kdWN0LnByb2R1Y3RfaWR9PlxuICAgICAgICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWd9IHdpZHRoPVwiMTQwcHhcIiAvPlxuICAgICAgICAgICAgICA8cD57cHJvZHVjdC5uYW1lfTwvcD5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0Lz9wcm9kdWN0X2lkPSR7cHJvZHVjdC5wcm9kdWN0X2lkfWB9PlxuICAgICAgICAgICAgICAgIDxhPmxpbms8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuc2hvcC1pbnRyb3tcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHhcbiAgICAgICAgICB9XG4gICAgICAgICAgaDF7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgIFxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZVxuICAgICAgICAgIH1cbiAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2tcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3RzLXdyYXBwZXJ7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4XG4gICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hvcDtcbiJdfQ== */\n/*@ sourceURL=/Users/Guido/Desktop/final-project/frontend/pages/shop.js */"));
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
//# sourceMappingURL=shop.js.28478bb565d2f3bc5170.hot-update.js.map