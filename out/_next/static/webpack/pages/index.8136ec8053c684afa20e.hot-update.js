self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/readOnlyError.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _readOnlyError; }
/* harmony export */ });
function _readOnlyError(name) {
  throw new TypeError("\"" + name + "\" is read-only");
}

/***/ }),

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
/* harmony import */ var C_Users_R_Documents_coding_design_hkweather_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/readOnlyError */ "./node_modules/@babel/runtime/helpers/esm/readOnlyError.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var t = function t() {
  var t = {
    forceViewTrue: function forceViewTrue() {
      a = ((0,C_Users_R_Documents_coding_design_hkweather_node_modules_babel_runtime_helpers_esm_readOnlyError__WEBPACK_IMPORTED_MODULE_0__.default)("a"), 0);
    }
  },
      e = document.getElementsByTagName("div"),
      r = Object.values(e).filter(function (t) {
    return t.hasAttribute("data-sad");
  });
  var i = window.scrollY,
      n = !1;
  var a = .6 * window.innerHeight;

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
    (0,_packages_sad_1_0_1___WEBPACK_IMPORTED_MODULE_4__.init)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3JlYWRPbmx5RXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhY2thZ2VzL3NhZC0xLjAuMS9kaXN0L1NBRC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ0IiwiZm9yY2VWaWV3VHJ1ZSIsImEiLCJlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInIiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmaWx0ZXIiLCJoYXNBdHRyaWJ1dGUiLCJpIiwid2luZG93Iiwic2Nyb2xsWSIsIm4iLCJpbm5lckhlaWdodCIsIm8iLCJsZW5ndGgiLCJvZmZzZXRUb3AiLCJ1IiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkhvbWUiLCJ0aW1lcyIsInVzZUVmZmVjdCIsImluaXQiLCJnZXRDdXJyZW50VGltZSIsIndlZWsiLCJub3ciLCJEYXRlIiwic2V0VVRDSG91cnMiLCJnZXRVVENIb3VycyIsInJlc3VsdCIsInllYXIiLCJtb250aCIsImRheSIsIndlZWtkYXkiLCJnZXRVVENGdWxsWWVhciIsImdldFVUQ01vbnRoIiwiZ2V0VVRDRGF0ZSIsImdldERheSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkEsSUFBTUEsQ0FBQyxHQUFDLGFBQVU7QUFBQyxNQUFNQSxDQUFDLEdBQUM7QUFBQ0MsaUJBQWEsRUFBQyx5QkFBVTtBQUFDQyxPQUFDLG9KQUFDLENBQUQsQ0FBRDtBQUFJO0FBQTlCLEdBQVI7QUFBQSxNQUF3Q0MsQ0FBQyxHQUFDQyxRQUFRLENBQUNDLG9CQUFULENBQThCLEtBQTlCLENBQTFDO0FBQUEsTUFBK0VDLENBQUMsR0FBQ0Ms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LENBQVI7QUFBV0MsU0FBSyxFQUFFLENBQWxCO0FBQXFCQyxPQUFHLEVBQUUsQ0FBMUI7QUFBNkJDLFdBQU8sRUFBRTtBQUF0QyxHQUFmO0FBQ0FKLFFBQU0sQ0FBQ0MsSUFBUCxHQUFjTCxHQUFHLENBQUNTLGNBQUosRUFBZDtBQUNBTCxRQUFNLENBQUNFLEtBQVAsR0FBZU4sR0FBRyxDQUFDVSxXQUFKLEtBQW9CLENBQW5DO0FBQ0FOLFFBQU0sQ0FBQ0csR0FBUCxHQUFhUCxHQUFHLENBQUNXLFVBQUosRUFBYjtBQUNBUCxRQUFNLENBQUNJLE9BQVAsR0FBaUJULElBQUksQ0FBQ0MsR0FBRyxDQUFDWSxNQUFKLEVBQUQsQ0FBckI7QUFDQSxTQUFPUixNQUFQO0FBQ0QsQ0FWRCxDLENBV0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MTM2ZWM4MDUzYzY4NGFmYTIwZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3JlYWRPbmx5RXJyb3IobmFtZSkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiXFxcIlwiICsgbmFtZSArIFwiXFxcIiBpcyByZWFkLW9ubHlcIik7XG59IiwiY29uc3QgdD1mdW5jdGlvbigpe2NvbnN0IHQ9e2ZvcmNlVmlld1RydWU6ZnVuY3Rpb24oKXthPTB9fSxlPWRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiZGl2XCIpLHI9T2JqZWN0LnZhbHVlcyhlKS5maWx0ZXIoKHQ9PnQuaGFzQXR0cmlidXRlKFwiZGF0YS1zYWRcIikpKTt2YXIgaT13aW5kb3cuc2Nyb2xsWSxuPSExO2NvbnN0IGE9LjYqd2luZG93LmlubmVySGVpZ2h0O2Z1bmN0aW9uIG8oKXtmb3IodmFyIHQ9bnVsbCxlPVtdLG89MDtvPHIubGVuZ3RoO28rKyl0PXJbb10sZVtvXT10Lm9mZnNldFRvcDtmb3IodmFyIHU9MDt1PHIubGVuZ3RoO3UrKyl0PXJbdV0saT5lW3VdLWEmJlwidHJ1ZVwiIT10LmdldEF0dHJpYnV0ZShcImRhdGEtdmlld1wiKT90LnNldEF0dHJpYnV0ZShcImRhdGEtdmlld1wiLFwidHJ1ZVwiKTppPD1lW3VdLWEmJlwidHJ1ZVwiPT10LmdldEF0dHJpYnV0ZShcImRhdGEtdmlld1wiKSYmXCJmb3J3YXJkc1wiIT10LmdldEF0dHJpYnV0ZShcImRhdGEtZmlsbC1tb2RlXCIpJiZ0LnNldEF0dHJpYnV0ZShcImRhdGEtdmlld1wiLFwiZmFsc2VcIik7bj0hMX1yZXR1cm4gbygpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsKGZ1bmN0aW9uKCl7aT13aW5kb3cuc2Nyb2xsWSxufHwocmVxdWVzdEFuaW1hdGlvbkZyYW1lKG8pLG49ITApfSksITEpLHR9O2V4cG9ydHt0IGFzIGluaXR9O1xuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFN1biBmcm9tIFwiLi4vY29udGFpbmVycy9zdW4uanNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvZm9vdGVyLmpzXCI7XG5pbXBvcnQge2luaXR9IGZyb20gXCIuLi8uLi9wYWNrYWdlcy9zYWQtMS4wLjEvXCJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHRpbWVzIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgaW5pdCgpO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SEsgV2VhdGhlcjwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICBjb250ZW50PVwiQSBzaW1wbGUgZGVzaWduIHdlYnNpdGUgaW50ZWdyYXRlZCB3aXRoIEhLTyBBUEkgYW5kIFVuc3BsYXNoIEFQSVwiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2ljb24vZmF2aWNvbi5pY29cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIlxuICAgICAgICAgIHNpemVzPVwiMTgweDE4MFwiXG4gICAgICAgICAgaHJlZj1cIi9pY29uL2FwcGxlLXRvdWNoLWljb24ucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmtcbiAgICAgICAgICByZWw9XCJpY29uXCJcbiAgICAgICAgICB0eXBlPVwiaW1hZ2UvcG5nXCJcbiAgICAgICAgICBzaXplcz1cIjMyeDMyXCJcbiAgICAgICAgICBocmVmPVwiL2ljb24vZmF2aWNvbi0zMngzMi5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIHNpemVzPVwiMTZ4MTZcIlxuICAgICAgICAgIGhyZWY9XCIvaWNvbi9mYXZpY29uLTE2eDE2LnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cIm1hbmlmZXN0XCIgaHJlZj1cIi9pY29uL3NpdGUud2VibWFuaWZlc3RcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIiAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDQwMCZkaXNwbGF5PXN3YXBcIlxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPFN1biB0aW1lcz17dGltZXN9IGdldFRpbWU9e2dldEN1cnJlbnRUaW1lfSAvPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvPlxuICApO1xufVxuLy9nZXQgY3VycmVudCB0aW1lXG5jb25zdCBnZXRDdXJyZW50VGltZSA9ICgpID0+IHtcbiAgY29uc3Qgd2VlayA9IFtcInN1blwiLCBcIm1vblwiLCBcInR1ZVwiLCBcIndlZFwiLCBcInRodVwiLCBcImZyaVwiLCBcInNhdFwiXTtcbiAgY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbiAgbm93LnNldFVUQ0hvdXJzKG5vdy5nZXRVVENIb3VycygpICsgOCk7XG4gIGNvbnN0IHJlc3VsdCA9IHsgeWVhcjogMCwgbW9udGg6IDAsIGRheTogMCwgd2Vla2RheTogXCJzdW5cIiB9O1xuICByZXN1bHQueWVhciA9IG5vdy5nZXRVVENGdWxsWWVhcigpO1xuICByZXN1bHQubW9udGggPSBub3cuZ2V0VVRDTW9udGgoKSArIDE7XG4gIHJlc3VsdC5kYXkgPSBub3cuZ2V0VVRDRGF0ZSgpO1xuICByZXN1bHQud2Vla2RheSA9IHdlZWtbbm93LmdldERheSgpXTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4vL25leHRqcyBmdW5jdGlvbiAtIGZldGNoIGRhdGEgYXQgYnVpbGQgdGltZSBvbiBzZXJ2ZXIgc2lkZVxuLy9jdXJyZW50bHkgZ2V0U3RhdGljUHJvcHMgaXMgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBvbiBsYXllciBjb21wb25lbnQgKGUuZy4gc3VuLmpzKVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICBjb25zdCB7IHllYXIsIG1vbnRoLCBkYXkgfSA9IGdldEN1cnJlbnRUaW1lKCk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2RhdGEud2VhdGhlci5nb3YuaGsvd2VhdGhlckFQSS9vcGVuZGF0YS9vcGVuZGF0YS5waHA/ZGF0YVR5cGU9U1JTJmxhbmc9ZW4mcmZvcm1hdD1qc29uJnllYXI9JHt5ZWFyfSZtb250aD0ke21vbnRofSZkYXk9JHtkYXl9YFxuICApO1xuICBjb25zdCB0aW1lcyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIGlmICghdGltZXMpXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb3BzOiB7fSxcbiAgICB9O1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7IHRpbWVzIH0sXG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9