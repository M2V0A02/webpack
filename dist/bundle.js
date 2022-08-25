/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/analytics.js":
/*!*****************************!*\
  !*** ./src/js/analytics.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createAnalytics": () => (/* binding */ createAnalytics)
/* harmony export */ });
function createAnalytics() {
  var counter = 0;
  var isDestroyed = false;

  var listener = function listener() {
    return counter++;
  };

  document.addEventListener('click', listener);
  return {
    destroyed: function destroyed() {
      document.removeEventListener('click', listener);
      isDestroyed = true;
    },
    getClicks: function getClicks() {
      if (isDestroyed) {
        return 'Analytics is destroyed';
      }

      return counter;
    }
  };
}

/***/ }),

/***/ "./src/js/unit.js":
/*!************************!*\
  !*** ./src/js/unit.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Unit": () => (/* binding */ Unit)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Unit = /*#__PURE__*/function () {
  function Unit(name, size, health, leadership, meleeAttack, meleeDefence, chargeBonus, weaponDamageArmourPiercing, weaponDamage, armor) {
    _classCallCheck(this, Unit);

    this.name = name;
    this.size = size;
    this.health = health;
    this.leadership = leadership;
    this.meleeAttack = meleeAttack;
    this.meleeDefence = meleeDefence;
    this.chargeBonus = chargeBonus;
    this.weaponDamage = weaponDamage;
    this.weaponDamageArmourPiercing = weaponDamageArmourPiercing;
    this.armor = armor;
  }

  _createClass(Unit, [{
    key: "toString",
    value: function toString() {
      return JSON.stringify({
        name: this.title,
        size: this.date,
        health: this.health,
        leadership: this.leadership,
        meleeAttack: this.meleeAttack,
        meleeDefence: this.meleeDefence,
        chargeBonus: this.chargeBonus,
        weaponDamage: this.weaponDamage,
        weaponDamageArmourPiercing: this.weaponDamageArmourPiercing,
        armor: this.armor
      });
    }
  }]);

  return Unit;
}();

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unit */ "./src/js/unit.js");
/* harmony import */ var _analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./analytics */ "./src/js/analytics.js");


window.analytics = (0,_analytics__WEBPACK_IMPORTED_MODULE_1__.createAnalytics)();
var test = new _unit__WEBPACK_IMPORTED_MODULE_0__.Unit("peasant", 120, 80, 60, 20, 20, 10, 5, 20, 20);
content.innerHTML = test.toString();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map