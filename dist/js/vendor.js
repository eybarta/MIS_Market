/******/!function(e){/******/
// The require function
/******/
function t(n){/******/
// Check if module is in cache
/******/
if(r[n])/******/
return r[n].exports;/******/
// Create a new module (and put it into the cache)
/******/
var i=r[n]={/******/
i:n,/******/
l:!1,/******/
exports:{}};/******/
// Return the exports of the module
/******/
/******/
// Execute the module function
/******/
/******/
// Flag the module as loaded
/******/
return e[n].call(i.exports,i,i.exports,t),i.l=!0,i.exports}// webpackBootstrap
/******/
// install a JSONP callback for chunk loading
/******/
var n=window.webpackJsonp;/******/
window.webpackJsonp=function(r,o,a){/******/
for(/******/
// add "moreModules" to the modules object,
/******/
// then flag all "chunkIds" as loaded and fire callback
/******/
var u,s,l,c=0,f=[];c<r.length;c++)/******/
s=r[c],/******/
i[s]&&/******/
f.push(i[s][0]),/******/
i[s]=0;/******/
for(u in o)/******/
Object.prototype.hasOwnProperty.call(o,u)&&(/******/
e[u]=o[u]);/******/
for(/******/
n&&n(r,o,a);f.length;)/******/
f.shift()();/******/
if(a)/******/
for(c=0;c<a.length;c++)/******/
l=t(t.s=a[c]);/******/
return l};/******/
// The module cache
/******/
var r={},i={/******/
2:0};/******/
// Load entry module and return exports
/******/
/******/
// This file contains only the entry chunk.
/******/
// The chunk loading function for additional chunks
/******/
/******/
// expose the modules object (__webpack_modules__)
/******/
/******/
// expose the module cache
/******/
/******/
// identity function for calling harmony imports with the correct context
/******/
/******/
// define getter function for harmony exports
/******/
/******/
// getDefaultExport function for compatibility with non-harmony modules
/******/
/******/
// Object.prototype.hasOwnProperty.call
/******/
/******/
// __webpack_public_path__
/******/
/******/
// on error function for async loading
/******/
return t.e=function(e){/******/
function n(){/******/
// avoid mem leaks in IE.
/******/
o.onerror=o.onload=null,/******/
clearTimeout(a);/******/
var t=i[e];/******/
0!==t&&(/******/
t&&t[1](new Error("Loading chunk "+e+" failed.")),/******/
i[e]=void 0)}/******/
if(0===i[e])/******/
return Promise.resolve();/******/
// an Promise means "currently loading".
/******/
if(i[e])/******/
return i[e][2];/******/
// start chunk loading
/******/
var r=document.getElementsByTagName("head")[0],o=document.createElement("script");/******/
o.type="text/javascript",/******/
o.charset="utf-8",/******/
o.async=!0,/******/
o.timeout=12e4,/******/
t.nc&&/******/
o.setAttribute("nonce",t.nc),/******/
o.src=t.p+"js/"+e+".js";/******/
var a=setTimeout(n,12e4);/******/
o.onerror=o.onload=n;/******/
var u=new Promise(function(t,n){/******/
i[e]=[t,n]});/******/
/******/
/******/
return i[e][2]=u,r.appendChild(o),u},t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,n,r){/******/
t.o(e,n)||/******/
Object.defineProperty(e,n,{/******/
configurable:!1,/******/
enumerable:!0,/******/
get:r})},t.n=function(e){/******/
var n=e&&e.__esModule?/******/
function(){return e.default}:/******/
function(){return e};/******/
/******/
return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t.oe=function(e){throw console.error(e),e},t(t.s=0)}({/***/
"../node_modules/jquery/dist/jquery.js":/***/
function(e,t,n){var r,i;/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
!function(t,n){"use strict";"object"==typeof e&&"object"==typeof e.exports?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,function(n,o){
// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";function a(e,t){t=t||oe;var n=t.createElement("script");n.text=e,t.head.appendChild(n).parentNode.removeChild(n)}function u(e){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=me.type(e);return"function"!==n&&!me.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}
// Implement the identical functionality for filter and not
function s(e,t,n){
// Single element
// Arraylike of elements (jQuery, arguments, Array)
// Simple selector that can be filtered directly, removing non-Elements
// Complex selector, compare the two sets, removing non-Elements
return me.isFunction(t)?me.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?me.grep(e,function(e){return e===t!==n}):"string"!=typeof t?me.grep(e,function(e){return ce.call(t,e)>-1!==n}):Ae.test(t)?me.filter(t,e,n):(t=me.filter(t,e),me.grep(e,function(e){return ce.call(t,e)>-1!==n&&1===e.nodeType}))}function l(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}
// Convert String-formatted options into Object-formatted ones
function c(e){var t={};return me.each(e.match(De)||[],function(e,n){t[n]=!0}),t}function f(e){return e}function p(e){throw e}function d(e,t,n){var r;try{
// Check for promise aspect first to privilege synchronous behavior
e&&me.isFunction(r=e.promise)?r.call(e).done(t).fail(n):e&&me.isFunction(r=e.then)?r.call(e,t,n):
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
t.call(void 0,e)}catch(e){
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.call(void 0,e)}}
// The ready event handler and self cleanup method
function h(){oe.removeEventListener("DOMContentLoaded",h),n.removeEventListener("load",h),me.ready()}function g(){this.expando=me.expando+g.uid++}function v(e){
// Only convert to a number if it doesn't change the string
return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:ze.test(e)?JSON.parse(e):e)}function y(e,t,n){var r;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(We,"-$&").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n=v(n)}catch(e){}
// Make sure we set the data so it isn't changed later
Ie.set(e,t,n)}else n=void 0;return n}function m(e,t,n,r){var i,o=1,a=20,u=r?function(){return r.cur()}:function(){return me.css(e,t,"")},s=u(),l=n&&n[3]||(me.cssNumber[t]?"":"px"),
// Starting value computation is required for potential unit mismatches
c=(me.cssNumber[t]||"px"!==l&&+s)&&Be.exec(me.css(e,t));if(c&&c[3]!==l){
// Trust units reported by jQuery.css
l=l||c[3],
// Make sure we update the tween properties later on
n=n||[],
// Iteratively approximate from a nonzero starting point
c=+s||1;do
// If previous iteration zeroed out, double until we get *something*.
// Use string for doubling so we don't accidentally see scale as unchanged below
o=o||".5",
// Adjust and apply
c/=o,me.style(e,t,c+l);while(o!==(o=u()/s)&&1!==o&&--a)}
// Apply relative offset (+=/-=) if specified
return n&&(c=+c||+s||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}function b(e){var t,n=e.ownerDocument,r=e.nodeName,i=Ge[r];return i?i:(t=n.body.appendChild(n.createElement(r)),i=me.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),Ge[r]=i,i)}function x(e,t){
// Determine new display value for elements that need to change
for(var n,r,i=[],o=0,a=e.length;o<a;o++)r=e[o],r.style&&(n=r.style.display,t?(
// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
"none"===n&&(i[o]=He.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&Ue(r)&&(i[o]=b(r))):"none"!==n&&(i[o]="none",
// Remember what we're overwriting
He.set(r,"display",n)));
// Set the display of the elements in a second loop to avoid constant reflow
for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}function w(e,t){
// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&me.nodeName(e,t)?me.merge([e],n):n}
// Mark scripts as having already been evaluated
function _(e,t){for(var n=0,r=e.length;n<r;n++)He.set(e[n],"globalEval",!t||He.get(t[n],"globalEval"))}function T(e,t,n,r,i){for(var o,a,u,s,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if(o=e[d],o||0===o)
// Add nodes directly
if("object"===me.type(o))
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
me.merge(p,o.nodeType?[o]:o);else if(Ke.test(o)){for(a=a||f.appendChild(t.createElement("div")),
// Deserialize a standard representation
u=(Qe.exec(o)||["",""])[1].toLowerCase(),s=Je[u]||Je._default,a.innerHTML=s[1]+me.htmlPrefilter(o)+s[2],
// Descend through wrappers to the right content
c=s[0];c--;)a=a.lastChild;
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
me.merge(p,a.childNodes),
// Remember the top-level container
a=f.firstChild,
// Ensure the created nodes are orphaned (#12392)
a.textContent=""}else p.push(t.createTextNode(o));for(
// Remove wrapper from fragment
f.textContent="",d=0;o=p[d++];)
// Skip elements already in the context collection (trac-4087)
if(r&&me.inArray(o,r)>-1)i&&i.push(o);else
// Capture executables
if(l=me.contains(o.ownerDocument,o),
// Append to fragment
a=w(f.appendChild(o),"script"),
// Preserve script evaluation history
l&&_(a),n)for(c=0;o=a[c++];)Ze.test(o.type||"")&&n.push(o);return f}function S(){return!0}function k(){return!1}
// Support: IE <=9 only
// See #13393 for more info
function C(){try{return oe.activeElement}catch(e){}}function j(e,t,n,r,i,o){var a,u;
// Types can be a map of types/handlers
if("object"==typeof t){
// ( types-Object, selector, data )
"string"!=typeof n&&(
// ( types-Object, data )
r=r||n,n=void 0);for(u in t)j(e,u,n,r,t[u],o);return e}if(null==r&&null==i?(
// ( types, fn )
i=n,r=n=void 0):null==i&&("string"==typeof n?(
// ( types, selector, fn )
i=r,r=void 0):(
// ( types, data, fn )
i=r,r=n,n=void 0)),i===!1)i=k;else if(!i)return e;
// Use same guid so caller can remove using origFn
return 1===o&&(a=i,i=function(e){
// Can use an empty set, since event contains the info
return me().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=me.guid++)),e.each(function(){me.event.add(this,t,i,r,n)})}function A(e,t){return me.nodeName(e,"table")&&me.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e:e}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function E(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function P(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function N(e,t){var n,r,i,o,a,u,s,l;if(1===t.nodeType){
// 1. Copy private data: events, handlers, etc.
if(He.hasData(e)&&(o=He.access(e),a=He.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)me.event.add(t,i,l[i][n])}
// 2. Copy user data
Ie.hasData(e)&&(u=Ie.access(e),s=me.extend({},u),Ie.set(t,s))}}
// Fix IE bugs, see support tests
function O(e,t){var n=t.nodeName.toLowerCase();
// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&Ye.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function L(e,t,n,r){
// Flatten any nested arrays
t=se.apply([],t);var i,o,u,s,l,c,f=0,p=e.length,d=p-1,h=t[0],g=me.isFunction(h);
// We can't cloneNode fragments that contain checked, in WebKit
if(g||p>1&&"string"==typeof h&&!ve.checkClone&&at.test(h))return e.each(function(i){var o=e.eq(i);g&&(t[0]=h.call(this,i,o.html())),L(o,t,n,r)});if(p&&(i=T(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(u=me.map(w(i,"script"),E),s=u.length;f<p;f++)l=i,f!==d&&(l=me.clone(l,!0,!0),
// Keep references to cloned scripts for later restoration
s&&
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
me.merge(u,w(l,"script"))),n.call(e[f],l,f);if(s)
// Evaluate executable scripts on first document insertion
for(c=u[u.length-1].ownerDocument,
// Reenable scripts
me.map(u,P),f=0;f<s;f++)l=u[f],Ze.test(l.type||"")&&!He.access(l,"globalEval")&&me.contains(c,l)&&(l.src?
// Optional AJAX dependency, but won't run scripts if not present
me._evalUrl&&me._evalUrl(l.src):a(l.textContent.replace(st,""),c))}return e}function D(e,t,n){for(var r,i=t?me.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||me.cleanData(w(r)),r.parentNode&&(n&&me.contains(r.ownerDocument,r)&&_(w(r,"script")),r.parentNode.removeChild(r));return e}function F(e,t,n){var r,i,o,a,u=e.style;
// Support: IE <=9 only
// getPropertyValue is only needed for .css('filter') (#12537)
// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
return n=n||ft(e),n&&(a=n.getPropertyValue(t)||n[t],""!==a||me.contains(e.ownerDocument,e)||(a=me.style(e,t)),!ve.pixelMarginRight()&&ct.test(a)&&lt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=n.width,u.width=r,u.minWidth=i,u.maxWidth=o)),void 0!==a?a+"":a}function q(e,t){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}
// Return a css property mapped to a potentially vendor prefixed property
function R(e){
// Shortcut for names that are not vendor prefixed
if(e in vt)return e;for(
// Check for vendor prefixed names
var t=e[0].toUpperCase()+e.slice(1),n=gt.length;n--;)if(e=gt[n]+t,e in vt)return e}function V(e,t,n){
// Any relative (+/-) values have already been
// normalized at this point
var r=Be.exec(t);
// Guard against undefined "subtract", e.g., when used as in cssHooks
return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function H(e,t,n,r,i){var o,a=0;for(
// If we already have the right measurement, avoid augmentation
o=n===(r?"border":"content")?4:"width"===t?1:0;o<4;o+=2)
// Both box models exclude margin, so add it if we want it
"margin"===n&&(a+=me.css(e,n+$e[o],!0,i)),r?(
// border-box includes padding, so remove it if we want content
"content"===n&&(a-=me.css(e,"padding"+$e[o],!0,i)),
// At this point, extra isn't border nor margin, so remove border
"margin"!==n&&(a-=me.css(e,"border"+$e[o]+"Width",!0,i))):(
// At this point, extra isn't content, so add padding
a+=me.css(e,"padding"+$e[o],!0,i),
// At this point, extra isn't content nor padding, so add border
"padding"!==n&&(a+=me.css(e,"border"+$e[o]+"Width",!0,i)));return a}function I(e,t,n){
// Start with offset property, which is equivalent to the border-box value
var r,i=!0,o=ft(e),a="border-box"===me.css(e,"boxSizing",!1,o);
// Some non-html elements return undefined for offsetWidth, so check for null/undefined
// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
if(
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
e.getClientRects().length&&(r=e.getBoundingClientRect()[t]),r<=0||null==r){
// Computed unit is not pixels. Stop here and return.
if(
// Fall back to computed then uncomputed css if necessary
r=F(e,t,o),(r<0||null==r)&&(r=e.style[t]),ct.test(r))return r;
// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
i=a&&(ve.boxSizingReliable()||r===e.style[t]),
// Normalize "", auto, and prepare for extra
r=parseFloat(r)||0}
// Use the active box-sizing model to add/subtract irrelevant styles
return r+H(e,t,n||(a?"border":"content"),i,o)+"px"}function z(e,t,n,r,i){return new z.prototype.init(e,t,n,r,i)}function W(){mt&&(n.requestAnimationFrame(W),me.fx.tick())}
// Animations created synchronously will run synchronously
function M(){return n.setTimeout(function(){yt=void 0}),yt=me.now()}
// Generate parameters to create a standard animation
function B(e,t){var n,r=0,i={height:e};for(
// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
t=t?1:0;r<4;r+=2-t)n=$e[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function $(e,t,n){for(var r,i=(G.tweeners[t]||[]).concat(G.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))
// We're done with this property
return r}function U(e,t,n){var r,i,o,a,u,s,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&Ue(e),v=He.get(e,"fxshow");
// Queue-skipping animations hijack the fx hooks
n.queue||(a=me._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,p.always(function(){
// Ensure the complete handler is called before this completes
p.always(function(){a.unqueued--,me.queue(e,"fx").length||a.empty.fire()})}));
// Detect show/hide animations
for(r in t)if(i=t[r],bt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){
// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||me.style(e,r)}if(
// Bail out if this is a no-op like .hide().hide()
s=!me.isEmptyObject(t),s||!me.isEmptyObject(d)){
// Restrict "overflow" and "display" styles during box animations
f&&1===e.nodeType&&(
// Support: IE <=9 - 11, Edge 12 - 13
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY
n.overflow=[h.overflow,h.overflowX,h.overflowY],
// Identify a display type, preferring old show/hide data over the CSS cascade
l=v&&v.display,null==l&&(l=He.get(e,"display")),c=me.css(e,"display"),"none"===c&&(l?c=l:(
// Get nonempty value(s) by temporarily forcing visibility
x([e],!0),l=e.style.display||l,c=me.css(e,"display"),x([e]))),
// Animate inline elements as inline-block
("inline"===c||"inline-block"===c&&null!=l)&&"none"===me.css(e,"float")&&(
// Restore the original display value at the end of pure show/hide animations
s||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),
// Implement show/hide animations
s=!1;for(r in d)
// General show/hide setup for this element animation
s||(v?"hidden"in v&&(g=v.hidden):v=He.access(e,"fxshow",{display:l}),
// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
o&&(v.hidden=!g),
// Show elements before animating them
g&&x([e],!0),/* eslint-disable no-loop-func */
p.done(function(){/* eslint-enable no-loop-func */
// The final step of a "hide" animation is actually hiding the element
g||x([e]),He.remove(e,"fxshow");for(r in d)me.style(e,r,d[r])})),
// Per-property setup
s=$(g?v[r]:0,r,p),r in v||(v[r]=s.start,g&&(s.end=s.start,s.start=0))}}function X(e,t){var n,r,i,o,a;
// camelCase, specialEasing and expand cssHook pass
for(n in e)if(r=me.camelCase(n),i=t[r],o=e[n],me.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=me.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];
// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function G(e,t,n){var r,i,o=0,a=G.prefilters.length,u=me.Deferred().always(function(){
// Don't match elem in the :animated selector
delete s.elem}),s=function(){if(i)return!1;for(var t=yt||M(),n=Math.max(0,l.startTime+l.duration-t),
// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
r=n/l.duration||0,o=1-r,a=0,s=l.tweens.length;a<s;a++)l.tweens[a].run(o);return u.notifyWith(e,[l,o,n]),o<1&&s?n:(u.resolveWith(e,[l]),!1)},l=u.promise({elem:e,props:me.extend({},t),opts:me.extend(!0,{specialEasing:{},easing:me.easing._default},n),originalProperties:t,originalOptions:n,startTime:yt||M(),duration:n.duration,tweens:[],createTween:function(t,n){var r=me.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);
// Resolve when we played the last frame; otherwise, reject
return t?(u.notifyWith(e,[l,1,0]),u.resolveWith(e,[l,t])):u.rejectWith(e,[l,t]),this}}),c=l.props;for(X(c,l.opts.specialEasing);o<a;o++)if(r=G.prefilters[o].call(l,e,c,l.opts))return me.isFunction(r.stop)&&(me._queueHooks(l.elem,l.opts.queue).stop=me.proxy(r.stop,r)),r;
// attach callbacks from options
return me.map(c,$,l),me.isFunction(l.opts.start)&&l.opts.start.call(e,l),me.fx.timer(me.extend(s,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}
// Strip and collapse whitespace according to HTML spec
// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
function Y(e){var t=e.match(De)||[];return t.join(" ")}function Q(e){return e.getAttribute&&e.getAttribute("class")||""}function Z(e,t,n,r){var i;if(me.isArray(t))
// Serialize array item.
me.each(t,function(t,i){n||Pt.test(e)?
// Treat each array item as a scalar.
r(e,i):
// Item is non-scalar (array or object), encode its numeric index.
Z(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==me.type(t))
// Serialize scalar item.
r(e,t);else
// Serialize object item.
for(i in t)Z(e+"["+i+"]",t[i],n,r)}
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function J(e){
// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(De)||[];if(me.isFunction(n))
// For each dataType in the dataTypeExpression
for(;r=o[i++];)
// Prepend if requested
"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}
// Base inspection function for prefilters and transports
function K(e,t,n,r){function i(u){var s;return o[u]=!0,me.each(e[u]||[],function(e,u){var l=u(t,n,r);return"string"!=typeof l||a||o[l]?a?!(s=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),s}var o={},a=e===Wt;return i(t.dataTypes[0])||!o["*"]&&i("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ee(e,t){var n,r,i=me.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&me.extend(!0,e,r),e}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function te(e,t,n){
// Remove auto dataType and get content-type in the process
for(var r,i,o,a,u=e.contents,s=e.dataTypes;"*"===s[0];)s.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(r)for(i in u)if(u[i]&&u[i].test(r)){s.unshift(i);break}
// Check to see if we have a response for the expected dataType
if(s[0]in n)o=s[0];else{
// Try convertible dataTypes
for(i in n){if(!s[0]||e.converters[i+" "+s[0]]){o=i;break}a||(a=i)}
// Or just use first one
o=o||a}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(o)return o!==s[0]&&s.unshift(o),n[o]}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ne(e,t,n,r){var i,o,a,u,s,l={},
// Work with a copy of dataTypes in case we need to modify it for conversion
c=e.dataTypes.slice();
// Create converters map with lowercased keys
if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];
// Convert to each sequential dataType
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),
// Apply the dataFilter if provided
!s&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),s=o,o=c.shift())
// There's only work to do if current dataType is non-auto
if("*"===o)o=s;else if("*"!==s&&s!==o){
// If none found, seek a pair
if(
// Seek a direct converter
a=l[s+" "+o]||l["* "+o],!a)for(i in l)if(
// If conv2 outputs current
u=i.split(" "),u[1]===o&&(
// If prev can be converted to accepted input
a=l[s+" "+u[0]]||l["* "+u[0]])){
// Condense equivalence converters
a===!0?a=l[i]:l[i]!==!0&&(o=u[0],c.unshift(u[1]));break}
// Apply converter (if not an equivalence)
if(a!==!0)
// Unless errors are allowed to bubble, catch and return them
if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+s+" to "+o}}}return{state:"success",data:t}}/**
 * Gets a window from an element
 */
function re(e){return me.isWindow(e)?e:9===e.nodeType&&e.defaultView}var ie=[],oe=n.document,ae=Object.getPrototypeOf,ue=ie.slice,se=ie.concat,le=ie.push,ce=ie.indexOf,fe={},pe=fe.toString,de=fe.hasOwnProperty,he=de.toString,ge=he.call(Object),ve={},ye="3.1.1",
// Define a local copy of jQuery
me=function(e,t){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new me.fn.init(e,t)},
// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
be=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
// Matches dashed string for camelizing
xe=/^-ms-/,we=/-([a-z])/g,
// Used by jQuery.camelCase as callback to replace()
_e=function(e,t){return t.toUpperCase()};me.fn=me.prototype={
// The current version of jQuery being used
jquery:ye,constructor:me,
// The default length of a jQuery object is 0
length:0,toArray:function(){return ue.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){
// Return all the elements in a clean array
// Return all the elements in a clean array
return null==e?ue.call(this):e<0?this[e+this.length]:this[e]},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){
// Build a new jQuery matched element set
var t=me.merge(this.constructor(),e);
// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return t.prevObject=this,t},
// Execute a callback for every element in the matched set.
each:function(e){return me.each(this,e)},map:function(e){return this.pushStack(me.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(ue.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:le,sort:ie.sort,splice:ie.splice},me.extend=me.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},u=1,s=arguments.length,l=!1;for(
// Handle a deep copy situation
"boolean"==typeof a&&(l=a,
// Skip the boolean and the target
a=arguments[u]||{},u++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof a||me.isFunction(a)||(a={}),
// Extend jQuery itself if only one argument is passed
u===s&&(a=this,u--);u<s;u++)
// Only deal with non-null/undefined values
if(null!=(e=arguments[u]))
// Extend the base object
for(t in e)n=a[t],r=e[t],
// Prevent never-ending loop
a!==r&&(
// Recurse if we're merging plain objects or arrays
l&&r&&(me.isPlainObject(r)||(i=me.isArray(r)))?(i?(i=!1,o=n&&me.isArray(n)?n:[]):o=n&&me.isPlainObject(n)?n:{},
// Never move original objects, clone them
a[t]=me.extend(l,o,r)):void 0!==r&&(a[t]=r));
// Return the modified object
return a},me.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+(ye+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===me.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=me.type(e);
// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},isPlainObject:function(e){var t,n;
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
// Objects with no prototype (e.g., `Object.create( null )`) are plain
// Objects with prototype are plain iff they were constructed by a global Object function
return!(!e||"[object Object]"!==pe.call(e))&&(!(t=ae(e))||(n=de.call(t,"constructor")&&t.constructor,"function"==typeof n&&he.call(n)===ge))},isEmptyObject:function(e){/* eslint-disable no-unused-vars */
// See https://github.com/eslint/eslint/issues/6125
var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?fe[pe.call(e)]||"object":typeof e},
// Evaluates a script in a global context
globalEval:function(e){a(e)},
// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 13
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(e){return e.replace(xe,"ms-").replace(we,_e)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var n,r=0;if(u(e))for(n=e.length;r<n&&t.call(e[r],r,e[r])!==!1;r++);else for(r in e)if(t.call(e[r],r,e[r])===!1)break;return e},
// Support: Android <=4.0 only
trim:function(e){return null==e?"":(e+"").replace(be,"")},
// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(u(Object(e))?me.merge(n,"string"==typeof e?[e]:e):le.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:ce.call(t,e,n)},
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){
// Go through the array, only saving the items
// that pass the validator function
for(var r,i=[],o=0,a=e.length,u=!n;o<a;o++)r=!t(e[o],o),r!==u&&i.push(e[o]);return i},
// arg is for internal usage only
map:function(e,t,n){var r,i,o=0,a=[];
// Go through the array, translating each of the items to their new values
if(u(e))for(r=e.length;o<r;o++)i=t(e[o],o,n),null!=i&&a.push(i);else for(o in e)i=t(e[o],o,n),null!=i&&a.push(i);
// Flatten any nested arrays
return se.apply([],a)},
// A global GUID counter for objects
guid:1,
// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(e,t){var n,r,i;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),me.isFunction(e))
// Simulated bind
// Set the guid of unique handler to the same of original handler, so it can be removed
return r=ue.call(arguments,2),i=function(){return e.apply(t||this,r.concat(ue.call(arguments)))},i.guid=e.guid=e.guid||me.guid++,i},now:Date.now,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:ve}),"function"==typeof Symbol&&(me.fn[Symbol.iterator]=ie[Symbol.iterator]),
// Populate the class2type map
me.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){fe["[object "+t+"]"]=t.toLowerCase()});var Te=/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
function(e){function t(e,t,n,r){var i,o,a,u,s,l,c,p=t&&t.ownerDocument,
// nodeType defaults to 9, since context defaults to document
h=t?t.nodeType:9;
// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!r&&((t?t.ownerDocument||t:z)!==L&&O(t),t=t||L,F)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==h&&(s=ye.exec(e)))
// ID selector
if(i=s[1]){
// Document context
if(9===h){if(!(a=t.getElementById(i)))return n;
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(a.id===i)return n.push(a),n}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(p&&(a=p.getElementById(i))&&H(t,a)&&a.id===i)return n.push(a),n}else{if(s[2])return J.apply(n,t.getElementsByTagName(e)),n;if((i=s[3])&&_.getElementsByClassName&&t.getElementsByClassName)return J.apply(n,t.getElementsByClassName(i)),n}
// Take advantage of querySelectorAll
if(_.qsa&&!U[e+" "]&&(!q||!q.test(e))){if(1!==h)p=t,c=e;else if("object"!==t.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(u=t.getAttribute("id"))?u=u.replace(we,_e):t.setAttribute("id",u=I),
// Prefix every selector in the list
l=C(e),o=l.length;o--;)l[o]="#"+u+" "+d(l[o]);c=l.join(","),
// Expand context for sibling selectors
p=me.test(e)&&f(t.parentNode)||t}if(c)try{return J.apply(n,p.querySelectorAll(c)),n}catch(e){}finally{u===I&&t.removeAttribute("id")}}}
// All others
return A(e.replace(ue,"$1"),t,n,r)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function n(){function e(n,r){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
// Only keep the most recent entries
return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function r(e){return e[I]=!0,e}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function i(e){var t=L.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{
// Remove from its parent by default
t.parentNode&&t.parentNode.removeChild(t),
// release memory in IE
t=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function o(e,t){for(var n=e.split("|"),r=n.length;r--;)T.attrHandle[n[r]]=t}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;
// Use IE sourceIndex if available on both nodes
if(r)return r;
// Check if b follows a
if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function u(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function s(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function l(e){
// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(t){
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
// Option elements defer to a parent optgroup if present
// Where there is no isDisabled, check manually
/* jshint -W018 */
return"form"in t?t.parentNode&&t.disabled===!1?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&Se(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function c(e){return r(function(t){return t=+t,r(function(n,r){
// Match elements found at the specified indexes
for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function f(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}
// Easy API for creating new setFilters
function p(){}function d(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function h(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,u=M++;
// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,s){var l,c,f,p=[W,u];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(s){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(f=t[I]||(t[I]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===W&&l[1]===u)
// Assign to newCache so results back-propagate to previous elements
return p[2]=l[2];
// A match means we're done; a fail means we have to keep checking
if(
// Reuse newcache so results back-propagate to previous elements
c[o]=p,p[2]=e(t,n,s))return!0}return!1}}function g(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function v(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r);return r}function y(e,t,n,r,i){for(var o,a=[],u=0,s=e.length,l=null!=t;u<s;u++)(o=e[u])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(u)));return a}function m(e,t,n,i,o,a){return i&&!i[I]&&(i=m(i)),o&&!o[I]&&(o=m(o,a)),r(function(r,a,u,s){var l,c,f,p=[],d=[],h=a.length,
// Get initial elements from seed or context
g=r||v(t||"*",u.nodeType?[u]:u,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
m=!e||!r&&t?g:y(g,p,e,u,s),b=n?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
o||(r?e:h||i)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
a:m;
// Apply postFilter
if(
// Find primary matches
n&&n(m,b,u,s),i)for(l=y(b,d),i(l,[],u,s),
// Un-match failing elements by moving them back to matcherIn
c=l.length;c--;)(f=l[c])&&(b[d[c]]=!(m[d[c]]=f));if(r){if(o||e){if(o){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
l=[],c=b.length;c--;)(f=b[c])&&
// Restore matcherIn since elem is not yet a final match
l.push(m[c]=f);o(null,b=[],l,s)}for(
// Move matched elements from seed to results to keep them synchronized
c=b.length;c--;)(f=b[c])&&(l=o?ee(r,f):p[c])>-1&&(r[l]=!(a[l]=f))}}else b=y(b===a?b.splice(h,b.length):b),o?o(null,a,b,s):J.apply(a,b)})}function b(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],a=o||T.relative[" "],u=o?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
s=h(function(e){return e===t},a,!0),l=h(function(e){return ee(t,e)>-1},a,!0),c=[function(e,n,r){var i=!o&&(r||n!==E)||((t=n).nodeType?s(e,n,r):l(e,n,r));
// Avoid hanging onto element (issue #299)
return t=null,i}];u<i;u++)if(n=T.relative[e[u].type])c=[h(g(c),n)];else{
// Return special upon seeing a positional matcher
if(n=T.filter[e[u].type].apply(null,e[u].matches),n[I]){for(
// Find the next relative operator (if any) for proper handling
r=++u;r<i&&!T.relative[e[r].type];r++);
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
return m(u>1&&g(c),u>1&&d(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(ue,"$1"),n,u<r&&b(e.slice(u,r)),r<i&&b(e=e.slice(r)),r<i&&d(e))}c.push(n)}return g(c)}function x(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,u,s,l){var c,f,p,d=0,h="0",g=r&&[],v=[],m=E,
// We must always have either seed elements or outermost context
b=r||o&&T.find.TAG("*",l),
// Use integer dirruns iff this is the outermost matcher
x=W+=null==m?1:Math.random()||.1,w=b.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(l&&(E=a===L||a||l);h!==w&&null!=(c=b[h]);h++){if(o&&c){for(f=0,a||c.ownerDocument===L||(O(c),u=!F);p=e[f++];)if(p(c,a||L,u)){s.push(c);break}l&&(W=x)}
// Track unmatched elements for set filters
i&&(
// They will have gone through all possible matchers
(c=!p&&c)&&d--,
// Lengthen the array for every element, matched or not
r&&g.push(c))}
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(
// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
d+=h,i&&h!==d){for(f=0;p=n[f++];)p(g,v,a,u);if(r){
// Reintegrate element matches to eliminate the need for sorting
if(d>0)for(;h--;)g[h]||v[h]||(v[h]=Q.call(s));
// Discard index placeholder values to get only actual matches
v=y(v)}
// Add matches to results
J.apply(s,v),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
l&&!r&&v.length>0&&d+n.length>1&&t.uniqueSort(s)}
// Override manipulation of globals by nested matchers
return l&&(W=x,E=m),g};return i?r(a):a}var w,_,T,S,k,C,j,A,E,P,N,
// Local document vars
O,L,D,F,q,R,V,H,
// Instance-specific data
I="sizzle"+1*new Date,z=e.document,W=0,M=0,B=n(),$=n(),U=n(),X=function(e,t){return e===t&&(N=!0),0},
// Instance methods
G={}.hasOwnProperty,Y=[],Q=Y.pop,Z=Y.push,J=Y.push,K=Y.slice,
// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
ee=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
ne="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
re="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
ie="\\["+ne+"*("+re+")(?:"+ne+
// Operator (capture 2)
"*([*^$|!~]?=)"+ne+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
ae=new RegExp(ne+"+","g"),ue=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),se=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ce=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(oe),pe=new RegExp("^"+re+"$"),de={ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re+"|[*])"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,ve=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
ye=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,me=/[+~]/,
// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
be=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),xe=function(e,t,n){var r="0x"+t-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},
// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
we=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,_e=function(e,t){
// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
Te=function(){O()},Se=h(function(e){return e.disabled===!0&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});
// Optimize for push.apply( _, NodeList )
try{J.apply(Y=K.call(z.childNodes),z.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
Y[z.childNodes.length].nodeType}catch(e){J={apply:Y.length?
// Leverage slice if possible
function(e,t){Z.apply(e,K.call(t))}:
// Support: IE<9
// Otherwise append directly
function(e,t){
// Can't trust NodeList.length
for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}
// Expose support vars for convenience
_=t.support={},/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
k=t.isXML=function(e){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
O=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:z;
// Return early if doc is invalid or already selected
// Return early if doc is invalid or already selected
// Update global variables
// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
// Support: IE 11, Edge
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
// Support: IE<9
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
// ID filter and find
// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
// Tag
// Class
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
// Build QSA regex
// Regex strategy adopted from Diego Perini
/* Contains
	---------------------------------------------------------------------- */
// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
return r!==L&&9===r.nodeType&&r.documentElement?(L=r,D=L.documentElement,F=!k(L),z!==L&&(n=L.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Te,!1):n.attachEvent&&n.attachEvent("onunload",Te)),_.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),_.getElementsByTagName=i(function(e){return e.appendChild(L.createComment("")),!e.getElementsByTagName("*").length}),_.getElementsByClassName=ve.test(L.getElementsByClassName),_.getById=i(function(e){return D.appendChild(e).id=I,!L.getElementsByName||!L.getElementsByName(I).length}),_.getById?(T.filter.ID=function(e){var t=e.replace(be,xe);return function(e){return e.getAttribute("id")===t}},T.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&F){var n=t.getElementById(e);return n?[n]:[]}}):(T.filter.ID=function(e){var t=e.replace(be,xe);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},T.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&F){var n,r,i,o=t.getElementById(e);if(o){if(
// Verify the id attribute
n=o.getAttributeNode("id"),n&&n.value===e)return[o];for(
// Fall back on getElementsByName
i=t.getElementsByName(e),r=0;o=i[r++];)if(n=o.getAttributeNode("id"),n&&n.value===e)return[o]}return[]}}),T.find.TAG=_.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):_.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
o=t.getElementsByTagName(e);
// Filter out possible comments
if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},T.find.CLASS=_.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&F)return t.getElementsByClassName(e)},R=[],q=[],(_.qsa=ve.test(L.querySelectorAll))&&(i(function(e){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
D.appendChild(e).innerHTML="<a id='"+I+"'></a><select id='"+I+"-\r\\' msallowcapture=''><option selected=''></option></select>",
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
e.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+ne+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
e.querySelectorAll("[selected]").length||q.push("\\["+ne+"*(?:value|"+te+")"),
// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
e.querySelectorAll("[id~="+I+"-]").length||q.push("~="),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
e.querySelectorAll(":checked").length||q.push(":checked"),
// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
e.querySelectorAll("a#"+I+"+*").length||q.push(".#.+[+~]")}),i(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var t=L.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
e.querySelectorAll("[name=d]").length&&q.push("name"+ne+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
2!==e.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),
// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
D.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
e.querySelectorAll("*,:x"),q.push(",.*:")})),(_.matchesSelector=ve.test(V=D.matches||D.webkitMatchesSelector||D.mozMatchesSelector||D.oMatchesSelector||D.msMatchesSelector))&&i(function(e){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
_.disconnectedMatch=V.call(e,"*"),
// This should fail with an exception
// Gecko does not error, returns false instead
V.call(e,"[s!='']:x"),R.push("!=",oe)}),q=q.length&&new RegExp(q.join("|")),R=R.length&&new RegExp(R.join("|")),t=ve.test(D.compareDocumentPosition),H=t||ve.test(D.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},X=t?function(e,t){
// Flag for duplicate removal
if(e===t)return N=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;
// Calculate position if both inputs belong to the same document
// Otherwise we know they are disconnected
// Disconnected nodes
// Choose the first element that is related to our preferred document
return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!_.sortDetached&&t.compareDocumentPosition(e)===n?e===L||e.ownerDocument===z&&H(z,e)?-1:t===L||t.ownerDocument===z&&H(z,t)?1:P?ee(P,e)-ee(P,t):0:4&n?-1:1)}:function(e,t){
// Exit early if the nodes are identical
if(e===t)return N=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,u=[e],s=[t];
// Parentless nodes are either documents or disconnected
if(!i||!o)return e===L?-1:t===L?1:i?-1:o?1:P?ee(P,e)-ee(P,t):0;if(i===o)return a(e,t);for(
// Otherwise we need full lists of their ancestors for comparison
n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)s.unshift(n);
// Walk down the tree looking for a discrepancy
for(;u[r]===s[r];)r++;
// Do a sibling check if the nodes have a common ancestor
// Otherwise nodes in our document sort first
return r?a(u[r],s[r]):u[r]===z?-1:s[r]===z?1:0},L):L},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if(
// Set document vars if needed
(e.ownerDocument||e)!==L&&O(e),
// Make sure that attribute selectors are quoted
n=n.replace(ce,"='$1']"),_.matchesSelector&&F&&!U[n+" "]&&(!R||!R.test(n))&&(!q||!q.test(n)))try{var r=V.call(e,n);
// IE 9's matchesSelector returns false on disconnected nodes
if(r||_.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return r}catch(e){}return t(n,L,null,[e]).length>0},t.contains=function(e,t){
// Set document vars if needed
return(e.ownerDocument||e)!==L&&O(e),H(e,t)},t.attr=function(e,t){
// Set document vars if needed
(e.ownerDocument||e)!==L&&O(e);var n=T.attrHandle[t.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
r=n&&G.call(T.attrHandle,t.toLowerCase())?n(e,t,!F):void 0;return void 0!==r?r:_.attributes||!F?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.escape=function(e){return(e+"").replace(we,_e)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(
// Unless we *know* we can detect duplicates, assume their presence
N=!_.detectDuplicates,P=!_.sortStable&&e.slice(0),e.sort(X),N){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return P=null,e},/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
S=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof e.textContent)return e.textContent;
// Traverse its children
for(e=e.firstChild;e;e=e.nextSibling)n+=S(e)}else if(3===i||4===i)return e.nodeValue}else
// If no nodeType, this is expected to be an array
for(;t=e[r++];)
// Do not traverse comment nodes
n+=S(t);
// Do not include comment or processing instruction nodes
return n},T=t.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:r,match:de,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){
// Move the given value to match[3] whether quoted or unquoted
return e[1]=e[1].replace(be,xe),e[3]=(e[3]||e[4]||e[5]||"").replace(be,xe),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
// nth-* requires argument
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];
// Accept quoted arguments as-is
// Get excess from tokenize (recursively)
// advance to the next closing parenthesis
// excess is a negative index
return de.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(t=C(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(be,xe).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=B[e+" "];return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&B(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(ae," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),u="of-type"===t;
// Shortcut for :nth-*(n)
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,s){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",v=t.parentNode,y=u&&t.nodeName.toLowerCase(),m=!s&&!u,b=!1;if(v){
// :(first|last|only)-(child|of-type)
if(o){for(;g;){for(p=t;p=p[g];)if(u?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
h=g="only"===e&&!h&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(h=[a?v.firstChild:v.lastChild],a&&m){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
p=v,f=p[I]||(p[I]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=f[p.uniqueID]||(f[p.uniqueID]={}),l=c[e]||[],d=l[0]===W&&l[1],b=d&&l[2],p=d&&v.childNodes[d];p=++d&&p&&p[g]||(
// Fallback to seeking `elem` from the start
b=d=0)||h.pop();)
// When found, cache indexes on `parent` and break
if(1===p.nodeType&&++b&&p===t){c[e]=[W,d,b];break}}else
// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
m&&(
// ...in a gzip-friendly way
p=t,f=p[I]||(p[I]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=f[p.uniqueID]||(f[p.uniqueID]={}),l=c[e]||[],d=l[0]===W&&l[1],b=d),b===!1)
// Use the same loop as above to seek `elem` from the start
for(;(p=++d&&p&&p[g]||(b=d=0)||h.pop())&&((u?p.nodeName.toLowerCase()!==y:1!==p.nodeType)||!++b||(
// Cache the index of each encountered element
m&&(f=p[I]||(p[I]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=f[p.uniqueID]||(f[p.uniqueID]={}),c[e]=[W,b]),p!==t)););
// Incorporate the offset, then check against cycle size
return b-=i,b===r||b%r===0&&b/r>=0}}},PSEUDO:function(e,n){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var i,o=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// But maintain support for old signatures
return o[I]?o(n):o.length>1?(i=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=ee(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{
// Potentially complex pseudos
not:r(function(e){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],i=j(e.replace(ue,"$1"));return i[I]?r(function(e,t,n,r){
// Match elements unmatched by `matcher`
for(var o,a=i(e,null,r,[]),u=e.length;u--;)(o=a[u])&&(e[u]=!(t[u]=o))}):function(e,r,o){
// Don't keep the element (issue #299)
return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(be,xe),function(t){return(t.textContent||t.innerText||S(t)).indexOf(e)>-1}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:r(function(e){
// lang value must be a valid identifier
return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(be,xe).toLowerCase(),function(t){var n;do if(n=F?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),
// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===D},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},
// Boolean properties
enabled:l(!1),disabled:l(!0),checked:function(e){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){
// Accessing this property makes selected-by-default
// options in Safari work properly
return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},
// Contents
empty:function(e){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},
// Element/input types
header:function(e){return ge.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},
// Position-in-collection
first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[n<0?n+t:n]}),even:c(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},T.pseudos.nth=T.pseudos.eq;
// Add button/input type pseudos
for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[w]=u(w);for(w in{submit:!0,reset:!0})T.pseudos[w]=s(w);/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
// One-time assignments
// Sort stability
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
// Initialize against the default document
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
return p.prototype=T.filters=T.pseudos,T.setFilters=new p,C=t.tokenize=function(e,n){var r,i,o,a,u,s,l,c=$[e+" "];if(c)return n?0:c.slice(0);for(u=e,s=[],l=T.preFilter;u;){
// Comma and first run
r&&!(i=se.exec(u))||(i&&(
// Don't consume trailing commas as valid
u=u.slice(i[0].length)||u),s.push(o=[])),r=!1,
// Combinators
(i=le.exec(u))&&(r=i.shift(),o.push({value:r,
// Cast descendant combinators to space
type:i[0].replace(ue," ")}),u=u.slice(r.length));
// Filters
for(a in T.filter)!(i=de[a].exec(u))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),u=u.slice(r.length));if(!r)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return n?u.length:u?t.error(e):$(e,s).slice(0)},j=t.compile=function(e,t){var n,r=[],i=[],o=U[e+" "];if(!o){for(
// Generate a function of recursive functions that can be used to check each element
t||(t=C(e)),n=t.length;n--;)o=b(t[n]),o[I]?r.push(o):i.push(o);
// Cache the compiled function
o=U(e,x(i,r)),
// Save selector and tokenization
o.selector=e}return o},A=t.select=function(e,t,n,r){var i,o,a,u,s,l="function"==typeof e&&e,c=!r&&C(e=l.selector||e);
// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===c.length){if(
// Reduce context if the leading compound selector is an ID
o=c[0]=c[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&F&&T.relative[o[1].type]){if(t=(T.find.ID(a.matches[0].replace(be,xe),t)||[])[0],!t)return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(
// Fetch a seed set for right-to-left matching
i=de.needsContext.test(e)?0:o.length;i--&&(a=o[i],!T.relative[u=a.type]);)if((s=T.find[u])&&(r=s(a.matches[0].replace(be,xe),me.test(o[0].type)&&f(t.parentNode)||t))){if(
// If seed is empty or no tokens remain, we can return early
o.splice(i,1),e=r.length&&d(o),!e)return J.apply(n,r),n;break}}
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(l||j(e,c))(r,t,!F,n,!t||me.test(e)&&f(t.parentNode)||t),n},_.sortStable=I.split("").sort(X).join("")===I,_.detectDuplicates=!!N,O(),_.sortDetached=i(function(e){
// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(L.createElement("fieldset"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),_.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r;if(!n)return e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(n);me.find=Te,me.expr=Te.selectors,
// Deprecated
me.expr[":"]=me.expr.pseudos,me.uniqueSort=me.unique=Te.uniqueSort,me.text=Te.getText,me.isXMLDoc=Te.isXML,me.contains=Te.contains,me.escapeSelector=Te.escape;var Se=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&me(e).is(n))break;r.push(e)}return r},ke=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},Ce=me.expr.match.needsContext,je=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,Ae=/^.[^:#\[\.,]*$/;me.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?me.find.matchesSelector(r,e)?[r]:[]:me.find.matches(e,me.grep(t,function(e){return 1===e.nodeType}))},me.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(me(e).filter(function(){for(t=0;t<r;t++)if(me.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)me.find(e,i[t],n);return r>1?me.uniqueSort(n):n},filter:function(e){return this.pushStack(s(this,e||[],!1))},not:function(e){return this.pushStack(s(this,e||[],!0))},is:function(e){
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!s(this,"string"==typeof e&&Ce.test(e)?me(e):e||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var Ee,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
Pe=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ne=me.fn.init=function(e,t,n){var r,i;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;
// Handle HTML strings
if(
// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
n=n||Ee,"string"==typeof e){
// Match html or make sure no context is specified for #id
if(
// Assume that strings that start and end with <> are HTML and skip the regex check
r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:Pe.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);
// HANDLE: $(html) -> $(array)
if(r[1]){
// HANDLE: $(html, props)
if(t=t instanceof me?t[0]:t,
// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
me.merge(this,me.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:oe,!0)),je.test(r[1])&&me.isPlainObject(t))for(r in t)
// Properties of context are called as methods if possible
me.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}
// Inject the element directly into the jQuery object
return i=oe.getElementById(r[2]),i&&(this[0]=i,this.length=1),this}
// Execute immediately if ready is not present
return e.nodeType?(this[0]=e,this.length=1,this):me.isFunction(e)?void 0!==n.ready?n.ready(e):e(me):me.makeArray(e,this)};
// Give the init function the jQuery prototype for later instantiation
Ne.prototype=me.fn,
// Initialize central reference
Ee=me(oe);var Oe=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
Le={children:!0,contents:!0,next:!0,prev:!0};me.fn.extend({has:function(e){var t=me(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(me.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&me(e);
// Positional selectors never match, since there's no _selection_ context
if(!Ce.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)
// Always skip document fragments
if(n.nodeType<11&&(a?a.index(n)>-1:
// Don't pass non-elements to Sizzle
1===n.nodeType&&me.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?me.uniqueSort(o):o)},
// Determine the position of an element within the set
index:function(e){
// No argument, return index in parent
// No argument, return index in parent
// Index in selector
// If it receives a jQuery object, the first element is used
return e?"string"==typeof e?ce.call(me(e),this[0]):ce.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(me.uniqueSort(me.merge(this.get(),me(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),me.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Se(e,"parentNode")},parentsUntil:function(e,t,n){return Se(e,"parentNode",n)},next:function(e){return l(e,"nextSibling")},prev:function(e){return l(e,"previousSibling")},nextAll:function(e){return Se(e,"nextSibling")},prevAll:function(e){return Se(e,"previousSibling")},nextUntil:function(e,t,n){return Se(e,"nextSibling",n)},prevUntil:function(e,t,n){return Se(e,"previousSibling",n)},siblings:function(e){return ke((e.parentNode||{}).firstChild,e)},children:function(e){return ke(e.firstChild)},contents:function(e){return e.contentDocument||me.merge([],e.childNodes)}},function(e,t){me.fn[e]=function(n,r){var i=me.map(this,t,n);
// Remove duplicates
// Reverse order for parents* and prev-derivatives
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=me.filter(r,i)),this.length>1&&(Le[e]||me.uniqueSort(i),Oe.test(e)&&i.reverse()),this.pushStack(i)}});var De=/[^\x20\t\r\n\f]+/g;/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
me.Callbacks=function(e){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?c(e):me.extend({},e);var// Flag to know if list is currently firing
t,
// Last fire value for non-forgettable lists
n,
// Flag to know if list was already fired
r,
// Flag to prevent firing
i,
// Actual callback list
o=[],
// Queue of execution data for repeatable lists
a=[],
// Index of currently firing callback (modified by add/remove as needed)
u=-1,
// Fire callbacks
s=function(){for(
// Enforce single-firing
i=e.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
r=t=!0;a.length;u=-1)for(n=a.shift();++u<o.length;)
// Run callback and check for early termination
o[u].apply(n[0],n[1])===!1&&e.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
u=o.length,n=!1);
// Forget the data if we're done with it
e.memory||(n=!1),t=!1,
// Clean up if we're done firing for good
i&&(
// Keep an empty list if we have data for future add calls
o=n?[]:"")},
// Actual Callbacks object
l={
// Add a callback or a collection of callbacks to the list
add:function(){
// If we have memory from a past run, we should fire after adding
return o&&(n&&!t&&(u=o.length-1,a.push(n)),function t(n){me.each(n,function(n,r){me.isFunction(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==me.type(r)&&
// Inspect recursively
t(r)})}(arguments),n&&!t&&s()),this},
// Remove a callback from the list
remove:function(){return me.each(arguments,function(e,t){for(var n;(n=me.inArray(t,o,n))>-1;)o.splice(n,1),
// Handle firing indexes
n<=u&&u--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?me.inArray(e,o)>-1:o.length>0},
// Remove all callbacks from the list
empty:function(){return o&&(o=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},
// Call all callbacks with the given context and arguments
fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],a.push(n),t||s()),this},
// Call all the callbacks with the given arguments
fire:function(){return l.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!r}};return l},me.extend({Deferred:function(e){var t=[
// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",me.Callbacks("memory"),me.Callbacks("memory"),2],["resolve","done",me.Callbacks("once memory"),me.Callbacks("once memory"),0,"resolved"],["reject","fail",me.Callbacks("once memory"),me.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},
// Keep pipe for back-compat
pipe:function(){var e=arguments;return me.Deferred(function(n){me.each(t,function(t,r){
// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var i=me.isFunction(e[r[4]])&&e[r[4]];
// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&me.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(e,r,i){function o(e,t,r,i){return function(){var u=this,s=arguments,l=function(){var n,l;
// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(e<a)){
// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if(n=r.apply(u,s),n===t.promise())throw new TypeError("Thenable self-resolution");
// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
l=n&&(
// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"==typeof n||"function"==typeof n)&&n.then,
// Handle a returned thenable
me.isFunction(l)?
// Special processors (notify) just wait for resolution
i?l.call(n,o(a,t,f,i),o(a,t,p,i)):(
// ...and disregard older resolution values
a++,l.call(n,o(a,t,f,i),o(a,t,p,i),o(a,t,f,t.notifyWith))):(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
r!==f&&(u=void 0,s=[n]),
// Process the value(s)
// Default process is resolve
(i||t.resolveWith)(u,s))}},
// Only normal processors (resolve) catch and reject exceptions
c=i?l:function(){try{l()}catch(n){me.Deferred.exceptionHook&&me.Deferred.exceptionHook(n,c.stackTrace),
// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
e+1>=a&&(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
r!==p&&(u=void 0,s=[n]),t.rejectWith(u,s))}};
// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
e?c():(
// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
me.Deferred.getStackHook&&(c.stackTrace=me.Deferred.getStackHook()),n.setTimeout(c))}}var a=0;return me.Deferred(function(n){
// progress_handlers.add( ... )
t[0][3].add(o(0,n,me.isFunction(i)?i:f,n.notifyWith)),
// fulfilled_handlers.add( ... )
t[1][3].add(o(0,n,me.isFunction(e)?e:f)),
// rejected_handlers.add( ... )
t[2][3].add(o(0,n,me.isFunction(r)?r:p))}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?me.extend(e,i):i}},o={};
// All done!
// Add list-specific methods
// Make the deferred a promise
// Call given func if any
return me.each(t,function(e,n){var a=n[2],u=n[5];
// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
i[n[1]]=a.add,
// Handle state
u&&a.add(function(){
// state = "resolved" (i.e., fulfilled)
// state = "rejected"
r=u},
// rejected_callbacks.disable
// fulfilled_callbacks.disable
t[3-e][2].disable,
// progress_callbacks.lock
t[0][2].lock),
// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
a.add(n[3].fire),
// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
o[n[0]]=function(){return o[n[0]+"With"](this===o?void 0:this,arguments),this},
// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
o[n[0]+"With"]=a.fireWith}),i.promise(o),e&&e.call(o,o),o},
// Deferred helper
when:function(e){var
// count of uncompleted subordinates
t=arguments.length,
// count of unprocessed arguments
n=t,
// subordinate fulfillment data
r=Array(n),i=ue.call(arguments),
// the master Deferred
o=me.Deferred(),
// subordinate callback factory
a=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?ue.call(arguments):n,--t||o.resolveWith(r,i)}};
// Single- and empty arguments are adopted like Promise.resolve
if(t<=1&&(d(e,o.done(a(n)).resolve,o.reject),"pending"===o.state()||me.isFunction(i[n]&&i[n].then)))return o.then();
// Multiple arguments are aggregated like Promise.all array elements
for(;n--;)d(i[n],a(n),o.reject);return o.promise()}});
// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var Fe=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;me.Deferred.exceptionHook=function(e,t){
// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
n.console&&n.console.warn&&e&&Fe.test(e.name)&&n.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},me.readyException=function(e){n.setTimeout(function(){throw e})};
// The deferred used on DOM ready
var qe=me.Deferred();me.fn.ready=function(e){return qe.then(e).catch(function(e){me.readyException(e)}),this},me.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Hold (or release) the ready event
holdReady:function(e){e?me.readyWait++:me.ready(!0)},
// Handle when the DOM is ready
ready:function(e){
// Abort if there are pending holds or we're already ready
(e===!0?--me.readyWait:me.isReady)||(
// Remember that the DOM is ready
me.isReady=!0,
// If a normal DOM Ready event fired, decrement, and wait if need be
e!==!0&&--me.readyWait>0||
// If there are functions bound, to execute
qe.resolveWith(oe,[me]))}}),me.ready.then=qe.then,
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
"complete"===oe.readyState||"loading"!==oe.readyState&&!oe.documentElement.doScroll?
// Handle it asynchronously to allow scripts the opportunity to delay ready
n.setTimeout(me.ready):(
// Use the handy event callback
oe.addEventListener("DOMContentLoaded",h),
// A fallback to window.onload, that will always work
n.addEventListener("load",h));
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var Re=function(e,t,n,r,i,o,a){var u=0,s=e.length,l=null==n;
// Sets many values
if("object"===me.type(n)){i=!0;for(u in n)Re(e,t,u,n[u],!0,o,a)}else if(void 0!==r&&(i=!0,me.isFunction(r)||(a=!0),l&&(
// Bulk operations run against the entire set
a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(me(e),n)})),t))for(;u<s;u++)t(e[u],n,a?r:r.call(e[u],u,t(e[u],n)));
// Gets
return i?e:l?t.call(e):s?t(e[0],n):o},Ve=function(e){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};g.uid=1,g.prototype={cache:function(e){
// Check if the owner object already has a cache
var t=e[this.expando];
// If not, create one
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
return t||(t={},Ve(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);
// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)i[me.camelCase(t)]=n;else
// Copy the properties one-by-one to the cache object
for(r in t)i[me.camelCase(r)]=t[r];return i},get:function(e,t){
// Always use camelCase key (gh-2257)
return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][me.camelCase(t)]},access:function(e,t,n){
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){
// Support array or space separated string of keys
me.isArray(t)?
// If key is an array of keys...
// We always set camelCase keys, so remove that.
t=t.map(me.camelCase):(t=me.camelCase(t),
// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
t=t in r?[t]:t.match(De)||[]),n=t.length;for(;n--;)delete r[t[n]]}
// Remove the expando if there's no more data
(void 0===t||me.isEmptyObject(r))&&(
// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!me.isEmptyObject(t)}};var He=new g,Ie=new g,ze=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,We=/[A-Z]/g;me.extend({hasData:function(e){return Ie.hasData(e)||He.hasData(e)},data:function(e,t,n){return Ie.access(e,t,n)},removeData:function(e,t){Ie.remove(e,t)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return He.access(e,t,n)},_removeData:function(e,t){He.remove(e,t)}}),me.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;
// Gets all values
if(void 0===e){if(this.length&&(i=Ie.get(o),1===o.nodeType&&!He.get(o,"hasDataAttrs"))){for(n=a.length;n--;)
// Support: IE 11 only
// The attrs elements can be null (#14894)
a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=me.camelCase(r.slice(5)),y(o,r,i[r])));He.set(o,"hasDataAttrs",!0)}return i}
// Sets multiple values
// Sets multiple values
return"object"==typeof e?this.each(function(){Ie.set(this,e)}):Re(this,function(t){var n;
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(o&&void 0===t){if(
// Attempt to get data from the cache
// The key will always be camelCased in Data
n=Ie.get(o,e),void 0!==n)return n;if(
// Attempt to "discover" the data in
// HTML5 custom data-* attrs
n=y(o,e),void 0!==n)return n}else
// Set the data...
this.each(function(){
// We always store the camelCased key
Ie.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Ie.remove(this,e)})}}),me.extend({queue:function(e,t,n){var r;if(e)
// Speed up dequeue by getting out quickly if this is just a lookup
return t=(t||"fx")+"queue",r=He.get(e,t),n&&(!r||me.isArray(n)?r=He.access(e,t,me.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=me.queue(e,t),r=n.length,i=n.shift(),o=me._queueHooks(e,t),a=function(){me.dequeue(e,t)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===i&&(i=n.shift(),r--),i&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===t&&n.unshift("inprogress"),
// Clear up the last queue stop function
delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return He.get(e,n)||He.access(e,n,{empty:me.Callbacks("once memory").add(function(){He.remove(e,[t+"queue",n])})})}}),me.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?me.queue(this[0],e):void 0===t?this:this.each(function(){var n=me.queue(this,e,t);
// Ensure a hooks for this queue
me._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&me.dequeue(this,e)})},dequeue:function(e){return this.each(function(){me.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,r=1,i=me.Deferred(),o=this,a=this.length,u=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=He.get(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(u));return u(),i.promise(t)}});var Me=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Be=new RegExp("^(?:([+-])=|)("+Me+")([a-z%]*)$","i"),$e=["Top","Right","Bottom","Left"],Ue=function(e,t){
// Inline style trumps all
// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
return e=t||e,"none"===e.style.display||""===e.style.display&&me.contains(e.ownerDocument,e)&&"none"===me.css(e,"display")},Xe=function(e,t,n,r){var i,o,a={};
// Remember the old values, and insert the new ones
for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);
// Revert the old values
for(o in t)e.style[o]=a[o];return i},Ge={};me.fn.extend({show:function(){return x(this,!0)},hide:function(){return x(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Ue(this)?me(this).show():me(this).hide()})}});var Ye=/^(?:checkbox|radio)$/i,Qe=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Ze=/^$|\/(?:java|ecma)script/i,Je={
// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
// Support: IE <=9 only
Je.optgroup=Je.option,Je.tbody=Je.tfoot=Je.colgroup=Je.caption=Je.thead,Je.th=Je.td;var Ke=/<|&#?\w+;/;!function(){var e=oe.createDocumentFragment(),t=e.appendChild(oe.createElement("div")),n=oe.createElement("input");
// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),
// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
ve.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
t.innerHTML="<textarea>x</textarea>",ve.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var et=oe.documentElement,tt=/^key/,nt=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,rt=/^([^.]*)(?:\.(.+)|)/;/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
me.event={global:{},add:function(e,t,n,r,i){var o,a,u,s,l,c,f,p,d,h,g,v=He.get(e);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(v)for(
// Caller can pass in an object of custom data in lieu of the handler
n.handler&&(o=n,n=o.handler,i=o.selector),
// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
i&&me.find.matchesSelector(et,i),
// Make sure that the handler has a unique ID, used to find/remove it later
n.guid||(n.guid=me.guid++),
// Init the element's event structure and main handler, if this is the first
(s=v.events)||(s=v.events={}),(a=v.handle)||(a=v.handle=function(t){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return"undefined"!=typeof me&&me.event.triggered!==t.type?me.event.dispatch.apply(e,arguments):void 0}),
// Handle multiple events separated by a space
t=(t||"").match(De)||[""],l=t.length;l--;)u=rt.exec(t[l])||[],d=g=u[1],h=(u[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
d&&(
// If event changes its type, use the special event handlers for the changed type
f=me.event.special[d]||{},
// If selector defined, determine special event api type, otherwise given type
d=(i?f.delegateType:f.bindType)||d,
// Update special based on newly reset type
f=me.event.special[d]||{},
// handleObj is passed to all event handlers
c=me.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&me.expr.match.needsContext.test(i),namespace:h.join(".")},o),
// Init the event handler queue if we're the first
(p=s[d])||(p=s[d]=[],p.delegateCount=0,
// Only use addEventListener if the special events handler returns false
f.setup&&f.setup.call(e,r,h,a)!==!1||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),
// Add to the element's handler list, delegates in front
i?p.splice(p.delegateCount++,0,c):p.push(c),
// Keep track of which events have ever been used, for event optimization
me.event.global[d]=!0)},
// Detach an event or set of events from an element
remove:function(e,t,n,r,i){var o,a,u,s,l,c,f,p,d,h,g,v=He.hasData(e)&&He.get(e);if(v&&(s=v.events)){for(
// Once for each type.namespace in types; type may be omitted
t=(t||"").match(De)||[""],l=t.length;l--;)
// Unbind all events (on this namespace, if provided) for the element
if(u=rt.exec(t[l])||[],d=g=u[1],h=(u[2]||"").split(".").sort(),d){for(f=me.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=s[d]||[],u=u[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||u&&!u.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
a&&!p.length&&(f.teardown&&f.teardown.call(e,h,v.handle)!==!1||me.removeEvent(e,d,v.handle),delete s[d])}else for(d in s)me.event.remove(e,d+t[l],n,r,!0);
// Remove data and the expando if it's no longer used
me.isEmptyObject(s)&&He.remove(e,"handle events")}},dispatch:function(e){
// Make a writable jQuery.Event from the native event object
var t,n,r,i,o,a,u=me.event.fix(e),s=new Array(arguments.length),l=(He.get(this,"events")||{})[u.type]||[],c=me.event.special[u.type]||{};for(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(u.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,u)!==!1){for(
// Determine handlers
a=me.event.handlers.call(this,u,l),
// Run delegates first; they may want to stop propagation beneath us
t=0;(i=a[t++])&&!u.isPropagationStopped();)for(u.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!u.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
u.rnamespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,r=((me.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s),void 0!==r&&(u.result=r)===!1&&(u.preventDefault(),u.stopPropagation()));
// Call the postDispatch hook for the mapped type
return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,u=[],s=t.delegateCount,l=e.target;
// Find delegate handlers
if(s&&
// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
l.nodeType&&
// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===l.nodeType&&("click"!==e.type||l.disabled!==!0)){for(o=[],a={},n=0;n<s;n++)r=t[n],
// Don't conflict with Object.prototype properties (#13203)
i=r.selector+" ",void 0===a[i]&&(a[i]=r.needsContext?me(i,this).index(l)>-1:me.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&u.push({elem:l,handlers:o})}
// Add the remaining (directly-bound) handlers
return l=this,s<t.length&&u.push({elem:l,handlers:t.slice(s)}),u},addProp:function(e,t){Object.defineProperty(me.Event.prototype,e,{enumerable:!0,configurable:!0,get:me.isFunction(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[me.expando]?e:new me.Event(e)},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==C()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===C()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if("checkbox"===this.type&&this.click&&me.nodeName(this,"input"))return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(e){return me.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},me.removeEvent=function(e,t,n){
// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},me.Event=function(e,t){
// Allow instantiation without the 'new' keyword
// Allow instantiation without the 'new' keyword
// Event object
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
// Support: Android <=2.3 only
// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
// Put explicitly provided properties onto the event object
// Create a timestamp if incoming event doesn't have one
// Mark it as fixed
return this instanceof me.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?S:k,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&me.extend(this,t),this.timeStamp=e&&e.timeStamp||me.now(),void(this[me.expando]=!0)):new me.Event(e,t)},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
me.Event.prototype={constructor:me.Event,isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=S,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=S,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=S,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},
// Includes all common event props including KeyEvent and MouseEvent specific props
me.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;
// Add which for key events
// Add which for key events
// Add which for click: 1 === left; 2 === middle; 3 === right
return null==e.which&&tt.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&nt.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},me.event.addProp),
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
me.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){me.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return i&&(i===r||me.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),me.fn.extend({on:function(e,t,n,r){return j(this,e,t,n,r)},one:function(e,t,n,r){return j(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)
// ( event )  dispatched jQuery.Event
return r=e.handleObj,me(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){
// ( types-object [, selector] )
for(i in e)this.off(i,t,e[i]);return this}
// ( types [, fn] )
return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=k),this.each(function(){me.event.remove(this,e,n,t)})}});var/* eslint-disable max-len */
// See https://github.com/eslint/eslint/issues/3229
it=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */
// Support: IE <=10 - 11, Edge 12 - 13
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
ot=/<script|<style|<link/i,
// checked="checked" or checked
at=/checked\s*(?:[^=]|=\s*.checked.)/i,ut=/^true\/(.*)/,st=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;me.extend({htmlPrefilter:function(e){return e.replace(it,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,u=e.cloneNode(!0),s=me.contains(e.ownerDocument,e);
// Fix IE cloning issues
if(!(ve.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||me.isXMLDoc(e)))for(
// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
a=w(u),o=w(e),r=0,i=o.length;r<i;r++)O(o[r],a[r]);
// Copy the events from the original to the clone
if(t)if(n)for(o=o||w(e),a=a||w(u),r=0,i=o.length;r<i;r++)N(o[r],a[r]);else N(e,u);
// Return the cloned set
// Preserve script evaluation history
return a=w(u,"script"),a.length>0&&_(a,!s&&w(e,"script")),u},cleanData:function(e){for(var t,n,r,i=me.event.special,o=0;void 0!==(n=e[o]);o++)if(Ve(n)){if(t=n[He.expando]){if(t.events)for(r in t.events)i[r]?me.event.remove(n,r):me.removeEvent(n,r,t.handle);
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[He.expando]=void 0}n[Ie.expando]&&(
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Ie.expando]=void 0)}}}),me.fn.extend({detach:function(e){return D(this,e,!0)},remove:function(e){return D(this,e)},text:function(e){return Re(this,function(e){return void 0===e?me.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return L(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=A(this,e);t.appendChild(e)}})},prepend:function(){return L(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=A(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return L(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return L(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(
// Prevent memory leaks
me.cleanData(w(e,!1)),
// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return me.clone(this,e,t)})},html:function(e){return Re(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!ot.test(e)&&!Je[(Qe.exec(e)||["",""])[1].toLowerCase()]){e=me.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},
// Remove element nodes and prevent memory leaks
1===t.nodeType&&(me.cleanData(w(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];
// Make the changes, replacing each non-ignored context element with the new content
return L(this,arguments,function(t){var n=this.parentNode;me.inArray(this,e)<0&&(me.cleanData(w(this)),n&&n.replaceChild(t,this))},e)}}),me.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){me.fn[e]=function(e){for(var n,r=[],i=me(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),me(i[a])[t](n),
// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
le.apply(r,n.get());return this.pushStack(r)}});var lt=/^margin/,ct=new RegExp("^("+Me+")(?!px)[a-z%]+$","i"),ft=function(e){
// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e)};!function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function e(){
// This is a singleton, we need to execute it only once
if(u){u.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",u.innerHTML="",et.appendChild(a);var e=n.getComputedStyle(u);t="1%"!==e.top,
// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
o="2px"===e.marginLeft,r="4px"===e.width,
// Support: Android 4.0 - 4.3 only
// Some styles come back with percentage values, even though they shouldn't
u.style.marginRight="50%",i="4px"===e.marginRight,et.removeChild(a),
// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
u=null}}var t,r,i,o,a=oe.createElement("div"),u=oe.createElement("div");
// Finish early in limited (non-browser) environments
u.style&&(
// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",ve.clearCloneStyle="content-box"===u.style.backgroundClip,a.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",a.appendChild(u),me.extend(ve,{pixelPosition:function(){return e(),t},boxSizingReliable:function(){return e(),r},pixelMarginRight:function(){return e(),i},reliableMarginLeft:function(){return e(),o}}))}();var
// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
pt=/^(none|table(?!-c[ea]).+)/,dt={position:"absolute",visibility:"hidden",display:"block"},ht={letterSpacing:"0",fontWeight:"400"},gt=["Webkit","Moz","ms"],vt=oe.createElement("div").style;me.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){
// We should always get a number back from opacity
var n=F(e,"opacity");return""===n?"1":n}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{float:"cssFloat"},
// Get and set the style property on a DOM Node
style:function(e,t,n,r){
// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){
// Make sure that we're working with the right name
var i,o,a,u=me.camelCase(t),s=e.style;
// Check if we're setting a value
// Gets hook for the prefixed version, then unprefixed version
// Check if we're setting a value
// If a hook was provided get the non-computed value from there
// Convert "+=" or "-=" to relative numbers (#7345)
// Fixes bug #9237
// Make sure that null and NaN values aren't set (#7116)
// If a number was passed in, add the unit (except for certain CSS properties)
// background-* props affect original clone's values
// If a hook was provided, use that value, otherwise just set the specified value
return t=me.cssProps[u]||(me.cssProps[u]=R(u)||u),a=me.cssHooks[t]||me.cssHooks[u],void 0===n?a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:s[t]:(o=typeof n,"string"===o&&(i=Be.exec(n))&&i[1]&&(n=m(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(me.cssNumber[u]?"":"px")),ve.clearCloneStyle||""!==n||0!==t.indexOf("background")||(s[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(s[t]=n)),void 0)}},css:function(e,t,n,r){var i,o,a,u=me.camelCase(t);
// Make numeric if forced or a qualifier was provided and val looks numeric
// Make sure that we're working with the right name
// Try prefixed name followed by the unprefixed name
// If a hook was provided get the computed value from there
// Otherwise, if a way to get the computed value exists, use that
// Convert "normal" to computed value
// Make numeric if forced or a qualifier was provided and val looks numeric
return t=me.cssProps[u]||(me.cssProps[u]=R(u)||u),a=me.cssHooks[t]||me.cssHooks[u],a&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=F(e,t,r)),"normal"===i&&t in ht&&(i=ht[t]),""===n||n?(o=parseFloat(i),n===!0||isFinite(o)?o||0:i):i}}),me.each(["height","width"],function(e,t){me.cssHooks[t]={get:function(e,n,r){if(n)
// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
return!pt.test(me.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?I(e,t,r):Xe(e,dt,function(){return I(e,t,r)})},set:function(e,n,r){var i,o=r&&ft(e),a=r&&H(e,t,r,"border-box"===me.css(e,"boxSizing",!1,o),o);
// Convert to pixels if value adjustment is needed
return a&&(i=Be.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=me.css(e,t)),V(e,n,a)}}}),me.cssHooks.marginLeft=q(ve.reliableMarginLeft,function(e,t){if(t)return(parseFloat(F(e,"marginLeft"))||e.getBoundingClientRect().left-Xe(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),
// These hooks are used by animate to expand properties
me.each({margin:"",padding:"",border:"Width"},function(e,t){me.cssHooks[e+t]={expand:function(n){for(var r=0,i={},
// Assumes a single number if not a string
o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+$e[r]+t]=o[r]||o[r-2]||o[0];return i}},lt.test(e)||(me.cssHooks[e+t].set=V)}),me.fn.extend({css:function(e,t){return Re(this,function(e,t,n){var r,i,o={},a=0;if(me.isArray(t)){for(r=ft(e),i=t.length;a<i;a++)o[t[a]]=me.css(e,t[a],!1,r);return o}return void 0!==n?me.style(e,t,n):me.css(e,t)},e,t,arguments.length>1)}}),me.Tween=z,z.prototype={constructor:z,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||me.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(me.cssNumber[n]?"":"px")},cur:function(){var e=z.propHooks[this.prop];return e&&e.get?e.get(this):z.propHooks._default.get(this)},run:function(e){var t,n=z.propHooks[this.prop];return this.options.duration?this.pos=t=me.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):z.propHooks._default.set(this),this}},z.prototype.init.prototype=z.prototype,z.propHooks={_default:{get:function(e){var t;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=me.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
me.fx.step[e.prop]?me.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[me.cssProps[e.prop]]&&!me.cssHooks[e.prop]?e.elem[e.prop]=e.now:me.style(e.elem,e.prop,e.now+e.unit)}}},
// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
z.propHooks.scrollTop=z.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},me.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},me.fx=z.prototype.init,
// Back compat <1.8 extension point
me.fx.step={};var yt,mt,bt=/^(?:toggle|show|hide)$/,xt=/queueHooks$/;me.Animation=me.extend(G,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return m(n.elem,e,Be.exec(t),n),n}]},tweener:function(e,t){me.isFunction(e)?(t=e,e=["*"]):e=e.match(De);for(var n,r=0,i=e.length;r<i;r++)n=e[r],G.tweeners[n]=G.tweeners[n]||[],G.tweeners[n].unshift(t)},prefilters:[U],prefilter:function(e,t){t?G.prefilters.unshift(e):G.prefilters.push(e)}}),me.speed=function(e,t,n){var r=e&&"object"==typeof e?me.extend({},e):{complete:n||!n&&t||me.isFunction(e)&&e,duration:e,easing:n&&t||t&&!me.isFunction(t)&&t};
// Go to the end state if fx are off or if document is hidden
// Normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return me.fx.off||oe.hidden?r.duration=0:"number"!=typeof r.duration&&(r.duration in me.fx.speeds?r.duration=me.fx.speeds[r.duration]:r.duration=me.fx.speeds._default),null!=r.queue&&r.queue!==!0||(r.queue="fx"),r.old=r.complete,r.complete=function(){me.isFunction(r.old)&&r.old.call(this),r.queue&&me.dequeue(this,r.queue)},r},me.fn.extend({fadeTo:function(e,t,n,r){
// Show any hidden elements after setting opacity to 0
return this.filter(Ue).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=me.isEmptyObject(e),o=me.speed(t,n,r),a=function(){
// Operate on a copy of prop so per-property easing won't be lost
var t=G(this,me.extend({},e),o);
// Empty animations, or finishing resolves immediately
(i||He.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=me.timers,a=He.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&xt.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));
// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!t&&n||me.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=He.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=me.timers,a=r?r.length:0;
// Look for any active animations, and finish them
for(
// Enable finishing flag on private data
n.finish=!0,
// Empty the queue first
me.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));
// Look for any animations in the old queue and finish them
for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);
// Turn off finishing flag
delete n.finish})}}),me.each(["toggle","show","hide"],function(e,t){var n=me.fn[t];me.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(B(t,!0),e,r,i)}}),
// Generate shortcuts for custom animations
me.each({slideDown:B("show"),slideUp:B("hide"),slideToggle:B("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){me.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),me.timers=[],me.fx.tick=function(){var e,t=0,n=me.timers;for(yt=me.now();t<n.length;t++)e=n[t],
// Checks the timer has not already been removed
e()||n[t]!==e||n.splice(t--,1);n.length||me.fx.stop(),yt=void 0},me.fx.timer=function(e){me.timers.push(e),e()?me.fx.start():me.timers.pop()},me.fx.interval=13,me.fx.start=function(){mt||(mt=n.requestAnimationFrame?n.requestAnimationFrame(W):n.setInterval(me.fx.tick,me.fx.interval))},me.fx.stop=function(){n.cancelAnimationFrame?n.cancelAnimationFrame(mt):n.clearInterval(mt),mt=null},me.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
me.fn.delay=function(e,t){return e=me.fx?me.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,r){var i=n.setTimeout(t,e);r.stop=function(){n.clearTimeout(i)}})},function(){var e=oe.createElement("input"),t=oe.createElement("select"),n=t.appendChild(oe.createElement("option"));e.type="checkbox",
// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
ve.checkOn=""!==e.value,
// Support: IE <=11 only
// Must access selectedIndex to make default options select
ve.optSelected=n.selected,
// Support: IE <=11 only
// An input loses its value after becoming a radio
e=oe.createElement("input"),e.value="t",e.type="radio",ve.radioValue="t"===e.value}();var wt,_t=me.expr.attrHandle;me.fn.extend({attr:function(e,t){return Re(this,me.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){me.removeAttr(this,e)})}}),me.extend({attr:function(e,t,n){var r,i,o=e.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)
// Fallback to prop when attributes are not supported
// Fallback to prop when attributes are not supported
// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
return"undefined"==typeof e.getAttribute?me.prop(e,t,n):(1===o&&me.isXMLDoc(e)||(i=me.attrHooks[t.toLowerCase()]||(me.expr.match.bool.test(t)?wt:void 0)),void 0!==n?null===n?void me.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=me.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!ve.radioValue&&"radio"===t&&me.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,
// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
i=t&&t.match(De);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),
// Hooks for boolean attributes
wt={set:function(e,t,n){
// Remove boolean attributes when set to false
return t===!1?me.removeAttr(e,n):e.setAttribute(n,n),n}},me.each(me.expr.match.bool.source.match(/\w+/g),function(e,t){var n=_t[t]||me.find.attr;_t[t]=function(e,t,r){var i,o,a=t.toLowerCase();
// Avoid an infinite loop by temporarily removing this function from the getter
return r||(o=_t[a],_t[a]=i,i=null!=n(e,t,r)?a:null,_t[a]=o),i}});var Tt=/^(?:input|select|textarea|button)$/i,St=/^(?:a|area)$/i;me.fn.extend({prop:function(e,t){return Re(this,me.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[me.propFix[e]||e]})}}),me.extend({prop:function(e,t,n){var r,i,o=e.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)
// Fix name and attach hooks
return 1===o&&me.isXMLDoc(e)||(t=me.propFix[t]||t,i=me.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){
// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var t=me.find.attr(e,"tabindex");return t?parseInt(t,10):Tt.test(e.nodeName)||St.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),
// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
ve.optSelected||(me.propHooks.selected={get:function(e){/* eslint no-unused-expressions: "off" */
var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){/* eslint no-unused-expressions: "off" */
var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),me.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){me.propFix[this.toLowerCase()]=this}),me.fn.extend({addClass:function(e){var t,n,r,i,o,a,u,s=0;if(me.isFunction(e))return this.each(function(t){me(this).addClass(e.call(this,t,Q(this)))});if("string"==typeof e&&e)for(t=e.match(De)||[];n=this[s++];)if(i=Q(n),r=1===n.nodeType&&" "+Y(i)+" "){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");
// Only assign if different to avoid unneeded rendering.
u=Y(r),i!==u&&n.setAttribute("class",u)}return this},removeClass:function(e){var t,n,r,i,o,a,u,s=0;if(me.isFunction(e))return this.each(function(t){me(this).removeClass(e.call(this,t,Q(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(De)||[];n=this[s++];)if(i=Q(n),
// This expression is here for better compressibility (see addClass)
r=1===n.nodeType&&" "+Y(i)+" "){for(a=0;o=t[a++];)
// Remove *all* instances
for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");
// Only assign if different to avoid unneeded rendering.
u=Y(r),i!==u&&n.setAttribute("class",u)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):me.isFunction(e)?this.each(function(n){me(this).toggleClass(e.call(this,n,Q(this),t),t)}):this.each(function(){var t,r,i,o;if("string"===n)for(
// Toggle individual class names
r=0,i=me(this),o=e.match(De)||[];t=o[r++];)
// Check each className given, space separated list
i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==n||(t=Q(this),t&&
// Store className if set
He.set(this,"__className__",t),
// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",t||e===!1?"":He.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+Y(Q(n))+" ").indexOf(t)>-1)return!0;return!1}});var kt=/\r/g;me.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=me.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,me(this).val()):e,
// Treat null/undefined as ""; convert numbers to string
null==i?i="":"number"==typeof i?i+="":me.isArray(i)&&(i=me.map(i,function(e){return null==e?"":e+""})),t=me.valHooks[this.type]||me.valHooks[this.nodeName.toLowerCase()],
// If set returns undefined, fall back to normal setting
t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)
// Handle most common string cases
return t=me.valHooks[i.type]||me.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(kt,""):null==n?"":n)}}}),me.extend({valHooks:{option:{get:function(e){var t=me.find.attr(e,"value");
// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
return null!=t?t:Y(me.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,u=a?null:[],s=a?o+1:i.length;
// Loop through all the selected options
for(r=o<0?s:a?o:0;r<s;r++)
// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(n=i[r],(n.selected||r===o)&&
// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!me.nodeName(n.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
t=me(n).val(),a)return t;
// Multi-Selects return an array
u.push(t)}return u},set:function(e,t){for(var n,r,i=e.options,o=me.makeArray(t),a=i.length;a--;)r=i[a],/* eslint-disable no-cond-assign */
(r.selected=me.inArray(me.valHooks.option.get(r),o)>-1)&&(n=!0);
// Force browsers to behave consistently when non-matching value is set
return n||(e.selectedIndex=-1),o}}}}),
// Radios and checkboxes getter/setter
me.each(["radio","checkbox"],function(){me.valHooks[this]={set:function(e,t){if(me.isArray(t))return e.checked=me.inArray(me(e).val(),t)>-1}},ve.checkOn||(me.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});
// Return jQuery for attributes-only inclusion
var Ct=/^(?:focusinfocus|focusoutblur)$/;me.extend(me.event,{trigger:function(e,t,r,i){var o,a,u,s,l,c,f,p=[r||oe],d=de.call(e,"type")?e.type:e,h=de.call(e,"namespace")?e.namespace.split("."):[];
// Don't do events on text and comment nodes
if(a=u=r=r||oe,3!==r.nodeType&&8!==r.nodeType&&!Ct.test(d+me.event.triggered)&&(d.indexOf(".")>-1&&(
// Namespaced trigger; create a regexp to match event type in handle()
h=d.split("."),d=h.shift(),h.sort()),l=d.indexOf(":")<0&&"on"+d,
// Caller can pass in a jQuery.Event object, Object, or just an event type string
e=e[me.expando]?e:new me.Event(d,"object"==typeof e&&e),
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
e.isTrigger=i?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
e.result=void 0,e.target||(e.target=r),
// Clone any incoming data and prepend the event, creating the handler arg list
t=null==t?[e]:me.makeArray(t,[e]),
// Allow special events to draw outside the lines
f=me.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,t)!==!1)){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!i&&!f.noBubble&&!me.isWindow(r)){for(s=f.delegateType||d,Ct.test(s+d)||(a=a.parentNode);a;a=a.parentNode)p.push(a),u=a;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
u===(r.ownerDocument||oe)&&p.push(u.defaultView||u.parentWindow||n)}for(
// Fire handlers on the event path
o=0;(a=p[o++])&&!e.isPropagationStopped();)e.type=o>1?s:f.bindType||d,
// jQuery handler
c=(He.get(a,"events")||{})[e.type]&&He.get(a,"handle"),c&&c.apply(a,t),
// Native handler
c=l&&a[l],c&&c.apply&&Ve(a)&&(e.result=c.apply(a,t),e.result===!1&&e.preventDefault());
// If nobody prevented the default action, do it now
// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
// Don't re-trigger an onFOO event when we call its FOO() method
// Prevent re-triggering of the same event, since we already bubbled it above
return e.type=d,i||e.isDefaultPrevented()||f._default&&f._default.apply(p.pop(),t)!==!1||!Ve(r)||l&&me.isFunction(r[d])&&!me.isWindow(r)&&(u=r[l],u&&(r[l]=null),me.event.triggered=d,r[d](),me.event.triggered=void 0,u&&(r[l]=u)),e.result}},
// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var r=me.extend(new me.Event,n,{type:e,isSimulated:!0});me.event.trigger(r,null,t)}}),me.fn.extend({trigger:function(e,t){return this.each(function(){me.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return me.event.trigger(e,t,n,!0)}}),me.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){
// Handle event binding
me.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),me.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),ve.focusin="onfocusin"in n,
// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
ve.focusin||me.each({focus:"focusin",blur:"focusout"},function(e,t){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var n=function(e){me.event.simulate(t,e.target,me.event.fix(e))};me.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=He.access(r,t);i||r.addEventListener(e,n,!0),He.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=He.access(r,t)-1;i?He.access(r,t,i):(r.removeEventListener(e,n,!0),He.remove(r,t))}}});var jt=n.location,At=me.now(),Et=/\?/;
// Cross-browser xml parsing
me.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;
// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{t=(new n.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||me.error("Invalid XML: "+e),t};var Pt=/\[\]$/,Nt=/\r?\n/g,Ot=/^(?:submit|button|image|reset|file)$/i,Lt=/^(?:input|select|textarea|keygen)/i;
// Serialize an array of form elements or a set of
// key/values into a query string
me.param=function(e,t){var n,r=[],i=function(e,t){
// If value is a function, invoke it and use its return value
var n=me.isFunction(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};
// If an array was passed in, assume that it is an array of form elements.
if(me.isArray(e)||e.jquery&&!me.isPlainObject(e))
// Serialize the form elements
me.each(e,function(){i(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(n in e)Z(n,e[n],t,i);
// Return the resulting serialization
return r.join("&")},me.fn.extend({serialize:function(){return me.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var e=me.prop(this,"elements");return e?me.makeArray(e):this}).filter(function(){var e=this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!me(this).is(":disabled")&&Lt.test(this.nodeName)&&!Ot.test(e)&&(this.checked||!Ye.test(e))}).map(function(e,t){var n=me(this).val();return null==n?null:me.isArray(n)?me.map(n,function(e){return{name:t.name,value:e.replace(Nt,"\r\n")}}):{name:t.name,value:n.replace(Nt,"\r\n")}}).get()}});var Dt=/%20/g,Ft=/#.*$/,qt=/([?&])_=[^&]*/,Rt=/^(.*?):[ \t]*([^\r\n]*)$/gm,
// #7653, #8125, #8152: local protocol detection
Vt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ht=/^(?:GET|HEAD)$/,It=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
zt={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
Wt={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
Mt="*/".concat("*"),
// Anchor tag for parsing the document origin
Bt=oe.createElement("a");Bt.href=jt.href,me.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:jt.href,type:"GET",isLocal:Vt.test(jt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":Mt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":JSON.parse,
// Parse text as xml
"text xml":me.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){
// Building a settings object
// Extending ajaxSettings
return t?ee(ee(e,me.ajaxSettings),t):ee(me.ajaxSettings,e)},ajaxPrefilter:J(zt),ajaxTransport:J(Wt),
// Main method
ajax:function(e,t){
// Callback for when everything is done
function r(e,t,r,u){var l,p,d,x,w,_=t;
// Ignore repeat invocations
c||(c=!0,
// Clear timeout if it exists
s&&n.clearTimeout(s),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
i=void 0,
// Cache response headers
a=u||"",
// Set readyState
T.readyState=e>0?4:0,
// Determine if successful
l=e>=200&&e<300||304===e,
// Get response data
r&&(x=te(h,T,r)),
// Convert no matter what (that way responseXXX fields are always set)
x=ne(h,x,T,l),
// If successful, handle type chaining
l?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
h.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(me.lastModified[o]=w),w=T.getResponseHeader("etag"),w&&(me.etag[o]=w)),
// if no content
204===e||"HEAD"===h.type?_="nocontent":304===e?_="notmodified":(_=x.state,p=x.data,d=x.error,l=!d)):(
// Extract error from statusText and normalize for non-aborts
d=_,!e&&_||(_="error",e<0&&(e=0))),
// Set data for the fake xhr object
T.status=e,T.statusText=(t||_)+"",
// Success/Error
l?y.resolveWith(g,[p,_,T]):y.rejectWith(g,[T,_,d]),
// Status-dependent callbacks
T.statusCode(b),b=void 0,f&&v.trigger(l?"ajaxSuccess":"ajaxError",[T,h,l?p:d]),
// Complete
m.fireWith(g,[T,_]),f&&(v.trigger("ajaxComplete",[T,h]),
// Handle the global AJAX counter
--me.active||me.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof e&&(t=e,e=void 0),
// Force options to be an object
t=t||{};var i,
// URL without anti-cache param
o,
// Response headers
a,u,
// timeout handle
s,
// Url cleanup var
l,
// Request state (becomes false upon send and true upon completion)
c,
// To know if global events are to be dispatched
f,
// Loop variable
p,
// uncached part of the url
d,
// Create the final options object
h=me.ajaxSetup({},t),
// Callbacks context
g=h.context||h,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
v=h.context&&(g.nodeType||g.jquery)?me(g):me.event,
// Deferreds
y=me.Deferred(),m=me.Callbacks("once memory"),
// Status-dependent callbacks
b=h.statusCode||{},
// Headers (they are sent all at once)
x={},w={},
// Default abort message
_="canceled",
// Fake xhr
T={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(c){if(!u)for(u={};t=Rt.exec(a);)u[t[1].toLowerCase()]=t[2];t=u[e.toLowerCase()]}return null==t?null:t},
// Raw string
getAllResponseHeaders:function(){return c?a:null},
// Caches the header
setRequestHeader:function(e,t){return null==c&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,x[e]=t),this},
// Overrides response content-type header
overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},
// Status-dependent callbacks
statusCode:function(e){var t;if(e)if(c)
// Execute the appropriate callbacks
T.always(e[T.status]);else
// Lazy-add the new callbacks in a way that preserves old ones
for(t in e)b[t]=[b[t],e[t]];return this},
// Cancel the request
abort:function(e){var t=e||_;return i&&i.abort(t),r(0,t),this}};
// A cross-domain request is in order when the origin doesn't match the current origin.
if(
// Attach deferreds
y.promise(T),
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
h.url=((e||h.url||jt.href)+"").replace(It,jt.protocol+"//"),
// Alias method option to type as per ticket #12004
h.type=t.method||t.type||h.method||h.type,
// Extract dataTypes list
h.dataTypes=(h.dataType||"*").toLowerCase().match(De)||[""],null==h.crossDomain){l=oe.createElement("a");
// Support: IE <=8 - 11, Edge 12 - 13
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{l.href=h.url,
// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
h.crossDomain=!0}}
// If request was aborted inside a prefilter, stop there
if(
// Convert data if not already a string
h.data&&h.processData&&"string"!=typeof h.data&&(h.data=me.param(h.data,h.traditional)),
// Apply prefilters
K(zt,h,t,T),c)return T;
// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
f=me.event&&h.global,
// Watch for a new set of requests
f&&0===me.active++&&me.event.trigger("ajaxStart"),
// Uppercase the type
h.type=h.type.toUpperCase(),
// Determine if request has content
h.hasContent=!Ht.test(h.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
o=h.url.replace(Ft,""),
// More options handling for requests with no content
h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Dt,"+")):(
// Remember the hash so we can put it back
d=h.url.slice(o.length),
// If data is available, append data to url
h.data&&(o+=(Et.test(o)?"&":"?")+h.data,
// #9682: remove data so that it's not used in an eventual retry
delete h.data),
// Add or update anti-cache param if needed
h.cache===!1&&(o=o.replace(qt,"$1"),d=(Et.test(o)?"&":"?")+"_="+At++ +d),
// Put hash and anti-cache on the URL that will be requested (gh-1732)
h.url=o+d),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
h.ifModified&&(me.lastModified[o]&&T.setRequestHeader("If-Modified-Since",me.lastModified[o]),me.etag[o]&&T.setRequestHeader("If-None-Match",me.etag[o])),
// Set the correct header, if data is being sent
(h.data&&h.hasContent&&h.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",h.contentType),
// Set the Accepts header for the server, depending on the dataType
T.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+Mt+"; q=0.01":""):h.accepts["*"]);
// Check for headers option
for(p in h.headers)T.setRequestHeader(p,h.headers[p]);
// Allow custom headers/mimetypes and early abort
if(h.beforeSend&&(h.beforeSend.call(g,T,h)===!1||c))
// Abort if not done already and return
return T.abort();
// If no transport, we auto-abort
if(
// Aborting is no longer a cancellation
_="abort",
// Install callbacks on deferreds
m.add(h.complete),T.done(h.success),T.fail(h.error),
// Get transport
i=K(Wt,h,t,T)){
// If request was aborted inside ajaxSend, stop there
if(T.readyState=1,
// Send global event
f&&v.trigger("ajaxSend",[T,h]),c)return T;
// Timeout
h.async&&h.timeout>0&&(s=n.setTimeout(function(){T.abort("timeout")},h.timeout));try{c=!1,i.send(x,r)}catch(e){
// Rethrow post-completion exceptions
if(c)throw e;
// Propagate others as results
r(-1,e)}}else r(-1,"No Transport");return T},getJSON:function(e,t,n){return me.get(e,t,n,"json")},getScript:function(e,t){return me.get(e,void 0,t,"script")}}),me.each(["get","post"],function(e,t){me[t]=function(e,n,r,i){
// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return me.isFunction(n)&&(i=i||r,r=n,n=void 0),me.ajax(me.extend({url:e,type:t,dataType:i,data:n,success:r},me.isPlainObject(e)&&e))}}),me._evalUrl=function(e){return me.ajax({url:e,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},me.fn.extend({wrapAll:function(e){var t;
// The elements to wrap the target around
return this[0]&&(me.isFunction(e)&&(e=e.call(this[0])),t=me(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return me.isFunction(e)?this.each(function(t){me(this).wrapInner(e.call(this,t))}):this.each(function(){var t=me(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=me.isFunction(e);return this.each(function(n){me(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){me(this).replaceWith(this.childNodes)}),this}}),me.expr.pseudos.hidden=function(e){return!me.expr.pseudos.visible(e)},me.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},me.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(e){}};var $t={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},Ut=me.ajaxSettings.xhr();ve.cors=!!Ut&&"withCredentials"in Ut,ve.ajax=Ut=!!Ut,me.ajaxTransport(function(e){var t,r;
// Cross domain only allowed if supported through XMLHttpRequest
if(ve.cors||Ut&&!e.crossDomain)return{send:function(i,o){var a,u=e.xhr();
// Apply custom fields if provided
if(u.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(a in e.xhrFields)u[a]=e.xhrFields[a];
// Override mime type if needed
e.mimeType&&u.overrideMimeType&&u.overrideMimeType(e.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
// Set headers
for(a in i)u.setRequestHeader(a,i[a]);
// Callback
t=function(e){return function(){t&&(t=r=u.onload=u.onerror=u.onabort=u.onreadystatechange=null,"abort"===e?u.abort():"error"===e?
// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
"number"!=typeof u.status?o(0,"error"):o(
// File: protocol always yields status 0; see #8605, #14207
u.status,u.statusText):o($t[u.status]||u.status,u.statusText,
// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(u.responseType||"text")||"string"!=typeof u.responseText?{binary:u.response}:{text:u.responseText},u.getAllResponseHeaders()))}},
// Listen to events
u.onload=t(),r=u.onerror=t("error"),
// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
void 0!==u.onabort?u.onabort=r:u.onreadystatechange=function(){
// Check readyState before timeout as it changes
4===u.readyState&&
// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
n.setTimeout(function(){t&&r()})},
// Create the abort callback
t=t("abort");try{
// Do send the request (this may raise an exception)
u.send(e.hasContent&&e.data||null)}catch(e){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(t)throw e}},abort:function(){t&&t()}}}),
// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
me.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),
// Install script dataType
me.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return me.globalEval(e),e}}}),
// Handle cache's special case and crossDomain
me.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),
// Bind script tag hack transport
me.ajaxTransport("script",function(e){
// This transport only deals with cross domain requests
if(e.crossDomain){var t,n;return{send:function(r,i){t=me("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),
// Use native DOM manipulation to avoid our domManip AJAX trickery
oe.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Xt=[],Gt=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
me.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Xt.pop()||me.expando+"_"+At++;return this[e]=!0,e}}),
// Detect, normalize options and install callbacks for jsonp requests
me.ajaxPrefilter("json jsonp",function(e,t,r){var i,o,a,u=e.jsonp!==!1&&(Gt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gt.test(e.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(u||"jsonp"===e.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
// Insert callback into url or form data
// Use data converter to retrieve json after script execution
// Force json dataType
// Install callback
// Clean-up function (fires after converters)
return i=e.jsonpCallback=me.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,u?e[u]=e[u].replace(Gt,"$1"+i):e.jsonp!==!1&&(e.url+=(Et.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return a||me.error(i+" was not called"),a[0]},e.dataTypes[0]="json",o=n[i],n[i]=function(){a=arguments},r.always(function(){
// If previous value didn't exist - remove it
void 0===o?me(n).removeProp(i):n[i]=o,
// Save back as free
e[i]&&(
// Make sure that re-using the options doesn't screw things around
e.jsonpCallback=t.jsonpCallback,
// Save the callback name for future use
Xt.push(i)),
// Call if it was a function and we have a response
a&&me.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),
// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
ve.createHTMLDocument=function(){var e=oe.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),
// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
me.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var r,i,o;
// Single tag
// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
// Single tag
return t||(ve.createHTMLDocument?(t=oe.implementation.createHTMLDocument(""),r=t.createElement("base"),r.href=oe.location.href,t.head.appendChild(r)):t=oe),i=je.exec(e),o=!n&&[],i?[t.createElement(i[1])]:(i=T([e],t,o),o&&o.length&&me(o).remove(),me.merge([],i.childNodes))},/**
 * Load a url into a page
 */
me.fn.load=function(e,t,n){var r,i,o,a=this,u=e.indexOf(" ");
// If it's a function
// We assume that it's the callback
// If we have elements to modify, make the request
return u>-1&&(r=Y(e.slice(u)),e=e.slice(0,u)),me.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&me.ajax({url:e,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:i||"GET",dataType:"html",data:t}).done(function(e){
// Save response for use in complete callback
o=arguments,a.html(r?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
me("<div>").append(me.parseHTML(e)).find(r):
// Otherwise use the full result
e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},
// Attach a bunch of functions for handling common AJAX events
me.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){me.fn[t]=function(e){return this.on(t,e)}}),me.expr.pseudos.animated=function(e){return me.grep(me.timers,function(t){return e===t.elem}).length},me.offset={setOffset:function(e,t,n){var r,i,o,a,u,s,l,c=me.css(e,"position"),f=me(e),p={};
// Set position first, in-case top/left are set even on static elem
"static"===c&&(e.style.position="relative"),u=f.offset(),o=me.css(e,"top"),s=me.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+s).indexOf("auto")>-1,
// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
l?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(s)||0),me.isFunction(t)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
t=t.call(e,n,me.extend({},u))),null!=t.top&&(p.top=t.top-u.top+a),null!=t.left&&(p.left=t.left-u.left+i),"using"in t?t.using.call(e,p):f.css(p)}},me.fn.extend({offset:function(e){
// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){me.offset.setOffset(this,e,t)});var t,n,r,i,o=this[0];if(o)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
// Make sure element is not hidden (display: none)
return o.getClientRects().length?(r=o.getBoundingClientRect(),r.width||r.height?(i=o.ownerDocument,n=re(i),t=i.documentElement,{top:r.top+n.pageYOffset-t.clientTop,left:r.left+n.pageXOffset-t.clientLeft}):r):{top:0,left:0}},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};
// Subtract parent offsets and element margins
// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
// because it is its only offset parent
// Assume getBoundingClientRect is there when computed position is fixed
// Get *real* offsetParent
// Get correct offsets
// Add offsetParent borders
return"fixed"===me.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),me.nodeName(e[0],"html")||(r=e.offset()),r={top:r.top+me.css(e[0],"borderTopWidth",!0),left:r.left+me.css(e[0],"borderLeftWidth",!0)}),{top:t.top-r.top-me.css(n,"marginTop",!0),left:t.left-r.left-me.css(n,"marginLeft",!0)}}},
// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===me.css(e,"position");)e=e.offsetParent;return e||et})}}),
// Create scrollLeft and scrollTop methods
me.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;me.fn[e]=function(r){return Re(this,function(e,r,i){var o=re(e);return void 0===i?o?o[t]:e[r]:void(o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i)},e,r,arguments.length)}}),
// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
me.each(["top","left"],function(e,t){me.cssHooks[t]=q(ve.pixelPosition,function(e,n){if(n)
// If curCSS returns percentage, fallback to offset
return n=F(e,t),ct.test(n)?me(e).position()[t]+"px":n})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
me.each({Height:"height",Width:"width"},function(e,t){me.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){
// Margin is only for outerHeight, outerWidth
me.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),u=n||(i===!0||o===!0?"margin":"border");return Re(this,function(t,n,i){var o;
// Get document width or height
// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return me.isWindow(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?me.css(t,n,u):me.style(t,n,i,u)},t,a?i:void 0,a)}})}),me.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),me.parseJSON=JSON.parse,r=[],i=function(){return me}.apply(t,r),!(void 0!==i&&(e.exports=i));var
// Map over jQuery in case of overwrite
Yt=n.jQuery,
// Map over the $ in case of overwrite
Qt=n.$;
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
return me.noConflict=function(e){return n.$===me&&(n.$=Qt),e&&n.jQuery===me&&(n.jQuery=Yt),me},o||(n.jQuery=n.$=me),me})},/***/
"../node_modules/lodash/lodash.js":/***/
function(e,t,n){/* WEBPACK VAR INJECTION */
(function(e,r){var i;(function(){/*--------------------------------------------------------------------------*/
/**
   * Adds the key-value `pair` to `map`.
   *
   * @private
   * @param {Object} map The map to modify.
   * @param {Array} pair The key-value pair to add.
   * @returns {Object} Returns `map`.
   */
function o(e,t){
// Don't return `map.set` because it's not chainable in IE 11.
return e.set(t[0],t[1]),e}/**
   * Adds `value` to `set`.
   *
   * @private
   * @param {Object} set The set to modify.
   * @param {*} value The value to add.
   * @returns {Object} Returns `set`.
   */
function a(e,t){
// Don't return `set.add` because it's not chainable in IE 11.
return e.add(t),e}/**
   * A faster alternative to `Function#apply`, this function invokes `func`
   * with the `this` binding of `thisArg` and the arguments of `args`.
   *
   * @private
   * @param {Function} func The function to invoke.
   * @param {*} thisArg The `this` binding of `func`.
   * @param {Array} args The arguments to invoke `func` with.
   * @returns {*} Returns the result of `func`.
   */
function u(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}/**
   * A specialized version of `baseAggregator` for arrays.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} setter The function to set `accumulator` values.
   * @param {Function} iteratee The iteratee to transform keys.
   * @param {Object} accumulator The initial aggregated object.
   * @returns {Function} Returns `accumulator`.
   */
function s(e,t,n,r){for(var i=-1,o=null==e?0:e.length;++i<o;){var a=e[i];t(r,a,n(a),e)}return r}/**
   * A specialized version of `_.forEach` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
function l(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}/**
   * A specialized version of `_.forEachRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns `array`.
   */
function c(e,t){for(var n=null==e?0:e.length;n--&&t(e[n],n,e)!==!1;);return e}/**
   * A specialized version of `_.every` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if all elements pass the predicate check,
   *  else `false`.
   */
function f(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}/**
   * A specialized version of `_.filter` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {Array} Returns the new filtered array.
   */
function p(e,t){for(var n=-1,r=null==e?0:e.length,i=0,o=[];++n<r;){var a=e[n];t(a,n,e)&&(o[i++]=a)}return o}/**
   * A specialized version of `_.includes` for arrays without support for
   * specifying an index to search from.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
function d(e,t){var n=null==e?0:e.length;return!!n&&S(e,t,0)>-1}/**
   * This function is like `arrayIncludes` except that it accepts a comparator.
   *
   * @private
   * @param {Array} [array] The array to inspect.
   * @param {*} target The value to search for.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {boolean} Returns `true` if `target` is found, else `false`.
   */
function h(e,t,n){for(var r=-1,i=null==e?0:e.length;++r<i;)if(n(t,e[r]))return!0;return!1}/**
   * A specialized version of `_.map` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the new mapped array.
   */
function g(e,t){for(var n=-1,r=null==e?0:e.length,i=Array(r);++n<r;)i[n]=t(e[n],n,e);return i}/**
   * Appends the elements of `values` to `array`.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {Array} values The values to append.
   * @returns {Array} Returns `array`.
   */
function v(e,t){for(var n=-1,r=t.length,i=e.length;++n<r;)e[i+n]=t[n];return e}/**
   * A specialized version of `_.reduce` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the first element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
function y(e,t,n,r){var i=-1,o=null==e?0:e.length;for(r&&o&&(n=e[++i]);++i<o;)n=t(n,e[i],i,e);return n}/**
   * A specialized version of `_.reduceRight` for arrays without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} [accumulator] The initial value.
   * @param {boolean} [initAccum] Specify using the last element of `array` as
   *  the initial value.
   * @returns {*} Returns the accumulated value.
   */
function m(e,t,n,r){var i=null==e?0:e.length;for(r&&i&&(n=e[--i]);i--;)n=t(n,e[i],i,e);return n}/**
   * A specialized version of `_.some` for arrays without support for iteratee
   * shorthands.
   *
   * @private
   * @param {Array} [array] The array to iterate over.
   * @param {Function} predicate The function invoked per iteration.
   * @returns {boolean} Returns `true` if any element passes the predicate check,
   *  else `false`.
   */
function b(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}/**
   * Converts an ASCII `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
function x(e){return e.split("")}/**
   * Splits an ASCII `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
function w(e){return e.match(Mt)||[]}/**
   * The base implementation of methods like `_.findKey` and `_.findLastKey`,
   * without support for iteratee shorthands, which iterates over `collection`
   * using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the found element or its key, else `undefined`.
   */
function _(e,t,n){var r;return n(e,function(e,n,i){if(t(e,n,i))return r=n,!1}),r}/**
   * The base implementation of `_.findIndex` and `_.findLastIndex` without
   * support for iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {Function} predicate The function invoked per iteration.
   * @param {number} fromIndex The index to search from.
   * @param {boolean} [fromRight] Specify iterating from right to left.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
function T(e,t,n,r){for(var i=e.length,o=n+(r?1:-1);r?o--:++o<i;)if(t(e[o],o,e))return o;return-1}/**
   * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
function S(e,t,n){return t===t?Z(e,t,n):T(e,C,n)}/**
   * This function is like `baseIndexOf` except that it accepts a comparator.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @param {Function} comparator The comparator invoked per element.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
function k(e,t,n,r){for(var i=n-1,o=e.length;++i<o;)if(r(e[i],t))return i;return-1}/**
   * The base implementation of `_.isNaN` without support for number objects.
   *
   * @private
   * @param {*} value The value to check.
   * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
   */
function C(e){return e!==e}/**
   * The base implementation of `_.mean` and `_.meanBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the mean.
   */
function j(e,t){var n=null==e?0:e.length;return n?O(e,t)/n:Re}/**
   * The base implementation of `_.property` without support for deep paths.
   *
   * @private
   * @param {string} key The key of the property to get.
   * @returns {Function} Returns the new accessor function.
   */
function A(e){return function(t){return null==t?ie:t[e]}}/**
   * The base implementation of `_.propertyOf` without support for deep paths.
   *
   * @private
   * @param {Object} object The object to query.
   * @returns {Function} Returns the new accessor function.
   */
function E(e){return function(t){return null==e?ie:e[t]}}/**
   * The base implementation of `_.reduce` and `_.reduceRight`, without support
   * for iteratee shorthands, which iterates over `collection` using `eachFunc`.
   *
   * @private
   * @param {Array|Object} collection The collection to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @param {*} accumulator The initial value.
   * @param {boolean} initAccum Specify using the first or last element of
   *  `collection` as the initial value.
   * @param {Function} eachFunc The function to iterate over `collection`.
   * @returns {*} Returns the accumulated value.
   */
function P(e,t,n,r,i){return i(e,function(e,i,o){n=r?(r=!1,e):t(n,e,i,o)}),n}/**
   * The base implementation of `_.sortBy` which uses `comparer` to define the
   * sort order of `array` and replaces criteria objects with their corresponding
   * values.
   *
   * @private
   * @param {Array} array The array to sort.
   * @param {Function} comparer The function to define sort order.
   * @returns {Array} Returns `array`.
   */
function N(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}/**
   * The base implementation of `_.sum` and `_.sumBy` without support for
   * iteratee shorthands.
   *
   * @private
   * @param {Array} array The array to iterate over.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {number} Returns the sum.
   */
function O(e,t){for(var n,r=-1,i=e.length;++r<i;){var o=t(e[r]);o!==ie&&(n=n===ie?o:n+o)}return n}/**
   * The base implementation of `_.times` without support for iteratee shorthands
   * or max array length checks.
   *
   * @private
   * @param {number} n The number of times to invoke `iteratee`.
   * @param {Function} iteratee The function invoked per iteration.
   * @returns {Array} Returns the array of results.
   */
function L(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}/**
   * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
   * of key-value pairs for `object` corresponding to the property names of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the key-value pairs.
   */
function D(e,t){return g(t,function(t){return[t,e[t]]})}/**
   * The base implementation of `_.unary` without support for storing metadata.
   *
   * @private
   * @param {Function} func The function to cap arguments for.
   * @returns {Function} Returns the new capped function.
   */
function F(e){return function(t){return e(t)}}/**
   * The base implementation of `_.values` and `_.valuesIn` which creates an
   * array of `object` property values corresponding to the property names
   * of `props`.
   *
   * @private
   * @param {Object} object The object to query.
   * @param {Array} props The property names to get values for.
   * @returns {Object} Returns the array of property values.
   */
function q(e,t){return g(t,function(t){return e[t]})}/**
   * Checks if a `cache` value for `key` exists.
   *
   * @private
   * @param {Object} cache The cache to query.
   * @param {string} key The key of the entry to check.
   * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
   */
function R(e,t){return e.has(t)}/**
   * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the first unmatched string symbol.
   */
function V(e,t){for(var n=-1,r=e.length;++n<r&&S(t,e[n],0)>-1;);return n}/**
   * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
   * that is not found in the character symbols.
   *
   * @private
   * @param {Array} strSymbols The string symbols to inspect.
   * @param {Array} chrSymbols The character symbols to find.
   * @returns {number} Returns the index of the last unmatched string symbol.
   */
function H(e,t){for(var n=e.length;n--&&S(t,e[n],0)>-1;);return n}/**
   * Gets the number of `placeholder` occurrences in `array`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} placeholder The placeholder to search for.
   * @returns {number} Returns the placeholder count.
   */
function I(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}/**
   * Used by `_.template` to escape characters for inclusion in compiled string literals.
   *
   * @private
   * @param {string} chr The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
function z(e){return"\\"+nr[e]}/**
   * Gets the value at `key` of `object`.
   *
   * @private
   * @param {Object} [object] The object to query.
   * @param {string} key The key of the property to get.
   * @returns {*} Returns the property value.
   */
function W(e,t){return null==e?ie:e[t]}/**
   * Checks if `string` contains Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a symbol is found, else `false`.
   */
function M(e){return Xn.test(e)}/**
   * Checks if `string` contains a word composed of Unicode symbols.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {boolean} Returns `true` if a word is found, else `false`.
   */
function B(e){return Gn.test(e)}/**
   * Converts `iterator` to an array.
   *
   * @private
   * @param {Object} iterator The iterator to convert.
   * @returns {Array} Returns the converted array.
   */
function $(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}/**
   * Converts `map` to its key-value pairs.
   *
   * @private
   * @param {Object} map The map to convert.
   * @returns {Array} Returns the key-value pairs.
   */
function U(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}/**
   * Creates a unary function that invokes `func` with its argument transformed.
   *
   * @private
   * @param {Function} func The function to wrap.
   * @param {Function} transform The argument transform.
   * @returns {Function} Returns the new function.
   */
function X(e,t){return function(n){return e(t(n))}}/**
   * Replaces all `placeholder` elements in `array` with an internal placeholder
   * and returns an array of their indexes.
   *
   * @private
   * @param {Array} array The array to modify.
   * @param {*} placeholder The placeholder to replace.
   * @returns {Array} Returns the new array of placeholder indexes.
   */
function G(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var a=e[n];a!==t&&a!==fe||(e[n]=fe,o[i++]=n)}return o}/**
   * Converts `set` to an array of its values.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the values.
   */
function Y(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}/**
   * Converts `set` to its value-value pairs.
   *
   * @private
   * @param {Object} set The set to convert.
   * @returns {Array} Returns the value-value pairs.
   */
function Q(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=[e,e]}),n}/**
   * A specialized version of `_.indexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
function Z(e,t,n){for(var r=n-1,i=e.length;++r<i;)if(e[r]===t)return r;return-1}/**
   * A specialized version of `_.lastIndexOf` which performs strict equality
   * comparisons of values, i.e. `===`.
   *
   * @private
   * @param {Array} array The array to inspect.
   * @param {*} value The value to search for.
   * @param {number} fromIndex The index to search from.
   * @returns {number} Returns the index of the matched value, else `-1`.
   */
function J(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}/**
   * Gets the number of symbols in `string`.
   *
   * @private
   * @param {string} string The string to inspect.
   * @returns {number} Returns the string size.
   */
function K(e){return M(e)?te(e):br(e)}/**
   * Converts `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
function ee(e){return M(e)?ne(e):x(e)}/**
   * Gets the size of a Unicode `string`.
   *
   * @private
   * @param {string} string The string inspect.
   * @returns {number} Returns the string size.
   */
function te(e){for(var t=$n.lastIndex=0;$n.test(e);)++t;return t}/**
   * Converts a Unicode `string` to an array.
   *
   * @private
   * @param {string} string The string to convert.
   * @returns {Array} Returns the converted array.
   */
function ne(e){return e.match($n)||[]}/**
   * Splits a Unicode `string` into an array of its words.
   *
   * @private
   * @param {string} The string to inspect.
   * @returns {Array} Returns the words of `string`.
   */
function re(e){return e.match(Un)||[]}/** Used as a safe reference for `undefined` in pre-ES5 environments. */
var ie,oe="4.17.4",ae=200,ue="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",se="Expected a function",le="__lodash_hash_undefined__",ce=500,fe="__lodash_placeholder__",pe=1,de=2,he=4,ge=1,ve=2,ye=1,me=2,be=4,xe=8,we=16,_e=32,Te=64,Se=128,ke=256,Ce=512,je=30,Ae="...",Ee=800,Pe=16,Ne=1,Oe=2,Le=3,De=1/0,Fe=9007199254740991,qe=1.7976931348623157e308,Re=NaN,Ve=4294967295,He=Ve-1,Ie=Ve>>>1,ze=[["ary",Se],["bind",ye],["bindKey",me],["curry",xe],["curryRight",we],["flip",Ce],["partial",_e],["partialRight",Te],["rearg",ke]],We="[object Arguments]",Me="[object Array]",Be="[object AsyncFunction]",$e="[object Boolean]",Ue="[object Date]",Xe="[object DOMException]",Ge="[object Error]",Ye="[object Function]",Qe="[object GeneratorFunction]",Ze="[object Map]",Je="[object Number]",Ke="[object Null]",et="[object Object]",tt="[object Promise]",nt="[object Proxy]",rt="[object RegExp]",it="[object Set]",ot="[object String]",at="[object Symbol]",ut="[object Undefined]",st="[object WeakMap]",lt="[object WeakSet]",ct="[object ArrayBuffer]",ft="[object DataView]",pt="[object Float32Array]",dt="[object Float64Array]",ht="[object Int8Array]",gt="[object Int16Array]",vt="[object Int32Array]",yt="[object Uint8Array]",mt="[object Uint8ClampedArray]",bt="[object Uint16Array]",xt="[object Uint32Array]",wt=/\b__p \+= '';/g,_t=/\b(__p \+=) '' \+/g,Tt=/(__e\(.*?\)|\b__t\)) \+\n'';/g,St=/&(?:amp|lt|gt|quot|#39);/g,kt=/[&<>"']/g,Ct=RegExp(St.source),jt=RegExp(kt.source),At=/<%-([\s\S]+?)%>/g,Et=/<%([\s\S]+?)%>/g,Pt=/<%=([\s\S]+?)%>/g,Nt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Ot=/^\w*$/,Lt=/^\./,Dt=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ft=/[\\^$.*+?()[\]{}|]/g,qt=RegExp(Ft.source),Rt=/^\s+|\s+$/g,Vt=/^\s+/,Ht=/\s+$/,It=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,zt=/\{\n\/\* \[wrapped with (.+)\] \*/,Wt=/,? & /,Mt=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Bt=/\\(\\)?/g,$t=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Ut=/\w*$/,Xt=/^[-+]0x[0-9a-f]+$/i,Gt=/^0b[01]+$/i,Yt=/^\[object .+?Constructor\]$/,Qt=/^0o[0-7]+$/i,Zt=/^(?:0|[1-9]\d*)$/,Jt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Kt=/($^)/,en=/['\n\r\u2028\u2029\\]/g,tn="\\ud800-\\udfff",nn="\\u0300-\\u036f",rn="\\ufe20-\\ufe2f",on="\\u20d0-\\u20ff",an=nn+rn+on,un="\\u2700-\\u27bf",sn="a-z\\xdf-\\xf6\\xf8-\\xff",ln="\\xac\\xb1\\xd7\\xf7",cn="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",fn="\\u2000-\\u206f",pn=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",dn="A-Z\\xc0-\\xd6\\xd8-\\xde",hn="\\ufe0e\\ufe0f",gn=ln+cn+fn+pn,vn="['’]",yn="["+tn+"]",mn="["+gn+"]",bn="["+an+"]",xn="\\d+",wn="["+un+"]",_n="["+sn+"]",Tn="[^"+tn+gn+xn+un+sn+dn+"]",Sn="\\ud83c[\\udffb-\\udfff]",kn="(?:"+bn+"|"+Sn+")",Cn="[^"+tn+"]",jn="(?:\\ud83c[\\udde6-\\uddff]){2}",An="[\\ud800-\\udbff][\\udc00-\\udfff]",En="["+dn+"]",Pn="\\u200d",Nn="(?:"+_n+"|"+Tn+")",On="(?:"+En+"|"+Tn+")",Ln="(?:"+vn+"(?:d|ll|m|re|s|t|ve))?",Dn="(?:"+vn+"(?:D|LL|M|RE|S|T|VE))?",Fn=kn+"?",qn="["+hn+"]?",Rn="(?:"+Pn+"(?:"+[Cn,jn,An].join("|")+")"+qn+Fn+")*",Vn="\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)",Hn="\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)",In=qn+Fn+Rn,zn="(?:"+[wn,jn,An].join("|")+")"+In,Wn="(?:"+[Cn+bn+"?",bn,jn,An,yn].join("|")+")",Mn=RegExp(vn,"g"),Bn=RegExp(bn,"g"),$n=RegExp(Sn+"(?="+Sn+")|"+Wn+In,"g"),Un=RegExp([En+"?"+_n+"+"+Ln+"(?="+[mn,En,"$"].join("|")+")",On+"+"+Dn+"(?="+[mn,En+Nn,"$"].join("|")+")",En+"?"+Nn+"+"+Ln,En+"+"+Dn,Hn,Vn,xn,zn].join("|"),"g"),Xn=RegExp("["+Pn+tn+an+hn+"]"),Gn=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Yn=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],Qn=-1,Zn={};Zn[pt]=Zn[dt]=Zn[ht]=Zn[gt]=Zn[vt]=Zn[yt]=Zn[mt]=Zn[bt]=Zn[xt]=!0,Zn[We]=Zn[Me]=Zn[ct]=Zn[$e]=Zn[ft]=Zn[Ue]=Zn[Ge]=Zn[Ye]=Zn[Ze]=Zn[Je]=Zn[et]=Zn[rt]=Zn[it]=Zn[ot]=Zn[st]=!1;/** Used to identify `toStringTag` values supported by `_.clone`. */
var Jn={};Jn[We]=Jn[Me]=Jn[ct]=Jn[ft]=Jn[$e]=Jn[Ue]=Jn[pt]=Jn[dt]=Jn[ht]=Jn[gt]=Jn[vt]=Jn[Ze]=Jn[Je]=Jn[et]=Jn[rt]=Jn[it]=Jn[ot]=Jn[at]=Jn[yt]=Jn[mt]=Jn[bt]=Jn[xt]=!0,Jn[Ge]=Jn[Ye]=Jn[st]=!1;/** Used to map Latin Unicode letters to basic Latin letters. */
var Kn={
// Latin-1 Supplement block.
"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss",
// Latin Extended-A block.
"Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"},er={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},tr={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},nr={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},rr=parseFloat,ir=parseInt,or="object"==typeof e&&e&&e.Object===Object&&e,ar="object"==typeof self&&self&&self.Object===Object&&self,ur=or||ar||Function("return this")(),sr="object"==typeof t&&t&&!t.nodeType&&t,lr=sr&&"object"==typeof r&&r&&!r.nodeType&&r,cr=lr&&lr.exports===sr,fr=cr&&or.process,pr=function(){try{return fr&&fr.binding&&fr.binding("util")}catch(e){}}(),dr=pr&&pr.isArrayBuffer,hr=pr&&pr.isDate,gr=pr&&pr.isMap,vr=pr&&pr.isRegExp,yr=pr&&pr.isSet,mr=pr&&pr.isTypedArray,br=A("length"),xr=E(Kn),wr=E(er),_r=E(tr),Tr=function e(t){/*------------------------------------------------------------------------*/
/**
     * Creates a `lodash` object which wraps `value` to enable implicit method
     * chain sequences. Methods that operate on and return arrays, collections,
     * and functions can be chained together. Methods that retrieve a single value
     * or may return a primitive value will automatically end the chain sequence
     * and return the unwrapped value. Otherwise, the value must be unwrapped
     * with `_#value`.
     *
     * Explicit chain sequences, which must be unwrapped with `_#value`, may be
     * enabled using `_.chain`.
     *
     * The execution of chained methods is lazy, that is, it's deferred until
     * `_#value` is implicitly or explicitly called.
     *
     * Lazy evaluation allows several methods to support shortcut fusion.
     * Shortcut fusion is an optimization to merge iteratee calls; this avoids
     * the creation of intermediate arrays and can greatly reduce the number of
     * iteratee executions. Sections of a chain sequence qualify for shortcut
     * fusion if the section is applied to an array and iteratees accept only
     * one argument. The heuristic for whether a section qualifies for shortcut
     * fusion is subject to change.
     *
     * Chaining is supported in custom builds as long as the `_#value` method is
     * directly or indirectly included in the build.
     *
     * In addition to lodash methods, wrappers have `Array` and `String` methods.
     *
     * The wrapper `Array` methods are:
     * `concat`, `join`, `pop`, `push`, `shift`, `sort`, `splice`, and `unshift`
     *
     * The wrapper `String` methods are:
     * `replace` and `split`
     *
     * The wrapper methods that support shortcut fusion are:
     * `at`, `compact`, `drop`, `dropRight`, `dropWhile`, `filter`, `find`,
     * `findLast`, `head`, `initial`, `last`, `map`, `reject`, `reverse`, `slice`,
     * `tail`, `take`, `takeRight`, `takeRightWhile`, `takeWhile`, and `toArray`
     *
     * The chainable wrapper methods are:
     * `after`, `ary`, `assign`, `assignIn`, `assignInWith`, `assignWith`, `at`,
     * `before`, `bind`, `bindAll`, `bindKey`, `castArray`, `chain`, `chunk`,
     * `commit`, `compact`, `concat`, `conforms`, `constant`, `countBy`, `create`,
     * `curry`, `debounce`, `defaults`, `defaultsDeep`, `defer`, `delay`,
     * `difference`, `differenceBy`, `differenceWith`, `drop`, `dropRight`,
     * `dropRightWhile`, `dropWhile`, `extend`, `extendWith`, `fill`, `filter`,
     * `flatMap`, `flatMapDeep`, `flatMapDepth`, `flatten`, `flattenDeep`,
     * `flattenDepth`, `flip`, `flow`, `flowRight`, `fromPairs`, `functions`,
     * `functionsIn`, `groupBy`, `initial`, `intersection`, `intersectionBy`,
     * `intersectionWith`, `invert`, `invertBy`, `invokeMap`, `iteratee`, `keyBy`,
     * `keys`, `keysIn`, `map`, `mapKeys`, `mapValues`, `matches`, `matchesProperty`,
     * `memoize`, `merge`, `mergeWith`, `method`, `methodOf`, `mixin`, `negate`,
     * `nthArg`, `omit`, `omitBy`, `once`, `orderBy`, `over`, `overArgs`,
     * `overEvery`, `overSome`, `partial`, `partialRight`, `partition`, `pick`,
     * `pickBy`, `plant`, `property`, `propertyOf`, `pull`, `pullAll`, `pullAllBy`,
     * `pullAllWith`, `pullAt`, `push`, `range`, `rangeRight`, `rearg`, `reject`,
     * `remove`, `rest`, `reverse`, `sampleSize`, `set`, `setWith`, `shuffle`,
     * `slice`, `sort`, `sortBy`, `splice`, `spread`, `tail`, `take`, `takeRight`,
     * `takeRightWhile`, `takeWhile`, `tap`, `throttle`, `thru`, `toArray`,
     * `toPairs`, `toPairsIn`, `toPath`, `toPlainObject`, `transform`, `unary`,
     * `union`, `unionBy`, `unionWith`, `uniq`, `uniqBy`, `uniqWith`, `unset`,
     * `unshift`, `unzip`, `unzipWith`, `update`, `updateWith`, `values`,
     * `valuesIn`, `without`, `wrap`, `xor`, `xorBy`, `xorWith`, `zip`,
     * `zipObject`, `zipObjectDeep`, and `zipWith`
     *
     * The wrapper methods that are **not** chainable by default are:
     * `add`, `attempt`, `camelCase`, `capitalize`, `ceil`, `clamp`, `clone`,
     * `cloneDeep`, `cloneDeepWith`, `cloneWith`, `conformsTo`, `deburr`,
     * `defaultTo`, `divide`, `each`, `eachRight`, `endsWith`, `eq`, `escape`,
     * `escapeRegExp`, `every`, `find`, `findIndex`, `findKey`, `findLast`,
     * `findLastIndex`, `findLastKey`, `first`, `floor`, `forEach`, `forEachRight`,
     * `forIn`, `forInRight`, `forOwn`, `forOwnRight`, `get`, `gt`, `gte`, `has`,
     * `hasIn`, `head`, `identity`, `includes`, `indexOf`, `inRange`, `invoke`,
     * `isArguments`, `isArray`, `isArrayBuffer`, `isArrayLike`, `isArrayLikeObject`,
     * `isBoolean`, `isBuffer`, `isDate`, `isElement`, `isEmpty`, `isEqual`,
     * `isEqualWith`, `isError`, `isFinite`, `isFunction`, `isInteger`, `isLength`,
     * `isMap`, `isMatch`, `isMatchWith`, `isNaN`, `isNative`, `isNil`, `isNull`,
     * `isNumber`, `isObject`, `isObjectLike`, `isPlainObject`, `isRegExp`,
     * `isSafeInteger`, `isSet`, `isString`, `isUndefined`, `isTypedArray`,
     * `isWeakMap`, `isWeakSet`, `join`, `kebabCase`, `last`, `lastIndexOf`,
     * `lowerCase`, `lowerFirst`, `lt`, `lte`, `max`, `maxBy`, `mean`, `meanBy`,
     * `min`, `minBy`, `multiply`, `noConflict`, `noop`, `now`, `nth`, `pad`,
     * `padEnd`, `padStart`, `parseInt`, `pop`, `random`, `reduce`, `reduceRight`,
     * `repeat`, `result`, `round`, `runInContext`, `sample`, `shift`, `size`,
     * `snakeCase`, `some`, `sortedIndex`, `sortedIndexBy`, `sortedLastIndex`,
     * `sortedLastIndexBy`, `startCase`, `startsWith`, `stubArray`, `stubFalse`,
     * `stubObject`, `stubString`, `stubTrue`, `subtract`, `sum`, `sumBy`,
     * `template`, `times`, `toFinite`, `toInteger`, `toJSON`, `toLength`,
     * `toLower`, `toNumber`, `toSafeInteger`, `toString`, `toUpper`, `trim`,
     * `trimEnd`, `trimStart`, `truncate`, `unescape`, `uniqueId`, `upperCase`,
     * `upperFirst`, `value`, and `words`
     *
     * @name _
     * @constructor
     * @category Seq
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // Returns an unwrapped value.
     * wrapped.reduce(_.add);
     * // => 6
     *
     * // Returns a wrapped value.
     * var squares = wrapped.map(square);
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
function n(e){if(ls(e)&&!wp(e)&&!(e instanceof x)){if(e instanceof i)return e;if(xc.call(e,"__wrapped__"))return aa(e)}return new i(e)}/**
     * The function whose prototype chain sequence wrappers inherit from.
     *
     * @private
     */
function r(){}/**
     * The base constructor for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap.
     * @param {boolean} [chainAll] Enable explicit method chain sequences.
     */
function i(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=ie}/*------------------------------------------------------------------------*/
/**
     * Creates a lazy wrapper object which wraps `value` to enable lazy evaluation.
     *
     * @private
     * @constructor
     * @param {*} value The value to wrap.
     */
function x(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ve,this.__views__=[]}/**
     * Creates a clone of the lazy wrapper object.
     *
     * @private
     * @name clone
     * @memberOf LazyWrapper
     * @returns {Object} Returns the cloned `LazyWrapper` object.
     */
function E(){var e=new x(this.__wrapped__);return e.__actions__=Ii(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=Ii(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=Ii(this.__views__),e}/**
     * Reverses the direction of lazy iteration.
     *
     * @private
     * @name reverse
     * @memberOf LazyWrapper
     * @returns {Object} Returns the new reversed `LazyWrapper` object.
     */
function Z(){if(this.__filtered__){var e=new x(this);e.__dir__=-1,e.__filtered__=!0}else e=this.clone(),e.__dir__*=-1;return e}/**
     * Extracts the unwrapped value from its lazy wrapper.
     *
     * @private
     * @name value
     * @memberOf LazyWrapper
     * @returns {*} Returns the unwrapped value.
     */
function te(){var e=this.__wrapped__.value(),t=this.__dir__,n=wp(e),r=t<0,i=n?e.length:0,o=Po(0,i,this.__views__),a=o.start,u=o.end,s=u-a,l=r?u:a-1,c=this.__iteratees__,f=c.length,p=0,d=Qc(s,this.__takeCount__);if(!n||!r&&i==s&&d==s)return wi(e,this.__actions__);var h=[];e:for(;s--&&p<d;){l+=t;for(var g=-1,v=e[l];++g<f;){var y=c[g],m=y.iteratee,b=y.type,x=m(v);if(b==Oe)v=x;else if(!x){if(b==Ne)continue e;break e}}h[p++]=v}return h}/*------------------------------------------------------------------------*/
/**
     * Creates a hash object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
function ne(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}/**
     * Removes all key-value entries from the hash.
     *
     * @private
     * @name clear
     * @memberOf Hash
     */
function Mt(){this.__data__=uf?uf(null):{},this.size=0}/**
     * Removes `key` and its value from the hash.
     *
     * @private
     * @name delete
     * @memberOf Hash
     * @param {Object} hash The hash to modify.
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
function tn(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}/**
     * Gets the hash value for `key`.
     *
     * @private
     * @name get
     * @memberOf Hash
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
function nn(e){var t=this.__data__;if(uf){var n=t[e];return n===le?ie:n}return xc.call(t,e)?t[e]:ie}/**
     * Checks if a hash value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Hash
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
function rn(e){var t=this.__data__;return uf?t[e]!==ie:xc.call(t,e)}/**
     * Sets the hash `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Hash
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the hash instance.
     */
function on(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=uf&&t===ie?le:t,this}/*------------------------------------------------------------------------*/
/**
     * Creates an list cache object.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
function an(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}/**
     * Removes all key-value entries from the list cache.
     *
     * @private
     * @name clear
     * @memberOf ListCache
     */
function un(){this.__data__=[],this.size=0}/**
     * Removes `key` and its value from the list cache.
     *
     * @private
     * @name delete
     * @memberOf ListCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
function sn(e){var t=this.__data__,n=Ln(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():Dc.call(t,n,1),--this.size,!0}/**
     * Gets the list cache value for `key`.
     *
     * @private
     * @name get
     * @memberOf ListCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
function ln(e){var t=this.__data__,n=Ln(t,e);return n<0?ie:t[n][1]}/**
     * Checks if a list cache value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf ListCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
function cn(e){return Ln(this.__data__,e)>-1}/**
     * Sets the list cache `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf ListCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the list cache instance.
     */
function fn(e,t){var n=this.__data__,r=Ln(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}/*------------------------------------------------------------------------*/
/**
     * Creates a map cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
function pn(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}/**
     * Removes all key-value entries from the map.
     *
     * @private
     * @name clear
     * @memberOf MapCache
     */
function dn(){this.size=0,this.__data__={hash:new ne,map:new(nf||an),string:new ne}}/**
     * Removes `key` and its value from the map.
     *
     * @private
     * @name delete
     * @memberOf MapCache
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
function hn(e){var t=Co(this,e).delete(e);return this.size-=t?1:0,t}/**
     * Gets the map value for `key`.
     *
     * @private
     * @name get
     * @memberOf MapCache
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
function gn(e){return Co(this,e).get(e)}/**
     * Checks if a map value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf MapCache
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
function vn(e){return Co(this,e).has(e)}/**
     * Sets the map `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf MapCache
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the map cache instance.
     */
function yn(e,t){var n=Co(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}/*------------------------------------------------------------------------*/
/**
     *
     * Creates an array cache object to store unique values.
     *
     * @private
     * @constructor
     * @param {Array} [values] The values to cache.
     */
function mn(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new pn;++t<n;)this.add(e[t])}/**
     * Adds `value` to the array cache.
     *
     * @private
     * @name add
     * @memberOf SetCache
     * @alias push
     * @param {*} value The value to cache.
     * @returns {Object} Returns the cache instance.
     */
function bn(e){return this.__data__.set(e,le),this}/**
     * Checks if `value` is in the array cache.
     *
     * @private
     * @name has
     * @memberOf SetCache
     * @param {*} value The value to search for.
     * @returns {number} Returns `true` if `value` is found, else `false`.
     */
function xn(e){return this.__data__.has(e)}/*------------------------------------------------------------------------*/
/**
     * Creates a stack cache object to store key-value pairs.
     *
     * @private
     * @constructor
     * @param {Array} [entries] The key-value pairs to cache.
     */
function wn(e){var t=this.__data__=new an(e);this.size=t.size}/**
     * Removes all key-value entries from the stack.
     *
     * @private
     * @name clear
     * @memberOf Stack
     */
function _n(){this.__data__=new an,this.size=0}/**
     * Removes `key` and its value from the stack.
     *
     * @private
     * @name delete
     * @memberOf Stack
     * @param {string} key The key of the value to remove.
     * @returns {boolean} Returns `true` if the entry was removed, else `false`.
     */
function Tn(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}/**
     * Gets the stack value for `key`.
     *
     * @private
     * @name get
     * @memberOf Stack
     * @param {string} key The key of the value to get.
     * @returns {*} Returns the entry value.
     */
function Sn(e){return this.__data__.get(e)}/**
     * Checks if a stack value for `key` exists.
     *
     * @private
     * @name has
     * @memberOf Stack
     * @param {string} key The key of the entry to check.
     * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
     */
function kn(e){return this.__data__.has(e)}/**
     * Sets the stack `key` to `value`.
     *
     * @private
     * @name set
     * @memberOf Stack
     * @param {string} key The key of the value to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns the stack cache instance.
     */
function Cn(e,t){var n=this.__data__;if(n instanceof an){var r=n.__data__;if(!nf||r.length<ae-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new pn(r)}return n.set(e,t),this.size=n.size,this}/*------------------------------------------------------------------------*/
/**
     * Creates an array of the enumerable property names of the array-like `value`.
     *
     * @private
     * @param {*} value The value to query.
     * @param {boolean} inherited Specify returning inherited property names.
     * @returns {Array} Returns the array of property names.
     */
function jn(e,t){var n=wp(e),r=!n&&xp(e),i=!n&&!r&&Tp(e),o=!n&&!r&&!i&&Ap(e),a=n||r||i||o,u=a?L(e.length,dc):[],s=u.length;for(var l in e)!t&&!xc.call(e,l)||a&&(
// Safari 9 has enumerable `arguments.length` in strict mode.
"length"==l||
// Node.js 0.10 has enumerable non-index properties on buffers.
i&&("offset"==l||"parent"==l)||
// PhantomJS 2 has enumerable non-index properties on typed arrays.
o&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||
// Skip index properties.
Vo(l,s))||u.push(l);return u}/**
     * A specialized version of `_.sample` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @returns {*} Returns the random element.
     */
function An(e){var t=e.length;return t?e[ni(0,t-1)]:ie}/**
     * A specialized version of `_.sampleSize` for arrays.
     *
     * @private
     * @param {Array} array The array to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
function En(e,t){return na(Ii(e),Hn(t,0,e.length))}/**
     * A specialized version of `_.shuffle` for arrays.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
function Pn(e){return na(Ii(e))}/**
     * This function is like `assignValue` except that it doesn't assign
     * `undefined` values.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
function Nn(e,t,n){(n===ie||Yu(e[t],n))&&(n!==ie||t in e)||Rn(e,t,n)}/**
     * Assigns `value` to `key` of `object` if the existing value is not equivalent
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
function On(e,t,n){var r=e[t];xc.call(e,t)&&Yu(r,n)&&(n!==ie||t in e)||Rn(e,t,n)}/**
     * Gets the index at which the `key` is found in `array` of key-value pairs.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {*} key The key to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     */
function Ln(e,t){for(var n=e.length;n--;)if(Yu(e[n][0],t))return n;return-1}/**
     * Aggregates elements of `collection` on `accumulator` with keys transformed
     * by `iteratee` and values set by `setter`.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform keys.
     * @param {Object} accumulator The initial aggregated object.
     * @returns {Function} Returns `accumulator`.
     */
function Dn(e,t,n,r){return bf(e,function(e,i,o){t(r,e,n(e),o)}),r}/**
     * The base implementation of `_.assign` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
function Fn(e,t){return e&&zi(t,Bs(t),e)}/**
     * The base implementation of `_.assignIn` without support for multiple sources
     * or `customizer` functions.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @returns {Object} Returns `object`.
     */
function qn(e,t){return e&&zi(t,$s(t),e)}/**
     * The base implementation of `assignValue` and `assignMergeValue` without
     * value checks.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {string} key The key of the property to assign.
     * @param {*} value The value to assign.
     */
function Rn(e,t,n){"__proto__"==t&&Vc?Vc(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}/**
     * The base implementation of `_.at` without support for individual paths.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {string[]} paths The property paths to pick.
     * @returns {Array} Returns the picked elements.
     */
function Vn(e,t){for(var n=-1,r=t.length,i=ac(r),o=null==e;++n<r;)i[n]=o?ie:zs(e,t[n]);return i}/**
     * The base implementation of `_.clamp` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     */
function Hn(e,t,n){return e===e&&(n!==ie&&(e=e<=n?e:n),t!==ie&&(e=e>=t?e:t)),e}/**
     * The base implementation of `_.clone` and `_.cloneDeep` which tracks
     * traversed objects.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} bitmask The bitmask flags.
     *  1 - Deep clone
     *  2 - Flatten inherited properties
     *  4 - Clone symbols
     * @param {Function} [customizer] The function to customize cloning.
     * @param {string} [key] The key of `value`.
     * @param {Object} [object] The parent object of `value`.
     * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
     * @returns {*} Returns the cloned value.
     */
function In(e,t,n,r,i,o){var a,u=t&pe,s=t&de,c=t&he;if(n&&(a=i?n(e,r,i,o):n(e)),a!==ie)return a;if(!ss(e))return e;var f=wp(e);if(f){if(a=Lo(e),!u)return Ii(e,a)}else{var p=Nf(e),d=p==Ye||p==Qe;if(Tp(e))return Ai(e,u);if(p==et||p==We||d&&!i){if(a=s||d?{}:Do(e),!u)return s?Mi(e,qn(a,e)):Wi(e,Fn(a,e))}else{if(!Jn[p])return i?e:{};a=Fo(e,p,In,u)}}
// Check for circular references and return its corresponding clone.
o||(o=new wn);var h=o.get(e);if(h)return h;o.set(e,a);var g=c?s?_o:wo:s?$s:Bs,v=f?ie:g(e);return l(v||e,function(r,i){v&&(i=r,r=e[i]),
// Recursively populate clone (susceptible to call stack limits).
On(a,i,In(r,t,n,i,e,o))}),a}/**
     * The base implementation of `_.conforms` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     */
function zn(e){var t=Bs(e);return function(n){return Wn(n,e,t)}}/**
     * The base implementation of `_.conformsTo` which accepts `props` to check.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     */
function Wn(e,t,n){var r=n.length;if(null==e)return!r;for(e=fc(e);r--;){var i=n[r],o=t[i],a=e[i];if(a===ie&&!(i in e)||!o(a))return!1}return!0}/**
     * The base implementation of `_.delay` and `_.defer` which accepts `args`
     * to provide to `func`.
     *
     * @private
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay invocation.
     * @param {Array} args The arguments to provide to `func`.
     * @returns {number|Object} Returns the timer id or timeout object.
     */
function $n(e,t,n){if("function"!=typeof e)throw new hc(se);return Df(function(){e.apply(ie,n)},t)}/**
     * The base implementation of methods like `_.difference` without support
     * for excluding multiple arrays or iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Array} values The values to exclude.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of filtered values.
     */
function Un(e,t,n,r){var i=-1,o=d,a=!0,u=e.length,s=[],l=t.length;if(!u)return s;n&&(t=g(t,F(n))),r?(o=h,a=!1):t.length>=ae&&(o=R,a=!1,t=new mn(t));e:for(;++i<u;){var c=e[i],f=null==n?c:n(c);if(c=r||0!==c?c:0,a&&f===f){for(var p=l;p--;)if(t[p]===f)continue e;s.push(c)}else o(t,f,r)||s.push(c)}return s}/**
     * The base implementation of `_.every` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`
     */
function Xn(e,t){var n=!0;return bf(e,function(e,r,i){return n=!!t(e,r,i)}),n}/**
     * The base implementation of methods like `_.max` and `_.min` which accepts a
     * `comparator` to determine the extremum value.
     *
     * @private
     * @param {Array} array The array to iterate over.
     * @param {Function} iteratee The iteratee invoked per iteration.
     * @param {Function} comparator The comparator used to compare values.
     * @returns {*} Returns the extremum value.
     */
function Gn(e,t,n){for(var r=-1,i=e.length;++r<i;){var o=e[r],a=t(o);if(null!=a&&(u===ie?a===a&&!xs(a):n(a,u)))var u=a,s=o}return s}/**
     * The base implementation of `_.fill` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     */
function Kn(e,t,n,r){var i=e.length;for(n=Cs(n),n<0&&(n=-n>i?0:i+n),r=r===ie||r>i?i:Cs(r),r<0&&(r+=i),r=n>r?0:js(r);n<r;)e[n++]=t;return e}/**
     * The base implementation of `_.filter` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     */
function er(e,t){var n=[];return bf(e,function(e,r,i){t(e,r,i)&&n.push(e)}),n}/**
     * The base implementation of `_.flatten` with support for restricting flattening.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {number} depth The maximum recursion depth.
     * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
     * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
     * @param {Array} [result=[]] The initial result value.
     * @returns {Array} Returns the new flattened array.
     */
function tr(e,t,n,r,i){var o=-1,a=e.length;for(n||(n=Ro),i||(i=[]);++o<a;){var u=e[o];t>0&&n(u)?t>1?
// Recursively flatten arrays (susceptible to call stack limits).
tr(u,t-1,n,r,i):v(i,u):r||(i[i.length]=u)}return i}/**
     * The base implementation of `_.forOwn` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
function nr(e,t){return e&&wf(e,t,Bs)}/**
     * The base implementation of `_.forOwnRight` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Object} Returns `object`.
     */
function or(e,t){return e&&_f(e,t,Bs)}/**
     * The base implementation of `_.functions` which creates an array of
     * `object` function property names filtered from `props`.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Array} props The property names to filter.
     * @returns {Array} Returns the function names.
     */
function ar(e,t){return p(t,function(t){return os(e[t])})}/**
     * The base implementation of `_.get` without support for default values.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @returns {*} Returns the resolved value.
     */
function sr(e,t){t=Ci(t,e);for(var n=0,r=t.length;null!=e&&n<r;)e=e[ra(t[n++])];return n&&n==r?e:ie}/**
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
function lr(e,t,n){var r=t(e);return wp(e)?r:v(r,n(e))}/**
     * The base implementation of `getTag` without fallbacks for buggy environments.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the `toStringTag`.
     */
function fr(e){return null==e?e===ie?ut:Ke:Rc&&Rc in fc(e)?Eo(e):Qo(e)}/**
     * The base implementation of `_.gt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is greater than `other`,
     *  else `false`.
     */
function pr(e,t){return e>t}/**
     * The base implementation of `_.has` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
function br(e,t){return null!=e&&xc.call(e,t)}/**
     * The base implementation of `_.hasIn` without support for deep paths.
     *
     * @private
     * @param {Object} [object] The object to query.
     * @param {Array|string} key The key to check.
     * @returns {boolean} Returns `true` if `key` exists, else `false`.
     */
function Tr(e,t){return null!=e&&t in fc(e)}/**
     * The base implementation of `_.inRange` which doesn't coerce arguments.
     *
     * @private
     * @param {number} number The number to check.
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     */
function kr(e,t,n){return e>=Qc(t,n)&&e<Yc(t,n)}/**
     * The base implementation of methods like `_.intersection`, without support
     * for iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of shared values.
     */
function Cr(e,t,n){for(var r=n?h:d,i=e[0].length,o=e.length,a=o,u=ac(o),s=1/0,l=[];a--;){var c=e[a];a&&t&&(c=g(c,F(t))),s=Qc(c.length,s),u[a]=!n&&(t||i>=120&&c.length>=120)?new mn(a&&c):ie}c=e[0];var f=-1,p=u[0];e:for(;++f<i&&l.length<s;){var v=c[f],y=t?t(v):v;if(v=n||0!==v?v:0,!(p?R(p,y):r(l,y,n))){for(a=o;--a;){var m=u[a];if(!(m?R(m,y):r(e[a],y,n)))continue e}p&&p.push(y),l.push(v)}}return l}/**
     * The base implementation of `_.invert` and `_.invertBy` which inverts
     * `object` with values transformed by `iteratee` and set by `setter`.
     *
     * @private
     * @param {Object} object The object to iterate over.
     * @param {Function} setter The function to set `accumulator` values.
     * @param {Function} iteratee The iteratee to transform values.
     * @param {Object} accumulator The initial inverted object.
     * @returns {Function} Returns `accumulator`.
     */
function jr(e,t,n,r){return nr(e,function(e,i,o){t(r,n(e),i,o)}),r}/**
     * The base implementation of `_.invoke` without support for individual
     * method arguments.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the method to invoke.
     * @param {Array} args The arguments to invoke the method with.
     * @returns {*} Returns the result of the invoked method.
     */
function Ar(e,t,n){t=Ci(t,e),e=Jo(e,t);var r=null==e?e:e[ra(ka(t))];return null==r?ie:u(r,e,n)}/**
     * The base implementation of `_.isArguments`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an `arguments` object,
     */
function Er(e){return ls(e)&&fr(e)==We}/**
     * The base implementation of `_.isArrayBuffer` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array buffer, else `false`.
     */
function Pr(e){return ls(e)&&fr(e)==ct}/**
     * The base implementation of `_.isDate` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a date object, else `false`.
     */
function Nr(e){return ls(e)&&fr(e)==Ue}/**
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
function Or(e,t,n,r,i){return e===t||(null==e||null==t||!ls(e)&&!ls(t)?e!==e&&t!==t:Lr(e,t,n,r,Or,i))}/**
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
function Lr(e,t,n,r,i,o){var a=wp(e),u=wp(t),s=a?Me:Nf(e),l=u?Me:Nf(t);s=s==We?et:s,l=l==We?et:l;var c=s==et,f=l==et,p=s==l;if(p&&Tp(e)){if(!Tp(t))return!1;a=!0,c=!1}if(p&&!c)return o||(o=new wn),a||Ap(e)?yo(e,t,n,r,i,o):mo(e,t,s,n,r,i,o);if(!(n&ge)){var d=c&&xc.call(e,"__wrapped__"),h=f&&xc.call(t,"__wrapped__");if(d||h){var g=d?e.value():e,v=h?t.value():t;return o||(o=new wn),i(g,v,n,r,o)}}return!!p&&(o||(o=new wn),bo(e,t,n,r,i,o))}/**
     * The base implementation of `_.isMap` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a map, else `false`.
     */
function Dr(e){return ls(e)&&Nf(e)==Ze}/**
     * The base implementation of `_.isMatch` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Array} matchData The property names, values, and compare flags to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     */
function Fr(e,t,n,r){var i=n.length,o=i,a=!r;if(null==e)return!o;for(e=fc(e);i--;){var u=n[i];if(a&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++i<o;){u=n[i];var s=u[0],l=e[s],c=u[1];if(a&&u[2]){if(l===ie&&!(s in e))return!1}else{var f=new wn;if(r)var p=r(l,c,s,e,t,f);if(!(p===ie?Or(c,l,ge|ve,r,f):p))return!1}}return!0}/**
     * The base implementation of `_.isNative` without bad shim checks.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     */
function qr(e){if(!ss(e)||Mo(e))return!1;var t=os(e)?Cc:Yt;return t.test(ia(e))}/**
     * The base implementation of `_.isRegExp` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a regexp, else `false`.
     */
function Rr(e){return ls(e)&&fr(e)==rt}/**
     * The base implementation of `_.isSet` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a set, else `false`.
     */
function Vr(e){return ls(e)&&Nf(e)==it}/**
     * The base implementation of `_.isTypedArray` without Node.js optimizations.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
     */
function Hr(e){return ls(e)&&us(e.length)&&!!Zn[fr(e)]}/**
     * The base implementation of `_.iteratee`.
     *
     * @private
     * @param {*} [value=_.identity] The value to convert to an iteratee.
     * @returns {Function} Returns the iteratee.
     */
function Ir(e){
// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
// Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
// See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
return"function"==typeof e?e:null==e?Dl:"object"==typeof e?wp(e)?Ur(e[0],e[1]):$r(e):Wl(e)}/**
     * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
function zr(e){if(!Bo(e))return Gc(e);var t=[];for(var n in fc(e))xc.call(e,n)&&"constructor"!=n&&t.push(n);return t}/**
     * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
function Wr(e){if(!ss(e))return Yo(e);var t=Bo(e),n=[];for(var r in e)("constructor"!=r||!t&&xc.call(e,r))&&n.push(r);return n}/**
     * The base implementation of `_.lt` which doesn't coerce arguments.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if `value` is less than `other`,
     *  else `false`.
     */
function Mr(e,t){return e<t}/**
     * The base implementation of `_.map` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     */
function Br(e,t){var n=-1,r=Qu(e)?ac(e.length):[];return bf(e,function(e,i,o){r[++n]=t(e,i,o)}),r}/**
     * The base implementation of `_.matches` which doesn't clone `source`.
     *
     * @private
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     */
function $r(e){var t=jo(e);return 1==t.length&&t[0][2]?Uo(t[0][0],t[0][1]):function(n){return n===e||Fr(n,e,t)}}/**
     * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
     *
     * @private
     * @param {string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
function Ur(e,t){return Io(e)&&$o(t)?Uo(ra(e),t):function(n){var r=zs(n,e);return r===ie&&r===t?Ms(n,e):Or(t,r,ge|ve)}}/**
     * The base implementation of `_.merge` without support for multiple sources.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} [customizer] The function to customize merged values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
function Xr(e,t,n,r,i){e!==t&&wf(t,function(o,a){if(ss(o))i||(i=new wn),Gr(e,t,a,n,Xr,r,i);else{var u=r?r(e[a],o,a+"",e,t,i):ie;u===ie&&(u=o),Nn(e,a,u)}},$s)}/**
     * A specialized version of `baseMerge` for arrays and objects which performs
     * deep merges and tracks traversed objects enabling objects with circular
     * references to be merged.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {string} key The key of the value to merge.
     * @param {number} srcIndex The index of `source`.
     * @param {Function} mergeFunc The function to merge values.
     * @param {Function} [customizer] The function to customize assigned values.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     */
function Gr(e,t,n,r,i,o,a){var u=e[n],s=t[n],l=a.get(s);if(l)return void Nn(e,n,l);var c=o?o(u,s,n+"",e,t,a):ie,f=c===ie;if(f){var p=wp(s),d=!p&&Tp(s),h=!p&&!d&&Ap(s);c=s,p||d||h?wp(u)?c=u:Zu(u)?c=Ii(u):d?(f=!1,c=Ai(s,!0)):h?(f=!1,c=Fi(s,!0)):c=[]:ys(s)||xp(s)?(c=u,xp(u)?c=Es(u):(!ss(u)||r&&os(u))&&(c=Do(s))):f=!1}f&&(
// Recursively merge objects and arrays (susceptible to call stack limits).
a.set(s,c),i(c,s,r,o,a),a.delete(s)),Nn(e,n,c)}/**
     * The base implementation of `_.nth` which doesn't coerce arguments.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {number} n The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     */
function Yr(e,t){var n=e.length;if(n)return t+=t<0?n:0,Vo(t,n)?e[t]:ie}/**
     * The base implementation of `_.orderBy` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function[]|Object[]|string[]} iteratees The iteratees to sort by.
     * @param {string[]} orders The sort orders of `iteratees`.
     * @returns {Array} Returns the new sorted array.
     */
function Qr(e,t,n){var r=-1;t=g(t.length?t:[Dl],F(ko()));var i=Br(e,function(e,n,i){var o=g(t,function(t){return t(e)});return{criteria:o,index:++r,value:e}});return N(i,function(e,t){return Ri(e,t,n)})}/**
     * The base implementation of `_.pick` without support for individual
     * property identifiers.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @returns {Object} Returns the new object.
     */
function Zr(e,t){return Jr(e,t,function(t,n){return Ms(e,n)})}/**
     * The base implementation of  `_.pickBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Object} object The source object.
     * @param {string[]} paths The property paths to pick.
     * @param {Function} predicate The function invoked per property.
     * @returns {Object} Returns the new object.
     */
function Jr(e,t,n){for(var r=-1,i=t.length,o={};++r<i;){var a=t[r],u=sr(e,a);n(u,a)&&si(o,Ci(a,e),u)}return o}/**
     * A specialized version of `baseProperty` which supports deep paths.
     *
     * @private
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     */
function Kr(e){return function(t){return sr(t,e)}}/**
     * The base implementation of `_.pullAllBy` without support for iteratee
     * shorthands.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     */
function ei(e,t,n,r){var i=r?k:S,o=-1,a=t.length,u=e;for(e===t&&(t=Ii(t)),n&&(u=g(e,F(n)));++o<a;)for(var s=0,l=t[o],c=n?n(l):l;(s=i(u,c,s,r))>-1;)u!==e&&Dc.call(u,s,1),Dc.call(e,s,1);return e}/**
     * The base implementation of `_.pullAt` without support for individual
     * indexes or capturing the removed elements.
     *
     * @private
     * @param {Array} array The array to modify.
     * @param {number[]} indexes The indexes of elements to remove.
     * @returns {Array} Returns `array`.
     */
function ti(e,t){for(var n=e?t.length:0,r=n-1;n--;){var i=t[n];if(n==r||i!==o){var o=i;Vo(i)?Dc.call(e,i,1):mi(e,i)}}return e}/**
     * The base implementation of `_.random` without support for returning
     * floating-point numbers.
     *
     * @private
     * @param {number} lower The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the random number.
     */
function ni(e,t){return e+Mc(Kc()*(t-e+1))}/**
     * The base implementation of `_.range` and `_.rangeRight` which doesn't
     * coerce arguments.
     *
     * @private
     * @param {number} start The start of the range.
     * @param {number} end The end of the range.
     * @param {number} step The value to increment or decrement by.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the range of numbers.
     */
function ri(e,t,n,r){for(var i=-1,o=Yc(Wc((t-e)/(n||1)),0),a=ac(o);o--;)a[r?o:++i]=e,e+=n;return a}/**
     * The base implementation of `_.repeat` which doesn't coerce arguments.
     *
     * @private
     * @param {string} string The string to repeat.
     * @param {number} n The number of times to repeat the string.
     * @returns {string} Returns the repeated string.
     */
function ii(e,t){var n="";if(!e||t<1||t>Fe)return n;
// Leverage the exponentiation by squaring algorithm for a faster repeat.
// See https://en.wikipedia.org/wiki/Exponentiation_by_squaring for more details.
do t%2&&(n+=e),t=Mc(t/2),t&&(e+=e);while(t);return n}/**
     * The base implementation of `_.rest` which doesn't validate or coerce arguments.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     */
function oi(e,t){return Ff(Zo(e,t,Dl),e+"")}/**
     * The base implementation of `_.sample`.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     */
function ai(e){return An(rl(e))}/**
     * The base implementation of `_.sampleSize` without param guards.
     *
     * @private
     * @param {Array|Object} collection The collection to sample.
     * @param {number} n The number of elements to sample.
     * @returns {Array} Returns the random elements.
     */
function ui(e,t){var n=rl(e);return na(n,Hn(t,0,n.length))}/**
     * The base implementation of `_.set`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
function si(e,t,n,r){if(!ss(e))return e;t=Ci(t,e);for(var i=-1,o=t.length,a=o-1,u=e;null!=u&&++i<o;){var s=ra(t[i]),l=n;if(i!=a){var c=u[s];l=r?r(c,s,u):ie,l===ie&&(l=ss(c)?c:Vo(t[i+1])?[]:{})}On(u,s,l),u=u[s]}return e}/**
     * The base implementation of `_.shuffle`.
     *
     * @private
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     */
function li(e){return na(rl(e))}/**
     * The base implementation of `_.slice` without an iteratee call guard.
     *
     * @private
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
function ci(e,t,n){var r=-1,i=e.length;t<0&&(t=-t>i?0:i+t),n=n>i?i:n,n<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var o=ac(i);++r<i;)o[r]=e[r+t];return o}/**
     * The base implementation of `_.some` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} predicate The function invoked per iteration.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     */
function fi(e,t){var n;return bf(e,function(e,r,i){return n=t(e,r,i),!n}),!!n}/**
     * The base implementation of `_.sortedIndex` and `_.sortedLastIndex` which
     * performs a binary search of `array` to determine the index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
function pi(e,t,n){var r=0,i=null==e?r:e.length;if("number"==typeof t&&t===t&&i<=Ie){for(;r<i;){var o=r+i>>>1,a=e[o];null!==a&&!xs(a)&&(n?a<=t:a<t)?r=o+1:i=o}return i}return di(e,t,Dl,n)}/**
     * The base implementation of `_.sortedIndexBy` and `_.sortedLastIndexBy`
     * which invokes `iteratee` for `value` and each element of `array` to compute
     * their sort ranking. The iteratee is invoked with one argument; (value).
     *
     * @private
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} iteratee The iteratee invoked per element.
     * @param {boolean} [retHighest] Specify returning the highest qualified index.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     */
function di(e,t,n,r){t=n(t);for(var i=0,o=null==e?0:e.length,a=t!==t,u=null===t,s=xs(t),l=t===ie;i<o;){var c=Mc((i+o)/2),f=n(e[c]),p=f!==ie,d=null===f,h=f===f,g=xs(f);if(a)var v=r||h;else v=l?h&&(r||p):u?h&&p&&(r||!d):s?h&&p&&!d&&(r||!g):!d&&!g&&(r?f<=t:f<t);v?i=c+1:o=c}return Qc(o,He)}/**
     * The base implementation of `_.sortedUniq` and `_.sortedUniqBy` without
     * support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
function hi(e,t){for(var n=-1,r=e.length,i=0,o=[];++n<r;){var a=e[n],u=t?t(a):a;if(!n||!Yu(u,s)){var s=u;o[i++]=0===a?0:a}}return o}/**
     * The base implementation of `_.toNumber` which doesn't ensure correct
     * conversions of binary, hexadecimal, or octal string values.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     */
function gi(e){return"number"==typeof e?e:xs(e)?Re:+e}/**
     * The base implementation of `_.toString` which doesn't convert nullish
     * values to empty strings.
     *
     * @private
     * @param {*} value The value to process.
     * @returns {string} Returns the string.
     */
function vi(e){
// Exit early for strings to avoid a performance hit in some environments.
if("string"==typeof e)return e;if(wp(e))
// Recursively convert values (susceptible to call stack limits).
return g(e,vi)+"";if(xs(e))return yf?yf.call(e):"";var t=e+"";return"0"==t&&1/e==-De?"-0":t}/**
     * The base implementation of `_.uniqBy` without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     */
function yi(e,t,n){var r=-1,i=d,o=e.length,a=!0,u=[],s=u;if(n)a=!1,i=h;else if(o>=ae){var l=t?null:jf(e);if(l)return Y(l);a=!1,i=R,s=new mn}else s=t?[]:u;e:for(;++r<o;){var c=e[r],f=t?t(c):c;if(c=n||0!==c?c:0,a&&f===f){for(var p=s.length;p--;)if(s[p]===f)continue e;t&&s.push(f),u.push(c)}else i(s,f,n)||(s!==u&&s.push(f),u.push(c))}return u}/**
     * The base implementation of `_.unset`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The property path to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     */
function mi(e,t){return t=Ci(t,e),e=Jo(e,t),null==e||delete e[ra(ka(t))]}/**
     * The base implementation of `_.update`.
     *
     * @private
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to update.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize path creation.
     * @returns {Object} Returns `object`.
     */
function bi(e,t,n,r){return si(e,t,n(sr(e,t)),r)}/**
     * The base implementation of methods like `_.dropWhile` and `_.takeWhile`
     * without support for iteratee shorthands.
     *
     * @private
     * @param {Array} array The array to query.
     * @param {Function} predicate The function invoked per iteration.
     * @param {boolean} [isDrop] Specify dropping elements instead of taking them.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Array} Returns the slice of `array`.
     */
function xi(e,t,n,r){for(var i=e.length,o=r?i:-1;(r?o--:++o<i)&&t(e[o],o,e););return n?ci(e,r?0:o,r?o+1:i):ci(e,r?o+1:0,r?i:o)}/**
     * The base implementation of `wrapperValue` which returns the result of
     * performing a sequence of actions on the unwrapped `value`, where each
     * successive action is supplied the return value of the previous.
     *
     * @private
     * @param {*} value The unwrapped value.
     * @param {Array} actions Actions to perform to resolve the unwrapped value.
     * @returns {*} Returns the resolved value.
     */
function wi(e,t){var n=e;return n instanceof x&&(n=n.value()),y(t,function(e,t){return t.func.apply(t.thisArg,v([e],t.args))},n)}/**
     * The base implementation of methods like `_.xor`, without support for
     * iteratee shorthands, that accepts an array of arrays to inspect.
     *
     * @private
     * @param {Array} arrays The arrays to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new array of values.
     */
function _i(e,t,n){var r=e.length;if(r<2)return r?yi(e[0]):[];for(var i=-1,o=ac(r);++i<r;)for(var a=e[i],u=-1;++u<r;)u!=i&&(o[i]=Un(o[i]||a,e[u],t,n));return yi(tr(o,1),t,n)}/**
     * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
     *
     * @private
     * @param {Array} props The property identifiers.
     * @param {Array} values The property values.
     * @param {Function} assignFunc The function to assign values.
     * @returns {Object} Returns the new object.
     */
function Ti(e,t,n){for(var r=-1,i=e.length,o=t.length,a={};++r<i;){var u=r<o?t[r]:ie;n(a,e[r],u)}return a}/**
     * Casts `value` to an empty array if it's not an array like object.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Array|Object} Returns the cast array-like object.
     */
function Si(e){return Zu(e)?e:[]}/**
     * Casts `value` to `identity` if it's not a function.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {Function} Returns cast function.
     */
function ki(e){return"function"==typeof e?e:Dl}/**
     * Casts `value` to a path array if it's not one.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {Object} [object] The object to query keys on.
     * @returns {Array} Returns the cast property path array.
     */
function Ci(e,t){return wp(e)?e:Io(e,t)?[e]:qf(Ns(e))}/**
     * Casts `array` to a slice if it's needed.
     *
     * @private
     * @param {Array} array The array to inspect.
     * @param {number} start The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the cast slice.
     */
function ji(e,t,n){var r=e.length;return n=n===ie?r:n,!t&&n>=r?e:ci(e,t,n)}/**
     * Creates a clone of  `buffer`.
     *
     * @private
     * @param {Buffer} buffer The buffer to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Buffer} Returns the cloned buffer.
     */
function Ai(e,t){if(t)return e.slice();var n=e.length,r=Pc?Pc(n):new e.constructor(n);return e.copy(r),r}/**
     * Creates a clone of `arrayBuffer`.
     *
     * @private
     * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
     * @returns {ArrayBuffer} Returns the cloned array buffer.
     */
function Ei(e){var t=new e.constructor(e.byteLength);return new Ec(t).set(new Ec(e)),t}/**
     * Creates a clone of `dataView`.
     *
     * @private
     * @param {Object} dataView The data view to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned data view.
     */
function Pi(e,t){var n=t?Ei(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}/**
     * Creates a clone of `map`.
     *
     * @private
     * @param {Object} map The map to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned map.
     */
function Ni(e,t,n){var r=t?n(U(e),pe):U(e);return y(r,o,new e.constructor)}/**
     * Creates a clone of `regexp`.
     *
     * @private
     * @param {Object} regexp The regexp to clone.
     * @returns {Object} Returns the cloned regexp.
     */
function Oi(e){var t=new e.constructor(e.source,Ut.exec(e));return t.lastIndex=e.lastIndex,t}/**
     * Creates a clone of `set`.
     *
     * @private
     * @param {Object} set The set to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned set.
     */
function Li(e,t,n){var r=t?n(Y(e),pe):Y(e);return y(r,a,new e.constructor)}/**
     * Creates a clone of the `symbol` object.
     *
     * @private
     * @param {Object} symbol The symbol object to clone.
     * @returns {Object} Returns the cloned symbol object.
     */
function Di(e){return vf?fc(vf.call(e)):{}}/**
     * Creates a clone of `typedArray`.
     *
     * @private
     * @param {Object} typedArray The typed array to clone.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the cloned typed array.
     */
function Fi(e,t){var n=t?Ei(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}/**
     * Compares values to sort them in ascending order.
     *
     * @private
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {number} Returns the sort order indicator for `value`.
     */
function qi(e,t){if(e!==t){var n=e!==ie,r=null===e,i=e===e,o=xs(e),a=t!==ie,u=null===t,s=t===t,l=xs(t);if(!u&&!l&&!o&&e>t||o&&a&&s&&!u&&!l||r&&a&&s||!n&&s||!i)return 1;if(!r&&!o&&!l&&e<t||l&&n&&i&&!r&&!o||u&&n&&i||!a&&i||!s)return-1}return 0}/**
     * Used by `_.orderBy` to compare multiple properties of a value to another
     * and stable sort them.
     *
     * If `orders` is unspecified, all values are sorted in ascending order. Otherwise,
     * specify an order of "desc" for descending or "asc" for ascending sort order
     * of corresponding values.
     *
     * @private
     * @param {Object} object The object to compare.
     * @param {Object} other The other object to compare.
     * @param {boolean[]|string[]} orders The order to sort by for each property.
     * @returns {number} Returns the sort order indicator for `object`.
     */
function Ri(e,t,n){for(var r=-1,i=e.criteria,o=t.criteria,a=i.length,u=n.length;++r<a;){var s=qi(i[r],o[r]);if(s){if(r>=u)return s;var l=n[r];return s*("desc"==l?-1:1)}}
// Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
// that causes it, under certain circumstances, to provide the same value for
// `object` and `other`. See https://github.com/jashkenas/underscore/pull/1247
// for more details.
//
// This also ensures a stable sort in V8 and other engines.
// See https://bugs.chromium.org/p/v8/issues/detail?id=90 for more details.
return e.index-t.index}/**
     * Creates an array that is the composition of partially applied arguments,
     * placeholders, and provided arguments into a single array of arguments.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to prepend to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
function Vi(e,t,n,r){for(var i=-1,o=e.length,a=n.length,u=-1,s=t.length,l=Yc(o-a,0),c=ac(s+l),f=!r;++u<s;)c[u]=t[u];for(;++i<a;)(f||i<o)&&(c[n[i]]=e[i]);for(;l--;)c[u++]=e[i++];return c}/**
     * This function is like `composeArgs` except that the arguments composition
     * is tailored for `_.partialRight`.
     *
     * @private
     * @param {Array} args The provided arguments.
     * @param {Array} partials The arguments to append to those provided.
     * @param {Array} holders The `partials` placeholder indexes.
     * @params {boolean} [isCurried] Specify composing for a curried function.
     * @returns {Array} Returns the new array of composed arguments.
     */
function Hi(e,t,n,r){for(var i=-1,o=e.length,a=-1,u=n.length,s=-1,l=t.length,c=Yc(o-u,0),f=ac(c+l),p=!r;++i<c;)f[i]=e[i];for(var d=i;++s<l;)f[d+s]=t[s];for(;++a<u;)(p||i<o)&&(f[d+n[a]]=e[i++]);return f}/**
     * Copies the values of `source` to `array`.
     *
     * @private
     * @param {Array} source The array to copy values from.
     * @param {Array} [array=[]] The array to copy values to.
     * @returns {Array} Returns `array`.
     */
function Ii(e,t){var n=-1,r=e.length;for(t||(t=ac(r));++n<r;)t[n]=e[n];return t}/**
     * Copies properties of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy properties from.
     * @param {Array} props The property identifiers to copy.
     * @param {Object} [object={}] The object to copy properties to.
     * @param {Function} [customizer] The function to customize copied values.
     * @returns {Object} Returns `object`.
     */
function zi(e,t,n,r){var i=!n;n||(n={});for(var o=-1,a=t.length;++o<a;){var u=t[o],s=r?r(n[u],e[u],u,n,e):ie;s===ie&&(s=e[u]),i?Rn(n,u,s):On(n,u,s)}return n}/**
     * Copies own symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
function Wi(e,t){return zi(e,Ef(e),t)}/**
     * Copies own and inherited symbols of `source` to `object`.
     *
     * @private
     * @param {Object} source The object to copy symbols from.
     * @param {Object} [object={}] The object to copy symbols to.
     * @returns {Object} Returns `object`.
     */
function Mi(e,t){return zi(e,Pf(e),t)}/**
     * Creates a function like `_.groupBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} [initializer] The accumulator object initializer.
     * @returns {Function} Returns the new aggregator function.
     */
function Bi(e,t){return function(n,r){var i=wp(n)?s:Dn,o=t?t():{};return i(n,e,ko(r,2),o)}}/**
     * Creates a function like `_.assign`.
     *
     * @private
     * @param {Function} assigner The function to assign values.
     * @returns {Function} Returns the new assigner function.
     */
function $i(e){return oi(function(t,n){var r=-1,i=n.length,o=i>1?n[i-1]:ie,a=i>2?n[2]:ie;for(o=e.length>3&&"function"==typeof o?(i--,o):ie,a&&Ho(n[0],n[1],a)&&(o=i<3?ie:o,i=1),t=fc(t);++r<i;){var u=n[r];u&&e(t,u,r,o)}return t})}/**
     * Creates a `baseEach` or `baseEachRight` function.
     *
     * @private
     * @param {Function} eachFunc The function to iterate over a collection.
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
function Ui(e,t){return function(n,r){if(null==n)return n;if(!Qu(n))return e(n,r);for(var i=n.length,o=t?i:-1,a=fc(n);(t?o--:++o<i)&&r(a[o],o,a)!==!1;);return n}}/**
     * Creates a base function for methods like `_.forIn` and `_.forOwn`.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new base function.
     */
function Xi(e){return function(t,n,r){for(var i=-1,o=fc(t),a=r(t),u=a.length;u--;){var s=a[e?u:++i];if(n(o[s],s,o)===!1)break}return t}}/**
     * Creates a function that wraps `func` to invoke it with the optional `this`
     * binding of `thisArg`.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
function Gi(e,t,n){function r(){var t=this&&this!==ur&&this instanceof r?o:e;return t.apply(i?n:this,arguments)}var i=t&ye,o=Zi(e);return r}/**
     * Creates a function like `_.lowerFirst`.
     *
     * @private
     * @param {string} methodName The name of the `String` case method to use.
     * @returns {Function} Returns the new case function.
     */
function Yi(e){return function(t){t=Ns(t);var n=M(t)?ee(t):ie,r=n?n[0]:t.charAt(0),i=n?ji(n,1).join(""):t.slice(1);return r[e]()+i}}/**
     * Creates a function like `_.camelCase`.
     *
     * @private
     * @param {Function} callback The function to combine each word.
     * @returns {Function} Returns the new compounder function.
     */
function Qi(e){return function(t){return y(El(ll(t).replace(Mn,"")),e,"")}}/**
     * Creates a function that produces an instance of `Ctor` regardless of
     * whether it was invoked as part of a `new` expression or by `call` or `apply`.
     *
     * @private
     * @param {Function} Ctor The constructor to wrap.
     * @returns {Function} Returns the new wrapped function.
     */
function Zi(e){return function(){
// Use a `switch` statement to work with class constructors. See
// http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
// for more details.
var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=mf(e.prototype),r=e.apply(n,t);
// Mimic the constructor's `return` behavior.
// See https://es5.github.io/#x13.2.2 for more details.
return ss(r)?r:n}}/**
     * Creates a function that wraps `func` to enable currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {number} arity The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
function Ji(e,t,n){function r(){for(var o=arguments.length,a=ac(o),s=o,l=So(r);s--;)a[s]=arguments[s];var c=o<3&&a[0]!==l&&a[o-1]!==l?[]:G(a,l);if(o-=c.length,o<n)return lo(e,t,to,r.placeholder,ie,a,c,ie,ie,n-o);var f=this&&this!==ur&&this instanceof r?i:e;return u(f,this,a)}var i=Zi(e);return r}/**
     * Creates a `_.find` or `_.findLast` function.
     *
     * @private
     * @param {Function} findIndexFunc The function to find the collection index.
     * @returns {Function} Returns the new find function.
     */
function Ki(e){return function(t,n,r){var i=fc(t);if(!Qu(t)){var o=ko(n,3);t=Bs(t),n=function(e){return o(i[e],e,i)}}var a=e(t,n,r);return a>-1?i[o?t[a]:a]:ie}}/**
     * Creates a `_.flow` or `_.flowRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new flow function.
     */
function eo(e){return xo(function(t){var n=t.length,r=n,o=i.prototype.thru;for(e&&t.reverse();r--;){var a=t[r];if("function"!=typeof a)throw new hc(se);if(o&&!u&&"wrapper"==To(a))var u=new i([],!0)}for(r=u?r:n;++r<n;){a=t[r];var s=To(a),l="wrapper"==s?Af(a):ie;u=l&&Wo(l[0])&&l[1]==(Se|xe|_e|ke)&&!l[4].length&&1==l[9]?u[To(l[0])].apply(u,l[3]):1==a.length&&Wo(a)?u[s]():u.thru(a)}return function(){var e=arguments,r=e[0];if(u&&1==e.length&&wp(r))return u.plant(r).value();for(var i=0,o=n?t[i].apply(this,e):r;++i<n;)o=t[i].call(this,o);return o}})}/**
     * Creates a function that wraps `func` to invoke it with optional `this`
     * binding of `thisArg`, partial application, and currying.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [partialsRight] The arguments to append to those provided
     *  to the new function.
     * @param {Array} [holdersRight] The `partialsRight` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
function to(e,t,n,r,i,o,a,u,s,l){function c(){for(var y=arguments.length,m=ac(y),b=y;b--;)m[b]=arguments[b];if(h)var x=So(c),w=I(m,x);if(r&&(m=Vi(m,r,i,h)),o&&(m=Hi(m,o,a,h)),y-=w,h&&y<l){var _=G(m,x);return lo(e,t,to,c.placeholder,n,m,_,u,s,l-y)}var T=p?n:this,S=d?T[e]:e;return y=m.length,u?m=Ko(m,u):g&&y>1&&m.reverse(),f&&s<y&&(m.length=s),this&&this!==ur&&this instanceof c&&(S=v||Zi(S)),S.apply(T,m)}var f=t&Se,p=t&ye,d=t&me,h=t&(xe|we),g=t&Ce,v=d?ie:Zi(e);return c}/**
     * Creates a function like `_.invertBy`.
     *
     * @private
     * @param {Function} setter The function to set accumulator values.
     * @param {Function} toIteratee The function to resolve iteratees.
     * @returns {Function} Returns the new inverter function.
     */
function no(e,t){return function(n,r){return jr(n,e,t(r),{})}}/**
     * Creates a function that performs a mathematical operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @param {number} [defaultValue] The value used for `undefined` arguments.
     * @returns {Function} Returns the new mathematical operation function.
     */
function ro(e,t){return function(n,r){var i;if(n===ie&&r===ie)return t;if(n!==ie&&(i=n),r!==ie){if(i===ie)return r;"string"==typeof n||"string"==typeof r?(n=vi(n),r=vi(r)):(n=gi(n),r=gi(r)),i=e(n,r)}return i}}/**
     * Creates a function like `_.over`.
     *
     * @private
     * @param {Function} arrayFunc The function to iterate over iteratees.
     * @returns {Function} Returns the new over function.
     */
function io(e){return xo(function(t){return t=g(t,F(ko())),oi(function(n){var r=this;return e(t,function(e){return u(e,r,n)})})})}/**
     * Creates the padding for `string` based on `length`. The `chars` string
     * is truncated if the number of characters exceeds `length`.
     *
     * @private
     * @param {number} length The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padding for `string`.
     */
function oo(e,t){t=t===ie?" ":vi(t);var n=t.length;if(n<2)return n?ii(t,e):t;var r=ii(t,Wc(e/K(t)));return M(t)?ji(ee(r),0,e).join(""):r.slice(0,e)}/**
     * Creates a function that wraps `func` to invoke it with the `this` binding
     * of `thisArg` and `partials` prepended to the arguments it receives.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {*} thisArg The `this` binding of `func`.
     * @param {Array} partials The arguments to prepend to those provided to
     *  the new function.
     * @returns {Function} Returns the new wrapped function.
     */
function ao(e,t,n,r){function i(){for(var t=-1,s=arguments.length,l=-1,c=r.length,f=ac(c+s),p=this&&this!==ur&&this instanceof i?a:e;++l<c;)f[l]=r[l];for(;s--;)f[l++]=arguments[++t];return u(p,o?n:this,f)}var o=t&ye,a=Zi(e);return i}/**
     * Creates a `_.range` or `_.rangeRight` function.
     *
     * @private
     * @param {boolean} [fromRight] Specify iterating from right to left.
     * @returns {Function} Returns the new range function.
     */
function uo(e){return function(t,n,r){
// Ensure the sign of `-0` is preserved.
return r&&"number"!=typeof r&&Ho(t,n,r)&&(n=r=ie),t=ks(t),n===ie?(n=t,t=0):n=ks(n),r=r===ie?t<n?1:-1:ks(r),ri(t,n,r,e)}}/**
     * Creates a function that performs a relational operation on two values.
     *
     * @private
     * @param {Function} operator The function to perform the operation.
     * @returns {Function} Returns the new relational operation function.
     */
function so(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=As(t),n=As(n)),e(t,n)}}/**
     * Creates a function that wraps `func` to continue currying.
     *
     * @private
     * @param {Function} func The function to wrap.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @param {Function} wrapFunc The function to create the `func` wrapper.
     * @param {*} placeholder The placeholder value.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to prepend to those provided to
     *  the new function.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
function lo(e,t,n,r,i,o,a,u,s,l){var c=t&xe,f=c?a:ie,p=c?ie:a,d=c?o:ie,h=c?ie:o;t|=c?_e:Te,t&=~(c?Te:_e),t&be||(t&=~(ye|me));var g=[e,t,i,d,f,h,p,u,s,l],v=n.apply(ie,g);return Wo(e)&&Lf(v,g),v.placeholder=r,ea(v,e,t)}/**
     * Creates a function like `_.round`.
     *
     * @private
     * @param {string} methodName The name of the `Math` method to use when rounding.
     * @returns {Function} Returns the new round function.
     */
function co(e){var t=cc[e];return function(e,n){if(e=As(e),n=null==n?0:Qc(Cs(n),292)){
// Shift with exponential notation to avoid floating-point issues.
// See [MDN](https://mdn.io/round#Examples) for more details.
var r=(Ns(e)+"e").split("e"),i=t(r[0]+"e"+(+r[1]+n));return r=(Ns(i)+"e").split("e"),+(r[0]+"e"+(+r[1]-n))}return t(e)}}/**
     * Creates a `_.toPairs` or `_.toPairsIn` function.
     *
     * @private
     * @param {Function} keysFunc The function to get the keys of a given object.
     * @returns {Function} Returns the new pairs function.
     */
function fo(e){return function(t){var n=Nf(t);return n==Ze?U(t):n==it?Q(t):D(t,e(t))}}/**
     * Creates a function that either curries or invokes `func` with optional
     * `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to wrap.
     * @param {number} bitmask The bitmask flags.
     *    1 - `_.bind`
     *    2 - `_.bindKey`
     *    4 - `_.curry` or `_.curryRight` of a bound function
     *    8 - `_.curry`
     *   16 - `_.curryRight`
     *   32 - `_.partial`
     *   64 - `_.partialRight`
     *  128 - `_.rearg`
     *  256 - `_.ary`
     *  512 - `_.flip`
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {Array} [partials] The arguments to be partially applied.
     * @param {Array} [holders] The `partials` placeholder indexes.
     * @param {Array} [argPos] The argument positions of the new function.
     * @param {number} [ary] The arity cap of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new wrapped function.
     */
function po(e,t,n,r,i,o,a,u){var s=t&me;if(!s&&"function"!=typeof e)throw new hc(se);var l=r?r.length:0;if(l||(t&=~(_e|Te),r=i=ie),a=a===ie?a:Yc(Cs(a),0),u=u===ie?u:Cs(u),l-=i?i.length:0,t&Te){var c=r,f=i;r=i=ie}var p=s?ie:Af(e),d=[e,t,n,r,i,c,f,o,a,u];if(p&&Go(d,p),e=d[0],t=d[1],n=d[2],r=d[3],i=d[4],u=d[9]=d[9]===ie?s?0:e.length:Yc(d[9]-l,0),!u&&t&(xe|we)&&(t&=~(xe|we)),t&&t!=ye)h=t==xe||t==we?Ji(e,t,u):t!=_e&&t!=(ye|_e)||i.length?to.apply(ie,d):ao(e,t,n,r);else var h=Gi(e,t,n);var g=p?Tf:Lf;return ea(g(h,d),e,t)}/**
     * Used by `_.defaults` to customize its `_.assignIn` use to assign properties
     * of source objects to the destination object for all destination properties
     * that resolve to `undefined`.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to assign.
     * @param {Object} object The parent object of `objValue`.
     * @returns {*} Returns the value to assign.
     */
function ho(e,t,n,r){return e===ie||Yu(e,yc[n])&&!xc.call(r,n)?t:e}/**
     * Used by `_.defaultsDeep` to customize its `_.merge` use to merge source
     * objects into destination objects that are passed thru.
     *
     * @private
     * @param {*} objValue The destination value.
     * @param {*} srcValue The source value.
     * @param {string} key The key of the property to merge.
     * @param {Object} object The parent object of `objValue`.
     * @param {Object} source The parent object of `srcValue`.
     * @param {Object} [stack] Tracks traversed source values and their merged
     *  counterparts.
     * @returns {*} Returns the value to assign.
     */
function go(e,t,n,r,i,o){
// Recursively merge objects and arrays (susceptible to call stack limits).
return ss(e)&&ss(t)&&(o.set(t,e),Xr(e,t,ie,go,o),o.delete(t)),e}/**
     * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
     * objects.
     *
     * @private
     * @param {*} value The value to inspect.
     * @param {string} key The key of the property to inspect.
     * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
     */
function vo(e){return ys(e)?ie:e}/**
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
function yo(e,t,n,r,i,o){var a=n&ge,u=e.length,s=t.length;if(u!=s&&!(a&&s>u))return!1;
// Assume cyclic values are equal.
var l=o.get(e);if(l&&o.get(t))return l==t;var c=-1,f=!0,p=n&ve?new mn:ie;
// Ignore non-index properties.
for(o.set(e,t),o.set(t,e);++c<u;){var d=e[c],h=t[c];if(r)var g=a?r(h,d,c,t,e,o):r(d,h,c,e,t,o);if(g!==ie){if(g)continue;f=!1;break}
// Recursively compare arrays (susceptible to call stack limits).
if(p){if(!b(t,function(e,t){if(!R(p,t)&&(d===e||i(d,e,n,r,o)))return p.push(t)})){f=!1;break}}else if(d!==h&&!i(d,h,n,r,o)){f=!1;break}}return o.delete(e),o.delete(t),f}/**
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
function mo(e,t,n,r,i,o,a){switch(n){case ft:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case ct:return!(e.byteLength!=t.byteLength||!o(new Ec(e),new Ec(t)));case $e:case Ue:case Je:
// Coerce booleans to `1` or `0` and dates to milliseconds.
// Invalid dates are coerced to `NaN`.
return Yu(+e,+t);case Ge:return e.name==t.name&&e.message==t.message;case rt:case ot:
// Coerce regexes to strings and treat strings, primitives and objects,
// as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
// for more details.
return e==t+"";case Ze:var u=U;case it:var s=r&ge;if(u||(u=Y),e.size!=t.size&&!s)return!1;
// Assume cyclic values are equal.
var l=a.get(e);if(l)return l==t;r|=ve,
// Recursively compare objects (susceptible to call stack limits).
a.set(e,t);var c=yo(u(e),u(t),r,i,o,a);return a.delete(e),c;case at:if(vf)return vf.call(e)==vf.call(t)}return!1}/**
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
function bo(e,t,n,r,i,o){var a=n&ge,u=wo(e),s=u.length,l=wo(t),c=l.length;if(s!=c&&!a)return!1;for(var f=s;f--;){var p=u[f];if(!(a?p in t:xc.call(t,p)))return!1}
// Assume cyclic values are equal.
var d=o.get(e);if(d&&o.get(t))return d==t;var h=!0;o.set(e,t),o.set(t,e);for(var g=a;++f<s;){p=u[f];var v=e[p],y=t[p];if(r)var m=a?r(y,v,p,t,e,o):r(v,y,p,e,t,o);
// Recursively compare objects (susceptible to call stack limits).
if(!(m===ie?v===y||i(v,y,n,r,o):m)){h=!1;break}g||(g="constructor"==p)}if(h&&!g){var b=e.constructor,x=t.constructor;
// Non `Object` object instances with different constructors are not equal.
b!=x&&"constructor"in e&&"constructor"in t&&!("function"==typeof b&&b instanceof b&&"function"==typeof x&&x instanceof x)&&(h=!1)}return o.delete(e),o.delete(t),h}/**
     * A specialized version of `baseRest` which flattens the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @returns {Function} Returns the new function.
     */
function xo(e){return Ff(Zo(e,ie,ya),e+"")}/**
     * Creates an array of own enumerable property names and symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
function wo(e){return lr(e,Bs,Ef)}/**
     * Creates an array of own and inherited enumerable property names and
     * symbols of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names and symbols.
     */
function _o(e){return lr(e,$s,Pf)}/**
     * Gets the name of `func`.
     *
     * @private
     * @param {Function} func The function to query.
     * @returns {string} Returns the function name.
     */
function To(e){for(var t=e.name+"",n=lf[t],r=xc.call(lf,t)?n.length:0;r--;){var i=n[r],o=i.func;if(null==o||o==e)return i.name}return t}/**
     * Gets the argument placeholder value for `func`.
     *
     * @private
     * @param {Function} func The function to inspect.
     * @returns {*} Returns the placeholder value.
     */
function So(e){var t=xc.call(n,"placeholder")?n:e;return t.placeholder}/**
     * Gets the appropriate "iteratee" function. If `_.iteratee` is customized,
     * this function returns the custom method, otherwise it returns `baseIteratee`.
     * If arguments are provided, the chosen function is invoked with them and
     * its result is returned.
     *
     * @private
     * @param {*} [value] The value to convert to an iteratee.
     * @param {number} [arity] The arity of the created iteratee.
     * @returns {Function} Returns the chosen function or its result.
     */
function ko(){var e=n.iteratee||Fl;return e=e===Fl?Ir:e,arguments.length?e(arguments[0],arguments[1]):e}/**
     * Gets the data for `map`.
     *
     * @private
     * @param {Object} map The map to query.
     * @param {string} key The reference key.
     * @returns {*} Returns the map data.
     */
function Co(e,t){var n=e.__data__;return zo(t)?n["string"==typeof t?"string":"hash"]:n.map}/**
     * Gets the property names, values, and compare flags of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the match data of `object`.
     */
function jo(e){for(var t=Bs(e),n=t.length;n--;){var r=t[n],i=e[r];t[n]=[r,i,$o(i)]}return t}/**
     * Gets the native function at `key` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {string} key The key of the method to get.
     * @returns {*} Returns the function if it's native, else `undefined`.
     */
function Ao(e,t){var n=W(e,t);return qr(n)?n:ie}/**
     * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
     *
     * @private
     * @param {*} value The value to query.
     * @returns {string} Returns the raw `toStringTag`.
     */
function Eo(e){var t=xc.call(e,Rc),n=e[Rc];try{e[Rc]=ie;var r=!0}catch(e){}var i=Tc.call(e);return r&&(t?e[Rc]=n:delete e[Rc]),i}/**
     * Gets the view, applying any `transforms` to the `start` and `end` positions.
     *
     * @private
     * @param {number} start The start of the view.
     * @param {number} end The end of the view.
     * @param {Array} transforms The transformations to apply to the view.
     * @returns {Object} Returns an object containing the `start` and `end`
     *  positions of the view.
     */
function Po(e,t,n){for(var r=-1,i=n.length;++r<i;){var o=n[r],a=o.size;switch(o.type){case"drop":e+=a;break;case"dropRight":t-=a;break;case"take":t=Qc(t,e+a);break;case"takeRight":e=Yc(e,t-a)}}return{start:e,end:t}}/**
     * Extracts wrapper details from the `source` body comment.
     *
     * @private
     * @param {string} source The source to inspect.
     * @returns {Array} Returns the wrapper details.
     */
function No(e){var t=e.match(zt);return t?t[1].split(Wt):[]}/**
     * Checks if `path` exists on `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @param {Function} hasFunc The function to check properties.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     */
function Oo(e,t,n){t=Ci(t,e);for(var r=-1,i=t.length,o=!1;++r<i;){var a=ra(t[r]);if(!(o=null!=e&&n(e,a)))break;e=e[a]}return o||++r!=i?o:(i=null==e?0:e.length,!!i&&us(i)&&Vo(a,i)&&(wp(e)||xp(e)))}/**
     * Initializes an array clone.
     *
     * @private
     * @param {Array} array The array to clone.
     * @returns {Array} Returns the initialized clone.
     */
function Lo(e){var t=e.length,n=e.constructor(t);
// Add properties assigned by `RegExp#exec`.
return t&&"string"==typeof e[0]&&xc.call(e,"index")&&(n.index=e.index,n.input=e.input),n}/**
     * Initializes an object clone.
     *
     * @private
     * @param {Object} object The object to clone.
     * @returns {Object} Returns the initialized clone.
     */
function Do(e){return"function"!=typeof e.constructor||Bo(e)?{}:mf(Nc(e))}/**
     * Initializes an object clone based on its `toStringTag`.
     *
     * **Note:** This function only supports cloning values with tags of
     * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
     *
     * @private
     * @param {Object} object The object to clone.
     * @param {string} tag The `toStringTag` of the object to clone.
     * @param {Function} cloneFunc The function to clone values.
     * @param {boolean} [isDeep] Specify a deep clone.
     * @returns {Object} Returns the initialized clone.
     */
function Fo(e,t,n,r){var i=e.constructor;switch(t){case ct:return Ei(e);case $e:case Ue:return new i(+e);case ft:return Pi(e,r);case pt:case dt:case ht:case gt:case vt:case yt:case mt:case bt:case xt:return Fi(e,r);case Ze:return Ni(e,r,n);case Je:case ot:return new i(e);case rt:return Oi(e);case it:return Li(e,r,n);case at:return Di(e)}}/**
     * Inserts wrapper `details` in a comment at the top of the `source` body.
     *
     * @private
     * @param {string} source The source to modify.
     * @returns {Array} details The details to insert.
     * @returns {string} Returns the modified source.
     */
function qo(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(It,"{\n/* [wrapped with "+t+"] */\n")}/**
     * Checks if `value` is a flattenable `arguments` object or array.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
     */
function Ro(e){return wp(e)||xp(e)||!!(Fc&&e&&e[Fc])}/**
     * Checks if `value` is a valid array-like index.
     *
     * @private
     * @param {*} value The value to check.
     * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
     * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
     */
function Vo(e,t){return t=null==t?Fe:t,!!t&&("number"==typeof e||Zt.test(e))&&e>-1&&e%1==0&&e<t}/**
     * Checks if the given arguments are from an iteratee call.
     *
     * @private
     * @param {*} value The potential iteratee value argument.
     * @param {*} index The potential iteratee index or key argument.
     * @param {*} object The potential iteratee object argument.
     * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
     *  else `false`.
     */
function Ho(e,t,n){if(!ss(n))return!1;var r=typeof t;return!!("number"==r?Qu(n)&&Vo(t,n.length):"string"==r&&t in n)&&Yu(n[t],e)}/**
     * Checks if `value` is a property name and not a property path.
     *
     * @private
     * @param {*} value The value to check.
     * @param {Object} [object] The object to query keys on.
     * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
     */
function Io(e,t){if(wp(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!xs(e))||(Ot.test(e)||!Nt.test(e)||null!=t&&e in fc(t))}/**
     * Checks if `value` is suitable for use as unique object key.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
     */
function zo(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}/**
     * Checks if `func` has a lazy counterpart.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` has a lazy counterpart,
     *  else `false`.
     */
function Wo(e){var t=To(e),r=n[t];if("function"!=typeof r||!(t in x.prototype))return!1;if(e===r)return!0;var i=Af(r);return!!i&&e===i[0]}/**
     * Checks if `func` has its source masked.
     *
     * @private
     * @param {Function} func The function to check.
     * @returns {boolean} Returns `true` if `func` is masked, else `false`.
     */
function Mo(e){return!!_c&&_c in e}/**
     * Checks if `value` is likely a prototype object.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
     */
function Bo(e){var t=e&&e.constructor,n="function"==typeof t&&t.prototype||yc;return e===n}/**
     * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` if suitable for strict
     *  equality comparisons, else `false`.
     */
function $o(e){return e===e&&!ss(e)}/**
     * A specialized version of `matchesProperty` for source values suitable
     * for strict equality comparisons, i.e. `===`.
     *
     * @private
     * @param {string} key The key of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     */
function Uo(e,t){return function(n){return null!=n&&(n[e]===t&&(t!==ie||e in fc(n)))}}/**
     * A specialized version of `_.memoize` which clears the memoized function's
     * cache when it exceeds `MAX_MEMOIZE_SIZE`.
     *
     * @private
     * @param {Function} func The function to have its output memoized.
     * @returns {Function} Returns the new memoized function.
     */
function Xo(e){var t=Fu(e,function(e){return n.size===ce&&n.clear(),e}),n=t.cache;return t}/**
     * Merges the function metadata of `source` into `data`.
     *
     * Merging metadata reduces the number of wrappers used to invoke a function.
     * This is possible because methods like `_.bind`, `_.curry`, and `_.partial`
     * may be applied regardless of execution order. Methods like `_.ary` and
     * `_.rearg` modify function arguments, making the order in which they are
     * executed important, preventing the merging of metadata. However, we make
     * an exception for a safe combined case where curried functions have `_.ary`
     * and or `_.rearg` applied.
     *
     * @private
     * @param {Array} data The destination metadata.
     * @param {Array} source The source metadata.
     * @returns {Array} Returns `data`.
     */
function Go(e,t){var n=e[1],r=t[1],i=n|r,o=i<(ye|me|Se),a=r==Se&&n==xe||r==Se&&n==ke&&e[7].length<=t[8]||r==(Se|ke)&&t[7].length<=t[8]&&n==xe;
// Exit early if metadata can't be merged.
if(!o&&!a)return e;
// Use source `thisArg` if available.
r&ye&&(e[2]=t[2],
// Set when currying a bound function.
i|=n&ye?0:be);
// Compose partial arguments.
var u=t[3];if(u){var s=e[3];e[3]=s?Vi(s,u,t[4]):u,e[4]=s?G(e[3],fe):t[4]}
// Compose partial right arguments.
// Use source `argPos` if available.
// Use source `ary` if it's smaller.
// Use source `arity` if one is not provided.
// Use source `func` and merge bitmasks.
return u=t[5],u&&(s=e[5],e[5]=s?Hi(s,u,t[6]):u,e[6]=s?G(e[5],fe):t[6]),u=t[7],u&&(e[7]=u),r&Se&&(e[8]=null==e[8]?t[8]:Qc(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=i,e}/**
     * This function is like
     * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
     * except that it includes inherited enumerable properties.
     *
     * @private
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property names.
     */
function Yo(e){var t=[];if(null!=e)for(var n in fc(e))t.push(n);return t}/**
     * Converts `value` to a string using `Object.prototype.toString`.
     *
     * @private
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     */
function Qo(e){return Tc.call(e)}/**
     * A specialized version of `baseRest` which transforms the rest array.
     *
     * @private
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @param {Function} transform The rest array transform.
     * @returns {Function} Returns the new function.
     */
function Zo(e,t,n){return t=Yc(t===ie?e.length-1:t,0),function(){for(var r=arguments,i=-1,o=Yc(r.length-t,0),a=ac(o);++i<o;)a[i]=r[t+i];i=-1;for(var s=ac(t+1);++i<t;)s[i]=r[i];return s[t]=n(a),u(e,this,s)}}/**
     * Gets the parent value at `path` of `object`.
     *
     * @private
     * @param {Object} object The object to query.
     * @param {Array} path The path to get the parent value of.
     * @returns {*} Returns the parent value.
     */
function Jo(e,t){return t.length<2?e:sr(e,ci(t,0,-1))}/**
     * Reorder `array` according to the specified indexes where the element at
     * the first index is assigned as the first element, the element at
     * the second index is assigned as the second element, and so on.
     *
     * @private
     * @param {Array} array The array to reorder.
     * @param {Array} indexes The arranged array indexes.
     * @returns {Array} Returns `array`.
     */
function Ko(e,t){for(var n=e.length,r=Qc(t.length,n),i=Ii(e);r--;){var o=t[r];e[r]=Vo(o,n)?i[o]:ie}return e}/**
     * Sets the `toString` method of `wrapper` to mimic the source of `reference`
     * with wrapper details in a comment at the top of the source body.
     *
     * @private
     * @param {Function} wrapper The function to modify.
     * @param {Function} reference The reference function.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Function} Returns `wrapper`.
     */
function ea(e,t,n){var r=t+"";return Ff(e,qo(r,oa(No(r),n)))}/**
     * Creates a function that'll short out and invoke `identity` instead
     * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
     * milliseconds.
     *
     * @private
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new shortable function.
     */
function ta(e){var t=0,n=0;return function(){var r=Zc(),i=Pe-(r-n);if(n=r,i>0){if(++t>=Ee)return arguments[0]}else t=0;return e.apply(ie,arguments)}}/**
     * A specialized version of `_.shuffle` which mutates and sets the size of `array`.
     *
     * @private
     * @param {Array} array The array to shuffle.
     * @param {number} [size=array.length] The size of `array`.
     * @returns {Array} Returns `array`.
     */
function na(e,t){var n=-1,r=e.length,i=r-1;for(t=t===ie?r:t;++n<t;){var o=ni(n,i),a=e[o];e[o]=e[n],e[n]=a}return e.length=t,e}/**
     * Converts `value` to a string key if it's not a string or symbol.
     *
     * @private
     * @param {*} value The value to inspect.
     * @returns {string|symbol} Returns the key.
     */
function ra(e){if("string"==typeof e||xs(e))return e;var t=e+"";return"0"==t&&1/e==-De?"-0":t}/**
     * Converts `func` to its source code.
     *
     * @private
     * @param {Function} func The function to convert.
     * @returns {string} Returns the source code.
     */
function ia(e){if(null!=e){try{return bc.call(e)}catch(e){}try{return e+""}catch(e){}}return""}/**
     * Updates wrapper `details` based on `bitmask` flags.
     *
     * @private
     * @returns {Array} details The details to modify.
     * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
     * @returns {Array} Returns `details`.
     */
function oa(e,t){return l(ze,function(n){var r="_."+n[0];t&n[1]&&!d(e,r)&&e.push(r)}),e.sort()}/**
     * Creates a clone of `wrapper`.
     *
     * @private
     * @param {Object} wrapper The wrapper to clone.
     * @returns {Object} Returns the cloned wrapper.
     */
function aa(e){if(e instanceof x)return e.clone();var t=new i(e.__wrapped__,e.__chain__);return t.__actions__=Ii(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}/*------------------------------------------------------------------------*/
/**
     * Creates an array of elements split into groups the length of `size`.
     * If `array` can't be split evenly, the final chunk will be the remaining
     * elements.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to process.
     * @param {number} [size=1] The length of each chunk
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the new array of chunks.
     * @example
     *
     * _.chunk(['a', 'b', 'c', 'd'], 2);
     * // => [['a', 'b'], ['c', 'd']]
     *
     * _.chunk(['a', 'b', 'c', 'd'], 3);
     * // => [['a', 'b', 'c'], ['d']]
     */
function ua(e,t,n){t=(n?Ho(e,t,n):t===ie)?1:Yc(Cs(t),0);var r=null==e?0:e.length;if(!r||t<1)return[];for(var i=0,o=0,a=ac(Wc(r/t));i<r;)a[o++]=ci(e,i,i+=t);return a}/**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are falsey.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to compact.
     * @returns {Array} Returns the new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
function sa(e){for(var t=-1,n=null==e?0:e.length,r=0,i=[];++t<n;){var o=e[t];o&&(i[r++]=o)}return i}/**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to concatenate.
     * @param {...*} [values] The values to concatenate.
     * @returns {Array} Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
function la(){var e=arguments.length;if(!e)return[];for(var t=ac(e-1),n=arguments[0],r=e;r--;)t[r-1]=arguments[r];return v(wp(n)?Ii(n):[n],tr(t,1))}/**
     * Creates a slice of `array` with `n` elements dropped from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.5.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.drop([1, 2, 3]);
     * // => [2, 3]
     *
     * _.drop([1, 2, 3], 2);
     * // => [3]
     *
     * _.drop([1, 2, 3], 5);
     * // => []
     *
     * _.drop([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
function ca(e,t,n){var r=null==e?0:e.length;return r?(t=n||t===ie?1:Cs(t),ci(e,t<0?0:t,r)):[]}/**
     * Creates a slice of `array` with `n` elements dropped from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to drop.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.dropRight([1, 2, 3]);
     * // => [1, 2]
     *
     * _.dropRight([1, 2, 3], 2);
     * // => [1]
     *
     * _.dropRight([1, 2, 3], 5);
     * // => []
     *
     * _.dropRight([1, 2, 3], 0);
     * // => [1, 2, 3]
     */
function fa(e,t,n){var r=null==e?0:e.length;return r?(t=n||t===ie?1:Cs(t),t=r-t,ci(e,0,t<0?0:t)):[]}/**
     * Creates a slice of `array` excluding elements dropped from the end.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.dropRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropRightWhile(users, ['active', false]);
     * // => objects for ['barney']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropRightWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
function pa(e,t){return e&&e.length?xi(e,ko(t,3),!0,!0):[]}/**
     * Creates a slice of `array` excluding elements dropped from the beginning.
     * Elements are dropped until `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.dropWhile(users, function(o) { return !o.active; });
     * // => objects for ['pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.dropWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.dropWhile(users, ['active', false]);
     * // => objects for ['pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.dropWhile(users, 'active');
     * // => objects for ['barney', 'fred', 'pebbles']
     */
function da(e,t){return e&&e.length?xi(e,ko(t,3),!0):[]}/**
     * Fills elements of `array` with `value` from `start` up to, but not
     * including, `end`.
     *
     * **Note:** This method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Array
     * @param {Array} array The array to fill.
     * @param {*} value The value to fill `array` with.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.fill(array, 'a');
     * console.log(array);
     * // => ['a', 'a', 'a']
     *
     * _.fill(Array(3), 2);
     * // => [2, 2, 2]
     *
     * _.fill([4, 6, 8, 10], '*', 1, 3);
     * // => [4, '*', '*', 10]
     */
function ha(e,t,n,r){var i=null==e?0:e.length;return i?(n&&"number"!=typeof n&&Ho(e,t,n)&&(n=0,r=i),Kn(e,t,n,r)):[]}/**
     * This method is like `_.find` except that it returns the index of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.findIndex(users, function(o) { return o.user == 'barney'; });
     * // => 0
     *
     * // The `_.matches` iteratee shorthand.
     * _.findIndex(users, { 'user': 'fred', 'active': false });
     * // => 1
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findIndex(users, ['active', false]);
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.findIndex(users, 'active');
     * // => 2
     */
function ga(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:Cs(n);return i<0&&(i=Yc(r+i,0)),T(e,ko(t,3),i)}/**
     * This method is like `_.findIndex` except that it iterates over elements
     * of `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.findLastIndex(users, function(o) { return o.user == 'pebbles'; });
     * // => 2
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastIndex(users, { 'user': 'barney', 'active': true });
     * // => 0
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastIndex(users, ['active', false]);
     * // => 2
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastIndex(users, 'active');
     * // => 0
     */
function va(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=r-1;return n!==ie&&(i=Cs(n),i=n<0?Yc(r+i,0):Qc(i,r-1)),T(e,ko(t,3),i,!0)}/**
     * Flattens `array` a single level deep.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flatten([1, [2, [3, [4]], 5]]);
     * // => [1, 2, [3, [4]], 5]
     */
function ya(e){var t=null==e?0:e.length;return t?tr(e,1):[]}/**
     * Recursively flattens `array`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * _.flattenDeep([1, [2, [3, [4]], 5]]);
     * // => [1, 2, 3, 4, 5]
     */
function ma(e){var t=null==e?0:e.length;return t?tr(e,De):[]}/**
     * Recursively flatten `array` up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Array
     * @param {Array} array The array to flatten.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * var array = [1, [2, [3, [4]], 5]];
     *
     * _.flattenDepth(array, 1);
     * // => [1, 2, [3, [4]], 5]
     *
     * _.flattenDepth(array, 2);
     * // => [1, 2, 3, [4], 5]
     */
function ba(e,t){var n=null==e?0:e.length;return n?(t=t===ie?1:Cs(t),tr(e,t)):[]}/**
     * The inverse of `_.toPairs`; this method returns an object composed
     * from key-value `pairs`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} pairs The key-value pairs.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.fromPairs([['a', 1], ['b', 2]]);
     * // => { 'a': 1, 'b': 2 }
     */
function xa(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var i=e[t];r[i[0]]=i[1]}return r}/**
     * Gets the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias first
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the first element of `array`.
     * @example
     *
     * _.head([1, 2, 3]);
     * // => 1
     *
     * _.head([]);
     * // => undefined
     */
function wa(e){return e&&e.length?e[0]:ie}/**
     * Gets the index at which the first occurrence of `value` is found in `array`
     * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons. If `fromIndex` is negative, it's used as the
     * offset from the end of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.indexOf([1, 2, 1, 2], 2);
     * // => 1
     *
     * // Search from the `fromIndex`.
     * _.indexOf([1, 2, 1, 2], 2, 2);
     * // => 3
     */
function _a(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=null==n?0:Cs(n);return i<0&&(i=Yc(r+i,0)),S(e,t,i)}/**
     * Gets all but the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     */
function Ta(e){var t=null==e?0:e.length;return t?ci(e,0,-1):[]}/**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to convert.
     * @param {string} [separator=','] The element separator.
     * @returns {string} Returns the joined string.
     * @example
     *
     * _.join(['a', 'b', 'c'], '~');
     * // => 'a~b~c'
     */
function Sa(e,t){return null==e?"":Xc.call(e,t)}/**
     * Gets the last element of `array`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {*} Returns the last element of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     */
function ka(e){var t=null==e?0:e.length;return t?e[t-1]:ie}/**
     * This method is like `_.indexOf` except that it iterates over elements of
     * `array` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 1, 2], 2);
     * // => 3
     *
     * // Search from the `fromIndex`.
     * _.lastIndexOf([1, 2, 1, 2], 2, 2);
     * // => 1
     */
function Ca(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var i=r;return n!==ie&&(i=Cs(n),i=i<0?Yc(r+i,0):Qc(i,r-1)),t===t?J(e,t,i):T(e,C,i,!0)}/**
     * Gets the element at index `n` of `array`. If `n` is negative, the nth
     * element from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.11.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=0] The index of the element to return.
     * @returns {*} Returns the nth element of `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'd'];
     *
     * _.nth(array, 1);
     * // => 'b'
     *
     * _.nth(array, -2);
     * // => 'c';
     */
function ja(e,t){return e&&e.length?Yr(e,Cs(t)):ie}/**
     * This method is like `_.pull` except that it accepts an array of values to remove.
     *
     * **Note:** Unlike `_.difference`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = ['a', 'b', 'c', 'a', 'b', 'c'];
     *
     * _.pullAll(array, ['a', 'c']);
     * console.log(array);
     * // => ['b', 'b']
     */
function Aa(e,t){return e&&e.length&&t&&t.length?ei(e,t):e}/**
     * This method is like `_.pullAll` except that it accepts `iteratee` which is
     * invoked for each element of `array` and `values` to generate the criterion
     * by which they're compared. The iteratee is invoked with one argument: (value).
     *
     * **Note:** Unlike `_.differenceBy`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1 }, { 'x': 2 }, { 'x': 3 }, { 'x': 1 }];
     *
     * _.pullAllBy(array, [{ 'x': 1 }, { 'x': 3 }], 'x');
     * console.log(array);
     * // => [{ 'x': 2 }]
     */
function Ea(e,t,n){return e&&e.length&&t&&t.length?ei(e,t,ko(n,2)):e}/**
     * This method is like `_.pullAll` except that it accepts `comparator` which
     * is invoked to compare elements of `array` to `values`. The comparator is
     * invoked with two arguments: (arrVal, othVal).
     *
     * **Note:** Unlike `_.differenceWith`, this method mutates `array`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Array} values The values to remove.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [{ 'x': 1, 'y': 2 }, { 'x': 3, 'y': 4 }, { 'x': 5, 'y': 6 }];
     *
     * _.pullAllWith(array, [{ 'x': 3, 'y': 4 }], _.isEqual);
     * console.log(array);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
     */
function Pa(e,t,n){return e&&e.length&&t&&t.length?ei(e,t,ie,n):e}/**
     * Removes all elements from `array` that `predicate` returns truthy for
     * and returns an array of the removed elements. The predicate is invoked
     * with three arguments: (value, index, array).
     *
     * **Note:** Unlike `_.filter`, this method mutates `array`. Use `_.pull`
     * to pull elements from an array by value.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4];
     * var evens = _.remove(array, function(n) {
     *   return n % 2 == 0;
     * });
     *
     * console.log(array);
     * // => [1, 3]
     *
     * console.log(evens);
     * // => [2, 4]
     */
function Na(e,t){var n=[];if(!e||!e.length)return n;var r=-1,i=[],o=e.length;for(t=ko(t,3);++r<o;){var a=e[r];t(a,r,e)&&(n.push(a),i.push(r))}return ti(e,i),n}/**
     * Reverses `array` so that the first element becomes the last, the second
     * element becomes the second to last, and so on.
     *
     * **Note:** This method mutates `array` and is based on
     * [`Array#reverse`](https://mdn.io/Array/reverse).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to modify.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _.reverse(array);
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
function Oa(e){return null==e?e:ef.call(e)}/**
     * Creates a slice of `array` from `start` up to, but not including, `end`.
     *
     * **Note:** This method is used instead of
     * [`Array#slice`](https://mdn.io/Array/slice) to ensure dense arrays are
     * returned.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to slice.
     * @param {number} [start=0] The start position.
     * @param {number} [end=array.length] The end position.
     * @returns {Array} Returns the slice of `array`.
     */
function La(e,t,n){var r=null==e?0:e.length;return r?(n&&"number"!=typeof n&&Ho(e,t,n)?(t=0,n=r):(t=null==t?0:Cs(t),n=n===ie?r:Cs(n)),ci(e,t,n)):[]}/**
     * Uses a binary search to determine the lowest index at which `value`
     * should be inserted into `array` in order to maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([30, 50], 40);
     * // => 1
     */
function Da(e,t){return pi(e,t)}/**
     * This method is like `_.sortedIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 0
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedIndexBy(objects, { 'x': 4 }, 'x');
     * // => 0
     */
function Fa(e,t,n){return di(e,t,ko(n,2))}/**
     * This method is like `_.indexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedIndexOf([4, 5, 5, 5, 6], 5);
     * // => 1
     */
function qa(e,t){var n=null==e?0:e.length;if(n){var r=pi(e,t);if(r<n&&Yu(e[r],t))return r}return-1}/**
     * This method is like `_.sortedIndex` except that it returns the highest
     * index at which `value` should be inserted into `array` in order to
     * maintain its sort order.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedLastIndex([4, 5, 5, 5, 6], 5);
     * // => 4
     */
function Ra(e,t){return pi(e,t,!0)}/**
     * This method is like `_.sortedLastIndex` except that it accepts `iteratee`
     * which is invoked for `value` and each element of `array` to compute their
     * sort ranking. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The sorted array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * var objects = [{ 'x': 4 }, { 'x': 5 }];
     *
     * _.sortedLastIndexBy(objects, { 'x': 4 }, function(o) { return o.x; });
     * // => 1
     *
     * // The `_.property` iteratee shorthand.
     * _.sortedLastIndexBy(objects, { 'x': 4 }, 'x');
     * // => 1
     */
function Va(e,t,n){return di(e,t,ko(n,2),!0)}/**
     * This method is like `_.lastIndexOf` except that it performs a binary
     * search on a sorted `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {*} value The value to search for.
     * @returns {number} Returns the index of the matched value, else `-1`.
     * @example
     *
     * _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
     * // => 3
     */
function Ha(e,t){var n=null==e?0:e.length;if(n){var r=pi(e,t,!0)-1;if(Yu(e[r],t))return r}return-1}/**
     * This method is like `_.uniq` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniq([1, 1, 2]);
     * // => [1, 2]
     */
function Ia(e){return e&&e.length?hi(e):[]}/**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.3]
     */
function za(e,t){return e&&e.length?hi(e,ko(t,2)):[]}/**
     * Gets all but the first element of `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.tail([1, 2, 3]);
     * // => [2, 3]
     */
function Wa(e){var t=null==e?0:e.length;return t?ci(e,1,t):[]}/**
     * Creates a slice of `array` with `n` elements taken from the beginning.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.take([1, 2, 3]);
     * // => [1]
     *
     * _.take([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.take([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.take([1, 2, 3], 0);
     * // => []
     */
function Ma(e,t,n){return e&&e.length?(t=n||t===ie?1:Cs(t),ci(e,0,t<0?0:t)):[]}/**
     * Creates a slice of `array` with `n` elements taken from the end.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {number} [n=1] The number of elements to take.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * _.takeRight([1, 2, 3]);
     * // => [3]
     *
     * _.takeRight([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.takeRight([1, 2, 3], 5);
     * // => [1, 2, 3]
     *
     * _.takeRight([1, 2, 3], 0);
     * // => []
     */
function Ba(e,t,n){var r=null==e?0:e.length;return r?(t=n||t===ie?1:Cs(t),t=r-t,ci(e,t<0?0:t,r)):[]}/**
     * Creates a slice of `array` with elements taken from the end. Elements are
     * taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': true },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': false }
     * ];
     *
     * _.takeRightWhile(users, function(o) { return !o.active; });
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeRightWhile(users, { 'user': 'pebbles', 'active': false });
     * // => objects for ['pebbles']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeRightWhile(users, ['active', false]);
     * // => objects for ['fred', 'pebbles']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeRightWhile(users, 'active');
     * // => []
     */
function $a(e,t){return e&&e.length?xi(e,ko(t,3),!1,!0):[]}/**
     * Creates a slice of `array` with elements taken from the beginning. Elements
     * are taken until `predicate` returns falsey. The predicate is invoked with
     * three arguments: (value, index, array).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Array
     * @param {Array} array The array to query.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the slice of `array`.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'active': false },
     *   { 'user': 'fred',    'active': false },
     *   { 'user': 'pebbles', 'active': true }
     * ];
     *
     * _.takeWhile(users, function(o) { return !o.active; });
     * // => objects for ['barney', 'fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.takeWhile(users, { 'user': 'barney', 'active': false });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.takeWhile(users, ['active', false]);
     * // => objects for ['barney', 'fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.takeWhile(users, 'active');
     * // => []
     */
function Ua(e,t){return e&&e.length?xi(e,ko(t,3)):[]}/**
     * Creates a duplicate-free version of an array, using
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * for equality comparisons, in which only the first occurrence of each element
     * is kept. The order of result values is determined by the order they occur
     * in the array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniq([2, 1, 2]);
     * // => [2, 1]
     */
function Xa(e){return e&&e.length?yi(e):[]}/**
     * This method is like `_.uniq` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * uniqueness is computed. The order of result values is determined by the
     * order they occur in the array. The iteratee is invoked with one argument:
     * (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
     * // => [2.1, 1.2]
     *
     * // The `_.property` iteratee shorthand.
     * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
function Ga(e,t){return e&&e.length?yi(e,ko(t,2)):[]}/**
     * This method is like `_.uniq` except that it accepts `comparator` which
     * is invoked to compare elements of `array`. The order of result values is
     * determined by the order they occur in the array.The comparator is invoked
     * with two arguments: (arrVal, othVal).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Array
     * @param {Array} array The array to inspect.
     * @param {Function} [comparator] The comparator invoked per element.
     * @returns {Array} Returns the new duplicate free array.
     * @example
     *
     * var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
     *
     * _.uniqWith(objects, _.isEqual);
     * // => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
     */
function Ya(e,t){return t="function"==typeof t?t:ie,e&&e.length?yi(e,ie,t):[]}/**
     * This method is like `_.zip` except that it accepts an array of grouped
     * elements and creates an array regrouping the elements to their pre-zip
     * configuration.
     *
     * @static
     * @memberOf _
     * @since 1.2.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
     * // => [['a', 1, true], ['b', 2, false]]
     *
     * _.unzip(zipped);
     * // => [['a', 'b'], [1, 2], [true, false]]
     */
function Qa(e){if(!e||!e.length)return[];var t=0;return e=p(e,function(e){if(Zu(e))return t=Yc(e.length,t),!0}),L(t,function(t){return g(e,A(t))})}/**
     * This method is like `_.unzip` except that it accepts `iteratee` to specify
     * how regrouped values should be combined. The iteratee is invoked with the
     * elements of each group: (...group).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Array
     * @param {Array} array The array of grouped elements to process.
     * @param {Function} [iteratee=_.identity] The function to combine
     *  regrouped values.
     * @returns {Array} Returns the new array of regrouped elements.
     * @example
     *
     * var zipped = _.zip([1, 2], [10, 20], [100, 200]);
     * // => [[1, 10, 100], [2, 20, 200]]
     *
     * _.unzipWith(zipped, _.add);
     * // => [3, 30, 300]
     */
function Za(e,t){if(!e||!e.length)return[];var n=Qa(e);return null==t?n:g(n,function(e){return u(t,ie,e)})}/**
     * This method is like `_.fromPairs` except that it accepts two arrays,
     * one of property identifiers and one of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 0.4.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObject(['a', 'b'], [1, 2]);
     * // => { 'a': 1, 'b': 2 }
     */
function Ja(e,t){return Ti(e||[],t||[],On)}/**
     * This method is like `_.zipObject` except that it supports property paths.
     *
     * @static
     * @memberOf _
     * @since 4.1.0
     * @category Array
     * @param {Array} [props=[]] The property identifiers.
     * @param {Array} [values=[]] The property values.
     * @returns {Object} Returns the new object.
     * @example
     *
     * _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
     * // => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
     */
function Ka(e,t){return Ti(e||[],t||[],si)}/*------------------------------------------------------------------------*/
/**
     * Creates a `lodash` wrapper instance that wraps `value` with explicit method
     * chain sequences enabled. The result of such sequences must be unwrapped
     * with `_#value`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Seq
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney',  'age': 36 },
     *   { 'user': 'fred',    'age': 40 },
     *   { 'user': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _
     *   .chain(users)
     *   .sortBy('age')
     *   .map(function(o) {
     *     return o.user + ' is ' + o.age;
     *   })
     *   .head()
     *   .value();
     * // => 'pebbles is 1'
     */
function eu(e){var t=n(e);return t.__chain__=!0,t}/**
     * This method invokes `interceptor` and returns `value`. The interceptor
     * is invoked with one argument; (value). The purpose of this method is to
     * "tap into" a method chain sequence in order to modify intermediate results.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3])
     *  .tap(function(array) {
     *    // Mutate input array.
     *    array.pop();
     *  })
     *  .reverse()
     *  .value();
     * // => [2, 1]
     */
function tu(e,t){return t(e),e}/**
     * This method is like `_.tap` except that it returns the result of `interceptor`.
     * The purpose of this method is to "pass thru" values replacing intermediate
     * results in a method chain sequence.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Seq
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns the result of `interceptor`.
     * @example
     *
     * _('  abc  ')
     *  .chain()
     *  .trim()
     *  .thru(function(value) {
     *    return [value];
     *  })
     *  .value();
     * // => ['abc']
     */
function nu(e,t){return t(e)}/**
     * Creates a `lodash` wrapper instance with explicit method chain sequences enabled.
     *
     * @name chain
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36 },
     *   { 'user': 'fred',   'age': 40 }
     * ];
     *
     * // A sequence without explicit chaining.
     * _(users).head();
     * // => { 'user': 'barney', 'age': 36 }
     *
     * // A sequence with explicit chaining.
     * _(users)
     *   .chain()
     *   .head()
     *   .pick('user')
     *   .value();
     * // => { 'user': 'barney' }
     */
function ru(){return eu(this)}/**
     * Executes the chain sequence and returns the wrapped result.
     *
     * @name commit
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2];
     * var wrapped = _(array).push(3);
     *
     * console.log(array);
     * // => [1, 2]
     *
     * wrapped = wrapped.commit();
     * console.log(array);
     * // => [1, 2, 3]
     *
     * wrapped.last();
     * // => 3
     *
     * console.log(array);
     * // => [1, 2, 3]
     */
function iu(){return new i(this.value(),this.__chain__)}/**
     * Gets the next value on a wrapped object following the
     * [iterator protocol](https://mdn.io/iteration_protocols#iterator).
     *
     * @name next
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the next iterator value.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 1 }
     *
     * wrapped.next();
     * // => { 'done': false, 'value': 2 }
     *
     * wrapped.next();
     * // => { 'done': true, 'value': undefined }
     */
function ou(){this.__values__===ie&&(this.__values__=Ss(this.value()));var e=this.__index__>=this.__values__.length,t=e?ie:this.__values__[this.__index__++];return{done:e,value:t}}/**
     * Enables the wrapper to be iterable.
     *
     * @name Symbol.iterator
     * @memberOf _
     * @since 4.0.0
     * @category Seq
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var wrapped = _([1, 2]);
     *
     * wrapped[Symbol.iterator]() === wrapped;
     * // => true
     *
     * Array.from(wrapped);
     * // => [1, 2]
     */
function au(){return this}/**
     * Creates a clone of the chain sequence planting `value` as the wrapped value.
     *
     * @name plant
     * @memberOf _
     * @since 3.2.0
     * @category Seq
     * @param {*} value The value to plant.
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var wrapped = _([1, 2]).map(square);
     * var other = wrapped.plant([3, 4]);
     *
     * other.value();
     * // => [9, 16]
     *
     * wrapped.value();
     * // => [1, 4]
     */
function uu(e){for(var t,n=this;n instanceof r;){var i=aa(n);i.__index__=0,i.__values__=ie,t?o.__wrapped__=i:t=i;var o=i;n=n.__wrapped__}return o.__wrapped__=e,t}/**
     * This method is the wrapper version of `_.reverse`.
     *
     * **Note:** This method mutates the wrapped array.
     *
     * @name reverse
     * @memberOf _
     * @since 0.1.0
     * @category Seq
     * @returns {Object} Returns the new `lodash` wrapper instance.
     * @example
     *
     * var array = [1, 2, 3];
     *
     * _(array).reverse().value()
     * // => [3, 2, 1]
     *
     * console.log(array);
     * // => [3, 2, 1]
     */
function su(){var e=this.__wrapped__;if(e instanceof x){var t=e;return this.__actions__.length&&(t=new x(this)),t=t.reverse(),t.__actions__.push({func:nu,args:[Oa],thisArg:ie}),new i(t,this.__chain__)}return this.thru(Oa)}/**
     * Executes the chain sequence to resolve the unwrapped value.
     *
     * @name value
     * @memberOf _
     * @since 0.1.0
     * @alias toJSON, valueOf
     * @category Seq
     * @returns {*} Returns the resolved unwrapped value.
     * @example
     *
     * _([1, 2, 3]).value();
     * // => [1, 2, 3]
     */
function lu(){return wi(this.__wrapped__,this.__actions__)}/**
     * Checks if `predicate` returns truthy for **all** elements of `collection`.
     * Iteration is stopped once `predicate` returns falsey. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * **Note:** This method returns `true` for
     * [empty collections](https://en.wikipedia.org/wiki/Empty_set) because
     * [everything is true](https://en.wikipedia.org/wiki/Vacuous_truth) of
     * elements of empty collections.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if all elements pass the predicate check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes'], Boolean);
     * // => false
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.every(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.every(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.every(users, 'active');
     * // => false
     */
function cu(e,t,n){var r=wp(e)?f:Xn;return n&&Ho(e,t,n)&&(t=ie),r(e,ko(t,3))}/**
     * Iterates over elements of `collection`, returning an array of all elements
     * `predicate` returns truthy for. The predicate is invoked with three
     * arguments: (value, index|key, collection).
     *
     * **Note:** Unlike `_.remove`, this method returns a new array.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.reject
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * _.filter(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, { 'age': 36, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.filter(users, 'active');
     * // => objects for ['barney']
     */
function fu(e,t){var n=wp(e)?p:er;return n(e,ko(t,3))}/**
     * Creates a flattened array of values by running each element in `collection`
     * thru `iteratee` and flattening the mapped results. The iteratee is invoked
     * with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [n, n];
     * }
     *
     * _.flatMap([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
function pu(e,t){return tr(mu(e,t),1)}/**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDeep([1, 2], duplicate);
     * // => [1, 1, 2, 2]
     */
function du(e,t){return tr(mu(e,t),De)}/**
     * This method is like `_.flatMap` except that it recursively flattens the
     * mapped results up to `depth` times.
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {number} [depth=1] The maximum recursion depth.
     * @returns {Array} Returns the new flattened array.
     * @example
     *
     * function duplicate(n) {
     *   return [[[n, n]]];
     * }
     *
     * _.flatMapDepth([1, 2], duplicate, 2);
     * // => [[1, 1], [2, 2]]
     */
function hu(e,t,n){return n=n===ie?1:Cs(n),tr(mu(e,t),n)}/**
     * Iterates over elements of `collection` and invokes `iteratee` for each element.
     * The iteratee is invoked with three arguments: (value, index|key, collection).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * **Note:** As with other "Collections" methods, objects with a "length"
     * property are iterated like arrays. To avoid this behavior use `_.forIn`
     * or `_.forOwn` for object iteration.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @alias each
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEachRight
     * @example
     *
     * _.forEach([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `1` then `2`.
     *
     * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
function gu(e,t){var n=wp(e)?l:bf;return n(e,ko(t,3))}/**
     * This method is like `_.forEach` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @alias eachRight
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     * @see _.forEach
     * @example
     *
     * _.forEachRight([1, 2], function(value) {
     *   console.log(value);
     * });
     * // => Logs `2` then `1`.
     */
function vu(e,t){var n=wp(e)?c:xf;return n(e,ko(t,3))}/**
     * Checks if `value` is in `collection`. If `collection` is a string, it's
     * checked for a substring of `value`, otherwise
     * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
     * is used for equality comparisons. If `fromIndex` is negative, it's used as
     * the offset from the end of `collection`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=0] The index to search from.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {boolean} Returns `true` if `value` is found, else `false`.
     * @example
     *
     * _.includes([1, 2, 3], 1);
     * // => true
     *
     * _.includes([1, 2, 3], 1, 2);
     * // => false
     *
     * _.includes({ 'a': 1, 'b': 2 }, 1);
     * // => true
     *
     * _.includes('abcd', 'bc');
     * // => true
     */
function yu(e,t,n,r){e=Qu(e)?e:rl(e),n=n&&!r?Cs(n):0;var i=e.length;return n<0&&(n=Yc(i+n,0)),bs(e)?n<=i&&e.indexOf(t,n)>-1:!!i&&S(e,t,n)>-1}/**
     * Creates an array of values by running each element in `collection` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
     *
     * The guarded methods are:
     * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
     * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
     * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
     * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new mapped array.
     * @example
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * _.map([4, 8], square);
     * // => [16, 64]
     *
     * _.map({ 'a': 4, 'b': 8 }, square);
     * // => [16, 64] (iteration order is not guaranteed)
     *
     * var users = [
     *   { 'user': 'barney' },
     *   { 'user': 'fred' }
     * ];
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, 'user');
     * // => ['barney', 'fred']
     */
function mu(e,t){var n=wp(e)?g:Br;return n(e,ko(t,3))}/**
     * This method is like `_.sortBy` except that it allows specifying the sort
     * orders of the iteratees to sort by. If `orders` is unspecified, all values
     * are sorted in ascending order. Otherwise, specify an order of "desc" for
     * descending or "asc" for ascending sort order of corresponding values.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Array[]|Function[]|Object[]|string[]} [iteratees=[_.identity]]
     *  The iteratees to sort by.
     * @param {string[]} [orders] The sort orders of `iteratees`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.
     * @returns {Array} Returns the new sorted array.
     * @example
     *
     * var users = [
     *   { 'user': 'fred',   'age': 48 },
     *   { 'user': 'barney', 'age': 34 },
     *   { 'user': 'fred',   'age': 40 },
     *   { 'user': 'barney', 'age': 36 }
     * ];
     *
     * // Sort by `user` in ascending order and by `age` in descending order.
     * _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
     * // => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
     */
function bu(e,t,n,r){return null==e?[]:(wp(t)||(t=null==t?[]:[t]),n=r?ie:n,wp(n)||(n=null==n?[]:[n]),Qr(e,t,n))}/**
     * Reduces `collection` to a value which is the accumulated result of running
     * each element in `collection` thru `iteratee`, where each successive
     * invocation is supplied the return value of the previous. If `accumulator`
     * is not given, the first element of `collection` is used as the initial
     * value. The iteratee is invoked with four arguments:
     * (accumulator, value, index|key, collection).
     *
     * Many lodash methods are guarded to work as iteratees for methods like
     * `_.reduce`, `_.reduceRight`, and `_.transform`.
     *
     * The guarded methods are:
     * `assign`, `defaults`, `defaultsDeep`, `includes`, `merge`, `orderBy`,
     * and `sortBy`
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduceRight
     * @example
     *
     * _.reduce([1, 2], function(sum, n) {
     *   return sum + n;
     * }, 0);
     * // => 3
     *
     * _.reduce({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     *   return result;
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
     */
function xu(e,t,n){var r=wp(e)?y:P,i=arguments.length<3;return r(e,ko(t,4),n,i,bf)}/**
     * This method is like `_.reduce` except that it iterates over elements of
     * `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The initial value.
     * @returns {*} Returns the accumulated value.
     * @see _.reduce
     * @example
     *
     * var array = [[0, 1], [2, 3], [4, 5]];
     *
     * _.reduceRight(array, function(flattened, other) {
     *   return flattened.concat(other);
     * }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
function wu(e,t,n){var r=wp(e)?m:P,i=arguments.length<3;return r(e,ko(t,4),n,i,xf)}/**
     * The opposite of `_.filter`; this method returns the elements of `collection`
     * that `predicate` does **not** return truthy for.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the new filtered array.
     * @see _.filter
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': false },
     *   { 'user': 'fred',   'age': 40, 'active': true }
     * ];
     *
     * _.reject(users, function(o) { return !o.active; });
     * // => objects for ['fred']
     *
     * // The `_.matches` iteratee shorthand.
     * _.reject(users, { 'age': 40, 'active': true });
     * // => objects for ['barney']
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.reject(users, ['active', false]);
     * // => objects for ['fred']
     *
     * // The `_.property` iteratee shorthand.
     * _.reject(users, 'active');
     * // => objects for ['barney']
     */
function _u(e,t){var n=wp(e)?p:er;return n(e,qu(ko(t,3)))}/**
     * Gets a random element from `collection`.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @returns {*} Returns the random element.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     */
function Tu(e){var t=wp(e)?An:ai;return t(e)}/**
     * Gets `n` random elements at unique keys from `collection` up to the
     * size of `collection`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Collection
     * @param {Array|Object} collection The collection to sample.
     * @param {number} [n=1] The number of elements to sample.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the random elements.
     * @example
     *
     * _.sampleSize([1, 2, 3], 2);
     * // => [3, 1]
     *
     * _.sampleSize([1, 2, 3], 4);
     * // => [2, 3, 1]
     */
function Su(e,t,n){t=(n?Ho(e,t,n):t===ie)?1:Cs(t);var r=wp(e)?En:ui;return r(e,t)}/**
     * Creates an array of shuffled values, using a version of the
     * [Fisher-Yates shuffle](https://en.wikipedia.org/wiki/Fisher-Yates_shuffle).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to shuffle.
     * @returns {Array} Returns the new shuffled array.
     * @example
     *
     * _.shuffle([1, 2, 3, 4]);
     * // => [4, 1, 3, 2]
     */
function ku(e){var t=wp(e)?Pn:li;return t(e)}/**
     * Gets the size of `collection` by returning its length for array-like
     * values or the number of own enumerable string keyed properties for objects.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns the collection size.
     * @example
     *
     * _.size([1, 2, 3]);
     * // => 3
     *
     * _.size({ 'a': 1, 'b': 2 });
     * // => 2
     *
     * _.size('pebbles');
     * // => 7
     */
function Cu(e){if(null==e)return 0;if(Qu(e))return bs(e)?K(e):e.length;var t=Nf(e);return t==Ze||t==it?e.size:zr(e).length}/**
     * Checks if `predicate` returns truthy for **any** element of `collection`.
     * Iteration is stopped once `predicate` returns truthy. The predicate is
     * invoked with three arguments: (value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Collection
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {boolean} Returns `true` if any element passes the predicate check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var users = [
     *   { 'user': 'barney', 'active': true },
     *   { 'user': 'fred',   'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.some(users, { 'user': 'barney', 'active': false });
     * // => false
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.some(users, ['active', false]);
     * // => true
     *
     * // The `_.property` iteratee shorthand.
     * _.some(users, 'active');
     * // => true
     */
function ju(e,t,n){var r=wp(e)?b:fi;return n&&Ho(e,t,n)&&(t=ie),r(e,ko(t,3))}/*------------------------------------------------------------------------*/
/**
     * The opposite of `_.before`; this method creates a function that invokes
     * `func` once it's called `n` or more times.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {number} n The number of calls before `func` is invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => Logs 'done saving!' after the two async saves have completed.
     */
function Au(e,t){if("function"!=typeof t)throw new hc(se);return e=Cs(e),function(){if(--e<1)return t.apply(this,arguments)}}/**
     * Creates a function that invokes `func`, with up to `n` arguments,
     * ignoring any additional arguments.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @param {number} [n=func.length] The arity cap.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.ary(parseInt, 1));
     * // => [6, 8, 10]
     */
function Eu(e,t,n){return t=n?ie:t,t=e&&null==t?e.length:t,po(e,Se,ie,ie,ie,ie,t)}/**
     * Creates a function that invokes `func`, with the `this` binding and arguments
     * of the created function, while it's called less than `n` times. Subsequent
     * calls to the created function return the result of the last `func` invocation.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {number} n The number of calls at which `func` is no longer invoked.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * jQuery(element).on('click', _.before(5, addContactToList));
     * // => Allows adding up to 4 contacts to the list.
     */
function Pu(e,t){var n;if("function"!=typeof t)throw new hc(se);return e=Cs(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=ie),n}}/**
     * Creates a function that accepts arguments of `func` and either invokes
     * `func` returning its result, if at least `arity` number of arguments have
     * been provided, or returns a function that accepts the remaining `func`
     * arguments, and so on. The arity of `func` may be specified if `func.length`
     * is not sufficient.
     *
     * The `_.curry.placeholder` value, which defaults to `_` in monolithic builds,
     * may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curry(abc);
     *
     * curried(1)(2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2)(3);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(1)(_, 3)(2);
     * // => [1, 2, 3]
     */
function Nu(e,t,n){t=n?ie:t;var r=po(e,xe,ie,ie,ie,ie,ie,t);return r.placeholder=Nu.placeholder,r}/**
     * This method is like `_.curry` except that arguments are applied to `func`
     * in the manner of `_.partialRight` instead of `_.partial`.
     *
     * The `_.curryRight.placeholder` value, which defaults to `_` in monolithic
     * builds, may be used as a placeholder for provided arguments.
     *
     * **Note:** This method doesn't set the "length" property of curried functions.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var abc = function(a, b, c) {
     *   return [a, b, c];
     * };
     *
     * var curried = _.curryRight(abc);
     *
     * curried(3)(2)(1);
     * // => [1, 2, 3]
     *
     * curried(2, 3)(1);
     * // => [1, 2, 3]
     *
     * curried(1, 2, 3);
     * // => [1, 2, 3]
     *
     * // Curried with placeholders.
     * curried(3)(1, _)(2);
     * // => [1, 2, 3]
     */
function Ou(e,t,n){t=n?ie:t;var r=po(e,we,ie,ie,ie,ie,ie,t);return r.placeholder=Ou.placeholder,r}/**
     * Creates a debounced function that delays invoking `func` until after `wait`
     * milliseconds have elapsed since the last time the debounced function was
     * invoked. The debounced function comes with a `cancel` method to cancel
     * delayed `func` invocations and a `flush` method to immediately invoke them.
     * Provide `options` to indicate whether `func` should be invoked on the
     * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
     * with the last arguments provided to the debounced function. Subsequent
     * calls to the debounced function return the result of the last `func`
     * invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the debounced function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.debounce` and `_.throttle`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to debounce.
     * @param {number} [wait=0] The number of milliseconds to delay.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=false]
     *  Specify invoking on the leading edge of the timeout.
     * @param {number} [options.maxWait]
     *  The maximum time `func` is allowed to be delayed before it's invoked.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // Avoid costly calculations while the window size is in flux.
     * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
     *
     * // Invoke `sendMail` when clicked, debouncing subsequent calls.
     * jQuery(element).on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * }));
     *
     * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
     * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
     * var source = new EventSource('/stream');
     * jQuery(source).on('message', debounced);
     *
     * // Cancel the trailing debounced invocation.
     * jQuery(window).on('popstate', debounced.cancel);
     */
function Lu(e,t,n){function r(t){var n=p,r=d;return p=d=ie,m=t,g=e.apply(r,n)}function i(e){
// Invoke the leading edge.
// Reset any `maxWait` timer.
// Start the timer for the trailing edge.
return m=e,v=Df(u,t),b?r(e):g}function o(e){var n=e-y,r=e-m,i=t-n;return x?Qc(i,h-r):i}function a(e){var n=e-y,r=e-m;
// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return y===ie||n>=t||n<0||x&&r>=h}function u(){var e=lp();
// Restart the timer.
return a(e)?s(e):void(v=Df(u,o(e)))}function s(e){
// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
return v=ie,w&&p?r(e):(p=d=ie,g)}function l(){v!==ie&&Cf(v),m=0,p=y=d=v=ie}function c(){return v===ie?g:s(lp())}function f(){var e=lp(),n=a(e);if(p=arguments,d=this,y=e,n){if(v===ie)return i(y);if(x)
// Handle invocations in a tight loop.
return v=Df(u,t),r(y)}return v===ie&&(v=Df(u,t)),g}var p,d,h,g,v,y,m=0,b=!1,x=!1,w=!0;if("function"!=typeof e)throw new hc(se);return t=As(t)||0,ss(n)&&(b=!!n.leading,x="maxWait"in n,h=x?Yc(As(n.maxWait)||0,t):h,w="trailing"in n?!!n.trailing:w),f.cancel=l,f.flush=c,f}/**
     * Creates a function that invokes `func` with arguments reversed.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to flip arguments for.
     * @returns {Function} Returns the new flipped function.
     * @example
     *
     * var flipped = _.flip(function() {
     *   return _.toArray(arguments);
     * });
     *
     * flipped('a', 'b', 'c', 'd');
     * // => ['d', 'c', 'b', 'a']
     */
function Du(e){return po(e,Ce)}/**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided, it determines the cache key for storing the result based on the
     * arguments provided to the memoized function. By default, the first argument
     * provided to the memoized function is used as the map cache key. The `func`
     * is invoked with the `this` binding of the memoized function.
     *
     * **Note:** The cache is exposed as the `cache` property on the memoized
     * function. Its creation may be customized by replacing the `_.memoize.Cache`
     * constructor with one whose instances implement the
     * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
     * method interface of `clear`, `delete`, `get`, `has`, and `set`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] The function to resolve the cache key.
     * @returns {Function} Returns the new memoized function.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     * var other = { 'c': 3, 'd': 4 };
     *
     * var values = _.memoize(_.values);
     * values(object);
     * // => [1, 2]
     *
     * values(other);
     * // => [3, 4]
     *
     * object.a = 2;
     * values(object);
     * // => [1, 2]
     *
     * // Modify the result cache.
     * values.cache.set(object, ['a', 'b']);
     * values(object);
     * // => ['a', 'b']
     *
     * // Replace `_.memoize.Cache`.
     * _.memoize.Cache = WeakMap;
     */
function Fu(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new hc(se);var n=function(){var r=arguments,i=t?t.apply(this,r):r[0],o=n.cache;if(o.has(i))return o.get(i);var a=e.apply(this,r);return n.cache=o.set(i,a)||o,a};return n.cache=new(Fu.Cache||pn),n}/**
     * Creates a function that negates the result of the predicate `func`. The
     * `func` predicate is invoked with the `this` binding and arguments of the
     * created function.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Function
     * @param {Function} predicate The predicate to negate.
     * @returns {Function} Returns the new negated function.
     * @example
     *
     * function isEven(n) {
     *   return n % 2 == 0;
     * }
     *
     * _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
     * // => [1, 3, 5]
     */
function qu(e){if("function"!=typeof e)throw new hc(se);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}/**
     * Creates a function that is restricted to invoking `func` once. Repeat calls
     * to the function return the value of the first invocation. The `func` is
     * invoked with the `this` binding and arguments of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // => `createApplication` is invoked once
     */
function Ru(e){return Pu(2,e)}/**
     * Creates a function that invokes `func` with the `this` binding of the
     * created function and arguments from `start` and beyond provided as
     * an array.
     *
     * **Note:** This method is based on the
     * [rest parameter](https://mdn.io/rest_parameters).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to apply a rest parameter to.
     * @param {number} [start=func.length-1] The start position of the rest parameter.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.rest(function(what, names) {
     *   return what + ' ' + _.initial(names).join(', ') +
     *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
     * });
     *
     * say('hello', 'fred', 'barney', 'pebbles');
     * // => 'hello fred, barney, & pebbles'
     */
function Vu(e,t){if("function"!=typeof e)throw new hc(se);return t=t===ie?t:Cs(t),oi(e,t)}/**
     * Creates a function that invokes `func` with the `this` binding of the
     * create function and an array of arguments much like
     * [`Function#apply`](http://www.ecma-international.org/ecma-262/7.0/#sec-function.prototype.apply).
     *
     * **Note:** This method is based on the
     * [spread operator](https://mdn.io/spread_operator).
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Function
     * @param {Function} func The function to spread arguments over.
     * @param {number} [start=0] The start position of the spread.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var say = _.spread(function(who, what) {
     *   return who + ' says ' + what;
     * });
     *
     * say(['fred', 'hello']);
     * // => 'fred says hello'
     *
     * var numbers = Promise.all([
     *   Promise.resolve(40),
     *   Promise.resolve(36)
     * ]);
     *
     * numbers.then(_.spread(function(x, y) {
     *   return x + y;
     * }));
     * // => a Promise of 76
     */
function Hu(e,t){if("function"!=typeof e)throw new hc(se);return t=null==t?0:Yc(Cs(t),0),oi(function(n){var r=n[t],i=ji(n,0,t);return r&&v(i,r),u(e,this,i)})}/**
     * Creates a throttled function that only invokes `func` at most once per
     * every `wait` milliseconds. The throttled function comes with a `cancel`
     * method to cancel delayed `func` invocations and a `flush` method to
     * immediately invoke them. Provide `options` to indicate whether `func`
     * should be invoked on the leading and/or trailing edge of the `wait`
     * timeout. The `func` is invoked with the last arguments provided to the
     * throttled function. Subsequent calls to the throttled function return the
     * result of the last `func` invocation.
     *
     * **Note:** If `leading` and `trailing` options are `true`, `func` is
     * invoked on the trailing edge of the timeout only if the throttled function
     * is invoked more than once during the `wait` timeout.
     *
     * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
     * until to the next tick, similar to `setTimeout` with a timeout of `0`.
     *
     * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
     * for details over the differences between `_.throttle` and `_.debounce`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {Function} func The function to throttle.
     * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.leading=true]
     *  Specify invoking on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true]
     *  Specify invoking on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // Avoid excessively updating the position while scrolling.
     * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
     *
     * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
     * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
     * jQuery(element).on('click', throttled);
     *
     * // Cancel the trailing throttled invocation.
     * jQuery(window).on('popstate', throttled.cancel);
     */
function Iu(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new hc(se);return ss(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Lu(e,t,{leading:r,maxWait:t,trailing:i})}/**
     * Creates a function that accepts up to one argument, ignoring any
     * additional arguments.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Function
     * @param {Function} func The function to cap arguments for.
     * @returns {Function} Returns the new capped function.
     * @example
     *
     * _.map(['6', '8', '10'], _.unary(parseInt));
     * // => [6, 8, 10]
     */
function zu(e){return Eu(e,1)}/**
     * Creates a function that provides `value` to `wrapper` as its first
     * argument. Any additional arguments provided to the function are appended
     * to those provided to the `wrapper`. The wrapper is invoked with the `this`
     * binding of the created function.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Function
     * @param {*} value The value to wrap.
     * @param {Function} [wrapper=identity] The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('fred, barney, & pebbles');
     * // => '<p>fred, barney, &amp; pebbles</p>'
     */
function Wu(e,t){return gp(ki(t),e)}/*------------------------------------------------------------------------*/
/**
     * Casts `value` as an array if it's not one.
     *
     * @static
     * @memberOf _
     * @since 4.4.0
     * @category Lang
     * @param {*} value The value to inspect.
     * @returns {Array} Returns the cast array.
     * @example
     *
     * _.castArray(1);
     * // => [1]
     *
     * _.castArray({ 'a': 1 });
     * // => [{ 'a': 1 }]
     *
     * _.castArray('abc');
     * // => ['abc']
     *
     * _.castArray(null);
     * // => [null]
     *
     * _.castArray(undefined);
     * // => [undefined]
     *
     * _.castArray();
     * // => []
     *
     * var array = [1, 2, 3];
     * console.log(_.castArray(array) === array);
     * // => true
     */
function Mu(){if(!arguments.length)return[];var e=arguments[0];return wp(e)?e:[e]}/**
     * Creates a shallow clone of `value`.
     *
     * **Note:** This method is loosely based on the
     * [structured clone algorithm](https://mdn.io/Structured_clone_algorithm)
     * and supports cloning arrays, array buffers, booleans, date objects, maps,
     * numbers, `Object` objects, regexes, sets, strings, symbols, and typed
     * arrays. The own enumerable properties of `arguments` objects are cloned
     * as plain objects. An empty object is returned for uncloneable values such
     * as error objects, functions, DOM nodes, and WeakMaps.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to clone.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeep
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var shallow = _.clone(objects);
     * console.log(shallow[0] === objects[0]);
     * // => true
     */
function Bu(e){return In(e,he)}/**
     * This method is like `_.clone` except that it accepts `customizer` which
     * is invoked to produce the cloned value. If `customizer` returns `undefined`,
     * cloning is handled by the method instead. The `customizer` is invoked with
     * up to four arguments; (value [, index|key, object, stack]).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the cloned value.
     * @see _.cloneDeepWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(false);
     *   }
     * }
     *
     * var el = _.cloneWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 0
     */
function $u(e,t){return t="function"==typeof t?t:ie,In(e,he,t)}/**
     * This method is like `_.clone` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 1.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @returns {*} Returns the deep cloned value.
     * @see _.clone
     * @example
     *
     * var objects = [{ 'a': 1 }, { 'b': 2 }];
     *
     * var deep = _.cloneDeep(objects);
     * console.log(deep[0] === objects[0]);
     * // => false
     */
function Uu(e){return In(e,pe|he)}/**
     * This method is like `_.cloneWith` except that it recursively clones `value`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to recursively clone.
     * @param {Function} [customizer] The function to customize cloning.
     * @returns {*} Returns the deep cloned value.
     * @see _.cloneWith
     * @example
     *
     * function customizer(value) {
     *   if (_.isElement(value)) {
     *     return value.cloneNode(true);
     *   }
     * }
     *
     * var el = _.cloneDeepWith(document.body, customizer);
     *
     * console.log(el === document.body);
     * // => false
     * console.log(el.nodeName);
     * // => 'BODY'
     * console.log(el.childNodes.length);
     * // => 20
     */
function Xu(e,t){return t="function"==typeof t?t:ie,In(e,pe|he,t)}/**
     * Checks if `object` conforms to `source` by invoking the predicate
     * properties of `source` with the corresponding property values of `object`.
     *
     * **Note:** This method is equivalent to `_.conforms` when `source` is
     * partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property predicates to conform to.
     * @returns {boolean} Returns `true` if `object` conforms, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 1; } });
     * // => true
     *
     * _.conformsTo(object, { 'b': function(n) { return n > 2; } });
     * // => false
     */
function Gu(e,t){return null==t||Wn(e,t,Bs(t))}/**
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
function Yu(e,t){return e===t||e!==e&&t!==t}/**
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
function Qu(e){return null!=e&&us(e.length)&&!os(e)}/**
     * This method is like `_.isArrayLike` except that it also checks if `value`
     * is an object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an array-like object,
     *  else `false`.
     * @example
     *
     * _.isArrayLikeObject([1, 2, 3]);
     * // => true
     *
     * _.isArrayLikeObject(document.body.children);
     * // => true
     *
     * _.isArrayLikeObject('abc');
     * // => false
     *
     * _.isArrayLikeObject(_.noop);
     * // => false
     */
function Zu(e){return ls(e)&&Qu(e)}/**
     * Checks if `value` is classified as a boolean primitive or object.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a boolean, else `false`.
     * @example
     *
     * _.isBoolean(false);
     * // => true
     *
     * _.isBoolean(null);
     * // => false
     */
function Ju(e){return e===!0||e===!1||ls(e)&&fr(e)==$e}/**
     * Checks if `value` is likely a DOM element.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     *
     * _.isElement('<body>');
     * // => false
     */
function Ku(e){return ls(e)&&1===e.nodeType&&!ys(e)}/**
     * Checks if `value` is an empty object, collection, map, or set.
     *
     * Objects are considered empty if they have no own enumerable string keyed
     * properties.
     *
     * Array-like values such as `arguments` objects, arrays, buffers, strings, or
     * jQuery-like collections are considered empty if they have a `length` of `0`.
     * Similarly, maps and sets are considered empty if they have a `size` of `0`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty(null);
     * // => true
     *
     * _.isEmpty(true);
     * // => true
     *
     * _.isEmpty(1);
     * // => true
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({ 'a': 1 });
     * // => false
     */
function es(e){if(null==e)return!0;if(Qu(e)&&(wp(e)||"string"==typeof e||"function"==typeof e.splice||Tp(e)||Ap(e)||xp(e)))return!e.length;var t=Nf(e);if(t==Ze||t==it)return!e.size;if(Bo(e))return!zr(e).length;for(var n in e)if(xc.call(e,n))return!1;return!0}/**
     * Performs a deep comparison between two values to determine if they are
     * equivalent.
     *
     * **Note:** This method supports comparing arrays, array buffers, booleans,
     * date objects, error objects, maps, numbers, `Object` objects, regexes,
     * sets, strings, symbols, and typed arrays. `Object` objects are compared
     * by their own, not inherited, enumerable properties. Functions and DOM
     * nodes are compared by strict equality, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to compare.
     * @param {*} other The other value to compare.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'a': 1 };
     * var other = { 'a': 1 };
     *
     * _.isEqual(object, other);
     * // => true
     *
     * object === other;
     * // => false
     */
function ts(e,t){return Or(e,t)}/**
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
function ns(e,t,n){n="function"==typeof n?n:ie;var r=n?n(e,t):ie;return r===ie?Or(e,t,ie,n):!!r}/**
     * Checks if `value` is an `Error`, `EvalError`, `RangeError`, `ReferenceError`,
     * `SyntaxError`, `TypeError`, or `URIError` object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an error object, else `false`.
     * @example
     *
     * _.isError(new Error);
     * // => true
     *
     * _.isError(Error);
     * // => false
     */
function rs(e){if(!ls(e))return!1;var t=fr(e);return t==Ge||t==Xe||"string"==typeof e.message&&"string"==typeof e.name&&!ys(e)}/**
     * Checks if `value` is a finite primitive number.
     *
     * **Note:** This method is based on
     * [`Number.isFinite`](https://mdn.io/Number/isFinite).
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a finite number, else `false`.
     * @example
     *
     * _.isFinite(3);
     * // => true
     *
     * _.isFinite(Number.MIN_VALUE);
     * // => true
     *
     * _.isFinite(Infinity);
     * // => false
     *
     * _.isFinite('3');
     * // => false
     */
function is(e){return"number"==typeof e&&Uc(e)}/**
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
function os(e){if(!ss(e))return!1;
// The use of `Object#toString` avoids issues with the `typeof` operator
// in Safari 9 which returns 'object' for typed arrays and other constructors.
var t=fr(e);return t==Ye||t==Qe||t==Be||t==nt}/**
     * Checks if `value` is an integer.
     *
     * **Note:** This method is based on
     * [`Number.isInteger`](https://mdn.io/Number/isInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is an integer, else `false`.
     * @example
     *
     * _.isInteger(3);
     * // => true
     *
     * _.isInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isInteger(Infinity);
     * // => false
     *
     * _.isInteger('3');
     * // => false
     */
function as(e){return"number"==typeof e&&e==Cs(e)}/**
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
function us(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=Fe}/**
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
function ss(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}/**
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
function ls(e){return null!=e&&"object"==typeof e}/**
     * Performs a partial deep comparison between `object` and `source` to
     * determine if `object` contains equivalent property values.
     *
     * **Note:** This method is equivalent to `_.matches` when `source` is
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * var object = { 'a': 1, 'b': 2 };
     *
     * _.isMatch(object, { 'b': 2 });
     * // => true
     *
     * _.isMatch(object, { 'b': 1 });
     * // => false
     */
function cs(e,t){return e===t||Fr(e,t,jo(t))}/**
     * This method is like `_.isMatch` except that it accepts `customizer` which
     * is invoked to compare values. If `customizer` returns `undefined`, comparisons
     * are handled by the method instead. The `customizer` is invoked with five
     * arguments: (objValue, srcValue, index|key, object, source).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {Object} object The object to inspect.
     * @param {Object} source The object of property values to match.
     * @param {Function} [customizer] The function to customize comparisons.
     * @returns {boolean} Returns `true` if `object` is a match, else `false`.
     * @example
     *
     * function isGreeting(value) {
     *   return /^h(?:i|ello)$/.test(value);
     * }
     *
     * function customizer(objValue, srcValue) {
     *   if (isGreeting(objValue) && isGreeting(srcValue)) {
     *     return true;
     *   }
     * }
     *
     * var object = { 'greeting': 'hello' };
     * var source = { 'greeting': 'hi' };
     *
     * _.isMatchWith(object, source, customizer);
     * // => true
     */
function fs(e,t,n){return n="function"==typeof n?n:ie,Fr(e,t,jo(t),n)}/**
     * Checks if `value` is `NaN`.
     *
     * **Note:** This method is based on
     * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as
     * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for
     * `undefined` and other non-number values.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
function ps(e){
// An `NaN` primitive is the only value that is not equal to itself.
// Perform the `toStringTag` check first to avoid errors with some
// ActiveX objects in IE.
return vs(e)&&e!=+e}/**
     * Checks if `value` is a pristine native function.
     *
     * **Note:** This method can't reliably detect native functions in the presence
     * of the core-js package because core-js circumvents this kind of detection.
     * Despite multiple requests, the core-js maintainer has made it clear: any
     * attempt to fix the detection will be obstructed. As a result, we're left
     * with little choice but to throw an error. Unfortunately, this also affects
     * packages, like [babel-polyfill](https://www.npmjs.com/package/babel-polyfill),
     * which rely on core-js.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a native function,
     *  else `false`.
     * @example
     *
     * _.isNative(Array.prototype.push);
     * // => true
     *
     * _.isNative(_);
     * // => false
     */
function ds(e){if(Of(e))throw new sc(ue);return qr(e)}/**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(void 0);
     * // => false
     */
function hs(e){return null===e}/**
     * Checks if `value` is `null` or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
     * @example
     *
     * _.isNil(null);
     * // => true
     *
     * _.isNil(void 0);
     * // => true
     *
     * _.isNil(NaN);
     * // => false
     */
function gs(e){return null==e}/**
     * Checks if `value` is classified as a `Number` primitive or object.
     *
     * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
     * classified as numbers, use the `_.isFinite` method.
     *
     * @static
     * @memberOf _
     * @since 0.1.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(3);
     * // => true
     *
     * _.isNumber(Number.MIN_VALUE);
     * // => true
     *
     * _.isNumber(Infinity);
     * // => true
     *
     * _.isNumber('3');
     * // => false
     */
function vs(e){return"number"==typeof e||ls(e)&&fr(e)==Je}/**
     * Checks if `value` is a plain object, that is, an object created by the
     * `Object` constructor or one with a `[[Prototype]]` of `null`.
     *
     * @static
     * @memberOf _
     * @since 0.8.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     * }
     *
     * _.isPlainObject(new Foo);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     *
     * _.isPlainObject(Object.create(null));
     * // => true
     */
function ys(e){if(!ls(e)||fr(e)!=et)return!1;var t=Nc(e);if(null===t)return!0;var n=xc.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&bc.call(n)==Sc}/**
     * Checks if `value` is a safe integer. An integer is safe if it's an IEEE-754
     * double precision number which isn't the result of a rounded unsafe integer.
     *
     * **Note:** This method is based on
     * [`Number.isSafeInteger`](https://mdn.io/Number/isSafeInteger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a safe integer, else `false`.
     * @example
     *
     * _.isSafeInteger(3);
     * // => true
     *
     * _.isSafeInteger(Number.MIN_VALUE);
     * // => false
     *
     * _.isSafeInteger(Infinity);
     * // => false
     *
     * _.isSafeInteger('3');
     * // => false
     */
function ms(e){return as(e)&&e>=-Fe&&e<=Fe}/**
     * Checks if `value` is classified as a `String` primitive or object.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a string, else `false`.
     * @example
     *
     * _.isString('abc');
     * // => true
     *
     * _.isString(1);
     * // => false
     */
function bs(e){return"string"==typeof e||!wp(e)&&ls(e)&&fr(e)==ot}/**
     * Checks if `value` is classified as a `Symbol` primitive or object.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
     * @example
     *
     * _.isSymbol(Symbol.iterator);
     * // => true
     *
     * _.isSymbol('abc');
     * // => false
     */
function xs(e){return"symbol"==typeof e||ls(e)&&fr(e)==at}/**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     *
     * _.isUndefined(null);
     * // => false
     */
function ws(e){return e===ie}/**
     * Checks if `value` is classified as a `WeakMap` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak map, else `false`.
     * @example
     *
     * _.isWeakMap(new WeakMap);
     * // => true
     *
     * _.isWeakMap(new Map);
     * // => false
     */
function _s(e){return ls(e)&&Nf(e)==st}/**
     * Checks if `value` is classified as a `WeakSet` object.
     *
     * @static
     * @memberOf _
     * @since 4.3.0
     * @category Lang
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a weak set, else `false`.
     * @example
     *
     * _.isWeakSet(new WeakSet);
     * // => true
     *
     * _.isWeakSet(new Set);
     * // => false
     */
function Ts(e){return ls(e)&&fr(e)==lt}/**
     * Converts `value` to an array.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Array} Returns the converted array.
     * @example
     *
     * _.toArray({ 'a': 1, 'b': 2 });
     * // => [1, 2]
     *
     * _.toArray('abc');
     * // => ['a', 'b', 'c']
     *
     * _.toArray(1);
     * // => []
     *
     * _.toArray(null);
     * // => []
     */
function Ss(e){if(!e)return[];if(Qu(e))return bs(e)?ee(e):Ii(e);if(qc&&e[qc])return $(e[qc]());var t=Nf(e),n=t==Ze?U:t==it?Y:rl;return n(e)}/**
     * Converts `value` to a finite number.
     *
     * @static
     * @memberOf _
     * @since 4.12.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted number.
     * @example
     *
     * _.toFinite(3.2);
     * // => 3.2
     *
     * _.toFinite(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toFinite(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toFinite('3.2');
     * // => 3.2
     */
function ks(e){if(!e)return 0===e?e:0;if(e=As(e),e===De||e===-De){var t=e<0?-1:1;return t*qe}return e===e?e:0}/**
     * Converts `value` to an integer.
     *
     * **Note:** This method is loosely based on
     * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toInteger(3.2);
     * // => 3
     *
     * _.toInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toInteger(Infinity);
     * // => 1.7976931348623157e+308
     *
     * _.toInteger('3.2');
     * // => 3
     */
function Cs(e){var t=ks(e),n=t%1;return t===t?n?t-n:t:0}/**
     * Converts `value` to an integer suitable for use as the length of an
     * array-like object.
     *
     * **Note:** This method is based on
     * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toLength(3.2);
     * // => 3
     *
     * _.toLength(Number.MIN_VALUE);
     * // => 0
     *
     * _.toLength(Infinity);
     * // => 4294967295
     *
     * _.toLength('3.2');
     * // => 3
     */
function js(e){return e?Hn(Cs(e),0,Ve):0}/**
     * Converts `value` to a number.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to process.
     * @returns {number} Returns the number.
     * @example
     *
     * _.toNumber(3.2);
     * // => 3.2
     *
     * _.toNumber(Number.MIN_VALUE);
     * // => 5e-324
     *
     * _.toNumber(Infinity);
     * // => Infinity
     *
     * _.toNumber('3.2');
     * // => 3.2
     */
function As(e){if("number"==typeof e)return e;if(xs(e))return Re;if(ss(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=ss(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Rt,"");var n=Gt.test(e);return n||Qt.test(e)?ir(e.slice(2),n?2:8):Xt.test(e)?Re:+e}/**
     * Converts `value` to a plain object flattening inherited enumerable string
     * keyed properties of `value` to own properties of the plain object.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {Object} Returns the converted plain object.
     * @example
     *
     * function Foo() {
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.assign({ 'a': 1 }, new Foo);
     * // => { 'a': 1, 'b': 2 }
     *
     * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
     * // => { 'a': 1, 'b': 2, 'c': 3 }
     */
function Es(e){return zi(e,$s(e))}/**
     * Converts `value` to a safe integer. A safe integer can be compared and
     * represented correctly.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.toSafeInteger(3.2);
     * // => 3
     *
     * _.toSafeInteger(Number.MIN_VALUE);
     * // => 0
     *
     * _.toSafeInteger(Infinity);
     * // => 9007199254740991
     *
     * _.toSafeInteger('3.2');
     * // => 3
     */
function Ps(e){return e?Hn(Cs(e),-Fe,Fe):0===e?e:0}/**
     * Converts `value` to a string. An empty string is returned for `null`
     * and `undefined` values. The sign of `-0` is preserved.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Lang
     * @param {*} value The value to convert.
     * @returns {string} Returns the converted string.
     * @example
     *
     * _.toString(null);
     * // => ''
     *
     * _.toString(-0);
     * // => '-0'
     *
     * _.toString([1, 2, 3]);
     * // => '1,2,3'
     */
function Ns(e){return null==e?"":vi(e)}/**
     * Creates an object that inherits from the `prototype` object. If a
     * `properties` object is given, its own enumerable string keyed properties
     * are assigned to the created object.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Object
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, {
     *   'constructor': Circle
     * });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
function Os(e,t){var n=mf(e);return null==t?n:Fn(n,t)}/**
     * This method is like `_.find` except that it returns the key of the first
     * element `predicate` returns truthy for instead of the element itself.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findKey(users, function(o) { return o.age < 40; });
     * // => 'barney' (iteration order is not guaranteed)
     *
     * // The `_.matches` iteratee shorthand.
     * _.findKey(users, { 'age': 1, 'active': true });
     * // => 'pebbles'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findKey(users, 'active');
     * // => 'barney'
     */
function Ls(e,t){return _(e,ko(t,3),nr)}/**
     * This method is like `_.findKey` except that it iterates over elements of
     * a collection in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @param {Function} [predicate=_.identity] The function invoked per iteration.
     * @returns {string|undefined} Returns the key of the matched element,
     *  else `undefined`.
     * @example
     *
     * var users = {
     *   'barney':  { 'age': 36, 'active': true },
     *   'fred':    { 'age': 40, 'active': false },
     *   'pebbles': { 'age': 1,  'active': true }
     * };
     *
     * _.findLastKey(users, function(o) { return o.age < 40; });
     * // => returns 'pebbles' assuming `_.findKey` returns 'barney'
     *
     * // The `_.matches` iteratee shorthand.
     * _.findLastKey(users, { 'age': 36, 'active': true });
     * // => 'barney'
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.findLastKey(users, ['active', false]);
     * // => 'fred'
     *
     * // The `_.property` iteratee shorthand.
     * _.findLastKey(users, 'active');
     * // => 'pebbles'
     */
function Ds(e,t){return _(e,ko(t,3),or)}/**
     * Iterates over own and inherited enumerable string keyed properties of an
     * object and invokes `iteratee` for each property. The iteratee is invoked
     * with three arguments: (value, key, object). Iteratee functions may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forInRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forIn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
     */
function Fs(e,t){return null==e?e:wf(e,ko(t,3),$s)}/**
     * This method is like `_.forIn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forIn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forInRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
     */
function qs(e,t){return null==e?e:_f(e,ko(t,3),$s)}/**
     * Iterates over own enumerable string keyed properties of an object and
     * invokes `iteratee` for each property. The iteratee is invoked with three
     * arguments: (value, key, object). Iteratee functions may exit iteration
     * early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 0.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwnRight
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwn(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'a' then 'b' (iteration order is not guaranteed).
     */
function Rs(e,t){return e&&nr(e,ko(t,3))}/**
     * This method is like `_.forOwn` except that it iterates over properties of
     * `object` in the opposite order.
     *
     * @static
     * @memberOf _
     * @since 2.0.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns `object`.
     * @see _.forOwn
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.forOwnRight(new Foo, function(value, key) {
     *   console.log(key);
     * });
     * // => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
     */
function Vs(e,t){return e&&or(e,ko(t,3))}/**
     * Creates an array of function property names from own enumerable properties
     * of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functionsIn
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functions(new Foo);
     * // => ['a', 'b']
     */
function Hs(e){return null==e?[]:ar(e,Bs(e))}/**
     * Creates an array of function property names from own and inherited
     * enumerable properties of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns the function names.
     * @see _.functions
     * @example
     *
     * function Foo() {
     *   this.a = _.constant('a');
     *   this.b = _.constant('b');
     * }
     *
     * Foo.prototype.c = _.constant('c');
     *
     * _.functionsIn(new Foo);
     * // => ['a', 'b', 'c']
     */
function Is(e){return null==e?[]:ar(e,$s(e))}/**
     * Gets the value at `path` of `object`. If the resolved value is
     * `undefined`, the `defaultValue` is returned in its place.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to get.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.get(object, 'a[0].b.c');
     * // => 3
     *
     * _.get(object, ['a', '0', 'b', 'c']);
     * // => 3
     *
     * _.get(object, 'a.b.c', 'default');
     * // => 'default'
     */
function zs(e,t,n){var r=null==e?ie:sr(e,t);return r===ie?n:r}/**
     * Checks if `path` is a direct property of `object`.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = { 'a': { 'b': 2 } };
     * var other = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.has(object, 'a');
     * // => true
     *
     * _.has(object, 'a.b');
     * // => true
     *
     * _.has(object, ['a', 'b']);
     * // => true
     *
     * _.has(other, 'a');
     * // => false
     */
function Ws(e,t){return null!=e&&Oo(e,t,br)}/**
     * Checks if `path` is a direct or inherited property of `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path to check.
     * @returns {boolean} Returns `true` if `path` exists, else `false`.
     * @example
     *
     * var object = _.create({ 'a': _.create({ 'b': 2 }) });
     *
     * _.hasIn(object, 'a');
     * // => true
     *
     * _.hasIn(object, 'a.b');
     * // => true
     *
     * _.hasIn(object, ['a', 'b']);
     * // => true
     *
     * _.hasIn(object, 'b');
     * // => false
     */
function Ms(e,t){return null!=e&&Oo(e,t,Tr)}/**
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
function Bs(e){return Qu(e)?jn(e):zr(e)}/**
     * Creates an array of the own and inherited enumerable property names of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
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
     * _.keysIn(new Foo);
     * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
     */
function $s(e){return Qu(e)?jn(e,!0):Wr(e)}/**
     * The opposite of `_.mapValues`; this method creates an object with the
     * same values as `object` and keys generated by running each own enumerable
     * string keyed property of `object` thru `iteratee`. The iteratee is invoked
     * with three arguments: (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 3.8.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapValues
     * @example
     *
     * _.mapKeys({ 'a': 1, 'b': 2 }, function(value, key) {
     *   return key + value;
     * });
     * // => { 'a1': 1, 'b2': 2 }
     */
function Us(e,t){var n={};return t=ko(t,3),nr(e,function(e,r,i){Rn(n,t(e,r,i),e)}),n}/**
     * Creates an object with the same keys as `object` and values generated
     * by running each own enumerable string keyed property of `object` thru
     * `iteratee`. The iteratee is invoked with three arguments:
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Object} Returns the new mapped object.
     * @see _.mapKeys
     * @example
     *
     * var users = {
     *   'fred':    { 'user': 'fred',    'age': 40 },
     *   'pebbles': { 'user': 'pebbles', 'age': 1 }
     * };
     *
     * _.mapValues(users, function(o) { return o.age; });
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     *
     * // The `_.property` iteratee shorthand.
     * _.mapValues(users, 'age');
     * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
     */
function Xs(e,t){var n={};return t=ko(t,3),nr(e,function(e,r,i){Rn(n,r,t(e,r,i))}),n}/**
     * The opposite of `_.pickBy`; this method creates an object composed of
     * the own and inherited enumerable string keyed properties of `object` that
     * `predicate` doesn't return truthy for. The predicate is invoked with two
     * arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.omitBy(object, _.isNumber);
     * // => { 'b': '2' }
     */
function Gs(e,t){return Ys(e,qu(ko(t)))}/**
     * Creates an object composed of the `object` properties `predicate` returns
     * truthy for. The predicate is invoked with two arguments: (value, key).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The source object.
     * @param {Function} [predicate=_.identity] The function invoked per property.
     * @returns {Object} Returns the new object.
     * @example
     *
     * var object = { 'a': 1, 'b': '2', 'c': 3 };
     *
     * _.pickBy(object, _.isNumber);
     * // => { 'a': 1, 'c': 3 }
     */
function Ys(e,t){if(null==e)return{};var n=g(_o(e),function(e){return[e]});return t=ko(t),Jr(e,n,function(e,n){return t(e,n[0])})}/**
     * This method is like `_.get` except that if the resolved value is a
     * function it's invoked with the `this` binding of its parent object and
     * its result is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @param {Array|string} path The path of the property to resolve.
     * @param {*} [defaultValue] The value returned for `undefined` resolved values.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c1': 3, 'c2': _.constant(4) } }] };
     *
     * _.result(object, 'a[0].b.c1');
     * // => 3
     *
     * _.result(object, 'a[0].b.c2');
     * // => 4
     *
     * _.result(object, 'a[0].b.c3', 'default');
     * // => 'default'
     *
     * _.result(object, 'a[0].b.c3', _.constant('default'));
     * // => 'default'
     */
function Qs(e,t,n){t=Ci(t,e);var r=-1,i=t.length;for(
// Ensure the loop is entered when path is empty.
i||(i=1,e=ie);++r<i;){var o=null==e?ie:e[ra(t[r])];o===ie&&(r=i,o=n),e=os(o)?o.call(e):o}return e}/**
     * Sets the value at `path` of `object`. If a portion of `path` doesn't exist,
     * it's created. Arrays are created for missing index properties while objects
     * are created for all other missing properties. Use `_.setWith` to customize
     * `path` creation.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 3.7.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.set(object, 'a[0].b.c', 4);
     * console.log(object.a[0].b.c);
     * // => 4
     *
     * _.set(object, ['x', '0', 'y', 'z'], 5);
     * console.log(object.x[0].y.z);
     * // => 5
     */
function Zs(e,t,n){return null==e?e:si(e,t,n)}/**
     * This method is like `_.set` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {*} value The value to set.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.setWith(object, '[0][1]', 'a', Object);
     * // => { '0': { '1': 'a' } }
     */
function Js(e,t,n,r){return r="function"==typeof r?r:ie,null==e?e:si(e,t,n,r)}/**
     * An alternative to `_.reduce`; this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable string keyed properties thru `iteratee`, with each invocation
     * potentially mutating the `accumulator` object. If `accumulator` is not
     * provided, a new object with the same `[[Prototype]]` will be used. The
     * iteratee is invoked with four arguments: (accumulator, value, key, object).
     * Iteratee functions may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @since 1.3.0
     * @category Object
     * @param {Object} object The object to iterate over.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * _.transform([2, 3, 4], function(result, n) {
     *   result.push(n *= n);
     *   return n % 2 == 0;
     * }, []);
     * // => [4, 9]
     *
     * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
     *   (result[value] || (result[value] = [])).push(key);
     * }, {});
     * // => { '1': ['a', 'c'], '2': ['b'] }
     */
function Ks(e,t,n){var r=wp(e),i=r||Tp(e)||Ap(e);if(t=ko(t,4),null==n){var o=e&&e.constructor;n=i?r?new o:[]:ss(e)&&os(o)?mf(Nc(e)):{}}return(i?l:nr)(e,function(e,r,i){return t(n,e,r,i)}),n}/**
     * Removes the property at `path` of `object`.
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to unset.
     * @returns {boolean} Returns `true` if the property is deleted, else `false`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 7 } }] };
     * _.unset(object, 'a[0].b.c');
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     *
     * _.unset(object, ['a', '0', 'b', 'c']);
     * // => true
     *
     * console.log(object);
     * // => { 'a': [{ 'b': {} }] };
     */
function el(e,t){return null==e||mi(e,t)}/**
     * This method is like `_.set` except that accepts `updater` to produce the
     * value to set. Use `_.updateWith` to customize `path` creation. The `updater`
     * is invoked with one argument: (value).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = { 'a': [{ 'b': { 'c': 3 } }] };
     *
     * _.update(object, 'a[0].b.c', function(n) { return n * n; });
     * console.log(object.a[0].b.c);
     * // => 9
     *
     * _.update(object, 'x[0].y.z', function(n) { return n ? n + 1 : 0; });
     * console.log(object.x[0].y.z);
     * // => 0
     */
function tl(e,t,n){return null==e?e:bi(e,t,ki(n))}/**
     * This method is like `_.update` except that it accepts `customizer` which is
     * invoked to produce the objects of `path`.  If `customizer` returns `undefined`
     * path creation is handled by the method instead. The `customizer` is invoked
     * with three arguments: (nsValue, key, nsObject).
     *
     * **Note:** This method mutates `object`.
     *
     * @static
     * @memberOf _
     * @since 4.6.0
     * @category Object
     * @param {Object} object The object to modify.
     * @param {Array|string} path The path of the property to set.
     * @param {Function} updater The function to produce the updated value.
     * @param {Function} [customizer] The function to customize assigned values.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var object = {};
     *
     * _.updateWith(object, '[0][1]', _.constant('a'), Object);
     * // => { '0': { '1': 'a' } }
     */
function nl(e,t,n,r){return r="function"==typeof r?r:ie,null==e?e:bi(e,t,ki(n),r)}/**
     * Creates an array of the own enumerable string keyed property values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.values(new Foo);
     * // => [1, 2] (iteration order is not guaranteed)
     *
     * _.values('hi');
     * // => ['h', 'i']
     */
function rl(e){return null==e?[]:q(e,Bs(e))}/**
     * Creates an array of the own and inherited enumerable string keyed property
     * values of `object`.
     *
     * **Note:** Non-object values are coerced to objects.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Object
     * @param {Object} object The object to query.
     * @returns {Array} Returns the array of property values.
     * @example
     *
     * function Foo() {
     *   this.a = 1;
     *   this.b = 2;
     * }
     *
     * Foo.prototype.c = 3;
     *
     * _.valuesIn(new Foo);
     * // => [1, 2, 3] (iteration order is not guaranteed)
     */
function il(e){return null==e?[]:q(e,$s(e))}/*------------------------------------------------------------------------*/
/**
     * Clamps `number` within the inclusive `lower` and `upper` bounds.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Number
     * @param {number} number The number to clamp.
     * @param {number} [lower] The lower bound.
     * @param {number} upper The upper bound.
     * @returns {number} Returns the clamped number.
     * @example
     *
     * _.clamp(-10, -5, 5);
     * // => -5
     *
     * _.clamp(10, -5, 5);
     * // => 5
     */
function ol(e,t,n){return n===ie&&(n=t,t=ie),n!==ie&&(n=As(n),n=n===n?n:0),t!==ie&&(t=As(t),t=t===t?t:0),Hn(As(e),t,n)}/**
     * Checks if `n` is between `start` and up to, but not including, `end`. If
     * `end` is not specified, it's set to `start` with `start` then set to `0`.
     * If `start` is greater than `end` the params are swapped to support
     * negative ranges.
     *
     * @static
     * @memberOf _
     * @since 3.3.0
     * @category Number
     * @param {number} number The number to check.
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @returns {boolean} Returns `true` if `number` is in the range, else `false`.
     * @see _.range, _.rangeRight
     * @example
     *
     * _.inRange(3, 2, 4);
     * // => true
     *
     * _.inRange(4, 8);
     * // => true
     *
     * _.inRange(4, 2);
     * // => false
     *
     * _.inRange(2, 2);
     * // => false
     *
     * _.inRange(1.2, 2);
     * // => true
     *
     * _.inRange(5.2, 4);
     * // => false
     *
     * _.inRange(-3, -2, -6);
     * // => true
     */
function al(e,t,n){return t=ks(t),n===ie?(n=t,t=0):n=ks(n),e=As(e),kr(e,t,n)}/**
     * Produces a random number between the inclusive `lower` and `upper` bounds.
     * If only one argument is provided a number between `0` and the given number
     * is returned. If `floating` is `true`, or either `lower` or `upper` are
     * floats, a floating-point number is returned instead of an integer.
     *
     * **Note:** JavaScript follows the IEEE-754 standard for resolving
     * floating-point values which can produce unexpected results.
     *
     * @static
     * @memberOf _
     * @since 0.7.0
     * @category Number
     * @param {number} [lower=0] The lower bound.
     * @param {number} [upper=1] The upper bound.
     * @param {boolean} [floating] Specify returning a floating-point number.
     * @returns {number} Returns the random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
function ul(e,t,n){if(n&&"boolean"!=typeof n&&Ho(e,t,n)&&(t=n=ie),n===ie&&("boolean"==typeof t?(n=t,t=ie):"boolean"==typeof e&&(n=e,e=ie)),e===ie&&t===ie?(e=0,t=1):(e=ks(e),t===ie?(t=e,e=0):t=ks(t)),e>t){var r=e;e=t,t=r}if(n||e%1||t%1){var i=Kc();return Qc(e+i*(t-e+rr("1e-"+((i+"").length-1))),t)}return ni(e,t)}/**
     * Converts the first character of `string` to upper case and the remaining
     * to lower case.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to capitalize.
     * @returns {string} Returns the capitalized string.
     * @example
     *
     * _.capitalize('FRED');
     * // => 'Fred'
     */
function sl(e){return ed(Ns(e).toLowerCase())}/**
     * Deburrs `string` by converting
     * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
     * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
     * letters to basic Latin letters and removing
     * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to deburr.
     * @returns {string} Returns the deburred string.
     * @example
     *
     * _.deburr('déjà vu');
     * // => 'deja vu'
     */
function ll(e){return e=Ns(e),e&&e.replace(Jt,xr).replace(Bn,"")}/**
     * Checks if `string` ends with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=string.length] The position to search up to.
     * @returns {boolean} Returns `true` if `string` ends with `target`,
     *  else `false`.
     * @example
     *
     * _.endsWith('abc', 'c');
     * // => true
     *
     * _.endsWith('abc', 'b');
     * // => false
     *
     * _.endsWith('abc', 'b', 2);
     * // => true
     */
function cl(e,t,n){e=Ns(e),t=vi(t);var r=e.length;n=n===ie?r:Hn(Cs(n),0,r);var i=n;return n-=t.length,n>=0&&e.slice(n,i)==t}/**
     * Converts the characters "&", "<", ">", '"', and "'" in `string` to their
     * corresponding HTML entities.
     *
     * **Note:** No other characters are escaped. To escape additional
     * characters use a third-party library like [_he_](https://mths.be/he).
     *
     * Though the ">" character is escaped for symmetry, characters like
     * ">" and "/" don't need escaping in HTML and have no special meaning
     * unless they're part of a tag or unquoted attribute value. See
     * [Mathias Bynens's article](https://mathiasbynens.be/notes/ambiguous-ampersands)
     * (under "semi-related fun fact") for more details.
     *
     * When working with HTML you should always
     * [quote attribute values](http://wonko.com/post/html-escaping) to reduce
     * XSS vectors.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('fred, barney, & pebbles');
     * // => 'fred, barney, &amp; pebbles'
     */
function fl(e){return e=Ns(e),e&&jt.test(e)?e.replace(kt,wr):e}/**
     * Escapes the `RegExp` special characters "^", "$", "\", ".", "*", "+",
     * "?", "(", ")", "[", "]", "{", "}", and "|" in `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escapeRegExp('[lodash](https://lodash.com/)');
     * // => '\[lodash\]\(https://lodash\.com/\)'
     */
function pl(e){return e=Ns(e),e&&qt.test(e)?e.replace(Ft,"\\$&"):e}/**
     * Pads `string` on the left and right sides if it's shorter than `length`.
     * Padding characters are truncated if they can't be evenly divided by `length`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.pad('abc', 8);
     * // => '  abc   '
     *
     * _.pad('abc', 8, '_-');
     * // => '_-abc_-_'
     *
     * _.pad('abc', 3);
     * // => 'abc'
     */
function dl(e,t,n){e=Ns(e),t=Cs(t);var r=t?K(e):0;if(!t||r>=t)return e;var i=(t-r)/2;return oo(Mc(i),n)+e+oo(Wc(i),n)}/**
     * Pads `string` on the right side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padEnd('abc', 6);
     * // => 'abc   '
     *
     * _.padEnd('abc', 6, '_-');
     * // => 'abc_-_'
     *
     * _.padEnd('abc', 3);
     * // => 'abc'
     */
function hl(e,t,n){e=Ns(e),t=Cs(t);var r=t?K(e):0;return t&&r<t?e+oo(t-r,n):e}/**
     * Pads `string` on the left side if it's shorter than `length`. Padding
     * characters are truncated if they exceed `length`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to pad.
     * @param {number} [length=0] The padding length.
     * @param {string} [chars=' '] The string used as padding.
     * @returns {string} Returns the padded string.
     * @example
     *
     * _.padStart('abc', 6);
     * // => '   abc'
     *
     * _.padStart('abc', 6, '_-');
     * // => '_-_abc'
     *
     * _.padStart('abc', 3);
     * // => 'abc'
     */
function gl(e,t,n){e=Ns(e),t=Cs(t);var r=t?K(e):0;return t&&r<t?oo(t-r,n)+e:e}/**
     * Converts `string` to an integer of the specified radix. If `radix` is
     * `undefined` or `0`, a `radix` of `10` is used unless `value` is a
     * hexadecimal, in which case a `radix` of `16` is used.
     *
     * **Note:** This method aligns with the
     * [ES5 implementation](https://es5.github.io/#x15.1.2.2) of `parseInt`.
     *
     * @static
     * @memberOf _
     * @since 1.1.0
     * @category String
     * @param {string} string The string to convert.
     * @param {number} [radix=10] The radix to interpret `value` by.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {number} Returns the converted integer.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     *
     * _.map(['6', '08', '10'], _.parseInt);
     * // => [6, 8, 10]
     */
function vl(e,t,n){return n||null==t?t=0:t&&(t=+t),Jc(Ns(e).replace(Vt,""),t||0)}/**
     * Repeats the given string `n` times.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to repeat.
     * @param {number} [n=1] The number of times to repeat the string.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the repeated string.
     * @example
     *
     * _.repeat('*', 3);
     * // => '***'
     *
     * _.repeat('abc', 2);
     * // => 'abcabc'
     *
     * _.repeat('abc', 0);
     * // => ''
     */
function yl(e,t,n){return t=(n?Ho(e,t,n):t===ie)?1:Cs(t),ii(Ns(e),t)}/**
     * Replaces matches for `pattern` in `string` with `replacement`.
     *
     * **Note:** This method is based on
     * [`String#replace`](https://mdn.io/String/replace).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to modify.
     * @param {RegExp|string} pattern The pattern to replace.
     * @param {Function|string} replacement The match replacement.
     * @returns {string} Returns the modified string.
     * @example
     *
     * _.replace('Hi Fred', 'Fred', 'Barney');
     * // => 'Hi Barney'
     */
function ml(){var e=arguments,t=Ns(e[0]);return e.length<3?t:t.replace(e[1],e[2])}/**
     * Splits `string` by `separator`.
     *
     * **Note:** This method is based on
     * [`String#split`](https://mdn.io/String/split).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to split.
     * @param {RegExp|string} separator The separator pattern to split by.
     * @param {number} [limit] The length to truncate results to.
     * @returns {Array} Returns the string segments.
     * @example
     *
     * _.split('a-b-c', '-', 2);
     * // => ['a', 'b']
     */
function bl(e,t,n){return n&&"number"!=typeof n&&Ho(e,t,n)&&(t=n=ie),(n=n===ie?Ve:n>>>0)?(e=Ns(e),e&&("string"==typeof t||null!=t&&!Cp(t))&&(t=vi(t),!t&&M(e))?ji(ee(e),0,n):e.split(t,n)):[]}/**
     * Checks if `string` starts with the given target string.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {string} [target] The string to search for.
     * @param {number} [position=0] The position to search from.
     * @returns {boolean} Returns `true` if `string` starts with `target`,
     *  else `false`.
     * @example
     *
     * _.startsWith('abc', 'a');
     * // => true
     *
     * _.startsWith('abc', 'b');
     * // => false
     *
     * _.startsWith('abc', 'b', 1);
     * // => true
     */
function xl(e,t,n){return e=Ns(e),n=null==n?0:Hn(Cs(n),0,e.length),t=vi(t),e.slice(n,n+t.length)==t}/**
     * Creates a compiled template function that can interpolate data properties
     * in "interpolate" delimiters, HTML-escape interpolated data properties in
     * "escape" delimiters, and execute JavaScript in "evaluate" delimiters. Data
     * properties may be accessed as free variables in the template. If a setting
     * object is given, it takes precedence over `_.templateSettings` values.
     *
     * **Note:** In the development build `_.template` utilizes
     * [sourceURLs](http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl)
     * for easier debugging.
     *
     * For more information on precompiling templates see
     * [lodash's custom builds documentation](https://lodash.com/custom-builds).
     *
     * For more information on Chrome extension sandboxes see
     * [Chrome's extensions documentation](https://developer.chrome.com/extensions/sandboxingEval).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category String
     * @param {string} [string=''] The template string.
     * @param {Object} [options={}] The options object.
     * @param {RegExp} [options.escape=_.templateSettings.escape]
     *  The HTML "escape" delimiter.
     * @param {RegExp} [options.evaluate=_.templateSettings.evaluate]
     *  The "evaluate" delimiter.
     * @param {Object} [options.imports=_.templateSettings.imports]
     *  An object to import into the template as free variables.
     * @param {RegExp} [options.interpolate=_.templateSettings.interpolate]
     *  The "interpolate" delimiter.
     * @param {string} [options.sourceURL='lodash.templateSources[n]']
     *  The sourceURL of the compiled template.
     * @param {string} [options.variable='obj']
     *  The data object variable name.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Function} Returns the compiled template function.
     * @example
     *
     * // Use the "interpolate" delimiter to create a compiled template.
     * var compiled = _.template('hello <%= user %>!');
     * compiled({ 'user': 'fred' });
     * // => 'hello fred!'
     *
     * // Use the HTML "escape" delimiter to escape data property values.
     * var compiled = _.template('<b><%- value %></b>');
     * compiled({ 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // Use the "evaluate" delimiter to execute JavaScript and generate HTML.
     * var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the internal `print` function in "evaluate" delimiters.
     * var compiled = _.template('<% print("hello " + user); %>!');
     * compiled({ 'user': 'barney' });
     * // => 'hello barney!'
     *
     * // Use the ES template literal delimiter as an "interpolate" delimiter.
     * // Disable support by replacing the "interpolate" delimiter.
     * var compiled = _.template('hello ${ user }!');
     * compiled({ 'user': 'pebbles' });
     * // => 'hello pebbles!'
     *
     * // Use backslashes to treat delimiters as plain text.
     * var compiled = _.template('<%= "\\<%- value %\\>" %>');
     * compiled({ 'value': 'ignored' });
     * // => '<%- value %>'
     *
     * // Use the `imports` option to import `jQuery` as `jq`.
     * var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
     * var compiled = _.template(text, { 'imports': { 'jq': jQuery } });
     * compiled({ 'users': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // Use the `sourceURL` option to specify a custom sourceURL for the template.
     * var compiled = _.template('hello <%= user %>!', { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.
     *
     * // Use the `variable` option to ensure a with-statement isn't used in the compiled template.
     * var compiled = _.template('hi <%= data.user %>!', { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     * //   var __t, __p = '';
     * //   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
     * //   return __p;
     * // }
     *
     * // Use custom template delimiters.
     * _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
     * var compiled = _.template('hello {{ user }}!');
     * compiled({ 'user': 'mustache' });
     * // => 'hello mustache!'
     *
     * // Use the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and stack traces.
     * fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
function wl(e,t,r){
// Based on John Resig's `tmpl` implementation
// (http://ejohn.org/blog/javascript-micro-templating/)
// and Laura Doktorova's doT.js (https://github.com/olado/doT).
var i=n.templateSettings;r&&Ho(e,t,r)&&(t=ie),e=Ns(e),t=Lp({},t,i,ho);var o,a,u=Lp({},t.imports,i.imports,ho),s=Bs(u),l=q(u,s),c=0,f=t.interpolate||Kt,p="__p += '",d=pc((t.escape||Kt).source+"|"+f.source+"|"+(f===Pt?$t:Kt).source+"|"+(t.evaluate||Kt).source+"|$","g"),h="//# sourceURL="+("sourceURL"in t?t.sourceURL:"lodash.templateSources["+ ++Qn+"]")+"\n";e.replace(d,function(t,n,r,i,u,s){
// The JS engine embedded in Adobe products needs `match` returned in
// order to produce the correct `offset` value.
// Escape characters that can't be included in string literals.
// Replace delimiters with snippets.
return r||(r=i),p+=e.slice(c,s).replace(en,z),n&&(o=!0,p+="' +\n__e("+n+") +\n'"),u&&(a=!0,p+="';\n"+u+";\n__p += '"),r&&(p+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),c=s+t.length,t}),p+="';\n";
// If `variable` is not specified wrap a with-statement around the generated
// code to add the data object to the top of the scope chain.
var g=t.variable;g||(p="with (obj) {\n"+p+"\n}\n"),
// Cleanup code by stripping empty strings.
p=(a?p.replace(wt,""):p).replace(_t,"$1").replace(Tt,"$1;"),
// Frame code as the function body.
p="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(o?", __e = _.escape":"")+(a?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+p+"return __p\n}";var v=td(function(){return lc(s,h+"return "+p).apply(ie,l)});if(
// Provide the compiled function's source by its `toString` method or
// the `source` property as a convenience for inlining compiled templates.
v.source=p,rs(v))throw v;return v}/**
     * Converts `string`, as a whole, to lower case just like
     * [String#toLowerCase](https://mdn.io/toLowerCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the lower cased string.
     * @example
     *
     * _.toLower('--Foo-Bar--');
     * // => '--foo-bar--'
     *
     * _.toLower('fooBar');
     * // => 'foobar'
     *
     * _.toLower('__FOO_BAR__');
     * // => '__foo_bar__'
     */
function _l(e){return Ns(e).toLowerCase()}/**
     * Converts `string`, as a whole, to upper case just like
     * [String#toUpperCase](https://mdn.io/toUpperCase).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to convert.
     * @returns {string} Returns the upper cased string.
     * @example
     *
     * _.toUpper('--foo-bar--');
     * // => '--FOO-BAR--'
     *
     * _.toUpper('fooBar');
     * // => 'FOOBAR'
     *
     * _.toUpper('__foo_bar__');
     * // => '__FOO_BAR__'
     */
function Tl(e){return Ns(e).toUpperCase()}/**
     * Removes leading and trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trim('  abc  ');
     * // => 'abc'
     *
     * _.trim('-_-abc-_-', '_-');
     * // => 'abc'
     *
     * _.map(['  foo  ', '  bar  '], _.trim);
     * // => ['foo', 'bar']
     */
function Sl(e,t,n){if(e=Ns(e),e&&(n||t===ie))return e.replace(Rt,"");if(!e||!(t=vi(t)))return e;var r=ee(e),i=ee(t),o=V(r,i),a=H(r,i)+1;return ji(r,o,a).join("")}/**
     * Removes trailing whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimEnd('  abc  ');
     * // => '  abc'
     *
     * _.trimEnd('-_-abc-_-', '_-');
     * // => '-_-abc'
     */
function kl(e,t,n){if(e=Ns(e),e&&(n||t===ie))return e.replace(Ht,"");if(!e||!(t=vi(t)))return e;var r=ee(e),i=H(r,ee(t))+1;return ji(r,0,i).join("")}/**
     * Removes leading whitespace or specified characters from `string`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to trim.
     * @param {string} [chars=whitespace] The characters to trim.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {string} Returns the trimmed string.
     * @example
     *
     * _.trimStart('  abc  ');
     * // => 'abc  '
     *
     * _.trimStart('-_-abc-_-', '_-');
     * // => 'abc-_-'
     */
function Cl(e,t,n){if(e=Ns(e),e&&(n||t===ie))return e.replace(Vt,"");if(!e||!(t=vi(t)))return e;var r=ee(e),i=V(r,ee(t));return ji(r,i).join("")}/**
     * Truncates `string` if it's longer than the given maximum string length.
     * The last characters of the truncated string are replaced with the omission
     * string which defaults to "...".
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category String
     * @param {string} [string=''] The string to truncate.
     * @param {Object} [options={}] The options object.
     * @param {number} [options.length=30] The maximum string length.
     * @param {string} [options.omission='...'] The string to indicate text is omitted.
     * @param {RegExp|string} [options.separator] The separator pattern to truncate to.
     * @returns {string} Returns the truncated string.
     * @example
     *
     * _.truncate('hi-diddly-ho there, neighborino');
     * // => 'hi-diddly-ho there, neighbo...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': ' '
     * });
     * // => 'hi-diddly-ho there,...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'length': 24,
     *   'separator': /,? +/
     * });
     * // => 'hi-diddly-ho there...'
     *
     * _.truncate('hi-diddly-ho there, neighborino', {
     *   'omission': ' [...]'
     * });
     * // => 'hi-diddly-ho there, neig [...]'
     */
function jl(e,t){var n=je,r=Ae;if(ss(t)){var i="separator"in t?t.separator:i;n="length"in t?Cs(t.length):n,r="omission"in t?vi(t.omission):r}e=Ns(e);var o=e.length;if(M(e)){var a=ee(e);o=a.length}if(n>=o)return e;var u=n-K(r);if(u<1)return r;var s=a?ji(a,0,u).join(""):e.slice(0,u);if(i===ie)return s+r;if(a&&(u+=s.length-u),Cp(i)){if(e.slice(u).search(i)){var l,c=s;for(i.global||(i=pc(i.source,Ns(Ut.exec(i))+"g")),i.lastIndex=0;l=i.exec(c);)var f=l.index;s=s.slice(0,f===ie?u:f)}}else if(e.indexOf(vi(i),u)!=u){var p=s.lastIndexOf(i);p>-1&&(s=s.slice(0,p))}return s+r}/**
     * The inverse of `_.escape`; this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to
     * their corresponding characters.
     *
     * **Note:** No other HTML entities are unescaped. To unescape additional
     * HTML entities use a third-party library like [_he_](https://mths.be/he).
     *
     * @static
     * @memberOf _
     * @since 0.6.0
     * @category String
     * @param {string} [string=''] The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('fred, barney, &amp; pebbles');
     * // => 'fred, barney, & pebbles'
     */
function Al(e){return e=Ns(e),e&&Ct.test(e)?e.replace(St,_r):e}/**
     * Splits `string` into an array of its words.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category String
     * @param {string} [string=''] The string to inspect.
     * @param {RegExp|string} [pattern] The pattern to match words.
     * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
     * @returns {Array} Returns the words of `string`.
     * @example
     *
     * _.words('fred, barney, & pebbles');
     * // => ['fred', 'barney', 'pebbles']
     *
     * _.words('fred, barney, & pebbles', /[^, ]+/g);
     * // => ['fred', 'barney', '&', 'pebbles']
     */
function El(e,t,n){return e=Ns(e),t=n?ie:t,t===ie?B(e)?re(e):w(e):e.match(t)||[]}/**
     * Creates a function that iterates over `pairs` and invokes the corresponding
     * function of the first predicate to return truthy. The predicate-function
     * pairs are invoked with the `this` binding and arguments of the created
     * function.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Array} pairs The predicate-function pairs.
     * @returns {Function} Returns the new composite function.
     * @example
     *
     * var func = _.cond([
     *   [_.matches({ 'a': 1 }),           _.constant('matches A')],
     *   [_.conforms({ 'b': _.isNumber }), _.constant('matches B')],
     *   [_.stubTrue,                      _.constant('no match')]
     * ]);
     *
     * func({ 'a': 1, 'b': 2 });
     * // => 'matches A'
     *
     * func({ 'a': 0, 'b': 1 });
     * // => 'matches B'
     *
     * func({ 'a': '1', 'b': '2' });
     * // => 'no match'
     */
function Pl(e){var t=null==e?0:e.length,n=ko();return e=t?g(e,function(e){if("function"!=typeof e[1])throw new hc(se);return[n(e[0]),e[1]]}):[],oi(function(n){for(var r=-1;++r<t;){var i=e[r];if(u(i[0],this,n))return u(i[1],this,n)}})}/**
     * Creates a function that invokes the predicate properties of `source` with
     * the corresponding property values of a given object, returning `true` if
     * all predicates return truthy, else `false`.
     *
     * **Note:** The created function is equivalent to `_.conformsTo` with
     * `source` partially applied.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {Object} source The object of property predicates to conform to.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 2, 'b': 1 },
     *   { 'a': 1, 'b': 2 }
     * ];
     *
     * _.filter(objects, _.conforms({ 'b': function(n) { return n > 1; } }));
     * // => [{ 'a': 1, 'b': 2 }]
     */
function Nl(e){return zn(In(e,pe))}/**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new constant function.
     * @example
     *
     * var objects = _.times(2, _.constant({ 'a': 1 }));
     *
     * console.log(objects);
     * // => [{ 'a': 1 }, { 'a': 1 }]
     *
     * console.log(objects[0] === objects[1]);
     * // => true
     */
function Ol(e){return function(){return e}}/**
     * Checks `value` to determine whether a default value should be returned in
     * its place. The `defaultValue` is returned if `value` is `NaN`, `null`,
     * or `undefined`.
     *
     * @static
     * @memberOf _
     * @since 4.14.0
     * @category Util
     * @param {*} value The value to check.
     * @param {*} defaultValue The default value.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * _.defaultTo(1, 10);
     * // => 1
     *
     * _.defaultTo(undefined, 10);
     * // => 10
     */
function Ll(e,t){return null==e||e!==e?t:e}/**
     * This method returns the first argument it receives.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'a': 1 };
     *
     * console.log(_.identity(object) === object);
     * // => true
     */
function Dl(e){return e}/**
     * Creates a function that invokes `func` with the arguments of the created
     * function. If `func` is a property name, the created function returns the
     * property value for a given element. If `func` is an array or object, the
     * created function returns `true` for elements that contain the equivalent
     * source properties, otherwise it returns `false`.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Util
     * @param {*} [func=_.identity] The value to convert to a callback.
     * @returns {Function} Returns the callback.
     * @example
     *
     * var users = [
     *   { 'user': 'barney', 'age': 36, 'active': true },
     *   { 'user': 'fred',   'age': 40, 'active': false }
     * ];
     *
     * // The `_.matches` iteratee shorthand.
     * _.filter(users, _.iteratee({ 'user': 'barney', 'active': true }));
     * // => [{ 'user': 'barney', 'age': 36, 'active': true }]
     *
     * // The `_.matchesProperty` iteratee shorthand.
     * _.filter(users, _.iteratee(['user', 'fred']));
     * // => [{ 'user': 'fred', 'age': 40 }]
     *
     * // The `_.property` iteratee shorthand.
     * _.map(users, _.iteratee('user'));
     * // => ['barney', 'fred']
     *
     * // Create custom iteratee shorthands.
     * _.iteratee = _.wrap(_.iteratee, function(iteratee, func) {
     *   return !_.isRegExp(func) ? iteratee(func) : function(string) {
     *     return func.test(string);
     *   };
     * });
     *
     * _.filter(['abc', 'def'], /ef/);
     * // => ['def']
     */
function Fl(e){return Ir("function"==typeof e?e:In(e,pe))}/**
     * Creates a function that performs a partial deep comparison between a given
     * object and `source`, returning `true` if the given object has equivalent
     * property values, else `false`.
     *
     * **Note:** The created function is equivalent to `_.isMatch` with `source`
     * partially applied.
     *
     * Partial comparisons will match empty array and empty object `source`
     * values against any array or object value, respectively. See `_.isEqual`
     * for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} source The object of property values to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.filter(objects, _.matches({ 'a': 4, 'c': 6 }));
     * // => [{ 'a': 4, 'b': 5, 'c': 6 }]
     */
function ql(e){return $r(In(e,pe))}/**
     * Creates a function that performs a partial deep comparison between the
     * value at `path` of a given object to `srcValue`, returning `true` if the
     * object value is equivalent, else `false`.
     *
     * **Note:** Partial comparisons will match empty array and empty object
     * `srcValue` values against any array or object value, respectively. See
     * `_.isEqual` for a list of supported value comparisons.
     *
     * @static
     * @memberOf _
     * @since 3.2.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @param {*} srcValue The value to match.
     * @returns {Function} Returns the new spec function.
     * @example
     *
     * var objects = [
     *   { 'a': 1, 'b': 2, 'c': 3 },
     *   { 'a': 4, 'b': 5, 'c': 6 }
     * ];
     *
     * _.find(objects, _.matchesProperty('a', 4));
     * // => { 'a': 4, 'b': 5, 'c': 6 }
     */
function Rl(e,t){return Ur(e,In(t,pe))}/**
     * Adds all own enumerable string keyed function properties of a source
     * object to the destination object. If `object` is a function, then methods
     * are added to its prototype as well.
     *
     * **Note:** Use `_.runInContext` to create a pristine `lodash` function to
     * avoid conflicts caused by modifying the original.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {Function|Object} [object=lodash] The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options={}] The options object.
     * @param {boolean} [options.chain=true] Specify whether mixins are chainable.
     * @returns {Function|Object} Returns `object`.
     * @example
     *
     * function vowels(string) {
     *   return _.filter(string, function(v) {
     *     return /[aeiou]/i.test(v);
     *   });
     * }
     *
     * _.mixin({ 'vowels': vowels });
     * _.vowels('fred');
     * // => ['e']
     *
     * _('fred').vowels().value();
     * // => ['e']
     *
     * _.mixin({ 'vowels': vowels }, { 'chain': false });
     * _('fred').vowels();
     * // => ['e']
     */
function Vl(e,t,n){var r=Bs(t),i=ar(t,r);null!=n||ss(t)&&(i.length||!r.length)||(n=t,t=e,e=this,i=ar(t,Bs(t)));var o=!(ss(n)&&"chain"in n&&!n.chain),a=os(e);return l(i,function(n){var r=t[n];e[n]=r,a&&(e.prototype[n]=function(){var t=this.__chain__;if(o||t){var n=e(this.__wrapped__),i=n.__actions__=Ii(this.__actions__);return i.push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,v([this.value()],arguments))})}),e}/**
     * Reverts the `_` variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
function Hl(){return ur._===this&&(ur._=kc),this}/**
     * This method returns `undefined`.
     *
     * @static
     * @memberOf _
     * @since 2.3.0
     * @category Util
     * @example
     *
     * _.times(2, _.noop);
     * // => [undefined, undefined]
     */
function Il(){}/**
     * Creates a function that gets the argument at index `n`. If `n` is negative,
     * the nth argument from the end is returned.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {number} [n=0] The index of the argument to return.
     * @returns {Function} Returns the new pass-thru function.
     * @example
     *
     * var func = _.nthArg(1);
     * func('a', 'b', 'c', 'd');
     * // => 'b'
     *
     * var func = _.nthArg(-2);
     * func('a', 'b', 'c', 'd');
     * // => 'c'
     */
function zl(e){return e=Cs(e),oi(function(t){return Yr(t,e)})}/**
     * Creates a function that returns the value at `path` of a given object.
     *
     * @static
     * @memberOf _
     * @since 2.4.0
     * @category Util
     * @param {Array|string} path The path of the property to get.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var objects = [
     *   { 'a': { 'b': 2 } },
     *   { 'a': { 'b': 1 } }
     * ];
     *
     * _.map(objects, _.property('a.b'));
     * // => [2, 1]
     *
     * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
     * // => [1, 2]
     */
function Wl(e){return Io(e)?A(ra(e)):Kr(e)}/**
     * The opposite of `_.property`; this method creates a function that returns
     * the value at a given path of `object`.
     *
     * @static
     * @memberOf _
     * @since 3.0.0
     * @category Util
     * @param {Object} object The object to query.
     * @returns {Function} Returns the new accessor function.
     * @example
     *
     * var array = [0, 1, 2],
     *     object = { 'a': array, 'b': array, 'c': array };
     *
     * _.map(['a[2]', 'c[0]'], _.propertyOf(object));
     * // => [2, 0]
     *
     * _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
     * // => [2, 0]
     */
function Ml(e){return function(t){return null==e?ie:sr(e,t)}}/**
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
function Bl(){return[]}/**
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
function $l(){return!1}/**
     * This method returns a new empty object.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {Object} Returns the new empty object.
     * @example
     *
     * var objects = _.times(2, _.stubObject);
     *
     * console.log(objects);
     * // => [{}, {}]
     *
     * console.log(objects[0] === objects[1]);
     * // => false
     */
function Ul(){return{}}/**
     * This method returns an empty string.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {string} Returns the empty string.
     * @example
     *
     * _.times(2, _.stubString);
     * // => ['', '']
     */
function Xl(){return""}/**
     * This method returns `true`.
     *
     * @static
     * @memberOf _
     * @since 4.13.0
     * @category Util
     * @returns {boolean} Returns `true`.
     * @example
     *
     * _.times(2, _.stubTrue);
     * // => [true, true]
     */
function Gl(){return!0}/**
     * Invokes the iteratee `n` times, returning an array of the results of
     * each invocation. The iteratee is invoked with one argument; (index).
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {number} n The number of times to invoke `iteratee`.
     * @param {Function} [iteratee=_.identity] The function invoked per iteration.
     * @returns {Array} Returns the array of results.
     * @example
     *
     * _.times(3, String);
     * // => ['0', '1', '2']
     *
     *  _.times(4, _.constant(0));
     * // => [0, 0, 0, 0]
     */
function Yl(e,t){if(e=Cs(e),e<1||e>Fe)return[];var n=Ve,r=Qc(e,Ve);t=ko(t),e-=Ve;for(var i=L(r,t);++n<e;)t(n);return i}/**
     * Converts `value` to a property path array.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Util
     * @param {*} value The value to convert.
     * @returns {Array} Returns the new property path array.
     * @example
     *
     * _.toPath('a.b.c');
     * // => ['a', 'b', 'c']
     *
     * _.toPath('a[0].b.c');
     * // => ['a', '0', 'b', 'c']
     */
function Ql(e){return wp(e)?g(e,ra):xs(e)?[e]:Ii(qf(Ns(e)))}/**
     * Generates a unique ID. If `prefix` is given, the ID is appended to it.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Util
     * @param {string} [prefix=''] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
function Zl(e){var t=++wc;return Ns(e)+t}/**
     * Computes the maximum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * _.max([]);
     * // => undefined
     */
function Jl(e){return e&&e.length?Gn(e,Dl,pr):ie}/**
     * This method is like `_.max` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.maxBy(objects, function(o) { return o.n; });
     * // => { 'n': 2 }
     *
     * // The `_.property` iteratee shorthand.
     * _.maxBy(objects, 'n');
     * // => { 'n': 2 }
     */
function Kl(e,t){return e&&e.length?Gn(e,ko(t,2),pr):ie}/**
     * Computes the mean of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the mean.
     * @example
     *
     * _.mean([4, 2, 8, 6]);
     * // => 5
     */
function ec(e){return j(e,Dl)}/**
     * This method is like `_.mean` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be averaged.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.7.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the mean.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.meanBy(objects, function(o) { return o.n; });
     * // => 5
     *
     * // The `_.property` iteratee shorthand.
     * _.meanBy(objects, 'n');
     * // => 5
     */
function tc(e,t){return j(e,ko(t,2))}/**
     * Computes the minimum value of `array`. If `array` is empty or falsey,
     * `undefined` is returned.
     *
     * @static
     * @since 0.1.0
     * @memberOf _
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * _.min([]);
     * // => undefined
     */
function nc(e){return e&&e.length?Gn(e,Dl,Mr):ie}/**
     * This method is like `_.min` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the criterion by which
     * the value is ranked. The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * var objects = [{ 'n': 1 }, { 'n': 2 }];
     *
     * _.minBy(objects, function(o) { return o.n; });
     * // => { 'n': 1 }
     *
     * // The `_.property` iteratee shorthand.
     * _.minBy(objects, 'n');
     * // => { 'n': 1 }
     */
function rc(e,t){return e&&e.length?Gn(e,ko(t,2),Mr):ie}/**
     * Computes the sum of the values in `array`.
     *
     * @static
     * @memberOf _
     * @since 3.4.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @returns {number} Returns the sum.
     * @example
     *
     * _.sum([4, 2, 8, 6]);
     * // => 20
     */
function ic(e){return e&&e.length?O(e,Dl):0}/**
     * This method is like `_.sum` except that it accepts `iteratee` which is
     * invoked for each element in `array` to generate the value to be summed.
     * The iteratee is invoked with one argument: (value).
     *
     * @static
     * @memberOf _
     * @since 4.0.0
     * @category Math
     * @param {Array} array The array to iterate over.
     * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
     * @returns {number} Returns the sum.
     * @example
     *
     * var objects = [{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }];
     *
     * _.sumBy(objects, function(o) { return o.n; });
     * // => 20
     *
     * // The `_.property` iteratee shorthand.
     * _.sumBy(objects, 'n');
     * // => 20
     */
function oc(e,t){return e&&e.length?O(e,ko(t,2)):0}t=null==t?ur:Sr.defaults(ur.Object(),t,Sr.pick(ur,Yn));/** Built-in constructor references. */
var ac=t.Array,uc=t.Date,sc=t.Error,lc=t.Function,cc=t.Math,fc=t.Object,pc=t.RegExp,dc=t.String,hc=t.TypeError,gc=ac.prototype,vc=lc.prototype,yc=fc.prototype,mc=t["__core-js_shared__"],bc=vc.toString,xc=yc.hasOwnProperty,wc=0,_c=function(){var e=/[^.]+$/.exec(mc&&mc.keys&&mc.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}(),Tc=yc.toString,Sc=bc.call(fc),kc=ur._,Cc=pc("^"+bc.call(xc).replace(Ft,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),jc=cr?t.Buffer:ie,Ac=t.Symbol,Ec=t.Uint8Array,Pc=jc?jc.allocUnsafe:ie,Nc=X(fc.getPrototypeOf,fc),Oc=fc.create,Lc=yc.propertyIsEnumerable,Dc=gc.splice,Fc=Ac?Ac.isConcatSpreadable:ie,qc=Ac?Ac.iterator:ie,Rc=Ac?Ac.toStringTag:ie,Vc=function(){try{var e=Ao(fc,"defineProperty");return e({},"",{}),e}catch(e){}}(),Hc=t.clearTimeout!==ur.clearTimeout&&t.clearTimeout,Ic=uc&&uc.now!==ur.Date.now&&uc.now,zc=t.setTimeout!==ur.setTimeout&&t.setTimeout,Wc=cc.ceil,Mc=cc.floor,Bc=fc.getOwnPropertySymbols,$c=jc?jc.isBuffer:ie,Uc=t.isFinite,Xc=gc.join,Gc=X(fc.keys,fc),Yc=cc.max,Qc=cc.min,Zc=uc.now,Jc=t.parseInt,Kc=cc.random,ef=gc.reverse,tf=Ao(t,"DataView"),nf=Ao(t,"Map"),rf=Ao(t,"Promise"),of=Ao(t,"Set"),af=Ao(t,"WeakMap"),uf=Ao(fc,"create"),sf=af&&new af,lf={},cf=ia(tf),ff=ia(nf),pf=ia(rf),df=ia(of),hf=ia(af),gf=Ac?Ac.prototype:ie,vf=gf?gf.valueOf:ie,yf=gf?gf.toString:ie,mf=function(){function e(){}return function(t){if(!ss(t))return{};if(Oc)return Oc(t);e.prototype=t;var n=new e;return e.prototype=ie,n}}();/**
     * By default, the template delimiters used by lodash are like those in
     * embedded Ruby (ERB) as well as ES2015 template strings. Change the
     * following template settings to use alternative delimiters.
     *
     * @static
     * @memberOf _
     * @type {Object}
     */
n.templateSettings={/**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
escape:At,/**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
evaluate:Et,/**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type {RegExp}
       */
interpolate:Pt,/**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type {string}
       */
variable:"",/**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type {Object}
       */
imports:{/**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type {Function}
         */
_:n}},
// Ensure wrappers are instances of `baseLodash`.
n.prototype=r.prototype,n.prototype.constructor=n,i.prototype=mf(r.prototype),i.prototype.constructor=i,
// Ensure `LazyWrapper` is an instance of `baseLodash`.
x.prototype=mf(r.prototype),x.prototype.constructor=x,
// Add methods to `Hash`.
ne.prototype.clear=Mt,ne.prototype.delete=tn,ne.prototype.get=nn,ne.prototype.has=rn,ne.prototype.set=on,
// Add methods to `ListCache`.
an.prototype.clear=un,an.prototype.delete=sn,an.prototype.get=ln,an.prototype.has=cn,an.prototype.set=fn,
// Add methods to `MapCache`.
pn.prototype.clear=dn,pn.prototype.delete=hn,pn.prototype.get=gn,pn.prototype.has=vn,pn.prototype.set=yn,
// Add methods to `SetCache`.
mn.prototype.add=mn.prototype.push=bn,mn.prototype.has=xn,
// Add methods to `Stack`.
wn.prototype.clear=_n,wn.prototype.delete=Tn,wn.prototype.get=Sn,wn.prototype.has=kn,wn.prototype.set=Cn;/**
     * The base implementation of `_.forEach` without support for iteratee shorthands.
     *
     * @private
     * @param {Array|Object} collection The collection to iterate over.
     * @param {Function} iteratee The function invoked per iteration.
     * @returns {Array|Object} Returns `collection`.
     */
var bf=Ui(nr),xf=Ui(or,!0),wf=Xi(),_f=Xi(!0),Tf=sf?function(e,t){return sf.set(e,t),e}:Dl,Sf=Vc?function(e,t){return Vc(e,"toString",{configurable:!0,enumerable:!1,value:Ol(t),writable:!0})}:Dl,kf=oi,Cf=Hc||function(e){return ur.clearTimeout(e)},jf=of&&1/Y(new of([,-0]))[1]==De?function(e){return new of(e)}:Il,Af=sf?function(e){return sf.get(e)}:Il,Ef=Bc?function(e){return null==e?[]:(e=fc(e),p(Bc(e),function(t){return Lc.call(e,t)}))}:Bl,Pf=Bc?function(e){for(var t=[];e;)v(t,Ef(e)),e=Nc(e);return t}:Bl,Nf=fr;
// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
(tf&&Nf(new tf(new ArrayBuffer(1)))!=ft||nf&&Nf(new nf)!=Ze||rf&&Nf(rf.resolve())!=tt||of&&Nf(new of)!=it||af&&Nf(new af)!=st)&&(Nf=function(e){var t=fr(e),n=t==et?e.constructor:ie,r=n?ia(n):"";if(r)switch(r){case cf:return ft;case ff:return Ze;case pf:return tt;case df:return it;case hf:return st}return t});/**
     * Checks if `func` is capable of being masked.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `func` is maskable, else `false`.
     */
var Of=mc?os:$l,Lf=ta(Tf),Df=zc||function(e,t){return ur.setTimeout(e,t)},Ff=ta(Sf),qf=Xo(function(e){var t=[];return Lt.test(e)&&t.push(""),e.replace(Dt,function(e,n,r,i){t.push(r?i.replace(Bt,"$1"):n||e)}),t}),Rf=oi(function(e,t){return Zu(e)?Un(e,tr(t,1,Zu,!0)):[]}),Vf=oi(function(e,t){var n=ka(t);return Zu(n)&&(n=ie),Zu(e)?Un(e,tr(t,1,Zu,!0),ko(n,2)):[]}),Hf=oi(function(e,t){var n=ka(t);return Zu(n)&&(n=ie),Zu(e)?Un(e,tr(t,1,Zu,!0),ie,n):[]}),If=oi(function(e){var t=g(e,Si);return t.length&&t[0]===e[0]?Cr(t):[]}),zf=oi(function(e){var t=ka(e),n=g(e,Si);return t===ka(n)?t=ie:n.pop(),n.length&&n[0]===e[0]?Cr(n,ko(t,2)):[]}),Wf=oi(function(e){var t=ka(e),n=g(e,Si);return t="function"==typeof t?t:ie,t&&n.pop(),n.length&&n[0]===e[0]?Cr(n,ie,t):[]}),Mf=oi(Aa),Bf=xo(function(e,t){var n=null==e?0:e.length,r=Vn(e,t);return ti(e,g(t,function(e){return Vo(e,n)?+e:e}).sort(qi)),r}),$f=oi(function(e){return yi(tr(e,1,Zu,!0))}),Uf=oi(function(e){var t=ka(e);return Zu(t)&&(t=ie),yi(tr(e,1,Zu,!0),ko(t,2))}),Xf=oi(function(e){var t=ka(e);return t="function"==typeof t?t:ie,yi(tr(e,1,Zu,!0),ie,t)}),Gf=oi(function(e,t){return Zu(e)?Un(e,t):[]}),Yf=oi(function(e){return _i(p(e,Zu))}),Qf=oi(function(e){var t=ka(e);return Zu(t)&&(t=ie),_i(p(e,Zu),ko(t,2))}),Zf=oi(function(e){var t=ka(e);return t="function"==typeof t?t:ie,_i(p(e,Zu),ie,t)}),Jf=oi(Qa),Kf=oi(function(e){var t=e.length,n=t>1?e[t-1]:ie;return n="function"==typeof n?(e.pop(),n):ie,Za(e,n)}),ep=xo(function(e){var t=e.length,n=t?e[0]:0,r=this.__wrapped__,o=function(t){return Vn(t,e)};return!(t>1||this.__actions__.length)&&r instanceof x&&Vo(n)?(r=r.slice(n,+n+(t?1:0)),r.__actions__.push({func:nu,args:[o],thisArg:ie}),new i(r,this.__chain__).thru(function(e){return t&&!e.length&&e.push(ie),e})):this.thru(o)}),tp=Bi(function(e,t,n){xc.call(e,n)?++e[n]:Rn(e,n,1)}),np=Ki(ga),rp=Ki(va),ip=Bi(function(e,t,n){xc.call(e,n)?e[n].push(t):Rn(e,n,[t])}),op=oi(function(e,t,n){var r=-1,i="function"==typeof t,o=Qu(e)?ac(e.length):[];return bf(e,function(e){o[++r]=i?u(t,e,n):Ar(e,t,n)}),o}),ap=Bi(function(e,t,n){Rn(e,n,t)}),up=Bi(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]}),sp=oi(function(e,t){if(null==e)return[];var n=t.length;return n>1&&Ho(e,t[0],t[1])?t=[]:n>2&&Ho(t[0],t[1],t[2])&&(t=[t[0]]),Qr(e,tr(t,1),[])}),lp=Ic||function(){return ur.Date.now()},cp=oi(function(e,t,n){var r=ye;if(n.length){var i=G(n,So(cp));r|=_e}return po(e,r,t,n,i)}),fp=oi(function(e,t,n){var r=ye|me;if(n.length){var i=G(n,So(fp));r|=_e}return po(t,r,e,n,i)}),pp=oi(function(e,t){return $n(e,1,t)}),dp=oi(function(e,t,n){return $n(e,As(t)||0,n)});
// Expose `MapCache`.
Fu.Cache=pn;/**
     * Creates a function that invokes `func` with its arguments transformed.
     *
     * @static
     * @since 4.0.0
     * @memberOf _
     * @category Function
     * @param {Function} func The function to wrap.
     * @param {...(Function|Function[])} [transforms=[_.identity]]
     *  The argument transforms.
     * @returns {Function} Returns the new function.
     * @example
     *
     * function doubled(n) {
     *   return n * 2;
     * }
     *
     * function square(n) {
     *   return n * n;
     * }
     *
     * var func = _.overArgs(function(x, y) {
     *   return [x, y];
     * }, [square, doubled]);
     *
     * func(9, 3);
     * // => [81, 6]
     *
     * func(10, 5);
     * // => [100, 10]
     */
var hp=kf(function(e,t){t=1==t.length&&wp(t[0])?g(t[0],F(ko())):g(tr(t,1),F(ko()));var n=t.length;return oi(function(r){for(var i=-1,o=Qc(r.length,n);++i<o;)r[i]=t[i].call(this,r[i]);return u(e,this,r)})}),gp=oi(function(e,t){var n=G(t,So(gp));return po(e,_e,ie,t,n)}),vp=oi(function(e,t){var n=G(t,So(vp));return po(e,Te,ie,t,n)}),yp=xo(function(e,t){return po(e,ke,ie,ie,ie,t)}),mp=so(pr),bp=so(function(e,t){return e>=t}),xp=Er(function(){return arguments}())?Er:function(e){return ls(e)&&xc.call(e,"callee")&&!Lc.call(e,"callee")},wp=ac.isArray,_p=dr?F(dr):Pr,Tp=$c||$l,Sp=hr?F(hr):Nr,kp=gr?F(gr):Dr,Cp=vr?F(vr):Rr,jp=yr?F(yr):Vr,Ap=mr?F(mr):Hr,Ep=so(Mr),Pp=so(function(e,t){return e<=t}),Np=$i(function(e,t){if(Bo(t)||Qu(t))return void zi(t,Bs(t),e);for(var n in t)xc.call(t,n)&&On(e,n,t[n])}),Op=$i(function(e,t){zi(t,$s(t),e)}),Lp=$i(function(e,t,n,r){zi(t,$s(t),e,r)}),Dp=$i(function(e,t,n,r){zi(t,Bs(t),e,r)}),Fp=xo(Vn),qp=oi(function(e){return e.push(ie,ho),u(Lp,ie,e)}),Rp=oi(function(e){return e.push(ie,go),u(Wp,ie,e)}),Vp=no(function(e,t,n){e[t]=n},Ol(Dl)),Hp=no(function(e,t,n){xc.call(e,t)?e[t].push(n):e[t]=[n]},ko),Ip=oi(Ar),zp=$i(function(e,t,n){Xr(e,t,n)}),Wp=$i(function(e,t,n,r){Xr(e,t,n,r)}),Mp=xo(function(e,t){var n={};if(null==e)return n;var r=!1;t=g(t,function(t){return t=Ci(t,e),r||(r=t.length>1),t}),zi(e,_o(e),n),r&&(n=In(n,pe|de|he,vo));for(var i=t.length;i--;)mi(n,t[i]);return n}),Bp=xo(function(e,t){return null==e?{}:Zr(e,t)}),$p=fo(Bs),Up=fo($s),Xp=Qi(function(e,t,n){return t=t.toLowerCase(),e+(n?sl(t):t)}),Gp=Qi(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}),Yp=Qi(function(e,t,n){return e+(n?" ":"")+t.toLowerCase()}),Qp=Yi("toLowerCase"),Zp=Qi(function(e,t,n){return e+(n?"_":"")+t.toLowerCase()}),Jp=Qi(function(e,t,n){return e+(n?" ":"")+ed(t)}),Kp=Qi(function(e,t,n){return e+(n?" ":"")+t.toUpperCase()}),ed=Yi("toUpperCase"),td=oi(function(e,t){try{return u(e,ie,t)}catch(e){return rs(e)?e:new sc(e)}}),nd=xo(function(e,t){return l(t,function(t){t=ra(t),Rn(e,t,cp(e[t],e))}),e}),rd=eo(),id=eo(!0),od=oi(function(e,t){return function(n){return Ar(n,e,t)}}),ad=oi(function(e,t){return function(n){return Ar(e,n,t)}}),ud=io(g),sd=io(f),ld=io(b),cd=uo(),fd=uo(!0),pd=ro(function(e,t){return e+t},0),dd=co("ceil"),hd=ro(function(e,t){return e/t},1),gd=co("floor"),vd=ro(function(e,t){return e*t},1),yd=co("round"),md=ro(function(e,t){return e-t},0);/*------------------------------------------------------------------------*/
// Add methods that return wrapped values in chain sequences.
// Add aliases.
// Add methods to `lodash.prototype`.
/*------------------------------------------------------------------------*/
// Add methods that return unwrapped values in chain sequences.
// Add aliases.
/*------------------------------------------------------------------------*/
/**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type {string}
     */
// Assign default placeholders.
// Add `LazyWrapper` methods for `_.drop` and `_.take` variants.
// Add `LazyWrapper` methods that accept an `iteratee` value.
// Add `LazyWrapper` methods for `_.head` and `_.last`.
// Add `LazyWrapper` methods for `_.initial` and `_.tail`.
// Add `LazyWrapper` methods to `lodash.prototype`.
// Add `Array` methods to `lodash.prototype`.
// Map minified method names to their real names.
// Add methods to `LazyWrapper`.
// Add chain sequence methods to the `lodash` wrapper.
// Add lazy aliases.
return n.after=Au,n.ary=Eu,n.assign=Np,n.assignIn=Op,n.assignInWith=Lp,n.assignWith=Dp,n.at=Fp,n.before=Pu,n.bind=cp,n.bindAll=nd,n.bindKey=fp,n.castArray=Mu,n.chain=eu,n.chunk=ua,n.compact=sa,n.concat=la,n.cond=Pl,n.conforms=Nl,n.constant=Ol,n.countBy=tp,n.create=Os,n.curry=Nu,n.curryRight=Ou,n.debounce=Lu,n.defaults=qp,n.defaultsDeep=Rp,n.defer=pp,n.delay=dp,n.difference=Rf,n.differenceBy=Vf,n.differenceWith=Hf,n.drop=ca,n.dropRight=fa,n.dropRightWhile=pa,n.dropWhile=da,n.fill=ha,n.filter=fu,n.flatMap=pu,n.flatMapDeep=du,n.flatMapDepth=hu,n.flatten=ya,n.flattenDeep=ma,n.flattenDepth=ba,n.flip=Du,n.flow=rd,n.flowRight=id,n.fromPairs=xa,n.functions=Hs,n.functionsIn=Is,n.groupBy=ip,n.initial=Ta,n.intersection=If,n.intersectionBy=zf,n.intersectionWith=Wf,n.invert=Vp,n.invertBy=Hp,n.invokeMap=op,n.iteratee=Fl,n.keyBy=ap,n.keys=Bs,n.keysIn=$s,n.map=mu,n.mapKeys=Us,n.mapValues=Xs,n.matches=ql,n.matchesProperty=Rl,n.memoize=Fu,n.merge=zp,n.mergeWith=Wp,n.method=od,n.methodOf=ad,n.mixin=Vl,n.negate=qu,n.nthArg=zl,n.omit=Mp,n.omitBy=Gs,n.once=Ru,n.orderBy=bu,n.over=ud,n.overArgs=hp,n.overEvery=sd,n.overSome=ld,n.partial=gp,n.partialRight=vp,n.partition=up,n.pick=Bp,n.pickBy=Ys,n.property=Wl,n.propertyOf=Ml,n.pull=Mf,n.pullAll=Aa,n.pullAllBy=Ea,n.pullAllWith=Pa,n.pullAt=Bf,n.range=cd,n.rangeRight=fd,n.rearg=yp,n.reject=_u,n.remove=Na,n.rest=Vu,n.reverse=Oa,n.sampleSize=Su,n.set=Zs,n.setWith=Js,n.shuffle=ku,n.slice=La,n.sortBy=sp,n.sortedUniq=Ia,n.sortedUniqBy=za,n.split=bl,n.spread=Hu,n.tail=Wa,n.take=Ma,n.takeRight=Ba,n.takeRightWhile=$a,n.takeWhile=Ua,n.tap=tu,n.throttle=Iu,n.thru=nu,n.toArray=Ss,n.toPairs=$p,n.toPairsIn=Up,n.toPath=Ql,n.toPlainObject=Es,n.transform=Ks,n.unary=zu,n.union=$f,n.unionBy=Uf,n.unionWith=Xf,n.uniq=Xa,n.uniqBy=Ga,n.uniqWith=Ya,n.unset=el,n.unzip=Qa,n.unzipWith=Za,n.update=tl,n.updateWith=nl,n.values=rl,n.valuesIn=il,n.without=Gf,n.words=El,n.wrap=Wu,n.xor=Yf,n.xorBy=Qf,n.xorWith=Zf,n.zip=Jf,n.zipObject=Ja,n.zipObjectDeep=Ka,n.zipWith=Kf,n.entries=$p,n.entriesIn=Up,n.extend=Op,n.extendWith=Lp,Vl(n,n),n.add=pd,n.attempt=td,n.camelCase=Xp,n.capitalize=sl,n.ceil=dd,n.clamp=ol,n.clone=Bu,n.cloneDeep=Uu,n.cloneDeepWith=Xu,n.cloneWith=$u,n.conformsTo=Gu,n.deburr=ll,n.defaultTo=Ll,n.divide=hd,n.endsWith=cl,n.eq=Yu,n.escape=fl,n.escapeRegExp=pl,n.every=cu,n.find=np,n.findIndex=ga,n.findKey=Ls,n.findLast=rp,n.findLastIndex=va,n.findLastKey=Ds,n.floor=gd,n.forEach=gu,n.forEachRight=vu,n.forIn=Fs,n.forInRight=qs,n.forOwn=Rs,n.forOwnRight=Vs,n.get=zs,n.gt=mp,n.gte=bp,n.has=Ws,n.hasIn=Ms,n.head=wa,n.identity=Dl,n.includes=yu,n.indexOf=_a,n.inRange=al,n.invoke=Ip,n.isArguments=xp,n.isArray=wp,n.isArrayBuffer=_p,n.isArrayLike=Qu,n.isArrayLikeObject=Zu,n.isBoolean=Ju,n.isBuffer=Tp,n.isDate=Sp,n.isElement=Ku,n.isEmpty=es,n.isEqual=ts,n.isEqualWith=ns,n.isError=rs,n.isFinite=is,n.isFunction=os,n.isInteger=as,n.isLength=us,n.isMap=kp,n.isMatch=cs,n.isMatchWith=fs,n.isNaN=ps,n.isNative=ds,n.isNil=gs,n.isNull=hs,n.isNumber=vs,n.isObject=ss,n.isObjectLike=ls,n.isPlainObject=ys,n.isRegExp=Cp,n.isSafeInteger=ms,n.isSet=jp,n.isString=bs,n.isSymbol=xs,n.isTypedArray=Ap,n.isUndefined=ws,n.isWeakMap=_s,n.isWeakSet=Ts,n.join=Sa,n.kebabCase=Gp,n.last=ka,n.lastIndexOf=Ca,n.lowerCase=Yp,n.lowerFirst=Qp,n.lt=Ep,n.lte=Pp,n.max=Jl,n.maxBy=Kl,n.mean=ec,n.meanBy=tc,n.min=nc,n.minBy=rc,n.stubArray=Bl,n.stubFalse=$l,n.stubObject=Ul,n.stubString=Xl,n.stubTrue=Gl,n.multiply=vd,n.nth=ja,n.noConflict=Hl,n.noop=Il,n.now=lp,n.pad=dl,n.padEnd=hl,n.padStart=gl,n.parseInt=vl,n.random=ul,n.reduce=xu,n.reduceRight=wu,n.repeat=yl,n.replace=ml,n.result=Qs,n.round=yd,n.runInContext=e,n.sample=Tu,n.size=Cu,n.snakeCase=Zp,n.some=ju,n.sortedIndex=Da,n.sortedIndexBy=Fa,n.sortedIndexOf=qa,n.sortedLastIndex=Ra,n.sortedLastIndexBy=Va,n.sortedLastIndexOf=Ha,n.startCase=Jp,n.startsWith=xl,n.subtract=md,n.sum=ic,n.sumBy=oc,n.template=wl,n.times=Yl,n.toFinite=ks,n.toInteger=Cs,n.toLength=js,n.toLower=_l,n.toNumber=As,n.toSafeInteger=Ps,n.toString=Ns,n.toUpper=Tl,n.trim=Sl,n.trimEnd=kl,n.trimStart=Cl,n.truncate=jl,n.unescape=Al,n.uniqueId=Zl,n.upperCase=Kp,n.upperFirst=ed,n.each=gu,n.eachRight=vu,n.first=wa,Vl(n,function(){var e={};return nr(n,function(t,r){xc.call(n.prototype,r)||(e[r]=t)}),e}(),{chain:!1}),n.VERSION=oe,l(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){n[e].placeholder=n}),l(["drop","take"],function(e,t){x.prototype[e]=function(n){n=n===ie?1:Yc(Cs(n),0);var r=this.__filtered__&&!t?new x(this):this.clone();return r.__filtered__?r.__takeCount__=Qc(n,r.__takeCount__):r.__views__.push({size:Qc(n,Ve),type:e+(r.__dir__<0?"Right":"")}),r},x.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}}),l(["filter","map","takeWhile"],function(e,t){var n=t+1,r=n==Ne||n==Le;x.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:ko(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}}),l(["head","last"],function(e,t){var n="take"+(t?"Right":"");x.prototype[e]=function(){return this[n](1).value()[0]}}),l(["initial","tail"],function(e,t){var n="drop"+(t?"":"Right");x.prototype[e]=function(){return this.__filtered__?new x(this):this[n](1)}}),x.prototype.compact=function(){return this.filter(Dl)},x.prototype.find=function(e){return this.filter(e).head()},x.prototype.findLast=function(e){return this.reverse().find(e)},x.prototype.invokeMap=oi(function(e,t){return"function"==typeof e?new x(this):this.map(function(n){return Ar(n,e,t)})}),x.prototype.reject=function(e){return this.filter(qu(ko(e)))},x.prototype.slice=function(e,t){e=Cs(e);var n=this;return n.__filtered__&&(e>0||t<0)?new x(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==ie&&(t=Cs(t),n=t<0?n.dropRight(-t):n.take(t-e)),n)},x.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},x.prototype.toArray=function(){return this.take(Ve)},nr(x.prototype,function(e,t){var r=/^(?:filter|find|map|reject)|While$/.test(t),o=/^(?:head|last)$/.test(t),a=n[o?"take"+("last"==t?"Right":""):t],u=o||/^find/.test(t);a&&(n.prototype[t]=function(){var t=this.__wrapped__,s=o?[1]:arguments,l=t instanceof x,c=s[0],f=l||wp(t),p=function(e){var t=a.apply(n,v([e],s));return o&&d?t[0]:t};f&&r&&"function"==typeof c&&1!=c.length&&(
// Avoid lazy use if the iteratee has a "length" value other than `1`.
l=f=!1);var d=this.__chain__,h=!!this.__actions__.length,g=u&&!d,y=l&&!h;if(!u&&f){t=y?t:new x(this);var m=e.apply(t,s);return m.__actions__.push({func:nu,args:[p],thisArg:ie}),new i(m,d)}return g&&y?e.apply(this,s):(m=this.thru(p),g?o?m.value()[0]:m.value():m)})}),l(["pop","push","shift","sort","splice","unshift"],function(e){var t=gc[e],r=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",i=/^(?:pop|shift)$/.test(e);n.prototype[e]=function(){var e=arguments;if(i&&!this.__chain__){var n=this.value();return t.apply(wp(n)?n:[],e)}return this[r](function(n){return t.apply(wp(n)?n:[],e)})}}),nr(x.prototype,function(e,t){var r=n[t];if(r){var i=r.name+"",o=lf[i]||(lf[i]=[]);o.push({name:t,func:r})}}),lf[to(ie,me).name]=[{name:"wrapper",func:ie}],x.prototype.clone=E,x.prototype.reverse=Z,x.prototype.value=te,n.prototype.at=ep,n.prototype.chain=ru,n.prototype.commit=iu,n.prototype.next=ou,n.prototype.plant=uu,n.prototype.reverse=su,n.prototype.toJSON=n.prototype.valueOf=n.prototype.value=lu,n.prototype.first=n.prototype.head,qc&&(n.prototype[qc]=au),n},Sr=Tr();
// Expose Lodash on the global object to prevent errors when Lodash is
// loaded by a script tag in the presence of an AMD loader.
// See http://requirejs.org/docs/errors.html#mismatch for more details.
// Use `_.noConflict` to remove Lodash from the global object.
ur._=Sr,i=function(){return Sr}.call(t,n,t,r),
// Define as an anonymous module so, through path mapping, it can be
// referenced as the "underscore" module.
!(i!==ie&&(r.exports=i))}).call(this)}).call(t,n("../node_modules/webpack/buildin/global.js"),n("../node_modules/webpack/buildin/module.js")(e))},/***/
"../node_modules/velocity-animate/velocity.js":/***/
function(e,t,n){var r,i;/*! VelocityJS.org (1.4.2). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License */
/*************************
 Velocity jQuery Shim
 *************************/
/*! VelocityJS.org jQuery Shim (1.0.1). (C) 2014 The jQuery Foundation. MIT @license: en.wikipedia.org/wiki/MIT_License. */
/* This file contains the jQuery functions that Velocity relies on, thereby removing Velocity's dependency on a full copy of jQuery, and allowing it to work in any environment. */
/* These shimmed functions are only used if jQuery isn't present. If both this shim and jQuery are loaded, Velocity defaults to jQuery proper. */
/* Browser support: Using this shim instead of jQuery proper removes support for IE8. */
!function(e){"use strict";/* jQuery */
function t(e){var t=e.length,r=n.type(e);return"function"!==r&&!n.isWindow(e)&&(!(1!==e.nodeType||!t)||("array"===r||0===t||"number"==typeof t&&t>0&&t-1 in e))}/***************
	 Setup
	 ***************/
/* If jQuery is already loaded, there's no point in loading this shim. */
if(!e.jQuery){/* jQuery base. */
var n=function(e,t){return new n.fn.init(e,t)};/********************
	 Private Methods
	 ********************/
/* jQuery */
n.isWindow=function(e){/* jshint eqeqeq: false */
return e&&e===e.window},/* jQuery */
n.type=function(e){return e?"object"==typeof e||"function"==typeof e?i[a.call(e)]||"object":typeof e:e+""},/* jQuery */
n.isArray=Array.isArray||function(e){return"array"===n.type(e)},/***************
	 $ Methods
	 ***************/
/* jQuery: Support removed for IE<9. */
n.isPlainObject=function(e){var t;if(!e||"object"!==n.type(e)||e.nodeType||n.isWindow(e))return!1;try{if(e.constructor&&!o.call(e,"constructor")&&!o.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(e){return!1}for(t in e);return void 0===t||o.call(e,t)},/* jQuery */
n.each=function(e,n,r){var i,o=0,a=e.length,u=t(e);if(r){if(u)for(;o<a&&(i=n.apply(e[o],r),i!==!1);o++);else for(o in e)if(e.hasOwnProperty(o)&&(i=n.apply(e[o],r),i===!1))break}else if(u)for(;o<a&&(i=n.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(e.hasOwnProperty(o)&&(i=n.call(e[o],o,e[o]),i===!1))break;return e},/* Custom */
n.data=function(e,t,i){/* $.getData() */
if(void 0===i){var o=e[n.expando],a=o&&r[o];if(void 0===t)return a;if(a&&t in a)return a[t]}else if(void 0!==t){var u=e[n.expando]||(e[n.expando]=++n.uuid);return r[u]=r[u]||{},r[u][t]=i,i}},/* Custom */
n.removeData=function(e,t){var i=e[n.expando],o=i&&r[i];o&&(
// Cleanup the entire store if no keys are provided.
t?n.each(t,function(e,t){delete o[t]}):delete r[i])},/* jQuery */
n.extend=function(){var e,t,r,i,o,a,u=arguments[0]||{},s=1,l=arguments.length,c=!1;for("boolean"==typeof u&&(c=u,u=arguments[s]||{},s++),"object"!=typeof u&&"function"!==n.type(u)&&(u={}),s===l&&(u=this,s--);s<l;s++)if(o=arguments[s])for(i in o)o.hasOwnProperty(i)&&(e=u[i],r=o[i],u!==r&&(c&&r&&(n.isPlainObject(r)||(t=n.isArray(r)))?(t?(t=!1,a=e&&n.isArray(e)?e:[]):a=e&&n.isPlainObject(e)?e:{},u[i]=n.extend(c,a,r)):void 0!==r&&(u[i]=r)));return u},/* jQuery 1.4.3 */
n.queue=function(e,r,i){function o(e,n){var r=n||[];/* $.merge */
return e&&(t(Object(e))?!function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;)e[i++]=t[r++];if(n!==n)for(;void 0!==t[r];)e[i++]=t[r++];return e.length=i,e}(r,"string"==typeof e?[e]:e):[].push.call(r,e)),r}if(e){r=(r||"fx")+"queue";var a=n.data(e,r);return i?(!a||n.isArray(i)?a=n.data(e,r,o(i)):a.push(i),a):a||[]}},/* jQuery 1.4.3 */
n.dequeue=function(e,t){/* Custom: Embed element iteration. */
n.each(e.nodeType?[e]:e,function(e,r){t=t||"fx";var i=n.queue(r,t),o=i.shift();"inprogress"===o&&(o=i.shift()),o&&("fx"===t&&i.unshift("inprogress"),o.call(r,function(){n.dequeue(r,t)}))})},/******************
	 $.fn Methods
	 ******************/
/* jQuery */
n.fn=n.prototype={init:function(e){/* Just return the element wrapped inside an array; don't proceed with the actual jQuery node wrapping process. */
if(e.nodeType)return this[0]=e,this;throw new Error("Not a DOM node.")},offset:function(){/* jQuery altered code: Dropped disconnected DOM node checking. */
var t=this[0].getBoundingClientRect?this[0].getBoundingClientRect():{top:0,left:0};return{top:t.top+(e.pageYOffset||document.scrollTop||0)-(document.clientTop||0),left:t.left+(e.pageXOffset||document.scrollLeft||0)-(document.clientLeft||0)}},position:function(){/* jQuery */
function e(e){for(var t=e.offsetParent;t&&"html"!==t.nodeName.toLowerCase()&&t.style&&"static"===t.style.position;)t=t.offsetParent;return t||document}/* Zepto */
var t=this[0],r=e(t),i=this.offset(),o=/^(?:body|html)$/i.test(r.nodeName)?{top:0,left:0}:n(r).offset();return i.top-=parseFloat(t.style.marginTop)||0,i.left-=parseFloat(t.style.marginLeft)||0,r.style&&(o.top+=parseFloat(r.style.borderTopWidth)||0,o.left+=parseFloat(r.style.borderLeftWidth)||0),{top:i.top-o.top,left:i.left-o.left}}};/**********************
	 Private Variables
	 **********************/
/* For $.data() */
var r={};n.expando="velocity"+(new Date).getTime(),n.uuid=0;for(var i={},o=i.hasOwnProperty,a=i.toString,u="Boolean Number String Function Array Date RegExp Object Error".split(" "),s=0;s<u.length;s++)i["[object "+u[s]+"]"]=u[s].toLowerCase();/* Makes $(node) possible, without having to call init. */
n.fn.init.prototype=n.fn,/* Globalize Velocity onto the window, and assign its Utilities property. */
e.Velocity={Utilities:n}}}(window),/******************
 Velocity.js
 ******************/
function(o){"use strict";/* CommonJS module. */
"object"==typeof e&&"object"==typeof e.exports?e.exports=o():(r=o,i="function"==typeof r?r.call(t,n,t,e):r,!(void 0!==i&&(e.exports=i)))}(function(){"use strict";return function(e,t,n,r){/* Array compacting. Copyright Lo-Dash. MIT License: https://github.com/lodash/lodash/blob/master/LICENSE.txt */
function i(e){for(var t=-1,n=e?e.length:0,r=[];++t<n;){var i=e[t];i&&r.push(i)}return r}// TODO: IE8, Cache of Array.prototype.slice that works on IE8
function o(e){/* Unwrap jQuery/Zepto objects. */
return b.isWrapped(e)?e=m.call(e):b.isNode(e)&&(e=[e]),e}/* Shorthand alias for jQuery's $.data() utility. */
function a(e){/* Hardcode a reference to the plugin name. */
var t=h.data(e,"velocity");/* jQuery <=1.4.2 returns null instead of undefined when no match is found. We normalize this behavior. */
return null===t?r:t}/**************
		 Delay Timer
		 **************/
function u(e,t){/* Check for any delay timers, and pause the set timeouts (while preserving time data)
			 to be resumed when the "resume" command is issued */
var n=a(e);n&&n.delayTimer&&!n.delayPaused&&(n.delayRemaining=n.delay-t+n.delayBegin,n.delayPaused=!0,clearTimeout(n.delayTimer.setTimeout))}function s(e,t){/* Check for any paused timers and resume */
var n=a(e);n&&n.delayTimer&&n.delayPaused&&(/* If the element was mid-delay, re initiate the timeout with the remaining delay */
n.delayPaused=!1,n.delayTimer.setTimeout=setTimeout(n.delayTimer.next,n.delayRemaining))}/**************
		 Easing
		 **************/
/* Step easing generator. */
function l(e){return function(t){return Math.round(t*e)*(1/e)}}/* Bezier curve function generator. Copyright Gaetan Renaudeau. MIT License: http://en.wikipedia.org/wiki/MIT_License */
function c(e,n,r,i){function o(e,t){return 1-3*t+3*e}function a(e,t){return 3*t-6*e}function u(e){return 3*e}function s(e,t,n){return((o(t,n)*e+a(t,n))*e+u(t))*e}function l(e,t,n){return 3*o(t,n)*e*e+2*a(t,n)*e+u(t)}function c(t,n){for(var i=0;i<g;++i){var o=l(n,e,r);if(0===o)return n;var a=s(n,e,r)-t;n-=a/o}return n}function f(){for(var t=0;t<b;++t)T[t]=s(t*x,e,r)}function p(t,n,i){var o,a,u=0;do a=n+(i-n)/2,o=s(a,e,r)-t,o>0?i=a:n=a;while(Math.abs(o)>y&&++u<m);return a}function d(t){for(var n=0,i=1,o=b-1;i!==o&&T[i]<=t;++i)n+=x;--i;var a=(t-T[i])/(T[i+1]-T[i]),u=n+a*x,s=l(u,e,r);return s>=v?c(t,u):0===s?u:p(t,n,n+x)}function h(){S=!0,e===n&&r===i||f()}var g=4,v=.001,y=1e-7,m=10,b=11,x=1/(b-1),w="Float32Array"in t;/* Must contain four arguments. */
if(4!==arguments.length)return!1;/* Arguments must be numbers. */
for(var _=0;_<4;++_)if("number"!=typeof arguments[_]||isNaN(arguments[_])||!isFinite(arguments[_]))return!1;/* X values must be in the [0, 1] range. */
e=Math.min(e,1),r=Math.min(r,1),e=Math.max(e,0),r=Math.max(r,0);var T=w?new Float32Array(b):new Array(b),S=!1,k=function(t){return S||h(),e===n&&r===i?t:0===t?0:1===t?1:s(d(t),n,i)};k.getControlPoints=function(){return[{x:e,y:n},{x:r,y:i}]};var C="generateBezier("+[e,n,r,i]+")";return k.toString=function(){return C},k}/* Determine the appropriate easing type given an easing input. */
function f(e,t){var n=e;/* The easing option can either be a string that references a pre-registered easing,
			 or it can be a two-/four-item array of integers to be converted into a bezier/spring function. */
/* Ensure that the easing has been assigned to jQuery's Velocity.Easings object. */
/* Revert to the Velocity-wide default easing type, or fall back to "swing" (which is also jQuery's default)
			 if the Velocity-wide default has been incorrectly modified. */
return b.isString(e)?T.Easings[e]||(n=!1):n=b.isArray(e)&&1===e.length?l.apply(null,e):b.isArray(e)&&2===e.length?S.apply(null,e.concat([t])):!(!b.isArray(e)||4!==e.length)&&c.apply(null,e),n===!1&&(n=T.Easings[T.defaults.easing]?T.defaults.easing:_),n}/************
		 Tick
		 ************/
/* Note: All calls to Velocity are pushed to the Velocity.State.calls array, which is fully iterated through upon each tick. */
function p(e){/* An empty timestamp argument indicates that this is the first tick occurence since ticking was turned on.
			 We leverage this metadata to fully ignore the first tick pass since RAF's initial pass is fired whenever
			 the browser's next tick sync time occurs, which results in the first elements subjected to Velocity
			 calls being animated out of sync with any elements animated immediately thereafter. In short, we ignore
			 the first RAF tick pass so that elements being immediately consecutively animated -- instead of simultaneously animated
			 by the same Velocity call -- are properly batched into the same initial RAF tick and consequently remain in sync thereafter. */
if(e){/* We normally use RAF's high resolution timestamp but as it can be significantly offset when the browser is
				 under high stress we give the option for choppiness over allowing the browser to drop huge chunks of frames.
				 We use performance.now() and shim it if it doesn't exist for when the tab is hidden. */
var t=T.timestamp&&e!==!0?e:y.now(),n=T.State.calls.length;/* To speed up iterating over this array, it is compacted (falsey items -- calls that have completed -- are removed)
				 when its length has ballooned to a point that can impact tick performance. This only becomes necessary when animation
				 has been continuous with many elements over a long period of time; whenever all active calls are completed, completeCall() clears Velocity.State.calls. */
n>1e4&&(T.State.calls=i(T.State.calls),n=T.State.calls.length);/* Iterate through each active call. */
for(var o=0;o<n;o++)/* When a Velocity call is completed, its Velocity.State.calls entry is set to false. Continue on to the next call. */
if(T.State.calls[o]){/************************
					 Call-Wide Variables
					 ************************/
var u=T.State.calls[o],s=u[0],l=u[2],c=u[3],f=!!c,v=null,m=u[5],x=u[6];/* If a pause object is present, skip processing unless it has been set to resume */
if(/* If timeStart is undefined, then this is the first time that this call has been processed by tick().
					 We assign timeStart now so that its value is as close to the real animation start time as possible.
					 (Conversely, had timeStart been defined when this call was added to Velocity.State.calls, the delay
					 between that time and now would cause the first few frames of the tween to be skipped since
					 percentComplete is calculated relative to timeStart.) */
/* Further, subtract 16ms (the approximate resolution of RAF) from the current time value so that the
					 first tick iteration isn't wasted by animating at 0% tween completion, which would produce the
					 same style value as the element's current value. */
c||(c=T.State.calls[o][3]=t-16),m){if(m.resume!==!0)continue;/* Update the time start to accomodate the paused completion amount */
c=u[3]=Math.round(t-x-16),/* Remove pause object after processing */
u[5]=null}x=u[6]=t-c;/**********************
					 Element Iteration
					 **********************/
/* For every call, iterate through each of the elements in its set. */
for(var w=Math.min(x/l.duration,1),_=0,S=s.length;_<S;_++){var C=s[_],A=C.element;/* Check to see if this element has been deleted midway through the animation by checking for the
						 continued existence of its data cache. If it's gone, or the element is currently paused, skip animating this element. */
if(a(A)){var E=!1;/**********************************
						 Display & Visibility Toggling
						 **********************************/
/* If the display option is set to non-"none", set it upfront so that the element can become visible before tweening begins.
						 (Otherwise, display's "none" value is set in completeCall() once the animation has completed.) */
if(l.display!==r&&null!==l.display&&"none"!==l.display){if("flex"===l.display){var P=["-webkit-box","-moz-box","-ms-flexbox","-webkit-flex"];h.each(P,function(e,t){k.setPropertyValue(A,"display",t)})}k.setPropertyValue(A,"display",l.display)}/* Same goes with the visibility option, but its "none" equivalent is "hidden". */
l.visibility!==r&&"hidden"!==l.visibility&&k.setPropertyValue(A,"visibility",l.visibility);/************************
						 Property Iteration
						 ************************/
/* For every element, iterate through each property. */
for(var N in C)/* Note: In addition to property tween data, tweensContainer contains a reference to its associated element. */
if(C.hasOwnProperty(N)&&"element"!==N){var O,L=C[N],/* Easing can either be a pre-genereated function or a string that references a pre-registered easing
										 on the Velocity.Easings object. In either case, return the appropriate easing *function*. */
D=b.isString(L.easing)?T.Easings[L.easing]:L.easing;/******************************
								 Current Value Calculation
								 ******************************/
if(b.isString(L.pattern)){var F=1===w?function(e,t,n){var r=L.endValue[t];return n?Math.round(r):r}:function(e,t,n){var r=L.startValue[t],i=L.endValue[t]-r,o=r+i*D(w,l,i);return n?Math.round(o):o};O=L.pattern.replace(/{(\d+)(!)?}/g,F)}else if(1===w)/* If this is the last tick pass (if we've reached 100% completion for this tween),
									 ensure that currentValue is explicitly set to its target endValue so that it's not subjected to any rounding. */
O=L.endValue;else{/* Otherwise, calculate currentValue based on the current delta from startValue. */
var q=L.endValue-L.startValue;O=L.startValue+q*D(w,l,q)}if(!f&&O===L.currentValue)continue;/* If we're tweening a fake 'tween' property in order to log transition values, update the one-per-call variable so that
								 it can be passed into the progress callback. */
if(L.currentValue=O,"tween"===N)v=O;else{/******************
									 Hooks: Part I
									 ******************/
var R;/* For hooked properties, the newly-updated rootPropertyValueCache is cached onto the element so that it can be used
									 for subsequent hooks in this call that are associated with the same root property. If we didn't cache the updated
									 rootPropertyValue, each subsequent update to the root property in this tick pass would reset the previous hook's
									 updates to rootPropertyValue prior to injection. A nice performance byproduct of rootPropertyValue caching is that
									 subsequently chained animations using the same hookRoot but a different hook can use this cached rootPropertyValue. */
if(k.Hooks.registered[N]){R=k.Hooks.getRoot(N);var V=a(A).rootPropertyValueCache[R];V&&(L.rootPropertyValue=V)}/*****************
									 DOM Update
									 *****************/
/* setPropertyValue() returns an array of the property name and property value post any normalization that may have been performed. */
/* Note: To solve an IE<=8 positioning bug, the unit type is dropped when setting a property value of 0. */
var H=k.setPropertyValue(A,/* SET */
N,L.currentValue+(g<9&&0===parseFloat(O)?"":L.unitType),L.rootPropertyValue,L.scrollData);/*******************
									 Hooks: Part II
									 *******************/
/* Now that we have the hook's updated rootPropertyValue (the post-processed value provided by adjustedSetData), cache it onto the element. */
k.Hooks.registered[N]&&(/* Since adjustedSetData contains normalized data ready for DOM updating, the rootPropertyValue needs to be re-extracted from its normalized form. ?? */
k.Normalizations.registered[R]?a(A).rootPropertyValueCache[R]=k.Normalizations.registered[R]("extract",null,H[1]):a(A).rootPropertyValueCache[R]=H[1]),/***************
									 Transforms
									 ***************/
/* Flag whether a transform property is being animated so that flushTransformCache() can be triggered once this tick pass is complete. */
"transform"===H[0]&&(E=!0)}}/****************
						 mobileHA
						 ****************/
/* If mobileHA is enabled, set the translate3d transform to null to force hardware acceleration.
						 It's safe to override this property since Velocity doesn't actually support its animation (hooks are used in its place). */
l.mobileHA&&a(A).transformCache.translate3d===r&&(/* All entries on the transformCache object are later concatenated into a single transform string via flushTransformCache(). */
a(A).transformCache.translate3d="(0px, 0px, 0px)",E=!0),E&&k.flushTransformCache(A)}}/* The non-"none" display value is only applied to an element once -- when its associated call is first ticked through.
					 Accordingly, it's set to false so that it isn't re-processed by this call in the next tick. */
l.display!==r&&"none"!==l.display&&(T.State.calls[o][2].display=!1),l.visibility!==r&&"hidden"!==l.visibility&&(T.State.calls[o][2].visibility=!1),/* Pass the elements and the timing data (percentComplete, msRemaining, timeStart, tweenDummyValue) into the progress callback. */
l.progress&&l.progress.call(u[1],u[1],w,Math.max(0,c+l.duration-t),c,v),/* If this call has finished tweening, pass its index to completeCall() to handle call cleanup. */
1===w&&d(o)}}/* Note: completeCall() sets the isTicking flag to false when the last call on Velocity.State.calls has completed. */
T.State.isTicking&&j(p)}/**********************
		 Call Completion
		 **********************/
/* Note: Unlike tick(), which processes all active calls at once, call completion is handled on a per-call basis. */
function d(e,t){/* Ensure the call exists. */
if(!T.State.calls[e])return!1;/*************************
			 Element Finalization
			 *************************/
for(var n=T.State.calls[e][0],i=T.State.calls[e][1],o=T.State.calls[e][2],u=T.State.calls[e][4],s=!1,l=0,c=n.length;l<c;l++){var f=n[l].element;/* If the user set display to "none" (intending to hide the element), set it now that the animation has completed. */
/* Note: display:none isn't set when calls are manually stopped (via Velocity("stop"). */
/* Note: Display gets ignored with "reverse" calls and infinite loops, since this behavior would be undesirable. */
t||o.loop||("none"===o.display&&k.setPropertyValue(f,"display",o.display),"hidden"===o.visibility&&k.setPropertyValue(f,"visibility",o.visibility));/* If the element's queue is empty (if only the "inprogress" item is left at position 0) or if its queue is about to run
				 a non-Velocity-initiated entry, turn off the isAnimating flag. A non-Velocity-initiatied queue entry's logic might alter
				 an element's CSS values and thereby cause Velocity's cached value data to go stale. To detect if a queue entry was initiated by Velocity,
				 we check for the existence of our special Velocity.queueEntryFlag declaration, which minifiers won't rename since the flag
				 is assigned to jQuery's global $ object and thus exists out of Velocity's own scope. */
var p=a(f);if(o.loop!==!0&&(h.queue(f)[1]===r||!/\.velocityQueueEntryFlag/i.test(h.queue(f)[1]))&&p){p.isAnimating=!1,/* Clear the element's rootPropertyValueCache, which will become stale. */
p.rootPropertyValueCache={};var d=!1;/* If any 3D transform subproperty is at its default value (regardless of unit type), remove it. */
h.each(k.Lists.transforms3D,function(e,t){var n=/^scale/.test(t)?1:0,i=p.transformCache[t];p.transformCache[t]!==r&&new RegExp("^\\("+n+"[^.]").test(i)&&(d=!0,delete p.transformCache[t])}),/* Mobile devices have hardware acceleration removed at the end of the animation in order to avoid hogging the GPU's memory. */
o.mobileHA&&(d=!0,delete p.transformCache.translate3d),/* Flush the subproperty removals to the DOM. */
d&&k.flushTransformCache(f),/* Remove the "velocity-animating" indicator class. */
k.Values.removeClass(f,"velocity-animating")}/*********************
				 Option: Complete
				 *********************/
/* Complete is fired once per call (not once per element) and is passed the full raw DOM element set as both its context and its first argument. */
/* Note: Callbacks aren't fired when calls are manually stopped (via Velocity("stop"). */
if(!t&&o.complete&&!o.loop&&l===c-1)/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
try{o.complete.call(i,i)}catch(e){setTimeout(function(){throw e},1)}/**********************
				 Promise Resolving
				 **********************/
/* Note: Infinite loops don't return promises. */
u&&o.loop!==!0&&u(i),/****************************
				 Option: Loop (Infinite)
				 ****************************/
p&&o.loop===!0&&!t&&(/* If a rotateX/Y/Z property is being animated by 360 deg with loop:true, swap tween start/end values to enable
					 continuous iterative rotation looping. (Otherise, the element would just rotate back and forth.) */
h.each(p.tweensContainer,function(e,t){if(/^rotate/.test(e)&&(parseFloat(t.startValue)-parseFloat(t.endValue))%360===0){var n=t.startValue;t.startValue=t.endValue,t.endValue=n}/^backgroundPosition/.test(e)&&100===parseFloat(t.endValue)&&"%"===t.unitType&&(t.endValue=0,t.startValue=100)}),T(f,"reverse",{loop:!0,delay:o.delay})),/***************
				 Dequeueing
				 ***************/
/* Fire the next call in the queue so long as this call's queue wasn't set to false (to trigger a parallel animation),
				 which would have already caused the next call to fire. Note: Even if the end of the animation queue has been reached,
				 $.dequeue() must still be called in order to completely clear jQuery's animation queue. */
o.queue!==!1&&h.dequeue(f,o.queue)}/************************
			 Calls Array Cleanup
			 ************************/
/* Since this call is complete, set it to false so that the rAF tick skips it. This array is later compacted via compactSparseArray().
			 (For performance reasons, the call is set to false instead of being deleted from the array: http://www.html5rocks.com/en/tutorials/speed/v8/) */
T.State.calls[e]=!1;/* Iterate through the calls array to determine if this was the final in-progress animation.
			 If so, set a flag to end ticking and clear the calls array. */
for(var g=0,v=T.State.calls.length;g<v;g++)if(T.State.calls[g]!==!1){s=!0;break}s===!1&&(/* tick() will detect this flag upon its next iteration and subsequently turn itself off. */
T.State.isTicking=!1,/* Clear the calls array so that its length is reset. */
delete T.State.calls,T.State.calls=[])}/***************
		 Summary
		 ***************/
/*
		 - CSS: CSS stack that works independently from the rest of Velocity.
		 - animate(): Core animation method that iterates over the targeted elements and queues the incoming call onto each element individually.
		 - Pre-Queueing: Prepare the element for animation by instantiating its data cache and processing the call's options.
		 - Queueing: The logic that runs once the call has reached its point of execution in the element's $.queue() stack.
		 Most logic is placed here to avoid risking it becoming stale (if the element's properties have changed).
		 - Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
		 - tick(): The single requestAnimationFrame loop responsible for tweening all in-progress calls.
		 - completeCall(): Handles the cleanup process for each Velocity call.
		 */
/*********************
		 Helper Functions
		 *********************/
/* IE detection. Gist: https://gist.github.com/julianshapiro/9098609 */
var h,g=function(){if(n.documentMode)return n.documentMode;for(var e=7;e>4;e--){var t=n.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e}return r}(),v=function(){var e=0;return t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||function(t){var n,r=(new Date).getTime();/* Dynamically set delay on a per-tick basis to match 60fps. */
/* Technique by Erik Moller. MIT license: https://gist.github.com/paulirish/1579671 */
return n=Math.max(0,16-(r-e)),e=r+n,setTimeout(function(){t(r+n)},n)}}(),y=function(){var e=t.performance||{};if(!Object.prototype.hasOwnProperty.call(e,"now")){var n=e.timing&&e.timing.domComplete?e.timing.domComplete:(new Date).getTime();e.now=function(){return(new Date).getTime()-n}}return e}(),m=function(){var e=Array.prototype.slice;try{
// Can't be used with DOM elements in IE < 9
e.call(n.documentElement)}catch(t){// Fails in IE < 9
// This will work for genuine arrays, array-like objects, 
// NamedNodeMap (attributes, entities, notations),
// NodeList (e.g., getElementsByTagName), HTMLCollection (e.g., childNodes),
// and will not fail on other DOM objects (as do DOM elements in IE < 9)
e=function(){for(var e=this.length,t=[];--e>0;)t[e]=this[e];return cloned}}return e}(),b={isNumber:function(e){return"number"==typeof e},isString:function(e){return"string"==typeof e},isArray:Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},isFunction:function(e){return"[object Function]"===Object.prototype.toString.call(e)},isNode:function(e){return e&&e.nodeType},/* Determine if variable is an array-like wrapped jQuery, Zepto or similar element, or even a NodeList etc. */
/* NOTE: HTMLFormElements also have a length. */
isWrapped:function(e){return e&&b.isNumber(e.length)&&!b.isString(e)&&!b.isFunction(e)&&!b.isNode(e)&&(0===e.length||b.isNode(e[0]))},isSVG:function(e){return t.SVGElement&&e instanceof t.SVGElement},isEmptyObject:function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0}},x=!1;if(e.fn&&e.fn.jquery?(h=e,x=!0):h=t.Velocity.Utilities,g<=8&&!x)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");if(g<=7)/* Now that $.fn.velocity is aliased, abort this Velocity declaration. */
/* Revert to jQuery's $.animate(), and lose Velocity's extra features. */
return void(jQuery.fn.velocity=jQuery.fn.animate);/*****************
		 Constants
		 *****************/
var w=400,_="swing",T={/* Container for page-wide Velocity state data. */
State:{/* Detect mobile devices to determine if mobileHA should be turned on. */
isMobile:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),/* The mobileHA option's behavior changes on older Android devices (Gingerbread, versions 2.3.3-2.3.7). */
isAndroid:/Android/i.test(navigator.userAgent),isGingerbread:/Android 2\.3\.[3-7]/i.test(navigator.userAgent),isChrome:t.chrome,isFirefox:/Firefox/i.test(navigator.userAgent),/* Create a cached element for re-use when checking for CSS property prefixes. */
prefixElement:n.createElement("div"),/* Cache every prefix match to avoid repeating lookups. */
prefixMatches:{},/* Cache the anchor used for animating window scrolling. */
scrollAnchor:null,/* Cache the browser-specific property names associated with the scroll anchor. */
scrollPropertyLeft:null,scrollPropertyTop:null,/* Keep track of whether our RAF tick is running. */
isTicking:!1,/* Container for every in-progress call to Velocity. */
calls:[],delayedElements:{count:0}},/* Velocity's custom CSS stack. Made global for unit testing. */
CSS:{},/* A shim of the jQuery utility functions used by Velocity -- provided by Velocity's optional jQuery shim. */
Utilities:h,/* Container for the user's custom animation redirects that are referenced by name in place of the properties map argument. */
Redirects:{},Easings:{},/* Attempt to use ES6 Promises by default. Users can override this with a third-party promises library. */
Promise:t.Promise,/* Velocity option defaults, which can be overriden by the user. */
defaults:{queue:"",duration:w,easing:_,begin:r,complete:r,progress:r,display:r,visibility:r,loop:!1,delay:!1,mobileHA:!0,/* Advanced: Set to false to prevent property values from being cached between consecutive Velocity-initiated chain calls. */
_cacheValues:!0,/* Advanced: Set to false if the promise should always resolve on empty element lists. */
promiseRejectEmpty:!0},/* A design goal of Velocity is to cache data wherever possible in order to avoid DOM requerying. Accordingly, each element has a data cache. */
init:function(e){h.data(e,"velocity",{/* Store whether this is an SVG element, since its properties are retrieved and updated differently than standard HTML elements. */
isSVG:b.isSVG(e),/* Keep track of whether the element is currently being animated by Velocity.
					 This is used to ensure that property values are not transferred between non-consecutive (stale) calls. */
isAnimating:!1,/* A reference to the element's live computedStyle object. Learn more here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
computedStyle:null,/* Tween data is cached for each animation on the element so that data can be passed across calls --
					 in particular, end values are used as subsequent start values in consecutive Velocity calls. */
tweensContainer:null,/* The full root property values of each CSS hook being animated on this element are cached so that:
					 1) Concurrently-animating hooks sharing the same root can have their root values' merged into one while tweening.
					 2) Post-hook-injection root values can be transferred over to consecutively chained Velocity calls as starting root values. */
rootPropertyValueCache:{},/* A cache for transform updates, which must be manually flushed via CSS.flushTransformCache(). */
transformCache:{}})},/* A parallel to jQuery's $.css(), used for getting/setting Velocity's hooked CSS properties. */
hook:null,/* Defined below. */
/* Velocity-wide animation time remapping for testing purposes. */
mock:!1,version:{major:1,minor:4,patch:2},/* Set to 1 or 2 (most verbose) to output debug info to console. */
debug:!1,/* Use rAF high resolution timestamp when available */
timestamp:!0,/* Pause all animations */
pauseAll:function(e){var t=(new Date).getTime();h.each(T.State.calls,function(t,n){if(n){/* If we have a queueName and this call is not on that queue, skip */
if(e!==r&&(n[2].queue!==e||n[2].queue===!1))return!0;/* Set call to paused */
n[5]={resume:!1}}}),/* Pause timers on any currently delayed calls */
h.each(T.State.delayedElements,function(e,n){n&&u(n,t)})},/* Resume all animations */
resumeAll:function(e){var t=(new Date).getTime();h.each(T.State.calls,function(t,n){if(n){/* If we have a queueName and this call is not on that queue, skip */
if(e!==r&&(n[2].queue!==e||n[2].queue===!1))return!0;/* Set call to resumed if it was paused */
n[5]&&(n[5].resume=!0)}}),/* Resume timers on any currently delayed calls */
h.each(T.State.delayedElements,function(e,n){n&&s(n,t)})}};/* Retrieve the appropriate scroll anchor and property name for the browser: https://developer.mozilla.org/en-US/docs/Web/API/Window.scrollY */
t.pageYOffset!==r?(T.State.scrollAnchor=t,T.State.scrollPropertyLeft="pageXOffset",T.State.scrollPropertyTop="pageYOffset"):(T.State.scrollAnchor=n.documentElement||n.body.parentNode||n.body,T.State.scrollPropertyLeft="scrollLeft",T.State.scrollPropertyTop="scrollTop");/* Runge-Kutta spring physics function generator. Adapted from Framer.js, copyright Koen Bok. MIT License: http://en.wikipedia.org/wiki/MIT_License */
/* Given a tension, friction, and duration, a simulation at 60FPS will first run without a defined duration in order to calculate the full path. A second pass
		 then adjusts the time delta -- using the relation between actual time and duration -- to calculate the path for the duration-constrained animation. */
var S=function(){function e(e){return-e.tension*e.x-e.friction*e.v}function t(t,n,r){var i={x:t.x+r.dx*n,v:t.v+r.dv*n,tension:t.tension,friction:t.friction};return{dx:i.v,dv:e(i)}}function n(n,r){var i={dx:n.v,dv:e(n)},o=t(n,.5*r,i),a=t(n,.5*r,o),u=t(n,r,a),s=1/6*(i.dx+2*(o.dx+a.dx)+u.dx),l=1/6*(i.dv+2*(o.dv+a.dv)+u.dv);return n.x=n.x+s*r,n.v=n.v+l*r,n}return function e(t,r,i){var o,a,u,s={x:-1,v:0,tension:null,friction:null},l=[0],c=0,f=1e-4,p=.016;for(t=parseFloat(t)||500,r=parseFloat(r)||20,i=i||null,s.tension=t,s.friction=r,o=null!==i,/* Calculate the actual time it takes for this animation to complete with the provided conditions. */
o?(/* Run the simulation without a duration. */
c=e(t,r),/* Compute the adjusted time delta. */
a=c/i*p):a=p;;)/* If the change threshold is reached, break. */
if(/* Next/step function .*/
u=n(u||s,a),/* Store the position. */
l.push(1+u.x),c+=16,!(Math.abs(u.x)>f&&Math.abs(u.v)>f))break;/* If duration is not defined, return the actual time required for completing this animation. Otherwise, return a closure that holds the
				 computed path and returns a snapshot of the position according to a given percentComplete. */
return o?function(e){return l[e*(l.length-1)|0]}:c}}();/* jQuery easings. */
T.Easings={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},/* Bonus "spring" easing, which is a less exaggerated version of easeInOutElastic. */
spring:function(e){return 1-Math.cos(4.5*e*Math.PI)*Math.exp(6*-e)}},/* CSS3 and Robert Penner easings. */
h.each([["ease",[.25,.1,.25,1]],["ease-in",[.42,0,1,1]],["ease-out",[0,0,.58,1]],["ease-in-out",[.42,0,.58,1]],["easeInSine",[.47,0,.745,.715]],["easeOutSine",[.39,.575,.565,1]],["easeInOutSine",[.445,.05,.55,.95]],["easeInQuad",[.55,.085,.68,.53]],["easeOutQuad",[.25,.46,.45,.94]],["easeInOutQuad",[.455,.03,.515,.955]],["easeInCubic",[.55,.055,.675,.19]],["easeOutCubic",[.215,.61,.355,1]],["easeInOutCubic",[.645,.045,.355,1]],["easeInQuart",[.895,.03,.685,.22]],["easeOutQuart",[.165,.84,.44,1]],["easeInOutQuart",[.77,0,.175,1]],["easeInQuint",[.755,.05,.855,.06]],["easeOutQuint",[.23,1,.32,1]],["easeInOutQuint",[.86,0,.07,1]],["easeInExpo",[.95,.05,.795,.035]],["easeOutExpo",[.19,1,.22,1]],["easeInOutExpo",[1,0,0,1]],["easeInCirc",[.6,.04,.98,.335]],["easeOutCirc",[.075,.82,.165,1]],["easeInOutCirc",[.785,.135,.15,.86]]],function(e,t){T.Easings[t[0]]=c.apply(null,t[1])});/*****************
		 CSS Stack
		 *****************/
/* The CSS object is a highly condensed and performant CSS stack that fully replaces jQuery's.
		 It handles the validation, getting, and setting of both standard CSS properties and CSS property hooks. */
/* Note: A "CSS" shorthand is aliased so that our code is easier to read. */
var k=T.CSS={/*************
			 RegEx
			 *************/
RegEx:{isHex:/^#([A-f\d]{3}){1,2}$/i,/* Unwrap a property value's surrounding text, e.g. "rgba(4, 3, 2, 1)" ==> "4, 3, 2, 1" and "rect(4px 3px 2px 1px)" ==> "4px 3px 2px 1px". */
valueUnwrap:/^[A-z]+\((.*)\)$/i,wrappedValueAlreadyExtracted:/[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,/* Split a multi-value property into an array of subvalues, e.g. "rgba(4, 3, 2, 1) 4px 3px 2px 1px" ==> [ "rgba(4, 3, 2, 1)", "4px", "3px", "2px", "1px" ]. */
valueSplit:/([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi},/************
			 Lists
			 ************/
Lists:{colors:["fill","stroke","stopColor","color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],transformsBase:["translateX","translateY","scale","scaleX","scaleY","skewX","skewY","rotateZ"],transforms3D:["transformPerspective","translateZ","scaleZ","rotateX","rotateY"],units:["%",// relative
"em","ex","ch","rem",// font relative
"vw","vh","vmin","vmax",// viewport relative
"cm","mm","Q","in","pc","pt","px",// absolute lengths
"deg","grad","rad","turn",// angles
"s","ms"],colorNames:{aliceblue:"240,248,255",antiquewhite:"250,235,215",aquamarine:"127,255,212",aqua:"0,255,255",azure:"240,255,255",beige:"245,245,220",bisque:"255,228,196",black:"0,0,0",blanchedalmond:"255,235,205",blueviolet:"138,43,226",blue:"0,0,255",brown:"165,42,42",burlywood:"222,184,135",cadetblue:"95,158,160",chartreuse:"127,255,0",chocolate:"210,105,30",coral:"255,127,80",cornflowerblue:"100,149,237",cornsilk:"255,248,220",crimson:"220,20,60",cyan:"0,255,255",darkblue:"0,0,139",darkcyan:"0,139,139",darkgoldenrod:"184,134,11",darkgray:"169,169,169",darkgrey:"169,169,169",darkgreen:"0,100,0",darkkhaki:"189,183,107",darkmagenta:"139,0,139",darkolivegreen:"85,107,47",darkorange:"255,140,0",darkorchid:"153,50,204",darkred:"139,0,0",darksalmon:"233,150,122",darkseagreen:"143,188,143",darkslateblue:"72,61,139",darkslategray:"47,79,79",darkturquoise:"0,206,209",darkviolet:"148,0,211",deeppink:"255,20,147",deepskyblue:"0,191,255",dimgray:"105,105,105",dimgrey:"105,105,105",dodgerblue:"30,144,255",firebrick:"178,34,34",floralwhite:"255,250,240",forestgreen:"34,139,34",fuchsia:"255,0,255",gainsboro:"220,220,220",ghostwhite:"248,248,255",gold:"255,215,0",goldenrod:"218,165,32",gray:"128,128,128",grey:"128,128,128",greenyellow:"173,255,47",green:"0,128,0",honeydew:"240,255,240",hotpink:"255,105,180",indianred:"205,92,92",indigo:"75,0,130",ivory:"255,255,240",khaki:"240,230,140",lavenderblush:"255,240,245",lavender:"230,230,250",lawngreen:"124,252,0",lemonchiffon:"255,250,205",lightblue:"173,216,230",lightcoral:"240,128,128",lightcyan:"224,255,255",lightgoldenrodyellow:"250,250,210",lightgray:"211,211,211",lightgrey:"211,211,211",lightgreen:"144,238,144",lightpink:"255,182,193",lightsalmon:"255,160,122",lightseagreen:"32,178,170",lightskyblue:"135,206,250",lightslategray:"119,136,153",lightsteelblue:"176,196,222",lightyellow:"255,255,224",limegreen:"50,205,50",lime:"0,255,0",linen:"250,240,230",magenta:"255,0,255",maroon:"128,0,0",mediumaquamarine:"102,205,170",mediumblue:"0,0,205",mediumorchid:"186,85,211",mediumpurple:"147,112,219",mediumseagreen:"60,179,113",mediumslateblue:"123,104,238",mediumspringgreen:"0,250,154",mediumturquoise:"72,209,204",mediumvioletred:"199,21,133",midnightblue:"25,25,112",mintcream:"245,255,250",mistyrose:"255,228,225",moccasin:"255,228,181",navajowhite:"255,222,173",navy:"0,0,128",oldlace:"253,245,230",olivedrab:"107,142,35",olive:"128,128,0",orangered:"255,69,0",orange:"255,165,0",orchid:"218,112,214",palegoldenrod:"238,232,170",palegreen:"152,251,152",paleturquoise:"175,238,238",palevioletred:"219,112,147",papayawhip:"255,239,213",peachpuff:"255,218,185",peru:"205,133,63",pink:"255,192,203",plum:"221,160,221",powderblue:"176,224,230",purple:"128,0,128",red:"255,0,0",rosybrown:"188,143,143",royalblue:"65,105,225",saddlebrown:"139,69,19",salmon:"250,128,114",sandybrown:"244,164,96",seagreen:"46,139,87",seashell:"255,245,238",sienna:"160,82,45",silver:"192,192,192",skyblue:"135,206,235",slateblue:"106,90,205",slategray:"112,128,144",snow:"255,250,250",springgreen:"0,255,127",steelblue:"70,130,180",tan:"210,180,140",teal:"0,128,128",thistle:"216,191,216",tomato:"255,99,71",turquoise:"64,224,208",violet:"238,130,238",wheat:"245,222,179",whitesmoke:"245,245,245",white:"255,255,255",yellowgreen:"154,205,50",yellow:"255,255,0"}},/************
			 Hooks
			 ************/
/* Hooks allow a subproperty (e.g. "boxShadowBlur") of a compound-value CSS property
			 (e.g. "boxShadow: X Y Blur Spread Color") to be animated as if it were a discrete property. */
/* Note: Beyond enabling fine-grained property animation, hooking is necessary since Velocity only
			 tweens properties with single numeric values; unlike CSS transitions, Velocity does not interpolate compound-values. */
Hooks:{/********************
				 Registration
				 ********************/
/* Templates are a concise way of indicating which subproperties must be individually registered for each compound-value CSS property. */
/* Each template consists of the compound-value's base name, its constituent subproperty names, and those subproperties' default values. */
templates:{textShadow:["Color X Y Blur","black 0px 0px 0px"],boxShadow:["Color X Y Blur Spread","black 0px 0px 0px 0px"],clip:["Top Right Bottom Left","0px 0px 0px 0px"],backgroundPosition:["X Y","0% 0%"],transformOrigin:["X Y Z","50% 50% 0px"],perspectiveOrigin:["X Y","50% 50%"]},/* A "registered" hook is one that has been converted from its template form into a live,
				 tweenable property. It contains data to associate it with its root property. */
registered:{},/* Convert the templates into individual hooks then append them to the registered object above. */
register:function(){/* Color hooks registration: Colors are defaulted to white -- as opposed to black -- since colors that are
					 currently set to "transparent" default to their respective template below when color-animated,
					 and white is typically a closer match to transparent than black is. An exception is made for text ("color"),
					 which is almost always set closer to black than white. */
for(var e=0;e<k.Lists.colors.length;e++){var t="color"===k.Lists.colors[e]?"0 0 0 1":"255 255 255 1";k.Hooks.templates[k.Lists.colors[e]]=["Red Green Blue Alpha",t]}var n,r,i;/* In IE, color values inside compound-value properties are positioned at the end the value instead of at the beginning.
					 Thus, we re-arrange the templates accordingly. */
if(g)for(n in k.Hooks.templates)if(k.Hooks.templates.hasOwnProperty(n)){r=k.Hooks.templates[n],i=r[0].split(" ");var o=r[1].match(k.RegEx.valueSplit);"Color"===i[0]&&(/* Reposition both the hook's name and its default value to the end of their respective strings. */
i.push(i.shift()),o.push(o.shift()),/* Replace the existing template for the hook's root property. */
k.Hooks.templates[n]=[i.join(" "),o.join(" ")])}/* Hook registration. */
for(n in k.Hooks.templates)if(k.Hooks.templates.hasOwnProperty(n)){r=k.Hooks.templates[n],i=r[0].split(" ");for(var a in i)if(i.hasOwnProperty(a)){var u=n+i[a],s=a;/* For each hook, register its full name (e.g. textShadowBlur) with its root property (e.g. textShadow)
							 and the hook's position in its template's default value string. */
k.Hooks.registered[u]=[n,s]}}},/*****************************
				 Injection and Extraction
				 *****************************/
/* Look up the root property associated with the hook (e.g. return "textShadow" for "textShadowBlur"). */
/* Since a hook cannot be set directly (the browser won't recognize it), style updating for hooks is routed through the hook's root property. */
getRoot:function(e){var t=k.Hooks.registered[e];return t?t[0]:e},getUnit:function(e,t){var n=(e.substr(t||0,5).match(/^[a-z%]+/)||[])[0]||"";return n&&k.Lists.units.indexOf(n)>=0?n:""},fixColors:function(e){return e.replace(/(rgba?\(\s*)?(\b[a-z]+\b)/g,function(e,t,n){return k.Lists.colorNames.hasOwnProperty(n)?(t?t:"rgba(")+k.Lists.colorNames[n]+(t?"":",1)"):t+n})},/* Convert any rootPropertyValue, null or otherwise, into a space-delimited list of hook values so that
				 the targeted hook can be injected or extracted at its standard position. */
cleanRootPropertyValue:function(e,t){/* If the rootPropertyValue is wrapped with "rgb()", "clip()", etc., remove the wrapping to normalize the value before manipulation. */
/* If rootPropertyValue is a CSS null-value (from which there's inherently no hook value to extract),
					 default to the root's default value as defined in CSS.Hooks.templates. */
/* Note: CSS null-values include "none", "auto", and "transparent". They must be converted into their
					 zero-values (e.g. textShadow: "none" ==> textShadow: "0px 0px 0px black") for hook manipulation to proceed. */
return k.RegEx.valueUnwrap.test(t)&&(t=t.match(k.RegEx.valueUnwrap)[1]),k.Values.isCSSNullValue(t)&&(t=k.Hooks.templates[e][1]),t},/* Extracted the hook's value from its root property's value. This is used to get the starting value of an animating hook. */
extractValue:function(e,t){var n=k.Hooks.registered[e];if(n){var r=n[0],i=n[1];/* Split rootPropertyValue into its constituent hook values then grab the desired hook at its standard position. */
return t=k.Hooks.cleanRootPropertyValue(r,t),t.toString().match(k.RegEx.valueSplit)[i]}/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
return t},/* Inject the hook's value into its root property's value. This is used to piece back together the root property
				 once Velocity has updated one of its individually hooked values through tweening. */
injectValue:function(e,t,n){var r=k.Hooks.registered[e];if(r){var i,o,a=r[0],u=r[1];/* Split rootPropertyValue into its individual hook values, replace the targeted value with hookValue,
						 then reconstruct the rootPropertyValue string. */
return n=k.Hooks.cleanRootPropertyValue(a,n),i=n.toString().match(k.RegEx.valueSplit),i[u]=t,o=i.join(" ")}/* If the provided fullHookName isn't a registered hook, return the rootPropertyValue that was passed in. */
return n}},/*******************
			 Normalizations
			 *******************/
/* Normalizations standardize CSS property manipulation by pollyfilling browser-specific implementations (e.g. opacity)
			 and reformatting special properties (e.g. clip, rgba) to look like standard ones. */
Normalizations:{/* Normalizations are passed a normalization target (either the property's name, its extracted value, or its injected value),
				 the targeted element (which may need to be queried), and the targeted property value. */
registered:{clip:function(e,t,n){switch(e){case"name":return"clip";/* Clip needs to be unwrapped and stripped of its commas during extraction. */
case"extract":var r;/* If Velocity also extracted this value, skip extraction. */
/* Remove the "rect()" wrapper. */
/* Strip off commas. */
return k.RegEx.wrappedValueAlreadyExtracted.test(n)?r=n:(r=n.toString().match(k.RegEx.valueUnwrap),r=r?r[1].replace(/,(\s+)?/g," "):n),r;/* Clip needs to be re-wrapped during injection. */
case"inject":return"rect("+n+")"}},blur:function(e,t,n){switch(e){case"name":return T.State.isFirefox?"filter":"-webkit-filter";case"extract":var r=parseFloat(n);/* If extracted is NaN, meaning the value isn't already extracted. */
if(!r&&0!==r){var i=n.toString().match(/blur\(([0-9]+[A-z]+)\)/i);/* If the filter string had a blur component, return just the blur value and unit type. */
r=i?i[1]:0}return r;/* Blur needs to be re-wrapped during injection. */
case"inject":/* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
/* For the blur effect to be fully de-applied, it needs to be set to "none" instead of 0. */
return parseFloat(n)?"blur("+n+")":"none"}},/* <=IE8 do not support the standard opacity property. They use filter:alpha(opacity=INT) instead. */
opacity:function(e,t,n){if(g<=8)switch(e){case"name":return"filter";case"extract":/* <=IE8 return a "filter" value of "alpha(opacity=\d{1,3})".
									 Extract the value and convert it to a decimal value to match the standard CSS opacity property's formatting. */
var r=n.toString().match(/alpha\(opacity=(.*)\)/i);/* Convert to decimal value. */
return n=r?r[1]/100:1;case"inject":/* Setting the filter property on elements with certain font property combinations can result in a
									 highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
									 value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
/* Opacified elements are required to have their zoom property set to a non-zero value. */
/* Setting the filter property on elements with certain font property combinations can result in a
									 highly unappealing ultra-bolding effect. There's no way to remedy this throughout a tween, but dropping the
									 value altogether (when opacity hits 1) at leasts ensures that the glitch is gone post-tweening. */
return t.style.zoom=1,parseFloat(n)>=1?"":"alpha(opacity="+parseInt(100*parseFloat(n),10)+")"}else switch(e){case"name":return"opacity";case"extract":return n;case"inject":return n}}},/*****************************
				 Batched Registrations
				 *****************************/
/* Note: Batched normalizations extend the CSS.Normalizations.registered object. */
register:function(){/**************
					 Dimensions
					 **************/
function e(e,t,n){var r="border-box"===k.getPropertyValue(t,"boxSizing").toString().toLowerCase();if(r===(n||!1)){/* in box-sizing mode, the CSS width / height accessors already give the outerWidth / outerHeight. */
var i,o,a=0,u="width"===e?["Left","Right"]:["Top","Bottom"],s=["padding"+u[0],"padding"+u[1],"border"+u[0]+"Width","border"+u[1]+"Width"];for(i=0;i<s.length;i++)o=parseFloat(k.getPropertyValue(t,s[i])),isNaN(o)||(a+=o);return n?-a:a}return 0}function t(t,n){return function(r,i,o){switch(r){case"name":return t;case"extract":return parseFloat(o)+e(t,i,n);case"inject":return parseFloat(o)-e(t,i,n)+"px"}}}/*****************
					 Transforms
					 *****************/
/* Transforms are the subproperties contained by the CSS "transform" property. Transforms must undergo normalization
					 so that they can be referenced in a properties map by their individual names. */
/* Note: When transforms are "set", they are actually assigned to a per-element transformCache. When all transform
					 setting is complete complete, CSS.flushTransformCache() must be manually called to flush the values to the DOM.
					 Transform setting is batched in this way to improve performance: the transform style only needs to be updated
					 once when multiple transform subproperties are being animated simultaneously. */
/* Note: IE9 and Android Gingerbread have support for 2D -- but not 3D -- transforms. Since animating unsupported
					 transform properties results in the browser ignoring the *entire* transform string, we prevent these 3D values
					 from being normalized for these browsers so that tweening skips these properties altogether
					 (since it will ignore them as being unsupported by the browser.) */
g&&!(g>9)||T.State.isGingerbread||(/* Note: Since the standalone CSS "perspective" property and the CSS transform "perspective" subproperty
						 share the same name, the latter is given a unique token within Velocity: "transformPerspective". */
k.Lists.transformsBase=k.Lists.transformsBase.concat(k.Lists.transforms3D));for(var n=0;n<k.Lists.transformsBase.length;n++)/* Wrap the dynamically generated normalization function in a new scope so that transformName's value is
						 paired with its respective function. (Otherwise, all functions would take the final for loop's transformName.) */
!function(){var e=k.Lists.transformsBase[n];k.Normalizations.registered[e]=function(t,n,i){switch(t){/* The normalized property name is the parent "transform" property -- the property that is actually set in CSS. */
case"name":return"transform";/* Transform values are cached onto a per-element transformCache object. */
case"extract":/* If this transform has yet to be assigned a value, return its null value. */
/* If this transform has yet to be assigned a value, return its null value. */
return a(n)===r||a(n).transformCache[e]===r?/^scale/i.test(e)?1:0:a(n).transformCache[e].replace(/[()]/g,"");case"inject":var o=!1;/* If an individual transform property contains an unsupported unit type, the browser ignores the *entire* transform property.
										 Thus, protect users from themselves by skipping setting for transform values supplied with invalid unit types. */
/* Switch on the base transform type; ignore the axis by removing the last letter from the transform's name. */
switch(e.substr(0,e.length-1)){/* Whitelist unit types for each transform. */
case"translate":o=!/(%|px|em|rem|vw|vh|\d)$/i.test(i);break;/* Since an axis-free "scale" property is supported as well, a little hack is used here to detect it by chopping off its last letter. */
case"scal":case"scale":/* Chrome on Android has a bug in which scaled elements blur if their initial scale
												 value is below 1 (which can happen with forcefeeding). Thus, we detect a yet-unset scale property
												 and ensure that its first value is always 1. More info: http://stackoverflow.com/questions/10417890/css3-animations-with-transform-causes-blurred-elements-on-webkit/10417962#10417962 */
T.State.isAndroid&&a(n).transformCache[e]===r&&i<1&&(i=1),o=!/(\d)$/i.test(i);break;case"skew":o=!/(deg|\d)$/i.test(i);break;case"rotate":o=!/(deg|\d)$/i.test(i)}/* Although the value is set on the transformCache object, return the newly-updated value for the calling code to process as normal. */
/* As per the CSS spec, wrap the value in parentheses. */
return o||(a(n).transformCache[e]="("+i+")"),a(n).transformCache[e]}}}();/*************
					 Colors
					 *************/
/* Since Velocity only animates a single numeric value per property, color animation is achieved by hooking the individual RGBA components of CSS color properties.
					 Accordingly, color values must be normalized (e.g. "#ff0000", "red", and "rgb(255, 0, 0)" ==> "255 0 0 1") so that their components can be injected/extracted by CSS.Hooks logic. */
for(var i=0;i<k.Lists.colors.length;i++)/* Wrap the dynamically generated normalization function in a new scope so that colorName's value is paired with its respective function.
						 (Otherwise, all functions would take the final for loop's colorName.) */
!function(){var e=k.Lists.colors[i];/* Note: In IE<=8, which support rgb but not rgba, color properties are reverted to rgb by stripping off the alpha component. */
k.Normalizations.registered[e]=function(t,n,i){switch(t){case"name":return e;/* Convert all color values into the rgb format. (Old IE can return hex values and color names instead of rgb/rgba.) */
case"extract":var o;/* If the color is already in its hookable form (e.g. "255 255 255 1") due to having been previously extracted, skip extraction. */
if(k.RegEx.wrappedValueAlreadyExtracted.test(i))o=i;else{var a,u={black:"rgb(0, 0, 0)",blue:"rgb(0, 0, 255)",gray:"rgb(128, 128, 128)",green:"rgb(0, 128, 0)",red:"rgb(255, 0, 0)",white:"rgb(255, 255, 255)"};/* Convert color names to rgb. */
/^[A-z]+$/i.test(i)?a=u[i]!==r?u[i]:u.black:k.RegEx.isHex.test(i)?a="rgb("+k.Values.hexToRgb(i).join(" ")+")":/^rgba?\(/i.test(i)||(a=u.black),/* Remove the surrounding "rgb/rgba()" string then replace commas with spaces and strip
											 repeated spaces (in case the value included spaces to begin with). */
o=(a||i).toString().match(k.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g," ")}/* So long as this isn't <=IE8, add a fourth (alpha) component if it's missing and default it to 1 (visible). */
return(!g||g>8)&&3===o.split(" ").length&&(o+=" 1"),o;case"inject":/* If we have a pattern then it might already have the right values */
/* If we have a pattern then it might already have the right values */
/* If this is IE<=8 and an alpha component exists, strip it off. */
return/^rgb/.test(i)?i:(g<=8?4===i.split(" ").length&&(i=i.split(/\s+/).slice(0,3).join(" ")):3===i.split(" ").length&&(i+=" 1"),(g<=8?"rgb":"rgba")+"("+i.replace(/\s+/g,",").replace(/\.(\d)+(?=,)/g,"")+")")}}}();k.Normalizations.registered.innerWidth=t("width",!0),k.Normalizations.registered.innerHeight=t("height",!0),k.Normalizations.registered.outerWidth=t("width"),k.Normalizations.registered.outerHeight=t("height")}},/************************
			 CSS Property Names
			 ************************/
Names:{/* Camelcase a property name into its JavaScript notation (e.g. "background-color" ==> "backgroundColor").
				 Camelcasing is used to normalize property names between and across calls. */
camelCase:function(e){return e.replace(/-(\w)/g,function(e,t){return t.toUpperCase()})},/* For SVG elements, some properties (namely, dimensional ones) are GET/SET via the element's HTML attributes (instead of via CSS styles). */
SVGAttribute:function(e){var t="width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";/* Certain browsers require an SVG transform to be applied as an attribute. (Otherwise, application via CSS is preferable due to 3D support.) */
return(g||T.State.isAndroid&&!T.State.isChrome)&&(t+="|transform"),new RegExp("^("+t+")$","i").test(e)},/* Determine whether a property should be set with a vendor prefix. */
/* If a prefixed version of the property exists, return it. Otherwise, return the original property name.
				 If the property is not at all supported by the browser, return a false flag. */
prefixCheck:function(e){/* If this property has already been checked, return the cached value. */
if(T.State.prefixMatches[e])return[T.State.prefixMatches[e],!0];for(var t=["","Webkit","Moz","ms","O"],n=0,r=t.length;n<r;n++){var i;/* Check if the browser supports this property as prefixed. */
if(i=0===n?e:t[n]+e.replace(/^\w/,function(e){return e.toUpperCase()}),b.isString(T.State.prefixElement.style[i]))/* Cache the match. */
return T.State.prefixMatches[e]=i,[i,!0]}/* If the browser doesn't support this property in any form, include a false flag so that the caller can decide how to proceed. */
return[e,!1]}},/************************
			 CSS Property Values
			 ************************/
Values:{/* Hex to RGB conversion. Copyright Tim Down: http://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb */
hexToRgb:function(e){var t,n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;return e=e.replace(n,function(e,t,n,r){return t+t+n+n+r+r}),t=r.exec(e),t?[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16)]:[0,0,0]},isCSSNullValue:function(e){/* The browser defaults CSS values that have not been set to either 0 or one of several possible null-value strings.
					 Thus, we check for both falsiness and these special strings. */
/* Null-value checking is performed to default the special strings to 0 (for the sake of tweening) or their hook
					 templates as defined as CSS.Hooks (for the sake of hook injection/extraction). */
/* Note: Chrome returns "rgba(0, 0, 0, 0)" for an undefined color whereas IE returns "transparent". */
return!e||/^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)},/* Retrieve a property's default unit type. Used for assigning a unit type when one is not supplied by the user. */
getUnitType:function(e){return/^(rotate|skew)/i.test(e)?"deg":/(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e)?"":"px"},/* HTML elements default to an associated display type when they're not set to display:none. */
/* Note: This function is used for correctly setting the non-"none" display value in certain Velocity redirects, such as fadeIn/Out. */
getDisplayType:function(e){var t=e&&e.tagName.toString().toLowerCase();return/^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t)?"inline":/^(li)$/i.test(t)?"list-item":/^(tr)$/i.test(t)?"table-row":/^(table)$/i.test(t)?"table":/^(tbody)$/i.test(t)?"table-row-group":"block"},/* The class add/remove functions are used to temporarily apply a "velocity-animating" class to elements while they're animating. */
addClass:function(e,t){if(e)if(e.classList)e.classList.add(t);else if(b.isString(e.className))
// Element.className is around 15% faster then set/getAttribute
e.className+=(e.className.length?" ":"")+t;else{
// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
var n=e.getAttribute(g<=7?"className":"class")||"";e.setAttribute("class",n+(n?" ":"")+t)}},removeClass:function(e,t){if(e)if(e.classList)e.classList.remove(t);else if(b.isString(e.className))
// Element.className is around 15% faster then set/getAttribute
// TODO: Need some jsperf tests on performance - can we get rid of the regex and maybe use split / array manipulation?
e.className=e.className.toString().replace(new RegExp("(^|\\s)"+t.split(" ").join("|")+"(\\s|$)","gi")," ");else{
// Work around for IE strict mode animating SVG - and anything else that doesn't behave correctly - the same way jQuery does it
var n=e.getAttribute(g<=7?"className":"class")||"";e.setAttribute("class",n.replace(new RegExp("(^|s)"+t.split(" ").join("|")+"(s|$)","gi")," "))}}},/****************************
			 Style Getting & Setting
			 ****************************/
/* The singular getPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
getPropertyValue:function(e,n,i,o){/* Get an element's computed property value. */
/* Note: Retrieving the value of a CSS property cannot simply be performed by checking an element's
				 style attribute (which only reflects user-defined values). Instead, the browser must be queried for a property's
				 *computed* value. You can read more about getComputedStyle here: https://developer.mozilla.org/en/docs/Web/API/window.getComputedStyle */
function u(e,n){/* When box-sizing isn't set to border-box, height and width style values are incorrectly computed when an
					 element's scrollbars are visible (which expands the element's dimensions). Thus, we defer to the more accurate
					 offsetHeight/Width property, which includes the total dimensions for interior, border, padding, and scrollbar.
					 We subtract border and padding to get the sum of interior + scrollbar. */
var i=0;/* IE<=8 doesn't support window.getComputedStyle, thus we defer to jQuery, which has an extensive array
					 of hacks to accurately retrieve IE8 property values. Re-implementing that logic here is not worth bloating the
					 codebase for a dying browser. The performance repercussions of using jQuery here are minimal since
					 Velocity is optimized to rarely (and sometimes never) query the DOM. Further, the $.css() codepath isn't that slow. */
if(g<=8)i=h.css(e,n);else{/* Browsers do not return height and width values for elements that are set to display:"none". Thus, we temporarily
						 toggle display to the element type's default value. */
var s=!1;/^(width|height)$/.test(n)&&0===k.getPropertyValue(e,"display")&&(s=!0,k.setPropertyValue(e,"display",k.Values.getDisplayType(e)));var l=function(){s&&k.setPropertyValue(e,"display","none")};if(!o){if("height"===n&&"border-box"!==k.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var c=e.offsetHeight-(parseFloat(k.getPropertyValue(e,"borderTopWidth"))||0)-(parseFloat(k.getPropertyValue(e,"borderBottomWidth"))||0)-(parseFloat(k.getPropertyValue(e,"paddingTop"))||0)-(parseFloat(k.getPropertyValue(e,"paddingBottom"))||0);return l(),c}if("width"===n&&"border-box"!==k.getPropertyValue(e,"boxSizing").toString().toLowerCase()){var f=e.offsetWidth-(parseFloat(k.getPropertyValue(e,"borderLeftWidth"))||0)-(parseFloat(k.getPropertyValue(e,"borderRightWidth"))||0)-(parseFloat(k.getPropertyValue(e,"paddingLeft"))||0)-(parseFloat(k.getPropertyValue(e,"paddingRight"))||0);return l(),f}}var p;/* For elements that Velocity hasn't been called on directly (e.g. when Velocity queries the DOM on behalf
						 of a parent of an element its animating), perform a direct getComputedStyle lookup since the object isn't cached. */
p=a(e)===r?t.getComputedStyle(e,null):a(e).computedStyle?a(e).computedStyle:a(e).computedStyle=t.getComputedStyle(e,null),/* IE and Firefox do not return a value for the generic borderColor -- they only return individual values for each border side's color.
						 Also, in all browsers, when border colors aren't all the same, a compound value is returned that Velocity isn't setup to parse.
						 So, as a polyfill for querying individual border side colors, we just return the top border's color and animate all borders from that value. */
"borderColor"===n&&(n="borderTopColor"),/* IE9 has a bug in which the "filter" property must be accessed from computedStyle using the getPropertyValue method
						 instead of a direct property lookup. The getPropertyValue method is slower than a direct lookup, which is why we avoid it by default. */
i=9===g&&"filter"===n?p.getPropertyValue(n):p[n],/* Fall back to the property's style value (if defined) when computedValue returns nothing,
						 which can happen when the element hasn't been painted. */
""!==i&&null!==i||(i=e.style[n]),l()}/* For top, right, bottom, and left (TRBL) values that are set to "auto" on elements of "fixed" or "absolute" position,
					 defer to jQuery for converting "auto" to a numeric value. (For elements with a "static" or "relative" position, "auto" has the same
					 effect as being set to 0, so no conversion is necessary.) */
/* An example of why numeric conversion is necessary: When an element with "position:absolute" has an untouched "left"
					 property, which reverts to "auto", left's value is 0 relative to its parent element, but is often non-zero relative
					 to its *containing* (not parent) element, which is the nearest "position:relative" ancestor or the viewport (and always the viewport in the case of "position:fixed"). */
if("auto"===i&&/^(top|right|bottom|left)$/i.test(n)){var d=u(e,"position");/* GET */
/* For absolute positioning, jQuery's $.position() only returns values for top and left;
						 right and bottom will have their "auto" value reverted to 0. */
/* Note: A jQuery object must be created here since jQuery doesn't have a low-level alias for $.position().
						 Not a big deal since we're currently in a GET batch anyway. */
("fixed"===d||"absolute"===d&&/top|left/i.test(n))&&(/* Note: jQuery strips the pixel unit from its returned values; we re-add it here to conform with computePropertyValue's behavior. */
i=h(e).position()[n]+"px")}return i}var s;/* If this is a hooked property (e.g. "clipLeft" instead of the root property of "clip"),
				 extract the hook's value from a normalized rootPropertyValue using CSS.Hooks.extractValue(). */
if(k.Hooks.registered[n]){var l=n,c=k.Hooks.getRoot(l);/* If a cached rootPropertyValue wasn't passed in (which Velocity always attempts to do in order to avoid requerying the DOM),
					 query the DOM for the root property's value. */
i===r&&(/* Since the browser is now being directly queried, use the official post-prefixing property name for this lookup. */
i=k.getPropertyValue(e,k.Names.prefixCheck(c)[0])),/* If this root has a normalization registered, peform the associated normalization extraction. */
k.Normalizations.registered[c]&&(i=k.Normalizations.registered[c]("extract",e,i)),/* Extract the hook's value. */
s=k.Hooks.extractValue(l,i)}else if(k.Normalizations.registered[n]){var f,p;f=k.Normalizations.registered[n]("name",e),/* Transform values are calculated via normalization extraction (see below), which checks against the element's transformCache.
					 At no point do transform GETs ever actually query the DOM; initial stylesheet values are never processed.
					 This is because parsing 3D transform matrices is not always accurate and would bloat our codebase;
					 thus, normalization extraction defaults initial transform values to their zero-values (e.g. 1 for scaleX and 0 for translateX). */
"transform"!==f&&(p=u(e,k.Names.prefixCheck(f)[0]),/* GET */
/* If the value is a CSS null-value and this property has a hook template, use that zero-value template so that hooks can be extracted from it. */
k.Values.isCSSNullValue(p)&&k.Hooks.templates[n]&&(p=k.Hooks.templates[n][1])),s=k.Normalizations.registered[n]("extract",e,p)}/* If a (numeric) value wasn't produced via hook extraction or normalization, query the DOM. */
if(!/^[\d-]/.test(s)){/* For SVG elements, dimensional properties (which SVGAttribute() detects) are tweened via
					 their HTML attribute values instead of their CSS style values. */
var d=a(e);if(d&&d.isSVG&&k.Names.SVGAttribute(n))/* Since the height/width attribute values must be set manually, they don't reflect computed values.
						 Thus, we use use getBBox() to ensure we always get values for elements with undefined height/width attributes. */
if(/^(height|width)$/i.test(n))/* Firefox throws an error if .getBBox() is called on an SVG that isn't attached to the DOM. */
try{s=e.getBBox()[n]}catch(e){s=0}else s=e.getAttribute(n);else s=u(e,k.Names.prefixCheck(n)[0])}/* Since property lookups are for animation purposes (which entails computing the numeric delta between start and end values),
				 convert CSS null-values to an integer of value 0. */
return k.Values.isCSSNullValue(s)&&(s=0),T.debug>=2&&console.log("Get "+n+": "+s),s},/* The singular setPropertyValue, which routes the logic for all normalizations, hooks, and standard CSS properties. */
setPropertyValue:function(e,n,r,i,o){var u=n;/* In order to be subjected to call options and element queueing, scroll animation is routed through Velocity as if it were a standard CSS property. */
if("scroll"===n)/* If a container option is present, scroll the container instead of the browser window. */
o.container?o.container["scroll"+o.direction]=r:"Left"===o.direction?t.scrollTo(r,o.alternateValue):t.scrollTo(o.alternateValue,r);else/* Transforms (translateX, rotateZ, etc.) are applied to a per-element transformCache object, which is manually flushed via flushTransformCache().
					 Thus, for now, we merely cache transforms being SET. */
if(k.Normalizations.registered[n]&&"transform"===k.Normalizations.registered[n]("name",e))/* Perform a normalization injection. */
/* Note: The normalization logic handles the transformCache updating. */
k.Normalizations.registered[n]("inject",e,r),u="transform",r=a(e).transformCache[n];else{/* Inject hooks. */
if(k.Hooks.registered[n]){var s=n,l=k.Hooks.getRoot(n);/* If a cached rootPropertyValue was not provided, query the DOM for the hookRoot's current value. */
i=i||k.getPropertyValue(e,l),/* GET */
r=k.Hooks.injectValue(s,r,i),n=l}/* A try/catch is used for IE<=8, which throws an error when "invalid" CSS values are set, e.g. a negative width.
						 Try/catch is avoided for other browsers since it incurs a performance overhead. */
if(/* Normalize names and values. */
k.Normalizations.registered[n]&&(r=k.Normalizations.registered[n]("inject",e,r),n=k.Normalizations.registered[n]("name",e)),/* Assign the appropriate vendor prefix before performing an official style update. */
u=k.Names.prefixCheck(n)[0],g<=8)try{e.style[u]=r}catch(e){T.debug&&console.log("Browser does not support ["+r+"] for ["+u+"]")}else{var c=a(e);c&&c.isSVG&&k.Names.SVGAttribute(n)?/* Note: For SVG attributes, vendor-prefixed property names are never used. */
/* Note: Not all CSS properties can be animated via attributes, but the browser won't throw an error for unsupported properties. */
e.setAttribute(n,r):e.style[u]=r}T.debug>=2&&console.log("Set "+n+" ("+u+"): "+r)}/* Return the normalized property name and value in case the caller wants to know how these values were modified before being applied to the DOM. */
return[u,r]},/* To increase performance by batching transform updates into a single SET, transforms are not directly applied to an element until flushTransformCache() is called. */
/* Note: Velocity applies transform properties in the same order that they are chronogically introduced to the element's CSS styles. */
flushTransformCache:function(e){var t="",n=a(e);/* Certain browsers require that SVG transforms be applied as an attribute. However, the SVG transform attribute takes a modified version of CSS's transform string
				 (units are dropped and, except for skewX/Y, subproperties are merged into their master property -- e.g. scaleX and scaleY are merged into scale(X Y). */
if((g||T.State.isAndroid&&!T.State.isChrome)&&n&&n.isSVG){/* Since transform values are stored in their parentheses-wrapped form, we use a helper function to strip out their numeric values.
					 Further, SVG transform properties only take unitless (representing pixels) values, so it's okay that parseFloat() strips the unit suffixed to the float value. */
var r=function(t){return parseFloat(k.getPropertyValue(e,t))},i={translate:[r("translateX"),r("translateY")],skewX:[r("skewX")],skewY:[r("skewY")],/* If the scale property is set (non-1), use that value for the scaleX and scaleY values
						 (this behavior mimics the result of animating all these properties at once on HTML elements). */
scale:1!==r("scale")?[r("scale"),r("scale")]:[r("scaleX"),r("scaleY")],/* Note: SVG's rotate transform takes three values: rotation degrees followed by the X and Y values
						 defining the rotation's origin point. We ignore the origin values (default them to 0). */
rotate:[r("rotateZ"),0,0]};/* Iterate through the transform properties in the user-defined property map order.
					 (This mimics the behavior of non-SVG transform animation.) */
h.each(a(e).transformCache,function(e){/* Except for with skewX/Y, revert the axis-specific transform subproperties to their axis-free master
						 properties so that they match up with SVG's accepted transform properties. */
/^translate/i.test(e)?e="translate":/^scale/i.test(e)?e="scale":/^rotate/i.test(e)&&(e="rotate"),/* Check that we haven't yet deleted the property from the SVGTransforms container. */
i[e]&&(/* Append the transform property in the SVG-supported transform format. As per the spec, surround the space-delimited values in parentheses. */
t+=e+"("+i[e].join(" ")+") ",/* After processing an SVG transform property, delete it from the SVGTransforms container so we don't
							 re-insert the same master property if we encounter another one of its axis-specific properties. */
delete i[e])})}else{var o,u;/* Transform properties are stored as members of the transformCache object. Concatenate all the members into a string. */
h.each(a(e).transformCache,function(n){/* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
/* Transform's perspective subproperty must be set first in order to take effect. Store it temporarily. */
/* IE9 only supports one rotation type, rotateZ, which it refers to as "rotate". */
return o=a(e).transformCache[n],"transformPerspective"===n?(u=o,!0):(9===g&&"rotateZ"===n&&(n="rotate"),void(t+=n+o+" "))}),/* If present, set the perspective subproperty first. */
u&&(t="perspective"+u+" "+t)}k.setPropertyValue(e,"transform",t)}};/* Register hooks and normalizations. */
k.Hooks.register(),k.Normalizations.register(),/* Allow hook setting in the same fashion as jQuery's $.css(). */
T.hook=function(e,t,n){var i;return e=o(e),h.each(e,function(e,o){/* Get property value. If an element set was passed in, only return the value for the first element. */
if(/* Initialize Velocity's per-element data cache if this element hasn't previously been animated. */
a(o)===r&&T.init(o),n===r)i===r&&(i=k.getPropertyValue(o,t));else{/* sPV returns an array of the normalized propertyName/propertyValue pair used to update the DOM. */
var u=k.setPropertyValue(o,t,n);/* Transform properties don't automatically set. They have to be flushed to the DOM. */
"transform"===u[0]&&T.CSS.flushTransformCache(o),i=u}}),i};/*****************
		 Animation
		 *****************/
var C=function(){/******************
			 Call Chain
			 ******************/
/* Logic for determining what to return to the call stack when exiting out of Velocity. */
function e(){/* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
				 default to null instead of returning the targeted elements so that utility function's return value is standardized. */
/* If we are using the utility function, attempt to return this call's promise. If no promise library was detected,
				 default to null instead of returning the targeted elements so that utility function's return value is standardized. */
return c?S.promise||null:g}/************************
			 Element Processing
			 ************************/
/* Element processing consists of three parts -- data processing that cannot go stale and data processing that *can* go stale (i.e. third-party style modifications):
			 1) Pre-Queueing: Element-wide variables, including the element's data storage, are instantiated. Call options are prepared. If triggered, the Stop action is executed.
			 2) Queueing: The logic that runs once this call has reached its point of execution in the element's $.queue() stack. Most logic is placed here to avoid risking it becoming stale.
			 3) Pushing: Consolidation of the tween data followed by its push onto the global in-progress calls container.
			 `elementArrayIndex` allows passing index of the element in the original array to value functions.
			 If `elementsIndex` were used instead the index would be determined by the elements' per-element queue.
			 */
function i(e,i){/***********************
				 Part II: Queueing
				 ***********************/
/* When a set of elements is targeted by a Velocity call, the set is broken up and each element has the current Velocity call individually queued onto it.
				 In this way, each element's existing queue is respected; some elements may already be animating and accordingly should not have this current Velocity call triggered immediately. */
/* In each queue, tween data is processed for each animating property then pushed onto the call-wide calls array. When the last element in the set has had its tweens processed,
				 the call array is pushed to Velocity.State.calls for live processing by the requestAnimationFrame tick. */
function o(o){var c,d;/*******************
					 Option: Begin
					 *******************/
/* The begin callback is fired once per call -- not once per elemenet -- and is passed the full raw DOM element set as both its context and its first argument. */
if(s.begin&&0===A)/* We throw callbacks in a setTimeout so that thrown errors don't halt the execution of Velocity itself. */
try{s.begin.call(y,y)}catch(e){setTimeout(function(){throw e},1)}/*****************************************
					 Tween Data Construction (for Scroll)
					 *****************************************/
/* Note: In order to be subjected to chaining and animation options, scroll's tweening is routed through Velocity as if it were a standard CSS property animation. */
if("scroll"===N){/* The scroll action uniquely takes an optional "offset" option -- specified in pixels -- that offsets the targeted scroll position. */
var g,v,w,_=/^x$/i.test(s.axis)?"Left":"Top",C=parseFloat(s.offset)||0;/* Scroll also uniquely takes an optional "container" option, which indicates the parent element that should be scrolled --
						 as opposed to the browser window itself. This is useful for scrolling toward an element that's inside an overflowing parent element. */
s.container?/* Ensure that either a jQuery object or a raw DOM element was passed in. */
b.isWrapped(s.container)||b.isNode(s.container)?(/* Extract the raw DOM element from the jQuery wrapper. */
s.container=s.container[0]||s.container,/* Note: Unlike other properties in Velocity, the browser's scroll position is never cached since it so frequently changes
								 (due to the user's natural interaction with the page). */
g=s.container["scroll"+_],/* GET */
/* $.position() values are relative to the container's currently viewable area (without taking into account the container's true dimensions
								 -- say, for example, if the container was not overflowing). Thus, the scroll end value is the sum of the child element's position *and*
								 the scroll container's current scroll position. */
w=g+h(e).position()[_.toLowerCase()]+C):s.container=null:(/* If the window itself is being scrolled -- not a containing element -- perform a live scroll position lookup using
							 the appropriate cached property names (which differ based on browser type). */
g=T.State.scrollAnchor[T.State["scrollProperty"+_]],/* GET */
/* When scrolling the browser window, cache the alternate axis's current value since window.scrollTo() doesn't let us change only one value at a time. */
v=T.State.scrollAnchor[T.State["scrollProperty"+("Left"===_?"Top":"Left")]],/* GET */
/* Unlike $.position(), $.offset() values are relative to the browser window's true dimensions -- not merely its currently viewable area --
							 and therefore end values do not need to be compounded onto current values. */
w=h(e).offset()[_.toLowerCase()]+C),/* Since there's only one format that scroll's associated tweensContainer can take, we create it manually. */
l={scroll:{rootPropertyValue:!1,startValue:g,currentValue:g,endValue:w,unitType:"",easing:s.easing,scrollData:{container:s.container,direction:_,alternateValue:v}},element:e},T.debug&&console.log("tweensContainer (scroll): ",l.scroll,e)}else if("reverse"===N){/* Abort if there is no prior animation data to reverse to. */
if(c=a(e),!c)return;if(!c.tweensContainer)/* Dequeue the element so that this queue entry releases itself immediately, allowing subsequent queue entries to run. */
return void h.dequeue(e,s.queue);/*********************
							 Options Parsing
							 *********************/
/* If the element was hidden via the display option in the previous call,
							 revert display to "auto" prior to reversal so that the element is visible again. */
"none"===c.opts.display&&(c.opts.display="auto"),"hidden"===c.opts.visibility&&(c.opts.visibility="visible"),/* If the loop option was set in the previous call, disable it so that "reverse" calls aren't recursively generated.
							 Further, remove the previous call's callback options; typically, users do not want these to be refired. */
c.opts.loop=!1,c.opts.begin=null,c.opts.complete=null,/* Since we're extending an opts object that has already been extended with the defaults options object,
							 we remove non-explicitly-defined properties that are auto-assigned values. */
x.easing||delete s.easing,x.duration||delete s.duration,/* The opts object used for reversal is an extension of the options object optionally passed into this
							 reverse call plus the options used in the previous Velocity call. */
s=h.extend({},c.opts,s),/*************************************
							 Tweens Container Reconstruction
							 *************************************/
/* Create a deepy copy (indicated via the true flag) of the previous call's tweensContainer. */
d=h.extend(!0,{},c?c.tweensContainer:null);/* Manipulate the previous tweensContainer by replacing its end values and currentValues with its start values. */
for(var E in d)/* In addition to tween data, tweensContainers contain an element property that we ignore here. */
if(d.hasOwnProperty(E)&&"element"!==E){var P=d[E].startValue;d[E].startValue=d[E].currentValue=d[E].endValue,d[E].endValue=P,/* Easing is the only option that embeds into the individual tween data (since it can be defined on a per-property basis).
									 Accordingly, every property's easing value must be updated when an options object is passed in with a reverse call.
									 The side effect of this extensibility is that all per-property easing values are forcefully reset to the new value. */
b.isEmptyObject(x)||(d[E].easing=s.easing),T.debug&&console.log("reverse tweensContainer ("+E+"): "+JSON.stringify(d[E]),e)}l=d}else if("start"===N){/*************************
						 Value Transferring
						 *************************/
/* If this queue entry follows a previous Velocity-initiated queue entry *and* if this entry was created
						 while the element was in the process of being animated by Velocity, then this current call is safe to use
						 the end values from the prior call as its start values. Velocity attempts to perform this value transfer
						 process whenever possible in order to avoid requerying the DOM. */
/* If values aren't transferred from a prior call and start values were not forcefed by the user (more on this below),
						 then the DOM is queried for the element's current values as a last resort. */
/* Note: Conversely, animation reversal (and looping) *always* perform inter-call value transfers; they never requery the DOM. */
c=a(e),/* The per-element isAnimating flag is used to indicate whether it's safe (i.e. the data isn't stale)
						 to transfer over end values to use as start values. If it's set to true and there is a previous
						 Velocity call to pull values from, do so. */
c&&c.tweensContainer&&c.isAnimating===!0&&(d=c.tweensContainer);/***************************
						 Tween Data Calculation
						 ***************************/
/* This function parses property data and defaults endValue, easing, and startValue as appropriate. */
/* Property map values can either take the form of 1) a single value representing the end value,
						 or 2) an array in the form of [ endValue, [, easing] [, startValue] ].
						 The optional third parameter is a forcefed startValue to be used instead of querying the DOM for
						 the element's current value. Read Velocity's docmentation to learn more about forcefeeding: VelocityJS.org/#forcefeeding */
var O=function(t,n){var r,o,a;/* Allow startValue to be left as undefined to indicate to the ensuing code that its value was not forcefed. */
/* If we have a function as the main argument then resolve it first, in case it returns an array that needs to be split */
/* Handle the array format, which can be structured as one of three potential overloads:
							 A) [ endValue, easing, startValue ], B) [ endValue, easing ], or C) [ endValue, startValue ] */
/* endValue is always the first item in the array. Don't bother validating endValue's value now
								 since the ensuing property cycling logic does that. */
/* Two-item array format: If the second item is a number, function, or hex string, treat it as a
								 start value since easings can only be non-hex strings or arrays. */
/* Don't bother validating startValue's value now since the ensuing property cycling logic inherently does that. */
/* Default to the call's easing if a per-property easing type was not defined. */
/* If functions were passed in as values, pass the function the current element as its context,
							 plus the element's index and the element set's size as arguments. Then, assign the returned value. */
return b.isFunction(t)&&(t=t.call(e,i,j)),b.isArray(t)?(r=t[0],!b.isArray(t[1])&&/^[\d-]/.test(t[1])||b.isFunction(t[1])||k.RegEx.isHex.test(t[1])?a=t[1]:b.isString(t[1])&&!k.RegEx.isHex.test(t[1])&&T.Easings[t[1]]||b.isArray(t[1])?(o=n?t[1]:f(t[1],s.duration),a=t[2]):a=t[1]||t[2]):r=t,n||(o=o||s.easing),b.isFunction(r)&&(r=r.call(e,i,j)),b.isFunction(a)&&(a=a.call(e,i,j)),[r||0,o,a]},L=function(i,o){/* In case this property is a hook, there are circumstances where we will intend to work on the hook's root property and not the hooked subproperty. */
var a,f=k.Hooks.getRoot(i),p=!1,/* Parse out endValue, easing, and startValue from the property's data. */
g=o[0],v=o[1],y=o[2];/**************************
							 Start Value Sourcing
							 **************************/
/* Other than for the dummy tween property, properties that are not supported by the browser (and do not have an associated normalization) will
							 inherently produce no style changes when set, so they are skipped in order to decrease animation tick overhead.
							 Property support is determined via prefixCheck(), which returns a false flag when no supported is detected. */
/* Note: Since SVG elements have some of their properties directly applied as HTML attributes,
							 there is no way to check for their explicit browser support, and so we skip skip this check for them. */
if(!(c&&c.isSVG||"tween"===f||k.Names.prefixCheck(f)[1]!==!1||k.Normalizations.registered[f]!==r))return void(T.debug&&console.log("Skipping ["+f+"] due to a lack of browser support."));/* If the display option is being set to a non-"none" (e.g. "block") and opacity (filter on IE<=8) is being
							 animated to an endValue of non-zero, the user's intention is to fade in from invisible, thus we forcefeed opacity
							 a startValue of 0 if its startValue hasn't already been sourced by value transferring or prior forcefeeding. */
(s.display!==r&&null!==s.display&&"none"!==s.display||s.visibility!==r&&"hidden"!==s.visibility)&&/opacity|filter/.test(i)&&!y&&0!==g&&(y=0),/* If values have been transferred from the previous Velocity call, extract the endValue and rootPropertyValue
							 for all of the current call's properties that were *also* animated in the previous call. */
/* Note: Value transferring can optionally be disabled by the user via the _cacheValues option. */
s._cacheValues&&d&&d[i]?(y===r&&(y=d[i].endValue+d[i].unitType),/* The previous call's rootPropertyValue is extracted from the element's data cache since that's the
								 instance of rootPropertyValue that gets freshly updated by the tweening process, whereas the rootPropertyValue
								 attached to the incoming lastTweensContainer is equal to the root property's value prior to any tweening. */
p=c.rootPropertyValueCache[f]):/* Handle hooked properties. */
k.Hooks.registered[i]?y===r?(p=k.getPropertyValue(e,f),/* GET */
/* Note: The following getPropertyValue() call does not actually trigger a DOM query;
										 getPropertyValue() will extract the hook from rootPropertyValue. */
y=k.getPropertyValue(e,i,p)):/* Grab this hook's zero-value template, e.g. "0px 0px 0px black". */
p=k.Hooks.templates[f][1]:y===r&&(y=k.getPropertyValue(e,i));/**************************
							 Value Data Extraction
							 **************************/
var m,x,w,_=!1,S=function(e,t){var n,r;/* If no unit type was supplied, assign one that is appropriate for this property (e.g. "deg" for rotateZ or "px" for width). */
return r=(t||"0").toString().toLowerCase().replace(/[%A-z]+$/,function(e){/* Strip the unit type off of value. */
/* Grab the unit type. */
return n=e,""}),n||(n=k.Values.getUnitType(e)),[r,n]};if(y!==g&&b.isString(y)&&b.isString(g)){a="";var C=0,// index in startValue
j=0,// index in endValue
A=[],// array of startValue numbers
E=[],// array of endValue numbers
P=0,// Keep track of being inside a "calc()" so we don't duplicate it
N=0,// Keep track of being inside an RGB as we can't use fractional values
O=0;for(// Keep track of being inside an RGBA as we must pass fractional for the alpha channel
y=k.Hooks.fixColors(y),g=k.Hooks.fixColors(g);C<y.length&&j<g.length;){var L=y[C],D=g[j];if(/[\d\.]/.test(L)&&/[\d\.]/.test(D)){// Make sure we can only ever match a single dot in a decimal
for(var F=L,// temporary character buffer
q=D,// temporary character buffer
V=".",// Make sure we can only ever match a single dot in a decimal
H=".";++C<y.length;){if(L=y[C],L===V)V="..";else if(!/\d/.test(L))break;F+=L}for(;++j<g.length;){if(D=g[j],D===H)H="..";else if(!/\d/.test(D))break;q+=D}var I=k.Hooks.getUnit(y,C),// temporary unit type
z=k.Hooks.getUnit(g,j);if(// temporary unit type
C+=I.length,j+=z.length,I===z)
// Same units
F===q?
// Same numbers, so just copy over
a+=F+I:(
// Different numbers, so store them
a+="{"+A.length+(N?"!":"")+"}"+I,A.push(parseFloat(F)),E.push(parseFloat(q)));else{
// Different units, so put into a "calc(from + to)" and animate each side to/from zero
var W=parseFloat(F),M=parseFloat(q);a+=(P<5?"calc":"")+"("+(W?"{"+A.length+(N?"!":"")+"}":"0")+I+" + "+(M?"{"+(A.length+(W?1:0))+(N?"!":"")+"}":"0")+z+")",W&&(A.push(W),E.push(0)),M&&(A.push(0),E.push(M))}}else{if(L!==D){P=0;
// TODO: changing units, fixing colours
break}a+=L,C++,j++,
// Keep track of being inside a calc()
0===P&&"c"===L||1===P&&"a"===L||2===P&&"l"===L||3===P&&"c"===L||P>=4&&"("===L?P++:(P&&P<5||P>=4&&")"===L&&--P<5)&&(P=0),
// Keep track of being inside an rgb() / rgba()
0===N&&"r"===L||1===N&&"g"===L||2===N&&"b"===L||3===N&&"a"===L||N>=3&&"("===L?(3===N&&"a"===L&&(O=1),N++):O&&","===L?++O>3&&(N=O=0):(O&&N<(O?5:4)||N>=(O?4:3)&&")"===L&&--N<(O?5:4))&&(N=O=0)}}C===y.length&&j===g.length||(T.debug&&console.error('Trying to pattern match mis-matched strings ["'+g+'", "'+y+'"]'),a=r),a&&(A.length?(T.debug&&console.log('Pattern found "'+a+'" -> ',A,E,"["+y+","+g+"]"),y=A,g=E,x=w=""):a=r)}a||(/* Separate startValue. */
m=S(i,y),y=m[0],w=m[1],/* Separate endValue, and extract a value operator (e.g. "+=", "-=") if one exists. */
m=S(i,g),g=m[0].replace(/^([+-\/*])=/,function(e,t){/* Strip the operator off of the value. */
return _=t,""}),x=m[1],/* Parse float values from endValue and startValue. Default to 0 if NaN is returned. */
y=parseFloat(y)||0,g=parseFloat(g)||0,/***************************************
								 Property-Specific Value Conversion
								 ***************************************/
/* Custom support for properties that don't actually accept the % unit type, but where pollyfilling is trivial and relatively foolproof. */
"%"===x&&(/* A %-value fontSize/lineHeight is relative to the parent's fontSize (as opposed to the parent's dimensions),
									 which is identical to the em unit's behavior, so we piggyback off of that. */
/^(fontSize|lineHeight)$/.test(i)?(/* Convert % into an em decimal value. */
g/=100,x="em"):/^scale/.test(i)?(g/=100,x=""):/(Red|Green|Blue)$/i.test(i)&&(g=g/100*255,x="")));/***************************
							 Unit Ratio Calculation
							 ***************************/
/* When queried, the browser returns (most) CSS property values in pixels. Therefore, if an endValue with a unit type of
							 %, em, or rem is animated toward, startValue must be converted from pixels into the same unit type as endValue in order
							 for value manipulation logic (increment/decrement) to proceed. Further, if the startValue was forcefed or transferred
							 from a previous call, startValue may also not be in pixels. Unit conversion logic therefore consists of two steps:
							 1) Calculating the ratio of %/em/rem/vh/vw relative to pixels
							 2) Converting startValue into the same unit of measurement as endValue based on these ratios. */
/* Unit conversion ratios are calculated by inserting a sibling node next to the target node, copying over its position property,
							 setting values with the target unit type then comparing the returned pixel value. */
/* Note: Even if only one of these unit types is being animated, all unit ratios are calculated at once since the overhead
							 of batching the SETs and GETs together upfront outweights the potential overhead
							 of layout thrashing caused by re-querying for uncalculated ratios for subsequently-processed properties. */
/* Todo: Shift this logic into the calls' first tick instance so that it's synced with RAF. */
var B=function(){/************************
								 Same Ratio Checks
								 ************************/
/* The properties below are used to determine whether the element differs sufficiently from this call's
								 previously iterated element to also differ in its unit conversion ratios. If the properties match up with those
								 of the prior element, the prior element's conversion ratios are used. Like most optimizations in Velocity,
								 this is done to minimize DOM querying. */
var r={myParent:e.parentNode||n.body,/* GET */
position:k.getPropertyValue(e,"position"),/* GET */
fontSize:k.getPropertyValue(e,"fontSize")},/* Determine if the same % ratio can be used. % is based on the element's position value and its parent's width and height dimensions. */
i=r.position===R.lastPosition&&r.myParent===R.lastParent,/* Determine if the same em ratio can be used. em is relative to the element's fontSize. */
o=r.fontSize===R.lastFontSize;/* Store these ratio indicators call-wide for the next element to compare against. */
R.lastParent=r.myParent,R.lastPosition=r.position,R.lastFontSize=r.fontSize;/***************************
								 Element-Specific Units
								 ***************************/
/* Note: IE8 rounds to the nearest pixel when returning CSS values, thus we perform conversions using a measurement
								 of 100 (instead of 1) to give our ratios a precision of at least 2 decimal values. */
var a=100,u={};if(o&&i)u.emToPx=R.lastEmToPx,u.percentToPxWidth=R.lastPercentToPxWidth,u.percentToPxHeight=R.lastPercentToPxHeight;else{var s=c&&c.isSVG?n.createElementNS("http://www.w3.org/2000/svg","rect"):n.createElement("div");T.init(s),r.myParent.appendChild(s),/* To accurately and consistently calculate conversion ratios, the element's cascaded overflow and box-sizing are stripped.
									 Similarly, since width/height can be artificially constrained by their min-/max- equivalents, these are controlled for as well. */
/* Note: Overflow must be also be controlled for per-axis since the overflow property overwrites its per-axis values. */
h.each(["overflow","overflowX","overflowY"],function(e,t){T.CSS.setPropertyValue(s,t,"hidden")}),T.CSS.setPropertyValue(s,"position",r.position),T.CSS.setPropertyValue(s,"fontSize",r.fontSize),T.CSS.setPropertyValue(s,"boxSizing","content-box"),/* width and height act as our proxy properties for measuring the horizontal and vertical % ratios. */
h.each(["minWidth","maxWidth","width","minHeight","maxHeight","height"],function(e,t){T.CSS.setPropertyValue(s,t,a+"%")}),/* paddingLeft arbitrarily acts as our proxy property for the em ratio. */
T.CSS.setPropertyValue(s,"paddingLeft",a+"em"),/* Divide the returned value by the measurement to get the ratio between 1% and 1px. Default to 1 since working with 0 can produce Infinite. */
u.percentToPxWidth=R.lastPercentToPxWidth=(parseFloat(k.getPropertyValue(s,"width",null,!0))||1)/a,/* GET */
u.percentToPxHeight=R.lastPercentToPxHeight=(parseFloat(k.getPropertyValue(s,"height",null,!0))||1)/a,/* GET */
u.emToPx=R.lastEmToPx=(parseFloat(k.getPropertyValue(s,"paddingLeft"))||1)/a,/* GET */
r.myParent.removeChild(s)}/***************************
								 Element-Agnostic Units
								 ***************************/
/* Whereas % and em ratios are determined on a per-element basis, the rem unit only needs to be checked
								 once per call since it's exclusively dependant upon document.body's fontSize. If this is the first time
								 that calculateUnitRatios() is being run during this call, remToPx will still be set to its default value of null,
								 so we calculate it now. */
/* Default to browsers' default fontSize of 16px in the case of 0. */
/* Similarly, viewport units are %-relative to the window's inner dimensions. */
/* GET */
return null===R.remToPx&&(R.remToPx=parseFloat(k.getPropertyValue(n.body,"fontSize"))||16),null===R.vwToPx&&(R.vwToPx=parseFloat(t.innerWidth)/100,R.vhToPx=parseFloat(t.innerHeight)/100),u.remToPx=R.remToPx,u.vwToPx=R.vwToPx,u.vhToPx=R.vhToPx,T.debug>=1&&console.log("Unit ratios: "+JSON.stringify(u),e),u};/********************
							 Unit Conversion
							 ********************/
/* The * and / operators, which are not passed in with an associated unit, inherently use startValue's unit. Skip value and unit conversion. */
if(/[\/*]/.test(_))x=w;else if(w!==x&&0!==y)/* Unit conversion is also skipped when endValue is 0, but *startValueUnitType* must be used for tween values to remain accurate. */
/* Note: Skipping unit conversion here means that if endValueUnitType was originally a relative unit, the animation won't relatively
								 match the underlying metrics if they change, but this is acceptable since we're animating toward invisibility instead of toward visibility,
								 which remains past the point of the animation's completion. */
if(0===g)x=w;else{/* By this point, we cannot avoid unit conversion (it's undesirable since it causes layout thrashing).
									 If we haven't already, we trigger calculateUnitRatios(), which runs once per element per call. */
u=u||B();/* The following RegEx matches CSS properties that have their % values measured relative to the x-axis. */
/* Note: W3C spec mandates that all of margin and padding's properties (even top and bottom) are %-relative to the *width* of the parent element. */
var $=/margin|padding|left|right|width|text|word|letter/i.test(i)||/X$/.test(i)||"x"===i?"x":"y";/* In order to avoid generating n^2 bespoke conversion functions, unit conversion is a two-step process:
									 1) Convert startValue into pixels. 2) Convert this new pixel value into endValue's unit type. */
switch(w){case"%":/* Note: translateX and translateY are the only properties that are %-relative to an element's own dimensions -- not its parent's dimensions.
											 Velocity does not include a special conversion process to account for this behavior. Therefore, animating translateX/Y from a % value
											 to a non-% value will produce an incorrect start value. Fortunately, this sort of cross-unit conversion is rarely done by users in practice. */
y*="x"===$?u.percentToPxWidth:u.percentToPxHeight;break;case"px":/* px acts as our midpoint in the unit conversion process; do nothing. */
break;default:y*=u[w+"ToPx"]}/* Invert the px ratios to convert into to the target unit. */
switch(x){case"%":y*=1/("x"===$?u.percentToPxWidth:u.percentToPxHeight);break;case"px":/* startValue is already in px, do nothing; we're done. */
break;default:y*=1/u[x+"ToPx"]}}/*********************
							 Relative Values
							 *********************/
/* Operator logic must be performed last since it requires unit-normalized start and end values. */
/* Note: Relative *percent values* do not behave how most people think; while one would expect "+=50%"
							 to increase the property 1.5x its current value, it in fact increases the percent units in absolute terms:
							 50 points is added on top of the current % value. */
switch(_){case"+":g=y+g;break;case"-":g=y-g;break;case"*":g*=y;break;case"/":g=y/g}/**************************
							 tweensContainer Push
							 **************************/
/* Construct the per-property tween object, and push it to the element's tweensContainer. */
l[i]={rootPropertyValue:p,startValue:y,currentValue:y,endValue:g,unitType:x,easing:v},a&&(l[i].pattern=a),T.debug&&console.log("tweensContainer ("+i+"): "+JSON.stringify(l[i]),e)};/* Create a tween out of each property, and append its associated data to tweensContainer. */
for(var D in m)if(m.hasOwnProperty(D)){/* The original property name's format must be used for the parsePropertyValue() lookup,
							 but we then use its camelCase styling to normalize it for manipulation. */
var F=k.Names.camelCase(D),q=O(m[D]);/* Find shorthand color properties that have been passed a hex string. */
/* Would be quicker to use CSS.Lists.colors.includes() if possible */
if(k.Lists.colors.indexOf(F)>=0){/* Parse the value data for each shorthand. */
var H=q[0],I=q[1],z=q[2];if(k.RegEx.isHex.test(H)){/* Inject the RGB component tweens into propertiesMap. */
for(var W=["Red","Green","Blue"],M=k.Values.hexToRgb(H),B=z?k.Values.hexToRgb(z):r,$=0;$<W.length;$++){var U=[M[$]];I&&U.push(I),B!==r&&U.push(B[$]),L(F+W[$],U)}/* If we have replaced a shortcut color value then don't update the standard property name */
continue}}L(F,q)}/* Along with its property data, store a reference to the element itself onto tweensContainer. */
l.element=e}/*****************
					 Call Push
					 *****************/
/* Note: tweensContainer can be empty if all of the properties in this call's property map were skipped due to not
					 being supported by the browser. The element property is used for checking that the tweensContainer has been appended to. */
l.element&&(/* Apply the "velocity-animating" indicator class. */
k.Values.addClass(e,"velocity-animating"),/* The call array houses the tweensContainers for each element being animated in the current call. */
V.push(l),c=a(e),c&&(/* Store the tweensContainer and options if we're working on the default effects queue, so that they can be used by the reverse command. */
""===s.queue&&(c.tweensContainer=l,c.opts=s),/* Switch on the element's animating flag. */
c.isAnimating=!0),/* Once the final element in this call's element set has been processed, push the call array onto
						 Velocity.State.calls for the animation tick to immediately begin processing. */
A===j-1?(/* Add the current call plus its associated metadata (the element set and the call's options) onto the global call container.
							 Anything on this call container is subjected to tick() processing. */
T.State.calls.push([V,y,s,null,S.resolver,null,0]),/* If the animation tick isn't running, start it. (Velocity shuts it off when there are no active calls to process.) */
T.State.isTicking===!1&&(T.State.isTicking=!0,/* Start the tick loop. */
p())):A++)}/*************************
				 Part I: Pre-Queueing
				 *************************/
/***************************
				 Element-Wide Variables
				 ***************************/
var u,/* The runtime opts object is the extension of the current call's options and Velocity's page-wide option defaults. */
s=h.extend({},T.defaults,x),/* A container for the processed data associated with each property in the propertyMap.
						 (Each property in the map produces its own "tween".) */
l={};/*********************
				 Option: Duration
				 *********************/
/* Support for jQuery's named durations. */
switch(/******************
				 Element Init
				 ******************/
a(e)===r&&T.init(e),/******************
				 Option: Delay
				 ******************/
/* Since queue:false doesn't respect the item's existing queue, we avoid injecting its delay here (it's set later on). */
/* Note: Velocity rolls its own delay function since jQuery doesn't have a utility alias for $.fn.delay()
				 (and thus requires jQuery element creation, which we avoid since its overhead includes DOM querying). */
parseFloat(s.delay)&&s.queue!==!1&&h.queue(e,s.queue,function(t){/* This is a flag used to indicate to the upcoming completeCall() function that this queue entry was initiated by Velocity. See completeCall() for further details. */
T.velocityQueueEntryFlag=!0;/* The ensuing queue item (which is assigned to the "next" argument that $.queue() automatically passes in) will be triggered after a setTimeout delay.
						 The setTimeout is stored so that it can be subjected to clearTimeout() if this animation is prematurely stopped via Velocity's "stop" command, and
						 delayBegin/delayTime is used to ensure we can "pause" and "resume" a tween that is still mid-delay. */
/* Temporarily store delayed elements to facilite access for global pause/resume */
var n=T.State.delayedElements.count++;T.State.delayedElements[n]=e;var r=function(e){return function(){/* Clear the temporary element */
T.State.delayedElements[e]=!1,/* Finally, issue the call */
t()}}(n);a(e).delayBegin=(new Date).getTime(),a(e).delay=parseFloat(s.delay),a(e).delayTimer={setTimeout:setTimeout(t,parseFloat(s.delay)),next:r}}),s.duration.toString().toLowerCase()){case"fast":s.duration=200;break;case"normal":s.duration=w;break;case"slow":s.duration=600;break;default:/* Remove the potential "ms" suffix and default to 1 if the user is attempting to set a duration of 0 (in order to produce an immediate style change). */
s.duration=parseFloat(s.duration)||1}/* When the queue option is set to false, the call skips the element's queue and fires immediately. */
if(/************************
				 Global Option: Mock
				 ************************/
T.mock!==!1&&(/* In mock mode, all animations are forced to 1ms so that they occur immediately upon the next rAF tick.
					 Alternatively, a multiplier can be passed in to time remap all delays and durations. */
T.mock===!0?s.duration=s.delay=1:(s.duration*=parseFloat(T.mock)||1,s.delay*=parseFloat(T.mock)||1)),/*******************
				 Option: Easing
				 *******************/
s.easing=f(s.easing,s.duration),/**********************
				 Option: Callbacks
				 **********************/
/* Callbacks must functions. Otherwise, default to null. */
s.begin&&!b.isFunction(s.begin)&&(s.begin=null),s.progress&&!b.isFunction(s.progress)&&(s.progress=null),s.complete&&!b.isFunction(s.complete)&&(s.complete=null),/*********************************
				 Option: Display & Visibility
				 *********************************/
/* Refer to Velocity's documentation (VelocityJS.org/#displayAndVisibility) for a description of the display and visibility options' behavior. */
/* Note: We strictly check for undefined instead of falsiness because display accepts an empty string value. */
s.display!==r&&null!==s.display&&(s.display=s.display.toString().toLowerCase(),/* Users can pass in a special "auto" value to instruct Velocity to set the element to its default display value. */
"auto"===s.display&&(s.display=T.CSS.Values.getDisplayType(e))),s.visibility!==r&&null!==s.visibility&&(s.visibility=s.visibility.toString().toLowerCase()),/**********************
				 Option: mobileHA
				 **********************/
/* When set to true, and if this is a mobile device, mobileHA automatically enables hardware acceleration (via a null transform hack)
				 on animating elements. HA is removed from the element at the completion of its animation. */
/* Note: Android Gingerbread doesn't support HA. If a null transform hack (mobileHA) is in fact set, it will prevent other tranform subproperties from taking effect. */
/* Note: You can read more about the use of mobileHA in Velocity's documentation: VelocityJS.org/#mobileHA. */
s.mobileHA=s.mobileHA&&T.State.isMobile&&!T.State.isGingerbread,s.queue===!1)/* Since this buildQueue call doesn't respect the element's existing queue (which is where a delay option would have been appended),
					 we manually inject the delay property here with an explicit setTimeout. */
if(s.delay){/* Temporarily store delayed elements to facilitate access for global pause/resume */
var c=T.State.delayedElements.count++;T.State.delayedElements[c]=e;var d=function(e){return function(){/* Clear the temporary element */
T.State.delayedElements[e]=!1,/* Finally, issue the call */
o()}}(c);a(e).delayBegin=(new Date).getTime(),a(e).delay=parseFloat(s.delay),a(e).delayTimer={setTimeout:setTimeout(o,parseFloat(s.delay)),next:d}}else o();else h.queue(e,s.queue,function(e,t){/* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
						 so it's fine if this is repeatedly triggered for each element in the associated call.) */
/* If the clearQueue flag was passed in by the stop command, resolve this call's promise. (Promises can only be resolved once,
						 so it's fine if this is repeatedly triggered for each element in the associated call.) */
/* This flag indicates to the upcoming completeCall() function that this queue entry was initiated by Velocity.
						 See completeCall() for further details. */
return t===!0?(S.promise&&S.resolver(y),!0):(T.velocityQueueEntryFlag=!0,void o(e))});/*********************
				 Auto-Dequeuing
				 *********************/
/* As per jQuery's $.queue() behavior, to fire the first non-custom-queue entry on an element, the element
				 must be dequeued if its queue stack consists *solely* of the current call. (This can be determined by checking
				 for the "inprogress" item that jQuery prepends to active queue stack arrays.) Regardless, whenever the element's
				 queue is further appended with additional items -- including $.delay()'s or even $.animate() calls, the queue's
				 first entry is automatically fired. This behavior contrasts that of custom queues, which never auto-fire. */
/* Note: When an element set is being subjected to a non-parallel Velocity call, the animation will not begin until
				 each one of the elements in the set has reached the end of its individually pre-existing queue chain. */
/* Note: Unfortunately, most people don't fully grasp jQuery's powerful, yet quirky, $.queue() function.
				 Lean more here: http://stackoverflow.com/questions/1058158/can-somebody-explain-jquery-queue-to-me */
""!==s.queue&&"fx"!==s.queue||"inprogress"===h.queue(e)[0]||h.dequeue(e)}var l,/* Whether Velocity was called via the utility function (as opposed to on a jQuery/Zepto object). */
c,/* When Velocity is called via the utility function ($.Velocity()/Velocity()), elements are explicitly
					 passed in as the first parameter. Thus, argument positioning varies. We normalize them here. */
g,v,y,m,x,_=arguments[0]&&(arguments[0].p||h.isPlainObject(arguments[0].properties)&&!arguments[0].properties.names||b.isString(arguments[0].properties));/* Detect jQuery/Zepto elements being animated via the $.fn method. */
b.isWrapped(this)?(c=!1,v=0,y=this,g=this):(c=!0,v=1,y=_?arguments[0].elements||arguments[0].e:arguments[0]);/***************
			 Promises
			 ***************/
var S={promise:null,resolver:null,rejecter:null};if(/* If this call was made via the utility function (which is the default method of invocation when jQuery/Zepto are not being used), and if
			 promise support was detected, create a promise object for this call and store references to its resolver and rejecter methods. The resolve
			 method is used when a call completes naturally or is prematurely stopped by the user. In both cases, completeCall() handles the associated
			 call cleanup and promise resolving logic. The reject method is used when an invalid set of arguments is passed into a Velocity call. */
/* Note: Velocity employs a call-based queueing architecture, which means that stopping an animating element actually stops the full call that
			 triggered it -- not that one element exclusively. Similarly, there is one promise per call, and all elements targeted by a Velocity call are
			 grouped together for the purposes of resolving and rejecting a promise. */
c&&T.Promise&&(S.promise=new T.Promise(function(e,t){S.resolver=e,S.rejecter=t})),_?(m=arguments[0].properties||arguments[0].p,x=arguments[0].options||arguments[0].o):(m=arguments[v],x=arguments[v+1]),y=o(y),!y)return void(S.promise&&(m&&x&&x.promiseRejectEmpty===!1?S.resolver():S.rejecter()));/* The length of the element set (in the form of a nodeList or an array of elements) is defaulted to 1 in case a
			 single raw DOM element is passed in (which doesn't contain a length property). */
var j=y.length,A=0;/***************************
			 Argument Overloading
			 ***************************/
/* Support is included for jQuery's argument overloading: $.animate(propertyMap [, duration] [, easing] [, complete]).
			 Overloading is detected by checking for the absence of an object being passed into options. */
/* Note: The stop/finish/pause/resume actions do not accept animation options, and are therefore excluded from this check. */
if(!/^(stop|finish|finishAll|pause|resume)$/i.test(m)&&!h.isPlainObject(x)){/* The utility function shifts all arguments one position to the right, so we adjust for that offset. */
var E=v+1;x={};/* Iterate through all options arguments */
for(var P=E;P<arguments.length;P++)/* Treat a number as a duration. Parse it out. */
/* Note: The following RegEx will return true if passed an array with a number as its first item.
					 Thus, arrays are skipped from this check. */
b.isArray(arguments[P])||!/^(fast|normal|slow)$/i.test(arguments[P])&&!/^\d/.test(arguments[P])?b.isString(arguments[P])||b.isArray(arguments[P])?x.easing=arguments[P]:b.isFunction(arguments[P])&&(x.complete=arguments[P]):x.duration=arguments[P]}/*********************
			 Action Detection
			 *********************/
/* Velocity's behavior is categorized into "actions": Elements can either be specially scrolled into view,
			 or they can be started, stopped, paused, resumed, or reversed . If a literal or referenced properties map is passed in as Velocity's
			 first argument, the associated action is "start". Alternatively, "scroll", "reverse", "pause", "resume" or "stop" can be passed in 
			 instead of a properties map. */
var N;switch(m){case"scroll":N="scroll";break;case"reverse":N="reverse";break;case"pause":/*******************
					 Action: Pause
					 *******************/
var O=(new Date).getTime();/* Since pause creates no new tweens, exit out of Velocity. */
/* Handle delay timers */
/* Pause and Resume are call-wide (not on a per element basis). Thus, calling pause or resume on a 
					 single element will cause any calls that containt tweens for that element to be paused/resumed
					 as well. */
/* Iterate through all calls and pause any that contain any of our elements */
return h.each(y,function(e,t){u(t,O)}),h.each(T.State.calls,function(e,t){var n=!1;/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
t&&/* Iterate through the active call's targeted elements. */
h.each(t[1],function(e,i){var o=x===r?"":x;/* Iterate through the calls targeted by the stop command. */
/* Proceed to check next call if we have already matched */
return o!==!0&&t[2].queue!==o&&(x!==r||t[2].queue!==!1)||(h.each(y,function(e,r){/* Check that this call was applied to the target element. */
if(r===i)/* Set call to paused */
/* Once we match an element, we can bounce out to the next call entirely */
return t[5]={resume:!1},n=!0,!1}),!n&&void 0)})}),e();case"resume":/* Since resume creates no new tweens, exit out of Velocity. */
/*******************
					 Action: Resume
					 *******************/
/* Handle delay timers */
/* Pause and Resume are call-wide (not on a per elemnt basis). Thus, calling pause or resume on a 
					 single element will cause any calls that containt tweens for that element to be paused/resumed
					 as well. */
/* Iterate through all calls and pause any that contain any of our elements */
return h.each(y,function(e,t){s(t,O)}),h.each(T.State.calls,function(e,t){var n=!1;/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
t&&/* Iterate through the active call's targeted elements. */
h.each(t[1],function(e,i){var o=x===r?"":x;/* Skip any calls that have never been paused */
/* Iterate through the calls targeted by the stop command. */
/* Proceed to check next call if we have already matched */
return o!==!0&&t[2].queue!==o&&(x!==r||t[2].queue!==!1)||(!t[5]||(h.each(y,function(e,r){/* Check that this call was applied to the target element. */
if(r===i)/* Flag a pause object to be resumed, which will occur during the next tick. In
										 addition, the pause object will at that time be deleted */
/* Once we match an element, we can bounce out to the next call entirely */
return t[5].resume=!0,n=!0,!1}),!n&&void 0))})}),e();case"finish":case"finishAll":case"stop":/*******************
					 Action: Stop
					 *******************/
/* Clear the currently-active delay on each targeted element. */
h.each(y,function(e,t){a(t)&&a(t).delayTimer&&(/* Stop the timer from triggering its cached next() function. */
clearTimeout(a(t).delayTimer.setTimeout),/* Manually call the next() function so that the subsequent queue items can progress. */
a(t).delayTimer.next&&a(t).delayTimer.next(),delete a(t).delayTimer),/* If we want to finish everything in the queue, we have to iterate through it
						 and call each function. This will make them active calls below, which will
						 cause them to be applied via the duration setting. */
"finishAll"!==m||x!==!0&&!b.isString(x)||(/* Iterate through the items in the element's queue. */
h.each(h.queue(t,b.isString(x)?x:""),function(e,t){/* The queue array can contain an "inprogress" string, which we skip. */
b.isFunction(t)&&t()}),/* Clearing the $.queue() array is achieved by resetting it to []. */
h.queue(t,b.isString(x)?x:"",[]))});var L=[];/* Since we're stopping, and not proceeding with queueing, exit out of Velocity. */
/* When the stop action is triggered, the elements' currently active call is immediately stopped. The active call might have
					 been applied to multiple elements, in which case all of the call's elements will be stopped. When an element
					 is stopped, the next item in its animation queue is immediately triggered. */
/* An additional argument may be passed in to clear an element's remaining queued calls. Either true (which defaults to the "fx" queue)
					 or a custom queue string can be passed in. */
/* Note: The stop command runs prior to Velocity's Queueing phase since its behavior is intended to take effect *immediately*,
					 regardless of the element's current queue state. */
/* Iterate through every active call. */
/* Prematurely call completeCall() on each matched active call. Pass an additional flag for "stop" to indicate
					 that the complete callback and display:none setting should be skipped since we're completing prematurely. */
/* Immediately resolve the promise associated with this stop call since stop runs synchronously. */
return h.each(T.State.calls,function(e,t){/* Inactive calls are set to false by the logic inside completeCall(). Skip them. */
t&&/* Iterate through the active call's targeted elements. */
h.each(t[1],function(n,i){/* If true was passed in as a secondary argument, clear absolutely all calls on this element. Otherwise, only
								 clear calls associated with the relevant queue. */
/* Call stopping logic works as follows:
								 - options === true --> stop current default queue calls (and queue:false calls), including remaining queued ones.
								 - options === undefined --> stop current queue:"" call and all queue:false calls.
								 - options === false --> stop only queue:false calls.
								 - options === "custom" --> stop current queue:"custom" call, including remaining queued ones (there is no functionality to only clear the currently-running queue:"custom" call). */
var o=x===r?"":x;/* Iterate through the calls targeted by the stop command. */
return o!==!0&&t[2].queue!==o&&(x!==r||t[2].queue!==!1)||void h.each(y,function(n,r){/* Check that this call was applied to the target element. */
if(r===i)if(/* Optionally clear the remaining queued calls. If we're doing "finishAll" this won't find anything,
										 due to the queue-clearing above. */
(x===!0||b.isString(x))&&(/* Iterate through the items in the element's queue. */
h.each(h.queue(r,b.isString(x)?x:""),function(e,t){/* The queue array can contain an "inprogress" string, which we skip. */
b.isFunction(t)&&/* Pass the item's callback a flag indicating that we want to abort from the queue call.
													 (Specifically, the queue will resolve the call's associated promise then abort.)  */
t(null,!0)}),/* Clearing the $.queue() array is achieved by resetting it to []. */
h.queue(r,b.isString(x)?x:"",[])),"stop"===m){/* Since "reverse" uses cached start values (the previous call's endValues), these values must be
											 changed to reflect the final value that the elements were actually tweened to. */
/* Note: If only queue:false animations are currently running on an element, it won't have a tweensContainer
											 object. Also, queue:false animations can't be reversed. */
var u=a(r);u&&u.tweensContainer&&o!==!1&&h.each(u.tweensContainer,function(e,t){t.endValue=t.currentValue}),L.push(e)}else"finish"!==m&&"finishAll"!==m||(/* To get active tweens to finish immediately, we forcefully shorten their durations to 1ms so that
											 they finish upon the next rAf tick then proceed with normal call completion logic. */
t[2].duration=1)})})}),"stop"===m&&(h.each(L,function(e,t){d(t,!0)}),S.promise&&S.resolver(y)),e();default:/* Treat a non-empty plain object as a literal properties map. */
if(!h.isPlainObject(m)||b.isEmptyObject(m)){if(b.isString(m)&&T.Redirects[m]){l=h.extend({},x);var D=l.duration,F=l.delay||0;/* Since the animation logic resides within the redirect's own code, abort the remainder of this call.
						 (The performance overhead up to this point is virtually non-existant.) */
/* Note: The jQuery call chain is kept intact by returning the complete element set. */
/* If the backwards option was passed in, reverse the element set so that elements animate from the last to the first. */
/* Individually trigger the redirect for each element in the set to prevent users from having to handle iteration logic in their redirect. */
return l.backwards===!0&&(y=h.extend(!0,[],y).reverse()),h.each(y,function(e,t){/* If the stagger option was passed in, successively delay each element by the stagger value (in ms). Retain the original delay value. */
parseFloat(l.stagger)?l.delay=F+parseFloat(l.stagger)*e:b.isFunction(l.stagger)&&(l.delay=F+l.stagger.call(t,e,j)),/* If the drag option was passed in, successively increase/decrease (depending on the presense of opts.backwards)
							 the duration of each element's animation, using floors to prevent producing very short durations. */
l.drag&&(/* Default the duration of UI pack effects (callouts and transitions) to 1000ms instead of the usual default duration of 400ms. */
l.duration=parseFloat(D)||(/^(callout|transition)/.test(m)?1e3:w),/* For each element, take the greater duration of: A) animation completion percentage relative to the original duration,
								 B) 75% of the original duration, or C) a 200ms fallback (in case duration is already set to a low value).
								 The end result is a baseline of 75% of the redirect's duration that increases/decreases as the end of the element set is approached. */
l.duration=Math.max(l.duration*(l.backwards?1-e/j:(e+1)/j),.75*l.duration,200)),/* Pass in the call's opts object so that the redirect can optionally extend it. It defaults to an empty object instead of null to
							 reduce the opts checking logic required inside the redirect. */
T.Redirects[m].call(t,t,l||{},e,j,y,S.promise?S:r)}),e()}var q="Velocity: First argument ("+m+") was not a property map, a known action, or a registered redirect. Aborting.";return S.promise?S.rejecter(new Error(q)):console.log(q),e()}N="start"}/**************************
			 Call-Wide Variables
			 **************************/
/* A container for CSS unit conversion ratios (e.g. %, rem, and em ==> px) that is used to cache ratios across all elements
			 being animated in a single Velocity call. Calculating unit ratios necessitates DOM querying and updating, and is therefore
			 avoided (via caching) wherever possible. This container is call-wide instead of page-wide to avoid the risk of using stale
			 conversion metrics across Velocity animations that are not immediately consecutively chained. */
var R={lastParent:null,lastPosition:null,lastFontSize:null,lastPercentToPxWidth:null,lastPercentToPxHeight:null,lastEmToPx:null,remToPx:null,vwToPx:null,vhToPx:null},V=[];/**************************
			 Element Set Iteration
			 **************************/
/* If the "nodeType" property exists on the elements variable, we're animating a single element.
			 Place it in an array so that $.each() can iterate over it. */
h.each(y,function(e,t){/* Ensure each element in a set has a nodeType (is a real element) to avoid throwing errors. */
b.isNode(t)&&i(t,e)}),/******************
			 Option: Loop
			 ******************/
/* The loop option accepts an integer indicating how many times the element should loop between the values in the
			 current call's properties map and the element's property values prior to this call. */
/* Note: The loop option's logic is performed here -- after element processing -- because the current call needs
			 to undergo its queue insertion prior to the loop option generating its series of constituent "reverse" calls,
			 which chain after the current call. Two reverse calls (two "alternations") constitute one loop. */
l=h.extend({},T.defaults,x),l.loop=parseInt(l.loop,10);var H=2*l.loop-1;if(l.loop)/* Double the loop count to convert it into its appropriate number of "reverse" calls.
				 Subtract 1 from the resulting value since the current call is included in the total alternation count. */
for(var I=0;I<H;I++){/* Since the logic for the reverse action occurs inside Queueing and therefore this call's options object
					 isn't parsed until then as well, the current call's delay option must be explicitly passed into the reverse
					 call so that the delay logic that occurs inside *Pre-Queueing* can process it. */
var z={delay:l.delay,progress:l.progress};/* If a complete callback was passed into this call, transfer it to the loop redirect's final "reverse" call
					 so that it's triggered when the entire redirect is complete (and not when the very first animation is complete). */
I===H-1&&(z.display=l.display,z.visibility=l.visibility,z.complete=l.complete),C(y,"reverse",z)}/***************
			 Chaining
			 ***************/
/* Return the elements back to the call chain, with wrapped elements taking precedence in case Velocity was called via the $.fn. extension. */
return e()};/* Turn Velocity into the animation function, extended with the pre-existing Velocity object. */
T=h.extend(C,T),/* For legacy support, also expose the literal animate method. */
T.animate=C;/**************
		 Timing
		 **************/
/* Ticker function. */
var j=t.requestAnimationFrame||v;/* Inactive browser tabs pause rAF, which results in all active animations immediately sprinting to their completion states when the tab refocuses.
		 To get around this, we dynamically switch rAF to setTimeout (which the browser *doesn't* pause) when the tab loses focus. We skip this for mobile
		 devices to avoid wasting battery power on inactive tabs. */
/* Note: Tab focus detection doesn't work on older versions of IE, but that's okay since they don't support rAF to begin with. */
if(!T.State.isMobile&&n.hidden!==r){var A=function(){/* Reassign the rAF function (which the global tick() function uses) based on the tab's focus state. */
n.hidden?(j=function(e){/* The tick function needs a truthy first argument in order to pass its internal timestamp check. */
return setTimeout(function(){e(!0)},16)},/* The rAF loop has been paused by the browser, so we manually restart the tick. */
p()):j=t.requestAnimationFrame||v};/* Page could be sitting in the background at this time (i.e. opened as new tab) so making sure we use correct ticker from the start */
A(),/* And then run check again every time visibility changes */
n.addEventListener("visibilitychange",A)}/******************
		 Frameworks
		 ******************/
/* Both jQuery and Zepto allow their $.fn object to be extended to allow wrapped elements to be subjected to plugin calls.
		 If either framework is loaded, register a "velocity" extension pointing to Velocity's core animate() method.  Velocity
		 also registers itself onto a global container (window.jQuery || window.Zepto || window) so that certain features are
		 accessible beyond just a per-element scope. This master object contains an .animate() method, which is later assigned to $.fn
		 (if jQuery or Zepto are present). Accordingly, Velocity can both act on wrapped DOM elements and stand alone for targeting raw DOM elements. */
/* Assign the element function to Velocity's core animate() method. */
/* Assign the object function's defaults to Velocity's global defaults object. */
/***********************
		 Packaged Redirects
		 ***********************/
/* slideUp, slideDown */
/* fadeIn, fadeOut */
return e.Velocity=T,e!==t&&(e.fn.velocity=C,e.fn.velocity.defaults=T.defaults),h.each(["Down","Up"],function(e,t){T.Redirects["slide"+t]=function(e,n,i,o,a,u){var s=h.extend({},n),l=s.begin,c=s.complete,f={},p={height:"",marginTop:"",marginBottom:"",paddingTop:"",paddingBottom:""};s.display===r&&(/* Show the element before slideDown begins and hide the element after slideUp completes. */
/* Note: Inline elements cannot have dimensions animated, so they're reverted to inline-block. */
s.display="Down"===t?"inline"===T.CSS.Values.getDisplayType(e)?"inline-block":"block":"none"),s.begin=function(){/* If the user passed in a begin callback, fire it now. */
0===i&&l&&l.call(a,a);/* Cache the elements' original vertical dimensional property values so that we can animate back to them. */
for(var n in p)if(p.hasOwnProperty(n)){f[n]=e.style[n];/* For slideDown, use forcefeeding to animate all vertical properties from 0. For slideUp,
						 use forcefeeding to start from computed values and animate down to 0. */
var r=k.getPropertyValue(e,n);p[n]="Down"===t?[r,0]:[0,r]}/* Force vertical overflow content to clip so that sliding works as expected. */
f.overflow=e.style.overflow,e.style.overflow="hidden"},s.complete=function(){/* Reset element to its pre-slide inline values once its slide animation is complete. */
for(var t in f)f.hasOwnProperty(t)&&(e.style[t]=f[t]);/* If the user passed in a complete callback, fire it now. */
i===o-1&&(c&&c.call(a,a),u&&u.resolver(a))},T(e,p,s)}}),h.each(["In","Out"],function(e,t){T.Redirects["fade"+t]=function(e,n,i,o,a,u){var s=h.extend({},n),l=s.complete,c={opacity:"In"===t?1:0};/* Since redirects are triggered individually for each element in the animated set, avoid repeatedly triggering
				 callbacks by firing them only when the final element has been reached. */
0!==i&&(s.begin=null),i!==o-1?s.complete=null:s.complete=function(){l&&l.call(a,a),u&&u.resolver(a)},/* If a display was passed in, use it. Otherwise, default to "none" for fadeOut or the element-specific default for fadeIn. */
/* Note: We allow users to pass in "null" to skip display setting altogether. */
s.display===r&&(s.display="In"===t?"auto":"none"),T(this,c,s)}}),T}(window.jQuery||window.Zepto||window,window,window?window.document:void 0)})},/***/
"../node_modules/webpack/buildin/global.js":/***/
function(e,t){var n;
// This works in non-strict mode
n=function(){return this}();try{
// This works if eval is allowed (see CSP)
n=n||Function("return this")()||(0,eval)("this")}catch(e){
// This works if the window reference is available
"object"==typeof window&&(n=window)}
// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}
e.exports=n},/***/
"../node_modules/webpack/buildin/module.js":/***/
function(e,t){e.exports=function(e){
// module.parent = undefined by default
return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},/***/
0:/***/
function(e,t,n){n("../node_modules/jquery/dist/jquery.js"),n("../node_modules/lodash/lodash.js"),e.exports=n("../node_modules/velocity-animate/velocity.js")}});