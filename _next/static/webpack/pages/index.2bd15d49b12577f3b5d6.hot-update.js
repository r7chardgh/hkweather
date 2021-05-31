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
var t = function t(_t) {
  var e = document.getElementsByTagName("div"),
      i = Object.values(e).filter(function (t) {
    return t.hasAttribute("data-sad");
  });
  var n = window.scrollY,
      r = !1,
      a = .6 * window.innerHeight;

  function o() {
    for (var t = null, e = [], o = 0; o < i.length; o++) {
      t = i[o], e[o] = t.offsetTop;
    }

    for (var d = 0; d < i.length; d++) {
      t = i[d], n > e[d] - a && "true" != t.getAttribute("data-view") ? t.setAttribute("data-view", "true") : n <= e[d] - a && "true" == t.getAttribute("data-view") && "forwards" != t.getAttribute("data-fill-mode") && t.setAttribute("data-view", "false");
    }

    r = !1;
  }

  _t && (a = window.innerHeight), o(), window.addEventListener("scroll", function () {
    n = window.scrollY, r || (requestAnimationFrame(o), r = !0);
  }, !1);
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
    (0,_packages_sad_1_0_1___WEBPACK_IMPORTED_MODULE_4__.init)(true);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "HK Weather"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "A simple design website integrated with HKO API and Unsplash API"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/icon/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/icon/apple-touch-icon.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/icon/favicon-32x32.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "/icon/favicon-16x16.png"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "manifest",
        href: "/icon/site.webmanifest"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_sun_js__WEBPACK_IMPORTED_MODULE_2__.default, {
      times: times,
      getTime: getCurrentTime
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_containers_footer_js__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFja2FnZXMvc2FkLTEuMC4xL2Rpc3QvU0FELmVzbS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbInQiLCJlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImkiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmaWx0ZXIiLCJoYXNBdHRyaWJ1dGUiLCJuIiwid2luZG93Iiwic2Nyb2xsWSIsInIiLCJhIiwiaW5uZXJIZWlnaHQiLCJvIiwibGVuZ3RoIiwib2Zmc2V0VG9wIiwiZCIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJIb21lIiwidGltZXMiLCJ1c2VFZmZlY3QiLCJpbml0IiwiZ2V0Q3VycmVudFRpbWUiLCJ3ZWVrIiwibm93IiwiRGF0ZSIsInNldFVUQ0hvdXJzIiwiZ2V0VVRDSG91cnMiLCJyZXN1bHQiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJ3ZWVrZGF5IiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJnZXREYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsQ0FBQyxHQUFDLFdBQVNBLEVBQVQsRUFBVztBQUFDLE1BQU1DLENBQUMsR0FBQ0MsUUFBUSxDQUFDQyxvQkFBVCxDQUE4QixLQUE5QixDQUFSO0FBQUEsTUFBNkNDLENBQUMsR0FBQ0MsTUFBTSxDQUFDQyxNQUFQLENBQWNMLENBQWQsRUFBaUJNLE1BQWpCLENBQXlCLFVBQUFQLENBQUM7QUFBQSxXQUFFQSxDQUFDLENBQUNRLFlBQUYsQ0FBZSxVQUFmLENBQUY7QUFBQSxHQUExQixDQUEvQztBQUF3RyxNQUFJQyxDQUFDLEdBQUNDLE1BQU0sQ0FBQ0MsT0FBYjtBQUFBLE1BQXFCQyxDQUFDLEdBQUMsQ0FBQyxDQUF4QjtBQUFBLE1BQTBCQyxDQUFD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LEdBQUcsQ0FBQ1UsV0FBSixLQUFvQixDQUFuQztBQUNBTixRQUFNLENBQUNHLEdBQVAsR0FBYVAsR0FBRyxDQUFDVyxVQUFKLEVBQWI7QUFDQVAsUUFBTSxDQUFDSSxPQUFQLEdBQWlCVCxJQUFJLENBQUNDLEdBQUcsQ0FBQ1ksTUFBSixFQUFELENBQXJCO0FBQ0EsU0FBT1IsTUFBUDtBQUNELENBVkQsQyxDQVdBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmJkMTVkNDliMTI1NzdmM2I1ZDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHQ9ZnVuY3Rpb24odCl7Y29uc3QgZT1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKSxpPU9iamVjdC52YWx1ZXMoZSkuZmlsdGVyKCh0PT50Lmhhc0F0dHJpYnV0ZShcImRhdGEtc2FkXCIpKSk7dmFyIG49d2luZG93LnNjcm9sbFkscj0hMSxhPS42KndpbmRvdy5pbm5lckhlaWdodDtmdW5jdGlvbiBvKCl7Zm9yKHZhciB0PW51bGwsZT1bXSxvPTA7bzxpLmxlbmd0aDtvKyspdD1pW29dLGVbb109dC5vZmZzZXRUb3A7Zm9yKHZhciBkPTA7ZDxpLmxlbmd0aDtkKyspdD1pW2RdLG4+ZVtkXS1hJiZcInRydWVcIiE9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIik/dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIixcInRydWVcIik6bjw9ZVtkXS1hJiZcInRydWVcIj09dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIikmJlwiZm9yd2FyZHNcIiE9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZpbGwtbW9kZVwiKSYmdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIixcImZhbHNlXCIpO3I9ITF9dCYmKGE9d2luZG93LmlubmVySGVpZ2h0KSxvKCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwoZnVuY3Rpb24oKXtuPXdpbmRvdy5zY3JvbGxZLHJ8fChyZXF1ZXN0QW5pbWF0aW9uRnJhbWUobykscj0hMCl9KSwhMSl9O2V4cG9ydHt0IGFzIGluaXR9O1xuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFN1biBmcm9tIFwiLi4vY29udGFpbmVycy9zdW4uanNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvZm9vdGVyLmpzXCI7XG5pbXBvcnQgeyBpbml0IH0gZnJvbSBcIi4uLy4uL3BhY2thZ2VzL3NhZC0xLjAuMS9cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHRpbWVzIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpbml0KHRydWUpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SEsgV2VhdGhlcjwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiQSBzaW1wbGUgZGVzaWduIHdlYnNpdGUgaW50ZWdyYXRlZCB3aXRoIEhLTyBBUEkgYW5kIFVuc3BsYXNoIEFQSVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2ljb24vZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICAgIHNpemVzPVwiMTgweDE4MFwiXG4gICAgICAgICAgaHJlZj1cIi9pY29uL2FwcGxlLXRvdWNoLWljb24ucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjMyeDMyXCJcbiAgICAgICAgICBocmVmPVwiL2ljb24vZmF2aWNvbi0zMngzMi5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIHNpemVzPVwiMTZ4MTZcIlxuICAgICAgICAgIGhyZWY9XCIvaWNvbi9mYXZpY29uLTE2eDE2LnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9pY29uL3NpdGUud2VibWFuaWZlc3RcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFN1biB0aW1lcz17dGltZXN9IGdldFRpbWU9e2dldEN1cnJlbnRUaW1lfSAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufVxuLy9nZXQgY3VycmVudCB0aW1lXG5jb25zdCBnZXRDdXJyZW50VGltZSA9ICgpID0+IHtcbiAgY29uc3Qgd2VlayA9IFtcInN1blwiLCBcIm1vblwiLCBcInR1ZVwiLCBcIndlZFwiLCBcInRodVwiLCBcImZyaVwiLCBcInNhdFwiXTtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgbm93LnNldFVUQ0hvdXJzKG5vdy5nZXRVVENIb3VycygpICsgOCk7XG4gIGNvbnN0IHJlc3VsdCA9IHsgeWVhcjogMCwgbW9udGg6IDAsIGRheTogMCwgd2Vla2RheTogXCJzdW5cIiB9O1xuICByZXN1bHQueWVhciA9IG5vdy5nZXRVVENGdWxsWWVhcigpO1xuICByZXN1bHQubW9udGggPSBub3cuZ2V0VVRDTW9udGgoKSArIDE7XG4gIHJlc3VsdC5kYXkgPSBub3cuZ2V0VVRDRGF0ZSgpO1xuICByZXN1bHQud2Vla2RheSA9IHdlZWtbbm93LmdldERheSgpXTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4vL25leHRqcyBmdW5jdGlvbiAtIGZldGNoIGRhdGEgYXQgYnVpbGQgdGltZSBvbiBzZXJ2ZXIgc2lkZVxuLy9jdXJyZW50bHkgZ2V0U3RhdGljUHJvcHMgaXMgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBvbiBsYXllciBjb21wb25lbnQgKGUuZy4gc3VuLmpzKVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCB7IHllYXIsIG1vbnRoLCBkYXkgfSA9IGdldEN1cnJlbnRUaW1lKCk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2RhdGEud2VhdGhlci5nb3YuaGsvd2VhdGhlckFQSS9vcGVuZGF0YS9vcGVuZGF0YS5waHA/ZGF0YVR5cGU9U1JTJmxhbmc9ZW4mcmZvcm1hdD1qc29uJnllYXI9JHt5ZWFyfSZtb250aD0ke21vbnRofSZkYXk9JHtkYXl9YFxuICApO1xuICBjb25zdCB0aW1lcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGlmICghdGltZXMpXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7fSxcbiAgICB9O1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHRpbWVzIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9