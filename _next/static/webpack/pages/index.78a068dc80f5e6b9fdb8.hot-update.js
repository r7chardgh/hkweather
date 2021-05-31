self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./packages/sad-1.0.1/dist/SAD.esm.js":
/*!********************************************!*\
  !*** ./packages/sad-1.0.1/dist/SAD.esm.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": function() { return /* binding */ t; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var t = function t() {
  var t = {
    forceViewTrue: function forceViewTrue() {
      a = window.innerHeight;
    }
  },
      e = document.getElementsByTagName("div"),
      i = Object.values(e).filter(function (t) {
    return t.hasAttribute("data-sad");
  });
  var r = window.scrollY,
      n = !1,
      a = .6 * window.innerHeight;

  function o() {
    for (var t = null, e = [], o = 0; o < i.length; o++) {
      t = i[o], e[o] = t.offsetTop;
    }

    for (var u = 0; u < i.length; u++) {
      t = i[u], r > e[u] - a && "true" != t.getAttribute("data-view") ? t.setAttribute("data-view", "true") : r <= e[u] - a && "true" == t.getAttribute("data-view") && "forwards" != t.getAttribute("data-fill-mode") && t.setAttribute("data-view", "false");
    }

    n = !1;
  }

  return o(), window.addEventListener("scroll", function () {
    r = window.scrollY, n || (requestAnimationFrame(o), n = !0);
  }, !1), t;
};



;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_sun_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/sun.js */ "./src/containers/sun.js");
/* harmony import */ var _containers_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../containers/footer.js */ "./src/containers/footer.js");
/* harmony import */ var _packages_sad_1_0_1___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../packages/sad-1.0.1/ */ "./packages/sad-1.0.1/dist/SAD.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\R\\Documents\\coding\\design\\hkweather\\src\\pages\\index.js",
    _s = $RefreshSig$();






var __N_SSG = true;
function Home(_ref) {
  _s();

  var times = _ref.times;
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(function () {
    var options = (0,_packages_sad_1_0_1___WEBPACK_IMPORTED_MODULE_4__.init)();
    options.forceViewTrue();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "HK Weather"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "A simple design website integrated with HKO API and Unsplash API"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/icon/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/icon/apple-touch-icon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/icon/favicon-32x32.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/icon/favicon-16x16.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "manifest",
        href: "/icon/site.webmanifest"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_sun_js__WEBPACK_IMPORTED_MODULE_2__.default, {
      times: times,
      getTime: getCurrentTime
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_footer_js__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this)]
  }, void 0, true);
} //get current time

_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Home;

var getCurrentTime = function getCurrentTime() {
  var week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  var now = new Date();
  now.setUTCHours(now.getUTCHours() + 8);
  var result = {
    year: 0,
    month: 0,
    day: 0,
    weekday: "sun"
  };
  result.year = now.getUTCFullYear();
  result.month = now.getUTCMonth() + 1;
  result.day = now.getUTCDate();
  result.weekday = week[now.getDay()];
  return result;
}; //nextjs function - fetch data at build time on server side
//currently getStaticProps is not allowed to be used on layer component (e.g. sun.js)


