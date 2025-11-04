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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/images/pagoda.jfif */ \"./src/assets/images/pagoda.jfif\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `\n\nbody,html{\n    margin: 0;\n    margin: 0;\n    height: 100%;    \n    font-family: Verdana, Geneva, Tahoma, sans-serif;    \n}\n    \nheader{\n    width: 100%;    \n    height: auto;\n    background-color: black;\n    display: flex;      \n    flex-direction: row;      \n     \n    position: sticky;    \n    padding: 1.5rem;    \n}\n#btnHome, #btnMenu, #btnContact, #btnEffect{        \n    width: 8rem;\n    height: 3rem;    \n    color: white;\n    border: none;\n    margin: auto;    \n    background-color: black;\n    border-bottom: 1px solid rgb(253, 253, 253);    \n    border-top: 1px solid rgb(94, 89, 89);\n}\n \n #btnHome:hover, #btnMenu:hover, #btnContact:hover, #btnEffect:hover{\n    cursor: pointer;\n    box-shadow: 5px 5px 5px 2px white;\n    transform: translateY(5px);\n    transition: all 0.1s ease;  \n    font-weight: bold;\n }\n.content{\n    /*position: relative;*/\n    /*margin-left: 250px;    */\n    margin-left: 0;\n    height: auto;\n    background-color: rgb(248, 247, 247);    \n    \n}\n.menuinicial{\n    \n}\n.menuContenedor{\n    text-align: center;\n    padding :2rem;\n    \n}\n.mensajes{\n    padding: 0 2rem 1rem 2rem;\n    text-align: justify;\n    background-image: \n    linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)),\n    url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    color: aliceblue;\n    background-position: center center;\n    background-size:contain;    \n    background-color: rgb(243, 238, 238);\n    \n}\nh1{\n    font-family:Cochin, Georgia, Times, 'Times New Roman', serif;\n    letter-spacing: 0.8rem;    \n}\n\n.divCuerpo{\n    display: grid;\n    width: 100%;\n    height: auto;\n    grid-template-columns: repeat(3,1fr);\n    grid-template-rows: repeat(2,1fr);    \n    background-color: rgb(218, 230, 207);\n    padding: 1rem 0 1rem 0;\n\n}\n.cell img{\n    width: 80%;\n    height: 80%;\n    object-fit: cover;\n    margin: 2rem 0 0 2rem;    \n    box-shadow: 10px 0 5px 5px rgba(12, 12, 12, 0.2);\n}\n.cell p{\n    text-align: center;    \n    padding: 0;\n    margin: 0;\n}\n.cell p:first-of-type{\n    font-weight: bold;    \n}\n.foot{\n    width: auto;\n    /*margin-left: 250px;*/\n    height: auto;\n    text-align: center;\n    color: aliceblue;\n    background-color: rgb(0, 0, 0);    \n}\n.foot p{\nmargin: 0;\npadding: 0.5rem;\n}\n.divTituloPie{\n    display: flex;    \n    justify-content: space-between;\n    padding: 2rem;    \n}\n.alin{\n    font-family: 'Courier New', Courier, monospace;\n    font-size: small;\n    color: rgb(160, 156, 156);\n}\n.textPiePrinc{\n    font-weight: bolder;\n}\n.textoPiePrinc:hover{\n    cursor: pointer;\n}\n.class-dialog{\n    border: 1px solid #0D6EFD;\n    background-color: rgb(253, 250, 250);\n}\n.formu{\n    display: flex;\n    flex-direction: column;    \n    gap:2rem;\n    padding: 2rem;\n}\n.divTextForm, .secTextForm, .botones{\n    display: flex;\n    gap: 2rem;\n    align-items: center;\n}\n.botones button{\n    background-color: #0D6EFD;\n    width: 10rem;\n    height: 3rem;\n    color: aliceblue;\n    padding: 1rem;\n    margin: auto;\n    border-radius: 10px;\n}\n.formu p{\n    width: 4rem;\n}\n.formu input{\n    width: 10rem;\n    border-radius: 5px;\n    padding: 0.2rem;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restorant/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restorant/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restorant/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restorant/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restorant/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restorant/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restorant/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restorant/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restorant/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restorant/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/assets/images/maki.jpg":
/*!************************************!*\
  !*** ./src/assets/images/maki.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"64a2544eb361b672b0e2.jpg\";\n\n//# sourceURL=webpack://restorant/./src/assets/images/maki.jpg?\n}");

/***/ }),

