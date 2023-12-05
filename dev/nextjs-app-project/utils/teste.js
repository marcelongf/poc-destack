'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var crypto = require('crypto');
require('react-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var crypto__default = /*#__PURE__*/_interopDefaultLegacy(crypto);

function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];if("production"!==process.env.NODE_ENV){var i=Y$2[n],o=i?"function"==typeof i?i.apply(null,t):i:"unknown error nr: "+n;throw Error("[Immer] "+o)}throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return "'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return !!n&&!!n[Q$2]}function t(n){var r;return !!n&&(function(n){if(!n||"object"!=typeof n)return !1;var r=Object.getPrototypeOf(n);if(null===r)return !0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Z$2}(n)||Array.isArray(n)||!!n[L]||!!(null===(r=n.constructor)||void 0===r?void 0:r[L])||s(n)||v(n))}function i(n,r,t){void 0===t&&(t=!1),0===o(n)?(t?Object.keys:nn)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n);})):n.forEach((function(t,e){return r(e,t,n)}));}function o(n){var r=n[Q$2];return r?r.i>3?r.i-4:r.i:Array.isArray(n)?1:s(n)?2:v(n)?3:0}function u(n,r){return 2===o(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function a(n,r){return 2===o(n)?n.get(r):n[r]}function f(n,r,t){var e=o(n);2===e?n.set(r,t):3===e?n.add(t):n[r]=t;}function c(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function s(n){return X$2&&n instanceof Map}function v(n){return q$1&&n instanceof Set}function p(n){return n.o||n.t}function l(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=rn(n);delete r[Q$2];for(var t=nn(r),e=0;e<t.length;e++){var i=t[e],o=r[i];!1===o.writable&&(o.writable=!0,o.configurable=!0),(o.get||o.set)&&(r[i]={configurable:!0,writable:!0,enumerable:o.enumerable,value:n[i]});}return Object.create(Object.getPrototypeOf(n),r)}function d(n,e){return void 0===e&&(e=!1),y(n)||r(n)||!t(n)||(o(n)>1&&(n.set=n.add=n.clear=n.delete=h),Object.freeze(n),e&&i(n,(function(n,r){return d(r,!0)}),!0)),n}function h(){n(2);}function y(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function b(r){var t=tn[r];return t||n(18,r),t}function m$1(n,r){tn[n]||(tn[n]=r);}function _(){return "production"===process.env.NODE_ENV||U$1||n(0),U$1}function j(n,r){r&&(b("Patches"),n.u=[],n.s=[],n.v=r);}function g(n){O$1(n),n.p.forEach(S),n.p=null;}function O$1(n){n===U$1&&(U$1=n.l);}function w(n){return U$1={p:[],l:U$1,h:n,m:!0,_:0}}function S(n){var r=n[Q$2];0===r.i||1===r.i?r.j():r.g=!0;}function P(r,e){e._=e.p.length;var i=e.p[0],o=void 0!==r&&r!==i;return e.h.O||b("ES5").S(e,r,o),o?(i[Q$2].P&&(g(e),n(4)),t(r)&&(r=M(e,r),e.l||x(e,r)),e.u&&b("Patches").M(i[Q$2].t,r,e.u,e.s)):r=M(e,i,[]),g(e),e.u&&e.v(e.u,e.s),r!==H?r:void 0}function M(n,r,t){if(y(r))return r;var e=r[Q$2];if(!e)return i(r,(function(i,o){return A(n,e,r,i,o,t)}),!0),r;if(e.A!==n)return r;if(!e.P)return x(n,e.t,!0),e.t;if(!e.I){e.I=!0,e.A._--;var o=4===e.i||5===e.i?e.o=l(e.k):e.o,u=o,a=!1;3===e.i&&(u=new Set(o),o.clear(),a=!0),i(u,(function(r,i){return A(n,e,o,r,i,t,a)})),x(n,o,!1),t&&n.u&&b("Patches").N(e,t,n.u,n.s);}return e.o}function A(e,i,o,a,c,s,v){if("production"!==process.env.NODE_ENV&&c===o&&n(5),r(c)){var p=M(e,c,s&&i&&3!==i.i&&!u(i.R,a)?s.concat(a):void 0);if(f(o,a,p),!r(p))return;e.m=!1;}else v&&o.add(c);if(t(c)&&!y(c)){if(!e.h.D&&e._<1)return;M(e,c),i&&i.A.l||x(e,c);}}function x(n,r,t){void 0===t&&(t=!1),!n.l&&n.h.D&&n.m&&d(r,t);}function z$1(n,r){var t=n[Q$2];return (t?p(t):n)[r]}function I(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t);}}function k(n){n.P||(n.P=!0,n.l&&k(n.l));}function E(n){n.o||(n.o=l(n.t));}function N(n,r,t){var e=s(r)?b("MapSet").F(r,t):v(r)?b("MapSet").T(r,t):n.O?function(n,r){var t=Array.isArray(n),e={i:t?1:0,A:r?r.A:_(),P:!1,I:!1,R:{},l:r,t:n,k:null,o:null,j:null,C:!1},i=e,o=en;t&&(i=[e],o=on);var u=Proxy.revocable(i,o),a=u.revoke,f=u.proxy;return e.k=f,e.j=a,f}(r,t):b("ES5").J(r,t);return (t?t.A:_()).p.push(e),e}function R$1(e){return r(e)||n(22,e),function n(r){if(!t(r))return r;var e,u=r[Q$2],c=o(r);if(u){if(!u.P&&(u.i<4||!b("ES5").K(u)))return u.t;u.I=!0,e=D(r,c),u.I=!1;}else e=D(r,c);return i(e,(function(r,t){u&&a(u.t,r)===t||f(e,r,n(t));})),3===c?new Set(e):e}(e)}function D(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return l(n)}function T(){function e(n){if(!t(n))return n;if(Array.isArray(n))return n.map(e);if(s(n))return new Map(Array.from(n.entries()).map((function(n){return [n[0],e(n[1])]})));if(v(n))return new Set(Array.from(n).map(e));var r=Object.create(Object.getPrototypeOf(n));for(var i in n)r[i]=e(n[i]);return u(n,L)&&(r[L]=n[L]),r}function f(n){return r(n)?e(n):n}var c="add";m$1("Patches",{$:function(r,t){return t.forEach((function(t){for(var i=t.path,u=t.op,f=r,s=0;s<i.length-1;s++){var v=o(f),p=i[s];"string"!=typeof p&&"number"!=typeof p&&(p=""+p),0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof f&&"prototype"===p&&n(24),"object"!=typeof(f=a(f,p))&&n(15,i.join("/"));}var l=o(f),d=e(t.value),h=i[i.length-1];switch(u){case"replace":switch(l){case 2:return f.set(h,d);case 3:n(16);default:return f[h]=d}case c:switch(l){case 1:return "-"===h?f.push(d):f.splice(h,0,d);case 2:return f.set(h,d);case 3:return f.add(d);default:return f[h]=d}case"remove":switch(l){case 1:return f.splice(h,1);case 2:return f.delete(h);case 3:return f.delete(t.value);default:return delete f[h]}default:n(17,u);}})),r},N:function(n,r,t,e){switch(n.i){case 0:case 4:case 2:return function(n,r,t,e){var o=n.t,s=n.o;i(n.R,(function(n,i){var v=a(o,n),p=a(s,n),l=i?u(o,n)?"replace":c:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),e.push(l===c?{op:"remove",path:d}:"remove"===l?{op:c,path:d,value:f(v)}:{op:"replace",path:d,value:f(v)});}}));}(n,r,t,e);case 5:case 1:return function(n,r,t,e){var i=n.t,o=n.R,u=n.o;if(u.length<i.length){var a=[u,i];i=a[0],u=a[1];var s=[e,t];t=s[0],e=s[1];}for(var v=0;v<i.length;v++)if(o[v]&&u[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:f(u[v])}),e.push({op:"replace",path:p,value:f(i[v])});}for(var l=i.length;l<u.length;l++){var d=r.concat([l]);t.push({op:c,path:d,value:f(u[l])});}i.length<u.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length});}(n,r,t,e);case 3:return function(n,r,t,e){var i=n.t,o=n.o,u=0;i.forEach((function(n){if(!o.has(n)){var i=r.concat([u]);t.push({op:"remove",path:i,value:n}),e.unshift({op:c,path:i,value:n});}u++;})),u=0,o.forEach((function(n){if(!i.has(n)){var o=r.concat([u]);t.push({op:c,path:o,value:n}),e.unshift({op:"remove",path:o,value:n});}u++;}));}(n,r,t,e)}},M:function(n,r,t,e){t.push({op:"replace",path:[],value:r===H?void 0:r}),e.push({op:"replace",path:[],value:n});}});}function C(){function r(n,r){function t(){this.constructor=n;}a(n,r),n.prototype=(t.prototype=r.prototype,new t);}function e(n){n.o||(n.R=new Map,n.o=new Map(n.t));}function o(n){n.o||(n.o=new Set,n.t.forEach((function(r){if(t(r)){var e=N(n.A.h,r,n);n.p.set(r,e),n.o.add(e);}else n.o.add(r);})));}function u(r){r.g&&n(3,JSON.stringify(p(r)));}var a=function(n,r){return (a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r;}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t]);})(n,r)},f=function(){function n(n,r){return this[Q$2]={i:2,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,R:void 0,t:n,k:this,C:!1,g:!1},this}r(n,Map);var o=n.prototype;return Object.defineProperty(o,"size",{get:function(){return p(this[Q$2]).size}}),o.has=function(n){return p(this[Q$2]).has(n)},o.set=function(n,r){var t=this[Q$2];return u(t),p(t).has(n)&&p(t).get(n)===r||(e(t),k(t),t.R.set(n,!0),t.o.set(n,r),t.R.set(n,!0)),this},o.delete=function(n){if(!this.has(n))return !1;var r=this[Q$2];return u(r),e(r),k(r),r.t.has(n)?r.R.set(n,!1):r.R.delete(n),r.o.delete(n),!0},o.clear=function(){var n=this[Q$2];u(n),p(n).size&&(e(n),k(n),n.R=new Map,i(n.t,(function(r){n.R.set(r,!1);})),n.o.clear());},o.forEach=function(n,r){var t=this;p(this[Q$2]).forEach((function(e,i){n.call(r,t.get(i),i,t);}));},o.get=function(n){var r=this[Q$2];u(r);var i=p(r).get(n);if(r.I||!t(i))return i;if(i!==r.t.get(n))return i;var o=N(r.A.h,i,r);return e(r),r.o.set(n,o),o},o.keys=function(){return p(this[Q$2]).keys()},o.values=function(){var n,r=this,t=this.keys();return (n={})[V$2]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},o.entries=function(){var n,r=this,t=this.keys();return (n={})[V$2]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return {done:!1,value:[n.value,e]}},n},o[V$2]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[Q$2]={i:3,l:r,A:r?r.A:_(),P:!1,I:!1,o:void 0,t:n,k:this,p:new Map,g:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return p(this[Q$2]).size}}),t.has=function(n){var r=this[Q$2];return u(r),r.o?!!r.o.has(n)||!(!r.p.has(n)||!r.o.has(r.p.get(n))):r.t.has(n)},t.add=function(n){var r=this[Q$2];return u(r),this.has(n)||(o(r),k(r),r.o.add(n)),this},t.delete=function(n){if(!this.has(n))return !1;var r=this[Q$2];return u(r),o(r),k(r),r.o.delete(n)||!!r.p.has(n)&&r.o.delete(r.p.get(n))},t.clear=function(){var n=this[Q$2];u(n),p(n).size&&(o(n),k(n),n.o.clear());},t.values=function(){var n=this[Q$2];return u(n),o(n),n.o.values()},t.entries=function(){var n=this[Q$2];return u(n),o(n),n.o.entries()},t.keys=function(){return this.values()},t[V$2]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next();},n}();m$1("MapSet",{F:function(n,r){return new f(n,r)},T:function(n,r){return new c(n,r)}});}var G$2,U$1,W$1="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),X$2="undefined"!=typeof Map,q$1="undefined"!=typeof Set,B$1="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,H=W$1?Symbol.for("immer-nothing"):((G$2={})["immer-nothing"]=!0,G$2),L=W$1?Symbol.for("immer-draftable"):"__$immer_draftable",Q$2=W$1?Symbol.for("immer-state"):"__$immer_state",V$2="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Y$2={0:"Illegal state",1:"Immer drafts cannot have computed properties",2:"This object has been frozen and should not be mutated",3:function(n){return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? "+n},4:"An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",5:"Immer forbids circular references",6:"The first or second argument to `produce` must be a function",7:"The third argument to `produce` must be a function or undefined",8:"First argument to `createDraft` must be a plain object, an array, or an immerable object",9:"First argument to `finishDraft` must be a draft returned by `createDraft`",10:"The given draft is already finalized",11:"Object.defineProperty() cannot be used on an Immer draft",12:"Object.setPrototypeOf() cannot be used on an Immer draft",13:"Immer only supports deleting array indices",14:"Immer only supports setting array indices and the 'length' property",15:function(n){return "Cannot apply patch, path doesn't resolve: "+n},16:'Sets cannot have "replace" patches.',17:function(n){return "Unsupported patch operation: "+n},18:function(n){return "The plugin for '"+n+"' has not been loaded into Immer. To enable the plugin, import and call `enable"+n+"()` when initializing your application."},20:"Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",21:function(n){return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '"+n+"'"},22:function(n){return "'current' expects a draft, got: "+n},23:function(n){return "'original' expects a draft, got: "+n},24:"Patching reserved attributes like __proto__, prototype and constructor is not allowed"},Z$2=""+Object.prototype.constructor,nn="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,rn=Object.getOwnPropertyDescriptors||function(n){var r={};return nn(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t);})),r},tn={},en={get:function(n,r){if(r===Q$2)return n;var e=p(n);if(!u(e,r))return function(n,r,t){var e,i=I(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.I||!t(i)?i:i===z$1(n.t,r)?(E(n),n.o[r]=N(n.A.h,i,n)):i},has:function(n,r){return r in p(n)},ownKeys:function(n){return Reflect.ownKeys(p(n))},set:function(n,r,t){var e=I(p(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.P){var i=z$1(p(n),r),o=null==i?void 0:i[Q$2];if(o&&o.t===t)return n.o[r]=t,n.R[r]=!1,!0;if(c(t,i)&&(void 0!==t||u(n.t,r)))return !0;E(n),k(n);}return n.o[r]===t&&(void 0!==t||r in n.o)||Number.isNaN(t)&&Number.isNaN(n.o[r])||(n.o[r]=t,n.R[r]=!0),!0},deleteProperty:function(n,r){return void 0!==z$1(n.t,r)||r in n.t?(n.R[r]=!1,E(n),k(n)):delete n.R[r],n.o&&delete n.o[r],!0},getOwnPropertyDescriptor:function(n,r){var t=p(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.i||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11);},getPrototypeOf:function(n){return Object.getPrototypeOf(n.t)},setPrototypeOf:function(){n(12);}},on={};i(en,(function(n,r){on[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)};})),on.deleteProperty=function(r,t){return "production"!==process.env.NODE_ENV&&isNaN(parseInt(t))&&n(13),on.set.call(this,r,t,void 0)},on.set=function(r,t,e){return "production"!==process.env.NODE_ENV&&"length"!==t&&isNaN(parseInt(t))&&n(14),en.set.call(this,r[0],t,e,r[0])};var un=function(){function e(r){var e=this;this.O=B$1,this.D=!0,this.produce=function(r,i,o){if("function"==typeof r&&"function"!=typeof i){var u=i;i=r;var a=e;return function(n){var r=this;void 0===n&&(n=u);for(var t=arguments.length,e=Array(t>1?t-1:0),o=1;o<t;o++)e[o-1]=arguments[o];return a.produce(n,(function(n){var t;return (t=i).call.apply(t,[r,n].concat(e))}))}}var f;if("function"!=typeof i&&n(6),void 0!==o&&"function"!=typeof o&&n(7),t(r)){var c=w(e),s=N(e,r,void 0),v=!0;try{f=i(s),v=!1;}finally{v?g(c):O$1(c);}return "undefined"!=typeof Promise&&f instanceof Promise?f.then((function(n){return j(c,o),P(n,c)}),(function(n){throw g(c),n})):(j(c,o),P(f,c))}if(!r||"object"!=typeof r){if(void 0===(f=i(r))&&(f=r),f===H&&(f=void 0),e.D&&d(f,!0),o){var p=[],l=[];b("Patches").M(r,f,p,l),o(p,l);}return f}n(21,r);},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),o=1;o<t;o++)i[o-1]=arguments[o];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,o=e.produce(n,r,(function(n,r){t=n,i=r;}));return "undefined"!=typeof Promise&&o instanceof Promise?o.then((function(n){return [n,t,i]})):[o,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze);}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=R$1(e));var i=w(this),o=N(this,e,void 0);return o[Q$2].C=!0,O$1(i),o},i.finishDraft=function(r,t){var e=r&&r[Q$2];"production"!==process.env.NODE_ENV&&(e&&e.C||n(9),e.I&&n(10));var i=e.A;return j(i,t),P(void 0,i)},i.setAutoFreeze=function(n){this.D=n;},i.setUseProxies=function(r){r&&!B$1&&n(20),this.O=r;},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var o=b("Patches").$;return r(n)?o(n,t):this.produce(n,(function(n){return o(n,t)}))},e}(),an=new un;an.produce;an.produceWithPatches.bind(an);an.setAutoFreeze.bind(an);an.setUseProxies.bind(an);var pn=an.applyPatches.bind(an);an.createDraft.bind(an);an.finishDraft.bind(an);

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */

function listCacheClear$1() {
  this.__data__ = [];
  this.size = 0;
}

var _listCacheClear = listCacheClear$1;

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */

function eq$2(value, other) {
  return value === other || (value !== value && other !== other);
}

var eq_1 = eq$2;

var eq$1 = eq_1;

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf$4(array, key) {
  var length = array.length;
  while (length--) {
    if (eq$1(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

var _assocIndexOf = assocIndexOf$4;

var assocIndexOf$3 = _assocIndexOf;

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete$1(key) {
  var data = this.__data__,
      index = assocIndexOf$3(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

var _listCacheDelete = listCacheDelete$1;

var assocIndexOf$2 = _assocIndexOf;

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet$1(key) {
  var data = this.__data__,
      index = assocIndexOf$2(data, key);

  return index < 0 ? undefined : data[index][1];
}

var _listCacheGet = listCacheGet$1;

var assocIndexOf$1 = _assocIndexOf;

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas$1(key) {
  return assocIndexOf$1(this.__data__, key) > -1;
}

var _listCacheHas = listCacheHas$1;

var assocIndexOf = _assocIndexOf;

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet$1(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

var _listCacheSet = listCacheSet$1;

var listCacheClear = _listCacheClear,
    listCacheDelete = _listCacheDelete,
    listCacheGet = _listCacheGet,
    listCacheHas = _listCacheHas,
    listCacheSet = _listCacheSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache$4(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache$4.prototype.clear = listCacheClear;
ListCache$4.prototype['delete'] = listCacheDelete;
ListCache$4.prototype.get = listCacheGet;
ListCache$4.prototype.has = listCacheHas;
ListCache$4.prototype.set = listCacheSet;

var _ListCache = ListCache$4;

var ListCache$3 = _ListCache;

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear$1() {
  this.__data__ = new ListCache$3;
  this.size = 0;
}

var _stackClear = stackClear$1;

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function stackDelete$1(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

var _stackDelete = stackDelete$1;

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */

function stackGet$1(key) {
  return this.__data__.get(key);
}

var _stackGet = stackGet$1;

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function stackHas$1(key) {
  return this.__data__.has(key);
}

var _stackHas = stackHas$1;

/** Detect free variable `global` from Node.js. */

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;

var freeGlobal = _freeGlobal;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$8 = freeGlobal || freeSelf || Function('return this')();

var _root = root$8;

var root$7 = _root;

/** Built-in value references. */
var Symbol$5 = root$7.Symbol;

var _Symbol = Symbol$5;

var Symbol$4 = _Symbol;

/** Used for built-in method references. */
var objectProto$b = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$8 = objectProto$b.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$b.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$4 ? Symbol$4.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$8.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString$1.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag$1;

/** Used for built-in method references. */

var objectProto$a = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$a.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString.call(value);
}

var _objectToString = objectToString$1;

var Symbol$3 = _Symbol,
    getRawTag = _getRawTag,
    objectToString = _objectToString;

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$3 ? Symbol$3.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$4(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$4;

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */

function isObject$2(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$2;

var baseGetTag$3 = _baseGetTag,
    isObject$1 = isObject_1;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag$1 = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$2(value) {
  if (!isObject$1(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag$3(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$2;

var root$6 = _root;

/** Used to detect overreaching core-js shims. */
var coreJsData$1 = root$6['__core-js_shared__'];

var _coreJsData = coreJsData$1;

var coreJsData = _coreJsData;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked$1(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

var _isMasked = isMasked$1;

/** Used for built-in method references. */

var funcProto$1 = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString$1 = funcProto$1.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource$2(func) {
  if (func != null) {
    try {
      return funcToString$1.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

var _toSource = toSource$2;

var isFunction$1 = isFunction_1,
    isMasked = _isMasked,
    isObject = isObject_1,
    toSource$1 = _toSource;

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto$9 = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty$7 = objectProto$9.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty$7).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative$1(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction$1(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource$1(value));
}

var _baseIsNative = baseIsNative$1;

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */

function getValue$1(object, key) {
  return object == null ? undefined : object[key];
}

var _getValue = getValue$1;

var baseIsNative = _baseIsNative,
    getValue = _getValue;

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative$7(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

var _getNative = getNative$7;

var getNative$6 = _getNative,
    root$5 = _root;

/* Built-in method references that are verified to be native. */
var Map$4 = getNative$6(root$5, 'Map');

var _Map = Map$4;

var getNative$5 = _getNative;

/* Built-in method references that are verified to be native. */
var nativeCreate$4 = getNative$5(Object, 'create');

var _nativeCreate = nativeCreate$4;

var nativeCreate$3 = _nativeCreate;

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear$1() {
  this.__data__ = nativeCreate$3 ? nativeCreate$3(null) : {};
  this.size = 0;
}

var _hashClear = hashClear$1;

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */

function hashDelete$1(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

var _hashDelete = hashDelete$1;

var nativeCreate$2 = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$2 = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto$8 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$6 = objectProto$8.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet$1(key) {
  var data = this.__data__;
  if (nativeCreate$2) {
    var result = data[key];
    return result === HASH_UNDEFINED$2 ? undefined : result;
  }
  return hasOwnProperty$6.call(data, key) ? data[key] : undefined;
}

var _hashGet = hashGet$1;

var nativeCreate$1 = _nativeCreate;

/** Used for built-in method references. */
var objectProto$7 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$5 = objectProto$7.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas$1(key) {
  var data = this.__data__;
  return nativeCreate$1 ? (data[key] !== undefined) : hasOwnProperty$5.call(data, key);
}

var _hashHas = hashHas$1;

var nativeCreate = _nativeCreate;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED$1 = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet$1(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED$1 : value;
  return this;
}

var _hashSet = hashSet$1;

var hashClear = _hashClear,
    hashDelete = _hashDelete,
    hashGet = _hashGet,
    hashHas = _hashHas,
    hashSet = _hashSet;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash$1(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash$1.prototype.clear = hashClear;
Hash$1.prototype['delete'] = hashDelete;
Hash$1.prototype.get = hashGet;
Hash$1.prototype.has = hashHas;
Hash$1.prototype.set = hashSet;

var _Hash = Hash$1;

var Hash = _Hash,
    ListCache$2 = _ListCache,
    Map$3 = _Map;

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear$1() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map$3 || ListCache$2),
    'string': new Hash
  };
}

var _mapCacheClear = mapCacheClear$1;

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */

function isKeyable$1(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

var _isKeyable = isKeyable$1;

var isKeyable = _isKeyable;

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData$4(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

var _getMapData = getMapData$4;

var getMapData$3 = _getMapData;

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete$1(key) {
  var result = getMapData$3(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

var _mapCacheDelete = mapCacheDelete$1;

var getMapData$2 = _getMapData;

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet$1(key) {
  return getMapData$2(this, key).get(key);
}

var _mapCacheGet = mapCacheGet$1;

var getMapData$1 = _getMapData;

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas$1(key) {
  return getMapData$1(this, key).has(key);
}

var _mapCacheHas = mapCacheHas$1;

var getMapData = _getMapData;

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet$1(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

var _mapCacheSet = mapCacheSet$1;

var mapCacheClear = _mapCacheClear,
    mapCacheDelete = _mapCacheDelete,
    mapCacheGet = _mapCacheGet,
    mapCacheHas = _mapCacheHas,
    mapCacheSet = _mapCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache$2(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache$2.prototype.clear = mapCacheClear;
MapCache$2.prototype['delete'] = mapCacheDelete;
MapCache$2.prototype.get = mapCacheGet;
MapCache$2.prototype.has = mapCacheHas;
MapCache$2.prototype.set = mapCacheSet;

var _MapCache = MapCache$2;

var ListCache$1 = _ListCache,
    Map$2 = _Map,
    MapCache$1 = _MapCache;

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet$1(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache$1) {
    var pairs = data.__data__;
    if (!Map$2 || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache$1(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

var _stackSet = stackSet$1;

var ListCache = _ListCache,
    stackClear = _stackClear,
    stackDelete = _stackDelete,
    stackGet = _stackGet,
    stackHas = _stackHas,
    stackSet = _stackSet;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack$1(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack$1.prototype.clear = stackClear;
Stack$1.prototype['delete'] = stackDelete;
Stack$1.prototype.get = stackGet;
Stack$1.prototype.has = stackHas;
Stack$1.prototype.set = stackSet;

var _Stack = Stack$1;

/** Used to stand-in for `undefined` hash values. */

var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd$1(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

var _setCacheAdd = setCacheAdd$1;

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */

function setCacheHas$1(value) {
  return this.__data__.has(value);
}

var _setCacheHas = setCacheHas$1;

var MapCache = _MapCache,
    setCacheAdd = _setCacheAdd,
    setCacheHas = _setCacheHas;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache$1(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache$1.prototype.add = SetCache$1.prototype.push = setCacheAdd;
SetCache$1.prototype.has = setCacheHas;

var _SetCache = SetCache$1;

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */

function arraySome$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

var _arraySome = arraySome$1;

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */

function cacheHas$1(cache, key) {
  return cache.has(key);
}

var _cacheHas = cacheHas$1;

var SetCache = _SetCache,
    arraySome = _arraySome,
    cacheHas = _cacheHas;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$3 = 1,
    COMPARE_UNORDERED_FLAG$1 = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays$2(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$3,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG$1) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

var _equalArrays = equalArrays$2;

var root$4 = _root;

/** Built-in value references. */
var Uint8Array$1 = root$4.Uint8Array;

var _Uint8Array = Uint8Array$1;

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */

function mapToArray$1(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

var _mapToArray = mapToArray$1;

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */

function setToArray$1(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

var _setToArray = setToArray$1;

var Symbol$2 = _Symbol,
    Uint8Array = _Uint8Array,
    eq = eq_1,
    equalArrays$1 = _equalArrays,
    mapToArray = _mapToArray,
    setToArray = _setToArray;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$2 = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag$1 = '[object Boolean]',
    dateTag$1 = '[object Date]',
    errorTag$1 = '[object Error]',
    mapTag$2 = '[object Map]',
    numberTag$1 = '[object Number]',
    regexpTag$1 = '[object RegExp]',
    setTag$2 = '[object Set]',
    stringTag$1 = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag$1 = '[object ArrayBuffer]',
    dataViewTag$2 = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto$1 = Symbol$2 ? Symbol$2.prototype : undefined,
    symbolValueOf = symbolProto$1 ? symbolProto$1.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag$1(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag$2:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag$1:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag$1:
    case dateTag$1:
    case numberTag$1:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag$1:
      return object.name == other.name && object.message == other.message;

    case regexpTag$1:
    case stringTag$1:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag$2:
      var convert = mapToArray;

    case setTag$2:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG$2;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays$1(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

var _equalByTag = equalByTag$1;

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */

function arrayPush$1(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

var _arrayPush = arrayPush$1;

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */

var isArray$3 = Array.isArray;

var isArray_1 = isArray$3;

var arrayPush = _arrayPush,
    isArray$2 = isArray_1;

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys$1(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray$2(object) ? result : arrayPush(result, symbolsFunc(object));
}

var _baseGetAllKeys = baseGetAllKeys$1;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */

function arrayFilter$1(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

var _arrayFilter = arrayFilter$1;

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */

function stubArray$1() {
  return [];
}

var stubArray_1 = stubArray$1;

var arrayFilter = _arrayFilter,
    stubArray = stubArray_1;

/** Used for built-in method references. */
var objectProto$6 = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable$1 = objectProto$6.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols$1 = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable$1.call(object, symbol);
  });
};

var _getSymbols = getSymbols$1;

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */

function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes$1;

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */

function isObjectLike$4(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$4;

var baseGetTag$2 = _baseGetTag,
    isObjectLike$3 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$2 = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments$1(value) {
  return isObjectLike$3(value) && baseGetTag$2(value) == argsTag$2;
}

var _baseIsArguments = baseIsArguments$1;

var baseIsArguments = _baseIsArguments,
    isObjectLike$2 = isObjectLike_1;

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$5.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$5.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments$1 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike$2(value) && hasOwnProperty$4.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments$1;

var isBufferExports = {};
var isBuffer$2 = {
  get exports(){ return isBufferExports; },
  set exports(v){ isBufferExports = v; },
};

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */

function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;

(function (module, exports) {
	var root = _root,
	    stubFalse = stubFalse_1;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = nativeIsBuffer || stubFalse;

	module.exports = isBuffer;
} (isBuffer$2, isBufferExports));

/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER$1 = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex$1(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER$1 : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex$1;

/** Used as references for various `Number` constants. */

var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$2(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

var isLength_1 = isLength$2;

var baseGetTag$1 = _baseGetTag,
    isLength$1 = isLength_1,
    isObjectLike$1 = isObjectLike_1;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]',
    arrayTag$1 = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag$1 = '[object Map]',
    numberTag = '[object Number]',
    objectTag$2 = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag$1 = '[object Set]',
    stringTag = '[object String]',
    weakMapTag$1 = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag$1 = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag$1] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag$1] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag$1] = typedArrayTags[numberTag] =
typedArrayTags[objectTag$2] = typedArrayTags[regexpTag] =
typedArrayTags[setTag$1] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag$1] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray$1(value) {
  return isObjectLike$1(value) &&
    isLength$1(value.length) && !!typedArrayTags[baseGetTag$1(value)];
}

var _baseIsTypedArray = baseIsTypedArray$1;

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */

function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary$1;

var _nodeUtilExports = {};
var _nodeUtil = {
  get exports(){ return _nodeUtilExports; },
  set exports(v){ _nodeUtilExports = v; },
};

(function (module, exports) {
	var freeGlobal = _freeGlobal;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Detect free variable `process` from Node.js. */
	var freeProcess = moduleExports && freeGlobal.process;

	/** Used to access faster Node.js helpers. */
	var nodeUtil = (function() {
	  try {
	    // Use `util.types` for Node.js 10+.
	    var types = freeModule && freeModule.require && freeModule.require('util').types;

	    if (types) {
	      return types;
	    }

	    // Legacy `process.binding('util')` for Node.js < 10.
	    return freeProcess && freeProcess.binding && freeProcess.binding('util');
	  } catch (e) {}
	}());

	module.exports = nodeUtil;
} (_nodeUtil, _nodeUtilExports));

var baseIsTypedArray = _baseIsTypedArray,
    baseUnary = _baseUnary,
    nodeUtil$2 = _nodeUtilExports;

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil$2 && nodeUtil$2.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray$2 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

var isTypedArray_1 = isTypedArray$2;

var baseTimes = _baseTimes,
    isArguments = isArguments_1,
    isArray$1 = isArray_1,
    isBuffer$1 = isBufferExports,
    isIndex = _isIndex,
    isTypedArray$1 = isTypedArray_1;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$4.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$1(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer$1(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray$1(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$3.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys$1;

/** Used for built-in method references. */

var objectProto$3 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$1(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$3;

  return value === proto;
}

var _isPrototype = isPrototype$1;

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */

function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg$1;

var overArg = _overArg;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys$1 = overArg(Object.keys, Object);

var _nativeKeys = nativeKeys$1;

var isPrototype = _isPrototype,
    nativeKeys = _nativeKeys;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$2.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$2.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys$1;

var isFunction = isFunction_1,
    isLength = isLength_1;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$1(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

var isArrayLike_1 = isArrayLike$1;

var arrayLikeKeys = _arrayLikeKeys,
    baseKeys = _baseKeys,
    isArrayLike = isArrayLike_1;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$1(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

var keys_1 = keys$1;

var baseGetAllKeys = _baseGetAllKeys,
    getSymbols = _getSymbols,
    keys = keys_1;

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys$1(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

var _getAllKeys = getAllKeys$1;

var getAllKeys = _getAllKeys;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG$1 = 1;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto$1.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects$1(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG$1,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty$1.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

var _equalObjects = equalObjects$1;

var getNative$4 = _getNative,
    root$3 = _root;

/* Built-in method references that are verified to be native. */
var DataView$1 = getNative$4(root$3, 'DataView');

var _DataView = DataView$1;

var getNative$3 = _getNative,
    root$2 = _root;

/* Built-in method references that are verified to be native. */
var Promise$2 = getNative$3(root$2, 'Promise');

var _Promise = Promise$2;

var getNative$2 = _getNative,
    root$1 = _root;

/* Built-in method references that are verified to be native. */
var Set$2 = getNative$2(root$1, 'Set');

var _Set = Set$2;

var getNative$1 = _getNative,
    root = _root;

/* Built-in method references that are verified to be native. */
var WeakMap$2 = getNative$1(root, 'WeakMap');

var _WeakMap = WeakMap$2;

var DataView = _DataView,
    Map$1 = _Map,
    Promise$1 = _Promise,
    Set$1 = _Set,
    WeakMap$1 = _WeakMap,
    baseGetTag = _baseGetTag,
    toSource = _toSource;

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag$1 = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map$1),
    promiseCtorString = toSource(Promise$1),
    setCtorString = toSource(Set$1),
    weakMapCtorString = toSource(WeakMap$1);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag$1 = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag$1(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map$1 && getTag$1(new Map$1) != mapTag) ||
    (Promise$1 && getTag$1(Promise$1.resolve()) != promiseTag) ||
    (Set$1 && getTag$1(new Set$1) != setTag) ||
    (WeakMap$1 && getTag$1(new WeakMap$1) != weakMapTag)) {
  getTag$1 = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag$1 ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

var _getTag = getTag$1;

var Stack = _Stack,
    equalArrays = _equalArrays,
    equalByTag = _equalByTag,
    equalObjects = _equalObjects,
    getTag = _getTag,
    isArray = isArray_1,
    isBuffer = isBufferExports,
    isTypedArray = isTypedArray_1;

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep$1(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

var _baseIsEqualDeep = baseIsEqualDeep$1;

var baseIsEqualDeep = _baseIsEqualDeep,
    isObjectLike = isObjectLike_1;

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual$1(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual$1, stack);
}

var _baseIsEqual = baseIsEqual$1;

var baseIsEqual = _baseIsEqual;

/**
 * This method is like `_.isEqual` except that it accepts `customizer` which
 * is invoked to compare values. If `customizer` returns `undefined`, comparisons
 * are handled by the method instead. The `customizer` is invoked with up to
 * six arguments: (objValue, othValue [, index|key, object, other, stack]).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * function isGreeting(value) {
 *   return /^h(?:i|ello)$/.test(value);
 * }
 *
 * function customizer(objValue, othValue) {
 *   if (isGreeting(objValue) && isGreeting(othValue)) {
 *     return true;
 *   }
 * }
 *
 * var array = ['hello', 'goodbye'];
 * var other = ['hi', 'goodbye'];
 *
 * _.isEqualWith(array, other, customizer);
 * // => true
 */
function isEqualWith(value, other, customizer) {
  customizer = typeof customizer == 'function' ? customizer : undefined;
  var result = customizer ? customizer(value, other) : undefined;
  return result === undefined ? baseIsEqual(value, other, undefined, customizer) : !!result;
}

var isEqualWith_1 = isEqualWith;

//

var shallowequal = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};

let urlAlphabet =
  'useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict';

const POOL_SIZE_MULTIPLIER = 128;
let pool, poolOffset;
let fillPool = bytes => {
  if (!pool || pool.length < bytes) {
    pool = Buffer.allocUnsafe(bytes * POOL_SIZE_MULTIPLIER);
    crypto__default["default"].randomFillSync(pool);
    poolOffset = 0;
  } else if (poolOffset + bytes > pool.length) {
    crypto__default["default"].randomFillSync(pool);
    poolOffset = 0;
  }
  poolOffset += bytes;
};
let nanoid = (size = 21) => {
  fillPool((size -= 0));
  let id = '';
  for (let i = poolOffset - size; i < poolOffset; i++) {
    id += urlAlphabet[pool[i] & 63];
  }
  return id
};

var isProduction = process.env.NODE_ENV === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    var provided = typeof message === 'function' ? message() : message;
    var value = provided ? "".concat(prefix, ": ").concat(provided) : prefix;
    throw new Error(value);
}

var m="ROOT",O="Node does not exist, it may have been removed",R='A <Element /> that is used inside a User Component must specify an `id` prop, eg: <Element id="text_element">...</Element> ',q="You can only use useEditor in the context of <Editor />. \n\nPlease only use useEditor in components that are children of the <Editor /> component.",B="You can only use useNode in the context of <Editor />. \n\nPlease only use useNode in components that are children of the <Editor /> component.";function G$1(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Y$1(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G$1(Object(n),!0).forEach((function(t){$(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G$1(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function W(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,oe$1(r.key),r);}}function F(e,t,n){return t&&z(e.prototype,t),n&&z(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function $(e,t,n){return (t=oe$1(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},J(e)}function K$1(e,t){return K$1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},K$1(e,t)}function Q$1(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function V$1(){return V$1="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=J(e)););return e}(e,t);if(r){var i=Object.getOwnPropertyDescriptor(r,t);return i.get?i.get.call(arguments.length<3?e:n):i.value}},V$1.apply(this,arguments)}function X$1(e,t){return ee$1(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,o,a,c=[],u=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1;}else for(;!(u=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){s=!0,i=e;}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(s)throw i}}return c}}(e,t)||ne$1(e,t)||ie$1()}function Z$1(e){return function(e){if(Array.isArray(e))return re$1(e)}(e)||te$1(e)||ne$1(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ee$1(e){if(Array.isArray(e))return e}function te$1(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function ne$1(e,t){if(e){if("string"==typeof e)return re$1(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?re$1(e,t):void 0}}function re$1(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ie$1(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function oe$1(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"==typeof t?t:String(t)}(function(){function e(){W(this,e),$(this,"timeline",[]),$(this,"pointer",-1);}return F(e,[{key:"add",value:function(e,t){0===e.length&&0===t.length||(this.pointer=this.pointer+1,this.timeline.length=this.pointer,this.timeline[this.pointer]={patches:e,inversePatches:t,timestamp:Date.now()});}},{key:"throttleAdd",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500;if(0!==e.length||0!==t.length){if(this.timeline.length&&this.pointer>=0){var r=this.timeline[this.pointer],i=r.patches,o=r.inversePatches,a=r.timestamp;if((new Date).getTime()-a<n)return void(this.timeline[this.pointer]={timestamp:a,patches:[].concat(Z$1(i),Z$1(e)),inversePatches:[].concat(Z$1(t),Z$1(o))})}this.add(e,t);}}},{key:"merge",value:function(e,t){if(0!==e.length||0!==t.length)if(this.timeline.length&&this.pointer>=0){var n=this.timeline[this.pointer],r=n.inversePatches;this.timeline[this.pointer]={timestamp:n.timestamp,patches:[].concat(Z$1(n.patches),Z$1(e)),inversePatches:[].concat(Z$1(t),Z$1(r))};}else this.add(e,t);}},{key:"clear",value:function(){this.timeline=[],this.pointer=-1;}},{key:"canUndo",value:function(){return this.pointer>=0}},{key:"canRedo",value:function(){return this.pointer<this.timeline.length-1}},{key:"undo",value:function(e){if(this.canUndo()){var n=this.timeline[this.pointer].inversePatches;return this.pointer=this.pointer-1,pn(e,n)}}},{key:"redo",value:function(e){if(this.canRedo())return this.pointer=this.pointer+1,pn(e,this.timeline[this.pointer].patches)}}]),e})();C(),T();(function(){function e(t){W(this,e),$(this,"getState",void 0),$(this,"subscribers",[]),this.getState=t;}return F(e,[{key:"subscribe",value:function(e,t,n){var r=this,i=new fe$1((function(){return e(r.getState())}),t,n);return this.subscribers.push(i),this.unsubscribe.bind(this,i)}},{key:"unsubscribe",value:function(e){if(this.subscribers.length){var t=this.subscribers.indexOf(e);if(t>-1)return this.subscribers.splice(t,1)}}},{key:"notify",value:function(){this.subscribers.forEach((function(e){return e.collect()}));}}]),e})();var fe$1=function(){function e(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];W(this,e),$(this,"collected",void 0),$(this,"collector",void 0),$(this,"onChange",void 0),$(this,"id",void 0),this.collector=t,this.onChange=n,r&&this.collect();}return F(e,[{key:"collect",value:function(){try{var e=this.collector();isEqualWith_1(e,this.collected)||(this.collected=e,this.onChange&&this.onChange(this.collected));}catch(e){console.warn(e);}}}]),e}(),de$1=function(e){var t=e.getBoundingClientRect(),n=t.x,r=t.y,i=t.top,o=t.left,a=t.bottom,c=t.right,u=t.width,s=t.height,l=window.getComputedStyle(e),f={left:parseInt(l.marginLeft),right:parseInt(l.marginRight),bottom:parseInt(l.marginBottom),top:parseInt(l.marginTop)},d={left:parseInt(l.paddingLeft),right:parseInt(l.paddingRight),bottom:parseInt(l.paddingBottom),top:parseInt(l.paddingTop)};return {x:n,y:r,top:i,left:o,bottom:a,right:c,width:u,height:s,outerWidth:Math.round(u+f.left+f.right),outerHeight:Math.round(s+f.top+f.bottom),margin:f,padding:d,inFlow:e.parentElement&&!!function(t){var n=getComputedStyle(t);if(!(l.overflow&&"visible"!==l.overflow||"none"!==n.float||"grid"===n.display||"flex"===n.display&&"column"!==n["flex-direction"])){switch(l.position){case"static":case"relative":break;default:return}switch(e.tagName){case"TR":case"TBODY":case"THEAD":case"TFOOT":return !0}switch(l.display){case"block":case"list-item":case"table":case"flex":case"grid":return !0}}}(e.parentElement)}};function he$1(e,t){const{subscribe:n,getState:r,actions:i,query:o}=e,a=React.useRef(!0),c=React.useRef(null),d=React.useRef(t);d.current=t;const h=React.useCallback((e=>({...e,actions:i,query:o})),[i,o]);a.current&&t&&(c.current=t(r(),o),a.current=!1);const[p,y]=React.useState(h(c.current));return React.useEffect((()=>{let e;return d.current&&(e=n((e=>d.current(e,o)),(e=>{y(h(e));}))),()=>{e&&e();}}),[h,o,n]),p}var pe$1,ye$1=function(){return nanoid(arguments.length>0&&void 0!==arguments[0]?arguments[0]:10)},ve$1=function(){function e(){W(this,e),$(this,"isEnabled",!0),$(this,"elementIdMap",new WeakMap),$(this,"registry",new Map);}return F(e,[{key:"getElementId",value:function(e){var t=this.elementIdMap.get(e);if(t)return t;var n=ye$1();return this.elementIdMap.set(e,n),n}},{key:"getConnectorId",value:function(e,t){var n=this.getElementId(e);return "".concat(t,"--").concat(n)}},{key:"register",value:function(e,t){var n=this,r=this.getByElement(e,t.name);if(r){if(shallowequal(t.required,r.required))return r;this.getByElement(e,t.name).disable();}var i=null,o=this.getConnectorId(e,t.name);return this.registry.set(o,{id:o,required:t.required,enable:function(){i&&i(),i=t.connector(e,t.required,t.options);},disable:function(){i&&i();},remove:function(){return n.remove(o)}}),this.isEnabled&&this.registry.get(o).enable(),this.registry.get(o)}},{key:"get",value:function(e){return this.registry.get(e)}},{key:"remove",value:function(e){var t=this.get(e);t&&(t.disable(),this.registry.delete(t.id));}},{key:"enable",value:function(){this.isEnabled=!0,this.registry.forEach((function(e){e.enable();}));}},{key:"disable",value:function(){this.isEnabled=!1,this.registry.forEach((function(e){e.disable();}));}},{key:"getByElement",value:function(e,t){return this.get(this.getConnectorId(e,t))}},{key:"removeByElement",value:function(e,t){return this.remove(this.getConnectorId(e,t))}},{key:"clear",value:function(){this.disable(),this.elementIdMap=new WeakMap,this.registry=new Map;}}]),e}();!function(e){e[e.HandlerDisabled=0]="HandlerDisabled",e[e.HandlerEnabled=1]="HandlerEnabled";}(pe$1||(pe$1={}));var be$1=function(){function e(t){W(this,e),$(this,"options",void 0),$(this,"registry",new ve$1),$(this,"subscribers",new Set),this.options=t;}return F(e,[{key:"listen",value:function(e){var t=this;return this.subscribers.add(e),function(){return t.subscribers.delete(e)}}},{key:"disable",value:function(){this.onDisable&&this.onDisable(),this.registry.disable(),this.subscribers.forEach((function(e){e(pe$1.HandlerDisabled);}));}},{key:"enable",value:function(){this.onEnable&&this.onEnable(),this.registry.enable(),this.subscribers.forEach((function(e){e(pe$1.HandlerEnabled);}));}},{key:"cleanup",value:function(){this.disable(),this.subscribers.clear(),this.registry.clear();}},{key:"addCraftEventListener",value:function(e,t,n,r){var i=function(r){(function(e,t,n){e.craft||(e.craft={stopPropagation:function(){},blockedEvents:{}});for(var r=e.craft&&e.craft.blockedEvents[t]||[],i=0;i<r.length;i++){var o=r[i];if(n!==o&&n.contains(o))return !0}return !1})(r,t,e)||(r.craft.stopPropagation=function(){r.craft.blockedEvents[t]||(r.craft.blockedEvents[t]=[]),r.craft.blockedEvents[t].push(e);},n(r));};return e.addEventListener(t,i,r),function(){return e.removeEventListener(t,i,r)}}},{key:"createConnectorsUsage",value:function(){var e=this,t=this.handlers(),n=new Set,r=!1,i=new Map;return {connectors:Object.entries(t).reduce((function(t,o){var a=X$1(o,2),c=a[0],u=a[1];return Y$1(Y$1({},t),{},$({},c,(function(t,o,a){var s=function(){var r=e.registry.register(t,{required:o,name:c,options:a,connector:u});return n.add(r.id),r};return i.set(e.registry.getConnectorId(t,c),s),r&&s(),t})))}),{}),register:function(){r=!0,i.forEach((function(e){e();}));},cleanup:function(){r=!1,n.forEach((function(t){return e.registry.remove(t)}));}}}},{key:"derive",value:function(e,t){return new e(this,t)}},{key:"createProxyHandlers",value:function(e,t){var n=[],r=e.handlers(),i=new Proxy(r,{get:function(e,t,i){return t in r==0?Reflect.get(e,t,i):function(e){for(var i=arguments.length,o=new Array(i>1?i-1:0),a=1;a<i;a++)o[a-1]=arguments[a];var c=r[t].apply(r,[e].concat(o));c&&n.push(c);}}});return t(i),function(){n.forEach((function(e){e();}));}}},{key:"reflect",value:function(e){return this.createProxyHandlers(this,e)}}]),e}(),me$1=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&K$1(e,t);}(i,be$1);var t,n,r=(t=i,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return !1}}(),function(){var e,r=J(t);if(n){var i=J(this).constructor;e=Reflect.construct(r,arguments,i);}else e=r.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Q$1(e)}(this,e)});function i(e,t){var n;return W(this,i),$(Q$1(n=r.call(this,t)),"derived",void 0),$(Q$1(n),"unsubscribeParentHandlerListener",void 0),n.derived=e,n.options=t,n.unsubscribeParentHandlerListener=n.derived.listen((function(e){switch(e){case pe$1.HandlerEnabled:return n.enable();case pe$1.HandlerDisabled:return n.disable();default:return}})),n}return F(i,[{key:"inherit",value:function(e){return this.createProxyHandlers(this.derived,e)}},{key:"cleanup",value:function(){V$1(J(i.prototype),"cleanup",this).call(this),this.unsubscribeParentHandlerListener();}}]),i}();function ge$1(e,t){t&&("function"==typeof e?e(t):e.current=t);}function Ee$1(e,t){const n=e.ref;return invariant("string"!=typeof n,"Cannot connect to an element with an existing string ref. Please convert it to use a callback ref instead, or wrap it into a <span> or <div>. Read more: https://facebook.github.io/react/docs/more-about-refs.html#the-ref-callback-attribute"),React.cloneElement(e,n?{ref:e=>{ge$1(n,e),ge$1(t,e);}}:{ref:t})}function we(e){return (t=null,...n)=>{if(!React.isValidElement(t)){if(!t)return;const r=t;return r&&e(r,...n),r}const r=t;return function(e){if("string"!=typeof e.type)throw new Error}(r),Ee$1(r,e)}}function Oe$1(e){return Object.keys(e).reduce(((t,n)=>(t[n]=we(((...t)=>e[n](...t))),t)),{})}const ke=e=>{React.useEffect(e,[]);};var Pe=function(e,t){var n="Deprecation warning: ".concat(e," will be deprecated in future relases."),r=t.suggest,i=t.doc;r&&(n+=" Please use ".concat(r," instead.")),i&&(n+="(".concat(i,")")),console.warn(n);},je$1=function(){return "undefined"!=typeof window},Te$1=function(){return je$1()&&/Linux/i.test(window.navigator.userAgent)},Ie$1=function(){return je$1()&&/Chrome/i.test(window.navigator.userAgent)};

var getNative = _getNative;

((function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
})());

var _cloneBufferExports = {};
var _cloneBuffer = {
  get exports(){ return _cloneBufferExports; },
  set exports(v){ _cloneBufferExports = v; },
};

(function (module, exports) {
	var root = _root;

	/** Detect free variable `exports`. */
	var freeExports = exports && !exports.nodeType && exports;

	/** Detect free variable `module`. */
	var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = freeModule && freeModule.exports === freeExports;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined,
	    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var length = buffer.length,
	      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;
} (_cloneBuffer, _cloneBufferExports));

var Symbol$1 = _Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol$1 ? Symbol$1.prototype : undefined;
    symbolProto ? symbolProto.valueOf : undefined;

var nodeUtil$1 = _nodeUtilExports;

/* Node.js helper references. */
nodeUtil$1 && nodeUtil$1.isMap;

var nodeUtil = _nodeUtilExports;

/* Node.js helper references. */
nodeUtil && nodeUtil.isSet;

const U=React__default["default"].createContext(null),V=({id:e,related:t=!1,children:n})=>React__default["default"].createElement(U.Provider,{value:{id:e,related:t}},n);function X(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?X(Object(n),!0).forEach((function(t){ee(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):X(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function G(e){return G="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(e)}function K(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Q(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,ue(r.key),r);}}function Z(e,t,n){return t&&Q(e.prototype,t),n&&Q(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t,n){return (t=ue(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function te(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&re(e,t);}function ne(e){return ne=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},ne(e)}function re(e,t){return re=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},re(e,t)}function oe(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}function ae(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ie(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return !1;if(Reflect.construct.sham)return !1;if("function"==typeof Proxy)return !0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return !1}}();return function(){var n,r=ne(e);if(t){var o=ne(this).constructor;n=Reflect.construct(r,arguments,o);}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"==typeof t||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ae(e)}(this,n)}}function se(e){return function(e){if(Array.isArray(e))return ce(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||de(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(e,t){if(e){if("string"==typeof e)return ce(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ce(e,t):void 0}}function ce(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ue(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"==typeof t?t:String(t)}const le=React.createContext(null);var fe=React.createContext(null),pe=function(){return React.useContext(fe)};function ve(r){var o=pe(),a=React.useContext(le);invariant(a,q);var i=he$1(a,r),s=React.useMemo((function(){return o&&o.createConnectorsUsage()}),[o]);React.useEffect((function(){return s.register(),function(){s.cleanup();}}),[s]);var d=React.useMemo((function(){return s&&Oe$1(s.connectors)}),[s]);return Y(Y({},i),{},{connectors:d,inContext:!!a,store:a})}var he=["actions","query","connectors"];function ye(e){var t=React.useContext(U);invariant(t,B);var o=t.id,a=t.related,i=ve((function(t){return o&&t.nodes[o]&&e&&e(t.nodes[o])})),s=i.actions,d=i.connectors,c=oe(i,he),u=React.useMemo((function(){return Oe$1({connect:function(e){return d.connect(e,o)},drag:function(e){return d.drag(e,o)}})}),[d,o]),l=React.useMemo((function(){return {setProp:function(e,t){t?s.history.throttle(t).setProp(o,e):s.setProp(o,e);},setCustom:function(e,t){t?s.history.throttle(t).setCustom(o,e):s.setCustom(o,e);},setHidden:function(e){return s.setHidden(o,e)}}}),[s,o]);return Y(Y({},c),{},{id:o,related:a,inNodeContext:!!t,actions:l,connectors:u})}var ge=["id","related","actions","inNodeContext","connectors"];function me(e){var t=ye(e),n=t.id,r=t.related,a=t.actions,i=t.inNodeContext,s=t.connectors;return Y(Y({},oe(t,ge)),{},{actions:a,id:n,related:r,setProp:function(e,t){return Pe("useNode().setProp()",{suggest:"useNode().actions.setProp()"}),a.setProp(e,t)},inNodeContext:i,connectors:s})}const Ne=({render:e})=>{const{connectors:{connect:t,drag:n}}=me();return "string"==typeof e.type?t(n(React__default["default"].cloneElement(e))):e},be=()=>{const{type:e,props:t,nodes:n,hydrationTimestamp:r}=ye((e=>({type:e.data.type,props:e.data.props,nodes:e.data.nodes,hydrationTimestamp:e._hydrationTimestamp})));return React.useMemo((()=>{let r=t.children;n&&n.length>0&&(r=React__default["default"].createElement(React__default["default"].Fragment,null,n.map((e=>React__default["default"].createElement(Oe,{id:e,key:e})))));const o=React__default["default"].createElement(e,t,r);return "string"==typeof e?React__default["default"].createElement(Ne,{render:o}):o}),[e,t,r,n])},Ee=({render:e})=>{const{hidden:t}=ye((e=>({hidden:e.data.hidden}))),{onRender:n}=ve((e=>({onRender:e.options.onRender})));return t?null:React__default["default"].createElement(n,{render:e||React__default["default"].createElement(be,null)})},Oe=({id:e,render:t})=>React__default["default"].createElement(V,{id:e},React__default["default"].createElement(Ee,{render:t})),Te={is:"div",canvas:!1,custom:{},hidden:!1};function Ce({id:e,children:t,...n}){const{is:r}={...Te,...n},{query:o,actions:s}=ve(),{node:d,inNodeContext:c}=ye((e=>({node:{id:e.id,data:e.data}}))),[u,l]=React.useState(null);return ke((()=>{invariant(!!e,R);const{id:a,data:u}=d;if(c){let i;const d=u.linkedNodes&&u.linkedNodes[e]&&o.node(u.linkedNodes[e]).get();if(d&&d.data.type===r)i=d.id;else {const r=React__default["default"].createElement(Ce,n,t),d=o.parseReactElement(r).toNodeTree();i=d.rootNodeId,s.history.ignore().addLinkedNodeFromTree(d,a,e);}l(i);}})),u?React__default["default"].createElement(Oe,{id:u}):null}const je=()=>{const{timestamp:e}=ve((e=>({timestamp:e.nodes[m]&&e.nodes[m]._hydrationTimestamp})));return e?React__default["default"].createElement(Oe,{id:m,key:e}):null},Se=({children:e,json:t,data:n})=>{const{actions:r,query:a}=ve();t&&Pe("<Frame json={...} />",{suggest:"<Frame data={...} />"});const i=React.useRef({initialChildren:e,initialData:n||t}),d=React.useRef(!1);return React.useEffect((()=>{const{initialChildren:e,initialData:t}=i.current;if(t)return void r.history.ignore().deserialize(t);if(!e||d.current)return;const n=React__default["default"].Children.only(e),o=a.parseReactElement(n).toNodeTree(((e,t)=>(t===n&&(e.id=m),e)));r.history.ignore().addNodeTree(o),d.current=!0;}),[r,a]),React__default["default"].createElement(je,null)};var De;!function(e){e[e.Any=0]="Any",e[e.Id=1]="Id",e[e.Obj=2]="Obj";}(De||(De={}));const Ie=e=>{const{addLinkedNodeFromTree:t,setDOM:n,setNodeEvent:r,replaceNodes:o,reset:a,...i}=e;return i};function xe(e){const{connectors:t,actions:n,query:r,store:o,...a}=ve(e),i=Ie(n);return {connectors:t,actions:React.useMemo((()=>({...i,history:{...i.history,ignore:(...e)=>Ie(i.history.ignore(...e)),throttle:(...e)=>Ie(i.history.throttle(...e))}})),[i]),query:r,store:o,...a}}var Re=function(e,t,n){var r=Array.isArray(t)?t:[t],o=Y({existOnly:!1,idOnly:!1},n||{}),a=r.filter((function(e){return !!e})).map((function(t){return "string"==typeof t?{node:e[t],exists:!!e[t]}:"object"!==G(t)||o.idOnly?{node:null,exists:!1}:{node:t,exists:!!e[t.id]}}));return o.existOnly&&invariant(0===a.filter((function(e){return !e.exists})).length,O),a};function He(e,t,n,r){for(var o={parent:e,index:0,where:"before"},a=0,i=0,s=0,d=0,c=0,u=0,l=0,f=t.length;l<f;l++){var p=t[l];if(u=p.top+p.outerHeight,d=p.left+p.outerWidth/2,c=p.top+p.outerHeight/2,!(i&&p.left>i||s&&c>=s||a&&p.left+p.outerWidth<a))if(o.index=l,p.inFlow){if(r<c){o.where="before";break}o.where="after";}else r<u&&(s=u),n<d?(i=d,o.where="before"):(a=d,o.where="after");}return o}var Ge=function(e){te(n,be$1);var t=ie(n);function n(){return K(this,n),t.apply(this,arguments)}return Z(n,[{key:"handlers",value:function(){return {connect:function(e,t){},select:function(e,t){},hover:function(e,t){},drag:function(e,t){},drop:function(e,t){},create:function(e,t,n){}}}}]),n}();(function(e){te(n,me$1);var t=ie(n);function n(){return K(this,n),t.apply(this,arguments)}return Z(n)})();var Qe=function(){function e(t,n){K(this,e),ee(this,"store",void 0),ee(this,"dragTarget",void 0),ee(this,"currentDropTargetId",void 0),ee(this,"currentDropTargetCanvasAncestorId",void 0),ee(this,"currentIndicator",null),ee(this,"currentTargetId",void 0),ee(this,"currentTargetChildDimensions",void 0),ee(this,"dragError",void 0),ee(this,"draggedNodes",void 0),ee(this,"onScrollListener",void 0),this.store=t,this.dragTarget=n,this.currentDropTargetId=null,this.currentDropTargetCanvasAncestorId=null,this.currentTargetId=null,this.currentTargetChildDimensions=null,this.currentIndicator=null,this.dragError=null,this.draggedNodes=this.getDraggedNodes(),this.validateDraggedNodes(),this.onScrollListener=this.onScroll.bind(this),window.addEventListener("scroll",this.onScrollListener,!0);}return Z(e,[{key:"cleanup",value:function(){window.removeEventListener("scroll",this.onScrollListener,!0);}},{key:"onScroll",value:function(e){var t=e.target,n=this.store.query.node(m).get();t instanceof Element&&n&&n.dom&&t.contains(n.dom)&&(this.currentTargetChildDimensions=null);}},{key:"getDraggedNodes",value:function(){return Re(this.store.query.getNodes(),"new"===this.dragTarget.type?this.dragTarget.tree.nodes[this.dragTarget.tree.rootNodeId]:this.dragTarget.nodes)}},{key:"validateDraggedNodes",value:function(){var e=this;"new"!==this.dragTarget.type&&this.draggedNodes.forEach((function(t){t.exists&&e.store.query.node(t.node.id).isDraggable((function(t){e.dragError=t;}));}));}},{key:"isNearBorders",value:function(t,n,r){return t.top+e.BORDER_OFFSET>r||t.bottom-e.BORDER_OFFSET<r||t.left+e.BORDER_OFFSET>n||t.right-e.BORDER_OFFSET<n}},{key:"isDiff",value:function(e){return !this.currentIndicator||this.currentIndicator.placement.parent.id!==e.parent.id||this.currentIndicator.placement.index!==e.index||this.currentIndicator.placement.where!==e.where}},{key:"getChildDimensions",value:function(e){var t=this,n=this.currentTargetChildDimensions;return this.currentTargetId===e.id&&n?n:e.data.nodes.reduce((function(e,n){var r=t.store.query.node(n).get().dom;return r&&e.push(Y({id:n},de$1(r))),e}),[])}},{key:"getCanvasAncestor",value:function(e){var t=this;if(e===this.currentDropTargetId&&this.currentDropTargetCanvasAncestorId){var n=this.store.query.node(this.currentDropTargetCanvasAncestorId).get();if(n)return n}return function e(n){var r=t.store.query.node(n).get();return r&&r.data.isCanvas?r:r.data.parent?e(r.data.parent):null}(e)}},{key:"computeIndicator",value:function(e,t,n){var r=this.getCanvasAncestor(e);if(r&&(this.currentDropTargetId=e,this.currentDropTargetCanvasAncestorId=r.id,r.data.parent&&this.isNearBorders(de$1(r.dom),t,n)&&!this.store.query.node(r.id).isLinkedNode()&&(r=this.store.query.node(r.data.parent).get()),r)){this.currentTargetChildDimensions=this.getChildDimensions(r),this.currentTargetId=r.id;var o=He(r,this.currentTargetChildDimensions,t,n);if(this.isDiff(o)){var a=this.dragError;a||this.store.query.node(r.id).isDroppable(this.draggedNodes.map((function(e){return e.node})),(function(e){a=e;}));var i=r.data.nodes[o.index],s=i&&this.store.query.node(i).get();return this.currentIndicator={placement:Y(Y({},o),{},{currentNode:s}),error:a},this.currentIndicator}}}},{key:"getIndicator",value:function(){return this.currentIndicator}}]),e}();ee(Qe,"BORDER_OFFSET",10);var Ze=function(e,t){if(1===t.length||arguments.length>2&&void 0!==arguments[2]&&arguments[2]){var n=t[0].getBoundingClientRect(),r=n.width,o=n.height,a=t[0].cloneNode(!0);return a.style.position="fixed",a.style.left="-100%",a.style.top="-100%",a.style.width="".concat(r,"px"),a.style.height="".concat(o,"px"),a.style.pointerEvents="none",document.body.appendChild(a),e.dataTransfer.setDragImage(a,0,0),a}var i=document.createElement("div");return i.style.position="fixed",i.style.left="-100%",i.style.top="-100%",i.style.width="100%",i.style.height="100%",i.style.pointerEvents="none",t.forEach((function(e){var t=e.getBoundingClientRect(),n=t.width,r=t.height,o=t.top,a=t.left,s=e.cloneNode(!0);s.style.position="absolute",s.style.left="".concat(a,"px"),s.style.top="".concat(o,"px"),s.style.width="".concat(n,"px"),s.style.height="".concat(r,"px"),i.appendChild(s);})),document.body.appendChild(i),e.dataTransfer.setDragImage(i,e.clientX,e.clientY),i},et=function(e){te(n,Ge);var t=ie(n);function n(){var e;K(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return ee(ae(e=t.call.apply(t,[this].concat(o))),"draggedElementShadow",void 0),ee(ae(e),"dragTarget",void 0),ee(ae(e),"positioner",null),ee(ae(e),"currentSelectedElementIds",[]),e}return Z(n,[{key:"onDisable",value:function(){this.options.store.actions.clearEvents();}},{key:"handlers",value:function(){var e=this,t=this.options.store;return {connect:function(n,r){return t.actions.setDOM(r,n),e.reflect((function(e){e.select(n,r),e.hover(n,r),e.drop(n,r);}))},select:function(n,r){var o=e.addCraftEventListener(n,"mousedown",(function(n){n.craft.stopPropagation();var o=[];if(r){var a=t.query,i=a.getEvent("selected").all();(e.options.isMultiSelectEnabled(n)||i.includes(r))&&(o=i.filter((function(e){var t=a.node(e).descendants(!0),n=a.node(e).ancestors(!0);return !t.includes(r)&&!n.includes(r)}))),o.includes(r)||o.push(r);}t.actions.setNodeEvent("selected",o);})),a=e.addCraftEventListener(n,"click",(function(n){n.craft.stopPropagation();var o=t.query.getEvent("selected").all(),a=e.options.isMultiSelectEnabled(n),i=e.currentSelectedElementIds.includes(r),s=se(o);a&&i?(s.splice(s.indexOf(r),1),t.actions.setNodeEvent("selected",s)):!a&&o.length>1&&t.actions.setNodeEvent("selected",s=[r]),e.currentSelectedElementIds=s;}));return function(){o(),a();}},hover:function(n,r){var o=e.addCraftEventListener(n,"mouseover",(function(e){e.craft.stopPropagation(),t.actions.setNodeEvent("hovered",r);})),a=e.addCraftEventListener(n,"mouseleave",(function(e){e.craft.stopPropagation(),t.actions.setNodeEvent("hovered",null);}));return function(){o(),a();}},drop:function(n,r){var o=e.addCraftEventListener(n,"dragover",(function(n){if(n.craft.stopPropagation(),n.preventDefault(),e.positioner){var o=e.positioner.computeIndicator(r,n.clientX,n.clientY);o&&t.actions.setIndicator(o);}})),a=e.addCraftEventListener(n,"dragenter",(function(e){e.craft.stopPropagation(),e.preventDefault();}));return function(){a(),o();}},drag:function(r,o){if(!t.query.node(o).isDraggable())return function(){};r.setAttribute("draggable","true");var a=e.addCraftEventListener(r,"dragstart",(function(r){r.craft.stopPropagation();var a=t.query,i=t.actions,s=a.getEvent("selected").all(),d=e.options.isMultiSelectEnabled(r);e.currentSelectedElementIds.includes(o)||(s=d?[].concat(se(s),[o]):[o],t.actions.setNodeEvent("selected",s)),i.setNodeEvent("dragged",s);var c=s.map((function(e){return a.node(e).get().dom}));e.draggedElementShadow=Ze(r,c,n.forceSingleDragShadow),e.dragTarget={type:"existing",nodes:s},e.positioner=new Qe(e.options.store,e.dragTarget);})),i=e.addCraftEventListener(r,"dragend",(function(n){n.craft.stopPropagation(),e.dropElement((function(e,n){"new"!==e.type&&t.actions.move(e.nodes,n.placement.parent.id,n.placement.index+("after"===n.placement.where?1:0));}));}));return function(){r.setAttribute("draggable","false"),a(),i();}},create:function(r,o,a){r.setAttribute("draggable","true");var i=e.addCraftEventListener(r,"dragstart",(function(r){var a;if(r.craft.stopPropagation(),"function"==typeof o){var i=o();a=React__default["default"].isValidElement(i)?t.query.parseReactElement(i).toNodeTree():i;}else a=t.query.parseReactElement(o).toNodeTree();e.draggedElementShadow=Ze(r,[r.currentTarget],n.forceSingleDragShadow),e.dragTarget={type:"new",tree:a},e.positioner=new Qe(e.options.store,e.dragTarget);})),s=e.addCraftEventListener(r,"dragend",(function(n){n.craft.stopPropagation(),e.dropElement((function(e,n){"existing"!==e.type&&(t.actions.addNodeTree(e.tree,n.placement.parent.id,n.placement.index+("after"===n.placement.where?1:0)),a&&isFunction_1(a.onCreate)&&a.onCreate(e.tree));}));}));return function(){r.removeAttribute("draggable"),i(),s();}}}}},{key:"dropElement",value:function(e){var t=this.options.store;if(this.positioner){var n=this.draggedElementShadow,r=this.positioner.getIndicator();this.dragTarget&&r&&!r.error&&e(this.dragTarget,r),n&&(n.parentNode.removeChild(n),this.draggedElementShadow=null),this.dragTarget=null,t.actions.setIndicator(null),t.actions.setNodeEvent("dragged",null),this.positioner.cleanup(),this.positioner=null;}}}]),n}();ee(et,"forceSingleDragShadow",Ie$1()&&Te$1());

const Text = (props) => {
  var _a, _b;
  const { node, connectors, actions } = me((node2) => ({ node: node2 }));
  const { enabled } = xe((state) => ({ enabled: state.options.enabled }));
  const [textEdit, setTextEdit] = React.useState((_b = (_a = node.data.props[props.id]) == null ? void 0 : _a.text) != null ? _b : props.text);
  const [textPreview, setTextPreview] = React.useState(textEdit);
  const onChange = (e) => {
    actions.setProp((prop) => {
      if (!prop[props.id])
        prop[props.id] = {};
      prop[props.id].text = e.target.innerText;
      setTextPreview(e.target.innerText);
    }, 500);
  };
  const onClick = (e) => {
    if (enabled) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  React.useEffect(() => {
    var _a2, _b2;
    setTextEdit((_b2 = (_a2 = node.data.props[props.id]) == null ? void 0 : _a2.text) != null ? _b2 : props.text);
  }, [enabled]);
  return enabled ? /* @__PURE__ */ React__default["default"].createElement(
    "span",
    {
      ref: (ref) => connectors.connect(ref),
      contentEditable: true,
      suppressContentEditableWarning: true,
      className: props.className,
      onClick,
      onInput: onChange
    },
    textEdit
  ) : /* @__PURE__ */ React__default["default"].createElement("span", { className: props.className }, textPreview);
};
Text.craft = {
  displayName: "Text",
  props: {
    text: ""
  },
  related: {}
};

var __defProp$3 = Object.defineProperty;
var __defProps$3 = Object.defineProperties;
var __getOwnPropDescs$3 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$3 = (a, b) => __defProps$3(a, __getOwnPropDescs$3(b));
var __objRest$2 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const handleClick$1 = (props) => {
  var _a;
  if (props == null ? void 0 : props.newTab) {
    (_a = window.open(props.link, "_blank")) == null ? void 0 : _a.focus();
  } else {
    location.href = props.link;
  }
};
const Link = ({ r, d, i, propId }) => {
  var _b;
  const { node } = me((node2) => ({ node: node2 }));
  const { enabled } = xe((state) => ({ enabled: state.options.enabled }));
  const { connectors } = me((node2) => ({ node: node2 }));
  const _a = r.attrs, attrsR = __objRest$2(_a, ["class"]);
  const onClick = (e) => {
    e.preventDefault();
    if (!enabled)
      handleClick$1(node.data.props[propId]);
  };
  return /* @__PURE__ */ React__default["default"].createElement(
    "a",
    __spreadProps$3(__spreadValues$3({
      ref: (ref) => connectors.connect(ref)
    }, attrsR), {
      href: (_b = node.data.props[propId]) == null ? void 0 : _b.link,
      className: r.classNames,
      onClick
    }),
    /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) })
  );
};
Link.craft = {
  displayName: "Link",
  props: {},
  rules: {
    canDrag: () => true
  },
  related: {}
};

var __defProp$2 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest$1 = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$2.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$2.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const handleClick = (props, e) => {
  var _a;
  if ((props == null ? void 0 : props.type) === "url") {
    if (props == null ? void 0 : props.newTab) {
      (_a = window.open(props.url, "_blank")) == null ? void 0 : _a.focus();
    } else {
      location.href = props.url;
    }
  } else if ((props == null ? void 0 : props.type) === "email") {
    location.href = `mailto:${props.email}`;
  } else if ((props == null ? void 0 : props.type) === "submit") {
    const form = e.target.closest("form");
    if (!(props == null ? void 0 : props.submitAsync)) {
      form.submit();
      return;
    }
    const formData = new FormData();
    for (let e2 of form.elements) {
      if (e2.type !== "submit") {
        formData.append(e2.id, e2.type === "radio" ? e2.checked : e2.value);
      }
    }
    const options = __spreadValues$2({
      method: props.submitMethod
    }, props.submitMethod !== "GET" ? { body: formData } : {});
    fetch(props.submitUrl, options).then((e2) => e2.text().then((d) => ({ ok: e2.ok, text: d }))).then(({ ok, text }) => {
      alert(ok ? text != null ? text : "All good" : "Something went wrong");
    });
  }
};
const Button = ({ r, d, i, propId }) => {
  const { node } = me((node2) => ({ node: node2 }));
  const { enabled } = xe((state) => ({ enabled: state.options.enabled }));
  const { connectors } = me((node2) => ({ node: node2 }));
  const _a = r.attrs, attrsR = __objRest$1(_a, ["class"]);
  const onClick = (e) => {
    e.preventDefault();
    if (!enabled)
      handleClick(node.data.props[propId], e);
  };
  return /* @__PURE__ */ React__default["default"].createElement(
    "button",
    __spreadProps$2(__spreadValues$2({
      ref: (ref) => connectors.connect(ref)
    }, attrsR), {
      className: r.classNames,
      onClick
    }),
    /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) })
  );
};
Button.craft = {
  displayName: "Button",
  props: {},
  rules: {
    canDrag: () => true
  },
  related: {}
};

var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$1.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$1.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const Image = ({ d: _d, i: _i, classNames, attrs, propId }) => {
  var _a, _b;
  const { connectors } = me((node2) => ({ node: node2 }));
  const { node } = me((node2) => ({ node: node2 }));
  const url = (_b = (_a = node.data.props[propId]) == null ? void 0 : _a.url) != null ? _b : attrs.src;
  const _c = attrs, attrsR = __objRest(_c, ["class"]);
  return /* @__PURE__ */ React__default["default"].createElement(
    "img",
    __spreadProps$1(__spreadValues$1({
      ref: (ref) => connectors.connect(ref),
      className: classNames
    }, attrsR), {
      src: url
    })
  );
};
Image.craft = {
  displayName: "Image",
  props: {},
  rules: {
    canDrag: () => true
  },
  related: {}
};

const Svg = ({ r, propId }) => {
  var _a;
  const { connectors, node } = me((node2) => ({ node: node2 }));
  const path = (_a = node.data.props[propId]) == null ? void 0 : _a.path;
  const nodes = r.childNodes.filter((c) => c.tagName === "PATH");
  return /* @__PURE__ */ React__default["default"].createElement(
    "svg",
    {
      ref: (ref) => connectors.connect(ref),
      className: r.classNames,
      key: propId,
      height: r.attrs["height"],
      width: r.attrs["width"],
      fill: r.attrs["fill"],
      viewBox: r.attrs["viewbox"],
      stroke: r.attrs["stroke"],
      xmlns: r.attrs["xmlns"]
    },
    nodes.filter((_, i) => i === 0 || !path).map((c, i) => /* @__PURE__ */ React__default["default"].createElement(
      "path",
      {
        key: propId + i.toString(),
        d: path != null ? path : c.attrs["d"],
        fillRule: c.attrs["fill-rule"],
        clipRule: c.attrs["clip-rule"],
        strokeLinecap: c.attrs["stroke-linecap"],
        strokeLinejoin: c.attrs["stroke-linejoin"],
        strokeWidth: c.attrs["stroke-width"],
        stroke: c.attrs["stroke"],
        fill: c.attrs["fill"]
      }
    ))
  );
};
Svg.craft = {
  displayName: "Svg",
  props: {},
  rules: {
    canDrag: () => true
  },
  related: {}
};

var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const Child = ({ root, d = [0] }) => {
  if (!root || (root == null ? void 0 : root.childNodes.length) === 0)
    return null;
  return /* @__PURE__ */ React__default["default"].createElement(React__default["default"].Fragment, null, Array.from(root == null ? void 0 : root.childNodes).map((r, i) => {
    var _a;
    const key = d.concat(i).join("");
    if (r.nodeType === 1) {
      if (r.tagName === "DIV")
        return /* @__PURE__ */ React__default["default"].createElement("div", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "H1")
        return /* @__PURE__ */ React__default["default"].createElement("h1", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "SECTION")
        return /* @__PURE__ */ React__default["default"].createElement("section", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "H2")
        return /* @__PURE__ */ React__default["default"].createElement("h2", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "H3")
        return /* @__PURE__ */ React__default["default"].createElement("h3", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "H4")
        return /* @__PURE__ */ React__default["default"].createElement("h4", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "H5")
        return /* @__PURE__ */ React__default["default"].createElement("h5", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "H6")
        return /* @__PURE__ */ React__default["default"].createElement("h6", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "P")
        return /* @__PURE__ */ React__default["default"].createElement("p", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "A")
        return /* @__PURE__ */ React__default["default"].createElement(Ce, { is: Link, key, r, d, i, id: key, propId: key });
      else if (r.tagName === "SPAN")
        return /* @__PURE__ */ React__default["default"].createElement("span", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "STRONG")
        return /* @__PURE__ */ React__default["default"].createElement("strong", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "EM")
        return /* @__PURE__ */ React__default["default"].createElement("em", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "HEADER")
        return /* @__PURE__ */ React__default["default"].createElement("header", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "MAIN")
        return /* @__PURE__ */ React__default["default"].createElement("main", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "FOOTER")
        return /* @__PURE__ */ React__default["default"].createElement("footer", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "NAV")
        return /* @__PURE__ */ React__default["default"].createElement("nav", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "ASIDE")
        return /* @__PURE__ */ React__default["default"].createElement("aside", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "DETAILS")
        return /* @__PURE__ */ React__default["default"].createElement("details", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "SUMMARY")
        return /* @__PURE__ */ React__default["default"].createElement("summary", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "BLOCKQUOTE")
        return /* @__PURE__ */ React__default["default"].createElement("blockquote", __spreadValues({ className: r.classNames, key }, r.attrs), /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "INPUT")
        return /* @__PURE__ */ React__default["default"].createElement("input", __spreadValues({ className: r.classNames, key }, r.attrs));
      else if (r.tagName === "LABEL")
        return /* @__PURE__ */ React__default["default"].createElement("label", __spreadValues({ className: r.classNames, key }, r.attrs), r.innerText);
      else if (r.tagName === "TEXTAREA")
        return /* @__PURE__ */ React__default["default"].createElement(
          "textarea",
          __spreadValues({
            defaultValue: r.innerText,
            className: r.classNames,
            key
          }, r.attrs)
        );
      else if (r.tagName === "BUTTON")
        return /* @__PURE__ */ React__default["default"].createElement(Ce, { is: Button, key, r, d, i, id: key, propId: key });
      else if (r.tagName === "FORM")
        return /* @__PURE__ */ React__default["default"].createElement("form", __spreadValues({ className: r.classNames, key }, r.attrs), /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "SVG")
        return /* @__PURE__ */ React__default["default"].createElement(Ce, { is: Svg, key, r, id: key, propId: key });
      else if (r.tagName === "ADDRESS")
        return /* @__PURE__ */ React__default["default"].createElement("address", __spreadValues({ className: r.classNames, key }, r.attrs), /* @__PURE__ */ React__default["default"].createElement(Text, { className: "", text: r.innerText, key, id: key }));
      else if (r.tagName === "FIGURE")
        return /* @__PURE__ */ React__default["default"].createElement("figure", __spreadValues({ className: r.classNames, key }, r.attrs), /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      else if (r.tagName === "IMG") {
        return /* @__PURE__ */ React__default["default"].createElement(
          Ce,
          {
            is: Image,
            key,
            d,
            i,
            classNames: r.classNames,
            attrs: r.attrs,
            id: key,
            propId: key
          }
        );
      } else if (r.tagName === "ARTICLE") {
        return /* @__PURE__ */ React__default["default"].createElement("article", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      } else if (r.tagName === "DL") {
        return /* @__PURE__ */ React__default["default"].createElement("article", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      } else if (r.tagName === "DD") {
        return /* @__PURE__ */ React__default["default"].createElement("article", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      } else if (r.tagName === "DT") {
        return /* @__PURE__ */ React__default["default"].createElement("article", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      } else if (r.tagName === "SCRIPT") {
        return null;
      } else if (r.tagName === "LINK") {
        return /* @__PURE__ */ React__default["default"].createElement("link", __spreadProps(__spreadValues({ className: r.classNames }, r.attrs), { key }));
      } else if (r.tagName === "BR") {
        return /* @__PURE__ */ React__default["default"].createElement("br", { className: r.classNames, key });
      } else if (r.tagName === "UL") {
        return /* @__PURE__ */ React__default["default"].createElement("ul", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      } else if (r.tagName === "LI") {
        return /* @__PURE__ */ React__default["default"].createElement("li", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      } else if (r.tagName === "CITE") {
        return /* @__PURE__ */ React__default["default"].createElement("cite", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      } else if (r.tagName === "HR") {
        return /* @__PURE__ */ React__default["default"].createElement("hr", { className: r.classNames, key });
      } else if (r.tagName === "IFRAME") {
        return /* @__PURE__ */ React__default["default"].createElement("iframe", __spreadProps(__spreadValues({ className: r.classNames }, r.attrs), { key }));
      } else if (r.tagName === "STYLE") {
        return /* @__PURE__ */ React__default["default"].createElement("style", { key }, r.innerText);
      } else if (r.tagName === "TABLE") {
        return /* @__PURE__ */ React__default["default"].createElement("table", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      } else if (r.tagName === "THEAD") {
        return /* @__PURE__ */ React__default["default"].createElement("thead", __spreadProps(__spreadValues({ className: r.classNames }, r.attrs), { key }), /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      } else if (r.tagName === "TBODY") {
        return /* @__PURE__ */ React__default["default"].createElement("tbody", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      } else if (r.tagName === "TR") {
        return /* @__PURE__ */ React__default["default"].createElement("tr", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      } else if (r.tagName === "TD") {
        return /* @__PURE__ */ React__default["default"].createElement("td", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      } else if (r.tagName === "TH") {
        return /* @__PURE__ */ React__default["default"].createElement("th", { className: r.classNames, key }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      } else if (r.tagName === "FIGCAPTION") {
        return /* @__PURE__ */ React__default["default"].createElement("figcaption", { className: r.classNames }, /* @__PURE__ */ React__default["default"].createElement(Child, { root: r, d: d.concat(i) }));
      } else {
        return /* @__PURE__ */ React__default["default"].createElement("p", { key }, "Unknown container");
      }
    } else if (r.nodeType === 3) {
      if (r.innerText.trim() === "")
        return null;
      if (r.constructor === "TextNode" || r.constructor === "t")
        return /* @__PURE__ */ React__default["default"].createElement(Text, { className: r.classNames, text: (_a = r.innerText) != null ? _a : "", key, id: key });
      else
        return /* @__PURE__ */ React__default["default"].createElement("p", { key }, "Unknown node");
    } else {
      return /* @__PURE__ */ React__default["default"].createElement("p", { key }, "Unknown type");
    }
  }));
};
const Component = ({ root }) => {
  const { connectors, node } = me((node2) => ({ node: node2 }));
  return /* @__PURE__ */ React__default["default"].createElement("div", { id: node.data.props.id, ref: (ref) => connectors.connect(ref) }, /* @__PURE__ */ React__default["default"].createElement(Child, { root }));
};

const Container = ({ children }) => {
  const { connectors } = me();
  return /* @__PURE__ */ React__default["default"].createElement(
    "div",
    {
      ref: (ref) => connectors.connect(ref),
      style: { width: "100%", minHeight: "800px" },
      className: "bg-white"
    },
    children
  );
};
Container.craft = {
  displayName: "Container",
  props: {},
  rules: {
    canDrag: () => true
  },
  related: {}
};

const defaultResolver = {
  Container,
  Component,
  Element: Ce,
  Text,
  Child,
  Link,
  Button,
  Image,
  Svg
};
const defaultValue = {
  components: [],
  categories: [],
  themeNames: [],
  themeIndex: 0,
  updateIndex: () => {
  },
  standaloneServer: false,
  resolver: defaultResolver
};
React.createContext(defaultValue);

var classnamesExports = {};
var classnames = {
  get exports(){ return classnamesExports; },
  set exports(v){ classnamesExports = v; },
};

/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg) && arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
} (classnames));

const FrameEditor = ({ data }) => {
  const { actions } = xe();
  actions.deserialize(data);
  return /* @__PURE__ */ React__default["default"].createElement("div", { className: "page-container" }, /* @__PURE__ */ React__default["default"].createElement(Se, null));
};
const Editor = ({ data, standaloneServer }) => {
  return /* @__PURE__ */ React__default["default"].createElement(FrameEditor, { data, standaloneServer });
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/* purgecss start ignore */\n/* ! tailwindcss v3.3.5 | MIT License | https://tailwindcss.com */\n/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n::before,\n::after {\n  --tw-content: '';\n}\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n5. Use the user's configured `sans` font-feature-settings by default.\n6. Use the user's configured `sans` font-variation-settings by default.\n*/\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n/*\nRemove the default font size and weight for headings.\n*/\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n/*\nAdd the correct font weight in Edge and Safari.\n*/\nb,\nstrong {\n  font-weight: bolder;\n}\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n/*\nAdd the correct font size in all browsers.\n*/\nsmall {\n  font-size: 80%;\n}\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\nbutton,\nselect {\n  text-transform: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n:-moz-focusring {\n  outline: auto;\n}\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\nprogress {\n  vertical-align: baseline;\n}\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n/*\nAdd the correct display in Chrome and Safari.\n*/\nsummary {\n  display: list-item;\n}\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\nfieldset {\n  margin: 0;\n  padding: 0;\n}\nlegend {\n  padding: 0;\n}\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n/*\nPrevent resizing textareas horizontally by default.\n*/\ntextarea {\n  resize: vertical;\n}\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n/*\nSet the default cursor for buttons.\n*/\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n  .container {\n    max-width: 1536px;\n  }\n}\n@import url('https://use.typekit.net/mpa1wkh.css');\nhtml,\nbody {\n  font-family: 'acumin-pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n  color: rgb(75, 75, 75);\n  background: #e0e0e0;\n}\n/* purgecss end ignore */\n\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border-width: 0;\n}\n\n.pointer-events-none {\n  pointer-events: none;\n}\n\n.\\!visible {\n  visibility: visible !important;\n}\n\n.visible {\n  visibility: visible;\n}\n\n.invisible {\n  visibility: hidden;\n}\n\n.static {\n  position: static;\n}\n\n.fixed {\n  position: fixed;\n}\n\n.absolute {\n  position: absolute;\n}\n\n.\\!relative {\n  position: relative !important;\n}\n\n.relative {\n  position: relative;\n}\n\n.sticky {\n  position: sticky;\n}\n\n.inset-0 {\n  inset: 0px;\n}\n\n.inset-x-0 {\n  left: 0px;\n  right: 0px;\n}\n\n.inset-y-0 {\n  top: 0px;\n  bottom: 0px;\n}\n\n.\\!bottom-0 {\n  bottom: 0px !important;\n}\n\n.-left-20 {\n  left: -5rem;\n}\n\n.-right-20 {\n  right: -5rem;\n}\n\n.-right-28 {\n  right: -7rem;\n}\n\n.-top-10 {\n  top: -2.5rem;\n}\n\n.-top-12 {\n  top: -3rem;\n}\n\n.-top-3 {\n  top: -0.75rem;\n}\n\n.-top-4 {\n  top: -1rem;\n}\n\n.-top-96 {\n  top: -24rem;\n}\n\n.bottom-0 {\n  bottom: 0px;\n}\n\n.bottom-12 {\n  bottom: 3rem;\n}\n\n.bottom-2 {\n  bottom: 0.5rem;\n}\n\n.bottom-6 {\n  bottom: 1.5rem;\n}\n\n.left-0 {\n  left: 0px;\n}\n\n.left-1\\/2 {\n  left: 50%;\n}\n\n.left-12 {\n  left: 3rem;\n}\n\n.left-2 {\n  left: 0.5rem;\n}\n\n.left-4 {\n  left: 1rem;\n}\n\n.left-auto {\n  left: auto;\n}\n\n.right-0 {\n  right: 0px;\n}\n\n.right-1 {\n  right: 0.25rem;\n}\n\n.right-1\\.5 {\n  right: 0.375rem;\n}\n\n.right-3 {\n  right: 0.75rem;\n}\n\n.right-3\\.5 {\n  right: 0.875rem;\n}\n\n.right-4 {\n  right: 1rem;\n}\n\n.right-full {\n  right: 100%;\n}\n\n.top-0 {\n  top: 0px;\n}\n\n.top-1 {\n  top: 0.25rem;\n}\n\n.top-1\\/2 {\n  top: 50%;\n}\n\n.top-12 {\n  top: 3rem;\n}\n\n.top-16 {\n  top: 4rem;\n}\n\n.top-2 {\n  top: 0.5rem;\n}\n\n.top-2\\/4 {\n  top: 50%;\n}\n\n.top-24 {\n  top: 6rem;\n}\n\n.top-3 {\n  top: 0.75rem;\n}\n\n.top-3\\.5 {\n  top: 0.875rem;\n}\n\n.top-4 {\n  top: 1rem;\n}\n\n.top-full {\n  top: 100%;\n}\n\n.-z-\\[1\\] {\n  z-index: -1;\n}\n\n.z-10 {\n  z-index: 10;\n}\n\n.z-20 {\n  z-index: 20;\n}\n\n.z-50 {\n  z-index: 50;\n}\n\n.z-\\[1\\] {\n  z-index: 1;\n}\n\n.z-\\[2\\] {\n  z-index: 2;\n}\n\n.z-\\[60\\] {\n  z-index: 60;\n}\n\n.order-1 {\n  order: 1;\n}\n\n.order-2 {\n  order: 2;\n}\n\n.order-first {\n  order: -9999;\n}\n\n.order-last {\n  order: 9999;\n}\n\n.col-span-1 {\n  grid-column: span 1 / span 1;\n}\n\n.col-span-12 {\n  grid-column: span 12 / span 12;\n}\n\n.col-span-2 {\n  grid-column: span 2 / span 2;\n}\n\n.col-span-3 {\n  grid-column: span 3 / span 3;\n}\n\n.col-span-4 {\n  grid-column: span 4 / span 4;\n}\n\n.col-span-5 {\n  grid-column: span 5 / span 5;\n}\n\n.col-span-6 {\n  grid-column: span 6 / span 6;\n}\n\n.col-span-full {\n  grid-column: 1 / -1;\n}\n\n.col-start-4 {\n  grid-column-start: 4;\n}\n\n.-m-0 {\n  margin: -0px;\n}\n\n.-m-0\\.5 {\n  margin: -0.125rem;\n}\n\n.-m-1 {\n  margin: -0.25rem;\n}\n\n.-m-12 {\n  margin: -3rem;\n}\n\n.-m-2 {\n  margin: -0.5rem;\n}\n\n.-m-4 {\n  margin: -1rem;\n}\n\n.m-0 {\n  margin: 0px;\n}\n\n.m-0\\.5 {\n  margin: 0.125rem;\n}\n\n.m-1 {\n  margin: 0.25rem;\n}\n\n.m-2 {\n  margin: 0.5rem;\n}\n\n.\\!mx-\\[10px\\] {\n  margin-left: 10px !important;\n  margin-right: 10px !important;\n}\n\n.-mx-1 {\n  margin-left: -0.25rem;\n  margin-right: -0.25rem;\n}\n\n.-mx-1\\.5 {\n  margin-left: -0.375rem;\n  margin-right: -0.375rem;\n}\n\n.-mx-2 {\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\n\n.-mx-3 {\n  margin-left: -0.75rem;\n  margin-right: -0.75rem;\n}\n\n.-mx-4 {\n  margin-left: -1rem;\n  margin-right: -1rem;\n}\n\n.-mx-6 {\n  margin-left: -1.5rem;\n  margin-right: -1.5rem;\n}\n\n.-my-4 {\n  margin-top: -1rem;\n  margin-bottom: -1rem;\n}\n\n.-my-8 {\n  margin-top: -2rem;\n  margin-bottom: -2rem;\n}\n\n.mx-1 {\n  margin-left: 0.25rem;\n  margin-right: 0.25rem;\n}\n\n.mx-1\\.5 {\n  margin-left: 0.375rem;\n  margin-right: 0.375rem;\n}\n\n.mx-10 {\n  margin-left: 2.5rem;\n  margin-right: 2.5rem;\n}\n\n.mx-2 {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n}\n\n.mx-3 {\n  margin-left: 0.75rem;\n  margin-right: 0.75rem;\n}\n\n.mx-4 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n\n.mx-5 {\n  margin-left: 1.25rem;\n  margin-right: 1.25rem;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.my-1 {\n  margin-top: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n\n.my-10 {\n  margin-top: 2.5rem;\n  margin-bottom: 2.5rem;\n}\n\n.my-12 {\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\n\n.my-2 {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n\n.my-5 {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n\n.my-6 {\n  margin-top: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n\n.my-8 {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n\n.-mb-1 {\n  margin-bottom: -0.25rem;\n}\n\n.-mb-10 {\n  margin-bottom: -2.5rem;\n}\n\n.-mb-4 {\n  margin-bottom: -1rem;\n}\n\n.-mb-px {\n  margin-bottom: -1px;\n}\n\n.-ml-1 {\n  margin-left: -0.25rem;\n}\n\n.-ml-12 {\n  margin-left: -3rem;\n}\n\n.-ml-4 {\n  margin-left: -1rem;\n}\n\n.-mr-1 {\n  margin-right: -0.25rem;\n}\n\n.-mr-2 {\n  margin-right: -0.5rem;\n}\n\n.-mr-6 {\n  margin-right: -1.5rem;\n}\n\n.-mt-0 {\n  margin-top: -0px;\n}\n\n.-mt-0\\.5 {\n  margin-top: -0.125rem;\n}\n\n.-mt-20 {\n  margin-top: -5rem;\n}\n\n.-mt-4 {\n  margin-top: -1rem;\n}\n\n.-mt-6 {\n  margin-top: -1.5rem;\n}\n\n.mb-0 {\n  margin-bottom: 0px;\n}\n\n.mb-0\\.5 {\n  margin-bottom: 0.125rem;\n}\n\n.mb-1 {\n  margin-bottom: 0.25rem;\n}\n\n.mb-10 {\n  margin-bottom: 2.5rem;\n}\n\n.mb-12 {\n  margin-bottom: 3rem;\n}\n\n.mb-16 {\n  margin-bottom: 4rem;\n}\n\n.mb-2 {\n  margin-bottom: 0.5rem;\n}\n\n.mb-20 {\n  margin-bottom: 5rem;\n}\n\n.mb-24 {\n  margin-bottom: 6rem;\n}\n\n.mb-3 {\n  margin-bottom: 0.75rem;\n}\n\n.mb-4 {\n  margin-bottom: 1rem;\n}\n\n.mb-5 {\n  margin-bottom: 1.25rem;\n}\n\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n\n.mb-7 {\n  margin-bottom: 1.75rem;\n}\n\n.mb-8 {\n  margin-bottom: 2rem;\n}\n\n.mb-auto {\n  margin-bottom: auto;\n}\n\n.ml-1 {\n  margin-left: 0.25rem;\n}\n\n.ml-1\\.5 {\n  margin-left: 0.375rem;\n}\n\n.ml-2 {\n  margin-left: 0.5rem;\n}\n\n.ml-2\\.5 {\n  margin-left: 0.625rem;\n}\n\n.ml-20 {\n  margin-left: 5rem;\n}\n\n.ml-3 {\n  margin-left: 0.75rem;\n}\n\n.ml-4 {\n  margin-left: 1rem;\n}\n\n.ml-5 {\n  margin-left: 1.25rem;\n}\n\n.ml-6 {\n  margin-left: 1.5rem;\n}\n\n.ml-8 {\n  margin-left: 2rem;\n}\n\n.ml-auto {\n  margin-left: auto;\n}\n\n.mr-1 {\n  margin-right: 0.25rem;\n}\n\n.mr-2 {\n  margin-right: 0.5rem;\n}\n\n.mr-20 {\n  margin-right: 5rem;\n}\n\n.mr-3 {\n  margin-right: 0.75rem;\n}\n\n.mr-4 {\n  margin-right: 1rem;\n}\n\n.mr-5 {\n  margin-right: 1.25rem;\n}\n\n.mr-6 {\n  margin-right: 1.5rem;\n}\n\n.mr-auto {\n  margin-right: auto;\n}\n\n.mr-px {\n  margin-right: 1px;\n}\n\n.mt-0 {\n  margin-top: 0px;\n}\n\n.mt-0\\.5 {\n  margin-top: 0.125rem;\n}\n\n.mt-1 {\n  margin-top: 0.25rem;\n}\n\n.mt-1\\.5 {\n  margin-top: 0.375rem;\n}\n\n.mt-10 {\n  margin-top: 2.5rem;\n}\n\n.mt-12 {\n  margin-top: 3rem;\n}\n\n.mt-16 {\n  margin-top: 4rem;\n}\n\n.mt-2 {\n  margin-top: 0.5rem;\n}\n\n.mt-20 {\n  margin-top: 5rem;\n}\n\n.mt-3 {\n  margin-top: 0.75rem;\n}\n\n.mt-32 {\n  margin-top: 8rem;\n}\n\n.mt-4 {\n  margin-top: 1rem;\n}\n\n.mt-5 {\n  margin-top: 1.25rem;\n}\n\n.mt-6 {\n  margin-top: 1.5rem;\n}\n\n.mt-7 {\n  margin-top: 1.75rem;\n}\n\n.mt-8 {\n  margin-top: 2rem;\n}\n\n.mt-auto {\n  margin-top: auto;\n}\n\n.block {\n  display: block;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.inline {\n  display: inline;\n}\n\n.flex {\n  display: flex;\n}\n\n.inline-flex {\n  display: inline-flex;\n}\n\n.table {\n  display: table;\n}\n\n.flow-root {\n  display: flow-root;\n}\n\n.grid {\n  display: grid;\n}\n\n.hidden {\n  display: none;\n}\n\n.aspect-square {\n  aspect-ratio: 1 / 1;\n}\n\n.h-0 {\n  height: 0px;\n}\n\n.h-0\\.5 {\n  height: 0.125rem;\n}\n\n.h-1 {\n  height: 0.25rem;\n}\n\n.h-10 {\n  height: 2.5rem;\n}\n\n.h-11 {\n  height: 2.75rem;\n}\n\n.h-12 {\n  height: 3rem;\n}\n\n.h-14 {\n  height: 3.5rem;\n}\n\n.h-16 {\n  height: 4rem;\n}\n\n.h-2 {\n  height: 0.5rem;\n}\n\n.h-2\\.5 {\n  height: 0.625rem;\n}\n\n.h-20 {\n  height: 5rem;\n}\n\n.h-24 {\n  height: 6rem;\n}\n\n.h-28 {\n  height: 7rem;\n}\n\n.h-3 {\n  height: 0.75rem;\n}\n\n.h-3\\.5 {\n  height: 0.875rem;\n}\n\n.h-32 {\n  height: 8rem;\n}\n\n.h-36 {\n  height: 9rem;\n}\n\n.h-4 {\n  height: 1rem;\n}\n\n.h-40 {\n  height: 10rem;\n}\n\n.h-44 {\n  height: 11rem;\n}\n\n.h-48 {\n  height: 12rem;\n}\n\n.h-5 {\n  height: 1.25rem;\n}\n\n.h-5\\/6 {\n  height: 83.333333%;\n}\n\n.h-52 {\n  height: 13rem;\n}\n\n.h-56 {\n  height: 14rem;\n}\n\n.h-6 {\n  height: 1.5rem;\n}\n\n.h-60 {\n  height: 15rem;\n}\n\n.h-64 {\n  height: 16rem;\n}\n\n.h-7 {\n  height: 1.75rem;\n}\n\n.h-72 {\n  height: 18rem;\n}\n\n.h-8 {\n  height: 2rem;\n}\n\n.h-80 {\n  height: 20rem;\n}\n\n.h-9 {\n  height: 2.25rem;\n}\n\n.h-96 {\n  height: 24rem;\n}\n\n.h-\\[2\\.375rem\\] {\n  height: 2.375rem;\n}\n\n.h-\\[2\\.875rem\\] {\n  height: 2.875rem;\n}\n\n.h-\\[200px\\] {\n  height: 200px;\n}\n\n.h-\\[28rem\\] {\n  height: 28rem;\n}\n\n.h-\\[300px\\] {\n  height: 300px;\n}\n\n.h-\\[32rem\\] {\n  height: 32rem;\n}\n\n.h-\\[350px\\] {\n  height: 350px;\n}\n\n.h-\\[44rem\\] {\n  height: 44rem;\n}\n\n.h-\\[46px\\] {\n  height: 46px;\n}\n\n.h-\\[50rem\\] {\n  height: 50rem;\n}\n\n.h-\\[62px\\] {\n  height: 62px;\n}\n\n.h-auto {\n  height: auto;\n}\n\n.h-full {\n  height: 100%;\n}\n\n.h-px {\n  height: 1px;\n}\n\n.h-screen {\n  height: 100vh;\n}\n\n.max-h-72 {\n  max-height: 18rem;\n}\n\n.min-h-\\[15rem\\] {\n  min-height: 15rem;\n}\n\n.min-h-screen {\n  min-height: 100vh;\n}\n\n.w-0 {\n  width: 0px;\n}\n\n.w-1 {\n  width: 0.25rem;\n}\n\n.w-1\\/12 {\n  width: 8.333333%;\n}\n\n.w-1\\/2 {\n  width: 50%;\n}\n\n.w-1\\/3 {\n  width: 33.333333%;\n}\n\n.w-1\\/4 {\n  width: 25%;\n}\n\n.w-1\\/6 {\n  width: 16.666667%;\n}\n\n.w-10 {\n  width: 2.5rem;\n}\n\n.w-11\\/12 {\n  width: 91.666667%;\n}\n\n.w-12 {\n  width: 3rem;\n}\n\n.w-14 {\n  width: 3.5rem;\n}\n\n.w-16 {\n  width: 4rem;\n}\n\n.w-2 {\n  width: 0.5rem;\n}\n\n.w-2\\.5 {\n  width: 0.625rem;\n}\n\n.w-2\\/3 {\n  width: 66.666667%;\n}\n\n.w-2\\/4 {\n  width: 50%;\n}\n\n.w-20 {\n  width: 5rem;\n}\n\n.w-24 {\n  width: 6rem;\n}\n\n.w-28 {\n  width: 7rem;\n}\n\n.w-3 {\n  width: 0.75rem;\n}\n\n.w-3\\.5 {\n  width: 0.875rem;\n}\n\n.w-3\\/4 {\n  width: 75%;\n}\n\n.w-32 {\n  width: 8rem;\n}\n\n.w-36 {\n  width: 9rem;\n}\n\n.w-4 {\n  width: 1rem;\n}\n\n.w-40 {\n  width: 10rem;\n}\n\n.w-48 {\n  width: 12rem;\n}\n\n.w-5 {\n  width: 1.25rem;\n}\n\n.w-5\\/6 {\n  width: 83.333333%;\n}\n\n.w-52 {\n  width: 13rem;\n}\n\n.w-56 {\n  width: 14rem;\n}\n\n.w-6 {\n  width: 1.5rem;\n}\n\n.w-60 {\n  width: 15rem;\n}\n\n.w-64 {\n  width: 16rem;\n}\n\n.w-7 {\n  width: 1.75rem;\n}\n\n.w-72 {\n  width: 18rem;\n}\n\n.w-8 {\n  width: 2rem;\n}\n\n.w-80 {\n  width: 20rem;\n}\n\n.w-9 {\n  width: 2.25rem;\n}\n\n.w-96 {\n  width: 24rem;\n}\n\n.w-\\[1036px\\] {\n  width: 1036px;\n}\n\n.w-\\[2\\.375rem\\] {\n  width: 2.375rem;\n}\n\n.w-\\[2\\.875rem\\] {\n  width: 2.875rem;\n}\n\n.w-\\[25rem\\] {\n  width: 25rem;\n}\n\n.w-\\[28rem\\] {\n  width: 28rem;\n}\n\n.w-\\[3\\.25rem\\] {\n  width: 3.25rem;\n}\n\n.w-\\[46px\\] {\n  width: 46px;\n}\n\n.w-\\[50rem\\] {\n  width: 50rem;\n}\n\n.w-\\[62px\\] {\n  width: 62px;\n}\n\n.w-\\[90rem\\] {\n  width: 90rem;\n}\n\n.w-\\[95vw\\] {\n  width: 95vw;\n}\n\n.w-auto {\n  width: auto;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.w-px {\n  width: 1px;\n}\n\n.min-w-\\[3\\.5rem\\] {\n  min-width: 3.5rem;\n}\n\n.max-w-2xl {\n  max-width: 42rem;\n}\n\n.max-w-3xl {\n  max-width: 48rem;\n}\n\n.max-w-4xl {\n  max-width: 56rem;\n}\n\n.max-w-5xl {\n  max-width: 64rem;\n}\n\n.max-w-6xl {\n  max-width: 72rem;\n}\n\n.max-w-7xl {\n  max-width: 80rem;\n}\n\n.max-w-\\[10rem\\] {\n  max-width: 10rem;\n}\n\n.max-w-\\[1140px\\] {\n  max-width: 1140px;\n}\n\n.max-w-\\[1340px\\] {\n  max-width: 1340px;\n}\n\n.max-w-\\[50rem\\] {\n  max-width: 50rem;\n}\n\n.max-w-\\[85rem\\] {\n  max-width: 85rem;\n}\n\n.max-w-full {\n  max-width: 100%;\n}\n\n.max-w-lg {\n  max-width: 32rem;\n}\n\n.max-w-md {\n  max-width: 28rem;\n}\n\n.max-w-screen-2xl {\n  max-width: 1536px;\n}\n\n.max-w-screen-lg {\n  max-width: 1024px;\n}\n\n.max-w-screen-md {\n  max-width: 768px;\n}\n\n.max-w-screen-sm {\n  max-width: 640px;\n}\n\n.max-w-screen-xl {\n  max-width: 1280px;\n}\n\n.max-w-sm {\n  max-width: 24rem;\n}\n\n.max-w-xl {\n  max-width: 36rem;\n}\n\n.max-w-xs {\n  max-width: 20rem;\n}\n\n.flex-1 {\n  flex: 1 1 0%;\n}\n\n.flex-\\[0_0_auto\\] {\n  flex: 0 0 auto;\n}\n\n.flex-\\[1_0_0\\%\\] {\n  flex: 1 0 0%;\n}\n\n.flex-auto {\n  flex: 1 1 auto;\n}\n\n.flex-none {\n  flex: none;\n}\n\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n\n.shrink-0 {\n  flex-shrink: 0;\n}\n\n.flex-grow {\n  flex-grow: 1;\n}\n\n.grow {\n  flex-grow: 1;\n}\n\n.basis-full {\n  flex-basis: 100%;\n}\n\n.table-auto {\n  table-layout: auto;\n}\n\n.origin-top-left {\n  transform-origin: top left;\n}\n\n.-translate-x-1\\/2 {\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-x-14 {\n  --tw-translate-x: -3.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-x-16 {\n  --tw-translate-x: -4rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-x-32 {\n  --tw-translate-x: -8rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-x-40 {\n  --tw-translate-x: -10rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-x-6 {\n  --tw-translate-x: -1.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-x-8 {\n  --tw-translate-x: -2rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-x-\\[10rem\\] {\n  --tw-translate-x: -10rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-x-\\[15rem\\] {\n  --tw-translate-x: -15rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-x-full {\n  --tw-translate-x: -100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-y-1 {\n  --tw-translate-y: -0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-y-1\\/2 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-y-12 {\n  --tw-translate-y: -3rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-y-2\\/4 {\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-y-4 {\n  --tw-translate-y: -1rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-translate-y-8 {\n  --tw-translate-y: -2rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.translate-x-0 {\n  --tw-translate-x: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.translate-x-16 {\n  --tw-translate-x: 4rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.translate-x-20 {\n  --tw-translate-x: 5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.translate-x-40 {\n  --tw-translate-x: 10rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.translate-y-10 {\n  --tw-translate-y: 2.5rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.translate-y-16 {\n  --tw-translate-y: 4rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-rotate-12 {\n  --tw-rotate: -12deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.-rotate-180 {\n  --tw-rotate: -180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.rotate-180 {\n  --tw-rotate: 180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.rotate-\\[-60deg\\] {\n  --tw-rotate: -60deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n@keyframes ping {\n  75%, 100% {\n    transform: scale(2);\n    opacity: 0;\n  }\n}\n\n.animate-ping {\n  animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;\n}\n\n.cursor-default {\n  cursor: default;\n}\n\n.cursor-move {\n  cursor: move;\n}\n\n.cursor-not-allowed {\n  cursor: not-allowed;\n}\n\n.cursor-pointer {\n  cursor: pointer;\n}\n\n.select-none {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n}\n\n.resize-none {\n  resize: none;\n}\n\n.list-inside {\n  list-style-position: inside;\n}\n\n.list-outside {\n  list-style-position: outside;\n}\n\n.list-disc {\n  list-style-type: disc;\n}\n\n.list-none {\n  list-style-type: none;\n}\n\n.appearance-none {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n}\n\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n\n.grid-cols-12 {\n  grid-template-columns: repeat(12, minmax(0, 1fr));\n}\n\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n\n.grid-cols-6 {\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n}\n\n.flex-row {\n  flex-direction: row;\n}\n\n.flex-col {\n  flex-direction: column;\n}\n\n.flex-wrap {\n  flex-wrap: wrap;\n}\n\n.content-start {\n  align-content: flex-start;\n}\n\n.items-start {\n  align-items: flex-start;\n}\n\n.items-end {\n  align-items: flex-end;\n}\n\n.items-center {\n  align-items: center;\n}\n\n.items-baseline {\n  align-items: baseline;\n}\n\n.justify-start {\n  justify-content: flex-start;\n}\n\n.justify-end {\n  justify-content: flex-end;\n}\n\n.justify-center {\n  justify-content: center;\n}\n\n.justify-between {\n  justify-content: space-between;\n}\n\n.gap-0 {\n  gap: 0px;\n}\n\n.gap-0\\.5 {\n  gap: 0.125rem;\n}\n\n.gap-1 {\n  gap: 0.25rem;\n}\n\n.gap-1\\.5 {\n  gap: 0.375rem;\n}\n\n.gap-10 {\n  gap: 2.5rem;\n}\n\n.gap-12 {\n  gap: 3rem;\n}\n\n.gap-16 {\n  gap: 4rem;\n}\n\n.gap-2 {\n  gap: 0.5rem;\n}\n\n.gap-2\\.5 {\n  gap: 0.625rem;\n}\n\n.gap-3 {\n  gap: 0.75rem;\n}\n\n.gap-4 {\n  gap: 1rem;\n}\n\n.gap-5 {\n  gap: 1.25rem;\n}\n\n.gap-6 {\n  gap: 1.5rem;\n}\n\n.gap-8 {\n  gap: 2rem;\n}\n\n.gap-px {\n  gap: 1px;\n}\n\n.gap-x-0 {\n  -moz-column-gap: 0px;\n       column-gap: 0px;\n}\n\n.gap-x-1 {\n  -moz-column-gap: 0.25rem;\n       column-gap: 0.25rem;\n}\n\n.gap-x-1\\.5 {\n  -moz-column-gap: 0.375rem;\n       column-gap: 0.375rem;\n}\n\n.gap-x-16 {\n  -moz-column-gap: 4rem;\n       column-gap: 4rem;\n}\n\n.gap-x-2 {\n  -moz-column-gap: 0.5rem;\n       column-gap: 0.5rem;\n}\n\n.gap-x-20 {\n  -moz-column-gap: 5rem;\n       column-gap: 5rem;\n}\n\n.gap-x-3 {\n  -moz-column-gap: 0.75rem;\n       column-gap: 0.75rem;\n}\n\n.gap-x-3\\.5 {\n  -moz-column-gap: 0.875rem;\n       column-gap: 0.875rem;\n}\n\n.gap-x-4 {\n  -moz-column-gap: 1rem;\n       column-gap: 1rem;\n}\n\n.gap-x-5 {\n  -moz-column-gap: 1.25rem;\n       column-gap: 1.25rem;\n}\n\n.gap-x-6 {\n  -moz-column-gap: 1.5rem;\n       column-gap: 1.5rem;\n}\n\n.gap-x-7 {\n  -moz-column-gap: 1.75rem;\n       column-gap: 1.75rem;\n}\n\n.gap-x-8 {\n  -moz-column-gap: 2rem;\n       column-gap: 2rem;\n}\n\n.gap-y-10 {\n  row-gap: 2.5rem;\n}\n\n.gap-y-12 {\n  row-gap: 3rem;\n}\n\n.gap-y-2 {\n  row-gap: 0.5rem;\n}\n\n.gap-y-3 {\n  row-gap: 0.75rem;\n}\n\n.gap-y-4 {\n  row-gap: 1rem;\n}\n\n.gap-y-5 {\n  row-gap: 1.25rem;\n}\n\n.gap-y-6 {\n  row-gap: 1.5rem;\n}\n\n.gap-y-8 {\n  row-gap: 2rem;\n}\n\n.-space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(-0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(-0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.-space-x-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(-0.75rem * var(--tw-space-x-reverse));\n  margin-left: calc(-0.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-2\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.625rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.625rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.75rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-y-0 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0px * var(--tw-space-y-reverse));\n}\n\n.space-y-0\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.125rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.125rem * var(--tw-space-y-reverse));\n}\n\n.space-y-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n}\n\n.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));\n}\n\n.space-y-12 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(3rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(3rem * var(--tw-space-y-reverse));\n}\n\n.space-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n}\n\n.space-y-2\\.5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.625rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.625rem * var(--tw-space-y-reverse));\n}\n\n.space-y-24 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(6rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(6rem * var(--tw-space-y-reverse));\n}\n\n.space-y-3 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\n}\n\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n\n.space-y-5 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));\n}\n\n.space-y-6 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\n}\n\n.space-y-8 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(2rem * var(--tw-space-y-reverse));\n}\n\n.divide-x > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-x-reverse: 0;\n  border-right-width: calc(1px * var(--tw-divide-x-reverse));\n  border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));\n}\n\n.divide-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-x-reverse: 0;\n  border-right-width: calc(2px * var(--tw-divide-x-reverse));\n  border-left-width: calc(2px * calc(1 - var(--tw-divide-x-reverse)));\n}\n\n.divide-y > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-y-reverse: 0;\n  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));\n}\n\n.divide-y-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-y-reverse: 0;\n  border-top-width: calc(2px * calc(1 - var(--tw-divide-y-reverse)));\n  border-bottom-width: calc(2px * var(--tw-divide-y-reverse));\n}\n\n.divide-gray-100 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(243 244 246 / var(--tw-divide-opacity));\n}\n\n.divide-gray-200 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-divide-opacity));\n}\n\n.divide-gray-500 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(107 114 128 / var(--tw-divide-opacity));\n}\n\n.divide-gray-700 > :not([hidden]) ~ :not([hidden]) {\n  --tw-divide-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-divide-opacity));\n}\n\n.place-self-center {\n  place-self: center;\n}\n\n.self-start {\n  align-self: flex-start;\n}\n\n.self-center {\n  align-self: center;\n}\n\n.overflow-auto {\n  overflow: auto;\n}\n\n.\\!overflow-hidden {\n  overflow: hidden !important;\n}\n\n.overflow-hidden {\n  overflow: hidden;\n}\n\n.overflow-scroll {\n  overflow: scroll;\n}\n\n.overflow-x-auto {\n  overflow-x: auto;\n}\n\n.overflow-y-auto {\n  overflow-y: auto;\n}\n\n.overflow-y-hidden {\n  overflow-y: hidden;\n}\n\n.truncate {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n\n.rounded {\n  border-radius: 0.25rem;\n}\n\n.rounded-3xl {\n  border-radius: 1.5rem;\n}\n\n.rounded-\\[1\\.25rem\\] {\n  border-radius: 1.25rem;\n}\n\n.rounded-\\[36px\\] {\n  border-radius: 36px;\n}\n\n.rounded-full {\n  border-radius: 9999px;\n}\n\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n\n.rounded-md {\n  border-radius: 0.375rem;\n}\n\n.rounded-sm {\n  border-radius: 0.125rem;\n}\n\n.rounded-xl {\n  border-radius: 0.75rem;\n}\n\n.rounded-b-lg {\n  border-bottom-right-radius: 0.5rem;\n  border-bottom-left-radius: 0.5rem;\n}\n\n.rounded-b-xl {\n  border-bottom-right-radius: 0.75rem;\n  border-bottom-left-radius: 0.75rem;\n}\n\n.rounded-r-lg {\n  border-top-right-radius: 0.5rem;\n  border-bottom-right-radius: 0.5rem;\n}\n\n.rounded-t {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n}\n\n.rounded-t-lg {\n  border-top-left-radius: 0.5rem;\n  border-top-right-radius: 0.5rem;\n}\n\n.rounded-t-xl {\n  border-top-left-radius: 0.75rem;\n  border-top-right-radius: 0.75rem;\n}\n\n.rounded-bl {\n  border-bottom-left-radius: 0.25rem;\n}\n\n.rounded-bl-xl {\n  border-bottom-left-radius: 0.75rem;\n}\n\n.rounded-br {\n  border-bottom-right-radius: 0.25rem;\n}\n\n.rounded-br-lg {\n  border-bottom-right-radius: 0.5rem;\n}\n\n.rounded-br-xl {\n  border-bottom-right-radius: 0.75rem;\n}\n\n.rounded-tl {\n  border-top-left-radius: 0.25rem;\n}\n\n.rounded-tr {\n  border-top-right-radius: 0.25rem;\n}\n\n.rounded-tr-xl {\n  border-top-right-radius: 0.75rem;\n}\n\n.border {\n  border-width: 1px;\n}\n\n.border-0 {\n  border-width: 0px;\n}\n\n.border-2 {\n  border-width: 2px;\n}\n\n.border-4 {\n  border-width: 4px;\n}\n\n.border-x {\n  border-left-width: 1px;\n  border-right-width: 1px;\n}\n\n.border-b {\n  border-bottom-width: 1px;\n}\n\n.border-b-2 {\n  border-bottom-width: 2px;\n}\n\n.border-b-4 {\n  border-bottom-width: 4px;\n}\n\n.border-l {\n  border-left-width: 1px;\n}\n\n.border-l-2 {\n  border-left-width: 2px;\n}\n\n.border-l-4 {\n  border-left-width: 4px;\n}\n\n.border-r {\n  border-right-width: 1px;\n}\n\n.border-r-2 {\n  border-right-width: 2px;\n}\n\n.border-t {\n  border-top-width: 1px;\n}\n\n.border-t-2 {\n  border-top-width: 2px;\n}\n\n.border-t-4 {\n  border-top-width: 4px;\n}\n\n.border-dashed {\n  border-style: dashed;\n}\n\n.border-none {\n  border-style: none;\n}\n\n.border-blue-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(96 165 250 / var(--tw-border-opacity));\n}\n\n.border-blue-50 {\n  --tw-border-opacity: 1;\n  border-color: rgb(239 246 255 / var(--tw-border-opacity));\n}\n\n.border-blue-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity));\n}\n\n.border-blue-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(37 99 235 / var(--tw-border-opacity));\n}\n\n.border-current {\n  border-color: currentColor;\n}\n\n.border-gray-100 {\n  --tw-border-opacity: 1;\n  border-color: rgb(243 244 246 / var(--tw-border-opacity));\n}\n\n.border-gray-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n\n.border-gray-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n\n.border-gray-400 {\n  --tw-border-opacity: 1;\n  border-color: rgb(156 163 175 / var(--tw-border-opacity));\n}\n\n.border-gray-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(107 114 128 / var(--tw-border-opacity));\n}\n\n.border-gray-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\n}\n\n.border-gray-700 {\n  --tw-border-opacity: 1;\n  border-color: rgb(55 65 81 / var(--tw-border-opacity));\n}\n\n.border-gray-800 {\n  --tw-border-opacity: 1;\n  border-color: rgb(31 41 55 / var(--tw-border-opacity));\n}\n\n.border-gray-900 {\n  --tw-border-opacity: 1;\n  border-color: rgb(17 24 39 / var(--tw-border-opacity));\n}\n\n.border-green-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(34 197 94 / var(--tw-border-opacity));\n}\n\n.border-indigo-100 {\n  --tw-border-opacity: 1;\n  border-color: rgb(224 231 255 / var(--tw-border-opacity));\n}\n\n.border-indigo-500 {\n  --tw-border-opacity: 1;\n  border-color: rgb(99 102 241 / var(--tw-border-opacity));\n}\n\n.border-indigo-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(79 70 229 / var(--tw-border-opacity));\n}\n\n.border-pink-600 {\n  --tw-border-opacity: 1;\n  border-color: rgb(219 39 119 / var(--tw-border-opacity));\n}\n\n.border-transparent {\n  border-color: transparent;\n}\n\n.border-white {\n  --tw-border-opacity: 1;\n  border-color: rgb(255 255 255 / var(--tw-border-opacity));\n}\n\n.border-white\\/10 {\n  border-color: rgb(255 255 255 / 0.1);\n}\n\n.border-white\\/20 {\n  border-color: rgb(255 255 255 / 0.2);\n}\n\n.border-white\\/25 {\n  border-color: rgb(255 255 255 / 0.25);\n}\n\n.border-white\\/\\[\\.05\\] {\n  border-color: rgb(255 255 255 / .05);\n}\n\n.border-white\\/\\[\\.3\\] {\n  border-color: rgb(255 255 255 / .3);\n}\n\n.border-white\\/\\[\\.5\\] {\n  border-color: rgb(255 255 255 / .5);\n}\n\n.border-x-gray-200 {\n  --tw-border-opacity: 1;\n  border-left-color: rgb(229 231 235 / var(--tw-border-opacity));\n  border-right-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n\n.border-b-transparent {\n  border-bottom-color: transparent;\n}\n\n.border-r-gray-200 {\n  --tw-border-opacity: 1;\n  border-right-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n\n.border-r-white\\/\\[\\.7\\] {\n  border-right-color: rgb(255 255 255 / .7);\n}\n\n.border-opacity-50 {\n  --tw-border-opacity: 0.5;\n}\n\n.border-opacity-60 {\n  --tw-border-opacity: 0.6;\n}\n\n.bg-amber-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(245 158 11 / var(--tw-bg-opacity));\n}\n\n.bg-black {\n  --tw-bg-opacity: 1;\n  background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n}\n\n.bg-black\\/60 {\n  background-color: rgb(0 0 0 / 0.6);\n}\n\n.bg-blue-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(219 234 254 / var(--tw-bg-opacity));\n}\n\n.bg-blue-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(96 165 250 / var(--tw-bg-opacity));\n}\n\n.bg-blue-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\n\n.bg-blue-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\n\n.bg-blue-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}\n\n.bg-emerald-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(5 150 105 / var(--tw-bg-opacity));\n}\n\n.bg-gray-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n\n.bg-gray-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n\n.bg-gray-300 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\n\n.bg-gray-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(156 163 175 / var(--tw-bg-opacity));\n}\n\n.bg-gray-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}\n\n.bg-gray-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity));\n}\n\n.bg-gray-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n}\n\n.bg-gray-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\n\n.bg-gray-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\n\n.bg-gray-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\n\n.bg-green-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(34 197 94 / var(--tw-bg-opacity));\n}\n\n.bg-green-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(22 163 74 / var(--tw-bg-opacity));\n}\n\n.bg-indigo-100 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(224 231 255 / var(--tw-bg-opacity));\n}\n\n.bg-indigo-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(199 210 254 / var(--tw-bg-opacity));\n}\n\n.bg-indigo-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(129 140 248 / var(--tw-bg-opacity));\n}\n\n.bg-indigo-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(238 242 255 / var(--tw-bg-opacity));\n}\n\n.bg-indigo-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(99 102 241 / var(--tw-bg-opacity));\n}\n\n.bg-indigo-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(79 70 229 / var(--tw-bg-opacity));\n}\n\n.bg-pink-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(236 72 153 / var(--tw-bg-opacity));\n}\n\n.bg-pink-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(219 39 119 / var(--tw-bg-opacity));\n}\n\n.bg-primary {\n  --tw-bg-opacity: 1;\n  background-color: rgb(38 128 235 / var(--tw-bg-opacity));\n}\n\n.bg-purple-200 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(233 213 255 / var(--tw-bg-opacity));\n}\n\n.bg-red-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}\n\n.bg-red-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(220 38 38 / var(--tw-bg-opacity));\n}\n\n.bg-red-700 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(185 28 28 / var(--tw-bg-opacity));\n}\n\n.bg-rose-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(244 63 94 / var(--tw-bg-opacity));\n}\n\n.bg-slate-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(248 250 252 / var(--tw-bg-opacity));\n}\n\n.bg-slate-800 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity));\n}\n\n.bg-slate-900 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(15 23 42 / var(--tw-bg-opacity));\n}\n\n.bg-teal-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(45 212 191 / var(--tw-bg-opacity));\n}\n\n.bg-teal-500 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(20 184 166 / var(--tw-bg-opacity));\n}\n\n.bg-transparent {\n  background-color: transparent;\n}\n\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n\n.bg-white\\/10 {\n  background-color: rgb(255 255 255 / 0.1);\n}\n\n.bg-white\\/60 {\n  background-color: rgb(255 255 255 / 0.6);\n}\n\n.bg-white\\/75 {\n  background-color: rgb(255 255 255 / 0.75);\n}\n\n.bg-white\\/\\[\\.03\\] {\n  background-color: rgb(255 255 255 / .03);\n}\n\n.bg-white\\/\\[\\.05\\] {\n  background-color: rgb(255 255 255 / .05);\n}\n\n.bg-white\\/\\[\\.075\\] {\n  background-color: rgb(255 255 255 / .075);\n}\n\n.bg-white\\/\\[\\.6\\] {\n  background-color: rgb(255 255 255 / .6);\n}\n\n.bg-yellow-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 204 21 / var(--tw-bg-opacity));\n}\n\n.bg-opacity-50 {\n  --tw-bg-opacity: 0.5;\n}\n\n.bg-opacity-75 {\n  --tw-bg-opacity: 0.75;\n}\n\n.bg-\\[url\\(\\'https\\:\\/\\/images\\.unsplash\\.com\\/photo-1606868306217-dbf5046868d2\\?ixlib\\=rb-4\\.0\\.3\\&ixid\\=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\\&auto\\=format\\&fit\\=crop\\&w\\=1981\\&q\\=80\\'\\)\\] {\n  background-image: url('https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1981&q=80');\n}\n\n.bg-\\[url\\(\\'https\\:\\/\\/images\\.unsplash\\.com\\/photo-1634017839464-5c339ebe3cb4\\?ixlib\\=rb-4\\.0\\.3\\&ixid\\=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\\&auto\\=format\\&fit\\=crop\\&w\\=3000\\&q\\=80\\'\\)\\] {\n  background-image: url('https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80');\n}\n\n.bg-\\[url\\(\\'https\\:\\/\\/preline\\.co\\/assets\\/svg\\/component\\/abstract-1\\.svg\\'\\)\\] {\n  background-image: url('https://preline.co/assets/svg/component/abstract-1.svg');\n}\n\n.bg-\\[url\\(https\\:\\/\\/images\\.unsplash\\.com\\/photo-1604014237800-1c9102c219da\\?ixlib\\=rb-1\\.2\\.1\\&ixid\\=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\\&auto\\=format\\&fit\\=crop\\&w\\=1770\\&q\\=80\\)\\] {\n  background-image: url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80);\n}\n\n.bg-gradient-to-b {\n  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));\n}\n\n.bg-gradient-to-br {\n  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));\n}\n\n.bg-gradient-to-r {\n  background-image: linear-gradient(to right, var(--tw-gradient-stops));\n}\n\n.bg-gradient-to-t {\n  background-image: linear-gradient(to top, var(--tw-gradient-stops));\n}\n\n.bg-gradient-to-tl {\n  background-image: linear-gradient(to top left, var(--tw-gradient-stops));\n}\n\n.bg-gradient-to-tr {\n  background-image: linear-gradient(to top right, var(--tw-gradient-stops));\n}\n\n.from-blue-50 {\n  --tw-gradient-from: #eff6ff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(239 246 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-blue-500 {\n  --tw-gradient-from: #3b82f6 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(59 130 246 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-blue-600 {\n  --tw-gradient-from: #2563eb var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(37 99 235 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-blue-700 {\n  --tw-gradient-from: #1d4ed8 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(29 78 216 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-gray-200 {\n  --tw-gradient-from: #e5e7eb var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(229 231 235 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-gray-700 {\n  --tw-gradient-from: #374151 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(55 65 81 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-gray-800 {\n  --tw-gradient-from: #1f2937 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(31 41 55 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-green-300 {\n  --tw-gradient-from: #86efac var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(134 239 172 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-indigo-500 {\n  --tw-gradient-from: #6366f1 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(99 102 241 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-orange-500 {\n  --tw-gradient-from: #f97316 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(249 115 22 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-pink-500 {\n  --tw-gradient-from: #ec4899 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(236 72 153 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-purple-600 {\n  --tw-gradient-from: #9333ea var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(147 51 234 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-red-500 {\n  --tw-gradient-from: #ef4444 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(239 68 68 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-teal-500 {\n  --tw-gradient-from: #14b8a6 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(20 184 166 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-violet-300\\/50 {\n  --tw-gradient-from: rgb(196 181 253 / 0.5) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(196 181 253 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.from-violet-600\\/\\[\\.15\\] {\n  --tw-gradient-from: rgb(124 58 237 / .15) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(124 58 237 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n\n.via-blue-100 {\n  --tw-gradient-to: rgb(219 234 254 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #dbeafe var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-blue-500 {\n  --tw-gradient-to: rgb(59 130 246 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #3b82f6 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-blue-800 {\n  --tw-gradient-to: rgb(30 64 175 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #1e40af var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-indigo-500 {\n  --tw-gradient-to: rgb(99 102 241 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #6366f1 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-pink-500 {\n  --tw-gradient-to: rgb(236 72 153 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #ec4899 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-purple-400 {\n  --tw-gradient-to: rgb(192 132 252 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #c084fc var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-red-500 {\n  --tw-gradient-to: rgb(239 68 68 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), #ef4444 var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-transparent {\n  --tw-gradient-to: rgb(0 0 0 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), transparent var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.via-white\\/0 {\n  --tw-gradient-to: rgb(255 255 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(255 255 255 / 0) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n\n.to-blue-400 {\n  --tw-gradient-to: #60a5fa var(--tw-gradient-to-position);\n}\n\n.to-blue-50 {\n  --tw-gradient-to: #eff6ff var(--tw-gradient-to-position);\n}\n\n.to-blue-500 {\n  --tw-gradient-to: #3b82f6 var(--tw-gradient-to-position);\n}\n\n.to-blue-900 {\n  --tw-gradient-to: #1e3a8a var(--tw-gradient-to-position);\n}\n\n.to-cyan-400 {\n  --tw-gradient-to: #22d3ee var(--tw-gradient-to-position);\n}\n\n.to-gray-900 {\n  --tw-gradient-to: #111827 var(--tw-gradient-to-position);\n}\n\n.to-purple-100 {\n  --tw-gradient-to: #f3e8ff var(--tw-gradient-to-position);\n}\n\n.to-purple-600 {\n  --tw-gradient-to: #9333ea var(--tw-gradient-to-position);\n}\n\n.to-red-500 {\n  --tw-gradient-to: #ef4444 var(--tw-gradient-to-position);\n}\n\n.to-sky-500 {\n  --tw-gradient-to: #0ea5e9 var(--tw-gradient-to-position);\n}\n\n.to-transparent {\n  --tw-gradient-to: transparent var(--tw-gradient-to-position);\n}\n\n.to-violet-400 {\n  --tw-gradient-to: #a78bfa var(--tw-gradient-to-position);\n}\n\n.to-violet-500 {\n  --tw-gradient-to: #8b5cf6 var(--tw-gradient-to-position);\n}\n\n.to-violet-600 {\n  --tw-gradient-to: #7c3aed var(--tw-gradient-to-position);\n}\n\n.to-white {\n  --tw-gradient-to: #fff var(--tw-gradient-to-position);\n}\n\n.to-white\\/0 {\n  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);\n}\n\n.to-yellow-500 {\n  --tw-gradient-to: #eab308 var(--tw-gradient-to-position);\n}\n\n.bg-cover {\n  background-size: cover;\n}\n\n.bg-clip-text {\n  -webkit-background-clip: text;\n          background-clip: text;\n}\n\n.bg-center {\n  background-position: center;\n}\n\n.bg-no-repeat {\n  background-repeat: no-repeat;\n}\n\n.fill-black {\n  fill: #000;\n}\n\n.fill-blue-600 {\n  fill: #2563eb;\n}\n\n.fill-current {\n  fill: currentColor;\n}\n\n.fill-cyan-500 {\n  fill: #06b6d4;\n}\n\n.fill-cyan-600 {\n  fill: #0891b2;\n}\n\n.fill-gray-300 {\n  fill: #d1d5db;\n}\n\n.fill-gray-500 {\n  fill: #6b7280;\n}\n\n.fill-gray-600 {\n  fill: #4b5563;\n}\n\n.fill-gray-800 {\n  fill: #1f2937;\n}\n\n.fill-orange-500 {\n  fill: #f97316;\n}\n\n.fill-white {\n  fill: #fff;\n}\n\n.object-cover {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.object-center {\n  -o-object-position: center;\n     object-position: center;\n}\n\n.p-0 {\n  padding: 0px;\n}\n\n.p-0\\.5 {\n  padding: 0.125rem;\n}\n\n.p-1 {\n  padding: 0.25rem;\n}\n\n.p-1\\.5 {\n  padding: 0.375rem;\n}\n\n.p-10 {\n  padding: 2.5rem;\n}\n\n.p-12 {\n  padding: 3rem;\n}\n\n.p-2 {\n  padding: 0.5rem;\n}\n\n.p-2\\.5 {\n  padding: 0.625rem;\n}\n\n.p-3 {\n  padding: 0.75rem;\n}\n\n.p-4 {\n  padding: 1rem;\n}\n\n.p-5 {\n  padding: 1.25rem;\n}\n\n.p-6 {\n  padding: 1.5rem;\n}\n\n.p-8 {\n  padding: 2rem;\n}\n\n.p-px {\n  padding: 1px;\n}\n\n.px-1 {\n  padding-left: 0.25rem;\n  padding-right: 0.25rem;\n}\n\n.px-1\\.5 {\n  padding-left: 0.375rem;\n  padding-right: 0.375rem;\n}\n\n.px-10 {\n  padding-left: 2.5rem;\n  padding-right: 2.5rem;\n}\n\n.px-12 {\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n\n.px-2 {\n  padding-left: 0.5rem;\n  padding-right: 0.5rem;\n}\n\n.px-2\\.5 {\n  padding-left: 0.625rem;\n  padding-right: 0.625rem;\n}\n\n.px-24 {\n  padding-left: 6rem;\n  padding-right: 6rem;\n}\n\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n\n.px-3\\.5 {\n  padding-left: 0.875rem;\n  padding-right: 0.875rem;\n}\n\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n\n.px-5 {\n  padding-left: 1.25rem;\n  padding-right: 1.25rem;\n}\n\n.px-6 {\n  padding-left: 1.5rem;\n  padding-right: 1.5rem;\n}\n\n.px-8 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n\n.py-0 {\n  padding-top: 0px;\n  padding-bottom: 0px;\n}\n\n.py-0\\.5 {\n  padding-top: 0.125rem;\n  padding-bottom: 0.125rem;\n}\n\n.py-1 {\n  padding-top: 0.25rem;\n  padding-bottom: 0.25rem;\n}\n\n.py-1\\.5 {\n  padding-top: 0.375rem;\n  padding-bottom: 0.375rem;\n}\n\n.py-10 {\n  padding-top: 2.5rem;\n  padding-bottom: 2.5rem;\n}\n\n.py-12 {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n\n.py-16 {\n  padding-top: 4rem;\n  padding-bottom: 4rem;\n}\n\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n\n.py-2\\.5 {\n  padding-top: 0.625rem;\n  padding-bottom: 0.625rem;\n}\n\n.py-20 {\n  padding-top: 5rem;\n  padding-bottom: 5rem;\n}\n\n.py-24 {\n  padding-top: 6rem;\n  padding-bottom: 6rem;\n}\n\n.py-3 {\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n}\n\n.py-32 {\n  padding-top: 8rem;\n  padding-bottom: 8rem;\n}\n\n.py-4 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n\n.py-5 {\n  padding-top: 1.25rem;\n  padding-bottom: 1.25rem;\n}\n\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n\n.py-8 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n\n.py-\\[\\.4125rem\\] {\n  padding-top: .4125rem;\n  padding-bottom: .4125rem;\n}\n\n.pb-0 {\n  padding-bottom: 0px;\n}\n\n.pb-1 {\n  padding-bottom: 0.25rem;\n}\n\n.pb-1\\.5 {\n  padding-bottom: 0.375rem;\n}\n\n.pb-10 {\n  padding-bottom: 2.5rem;\n}\n\n.pb-12 {\n  padding-bottom: 3rem;\n}\n\n.pb-16 {\n  padding-bottom: 4rem;\n}\n\n.pb-2 {\n  padding-bottom: 0.5rem;\n}\n\n.pb-20 {\n  padding-bottom: 5rem;\n}\n\n.pb-24 {\n  padding-bottom: 6rem;\n}\n\n.pb-3 {\n  padding-bottom: 0.75rem;\n}\n\n.pb-4 {\n  padding-bottom: 1rem;\n}\n\n.pb-5 {\n  padding-bottom: 1.25rem;\n}\n\n.pb-6 {\n  padding-bottom: 1.5rem;\n}\n\n.pb-8 {\n  padding-bottom: 2rem;\n}\n\n.pe-4 {\n  padding-inline-end: 1rem;\n}\n\n.pl-0 {\n  padding-left: 0px;\n}\n\n.pl-10 {\n  padding-left: 2.5rem;\n}\n\n.pl-2 {\n  padding-left: 0.5rem;\n}\n\n.pl-3 {\n  padding-left: 0.75rem;\n}\n\n.pl-4 {\n  padding-left: 1rem;\n}\n\n.pl-5 {\n  padding-left: 1.25rem;\n}\n\n.pl-6 {\n  padding-left: 1.5rem;\n}\n\n.pr-0 {\n  padding-right: 0px;\n}\n\n.pr-10 {\n  padding-right: 2.5rem;\n}\n\n.pr-12 {\n  padding-right: 3rem;\n}\n\n.pr-16 {\n  padding-right: 4rem;\n}\n\n.pr-3 {\n  padding-right: 0.75rem;\n}\n\n.pr-32 {\n  padding-right: 8rem;\n}\n\n.pr-4 {\n  padding-right: 1rem;\n}\n\n.pr-6 {\n  padding-right: 1.5rem;\n}\n\n.pr-8 {\n  padding-right: 2rem;\n}\n\n.ps-11 {\n  padding-inline-start: 2.75rem;\n}\n\n.ps-4 {\n  padding-inline-start: 1rem;\n}\n\n.pt-0 {\n  padding-top: 0px;\n}\n\n.pt-10 {\n  padding-top: 2.5rem;\n}\n\n.pt-12 {\n  padding-top: 3rem;\n}\n\n.pt-16 {\n  padding-top: 4rem;\n}\n\n.pt-2 {\n  padding-top: 0.5rem;\n}\n\n.pt-24 {\n  padding-top: 6rem;\n}\n\n.pt-3 {\n  padding-top: 0.75rem;\n}\n\n.pt-32 {\n  padding-top: 8rem;\n}\n\n.pt-4 {\n  padding-top: 1rem;\n}\n\n.pt-5 {\n  padding-top: 1.25rem;\n}\n\n.pt-6 {\n  padding-top: 1.5rem;\n}\n\n.pt-7 {\n  padding-top: 1.75rem;\n}\n\n.pt-8 {\n  padding-top: 2rem;\n}\n\n.pt-\\[50\\%\\] {\n  padding-top: 50%;\n}\n\n.text-left {\n  text-align: left;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.align-middle {\n  vertical-align: middle;\n}\n\n.font-mono {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n.text-2xl {\n  font-size: 1.5rem;\n  line-height: 2rem;\n}\n\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n\n.text-5xl {\n  font-size: 3rem;\n  line-height: 1;\n}\n\n.text-6xl {\n  font-size: 3.75rem;\n  line-height: 1;\n}\n\n.text-7xl {\n  font-size: 4.5rem;\n  line-height: 1;\n}\n\n.text-\\[\\.25rem\\] {\n  font-size: .25rem;\n}\n\n.text-\\[11px\\] {\n  font-size: 11px;\n}\n\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n\n.text-sm {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n\n.text-xl {\n  font-size: 1.25rem;\n  line-height: 1.75rem;\n}\n\n.text-xs {\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n\n.font-bold {\n  font-weight: 700;\n}\n\n.font-extrabold {\n  font-weight: 800;\n}\n\n.font-light {\n  font-weight: 300;\n}\n\n.font-medium {\n  font-weight: 500;\n}\n\n.font-normal {\n  font-weight: 400;\n}\n\n.font-semibold {\n  font-weight: 600;\n}\n\n.uppercase {\n  text-transform: uppercase;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.italic {\n  font-style: italic;\n}\n\n.not-italic {\n  font-style: normal;\n}\n\n.leading-10 {\n  line-height: 2.5rem;\n}\n\n.leading-3 {\n  line-height: .75rem;\n}\n\n.leading-4 {\n  line-height: 1rem;\n}\n\n.leading-5 {\n  line-height: 1.25rem;\n}\n\n.leading-6 {\n  line-height: 1.5rem;\n}\n\n.leading-7 {\n  line-height: 1.75rem;\n}\n\n.leading-8 {\n  line-height: 2rem;\n}\n\n.leading-\\[4rem\\] {\n  line-height: 4rem;\n}\n\n.leading-loose {\n  line-height: 2;\n}\n\n.leading-none {\n  line-height: 1;\n}\n\n.leading-normal {\n  line-height: 1.5;\n}\n\n.leading-relaxed {\n  line-height: 1.625;\n}\n\n.leading-tight {\n  line-height: 1.25;\n}\n\n.tracking-tight {\n  letter-spacing: -0.025em;\n}\n\n.tracking-wide {\n  letter-spacing: 0.025em;\n}\n\n.tracking-wider {\n  letter-spacing: 0.05em;\n}\n\n.tracking-widest {\n  letter-spacing: 0.1em;\n}\n\n.text-\\[\\#00acee\\] {\n  --tw-text-opacity: 1;\n  color: rgb(0 172 238 / var(--tw-text-opacity));\n}\n\n.text-\\[\\#39569c\\] {\n  --tw-text-opacity: 1;\n  color: rgb(57 86 156 / var(--tw-text-opacity));\n}\n\n.text-\\[\\#ea4c89\\] {\n  --tw-text-opacity: 1;\n  color: rgb(234 76 137 / var(--tw-text-opacity));\n}\n\n.text-amber-500 {\n  --tw-text-opacity: 1;\n  color: rgb(245 158 11 / var(--tw-text-opacity));\n}\n\n.text-black {\n  --tw-text-opacity: 1;\n  color: rgb(0 0 0 / var(--tw-text-opacity));\n}\n\n.text-blue-200 {\n  --tw-text-opacity: 1;\n  color: rgb(191 219 254 / var(--tw-text-opacity));\n}\n\n.text-blue-300 {\n  --tw-text-opacity: 1;\n  color: rgb(147 197 253 / var(--tw-text-opacity));\n}\n\n.text-blue-400 {\n  --tw-text-opacity: 1;\n  color: rgb(96 165 250 / var(--tw-text-opacity));\n}\n\n.text-blue-500 {\n  --tw-text-opacity: 1;\n  color: rgb(59 130 246 / var(--tw-text-opacity));\n}\n\n.text-blue-600 {\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity));\n}\n\n.text-blue-700 {\n  --tw-text-opacity: 1;\n  color: rgb(29 78 216 / var(--tw-text-opacity));\n}\n\n.text-blue-800 {\n  --tw-text-opacity: 1;\n  color: rgb(30 64 175 / var(--tw-text-opacity));\n}\n\n.text-cyan-500 {\n  --tw-text-opacity: 1;\n  color: rgb(6 182 212 / var(--tw-text-opacity));\n}\n\n.text-gray-100 {\n  --tw-text-opacity: 1;\n  color: rgb(243 244 246 / var(--tw-text-opacity));\n}\n\n.text-gray-200 {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}\n\n.text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n\n.text-gray-400 {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n\n.text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n\n.text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\n\n.text-gray-700 {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n\n.text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity));\n}\n\n.text-gray-900 {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\n\n.text-green-500 {\n  --tw-text-opacity: 1;\n  color: rgb(34 197 94 / var(--tw-text-opacity));\n}\n\n.text-green-600 {\n  --tw-text-opacity: 1;\n  color: rgb(22 163 74 / var(--tw-text-opacity));\n}\n\n.text-indigo-100 {\n  --tw-text-opacity: 1;\n  color: rgb(224 231 255 / var(--tw-text-opacity));\n}\n\n.text-indigo-200 {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\n\n.text-indigo-300 {\n  --tw-text-opacity: 1;\n  color: rgb(165 180 252 / var(--tw-text-opacity));\n}\n\n.text-indigo-400 {\n  --tw-text-opacity: 1;\n  color: rgb(129 140 248 / var(--tw-text-opacity));\n}\n\n.text-indigo-50 {\n  --tw-text-opacity: 1;\n  color: rgb(238 242 255 / var(--tw-text-opacity));\n}\n\n.text-indigo-500 {\n  --tw-text-opacity: 1;\n  color: rgb(99 102 241 / var(--tw-text-opacity));\n}\n\n.text-indigo-600 {\n  --tw-text-opacity: 1;\n  color: rgb(79 70 229 / var(--tw-text-opacity));\n}\n\n.text-indigo-800 {\n  --tw-text-opacity: 1;\n  color: rgb(55 48 163 / var(--tw-text-opacity));\n}\n\n.text-orange-500 {\n  --tw-text-opacity: 1;\n  color: rgb(249 115 22 / var(--tw-text-opacity));\n}\n\n.text-pink-500 {\n  --tw-text-opacity: 1;\n  color: rgb(236 72 153 / var(--tw-text-opacity));\n}\n\n.text-pink-600 {\n  --tw-text-opacity: 1;\n  color: rgb(219 39 119 / var(--tw-text-opacity));\n}\n\n.text-red-400 {\n  --tw-text-opacity: 1;\n  color: rgb(248 113 113 / var(--tw-text-opacity));\n}\n\n.text-red-500 {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}\n\n.text-red-600 {\n  --tw-text-opacity: 1;\n  color: rgb(220 38 38 / var(--tw-text-opacity));\n}\n\n.text-red-700 {\n  --tw-text-opacity: 1;\n  color: rgb(185 28 28 / var(--tw-text-opacity));\n}\n\n.text-rose-600 {\n  --tw-text-opacity: 1;\n  color: rgb(225 29 72 / var(--tw-text-opacity));\n}\n\n.text-rose-700 {\n  --tw-text-opacity: 1;\n  color: rgb(190 18 60 / var(--tw-text-opacity));\n}\n\n.text-slate-400 {\n  --tw-text-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-text-opacity));\n}\n\n.text-slate-600 {\n  --tw-text-opacity: 1;\n  color: rgb(71 85 105 / var(--tw-text-opacity));\n}\n\n.text-teal-300 {\n  --tw-text-opacity: 1;\n  color: rgb(94 234 212 / var(--tw-text-opacity));\n}\n\n.text-transparent {\n  color: transparent;\n}\n\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n\n.text-white\\/50 {\n  color: rgb(255 255 255 / 0.5);\n}\n\n.text-white\\/90 {\n  color: rgb(255 255 255 / 0.9);\n}\n\n.text-white\\/\\[\\.5\\] {\n  color: rgb(255 255 255 / .5);\n}\n\n.text-white\\/\\[\\.8\\] {\n  color: rgb(255 255 255 / .8);\n}\n\n.text-white\\/\\[\\.9\\] {\n  color: rgb(255 255 255 / .9);\n}\n\n.text-yellow-400 {\n  --tw-text-opacity: 1;\n  color: rgb(250 204 21 / var(--tw-text-opacity));\n}\n\n.underline {\n  text-decoration-line: underline;\n}\n\n.line-through {\n  text-decoration-line: line-through;\n}\n\n.decoration-blue-500 {\n  text-decoration-color: #3b82f6;\n}\n\n.decoration-2 {\n  text-decoration-thickness: 2px;\n}\n\n.underline-offset-2 {\n  text-underline-offset: 2px;\n}\n\n.antialiased {\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.placeholder-gray-300::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-placeholder-opacity));\n}\n\n.placeholder-gray-300::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-placeholder-opacity));\n}\n\n.placeholder-gray-400::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-placeholder-opacity));\n}\n\n.placeholder-gray-400::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-placeholder-opacity));\n}\n\n.placeholder-gray-500::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-placeholder-opacity));\n}\n\n.placeholder-gray-500::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-placeholder-opacity));\n}\n\n.placeholder-indigo-100::-moz-placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(224 231 255 / var(--tw-placeholder-opacity));\n}\n\n.placeholder-indigo-100::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(224 231 255 / var(--tw-placeholder-opacity));\n}\n\n.caret-white {\n  caret-color: #fff;\n}\n\n.opacity-0 {\n  opacity: 0;\n}\n\n.opacity-100 {\n  opacity: 1;\n}\n\n.opacity-20 {\n  opacity: 0.2;\n}\n\n.opacity-25 {\n  opacity: 0.25;\n}\n\n.opacity-50 {\n  opacity: 0.5;\n}\n\n.opacity-75 {\n  opacity: 0.75;\n}\n\n.mix-blend-multiply {\n  mix-blend-mode: multiply;\n}\n\n.shadow {\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-2xl {\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-\\[0_2\\.75rem_3\\.5rem_-2rem_rgb\\(45_55_75_\\/_20\\%\\)\\2c _0_0_5rem_-2rem_rgb\\(45_55_75_\\/_15\\%\\)\\] {\n  --tw-shadow: 0 2.75rem 3.5rem -2rem rgb(45 55 75 / 20%), 0 0 5rem -2rem rgb(45 55 75 / 15%);\n  --tw-shadow-colored: 0 2.75rem 3.5rem -2rem var(--tw-shadow-color), 0 0 5rem -2rem var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-\\[0_2\\.75rem_5\\.5rem_-3\\.5rem_rgb\\(0_0_0_\\/_20\\%\\)\\2c _0_2rem_4rem_-2rem_rgb\\(0_0_0_\\/_30\\%\\)\\2c _inset_0_-0\\.1875rem_0\\.3125rem_0_rgb\\(0_0_0_\\/_20\\%\\)\\] {\n  --tw-shadow: 0 2.75rem 5.5rem -3.5rem rgb(0 0 0 / 20%), 0 2rem 4rem -2rem rgb(0 0 0 / 30%), inset 0 -0.1875rem 0.3125rem 0 rgb(0 0 0 / 20%);\n  --tw-shadow-colored: 0 2.75rem 5.5rem -3.5rem var(--tw-shadow-color), 0 2rem 4rem -2rem var(--tw-shadow-color), inset 0 -0.1875rem 0.3125rem 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-\\[0_2\\.75rem_5\\.5rem_-3\\.5rem_rgb\\(45_55_75_\\/_20\\%\\)\\2c _0_2rem_4rem_-2rem_rgb\\(45_55_75_\\/_30\\%\\)\\2c _inset_0_-0\\.1875rem_0\\.3125rem_0_rgb\\(45_55_75_\\/_20\\%\\)\\] {\n  --tw-shadow: 0 2.75rem 5.5rem -3.5rem rgb(45 55 75 / 20%), 0 2rem 4rem -2rem rgb(45 55 75 / 30%), inset 0 -0.1875rem 0.3125rem 0 rgb(45 55 75 / 20%);\n  --tw-shadow-colored: 0 2.75rem 5.5rem -3.5rem var(--tw-shadow-color), 0 2rem 4rem -2rem var(--tw-shadow-color), inset 0 -0.1875rem 0.3125rem 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-md {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-xl {\n  --tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-gray-100 {\n  --tw-shadow-color: #f3f4f6;\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-gray-200 {\n  --tw-shadow-color: #e5e7eb;\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-gray-300\\/50 {\n  --tw-shadow-color: rgb(209 213 219 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.shadow-transparent {\n  --tw-shadow-color: transparent;\n  --tw-shadow: var(--tw-shadow-colored);\n}\n\n.outline-none {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n\n.ring {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.ring-1 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.ring-2 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.ring-4 {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.ring-blue-200 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity));\n}\n\n.ring-blue-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));\n}\n\n.ring-gray-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));\n}\n\n.ring-gray-800 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));\n}\n\n.ring-indigo-300 {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(165 180 252 / var(--tw-ring-opacity));\n}\n\n.ring-transparent {\n  --tw-ring-color: transparent;\n}\n\n.ring-white {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));\n}\n\n.ring-offset-1 {\n  --tw-ring-offset-width: 1px;\n}\n\n.ring-offset-white {\n  --tw-ring-offset-color: #fff;\n}\n\n.blur-3xl {\n  --tw-blur: blur(64px);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.grayscale {\n  --tw-grayscale: grayscale(100%);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.sepia {\n  --tw-sepia: sepia(100%);\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n.backdrop-blur {\n  --tw-backdrop-blur: blur(8px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n\n.backdrop-blur-lg {\n  --tw-backdrop-blur: blur(16px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n\n.backdrop-blur-md {\n  --tw-backdrop-blur: blur(12px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n\n.backdrop-blur-sm {\n  --tw-backdrop-blur: blur(4px);\n  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n          backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);\n}\n\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-\\[height\\] {\n  transition-property: height;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-\\[opacity\\2c margin\\] {\n  transition-property: opacity,margin;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-all {\n  transition-property: all;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-colors {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-opacity {\n  transition-property: opacity;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.transition-transform {\n  transition-property: transform;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n\n.duration-100 {\n  transition-duration: 100ms;\n}\n\n.duration-150 {\n  transition-duration: 150ms;\n}\n\n.duration-200 {\n  transition-duration: 200ms;\n}\n\n.duration-300 {\n  transition-duration: 300ms;\n}\n\n.duration-500 {\n  transition-duration: 500ms;\n}\n\n.duration-700 {\n  transition-duration: 700ms;\n}\n\n.duration-\\[0\\.1ms\\] {\n  transition-duration: 0.1ms;\n}\n\n.ease-in-out {\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.ease-out {\n  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);\n}\n\n.\\[--adaptive\\:none\\] {\n  --adaptive: none;\n}\n\n.\\[--placement\\:bottom\\] {\n  --placement: bottom;\n}\n\n.\\[--placement\\:top-left\\] {\n  --placement: top-left;\n}\n\n.\\[--strategy\\:static\\] {\n  --strategy: static;\n}\n\n.\\[--trigger\\:hover\\] {\n  --trigger: hover;\n}\n\n.\\[column-fill\\:_balance\\] {\n  -moz-column-fill: balance;\n       column-fill: balance;\n}\n\n.transition {\n  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);\n}\n\n.hide-scrollbars {\n  -ms-overflow-style: none; /* Internet Explorer 10+ */\n  scrollbar-width: none; /* Firefox */\n}\n.hide-scrollbars::-webkit-scrollbar {\n  display: none; /* Safari and Chrome */\n}\n.placeholder\\:text-white::-moz-placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.placeholder\\:text-white::placeholder {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.before\\:absolute::before {\n  content: var(--tw-content);\n  position: absolute;\n}\n.before\\:-inset-px::before {\n  content: var(--tw-content);\n  inset: -1px;\n}\n.before\\:inset-0::before {\n  content: var(--tw-content);\n  inset: 0px;\n}\n.before\\:inset-x-0::before {\n  content: var(--tw-content);\n  left: 0px;\n  right: 0px;\n}\n.before\\:-right-5::before {\n  content: var(--tw-content);\n  right: -1.25rem;\n}\n.before\\:-top-5::before {\n  content: var(--tw-content);\n  top: -1.25rem;\n}\n.before\\:left-0::before {\n  content: var(--tw-content);\n  left: 0px;\n}\n.before\\:left-1\\/2::before {\n  content: var(--tw-content);\n  left: 50%;\n}\n.before\\:right-2::before {\n  content: var(--tw-content);\n  right: 0.5rem;\n}\n.before\\:right-3::before {\n  content: var(--tw-content);\n  right: 0.75rem;\n}\n.before\\:top-0::before {\n  content: var(--tw-content);\n  top: 0px;\n}\n.before\\:top-1\\/2::before {\n  content: var(--tw-content);\n  top: 50%;\n}\n.before\\:-z-\\[1\\]::before {\n  content: var(--tw-content);\n  z-index: -1;\n}\n.before\\:z-\\[1\\]::before {\n  content: var(--tw-content);\n  z-index: 1;\n}\n.before\\:mr-6::before {\n  content: var(--tw-content);\n  margin-right: 1.5rem;\n}\n.before\\:inline-block::before {\n  content: var(--tw-content);\n  display: inline-block;\n}\n.before\\:h-1::before {\n  content: var(--tw-content);\n  height: 0.25rem;\n}\n.before\\:h-5::before {\n  content: var(--tw-content);\n  height: 1.25rem;\n}\n.before\\:h-6::before {\n  content: var(--tw-content);\n  height: 1.5rem;\n}\n.before\\:h-full::before {\n  content: var(--tw-content);\n  height: 100%;\n}\n.before\\:w-1::before {\n  content: var(--tw-content);\n  width: 0.25rem;\n}\n.before\\:w-5::before {\n  content: var(--tw-content);\n  width: 1.25rem;\n}\n.before\\:w-6::before {\n  content: var(--tw-content);\n  width: 1.5rem;\n}\n.before\\:w-full::before {\n  content: var(--tw-content);\n  width: 100%;\n}\n.before\\:flex-\\[1_1_0\\%\\]::before {\n  content: var(--tw-content);\n  flex: 1 1 0%;\n}\n.before\\:-translate-x-1\\/2::before {\n  content: var(--tw-content);\n  --tw-translate-x: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.before\\:-translate-y-1\\/2::before {\n  content: var(--tw-content);\n  --tw-translate-y: -50%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.before\\:translate-x-0::before {\n  content: var(--tw-content);\n  --tw-translate-x: 0px;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.before\\:transform::before {\n  content: var(--tw-content);\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.before\\:rounded-full::before {\n  content: var(--tw-content);\n  border-radius: 9999px;\n}\n.before\\:rounded-xl::before {\n  content: var(--tw-content);\n  border-radius: 0.75rem;\n}\n.before\\:border-t::before {\n  content: var(--tw-content);\n  border-top-width: 1px;\n}\n.before\\:border-gray-200::before {\n  content: var(--tw-content);\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n.before\\:bg-gray-300::before {\n  content: var(--tw-content);\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\n.before\\:bg-white::before {\n  content: var(--tw-content);\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.before\\:bg-\\[radial-gradient\\(closest-side\\2c \\#cbd5e1\\2c transparent\\)\\]::before {\n  content: var(--tw-content);\n  background-image: radial-gradient(closest-side,#cbd5e1,transparent);\n}\n.before\\:bg-\\[url\\(\\'https\\:\\/\\/preline\\.co\\/assets\\/svg\\/component\\/squared-bg-element-dark\\.svg\\'\\)\\]::before {\n  content: var(--tw-content);\n  background-image: url('https://preline.co/assets/svg/component/squared-bg-element-dark.svg');\n}\n.before\\:bg-gradient-to-br::before {\n  content: var(--tw-content);\n  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));\n}\n.before\\:bg-gradient-to-t::before {\n  content: var(--tw-content);\n  background-image: linear-gradient(to top, var(--tw-gradient-stops));\n}\n.before\\:from-blue-600::before {\n  content: var(--tw-content);\n  --tw-gradient-from: #2563eb var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(37 99 235 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.before\\:from-gray-900\\/\\[\\.7\\]::before {\n  content: var(--tw-content);\n  --tw-gradient-from: rgb(17 24 39 / .7) var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(17 24 39 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.before\\:via-transparent::before {\n  content: var(--tw-content);\n  --tw-gradient-to: rgb(0 0 0 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), transparent var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n.before\\:to-violet-600::before {\n  content: var(--tw-content);\n  --tw-gradient-to: #7c3aed var(--tw-gradient-to-position);\n}\n.before\\:bg-cover::before {\n  content: var(--tw-content);\n  background-size: cover;\n}\n.before\\:bg-top::before {\n  content: var(--tw-content);\n  background-position: top;\n}\n.before\\:bg-no-repeat::before {\n  content: var(--tw-content);\n  background-repeat: no-repeat;\n}\n.before\\:text-gray-300::before {\n  content: var(--tw-content);\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.before\\:shadow::before {\n  content: var(--tw-content);\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.before\\:ring-0::before {\n  content: var(--tw-content);\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.before\\:transition::before {\n  content: var(--tw-content);\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.before\\:duration-200::before {\n  content: var(--tw-content);\n  transition-duration: 200ms;\n}\n.before\\:ease-in-out::before {\n  content: var(--tw-content);\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n}\n.before\\:content-\\[\\'\\/\\'\\]::before {\n  --tw-content: '/';\n  content: var(--tw-content);\n}\n.after\\:absolute::after {\n  content: var(--tw-content);\n  position: absolute;\n}\n.after\\:inset-x-0::after {\n  content: var(--tw-content);\n  left: 0px;\n  right: 0px;\n}\n.after\\:bottom-0::after {\n  content: var(--tw-content);\n  bottom: 0px;\n}\n.after\\:z-10::after {\n  content: var(--tw-content);\n  z-index: 10;\n}\n.after\\:ml-6::after {\n  content: var(--tw-content);\n  margin-left: 1.5rem;\n}\n.after\\:h-48::after {\n  content: var(--tw-content);\n  height: 12rem;\n}\n.after\\:w-full::after {\n  content: var(--tw-content);\n  width: 100%;\n}\n.after\\:flex-\\[1_1_0\\%\\]::after {\n  content: var(--tw-content);\n  flex: 1 1 0%;\n}\n.after\\:border-t::after {\n  content: var(--tw-content);\n  border-top-width: 1px;\n}\n.after\\:border-gray-200::after {\n  content: var(--tw-content);\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n.after\\:bg-gradient-to-t::after {\n  content: var(--tw-content);\n  background-image: linear-gradient(to top, var(--tw-gradient-stops));\n}\n.after\\:from-white::after {\n  content: var(--tw-content);\n  --tw-gradient-from: #fff var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.after\\:via-white\\/70::after {\n  content: var(--tw-content);\n  --tw-gradient-to: rgb(255 255 255 / 0)  var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), rgb(255 255 255 / 0.7) var(--tw-gradient-via-position), var(--tw-gradient-to);\n}\n.first\\:pt-0:first-child {\n  padding-top: 0px;\n}\n.last\\:border-b-0:last-child {\n  border-bottom-width: 0px;\n}\n.last\\:pb-0:last-child {\n  padding-bottom: 0px;\n}\n.last\\:pr-0:last-child {\n  padding-right: 0px;\n}\n.last-of-type\\:before\\:hidden:last-of-type::before {\n  content: var(--tw-content);\n  display: none;\n}\n.checked\\:bg-blue-600:checked {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\n.checked\\:bg-none:checked {\n  background-image: none;\n}\n.checked\\:before\\:translate-x-full:checked::before {\n  content: var(--tw-content);\n  --tw-translate-x: 100%;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.checked\\:before\\:bg-blue-200:checked::before {\n  content: var(--tw-content);\n  --tw-bg-opacity: 1;\n  background-color: rgb(191 219 254 / var(--tw-bg-opacity));\n}\n.focus-within\\:border-blue-400:focus-within {\n  --tw-border-opacity: 1;\n  border-color: rgb(96 165 250 / var(--tw-border-opacity));\n}\n.focus-within\\:ring:focus-within {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus-within\\:ring-blue-300:focus-within {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));\n}\n.focus-within\\:ring-opacity-40:focus-within {\n  --tw-ring-opacity: 0.4;\n}\n.hover\\:-translate-y-1:hover {\n  --tw-translate-y: -0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.hover\\:border-blue-100:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(219 234 254 / var(--tw-border-opacity));\n}\n.hover\\:border-blue-500:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity));\n}\n.hover\\:border-current:hover {\n  border-color: currentColor;\n}\n.hover\\:border-gray-200:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(229 231 235 / var(--tw-border-opacity));\n}\n.hover\\:border-gray-300:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(209 213 219 / var(--tw-border-opacity));\n}\n.hover\\:border-gray-400:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(156 163 175 / var(--tw-border-opacity));\n}\n.hover\\:border-gray-500:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(107 114 128 / var(--tw-border-opacity));\n}\n.hover\\:border-gray-600:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(75 85 99 / var(--tw-border-opacity));\n}\n.hover\\:border-gray-800:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(31 41 55 / var(--tw-border-opacity));\n}\n.hover\\:border-pink-500\\/10:hover {\n  border-color: rgb(236 72 153 / 0.1);\n}\n.hover\\:border-red-700:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(185 28 28 / var(--tw-border-opacity));\n}\n.hover\\:border-transparent:hover {\n  border-color: transparent;\n}\n.hover\\:border-white\\/\\[\\.1\\]:hover {\n  border-color: rgb(255 255 255 / .1);\n}\n.hover\\:bg-blue-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(191 219 254 / var(--tw-bg-opacity));\n}\n.hover\\:bg-blue-400:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(96 165 250 / var(--tw-bg-opacity));\n}\n.hover\\:bg-blue-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 246 255 / var(--tw-bg-opacity));\n}\n.hover\\:bg-blue-500:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\n.hover\\:bg-blue-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\n.hover\\:bg-blue-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}\n.hover\\:bg-blue-800:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(30 64 175 / var(--tw-bg-opacity));\n}\n.hover\\:bg-emerald-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(4 120 87 / var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-100:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-200:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-300:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(209 213 219 / var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-50:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 250 251 / var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-500:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(107 114 128 / var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-800:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\n.hover\\:bg-gray-900:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n}\n.hover\\:bg-indigo-300:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(165 180 252 / var(--tw-bg-opacity));\n}\n.hover\\:bg-indigo-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(79 70 229 / var(--tw-bg-opacity));\n}\n.hover\\:bg-indigo-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(67 56 202 / var(--tw-bg-opacity));\n}\n.hover\\:bg-pink-600:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(219 39 119 / var(--tw-bg-opacity));\n}\n.hover\\:bg-red-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(185 28 28 / var(--tw-bg-opacity));\n}\n.hover\\:bg-rose-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(190 18 60 / var(--tw-bg-opacity));\n}\n.hover\\:bg-transparent:hover {\n  background-color: transparent;\n}\n.hover\\:bg-white:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.hover\\:bg-white\\/10:hover {\n  background-color: rgb(255 255 255 / 0.1);\n}\n.hover\\:bg-white\\/20:hover {\n  background-color: rgb(255 255 255 / 0.2);\n}\n.hover\\:bg-white\\/\\[\\.1\\]:hover {\n  background-color: rgb(255 255 255 / .1);\n}\n.hover\\:from-blue-600:hover {\n  --tw-gradient-from: #2563eb var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(37 99 235 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.hover\\:from-gray-600:hover {\n  --tw-gradient-from: #4b5563 var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(75 85 99 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.hover\\:from-violet-600:hover {\n  --tw-gradient-from: #7c3aed var(--tw-gradient-from-position);\n  --tw-gradient-to: rgb(124 58 237 / 0) var(--tw-gradient-to-position);\n  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n}\n.hover\\:to-blue-600:hover {\n  --tw-gradient-to: #2563eb var(--tw-gradient-to-position);\n}\n.hover\\:to-gray-600:hover {\n  --tw-gradient-to: #4b5563 var(--tw-gradient-to-position);\n}\n.hover\\:text-blue-400:hover {\n  --tw-text-opacity: 1;\n  color: rgb(96 165 250 / var(--tw-text-opacity));\n}\n.hover\\:text-blue-500:hover {\n  --tw-text-opacity: 1;\n  color: rgb(59 130 246 / var(--tw-text-opacity));\n}\n.hover\\:text-blue-500\\/75:hover {\n  color: rgb(59 130 246 / 0.75);\n}\n.hover\\:text-blue-600:hover {\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity));\n}\n.hover\\:text-blue-600\\/75:hover {\n  color: rgb(37 99 235 / 0.75);\n}\n.hover\\:text-blue-700:hover {\n  --tw-text-opacity: 1;\n  color: rgb(29 78 216 / var(--tw-text-opacity));\n}\n.hover\\:text-blue-700\\/75:hover {\n  color: rgb(29 78 216 / 0.75);\n}\n.hover\\:text-blue-800:hover {\n  --tw-text-opacity: 1;\n  color: rgb(30 64 175 / var(--tw-text-opacity));\n}\n.hover\\:text-gray-200:hover {\n  --tw-text-opacity: 1;\n  color: rgb(229 231 235 / var(--tw-text-opacity));\n}\n.hover\\:text-gray-300:hover {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.hover\\:text-gray-300\\/75:hover {\n  color: rgb(209 213 219 / 0.75);\n}\n.hover\\:text-gray-400:hover {\n  --tw-text-opacity: 1;\n  color: rgb(156 163 175 / var(--tw-text-opacity));\n}\n.hover\\:text-gray-500:hover {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n.hover\\:text-gray-500\\/75:hover {\n  color: rgb(107 114 128 / 0.75);\n}\n.hover\\:text-gray-600:hover {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\n.hover\\:text-gray-600\\/75:hover {\n  color: rgb(75 85 99 / 0.75);\n}\n.hover\\:text-gray-700:hover {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n.hover\\:text-gray-700\\/75:hover {\n  color: rgb(55 65 81 / 0.75);\n}\n.hover\\:text-gray-800:hover {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity));\n}\n.hover\\:text-gray-900:hover {\n  --tw-text-opacity: 1;\n  color: rgb(17 24 39 / var(--tw-text-opacity));\n}\n.hover\\:text-gray-900\\/75:hover {\n  color: rgb(17 24 39 / 0.75);\n}\n.hover\\:text-indigo-100:hover {\n  --tw-text-opacity: 1;\n  color: rgb(224 231 255 / var(--tw-text-opacity));\n}\n.hover\\:text-indigo-500:hover {\n  --tw-text-opacity: 1;\n  color: rgb(99 102 241 / var(--tw-text-opacity));\n}\n.hover\\:text-indigo-600:hover {\n  --tw-text-opacity: 1;\n  color: rgb(79 70 229 / var(--tw-text-opacity));\n}\n.hover\\:text-red-500:hover {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}\n.hover\\:text-red-700:hover {\n  --tw-text-opacity: 1;\n  color: rgb(185 28 28 / var(--tw-text-opacity));\n}\n.hover\\:text-rose-700:hover {\n  --tw-text-opacity: 1;\n  color: rgb(190 18 60 / var(--tw-text-opacity));\n}\n.hover\\:text-slate-500:hover {\n  --tw-text-opacity: 1;\n  color: rgb(100 116 139 / var(--tw-text-opacity));\n}\n.hover\\:text-white:hover {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.hover\\:text-white\\/75:hover {\n  color: rgb(255 255 255 / 0.75);\n}\n.hover\\:text-white\\/80:hover {\n  color: rgb(255 255 255 / 0.8);\n}\n.hover\\:text-white\\/\\[\\.8\\]:hover {\n  color: rgb(255 255 255 / .8);\n}\n.hover\\:underline:hover {\n  text-decoration-line: underline;\n}\n.hover\\:no-underline:hover {\n  text-decoration-line: none;\n}\n.hover\\:decoration-gray-400:hover {\n  text-decoration-color: #9ca3af;\n}\n.hover\\:opacity-100:hover {\n  opacity: 1;\n}\n.hover\\:opacity-50:hover {\n  opacity: 0.5;\n}\n.hover\\:opacity-70:hover {\n  opacity: 0.7;\n}\n.hover\\:opacity-75:hover {\n  opacity: 0.75;\n}\n.hover\\:opacity-80:hover {\n  opacity: 0.8;\n}\n.hover\\:shadow-lg:hover {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.hover\\:shadow-md:hover {\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.hover\\:shadow-sm:hover {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.hover\\:shadow-blue-700\\/50:hover {\n  --tw-shadow-color: rgb(29 78 216 / 0.5);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n.hover\\:shadow-pink-500\\/10:hover {\n  --tw-shadow-color: rgb(236 72 153 / 0.1);\n  --tw-shadow: var(--tw-shadow-colored);\n}\n.hover\\:ring-1:hover {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.hover\\:ring-gray-200:hover {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity));\n}\n.focus\\:z-10:focus {\n  z-index: 10;\n}\n.focus\\:border-blue-400:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(96 165 250 / var(--tw-border-opacity));\n}\n.focus\\:border-blue-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(59 130 246 / var(--tw-border-opacity));\n}\n.focus\\:border-blue-600:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(37 99 235 / var(--tw-border-opacity));\n}\n.focus\\:border-indigo-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(99 102 241 / var(--tw-border-opacity));\n}\n.focus\\:border-white\\/30:focus {\n  border-color: rgb(255 255 255 / 0.3);\n}\n.focus\\:bg-blue-400:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(96 165 250 / var(--tw-bg-opacity));\n}\n.focus\\:bg-blue-500:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\n.focus\\:bg-blue-600:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n}\n.focus\\:bg-gray-100:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n}\n.focus\\:bg-gray-600:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n}\n.focus\\:bg-gray-800:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n}\n.focus\\:bg-pink-600:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(219 39 119 / var(--tw-bg-opacity));\n}\n.focus\\:bg-transparent:focus {\n  background-color: transparent;\n}\n.focus\\:bg-white:focus {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.focus\\:text-gray-600:focus {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\n.focus\\:text-gray-700:focus {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n.focus\\:text-white:focus {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.focus\\:placeholder-transparent:focus::-moz-placeholder {\n  color: transparent;\n}\n.focus\\:placeholder-transparent:focus::placeholder {\n  color: transparent;\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus\\:ring:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-0:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-2:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-4:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-blue-200:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(191 219 254 / var(--tw-ring-opacity));\n}\n.focus\\:ring-blue-300:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(147 197 253 / var(--tw-ring-opacity));\n}\n.focus\\:ring-blue-400:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(96 165 250 / var(--tw-ring-opacity));\n}\n.focus\\:ring-blue-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));\n}\n.focus\\:ring-blue-600:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(37 99 235 / var(--tw-ring-opacity));\n}\n.focus\\:ring-blue-900:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(30 58 138 / var(--tw-ring-opacity));\n}\n.focus\\:ring-gray-100:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(243 244 246 / var(--tw-ring-opacity));\n}\n.focus\\:ring-gray-200:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(229 231 235 / var(--tw-ring-opacity));\n}\n.focus\\:ring-gray-300:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(209 213 219 / var(--tw-ring-opacity));\n}\n.focus\\:ring-gray-400:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(156 163 175 / var(--tw-ring-opacity));\n}\n.focus\\:ring-gray-800:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));\n}\n.focus\\:ring-indigo-200:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(199 210 254 / var(--tw-ring-opacity));\n}\n.focus\\:ring-white:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));\n}\n.focus\\:ring-white\\/30:focus {\n  --tw-ring-color: rgb(255 255 255 / 0.3);\n}\n.focus\\:ring-white\\/\\[\\.5\\]:focus {\n  --tw-ring-color: rgb(255 255 255 / .5);\n}\n.focus\\:ring-yellow-400:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(250 204 21 / var(--tw-ring-opacity));\n}\n.focus\\:ring-opacity-40:focus {\n  --tw-ring-opacity: 0.4;\n}\n.focus\\:ring-opacity-50:focus {\n  --tw-ring-opacity: 0.5;\n}\n.focus\\:ring-opacity-80:focus {\n  --tw-ring-opacity: 0.8;\n}\n.focus\\:ring-offset-2:focus {\n  --tw-ring-offset-width: 2px;\n}\n.focus\\:ring-offset-blue-600:focus {\n  --tw-ring-offset-color: #2563eb;\n}\n.focus\\:ring-offset-gray-800:focus {\n  --tw-ring-offset-color: #1f2937;\n}\n.focus\\:ring-offset-gray-900:focus {\n  --tw-ring-offset-color: #111827;\n}\n.focus\\:ring-offset-slate-900:focus {\n  --tw-ring-offset-color: #0f172a;\n}\n.focus\\:ring-offset-white:focus {\n  --tw-ring-offset-color: #fff;\n}\n.focus-visible\\:ring:focus-visible {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.active\\:bg-blue-500:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n}\n.active\\:bg-blue-700:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n}\n.active\\:bg-gray-200:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n}\n.active\\:bg-gray-600:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n}\n.active\\:bg-indigo-400:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(129 140 248 / var(--tw-bg-opacity));\n}\n.active\\:bg-indigo-700:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(67 56 202 / var(--tw-bg-opacity));\n}\n.active\\:bg-indigo-800:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(55 48 163 / var(--tw-bg-opacity));\n}\n.active\\:bg-red-500:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(239 68 68 / var(--tw-bg-opacity));\n}\n.active\\:bg-rose-500:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(244 63 94 / var(--tw-bg-opacity));\n}\n.active\\:bg-white\\/90:active {\n  background-color: rgb(255 255 255 / 0.9);\n}\n.active\\:text-gray-300:active {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.active\\:text-gray-600:active {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\n.active\\:text-gray-700:active {\n  --tw-text-opacity: 1;\n  color: rgb(55 65 81 / var(--tw-text-opacity));\n}\n.active\\:text-indigo-200:active {\n  --tw-text-opacity: 1;\n  color: rgb(199 210 254 / var(--tw-text-opacity));\n}\n.active\\:text-indigo-500:active {\n  --tw-text-opacity: 1;\n  color: rgb(99 102 241 / var(--tw-text-opacity));\n}\n.active\\:text-indigo-600:active {\n  --tw-text-opacity: 1;\n  color: rgb(79 70 229 / var(--tw-text-opacity));\n}\n.active\\:text-indigo-700:active {\n  --tw-text-opacity: 1;\n  color: rgb(67 56 202 / var(--tw-text-opacity));\n}\n.active\\:text-pink-500:active {\n  --tw-text-opacity: 1;\n  color: rgb(236 72 153 / var(--tw-text-opacity));\n}\n.active\\:text-red-500:active {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}\n.active\\:text-rose-500:active {\n  --tw-text-opacity: 1;\n  color: rgb(244 63 94 / var(--tw-text-opacity));\n}\n.active\\:text-opacity-75:active {\n  --tw-text-opacity: 0.75;\n}\n.group[open] .group-open\\:-rotate-180 {\n  --tw-rotate: -180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.group[open] .group-open\\:-rotate-45 {\n  --tw-rotate: -45deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.group[open] .group-open\\:opacity-0 {\n  opacity: 0;\n}\n.group[open] .group-open\\:opacity-100 {\n  opacity: 1;\n}\n.group:hover .group-hover\\:translate-x-1 {\n  --tw-translate-x: 0.25rem;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.group:hover .group-hover\\:rotate-180 {\n  --tw-rotate: 180deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.group:hover .group-hover\\:rotate-6 {\n  --tw-rotate: 6deg;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.group:hover .group-hover\\:scale-105 {\n  --tw-scale-x: 1.05;\n  --tw-scale-y: 1.05;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.group:hover .group-hover\\:scale-110 {\n  --tw-scale-x: 1.1;\n  --tw-scale-y: 1.1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.group:hover .group-hover\\:bg-white\\/\\[\\.1\\] {\n  background-color: rgb(255 255 255 / .1);\n}\n.group:hover .group-hover\\:text-blue-600 {\n  --tw-text-opacity: 1;\n  color: rgb(37 99 235 / var(--tw-text-opacity));\n}\n.group:hover .group-hover\\:text-blue-700 {\n  --tw-text-opacity: 1;\n  color: rgb(29 78 216 / var(--tw-text-opacity));\n}\n.group:hover .group-hover\\:text-gray-300 {\n  --tw-text-opacity: 1;\n  color: rgb(209 213 219 / var(--tw-text-opacity));\n}\n.group:hover .group-hover\\:text-gray-500 {\n  --tw-text-opacity: 1;\n  color: rgb(107 114 128 / var(--tw-text-opacity));\n}\n.group:hover .group-hover\\:text-gray-600 {\n  --tw-text-opacity: 1;\n  color: rgb(75 85 99 / var(--tw-text-opacity));\n}\n.group:hover .group-hover\\:text-gray-700\\/75 {\n  color: rgb(55 65 81 / 0.75);\n}\n.group:hover .group-hover\\:text-gray-800 {\n  --tw-text-opacity: 1;\n  color: rgb(31 41 55 / var(--tw-text-opacity));\n}\n.group:hover .group-hover\\:text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.group:hover .group-hover\\:text-white\\/75 {\n  color: rgb(255 255 255 / 0.75);\n}\n.group:hover .group-hover\\:text-white\\/\\[\\.7\\] {\n  color: rgb(255 255 255 / .7);\n}\n.group:hover .group-hover\\:text-white\\/\\[\\.8\\] {\n  color: rgb(255 255 255 / .8);\n}\n.group:hover .group-hover\\:underline {\n  text-decoration-line: underline;\n}\n.group:hover .group-hover\\:opacity-90 {\n  opacity: 0.9;\n}\n:is([dir=\"rtl\"] .rtl\\:-scale-x-100) {\n  --tw-scale-x: -1;\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n@media (prefers-color-scheme: dark) {\n  .dark\\:block {\n    display: block;\n  }\n  .dark\\:hidden {\n    display: none;\n  }\n  .dark\\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {\n    --tw-divide-opacity: 1;\n    border-color: rgb(55 65 81 / var(--tw-divide-opacity));\n  }\n  .dark\\:divide-gray-800 > :not([hidden]) ~ :not([hidden]) {\n    --tw-divide-opacity: 1;\n    border-color: rgb(31 41 55 / var(--tw-divide-opacity));\n  }\n  .dark\\:border {\n    border-width: 1px;\n  }\n  .dark\\:border-blue-300 {\n    --tw-border-opacity: 1;\n    border-color: rgb(147 197 253 / var(--tw-border-opacity));\n  }\n  .dark\\:border-blue-400 {\n    --tw-border-opacity: 1;\n    border-color: rgb(96 165 250 / var(--tw-border-opacity));\n  }\n  .dark\\:border-blue-500 {\n    --tw-border-opacity: 1;\n    border-color: rgb(59 130 246 / var(--tw-border-opacity));\n  }\n  .dark\\:border-blue-600 {\n    --tw-border-opacity: 1;\n    border-color: rgb(37 99 235 / var(--tw-border-opacity));\n  }\n  .dark\\:border-blue-700 {\n    --tw-border-opacity: 1;\n    border-color: rgb(29 78 216 / var(--tw-border-opacity));\n  }\n  .dark\\:border-blue-900 {\n    --tw-border-opacity: 1;\n    border-color: rgb(30 58 138 / var(--tw-border-opacity));\n  }\n  .dark\\:border-gray-200 {\n    --tw-border-opacity: 1;\n    border-color: rgb(229 231 235 / var(--tw-border-opacity));\n  }\n  .dark\\:border-gray-400 {\n    --tw-border-opacity: 1;\n    border-color: rgb(156 163 175 / var(--tw-border-opacity));\n  }\n  .dark\\:border-gray-600 {\n    --tw-border-opacity: 1;\n    border-color: rgb(75 85 99 / var(--tw-border-opacity));\n  }\n  .dark\\:border-gray-700 {\n    --tw-border-opacity: 1;\n    border-color: rgb(55 65 81 / var(--tw-border-opacity));\n  }\n  .dark\\:border-gray-800 {\n    --tw-border-opacity: 1;\n    border-color: rgb(31 41 55 / var(--tw-border-opacity));\n  }\n  .dark\\:border-slate-700 {\n    --tw-border-opacity: 1;\n    border-color: rgb(51 65 85 / var(--tw-border-opacity));\n  }\n  .dark\\:border-transparent {\n    border-color: transparent;\n  }\n  .dark\\:border-x-gray-700 {\n    --tw-border-opacity: 1;\n    border-left-color: rgb(55 65 81 / var(--tw-border-opacity));\n    border-right-color: rgb(55 65 81 / var(--tw-border-opacity));\n  }\n  .dark\\:border-r-gray-700 {\n    --tw-border-opacity: 1;\n    border-right-color: rgb(55 65 81 / var(--tw-border-opacity));\n  }\n  .dark\\:bg-black {\n    --tw-bg-opacity: 1;\n    background-color: rgb(0 0 0 / var(--tw-bg-opacity));\n  }\n  .dark\\:bg-blue-500 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n  }\n  .dark\\:bg-blue-600 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n  }\n  .dark\\:bg-blue-800 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(30 64 175 / var(--tw-bg-opacity));\n  }\n  .dark\\:bg-blue-900 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(30 58 138 / var(--tw-bg-opacity));\n  }\n  .dark\\:bg-gray-700 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n  }\n  .dark\\:bg-gray-800 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n  }\n  .dark\\:bg-gray-800\\/60 {\n    background-color: rgb(31 41 55 / 0.6);\n  }\n  .dark\\:bg-gray-900 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(17 24 39 / var(--tw-bg-opacity));\n  }\n  .dark\\:bg-purple-900 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(88 28 135 / var(--tw-bg-opacity));\n  }\n  .dark\\:bg-slate-700 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(51 65 85 / var(--tw-bg-opacity));\n  }\n  .dark\\:bg-slate-800 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(30 41 59 / var(--tw-bg-opacity));\n  }\n  .dark\\:bg-slate-900 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(15 23 42 / var(--tw-bg-opacity));\n  }\n  .dark\\:bg-slate-900\\/60 {\n    background-color: rgb(15 23 42 / 0.6);\n  }\n  .dark\\:bg-slate-900\\/\\[\\.6\\] {\n    background-color: rgb(15 23 42 / .6);\n  }\n  .dark\\:bg-white\\/\\[\\.05\\] {\n    background-color: rgb(255 255 255 / .05);\n  }\n  .dark\\:bg-white\\/\\[\\.075\\] {\n    background-color: rgb(255 255 255 / .075);\n  }\n  .dark\\:from-blue-400 {\n    --tw-gradient-from: #60a5fa var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(96 165 250 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n  .dark\\:from-gray-700 {\n    --tw-gradient-from: #374151 var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(55 65 81 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n  .dark\\:from-indigo-900\\/70 {\n    --tw-gradient-from: rgb(49 46 129 / 0.7) var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(49 46 129 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n  .dark\\:from-sky-300 {\n    --tw-gradient-from: #7dd3fc var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(125 211 252 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n  .dark\\:from-slate-800 {\n    --tw-gradient-from: #1e293b var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(30 41 59 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n  .dark\\:from-teal-200 {\n    --tw-gradient-from: #99f6e4 var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(153 246 228 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n  .dark\\:from-violet-900\\/50 {\n    --tw-gradient-from: rgb(76 29 149 / 0.5) var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(76 29 149 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n  .dark\\:via-gray-800 {\n    --tw-gradient-to: rgb(31 41 55 / 0)  var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), #1f2937 var(--tw-gradient-via-position), var(--tw-gradient-to);\n  }\n  .dark\\:via-indigo-300 {\n    --tw-gradient-to: rgb(165 180 252 / 0)  var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), #a5b4fc var(--tw-gradient-via-position), var(--tw-gradient-to);\n  }\n  .dark\\:via-indigo-900\\/70 {\n    --tw-gradient-to: rgb(49 46 129 / 0)  var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), rgb(49 46 129 / 0.7) var(--tw-gradient-via-position), var(--tw-gradient-to);\n  }\n  .dark\\:via-pink-300 {\n    --tw-gradient-to: rgb(249 168 212 / 0)  var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), #f9a8d4 var(--tw-gradient-via-position), var(--tw-gradient-to);\n  }\n  .dark\\:via-slate-900\\/0 {\n    --tw-gradient-to: rgb(15 23 42 / 0)  var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), rgb(15 23 42 / 0) var(--tw-gradient-via-position), var(--tw-gradient-to);\n  }\n  .dark\\:to-blue-900\\/70 {\n    --tw-gradient-to: rgb(30 58 138 / 0.7) var(--tw-gradient-to-position);\n  }\n  .dark\\:to-gray-900 {\n    --tw-gradient-to: #111827 var(--tw-gradient-to-position);\n  }\n  .dark\\:to-purple-900 {\n    --tw-gradient-to: #581c87 var(--tw-gradient-to-position);\n  }\n  .dark\\:to-red-500 {\n    --tw-gradient-to: #ef4444 var(--tw-gradient-to-position);\n  }\n  .dark\\:to-sky-500 {\n    --tw-gradient-to: #0ea5e9 var(--tw-gradient-to-position);\n  }\n  .dark\\:to-slate-900 {\n    --tw-gradient-to: #0f172a var(--tw-gradient-to-position);\n  }\n  .dark\\:to-slate-900\\/0 {\n    --tw-gradient-to: rgb(15 23 42 / 0) var(--tw-gradient-to-position);\n  }\n  .dark\\:to-violet-400 {\n    --tw-gradient-to: #a78bfa var(--tw-gradient-to-position);\n  }\n  .dark\\:fill-gray-200 {\n    fill: #e5e7eb;\n  }\n  .dark\\:fill-gray-700 {\n    fill: #374151;\n  }\n  .dark\\:fill-slate-900 {\n    fill: #0f172a;\n  }\n  .dark\\:fill-white {\n    fill: #fff;\n  }\n  .dark\\:text-blue-300 {\n    --tw-text-opacity: 1;\n    color: rgb(147 197 253 / var(--tw-text-opacity));\n  }\n  .dark\\:text-blue-400 {\n    --tw-text-opacity: 1;\n    color: rgb(96 165 250 / var(--tw-text-opacity));\n  }\n  .dark\\:text-blue-500 {\n    --tw-text-opacity: 1;\n    color: rgb(59 130 246 / var(--tw-text-opacity));\n  }\n  .dark\\:text-blue-600 {\n    --tw-text-opacity: 1;\n    color: rgb(37 99 235 / var(--tw-text-opacity));\n  }\n  .dark\\:text-gray-100 {\n    --tw-text-opacity: 1;\n    color: rgb(243 244 246 / var(--tw-text-opacity));\n  }\n  .dark\\:text-gray-200 {\n    --tw-text-opacity: 1;\n    color: rgb(229 231 235 / var(--tw-text-opacity));\n  }\n  .dark\\:text-gray-300 {\n    --tw-text-opacity: 1;\n    color: rgb(209 213 219 / var(--tw-text-opacity));\n  }\n  .dark\\:text-gray-400 {\n    --tw-text-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-text-opacity));\n  }\n  .dark\\:text-gray-500 {\n    --tw-text-opacity: 1;\n    color: rgb(107 114 128 / var(--tw-text-opacity));\n  }\n  .dark\\:text-gray-600 {\n    --tw-text-opacity: 1;\n    color: rgb(75 85 99 / var(--tw-text-opacity));\n  }\n  .dark\\:text-gray-700 {\n    --tw-text-opacity: 1;\n    color: rgb(55 65 81 / var(--tw-text-opacity));\n  }\n  .dark\\:text-gray-800 {\n    --tw-text-opacity: 1;\n    color: rgb(31 41 55 / var(--tw-text-opacity));\n  }\n  .dark\\:text-green-400 {\n    --tw-text-opacity: 1;\n    color: rgb(74 222 128 / var(--tw-text-opacity));\n  }\n  .dark\\:text-rose-500 {\n    --tw-text-opacity: 1;\n    color: rgb(244 63 94 / var(--tw-text-opacity));\n  }\n  .dark\\:text-slate-400 {\n    --tw-text-opacity: 1;\n    color: rgb(148 163 184 / var(--tw-text-opacity));\n  }\n  .dark\\:text-slate-700 {\n    --tw-text-opacity: 1;\n    color: rgb(51 65 85 / var(--tw-text-opacity));\n  }\n  .dark\\:text-slate-900 {\n    --tw-text-opacity: 1;\n    color: rgb(15 23 42 / var(--tw-text-opacity));\n  }\n  .dark\\:text-white {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n  }\n  .dark\\:placeholder-gray-400::-moz-placeholder {\n    --tw-placeholder-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-placeholder-opacity));\n  }\n  .dark\\:placeholder-gray-400::placeholder {\n    --tw-placeholder-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-placeholder-opacity));\n  }\n  .dark\\:placeholder-gray-500::-moz-placeholder {\n    --tw-placeholder-opacity: 1;\n    color: rgb(107 114 128 / var(--tw-placeholder-opacity));\n  }\n  .dark\\:placeholder-gray-500::placeholder {\n    --tw-placeholder-opacity: 1;\n    color: rgb(107 114 128 / var(--tw-placeholder-opacity));\n  }\n  .dark\\:placeholder-gray-600::-moz-placeholder {\n    --tw-placeholder-opacity: 1;\n    color: rgb(75 85 99 / var(--tw-placeholder-opacity));\n  }\n  .dark\\:placeholder-gray-600::placeholder {\n    --tw-placeholder-opacity: 1;\n    color: rgb(75 85 99 / var(--tw-placeholder-opacity));\n  }\n  .dark\\:opacity-20 {\n    opacity: 0.2;\n  }\n  .dark\\:shadow-\\[0_2\\.75rem_3\\.5rem_-2rem_rgb\\(0_0_0_\\/_20\\%\\)\\2c _0_0_5rem_-2rem_rgb\\(0_0_0_\\/_15\\%\\)\\] {\n    --tw-shadow: 0 2.75rem 3.5rem -2rem rgb(0 0 0 / 20%), 0 0 5rem -2rem rgb(0 0 0 / 15%);\n    --tw-shadow-colored: 0 2.75rem 3.5rem -2rem var(--tw-shadow-color), 0 0 5rem -2rem var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n  .dark\\:shadow-\\[0_2\\.75rem_5\\.5rem_-3\\.5rem_rgb\\(0_0_0_\\/_20\\%\\)\\2c _0_2rem_4rem_-2rem_rgb\\(0_0_0_\\/_30\\%\\)\\2c _inset_0_-0\\.1875rem_0\\.3125rem_0_rgb\\(0_0_0_\\/_20\\%\\)\\] {\n    --tw-shadow: 0 2.75rem 5.5rem -3.5rem rgb(0 0 0 / 20%), 0 2rem 4rem -2rem rgb(0 0 0 / 30%), inset 0 -0.1875rem 0.3125rem 0 rgb(0 0 0 / 20%);\n    --tw-shadow-colored: 0 2.75rem 5.5rem -3.5rem var(--tw-shadow-color), 0 2rem 4rem -2rem var(--tw-shadow-color), inset 0 -0.1875rem 0.3125rem 0 var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n  .dark\\:shadow-black\\/50 {\n    --tw-shadow-color: rgb(0 0 0 / 0.5);\n    --tw-shadow: var(--tw-shadow-colored);\n  }\n  .dark\\:shadow-gray-900\\/\\[\\.2\\] {\n    --tw-shadow-color: rgb(17 24 39 / .2);\n    --tw-shadow: var(--tw-shadow-colored);\n  }\n  .dark\\:shadow-slate-700\\/\\[\\.7\\] {\n    --tw-shadow-color: rgb(51 65 85 / .7);\n    --tw-shadow: var(--tw-shadow-colored);\n  }\n  .dark\\:ring-gray-700 {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity));\n  }\n  .dark\\:ring-gray-800 {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));\n  }\n  .dark\\:ring-offset-gray-800 {\n    --tw-ring-offset-color: #1f2937;\n  }\n  .dark\\:ring-offset-slate-900 {\n    --tw-ring-offset-color: #0f172a;\n  }\n  .dark\\:before\\:border-gray-600::before {\n    content: var(--tw-content);\n    --tw-border-opacity: 1;\n    border-color: rgb(75 85 99 / var(--tw-border-opacity));\n  }\n  .dark\\:before\\:bg-gray-400::before {\n    content: var(--tw-content);\n    --tw-bg-opacity: 1;\n    background-color: rgb(156 163 175 / var(--tw-bg-opacity));\n  }\n  .dark\\:before\\:bg-gray-600::before {\n    content: var(--tw-content);\n    --tw-bg-opacity: 1;\n    background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n  }\n  .dark\\:before\\:bg-\\[radial-gradient\\(closest-side\\2c \\#334155\\2c transparent\\)\\]::before {\n    content: var(--tw-content);\n    background-image: radial-gradient(closest-side,#334155,transparent);\n  }\n  .dark\\:before\\:bg-\\[url\\(\\'\\.\\.\\/svg\\/component\\/polygon-dark\\.svg\\'\\)\\]::before {\n    content: var(--tw-content);\n    background-image: url('../svg/component/polygon-dark.svg');\n  }\n  .dark\\:before\\:bg-\\[url\\(\\'https\\:\\/\\/preline\\.co\\/assets\\/svg\\/component\\/squared-bg-element-dark\\.svg\\'\\)\\]::before {\n    content: var(--tw-content);\n    background-image: url('https://preline.co/assets/svg/component/squared-bg-element-dark.svg');\n  }\n  .dark\\:before\\:text-gray-600::before {\n    content: var(--tw-content);\n    --tw-text-opacity: 1;\n    color: rgb(75 85 99 / var(--tw-text-opacity));\n  }\n  .dark\\:after\\:border-gray-600::after {\n    content: var(--tw-content);\n    --tw-border-opacity: 1;\n    border-color: rgb(75 85 99 / var(--tw-border-opacity));\n  }\n  .dark\\:after\\:from-slate-900::after {\n    content: var(--tw-content);\n    --tw-gradient-from: #0f172a var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(15 23 42 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n  .dark\\:after\\:via-slate-900\\/95::after {\n    content: var(--tw-content);\n    --tw-gradient-to: rgb(15 23 42 / 0)  var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), rgb(15 23 42 / 0.95) var(--tw-gradient-via-position), var(--tw-gradient-to);\n  }\n  .dark\\:checked\\:border-blue-500:checked {\n    --tw-border-opacity: 1;\n    border-color: rgb(59 130 246 / var(--tw-border-opacity));\n  }\n  .dark\\:checked\\:bg-blue-500:checked {\n    --tw-bg-opacity: 1;\n    background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n  }\n  .dark\\:checked\\:bg-blue-600:checked {\n    --tw-bg-opacity: 1;\n    background-color: rgb(37 99 235 / var(--tw-bg-opacity));\n  }\n  .dark\\:checked\\:before\\:bg-blue-200:checked::before {\n    content: var(--tw-content);\n    --tw-bg-opacity: 1;\n    background-color: rgb(191 219 254 / var(--tw-bg-opacity));\n  }\n  .dark\\:focus-within\\:border-blue-300:focus-within {\n    --tw-border-opacity: 1;\n    border-color: rgb(147 197 253 / var(--tw-border-opacity));\n  }\n  .dark\\:focus-within\\:border-blue-400:focus-within {\n    --tw-border-opacity: 1;\n    border-color: rgb(96 165 250 / var(--tw-border-opacity));\n  }\n  .dark\\:hover\\:border-blue-500:hover {\n    --tw-border-opacity: 1;\n    border-color: rgb(59 130 246 / var(--tw-border-opacity));\n  }\n  .dark\\:hover\\:border-blue-700:hover {\n    --tw-border-opacity: 1;\n    border-color: rgb(29 78 216 / var(--tw-border-opacity));\n  }\n  .dark\\:hover\\:border-gray-400:hover {\n    --tw-border-opacity: 1;\n    border-color: rgb(156 163 175 / var(--tw-border-opacity));\n  }\n  .dark\\:hover\\:border-gray-600:hover {\n    --tw-border-opacity: 1;\n    border-color: rgb(75 85 99 / var(--tw-border-opacity));\n  }\n  .dark\\:hover\\:border-gray-900:hover {\n    --tw-border-opacity: 1;\n    border-color: rgb(17 24 39 / var(--tw-border-opacity));\n  }\n  .dark\\:hover\\:border-transparent:hover {\n    border-color: transparent;\n  }\n  .dark\\:hover\\:border-white:hover {\n    --tw-border-opacity: 1;\n    border-color: rgb(255 255 255 / var(--tw-border-opacity));\n  }\n  .dark\\:hover\\:bg-blue-500:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(59 130 246 / var(--tw-bg-opacity));\n  }\n  .dark\\:hover\\:bg-blue-600\\/\\[\\.3\\]:hover {\n    background-color: rgb(37 99 235 / .3);\n  }\n  .dark\\:hover\\:bg-blue-700:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(29 78 216 / var(--tw-bg-opacity));\n  }\n  .dark\\:hover\\:bg-blue-800\\/20:hover {\n    background-color: rgb(30 64 175 / 0.2);\n  }\n  .dark\\:hover\\:bg-gray-600:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(75 85 99 / var(--tw-bg-opacity));\n  }\n  .dark\\:hover\\:bg-gray-700:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n  }\n  .dark\\:hover\\:bg-gray-800:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n  }\n  .dark\\:hover\\:bg-slate-800:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(30 41 59 / var(--tw-bg-opacity));\n  }\n  .dark\\:hover\\:bg-white:hover {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n  }\n  .dark\\:hover\\:bg-white\\/\\[\\.05\\]:hover {\n    background-color: rgb(255 255 255 / .05);\n  }\n  .dark\\:hover\\:bg-white\\/\\[\\.075\\]:hover {\n    background-color: rgb(255 255 255 / .075);\n  }\n  .dark\\:hover\\:text-blue-400:hover {\n    --tw-text-opacity: 1;\n    color: rgb(96 165 250 / var(--tw-text-opacity));\n  }\n  .dark\\:hover\\:text-blue-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(59 130 246 / var(--tw-text-opacity));\n  }\n  .dark\\:hover\\:text-blue-700:hover {\n    --tw-text-opacity: 1;\n    color: rgb(29 78 216 / var(--tw-text-opacity));\n  }\n  .dark\\:hover\\:text-gray-200:hover {\n    --tw-text-opacity: 1;\n    color: rgb(229 231 235 / var(--tw-text-opacity));\n  }\n  .dark\\:hover\\:text-gray-300:hover {\n    --tw-text-opacity: 1;\n    color: rgb(209 213 219 / var(--tw-text-opacity));\n  }\n  .dark\\:hover\\:text-gray-400:hover {\n    --tw-text-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-text-opacity));\n  }\n  .dark\\:hover\\:text-gray-500:hover {\n    --tw-text-opacity: 1;\n    color: rgb(107 114 128 / var(--tw-text-opacity));\n  }\n  .dark\\:hover\\:text-gray-800:hover {\n    --tw-text-opacity: 1;\n    color: rgb(31 41 55 / var(--tw-text-opacity));\n  }\n  .dark\\:hover\\:text-slate-300:hover {\n    --tw-text-opacity: 1;\n    color: rgb(203 213 225 / var(--tw-text-opacity));\n  }\n  .dark\\:hover\\:text-white:hover {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n  }\n  .dark\\:hover\\:shadow-black\\/\\[\\.4\\]:hover {\n    --tw-shadow-color: rgb(0 0 0 / .4);\n    --tw-shadow: var(--tw-shadow-colored);\n  }\n  .dark\\:hover\\:shadow-slate-700\\/\\[\\.7\\]:hover {\n    --tw-shadow-color: rgb(51 65 85 / .7);\n    --tw-shadow: var(--tw-shadow-colored);\n  }\n  .dark\\:focus\\:border-blue-300:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(147 197 253 / var(--tw-border-opacity));\n  }\n  .dark\\:focus\\:border-blue-400:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(96 165 250 / var(--tw-border-opacity));\n  }\n  .dark\\:focus\\:border-blue-500:focus {\n    --tw-border-opacity: 1;\n    border-color: rgb(59 130 246 / var(--tw-border-opacity));\n  }\n  .dark\\:focus\\:bg-gray-700:focus {\n    --tw-bg-opacity: 1;\n    background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n  }\n  .dark\\:focus\\:bg-slate-800:focus {\n    --tw-bg-opacity: 1;\n    background-color: rgb(30 41 59 / var(--tw-bg-opacity));\n  }\n  .dark\\:focus\\:text-gray-400:focus {\n    --tw-text-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-text-opacity));\n  }\n  .dark\\:focus\\:placeholder-transparent:focus::-moz-placeholder {\n    color: transparent;\n  }\n  .dark\\:focus\\:placeholder-transparent:focus::placeholder {\n    color: transparent;\n  }\n  .dark\\:focus\\:ring-blue-500:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(59 130 246 / var(--tw-ring-opacity));\n  }\n  .dark\\:focus\\:ring-blue-600:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(37 99 235 / var(--tw-ring-opacity));\n  }\n  .dark\\:focus\\:ring-blue-800:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(30 64 175 / var(--tw-ring-opacity));\n  }\n  .dark\\:focus\\:ring-blue-900:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(30 58 138 / var(--tw-ring-opacity));\n  }\n  .dark\\:focus\\:ring-gray-600:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity));\n  }\n  .dark\\:focus\\:ring-gray-700:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(55 65 81 / var(--tw-ring-opacity));\n  }\n  .dark\\:focus\\:ring-gray-800:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(31 41 55 / var(--tw-ring-opacity));\n  }\n  .dark\\:focus\\:ring-gray-900:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(17 24 39 / var(--tw-ring-opacity));\n  }\n  .dark\\:focus\\:ring-slate-900:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(15 23 42 / var(--tw-ring-opacity));\n  }\n  .dark\\:focus\\:ring-white:focus {\n    --tw-ring-opacity: 1;\n    --tw-ring-color: rgb(255 255 255 / var(--tw-ring-opacity));\n  }\n  .dark\\:focus\\:ring-offset-black:focus {\n    --tw-ring-offset-color: #000;\n  }\n  .dark\\:focus\\:ring-offset-blue-500:focus {\n    --tw-ring-offset-color: #3b82f6;\n  }\n  .dark\\:focus\\:ring-offset-gray-800:focus {\n    --tw-ring-offset-color: #1f2937;\n  }\n  .dark\\:focus\\:ring-offset-slate-900:focus {\n    --tw-ring-offset-color: #0f172a;\n  }\n  .dark\\:focus-visible\\:ring-offset-gray-800:focus-visible {\n    --tw-ring-offset-color: #1f2937;\n  }\n  .group:hover .dark\\:group-hover\\:text-blue-400 {\n    --tw-text-opacity: 1;\n    color: rgb(96 165 250 / var(--tw-text-opacity));\n  }\n  .group:hover .dark\\:group-hover\\:text-blue-500 {\n    --tw-text-opacity: 1;\n    color: rgb(59 130 246 / var(--tw-text-opacity));\n  }\n  .group:hover .dark\\:group-hover\\:text-gray-400 {\n    --tw-text-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-text-opacity));\n  }\n  .group:hover .dark\\:group-hover\\:text-white {\n    --tw-text-opacity: 1;\n    color: rgb(255 255 255 / var(--tw-text-opacity));\n  }\n}\n@media (min-width: 640px) {\n  .sm\\:static {\n    position: static;\n  }\n  .sm\\:absolute {\n    position: absolute;\n  }\n  .sm\\:right-0 {\n    right: 0px;\n  }\n  .sm\\:right-6 {\n    right: 1.5rem;\n  }\n  .sm\\:top-0 {\n    top: 0px;\n  }\n  .sm\\:top-6 {\n    top: 1.5rem;\n  }\n  .sm\\:z-40 {\n    z-index: 40;\n  }\n  .sm\\:order-1 {\n    order: 1;\n  }\n  .sm\\:order-2 {\n    order: 2;\n  }\n  .sm\\:order-3 {\n    order: 3;\n  }\n  .sm\\:order-first {\n    order: -9999;\n  }\n  .sm\\:order-none {\n    order: 0;\n  }\n  .sm\\:col-span-1 {\n    grid-column: span 1 / span 1;\n  }\n  .sm\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n  .sm\\:col-span-4 {\n    grid-column: span 4 / span 4;\n  }\n  .sm\\:col-span-5 {\n    grid-column: span 5 / span 5;\n  }\n  .sm\\:col-span-6 {\n    grid-column: span 6 / span 6;\n  }\n  .sm\\:col-span-7 {\n    grid-column: span 7 / span 7;\n  }\n  .sm\\:-m-4 {\n    margin: -1rem;\n  }\n  .sm\\:-mx-0 {\n    margin-left: -0px;\n    margin-right: -0px;\n  }\n  .sm\\:-mx-0\\.5 {\n    margin-left: -0.125rem;\n    margin-right: -0.125rem;\n  }\n  .sm\\:-mx-2 {\n    margin-left: -0.5rem;\n    margin-right: -0.5rem;\n  }\n  .sm\\:-mx-4 {\n    margin-left: -1rem;\n    margin-right: -1rem;\n  }\n  .sm\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n  .sm\\:mx-0\\.5 {\n    margin-left: 0.125rem;\n    margin-right: 0.125rem;\n  }\n  .sm\\:mx-2 {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n  }\n  .sm\\:mx-3 {\n    margin-left: 0.75rem;\n    margin-right: 0.75rem;\n  }\n  .sm\\:mx-4 {\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n  .sm\\:mx-6 {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n  }\n  .sm\\:mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .sm\\:my-6 {\n    margin-top: 1.5rem;\n    margin-bottom: 1.5rem;\n  }\n  .sm\\:mb-0 {\n    margin-bottom: 0px;\n  }\n  .sm\\:mb-1 {\n    margin-bottom: 0.25rem;\n  }\n  .sm\\:mb-10 {\n    margin-bottom: 2.5rem;\n  }\n  .sm\\:mb-12 {\n    margin-bottom: 3rem;\n  }\n  .sm\\:mb-2 {\n    margin-bottom: 0.5rem;\n  }\n  .sm\\:mb-4 {\n    margin-bottom: 1rem;\n  }\n  .sm\\:mb-5 {\n    margin-bottom: 1.25rem;\n  }\n  .sm\\:mb-8 {\n    margin-bottom: 2rem;\n  }\n  .sm\\:ml-0 {\n    margin-left: 0px;\n  }\n  .sm\\:ml-10 {\n    margin-left: 2.5rem;\n  }\n  .sm\\:ml-3 {\n    margin-left: 0.75rem;\n  }\n  .sm\\:ml-4 {\n    margin-left: 1rem;\n  }\n  .sm\\:ml-6 {\n    margin-left: 1.5rem;\n  }\n  .sm\\:ml-8 {\n    margin-left: 2rem;\n  }\n  .sm\\:ml-auto {\n    margin-left: auto;\n  }\n  .sm\\:mr-1 {\n    margin-right: 0.25rem;\n  }\n  .sm\\:mr-10 {\n    margin-right: 2.5rem;\n  }\n  .sm\\:mr-2 {\n    margin-right: 0.5rem;\n  }\n  .sm\\:mr-4 {\n    margin-right: 1rem;\n  }\n  .sm\\:mr-8 {\n    margin-right: 2rem;\n  }\n  .sm\\:mt-0 {\n    margin-top: 0px;\n  }\n  .sm\\:mt-1 {\n    margin-top: 0.25rem;\n  }\n  .sm\\:mt-10 {\n    margin-top: 2.5rem;\n  }\n  .sm\\:mt-12 {\n    margin-top: 3rem;\n  }\n  .sm\\:mt-16 {\n    margin-top: 4rem;\n  }\n  .sm\\:mt-2 {\n    margin-top: 0.5rem;\n  }\n  .sm\\:mt-20 {\n    margin-top: 5rem;\n  }\n  .sm\\:mt-3 {\n    margin-top: 0.75rem;\n  }\n  .sm\\:mt-4 {\n    margin-top: 1rem;\n  }\n  .sm\\:mt-6 {\n    margin-top: 1.5rem;\n  }\n  .sm\\:mt-8 {\n    margin-top: 2rem;\n  }\n  .sm\\:mt-auto {\n    margin-top: auto;\n  }\n  .sm\\:block {\n    display: block;\n  }\n  .sm\\:inline-block {\n    display: inline-block;\n  }\n  .sm\\:inline {\n    display: inline;\n  }\n  .sm\\:flex {\n    display: flex;\n  }\n  .sm\\:inline-flex {\n    display: inline-flex;\n  }\n  .sm\\:grid {\n    display: grid;\n  }\n  .sm\\:hidden {\n    display: none;\n  }\n  .sm\\:h-14 {\n    height: 3.5rem;\n  }\n  .sm\\:h-16 {\n    height: 4rem;\n  }\n  .sm\\:h-20 {\n    height: 5rem;\n  }\n  .sm\\:h-24 {\n    height: 6rem;\n  }\n  .sm\\:h-3\\/4 {\n    height: 75%;\n  }\n  .sm\\:h-32 {\n    height: 8rem;\n  }\n  .sm\\:h-40 {\n    height: 10rem;\n  }\n  .sm\\:h-48 {\n    height: 12rem;\n  }\n  .sm\\:h-56 {\n    height: 14rem;\n  }\n  .sm\\:h-60 {\n    height: 15rem;\n  }\n  .sm\\:h-7 {\n    height: 1.75rem;\n  }\n  .sm\\:h-8 {\n    height: 2rem;\n  }\n  .sm\\:h-80 {\n    height: 20rem;\n  }\n  .sm\\:h-9 {\n    height: 2.25rem;\n  }\n  .sm\\:h-96 {\n    height: 24rem;\n  }\n  .sm\\:h-\\[2\\.875rem\\] {\n    height: 2.875rem;\n  }\n  .sm\\:h-\\[28rem\\] {\n    height: 28rem;\n  }\n  .sm\\:h-\\[350px\\] {\n    height: 350px;\n  }\n  .sm\\:h-\\[480px\\] {\n    height: 480px;\n  }\n  .sm\\:h-\\[calc\\(100\\%_-_2rem\\)\\] {\n    height: calc(100% - 2rem);\n  }\n  .sm\\:h-auto {\n    height: auto;\n  }\n  .sm\\:h-full {\n    height: 100%;\n  }\n  .sm\\:max-h-full {\n    max-height: 100%;\n  }\n  .sm\\:w-1\\/2 {\n    width: 50%;\n  }\n  .sm\\:w-1\\/3 {\n    width: 33.333333%;\n  }\n  .sm\\:w-1\\/4 {\n    width: 25%;\n  }\n  .sm\\:w-14 {\n    width: 3.5rem;\n  }\n  .sm\\:w-16 {\n    width: 4rem;\n  }\n  .sm\\:w-2\\/3 {\n    width: 66.666667%;\n  }\n  .sm\\:w-2\\/5 {\n    width: 40%;\n  }\n  .sm\\:w-20 {\n    width: 5rem;\n  }\n  .sm\\:w-24 {\n    width: 6rem;\n  }\n  .sm\\:w-28 {\n    width: 7rem;\n  }\n  .sm\\:w-3\\/5 {\n    width: 60%;\n  }\n  .sm\\:w-32 {\n    width: 8rem;\n  }\n  .sm\\:w-48 {\n    width: 12rem;\n  }\n  .sm\\:w-56 {\n    width: 14rem;\n  }\n  .sm\\:w-64 {\n    width: 16rem;\n  }\n  .sm\\:w-7 {\n    width: 1.75rem;\n  }\n  .sm\\:w-72 {\n    width: 18rem;\n  }\n  .sm\\:w-9 {\n    width: 2.25rem;\n  }\n  .sm\\:w-96 {\n    width: 24rem;\n  }\n  .sm\\:w-\\[2\\.875rem\\] {\n    width: 2.875rem;\n  }\n  .sm\\:w-\\[250px\\] {\n    width: 250px;\n  }\n  .sm\\:w-\\[28rem\\] {\n    width: 28rem;\n  }\n  .sm\\:w-\\[auto\\] {\n    width: auto;\n  }\n  .sm\\:w-auto {\n    width: auto;\n  }\n  .sm\\:w-fit {\n    width: -moz-fit-content;\n    width: fit-content;\n  }\n  .sm\\:w-full {\n    width: 100%;\n  }\n  .sm\\:max-w-lg {\n    max-width: 32rem;\n  }\n  .sm\\:max-w-md {\n    max-width: 28rem;\n  }\n  .sm\\:max-w-none {\n    max-width: none;\n  }\n  .sm\\:max-w-xl {\n    max-width: 36rem;\n  }\n  .sm\\:max-w-xs {\n    max-width: 20rem;\n  }\n  .sm\\:flex-\\[0_0_auto\\] {\n    flex: 0 0 auto;\n  }\n  .sm\\:flex-\\[1_0_0\\%\\] {\n    flex: 1 0 0%;\n  }\n  .sm\\:flex-none {\n    flex: none;\n  }\n  .sm\\:flex-shrink-0 {\n    flex-shrink: 0;\n  }\n  .sm\\:basis-auto {\n    flex-basis: auto;\n  }\n  .sm\\:translate-x-0 {\n    --tw-translate-x: 0px;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n  .sm\\:-rotate-90 {\n    --tw-rotate: -90deg;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n  .sm\\:columns-2 {\n    -moz-columns: 2;\n         columns: 2;\n  }\n  .sm\\:break-inside-avoid {\n    -moz-column-break-inside: avoid;\n         break-inside: avoid;\n  }\n  .sm\\:grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n  .sm\\:flex-col {\n    flex-direction: column;\n  }\n  .sm\\:flex-nowrap {\n    flex-wrap: nowrap;\n  }\n  .sm\\:content-evenly {\n    align-content: space-evenly;\n  }\n  .sm\\:items-start {\n    align-items: flex-start;\n  }\n  .sm\\:items-center {\n    align-items: center;\n  }\n  .sm\\:justify-start {\n    justify-content: flex-start;\n  }\n  .sm\\:justify-end {\n    justify-content: flex-end;\n  }\n  .sm\\:justify-center {\n    justify-content: center;\n  }\n  .sm\\:justify-between {\n    justify-content: space-between;\n  }\n  .sm\\:gap-0 {\n    gap: 0px;\n  }\n  .sm\\:gap-10 {\n    gap: 2.5rem;\n  }\n  .sm\\:gap-12 {\n    gap: 3rem;\n  }\n  .sm\\:gap-16 {\n    gap: 4rem;\n  }\n  .sm\\:gap-3 {\n    gap: 0.75rem;\n  }\n  .sm\\:gap-4 {\n    gap: 1rem;\n  }\n  .sm\\:gap-6 {\n    gap: 1.5rem;\n  }\n  .sm\\:gap-8 {\n    gap: 2rem;\n  }\n  .sm\\:gap-x-12 {\n    -moz-column-gap: 3rem;\n         column-gap: 3rem;\n  }\n  .sm\\:gap-x-2 {\n    -moz-column-gap: 0.5rem;\n         column-gap: 0.5rem;\n  }\n  .sm\\:gap-x-3 {\n    -moz-column-gap: 0.75rem;\n         column-gap: 0.75rem;\n  }\n  .sm\\:gap-x-6 {\n    -moz-column-gap: 1.5rem;\n         column-gap: 1.5rem;\n  }\n  .sm\\:gap-x-7 {\n    -moz-column-gap: 1.75rem;\n         column-gap: 1.75rem;\n  }\n  .sm\\:gap-y-0 {\n    row-gap: 0px;\n  }\n  .sm\\:gap-y-10 {\n    row-gap: 2.5rem;\n  }\n  .sm\\:gap-y-12 {\n    row-gap: 3rem;\n  }\n  .sm\\:gap-y-8 {\n    row-gap: 2rem;\n  }\n  .sm\\:space-x-3 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(0.75rem * var(--tw-space-x-reverse));\n    margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n  .sm\\:space-x-4 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(1rem * var(--tw-space-x-reverse));\n    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n  .sm\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0px * var(--tw-space-y-reverse));\n  }\n  .sm\\:space-y-1 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));\n  }\n  .sm\\:space-y-10 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(2.5rem * var(--tw-space-y-reverse));\n  }\n  .sm\\:space-y-4 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n  }\n  .sm\\:space-y-8 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(2rem * var(--tw-space-y-reverse));\n  }\n  .sm\\:self-end {\n    align-self: flex-end;\n  }\n  .sm\\:overflow-visible {\n    overflow: visible;\n  }\n  .sm\\:rounded-full {\n    border-radius: 9999px;\n  }\n  .sm\\:rounded-none {\n    border-radius: 0px;\n  }\n  .sm\\:rounded-l-lg {\n    border-top-left-radius: 0.5rem;\n    border-bottom-left-radius: 0.5rem;\n  }\n  .sm\\:rounded-r-lg {\n    border-top-right-radius: 0.5rem;\n    border-bottom-right-radius: 0.5rem;\n  }\n  .sm\\:rounded-r-none {\n    border-top-right-radius: 0px;\n    border-bottom-right-radius: 0px;\n  }\n  .sm\\:rounded-tl-\\[30px\\] {\n    border-top-left-radius: 30px;\n  }\n  .sm\\:border {\n    border-width: 1px;\n  }\n  .sm\\:border-b-2 {\n    border-bottom-width: 2px;\n  }\n  .sm\\:border-l {\n    border-left-width: 1px;\n  }\n  .sm\\:border-l-2 {\n    border-left-width: 2px;\n  }\n  .sm\\:border-t-0 {\n    border-top-width: 0px;\n  }\n  .sm\\:border-gray-200 {\n    --tw-border-opacity: 1;\n    border-color: rgb(229 231 235 / var(--tw-border-opacity));\n  }\n  .sm\\:border-gray-300 {\n    --tw-border-opacity: 1;\n    border-color: rgb(209 213 219 / var(--tw-border-opacity));\n  }\n  .sm\\:border-transparent {\n    border-color: transparent;\n  }\n  .sm\\:border-white\\/\\[\\.3\\] {\n    border-color: rgb(255 255 255 / .3);\n  }\n  .sm\\:border-r-transparent {\n    border-right-color: transparent;\n  }\n  .sm\\:bg-transparent {\n    background-color: transparent;\n  }\n  .sm\\:bg-gradient-to-r {\n    background-image: linear-gradient(to right, var(--tw-gradient-stops));\n  }\n  .sm\\:from-white\\/95 {\n    --tw-gradient-from: rgb(255 255 255 / 0.95) var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(255 255 255 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n  .sm\\:to-white\\/25 {\n    --tw-gradient-to: rgb(255 255 255 / 0.25) var(--tw-gradient-to-position);\n  }\n  .sm\\:p-16 {\n    padding: 4rem;\n  }\n  .sm\\:p-3 {\n    padding: 0.75rem;\n  }\n  .sm\\:p-4 {\n    padding: 1rem;\n  }\n  .sm\\:p-5 {\n    padding: 1.25rem;\n  }\n  .sm\\:p-6 {\n    padding: 1.5rem;\n  }\n  .sm\\:p-7 {\n    padding: 1.75rem;\n  }\n  .sm\\:p-8 {\n    padding: 2rem;\n  }\n  .sm\\:px-0 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .sm\\:px-10 {\n    padding-left: 2.5rem;\n    padding-right: 2.5rem;\n  }\n  .sm\\:px-16 {\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\n  .sm\\:px-2 {\n    padding-left: 0.5rem;\n    padding-right: 0.5rem;\n  }\n  .sm\\:px-3 {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n  }\n  .sm\\:px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .sm\\:px-5 {\n    padding-left: 1.25rem;\n    padding-right: 1.25rem;\n  }\n  .sm\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n  .sm\\:px-7 {\n    padding-left: 1.75rem;\n    padding-right: 1.75rem;\n  }\n  .sm\\:py-0 {\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n  .sm\\:py-1 {\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n  }\n  .sm\\:py-10 {\n    padding-top: 2.5rem;\n    padding-bottom: 2.5rem;\n  }\n  .sm\\:py-16 {\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n  }\n  .sm\\:py-2 {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n  }\n  .sm\\:py-24 {\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n  .sm\\:py-3 {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n  }\n  .sm\\:py-3\\.5 {\n    padding-top: 0.875rem;\n    padding-bottom: 0.875rem;\n  }\n  .sm\\:py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n  .sm\\:py-6 {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n  .sm\\:py-8 {\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n  }\n  .sm\\:pb-0 {\n    padding-bottom: 0px;\n  }\n  .sm\\:pb-16 {\n    padding-bottom: 4rem;\n  }\n  .sm\\:pb-8 {\n    padding-bottom: 2rem;\n  }\n  .sm\\:pl-10 {\n    padding-left: 2.5rem;\n  }\n  .sm\\:pl-3 {\n    padding-left: 0.75rem;\n  }\n  .sm\\:pl-4 {\n    padding-left: 1rem;\n  }\n  .sm\\:pl-5 {\n    padding-left: 1.25rem;\n  }\n  .sm\\:pl-6 {\n    padding-left: 1.5rem;\n  }\n  .sm\\:pl-7 {\n    padding-left: 1.75rem;\n  }\n  .sm\\:pl-8 {\n    padding-left: 2rem;\n  }\n  .sm\\:pr-10 {\n    padding-right: 2.5rem;\n  }\n  .sm\\:pr-16 {\n    padding-right: 4rem;\n  }\n  .sm\\:pr-5 {\n    padding-right: 1.25rem;\n  }\n  .sm\\:pr-6 {\n    padding-right: 1.5rem;\n  }\n  .sm\\:pr-8 {\n    padding-right: 2rem;\n  }\n  .sm\\:ps-11 {\n    padding-inline-start: 2.75rem;\n  }\n  .sm\\:pt-0 {\n    padding-top: 0px;\n  }\n  .sm\\:pt-10 {\n    padding-top: 2.5rem;\n  }\n  .sm\\:pt-2 {\n    padding-top: 0.5rem;\n  }\n  .sm\\:pt-6 {\n    padding-top: 1.5rem;\n  }\n  .sm\\:pt-8 {\n    padding-top: 2rem;\n  }\n  .sm\\:pt-\\[100\\%\\] {\n    padding-top: 100%;\n  }\n  .sm\\:pt-\\[70\\%\\] {\n    padding-top: 70%;\n  }\n  .sm\\:text-left {\n    text-align: left;\n  }\n  .sm\\:text-center {\n    text-align: center;\n  }\n  .sm\\:text-right {\n    text-align: right;\n  }\n  .sm\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n  .sm\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n  .sm\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n  .sm\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n  .sm\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n  .sm\\:text-9xl {\n    font-size: 8rem;\n    line-height: 1;\n  }\n  .sm\\:text-\\[\\.5rem\\] {\n    font-size: .5rem;\n  }\n  .sm\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n  .sm\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n  .sm\\:text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n  .sm\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n  .sm\\:leading-relaxed {\n    line-height: 1.625;\n  }\n  .sm\\:text-gray-600 {\n    --tw-text-opacity: 1;\n    color: rgb(75 85 99 / var(--tw-text-opacity));\n  }\n  .sm\\:shadow-md {\n    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n  .sm\\:shadow-none {\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n  .sm\\:transition-none {\n    transition-property: none;\n  }\n  .sm\\:duration-\\[150ms\\] {\n    transition-duration: 150ms;\n  }\n  .sm\\:\\[--strategy\\:absolute\\] {\n    --strategy: absolute;\n  }\n  .sm\\:\\[--strategy\\:fixed\\] {\n    --strategy: fixed;\n  }\n  .sm\\:\\[--trigger\\:hover\\] {\n    --trigger: hover;\n  }\n  @media (prefers-color-scheme: dark) {\n    .sm\\:dark\\:border {\n      border-width: 1px;\n    }\n    .sm\\:dark\\:border-r-transparent {\n      border-right-color: transparent;\n    }\n  }\n}\n@media (min-width: 768px) {\n  .md\\:absolute {\n    position: absolute;\n  }\n  .md\\:relative {\n    position: relative;\n  }\n  .md\\:left-1\\/2 {\n    left: 50%;\n  }\n  .md\\:left-16 {\n    left: 4rem;\n  }\n  .md\\:right-0 {\n    right: 0px;\n  }\n  .md\\:top-0 {\n    top: 0px;\n  }\n  .md\\:top-16 {\n    top: 4rem;\n  }\n  .md\\:order-2 {\n    order: 2;\n  }\n  .md\\:order-last {\n    order: 9999;\n  }\n  .md\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n  .md\\:col-span-3 {\n    grid-column: span 3 / span 3;\n  }\n  .md\\:col-span-4 {\n    grid-column: span 4 / span 4;\n  }\n  .md\\:col-span-8 {\n    grid-column: span 8 / span 8;\n  }\n  .md\\:-m-2 {\n    margin: -0.5rem;\n  }\n  .md\\:m-0 {\n    margin: 0px;\n  }\n  .md\\:-mx-4 {\n    margin-left: -1rem;\n    margin-right: -1rem;\n  }\n  .md\\:-mx-5 {\n    margin-left: -1.25rem;\n    margin-right: -1.25rem;\n  }\n  .md\\:-mx-6 {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n  }\n  .md\\:-mx-8 {\n    margin-left: -2rem;\n    margin-right: -2rem;\n  }\n  .md\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n  .md\\:mx-1 {\n    margin-left: 0.25rem;\n    margin-right: 0.25rem;\n  }\n  .md\\:mx-10 {\n    margin-left: 2.5rem;\n    margin-right: 2.5rem;\n  }\n  .md\\:mx-2 {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n  }\n  .md\\:mx-24 {\n    margin-left: 6rem;\n    margin-right: 6rem;\n  }\n  .md\\:mx-4 {\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n  .md\\:mx-5 {\n    margin-left: 1.25rem;\n    margin-right: 1.25rem;\n  }\n  .md\\:mx-6 {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n  }\n  .md\\:mx-8 {\n    margin-left: 2rem;\n    margin-right: 2rem;\n  }\n  .md\\:my-0 {\n    margin-top: 0px;\n    margin-bottom: 0px;\n  }\n  .md\\:my-16 {\n    margin-top: 4rem;\n    margin-bottom: 4rem;\n  }\n  .md\\:my-6 {\n    margin-top: 1.5rem;\n    margin-bottom: 1.5rem;\n  }\n  .md\\:mb-0 {\n    margin-bottom: 0px;\n  }\n  .md\\:mb-10 {\n    margin-bottom: 2.5rem;\n  }\n  .md\\:mb-12 {\n    margin-bottom: 3rem;\n  }\n  .md\\:mb-16 {\n    margin-bottom: 4rem;\n  }\n  .md\\:mb-2 {\n    margin-bottom: 0.5rem;\n  }\n  .md\\:mb-3 {\n    margin-bottom: 0.75rem;\n  }\n  .md\\:mb-4 {\n    margin-bottom: 1rem;\n  }\n  .md\\:mb-6 {\n    margin-bottom: 1.5rem;\n  }\n  .md\\:mb-8 {\n    margin-bottom: 2rem;\n  }\n  .md\\:ml-0 {\n    margin-left: 0px;\n  }\n  .md\\:ml-4 {\n    margin-left: 1rem;\n  }\n  .md\\:ml-5 {\n    margin-left: 1.25rem;\n  }\n  .md\\:ml-6 {\n    margin-left: 1.5rem;\n  }\n  .md\\:ml-auto {\n    margin-left: auto;\n  }\n  .md\\:mr-0 {\n    margin-right: 0px;\n  }\n  .md\\:mr-6 {\n    margin-right: 1.5rem;\n  }\n  .md\\:mr-auto {\n    margin-right: auto;\n  }\n  .md\\:mt-0 {\n    margin-top: 0px;\n  }\n  .md\\:mt-10 {\n    margin-top: 2.5rem;\n  }\n  .md\\:mt-12 {\n    margin-top: 3rem;\n  }\n  .md\\:mt-16 {\n    margin-top: 4rem;\n  }\n  .md\\:mt-2 {\n    margin-top: 0.5rem;\n  }\n  .md\\:mt-4 {\n    margin-top: 1rem;\n  }\n  .md\\:mt-8 {\n    margin-top: 2rem;\n  }\n  .md\\:block {\n    display: block;\n  }\n  .md\\:flex {\n    display: flex;\n  }\n  .md\\:grid {\n    display: grid;\n  }\n  .md\\:hidden {\n    display: none;\n  }\n  .md\\:h-10 {\n    height: 2.5rem;\n  }\n  .md\\:h-14 {\n    height: 3.5rem;\n  }\n  .md\\:h-24 {\n    height: 6rem;\n  }\n  .md\\:h-32 {\n    height: 8rem;\n  }\n  .md\\:h-36 {\n    height: 9rem;\n  }\n  .md\\:h-48 {\n    height: 12rem;\n  }\n  .md\\:h-56 {\n    height: 14rem;\n  }\n  .md\\:h-6 {\n    height: 1.5rem;\n  }\n  .md\\:h-64 {\n    height: 16rem;\n  }\n  .md\\:h-7 {\n    height: 1.75rem;\n  }\n  .md\\:h-8 {\n    height: 2rem;\n  }\n  .md\\:h-80 {\n    height: 20rem;\n  }\n  .md\\:h-96 {\n    height: 24rem;\n  }\n  .md\\:h-\\[calc\\(100\\%_-_4rem\\)\\] {\n    height: calc(100% - 4rem);\n  }\n  .md\\:h-auto {\n    height: auto;\n  }\n  .md\\:h-full {\n    height: 100%;\n  }\n  .md\\:h-screen {\n    height: 100vh;\n  }\n  .md\\:w-1\\/2 {\n    width: 50%;\n  }\n  .md\\:w-1\\/3 {\n    width: 33.333333%;\n  }\n  .md\\:w-1\\/4 {\n    width: 25%;\n  }\n  .md\\:w-10 {\n    width: 2.5rem;\n  }\n  .md\\:w-14 {\n    width: 3.5rem;\n  }\n  .md\\:w-2\\/3 {\n    width: 66.666667%;\n  }\n  .md\\:w-2\\/5 {\n    width: 40%;\n  }\n  .md\\:w-20 {\n    width: 5rem;\n  }\n  .md\\:w-24 {\n    width: 6rem;\n  }\n  .md\\:w-3\\/4 {\n    width: 75%;\n  }\n  .md\\:w-3\\/5 {\n    width: 60%;\n  }\n  .md\\:w-3\\/6 {\n    width: 50%;\n  }\n  .md\\:w-32 {\n    width: 8rem;\n  }\n  .md\\:w-48 {\n    width: 12rem;\n  }\n  .md\\:w-6 {\n    width: 1.5rem;\n  }\n  .md\\:w-64 {\n    width: 16rem;\n  }\n  .md\\:w-7 {\n    width: 1.75rem;\n  }\n  .md\\:w-8 {\n    width: 2rem;\n  }\n  .md\\:w-9 {\n    width: 2.25rem;\n  }\n  .md\\:w-96 {\n    width: 24rem;\n  }\n  .md\\:w-auto {\n    width: auto;\n  }\n  .md\\:w-full {\n    width: 100%;\n  }\n  .md\\:max-w-md {\n    max-width: 28rem;\n  }\n  .md\\:max-w-screen-md {\n    max-width: 768px;\n  }\n  .md\\:max-w-screen-xl {\n    max-width: 1280px;\n  }\n  .md\\:flex-grow {\n    flex-grow: 1;\n  }\n  .md\\:grow {\n    flex-grow: 1;\n  }\n  .md\\:translate-x-0 {\n    --tw-translate-x: 0px;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n  .md\\:-rotate-90 {\n    --tw-rotate: -90deg;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n  .md\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-6 {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n  .md\\:flex-row {\n    flex-direction: row;\n  }\n  .md\\:flex-col {\n    flex-direction: column;\n  }\n  .md\\:flex-nowrap {\n    flex-wrap: nowrap;\n  }\n  .md\\:items-start {\n    align-items: flex-start;\n  }\n  .md\\:items-end {\n    align-items: flex-end;\n  }\n  .md\\:items-center {\n    align-items: center;\n  }\n  .md\\:justify-start {\n    justify-content: flex-start;\n  }\n  .md\\:justify-end {\n    justify-content: flex-end;\n  }\n  .md\\:justify-center {\n    justify-content: center;\n  }\n  .md\\:justify-between {\n    justify-content: space-between;\n  }\n  .md\\:gap-0 {\n    gap: 0px;\n  }\n  .md\\:gap-10 {\n    gap: 2.5rem;\n  }\n  .md\\:gap-12 {\n    gap: 3rem;\n  }\n  .md\\:gap-16 {\n    gap: 4rem;\n  }\n  .md\\:gap-20 {\n    gap: 5rem;\n  }\n  .md\\:gap-3 {\n    gap: 0.75rem;\n  }\n  .md\\:gap-4 {\n    gap: 1rem;\n  }\n  .md\\:gap-6 {\n    gap: 1.5rem;\n  }\n  .md\\:gap-8 {\n    gap: 2rem;\n  }\n  .md\\:gap-x-4 {\n    -moz-column-gap: 1rem;\n         column-gap: 1rem;\n  }\n  .md\\:gap-x-5 {\n    -moz-column-gap: 1.25rem;\n         column-gap: 1.25rem;\n  }\n  .md\\:gap-x-6 {\n    -moz-column-gap: 1.5rem;\n         column-gap: 1.5rem;\n  }\n  .md\\:gap-x-7 {\n    -moz-column-gap: 1.75rem;\n         column-gap: 1.75rem;\n  }\n  .md\\:gap-y-0 {\n    row-gap: 0px;\n  }\n  .md\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0px * var(--tw-space-y-reverse));\n  }\n  .md\\:space-y-2 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));\n  }\n  .md\\:space-y-4 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n  }\n  .md\\:space-y-5 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));\n  }\n  .md\\:space-y-6 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));\n  }\n  .md\\:space-y-8 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(2rem * var(--tw-space-y-reverse));\n  }\n  .md\\:divide-x > :not([hidden]) ~ :not([hidden]) {\n    --tw-divide-x-reverse: 0;\n    border-right-width: calc(1px * var(--tw-divide-x-reverse));\n    border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));\n  }\n  .md\\:rounded-xl {\n    border-radius: 0.75rem;\n  }\n  .md\\:rounded-tl-\\[60px\\] {\n    border-top-left-radius: 60px;\n  }\n  .md\\:border {\n    border-width: 1px;\n  }\n  .md\\:border-b-0 {\n    border-bottom-width: 0px;\n  }\n  .md\\:border-l {\n    border-left-width: 1px;\n  }\n  .md\\:border-r {\n    border-right-width: 1px;\n  }\n  .md\\:border-gray-300 {\n    --tw-border-opacity: 1;\n    border-color: rgb(209 213 219 / var(--tw-border-opacity));\n  }\n  .md\\:border-gray-400 {\n    --tw-border-opacity: 1;\n    border-color: rgb(156 163 175 / var(--tw-border-opacity));\n  }\n  .md\\:bg-gray-700 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n  }\n  .md\\:bg-transparent {\n    background-color: transparent;\n  }\n  .md\\:via-transparent {\n    --tw-gradient-to: rgb(0 0 0 / 0)  var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), transparent var(--tw-gradient-via-position), var(--tw-gradient-to);\n  }\n  .md\\:p-0 {\n    padding: 0px;\n  }\n  .md\\:p-10 {\n    padding: 2.5rem;\n  }\n  .md\\:p-12 {\n    padding: 3rem;\n  }\n  .md\\:p-16 {\n    padding: 4rem;\n  }\n  .md\\:p-2 {\n    padding: 0.5rem;\n  }\n  .md\\:p-4 {\n    padding: 1rem;\n  }\n  .md\\:p-5 {\n    padding: 1.25rem;\n  }\n  .md\\:p-6 {\n    padding: 1.5rem;\n  }\n  .md\\:p-7 {\n    padding: 1.75rem;\n  }\n  .md\\:p-8 {\n    padding: 2rem;\n  }\n  .md\\:px-12 {\n    padding-left: 3rem;\n    padding-right: 3rem;\n  }\n  .md\\:px-3 {\n    padding-left: 0.75rem;\n    padding-right: 0.75rem;\n  }\n  .md\\:px-4 {\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n  .md\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n  .md\\:px-7 {\n    padding-left: 1.75rem;\n    padding-right: 1.75rem;\n  }\n  .md\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n  .md\\:py-0 {\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n  .md\\:py-1 {\n    padding-top: 0.25rem;\n    padding-bottom: 0.25rem;\n  }\n  .md\\:py-14 {\n    padding-top: 3.5rem;\n    padding-bottom: 3.5rem;\n  }\n  .md\\:py-16 {\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n  }\n  .md\\:py-20 {\n    padding-top: 5rem;\n    padding-bottom: 5rem;\n  }\n  .md\\:py-24 {\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n  .md\\:py-3 {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n  }\n  .md\\:py-4 {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n  }\n  .md\\:py-6 {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n  .md\\:py-8 {\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n  }\n  .md\\:py-\\[\\.688rem\\] {\n    padding-top: .688rem;\n    padding-bottom: .688rem;\n  }\n  .md\\:pb-6 {\n    padding-bottom: 1.5rem;\n  }\n  .md\\:pl-12 {\n    padding-left: 3rem;\n  }\n  .md\\:pl-16 {\n    padding-left: 4rem;\n  }\n  .md\\:pl-20 {\n    padding-left: 5rem;\n  }\n  .md\\:pl-4 {\n    padding-left: 1rem;\n  }\n  .md\\:pl-6 {\n    padding-left: 1.5rem;\n  }\n  .md\\:pl-7 {\n    padding-left: 1.75rem;\n  }\n  .md\\:pl-8 {\n    padding-left: 2rem;\n  }\n  .md\\:pr-10 {\n    padding-right: 2.5rem;\n  }\n  .md\\:pr-12 {\n    padding-right: 3rem;\n  }\n  .md\\:pr-16 {\n    padding-right: 4rem;\n  }\n  .md\\:pr-20 {\n    padding-right: 5rem;\n  }\n  .md\\:pr-8 {\n    padding-right: 2rem;\n  }\n  .md\\:pt-8 {\n    padding-top: 2rem;\n  }\n  .md\\:text-left {\n    text-align: left;\n  }\n  .md\\:text-right {\n    text-align: right;\n  }\n  .md\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n  .md\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n  .md\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n  .md\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n  .md\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n  .md\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n  .md\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n  .md\\:text-sm {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n  .md\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n  .md\\:leading-normal {\n    line-height: 1.5;\n  }\n  .md\\:leading-tight {\n    line-height: 1.25;\n  }\n  .md\\:text-blue-300 {\n    --tw-text-opacity: 1;\n    color: rgb(147 197 253 / var(--tw-text-opacity));\n  }\n  .md\\:text-gray-100 {\n    --tw-text-opacity: 1;\n    color: rgb(243 244 246 / var(--tw-text-opacity));\n  }\n  .md\\:text-gray-400 {\n    --tw-text-opacity: 1;\n    color: rgb(156 163 175 / var(--tw-text-opacity));\n  }\n  .md\\:opacity-100 {\n    opacity: 1;\n  }\n  .md\\:shadow-md {\n    --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n    --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n  .md\\:duration-\\[150ms\\] {\n    transition-duration: 150ms;\n  }\n  .md\\:\\[--strategy\\:absolute\\] {\n    --strategy: absolute;\n  }\n  .md\\:\\[--strategy\\:fixed\\] {\n    --strategy: fixed;\n  }\n  .md\\:\\[--trigger\\:hover\\] {\n    --trigger: hover;\n  }\n  @media (prefers-color-scheme: dark) {\n    .md\\:dark\\:border {\n      border-width: 1px;\n    }\n    .md\\:dark\\:bg-gray-800 {\n      --tw-bg-opacity: 1;\n      background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n    }\n    .md\\:dark\\:bg-transparent {\n      background-color: transparent;\n    }\n  }\n}\n@media (min-width: 1024px) {\n  .lg\\:absolute {\n    position: absolute;\n  }\n  .lg\\:relative {\n    position: relative;\n  }\n  .lg\\:inset-x-0 {\n    left: 0px;\n    right: 0px;\n  }\n  .lg\\:inset-y-0 {\n    top: 0px;\n    bottom: 0px;\n  }\n  .lg\\:-left-16 {\n    left: -4rem;\n  }\n  .lg\\:right-8 {\n    right: 2rem;\n  }\n  .lg\\:top-0 {\n    top: 0px;\n  }\n  .lg\\:top-8 {\n    top: 2rem;\n  }\n  .lg\\:order-1 {\n    order: 1;\n  }\n  .lg\\:order-2 {\n    order: 2;\n  }\n  .lg\\:order-last {\n    order: 9999;\n  }\n  .lg\\:order-none {\n    order: 0;\n  }\n  .lg\\:col-span-1 {\n    grid-column: span 1 / span 1;\n  }\n  .lg\\:col-span-2 {\n    grid-column: span 2 / span 2;\n  }\n  .lg\\:col-span-3 {\n    grid-column: span 3 / span 3;\n  }\n  .lg\\:col-span-4 {\n    grid-column: span 4 / span 4;\n  }\n  .lg\\:col-span-5 {\n    grid-column: span 5 / span 5;\n  }\n  .lg\\:col-span-6 {\n    grid-column: span 6 / span 6;\n  }\n  .lg\\:col-span-7 {\n    grid-column: span 7 / span 7;\n  }\n  .lg\\:col-span-8 {\n    grid-column: span 8 / span 8;\n  }\n  .lg\\:col-start-1 {\n    grid-column-start: 1;\n  }\n  .lg\\:col-start-3 {\n    grid-column-start: 3;\n  }\n  .lg\\:col-start-6 {\n    grid-column-start: 6;\n  }\n  .lg\\:col-start-8 {\n    grid-column-start: 8;\n  }\n  .lg\\:col-end-13 {\n    grid-column-end: 13;\n  }\n  .lg\\:row-span-2 {\n    grid-row: span 2 / span 2;\n  }\n  .lg\\:-mx-10 {\n    margin-left: -2.5rem;\n    margin-right: -2.5rem;\n  }\n  .lg\\:-mx-12 {\n    margin-left: -3rem;\n    margin-right: -3rem;\n  }\n  .lg\\:-mx-2 {\n    margin-left: -0.5rem;\n    margin-right: -0.5rem;\n  }\n  .lg\\:-mx-4 {\n    margin-left: -1rem;\n    margin-right: -1rem;\n  }\n  .lg\\:-mx-6 {\n    margin-left: -1.5rem;\n    margin-right: -1.5rem;\n  }\n  .lg\\:mx-0 {\n    margin-left: 0px;\n    margin-right: 0px;\n  }\n  .lg\\:mx-10 {\n    margin-left: 2.5rem;\n    margin-right: 2.5rem;\n  }\n  .lg\\:mx-12 {\n    margin-left: 3rem;\n    margin-right: 3rem;\n  }\n  .lg\\:mx-2 {\n    margin-left: 0.5rem;\n    margin-right: 0.5rem;\n  }\n  .lg\\:mx-4 {\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n  .lg\\:mx-6 {\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n  }\n  .lg\\:mx-8 {\n    margin-left: 2rem;\n    margin-right: 2rem;\n  }\n  .lg\\:mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .lg\\:my-0 {\n    margin-top: 0px;\n    margin-bottom: 0px;\n  }\n  .lg\\:my-8 {\n    margin-top: 2rem;\n    margin-bottom: 2rem;\n  }\n  .lg\\:-mb-6 {\n    margin-bottom: -1.5rem;\n  }\n  .lg\\:-ml-6 {\n    margin-left: -1.5rem;\n  }\n  .lg\\:-mt-2 {\n    margin-top: -0.5rem;\n  }\n  .lg\\:mb-0 {\n    margin-bottom: 0px;\n  }\n  .lg\\:mb-12 {\n    margin-bottom: 3rem;\n  }\n  .lg\\:mb-14 {\n    margin-bottom: 3.5rem;\n  }\n  .lg\\:mb-16 {\n    margin-bottom: 4rem;\n  }\n  .lg\\:mb-20 {\n    margin-bottom: 5rem;\n  }\n  .lg\\:mb-3 {\n    margin-bottom: 0.75rem;\n  }\n  .lg\\:mb-6 {\n    margin-bottom: 1.5rem;\n  }\n  .lg\\:mb-8 {\n    margin-bottom: 2rem;\n  }\n  .lg\\:ml-0 {\n    margin-left: 0px;\n  }\n  .lg\\:ml-4 {\n    margin-left: 1rem;\n  }\n  .lg\\:ml-auto {\n    margin-left: auto;\n  }\n  .lg\\:mr-0 {\n    margin-right: 0px;\n  }\n  .lg\\:mr-6 {\n    margin-right: 1.5rem;\n  }\n  .lg\\:mt-0 {\n    margin-top: 0px;\n  }\n  .lg\\:mt-10 {\n    margin-top: 2.5rem;\n  }\n  .lg\\:mt-12 {\n    margin-top: 3rem;\n  }\n  .lg\\:mt-14 {\n    margin-top: 3.5rem;\n  }\n  .lg\\:mt-16 {\n    margin-top: 4rem;\n  }\n  .lg\\:mt-2 {\n    margin-top: 0.5rem;\n  }\n  .lg\\:mt-20 {\n    margin-top: 5rem;\n  }\n  .lg\\:mt-24 {\n    margin-top: 6rem;\n  }\n  .lg\\:mt-32 {\n    margin-top: 8rem;\n  }\n  .lg\\:mt-5 {\n    margin-top: 1.25rem;\n  }\n  .lg\\:mt-6 {\n    margin-top: 1.5rem;\n  }\n  .lg\\:mt-8 {\n    margin-top: 2rem;\n  }\n  .lg\\:mt-px {\n    margin-top: 1px;\n  }\n  .lg\\:block {\n    display: block;\n  }\n  .lg\\:inline-block {\n    display: inline-block;\n  }\n  .lg\\:inline {\n    display: inline;\n  }\n  .lg\\:flex {\n    display: flex;\n  }\n  .lg\\:grid {\n    display: grid;\n  }\n  .lg\\:hidden {\n    display: none;\n  }\n  .lg\\:h-1 {\n    height: 0.25rem;\n  }\n  .lg\\:h-10 {\n    height: 2.5rem;\n  }\n  .lg\\:h-12 {\n    height: 3rem;\n  }\n  .lg\\:h-40 {\n    height: 10rem;\n  }\n  .lg\\:h-48 {\n    height: 12rem;\n  }\n  .lg\\:h-6 {\n    height: 1.5rem;\n  }\n  .lg\\:h-60 {\n    height: 15rem;\n  }\n  .lg\\:h-80 {\n    height: 20rem;\n  }\n  .lg\\:h-96 {\n    height: 24rem;\n  }\n  .lg\\:h-\\[32rem\\] {\n    height: 32rem;\n  }\n  .lg\\:h-\\[36rem\\] {\n    height: 36rem;\n  }\n  .lg\\:h-auto {\n    height: auto;\n  }\n  .lg\\:h-full {\n    height: 100%;\n  }\n  .lg\\:h-screen {\n    height: 100vh;\n  }\n  .lg\\:w-0 {\n    width: 0px;\n  }\n  .lg\\:w-1\\/2 {\n    width: 50%;\n  }\n  .lg\\:w-1\\/3 {\n    width: 33.333333%;\n  }\n  .lg\\:w-1\\/4 {\n    width: 25%;\n  }\n  .lg\\:w-1\\/6 {\n    width: 16.666667%;\n  }\n  .lg\\:w-10 {\n    width: 2.5rem;\n  }\n  .lg\\:w-12 {\n    width: 3rem;\n  }\n  .lg\\:w-16 {\n    width: 4rem;\n  }\n  .lg\\:w-2\\/3 {\n    width: 66.666667%;\n  }\n  .lg\\:w-2\\/5 {\n    width: 40%;\n  }\n  .lg\\:w-2\\/6 {\n    width: 33.333333%;\n  }\n  .lg\\:w-24 {\n    width: 6rem;\n  }\n  .lg\\:w-3\\/4 {\n    width: 75%;\n  }\n  .lg\\:w-3\\/5 {\n    width: 60%;\n  }\n  .lg\\:w-4\\/5 {\n    width: 80%;\n  }\n  .lg\\:w-4\\/6 {\n    width: 66.666667%;\n  }\n  .lg\\:w-40 {\n    width: 10rem;\n  }\n  .lg\\:w-48 {\n    width: 12rem;\n  }\n  .lg\\:w-6 {\n    width: 1.5rem;\n  }\n  .lg\\:w-60 {\n    width: 15rem;\n  }\n  .lg\\:w-64 {\n    width: 16rem;\n  }\n  .lg\\:w-72 {\n    width: 18rem;\n  }\n  .lg\\:w-96 {\n    width: 24rem;\n  }\n  .lg\\:w-\\[32rem\\] {\n    width: 32rem;\n  }\n  .lg\\:w-auto {\n    width: auto;\n  }\n  .lg\\:w-full {\n    width: 100%;\n  }\n  .lg\\:max-w-2xl {\n    max-width: 42rem;\n  }\n  .lg\\:max-w-5xl {\n    max-width: 64rem;\n  }\n  .lg\\:max-w-lg {\n    max-width: 32rem;\n  }\n  .lg\\:max-w-none {\n    max-width: none;\n  }\n  .lg\\:max-w-screen-lg {\n    max-width: 1024px;\n  }\n  .lg\\:max-w-sm {\n    max-width: 24rem;\n  }\n  .lg\\:max-w-xl {\n    max-width: 36rem;\n  }\n  .lg\\:flex-1 {\n    flex: 1 1 0%;\n  }\n  .lg\\:flex-grow {\n    flex-grow: 1;\n  }\n  .lg\\:-translate-x-10 {\n    --tw-translate-x: -2.5rem;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n  .lg\\:-translate-x-80 {\n    --tw-translate-x: -20rem;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n  .lg\\:translate-x-0 {\n    --tw-translate-x: 0px;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n  .lg\\:translate-x-20 {\n    --tw-translate-x: 5rem;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n  .lg\\:translate-x-32 {\n    --tw-translate-x: 8rem;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n  .lg\\:translate-x-80 {\n    --tw-translate-x: 20rem;\n    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n  }\n  .lg\\:columns-3 {\n    -moz-columns: 3;\n         columns: 3;\n  }\n  .lg\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-6 {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-7 {\n    grid-template-columns: repeat(7, minmax(0, 1fr));\n  }\n  .lg\\:grid-rows-2 {\n    grid-template-rows: repeat(2, minmax(0, 1fr));\n  }\n  .lg\\:flex-row {\n    flex-direction: row;\n  }\n  .lg\\:flex-col {\n    flex-direction: column;\n  }\n  .lg\\:flex-wrap {\n    flex-wrap: wrap;\n  }\n  .lg\\:items-start {\n    align-items: flex-start;\n  }\n  .lg\\:items-end {\n    align-items: flex-end;\n  }\n  .lg\\:items-center {\n    align-items: center;\n  }\n  .lg\\:items-stretch {\n    align-items: stretch;\n  }\n  .lg\\:justify-start {\n    justify-content: flex-start;\n  }\n  .lg\\:justify-end {\n    justify-content: flex-end;\n  }\n  .lg\\:justify-center {\n    justify-content: center;\n  }\n  .lg\\:justify-between {\n    justify-content: space-between;\n  }\n  .lg\\:gap-10 {\n    gap: 2.5rem;\n  }\n  .lg\\:gap-12 {\n    gap: 3rem;\n  }\n  .lg\\:gap-16 {\n    gap: 4rem;\n  }\n  .lg\\:gap-32 {\n    gap: 8rem;\n  }\n  .lg\\:gap-4 {\n    gap: 1rem;\n  }\n  .lg\\:gap-6 {\n    gap: 1.5rem;\n  }\n  .lg\\:gap-8 {\n    gap: 2rem;\n  }\n  .lg\\:gap-x-12 {\n    -moz-column-gap: 3rem;\n         column-gap: 3rem;\n  }\n  .lg\\:gap-x-16 {\n    -moz-column-gap: 4rem;\n         column-gap: 4rem;\n  }\n  .lg\\:gap-x-20 {\n    -moz-column-gap: 5rem;\n         column-gap: 5rem;\n  }\n  .lg\\:gap-x-24 {\n    -moz-column-gap: 6rem;\n         column-gap: 6rem;\n  }\n  .lg\\:gap-x-6 {\n    -moz-column-gap: 1.5rem;\n         column-gap: 1.5rem;\n  }\n  .lg\\:gap-x-8 {\n    -moz-column-gap: 2rem;\n         column-gap: 2rem;\n  }\n  .lg\\:gap-y-0 {\n    row-gap: 0px;\n  }\n  .lg\\:gap-y-12 {\n    row-gap: 3rem;\n  }\n  .lg\\:gap-y-16 {\n    row-gap: 4rem;\n  }\n  .lg\\:space-x-8 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-x-reverse: 0;\n    margin-right: calc(2rem * var(--tw-space-x-reverse));\n    margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n  .lg\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0px * var(--tw-space-y-reverse));\n  }\n  .lg\\:space-y-10 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(2.5rem * var(--tw-space-y-reverse));\n  }\n  .lg\\:space-y-3 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(0.75rem * var(--tw-space-y-reverse));\n  }\n  .lg\\:space-y-8 > :not([hidden]) ~ :not([hidden]) {\n    --tw-space-y-reverse: 0;\n    margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom: calc(2rem * var(--tw-space-y-reverse));\n  }\n  .lg\\:divide-x > :not([hidden]) ~ :not([hidden]) {\n    --tw-divide-x-reverse: 0;\n    border-right-width: calc(1px * var(--tw-divide-x-reverse));\n    border-left-width: calc(1px * calc(1 - var(--tw-divide-x-reverse)));\n  }\n  .lg\\:rounded-lg {\n    border-radius: 0.5rem;\n  }\n  .lg\\:border-0 {\n    border-width: 0px;\n  }\n  .lg\\:border-b-0 {\n    border-bottom-width: 0px;\n  }\n  .lg\\:border-l {\n    border-left-width: 1px;\n  }\n  .lg\\:border-r {\n    border-right-width: 1px;\n  }\n  .lg\\:bg-gray-100 {\n    --tw-bg-opacity: 1;\n    background-color: rgb(243 244 246 / var(--tw-bg-opacity));\n  }\n  .lg\\:bg-transparent {\n    background-color: transparent;\n  }\n  .lg\\:bg-gradient-to-r {\n    background-image: linear-gradient(to right, var(--tw-gradient-stops));\n  }\n  .lg\\:from-gray-50 {\n    --tw-gradient-from: #f9fafb var(--tw-gradient-from-position);\n    --tw-gradient-to: rgb(249 250 251 / 0) var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n  }\n  .lg\\:via-transparent {\n    --tw-gradient-to: rgb(0 0 0 / 0)  var(--tw-gradient-to-position);\n    --tw-gradient-stops: var(--tw-gradient-from), transparent var(--tw-gradient-via-position), var(--tw-gradient-to);\n  }\n  .lg\\:to-transparent {\n    --tw-gradient-to: transparent var(--tw-gradient-to-position);\n  }\n  .lg\\:p-0 {\n    padding: 0px;\n  }\n  .lg\\:p-10 {\n    padding: 2.5rem;\n  }\n  .lg\\:p-12 {\n    padding: 3rem;\n  }\n  .lg\\:p-24 {\n    padding: 6rem;\n  }\n  .lg\\:p-4 {\n    padding: 1rem;\n  }\n  .lg\\:p-6 {\n    padding: 1.5rem;\n  }\n  .lg\\:p-8 {\n    padding: 2rem;\n  }\n  .lg\\:px-0 {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .lg\\:px-10 {\n    padding-left: 2.5rem;\n    padding-right: 2.5rem;\n  }\n  .lg\\:px-12 {\n    padding-left: 3rem;\n    padding-right: 3rem;\n  }\n  .lg\\:px-16 {\n    padding-left: 4rem;\n    padding-right: 4rem;\n  }\n  .lg\\:px-36 {\n    padding-left: 9rem;\n    padding-right: 9rem;\n  }\n  .lg\\:px-5 {\n    padding-left: 1.25rem;\n    padding-right: 1.25rem;\n  }\n  .lg\\:px-6 {\n    padding-left: 1.5rem;\n    padding-right: 1.5rem;\n  }\n  .lg\\:px-8 {\n    padding-left: 2rem;\n    padding-right: 2rem;\n  }\n  .lg\\:py-0 {\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n  .lg\\:py-12 {\n    padding-top: 3rem;\n    padding-bottom: 3rem;\n  }\n  .lg\\:py-14 {\n    padding-top: 3.5rem;\n    padding-bottom: 3.5rem;\n  }\n  .lg\\:py-16 {\n    padding-top: 4rem;\n    padding-bottom: 4rem;\n  }\n  .lg\\:py-2 {\n    padding-top: 0.5rem;\n    padding-bottom: 0.5rem;\n  }\n  .lg\\:py-2\\.5 {\n    padding-top: 0.625rem;\n    padding-bottom: 0.625rem;\n  }\n  .lg\\:py-20 {\n    padding-top: 5rem;\n    padding-bottom: 5rem;\n  }\n  .lg\\:py-24 {\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n  .lg\\:py-3 {\n    padding-top: 0.75rem;\n    padding-bottom: 0.75rem;\n  }\n  .lg\\:py-32 {\n    padding-top: 8rem;\n    padding-bottom: 8rem;\n  }\n  .lg\\:py-5 {\n    padding-top: 1.25rem;\n    padding-bottom: 1.25rem;\n  }\n  .lg\\:py-6 {\n    padding-top: 1.5rem;\n    padding-bottom: 1.5rem;\n  }\n  .lg\\:pb-12 {\n    padding-bottom: 3rem;\n  }\n  .lg\\:pb-24 {\n    padding-bottom: 6rem;\n  }\n  .lg\\:pb-32 {\n    padding-bottom: 8rem;\n  }\n  .lg\\:pb-48 {\n    padding-bottom: 12rem;\n  }\n  .lg\\:pl-10 {\n    padding-left: 2.5rem;\n  }\n  .lg\\:pl-12 {\n    padding-left: 3rem;\n  }\n  .lg\\:pl-24 {\n    padding-left: 6rem;\n  }\n  .lg\\:pl-4 {\n    padding-left: 1rem;\n  }\n  .lg\\:pl-6 {\n    padding-left: 1.5rem;\n  }\n  .lg\\:pl-8 {\n    padding-left: 2rem;\n  }\n  .lg\\:pr-0 {\n    padding-right: 0px;\n  }\n  .lg\\:pr-10 {\n    padding-right: 2.5rem;\n  }\n  .lg\\:pr-12 {\n    padding-right: 3rem;\n  }\n  .lg\\:pr-24 {\n    padding-right: 6rem;\n  }\n  .lg\\:pr-4 {\n    padding-right: 1rem;\n  }\n  .lg\\:pr-6 {\n    padding-right: 1.5rem;\n  }\n  .lg\\:pr-8 {\n    padding-right: 2rem;\n  }\n  .lg\\:pt-10 {\n    padding-top: 2.5rem;\n  }\n  .lg\\:pt-12 {\n    padding-top: 3rem;\n  }\n  .lg\\:pt-16 {\n    padding-top: 4rem;\n  }\n  .lg\\:pt-20 {\n    padding-top: 5rem;\n  }\n  .lg\\:pt-24 {\n    padding-top: 6rem;\n  }\n  .lg\\:pt-32 {\n    padding-top: 8rem;\n  }\n  .lg\\:pt-48 {\n    padding-top: 12rem;\n  }\n  .lg\\:pt-8 {\n    padding-top: 2rem;\n  }\n  .lg\\:text-left {\n    text-align: left;\n  }\n  .lg\\:text-center {\n    text-align: center;\n  }\n  .lg\\:text-right {\n    text-align: right;\n  }\n  .lg\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n  .lg\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n  .lg\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n  .lg\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n  .lg\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n  .lg\\:text-7xl {\n    font-size: 4.5rem;\n    line-height: 1;\n  }\n  .lg\\:text-9xl {\n    font-size: 8rem;\n    line-height: 1;\n  }\n  .lg\\:text-base {\n    font-size: 1rem;\n    line-height: 1.5rem;\n  }\n  .lg\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n  .lg\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n  .lg\\:text-xs {\n    font-size: 0.75rem;\n    line-height: 1rem;\n  }\n  .lg\\:font-bold {\n    font-weight: 700;\n  }\n  .lg\\:font-normal {\n    font-weight: 400;\n  }\n  .lg\\:uppercase {\n    text-transform: uppercase;\n  }\n  .lg\\:leading-normal {\n    line-height: 1.5;\n  }\n  .lg\\:leading-tight {\n    line-height: 1.25;\n  }\n  .lg\\:tracking-wide {\n    letter-spacing: 0.025em;\n  }\n  .lg\\:text-blue-700 {\n    --tw-text-opacity: 1;\n    color: rgb(29 78 216 / var(--tw-text-opacity));\n  }\n  .lg\\:text-gray-500 {\n    --tw-text-opacity: 1;\n    color: rgb(107 114 128 / var(--tw-text-opacity));\n  }\n  .lg\\:opacity-100 {\n    opacity: 1;\n  }\n  .lg\\:shadow-lg {\n    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n  .lg\\:shadow-none {\n    --tw-shadow: 0 0 #0000;\n    --tw-shadow-colored: 0 0 #0000;\n    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n  }\n  .lg\\:before\\:absolute::before {\n    content: var(--tw-content);\n    position: absolute;\n  }\n  .lg\\:before\\:-left-12::before {\n    content: var(--tw-content);\n    left: -3rem;\n  }\n  .lg\\:before\\:top-0::before {\n    content: var(--tw-content);\n    top: 0px;\n  }\n  .lg\\:before\\:h-full::before {\n    content: var(--tw-content);\n    height: 100%;\n  }\n  .lg\\:before\\:w-px::before {\n    content: var(--tw-content);\n    width: 1px;\n  }\n  .lg\\:before\\:bg-gray-200::before {\n    content: var(--tw-content);\n    --tw-bg-opacity: 1;\n    background-color: rgb(229 231 235 / var(--tw-bg-opacity));\n  }\n  .lg\\:hover\\:bg-transparent:hover {\n    background-color: transparent;\n  }\n  .lg\\:hover\\:text-blue-700:hover {\n    --tw-text-opacity: 1;\n    color: rgb(29 78 216 / var(--tw-text-opacity));\n  }\n  @media (prefers-color-scheme: dark) {\n    .lg\\:dark\\:bg-gray-800 {\n      --tw-bg-opacity: 1;\n      background-color: rgb(31 41 55 / var(--tw-bg-opacity));\n    }\n    .lg\\:dark\\:bg-transparent {\n      background-color: transparent;\n    }\n    .lg\\:before\\:dark\\:bg-gray-700::before {\n      content: var(--tw-content);\n      --tw-bg-opacity: 1;\n      background-color: rgb(55 65 81 / var(--tw-bg-opacity));\n    }\n    .lg\\:dark\\:hover\\:bg-transparent:hover {\n      background-color: transparent;\n    }\n    .lg\\:dark\\:hover\\:text-white:hover {\n      --tw-text-opacity: 1;\n      color: rgb(255 255 255 / var(--tw-text-opacity));\n    }\n  }\n}\n@media (min-width: 1280px) {\n  .xl\\:-mx-8 {\n    margin-left: -2rem;\n    margin-right: -2rem;\n  }\n  .xl\\:mx-4 {\n    margin-left: 1rem;\n    margin-right: 1rem;\n  }\n  .xl\\:mx-8 {\n    margin-left: 2rem;\n    margin-right: 2rem;\n  }\n  .xl\\:mx-auto {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .xl\\:mb-12 {\n    margin-bottom: 3rem;\n  }\n  .xl\\:mb-16 {\n    margin-bottom: 4rem;\n  }\n  .xl\\:mr-3 {\n    margin-right: 0.75rem;\n  }\n  .xl\\:mr-4 {\n    margin-right: 1rem;\n  }\n  .xl\\:mt-0 {\n    margin-top: 0px;\n  }\n  .xl\\:mt-12 {\n    margin-top: 3rem;\n  }\n  .xl\\:mt-16 {\n    margin-top: 4rem;\n  }\n  .xl\\:mt-6 {\n    margin-top: 1.5rem;\n  }\n  .xl\\:flex {\n    display: flex;\n  }\n  .xl\\:h-6 {\n    height: 1.5rem;\n  }\n  .xl\\:h-96 {\n    height: 24rem;\n  }\n  .xl\\:h-\\[28rem\\] {\n    height: 28rem;\n  }\n  .xl\\:h-\\[34rem\\] {\n    height: 34rem;\n  }\n  .xl\\:w-1\\/2 {\n    width: 50%;\n  }\n  .xl\\:w-1\\/3 {\n    width: 33.333333%;\n  }\n  .xl\\:w-1\\/4 {\n    width: 25%;\n  }\n  .xl\\:w-10\\/12 {\n    width: 83.333333%;\n  }\n  .xl\\:w-2\\/4 {\n    width: 50%;\n  }\n  .xl\\:w-5\\/12 {\n    width: 41.666667%;\n  }\n  .xl\\:w-6 {\n    width: 1.5rem;\n  }\n  .xl\\:w-\\[34rem\\] {\n    width: 34rem;\n  }\n  .xl\\:min-w-\\[18rem\\] {\n    min-width: 18rem;\n  }\n  .xl\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .xl\\:flex-row {\n    flex-direction: row;\n  }\n  .xl\\:flex-nowrap {\n    flex-wrap: nowrap;\n  }\n  .xl\\:items-start {\n    align-items: flex-start;\n  }\n  .xl\\:items-center {\n    align-items: center;\n  }\n  .xl\\:gap-0 {\n    gap: 0px;\n  }\n  .xl\\:gap-10 {\n    gap: 2.5rem;\n  }\n  .xl\\:gap-12 {\n    gap: 3rem;\n  }\n  .xl\\:gap-16 {\n    gap: 4rem;\n  }\n  .xl\\:gap-20 {\n    gap: 5rem;\n  }\n  .xl\\:gap-32 {\n    gap: 8rem;\n  }\n  .xl\\:gap-6 {\n    gap: 1.5rem;\n  }\n  .xl\\:gap-8 {\n    gap: 2rem;\n  }\n  .xl\\:gap-x-12 {\n    -moz-column-gap: 3rem;\n         column-gap: 3rem;\n  }\n  .xl\\:border-x {\n    border-left-width: 1px;\n    border-right-width: 1px;\n  }\n  .xl\\:p-0 {\n    padding: 0px;\n  }\n  .xl\\:p-8 {\n    padding: 2rem;\n  }\n  .xl\\:px-24 {\n    padding-left: 6rem;\n    padding-right: 6rem;\n  }\n  .xl\\:px-32 {\n    padding-left: 8rem;\n    padding-right: 8rem;\n  }\n  .xl\\:px-48 {\n    padding-left: 12rem;\n    padding-right: 12rem;\n  }\n  .xl\\:py-24 {\n    padding-top: 6rem;\n    padding-bottom: 6rem;\n  }\n  .xl\\:py-48 {\n    padding-top: 12rem;\n    padding-bottom: 12rem;\n  }\n  .xl\\:py-64 {\n    padding-top: 16rem;\n    padding-bottom: 16rem;\n  }\n  .xl\\:pr-0 {\n    padding-right: 0px;\n  }\n  .xl\\:pr-12 {\n    padding-right: 3rem;\n  }\n  .xl\\:text-2xl {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n  .xl\\:text-3xl {\n    font-size: 1.875rem;\n    line-height: 2.25rem;\n  }\n  .xl\\:text-4xl {\n    font-size: 2.25rem;\n    line-height: 2.5rem;\n  }\n  .xl\\:text-5xl {\n    font-size: 3rem;\n    line-height: 1;\n  }\n  .xl\\:text-6xl {\n    font-size: 3.75rem;\n    line-height: 1;\n  }\n  .xl\\:text-lg {\n    font-size: 1.125rem;\n    line-height: 1.75rem;\n  }\n  .xl\\:text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem;\n  }\n  .xl\\:leading-normal {\n    line-height: 1.5;\n  }\n  .xl\\:leading-tight {\n    line-height: 1.25;\n  }\n}\n@media (min-width: 1536px) {\n  .\\32xl\\:ml-16 {\n    margin-left: 4rem;\n  }\n  .\\32xl\\:block {\n    display: block;\n  }\n  .\\32xl\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .\\32xl\\:text-8xl {\n    font-size: 6rem;\n    line-height: 1;\n  }\n}\n";
styleInject(css_248z,{"insertAt":"top"});

const CustomContentProviderBase = ({ data, standaloneServer }) => {
  return /* @__PURE__ */ React__default["default"].createElement("div", { className: "h-full h-screen" }, /* @__PURE__ */ React__default["default"].createElement(Editor, { data, standaloneServer }));
};
const CustomContentProvider = ({ data }) => /* @__PURE__ */ React__default["default"].createElement(CustomContentProviderBase, { data, standaloneServer: false });

exports.CustomContentProvider = CustomContentProvider;
