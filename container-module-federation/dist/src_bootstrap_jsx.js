"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcontainer"] = self["webpackChunkcontainer"] || []).push([["src_bootstrap_jsx"],{

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"App\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_marketing_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/marketing-react */ \"./src/components/marketing-react/index.jsx\");\n\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h1\", null, \"ola mundo\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"hr\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_marketing_react__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n};\n\n//# sourceURL=webpack://container/./src/app.jsx?");

/***/ }),

/***/ "./src/bootstrap.jsx":
/*!***************************!*\
  !*** ./src/bootstrap.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"webpack/sharing/consume/default/react-dom/react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ \"./src/app.jsx\");\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default().render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_app__WEBPACK_IMPORTED_MODULE_2__.App, null), document.querySelector('#root824627842'));\n\n//# sourceURL=webpack://container/./src/bootstrap.jsx?");

/***/ }),

/***/ "./src/components/marketing-react/index.jsx":
/*!**************************************************!*\
  !*** ./src/components/marketing-react/index.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var marketing_MarketApp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marketing/MarketApp */ \"webpack/container/remote/marketing/MarketApp\");\n/* harmony import */ var marketing_MarketApp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marketing_MarketApp__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var refMarketing = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    (0,marketing_MarketApp__WEBPACK_IMPORTED_MODULE_1__.mount)(refMarketing.current);\n  }); // ref e um objeto\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    ref: refMarketing\n  });\n});\n\n//# sourceURL=webpack://container/./src/components/marketing-react/index.jsx?");

/***/ })

}]);