/***/ "./src/assets/images/mix.jpg":
/*!***********************************!*\
  !*** ./src/assets/images/mix.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"3d429ed0f7797ec12dd7.jpg\";\n\n//# sourceURL=webpack://restorant/./src/assets/images/mix.jpg?\n}");

/***/ }),

/***/ "./src/assets/images/pagoda.jfif":
/*!***************************************!*\
  !*** ./src/assets/images/pagoda.jfif ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"35adedb0ffcf01bd3204.jfif\";\n\n//# sourceURL=webpack://restorant/./src/assets/images/pagoda.jfif?\n}");

/***/ }),

/***/ "./src/assets/images/roll.jpg":
/*!************************************!*\
  !*** ./src/assets/images/roll.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"2377c5f6ae997266b5b8.jpg\";\n\n//# sourceURL=webpack://restorant/./src/assets/images/roll.jpg?\n}");

/***/ }),

/***/ "./src/assets/images/sushisalmon.jpg":
/*!*******************************************!*\
  !*** ./src/assets/images/sushisalmon.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"8f49f2b8da5c5a55f1ec.jpg\";\n\n//# sourceURL=webpack://restorant/./src/assets/images/sushisalmon.jpg?\n}");

/***/ }),

/***/ "./src/assets/images/sushivariedad.jpg":
/*!*********************************************!*\
  !*** ./src/assets/images/sushivariedad.jpg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"1165aba82445df7557c4.jpg\";\n\n//# sourceURL=webpack://restorant/./src/assets/images/sushivariedad.jpg?\n}");

/***/ }),

