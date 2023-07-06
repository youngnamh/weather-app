/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/styles.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/styles.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
  text-shadow: 0px 3px 15px rgba(0, 0, 0, 0.7);
}

body {
  display: flex;
  justify-content: center;
  background-color: #f0ead2;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 35rem;
  min-width: 35rem;
  border: 1px solid black;
  background-color: #a98467;
}

#addForm {
  width: 100%;
  border: 1px solid black;
  background-color: #dde5b6;
  display: flex;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
}

.cities {
  width: 100%;
}

.cityBox {
  height: 11rem;
  width: 100%;
  border: 1px solid black;
  color: white;
  background-color: aquamarine;
}

.today {
  height: 50%;
  width: 100%;

  display: flex;
  justify-content: space-between;
}

.today > * {
  padding: 0.5rem;
}

.cityName {
  font-size: 2rem;
  color: white;
}

.currentTemp {
  font-size: 2rem;
}

.week {
  height: 50%;
  width: 100%;
  display: flex;
}

.day {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.dayPic {
  width: 50%;
  max-width: 2.3rem;
  height: calc(width);
}

.highLows {
  display: flex;
  gap: 1rem;
}

.low {
  color: azure;
  opacity: 0.7;
}
`, "",{"version":3,"sources":["webpack://./src/style/styles.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;EACtB,4CAA4C;AAC9C;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,uBAAuB;EACvB,yBAAyB;AAC3B;;AAEA;EACE,WAAW;EACX,uBAAuB;EACvB,yBAAyB;EACzB,aAAa;EACb,uBAAuB;EACvB,SAAS;EACT,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,WAAW;EACX,uBAAuB;EACvB,YAAY;EACZ,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,WAAW;;EAEX,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,WAAW;EACX,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,UAAU;EACV,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,YAAY;AACd","sourcesContent":["* {\n  box-sizing: border-box;\n  text-shadow: 0px 3px 15px rgba(0, 0, 0, 0.7);\n}\n\nbody {\n  display: flex;\n  justify-content: center;\n  background-color: #f0ead2;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 35rem;\n  min-width: 35rem;\n  border: 1px solid black;\n  background-color: #a98467;\n}\n\n#addForm {\n  width: 100%;\n  border: 1px solid black;\n  background-color: #dde5b6;\n  display: flex;\n  justify-content: center;\n  gap: 1rem;\n  padding: 1rem;\n}\n\n.cities {\n  width: 100%;\n}\n\n.cityBox {\n  height: 11rem;\n  width: 100%;\n  border: 1px solid black;\n  color: white;\n  background-color: aquamarine;\n}\n\n.today {\n  height: 50%;\n  width: 100%;\n\n  display: flex;\n  justify-content: space-between;\n}\n\n.today > * {\n  padding: 0.5rem;\n}\n\n.cityName {\n  font-size: 2rem;\n  color: white;\n}\n\n.currentTemp {\n  font-size: 2rem;\n}\n\n.week {\n  height: 50%;\n  width: 100%;\n  display: flex;\n}\n\n.day {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.dayPic {\n  width: 50%;\n  max-width: 2.3rem;\n  height: calc(width);\n}\n\n.highLows {\n  display: flex;\n  gap: 1rem;\n}\n\n.low {\n  color: azure;\n  opacity: 0.7;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style/styles.css":
/*!******************************!*\
  !*** ./src/style/styles.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/style/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/jsonHandler.js":
/*!****************************!*\
  !*** ./src/jsonHandler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getForecast)
/* harmony export */ });
//handles API stuff

class City {
  constructor(name, weeklyForecast, currTemp, currCondition, currTime, isDay) {
    this.name = name;
    this.weeklyForecast = weeklyForecast;
    this.currTemp = currTemp;
    this.currCondition = currCondition;
    this.currTime = currTime;
    this.isDay = isDay;
  }

  getName() {
    return this.name;
  }

  getForecast() {
    return this.weeklyForecast;
  }
}

class CityDay {
  constructor(date, maxC, minC, condition, icon, chanceOfRain, chanceOfSnow) {
    this.date = date;
    this.maxC = maxC;
    this.minC = minC;
    this.condition = condition;
    this.icon = icon;
    this.chanceOfRain = chanceOfRain;
    this.chanceOfSnow = chanceOfSnow;
  }
}

function processData(city, data) {
  const arrayOfDays = [];

  //loop through the 8 days and make a cityDay obj for each day
  //populate the array
  for (let i = 0; i < data.forecastday.length; i++) {
    const date = data.forecastday[i].date;
    const maxC = Math.round(data.forecastday[i].day.maxtemp_c);
    const minC = Math.round(data.forecastday[i].day.mintemp_c);
    const condition = data.forecastday[i].day.condition.text;
    const icon = data.forecastday[i].day.condition.icon;
    const chanceOfRain = data.forecastday[i].day.daily_chance_of_rain;
    const chanceOfSnow = data.forecastday[i].day.daily_chance_of_snow;

    let day = new CityDay(
      date,
      maxC,
      minC,
      condition,
      icon,
      chanceOfRain,
      chanceOfSnow
    );
    arrayOfDays.push(day);
  }
  //create a city with a complete forecast
  return getCurrent(city).then((curr) => {
    //console.log(curr[0] + " " + curr[1] + " " + curr[2]);
    let completeCity = new City(
      city,
      arrayOfDays,
      curr[0],
      curr[1],
      curr[2],
      curr[3]
    );
    return completeCity;
  });
}

//get current weather
function getCurrent(city) {
  const key = "65813105b47048debe6145016230507";
  const baseUrl = "http://api.weatherapi.com/v1";
  let request = baseUrl + "/current.json?key=" + key + "&q=" + city;

  return fetch(request)
    .then((response) => {
      if (response.ok) {
        console.log("success");
        return response.json();
      } else {
        console.log("Not Successful");
        throw new Error("Weather API request failed");
      }
    })
    .then((data) => {
      const currentData = [
        data.current.temp_c,
        data.current.condition.text,
        data.location.localtime,
        data.current.is_day,
      ];
      return currentData;
    })
    .catch((err) => console.log("Weather API error: " + err));
}

//get weekly forecast
function getForecast(city) {
  const key = "65813105b47048debe6145016230507";
  const baseUrl = "http://api.weatherapi.com/v1";
  const days = 8;
  let request =
    baseUrl + "/forecast.json?key=" + key + "&q=" + city + "&days=" + days;

  return fetch(request)
    .then((response) => {
      if (response.ok) {
        console.log("success");
        return response.json();
      } else {
        console.log("Not Successful");
        throw new Error("Weather API request failed");
      }
    })
    .then((data) => {
      //console.log(data.forecast);
      return processData(city, data.forecast);
    })
    .catch((err) => console.log("Weather API error: " + err));
}

/*
getForecast("london").then((london) => {
  //console.log(london.weeklyForecast);
  makeCity(london);
});

async funtion asdf() {
  try {
    response = await fetch();
    data = await response.json();
    return processData();
  catch (err) {
    console.log();
  }
}

let london = getForecast("london");
asdf().then(() => {
  console.log("London: " + london);
})

*/


/***/ }),

/***/ "./src/makeCity.js":
/*!*************************!*\
  !*** ./src/makeCity.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ makeCity)
/* harmony export */ });
//handles DOM stuff

function makeCity(city) {
  const aName = city.getName();
  const name = aName.charAt(0).toUpperCase() + aName.slice(1);
  const arr = city.getForecast();
  const currTemp = city.currTemp;
  const currCondition = city.currCondition;
  let currTime = city.currTime;
  currTime = currTime.substring(11);
  const isDay = city.isDay;

  console.log(name);
  console.log(arr[2]);
  console.log(currTemp);
  console.log(currCondition);
  console.log(currTime);
  console.log(isDay);

  // Create the main container div with class "cityBox"
  const cityBox = document.createElement("div");
  cityBox.className = "cityBox";

  // Create the "today" div
  const today = document.createElement("div");
  today.className = "today";

  // Create the "cityInfo" div
  const cityInfo = document.createElement("div");
  cityInfo.className = "cityInfo";

  // Create the "cityName" div
  const cityName = document.createElement("div");
  cityName.className = "cityName";
  cityName.textContent = name;

  // Create the "cityTime" div
  const cityTime = document.createElement("div");
  cityTime.className = "cityTime";
  cityTime.textContent = currTime;

  // Append "cityName" and "cityTime" to "cityInfo"
  cityInfo.appendChild(cityName);
  cityInfo.appendChild(cityTime);

  // Create the "conditions" div
  const conditions = document.createElement("div");
  conditions.className = "conditions";

  // Create the "currentTemp" div
  const currentTemp = document.createElement("div");
  currentTemp.className = "currentTemp";
  currentTemp.textContent = currTemp;

  // Create the "condition" div
  const condition = document.createElement("div");
  condition.className = "condition";
  condition.textContent = currCondition;

  // Create the "todayHighLows" div
  const todayHighLows = document.createElement("div");
  todayHighLows.className = "todayHighLows";

  // Create the "todayHigh" span
  const todayHigh = document.createElement("span");
  todayHigh.className = "todayHigh";
  todayHigh.textContent = "H: " + arr[0].maxC + " ";

  // Create the "todayLow" span
  const todayLow = document.createElement("span");
  todayLow.className = "todayLow";
  todayLow.textContent = "L: " + arr[0].minC;

  // Append "currentTemp", "condition", "todayHigh", and "todayLow" to "todayHighLows"
  todayHighLows.appendChild(todayHigh);
  todayHighLows.appendChild(todayLow);

  // Append "currentTemp", "condition", and "todayHighLows" to "conditions"
  conditions.appendChild(currentTemp);
  conditions.appendChild(condition);
  conditions.appendChild(todayHighLows);

  // Append "cityInfo" and "conditions" to "today"
  today.appendChild(cityInfo);
  today.appendChild(conditions);

  // Create the "week" div
  const week = document.createElement("div");
  week.className = "week";

  // Define the array of days
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();
  let index = currentDate.getDay() + 1;

  // Create the days, including the "day", "dayPic", and "highLows" elements
  for (let i = 0; i < days.length; i++) {
    const day = document.createElement("div");
    day.className = "day";
    if (index === 7) {
      index = 0;
    }
    day.textContent = days[index];
    index++;

    const dayPic = document.createElement("img");
    dayPic.src = arr[i].icon;
    dayPic.className = "dayPic";

    const highLows = document.createElement("div");
    highLows.className = "highLows";

    const high = document.createElement("span");
    high.className = "high";
    high.textContent = arr[i].maxC;

    const low = document.createElement("span");
    low.className = "low";
    low.textContent = arr[i].minC;

    highLows.appendChild(high);
    highLows.appendChild(low);

    day.appendChild(dayPic);
    day.appendChild(highLows);

    week.appendChild(day);
  }

  if (!isDay) {
    cityBox.style.backgroundImage =
      "url('https://media.giphy.com/media/LoNF8cgrrwYju5DxQL/giphy.gif')";
  } else if (currCondition == "Clear sky" || currCondition == "Sunny") {
    cityBox.style.backgroundImage =
      "url('https://media.giphy.com/media/XBVHoZahgO0sskTGxa/giphy.gif')";
  } else if (
    currCondition == "Cloudy" ||
    currCondition == "Partly cloudy" ||
    currCondition == "Overcast" ||
    currCondition == "Foggy" ||
    currCondition == "Hazy"
  ) {
    cityBox.style.backgroundImage =
      "url('https://media.giphy.com/media/d5PPYjcb3caPTHM3hv/giphy-downsized-large.gif')";
  } else if (
    currCondition == "Rainy" ||
    currCondition == "Showers" ||
    currCondition == "Misty" ||
    currCondition == "Freezing rain"
  ) {
    cityBox.style.backgroundImage =
      "url('https://media.giphy.com/media/t7Qb8655Z1VfBGr5XB/giphy.gif')";
  } else if (currCondition == "Windy" || currCondition == "Dust storms") {
    cityBox.style.backgroundImage =
      "url('https://media.giphy.com/media/0IGRygDt5cMP2Q0Jmu/giphy.gif')";
  } else if (currCondition == "Snowy") {
    cityBox.style.backgroundImage =
      "url('https://media.giphy.com/media/Xi2Xu0MejhsUo/giphy.gif')";
  } else if (currCondition == "Thunderstorms") {
    cityBox.style.backgroundImage =
      "url('https://media.giphy.com/media/l0MYzA5czu7GV1Xt6/giphy.gif')";
  } else {
    cityBox.style.backgroundImage =
      "url('https://media.giphy.com/media/l0O2SpthWi2HAcwes/giphy.gif')";
  }

  // Append "today" and "week" to "cityBox"
  cityBox.appendChild(today);
  cityBox.appendChild(week);

  // Append "city
  const cities = document.querySelector(".cities");
  cities.appendChild(cityBox);
}

/*
export default function makeCity(city) {
  console.log(city);

  // Create the main container div with class "cityBox"
  const cityBox = document.createElement("div");
  cityBox.className = "cityBox";

  // Create the "today" div
  const today = document.createElement("div");
  today.className = "today";

  // Create the "cityInfo" div
  const cityInfo = document.createElement("div");
  cityInfo.className = "cityInfo";

  // Create the "cityName" div
  const cityName = document.createElement("div");
  cityName.className = "cityName";
  cityName.textContent = "Toronto";

  // Create the "cityTime" div
  const cityTime = document.createElement("div");
  cityTime.className = "cityTime";
  cityTime.textContent = "10:30";

  // Append "cityName" and "cityTime" to "cityInfo"
  cityInfo.appendChild(cityName);
  cityInfo.appendChild(cityTime);

  // Create the "conditions" div
  const conditions = document.createElement("div");
  conditions.className = "conditions";

  // Create the "currentTemp" div
  const currentTemp = document.createElement("div");
  currentTemp.className = "currentTemp";
  currentTemp.textContent = "20°C";

  // Create the "condition" div
  const condition = document.createElement("div");
  condition.className = "condition";
  condition.textContent = "Mostly Sunny";

  // Create the "todayHighLows" div
  const todayHighLows = document.createElement("div");
  todayHighLows.className = "todayHighLows";

  // Create the "todayHigh" span
  const todayHigh = document.createElement("span");
  todayHigh.className = "todayHigh";
  todayHigh.textContent = "H: 20";

  // Create the "todayLow" span
  const todayLow = document.createElement("span");
  todayLow.className = "todayLow";
  todayLow.textContent = "L: 10";

  // Append "currentTemp", "condition", "todayHigh", and "todayLow" to "todayHighLows"
  todayHighLows.appendChild(todayHigh);
  todayHighLows.appendChild(todayLow);

  // Append "currentTemp", "condition", and "todayHighLows" to "conditions"
  conditions.appendChild(currentTemp);
  conditions.appendChild(condition);
  conditions.appendChild(todayHighLows);

  // Append "cityInfo" and "conditions" to "today"
  today.appendChild(cityInfo);
  today.appendChild(conditions);

  // Create the "week" div
  const week = document.createElement("div");
  week.className = "week";

  // Define the array of days
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Create the days, including the "day", "dayPic", and "highLows" elements
  for (let i = 0; i < days.length; i++) {
    const day = document.createElement("div");
    day.className = "day";
    day.textContent = days[i];

    const dayPic = document.createElement("img");
    dayPic.src = "../src/images/sunny.png";
    dayPic.className = "dayPic";

    const highLows = document.createElement("div");
    highLows.className = "highLows";

    const high = document.createElement("span");
    high.className = "high";
    high.textContent = "25";

    const low = document.createElement("span");
    low.className = "low";
    low.textContent = "10";

    highLows.appendChild(high);
    highLows.appendChild(low);

    day.appendChild(dayPic);
    day.appendChild(highLows);

    week.appendChild(day);
  }

  // Append "today" and "week" to "cityBox"
  cityBox.appendChild(today);
  cityBox.appendChild(week);

  // Append "city
  const cities = document.querySelector(".cities");
  cities.appendChild(cityBox);
}

*/


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/styles.css */ "./src/style/styles.css");
/* harmony import */ var _makeCity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./makeCity */ "./src/makeCity.js");
/* harmony import */ var _jsonHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jsonHandler */ "./src/jsonHandler.js");




//assign eventListener to add button
const addBtn = document.querySelector("#add-btn");
const cityInput = document.getElementById("city_name");

addBtn.addEventListener("click", () => {
  let cityName = cityInput.value;
  if (cityName === "") {
    console.log("Error: no inputted cityName");
  } else {
    (0,_jsonHandler__WEBPACK_IMPORTED_MODULE_2__["default"])(cityName).then((city) => {
      //console.log(london.weeklyForecast);
      (0,_makeCity__WEBPACK_IMPORTED_MODULE_1__["default"])(city);
    });
    cityInput.value = "";
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7O1VDclRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNNO0FBQ007O0FBRXhDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixJQUFJLHdEQUFXO0FBQ2Y7QUFDQSxNQUFNLHFEQUFRO0FBQ2QsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9zdHlsZS9zdHlsZXMuY3NzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL3N0eWxlL3N0eWxlcy5jc3M/YWY3YyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvLi9zcmMvanNvbkhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS8uL3NyYy9tYWtlQ2l0eS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYnBhY2stdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWJwYWNrLXRlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNyk7XG59XG5cbmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZWFkMjtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzNXJlbTtcbiAgbWluLXdpZHRoOiAzNXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhOTg0Njc7XG59XG5cbiNhZGRGb3JtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRlNWI2O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxcmVtO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uY2l0aWVzIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jaXR5Qm94IHtcbiAgaGVpZ2h0OiAxMXJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7XG59XG5cbi50b2RheSB7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMTAwJTtcblxuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50b2RheSA+ICoge1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5jaXR5TmFtZSB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uY3VycmVudFRlbXAge1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbi53ZWVrIHtcbiAgaGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGF5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRheVBpYyB7XG4gIHdpZHRoOiA1MCU7XG4gIG1heC13aWR0aDogMi4zcmVtO1xuICBoZWlnaHQ6IGNhbGMod2lkdGgpO1xufVxuXG4uaGlnaExvd3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDFyZW07XG59XG5cbi5sb3cge1xuICBjb2xvcjogYXp1cmU7XG4gIG9wYWNpdHk6IDAuNztcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7O0VBRVgsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdGV4dC1zaGFkb3c6IDBweCAzcHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNyk7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZWFkMjtcXG59XFxuXFxuLmNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMzVyZW07XFxuICBtaW4td2lkdGg6IDM1cmVtO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTk4NDY3O1xcbn1cXG5cXG4jYWRkRm9ybSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZTViNjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5jaXRpZXMge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jaXR5Qm94IHtcXG4gIGhlaWdodDogMTFyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTtcXG59XFxuXFxuLnRvZGF5IHtcXG4gIGhlaWdodDogNTAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4udG9kYXkgPiAqIHtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG59XFxuXFxuLmNpdHlOYW1lIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmN1cnJlbnRUZW1wIHtcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXG59XFxuXFxuLndlZWsge1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kYXkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kYXlQaWMge1xcbiAgd2lkdGg6IDUwJTtcXG4gIG1heC13aWR0aDogMi4zcmVtO1xcbiAgaGVpZ2h0OiBjYWxjKHdpZHRoKTtcXG59XFxuXFxuLmhpZ2hMb3dzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDFyZW07XFxufVxcblxcbi5sb3cge1xcbiAgY29sb3I6IGF6dXJlO1xcbiAgb3BhY2l0eTogMC43O1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvL2hhbmRsZXMgQVBJIHN0dWZmXG5cbmNsYXNzIENpdHkge1xuICBjb25zdHJ1Y3RvcihuYW1lLCB3ZWVrbHlGb3JlY2FzdCwgY3VyclRlbXAsIGN1cnJDb25kaXRpb24sIGN1cnJUaW1lLCBpc0RheSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy53ZWVrbHlGb3JlY2FzdCA9IHdlZWtseUZvcmVjYXN0O1xuICAgIHRoaXMuY3VyclRlbXAgPSBjdXJyVGVtcDtcbiAgICB0aGlzLmN1cnJDb25kaXRpb24gPSBjdXJyQ29uZGl0aW9uO1xuICAgIHRoaXMuY3VyclRpbWUgPSBjdXJyVGltZTtcbiAgICB0aGlzLmlzRGF5ID0gaXNEYXk7XG4gIH1cblxuICBnZXROYW1lKCkge1xuICAgIHJldHVybiB0aGlzLm5hbWU7XG4gIH1cblxuICBnZXRGb3JlY2FzdCgpIHtcbiAgICByZXR1cm4gdGhpcy53ZWVrbHlGb3JlY2FzdDtcbiAgfVxufVxuXG5jbGFzcyBDaXR5RGF5IHtcbiAgY29uc3RydWN0b3IoZGF0ZSwgbWF4QywgbWluQywgY29uZGl0aW9uLCBpY29uLCBjaGFuY2VPZlJhaW4sIGNoYW5jZU9mU25vdykge1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gICAgdGhpcy5tYXhDID0gbWF4QztcbiAgICB0aGlzLm1pbkMgPSBtaW5DO1xuICAgIHRoaXMuY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIHRoaXMuaWNvbiA9IGljb247XG4gICAgdGhpcy5jaGFuY2VPZlJhaW4gPSBjaGFuY2VPZlJhaW47XG4gICAgdGhpcy5jaGFuY2VPZlNub3cgPSBjaGFuY2VPZlNub3c7XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJvY2Vzc0RhdGEoY2l0eSwgZGF0YSkge1xuICBjb25zdCBhcnJheU9mRGF5cyA9IFtdO1xuXG4gIC8vbG9vcCB0aHJvdWdoIHRoZSA4IGRheXMgYW5kIG1ha2UgYSBjaXR5RGF5IG9iaiBmb3IgZWFjaCBkYXlcbiAgLy9wb3B1bGF0ZSB0aGUgYXJyYXlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmZvcmVjYXN0ZGF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZGF0ZSA9IGRhdGEuZm9yZWNhc3RkYXlbaV0uZGF0ZTtcbiAgICBjb25zdCBtYXhDID0gTWF0aC5yb3VuZChkYXRhLmZvcmVjYXN0ZGF5W2ldLmRheS5tYXh0ZW1wX2MpO1xuICAgIGNvbnN0IG1pbkMgPSBNYXRoLnJvdW5kKGRhdGEuZm9yZWNhc3RkYXlbaV0uZGF5Lm1pbnRlbXBfYyk7XG4gICAgY29uc3QgY29uZGl0aW9uID0gZGF0YS5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgY29uc3QgaWNvbiA9IGRhdGEuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi5pY29uO1xuICAgIGNvbnN0IGNoYW5jZU9mUmFpbiA9IGRhdGEuZm9yZWNhc3RkYXlbaV0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWluO1xuICAgIGNvbnN0IGNoYW5jZU9mU25vdyA9IGRhdGEuZm9yZWNhc3RkYXlbaV0uZGF5LmRhaWx5X2NoYW5jZV9vZl9zbm93O1xuXG4gICAgbGV0IGRheSA9IG5ldyBDaXR5RGF5KFxuICAgICAgZGF0ZSxcbiAgICAgIG1heEMsXG4gICAgICBtaW5DLFxuICAgICAgY29uZGl0aW9uLFxuICAgICAgaWNvbixcbiAgICAgIGNoYW5jZU9mUmFpbixcbiAgICAgIGNoYW5jZU9mU25vd1xuICAgICk7XG4gICAgYXJyYXlPZkRheXMucHVzaChkYXkpO1xuICB9XG4gIC8vY3JlYXRlIGEgY2l0eSB3aXRoIGEgY29tcGxldGUgZm9yZWNhc3RcbiAgcmV0dXJuIGdldEN1cnJlbnQoY2l0eSkudGhlbigoY3VycikgPT4ge1xuICAgIC8vY29uc29sZS5sb2coY3VyclswXSArIFwiIFwiICsgY3VyclsxXSArIFwiIFwiICsgY3VyclsyXSk7XG4gICAgbGV0IGNvbXBsZXRlQ2l0eSA9IG5ldyBDaXR5KFxuICAgICAgY2l0eSxcbiAgICAgIGFycmF5T2ZEYXlzLFxuICAgICAgY3VyclswXSxcbiAgICAgIGN1cnJbMV0sXG4gICAgICBjdXJyWzJdLFxuICAgICAgY3VyclszXVxuICAgICk7XG4gICAgcmV0dXJuIGNvbXBsZXRlQ2l0eTtcbiAgfSk7XG59XG5cbi8vZ2V0IGN1cnJlbnQgd2VhdGhlclxuZnVuY3Rpb24gZ2V0Q3VycmVudChjaXR5KSB7XG4gIGNvbnN0IGtleSA9IFwiNjU4MTMxMDViNDcwNDhkZWJlNjE0NTAxNjIzMDUwN1wiO1xuICBjb25zdCBiYXNlVXJsID0gXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxXCI7XG4gIGxldCByZXF1ZXN0ID0gYmFzZVVybCArIFwiL2N1cnJlbnQuanNvbj9rZXk9XCIgKyBrZXkgKyBcIiZxPVwiICsgY2l0eTtcblxuICByZXR1cm4gZmV0Y2gocmVxdWVzdClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIik7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBTdWNjZXNzZnVsXCIpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXZWF0aGVyIEFQSSByZXF1ZXN0IGZhaWxlZFwiKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBjb25zdCBjdXJyZW50RGF0YSA9IFtcbiAgICAgICAgZGF0YS5jdXJyZW50LnRlbXBfYyxcbiAgICAgICAgZGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0LFxuICAgICAgICBkYXRhLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICAgICAgZGF0YS5jdXJyZW50LmlzX2RheSxcbiAgICAgIF07XG4gICAgICByZXR1cm4gY3VycmVudERhdGE7XG4gICAgfSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coXCJXZWF0aGVyIEFQSSBlcnJvcjogXCIgKyBlcnIpKTtcbn1cblxuLy9nZXQgd2Vla2x5IGZvcmVjYXN0XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRGb3JlY2FzdChjaXR5KSB7XG4gIGNvbnN0IGtleSA9IFwiNjU4MTMxMDViNDcwNDhkZWJlNjE0NTAxNjIzMDUwN1wiO1xuICBjb25zdCBiYXNlVXJsID0gXCJodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxXCI7XG4gIGNvbnN0IGRheXMgPSA4O1xuICBsZXQgcmVxdWVzdCA9XG4gICAgYmFzZVVybCArIFwiL2ZvcmVjYXN0Lmpzb24/a2V5PVwiICsga2V5ICsgXCImcT1cIiArIGNpdHkgKyBcIiZkYXlzPVwiICsgZGF5cztcblxuICByZXR1cm4gZmV0Y2gocmVxdWVzdClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIik7XG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5vdCBTdWNjZXNzZnVsXCIpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJXZWF0aGVyIEFQSSByZXF1ZXN0IGZhaWxlZFwiKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAvL2NvbnNvbGUubG9nKGRhdGEuZm9yZWNhc3QpO1xuICAgICAgcmV0dXJuIHByb2Nlc3NEYXRhKGNpdHksIGRhdGEuZm9yZWNhc3QpO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKFwiV2VhdGhlciBBUEkgZXJyb3I6IFwiICsgZXJyKSk7XG59XG5cbi8qXG5nZXRGb3JlY2FzdChcImxvbmRvblwiKS50aGVuKChsb25kb24pID0+IHtcbiAgLy9jb25zb2xlLmxvZyhsb25kb24ud2Vla2x5Rm9yZWNhc3QpO1xuICBtYWtlQ2l0eShsb25kb24pO1xufSk7XG5cbmFzeW5jIGZ1bnRpb24gYXNkZigpIHtcbiAgdHJ5IHtcbiAgICByZXNwb25zZSA9IGF3YWl0IGZldGNoKCk7XG4gICAgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gcHJvY2Vzc0RhdGEoKTtcbiAgY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKCk7XG4gIH1cbn1cblxubGV0IGxvbmRvbiA9IGdldEZvcmVjYXN0KFwibG9uZG9uXCIpO1xuYXNkZigpLnRoZW4oKCkgPT4ge1xuICBjb25zb2xlLmxvZyhcIkxvbmRvbjogXCIgKyBsb25kb24pO1xufSlcblxuKi9cbiIsIi8vaGFuZGxlcyBET00gc3R1ZmZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZUNpdHkoY2l0eSkge1xuICBjb25zdCBhTmFtZSA9IGNpdHkuZ2V0TmFtZSgpO1xuICBjb25zdCBuYW1lID0gYU5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBhTmFtZS5zbGljZSgxKTtcbiAgY29uc3QgYXJyID0gY2l0eS5nZXRGb3JlY2FzdCgpO1xuICBjb25zdCBjdXJyVGVtcCA9IGNpdHkuY3VyclRlbXA7XG4gIGNvbnN0IGN1cnJDb25kaXRpb24gPSBjaXR5LmN1cnJDb25kaXRpb247XG4gIGxldCBjdXJyVGltZSA9IGNpdHkuY3VyclRpbWU7XG4gIGN1cnJUaW1lID0gY3VyclRpbWUuc3Vic3RyaW5nKDExKTtcbiAgY29uc3QgaXNEYXkgPSBjaXR5LmlzRGF5O1xuXG4gIGNvbnNvbGUubG9nKG5hbWUpO1xuICBjb25zb2xlLmxvZyhhcnJbMl0pO1xuICBjb25zb2xlLmxvZyhjdXJyVGVtcCk7XG4gIGNvbnNvbGUubG9nKGN1cnJDb25kaXRpb24pO1xuICBjb25zb2xlLmxvZyhjdXJyVGltZSk7XG4gIGNvbnNvbGUubG9nKGlzRGF5KTtcblxuICAvLyBDcmVhdGUgdGhlIG1haW4gY29udGFpbmVyIGRpdiB3aXRoIGNsYXNzIFwiY2l0eUJveFwiXG4gIGNvbnN0IGNpdHlCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaXR5Qm94LmNsYXNzTmFtZSA9IFwiY2l0eUJveFwiO1xuXG4gIC8vIENyZWF0ZSB0aGUgXCJ0b2RheVwiIGRpdlxuICBjb25zdCB0b2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZGF5LmNsYXNzTmFtZSA9IFwidG9kYXlcIjtcblxuICAvLyBDcmVhdGUgdGhlIFwiY2l0eUluZm9cIiBkaXZcbiAgY29uc3QgY2l0eUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaXR5SW5mby5jbGFzc05hbWUgPSBcImNpdHlJbmZvXCI7XG5cbiAgLy8gQ3JlYXRlIHRoZSBcImNpdHlOYW1lXCIgZGl2XG4gIGNvbnN0IGNpdHlOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2l0eU5hbWUuY2xhc3NOYW1lID0gXCJjaXR5TmFtZVwiO1xuICBjaXR5TmFtZS50ZXh0Q29udGVudCA9IG5hbWU7XG5cbiAgLy8gQ3JlYXRlIHRoZSBcImNpdHlUaW1lXCIgZGl2XG4gIGNvbnN0IGNpdHlUaW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2l0eVRpbWUuY2xhc3NOYW1lID0gXCJjaXR5VGltZVwiO1xuICBjaXR5VGltZS50ZXh0Q29udGVudCA9IGN1cnJUaW1lO1xuXG4gIC8vIEFwcGVuZCBcImNpdHlOYW1lXCIgYW5kIFwiY2l0eVRpbWVcIiB0byBcImNpdHlJbmZvXCJcbiAgY2l0eUluZm8uYXBwZW5kQ2hpbGQoY2l0eU5hbWUpO1xuICBjaXR5SW5mby5hcHBlbmRDaGlsZChjaXR5VGltZSk7XG5cbiAgLy8gQ3JlYXRlIHRoZSBcImNvbmRpdGlvbnNcIiBkaXZcbiAgY29uc3QgY29uZGl0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbmRpdGlvbnMuY2xhc3NOYW1lID0gXCJjb25kaXRpb25zXCI7XG5cbiAgLy8gQ3JlYXRlIHRoZSBcImN1cnJlbnRUZW1wXCIgZGl2XG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3VycmVudFRlbXAuY2xhc3NOYW1lID0gXCJjdXJyZW50VGVtcFwiO1xuICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IGN1cnJUZW1wO1xuXG4gIC8vIENyZWF0ZSB0aGUgXCJjb25kaXRpb25cIiBkaXZcbiAgY29uc3QgY29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uZGl0aW9uLmNsYXNzTmFtZSA9IFwiY29uZGl0aW9uXCI7XG4gIGNvbmRpdGlvbi50ZXh0Q29udGVudCA9IGN1cnJDb25kaXRpb247XG5cbiAgLy8gQ3JlYXRlIHRoZSBcInRvZGF5SGlnaExvd3NcIiBkaXZcbiAgY29uc3QgdG9kYXlIaWdoTG93cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvZGF5SGlnaExvd3MuY2xhc3NOYW1lID0gXCJ0b2RheUhpZ2hMb3dzXCI7XG5cbiAgLy8gQ3JlYXRlIHRoZSBcInRvZGF5SGlnaFwiIHNwYW5cbiAgY29uc3QgdG9kYXlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRvZGF5SGlnaC5jbGFzc05hbWUgPSBcInRvZGF5SGlnaFwiO1xuICB0b2RheUhpZ2gudGV4dENvbnRlbnQgPSBcIkg6IFwiICsgYXJyWzBdLm1heEMgKyBcIiBcIjtcblxuICAvLyBDcmVhdGUgdGhlIFwidG9kYXlMb3dcIiBzcGFuXG4gIGNvbnN0IHRvZGF5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRvZGF5TG93LmNsYXNzTmFtZSA9IFwidG9kYXlMb3dcIjtcbiAgdG9kYXlMb3cudGV4dENvbnRlbnQgPSBcIkw6IFwiICsgYXJyWzBdLm1pbkM7XG5cbiAgLy8gQXBwZW5kIFwiY3VycmVudFRlbXBcIiwgXCJjb25kaXRpb25cIiwgXCJ0b2RheUhpZ2hcIiwgYW5kIFwidG9kYXlMb3dcIiB0byBcInRvZGF5SGlnaExvd3NcIlxuICB0b2RheUhpZ2hMb3dzLmFwcGVuZENoaWxkKHRvZGF5SGlnaCk7XG4gIHRvZGF5SGlnaExvd3MuYXBwZW5kQ2hpbGQodG9kYXlMb3cpO1xuXG4gIC8vIEFwcGVuZCBcImN1cnJlbnRUZW1wXCIsIFwiY29uZGl0aW9uXCIsIGFuZCBcInRvZGF5SGlnaExvd3NcIiB0byBcImNvbmRpdGlvbnNcIlxuICBjb25kaXRpb25zLmFwcGVuZENoaWxkKGN1cnJlbnRUZW1wKTtcbiAgY29uZGl0aW9ucy5hcHBlbmRDaGlsZChjb25kaXRpb24pO1xuICBjb25kaXRpb25zLmFwcGVuZENoaWxkKHRvZGF5SGlnaExvd3MpO1xuXG4gIC8vIEFwcGVuZCBcImNpdHlJbmZvXCIgYW5kIFwiY29uZGl0aW9uc1wiIHRvIFwidG9kYXlcIlxuICB0b2RheS5hcHBlbmRDaGlsZChjaXR5SW5mbyk7XG4gIHRvZGF5LmFwcGVuZENoaWxkKGNvbmRpdGlvbnMpO1xuXG4gIC8vIENyZWF0ZSB0aGUgXCJ3ZWVrXCIgZGl2XG4gIGNvbnN0IHdlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB3ZWVrLmNsYXNzTmFtZSA9IFwid2Vla1wiO1xuXG4gIC8vIERlZmluZSB0aGUgYXJyYXkgb2YgZGF5c1xuICBjb25zdCBkYXlzID0gW1xuICAgIFwiU3VuZGF5XCIsXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgXTtcblxuICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGxldCBpbmRleCA9IGN1cnJlbnREYXRlLmdldERheSgpICsgMTtcblxuICAvLyBDcmVhdGUgdGhlIGRheXMsIGluY2x1ZGluZyB0aGUgXCJkYXlcIiwgXCJkYXlQaWNcIiwgYW5kIFwiaGlnaExvd3NcIiBlbGVtZW50c1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGRheXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBkYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGRheS5jbGFzc05hbWUgPSBcImRheVwiO1xuICAgIGlmIChpbmRleCA9PT0gNykge1xuICAgICAgaW5kZXggPSAwO1xuICAgIH1cbiAgICBkYXkudGV4dENvbnRlbnQgPSBkYXlzW2luZGV4XTtcbiAgICBpbmRleCsrO1xuXG4gICAgY29uc3QgZGF5UGljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBkYXlQaWMuc3JjID0gYXJyW2ldLmljb247XG4gICAgZGF5UGljLmNsYXNzTmFtZSA9IFwiZGF5UGljXCI7XG5cbiAgICBjb25zdCBoaWdoTG93cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGlnaExvd3MuY2xhc3NOYW1lID0gXCJoaWdoTG93c1wiO1xuXG4gICAgY29uc3QgaGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGhpZ2guY2xhc3NOYW1lID0gXCJoaWdoXCI7XG4gICAgaGlnaC50ZXh0Q29udGVudCA9IGFycltpXS5tYXhDO1xuXG4gICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbG93LmNsYXNzTmFtZSA9IFwibG93XCI7XG4gICAgbG93LnRleHRDb250ZW50ID0gYXJyW2ldLm1pbkM7XG5cbiAgICBoaWdoTG93cy5hcHBlbmRDaGlsZChoaWdoKTtcbiAgICBoaWdoTG93cy5hcHBlbmRDaGlsZChsb3cpO1xuXG4gICAgZGF5LmFwcGVuZENoaWxkKGRheVBpYyk7XG4gICAgZGF5LmFwcGVuZENoaWxkKGhpZ2hMb3dzKTtcblxuICAgIHdlZWsuYXBwZW5kQ2hpbGQoZGF5KTtcbiAgfVxuXG4gIGlmICghaXNEYXkpIHtcbiAgICBjaXR5Qm94LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICBcInVybCgnaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvTG9ORjhjZ3Jyd1lqdTVEeFFML2dpcGh5LmdpZicpXCI7XG4gIH0gZWxzZSBpZiAoY3VyckNvbmRpdGlvbiA9PSBcIkNsZWFyIHNreVwiIHx8IGN1cnJDb25kaXRpb24gPT0gXCJTdW5ueVwiKSB7XG4gICAgY2l0eUJveC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgXCJ1cmwoJ2h0dHBzOi8vbWVkaWEuZ2lwaHkuY29tL21lZGlhL1hCVkhvWmFoZ08wc3NrVEd4YS9naXBoeS5naWYnKVwiO1xuICB9IGVsc2UgaWYgKFxuICAgIGN1cnJDb25kaXRpb24gPT0gXCJDbG91ZHlcIiB8fFxuICAgIGN1cnJDb25kaXRpb24gPT0gXCJQYXJ0bHkgY2xvdWR5XCIgfHxcbiAgICBjdXJyQ29uZGl0aW9uID09IFwiT3ZlcmNhc3RcIiB8fFxuICAgIGN1cnJDb25kaXRpb24gPT0gXCJGb2dneVwiIHx8XG4gICAgY3VyckNvbmRpdGlvbiA9PSBcIkhhenlcIlxuICApIHtcbiAgICBjaXR5Qm94LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICBcInVybCgnaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvZDVQUFlqY2IzY2FQVEhNM2h2L2dpcGh5LWRvd25zaXplZC1sYXJnZS5naWYnKVwiO1xuICB9IGVsc2UgaWYgKFxuICAgIGN1cnJDb25kaXRpb24gPT0gXCJSYWlueVwiIHx8XG4gICAgY3VyckNvbmRpdGlvbiA9PSBcIlNob3dlcnNcIiB8fFxuICAgIGN1cnJDb25kaXRpb24gPT0gXCJNaXN0eVwiIHx8XG4gICAgY3VyckNvbmRpdGlvbiA9PSBcIkZyZWV6aW5nIHJhaW5cIlxuICApIHtcbiAgICBjaXR5Qm94LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICBcInVybCgnaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvdDdRYjg2NTVaMVZmQkdyNVhCL2dpcGh5LmdpZicpXCI7XG4gIH0gZWxzZSBpZiAoY3VyckNvbmRpdGlvbiA9PSBcIldpbmR5XCIgfHwgY3VyckNvbmRpdGlvbiA9PSBcIkR1c3Qgc3Rvcm1zXCIpIHtcbiAgICBjaXR5Qm94LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICBcInVybCgnaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvMElHUnlnRHQ1Y01QMlEwSm11L2dpcGh5LmdpZicpXCI7XG4gIH0gZWxzZSBpZiAoY3VyckNvbmRpdGlvbiA9PSBcIlNub3d5XCIpIHtcbiAgICBjaXR5Qm94LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICBcInVybCgnaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvWGkyWHUwTWVqaHNVby9naXBoeS5naWYnKVwiO1xuICB9IGVsc2UgaWYgKGN1cnJDb25kaXRpb24gPT0gXCJUaHVuZGVyc3Rvcm1zXCIpIHtcbiAgICBjaXR5Qm94LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICBcInVybCgnaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvbDBNWXpBNWN6dTdHVjFYdDYvZ2lwaHkuZ2lmJylcIjtcbiAgfSBlbHNlIHtcbiAgICBjaXR5Qm94LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICBcInVybCgnaHR0cHM6Ly9tZWRpYS5naXBoeS5jb20vbWVkaWEvbDBPMlNwdGhXaTJIQWN3ZXMvZ2lwaHkuZ2lmJylcIjtcbiAgfVxuXG4gIC8vIEFwcGVuZCBcInRvZGF5XCIgYW5kIFwid2Vla1wiIHRvIFwiY2l0eUJveFwiXG4gIGNpdHlCb3guYXBwZW5kQ2hpbGQodG9kYXkpO1xuICBjaXR5Qm94LmFwcGVuZENoaWxkKHdlZWspO1xuXG4gIC8vIEFwcGVuZCBcImNpdHlcbiAgY29uc3QgY2l0aWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jaXRpZXNcIik7XG4gIGNpdGllcy5hcHBlbmRDaGlsZChjaXR5Qm94KTtcbn1cblxuLypcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1ha2VDaXR5KGNpdHkpIHtcbiAgY29uc29sZS5sb2coY2l0eSk7XG5cbiAgLy8gQ3JlYXRlIHRoZSBtYWluIGNvbnRhaW5lciBkaXYgd2l0aCBjbGFzcyBcImNpdHlCb3hcIlxuICBjb25zdCBjaXR5Qm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2l0eUJveC5jbGFzc05hbWUgPSBcImNpdHlCb3hcIjtcblxuICAvLyBDcmVhdGUgdGhlIFwidG9kYXlcIiBkaXZcbiAgY29uc3QgdG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RheS5jbGFzc05hbWUgPSBcInRvZGF5XCI7XG5cbiAgLy8gQ3JlYXRlIHRoZSBcImNpdHlJbmZvXCIgZGl2XG4gIGNvbnN0IGNpdHlJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2l0eUluZm8uY2xhc3NOYW1lID0gXCJjaXR5SW5mb1wiO1xuXG4gIC8vIENyZWF0ZSB0aGUgXCJjaXR5TmFtZVwiIGRpdlxuICBjb25zdCBjaXR5TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNpdHlOYW1lLmNsYXNzTmFtZSA9IFwiY2l0eU5hbWVcIjtcbiAgY2l0eU5hbWUudGV4dENvbnRlbnQgPSBcIlRvcm9udG9cIjtcblxuICAvLyBDcmVhdGUgdGhlIFwiY2l0eVRpbWVcIiBkaXZcbiAgY29uc3QgY2l0eVRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaXR5VGltZS5jbGFzc05hbWUgPSBcImNpdHlUaW1lXCI7XG4gIGNpdHlUaW1lLnRleHRDb250ZW50ID0gXCIxMDozMFwiO1xuXG4gIC8vIEFwcGVuZCBcImNpdHlOYW1lXCIgYW5kIFwiY2l0eVRpbWVcIiB0byBcImNpdHlJbmZvXCJcbiAgY2l0eUluZm8uYXBwZW5kQ2hpbGQoY2l0eU5hbWUpO1xuICBjaXR5SW5mby5hcHBlbmRDaGlsZChjaXR5VGltZSk7XG5cbiAgLy8gQ3JlYXRlIHRoZSBcImNvbmRpdGlvbnNcIiBkaXZcbiAgY29uc3QgY29uZGl0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbmRpdGlvbnMuY2xhc3NOYW1lID0gXCJjb25kaXRpb25zXCI7XG5cbiAgLy8gQ3JlYXRlIHRoZSBcImN1cnJlbnRUZW1wXCIgZGl2XG4gIGNvbnN0IGN1cnJlbnRUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY3VycmVudFRlbXAuY2xhc3NOYW1lID0gXCJjdXJyZW50VGVtcFwiO1xuICBjdXJyZW50VGVtcC50ZXh0Q29udGVudCA9IFwiMjDCsENcIjtcblxuICAvLyBDcmVhdGUgdGhlIFwiY29uZGl0aW9uXCIgZGl2XG4gIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbmRpdGlvbi5jbGFzc05hbWUgPSBcImNvbmRpdGlvblwiO1xuICBjb25kaXRpb24udGV4dENvbnRlbnQgPSBcIk1vc3RseSBTdW5ueVwiO1xuXG4gIC8vIENyZWF0ZSB0aGUgXCJ0b2RheUhpZ2hMb3dzXCIgZGl2XG4gIGNvbnN0IHRvZGF5SGlnaExvd3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b2RheUhpZ2hMb3dzLmNsYXNzTmFtZSA9IFwidG9kYXlIaWdoTG93c1wiO1xuXG4gIC8vIENyZWF0ZSB0aGUgXCJ0b2RheUhpZ2hcIiBzcGFuXG4gIGNvbnN0IHRvZGF5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0b2RheUhpZ2guY2xhc3NOYW1lID0gXCJ0b2RheUhpZ2hcIjtcbiAgdG9kYXlIaWdoLnRleHRDb250ZW50ID0gXCJIOiAyMFwiO1xuXG4gIC8vIENyZWF0ZSB0aGUgXCJ0b2RheUxvd1wiIHNwYW5cbiAgY29uc3QgdG9kYXlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgdG9kYXlMb3cuY2xhc3NOYW1lID0gXCJ0b2RheUxvd1wiO1xuICB0b2RheUxvdy50ZXh0Q29udGVudCA9IFwiTDogMTBcIjtcblxuICAvLyBBcHBlbmQgXCJjdXJyZW50VGVtcFwiLCBcImNvbmRpdGlvblwiLCBcInRvZGF5SGlnaFwiLCBhbmQgXCJ0b2RheUxvd1wiIHRvIFwidG9kYXlIaWdoTG93c1wiXG4gIHRvZGF5SGlnaExvd3MuYXBwZW5kQ2hpbGQodG9kYXlIaWdoKTtcbiAgdG9kYXlIaWdoTG93cy5hcHBlbmRDaGlsZCh0b2RheUxvdyk7XG5cbiAgLy8gQXBwZW5kIFwiY3VycmVudFRlbXBcIiwgXCJjb25kaXRpb25cIiwgYW5kIFwidG9kYXlIaWdoTG93c1wiIHRvIFwiY29uZGl0aW9uc1wiXG4gIGNvbmRpdGlvbnMuYXBwZW5kQ2hpbGQoY3VycmVudFRlbXApO1xuICBjb25kaXRpb25zLmFwcGVuZENoaWxkKGNvbmRpdGlvbik7XG4gIGNvbmRpdGlvbnMuYXBwZW5kQ2hpbGQodG9kYXlIaWdoTG93cyk7XG5cbiAgLy8gQXBwZW5kIFwiY2l0eUluZm9cIiBhbmQgXCJjb25kaXRpb25zXCIgdG8gXCJ0b2RheVwiXG4gIHRvZGF5LmFwcGVuZENoaWxkKGNpdHlJbmZvKTtcbiAgdG9kYXkuYXBwZW5kQ2hpbGQoY29uZGl0aW9ucyk7XG5cbiAgLy8gQ3JlYXRlIHRoZSBcIndlZWtcIiBkaXZcbiAgY29uc3Qgd2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHdlZWsuY2xhc3NOYW1lID0gXCJ3ZWVrXCI7XG5cbiAgLy8gRGVmaW5lIHRoZSBhcnJheSBvZiBkYXlzXG4gIGNvbnN0IGRheXMgPSBbXG4gICAgXCJNb25kYXlcIixcbiAgICBcIlR1ZXNkYXlcIixcbiAgICBcIldlZG5lc2RheVwiLFxuICAgIFwiVGh1cnNkYXlcIixcbiAgICBcIkZyaWRheVwiLFxuICAgIFwiU2F0dXJkYXlcIixcbiAgICBcIlN1bmRheVwiLFxuICBdO1xuXG4gIC8vIENyZWF0ZSB0aGUgZGF5cywgaW5jbHVkaW5nIHRoZSBcImRheVwiLCBcImRheVBpY1wiLCBhbmQgXCJoaWdoTG93c1wiIGVsZW1lbnRzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF5cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZGF5LmNsYXNzTmFtZSA9IFwiZGF5XCI7XG4gICAgZGF5LnRleHRDb250ZW50ID0gZGF5c1tpXTtcblxuICAgIGNvbnN0IGRheVBpYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgZGF5UGljLnNyYyA9IFwiLi4vc3JjL2ltYWdlcy9zdW5ueS5wbmdcIjtcbiAgICBkYXlQaWMuY2xhc3NOYW1lID0gXCJkYXlQaWNcIjtcblxuICAgIGNvbnN0IGhpZ2hMb3dzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoaWdoTG93cy5jbGFzc05hbWUgPSBcImhpZ2hMb3dzXCI7XG5cbiAgICBjb25zdCBoaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgaGlnaC5jbGFzc05hbWUgPSBcImhpZ2hcIjtcbiAgICBoaWdoLnRleHRDb250ZW50ID0gXCIyNVwiO1xuXG4gICAgY29uc3QgbG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgbG93LmNsYXNzTmFtZSA9IFwibG93XCI7XG4gICAgbG93LnRleHRDb250ZW50ID0gXCIxMFwiO1xuXG4gICAgaGlnaExvd3MuYXBwZW5kQ2hpbGQoaGlnaCk7XG4gICAgaGlnaExvd3MuYXBwZW5kQ2hpbGQobG93KTtcblxuICAgIGRheS5hcHBlbmRDaGlsZChkYXlQaWMpO1xuICAgIGRheS5hcHBlbmRDaGlsZChoaWdoTG93cyk7XG5cbiAgICB3ZWVrLmFwcGVuZENoaWxkKGRheSk7XG4gIH1cblxuICAvLyBBcHBlbmQgXCJ0b2RheVwiIGFuZCBcIndlZWtcIiB0byBcImNpdHlCb3hcIlxuICBjaXR5Qm94LmFwcGVuZENoaWxkKHRvZGF5KTtcbiAgY2l0eUJveC5hcHBlbmRDaGlsZCh3ZWVrKTtcblxuICAvLyBBcHBlbmQgXCJjaXR5XG4gIGNvbnN0IGNpdGllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2l0aWVzXCIpO1xuICBjaXRpZXMuYXBwZW5kQ2hpbGQoY2l0eUJveCk7XG59XG5cbiovXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBtYWtlQ2l0eSBmcm9tIFwiLi9tYWtlQ2l0eVwiO1xuaW1wb3J0IGdldEZvcmVjYXN0IGZyb20gXCIuL2pzb25IYW5kbGVyXCI7XG5cbi8vYXNzaWduIGV2ZW50TGlzdGVuZXIgdG8gYWRkIGJ1dHRvblxuY29uc3QgYWRkQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGQtYnRuXCIpO1xuY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5X25hbWVcIik7XG5cbmFkZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsZXQgY2l0eU5hbWUgPSBjaXR5SW5wdXQudmFsdWU7XG4gIGlmIChjaXR5TmFtZSA9PT0gXCJcIikge1xuICAgIGNvbnNvbGUubG9nKFwiRXJyb3I6IG5vIGlucHV0dGVkIGNpdHlOYW1lXCIpO1xuICB9IGVsc2Uge1xuICAgIGdldEZvcmVjYXN0KGNpdHlOYW1lKS50aGVuKChjaXR5KSA9PiB7XG4gICAgICAvL2NvbnNvbGUubG9nKGxvbmRvbi53ZWVrbHlGb3JlY2FzdCk7XG4gICAgICBtYWtlQ2l0eShjaXR5KTtcbiAgICB9KTtcbiAgICBjaXR5SW5wdXQudmFsdWUgPSBcIlwiO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==