webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/Users/Guido/Desktop/final-project/frontend/pages/index.js";






var Index =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Index, _Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, [{
    key: "render",
    value: function render() {
      var vendors = this.props.vendors; // decustructing the object

      return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-3846533216" + " " + "title-hero container text-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        className: "jsx-3846533216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, "Where local ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "jsx-3846533216",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, " vendors"), " meet")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3846533216" + " " + "vendors-wrapper container-fluid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, vendors.map(function (vendor) {
        var backgroundImage = {
          // backgroundImage: `url('/static/images/${vendor.shop_url}.jpeg')`,
          backgroundRepeat: "no-repeat",
          height: "400px",
          backgroundSize: "cover",
          background: "linear-gradient( to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.2)), url('/static/images/".concat(vendor.shop_url, ".jpeg')")
        };
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          key: vendor.vendor_id,
          style: backgroundImage,
          className: "jsx-3846533216" + " " + "vendor-box text-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          className: "jsx-3846533216" + " " + "vendor-box-title",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", {
          className: "jsx-3846533216",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, vendor.name), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          as: "".concat(vendor.shop_url),
          href: "/shop/?vendor_id=".concat(vendor.vendor_id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
          className: "jsx-3846533216",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, "> Vendor Shop"))));
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3846533216",
        __self: this
      }, "h1.jsx-3846533216{text-transform:uppercase;padding:5px;border-bottom:3px solid #fafafa;}h2.jsx-3846533216{font-weight:700;text-align:center;margin-top:280px;padding-top:10px;}h3.jsx-3846533216{font-size:18px;color:#899095;position:relative;top:10px;font-weight:600;}.vendors-wrapper.jsx-3846533216{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:20px;margin-bottom:180px;}.vendor-box.jsx-3846533216{margin:8px;width:100%;border-radius:4px;box-shadow:0px 0px 10px 0px rgba(12,5,5,0.6);color:black;}.vendor-box-title.jsx-3846533216{background-color:#fff;opacity:0.8;color:#222;}.vendor-box-title.jsx-3846533216 a.jsx-3846533216{color:#222 !important;display:inline-block;padding-bottom:20px;}.title-hero.jsx-3846533216{margin-top:120px;padding:40px;}.title-hero.jsx-3846533216 span.jsx-3846533216{color:#2d94e5;}.title-hero.jsx-3846533216 p.jsx-3846533216{width:70%;margin:0 auto;}a.jsx-3846533216{color:# color:black;}a.jsx-3846533216:hover{-webkit-text-decoration:none;text-decoration:none;}@media only screen and (min-width:768px){h1.jsx-3846533216{width:80%;margin:0 auto;}.vendor-box.jsx-3846533216{width:30%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HdWlkby9EZXNrdG9wL2ZpbmFsLXByb2plY3QvZnJvbnRlbmQvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOERXLEFBR3dDLEFBT1QsQUFPRCxBQVFGLEFBT0YsQUFPVyxBQU1ELEFBTUosQUFJSCxBQUdKLEFBTVcsQUFHQSxBQUtULEFBSUEsVUFqQkUsQUFjQSxBQUlkLENBNUNXLEdBdUJiLENBdENnQixDQVBJLENBeUNMLEdBYWYsRUEvQm9CLEFBTU4sQUFNUSxFQWV0QixBQWFFLENBdEVZLElBZU0sQ0FrQ3BCLElBekNtQixBQThCcEIsR0FyQ21DLEdBOEJnQixHQWFwRCxFQU5FLEVBdEJXLEdBZ0RYLENBdkRtQixLQVFELE9BMkJuQixLQWpDQyxDQVJBLEdBZUEsRUFJaUIsV0FVSCxZQUNkLGtDQVZ5QixtR0FDUCxnQkFDSSxvQkFDdEIiLCJmaWxlIjoiL1VzZXJzL0d1aWRvL0Rlc2t0b3AvZmluYWwtcHJvamVjdC9mcm9udGVuZC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL0xheW91dFwiO1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvdmVuZG9yc1wiKTsgLy8gZ2V0IHRoZSB2ZW5kb3JzIEFQSSBmcm9tIGJhY2tlbmQgcm91dGVzL2luZGV4LmpzXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7IC8vIHN0b3JlIHRoZSByZXN1bHRcbiAgICByZXR1cm4geyB2ZW5kb3JzOiBkYXRhIH07IC8vIHJldHVybiB0aGUgcmVzdWx0XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyB2ZW5kb3JzIH0gPSB0aGlzLnByb3BzOyAvLyBkZWN1c3RydWN0aW5nIHRoZSBvYmplY3RcblxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICB7Lyogc2hvdyBhbGwgdmVuZG9ycyBpbmZvcm1hdGlvbiAqL31cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGl0bGUtaGVybyBjb250YWluZXIgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICB7LyogPGgzPkxvcmVtLiBJcHN1bS4gRG9sb3JldC48L2gzPiAqL31cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgICBXaGVyZSBsb2NhbCA8c3Bhbj4gdmVuZG9yczwvc3Bhbj4gbWVldFxuICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgey8qIDxwPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXG4gICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZS57XCIgXCJ9XG4gICAgICAgICAgPC9wPiAqL31cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlbmRvcnMtd3JhcHBlciBjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICB7dmVuZG9ycy5tYXAodmVuZG9yID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhY2tncm91bmRJbWFnZSA9IHtcbiAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZEltYWdlOiBgdXJsKCcvc3RhdGljL2ltYWdlcy8ke3ZlbmRvci5zaG9wX3VybH0uanBlZycpYCxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZFJlcGVhdDogXCJuby1yZXBlYXRcIixcbiAgICAgICAgICAgICAgaGVpZ2h0OiBcIjQwMHB4XCIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiBcImNvdmVyXCIsXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGBsaW5lYXItZ3JhZGllbnQoIHRvIGJvdHRvbSwgcmdiYSgwLCAwLCAwLCAwLjApLCByZ2JhKDAsIDAsIDAsIDAuMikpLCB1cmwoJy9zdGF0aWMvaW1hZ2VzLyR7XG4gICAgICAgICAgICAgICAgdmVuZG9yLnNob3BfdXJsXG4gICAgICAgICAgICAgIH0uanBlZycpYCxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e3ZlbmRvci52ZW5kb3JfaWR9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidmVuZG9yLWJveCB0ZXh0LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgc3R5bGU9e2JhY2tncm91bmRJbWFnZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVuZG9yLWJveC10aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgPGgyPnt2ZW5kb3IubmFtZX08L2gyPlxuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIHsvKiBsaW5rIHRvIHJlbGF0aXZlIHNob3AgcGFnZSBpbmZvcm1hdGlvbiAqL31cbiAgICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICAgIGFzPXtgJHt2ZW5kb3Iuc2hvcF91cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9zaG9wLz92ZW5kb3JfaWQ9JHt2ZW5kb3IudmVuZG9yX2lkfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxhPj4gVmVuZG9yIFNob3A8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAge2BcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2ZhZmFmYTtcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjgwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjODk5MDk1O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnZlbmRvcnMtd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE4MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnZlbmRvci1ib3gge1xuICAgICAgICAgICAgICBtYXJnaW46IDhweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDBweCByZ2JhKDEyLCA1LCA1LCAwLjYpO1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudmVuZG9yLWJveC10aXRsZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgY29sb3I6ICMyMjJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgIC52ZW5kb3ItYm94LXRpdGxlIGF7XG4gICAgICAgICAgICAgY29sb3I6ICMyMjIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHhcbiAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGl0bGUtaGVybyB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEyMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpdGxlLWhlcm8gc3BhbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMmQ5NGU1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpdGxlLWhlcm8gcCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMgY29sb3I6IGJsYWNrOztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgICAgaDF7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLnZlbmRvci1ib3gge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/Guido/Desktop/final-project/frontend/pages/index.js */"));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()("http://localhost:5000/vendors");

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                data = _context.sent;
                return _context.abrupt("return", {
                  vendors: data
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_11__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.b3dab720bb9f9c4630ed.hot-update.js.map