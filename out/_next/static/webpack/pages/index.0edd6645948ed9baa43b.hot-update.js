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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFja2FnZXMvc2FkLTEuMC4xL2Rpc3QvU0FELmNqcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsInZhbHVlIiwiZXhwb3J0cyIsInQiLCJlIiwiZm9yY2VWaWV3VHJ1ZSIsImNvbnNvbGUiLCJsb2ciLCJhIiwiciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJpIiwidmFsdWVzIiwiZmlsdGVyIiwiaGFzQXR0cmlidXRlIiwibiIsIndpbmRvdyIsInNjcm9sbFkiLCJvIiwiaW5uZXJIZWlnaHQiLCJ1IiwibGVuZ3RoIiwib2Zmc2V0VG9wIiwiZ2V0QXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkhvbWUiLCJ0aW1lcyIsInVzZUVmZmVjdCIsIm9wdGlvbnMiLCJpbml0IiwiZ2V0Q3VycmVudFRpbWUiLCJ3ZWVrIiwibm93IiwiRGF0ZSIsInNldFVUQ0hvdXJzIiwiZ2V0VVRDSG91cnMiLCJyZXN1bHQiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJ3ZWVrZGF5IiwiZ2V0VVRDRnVsbFllYXIiLCJnZXRVVENNb250aCIsImdldFVUQ0RhdGUiLCJnZXREYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFBQUEsOENBQTJDO0FBQUNDLE9BQUssRUFBQyxDQUFDO0FBQVIsQ0FBM0M7O0FBQXVEQyxZQUFBLEdBQWEsWUFBVTtBQUFDLE1BQUlDLENBQUMsR0FBQyxDQUFDLENBQVA7QUFBUyxNQUFNQyxDQUFDLEdBQUM7QUFBQ0MsaUJBQWEsRUFBQyx5QkFBVTtBQUFDRixPQUFDLEdBQUMsQ0FBQyxDQUFILEVBQUtHLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxDQUFaLENBQUw7QUFBb0I7QUFBOUMsR0FBUjtBQUFBLE1BQXdEQyxDQUFDLEdBQUNDLFFBQVEsQ0FBQ0Ms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QUFmLEVBQXNCLEtBQXRCLEVBQTZCLEtBQTdCLEVBQW9DLEtBQXBDLEVBQTJDLEtBQTNDLENBQWI7QUFDQSxNQUFNQyxHQUFHLEdBQUcsSUFBSUMsSUFBSixFQUFaO0FBQ0FELEtBQUcsQ0FBQ0UsV0FBSixDQUFnQkYsR0FBRyxDQUFDRyxXQUFKLEtBQW9CLENBQXBDO0FBQ0EsTUFBTUMsTUFBTSxHQUFHO0FBQUVDLFFBQUksRUFBRSxDQUFSO0FBQVdDLFNBQUssRUFBRSxDQUFsQjtBQUFxQkMsT0FBRyxFQUFFLENBQTFCO0FBQTZCQyxXQUFPLEVBQUU7QUFBdEMsR0FBZjtBQUNBSixRQUFNLENBQUNDLElBQVAsR0FBY0wsR0FBRyxDQUFDUyxjQUFKLEVBQWQ7QUFDQUwsUUFBTSxDQUFDRSxLQUFQLEdBQWVOLEdBQUcsQ0FBQ1UsV0FBSixLQUFvQixDQUFuQztBQUNBTixRQUFNLENBQUNHLEdBQVAsR0FBYVAsR0FBRyxDQUFDVyxVQUFKLEVBQWI7QUFDQVAsUUFBTSxDQUFDSSxPQUFQLEdBQWlCVCxJQUFJLENBQUNDLEdBQUcsQ0FBQ1ksTUFBSixFQUFELENBQXJCO0FBQ0EsU0FBT1IsTUFBUDtBQUNELENBVkQsQyxDQVdBO0FBQ0EiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGVkZDY2NDU5NDhlZDliYWE0M2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO2V4cG9ydHMuaW5pdD1mdW5jdGlvbigpe3ZhciB0PSExO2NvbnN0IGU9e2ZvcmNlVmlld1RydWU6ZnVuY3Rpb24oKXt0PSEwLGNvbnNvbGUubG9nKGEpfX0scj1kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImRpdlwiKSxpPU9iamVjdC52YWx1ZXMocikuZmlsdGVyKCh0PT50Lmhhc0F0dHJpYnV0ZShcImRhdGEtc2FkXCIpKSk7dmFyIG49d2luZG93LnNjcm9sbFksbz0hMSxhPS42KndpbmRvdy5pbm5lckhlaWdodDtmdW5jdGlvbiB1KCl7Zm9yKHZhciB0PW51bGwsZT1bXSxyPTA7cjxpLmxlbmd0aDtyKyspdD1pW3JdLGVbcl09dC5vZmZzZXRUb3A7Zm9yKHZhciB1PTA7dTxpLmxlbmd0aDt1KyspdD1pW3VdLG4+ZVt1XS1hJiZcInRydWVcIiE9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIik/dC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIixcInRydWVcIik6bjw9ZVt1XS1hJiZcInRydWVcIj09dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIikmJlwiZm9yd2FyZHNcIiE9dC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZpbGwtbW9kZVwiKSYmdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZpZXdcIixcImZhbHNlXCIpO289ITF9cmV0dXJuIHQmJihhPXdpbmRvdy5pbm5lckhlaWdodCksdSgpLHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsKGZ1bmN0aW9uKCl7bj13aW5kb3cuc2Nyb2xsWSxvfHwocmVxdWVzdEFuaW1hdGlvbkZyYW1lKHUpLG89ITApfSksITEpLGV9O1xuIiwiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IFN1biBmcm9tIFwiLi4vY29udGFpbmVycy9zdW4uanNcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbnRhaW5lcnMvZm9vdGVyLmpzXCI7XG5pbXBvcnQge2luaXR9IGZyb20gXCIuLi8uLi9wYWNrYWdlcy9zYWQtMS4wLjEvXCJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHRpbWVzIH0pIHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgY29uc3Qgb3B0aW9ucyA9IGluaXQoKTtcbiAgICAgb3B0aW9ucy5mb3JjZVZpZXdUcnVlKCk7XG4gICAgIGNvbnNvbGUubG9nKG9wdGlvbnMuZm9yY2VWaWV3VHJ1ZSk7XG4gIH0sIFtdKTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5ISyBXZWF0aGVyPC90aXRsZT5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgIGNvbnRlbnQ9XCJBIHNpbXBsZSBkZXNpZ24gd2Vic2l0ZSBpbnRlZ3JhdGVkIHdpdGggSEtPIEFQSSBhbmQgVW5zcGxhc2ggQVBJXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvaWNvbi9mYXZpY29uLmljb1wiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiYXBwbGUtdG91Y2gtaWNvblwiXG4gICAgICAgICAgc2l6ZXM9XCIxODB4MTgwXCJcbiAgICAgICAgICBocmVmPVwiL2ljb24vYXBwbGUtdG91Y2gtaWNvbi5wbmdcIlxuICAgICAgICAvPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cImljb25cIlxuICAgICAgICAgIHR5cGU9XCJpbWFnZS9wbmdcIlxuICAgICAgICAgIHNpemVzPVwiMzJ4MzJcIlxuICAgICAgICAgIGhyZWY9XCIvaWNvbi9mYXZpY29uLTMyeDMyLnBuZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwiaWNvblwiXG4gICAgICAgICAgdHlwZT1cImltYWdlL3BuZ1wiXG4gICAgICAgICAgc2l6ZXM9XCIxNngxNlwiXG4gICAgICAgICAgaHJlZj1cIi9pY29uL2Zhdmljb24tMTZ4MTYucG5nXCJcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwibWFuaWZlc3RcIiBocmVmPVwiL2ljb24vc2l0ZS53ZWJtYW5pZmVzdFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbVwiIC8+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRANDAwJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8U3VuIHRpbWVzPXt0aW1lc30gZ2V0VGltZT17Z2V0Q3VycmVudFRpbWV9IC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC8+XG4gICk7XG59XG4vL2dldCBjdXJyZW50IHRpbWVcbmNvbnN0IGdldEN1cnJlbnRUaW1lID0gKCkgPT4ge1xuICBjb25zdCB3ZWVrID0gW1wic3VuXCIsIFwibW9uXCIsIFwidHVlXCIsIFwid2VkXCIsIFwidGh1XCIsIFwiZnJpXCIsIFwic2F0XCJdO1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBub3cuc2V0VVRDSG91cnMobm93LmdldFVUQ0hvdXJzKCkgKyA4KTtcbiAgY29uc3QgcmVzdWx0ID0geyB5ZWFyOiAwLCBtb250aDogMCwgZGF5OiAwLCB3ZWVrZGF5OiBcInN1blwiIH07XG4gIHJlc3VsdC55ZWFyID0gbm93LmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHJlc3VsdC5tb250aCA9IG5vdy5nZXRVVENNb250aCgpICsgMTtcbiAgcmVzdWx0LmRheSA9IG5vdy5nZXRVVENEYXRlKCk7XG4gIHJlc3VsdC53ZWVrZGF5ID0gd2Vla1tub3cuZ2V0RGF5KCldO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbi8vbmV4dGpzIGZ1bmN0aW9uIC0gZmV0Y2ggZGF0YSBhdCBidWlsZCB0aW1lIG9uIHNlcnZlciBzaWRlXG4vL2N1cnJlbnRseSBnZXRTdGF0aWNQcm9wcyBpcyBub3QgYWxsb3dlZCB0byBiZSB1c2VkIG9uIGxheWVyIGNvbXBvbmVudCAoZS5nLiBzdW4uanMpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIGNvbnN0IHsgeWVhciwgbW9udGgsIGRheSB9ID0gZ2V0Q3VycmVudFRpbWUoKTtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vZGF0YS53ZWF0aGVyLmdvdi5oay93ZWF0aGVyQVBJL29wZW5kYXRhL29wZW5kYXRhLnBocD9kYXRhVHlwZT1TUlMmbGFuZz1lbiZyZm9ybWF0PWpzb24meWVhcj0ke3llYXJ9Jm1vbnRoPSR7bW9udGh9JmRheT0ke2RheX1gXG4gICk7XG4gIGNvbnN0IHRpbWVzID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgaWYgKCF0aW1lcylcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHt9LFxuICAgIH07XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgdGltZXMgfSxcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=