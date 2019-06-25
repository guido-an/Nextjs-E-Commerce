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
        className: "jsx-1670649706" + " " + "shop-intro text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/images/".concat(vendor.shop_url, "-logo.png"),
        width: "180px",
        className: "jsx-1670649706",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        className: "jsx-1670649706",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "About ", vendor.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-1670649706" + " " + "subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-1670649706" + " " + "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, vendor.name, " Products"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-1670649706" + " " + "products-section container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, productsVendor.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "jsx-1670649706" + " " + "product-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          src: "../static/images/".concat(product.product_url, ".jpg"),
          width: "240px",
          className: "jsx-1670649706",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 46
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-1670649706" + " " + "product-name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
          className: "jsx-1670649706",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, product.name)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-1670649706",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, product.price, "\u20AC"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          as: "".concat(product.product_url),
          href: "/product/?product_id=".concat(product.product_id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          className: "jsx-1670649706",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          },
          __self: this
        }, "Find out more")));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1670649706",
        __self: this
      }, ".shop-intro.jsx-1670649706{margin-top:80px;}h1.jsx-1670649706{text-transform:uppercase;margin-top:20px;}h2.jsx-1670649706{margin-top:60px;margin-bottom:20px;}.subtitle.jsx-1670649706{text-align:center;width:70%;margin:0 auto;display:block;margin-top:0px;}.products-section.jsx-1670649706{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;box-shadow:0px 0px 100px 0px rgba(12,5,5,0.3);}.product-container.jsx-1670649706{margin-top:40px;border:2px solid #f7f7f7;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HdWlkby9EZXNrdG9wL2ZpbmFsLXByb2plY3QvZnJvbnRlbmQvcGFnZXMvc2hvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RG9CLEFBSVUsQUFFMkIsQUFJVixBQUlJLEFBT0wsQUFNRyxnQkF2QmxCLEFBUUYsQUFpQjZCLEVBZGYsT0FQZCxHQVFrQixPQUpqQixNQUpBLEFBdUJDLENBZGdCLGNBRWpCLGVBQUMsR0FHK0IsMkhBR2hDLDhDQUFDIiwiZmlsZSI6Ii9Vc2Vycy9HdWlkby9EZXNrdG9wL2ZpbmFsLXByb2plY3QvZnJvbnRlbmQvcGFnZXMvc2hvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuXG5jbGFzcyBTaG9wIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgICAvLyAxKSBnZXQgdGhlIHNpbmdsZSBWRU5ET1JcbiAgICBjb25zdCByZXNWZW5kb3IgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjUwMDAvdmVuZG9yLz92ZW5kb3JfaWQ9JHtxdWVyeS52ZW5kb3JfaWR9YFxuICAgICk7XG4gICAgY29uc3QgZGF0YVZlbmRvciA9IGF3YWl0IHJlc1ZlbmRvci5qc29uKCk7XG5cbiAgICAvLyAyKSBnZXQgUFJPRFVDVFMgb2Ygc2luZ2xlIHZlbmRvclxuICAgIGNvbnN0IHJlc1Byb2R1Y3RzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Byb2R1Y3RzVmVuZG9yP3ZlbmRvcl9pZD0ke3F1ZXJ5LnZlbmRvcl9pZH1gXG4gICAgKTtcbiAgICBjb25zdCBkYXRhUHJvZHVjdHMgPSBhd2FpdCByZXNQcm9kdWN0cy5qc29uKCk7XG5cbiAgICByZXR1cm4geyB2ZW5kb3I6IGRhdGFWZW5kb3IsIHByb2R1Y3RzVmVuZG9yOiBkYXRhUHJvZHVjdHMgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZlbmRvciB9ID0gdGhpcy5wcm9wczsgLy8gZGVjdXN0cnVjdGluZyB0aGUgb2JqZWN0XG4gICAgY29uc3QgeyBwcm9kdWN0c1ZlbmRvciB9ID0gdGhpcy5wcm9wczsgLy8gZGVjdXN0cnVjdGluZyB0aGUgb2JqZWN0XG4gICAgY29uc29sZS5sb2cocHJvZHVjdHNWZW5kb3IpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1pbnRybyB0ZXh0LWNlbnRlclwiPlxuICAgICAgIFxuICAgICAgICA8aW1nIHNyYz17YC4uL3N0YXRpYy9pbWFnZXMvJHt2ZW5kb3Iuc2hvcF91cmx9LWxvZ28ucG5nYH0gd2lkdGg9XCIxODBweFwiPjwvaW1nPlxuICAgICAgICA8aDE+QWJvdXQge3ZlbmRvci5uYW1lfTwvaDE+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW0gYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0IGFsaXF1aXAgZXggZWEgY29tbW9kbyBjb25zZXF1YXQuIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57dmVuZG9yLm5hbWV9IFByb2R1Y3RzPC9oMj4gIFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwcm9kdWN0cy1zZWN0aW9uIGNvbnRhaW5lclwiPlxuICAgICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgICBcbiAgICAgICAge3Byb2R1Y3RzVmVuZG9yLm1hcChwcm9kdWN0ID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtgLi4vc3RhdGljL2ltYWdlcy8ke3Byb2R1Y3QucHJvZHVjdF91cmx9LmpwZ2B9IHdpZHRoPVwiMjQwcHhcIi8+XG5cbiAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9wb2xsZW4uanBnXCIvPiAqL31cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInByb2R1Y3QtbmFtZVwiPjxzdHJvbmc+e3Byb2R1Y3QubmFtZX08L3N0cm9uZz48L3A+XG4gICAgICAgICAgICAgIDxwPntwcm9kdWN0LnByaWNlfeKCrDwvcD5cbiAgICAgICAgICAgICAgPExpbmsgYXM9e2Ake3Byb2R1Y3QucHJvZHVjdF91cmx9YH0gaHJlZj17YC9wcm9kdWN0Lz9wcm9kdWN0X2lkPSR7cHJvZHVjdC5wcm9kdWN0X2lkfWB9PlxuICAgICAgICAgICAgICAgIDxhPkZpbmQgb3V0IG1vcmU8L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICBcbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgICAgXG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5zaG9wLWludHJve1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogODBweFxuICAgICAgICAgIH1cbiAgICAgICAgIGgxe1xuICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4XG4gICAgICAgICB9XG4gICAgICAgICBoMntcbiAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206MjBweFxuICAgICAgICAgfVxuICAgICAgICAgIC5zdWJ0aXRsZXtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0cy1zZWN0aW9ue1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMDBweCAwcHggcmdiYSgxMiwgNSwgNSwgMC4zKVxuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0LWNvbnRhaW5lcntcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmN2Y3Zjc7XG4gICAgICAgICAgXG4gICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3A7XG4iXX0= */\n/*@ sourceURL=/Users/Guido/Desktop/final-project/frontend/pages/shop.js */"));
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
//# sourceMappingURL=shop.js.154f1502fdf1f7a7725e.hot-update.js.map