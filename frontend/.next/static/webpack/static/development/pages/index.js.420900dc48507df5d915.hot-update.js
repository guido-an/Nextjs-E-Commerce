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
      }, "h1.jsx-3477394893{text-transform:uppercase;padding:5px;}h2.jsx-3477394893{font-weight:700;text-align:center;margin-top:280px;padding-top:10px;}h3.jsx-3477394893{font-size:18px;color:#899095;position:relative;top:10px;font-weight:600;}.vendors-wrapper.jsx-3477394893{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-top:20px;margin-bottom:120px;box-shadow:13px -50px 36px 14px rgba(0,0,0,0.1);padding-top:40px;padding-bottom:80px;width:95%;border-radius:4px;}.divider.jsx-3477394893{border-top:3px solid #f7f7f7;width:180px;margin:10px auto;}.vendor-box.jsx-3477394893{margin:8px;width:100%;border-radius:4px;box-shadow:8px 8px 15px rgba(0,0,0,0.3);color:black;}.vendor-box-title.jsx-3477394893{background-color:#fff;opacity:0.8;color:#222;}.vendor-box-title.jsx-3477394893 a.jsx-3477394893{color:#222 !important;display:inline-block;padding-bottom:20px;}.title-hero.jsx-3477394893{margin-top:120px;padding:40px;}.title-hero.jsx-3477394893 span.jsx-3477394893{color:#2d94e5;}.title-hero.jsx-3477394893 p.jsx-3477394893{width:60%;margin:0 auto;}a.jsx-3477394893{color:# color:black;}a.jsx-3477394893:hover{-webkit-text-decoration:none;text-decoration:none;}@media only screen and (min-width:1200px){h1.jsx-3477394893{width:80%;margin:0 auto;}.vendor-box.jsx-3477394893{width:30%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9HdWlkby9EZXNrdG9wL05leHRqcy1FLUNvbW1lcmNlL2Zyb250ZW5kL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFFVyxBQUd3QyxBQU9ULEFBT0QsQUFRRixBQVljLEFBTWhCLEFBU1csQUFNRCxBQU1KLEFBTUgsQUFHSixBQU1XLEFBR0EsQUFLVCxBQUlBLFVBakJFLEFBY0EsQUFJZCxDQWhEVyxHQTJCYixDQXJEZ0IsQ0FQSSxDQXNETCxHQWVmLEVBbkNvQixBQVFOLEFBTVEsRUFpQnRCLEFBYUUsQ0FyRlksSUFlTSxBQW1CUixDQTRCWixJQXREbUIsQUEyQ3BCLEdBakRDLEdBd0M2QyxDQVA1QixFQXNCbkIsRUFORSxFQW5DVyxHQStEWCxDQXRFbUIsS0FRRCxFQW9CcEIsS0FvQkMsS0E5Q0MsSUFPQSxFQUlpQixNQXFCSCxZQUVkLHVDQXRCK0IsMkhBQ2IsZ0JBQ0ksb0JBQytCLGdEQUNsQyxpQkFDRSxvQkFDVCxVQUViLGtCQUFDIiwiZmlsZSI6Ii9Vc2Vycy9HdWlkby9EZXNrdG9wL05leHRqcy1FLUNvbW1lcmNlL2Zyb250ZW5kL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBJbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gIC8vIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoKSB7XG4gIC8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvdmVuZG9yc1wiKTsgLy8gZ2V0IHRoZSB2ZW5kb3JzIEFQSSBmcm9tIGJhY2tlbmQgcm91dGVzL2luZGV4LmpzXG4gIC8vICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7IC8vIHN0b3JlIHRoZSByZXN1bHRcbiAgLy8gICByZXR1cm4geyB2ZW5kb3JzOiBkYXRhIH07IC8vIHJldHVybiB0aGUgcmVzdWx0XG4gIC8vIH1cbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMC92ZW5kb3JzJykgLy8gZ2V0IHRoZSB2ZW5kb3JzIEFQSSBmcm9tIGJhY2tlbmQgcm91dGVzL2luZGV4LmpzXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCkgLy8gc3RvcmUgdGhlIHJlc3VsdFxuICAgIHJldHVybiB7IHZlbmRvcnM6IGRhdGEgfSAvLyByZXR1cm4gdGhlIHJlc3VsdFxuICB9XG5cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHZlbmRvcnMgfSA9IHRoaXMucHJvcHMgLy8gZGVjdXN0cnVjdGluZyB0aGUgb2JqZWN0XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgey8qIHNob3cgYWxsIHZlbmRvcnMgaW5mb3JtYXRpb24gKi99XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndGl0bGUtaGVybyBjb250YWluZXIgdGV4dC1jZW50ZXInPlxuICAgICAgICAgIHsvKiA8aDM+TG9yZW0uIElwc3VtLiBEb2xvcmV0LjwvaDM+ICovfVxuICAgICAgICAgIDxoMT5cbiAgICAgICAgICBXaGVyZSBMb2NhbCA8c3Bhbj4gVmVuZG9yczwvc3Bhbj4gTWVldFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpdmlkZXInIC8+XG5cbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvXG4gICAgICAgICAgICBlaXVzbW9kIHRlbXBvciBpbmNpZGlkdW50IHV0IGxhYm9yZSBldCBkb2xvcmUgbWFnbmEgYWxpcXVhLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndmVuZG9ycy13cmFwcGVyIGNvbnRhaW5lci1mbHVpZCc+XG4gICAgICAgICAge3ZlbmRvcnMubWFwKHZlbmRvciA9PiB7XG4gICAgICAgICAgICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSB7XG4gICAgICAgICAgICAgIC8vIGJhY2tncm91bmRJbWFnZTogYHVybCgnL3N0YXRpYy9pbWFnZXMvJHt2ZW5kb3Iuc2hvcF91cmx9LmpwZWcnKWAsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxuICAgICAgICAgICAgICBoZWlnaHQ6ICc0MDBweCcsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBgbGluZWFyLWdyYWRpZW50KCB0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC4wKSwgcmdiYSgwLCAwLCAwLCAwLjIpKSwgdXJsKCcvc3RhdGljL2ltYWdlcy8ke1xuICAgICAgICAgICAgICAgIHZlbmRvci5zaG9wX3VybFxuICAgICAgICAgICAgICB9LmpwZycpYFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXt2ZW5kb3IudmVuZG9yX2lkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndmVuZG9yLWJveCB0ZXh0LWNlbnRlcidcbiAgICAgICAgICAgICAgICBzdHlsZT17YmFja2dyb3VuZEltYWdlfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZlbmRvci1ib3gtdGl0bGUnPlxuICAgICAgICAgICAgICAgICAgPGgyPnt2ZW5kb3IubmFtZX08L2gyPlxuXG4gICAgICAgICAgICAgICAgICB7LyogbGluayB0byByZWxhdGl2ZSBzaG9wIHBhZ2UgaW5mb3JtYXRpb24gKi99XG4gICAgICAgICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICAgICAgICBhcz17YC8ke3ZlbmRvci5zaG9wX3VybH1gfVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgL3Nob3AvP3ZlbmRvcl9pZD0ke3ZlbmRvci52ZW5kb3JfaWR9YH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGE+PiBWZW5kb3IgU2hvcDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgIHtgXG4gICAgICAgICAgICBoMSB7XG4gICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjgwcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjODk5MDk1O1xuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgIHRvcDogMTBweDtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnZlbmRvcnMtd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEyMHB4O1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAxM3B4IC01MHB4IDM2cHggMTRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTo4MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogOTUlO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5kaXZpZGVye1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkICNmN2Y3Zjc7XG4gICAgICAgICAgICB3aWR0aDogMTgwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICAgIC52ZW5kb3ItYm94IHtcbiAgICAgICAgICAgICAgbWFyZ2luOiA4cHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICAgIGJveC1zaGFkb3c6IDhweCA4cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgICAgICAudmVuZG9yLWJveC10aXRsZSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICAgICAgICAgICAgY29sb3I6ICMyMjJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgIC52ZW5kb3ItYm94LXRpdGxlIGF7XG4gICAgICAgICAgICAgY29sb3I6ICMyMjIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHhcbiAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudGl0bGUtaGVybyB7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEyMHB4O1xuICAgICAgICAgICAgICBwYWRkaW5nOiA0MHB4O1xuICAgICAgICAgICAgfVxuICAgICAgIFxuICAgICAgICAgIFxuICAgICAgICAgICAgLnRpdGxlLWhlcm8gc3BhbiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMmQ5NGU1O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRpdGxlLWhlcm8gcCB7XG4gICAgICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgY29sb3I6ICMgY29sb3I6IGJsYWNrOztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgICAgICAgIGgxe1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC52ZW5kb3ItYm94IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJbmRleFxuIl19 */\n/*@ sourceURL=/Users/Guido/Desktop/Nextjs-E-Commerce/frontend/pages/index.js */"));
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
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_8___default()('http://localhost:5000/vendors');

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

/***/ })

})
//# sourceMappingURL=index.js.420900dc48507df5d915.hot-update.js.map