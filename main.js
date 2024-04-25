"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/about/about.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/about/about.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.about-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    height: 90%;
}

.info-panel {
    width: 700px;
    padding: 1rem;
    border: 1px solid var(--body-gray);
    border-radius: 6px;
}

.about-text-ctn {
    text-align: center;

    font-size: 2rem;
    font-weight: 700;
}

.about-text {
    text-align: justify;
    font-size: initial;
    font-weight: initial;
}

.hours-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);

    justify-items: center;
    align-items: center;
}

.hours-head {
    grid-column: 1 / 4;
    text-align: center;
    font-size: 2rem;
}

.tuesday, .wednesday, .thursday {
    grid-row: 2 / 3;
}

.closing-day {
    grid-row: 4 / 5;
    grid-column: 1 / 4;
}

.location-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5rem;

    font-size: 2rem;
    font-weight: 700;
}

#address {
    font-size: initial;
    font-weight: initial;
}

.info-map {
    width: 400px;
    height: 250px;

    border: none;
    border-radius: 1rem;
}

`, "",{"version":3,"sources":["webpack://./src/modules/about/about.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;;IAEX,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kCAAkC;IAClC,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;;IAElB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,aAAa;IACb,qCAAqC;IACrC,kCAAkC;;IAElC,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,sBAAsB;IACtB,WAAW;;IAEX,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;AACxB;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,YAAY;IACZ,mBAAmB;AACvB","sourcesContent":[".about-page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1.5rem;\r\n\r\n    height: 90%;\r\n}\r\n\r\n.info-panel {\r\n    width: 700px;\r\n    padding: 1rem;\r\n    border: 1px solid var(--body-gray);\r\n    border-radius: 6px;\r\n}\r\n\r\n.about-text-ctn {\r\n    text-align: center;\r\n\r\n    font-size: 2rem;\r\n    font-weight: 700;\r\n}\r\n\r\n.about-text {\r\n    text-align: justify;\r\n    font-size: initial;\r\n    font-weight: initial;\r\n}\r\n\r\n.hours-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-template-rows: repeat(4, 1fr);\r\n\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n\r\n.hours-head {\r\n    grid-column: 1 / 4;\r\n    text-align: center;\r\n    font-size: 2rem;\r\n}\r\n\r\n.tuesday, .wednesday, .thursday {\r\n    grid-row: 2 / 3;\r\n}\r\n\r\n.closing-day {\r\n    grid-row: 4 / 5;\r\n    grid-column: 1 / 4;\r\n}\r\n\r\n.location-container {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    gap: 0.5rem;\r\n\r\n    font-size: 2rem;\r\n    font-weight: 700;\r\n}\r\n\r\n#address {\r\n    font-size: initial;\r\n    font-weight: initial;\r\n}\r\n\r\n.info-map {\r\n    width: 400px;\r\n    height: 250px;\r\n\r\n    border: none;\r\n    border-radius: 1rem;\r\n}\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/home/home.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/home/home.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.home-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    height: 90%;
}
  
img.home-img {
    width: 400px;
    height: 600px;
    border-radius: 6px;
    image-rendering: pixelated;
}

.upper-part {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
}

.home-text-panel {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.2rem;
}

.welcome-msg {
    width: 30ch;
    font-size: 2rem;
    text-align: center;
}

.welcome-text {
    width: 60ch;
    text-align: justify;
}

.buttons-container {
    display: flex;
    align-items: center;
    gap: 1rem;
}

button.home-btn {
    padding: 0.5rem;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    color: white;
    font-weight: 700;
}

.home-menu-btn {
    background-color: var(--mint-green);
}

.home-book-btn {
    background-color: var(--outremer-blue);
}

/* ================= CAROUSEL ================= */

.container {
    width: 950px;
    display: flex;
    justify-content: center;
}

.carousel-view {
    display: flex;
    align-items: center;
    gap: 1rem;

    padding: 1rem;
}

.item-list {
    width: 700px;
    height: 200px;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 3.5rem;

    scroll-behavior: smooth;
    overflow: auto;
    scroll-snap-type: x mandatory;

    -ms-overflow-style: none;
    scrollbar-width: none;
}

.item-list::-webkit-scrollbar {
    display: none;
}

.item-card {
    scroll-snap-align: center;

    min-width: 600px;
    height: 150px;

    padding: 1rem;

    display: flex;
    align-items: center;
    text-align: justify;
    font-style: italic;

    border-radius: 6px;
    border: 2px solid var(--body-gray)
    
}

.item-card:first-of-type {
    margin-left: 3rem;
}

.item-card:last-of-type {
    margin-right: 3rem;
}

.carousel-view button {
    width: 3rem;
    height: 3rem;

    border-radius: 50%;
}

.carousel-view button {
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    color: white;

    cursor: pointer;
}

#prev-btn {
    background-color: var(--signal-yellow);
}

#next-btn {
    background-color: var(--traffic-red);
}`, "",{"version":3,"sources":["webpack://./src/modules/home/home.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;;IAET,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,WAAW;IACX,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,mCAAmC;AACvC;;AAEA;IACI,sCAAsC;AAC1C;;AAEA,iDAAiD;;AAEjD;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;;IAET,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,aAAa;;IAEb,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,WAAW;;IAEX,uBAAuB;IACvB,cAAc;IACd,6BAA6B;;IAE7B,wBAAwB;IACxB,qBAAqB;AACzB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,yBAAyB;;IAEzB,gBAAgB;IAChB,aAAa;;IAEb,aAAa;;IAEb,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;;IAElB,kBAAkB;IAClB;;AAEJ;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;;IAEZ,kBAAkB;AACtB;;AAEA;IACI,YAAY;;IAEZ,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,gBAAgB;IAChB,YAAY;;IAEZ,eAAe;AACnB;;AAEA;IACI,sCAAsC;AAC1C;;AAEA;IACI,oCAAoC;AACxC","sourcesContent":[".home-page {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    gap: 1rem;\r\n\r\n    height: 90%;\r\n}\r\n  \r\nimg.home-img {\r\n    width: 400px;\r\n    height: 600px;\r\n    border-radius: 6px;\r\n    image-rendering: pixelated;\r\n}\r\n\r\n.upper-part {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\n.home-text-panel {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1.2rem;\r\n}\r\n\r\n.welcome-msg {\r\n    width: 30ch;\r\n    font-size: 2rem;\r\n    text-align: center;\r\n}\r\n\r\n.welcome-text {\r\n    width: 60ch;\r\n    text-align: justify;\r\n}\r\n\r\n.buttons-container {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n}\r\n\r\nbutton.home-btn {\r\n    padding: 0.5rem;\r\n    border: none;\r\n    border-radius: 6px;\r\n    cursor: pointer;\r\n    color: white;\r\n    font-weight: 700;\r\n}\r\n\r\n.home-menu-btn {\r\n    background-color: var(--mint-green);\r\n}\r\n\r\n.home-book-btn {\r\n    background-color: var(--outremer-blue);\r\n}\r\n\r\n/* ================= CAROUSEL ================= */\r\n\r\n.container {\r\n    width: 950px;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\n.carousel-view {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 1rem;\r\n\r\n    padding: 1rem;\r\n}\r\n\r\n.item-list {\r\n    width: 700px;\r\n    height: 200px;\r\n\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    gap: 3.5rem;\r\n\r\n    scroll-behavior: smooth;\r\n    overflow: auto;\r\n    scroll-snap-type: x mandatory;\r\n\r\n    -ms-overflow-style: none;\r\n    scrollbar-width: none;\r\n}\r\n\r\n.item-list::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\n.item-card {\r\n    scroll-snap-align: center;\r\n\r\n    min-width: 600px;\r\n    height: 150px;\r\n\r\n    padding: 1rem;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    text-align: justify;\r\n    font-style: italic;\r\n\r\n    border-radius: 6px;\r\n    border: 2px solid var(--body-gray)\r\n    \r\n}\r\n\r\n.item-card:first-of-type {\r\n    margin-left: 3rem;\r\n}\r\n\r\n.item-card:last-of-type {\r\n    margin-right: 3rem;\r\n}\r\n\r\n.carousel-view button {\r\n    width: 3rem;\r\n    height: 3rem;\r\n\r\n    border-radius: 50%;\r\n}\r\n\r\n.carousel-view button {\r\n    border: none;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    font-weight: 700;\r\n    color: white;\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n#prev-btn {\r\n    background-color: var(--signal-yellow);\r\n}\r\n\r\n#next-btn {\r\n    background-color: var(--traffic-red);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Pixelify+Sans:wght@400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    font-family: Pixelify Sans, Helvetica, Arial, sans-serif;
    font-size: 16px;
    --mint-green: #007243;
    --outremer-blue: #00387b;
    --signal-yellow: #F7BA0B;
    --traffic-red: #C1121C;
    --body-gray: #B2B4B2;
    --dpag-gray: #54585A;
}

* {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: inherit;
    font-family: inherit;
    box-sizing: border-box;
}

body {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100vh;
}

header {
    padding-top: 1rem;
    width: 100%;
}

nav {
    display: flex;
    justify-content: space-around;
}

.logo {
    font-size: 3rem;
    font-weight: 700;

    background: 
    linear-gradient(90deg, var(--mint-green) 0%, var(--outremer-blue) 50%, var(--traffic-red) 100%);
    
    background-clip: border-box;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent
}

nav button {
    appearance: none;
    border: none;
    background-color: white;
    cursor: pointer;
}

#content {
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 85vh;
}

footer {
    margin-top: auto;
    padding: 1rem;
}




`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,wDAAwD;IACxD,eAAe;IACf,qBAAqB;IACrB,wBAAwB;IACxB,wBAAwB;IACxB,sBAAsB;IACtB,oBAAoB;IACpB,oBAAoB;AACxB;;AAEA;IACI,UAAU;IACV,SAAS;IACT,gBAAgB;IAChB,kBAAkB;IAClB,oBAAoB;IACpB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;;IAEnB,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,WAAW;AACf;;AAEA;IACI,aAAa;IACb,6BAA6B;AACjC;;AAEA;IACI,eAAe;IACf,gBAAgB;;IAEhB;mGAC+F;;IAE/F,2BAA2B;IAC3B,6BAA6B;IAC7B;AACJ;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,aAAa;;IAEb,aAAa;IACb,mBAAmB;IACnB,uBAAuB;;IAEvB,YAAY;AAChB;;AAEA;IACI,gBAAgB;IAChB,aAAa;AACjB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Pixelify+Sans:wght@400..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');\r\n\r\n:root {\r\n    font-family: Pixelify Sans, Helvetica, Arial, sans-serif;\r\n    font-size: 16px;\r\n    --mint-green: #007243;\r\n    --outremer-blue: #00387b;\r\n    --signal-yellow: #F7BA0B;\r\n    --traffic-red: #C1121C;\r\n    --body-gray: #B2B4B2;\r\n    --dpag-gray: #54585A;\r\n}\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    font-size: inherit;\r\n    font-family: inherit;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n    min-height: 100vh;\r\n}\r\n\r\nheader {\r\n    padding-top: 1rem;\r\n    width: 100%;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.logo {\r\n    font-size: 3rem;\r\n    font-weight: 700;\r\n\r\n    background: \r\n    linear-gradient(90deg, var(--mint-green) 0%, var(--outremer-blue) 50%, var(--traffic-red) 100%);\r\n    \r\n    background-clip: border-box;\r\n    -webkit-background-clip: text;\r\n    -webkit-text-fill-color: transparent\r\n}\r\n\r\nnav button {\r\n    appearance: none;\r\n    border: none;\r\n    background-color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n#content {\r\n    padding: 1rem;\r\n\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    height: 85vh;\r\n}\r\n\r\nfooter {\r\n    margin-top: auto;\r\n    padding: 1rem;\r\n}\r\n\r\n\r\n\r\n\r\n"],"sourceRoot":""}]);
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

/***/ "./src/modules/about/about.css":
/*!*************************************!*\
  !*** ./src/modules/about/about.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./about.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/about/about.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_about_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/modules/home/home.css":
/*!***********************************!*\
  !*** ./src/modules/home/home.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/home/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility.js */ "./src/utility.js");
/* harmony import */ var _modules_home_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home/home.js */ "./src/modules/home/home.js");
/* harmony import */ var _modules_about_about_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/about/about.js */ "./src/modules/about/about.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





const PageRouter = function() {
	const content = document.querySelector("#content");
	const body = document.querySelector("body");
	const pages = {
		"Home": () => (0,_modules_home_home_js__WEBPACK_IMPORTED_MODULE_1__.Home)(content),
		"About": () => (0,_modules_about_about_js__WEBPACK_IMPORTED_MODULE_2__.About)(content)
	}


	function loadLanding() {
		document.addEventListener("DOMContentLoaded", () => {
			loadTabSwitching();
			(0,_modules_home_home_js__WEBPACK_IMPORTED_MODULE_1__.Home)(content);
			footer();
		});
	}

	function switchPage(pageName) {
		wipePage();
		pages[pageName]()
	}

	function wipePage() {
		content.removeChild(content.firstChild);
	}

	function loadTabSwitching() {
		const navButtons = document.querySelectorAll("nav > button");
		navButtons.forEach((btn) => {
			btn.addEventListener("mousedown", (clickEvent) =>{
				switchPage(clickEvent.target.textContent)
			})
		})
	}

	const footer = () =>
	(0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)({
		type: "footer",
		text: "Restaurant page project by @tacticalParmesan | Odin Project 2024",
		parent: body,
	});

	return {loadLanding, wipePage}
}();

PageRouter.loadLanding()


/***/ }),

/***/ "./src/modules/about/about.js":
/*!************************************!*\
  !*** ./src/modules/about/about.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   About: () => (/* binding */ About)
/* harmony export */ });
/* harmony import */ var _utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility */ "./src/utility.js");
/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.css */ "./src/modules/about/about.css");



const aboutData = (function () {
	const aboutText = `Our establishment boasts an extensive collection of retro arcade games, from Donkey Kong to Street Fighter, ensuring endless entertainment for gamers of all ages. But the fun doesn't stop there. Our expert mixologists craft an array of themed cocktails inspired by beloved retro games, from the refreshing Sonic Spritz to the electrifying Pikachu Punch.
    Whether you're reliving your childhood memories or discovering the classics for the first time, RetroBar promises an immersive journey through gaming history. So grab a joystick, sip on a themed beverage, and let the good times roll at RetroBar - where every night is a blast from the past.`;

	const hours = {
		Tuesday: "8AM - 9PM",
		Wednesday: "8AM - 9PM",
		Thursday: "8AM - 9PM",
		Friday: "4PM - 12PM",
		Saturday: "4PM - 12PM",
		Sunday: "4PM - 12PM",
	};

	return { aboutText, hours };
})();

