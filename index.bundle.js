(self["webpackChunkimage_slider"] = self["webpackChunkimage_slider"] || []).push([["index"],{

/***/ "./images sync \\.(png%7Cjpe?g%7Csvg)$":
/*!**********************************************************!*\
  !*** ./images/ sync nonrecursive \.(png%7Cjpe?g%7Csvg)$ ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./1.jpg": "./images/1.jpg",
	"./2.jpg": "./images/2.jpg",
	"./3.jpg": "./images/3.jpg",
	"./4.jpg": "./images/4.jpg",
	"./5.jpg": "./images/5.jpg",
	"./6.jpg": "./images/6.jpg",
	"./7.jpg": "./images/7.jpg",
	"./9.jpg": "./images/9.jpg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./images sync \\.(png%7Cjpe?g%7Csvg)$";

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body{
  margin: 0;
}


@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.fade{
  animation: fadeIn 1s;
}


/*PC and tablets*/
@media ( min-width: 481px  ){
  body{
    overflow: hidden;
    background-color: rgba(214, 213, 213, 0.603);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template: 10vh 70vh 10vh / 100vw;
    gap: 2vh;
  }
  #title{
    text-align: center;
    align-self: center
  }

  #footer {
    position: fixed;
    bottom: 0px;
    background-color: rgb(99, 99, 99);
    height: 5vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }  

  #generalContainer{
    display: grid;
    grid-template:  60vh 5vh / 10vw 70vw 10vw;
    justify-content: center;
    gap: 2vw;
  } 

  #imageContainer{
    display: flex;
    grid-row:1/ 2;
    grid-column: 2/3;
    width: 70vw;
    height: 60vh;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 4px;
  }

  #leftButton{
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  #rightButton{
    grid-row: 1 / 2;
    grid-column: 3 / 4
  }

  #dotsContainer{
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
    /*font-weight: bolder;*/
  }

  .dot{    
    font-size: 50px;
    transition: all 0.3s;
  }

  .dotSelected{
    font-size: 80px;
  }

  #imageDisplayed {
    max-width:100%;
    max-height:100%;
    
  }

  button{
    text-align: center;
    width:100%;
    height: 100%;
    border-radius: 5vh;
    border: none;   
    box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
    background-color: rgba(0,0,0,0.1);
    font-size: 7vw;
    transition: all 0.3s;
  } 

  button:hover{
    border: 2px solid black;
    background-color: rgba(0,0,0,0.2);
    box-shadow: 5px 5px 5px rgba(0,0,0,0.4);
    font-size: 8vw;
    font-weight: bolder;
  }

  #slidebar{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
    transition: all 0.3s;
  }

  .slidebarImgContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7vh;
    width: 7vh;
    border: 1px solid black;
    border-radius: 4px;
    transition: all 0.3s;
  }
  .slidebarImgContainer:hover{
    height: 8vh;
    width: 8vh;
    border: 2px solid grey;    
    box-shadow: 4px 4px 4px rgba(0,0,0,0.3);
  }
  .slidebarImageShowing.slidebarImgContainer:hover, .slidebarImageShowing {
    height: 9vh;
    width: 9vh;
    border: 3px solid black;    
    box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
  }

  .slidebarImage{
    max-width: 100%;
    max-height: 100%;
  }

}


