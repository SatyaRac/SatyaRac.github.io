/******/ (function(modules) { // webpackBootstrap
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/notif.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/notif.js":
/*!*********************!*\
  !*** ./js/notif.js ***!
  \*********************/
/*! exports provided: registerServiceWorker, requestPermission, pushNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registerServiceWorker\", function() { return registerServiceWorker; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"requestPermission\", function() { return requestPermission; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pushNotification\", function() { return pushNotification; });\nfunction registerServiceWorker() {\n  navigator.serviceWorker.register(\"/service-worker.js\").then(function (registration) {\n    console.log(\"ServiceWorker: Pendaftaran berhasil. Scope:\", registration.scope);\n  })[\"catch\"](function (error) {\n    console.error(\"ServiceWorker: Pendaftaran gagal. Error:\", error);\n  });\n}\n\nfunction requestPermission() {\n  if (\"Notification\" in window) {\n    Notification.requestPermission().then(function (result) {\n      if (result === \"denied\") {\n        console.log(\"Fitur notifikasi tidak diijinkan.\");\n        return;\n      } else if (result === \"default\") {\n        console.error(\"Pengguna menutup kotak dialog permintaan ijin.\");\n        return;\n      }\n\n      if (\"PushManager\" in window) {\n        navigator.serviceWorker.getRegistration().then(function (registration) {\n          registration.pushManager.subscribe({\n            userVisibleOnly: true,\n            applicationServerKey: urlBase64ToUint8Array(\"BDNrUPiES-bGkl39Ew1SpAAoy-GwYj_jRnDruxxojh3WSVLg-Xp39sSRPGSi-v0fExyCp2hQK675enuuxE-tGCU\")\n          }).then(function (subscribe) {\n            console.log(\"Berhasil melakukan subscribe dengan endpoint: \", subscribe.endpoint);\n            console.log(\"Berhasil melakukan subscribe dengan p256dh key: \", btoa(String.fromCharCode.apply(null, new Uint8Array(subscribe.getKey(\"p256dh\")))));\n            console.log(\"Berhasil melakukan subscribe dengan auth key: \", btoa(String.fromCharCode.apply(null, new Uint8Array(subscribe.getKey(\"auth\")))));\n          })[\"catch\"](function (e) {\n            console.error(\"Tidak dapat melakukan subscribe \", e.message);\n          });\n        });\n      }\n    });\n  }\n}\n\nfunction urlBase64ToUint8Array(base64String) {\n  var padding = \"=\".repeat((4 - base64String.length % 4) % 4);\n  var base64 = (base64String + padding).replace(/-/g, \"+\").replace(/_/g, \"/\");\n  var rawData = window.atob(base64);\n  var outputArray = new Uint8Array(rawData.length);\n\n  for (var i = 0; i < rawData.length; ++i) {\n    outputArray[i] = rawData.charCodeAt(i);\n  }\n\n  return outputArray;\n}\n\nvar pushNotification = function pushNotification(msg) {\n  var title = \"La Liga\";\n  var options = {\n    body: msg\n  };\n\n  if (Notification.permission === \"granted\") {\n    navigator.serviceWorker.ready.then(function (regis) {\n      regis.showNotification(title, options);\n    });\n  } else {\n    console.error(\"Fitur notifikasi tidak diijinkan.\");\n  }\n};\n\n\n\n//# sourceURL=webpack:///./js/notif.js?");

/***/ })

/******/ });