function About(content) {
	const aboutPage = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)({ classes: ["about-page"], parent: content });

	const aboutTextCtn = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)({
		classes: ["about-text-ctn", "info-panel"],
        text: "About RetroBar",
		parent: aboutPage,
	});

	(0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)({
		type: "p",
		text: aboutData.aboutText,
		classes: ["about-text"],
		parent: aboutTextCtn,
	});
	// Display Hours
	const hoursCtn = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)({
		classes: ["hours-container", "info-panel"],
        parent: aboutPage
	});

    const hoursHeader = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        type: "h2",
        classes: ["hours-head"],
        text: "Hours",
        parent: hoursCtn
    })

    loadHours(hoursCtn)
	
    const locationCtn = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        classes: ["location-container", "info-panel"],
        text: "Where are we?",
        parent: aboutPage
    })

    const address = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        type: "p",
        id: "address",
        text: "📍 66 Plender St, London, UK @ Camden Town",
        parent: locationCtn
    })

    const map = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        type: "iframe",
        classes: ["info-map"],
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.723870863843!2d-0.13800104966661736!3d51.53662428015537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b1f66064425%3A0x193156734429fe0a!2s66%20Plender%20St%2C%20London%2C%20UK!5e0!3m2!1sen!2sit!4v1714050600416!5m2!1sen!2sit",
        parent: locationCtn
    })
	// Dispaly Staff
}

