webpackHotUpdate("static/development/pages/robots.js",{

/***/ "./pages/RobotCard.js":
/*!****************************!*\
  !*** ./pages/RobotCard.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _robots__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./robots */ "./pages/robots.js");
var _jsxFileName = "/Users/anthonycurtis/repos/zero_to_mastery_course/next-ssr/pages/RobotCard.js";



var RobotCard = function RobotCard(_ref) {
  var name = _ref.name,
      email = _ref.email,
      id = _ref.id;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: " tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://robohash.org/".concat(robot.id, "/set_set3?size=200x200"),
    alt: "Robot",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, email)));
};

/* harmony default export */ __webpack_exports__["default"] = (RobotCard);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/RobotCard")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=robots.js.6d856eeb2f0b215efe8b.hot-update.js.map