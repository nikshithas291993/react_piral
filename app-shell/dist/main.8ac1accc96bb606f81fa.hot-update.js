"use strict";
self["webpackHotUpdateapp_shell"]("main",{

/***/ "./src/layout.tsx":
/*!************************!*\
  !*** ./src/layout.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   errors: () => (/* binding */ errors),
/* harmony export */   layout: () => (/* binding */ layout)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! piral */ "./node_modules/piral-core/esm/components/SwitchErrorInfo.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! piral */ "./node_modules/piral-notifications/esm/Notifications.js");
/* harmony import */ var piral__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! piral */ "./node_modules/piral-menu/esm/Menu.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var MenuItem = function MenuItem(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
    className: "nav-item"
  }, children);
};
var errors = {
  not_found: function not_found() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
      className: "error"
    }, "Could not find the requested page. Are you sure it exists?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", null, "Go back ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, {
      to: "/"
    }, "to the dashboard"), "."));
  }
};
var layout = {
  ErrorInfo: function ErrorInfo(props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, "Error"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(piral__WEBPACK_IMPORTED_MODULE_2__.SwitchErrorInfo, Object.assign({}, props)));
  },
  DashboardContainer: function DashboardContainer(_ref2) {
    var children = _ref2.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "main-container -app-shell"
    }, children);
  },
  Layout: function Layout(_ref3) {
    var children = _ref3.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(piral__WEBPACK_IMPORTED_MODULE_3__.Notifications, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(piral__WEBPACK_IMPORTED_MODULE_4__.Menu, {
      type: "general"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "container"
    }, children));
  },
  MenuContainer: function MenuContainer(_ref4) {
    var children = _ref4.children;
    var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(true),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      collapsed = _React$useState2[0],
      setCollapsed = _React$useState2[1];
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
      className: "-app-shell"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", {
      className: "navbar navbar-light navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeProvider, {
      theme: defaultTheme
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Box, {
      sx: {
        display: 'flex'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(CssBaseline, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(AppBar, {
      position: "absolute",
      open: open
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Toolbar, {
      sx: {
        pr: '24px' // keep right padding when drawer closed
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconButton, {
      edge: "start",
      color: "inherit",
      "aria-label": "open drawer",
      onClick: toggleDrawer,
      sx: Object.assign({
        marginRight: '36px'
      }, open && {
        display: 'none'
      })
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MenuIcon, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Typography, {
      component: "h1",
      variant: "h6",
      color: "inherit",
      noWrap: true,
      sx: {
        flexGrow: 1
      }
    }, "Dashboard"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {
      "aria-label": "Toggle navigation",
      type: "button",
      onClick: function onClick() {
        return setCollapsed(!collapsed);
      },
      className: "navbar-toggler mr-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      className: "navbar-toggler-icon"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "collapse navbar-collapse d-sm-inline-flex flex-sm-row-reverse ".concat(collapsed ? '' : 'show'),
      "aria-expanded": !collapsed
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "navbar-nav flex-grow"
    }, children))))), "); }, MenuItem, };"))));
  }
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6034c5a50cebfb1d4892")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=main.8ac1accc96bb606f81fa.hot-update.js.map