"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkmarketing"] = self["webpackChunkmarketing"] || []).push([["src_bootstrap_jsx"],{

/***/ "./src/GlobalStyles.js":
/*!*****************************!*\
  !*** ./src/GlobalStyles.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject;\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  *{\\n      padding: 0px;\\n      margin: 0px;\\n      outline: 0px;\\n      box-sizing: border-box;\\n      font-family: 'Be Vietnam Pro', sans-serif;\\n\\n  }\\n\\n  html,body, #root{\\n      height: 100%;\\n      background-color: \", \";\\n  }\\n\\n  *,button,input{\\n       border: none;\\n\\n  }\\n\"])), function (_ref) {\n  var theme = _ref.theme;\n  return theme.colors.secondary;\n}));\n\n//# sourceURL=webpack://marketing/./src/GlobalStyles.js?");

/***/ }),

/***/ "./src/app.jsx":
/*!*********************!*\
  !*** ./src/app.jsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_landing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/landing-page */ \"./src/components/landing-page/index.jsx\");\n/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalStyles */ \"./src/GlobalStyles.js\");\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/theme */ \"./src/styles/theme.js\");\n\n\n\n\n\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(styled_components__WEBPACK_IMPORTED_MODULE_4__.ThemeProvider, {\n    theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_GlobalStyles__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_landing_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://marketing/./src/app.jsx?");

/***/ }),

/***/ "./src/bootstrap.jsx":
/*!***************************!*\
  !*** ./src/bootstrap.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"mount\": () => (/* binding */ mount)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app */ \"./src/app.jsx\");\n\n\n\n\nvar mount = function mount(element) {\n  react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_app__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null)), element);\n};\n\nif (true) {\n  var root = document.getElementById(\"root\");\n\n  if (root) {\n    mount(root);\n  }\n}\n\n\n\n//# sourceURL=webpack://marketing/./src/bootstrap.jsx?");

/***/ }),

/***/ "./src/components/card/index.jsx":
/*!***************************************!*\
  !*** ./src/components/card/index.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Card\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles */ \"./src/components/card/styles.js\");\n\n\nvar Card = function Card() {\n  //https://picsum.photos/\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Image, {\n    src: \"https://picsum.photos/200/300\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.WrapContainer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Title, null, \"Heading\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.SubTitle, null, \"This is a media card. You can use this section to describe this content\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.WrapButton, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Button, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.TextButton, null, \"View\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.Button, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_1__.TextButton, null, \"Edit\")))));\n};\n\n//# sourceURL=webpack://marketing/./src/components/card/index.jsx?");

/***/ }),

/***/ "./src/components/card/styles.js":
/*!***************************************!*\
  !*** ./src/components/card/styles.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"Image\": () => (/* binding */ Image),\n/* harmony export */   \"WrapContainer\": () => (/* binding */ WrapContainer),\n/* harmony export */   \"Title\": () => (/* binding */ Title),\n/* harmony export */   \"SubTitle\": () => (/* binding */ SubTitle),\n/* harmony export */   \"WrapButton\": () => (/* binding */ WrapButton),\n/* harmony export */   \"Button\": () => (/* binding */ Button),\n/* harmony export */   \"TextButton\": () => (/* binding */ TextButton)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8;\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"sc-1xx2jpe-0\"\n})(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: column;\\n  width: 300px;\\n  gap: 20px;\\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\\n  background-color: \", \";\\n\"])), function (_ref) {\n  var theme = _ref.theme;\n  return theme.colors.primary;\n});\nvar Image = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].img.withConfig({\n  displayName: \"styles__Image\",\n  componentId: \"sc-1xx2jpe-1\"\n})(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 300px;\\n  height: 300px;\\n\"])));\nvar WrapContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].article.withConfig({\n  displayName: \"styles__WrapContainer\",\n  componentId: \"sc-1xx2jpe-2\"\n})(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n  padding: 15px;\\n\"])));\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h3.withConfig({\n  displayName: \"styles__Title\",\n  componentId: \"sc-1xx2jpe-3\"\n})(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-weight: 500;\\n  font-size: 30px;\\n  line-height: 35px;\\n  color: \", \";\\n\"])), function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.colors.black;\n});\nvar SubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n  displayName: \"styles__SubTitle\",\n  componentId: \"sc-1xx2jpe-4\"\n})(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-weight: 300;\\n  font-size: 15px;\\n  line-height: 20px;\\n  color: \", \";\\n\"])), function (_ref3) {\n  var theme = _ref3.theme;\n  return theme.colors.black;\n});\nvar WrapButton = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button.withConfig({\n  displayName: \"styles__WrapButton\",\n  componentId: \"sc-1xx2jpe-5\"\n})(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  gap: 35px;\\n  background-color: transparent;\\n\"])));\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button.withConfig({\n  displayName: \"styles__Button\",\n  componentId: \"sc-1xx2jpe-6\"\n})(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: transparent;\\n  border: none;\\n  cursor: pointer;\\n\"])));\nvar TextButton = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span.withConfig({\n  displayName: \"styles__TextButton\",\n  componentId: \"sc-1xx2jpe-7\"\n})(_templateObject8 || (_templateObject8 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-weight: 300;\\n  font-size: 15px;\\n  line-height: 20px;\\n  color: \", \";\\n  &:hover {\\n    color: \", \";\\n    text-decoration: underline;\\n    text-decoration-color: \", \";\\n  }\\n\"])), function (_ref4) {\n  var theme = _ref4.theme;\n  return theme.colors.black;\n}, function (_ref5) {\n  var theme = _ref5.theme;\n  return theme.colors.blue;\n}, function (_ref6) {\n  var theme = _ref6.theme;\n  return theme.colors.blue;\n});\n\n//# sourceURL=webpack://marketing/./src/components/card/styles.js?");