function loadHours(container) {

    for (const weekday in aboutData.hours) {
        const day = weekday;
        const hours = aboutData.hours[weekday]
        
        const dayCtn = (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)({
            classes: ["day-container", day.toLowerCase()],
            text: day + " : " + hours,
            parent: container
        })
    }

    (0,_utility__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        type: "p",
        classes: ["day-container", "closing-day"],
        text: "Closing day: MONDAY",
        parent: container
    })

}


/***/ }),

/***/ "./src/modules/home/home.js":
/*!**********************************!*\
  !*** ./src/modules/home/home.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Home: () => (/* binding */ Home)
/* harmony export */ });
/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utility.js */ "./src/utility.js");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.css */ "./src/modules/home/home.css");



const homeData = function() {
    const welcomeText =
    "Welcome to RetroBar, where nostalgia meets nightlife in a symphony of pixels and pixels. Nestled in the heart of the city, RetroBar offers a unique experience marrying classic arcade gaming with a vibrant bar atmosphere. Step into a world where Pac-Man chomps alongside your cocktails and Space Invaders provide the backdrop to your night out.";

    const reviews = {
        reviewOne: {
            customer: "Adam",
            reviewText: "Had a blast at RetroBar! The selection of arcade games is amazing, brought back so many memories. Spent hours playing classics like Pac-Man and Mario. Can't wait to come back and beat my high score!" 
        },
        reviewTwo: {
            customer: "Daisuke",
            reviewText: "RetroBar serves up some seriously delicious themed drinks! The Sonic Spritz was a refreshing hit, and the Pikachu Punch packed a real electrifying punch. Perfect way to level up your night out!",
        },
        reviewThree: {
            customer: "Aurora",
            reviewText: "Forget bar snacks, RetroBar's food is next level! The burgers were juicy, the fries crispy, and don't even get me started on the loaded nachos. A tasty fuel for all those intense gaming sessions!" 
        },
        reviewFour: {
            customer: "Liam",
            reviewText: "Located right in the heart of the city, RetroBar is so convenient! Easy to find and perfect for meeting up with friends. Plus, being central means you can explore more of the city after your gaming fix!" 
        },
        reviewFive: {
            customer: "Tyron",
            reviewText: "Stepping into RetroBar feels like a trip back in time! The retro decor and cozy atmosphere create the perfect ambiance for gaming nostalgia. It's like being transported to the '80s, but with better drinks!" 
        },
        reviewSix: {
            customer: "Bethany",
            reviewText: "Huge shoutout to the staff at RetroBar! Their passion and expertise for retro games are unmatched. From recommending the best games to offering tips and tricks, they truly enhance the gaming experience. Top-notch service with a smile!" 
        },
    }

    return {welcomeText, reviews}
}();

function Home(content) {
	const homePage = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)({ classes: ["home-page"], parent: content });
    
    const upperHome = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        classes: ["upper-part"],
        parent: homePage
    })

	const textPanel = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)({
		classes: ["home-text-panel"],
		parent: upperHome,
	});

    (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)({
		type: "h2",
		classes: ["welcome-msg"],
		text: "Welcome to the RetroBar, \n where nostalgia and good drinks meet!",
		parent: textPanel,
	});

	(0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)({
		type: "p",
		classes: ["welcome-text"],
		text: homeData.welcomeText,
		parent: textPanel,
	});

	(0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)({
		type: "img",
		classes: ["home-img"],
		src: "https://images.unsplash.com/photo-1523843268911-45a882919fec?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		parent: upperHome,
	});

    const btnsContainer = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        classes: ["buttons-container"],
        parent: textPanel
    })

    ;(0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        type: "button",
        classes: ["home-menu-btn", "home-btn"],
        text: "Browse menu",
        parent: btnsContainer
    })

    ;(0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        type: "button",
        classes: ["home-book-btn", "home-btn"],
        text: "Make a reservation",
        parent: btnsContainer
    })

    createCarousel(homePage)
}

function createCarousel(page) {
    const carouselCtn = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        classes: ["container"],
        parent: page
    })

    const carouselView = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        classes: ["carousel-view"],
        parent: carouselCtn
    })

    const previousBtn = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        type: "button",
        id: "prev-btn",
        text: "◀",
        parent: carouselView 
    })

    const itemList = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        classes: ["item-list"],
        parent: carouselView
    })

    const nextBtn = (0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)({
        type: "button",
        id: "next-btn",
        text: "▶",
        parent: carouselView 
    });

    ReviewsCarousel();

}

const ReviewsCarousel = function() {

    const prevBtn = document.querySelector("#prev-btn");
    const nextBtn = document.querySelector("#next-btn");
    const itemList = document.querySelector(".item-list");

    const itemWidth = 600;
    const padding = 16;
    const scrollValue = itemWidth + padding;

    prevBtn.addEventListener("mousedown", () => {
        itemList.scrollLeft -= scrollValue;
    });

    nextBtn.addEventListener("mousedown", () => {
        itemList.scrollLeft += scrollValue
    });

    for (let r in homeData.reviews) {
        const review = homeData.reviews[r]
        ;(0,_utility_js__WEBPACK_IMPORTED_MODULE_0__.createElement)({
            classes: ["item-card"],
            text: "✪✪✪✪✪ " + review.reviewText + "     " + "- " + review.customer,
            parent: itemList
        })
    }
};


/***/ }),

/***/ "./src/utility.js":
/*!************************!*\
  !*** ./src/utility.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElement: () => (/* binding */ createElement)
