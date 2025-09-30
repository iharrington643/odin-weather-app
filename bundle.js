/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/clouds-1923545_1280.png */ \"./src/images/clouds-1923545_1280.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    width: 100vw;\n    margin: 0;\n    padding: 0;\n    font-family: Poppins;\n}\n\n#home-header {\n    margin: 0;\n    padding-left: max(20px, 2vw);\n    width: 96vw;\n    height: max(70px, 10vh);\n    background-color: white;\n    display: flex;\n    gap: 5px;\n    align-items: center;\n}\n\n#header-logo {\n    width: 75px;\n    height: 75px;\n}\n\n.header-text {\n    color: rgba(34, 128, 171, 1);\n    font-weight: 400;\n    font-size: 37px;\n}\n\n#site-body {\n    width: max(660px, 100vw);\n    height: max(600px, 90vh);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: cover;\n}\n\n#search-container {\n    background-color: rgba(37, 149, 190, 0.709);\n    padding: 25px;\n    height: 225px;\n    width: clamp(365px, 50vw, 500px);\n    border-radius: 10px;\n    display: grid;\n    grid-template-rows: 1fr 1fr 1fr;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n}\n\n#search-form {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n#search-bar {\n    background-color: white;\n    margin-bottom: 20px;\n    margin-left: 20px;\n    padding-left: 10px;\n    grid-row: 3 / 4;\n    height: 40px;\n    width: 300px;\n    border-radius: 12px;\n    border: 2px solid lightblue;\n    font-family: 'Poppins';\n}\n\n#submit-button {\n    background-color: transparent;\n    border-color: transparent;\n    color: white;\n    transform: scaleX(-1);\n    font-size: 40px;\n    margin-bottom: 24px;\n}\n\n#search-heading {\n    margin-bottom: 0px;\n    font-size: 25px;\n    font-weight: bold;\n    grid-row: 1 / 2;\n    color: white;\n    -webkit-text-stroke: 1px rgb(37, 150, 190);\n}\n\n#search-desc {\n    font-style: italic;\n    height: 45px;\n    font-size: 14px;\n    margin-top: 0px;\n    margin-bottom: 0px;\n    grid-row: 2 / 3;\n    color: white;\n    white-space: nowrap;\n}\n\n#search-bar:focus {\n    outline: none;\n}\n\n#weather-container {\n    background-color: rgba(37, 149, 190, 0.709);\n    padding: 25px;\n    height: clamp(260px, 40vw, 470px);\n    width: clamp(560px, 80vw, 1000px);\n    border-radius: 10px;\n}\n\n#current-weather-panel {\n    position: relative;\n    width: 99%;\n    height: 60%;\n    background-color: white;\n    border-radius: 10px;\n    border-left: 8px solid #F4CE26;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 4%;\n    font-size: 18px;\n}\n\n#weekly-weather-container {\n    margin-top: 20px;\n    height: 35%;\n    display: flex;\n    gap: 22px;\n}\n\n.weather-panel {\n    border-radius: 10px;\n    width: max(80px, 18%);\n    height: 100%;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-left: 8px solid #F4CE26;\n    font-size: 10px;\n}\n\n.unit-toggle {\n    width: 60px;\n    height: 35px;\n    background-color: rgb(37, 150, 190);\n    border-radius: 16px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    position: absolute;\n    bottom: 5%;\n    right: 1.5%;\n}\n\n.toggle-button {\n    color: black;\n    font-size: 10px;\n    margin-left: 4px;\n    margin-right: 4px;\n    border-radius: 50%;\n    border-color: transparent;\n    background-color: white;\n    height: 28px;\n    width: 28px;\n}\n\n#current-weather-text {\n    font-size: max(11px, 1.3vw);\n}\n\n#current-weather-icon {\n    margin-left: 4%;\n    width: 19%;\n    height: 65%;\n}\n\n.weather-panel-icon {\n    margin-top: 7%;\n    width: clamp(44px, 50%, 80px);\n    height: 49%;\n}\n\n.weather-panel-text {\n    font-size: clamp(8px, 1.1vw, 14px);\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://odin-weather-app/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://odin-weather-app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHome: () => (/* binding */ loadHome)\n/* harmony export */ });\n/* harmony import */ var _images_weather_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/weather-svgrepo-com.svg */ \"./src/images/weather-svgrepo-com.svg\");\n\n\nfunction loadHome() {\n    // Clear out the document body's contents every time loadHome() is iterated\n    document.body.innerHTML = '';\n\n    // Create header and its corresponding text and logo elements\n    const homeHeader = document.createElement('header');\n    homeHeader.id = 'home-header';\n    document.body.appendChild(homeHeader);\n\n    const headerLogo = document.createElement('img');\n    headerLogo.id = 'header-logo';\n    headerLogo.src = _images_weather_svgrepo_com_svg__WEBPACK_IMPORTED_MODULE_0__;\n    homeHeader.appendChild(headerLogo);\n\n    const headerText = document.createElement('p');\n    headerText.classList.add('header-text');\n    headerText.innerHTML = 'Weather<b><span style=\"color: #F4CE26;\">Cast</span></b>';\n    homeHeader.appendChild(headerText);\n\n    // Create site body to separate the rest of the page from the header\n    const siteBody = document.createElement('div');\n    siteBody.id = 'site-body';\n    document.body.appendChild(siteBody);\n\n    // Create search container comprised of a heading, description, and search form\n    const searchContainer = document.createElement('div');\n    searchContainer.id = 'search-container';\n    siteBody.appendChild(searchContainer);\n\n    const searchHeading = document.createElement('p');\n    searchHeading.id = 'search-heading';\n    searchHeading.textContent = \"Welcome to WeatherCast!\";\n    searchContainer.appendChild(searchHeading);\n\n    const searchDesc = document.createElement('p');\n    searchDesc.id = 'search-desc';\n    searchDesc.textContent = \"Enter a location name or ZIP code to see its forecast.\"\n    searchContainer.appendChild(searchDesc);\n\n    const searchForm = document.createElement('form');\n    searchForm.action = '/search';\n    searchForm.setAttribute(\"method\", \"get\");\n    searchForm.id = 'search-form';\n    searchContainer.appendChild(searchForm);\n\n    // Create a search bar input element and a submit button to create a functional search tool\n    const searchBar = document.createElement('input');\n    searchBar.setAttribute(\"type\", \"search\");\n    searchBar.placeholder = 'Search for a location...';\n    searchBar.id = 'search-bar';\n    searchForm.appendChild(searchBar);\n\n    const submitButton = document.createElement('button');\n    submitButton.id = 'submit-button';\n    submitButton.type = 'submit';\n    submitButton.textContent = '⌕';\n    searchForm.appendChild(submitButton);\n}\n\n//# sourceURL=webpack://odin-weather-app/./src/home.js?\n}");