/***/ }),

/***/ "./src/components/landing-page/index.jsx":
/*!***********************************************!*\
  !*** ./src/components/landing-page/index.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../card */ \"./src/components/card/index.jsx\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles */ \"./src/components/landing-page/styles.js\");\n\n\n\n\nvar LandingPage = function LandingPage() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Container, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Title, null, \"Home Page\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.WrapSubTitle, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.SubWrap, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Description, null, \"Something short and leading about the collection below- its content,the creator,etc.Make it short and sweet,but not too short so folks dont simply skip over it entirely\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.WrapButton, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    isClicked: false\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.TitleButton, {\n    isClicked: false\n  }, \"Pricing\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Button, {\n    isClicked: true\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.TitleButton, {\n    isClicked: true\n  }, \"Pricing\"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Section, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_card__WEBPACK_IMPORTED_MODULE_1__.Card, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_card__WEBPACK_IMPORTED_MODULE_1__.Card, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_card__WEBPACK_IMPORTED_MODULE_1__.Card, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_card__WEBPACK_IMPORTED_MODULE_1__.Card, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_card__WEBPACK_IMPORTED_MODULE_1__.Card, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Footer, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.TitleFooter, null, \" Footer \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.DescriptionFooter, null, \"Something here to give the footer a purpose!\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_styles__WEBPACK_IMPORTED_MODULE_2__.Finally, null, \"Copyright@ Yor Website 2020\")));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LandingPage);\n\n//# sourceURL=webpack://marketing/./src/components/landing-page/index.jsx?");

/***/ }),

