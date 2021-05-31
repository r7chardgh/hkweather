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
  var t = !1;
  var e = {
    forceViewTrue: function forceViewTrue() {
      t = !0, console.log(a);
    }
  },
      r = document.getElementsByTagName("div"),
      i = Object.values(r).filter(function (t) {
    return t.hasAttribute("data-sad");
  });
  var n = window.scrollY,
      o = !1,
      a = .6 * window.innerHeight;

  function u() {
    for (var t = null, e = [], r = 0; r < i.length; r++) {
      t = i[r], e[r] = t.offsetTop;
    }

    for (var u = 0; u < i.length; u++) {
      t = i[u], n > e[u] - a && "true" != t.getAttribute("data-view") ? t.setAttribute("data-view", "true") : n <= e[u] - a && "true" == t.getAttribute("data-view") && "forwards" != t.getAttribute("data-fill-mode") && t.setAttribute("data-view", "false");
    }

    o = !1;
  }

  return t && (a = window.innerHeight), u(), window.addEventListener("scroll", function () {
    n = window.scrollY, o || (requestAnimationFrame(u), o = !0);
  }, !1), e;
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
    console.log(options.forceViewTrue);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "HK Weather"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "A simple design website integrated with HKO API and Unsplash API"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/icon/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/icon/apple-touch-icon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/icon/favicon-32x32.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/icon/favicon-16x16.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "manifest",
        href: "/icon/site.webmanifest"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_sun_js__WEBPACK_IMPORTED_MODULE_2__.default, {
      times: times,
      getTime: getCurrentTime
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_footer_js__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFja2FnZXMvc2FkLTEuMC4xL2Rpc3QvU0FELmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInQiLCJlIiwiZm9yY2VWaWV3VHJ1ZSIsImNvbnNvbGUiLCJsb2ciLCJhIiwiciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpIiwiT2JqZWN0IiwidmFsdWVzIiwiZmlsdGVyIiwiaGFzQXR0cmlidXRlIiwibiIsIndpbmRvdyIsInNjcm9sbFkiLCJvIiwiaW5uZXJIZWlnaHQiLCJ1IiwibGVuZ3RoIiwib2Zmc2V0VG9wIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkhvbWUiLCJ0aW1lcyIsInVzZUVmZmVjdCIsIm9wdGlvbnMiLCJpbml0IiwiZ2V0Q3VycmVudFRpbWUiLCJ3ZWVrIiwibm93IiwiRGF0ZSIsInNldFVUQ0hvdXJzIiwiZ2V0VVRDSG91cnMiLCJyZXN1bHQiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJ3ZWVrZGF5IiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJnZXREYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsQ0FBQyxHQUFDLGFBQVU7QUFBQyxNQUFJQSxDQUFDLEdBQUMsQ0FBQyxDQUFQO0FBQVMsTUFBTUMsQ0FBQyxHQUFDO0FBQUNDLGlCQUFhLEVBQUMseUJBQVU7QUFBQ0YsT0FBQyxHQUFDLENBQUMsQ0FBSCxFQUFLRyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsQ0FBWixDQUFMO0FBQW9CO0FBQTlDLEdBQVI7QUFBQSxNQUF3REMsQ0FBQyxHQUFDQyxRQUFRLENBQUNDLG9CQUFULENBQThCLEtBQTlCLENBQTFEO0FBQUEsTUFBK0ZDLENBQUMsR0FBQ0MsTUFBTSxDQUFDQyxNQUFQ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QUFiO0FBQ0EsTUFBTUMsR0FBRyxHQUFHLElBQUlDLElBQUosRUFBWjtBQUNBRCxLQUFHLENBQUNFLFdBQUosQ0FBZ0JGLEdBQUcsQ0FBQ0csV0FBSixLQUFvQixDQUFwQztBQUNBLE1BQU1DLE1BQU0sR0FBRztBQUFFQyxRQUFJLEVBQUUsQ0FBUjtBQUFXQyxTQUFLLEVBQUUsQ0FBbEI7QUFBcUJDLE9BQUcsRUFBRSxDQUExQjtBQUE2QkMsV0FBTyxFQUFFO0FBQXRDLEdBQWY7QUFDQUosUUFBTSxDQUFDQyxJQUFQLEdBQWNMLEdBQUcsQ0FBQ1MsY0FBSixFQUFkO0FBQ0FMLFFBQU0sQ0FBQ0UsS0FBUCxHQUFlTixHQUFHLENBQUNVLFdBQUosS0FBb0IsQ0FBbkM7QUFDQU4sUUFBTSxDQUFDRyxHQUFQLEdBQWFQLEdBQUcsQ0FBQ1csVUFBSixFQUFiO0FBQ0FQLFFBQU0sQ0FBQ0ksT0FBUCxHQUFpQlQsSUFBSSxDQUFDQyxHQUFHLENBQUNZLE1BQUosRUFBRCxDQUFyQjtBQUNBLFNBQU9SLE1BQVA7QUFDRCxDQVZELEMsQ0FXQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjJhZDkwOTE1ZWUxYzMyYTEyMTkxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0PWZ1bmN0aW9uKCl7dmFyIHQ9ITE7Y29uc3QgZT17Zm9yY2VWaWV3VHJ1ZTpmdW5jdGlvbigpe3Q9ITAsY29uc29sZS5sb2coYSl9fSxyPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpLGk9T2JqZWN0LnZhbHVlcyhyKS5maWx0ZXIoKHQ9PnQuaGFzQXR0cmlidXRlKFwiZGF0YS1zYWRcIikpKTt2YXIgbj13aW5kb3cuc2Nyb2xsWSxvPSExLGE9LjYqd2luZG93LmlubmVySGVpZ2h0O2Z1bmN0aW9uIHUoKXtmb3IodmFyIHQ9bnVsbCxlPVtdLHI9MDtyPGkubGVuZ3RoO3IrKyl0PWlbcl0sZVtyXT10Lm9mZnNldFRvcDtmb3IodmFyIHU9MDt1PGkubGVuZ3RoO3UrKyl0PWlbdV0sbj5lW3VdLWEmJlwidHJ1ZVwiIT10LmdldEF0dHJpYnV0ZShcImRhdGEtdmlld1wiKT90LnNldEF0dHJpYnV0ZShcImRhdGEtdmlld1wiLFwidHJ1ZVwiKTpuPD1lW3VdLWEmJlwidHJ1ZVwiPT10LmdldEF0dHJpYnV0ZShcImRhdGEtdmlld1wiKSYmXCJmb3J3YXJkc1wiIT10LmdldEF0dHJpYnV0ZShcImRhdGEtZmlsbC1tb2RlXCIpJiZ0LnNldEF0dHJpYnV0ZShcImRhdGEtdmlld1wiLFwiZmFsc2VcIik7bz0hMX1yZXR1cm4gdCYmKGE9d2luZG93LmlubmVySGVpZ2h0KSx1KCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwoZnVuY3Rpb24oKXtuPXdpbmRvdy5zY3JvbGxZLG98fChyZXF1ZXN0QW5pbWF0aW9uRnJhbWUodSksbz0hMCl9KSwhMSksZX07ZXhwb3J0e3QgYXMgaW5pdH07XG4iLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgU3VuIGZyb20gXCIuLi9jb250YWluZXJzL3N1bi5qc1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29udGFpbmVycy9mb290ZXIuanNcIjtcbmltcG9ydCB7aW5pdH0gZnJvbSBcIi4uLy4uL3BhY2thZ2VzL3NhZC0xLjAuMS9cIlxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgdGltZXMgfSkge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICBjb25zdCBvcHRpb25zID0gaW5pdCgpO1xuICAgICBvcHRpb25zLmZvcmNlVmlld1RydWUoKTtcbiAgICAgY29uc29sZS5sb2cob3B0aW9ucy5mb3JjZVZpZXdUcnVlKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhLIFdlYXRoZXI8L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIkEgc2ltcGxlIGRlc2lnbiB3ZWJzaXRlIGludGVncmF0ZWQgd2l0aCBIS08gQVBJIGFuZCBVbnNwbGFzaCBBUElcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pY29uL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgICAgICBzaXplcz1cIjE4MHgxODBcIlxuICAgICAgICAgIGhyZWY9XCIvaWNvbi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIzMngzMlwiXG4gICAgICAgICAgaHJlZj1cIi9pY29uL2Zhdmljb24tMzJ4MzIucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcbiAgICAgICAgICBocmVmPVwiL2ljb24vZmF2aWNvbi0xNngxNi5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvaWNvbi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxTdW4gdGltZXM9e3RpbWVzfSBnZXRUaW1lPXtnZXRDdXJyZW50VGltZX0gLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbi8vZ2V0IGN1cnJlbnQgdGltZVxuY29uc3QgZ2V0Q3VycmVudFRpbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHdlZWsgPSBbXCJzdW5cIiwgXCJtb25cIiwgXCJ0dWVcIiwgXCJ3ZWRcIiwgXCJ0aHVcIiwgXCJmcmlcIiwgXCJzYXRcIl07XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIG5vdy5zZXRVVENIb3Vycyhub3cuZ2V0VVRDSG91cnMoKSArIDgpO1xuICBjb25zdCByZXN1bHQgPSB7IHllYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDAsIHdlZWtkYXk6IFwic3VuXCIgfTtcbiAgcmVzdWx0LnllYXIgPSBub3cuZ2V0VVRDRnVsbFllYXIoKTtcbiAgcmVzdWx0Lm1vbnRoID0gbm93LmdldFVUQ01vbnRoKCkgKyAxO1xuICByZXN1bHQuZGF5ID0gbm93LmdldFVUQ0RhdGUoKTtcbiAgcmVzdWx0LndlZWtkYXkgPSB3ZWVrW25vdy5nZXREYXkoKV07XG4gIHJldHVybiByZXN1bHQ7XG59O1xuLy9uZXh0anMgZnVuY3Rpb24gLSBmZXRjaCBkYXRhIGF0IGJ1aWxkIHRpbWUgb24gc2VydmVyIHNpZGVcbi8vY3VycmVudGx5IGdldFN0YXRpY1Byb3BzIGlzIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgb24gbGF5ZXIgY29tcG9uZW50IChlLmcuIHN1bi5qcylcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5IH0gPSBnZXRDdXJyZW50VGltZSgpO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9kYXRhLndlYXRoZXIuZ292LmhrL3dlYXRoZXJBUEkvb3BlbmRhdGEvb3BlbmRhdGEucGhwP2RhdGFUeXBlPVNSUyZsYW5nPWVuJnJmb3JtYXQ9anNvbiZ5ZWFyPSR7eWVhcn0mbW9udGg9JHttb250aH0mZGF5PSR7ZGF5fWBcbiAgKTtcbiAgY29uc3QgdGltZXMgPSBhd2FpdCByZXMuanNvbigpO1xuICBpZiAoIXRpbWVzKVxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge30sXG4gICAgfTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyB0aW1lcyB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==