function e(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var t={exports:{}},n={},r={exports:{}},i={},s=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v=Object.assign,w={};function b(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||y}function _(){}function E(e,t,n){this.props=e,this.context=t,this.refs=w,this.updater=n||y}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},_.prototype=b.prototype;var S=E.prototype=new _;S.constructor=E,v(S,b.prototype),S.isPureReactComponent=!0;var k=Array.isArray,T=Object.prototype.hasOwnProperty,C={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,i={},a=null,o=null;if(null!=t)for(r in void 0!==t.ref&&(o=t.ref),void 0!==t.key&&(a=""+t.key),t)T.call(t,r)&&!I.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){for(var u=Array(l),c=0;c<l;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===i[r]&&(i[r]=l[r]);return{$$typeof:s,type:e,key:a,ref:o,props:i,_owner:C.current}}function N(e){return"object"==typeof e&&null!==e&&e.$$typeof===s}var A=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,n,r,i){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var l=!1;if(null===e)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case s:case a:l=!0}}if(l)return i=i(l=e),e=""===r?"."+R(l,0):r,k(i)?(n="",null!=e&&(n=e.replace(A,"$&/")+"/"),P(i,t,n,"",(function(e){return e}))):null!=i&&(N(i)&&(i=function(e,t){return{$$typeof:s,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(A,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",k(e))for(var u=0;u<e.length;u++){var c=r+R(o=e[u],u);l+=P(o,t,n,c,i)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=g&&e[g]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),u=0;!(o=e.next()).done;)l+=P(o=o.value,t,n,c=r+R(o,u++),i);else if("object"===o)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function D(e,t,n){if(null==e)return e;var r=[],i=0;return P(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function O(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var L={current:null},M={transition:null},U={ReactCurrentDispatcher:L,ReactCurrentBatchConfig:M,ReactCurrentOwner:C};function F(){throw Error("act(...) is not supported in production builds of React.")}i.Children={map:D,forEach:function(e,t,n){D(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return D(e,(function(){t++})),t},toArray:function(e){return D(e,(function(e){return e}))||[]},only:function(e){if(!N(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},i.Component=b,i.Fragment=o,i.Profiler=u,i.PureComponent=E,i.StrictMode=l,i.Suspense=f,i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=U,i.act=F,i.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=v({},e.props),i=e.key,a=e.ref,o=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,o=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(u in t)T.call(t,u)&&!I.hasOwnProperty(u)&&(r[u]=void 0===t[u]&&void 0!==l?l[u]:t[u])}var u=arguments.length-2;if(1===u)r.children=n;else if(1<u){l=Array(u);for(var c=0;c<u;c++)l[c]=arguments[c+2];r.children=l}return{$$typeof:s,type:e.type,key:i,ref:a,props:r,_owner:o}},i.createContext=function(e){return(e={$$typeof:h,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},i.createElement=x,i.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},i.createRef=function(){return{current:null}},i.forwardRef=function(e){return{$$typeof:d,render:e}},i.isValidElement=N,i.lazy=function(e){return{$$typeof:m,_payload:{_status:-1,_result:e},_init:O}},i.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},i.startTransition=function(e){var t=M.transition;M.transition={};try{e()}finally{M.transition=t}},i.unstable_act=F,i.useCallback=function(e,t){return L.current.useCallback(e,t)},i.useContext=function(e){return L.current.useContext(e)},i.useDebugValue=function(){},i.useDeferredValue=function(e){return L.current.useDeferredValue(e)},i.useEffect=function(e,t){return L.current.useEffect(e,t)},i.useId=function(){return L.current.useId()},i.useImperativeHandle=function(e,t,n){return L.current.useImperativeHandle(e,t,n)},i.useInsertionEffect=function(e,t){return L.current.useInsertionEffect(e,t)},i.useLayoutEffect=function(e,t){return L.current.useLayoutEffect(e,t)},i.useMemo=function(e,t){return L.current.useMemo(e,t)},i.useReducer=function(e,t,n){return L.current.useReducer(e,t,n)},i.useRef=function(e){return L.current.useRef(e)},i.useState=function(e){return L.current.useState(e)},i.useSyncExternalStore=function(e,t,n){return L.current.useSyncExternalStore(e,t,n)},i.useTransition=function(){return L.current.useTransition()},i.version="18.3.1",r.exports=i;var V=r.exports;const j=e(V);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var z=V,B=Symbol.for("react.element"),$=Symbol.for("react.fragment"),H=Object.prototype.hasOwnProperty,q=z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,K={key:!0,ref:!0,__self:!0,__source:!0};function G(e,t,n){var r,i={},s=null,a=null;for(r in void 0!==n&&(s=""+n),void 0!==t.key&&(s=""+t.key),void 0!==t.ref&&(a=t.ref),t)H.call(t,r)&&!K.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:B,type:e,key:s,ref:a,props:i,_owner:q.current}}n.Fragment=$,n.jsx=G,n.jsxs=G,t.exports=n;var W=t.exports,Q={},X={exports:{}},Y={},J={exports:{}},Z={};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
!function(e){function t(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,s=e[r];if(!(0<i(s,t)))break e;e[r]=t,e[n]=s,n=r}}function n(e){return 0===e.length?null:e[0]}function r(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,s=e.length,a=s>>>1;r<a;){var o=2*(r+1)-1,l=e[o],u=o+1,c=e[u];if(0>i(l,n))u<s&&0>i(c,l)?(e[r]=c,e[u]=n,r=u):(e[r]=l,e[o]=n,r=o);else{if(!(u<s&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"==typeof performance&&"function"==typeof performance.now){var s=performance;e.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();e.unstable_now=function(){return a.now()-o}}var l=[],u=[],c=1,h=null,d=3,f=!1,p=!1,m=!1,g="function"==typeof setTimeout?setTimeout:null,y="function"==typeof clearTimeout?clearTimeout:null,v="undefined"!=typeof setImmediate?setImmediate:null;function w(e){for(var i=n(u);null!==i;){if(null===i.callback)r(u);else{if(!(i.startTime<=e))break;r(u),i.sortIndex=i.expirationTime,t(l,i)}i=n(u)}}function b(e){if(m=!1,w(e),!p)if(null!==n(l))p=!0,P(_);else{var t=n(u);null!==t&&D(b,t.startTime-e)}}function _(t,i){p=!1,m&&(m=!1,y(T),T=-1),f=!0;var s=d;try{for(w(i),h=n(l);null!==h&&(!(h.expirationTime>i)||t&&!x());){var a=h.callback;if("function"==typeof a){h.callback=null,d=h.priorityLevel;var o=a(h.expirationTime<=i);i=e.unstable_now(),"function"==typeof o?h.callback=o:h===n(l)&&r(l),w(i)}else r(l);h=n(l)}if(null!==h)var c=!0;else{var g=n(u);null!==g&&D(b,g.startTime-i),c=!1}return c}finally{h=null,d=s,f=!1}}"undefined"!=typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var E,S=!1,k=null,T=-1,C=5,I=-1;function x(){return!(e.unstable_now()-I<C)}function N(){if(null!==k){var t=e.unstable_now();I=t;var n=!0;try{n=k(!0,t)}finally{n?E():(S=!1,k=null)}}else S=!1}if("function"==typeof v)E=function(){v(N)};else if("undefined"!=typeof MessageChannel){var A=new MessageChannel,R=A.port2;A.port1.onmessage=N,E=function(){R.postMessage(null)}}else E=function(){g(N,0)};function P(e){k=e,S||(S=!0,E())}function D(t,n){T=g((function(){t(e.unstable_now())}),n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){p||f||(p=!0,P(_))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return d},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(e){switch(d){case 1:case 2:case 3:var t=3;break;default:t=d}var n=d;d=t;try{return e()}finally{d=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=d;d=e;try{return t()}finally{d=n}},e.unstable_scheduleCallback=function(r,i,s){var a=e.unstable_now();switch("object"==typeof s&&null!==s?s="number"==typeof(s=s.delay)&&0<s?a+s:a:s=a,r){case 1:var o=-1;break;case 2:o=250;break;case 5:o=1073741823;break;case 4:o=1e4;break;default:o=5e3}return r={id:c++,callback:i,priorityLevel:r,startTime:s,expirationTime:o=s+o,sortIndex:-1},s>a?(r.sortIndex=s,t(u,r),null===n(l)&&r===n(u)&&(m?(y(T),T=-1):m=!0,D(b,s-a))):(r.sortIndex=o,t(l,r),p||f||(p=!0,P(_))),r},e.unstable_shouldYield=x,e.unstable_wrapCallback=function(e){var t=d;return function(){var n=d;d=t;try{return e.apply(this,arguments)}finally{d=n}}}}(Z),J.exports=Z;var ee=J.exports,te=V,ne=ee;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function re(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ie=new Set,se={};function ae(e,t){oe(e,t),oe(e+"Capture",t)}function oe(e,t){for(se[e]=t,e=0;e<t.length;e++)ie.add(t[e])}var le=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),ue=Object.prototype.hasOwnProperty,ce=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,he={},de={};function fe(e,t,n,r,i,s,a){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=a}var pe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){pe[e]=new fe(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];pe[t]=new fe(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){pe[e]=new fe(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){pe[e]=new fe(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){pe[e]=new fe(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){pe[e]=new fe(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){pe[e]=new fe(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){pe[e]=new fe(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){pe[e]=new fe(e,5,!1,e.toLowerCase(),null,!1,!1)}));var me=/[\-:]([a-z])/g;function ge(e){return e[1].toUpperCase()}function ye(e,t,n,r){var i=pe.hasOwnProperty(t)?pe[t]:null;(null!==i?0!==i.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null==t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,i,r)&&(n=null),r||null===i?function(e){return!!ue.call(de,e)||!ue.call(he,e)&&(ce.test(e)?de[e]=!0:(he[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=null===n?3!==i.type&&"":n:(t=i.attributeName,r=i.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(i=i.type)||4===i&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(me,ge);pe[t]=new fe(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(me,ge);pe[t]=new fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(me,ge);pe[t]=new fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){pe[e]=new fe(e,1,!1,e.toLowerCase(),null,!1,!1)})),pe.xlinkHref=new fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){pe[e]=new fe(e,1,!1,e.toLowerCase(),null,!0,!0)}));var ve=te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,we=Symbol.for("react.element"),be=Symbol.for("react.portal"),_e=Symbol.for("react.fragment"),Ee=Symbol.for("react.strict_mode"),Se=Symbol.for("react.profiler"),ke=Symbol.for("react.provider"),Te=Symbol.for("react.context"),Ce=Symbol.for("react.forward_ref"),Ie=Symbol.for("react.suspense"),xe=Symbol.for("react.suspense_list"),Ne=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),Re=Symbol.for("react.offscreen"),Pe=Symbol.iterator;function De(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=Pe&&e[Pe]||e["@@iterator"])?e:null}var Oe,Le=Object.assign;function Me(e){if(void 0===Oe)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Oe=t&&t[1]||""}return"\n"+Oe+e}var Ue=!1;function Fe(e,t){if(!e||Ue)return"";Ue=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"==typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"==typeof u.stack){for(var i=u.stack.split("\n"),s=r.stack.split("\n"),a=i.length-1,o=s.length-1;1<=a&&0<=o&&i[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(i[a]!==s[o]){if(1!==a||1!==o)do{if(a--,0>--o||i[a]!==s[o]){var l="\n"+i[a].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}}while(1<=a&&0<=o);break}}}finally{Ue=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Me(e):""}function Ve(e){switch(e.tag){case 5:return Me(e.type);case 16:return Me("Lazy");case 13:return Me("Suspense");case 19:return Me("SuspenseList");case 0:case 2:case 15:return e=Fe(e.type,!1);case 11:return e=Fe(e.type.render,!1);case 1:return e=Fe(e.type,!0);default:return""}}function je(e){if(null==e)return null;if("function"==typeof e)return e.displayName||e.name||null;if("string"==typeof e)return e;switch(e){case _e:return"Fragment";case be:return"Portal";case Se:return"Profiler";case Ee:return"StrictMode";case Ie:return"Suspense";case xe:return"SuspenseList"}if("object"==typeof e)switch(e.$$typeof){case Te:return(e.displayName||"Context")+".Consumer";case ke:return(e._context.displayName||"Context")+".Provider";case Ce:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case Ne:return null!==(t=e.displayName||null)?t:je(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return je(e(t))}catch(n){}}return null}function ze(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return je(t);case 8:return t===Ee?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"==typeof t)return t.displayName||t.name||null;if("string"==typeof t)return t}return null}function Be(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function $e(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function He(e){e._valueTracker||(e._valueTracker=function(e){var t=$e(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&void 0!==n&&"function"==typeof n.get&&"function"==typeof n.set){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,s.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function qe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=$e(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Ke(e){if(void 0===(e=e||("undefined"!=typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Ge(e,t){var n=t.checked;return Le({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function We(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=Be(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function Qe(e,t){null!=(t=t.checked)&&ye(e,"checked",t,!1)}function Xe(e,t){Qe(e,t);var n=Be(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?Je(e,t.type,n):t.hasOwnProperty("defaultValue")&&Je(e,t.type,Be(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function Ye(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function Je(e,t,n){"number"===t&&Ke(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ze=Array.isArray;function et(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Be(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function tt(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(re(91));return Le({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function nt(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(re(92));if(Ze(n)){if(1<n.length)throw Error(re(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:Be(n)}}function rt(e,t){var n=Be(t.value),r=Be(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function it(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function st(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function at(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?st(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ot,lt,ut=(lt=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ot=ot||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ot.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return lt(e,t)}))}:lt);function ct(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var ht={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dt=["Webkit","ms","Moz","O"];function ft(e,t,n){return null==t||"boolean"==typeof t||""===t?"":n||"number"!=typeof t||0===t||ht.hasOwnProperty(e)&&ht[e]?(""+t).trim():t+"px"}function pt(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),i=ft(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}Object.keys(ht).forEach((function(e){dt.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ht[t]=ht[e]}))}));var mt=Le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(e,t){if(t){if(mt[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(re(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(re(60));if("object"!=typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(re(61))}if(null!=t.style&&"object"!=typeof t.style)throw Error(re(62))}}function yt(e,t){if(-1===e.indexOf("-"))return"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var vt=null;function wt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var bt=null,_t=null,Et=null;function St(e){if(e=ys(e)){if("function"!=typeof bt)throw Error(re(280));var t=e.stateNode;t&&(t=ws(t),bt(e.stateNode,e.type,t))}}function kt(e){_t?Et?Et.push(e):Et=[e]:_t=e}function Tt(){if(_t){var e=_t,t=Et;if(Et=_t=null,St(e),t)for(e=0;e<t.length;e++)St(t[e])}}function Ct(e,t){return e(t)}function It(){}var xt=!1;function Nt(e,t,n){if(xt)return e(t,n);xt=!0;try{return Ct(e,t,n)}finally{xt=!1,(null!==_t||null!==Et)&&(It(),Tt())}}function At(e,t){var n=e.stateNode;if(null===n)return null;var r=ws(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!=typeof n)throw Error(re(231,t,typeof n));return n}var Rt=!1;if(le)try{var Pt={};Object.defineProperty(Pt,"passive",{get:function(){Rt=!0}}),window.addEventListener("test",Pt,Pt),window.removeEventListener("test",Pt,Pt)}catch(lt){Rt=!1}function Dt(e,t,n,r,i,s,a,o,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ot=!1,Lt=null,Mt=!1,Ut=null,Ft={onError:function(e){Ot=!0,Lt=e}};function Vt(e,t,n,r,i,s,a,o,l){Ot=!1,Lt=null,Dt.apply(Ft,arguments)}function jt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{!!(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function zt(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Bt(e){if(jt(e)!==e)throw Error(re(188))}function $t(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=jt(e)))throw Error(re(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var s=i.alternate;if(null===s){if(null!==(r=i.return)){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bt(i),e;if(s===r)return Bt(i),t;s=s.sibling}throw Error(re(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,o=i.child;o;){if(o===n){a=!0,n=i,r=s;break}if(o===r){a=!0,r=i,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,r=i;break}if(o===r){a=!0,r=s,n=i;break}o=o.sibling}if(!a)throw Error(re(189))}}if(n.alternate!==r)throw Error(re(190))}if(3!==n.tag)throw Error(re(188));return n.stateNode.current===n?e:t}(e))?Ht(e):null}function Ht(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ht(e);if(null!==t)return t;e=e.sibling}return null}var qt=ne.unstable_scheduleCallback,Kt=ne.unstable_cancelCallback,Gt=ne.unstable_shouldYield,Wt=ne.unstable_requestPaint,Qt=ne.unstable_now,Xt=ne.unstable_getCurrentPriorityLevel,Yt=ne.unstable_ImmediatePriority,Jt=ne.unstable_UserBlockingPriority,Zt=ne.unstable_NormalPriority,en=ne.unstable_LowPriority,tn=ne.unstable_IdlePriority,nn=null,rn=null;var sn=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(an(e)/on|0)|0},an=Math.log,on=Math.LN2;var ln=64,un=4194304;function cn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function hn(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,a=268435455&n;if(0!==a){var o=a&~i;0!==o?r=cn(o):0!==(s&=a)&&(r=cn(s))}else 0!==(a=n&~i)?r=cn(a):0!==s&&(r=cn(s));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&i)&&((i=r&-r)>=(s=t&-t)||16===i&&4194240&s))return t;if(4&r&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)i=1<<(n=31-sn(t)),r|=e[n],t&=~i;return r}function dn(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function fn(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function pn(){var e=ln;return!(4194240&(ln<<=1))&&(ln=64),e}function mn(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function gn(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-sn(t)]=n}function yn(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-sn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var vn=0;function wn(e){return 1<(e&=-e)?4<e?268435455&e?16:536870912:4:1}var bn,_n,En,Sn,kn,Tn=!1,Cn=[],In=null,xn=null,Nn=null,An=new Map,Rn=new Map,Pn=[],Dn="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function On(e,t){switch(e){case"focusin":case"focusout":In=null;break;case"dragenter":case"dragleave":xn=null;break;case"mouseover":case"mouseout":Nn=null;break;case"pointerover":case"pointerout":An.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rn.delete(t.pointerId)}}function Ln(e,t,n,r,i,s){return null===e||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},null!==t&&(null!==(t=ys(t))&&_n(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function Mn(e){var t=gs(e.target);if(null!==t){var n=jt(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=zt(n)))return e.blockedOn=t,void kn(e.priority,(function(){En(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Un(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Wn(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ys(n))&&_n(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);vt=r,n.target.dispatchEvent(r),vt=null,t.shift()}return!0}function Fn(e,t,n){Un(e)&&n.delete(t)}function Vn(){Tn=!1,null!==In&&Un(In)&&(In=null),null!==xn&&Un(xn)&&(xn=null),null!==Nn&&Un(Nn)&&(Nn=null),An.forEach(Fn),Rn.forEach(Fn)}function jn(e,t){e.blockedOn===t&&(e.blockedOn=null,Tn||(Tn=!0,ne.unstable_scheduleCallback(ne.unstable_NormalPriority,Vn)))}function zn(e){function t(t){return jn(t,e)}if(0<Cn.length){jn(Cn[0],e);for(var n=1;n<Cn.length;n++){var r=Cn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==In&&jn(In,e),null!==xn&&jn(xn,e),null!==Nn&&jn(Nn,e),An.forEach(t),Rn.forEach(t),n=0;n<Pn.length;n++)(r=Pn[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Pn.length&&null===(n=Pn[0]).blockedOn;)Mn(n),null===n.blockedOn&&Pn.shift()}var Bn=ve.ReactCurrentBatchConfig,$n=!0;function Hn(e,t,n,r){var i=vn,s=Bn.transition;Bn.transition=null;try{vn=1,Kn(e,t,n,r)}finally{vn=i,Bn.transition=s}}function qn(e,t,n,r){var i=vn,s=Bn.transition;Bn.transition=null;try{vn=4,Kn(e,t,n,r)}finally{vn=i,Bn.transition=s}}function Kn(e,t,n,r){if($n){var i=Wn(e,t,n,r);if(null===i)Bi(e,t,r,Gn,n),On(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return In=Ln(In,e,t,n,r,i),!0;case"dragenter":return xn=Ln(xn,e,t,n,r,i),!0;case"mouseover":return Nn=Ln(Nn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return An.set(s,Ln(An.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Rn.set(s,Ln(Rn.get(s)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(On(e,r),4&t&&-1<Dn.indexOf(e)){for(;null!==i;){var s=ys(i);if(null!==s&&bn(s),null===(s=Wn(e,t,n,r))&&Bi(e,t,r,Gn,n),s===i)break;i=s}null!==i&&r.stopPropagation()}else Bi(e,t,r,null,n)}}var Gn=null;function Wn(e,t,n,r){if(Gn=null,null!==(e=gs(e=wt(r))))if(null===(t=jt(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=zt(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gn=e,null}function Qn(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xt()){case Yt:return 1;case Jt:return 4;case Zt:case en:return 16;case tn:return 536870912;default:return 16}default:return 16}}var Xn=null,Yn=null,Jn=null;function Zn(){if(Jn)return Jn;var e,t,n=Yn,r=n.length,i="value"in Xn?Xn.value:Xn.textContent,s=i.length;for(e=0;e<r&&n[e]===i[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===i[s-t];t++);return Jn=i.slice(e,1<t?1-t:void 0)}function er(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function tr(){return!0}function nr(){return!1}function rr(e){function t(t,n,r,i,s){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=s,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(i):i[a]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?tr:nr,this.isPropagationStopped=nr,this}return Le(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!=typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=tr)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!=typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=tr)},persist:function(){},isPersistent:tr}),t}var ir,sr,ar,or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},lr=rr(or),ur=Le({},or,{view:0,detail:0}),cr=rr(ur),hr=Le({},ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sr,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ar&&(ar&&"mousemove"===e.type?(ir=e.screenX-ar.screenX,sr=e.screenY-ar.screenY):sr=ir=0,ar=e),ir)},movementY:function(e){return"movementY"in e?e.movementY:sr}}),dr=rr(hr),fr=rr(Le({},hr,{dataTransfer:0})),pr=rr(Le({},ur,{relatedTarget:0})),mr=rr(Le({},or,{animationName:0,elapsedTime:0,pseudoElement:0})),gr=Le({},or,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yr=rr(gr),vr=rr(Le({},or,{data:0})),wr={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},br={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},_r={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Er(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=_r[e])&&!!t[e]}function Sr(){return Er}var kr=Le({},ur,{key:function(e){if(e.key){var t=wr[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=er(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?br[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sr,charCode:function(e){return"keypress"===e.type?er(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?er(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Tr=rr(kr),Cr=rr(Le({},hr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Ir=rr(Le({},ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sr})),xr=rr(Le({},or,{propertyName:0,elapsedTime:0,pseudoElement:0})),Nr=Le({},hr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ar=rr(Nr),Rr=[9,13,27,32],Pr=le&&"CompositionEvent"in window,Dr=null;le&&"documentMode"in document&&(Dr=document.documentMode);var Or=le&&"TextEvent"in window&&!Dr,Lr=le&&(!Pr||Dr&&8<Dr&&11>=Dr),Mr=String.fromCharCode(32),Ur=!1;function Fr(e,t){switch(e){case"keyup":return-1!==Rr.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vr(e){return"object"==typeof(e=e.detail)&&"data"in e?e.data:null}var jr=!1;var zr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Br(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!zr[e.type]:"textarea"===t}function $r(e,t,n,r){kt(r),0<(t=Hi(t,"onChange")).length&&(n=new lr("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Hr=null,qr=null;function Kr(e){Mi(e,0)}function Gr(e){if(qe(vs(e)))return e}function Wr(e,t){if("change"===e)return t}var Qr=!1;if(le){var Xr;if(le){var Yr="oninput"in document;if(!Yr){var Jr=document.createElement("div");Jr.setAttribute("oninput","return;"),Yr="function"==typeof Jr.oninput}Xr=Yr}else Xr=!1;Qr=Xr&&(!document.documentMode||9<document.documentMode)}function Zr(){Hr&&(Hr.detachEvent("onpropertychange",ei),qr=Hr=null)}function ei(e){if("value"===e.propertyName&&Gr(qr)){var t=[];$r(t,qr,e,wt(e)),Nt(Kr,t)}}function ti(e,t,n){"focusin"===e?(Zr(),qr=n,(Hr=t).attachEvent("onpropertychange",ei)):"focusout"===e&&Zr()}function ni(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Gr(qr)}function ri(e,t){if("click"===e)return Gr(t)}function ii(e,t){if("input"===e||"change"===e)return Gr(t)}var si="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t};function ai(e,t){if(si(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ue.call(t,i)||!si(e[i],t[i]))return!1}return!0}function oi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function li(e,t){var n,r=oi(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=oi(r)}}function ui(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?ui(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function ci(){for(var e=window,t=Ke();t instanceof e.HTMLIFrameElement;){try{var n="string"==typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Ke((e=t.contentWindow).document)}return t}function hi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function di(e){var t=ci(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&ui(n.ownerDocument.documentElement,n)){if(null!==r&&hi(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=void 0===r.end?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=li(n,s);var a=li(n,r);i&&a&&(1!==e.rangeCount||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&((t=t.createRange()).setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"==typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var fi=le&&"documentMode"in document&&11>=document.documentMode,pi=null,mi=null,gi=null,yi=!1;function vi(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;yi||null==pi||pi!==Ke(r)||("selectionStart"in(r=pi)&&hi(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},gi&&ai(gi,r)||(gi=r,0<(r=Hi(mi,"onSelect")).length&&(t=new lr("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=pi)))}function wi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var bi={animationend:wi("Animation","AnimationEnd"),animationiteration:wi("Animation","AnimationIteration"),animationstart:wi("Animation","AnimationStart"),transitionend:wi("Transition","TransitionEnd")},_i={},Ei={};function Si(e){if(_i[e])return _i[e];if(!bi[e])return e;var t,n=bi[e];for(t in n)if(n.hasOwnProperty(t)&&t in Ei)return _i[e]=n[t];return e}le&&(Ei=document.createElement("div").style,"AnimationEvent"in window||(delete bi.animationend.animation,delete bi.animationiteration.animation,delete bi.animationstart.animation),"TransitionEvent"in window||delete bi.transitionend.transition);var ki=Si("animationend"),Ti=Si("animationiteration"),Ci=Si("animationstart"),Ii=Si("transitionend"),xi=new Map,Ni="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ai(e,t){xi.set(e,t),ae(t,[e])}for(var Ri=0;Ri<Ni.length;Ri++){var Pi=Ni[Ri];Ai(Pi.toLowerCase(),"on"+(Pi[0].toUpperCase()+Pi.slice(1)))}Ai(ki,"onAnimationEnd"),Ai(Ti,"onAnimationIteration"),Ai(Ci,"onAnimationStart"),Ai("dblclick","onDoubleClick"),Ai("focusin","onFocus"),Ai("focusout","onBlur"),Ai(Ii,"onTransitionEnd"),oe("onMouseEnter",["mouseout","mouseover"]),oe("onMouseLeave",["mouseout","mouseover"]),oe("onPointerEnter",["pointerout","pointerover"]),oe("onPointerLeave",["pointerout","pointerover"]),ae("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ae("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ae("onBeforeInput",["compositionend","keypress","textInput","paste"]),ae("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ae("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Di="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Oi=new Set("cancel close invalid load scroll toggle".split(" ").concat(Di));function Li(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,i,s,a,o,l){if(Vt.apply(this,arguments),Ot){if(!Ot)throw Error(re(198));var u=Lt;Ot=!1,Lt=null,Mt||(Mt=!0,Ut=u)}}(r,t,void 0,e),e.currentTarget=null}function Mi(e,t){t=!!(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var a=r.length-1;0<=a;a--){var o=r[a],l=o.instance,u=o.currentTarget;if(o=o.listener,l!==s&&i.isPropagationStopped())break e;Li(i,o,u),s=l}else for(a=0;a<r.length;a++){if(l=(o=r[a]).instance,u=o.currentTarget,o=o.listener,l!==s&&i.isPropagationStopped())break e;Li(i,o,u),s=l}}}if(Mt)throw e=Ut,Mt=!1,Ut=null,e}function Ui(e,t){var n=t[fs];void 0===n&&(n=t[fs]=new Set);var r=e+"__bubble";n.has(r)||(zi(t,e,2,!1),n.add(r))}function Fi(e,t,n){var r=0;t&&(r|=4),zi(n,e,r,t)}var Vi="_reactListening"+Math.random().toString(36).slice(2);function ji(e){if(!e[Vi]){e[Vi]=!0,ie.forEach((function(t){"selectionchange"!==t&&(Oi.has(t)||Fi(t,!1,e),Fi(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Vi]||(t[Vi]=!0,Fi("selectionchange",!1,t))}}function zi(e,t,n,r){switch(Qn(t)){case 1:var i=Hn;break;case 4:i=qn;break;default:i=Kn}n=i.bind(null,t,n,e),i=void 0,!Rt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Bi(e,t,n,r,i){var s=r;if(!(1&t||2&t||null===r))e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var o=r.stateNode.containerInfo;if(o===i||8===o.nodeType&&o.parentNode===i)break;if(4===a)for(a=r.return;null!==a;){var l=a.tag;if((3===l||4===l)&&((l=a.stateNode.containerInfo)===i||8===l.nodeType&&l.parentNode===i))return;a=a.return}for(;null!==o;){if(null===(a=gs(o)))return;if(5===(l=a.tag)||6===l){r=s=a;continue e}o=o.parentNode}}r=r.return}Nt((function(){var r=s,i=wt(n),a=[];e:{var o=xi.get(e);if(void 0!==o){var l=lr,u=e;switch(e){case"keypress":if(0===er(n))break e;case"keydown":case"keyup":l=Tr;break;case"focusin":u="focus",l=pr;break;case"focusout":u="blur",l=pr;break;case"beforeblur":case"afterblur":l=pr;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":l=dr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":l=fr;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":l=Ir;break;case ki:case Ti:case Ci:l=mr;break;case Ii:l=xr;break;case"scroll":l=cr;break;case"wheel":l=Ar;break;case"copy":case"cut":case"paste":l=yr;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":l=Cr}var c=!!(4&t),h=!c&&"scroll"===e,d=c?null!==o?o+"Capture":null:o;c=[];for(var f,p=r;null!==p;){var m=(f=p).stateNode;if(5===f.tag&&null!==m&&(f=m,null!==d&&(null!=(m=At(p,d))&&c.push($i(p,m,f)))),h)break;p=p.return}0<c.length&&(o=new l(o,u,null,n,i),a.push({event:o,listeners:c}))}}if(!(7&t)){if(l="mouseout"===e||"pointerout"===e,(!(o="mouseover"===e||"pointerover"===e)||n===vt||!(u=n.relatedTarget||n.fromElement)||!gs(u)&&!u[ds])&&(l||o)&&(o=i.window===i?i:(o=i.ownerDocument)?o.defaultView||o.parentWindow:window,l?(l=r,null!==(u=(u=n.relatedTarget||n.toElement)?gs(u):null)&&(u!==(h=jt(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(l=null,u=r),l!==u)){if(c=dr,m="onMouseLeave",d="onMouseEnter",p="mouse","pointerout"!==e&&"pointerover"!==e||(c=Cr,m="onPointerLeave",d="onPointerEnter",p="pointer"),h=null==l?o:vs(l),f=null==u?o:vs(u),(o=new c(m,p+"leave",l,n,i)).target=h,o.relatedTarget=f,m=null,gs(i)===r&&((c=new c(d,p+"enter",u,n,i)).target=f,c.relatedTarget=h,m=c),h=m,l&&u)e:{for(d=u,p=0,f=c=l;f;f=qi(f))p++;for(f=0,m=d;m;m=qi(m))f++;for(;0<p-f;)c=qi(c),p--;for(;0<f-p;)d=qi(d),f--;for(;p--;){if(c===d||null!==d&&c===d.alternate)break e;c=qi(c),d=qi(d)}c=null}else c=null;null!==l&&Ki(a,o,l,c,!1),null!==u&&null!==h&&Ki(a,h,u,c,!0)}if("select"===(l=(o=r?vs(r):window).nodeName&&o.nodeName.toLowerCase())||"input"===l&&"file"===o.type)var g=Wr;else if(Br(o))if(Qr)g=ii;else{g=ni;var y=ti}else(l=o.nodeName)&&"input"===l.toLowerCase()&&("checkbox"===o.type||"radio"===o.type)&&(g=ri);switch(g&&(g=g(e,r))?$r(a,g,n,i):(y&&y(e,o,r),"focusout"===e&&(y=o._wrapperState)&&y.controlled&&"number"===o.type&&Je(o,"number",o.value)),y=r?vs(r):window,e){case"focusin":(Br(y)||"true"===y.contentEditable)&&(pi=y,mi=r,gi=null);break;case"focusout":gi=mi=pi=null;break;case"mousedown":yi=!0;break;case"contextmenu":case"mouseup":case"dragend":yi=!1,vi(a,n,i);break;case"selectionchange":if(fi)break;case"keydown":case"keyup":vi(a,n,i)}var v;if(Pr)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else jr?Fr(e,n)&&(w="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(w="onCompositionStart");w&&(Lr&&"ko"!==n.locale&&(jr||"onCompositionStart"!==w?"onCompositionEnd"===w&&jr&&(v=Zn()):(Yn="value"in(Xn=i)?Xn.value:Xn.textContent,jr=!0)),0<(y=Hi(r,w)).length&&(w=new vr(w,e,null,n,i),a.push({event:w,listeners:y}),v?w.data=v:null!==(v=Vr(n))&&(w.data=v))),(v=Or?function(e,t){switch(e){case"compositionend":return Vr(t);case"keypress":return 32!==t.which?null:(Ur=!0,Mr);case"textInput":return(e=t.data)===Mr&&Ur?null:e;default:return null}}(e,n):function(e,t){if(jr)return"compositionend"===e||!Pr&&Fr(e,t)?(e=Zn(),Jn=Yn=Xn=null,jr=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Lr&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Hi(r,"onBeforeInput")).length&&(i=new vr("onBeforeInput","beforeinput",null,n,i),a.push({event:i,listeners:r}),i.data=v))}Mi(a,t)}))}function $i(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hi(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,s=i.stateNode;5===i.tag&&null!==s&&(i=s,null!=(s=At(e,n))&&r.unshift($i(e,s,i)),null!=(s=At(e,t))&&r.push($i(e,s,i))),e=e.return}return r}function qi(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Ki(e,t,n,r,i){for(var s=t._reactName,a=[];null!==n&&n!==r;){var o=n,l=o.alternate,u=o.stateNode;if(null!==l&&l===r)break;5===o.tag&&null!==u&&(o=u,i?null!=(l=At(n,s))&&a.unshift($i(n,l,o)):i||null!=(l=At(n,s))&&a.push($i(n,l,o))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Gi=/\r\n?/g,Wi=/\u0000|\uFFFD/g;function Qi(e){return("string"==typeof e?e:""+e).replace(Gi,"\n").replace(Wi,"")}function Xi(e,t,n){if(t=Qi(t),Qi(e)!==t&&n)throw Error(re(425))}function Yi(){}var Ji=null,Zi=null;function es(e,t){return"textarea"===e||"noscript"===e||"string"==typeof t.children||"number"==typeof t.children||"object"==typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ts="function"==typeof setTimeout?setTimeout:void 0,ns="function"==typeof clearTimeout?clearTimeout:void 0,rs="function"==typeof Promise?Promise:void 0,is="function"==typeof queueMicrotask?queueMicrotask:void 0!==rs?function(e){return rs.resolve(null).then(e).catch(ss)}:ts;function ss(e){setTimeout((function(){throw e}))}function as(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0===r)return e.removeChild(i),void zn(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=i}while(n);zn(t)}function os(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ls(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var us=Math.random().toString(36).slice(2),cs="__reactFiber$"+us,hs="__reactProps$"+us,ds="__reactContainer$"+us,fs="__reactEvents$"+us,ps="__reactListeners$"+us,ms="__reactHandles$"+us;function gs(e){var t=e[cs];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ds]||n[cs]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ls(e);null!==e;){if(n=e[cs])return n;e=ls(e)}return t}n=(e=n).parentNode}return null}function ys(e){return!(e=e[cs]||e[ds])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function vs(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(re(33))}function ws(e){return e[hs]||null}var bs=[],_s=-1;function Es(e){return{current:e}}function Ss(e){0>_s||(e.current=bs[_s],bs[_s]=null,_s--)}function ks(e,t){_s++,bs[_s]=e.current,e.current=t}var Ts={},Cs=Es(Ts),Is=Es(!1),xs=Ts;function Ns(e,t){var n=e.type.contextTypes;if(!n)return Ts;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i,s={};for(i in n)s[i]=t[i];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function As(e){return null!=(e=e.childContextTypes)}function Rs(){Ss(Is),Ss(Cs)}function Ps(e,t,n){if(Cs.current!==Ts)throw Error(re(168));ks(Cs,t),ks(Is,n)}function Ds(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!=typeof r.getChildContext)return n;for(var i in r=r.getChildContext())if(!(i in t))throw Error(re(108,ze(e)||"Unknown",i));return Le({},n,r)}function Os(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ts,xs=Cs.current,ks(Cs,e),ks(Is,Is.current),!0}function Ls(e,t,n){var r=e.stateNode;if(!r)throw Error(re(169));n?(e=Ds(e,t,xs),r.__reactInternalMemoizedMergedChildContext=e,Ss(Is),Ss(Cs),ks(Cs,e)):Ss(Is),ks(Is,n)}var Ms=null,Us=!1,Fs=!1;function Vs(e){null===Ms?Ms=[e]:Ms.push(e)}function js(){if(!Fs&&null!==Ms){Fs=!0;var e=0,t=vn;try{var n=Ms;for(vn=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ms=null,Us=!1}catch(i){throw null!==Ms&&(Ms=Ms.slice(e+1)),qt(Yt,js),i}finally{vn=t,Fs=!1}}return null}var zs=[],Bs=0,$s=null,Hs=0,qs=[],Ks=0,Gs=null,Ws=1,Qs="";function Xs(e,t){zs[Bs++]=Hs,zs[Bs++]=$s,$s=e,Hs=t}function Ys(e,t,n){qs[Ks++]=Ws,qs[Ks++]=Qs,qs[Ks++]=Gs,Gs=e;var r=Ws;e=Qs;var i=32-sn(r)-1;r&=~(1<<i),n+=1;var s=32-sn(t)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,Ws=1<<32-sn(t)+i|n<<i|r,Qs=s+e}else Ws=1<<s|n<<i|r,Qs=e}function Js(e){null!==e.return&&(Xs(e,1),Ys(e,1,0))}function Zs(e){for(;e===$s;)$s=zs[--Bs],zs[Bs]=null,Hs=zs[--Bs],zs[Bs]=null;for(;e===Gs;)Gs=qs[--Ks],qs[Ks]=null,Qs=qs[--Ks],qs[Ks]=null,Ws=qs[--Ks],qs[Ks]=null}var ea=null,ta=null,na=!1,ra=null;function ia(e,t){var n=Nc(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function sa(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ea=e,ta=os(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ea=e,ta=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Gs?{id:Ws,overflow:Qs}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Nc(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ea=e,ta=null,!0);default:return!1}}function aa(e){return!(!(1&e.mode)||128&e.flags)}function oa(e){if(na){var t=ta;if(t){var n=t;if(!sa(e,t)){if(aa(e))throw Error(re(418));t=os(n.nextSibling);var r=ea;t&&sa(e,t)?ia(r,n):(e.flags=-4097&e.flags|2,na=!1,ea=e)}}else{if(aa(e))throw Error(re(418));e.flags=-4097&e.flags|2,na=!1,ea=e}}}function la(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ea=e}function ua(e){if(e!==ea)return!1;if(!na)return la(e),na=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!es(e.type,e.memoizedProps)),t&&(t=ta)){if(aa(e))throw ca(),Error(re(418));for(;t;)ia(e,t),t=os(t.nextSibling)}if(la(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(re(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ta=os(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ta=null}}else ta=ea?os(e.stateNode.nextSibling):null;return!0}function ca(){for(var e=ta;e;)e=os(e.nextSibling)}function ha(){ta=ea=null,na=!1}function da(e){null===ra?ra=[e]:ra.push(e)}var fa=ve.ReactCurrentBatchConfig;function pa(e,t,n){if(null!==(e=n.ref)&&"function"!=typeof e&&"object"!=typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(re(309));var r=n.stateNode}if(!r)throw Error(re(147,e));var i=r,s=""+e;return null!==t&&null!==t.ref&&"function"==typeof t.ref&&t.ref._stringRef===s?t.ref:((t=function(e){var t=i.refs;null===e?delete t[s]:t[s]=e})._stringRef=s,t)}if("string"!=typeof e)throw Error(re(284));if(!n._owner)throw Error(re(290,e))}return e}function ma(e,t){throw e=Object.prototype.toString.call(t),Error(re(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ga(e){return(0,e._init)(e._payload)}function ya(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function i(e,t){return(e=Rc(e,t)).index=0,e.sibling=null,e}function s(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function a(t){return e&&null===t.alternate&&(t.flags|=2),t}function o(e,t,n,r){return null===t||6!==t.tag?((t=Lc(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function l(e,t,n,r){var s=n.type;return s===_e?c(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===s||"object"==typeof s&&null!==s&&s.$$typeof===Ae&&ga(s)===t.type)?((r=i(t,n.props)).ref=pa(e,t,n),r.return=e,r):((r=Pc(n.type,n.key,n.props,null,e.mode,r)).ref=pa(e,t,n),r.return=e,r)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Mc(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function c(e,t,n,r,s){return null===t||7!==t.tag?((t=Dc(n,e.mode,r,s)).return=e,t):((t=i(t,n)).return=e,t)}function h(e,t,n){if("string"==typeof t&&""!==t||"number"==typeof t)return(t=Lc(""+t,e.mode,n)).return=e,t;if("object"==typeof t&&null!==t){switch(t.$$typeof){case we:return(n=Pc(t.type,t.key,t.props,null,e.mode,n)).ref=pa(e,null,t),n.return=e,n;case be:return(t=Mc(t,e.mode,n)).return=e,t;case Ae:return h(e,(0,t._init)(t._payload),n)}if(Ze(t)||De(t))return(t=Dc(t,e.mode,n,null)).return=e,t;ma(e,t)}return null}function d(e,t,n,r){var i=null!==t?t.key:null;if("string"==typeof n&&""!==n||"number"==typeof n)return null!==i?null:o(e,t,""+n,r);if("object"==typeof n&&null!==n){switch(n.$$typeof){case we:return n.key===i?l(e,t,n,r):null;case be:return n.key===i?u(e,t,n,r):null;case Ae:return d(e,t,(i=n._init)(n._payload),r)}if(Ze(n)||De(n))return null!==i?null:c(e,t,n,r,null);ma(e,n)}return null}function f(e,t,n,r,i){if("string"==typeof r&&""!==r||"number"==typeof r)return o(t,e=e.get(n)||null,""+r,i);if("object"==typeof r&&null!==r){switch(r.$$typeof){case we:return l(t,e=e.get(null===r.key?n:r.key)||null,r,i);case be:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case Ae:return f(e,t,n,(0,r._init)(r._payload),i)}if(Ze(r)||De(r))return c(t,e=e.get(n)||null,r,i,null);ma(t,r)}return null}return function o(l,u,c,p){if("object"==typeof c&&null!==c&&c.type===_e&&null===c.key&&(c=c.props.children),"object"==typeof c&&null!==c){switch(c.$$typeof){case we:e:{for(var m=c.key,g=u;null!==g;){if(g.key===m){if((m=c.type)===_e){if(7===g.tag){n(l,g.sibling),(u=i(g,c.props.children)).return=l,l=u;break e}}else if(g.elementType===m||"object"==typeof m&&null!==m&&m.$$typeof===Ae&&ga(m)===g.type){n(l,g.sibling),(u=i(g,c.props)).ref=pa(l,g,c),u.return=l,l=u;break e}n(l,g);break}t(l,g),g=g.sibling}c.type===_e?((u=Dc(c.props.children,l.mode,p,c.key)).return=l,l=u):((p=Pc(c.type,c.key,c.props,null,l.mode,p)).ref=pa(l,u,c),p.return=l,l=p)}return a(l);case be:e:{for(g=c.key;null!==u;){if(u.key===g){if(4===u.tag&&u.stateNode.containerInfo===c.containerInfo&&u.stateNode.implementation===c.implementation){n(l,u.sibling),(u=i(u,c.children||[])).return=l,l=u;break e}n(l,u);break}t(l,u),u=u.sibling}(u=Mc(c,l.mode,p)).return=l,l=u}return a(l);case Ae:return o(l,u,(g=c._init)(c._payload),p)}if(Ze(c))return function(i,a,o,l){for(var u=null,c=null,p=a,m=a=0,g=null;null!==p&&m<o.length;m++){p.index>m?(g=p,p=null):g=p.sibling;var y=d(i,p,o[m],l);if(null===y){null===p&&(p=g);break}e&&p&&null===y.alternate&&t(i,p),a=s(y,a,m),null===c?u=y:c.sibling=y,c=y,p=g}if(m===o.length)return n(i,p),na&&Xs(i,m),u;if(null===p){for(;m<o.length;m++)null!==(p=h(i,o[m],l))&&(a=s(p,a,m),null===c?u=p:c.sibling=p,c=p);return na&&Xs(i,m),u}for(p=r(i,p);m<o.length;m++)null!==(g=f(p,i,m,o[m],l))&&(e&&null!==g.alternate&&p.delete(null===g.key?m:g.key),a=s(g,a,m),null===c?u=g:c.sibling=g,c=g);return e&&p.forEach((function(e){return t(i,e)})),na&&Xs(i,m),u}(l,u,c,p);if(De(c))return function(i,a,o,l){var u=De(o);if("function"!=typeof u)throw Error(re(150));if(null==(o=u.call(o)))throw Error(re(151));for(var c=u=null,p=a,m=a=0,g=null,y=o.next();null!==p&&!y.done;m++,y=o.next()){p.index>m?(g=p,p=null):g=p.sibling;var v=d(i,p,y.value,l);if(null===v){null===p&&(p=g);break}e&&p&&null===v.alternate&&t(i,p),a=s(v,a,m),null===c?u=v:c.sibling=v,c=v,p=g}if(y.done)return n(i,p),na&&Xs(i,m),u;if(null===p){for(;!y.done;m++,y=o.next())null!==(y=h(i,y.value,l))&&(a=s(y,a,m),null===c?u=y:c.sibling=y,c=y);return na&&Xs(i,m),u}for(p=r(i,p);!y.done;m++,y=o.next())null!==(y=f(p,i,m,y.value,l))&&(e&&null!==y.alternate&&p.delete(null===y.key?m:y.key),a=s(y,a,m),null===c?u=y:c.sibling=y,c=y);return e&&p.forEach((function(e){return t(i,e)})),na&&Xs(i,m),u}(l,u,c,p);ma(l,c)}return"string"==typeof c&&""!==c||"number"==typeof c?(c=""+c,null!==u&&6===u.tag?(n(l,u.sibling),(u=i(u,c)).return=l,l=u):(n(l,u),(u=Lc(c,l.mode,p)).return=l,l=u),a(l)):n(l,u)}}var va=ya(!0),wa=ya(!1),ba=Es(null),_a=null,Ea=null,Sa=null;function ka(){Sa=Ea=_a=null}function Ta(e){var t=ba.current;Ss(ba),e._currentValue=t}function Ca(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Ia(e,t){_a=e,Sa=Ea=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(yl=!0),e.firstContext=null)}function xa(e){var t=e._currentValue;if(Sa!==e)if(e={context:e,memoizedValue:t,next:null},null===Ea){if(null===_a)throw Error(re(308));Ea=e,_a.dependencies={lanes:0,firstContext:e}}else Ea=Ea.next=e;return t}var Na=null;function Aa(e){null===Na?Na=[e]:Na.push(e)}function Ra(e,t,n,r){var i=t.interleaved;return null===i?(n.next=n,Aa(t)):(n.next=i.next,i.next=n),t.interleaved=n,Pa(e,r)}function Pa(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Da=!1;function Oa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function La(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ma(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Ua(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,2&Cu){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Pa(e,n)}return null===(i=r.interleaved)?(t.next=t,Aa(r)):(t.next=i.next,i.next=t),r.interleaved=t,Pa(e,n)}function Fa(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yn(e,n)}}function Va(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,s=null;if(null!==(n=n.firstBaseUpdate)){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===s?i=s=a:s=s.next=a,n=n.next}while(null!==n);null===s?i=s=t:s=s.next=t}else i=s=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ja(e,t,n,r){var i=e.updateQueue;Da=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,o=i.shared.pending;if(null!==o){i.shared.pending=null;var l=o,u=l.next;l.next=null,null===a?s=u:a.next=u,a=l;var c=e.alternate;null!==c&&((o=(c=c.updateQueue).lastBaseUpdate)!==a&&(null===o?c.firstBaseUpdate=u:o.next=u,c.lastBaseUpdate=l))}if(null!==s){var h=i.baseState;for(a=0,c=u=l=null,o=s;;){var d=o.lane,f=o.eventTime;if((r&d)===d){null!==c&&(c=c.next={eventTime:f,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var p=e,m=o;switch(d=t,f=n,m.tag){case 1:if("function"==typeof(p=m.payload)){h=p.call(f,h,d);break e}h=p;break e;case 3:p.flags=-65537&p.flags|128;case 0:if(null==(d="function"==typeof(p=m.payload)?p.call(f,h,d):p))break e;h=Le({},h,d);break e;case 2:Da=!0}}null!==o.callback&&0!==o.lane&&(e.flags|=64,null===(d=i.effects)?i.effects=[o]:d.push(o))}else f={eventTime:f,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},null===c?(u=c=f,l=h):c=c.next=f,a|=d;if(null===(o=o.next)){if(null===(o=i.shared.pending))break;o=(d=o).next,d.next=null,i.lastBaseUpdate=d,i.shared.pending=null}}if(null===c&&(l=h),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,null!==(t=i.shared.interleaved)){i=t;do{a|=i.lane,i=i.next}while(i!==t)}else null===s&&(i.shared.lanes=0);Ou|=a,e.lanes=a,e.memoizedState=h}}function za(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(null!==i){if(r.callback=null,r=n,"function"!=typeof i)throw Error(re(191,i));i.call(r)}}}var Ba={},$a=Es(Ba),Ha=Es(Ba),qa=Es(Ba);function Ka(e){if(e===Ba)throw Error(re(174));return e}function Ga(e,t){switch(ks(qa,t),ks(Ha,e),ks($a,Ba),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:at(null,"");break;default:t=at(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ss($a),ks($a,t)}function Wa(){Ss($a),Ss(Ha),Ss(qa)}function Qa(e){Ka(qa.current);var t=Ka($a.current),n=at(t,e.type);t!==n&&(ks(Ha,e),ks($a,n))}function Xa(e){Ha.current===e&&(Ss($a),Ss(Ha))}var Ya=Es(0);function Ja(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(128&t.flags)return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Za=[];function eo(){for(var e=0;e<Za.length;e++)Za[e]._workInProgressVersionPrimary=null;Za.length=0}var to=ve.ReactCurrentDispatcher,no=ve.ReactCurrentBatchConfig,ro=0,io=null,so=null,ao=null,oo=!1,lo=!1,uo=0,co=0;function ho(){throw Error(re(321))}function fo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!si(e[n],t[n]))return!1;return!0}function po(e,t,n,r,i,s){if(ro=s,io=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,to.current=null===e||null===e.memoizedState?Yo:Jo,e=n(r,i),lo){s=0;do{if(lo=!1,uo=0,25<=s)throw Error(re(301));s+=1,ao=so=null,t.updateQueue=null,to.current=Zo,e=n(r,i)}while(lo)}if(to.current=Xo,t=null!==so&&null!==so.next,ro=0,ao=so=io=null,oo=!1,t)throw Error(re(300));return e}function mo(){var e=0!==uo;return uo=0,e}function go(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ao?io.memoizedState=ao=e:ao=ao.next=e,ao}function yo(){if(null===so){var e=io.alternate;e=null!==e?e.memoizedState:null}else e=so.next;var t=null===ao?io.memoizedState:ao.next;if(null!==t)ao=t,so=e;else{if(null===e)throw Error(re(310));e={memoizedState:(so=e).memoizedState,baseState:so.baseState,baseQueue:so.baseQueue,queue:so.queue,next:null},null===ao?io.memoizedState=ao=e:ao=ao.next=e}return ao}function vo(e,t){return"function"==typeof t?t(e):t}function wo(e){var t=yo(),n=t.queue;if(null===n)throw Error(re(311));n.lastRenderedReducer=e;var r=so,i=r.baseQueue,s=n.pending;if(null!==s){if(null!==i){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(null!==i){s=i.next,r=r.baseState;var o=a=null,l=null,u=s;do{var c=u.lane;if((ro&c)===c)null!==l&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};null===l?(o=l=h,a=r):l=l.next=h,io.lanes|=c,Ou|=c}u=u.next}while(null!==u&&u!==s);null===l?a=r:l.next=o,si(r,t.memoizedState)||(yl=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=l,n.lastRenderedState=r}if(null!==(e=n.interleaved)){i=e;do{s=i.lane,io.lanes|=s,Ou|=s,i=i.next}while(i!==e)}else null===i&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bo(e){var t=yo(),n=t.queue;if(null===n)throw Error(re(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(null!==i){n.pending=null;var a=i=i.next;do{s=e(s,a.action),a=a.next}while(a!==i);si(s,t.memoizedState)||(yl=!0),t.memoizedState=s,null===t.baseQueue&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function _o(){}function Eo(e,t){var n=io,r=yo(),i=t(),s=!si(r.memoizedState,i);if(s&&(r.memoizedState=i,yl=!0),r=r.queue,Oo(To.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||null!==ao&&1&ao.memoizedState.tag){if(n.flags|=2048,No(9,ko.bind(null,n,r,i,t),void 0,null),null===Iu)throw Error(re(349));30&ro||So(n,t,i)}return i}function So(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=io.updateQueue)?(t={lastEffect:null,stores:null},io.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function ko(e,t,n,r){t.value=n,t.getSnapshot=r,Co(t)&&Io(e)}function To(e,t,n){return n((function(){Co(t)&&Io(e)}))}function Co(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!si(e,n)}catch(r){return!0}}function Io(e){var t=Pa(e,1);null!==t&&ec(t,e,1,-1)}function xo(e){var t=go();return"function"==typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:e},t.queue=e,e=e.dispatch=Ko.bind(null,io,e),[t.memoizedState,e]}function No(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=io.updateQueue)?(t={lastEffect:null,stores:null},io.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ao(){return yo().memoizedState}function Ro(e,t,n,r){var i=go();io.flags|=e,i.memoizedState=No(1|t,n,void 0,void 0===r?null:r)}function Po(e,t,n,r){var i=yo();r=void 0===r?null:r;var s=void 0;if(null!==so){var a=so.memoizedState;if(s=a.destroy,null!==r&&fo(r,a.deps))return void(i.memoizedState=No(t,n,s,r))}io.flags|=e,i.memoizedState=No(1|t,n,s,r)}function Do(e,t){return Ro(8390656,8,e,t)}function Oo(e,t){return Po(2048,8,e,t)}function Lo(e,t){return Po(4,2,e,t)}function Mo(e,t){return Po(4,4,e,t)}function Uo(e,t){return"function"==typeof t?(e=e(),t(e),function(){t(null)}):null!=t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Fo(e,t,n){return n=null!=n?n.concat([e]):null,Po(4,4,Uo.bind(null,t,e),n)}function Vo(){}function jo(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&fo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function zo(e,t){var n=yo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&fo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Bo(e,t,n){return 21&ro?(si(n,t)||(n=pn(),io.lanes|=n,Ou|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,yl=!0),e.memoizedState=n)}function $o(e,t){var n=vn;vn=0!==n&&4>n?n:4,e(!0);var r=no.transition;no.transition={};try{e(!1),t()}finally{vn=n,no.transition=r}}function Ho(){return yo().memoizedState}function qo(e,t,n){var r=Zu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Go(e))Wo(t,n);else if(null!==(n=Ra(e,t,n,r))){ec(n,e,r,Ju()),Qo(n,t,r)}}function Ko(e,t,n){var r=Zu(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Go(e))Wo(t,i);else{var s=e.alternate;if(0===e.lanes&&(null===s||0===s.lanes)&&null!==(s=t.lastRenderedReducer))try{var a=t.lastRenderedState,o=s(a,n);if(i.hasEagerState=!0,i.eagerState=o,si(o,a)){var l=t.interleaved;return null===l?(i.next=i,Aa(t)):(i.next=l.next,l.next=i),void(t.interleaved=i)}}catch(u){}null!==(n=Ra(e,t,i,r))&&(ec(n,e,r,i=Ju()),Qo(n,t,r))}}function Go(e){var t=e.alternate;return e===io||null!==t&&t===io}function Wo(e,t){lo=oo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Qo(e,t,n){if(4194240&n){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yn(e,n)}}var Xo={readContext:xa,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useInsertionEffect:ho,useLayoutEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useMutableSource:ho,useSyncExternalStore:ho,useId:ho,unstable_isNewReconciler:!1},Yo={readContext:xa,useCallback:function(e,t){return go().memoizedState=[e,void 0===t?null:t],e},useContext:xa,useEffect:Do,useImperativeHandle:function(e,t,n){return n=null!=n?n.concat([e]):null,Ro(4194308,4,Uo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ro(4,2,e,t)},useMemo:function(e,t){var n=go();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=go();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=qo.bind(null,io,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},go().memoizedState=e},useState:xo,useDebugValue:Vo,useDeferredValue:function(e){return go().memoizedState=e},useTransition:function(){var e=xo(!1),t=e[0];return e=$o.bind(null,e[1]),go().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=io,i=go();if(na){if(void 0===n)throw Error(re(407));n=n()}else{if(n=t(),null===Iu)throw Error(re(349));30&ro||So(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,Do(To.bind(null,r,s,e),[e]),r.flags|=2048,No(9,ko.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=go(),t=Iu.identifierPrefix;if(na){var n=Qs;t=":"+t+"R"+(n=(Ws&~(1<<32-sn(Ws)-1)).toString(32)+n),0<(n=uo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=co++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Jo={readContext:xa,useCallback:jo,useContext:xa,useEffect:Oo,useImperativeHandle:Fo,useInsertionEffect:Lo,useLayoutEffect:Mo,useMemo:zo,useReducer:wo,useRef:Ao,useState:function(){return wo(vo)},useDebugValue:Vo,useDeferredValue:function(e){return Bo(yo(),so.memoizedState,e)},useTransition:function(){return[wo(vo)[0],yo().memoizedState]},useMutableSource:_o,useSyncExternalStore:Eo,useId:Ho,unstable_isNewReconciler:!1},Zo={readContext:xa,useCallback:jo,useContext:xa,useEffect:Oo,useImperativeHandle:Fo,useInsertionEffect:Lo,useLayoutEffect:Mo,useMemo:zo,useReducer:bo,useRef:Ao,useState:function(){return bo(vo)},useDebugValue:Vo,useDeferredValue:function(e){var t=yo();return null===so?t.memoizedState=e:Bo(t,so.memoizedState,e)},useTransition:function(){return[bo(vo)[0],yo().memoizedState]},useMutableSource:_o,useSyncExternalStore:Eo,useId:Ho,unstable_isNewReconciler:!1};function el(e,t){if(e&&e.defaultProps){for(var n in t=Le({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function tl(e,t,n,r){n=null==(n=n(r,t=e.memoizedState))?t:Le({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var nl={isMounted:function(e){return!!(e=e._reactInternals)&&jt(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ju(),i=Zu(e),s=Ma(r,i);s.payload=t,null!=n&&(s.callback=n),null!==(t=Ua(e,s,i))&&(ec(t,e,i,r),Fa(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ju(),i=Zu(e),s=Ma(r,i);s.tag=1,s.payload=t,null!=n&&(s.callback=n),null!==(t=Ua(e,s,i))&&(ec(t,e,i,r),Fa(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ju(),r=Zu(e),i=Ma(n,r);i.tag=2,null!=t&&(i.callback=t),null!==(t=Ua(e,i,r))&&(ec(t,e,r,n),Fa(t,e,r))}};function rl(e,t,n,r,i,s,a){return"function"==typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,s,a):!t.prototype||!t.prototype.isPureReactComponent||(!ai(n,r)||!ai(i,s))}function il(e,t,n){var r=!1,i=Ts,s=t.contextType;return"object"==typeof s&&null!==s?s=xa(s):(i=As(t)?xs:Cs.current,s=(r=null!=(r=t.contextTypes))?Ns(e,i):Ts),t=new t(n,s),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=nl,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function sl(e,t,n,r){e=t.state,"function"==typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"==typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&nl.enqueueReplaceState(t,t.state,null)}function al(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Oa(e);var s=t.contextType;"object"==typeof s&&null!==s?i.context=xa(s):(s=As(t)?xs:Cs.current,i.context=Ns(e,s)),i.state=e.memoizedState,"function"==typeof(s=t.getDerivedStateFromProps)&&(tl(e,t,s,n),i.state=e.memoizedState),"function"==typeof t.getDerivedStateFromProps||"function"==typeof i.getSnapshotBeforeUpdate||"function"!=typeof i.UNSAFE_componentWillMount&&"function"!=typeof i.componentWillMount||(t=i.state,"function"==typeof i.componentWillMount&&i.componentWillMount(),"function"==typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),t!==i.state&&nl.enqueueReplaceState(i,i.state,null),ja(e,n,i,r),i.state=e.memoizedState),"function"==typeof i.componentDidMount&&(e.flags|=4194308)}function ol(e,t){try{var n="",r=t;do{n+=Ve(r),r=r.return}while(r);var i=n}catch(s){i="\nError generating stack: "+s.message+"\n"+s.stack}return{value:e,source:t,stack:i,digest:null}}function ll(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function ul(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var cl="function"==typeof WeakMap?WeakMap:Map;function hl(e,t,n){(n=Ma(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Bu||(Bu=!0,$u=r),ul(0,t)},n}function dl(e,t,n){(n=Ma(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"==typeof r){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ul(0,t)}}var s=e.stateNode;return null!==s&&"function"==typeof s.componentDidCatch&&(n.callback=function(){ul(0,t),"function"!=typeof r&&(null===Hu?Hu=new Set([this]):Hu.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function fl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new cl;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=Sc.bind(null,e,t,n),t.then(e,e))}function pl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function ml(e,t,n,r,i){return 1&e.mode?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Ma(-1,1)).tag=2,Ua(n,t,1))),n.lanes|=1),e)}var gl=ve.ReactCurrentOwner,yl=!1;function vl(e,t,n,r){t.child=null===e?wa(t,null,n,r):va(t,e.child,n,r)}function wl(e,t,n,r,i){n=n.render;var s=t.ref;return Ia(t,i),r=po(e,t,n,r,s,i),n=mo(),null===e||yl?(na&&n&&Js(t),t.flags|=1,vl(e,t,r,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bl(e,t,i))}function bl(e,t,n,r,i){if(null===e){var s=n.type;return"function"!=typeof s||Ac(s)||void 0!==s.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Pc(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=s,_l(e,t,s,r,i))}if(s=e.child,0===(e.lanes&i)){var a=s.memoizedProps;if((n=null!==(n=n.compare)?n:ai)(a,r)&&e.ref===t.ref)return Bl(e,t,i)}return t.flags|=1,(e=Rc(s,r)).ref=t.ref,e.return=t,t.child=e}function _l(e,t,n,r,i){if(null!==e){var s=e.memoizedProps;if(ai(s,r)&&e.ref===t.ref){if(yl=!1,t.pendingProps=r=s,0===(e.lanes&i))return t.lanes=e.lanes,Bl(e,t,i);131072&e.flags&&(yl=!0)}}return kl(e,t,n,r,i)}function El(e,t,n){var r=t.pendingProps,i=r.children,s=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(1&t.mode){if(!(1073741824&n))return e=null!==s?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ks(Ru,Au),Au|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==s?s.baseLanes:n,ks(Ru,Au),Au|=r}else t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ks(Ru,Au),Au|=n;else null!==s?(r=s.baseLanes|n,t.memoizedState=null):r=n,ks(Ru,Au),Au|=r;return vl(e,t,i,n),t.child}function Sl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function kl(e,t,n,r,i){var s=As(n)?xs:Cs.current;return s=Ns(t,s),Ia(t,i),n=po(e,t,n,r,s,i),r=mo(),null===e||yl?(na&&r&&Js(t),t.flags|=1,vl(e,t,n,i),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Bl(e,t,i))}function Tl(e,t,n,r,i){if(As(n)){var s=!0;Os(t)}else s=!1;if(Ia(t,i),null===t.stateNode)zl(e,t),il(t,n,r),al(t,n,r,i),r=!0;else if(null===e){var a=t.stateNode,o=t.memoizedProps;a.props=o;var l=a.context,u=n.contextType;"object"==typeof u&&null!==u?u=xa(u):u=Ns(t,u=As(n)?xs:Cs.current);var c=n.getDerivedStateFromProps,h="function"==typeof c||"function"==typeof a.getSnapshotBeforeUpdate;h||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(o!==r||l!==u)&&sl(t,a,r,u),Da=!1;var d=t.memoizedState;a.state=d,ja(t,r,a,i),l=t.memoizedState,o!==r||d!==l||Is.current||Da?("function"==typeof c&&(tl(t,n,c,r),l=t.memoizedState),(o=Da||rl(t,n,o,r,d,l,u))?(h||"function"!=typeof a.UNSAFE_componentWillMount&&"function"!=typeof a.componentWillMount||("function"==typeof a.componentWillMount&&a.componentWillMount(),"function"==typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"==typeof a.componentDidMount&&(t.flags|=4194308)):("function"==typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=u,r=o):("function"==typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,La(e,t),o=t.memoizedProps,u=t.type===t.elementType?o:el(t.type,o),a.props=u,h=t.pendingProps,d=a.context,"object"==typeof(l=n.contextType)&&null!==l?l=xa(l):l=Ns(t,l=As(n)?xs:Cs.current);var f=n.getDerivedStateFromProps;(c="function"==typeof f||"function"==typeof a.getSnapshotBeforeUpdate)||"function"!=typeof a.UNSAFE_componentWillReceiveProps&&"function"!=typeof a.componentWillReceiveProps||(o!==h||d!==l)&&sl(t,a,r,l),Da=!1,d=t.memoizedState,a.state=d,ja(t,r,a,i);var p=t.memoizedState;o!==h||d!==p||Is.current||Da?("function"==typeof f&&(tl(t,n,f,r),p=t.memoizedState),(u=Da||rl(t,n,u,r,d,p,l)||!1)?(c||"function"!=typeof a.UNSAFE_componentWillUpdate&&"function"!=typeof a.componentWillUpdate||("function"==typeof a.componentWillUpdate&&a.componentWillUpdate(r,p,l),"function"==typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,p,l)),"function"==typeof a.componentDidUpdate&&(t.flags|=4),"function"==typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!=typeof a.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=l,r=u):("function"!=typeof a.componentDidUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=4),"function"!=typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&d===e.memoizedState||(t.flags|=1024),r=!1)}return Cl(e,t,n,r,s,i)}function Cl(e,t,n,r,i,s){Sl(e,t);var a=!!(128&t.flags);if(!r&&!a)return i&&Ls(t,n,!1),Bl(e,t,s);r=t.stateNode,gl.current=t;var o=a&&"function"!=typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&a?(t.child=va(t,e.child,null,s),t.child=va(t,null,o,s)):vl(e,t,o,s),t.memoizedState=r.state,i&&Ls(t,n,!0),t.child}function Il(e){var t=e.stateNode;t.pendingContext?Ps(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ps(0,t.context,!1),Ga(e,t.containerInfo)}function xl(e,t,n,r,i){return ha(),da(i),t.flags|=256,vl(e,t,n,r),t.child}var Nl,Al,Rl,Pl,Dl={dehydrated:null,treeContext:null,retryLane:0};function Ol(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ll(e,t,n){var r,i=t.pendingProps,s=Ya.current,a=!1,o=!!(128&t.flags);if((r=o)||(r=(null===e||null!==e.memoizedState)&&!!(2&s)),r?(a=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(s|=1),ks(Ya,1&s),null===e)return oa(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(1&t.mode?"$!"===e.data?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=i.children,e=i.fallback,a?(i=t.mode,a=t.child,o={mode:"hidden",children:o},1&i||null===a?a=Oc(o,i,0,null):(a.childLanes=0,a.pendingProps=o),e=Dc(e,i,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Ol(n),t.memoizedState=Dl,e):Ml(t,o));if(null!==(s=e.memoizedState)&&null!==(r=s.dehydrated))return function(e,t,n,r,i,s,a){if(n)return 256&t.flags?(t.flags&=-257,Ul(e,t,a,r=ll(Error(re(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Oc({mode:"visible",children:r.children},i,0,null),(s=Dc(s,i,a,null)).flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,1&t.mode&&va(t,e.child,null,a),t.child.memoizedState=Ol(a),t.memoizedState=Dl,s);if(!(1&t.mode))return Ul(e,t,a,null);if("$!"===i.data){if(r=i.nextSibling&&i.nextSibling.dataset)var o=r.dgst;return r=o,Ul(e,t,a,r=ll(s=Error(re(419)),r,void 0))}if(o=0!==(a&e.childLanes),yl||o){if(null!==(r=Iu)){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}0!==(i=0!==(i&(r.suspendedLanes|a))?0:i)&&i!==s.retryLane&&(s.retryLane=i,Pa(e,i),ec(r,e,i,-1))}return fc(),Ul(e,t,a,r=ll(Error(re(421))))}return"$?"===i.data?(t.flags|=128,t.child=e.child,t=Tc.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ta=os(i.nextSibling),ea=t,na=!0,ra=null,null!==e&&(qs[Ks++]=Ws,qs[Ks++]=Qs,qs[Ks++]=Gs,Ws=e.id,Qs=e.overflow,Gs=t),t=Ml(t,r.children),t.flags|=4096,t)}(e,t,o,i,r,s,n);if(a){a=i.fallback,o=t.mode,r=(s=e.child).sibling;var l={mode:"hidden",children:i.children};return 1&o||t.child===s?(i=Rc(s,l)).subtreeFlags=14680064&s.subtreeFlags:((i=t.child).childLanes=0,i.pendingProps=l,t.deletions=null),null!==r?a=Rc(r,a):(a=Dc(a,o,n,null)).flags|=2,a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,o=null===(o=e.child.memoizedState)?Ol(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Dl,i}return e=(a=e.child).sibling,i=Rc(a,{mode:"visible",children:i.children}),!(1&t.mode)&&(i.lanes=n),i.return=t,i.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=i,t.memoizedState=null,i}function Ml(e,t){return(t=Oc({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Ul(e,t,n,r){return null!==r&&da(r),va(t,e.child,null,n),(e=Ml(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Fl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Ca(e.return,t,n)}function Vl(e,t,n,r,i){var s=e.memoizedState;null===s?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function jl(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(vl(e,t,r.children,n),2&(r=Ya.current))r=1&r|2,t.flags|=128;else{if(null!==e&&128&e.flags)e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Fl(e,n,t);else if(19===e.tag)Fl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ks(Ya,r),1&t.mode)switch(i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===Ja(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Vl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===Ja(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Vl(t,!0,n,null,s);break;case"together":Vl(t,!1,null,null,void 0);break;default:t.memoizedState=null}else t.memoizedState=null;return t.child}function zl(e,t){!(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Bl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ou|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(re(153));if(null!==t.child){for(n=Rc(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Rc(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function $l(e,t){if(!na)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Hl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=14680064&i.subtreeFlags,r|=14680064&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ql(e,t,n){var r=t.pendingProps;switch(Zs(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Hl(t),null;case 1:case 17:return As(t.type)&&Rs(),Hl(t),null;case 3:return r=t.stateNode,Wa(),Ss(Is),Ss(Cs),eo(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(ua(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&!(256&t.flags)||(t.flags|=1024,null!==ra&&(ic(ra),ra=null))),Al(e,t),Hl(t),null;case 5:Xa(t);var i=Ka(qa.current);if(n=t.type,null!==e&&null!=t.stateNode)Rl(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(re(166));return Hl(t),null}if(e=Ka($a.current),ua(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[cs]=t,r[hs]=s,e=!!(1&t.mode),n){case"dialog":Ui("cancel",r),Ui("close",r);break;case"iframe":case"object":case"embed":Ui("load",r);break;case"video":case"audio":for(i=0;i<Di.length;i++)Ui(Di[i],r);break;case"source":Ui("error",r);break;case"img":case"image":case"link":Ui("error",r),Ui("load",r);break;case"details":Ui("toggle",r);break;case"input":We(r,s),Ui("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Ui("invalid",r);break;case"textarea":nt(r,s),Ui("invalid",r)}for(var a in gt(n,s),i=null,s)if(s.hasOwnProperty(a)){var o=s[a];"children"===a?"string"==typeof o?r.textContent!==o&&(!0!==s.suppressHydrationWarning&&Xi(r.textContent,o,e),i=["children",o]):"number"==typeof o&&r.textContent!==""+o&&(!0!==s.suppressHydrationWarning&&Xi(r.textContent,o,e),i=["children",""+o]):se.hasOwnProperty(a)&&null!=o&&"onScroll"===a&&Ui("scroll",r)}switch(n){case"input":He(r),Ye(r,s,!0);break;case"textarea":He(r),it(r);break;case"select":case"option":break;default:"function"==typeof s.onClick&&(r.onclick=Yi)}r=i,t.updateQueue=r,null!==r&&(t.flags|=4)}else{a=9===i.nodeType?i:i.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=st(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=a.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"==typeof r.is?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),"select"===n&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[cs]=t,e[hs]=r,Nl(e,t,!1,!1),t.stateNode=e;e:{switch(a=yt(n,r),n){case"dialog":Ui("cancel",e),Ui("close",e),i=r;break;case"iframe":case"object":case"embed":Ui("load",e),i=r;break;case"video":case"audio":for(i=0;i<Di.length;i++)Ui(Di[i],e);i=r;break;case"source":Ui("error",e),i=r;break;case"img":case"image":case"link":Ui("error",e),Ui("load",e),i=r;break;case"details":Ui("toggle",e),i=r;break;case"input":We(e,r),i=Ge(e,r),Ui("invalid",e);break;case"option":default:i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Le({},r,{value:void 0}),Ui("invalid",e);break;case"textarea":nt(e,r),i=tt(e,r),Ui("invalid",e)}for(s in gt(n,i),o=i)if(o.hasOwnProperty(s)){var l=o[s];"style"===s?pt(e,l):"dangerouslySetInnerHTML"===s?null!=(l=l?l.__html:void 0)&&ut(e,l):"children"===s?"string"==typeof l?("textarea"!==n||""!==l)&&ct(e,l):"number"==typeof l&&ct(e,""+l):"suppressContentEditableWarning"!==s&&"suppressHydrationWarning"!==s&&"autoFocus"!==s&&(se.hasOwnProperty(s)?null!=l&&"onScroll"===s&&Ui("scroll",e):null!=l&&ye(e,s,l,a))}switch(n){case"input":He(e),Ye(e,r,!1);break;case"textarea":He(e),it(e);break;case"option":null!=r.value&&e.setAttribute("value",""+Be(r.value));break;case"select":e.multiple=!!r.multiple,null!=(s=r.value)?et(e,!!r.multiple,s,!1):null!=r.defaultValue&&et(e,!!r.multiple,r.defaultValue,!0);break;default:"function"==typeof i.onClick&&(e.onclick=Yi)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Hl(t),null;case 6:if(e&&null!=t.stateNode)Pl(e,t,e.memoizedProps,r);else{if("string"!=typeof r&&null===t.stateNode)throw Error(re(166));if(n=Ka(qa.current),Ka($a.current),ua(t)){if(r=t.stateNode,n=t.memoizedProps,r[cs]=t,(s=r.nodeValue!==n)&&null!==(e=ea))switch(e.tag){case 3:Xi(r.nodeValue,n,!!(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Xi(r.nodeValue,n,!!(1&e.mode))}s&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[cs]=t,t.stateNode=r}return Hl(t),null;case 13:if(Ss(Ya),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(na&&null!==ta&&1&t.mode&&!(128&t.flags))ca(),ha(),t.flags|=98560,s=!1;else if(s=ua(t),null!==r&&null!==r.dehydrated){if(null===e){if(!s)throw Error(re(318));if(!(s=null!==(s=t.memoizedState)?s.dehydrated:null))throw Error(re(317));s[cs]=t}else ha(),!(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Hl(t),s=!1}else null!==ra&&(ic(ra),ra=null),s=!0;if(!s)return 65536&t.flags?t:null}return 128&t.flags?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,1&t.mode&&(null===e||1&Ya.current?0===Pu&&(Pu=3):fc())),null!==t.updateQueue&&(t.flags|=4),Hl(t),null);case 4:return Wa(),Al(e,t),null===e&&ji(t.stateNode.containerInfo),Hl(t),null;case 10:return Ta(t.type._context),Hl(t),null;case 19:if(Ss(Ya),null===(s=t.memoizedState))return Hl(t),null;if(r=!!(128&t.flags),null===(a=s.rendering))if(r)$l(s,!1);else{if(0!==Pu||null!==e&&128&e.flags)for(e=t.child;null!==e;){if(null!==(a=Ja(e))){for(t.flags|=128,$l(s,!1),null!==(r=a.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(s=n).flags&=14680066,null===(a=s.alternate)?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,e=a.dependencies,s.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ks(Ya,1&Ya.current|2),t.child}e=e.sibling}null!==s.tail&&Qt()>ju&&(t.flags|=128,r=!0,$l(s,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=Ja(a))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),$l(s,!0),null===s.tail&&"hidden"===s.tailMode&&!a.alternate&&!na)return Hl(t),null}else 2*Qt()-s.renderingStartTime>ju&&1073741824!==n&&(t.flags|=128,r=!0,$l(s,!1),t.lanes=4194304);s.isBackwards?(a.sibling=t.child,t.child=a):(null!==(n=s.last)?n.sibling=a:t.child=a,s.last=a)}return null!==s.tail?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Qt(),t.sibling=null,n=Ya.current,ks(Ya,r?1&n|2:1&n),t):(Hl(t),null);case 22:case 23:return uc(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&1&t.mode?!!(1073741824&Au)&&(Hl(t),6&t.subtreeFlags&&(t.flags|=8192)):Hl(t),null;case 24:case 25:return null}throw Error(re(156,t.tag))}function Kl(e,t){switch(Zs(t),t.tag){case 1:return As(t.type)&&Rs(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Wa(),Ss(Is),Ss(Cs),eo(),65536&(e=t.flags)&&!(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Xa(t),null;case 13:if(Ss(Ya),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(re(340));ha()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ss(Ya),null;case 4:return Wa(),null;case 10:return Ta(t.type._context),null;case 22:case 23:return uc(),null;default:return null}}Nl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Al=function(){},Rl=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Ka($a.current);var s,a=null;switch(n){case"input":i=Ge(e,i),r=Ge(e,r),a=[];break;case"select":i=Le({},i,{value:void 0}),r=Le({},r,{value:void 0}),a=[];break;case"textarea":i=tt(e,i),r=tt(e,r),a=[];break;default:"function"!=typeof i.onClick&&"function"==typeof r.onClick&&(e.onclick=Yi)}for(u in gt(n,r),n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&null!=i[u])if("style"===u){var o=i[u];for(s in o)o.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else"dangerouslySetInnerHTML"!==u&&"children"!==u&&"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&"autoFocus"!==u&&(se.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(o=null!=i?i[u]:void 0,r.hasOwnProperty(u)&&l!==o&&(null!=l||null!=o))if("style"===u)if(o){for(s in o)!o.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&o[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(a||(a=[]),a.push(u,n)),n=l;else"dangerouslySetInnerHTML"===u?(l=l?l.__html:void 0,o=o?o.__html:void 0,null!=l&&o!==l&&(a=a||[]).push(u,l)):"children"===u?"string"!=typeof l&&"number"!=typeof l||(a=a||[]).push(u,""+l):"suppressContentEditableWarning"!==u&&"suppressHydrationWarning"!==u&&(se.hasOwnProperty(u)?(null!=l&&"onScroll"===u&&Ui("scroll",e),a||o===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}},Pl=function(e,t,n,r){n!==r&&(t.flags|=4)};var Gl=!1,Wl=!1,Ql="function"==typeof WeakSet?WeakSet:Set,Xl=null;function Yl(e,t){var n=e.ref;if(null!==n)if("function"==typeof n)try{n(null)}catch(r){Ec(e,t,r)}else n.current=null}function Jl(e,t,n){try{n()}catch(r){Ec(e,t,r)}}var Zl=!1;function eu(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,void 0!==s&&Jl(t,n,s)}i=i.next}while(i!==r)}}function tu(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function nu(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"==typeof t?t(e):t.current=e}}function ru(e){var t=e.alternate;null!==t&&(e.alternate=null,ru(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[cs],delete t[hs],delete t[fs],delete t[ps],delete t[ms])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function iu(e){return 5===e.tag||3===e.tag||4===e.tag}function su(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||iu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function au(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!=(n=n._reactRootContainer)||null!==t.onclick||(t.onclick=Yi));else if(4!==r&&null!==(e=e.child))for(au(e,t,n),e=e.sibling;null!==e;)au(e,t,n),e=e.sibling}function ou(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(ou(e,t,n),e=e.sibling;null!==e;)ou(e,t,n),e=e.sibling}var lu=null,uu=!1;function cu(e,t,n){for(n=n.child;null!==n;)hu(e,t,n),n=n.sibling}function hu(e,t,n){if(rn&&"function"==typeof rn.onCommitFiberUnmount)try{rn.onCommitFiberUnmount(nn,n)}catch(o){}switch(n.tag){case 5:Wl||Yl(n,t);case 6:var r=lu,i=uu;lu=null,cu(e,t,n),uu=i,null!==(lu=r)&&(uu?(e=lu,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):lu.removeChild(n.stateNode));break;case 18:null!==lu&&(uu?(e=lu,n=n.stateNode,8===e.nodeType?as(e.parentNode,n):1===e.nodeType&&as(e,n),zn(e)):as(lu,n.stateNode));break;case 4:r=lu,i=uu,lu=n.stateNode.containerInfo,uu=!0,cu(e,t,n),lu=r,uu=i;break;case 0:case 11:case 14:case 15:if(!Wl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,void 0!==a&&(2&s||4&s)&&Jl(n,t,a),i=i.next}while(i!==r)}cu(e,t,n);break;case 1:if(!Wl&&(Yl(n,t),"function"==typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(o){Ec(n,t,o)}cu(e,t,n);break;case 21:cu(e,t,n);break;case 22:1&n.mode?(Wl=(r=Wl)||null!==n.memoizedState,cu(e,t,n),Wl=r):cu(e,t,n);break;default:cu(e,t,n)}}function du(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Ql),t.forEach((function(t){var r=Cc.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function fu(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,a=t,o=a;e:for(;null!==o;){switch(o.tag){case 5:lu=o.stateNode,uu=!1;break e;case 3:case 4:lu=o.stateNode.containerInfo,uu=!0;break e}o=o.return}if(null===lu)throw Error(re(160));hu(s,a,i),lu=null,uu=!1;var l=i.alternate;null!==l&&(l.return=null),i.return=null}catch(u){Ec(i,t,u)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)pu(t,e),t=t.sibling}function pu(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(fu(t,e),mu(e),4&r){try{eu(3,e,e.return),tu(3,e)}catch(m){Ec(e,e.return,m)}try{eu(5,e,e.return)}catch(m){Ec(e,e.return,m)}}break;case 1:fu(t,e),mu(e),512&r&&null!==n&&Yl(n,n.return);break;case 5:if(fu(t,e),mu(e),512&r&&null!==n&&Yl(n,n.return),32&e.flags){var i=e.stateNode;try{ct(i,"")}catch(m){Ec(e,e.return,m)}}if(4&r&&null!=(i=e.stateNode)){var s=e.memoizedProps,a=null!==n?n.memoizedProps:s,o=e.type,l=e.updateQueue;if(e.updateQueue=null,null!==l)try{"input"===o&&"radio"===s.type&&null!=s.name&&Qe(i,s),yt(o,a);var u=yt(o,s);for(a=0;a<l.length;a+=2){var c=l[a],h=l[a+1];"style"===c?pt(i,h):"dangerouslySetInnerHTML"===c?ut(i,h):"children"===c?ct(i,h):ye(i,c,h,u)}switch(o){case"input":Xe(i,s);break;case"textarea":rt(i,s);break;case"select":var d=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;null!=f?et(i,!!s.multiple,f,!1):d!==!!s.multiple&&(null!=s.defaultValue?et(i,!!s.multiple,s.defaultValue,!0):et(i,!!s.multiple,s.multiple?[]:"",!1))}i[hs]=s}catch(m){Ec(e,e.return,m)}}break;case 6:if(fu(t,e),mu(e),4&r){if(null===e.stateNode)throw Error(re(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(m){Ec(e,e.return,m)}}break;case 3:if(fu(t,e),mu(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{zn(t.containerInfo)}catch(m){Ec(e,e.return,m)}break;case 4:default:fu(t,e),mu(e);break;case 13:fu(t,e),mu(e),8192&(i=e.child).flags&&(s=null!==i.memoizedState,i.stateNode.isHidden=s,!s||null!==i.alternate&&null!==i.alternate.memoizedState||(Vu=Qt())),4&r&&du(e);break;case 22:if(c=null!==n&&null!==n.memoizedState,1&e.mode?(Wl=(u=Wl)||c,fu(t,e),Wl=u):fu(t,e),mu(e),8192&r){if(u=null!==e.memoizedState,(e.stateNode.isHidden=u)&&!c&&1&e.mode)for(Xl=e,c=e.child;null!==c;){for(h=Xl=c;null!==Xl;){switch(f=(d=Xl).child,d.tag){case 0:case 11:case 14:case 15:eu(4,d,d.return);break;case 1:Yl(d,d.return);var p=d.stateNode;if("function"==typeof p.componentWillUnmount){r=d,n=d.return;try{t=r,p.props=t.memoizedProps,p.state=t.memoizedState,p.componentWillUnmount()}catch(m){Ec(r,n,m)}}break;case 5:Yl(d,d.return);break;case 22:if(null!==d.memoizedState){wu(h);continue}}null!==f?(f.return=d,Xl=f):wu(h)}c=c.sibling}e:for(c=null,h=e;;){if(5===h.tag){if(null===c){c=h;try{i=h.stateNode,u?"function"==typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none":(o=h.stateNode,a=null!=(l=h.memoizedProps.style)&&l.hasOwnProperty("display")?l.display:null,o.style.display=ft("display",a))}catch(m){Ec(e,e.return,m)}}}else if(6===h.tag){if(null===c)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(m){Ec(e,e.return,m)}}else if((22!==h.tag&&23!==h.tag||null===h.memoizedState||h===e)&&null!==h.child){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;null===h.sibling;){if(null===h.return||h.return===e)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:fu(t,e),mu(e),4&r&&du(e);case 21:}}function mu(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(iu(n)){var r=n;break e}n=n.return}throw Error(re(160))}switch(r.tag){case 5:var i=r.stateNode;32&r.flags&&(ct(i,""),r.flags&=-33),ou(e,su(e),i);break;case 3:case 4:var s=r.stateNode.containerInfo;au(e,su(e),s);break;default:throw Error(re(161))}}catch(a){Ec(e,e.return,a)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function gu(e,t,n){Xl=e,yu(e)}function yu(e,t,n){for(var r=!!(1&e.mode);null!==Xl;){var i=Xl,s=i.child;if(22===i.tag&&r){var a=null!==i.memoizedState||Gl;if(!a){var o=i.alternate,l=null!==o&&null!==o.memoizedState||Wl;o=Gl;var u=Wl;if(Gl=a,(Wl=l)&&!u)for(Xl=i;null!==Xl;)l=(a=Xl).child,22===a.tag&&null!==a.memoizedState?bu(i):null!==l?(l.return=a,Xl=l):bu(i);for(;null!==s;)Xl=s,yu(s),s=s.sibling;Xl=i,Gl=o,Wl=u}vu(e)}else 8772&i.subtreeFlags&&null!==s?(s.return=i,Xl=s):vu(e)}}function vu(e){for(;null!==Xl;){var t=Xl;if(8772&t.flags){var n=t.alternate;try{if(8772&t.flags)switch(t.tag){case 0:case 11:case 15:Wl||tu(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Wl)if(null===n)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:el(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;null!==s&&za(t,s,r);break;case 3:var a=t.updateQueue;if(null!==a){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}za(t,a,n)}break;case 5:var o=t.stateNode;if(null===n&&4&t.flags){n=o;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var u=t.alternate;if(null!==u){var c=u.memoizedState;if(null!==c){var h=c.dehydrated;null!==h&&zn(h)}}}break;default:throw Error(re(163))}Wl||512&t.flags&&nu(t)}catch(d){Ec(t,t.return,d)}}if(t===e){Xl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Xl=n;break}Xl=t.return}}function wu(e){for(;null!==Xl;){var t=Xl;if(t===e){Xl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Xl=n;break}Xl=t.return}}function bu(e){for(;null!==Xl;){var t=Xl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{tu(4,t)}catch(l){Ec(t,n,l)}break;case 1:var r=t.stateNode;if("function"==typeof r.componentDidMount){var i=t.return;try{r.componentDidMount()}catch(l){Ec(t,i,l)}}var s=t.return;try{nu(t)}catch(l){Ec(t,s,l)}break;case 5:var a=t.return;try{nu(t)}catch(l){Ec(t,a,l)}}}catch(l){Ec(t,t.return,l)}if(t===e){Xl=null;break}var o=t.sibling;if(null!==o){o.return=t.return,Xl=o;break}Xl=t.return}}var _u,Eu=Math.ceil,Su=ve.ReactCurrentDispatcher,ku=ve.ReactCurrentOwner,Tu=ve.ReactCurrentBatchConfig,Cu=0,Iu=null,xu=null,Nu=0,Au=0,Ru=Es(0),Pu=0,Du=null,Ou=0,Lu=0,Mu=0,Uu=null,Fu=null,Vu=0,ju=1/0,zu=null,Bu=!1,$u=null,Hu=null,qu=!1,Ku=null,Gu=0,Wu=0,Qu=null,Xu=-1,Yu=0;function Ju(){return 6&Cu?Qt():-1!==Xu?Xu:Xu=Qt()}function Zu(e){return 1&e.mode?2&Cu&&0!==Nu?Nu&-Nu:null!==fa.transition?(0===Yu&&(Yu=pn()),Yu):0!==(e=vn)?e:e=void 0===(e=window.event)?16:Qn(e.type):1}function ec(e,t,n,r){if(50<Wu)throw Wu=0,Qu=null,Error(re(185));gn(e,n,r),2&Cu&&e===Iu||(e===Iu&&(!(2&Cu)&&(Lu|=n),4===Pu&&sc(e,Nu)),tc(e,r),1===n&&0===Cu&&!(1&t.mode)&&(ju=Qt()+500,Us&&js()))}function tc(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var a=31-sn(s),o=1<<a,l=i[a];-1===l?0!==(o&n)&&0===(o&r)||(i[a]=dn(o,t)):l<=t&&(e.expiredLanes|=o),s&=~o}}(e,t);var r=hn(e,e===Iu?Nu:0);if(0===r)null!==n&&Kt(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Kt(n),1===t)0===e.tag?function(e){Us=!0,Vs(e)}(ac.bind(null,e)):Vs(ac.bind(null,e)),is((function(){!(6&Cu)&&js()})),n=null;else{switch(wn(r)){case 1:n=Yt;break;case 4:n=Jt;break;case 16:default:n=Zt;break;case 536870912:n=tn}n=Ic(n,nc.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nc(e,t){if(Xu=-1,Yu=0,6&Cu)throw Error(re(327));var n=e.callbackNode;if(bc()&&e.callbackNode!==n)return null;var r=hn(e,e===Iu?Nu:0);if(0===r)return null;if(30&r||0!==(r&e.expiredLanes)||t)t=pc(e,r);else{t=r;var i=Cu;Cu|=2;var s=dc();for(Iu===e&&Nu===t||(zu=null,ju=Qt()+500,cc(e,t));;)try{gc();break}catch(o){hc(e,o)}ka(),Su.current=s,Cu=i,null!==xu?t=0:(Iu=null,Nu=0,t=Pu)}if(0!==t){if(2===t&&(0!==(i=fn(e))&&(r=i,t=rc(e,i))),1===t)throw n=Du,cc(e,0),sc(e,r),tc(e,Qt()),n;if(6===t)sc(e,r);else{if(i=e.current.alternate,!(30&r||function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!si(s(),i))return!1}catch(a){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(i)||(t=pc(e,r),2===t&&(s=fn(e),0!==s&&(r=s,t=rc(e,s))),1!==t)))throw n=Du,cc(e,0),sc(e,r),tc(e,Qt()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(re(345));case 2:case 5:wc(e,Fu,zu);break;case 3:if(sc(e,r),(130023424&r)===r&&10<(t=Vu+500-Qt())){if(0!==hn(e,0))break;if(((i=e.suspendedLanes)&r)!==r){Ju(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=ts(wc.bind(null,e,Fu,zu),t);break}wc(e,Fu,zu);break;case 4:if(sc(e,r),(4194240&r)===r)break;for(t=e.eventTimes,i=-1;0<r;){var a=31-sn(r);s=1<<a,(a=t[a])>i&&(i=a),r&=~s}if(r=i,10<(r=(120>(r=Qt()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Eu(r/1960))-r)){e.timeoutHandle=ts(wc.bind(null,e,Fu,zu),r);break}wc(e,Fu,zu);break;default:throw Error(re(329))}}}return tc(e,Qt()),e.callbackNode===n?nc.bind(null,e):null}function rc(e,t){var n=Uu;return e.current.memoizedState.isDehydrated&&(cc(e,t).flags|=256),2!==(e=pc(e,t))&&(t=Fu,Fu=n,null!==t&&ic(t)),e}function ic(e){null===Fu?Fu=e:Fu.push.apply(Fu,e)}function sc(e,t){for(t&=~Mu,t&=~Lu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-sn(t),r=1<<n;e[n]=-1,t&=~r}}function ac(e){if(6&Cu)throw Error(re(327));bc();var t=hn(e,0);if(!(1&t))return tc(e,Qt()),null;var n=pc(e,t);if(0!==e.tag&&2===n){var r=fn(e);0!==r&&(t=r,n=rc(e,r))}if(1===n)throw n=Du,cc(e,0),sc(e,t),tc(e,Qt()),n;if(6===n)throw Error(re(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wc(e,Fu,zu),tc(e,Qt()),null}function oc(e,t){var n=Cu;Cu|=1;try{return e(t)}finally{0===(Cu=n)&&(ju=Qt()+500,Us&&js())}}function lc(e){null!==Ku&&0===Ku.tag&&!(6&Cu)&&bc();var t=Cu;Cu|=1;var n=Tu.transition,r=vn;try{if(Tu.transition=null,vn=1,e)return e()}finally{vn=r,Tu.transition=n,!(6&(Cu=t))&&js()}}function uc(){Au=Ru.current,Ss(Ru)}function cc(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,ns(n)),null!==xu)for(n=xu.return;null!==n;){var r=n;switch(Zs(r),r.tag){case 1:null!=(r=r.type.childContextTypes)&&Rs();break;case 3:Wa(),Ss(Is),Ss(Cs),eo();break;case 5:Xa(r);break;case 4:Wa();break;case 13:case 19:Ss(Ya);break;case 10:Ta(r.type._context);break;case 22:case 23:uc()}n=n.return}if(Iu=e,xu=e=Rc(e.current,null),Nu=Au=t,Pu=0,Du=null,Mu=Lu=Ou=0,Fu=Uu=null,null!==Na){for(t=0;t<Na.length;t++)if(null!==(r=(n=Na[t]).interleaved)){n.interleaved=null;var i=r.next,s=n.pending;if(null!==s){var a=s.next;s.next=i,r.next=a}n.pending=r}Na=null}return e}function hc(e,t){for(;;){var n=xu;try{if(ka(),to.current=Xo,oo){for(var r=io.memoizedState;null!==r;){var i=r.queue;null!==i&&(i.pending=null),r=r.next}oo=!1}if(ro=0,ao=so=io=null,lo=!1,uo=0,ku.current=null,null===n||null===n.return){Pu=1,Du=t,xu=null;break}e:{var s=e,a=n.return,o=n,l=t;if(t=Nu,o.flags|=32768,null!==l&&"object"==typeof l&&"function"==typeof l.then){var u=l,c=o,h=c.tag;if(!(1&c.mode||0!==h&&11!==h&&15!==h)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var f=pl(a);if(null!==f){f.flags&=-257,ml(f,a,o,0,t),1&f.mode&&fl(s,u,t),l=u;var p=(t=f).updateQueue;if(null===p){var m=new Set;m.add(l),t.updateQueue=m}else p.add(l);break e}if(!(1&t)){fl(s,u,t),fc();break e}l=Error(re(426))}else if(na&&1&o.mode){var g=pl(a);if(null!==g){!(65536&g.flags)&&(g.flags|=256),ml(g,a,o,0,t),da(ol(l,o));break e}}s=l=ol(l,o),4!==Pu&&(Pu=2),null===Uu?Uu=[s]:Uu.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t,Va(s,hl(0,l,t));break e;case 1:o=l;var y=s.type,v=s.stateNode;if(!(128&s.flags||"function"!=typeof y.getDerivedStateFromError&&(null===v||"function"!=typeof v.componentDidCatch||null!==Hu&&Hu.has(v)))){s.flags|=65536,t&=-t,s.lanes|=t,Va(s,dl(s,o,t));break e}}s=s.return}while(null!==s)}vc(n)}catch(w){t=w,xu===n&&null!==n&&(xu=n=n.return);continue}break}}function dc(){var e=Su.current;return Su.current=Xo,null===e?Xo:e}function fc(){0!==Pu&&3!==Pu&&2!==Pu||(Pu=4),null===Iu||!(268435455&Ou)&&!(268435455&Lu)||sc(Iu,Nu)}function pc(e,t){var n=Cu;Cu|=2;var r=dc();for(Iu===e&&Nu===t||(zu=null,cc(e,t));;)try{mc();break}catch(i){hc(e,i)}if(ka(),Cu=n,Su.current=r,null!==xu)throw Error(re(261));return Iu=null,Nu=0,Pu}function mc(){for(;null!==xu;)yc(xu)}function gc(){for(;null!==xu&&!Gt();)yc(xu)}function yc(e){var t=_u(e.alternate,e,Au);e.memoizedProps=e.pendingProps,null===t?vc(e):xu=t,ku.current=null}function vc(e){var t=e;do{var n=t.alternate;if(e=t.return,32768&t.flags){if(null!==(n=Kl(n,t)))return n.flags&=32767,void(xu=n);if(null===e)return Pu=6,void(xu=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}else if(null!==(n=ql(n,t,Au)))return void(xu=n);if(null!==(t=t.sibling))return void(xu=t);xu=t=e}while(null!==t);0===Pu&&(Pu=5)}function wc(e,t,n){var r=vn,i=Tu.transition;try{Tu.transition=null,vn=1,function(e,t,n,r){do{bc()}while(null!==Ku);if(6&Cu)throw Error(re(327));n=e.finishedWork;var i=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(re(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-sn(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}(e,s),e===Iu&&(xu=Iu=null,Nu=0),!(2064&n.subtreeFlags)&&!(2064&n.flags)||qu||(qu=!0,Ic(Zt,(function(){return bc(),null}))),s=!!(15990&n.flags),!!(15990&n.subtreeFlags)||s){s=Tu.transition,Tu.transition=null;var a=vn;vn=1;var o=Cu;Cu|=4,ku.current=null,function(e,t){if(Ji=$n,hi(e=ci())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch(b){n=null;break e}var a=0,o=-1,l=-1,u=0,c=0,h=e,d=null;t:for(;;){for(var f;h!==n||0!==i&&3!==h.nodeType||(o=a+i),h!==s||0!==r&&3!==h.nodeType||(l=a+r),3===h.nodeType&&(a+=h.nodeValue.length),null!==(f=h.firstChild);)d=h,h=f;for(;;){if(h===e)break t;if(d===n&&++u===i&&(o=a),d===s&&++c===r&&(l=a),null!==(f=h.nextSibling))break;d=(h=d).parentNode}h=f}n=-1===o||-1===l?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Zi={focusedElem:e,selectionRange:n},$n=!1,Xl=t;null!==Xl;)if(e=(t=Xl).child,1028&t.subtreeFlags&&null!==e)e.return=t,Xl=e;else for(;null!==Xl;){t=Xl;try{var p=t.alternate;if(1024&t.flags)switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==p){var m=p.memoizedProps,g=p.memoizedState,y=t.stateNode,v=y.getSnapshotBeforeUpdate(t.elementType===t.type?m:el(t.type,m),g);y.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var w=t.stateNode.containerInfo;1===w.nodeType?w.textContent="":9===w.nodeType&&w.documentElement&&w.removeChild(w.documentElement);break;default:throw Error(re(163))}}catch(b){Ec(t,t.return,b)}if(null!==(e=t.sibling)){e.return=t.return,Xl=e;break}Xl=t.return}p=Zl,Zl=!1}(e,n),pu(n,e),di(Zi),$n=!!Ji,Zi=Ji=null,e.current=n,gu(n),Wt(),Cu=o,vn=a,Tu.transition=s}else e.current=n;if(qu&&(qu=!1,Ku=e,Gu=i),s=e.pendingLanes,0===s&&(Hu=null),function(e){if(rn&&"function"==typeof rn.onCommitFiberRoot)try{rn.onCommitFiberRoot(nn,e,void 0,!(128&~e.current.flags))}catch(t){}}(n.stateNode),tc(e,Qt()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Bu)throw Bu=!1,e=$u,$u=null,e;!!(1&Gu)&&0!==e.tag&&bc(),s=e.pendingLanes,1&s?e===Qu?Wu++:(Wu=0,Qu=e):Wu=0,js()}(e,t,n,r)}finally{Tu.transition=i,vn=r}return null}function bc(){if(null!==Ku){var e=wn(Gu),t=Tu.transition,n=vn;try{if(Tu.transition=null,vn=16>e?16:e,null===Ku)var r=!1;else{if(e=Ku,Ku=null,Gu=0,6&Cu)throw Error(re(331));var i=Cu;for(Cu|=4,Xl=e.current;null!==Xl;){var s=Xl,a=s.child;if(16&Xl.flags){var o=s.deletions;if(null!==o){for(var l=0;l<o.length;l++){var u=o[l];for(Xl=u;null!==Xl;){var c=Xl;switch(c.tag){case 0:case 11:case 15:eu(8,c,s)}var h=c.child;if(null!==h)h.return=c,Xl=h;else for(;null!==Xl;){var d=(c=Xl).sibling,f=c.return;if(ru(c),c===u){Xl=null;break}if(null!==d){d.return=f,Xl=d;break}Xl=f}}}var p=s.alternate;if(null!==p){var m=p.child;if(null!==m){p.child=null;do{var g=m.sibling;m.sibling=null,m=g}while(null!==m)}}Xl=s}}if(2064&s.subtreeFlags&&null!==a)a.return=s,Xl=a;else e:for(;null!==Xl;){if(2048&(s=Xl).flags)switch(s.tag){case 0:case 11:case 15:eu(9,s,s.return)}var y=s.sibling;if(null!==y){y.return=s.return,Xl=y;break e}Xl=s.return}}var v=e.current;for(Xl=v;null!==Xl;){var w=(a=Xl).child;if(2064&a.subtreeFlags&&null!==w)w.return=a,Xl=w;else e:for(a=v;null!==Xl;){if(2048&(o=Xl).flags)try{switch(o.tag){case 0:case 11:case 15:tu(9,o)}}catch(_){Ec(o,o.return,_)}if(o===a){Xl=null;break e}var b=o.sibling;if(null!==b){b.return=o.return,Xl=b;break e}Xl=o.return}}if(Cu=i,js(),rn&&"function"==typeof rn.onPostCommitFiberRoot)try{rn.onPostCommitFiberRoot(nn,e)}catch(_){}r=!0}return r}finally{vn=n,Tu.transition=t}}return!1}function _c(e,t,n){e=Ua(e,t=hl(0,t=ol(n,t),1),1),t=Ju(),null!==e&&(gn(e,1,t),tc(e,t))}function Ec(e,t,n){if(3===e.tag)_c(e,e,n);else for(;null!==t;){if(3===t.tag){_c(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"==typeof t.type.getDerivedStateFromError||"function"==typeof r.componentDidCatch&&(null===Hu||!Hu.has(r))){t=Ua(t,e=dl(t,e=ol(n,e),1),1),e=Ju(),null!==t&&(gn(t,1,e),tc(t,e));break}}t=t.return}}function Sc(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=Ju(),e.pingedLanes|=e.suspendedLanes&n,Iu===e&&(Nu&n)===n&&(4===Pu||3===Pu&&(130023424&Nu)===Nu&&500>Qt()-Vu?cc(e,0):Mu|=n),tc(e,t)}function kc(e,t){0===t&&(1&e.mode?(t=un,!(130023424&(un<<=1))&&(un=4194304)):t=1);var n=Ju();null!==(e=Pa(e,t))&&(gn(e,t,n),tc(e,n))}function Tc(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),kc(e,n)}function Cc(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(re(314))}null!==r&&r.delete(t),kc(e,n)}function Ic(e,t){return qt(e,t)}function xc(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nc(e,t,n,r){return new xc(e,t,n,r)}function Ac(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Rc(e,t){var n=e.alternate;return null===n?((n=Nc(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Pc(e,t,n,r,i,s){var a=2;if(r=e,"function"==typeof e)Ac(e)&&(a=1);else if("string"==typeof e)a=5;else e:switch(e){case _e:return Dc(n.children,i,s,t);case Ee:a=8,i|=8;break;case Se:return(e=Nc(12,n,t,2|i)).elementType=Se,e.lanes=s,e;case Ie:return(e=Nc(13,n,t,i)).elementType=Ie,e.lanes=s,e;case xe:return(e=Nc(19,n,t,i)).elementType=xe,e.lanes=s,e;case Re:return Oc(n,i,s,t);default:if("object"==typeof e&&null!==e)switch(e.$$typeof){case ke:a=10;break e;case Te:a=9;break e;case Ce:a=11;break e;case Ne:a=14;break e;case Ae:a=16,r=null;break e}throw Error(re(130,null==e?e:typeof e,""))}return(t=Nc(a,n,t,i)).elementType=e,t.type=r,t.lanes=s,t}function Dc(e,t,n,r){return(e=Nc(7,e,r,t)).lanes=n,e}function Oc(e,t,n,r){return(e=Nc(22,e,r,t)).elementType=Re,e.lanes=n,e.stateNode={isHidden:!1},e}function Lc(e,t,n){return(e=Nc(6,e,null,t)).lanes=n,e}function Mc(e,t,n){return(t=Nc(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Uc(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Fc(e,t,n,r,i,s,a,o,l){return e=new Uc(e,t,n,o,l),1===t?(t=1,!0===s&&(t|=8)):t=0,s=Nc(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Oa(s),e}function Vc(e){if(!e)return Ts;e:{if(jt(e=e._reactInternals)!==e||1!==e.tag)throw Error(re(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(As(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(re(171))}if(1===e.tag){var n=e.type;if(As(n))return Ds(e,n,t)}return t}function jc(e,t,n,r,i,s,a,o,l){return(e=Fc(n,r,!0,e,0,s,0,o,l)).context=Vc(null),n=e.current,(s=Ma(r=Ju(),i=Zu(n))).callback=null!=t?t:null,Ua(n,s,i),e.current.lanes=i,gn(e,i,r),tc(e,r),e}function zc(e,t,n,r){var i=t.current,s=Ju(),a=Zu(i);return n=Vc(n),null===t.context?t.context=n:t.pendingContext=n,(t=Ma(s,a)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Ua(i,t,a))&&(ec(e,i,a,s),Fa(e,i,a)),a}function Bc(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function $c(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Hc(e,t){$c(e,t),(e=e.alternate)&&$c(e,t)}_u=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||Is.current)yl=!0;else{if(0===(e.lanes&n)&&!(128&t.flags))return yl=!1,function(e,t,n){switch(t.tag){case 3:Il(t),ha();break;case 5:Qa(t);break;case 1:As(t.type)&&Os(t);break;case 4:Ga(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;ks(ba,r._currentValue),r._currentValue=i;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(ks(Ya,1&Ya.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ll(e,t,n):(ks(Ya,1&Ya.current),null!==(e=Bl(e,t,n))?e.sibling:null);ks(Ya,1&Ya.current);break;case 19:if(r=0!==(n&t.childLanes),128&e.flags){if(r)return jl(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),ks(Ya,Ya.current),r)break;return null;case 22:case 23:return t.lanes=0,El(e,t,n)}return Bl(e,t,n)}(e,t,n);yl=!!(131072&e.flags)}else yl=!1,na&&1048576&t.flags&&Ys(t,Hs,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;zl(e,t),e=t.pendingProps;var i=Ns(t,Cs.current);Ia(t,n),i=po(null,t,r,e,i,n);var s=mo();return t.flags|=1,"object"==typeof i&&null!==i&&"function"==typeof i.render&&void 0===i.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,As(r)?(s=!0,Os(t)):s=!1,t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,Oa(t),i.updater=nl,t.stateNode=i,i._reactInternals=t,al(t,r,e,n),t=Cl(null,t,r,!0,s,n)):(t.tag=0,na&&s&&Js(t),vl(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(zl(e,t),e=t.pendingProps,r=(i=r._init)(r._payload),t.type=r,i=t.tag=function(e){if("function"==typeof e)return Ac(e)?1:0;if(null!=e){if((e=e.$$typeof)===Ce)return 11;if(e===Ne)return 14}return 2}(r),e=el(r,e),i){case 0:t=kl(null,t,r,e,n);break e;case 1:t=Tl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=bl(null,t,r,el(r.type,e),n);break e}throw Error(re(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,kl(e,t,r,i=t.elementType===r?i:el(r,i),n);case 1:return r=t.type,i=t.pendingProps,Tl(e,t,r,i=t.elementType===r?i:el(r,i),n);case 3:e:{if(Il(t),null===e)throw Error(re(387));r=t.pendingProps,i=(s=t.memoizedState).element,La(e,t),ja(t,r,null,n);var a=t.memoizedState;if(r=a.element,s.isDehydrated){if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=s,t.memoizedState=s,256&t.flags){t=xl(e,t,r,n,i=ol(Error(re(423)),t));break e}if(r!==i){t=xl(e,t,r,n,i=ol(Error(re(424)),t));break e}for(ta=os(t.stateNode.containerInfo.firstChild),ea=t,na=!0,ra=null,n=wa(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ha(),r===i){t=Bl(e,t,n);break e}vl(e,t,r,n)}t=t.child}return t;case 5:return Qa(t),null===e&&oa(t),r=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,a=i.children,es(r,i)?a=null:null!==s&&es(r,s)&&(t.flags|=32),Sl(e,t),vl(e,t,a,n),t.child;case 6:return null===e&&oa(t),null;case 13:return Ll(e,t,n);case 4:return Ga(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=va(t,null,r,n):vl(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,wl(e,t,r,i=t.elementType===r?i:el(r,i),n);case 7:return vl(e,t,t.pendingProps,n),t.child;case 8:case 12:return vl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,a=i.value,ks(ba,r._currentValue),r._currentValue=a,null!==s)if(si(s.value,a)){if(s.children===i.children&&!Is.current){t=Bl(e,t,n);break e}}else for(null!==(s=t.child)&&(s.return=t);null!==s;){var o=s.dependencies;if(null!==o){a=s.child;for(var l=o.firstContext;null!==l;){if(l.context===r){if(1===s.tag){(l=Ma(-1,n&-n)).tag=2;var u=s.updateQueue;if(null!==u){var c=(u=u.shared).pending;null===c?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,null!==(l=s.alternate)&&(l.lanes|=n),Ca(s.return,n,t),o.lanes|=n;break}l=l.next}}else if(10===s.tag)a=s.type===t.type?null:s.child;else if(18===s.tag){if(null===(a=s.return))throw Error(re(341));a.lanes|=n,null!==(o=a.alternate)&&(o.lanes|=n),Ca(a,n,t),a=s.sibling}else a=s.child;if(null!==a)a.return=s;else for(a=s;null!==a;){if(a===t){a=null;break}if(null!==(s=a.sibling)){s.return=a.return,a=s;break}a=a.return}s=a}vl(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Ia(t,n),r=r(i=xa(i)),t.flags|=1,vl(e,t,r,n),t.child;case 14:return i=el(r=t.type,t.pendingProps),bl(e,t,r,i=el(r.type,i),n);case 15:return _l(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:el(r,i),zl(e,t),t.tag=1,As(r)?(e=!0,Os(t)):e=!1,Ia(t,n),il(t,r,i),al(t,r,i,n),Cl(null,t,r,!0,e,n);case 19:return jl(e,t,n);case 22:return El(e,t,n)}throw Error(re(156,t.tag))};var qc="function"==typeof reportError?reportError:function(e){console.error(e)};function Kc(e){this._internalRoot=e}function Gc(e){this._internalRoot=e}function Wc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Qc(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Xc(){}function Yc(e,t,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if("function"==typeof i){var o=i;i=function(){var e=Bc(a);o.call(e)}}zc(t,a,e,i)}else a=function(e,t,n,r,i){if(i){if("function"==typeof r){var s=r;r=function(){var e=Bc(a);s.call(e)}}var a=jc(t,r,e,0,null,!1,0,"",Xc);return e._reactRootContainer=a,e[ds]=a.current,ji(8===e.nodeType?e.parentNode:e),lc(),a}for(;i=e.lastChild;)e.removeChild(i);if("function"==typeof r){var o=r;r=function(){var e=Bc(l);o.call(e)}}var l=Fc(e,0,!1,null,0,!1,0,"",Xc);return e._reactRootContainer=l,e[ds]=l.current,ji(8===e.nodeType?e.parentNode:e),lc((function(){zc(t,l,n,r)})),l}(n,t,e,i,r);return Bc(a)}Gc.prototype.render=Kc.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(re(409));zc(e,t,null,null)},Gc.prototype.unmount=Kc.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;lc((function(){zc(null,e,null,null)})),t[ds]=null}},Gc.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sn();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Pn.length&&0!==t&&t<Pn[n].priority;n++);Pn.splice(n,0,e),0===n&&Mn(e)}},bn=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=cn(t.pendingLanes);0!==n&&(yn(t,1|n),tc(t,Qt()),!(6&Cu)&&(ju=Qt()+500,js()))}break;case 13:lc((function(){var t=Pa(e,1);if(null!==t){var n=Ju();ec(t,e,1,n)}})),Hc(e,1)}},_n=function(e){if(13===e.tag){var t=Pa(e,134217728);if(null!==t)ec(t,e,134217728,Ju());Hc(e,134217728)}},En=function(e){if(13===e.tag){var t=Zu(e),n=Pa(e,t);if(null!==n)ec(n,e,t,Ju());Hc(e,t)}},Sn=function(){return vn},kn=function(e,t){var n=vn;try{return vn=e,t()}finally{vn=n}},bt=function(e,t,n){switch(t){case"input":if(Xe(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=ws(r);if(!i)throw Error(re(90));qe(r),Xe(r,i)}}}break;case"textarea":rt(e,n);break;case"select":null!=(t=n.value)&&et(e,!!n.multiple,t,!1)}},Ct=oc,It=lc;var Jc={usingClientEntryPoint:!1,Events:[ys,vs,ws,kt,Tt,oc]},Zc={findFiberByHostInstance:gs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},eh={bundleType:Zc.bundleType,version:Zc.version,rendererPackageName:Zc.rendererPackageName,rendererConfig:Zc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ve.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=$t(e))?null:e.stateNode},findFiberByHostInstance:Zc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var th=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!th.isDisabled&&th.supportsFiber)try{nn=th.inject(eh),rn=th}catch(lt){}}Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jc,Y.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Wc(t))throw Error(re(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:be,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},Y.createRoot=function(e,t){if(!Wc(e))throw Error(re(299));var n=!1,r="",i=qc;return null!=t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(i=t.onRecoverableError)),t=Fc(e,1,!1,null,0,n,0,r,i),e[ds]=t.current,ji(8===e.nodeType?e.parentNode:e),new Kc(t)},Y.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"==typeof e.render)throw Error(re(188));throw e=Object.keys(e).join(","),Error(re(268,e))}return e=null===(e=$t(t))?null:e.stateNode},Y.flushSync=function(e){return lc(e)},Y.hydrate=function(e,t,n){if(!Qc(t))throw Error(re(200));return Yc(null,e,t,!0,n)},Y.hydrateRoot=function(e,t,n){if(!Wc(e))throw Error(re(405));var r=null!=n&&n.hydratedSources||null,i=!1,s="",a=qc;if(null!=n&&(!0===n.unstable_strictMode&&(i=!0),void 0!==n.identifierPrefix&&(s=n.identifierPrefix),void 0!==n.onRecoverableError&&(a=n.onRecoverableError)),t=jc(t,null,e,1,null!=n?n:null,i,0,s,a),e[ds]=t.current,ji(e),r)for(e=0;e<r.length;e++)i=(i=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Gc(t)},Y.render=function(e,t,n){if(!Qc(t))throw Error(re(200));return Yc(null,e,t,!1,n)},Y.unmountComponentAtNode=function(e){if(!Qc(e))throw Error(re(40));return!!e._reactRootContainer&&(lc((function(){Yc(null,null,e,!1,(function(){e._reactRootContainer=null,e[ds]=null}))})),!0)},Y.unstable_batchedUpdates=oc,Y.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Qc(n))throw Error(re(200));if(null==e||void 0===e._reactInternals)throw Error(re(38));return Yc(e,t,n,!1,r)},Y.version="18.3.1-next-f1338f8080-20240426",function e(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),X.exports=Y;var nh=X.exports;Q.createRoot=nh.createRoot,Q.hydrateRoot=nh.hydrateRoot;var rh={};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ih=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296==(64512&i)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},sh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,a=s?e[i+1]:0,o=i+2<e.length,l=o?e[i+2]:0,u=t>>2,c=(3&t)<<4|a>>4;let h=(15&a)<<2|l>>6,d=63&l;o||(d=64,s||(h=64)),r.push(n[u],n[c],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ih(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(s>>10)),t[r++]=String.fromCharCode(56320+(1023&s))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length?n[e.charAt(i)]:0;++i;const a=i<e.length?n[e.charAt(i)]:64;++i;const o=i<e.length?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==a||null==o)throw new ah;const l=t<<2|s>>4;if(r.push(l),64!==a){const e=s<<4&240|a>>2;if(r.push(e),64!==o){const e=a<<6&192|o;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class ah extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oh=function(e){return function(e){const t=ih(e);return sh.encodeByteArray(t,!0)}(e).replace(/\./g,"")},lh=function(e){try{return sh.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const uh=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ch=()=>{try{return uh()||(()=>{if("undefined"==typeof process)return;const e=rh.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&lh(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},hh=e=>{var t,n;return null===(n=null===(t=ch())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]},dh=()=>{var e;return null===(e=ch())||void 0===e?void 0:e.config},fh=e=>{var t;return null===(t=ch())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ph{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(e){return e.endsWith(".cloudworkstations.dev")}async function gh(e){return(await fetch(e,{credentials:"include"})).ok}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh={};let vh=!1;function wh(e,t){if("undefined"==typeof window||"undefined"==typeof document||!mh(window.location.host)||yh[e]===t||yh[e]||vh)return;function n(e){return`__firebase__banner__${e}`}yh[e]=t;const r="__firebase__banner",i=function(){const e={prod:[],emulator:[]};for(const t of Object.keys(yh))yh[t]?e.emulator.push(t):e.prod.push(t);return e}().prod.length>0;function s(){const e=document.createElement("span");return e.style.cursor="pointer",e.style.marginLeft="16px",e.style.fontSize="24px",e.innerHTML=" &times;",e.onclick=()=>{vh=!0,function(){const e=document.getElementById(r);e&&e.remove()}()},e}function a(){const e=function(e){let t=document.getElementById(e),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",e),n=!0),{created:n,element:t}}(r),t=n("text"),a=document.getElementById(t)||document.createElement("span"),o=n("learnmore"),l=document.getElementById(o)||document.createElement("a"),u=n("preprendIcon"),c=document.getElementById(u)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(e.created){const t=e.element;!function(e){e.style.display="flex",e.style.background="#7faaf0",e.style.position="fixed",e.style.bottom="5px",e.style.left="5px",e.style.padding=".5em",e.style.borderRadius="5px",e.style.alignItems="center"}(t),function(e,t){e.setAttribute("id",t),e.innerText="Learn more",e.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",e.setAttribute("target","__blank"),e.style.paddingLeft="5px",e.style.textDecoration="underline"}(l,o);const n=s();!function(e,t){e.setAttribute("width","24"),e.setAttribute("id",t),e.setAttribute("height","24"),e.setAttribute("viewBox","0 0 24 24"),e.setAttribute("fill","none"),e.style.marginLeft="-6px"}(c,u),t.append(c,a,l,n),document.body.appendChild(t)}i?(a.innerText="Preview backend disconnected.",c.innerHTML='<g clip-path="url(#clip0_6013_33858)">\n<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6013_33858">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>'):(c.innerHTML='<g clip-path="url(#clip0_6083_34804)">\n<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>\n</g>\n<defs>\n<clipPath id="clip0_6083_34804">\n<rect width="24" height="24" fill="white"/>\n</clipPath>\n</defs>',a.innerText="Preview backend running in this workspace."),a.setAttribute("id",t)}"loading"===document.readyState?window.addEventListener("DOMContentLoaded",a):a()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bh(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function _h(){return!function(){var e;const t=null===(e=ch())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(global.process)}catch(n){return!1}}()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}class Eh extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Eh.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Sh.prototype.create)}}class Sh{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?function(e,t){return e.replace(kh,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",a=`${this.serviceName}: ${s} (${r}).`;return new Eh(r,a,n)}}const kh=/\{\$([^}]+)}/g;function Th(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(Ch(n)&&Ch(s)){if(!Th(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Ch(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}class xh{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=function(e,t){if("object"!=typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=Nh),void 0===r.error&&(r.error=Nh),void 0===r.complete&&(r.complete=Nh);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!=typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function Nh(){}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(e){return e&&e._delegate?e._delegate:e}class Rh{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ph="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dh{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new ph;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:Ph})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=Ph){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=Ph){return this.instances.has(e)}getOptions(e=Ph){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(i)&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===Ph?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}var r;return n||null}normalizeInstanceIdentifier(e=Ph){return this.component?this.component.multipleInstances?e:Ph:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class Oh{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Dh(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lh,Mh;(Mh=Lh||(Lh={}))[Mh.DEBUG=0]="DEBUG",Mh[Mh.VERBOSE=1]="VERBOSE",Mh[Mh.INFO=2]="INFO",Mh[Mh.WARN=3]="WARN",Mh[Mh.ERROR=4]="ERROR",Mh[Mh.SILENT=5]="SILENT";const Uh={debug:Lh.DEBUG,verbose:Lh.VERBOSE,info:Lh.INFO,warn:Lh.WARN,error:Lh.ERROR,silent:Lh.SILENT},Fh=Lh.INFO,Vh={[Lh.DEBUG]:"log",[Lh.VERBOSE]:"log",[Lh.INFO]:"info",[Lh.WARN]:"warn",[Lh.ERROR]:"error"},jh=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=Vh[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class zh{constructor(e){this.name=e,this._logLevel=Fh,this._logHandler=jh,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Lh))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?Uh[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Lh.DEBUG,...e),this._logHandler(this,Lh.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Lh.VERBOSE,...e),this._logHandler(this,Lh.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Lh.INFO,...e),this._logHandler(this,Lh.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Lh.WARN,...e),this._logHandler(this,Lh.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Lh.ERROR,...e),this._logHandler(this,Lh.ERROR,...e)}}let Bh,$h;const Hh=new WeakMap,qh=new WeakMap,Kh=new WeakMap,Gh=new WeakMap,Wh=new WeakMap;let Qh={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return qh.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Kh.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Jh(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Xh(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?($h||($h=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Zh(this),t),Jh(Hh.get(this))}:function(...t){return Jh(e.apply(Zh(this),t))}:function(t,...n){const r=e.call(Zh(this),t,...n);return Kh.set(r,t.sort?t.sort():[t]),Jh(r)}}function Yh(e){return"function"==typeof e?Xh(e):(e instanceof IDBTransaction&&function(e){if(qh.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));qh.set(e,t)}(e),t=e,(Bh||(Bh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,Qh):e);var t}function Jh(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(Jh(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&Hh.set(t,e)})).catch((()=>{})),Wh.set(t,e),t}(e);if(Gh.has(e))return Gh.get(e);const t=Yh(e);return t!==e&&(Gh.set(e,t),Wh.set(t,e)),t}const Zh=e=>Wh.get(e);const ed=["get","getKey","getAll","getAllKeys","count"],td=["put","add","delete","clear"],nd=new Map;function rd(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(nd.get(t))return nd.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=td.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!ed.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let a=s.store;return r&&(a=a.index(t.shift())),(await Promise.all([a[n](...t),i&&s.done]))[0]};return nd.set(t,s),s}Qh=(e=>({...e,get:(t,n,r)=>rd(t,n)||e.get(t,n,r),has:(t,n)=>!!rd(t,n)||e.has(t,n)}))(Qh);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class id{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const sd="@firebase/app",ad="0.13.0",od=new zh("@firebase/app"),ld="@firebase/app-compat",ud="@firebase/analytics-compat",cd="@firebase/analytics",hd="@firebase/app-check-compat",dd="@firebase/app-check",fd="@firebase/auth",pd="@firebase/auth-compat",md="@firebase/database",gd="@firebase/data-connect",yd="@firebase/database-compat",vd="@firebase/functions",wd="@firebase/functions-compat",bd="@firebase/installations",_d="@firebase/installations-compat",Ed="@firebase/messaging",Sd="@firebase/messaging-compat",kd="@firebase/performance",Td="@firebase/performance-compat",Cd="@firebase/remote-config",Id="@firebase/remote-config-compat",xd="@firebase/storage",Nd="@firebase/storage-compat",Ad="@firebase/firestore",Rd="@firebase/ai",Pd="@firebase/firestore-compat",Dd="firebase",Od="[DEFAULT]",Ld={[sd]:"fire-core",[ld]:"fire-core-compat",[cd]:"fire-analytics",[ud]:"fire-analytics-compat",[dd]:"fire-app-check",[hd]:"fire-app-check-compat",[fd]:"fire-auth",[pd]:"fire-auth-compat",[md]:"fire-rtdb",[gd]:"fire-data-connect",[yd]:"fire-rtdb-compat",[vd]:"fire-fn",[wd]:"fire-fn-compat",[bd]:"fire-iid",[_d]:"fire-iid-compat",[Ed]:"fire-fcm",[Sd]:"fire-fcm-compat",[kd]:"fire-perf",[Td]:"fire-perf-compat",[Cd]:"fire-rc",[Id]:"fire-rc-compat",[xd]:"fire-gcs",[Nd]:"fire-gcs-compat",[Ad]:"fire-fst",[Pd]:"fire-fst-compat",[Rd]:"fire-vertex","fire-js":"fire-js",[Dd]:"fire-js-all"},Md=new Map,Ud=new Map,Fd=new Map;function Vd(e,t){try{e.container.addComponent(t)}catch(n){od.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function jd(e){const t=e.name;if(Fd.has(t))return od.debug(`There were multiple attempts to register component ${t}.`),!1;Fd.set(t,e);for(const n of Md.values())Vd(n,e);for(const n of Ud.values())Vd(n,e);return!0}function zd(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function Bd(e){return null!=e&&void 0!==e.settings}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $d=new Sh("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."});
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Hd{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Rh("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $d.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qd="11.8.0";function Kd(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const r=Object.assign({name:Od,automaticDataCollectionEnabled:!0},t),i=r.name;if("string"!=typeof i||!i)throw $d.create("bad-app-name",{appName:String(i)});if(n||(n=dh()),!n)throw $d.create("no-options");const s=Md.get(i);if(s){if(Th(n,s.options)&&Th(r,s.config))return s;throw $d.create("duplicate-app",{appName:i})}const a=new Oh(i);for(const l of Fd.values())a.addComponent(l);const o=new Hd(n,r,a);return Md.set(i,o),o}function Gd(e=Od){const t=Md.get(e);if(!t&&e===Od&&dh())return Kd();if(!t)throw $d.create("no-app",{appName:e});return t}function Wd(e,t,n){var r;let i=null!==(r=Ld[e])&&void 0!==r?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${i}" with version "${t}":`];return s&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void od.warn(e.join(" "))}jd(new Rh(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="firebase-heartbeat-store";let Xd=null;function Yd(){return Xd||(Xd=function(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=Jh(a);return r&&a.addEventListener("upgradeneeded",(e=>{r(Jh(a.result),e.oldVersion,e.newVersion,Jh(a.transaction),e)})),n&&a.addEventListener("blocked",(e=>n(e.oldVersion,e.newVersion,e))),o.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(e=>i(e.oldVersion,e.newVersion,e)))})).catch((()=>{})),o}("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)try{e.createObjectStore(Qd)}catch(n){console.warn(n)}}}).catch((e=>{throw $d.create("idb-open",{originalErrorMessage:e.message})}))),Xd}async function Jd(e,t){try{const n=(await Yd()).transaction(Qd,"readwrite"),r=n.objectStore(Qd);await r.put(t,Zd(e)),await n.done}catch(n){if(n instanceof Eh)od.warn(n.message);else{const e=$d.create("idb-set",{originalErrorMessage:null==n?void 0:n.message});od.warn(e.message)}}}function Zd(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new nf(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=tf();if(null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)&&(this._heartbeatsCache=await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)))return;if(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some((e=>e.date===r)))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats.length>30){const e=function(e){if(0===e.length)return-1;let t=0,n=e[0].date;for(let r=1;r<e.length;r++)e[r].date<n&&(n=e[r].date,t=r);return t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(e,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){od.warn(n)}}async getHeartbeatsHeader(){var e;try{if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const t=tf(),{heartbeatsToSend:n,unsentEntries:r}=function(e,t=1024){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),rf(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),rf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),i=oh(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return od.warn(t),""}}}function tf(){return(new Date).toISOString().substring(0,10)}class nf{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return"object"==typeof indexedDB}catch(e){return!1}}()&&new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}})).then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){try{const t=(await Yd()).transaction(Qd),n=await t.objectStore(Qd).get(Zd(e));return await t.done,n}catch(t){if(t instanceof Eh)od.warn(t.message);else{const e=$d.create("idb-get",{originalErrorMessage:null==t?void 0:t.message});od.warn(e.message)}}}(this.app);return(null==e?void 0:e.heartbeats)?e:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Jd(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Jd(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function rf(e){return oh(JSON.stringify({version:2,heartbeats:e})).length}var sf;sf="",jd(new Rh("platform-logger",(e=>new id(e)),"PRIVATE")),jd(new Rh("heartbeat",(e=>new ef(e)),"PRIVATE")),Wd(sd,ad,sf),Wd(sd,ad,"esm2017"),Wd("fire-js","");function af(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}function of(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Wd("firebase","11.8.1","app"),"function"==typeof SuppressedError&&SuppressedError;const lf=of,uf=new Sh("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),cf=new zh("@firebase/auth");function hf(e,...t){cf.logLevel<=Lh.ERROR&&cf.error(`Auth (${qd}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(e,...t){throw gf(e,...t)}function ff(e,...t){return gf(e,...t)}function pf(e,t,n){const r=Object.assign(Object.assign({},lf()),{[t]:n});return new Sh("auth","Firebase",r).create(t,{appName:e.name})}function mf(e){return pf(e,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function gf(e,...t){if("string"!=typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return uf.create(e,...t)}function yf(e,t,...n){if(!e)throw gf(t,...n)}function vf(e){const t="INTERNAL ASSERTION FAILED: "+e;throw hf(t),new Error(t)}function wf(e,t){e||vf(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function _f(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ef(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||"http:"!==_f()&&"https:"!==_f()&&!function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&!("connection"in navigator)||navigator.onLine}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Sf{constructor(e,t){this.shortDelay=e,this.longDelay=t,wf(t>e,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(bh())||"object"==typeof navigator&&"ReactNative"===navigator.product}get(){return Ef()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kf(e,t){wf(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:"undefined"!=typeof globalThis&&globalThis.fetch?globalThis.fetch:"undefined"!=typeof fetch?fetch:void vf("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:"undefined"!=typeof globalThis&&globalThis.Headers?globalThis.Headers:"undefined"!=typeof Headers?Headers:void vf("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:"undefined"!=typeof globalThis&&globalThis.Response?globalThis.Response:"undefined"!=typeof Response?Response:void vf("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},If=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xf=new Sf(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Af(e,t,n,r,i={}){return Rf(e,i,(async()=>{let i={},s={};r&&("GET"===t?s=r:i={body:JSON.stringify(r)});const a=Ih(Object.assign({key:e.config.apiKey},s)).slice(1),o=await e._getAdditionalHeaders();o["Content-Type"]="application/json",e.languageCode&&(o["X-Firebase-Locale"]=e.languageCode);const l=Object.assign({method:t,headers:o},i);return"undefined"!=typeof navigator&&"Cloudflare-Workers"===navigator.userAgent||(l.referrerPolicy="no-referrer"),e.emulatorConfig&&mh(e.emulatorConfig.host)&&(l.credentials="include"),Tf.fetch()(await Df(e,e.config.apiHost,n,a),l)}))}async function Rf(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},Cf),t);try{const t=new Of(e),i=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await i.json();if("needConfirmation"in s)throw Lf(e,"account-exists-with-different-credential",s);if(i.ok&&!("errorMessage"in s))return s;{const t=i.ok?s.errorMessage:s.error.message,[n,a]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw Lf(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw Lf(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw Lf(e,"user-disabled",s);const o=r[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(a)throw pf(e,o,a);df(e,o)}}catch(i){if(i instanceof Eh)throw i;df(e,"network-request-failed",{message:String(i)})}}async function Pf(e,t,n,r,i={}){const s=await Af(e,t,n,r,i);return"mfaPendingCredential"in s&&df(e,"multi-factor-auth-required",{_serverResponse:s}),s}async function Df(e,t,n,r){const i=`${t}${n}?${r}`,s=e,a=s.config.emulator?kf(e.config,i):`${e.config.apiScheme}://${i}`;if(If.includes(n)&&(await s._persistenceManagerAvailable,"COOKIE"===s._getPersistenceType())){return s._getPersistence()._getFinalTarget(a).toString()}return a}class Of{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(ff(this.auth,"network-request-failed"))),xf.get())}))}}function Lf(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ff(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mf(e,t){return Af(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uf(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}function Ff(e){return 1e3*Number(e)}function Vf(e){const[t,n,r]=e.split(".");if(void 0===t||void 0===n||void 0===r)return hf("JWT malformed, contained fewer than 3 sections"),null;try{const e=lh(n);return e?JSON.parse(e):(hf("Failed to decode base64 JWT payload"),null)}catch(i){return hf("Caught error parsing JWT payload as JSON",null==i?void 0:i.toString()),null}}function jf(e){const t=Vf(e);return yf(t,"internal-error"),yf(void 0!==t.exp,"internal-error"),yf(void 0!==t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zf(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Eh&&function({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}class Bf{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,e)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null==e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Uf(this.lastLoginAt),this.creationTime=Uf(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hf(e){var t;const n=e.auth,r=await e.getIdToken(),i=await zf(e,Mf(n,{idToken:r}));yf(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?qf(s.providerUserInfo):[],o=(l=e.providerData,u=a,[...l.filter((e=>!u.some((t=>t.providerId===e.providerId)))),...u]);var l,u;const c=e.isAnonymous,h=!(e.email&&s.passwordHash||(null==o?void 0:o.length)),d=!!c&&h,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new $f(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(e,f)}function qf(e){return e.map((e=>{var{providerId:t}=e,n=af(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Kf{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){yf(e.idToken,"internal-error"),yf(void 0!==e.idToken,"internal-error"),yf(void 0!==e.refreshToken,"internal-error");const t="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):jf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){yf(0!==e.length,"internal-error");const t=jf(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return t||!this.accessToken||this.isExpired?(yf(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null):this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await async function(e,t){const n=await Rf(e,{},(async()=>{const n=Ih({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:r,apiKey:i}=e.config,s=await Df(e,r,"/v1/token",`key=${i}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Tf.fetch()(s,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new Kf;return n&&(yf("string"==typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(yf("string"==typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(yf("number"==typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kf,this.toJSON())}_performRefresh(){return vf("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(e,t){yf("string"==typeof e||void 0===e,"internal-error",{appName:t})}class Wf{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=af(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Bf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new $f(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await zf(this,this.stsTokenManager.getToken(this.auth,e));return yf(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return async function(e,t=!1){const n=Ah(e),r=await n.getIdToken(t),i=Vf(r);yf(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s="object"==typeof i.firebase?i.firebase:void 0,a=null==s?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Uf(Ff(i.auth_time)),issuedAtTime:Uf(Ff(i.iat)),expirationTime:Uf(Ff(i.exp)),signInProvider:a||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null}}(this,e)}reload(){return async function(e){const t=Ah(e);await Hf(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}(this)}_assign(e){this!==e&&(yf(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Wf(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){yf(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Hf(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bd(this.auth.app))return Promise.reject(mf(this.auth));const e=await this.getIdToken();return await zf(this,async function(e,t){return Af(e,"POST","/v1/accounts:delete",t)}(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,a,o,l,u;const c=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(a=t.tenantId)&&void 0!==a?a:void 0,m=null!==(o=t._redirectEventId)&&void 0!==o?o:void 0,g=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:w,isAnonymous:b,providerData:_,stsTokenManager:E}=t;yf(v&&E,e,"internal-error");const S=Kf.fromJSON(this.name,E);yf("string"==typeof v,e,"internal-error"),Gf(c,e.name),Gf(h,e.name),yf("boolean"==typeof w,e,"internal-error"),yf("boolean"==typeof b,e,"internal-error"),Gf(d,e.name),Gf(f,e.name),Gf(p,e.name),Gf(m,e.name),Gf(g,e.name),Gf(y,e.name);const k=new Wf({uid:v,auth:e,email:h,emailVerified:w,displayName:c,isAnonymous:b,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:S,createdAt:g,lastLoginAt:y});return _&&Array.isArray(_)&&(k.providerData=_.map((e=>Object.assign({},e)))),m&&(k._redirectEventId=m),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new Kf;r.updateFromServerResponse(t);const i=new Wf({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Hf(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];yf(void 0!==r.localId,"internal-error");const i=void 0!==r.providerUserInfo?qf(r.providerUserInfo):[],s=!(r.email&&r.passwordHash||(null==i?void 0:i.length)),a=new Kf;a.updateFromIdToken(n);const o=new Wf({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:s}),l={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new $f(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash||(null==i?void 0:i.length))};return Object.assign(o,l),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=new Map;function Xf(e){wf(e instanceof Function,"Expected a class definition");let t=Qf.get(e);return t?(wf(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Qf.set(e,t),t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Yf.type="NONE";const Jf=Yf;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(e,t,n){return`firebase:${e}:${t}:${n}`}class ep{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=Zf(this.userKey,r.apiKey,i),this.fullPersistenceKey=Zf("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if("string"==typeof e){const t=await Mf(this.auth,{idToken:e}).catch((()=>{}));return t?Wf._fromGetAccountInfoResponse(this.auth,t,e):null}return Wf._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ep(Xf(Jf),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||Xf(Jf);const s=Zf(n,e.config.apiKey,e.name);let a=null;for(const u of t)try{const t=await u._get(s);if(t){let n;if("string"==typeof t){const r=await Mf(e,{idToken:t}).catch((()=>{}));if(!r)break;n=await Wf._fromGetAccountInfoResponse(e,r,t)}else n=Wf._fromJSON(e,t);u!==i&&(a=n),i=u;break}}catch(l){}const o=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&o.length?(i=o[0],a&&await i._set(s,a.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(l){}}))),new ep(i,e,n)):new ep(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(sp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(np(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(op(t))return"Blackberry";if(lp(t))return"Webos";if(rp(t))return"Safari";if((t.includes("chrome/")||ip(t))&&!t.includes("edge/"))return"Chrome";if(ap(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function np(e=bh()){return/firefox\//i.test(e)}function rp(e=bh()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ip(e=bh()){return/crios\//i.test(e)}function sp(e=bh()){return/iemobile/i.test(e)}function ap(e=bh()){return/android/i.test(e)}function op(e=bh()){return/blackberry/i.test(e)}function lp(e=bh()){return/webos/i.test(e)}function up(e=bh()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function cp(){return function(){const e=bh();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&10===document.documentMode}function hp(e=bh()){return up(e)||ap(e)||lp(e)||op(e)||/windows phone/i.test(e)||sp(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dp(e,t=[]){let n;switch(e){case"Browser":n=tp(bh());break;case"Worker":n=`${tp(bh())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${qd}/${r}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{n(e(t))}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(r){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e){var t,n,r,i;const s=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=null!==(t=s.minPasswordLength)&&void 0!==t?t:6,s.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=s.maxPasswordLength),void 0!==s.containsLowercaseCharacter&&(this.customStrengthOptions.containsLowercaseLetter=s.containsLowercaseCharacter),void 0!==s.containsUppercaseCharacter&&(this.customStrengthOptions.containsUppercaseLetter=s.containsUppercaseCharacter),void 0!==s.containsNumericCharacter&&(this.customStrengthOptions.containsNumericCharacter=s.containsNumericCharacter),void 0!==s.containsNonAlphanumericCharacter&&(this.customStrengthOptions.containsNonAlphanumericCharacter=s.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,"ENFORCEMENT_STATE_UNSPECIFIED"===this.enforcementState&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=null!==(r=null===(n=e.allowedNonAlphanumericCharacters)||void 0===n?void 0:n.join(""))&&void 0!==r?r:"",this.forceUpgradeOnSignin=null!==(i=e.forceUpgradeOnSignin)&&void 0!==i&&i,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,n,r,i,s,a;const o={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,o),this.validatePasswordCharacterOptions(e,o),o.isValid&&(o.isValid=null===(t=o.meetsMinPasswordLength)||void 0===t||t),o.isValid&&(o.isValid=null===(n=o.meetsMaxPasswordLength)||void 0===n||n),o.isValid&&(o.isValid=null===(r=o.containsLowercaseLetter)||void 0===r||r),o.isValid&&(o.isValid=null===(i=o.containsUppercaseLetter)||void 0===i||i),o.isValid&&(o.isValid=null===(s=o.containsNumericCharacter)||void 0===s||s),o.isValid&&(o.isValid=null===(a=o.containsNonAlphanumericCharacter)||void 0===a||a),o}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){let n;this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yp(this),this.idTokenSubscription=new yp(this),this.beforeStateQueue=new fp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=uf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise((e=>this._resolvePersistenceManagerAvailable=e))}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Xf(t)),this._initializationPromise=this.queue((async()=>{var n,r,i;if(!this._deleted&&(this.persistenceManager=await ep.create(this,e),null===(n=this._resolvePersistenceManagerAvailable)||void 0===n||n.call(this),!this._deleted)){if(null===(r=this._popupRedirectResolver)||void 0===r?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(s){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void(await this.currentUser.getIdToken())):void(await this._updateCurrentUser(e,!0)):void 0}async initializeCurrentUserFromIdToken(e){try{const t=await Mf(this,{idToken:e}),n=await Wf._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Bd(this.app)){const e=this.app.settings.authIdToken;return e?new Promise((t=>{setTimeout((()=>this.initializeCurrentUserFromIdToken(e).then(t,t)))})):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null==r?void 0:r._redirectEventId,a=await this.tryRedirectSignIn(e);n&&n!==s||!(null==a?void 0:a.user)||(r=a.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return yf(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Hf(e)}catch(t){if("auth/network-request-failed"!==(null==t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bd(this.app))return Promise.reject(mf(this));const t=e?Ah(e):null;return t&&yf(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&yf(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return Bd(this.app)?Promise.reject(mf(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bd(this.app)?Promise.reject(mf(this)):this.queue((async()=>{await this.assertedPersistence.setPersistence(Xf(e))}))}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return null===this.tenantId?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await async function(e,t={}){return Af(e,"GET","/v2/passwordPolicy",Nf(e,t))}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this),t=new pp(e);null===this.tenantId?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Sh("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise(((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged((()=>{n(),e()}),t)}}))}async revokeAccessToken(e){if(this.currentUser){const t={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:await this.currentUser.getIdToken()};null!=this.tenantId&&(t.tenantId=this.tenantId),await async function(e,t){return Af(e,"POST","/v2/accounts:revokeToken",Nf(e,t))}(this,t)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Xf(e)||this._popupRedirectResolver;yf(t,this,"argument-error"),this.redirectPersistenceManager=await ep.create(this,[Xf(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"==typeof t?t:t.next.bind(t);let s=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(yf(a,this,"internal-error"),a.then((()=>{s||i(this.currentUser)})),"function"==typeof t){const i=e.addObserver(t,n,r);return()=>{s=!0,i()}}{const n=e.addObserver(t);return()=>{s=!0,n()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return yf(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var e;if(Bd(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await(null===(e=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getToken());return(null==t?void 0:t.error)&&function(e,...t){cf.logLevel<=Lh.WARN&&cf.warn(`Auth (${qd}): ${e}`,...t)}(`Error while retrieving App Check token: ${t.error}`),null==t?void 0:t.token}}function gp(e){return Ah(e)}class yp{constructor(e){this.auth=e,this.observer=null,this.addObserver=function(e,t){const n=new xh(e,t);return n.subscribe.bind(n)}((e=>this.observer=e))}get next(){return yf(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wp(e,t,n){const r=gp(e);yf(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=bp(t),{host:s,port:a}=function(e){const t=bp(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const e=i[1];return{host:e,port:_p(r.substr(e.length+1))}}{const[e,t]=r.split(":");return{host:e,port:_p(t)}}}(t),o=null===a?"":`:${a}`,l={url:`${i}//${s}${o}/`},u=Object.freeze({host:s,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:!1})});if(!r._canInitEmulator)return yf(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),void yf(Th(l,r.config.emulator)&&Th(u,r.emulatorConfig),r,"emulator-config-failed");r.config.emulator=l,r.emulatorConfig=u,r.settings.appVerificationDisabledForTesting=!0,mh(s)?(gh(`${i}//${s}${o}`),wh("Auth",!0)):function(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials.");"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */()}function bp(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function _p(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class Ep{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return vf("not implemented")}_getIdTokenResponse(e){return vf("not implemented")}_linkToIdToken(e,t){return vf("not implemented")}_getReauthenticationResolver(e){return vf("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sp(e,t){return Pf(e,"POST","/v1/accounts:signInWithIdp",Nf(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kp extends Ep{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new kp(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):df("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"==typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=af(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new kp(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){return Sp(e,this.buildRequest())}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Sp(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Sp(e,t)}buildRequest(){const e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ih(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cp extends Tp{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip extends Cp{constructor(){super("facebook.com")}static credential(e){return kp._fromParams({providerId:Ip.PROVIDER_ID,signInMethod:Ip.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ip.credentialFromTaggedObject(e)}static credentialFromError(e){return Ip.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ip.credential(e.oauthAccessToken)}catch(t){return null}}}Ip.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ip.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xp extends Cp{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return kp._fromParams({providerId:xp.PROVIDER_ID,signInMethod:xp.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return xp.credentialFromTaggedObject(e)}static credentialFromError(e){return xp.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return xp.credential(t,n)}catch(r){return null}}}xp.GOOGLE_SIGN_IN_METHOD="google.com",xp.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Np extends Cp{constructor(){super("github.com")}static credential(e){return kp._fromParams({providerId:Np.PROVIDER_ID,signInMethod:Np.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Np.credentialFromTaggedObject(e)}static credentialFromError(e){return Np.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Np.credential(e.oauthAccessToken)}catch(t){return null}}}Np.GITHUB_SIGN_IN_METHOD="github.com",Np.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ap extends Cp{constructor(){super("twitter.com")}static credential(e,t){return kp._fromParams({providerId:Ap.PROVIDER_ID,signInMethod:Ap.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ap.credentialFromTaggedObject(e)}static credentialFromError(e){return Ap.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ap.credential(t,n)}catch(r){return null}}}Ap.TWITTER_SIGN_IN_METHOD="twitter.com",Ap.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rp{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Wf._fromIdTokenResponse(e,n,r),s=Pp(n);return new Rp({user:i,providerId:s,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Pp(n);return new Rp({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Pp(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dp(e){var t;if(Bd(e.app))return Promise.reject(mf(e));const n=gp(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Rp({user:n.currentUser,providerId:null,operationType:"signIn"});const r=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */await async function(e,t){return Pf(e,"POST","/v1/accounts:signUp",Nf(e,t))}(n,{returnSecureToken:!0}),i=await Rp._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op extends Eh{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Op.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new Op(e,t,n,r)}}function Lp(e,t,n,r){return("reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Op._fromErrorAndOperation(e,n,t,r);throw n}))}const Mp="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Mp,"1"),this.storage.removeItem(Mp),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp extends Up{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=hp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);cp()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,10):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Fp.type="LOCAL";const Vp=Fp;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp extends Up{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}jp.type="SESSION";const zp=jp;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bp{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Bp(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(s).map((async e=>e(t.origin,i))),o=await function(e){return Promise.all(e.map((async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}})))}(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:o})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $p(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Bp.receivers=[];class Hp{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((a,o)=>{const l=$p("",20);r.port1.start();const u=setTimeout((()=>{o(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{o(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),a(t.data.response);break;default:clearTimeout(u),clearTimeout(i),o(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qp(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kp(){return void 0!==qp().WorkerGlobalScope&&"function"==typeof qp().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gp="firebaseLocalStorageDb",Wp="firebaseLocalStorage",Qp="fbase_key";class Xp{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Yp(e,t){return e.transaction([Wp],t?"readwrite":"readonly").objectStore(Wp)}function Jp(){const e=indexedDB.open(Gp,1);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Wp,{keyPath:Qp})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Wp)?t(n):(n.close(),await function(){const e=indexedDB.deleteDatabase(Gp);return new Xp(e).toPromise()}(),t(await Jp()))}))}))}async function Zp(e,t,n){const r=Yp(e,!0).put({[Qp]:t,value:n});return new Xp(r).toPromise()}function em(e,t){const n=Yp(e,!0).delete(t);return new Xp(n).toPromise()}class tm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Jp()),this.db}async _withRetries(e){let t=0;for(;;)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>3)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Kp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bp._getInstance(Kp()?self:null),this.receiver._subscribe("keyChanged",(async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)}))),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(e){return null}}(),!this.activeServiceWorker)return;this.sender=new Hp(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){var t;if(this.sender&&this.activeServiceWorker&&((null===(t=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===t?void 0:t.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Jp();return await Zp(e,Mp,"1"),await em(e,Mp),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Zp(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>async function(e,t){const n=Yp(e,!1).get(t),r=await new Xp(n).toPromise();return void 0===r?null:r.value}(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>em(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Yp(e,!1).getAll();return new Xp(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;if(0!==e.length)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}tm.type="LOCAL";const nm=tm;new Sf(3e4,6e4);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rm extends Ep{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Sp(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Sp(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Sp(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function im(e){
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(e,t,n=!1){if(Bd(e.app))return Promise.reject(mf(e));const r="signIn",i=await Lp(e,r,t),s=await Rp._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}(e.auth,new rm(e),e.bypassAuthState)}function sm(e){const{auth:t,user:n}=e;return yf(n,t,"internal-error"),
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(e,t,n=!1){const{auth:r}=e;if(Bd(r.app))return Promise.reject(mf(r));const i="reauthenticate";try{const s=await zf(e,Lp(r,i,t,e),n);yf(s.idToken,r,"internal-error");const a=Vf(s.idToken);yf(a,r,"internal-error");const{sub:o}=a;return yf(e.uid===o,r,"user-mismatch"),Rp._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null==s?void 0:s.code)&&df(r,"user-mismatch"),s}}(n,new rm(e),e.bypassAuthState)}async function am(e){const{auth:t,user:n}=e;return yf(n,t,"internal-error"),async function(e,t,n=!1){const r=await zf(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Rp._forOperation(e,"link",r)}(n,new rm(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class om{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:a}=e;if(s)return void this.reject(s);const o={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(o))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return im;case"linkViaPopup":case"linkViaRedirect":return am;case"reauthViaPopup":case"reauthViaRedirect":return sm;default:df(this.auth,"internal-error")}}resolve(e){wf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wf(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=new Sf(2e3,1e4);class um extends om{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,um.currentPopupAction&&um.currentPopupAction.cancel(),um.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return yf(e,this.auth,"internal-error"),e}async onExecution(){wf(1===this.filter.length,"Popup operations only handle one event");const e=$p();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(ff(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(ff(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,um.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(ff(this.auth,"popup-closed-by-user"))}),8e3):this.pollId=window.setTimeout(e,lm.get())};e()}}um.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const cm="pendingRedirect",hm=new Map;class dm extends om{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=hm.get(this.auth._key());if(!e){try{const t=await async function(e,t){const n=function(e){return Zf(cm,e.config.apiKey,e.name)}(t),r=function(e){return Xf(e._redirectPersistence)}(e);if(!(await r._isAvailable()))return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(t)}catch(t){e=()=>Promise.reject(t)}hm.set(this.auth._key(),e)}return this.bypassAuthState||hm.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function fm(e,t){hm.set(e._key(),t)}async function pm(e,t,n=!1){if(Bd(e.app))return Promise.reject(mf(e));const r=gp(e),i=
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){return t?Xf(t):(yf(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}(r,t),s=new dm(r,i,n),a=await s.execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ym(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!ym(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(ff(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(gm(e))}saveEventToCache(e){this.cachedEventUids.add(gm(e)),this.lastProcessedEventTime=Date.now()}}function gm(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function ym({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null==t?void 0:t.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wm=/^https?/;async function bm(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(e,t={}){return Af(e,"GET","/v1/projects",t)}(e);for(const r of t)try{if(_m(r))return}catch(n){}df(e,"unauthorized-domain")}function _m(e){const t=bf(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!wm.test(n))return!1;if(vm.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Em=new Sf(3e4,6e4);function Sm(){const e=qp().___jsl;if(null==e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function km(e){return new Promise(((t,n)=>{var r,i,s,a;function o(){Sm(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Sm(),n(ff(e,"network-request-failed"))},timeout:Em.get()})}if(null===(i=null===(r=qp().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=qp().gapi)||void 0===s?void 0:s.load)){const t=`__${"iframefcb"}${Math.floor(1e6*Math.random())}`;return qp()[t]=()=>{gapi.load?o():n(ff(e,"network-request-failed"))},(a=`${vp.gapiScript}?onload=${t}`,vp.loadJS(a)).catch((e=>n(e)))}o()}})).catch((e=>{throw Tm=null,e}))}let Tm=null;
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Cm=new Sf(5e3,15e3),Im={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Nm(e){const t=e.config;yf(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?kf(t,"emulator/auth/iframe"):`https://${e.config.authDomain}/__/auth/iframe`,r={apiKey:t.apiKey,appName:e.name,v:qd},i=xm.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ih(r).slice(1)}`}async function Am(e){const t=await function(e){return Tm=Tm||km(e),Tm}(e),n=qp().gapi;return yf(n,e,"internal-error"),t.open({where:document.body,url:Nm(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Im,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=ff(e,"network-request-failed"),s=qp().setTimeout((()=>{r(i)}),Cm.get());function a(){qp().clearTimeout(s),n(t)}t.ping(a).then(a,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rm={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Pm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function Dm(e,t,n,r=500,i=600){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const l=Object.assign(Object.assign({},Rm),{width:r.toString(),height:i.toString(),top:s,left:a}),u=bh().toLowerCase();n&&(o=ip(u)?"_blank":n),np(u)&&(t=t||"http://localhost",l.scrollbars="yes");const c=Object.entries(l).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(function(e=bh()){var t;return up(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}(u)&&"_self"!==o)return function(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t||"",o),new Pm(null);const h=window.open(t||"",o,c);yf(h,e,"popup-blocked");try{h.focus()}catch(d){}return new Pm(h)}const Om="__/auth/handler",Lm="emulator/auth/handler",Mm=encodeURIComponent("fac");async function Um(e,t,n,r,i,s){yf(e.config.authDomain,e,"auth-domain-config-required"),yf(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:qd,eventId:i};if(t instanceof Tp){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries({}))a[e]=t}if(t instanceof Cp){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(a.scopes=e.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const c of Object.keys(o))void 0===o[c]&&delete o[c];const l=await e._getAppCheckToken(),u=l?`#${Mm}=${encodeURIComponent(l)}`:"";return`${function({config:e}){if(!e.emulator)return`https://${e.authDomain}/${Om}`;return kf(e,Lm)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)}?${Ih(o).slice(1)}${u}`}const Fm="webStorageSupport";const Vm=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zp,this._completeRedirectFn=pm,this._overrideRedirectResult=fm}async _openPopup(e,t,n,r){var i;wf(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Dm(e,await Um(e,t,n,bf(),r),$p())}async _openRedirect(e,t,n,r){await this._originValidation(e);return function(e){qp().location.href=e}(await Um(e,t,n,bf(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(wf(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Am(e),n=new mm(e);return t.register("authEvent",(t=>{yf(null==t?void 0:t.authEvent,e,"invalid-auth-event");return{status:n.onEvent(t.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Fm,{type:Fm},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r[Fm];void 0!==i&&t(!!i),df(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bm(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hp()||rp()||up()}};var jm="@firebase/auth",zm="1.10.6";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Bm{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(e)}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null==t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){yf(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $m=fh("authIdTokenMaxAge")||300;let Hm=null;function qm(e=Gd()){const t=zd(e,"auth");if(t.isInitialized())return t.getImmediate();const n=
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(e,t){const n=zd(e,"auth");if(n.isInitialized()){const e=n.getImmediate();if(Th(n.getOptions(),null!=t?t:{}))return e;df(e,"already-initialized")}return n.initialize({options:t})}(e,{popupRedirectResolver:Vm,persistence:[nm,Vp,zp]}),r=fh("authTokenSyncURL");if(r&&"boolean"==typeof isSecureContext&&isSecureContext){const e=new URL(r,location.origin);if(location.origin===e.origin){const t=(i=e.toString(),async e=>{const t=e&&await e.getIdTokenResult(),n=t&&((new Date).getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>$m)return;const r=null==t?void 0:t.token;Hm!==r&&(Hm=r,await fetch(i,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))});!function(e,t,n){Ah(e).beforeAuthStateChanged(t,n)}(n,t,(()=>t(n.currentUser))),function(e,t,n,r){Ah(e).onIdTokenChanged(t,n,r)}(n,(e=>t(e)))}}var i;const s=hh("auth");return s&&wp(n,`http://${s}`),n}var Km;vp={loadJS:e=>new Promise(((t,n)=>{const r=document.createElement("script");var i,s;r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=ff("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)})),gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="},Km="Browser",jd(new Rh("auth",((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=n.options;yf(s&&!s.includes(":"),"invalid-api-key",{appName:n.name});const o={apiKey:s,authDomain:a,clientPlatform:Km,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dp(Km)},l=new mp(n,r,i,o);return function(e,t){const n=(null==t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Xf);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null==t?void 0:t.popupRedirectResolver)}(l,t),l}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{e.getProvider("auth-internal").initialize()}))),jd(new Rh("auth-internal",(e=>{const t=gp(e.getProvider("auth").getImmediate());return new Bm(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Wd(jm,zm,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}(Km)),Wd(jm,zm,"esm2017");var Gm,Wm,Qm="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var i=0;16>i;++i)r[i]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],i=e.g[2];var s=e.g[3],a=t+(s^n&(i^s))+r[0]+3614090360&4294967295;a=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=(n=(i=(s=(t=n+(a<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[1]+3905402710&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[3]+3250441966&4294967295)<<22&4294967295|a>>>10))+((a=t+(s^n&(i^s))+r[4]+4118548399&4294967295)<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[5]+1200080426&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[7]+4249261313&4294967295)<<22&4294967295|a>>>10))+((a=t+(s^n&(i^s))+r[8]+1770035416&4294967295)<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[9]+2336552879&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[11]+2304563134&4294967295)<<22&4294967295|a>>>10))+((a=t+(s^n&(i^s))+r[12]+1804603682&4294967295)<<7&4294967295|a>>>25))+((a=s+(i^t&(n^i))+r[13]+4254626195&4294967295)<<12&4294967295|a>>>20))+((a=i+(n^s&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|a>>>15))+((a=n+(t^i&(s^t))+r[15]+1236535329&4294967295)<<22&4294967295|a>>>10))+((a=t+(i^s&(n^i))+r[1]+4129170786&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[11]+643717713&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[0]+3921069994&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^s&(n^i))+r[5]+3593408605&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[15]+3634488961&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[4]+3889429448&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^s&(n^i))+r[9]+568446438&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[3]+4107603335&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[8]+1163531501&4294967295)<<20&4294967295|a>>>12))+((a=t+(i^s&(n^i))+r[13]+2850285829&4294967295)<<5&4294967295|a>>>27))+((a=s+(n^i&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|a>>>23))+((a=i+(t^n&(s^t))+r[7]+1735328473&4294967295)<<14&4294967295|a>>>18))+((a=n+(s^t&(i^s))+r[12]+2368359562&4294967295)<<20&4294967295|a>>>12))+((a=t+(n^i^s)+r[5]+4294588738&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[8]+2272392833&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[14]+4259657740&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^s)+r[1]+2763975236&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[4]+1272893353&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[10]+3200236656&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^s)+r[13]+681279174&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[0]+3936430074&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[6]+76029189&4294967295)<<23&4294967295|a>>>9))+((a=t+(n^i^s)+r[9]+3654602809&4294967295)<<4&4294967295|a>>>28))+((a=s+(t^n^i)+r[12]+3873151461&4294967295)<<11&4294967295|a>>>21))+((a=i+(s^t^n)+r[15]+530742520&4294967295)<<16&4294967295|a>>>16))+((a=n+(i^s^t)+r[2]+3299628645&4294967295)<<23&4294967295|a>>>9))+((a=t+(i^(n|~s))+r[0]+4096336452&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[7]+1126891415&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(s|~n))+r[14]+2878612391&4294967295)<<15&4294967295|a>>>17))+((a=n+(s^(i|~t))+r[5]+4237533241&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~s))+r[12]+1700485571&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[3]+2399980690&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(s|~n))+r[10]+4293915773&4294967295)<<15&4294967295|a>>>17))+((a=n+(s^(i|~t))+r[1]+2240044497&4294967295)<<21&4294967295|a>>>11))+((a=t+(i^(n|~s))+r[8]+1873313359&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[15]+4264355552&4294967295)<<10&4294967295|a>>>22))+((a=i+(t^(s|~n))+r[6]+2734768916&4294967295)<<15&4294967295|a>>>17))+((a=n+(s^(i|~t))+r[13]+1309151649&4294967295)<<21&4294967295|a>>>11))+((s=(t=n+((a=t+(i^(n|~s))+r[4]+4149444226&4294967295)<<6&4294967295|a>>>26))+((a=s+(n^(t|~i))+r[11]+3174756917&4294967295)<<10&4294967295|a>>>22))^((i=s+((a=i+(t^(s|~n))+r[2]+718787259&4294967295)<<15&4294967295|a>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(i+(a<<21&4294967295|a>>>11))&4294967295,e.g[2]=e.g[2]+i&4294967295,e.g[3]=e.g[3]+s&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,i=e.length-1;0<=i;i--){var s=0|e[i];r&&s==t||(n[i]=s,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}(t,(function(){this.blockSize=-1})),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,i=this.B,s=this.h,a=0;a<t;){if(0==s)for(;a<=r;)n(this,e,a),a+=this.blockSize;if("string"==typeof e){for(;a<t;)if(i[s++]=e.charCodeAt(a++),s==this.blockSize){n(this,i),s=0;break}}else for(;a<t;)if(i[s++]=e[a++],s==this.blockSize){n(this,i),s=0;break}}this.h=s,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var i={};function s(e){return-128<=e&&128>e?function(e,t){var n=i;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,(function(e){return new r([0|e],0>e?-1:0)})):new r([0|e],0>e?-1:0)}function a(e){if(isNaN(e)||!isFinite(e))return o;if(0>e)return d(a(-e));for(var t=[],n=1,i=0;e>=n;i++)t[i]=e/n|0,n*=4294967296;return new r(t,0)}var o=s(0),l=s(1),u=s(16777216);function c(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function h(e){return-1==e.h}function d(e){for(var t=e.g.length,n=[],i=0;i<t;i++)n[i]=~e.g[i];return new r(n,~e.h).add(l)}function f(e,t){return e.add(d(t))}function p(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function m(e,t){this.g=e,this.h=t}function g(e,t){if(c(t))throw Error("division by zero");if(c(e))return new m(o,o);if(h(e))return t=g(d(e),t),new m(d(t.g),d(t.h));if(h(t))return t=g(e,d(t)),new m(d(t.g),t.h);if(30<e.g.length){if(h(e)||h(t))throw Error("slowDivide_ only works with positive integers.");for(var n=l,r=t;0>=r.l(e);)n=y(n),r=y(r);var i=v(n,1),s=v(r,1);for(r=v(r,2),n=v(n,2);!c(r);){var u=s.add(r);0>=u.l(e)&&(i=i.add(n),s=u),r=v(r,1),n=v(n,1)}return t=f(e,i.j(t)),new m(i,t)}for(i=o;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),u=(s=a(n)).j(t);h(u)||0<u.l(e);)u=(s=a(n-=r)).j(t);c(s)&&(s=l),i=i.add(s),e=f(e,u)}return new m(i,e)}function y(e){for(var t=e.g.length+1,n=[],i=0;i<t;i++)n[i]=e.i(i)<<1|e.i(i-1)>>>31;return new r(n,e.h)}function v(e,t){var n=t>>5;t%=32;for(var i=e.g.length-n,s=[],a=0;a<i;a++)s[a]=0<t?e.i(a+n)>>>t|e.i(a+n+1)<<32-t:e.i(a+n);return new r(s,e.h)}(e=r.prototype).m=function(){if(h(this))return-d(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(c(this))return"0";if(h(this))return"-"+d(this).toString(e);for(var t=a(Math.pow(e,6)),n=this,r="";;){var i=g(n,t).g,s=((0<(n=f(n,i.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(c(n=i))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return h(e=f(this,e))?-1:c(e)?0:1},e.abs=function(){return h(this)?d(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0,s=0;s<=t;s++){var a=i+(65535&this.i(s))+(65535&e.i(s)),o=(a>>>16)+(this.i(s)>>>16)+(e.i(s)>>>16);i=o>>>16,a&=65535,o&=65535,n[s]=o<<16|a}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(c(this)||c(e))return o;if(h(this))return h(e)?d(this).j(d(e)):d(d(this).j(e));if(h(e))return d(this.j(d(e)));if(0>this.l(u)&&0>e.l(u))return a(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],i=0;i<2*t;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<e.g.length;s++){var l=this.i(i)>>>16,f=65535&this.i(i),m=e.i(s)>>>16,g=65535&e.i(s);n[2*i+2*s]+=f*g,p(n,2*i+2*s),n[2*i+2*s+1]+=l*g,p(n,2*i+2*s+1),n[2*i+2*s+1]+=f*m,p(n,2*i+2*s+1),n[2*i+2*s+2]+=l*m,p(n,2*i+2*s+2)}for(i=0;i<t;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=t;i<2*t;i++)n[i]=0;return new r(n,0)},e.A=function(e){return g(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)&e.i(i);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)|e.i(i);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],i=0;i<t;i++)n[i]=this.i(i)^e.i(i);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,Wm=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=a,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=a(Math.pow(n,8)),i=o,s=0;s<t.length;s+=8){var l=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+l),n);8>l?(l=a(Math.pow(n,l)),i=i.j(l).add(a(u))):i=(i=i.j(r)).add(a(u))}return i},Gm=r}).apply(void 0!==Qm?Qm:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var Xm,Ym,Jm,Zm,eg,tg,ng,rg,ig="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof ig&&ig];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var i=n;e=e.split(".");for(var s=0;s<e.length-1;s++){var a=e[s];if(!(a in i))break e;i=i[a]}(r=r(s=i[e=e[e.length-1]]))!=s&&null!=r&&t(i,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",(function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,i={next:function(){if(!r&&n<e.length){var i=n++;return{value:t(i,e[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}(this,(function(e,t){return t}))}}));
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},i=this||self;function s(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function a(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function o(e,t,n){return e.call.apply(e.bind,arguments)}function l(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function u(e,t,n){return(u=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?o:l).apply(null,arguments)}function c(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function h(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function d(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(s(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let i=0;i<r;i++)e[n+i]=t[i]}else e.push(t)}}function p(e){return/^[\s\xa0]*$/.test(e)}function m(){var e=i.navigator;return e&&(e=e.userAgent)?e:""}function g(e){return g[" "](e),e}g[" "]=function(){};var y=!(-1==m().indexOf("Gecko")||-1!=m().toLowerCase().indexOf("webkit")&&-1==m().indexOf("Edge")||-1!=m().indexOf("Trident")||-1!=m().indexOf("MSIE")||-1!=m().indexOf("Edge"));function v(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function w(e){const t={};for(const n in e)t[n]=e[n];return t}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<b.length;t++)n=b[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function E(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function S(e){i.setTimeout((()=>{throw e}),0)}function k(){var e=N;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var T=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new C),(e=>e.reset()));class C{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let I,x=!1,N=new class{constructor(){this.h=this.g=null}add(e,t){const n=T.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},A=()=>{const e=i.Promise.resolve(void 0);I=()=>{e.then(R)}};var R=()=>{for(var e;e=k();){try{e.h.call(e.g)}catch(n){S(n)}var t=T;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}x=!1};function P(){this.s=this.s,this.C=this.C}function D(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}P.prototype.s=!1,P.prototype.ma=function(){this.s||(this.s=!0,this.N())},P.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},D.prototype.h=function(){this.defaultPrevented=!0};var O=function(){if(!i.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};i.addEventListener("test",e,t),i.removeEventListener("test",e,t)}catch(n){}return e}();function L(e,t){if(D.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(y){e:{try{g(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:M[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&L.aa.h.call(this)}}h(L,D);var M={2:"touch",3:"pen",4:"mouse"};L.prototype.h=function(){L.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var U="closure_listenable_"+(1e6*Math.random()|0),F=0;function V(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=i,this.key=++F,this.da=this.fa=!1}function j(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function z(e){this.src=e,this.g={},this.h=0}function B(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=Array.prototype.indexOf.call(i,t,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(j(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function $(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.da&&s.listener==t&&s.capture==!!n&&s.ha==r)return i}return-1}z.prototype.add=function(e,t,n,r,i){var s=e.toString();(e=this.g[s])||(e=this.g[s]=[],this.h++);var a=$(e,t,r,i);return-1<a?(t=e[a],n||(t.fa=!1)):((t=new V(t,this.src,s,!!r,i)).fa=n,e.push(t)),t};var H="closure_lm_"+(1e6*Math.random()|0),q={};function K(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)K(e,t[s],n,r,i);return null}return n=Z(n),e&&e[U]?e.K(t,n,!!a(r)&&!!r.capture,i):function(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=a(i)?!!i.capture:!!i,l=Y(e);if(l||(e[H]=l=new z(e)),n=l.add(t,n,r,o,s),n.proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=X;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)O||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Q(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,i)}function G(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)G(e,t[s],n,r,i);else r=a(r)?!!r.capture:!!r,n=Z(n),e&&e[U]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=$(s=e.g[t],n,r,i))&&(j(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Y(e))&&(t=e.g[t.toString()],e=-1,t&&(e=$(t,n,r,i)),(n=-1<e?t[e]:null)&&W(n))}function W(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[U])B(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Q(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Y(t))?(B(n,e),0==n.h&&(n.src=null,t[H]=null)):j(e)}}}function Q(e){return e in q?q[e]:q[e]="on"+e}function X(e,t){if(e.da)e=!0;else{t=new L(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&W(e),e=n.call(r,t)}return e}function Y(e){return(e=e[H])instanceof z?e:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(e){return"function"==typeof e?e:(e[J]||(e[J]=function(t){return e.handleEvent(t)}),e[J])}function ee(){P.call(this),this.i=new z(this),this.M=this,this.F=null}function te(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new D(t,e);else if(t instanceof D)t.target=t.target||e;else{var i=t;_(t=new D(r,e),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var a=t.g=n[s];i=ne(a,r,!0,t)&&i}if(i=ne(a=t.g=e,r,!0,t)&&i,i=ne(a,r,!1,t)&&i,n)for(s=0;s<n.length;s++)i=ne(a=t.g=n[s],r,!1,t)&&i}function ne(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var a=t[s];if(a&&!a.da&&a.capture==n){var o=a.listener,l=a.ha||a.src;a.fa&&B(e.i,a),i=!1!==o.call(l,r)&&i}}return i&&!r.defaultPrevented}function re(e,t,n){if("function"==typeof e)n&&(e=u(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=u(e.handleEvent,e)}return 2147483647<Number(t)?-1:i.setTimeout(e,t||0)}function ie(e){e.g=re((()=>{e.g=null,e.i&&(e.i=!1,ie(e))}),e.l);const t=e.h;e.h=null,e.m.apply(null,t)}h(ee,P),ee.prototype[U]=!0,ee.prototype.removeEventListener=function(e,t,n,r){G(this,e,t,n,r)},ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)j(n[r]);delete t.g[e],t.h--}}this.F=null},ee.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ee.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class se extends P{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:ie(this)}N(){super.N(),this.g&&(i.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ae(e){P.call(this),this.h=e,this.g={}}h(ae,P);var oe=[];function le(e){v(e.g,(function(e,t){this.g.hasOwnProperty(t)&&W(e)}),e),e.g={}}ae.prototype.N=function(){ae.aa.N.call(this),le(this)},ae.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ue=i.JSON.stringify,ce=i.JSON.parse,he=class{stringify(e){return i.JSON.stringify(e,void 0)}parse(e){return i.JSON.parse(e,void 0)}};function de(){}function fe(e){return e.h||(e.h=e.i())}function pe(){}de.prototype.h=null;var me={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function ge(){D.call(this,"d")}function ye(){D.call(this,"c")}h(ge,D),h(ye,D);var ve={},we=null;function be(){return we=we||new ee}function _e(e){D.call(this,ve.La,e)}function Ee(e){const t=be();te(t,new _e(t))}function Se(e,t){D.call(this,ve.STAT_EVENT,e),this.stat=t}function ke(e){const t=be();te(t,new Se(t,e))}function Te(e,t){D.call(this,ve.Ma,e),this.size=t}function Ce(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return i.setTimeout((function(){e()}),t)}function Ie(){this.g=!0}function xe(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var a=1;a<i.length;a++)i[a]=""}}}return ue(n)}catch(o){return t}}(e,n)+(r?" "+r:"")}))}ve.La="serverreachability",h(_e,D),ve.STAT_EVENT="statevent",h(Se,D),ve.Ma="timingevent",h(Te,D),Ie.prototype.xa=function(){this.g=!1},Ie.prototype.info=function(){};var Ne,Ae={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Re={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Pe(){}function De(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new ae(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Oe}function Oe(){this.i=null,this.g="",this.h=!1}h(Pe,de),Pe.prototype.g=function(){return new XMLHttpRequest},Pe.prototype.i=function(){return{}},Ne=new Pe;var Le={},Me={};function Ue(e,t,n){e.L=1,e.v=ct(it(t)),e.m=n,e.P=!0,Fe(e,null)}function Fe(e,t){e.F=Date.now(),ze(e),e.A=it(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),St(n.i,"t",r),e.C=0,n=e.j.J,e.h=new Oe,e.g=hn(e.j,n?t:null,!e.m),0<e.O&&(e.M=new se(u(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var i="readystatechange";Array.isArray(i)||(i&&(oe[0]=i.toString()),i=oe);for(var s=0;s<i.length;s++){var a=K(n,i[s],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}t=e.H?w(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),Ee(),function(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var a="",o=s.split("&"),l=0;l<o.length;l++){var u=o[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");a=2<=h.length&&"type"==h[1]?a+(c+"=")+u+"&":a+(c+"=redacted&")}}else a=null;else a=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+a}))}(e.i,e.u,e.A,e.l,e.R,e.m)}function Ve(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function je(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Me:(n=Number(t.substring(n,r)),isNaN(n)?Le:(r+=1)+n>t.length?Me:(t=t.slice(r,r+n),e.C=r+n,t))}function ze(e){e.S=Date.now()+e.I,Be(e,e.I)}function Be(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Ce(u(e.ba,e),t)}function $e(e){e.B&&(i.clearTimeout(e.B),e.B=null)}function He(e){0==e.j.G||e.J||an(e.j,e)}function qe(e){$e(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,le(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function Ke(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||Ye(n.h,e)))if(!e.K&&Ye(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;sn(n),Wt(n)}tn(n),ke(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ce(u(n.Za,n),6e3));if(1>=Xe(n.h)&&n.ca){try{n.ca()}catch(c){}n.ca=void 0}}else ln(n,11)}else if((e.K||n.g==e)&&sn(n),!p(t))for(i=n.Da.g.parse(t),t=0;t<i.length;t++){let u=i[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.K=u[1],n.ia=u[2];const t=u[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const i=u[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const c=u[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(Je(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,ut(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var a=e;if((r=n).qa=cn(r,r.J?r.ia:null,r.W),a.K){Ze(r.h,a);var o=a,l=r.L;l&&(o.I=l),o.B&&($e(o),ze(o)),r.g=a}else en(r);0<n.i.length&&Xt(n)}else"stop"!=u[0]&&"close"!=u[0]||ln(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ln(n,7):Gt(n):"noop"!=u[0]&&n.l&&n.l.ta(u),n.v=0)}Ee()}catch(c){}}De.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==$t(e)?t.j():this.Y(e)},De.prototype.Y=function(e){try{if(e==this.g)e:{const d=$t(this.g);var t=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||Ht(this.g)))){this.J||4!=d||7==t||Ee(),$e(this);var n=this.g.Z();this.X=n;t:if(Ve(this)){var r=Ht(this.g);e="";var s=r.length,a=4==$t(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){qe(this),He(this);var o="";break t}this.h.i=new i.TextDecoder}for(t=0;t<s;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(a&&t==s-1)});r.length=0,this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,function(e,t,n,r,i,s,a){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+a}))}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var l,u=this.g;if((l=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!p(l)){var c=l;break t}}c=null}if(!(n=c)){this.o=!1,this.s=3,ke(12),qe(this),He(this);break e}xe(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ke(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<o.length;){if(e=je(this,o),e==Me){4==d&&(this.s=4,ke(14),n=!1),xe(this.i,this.l,null,"[Incomplete Response]");break}if(e==Le){this.s=4,ke(15),xe(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}xe(this.i,this.l,e,null),Ke(this,e)}if(Ve(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=o.length||this.h.h||(this.s=1,ke(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),nn(h),h.M=!0,ke(11))}}else xe(this.i,this.l,o,"[Invalid Chunked Response]"),qe(this),He(this)}else xe(this.i,this.l,o,null),Ke(this,o);4==d&&qe(this),this.o&&!this.J&&(4==d?an(this.j,this):(this.o=!1,ze(this)))}else(function(e){const t={};e=(e.g&&2<=$t(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(p(e[r]))continue;var n=E(e[r]);const i=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const s=t[i]||[];t[i]=s,s.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,(function(e){return e.join(", ")}))})(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,ke(12)):(this.s=0,ke(13)),qe(this),He(this)}}}catch(d){}},De.prototype.cancel=function(){this.J=!0,qe(this)},De.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info((function(){return"TIMEOUT: "+t}))}(this.i,this.A),2!=this.L&&(Ee(),ke(17)),qe(this),this.s=2,He(this)):Be(this,this.S-e)};var Ge=class{constructor(e,t){this.g=e,this.map=t}};function We(e){this.l=e||10,i.PerformanceNavigationTiming?e=0<(e=i.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(i.chrome&&i.chrome.loadTimes&&i.chrome.loadTimes()&&i.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Qe(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Xe(e){return e.h?1:e.g?e.g.size:0}function Ye(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Je(e,t){e.g?e.g.add(t):e.h=t}function Ze(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function et(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return d(e.i)}function tt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(s(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(s(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(s(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),i=r.length,a=0;a<i;a++)t.call(void 0,r[a],n&&n[a],e)}We.prototype.cancel=function(){if(this.i=et(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var nt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function rt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof rt){this.h=e.h,st(this,e.j),this.o=e.o,this.g=e.g,at(this,e.s),this.l=e.l;var t=e.i,n=new wt;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),ot(this,n),this.m=e.m}else e&&(t=String(e).match(nt))?(this.h=!1,st(this,t[1]||"",!0),this.o=ht(t[2]||""),this.g=ht(t[3]||"",!0),at(this,t[4]),this.l=ht(t[5]||"",!0),ot(this,t[6]||"",!0),this.m=ht(t[7]||"")):(this.h=!1,this.i=new wt(null,this.h))}function it(e){return new rt(e)}function st(e,t,n){e.j=n?ht(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function at(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function ot(e,t,n){t instanceof wt?(e.i=t,function(e,t){t&&!e.j&&(bt(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(_t(this,t),St(this,n,e))}),e)),e.j=t}(e.i,e.h)):(n||(t=dt(t,yt)),e.i=new wt(t,e.h))}function ut(e,t,n){e.i.set(t,n)}function ct(e){return ut(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function ht(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function dt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,ft),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function ft(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}rt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(dt(t,pt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(dt(t,pt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(dt(n,"/"==n.charAt(0)?gt:mt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",dt(n,vt)),e.join("")};var pt=/[#\/\?@]/g,mt=/[#\?:]/g,gt=/[#\?]/g,yt=/[#\?@]/g,vt=/#/g;function wt(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function bt(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function _t(e,t){bt(e),t=kt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Et(e,t){return bt(e),t=kt(e,t),e.g.has(t)}function St(e,t,n){_t(e,t),0<n.length&&(e.i=null,e.g.set(kt(e,t),d(n)),e.h+=n.length)}function kt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Tt(e,t,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function Ct(){this.g=new he}function It(e,t,n){const r=n||"";try{tt(e,(function(e,n){let i=e;a(e)&&(i=ue(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function xt(e){this.l=e.Ub||null,this.j=e.eb||!1}function Nt(e,t){ee.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function At(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function Rt(e){e.readyState=4,e.l=null,e.j=null,e.v=null,Pt(e)}function Pt(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Dt(e){let t="";return v(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Ot(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Dt(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):ut(e,t,n))}function Lt(e){ee.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=wt.prototype).add=function(e,t){bt(this),this.i=null,e=kt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){bt(this),this.g.forEach((function(n,r){n.forEach((function(n){e.call(t,n,r,this)}),this)}),this)},e.na=function(){bt(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const i=e[r];for(let e=0;e<i.length;e++)n.push(t[r])}return n},e.V=function(e){bt(this);let t=[];if("string"==typeof e)Et(this,e)&&(t=t.concat(this.g.get(kt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return bt(this),this.i=null,Et(this,e=kt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const s=encodeURIComponent(String(r)),a=this.V(r);for(r=0;r<a.length;r++){var i=s;""!==a[r]&&(i+="="+encodeURIComponent(String(a[r]))),e.push(i)}}return this.i=e.join("&")},h(xt,de),xt.prototype.g=function(){return new Nt(this.l,this.j)},xt.prototype.i=function(e){return function(){return e}}({}),h(Nt,ee),(e=Nt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,Pt(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||i).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Rt(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Pt(this)),this.g&&(this.readyState=3,Pt(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==i.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;At(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?Rt(this):Pt(this),3==this.readyState&&At(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,Rt(this))},e.Qa=function(e){this.g&&(this.response=e,Rt(this))},e.ga=function(){this.g&&Rt(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Nt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),h(Lt,ee);var Mt=/^https?$/i,Ut=["POST","PUT"];function Ft(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Vt(e),zt(e)}function Vt(e){e.A||(e.A=!0,te(e,"complete"),te(e,"error"))}function jt(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=$t(e)||2!=e.Z()))if(e.u&&4==$t(e))re(e.Ea,0,e);else if(te(e,"readystatechange"),4==$t(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var s;if(s=0===r){var a=String(e.D).match(nt)[1]||null;!a&&i.self&&i.self.location&&(a=i.self.location.protocol.slice(0,-1)),s=!Mt.test(a?a.toLowerCase():"")}n=s}if(n)te(e,"complete"),te(e,"success");else{e.m=6;try{var o=2<$t(e)?e.g.statusText:""}catch(l){o=""}e.l=o+" ["+e.Z()+"]",Vt(e)}}finally{zt(e)}}}function zt(e,t){if(e.g){Bt(e);const r=e.g,i=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||te(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Bt(e){e.I&&(i.clearTimeout(e.I),e.I=null)}function $t(e){return e.g?e.g.readyState:0}function Ht(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function qt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Kt(e){this.Aa=0,this.i=[],this.j=new Ie,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=qt("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=qt("baseRetryDelayMs",5e3,e),this.cb=qt("retryDelaySeedMs",1e4,e),this.Wa=qt("forwardChannelMaxRetries",2,e),this.wa=qt("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new We(e&&e.concurrentRequestLimit),this.Da=new Ct,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function Gt(e){if(Qt(e),3==e.G){var t=e.U++,n=it(e.I);if(ut(n,"SID",e.K),ut(n,"RID",t),ut(n,"TYPE","terminate"),Jt(e,n),(t=new De(e,e.j,t)).L=2,t.v=ct(it(n)),n=!1,i.navigator&&i.navigator.sendBeacon)try{n=i.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&i.Image&&((new Image).src=t.v,n=!0),n||(t.g=hn(t.j,null),t.g.ea(t.v)),t.F=Date.now(),ze(t)}un(e)}function Wt(e){e.g&&(nn(e),e.g.cancel(),e.g=null)}function Qt(e){Wt(e),e.u&&(i.clearTimeout(e.u),e.u=null),sn(e),e.h.cancel(),e.s&&("number"==typeof e.s&&i.clearTimeout(e.s),e.s=null)}function Xt(e){if(!Qe(e.h)&&!e.s){e.s=!0;var t=e.Ga;I||A(),x||(I(),x=!0),N.add(t,e),e.B=0}}function Yt(e,t){var n;n=t?t.l:e.U++;const r=it(e.I);ut(r,"SID",e.K),ut(r,"RID",n),ut(r,"AID",e.T),Jt(e,r),e.m&&e.o&&Ot(r,e.m,e.o),n=new De(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=Zt(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),Je(e.h,n),Ue(n,r,t)}function Jt(e,t){e.H&&v(e.H,(function(e,n){ut(t,n,e)})),e.l&&tt({},(function(e,n){ut(t,n,e)}))}function Zt(e,t,n){n=Math.min(e.i.length,n);var r=e.l?u(e.l.Na,e.l,e):null;e:{var i=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let a=!0;for(let o=0;o<n;o++){let n=i[o].g;const l=i[o].map;if(n-=t,0>n)t=Math.max(0,i[o].g-100),a=!1;else try{It(l,e,"req"+n+"_")}catch(s){r&&r(l)}}if(a){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function en(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;I||A(),x||(I(),x=!0),N.add(t,e),e.v=0}}function tn(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Ce(u(e.Fa,e),on(e,e.v)),e.v++,!0)}function nn(e){null!=e.A&&(i.clearTimeout(e.A),e.A=null)}function rn(e){e.g=new De(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=it(e.qa);ut(t,"RID","rpc"),ut(t,"SID",e.K),ut(t,"AID",e.T),ut(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&ut(t,"TO",e.ja),ut(t,"TYPE","xmlhttp"),Jt(e,t),e.m&&e.o&&Ot(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=ct(it(t)),n.m=null,n.P=!0,Fe(n,e)}function sn(e){null!=e.C&&(i.clearTimeout(e.C),e.C=null)}function an(e,t){var n=null;if(e.g==t){sn(e),nn(e),e.g=null;var r=2}else{if(!Ye(e.h,t))return;n=t.D,Ze(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var i=e.B;te(r=be(),new Te(r,n)),Xt(e)}else en(e);else if(3==(i=t.s)||0==i&&0<t.X||!(1==r&&function(e,t){return!(Xe(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=Ce(u(e.Ga,e,t),on(e,e.B)),e.B++,0)))}(e,t)||2==r&&tn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),i){case 1:ln(e,5);break;case 4:ln(e,10);break;case 3:ln(e,6);break;default:ln(e,2)}}function on(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function ln(e,t){if(e.j.info("Error code "+t),2==t){var n=u(e.fb,e),r=e.Xa;const t=!r;r=new rt(r||"//www.google.com/images/cleardot.gif"),i.location&&"http"==i.location.protocol||st(r,"https"),ct(r),t?function(e,t){const n=new Ie;if(i.Image){const r=new Image;r.onload=c(Tt,n,"TestLoadImage: loaded",!0,t,r),r.onerror=c(Tt,n,"TestLoadImage: error",!1,t,r),r.onabort=c(Tt,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=c(Tt,n,"TestLoadImage: timeout",!1,t,r),i.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new Ie;const n=new AbortController,r=setTimeout((()=>{n.abort(),Tt(0,0,!1,t)}),1e4);fetch(e,{signal:n.signal}).then((e=>{clearTimeout(r),e.ok?Tt(0,0,!0,t):Tt(0,0,!1,t)})).catch((()=>{clearTimeout(r),Tt(0,0,!1,t)}))}(r.toString(),n)}else ke(2);e.G=0,e.l&&e.l.sa(t),un(e),Qt(e)}function un(e){if(e.G=0,e.ka=[],e.l){const t=et(e.h);0==t.length&&0==e.i.length||(f(e.ka,t),f(e.ka,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.ra()}}function cn(e,t,n){var r=n instanceof rt?it(n):new rt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),at(r,r.s);else{var s=i.location;r=s.protocol,t=t?t+"."+s.hostname:s.hostname,s=+s.port;var a=new rt(null);r&&st(a,r),t&&(a.g=t),s&&at(a,s),n&&(a.l=n),r=a}return n=e.D,t=e.ya,n&&t&&ut(r,n,t),ut(r,"VER",e.la),Jt(e,r),r}function hn(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new Lt(new xt({eb:n})):new Lt(e.pa)).Ha(e.J),t}function dn(){}function fn(){}function pn(e,t){ee.call(this),this.g=new Kt(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!p(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!p(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new yn(this)}function mn(e){ge.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function gn(){ye.call(this),this.status=1}function yn(e){this.g=e}(e=Lt.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ne.g(),this.v=this.o?fe(this.o):fe(Ne),this.g.onreadystatechange=u(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(a){return void Ft(this,a)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),s=i.FormData&&e instanceof i.FormData,!(0<=Array.prototype.indexOf.call(Ut,t,void 0))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bt(this),this.u=!0,this.g.send(e),this.u=!1}catch(a){Ft(this,a)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,te(this,"complete"),te(this,"abort"),zt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zt(this,!0)),Lt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?jt(this):this.bb())},e.bb=function(){jt(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<$t(this)?this.g.status:-1}catch(lt){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(lt){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ce(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=Kt.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){ke(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=cn(this,null,this.W),Xt(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const i=new De(this,this.j,e);let s=this.o;if(this.S&&(s?(s=w(s),_(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=Zt(this,i,t),ut(n=it(this.I),"RID",e),ut(n,"CVER",22),this.D&&ut(n,"X-HTTP-Session-Id",this.D),Jt(this,n),s&&(this.O?t="headers="+encodeURIComponent(String(Dt(s)))+"&"+t:this.m&&Ot(n,this.m,s)),Je(this.h,i),this.Ua&&ut(n,"TYPE","init"),this.P?(ut(n,"$req",t),ut(n,"SID","null"),i.T=!0,Ue(i,n,null)):Ue(i,n,t),this.G=2}}else 3==this.G&&(e?Yt(this,e):0==this.i.length||Qe(this.h)||Yt(this))},e.Fa=function(){if(this.u=null,rn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Ce(u(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ke(10),Wt(this),rn(this))},e.Za=function(){null!=this.C&&(this.C=null,Wt(this),tn(this),ke(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),ke(2)):(this.j.info("Failed to ping google.com"),ke(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=dn.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},fn.prototype.g=function(e,t){return new pn(e,t)},h(pn,ee),pn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},pn.prototype.close=function(){Gt(this.g)},pn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=ue(e),e=n);t.i.push(new Ge(t.Ya++,e)),3==t.G&&Xt(t)},pn.prototype.N=function(){this.g.l=null,delete this.j,Gt(this.g),delete this.g,pn.aa.N.call(this)},h(mn,ge),h(gn,ye),h(yn,dn),yn.prototype.ua=function(){te(this.g,"a")},yn.prototype.ta=function(e){te(this.g,new mn(e))},yn.prototype.sa=function(e){te(this.g,new gn)},yn.prototype.ra=function(){te(this.g,"b")},fn.prototype.createWebChannel=fn.prototype.g,pn.prototype.send=pn.prototype.o,pn.prototype.open=pn.prototype.m,pn.prototype.close=pn.prototype.close,rg=function(){return new fn},ng=function(){return be()},tg=ve,eg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Ae.NO_ERROR=0,Ae.TIMEOUT=8,Ae.HTTP_ERROR=6,Zm=Ae,Re.COMPLETE="complete",Jm=Re,pe.EventType=me,me.OPEN="a",me.CLOSE="b",me.ERROR="c",me.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Ym=pe,Lt.prototype.listenOnce=Lt.prototype.L,Lt.prototype.getLastError=Lt.prototype.Ka,Lt.prototype.getLastErrorCode=Lt.prototype.Ba,Lt.prototype.getStatus=Lt.prototype.Z,Lt.prototype.getResponseJson=Lt.prototype.Oa,Lt.prototype.getResponseText=Lt.prototype.oa,Lt.prototype.send=Lt.prototype.ea,Lt.prototype.setWithCredentials=Lt.prototype.Ha,Xm=Lt}).apply(void 0!==ig?ig:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const sg="@firebase/firestore",ag="4.7.16";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}og.UNAUTHENTICATED=new og(null),og.GOOGLE_CREDENTIALS=new og("google-credentials-uid"),og.FIRST_PARTY=new og("first-party-uid"),og.MOCK_USER=new og("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let lg="11.8.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=new zh("@firebase/firestore");function cg(){return ug.logLevel}function hg(e,...t){if(ug.logLevel<=Lh.DEBUG){const n=t.map(pg);ug.debug(`Firestore (${lg}): ${e}`,...n)}}function dg(e,...t){if(ug.logLevel<=Lh.ERROR){const n=t.map(pg);ug.error(`Firestore (${lg}): ${e}`,...n)}}function fg(e,...t){if(ug.logLevel<=Lh.WARN){const n=t.map(pg);ug.warn(`Firestore (${lg}): ${e}`,...n)}}function pg(e){if("string"==typeof e)return e;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return t=e,JSON.stringify(t)}catch(n){return e}var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mg(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,gg(e,r,n)}function gg(e,t,n){let r=`FIRESTORE (${lg}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(i){r+=" CONTEXT: "+n}throw dg(r),new Error(r)}function yg(e,t,n,r){let i="Unexpected state";"string"==typeof n?i=n:r=n,e||gg(t,i,r)}function vg(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class bg extends Eh{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _g{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(og.UNAUTHENTICATED)))}shutdown(){}}class kg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Tg{constructor(e){this.t=e,this.currentUser=og.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){yg(void 0===this.o,42304);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new _g;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _g,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},a=e=>{hg("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),s())};this.t.onInit((e=>a(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?a(e):(hg("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _g)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(hg("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(yg("string"==typeof t.accessToken,31837,{l:t}),new Eg(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return yg(null===e||"string"==typeof e,2055,{h:e}),new og(e)}}class Cg{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=og.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Ig{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new Cg(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(og.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class xg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ng{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Bd(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){yg(void 0===this.o,3512);const n=e=>{null!=e.error&&hg("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.m;return this.m=e.token,hg("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{hg("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?r(e):hg("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new xg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(yg("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new xg(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ag(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rg(){return new TextEncoder}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=Ag(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function Dg(e,t){return e<t?-1:e>t?1:0}function Og(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=e.codePointAt(n),i=t.codePointAt(n);if(r!==i){if(r<128&&i<128)return Dg(r,i);{const s=Rg(),a=Mg(s.encode(Lg(e,n)),s.encode(Lg(t,n)));return 0!==a?a:Dg(r,i)}}n+=r>65535?2:1}return Dg(e.length,t.length)}function Lg(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function Mg(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return Dg(e[n],t[n]);return Dg(e.length,t.length)}function Ug(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=-62135596800,Vg=1e6;class jg{static now(){return jg.fromMillis(Date.now())}static fromDate(e){return jg.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Vg);return new jg(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new bg(wg.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new bg(wg.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Fg)throw new bg(wg.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new bg(wg.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Vg}_compareTo(e){return this.seconds===e.seconds?Dg(this.nanoseconds,e.nanoseconds):Dg(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-Fg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{static fromTimestamp(e){return new zg(e)}static min(){return new zg(new jg(0,0))}static max(){return new zg(new jg(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="__name__";class $g{constructor(e,t,n){void 0===t?t=0:t>e.length&&mg(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&mg(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===$g.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof $g?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=$g.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return Dg(e.length,t.length)}static compareSegments(e,t){const n=$g.isNumericId(e),r=$g.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?$g.extractNumericId(e).compare($g.extractNumericId(t)):Og(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gm.fromString(e.substring(4,e.length-2))}}class Hg extends $g{construct(e,t,n){return new Hg(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new bg(wg.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new Hg(t)}static emptyPath(){return new Hg([])}}const qg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Kg extends $g{construct(e,t,n){return new Kg(e,t,n)}static isValidIdentifier(e){return qg.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kg.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===Bg}static keyField(){return new Kg([Bg])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new bg(wg.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new bg(wg.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new bg(wg.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new bg(wg.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Kg(t)}static emptyPath(){return new Kg([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{constructor(e){this.path=e}static fromPath(e){return new Gg(Hg.fromString(e))}static fromName(e){return new Gg(Hg.fromString(e).popFirst(5))}static empty(){return new Gg(Hg.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===Hg.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return Hg.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Gg(new Hg(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wg(e){return new Qg(e.readTime,e.key,-1)}class Qg{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Qg(zg.min(),Gg.empty(),-1)}static max(){return new Qg(zg.max(),Gg.empty(),-1)}}function Xg(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=Gg.comparator(e.documentKey,t.documentKey),0!==n?n:Dg(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class Yg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jg(e){if(e.code!==wg.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;hg("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zg{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&mg(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Zg(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Zg?t:Zg.resolve(t)}catch(t){return Zg.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Zg.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Zg.reject(t)}static resolve(e){return new Zg(((t,n)=>{t(e)}))}static reject(e){return new Zg(((t,n)=>{n(e)}))}static waitFor(e){return new Zg(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Zg.resolve(!1);for(const n of e)t=t.next((e=>e?Zg.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Zg(((n,r)=>{const i=e.length,s=new Array(i);let a=0;for(let o=0;o<i;o++){const l=o;t(e[l]).next((e=>{s[l]=e,++a,a===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Zg(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}function ey(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ue(e),this.ce=e=>t.writeSequenceNumber(e))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}ty.le=-1;function ny(e){return null==e}function ry(e){return 0===e&&1/e==-1/0}function iy(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function sy(e){return e+""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ay(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function oy(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function ly(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uy{constructor(e,t){this.comparator=e,this.root=t||hy.EMPTY}insert(e,t){return new uy(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,hy.BLACK,null,null))}remove(e){return new uy(this.comparator,this.root.remove(e,this.comparator).copy(null,null,hy.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new cy(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new cy(this.root,e,this.comparator,!1)}getReverseIterator(){return new cy(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new cy(this.root,e,this.comparator,!0)}}class cy{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class hy{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:hy.RED,this.left=null!=r?r:hy.EMPTY,this.right=null!=i?i:hy.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new hy(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return hy.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return hy.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,hy.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,hy.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw mg(43730,{key:this.key,value:this.value});if(this.right.isRed())throw mg(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw mg(27949);return e+(this.isRed()?0:1)}}hy.EMPTY=null,hy.RED=!0,hy.BLACK=!1,hy.EMPTY=new class{constructor(){this.size=0}get key(){throw mg(57766)}get value(){throw mg(16141)}get color(){throw mg(16727)}get left(){throw mg(29726)}get right(){throw mg(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new hy(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dy{constructor(e){this.comparator=e,this.data=new uy(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new fy(this.data.getIterator())}getIteratorFrom(e){return new fy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof dy))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new dy(this.comparator);return t.data=e,t}}class fy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e){this.fields=e,e.sort(Kg.comparator)}static empty(){return new py([])}unionWith(e){let t=new dy(Kg.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new py(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Ug(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new my("Invalid base64 string: "+t):t}}(e);return new gy(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new gy(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Dg(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}gy.EMPTY_BYTE_STRING=new gy("");const yy=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function vy(e){if(yg(!!e,39018),"string"==typeof e){let t=0;const n=yy.exec(e);if(yg(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:wy(e.seconds),nanos:wy(e.nanos)}}function wy(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function by(e){return"string"==typeof e?gy.fromBase64String(e):gy.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y="server_timestamp",Ey="__type__",Sy="__previous_value__",ky="__local_write_time__";function Ty(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[Ey])||void 0===n?void 0:n.stringValue)===_y}function Cy(e){const t=e.mapValue.fields[Sy];return Ty(t)?Cy(t):t}function Iy(e){const t=vy(e.mapValue.fields[ky].timestampValue);return new jg(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(e,t,n,r,i,s,a,o,l,u){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l,this.isUsingEmulator=u}}const Ny="(default)";class Ay{constructor(e,t){this.projectId=e,this.database=t||Ny}static empty(){return new Ay("","")}get isDefaultDatabase(){return this.database===Ny}isEqual(e){return e instanceof Ay&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ry="__type__",Py="__max__",Dy={},Oy="__vector__",Ly="value";function My(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ty(e)?4:function(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===Py}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)?9007199254740991:function(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[Ry])||void 0===n?void 0:n.stringValue)===Oy}(e)?10:11:mg(28295,{value:e})}function Uy(e,t){if(e===t)return!0;const n=My(e);if(n!==My(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Iy(e).isEqual(Iy(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=vy(e.timestampValue),r=vy(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,by(e.bytesValue).isEqual(by(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return wy(e.geoPointValue.latitude)===wy(t.geoPointValue.latitude)&&wy(e.geoPointValue.longitude)===wy(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return wy(e.integerValue)===wy(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=wy(e.doubleValue),r=wy(t.doubleValue);return n===r?ry(n)===ry(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return Ug(e.arrayValue.values||[],t.arrayValue.values||[],Uy);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ay(n)!==ay(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Uy(n[i],r[i])))return!1;return!0}(e,t);default:return mg(52216,{left:e})}var r}function Fy(e,t){return void 0!==(e.values||[]).find((e=>Uy(e,t)))}function Vy(e,t){if(e===t)return 0;const n=My(e),r=My(t);if(n!==r)return Dg(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Dg(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=wy(e.integerValue||e.doubleValue),r=wy(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return jy(e.timestampValue,t.timestampValue);case 4:return jy(Iy(e),Iy(t));case 5:return Og(e.stringValue,t.stringValue);case 6:return function(e,t){const n=by(e),r=by(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=Dg(n[i],r[i]);if(0!==e)return e}return Dg(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=Dg(wy(e.latitude),wy(t.latitude));return 0!==n?n:Dg(wy(e.longitude),wy(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return zy(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,i,s;const a=e.fields||{},o=t.fields||{},l=null===(n=a[Ly])||void 0===n?void 0:n.arrayValue,u=null===(r=o[Ly])||void 0===r?void 0:r.arrayValue,c=Dg((null===(i=null==l?void 0:l.values)||void 0===i?void 0:i.length)||0,(null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0);return 0!==c?c:zy(l,u)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===Dy&&t===Dy)return 0;if(e===Dy)return 1;if(t===Dy)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let a=0;a<r.length&&a<s.length;++a){const e=Og(r[a],s[a]);if(0!==e)return e;const t=Vy(n[r[a]],i[s[a]]);if(0!==t)return t}return Dg(r.length,s.length)}(e.mapValue,t.mapValue);default:throw mg(23264,{Pe:n})}}function jy(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return Dg(e,t);const n=vy(e),r=vy(t),i=Dg(n.seconds,r.seconds);return 0!==i?i:Dg(n.nanos,r.nanos)}function zy(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Vy(n[i],r[i]);if(e)return e}return Dg(n.length,r.length)}function By(e){return $y(e)}function $y(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=vy(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?by(e.bytesValue).toBase64():"referenceValue"in e?function(e){return Gg.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=$y(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${$y(e.fields[i])}`;return n+"}"}(e.mapValue):mg(61005,{value:e})}function Hy(e){switch(My(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Cy(e);return t?16+Hy(t):16;case 5:return 2*e.stringValue.length;case 6:return by(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(e.arrayValue.values||[]).reduce(((e,t)=>e+Hy(t)),0);case 10:case 11:return function(e){let t=0;return oy(e.fields,((e,n)=>{t+=e.length+Hy(n)})),t}(e.mapValue);default:throw mg(13486,{value:e})}}function qy(e){return!!e&&"integerValue"in e}function Ky(e){return!!e&&"arrayValue"in e}function Gy(e){return!!e&&"nullValue"in e}function Wy(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Qy(e){return!!e&&"mapValue"in e}function Xy(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return oy(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Xy(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Xy(e.arrayValue.values[n]);return t}return Object.assign({},e)}class Yy{constructor(e){this.value=e}static empty(){return new Yy({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Qy(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Xy(t)}setAll(e){let t=Kg.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Xy(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Qy(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Uy(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Qy(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){oy(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Yy(Xy(this.value))}}function Jy(e){const t=[];return oy(e.fields,((e,n)=>{const r=new Kg([e]);if(Qy(n)){const e=Jy(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new py(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Zy{constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}static newInvalidDocument(e){return new Zy(e,0,zg.min(),zg.min(),zg.min(),Yy.empty(),0)}static newFoundDocument(e,t,n,r){return new Zy(e,1,t,zg.min(),n,r,0)}static newNoDocument(e,t){return new Zy(e,2,t,zg.min(),zg.min(),Yy.empty(),0)}static newUnknownDocument(e,t){return new Zy(e,3,t,zg.min(),zg.min(),Yy.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(zg.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Yy.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Yy.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=zg.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Zy&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Zy(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t){this.position=e,this.inclusive=t}}function tv(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],a=e.position[i];if(r=s.field.isKeyField()?Gg.comparator(Gg.fromName(a.referenceValue),n.key):Vy(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function nv(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Uy(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e,t="asc"){this.field=e,this.dir=t}}function iv(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{}class av extends sv{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new fv(e,t,n):"array-contains"===t?new yv(e,n):"in"===t?new vv(e,n):"not-in"===t?new wv(e,n):"array-contains-any"===t?new bv(e,n):new av(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new pv(e,n):new mv(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(Vy(t,this.value)):null!==t&&My(this.value)===My(t)&&this.matchesComparison(Vy(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return mg(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ov extends sv{constructor(e,t){super(),this.filters=e,this.op=t,this.Te=null}static create(e,t){return new ov(e,t)}matches(e){return lv(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.Te||(this.Te=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function lv(e){return"and"===e.op}function uv(e){return function(e){for(const t of e.filters)if(t instanceof ov)return!1;return!0}(e)&&lv(e)}function cv(e){if(e instanceof av)return e.field.canonicalString()+e.op.toString()+By(e.value);if(uv(e))return e.filters.map((e=>cv(e))).join(",");{const t=e.filters.map((e=>cv(e))).join(",");return`${e.op}(${t})`}}function hv(e,t){return e instanceof av?(n=e,(r=t)instanceof av&&n.op===r.op&&n.field.isEqual(r.field)&&Uy(n.value,r.value)):e instanceof ov?function(e,t){return t instanceof ov&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,r)=>e&&hv(n,t.filters[r])),!0)}(e,t):void mg(19439);var n,r}function dv(e){return e instanceof av?`${(t=e).field.canonicalString()} ${t.op} ${By(t.value)}`:e instanceof ov?function(e){return e.op.toString()+" {"+e.getFilters().map(dv).join(" ,")+"}"}(e):"Filter";var t}class fv extends av{constructor(e,t,n){super(e,t,n),this.key=Gg.fromName(n.referenceValue)}matches(e){const t=Gg.comparator(e.key,this.key);return this.matchesComparison(t)}}class pv extends av{constructor(e,t){super(e,"in",t),this.keys=gv("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class mv extends av{constructor(e,t){super(e,"not-in",t),this.keys=gv("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function gv(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Gg.fromName(e.referenceValue)))}class yv extends av{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ky(t)&&Fy(t.arrayValue,this.value)}}class vv extends av{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Fy(this.value.arrayValue,t)}}class wv extends av{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fy(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!Fy(this.value.arrayValue,t)}}class bv extends av{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ky(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Fy(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.Ie=null}}function Ev(e,t=null,n=[],r=[],i=null,s=null,a=null){return new _v(e,t,n,r,i,s,a)}function Sv(e){const t=vg(e);if(null===t.Ie){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>cv(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>{return(t=e).field.canonicalString()+t.dir;var t})).join(","),ny(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>By(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>By(e))).join(",")),t.Ie=e}return t.Ie}function kv(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!iv(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!hv(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!nv(e.startAt,t.startAt)&&nv(e.endAt,t.endAt)}function Tv(e){return Gg.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function Iv(e){return new Cv(e)}function xv(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Nv(e){const t=vg(e);if(null===t.Ee){t.Ee=[];const e=new Set;for(const r of t.explicitOrderBy)t.Ee.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new dy(Kg.comparator);return e.filters.forEach((e=>{e.getFlattenedFilters().forEach((e=>{e.isInequality()&&(t=t.add(e.field))}))})),t})(t).forEach((r=>{e.has(r.canonicalString())||r.isKeyField()||t.Ee.push(new rv(r,n))})),e.has(Kg.keyField().canonicalString())||t.Ee.push(new rv(Kg.keyField(),n))}return t.Ee}function Av(e){const t=vg(e);return t.de||(t.de=function(e,t){if("F"===e.limitType)return Ev(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map((e=>{const t="desc"===e.dir?"asc":"desc";return new rv(e.field,t)}));const n=e.endAt?new ev(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new ev(e.startAt.position,e.startAt.inclusive):null;return Ev(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(t,Nv(e))),t.de}function Rv(e,t,n){return new Cv(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Pv(e,t){return kv(Av(e),Av(t))&&e.limitType===t.limitType}function Dv(e){return`${Sv(Av(e))}|lt:${e.limitType}`}function Ov(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>dv(e))).join(", ")}]`),ny(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t})).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>By(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>By(e))).join(",")),`Target(${t})`}(Av(e))}; limitType=${e.limitType})`}function Lv(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Gg.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Nv(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=tv(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,Nv(n),r)||n.endAt&&!function(e,t,n){const r=tv(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,Nv(n),r)));var n,r}function Mv(e){return(t,n)=>{let r=!1;for(const i of Nv(e)){const e=Uv(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Uv(e,t,n){const r=e.field.isKeyField()?Gg.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Vy(r,i):mg(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return mg(19790,{direction:e.dir})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fv{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){oy(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return ly(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vv=new uy(Gg.comparator);function jv(){return Vv}const zv=new uy(Gg.comparator);function Bv(...e){let t=zv;for(const n of e)t=t.insert(n.key,n);return t}function $v(e){let t=zv;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function Hv(){return Kv()}function qv(){return Kv()}function Kv(){return new Fv((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Gv=new uy(Gg.comparator),Wv=new dy(Gg.comparator);function Qv(...e){let t=Wv;for(const n of e)t=t.add(n);return t}const Xv=new dy(Dg);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yv(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ry(t)?"-0":t}}function Jv(e){return{integerValue:""+e}}function Zv(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!ry(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)?Jv(t):Yv(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ew{constructor(){this._=void 0}}function tw(e,t,n){return e instanceof iw?function(e,t){const n={fields:{[Ey]:{stringValue:_y},[ky]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Ty(t)&&(t=Cy(t)),t&&(n.fields[Sy]=t),{mapValue:n}}(n,t):e instanceof sw?aw(e,t):e instanceof ow?lw(e,t):function(e,t){const n=rw(e,t),r=cw(n)+cw(e.Re);return qy(n)&&qy(e.Re)?Jv(r):Yv(e.serializer,r)}(e,t)}function nw(e,t,n){return e instanceof sw?aw(e,t):e instanceof ow?lw(e,t):n}function rw(e,t){return e instanceof uw?qy(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class iw extends ew{}class sw extends ew{constructor(e){super(),this.elements=e}}function aw(e,t){const n=hw(t);for(const r of e.elements)n.some((e=>Uy(e,r)))||n.push(r);return{arrayValue:{values:n}}}class ow extends ew{constructor(e){super(),this.elements=e}}function lw(e,t){let n=hw(t);for(const r of e.elements)n=n.filter((e=>!Uy(e,r)));return{arrayValue:{values:n}}}class uw extends ew{constructor(e,t){super(),this.serializer=e,this.Re=t}}function cw(e){return wy(e.integerValue||e.doubleValue)}function hw(e){return Ky(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class dw{constructor(e,t){this.version=e,this.transformResults=t}}class fw{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new fw}static exists(e){return new fw(void 0,e)}static updateTime(e){return new fw(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function pw(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class mw{}function gw(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Cw(e.key,fw.none()):new _w(e.key,e.data,fw.none());{const n=e.data,r=Yy.empty();let i=new dy(Kg.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new Ew(e.key,r,new py(i.toArray()),fw.none())}}function yw(e,t,n){var r;e instanceof _w?function(e,t,n){const r=e.value.clone(),i=kw(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof Ew?function(e,t,n){if(!pw(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=kw(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Sw(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function vw(e,t,n,r){return e instanceof _w?function(e,t,n,r){if(!pw(e.precondition,t))return n;const i=e.value.clone(),s=Tw(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof Ew?function(e,t,n,r){if(!pw(e.precondition,t))return n;const i=Tw(e.fieldTransforms,r,t),s=t.data;return s.setAll(Sw(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):(i=t,s=n,pw(e.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function ww(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=rw(r.transform,e||null);null!=i&&(null===n&&(n=Yy.empty()),n.set(r.field,i))}return n||null}function bw(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&Ug(n,r,((e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof sw&&r instanceof sw||n instanceof ow&&r instanceof ow?Ug(n.elements,r.elements,Uy):n instanceof uw&&r instanceof uw?Uy(n.Re,r.Re):n instanceof iw&&r instanceof iw);var n,r}(e,t))))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class _w extends mw{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ew extends mw{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Sw(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function kw(e,t,n){const r=new Map;yg(e.length===n.length,32656,{Ve:n.length,me:e.length});for(let i=0;i<n.length;i++){const s=e[i],a=s.transform,o=t.data.field(s.field);r.set(s.field,nw(a,o,n[i]))}return r}function Tw(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,tw(e,s,t))}return r}class Cw extends mw{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Iw extends mw{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xw{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&yw(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=vw(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=vw(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=qv();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let a=this.applyToLocalView(s,i.mutatedFields);a=t.has(r.key)?null:a;const o=gw(s,a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(zg.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Qv())}isEqual(e){return this.batchId===e.batchId&&Ug(this.mutations,e.mutations,((e,t)=>bw(e,t)))&&Ug(this.baseMutations,e.baseMutations,((e,t)=>bw(e,t)))}}class Nw{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){yg(e.mutations.length===n.length,58842,{fe:e.mutations.length,ge:n.length});let r=function(){return Gv}();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Nw(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Aw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pw,Dw;function Ow(e){if(void 0===e)return dg("GRPC error has no .code"),wg.UNKNOWN;switch(e){case Pw.OK:return wg.OK;case Pw.CANCELLED:return wg.CANCELLED;case Pw.UNKNOWN:return wg.UNKNOWN;case Pw.DEADLINE_EXCEEDED:return wg.DEADLINE_EXCEEDED;case Pw.RESOURCE_EXHAUSTED:return wg.RESOURCE_EXHAUSTED;case Pw.INTERNAL:return wg.INTERNAL;case Pw.UNAVAILABLE:return wg.UNAVAILABLE;case Pw.UNAUTHENTICATED:return wg.UNAUTHENTICATED;case Pw.INVALID_ARGUMENT:return wg.INVALID_ARGUMENT;case Pw.NOT_FOUND:return wg.NOT_FOUND;case Pw.ALREADY_EXISTS:return wg.ALREADY_EXISTS;case Pw.PERMISSION_DENIED:return wg.PERMISSION_DENIED;case Pw.FAILED_PRECONDITION:return wg.FAILED_PRECONDITION;case Pw.ABORTED:return wg.ABORTED;case Pw.OUT_OF_RANGE:return wg.OUT_OF_RANGE;case Pw.UNIMPLEMENTED:return wg.UNIMPLEMENTED;case Pw.DATA_LOSS:return wg.DATA_LOSS;default:return mg(39323,{code:e})}}(Dw=Pw||(Pw={}))[Dw.OK=0]="OK",Dw[Dw.CANCELLED=1]="CANCELLED",Dw[Dw.UNKNOWN=2]="UNKNOWN",Dw[Dw.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Dw[Dw.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Dw[Dw.NOT_FOUND=5]="NOT_FOUND",Dw[Dw.ALREADY_EXISTS=6]="ALREADY_EXISTS",Dw[Dw.PERMISSION_DENIED=7]="PERMISSION_DENIED",Dw[Dw.UNAUTHENTICATED=16]="UNAUTHENTICATED",Dw[Dw.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Dw[Dw.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Dw[Dw.ABORTED=10]="ABORTED",Dw[Dw.OUT_OF_RANGE=11]="OUT_OF_RANGE",Dw[Dw.UNIMPLEMENTED=12]="UNIMPLEMENTED",Dw[Dw.INTERNAL=13]="INTERNAL",Dw[Dw.UNAVAILABLE=14]="UNAVAILABLE",Dw[Dw.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Lw=new Gm([4294967295,4294967295],0);function Mw(e){const t=Rg().encode(e),n=new Wm;return n.update(t),new Uint8Array(n.digest())}function Uw(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Gm([n,r],0),new Gm([i,s],0)]}class Fw{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Vw(`Invalid padding: ${t}`);if(n<0)throw new Vw(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Vw(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Vw(`Invalid padding when bitmap length is 0: ${t}`);this.pe=8*e.length-t,this.ye=Gm.fromNumber(this.pe)}we(e,t,n){let r=e.add(t.multiply(Gm.fromNumber(n)));return 1===r.compare(Lw)&&(r=new Gm([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ye).toNumber()}Se(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.pe)return!1;const t=Mw(e),[n,r]=Uw(t);for(let i=0;i<this.hashCount;i++){const e=this.we(n,r,i);if(!this.Se(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),s=new Fw(i,r,t);return n.forEach((e=>s.insert(e))),s}insert(e){if(0===this.pe)return;const t=Mw(e),[n,r]=Uw(t);for(let i=0;i<this.hashCount;i++){const e=this.we(n,r,i);this.be(e)}}be(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Vw extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,zw.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new jw(zg.min(),r,new uy(Dg),jv(),Qv())}}class zw{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new zw(n,t,Qv(),Qv(),Qv())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,t,n,r){this.De=e,this.removedTargetIds=t,this.key=n,this.ve=r}}class $w{constructor(e,t){this.targetId=e,this.Ce=t}}class Hw{constructor(e,t,n=gy.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class qw{constructor(){this.Fe=0,this.Me=Ww(),this.xe=gy.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return 0!==this.Fe}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=Qv(),t=Qv(),n=Qv();return this.Me.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:mg(38017,{changeType:i})}})),new zw(this.xe,this.Oe,e,t,n)}Qe(){this.Ne=!1,this.Me=Ww()}$e(e,t){this.Ne=!0,this.Me=this.Me.insert(e,t)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,yg(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class Kw{constructor(e){this.ze=e,this.je=new Map,this.He=jv(),this.Je=Gw(),this.Ye=Gw(),this.Ze=new uy(Dg)}Xe(e){for(const t of e.De)e.ve&&e.ve.isFoundDocument()?this.et(t,e.ve):this.tt(t,e.key,e.ve);for(const t of e.removedTargetIds)this.tt(t,e.key,e.ve)}nt(e){this.forEachTarget(e,(t=>{const n=this.rt(t);switch(e.state){case 0:this.it(t)&&n.ke(e.resumeToken);break;case 1:n.We(),n.Be||n.Qe(),n.ke(e.resumeToken);break;case 2:n.We(),n.Be||this.removeTarget(t);break;case 3:this.it(t)&&(n.Ge(),n.ke(e.resumeToken));break;case 4:this.it(t)&&(this.st(t),n.ke(e.resumeToken));break;default:mg(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.je.forEach(((e,n)=>{this.it(n)&&t(n)}))}ot(e){const t=e.targetId,n=e.Ce.count,r=this._t(t);if(r){const i=r.target;if(Tv(i))if(0===n){const e=new Gg(i.path);this.tt(t,e,Zy.newNoDocument(e,zg.min()))}else yg(1===n,20013,{expectedCount:n});else{const r=this.ut(t);if(r!==n){const n=this.ct(e),i=n?this.lt(n,e,r):1;if(0!==i){this.st(t);const e=2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(t,e)}}}}}ct(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let s,a;try{s=by(n).toUint8Array()}catch(o){if(o instanceof my)return fg("Decoding the base64 bloom filter in existence filter failed ("+o.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw o}try{a=new Fw(s,r,i)}catch(o){return fg(o instanceof Vw?"BloomFilter error: ":"Applying bloom filter failed: ",o),null}return 0===a.pe?null:a}lt(e,t,n){return t.Ce.count===n-this.Tt(e,t.targetId)?0:2}Tt(e,t){const n=this.ze.getRemoteKeysForTarget(t);let r=0;return n.forEach((n=>{const i=this.ze.Pt(),s=`projects/${i.projectId}/databases/${i.database}/documents/${n.path.canonicalString()}`;e.mightContain(s)||(this.tt(t,n,null),r++)})),r}It(e){const t=new Map;this.je.forEach(((n,r)=>{const i=this._t(r);if(i){if(n.current&&Tv(i.target)){const t=new Gg(i.target.path);this.Et(t).has(r)||this.dt(r,t)||this.tt(r,t,Zy.newNoDocument(t,e))}n.Le&&(t.set(r,n.qe()),n.Qe())}}));let n=Qv();this.Ye.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this._t(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.He.forEach(((t,n)=>n.setReadTime(e)));const r=new jw(e,t,this.Ze,this.He,n);return this.He=jv(),this.Je=Gw(),this.Ye=Gw(),this.Ze=new uy(Dg),r}et(e,t){if(!this.it(e))return;const n=this.dt(e,t.key)?2:0;this.rt(e).$e(t.key,n),this.He=this.He.insert(t.key,t),this.Je=this.Je.insert(t.key,this.Et(t.key).add(e)),this.Ye=this.Ye.insert(t.key,this.At(t.key).add(e))}tt(e,t,n){if(!this.it(e))return;const r=this.rt(e);this.dt(e,t)?r.$e(t,1):r.Ue(t),this.Ye=this.Ye.insert(t,this.At(t).delete(e)),this.Ye=this.Ye.insert(t,this.At(t).add(e)),n&&(this.He=this.He.insert(t,n))}removeTarget(e){this.je.delete(e)}ut(e){const t=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let t=this.je.get(e);return t||(t=new qw,this.je.set(e,t)),t}At(e){let t=this.Ye.get(e);return t||(t=new dy(Dg),this.Ye=this.Ye.insert(e,t)),t}Et(e){let t=this.Je.get(e);return t||(t=new dy(Dg),this.Je=this.Je.insert(e,t)),t}it(e){const t=null!==this._t(e);return t||hg("WatchChangeAggregator","Detected inactive target",e),t}_t(e){const t=this.je.get(e);return t&&t.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new qw),this.ze.getRemoteKeysForTarget(e).forEach((t=>{this.tt(e,t,null)}))}dt(e,t){return this.ze.getRemoteKeysForTarget(e).has(t)}}function Gw(){return new uy(Gg.comparator)}function Ww(){return new uy(Gg.comparator)}const Qw=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Xw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Yw=(()=>({and:"AND",or:"OR"}))();class Jw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Zw(e,t){return e.useProto3Json||ny(t)?t:{value:t}}function eb(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function tb(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function nb(e,t){return eb(e,t.toTimestamp())}function rb(e){return yg(!!e,49232),zg.fromTimestamp(function(e){const t=vy(e);return new jg(t.seconds,t.nanos)}(e))}function ib(e,t){return sb(e,t).canonicalString()}function sb(e,t){const n=(r=e,new Hg(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function ab(e){const t=Hg.fromString(e);return yg(kb(t),10190,{key:t.toString()}),t}function ob(e,t){return ib(e.databaseId,t.path)}function lb(e,t){const n=ab(t);if(n.get(1)!==e.databaseId.projectId)throw new bg(wg.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new bg(wg.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Gg(hb(n))}function ub(e,t){return ib(e.databaseId,t)}function cb(e){return new Hg(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function hb(e){return yg(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function db(e,t,n){return{name:ob(e,t),fields:n.value.mapValue.fields}}function fb(e,t){return{documents:[ub(e,t.path)]}}function pb(e,t){const n={structuredQuery:{}},r=t.path;let i;null!==t.collectionGroup?(i=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ub(e,i);const s=function(e){if(0!==e.length)return Eb(ov.create(e,"and"))}(t.filters);s&&(n.structuredQuery.where=s);const a=function(e){if(0!==e.length)return e.map((e=>{return{field:bb((t=e).field),direction:yb(t.dir)};var t}))}(t.orderBy);a&&(n.structuredQuery.orderBy=a);const o=Zw(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(l=t.startAt).inclusive,values:l.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{gt:n,parent:i};var l}function mb(e){let t=function(e){const t=ab(e);return 4===t.length?Hg.emptyPath():hb(t)}(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){yg(1===r,65062);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=gb(e);return t instanceof ov&&uv(t)?t.getFilters():[t]}(n.where));let a=[];n.orderBy&&(a=n.orderBy.map((e=>{return new rv(_b((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t})));let o=null;n.limit&&(o=function(e){let t;return t="object"==typeof e?e.value:e,ny(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new ev(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new ev(n,t)}(n.endAt)),function(e,t,n,r,i,s,a,o){return new Cv(e,t,n,r,i,s,a,o)}(t,i,a,s,o,"F",l,u)}function gb(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=_b(e.unaryFilter.field);return av.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=_b(e.unaryFilter.field);return av.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=_b(e.unaryFilter.field);return av.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=_b(e.unaryFilter.field);return av.create(i,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return mg(61313);default:return mg(60726)}}(e):void 0!==e.fieldFilter?(t=e,av.create(_b(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return mg(58110);default:return mg(50506)}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return ov.create(e.compositeFilter.filters.map((e=>gb(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return mg(1026)}}(e.compositeFilter.op))}(e):mg(30097,{filter:e});var t}function yb(e){return Qw[e]}function vb(e){return Xw[e]}function wb(e){return Yw[e]}function bb(e){return{fieldPath:e.canonicalString()}}function _b(e){return Kg.fromServerFormat(e.fieldPath)}function Eb(e){return e instanceof av?function(e){if("=="===e.op){if(Wy(e.value))return{unaryFilter:{field:bb(e.field),op:"IS_NAN"}};if(Gy(e.value))return{unaryFilter:{field:bb(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Wy(e.value))return{unaryFilter:{field:bb(e.field),op:"IS_NOT_NAN"}};if(Gy(e.value))return{unaryFilter:{field:bb(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:bb(e.field),op:vb(e.op),value:e.value}}}(e):e instanceof ov?function(e){const t=e.getFilters().map((e=>Eb(e)));return 1===t.length?t[0]:{compositeFilter:{op:wb(e.op),filters:t}}}(e):mg(54877,{filter:e})}function Sb(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function kb(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,t,n,r,i=zg.min(),s=zg.min(),a=gy.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}withSequenceNumber(e){return new Tb(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Tb(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Tb(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Tb(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e){this.wt=e}}function Ib(e){const t=mb({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Rv(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(){this.Cn=new Nb}addToCollectionParentIndex(e,t){return this.Cn.add(t),Zg.resolve()}getCollectionParents(e,t){return Zg.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return Zg.resolve()}deleteFieldIndex(e,t){return Zg.resolve()}deleteAllFieldIndexes(e){return Zg.resolve()}createTargetIndexes(e,t){return Zg.resolve()}getDocumentsMatchingTarget(e,t){return Zg.resolve(null)}getIndexType(e,t){return Zg.resolve(0)}getFieldIndexes(e,t){return Zg.resolve([])}getNextCollectionGroupToUpdate(e){return Zg.resolve(null)}getMinOffset(e,t){return Zg.resolve(Qg.min())}getMinOffsetFromCollectionGroup(e,t){return Zg.resolve(Qg.min())}updateCollectionGroup(e,t,n){return Zg.resolve()}updateIndexEntries(e,t){return Zg.resolve()}}class Nb{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new dy(Hg.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new dy(Hg.comparator)).toArray()}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ab={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rb=41943040;class Pb{static withCacheSize(e){return new Pb(e,Pb.DEFAULT_COLLECTION_PERCENTILE,Pb.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pb.DEFAULT_COLLECTION_PERCENTILE=10,Pb.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Pb.DEFAULT=new Pb(Rb,Pb.DEFAULT_COLLECTION_PERCENTILE,Pb.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Pb.DISABLED=new Pb(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Db{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Db(0)}static lr(){return new Db(-1)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ob="LruGarbageCollector";function Lb([e,t],[n,r]){const i=Dg(e,n);return 0===i?Dg(t,r):i}class Mb{constructor(e){this.Er=e,this.buffer=new dy(Lb),this.dr=0}Ar(){return++this.dr}Rr(e){const t=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Lb(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Ub{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Vr=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return null!==this.Vr}mr(e){hg(Ob,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ey(e)?hg(Ob,"Ignoring IndexedDB error during garbage collection: ",e):await Jg(e)}await this.mr(3e5)}))}}class Fb{constructor(e,t){this.gr=e,this.params=t}calculateTargetCount(e,t){return this.gr.pr(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Zg.resolve(ty.le);const n=new Mb(t);return this.gr.forEachTarget(e,(e=>n.Rr(e.sequenceNumber))).next((()=>this.gr.yr(e,(e=>n.Rr(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.gr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.gr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(hg("LruGarbageCollector","Garbage collection skipped; disabled"),Zg.resolve(Ab)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(hg("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ab):this.wr(e,t)))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,t){let n,r,i,s,a,o,l;const u=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(hg("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),r=this.params.maximumSequenceNumbersToCollect):r=t,s=Date.now(),this.nthSequenceNumber(e,r)))).next((r=>(n=r,a=Date.now(),this.removeTargets(e,n,t)))).next((t=>(i=t,o=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(l=Date.now(),cg()<=Lh.DEBUG&&hg("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-u}ms\n\tDetermined least recently used ${r} in `+(a-s)+`ms\n\tRemoved ${i} targets in `+(o-a)+`ms\n\tRemoved ${e} documents in `+(l-o)+`ms\nTotal Duration: ${l-u}ms`),Zg.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vb{constructor(){this.changes=new Fv((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Zy.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Zg.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&vw(n.mutation,e,py.empty(),jg.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Qv()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Qv()){const r=Hv();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Bv();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=Hv();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Qv())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=jv();const s=Kv(),a=Kv();return t.forEach(((e,t)=>{const a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof Ew)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),vw(a.mutation,t,a.mutation.getFieldMask(),jg.now())):s.set(t.key,py.empty())})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return a.set(e,new jb(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),a)))}recalculateAndSaveOverlays(e,t){const n=Kv();let r=new uy(((e,t)=>e-t)),i=Qv();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let a=n.get(e)||py.empty();a=i.applyToLocalView(s,a),n.set(e,a);const o=(r.get(i.batchId)||Qv()).add(e);r=r.insert(i.batchId,o)}))})).next((()=>{const s=[],a=r.getReverseIterator();for(;a.hasNext();){const r=a.getNext(),o=r.key,l=r.value,u=qv();l.forEach((e=>{if(!i.has(e)){const r=gw(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return Zg.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n,r){return i=t,Gg.isDocumentKey(i.path)&&null===i.collectionGroup&&0===i.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):function(e){return null!==e.collectionGroup}(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var i}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Zg.resolve(Hv());let a=-1,o=i;return s.next((t=>Zg.forEach(t,((t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?Zg.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{o=o.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,o,t,Qv()))).next((e=>({batchId:a,changes:$v(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Gg(t)).next((e=>{let t=Bv();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let s=Bv();return this.indexManager.getCollectionParents(e,i).next((a=>Zg.forEach(a,(a=>{const o=(l=t,u=a.child(i),new Cv(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt));var l,u;return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next((e=>{e.forEach(((e,t)=>{s=s.insert(e,t)}))}))})).next((()=>s))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((e=>{i.forEach(((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Zy.newInvalidDocument(r)))}));let n=Bv();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&vw(s.mutation,r,py.empty(),jg.now()),Lv(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,t){return Zg.resolve(this.kr.get(t))}saveBundleMetadata(e,t){return this.kr.set(t.id,{id:(n=t).id,version:n.version,createTime:rb(n.createTime)}),Zg.resolve();var n}getNamedQuery(e,t){return Zg.resolve(this.qr.get(t))}saveNamedQuery(e,t){return this.qr.set(t.name,{name:(n=t).name,query:Ib(n.bundledQuery),readTime:rb(n.readTime)}),Zg.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(){this.overlays=new uy(Gg.comparator),this.Qr=new Map}getOverlay(e,t){return Zg.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Hv();return Zg.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.bt(e,t,r)})),Zg.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Qr.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Qr.delete(n)),Zg.resolve()}getOverlaysForCollection(e,t,n){const r=Hv(),i=t.length+1,s=new Gg(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){const e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Zg.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new uy(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=Hv(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const a=Hv(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach(((e,t)=>a.set(e,t))),!(a.size()>=r)););return Zg.resolve(a)}bt(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Qr.get(r.largestBatchId).delete(n.key);this.Qr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Aw(t,n));let i=this.Qr.get(t);void 0===i&&(i=Qv(),this.Qr.set(t,i)),this.Qr.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{constructor(){this.sessionToken=gy.EMPTY_BYTE_STRING}getSessionToken(e){return Zg.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Zg.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(){this.$r=new dy(Kb.Ur),this.Kr=new dy(Kb.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,t){const n=new Kb(e,t);this.$r=this.$r.add(n),this.Kr=this.Kr.add(n)}Gr(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.zr(new Kb(e,t))}jr(e,t){e.forEach((e=>this.removeReference(e,t)))}Hr(e){const t=new Gg(new Hg([])),n=new Kb(t,e),r=new Kb(t,e+1),i=[];return this.Kr.forEachInRange([n,r],(e=>{this.zr(e),i.push(e.key)})),i}Jr(){this.$r.forEach((e=>this.zr(e)))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const t=new Gg(new Hg([])),n=new Kb(t,e),r=new Kb(t,e+1);let i=Qv();return this.Kr.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new Kb(e,0),n=this.$r.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class Kb{constructor(e,t){this.key=e,this.Zr=t}static Ur(e,t){return Gg.comparator(e.key,t.key)||Dg(e.Zr,t.Zr)}static Wr(e,t){return Dg(e.Zr,t.Zr)||Gg.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.nr=1,this.Xr=new dy(Kb.Ur)}checkEmpty(e){return Zg.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new xw(i,t,n,r);this.mutationQueue.push(s);for(const a of r)this.Xr=this.Xr.add(new Kb(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return Zg.resolve(s)}lookupMutationBatch(e,t){return Zg.resolve(this.ei(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ti(n),i=r<0?0:r;return Zg.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Zg.resolve(0===this.mutationQueue.length?-1:this.nr-1)}getAllMutationBatches(e){return Zg.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new Kb(t,0),r=new Kb(t,Number.POSITIVE_INFINITY),i=[];return this.Xr.forEachInRange([n,r],(e=>{const t=this.ei(e.Zr);i.push(t)})),Zg.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new dy(Dg);return t.forEach((e=>{const t=new Kb(e,0),r=new Kb(e,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([t,r],(e=>{n=n.add(e.Zr)}))})),Zg.resolve(this.ni(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Gg.isDocumentKey(i)||(i=i.child(""));const s=new Kb(new Gg(i),0);let a=new dy(Dg);return this.Xr.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.Zr)),!0)}),s),Zg.resolve(this.ni(a))}ni(e){const t=[];return e.forEach((e=>{const n=this.ei(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){yg(0===this.ri(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Xr;return Zg.forEach(t.mutations,(r=>{const i=new Kb(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.Xr=n}))}sr(e){}containsKey(e,t){const n=new Kb(t,0),r=this.Xr.firstAfterOrEqual(n);return Zg.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Zg.resolve()}ri(e,t){return this.ti(e)}ti(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}ei(e){const t=this.ti(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e){this.ii=e,this.docs=new uy(Gg.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ii(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Zg.resolve(n?n.document.mutableCopy():Zy.newInvalidDocument(t))}getEntries(e,t){let n=jv();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Zy.newInvalidDocument(e))})),Zg.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=jv();const s=t.path,a=new Gg(s.child("__id-9223372036854775808__")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){const{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||Xg(Wg(a),n)<=0||(r.has(a.key)||Lv(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return Zg.resolve(i)}getAllFromCollectionGroup(e,t,n,r){mg(9500)}si(e,t){return Zg.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new Qb(this)}getSize(e){return Zg.resolve(this.size)}}class Qb extends Vb{constructor(e){super(),this.Br=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.Br.addEntry(e,r)):this.Br.removeEntry(n)})),Zg.waitFor(t)}getFromCache(e,t){return this.Br.getEntry(e,t)}getAllFromCache(e,t){return this.Br.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e){this.persistence=e,this.oi=new Fv((e=>Sv(e)),kv),this.lastRemoteSnapshotVersion=zg.min(),this.highestTargetId=0,this._i=0,this.ai=new qb,this.targetCount=0,this.ui=Db.cr()}forEachTarget(e,t){return this.oi.forEach(((e,n)=>t(n))),Zg.resolve()}getLastRemoteSnapshotVersion(e){return Zg.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Zg.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),Zg.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this._i&&(this._i=t),Zg.resolve()}Tr(e){this.oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ui=new Db(t),this.highestTargetId=t),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,t){return this.Tr(t),this.targetCount+=1,Zg.resolve()}updateTargetData(e,t){return this.Tr(t),Zg.resolve()}removeTargetData(e,t){return this.oi.delete(t.target),this.ai.Hr(t.targetId),this.targetCount-=1,Zg.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.oi.forEach(((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.oi.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),Zg.waitFor(i).next((()=>r))}getTargetCount(e){return Zg.resolve(this.targetCount)}getTargetData(e,t){const n=this.oi.get(t)||null;return Zg.resolve(n)}addMatchingKeys(e,t,n){return this.ai.Gr(t,n),Zg.resolve()}removeMatchingKeys(e,t,n){this.ai.jr(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Zg.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.ai.Hr(t),Zg.resolve()}getMatchingKeysForTargetId(e,t){const n=this.ai.Yr(t);return Zg.resolve(n)}containsKey(e,t){return Zg.resolve(this.ai.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(e,t){this.ci={},this.overlays={},this.li=new ty(0),this.hi=!1,this.hi=!0,this.Pi=new Hb,this.referenceDelegate=e(this),this.Ti=new Xb(this),this.indexManager=new xb,this.remoteDocumentCache=new Wb((e=>this.referenceDelegate.Ii(e))),this.serializer=new Cb(t),this.Ei=new Bb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $b,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ci[e.toKey()];return n||(n=new Gb(t,this.referenceDelegate),this.ci[e.toKey()]=n),n}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,t,n){hg("MemoryPersistence","Starting transaction:",e);const r=new Jb(this.li.next());return this.referenceDelegate.di(),n(r).next((e=>this.referenceDelegate.Ai(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ri(e,t){return Zg.or(Object.values(this.ci).map((n=>()=>n.containsKey(e,t))))}}class Jb extends Yg{constructor(e){super(),this.currentSequenceNumber=e}}class Zb{constructor(e){this.persistence=e,this.Vi=new qb,this.mi=null}static fi(e){return new Zb(e)}get gi(){if(this.mi)return this.mi;throw mg(60996)}addReference(e,t,n){return this.Vi.addReference(n,t),this.gi.delete(n.toString()),Zg.resolve()}removeReference(e,t,n){return this.Vi.removeReference(n,t),this.gi.add(n.toString()),Zg.resolve()}markPotentiallyOrphaned(e,t){return this.gi.add(t.toString()),Zg.resolve()}removeTarget(e,t){this.Vi.Hr(t.targetId).forEach((e=>this.gi.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.gi.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}di(){this.mi=new Set}Ai(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Zg.forEach(this.gi,(n=>{const r=Gg.fromPath(n);return this.pi(e,r).next((e=>{e||t.removeEntry(r,zg.min())}))})).next((()=>(this.mi=null,t.apply(e))))}updateLimboDocument(e,t){return this.pi(e,t).next((e=>{e?this.gi.delete(t.toString()):this.gi.add(t.toString())}))}Ii(e){return 0}pi(e,t){return Zg.or([()=>Zg.resolve(this.Vi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ri(e,t)])}}class e_{constructor(e,t){this.persistence=e,this.yi=new Fv((e=>function(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=sy(t)),t=iy(e.get(n),t);return sy(t)}(e.path)),((e,t)=>e.isEqual(t))),this.garbageCollector=function(e,t){return new Fb(e,t)}(this,t)}static fi(e,t){return new e_(e,t)}di(){}Ai(e){return Zg.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}pr(e){const t=this.Sr(e);return this.persistence.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}Sr(e){let t=0;return this.yr(e,(e=>{t++})).next((()=>t))}yr(e,t){return Zg.forEach(this.yi,((n,r)=>this.Dr(e,n,r).next((e=>e?Zg.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.si(e,(r=>this.Dr(e,r,t).next((e=>{e||(n++,i.removeEntry(r,zg.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.yi.set(t,e.currentSequenceNumber),Zg.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.yi.set(n,e.currentSequenceNumber),Zg.resolve()}removeReference(e,t,n){return this.yi.set(n,e.currentSequenceNumber),Zg.resolve()}updateLimboDocument(e,t){return this.yi.set(t,e.currentSequenceNumber),Zg.resolve()}Ii(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Hy(e.data.value)),t}Dr(e,t,n){return Zg.or([()=>this.persistence.Ri(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.yi.get(t);return Zg.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.ds=n,this.As=r}static Rs(e,t){let n=Qv(),r=Qv();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new t_(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=_h()?8:function(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}(bh())>0?6:4}initialize(e,t){this.ys=e,this.indexManager=t,this.Vs=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.ws(e,t).next((e=>{i.result=e})).next((()=>{if(!i.result)return this.Ss(e,t,r,n).next((e=>{i.result=e}))})).next((()=>{if(i.result)return;const n=new n_;return this.bs(e,t,n).next((r=>{if(i.result=r,this.fs)return this.Ds(e,t,n,r.size)}))})).next((()=>i.result))}Ds(e,t,n,r){return n.documentReadCount<this.gs?(cg()<=Lh.DEBUG&&hg("QueryEngine","SDK will not create cache indexes for query:",Ov(t),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),Zg.resolve()):(cg()<=Lh.DEBUG&&hg("QueryEngine","Query:",Ov(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.ps*r?(cg()<=Lh.DEBUG&&hg("QueryEngine","The SDK decides to create cache indexes for query:",Ov(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Av(t))):Zg.resolve())}ws(e,t){if(xv(t))return Zg.resolve(null);let n=Av(t);return this.indexManager.getIndexType(e,n).next((r=>0===r?null:(null!==t.limit&&1===r&&(t=Rv(t,null,"F"),n=Av(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((r=>{const i=Qv(...r);return this.ys.getDocuments(e,i).next((r=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.vs(t,r);return this.Cs(t,s,i,n.readTime)?this.ws(e,Rv(t,null,"F")):this.Fs(e,s,t,n)}))))})))))}Ss(e,t,n,r){return xv(t)||r.isEqual(zg.min())?Zg.resolve(null):this.ys.getDocuments(e,n).next((i=>{const s=this.vs(t,i);return this.Cs(t,s,n,r)?Zg.resolve(null):(cg()<=Lh.DEBUG&&hg("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ov(t)),this.Fs(e,s,t,function(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=zg.fromTimestamp(1e9===r?new jg(n+1,0):new jg(n,r));return new Qg(i,Gg.empty(),t)}(r,-1)).next((e=>e)))}))}vs(e,t){let n=new dy(Mv(e));return t.forEach(((t,r)=>{Lv(e,r)&&(n=n.add(r))})),n}Cs(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}bs(e,t,n){return cg()<=Lh.DEBUG&&hg("QueryEngine","Using full collection scan to execute query:",Ov(t)),this.ys.getDocumentsMatchingQuery(e,t,Qg.min(),n)}Fs(e,t,n,r){return this.ys.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_="LocalStore";class s_{constructor(e,t,n,r){this.persistence=e,this.Ms=t,this.serializer=r,this.xs=new uy(Dg),this.Os=new Fv((e=>Sv(e)),kv),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(n)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new zb(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.xs)))}}async function a_(e,t){const n=vg(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.Ls(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let a=Qv();for(const e of r){i.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)a=a.add(t.key)}return n.localDocuments.getDocuments(e,a).next((e=>({ks:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function o_(e){const t=vg(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ti.getLastRemoteSnapshotVersion(e)))}function l_(e,t){const n=vg(e),r=t.snapshotVersion;let i=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.xs;const a=[];t.targetChanges.forEach(((s,o)=>{const l=i.get(o);if(!l)return;a.push(n.Ti.removeMatchingKeys(e,s.removedDocuments,o).next((()=>n.Ti.addMatchingKeys(e,s.addedDocuments,o))));let u=l.withSequenceNumber(e.currentSequenceNumber);null!==t.targetMismatches.get(o)?u=u.withResumeToken(gy.EMPTY_BYTE_STRING,zg.min()).withLastLimboFreeSnapshotVersion(zg.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(o,u),function(e,t,n){if(0===e.resumeToken.approximateByteSize())return!0;if(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8)return!0;return n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0}(l,u,s)&&a.push(n.Ti.updateTargetData(e,u))}));let o=jv(),l=Qv();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),a.push(function(e,t,n){let r=Qv(),i=Qv();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=jv();return n.forEach(((n,s)=>{const a=e.get(n);s.isFoundDocument()!==a.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(zg.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!a.isValidDocument()||s.version.compareTo(a.version)>0||0===s.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):hg(i_,"Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",s.version)})),{qs:r,Qs:i}}))}(e,s,t.documentUpdates).next((e=>{o=e.qs,l=e.Qs}))),!r.isEqual(zg.min())){const t=n.Ti.getLastRemoteSnapshotVersion(e).next((t=>n.Ti.setTargetsMetadata(e,e.currentSequenceNumber,r)));a.push(t)}return Zg.waitFor(a).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,o,l))).next((()=>o))})).then((e=>(n.xs=i,e)))}function u_(e,t){const n=vg(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}async function c_(e,t,n){const r=vg(e),i=r.xs.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(a){if(!ey(a))throw a;hg(i_,`Failed to update sequence numbers for target ${t}: ${a}`)}r.xs=r.xs.remove(t),r.Os.delete(i.target)}function h_(e,t,n){const r=vg(e);let i=zg.min(),s=Qv();return r.persistence.runTransaction("Execute query","readwrite",(e=>function(e,t,n){const r=vg(e),i=r.Os.get(n);return void 0!==i?Zg.resolve(r.xs.get(i)):r.Ti.getTargetData(t,n)}(r,e,Av(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Ms.getDocumentsMatchingQuery(e,t,n?i:zg.min(),n?s:Qv()))).next((e=>(function(e,t,n){let r=e.Ns.get(t)||zg.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Ns.set(t,r)}(r,function(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}(t),e),{documents:e,$s:s})))))}class d_{constructor(){this.activeTargetIds=Xv}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class f_{constructor(){this.xo=new d_,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,t,n){this.Oo[e]=t}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new d_,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p_{No(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m_="ConnectivityMonitor";class g_{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){hg(m_,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){hg(m_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let y_=null;function v_(){return null===y_?y_=268435456+Math.round(2147483648*Math.random()):y_++,"0x"+y_.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const w_="RestConnection",b_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class __{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ko=t+"://"+e.host,this.Wo=`projects/${n}/databases/${r}`,this.Go=this.databaseId.database===Ny?`project_id=${n}`:`project_id=${n}&database_id=${r}`}zo(e,t,n,r,i){const s=v_(),a=this.jo(e,t.toUriEncodedString());hg(w_,`Sending RPC '${e}' ${s}:`,a,n);const o={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(o,r,i);const{host:l}=new URL(a),u=mh(l);return this.Jo(e,a,o,n,u).then((t=>(hg(w_,`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw fg(w_,`RPC '${e}' ${s} failed with error: `,t,"url: ",a,"request:",n),t}))}Yo(e,t,n,r,i,s){return this.zo(e,t,n,r,i)}Ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+lg,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}jo(e,t){const n=b_[e];return`${this.Ko}/v1/${t}:${n}`}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="WebChannelConnection";class k_ extends __{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,n,r,i){const s=v_();return new Promise(((i,a)=>{const o=new Xm;o.setWithCredentials(!0),o.listenOnce(Jm.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Zm.NO_ERROR:const t=o.getResponseJson();hg(S_,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(t)),i(t);break;case Zm.TIMEOUT:hg(S_,`RPC '${e}' ${s} timed out`),a(new bg(wg.DEADLINE_EXCEEDED,"Request time out"));break;case Zm.HTTP_ERROR:const n=o.getStatus();if(hg(S_,`RPC '${e}' ${s} failed with status:`,n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(wg).indexOf(t)>=0?t:wg.UNKNOWN}(t.status);a(new bg(e,t.message))}else a(new bg(wg.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new bg(wg.UNAVAILABLE,"Connection failed."));break;default:mg(9055,{l_:e,streamId:s,h_:o.getLastErrorCode(),P_:o.getLastError()})}}finally{hg(S_,`RPC '${e}' ${s} completed.`)}}));const l=JSON.stringify(r);hg(S_,`RPC '${e}' ${s} sending request:`,r),o.send(t,"POST",l,n,15)}))}T_(e,t,n){const r=v_(),i=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=rg(),a=ng(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;void 0!==l&&(o.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(o.useFetchStreams=!0),this.Ho(o.initMessageHeaders,t,n),o.encodeInitMessageHeaders=!0;const u=i.join("");hg(S_,`Creating RPC '${e}' stream ${r}: ${u}`,o);const c=s.createWebChannel(u,o);let h=!1,d=!1;const f=new E_({Zo:t=>{d?hg(S_,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(h||(hg(S_,`Opening RPC '${e}' stream ${r} transport.`),c.open(),h=!0),hg(S_,`RPC '${e}' stream ${r} sending:`,t),c.send(t))},Xo:()=>c.close()}),p=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(t){setTimeout((()=>{throw t}),0)}}))};return p(c,Ym.EventType.OPEN,(()=>{d||(hg(S_,`RPC '${e}' stream ${r} transport opened.`),f.__())})),p(c,Ym.EventType.CLOSE,(()=>{d||(d=!0,hg(S_,`RPC '${e}' stream ${r} transport closed`),f.u_())})),p(c,Ym.EventType.ERROR,(t=>{d||(d=!0,fg(S_,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),f.u_(new bg(wg.UNAVAILABLE,"The operation could not be completed")))})),p(c,Ym.EventType.MESSAGE,(t=>{var n;if(!d){const i=t.data[0];yg(!!i,16349);const s=i,a=(null==s?void 0:s.error)||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){hg(S_,`RPC '${e}' stream ${r} received error:`,a);const t=a.status;let n=function(e){const t=Pw[e];if(void 0!==t)return Ow(t)}(t),i=a.message;void 0===n&&(n=wg.INTERNAL,i="Unknown error status: "+t+" with message "+a.message),d=!0,f.u_(new bg(n,i)),c.close()}else hg(S_,`RPC '${e}' stream ${r} received:`,i),f.c_(i)}})),p(a,tg.STAT_EVENT,(t=>{t.stat===eg.PROXY?hg(S_,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===eg.NOPROXY&&hg(S_,`RPC '${e}' stream ${r} detected no buffering proxy`)})),setTimeout((()=>{f.a_()}),0),f}}function T_(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C_(e){return new Jw(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,t,n=1e3,r=1.5,i=6e4){this.xi=e,this.timerId=t,this.I_=n,this.E_=r,this.d_=i,this.A_=0,this.R_=null,this.V_=Date.now(),this.reset()}reset(){this.A_=0}m_(){this.A_=this.d_}f_(e){this.cancel();const t=Math.floor(this.A_+this.g_()),n=Math.max(0,Date.now()-this.V_),r=Math.max(0,t-n);r>0&&hg("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.A_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.R_=this.xi.enqueueAfterDelay(this.timerId,r,(()=>(this.V_=Date.now(),e()))),this.A_*=this.E_,this.A_<this.I_&&(this.A_=this.I_),this.A_>this.d_&&(this.A_=this.d_)}p_(){null!==this.R_&&(this.R_.skipDelay(),this.R_=null)}cancel(){null!==this.R_&&(this.R_.cancel(),this.R_=null)}g_(){return(Math.random()-.5)*this.A_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="PersistentStream";class N_{constructor(e,t,n,r,i,s,a,o){this.xi=e,this.y_=n,this.w_=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.S_=0,this.b_=null,this.D_=null,this.stream=null,this.v_=0,this.C_=new I_(e,t)}F_(){return 1===this.state||5===this.state||this.M_()}M_(){return 2===this.state||3===this.state}start(){this.v_=0,4!==this.state?this.auth():this.x_()}async stop(){this.F_()&&await this.close(0)}O_(){this.state=0,this.C_.reset()}N_(){this.M_()&&null===this.b_&&(this.b_=this.xi.enqueueAfterDelay(this.y_,6e4,(()=>this.B_())))}L_(e){this.k_(),this.stream.send(e)}async B_(){if(this.M_())return this.close(0)}k_(){this.b_&&(this.b_.cancel(),this.b_=null)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}async close(e,t){this.k_(),this.q_(),this.C_.cancel(),this.S_++,4!==e?this.C_.reset():t&&t.code===wg.RESOURCE_EXHAUSTED?(dg(t.toString()),dg("Using maximum backoff delay to prevent overloading the backend."),this.C_.m_()):t&&t.code===wg.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Q_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(t)}Q_(){}auth(){this.state=1;const e=this.U_(this.S_),t=this.S_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.S_===t&&this.K_(e,n)}),(t=>{e((()=>{const e=new bg(wg.UNKNOWN,"Fetching auth token failed: "+t.message);return this.W_(e)}))}))}K_(e,t){const n=this.U_(this.S_);this.stream=this.G_(e,t),this.stream.e_((()=>{n((()=>this.listener.e_()))})),this.stream.n_((()=>{n((()=>(this.state=2,this.D_=this.xi.enqueueAfterDelay(this.w_,1e4,(()=>(this.M_()&&(this.state=3),Promise.resolve()))),this.listener.n_())))})),this.stream.i_((e=>{n((()=>this.W_(e)))})),this.stream.onMessage((e=>{n((()=>1==++this.v_?this.z_(e):this.onNext(e)))}))}x_(){this.state=5,this.C_.f_((async()=>{this.state=0,this.start()}))}W_(e){return hg(x_,`close with error: ${e}`),this.stream=null,this.close(4,e)}U_(e){return t=>{this.xi.enqueueAndForget((()=>this.S_===e?t():(hg(x_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class A_ extends N_{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}G_(e,t){return this.connection.T_("Listen",e,t)}z_(e){return this.onNext(e)}onNext(e){this.C_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const i="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:mg(39313,{state:r}),s=t.targetChange.targetIds||[],a=function(e,t){return e.useProto3Json?(yg(void 0===t||"string"==typeof t,58123),gy.fromBase64String(t||"")):(yg(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),gy.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,l=o&&function(e){const t=void 0===e.code?wg.UNKNOWN:Ow(e.code);return new bg(t,e.message||"")}(o);n=new Hw(i,s,a,l||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=lb(e,r.document.name),s=rb(r.document.updateTime),a=r.document.createTime?rb(r.document.createTime):zg.min(),o=new Yy({mapValue:{fields:r.document.fields}}),l=Zy.newFoundDocument(i,s,a,o),u=r.targetIds||[],c=r.removedTargetIds||[];n=new Bw(u,c,l.key,l)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=lb(e,r.document),s=r.readTime?rb(r.readTime):zg.min(),a=Zy.newNoDocument(i,s),o=r.removedTargetIds||[];n=new Bw([],o,a.key,a)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=lb(e,r.document),s=r.removedTargetIds||[];n=new Bw([],s,i,null)}else{if(!("filter"in t))return mg(11601,{Vt:t});{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:i}=e,s=new Rw(r,i),a=e.targetId;n=new $w(a,s)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return zg.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?zg.min():t.readTime?rb(t.readTime):zg.min()}(e);return this.listener.j_(t,n)}H_(e){const t={};t.database=cb(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=Tv(r)?{documents:fb(e,r)}:{query:pb(e,r).gt},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=tb(e,t.resumeToken);const r=Zw(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(zg.min())>0){n.readTime=eb(e,t.snapshotVersion.toTimestamp());const r=Zw(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return mg(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.L_(t)}J_(e){const t={};t.database=cb(this.serializer),t.removeTarget=e,this.L_(t)}}class R_ extends N_{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}get Y_(){return this.v_>0}start(){this.lastStreamToken=void 0,super.start()}Q_(){this.Y_&&this.Z_([])}G_(e,t){return this.connection.T_("Write",e,t)}z_(e){return yg(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,yg(!e.writeResults||0===e.writeResults.length,55816),this.listener.X_()}onNext(e){yg(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.C_.reset();const t=function(e,t){return e&&e.length>0?(yg(void 0!==t,14353),e.map((e=>function(e,t){let n=e.updateTime?rb(e.updateTime):rb(t);return n.isEqual(zg.min())&&(n=rb(t)),new dw(n,e.transformResults||[])}(e,t)))):[]}(e.writeResults,e.commitTime),n=rb(e.commitTime);return this.listener.ea(n,t)}ta(){const e={};e.database=cb(this.serializer),this.L_(e)}Z_(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>function(e,t){let n;if(t instanceof _w)n={update:db(e,t.key,t.value)};else if(t instanceof Cw)n={delete:ob(e,t.key)};else if(t instanceof Ew)n={update:db(e,t.key,t.data),updateMask:Sb(t.fieldMask)};else{if(!(t instanceof Iw))return mg(16599,{ft:t.type});n={verify:ob(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof iw)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof sw)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof ow)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof uw)return{fieldPath:t.field.canonicalString(),increment:n.Re};throw mg(20930,{transform:t.transform})}(0,e)))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(i=t.precondition).updateTime?{updateTime:nb(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:mg(27497))),n;var r,i}(this.serializer,e)))};this.L_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P_{}class D_ extends P_{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.na=!1}ra(){if(this.na)throw new bg(wg.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,t,n,r){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.connection.zo(e,sb(t,n),r,i,s))).catch((e=>{throw"FirebaseError"===e.name?(e.code===wg.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new bg(wg.UNKNOWN,e.toString())}))}Yo(e,t,n,r,i){return this.ra(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([s,a])=>this.connection.Yo(e,sb(t,n),r,s,a,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===wg.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new bg(wg.UNKNOWN,e.toString())}))}terminate(){this.na=!0,this.connection.terminate()}}class O_{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.ia=0,this.sa=null,this.oa=!0}_a(){0===this.ia&&(this.aa("Unknown"),this.sa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.sa=null,this.ua("Backend didn't respond within 10 seconds."),this.aa("Offline"),Promise.resolve()))))}ca(e){"Online"===this.state?this.aa("Unknown"):(this.ia++,this.ia>=1&&(this.la(),this.ua(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.aa("Offline")))}set(e){this.la(),this.ia=0,"Online"===e&&(this.oa=!1),this.aa(e)}aa(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ua(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.oa?(dg(t),this.oa=!1):hg("OnlineStateTracker",t)}la(){null!==this.sa&&(this.sa.cancel(),this.sa=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_="RemoteStore";class M_{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.ha=[],this.Pa=new Map,this.Ta=new Set,this.Ia=[],this.Ea=i,this.Ea.No((e=>{n.enqueueAndForget((async()=>{q_(this)&&(hg(L_,"Restarting streams for network reachability change."),await async function(e){const t=vg(e);t.Ta.add(4),await F_(t),t.da.set("Unknown"),t.Ta.delete(4),await U_(t)}(this))}))})),this.da=new O_(n,r)}}async function U_(e){if(q_(e))for(const t of e.Ia)await t(!0)}async function F_(e){for(const t of e.Ia)await t(!1)}function V_(e,t){const n=vg(e);n.Pa.has(t.targetId)||(n.Pa.set(t.targetId,t),H_(n)?$_(n):uE(n).M_()&&z_(n,t))}function j_(e,t){const n=vg(e),r=uE(n);n.Pa.delete(t),r.M_()&&B_(n,t),0===n.Pa.size&&(r.M_()?r.N_():q_(n)&&n.da.set("Unknown"))}function z_(e,t){if(e.Aa.Ke(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(zg.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}uE(e).H_(t)}function B_(e,t){e.Aa.Ke(t),uE(e).J_(t)}function $_(e){e.Aa=new Kw({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Rt:t=>e.Pa.get(t)||null,Pt:()=>e.datastore.serializer.databaseId}),uE(e).start(),e.da._a()}function H_(e){return q_(e)&&!uE(e).F_()&&e.Pa.size>0}function q_(e){return 0===vg(e).Ta.size}function K_(e){e.Aa=void 0}async function G_(e){e.da.set("Online")}async function W_(e){e.Pa.forEach(((t,n)=>{z_(e,t)}))}async function Q_(e,t){K_(e),H_(e)?(e.da.ca(t),$_(e)):e.da.set("Unknown")}async function X_(e,t,n){if(e.da.set("Online"),t instanceof Hw&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Pa.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Pa.delete(r),e.Aa.removeTarget(r))}(e,t)}catch(r){hg(L_,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Y_(e,r)}else if(t instanceof Bw?e.Aa.Xe(t):t instanceof $w?e.Aa.ot(t):e.Aa.nt(t),!n.isEqual(zg.min()))try{const t=await o_(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Aa.It(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Pa.get(r);i&&e.Pa.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach(((t,n)=>{const r=e.Pa.get(t);if(!r)return;e.Pa.set(t,r.withResumeToken(gy.EMPTY_BYTE_STRING,r.snapshotVersion)),B_(e,t);const i=new Tb(r.target,t,n,r.sequenceNumber);z_(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(i){hg(L_,"Failed to raise snapshot:",i),await Y_(e,i)}}async function Y_(e,t,n){if(!ey(t))throw t;e.Ta.add(1),await F_(e),e.da.set("Offline"),n||(n=()=>o_(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{hg(L_,"Retrying IndexedDB access"),await n(),e.Ta.delete(1),await U_(e)}))}function J_(e,t){return t().catch((n=>Y_(e,n,t)))}async function Z_(e){const t=vg(e),n=cE(t);let r=t.ha.length>0?t.ha[t.ha.length-1].batchId:-1;for(;eE(t);)try{const e=await u_(t.localStore,r);if(null===e){0===t.ha.length&&n.N_();break}r=e.batchId,tE(t,e)}catch(i){await Y_(t,i)}nE(t)&&rE(t)}function eE(e){return q_(e)&&e.ha.length<10}function tE(e,t){e.ha.push(t);const n=cE(e);n.M_()&&n.Y_&&n.Z_(t.mutations)}function nE(e){return q_(e)&&!cE(e).F_()&&e.ha.length>0}function rE(e){cE(e).start()}async function iE(e){cE(e).ta()}async function sE(e){const t=cE(e);for(const n of e.ha)t.Z_(n.mutations)}async function aE(e,t,n){const r=e.ha.shift(),i=Nw.from(r,t,n);await J_(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await Z_(e)}async function oE(e,t){t&&cE(e).Y_&&await async function(e,t){if(function(e){switch(e){case wg.OK:return mg(64938);case wg.CANCELLED:case wg.UNKNOWN:case wg.DEADLINE_EXCEEDED:case wg.RESOURCE_EXHAUSTED:case wg.INTERNAL:case wg.UNAVAILABLE:case wg.UNAUTHENTICATED:return!1;case wg.INVALID_ARGUMENT:case wg.NOT_FOUND:case wg.ALREADY_EXISTS:case wg.PERMISSION_DENIED:case wg.FAILED_PRECONDITION:case wg.ABORTED:case wg.OUT_OF_RANGE:case wg.UNIMPLEMENTED:case wg.DATA_LOSS:return!0;default:return mg(15467,{code:e})}}(n=t.code)&&n!==wg.ABORTED){const n=e.ha.shift();cE(e).O_(),await J_(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Z_(e)}var n}(e,t),nE(e)&&rE(e)}async function lE(e,t){const n=vg(e);n.asyncQueue.verifyOperationInProgress(),hg(L_,"RemoteStore received new credentials");const r=q_(n);n.Ta.add(3),await F_(n),r&&n.da.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ta.delete(3),await U_(n)}function uE(e){return e.Ra||(e.Ra=function(e,t,n){const r=vg(e);return r.ra(),new A_(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{e_:G_.bind(null,e),n_:W_.bind(null,e),i_:Q_.bind(null,e),j_:X_.bind(null,e)}),e.Ia.push((async t=>{t?(e.Ra.O_(),H_(e)?$_(e):e.da.set("Unknown")):(await e.Ra.stop(),K_(e))}))),e.Ra}function cE(e){return e.Va||(e.Va=function(e,t,n){const r=vg(e);return r.ra(),new R_(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{e_:()=>Promise.resolve(),n_:iE.bind(null,e),i_:oE.bind(null,e),X_:sE.bind(null,e),ea:aE.bind(null,e)}),e.Ia.push((async t=>{t?(e.Va.O_(),await Z_(e)):(await e.Va.stop(),e.ha.length>0&&(hg(L_,`Stopping write stream with ${e.ha.length} pending writes`),e.ha=[]))}))),e.Va
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class hE{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new _g,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,a=new hE(e,t,s,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new bg(wg.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dE(e,t){if(dg("AsyncQueue",`${t}: ${e}`),ey(e))return new bg(wg.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{static emptySet(e){return new fE(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||Gg.comparator(t.key,n.key):(e,t)=>Gg.comparator(e.key,t.key),this.keyedMap=Bv(),this.sortedSet=new uy(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fE))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new fE;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(){this.ma=new uy(Gg.comparator)}track(e){const t=e.doc.key,n=this.ma.get(t);n?0!==e.type&&3===n.type?this.ma=this.ma.insert(t,e):3===e.type&&1!==n.type?this.ma=this.ma.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.ma=this.ma.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.ma=this.ma.remove(t):1===e.type&&2===n.type?this.ma=this.ma.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.ma=this.ma.insert(t,{type:2,doc:e.doc}):mg(63341,{Vt:e,fa:n}):this.ma=this.ma.insert(t,e)}ga(){const e=[];return this.ma.inorderTraversal(((t,n)=>{e.push(n)})),e}}class mE{constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}static fromInitialDocuments(e,t,n,r,i){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new mE(e,t,fE.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Pv(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gE{constructor(){this.pa=void 0,this.ya=[]}wa(){return this.ya.some((e=>e.Sa()))}}class yE{constructor(){this.queries=vE(),this.onlineState="Unknown",this.ba=new Set}terminate(){!function(e,t){const n=vg(e),r=n.queries;n.queries=vE(),r.forEach(((e,n)=>{for(const r of n.ya)r.onError(t)}))}(this,new bg(wg.ABORTED,"Firestore shutting down"))}}function vE(){return new Fv((e=>Dv(e)),Pv)}async function wE(e,t){const n=vg(e);let r=3;const i=t.query;let s=n.queries.get(i);s?!s.wa()&&t.Sa()&&(r=2):(s=new gE,r=t.Sa()?0:1);try{switch(r){case 0:s.pa=await n.onListen(i,!0);break;case 1:s.pa=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(a){const e=dE(a,`Initialization of query '${Ov(t.query)}' failed`);return void t.onError(e)}n.queries.set(i,s),s.ya.push(t),t.Da(n.onlineState),s.pa&&t.va(s.pa)&&SE(n)}async function bE(e,t){const n=vg(e),r=t.query;let i=3;const s=n.queries.get(r);if(s){const e=s.ya.indexOf(t);e>=0&&(s.ya.splice(e,1),0===s.ya.length?i=t.Sa()?0:1:!s.wa()&&t.Sa()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _E(e,t){const n=vg(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.ya)e.va(i)&&(r=!0);t.pa=i}}r&&SE(n)}function EE(e,t,n){const r=vg(e),i=r.queries.get(t);if(i)for(const s of i.ya)s.onError(n);r.queries.delete(t)}function SE(e){e.ba.forEach((e=>{e.next()}))}var kE,TE;(TE=kE||(kE={})).Ca="default",TE.Cache="cache";class CE{constructor(e,t,n){this.query=e,this.Fa=t,this.Ma=!1,this.xa=null,this.onlineState="Unknown",this.options=n||{}}va(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new mE(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Ma?this.Oa(e)&&(this.Fa.next(e),t=!0):this.Na(e,this.onlineState)&&(this.Ba(e),t=!0),this.xa=e,t}onError(e){this.Fa.error(e)}Da(e){this.onlineState=e;let t=!1;return this.xa&&!this.Ma&&this.Na(this.xa,e)&&(this.Ba(this.xa),t=!0),t}Na(e,t){if(!e.fromCache)return!0;if(!this.Sa())return!0;const n="Offline"!==t;return(!this.options.La||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Oa(e){if(e.docChanges.length>0)return!0;const t=this.xa&&this.xa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Ba(e){e=mE.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Ma=!0,this.Fa.next(e)}Sa(){return this.options.source!==kE.Cache}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IE{constructor(e){this.key=e}}class xE{constructor(e){this.key=e}}class NE{constructor(e,t){this.query=e,this.Ga=t,this.za=null,this.hasCachedResults=!1,this.current=!1,this.ja=Qv(),this.mutatedKeys=Qv(),this.Ha=Mv(e),this.Ja=new fE(this.Ha)}get Ya(){return this.Ga}Za(e,t){const n=t?t.Xa:new pE,r=t?t.Ja:this.Ja;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1;const o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const u=r.get(e),c=Lv(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations);let f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.eu(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.Ha(c,o)>0||l&&this.Ha(c,l)<0)&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ja:s,Xa:n,Cs:a,mutatedKeys:i}}eu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.Ja;this.Ja=e.Ja,this.mutatedKeys=e.mutatedKeys;const s=e.Xa.ga();s.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return mg(20277,{Vt:e})}};return n(e)-n(t)}(e.type,t.type)||this.Ha(e.doc,t.doc))),this.tu(n),r=null!=r&&r;const a=t&&!r?this.nu():[],o=0===this.ja.size&&this.current&&!r?1:0,l=o!==this.za;return this.za=o,0!==s.length||l?{snapshot:new mE(this.query,e.Ja,i,s,e.mutatedKeys,0===o,l,!1,!!n&&n.resumeToken.approximateByteSize()>0),ru:a}:{ru:a}}Da(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ja:this.Ja,Xa:new pE,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ru:[]}}iu(e){return!this.Ga.has(e)&&!!this.Ja.has(e)&&!this.Ja.get(e).hasLocalMutations}tu(e){e&&(e.addedDocuments.forEach((e=>this.Ga=this.Ga.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Ga=this.Ga.delete(e))),this.current=e.current)}nu(){if(!this.current)return[];const e=this.ja;this.ja=Qv(),this.Ja.forEach((e=>{this.iu(e.key)&&(this.ja=this.ja.add(e.key))}));const t=[];return e.forEach((e=>{this.ja.has(e)||t.push(new xE(e))})),this.ja.forEach((n=>{e.has(n)||t.push(new IE(n))})),t}su(e){this.Ga=e.$s,this.ja=Qv();const t=this.Za(e.documents);return this.applyChanges(t,!0)}ou(){return mE.fromInitialDocuments(this.query,this.Ja,this.mutatedKeys,0===this.za,this.hasCachedResults)}}const AE="SyncEngine";class RE{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class PE{constructor(e){this.key=e,this._u=!1}}class DE{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.au={},this.uu=new Fv((e=>Dv(e)),Pv),this.cu=new Map,this.lu=new Set,this.hu=new uy(Gg.comparator),this.Pu=new Map,this.Tu=new qb,this.Iu={},this.Eu=new Map,this.du=Db.lr(),this.onlineState="Unknown",this.Au=void 0}get isPrimaryClient(){return!0===this.Au}}async function OE(e,t,n=!0){const r=tS(e);let i;const s=r.uu.get(t);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.ou()):i=await ME(r,t,n,!0),i}async function LE(e,t){const n=tS(e);await ME(n,t,!0,!1)}async function ME(e,t,n,r){const i=await function(e,t){const n=vg(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Ti.getTargetData(e,t).next((i=>i?(r=i,Zg.resolve(r)):n.Ti.allocateTargetId(e).next((i=>(r=new Tb(t,i,"TargetPurposeListen",e.currentSequenceNumber),n.Ti.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.xs.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.xs=n.xs.insert(e.targetId,e),n.Os.set(t,e.targetId)),e}))}(e.localStore,Av(t)),s=i.targetId,a=e.sharedClientState.addLocalQueryTarget(s,n);let o;return r&&(o=await async function(e,t,n,r,i){e.Ru=(t,n,r)=>async function(e,t,n,r){let i=t.view.Za(n);i.Cs&&(i=await h_(e.localStore,t.query,!1).then((({documents:e})=>t.view.Za(e,i))));const s=r&&r.targetChanges.get(t.targetId),a=r&&null!=r.targetMismatches.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s,a);return QE(e,t.targetId,o.ru),o.snapshot}(e,t,n,r);const s=await h_(e.localStore,t,!0),a=new NE(t,s.$s),o=a.Za(s.documents),l=zw.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);QE(e,n,u.ru);const c=new RE(t,n,a);return e.uu.set(t,c),e.cu.has(n)?e.cu.get(n).push(t):e.cu.set(n,[t]),u.snapshot}(e,t,s,"current"===a,i.resumeToken)),e.isPrimaryClient&&n&&V_(e.remoteStore,i),o}async function UE(e,t,n){const r=vg(e),i=r.uu.get(t),s=r.cu.get(i.targetId);if(s.length>1)return r.cu.set(i.targetId,s.filter((e=>!Pv(e,t)))),void r.uu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await c_(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),n&&j_(r.remoteStore,i.targetId),GE(r,i.targetId)})).catch(Jg)):(GE(r,i.targetId),await c_(r.localStore,i.targetId,!0))}async function FE(e,t){const n=vg(e),r=n.uu.get(t),i=n.cu.get(r.targetId);n.isPrimaryClient&&1===i.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),j_(n.remoteStore,r.targetId))}async function VE(e,t,n){const r=function(e){const t=vg(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$E.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=HE.bind(null,t),t}(e);try{const e=await function(e,t){const n=vg(e),r=jg.now(),i=t.reduce(((e,t)=>e.add(t.key)),Qv());let s,a;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let o=jv(),l=Qv();return n.Bs.getEntries(e,i).next((e=>{o=e,o.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,o))).next((i=>{s=i;const a=[];for(const e of t){const t=ww(e,s.get(e.key).overlayedDocument);null!=t&&a.push(new Ew(e.key,t,Jy(t.value.mapValue),fw.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,a,t)})).next((t=>{a=t;const r=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:a.batchId,changes:$v(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Iu[e.currentUser.toKey()];r||(r=new uy(Dg)),r=r.insert(t,n),e.Iu[e.currentUser.toKey()]=r}(r,e.batchId,n),await JE(r,e.changes),await Z_(r.remoteStore)}catch(i){const e=dE(i,"Failed to persist write");n.reject(e)}}async function jE(e,t){const n=vg(e);try{const e=await l_(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Pu.get(t);r&&(yg(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r._u=!0:e.modifiedDocuments.size>0?yg(r._u,14607):e.removedDocuments.size>0&&(yg(r._u,42227),r._u=!1))})),await JE(n,e,t)}catch(r){await Jg(r)}}function zE(e,t,n){const r=vg(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.uu.forEach(((n,r)=>{const i=r.view.Da(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=vg(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.ya)i.Da(t)&&(r=!0)})),r&&SE(n)}(r.eventManager,t),e.length&&r.au.j_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function BE(e,t,n){const r=vg(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Pu.get(t),s=i&&i.key;if(s){let e=new uy(Gg.comparator);e=e.insert(s,Zy.newNoDocument(s,zg.min()));const n=Qv().add(s),i=new jw(zg.min(),new Map,new uy(Dg),e,n);await jE(r,i),r.hu=r.hu.remove(s),r.Pu.delete(t),YE(r)}else await c_(r.localStore,t,!1).then((()=>GE(r,t,n))).catch(Jg)}async function $E(e,t){const n=vg(e),r=t.batch.batchId;try{const e=await function(e,t){const n=vg(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Bs.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let a=Zg.resolve();return s.forEach((e=>{a=a.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);yg(null!==s,48541),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),a.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Qv();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(n.localStore,t);KE(n,r,null),qE(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await JE(n,e)}catch(i){await Jg(i)}}async function HE(e,t,n){const r=vg(e);try{const e=await function(e,t){const n=vg(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(yg(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);KE(r,t,n),qE(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await JE(r,e)}catch(i){await Jg(i)}}function qE(e,t){(e.Eu.get(t)||[]).forEach((e=>{e.resolve()})),e.Eu.delete(t)}function KE(e,t,n){const r=vg(e);let i=r.Iu[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Iu[r.currentUser.toKey()]=i}}function GE(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.cu.get(t))e.uu.delete(r),n&&e.au.Vu(r,n);e.cu.delete(t),e.isPrimaryClient&&e.Tu.Hr(t).forEach((t=>{e.Tu.containsKey(t)||WE(e,t)}))}function WE(e,t){e.lu.delete(t.path.canonicalString());const n=e.hu.get(t);null!==n&&(j_(e.remoteStore,n),e.hu=e.hu.remove(t),e.Pu.delete(n),YE(e))}function QE(e,t,n){for(const r of n)r instanceof IE?(e.Tu.addReference(r.key,t),XE(e,r)):r instanceof xE?(hg(AE,"Document no longer in limbo: "+r.key),e.Tu.removeReference(r.key,t),e.Tu.containsKey(r.key)||WE(e,r.key)):mg(19791,{mu:r})}function XE(e,t){const n=t.key,r=n.path.canonicalString();e.hu.get(n)||e.lu.has(r)||(hg(AE,"New document in limbo: "+n),e.lu.add(r),YE(e))}function YE(e){for(;e.lu.size>0&&e.hu.size<e.maxConcurrentLimboResolutions;){const t=e.lu.values().next().value;e.lu.delete(t);const n=new Gg(Hg.fromString(t)),r=e.du.next();e.Pu.set(r,new PE(n)),e.hu=e.hu.insert(n,r),V_(e.remoteStore,new Tb(Av(Iv(n.path)),r,"TargetPurposeLimboResolution",ty.le))}}async function JE(e,t,n){const r=vg(e),i=[],s=[],a=[];r.uu.isEmpty()||(r.uu.forEach(((e,o)=>{a.push(r.Ru(o,t,n).then((e=>{var t;if((e||n)&&r.isPrimaryClient){const i=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(o.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(o.targetId,i?"current":"not-current")}if(e){i.push(e);const t=t_.Rs(o.targetId,e);s.push(t)}})))})),await Promise.all(a),r.au.j_(i),await async function(e,t){const n=vg(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Zg.forEach(t,(t=>Zg.forEach(t.ds,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Zg.forEach(t.As,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(r){if(!ey(r))throw r;hg(i_,"Failed to update sequence numbers: "+r)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.xs.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.xs=n.xs.insert(e,i)}}}(r.localStore,s))}async function ZE(e,t){const n=vg(e);if(!n.currentUser.isEqual(t)){hg(AE,"User change. New user:",t.toKey());const e=await a_(n.localStore,t);n.currentUser=t,i="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).Eu.forEach((e=>{e.forEach((e=>{e.reject(new bg(wg.CANCELLED,i))}))})),r.Eu.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await JE(n,e.ks)}var r,i}function eS(e,t){const n=vg(e),r=n.Pu.get(t);if(r&&r._u)return Qv().add(r.key);{let e=Qv();const r=n.cu.get(t);if(!r)return e;for(const t of r){const r=n.uu.get(t);e=e.unionWith(r.view.Ya)}return e}}function tS(e){const t=vg(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=jE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=eS.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=BE.bind(null,t),t.au.j_=_E.bind(null,t.eventManager),t.au.Vu=EE.bind(null,t.eventManager),t}class nS{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=C_(e.databaseInfo.databaseId),this.sharedClientState=this.pu(e),this.persistence=this.yu(e),await this.persistence.start(),this.localStore=this.wu(e),this.gcScheduler=this.Su(e,this.localStore),this.indexBackfillerScheduler=this.bu(e,this.localStore)}Su(e,t){return null}bu(e,t){return null}wu(e){return function(e,t,n,r){return new s_(e,t,n,r)}(this.persistence,new r_,e.initialUser,this.serializer)}yu(e){return new Yb(Zb.fi,this.serializer)}pu(e){return new f_}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}nS.provider={build:()=>new nS};class rS extends nS{constructor(e){super(),this.cacheSizeBytes=e}Su(e,t){yg(this.persistence.referenceDelegate instanceof e_,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Ub(n,e.asyncQueue,t)}yu(e){const t=void 0!==this.cacheSizeBytes?Pb.withCacheSize(this.cacheSizeBytes):Pb.DEFAULT;return new Yb((e=>e_.fi(e,t)),this.serializer)}}class iS{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>zE(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ZE.bind(null,this.syncEngine),await async function(e,t){const n=vg(e);t?(n.Ta.delete(2),await U_(n)):t||(n.Ta.add(2),await F_(n),n.da.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yE}createDatastore(e){const t=C_(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new k_(r));var r;return function(e,t,n,r){return new D_(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>zE(this.syncEngine,e,0),s=g_.C()?new g_:new p_,new M_(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){const o=new DE(e,t,n,r,i,s);return a&&(o.Au=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=vg(e);hg(L_,"RemoteStore shutting down."),t.Ta.add(5),await F_(t),t.Ea.shutdown(),t.da.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}iS.provider={build:()=>new iS};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class sS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.vu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.vu(this.observer.error,e):dg("Uncaught Error in snapshot listener:",e.toString()))}Cu(){this.muted=!0}vu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="FirestoreClient";class oS{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=og.UNAUTHENTICATED,this.clientId=Pg.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async e=>{hg(aS,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(hg(aS,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _g;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=dE(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function lS(e,t){e.asyncQueue.verifyOperationInProgress(),hg(aS,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await a_(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function uS(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){hg(aS,"Using user provided OfflineComponentProvider");try{await lS(e,e._uninitializedComponentsProvider._offline)}catch(t){const i=t;if(!("FirebaseError"===(n=i).name?n.code===wg.FAILED_PRECONDITION||n.code===wg.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&n instanceof DOMException)||22===n.code||20===n.code||11===n.code))throw i;fg("Error using user provided cache. Falling back to memory cache: "+i),await lS(e,new nS)}}else hg(aS,"Using default OfflineComponentProvider"),await lS(e,new rS(void 0));var n;return e._offlineComponents}(e);hg(aS,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener((e=>lE(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>lE(t.remoteStore,n))),e._onlineComponents=t}async function cS(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(hg(aS,"Using user provided OnlineComponentProvider"),await uS(e,e._uninitializedComponentsProvider._online)):(hg(aS,"Using default OnlineComponentProvider"),await uS(e,new iS))),e._onlineComponents}async function hS(e){const t=await cS(e),n=t.eventManager;return n.onListen=OE.bind(null,t.syncEngine),n.onUnlisten=UE.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=LE.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=FE.bind(null,t.syncEngine),n}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function dS(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const fS=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(e,t,n){if(!n)throw new bg(wg.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function mS(e){if(!Gg.isDocumentKey(e))throw new bg(wg.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function gS(e){if(Gg.isDocumentKey(e))throw new bg(wg.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function yS(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":mg(12329,{type:typeof e})}function vS(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new bg(wg.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yS(e);throw new bg(wg.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wS="firestore.googleapis.com",bS=!0;class _S{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new bg(wg.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=wS,this.ssl=bS}else this.host=e.host,this.ssl=null!==(t=e.ssl)&&void 0!==t?t:bS;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=Rb;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new bg(wg.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new bg(wg.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=dS(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new bg(wg.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new bg(wg.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new bg(wg.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class ES{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _S({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new bg(wg.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new bg(wg.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _S(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Sg;switch(e.type){case"firstParty":return new Ig(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new bg(wg.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=fS.get(e);t&&(hg("ComponentProvider","Removing Datastore"),fS.delete(e),t.terminate())}(this),Promise.resolve()}}function SS(e,t,n,r={}){var i;e=vS(e,ES);const s=mh(t),a=e._getSettings(),o=Object.assign(Object.assign({},a),{emulatorOptions:e._getEmulatorOptions()}),l=`${t}:${n}`;s&&(gh(`https://${l}`),wh("Firestore",!0)),a.host!==wS&&a.host!==l&&fg("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},a),{host:l,ssl:s,emulatorOptions:r});if(!Th(u,o)&&(e._setSettings(u),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=og.MOCK_USER;else{t=function(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",r=e.iat||0,i=e.sub||e.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},e);return[oh(JSON.stringify({alg:"none",type:"JWT"})),oh(JSON.stringify(s)),""].join(".")}(r.mockUserToken,null===(i=e._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new bg(wg.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new og(s)}e._authCredentials=new kg(new Eg(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new kS(this.firestore,e,this._query)}}class TS{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new CS(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new TS(this.firestore,e,this._key)}}class CS extends kS{constructor(e,t,n){super(e,t,Iv(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new TS(this.firestore,null,new Gg(e))}withConverter(e){return new CS(this.firestore,e,this._path)}}function IS(e,t,...n){if(e=Ah(e),pS("collection","path",t),e instanceof ES){const r=Hg.fromString(t,...n);return gS(r),new CS(e,null,r)}{if(!(e instanceof TS||e instanceof CS))throw new bg(wg.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Hg.fromString(t,...n));return gS(r),new CS(e.firestore,null,r)}}function xS(e,t,...n){if(e=Ah(e),1===arguments.length&&(t=Pg.newId()),pS("doc","path",t),e instanceof ES){const r=Hg.fromString(t,...n);return mS(r),new TS(e,null,new Gg(r))}{if(!(e instanceof TS||e instanceof CS))throw new bg(wg.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(Hg.fromString(t,...n));return mS(r),new TS(e.firestore,e instanceof CS?e.converter:null,new Gg(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS="AsyncQueue";class AS{constructor(e=Promise.resolve()){this.zu=[],this.ju=!1,this.Hu=[],this.Ju=null,this.Yu=!1,this.Zu=!1,this.Xu=[],this.C_=new I_(this,"async_queue_retry"),this.ec=()=>{const e=T_();e&&hg(NS,"Visibility state changed to "+e.visibilityState),this.C_.p_()},this.tc=e;const t=T_();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.ec)}get isShuttingDown(){return this.ju}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.nc(),this.rc(e)}enterRestrictedMode(e){if(!this.ju){this.ju=!0,this.Zu=e||!1;const t=T_();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.ec)}}enqueue(e){if(this.nc(),this.ju)return new Promise((()=>{}));const t=new _g;return this.rc((()=>this.ju&&this.Zu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.zu.push(e),this.sc())))}async sc(){if(0!==this.zu.length){try{await this.zu[0](),this.zu.shift(),this.C_.reset()}catch(e){if(!ey(e))throw e;hg(NS,"Operation failed with retryable error: "+e)}this.zu.length>0&&this.C_.f_((()=>this.sc()))}}rc(e){const t=this.tc.then((()=>(this.Yu=!0,e().catch((e=>{throw this.Ju=e,this.Yu=!1,dg("INTERNAL UNHANDLED ERROR: ",RS(e)),e})).then((e=>(this.Yu=!1,e))))));return this.tc=t,t}enqueueAfterDelay(e,t,n){this.nc(),this.Xu.indexOf(e)>-1&&(t=0);const r=hE.createAndSchedule(this,e,t,n,(e=>this.oc(e)));return this.Hu.push(r),r}nc(){this.Ju&&mg(47125,{_c:RS(this.Ju)})}verifyOperationInProgress(){}async ac(){let e;do{e=this.tc,await e}while(e!==this.tc)}uc(e){for(const t of this.Hu)if(t.timerId===e)return!0;return!1}cc(e){return this.ac().then((()=>{this.Hu.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.Hu)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.ac()}))}lc(e){this.Xu.push(e)}oc(e){const t=this.Hu.indexOf(e);this.Hu.splice(t,1)}}function RS(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function PS(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}(e,["next","error","complete"])}class DS extends ES{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new AS,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new AS(e),this._firestoreClient=void 0,await e}}}function OS(e,t){const n="object"==typeof e?e:Gd(),r="string"==typeof e?e:Ny,i=zd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const e=(e=>{const t=hh(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),r]:[t.substring(0,n),r]})("firestore");e&&SS(i,...e)}return i}function LS(e){if(e._terminated)throw new bg(wg.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||function(e){var t,n,r;const i=e._freezeSettings(),s=(a=e._databaseId,o=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",l=e._persistenceKey,u=i,new xy(a,o,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,dS(u.experimentalLongPollingOptions),u.useFetchStreams,u.isUsingEmulator));var a,o,l,u;e._componentsProvider||(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),e._firestoreClient=new oS(e._authCredentials,e._appCheckCredentials,e._queue,s,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e),e._firestoreClient}class MS{constructor(e){this._byteString=e}static fromBase64String(e){try{return new MS(gy.fromBase64String(e))}catch(t){throw new bg(wg.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new MS(gy.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class US{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new bg(wg.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kg(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FS{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new bg(wg.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new bg(wg.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Dg(this._lat,e._lat)||Dg(this._long,e._long)}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this._values=(e||[]).map((e=>e))}toArray(){return this._values.map((e=>e))}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS=/^__.*__$/;class BS{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new Ew(e,this.data,this.fieldMask,t,this.fieldTransforms):new _w(e,this.data,t,this.fieldTransforms)}}function $S(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw mg(40011,{hc:e})}}class HS{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Pc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get hc(){return this.settings.hc}Tc(e){return new HS(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Ic(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Tc({path:n,Ec:!1});return r.dc(e),r}Ac(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Tc({path:n,Ec:!1});return r.Pc(),r}Rc(e){return this.Tc({path:void 0,Ec:!0})}Vc(e){return tk(e,this.settings.methodName,this.settings.mc||!1,this.path,this.settings.fc)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Pc(){if(this.path)for(let e=0;e<this.path.length;e++)this.dc(this.path.get(e))}dc(e){if(0===e.length)throw this.Vc("Document fields must not be empty");if($S(this.hc)&&zS.test(e))throw this.Vc('Document fields cannot begin and end with "__"')}}class qS{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||C_(e)}gc(e,t,n,r=!1){return new HS({hc:e,methodName:t,fc:n,path:Kg.emptyPath(),Ec:!1,mc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function KS(e){const t=e._freezeSettings(),n=C_(e._databaseId);return new qS(e._databaseId,!!t.ignoreUndefinedProperties,n)}function GS(e,t,n,r,i,s={}){const a=e.gc(s.merge||s.mergeFields?2:0,t,n,i);YS("Data must be an object, but it was:",a,r);const o=QS(r,a);let l,u;if(s.merge)l=new py(a.fieldMask),u=a.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=JS(t,r,n);if(!a.contains(i))throw new bg(wg.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);nk(e,i)||e.push(i)}l=new py(e),u=a.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,u=a.fieldTransforms;return new BS(new Yy(o),l,u)}function WS(e,t){if(XS(e=Ah(e)))return YS("Unsupported field value:",t,e),QS(e,t);if(e instanceof FS)return function(e,t){if(!$S(t.hc))throw t.Vc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Vc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Ec&&4!==t.hc)throw t.Vc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=WS(i,t.Rc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Ah(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Zv(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=jg.fromDate(e);return{timestampValue:eb(t.serializer,n)}}if(e instanceof jg){const n=new jg(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:eb(t.serializer,n)}}if(e instanceof VS)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof MS)return{bytesValue:tb(t.serializer,e._byteString)};if(e instanceof TS){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Vc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ib(e.firestore._databaseId||t.databaseId,e._key.path)}}if(e instanceof jS)return n=e,r=t,{mapValue:{fields:{[Ry]:{stringValue:Oy},[Ly]:{arrayValue:{values:n.toArray().map((e=>{if("number"!=typeof e)throw r.Vc("VectorValues must only contain numeric values.");return Yv(r.serializer,e)}))}}}}};var n,r;throw t.Vc(`Unsupported field value: ${yS(e)}`)}(e,t)}function QS(e,t){const n={};return ly(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):oy(e,((e,r)=>{const i=WS(r,t.Ic(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function XS(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof jg||e instanceof VS||e instanceof MS||e instanceof TS||e instanceof FS||e instanceof jS)}function YS(e,t,n){if(!XS(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=yS(n);throw"an object"===r?t.Vc(e+" a custom object"):t.Vc(e+" "+r)}var r}function JS(e,t,n){if((t=Ah(t))instanceof US)return t._internalPath;if("string"==typeof t)return ek(e,t);throw tk("Field path arguments must be of type string or ",e,!1,void 0,n)}const ZS=new RegExp("[~\\*/\\[\\]]");function ek(e,t,n){if(t.search(ZS)>=0)throw tk(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new US(...t.split("."))._internalPath}catch(r){throw tk(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function tk(e,t,n,r,i){const s=r&&!r.isEmpty(),a=void 0!==i;let o=`Function ${t}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=` in field ${r}`),a&&(l+=` in document ${i}`),l+=")"),new bg(wg.INVALID_ARGUMENT,o+e+l)}function nk(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rk{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new TS(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new ik(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(sk("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class ik extends rk{data(){return super.data()}}function sk(e,t){return"string"==typeof t?ek(e,t):t instanceof US?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{convertValue(e,t="none"){switch(My(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wy(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(by(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw mg(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return oy(e,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertVectorValue(e){var t,n,r;const i=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t[Ly].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map((e=>wy(e.doubleValue)));return new jS(i)}convertGeoPoint(e){return new VS(wy(e.latitude),wy(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Cy(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Iy(e));default:return null}}convertTimestamp(e){const t=vy(e);return new jg(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=Hg.fromString(e);yg(kb(n),9688,{name:e});const r=new Ay(n.get(1),n.get(3)),i=new Gg(n.popFirst(5));return r.isEqual(t)||dg(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ok{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class lk extends rk{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new uk(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(sk("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class uk extends lk{data(e={}){return super.data(e)}}class ck{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ok(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new uk(this._firestore,this._userDataWriter,n.key,n,new ok(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new bg(wg.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const r=new uk(e._firestore,e._userDataWriter,n.doc.key,n.doc,new ok(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new uk(e._firestore,e._userDataWriter,t.doc.key,t.doc,new ok(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:hk(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function hk(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return mg(61501,{type:e})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(e){e=vS(e,TS);const t=vS(e.firestore,DS);return function(e,t,n={}){const r=new _g;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new sS({next:o=>{s.Cu(),t.enqueueAndForget((()=>bE(e,a)));const l=o.docs.has(n);!l&&o.fromCache?i.reject(new bg(wg.UNAVAILABLE,"Failed to get document because the client is offline.")):l&&o.fromCache&&r&&"server"===r.source?i.reject(new bg(wg.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:e=>i.reject(e)}),a=new CE(Iv(n.path),s,{includeMetadataChanges:!0,La:!0});return wE(e,a)}(await hS(e),e.asyncQueue,t,n,r))),r.promise}(LS(t),e._key).then((n=>yk(t,e,n)))}class fk extends ak{constructor(e){super(),this.firestore=e}convertBytes(e){return new MS(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new TS(this.firestore,null,t)}}function pk(e,t,n){e=vS(e,TS);const r=vS(e.firestore,DS),i=function(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}(e.converter,t,n);return gk(r,[GS(KS(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,fw.none())])}function mk(e,...t){var n,r,i;e=Ah(e);let s={includeMetadataChanges:!1,source:"default"},a=0;"object"!=typeof t[a]||PS(t[a])||(s=t[a],a++);const o={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(PS(t[a])){const e=t[a];t[a]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[a+1]=null===(r=e.error)||void 0===r?void 0:r.bind(e),t[a+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let l,u,c;if(e instanceof TS)u=vS(e.firestore,DS),c=Iv(e._key.path),l={next:n=>{t[a]&&t[a](yk(u,e,n))},error:t[a+1],complete:t[a+2]};else{const n=vS(e,kS);u=vS(n.firestore,DS),c=n._query;const r=new fk(u);l={next:e=>{t[a]&&t[a](new ck(u,r,n,e))},error:t[a+1],complete:t[a+2]},function(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new bg(wg.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query)}return function(e,t,n,r){const i=new sS(r),s=new CE(t,i,n);return e.asyncQueue.enqueueAndForget((async()=>wE(await hS(e),s))),()=>{i.Cu(),e.asyncQueue.enqueueAndForget((async()=>bE(await hS(e),s)))}}(LS(u),c,o,l)}function gk(e,t){return function(e,t){const n=new _g;return e.asyncQueue.enqueueAndForget((async()=>VE(await function(e){return cS(e).then((e=>e.syncEngine))}(e),t,n))),n.promise}(LS(e),t)}function yk(e,t,n){const r=n.docs.get(t._key),i=new fk(e);return new lk(e,i,t._key,r,new ok(n.hasPendingWrites,n.fromCache),t.converter)}!function(e,t=!0){lg=qd,jd(new Rh("firestore",((e,{instanceIdentifier:n,options:r})=>{const i=e.getProvider("app").getImmediate(),s=new DS(new Tg(e.getProvider("auth-internal")),new Ng(i,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new bg(wg.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ay(e.options.projectId,t)}(i,n),i);return r=Object.assign({useFetchStreams:t},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),Wd(sg,ag,e),Wd(sg,ag,"esm2017")}();const vk={apiKey:"AIzaSyCjVr5-UHNxaBkqsg-7iEnr5GOjhDHLx-Y",authDomain:"simuladorappsheet.firebaseapp.com",projectId:"simuladorappsheet",storageBucket:"simuladorappsheet.firebasestorage.app",messagingSenderId:"161061857473",appId:"1:161061857473:web:9ef4fa4a9a94d4f6c5cc40",measurementId:"G-FBRXGWVE09"},wk=vk.projectId;"undefined"!=typeof __initial_auth_token&&__initial_auth_token;const bk=({name:e,className:t=""})=>{const n={user:W.jsx("path",{d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"}),shield:W.jsx("path",{d:"M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.47-1.688 3.344-.48.403-.878.785-1.22 1.133-.163.163-.295.313-.385.437L12 21l-5.307-5.49a8.077 8.077 0 0 1-.386-.437 6.072 6.072 0 0 1-1.219-1.133A9.07 9.07 0 0 1 3 12c0-1.268.63-2.47 1.688-3.344.48-.403.878-.785 1.22-1.133.163-.163.295-.313.437L12 3l5.307 5.49a8.077 8.077 0 0 1 .386.437 6.072 6.072 0 0 1 1.219 1.133A9.07 9.07 0 0 1 21 12Z"}),home:W.jsx("path",{d:"m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12m-4.5 9V15a2.25 2.25 0 0 0-2.25-2.25H15M10.5 21h3.75m-9.75-3v-4.5h4.5"}),"plus-circle":W.jsx("path",{d:"M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}),"external-link":W.jsx("path",{d:"M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"}),apps:W.jsx("path",{d:"M10.5 8.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM10.5 18.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM18 8.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5ZM18 18.75a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"}),"user-plus":W.jsx("path",{d:"M18 18.75c0 .621-.504 1.125-1.125 1.125H5.25A1.125 1.125 0 0 1 4.125 19.5v-2.25m10.5-1.125h2.25c.621 0 1.125-.504 1.125-1.125v-1.5m-3.75-3.75H10.5m-1.5-4.5h.008v.008H9Zm2.25 0h.008v.008H11.25ZM6 10.5h.008v.008H6Zm2.25 0h.008v.008H8.25Z"}),pencil:W.jsx("path",{d:"m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"}),trash:W.jsx("path",{d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.927a2.25 2.25 0 0 1-2.244-2.077L4.78 5.893m14.825 0a.375.375 0 1 0 0-.75.375.375 0 0 0 0 .75ZM7.5 14.25a.75.75 0 0 0 0 1.5h.008v.008H7.5V14.25Zm10.5 0a.75.75 0 0 0 0 1.5h.008v.008H18V14.25Zm-4.5 0a.75.75 0 0 0 0 1.5h.008v.008H13.5V14.25Z"})};return W.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:2,stroke:"currentColor",className:t,children:n[e]})},_k=()=>{const[e,t]=V.useState(null),[n,r]=V.useState(null),[i,s]=V.useState(null),[a,o]=V.useState(!1),[l,u]=V.useState("admin@example.com"),[c,h]=V.useState("welcome"),[d,f]=V.useState(null),[p,m]=V.useState({name:"",email:"",role:"User",active:!0,accessibleApps:[]}),[g,y]=V.useState([]),[v,w]=V.useState(!0),[b,_]=V.useState(null),E=[{name:"SISTEMA CT",url:"https://www.appsheet.com/start/9f46034d-5c24-43c8-a637-ba8f7bc0700f"},{name:"FINANCEIRO",url:"https://www.appsheet.com/start/33488d1b-ec20-4396-ae74-5b9664a36b17"},{name:"PROFISSIONAIS",url:"https://www.appsheet.com/start/b2b10225-0562-48b7-b3ac-1d300d1ae4fe"},{name:"ENFERMARIA",url:"https://www.appsheet.com/start/eaee5a73-dfe7-4ff7-ae03-8b2928bb2ddc"},{name:"OCORRÊNCIAS",url:"https://www.appsheet.com/start/14ab4e7f-e828-4fd5-b963-cfb8db749644"},{name:"CANTINA",url:"https://www.appsheet.com/start/a37e669b-ecc5-49a3-b9c7-fd6dd31e55ad"},{name:"ESTOQUE",url:"https://www.appsheet.com/start/f3558652-c5b9-4756-bbd3-51f6a8dfac93"}];V.useEffect((()=>{console.log("Iniciando Firebase...");try{const e=Kd(vk),n=qm(e),i=OS(e);console.log("Auth Instance:",n),r(n),t(i);const a=function(e,t,n,r){return Ah(e).onAuthStateChanged(t,n,r)}(n,(async e=>{var t,r;if(e)console.log("Usuário autenticado:",e.uid),s(e.uid);else{console.log("Nenhum usuário autenticado. Tentando autenticação anónima...");try{await Dp(n),console.log("Autenticação anónima bem-sucedida. UID:",null==(t=n.currentUser)?void 0:t.uid),s((null==(r=n.currentUser)?void 0:r.uid)||crypto.randomUUID())}catch(i){console.error("Erro ao autenticar anonimamente:",i),_("Falha na autenticação. Por favor, verifique a configuração de autenticação anónima no Firebase.")}}o(!0),console.log("Autenticação pronta (isAuthReady = true).")}));return()=>a()}catch(e){console.error("Erro na inicialização do Firebase:",e),_("Erro crítico na inicialização do sistema. Verifique a configuração do Firebase."),w(!1)}}),[]),V.useEffect((()=>{if(!e||!a||!i)return void console.log("Aguardando DB, autenticação ou userId para carregar usuários.");w(!0),_(null),console.log("Tentando carregar usuários do Firestore...");const t=mk(IS(e,`artifacts/${wk}/public/data/users`),(e=>{const t=e.docs.map((e=>({id:e.id,...e.data()})));if(y(t),w(!1),console.log("Usuários carregados do Firestore:",t),t.length>0){const e=t.find((e=>"admin@example.com"===e.email));e?(u(e.email),console.log("Simulando login como Admin:",e.email)):(u(t[0].email),console.log("Simulando login como primeiro usuário:",t[0].email))}else u(""),console.log("Nenhum usuário encontrado no Firestore. userEmail definido como vazio.")}),(e=>{console.error("Erro ao carregar usuários do Firestore:",e),_("Erro ao carregar usuários. Verifique as permissões do Firestore e tente recarregar a página."),w(!1)}));return()=>t()}),[e,a,i]),V.useEffect((()=>{(async()=>{if(!e||!a||!i)return void console.log("Aguardando DB, autenticação ou userId para criar admin padrão.");const t=xS(IS(e,`artifacts/${wk}/public/data/users`),"admin-default");try{console.log("Verificando se o usuário admin padrão existe...");if((await dk(t)).exists())console.log("Usuário admin padrão já existe.");else{console.log("Criando usuário admin padrão...");const e={id:"admin-default",name:"Admin Padrão",email:"admin@example.com",role:"Admin",active:!0,accessibleApps:E.map((e=>e.name))};await pk(t,e),console.log("Usuário admin padrão criado com sucesso.")}}catch(n){console.error("Erro ao verificar/criar admin padrão:",n),_("Erro na inicialização do admin. Recarregue a página.")}})()}),[e,a,i]);const S=async t=>{if(e){w(!0),_(null);try{const r=IS(e,`artifacts/${wk}/public/data/users`);await(n=xS(r,t),gk(vS(n.firestore,DS),[new Cw(n._key,fw.none())])),console.log("Usuário deletado com sucesso:",t)}catch(r){console.error("Erro ao deletar usuário do Firestore:",r),_("Erro ao deletar usuário. Tente novamente.")}finally{w(!1)}var n}else _("Base de dados não inicializada.")};return W.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4 font-inter",children:[W.jsx("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",rel:"stylesheet"}),W.jsx("script",{src:"https://cdn.tailwindcss.com"}),W.jsx("style",{children:"\n                /* Basic styling for the body to apply the Inter font */\n                body {\n                    font-family: 'Inter', sans-serif;\n                }\n                "}),W.jsxs("div",{className:"max-w-5xl w-full mx-auto bg-white rounded-3xl shadow-2xl p-8 border border-gray-200",children:[W.jsxs("header",{className:"text-center mb-10",children:[W.jsx("img",{src:"https://placehold.co/128x128/6366F1/FFFFFF?text=LOGO",alt:"Logo",className:"w-32 h-32 object-contain mx-auto mb-4 rounded-full shadow-md border-2 border-indigo-200"}),W.jsx("h1",{className:"text-4xl font-extrabold text-gray-900 tracking-tight",children:"Sistemas Varella"}),W.jsx("p",{className:"text-gray-600 mt-2 text-lg",children:"Gerenciamento de Acessos"})]}),W.jsx("main",{children:(()=>{var t;const n=(e=>{var t;return(null==(t=g.find((t=>t.email===e)))?void 0:t.role)||"Guest"})(l),r=(e=>{var t;return(null==(t=g.find((t=>t.email===e)))?void 0:t.name)||"Unknown"})(l),s=(e=>{var t;return(null==(t=g.find((t=>t.email===e)))?void 0:t.active)||!1})(l);if(!a||v)return W.jsxs("div",{className:"flex justify-center items-center h-64",children:[W.jsx("div",{className:"animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"}),W.jsx("p",{className:"ml-4 text-lg text-gray-700",children:"A carregar dados..."})]});if(b)return W.jsxs("div",{className:"text-center p-6 bg-red-100 text-red-700 rounded-lg shadow-md max-w-lg mx-auto",children:[W.jsx("p",{className:"font-bold text-xl mb-2",children:"Erro:"}),W.jsx("p",{children:b}),W.jsx("button",{onClick:()=>window.location.reload(),className:"mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition",children:"Recarregar Página"})]});switch(c){case"welcome":return W.jsxs("div",{className:"text-center p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto flex flex-col items-center justify-center",children:[W.jsxs("h1",{className:"text-3xl font-extrabold text-gray-800 mb-4",children:["Bem-vindo, ",r,"!"]}),W.jsxs("p",{className:"text-lg text-gray-600 mb-6",children:["Sua função: ",W.jsx("span",{className:"font-semibold text-blue-700",children:n})]}),s?W.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4 w-full px-4",children:["Admin"===n&&W.jsxs("button",{onClick:()=>h("admin"),className:"flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300 w-full sm:w-auto",children:[W.jsx(bk,{name:"shield",className:"w-5 h-5"})," Painel Admin"]}),W.jsxs("button",{onClick:()=>h("apps"),className:"flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-green-300 w-full sm:w-auto",children:[W.jsx(bk,{name:"apps",className:"w-5 h-5"})," Ver Aplicativos"]})]}):W.jsx("p",{className:"text-red-600 text-xl font-medium mt-4",children:"Usuário inativo. Entre em contato com o administrador."}),W.jsxs("div",{className:"mt-8 w-full px-4",children:[W.jsx("label",{htmlFor:"user-select",className:"block text-gray-700 text-sm font-bold mb-2",children:"Simular Login como:"}),W.jsx("select",{id:"user-select",value:l,onChange:e=>u(e.target.value),className:"shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",children:g.map((e=>W.jsxs("option",{value:e.email,children:[e.name," (",e.role,")"]},e.id)))})]}),i&&W.jsxs("p",{className:"mt-4 text-sm text-gray-500",children:["ID do Usuário Logado: ",W.jsx("span",{className:"font-mono text-gray-700 break-all",children:i})]})]});case"apps":const a=(null==(t=g.find((e=>e.email===l)))?void 0:t.accessibleApps)||[],o=E.filter((e=>a.includes(e.name)));return W.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-md max-w-4xl mx-auto text-center",children:[W.jsxs("h2",{className:"text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2",children:[W.jsx(bk,{name:"apps",className:"w-6 h-6 text-purple-600"})," Seus Aplicativos"]}),W.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8",children:o.map((e=>W.jsxs("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"flex flex-col items-center justify-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out text-purple-800 font-semibold text-lg text-center border border-purple-200",children:[W.jsx(bk,{name:"external-link",className:"w-6 h-6 mb-3 text-purple-600"}),e.name]},e.name)))}),W.jsxs("button",{onClick:()=>h("welcome"),className:"flex items-center justify-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300 mx-auto",children:[W.jsx(bk,{name:"home",className:"w-5 h-5"})," Voltar ao Início"]})]});case"admin":return W.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto text-center",children:[W.jsxs("h2",{className:"text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2",children:[W.jsx(bk,{name:"shield",className:"w-6 h-6 text-blue-600"})," Painel Administrativo"]}),W.jsxs("div",{className:"flex flex-col sm:flex-row justify-center gap-4 mb-8",children:[W.jsxs("button",{onClick:()=>h("admin-users"),className:"flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300",children:[W.jsx(bk,{name:"user",className:"w-5 h-5"})," Gerenciar Usuários"]}),W.jsxs("button",{onClick:()=>{m({name:"",email:"",role:"User",active:!0,accessibleApps:[]}),f(null),h("admin-add-user")},className:"flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-purple-300",children:[W.jsx(bk,{name:"user-plus",className:"w-5 h-5"})," Adicionar Novo Usuário"]})]}),W.jsxs("button",{onClick:()=>h("welcome"),className:"flex items-center justify-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300 mx-auto",children:[W.jsx(bk,{name:"home",className:"w-5 h-5"})," Voltar ao Início"]})]});case"admin-users":return W.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-md max-w-5xl mx-auto",children:[W.jsxs("h2",{className:"text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2",children:[W.jsx(bk,{name:"user",className:"w-6 h-6 text-blue-600"})," Cadastro e Gerenciamento de Usuários"]}),W.jsx("div",{className:"overflow-x-auto mb-8",children:W.jsxs("table",{className:"min-w-full bg-white rounded-lg shadow-md",children:[W.jsx("thead",{className:"bg-gray-200",children:W.jsxs("tr",{children:[W.jsx("th",{className:"py-3 px-4 text-left text-sm font-semibold text-gray-700",children:"Nome"}),W.jsx("th",{className:"py-3 px-4 text-left text-sm font-semibold text-gray-700",children:"Email"}),W.jsx("th",{className:"py-3 px-4 text-left text-sm font-semibold text-gray-700",children:"Função"}),W.jsx("th",{className:"py-3 px-4 text-left text-sm font-semibold text-gray-700",children:"Ativo"}),W.jsx("th",{className:"py-3 px-4 text-left text-sm font-semibold text-gray-700",children:"Ações"})]})}),W.jsx("tbody",{children:g.map((e=>W.jsxs("tr",{className:"border-b border-gray-200 hover:bg-gray-50",children:[W.jsx("td",{className:"py-3 px-4 text-gray-800",children:e.name}),W.jsx("td",{className:"py-3 px-4 text-gray-800",children:e.email}),W.jsx("td",{className:"py-3 px-4 text-gray-800",children:e.role}),W.jsx("td",{className:"py-3 px-4 text-gray-800",children:e.active?W.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800",children:"Sim"}):W.jsx("span",{className:"inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800",children:"Não"})}),W.jsx("td",{className:"py-3 px-4",children:W.jsxs("div",{className:"flex gap-2",children:[W.jsx("button",{onClick:()=>{f(e),m({...e}),h("admin-edit-user")},className:"p-2 rounded-full bg-yellow-100 text-yellow-700 hover:bg-yellow-200 transition duration-200",title:"Editar Usuário",children:W.jsx(bk,{name:"pencil",className:"w-5 h-5"})}),W.jsx("button",{onClick:()=>S(e.id),className:"p-2 rounded-full bg-red-100 text-red-700 hover:bg-red-200 transition duration-200",title:"Excluir Usuário",children:W.jsx(bk,{name:"trash",className:"w-5 h-5"})})]})})]},e.id)))})]})}),W.jsxs("button",{onClick:()=>h("admin"),className:"flex items-center justify-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300 mx-auto",children:[W.jsx(bk,{name:"home",className:"w-5 h-5"})," Voltar ao Painel Admin"]})]});case"admin-add-user":case"admin-edit-user":const p="admin-edit-user"===c,y=p?d:{name:"",email:"",role:"User",active:!0,accessibleApps:[]},[v,b]=V.useState(y);V.useEffect((()=>{b(y)}),[c,d]);const k=e=>{const{name:t,value:n,type:r,checked:i}=e.target;b((e=>({...e,[t]:"checkbox"===r?i:n})))},T=e=>{b((t=>({...t,accessibleApps:t.accessibleApps.includes(e)?t.accessibleApps.filter((t=>t!==e)):[...t.accessibleApps,e]})))},C=t=>{t.preventDefault(),(async t=>{if(e){w(!0),_(null);try{const n=xS(IS(e,`artifacts/${wk}/public/data/users`),t.id||crypto.randomUUID());await pk(n,t,{merge:!0}),f(null),m({name:"",email:"",role:"User",active:!0,accessibleApps:[]}),h("admin-users"),console.log("Usuário salvo com sucesso:",t.email)}catch(n){console.error("Erro ao salvar usuário no Firestore:",n),_("Erro ao salvar usuário. Verifique os dados e tente novamente.")}finally{w(!1)}}else _("Base de dados não inicializada.")})(v)};return W.jsxs("div",{className:"p-6 bg-white rounded-lg shadow-md max-w-xl mx-auto",children:[W.jsxs("h2",{className:"text-2xl font-bold text-gray-800 mb-6 flex items-center justify-center gap-2",children:[W.jsx(bk,{name:"user-plus",className:"w-6 h-6 text-purple-600"})," ",p?"Editar Usuário":"Adicionar Novo Usuário"]}),W.jsxs("form",{onSubmit:C,className:"space-y-4",children:[W.jsxs("div",{children:[W.jsx("label",{htmlFor:"name",className:"block text-gray-700 text-sm font-bold mb-2",children:"Nome:"}),W.jsx("input",{type:"text",id:"name",name:"name",value:v.name,onChange:k,className:"shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0})]}),W.jsxs("div",{children:[W.jsx("label",{htmlFor:"email",className:"block text-gray-700 text-sm font-bold mb-2",children:"Email:"}),W.jsx("input",{type:"email",id:"email",name:"email",value:v.email,onChange:k,className:"shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",required:!0})]}),W.jsxs("div",{children:[W.jsx("label",{htmlFor:"role",className:"block text-gray-700 text-sm font-bold mb-2",children:"Função:"}),W.jsxs("select",{id:"role",name:"role",value:v.role,onChange:k,className:"shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",children:[W.jsx("option",{value:"Admin",children:"Admin"}),W.jsx("option",{value:"User",children:"User"}),W.jsx("option",{value:"Guest",children:"Guest"})]})]}),W.jsxs("div",{className:"flex items-center",children:[W.jsx("input",{type:"checkbox",id:"active",name:"active",checked:v.active,onChange:k,className:"mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),W.jsx("label",{htmlFor:"active",className:"text-gray-700 text-sm font-bold",children:"Ativo"})]}),W.jsxs("div",{children:[W.jsx("label",{className:"block text-gray-700 text-sm font-bold mb-2",children:"Aplicativos Acessíveis:"}),W.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2",children:E.map((e=>W.jsxs("div",{className:"flex items-center",children:[W.jsx("input",{type:"checkbox",id:`app-${e.name}`,checked:v.accessibleApps.includes(e.name),onChange:()=>T(e.name),className:"mr-2 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"}),W.jsx("label",{htmlFor:`app-${e.name}`,className:"text-gray-700 text-sm",children:e.name})]},e.name)))})]}),W.jsxs("div",{className:"flex justify-end gap-4",children:[W.jsx("button",{type:"button",onClick:()=>h("admin-users"),className:"flex items-center justify-center gap-2 bg-gray-500 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-gray-300",children:"Cancelar"}),W.jsx("button",{type:"submit",className:"flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-300",children:p?"Atualizar Usuário":"Adicionar Usuário"})]})]})]});default:return W.jsx("div",{className:"text-center p-6 text-red-500",children:"404 - View not found"})}})()})]})]})};Q.createRoot(document.getElementById("root")).render(W.jsx(j.StrictMode,{children:W.jsx(_k,{})}));
