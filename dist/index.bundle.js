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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/images/1.jpg");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/images/2.jpg");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/images/3.jpg");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/images/4.jpg");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/images/5.jpg");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/images/6.jpg");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/images/7.jpg");

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "assets/images/images/9.jpg");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGdGQUFnRixVQUFVLE9BQU8sS0FBSyxvQkFBb0IscUJBQXFCLE9BQU8sS0FBSyxZQUFZLFFBQVEsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxPQUFPLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFh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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltYWdlLXNsaWRlci8uL2ltYWdlcy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q2pwZSIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vaW1hZ2VzLzEuanBnIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL2ltYWdlcy8yLmpwZyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9pbWFnZXMvMy5qcGciLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vaW1hZ2VzLzQuanBnIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL2ltYWdlcy81LmpwZyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9pbWFnZXMvNi5qcGciLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vaW1hZ2VzLzcuanBnIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL2ltYWdlcy85LmpwZyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaW1hZ2Utc2xpZGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2ltYWdlLXNsaWRlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9pbWFnZS1zbGlkZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuLzEuanBnXCI6IFwiLi9pbWFnZXMvMS5qcGdcIixcblx0XCIuLzIuanBnXCI6IFwiLi9pbWFnZXMvMi5qcGdcIixcblx0XCIuLzMuanBnXCI6IFwiLi9pbWFnZXMvMy5qcGdcIixcblx0XCIuLzQuanBnXCI6IFwiLi9pbWFnZXMvNC5qcGdcIixcblx0XCIuLzUuanBnXCI6IFwiLi9pbWFnZXMvNS5qcGdcIixcblx0XCIuLzYuanBnXCI6IFwiLi9pbWFnZXMvNi5qcGdcIixcblx0XCIuLzcuanBnXCI6IFwiLi9pbWFnZXMvNy5qcGdcIixcblx0XCIuLzkuanBnXCI6IFwiLi9pbWFnZXMvOS5qcGdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9pbWFnZXMgc3luYyBcXFxcLihwbmclN0NqcGU/ZyU3Q3N2ZykkXCI7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHl7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gIDAlIHsgb3BhY2l0eTogMDsgfVxyXG4gIDEwMCUgeyBvcGFjaXR5OiAxOyB9XHJcbn1cclxuXHJcbi5mYWRle1xyXG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xyXG59XHJcblxyXG5cclxuLypQQyBhbmQgdGFibGV0cyovXHJcbkBtZWRpYSAoIG1pbi13aWR0aDogNDgxcHggICl7XHJcbiAgYm9keXtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNCwgMjEzLCAyMTMsIDAuNjAzKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTB2aCA3MHZoIDEwdmggLyAxMDB2dztcclxuICAgIGdhcDogMnZoO1xyXG4gIH1cclxuICAjdGl0bGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXJcclxuICB9XHJcblxyXG4gICNmb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XHJcbiAgICBoZWlnaHQ6IDV2aDtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgfSAgXHJcblxyXG4gICNnZW5lcmFsQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGU6ICA2MHZoIDV2aCAvIDEwdncgNzB2dyAxMHZ3O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBnYXA6IDJ2dztcclxuICB9IFxyXG5cclxuICAjaW1hZ2VDb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ3JpZC1yb3c6MS8gMjtcclxuICAgIGdyaWQtY29sdW1uOiAyLzM7XHJcbiAgICB3aWR0aDogNzB2dztcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIH1cclxuXHJcbiAgI2xlZnRCdXR0b257XHJcbiAgICBncmlkLXJvdzogMSAvIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XHJcbiAgfVxyXG5cclxuICAjcmlnaHRCdXR0b257XHJcbiAgICBncmlkLXJvdzogMSAvIDI7XHJcbiAgICBncmlkLWNvbHVtbjogMyAvIDRcclxuICB9XHJcblxyXG4gICNkb3RzQ29udGFpbmVye1xyXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xyXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjV2dztcclxuICAgIC8qZm9udC13ZWlnaHQ6IGJvbGRlcjsqL1xyXG4gIH1cclxuXHJcbiAgLmRvdHsgICAgXHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcblxyXG4gIC5kb3RTZWxlY3RlZHtcclxuICAgIGZvbnQtc2l6ZTogODBweDtcclxuICB9XHJcblxyXG4gICNpbWFnZURpc3BsYXllZCB7XHJcbiAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgIG1heC1oZWlnaHQ6MTAwJTtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgYnV0dG9ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDV2aDtcclxuICAgIGJvcmRlcjogbm9uZTsgICBcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIGZvbnQtc2l6ZTogN3Z3O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfSBcclxuXHJcbiAgYnV0dG9uOmhvdmVye1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsMCwwLDAuNCk7XHJcbiAgICBmb250LXNpemU6IDh2dztcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgfVxyXG5cclxuICAjc2xpZGViYXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjV2dztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuXHJcbiAgLnNsaWRlYmFySW1nQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogN3ZoO1xyXG4gICAgd2lkdGg6IDd2aDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbiAgfVxyXG4gIC5zbGlkZWJhckltZ0NvbnRhaW5lcjpob3ZlcntcclxuICAgIGhlaWdodDogOHZoO1xyXG4gICAgd2lkdGg6IDh2aDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7ICAgIFxyXG4gICAgYm94LXNoYWRvdzogNHB4IDRweCA0cHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gIH1cclxuICAuc2xpZGViYXJJbWFnZVNob3dpbmcuc2xpZGViYXJJbWdDb250YWluZXI6aG92ZXIsIC5zbGlkZWJhckltYWdlU2hvd2luZyB7XHJcbiAgICBoZWlnaHQ6IDl2aDtcclxuICAgIHdpZHRoOiA5dmg7XHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjazsgICAgXHJcbiAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCByZ2JhKDAsMCwwLDAuMyk7XHJcbiAgfVxyXG5cclxuICAuc2xpZGViYXJJbWFnZXtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbi8qTW9iaWxlIGZvcm1hdCovXHJcbkBtZWRpYSAoIG1heC13aWR0aDogNDgwcHggICl7XHJcbiAgYm9keXtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxNCwgMjEzLCAyMTMsIDAuNjAzKTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZTogNXZoIDYwdmggMTB2aC8gMTAwdnc7XHJcbiAgICBnYXA6IDJ2aDtcclxuICB9XHJcbiAgI3RpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyXHJcbiAgfVxyXG5cclxuICAjZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xyXG4gICAgaGVpZ2h0OiA1dmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH0gIFxyXG5cclxuICAjZ2VuZXJhbENvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlOiAgNTB2aCA1dmggNXZoLyAxMHZ3IHJlcGVhdCgyLDM1dncpIDEwdnc7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMnZ3O1xyXG4gIH0gXHJcblxyXG4gICNpbWFnZUNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBncmlkLXJvdzoxLyAyO1xyXG4gICAgZ3JpZC1jb2x1bW46IDEvNTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgfVxyXG5cclxuICAjbGVmdEJ1dHRvbntcclxuICAgIGdyaWQtcm93OiAzIC8gNDtcclxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcclxuICB9XHJcblxyXG4gICNyaWdodEJ1dHRvbntcclxuICAgIGdyaWQtcm93OiAzIC8gNDtcclxuICAgIGdyaWQtY29sdW1uOiAzIC8gNFxyXG4gIH1cclxuXHJcbiAgI2RvdHNDb250YWluZXJ7XHJcbiAgICBncmlkLXJvdzogMiAvIDM7XHJcbiAgICBncmlkLWNvbHVtbjogMiAvIDQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXZ3O1xyXG4gICAgLypmb250LXdlaWdodDogYm9sZGVyOyovXHJcbiAgfVxyXG5cclxuICAuZG90eyAgICBcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuXHJcbiAgLmRvdFNlbGVjdGVke1xyXG4gICAgZm9udC1zaXplOiA4MHB4O1xyXG4gIH1cclxuXHJcbiAgI2ltYWdlRGlzcGxheWVkIHtcclxuICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgbWF4LWhlaWdodDoxMDAlO1xyXG4gICAgXHJcbiAgfVxyXG5cclxuICBidXR0b257XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXZoO1xyXG4gICAgYm9yZGVyOiBub25lOyAgIFxyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgZm9udC1zaXplOiA3dnc7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9IFxyXG5cclxuICBidXR0b246aG92ZXJ7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4yKTtcclxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwwLDAsMC40KTtcclxuICAgIGZvbnQtc2l6ZTogOHZ3O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICB9XHJcblxyXG4gICNzbGlkZWJhcntcclxuICAgIHBhZGRpbmctdG9wOiA0dmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAydnc7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB9XHJcblxyXG4gIC5zbGlkZWJhckltZ0NvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDd2aDtcclxuICAgIHdpZHRoOiA3dmg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIH1cclxuICAuc2xpZGViYXJJbWdDb250YWluZXI6aG92ZXJ7XHJcbiAgICBoZWlnaHQ6IDh2aDtcclxuICAgIHdpZHRoOiA4dmg7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBncmV5OyAgICBcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4IHJnYmEoMCwwLDAsMC4zKTtcclxuICB9XHJcbiAgLnNsaWRlYmFySW1hZ2VTaG93aW5nLnNsaWRlYmFySW1nQ29udGFpbmVyOmhvdmVyLCAuc2xpZGViYXJJbWFnZVNob3dpbmcge1xyXG4gICAgaGVpZ2h0OiA5dmg7XHJcbiAgICB3aWR0aDogOXZoO1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7ICAgIFxyXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLDAsMCwwLjMpO1xyXG4gIH1cclxuXHJcbiAgLnNsaWRlYmFySW1hZ2V7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLFNBQVM7QUFDWDs7O0FBR0E7RUFDRSxLQUFLLFVBQVUsRUFBRTtFQUNqQixPQUFPLFVBQVUsRUFBRTtBQUNyQjs7QUFFQTtFQUNFLG9CQUFvQjtBQUN0Qjs7O0FBR0EsaUJBQWlCO0FBQ2pCO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsNENBQTRDO0lBQzVDLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxRQUFRO0VBQ1Y7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQjtFQUNGOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQ0FBaUM7SUFDakMsV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHlDQUF5QztJQUN6Qyx1QkFBdUI7SUFDdkIsUUFBUTtFQUNWOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixrQkFBa0I7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VztJQUNYLFVBQVU7SUFDVix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsV0FBVztJQUNYLFVBQVU7SUFDVixzQkFBc0I7SUFDdEIsdUNBQXVDO0VBQ3pDO0VBQ0E7SUFDRSxXQUFXO0lBQ1gsVUFBVTtJQUNWLHVCQUF1QjtJQUN2Qix1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsZ0JBQWdCO0VBQ2xCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcclxcbiAgMCUgeyBvcGFjaXR5OiAwOyB9XFxyXFxuICAxMDAlIHsgb3BhY2l0eTogMTsgfVxcclxcbn1cXHJcXG5cXHJcXG4uZmFkZXtcXHJcXG4gIGFuaW1hdGlvbjogZmFkZUluIDFzO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKlBDIGFuZCB0YWJsZXRzKi9cXHJcXG5AbWVkaWEgKCBtaW4td2lkdGg6IDQ4MXB4ICApe1xcclxcbiAgYm9keXtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTQsIDIxMywgMjEzLCAwLjYwMyk7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogMTB2aCA3MHZoIDEwdmggLyAxMDB2dztcXHJcXG4gICAgZ2FwOiAydmg7XFxyXFxuICB9XFxyXFxuICAjdGl0bGV7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyXFxyXFxuICB9XFxyXFxuXFxyXFxuICAjZm9vdGVyIHtcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDk5LCA5OSwgOTkpO1xcclxcbiAgICBoZWlnaHQ6IDV2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgfSAgXFxyXFxuXFxyXFxuICAjZ2VuZXJhbENvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZTogIDYwdmggNXZoIC8gMTB2dyA3MHZ3IDEwdnc7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDJ2dztcXHJcXG4gIH0gXFxyXFxuXFxyXFxuICAjaW1hZ2VDb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdyaWQtcm93OjEvIDI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAyLzM7XFxyXFxuICAgIHdpZHRoOiA3MHZ3O1xcclxcbiAgICBoZWlnaHQ6IDYwdmg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2xlZnRCdXR0b257XFxyXFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3JpZ2h0QnV0dG9ue1xcclxcbiAgICBncmlkLXJvdzogMSAvIDI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNFxcclxcbiAgfVxcclxcblxcclxcbiAgI2RvdHNDb250YWluZXJ7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjV2dztcXHJcXG4gICAgLypmb250LXdlaWdodDogYm9sZGVyOyovXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZG90eyAgICBcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kb3RTZWxlY3RlZHtcXHJcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2ltYWdlRGlzcGxheWVkIHtcXHJcXG4gICAgbWF4LXdpZHRoOjEwMCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6MTAwJTtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICBidXR0b257XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1dmg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTsgICBcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLDAsMCwwLjMpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogN3Z3O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH0gXFxyXFxuXFxyXFxuICBidXR0b246aG92ZXJ7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwwLDAsMC40KTtcXHJcXG4gICAgZm9udC1zaXplOiA4dnc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc2xpZGViYXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDAuNXZ3O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zbGlkZWJhckltZ0NvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogN3ZoO1xcclxcbiAgICB3aWR0aDogN3ZoO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH1cXHJcXG4gIC5zbGlkZWJhckltZ0NvbnRhaW5lcjpob3ZlcntcXHJcXG4gICAgaGVpZ2h0OiA4dmg7XFxyXFxuICAgIHdpZHRoOiA4dmg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7ICAgIFxcclxcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCByZ2JhKDAsMCwwLDAuMyk7XFxyXFxuICB9XFxyXFxuICAuc2xpZGViYXJJbWFnZVNob3dpbmcuc2xpZGViYXJJbWdDb250YWluZXI6aG92ZXIsIC5zbGlkZWJhckltYWdlU2hvd2luZyB7XFxyXFxuICAgIGhlaWdodDogOXZoO1xcclxcbiAgICB3aWR0aDogOXZoO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjazsgICAgXFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwwLDAsMC4zKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zbGlkZWJhckltYWdle1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qTW9iaWxlIGZvcm1hdCovXFxyXFxuQG1lZGlhICggbWF4LXdpZHRoOiA0ODBweCAgKXtcXHJcXG4gIGJvZHl7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE0LCAyMTMsIDIxMywgMC42MDMpO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDV2aCA2MHZoIDEwdmgvIDEwMHZ3O1xcclxcbiAgICBnYXA6IDJ2aDtcXHJcXG4gIH1cXHJcXG4gICN0aXRsZXtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXJcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNmb290ZXIge1xcclxcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgIGJvdHRvbTogMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoOTksIDk5LCA5OSk7XFxyXFxuICAgIGhlaWdodDogNXZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICB9ICBcXHJcXG5cXHJcXG4gICNnZW5lcmFsQ29udGFpbmVye1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAgNTB2aCA1dmggNXZoLyAxMHZ3IHJlcGVhdCgyLDM1dncpIDEwdnc7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBnYXA6IDJ2dztcXHJcXG4gIH0gXFxyXFxuXFxyXFxuICAjaW1hZ2VDb250YWluZXJ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdyaWQtcm93OjEvIDI7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxLzU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2xlZnRCdXR0b257XFxyXFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcclxcbiAgfVxcclxcblxcclxcbiAgI3JpZ2h0QnV0dG9ue1xcclxcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAzIC8gNFxcclxcbiAgfVxcclxcblxcclxcbiAgI2RvdHNDb250YWluZXJ7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjV2dztcXHJcXG4gICAgLypmb250LXdlaWdodDogYm9sZGVyOyovXFxyXFxuICB9XFxyXFxuXFxyXFxuICAuZG90eyAgICBcXHJcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5kb3RTZWxlY3RlZHtcXHJcXG4gICAgZm9udC1zaXplOiA4MHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgI2ltYWdlRGlzcGxheWVkIHtcXHJcXG4gICAgbWF4LXdpZHRoOjEwMCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6MTAwJTtcXHJcXG4gICAgXFxyXFxuICB9XFxyXFxuXFxyXFxuICBidXR0b257XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6MTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1dmg7XFxyXFxuICAgIGJvcmRlcjogbm9uZTsgICBcXHJcXG4gICAgYm94LXNoYWRvdzogNXB4IDVweCA1cHggcmdiYSgwLDAsMCwwLjMpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogN3Z3O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH0gXFxyXFxuXFxyXFxuICBidXR0b246aG92ZXJ7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuMik7XFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwwLDAsMC40KTtcXHJcXG4gICAgZm9udC1zaXplOiA4dnc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAjc2xpZGViYXJ7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA0dmg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMnZ3O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zbGlkZWJhckltZ0NvbnRhaW5lcntcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogN3ZoO1xcclxcbiAgICB3aWR0aDogN3ZoO1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXHJcXG4gIH1cXHJcXG4gIC5zbGlkZWJhckltZ0NvbnRhaW5lcjpob3ZlcntcXHJcXG4gICAgaGVpZ2h0OiA4dmg7XFxyXFxuICAgIHdpZHRoOiA4dmg7XFxyXFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGdyZXk7ICAgIFxcclxcbiAgICBib3gtc2hhZG93OiA0cHggNHB4IDRweCByZ2JhKDAsMCwwLDAuMyk7XFxyXFxuICB9XFxyXFxuICAuc2xpZGViYXJJbWFnZVNob3dpbmcuc2xpZGViYXJJbWdDb250YWluZXI6aG92ZXIsIC5zbGlkZWJhckltYWdlU2hvd2luZyB7XFxyXFxuICAgIGhlaWdodDogOXZoO1xcclxcbiAgICB3aWR0aDogOXZoO1xcclxcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjazsgICAgXFxyXFxuICAgIGJveC1zaGFkb3c6IDVweCA1cHggNXB4IHJnYmEoMCwwLDAsMC4zKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5zbGlkZWJhckltYWdle1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaW1hZ2VzLzEuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaW1hZ2VzLzIuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaW1hZ2VzLzMuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaW1hZ2VzLzQuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaW1hZ2VzLzUuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaW1hZ2VzLzYuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaW1hZ2VzLzcuanBnXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9pbWFnZXMvaW1hZ2VzLzkuanBnXCI7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJyZXF1aXJlKCcuL3N0eWxlLmNzcycpO1xyXG5cclxuZnVuY3Rpb24gaW1wb3J0QWxsKHIpIHtcclxuICBsZXQgaW1hZ2VzID0ge307XHJcbiAgci5rZXlzKCkubWFwKChpdGVtLCBpbmRleCkgPT4geyBpbWFnZXNbaXRlbS5yZXBsYWNlKCcuLycsICcnKV0gPSByKGl0ZW0pOyB9KTtcclxuICByZXR1cm4gaW1hZ2VzO1xyXG59XHJcblxyXG4vLyBJbWFnZW4gbG9hZGVyXHJcbi8vaW1wb3J0IGltYWdlcyBmcm9tIFwiLi4vaW1hZ2VzL3BydWViYWEuanBlZ1wiO1xyXG5jb25zdCBpbWFnZXMgPSBpbXBvcnRBbGwocmVxdWlyZS5jb250ZXh0KCcuLi9pbWFnZXMnLCBmYWxzZSwgL1xcLihwbmd8anBlP2d8c3ZnKSQvKSk7XHJcbmNvbnN0IGltYWdlc05hbWVzID0gT2JqZWN0LmtleXMoaW1hZ2VzKTtcclxuLy9cclxuXHJcbi8vIENyZWF0aW5nIERPTVxyXG4vKlxyXG48ZGl2IGlkPVwidGl0bGVcIj5IT0xBPC9kaXY+XHJcbiAgICA8ZGl2IGlkPVwiZ2VuZXJhbENvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGlkPVwiaW1hZ2VDb250YWluZXJcIj48L2Rpdj5cclxuICAgICAgPGJ1dHRvbiBpZD1cImxlZnRcIj5JWlFVSUVSREE8PC9idXR0b24+XHJcbiAgICAgIDxidXR0b24gaWQ9XCJyaWdodFwiPj5ERVJFQ0hBczwvYnV0dG9uPiAgICAgIFxyXG4gICAgPC9kaXY+XHJcbjxkaXYgaWQ9XCJzbGlkZXJDb250YWluZXJcIj48L2Rpdj5cclxuPGRpdiBpZD1cImZvb3RlclwiPjwvZGl2PlxyXG4qL1xyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIik7XHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxudGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIixcInRpdGxlXCIpO1xyXG50aXRsZS50ZXh0Q29udGVudCA9IFwiREFTSEJPQVJEIFRJVExFXCJcclxuY29uc3QgZ2VuZXJhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmdlbmVyYWxDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJnZW5lcmFsQ29udGFpbmVyXCIpO1xyXG5jb25zdCBpbWFnZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmltYWdlQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsXCJpbWFnZUNvbnRhaW5lclwiKTtcclxuY29uc3QgbGVmdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbmxlZnRCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsZWZ0QnV0dG9uXCIpO1xyXG5sZWZ0QnV0dG9uLnRleHRDb250ZW50ID0gXCLihqRcIjtcclxubGVmdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ29MZWZ0KTtcclxuY29uc3QgcmlnaHRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5yaWdodEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInJpZ2h0QnV0dG9uXCIpO1xyXG5yaWdodEJ1dHRvbi50ZXh0Q29udGVudCA9IFwi4oamXCI7XHJcbnJpZ2h0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBnb1JpZ2h0KTtcclxuY29uc3QgZG90c0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmRvdHNDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkb3RzQ29udGFpbmVyXCIpO1xyXG5cclxuXHJcbmdlbmVyYWxDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VDb250YWluZXIpO1xyXG5nZW5lcmFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGxlZnRCdXR0b24pO1xyXG5nZW5lcmFsQ29udGFpbmVyLmFwcGVuZENoaWxkKHJpZ2h0QnV0dG9uKTtcclxuZ2VuZXJhbENvbnRhaW5lci5hcHBlbmRDaGlsZChkb3RzQ29udGFpbmVyKTtcclxuXHJcbmNvbnN0IHNsaWRlYmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuc2xpZGViYXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzbGlkZWJhclwiKTtcclxuXHJcbmJvZHkuYXBwZW5kQ2hpbGQodGl0bGUpO1xyXG5ib2R5LmFwcGVuZENoaWxkKGdlbmVyYWxDb250YWluZXIpO1xyXG5ib2R5LmFwcGVuZENoaWxkKHNsaWRlYmFyKTtcclxuXHJcblxyXG5jb25zdCBpbWFnZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5pbWFnZW4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJpbWFnZURpc3BsYXllZFwiKTtcclxuXHJcbi8vbG9hZCBpbWFnZVxyXG5cclxuaW1hZ2VuLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWFnZXNbaW1hZ2VzTmFtZXNbMF1dLmRlZmF1bHQpO1xyXG5pbWFnZW4uY2xhc3NMaXN0LmFkZChcImZhZGVcIik7XHJcbmltYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlbik7XHJcblxyXG5cclxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuZm9vdGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9vdGVyXCIpO1xyXG5mb290ZXIudGV4dENvbnRlbnQgPSBcIkNyZWF0ZWQgYnkgSmVubmVyIENhcmFiYWxsb1wiXHJcbmJvZHkuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuLy9jb25zb2xlLmxvZyhpbWFnZXNOYW1lc1swXSk7XHJcbnJlbW92ZUZhZGUoKTtcclxuLyogIENyZWF0aW5nIHNsaWRlYmFyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICovXHJcblxyXG5pbWFnZXNOYW1lcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gIGxvYWRTbGlkZXJJbWFnZXMoZWxlbWVudCk7XHJcbiAgbG9hZERvdHMoKTsgICAgXHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gbG9hZFNsaWRlckltYWdlcyhlbGVtZW50KXtcclxuICBjb25zdCBzbGlkZWJhckltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgc2xpZGViYXJJbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInNsaWRlYmFySW1nQ29udGFpbmVyXCIpO1xyXG4gIHNsaWRlYmFySW1nQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzZWxlY3RQaWN0dXJlKTtcclxuICBjb25zdCBuZXdJbWFnZXRvQWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICBuZXdJbWFnZXRvQWRkLmNsYXNzTGlzdC5hZGQoXCJzbGlkZWJhckltYWdlXCIpO1xyXG4gIG5ld0ltYWdldG9BZGQuc2V0QXR0cmlidXRlKFwic3JjXCIsIGltYWdlc1tlbGVtZW50XS5kZWZhdWx0KTtcclxuICBzbGlkZWJhckltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdJbWFnZXRvQWRkKVxyXG4gIHNsaWRlYmFyLmFwcGVuZENoaWxkKHNsaWRlYmFySW1nQ29udGFpbmVyKTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZERvdHMoKXtcclxuICBjb25zdCBvbmVEb3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIG9uZURvdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZG90XCIpO1xyXG4gIG9uZURvdENvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiwrdcIjtcclxuICBkb3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKG9uZURvdENvbnRhaW5lcik7XHJcbn1cclxuXHJcbi8vUmVmcmVzaCBkb3RzXHJcbmRvdFBpY3R1cmUoaW1hZ2VzTmFtZXNbMF0pO1xyXG5zbGlkZWJhckltYWdlU2hvd2luZyhpbWFnZXNOYW1lc1swXSk7XHJcblxyXG5mdW5jdGlvbiBkb3RQaWN0dXJlKHBpY3R1cmVOYW1lKXtcclxuIGNvbnN0IGluZGV4ID0gaW1hZ2VzTmFtZXMuaW5kZXhPZihwaWN0dXJlTmFtZSk7XHJcbiBjb25zdCBkb3RzID0gZG90c0NvbnRhaW5lci5jaGlsZE5vZGVzO1xyXG4gZG90c1tpbmRleF0uY2xhc3NMaXN0LmFkZChcImRvdFNlbGVjdGVkXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTZWxlY3RlZERvdCgpe1xyXG4gIGNvbnN0IGRvdHMgPSBkb3RzQ29udGFpbmVyLmNoaWxkTm9kZXM7XHJcbiAgZG90cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZG90U2VsZWN0ZWRcIik7XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2xpZGViYXJJbWFnZVNob3dpbmcocGljdHVyZU5hbWUpe1xyXG4gIGNvbnN0IGluZGV4ID0gaW1hZ2VzTmFtZXMuaW5kZXhPZihwaWN0dXJlTmFtZSk7XHJcbiAgY29uc3Qgc2xpZGViYXJJbWdDb250YWluZXJzID0gc2xpZGViYXIuY2hpbGROb2RlcztcclxuICBzbGlkZWJhckltZ0NvbnRhaW5lcnNbaW5kZXhdLmNsYXNzTGlzdC5hZGQoXCJzbGlkZWJhckltYWdlU2hvd2luZ1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlU2xpZGViYXJJbWFnZVNob3dpbmcoKXtcclxuICBjb25zdCBzbGlkZWJhckltZ0NvbnRhaW5lcnMgPSBzbGlkZWJhci5jaGlsZE5vZGVzO1xyXG4gIHNsaWRlYmFySW1nQ29udGFpbmVycy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGViYXJJbWFnZVNob3dpbmdcIik7XHJcbiAgfSlcclxufVxyXG5cclxuLyoqIGV2ZW50IGZ1bmN0aW9ucyAgKi9cclxuZnVuY3Rpb24gZ29MZWZ0KCl7XHJcbiAgc3RhcnRDb3VudERvd24oKTtcclxuICByZW1vdmVTZWxlY3RlZERvdCgpO1xyXG4gIHJlbW92ZVNsaWRlYmFySW1hZ2VTaG93aW5nKCk7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gY2hlY2tJbWFnZU5hbWUoaW1hZ2VuLnNyYyk7Ly9jaGVja0ltYWdlU2hvd2luZygpO1xyXG4gIGNvbnN0IGluZGV4T2ZJbWFnZSA9IGltYWdlc05hbWVzLmluZGV4T2YoaW1hZ2VOYW1lKTtcclxuICBsZXQgbmV3SW1hZ2UgPSBcIlwiO1xyXG4gIGlmIChpbmRleE9mSW1hZ2UgPT0gMCkge1xyXG4gICAgY29uc3QgbGFzdEltYWdlcyA9IGltYWdlc05hbWVzLmxlbmd0aCAtIDE7XHJcbiAgICBuZXdJbWFnZSA9IGltYWdlc05hbWVzW2xhc3RJbWFnZXNdO1xyXG4gICAgaW1hZ2VuLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWFnZXNbbmV3SW1hZ2VdLmRlZmF1bHQpO1xyXG4gIH1lbHNle1xyXG4gICAgbmV3SW1hZ2UgPSBpbWFnZXNOYW1lc1tpbmRleE9mSW1hZ2UgLSAxXVxyXG4gICAgaW1hZ2VuLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWFnZXNbbmV3SW1hZ2VdLmRlZmF1bHQpO1xyXG4gIH1cclxuICBpbWFnZW4uY2xhc3NMaXN0LmFkZChcImZhZGVcIik7XHJcbiAgcmVtb3ZlRmFkZSgpO1xyXG4gIGRvdFBpY3R1cmUobmV3SW1hZ2UpO1xyXG4gIHNsaWRlYmFySW1hZ2VTaG93aW5nKG5ld0ltYWdlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ29SaWdodCgpe1xyXG4gIHN0YXJ0Q291bnREb3duKCk7XHJcbiAgcmVtb3ZlU2VsZWN0ZWREb3QoKTtcclxuICByZW1vdmVTbGlkZWJhckltYWdlU2hvd2luZygpO1xyXG4gIGNvbnN0IGltYWdlTmFtZSA9IGNoZWNrSW1hZ2VOYW1lKGltYWdlbi5zcmMpOy8vY2hlY2tJbWFnZVNob3dpbmcoKTtcclxuICBjb25zdCBpbmRleE9mSW1hZ2UgPSBpbWFnZXNOYW1lcy5pbmRleE9mKGltYWdlTmFtZSk7XHJcbiAgY29uc3QgbGFzdEltYWdlID0gaW1hZ2VzTmFtZXMubGVuZ3RoIC0gMTtcclxuICBsZXQgbmV3SW1hZ2UgPSBcIlwiO1xyXG4gIGlmIChpbmRleE9mSW1hZ2UgPT0gbGFzdEltYWdlKSB7XHJcbiAgICBuZXdJbWFnZSA9IGltYWdlc05hbWVzWzBdO1xyXG4gICAgaW1hZ2VuLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWFnZXNbbmV3SW1hZ2VdLmRlZmF1bHQpO1xyXG4gIH1lbHNle1xyXG4gICAgbmV3SW1hZ2UgPSBpbWFnZXNOYW1lc1tpbmRleE9mSW1hZ2UgKyAxXVxyXG4gICAgaW1hZ2VuLnNldEF0dHJpYnV0ZShcInNyY1wiLCBpbWFnZXNbbmV3SW1hZ2VdLmRlZmF1bHQpO1xyXG4gIH1cclxuICBpbWFnZW4uY2xhc3NMaXN0LmFkZChcImZhZGVcIik7XHJcbiAgcmVtb3ZlRmFkZSgpO1xyXG4gIGRvdFBpY3R1cmUobmV3SW1hZ2UpO1xyXG4gIHNsaWRlYmFySW1hZ2VTaG93aW5nKG5ld0ltYWdlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2hlY2tJbWFnZU5hbWUoc291cmNlKXtcclxuXHJcbiAgY29uc3Qgc3BsaXR0ZWRJbWFnZVNvdXJjZSA9IHNvdXJjZS5zcGxpdChcIi9cIik7Ly9pbWFnZW4uc3JjLnNwbGl0KFwiL1wiKTtcclxuICBjb25zdCBMb25nID0gc3BsaXR0ZWRJbWFnZVNvdXJjZS5sZW5ndGg7XHJcbiAgY29uc3QgaW1hZ2VOYW1lID0gc3BsaXR0ZWRJbWFnZVNvdXJjZVtMb25nIC0gMV07XHJcbiAgcmV0dXJuIGltYWdlTmFtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlRmFkZSgpe1xyXG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICBpbWFnZW4uY2xhc3NMaXN0LnJlbW92ZShcImZhZGVcIik7XHJcbiAgfSwgMTAwMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlbGVjdFBpY3R1cmUoZSl7XHJcbiAgc3RhcnRDb3VudERvd24oKTtcclxuICByZW1vdmVTZWxlY3RlZERvdCgpO1xyXG4gIHJlbW92ZVNsaWRlYmFySW1hZ2VTaG93aW5nKCk7XHJcbiAgbGV0IGltYWdlTmFtZTtcclxuICBpZihlLnRhcmdldC5jaGlsZE5vZGVzLmxlbmd0aCl7XHJcbiAgICBpbWFnZU5hbWUgPSBjaGVja0ltYWdlTmFtZShlLnRhcmdldC5jaGlsZE5vZGVzWzBdLnNyYyk7XHJcbiAgfWVsc2V7XHJcbiAgICBpbWFnZU5hbWUgPSBjaGVja0ltYWdlTmFtZShlLnRhcmdldC5zcmMpO1xyXG4gIH1cclxuICBpbWFnZW4uc2V0QXR0cmlidXRlKFwic3JjXCIsIGltYWdlc1tpbWFnZU5hbWVdLmRlZmF1bHQpO1xyXG4gIGltYWdlbi5jbGFzc0xpc3QuYWRkKFwiZmFkZVwiKTsgIFxyXG4gIGRvdFBpY3R1cmUoaW1hZ2VOYW1lKTtcclxuICBzbGlkZWJhckltYWdlU2hvd2luZyhpbWFnZU5hbWUpO1xyXG4gIHJlbW92ZUZhZGUoKTtcclxufVxyXG5cclxubGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoZ29SaWdodCwgNTAwMCk7XHJcbi8vVGltZXIgY2hhbmdlIGltYWdlXHJcbmZ1bmN0aW9uIHN0YXJ0Q291bnREb3duKCl7XHJcbiAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChnb1JpZ2h0LCA1MDAwKTtcclxufVxyXG5cclxuLy9jb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKGdvUmlnaHQsIDUwMDApOyBcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKGBtb3VzZW1vdmVgLCBzdGFydENvdW50RG93bik7XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=