/***/ }),

/***/ "./src/images/clear-day.png":
/*!**********************************!*\
  !*** ./src/images/clear-day.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"images/clear-day.png\";\n\n//# sourceURL=webpack://odin-weather-app/./src/images/clear-day.png?\n}");

/***/ }),

/***/ "./src/images/clear-night.png":
/*!************************************!*\
  !*** ./src/images/clear-night.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"images/clear-night.png\";\n\n//# sourceURL=webpack://odin-weather-app/./src/images/clear-night.png?\n}");

/***/ }),

/***/ "./src/images/clouds-1923545_1280.png":
/*!********************************************!*\
  !*** ./src/images/clouds-1923545_1280.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"images/clouds-1923545_1280.png\";\n\n//# sourceURL=webpack://odin-weather-app/./src/images/clouds-1923545_1280.png?\n}");

/***/ }),

/***/ "./src/images/cloudy.png":
/*!*******************************!*\
  !*** ./src/images/cloudy.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"images/cloudy.png\";\n\n//# sourceURL=webpack://odin-weather-app/./src/images/cloudy.png?\n}");

/***/ }),

/***/ "./src/images/fog.png":
/*!****************************!*\
  !*** ./src/images/fog.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"images/fog.png\";\n\n//# sourceURL=webpack://odin-weather-app/./src/images/fog.png?\n}");

/***/ }),

