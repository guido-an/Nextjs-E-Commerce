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
        className: "jsx-2901684934" + " " + "shop-intro text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
        src: "../static/images/".concat(vendor.shop_url, "-logo.png"),
        width: "180px",
        className: "jsx-2901684934",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
        className: "jsx-2901684934",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "About ", vendor.name), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("span", {
        className: "jsx-2901684934" + " " + "subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", " ")), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h2", {
        className: "jsx-2901684934" + " " + "text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, vendor.name, " Products"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
        className: "jsx-2901684934" + " " + "products-section container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, productsVendor.map(function (product) {
        return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
          className: "jsx-2901684934" + " " + "product-container text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("img", {
          src: "../static/images/".concat(product.product_url, ".jpg"),
          width: "240px",
          className: "jsx-2901684934",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-2901684934" + " " + "product-name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("strong", {
          className: "jsx-2901684934",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }, product.name)), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
          className: "jsx-2901684934",
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
          className: "jsx-2901684934" + " " + "product-link",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, "Product")));
      })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2901684934",
        __self: this
      }, ".shop-intro.jsx-2901684934{margin-top:80px;}h1.jsx-2901684934{text-transform:uppercase;margin-top:20px;}h2.jsx-2901684934{margin-top:60px;margin-bottom:20px;}.subtitle.jsx-2901684934{text-align:center;width:70%;margin:0 auto;display:block;margin-top:0px;margin-bottom:80px;}.products-section.jsx-2901684934{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;box-shadow:0px 0px 100px 0px rgba(12,5,5,0.3);margin-top:30px;}.product-container.jsx-2901684934{margin-top:40px;margin-bottom:20px;}.product-container.jsx-2901684934 img.jsx-2901684934{box-shadow:0px 8px 15px rgba(0,0,0,0.1);}.product-name.jsx-2901684934{position:relative;top:10px;}.product-link.jsx-2901684934{background-color:#2d94e5;color:#fff;border-radius:4px;padding:8px 20px;font-size:14px;}.product-link.jsx-2901684934:hover{-webkit-text-decoration:none;text-decoration:none;background-color:green;box-shadow:0px 8px 15px rgba(0,0,0,0.3);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HdWlkby9EZXNrdG9wL2ZpbmFsLXByb2plY3QvZnJvbnRlbmQvcGFnZXMvc2hvcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRW9CLEFBRzZCLEFBR1MsQUFJVCxBQUlFLEFBUUwsQUFNRyxBQUtuQixBQUVxQixBQUlPLEFBU0osZ0JBNUN2QixBQU9xQixBQWtCQSxFQWRULEFBcUJELE9BN0JPLEFBaUNMLEVBSGIsQ0FyQmdCLE9BSmhCLEFBa0JBLENBV29CLElBUnBCLENBekJBLENBU2dCLFFBZ0NTLElBUE4sRUF4QkYsZUFDSSxBQXdCSixFQVNsQixDQTdCZ0MsWUF1Qi9CLElBMUJBLHVCQWdDQSxvRkE1Qm1ELDhDQUNqQyxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL0d1aWRvL0Rlc2t0b3AvZmluYWwtcHJvamVjdC9mcm9udGVuZC9wYWdlcy9zaG9wLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmNsYXNzIFNob3AgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHsgcXVlcnkgfSkge1xuICAgIC8vIDEpIGdldCB0aGUgc2luZ2xlIFZFTkRPUlxuICAgIGNvbnN0IHJlc1ZlbmRvciA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC92ZW5kb3IvP3ZlbmRvcl9pZD0ke3F1ZXJ5LnZlbmRvcl9pZH1gXG4gICAgKTtcbiAgICBjb25zdCBkYXRhVmVuZG9yID0gYXdhaXQgcmVzVmVuZG9yLmpzb24oKTtcblxuICAgIC8vIDIpIGdldCBQUk9EVUNUUyBvZiBzaW5nbGUgdmVuZG9yXG4gICAgY29uc3QgcmVzUHJvZHVjdHMgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwOi8vbG9jYWxob3N0OjUwMDAvcHJvZHVjdHNWZW5kb3I/dmVuZG9yX2lkPSR7cXVlcnkudmVuZG9yX2lkfWBcbiAgICApO1xuICAgIGNvbnN0IGRhdGFQcm9kdWN0cyA9IGF3YWl0IHJlc1Byb2R1Y3RzLmpzb24oKTtcblxuICAgIHJldHVybiB7IHZlbmRvcjogZGF0YVZlbmRvciwgcHJvZHVjdHNWZW5kb3I6IGRhdGFQcm9kdWN0cyB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdmVuZG9yIH0gPSB0aGlzLnByb3BzOyAvLyBkZWN1c3RydWN0aW5nIHRoZSBvYmplY3RcbiAgICBjb25zdCB7IHByb2R1Y3RzVmVuZG9yIH0gPSB0aGlzLnByb3BzOyAvLyBkZWN1c3RydWN0aW5nIHRoZSBvYmplY3RcbiAgICBjb25zb2xlLmxvZyhwcm9kdWN0c1ZlbmRvcik7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wLWludHJvIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtgLi4vc3RhdGljL2ltYWdlcy8ke3ZlbmRvci5zaG9wX3VybH0tbG9nby5wbmdgfVxuICAgICAgICAgICAgd2lkdGg9XCIxODBweFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8aDE+QWJvdXQge3ZlbmRvci5uYW1lfTwvaDE+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS4gVXQgZW5pbVxuICAgICAgICAgICAgYWQgbWluaW0gdmVuaWFtLCBxdWlzIG5vc3RydWQgZXhlcmNpdGF0aW9uIHVsbGFtY28gbGFib3JpcyBuaXNpIHV0XG4gICAgICAgICAgICBhbGlxdWlwIGV4IGVhIGNvbW1vZG8gY29uc2VxdWF0LntcIiBcIn1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj57dmVuZG9yLm5hbWV9IFByb2R1Y3RzPC9oMj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicHJvZHVjdHMtc2VjdGlvbiBjb250YWluZXJcIj5cbiAgICAgICAgICB7cHJvZHVjdHNWZW5kb3IubWFwKHByb2R1Y3QgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRhaW5lciB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgIHNyYz17YC4uL3N0YXRpYy9pbWFnZXMvJHtwcm9kdWN0LnByb2R1Y3RfdXJsfS5qcGdgfVxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyNDBweFwiXG4gICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cIi4uL3N0YXRpYy9pbWFnZXMvcG9sbGVuLmpwZ1wiLz4gKi99XG5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwcm9kdWN0LW5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3Byb2R1Y3QubmFtZX08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPHA+e3Byb2R1Y3QucHJpY2V94oKsPC9wPlxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBhcz17YCR7cHJvZHVjdC5wcm9kdWN0X3VybH1gfVxuICAgICAgICAgICAgICAgICAgaHJlZj17YC9wcm9kdWN0Lz9wcm9kdWN0X2lkPSR7cHJvZHVjdC5wcm9kdWN0X2lkfWB9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHJvZHVjdC1saW5rXCI+UHJvZHVjdDwvYT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLnNob3AtaW50cm8ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIGgyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDYwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdHMtc2VjdGlvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwMHB4IDBweCByZ2JhKDEyLCA1LCA1LCAwLjMpO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC1jb250YWluZXIgaW1ne1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xKVxuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC1uYW1lIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3QtbGluayB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQ5NGU1O1xuICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA4cHggMjBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC1saW5rOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDhweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKVxuXG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNob3A7XG4iXX0= */\n/*@ sourceURL=/Users/Guido/Desktop/final-project/frontend/pages/shop.js */"));
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
//# sourceMappingURL=shop.js.53cf609b4a39c8e34af5.hot-update.js.map