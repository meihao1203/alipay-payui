!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("PayCoupon",[],t):"object"==typeof exports?exports.PayCoupon=t():e.PayCoupon=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=44)}({0:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,a(o.key),o)}}function a(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:String(t)}var s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];i(this,e),this.events={},this.eventsList=t}var t,n,o;return t=e,(n=[{key:"on",value:function(e,t){this.type(e)&&"function"==typeof t&&(this.events[e]||(this.events[e]=[]),this.events[e].push(t))}},{key:"trigger",value:function(e,t){if(this.events[e]&&this.events[e].length)for(var n=0;n<this.events[e].length;n++)this.events[e][n](t)}},{key:"type",value:function(e){return-1!==this.eventsList.indexOf(e)||(console.error("Unknown event name: ".concat(e)),null)}}])&&r(t.prototype,n),o&&r(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.a=s},1:function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],i=0;i<e.length;i++){var r=e[i],c=t.base?r[0]+t.base:r[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var p=s(u),d={css:r[1],media:r[2],sourceMap:r[3]};-1!==p?(a[p].references++,a[p].updater(d)):a.push({identifier:u,updater:h(d,t),references:1}),o.push(u)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,p=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function d(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=p(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function f(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var y=null,b=0;function h(e,t){var n,o,i;if(t.singleton){var r=b++;n=y||(y=l(t)),o=d.bind(null,n,r,!1),i=d.bind(null,n,r,!0)}else n=l(t),o=f.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=s(n[o]);a[i].references--}for(var r=c(e,t),l=0;l<n.length;l++){var u=s(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=r}}}},2:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([i]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},25:function(e,t,n){n(3);e.exports=function(e){"use strict";e=e||{};return'<div class="payPopup">\n  <div class="payPopup__box">\n    <div class="payPopup__box--header">\n      <span class="header-operator">关闭</span>\n      优惠\n    </div>\n    <div class="payPopup__box--body">\n      <div class="payPopup__popup"></div>\n    </div>\n    <div class="payPopup__box--footer">\n      <div class="footer-paybtn">确认</div>\n    </div>\n    <div class="payPopup__iphonex-bottom"></div>\n  </div>\n</div>','<div class="payPopup">\n  <div class="payPopup__box">\n    <div class="payPopup__box--header">\n      <span class="header-operator">关闭</span>\n      优惠\n    </div>\n    <div class="payPopup__box--body">\n      <div class="payPopup__popup"></div>\n    </div>\n    <div class="payPopup__box--footer">\n      <div class="footer-paybtn">确认</div>\n    </div>\n    <div class="payPopup__iphonex-bottom"></div>\n  </div>\n</div>'}},26:function(e,t){e.exports='<svg viewBox="0 0 31 31" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>形状备份</title><g id="全新设计（以这个为准）" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="浮层" transform="translate(-688.000000, -340.000000)" fill-rule="nonzero" stroke="#CACACA"><path d="M703.586777,341 C695.530127,341 689,347.533519 689,355.586777 C689,363.640035 695.533519,370.173554 703.586777,370.173554 C711.640035,370.173554 718.173554,363.643427 718.173554,355.586777 C718.173554,347.530127 711.643427,341 703.586777,341 Z" id="形状备份"></path></g></g></svg>'},27:function(e,t){e.exports='<svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>right备份 6</title><g id="全新设计（以这个为准）" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="浮层" transform="translate(-687.000000, -396.000000)" fill="#F2F2F2" fill-rule="nonzero" stroke="#CACACA"><g id="right备份-6" transform="translate(688.000000, 397.000000)"><path d="M15.0000202,0.413243368 C6.94337021,0.413243368 0.413243368,6.94676248 0.413243368,15.0000202 C0.413243368,23.0532779 6.94676248,29.5867971 15.0000202,29.5867971 C23.0532779,29.5867971 29.5867971,23.0566702 29.5867971,15.0000202 C29.5867971,6.94337021 23.0566702,0.413243368 15.0000202,0.413243368 Z" id="形状"></path></g></g></g></svg>'},3:function(e,t,n){"use strict";e.exports=n(4)},4:function(e,t,n){"use strict";(function(t){var n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},o=Object.create(n),i=/["&'<>]/;o.$escape=function(e){return function(e){var t=""+e,n=i.exec(t);if(!n)return e;var o="",r=void 0,a=void 0,s=void 0;for(r=n.index,a=0;r<t.length;r++){switch(t.charCodeAt(r)){case 34:s="&#34;";break;case 38:s="&#38;";break;case 39:s="&#39;";break;case 60:s="&#60;";break;case 62:s="&#62;";break;default:continue}a!==r&&(o+=t.substring(a,r)),a=r+1,o+=s}return a!==r?o+t.substring(a,r):o}(function e(t){"string"!=typeof t&&(t=null==t?"":"function"==typeof t?e(t.call(t)):JSON.stringify(t));return t}(e))},o.$each=function(e,t){if(Array.isArray(e))for(var n=0,o=e.length;n<o;n++)t(e[n],n);else for(var i in e)t(e[i],i)},e.exports=o}).call(this,n(5))},44:function(e,t,n){"use strict";n.r(t);n(74);var o="disabled",i=n(0),r=n(25),a=n.n(r),s=n(26),c=n.n(s),l=n(9),u=n.n(l),p=n(27),d=n.n(p),f={check:c.a,checked:u.a,disabled:d.a};function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,h(o.key),o)}}function h(e){var t=function(e,t){if("object"!=y(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=y(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==y(t)?t:String(t)}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t.container,this.options=t.options,this.init()}var t,n,o;return t=e,(n=[{key:"init",value:function(){this.container.innerHTML=a()({options:this.options,icons:f,getObject:function(e){return e}}),this.wrapper=this.container.querySelector(".payPopup"),this.box=this.container.querySelector(".payPopup__box"),this.close=this.wrapper.querySelector(".header-operator"),this.popup=this.container.querySelector(".payPopup__popup"),this.paybtn=this.container.querySelector(".footer-paybtn")}}])&&b(t.prototype,n),o&&b(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e){return function(e){if(Array.isArray(e))return x(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function _(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,w(o.key),o)}}function w(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=m(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==m(t)?t:String(t)}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=function(e){var t={container:e.element||document.getElementsByClassName("payInput")[0]};for(var n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n]);return e}(t),this.container=this.options.container,this.checked=this.options.checked,this.selected=null,this.template=new v({container:this.container,options:this.options}),this.events=new i.a(["show","submit","close"]),this.bindEvents(),this.init()}var t,n,r;return t=e,r=[{key:"version",get:function(){return"1.0.0"}}],(n=[{key:"init",value:function(){this.toggleSubmitDisabled(!0)}},{key:"on",value:function(e,t){this.events.on(e,t)}},{key:"show",value:function(e,t){this.events.trigger("show",{couponOptions:e,defaultSelected:t}),this.template.wrapper.style.bottom="0px",this.template.box.style.bottom="0px"}},{key:"hide",value:function(){var e=this;this.template.box.style.bottom="-100%",setTimeout((function(){e.template.wrapper.style.bottom="-100%"}),300)}},{key:"bindEvents",value:function(){var e=this;this.template.close.addEventListener("click",(function(){e.events.trigger("close",{value:e.selected}),e.hide()})),this.template.paybtn.addEventListener("click",(function(){e._submit()})),this.on("show",(function(t){var n=t.couponOptions,o=t.defaultSelected;if(n&&0!==n.length){for(var i="",r=function(t){var r=n[t],a=r.couponDesc,s=r.couponId,c=r.endTimeDesc,l=r.couponTypeDesc,u=r.disable,p=l&&'<div class="body-item__block">'.concat(l,"</div>"),d=c&&'<div class="body-item__term">'.concat(c,"</div>"),y=a&&'<div class="body-item"><div class="body-item__tag">'.concat(p,'</div><div class="body-item__list"><div class="body-item__main"><div class="body-item__title">').concat(a,"</div>").concat(d,'</div><div class="body-item__radio">').concat(f.check,"</div></div></div>");i+=y;try{u?setTimeout((function(){document.querySelectorAll(".body-item__radio")[t].innerHTML=f.disabled}),0):e.selected&&JSON.stringify(n[t])===JSON.stringify(e.selected)||!e.selected&&o+""==s+""?setTimeout((function(){document.querySelectorAll(".body-item__radio")[t].innerHTML=f.checked,e.selected=n[t],e.toggleSubmitDisabled(!1)}),0):setTimeout((function(){document.querySelectorAll(".body-item__radio")[t].innerHTML=f.check}),0)}catch(e){console.error("传入对象有误: ".concat(n))}},a=0;a<n.length;a++)r(a);e.template.popup.innerHTML=i;for(var s=e.template.popup.getElementsByClassName("body-item__list"),c=function(t){s[t].addEventListener("click",(function(o){if(!n[t].disable){e.toggleSubmitDisabled(!1);var i=o.target;"body-item__list"!==o.target.className&&(i=function(e,t){for(var n=e.matches||e.webkitMatchesSelector||e.mozMatchesSelector||e.msMatchesSelector;e;){if(n.call(e,t))return e;e=e.parentElement}return null}(o.target,".body-item__list")),g(s).forEach((function(e,t){n[t].disable||(e.querySelector(".body-item__radio").innerHTML=f.check)})),i.querySelector(".body-item__radio").innerHTML=f.checked,e.selected=n[t]}}),!1)},l=0;l<s.length;l++)c(l)}}))}},{key:"_submit",value:function(){var e=this;this.template.paybtn.classList.contains(o)||(this.toggleSubmitDisabled(!0),this.events.trigger("submit",{value:this.selected}),setTimeout((function(){e.hide(),e.toggleSubmitDisabled(!1)}),1e3))}},{key:"toggleSubmitDisabled",value:function(e){e?this.template.paybtn.classList.add(o):this.template.paybtn.classList.remove(o)}}])&&_(t.prototype,n),r&&_(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=S},5:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(o=window)}e.exports=o},74:function(e,t,n){var o=n(1),i=n(75);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},75:function(e,t,n){(t=n(2)(!1)).push([e.i,'.payPopup{position:fixed;bottom:-100%;left:0;width:100vw;height:100%;color:#333;background:rgba(0,0,0,.55);transition:bottom 0s linear;z-index:1000}.payPopup__box{position:absolute;bottom:-100%;width:100%;background:#fff;border-radius:8px 8px 0 0;transition:bottom .3s ease-in-out}.payPopup__box--header{position:relative;width:100%;height:49px;font-size:16px;line-height:49px;font-weight:500;text-align:center}.payPopup__box--header:after{content:"";display:block;height:1px;width:100%;transform:scaleY(.5);background:#eee}.payPopup__box--header .header-operator{position:absolute;display:inline-block;top:0;right:16px;height:49px;line-height:49px;font-size:14px;color:#999;font-weight:400}.payPopup__box--body{padding:16px 16px 0;max-height:300px;overflow-y:auto}.payPopup__box--body .body-item{display:flex;align-items:center;flex-wrap:wrap;margin-bottom:18px}.payPopup__box--body .body-item:last-child{margin-bottom:0}.payPopup__box--body .body-item__tag{width:19px;height:19px;margin-right:7px}.payPopup__box--body .body-item__block{width:19px;height:19px;margin-right:5px;align-self:center;border:1px solid #ff6010;border-radius:2px;display:flex;justify-content:center;align-items:center;font-size:12px;color:#ff6010;font-weight:500;box-sizing:border-box}.payPopup__box--body .body-item__list{display:flex;flex:1}.payPopup__box--body .body-item__main{flex:1;font-size:14px;color:#333;width:calc(100% - 15px)}.payPopup__box--body .body-item__title{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical}.payPopup__box--body .body-item__term{font-size:12px;color:#999;align-self:flex-end;margin-top:5px}.payPopup__box--body .body-item__radio{width:15px;height:15px;margin-left:5px;align-self:center}.payPopup__box--body .body-item__radio svg{width:15px;height:15px;vertical-align:top}.payPopup__box--footer .footer-paybtn{margin:12px;height:40px;font-size:18px;line-height:40px;text-align:center;color:#fff;background:#1677ff;border-radius:4px}.payPopup__box--footer .footer-paybtn.disabled{opacity:.5}@media only screen and (device-width:375px) and (device-height:812px) and (-webkit-device-pixel-ratio:3),only screen and (device-width:414px) and (device-height:896px) and (-webkit-device-pixel-ratio:2),only screen and (device-width:414px) and (device-height:896px) and (-webkit-device-pixel-ratio:3){.payPopup .popup__iphonex-bottom{visibility:hidden;min-height:34px;height:env(safe-area-inset-bottom);width:100%}}',""]),e.exports=t},9:function(e,t){e.exports='<svg viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>right备份 12</title><defs><linearGradient x1="0.915857264%" y1="1.09287579e-14%" x2="100%" y2="99.0841427%" id="linearGradient-1"><stop stop-color="#168BFF" offset="0%"></stop><stop stop-color="#1664FF" offset="100%"></stop></linearGradient></defs><g id="全新设计（以这个为准）" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="浮层" transform="translate(-688.000000, -454.000000)" fill="url(#linearGradient-1)"><g id="right备份-12" transform="translate(688.000000, 454.000000)"><path d="M15.0000202,0.413243368 C6.94337021,0.413243368 0.413243368,6.94676248 0.413243368,15.0000202 C0.413243368,23.0532779 6.94676248,29.5867971 15.0000202,29.5867971 C23.0532779,29.5867971 29.5867971,23.0566702 29.5867971,15.0000202 C29.5867971,6.94337021 23.0566702,0.413243368 15.0000202,0.413243368 Z M22.0050654,11.4686633 L14.3894109,19.0843177 L14.1451672,19.3285614 C13.4667125,20.0070162 12.3676158,20.0070162 11.6891611,19.3285614 L8.49703156,16.1364319 C8.08995872,15.7293591 8.08995872,15.071258 8.49703156,14.6641851 C8.9041044,14.2571123 9.56220549,14.2571123 9.96927834,14.6641851 L12.3031626,16.9980694 C12.64239,17.3372968 13.1919383,17.3372968 13.5311657,16.9980694 L20.5294263,9.99641653 C20.9364992,9.58934368 21.5946003,9.58934368 22.0016731,9.99641653 C22.4087459,10.4034894 22.4087459,11.0615905 22.0050654,11.4686633 Z" id="形状"></path></g></g></g></svg>'}}).default}));