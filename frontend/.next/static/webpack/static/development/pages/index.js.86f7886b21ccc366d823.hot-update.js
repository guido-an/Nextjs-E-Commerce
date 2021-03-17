webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
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







var _jsxFileName = "/Users/Guido/Desktop/Nextjs-E-Commerce/frontend/pages/index.js";






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
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("section", {
        className: "jsx-3477394893" + " " + 'title-hero container text-center',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h1", {
        className: "jsx-3477394893",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Where Local ", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("span", {
        className: "jsx-3477394893",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, " Vendors"), " Meet", react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3477394893" + " " + 'divider',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("p", {
        className: "jsx-3477394893",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
        className: "jsx-3477394893" + " " + 'vendors-wrapper container-fluid',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, vendors.map(function (vendor) {
        var backgroundImage = {
          // backgroundImage: `url('/static/images/${vendor.shop_url}.jpeg')`,
          backgroundRepeat: 'no-repeat',
          height: '400px',
          backgroundSize: 'cover',
          background: "linear-gradient( to bottom, rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.2)), url('/static/images/".concat(vendor.shop_url, ".jpg')")
        };
        return react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          key: vendor.vendor_id,
          style: backgroundImage,
          className: "jsx-3477394893" + " " + 'vendor-box text-center',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("div", {
          className: "jsx-3477394893" + " " + 'vendor-box-title',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("h2", {
          className: "jsx-3477394893",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          },
          __self: this
        }, vendor.name), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          as: "/".concat(vendor.shop_url),
          href: "/shop/?vendor_id=".concat(vendor.vendor_id),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement("a", {
          className: "jsx-3477394893",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, "> Vendor Shop"))));
      })), react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3477394893",
        __self: this
      }, "h1.jsx-3477394893{text-transform:uppercase;padding:5px;}h2.jsx-3477394893{font-weight:700;text-align:center;margin-top:280px;padding-top:10px;}h3.jsx-3477394893{font-size:18px;color:#899095;position:relative;top:10px;font-weight:600;}.vendors-wrapper.jsx-3477394893{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:20px;margin-bottom:120px;box-shadow:13px -50px 36px 14px rgba(0,0,0,0.1);padding-top:40px;padding-bottom:80px;width:95%;border-radius:4px;}.divider.jsx-3477394893{border-top:3px solid #f7f7f7;width:180px;margin:10px auto;}.vendor-box.jsx-3477394893{margin:8px;width:100%;border-radius:4px;box-shadow:8px 8px 15px rgba(0,0,0,0.3);color:black;}.vendor-box-title.jsx-3477394893{background-color:#fff;opacity:0.8;color:#222;}.vendor-box-title.jsx-3477394893 a.jsx-3477394893{color:#222 !important;display:inline-block;padding-bottom:20px;}.title-hero.jsx-3477394893{margin-top:120px;padding:40px;}.title-hero.jsx-3477394893 span.jsx-3477394893{color:#2d94e5;}.title-hero.jsx-3477394893 p.jsx-3477394893{width:60%;margin:0 auto;}a.jsx-3477394893{color:# color:black;}a.jsx-3477394893:hover{-webkit-text-decoration:none;text-decoration:none;}@media only screen and (min-width:1200px){h1.jsx-3477394893{width:80%;margin:0 auto;}.vendor-box.jsx-3477394893{width:30%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HdWlkby9EZXNrdG9wL05leHRqcy1FLUNvbW1lcmNlL2Zyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFVyxBQUd3QyxBQU9ULEFBT0QsQUFRRixBQVljLEFBTWhCLEFBU1csQUFNRCxBQU1KLEFBTUgsQUFHSixBQU1XLEFBR0EsQUFLVCxBQUlBLFVBakJFLEFBY0EsQUFJZCxDQWhEVyxHQTJCYixDQXJEZ0IsQ0FQSSxDQXNETCxHQWVmLEVBbkNvQixBQVFOLEFBTVEsRUFpQnRCLEFBYUUsQ0FyRlksSUFlTSxBQW1CUixDQTRCWixJQXREbUIsQUEyQ3BCLEdBakRDLEdBd0M2QyxDQVA1QixFQXNCbkIsRUFORSxFQW5DVyxHQStEWCxDQXRFbUIsS0FRRCxFQW9CcEIsS0FvQkMsS0E5Q0MsSUFPQSxFQUlpQixNQXFCSCxZQUVkLHVDQXRCK0IsMkhBQ2IsZ0JBQ0ksb0JBQytCLGdEQUNsQyxpQkFDRSxvQkFDVCxVQUViLGtCQUFDIiwiZmlsZSI6Ii9Vc2Vycy9HdWlkby9EZXNrdG9wL05leHRqcy1FLUNvbW1lcmNlL2Zyb250ZW5kL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgLy8gc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcbiAgLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC92ZW5kb3JzXCIpOyAvLyBnZXQgdGhlIHZlbmRvcnMgQVBJIGZyb20gYmFja2VuZCByb3V0ZXMvaW5kZXguanNcbiAgLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTsgLy8gc3RvcmUgdGhlIHJlc3VsdFxuICAvLyAgIHJldHVybiB7IHZlbmRvcnM6IGRhdGEgfTsgLy8gcmV0dXJuIHRoZSByZXN1bHRcbiAgLy8gfVxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzICgpIHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwcm9jZXNzLmVudi5NT05ET0RCX1VSSSArICcvdmVuZG9ycycpIC8vIGdldCB0aGUgdmVuZG9ycyBBUEkgZnJvbSBiYWNrZW5kIHJvdXRlcy9pbmRleC5qc1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpIC8vIHN0b3JlIHRoZSByZXN1bHRcbiAgICByZXR1cm4geyB2ZW5kb3JzOiBkYXRhIH0gLy8gcmV0dXJuIHRoZSByZXN1bHRcbiAgfVxuXG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyB2ZW5kb3JzIH0gPSB0aGlzLnByb3BzIC8vIGRlY3VzdHJ1Y3RpbmcgdGhlIG9iamVjdFxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIHsvKiBzaG93IGFsbCB2ZW5kb3JzIGluZm9ybWF0aW9uICovfVxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3RpdGxlLWhlcm8gY29udGFpbmVyIHRleHQtY2VudGVyJz5cbiAgICAgICAgICB7LyogPGgzPkxvcmVtLiBJcHN1bS4gRG9sb3JldC48L2gzPiAqL31cbiAgICAgICAgICA8aDE+XG4gICAgICAgICAgV2hlcmUgTG9jYWwgPHNwYW4+IFZlbmRvcnM8L3NwYW4+IE1lZXRcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkaXZpZGVyJyAvPlxuXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQsIHNlZCBkb1xuICAgICAgICAgICAgZWl1c21vZCB0ZW1wb3IgaW5jaWRpZHVudCB1dCBsYWJvcmUgZXQgZG9sb3JlIG1hZ25hIGFsaXF1YS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZlbmRvcnMtd3JhcHBlciBjb250YWluZXItZmx1aWQnPlxuICAgICAgICAgIHt2ZW5kb3JzLm1hcCh2ZW5kb3IgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0ge1xuICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJy9zdGF0aWMvaW1hZ2VzLyR7dmVuZG9yLnNob3BfdXJsfS5qcGVnJylgLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAnNDAwcHgnLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogYGxpbmVhci1ncmFkaWVudCggdG8gYm90dG9tLCByZ2JhKDAsIDAsIDAsIDAuMCksIHJnYmEoMCwgMCwgMCwgMC4yKSksIHVybCgnL3N0YXRpYy9pbWFnZXMvJHtcbiAgICAgICAgICAgICAgICB2ZW5kb3Iuc2hvcF91cmxcbiAgICAgICAgICAgICAgfS5qcGcnKWBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17dmVuZG9yLnZlbmRvcl9pZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3ZlbmRvci1ib3ggdGV4dC1jZW50ZXInXG4gICAgICAgICAgICAgICAgc3R5bGU9e2JhY2tncm91bmRJbWFnZX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2ZW5kb3ItYm94LXRpdGxlJz5cbiAgICAgICAgICAgICAgICAgIDxoMj57dmVuZG9yLm5hbWV9PC9oMj5cblxuICAgICAgICAgICAgICAgICAgey8qIGxpbmsgdG8gcmVsYXRpdmUgc2hvcCBwYWdlIGluZm9ybWF0aW9uICovfVxuICAgICAgICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgICAgICAgYXM9e2AvJHt2ZW5kb3Iuc2hvcF91cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YC9zaG9wLz92ZW5kb3JfaWQ9JHt2ZW5kb3IudmVuZG9yX2lkfWB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxhPj4gVmVuZG9yIFNob3A8L2E+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICB7YFxuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI4MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGgzIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzg5OTA5NTtcbiAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICB0b3A6IDEwcHg7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC52ZW5kb3JzLXdyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMjBweDtcbiAgICAgICAgICAgICAgYm94LXNoYWRvdzogMTNweCAtNTBweCAzNnB4IDE0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206ODBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDk1JTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGl2aWRlcntcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjZjdmN2Y3O1xuICAgICAgICAgICAgd2lkdGg6IDE4MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IGF1dG87XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICAgICAgICAudmVuZG9yLWJveCB7XG4gICAgICAgICAgICAgIG1hcmdpbjogOHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiA4cHggOHB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICAgICAgLnZlbmRvci1ib3gtdGl0bGUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMjIyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgIFxuICAgICAgICAgICAudmVuZG9yLWJveC10aXRsZSBhe1xuICAgICAgICAgICAgIGNvbG9yOiAjMjIyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4XG4gICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRpdGxlLWhlcm8ge1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMjBweDtcbiAgICAgICAgICAgICAgcGFkZGluZzogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICBcbiAgICAgICAgICBcbiAgICAgICAgICAgIC50aXRsZS1oZXJvIHNwYW4ge1xuICAgICAgICAgICAgICBjb2xvcjogIzJkOTRlNTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50aXRsZS1oZXJvIHAge1xuICAgICAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjIGNvbG9yOiBibGFjazs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhOmhvdmVyIHtcbiAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICAgICAgICAgICBoMXtcbiAgICAgICAgICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAudmVuZG9yLWJveCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXhcbiJdfQ== */\n/*@ sourceURL=/Users/Guido/Desktop/Nextjs-E-Commerce/frontend/pages/index.js */"));
    }
  }], [{
    key: "getInitialProps",
    // static async getInitialProps() {
    //   const res = await fetch("http://localhost:5000/vendors"); // get the vendors API from backend routes/index.js
    //   const data = await res.json(); // store the result
    //   return { vendors: data }; // return the result
    // }
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
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()(process.env.MONDODB_URI + '/vendors');

              case 2:
                res = _context.sent;
                _context.next = 5;
                return res.json();

              case 5:
                data = _context.sent;
                return _context.abrupt("return", {
                  vendors: data // return the result

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=index.js.86f7886b21ccc366d823.hot-update.js.map