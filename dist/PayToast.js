!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("PayToast",[],e):"object"==typeof exports?exports.PayToast=e():t.PayToast=e()}(window,(function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=52)}({1:function(t,e,n){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function s(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},o=[],r=0;r<t.length;r++){var i=t[r],c=e.base?i[0]+e.base:i[0],u=n[c]||0,f="".concat(c," ").concat(u);n[c]=u+1;var l=s(f),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==l?(a[l].references++,a[l].updater(p)):a.push({identifier:f,updater:h(p,e),references:1}),o.push(f)}return o}function u(t){var e=document.createElement("style"),o=t.attributes||{};if(void 0===o.nonce){var r=n.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(t){e.setAttribute(t,o[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var f,l=(f=[],function(t,e){return f[t]=e,f.filter(Boolean).join("\n")});function p(t,e,n,o){var r=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(t.styleSheet)t.styleSheet.cssText=l(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function d(t,e,n){var o=n.css,r=n.media,i=n.sourceMap;if(r?t.setAttribute("media",r):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var y=null,m=0;function h(t,e){var n,o,r;if(e.singleton){var i=m++;n=y||(y=u(e)),o=p.bind(null,n,i,!1),r=p.bind(null,n,i,!0)}else n=u(e),o=d.bind(null,n,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var o=0;o<n.length;o++){var r=s(n[o]);a[r].references--}for(var i=c(t,e),u=0;u<n.length;u++){var f=s(n[u]);0===a[f].references&&(a[f].updater(),a.splice(f,1))}n=i}}}},19:function(t,e,n){n(3);t.exports=function(t){"use strict";var e="",n=(t=t||{}).options;return e+=' <div class="toast">\n  ',n.tips&&(e+="\n    ",n.offset?e+='\n    <div class="toast__container toast__container--offset">\n    ':e+='\n    <div class="toast__container">\n    ',e+='\n      <div class="toast__content">\n        <div class="toast__tips">\n          ',e+=n.tips,e+=" \n        </div>\n      </div>\n    </div>\n  "),e+="\n</div>\n"}},2:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),i=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([r]).join("\n")}var a,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,o){"string"==typeof t&&(t=[[null,t,""]]);var r={};if(o)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);o&&r[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},3:function(t,e,n){"use strict";t.exports=n(4)},4:function(t,e,n){"use strict";(function(e){var n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:{},o=Object.create(n),r=/["&'<>]/;o.$escape=function(t){return function(t){var e=""+t,n=r.exec(e);if(!n)return t;var o="",i=void 0,a=void 0,s=void 0;for(i=n.index,a=0;i<e.length;i++){switch(e.charCodeAt(i)){case 34:s="&#34;";break;case 38:s="&#38;";break;case 39:s="&#39;";break;case 60:s="&#60;";break;case 62:s="&#62;";break;default:continue}a!==i&&(o+=e.substring(a,i)),a=i+1,o+=s}return a!==i?o+e.substring(a,i):o}(function t(e){"string"!=typeof e&&(e=null==e?"":"function"==typeof e?t(e.call(e)):JSON.stringify(e));return e}(t))},o.$each=function(t,e){if(Array.isArray(t))for(var n=0,o=t.length;n<o;n++)e(t[n],n);else for(var r in t)e(t[r],r)},t.exports=o}).call(this,n(5))},5:function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":n(window))&&(o=window)}t.exports=o},52:function(t,e,n){"use strict";n.r(e);n(64);var o=n(19),r=n.n(o);function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,s(o.key),o)}}function s(t){var e=function(t,e){if("object"!=i(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==i(e)?e:String(e)}var c=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e.container,this.options=e.options,this.init()}var e,n,o;return e=t,(n=[{key:"init",value:function(){this.container.innerHTML=r()({options:this.options,getObject:function(t){return t}}),this.toast=this.container.querySelector(".toast"),this.content=this.container.querySelector(".toast__tips"),this.offset=this.container.querySelector(".toast__content")}}])&&a(e.prototype,n),o&&a(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();function u(t){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,l(o.key),o)}}function l(t){var e=function(t,e){if("object"!=u(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var o=n.call(t,e||"default");if("object"!=u(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==u(e)?e:String(e)}var p=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=function(t){var e={container:t.element||document.getElementsByClassName("toast")[0],tips:t.tips||"",duration:t.duration||3e3,zIndex:t.zIndex||"100",offset:t.offset||null};for(var n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(t[n]=e[n]);return t}(e),this.container=this.options.container,this.template=new c({container:this.container,options:this.options}),this.init()}var e,n,o;return e=t,o=[{key:"version",get:function(){return"1.0.0"}}],(n=[{key:"init",value:function(){this.template.toast.style.setProperty("z-index",this.options.zIndex)}},{key:"show",value:function(t){var e=this;this.timer&&clearTimeout(this.timer),this.hideTimer&&clearTimeout(this.timer),this.template.content.innerHTML=t||this.options.tips,this.options.offset&&(this.template.offset.style.top=this.options.offset),this.template.toast.classList.remove("toast--out"),this.template.toast.style.display="block",this.template.toast.classList.add("toast--in"),this.options.duration>0&&(this.timer=setTimeout((function(){e.hide()}),this.options.duration))}},{key:"hide",value:function(){var t=this;this.template.toast.classList.remove("toast--in"),this.template.toast.classList.add("toast--out"),this.hideTimer=setTimeout((function(){t.template.toast.style.display="none"}),300)}},{key:"setZIndex",value:function(t){this.template.toast.style.setProperty("z-index",t)}}])&&f(e.prototype,n),o&&f(e,o),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.default=p},64:function(t,e,n){var o=n(1),r=n(65);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};o(r,i);t.exports=r.locals||{}},65:function(t,e,n){(e=n(2)(!1)).push([t.i,".toast{position:fixed;display:none;left:0;right:0;top:0;bottom:0;z-index:100;pointer-events:none}.toast--in{animation:toast-in .2s both}.toast--out{animation:toast-out .2s both}.toast__container{position:absolute;width:100%;height:100%;transform:translate(100%,100%)}.toast__container--offset{transform:translate(0)}.toast__container--offset .toast__content{left:50%;transform:translate(-50%)}.toast__container--offset .toast__content,.toast__content{position:absolute;top:-50%;width:auto;max-width:100%;box-sizing:border-box;pointer-events:auto;display:flex;align-items:center;padding:13px 16px;color:#ccc;background-color:rgba(37,38,45,.9);border-radius:2px}.toast__content{left:-50%;transform:translate(-50%,-50%)}.toast__tips{line-height:20px;font-size:14px;max-width:80vw;max-height:40px;overflow:hidden}@keyframes toast-in{0%{opacity:0}to{opacity:1}}@keyframes toast-out{0%{opacity:1}to{opacity:0}}",""]),t.exports=e}}).default}));