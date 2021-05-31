self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./packages/sad-1.0.1/dist/SAD.cjs.js":
/*!********************************************!*\
  !*** ./packages/sad-1.0.1/dist/SAD.cjs.js ***!
  \********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: !0
}));

exports.init = function () {
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
/* harmony import */ var _packages_sad_1_0_1___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../packages/sad-1.0.1/ */ "./packages/sad-1.0.1/dist/SAD.cjs.js");
/* harmony import */ var _packages_sad_1_0_1___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_packages_sad_1_0_1___WEBPACK_IMPORTED_MODULE_4__);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFja2FnZXMvc2FkLTEuMC4xL2Rpc3QvU0FELmNqcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsInZhbHVlIiwiZXhwb3J0cyIsInQiLCJmb3JjZVZpZXdUcnVlIiwiYSIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpIiwidmFsdWVzIiwiZmlsdGVyIiwiaGFzQXR0cmlidXRlIiwiciIsInNjcm9sbFkiLCJuIiwibyIsImxlbmd0aCIsIm9mZnNldFRvcCIsInUiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiSG9tZSIsInRpbWVzIiwidXNlRWZmZWN0Iiwib3B0aW9ucyIsImluaXQiLCJnZXRDdXJyZW50VGltZSIsIndlZWsiLCJub3ciLCJEYXRlIiwic2V0VVRDSG91cnMiLCJnZXRVVENIb3VycyIsInJlc3VsdCIsInllYXIiLCJtb250aCIsImRheSIsIndlZWtkYXkiLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwiZ2V0VVRDRGF0ZSIsImdldERheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUFBQSw4Q0FBMkM7QUFBQ0MsT0FBSyxFQUFDLENBQUM7QUFBUixDQUEzQzs7QUFBdURDLFlBQUEsR0FBYSxZQUFVO0FBQUMsTUFBTUMsQ0FBQyxHQUFDO0FBQUNDLGlCQUFhLEVBQUMseUJBQVU7QUFBQ0MsT0FBQyxHQUFDQyxNQUFNLENBQUNDLFdBQVQ7QUFBcUI7QUFBL0MsR0FBUjtBQUFBLE1BQXlEQyxDQUFDLEdBQUNDLFFBQVEsQ0FBQ0Msb0JBQVQsQ0FBOEIsS0FBOUIsQ0FBM0Q7QUFBQSxNQUFnR0MsQ0FBQyxHQUFDWCxNQUFNLENBQUNZLE1BQVAsQ0FBY0osQ0FBZCxFQUFp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QUFFLENBQVI7QUFBV0MsU0FBSyxFQUFFLENBQWxCO0FBQXFCQyxPQUFHLEVBQUUsQ0FBMUI7QUFBNkJDLFdBQU8sRUFBRTtBQUF0QyxHQUFmO0FBQ0FKLFFBQU0sQ0FBQ0MsSUFBUCxHQUFjTCxHQUFHLENBQUNTLGNBQUosRUFBZDtBQUNBTCxRQUFNLENBQUNFLEtBQVAsR0FBZU4sR0FBRyxDQUFDVSxXQUFKLEtBQW9CLENBQW5DO0FBQ0FOLFFBQU0sQ0FBQ0csR0FBUCxHQUFhUCxHQUFHLENBQUNXLFVBQUosRUFBYjtBQUNBUCxRQUFNLENBQUNJLE9BQVAsR0FBaUJULElBQUksQ0FBQ0MsR0FBRyxDQUFDWSxNQUFKLEVBQUQsQ0FBckI7QUFDQSxTQUFPUixNQUFQO0FBQ0QsQ0FWRCxDLENBV0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xY2U2MzU0ZGM2YjBjZjA1YTNlYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7ZXhwb3J0cy5pbml0PWZ1bmN0aW9uKCl7Y29uc3QgdD17Zm9yY2VWaWV3VHJ1ZTpmdW5jdGlvbigpe2E9d2luZG93LmlubmVySGVpZ2h0fX0sZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKSxpPU9iamVjdC52YWx1ZXMoZSkuZmlsdGVyKCh0PT50Lmhhc0F0dHJpYnV0ZShcImRhdGEtc2FkXCIpKSk7dmFyIHI9d2luZG93LnNjcm9sbFksbj0hMSxhPS42KndpbmRvdy5pbm5lckhlaWdodDtmdW5jdGlvbiBvKCl7Zm9yKHZhciB0PW51bGwsZT1bXSxvPTA7bzxpLmxlbmd0aDtvKyspdD1pW29dLGVbb109dC5vZmZzZXRUb3A7Zm9yKHZhciB1PTA7dTxpLmxlbmd0aDt1KyspdD1pW3VdLHI+ZVt1XS1hJiZcInRydWVcIiE9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIik/dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIixcInRydWVcIik6cjw9ZVt1XS1hJiZcInRydWVcIj09dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIikmJlwiZm9yd2FyZHNcIiE9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZpbGwtbW9kZVwiKSYmdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIixcImZhbHNlXCIpO249ITF9cmV0dXJuIG8oKSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLChmdW5jdGlvbigpe3I9d2luZG93LnNjcm9sbFksbnx8KHJlcXVlc3RBbmltYXRpb25GcmFtZShvKSxuPSEwKX0pLCExKSx0fTtcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBTdW4gZnJvbSBcIi4uL2NvbnRhaW5lcnMvc3VuLmpzXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb250YWluZXJzL2Zvb3Rlci5qc1wiO1xuaW1wb3J0IHtpbml0fSBmcm9tIFwiLi4vLi4vcGFja2FnZXMvc2FkLTEuMC4xL1wiXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyB0aW1lcyB9KSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgIGNvbnN0IG9wdGlvbnMgPSBpbml0KCk7XG4gICAgIG9wdGlvbnMuZm9yY2VWaWV3VHJ1ZSgpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SEsgV2VhdGhlcjwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiQSBzaW1wbGUgZGVzaWduIHdlYnNpdGUgaW50ZWdyYXRlZCB3aXRoIEhLTyBBUEkgYW5kIFVuc3BsYXNoIEFQSVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2ljb24vZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICAgIHNpemVzPVwiMTgweDE4MFwiXG4gICAgICAgICAgaHJlZj1cIi9pY29uL2FwcGxlLXRvdWNoLWljb24ucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjMyeDMyXCJcbiAgICAgICAgICBocmVmPVwiL2ljb24vZmF2aWNvbi0zMngzMi5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIHNpemVzPVwiMTZ4MTZcIlxuICAgICAgICAgIGhyZWY9XCIvaWNvbi9mYXZpY29uLTE2eDE2LnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9pY29uL3NpdGUud2VibWFuaWZlc3RcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFN1biB0aW1lcz17dGltZXN9IGdldFRpbWU9e2dldEN1cnJlbnRUaW1lfSAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufVxuLy9nZXQgY3VycmVudCB0aW1lXG5jb25zdCBnZXRDdXJyZW50VGltZSA9ICgpID0+IHtcbiAgY29uc3Qgd2VlayA9IFtcInN1blwiLCBcIm1vblwiLCBcInR1ZVwiLCBcIndlZFwiLCBcInRodVwiLCBcImZyaVwiLCBcInNhdFwiXTtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgbm93LnNldFVUQ0hvdXJzKG5vdy5nZXRVVENIb3VycygpICsgOCk7XG4gIGNvbnN0IHJlc3VsdCA9IHsgeWVhcjogMCwgbW9udGg6IDAsIGRheTogMCwgd2Vla2RheTogXCJzdW5cIiB9O1xuICByZXN1bHQueWVhciA9IG5vdy5nZXRVVENGdWxsWWVhcigpO1xuICByZXN1bHQubW9udGggPSBub3cuZ2V0VVRDTW9udGgoKSArIDE7XG4gIHJlc3VsdC5kYXkgPSBub3cuZ2V0VVRDRGF0ZSgpO1xuICByZXN1bHQud2Vla2RheSA9IHdlZWtbbm93LmdldERheSgpXTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4vL25leHRqcyBmdW5jdGlvbiAtIGZldGNoIGRhdGEgYXQgYnVpbGQgdGltZSBvbiBzZXJ2ZXIgc2lkZVxuLy9jdXJyZW50bHkgZ2V0U3RhdGljUHJvcHMgaXMgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBvbiBsYXllciBjb21wb25lbnQgKGUuZy4gc3VuLmpzKVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCB7IHllYXIsIG1vbnRoLCBkYXkgfSA9IGdldEN1cnJlbnRUaW1lKCk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2RhdGEud2VhdGhlci5nb3YuaGsvd2VhdGhlckFQSS9vcGVuZGF0YS9vcGVuZGF0YS5waHA/ZGF0YVR5cGU9U1JTJmxhbmc9ZW4mcmZvcm1hdD1qc29uJnllYXI9JHt5ZWFyfSZtb250aD0ke21vbnRofSZkYXk9JHtkYXl9YFxuICApO1xuICBjb25zdCB0aW1lcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGlmICghdGltZXMpXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7fSxcbiAgICB9O1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHRpbWVzIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9