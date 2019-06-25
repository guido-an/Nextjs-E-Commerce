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
        className: "jsx-3978007619" + " " + "shop-intro text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/images/".concat(vendor.shop_url, "-logo.png"),
        width: "180px",
        className: "jsx-3978007619",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        className: "jsx-3978007619",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "About ", vendor.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-3978007619" + " " + "subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", " ")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-3978007619" + " " + "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, vendor.name, " Products"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-3978007619" + " " + "products-section container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, productsVendor.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "jsx-3978007619" + " " + "product-container text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          src: "../static/images/".concat(product.product_url, ".jpg"),
          width: "240px",
          className: "jsx-3978007619",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-3978007619" + " " + "product-name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
          className: "jsx-3978007619",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, product.name)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-3978007619",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, product.price, "\u20AC"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          as: "".concat(product.product_url),
          href: "/product/?product_id=".concat(product.product_id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("a", {
          className: "jsx-3978007619" + " " + "product-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, "Product")));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3978007619",
        __self: this
      }, ".shop-intro.jsx-3978007619{margin-top:80px;}h1.jsx-3978007619{text-transform:uppercase;margin-top:20px;}h2.jsx-3978007619{margin-top:60px;margin-bottom:20px;}.subtitle.jsx-3978007619{text-align:center;width:70%;margin:0 auto;display:block;margin-top:0px;margin-bottom:80px;}.products-section.jsx-3978007619{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;box-shadow:0px 0px 100px 0px rgba(12,5,5,0.3);margin-top:30px;}.product-container.jsx-3978007619{margin-top:40px;margin-bottom:20px;}.product-name.jsx-3978007619{position:relative;top:10px;}.product-link.jsx-3978007619{background-color:#2d94e5;color:#fff;border-radius:4px;padding:8px 20px;font-size:14px;position:relative;}.product-link.jsx-3978007619:hover{-webkit-transform:scale(1.1);-ms-transform:scale(1.1);transform:scale(1.1);-webkit-text-decoration:none;text-decoration:none;background-color:green;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HdWlkby9EZXNrdG9wL2ZpbmFsLXByb2plY3QvZnJvbnRlbmQvcGFnZXMvc2hvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRW9CLEFBRzZCLEFBR1MsQUFJVCxBQUlFLEFBUUwsQUFNRyxBQUlFLEFBSU8sQUFTSixnQkF6Q3ZCLEFBT3FCLEFBa0JBLEVBZFQsQUFrQkQsT0ExQk8sQUE4QkwsRUFIYixDQWxCZ0IsT0FKaEIsQUFrQkEsQ0FRb0IsS0E5QnBCLENBU2dCLFlBc0JHLEVBckJGLGVBQ0ksQUFxQkosR0FqQmMsQ0F1QlIsV0FKSCxJQXRCcEIsY0F1QkEscUJBS0QsdUJBQUMsaURBeEJtRCw4Q0FDakMsZ0JBQ2xCIiwiZmlsZSI6Ii9Vc2Vycy9HdWlkby9EZXNrdG9wL2ZpbmFsLXByb2plY3QvZnJvbnRlbmQvcGFnZXMvc2hvcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xuXG5jbGFzcyBTaG9wIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyh7IHF1ZXJ5IH0pIHtcbiAgICAvLyAxKSBnZXQgdGhlIHNpbmdsZSBWRU5ET1JcbiAgICBjb25zdCByZXNWZW5kb3IgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjUwMDAvdmVuZG9yLz92ZW5kb3JfaWQ9JHtxdWVyeS52ZW5kb3JfaWR9YFxuICAgICk7XG4gICAgY29uc3QgZGF0YVZlbmRvciA9IGF3YWl0IHJlc1ZlbmRvci5qc29uKCk7XG5cbiAgICAvLyAyKSBnZXQgUFJPRFVDVFMgb2Ygc2luZ2xlIHZlbmRvclxuICAgIGNvbnN0IHJlc1Byb2R1Y3RzID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cDovL2xvY2FsaG9zdDo1MDAwL3Byb2R1Y3RzVmVuZG9yP3ZlbmRvcl9pZD0ke3F1ZXJ5LnZlbmRvcl9pZH1gXG4gICAgKTtcbiAgICBjb25zdCBkYXRhUHJvZHVjdHMgPSBhd2FpdCByZXNQcm9kdWN0cy5qc29uKCk7XG5cbiAgICByZXR1cm4geyB2ZW5kb3I6IGRhdGFWZW5kb3IsIHByb2R1Y3RzVmVuZG9yOiBkYXRhUHJvZHVjdHMgfTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHZlbmRvciB9ID0gdGhpcy5wcm9wczsgLy8gZGVjdXN0cnVjdGluZyB0aGUgb2JqZWN0XG4gICAgY29uc3QgeyBwcm9kdWN0c1ZlbmRvciB9ID0gdGhpcy5wcm9wczsgLy8gZGVjdXN0cnVjdGluZyB0aGUgb2JqZWN0XG4gICAgY29uc29sZS5sb2cocHJvZHVjdHNWZW5kb3IpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcC1pbnRybyB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17YC4uL3N0YXRpYy9pbWFnZXMvJHt2ZW5kb3Iuc2hvcF91cmx9LWxvZ28ucG5nYH1cbiAgICAgICAgICAgIHdpZHRoPVwiMTgwcHhcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGgxPkFib3V0IHt2ZW5kb3IubmFtZX08L2gxPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LCBzZWQgZG9cbiAgICAgICAgICAgIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGFib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEuIFV0IGVuaW1cbiAgICAgICAgICAgIGFkIG1pbmltIHZlbmlhbSwgcXVpcyBub3N0cnVkIGV4ZXJjaXRhdGlvbiB1bGxhbWNvIGxhYm9yaXMgbmlzaSB1dFxuICAgICAgICAgICAgYWxpcXVpcCBleCBlYSBjb21tb2RvIGNvbnNlcXVhdC57XCIgXCJ9XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+e3ZlbmRvci5uYW1lfSBQcm9kdWN0czwvaDI+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInByb2R1Y3RzLXNlY3Rpb24gY29udGFpbmVyXCI+XG4gICAgICAgICAge3Byb2R1Y3RzVmVuZG9yLm1hcChwcm9kdWN0ID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdC1jb250YWluZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICBzcmM9e2AuLi9zdGF0aWMvaW1hZ2VzLyR7cHJvZHVjdC5wcm9kdWN0X3VybH0uanBnYH1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMjQwcHhcIlxuICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL3BvbGxlbi5qcGdcIi8+ICovfVxuXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHJvZHVjdC1uYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8c3Ryb25nPntwcm9kdWN0Lm5hbWV9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxwPntwcm9kdWN0LnByaWNlfeKCrDwvcD5cbiAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgYXM9e2Ake3Byb2R1Y3QucHJvZHVjdF91cmx9YH1cbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AvcHJvZHVjdC8/cHJvZHVjdF9pZD0ke3Byb2R1Y3QucHJvZHVjdF9pZH1gfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInByb2R1Y3QtbGlua1wiPlByb2R1Y3Q8L2E+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5zaG9wLWludHJvIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBoMiB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA2MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3RzLXNlY3Rpb24ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMDBweCAwcHggcmdiYSgxMiwgNSwgNSwgMC4zKTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3QtbmFtZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0LWxpbmsge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJkOTRlNTtcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgcGFkZGluZzogOHB4IDIwcHg7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC1saW5rOmhvdmVyIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuXG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3A7XG4iXX0= */\n/*@ sourceURL=/Users/Guido/Desktop/final-project/frontend/pages/shop.js */"));
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
//# sourceMappingURL=shop.js.f359d939952e2169ff85.hot-update.js.map