/***/ "./src/components/landing-page/styles.js":
/*!***********************************************!*\
  !*** ./src/components/landing-page/styles.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": () => (/* binding */ Container),\n/* harmony export */   \"Title\": () => (/* binding */ Title),\n/* harmony export */   \"WrapSubTitle\": () => (/* binding */ WrapSubTitle),\n/* harmony export */   \"SubWrap\": () => (/* binding */ SubWrap),\n/* harmony export */   \"Description\": () => (/* binding */ Description),\n/* harmony export */   \"WrapButton\": () => (/* binding */ WrapButton),\n/* harmony export */   \"TitleButton\": () => (/* binding */ TitleButton),\n/* harmony export */   \"Button\": () => (/* binding */ Button),\n/* harmony export */   \"Section\": () => (/* binding */ Section),\n/* harmony export */   \"Footer\": () => (/* binding */ Footer),\n/* harmony export */   \"TitleFooter\": () => (/* binding */ TitleFooter),\n/* harmony export */   \"DescriptionFooter\": () => (/* binding */ DescriptionFooter),\n/* harmony export */   \"Finally\": () => (/* binding */ Finally)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nvar _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6, _templateObject7, _templateObject8, _templateObject9, _templateObject10, _templateObject11, _templateObject12, _templateObject13, _templateObject14;\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styles__Container\",\n  componentId: \"sc-ghv8fq-0\"\n})(_templateObject || (_templateObject = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  width: 100%;\\n  min-height: 100%;\\n  padding: 20px 50px;\\n  gap: 55px;\\n\"])));\nvar Title = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h2.withConfig({\n  displayName: \"styles__Title\",\n  componentId: \"sc-ghv8fq-1\"\n})(_templateObject2 || (_templateObject2 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  text-align: center;\\n  margin-bottom: 50px;\\n  font-weight: 500;\\n  font-size: 30px;\\n  line-height: 35px;\\n  margin-top: 20px;\\n  color: \", \";\\n\"])), function (_ref) {\n  var theme = _ref.theme;\n  return theme.colors.black;\n});\nvar WrapSubTitle = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].article.withConfig({\n  displayName: \"styles__WrapSubTitle\",\n  componentId: \"sc-ghv8fq-2\"\n})(_templateObject3 || (_templateObject3 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 20px;\\n\"])));\nvar SubWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styles__SubWrap\",\n  componentId: \"sc-ghv8fq-3\"\n})(_templateObject4 || (_templateObject4 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 60%;\\n  flex-direction: column;\\n  gap: 20px;\\n\"])));\nvar Description = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n  displayName: \"styles__Description\",\n  componentId: \"sc-ghv8fq-4\"\n})(_templateObject5 || (_templateObject5 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 19px;\\n  line-height: 25px;\\n  font-weight: 400;\\n  text-align: center;\\n  color: \", \";\\n\"])), function (_ref2) {\n  var theme = _ref2.theme;\n  return theme.colors.black;\n});\nvar WrapButton = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].div.withConfig({\n  displayName: \"styles__WrapButton\",\n  componentId: \"sc-ghv8fq-5\"\n})(_templateObject6 || (_templateObject6 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  width: 100%;\\n  gap: 35px;\\n  align-items: center;\\n  justify-content: space-around;\\n\"])));\nvar TitleButton = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span.withConfig({\n  displayName: \"styles__TitleButton\",\n  componentId: \"sc-ghv8fq-6\"\n})(_templateObject7 || (_templateObject7 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 19px;\\n  line-height: 25px;\\n  text-align: center;\\n  color: \", \";\\n  font-weight: 300;\\n\"])), function (_ref3) {\n  var isClicked = _ref3.isClicked,\n      theme = _ref3.theme;\n  return isClicked ? theme.colors.blue : theme.colors.primary;\n});\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button.withConfig({\n  displayName: \"styles__Button\",\n  componentId: \"sc-ghv8fq-7\"\n})(_templateObject8 || (_templateObject8 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  padding: 10px 5px;\\n  width: 90px;\\n  border-radius: 5px;\\n  background-color: \", \";\\n  justify-content: center;\\n  align-items: center;\\n  cursor: pointer;\\n  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;\\n  // https://getcssscan.com/css-box-shadow-examples\\n  transition: all 0.1s ease-in-out;\\n  &:hover {\\n    opacity: 0.7;\\n  }\\n  \", \";\\n\"])), function (_ref4) {\n  var isClicked = _ref4.isClicked,\n      theme = _ref4.theme;\n  return isClicked ? \"transparent\" : theme.colors.blue;\n}, function (_ref5) {\n  var isClicked = _ref5.isClicked;\n  return isClicked && (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.css)(_templateObject9 || (_templateObject9 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n      border: 1px solid \", \";\\n    \"])), function (_ref6) {\n    var theme = _ref6.theme;\n    return theme.colors.blue;\n  });\n});\nvar Section = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].section.withConfig({\n  displayName: \"styles__Section\",\n  componentId: \"sc-ghv8fq-8\"\n})(_templateObject10 || (_templateObject10 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: grid;\\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\\n  width: 100%;\\n  grid-row-gap: 20px;\\n  justify-content: space-between;\\n  margin-top: 50px;\\n\"])));\nvar Footer = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].footer.withConfig({\n  displayName: \"styles__Footer\",\n  componentId: \"sc-ghv8fq-9\"\n})(_templateObject11 || (_templateObject11 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 15px;\\n\"])));\nvar TitleFooter = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].h6.withConfig({\n  displayName: \"styles__TitleFooter\",\n  componentId: \"sc-ghv8fq-10\"\n})(_templateObject12 || (_templateObject12 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 19px;\\n  line-height: 25px;\\n  font-weight: 400;\\n\"])));\nvar DescriptionFooter = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].p.withConfig({\n  displayName: \"styles__DescriptionFooter\",\n  componentId: \"sc-ghv8fq-11\"\n})(_templateObject13 || (_templateObject13 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 15px;\\n  line-height: 20px;\\n  font-weight: 300;\\n\"])));\nvar Finally = styled_components__WEBPACK_IMPORTED_MODULE_1__[\"default\"].span.withConfig({\n  displayName: \"styles__Finally\",\n  componentId: \"sc-ghv8fq-12\"\n})(_templateObject14 || (_templateObject14 = (0,_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  font-size: 12px;\\n  line-height: 17px;\\n  font-weight: 300;\\n\"])));\n\n//# sourceURL=webpack://marketing/./src/components/landing-page/styles.js?");

/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  colors: {\n    primary: \"#FFFF\",\n    secondary: \"#FBFBF8\",\n    black: \"#1B1E23\",\n    blue: \"#7575ff\"\n  }\n});\n\n//# sourceURL=webpack://marketing/./src/styles/theme.js?");

/***/ })

}]);