/*Mobile format*/
@media ( max-width: 480px  ){
  body{
    overflow: hidden;
    background-color: rgba(214, 213, 213, 0.603);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template: 5vh 60vh 10vh/ 100vw;
    gap: 2vh;
  }
  #title{
    text-align: center;
    align-self: center
  }

  #footer {
    position: fixed;
    bottom: 0px;
    background-color: rgb(99, 99, 99);
    height: 5vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
  }  

  #generalContainer{
    display: grid;
    grid-template:  50vh 5vh 5vh/ 10vw repeat(2,35vw) 10vw;
    justify-content: center;
    gap: 2vw;
  } 

  #imageContainer{
    display: flex;
    grid-row:1/ 2;
    grid-column: 1/5;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    border-radius: 4px;
  }

  #leftButton{
    grid-row: 3 / 4;
    grid-column: 2 / 3;
  }

  #rightButton{
    grid-row: 3 / 4;
    grid-column: 3 / 4
  }

  #dotsContainer{
    grid-row: 2 / 3;
    grid-column: 2 / 4;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5vw;
    /*font-weight: bolder;*/
  }

  .dot{    
    font-size: 50px;
    transition: all 0.3s;
  }

  .dotSelected{
    font-size: 80px;
  }

  #imageDisplayed {
    max-width:100%;
    max-height:100%;
    
  }

  button{
    text-align: center;
    width:100%;
    height: 100%;
    border-radius: 5vh;
    border: none;   
    box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
    background-color: rgba(0,0,0,0.1);
    font-size: 7vw;
    transition: all 0.3s;
  } 

  button:hover{
    border: 2px solid black;
    background-color: rgba(0,0,0,0.2);
    box-shadow: 5px 5px 5px rgba(0,0,0,0.4);
    font-size: 8vw;
    font-weight: bolder;
  }

  #slidebar{
    padding-top: 4vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 2vw;
    transition: all 0.3s;
  }

  .slidebarImgContainer{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 7vh;
    width: 7vh;
    border: 1px solid black;
    border-radius: 4px;
    transition: all 0.3s;
  }
  .slidebarImgContainer:hover{
    height: 8vh;
    width: 8vh;
    border: 2px solid grey;    
    box-shadow: 4px 4px 4px rgba(0,0,0,0.3);
  }
  .slidebarImageShowing.slidebarImgContainer:hover, .slidebarImageShowing {
    height: 9vh;
    width: 9vh;
    border: 3px solid black;    
    box-shadow: 5px 5px 5px rgba(0,0,0,0.3);
  }

  .slidebarImage{
    max-width: 100%;
    max-height: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body{\r\n  margin: 0;\r\n}\r\n\r\n\r\n@keyframes fadeIn {\r\n  0% { opacity: 0; }\r\n  100% { opacity: 1; }\r\n}\r\n\r\n.fade{\r\n  animation: fadeIn 1s;\r\n}\r\n\r\n\r\n/*PC and tablets*/\r\n@media ( min-width: 481px  ){\r\n  body{\r\n    overflow: hidden;\r\n    background-color: rgba(214, 213, 213, 0.603);\r\n    height: 100vh;\r\n    width: 100vw;\r\n    display: grid;\r\n    grid-template: 10vh 70vh 10vh / 100vw;\r\n    gap: 2vh;\r\n  }\r\n  #title{\r\n    text-align: center;\r\n    align-self: center\r\n  }\r\n\r\n  #footer {\r\n    position: fixed;\r\n    bottom: 0px;\r\n    background-color: rgb(99, 99, 99);\r\n    height: 5vh;\r\n    width: 100vw;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 1rem;\r\n  }  \r\n\r\n  #generalContainer{\r\n    display: grid;\r\n    grid-template:  60vh 5vh / 10vw 70vw 10vw;\r\n    justify-content: center;\r\n    gap: 2vw;\r\n  } \r\n\r\n  #imageContainer{\r\n    display: flex;\r\n    grid-row:1/ 2;\r\n    grid-column: 2/3;\r\n    width: 70vw;\r\n    height: 60vh;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 1px solid black;\r\n    border-radius: 4px;\r\n  }\r\n\r\n  #leftButton{\r\n    grid-row: 1 / 2;\r\n    grid-column: 1 / 2;\r\n  }\r\n\r\n  #rightButton{\r\n    grid-row: 1 / 2;\r\n    grid-column: 3 / 4\r\n  }\r\n\r\n  #dotsContainer{\r\n    grid-row: 2 / 3;\r\n    grid-column: 2 / 3;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 0.5vw;\r\n    /*font-weight: bolder;*/\r\n  }\r\n\r\n  .dot{    \r\n    font-size: 50px;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n  .dotSelected{\r\n    font-size: 80px;\r\n  }\r\n\r\n  #imageDisplayed {\r\n    max-width:100%;\r\n    max-height:100%;\r\n    \r\n  }\r\n\r\n  button{\r\n    text-align: center;\r\n    width:100%;\r\n    height: 100%;\r\n    border-radius: 5vh;\r\n    border: none;   \r\n    box-shadow: 5px 5px 5px rgba(0,0,0,0.3);\r\n    background-color: rgba(0,0,0,0.1);\r\n    font-size: 7vw;\r\n    transition: all 0.3s;\r\n  } \r\n\r\n  button:hover{\r\n    border: 2px solid black;\r\n    background-color: rgba(0,0,0,0.2);\r\n    box-shadow: 5px 5px 5px rgba(0,0,0,0.4);\r\n    font-size: 8vw;\r\n    font-weight: bolder;\r\n  }\r\n\r\n  #slidebar{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 0.5vw;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n  .slidebarImgContainer{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 7vh;\r\n    width: 7vh;\r\n    border: 1px solid black;\r\n    border-radius: 4px;\r\n    transition: all 0.3s;\r\n  }\r\n  .slidebarImgContainer:hover{\r\n    height: 8vh;\r\n    width: 8vh;\r\n    border: 2px solid grey;    \r\n    box-shadow: 4px 4px 4px rgba(0,0,0,0.3);\r\n  }\r\n  .slidebarImageShowing.slidebarImgContainer:hover, .slidebarImageShowing {\r\n    height: 9vh;\r\n    width: 9vh;\r\n    border: 3px solid black;    \r\n    box-shadow: 5px 5px 5px rgba(0,0,0,0.3);\r\n  }\r\n\r\n  .slidebarImage{\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n  }\r\n\r\n}\r\n\r\n\r\n/*Mobile format*/\r\n@media ( max-width: 480px  ){\r\n  body{\r\n    overflow: hidden;\r\n    background-color: rgba(214, 213, 213, 0.603);\r\n    height: 100vh;\r\n    width: 100vw;\r\n    display: grid;\r\n    grid-template: 5vh 60vh 10vh/ 100vw;\r\n    gap: 2vh;\r\n  }\r\n  #title{\r\n    text-align: center;\r\n    align-self: center\r\n  }\r\n\r\n  #footer {\r\n    position: fixed;\r\n    bottom: 0px;\r\n    background-color: rgb(99, 99, 99);\r\n    height: 5vh;\r\n    width: 100vw;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 1rem;\r\n  }  \r\n\r\n  #generalContainer{\r\n    display: grid;\r\n    grid-template:  50vh 5vh 5vh/ 10vw repeat(2,35vw) 10vw;\r\n    justify-content: center;\r\n    gap: 2vw;\r\n  } \r\n\r\n  #imageContainer{\r\n    display: flex;\r\n    grid-row:1/ 2;\r\n    grid-column: 1/5;\r\n    width: 100%;\r\n    height: 100%;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border: 1px solid black;\r\n    border-radius: 4px;\r\n  }\r\n\r\n  #leftButton{\r\n    grid-row: 3 / 4;\r\n    grid-column: 2 / 3;\r\n  }\r\n\r\n  #rightButton{\r\n    grid-row: 3 / 4;\r\n    grid-column: 3 / 4\r\n  }\r\n\r\n  #dotsContainer{\r\n    grid-row: 2 / 3;\r\n    grid-column: 2 / 4;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 0.5vw;\r\n    /*font-weight: bolder;*/\r\n  }\r\n\r\n  .dot{    \r\n    font-size: 50px;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n  .dotSelected{\r\n    font-size: 80px;\r\n  }\r\n\r\n  #imageDisplayed {\r\n    max-width:100%;\r\n    max-height:100%;\r\n    \r\n  }\r\n\r\n  button{\r\n    text-align: center;\r\n    width:100%;\r\n    height: 100%;\r\n    border-radius: 5vh;\r\n    border: none;   \r\n    box-shadow: 5px 5px 5px rgba(0,0,0,0.3);\r\n    background-color: rgba(0,0,0,0.1);\r\n    font-size: 7vw;\r\n    transition: all 0.3s;\r\n  } \r\n\r\n  button:hover{\r\n    border: 2px solid black;\r\n    background-color: rgba(0,0,0,0.2);\r\n    box-shadow: 5px 5px 5px rgba(0,0,0,0.4);\r\n    font-size: 8vw;\r\n    font-weight: bolder;\r\n  }\r\n\r\n  #slidebar{\r\n    padding-top: 4vh;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 2vw;\r\n    transition: all 0.3s;\r\n  }\r\n\r\n  .slidebarImgContainer{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 7vh;\r\n    width: 7vh;\r\n    border: 1px solid black;\r\n    border-radius: 4px;\r\n    transition: all 0.3s;\r\n  }\r\n  .slidebarImgContainer:hover{\r\n    height: 8vh;\r\n    width: 8vh;\r\n    border: 2px solid grey;    \r\n    box-shadow: 4px 4px 4px rgba(0,0,0,0.3);\r\n  }\r\n  .slidebarImageShowing.slidebarImgContainer:hover, .slidebarImageShowing {\r\n    height: 9vh;\r\n    width: 9vh;\r\n    border: 3px solid black;    \r\n    box-shadow: 5px 5px 5px rgba(0,0,0,0.3);\r\n  }\r\n\r\n  .slidebarImage{\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

/***/ "./images/1.jpg":
/*!**********************!*\
  !*** ./images/1.jpg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/1.jpg");

/***/ }),

