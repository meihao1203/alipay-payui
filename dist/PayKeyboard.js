!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("PayKeyboard",[],t):"object"==typeof exports?exports.PayKeyboard=t():e.PayKeyboard=t()}(window,(function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=42)}({0:function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,a(o.key),o)}}function a(e){var t=function(e,t){if("object"!=o(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=o(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==o(t)?t:String(t)}var s=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];i(this,e),this.events={},this.eventsList=t}var t,n,o;return t=e,(n=[{key:"on",value:function(e,t){this.type(e)&&"function"==typeof t&&(this.events[e]||(this.events[e]=[]),this.events[e].push(t))}},{key:"trigger",value:function(e,t){if(this.events[e]&&this.events[e].length)for(var n=0;n<this.events[e].length;n++)this.events[e][n](t)}},{key:"type",value:function(e){return-1!==this.eventsList.indexOf(e)||(console.error("Unknown event name: ".concat(e)),null)}}])&&r(t.prototype,n),o&&r(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.a=s},1:function(e,t,n){"use strict";var o,i=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},r=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},o=[],i=0;i<e.length;i++){var r=e[i],c=t.base?r[0]+t.base:r[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var d=s(u),y={css:r[1],media:r[2],sourceMap:r[3]};-1!==d?(a[d].references++,a[d].updater(y)):a.push({identifier:u,updater:v(y,t),references:1}),o.push(u)}return o}function l(e){var t=document.createElement("style"),o=e.attributes||{};if(void 0===o.nonce){var i=n.nc;i&&(o.nonce=i)}if(Object.keys(o).forEach((function(e){t.setAttribute(e,o[e])})),"function"==typeof e.insert)e.insert(t);else{var a=r(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var u,d=(u=[],function(e,t){return u[e]=t,u.filter(Boolean).join("\n")});function y(e,t,n,o){var i=n?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(e.styleSheet)e.styleSheet.cssText=d(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function p(e,t,n){var o=n.css,i=n.media,r=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=o;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(o))}}var f=null,h=0;function v(e,t){var n,o,i;if(t.singleton){var r=h++;n=f||(f=l(t)),o=y.bind(null,n,r,!1),i=y.bind(null,n,r,!0)}else n=l(t),o=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var o=0;o<n.length;o++){var i=s(n[o]);a[i].references--}for(var r=c(e,t),l=0;l<n.length;l++){var u=s(n[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}n=r}}}},13:function(e,t){(function(t){e.exports=t}).call(this,{})},14:function(e,t){e.exports='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 26 28" fill="#999999"><path d="M25.8547832,4.24799388 C25.8547832,3.80481366 25.5641197,3.50930444 25.1286113,3.36146623 L13.6538851,0.110877693 C13.2178893,-0.0369592309 12.6370472,-0.0369592309 12.3465456,0.110877693 L0.871503338,3.36146623 C0.435668699,3.50913852 0.290338857,3.80464645 0.14533143,4.24799388 C0.14533143,4.39583081 -0.43583305,8.97632143 0.726173496,14.1477971 C1.4523454,17.2508914 2.61451632,19.9104583 4.35753878,22.1263916 C6.39121144,24.7861385 9.15104969,26.7070353 12.4917363,27.8892458 C12.7823998,28.0369181 13.0729008,28.0369181 13.5085742,27.8892458 C16.8494189,26.7073729 19.609096,24.7861514 21.6427718,22.1263916 C23.240613,19.910484 24.5477882,17.2508946 25.2739474,14.1477971 C26.4356315,8.97596774 25.8547895,4.39567775 25.8547895,4.24799388 L25.8547832,4.24799388 Z M23.2402684,13.7041345 C21.787599,19.9098152 18.3018923,24.0472787 12.9273718,25.8203533 C7.55300937,23.8992958 4.06698341,19.9098474 2.61447523,13.7041345 C1.74297032,9.86252111 1.88830332,6.46424871 2.03347195,4.98654185 L12.9273782,1.88377866 L23.8214424,4.98654185 C23.9664505,6.46425192 24.1117822,10.0105265 23.2402779,13.7041345 L23.2402684,13.7041345 Z M11.1843747,17.9889281 L7.55300937,14.4429719 C7.11717473,13.9997916 7.11717473,13.408606 7.55300937,12.9654258 C7.98867964,12.5220784 8.56984728,12.5220784 9.00567876,12.9654258 L11.9105339,15.7726797 L17.865906,10.1579917 C18.3019018,9.71464432 18.8827439,9.71464432 19.3187366,10.1579917 C19.7544068,10.601172 19.7544068,11.1923576 19.3187366,11.6355378 L12.6370472,17.9889024 C12.4917155,18.1365747 12.2013769,18.2845763 11.9108753,18.2845763 C11.6202118,18.2845763 11.3295496,18.1367393 11.1843778,17.9889024 L11.1843747,17.9889281 Z" id="形状"></path></svg>'},15:function(e,t,n){var o=n(3);e.exports=function(e){"use strict";var t="",n=(e=e||{}).options,i=e.icons,r=o.$escape;return t+='<div class="payKeyboard">\n  <div class="payKeyboard__hd" ',(n.tip||n.arrow)&&(t+='  style="min-height: 30px;padding: 4px;" '),t+=">\n    ",n.tip&&(t+='\n      <div class="payKeyboard__intro">\n        ',n.showIcon&&(t+="\n          <span>",t+=i.logo,t+="</span>\n        "),t+="\n        ",t+=n.tip,t+="\n        ",n.logo&&(t+="\n          <img src=",t+=r(n.logo),t+=' class="payKeyboard__logo"/>\n        '),t+="\n      </div>\n    "),t+="\n    ",n.arrow&&(t+='\n    <div class="payKeyboard__arrow"></div>\n    '),t+='\n  </div>\n  <div class="payKeyboard__bd">\n    <div class="payKeyboard__keys">\n      <div class="payKeyboard__row">\n        <div class="payKeyboard__key payKeyboard__number" data-key="1">1</div>\n        <div class="payKeyboard__key payKeyboard__number" data-key="2">2</div>\n        <div class="payKeyboard__key payKeyboard__number" data-key="3">3</div>\n      </div>\n      <div class="payKeyboard__row">\n        <div class="payKeyboard__key payKeyboard__number" data-key="4">4</div>\n        <div class="payKeyboard__key payKeyboard__number" data-key="5">5</div>\n        <div class="payKeyboard__key payKeyboard__number" data-key="6">6</div>\n      </div>\n      <div class="payKeyboard__row">\n        <div class="payKeyboard__key payKeyboard__number" data-key="7">7</div>\n        <div class="payKeyboard__key payKeyboard__number" data-key="8">8</div>\n        <div class="payKeyboard__key payKeyboard__number" data-key="9">9</div>\n      </div>\n      <div class="payKeyboard__row">\n        <div class="payKeyboard__key payKeyboard__zero payKeyboard__number" data-key="0">0</div>\n\n        <div class="payKeyboard__key payKeyboard__point ',n.showDot&&(t+=" payKeyboard__point--display "),t+='" data-key=".">.</div>\n\n      </div>\n    </div>\n    <div class="payKeyboard__function">\n      <div class="payKeyboard__key payKeyboard__del" data-key="del">',t+=i.del,t+='</div>\n      <div class="payKeyboard__key payKeyboard__enter payKeyboard__enter--disabled" id="submit" data-key="enter">\n        <div class="payKeyboard__text">',t+=r(n.text),t+='</div>\n        <div class="payKeyboard__loading"></div>\n      </div>\n    </div>\n  </div>\n  <div class="payKeyboard__iphonex-bottom"></div>\n</div>\n\n'}},16:function(e,t,n){var o;function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(){"use strict";function r(e,t){var n;if(t=t||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=t.touchBoundary||10,this.layer=e,this.tapDelay=t.tapDelay||200,this.tapTimeout=t.tapTimeout||700,!r.notNeeded(e)){for(var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],i=0,a=o.length;i<a;i++)this[o[i]]=c(this[o[i]],this);s&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var i=Node.prototype.removeEventListener;"click"===t?i.call(e,t,n.hijacked||n,o):i.call(e,t,n,o)},e.addEventListener=function(t,n,o){var i=Node.prototype.addEventListener;"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(e){e.propagationStopped||n(e)}),o):i.call(e,t,n,o)}),"function"==typeof e.onclick&&(n=e.onclick,e.addEventListener("click",(function(e){n(e)}),!1),e.onclick=null)}function c(e,t){return function(){return e.apply(t,arguments)}}}var a=navigator.userAgent.indexOf("Windows Phone")>=0,s=navigator.userAgent.indexOf("Android")>0&&!a,c=/iP(ad|hone|od)/.test(navigator.userAgent)&&!a,l=c&&/OS 4_\d(_\d)?/.test(navigator.userAgent),u=c&&/OS [6-7]_\d/.test(navigator.userAgent),d=navigator.userAgent.indexOf("BB10")>0;r.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled)return!0;break;case"input":if(c&&"file"===e.type||e.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(e.className)},r.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!s;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}},r.prototype.sendClick=function(e,t){document.activeElement&&document.activeElement!==e&&document.activeElement.blur();var n=t.changedTouches[0],o=document.createEvent("MouseEvents");o.initMouseEvent(this.determineEventType(e),!0,!0,window,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),o.forwardedTouchEvent=!0,e.dispatchEvent(o)},r.prototype.determineEventType=function(e){return s&&"select"===e.tagName.toLowerCase()?"mousedown":"click"},r.prototype.focus=function(e){var t;c&&e.setSelectionRange&&0!==e.type.indexOf("date")&&"time"!==e.type&&"month"!==e.type&&"email"!==e.type?(t=e.value.length,e.setSelectionRange(t,t)):e.focus()},r.prototype.updateScrollParent=function(e){var t,n;if(!(t=e.fastClickScrollParent)||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n,e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}t&&(t.fastClickLastScrollTop=t.scrollTop)},r.prototype.getTargetElementFromEventTarget=function(e){return e.nodeType===Node.TEXT_NODE?e.parentNode:e},r.prototype.onTouchStart=function(e){var t;if(e.targetTouches.length>1)return!0;var n=this.getTargetElementFromEventTarget(e.target),o=e.targetTouches[0];if(c){if((t=window.getSelection()).rangeCount&&!t.isCollapsed)return!0;if(!l){if(o.identifier&&o.identifier===this.lastTouchIdentifier)return e.preventDefault(),!1;this.lastTouchIdentifier=o.identifier,this.updateScrollParent(n)}}return this.trackingClick=!0,this.trackingClickStart=e.timeStamp,this.targetElement=n,this.touchStartX=o.pageX,this.touchStartY=o.pageY,e.timeStamp-this.lastClickTime<this.tapDelay&&e.preventDefault(),!0},r.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;return Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n},r.prototype.onTouchMove=function(e){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e))&&(this.trackingClick=!1,this.targetElement=null),!0)},r.prototype.findControl=function(e){return void 0!==e.control?e.control:e.htmlFor?document.getElementById(e.htmlFor):e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},r.prototype.onTouchEnd=function(e){var t,n,o,i,r,a=this.targetElement;if(!this.trackingClick)return!0;if(e.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(e.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=e.timeStamp,n=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,u&&(r=e.changedTouches[0],(a=document.elementFromPoint(r.pageX-window.pageXOffset,r.pageY-window.pageYOffset)||a).fastClickScrollParent=this.targetElement.fastClickScrollParent),"label"===(o=a.tagName.toLowerCase())){if(t=this.findControl(a)){if(this.focus(a),s)return!1;a=t}}else if(this.needsFocus(a))return e.timeStamp-n>100||c&&window.top!==window&&"input"===o?(this.targetElement=null,!1):(this.focus(a),this.sendClick(a,e),c&&"select"===o||(this.targetElement=null,e.preventDefault()),!1);return!(!c||l||!(i=a.fastClickScrollParent)||i.fastClickLastScrollTop===i.scrollTop)||(this.needsClick(a)||(e.preventDefault(),this.sendClick(a,e)),!1)},r.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},r.prototype.onMouse=function(e){return!this.targetElement||(!!e.forwardedTouchEvent||(!e.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(e.stopImmediatePropagation?e.stopImmediatePropagation():e.propagationStopped=!0,e.stopPropagation(),e.preventDefault(),!1))))},r.prototype.onClick=function(e){var t;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===e.target.type&&0===e.detail||((t=this.onMouse(e))||(this.targetElement=null),t)},r.prototype.destroy=function(){var e=this.layer;s&&(e.removeEventListener("mouseover",this.onMouse,!0),e.removeEventListener("mousedown",this.onMouse,!0),e.removeEventListener("mouseup",this.onMouse,!0)),e.removeEventListener("click",this.onClick,!0),e.removeEventListener("touchstart",this.onTouchStart,!1),e.removeEventListener("touchmove",this.onTouchMove,!1),e.removeEventListener("touchend",this.onTouchEnd,!1),e.removeEventListener("touchcancel",this.onTouchCancel,!1)},r.notNeeded=function(e){var t,n,o;if(void 0===window.ontouchstart)return!0;if(n=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!s)return!0;if(t=document.querySelector("meta[name=viewport]")){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(n>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(d&&(o=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/))[1]>=10&&o[2]>=3&&(t=document.querySelector("meta[name=viewport]"))){if(-1!==t.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===e.style.msTouchAction||"manipulation"===e.style.touchAction||(!!(+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]>=27&&(t=document.querySelector("meta[name=viewport]"))&&(-1!==t.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))||("none"===e.style.touchAction||"manipulation"===e.style.touchAction))},r.attach=function(e,t){return new r(e,t)},"object"===i(n(13))&&n(13)?void 0===(o=function(){return r}.call(t,n,t,e))||(e.exports=o):e.exports?(e.exports=r.attach,e.exports.FastClick=r):window.FastClick=r}()},2:function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=(a=o,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),r=o.sources.map((function(e){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(e," */")}));return[n].concat(r).concat([i]).join("\n")}var a,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,o){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(o)for(var r=0;r<this.length;r++){var a=this[r][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);o&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},3:function(e,t,n){"use strict";e.exports=n(4)},4:function(e,t,n){"use strict";(function(t){var n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==t?t:{},o=Object.create(n),i=/["&'<>]/;o.$escape=function(e){return function(e){var t=""+e,n=i.exec(t);if(!n)return e;var o="",r=void 0,a=void 0,s=void 0;for(r=n.index,a=0;r<t.length;r++){switch(t.charCodeAt(r)){case 34:s="&#34;";break;case 38:s="&#38;";break;case 39:s="&#39;";break;case 60:s="&#60;";break;case 62:s="&#62;";break;default:continue}a!==r&&(o+=t.substring(a,r)),a=r+1,o+=s}return a!==r?o+t.substring(a,r):o}(function e(t){"string"!=typeof t&&(t=null==t?"":"function"==typeof t?e(t.call(t)):JSON.stringify(t));return t}(e))},o.$each=function(e,t){if(Array.isArray(e))for(var n=0,o=e.length;n<o;n++)t(e[n],n);else for(var i in e)t(e[i],i)},e.exports=o}).call(this,n(5))},42:function(e,t,n){"use strict";n.r(t);n(58);var o="payKeyboard__enter--disabled",i="payKeyboard--hide",r=n(0),a=n(14),s=n.n(a),c=n(8),l=n.n(c),u={logo:s.a,del:l.a},d=n(15),y=n.n(d);function p(e){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,h(o.key),o)}}function h(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=p(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==p(t)?t:String(t)}var v=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.container=t.container,this.options=t.options,this.init()}var t,n,o;return t=e,(n=[{key:"init",value:function(){this.container.innerHTML=y()({options:this.options,icons:u,getObject:function(e){return e}}),this.numbers=this.container.querySelectorAll(".payKeyboard__number"),this.keyboard=this.container.querySelector(".payKeyboard"),this.point=this.container.querySelector(".payKeyboard__point"),this.del=this.container.querySelector(".payKeyboard__del"),this.enter=this.container.querySelector(".payKeyboard__enter"),this.text=this.container.querySelector(".payKeyboard__text"),this.loading=this.container.querySelector(".payKeyboard__loading"),this.arrow=this.container.querySelector(".payKeyboard__arrow")}}])&&f(t.prototype,n),o&&f(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}(),b=n(16),m=n.n(b),g={isMobile:/mobile/i.test(window.navigator.userAgent),isAlipay:"alipayclient"===window.navigator.userAgent.match(/AlipayClient/i),isWechat:"micromessenger"===window.navigator.userAgent.match(/MicroMessenger/i),alipayReady:function(e){window.AlipayJSBridge?e&&e():document.addEventListener("AlipayJSBridgeReady",e,!1)},vibrate:function(){this.isAlipay?this.alipayReady((function(){window.AlipayJSBridge.call("vibrateShort")})):"vibrate"in window.navigator?window.navigator.vibrate(65):console.log("浏览器不支持震动")},storage:{set:function(e,t){localStorage.setItem(e,t)},get:function(e){return localStorage.getItem(e)}}};function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,_(o.key),o)}}function _(e){var t=function(e,t){if("object"!=k(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=k(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==k(t)?t:String(t)}var x=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.keyboard=t,this.options=this.keyboard.options,this.numbers=this.keyboard.template.numbers,this.point=this.keyboard.template.point,this.del=this.keyboard.template.del,this.enter=this.keyboard.template.enter,this.bindEvents(),m.a.attach(document.body)}var t,n,i;return t=e,(n=[{key:"bindEvents",value:function(){for(var e=this,t=0;t<this.numbers.length;t++)this.numbers[t].addEventListener("click",(function(t){e._click(t)}));this.point.addEventListener("click",(function(t){e._click(t)})),this.del.addEventListener("click",(function(t){e._click(t)})),this.enter.addEventListener("click",(function(t){e._click(t),e._submit()}))}},{key:"_click",value:function(e){var t=e.target.dataset.key;this.keyboard.events.trigger("click",{key:t}),g.vibrate();var n=this.keyboard.value,o=this.keyboard.value.indexOf(".")>-1;if("del"===t&&(this.keyboard.value=this.keyboard.value.substr(0,this.keyboard.value.length-1),"0"===this.keyboard.value&&(this.keyboard.value="")),"."===t){if(o)return;this.keyboard.value+=t,"."===this.keyboard.value&&(this.keyboard.value="0.")}if(/[0-9]/.test(t)){if(parseFloat(this.keyboard.value+t)>this.options.max)return void this.keyboard.events.trigger("max",{value:this.keyboard.value+t});if(o&&this.keyboard.value.split(".")[1].length>=2)return;this.keyboard.value+=t,"0"===this.keyboard.value&&(this.keyboard.value="0.")}n!==this.keyboard.value&&this.keyboard.events.trigger("change",{value:this.keyboard.value})}},{key:"_submit",value:function(){this.enter.classList.contains(o)||(this.keyboard.toggleSubmitLoading(!0),this.keyboard.toggleSubmitDisabled(!0),this.keyboard.events.trigger("submit",{value:this.keyboard.value}))}}])&&w(t.prototype,n),i&&w(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,C(o.key),o)}}function C(e){var t=function(e,t){if("object"!=A(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!=A(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==A(t)?t:String(t)}var E=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=function(e){e.text&&e.text.length>6&&(e.text=e.text.substr(0,6));var t={container:e.element||document.getElementsByClassName("payKeyboard")[0],value:e.value||"",max:e.max||1e9,arrow:e.arrow||!1,tip:e.tip||"",color:e.color||"#1677FF",showIcon:e.showIcon||!0,showDot:e.showDot||!0,logo:e.logo||"",text:e.text||"付款"};for(var n in t)t.hasOwnProperty(n)&&!e.hasOwnProperty(n)&&(e[n]=t[n]);return e.max=parseFloat(e.max),e.max>1e9&&(e.max=1e9),e}(t),this.container=this.options.container,this.value=this.options.value,this.template=new v({container:this.container,options:this.options}),this.events=new r.a(["init","change","click","submit","hide","show","max"]),this.buttons=new x(this),this.bindEvents(),this.init()}var t,n,a;return t=e,a=[{key:"version",get:function(){return"1.0.0"}}],(n=[{key:"on",value:function(e,t){this.events.on(e,t)}},{key:"bindEvents",value:function(){var e=this;this.on("change",(function(){e.toggleSubmitDisabled(!parseFloat(e.value)>0)}))}},{key:"init",value:function(){var e=this;this.template.enter.style.setProperty("--primary",this.options.color),this.container.style.overflow="hidden",this.template.arrow&&this.template.arrow.addEventListener("click",(function(){e.hide()})),this.events.trigger("init")}},{key:"toggleSubmitDisabled",value:function(e){e?this.template.enter.classList.add(o):this.template.enter.classList.remove(o)}},{key:"toggleSubmitLoading",value:function(e){e?(this.template.text.style.display="none",this.template.loading.style.display="block"):(this.template.text.style.display="block",this.template.loading.style.display="none")}},{key:"reset",value:function(){var e=this.value;this.value=this.options.value,this.toggleSubmitLoading(!1),this.toggleSubmitDisabled(!parseFloat(this.value)>0),this.setColor(this.options.color),this.value!==e&&this.events.trigger("change",{value:this.value})}},{key:"hide",value:function(){this.template.keyboard.classList.add(i),this.events.trigger("hide")}},{key:"show",value:function(){this.template.keyboard.classList.remove(i),this.events.trigger("show")}},{key:"setColor",value:function(e){this.template.enter.style.setProperty("--primary",e)}}])&&S(t.prototype,n),a&&S(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=E},5:function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var o;o=function(){return this}();try{o=o||new Function("return this")()}catch(e){"object"===("undefined"==typeof window?"undefined":n(window))&&(o=window)}e.exports=o},58:function(e,t,n){var o=n(1),i=n(59);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var r={insert:"head",singleton:!1};o(i,r);e.exports=i.locals||{}},59:function(e,t,n){(t=n(2)(!1)).push([e.i,'@font-face{font-family:AlipayNumber;src:url(https://gw.alipayobjects.com/as/g/antui/antui-static/1.0.3/fonts/AlipayNumber-Regular.ttf) format("truetype")}.alipaynumber{font-family:AlipayNumber,sans-serif}.payKeyboard{background:#fff;max-height:600px;min-width:250px;overflow:hidden;position:relative;transition:all .2s ease-in}.payKeyboard--hide{transform:translateY(100%);max-height:0}.payKeyboard:after{content:"";display:block;position:absolute;left:0;top:0;right:0;height:1px;background-color:#ddd;transform:scaleY(.5)}.payKeyboard__hd{position:relative}.payKeyboard__intro{display:flex;align-items:center;justify-content:center;font-size:13px;min-height:30px;color:#999}.payKeyboard__intro span{margin-right:5px;width:13px}.payKeyboard__intro span *{display:block}.payKeyboard__arrow{position:absolute;width:28px;height:26px;right:8px;top:7px;background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAASCAYAAABIB77kAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAHKADAAQAAAABAAAAEgAAAADbjUrDAAABTElEQVQ4Eb3UP06EQBQGcGYMmZrWQKOnsNNOaYxrQmNHAafYxltACFdQi9VYaWw9gzaeYiUEv4/NbFaWP0MEXzLszM7M++VNGKw0TS+sf4okSW5lVVV3WZadz20Sg7GUeKiyLO/nRDXGoggyanSO493FCBH8YgeheLxTok0Mxkratn2KzuRoG+Y4zkIAs/I8PyqK4hVdj2PEWghxFUXR02Y47tmFBUHwXYNMNxXah9HZglOgQ9ge+BfUBGN+fS3YryMMw090ztCMXyRTjMCvI+UfOpDkGP0XtN4XaQzG3J0gJ4fQNszzvGvf99fc3xa9IDd0ofhInGB6uZN0NYRx7SDIRU0Ud7QEeMA5BsaPrusu+irbrDQEubiJbhOMwLjHqEKdnCiqeUN1h/VmIZ5R2aVJZTrH3rXQE22/cRx/SCkDoO9oD0qpmzEYc/4ApjHAh9OIbCUAAAAASUVORK5CYII=");background-size:14px 8px;background-repeat:no-repeat;background-position:50%}.payKeyboard__bd{display:flex}.payKeyboard__keys{flex:3}.payKeyboard__function{flex:1;display:flex;flex-direction:column}.payKeyboard__logo{height:16px;margin-left:5px;padding-left:5px;border-left:1px solid #999}.payKeyboard__key{font-family:AlipayNumber,sans-serif;flex:1;height:7.14286vh;text-align:center;font-size:25px;color:#333;background:#fff;display:flex;justify-content:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;border-right:1px solid #f5f5f5;border-top:1px solid #f5f5f5}.payKeyboard__key:active{background-color:#f5f5f5;color:#333}.payKeyboard__del{position:relative;flex:none;border-right:0;border-bottom:1px solid #f5f5f5}.payKeyboard__del svg{width:25px}.payKeyboard__del:before{display:block;position:absolute;top:0;right:0;bottom:0;left:0;content:""}.payKeyboard__point{display:none}.payKeyboard__point--display{display:flex}.payKeyboard__enter{--primary:#1677ff;flex:3;display:flex;justify-content:center;align-items:center;background-color:var(--primary,"#1677FF");font-size:18px;color:#fff;border-right:0;border-top:0}.payKeyboard__enter--disabled{background-color:#f5f5f5;color:#999}.payKeyboard__enter:active{color:#fff;background-color:var(--primary,"#1677FF")}.payKeyboard__row{display:flex}.payKeyboard__zero{flex:2}.payKeyboard__loading{display:none;width:35px;height:35px;background-size:35px;background-image:url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMCIgd2lkdGg9IjcxIiBoZWlnaHQ9IjcxIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCI+PGc+PHBhdGggZD0iTTY0IDkuNzVBNTQuMjUgNTQuMjUgMCAwMDkuNzUgNjRIMGE2NCA2NCAwIDAxMTI4IDBoLTkuNzVBNTQuMjUgNTQuMjUgMCAwMDY0IDkuNzV6IiBmaWxsPSIjZmZmIi8+PGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIGZyb209IjAgNjQgNjQiIHRvPSIzNjAgNjQgNjQiIGR1cj0iMTIwMG1zIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIvPjwvZz48L3N2Zz4=")}@media only screen and (device-width:375px) and (device-height:812px) and (-webkit-device-pixel-ratio:3),only screen and (device-width:414px) and (device-height:896px) and (-webkit-device-pixel-ratio:2),only screen and (device-width:414px) and (device-height:896px) and (-webkit-device-pixel-ratio:3){.payKeyboard__iphonex-bottom{visibility:hidden;min-height:34px;height:env(safe-area-inset-bottom);width:100%}}',""]),e.exports=t},8:function(e,t){e.exports='<svg viewBox="0 0 52 38" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>插销</title><g id="输出" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="金额键盘带按钮" transform="translate(-630.000000, -119.000000)" fill="#333333" fill-rule="nonzero"><g id="编组-8" transform="translate(630.000000, 119.000000)"><path d="M45,0 C48.8659932,0 52,3.13400675 52,7 L52,7 L52,31 C52,34.8659932 48.8659932,38 45,38 L45,38 L16.3742656,38 C14.2113201,38 12.1698534,37.0001043 10.8438874,35.2912605 L10.8438874,35.2912605 L1.5325666,23.2912605 C-0.426929077,20.765953 -0.426929077,17.234047 1.5325666,14.7087395 L1.5325666,14.7087395 L10.8438874,2.70873952 C12.1698534,0.99989572 14.2113201,0 16.3742656,0 L16.3742656,0 Z M45,3 L16.3742656,3 L16.1434178,3.00665514 C14.9940748,3.0730036 13.9243884,3.63239912 13.2140495,4.54785116 L13.2140495,4.54785116 L3.9027287,16.5478512 L3.7737379,16.7237024 C2.78480843,18.1514223 2.82780536,20.0668373 3.9027287,21.4521488 L3.9027287,21.4521488 L13.2140495,33.4521488 L13.3608257,33.6304512 C14.1178346,34.4978202 15.2155448,35 16.3742656,35 L16.3742656,35 L45,35 L45.1996403,34.9951047 C47.3160315,34.8910789 49,33.1421954 49,31 L49,31 L49,7 L48.9951047,6.80035966 C48.8910789,4.68396847 47.1421954,3 45,3 L45,3 Z M25.502,13.001 L29.7565729,17.208 L34.01,13.001 L38.232,13.001 L38.2422424,13.0113777 L31.8775729,19.306 L38.524,25.881 L34.282,25.881 L29.7565729,21.404 L25.23,25.881 L20.99,25.881 L27.6355729,19.306 L21.2716797,13.0113777 L21.281,13.001 L25.502,13.001 Z" id="形状结合"></path></g></g></g></svg>'}}).default}));