self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/containers/sun.js":
/*!*******************************!*\
  !*** ./src/containers/sun.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Sun; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\R\\Documents\\coding\\design\\hkweather\\src\\containers\\sun.js",
    _s = $RefreshSig$();


function Sun(_ref) {
  _s();

  var times = _ref.times,
      getTime = _ref.getTime;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var c = document.getElementById("clock");
    var clock = setInterval(function () {
      c.innerHTML = new Date().toString().slice(16, 24);
    }, 1000);
    return function cleanUp() {
      console.log("ok");
      clearInterval(clock);
    };
  }, []);
  var date = getTime();
  if (!times) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "sun",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "date",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text",
          "data-sad": "flip-up",
          "data-duration": "slowest",
          children: [date.weekday, "\xA0|\xA0", date.year, "-", date.month, "-", date.day, "\xA0|\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            id: "clock"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "box",
          "data-sad": "clip-rect"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "info sunrise",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container",
          "data-sad": "fade-left",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "title",
            children: "SUNRISE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "time",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "time-dot"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "NO DATA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "info sunset",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container",
          "data-sad": "fade-right",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "title",
            children: "SUNSET"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "time",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "time-dot"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: "NO DATA"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        loading: "lazy",
        className: "backdrop",
        src: "https://source.unsplash.com/1280x720/?sunrise",
        alt: "sunrise"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }, this)
  }, void 0, false);else return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: "sun",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "date",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "text",
          "data-sad": "flip-up",
          "data-duration": "slowest",
          "data-delay": "longest",
          children: [date.weekday, "\xA0|\xA0", date.year, "-", date.month, "-", date.day, "\xA0|\xA0", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            id: "clock"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "box"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "info sunrise",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container",
          "data-sad": "fade-left",
          "data-delay": "long",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "title",
            children: "SUNRISE"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "time",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "time-dot"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: times.data[0][1]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "info sunset",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "container",
          "data-sad": "fade-right",
          "data-delay": "long",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "title",
            children: "SUNSET"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "time",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "time-dot"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: times.data[0][3]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "backdrop",
        src: "https://source.unsplash.com/1280x720/?sunrise",
        alt: "sunrise"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }, this)
  }, void 0, false);
}

_s(Sun, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = Sun;

var _c;

$RefreshReg$(_c, "Sun");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvc3VuLmpzIl0sIm5hbWVzIjpbIlN1biIsInRpbWVzIiwiZ2V0VGltZSIsInVzZUVmZmVjdCIsImMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xvY2siLCJzZXRJbnRlcnZhbCIsImlubmVySFRNTCIsIkRhdGUiLCJ0b1N0cmluZyIsInNsaWNlIiwiY2xlYW5VcCIsImNvbnNvbGUiLCJsb2ciLCJjbGVhckludGVydmFsIiwiZGF0ZSIsIndlZWtkYXkiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNlLFNBQVNBLEdBQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFsQkMsS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQzlDQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxDQUFDLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFWO0FBQ0EsUUFBSUMsS0FBSyxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUM1QkosT0FBQyxDQUFDSyxTQUFGLEdBQWMsSUFBSUMsSUFBSixHQUFXQyxRQUFYLEdBQXNCQyxLQUF0QixDQUE0QixFQUE1QixFQUFnQyxFQUFoQyxDQUFkO0FBQ0QsS0FGc0IsRUFFcEIsSUFGb0IsQ0FBdkI7QUFHQSxXQUFPLFNBQVNDLE9BQVQsR0FBbUI7QUFDeEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDQUMsbUJBQWEsQ0FBQ1QsS0FBRCxDQUFiO0FBQ0QsS0FIRDtBQUlELEdBVFEsRUFTTixFQVRNLENBQVQ7QUFVQSxNQUFNVSxJQUFJLEdBQUdmLE9BQU8sRUFBcEI7QUFDQSxNQUFJLENBQUNELEtBQUwsRUFDRSxvQkFDRTtBQUFBLDJCQUNFO0FBQVMsZUFBUyxFQUFDLEtBQW5CO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFD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NWZiYmRkNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1bih7IHRpbWVzLCBnZXRUaW1lIH0pIHtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvY2tcIik7XHJcbiAgICBsZXQgY2xvY2sgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIGMuaW5uZXJIVE1MID0gbmV3IERhdGUoKS50b1N0cmluZygpLnNsaWNlKDE2LCAyNCk7XHJcbiAgICB9LCAxMDAwKTtcclxuICAgIHJldHVybiBmdW5jdGlvbiBjbGVhblVwKCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIm9rXCIpO1xyXG4gICAgICBjbGVhckludGVydmFsKGNsb2NrKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG4gIGNvbnN0IGRhdGUgPSBnZXRUaW1lKCk7XHJcbiAgaWYgKCF0aW1lcylcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic3VuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCIgZGF0YS1zYWQ9XCJmbGlwLXVwXCIgZGF0YS1kdXJhdGlvbj1cInNsb3dlc3RcIj5cclxuICAgICAgICAgICAgICB7ZGF0ZS53ZWVrZGF5fSZuYnNwO3wmbmJzcDt7ZGF0ZS55ZWFyfS17ZGF0ZS5tb250aH0te2RhdGUuZGF5fVxyXG4gICAgICAgICAgICAgICZuYnNwO3wmbmJzcDtcclxuICAgICAgICAgICAgICA8c3BhbiBpZD1cImNsb2NrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIiBkYXRhLXNhZD1cImNsaXAtcmVjdFwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gc3VucmlzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGRhdGEtc2FkPVwiZmFkZS1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlNVTlJJU0U8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWUtZG90XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+Tk8gREFUQTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5mbyBzdW5zZXRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBkYXRhLXNhZD1cImZhZGUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+U1VOU0VUPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lLWRvdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPk5PIERBVEE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhY2tkcm9wXCJcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tLzEyODB4NzIwLz9zdW5yaXNlXCJcclxuICAgICAgICAgICAgYWx0PVwic3VucmlzZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG4gIGVsc2VcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwic3VuXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhdGVcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCIgZGF0YS1zYWQ9XCJmbGlwLXVwXCIgZGF0YS1kdXJhdGlvbj1cInNsb3dlc3RcIiBkYXRhLWRlbGF5PVwibG9uZ2VzdFwiPlxyXG4gICAgICAgICAgICAgIHtkYXRlLndlZWtkYXl9Jm5ic3A7fCZuYnNwO3tkYXRlLnllYXJ9LXtkYXRlLm1vbnRofS17ZGF0ZS5kYXl9XHJcbiAgICAgICAgICAgICAgJm5ic3A7fCZuYnNwO1xyXG4gICAgICAgICAgICAgIDxzcGFuIGlkPVwiY2xvY2tcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveFwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gc3VucmlzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGRhdGEtc2FkPVwiZmFkZS1sZWZ0XCIgZGF0YS1kZWxheT1cImxvbmdcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+U1VOUklTRTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZS1kb3RcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57dGltZXMuZGF0YVswXVsxXX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gc3Vuc2V0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgZGF0YS1zYWQ9XCJmYWRlLXJpZ2h0XCIgZGF0YS1kZWxheT1cImxvbmdcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+U1VOU0VUPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lLWRvdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPnt0aW1lcy5kYXRhWzBdWzNdfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmFja2Ryb3BcIlxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL3NvdXJjZS51bnNwbGFzaC5jb20vMTI4MHg3MjAvP3N1bnJpc2VcIlxyXG4gICAgICAgICAgICBhbHQ9XCJzdW5yaXNlXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==