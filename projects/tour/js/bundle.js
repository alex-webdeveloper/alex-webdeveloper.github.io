/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js-dev/parts/tabs.js":
/*!******************************!*\
  !*** ./js-dev/parts/tabs.js ***!
  \******************************/
/***/ ((module) => {

// Tabs
// class show = display: flex (in style.css)
// class hide = display: none (in style.css)

function tabs(ClassTabsParent, ClassTabs, ClassTabsContent) {
  var tabsParent = document.querySelector(ClassTabsParent);
  var tabs = document.querySelectorAll(ClassTabs);
  var tabsContent = document.querySelectorAll(ClassTabsContent);
  function hideTabsContent(index) {
    for (var i = index; i < tabsContent.length; i++) {
      tabsContent[i].classList.remove("show");
      tabsContent[i].classList.add("hide");
      // tabsContent[i].style.display = "none";
    }
  }

  ;
  hideTabsContent(1);
  function showTabsContent(index) {
    if (tabsContent[index].classList.contains("hide")) {
      tabsContent[index].classList.remove("hide");
      tabsContent[index].classList.add("show");
    }
    // if (tabsContent[index].style.display == "none") {
    //     tabsContent[index].style.display = disp;
    // }
  }
  ;
  tabsParent.addEventListener("click", function (e) {
    var target = e.target;
    if (target && target.classList.contains("info-header-tab")) {
      for (var i = 0; i < tabs.length; i++) {
        if (target == tabs[i]) {
          hideTabsContent(0);
          showTabsContent(i);
          break;
        }
      }
    }
  });
}
module.exports = tabs;

/***/ }),

/***/ "./node_modules/nodelist-foreach-polyfill/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/nodelist-foreach-polyfill/index.js ***!
  \*********************************************************/
/***/ (() => {

if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


/***/ }),

/***/ "./node_modules/formdata-polyfill/formdata.min.js":
/*!********************************************************!*\
  !*** ./node_modules/formdata-polyfill/formdata.min.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*! formdata-polyfill. MIT License. Jimmy W?rting <https://jimmy.warting.se/opensource> */
