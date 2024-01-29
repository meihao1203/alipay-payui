!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("PayMerchant",[],e):"object"==typeof exports?exports.PayMerchant=e():t.PayMerchant=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=48)}({0:function(t,e,n){"use strict";function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,a(r.key),r)}}function a(t){var e=function(t,e){if("object"!=r(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=r(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==r(e)?e:String(e)}var s=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];i(this,t),this.events={},this.eventsList=e}var e,n,r;return e=t,(n=[{key:"on",value:function(t,e){this.type(t)&&"function"==typeof e&&(this.events[t]||(this.events[t]=[]),this.events[t].push(e))}},{key:"trigger",value:function(t,e){if(this.events[t]&&this.events[t].length)for(var n=0;n<this.events[t].length;n++)this.events[t][n](e)}},{key:"type",value:function(t){return-1!==this.eventsList.indexOf(t)||(console.error("Unknown event name: ".concat(t)),null)}}])&&o(e.prototype,n),r&&o(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.a=s},1:function(t,e,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function s(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],i=0;i<t.length;i++){var o=t[i],c=e.base?o[0]+e.base:o[0],u=n[c]||0,l="".concat(c," ").concat(u);n[c]=u+1;var f=s(l),p={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:l,updater:d(p,e),references:1}),r.push(l)}return r}function u(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,f=(l=[],function(t,e){return l[t]=e,l.filter(Boolean).join("\n")});function p(t,e,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=f(e,i);else{var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o)}}function h(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?t.setAttribute("media",i):t.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var y=null,v=0;function d(t,e){var n,r,i;if(e.singleton){var o=v++;n=y||(y=u(e)),r=p.bind(null,n,o,!1),i=p.bind(null,n,o,!0)}else n=u(e),r=h.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=i());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var i=s(n[r]);a[i].references--}for(var o=c(t,e),u=0;u<n.length;u++){var l=s(n[u]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=o}}}},18:function(t,e,n){n(3);t.exports=function(t){"use strict";var e="",n=(t=t||{}).options,r=t.icons;return e+=' <div class="PayMerchant">\n  ',n.avatar&&(e+='\n    <div class="PayMerchant__avatar">\n      <img src="',e+=n.avatar,e+='" alt="avatar">\n    </div>\n  '),e+="\n  ",n.name&&(e+='\n    <div class="PayMerchant__name">\n      ',e+=n.name,e+="\n    </div>\n  "),e+='\n  <div class="PayMerchant__tag">\n    <span class="PayMerchant__tag--icon">\n      ',e+=r.checked,e+='\n    </span>\n    <span class="PayMerchant__tag--text">\n      ',e+=n.tag,e+="\n    </span>\n  </div>\n</div>\n"}},2:function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(o).concat([i]).join("\n")}var a,s,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},3:function(t,e,n){"use strict";t.exports=n(4)},4:function(t,e,n){"use strict";(function(e){var n="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:{},r=Object.create(n),i=/["&'<>]/;r.$escape=function(t){return function(t){var e=""+t,n=i.exec(e);if(!n)return t;var r="",o=void 0,a=void 0,s=void 0;for(o=n.index,a=0;o<e.length;o++){switch(e.charCodeAt(o)){case 34:s="&#34;";break;case 38:s="&#38;";break;case 39:s="&#39;";break;case 60:s="&#60;";break;case 62:s="&#62;";break;default:continue}a!==o&&(r+=e.substring(a,o)),a=o+1,r+=s}return a!==o?r+e.substring(a,o):r}(function t(e){"string"!=typeof e&&(e=null==e?"":"function"==typeof e?t(e.call(e)):JSON.stringify(e));return e}(t))},r.$each=function(t,e){if(Array.isArray(t))for(var n=0,r=t.length;n<r;n++)e(t[n],n);else for(var i in t)e(t[i],i)},t.exports=r}).call(this,n(5))},48:function(t,e,n){"use strict";n.r(e);n(62);var r=n(9),i={checked:n.n(r).a},o=n(18),a=n.n(o);function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,u(r.key),r)}}function u(t){var e=function(t,e){if("object"!=s(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=s(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==s(e)?e:String(e)}var l=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.container=e.container,this.options=e.options,this.init()}var e,n,r;return e=t,(n=[{key:"init",value:function(){this.container.innerHTML=a()({options:this.options,icons:i,getObject:function(t){return t}}),this.avatar=this.container.querySelector(".PayMerchant__avatar"),this.name=this.container.querySelector(".PayMerchant__name"),this.tag=this.container.querySelector(".PayMerchant__tag")}}])&&c(e.prototype,n),r&&c(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),f=n(0);function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,y(r.key),r)}}function y(t){var e=function(t,e){if("object"!=p(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==p(e)?e:String(e)}var v=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=function(t){var e={container:t.element||document.getElementsByClassName("payMerchant")[0],avatar:t.avatar||"",name:t.name||"商户",tag:t.tag||""};for(var n in e)e.hasOwnProperty(n)&&!t.hasOwnProperty(n)&&(t[n]=e[n]);return t}(e),this.container=this.options.container,this.avatar=this.options.avatar,this.name=this.options.name,this.tag=this.options.tag,this.template=new l({container:this.container,options:this.options}),this.events=new f.a(["init","change"]),this.init()}var e,n,r;return e=t,r=[{key:"version",get:function(){return"1.0.0"}}],(n=[{key:"init",value:function(){this._initTag(),this.events.trigger("init")}},{key:"setAvatar",value:function(t){t!==this.avatar&&(this.avatar=t,this.events.trigger("change",{avatar:this.avatar,name:this.name,tag:this.tag})),this.template.avatar.querySelector("img").src=t}},{key:"setName",value:function(t){t!==this.name&&(this.name=t,this.events.trigger("change",{avatar:this.avatar,name:this.name,tag:this.tag})),this.template.name.innerText=t}},{key:"setTag",value:function(t){t!==this.tag&&(this.tag=t,this.events.trigger("change",{avatar:this.avatar,name:this.name,tag:this.tag})),this.template.tag.querySelector(".PayMerchant__tag--text").innerText=t,this.template.tag.style.display="inline-flex"}},{key:"hideTag",value:function(){this.template.tag.querySelector(".PayMerchant__tag--text").innerText="",this.template.tag.style.display="none"}},{key:"reset",value:function(){this.avatar=this.options.avatar,this.name=this.options.name,this.template.avatar.querySelector("img").src=this.options.avatar,this.template.name.innerText=this.options.name,this._initTag()}},{key:"_initTag",value:function(){this.options.tag?(this.template.tag.querySelector(".PayMerchant__tag--text").innerText=this.options.tag,this.template.tag.style.display="inline-flex"):this.template.tag.style.display="none"}}])&&h(e.prototype,n),r&&h(e,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.default=v},5:function(t,e){function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(t){"object"===("undefined"==typeof window?"undefined":n(window))&&(r=window)}t.exports=r},62:function(t,e,n){var r=n(1),i=n(63);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[t.i,i,""]]);var o={insert:"head",singleton:!1};r(i,o);t.exports=i.locals||{}},63:function(t,e,n){(e=n(2)(!1)).push([t.i,".PayMerchant{display:flex;align-items:center}.PayMerchant__avatar{width:40px;height:40px;overflow:hidden;border-radius:2px;margin-right:8px}.PayMerchant__avatar img{display:block;width:100%;height:100%}.PayMerchant__name{font-size:16px;color:#000;margin-right:8px}.PayMerchant__tag{display:inline-flex;align-items:center;padding:0 1px;font-size:12px;color:#1677ff;border:1px solid #1677ff;border-radius:2px}.PayMerchant__tag--icon{display:inline-flex;margin-right:2px}.PayMerchant__tag--icon svg{width:1em;height:1em}.PayMerchant__tag--text{display:inline-flex;max-width:80px;white-space:nowrap;overflow:hidden}",""]),t.exports=e},9:function(t,e){t.exports='<svg viewBox="0 0 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><title>right备份 12</title><defs><linearGradient x1="0.915857264%" y1="1.09287579e-14%" x2="100%" y2="99.0841427%" id="linearGradient-1"><stop stop-color="#168BFF" offset="0%"></stop><stop stop-color="#1664FF" offset="100%"></stop></linearGradient></defs><g id="全新设计（以这个为准）" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="浮层" transform="translate(-688.000000, -454.000000)" fill="url(#linearGradient-1)"><g id="right备份-12" transform="translate(688.000000, 454.000000)"><path d="M15.0000202,0.413243368 C6.94337021,0.413243368 0.413243368,6.94676248 0.413243368,15.0000202 C0.413243368,23.0532779 6.94676248,29.5867971 15.0000202,29.5867971 C23.0532779,29.5867971 29.5867971,23.0566702 29.5867971,15.0000202 C29.5867971,6.94337021 23.0566702,0.413243368 15.0000202,0.413243368 Z M22.0050654,11.4686633 L14.3894109,19.0843177 L14.1451672,19.3285614 C13.4667125,20.0070162 12.3676158,20.0070162 11.6891611,19.3285614 L8.49703156,16.1364319 C8.08995872,15.7293591 8.08995872,15.071258 8.49703156,14.6641851 C8.9041044,14.2571123 9.56220549,14.2571123 9.96927834,14.6641851 L12.3031626,16.9980694 C12.64239,17.3372968 13.1919383,17.3372968 13.5311657,16.9980694 L20.5294263,9.99641653 C20.9364992,9.58934368 21.5946003,9.58934368 22.0016731,9.99641653 C22.4087459,10.4034894 22.4087459,11.0615905 22.0050654,11.4686633 Z" id="形状"></path></g></g></g></svg>'}}).default}));