var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFja2FnZXMvc2FkLTEuMC4xL2Rpc3QvU0FELmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInQiLCJmb3JjZVZpZXdUcnVlIiwiYSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpIiwiT2JqZWN0IiwidmFsdWVzIiwiZmlsdGVyIiwiaGFzQXR0cmlidXRlIiwiciIsInNjcm9sbFkiLCJuIiwibyIsImxlbmd0aCIsIm9mZnNldFRvcCIsInUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiSG9tZSIsInRpbWVzIiwidXNlRWZmZWN0Iiwib3B0aW9ucyIsImluaXQiLCJnZXRDdXJyZW50VGltZSIsIndlZWsiLCJub3ciLCJEYXRlIiwic2V0VVRDSG91cnMiLCJnZXRVVENIb3VycyIsInJlc3VsdCIsInllYXIiLCJtb250aCIsImRheSIsIndlZWtkYXkiLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwiZ2V0VVRDRGF0ZSIsImdldERheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxDQUFDLEdBQUMsYUFBVTtBQUFDLE1BQU1BLENBQUMsR0FBQztBQUFDQyxpQkFBYSxFQUFDLHlCQUFVO0FBQUNDLE9BQUMsR0FBQ0MsTUFBTSxDQUFDQyxXQUFUO0FBQXFCO0FBQS9DLEdBQVI7QUFBQSxNQUF5REMsQ0FBQyxHQUFDQyxRQUFRLENBQUNDLG9CQUFULENBQThCLEtBQTlCLENBQTNEO0FBQUEsTUFBZ0dDLENBQUMsR0FBQ0MsTUFBTSxDQUFDQyxNQUFQLENBQWNMLENBQWQsRUFBaUJNLE1BQWpCLENBQXlCLFVBQUFYLENBQUM7QUFBQSxXQUFFQSxDQUFDLENBQUNZLFlBQUYsQ0FBZSxVQUFm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MUI7QUFBNkJDLFdBQU8sRUFBRTtBQUF0QyxHQUFmO0FBQ0FKLFFBQU0sQ0FBQ0MsSUFBUCxHQUFjTCxHQUFHLENBQUNTLGNBQUosRUFBZDtBQUNBTCxRQUFNLENBQUNFLEtBQVAsR0FBZU4sR0FBRyxDQUFDVSxXQUFKLEtBQW9CLENBQW5DO0FBQ0FOLFFBQU0sQ0FBQ0csR0FBUCxHQUFhUCxHQUFHLENBQUNXLFVBQUosRUFBYjtBQUNBUCxRQUFNLENBQUNJLE9BQVAsR0FBaUJULElBQUksQ0FBQ0MsR0FBRyxDQUFDWSxNQUFKLEVBQUQsQ0FBckI7QUFDQSxTQUFPUixNQUFQO0FBQ0QsQ0FWRCxDLENBV0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43OGEwNjhkYzgwZjVlNmI5ZmRiOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdD1mdW5jdGlvbigpe2NvbnN0IHQ9e2ZvcmNlVmlld1RydWU6ZnVuY3Rpb24oKXthPXdpbmRvdy5pbm5lckhlaWdodH19LGU9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIiksaT1PYmplY3QudmFsdWVzKGUpLmZpbHRlcigodD0+dC5oYXNBdHRyaWJ1dGUoXCJkYXRhLXNhZFwiKSkpO3ZhciByPXdpbmRvdy5zY3JvbGxZLG49ITEsYT0uNip3aW5kb3cuaW5uZXJIZWlnaHQ7ZnVuY3Rpb24gbygpe2Zvcih2YXIgdD1udWxsLGU9W10sbz0wO288aS5sZW5ndGg7bysrKXQ9aVtvXSxlW29dPXQub2Zmc2V0VG9wO2Zvcih2YXIgdT0wO3U8aS5sZW5ndGg7dSsrKXQ9aVt1XSxyPmVbdV0tYSYmXCJ0cnVlXCIhPXQuZ2V0QXR0cmlidXRlKFwiZGF0YS12aWV3XCIpP3Quc2V0QXR0cmlidXRlKFwiZGF0YS12aWV3XCIsXCJ0cnVlXCIpOnI8PWVbdV0tYSYmXCJ0cnVlXCI9PXQuZ2V0QXR0cmlidXRlKFwiZGF0YS12aWV3XCIpJiZcImZvcndhcmRzXCIhPXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1maWxsLW1vZGVcIikmJnQuc2V0QXR0cmlidXRlKFwiZGF0YS12aWV3XCIsXCJmYWxzZVwiKTtuPSExfXJldHVybiBvKCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwoZnVuY3Rpb24oKXtyPXdpbmRvdy5zY3JvbGxZLG58fChyZXF1ZXN0QW5pbWF0aW9uRnJhbWUobyksbj0hMCl9KSwhMSksdH07ZXhwb3J0e3QgYXMgaW5pdH07XG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgU3VuIGZyb20gXCIuLi9jb250YWluZXJzL3N1bi5qc1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29udGFpbmVycy9mb290ZXIuanNcIjtcbmltcG9ydCB7aW5pdH0gZnJvbSBcIi4uLy4uL3BhY2thZ2VzL3NhZC0xLjAuMS9cIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgdGltZXMgfSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICBjb25zdCBvcHRpb25zID0gaW5pdCgpO1xuICAgICBvcHRpb25zLmZvcmNlVmlld1RydWUoKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhLIFdlYXRoZXI8L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIkEgc2ltcGxlIGRlc2lnbiB3ZWJzaXRlIGludGVncmF0ZWQgd2l0aCBIS08gQVBJIGFuZCBVbnNwbGFzaCBBUElcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pY29uL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgICAgICBzaXplcz1cIjE4MHgxODBcIlxuICAgICAgICAgIGhyZWY9XCIvaWNvbi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIzMngzMlwiXG4gICAgICAgICAgaHJlZj1cIi9pY29uL2Zhdmljb24tMzJ4MzIucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcbiAgICAgICAgICBocmVmPVwiL2ljb24vZmF2aWNvbi0xNngxNi5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvaWNvbi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxTdW4gdGltZXM9e3RpbWVzfSBnZXRUaW1lPXtnZXRDdXJyZW50VGltZX0gLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbi8vZ2V0IGN1cnJlbnQgdGltZVxuY29uc3QgZ2V0Q3VycmVudFRpbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHdlZWsgPSBbXCJzdW5cIiwgXCJtb25cIiwgXCJ0dWVcIiwgXCJ3ZWRcIiwgXCJ0aHVcIiwgXCJmcmlcIiwgXCJzYXRcIl07XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIG5vdy5zZXRVVENIb3Vycyhub3cuZ2V0VVRDSG91cnMoKSArIDgpO1xuICBjb25zdCByZXN1bHQgPSB7IHllYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDAsIHdlZWtkYXk6IFwic3VuXCIgfTtcbiAgcmVzdWx0LnllYXIgPSBub3cuZ2V0VVRDRnVsbFllYXIoKTtcbiAgcmVzdWx0Lm1vbnRoID0gbm93LmdldFVUQ01vbnRoKCkgKyAxO1xuICByZXN1bHQuZGF5ID0gbm93LmdldFVUQ0RhdGUoKTtcbiAgcmVzdWx0LndlZWtkYXkgPSB3ZWVrW25vdy5nZXREYXkoKV07XG4gIHJldHVybiByZXN1bHQ7XG59O1xuLy9uZXh0anMgZnVuY3Rpb24gLSBmZXRjaCBkYXRhIGF0IGJ1aWxkIHRpbWUgb24gc2VydmVyIHNpZGVcbi8vY3VycmVudGx5IGdldFN0YXRpY1Byb3BzIGlzIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgb24gbGF5ZXIgY29tcG9uZW50IChlLmcuIHN1bi5qcylcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5IH0gPSBnZXRDdXJyZW50VGltZSgpO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9kYXRhLndlYXRoZXIuZ292LmhrL3dlYXRoZXJBUEkvb3BlbmRhdGEvb3BlbmRhdGEucGhwP2RhdGFUeXBlPVNSUyZsYW5nPWVuJnJmb3JtYXQ9anNvbiZ5ZWFyPSR7eWVhcn0mbW9udGg9JHttb250aH0mZGF5PSR7ZGF5fWBcbiAgKTtcbiAgY29uc3QgdGltZXMgPSBhd2FpdCByZXMuanNvbigpO1xuICBpZiAoIXRpbWVzKVxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge30sXG4gICAgfTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyB0aW1lcyB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==