/***/ "./src/assets/images/uramaki.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/uramaki.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{module.exports = __webpack_require__.p + \"06e6abd07175ead438f4.jpg\";\n\n//# sourceURL=webpack://restorant/./src/assets/images/uramaki.jpg?\n}");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contact: () => (/* binding */ contact)\n/* harmony export */ });\nfunction contact(){\n    const menu = document.querySelector('.content');\n    //menu.innerHTML = '';\n    const dialog = document.createElement('dialog');\n    dialog.classList.add('class-dialog');\n    const formu = document.createElement('form');\n    formu.classList.add('formu');\n    const divTextForm = document.createElement('div');\n    divTextForm.classList.add('divTextForm');\n    divTextForm.innerHTML=`\n    <p>Name:</p><input type = 'text'>\n    <p>Surname:</p><input type = 'text'>\n    `;\n    const secTextForm = document.createElement('div');\n    secTextForm.classList.add('secTextForm');\n    secTextForm.innerHTML=`\n    <p>Phone:</p><input type = 'phone' placeholder = 'XXX-XXXXXXX'>\n    <p>Email:</p><input type = 'email'>    \n    `;\n    const botones = document.createElement('div');\n    botones.classList.add('botones');\n    botones.innerHTML=`\n    <button type='button' class = 'btnEnter'>Enter</button>\n    <button type = 'button' class = 'btnCancel'>Cancel</button>\n    `;\n\n    formu.appendChild(divTextForm);\n    formu.appendChild(secTextForm);\n    formu.appendChild(botones);\n    dialog.appendChild(formu);\n    menu.appendChild(dialog);\n\n}\n\n//# sourceURL=webpack://restorant/./src/contact.js?\n}");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   foothPage: () => (/* binding */ foothPage)\n/* harmony export */ });\nfunction foothPage(){\n    const pie = document.querySelector('.foot');\n    pie.innerHTML = '';\n    const divTituloPie = document.createElement('div');\n    divTituloPie.classList.add('divTituloPie');\n    const textoPiePrinc = document.createElement('div');\n    textoPiePrinc.classList.add('textoPiePrinc');\n    textoPiePrinc.innerHTML = `PAGODA`;\n    const textoPie = document.createElement('div');\n    textoPie.classList.add('alin');\n    textoPie.innerHTML = `     \n    <p>© 2025 PAGODA Sushi. All rights reservs.</p>        \n    `;\n    const secText = document.createElement('div');\n    secText.classList.add('alin');\n    secText.innerHTML = `\n    <p>Phone: (+54) 342 3487722</p>\n    <p>Addres: The best place</p>\n    <p>City: Paradise</p>\n    `;\n\n    divTituloPie.appendChild(textoPiePrinc);\n    divTituloPie.appendChild(textoPie);\n    divTituloPie.appendChild(secText);\n    pie.appendChild(divTituloPie);\n    \n}\n\n//# sourceURL=webpack://restorant/./src/footer.js?\n}");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createhomePage: () => (/* binding */ createhomePage)\n/* harmony export */ });\n/* harmony import */ var _assets_images_maki_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/maki.jpg */ \"./src/assets/images/maki.jpg\");\n/* harmony import */ var _assets_images_mix_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/mix.jpg */ \"./src/assets/images/mix.jpg\");\n/* harmony import */ var _assets_images_roll_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/roll.jpg */ \"./src/assets/images/roll.jpg\");\n/* harmony import */ var _assets_images_sushivariedad_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/sushivariedad.jpg */ \"./src/assets/images/sushivariedad.jpg\");\n/* harmony import */ var _assets_images_uramaki_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/uramaki.jpg */ \"./src/assets/images/uramaki.jpg\");\n/* harmony import */ var _assets_images_sushisalmon_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/sushisalmon.jpg */ \"./src/assets/images/sushisalmon.jpg\");\n\n\n\n\n\n\n\nfunction createhomePage(){\n    const menu = document.querySelector('.content');\n    menu.innerHTML = '';   \n    const menuCont = document.createElement('div');\n    menuCont.classList.add('menuContenedor');\n    menuCont.style.backgroundColor = 'black';\n    menuCont.style.color = ' rgb(218, 230, 207)';      \n    const titulo = document.createElement('h1');\n    const subtitulo = document.createElement('h3');\n    subtitulo.textContent = \"MENU\";\n    titulo.textContent = \"PAGODA\";    \n    const divCuerpo = document.createElement('div');\n    divCuerpo.classList.add('divCuerpo');\n\n    divCuerpo.innerHTML=`\n    <div class = \"cell\">\n        <img src = \"${_assets_images_maki_jpg__WEBPACK_IMPORTED_MODULE_0__}\">\n        <p>Maki con wasabi</p>\n        <p>わさび入り巻き</p>\n    </div>\n    <div class = \"cell\">\n        <img src = \"${_assets_images_mix_jpg__WEBPACK_IMPORTED_MODULE_1__}\">\n        <p>Mix de Sushi con salsa</p>\n        <p>盛り合わせ寿司とソース</p>\n    </div>\n    <div class = \"cell\">\n        <img src = \"${_assets_images_sushivariedad_jpg__WEBPACK_IMPORTED_MODULE_3__}\">\n        <p>Sushi variedad</p>\n        <p>盛り合わせ寿司</p>\n    </div>\n    <div class = \"cell\">\n        <img src = \"${_assets_images_roll_jpg__WEBPACK_IMPORTED_MODULE_2__}\">\n        <p>Roll Sashimi</p>\n        <p>刺身巻き</p>\n    </div>\n    <div class = \"cell\">\n        <img src = \"${_assets_images_uramaki_jpg__WEBPACK_IMPORTED_MODULE_4__}\">\n        <p>Uramaki</p>\n        <p>裏巻き</p>\n    </div>\n    <div class = \"cell\">\n        <img src = \"${_assets_images_sushisalmon_jpg__WEBPACK_IMPORTED_MODULE_5__}\">\n        <p>Sushi de Salmon</p>\n        <P>サーモン寿司</p>\n    </div>\n    `;\n    menuCont.appendChild(titulo);\n    menuCont.appendChild(subtitulo);\n    menu.appendChild(menuCont);\n    menu.appendChild(divCuerpo);\n\n\n\n}\n\n//# sourceURL=webpack://restorant/./src/homepage.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', function(){\n    const btnHome = document.querySelector('#btnHome');\n    const btnMenu = document.querySelector('#btnMenu');\n    const btnContact = document.querySelector('#btnContact');    \n    \n    \n\n    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenu)();\n    (0,_footer_js__WEBPACK_IMPORTED_MODULE_3__.foothPage)();\n    const footerLogo = document.querySelector('.textoPiePrinc');\n    btnMenu.addEventListener('click',function(){\n        (0,_homepage_js__WEBPACK_IMPORTED_MODULE_2__.createhomePage)();\n    });\n    btnHome.addEventListener('click', function(){\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenu)();\n    })\n    footerLogo.addEventListener('click', function(){\n        ;(0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenu)();\n    });\n    btnContact.addEventListener('click', function(){\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.contact)();\n        const classDialog = document.querySelector('.class-dialog');\n        const btnEnter = document.querySelector('.btnEnter');\n        const btnCancel = document.querySelector('.btnCancel');\n        classDialog.showModal();\n        btnEnter.addEventListener('click', function(){\n            classDialog.close();            \n        })\n        btnCancel.addEventListener('click', function(){\n            classDialog.close();            \n        })\n    })\n\n});\n\n//# sourceURL=webpack://restorant/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\nfunction createMenu(){\n    const menu = document.querySelector('.content');\n    menu.innerHTML = '';\n\n    const menuInicial = document.createElement('div');\n    menuInicial.classList.add('menuinicial');\n    \n\n    const menuCont = document.createElement('div');\n    menuCont.classList.add('menuContenedor');    \n    //crear titulo\n    const titulo = document.createElement('h1');\n    titulo.textContent = 'PAGODA';\n    const mensaje = document.createElement('div');\n    mensaje.classList.add('mensajes');\n    mensaje.innerHTML = `\n    <span style = \"text-align:center; padding:1rem\"><h2>Who We Are</h2></span>\n<p>At Crazy Sushi, we are the result of the perfect fusion between the millenary precision of Japanese art and the bold, creative spirit of Argentina. We are more than just a restaurant; we are a destination for those looking to elevate the sushi experience to an unexpected level.<p>\n\n<h3>Our Mission</h3>\n<p><span style = \"font-weight:bold;\">Our mission is simple:</span> to challenge the limits of flavor. We honor the traditional techniques of nigiri and sashimi, yet we dare to experiment with fresh, local ingredients and combinations that reflect the passion of our land.</p>\n\n<p><span style = \"font-weight:bold;\">Impeccable Freshness: </span>Excellence starts with the raw ingredients. We are committed to selecting fresh fish and produce daily to ensure the highest quality in every single roll.</p>\n\n<p>Creativity Without Limits: From the classic to our most daring <span style = \"font-weight:bold;\">Signature Rolls</span>, every piece is a work of art designed to surprise. We believe sushi should be fun, vibrant, and memorable.</p>\n\n<p><span style = \"font-weight:bold;\">Made with Argentine Passion:</span> Behind every dish is a team that works with dedication and the unique warmth that defines us. We want your experience, whether at home or in our location, to feel like gathering with friends.</p>\n\n<p>Crazy Sushi is the ideal combination for your palate: tradition, innovation, and the unmistakable flavor of something made with love in Argentina.</p>\n    `;\n\n    \n\n    menuCont.appendChild(titulo);    \n    menuInicial.appendChild(menuCont);\n    menuInicial.appendChild(mensaje);\n    menu.appendChild(menuInicial);\n\n}\n\n//# sourceURL=webpack://restorant/./src/menu.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restorant/./src/styles.css?\n}");

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
/******/ 		__webpack_require__.p = "/gourmet-site-webpack/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;