/***/ "./images/2.jpg":
/*!**********************!*\
  !*** ./images/2.jpg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/2.jpg");

/***/ }),

/***/ "./images/3.jpg":
/*!**********************!*\
  !*** ./images/3.jpg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/3.jpg");

/***/ }),

/***/ "./images/4.jpg":
/*!**********************!*\
  !*** ./images/4.jpg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/4.jpg");

/***/ }),

/***/ "./images/5.jpg":
/*!**********************!*\
  !*** ./images/5.jpg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/5.jpg");

/***/ }),

/***/ "./images/6.jpg":
/*!**********************!*\
  !*** ./images/6.jpg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/6.jpg");

/***/ }),

/***/ "./images/7.jpg":
/*!**********************!*\
  !*** ./images/7.jpg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/7.jpg");

/***/ }),

/***/ "./images/9.jpg":
/*!**********************!*\
  !*** ./images/9.jpg ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "images/9.jpg");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

"use strict";


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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(/*! ./style.css */ "./src/style.css");

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

// Imagen loader
//import images from "../images/pruebaa.jpeg";
const images = importAll(__webpack_require__("./images sync \\.(png%7Cjpe?g%7Csvg)$"));
const imagesNames = Object.keys(images);
//

// Creating DOM
/*
<div id="title">HOLA</div>
    <div id="generalContainer">
      <div id="imageContainer"></div>
      <button id="left">IZQUIERDA<</button>
      <button id="right">>DERECHAs</button>      
    </div>
<div id="sliderContainer"></div>
<div id="footer"></div>
*/
const body = document.querySelector("body");
const title = document.createElement("div");
title.setAttribute("id","title");
title.textContent = "DASHBOARD TITLE"
const generalContainer = document.createElement("div");
generalContainer.setAttribute("id", "generalContainer");
const imageContainer = document.createElement("div");
imageContainer.setAttribute("id","imageContainer");
const leftButton = document.createElement("button");
leftButton.setAttribute("id", "leftButton");
leftButton.textContent = "↤";
leftButton.addEventListener("click", goLeft);
const rightButton = document.createElement("button");
rightButton.setAttribute("id", "rightButton");
rightButton.textContent = "↦";
rightButton.addEventListener("click", goRight);
const dotsContainer = document.createElement("div");
dotsContainer.setAttribute("id", "dotsContainer");


generalContainer.appendChild(imageContainer);
generalContainer.appendChild(leftButton);
generalContainer.appendChild(rightButton);
generalContainer.appendChild(dotsContainer);

const slidebar = document.createElement("div");
slidebar.setAttribute("id", "slidebar");

body.appendChild(title);
body.appendChild(generalContainer);
body.appendChild(slidebar);


const imagen = document.createElement("img");
imagen.setAttribute("id", "imageDisplayed");

//load image

imagen.setAttribute("src", images[imagesNames[0]].default);
imagen.classList.add("fade");
imageContainer.appendChild(imagen);


const footer = document.createElement("div");
footer.setAttribute("id", "footer");
footer.textContent = "Created by Jenner Caraballo"
body.appendChild(footer);
//console.log(imagesNames[0]);
removeFade();
/*  Creating slidebar                                                                                     */

imagesNames.forEach(element => {
  loadSliderImages(element);
  loadDots();    
});

function loadSliderImages(element){
  const slidebarImgContainer = document.createElement("div");
  slidebarImgContainer.classList.add("slidebarImgContainer");
  slidebarImgContainer.addEventListener("click", selectPicture);
  const newImagetoAdd = document.createElement("img");
  newImagetoAdd.classList.add("slidebarImage");
  newImagetoAdd.setAttribute("src", images[element].default);
  slidebarImgContainer.appendChild(newImagetoAdd)
  slidebar.appendChild(slidebarImgContainer);
}

function loadDots(){
  const oneDotContainer = document.createElement("div");
  oneDotContainer.classList.add("dot");
  oneDotContainer.textContent = "·";
  dotsContainer.appendChild(oneDotContainer);
}

//Refresh dots
dotPicture(imagesNames[0]);
slidebarImageShowing(imagesNames[0]);

function dotPicture(pictureName){
 const index = imagesNames.indexOf(pictureName);
 const dots = dotsContainer.childNodes;
 dots[index].classList.add("dotSelected");
}

function removeSelectedDot(){
  const dots = dotsContainer.childNodes;
  dots.forEach(element => {
    element.classList.remove("dotSelected");
  })
}

function slidebarImageShowing(pictureName){
  const index = imagesNames.indexOf(pictureName);
  const slidebarImgContainers = slidebar.childNodes;
  slidebarImgContainers[index].classList.add("slidebarImageShowing");
}

function removeSlidebarImageShowing(){
  const slidebarImgContainers = slidebar.childNodes;
  slidebarImgContainers.forEach(element => {
    element.classList.remove("slidebarImageShowing");
  })
}

/** event functions  */
function goLeft(){
  startCountDown();
  removeSelectedDot();
  removeSlidebarImageShowing();
  const imageName = checkImageName(imagen.src);//checkImageShowing();
  const indexOfImage = imagesNames.indexOf(imageName);
  let newImage = "";
  if (indexOfImage == 0) {
    const lastImages = imagesNames.length - 1;
    newImage = imagesNames[lastImages];
    imagen.setAttribute("src", images[newImage].default);
  }else{
    newImage = imagesNames[indexOfImage - 1]
    imagen.setAttribute("src", images[newImage].default);
  }
  imagen.classList.add("fade");
  removeFade();
  dotPicture(newImage);
  slidebarImageShowing(newImage);
}

function goRight(){
  startCountDown();
  removeSelectedDot();
  removeSlidebarImageShowing();
  const imageName = checkImageName(imagen.src);//checkImageShowing();
  const indexOfImage = imagesNames.indexOf(imageName);
  const lastImage = imagesNames.length - 1;
  let newImage = "";
  if (indexOfImage == lastImage) {
    newImage = imagesNames[0];
    imagen.setAttribute("src", images[newImage].default);
  }else{
    newImage = imagesNames[indexOfImage + 1]
    imagen.setAttribute("src", images[newImage].default);
  }
  imagen.classList.add("fade");
  removeFade();
  dotPicture(newImage);
  slidebarImageShowing(newImage);
}