;(function(){var h;function l(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var m="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function n(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var q=n(this);function r(a,b){if(b)a:{var c=q;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&m(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}function c(f,g){this.A=f;m(this,"description",{configurable:!0,writable:!0,value:g})}if(a)return a;c.prototype.toString=function(){return this.A};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=q[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&m(d.prototype,a,{configurable:!0,writable:!0,value:function(){return u(l(this))}})}return a});function u(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:l(a)}}var w;if("function"==typeof Object.setPrototypeOf)w=Object.setPrototypeOf;else{var y;a:{var z={a:!0},A={};try{A.__proto__=z;y=A.a;break a}catch(a){}y=!1}w=y?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var B=w;function C(){this.m=!1;this.j=null;this.v=void 0;this.h=1;this.u=this.C=0;this.l=null}
function D(a){if(a.m)throw new TypeError("Generator is already running");a.m=!0}C.prototype.o=function(a){this.v=a};C.prototype.s=function(a){this.l={D:a,F:!0};this.h=this.C||this.u};C.prototype.return=function(a){this.l={return:a};this.h=this.u};function E(a,b){a.h=3;return{value:b}}function F(a){this.g=new C;this.G=a}F.prototype.o=function(a){D(this.g);if(this.g.j)return G(this,this.g.j.next,a,this.g.o);this.g.o(a);return H(this)};
function I(a,b){D(a.g);var c=a.g.j;if(c)return G(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);a.g.return(b);return H(a)}F.prototype.s=function(a){D(this.g);if(this.g.j)return G(this,this.g.j["throw"],a,this.g.o);this.g.s(a);return H(this)};
function G(a,b,c,d){try{var e=b.call(a.g.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.m=!1,e;var f=e.value}catch(g){return a.g.j=null,a.g.s(g),H(a)}a.g.j=null;d.call(a.g,f);return H(a)}function H(a){for(;a.g.h;)try{var b=a.G(a.g);if(b)return a.g.m=!1,{value:b.value,done:!1}}catch(c){a.g.v=void 0,a.g.s(c)}a.g.m=!1;if(a.g.l){b=a.g.l;a.g.l=null;if(b.F)throw b.D;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function J(a){this.next=function(b){return a.o(b)};this.throw=function(b){return a.s(b)};this.return=function(b){return I(a,b)};this[Symbol.iterator]=function(){return this}}function K(a,b){b=new J(new F(b));B&&a.prototype&&B(b,a.prototype);return b}function L(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e}
r("Array.prototype.entries",function(a){return a?a:function(){return L(this,function(b,c){return[b,c]})}});
if("undefined"!==typeof Blob&&("undefined"===typeof FormData||!FormData.prototype.keys)){var M=function(a,b){for(var c=0;c<a.length;c++)b(a[c])},N=function(a){return a.replace(/\r?\n|\r/g,"\r\n")},O=function(a,b,c){if(b instanceof Blob){c=void 0!==c?String(c+""):"string"===typeof b.name?b.name:"blob";if(b.name!==c||"[object Blob]"===Object.prototype.toString.call(b))b=new File([b],c);return[String(a),b]}return[String(a),String(b)]},P=function(a,b){if(a.length<b)throw new TypeError(b+" argument required, but only "+
a.length+" present.");},Q="object"===typeof globalThis?globalThis:"object"===typeof window?window:"object"===typeof self?self:this,R=Q.FormData,S=Q.XMLHttpRequest&&Q.XMLHttpRequest.prototype.send,T=Q.Request&&Q.fetch,U=Q.navigator&&Q.navigator.sendBeacon,V=Q.Element&&Q.Element.prototype,W=Q.Symbol&&Symbol.toStringTag;W&&(Blob.prototype[W]||(Blob.prototype[W]="Blob"),"File"in Q&&!File.prototype[W]&&(File.prototype[W]="File"));try{new File([],"")}catch(a){Q.File=function(b,c,d){b=new Blob(b,d||{});
Object.defineProperties(b,{name:{value:c},lastModified:{value:+(d&&void 0!==d.lastModified?new Date(d.lastModified):new Date)},toString:{value:function(){return"[object File]"}}});W&&Object.defineProperty(b,W,{value:"File"});return b}}var escape=function(a){return a.replace(/\n/g,"%0A").replace(/\r/g,"%0D").replace(/"/g,"%22")},X=function(a){this.i=[];var b=this;a&&M(a.elements,function(c){if(c.name&&!c.disabled&&"submit"!==c.type&&"button"!==c.type&&!c.matches("form fieldset[disabled] *"))if("file"===
c.type){var d=c.files&&c.files.length?c.files:[new File([],"",{type:"application/octet-stream"})];M(d,function(e){b.append(c.name,e)})}else"select-multiple"===c.type||"select-one"===c.type?M(c.options,function(e){!e.disabled&&e.selected&&b.append(c.name,e.value)}):"checkbox"===c.type||"radio"===c.type?c.checked&&b.append(c.name,c.value):(d="textarea"===c.type?N(c.value):c.value,b.append(c.name,d))})};h=X.prototype;h.append=function(a,b,c){P(arguments,2);this.i.push(O(a,b,c))};h.delete=function(a){P(arguments,
1);var b=[];a=String(a);M(this.i,function(c){c[0]!==a&&b.push(c)});this.i=b};h.entries=function b(){var c,d=this;return K(b,function(e){1==e.h&&(c=0);if(3!=e.h)return c<d.i.length?e=E(e,d.i[c]):(e.h=0,e=void 0),e;c++;e.h=2})};h.forEach=function(b,c){P(arguments,1);for(var d=v(this),e=d.next();!e.done;e=d.next()){var f=v(e.value);e=f.next().value;f=f.next().value;b.call(c,f,e,this)}};h.get=function(b){P(arguments,1);var c=this.i;b=String(b);for(var d=0;d<c.length;d++)if(c[d][0]===b)return c[d][1];
return null};h.getAll=function(b){P(arguments,1);var c=[];b=String(b);M(this.i,function(d){d[0]===b&&c.push(d[1])});return c};h.has=function(b){P(arguments,1);b=String(b);for(var c=0;c<this.i.length;c++)if(this.i[c][0]===b)return!0;return!1};h.keys=function c(){var d=this,e,f,g,k,p;return K(c,function(t){1==t.h&&(e=v(d),f=e.next());if(3!=t.h){if(f.done){t.h=0;return}g=f.value;k=v(g);p=k.next().value;return E(t,p)}f=e.next();t.h=2})};h.set=function(c,d,e){P(arguments,2);c=String(c);var f=[],g=O(c,
d,e),k=!0;M(this.i,function(p){p[0]===c?k&&(k=!f.push(g)):f.push(p)});k&&f.push(g);this.i=f};h.values=function d(){var e=this,f,g,k,p,t;return K(d,function(x){1==x.h&&(f=v(e),g=f.next());if(3!=x.h){if(g.done){x.h=0;return}k=g.value;p=v(k);p.next();t=p.next().value;return E(x,t)}g=f.next();x.h=2})};X.prototype._asNative=function(){for(var d=new R,e=v(this),f=e.next();!f.done;f=e.next()){var g=v(f.value);f=g.next().value;g=g.next().value;d.append(f,g)}return d};X.prototype._blob=function(){var d="----formdata-polyfill-"+
Math.random(),e=[],f="--"+d+'\r\nContent-Disposition: form-data; name="';this.forEach(function(g,k){return"string"==typeof g?e.push(f+escape(N(k))+('"\r\n\r\n'+N(g)+"\r\n")):e.push(f+escape(N(k))+('"; filename="'+escape(g.name)+'"\r\nContent-Type: '+(g.type||"application/octet-stream")+"\r\n\r\n"),g,"\r\n")});e.push("--"+d+"--");return new Blob(e,{type:"multipart/form-data; boundary="+d})};X.prototype[Symbol.iterator]=function(){return this.entries()};X.prototype.toString=function(){return"[object FormData]"};
V&&!V.matches&&(V.matches=V.matchesSelector||V.mozMatchesSelector||V.msMatchesSelector||V.oMatchesSelector||V.webkitMatchesSelector||function(d){d=(this.document||this.ownerDocument).querySelectorAll(d);for(var e=d.length;0<=--e&&d.item(e)!==this;);return-1<e});W&&(X.prototype[W]="FormData");if(S){var Y=Q.XMLHttpRequest.prototype.setRequestHeader;Q.XMLHttpRequest.prototype.setRequestHeader=function(d,e){Y.call(this,d,e);"content-type"===d.toLowerCase()&&(this.B=!0)};Q.XMLHttpRequest.prototype.send=
function(d){d instanceof X?(d=d._blob(),this.B||this.setRequestHeader("Content-Type",d.type),S.call(this,d)):S.call(this,d)}}T&&(Q.fetch=function(d,e){e&&e.body&&e.body instanceof X&&(e.body=e.body._blob());return T.call(this,d,e)});U&&(Q.navigator.sendBeacon=function(d,e){e instanceof X&&(e=e._asNative());return U.call(this,d,e)});Q.FormData=X};})();


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
/*!**************************!*\
  !*** ./js-dev/script.js ***!
  \**************************/
// require('es6-promise').polyfill();
__webpack_require__(/*! nodelist-foreach-polyfill */ "./node_modules/nodelist-foreach-polyfill/index.js");
__webpack_require__(/*! formdata-polyfill */ "./node_modules/formdata-polyfill/formdata.min.js");
window.addEventListener("DOMContentLoaded", function () {
  "use ctrict";

  // tabs
  var tabs = __webpack_require__(/*! ./parts/tabs */ "./js-dev/parts/tabs.js");
  tabs(".info-header", ".info-header-tab", ".info-tabcontent");

  // Timer
  var deadLine = "2023-12-09";
  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor(t / 1000 % 60);
    var minutes = Math.floor(t / 1000 / 60 % 60);
    var hours = Math.floor(t / (1000 * 60 * 60));

    // let t = (new Date(endtime) / 1000) - (Date.now() / 1000);
    // let seconds = Math.floor(t % 60);
    // let minutes = Math.floor((t / 60) % 60);
    // let hours = Math.floor((t / (60 * 60)));

    // let hoursExample = Math.floor((t/1000/60/60) % 24);
    // let days = Math.floor((t/(1000*60*60*24)));
    return {
      "total": t,
      "hours": hours,
      "minutes": minutes,
      "seconds": seconds
    };
  }
  ;
  function setClock(id, endtime) {
    var timer = document.getElementById(id);
    var hours = timer.querySelector(".hours");
    var minutes = timer.querySelector(".minutes");
    var seconds = timer.querySelector(".seconds");
    var timeInterval = setInterval(updateClock, 1000);
    function updateClock() {
      var t = getTimeRemaining(endtime);
      if (t.total <= 0) {
        clearInterval(timeInterval);
        hours.textContent = "00";
        minutes.textContent = "00";
        seconds.textContent = "00";
      } else {
        // console.log(t.hours.toString().length);
        if (t.hours < 10) hours.textContent = "0" + t.hours;else hours.textContent = t.hours;
        if (t.minutes < 10) minutes.textContent = "0" + t.minutes;else minutes.textContent = t.minutes;
        if (t.seconds < 10) seconds.textContent = "0" + t.seconds;else seconds.textContent = t.seconds;
      }
    }
  }
  setClock("timer", deadLine);

  // Modal
  var more = document.querySelector(".more");
  var descriptionBtnTabs = document.querySelector(".description-btn");
  modal(more);
  modal(descriptionBtnTabs);
  function modal(btn) {
    var overlay = document.querySelector(".overlay");
    var close = document.querySelector(".popup-close");
    btn.addEventListener("click", function () {
      overlay.style.display = "block";
      this.classList.add("more-splash");
      document.body.style.overflow = "hidden";
    });
    close.addEventListener("click", function () {
      overlay.style.display = "none";
      document.body.style.overflow = "";
    });
  }

  // Form
  var message = {
    loading: "????????????????",
    success: "??????????????! ?????????? ???? ?? ???????? ????????????????!",
    failure: "??????-???? ?????????? ???? ??????..."
  };
  var forms = document.querySelector(".main-form"),
    formContact = document.forms.form,
    input = document.getElementsByTagName("input"),
    divMessage = document.createElement("div");
  divMessage.classList.add("status");
  sendForm(formContact);
  sendForm(forms);
  function sendForm(form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      this.appendChild(divMessage);
      var request = new XMLHttpRequest();
      request.open("POST", "server.php");
      // request.setRequestHeader("Content-type", "application/x-www-form-unlencoded");
      request.setRequestHeader("Content-type", "application/json; charset=utf-8"); // json file
      var formData = new FormData(form);
      var obj = {};
      formData.forEach(function (item, ind) {
        obj[ind] = item;
      });
      var json = JSON.stringify(obj);
      // request.send(formData);
      request.send(json);
      request.addEventListener("readystatechange", function () {
        if (this.readyState < 4) divMessage.textContent = message.loading;else if (this.readyState == 4 && this.status == 200) divMessage.textContent = message.success;else divMessage.textContent = message.failure;
      });
      for (var i = 0; i < input.length; input[i].value = '', i++) {
        ;
      }
    });
  }

  //slider
  var slides = document.querySelectorAll(".slider-item"),
    prev = document.querySelector(".prev"),
    next = document.querySelector(".next"),
    dotsWrap = document.querySelector(".slider-dots"),
    dots = document.querySelectorAll(".dot"),
    count = 0;
  showSlides(0);
  function showSlides(n) {
    if (n >= slides.length) n = 0;
    if (n < 0) n = slides.length - 1;
    count = n;
    slides.forEach(function (item, ind) {
      if (n == ind) item.style.display = "block";else item.style.display = "none";
    });
    dots.forEach(function (item, ind) {
      if (n == ind) item.classList.add("dot-active");else item.classList.remove("dot-active");
    });
  }
  prev.addEventListener("click", function () {
    showSlides(count -= 1);
  });
  next.addEventListener("click", function () {
    showSlides(count += 1);
  });
  dotsWrap.addEventListener("click", function (e) {
    dots.forEach(function (item, ind) {
      if (e.target.classList.contains("dot") && e.target == item) showSlides(ind);else return;
    });
  });

  // Calc
  var persons = document.querySelectorAll(".counter-block-input")[0],
    restDays = document.querySelectorAll(".counter-block-input")[1],
    place = document.getElementById("select"),
    totalValue = document.getElementById("total"),
    personSum = 0,
    daysSum = 0,
    total = 0;
  totalValue.textContent = 0;
  persons.addEventListener("input", function () {
    personSum = +this.value;
    total = personSum * 4000 * daysSum;
    // total = (daysSum + personSum) * 4000;
    // if (restDays.value == "") totalValue.textContent = 0;
    // else totalValue.textContent = total;
    totalValue.textContent = total;
  });
  restDays.addEventListener("input", function () {
    daysSum = +this.value;
    total = personSum * 4000 * daysSum;
    // total = (daysSum + personSum) * 4000;
    // if (persons.value == "") totalValue.textContent = 0;
    // else totalValue.textContent = total;
    totalValue.textContent = total;
  });
  place.addEventListener("change", function () {
    var a = total;
    var option = this.options[this.selectedIndex].value;
    // console.log(option, this.value);
    totalValue.textContent = a * option;
  });
});

// if ("NodeList" in window && !NodeList.prototype.forEach) {
//     console.log("polyfill for IE11");
//     NodeList.prototype.forEach = function (callback, thisArg) {
//         thisArg = thisArg || window;
//         for (var i = 0; i < this.length; i++) {
//             callback.call(thisArg, this[i], i, this);
//         }
//     };
// }
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map