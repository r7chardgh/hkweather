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
      a = 0;
    }
  },
      e = document.getElementsByTagName("div"),
      r = Object.values(e).filter(function (t) {
    return t.hasAttribute("data-sad");
  });
  var i = window.scrollY,
      n = !1,
      a = .6 * window.innerHeight;

  function o() {
    for (var t = null, e = [], o = 0; o < r.length; o++) {
      t = r[o], e[o] = t.offsetTop;
    }

    for (var u = 0; u < r.length; u++) {
      t = r[u], i > e[u] - a && "true" != t.getAttribute("data-view") ? t.setAttribute("data-view", "true") : i <= e[u] - a && "true" == t.getAttribute("data-view") && "forwards" != t.getAttribute("data-fill-mode") && t.setAttribute("data-view", "false");
    }

    n = !1;
  }

  return o(), window.addEventListener("scroll", function () {
    i = window.scrollY, n || (requestAnimationFrame(o), n = !0);
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
    console.log(options);
    options.forceViewTrue();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFja2FnZXMvc2FkLTEuMC4xL2Rpc3QvU0FELmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInQiLCJmb3JjZVZpZXdUcnVlIiwiYSIsImUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiciIsIk9iamVjdCIsInZhbHVlcyIsImZpbHRlciIsImhhc0F0dHJpYnV0ZSIsImkiLCJ3aW5kb3ciLCJzY3JvbGxZIiwibiIsImlubmVySGVpZ2h0IiwibyIsImxlbmd0aCIsIm9mZnNldFRvcCIsInUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiSG9tZSIsInRpbWVzIiwidXNlRWZmZWN0Iiwib3B0aW9ucyIsImluaXQiLCJjb25zb2xlIiwibG9nIiwiZ2V0Q3VycmVudFRpbWUiLCJ3ZWVrIiwibm93IiwiRGF0ZSIsInNldFVUQ0hvdXJzIiwiZ2V0VVRDSG91cnMiLCJyZXN1bHQiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJ3ZWVrZGF5IiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJnZXREYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsQ0FBQyxHQUFDLGFBQVU7QUFBQyxNQUFNQSxDQUFDLEdBQUM7QUFBQ0MsaUJBQWEsRUFBQyx5QkFBVTtBQUFDQyxPQUFDLEdBQUMsQ0FBRjtBQUFJO0FBQTlCLEdBQVI7QUFBQSxNQUF3Q0MsQ0FBQyxHQUFDQyxRQUFRLENBQUNDLG9CQUFULENBQThCLEtBQTlCLENBQTFDO0FBQUEsTUFBK0VDLENBQUMsR0FBQ0MsTUFBTSxDQUFDQyxNQUFQLENBQWNMLENBQWQsRUFBaUJNLE1BQWpCLENBQXlCLFVBQUFULENBQUM7QUFBQSxXQUFFQSxDQUFDLENBQUNVLFlBQUYsQ0FBZSxV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LFNBQUssRUFBRSxDQUFsQjtBQUFxQkMsT0FBRyxFQUFFLENBQTFCO0FBQTZCQyxXQUFPLEVBQUU7QUFBdEMsR0FBZjtBQUNBSixRQUFNLENBQUNDLElBQVAsR0FBY0wsR0FBRyxDQUFDUyxjQUFKLEVBQWQ7QUFDQUwsUUFBTSxDQUFDRSxLQUFQLEdBQWVOLEdBQUcsQ0FBQ1UsV0FBSixLQUFvQixDQUFuQztBQUNBTixRQUFNLENBQUNHLEdBQVAsR0FBYVAsR0FBRyxDQUFDVyxVQUFKLEVBQWI7QUFDQVAsUUFBTSxDQUFDSSxPQUFQLEdBQWlCVCxJQUFJLENBQUNDLEdBQUcsQ0FBQ1ksTUFBSixFQUFELENBQXJCO0FBQ0EsU0FBT1IsTUFBUDtBQUNELENBVkQsQyxDQVdBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmE5NmNiYjRiNThmYzE2MWM3MDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHQ9ZnVuY3Rpb24oKXtjb25zdCB0PXtmb3JjZVZpZXdUcnVlOmZ1bmN0aW9uKCl7YT0wfX0sZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKSxyPU9iamVjdC52YWx1ZXMoZSkuZmlsdGVyKCh0PT50Lmhhc0F0dHJpYnV0ZShcImRhdGEtc2FkXCIpKSk7dmFyIGk9d2luZG93LnNjcm9sbFksbj0hMSxhPS42KndpbmRvdy5pbm5lckhlaWdodDtmdW5jdGlvbiBvKCl7Zm9yKHZhciB0PW51bGwsZT1bXSxvPTA7bzxyLmxlbmd0aDtvKyspdD1yW29dLGVbb109dC5vZmZzZXRUb3A7Zm9yKHZhciB1PTA7dTxyLmxlbmd0aDt1KyspdD1yW3VdLGk+ZVt1XS1hJiZcInRydWVcIiE9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIik/dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIixcInRydWVcIik6aTw9ZVt1XS1hJiZcInRydWVcIj09dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIikmJlwiZm9yd2FyZHNcIiE9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZpbGwtbW9kZVwiKSYmdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIixcImZhbHNlXCIpO249ITF9cmV0dXJuIG8oKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLChmdW5jdGlvbigpe2k9d2luZG93LnNjcm9sbFksbnx8KHJlcXVlc3RBbmltYXRpb25GcmFtZShvKSxuPSEwKX0pLCExKSx0fTtleHBvcnR7dCBhcyBpbml0fTtcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBTdW4gZnJvbSBcIi4uL2NvbnRhaW5lcnMvc3VuLmpzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb250YWluZXJzL2Zvb3Rlci5qc1wiO1xuaW1wb3J0IHtpbml0fSBmcm9tIFwiLi4vLi4vcGFja2FnZXMvc2FkLTEuMC4xL1wiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyB0aW1lcyB9KSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgIGNvbnN0IG9wdGlvbnMgPSBpbml0KCk7XG4gICAgIGNvbnNvbGUubG9nKG9wdGlvbnMpO1xuICAgICBvcHRpb25zLmZvcmNlVmlld1RydWUoKTtcbiAgfSwgW10pO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkhLIFdlYXRoZXI8L3RpdGxlPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgY29udGVudD1cIkEgc2ltcGxlIGRlc2lnbiB3ZWJzaXRlIGludGVncmF0ZWQgd2l0aCBIS08gQVBJIGFuZCBVbnNwbGFzaCBBUElcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9pY29uL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJhcHBsZS10b3VjaC1pY29uXCJcbiAgICAgICAgICBzaXplcz1cIjE4MHgxODBcIlxuICAgICAgICAgIGhyZWY9XCIvaWNvbi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIzMngzMlwiXG4gICAgICAgICAgaHJlZj1cIi9pY29uL2Zhdmljb24tMzJ4MzIucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjE2eDE2XCJcbiAgICAgICAgICBocmVmPVwiL2ljb24vZmF2aWNvbi0xNngxNi5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvaWNvbi9zaXRlLndlYm1hbmlmZXN0XCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86d2dodEA0MDAmZGlzcGxheT1zd2FwXCJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxTdW4gdGltZXM9e3RpbWVzfSBnZXRUaW1lPXtnZXRDdXJyZW50VGltZX0gLz5cbiAgICAgIDxGb290ZXIgLz5cbiAgICA8Lz5cbiAgKTtcbn1cbi8vZ2V0IGN1cnJlbnQgdGltZVxuY29uc3QgZ2V0Q3VycmVudFRpbWUgPSAoKSA9PiB7XG4gIGNvbnN0IHdlZWsgPSBbXCJzdW5cIiwgXCJtb25cIiwgXCJ0dWVcIiwgXCJ3ZWRcIiwgXCJ0aHVcIiwgXCJmcmlcIiwgXCJzYXRcIl07XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gIG5vdy5zZXRVVENIb3Vycyhub3cuZ2V0VVRDSG91cnMoKSArIDgpO1xuICBjb25zdCByZXN1bHQgPSB7IHllYXI6IDAsIG1vbnRoOiAwLCBkYXk6IDAsIHdlZWtkYXk6IFwic3VuXCIgfTtcbiAgcmVzdWx0LnllYXIgPSBub3cuZ2V0VVRDRnVsbFllYXIoKTtcbiAgcmVzdWx0Lm1vbnRoID0gbm93LmdldFVUQ01vbnRoKCkgKyAxO1xuICByZXN1bHQuZGF5ID0gbm93LmdldFVUQ0RhdGUoKTtcbiAgcmVzdWx0LndlZWtkYXkgPSB3ZWVrW25vdy5nZXREYXkoKV07XG4gIHJldHVybiByZXN1bHQ7XG59O1xuLy9uZXh0anMgZnVuY3Rpb24gLSBmZXRjaCBkYXRhIGF0IGJ1aWxkIHRpbWUgb24gc2VydmVyIHNpZGVcbi8vY3VycmVudGx5IGdldFN0YXRpY1Byb3BzIGlzIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgb24gbGF5ZXIgY29tcG9uZW50IChlLmcuIHN1bi5qcylcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3QgeyB5ZWFyLCBtb250aCwgZGF5IH0gPSBnZXRDdXJyZW50VGltZSgpO1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9kYXRhLndlYXRoZXIuZ292LmhrL3dlYXRoZXJBUEkvb3BlbmRhdGEvb3BlbmRhdGEucGhwP2RhdGFUeXBlPVNSUyZsYW5nPWVuJnJmb3JtYXQ9anNvbiZ5ZWFyPSR7eWVhcn0mbW9udGg9JHttb250aH0mZGF5PSR7ZGF5fWBcbiAgKTtcbiAgY29uc3QgdGltZXMgPSBhd2FpdCByZXMuanNvbigpO1xuICBpZiAoIXRpbWVzKVxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczoge30sXG4gICAgfTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyB0aW1lcyB9LFxuICB9O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==