/* harmony export */ });
function createElement({type = "div", id, classes, text, src, parent} = {}) {
    const newElement = document.createElement(type);
    
    if(Array.isArray(classes)) {
        for (const c of classes) newElement.classList.add(c);
    } else {
        newElement.classList.add(classes)
    }

    if(id) newElement.id = id;
    if(type === "img" || type === "iframe" && src) newElement.setAttribute("src", src)
    if(text) newElement.textContent = text;
    if(parent) parent.append(newElement)

    return newElement;
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyw0RkFBNEYsVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxVQUFVLE9BQU8sS0FBSyxVQUFVLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSxZQUFZLFdBQVcsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLGFBQWEsYUFBYSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsV0FBVyxZQUFZLE9BQU8sS0FBSyxXQUFXLFVBQVUsWUFBWSxjQUFjLGFBQWEsWUFB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QUFDTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLDJEQUFhO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6Sk8sd0JBQXdCLDhDQUE4QyxJQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvYWJvdXQvYWJvdXQuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUvaG9tZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2Fib3V0L2Fib3V0LmNzcz9kZDYyIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUvaG9tZS5jc3M/ZjYzZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvYWJvdXQvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy91dGlsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuYWJvdXQtcGFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMS41cmVtO1xyXG5cclxuICAgIGhlaWdodDogOTAlO1xyXG59XHJcblxyXG4uaW5mby1wYW5lbCB7XHJcbiAgICB3aWR0aDogNzAwcHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9keS1ncmF5KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG5cclxuLmFib3V0LXRleHQtY3RuIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uYWJvdXQtdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC1zaXplOiBpbml0aWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGluaXRpYWw7XHJcbn1cclxuXHJcbi5ob3Vycy1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xyXG5cclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ob3Vycy1oZWFkIHtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG5cclxuLnR1ZXNkYXksIC53ZWRuZXNkYXksIC50aHVyc2RheSB7XHJcbiAgICBncmlkLXJvdzogMiAvIDM7XHJcbn1cclxuXHJcbi5jbG9zaW5nLWRheSB7XHJcbiAgICBncmlkLXJvdzogNCAvIDU7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XHJcbn1cclxuXHJcbi5sb2NhdGlvbi1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuXHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4jYWRkcmVzcyB7XHJcbiAgICBmb250LXNpemU6IGluaXRpYWw7XHJcbiAgICBmb250LXdlaWdodDogaW5pdGlhbDtcclxufVxyXG5cclxuLmluZm8tbWFwIHtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcblxyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxufVxyXG5cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvbW9kdWxlcy9hYm91dC9hYm91dC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVzs7SUFFWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7O0lBRWxCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsa0NBQWtDOztJQUVsQyxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsV0FBVzs7SUFFWCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhOztJQUViLFlBQVk7SUFDWixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmFib3V0LXBhZ2Uge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxLjVyZW07XFxyXFxuXFxyXFxuICAgIGhlaWdodDogOTAlO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mby1wYW5lbCB7XFxyXFxuICAgIHdpZHRoOiA3MDBweDtcXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9keS1ncmF5KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdGV4dC1jdG4ge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXRleHQge1xcclxcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgICBmb250LXNpemU6IGluaXRpYWw7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBpbml0aWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cnMtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXHJcXG5cXHJcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uaG91cnMtaGVhZCB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi50dWVzZGF5LCAud2VkbmVzZGF5LCAudGh1cnNkYXkge1xcclxcbiAgICBncmlkLXJvdzogMiAvIDM7XFxyXFxufVxcclxcblxcclxcbi5jbG9zaW5nLWRheSB7XFxyXFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jYXRpb24tY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMC41cmVtO1xcclxcblxcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbiNhZGRyZXNzIHtcXHJcXG4gICAgZm9udC1zaXplOiBpbml0aWFsO1xcclxcbiAgICBmb250LXdlaWdodDogaW5pdGlhbDtcXHJcXG59XFxyXFxuXFxyXFxuLmluZm8tbWFwIHtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcblxcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XFxyXFxufVxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmhvbWUtcGFnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuXHJcbiAgICBoZWlnaHQ6IDkwJTtcclxufVxyXG4gIFxyXG5pbWcuaG9tZS1pbWcge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xyXG59XHJcblxyXG4udXBwZXItcGFydCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4uaG9tZS10ZXh0LXBhbmVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxLjJyZW07XHJcbn1cclxuXHJcbi53ZWxjb21lLW1zZyB7XHJcbiAgICB3aWR0aDogMzBjaDtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLndlbGNvbWUtdGV4dCB7XHJcbiAgICB3aWR0aDogNjBjaDtcclxuICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbn1cclxuXHJcbi5idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxufVxyXG5cclxuYnV0dG9uLmhvbWUtYnRuIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbi5ob21lLW1lbnUtYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pbnQtZ3JlZW4pO1xyXG59XHJcblxyXG4uaG9tZS1ib29rLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vdXRyZW1lci1ibHVlKTtcclxufVxyXG5cclxuLyogPT09PT09PT09PT09PT09PT0gQ0FST1VTRUwgPT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDk1MHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtdmlldyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMXJlbTtcclxuXHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG4uaXRlbS1saXN0IHtcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAzLjVyZW07XHJcblxyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xyXG5cclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcclxuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcclxufVxyXG5cclxuLml0ZW0tbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLml0ZW0tY2FyZCB7XHJcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgIG1pbi13aWR0aDogNjAwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG5cclxuICAgIHBhZGRpbmc6IDFyZW07XHJcblxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJvZHktZ3JheSlcclxuICAgIFxyXG59XHJcblxyXG4uaXRlbS1jYXJkOmZpcnN0LW9mLXR5cGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XHJcbn1cclxuXHJcbi5pdGVtLWNhcmQ6bGFzdC1vZi10eXBlIHtcclxuICAgIG1hcmdpbi1yaWdodDogM3JlbTtcclxufVxyXG5cclxuLmNhcm91c2VsLXZpZXcgYnV0dG9uIHtcclxuICAgIHdpZHRoOiAzcmVtO1xyXG4gICAgaGVpZ2h0OiAzcmVtO1xyXG5cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmNhcm91c2VsLXZpZXcgYnV0dG9uIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4jcHJldi1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lnbmFsLXllbGxvdyk7XHJcbn1cclxuXHJcbiNuZXh0LWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10cmFmZmljLXJlZCk7XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9tb2R1bGVzL2hvbWUvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUzs7SUFFVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQSxpREFBaUQ7O0FBRWpEO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7O0lBRVQsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhOztJQUViLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFdBQVc7O0lBRVgsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCw2QkFBNkI7O0lBRTdCLHdCQUF3QjtJQUN4QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kseUJBQXlCOztJQUV6QixnQkFBZ0I7SUFDaEIsYUFBYTs7SUFFYixhQUFhOztJQUViLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjs7SUFFbEIsa0JBQWtCO0lBQ2xCOztBQUVKOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7O0lBRVosa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTs7SUFFWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7SUFFdkIsZ0JBQWdCO0lBQ2hCLFlBQVk7O0lBRVosZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLG9DQUFvQztBQUN4Q1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaG9tZS1wYWdlIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG5cXHJcXG4gICAgaGVpZ2h0OiA5MCU7XFxyXFxufVxcclxcbiAgXFxyXFxuaW1nLmhvbWUtaW1nIHtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDYwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkO1xcclxcbn1cXHJcXG5cXHJcXG4udXBwZXItcGFydCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5ob21lLXRleHQtcGFuZWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxLjJyZW07XFxyXFxufVxcclxcblxcclxcbi53ZWxjb21lLW1zZyB7XFxyXFxuICAgIHdpZHRoOiAzMGNoO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLndlbGNvbWUtdGV4dCB7XFxyXFxuICAgIHdpZHRoOiA2MGNoO1xcclxcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbn1cXHJcXG5cXHJcXG4uYnV0dG9ucy1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxufVxcclxcblxcclxcbmJ1dHRvbi5ob21lLWJ0biB7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1tZW51LWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1pbnQtZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uaG9tZS1ib29rLWJ0biB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW91dHJlbWVyLWJsdWUpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PSBDQVJPVVNFTCA9PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICB3aWR0aDogOTUwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uY2Fyb3VzZWwtdmlldyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tbGlzdCB7XFxyXFxuICAgIHdpZHRoOiA3MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAzLjVyZW07XFxyXFxuXFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgc2Nyb2xsLXNuYXAtdHlwZTogeCBtYW5kYXRvcnk7XFxyXFxuXFxyXFxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcXHJcXG4gICAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1saXN0Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWNhcmQge1xcclxcbiAgICBzY3JvbGwtc25hcC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICBtaW4td2lkdGg6IDYwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDE1MHB4O1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcclxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxuXFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYm9keS1ncmF5KVxcclxcbiAgICBcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tY2FyZDpmaXJzdC1vZi10eXBlIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWNhcmQ6bGFzdC1vZi10eXBlIHtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2Fyb3VzZWwtdmlldyBidXR0b24ge1xcclxcbiAgICB3aWR0aDogM3JlbTtcXHJcXG4gICAgaGVpZ2h0OiAzcmVtO1xcclxcblxcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbC12aWV3IGJ1dHRvbiB7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jcHJldi1idG4ge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zaWduYWwteWVsbG93KTtcXHJcXG59XFxyXFxuXFxyXFxuI25leHQtYnRuIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhZmZpYy1yZWQpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1PcGVuK1NhbnM6aXRhbCx3Z2h0QDAsMzAwLi44MDA7MSwzMDAuLjgwMCZmYW1pbHk9UGl4ZWxpZnkrU2Fuczp3Z2h0QDQwMC4uNzAwJmZhbWlseT1Qb3BwaW5zOml0YWwsd2dodEAwLDEwMDswLDIwMDswLDMwMDswLDQwMDswLDUwMDswLDYwMDswLDcwMDswLDgwMDswLDkwMDsxLDEwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDYwMDsxLDcwMDsxLDgwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAgIGZvbnQtZmFtaWx5OiBQaXhlbGlmeSBTYW5zLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgLS1taW50LWdyZWVuOiAjMDA3MjQzO1xyXG4gICAgLS1vdXRyZW1lci1ibHVlOiAjMDAzODdiO1xyXG4gICAgLS1zaWduYWwteWVsbG93OiAjRjdCQTBCO1xyXG4gICAgLS10cmFmZmljLXJlZDogI0MxMTIxQztcclxuICAgIC0tYm9keS1ncmF5OiAjQjJCNEIyO1xyXG4gICAgLS1kcGFnLWdyYXk6ICM1NDU4NUE7XHJcbn1cclxuXHJcbioge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxubmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmxvZ28ge1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbiAgICBiYWNrZ3JvdW5kOiBcclxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tbWludC1ncmVlbikgMCUsIHZhcigtLW91dHJlbWVyLWJsdWUpIDUwJSwgdmFyKC0tdHJhZmZpYy1yZWQpIDEwMCUpO1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudFxyXG59XHJcblxyXG5uYXYgYnV0dG9uIHtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuI2NvbnRlbnQge1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgIGhlaWdodDogODV2aDtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSx3REFBd0Q7SUFDeEQsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7SUFFbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCOztJQUVoQjttR0FDK0Y7O0lBRS9GLDJCQUEyQjtJQUMzQiw2QkFBNkI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhOztJQUViLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCOztJQUV2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9T3BlbitTYW5zOml0YWwsd2dodEAwLDMwMC4uODAwOzEsMzAwLi44MDAmZmFtaWx5PVBpeGVsaWZ5K1NhbnM6d2dodEA0MDAuLjcwMCZmYW1pbHk9UG9wcGluczppdGFsLHdnaHRAMCwxMDA7MCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw2MDA7MCw3MDA7MCw4MDA7MCw5MDA7MSwxMDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw2MDA7MSw3MDA7MSw4MDA7MSw5MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICBmb250LWZhbWlseTogUGl4ZWxpZnkgU2FucywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAtLW1pbnQtZ3JlZW46ICMwMDcyNDM7XFxyXFxuICAgIC0tb3V0cmVtZXItYmx1ZTogIzAwMzg3YjtcXHJcXG4gICAgLS1zaWduYWwteWVsbG93OiAjRjdCQTBCO1xcclxcbiAgICAtLXRyYWZmaWMtcmVkOiAjQzExMjFDO1xcclxcbiAgICAtLWJvZHktZ3JheTogI0IyQjRCMjtcXHJcXG4gICAgLS1kcGFnLWdyYXk6ICM1NDU4NUE7XFxyXFxufVxcclxcblxcclxcbioge1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuXFxyXFxuICAgIGJhY2tncm91bmQ6IFxcclxcbiAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLW1pbnQtZ3JlZW4pIDAlLCB2YXIoLS1vdXRyZW1lci1ibHVlKSA1MCUsIHZhcigtLXRyYWZmaWMtcmVkKSAxMDAlKTtcXHJcXG4gICAgXFxyXFxuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcXHJcXG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XFxyXFxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudFxcclxcbn1cXHJcXG5cXHJcXG5uYXYgYnV0dG9uIHtcXHJcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jY29udGVudCB7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICBoZWlnaHQ6IDg1dmg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Fib3V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ob21lLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuL3V0aWxpdHkuanNcIjtcclxuaW1wb3J0IHsgSG9tZSB9IGZyb20gXCIuL21vZHVsZXMvaG9tZS9ob21lLmpzXCI7XHJcbmltcG9ydCB7IEFib3V0IH0gZnJvbSBcIi4vbW9kdWxlcy9hYm91dC9hYm91dC5qc1wiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5cclxuY29uc3QgUGFnZVJvdXRlciA9IGZ1bmN0aW9uKCkge1xyXG5cdGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XHJcblx0Y29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xyXG5cdGNvbnN0IHBhZ2VzID0ge1xyXG5cdFx0XCJIb21lXCI6ICgpID0+IEhvbWUoY29udGVudCksXHJcblx0XHRcIkFib3V0XCI6ICgpID0+IEFib3V0KGNvbnRlbnQpXHJcblx0fVxyXG5cclxuXHJcblx0ZnVuY3Rpb24gbG9hZExhbmRpbmcoKSB7XHJcblx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcblx0XHRcdGxvYWRUYWJTd2l0Y2hpbmcoKTtcclxuXHRcdFx0SG9tZShjb250ZW50KTtcclxuXHRcdFx0Zm9vdGVyKCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHN3aXRjaFBhZ2UocGFnZU5hbWUpIHtcclxuXHRcdHdpcGVQYWdlKCk7XHJcblx0XHRwYWdlc1twYWdlTmFtZV0oKVxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gd2lwZVBhZ2UoKSB7XHJcblx0XHRjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQuZmlyc3RDaGlsZCk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBsb2FkVGFiU3dpdGNoaW5nKCkge1xyXG5cdFx0Y29uc3QgbmF2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJuYXYgPiBidXR0b25cIik7XHJcblx0XHRuYXZCdXR0b25zLmZvckVhY2goKGJ0bikgPT4ge1xyXG5cdFx0XHRidG4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCAoY2xpY2tFdmVudCkgPT57XHJcblx0XHRcdFx0c3dpdGNoUGFnZShjbGlja0V2ZW50LnRhcmdldC50ZXh0Q29udGVudClcclxuXHRcdFx0fSlcclxuXHRcdH0pXHJcblx0fVxyXG5cclxuXHRjb25zdCBmb290ZXIgPSAoKSA9PlxyXG5cdGNyZWF0ZUVsZW1lbnQoe1xyXG5cdFx0dHlwZTogXCJmb290ZXJcIixcclxuXHRcdHRleHQ6IFwiUmVzdGF1cmFudCBwYWdlIHByb2plY3QgYnkgQHRhY3RpY2FsUGFybWVzYW4gfCBPZGluIFByb2plY3QgMjAyNFwiLFxyXG5cdFx0cGFyZW50OiBib2R5LFxyXG5cdH0pO1xyXG5cclxuXHRyZXR1cm4ge2xvYWRMYW5kaW5nLCB3aXBlUGFnZX1cclxufSgpO1xyXG5cclxuUGFnZVJvdXRlci5sb2FkTGFuZGluZygpXHJcbiIsImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQgfSBmcm9tIFwiLi4vLi4vdXRpbGl0eVwiO1xyXG5pbXBvcnQgXCIuL2Fib3V0LmNzc1wiXHJcblxyXG5jb25zdCBhYm91dERhdGEgPSAoZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IGFib3V0VGV4dCA9IGBPdXIgZXN0YWJsaXNobWVudCBib2FzdHMgYW4gZXh0ZW5zaXZlIGNvbGxlY3Rpb24gb2YgcmV0cm8gYXJjYWRlIGdhbWVzLCBmcm9tIERvbmtleSBLb25nIHRvIFN0cmVldCBGaWdodGVyLCBlbnN1cmluZyBlbmRsZXNzIGVudGVydGFpbm1lbnQgZm9yIGdhbWVycyBvZiBhbGwgYWdlcy4gQnV0IHRoZSBmdW4gZG9lc24ndCBzdG9wIHRoZXJlLiBPdXIgZXhwZXJ0IG1peG9sb2dpc3RzIGNyYWZ0IGFuIGFycmF5IG9mIHRoZW1lZCBjb2NrdGFpbHMgaW5zcGlyZWQgYnkgYmVsb3ZlZCByZXRybyBnYW1lcywgZnJvbSB0aGUgcmVmcmVzaGluZyBTb25pYyBTcHJpdHogdG8gdGhlIGVsZWN0cmlmeWluZyBQaWthY2h1IFB1bmNoLlxyXG4gICAgV2hldGhlciB5b3UncmUgcmVsaXZpbmcgeW91ciBjaGlsZGhvb2QgbWVtb3JpZXMgb3IgZGlzY292ZXJpbmcgdGhlIGNsYXNzaWNzIGZvciB0aGUgZmlyc3QgdGltZSwgUmV0cm9CYXIgcHJvbWlzZXMgYW4gaW1tZXJzaXZlIGpvdXJuZXkgdGhyb3VnaCBnYW1pbmcgaGlzdG9yeS4gU28gZ3JhYiBhIGpveXN0aWNrLCBzaXAgb24gYSB0aGVtZWQgYmV2ZXJhZ2UsIGFuZCBsZXQgdGhlIGdvb2QgdGltZXMgcm9sbCBhdCBSZXRyb0JhciAtIHdoZXJlIGV2ZXJ5IG5pZ2h0IGlzIGEgYmxhc3QgZnJvbSB0aGUgcGFzdC5gO1xyXG5cclxuXHRjb25zdCBob3VycyA9IHtcclxuXHRcdFR1ZXNkYXk6IFwiOEFNIC0gOVBNXCIsXHJcblx0XHRXZWRuZXNkYXk6IFwiOEFNIC0gOVBNXCIsXHJcblx0XHRUaHVyc2RheTogXCI4QU0gLSA5UE1cIixcclxuXHRcdEZyaWRheTogXCI0UE0gLSAxMlBNXCIsXHJcblx0XHRTYXR1cmRheTogXCI0UE0gLSAxMlBNXCIsXHJcblx0XHRTdW5kYXk6IFwiNFBNIC0gMTJQTVwiLFxyXG5cdH07XHJcblxyXG5cdHJldHVybiB7IGFib3V0VGV4dCwgaG91cnMgfTtcclxufSkoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBYm91dChjb250ZW50KSB7XHJcblx0Y29uc3QgYWJvdXRQYWdlID0gY3JlYXRlRWxlbWVudCh7IGNsYXNzZXM6IFtcImFib3V0LXBhZ2VcIl0sIHBhcmVudDogY29udGVudCB9KTtcclxuXHJcblx0Y29uc3QgYWJvdXRUZXh0Q3RuID0gY3JlYXRlRWxlbWVudCh7XHJcblx0XHRjbGFzc2VzOiBbXCJhYm91dC10ZXh0LWN0blwiLCBcImluZm8tcGFuZWxcIl0sXHJcbiAgICAgICAgdGV4dDogXCJBYm91dCBSZXRyb0JhclwiLFxyXG5cdFx0cGFyZW50OiBhYm91dFBhZ2UsXHJcblx0fSk7XHJcblxyXG5cdGNyZWF0ZUVsZW1lbnQoe1xyXG5cdFx0dHlwZTogXCJwXCIsXHJcblx0XHR0ZXh0OiBhYm91dERhdGEuYWJvdXRUZXh0LFxyXG5cdFx0Y2xhc3NlczogW1wiYWJvdXQtdGV4dFwiXSxcclxuXHRcdHBhcmVudDogYWJvdXRUZXh0Q3RuLFxyXG5cdH0pO1xyXG5cdC8vIERpc3BsYXkgSG91cnNcclxuXHRjb25zdCBob3Vyc0N0biA9IGNyZWF0ZUVsZW1lbnQoe1xyXG5cdFx0Y2xhc3NlczogW1wiaG91cnMtY29udGFpbmVyXCIsIFwiaW5mby1wYW5lbFwiXSxcclxuICAgICAgICBwYXJlbnQ6IGFib3V0UGFnZVxyXG5cdH0pO1xyXG5cclxuICAgIGNvbnN0IGhvdXJzSGVhZGVyID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgdHlwZTogXCJoMlwiLFxyXG4gICAgICAgIGNsYXNzZXM6IFtcImhvdXJzLWhlYWRcIl0sXHJcbiAgICAgICAgdGV4dDogXCJIb3Vyc1wiLFxyXG4gICAgICAgIHBhcmVudDogaG91cnNDdG5cclxuICAgIH0pXHJcblxyXG4gICAgbG9hZEhvdXJzKGhvdXJzQ3RuKVxyXG5cdFxyXG4gICAgY29uc3QgbG9jYXRpb25DdG4gPSBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgICBjbGFzc2VzOiBbXCJsb2NhdGlvbi1jb250YWluZXJcIiwgXCJpbmZvLXBhbmVsXCJdLFxyXG4gICAgICAgIHRleHQ6IFwiV2hlcmUgYXJlIHdlP1wiLFxyXG4gICAgICAgIHBhcmVudDogYWJvdXRQYWdlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGFkZHJlc3MgPSBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgICB0eXBlOiBcInBcIixcclxuICAgICAgICBpZDogXCJhZGRyZXNzXCIsXHJcbiAgICAgICAgdGV4dDogXCLwn5ONIDY2IFBsZW5kZXIgU3QsIExvbmRvbiwgVUsgQCBDYW1kZW4gVG93blwiLFxyXG4gICAgICAgIHBhcmVudDogbG9jYXRpb25DdG5cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgbWFwID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgdHlwZTogXCJpZnJhbWVcIixcclxuICAgICAgICBjbGFzc2VzOiBbXCJpbmZvLW1hcFwiXSxcclxuICAgICAgICBzcmM6IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMjQ4MS43MjM4NzA4NjM4NDMhMmQtMC4xMzgwMDEwNDk2NjY2MTczNiEzZDUxLjUzNjYyNDI4MDE1NTM3ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg0ODc2MWIxZjY2MDY0NDI1JTNBMHgxOTMxNTY3MzQ0MjlmZTBhITJzNjYlMjBQbGVuZGVyJTIwU3QlMkMlMjBMb25kb24lMkMlMjBVSyE1ZTAhM20yITFzZW4hMnNpdCE0djE3MTQwNTA2MDA0MTYhNW0yITFzZW4hMnNpdFwiLFxyXG4gICAgICAgIHBhcmVudDogbG9jYXRpb25DdG5cclxuICAgIH0pXHJcblx0Ly8gRGlzcGFseSBTdGFmZlxyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkSG91cnMoY29udGFpbmVyKSB7XHJcblxyXG4gICAgZm9yIChjb25zdCB3ZWVrZGF5IGluIGFib3V0RGF0YS5ob3Vycykge1xyXG4gICAgICAgIGNvbnN0IGRheSA9IHdlZWtkYXk7XHJcbiAgICAgICAgY29uc3QgaG91cnMgPSBhYm91dERhdGEuaG91cnNbd2Vla2RheV1cclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBkYXlDdG4gPSBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgICAgICAgY2xhc3NlczogW1wiZGF5LWNvbnRhaW5lclwiLCBkYXkudG9Mb3dlckNhc2UoKV0sXHJcbiAgICAgICAgICAgIHRleHQ6IGRheSArIFwiIDogXCIgKyBob3VycyxcclxuICAgICAgICAgICAgcGFyZW50OiBjb250YWluZXJcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgIHR5cGU6IFwicFwiLFxyXG4gICAgICAgIGNsYXNzZXM6IFtcImRheS1jb250YWluZXJcIiwgXCJjbG9zaW5nLWRheVwiXSxcclxuICAgICAgICB0ZXh0OiBcIkNsb3NpbmcgZGF5OiBNT05EQVlcIixcclxuICAgICAgICBwYXJlbnQ6IGNvbnRhaW5lclxyXG4gICAgfSlcclxuXHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCB9IGZyb20gXCIuLi8uLi91dGlsaXR5LmpzXCI7XHJcbmltcG9ydCBcIi4vaG9tZS5jc3NcIlxyXG5cclxuY29uc3QgaG9tZURhdGEgPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHdlbGNvbWVUZXh0ID1cclxuICAgIFwiV2VsY29tZSB0byBSZXRyb0Jhciwgd2hlcmUgbm9zdGFsZ2lhIG1lZXRzIG5pZ2h0bGlmZSBpbiBhIHN5bXBob255IG9mIHBpeGVscyBhbmQgcGl4ZWxzLiBOZXN0bGVkIGluIHRoZSBoZWFydCBvZiB0aGUgY2l0eSwgUmV0cm9CYXIgb2ZmZXJzIGEgdW5pcXVlIGV4cGVyaWVuY2UgbWFycnlpbmcgY2xhc3NpYyBhcmNhZGUgZ2FtaW5nIHdpdGggYSB2aWJyYW50IGJhciBhdG1vc3BoZXJlLiBTdGVwIGludG8gYSB3b3JsZCB3aGVyZSBQYWMtTWFuIGNob21wcyBhbG9uZ3NpZGUgeW91ciBjb2NrdGFpbHMgYW5kIFNwYWNlIEludmFkZXJzIHByb3ZpZGUgdGhlIGJhY2tkcm9wIHRvIHlvdXIgbmlnaHQgb3V0LlwiO1xyXG5cclxuICAgIGNvbnN0IHJldmlld3MgPSB7XHJcbiAgICAgICAgcmV2aWV3T25lOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbWVyOiBcIkFkYW1cIixcclxuICAgICAgICAgICAgcmV2aWV3VGV4dDogXCJIYWQgYSBibGFzdCBhdCBSZXRyb0JhciEgVGhlIHNlbGVjdGlvbiBvZiBhcmNhZGUgZ2FtZXMgaXMgYW1hemluZywgYnJvdWdodCBiYWNrIHNvIG1hbnkgbWVtb3JpZXMuIFNwZW50IGhvdXJzIHBsYXlpbmcgY2xhc3NpY3MgbGlrZSBQYWMtTWFuIGFuZCBNYXJpby4gQ2FuJ3Qgd2FpdCB0byBjb21lIGJhY2sgYW5kIGJlYXQgbXkgaGlnaCBzY29yZSFcIiBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJldmlld1R3bzoge1xyXG4gICAgICAgICAgICBjdXN0b21lcjogXCJEYWlzdWtlXCIsXHJcbiAgICAgICAgICAgIHJldmlld1RleHQ6IFwiUmV0cm9CYXIgc2VydmVzIHVwIHNvbWUgc2VyaW91c2x5IGRlbGljaW91cyB0aGVtZWQgZHJpbmtzISBUaGUgU29uaWMgU3ByaXR6IHdhcyBhIHJlZnJlc2hpbmcgaGl0LCBhbmQgdGhlIFBpa2FjaHUgUHVuY2ggcGFja2VkIGEgcmVhbCBlbGVjdHJpZnlpbmcgcHVuY2guIFBlcmZlY3Qgd2F5IHRvIGxldmVsIHVwIHlvdXIgbmlnaHQgb3V0IVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV2aWV3VGhyZWU6IHtcclxuICAgICAgICAgICAgY3VzdG9tZXI6IFwiQXVyb3JhXCIsXHJcbiAgICAgICAgICAgIHJldmlld1RleHQ6IFwiRm9yZ2V0IGJhciBzbmFja3MsIFJldHJvQmFyJ3MgZm9vZCBpcyBuZXh0IGxldmVsISBUaGUgYnVyZ2VycyB3ZXJlIGp1aWN5LCB0aGUgZnJpZXMgY3Jpc3B5LCBhbmQgZG9uJ3QgZXZlbiBnZXQgbWUgc3RhcnRlZCBvbiB0aGUgbG9hZGVkIG5hY2hvcy4gQSB0YXN0eSBmdWVsIGZvciBhbGwgdGhvc2UgaW50ZW5zZSBnYW1pbmcgc2Vzc2lvbnMhXCIgXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXZpZXdGb3VyOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbWVyOiBcIkxpYW1cIixcclxuICAgICAgICAgICAgcmV2aWV3VGV4dDogXCJMb2NhdGVkIHJpZ2h0IGluIHRoZSBoZWFydCBvZiB0aGUgY2l0eSwgUmV0cm9CYXIgaXMgc28gY29udmVuaWVudCEgRWFzeSB0byBmaW5kIGFuZCBwZXJmZWN0IGZvciBtZWV0aW5nIHVwIHdpdGggZnJpZW5kcy4gUGx1cywgYmVpbmcgY2VudHJhbCBtZWFucyB5b3UgY2FuIGV4cGxvcmUgbW9yZSBvZiB0aGUgY2l0eSBhZnRlciB5b3VyIGdhbWluZyBmaXghXCIgXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXZpZXdGaXZlOiB7XHJcbiAgICAgICAgICAgIGN1c3RvbWVyOiBcIlR5cm9uXCIsXHJcbiAgICAgICAgICAgIHJldmlld1RleHQ6IFwiU3RlcHBpbmcgaW50byBSZXRyb0JhciBmZWVscyBsaWtlIGEgdHJpcCBiYWNrIGluIHRpbWUhIFRoZSByZXRybyBkZWNvciBhbmQgY296eSBhdG1vc3BoZXJlIGNyZWF0ZSB0aGUgcGVyZmVjdCBhbWJpYW5jZSBmb3IgZ2FtaW5nIG5vc3RhbGdpYS4gSXQncyBsaWtlIGJlaW5nIHRyYW5zcG9ydGVkIHRvIHRoZSAnODBzLCBidXQgd2l0aCBiZXR0ZXIgZHJpbmtzIVwiIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV2aWV3U2l4OiB7XHJcbiAgICAgICAgICAgIGN1c3RvbWVyOiBcIkJldGhhbnlcIixcclxuICAgICAgICAgICAgcmV2aWV3VGV4dDogXCJIdWdlIHNob3V0b3V0IHRvIHRoZSBzdGFmZiBhdCBSZXRyb0JhciEgVGhlaXIgcGFzc2lvbiBhbmQgZXhwZXJ0aXNlIGZvciByZXRybyBnYW1lcyBhcmUgdW5tYXRjaGVkLiBGcm9tIHJlY29tbWVuZGluZyB0aGUgYmVzdCBnYW1lcyB0byBvZmZlcmluZyB0aXBzIGFuZCB0cmlja3MsIHRoZXkgdHJ1bHkgZW5oYW5jZSB0aGUgZ2FtaW5nIGV4cGVyaWVuY2UuIFRvcC1ub3RjaCBzZXJ2aWNlIHdpdGggYSBzbWlsZSFcIiBcclxuICAgICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7d2VsY29tZVRleHQsIHJldmlld3N9XHJcbn0oKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBIb21lKGNvbnRlbnQpIHtcclxuXHRjb25zdCBob21lUGFnZSA9IGNyZWF0ZUVsZW1lbnQoeyBjbGFzc2VzOiBbXCJob21lLXBhZ2VcIl0sIHBhcmVudDogY29udGVudCB9KTtcclxuICAgIFxyXG4gICAgY29uc3QgdXBwZXJIb21lID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgY2xhc3NlczogW1widXBwZXItcGFydFwiXSxcclxuICAgICAgICBwYXJlbnQ6IGhvbWVQYWdlXHJcbiAgICB9KVxyXG5cclxuXHRjb25zdCB0ZXh0UGFuZWwgPSBjcmVhdGVFbGVtZW50KHtcclxuXHRcdGNsYXNzZXM6IFtcImhvbWUtdGV4dC1wYW5lbFwiXSxcclxuXHRcdHBhcmVudDogdXBwZXJIb21lLFxyXG5cdH0pO1xyXG5cclxuICAgIGNyZWF0ZUVsZW1lbnQoe1xyXG5cdFx0dHlwZTogXCJoMlwiLFxyXG5cdFx0Y2xhc3NlczogW1wid2VsY29tZS1tc2dcIl0sXHJcblx0XHR0ZXh0OiBcIldlbGNvbWUgdG8gdGhlIFJldHJvQmFyLCBcXG4gd2hlcmUgbm9zdGFsZ2lhIGFuZCBnb29kIGRyaW5rcyBtZWV0IVwiLFxyXG5cdFx0cGFyZW50OiB0ZXh0UGFuZWwsXHJcblx0fSk7XHJcblxyXG5cdGNyZWF0ZUVsZW1lbnQoe1xyXG5cdFx0dHlwZTogXCJwXCIsXHJcblx0XHRjbGFzc2VzOiBbXCJ3ZWxjb21lLXRleHRcIl0sXHJcblx0XHR0ZXh0OiBob21lRGF0YS53ZWxjb21lVGV4dCxcclxuXHRcdHBhcmVudDogdGV4dFBhbmVsLFxyXG5cdH0pO1xyXG5cclxuXHRjcmVhdGVFbGVtZW50KHtcclxuXHRcdHR5cGU6IFwiaW1nXCIsXHJcblx0XHRjbGFzc2VzOiBbXCJob21lLWltZ1wiXSxcclxuXHRcdHNyYzogXCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUyMzg0MzI2ODkxMS00NWE4ODI5MTlmZWM/cT04MCZ3PTEzNjQmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCIsXHJcblx0XHRwYXJlbnQ6IHVwcGVySG9tZSxcclxuXHR9KTtcclxuXHJcbiAgICBjb25zdCBidG5zQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgY2xhc3NlczogW1wiYnV0dG9ucy1jb250YWluZXJcIl0sXHJcbiAgICAgICAgcGFyZW50OiB0ZXh0UGFuZWxcclxuICAgIH0pXHJcblxyXG4gICAgY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICBjbGFzc2VzOiBbXCJob21lLW1lbnUtYnRuXCIsIFwiaG9tZS1idG5cIl0sXHJcbiAgICAgICAgdGV4dDogXCJCcm93c2UgbWVudVwiLFxyXG4gICAgICAgIHBhcmVudDogYnRuc0NvbnRhaW5lclxyXG4gICAgfSlcclxuXHJcbiAgICBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxyXG4gICAgICAgIGNsYXNzZXM6IFtcImhvbWUtYm9vay1idG5cIiwgXCJob21lLWJ0blwiXSxcclxuICAgICAgICB0ZXh0OiBcIk1ha2UgYSByZXNlcnZhdGlvblwiLFxyXG4gICAgICAgIHBhcmVudDogYnRuc0NvbnRhaW5lclxyXG4gICAgfSlcclxuXHJcbiAgICBjcmVhdGVDYXJvdXNlbChob21lUGFnZSlcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2Fyb3VzZWwocGFnZSkge1xyXG4gICAgY29uc3QgY2Fyb3VzZWxDdG4gPSBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgICBjbGFzc2VzOiBbXCJjb250YWluZXJcIl0sXHJcbiAgICAgICAgcGFyZW50OiBwYWdlXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGNhcm91c2VsVmlldyA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgIGNsYXNzZXM6IFtcImNhcm91c2VsLXZpZXdcIl0sXHJcbiAgICAgICAgcGFyZW50OiBjYXJvdXNlbEN0blxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBwcmV2aW91c0J0biA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgaWQ6IFwicHJldi1idG5cIixcclxuICAgICAgICB0ZXh0OiBcIuKXgFwiLFxyXG4gICAgICAgIHBhcmVudDogY2Fyb3VzZWxWaWV3IFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBpdGVtTGlzdCA9IGNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgIGNsYXNzZXM6IFtcIml0ZW0tbGlzdFwiXSxcclxuICAgICAgICBwYXJlbnQ6IGNhcm91c2VsVmlld1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBuZXh0QnRuID0gY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgdHlwZTogXCJidXR0b25cIixcclxuICAgICAgICBpZDogXCJuZXh0LWJ0blwiLFxyXG4gICAgICAgIHRleHQ6IFwi4pa2XCIsXHJcbiAgICAgICAgcGFyZW50OiBjYXJvdXNlbFZpZXcgXHJcbiAgICB9KTtcclxuXHJcbiAgICBSZXZpZXdzQ2Fyb3VzZWwoKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IFJldmlld3NDYXJvdXNlbCA9IGZ1bmN0aW9uKCkge1xyXG5cclxuICAgIGNvbnN0IHByZXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXYtYnRuXCIpO1xyXG4gICAgY29uc3QgbmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjbmV4dC1idG5cIik7XHJcbiAgICBjb25zdCBpdGVtTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbS1saXN0XCIpO1xyXG5cclxuICAgIGNvbnN0IGl0ZW1XaWR0aCA9IDYwMDtcclxuICAgIGNvbnN0IHBhZGRpbmcgPSAxNjtcclxuICAgIGNvbnN0IHNjcm9sbFZhbHVlID0gaXRlbVdpZHRoICsgcGFkZGluZztcclxuXHJcbiAgICBwcmV2QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xyXG4gICAgICAgIGl0ZW1MaXN0LnNjcm9sbExlZnQgLT0gc2Nyb2xsVmFsdWU7XHJcbiAgICB9KTtcclxuXHJcbiAgICBuZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgKCkgPT4ge1xyXG4gICAgICAgIGl0ZW1MaXN0LnNjcm9sbExlZnQgKz0gc2Nyb2xsVmFsdWVcclxuICAgIH0pO1xyXG5cclxuICAgIGZvciAobGV0IHIgaW4gaG9tZURhdGEucmV2aWV3cykge1xyXG4gICAgICAgIGNvbnN0IHJldmlldyA9IGhvbWVEYXRhLnJldmlld3Nbcl1cclxuICAgICAgICBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgICAgICAgY2xhc3NlczogW1wiaXRlbS1jYXJkXCJdLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIuKcquKcquKcquKcquKcqiBcIiArIHJldmlldy5yZXZpZXdUZXh0ICsgXCIgICAgIFwiICsgXCItIFwiICsgcmV2aWV3LmN1c3RvbWVyLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IGl0ZW1MaXN0XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoe3R5cGUgPSBcImRpdlwiLCBpZCwgY2xhc3NlcywgdGV4dCwgc3JjLCBwYXJlbnR9ID0ge30pIHtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xyXG4gICAgXHJcbiAgICBpZihBcnJheS5pc0FycmF5KGNsYXNzZXMpKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBjIG9mIGNsYXNzZXMpIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZChjKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzZXMpXHJcbiAgICB9XHJcblxyXG4gICAgaWYoaWQpIG5ld0VsZW1lbnQuaWQgPSBpZDtcclxuICAgIGlmKHR5cGUgPT09IFwiaW1nXCIgfHwgdHlwZSA9PT0gXCJpZnJhbWVcIiAmJiBzcmMpIG5ld0VsZW1lbnQuc2V0QXR0cmlidXRlKFwic3JjXCIsIHNyYylcclxuICAgIGlmKHRleHQpIG5ld0VsZW1lbnQudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgaWYocGFyZW50KSBwYXJlbnQuYXBwZW5kKG5ld0VsZW1lbnQpXHJcblxyXG4gICAgcmV0dXJuIG5ld0VsZW1lbnQ7XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=