/***/ "./src/images/partly-cloudy-day.png":
/*!******************************************!*\
  !*** ./src/images/partly-cloudy-day.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"images/partly-cloudy-day.png\";\n\n//# sourceURL=webpack://odin-weather-app/./src/images/partly-cloudy-day.png?\n}");

/***/ }),

/***/ "./src/images/partly-cloudy-night.png":
/*!********************************************!*\
  !*** ./src/images/partly-cloudy-night.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"images/partly-cloudy-night.png\";\n\n//# sourceURL=webpack://odin-weather-app/./src/images/partly-cloudy-night.png?\n}");

/***/ }),

/***/ "./src/images/rain.png":
/*!*****************************!*\
  !*** ./src/images/rain.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"images/rain.png\";\n\n//# sourceURL=webpack://odin-weather-app/./src/images/rain.png?\n}");

/***/ }),

/***/ "./src/images/snow.png":
/*!*****************************!*\
  !*** ./src/images/snow.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"images/snow.png\";\n\n//# sourceURL=webpack://odin-weather-app/./src/images/snow.png?\n}");

/***/ }),

/***/ "./src/images/weather-svgrepo-com.svg":
/*!********************************************!*\
  !*** ./src/images/weather-svgrepo-com.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"images/weather-svgrepo-com.svg\";\n\n//# sourceURL=webpack://odin-weather-app/./src/images/weather-svgrepo-com.svg?\n}");

/***/ }),

