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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slider */ \"./src/modules/slider.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/database */ \"./src/modules/database.js\");\n\r\n\r\n\r\n\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_database__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n//# sourceURL=webpack://mygiro/./src/index.js?");

/***/ }),

/***/ "./src/modules/database.js":
/*!*********************************!*\
  !*** ./src/modules/database.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst database = () => {\r\n    const user = fetch('hero.json')\r\n    const render = (data) => {\r\n        const block = document.querySelector('.specialty-block-content')\r\n\r\n        data.forEach(element => {\r\n            let name = element.название;\r\n            let type = element.тип;\r\n            let ah = element.батарея;\r\n            let wt = element.мощность;\r\n            let imgSrc = element.фото;\r\n            let desc = element.описание   \r\n\r\n            const card = block.querySelectorAll('.spec-block-info')[0]\r\n            const newCard = card.cloneNode(true);\r\n\r\n            \r\n            const img = newCard.querySelector('img')\r\n            img.src = `${imgSrc}`\r\n\r\n            const nameCard = newCard.querySelector('.spec-title')\r\n            nameCard.textContent = `${name}`\r\n\r\n            const descCard = newCard.querySelector('.spec-price')\r\n            descCard.textContent = `${desc}`\r\n\r\n            const typesCard = newCard.querySelector('.spec-type')\r\n            typesCard.textContent = `Тип: ${type}`\r\n\r\n            const ahCard = newCard.querySelector('.spec-ah')\r\n            ahCard.textContent = `Батарея: ${ah}`\r\n\r\n            const wtCard = newCard.querySelector('.spec-wt')\r\n            wtCard.textContent = `Мощность: ${wt}`\r\n            \r\n            const typeCard = newCard.querySelector\r\n\r\n            newCard.classList.remove('not-active')\r\n\r\n            block.append(newCard)\r\n        })\r\n    };\r\n    user\r\n        .then(response => response.json())\r\n        .then(data => {\r\n           render(data);\r\n        })\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (database);\n\n//# sourceURL=webpack://mygiro/./src/modules/database.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scroll = () => {\r\n    const scroll = document.querySelector('.smooth-scroll__img')\r\n\r\n    const heightScroll = () => {\r\n        let scrolled = window.pageYOffset;\r\n    \r\n        if (scrolled > 2) {\r\n            scroll.style.display = 'block'\r\n        }\r\n        if (!scrolled) {\r\n            scroll.style.display = 'none'\r\n        }\r\n    }\r\n\r\n    const scrollTo = () => {\r\n        if (window.pageYOffset > 0) {\r\n            window.scrollBy(0, -10);\r\n            setTimeout(scrollTo, 0);\r\n          }\r\n    }\r\n    \r\n    scroll.addEventListener('click', scrollTo);\r\n\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\r\n\n\n//# sourceURL=webpack://mygiro/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/slider.js":
/*!*******************************!*\
  !*** ./src/modules/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//slider_content - блок со слайдером\r\n//services_item - карточки слайдера\r\n//slider_block--active - класс активности\r\n\r\nconst slider = () => {\r\n    const sliderBlock = document.querySelector('#hero')\r\n    const slides = document.querySelectorAll('.services_item')\r\n\r\n    let currentSlide = 0\r\n\r\n    //стрелки\r\n    const prevSlide = (elems, index, strClass) => {\r\n        elems[index].classList.remove(strClass) \r\n    }\r\n    \r\n    const nextSlide = (elems, index, strClass) => {\r\n        elems[index].classList.add(strClass)\r\n    }\r\n    \r\n    //переключение слайдера по кнопкам\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        e.preventDefault()\r\n       \r\n        if (!e.target.closest('.services__arrow')) {\r\n            return\r\n        }\r\n \r\n        prevSlide(slides, currentSlide, 'slider_block--active')\r\n        if (e.target.closest('#arrow-right')) {\r\n             currentSlide++\r\n        } else if (e.target.closest('#arrow-left')) {\r\n             currentSlide--\r\n        } \r\n\r\n        //преодоление предела\r\n        //slides.length - длина псевдомассива\r\n         if (currentSlide >= slides.length) {\r\n             currentSlide = 0\r\n         }\r\n \r\n         if (currentSlide < 0 ) {\r\n             currentSlide = slides.length - 1\r\n         }\r\n \r\n        nextSlide(slides, currentSlide, 'slider_block--active')\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://mygiro/./src/modules/slider.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;