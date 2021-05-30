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
            lineNumber: 60,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "box"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
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
            lineNumber: 66,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "time",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "time-dot"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: times.data[0][1]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
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
            lineNumber: 75,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "time",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              className: "time-dot"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: times.data[0][3]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        className: "backdrop",
        src: "https://source.unsplash.com/1280x720/?sunrise",
        alt: "sunrise"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 55,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRhaW5lcnMvc3VuLmpzIl0sIm5hbWVzIjpbIlN1biIsInRpbWVzIiwiZ2V0VGltZSIsInVzZUVmZmVjdCIsImMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2xvY2siLCJzZXRJbnRlcnZhbCIsImlubmVySFRNTCIsIkRhdGUiLCJ0b1N0cmluZyIsInNsaWNlIiwiY2xlYW5VcCIsImNvbnNvbGUiLCJsb2ciLCJjbGVhckludGVydmFsIiwiZGF0ZSIsIndlZWtkYXkiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJkYXRhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNlLFNBQVNBLEdBQVQsT0FBaUM7QUFBQTs7QUFBQSxNQUFsQkMsS0FBa0IsUUFBbEJBLEtBQWtCO0FBQUEsTUFBWEMsT0FBVyxRQUFYQSxPQUFXO0FBQzlDQyxrREFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxDQUFDLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFWO0FBQ0EsUUFBSUMsS0FBSyxHQUFHQyxXQUFXLENBQUMsWUFBTTtBQUM1QkosT0FBQyxDQUFDSyxTQUFGLEdBQWMsSUFBSUMsSUFBSixHQUFXQyxRQUFYLEdBQXNCQyxLQUF0QixDQUE0QixFQUE1QixFQUFnQyxFQUFoQyxDQUFkO0FBQ0QsS0FGc0IsRUFFcEIsSUFGb0IsQ0FBdkI7QUFHQSxXQUFPLFNBQVNDLE9BQVQsR0FBbUI7QUFDeEJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLElBQVo7QUFDQUMsbUJBQWEsQ0FBQ1QsS0FBRCxDQUFiO0FBQ0QsS0FIRDtBQUlELEdBVFEsRUFTTixFQVRNLENBQVQ7QUFVQSxNQUFNVSxJQUFJLEdBQUdmLE9BQU8sRUFBcEI7QUFDQSxNQUFJLENBQUNELEtBQUwsRUFDRSxvQkFDRTtBQUFBLDJCQUNFO0FBQVMsZUFBUyxFQUFDLEtBQW5CO0FBQUEsOEJBQ0U7QUFBSyxpQkFBUyxFQUFD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cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdW4oeyB0aW1lcywgZ2V0VGltZSB9KSB7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb2NrXCIpO1xyXG4gICAgbGV0IGNsb2NrID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjLmlubmVySFRNTCA9IG5ldyBEYXRlKCkudG9TdHJpbmcoKS5zbGljZSgxNiwgMjQpO1xyXG4gICAgfSwgMTAwMCk7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gY2xlYW5VcCgpIHtcclxuICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcclxuICAgICAgY2xlYXJJbnRlcnZhbChjbG9jayk7XHJcbiAgICB9O1xyXG4gIH0sIFtdKTtcclxuICBjb25zdCBkYXRlID0gZ2V0VGltZSgpO1xyXG4gIGlmICghdGltZXMpXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInN1blwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiIGRhdGEtc2FkPVwiZmxpcC11cFwiIGRhdGEtZHVyYXRpb249XCJzbG93ZXN0XCI+XHJcbiAgICAgICAgICAgICAge2RhdGUud2Vla2RheX0mbmJzcDt8Jm5ic3A7e2RhdGUueWVhcn0te2RhdGUubW9udGh9LXtkYXRlLmRheX1cclxuICAgICAgICAgICAgICAmbmJzcDt8Jm5ic3A7XHJcbiAgICAgICAgICAgICAgPHNwYW4gaWQ9XCJjbG9ja1wiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCIgZGF0YS1zYWQ9XCJjbGlwLXJlY3RcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIHN1bnJpc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBkYXRhLXNhZD1cImZhZGUtbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5TVU5SSVNFPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aW1lXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0aW1lLWRvdFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPk5PIERBVEE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZm8gc3Vuc2V0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgZGF0YS1zYWQ9XCJmYWRlLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlNVTlNFVDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZS1kb3RcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5OTyBEQVRBPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJiYWNrZHJvcFwiXHJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vc291cmNlLnVuc3BsYXNoLmNvbS8xMjgweDcyMC8/c3VucmlzZVwiXHJcbiAgICAgICAgICAgIGFsdD1cInN1bnJpc2VcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICBlbHNlXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInN1blwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiIGRhdGEtc2FkPVwiZmxpcC11cFwiIGRhdGEtZHVyYXRpb249XCJzbG93ZXN0XCIgZGF0YS1kZWxheT1cImxvbmdlc3RcIj5cclxuICAgICAgICAgICAgICB7ZGF0ZS53ZWVrZGF5fSZuYnNwO3wmbmJzcDt7ZGF0ZS55ZWFyfS17ZGF0ZS5tb250aH0te2RhdGUuZGF5fVxyXG4gICAgICAgICAgICAgICZuYnNwO3wmbmJzcDtcclxuICAgICAgICAgICAgICA8c3BhbiBpZD1cImNsb2NrXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIHN1bnJpc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBkYXRhLXNhZD1cImZhZGUtbGVmdFwiIGRhdGEtZGVsYXk9XCJsb25nXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlNVTlJJU0U8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpbWVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpbWUtZG90XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3RpbWVzLmRhdGFbMF1bMV19PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvIHN1bnNldFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIGRhdGEtc2FkPVwiZmFkZS1yaWdodFwiIGRhdGEtZGVsYXk9XCJsb25nXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlNVTlNFVDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGltZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGltZS1kb3RcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57dGltZXMuZGF0YVswXVszXX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJhY2tkcm9wXCJcclxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9zb3VyY2UudW5zcGxhc2guY29tLzEyODB4NzIwLz9zdW5yaXNlXCJcclxuICAgICAgICAgICAgYWx0PVwic3VucmlzZVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=