/***/ "./src/images/wind.png":
/*!*****************************!*\
  !*** ./src/images/wind.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"images/wind.png\";\n\n//# sourceURL=webpack://odin-weather-app/./src/images/wind.png?\n}");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   jsonObject: () => (/* binding */ jsonObject),\n/* harmony export */   launchSearch: () => (/* binding */ launchSearch)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.js */ \"./src/weather.js\");\n\n\n// Import page-loading functions from respective .js files\n\n\n\n// Create blank jsonObject to load API data into and export\nlet jsonObject = {};\n// Establish validLocation variable to be used to test location input\nlet validLocation = true;\n\nfunction launchSearch() {\n    const searchForm = document.getElementById('search-form');\n\n    // Add event listener to search form that loads the weather page if validLocation == true\n    searchForm.addEventListener('submit', async function(event) {\n        const searchInput = document.getElementById('search-bar').value;\n\n        event.preventDefault();\n\n        // Run the asyncronous fetchWeather() function and wait for it to fetch weather results for location input\n        await fetchWeather(searchInput);\n        if (validLocation != false) {\n            (0,_weather_js__WEBPACK_IMPORTED_MODULE_2__.loadWeatherPage)();\n        } else {\n            // If validLocation == false after fetchWeather() is run, reset the search form and set validLocation back to true\n            alert(\"Invalid location.  Please try again.\");\n            searchForm.reset();\n            validLocation = true;\n        }\n    })\n}\n\n// Establish asychronous function that takes location input\nasync function fetchWeather(location) {\n    try {\n        // Establish response variable and wait for it to fetch weather data for the location parameter\n        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=B9GWLUJEUZVXAPLZ6RJ3G6566&lang=en`);\n        \n        // If response is unsuccessful, throw an error\n        if (!response.ok) {\n            throw new Error(`Status: ${response.status}`);\n        }\n\n        // Create jsonData variable which waits for the response data to be retrieved in JSON form\n        const jsonData = await response.json();\n        // Set jsonObject's content equal to the jsonData JSON\n        jsonObject = jsonData;\n\n    } catch (error) {\n        // If an error occurs, display an error message to the console and set validLocation to false\n        console.error(\"Error fetching data\", error);\n        validLocation = false;\n    }\n}\n\n// Run the loadHome() and launchSearch() functions to make webpage functional\n(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\nlaunchSearch();\n\n\n//# sourceURL=webpack://odin-weather-app/./src/script.js?\n}");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://odin-weather-app/./src/style.css?\n}");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadWeatherPage: () => (/* binding */ loadWeatherPage)\n/* harmony export */ });\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _script_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script.js */ \"./src/script.js\");\n/* harmony import */ var _images_clear_day_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/clear-day.png */ \"./src/images/clear-day.png\");\n/* harmony import */ var _images_clear_night_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/clear-night.png */ \"./src/images/clear-night.png\");\n/* harmony import */ var _images_cloudy_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/cloudy.png */ \"./src/images/cloudy.png\");\n/* harmony import */ var _images_fog_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/fog.png */ \"./src/images/fog.png\");\n/* harmony import */ var _images_partly_cloudy_day_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/partly-cloudy-day.png */ \"./src/images/partly-cloudy-day.png\");\n/* harmony import */ var _images_partly_cloudy_night_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/partly-cloudy-night.png */ \"./src/images/partly-cloudy-night.png\");\n/* harmony import */ var _images_rain_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/rain.png */ \"./src/images/rain.png\");\n/* harmony import */ var _images_snow_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/snow.png */ \"./src/images/snow.png\");\n/* harmony import */ var _images_wind_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/wind.png */ \"./src/images/wind.png\");\n// Import page-loading functions from .js files, as well as jsonObject\n\n\n\n\n// Import weather icons from images directory\n\n\n\n\n\n\n\n\n\n\n// Create variable to keep track of what unit temperature is being reported in\nlet temperatureUnit = '°F';\n\n// Create fahrenheitToCelsius() conversion function to be run every time the temp unit is changed\nfunction fahrenheitToCelsius(tempF) {\n    // Use conversion formula to convert Fahrenheit to Celsius, then return the result rounded to 1 decimal place\n    let degreesCelsius = (tempF - 32) * (5/9);\n    return degreesCelsius.toFixed(1);\n};\n\n// Create getDate() function to return the current date in long written format (ex. Wednesday, September 8, 1979)\nfunction getDate() {\n    // Store the current date in the date variable\n    const date = new Date();\n\n    // Create options object to contain the ideal formatting for each piece of data\n    const options = {\n        weekday: 'long',\n        year: 'numeric',\n        month: 'long',\n        day: 'numeric'\n    }\n\n    // Use .toLocaleDateString() to return the date formatted using the options object\n    return date.toLocaleDateString('en-US', options);\n}\n\nfunction loadWeatherPage() {\n    const headerLogo = document.getElementById('header-logo');\n\n    const siteBody = document.getElementById('site-body');\n    siteBody.innerHTML = '';\n\n    const weatherContainer = document.createElement('div');\n    weatherContainer.id = 'weather-container';\n    siteBody.appendChild(weatherContainer);\n\n    // Create currentWeatherPanel and its corresponding icon and text elements for displaying daily weather\n    const currentWeatherPanel = document.createElement('div');\n    currentWeatherPanel.id = 'current-weather-panel';\n    weatherContainer.appendChild(currentWeatherPanel);\n\n    // Create unitToggle div and its child element toggleButton to simulate a toggle button\n    const unitToggle = document.createElement('div');\n    unitToggle.classList.add('unit-toggle');\n    currentWeatherPanel.appendChild(unitToggle);\n\n    const toggleButton = document.createElement('button');\n    toggleButton.classList.add('toggle-button');\n    // Set the innerHTMl of toggleButton equal to the current temperature unit\n    toggleButton.innerHTML = `${temperatureUnit}`;\n    unitToggle.appendChild(toggleButton);\n\n    const currentWeatherIcon = document.createElement('img');\n    currentWeatherIcon.id = 'current-weather-icon';\n    currentWeatherPanel.appendChild(currentWeatherIcon);\n\n    const currentWeatherText = document.createElement('p');\n    currentWeatherText.id = 'current-weather-text';\n    currentWeatherPanel.appendChild(currentWeatherText);\n\n    // Create weeklyWeatherContainer and its five child elements for displaying the 5-day forecast (including the current day)\n    const weeklyWeatherContainer = document.createElement('div');\n    weeklyWeatherContainer.id = 'weekly-weather-container';\n    weatherContainer.appendChild(weeklyWeatherContainer);\n\n    const weatherOne = document.createElement('div');\n    weatherOne.id = 'weather-one';\n    weatherOne.classList.add('weather-panel');\n    weeklyWeatherContainer.appendChild(weatherOne);\n\n    const weatherTwo = document.createElement('div');\n    weatherTwo.id = 'weather-two';\n    weatherTwo.classList.add('weather-panel');\n    weeklyWeatherContainer.appendChild(weatherTwo);\n\n    const weatherThree = document.createElement('div');\n    weatherThree.id = 'weather-three';\n    weatherThree.classList.add('weather-panel');\n    weeklyWeatherContainer.appendChild(weatherThree);\n\n    const weatherFour = document.createElement('div');\n    weatherFour.id = 'weather-four';\n    weatherFour.classList.add('weather-panel');\n    weeklyWeatherContainer.appendChild(weatherFour);\n\n    const weatherFive = document.createElement('div');\n    weatherFive.id = 'weather-five';\n    weatherFive.classList.add('weather-panel');\n    weeklyWeatherContainer.appendChild(weatherFive);\n\n    // Establish a weatherPanels object consisting of all elements of class weather-panel\n    const weatherPanels = document.getElementsByClassName('weather-panel');\n    Array.from(weatherPanels).forEach(weatherPanel => {\n        // For each weather panel, assign it icon and text elements for displaying info\n        const weatherPanelIcon = document.createElement('img');\n        weatherPanelIcon.classList.add('weather-panel-icon');\n        weatherPanel.appendChild(weatherPanelIcon);\n\n        const weatherPanelText = document.createElement('p');\n        weatherPanelText.classList.add('weather-panel-text');\n        weatherPanel.appendChild(weatherPanelText);\n    });\n\n    // Create a function to load all necessary information about the daily weather\n    function loadCurrentTextContent() {\n        let date = getDate();\n        // Establish a temperature variable to store the current temperature\n        let temperature = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.currentConditions.temp;\n        // Access the weather icon from the JSON object \n        let icon = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.currentConditions.icon;\n        let weatherCondition = '';\n        // Access the min and max temperature from the JSON object\n        let minTemp = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.days[0].tempmin;\n        let maxTemp = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.days[0].tempmax;\n\n        // Set weatherCondition's value dynamically depending on the value of icon\n        if (icon == 'clear-day' || icon == 'clear-night') {\n            weatherCondition = 'Clear';\n        } else if (icon == 'partly-cloudy-day' || icon == 'partly-cloudy-night') {\n            weatherCondition = 'Partly Cloudy';\n        } else if (icon == 'cloudy') {\n            weatherCondition = 'Cloudy';\n        } else if (icon == 'rain') {\n            weatherCondition = 'Rainy';\n        } else if (icon == 'snow') {\n            weatherCondition = 'Snowy';\n        } else if (icon == 'fog') {\n            weatherCondition = 'Foggy';\n        } else {\n            weatherCondition = 'Windy';\n        }\n\n        // If the temperature unit is set to Celsius, convert all temperature measurements using fahrenheitToCelsius()\n        if (temperatureUnit == '°C') {\n            temperature = fahrenheitToCelsius(temperature);\n            minTemp = fahrenheitToCelsius(minTemp);\n            maxTemp = fahrenheitToCelsius(maxTemp);\n        }\n\n        // Add textual information to the text section's innerHTML, applying custom formatting to emphasize information\n        currentWeatherText.innerHTML = `<span style=\"font-weight: bold; font-size: 1.3em;\">${_script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.resolvedAddress}</span><br>`;\n        currentWeatherText.innerHTML += `<span style=\"font-size: 0.7em;\">${date}</span><br><br>`;\n        currentWeatherText.innerHTML += `<span style=\"font-size: 2.8em; font-weight: bold;\">${temperature} ${temperatureUnit}</span><br>`;\n        currentWeatherText.innerHTML += `<span style=\"font-size: 0.9em;\">${minTemp} ${temperatureUnit} - ${maxTemp} ${temperatureUnit} • ${weatherCondition}</span>`;\n    }\n\n    // Create a function to load textual info about the 5-day weather forecast (min and max temp), taking the input 'day'\n    function loadWeeklyTextContent(day) {\n        const weatherPanelTexts = document.getElementsByClassName('weather-panel-text');\n        // Create a panelIndex variable to specify which weather panel text is being loaded into\n        let panelIndex = null;\n        // Make min and max temp equal to 0, as they will be updated later on\n        let minTemp = 0;\n        let maxTemp = 0;\n\n        // Dynamically set the min and max temp, as well as the panel index, assigning values corresponding with the day\n        if (day == 1) {\n            // For the first day, set the min and max temp equal to those of the first 'days' index\n            minTemp = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.days[0].tempmin;\n            maxTemp = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.days[0].tempmax;\n            // For the first day, set the panelIndex equal to that of the first panel\n            panelIndex = weatherPanelTexts[0];\n        } else if (day == 2) {\n            minTemp = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.days[1].tempmin;\n            maxTemp = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.days[1].tempmax;\n            panelIndex = weatherPanelTexts[1];\n        } else if (day == 3) {\n            minTemp = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.days[2].tempmin;\n            maxTemp = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.days[2].tempmax;\n            panelIndex = weatherPanelTexts[2];\n        } else if (day == 4) {\n            minTemp = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.days[3].tempmin;\n            maxTemp = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.days[3].tempmax;\n            panelIndex = weatherPanelTexts[3];\n        } else {\n            minTemp = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.days[4].tempmin;\n            maxTemp = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.days[4].tempmax;\n            panelIndex = weatherPanelTexts[4];\n        }\n\n        // If temperature unit is equal to Celsius, convert the min and max temp to Fahrenheit\n        if (temperatureUnit == '°C') {\n            minTemp = fahrenheitToCelsius(minTemp);\n            maxTemp = fahrenheitToCelsius(maxTemp);\n        }\n\n        // Append the textual information to the innerHTML of whichever panel is at the current panelIndex\n        panelIndex.innerHTML = `<span style=\"color: gray;\">${minTemp} ${temperatureUnit}</span><br>`;\n        panelIndex.innerHTML += `${maxTemp} ${temperatureUnit}`;\n    }\n\n    // Create a function to load the icon for the daily weather\n    function loadCurrentIcon() {\n        // Get the icon info from jsonObject and assign it to icon\n        let icon = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.currentConditions.icon;\n\n        // Dynamically set the icon image depending on the weather condition\n        if (icon == 'clear-day') {\n            // Set the src equal to the corresponding image link\n            currentWeatherIcon.src = _images_clear_day_png__WEBPACK_IMPORTED_MODULE_2__;\n        } else if (icon == 'clear-night') {\n            currentWeatherIcon.src = _images_clear_night_png__WEBPACK_IMPORTED_MODULE_3__;\n        } else if (icon == 'cloudy') {\n            currentWeatherIcon.src = _images_cloudy_png__WEBPACK_IMPORTED_MODULE_4__;\n        } else if (icon == 'fog') {\n            currentWeatherIcon.src = _images_fog_png__WEBPACK_IMPORTED_MODULE_5__;\n        } else if (icon == 'partly-cloudy-day') {\n            currentWeatherIcon.src = _images_partly_cloudy_day_png__WEBPACK_IMPORTED_MODULE_6__;\n        } else if (icon == 'partly-cloudy-night') {\n            currentWeatherIcon.src = _images_partly_cloudy_night_png__WEBPACK_IMPORTED_MODULE_7__;\n        } else if (icon == 'rain') {\n            currentWeatherIcon.src = _images_rain_png__WEBPACK_IMPORTED_MODULE_8__;\n        } else if (icon == 'snow') {\n            currentWeatherIcon.src = _images_snow_png__WEBPACK_IMPORTED_MODULE_9__;\n        } else {\n            currentWeatherIcon.src = _images_wind_png__WEBPACK_IMPORTED_MODULE_10__;\n        }\n    }\n\n    // Create a function to load the icons for the 5-day weather forecast, taking an argument for 'day'\n    function loadWeeklyIcons(day) {\n        const weatherPanelIcons = document.getElementsByClassName('weather-panel-icon');\n        // Set the value of icon to '' so that it can later be updated\n        let icon = '';\n        let panelIndex = null;\n\n        // Dynamically update the (textual) value of icon and the panelIndex depending on the day\n        if (day == 1) {\n            icon = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.days[0].icon;\n            // This time, panelIndex will refer to the icon index, rather than the text index\n            panelIndex = weatherPanelIcons[0];\n        } else if (day == 2) {\n            icon = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.days[1].icon;\n            panelIndex = weatherPanelIcons[1];\n        } else if (day == 3) {\n            icon = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.days[2].icon;\n            panelIndex = weatherPanelIcons[2];\n        } else if (day == 4) {\n            icon = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.days[3].icon;\n            panelIndex = weatherPanelIcons[3];\n        } else {\n            icon = _script_js__WEBPACK_IMPORTED_MODULE_1__.jsonObject.days[4].icon;\n            panelIndex = weatherPanelIcons[4];\n        }\n\n        // Depending on the value of icon (the weather conditions), set the image src equal to the corresponding image link\n        if (icon == 'clear-day') {\n            panelIndex.src = _images_clear_day_png__WEBPACK_IMPORTED_MODULE_2__;\n        } else if (icon == 'clear-night') {\n            panelIndex.src = _images_clear_night_png__WEBPACK_IMPORTED_MODULE_3__;\n        } else if (icon == 'cloudy') {\n            panelIndex.src = _images_cloudy_png__WEBPACK_IMPORTED_MODULE_4__;\n        } else if (icon == 'fog') {\n            panelIndex.src = _images_fog_png__WEBPACK_IMPORTED_MODULE_5__;\n        } else if (icon == 'partly-cloudy-day') {\n            panelIndex.src = _images_partly_cloudy_day_png__WEBPACK_IMPORTED_MODULE_6__;\n        } else if (icon == 'partly-cloudy-night') {\n            panelIndex.src = _images_partly_cloudy_night_png__WEBPACK_IMPORTED_MODULE_7__;\n        } else if (icon == 'rain') {\n            panelIndex.src = _images_rain_png__WEBPACK_IMPORTED_MODULE_8__;\n        } else if (icon == 'snow') {\n            panelIndex.src = _images_snow_png__WEBPACK_IMPORTED_MODULE_9__;\n        } else {\n            panelIndex.src = _images_wind_png__WEBPACK_IMPORTED_MODULE_10__;\n        }\n    }\n    \n    // Load the current icon\n    loadCurrentIcon();\n    // Load the 5-day icons\n    loadWeeklyIcons(1);\n    loadWeeklyIcons(2);\n    loadWeeklyIcons(3);\n    loadWeeklyIcons(4);\n    loadWeeklyIcons(5);\n    // Load the current text content\n    loadCurrentTextContent();\n    // Load the 5-day text content\n    loadWeeklyTextContent(1);\n    loadWeeklyTextContent(2);\n    loadWeeklyTextContent(3);\n    loadWeeklyTextContent(4);\n    loadWeeklyTextContent(5);\n\n    // Add an event listener to toggle button which changes the weather report's temperature unit on click\n    toggleButton.addEventListener('click', function() {\n        // If the temperature unit was equal to F, set it to C and right-align the inner toggle button\n        if (temperatureUnit == '°F') {\n            temperatureUnit = '°C';\n            unitToggle.style.justifyContent = 'flex-end';\n        // Else, set the temperature unit to F and left-align the inner toggle button\n        } else {\n            temperatureUnit = '°F';\n            unitToggle.style.justifyContent = 'flex-start';\n        }\n\n        // Change the innerHTML of the toggle button to correspond with the current temp unit\n        toggleButton.innerHTML = `${temperatureUnit}`;\n\n        // Reload the current and weekly text content, allowing for the text to be set with the correct unit and temp\n        loadCurrentTextContent();\n        loadWeeklyTextContent(1);\n        loadWeeklyTextContent(2);\n        loadWeeklyTextContent(3);\n        loadWeeklyTextContent(4);\n        loadWeeklyTextContent(5);\n    });\n\n    // Add event listener to headerLogo which takes the user back to the homepage on click\n    headerLogo.addEventListener('click', function() {\n\n        // Reset temp unit and toggle switch position\n        temperatureUnit = '°F';\n        unitToggle.style.justifyContent = 'flex-start';\n\n        // Return to home page using loadHome()\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.loadHome)();\n        // Run launchSearch() so that API data can be properly searched for and fetched\n        (0,_script_js__WEBPACK_IMPORTED_MODULE_1__.launchSearch)();\n    })\n}\n\n\n//# sourceURL=webpack://odin-weather-app/./src/weather.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;