(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["PlayingCards"] = factory();
	else
		root["PlayingCards"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Deck = function () {
	function Deck() {
		var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

		_classCallCheck(this, Deck);

		var defaultOptions = { jokers: 0 };

		this.opts = _extends({}, defaultOptions, options);

		this.draw = this.moveTo.bind(this, 'held');
		this.drawToDiscard = this.moveTo.bind(this, 'discard');
		this.reset = this.initPiles;

		this.initPiles();
	}

	_createClass(Deck, [{
		key: 'initPiles',
		value: function initPiles() {
			this.held = [];
			this.discard = [];
			this.cards = this.createDeck();

			return this.cards;
		}
	}, {
		key: 'moveTo',
		value: function moveTo(pile) {
			var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

			if (amount < 1) {
				return [];
			}

			var moved = this.cards.slice(0, amount);

			this.cards.splice(0, amount);
			this[pile] = [].concat(_toConsumableArray(moved), _toConsumableArray(this[pile]));

			return moved;
		}
	}, {
		key: 'createDeck',
		value: function createDeck() {
			var suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];
			var names = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
			var deck = [];

			suits.map(function (suit) {
				return names.map(function (name) {
					return deck.push({ suit: suit, name: name });
				});
			});

			if (this.opts.jokers) {
				for (var i = this.opts.jokers; i; i -= 1) {
					deck.push({ joker: true });
				}
			}

			return deck;
		}
	}, {
		key: 'shuffle',
		value: function shuffle() {
			for (var i = this.cards.length; i; i -= 1) {
				var random = Math.floor(Math.random() * i);

				var _ref = [this.cards[random], this.cards[i - 1]];
				this.cards[i - 1] = _ref[0];
				this.cards[random] = _ref[1];
			}

			return this.cards;
		}
	}]);

	return Deck;
}();

exports.default = Deck;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Player = function () {
	function Player() {
		var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

		_classCallCheck(this, Player);

		this.name = name;

		this.reset = this.init;

		this.init();
	}

	_createClass(Player, [{
		key: 'init',
		value: function init() {
			this.cards = [];

			return this.cards;
		}
	}, {
		key: 'drawFrom',
		value: function drawFrom(deck) {
			var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;

			if (!deck || !deck.draw) {
				throw new Error('A deck must be provided!');
			}

			var drawn = deck.draw(amount);

			this.cards = [].concat(_toConsumableArray(drawn), _toConsumableArray(this.cards));

			return drawn;
		}
	}]);

	return Player;
}();

exports.default = Player;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Player = exports.Deck = undefined;

var _deck = __webpack_require__(0);

var _deck2 = _interopRequireDefault(_deck);

var _player = __webpack_require__(1);

var _player2 = _interopRequireDefault(_player);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Deck = _deck2.default;
exports.Player = _player2.default;

/***/ })
/******/ ]);
});