function checkImageName(source){

  const splittedImageSource = source.split("/");//imagen.src.split("/");
  const Long = splittedImageSource.length;
  const imageName = splittedImageSource[Long - 1];
  return imageName;
}

function removeFade(){
  setTimeout(function() {
    imagen.classList.remove("fade");
  }, 1000);
}

function selectPicture(e){
  startCountDown();
  removeSelectedDot();
  removeSlidebarImageShowing();
  let imageName;
  if(e.target.childNodes.length){
    imageName = checkImageName(e.target.childNodes[0].src);
  }else{
    imageName = checkImageName(e.target.src);
  }
  imagen.setAttribute("src", images[imageName].default);
  imagen.classList.add("fade");  
  dotPicture(imageName);
  slidebarImageShowing(imageName);
  removeFade();
}

let interval = setInterval(goRight, 5000);
//Timer change image
function startCountDown(){
  clearInterval(interval);
  interval = setInterval(goRight, 5000);
}

//const interval = setInterval(goRight, 5000); 

window.addEventListener(`mousemove`, startCountDown);



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLE9BQU8sS0FBSyxvQkFBb0IscUJBQXFCLE9BQU8sS0FBSyxZQUFZLFFBQVEsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFh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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltYWdlLXNsaWRlci8uL2ltYWdlcy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vaW1hZ2VzLzEuanBnIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL2ltYWdlcy8yLmpwZyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9pbWFnZXMvMy5qcGciLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vaW1hZ2VzLzQuanBnIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL2ltYWdlcy81LmpwZyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9pbWFnZXMvNi5qcGciLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vaW1hZ2VzLzcuanBnIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL2ltYWdlcy85LmpwZyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuLzEuanBnXCI6IFwiLi9pbWFnZXMvMS5qcGdcIixcblx0XCIuLzIuanBnXCI6IFwiLi9pbWFnZXMvMi5qcGdcIixcblx0XCIuLzMuanBnXCI6IFwiLi9pbWFnZXMvMy5qcGdcIixcblx0XCIuLzQuanBnXCI6IFwiLi9pbWFnZXMvNC5qcGdcIixcblx0XCIuLzUuanBnXCI6IFwiLi9pbWFnZXMvNS5qcGdcIixcblx0XCIuLzYuanBnXCI6IFwiLi9pbWFnZXMvNi5qcGdcIixcblx0XCIuLzcuanBnXCI6IFwiLi9pbWFnZXMvNy5qcGdcIixcblx0XCIuLzkuanBnXCI6IFwiLi9pbWFnZXMvOS5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9pbWFnZXMgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkXCI7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHl7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHsgb3BhY2l0eTogMDsgfVxyXG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi5mYWRle1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xyXG59XHJcblxyXG5cclxuLypQQyBhbmQgdGFibGV0cyovXHJcbkBtZWRpYSAoIG1pbi13aWR0aDogNDgxcHggICl7XHJcbiAgYm9keXtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNCwgMjEzLCAyMTMsIDAuNjAzKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTB2aCA3MHZoIDEwdmggLyAxMDB2dztcclxuICAgIGdhcDogMnZoO1xyXG4gIH1cclxuICAjdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXJcclxuICB9XHJcblxyXG4gICNmb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XHJcbiAgICBoZWlnaHQ6IDV2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfSAgXHJcblxyXG4gICNnZW5lcmFsQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGU6ICA2MHZoIDV2aCAvIDEwdncgNzB2dyAxMHZ3O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDJ2dztcclxuICB9IFxyXG5cclxuICAjaW1hZ2VDb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ3JpZC1yb3c6MS8gMjtcclxuICAgIGdyaWQtY29sdW1uOiAyLzM7XHJcbiAgICB3aWR0aDogNzB2dztcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuXHJcbiAgI2xlZnRCdXR0b257XHJcbiAgICBncmlkLXJvdzogMSAvIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbiAgfVxyXG5cclxuICAjcmlnaHRCdXR0b257XHJcbiAgICBncmlkLXJvdzogMSAvIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMyAvIDRcclxuICB9XHJcblxyXG4gICNkb3RzQ29udGFpbmVye1xyXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xyXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjV2dztcclxuICAgIC8qZm9udC13ZWlnaHQ6IGJvbGRlcjsqL1xyXG4gIH1cclxuXHJcbiAgLmRvdHsgICAgXHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcblxyXG4gIC5kb3RTZWxlY3RlZHtcclxuICAgIGZvbnQtc2l6ZTogODBweDtcclxuICB9XHJcblxyXG4gICNpbWFnZURpc3BsYXllZCB7XHJcbiAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgIG1heC1oZWlnaHQ6MTAwJTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgYnV0dG9ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDV2aDtcclxuICAgIGJvcmRlcjogbm9uZTsgICBcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIGZvbnQtc2l6ZTogN3Z3O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfSBcclxuXHJcbiAgYnV0dG9uOmhvdmVye1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICBmb250LXNpemU6IDh2dztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG5cclxuICAjc2xpZGViYXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjV2dztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuXHJcbiAgLnNsaWRlYmFySW1nQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogN3ZoO1xyXG4gICAgd2lkdGg6IDd2aDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG4gIC5zbGlkZWJhckltZ0NvbnRhaW5lcjpob3ZlcntcclxuICAgIGhlaWdodDogOHZoO1xyXG4gICAgd2lkdGg6IDh2aDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7ICAgIFxyXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gIH1cclxuICAuc2xpZGViYXJJbWFnZVNob3dpbmcuc2xpZGViYXJJbWdDb250YWluZXI6aG92ZXIsIC5zbGlkZWJhckltYWdlU2hvd2luZyB7XHJcbiAgICBoZWlnaHQ6IDl2aDtcclxuICAgIHdpZHRoOiA5dmg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjazsgICAgXHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgfVxyXG5cclxuICAuc2xpZGViYXJJbWFnZXtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8qTW9iaWxlIGZvcm1hdCovXHJcbkBtZWRpYSAoIG1heC13aWR0aDogNDgwcHggICl7XHJcbiAgYm9keXtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNCwgMjEzLCAyMTMsIDAuNjAzKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTogNXZoIDYwdmggMTB2aC8gMTAwdnc7XHJcbiAgICBnYXA6IDJ2aDtcclxuICB9XHJcbiAgI3RpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyXHJcbiAgfVxyXG5cclxuICAjZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH0gIFxyXG5cclxuICAjZ2VuZXJhbENvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlOiAgNTB2aCA1dmggNXZoLyAxMHZ3IHJlcGVhdCgyLDM1dncpIDEwdnc7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMnZ3O1xyXG4gIH0gXHJcblxyXG4gICNpbWFnZUNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBncmlkLXJvdzoxLyAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG5cclxuICAjbGVmdEJ1dHRvbntcclxuICAgIGdyaWQtcm93OiAzIC8gNDtcclxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcclxuICB9XHJcblxyXG4gICNyaWdodEJ1dHRvbntcclxuICAgIGdyaWQtcm93OiAzIC8gNDtcclxuICAgIGdyaWQtY29sdW1uOiAzIC8gNFxyXG4gIH1cclxuXHJcbiAgI2RvdHNDb250YWluZXJ7XHJcbiAgICBncmlkLXJvdzogMiAvIDM7XHJcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXZ3O1xyXG4gICAgLypmb250LXdlaWdodDogYm9sZGVyOyovXHJcbiAgfVxyXG5cclxuICAuZG90eyAgICBcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuXHJcbiAgLmRvdFNlbGVjdGVke1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG4gIH1cclxuXHJcbiAgI2ltYWdlRGlzcGxheWVkIHtcclxuICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgbWF4LWhlaWdodDoxMDAlO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBidXR0b257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXZoO1xyXG4gICAgYm9yZGVyOiBub25lOyAgIFxyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgZm9udC1zaXplOiA3dnc7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9IFxyXG5cclxuICBidXR0b246aG92ZXJ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwwLDAsMC40KTtcclxuICAgIGZvbnQtc2l6ZTogOHZ3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcblxyXG4gICNzbGlkZWJhcntcclxuICAgIHBhZGRpbmctdG9wOiA0dmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAydnc7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcblxyXG4gIC5zbGlkZWJhckltZ0NvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDd2aDtcclxuICAgIHdpZHRoOiA3dmg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuICAuc2xpZGViYXJJbWdDb250YWluZXI6aG92ZXJ7XHJcbiAgICBoZWlnaHQ6IDh2aDtcclxuICAgIHdpZHRoOiA4dmg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5OyAgICBcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICB9XHJcbiAgLnNsaWRlYmFySW1hZ2VTaG93aW5nLnNsaWRlYmFySW1nQ29udGFpbmVyOmhvdmVyLCAuc2xpZGViYXJJbWFnZVNob3dpbmcge1xyXG4gICAgaGVpZ2h0OiA5dmg7XHJcbiAgICB3aWR0aDogOXZoO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7ICAgIFxyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gIH1cclxuXHJcbiAgLnNsaWRlYmFySW1hZ2V7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7QUFDWDs7O0FBR0E7RUFDRSxLQUFLLFVBQVUsRUFBRTtFQUNqQixPQUFPLFVBQVUsRUFBRTtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7O0FBR0EsaUJBQWlCO0FBQ2pCO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxRQUFRO0VBQ1Y7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQjtFQUNGOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHlDQUF5QztJQUN6Qyx1QkFBdUI7SUFDdkIsUUFBUTtFQUNWOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7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VztJQUNYLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsdUNBQXVDO0VBQ3pDO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qix1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxyXFxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcclxcbn1cXHJcXG5cXHJcXG4uZmFkZXtcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKlBDIGFuZCB0YWJsZXRzKi9cXHJcXG5AbWVkaWEgKCBtaW4td2lkdGg6IDQ4MXB4ICApe1xcclxcbiAgYm9keXtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTQsIDIxMywgMjEzLCAwLjYwMyk7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTB2aCA3MHZoIDEwdmggLyAxMDB2dztcXHJcXG4gICAgZ2FwOiAydmg7XFxyXFxuICB9XFxyXFxuICAjdGl0bGV7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyXFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZm9vdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xcclxcbiAgICBoZWlnaHQ6IDV2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfSAgXFxyXFxuXFxyXFxuICAjZ2VuZXJhbENvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogIDYwdmggNXZoIC8gMTB2dyA3MHZ3IDEwdnc7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDJ2dztcXHJcXG4gIH0gXFxyXFxuXFxyXFxuICAjaW1hZ2VDb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdyaWQtcm93OjEvIDI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxyXFxuICAgIHdpZHRoOiA3MHZ3O1xcclxcbiAgICBoZWlnaHQ6IDYwdmg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2xlZnRCdXR0b257XFxyXFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3JpZ2h0QnV0dG9ue1xcclxcbiAgICBncmlkLXJvdzogMSAvIDI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNFxcclxcbiAgfVxcclxcblxcclxcbiAgI2RvdHNDb250YWluZXJ7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjV2dztcXHJcXG4gICAgLypmb250LXdlaWdodDogYm9sZGVyOyovXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZG90eyAgICBcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kb3RTZWxlY3RlZHtcXHJcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2ltYWdlRGlzcGxheWVkIHtcXHJcXG4gICAgbWF4LXdpZHRoOjEwMCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6MTAwJTtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICBidXR0b257XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1dmg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTsgICBcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLDAsMCwwLjMpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogN3Z3O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH0gXFxyXFxuXFxyXFxuICBidXR0b246aG92ZXJ7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwwLDAsMC40KTtcXHJcXG4gICAgZm9udC1zaXplOiA4dnc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc2xpZGViYXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuNXZ3O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zbGlkZWJhckltZ0NvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogN3ZoO1xcclxcbiAgICB3aWR0aDogN3ZoO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH1cXHJcXG4gIC5zbGlkZWJhckltZ0NvbnRhaW5lcjpob3ZlcntcXHJcXG4gICAgaGVpZ2h0OiA4dmg7XFxyXFxuICAgIHdpZHRoOiA4dmg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7ICAgIFxcclxcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCByZ2JhKDAsMCwwLDAuMyk7XFxyXFxuICB9XFxyXFxuICAuc2xpZGViYXJJbWFnZVNob3dpbmcuc2xpZGViYXJJbWdDb250YWluZXI6aG92ZXIsIC5zbGlkZWJhckltYWdlU2hvd2luZyB7XFxyXFxuICAgIGhlaWdodDogOXZoO1xcclxcbiAgICB3aWR0aDogOXZoO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjazsgICAgXFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwwLDAsMC4zKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zbGlkZWJhckltYWdle1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qTW9iaWxlIGZvcm1hdCovXFxyXFxuQG1lZGlhICggbWF4LXdpZHRoOiA0ODBweCAgKXtcXHJcXG4gIGJvZHl7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAyMTMsIDIxMywgMC42MDMpO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDV2aCA2MHZoIDEwdmgvIDEwMHZ3O1xcclxcbiAgICBnYXA6IDJ2aDtcXHJcXG4gIH1cXHJcXG4gICN0aXRsZXtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXJcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNmb290ZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XFxyXFxuICAgIGhlaWdodDogNXZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9ICBcXHJcXG5cXHJcXG4gICNnZW5lcmFsQ29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAgNTB2aCA1dmggNXZoLyAxMHZ3IHJlcGVhdCgyLDM1dncpIDEwdnc7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDJ2dztcXHJcXG4gIH0gXFxyXFxuXFxyXFxuICAjaW1hZ2VDb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdyaWQtcm93OjEvIDI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2xlZnRCdXR0b257XFxyXFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3JpZ2h0QnV0dG9ue1xcclxcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNFxcclxcbiAgfVxcclxcblxcclxcbiAgI2RvdHNDb250YWluZXJ7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjV2dztcXHJcXG4gICAgLypmb250LXdlaWdodDogYm9sZGVyOyovXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZG90eyAgICBcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kb3RTZWxlY3RlZHtcXHJcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2ltYWdlRGlzcGxheWVkIHtcXHJcXG4gICAgbWF4LXdpZHRoOjEwMCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6MTAwJTtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICBidXR0b257XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1dmg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTsgICBcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLDAsMCwwLjMpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogN3Z3O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH0gXFxyXFxuXFxyXFxuICBidXR0b246aG92ZXJ7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwwLDAsMC40KTtcXHJcXG4gICAgZm9udC1zaXplOiA4dnc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc2xpZGViYXJ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA0dmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnZ3O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zbGlkZWJhckltZ0NvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogN3ZoO1xcclxcbiAgICB3aWR0aDogN3ZoO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH1cXHJcXG4gIC5zbGlkZWJhckltZ0NvbnRhaW5lcjpob3ZlcntcXHJcXG4gICAgaGVpZ2h0OiA4dmg7XFxyXFxuICAgIHdpZHRoOiA4dmg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7ICAgIFxcclxcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCByZ2JhKDAsMCwwLDAuMyk7XFxyXFxuICB9XFxyXFxuICAuc2xpZGViYXJJbWFnZVNob3dpbmcuc2xpZGViYXJJbWdDb250YWluZXI6aG92ZXIsIC5zbGlkZWJhckltYWdlU2hvd2luZyB7XFxyXFxuICAgIGhlaWdodDogOXZoO1xcclxcbiAgICB3aWR0aDogOXZoO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjazsgICAgXFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwwLDAsMC4zKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zbGlkZWJhckltYWdle1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy8xLmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvMi5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy80LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvNS5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzYuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy83LmpwZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvOS5qcGdcIjsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInJlcXVpcmUoJy4vc3R5bGUuY3NzJyk7XHJcblxyXG5mdW5jdGlvbiBpbXBvcnRBbGwocikge1xyXG4gIGxldCBpbWFnZXMgPSB7fTtcclxuICByLmtleXMoKS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7IGltYWdlc1tpdGVtLnJlcGxhY2UoJy4vJywgJycpXSA9IHIoaXRlbSk7IH0pO1xyXG4gIHJldHVybiBpbWFnZXM7XHJcbn1cclxuXHJcbi8vIEltYWdlbiBsb2FkZXJcclxuLy9pbXBvcnQgaW1hZ2VzIGZyb20gXCIuLi9pbWFnZXMvcHJ1ZWJhYS5qcGVnXCI7XHJcbmNvbnN0IGltYWdlcyA9IGltcG9ydEFsbChyZXF1aXJlLmNvbnRleHQoJy4uL2ltYWdlcycsIGZhbHNlLCAvXFwuKHBuZ3xqcGU/Z3xzdmcpJC8pKTtcclxuY29uc3QgaW1hZ2VzTmFtZXMgPSBPYmplY3Qua2V5cyhpbWFnZXMpO1xyXG4vL1xyXG5cclxuLy8gQ3JlYXRpbmcgRE9NXHJcbi8qXHJcbjxkaXYgaWQ9XCJ0aXRsZVwiPkhPTEE8L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJnZW5lcmFsQ29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJpbWFnZUNvbnRhaW5lclwiPjwvZGl2PlxyXG4gICAgICA8YnV0dG9uIGlkPVwibGVmdFwiPklaUVVJRVJEQTw8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBpZD1cInJpZ2h0XCI+PkRFUkVDSEFzPC9idXR0b24+ICAgICAgXHJcbiAgICA8L2Rpdj5cclxuPGRpdiBpZD1cInNsaWRlckNvbnRhaW5lclwiPjwvZGl2PlxyXG48ZGl2IGlkPVwiZm9vdGVyXCI+PC9kaXY+XHJcbiovXHJcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcclxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG50aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLFwidGl0bGVcIik7XHJcbnRpdGxlLnRleHRDb250ZW50ID0gXCJEQVNIQk9BUkQgVElUTEVcIlxyXG5jb25zdCBnZW5lcmFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuZ2VuZXJhbENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImdlbmVyYWxDb250YWluZXJcIik7XHJcbmNvbnN0IGltYWdlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaW1hZ2VDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIixcImltYWdlQ29udGFpbmVyXCIpO1xyXG5jb25zdCBsZWZ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxubGVmdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxlZnRCdXR0b25cIik7XHJcbmxlZnRCdXR0b24udGV4dENvbnRlbnQgPSBcIuKGpFwiO1xyXG5sZWZ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb0xlZnQpO1xyXG5jb25zdCByaWdodEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbnJpZ2h0QnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicmlnaHRCdXR0b25cIik7XHJcbnJpZ2h0QnV0dG9uLnRleHRDb250ZW50ID0gXCLihqZcIjtcclxucmlnaHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdvUmlnaHQpO1xyXG5jb25zdCBkb3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuZG90c0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRvdHNDb250YWluZXJcIik7XHJcblxyXG5cclxuZ2VuZXJhbENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZUNvbnRhaW5lcik7XHJcbmdlbmVyYWxDb250YWluZXIuYXBwZW5kQ2hpbGQobGVmdEJ1dHRvbik7XHJcbmdlbmVyYWxDb250YWluZXIuYXBwZW5kQ2hpbGQocmlnaHRCdXR0b24pO1xyXG5nZW5lcmFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGRvdHNDb250YWluZXIpO1xyXG5cclxuY29uc3Qgc2xpZGViYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5zbGlkZWJhci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNsaWRlYmFyXCIpO1xyXG5cclxuYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XHJcbmJvZHkuYXBwZW5kQ2hpbGQoZ2VuZXJhbENvbnRhaW5lcik7XHJcbmJvZHkuYXBwZW5kQ2hpbGQoc2xpZGViYXIpO1xyXG5cclxuXHJcbmNvbnN0IGltYWdlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbmltYWdlbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImltYWdlRGlzcGxheWVkXCIpO1xyXG5cclxuLy9sb2FkIGltYWdlXHJcblxyXG5pbWFnZW4uc2V0QXR0cmlidXRlKFwic3JjXCIsIGltYWdlc1tpbWFnZXNOYW1lc1swXV0uZGVmYXVsdCk7XHJcbmltYWdlbi5jbGFzc0xpc3QuYWRkKFwiZmFkZVwiKTtcclxuaW1hZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VuKTtcclxuXHJcblxyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5mb290ZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmb290ZXJcIik7XHJcbmZvb3Rlci50ZXh0Q29udGVudCA9IFwiQ3JlYXRlZCBieSBKZW5uZXIgQ2FyYWJhbGxvXCJcclxuYm9keS5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG4vL2NvbnNvbGUubG9nKGltYWdlc05hbWVzWzBdKTtcclxucmVtb3ZlRmFkZSgpO1xyXG4vKiAgQ3JlYXRpbmcgc2xpZGViYXIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuXHJcbmltYWdlc05hbWVzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgbG9hZFNsaWRlckltYWdlcyhlbGVtZW50KTtcclxuICBsb2FkRG90cygpOyAgICBcclxufSk7XHJcblxyXG5mdW5jdGlvbiBsb2FkU2xpZGVySW1hZ2VzKGVsZW1lbnQpe1xyXG4gIGNvbnN0IHNsaWRlYmFySW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBzbGlkZWJhckltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwic2xpZGViYXJJbWdDb250YWluZXJcIik7XHJcbiAgc2xpZGViYXJJbWdDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlbGVjdFBpY3R1cmUpO1xyXG4gIGNvbnN0IG5ld0ltYWdldG9BZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gIG5ld0ltYWdldG9BZGQuY2xhc3NMaXN0LmFkZChcInNsaWRlYmFySW1hZ2VcIik7XHJcbiAgbmV3SW1hZ2V0b0FkZC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1hZ2VzW2VsZW1lbnRdLmRlZmF1bHQpO1xyXG4gIHNsaWRlYmFySW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0ltYWdldG9BZGQpXHJcbiAgc2xpZGViYXIuYXBwZW5kQ2hpbGQoc2xpZGViYXJJbWdDb250YWluZXIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkRG90cygpe1xyXG4gIGNvbnN0IG9uZURvdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgb25lRG90Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkb3RcIik7XHJcbiAgb25lRG90Q29udGFpbmVyLnRleHRDb250ZW50ID0gXCLCt1wiO1xyXG4gIGRvdHNDb250YWluZXIuYXBwZW5kQ2hpbGQob25lRG90Q29udGFpbmVyKTtcclxufVxyXG5cclxuLy9SZWZyZXNoIGRvdHNcclxuZG90UGljdHVyZShpbWFnZXNOYW1lc1swXSk7XHJcbnNsaWRlYmFySW1hZ2VTaG93aW5nKGltYWdlc05hbWVzWzBdKTtcclxuXHJcbmZ1bmN0aW9uIGRvdFBpY3R1cmUocGljdHVyZU5hbWUpe1xyXG4gY29uc3QgaW5kZXggPSBpbWFnZXNOYW1lcy5pbmRleE9mKHBpY3R1cmVOYW1lKTtcclxuIGNvbnN0IGRvdHMgPSBkb3RzQ29udGFpbmVyLmNoaWxkTm9kZXM7XHJcbiBkb3RzW2luZGV4XS5jbGFzc0xpc3QuYWRkKFwiZG90U2VsZWN0ZWRcIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVNlbGVjdGVkRG90KCl7XHJcbiAgY29uc3QgZG90cyA9IGRvdHNDb250YWluZXIuY2hpbGROb2RlcztcclxuICBkb3RzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkb3RTZWxlY3RlZFwiKTtcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBzbGlkZWJhckltYWdlU2hvd2luZyhwaWN0dXJlTmFtZSl7XHJcbiAgY29uc3QgaW5kZXggPSBpbWFnZXNOYW1lcy5pbmRleE9mKHBpY3R1cmVOYW1lKTtcclxuICBjb25zdCBzbGlkZWJhckltZ0NvbnRhaW5lcnMgPSBzbGlkZWJhci5jaGlsZE5vZGVzO1xyXG4gIHNsaWRlYmFySW1nQ29udGFpbmVyc1tpbmRleF0uY2xhc3NMaXN0LmFkZChcInNsaWRlYmFySW1hZ2VTaG93aW5nXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTbGlkZWJhckltYWdlU2hvd2luZygpe1xyXG4gIGNvbnN0IHNsaWRlYmFySW1nQ29udGFpbmVycyA9IHNsaWRlYmFyLmNoaWxkTm9kZXM7XHJcbiAgc2xpZGViYXJJbWdDb250YWluZXJzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZWJhckltYWdlU2hvd2luZ1wiKTtcclxuICB9KVxyXG59XHJcblxyXG4vKiogZXZlbnQgZnVuY3Rpb25zICAqL1xyXG5mdW5jdGlvbiBnb0xlZnQoKXtcclxuICBzdGFydENvdW50RG93bigpO1xyXG4gIHJlbW92ZVNlbGVjdGVkRG90KCk7XHJcbiAgcmVtb3ZlU2xpZGViYXJJbWFnZVNob3dpbmcoKTtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBjaGVja0ltYWdlTmFtZShpbWFnZW4uc3JjKTsvL2NoZWNrSW1hZ2VTaG93aW5nKCk7XHJcbiAgY29uc3QgaW5kZXhPZkltYWdlID0gaW1hZ2VzTmFtZXMuaW5kZXhPZihpbWFnZU5hbWUpO1xyXG4gIGxldCBuZXdJbWFnZSA9IFwiXCI7XHJcbiAgaWYgKGluZGV4T2ZJbWFnZSA9PSAwKSB7XHJcbiAgICBjb25zdCBsYXN0SW1hZ2VzID0gaW1hZ2VzTmFtZXMubGVuZ3RoIC0gMTtcclxuICAgIG5ld0ltYWdlID0gaW1hZ2VzTmFtZXNbbGFzdEltYWdlc107XHJcbiAgICBpbWFnZW4uc2V0QXR0cmlidXRlKFwic3JjXCIsIGltYWdlc1tuZXdJbWFnZV0uZGVmYXVsdCk7XHJcbiAgfWVsc2V7XHJcbiAgICBuZXdJbWFnZSA9IGltYWdlc05hbWVzW2luZGV4T2ZJbWFnZSAtIDFdXHJcbiAgICBpbWFnZW4uc2V0QXR0cmlidXRlKFwic3JjXCIsIGltYWdlc1tuZXdJbWFnZV0uZGVmYXVsdCk7XHJcbiAgfVxyXG4gIGltYWdlbi5jbGFzc0xpc3QuYWRkKFwiZmFkZVwiKTtcclxuICByZW1vdmVGYWRlKCk7XHJcbiAgZG90UGljdHVyZShuZXdJbWFnZSk7XHJcbiAgc2xpZGViYXJJbWFnZVNob3dpbmcobmV3SW1hZ2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnb1JpZ2h0KCl7XHJcbiAgc3RhcnRDb3VudERvd24oKTtcclxuICByZW1vdmVTZWxlY3RlZERvdCgpO1xyXG4gIHJlbW92ZVNsaWRlYmFySW1hZ2VTaG93aW5nKCk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gY2hlY2tJbWFnZU5hbWUoaW1hZ2VuLnNyYyk7Ly9jaGVja0ltYWdlU2hvd2luZygpO1xyXG4gIGNvbnN0IGluZGV4T2ZJbWFnZSA9IGltYWdlc05hbWVzLmluZGV4T2YoaW1hZ2VOYW1lKTtcclxuICBjb25zdCBsYXN0SW1hZ2UgPSBpbWFnZXNOYW1lcy5sZW5ndGggLSAxO1xyXG4gIGxldCBuZXdJbWFnZSA9IFwiXCI7XHJcbiAgaWYgKGluZGV4T2ZJbWFnZSA9PSBsYXN0SW1hZ2UpIHtcclxuICAgIG5ld0ltYWdlID0gaW1hZ2VzTmFtZXNbMF07XHJcbiAgICBpbWFnZW4uc2V0QXR0cmlidXRlKFwic3JjXCIsIGltYWdlc1tuZXdJbWFnZV0uZGVmYXVsdCk7XHJcbiAgfWVsc2V7XHJcbiAgICBuZXdJbWFnZSA9IGltYWdlc05hbWVzW2luZGV4T2ZJbWFnZSArIDFdXHJcbiAgICBpbWFnZW4uc2V0QXR0cmlidXRlKFwic3JjXCIsIGltYWdlc1tuZXdJbWFnZV0uZGVmYXVsdCk7XHJcbiAgfVxyXG4gIGltYWdlbi5jbGFzc0xpc3QuYWRkKFwiZmFkZVwiKTtcclxuICByZW1vdmVGYWRlKCk7XHJcbiAgZG90UGljdHVyZShuZXdJbWFnZSk7XHJcbiAgc2xpZGViYXJJbWFnZVNob3dpbmcobmV3SW1hZ2UpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0ltYWdlTmFtZShzb3VyY2Upe1xyXG5cclxuICBjb25zdCBzcGxpdHRlZEltYWdlU291cmNlID0gc291cmNlLnNwbGl0KFwiL1wiKTsvL2ltYWdlbi5zcmMuc3BsaXQoXCIvXCIpO1xyXG4gIGNvbnN0IExvbmcgPSBzcGxpdHRlZEltYWdlU291cmNlLmxlbmd0aDtcclxuICBjb25zdCBpbWFnZU5hbWUgPSBzcGxpdHRlZEltYWdlU291cmNlW0xvbmcgLSAxXTtcclxuICByZXR1cm4gaW1hZ2VOYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVGYWRlKCl7XHJcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgIGltYWdlbi5jbGFzc0xpc3QucmVtb3ZlKFwiZmFkZVwiKTtcclxuICB9LCAxMDAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VsZWN0UGljdHVyZShlKXtcclxuICBzdGFydENvdW50RG93bigpO1xyXG4gIHJlbW92ZVNlbGVjdGVkRG90KCk7XHJcbiAgcmVtb3ZlU2xpZGViYXJJbWFnZVNob3dpbmcoKTtcclxuICBsZXQgaW1hZ2VOYW1lO1xyXG4gIGlmKGUudGFyZ2V0LmNoaWxkTm9kZXMubGVuZ3RoKXtcclxuICAgIGltYWdlTmFtZSA9IGNoZWNrSW1hZ2VOYW1lKGUudGFyZ2V0LmNoaWxkTm9kZXNbMF0uc3JjKTtcclxuICB9ZWxzZXtcclxuICAgIGltYWdlTmFtZSA9IGNoZWNrSW1hZ2VOYW1lKGUudGFyZ2V0LnNyYyk7XHJcbiAgfVxyXG4gIGltYWdlbi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgaW1hZ2VzW2ltYWdlTmFtZV0uZGVmYXVsdCk7XHJcbiAgaW1hZ2VuLmNsYXNzTGlzdC5hZGQoXCJmYWRlXCIpOyAgXHJcbiAgZG90UGljdHVyZShpbWFnZU5hbWUpO1xyXG4gIHNsaWRlYmFySW1hZ2VTaG93aW5nKGltYWdlTmFtZSk7XHJcbiAgcmVtb3ZlRmFkZSgpO1xyXG59XHJcblxyXG5sZXQgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChnb1JpZ2h0LCA1MDAwKTtcclxuLy9UaW1lciBjaGFuZ2UgaW1hZ2VcclxuZnVuY3Rpb24gc3RhcnRDb3VudERvd24oKXtcclxuICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICBpbnRlcnZhbCA9IHNldEludGVydmFsKGdvUmlnaHQsIDUwMDApO1xyXG59XHJcblxyXG4vL2NvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZ29SaWdodCwgNTAwMCk7IFxyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoYG1vdXNlbW92ZWAsIHN0YXJ0Q291bnREb3duKTtcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==