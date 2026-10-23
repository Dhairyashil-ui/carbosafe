var D0=Object.defineProperty;var U0=(t,e,n)=>e in t?D0(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Fe=(t,e,n)=>U0(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function F0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Rm={exports:{}},Dl={},Nm={exports:{}},nt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ka=Symbol.for("react.element"),O0=Symbol.for("react.portal"),k0=Symbol.for("react.fragment"),B0=Symbol.for("react.strict_mode"),z0=Symbol.for("react.profiler"),H0=Symbol.for("react.provider"),V0=Symbol.for("react.context"),G0=Symbol.for("react.forward_ref"),j0=Symbol.for("react.suspense"),W0=Symbol.for("react.memo"),X0=Symbol.for("react.lazy"),gh=Symbol.iterator;function q0(t){return t===null||typeof t!="object"?null:(t=gh&&t[gh]||t["@@iterator"],typeof t=="function"?t:null)}var Pm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Lm=Object.assign,Im={};function Us(t,e,n){this.props=t,this.context=e,this.refs=Im,this.updater=n||Pm}Us.prototype.isReactComponent={};Us.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Us.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Dm(){}Dm.prototype=Us.prototype;function qd(t,e,n){this.props=t,this.context=e,this.refs=Im,this.updater=n||Pm}var Yd=qd.prototype=new Dm;Yd.constructor=qd;Lm(Yd,Us.prototype);Yd.isPureReactComponent=!0;var vh=Array.isArray,Um=Object.prototype.hasOwnProperty,$d={current:null},Fm={key:!0,ref:!0,__self:!0,__source:!0};function Om(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Um.call(e,i)&&!Fm.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var c=Array(o),u=0;u<o;u++)c[u]=arguments[u+2];r.children=c}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:ka,type:t,key:s,ref:a,props:r,_owner:$d.current}}function Y0(t,e){return{$$typeof:ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Kd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ka}function $0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var xh=/\/+/g;function ic(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$0(""+t.key):e.toString(36)}function ko(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case ka:case O0:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+ic(a,0):i,vh(r)?(n="",t!=null&&(n=t.replace(xh,"$&/")+"/"),ko(r,e,n,"",function(u){return u})):r!=null&&(Kd(r)&&(r=Y0(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(xh,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",vh(t))for(var o=0;o<t.length;o++){s=t[o];var c=i+ic(s,o);a+=ko(s,e,n,c,r)}else if(c=q0(t),typeof c=="function")for(t=c.call(t),o=0;!(s=t.next()).done;)s=s.value,c=i+ic(s,o++),a+=ko(s,e,n,c,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function $a(t,e,n){if(t==null)return t;var i=[],r=0;return ko(t,i,"","",function(s){return e.call(n,s,r++)}),i}function K0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var sn={current:null},Bo={transition:null},Z0={ReactCurrentDispatcher:sn,ReactCurrentBatchConfig:Bo,ReactCurrentOwner:$d};function km(){throw Error("act(...) is not supported in production builds of React.")}nt.Children={map:$a,forEach:function(t,e,n){$a(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return $a(t,function(){e++}),e},toArray:function(t){return $a(t,function(e){return e})||[]},only:function(t){if(!Kd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};nt.Component=Us;nt.Fragment=k0;nt.Profiler=z0;nt.PureComponent=qd;nt.StrictMode=B0;nt.Suspense=j0;nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z0;nt.act=km;nt.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Lm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=$d.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(c in e)Um.call(e,c)&&!Fm.hasOwnProperty(c)&&(i[c]=e[c]===void 0&&o!==void 0?o[c]:e[c])}var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){o=Array(c);for(var u=0;u<c;u++)o[u]=arguments[u+2];i.children=o}return{$$typeof:ka,type:t.type,key:r,ref:s,props:i,_owner:a}};nt.createContext=function(t){return t={$$typeof:V0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:H0,_context:t},t.Consumer=t};nt.createElement=Om;nt.createFactory=function(t){var e=Om.bind(null,t);return e.type=t,e};nt.createRef=function(){return{current:null}};nt.forwardRef=function(t){return{$$typeof:G0,render:t}};nt.isValidElement=Kd;nt.lazy=function(t){return{$$typeof:X0,_payload:{_status:-1,_result:t},_init:K0}};nt.memo=function(t,e){return{$$typeof:W0,type:t,compare:e===void 0?null:e}};nt.startTransition=function(t){var e=Bo.transition;Bo.transition={};try{t()}finally{Bo.transition=e}};nt.unstable_act=km;nt.useCallback=function(t,e){return sn.current.useCallback(t,e)};nt.useContext=function(t){return sn.current.useContext(t)};nt.useDebugValue=function(){};nt.useDeferredValue=function(t){return sn.current.useDeferredValue(t)};nt.useEffect=function(t,e){return sn.current.useEffect(t,e)};nt.useId=function(){return sn.current.useId()};nt.useImperativeHandle=function(t,e,n){return sn.current.useImperativeHandle(t,e,n)};nt.useInsertionEffect=function(t,e){return sn.current.useInsertionEffect(t,e)};nt.useLayoutEffect=function(t,e){return sn.current.useLayoutEffect(t,e)};nt.useMemo=function(t,e){return sn.current.useMemo(t,e)};nt.useReducer=function(t,e,n){return sn.current.useReducer(t,e,n)};nt.useRef=function(t){return sn.current.useRef(t)};nt.useState=function(t){return sn.current.useState(t)};nt.useSyncExternalStore=function(t,e,n){return sn.current.useSyncExternalStore(t,e,n)};nt.useTransition=function(){return sn.current.useTransition()};nt.version="18.3.1";Nm.exports=nt;var We=Nm.exports;const Q0=F0(We);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0=We,ex=Symbol.for("react.element"),tx=Symbol.for("react.fragment"),nx=Object.prototype.hasOwnProperty,ix=J0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,rx={key:!0,ref:!0,__self:!0,__source:!0};function Bm(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)nx.call(e,i)&&!rx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:ex,type:t,key:s,ref:a,props:r,_owner:ix.current}}Dl.Fragment=tx;Dl.jsx=Bm;Dl.jsxs=Bm;Rm.exports=Dl;var l=Rm.exports,uu={},zm={exports:{}},Mn={},Hm={exports:{}},Vm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(G,H){var A=G.length;G.push(H);e:for(;0<A;){var C=A-1>>>1,Q=G[C];if(0<r(Q,H))G[C]=H,G[A]=Q,A=C;else break e}}function n(G){return G.length===0?null:G[0]}function i(G){if(G.length===0)return null;var H=G[0],A=G.pop();if(A!==H){G[0]=A;e:for(var C=0,Q=G.length,re=Q>>>1;C<re;){var pe=2*(C+1)-1,he=G[pe],me=pe+1,O=G[me];if(0>r(he,A))me<Q&&0>r(O,he)?(G[C]=O,G[me]=A,C=me):(G[C]=he,G[pe]=A,C=pe);else if(me<Q&&0>r(O,A))G[C]=O,G[me]=A,C=me;else break e}}return H}function r(G,H){var A=G.sortIndex-H.sortIndex;return A!==0?A:G.id-H.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var c=[],u=[],h=1,p=null,d=3,m=!1,v=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(G){for(var H=n(u);H!==null;){if(H.callback===null)i(u);else if(H.startTime<=G)i(u),H.sortIndex=H.expirationTime,e(c,H);else break;H=n(u)}}function y(G){if(M=!1,b(G),!v)if(n(c)!==null)v=!0,te(w);else{var H=n(u);H!==null&&K(y,H.startTime-G)}}function w(G,H){v=!1,M&&(M=!1,f(S),S=-1),m=!0;var A=d;try{for(b(H),p=n(c);p!==null&&(!(p.expirationTime>H)||G&&!I());){var C=p.callback;if(typeof C=="function"){p.callback=null,d=p.priorityLevel;var Q=C(p.expirationTime<=H);H=t.unstable_now(),typeof Q=="function"?p.callback=Q:p===n(c)&&i(c),b(H)}else i(c);p=n(c)}if(p!==null)var re=!0;else{var pe=n(u);pe!==null&&K(y,pe.startTime-H),re=!1}return re}finally{p=null,d=A,m=!1}}var T=!1,N=null,S=-1,P=5,L=-1;function I(){return!(t.unstable_now()-L<P)}function B(){if(N!==null){var G=t.unstable_now();L=G;var H=!0;try{H=N(!0,G)}finally{H?V():(T=!1,N=null)}}else T=!1}var V;if(typeof x=="function")V=function(){x(B)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,j=k.port2;k.port1.onmessage=B,V=function(){j.postMessage(null)}}else V=function(){g(B,0)};function te(G){N=G,T||(T=!0,V())}function K(G,H){S=g(function(){G(t.unstable_now())},H)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(G){G.callback=null},t.unstable_continueExecution=function(){v||m||(v=!0,te(w))},t.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<G?Math.floor(1e3/G):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(G){switch(d){case 1:case 2:case 3:var H=3;break;default:H=d}var A=d;d=H;try{return G()}finally{d=A}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(G,H){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var A=d;d=G;try{return H()}finally{d=A}},t.unstable_scheduleCallback=function(G,H,A){var C=t.unstable_now();switch(typeof A=="object"&&A!==null?(A=A.delay,A=typeof A=="number"&&0<A?C+A:C):A=C,G){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=A+Q,G={id:h++,callback:H,priorityLevel:G,startTime:A,expirationTime:Q,sortIndex:-1},A>C?(G.sortIndex=A,e(u,G),n(c)===null&&G===n(u)&&(M?(f(S),S=-1):M=!0,K(y,A-C))):(G.sortIndex=Q,e(c,G),v||m||(v=!0,te(w))),G},t.unstable_shouldYield=I,t.unstable_wrapCallback=function(G){var H=d;return function(){var A=d;d=H;try{return G.apply(this,arguments)}finally{d=A}}}})(Vm);Hm.exports=Vm;var sx=Hm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ax=We,yn=sx;function ce(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Gm=new Set,va={};function Fr(t,e){Ts(t,e),Ts(t+"Capture",e)}function Ts(t,e){for(va[t]=e,t=0;t<e.length;t++)Gm.add(e[t])}var Ri=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=Object.prototype.hasOwnProperty,ox=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_h={},Sh={};function lx(t){return du.call(Sh,t)?!0:du.call(_h,t)?!1:ox.test(t)?Sh[t]=!0:(_h[t]=!0,!1)}function cx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ux(t,e,n,i){if(e===null||typeof e>"u"||cx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new an(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new an(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new an(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new an(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new an(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new an(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new an(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new an(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new an(t,5,!1,t.toLowerCase(),null,!1,!1)});var Zd=/[\-:]([a-z])/g;function Qd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Zd,Qd);jt[e]=new an(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Zd,Qd);jt[e]=new an(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Zd,Qd);jt[e]=new an(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new an(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new an(t,1,!1,t.toLowerCase(),null,!0,!0)});function Jd(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ux(e,n,r,i)&&(n=null),i||r===null?lx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=ax.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ka=Symbol.for("react.element"),rs=Symbol.for("react.portal"),ss=Symbol.for("react.fragment"),ef=Symbol.for("react.strict_mode"),fu=Symbol.for("react.profiler"),jm=Symbol.for("react.provider"),Wm=Symbol.for("react.context"),tf=Symbol.for("react.forward_ref"),hu=Symbol.for("react.suspense"),pu=Symbol.for("react.suspense_list"),nf=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),Xm=Symbol.for("react.offscreen"),yh=Symbol.iterator;function zs(t){return t===null||typeof t!="object"?null:(t=yh&&t[yh]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,rc;function ta(t){if(rc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);rc=e&&e[1]||""}return`
`+rc+t}var sc=!1;function ac(t,e){if(!t||sc)return"";sc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var c=`
`+r[a].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=a&&0<=o);break}}}finally{sc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ta(t):""}function dx(t){switch(t.tag){case 5:return ta(t.type);case 16:return ta("Lazy");case 13:return ta("Suspense");case 19:return ta("SuspenseList");case 0:case 2:case 15:return t=ac(t.type,!1),t;case 11:return t=ac(t.type.render,!1),t;case 1:return t=ac(t.type,!0),t;default:return""}}function mu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ss:return"Fragment";case rs:return"Portal";case fu:return"Profiler";case ef:return"StrictMode";case hu:return"Suspense";case pu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Wm:return(t.displayName||"Context")+".Consumer";case jm:return(t._context.displayName||"Context")+".Provider";case tf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case nf:return e=t.displayName||null,e!==null?e:mu(t.type)||"Memo";case Xi:e=t._payload,t=t._init;try{return mu(t(e))}catch{}}return null}function fx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return mu(e);case 8:return e===ef?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function or(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function hx(t){var e=qm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Za(t){t._valueTracker||(t._valueTracker=hx(t))}function Ym(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=qm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function gu(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=or(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function $m(t,e){e=e.checked,e!=null&&Jd(t,"checked",e,!1)}function vu(t,e){$m(t,e);var n=or(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?xu(t,e.type,n):e.hasOwnProperty("defaultValue")&&xu(t,e.type,or(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function xu(t,e,n){(e!=="number"||il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var na=Array.isArray;function vs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+or(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function _u(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ce(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Eh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ce(92));if(na(n)){if(1<n.length)throw Error(ce(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:or(n)}}function Km(t,e){var n=or(e.value),i=or(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function wh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Zm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Su(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qa,Qm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qa=Qa||document.createElement("div"),Qa.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qa.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var la={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},px=["Webkit","ms","Moz","O"];Object.keys(la).forEach(function(t){px.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),la[e]=la[t]})});function Jm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||la.hasOwnProperty(t)&&la[t]?(""+e).trim():e+"px"}function eg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Jm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var mx=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yu(t,e){if(e){if(mx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ce(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ce(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ce(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ce(62))}}function Mu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bu=null;function rf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Eu=null,xs=null,_s=null;function Th(t){if(t=Ha(t)){if(typeof Eu!="function")throw Error(ce(280));var e=t.stateNode;e&&(e=Bl(e),Eu(t.stateNode,t.type,e))}}function tg(t){xs?_s?_s.push(t):_s=[t]:xs=t}function ng(){if(xs){var t=xs,e=_s;if(_s=xs=null,Th(t),e)for(t=0;t<e.length;t++)Th(e[t])}}function ig(t,e){return t(e)}function rg(){}var oc=!1;function sg(t,e,n){if(oc)return t(e,n);oc=!0;try{return ig(t,e,n)}finally{oc=!1,(xs!==null||_s!==null)&&(rg(),ng())}}function _a(t,e){var n=t.stateNode;if(n===null)return null;var i=Bl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ce(231,e,typeof n));return n}var wu=!1;if(Ri)try{var Hs={};Object.defineProperty(Hs,"passive",{get:function(){wu=!0}}),window.addEventListener("test",Hs,Hs),window.removeEventListener("test",Hs,Hs)}catch{wu=!1}function gx(t,e,n,i,r,s,a,o,c){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var ca=!1,rl=null,sl=!1,Tu=null,vx={onError:function(t){ca=!0,rl=t}};function xx(t,e,n,i,r,s,a,o,c){ca=!1,rl=null,gx.apply(vx,arguments)}function _x(t,e,n,i,r,s,a,o,c){if(xx.apply(this,arguments),ca){if(ca){var u=rl;ca=!1,rl=null}else throw Error(ce(198));sl||(sl=!0,Tu=u)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function ag(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ch(t){if(Or(t)!==t)throw Error(ce(188))}function Sx(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(ce(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Ch(r),t;if(s===i)return Ch(r),e;s=s.sibling}throw Error(ce(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ce(189))}}if(n.alternate!==i)throw Error(ce(190))}if(n.tag!==3)throw Error(ce(188));return n.stateNode.current===n?t:e}function og(t){return t=Sx(t),t!==null?lg(t):null}function lg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=lg(t);if(e!==null)return e;t=t.sibling}return null}var cg=yn.unstable_scheduleCallback,Ah=yn.unstable_cancelCallback,yx=yn.unstable_shouldYield,Mx=yn.unstable_requestPaint,Nt=yn.unstable_now,bx=yn.unstable_getCurrentPriorityLevel,sf=yn.unstable_ImmediatePriority,ug=yn.unstable_UserBlockingPriority,al=yn.unstable_NormalPriority,Ex=yn.unstable_LowPriority,dg=yn.unstable_IdlePriority,Ul=null,li=null;function wx(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(Ul,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:Ax,Tx=Math.log,Cx=Math.LN2;function Ax(t){return t>>>=0,t===0?32:31-(Tx(t)/Cx|0)|0}var Ja=64,eo=4194304;function ia(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ol(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=ia(o):(s&=a,s!==0&&(i=ia(s)))}else a=n&~r,a!==0?i=ia(a):s!==0&&(i=ia(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Wn(e),r=1<<n,i|=t[n],e&=~r;return i}function Rx(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Wn(s),o=1<<a,c=r[a];c===-1?(!(o&n)||o&i)&&(r[a]=Rx(o,e)):c<=e&&(t.expiredLanes|=o),s&=~o}}function Cu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function fg(){var t=Ja;return Ja<<=1,!(Ja&4194240)&&(Ja=64),t}function lc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ba(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function Px(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Wn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ht=0;function hg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var pg,of,mg,gg,vg,Au=!1,to=[],Ji=null,er=null,tr=null,Sa=new Map,ya=new Map,Yi=[],Lx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Rh(t,e){switch(t){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Sa.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(e.pointerId)}}function Vs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ha(e),e!==null&&of(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function Ix(t,e,n,i,r){switch(e){case"focusin":return Ji=Vs(Ji,t,e,n,i,r),!0;case"dragenter":return er=Vs(er,t,e,n,i,r),!0;case"mouseover":return tr=Vs(tr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Sa.set(s,Vs(Sa.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ya.set(s,Vs(ya.get(s)||null,t,e,n,i,r)),!0}return!1}function xg(t){var e=Sr(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=ag(n),e!==null){t.blockedOn=e,vg(t.priority,function(){mg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Ru(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);bu=i,n.target.dispatchEvent(i),bu=null}else return e=Ha(n),e!==null&&of(e),t.blockedOn=n,!1;e.shift()}return!0}function Nh(t,e,n){zo(t)&&n.delete(e)}function Dx(){Au=!1,Ji!==null&&zo(Ji)&&(Ji=null),er!==null&&zo(er)&&(er=null),tr!==null&&zo(tr)&&(tr=null),Sa.forEach(Nh),ya.forEach(Nh)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Au||(Au=!0,yn.unstable_scheduleCallback(yn.unstable_NormalPriority,Dx)))}function Ma(t){function e(r){return Gs(r,t)}if(0<to.length){Gs(to[0],t);for(var n=1;n<to.length;n++){var i=to[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ji!==null&&Gs(Ji,t),er!==null&&Gs(er,t),tr!==null&&Gs(tr,t),Sa.forEach(e),ya.forEach(e),n=0;n<Yi.length;n++)i=Yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Yi.length&&(n=Yi[0],n.blockedOn===null);)xg(n),n.blockedOn===null&&Yi.shift()}var Ss=Ui.ReactCurrentBatchConfig,ll=!0;function Ux(t,e,n,i){var r=ht,s=Ss.transition;Ss.transition=null;try{ht=1,lf(t,e,n,i)}finally{ht=r,Ss.transition=s}}function Fx(t,e,n,i){var r=ht,s=Ss.transition;Ss.transition=null;try{ht=4,lf(t,e,n,i)}finally{ht=r,Ss.transition=s}}function lf(t,e,n,i){if(ll){var r=Ru(t,e,n,i);if(r===null)xc(t,e,i,cl,n),Rh(t,i);else if(Ix(r,t,e,n,i))i.stopPropagation();else if(Rh(t,i),e&4&&-1<Lx.indexOf(t)){for(;r!==null;){var s=Ha(r);if(s!==null&&pg(s),s=Ru(t,e,n,i),s===null&&xc(t,e,i,cl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else xc(t,e,i,null,n)}}var cl=null;function Ru(t,e,n,i){if(cl=null,t=rf(i),t=Sr(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=ag(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cl=t,null}function _g(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bx()){case sf:return 1;case ug:return 4;case al:case Ex:return 16;case dg:return 536870912;default:return 16}default:return 16}}var Zi=null,cf=null,Ho=null;function Sg(){if(Ho)return Ho;var t,e=cf,n=e.length,i,r="value"in Zi?Zi.value:Zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return Ho=r.slice(t,1<i?1-i:void 0)}function Vo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function no(){return!0}function Ph(){return!1}function bn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?no:Ph,this.isPropagationStopped=Ph,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=no)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=no)},persist:function(){},isPersistent:no}),e}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uf=bn(Fs),za=wt({},Fs,{view:0,detail:0}),Ox=bn(za),cc,uc,js,Fl=wt({},za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:df,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(cc=t.screenX-js.screenX,uc=t.screenY-js.screenY):uc=cc=0,js=t),cc)},movementY:function(t){return"movementY"in t?t.movementY:uc}}),Lh=bn(Fl),kx=wt({},Fl,{dataTransfer:0}),Bx=bn(kx),zx=wt({},za,{relatedTarget:0}),dc=bn(zx),Hx=wt({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),Vx=bn(Hx),Gx=wt({},Fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),jx=bn(Gx),Wx=wt({},Fs,{data:0}),Ih=bn(Wx),Xx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $x(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Yx[t])?!!e[t]:!1}function df(){return $x}var Kx=wt({},za,{key:function(t){if(t.key){var e=Xx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?qx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:df,charCode:function(t){return t.type==="keypress"?Vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Zx=bn(Kx),Qx=wt({},Fl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dh=bn(Qx),Jx=wt({},za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:df}),e_=bn(Jx),t_=wt({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),n_=bn(t_),i_=wt({},Fl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),r_=bn(i_),s_=[9,13,27,32],ff=Ri&&"CompositionEvent"in window,ua=null;Ri&&"documentMode"in document&&(ua=document.documentMode);var a_=Ri&&"TextEvent"in window&&!ua,yg=Ri&&(!ff||ua&&8<ua&&11>=ua),Uh=" ",Fh=!1;function Mg(t,e){switch(t){case"keyup":return s_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var as=!1;function o_(t,e){switch(t){case"compositionend":return bg(e);case"keypress":return e.which!==32?null:(Fh=!0,Uh);case"textInput":return t=e.data,t===Uh&&Fh?null:t;default:return null}}function l_(t,e){if(as)return t==="compositionend"||!ff&&Mg(t,e)?(t=Sg(),Ho=cf=Zi=null,as=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yg&&e.locale!=="ko"?null:e.data;default:return null}}var c_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!c_[t.type]:e==="textarea"}function Eg(t,e,n,i){tg(i),e=ul(e,"onChange"),0<e.length&&(n=new uf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var da=null,ba=null;function u_(t){Ug(t,0)}function Ol(t){var e=cs(t);if(Ym(e))return t}function d_(t,e){if(t==="change")return e}var wg=!1;if(Ri){var fc;if(Ri){var hc="oninput"in document;if(!hc){var kh=document.createElement("div");kh.setAttribute("oninput","return;"),hc=typeof kh.oninput=="function"}fc=hc}else fc=!1;wg=fc&&(!document.documentMode||9<document.documentMode)}function Bh(){da&&(da.detachEvent("onpropertychange",Tg),ba=da=null)}function Tg(t){if(t.propertyName==="value"&&Ol(ba)){var e=[];Eg(e,ba,t,rf(t)),sg(u_,e)}}function f_(t,e,n){t==="focusin"?(Bh(),da=e,ba=n,da.attachEvent("onpropertychange",Tg)):t==="focusout"&&Bh()}function h_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ol(ba)}function p_(t,e){if(t==="click")return Ol(e)}function m_(t,e){if(t==="input"||t==="change")return Ol(e)}function g_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:g_;function Ea(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!du.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function zh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hh(t,e){var n=zh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zh(n)}}function Cg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Cg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Ag(){for(var t=window,e=il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=il(t.document)}return e}function hf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function v_(t){var e=Ag(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Cg(n.ownerDocument.documentElement,n)){if(i!==null&&hf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Hh(n,s);var a=Hh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var x_=Ri&&"documentMode"in document&&11>=document.documentMode,os=null,Nu=null,fa=null,Pu=!1;function Vh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pu||os==null||os!==il(i)||(i=os,"selectionStart"in i&&hf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fa&&Ea(fa,i)||(fa=i,i=ul(Nu,"onSelect"),0<i.length&&(e=new uf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=os)))}function io(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ls={animationend:io("Animation","AnimationEnd"),animationiteration:io("Animation","AnimationIteration"),animationstart:io("Animation","AnimationStart"),transitionend:io("Transition","TransitionEnd")},pc={},Rg={};Ri&&(Rg=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function kl(t){if(pc[t])return pc[t];if(!ls[t])return t;var e=ls[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Rg)return pc[t]=e[n];return t}var Ng=kl("animationend"),Pg=kl("animationiteration"),Lg=kl("animationstart"),Ig=kl("transitionend"),Dg=new Map,Gh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,e){Dg.set(t,e),Fr(e,[t])}for(var mc=0;mc<Gh.length;mc++){var gc=Gh[mc],__=gc.toLowerCase(),S_=gc[0].toUpperCase()+gc.slice(1);cr(__,"on"+S_)}cr(Ng,"onAnimationEnd");cr(Pg,"onAnimationIteration");cr(Lg,"onAnimationStart");cr("dblclick","onDoubleClick");cr("focusin","onFocus");cr("focusout","onBlur");cr(Ig,"onTransitionEnd");Ts("onMouseEnter",["mouseout","mouseover"]);Ts("onMouseLeave",["mouseout","mouseover"]);Ts("onPointerEnter",["pointerout","pointerover"]);Ts("onPointerLeave",["pointerout","pointerover"]);Fr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Fr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Fr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Fr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Fr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),y_=new Set("cancel close invalid load scroll toggle".split(" ").concat(ra));function jh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,_x(i,e,void 0,t),t.currentTarget=null}function Ug(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],c=o.instance,u=o.currentTarget;if(o=o.listener,c!==s&&r.isPropagationStopped())break e;jh(r,o,u),s=c}else for(a=0;a<i.length;a++){if(o=i[a],c=o.instance,u=o.currentTarget,o=o.listener,c!==s&&r.isPropagationStopped())break e;jh(r,o,u),s=c}}}if(sl)throw t=Tu,sl=!1,Tu=null,t}function St(t,e){var n=e[Fu];n===void 0&&(n=e[Fu]=new Set);var i=t+"__bubble";n.has(i)||(Fg(e,t,2,!1),n.add(i))}function vc(t,e,n){var i=0;e&&(i|=4),Fg(n,t,i,e)}var ro="_reactListening"+Math.random().toString(36).slice(2);function wa(t){if(!t[ro]){t[ro]=!0,Gm.forEach(function(n){n!=="selectionchange"&&(y_.has(n)||vc(n,!1,t),vc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ro]||(e[ro]=!0,vc("selectionchange",!1,e))}}function Fg(t,e,n,i){switch(_g(e)){case 1:var r=Ux;break;case 4:r=Fx;break;default:r=lf}n=r.bind(null,e,n,t),r=void 0,!wu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function xc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===r||c.nodeType===8&&c.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Sr(o),a===null)return;if(c=a.tag,c===5||c===6){i=s=a;continue e}o=o.parentNode}}i=i.return}sg(function(){var u=s,h=rf(n),p=[];e:{var d=Dg.get(t);if(d!==void 0){var m=uf,v=t;switch(t){case"keypress":if(Vo(n)===0)break e;case"keydown":case"keyup":m=Zx;break;case"focusin":v="focus",m=dc;break;case"focusout":v="blur",m=dc;break;case"beforeblur":case"afterblur":m=dc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=Bx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=e_;break;case Ng:case Pg:case Lg:m=Vx;break;case Ig:m=n_;break;case"scroll":m=Ox;break;case"wheel":m=r_;break;case"copy":case"cut":case"paste":m=jx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Dh}var M=(e&4)!==0,g=!M&&t==="scroll",f=M?d!==null?d+"Capture":null:d;M=[];for(var x=u,b;x!==null;){b=x;var y=b.stateNode;if(b.tag===5&&y!==null&&(b=y,f!==null&&(y=_a(x,f),y!=null&&M.push(Ta(x,y,b)))),g)break;x=x.return}0<M.length&&(d=new m(d,v,null,n,h),p.push({event:d,listeners:M}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&n!==bu&&(v=n.relatedTarget||n.fromElement)&&(Sr(v)||v[Ni]))break e;if((m||d)&&(d=h.window===h?h:(d=h.ownerDocument)?d.defaultView||d.parentWindow:window,m?(v=n.relatedTarget||n.toElement,m=u,v=v?Sr(v):null,v!==null&&(g=Or(v),v!==g||v.tag!==5&&v.tag!==6)&&(v=null)):(m=null,v=u),m!==v)){if(M=Lh,y="onMouseLeave",f="onMouseEnter",x="mouse",(t==="pointerout"||t==="pointerover")&&(M=Dh,y="onPointerLeave",f="onPointerEnter",x="pointer"),g=m==null?d:cs(m),b=v==null?d:cs(v),d=new M(y,x+"leave",m,n,h),d.target=g,d.relatedTarget=b,y=null,Sr(h)===u&&(M=new M(f,x+"enter",v,n,h),M.target=b,M.relatedTarget=g,y=M),g=y,m&&v)t:{for(M=m,f=v,x=0,b=M;b;b=Hr(b))x++;for(b=0,y=f;y;y=Hr(y))b++;for(;0<x-b;)M=Hr(M),x--;for(;0<b-x;)f=Hr(f),b--;for(;x--;){if(M===f||f!==null&&M===f.alternate)break t;M=Hr(M),f=Hr(f)}M=null}else M=null;m!==null&&Wh(p,d,m,M,!1),v!==null&&g!==null&&Wh(p,g,v,M,!0)}}e:{if(d=u?cs(u):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var w=d_;else if(Oh(d))if(wg)w=m_;else{w=h_;var T=f_}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=p_);if(w&&(w=w(t,u))){Eg(p,w,n,h);break e}T&&T(t,d,u),t==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&xu(d,"number",d.value)}switch(T=u?cs(u):window,t){case"focusin":(Oh(T)||T.contentEditable==="true")&&(os=T,Nu=u,fa=null);break;case"focusout":fa=Nu=os=null;break;case"mousedown":Pu=!0;break;case"contextmenu":case"mouseup":case"dragend":Pu=!1,Vh(p,n,h);break;case"selectionchange":if(x_)break;case"keydown":case"keyup":Vh(p,n,h)}var N;if(ff)e:{switch(t){case"compositionstart":var S="onCompositionStart";break e;case"compositionend":S="onCompositionEnd";break e;case"compositionupdate":S="onCompositionUpdate";break e}S=void 0}else as?Mg(t,n)&&(S="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(S="onCompositionStart");S&&(yg&&n.locale!=="ko"&&(as||S!=="onCompositionStart"?S==="onCompositionEnd"&&as&&(N=Sg()):(Zi=h,cf="value"in Zi?Zi.value:Zi.textContent,as=!0)),T=ul(u,S),0<T.length&&(S=new Ih(S,t,null,n,h),p.push({event:S,listeners:T}),N?S.data=N:(N=bg(n),N!==null&&(S.data=N)))),(N=a_?o_(t,n):l_(t,n))&&(u=ul(u,"onBeforeInput"),0<u.length&&(h=new Ih("onBeforeInput","beforeinput",null,n,h),p.push({event:h,listeners:u}),h.data=N))}Ug(p,e)})}function Ta(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ul(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=_a(t,n),s!=null&&i.unshift(Ta(t,s,r)),s=_a(t,e),s!=null&&i.push(Ta(t,s,r))),t=t.return}return i}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,c=o.alternate,u=o.stateNode;if(c!==null&&c===i)break;o.tag===5&&u!==null&&(o=u,r?(c=_a(n,s),c!=null&&a.unshift(Ta(n,c,o))):r||(c=_a(n,s),c!=null&&a.push(Ta(n,c,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var M_=/\r\n?/g,b_=/\u0000|\uFFFD/g;function Xh(t){return(typeof t=="string"?t:""+t).replace(M_,`
`).replace(b_,"")}function so(t,e,n){if(e=Xh(e),Xh(t)!==e&&n)throw Error(ce(425))}function dl(){}var Lu=null,Iu=null;function Du(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Uu=typeof setTimeout=="function"?setTimeout:void 0,E_=typeof clearTimeout=="function"?clearTimeout:void 0,qh=typeof Promise=="function"?Promise:void 0,w_=typeof queueMicrotask=="function"?queueMicrotask:typeof qh<"u"?function(t){return qh.resolve(null).then(t).catch(T_)}:Uu;function T_(t){setTimeout(function(){throw t})}function _c(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ma(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ma(e)}function nr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Yh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Os=Math.random().toString(36).slice(2),si="__reactFiber$"+Os,Ca="__reactProps$"+Os,Ni="__reactContainer$"+Os,Fu="__reactEvents$"+Os,C_="__reactListeners$"+Os,A_="__reactHandles$"+Os;function Sr(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ni]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Yh(t);t!==null;){if(n=t[si])return n;t=Yh(t)}return e}t=n,n=t.parentNode}return null}function Ha(t){return t=t[si]||t[Ni],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function cs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ce(33))}function Bl(t){return t[Ca]||null}var Ou=[],us=-1;function ur(t){return{current:t}}function yt(t){0>us||(t.current=Ou[us],Ou[us]=null,us--)}function xt(t,e){us++,Ou[us]=t.current,t.current=e}var lr={},Qt=ur(lr),un=ur(!1),Cr=lr;function Cs(t,e){var n=t.type.contextTypes;if(!n)return lr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function fl(){yt(un),yt(Qt)}function $h(t,e,n){if(Qt.current!==lr)throw Error(ce(168));xt(Qt,e),xt(un,n)}function Og(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ce(108,fx(t)||"Unknown",r));return wt({},n,i)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Cr=Qt.current,xt(Qt,t),xt(un,un.current),!0}function Kh(t,e,n){var i=t.stateNode;if(!i)throw Error(ce(169));n?(t=Og(t,e,Cr),i.__reactInternalMemoizedMergedChildContext=t,yt(un),yt(Qt),xt(Qt,t)):yt(un),xt(un,n)}var _i=null,zl=!1,Sc=!1;function kg(t){_i===null?_i=[t]:_i.push(t)}function R_(t){zl=!0,kg(t)}function dr(){if(!Sc&&_i!==null){Sc=!0;var t=0,e=ht;try{var n=_i;for(ht=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,zl=!1}catch(r){throw _i!==null&&(_i=_i.slice(t+1)),cg(sf,dr),r}finally{ht=e,Sc=!1}}return null}var ds=[],fs=0,pl=null,ml=0,Cn=[],An=0,Ar=null,Mi=1,bi="";function xr(t,e){ds[fs++]=ml,ds[fs++]=pl,pl=t,ml=e}function Bg(t,e,n){Cn[An++]=Mi,Cn[An++]=bi,Cn[An++]=Ar,Ar=t;var i=Mi;t=bi;var r=32-Wn(i)-1;i&=~(1<<r),n+=1;var s=32-Wn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Mi=1<<32-Wn(e)+r|n<<r|i,bi=s+t}else Mi=1<<s|n<<r|i,bi=t}function pf(t){t.return!==null&&(xr(t,1),Bg(t,1,0))}function mf(t){for(;t===pl;)pl=ds[--fs],ds[fs]=null,ml=ds[--fs],ds[fs]=null;for(;t===Ar;)Ar=Cn[--An],Cn[An]=null,bi=Cn[--An],Cn[An]=null,Mi=Cn[--An],Cn[An]=null}var Sn=null,xn=null,Mt=!1,Vn=null;function zg(t,e){var n=Pn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Zh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,xn=nr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,xn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ar!==null?{id:Mi,overflow:bi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Pn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,xn=null,!0):!1;default:return!1}}function ku(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Bu(t){if(Mt){var e=xn;if(e){var n=e;if(!Zh(t,e)){if(ku(t))throw Error(ce(418));e=nr(n.nextSibling);var i=Sn;e&&Zh(t,e)?zg(i,n):(t.flags=t.flags&-4097|2,Mt=!1,Sn=t)}}else{if(ku(t))throw Error(ce(418));t.flags=t.flags&-4097|2,Mt=!1,Sn=t}}}function Qh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function ao(t){if(t!==Sn)return!1;if(!Mt)return Qh(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Du(t.type,t.memoizedProps)),e&&(e=xn)){if(ku(t))throw Hg(),Error(ce(418));for(;e;)zg(t,e),e=nr(e.nextSibling)}if(Qh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ce(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){xn=nr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}xn=null}}else xn=Sn?nr(t.stateNode.nextSibling):null;return!0}function Hg(){for(var t=xn;t;)t=nr(t.nextSibling)}function As(){xn=Sn=null,Mt=!1}function gf(t){Vn===null?Vn=[t]:Vn.push(t)}var N_=Ui.ReactCurrentBatchConfig;function Ws(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ce(309));var i=n.stateNode}if(!i)throw Error(ce(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ce(284));if(!n._owner)throw Error(ce(290,t))}return t}function oo(t,e){throw t=Object.prototype.toString.call(e),Error(ce(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Jh(t){var e=t._init;return e(t._payload)}function Vg(t){function e(f,x){if(t){var b=f.deletions;b===null?(f.deletions=[x],f.flags|=16):b.push(x)}}function n(f,x){if(!t)return null;for(;x!==null;)e(f,x),x=x.sibling;return null}function i(f,x){for(f=new Map;x!==null;)x.key!==null?f.set(x.key,x):f.set(x.index,x),x=x.sibling;return f}function r(f,x){return f=ar(f,x),f.index=0,f.sibling=null,f}function s(f,x,b){return f.index=b,t?(b=f.alternate,b!==null?(b=b.index,b<x?(f.flags|=2,x):b):(f.flags|=2,x)):(f.flags|=1048576,x)}function a(f){return t&&f.alternate===null&&(f.flags|=2),f}function o(f,x,b,y){return x===null||x.tag!==6?(x=Cc(b,f.mode,y),x.return=f,x):(x=r(x,b),x.return=f,x)}function c(f,x,b,y){var w=b.type;return w===ss?h(f,x,b.props.children,y,b.key):x!==null&&(x.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Xi&&Jh(w)===x.type)?(y=r(x,b.props),y.ref=Ws(f,x,b),y.return=f,y):(y=$o(b.type,b.key,b.props,null,f.mode,y),y.ref=Ws(f,x,b),y.return=f,y)}function u(f,x,b,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==b.containerInfo||x.stateNode.implementation!==b.implementation?(x=Ac(b,f.mode,y),x.return=f,x):(x=r(x,b.children||[]),x.return=f,x)}function h(f,x,b,y,w){return x===null||x.tag!==7?(x=Tr(b,f.mode,y,w),x.return=f,x):(x=r(x,b),x.return=f,x)}function p(f,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Cc(""+x,f.mode,b),x.return=f,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ka:return b=$o(x.type,x.key,x.props,null,f.mode,b),b.ref=Ws(f,null,x),b.return=f,b;case rs:return x=Ac(x,f.mode,b),x.return=f,x;case Xi:var y=x._init;return p(f,y(x._payload),b)}if(na(x)||zs(x))return x=Tr(x,f.mode,b,null),x.return=f,x;oo(f,x)}return null}function d(f,x,b,y){var w=x!==null?x.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return w!==null?null:o(f,x,""+b,y);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Ka:return b.key===w?c(f,x,b,y):null;case rs:return b.key===w?u(f,x,b,y):null;case Xi:return w=b._init,d(f,x,w(b._payload),y)}if(na(b)||zs(b))return w!==null?null:h(f,x,b,y,null);oo(f,b)}return null}function m(f,x,b,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(b)||null,o(x,f,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ka:return f=f.get(y.key===null?b:y.key)||null,c(x,f,y,w);case rs:return f=f.get(y.key===null?b:y.key)||null,u(x,f,y,w);case Xi:var T=y._init;return m(f,x,b,T(y._payload),w)}if(na(y)||zs(y))return f=f.get(b)||null,h(x,f,y,w,null);oo(x,y)}return null}function v(f,x,b,y){for(var w=null,T=null,N=x,S=x=0,P=null;N!==null&&S<b.length;S++){N.index>S?(P=N,N=null):P=N.sibling;var L=d(f,N,b[S],y);if(L===null){N===null&&(N=P);break}t&&N&&L.alternate===null&&e(f,N),x=s(L,x,S),T===null?w=L:T.sibling=L,T=L,N=P}if(S===b.length)return n(f,N),Mt&&xr(f,S),w;if(N===null){for(;S<b.length;S++)N=p(f,b[S],y),N!==null&&(x=s(N,x,S),T===null?w=N:T.sibling=N,T=N);return Mt&&xr(f,S),w}for(N=i(f,N);S<b.length;S++)P=m(N,f,S,b[S],y),P!==null&&(t&&P.alternate!==null&&N.delete(P.key===null?S:P.key),x=s(P,x,S),T===null?w=P:T.sibling=P,T=P);return t&&N.forEach(function(I){return e(f,I)}),Mt&&xr(f,S),w}function M(f,x,b,y){var w=zs(b);if(typeof w!="function")throw Error(ce(150));if(b=w.call(b),b==null)throw Error(ce(151));for(var T=w=null,N=x,S=x=0,P=null,L=b.next();N!==null&&!L.done;S++,L=b.next()){N.index>S?(P=N,N=null):P=N.sibling;var I=d(f,N,L.value,y);if(I===null){N===null&&(N=P);break}t&&N&&I.alternate===null&&e(f,N),x=s(I,x,S),T===null?w=I:T.sibling=I,T=I,N=P}if(L.done)return n(f,N),Mt&&xr(f,S),w;if(N===null){for(;!L.done;S++,L=b.next())L=p(f,L.value,y),L!==null&&(x=s(L,x,S),T===null?w=L:T.sibling=L,T=L);return Mt&&xr(f,S),w}for(N=i(f,N);!L.done;S++,L=b.next())L=m(N,f,S,L.value,y),L!==null&&(t&&L.alternate!==null&&N.delete(L.key===null?S:L.key),x=s(L,x,S),T===null?w=L:T.sibling=L,T=L);return t&&N.forEach(function(B){return e(f,B)}),Mt&&xr(f,S),w}function g(f,x,b,y){if(typeof b=="object"&&b!==null&&b.type===ss&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case Ka:e:{for(var w=b.key,T=x;T!==null;){if(T.key===w){if(w=b.type,w===ss){if(T.tag===7){n(f,T.sibling),x=r(T,b.props.children),x.return=f,f=x;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===Xi&&Jh(w)===T.type){n(f,T.sibling),x=r(T,b.props),x.ref=Ws(f,T,b),x.return=f,f=x;break e}n(f,T);break}else e(f,T);T=T.sibling}b.type===ss?(x=Tr(b.props.children,f.mode,y,b.key),x.return=f,f=x):(y=$o(b.type,b.key,b.props,null,f.mode,y),y.ref=Ws(f,x,b),y.return=f,f=y)}return a(f);case rs:e:{for(T=b.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===b.containerInfo&&x.stateNode.implementation===b.implementation){n(f,x.sibling),x=r(x,b.children||[]),x.return=f,f=x;break e}else{n(f,x);break}else e(f,x);x=x.sibling}x=Ac(b,f.mode,y),x.return=f,f=x}return a(f);case Xi:return T=b._init,g(f,x,T(b._payload),y)}if(na(b))return v(f,x,b,y);if(zs(b))return M(f,x,b,y);oo(f,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,x!==null&&x.tag===6?(n(f,x.sibling),x=r(x,b),x.return=f,f=x):(n(f,x),x=Cc(b,f.mode,y),x.return=f,f=x),a(f)):n(f,x)}return g}var Rs=Vg(!0),Gg=Vg(!1),gl=ur(null),vl=null,hs=null,vf=null;function xf(){vf=hs=vl=null}function _f(t){var e=gl.current;yt(gl),t._currentValue=e}function zu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ys(t,e){vl=t,vf=hs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(cn=!0),t.firstContext=null)}function In(t){var e=t._currentValue;if(vf!==t)if(t={context:t,memoizedValue:e,next:null},hs===null){if(vl===null)throw Error(ce(308));hs=t,vl.dependencies={lanes:0,firstContext:t}}else hs=hs.next=t;return e}var yr=null;function Sf(t){yr===null?yr=[t]:yr.push(t)}function jg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Pi(t,i)}function Pi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qi=!1;function yf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function ir(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,lt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Pi(t,n)}return r=i.interleaved,r===null?(e.next=e,Sf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Pi(t,n)}function Go(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,af(t,n)}}function ep(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function xl(t,e,n,i){var r=t.updateQueue;qi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var c=o,u=c.next;c.next=null,a===null?s=u:a.next=u,a=c;var h=t.alternate;h!==null&&(h=h.updateQueue,o=h.lastBaseUpdate,o!==a&&(o===null?h.firstBaseUpdate=u:o.next=u,h.lastBaseUpdate=c))}if(s!==null){var p=r.baseState;a=0,h=u=c=null,o=s;do{var d=o.lane,m=o.eventTime;if((i&d)===d){h!==null&&(h=h.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var v=t,M=o;switch(d=e,m=n,M.tag){case 1:if(v=M.payload,typeof v=="function"){p=v.call(m,p,d);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=M.payload,d=typeof v=="function"?v.call(m,p,d):v,d==null)break e;p=wt({},p,d);break e;case 2:qi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[o]:d.push(o))}else m={eventTime:m,lane:d,tag:o.tag,payload:o.payload,callback:o.callback,next:null},h===null?(u=h=m,c=p):h=h.next=m,a|=d;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;d=o,o=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(h===null&&(c=p),r.baseState=c,r.firstBaseUpdate=u,r.lastBaseUpdate=h,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Nr|=a,t.lanes=a,t.memoizedState=p}}function tp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ce(191,r));r.call(i)}}}var Va={},ci=ur(Va),Aa=ur(Va),Ra=ur(Va);function Mr(t){if(t===Va)throw Error(ce(174));return t}function Mf(t,e){switch(xt(Ra,e),xt(Aa,t),xt(ci,Va),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Su(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Su(e,t)}yt(ci),xt(ci,e)}function Ns(){yt(ci),yt(Aa),yt(Ra)}function Xg(t){Mr(Ra.current);var e=Mr(ci.current),n=Su(e,t.type);e!==n&&(xt(Aa,t),xt(ci,n))}function bf(t){Aa.current===t&&(yt(ci),yt(Aa))}var bt=ur(0);function _l(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var yc=[];function Ef(){for(var t=0;t<yc.length;t++)yc[t]._workInProgressVersionPrimary=null;yc.length=0}var jo=Ui.ReactCurrentDispatcher,Mc=Ui.ReactCurrentBatchConfig,Rr=0,Et=null,Dt=null,Bt=null,Sl=!1,ha=!1,Na=0,P_=0;function Xt(){throw Error(ce(321))}function wf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function Tf(t,e,n,i,r,s){if(Rr=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,jo.current=t===null||t.memoizedState===null?U_:F_,t=n(i,r),ha){s=0;do{if(ha=!1,Na=0,25<=s)throw Error(ce(301));s+=1,Bt=Dt=null,e.updateQueue=null,jo.current=O_,t=n(i,r)}while(ha)}if(jo.current=yl,e=Dt!==null&&Dt.next!==null,Rr=0,Bt=Dt=Et=null,Sl=!1,e)throw Error(ce(300));return t}function Cf(){var t=Na!==0;return Na=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Bt===null?Et.memoizedState=Bt=t:Bt=Bt.next=t,Bt}function Dn(){if(Dt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=Bt===null?Et.memoizedState:Bt.next;if(e!==null)Bt=e,Dt=t;else{if(t===null)throw Error(ce(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},Bt===null?Et.memoizedState=Bt=t:Bt=Bt.next=t}return Bt}function Pa(t,e){return typeof e=="function"?e(t):e}function bc(t){var e=Dn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,c=null,u=s;do{var h=u.lane;if((Rr&h)===h)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var p={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(o=c=p,a=i):c=c.next=p,Et.lanes|=h,Nr|=h}u=u.next}while(u!==null&&u!==s);c===null?a=i:c.next=o,Yn(i,e.memoizedState)||(cn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=c,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,Nr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ec(t){var e=Dn(),n=e.queue;if(n===null)throw Error(ce(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Yn(s,e.memoizedState)||(cn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function qg(){}function Yg(t,e){var n=Et,i=Dn(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,cn=!0),i=i.queue,Af(Zg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Bt!==null&&Bt.memoizedState.tag&1){if(n.flags|=2048,La(9,Kg.bind(null,n,i,r,e),void 0,null),zt===null)throw Error(ce(349));Rr&30||$g(n,e,r)}return r}function $g(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Kg(t,e,n,i){e.value=n,e.getSnapshot=i,Qg(e)&&Jg(t)}function Zg(t,e,n){return n(function(){Qg(e)&&Jg(t)})}function Qg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function Jg(t){var e=Pi(t,1);e!==null&&Xn(e,t,1,-1)}function np(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:t},e.queue=t,t=t.dispatch=D_.bind(null,Et,t),[e.memoizedState,t]}function La(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function ev(){return Dn().memoizedState}function Wo(t,e,n,i){var r=ii();Et.flags|=t,r.memoizedState=La(1|e,n,void 0,i===void 0?null:i)}function Hl(t,e,n,i){var r=Dn();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var a=Dt.memoizedState;if(s=a.destroy,i!==null&&wf(i,a.deps)){r.memoizedState=La(e,n,s,i);return}}Et.flags|=t,r.memoizedState=La(1|e,n,s,i)}function ip(t,e){return Wo(8390656,8,t,e)}function Af(t,e){return Hl(2048,8,t,e)}function tv(t,e){return Hl(4,2,t,e)}function nv(t,e){return Hl(4,4,t,e)}function iv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rv(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4,4,iv.bind(null,e,t),n)}function Rf(){}function sv(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function av(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&wf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function ov(t,e,n){return Rr&21?(Yn(n,e)||(n=fg(),Et.lanes|=n,Nr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,cn=!0),t.memoizedState=n)}function L_(t,e){var n=ht;ht=n!==0&&4>n?n:4,t(!0);var i=Mc.transition;Mc.transition={};try{t(!1),e()}finally{ht=n,Mc.transition=i}}function lv(){return Dn().memoizedState}function I_(t,e,n){var i=sr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},cv(t))uv(e,n);else if(n=jg(t,e,n,i),n!==null){var r=nn();Xn(n,t,i,r),dv(n,e,i)}}function D_(t,e,n){var i=sr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(cv(t))uv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Yn(o,a)){var c=e.interleaved;c===null?(r.next=r,Sf(e)):(r.next=c.next,c.next=r),e.interleaved=r;return}}catch{}finally{}n=jg(t,e,r,i),n!==null&&(r=nn(),Xn(n,t,i,r),dv(n,e,i))}}function cv(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function uv(t,e){ha=Sl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,af(t,n)}}var yl={readContext:In,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},U_={readContext:In,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:In,useEffect:ip,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wo(4194308,4,iv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Wo(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=I_.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:np,useDebugValue:Rf,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=np(!1),e=t[0];return t=L_.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=ii();if(Mt){if(n===void 0)throw Error(ce(407));n=n()}else{if(n=e(),zt===null)throw Error(ce(349));Rr&30||$g(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,ip(Zg.bind(null,i,s,t),[t]),i.flags|=2048,La(9,Kg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ii(),e=zt.identifierPrefix;if(Mt){var n=bi,i=Mi;n=(i&~(1<<32-Wn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Na++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=P_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},F_={readContext:In,useCallback:sv,useContext:In,useEffect:Af,useImperativeHandle:rv,useInsertionEffect:tv,useLayoutEffect:nv,useMemo:av,useReducer:bc,useRef:ev,useState:function(){return bc(Pa)},useDebugValue:Rf,useDeferredValue:function(t){var e=Dn();return ov(e,Dt.memoizedState,t)},useTransition:function(){var t=bc(Pa)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:qg,useSyncExternalStore:Yg,useId:lv,unstable_isNewReconciler:!1},O_={readContext:In,useCallback:sv,useContext:In,useEffect:Af,useImperativeHandle:rv,useInsertionEffect:tv,useLayoutEffect:nv,useMemo:av,useReducer:Ec,useRef:ev,useState:function(){return Ec(Pa)},useDebugValue:Rf,useDeferredValue:function(t){var e=Dn();return Dt===null?e.memoizedState=t:ov(e,Dt.memoizedState,t)},useTransition:function(){var t=Ec(Pa)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:qg,useSyncExternalStore:Yg,useId:lv,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Hu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Vl={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=nn(),r=sr(t),s=wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(Xn(e,t,r,i),Go(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=nn(),r=sr(t),s=wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=ir(t,s,r),e!==null&&(Xn(e,t,r,i),Go(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=nn(),i=sr(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=ir(t,r,i),e!==null&&(Xn(e,t,i,n),Go(e,t,i))}};function rp(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ea(n,i)||!Ea(r,s):!0}function fv(t,e,n){var i=!1,r=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=In(s):(r=dn(e)?Cr:Qt.current,i=e.contextTypes,s=(i=i!=null)?Cs(t,r):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Vl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function sp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Vl.enqueueReplaceState(e,e.state,null)}function Vu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},yf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=In(s):(s=dn(e)?Cr:Qt.current,r.context=Cs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Hu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Vl.enqueueReplaceState(r,r.state,null),xl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ps(t,e){try{var n="",i=e;do n+=dx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function wc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Gu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var k_=typeof WeakMap=="function"?WeakMap:Map;function hv(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){bl||(bl=!0,Ju=i),Gu(t,e)},n}function pv(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Gu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Gu(t,e),typeof i!="function"&&(rr===null?rr=new Set([this]):rr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function ap(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new k_;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Q_.bind(null,t,e,n),e.then(t,t))}function op(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function lp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,ir(n,e,1))),n.lanes|=1),t)}var B_=Ui.ReactCurrentOwner,cn=!1;function tn(t,e,n,i){e.child=t===null?Gg(e,null,n,i):Rs(e,t.child,n,i)}function cp(t,e,n,i,r){n=n.render;var s=e.ref;return ys(e,r),i=Tf(t,e,n,i,s,r),n=Cf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(Mt&&n&&pf(e),e.flags|=1,tn(t,e,i,r),e.child)}function up(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Of(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mv(t,e,s,i,r)):(t=$o(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ea,n(a,i)&&t.ref===e.ref)return Li(t,e,r)}return e.flags|=1,t=ar(s,i),t.ref=e.ref,t.return=e,e.child=t}function mv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ea(s,i)&&t.ref===e.ref)if(cn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(cn=!0);else return e.lanes=t.lanes,Li(t,e,r)}return ju(t,e,n,i,r)}function gv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},xt(ms,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,xt(ms,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,xt(ms,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,xt(ms,vn),vn|=i;return tn(t,e,r,n),e.child}function vv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function ju(t,e,n,i,r){var s=dn(n)?Cr:Qt.current;return s=Cs(e,s),ys(e,r),n=Tf(t,e,n,i,s,r),i=Cf(),t!==null&&!cn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Li(t,e,r)):(Mt&&i&&pf(e),e.flags|=1,tn(t,e,n,r),e.child)}function dp(t,e,n,i,r){if(dn(n)){var s=!0;hl(e)}else s=!1;if(ys(e,r),e.stateNode===null)Xo(t,e),fv(e,n,i),Vu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=In(u):(u=dn(n)?Cr:Qt.current,u=Cs(e,u));var h=n.getDerivedStateFromProps,p=typeof h=="function"||typeof a.getSnapshotBeforeUpdate=="function";p||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||c!==u)&&sp(e,a,i,u),qi=!1;var d=e.memoizedState;a.state=d,xl(e,i,a,r),c=e.memoizedState,o!==i||d!==c||un.current||qi?(typeof h=="function"&&(Hu(e,n,h,i),c=e.memoizedState),(o=qi||rp(e,n,o,i,d,c,u))?(p||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),a.props=i,a.state=c,a.context=u,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,Wg(t,e),o=e.memoizedProps,u=e.type===e.elementType?o:zn(e.type,o),a.props=u,p=e.pendingProps,d=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=In(c):(c=dn(n)?Cr:Qt.current,c=Cs(e,c));var m=n.getDerivedStateFromProps;(h=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==p||d!==c)&&sp(e,a,i,c),qi=!1,d=e.memoizedState,a.state=d,xl(e,i,a,r);var v=e.memoizedState;o!==p||d!==v||un.current||qi?(typeof m=="function"&&(Hu(e,n,m,i),v=e.memoizedState),(u=qi||rp(e,n,u,i,d,v,c)||!1)?(h||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,v,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,v,c)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),a.props=i,a.state=v,a.context=c,i=u):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Wu(t,e,n,i,s,r)}function Wu(t,e,n,i,r,s){vv(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Kh(e,n,!1),Li(t,e,s);i=e.stateNode,B_.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Rs(e,t.child,null,s),e.child=Rs(e,null,o,s)):tn(t,e,o,s),e.memoizedState=i.state,r&&Kh(e,n,!0),e.child}function xv(t){var e=t.stateNode;e.pendingContext?$h(t,e.pendingContext,e.pendingContext!==e.context):e.context&&$h(t,e.context,!1),Mf(t,e.containerInfo)}function fp(t,e,n,i,r){return As(),gf(r),e.flags|=256,tn(t,e,n,i),e.child}var Xu={dehydrated:null,treeContext:null,retryLane:0};function qu(t){return{baseLanes:t,cachePool:null,transitions:null}}function _v(t,e,n){var i=e.pendingProps,r=bt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),xt(bt,r&1),t===null)return Bu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=Wl(a,i,0,null),t=Tr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=qu(n),e.memoizedState=Xu,t):Nf(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return z_(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var c={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=c,e.deletions=null):(i=ar(r,c),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ar(o,s):(s=Tr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?qu(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Xu,i}return s=t.child,t=s.sibling,i=ar(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Nf(t,e){return e=Wl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function lo(t,e,n,i){return i!==null&&gf(i),Rs(e,t.child,null,n),t=Nf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function z_(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=wc(Error(ce(422))),lo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Wl({mode:"visible",children:i.children},r,0,null),s=Tr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Rs(e,t.child,null,a),e.child.memoizedState=qu(a),e.memoizedState=Xu,s);if(!(e.mode&1))return lo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ce(419)),i=wc(s,i,void 0),lo(t,e,a,i)}if(o=(a&t.childLanes)!==0,cn||o){if(i=zt,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Pi(t,r),Xn(i,t,r,-1))}return Ff(),i=wc(Error(ce(421))),lo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=J_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,xn=nr(r.nextSibling),Sn=e,Mt=!0,Vn=null,t!==null&&(Cn[An++]=Mi,Cn[An++]=bi,Cn[An++]=Ar,Mi=t.id,bi=t.overflow,Ar=e),e=Nf(e,i.children),e.flags|=4096,e)}function hp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),zu(t.return,e,n)}function Tc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Sv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(tn(t,e,i.children,n),i=bt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&hp(t,n,e);else if(t.tag===19)hp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(xt(bt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&_l(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Tc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&_l(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Tc(e,!0,n,null,s);break;case"together":Tc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Li(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Nr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ce(153));if(e.child!==null){for(t=e.child,n=ar(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ar(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function H_(t,e,n){switch(e.tag){case 3:xv(e),As();break;case 5:Xg(e);break;case 1:dn(e.type)&&hl(e);break;case 4:Mf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;xt(gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(xt(bt,bt.current&1),e.flags|=128,null):n&e.child.childLanes?_v(t,e,n):(xt(bt,bt.current&1),t=Li(t,e,n),t!==null?t.sibling:null);xt(bt,bt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Sv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),xt(bt,bt.current),i)break;return null;case 22:case 23:return e.lanes=0,gv(t,e,n)}return Li(t,e,n)}var yv,Yu,Mv,bv;yv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Yu=function(){};Mv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Mr(ci.current);var s=null;switch(n){case"input":r=gu(t,r),i=gu(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=_u(t,r),i=_u(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=dl)}yu(n,i);var a;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var o=r[u];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(va.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var c=i[u];if(o=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&c!==o&&(c!=null||o!=null))if(u==="style")if(o){for(a in o)!o.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&o[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(s||(s=[]),s.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,o=o?o.__html:void 0,c!=null&&o!==c&&(s=s||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(va.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&St("scroll",t),s||o===c||(s=[])):(s=s||[]).push(u,c))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};bv=function(t,e,n,i){n!==i&&(e.flags|=4)};function Xs(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function V_(t,e,n){var i=e.pendingProps;switch(mf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return dn(e.type)&&fl(),qt(e),null;case 3:return i=e.stateNode,Ns(),yt(un),yt(Qt),Ef(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(nd(Vn),Vn=null))),Yu(t,e),qt(e),null;case 5:bf(e);var r=Mr(Ra.current);if(n=e.type,t!==null&&e.stateNode!=null)Mv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ce(166));return qt(e),null}if(t=Mr(ci.current),ao(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[si]=e,i[Ca]=s,t=(e.mode&1)!==0,n){case"dialog":St("cancel",i),St("close",i);break;case"iframe":case"object":case"embed":St("load",i);break;case"video":case"audio":for(r=0;r<ra.length;r++)St(ra[r],i);break;case"source":St("error",i);break;case"img":case"image":case"link":St("error",i),St("load",i);break;case"details":St("toggle",i);break;case"input":Mh(i,s),St("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},St("invalid",i);break;case"textarea":Eh(i,s),St("invalid",i)}yu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&so(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&so(i.textContent,o,t),r=["children",""+o]):va.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&St("scroll",i)}switch(n){case"input":Za(i),bh(i,s,!0);break;case"textarea":Za(i),wh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=dl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Zm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[si]=e,t[Ca]=i,yv(t,e,!1,!1),e.stateNode=t;e:{switch(a=Mu(n,i),n){case"dialog":St("cancel",t),St("close",t),r=i;break;case"iframe":case"object":case"embed":St("load",t),r=i;break;case"video":case"audio":for(r=0;r<ra.length;r++)St(ra[r],t);r=i;break;case"source":St("error",t),r=i;break;case"img":case"image":case"link":St("error",t),St("load",t),r=i;break;case"details":St("toggle",t),r=i;break;case"input":Mh(t,i),r=gu(t,i),St("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),St("invalid",t);break;case"textarea":Eh(t,i),r=_u(t,i),St("invalid",t);break;default:r=i}yu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var c=o[s];s==="style"?eg(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Qm(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&xa(t,c):typeof c=="number"&&xa(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(va.hasOwnProperty(s)?c!=null&&s==="onScroll"&&St("scroll",t):c!=null&&Jd(t,s,c,a))}switch(n){case"input":Za(t),bh(t,i,!1);break;case"textarea":Za(t),wh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+or(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?vs(t,!!i.multiple,s,!1):i.defaultValue!=null&&vs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=dl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)bv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ce(166));if(n=Mr(Ra.current),Mr(ci.current),ao(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:so(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&so(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return qt(e),null;case 13:if(yt(bt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&xn!==null&&e.mode&1&&!(e.flags&128))Hg(),As(),e.flags|=98560,s=!1;else if(s=ao(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ce(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ce(317));s[si]=e}else As(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else Vn!==null&&(nd(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||bt.current&1?Ut===0&&(Ut=3):Ff())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return Ns(),Yu(t,e),t===null&&wa(e.stateNode.containerInfo),qt(e),null;case 10:return _f(e.type._context),qt(e),null;case 17:return dn(e.type)&&fl(),qt(e),null;case 19:if(yt(bt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Xs(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=_l(t),a!==null){for(e.flags|=128,Xs(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return xt(bt,bt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Nt()>Ls&&(e.flags|=128,i=!0,Xs(s,!1),e.lanes=4194304)}else{if(!i)if(t=_l(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!Mt)return qt(e),null}else 2*Nt()-s.renderingStartTime>Ls&&n!==1073741824&&(e.flags|=128,i=!0,Xs(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Nt(),e.sibling=null,n=bt.current,xt(bt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return Uf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(ce(156,e.tag))}function G_(t,e){switch(mf(e),e.tag){case 1:return dn(e.type)&&fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ns(),yt(un),yt(Qt),Ef(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return bf(e),null;case 13:if(yt(bt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ce(340));As()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(bt),null;case 4:return Ns(),null;case 10:return _f(e.type._context),null;case 22:case 23:return Uf(),null;case 24:return null;default:return null}}var co=!1,Kt=!1,j_=typeof WeakSet=="function"?WeakSet:Set,Re=null;function ps(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function $u(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var pp=!1;function W_(t,e){if(Lu=ll,t=Ag(),hf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,c=-1,u=0,h=0,p=t,d=null;t:for(;;){for(var m;p!==n||r!==0&&p.nodeType!==3||(o=a+r),p!==s||i!==0&&p.nodeType!==3||(c=a+i),p.nodeType===3&&(a+=p.nodeValue.length),(m=p.firstChild)!==null;)d=p,p=m;for(;;){if(p===t)break t;if(d===n&&++u===r&&(o=a),d===s&&++h===i&&(c=a),(m=p.nextSibling)!==null)break;p=d,d=p.parentNode}p=m}n=o===-1||c===-1?null:{start:o,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Iu={focusedElem:t,selectionRange:n},ll=!1,Re=e;Re!==null;)if(e=Re,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Re=t;else for(;Re!==null;){e=Re;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var M=v.memoizedProps,g=v.memoizedState,f=e.stateNode,x=f.getSnapshotBeforeUpdate(e.elementType===e.type?M:zn(e.type,M),g);f.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ce(163))}}catch(y){Tt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Re=t;break}Re=e.return}return v=pp,pp=!1,v}function pa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&$u(e,n,s)}r=r.next}while(r!==i)}}function Gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ku(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Ev(t){var e=t.alternate;e!==null&&(t.alternate=null,Ev(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[Ca],delete e[Fu],delete e[C_],delete e[A_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function wv(t){return t.tag===5||t.tag===3||t.tag===4}function mp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||wv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=dl));else if(i!==4&&(t=t.child,t!==null))for(Zu(t,e,n),t=t.sibling;t!==null;)Zu(t,e,n),t=t.sibling}function Qu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Qu(t,e,n),t=t.sibling;t!==null;)Qu(t,e,n),t=t.sibling}var Ht=null,Hn=!1;function Bi(t,e,n){for(n=n.child;n!==null;)Tv(t,e,n),n=n.sibling}function Tv(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(Ul,n)}catch{}switch(n.tag){case 5:Kt||ps(n,e);case 6:var i=Ht,r=Hn;Ht=null,Bi(t,e,n),Ht=i,Hn=r,Ht!==null&&(Hn?(t=Ht,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ht.removeChild(n.stateNode));break;case 18:Ht!==null&&(Hn?(t=Ht,n=n.stateNode,t.nodeType===8?_c(t.parentNode,n):t.nodeType===1&&_c(t,n),Ma(t)):_c(Ht,n.stateNode));break;case 4:i=Ht,r=Hn,Ht=n.stateNode.containerInfo,Hn=!0,Bi(t,e,n),Ht=i,Hn=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&$u(n,e,a),r=r.next}while(r!==i)}Bi(t,e,n);break;case 1:if(!Kt&&(ps(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Tt(n,e,o)}Bi(t,e,n);break;case 21:Bi(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,Bi(t,e,n),Kt=i):Bi(t,e,n);break;default:Bi(t,e,n)}}function gp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new j_),e.forEach(function(i){var r=eS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Ht=o.stateNode,Hn=!1;break e;case 3:Ht=o.stateNode.containerInfo,Hn=!0;break e;case 4:Ht=o.stateNode.containerInfo,Hn=!0;break e}o=o.return}if(Ht===null)throw Error(ce(160));Tv(s,a,r),Ht=null,Hn=!1;var c=r.alternate;c!==null&&(c.return=null),r.return=null}catch(u){Tt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Cv(e,t),e=e.sibling}function Cv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),Jn(t),i&4){try{pa(3,t,t.return),Gl(3,t)}catch(M){Tt(t,t.return,M)}try{pa(5,t,t.return)}catch(M){Tt(t,t.return,M)}}break;case 1:Fn(e,t),Jn(t),i&512&&n!==null&&ps(n,n.return);break;case 5:if(Fn(e,t),Jn(t),i&512&&n!==null&&ps(n,n.return),t.flags&32){var r=t.stateNode;try{xa(r,"")}catch(M){Tt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&$m(r,s),Mu(o,a);var u=Mu(o,s);for(a=0;a<c.length;a+=2){var h=c[a],p=c[a+1];h==="style"?eg(r,p):h==="dangerouslySetInnerHTML"?Qm(r,p):h==="children"?xa(r,p):Jd(r,h,p,u)}switch(o){case"input":vu(r,s);break;case"textarea":Km(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?vs(r,!!s.multiple,m,!1):d!==!!s.multiple&&(s.defaultValue!=null?vs(r,!!s.multiple,s.defaultValue,!0):vs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ca]=s}catch(M){Tt(t,t.return,M)}}break;case 6:if(Fn(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(ce(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Tt(t,t.return,M)}}break;case 3:if(Fn(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ma(e.containerInfo)}catch(M){Tt(t,t.return,M)}break;case 4:Fn(e,t),Jn(t);break;case 13:Fn(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(If=Nt())),i&4&&gp(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(u=Kt)||h,Fn(e,t),Kt=u):Fn(e,t),Jn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(Re=t,h=t.child;h!==null;){for(p=Re=h;Re!==null;){switch(d=Re,m=d.child,d.tag){case 0:case 11:case 14:case 15:pa(4,d,d.return);break;case 1:ps(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(M){Tt(i,n,M)}}break;case 5:ps(d,d.return);break;case 22:if(d.memoizedState!==null){xp(p);continue}}m!==null?(m.return=d,Re=m):xp(p)}h=h.sibling}e:for(h=null,p=t;;){if(p.tag===5){if(h===null){h=p;try{r=p.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=p.stateNode,c=p.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,o.style.display=Jm("display",a))}catch(M){Tt(t,t.return,M)}}}else if(p.tag===6){if(h===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(M){Tt(t,t.return,M)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===t)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===t)break e;for(;p.sibling===null;){if(p.return===null||p.return===t)break e;h===p&&(h=null),p=p.return}h===p&&(h=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:Fn(e,t),Jn(t),i&4&&gp(t);break;case 21:break;default:Fn(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(wv(n)){var i=n;break e}n=n.return}throw Error(ce(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xa(r,""),i.flags&=-33);var s=mp(t);Qu(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=mp(t);Zu(t,o,a);break;default:throw Error(ce(161))}}catch(c){Tt(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function X_(t,e,n){Re=t,Av(t)}function Av(t,e,n){for(var i=(t.mode&1)!==0;Re!==null;){var r=Re,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||co;if(!a){var o=r.alternate,c=o!==null&&o.memoizedState!==null||Kt;o=co;var u=Kt;if(co=a,(Kt=c)&&!u)for(Re=r;Re!==null;)a=Re,c=a.child,a.tag===22&&a.memoizedState!==null?_p(r):c!==null?(c.return=a,Re=c):_p(r);for(;s!==null;)Re=s,Av(s),s=s.sibling;Re=r,co=o,Kt=u}vp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Re=s):vp(t)}}function vp(t){for(;Re!==null;){var e=Re;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||Gl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&tp(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}tp(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var p=h.dehydrated;p!==null&&Ma(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ce(163))}Kt||e.flags&512&&Ku(e)}catch(d){Tt(e,e.return,d)}}if(e===t){Re=null;break}if(n=e.sibling,n!==null){n.return=e.return,Re=n;break}Re=e.return}}function xp(t){for(;Re!==null;){var e=Re;if(e===t){Re=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Re=n;break}Re=e.return}}function _p(t){for(;Re!==null;){var e=Re;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gl(4,e)}catch(c){Tt(e,n,c)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(c){Tt(e,r,c)}}var s=e.return;try{Ku(e)}catch(c){Tt(e,s,c)}break;case 5:var a=e.return;try{Ku(e)}catch(c){Tt(e,a,c)}}}catch(c){Tt(e,e.return,c)}if(e===t){Re=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Re=o;break}Re=e.return}}var q_=Math.ceil,Ml=Ui.ReactCurrentDispatcher,Pf=Ui.ReactCurrentOwner,Ln=Ui.ReactCurrentBatchConfig,lt=0,zt=null,It=null,Gt=0,vn=0,ms=ur(0),Ut=0,Ia=null,Nr=0,jl=0,Lf=0,ma=null,ln=null,If=0,Ls=1/0,xi=null,bl=!1,Ju=null,rr=null,uo=!1,Qi=null,El=0,ga=0,ed=null,qo=-1,Yo=0;function nn(){return lt&6?Nt():qo!==-1?qo:qo=Nt()}function sr(t){return t.mode&1?lt&2&&Gt!==0?Gt&-Gt:N_.transition!==null?(Yo===0&&(Yo=fg()),Yo):(t=ht,t!==0||(t=window.event,t=t===void 0?16:_g(t.type)),t):1}function Xn(t,e,n,i){if(50<ga)throw ga=0,ed=null,Error(ce(185));Ba(t,n,i),(!(lt&2)||t!==zt)&&(t===zt&&(!(lt&2)&&(jl|=n),Ut===4&&$i(t,Gt)),fn(t,i),n===1&&lt===0&&!(e.mode&1)&&(Ls=Nt()+500,zl&&dr()))}function fn(t,e){var n=t.callbackNode;Nx(t,e);var i=ol(t,t===zt?Gt:0);if(i===0)n!==null&&Ah(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ah(n),e===1)t.tag===0?R_(Sp.bind(null,t)):kg(Sp.bind(null,t)),w_(function(){!(lt&6)&&dr()}),n=null;else{switch(hg(i)){case 1:n=sf;break;case 4:n=ug;break;case 16:n=al;break;case 536870912:n=dg;break;default:n=al}n=Fv(n,Rv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Rv(t,e){if(qo=-1,Yo=0,lt&6)throw Error(ce(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var i=ol(t,t===zt?Gt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=wl(t,i);else{e=i;var r=lt;lt|=2;var s=Pv();(zt!==t||Gt!==e)&&(xi=null,Ls=Nt()+500,wr(t,e));do try{K_();break}catch(o){Nv(t,o)}while(!0);xf(),Ml.current=s,lt=r,It!==null?e=0:(zt=null,Gt=0,e=Ut)}if(e!==0){if(e===2&&(r=Cu(t),r!==0&&(i=r,e=td(t,r))),e===1)throw n=Ia,wr(t,0),$i(t,i),fn(t,Nt()),n;if(e===6)$i(t,i);else{if(r=t.current.alternate,!(i&30)&&!Y_(r)&&(e=wl(t,i),e===2&&(s=Cu(t),s!==0&&(i=s,e=td(t,s))),e===1))throw n=Ia,wr(t,0),$i(t,i),fn(t,Nt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ce(345));case 2:_r(t,ln,xi);break;case 3:if($i(t,i),(i&130023424)===i&&(e=If+500-Nt(),10<e)){if(ol(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){nn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Uu(_r.bind(null,t,ln,xi),e);break}_r(t,ln,xi);break;case 4:if($i(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Wn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Nt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*q_(i/1960))-i,10<i){t.timeoutHandle=Uu(_r.bind(null,t,ln,xi),i);break}_r(t,ln,xi);break;case 5:_r(t,ln,xi);break;default:throw Error(ce(329))}}}return fn(t,Nt()),t.callbackNode===n?Rv.bind(null,t):null}function td(t,e){var n=ma;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=wl(t,e),t!==2&&(e=ln,ln=n,e!==null&&nd(e)),t}function nd(t){ln===null?ln=t:ln.push.apply(ln,t)}function Y_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e){for(e&=~Lf,e&=~jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),i=1<<n;t[n]=-1,e&=~i}}function Sp(t){if(lt&6)throw Error(ce(327));Ms();var e=ol(t,0);if(!(e&1))return fn(t,Nt()),null;var n=wl(t,e);if(t.tag!==0&&n===2){var i=Cu(t);i!==0&&(e=i,n=td(t,i))}if(n===1)throw n=Ia,wr(t,0),$i(t,e),fn(t,Nt()),n;if(n===6)throw Error(ce(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,ln,xi),fn(t,Nt()),null}function Df(t,e){var n=lt;lt|=1;try{return t(e)}finally{lt=n,lt===0&&(Ls=Nt()+500,zl&&dr())}}function Pr(t){Qi!==null&&Qi.tag===0&&!(lt&6)&&Ms();var e=lt;lt|=1;var n=Ln.transition,i=ht;try{if(Ln.transition=null,ht=1,t)return t()}finally{ht=i,Ln.transition=n,lt=e,!(lt&6)&&dr()}}function Uf(){vn=ms.current,yt(ms)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,E_(n)),It!==null)for(n=It.return;n!==null;){var i=n;switch(mf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&fl();break;case 3:Ns(),yt(un),yt(Qt),Ef();break;case 5:bf(i);break;case 4:Ns();break;case 13:yt(bt);break;case 19:yt(bt);break;case 10:_f(i.type._context);break;case 22:case 23:Uf()}n=n.return}if(zt=t,It=t=ar(t.current,null),Gt=vn=e,Ut=0,Ia=null,Lf=jl=Nr=0,ln=ma=null,yr!==null){for(e=0;e<yr.length;e++)if(n=yr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}yr=null}return t}function Nv(t,e){do{var n=It;try{if(xf(),jo.current=yl,Sl){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Sl=!1}if(Rr=0,Bt=Dt=Et=null,ha=!1,Na=0,Pf.current=null,n===null||n.return===null){Ut=1,Ia=e,It=null;break}e:{var s=t,a=n.return,o=n,c=e;if(e=Gt,o.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,h=o,p=h.tag;if(!(h.mode&1)&&(p===0||p===11||p===15)){var d=h.alternate;d?(h.updateQueue=d.updateQueue,h.memoizedState=d.memoizedState,h.lanes=d.lanes):(h.updateQueue=null,h.memoizedState=null)}var m=op(a);if(m!==null){m.flags&=-257,lp(m,a,o,s,e),m.mode&1&&ap(s,u,e),e=m,c=u;var v=e.updateQueue;if(v===null){var M=new Set;M.add(c),e.updateQueue=M}else v.add(c);break e}else{if(!(e&1)){ap(s,u,e),Ff();break e}c=Error(ce(426))}}else if(Mt&&o.mode&1){var g=op(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),lp(g,a,o,s,e),gf(Ps(c,o));break e}}s=c=Ps(c,o),Ut!==4&&(Ut=2),ma===null?ma=[s]:ma.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=hv(s,c,e);ep(s,f);break e;case 1:o=c;var x=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(rr===null||!rr.has(b)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=pv(s,o,e);ep(s,y);break e}}s=s.return}while(s!==null)}Iv(n)}catch(w){e=w,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function Pv(){var t=Ml.current;return Ml.current=yl,t===null?yl:t}function Ff(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),zt===null||!(Nr&268435455)&&!(jl&268435455)||$i(zt,Gt)}function wl(t,e){var n=lt;lt|=2;var i=Pv();(zt!==t||Gt!==e)&&(xi=null,wr(t,e));do try{$_();break}catch(r){Nv(t,r)}while(!0);if(xf(),lt=n,Ml.current=i,It!==null)throw Error(ce(261));return zt=null,Gt=0,Ut}function $_(){for(;It!==null;)Lv(It)}function K_(){for(;It!==null&&!yx();)Lv(It)}function Lv(t){var e=Uv(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?Iv(t):It=e,Pf.current=null}function Iv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=G_(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,It=null;return}}else if(n=V_(n,e,vn),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);Ut===0&&(Ut=5)}function _r(t,e,n){var i=ht,r=Ln.transition;try{Ln.transition=null,ht=1,Z_(t,e,n,i)}finally{Ln.transition=r,ht=i}return null}function Z_(t,e,n,i){do Ms();while(Qi!==null);if(lt&6)throw Error(ce(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ce(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Px(t,s),t===zt&&(It=zt=null,Gt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||uo||(uo=!0,Fv(al,function(){return Ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var a=ht;ht=1;var o=lt;lt|=4,Pf.current=null,W_(t,n),Cv(n,t),v_(Iu),ll=!!Lu,Iu=Lu=null,t.current=n,X_(n),Mx(),lt=o,ht=a,Ln.transition=s}else t.current=n;if(uo&&(uo=!1,Qi=t,El=r),s=t.pendingLanes,s===0&&(rr=null),wx(n.stateNode),fn(t,Nt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(bl)throw bl=!1,t=Ju,Ju=null,t;return El&1&&t.tag!==0&&Ms(),s=t.pendingLanes,s&1?t===ed?ga++:(ga=0,ed=t):ga=0,dr(),null}function Ms(){if(Qi!==null){var t=hg(El),e=Ln.transition,n=ht;try{if(Ln.transition=null,ht=16>t?16:t,Qi===null)var i=!1;else{if(t=Qi,Qi=null,El=0,lt&6)throw Error(ce(331));var r=lt;for(lt|=4,Re=t.current;Re!==null;){var s=Re,a=s.child;if(Re.flags&16){var o=s.deletions;if(o!==null){for(var c=0;c<o.length;c++){var u=o[c];for(Re=u;Re!==null;){var h=Re;switch(h.tag){case 0:case 11:case 15:pa(8,h,s)}var p=h.child;if(p!==null)p.return=h,Re=p;else for(;Re!==null;){h=Re;var d=h.sibling,m=h.return;if(Ev(h),h===u){Re=null;break}if(d!==null){d.return=m,Re=d;break}Re=m}}}var v=s.alternate;if(v!==null){var M=v.child;if(M!==null){v.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}Re=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Re=a;else e:for(;Re!==null;){if(s=Re,s.flags&2048)switch(s.tag){case 0:case 11:case 15:pa(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,Re=f;break e}Re=s.return}}var x=t.current;for(Re=x;Re!==null;){a=Re;var b=a.child;if(a.subtreeFlags&2064&&b!==null)b.return=a,Re=b;else e:for(a=x;Re!==null;){if(o=Re,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Gl(9,o)}}catch(w){Tt(o,o.return,w)}if(o===a){Re=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,Re=y;break e}Re=o.return}}if(lt=r,dr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(Ul,t)}catch{}i=!0}return i}finally{ht=n,Ln.transition=e}}return!1}function yp(t,e,n){e=Ps(n,e),e=hv(t,e,1),t=ir(t,e,1),e=nn(),t!==null&&(Ba(t,1,e),fn(t,e))}function Tt(t,e,n){if(t.tag===3)yp(t,t,n);else for(;e!==null;){if(e.tag===3){yp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(rr===null||!rr.has(i))){t=Ps(n,t),t=pv(e,t,1),e=ir(e,t,1),t=nn(),e!==null&&(Ba(e,1,t),fn(e,t));break}}e=e.return}}function Q_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=nn(),t.pingedLanes|=t.suspendedLanes&n,zt===t&&(Gt&n)===n&&(Ut===4||Ut===3&&(Gt&130023424)===Gt&&500>Nt()-If?wr(t,0):Lf|=n),fn(t,e)}function Dv(t,e){e===0&&(t.mode&1?(e=eo,eo<<=1,!(eo&130023424)&&(eo=4194304)):e=1);var n=nn();t=Pi(t,e),t!==null&&(Ba(t,e,n),fn(t,n))}function J_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Dv(t,n)}function eS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ce(314))}i!==null&&i.delete(e),Dv(t,n)}var Uv;Uv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||un.current)cn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return cn=!1,H_(t,e,n);cn=!!(t.flags&131072)}else cn=!1,Mt&&e.flags&1048576&&Bg(e,ml,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Xo(t,e),t=e.pendingProps;var r=Cs(e,Qt.current);ys(e,n),r=Tf(null,e,i,t,r,n);var s=Cf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(s=!0,hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,yf(e),r.updater=Vl,e.stateNode=r,r._reactInternals=e,Vu(e,i,t,n),e=Wu(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&pf(e),tn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Xo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=nS(i),t=zn(i,t),r){case 0:e=ju(null,e,i,t,n);break e;case 1:e=dp(null,e,i,t,n);break e;case 11:e=cp(null,e,i,t,n);break e;case 14:e=up(null,e,i,zn(i.type,t),n);break e}throw Error(ce(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),ju(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),dp(t,e,i,r,n);case 3:e:{if(xv(e),t===null)throw Error(ce(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Wg(t,e),xl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ps(Error(ce(423)),e),e=fp(t,e,i,n,r);break e}else if(i!==r){r=Ps(Error(ce(424)),e),e=fp(t,e,i,n,r);break e}else for(xn=nr(e.stateNode.containerInfo.firstChild),Sn=e,Mt=!0,Vn=null,n=Gg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(As(),i===r){e=Li(t,e,n);break e}tn(t,e,i,n)}e=e.child}return e;case 5:return Xg(e),t===null&&Bu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,Du(i,r)?a=null:s!==null&&Du(i,s)&&(e.flags|=32),vv(t,e),tn(t,e,a,n),e.child;case 6:return t===null&&Bu(e),null;case 13:return _v(t,e,n);case 4:return Mf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Rs(e,null,i,n):tn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),cp(t,e,i,r,n);case 7:return tn(t,e,e.pendingProps,n),e.child;case 8:return tn(t,e,e.pendingProps.children,n),e.child;case 12:return tn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,xt(gl,i._currentValue),i._currentValue=a,s!==null)if(Yn(s.value,a)){if(s.children===r.children&&!un.current){e=Li(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var c=o.firstContext;c!==null;){if(c.context===i){if(s.tag===1){c=wi(-1,n&-n),c.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?c.next=c:(c.next=h.next,h.next=c),u.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),zu(s.return,n,e),o.lanes|=n;break}c=c.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ce(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),zu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}tn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ys(e,n),r=In(r),i=i(r),e.flags|=1,tn(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),up(t,e,i,r,n);case 15:return mv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Xo(t,e),e.tag=1,dn(i)?(t=!0,hl(e)):t=!1,ys(e,n),fv(e,i,r),Vu(e,i,r,n),Wu(null,e,i,!0,t,n);case 19:return Sv(t,e,n);case 22:return gv(t,e,n)}throw Error(ce(156,e.tag))};function Fv(t,e){return cg(t,e)}function tS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Pn(t,e,n,i){return new tS(t,e,n,i)}function Of(t){return t=t.prototype,!(!t||!t.isReactComponent)}function nS(t){if(typeof t=="function")return Of(t)?1:0;if(t!=null){if(t=t.$$typeof,t===tf)return 11;if(t===nf)return 14}return 2}function ar(t,e){var n=t.alternate;return n===null?(n=Pn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function $o(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Of(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ss:return Tr(n.children,r,s,e);case ef:a=8,r|=8;break;case fu:return t=Pn(12,n,e,r|2),t.elementType=fu,t.lanes=s,t;case hu:return t=Pn(13,n,e,r),t.elementType=hu,t.lanes=s,t;case pu:return t=Pn(19,n,e,r),t.elementType=pu,t.lanes=s,t;case Xm:return Wl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case jm:a=10;break e;case Wm:a=9;break e;case tf:a=11;break e;case nf:a=14;break e;case Xi:a=16,i=null;break e}throw Error(ce(130,t==null?t:typeof t,""))}return e=Pn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Tr(t,e,n,i){return t=Pn(7,t,i,e),t.lanes=n,t}function Wl(t,e,n,i){return t=Pn(22,t,i,e),t.elementType=Xm,t.lanes=n,t.stateNode={isHidden:!1},t}function Cc(t,e,n){return t=Pn(6,t,null,e),t.lanes=n,t}function Ac(t,e,n){return e=Pn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function iS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=lc(0),this.expirationTimes=lc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=lc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function kf(t,e,n,i,r,s,a,o,c){return t=new iS(t,e,n,o,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Pn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},yf(s),t}function rS(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:rs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ov(t){if(!t)return lr;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(ce(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ce(171))}if(t.tag===1){var n=t.type;if(dn(n))return Og(t,n,e)}return e}function kv(t,e,n,i,r,s,a,o,c){return t=kf(n,i,!0,t,r,s,a,o,c),t.context=Ov(null),n=t.current,i=nn(),r=sr(n),s=wi(i,r),s.callback=e??null,ir(n,s,r),t.current.lanes=r,Ba(t,r,i),fn(t,i),t}function Xl(t,e,n,i){var r=e.current,s=nn(),a=sr(r);return n=Ov(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=ir(r,e,a),t!==null&&(Xn(t,r,a,s),Go(t,r,a)),a}function Tl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bf(t,e){Mp(t,e),(t=t.alternate)&&Mp(t,e)}function sS(){return null}var Bv=typeof reportError=="function"?reportError:function(t){console.error(t)};function zf(t){this._internalRoot=t}ql.prototype.render=zf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ce(409));Xl(t,e,null,null)};ql.prototype.unmount=zf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Pr(function(){Xl(null,t,null,null)}),e[Ni]=null}};function ql(t){this._internalRoot=t}ql.prototype.unstable_scheduleHydration=function(t){if(t){var e=gg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yi.length&&e!==0&&e<Yi[n].priority;n++);Yi.splice(n,0,t),n===0&&xg(t)}};function Hf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Yl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bp(){}function aS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Tl(a);s.call(u)}}var a=kv(e,i,t,0,null,!1,!1,"",bp);return t._reactRootContainer=a,t[Ni]=a.current,wa(t.nodeType===8?t.parentNode:t),Pr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var u=Tl(c);o.call(u)}}var c=kf(t,0,!1,null,null,!1,!1,"",bp);return t._reactRootContainer=c,t[Ni]=c.current,wa(t.nodeType===8?t.parentNode:t),Pr(function(){Xl(e,c,n,i)}),c}function $l(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var c=Tl(a);o.call(c)}}Xl(e,a,t,r)}else a=aS(n,e,t,r,i);return Tl(a)}pg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ia(e.pendingLanes);n!==0&&(af(e,n|1),fn(e,Nt()),!(lt&6)&&(Ls=Nt()+500,dr()))}break;case 13:Pr(function(){var i=Pi(t,1);if(i!==null){var r=nn();Xn(i,t,1,r)}}),Bf(t,1)}};of=function(t){if(t.tag===13){var e=Pi(t,134217728);if(e!==null){var n=nn();Xn(e,t,134217728,n)}Bf(t,134217728)}};mg=function(t){if(t.tag===13){var e=sr(t),n=Pi(t,e);if(n!==null){var i=nn();Xn(n,t,e,i)}Bf(t,e)}};gg=function(){return ht};vg=function(t,e){var n=ht;try{return ht=t,e()}finally{ht=n}};Eu=function(t,e,n){switch(e){case"input":if(vu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Bl(i);if(!r)throw Error(ce(90));Ym(i),vu(i,r)}}}break;case"textarea":Km(t,n);break;case"select":e=n.value,e!=null&&vs(t,!!n.multiple,e,!1)}};ig=Df;rg=Pr;var oS={usingClientEntryPoint:!1,Events:[Ha,cs,Bl,tg,ng,Df]},qs={findFiberByHostInstance:Sr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},lS={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=og(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||sS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{Ul=fo.inject(lS),li=fo}catch{}}Mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oS;Mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Hf(e))throw Error(ce(200));return rS(t,e,null,n)};Mn.createRoot=function(t,e){if(!Hf(t))throw Error(ce(299));var n=!1,i="",r=Bv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=kf(t,1,!1,null,null,n,!1,i,r),t[Ni]=e.current,wa(t.nodeType===8?t.parentNode:t),new zf(e)};Mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ce(188)):(t=Object.keys(t).join(","),Error(ce(268,t)));return t=og(e),t=t===null?null:t.stateNode,t};Mn.flushSync=function(t){return Pr(t)};Mn.hydrate=function(t,e,n){if(!Yl(e))throw Error(ce(200));return $l(null,t,e,!0,n)};Mn.hydrateRoot=function(t,e,n){if(!Hf(t))throw Error(ce(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Bv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=kv(e,null,t,1,n??null,r,!1,s,a),t[Ni]=e.current,wa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new ql(e)};Mn.render=function(t,e,n){if(!Yl(e))throw Error(ce(200));return $l(null,t,e,!1,n)};Mn.unmountComponentAtNode=function(t){if(!Yl(t))throw Error(ce(40));return t._reactRootContainer?(Pr(function(){$l(null,null,t,!1,function(){t._reactRootContainer=null,t[Ni]=null})}),!0):!1};Mn.unstable_batchedUpdates=Df;Mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Yl(n))throw Error(ce(200));if(t==null||t._reactInternals===void 0)throw Error(ce(38));return $l(t,e,n,!1,i)};Mn.version="18.3.1-next-f1338f8080-20240426";function zv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zv)}catch(t){console.error(t)}}zv(),zm.exports=Mn;var cS=zm.exports,Ep=cS;uu.createRoot=Ep.createRoot,uu.hydrateRoot=Ep.hydrateRoot;var wp="1.3.26";function Hv(t,e,n){return Math.max(t,Math.min(e,n))}function uS(t,e,n){return(1-n)*t+n*e}function dS(t,e,n,i){return uS(t,e,1-Math.exp(-n*i))}function fS(t,e){return(t%e+e)%e}var hS=class{constructor(){Fe(this,"isRunning",!1);Fe(this,"value",0);Fe(this,"from",0);Fe(this,"to",0);Fe(this,"currentTime",0);Fe(this,"lerp");Fe(this,"duration");Fe(this,"easing");Fe(this,"onUpdate")}advance(t){var n;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=t;const i=Hv(0,this.currentTime/this.duration,1);e=i>=1;const r=e?1:this.easing(i);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=dS(this.value,this.to,this.lerp*60,t),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(n=this.onUpdate)==null||n.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n,duration:i,easing:r,onStart:s,onUpdate:a}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=i,this.easing=r,this.currentTime=0,this.isRunning=!0,s==null||s(),this.onUpdate=a}};function pS(t,e){let n;return function(...i){clearTimeout(n),n=setTimeout(()=>{n=void 0,t.apply(this,i)},e)}}var mS=class{constructor(t,e,{autoResize:n=!0,debounce:i=250}={}){Fe(this,"width",0);Fe(this,"height",0);Fe(this,"scrollHeight",0);Fe(this,"scrollWidth",0);Fe(this,"debouncedResize");Fe(this,"wrapperResizeObserver");Fe(this,"contentResizeObserver");Fe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Fe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Fe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=t,this.content=e,n&&(this.debouncedResize=pS(this.resize,i),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Vv=class{constructor(){Fe(this,"events",{})}emit(t,...e){var i;const n=this.events[t]||[];for(let r=0,s=n.length;r<s;r++)(i=n[r])==null||i.call(n,...e)}on(t,e){return this.events[t]?this.events[t].push(e):this.events[t]=[e],()=>{var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}}off(t,e){var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(i=>e!==i)}destroy(){this.events={}}};const gS=100/6,zi={passive:!1};function Tp(t,e){return t===1?gS:t===2?e:1}var vS=class{constructor(t,e={wheelMultiplier:1,touchMultiplier:1}){Fe(this,"touchStart",{x:0,y:0});Fe(this,"lastDelta",{x:0,y:0});Fe(this,"window",{width:0,height:0});Fe(this,"emitter",new Vv);Fe(this,"onTouchStart",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:t})});Fe(this,"onTouchMove",t=>{const{clientX:e,clientY:n}=t.targetTouches?t.targetTouches[0]:t,i=-(e-this.touchStart.x)*this.options.touchMultiplier,r=-(n-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=n,this.lastDelta={x:i,y:r},this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:t})});Fe(this,"onTouchEnd",t=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:t})});Fe(this,"onWheel",t=>{let{deltaX:e,deltaY:n,deltaMode:i}=t;const r=Tp(i,this.window.width),s=Tp(i,this.window.height);e*=r,n*=s,e*=this.options.wheelMultiplier,n*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:n,event:t})});Fe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=t,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,zi),this.element.addEventListener("touchstart",this.onTouchStart,zi),this.element.addEventListener("touchmove",this.onTouchMove,zi),this.element.addEventListener("touchend",this.onTouchEnd,zi)}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,zi),this.element.removeEventListener("touchstart",this.onTouchStart,zi),this.element.removeEventListener("touchmove",this.onTouchMove,zi),this.element.removeEventListener("touchend",this.onTouchEnd,zi)}};const Cp=t=>Math.min(1,1.001-2**(-10*t));var xS=class{constructor({wrapper:t=window,content:e=document.documentElement,eventsTarget:n=t,smoothWheel:i=!0,syncTouch:r=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:c,lerp:u=.1,infinite:h=!1,orientation:p="vertical",gestureOrientation:d=p==="horizontal"?"both":"vertical",touchMultiplier:m=1,wheelMultiplier:v=1,autoResize:M=!0,prevent:g,virtualScroll:f,overscroll:x=!0,autoRaf:b=!1,anchors:y=!1,autoToggle:w=!1,allowNestedScroll:T=!1,__experimental__naiveDimensions:N=!1,naiveDimensions:S=N,stopInertiaOnNavigate:P=!1,respectReducedMotion:L=!0}={}){Fe(this,"_isScrolling",!1);Fe(this,"_isStopped",!1);Fe(this,"_isLocked",!1);Fe(this,"_preventNextNativeScrollEvent",!1);Fe(this,"_resetVelocityTimeout",null);Fe(this,"_rafId",null);Fe(this,"_isDraggingSelection",!1);Fe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Fe(this,"isTouching");Fe(this,"isIos");Fe(this,"time",0);Fe(this,"userData",{});Fe(this,"lastVelocity",0);Fe(this,"velocity",0);Fe(this,"direction",0);Fe(this,"options");Fe(this,"targetScroll");Fe(this,"animatedScroll");Fe(this,"animate",new hS);Fe(this,"emitter",new Vv);Fe(this,"dimensions");Fe(this,"virtualScroll");Fe(this,"onScrollEnd",t=>{t instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&t.stopPropagation()});Fe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Fe(this,"onTransitionEnd",t=>{var e;(e=t.propertyName)!=null&&e.includes("overflow")&&t.target===this.rootElement&&this.checkOverflow()});Fe(this,"onClick",t=>{const e=t.composedPath().filter(i=>i instanceof HTMLAnchorElement&&i.href).map(i=>new URL(i.href)),n=new URL(window.location.href);if(this.options.anchors){const i=e.find(r=>n.host===r.host&&n.pathname===r.pathname&&r.hash);if(i){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=decodeURIComponent(i.hash);this.scrollTo(s,r);return}}if(this.options.stopInertiaOnNavigate&&e.some(i=>n.host===i.host&&n.pathname!==i.pathname)){this.reset();return}});Fe(this,"onPointerDown",t=>{t.button===1&&this.reset()});Fe(this,"onVirtualScroll",t=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(t)===!1)return;const{deltaX:e,deltaY:n,event:i}=t;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:n,event:i}),i.ctrlKey||i.lenisStopPropagation)return;const r=i.type.includes("touch"),s=i.type.includes("wheel");if(r&&this.isIos&&(i.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(i)),this._isDraggingSelection)){i.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=i.type==="touchstart"||i.type==="touchmove";const a=e===0&&n===0;if(this.options.syncTouch&&r&&i.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const o=this.options.gestureOrientation==="vertical"&&n===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||o)return;let c=i.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent,h=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";if(c.find(v=>{var M,g,f,x,b;return v instanceof HTMLElement&&(typeof u=="function"&&(u==null?void 0:u(v))||((M=v.hasAttribute)==null?void 0:M.call(v,"data-lenis-prevent"))||h==="vertical"&&((g=v.hasAttribute)==null?void 0:g.call(v,"data-lenis-prevent-vertical"))||h==="horizontal"&&((f=v.hasAttribute)==null?void 0:f.call(v,"data-lenis-prevent-horizontal"))||r&&((x=v.hasAttribute)==null?void 0:x.call(v,"data-lenis-prevent-touch"))||s&&((b=v.hasAttribute)==null?void 0:b.call(v,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(v,{deltaX:e,deltaY:n}))}))return;if(this.isStopped||this.isLocked){i.cancelable&&i.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),i.lenisStopPropagation=!0;return}let p=n;this.options.gestureOrientation==="both"?p=Math.abs(n)>Math.abs(e)?n:e:this.options.gestureOrientation==="horizontal"&&(p=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&n>0||this.animatedScroll===this.limit&&n<0))&&(i.lenisStopPropagation=!0),i.cancelable&&i.preventDefault();const d=r&&this.options.syncTouch,m=r&&i.type==="touchend";m&&(p=Math.sign(p)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+p,{programmatic:!1,...d?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Fe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-t,this.direction=Math.sign(this.animatedScroll-t),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Fe(this,"raf",t=>{const e=t-(this.time||t);this.time=t,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=wp,window.lenis||(window.lenis={}),window.lenis.version=wp,p==="horizontal"&&(window.lenis.horizontal=!0),r===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!t||t===document.documentElement)&&(t=window),typeof o=="number"&&typeof c!="function"?c=Cp:typeof c=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:t,content:e,eventsTarget:n,smoothWheel:i,syncTouch:r,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:c,lerp:u,infinite:h,gestureOrientation:d,orientation:p,touchMultiplier:m,wheelMultiplier:v,autoResize:M,prevent:g,virtualScroll:f,overscroll:x,autoRaf:b,anchors:y,autoToggle:w,allowNestedScroll:T,naiveDimensions:S,stopInertiaOnNavigate:P,respectReducedMotion:L},this.dimensions=new mS(t,e,{autoResize:M}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new vS(n,{touchMultiplier:m,wheelMultiplier:v}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}get overflow(){const t=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[t]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(t){this.isHorizontal?this.options.wrapper.scrollTo({left:t,behavior:"instant"}):this.options.wrapper.scrollTo({top:t,behavior:"instant"})}isTouchOnSelectionHandle(t){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const n=t.targetTouches[0]??t.changedTouches[0];if(!n)return!1;const i=e.getRangeAt(0).getClientRects();if(i.length===0)return!1;const r=i[0],s=i[i.length-1],a=40,o=Math.hypot(n.clientX-r.left,n.clientY-r.top)<=a,c=Math.hypot(n.clientX-s.right,n.clientY-s.bottom)<=a;return o||c}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(t,{offset:e=0,immediate:n=!1,lock:i=!1,programmatic:r=!0,lerp:s=r?this.options.lerp:void 0,duration:a=r?this.options.duration:void 0,easing:o=r?this.options.easing:void 0,onStart:c,onComplete:u,force:h=!1,userData:p}={}){if(this.prefersReducedMotion&&(r?n=!0:(s=1,a=void 0,o=void 0)),(this.isStopped||this.isLocked)&&!h)return;let d=t,m=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let v=null;if(typeof d=="string"?(v=d.startsWith("#")?document.getElementById(d.slice(1)):document.querySelector(d),v||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof HTMLElement&&(d!=null&&d.nodeType)&&(v=d),v){if(this.options.wrapper!==window){const y=this.rootElement.getBoundingClientRect();m-=this.isHorizontal?y.left:y.top}const M=v.getBoundingClientRect(),g=getComputedStyle(v),f=this.isHorizontal?Number.parseFloat(g.scrollMarginLeft):Number.parseFloat(g.scrollMarginTop),x=getComputedStyle(this.rootElement),b=this.isHorizontal?Number.parseFloat(x.scrollPaddingLeft):Number.parseFloat(x.scrollPaddingTop);d=(this.isHorizontal?M.left:M.top)+this.animatedScroll-(Number.isNaN(f)?0:f)-(Number.isNaN(b)?0:b)}}if(typeof d=="number"){if(d+=m,this.options.infinite){if(r){this.targetScroll=this.animatedScroll=this.scroll;const v=d-this.animatedScroll;v>this.limit/2?d-=this.limit:v<-this.limit/2&&(d+=this.limit)}}else d=Hv(0,d,this.limit);if(d===this.targetScroll){c==null||c(this),u==null||u(this);return}if(this.userData=p??{},n){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}r||(this.targetScroll=d),typeof a=="number"&&typeof o!="function"?o=Cp:typeof o=="function"&&typeof a!="number"&&(a=1),this.animate.fromTo(this.animatedScroll,d,{duration:a,easing:o,lerp:s,onStart:()=>{i&&(this.isLocked=!0),this.isScrolling="smooth",c==null||c(this)},onUpdate:(v,M)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=v-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=v,this.setScroll(this.scroll),r&&(this.targetScroll=v),M||this.emit(),M&&(this.reset(),this.emit(),u==null||u(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(t,{deltaX:e,deltaY:n}){const i=Date.now();t._lenis||(t._lenis={});const r=t._lenis;let s,a,o,c,u,h,p,d,m,v;if(i-(r.time??0)>2e3){r.time=Date.now();const T=window.getComputedStyle(t);if(r.computedStyle=T,s=["auto","overlay","scroll"].includes(T.overflowX),a=["auto","overlay","scroll"].includes(T.overflowY),u=["auto"].includes(T.overscrollBehaviorX),h=["auto"].includes(T.overscrollBehaviorY),r.hasOverflowX=s,r.hasOverflowY=a,!(s||a))return!1;p=t.scrollWidth,d=t.scrollHeight,m=t.clientWidth,v=t.clientHeight,o=p>m,c=d>v,r.isScrollableX=o,r.isScrollableY=c,r.scrollWidth=p,r.scrollHeight=d,r.clientWidth=m,r.clientHeight=v,r.hasOverscrollBehaviorX=u,r.hasOverscrollBehaviorY=h}else o=r.isScrollableX,c=r.isScrollableY,s=r.hasOverflowX,a=r.hasOverflowY,p=r.scrollWidth,d=r.scrollHeight,m=r.clientWidth,v=r.clientHeight,u=r.hasOverscrollBehaviorX,h=r.hasOverscrollBehaviorY;if(!(s&&o||a&&c))return!1;const M=Math.abs(e)>=Math.abs(n)?"horizontal":"vertical";let g,f,x,b,y,w;if(M==="horizontal")g=Math.round(t.scrollLeft),f=p-m,x=e,b=s,y=o,w=u;else if(M==="vertical")g=Math.round(t.scrollTop),f=d-v,x=n,b=a,y=c,w=h;else return!1;return!w&&(g>=f||g<=0)?!0:(x>0?g<f:g>0)&&b&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const t=this.options.wrapper;return this.isHorizontal?t.scrollX??t.scrollLeft:t.scrollY??t.scrollTop}get scroll(){return this.options.infinite?fS(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(t){this._isScrolling!==t&&(this._isScrolling=t,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(t){this._isStopped!==t&&(this._isStopped=t,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(t){this._isLocked!==t&&(this._isLocked=t,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let t="lenis";return this.options.autoToggle&&(t+=" lenis-autoToggle"),this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isScrolling==="smooth"&&(t+=" lenis-smooth"),t}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(t=>{this.rootElement.classList.add(t)})}cleanUpClassName(){for(const t of Array.from(this.rootElement.classList))(t==="lenis"||t.startsWith("lenis-"))&&this.rootElement.classList.remove(t)}};function _S({onOpenModal:t,scrolled:e}){const[n,i]=We.useState(!1),[r,s]=We.useState(!1),[a,o]=We.useState("hero"),c=e!==void 0?e:r;We.useEffect(()=>{const h=()=>{const p=document.querySelector(".hero-line-intelligence")||document.querySelector(".hero-left-mid-block"),d=document.querySelector(".stats-strip-white")||document.getElementById("counts");if(p&&d){const M=p.getBoundingClientRect(),g=d.getBoundingClientRect();s(f=>f?g.top<=M.bottom+45||M.bottom<=85:g.top<=M.bottom+25||M.bottom<=72)}else s(window.scrollY>=window.innerHeight*.5+30);const m=["hero","counts","problems","solution","stakeholders","marketplace","tech","it-carbon","revenue","roadmap"],v=window.scrollY+200;for(const M of m){const g=document.getElementById(M);if(g){const f=g.offsetTop,x=g.offsetHeight;if(v>=f&&v<f+x){o(M);break}}}};return window.addEventListener("scroll",h,{passive:!0}),window.addEventListener("resize",h,{passive:!0}),h(),()=>{window.removeEventListener("scroll",h),window.removeEventListener("resize",h)}},[]);const u=h=>{i(!1);const p=document.getElementById(h);if(p)if(window.__lenis)window.__lenis.scrollTo(p,{offset:-74,duration:1.15});else{const v=p.getBoundingClientRect().top+window.pageYOffset-74;window.scrollTo({top:v,behavior:"smooth"})}};return l.jsx("header",{id:"header",className:`fixed-top d-flex align-items-center ${c?"header-scrolled":""}`,children:l.jsxs("div",{className:"container d-flex align-items-center justify-content-between",children:[l.jsx("div",{className:"logo",children:l.jsxs("a",{href:"#hero",className:"carbosafe-brand-link d-flex align-items-center gap-2",onClick:h=>{h.preventDefault(),u("hero")},children:[l.jsx("div",{className:"brand-leaf-icon","aria-hidden":"true",children:l.jsxs("svg",{width:"30",height:"30",viewBox:"0 0 32 32",fill:"none",children:[l.jsx("circle",{cx:"16",cy:"16",r:"15",fill:"url(#brandGrad)"}),l.jsx("path",{d:"M16 6C11 10 9 16 11 22C13 18 17 15 22 14C23 19 20 24 15 26C21 26 26 21 26 15C26 9 21 6 16 6Z",fill:"#ffffff"}),l.jsx("path",{d:"M12 21C14 17 18 15 23 14",stroke:"#059669",strokeWidth:"1.5",strokeLinecap:"round"}),l.jsx("defs",{children:l.jsxs("linearGradient",{id:"brandGrad",x1:"0",y1:"0",x2:"32",y2:"32",gradientUnits:"userSpaceOnUse",children:[l.jsx("stop",{stopColor:"#10b981"}),l.jsx("stop",{offset:"0.6",stopColor:"#059669"}),l.jsx("stop",{offset:"1",stopColor:"#047857"})]})})]})}),l.jsxs("div",{className:"brand-text-lockup",children:[l.jsxs("span",{className:"brand-name-main",children:["Carbo",l.jsx("span",{className:"brand-name-accent",children:"Safe"})]}),l.jsx("span",{className:"brand-badge-mini",children:"AI & Blockchain"})]})]})}),l.jsxs("nav",{id:"navbar",className:`navbar ${n?"navbar-mobile":""}`,children:[l.jsxs("ul",{children:[l.jsx("li",{children:l.jsx("a",{href:"#hero",className:a==="hero"?"active":"",onClick:h=>{h.preventDefault(),u("hero")},children:"Home"})}),l.jsx("li",{children:l.jsx("a",{href:"#problems",className:a==="problems"?"active":"",onClick:h=>{h.preventDefault(),u("problems")},children:"Problems"})}),l.jsx("li",{children:l.jsx("a",{href:"#solution",className:a==="solution"?"active":"",onClick:h=>{h.preventDefault(),u("solution")},children:"Solution"})}),l.jsx("li",{children:l.jsx("a",{href:"#stakeholders",className:a==="stakeholders"?"active":"",onClick:h=>{h.preventDefault(),u("stakeholders")},children:"Who Uses It"})}),l.jsx("li",{children:l.jsxs("a",{href:"#marketplace",className:a==="marketplace"?"active":"",onClick:h=>{h.preventDefault(),u("marketplace")},children:[l.jsx("span",{children:"Projects"}),l.jsx("i",{className:"bi bi-chevron-down nav-chevron"})]})}),l.jsx("li",{children:l.jsx("a",{href:"#tech",className:a==="tech"?"active":"",onClick:h=>{h.preventDefault(),u("tech")},children:"Tech & AI"})}),l.jsx("li",{children:l.jsx("a",{href:"#it-carbon",className:a==="it-carbon"?"active":"",onClick:h=>{h.preventDefault(),u("it-carbon")},children:"IT Industry"})}),l.jsx("li",{children:l.jsx("a",{href:"#revenue",className:a==="revenue"?"active":"",onClick:h=>{h.preventDefault(),u("revenue")},children:"Revenue"})}),l.jsx("li",{children:l.jsx("a",{href:"#roadmap",className:a==="roadmap"?"active":"",onClick:h=>{h.preventDefault(),u("roadmap")},children:"Roadmap"})})]}),l.jsx("i",{className:`bi ${n?"bi-x":"bi-list"} mobile-nav-toggle`,onClick:()=>i(!n)})]}),l.jsxs("div",{className:"google-nav-actions d-flex align-items-center gap-3",children:[l.jsxs("div",{className:"google-nav-icons d-none d-lg-flex align-items-center gap-2",children:[l.jsx("a",{href:"mailto:contact@carbosafe.org",className:"google-icon-link",title:"Email Us",children:l.jsx("i",{className:"bi bi-envelope"})}),l.jsx("a",{href:"#it-carbon",onClick:h=>{h.preventDefault(),u("it-carbon")},className:"google-icon-link",title:"IT Carbon Calculator",children:l.jsx("i",{className:"bi bi-calculator"})})]}),l.jsx("button",{type:"button",className:"btn-google-pill btn-carbosafe-green",onClick:t,children:l.jsx("span",{children:"Book Demo"})})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vf="186",SS=0,Ap=1,yS=2,Ko=1,MS=2,sa=3,Lr=0,hn=1,yi=2,Ti=0,bs=1,Rp=2,Np=3,Pp=4,bS=5,is=100,ES=101,wS=102,TS=103,CS=104,AS=200,RS=201,NS=202,PS=203,Gv=204,jv=205,LS=206,IS=207,DS=208,US=209,FS=210,OS=211,kS=212,BS=213,zS=214,id=0,rd=1,sd=2,Da=3,ad=4,od=5,ld=6,cd=7,Wv=0,HS=1,VS=2,ui=0,Xv=1,qv=2,Yv=3,$v=4,Kv=5,Zv=6,Qv=7,Jv=300,Ir=301,Is=302,Rc=303,Nc=304,Kl=306,ud=1e3,Ei=1001,dd=1002,Vt=1003,GS=1004,ho=1005,Zt=1006,Pc=1007,br=1008,Nn=1009,e0=1010,t0=1011,Ua=1012,Gf=1013,di=1014,ai=1015,fi=1016,jf=1017,Wf=1018,Fa=1020,n0=35902,i0=35899,r0=1021,s0=1022,jn=1023,Ii=1026,Er=1027,a0=1028,Xf=1029,Dr=1030,qf=1031,Yf=1033,Zo=33776,Qo=33777,Jo=33778,el=33779,fd=35840,hd=35841,pd=35842,md=35843,gd=36196,vd=37492,xd=37496,_d=37488,Sd=37489,Cl=37490,yd=37491,Md=37808,bd=37809,Ed=37810,wd=37811,Td=37812,Cd=37813,Ad=37814,Rd=37815,Nd=37816,Pd=37817,Ld=37818,Id=37819,Dd=37820,Ud=37821,Fd=36492,Od=36494,kd=36495,Bd=36283,zd=36284,Al=36285,Hd=36286,jS=3200,Lp=0,WS=1,Ki="",Tn="srgb",Rl="srgb-linear",Nl="linear",ft="srgb",Lc=7680,XS=519,qS=512,YS=513,$S=514,$f=515,KS=516,ZS=517,Kf=518,QS=519,JS=35044,Ip="300 es",oi=2e3,Pl=2001;function ey(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ll(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function ty(){const t=Ll("canvas");return t.style.display="block",t}const Dp={};function Up(...t){const e="THREE."+t.shift();console.log(e,...t)}function o0(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function je(...t){t=o0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function ot(...t){t=o0(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Es(...t){const e=t.join(" ");e in Dp||(Dp[e]=!0,je(...t))}function ny(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const iy={[id]:rd,[sd]:ld,[ad]:cd,[Da]:od,[rd]:id,[ld]:sd,[cd]:ad,[od]:Da};class kr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Yt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ic=Math.PI/180,Vd=180/Math.PI;function Ga(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Yt[t&255]+Yt[t>>8&255]+Yt[t>>16&255]+Yt[t>>24&255]+"-"+Yt[e&255]+Yt[e>>8&255]+"-"+Yt[e>>16&15|64]+Yt[e>>24&255]+"-"+Yt[n&63|128]+Yt[n>>8&255]+"-"+Yt[n>>16&255]+Yt[n>>24&255]+Yt[i&255]+Yt[i>>8&255]+Yt[i>>16&255]+Yt[i>>24&255]).toLowerCase()}function rt(t,e,n){return Math.max(e,Math.min(n,t))}function ry(t,e){return(t%e+e)%e}function Dc(t,e,n){return(1-n)*t+n*e}function Ys(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:case Uint8ClampedArray:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const th=class th{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};th.prototype.isVector2=!0;let ct=th;class ks{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let c=i[r+0],u=i[r+1],h=i[r+2],p=i[r+3],d=s[a+0],m=s[a+1],v=s[a+2],M=s[a+3];if(p!==M||c!==d||u!==m||h!==v){let g=c*d+u*m+h*v+p*M;g<0&&(d=-d,m=-m,v=-v,M=-M,g=-g);let f=1-o;if(g<.9995){const x=Math.acos(g),b=Math.sin(x);f=Math.sin(f*x)/b,o=Math.sin(o*x)/b,c=c*f+d*o,u=u*f+m*o,h=h*f+v*o,p=p*f+M*o}else{c=c*f+d*o,u=u*f+m*o,h=h*f+v*o,p=p*f+M*o;const x=1/Math.sqrt(c*c+u*u+h*h+p*p);c*=x,u*=x,h*=x,p*=x}}e[n]=c,e[n+1]=u,e[n+2]=h,e[n+3]=p}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],c=i[r+1],u=i[r+2],h=i[r+3],p=s[a],d=s[a+1],m=s[a+2],v=s[a+3];return e[n]=o*v+h*p+c*m-u*d,e[n+1]=c*v+h*d+u*p-o*m,e[n+2]=u*v+h*m+o*d-c*p,e[n+3]=h*v-o*p-c*d-u*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,u=o(i/2),h=o(r/2),p=o(s/2),d=c(i/2),m=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=d*h*p+u*m*v,this._y=u*m*p-d*h*v,this._z=u*h*v+d*m*p,this._w=u*h*p-d*m*v;break;case"YXZ":this._x=d*h*p+u*m*v,this._y=u*m*p-d*h*v,this._z=u*h*v-d*m*p,this._w=u*h*p+d*m*v;break;case"ZXY":this._x=d*h*p-u*m*v,this._y=u*m*p+d*h*v,this._z=u*h*v+d*m*p,this._w=u*h*p-d*m*v;break;case"ZYX":this._x=d*h*p-u*m*v,this._y=u*m*p+d*h*v,this._z=u*h*v-d*m*p,this._w=u*h*p+d*m*v;break;case"YZX":this._x=d*h*p+u*m*v,this._y=u*m*p+d*h*v,this._z=u*h*v-d*m*p,this._w=u*h*p-d*m*v;break;case"XZY":this._x=d*h*p-u*m*v,this._y=u*m*p-d*h*v,this._z=u*h*v+d*m*p,this._w=u*h*p+d*m*v;break;default:je("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],c=n[9],u=n[2],h=n[6],p=n[10],d=i+o+p;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(i>o&&i>p){const m=2*Math.sqrt(1+i-o-p);this._w=(h-c)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>p){const m=2*Math.sqrt(1+o-i-p);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+p-i-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,c=n._y,u=n._z,h=n._w;return this._x=i*h+a*o+r*u-s*c,this._y=r*h+a*c+s*o-i*u,this._z=s*h+a*u+i*c-r*o,this._w=a*h-i*o-r*c-s*u,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let c=1-n;if(o<.9995){const u=Math.acos(o),h=Math.sin(u);c=Math.sin(c*u)/h,n=Math.sin(n*u)/h,this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+r*n,this._z=this._z*c+s*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const nh=class nh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Fp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Fp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,u=2*(a*r-o*i),h=2*(o*n-s*r),p=2*(s*i-a*n);return this.x=n+c*u+a*p-o*h,this.y=i+c*h+o*u-s*p,this.z=r+c*p+s*h-a*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,c=n.z;return this.x=r*c-s*o,this.y=s*a-i*c,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(rt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};nh.prototype.isVector3=!0;let q=nh;const Uc=new q,Fp=new ks,ih=class ih{constructor(e,n,i,r,s,a,o,c,u){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u)}set(e,n,i,r,s,a,o,c,u){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=n,h[4]=s,h[5]=c,h[6]=i,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],c=i[6],u=i[1],h=i[4],p=i[7],d=i[2],m=i[5],v=i[8],M=r[0],g=r[3],f=r[6],x=r[1],b=r[4],y=r[7],w=r[2],T=r[5],N=r[8];return s[0]=a*M+o*x+c*w,s[3]=a*g+o*b+c*T,s[6]=a*f+o*y+c*N,s[1]=u*M+h*x+p*w,s[4]=u*g+h*b+p*T,s[7]=u*f+h*y+p*N,s[2]=d*M+m*x+v*w,s[5]=d*g+m*b+v*T,s[8]=d*f+m*y+v*N,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8];return n*a*h-n*o*u-i*s*h+i*o*c+r*s*u-r*a*c}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=h*a-o*u,d=o*c-h*s,m=u*s-a*c,v=n*p+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/v;return e[0]=p*M,e[1]=(r*u-h*i)*M,e[2]=(o*i-r*a)*M,e[3]=d*M,e[4]=(h*n-r*c)*M,e[5]=(r*s-o*n)*M,e[6]=m*M,e[7]=(i*c-u*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*a+u*o)+a+e,-r*u,r*c,-r*(-u*a+c*o)+o+n,0,0,1),this}scale(e,n){return Es("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fc.makeScale(e,n)),this}rotate(e){return Es("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fc.makeRotation(-e)),this}translate(e,n){return Es("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ih.prototype.isMatrix3=!0;let Xe=ih;const Fc=new Xe,Op=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kp=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sy(){const t={enabled:!0,workingColorSpace:Rl,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ft&&(r.r=Ci(r.r),r.g=Ci(r.g),r.b=Ci(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ft&&(r.r=ws(r.r),r.g=ws(r.g),r.b=ws(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ki?Nl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Es("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Es("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Rl]:{primaries:e,whitePoint:i,transfer:Nl,toXYZ:Op,fromXYZ:kp,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:i,transfer:ft,toXYZ:Op,fromXYZ:kp,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),t}const it=sy();function Ci(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ws(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Vr;class ay{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Vr===void 0&&(Vr=Ll("canvas")),Vr.width=e.width,Vr.height=e.height;const r=Vr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Vr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ll("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ci(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ci(n[i]/255)*255):n[i]=Ci(n[i]);return{data:n,width:e.width,height:e.height}}else return je("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oy=0;class Zf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:oy++}),this.uuid=Ga(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Oc(r[a].image)):s.push(Oc(r[a]))}else s=Oc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Oc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?ay.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(je("Texture: Unable to serialize Texture."),{})}let ly=0;const kc=new q;class rn extends kr{constructor(e=rn.DEFAULT_IMAGE,n=rn.DEFAULT_MAPPING,i=Ei,r=Ei,s=Zt,a=br,o=jn,c=Nn,u=rn.DEFAULT_ANISOTROPY,h=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Ga(),this.name="",this.source=new Zf(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(kc).x}get height(){return this.source.getSize(kc).y}get depth(){return this.source.getSize(kc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){je(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){je(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ud:e.x=e.x-Math.floor(e.x);break;case Ei:e.x=e.x<0?0:1;break;case dd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ud:e.y=e.y-Math.floor(e.y);break;case Ei:e.y=e.y<0?0:1;break;case dd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=Jv;rn.DEFAULT_ANISOTROPY=1;const rh=class rh{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const c=e.elements,u=c[0],h=c[4],p=c[8],d=c[1],m=c[5],v=c[9],M=c[2],g=c[6],f=c[10];if(Math.abs(h-d)<.01&&Math.abs(p-M)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+M)<.1&&Math.abs(v+g)<.1&&Math.abs(u+m+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const b=(u+1)/2,y=(m+1)/2,w=(f+1)/2,T=(h+d)/4,N=(p+M)/4,S=(v+g)/4;return b>y&&b>w?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=T/i,s=N/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=S/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=N/s,r=S/s),this.set(i,r,s,n),this}let x=Math.sqrt((g-v)*(g-v)+(p-M)*(p-M)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(g-v)/x,this.y=(p-M)/x,this.z=(d-h)/x,this.w=Math.acos((u+m+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=rt(this.x,e.x,n.x),this.y=rt(this.y,e.y,n.y),this.z=rt(this.z,e.z,n.z),this.w=rt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=rt(this.x,e,n),this.y=rt(this.y,e,n),this.z=rt(this.z,e,n),this.w=rt(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(rt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};rh.prototype.isVector4=!0;let Ct=rh;class cy extends kr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Ct(0,0,e,n),this.scissorTest=!1,this.viewport=new Ct(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new rn(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Zf(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends cy{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class l0 extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uy extends rn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vt,this.minFilter=Vt,this.wrapR=Ei,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Il=class Il{constructor(e,n,i,r,s,a,o,c,u,h,p,d,m,v,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,c,u,h,p,d,m,v,M,g)}set(e,n,i,r,s,a,o,c,u,h,p,d,m,v,M,g){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=c,f[2]=u,f[6]=h,f[10]=p,f[14]=d,f[3]=m,f[7]=v,f[11]=M,f[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Il().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Gr.setFromMatrixColumn(e,0).length(),s=1/Gr.setFromMatrixColumn(e,1).length(),a=1/Gr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=a*h,m=a*p,v=o*h,M=o*p;n[0]=c*h,n[4]=-c*p,n[8]=u,n[1]=m+v*u,n[5]=d-M*u,n[9]=-o*c,n[2]=M-d*u,n[6]=v+m*u,n[10]=a*c}else if(e.order==="YXZ"){const d=c*h,m=c*p,v=u*h,M=u*p;n[0]=d+M*o,n[4]=v*o-m,n[8]=a*u,n[1]=a*p,n[5]=a*h,n[9]=-o,n[2]=m*o-v,n[6]=M+d*o,n[10]=a*c}else if(e.order==="ZXY"){const d=c*h,m=c*p,v=u*h,M=u*p;n[0]=d-M*o,n[4]=-a*p,n[8]=v+m*o,n[1]=m+v*o,n[5]=a*h,n[9]=M-d*o,n[2]=-a*u,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){const d=a*h,m=a*p,v=o*h,M=o*p;n[0]=c*h,n[4]=v*u-m,n[8]=d*u+M,n[1]=c*p,n[5]=M*u+d,n[9]=m*u-v,n[2]=-u,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){const d=a*c,m=a*u,v=o*c,M=o*u;n[0]=c*h,n[4]=M-d*p,n[8]=v*p+m,n[1]=p,n[5]=a*h,n[9]=-o*h,n[2]=-u*h,n[6]=m*p+v,n[10]=d-M*p}else if(e.order==="XZY"){const d=a*c,m=a*u,v=o*c,M=o*u;n[0]=c*h,n[4]=-p,n[8]=u*h,n[1]=d*p+M,n[5]=a*h,n[9]=m*p-v,n[2]=v*p-m,n[6]=o*h,n[10]=M*p+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dy,e,fy)}lookAt(e,n,i){const r=this.elements;return mn.subVectors(e,n),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),Hi.crossVectors(i,mn),Hi.lengthSq()===0&&(Math.abs(i.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),Hi.crossVectors(i,mn)),Hi.normalize(),po.crossVectors(mn,Hi),r[0]=Hi.x,r[4]=po.x,r[8]=mn.x,r[1]=Hi.y,r[5]=po.y,r[9]=mn.y,r[2]=Hi.z,r[6]=po.z,r[10]=mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],c=i[8],u=i[12],h=i[1],p=i[5],d=i[9],m=i[13],v=i[2],M=i[6],g=i[10],f=i[14],x=i[3],b=i[7],y=i[11],w=i[15],T=r[0],N=r[4],S=r[8],P=r[12],L=r[1],I=r[5],B=r[9],V=r[13],k=r[2],j=r[6],te=r[10],K=r[14],G=r[3],H=r[7],A=r[11],C=r[15];return s[0]=a*T+o*L+c*k+u*G,s[4]=a*N+o*I+c*j+u*H,s[8]=a*S+o*B+c*te+u*A,s[12]=a*P+o*V+c*K+u*C,s[1]=h*T+p*L+d*k+m*G,s[5]=h*N+p*I+d*j+m*H,s[9]=h*S+p*B+d*te+m*A,s[13]=h*P+p*V+d*K+m*C,s[2]=v*T+M*L+g*k+f*G,s[6]=v*N+M*I+g*j+f*H,s[10]=v*S+M*B+g*te+f*A,s[14]=v*P+M*V+g*K+f*C,s[3]=x*T+b*L+y*k+w*G,s[7]=x*N+b*I+y*j+w*H,s[11]=x*S+b*B+y*te+w*A,s[15]=x*P+b*V+y*K+w*C,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],u=e[13],h=e[2],p=e[6],d=e[10],m=e[14],v=e[3],M=e[7],g=e[11],f=e[15],x=c*m-u*d,b=o*m-u*p,y=o*d-c*p,w=a*m-u*h,T=a*d-c*h,N=a*p-o*h;return n*(M*x-g*b+f*y)-i*(v*x-g*w+f*T)+r*(v*b-M*w+f*N)-s*(v*y-M*T+g*N)}determinantAffine(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],u=e[6],h=e[10];return n*(a*h-o*u)-i*(s*h-o*c)+r*(s*u-a*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],u=e[7],h=e[8],p=e[9],d=e[10],m=e[11],v=e[12],M=e[13],g=e[14],f=e[15],x=n*o-i*a,b=n*c-r*a,y=n*u-s*a,w=i*c-r*o,T=i*u-s*o,N=r*u-s*c,S=h*M-p*v,P=h*g-d*v,L=h*f-m*v,I=p*g-d*M,B=p*f-m*M,V=d*f-m*g,k=x*V-b*B+y*I+w*L-T*P+N*S;if(k===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const j=1/k;return e[0]=(o*V-c*B+u*I)*j,e[1]=(r*B-i*V-s*I)*j,e[2]=(M*N-g*T+f*w)*j,e[3]=(d*T-p*N-m*w)*j,e[4]=(c*L-a*V-u*P)*j,e[5]=(n*V-r*L+s*P)*j,e[6]=(g*y-v*N-f*b)*j,e[7]=(h*N-d*y+m*b)*j,e[8]=(a*B-o*L+u*S)*j,e[9]=(i*L-n*B-s*S)*j,e[10]=(v*T-M*y+f*x)*j,e[11]=(p*y-h*T-m*x)*j,e[12]=(o*P-a*I-c*S)*j,e[13]=(n*I-i*P+r*S)*j,e[14]=(M*b-v*w-g*x)*j,e[15]=(h*w-p*b+d*x)*j,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,c=e.z,u=s*a,h=s*o;return this.set(u*a+i,u*o-r*c,u*c+r*o,0,u*o+r*c,h*o+i,h*c-r*a,0,u*c-r*o,h*c+r*a,s*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,c=n._w,u=s+s,h=a+a,p=o+o,d=s*u,m=s*h,v=s*p,M=a*h,g=a*p,f=o*p,x=c*u,b=c*h,y=c*p,w=i.x,T=i.y,N=i.z;return r[0]=(1-(M+f))*w,r[1]=(m+y)*w,r[2]=(v-b)*w,r[3]=0,r[4]=(m-y)*T,r[5]=(1-(d+f))*T,r[6]=(g+x)*T,r[7]=0,r[8]=(v+b)*N,r[9]=(g-x)*N,r[10]=(1-(d+M))*N,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Gr.set(r[0],r[1],r[2]).length();const o=Gr.set(r[4],r[5],r[6]).length(),c=Gr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),On.copy(this);const u=1/a,h=1/o,p=1/c;return On.elements[0]*=u,On.elements[1]*=u,On.elements[2]*=u,On.elements[4]*=h,On.elements[5]*=h,On.elements[6]*=h,On.elements[8]*=p,On.elements[9]*=p,On.elements[10]*=p,n.setFromRotationMatrix(On),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,r,s,a,o=oi,c=!1){const u=this.elements,h=2*s/(n-e),p=2*s/(i-r),d=(n+e)/(n-e),m=(i+r)/(i-r);let v,M;if(c)v=s/(a-s),M=a*s/(a-s);else if(o===oi)v=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Pl)v=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=d,u[12]=0,u[1]=0,u[5]=p,u[9]=m,u[13]=0,u[2]=0,u[6]=0,u[10]=v,u[14]=M,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=oi,c=!1){const u=this.elements,h=2/(n-e),p=2/(i-r),d=-(n+e)/(n-e),m=-(i+r)/(i-r);let v,M;if(c)v=1/(a-s),M=a/(a-s);else if(o===oi)v=-2/(a-s),M=-(a+s)/(a-s);else if(o===Pl)v=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return u[0]=h,u[4]=0,u[8]=0,u[12]=d,u[1]=0,u[5]=p,u[9]=0,u[13]=m,u[2]=0,u[6]=0,u[10]=v,u[14]=M,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Il.prototype.isMatrix4=!0;let At=Il;const Gr=new q,On=new At,dy=new q(0,0,0),fy=new q(1,1,1),Hi=new q,po=new q,mn=new q,Bp=new At,zp=new ks;class Ur{constructor(e=0,n=0,i=0,r=Ur.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],u=r[5],h=r[9],p=r[2],d=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-rt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-rt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(rt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,m),this._y=0);break;default:je("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Bp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return zp.setFromEuler(this),this.setFromQuaternion(zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ur.DEFAULT_ORDER="XYZ";class Qf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hy=0;const Hp=new q,jr=new ks,hi=new At,mo=new q,$s=new q,py=new q,my=new ks,Vp=new q(1,0,0),Gp=new q(0,1,0),jp=new q(0,0,1),Wp={type:"added"},gy={type:"removed"},Wr={type:"childadded",child:null},Bc={type:"childremoved",child:null};class pn extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=Ga(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new q,n=new Ur,i=new ks,r=new q(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new At},normalMatrix:{value:new Xe}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,n){return jr.setFromAxisAngle(e,n),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(Vp,e)}rotateY(e){return this.rotateOnAxis(Gp,e)}rotateZ(e){return this.rotateOnAxis(jp,e)}translateOnAxis(e,n){return Hp.copy(e).applyQuaternion(this.quaternion),this.position.add(Hp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Vp,e)}translateY(e){return this.translateOnAxis(Gp,e)}translateZ(e){return this.translateOnAxis(jp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?mo.copy(e):mo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),$s.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt($s,mo,this.up):hi.lookAt(mo,$s,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),jr.setFromRotationMatrix(hi),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wp),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null):ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(gy),Bc.child=e,this.dispatchEvent(Bc),Bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wp),Wr.child=e,this.dispatchEvent(Wr),Wr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,e,py),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($s,my,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let u=0,h=c.length;u<h;u++){const p=c[u];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,u=this.material.length;c<u;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(n){const o=a(e.geometries),c=a(e.materials),u=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),h.length>0&&(i.images=h),p.length>0&&(i.shapes=p),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(o){const c=[];for(const u in o){const h=o[u];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}pn.DEFAULT_UP=new q(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class aa extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vy={type:"move"};class zc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new aa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new aa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new aa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){a=!0;for(const M of e.hand.values()){const g=n.getJointPose(M,i),f=this._getHandJoint(u,M);g!==null&&(f.matrix.fromArray(g.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=g.radius),f.visible=g!==null}const h=u.joints["index-finger-tip"],p=u.joints["thumb-tip"],d=h.position.distanceTo(p.position),m=.02,v=.005;u.inputState.pinching&&d>m+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=m-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(vy)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new aa;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const c0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},go={h:0,s:0,l:0};function Hc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,it.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=it.workingColorSpace){return this.r=e,this.g=n,this.b=i,it.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=it.workingColorSpace){if(e=ry(e,1),n=rt(n,0,1),i=rt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=Hc(a,s,e+1/3),this.g=Hc(a,s,e),this.b=Hc(a,s,e-1/3)}return it.colorSpaceToWorking(this,r),this}setStyle(e,n=Tn){function i(s){s!==void 0&&parseFloat(s)<1&&je("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:je("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);je("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Tn){const i=c0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):je("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ci(e.r),this.g=Ci(e.g),this.b=Ci(e.b),this}copyLinearToSRGB(e){return this.r=ws(e.r),this.g=ws(e.g),this.b=ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return it.workingToColorSpace($t.copy(this),e),Math.round(rt($t.r*255,0,255))*65536+Math.round(rt($t.g*255,0,255))*256+Math.round(rt($t.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=it.workingColorSpace){it.workingToColorSpace($t.copy(this),n);const i=$t.r,r=$t.g,s=$t.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let c,u;const h=(o+a)/2;if(o===a)c=0,u=0;else{const p=a-o;switch(u=h<=.5?p/(a+o):p/(2-a-o),a){case i:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-i)/p+2;break;case s:c=(i-r)/p+4;break}c/=6}return e.h=c,e.s=u,e.l=h,e}getRGB(e,n=it.workingColorSpace){return it.workingToColorSpace($t.copy(this),n),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=Tn){it.workingToColorSpace($t.copy(this),e);const n=$t.r,i=$t.g,r=$t.b;return e!==Tn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(go);const i=Dc(Vi.h,go.h,n),r=Dc(Vi.s,go.s,n),s=Dc(Vi.l,go.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new qe;qe.NAMES=c0;class xy extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ur,this.environmentIntensity=1,this.environmentRotation=new Ur,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}}const kn=new q,pi=new q,Vc=new q,mi=new q,Xr=new q,qr=new q,Xp=new q,Gc=new q,jc=new q,Wc=new q,Xc=new Ct,qc=new Ct,Yc=new Ct;class Gn{constructor(e=new q,n=new q,i=new q){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),pi.subVectors(i,n),Vc.subVectors(e,n);const a=kn.dot(kn),o=kn.dot(pi),c=kn.dot(Vc),u=pi.dot(pi),h=pi.dot(Vc),p=a*u-o*o;if(p===0)return s.set(0,0,0),null;const d=1/p,m=(u*c-o*h)*d,v=(a*h-o*c)*d;return s.set(1-m-v,v,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,n,i,r,s,a,o,c){return this.getBarycoord(e,n,i,r,mi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,mi.x),c.addScaledVector(a,mi.y),c.addScaledVector(o,mi.z),c)}static getInterpolatedAttribute(e,n,i,r,s,a){return Xc.setScalar(0),qc.setScalar(0),Yc.setScalar(0),Xc.fromBufferAttribute(e,n),qc.fromBufferAttribute(e,i),Yc.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Xc,s.x),a.addScaledVector(qc,s.y),a.addScaledVector(Yc,s.z),a}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),pi.subVectors(e,n),kn.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),kn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Gn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Gn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Gn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Gn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Gn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Xr.subVectors(r,i),qr.subVectors(s,i),Gc.subVectors(e,i);const c=Xr.dot(Gc),u=qr.dot(Gc);if(c<=0&&u<=0)return n.copy(i);jc.subVectors(e,r);const h=Xr.dot(jc),p=qr.dot(jc);if(h>=0&&p<=h)return n.copy(r);const d=c*p-h*u;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),n.copy(i).addScaledVector(Xr,a);Wc.subVectors(e,s);const m=Xr.dot(Wc),v=qr.dot(Wc);if(v>=0&&m<=v)return n.copy(s);const M=m*u-c*v;if(M<=0&&u>=0&&v<=0)return o=u/(u-v),n.copy(i).addScaledVector(qr,o);const g=h*v-m*p;if(g<=0&&p-h>=0&&m-v>=0)return Xp.subVectors(s,r),o=(p-h)/(p-h+(m-v)),n.copy(r).addScaledVector(Xp,o);const f=1/(g+M+d);return a=M*f,o=d*f,n.copy(i).addScaledVector(Xr,a).addScaledVector(qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ja{constructor(e=new q(1/0,1/0,1/0),n=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Bn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Bn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Bn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(s,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),vo.copy(i.boundingBox)),vo.applyMatrix4(e.matrixWorld),this.union(vo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ks),xo.subVectors(this.max,Ks),Yr.subVectors(e.a,Ks),$r.subVectors(e.b,Ks),Kr.subVectors(e.c,Ks),Gi.subVectors($r,Yr),ji.subVectors(Kr,$r),hr.subVectors(Yr,Kr);let n=[0,-Gi.z,Gi.y,0,-ji.z,ji.y,0,-hr.z,hr.y,Gi.z,0,-Gi.x,ji.z,0,-ji.x,hr.z,0,-hr.x,-Gi.y,Gi.x,0,-ji.y,ji.x,0,-hr.y,hr.x,0];return!$c(n,Yr,$r,Kr,xo)||(n=[1,0,0,0,1,0,0,0,1],!$c(n,Yr,$r,Kr,xo))?!1:(_o.crossVectors(Gi,ji),n=[_o.x,_o.y,_o.z],$c(n,Yr,$r,Kr,xo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gi=[new q,new q,new q,new q,new q,new q,new q,new q],Bn=new q,vo=new ja,Yr=new q,$r=new q,Kr=new q,Gi=new q,ji=new q,hr=new q,Ks=new q,xo=new q,_o=new q,pr=new q;function $c(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){pr.fromArray(t,s);const o=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),c=e.dot(pr),u=n.dot(pr),h=i.dot(pr);if(Math.max(-Math.max(c,u,h),Math.min(c,u,h))>o)return!1}return!0}const Lt=new q,So=new ct;let _y=0;class _n extends kr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_y++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=JS,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)So.fromBufferAttribute(this,n),So.applyMatrix3(e),this.setXY(n,So.x,So.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ys(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ys(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ys(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ys(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ys(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class u0 extends _n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class d0 extends _n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ai extends _n{constructor(e,n,i){super(new Float32Array(e),n,i)}}const Sy=new ja,Zs=new q,Kc=new q;class Zl{constructor(e=new q,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Sy.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zs.subVectors(e,this.center);const n=Zs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Zs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zs.copy(e.center).add(Kc)),this.expandByPoint(Zs.copy(e.center).sub(Kc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let yy=0;const wn=new At,Zc=new pn,Zr=new q,gn=new ja,Qs=new ja,kt=new q;class Kn extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Ga(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ey(e)?d0:u0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return wn.makeRotationFromQuaternion(e),this.applyMatrix4(wn),this}rotateX(e){return wn.makeRotationX(e),this.applyMatrix4(wn),this}rotateY(e){return wn.makeRotationY(e),this.applyMatrix4(wn),this}rotateZ(e){return wn.makeRotationZ(e),this.applyMatrix4(wn),this}translate(e,n,i){return wn.makeTranslation(e,n,i),this.applyMatrix4(wn),this}scale(e,n,i){return wn.makeScale(e,n,i),this.applyMatrix4(wn),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ai(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&je("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ja);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];gn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zl);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const i=this.boundingSphere.center;if(gn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(gn.min,Qs.min),gn.expandByPoint(kt),kt.addVectors(gn.max,Qs.max),gn.expandByPoint(kt)):(gn.expandByPoint(Qs.min),gn.expandByPoint(Qs.max))}gn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],c=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)kt.fromBufferAttribute(o,u),c&&(Zr.fromBufferAttribute(e,u),kt.add(Zr)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new _n(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let S=0;S<i.count;S++)o[S]=new q,c[S]=new q;const u=new q,h=new q,p=new q,d=new ct,m=new ct,v=new ct,M=new q,g=new q;function f(S,P,L){u.fromBufferAttribute(i,S),h.fromBufferAttribute(i,P),p.fromBufferAttribute(i,L),d.fromBufferAttribute(s,S),m.fromBufferAttribute(s,P),v.fromBufferAttribute(s,L),h.sub(u),p.sub(u),m.sub(d),v.sub(d);const I=1/(m.x*v.y-v.x*m.y);isFinite(I)&&(M.copy(h).multiplyScalar(v.y).addScaledVector(p,-m.y).multiplyScalar(I),g.copy(p).multiplyScalar(m.x).addScaledVector(h,-v.x).multiplyScalar(I),o[S].add(M),o[P].add(M),o[L].add(M),c[S].add(g),c[P].add(g),c[L].add(g))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let S=0,P=x.length;S<P;++S){const L=x[S],I=L.start,B=L.count;for(let V=I,k=I+B;V<k;V+=3)f(e.getX(V+0),e.getX(V+1),e.getX(V+2))}const b=new q,y=new q,w=new q,T=new q;function N(S){w.fromBufferAttribute(r,S),T.copy(w);const P=o[S];b.copy(P),b.sub(w.multiplyScalar(w.dot(P))).normalize(),y.crossVectors(T,P);const I=y.dot(c[S])<0?-1:1;a.setXYZW(S,b.x,b.y,b.z,I)}for(let S=0,P=x.length;S<P;++S){const L=x[S],I=L.start,B=L.count;for(let V=I,k=I+B;V<k;V+=3)N(e.getX(V+0)),N(e.getX(V+1)),N(e.getX(V+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new _n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new q,s=new q,a=new q,o=new q,c=new q,u=new q,h=new q,p=new q;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),M=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(n,v),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,g),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(i,v),c.fromBufferAttribute(i,M),u.fromBufferAttribute(i,g),o.add(h),c.add(h),u.add(h),i.setXYZ(v,o.x,o.y,o.z),i.setXYZ(M,c.x,c.y,c.z),i.setXYZ(g,u.x,u.y,u.z)}else for(let d=0,m=n.count;d<m;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(o,c){const u=o.array,h=o.itemSize,p=o.normalized,d=new u.constructor(c.length*h);let m=0,v=0;for(let M=0,g=c.length;M<g;M++){o.isInterleavedBufferAttribute?m=c[M]*o.data.stride+o.offset:m=c[M]*h;for(let f=0;f<h;f++)d[v++]=u[m++]}return new _n(d,h,p)}if(this.index===null)return je("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Kn,i=this.index.array,r=this.attributes;for(const o in r){const c=r[o],u=e(c,i);n.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const c=[],u=s[o];for(let h=0,p=u.length;h<p;h++){const d=u[h],m=e(d,i);c.push(m)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const u=a[o];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],h=[];for(let p=0,d=u.length;p<d;p++){const m=u[p];h.push(m.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const h=r[u];this.setAttribute(u,h.clone(n))}const s=e.morphAttributes;for(const u in s){const h=[],p=s[u];for(let d=0,m=p.length;d<m;d++)h.push(p[d].clone(n));this.morphAttributes[u]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let u=0,h=a.length;u<h;u++){const p=a[u];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qc=new q,My=new q,by=new Xe;class Si{constructor(e=new q(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Qc.subVectors(i,n).cross(My.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(Qc),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||by.getNormalMatrix(e),r=this.coplanarPoint(Qc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Ey=0;class Wa extends kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ey++}),this.uuid=Ga(),this.name="",this.type="Material",this.blending=bs,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gv,this.blendDst=jv,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=XS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Lc,this.stencilZFail=Lc,this.stencilZPass=Lc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){je(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){je(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector2&&i&&i.isVector2||r&&r.isEuler&&i&&i.isEuler||r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new qe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Si().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ct().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vi=new q,Jc=new q,yo=new q,Mo=new q;class Jf{constructor(e=new q,n=new q(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=vi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(vi.copy(this.origin).addScaledVector(this.direction,n),vi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Jc.copy(e).add(n).multiplyScalar(.5),yo.copy(n).sub(e).normalize(),Mo.copy(this.origin).sub(Jc);const s=e.distanceTo(n)*.5,a=-this.direction.dot(yo),o=Mo.dot(this.direction),c=-Mo.dot(yo),u=Mo.lengthSq(),h=Math.abs(1-a*a);let p,d,m,v;if(h>0)if(p=a*c-o,d=a*o-c,v=s*h,p>=0)if(d>=-v)if(d<=v){const M=1/h;p*=M,d*=M,m=p*(p+a*d+2*o)+d*(a*p+d+2*c)+u}else d=s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+u;else d=-s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+u;else d<=-v?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-c),s),m=-p*p+d*(d+2*c)+u):d<=v?(p=0,d=Math.min(Math.max(-s,-c),s),m=d*(d+2*c)+u):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-c),s),m=-p*p+d*(d+2*c)+u);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),m=-p*p+d*(d+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Jc).addScaledVector(yo,d),m}intersectSphere(e,n){if(e.radius<0)return null;vi.subVectors(e.center,this.origin);const i=vi.dot(this.direction),r=vi.dot(vi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,c;const u=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),i>c||o>r)||((o>i||i!==i)&&(i=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,vi)!==null}intersectTriangle(e,n,i,r,s){const a=this.origin,o=this.direction,c=o.x,u=o.y,h=o.z,p=e.x-a.x,d=e.y-a.y,m=e.z-a.z,v=n.x-a.x,M=n.y-a.y,g=n.z-a.z,f=i.x-a.x,x=i.y-a.y,b=i.z-a.z,y=Math.abs(c),w=Math.abs(u),T=Math.abs(h);let N,S,P,L,I,B,V,k,j,te,K,G;if(y>=w&&y>=T?(P=c,B=p,j=v,G=f,c>=0?(N=u,S=h,L=d,I=m,V=M,k=g,te=x,K=b):(N=h,S=u,L=m,I=d,V=g,k=M,te=b,K=x)):w>=T?(P=u,B=d,j=M,G=x,u>=0?(N=h,S=c,L=m,I=p,V=g,k=v,te=b,K=f):(N=c,S=h,L=p,I=m,V=v,k=g,te=f,K=b)):(P=h,B=m,j=g,G=b,h>=0?(N=c,S=u,L=p,I=d,V=v,k=M,te=f,K=x):(N=u,S=c,L=d,I=p,V=M,k=v,te=x,K=f)),P===0)return null;const H=N/P,A=S/P,C=1/P,Q=L-H*B,re=I-A*B,pe=V-H*j,he=k-A*j,me=te-H*G,O=K-A*G,$=me*he-O*pe,le=Q*O-re*me,we=pe*re-he*Q;if(r){if($<0||le<0||we<0)return null}else if(($<0||le<0||we<0)&&($>0||le>0||we>0))return null;const oe=$+le+we;if(oe===0)return null;const Ne=C*($*B+le*j+we*G);return(oe>0?Ne<0:Ne>0)?null:this.at(Ne/oe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class f0 extends Wa{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ur,this.combine=Wv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const qp=new At,mr=new Jf,bo=new Zl,Yp=new q,Eo=new q,wo=new q,To=new q,eu=new q,Co=new q,$p=new q,Ao=new q;class Di extends pn{constructor(e=new Kn,n=new f0){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Co.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const h=o[c],p=s[c];h!==0&&(eu.fromBufferAttribute(p,e),a?Co.addScaledVector(eu,h):Co.addScaledVector(eu.sub(n),h))}n.add(Co)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(bo.containsPoint(mr.origin)===!1&&(mr.intersectSphere(bo,Yp)===null||mr.origin.distanceToSquared(Yp)>(e.far-e.near)**2))&&(qp.copy(s).invert(),mr.copy(e.ray).applyMatrix4(qp),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,u=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const g=d[v],f=a[g.materialIndex],x=Math.max(g.start,m.start),b=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let y=x,w=b;y<w;y+=3){const T=o.getX(y),N=o.getX(y+1),S=o.getX(y+2);r=Ro(this,f,e,i,u,h,p,T,N,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let g=v,f=M;g<f;g+=3){const x=o.getX(g),b=o.getX(g+1),y=o.getX(g+2);r=Ro(this,a,e,i,u,h,p,x,b,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,M=d.length;v<M;v++){const g=d[v],f=a[g.materialIndex],x=Math.max(g.start,m.start),b=Math.min(c.count,Math.min(g.start+g.count,m.start+m.count));for(let y=x,w=b;y<w;y+=3){const T=y,N=y+1,S=y+2;r=Ro(this,f,e,i,u,h,p,T,N,S),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const v=Math.max(0,m.start),M=Math.min(c.count,m.start+m.count);for(let g=v,f=M;g<f;g+=3){const x=g,b=g+1,y=g+2;r=Ro(this,a,e,i,u,h,p,x,b,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function wy(t,e,n,i,r,s,a,o){let c;if(e.side===hn?c=i.intersectTriangle(a,s,r,!0,o):c=i.intersectTriangle(r,s,a,e.side===Lr,o),c===null)return null;Ao.copy(o),Ao.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Ao);return u<n.near||u>n.far?null:{distance:u,point:Ao.clone(),object:t}}function Ro(t,e,n,i,r,s,a,o,c,u){t.getVertexPosition(o,Eo),t.getVertexPosition(c,wo),t.getVertexPosition(u,To);const h=wy(t,e,n,i,Eo,wo,To,$p);if(h){const p=new q;Gn.getBarycoord($p,Eo,wo,To,p),r&&(h.uv=Gn.getInterpolatedAttribute(r,o,c,u,p,new ct)),s&&(h.uv1=Gn.getInterpolatedAttribute(s,o,c,u,p,new ct)),a&&(h.normal=Gn.getInterpolatedAttribute(a,o,c,u,p,new q),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:u,normal:new q,materialIndex:0};Gn.getNormal(Eo,wo,To,d.normal),h.face=d,h.barycoord=p}return h}class Ty extends rn{constructor(e=null,n=1,i=1,r,s,a,o,c,u=Vt,h=Vt,p,d){super(null,a,o,c,u,h,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const gr=new Zl,Cy=new ct(.5,.5),No=new q;class h0{constructor(e=new Si,n=new Si,i=new Si,r=new Si,s=new Si,a=new Si){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],u=s[3],h=s[4],p=s[5],d=s[6],m=s[7],v=s[8],M=s[9],g=s[10],f=s[11],x=s[12],b=s[13],y=s[14],w=s[15];if(r[0].setComponents(u-a,m-h,f-v,w-x).normalize(),r[1].setComponents(u+a,m+h,f+v,w+x).normalize(),r[2].setComponents(u+o,m+p,f+M,w+b).normalize(),r[3].setComponents(u-o,m-p,f-M,w-b).normalize(),i)r[4].setComponents(c,d,g,y).normalize(),r[5].setComponents(u-c,m-d,f-g,w-y).normalize();else if(r[4].setComponents(u-c,m-d,f-g,w-y).normalize(),n===oi)r[5].setComponents(u+c,m+d,f+g,w+y).normalize();else if(n===Pl)r[5].setComponents(c,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);const n=Cy.distanceTo(e.center);return gr.radius=.7071067811865476+n,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(No.x=r.normal.x>0?e.max.x:e.min.x,No.y=r.normal.y>0?e.max.y:e.min.y,No.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(No)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ay extends Wa{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Kp=new At,Gd=new Jf,Po=new Zl,Lo=new q;class Ry extends pn{constructor(e=new Kn,n=new Ay){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Po.copy(i.boundingSphere),Po.applyMatrix4(r),Po.radius+=s,e.ray.intersectsSphere(Po)===!1)return;Kp.copy(r).invert(),Gd.copy(e.ray).applyMatrix4(Kp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,u=i.index,p=i.attributes.position;if(u!==null){const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let v=d,M=m;v<M;v++){const g=u.getX(v);Lo.fromBufferAttribute(p,g),Zp(Lo,g,c,r,e,n,this)}}else{const d=Math.max(0,a.start),m=Math.min(p.count,a.start+a.count);for(let v=d,M=m;v<M;v++)Lo.fromBufferAttribute(p,v),Zp(Lo,v,c,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Zp(t,e,n,i,r,s,a){const o=Gd.distanceSqToPoint(t);if(o<n){const c=new q;Gd.closestPointToPoint(t,c),c.applyMatrix4(i);const u=r.ray.origin.distanceTo(c);if(u<r.near||u>r.far)return;s.push({distance:u,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class p0 extends rn{constructor(e=[],n=Ir,i,r,s,a,o,c,u,h){super(e,n,i,r,s,a,o,c,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Oa extends rn{constructor(e,n,i=di,r,s,a,o=Vt,c=Vt,u,h=Ii,p=1){if(h!==Ii&&h!==Er)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:n,depth:p};super(d,r,s,a,o,c,h,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Zf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}}class Ny extends Oa{constructor(e,n=di,i=Ir,r,s,a=Vt,o=Vt,c,u=Ii){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,n,i,r,s,a,o,c,u),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class m0 extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Xa extends Kn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],u=[],h=[],p=[];let d=0,m=0;v("z","y","x",-1,-1,i,n,e,a,s,0),v("z","y","x",1,-1,i,n,-e,a,s,1),v("x","z","y",1,1,e,i,n,r,a,2),v("x","z","y",1,-1,e,i,-n,r,a,3),v("x","y","z",1,-1,e,n,i,r,s,4),v("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new Ai(u,3)),this.setAttribute("normal",new Ai(h,3)),this.setAttribute("uv",new Ai(p,2));function v(M,g,f,x,b,y,w,T,N,S,P){const L=y/N,I=w/S,B=y/2,V=w/2,k=T/2,j=N+1,te=S+1;let K=0,G=0;const H=new q;for(let A=0;A<te;A++){const C=A*I-V;for(let Q=0;Q<j;Q++){const re=Q*L-B;H[M]=re*x,H[g]=C*b,H[f]=k,u.push(H.x,H.y,H.z),H[M]=0,H[g]=0,H[f]=T>0?1:-1,h.push(H.x,H.y,H.z),p.push(Q/N),p.push(1-A/S),K+=1}}for(let A=0;A<S;A++)for(let C=0;C<N;C++){const Q=d+C+j*A,re=d+C+j*(A+1),pe=d+(C+1)+j*(A+1),he=d+(C+1)+j*A;c.push(Q,re,he),c.push(re,pe,he),G+=6}o.addGroup(m,G,P),m+=G,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Ql extends Kn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),c=Math.floor(r),u=o+1,h=c+1,p=e/o,d=n/c,m=[],v=[],M=[],g=[];for(let f=0;f<h;f++){const x=f*d-a;for(let b=0;b<u;b++){const y=b*p-s;v.push(y,-x,0),M.push(0,0,1),g.push(b/o),g.push(1-f/c)}}for(let f=0;f<c;f++)for(let x=0;x<o;x++){const b=x+u*f,y=x+u*(f+1),w=x+1+u*(f+1),T=x+1+u*f;m.push(b,y,T),m.push(y,w,T)}this.setIndex(m),this.setAttribute("position",new Ai(v,3)),this.setAttribute("normal",new Ai(M,3)),this.setAttribute("uv",new Ai(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.width,e.height,e.widthSegments,e.heightSegments)}}function Ds(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(Qp(r))r.isRenderTargetTexture?(je("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(Qp(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function en(t){const e={};for(let n=0;n<t.length;n++){const i=Ds(t[n]);for(const r in i)e[r]=i[r]}return e}function Qp(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function Py(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function g0(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:it.workingColorSpace}const Ly={clone:Ds,merge:en};var Iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Wa{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Iy,this.fragmentShader=Dy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ds(e.uniforms),this.uniformsGroups=Py(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const i in e.uniforms){const r=e.uniforms[i];switch(this.uniforms[i]={},r.type){case"t":this.uniforms[i].value=n[r.value]||null;break;case"c":this.uniforms[i].value=new qe().setHex(r.value);break;case"v2":this.uniforms[i].value=new ct().fromArray(r.value);break;case"v3":this.uniforms[i].value=new q().fromArray(r.value);break;case"v4":this.uniforms[i].value=new Ct().fromArray(r.value);break;case"m3":this.uniforms[i].value=new Xe().fromArray(r.value);break;case"m4":this.uniforms[i].value=new At().fromArray(r.value);break;default:this.uniforms[i].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Uy extends $n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Fy extends Wa{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Oy extends Wa{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Io=new q,Do=new ks,ei=new q;class v0 extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Io,Do,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,Do,ei.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Io,Do,ei),ei.x===1&&ei.y===1&&ei.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,Do,ei.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Wi=new q,Jp=new ct,em=new ct;class Rn extends v0{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Vd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ic*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Vd*2*Math.atan(Math.tan(Ic*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,n){return this.getViewBounds(e,Jp,em),n.subVectors(em,Jp)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ic*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/c,n-=a.offsetY*i/u,r*=a.width/c,i*=a.height/u}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class x0 extends v0{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,c=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Qr=-90,Jr=1;class ky extends pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(Qr,Jr,e,n);r.layers=this.layers,this.add(r);const s=new Rn(Qr,Jr,e,n);s.layers=this.layers,this.add(s);const a=new Rn(Qr,Jr,e,n);a.layers=this.layers,this.add(a);const o=new Rn(Qr,Jr,e,n);o.layers=this.layers,this.add(o);const c=new Rn(Qr,Jr,e,n);c.layers=this.layers,this.add(c);const u=new Rn(Qr,Jr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,c]=n;for(const u of n)this.remove(u);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Pl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,u,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,u),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(p,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class By extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const tm=new At;class zy{constructor(e,n,i=0,r=1/0){this.ray=new Jf(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Qf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):ot("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return tm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tm),this}intersectObject(e,n=!0,i=[]){return jd(e,this,i,n),i.sort(nm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)jd(e[r],this,i,n);return i.sort(nm),i}}function nm(t,e){return t.distance-e.distance}function jd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let a=0,o=s.length;a<o;a++)jd(s[a],e,n,!0)}}class Hy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,je("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const sh=class sh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};sh.prototype.isMatrix2=!0;let im=sh;function rm(t,e,n,i){const r=Vy(i);switch(n){case r0:return t*e;case a0:return t*e/r.components*r.byteLength;case Xf:return t*e/r.components*r.byteLength;case Dr:return t*e*2/r.components*r.byteLength;case qf:return t*e*2/r.components*r.byteLength;case s0:return t*e*3/r.components*r.byteLength;case jn:return t*e*4/r.components*r.byteLength;case Yf:return t*e*4/r.components*r.byteLength;case Zo:case Qo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Jo:case el:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case hd:case md:return Math.max(t,16)*Math.max(e,8)/4;case fd:case pd:return Math.max(t,8)*Math.max(e,8)/2;case gd:case vd:case _d:case Sd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xd:case Cl:case yd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Md:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ed:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case wd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Td:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Cd:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ad:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Rd:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Nd:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Id:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Dd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Ud:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Fd:case Od:case kd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Bd:case zd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Al:case Hd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Vy(t){switch(t){case Nn:case e0:return{byteLength:1,components:1};case Ua:case t0:case fi:return{byteLength:2,components:1};case jf:case Wf:return{byteLength:2,components:4};case di:case Gf:case ai:return{byteLength:4,components:1};case n0:case i0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vf}}));typeof window<"u"&&(window.__THREE__?je("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _0(){let t=null,e=!1,n=null,i=null;function r(s,a){i=t.requestAnimationFrame(r),n(s,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function Gy(t){const e=new WeakMap;function n(o,c){const u=o.array,h=o.usage,p=u.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)m=t.HALF_FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=t.SHORT;else if(u instanceof Uint32Array)m=t.UNSIGNED_INT;else if(u instanceof Int32Array)m=t.INT;else if(u instanceof Int8Array)m=t.BYTE;else if(u instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:p}}function i(o,c,u){const h=c.array,p=c.updateRanges;if(t.bindBuffer(u,o),p.length===0)t.bufferSubData(u,0,h);else{p.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<p.length;m++){const v=p[d],M=p[m];M.start<=v.start+v.count+1?v.count=Math.max(v.count,M.start+M.count-v.start):(++d,p[d]=M)}p.length=d+1;for(let m=0,v=p.length;m<v;m++){const M=p[m];t.bufferSubData(u,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=e.get(o);if(u===void 0)e.set(o,n(o,c));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,o,c),u.version=o.version}}return{get:r,remove:s,update:a}}var jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Wy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Xy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ky=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Qy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Jy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,tM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,nM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,rM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,oM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,lM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,uM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,dM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,fM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,hM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,pM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,mM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,gM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SM="gl_FragColor = linearToOutputTexel( gl_FragColor );",yM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,MM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,bM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,wM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,DM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,UM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,FM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,OM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,BM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,HM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,VM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,GM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,jM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,WM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,YM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,KM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,JM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,eb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,nb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ib=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ab=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ob=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,cb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ub=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,db=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,hb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,pb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,mb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,gb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,vb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_b=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Sb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,bb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Eb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,wb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Tb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Cb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ab=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Rb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Nb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Pb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Lb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ib=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Db=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ub=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ob=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Bb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Wb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Zb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Qb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Jb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,eE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,tE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,cE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,dE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,fE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,_E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,SE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ME=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,et={alphahash_fragment:jy,alphahash_pars_fragment:Wy,alphamap_fragment:Xy,alphamap_pars_fragment:qy,alphatest_fragment:Yy,alphatest_pars_fragment:$y,aomap_fragment:Ky,aomap_pars_fragment:Zy,batching_pars_vertex:Qy,batching_vertex:Jy,begin_vertex:eM,beginnormal_vertex:tM,bsdfs:nM,iridescence_fragment:iM,bumpmap_pars_fragment:rM,clipping_planes_fragment:sM,clipping_planes_pars_fragment:aM,clipping_planes_pars_vertex:oM,clipping_planes_vertex:lM,color_fragment:cM,color_pars_fragment:uM,color_pars_vertex:dM,color_vertex:fM,common:hM,cube_uv_reflection_fragment:pM,defaultnormal_vertex:mM,displacementmap_pars_vertex:gM,displacementmap_vertex:vM,emissivemap_fragment:xM,emissivemap_pars_fragment:_M,colorspace_fragment:SM,colorspace_pars_fragment:yM,envmap_fragment:MM,envmap_common_pars_fragment:bM,envmap_pars_fragment:EM,envmap_pars_vertex:wM,envmap_physical_pars_fragment:FM,envmap_vertex:TM,fog_vertex:CM,fog_pars_vertex:AM,fog_fragment:RM,fog_pars_fragment:NM,gradientmap_pars_fragment:PM,lightmap_pars_fragment:LM,lights_lambert_fragment:IM,lights_lambert_pars_fragment:DM,lights_pars_begin:UM,lights_toon_fragment:OM,lights_toon_pars_fragment:kM,lights_phong_fragment:BM,lights_phong_pars_fragment:zM,lights_physical_fragment:HM,lights_physical_pars_fragment:VM,lights_fragment_begin:GM,lights_fragment_maps:jM,lights_fragment_end:WM,lightprobes_pars_fragment:XM,logdepthbuf_fragment:qM,logdepthbuf_pars_fragment:YM,logdepthbuf_pars_vertex:$M,logdepthbuf_vertex:KM,map_fragment:ZM,map_pars_fragment:QM,map_particle_fragment:JM,map_particle_pars_fragment:eb,metalnessmap_fragment:tb,metalnessmap_pars_fragment:nb,morphinstance_vertex:ib,morphcolor_vertex:rb,morphnormal_vertex:sb,morphtarget_pars_vertex:ab,morphtarget_vertex:ob,normal_fragment_begin:lb,normal_fragment_maps:cb,normal_pars_fragment:ub,normal_pars_vertex:db,normal_vertex:fb,normalmap_pars_fragment:hb,clearcoat_normal_fragment_begin:pb,clearcoat_normal_fragment_maps:mb,clearcoat_pars_fragment:gb,iridescence_pars_fragment:vb,opaque_fragment:xb,packing:_b,premultiplied_alpha_fragment:Sb,project_vertex:yb,dithering_fragment:Mb,dithering_pars_fragment:bb,roughnessmap_fragment:Eb,roughnessmap_pars_fragment:wb,shadowmap_pars_fragment:Tb,shadowmap_pars_vertex:Cb,shadowmap_vertex:Ab,shadowmask_pars_fragment:Rb,skinbase_vertex:Nb,skinning_pars_vertex:Pb,skinning_vertex:Lb,skinnormal_vertex:Ib,specularmap_fragment:Db,specularmap_pars_fragment:Ub,tonemapping_fragment:Fb,tonemapping_pars_fragment:Ob,transmission_fragment:kb,transmission_pars_fragment:Bb,uv_pars_fragment:zb,uv_pars_vertex:Hb,uv_vertex:Vb,worldpos_vertex:Gb,background_vert:jb,background_frag:Wb,backgroundCube_vert:Xb,backgroundCube_frag:qb,cube_vert:Yb,cube_frag:$b,depth_vert:Kb,depth_frag:Zb,distance_vert:Qb,distance_frag:Jb,equirect_vert:eE,equirect_frag:tE,linedashed_vert:nE,linedashed_frag:iE,meshbasic_vert:rE,meshbasic_frag:sE,meshlambert_vert:aE,meshlambert_frag:oE,meshmatcap_vert:lE,meshmatcap_frag:cE,meshnormal_vert:uE,meshnormal_frag:dE,meshphong_vert:fE,meshphong_frag:hE,meshphysical_vert:pE,meshphysical_frag:mE,meshtoon_vert:gE,meshtoon_frag:vE,points_vert:xE,points_frag:_E,shadow_vert:SE,shadow_frag:yE,sprite_vert:ME,sprite_frag:bE},ye={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},ri={basic:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},envMapIntensity:{value:1}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:en([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:en([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:en([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new qe(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:en([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:en([ye.points,ye.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:en([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:en([ye.common,ye.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:en([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:en([ye.sprite,ye.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distance:{uniforms:en([ye.common,ye.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distance_vert,fragmentShader:et.distance_frag},shadow:{uniforms:en([ye.lights,ye.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ri.physical={uniforms:en([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};const Uo={r:0,b:0,g:0},EE=new At,S0=new Xe;S0.set(-1,0,0,0,1,0,0,0,1);function wE(t,e,n,i,r,s){const a=new qe(0);let o=r===!0?0:1,c,u,h=null,p=0,d=null;function m(x){let b=x.isScene===!0?x.background:null;if(b&&b.isTexture){const y=x.backgroundBlurriness>0;b=e.get(b,y)}return b}function v(x){let b=!1;const y=m(x);y===null?g(a,o):y&&y.isColor&&(g(y,1),b=!0);const w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,s):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(x,b){const y=m(b);y&&(y.isCubeTexture||y.mapping===Kl)?(u===void 0&&(u=new Di(new Xa(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Ds(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(w,T,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(EE.makeRotationFromEuler(b.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&u.material.uniforms.backgroundRotation.value.premultiply(S0),u.material.toneMapped=it.getTransfer(y.colorSpace)!==ft,(h!==y||p!==y.version||d!==t.toneMapping)&&(u.material.needsUpdate=!0,h=y,p=y.version,d=t.toneMapping),u.layers.enableAll(),x.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Di(new Ql(2,2),new $n({name:"BackgroundMaterial",uniforms:Ds(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=it.getTransfer(y.colorSpace)!==ft,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||p!==y.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,h=y,p=y.version,d=t.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,b){x.getRGB(Uo,g0(t)),n.buffers.color.setClear(Uo.r,Uo.g,Uo.b,b,s)}function f(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,b=1){a.set(x),o=b,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,g(a,o)},render:v,addToRenderList:M,dispose:f}}function TE(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,a=!1;function o(I,B,V,k,j){let te=!1;const K=p(I,k,V,B);s!==K&&(s=K,u(s.object)),te=m(I,k,V,j),te&&v(I,k,V,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,y(I,B,V,k),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function c(){return t.createVertexArray()}function u(I){return t.bindVertexArray(I)}function h(I){return t.deleteVertexArray(I)}function p(I,B,V,k){const j=k.wireframe===!0;let te=i[B.id];te===void 0&&(te={},i[B.id]=te);const K=I.isInstancedMesh===!0?I.id:0;let G=te[K];G===void 0&&(G={},te[K]=G);let H=G[V.id];H===void 0&&(H={},G[V.id]=H);let A=H[j];return A===void 0&&(A=d(c()),H[j]=A),A}function d(I){const B=[],V=[],k=[];for(let j=0;j<n;j++)B[j]=0,V[j]=0,k[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:k,object:I,attributes:{},index:null}}function m(I,B,V,k){const j=s.attributes,te=B.attributes;let K=0;const G=V.getAttributes();for(const H in G)if(G[H].location>=0){const C=j[H];let Q=te[H];if(Q===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),C===void 0||C.attribute!==Q||Q&&C.data!==Q.data)return!0;K++}return s.attributesNum!==K||s.index!==k}function v(I,B,V,k){const j={},te=B.attributes;let K=0;const G=V.getAttributes();for(const H in G)if(G[H].location>=0){let C=te[H];C===void 0&&(H==="instanceMatrix"&&I.instanceMatrix&&(C=I.instanceMatrix),H==="instanceColor"&&I.instanceColor&&(C=I.instanceColor));const Q={};Q.attribute=C,C&&C.data&&(Q.data=C.data),j[H]=Q,K++}s.attributes=j,s.attributesNum=K,s.index=k}function M(){const I=s.newAttributes;for(let B=0,V=I.length;B<V;B++)I[B]=0}function g(I){f(I,0)}function f(I,B){const V=s.newAttributes,k=s.enabledAttributes,j=s.attributeDivisors;V[I]=1,k[I]===0&&(t.enableVertexAttribArray(I),k[I]=1),j[I]!==B&&(t.vertexAttribDivisor(I,B),j[I]=B)}function x(){const I=s.newAttributes,B=s.enabledAttributes;for(let V=0,k=B.length;V<k;V++)B[V]!==I[V]&&(t.disableVertexAttribArray(V),B[V]=0)}function b(I,B,V,k,j,te,K){K===!0?t.vertexAttribIPointer(I,B,V,j,te):t.vertexAttribPointer(I,B,V,k,j,te)}function y(I,B,V,k){M();const j=k.attributes,te=V.getAttributes(),K=B.defaultAttributeValues;for(const G in te){const H=te[G];if(H.location>=0){let A=j[G];if(A===void 0&&(G==="instanceMatrix"&&I.instanceMatrix&&(A=I.instanceMatrix),G==="instanceColor"&&I.instanceColor&&(A=I.instanceColor)),A!==void 0){const C=A.normalized,Q=A.itemSize,re=e.get(A);if(re===void 0)continue;const pe=re.buffer,he=re.type,me=re.bytesPerElement,O=he===t.INT||he===t.UNSIGNED_INT||A.gpuType===Gf;if(A.isInterleavedBufferAttribute){const $=A.data,le=$.stride,we=A.offset;if($.isInstancedInterleavedBuffer){for(let oe=0;oe<H.locationSize;oe++)f(H.location+oe,$.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let oe=0;oe<H.locationSize;oe++)g(H.location+oe);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let oe=0;oe<H.locationSize;oe++)b(H.location+oe,Q/H.locationSize,he,C,le*me,(we+Q/H.locationSize*oe)*me,O)}else{if(A.isInstancedBufferAttribute){for(let $=0;$<H.locationSize;$++)f(H.location+$,A.meshPerAttribute);I.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let $=0;$<H.locationSize;$++)g(H.location+$);t.bindBuffer(t.ARRAY_BUFFER,pe);for(let $=0;$<H.locationSize;$++)b(H.location+$,Q/H.locationSize,he,C,Q*me,Q/H.locationSize*$*me,O)}}else if(K!==void 0){const C=K[G];if(C!==void 0)switch(C.length){case 2:t.vertexAttrib2fv(H.location,C);break;case 3:t.vertexAttrib3fv(H.location,C);break;case 4:t.vertexAttrib4fv(H.location,C);break;default:t.vertexAttrib1fv(H.location,C)}}}}x()}function w(){P();for(const I in i){const B=i[I];for(const V in B){const k=B[V];for(const j in k){const te=k[j];for(const K in te)h(te[K].object),delete te[K];delete k[j]}}delete i[I]}}function T(I){if(i[I.id]===void 0)return;const B=i[I.id];for(const V in B){const k=B[V];for(const j in k){const te=k[j];for(const K in te)h(te[K].object),delete te[K];delete k[j]}}delete i[I.id]}function N(I){for(const B in i){const V=i[B];for(const k in V){const j=V[k];if(j[I.id]===void 0)continue;const te=j[I.id];for(const K in te)h(te[K].object),delete te[K];delete j[I.id]}}}function S(I){for(const B in i){const V=i[B],k=I.isInstancedMesh===!0?I.id:0,j=V[k];if(j!==void 0){for(const te in j){const K=j[te];for(const G in K)h(K[G].object),delete K[G];delete j[te]}delete V[k],Object.keys(V).length===0&&delete i[B]}}}function P(){L(),a=!0,s!==r&&(s=r,u(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:L,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:N,initAttributes:M,enableAttribute:g,disableUnusedAttributes:x}}function CE(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function a(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];n.update(d,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function AE(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const N=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(N.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(N){return!(N!==jn&&i.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(N){const S=N===fi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(N!==Nn&&N!==ai&&!S&&i.convert(N)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(N){if(N==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";N="mediump"}return N==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const h=c(u);h!==u&&(je("WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const p=n.logarithmicDepthBuffer===!0,d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&d===!1&&je("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),x=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),b=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:M,maxCubemapSize:g,maxAttributes:f,maxVertexUniforms:x,maxVaryings:b,maxFragmentUniforms:y,maxSamples:w,samples:T}}function RE(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Si,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const m=p.length!==0||d||i!==0||r;return r=d,i=p.length,m},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){n=h(p,d,0)},this.setState=function(p,d,m){const v=p.clippingPlanes,M=p.clipIntersection,g=p.clipShadows,f=t.get(p);if(!r||v===null||v.length===0||s&&!g)s?h(null):u();else{const x=s?0:i,b=x*4;let y=f.clippingState||null;c.value=y,y=h(v,d,b,m);for(let w=0;w!==b;++w)y[w]=n[w];f.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=x}};function u(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(p,d,m,v){const M=p!==null?p.length:0;let g=null;if(M!==0){if(g=c.value,v!==!0||g===null){const f=m+M*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(g===null||g.length<f)&&(g=new Float32Array(f));for(let b=0,y=m;b!==M;++b,y+=4)a.copy(p[b]).applyMatrix4(x,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const gs=4,NE=6,PE=20,LE=256,Js=new x0,sm=new qe;let tu=null,nu=0,iu=0,ru=!1;const IE=new q,vr=new q;class am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=IE}=s;tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,o),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tu,nu,iu),this._renderer.xr.enabled=ru,e.scissorTest=!1,es(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ir||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tu=this._renderer.getRenderTarget(),nu=this._renderer.getActiveCubeFace(),iu=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:fi,format:jn,colorSpace:Rl,depthBuffer:!1},r=om(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=om(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=DE(s)),this._blurMaterial=FE(s,e,n),this._ggxMaterial=UE(s,e,n)}return r}_compileMaterial(e){const n=new Di(new Kn,e);this._renderer.compile(n,Js)}_sceneToCubeUV(e,n,i,r,s){const c=new Rn(90,1,n,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,m=p.toneMapping;p.getClearColor(sm),p.toneMapping=ui,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Di(new Xa,new f0({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let f=!1;const x=e.background;x?x.isColor&&(g.color.copy(x),e.background=null,f=!0):(g.color.copy(sm),f=!0);for(let b=0;b<6;b++){const y=b%3;y===0?(c.up.set(0,u[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[b],s.y,s.z)):y===1?(c.up.set(0,0,u[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[b],s.z)):(c.up.set(0,u[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[b]));const w=this._cubeSize;es(r,y*w,b>2?w:0,w,w),p.setRenderTarget(r),f&&p.render(M,c),p.render(e,c)}p.toneMapping=m,p.autoClear=d,e.background=x}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ir||e.mapping===Is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=cm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;es(n,0,0,3*c,2*c),i.setRenderTarget(n),i.render(a,Js)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const c=a.uniforms,u=i/(this._lodMeshes.length-1),h=n/(this._lodMeshes.length-1),p=Math.sqrt(u*u-h*h),d=u*1.25,m=p*d,{_lodMax:v}=this,M=this._sizeLods[i],g=3*M*(i>v-gs?i-v+gs:0),f=4*(this._cubeSize-M);c.envMap.value=e.texture,c.roughness.value=m,c.mipInt.value=v-n,es(s,g,f,3*M,2*M),r.setRenderTarget(s),r.render(o,Js),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-i,es(e,g,f,3*M,2*M),r.setRenderTarget(e),r.render(o,Js)}_blur(e,n,i,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,n,i,a),this._blurPass(s,e,i,i,a)}_blurPass(e,n,i,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const u=o.uniforms;u.envMap.value=e.texture,u.sigma.value=s,u.mipInt.value=this._lodMax-i;const h=this._sizeLods[r],p=3*h*(r>this._lodMax-gs?r-this._lodMax+gs:0),d=4*(this._cubeSize-h);es(n,p,d,3*h,2*h),a.setRenderTarget(n),a.render(c,Js)}}function DE(t){const e=[],n=[];let i=t;const r=t-gs+1+NE;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);const o=1/(a-2),c=-o,u=1+o,h=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,d=6,m=3,v=new Float32Array(m*d*p),M=new Float32Array(m*d*p);for(let f=0;f<p;f++){const x=f%3*2/3-1,b=f>2?0:-1,y=[x,b,0,x+2/3,b,0,x+2/3,b+1,0,x,b,0,x+2/3,b+1,0,x,b+1,0];v.set(y,m*d*f);for(let w=0;w<d;w++){const T=h[w*2]*2-1,N=h[w*2+1]*2-1;f===0?vr.set(1,N,T):f===1?vr.set(-T,1,-N):f===2?vr.set(-T,N,1):f===3?vr.set(-1,N,-T):f===4?vr.set(-T,-1,N):vr.set(T,N,-1),vr.toArray(M,(f*d+w)*m)}}const g=new Kn;g.setAttribute("position",new _n(v,m)),g.setAttribute("outputDirection",new _n(M,m)),n.push(new Di(g,null)),i>gs&&i--}return{lodMeshes:n,sizeLods:e}}function om(t,e,n){const i=new qn(t,e,n);return i.texture.mapping=Kl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function es(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function UE(t,e,n){return new $n({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:LE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function FE(t,e,n){return new $n({name:"SphericalGaussianBlur",defines:{SAMPLES:PE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function lm(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function cm(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ti,depthTest:!1,depthWrite:!1})}function Jl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class y0 extends qn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new p0(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Xa(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:Ds(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Ti});s.uniforms.tEquirect.value=n;const a=new Di(r,s),o=n.minFilter;return n.minFilter===br&&(n.minFilter=Zt),new ky(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function OE(t){let e=new WeakMap,n=new WeakMap,i=null;function r(d,m=!1){return d==null?null:m?a(d):s(d)}function s(d){if(d&&d.isTexture){const m=d.mapping;if(m===Rc||m===Nc)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const M=new y0(v.height);return M.fromEquirectangularTexture(t,d),e.set(d,M),d.addEventListener("dispose",u),o(M.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const m=d.mapping,v=m===Rc||m===Nc,M=m===Ir||m===Is;if(v||M){let g=n.get(d);const f=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==f)return i===null&&(i=new am(t)),g=v?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),g.texture;if(g!==void 0)return g.texture;{const x=d.image;return v&&x&&x.height>0||M&&x&&c(x)?(i===null&&(i=new am(t)),g=v?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,n.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,m){return m===Rc?d.mapping=Ir:m===Nc&&(d.mapping=Is),d}function c(d){let m=0;const v=6;for(let M=0;M<v;M++)d[M]!==void 0&&m++;return m===v}function u(d){const m=d.target;m.removeEventListener("dispose",u);const v=e.get(m);v!==void 0&&(e.delete(m),v.dispose())}function h(d){const m=d.target;m.removeEventListener("dispose",h);const v=n.get(m);v!==void 0&&(n.delete(m),v.dispose())}function p(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:p}}function kE(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Es("WebGLRenderer: "+i+" extension not supported."),r}}}function BE(t,e,n,i){const r={},s=new WeakMap;function a(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const m=s.get(d);m&&(e.remove(m),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function o(p,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,n.memory.geometries++),d}function c(p){const d=p.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER)}function u(p){const d=[],m=p.index,v=p.attributes.position;let M=0;if(v===void 0)return;if(m!==null){const x=m.array;M=m.version;for(let b=0,y=x.length;b<y;b+=3){const w=x[b+0],T=x[b+1],N=x[b+2];d.push(w,T,T,N,N,w)}}else{const x=v.array;M=v.version;for(let b=0,y=x.length/3-1;b<y;b+=3){const w=b+0,T=b+1,N=b+2;d.push(w,T,T,N,N,w)}}const g=new(v.count>=65535?d0:u0)(d,1);g.version=M;const f=s.get(p);f&&e.remove(f),s.set(p,g)}function h(p){const d=s.get(p);if(d){const m=p.index;m!==null&&d.version<m.version&&u(p)}else u(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:h}}function zE(t,e,n){let i;function r(p){i=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,d){t.drawElements(i,d,s,p*a),n.update(d,i,1)}function u(p,d,m){m!==0&&(t.drawElementsInstanced(i,d,s,p*a,m),n.update(d,i,m))}function h(p,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,s,p,0,m);let M=0;for(let g=0;g<m;g++)M+=d[g];n.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=h}function HE(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:ot("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function VE(t,e,n){const i=new WeakMap,r=new Ct;function s(a,o,c){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let d=i.get(o);if(d===void 0||d.count!==p){let L=function(){S.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var m=L;d!==void 0&&d.texture.dispose();const v=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],b=o.morphAttributes.color||[];let y=0;v===!0&&(y=1),M===!0&&(y=2),g===!0&&(y=3);let w=o.attributes.position.count*y,T=1;w>e.maxTextureSize&&(T=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const N=new Float32Array(w*T*4*p),S=new l0(N,w,T,p);S.type=ai,S.needsUpdate=!0;const P=y*4;for(let I=0;I<p;I++){const B=f[I],V=x[I],k=b[I],j=w*T*4*I;for(let te=0;te<B.count;te++){const K=te*P;v===!0&&(r.fromBufferAttribute(B,te),N[j+K+0]=r.x,N[j+K+1]=r.y,N[j+K+2]=r.z,N[j+K+3]=0),M===!0&&(r.fromBufferAttribute(V,te),N[j+K+4]=r.x,N[j+K+5]=r.y,N[j+K+6]=r.z,N[j+K+7]=0),g===!0&&(r.fromBufferAttribute(k,te),N[j+K+8]=r.x,N[j+K+9]=r.y,N[j+K+10]=r.z,N[j+K+11]=k.itemSize===4?r.w:1)}}d={count:p,texture:S,size:new ct(w,T)},i.set(o,d),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let v=0;for(let g=0;g<u.length;g++)v+=u[g];const M=o.morphTargetsRelative?1:1-v;c.getUniforms().setValue(t,"morphTargetBaseInfluence",M),c.getUniforms().setValue(t,"morphTargetInfluences",u)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function GE(t,e,n,i,r){let s=new WeakMap;function a(u){const h=r.render.frame,p=u.geometry,d=e.get(u,p);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),s.get(u)!==h&&(n.update(u.instanceMatrix,t.ARRAY_BUFFER),u.instanceColor!==null&&n.update(u.instanceColor,t.ARRAY_BUFFER),s.set(u,h))),u.isSkinnedMesh){const m=u.skeleton;s.get(m)!==h&&(m.update(),s.set(m,h))}return d}function o(){s=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}const jE={[Xv]:"LINEAR_TONE_MAPPING",[qv]:"REINHARD_TONE_MAPPING",[Yv]:"CINEON_TONE_MAPPING",[$v]:"ACES_FILMIC_TONE_MAPPING",[Zv]:"AGX_TONE_MAPPING",[Qv]:"NEUTRAL_TONE_MAPPING",[Kv]:"CUSTOM_TONE_MAPPING"};function WE(t,e,n,i,r,s){const a=new qn(e,n,{type:t,depthBuffer:r,stencilBuffer:s,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const u=new Kn;u.setAttribute("position",new Ai([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new Ai([0,2,0,0,2,0],2));const h=new Uy({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Di(u,h),d=new x0(-1,1,1,-1,0,1);let m=null,v=null,M=!1,g,f=null,x=[],b=!1;this.setSize=function(y,w){a.setSize(y,w),o!==null&&o.setSize(y,w),c!==null&&c.setSize(y,w);for(let T=0;T<x.length;T++){const N=x[T];N.setSize&&N.setSize(y,w)}},this.setEffects=function(y){x=y,b=x.length>0&&x[0].isRenderPass===!0;const w=a.width,T=a.height;x.length>0&&o===null&&(o=new qn(w,T,{type:fi,depthBuffer:!1,stencilBuffer:!1}),c=new qn(w,T,{type:fi,depthBuffer:!1,stencilBuffer:!1}));for(let N=0;N<x.length;N++){const S=x[N];S.setSize&&S.setSize(w,T)}},this.begin=function(y,w){if(M||y.toneMapping===ui&&x.length===0)return!1;if(f=w,w!==null){const T=w.width,N=w.height;(a.width!==T||a.height!==N)&&this.setSize(T,N)}return b===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=ui,!0},this.hasRenderPass=function(){return b},this.end=function(y,w){y.toneMapping=g,M=!0;let T=a,N=o;for(let S=0;S<x.length;S++){const P=x[S];P.enabled!==!1&&(P.render(y,N,T,w),P.needsSwap!==!1&&(T=N,N=N===o?c:o))}if(m!==y.outputColorSpace||v!==y.toneMapping){m=y.outputColorSpace,v=y.toneMapping,h.defines={},it.getTransfer(m)===ft&&(h.defines.SRGB_TRANSFER="");const S=jE[v];S&&(h.defines[S]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=T.texture,y.setRenderTarget(f),y.render(p,d),f=null,M=!1},this.isCompositing=function(){return M},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),u.dispose(),h.dispose()}}const M0=new rn,Wd=new Oa(1,1),b0=new l0,E0=new uy,w0=new p0,um=[],dm=[],fm=new Float32Array(16),hm=new Float32Array(9),pm=new Float32Array(4);function Bs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=um[r];if(s===void 0&&(s=new Float32Array(r),um[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ec(t,e){let n=dm[e];n===void 0&&(n=new Int32Array(e),dm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function XE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function qE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function YE(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function $E(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function KE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;pm.set(i),t.uniformMatrix2fv(this.addr,!1,pm),Ot(n,i)}}function ZE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;hm.set(i),t.uniformMatrix3fv(this.addr,!1,hm),Ot(n,i)}}function QE(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;fm.set(i),t.uniformMatrix4fv(this.addr,!1,fm),Ot(n,i)}}function JE(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function ew(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function iw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function sw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function ow(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Wd.compareFunction=n.isReversedDepthBuffer()?Kf:$f,s=Wd):s=M0,n.setTexture2D(e||s,r)}function lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||E0,r)}function cw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||w0,r)}function uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||b0,r)}function dw(t){switch(t){case 5126:return XE;case 35664:return qE;case 35665:return YE;case 35666:return $E;case 35674:return KE;case 35675:return ZE;case 35676:return QE;case 5124:case 35670:return JE;case 35667:case 35671:return ew;case 35668:case 35672:return tw;case 35669:case 35673:return nw;case 5125:return iw;case 36294:return rw;case 36295:return sw;case 36296:return aw;case 35678:case 36198:case 36298:case 36306:case 35682:return ow;case 35679:case 36299:case 36307:return lw;case 35680:case 36300:case 36308:case 36293:return cw;case 36289:case 36303:case 36311:case 36292:return uw}}function fw(t,e){t.uniform1fv(this.addr,e)}function hw(t,e){const n=Bs(e,this.size,2);t.uniform2fv(this.addr,n)}function pw(t,e){const n=Bs(e,this.size,3);t.uniform3fv(this.addr,n)}function mw(t,e){const n=Bs(e,this.size,4);t.uniform4fv(this.addr,n)}function gw(t,e){const n=Bs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function vw(t,e){const n=Bs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function xw(t,e){const n=Bs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function _w(t,e){t.uniform1iv(this.addr,e)}function Sw(t,e){t.uniform2iv(this.addr,e)}function yw(t,e){t.uniform3iv(this.addr,e)}function Mw(t,e){t.uniform4iv(this.addr,e)}function bw(t,e){t.uniform1uiv(this.addr,e)}function Ew(t,e){t.uniform2uiv(this.addr,e)}function ww(t,e){t.uniform3uiv(this.addr,e)}function Tw(t,e){t.uniform4uiv(this.addr,e)}function Cw(t,e,n){const i=this.cache,r=e.length,s=ec(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=Wd:a=M0;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function Aw(t,e,n){const i=this.cache,r=e.length,s=ec(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||E0,s[a])}function Rw(t,e,n){const i=this.cache,r=e.length,s=ec(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||w0,s[a])}function Nw(t,e,n){const i=this.cache,r=e.length,s=ec(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||b0,s[a])}function Pw(t){switch(t){case 5126:return fw;case 35664:return hw;case 35665:return pw;case 35666:return mw;case 35674:return gw;case 35675:return vw;case 35676:return xw;case 5124:case 35670:return _w;case 35667:case 35671:return Sw;case 35668:case 35672:return yw;case 35669:case 35673:return Mw;case 5125:return bw;case 36294:return Ew;case 36295:return ww;case 36296:return Tw;case 35678:case 36198:case 36298:case 36306:case 35682:return Cw;case 35679:case 36299:case 36307:return Aw;case 35680:case 36300:case 36308:case 36293:return Rw;case 36289:case 36303:case 36311:case 36292:return Nw}}class Lw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=dw(n.type)}}class Iw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Pw(n.type)}}class Dw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const su=/(\w+)(\])?(\[|\.)?/g;function mm(t,e){t.seq.push(e),t.map[e.id]=e}function Uw(t,e,n){const i=t.name,r=i.length;for(su.lastIndex=0;;){const s=su.exec(i),a=su.lastIndex;let o=s[1];const c=s[2]==="]",u=s[3];if(c&&(o=o|0),u===void 0||u==="["&&a+2===r){mm(n,u===void 0?new Lw(o,t,e):new Iw(o,t,e));break}else{let p=n.map[o];p===void 0&&(p=new Dw(o),mm(n,p)),n=p}}}class tl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);Uw(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function gm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Fw=37297;let Ow=0;function kw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const vm=new Xe;function Bw(t){it._getMatrix(vm,it.workingColorSpace,t);const e=`mat3( ${vm.elements.map(n=>n.toFixed(4))} )`;switch(it.getTransfer(t)){case Nl:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return je("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function xm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+kw(t.getShaderSource(e),o)}else return s}function zw(t,e){const n=Bw(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const Hw={[Xv]:"Linear",[qv]:"Reinhard",[Yv]:"Cineon",[$v]:"ACESFilmic",[Zv]:"AgX",[Qv]:"Neutral",[Kv]:"Custom"};function Vw(t,e){const n=Hw[e];return n===void 0?(je("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Fo=new q;function Gw(){it.getLuminanceCoefficients(Fo);const t=Fo.x.toFixed(4),e=Fo.y.toFixed(4),n=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(oa).join(`
`)}function Ww(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Xw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function oa(t){return t!==""}function _m(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Sm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xd(t){return t.replace(qw,$w)}const Yw=new Map;function $w(t,e){let n=et[e];if(n===void 0){const i=Yw.get(e);if(i!==void 0)n=et[i],je('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Xd(n)}const Kw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ym(t){return t.replace(Kw,Zw)}function Zw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Qw={[Ko]:"SHADOWMAP_TYPE_PCF",[sa]:"SHADOWMAP_TYPE_VSM"};function Jw(t){return Qw[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const eT={[Ir]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[Kl]:"ENVMAP_TYPE_CUBE_UV"};function tT(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":eT[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const nT={[Is]:"ENVMAP_MODE_REFRACTION"};function iT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":nT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const rT={[Wv]:"ENVMAP_BLENDING_MULTIPLY",[HS]:"ENVMAP_BLENDING_MIX",[VS]:"ENVMAP_BLENDING_ADD"};function sT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":rT[t.combine]||"ENVMAP_BLENDING_NONE"}function aT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function oT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const c=Jw(n),u=tT(n),h=iT(n),p=sT(n),d=aT(n),m=jw(n),v=Ww(s),M=r.createProgram();let g,f,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(oa).join(`
`),g.length>0&&(g+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v].filter(oa).join(`
`),f.length>0&&(f+=`
`)):(g=[Mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(oa).join(`
`),f=[Mm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,v,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",n.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ui?"#define TONE_MAPPING":"",n.toneMapping!==ui?et.tonemapping_pars_fragment:"",n.toneMapping!==ui?Vw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,zw("linearToOutputTexel",n.outputColorSpace),Gw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(oa).join(`
`)),a=Xd(a),a=_m(a,n),a=Sm(a,n),o=Xd(o),o=_m(o,n),o=Sm(o,n),a=ym(a),o=ym(o),n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,f=["#define varying in",n.glslVersion===Ip?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Ip?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const b=x+g+a,y=x+f+o,w=gm(r,r.VERTEX_SHADER,b),T=gm(r,r.FRAGMENT_SHADER,y);r.attachShader(M,w),r.attachShader(M,T),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.hasPositionAttribute===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function N(I){if(t.debug.checkShaderErrors){const B=r.getProgramInfoLog(M)||"",V=r.getShaderInfoLog(w)||"",k=r.getShaderInfoLog(T)||"",j=B.trim(),te=V.trim(),K=k.trim();let G=!0,H=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(G=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,w,T);else{const A=xm(r,w,"vertex"),C=xm(r,T,"fragment");ot("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+j+`
`+A+`
`+C)}else j!==""?je("WebGLProgram: Program Info Log:",j):(te===""||K==="")&&(H=!1);H&&(I.diagnostics={runnable:G,programLog:j,vertexShader:{log:te,prefix:g},fragmentShader:{log:K,prefix:f}})}r.deleteShader(w),r.deleteShader(T),S=new tl(r,M),P=Xw(r,M)}let S;this.getUniforms=function(){return S===void 0&&N(this),S};let P;this.getAttributes=function(){return P===void 0&&N(this),P};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(M,Fw)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ow++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=w,this.fragmentShader=T,this}let lT=0;class cT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){const r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(i)===!1&&(r.add(i),i.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new uT(e),n.set(e,i)),i}}class uT{constructor(e){this.id=lT++,this.code=e,this.usedTimes=0}}function dT(t){return t===Dr||t===Cl||t===Al}function fT(t,e,n,i,r,s){const a=new Qf,o=new cT,c=new Set,u=[],h=new Map,p=i.logarithmicDepthBuffer;let d=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(S){return c.add(S),S===0?"uv":`uv${S}`}function M(S,P,L,I,B,V){const k=I.fog,j=B.geometry,te=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?I.environment:null,K=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,G=e.get(S.envMap||te,K),H=G&&G.mapping===Kl?G.image.height:null,A=m[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&je("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const C=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Q=C!==void 0?C.length:0;let re=0;j.morphAttributes.position!==void 0&&(re=1),j.morphAttributes.normal!==void 0&&(re=2),j.morphAttributes.color!==void 0&&(re=3);let pe,he,me,O;if(A){const gt=ri[A];pe=gt.vertexShader,he=gt.fragmentShader}else{pe=S.vertexShader,he=S.fragmentShader;const gt=o.getVertexShaderStage(S),ut=o.getFragmentShaderStage(S);o.update(S,gt,ut),me=gt.id,O=ut.id}const $=t.getRenderTarget(),le=t.state.buffers.depth.getReversed(),we=B.isInstancedMesh===!0,oe=B.isBatchedMesh===!0,Ne=!!S.map,Qe=!!S.matcap,ae=!!G,de=!!S.aoMap,De=!!S.lightMap,Te=!!S.bumpMap&&S.wireframe===!1,Ve=!!S.normalMap,Ze=!!S.displacementMap,Ye=!!S.emissiveMap,Ie=!!S.metalnessMap,$e=!!S.roughnessMap,D=S.anisotropy>0,st=S.clearcoat>0,He=S.dispersion>0,R=S.retroreflectivity>0,_=S.iridescence>0,z=S.sheen>0,Y=S.transmission>0,J=D&&!!S.anisotropyMap,ue=st&&!!S.clearcoatMap,fe=st&&!!S.clearcoatNormalMap,ee=st&&!!S.clearcoatRoughnessMap,ie=_&&!!S.iridescenceMap,ge=_&&!!S.iridescenceThicknessMap,ke=z&&!!S.sheenColorMap,Se=z&&!!S.sheenRoughnessMap,ve=!!S.specularMap,Be=!!S.specularColorMap,Ge=!!S.specularIntensityMap,Ke=Y&&!!S.transmissionMap,F=Y&&!!S.thicknessMap,xe=!!S.gradientMap,ne=!!S.alphaMap,_e=S.alphaTest>0,Ee=!!S.alphaHash,se=!!S.extensions;let ze=ui;S.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(ze=t.toneMapping);const Ue={shaderID:A,shaderType:S.type,shaderName:S.name,vertexShader:pe,fragmentShader:he,defines:S.defines,customVertexShaderID:me,customFragmentShaderID:O,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:oe,batchingColor:oe&&B._colorsTexture!==null,instancing:we,instancingColor:we&&B.instanceColor!==null,instancingMorph:we&&B.morphTexture!==null,outputColorSpace:$===null?t.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:it.workingColorSpace,alphaToCoverage:!!S.alphaToCoverage,map:Ne,matcap:Qe,envMap:ae,envMapMode:ae&&G.mapping,envMapCubeUVHeight:H,aoMap:de,lightMap:De,bumpMap:Te,normalMap:Ve,displacementMap:Ze,emissiveMap:Ye,normalMapObjectSpace:Ve&&S.normalMapType===WS,normalMapTangentSpace:Ve&&S.normalMapType===Lp,packedNormalMap:Ve&&S.normalMapType===Lp&&dT(S.normalMap.format),metalnessMap:Ie,roughnessMap:$e,anisotropy:D,anisotropyMap:J,clearcoat:st,clearcoatMap:ue,clearcoatNormalMap:fe,clearcoatRoughnessMap:ee,dispersion:He,retroreflection:R,iridescence:_,iridescenceMap:ie,iridescenceThicknessMap:ge,sheen:z,sheenColorMap:ke,sheenRoughnessMap:Se,specularMap:ve,specularColorMap:Be,specularIntensityMap:Ge,transmission:Y,transmissionMap:Ke,thicknessMap:F,gradientMap:xe,opaque:S.transparent===!1&&S.blending===bs&&S.alphaToCoverage===!1,alphaMap:ne,alphaTest:_e,alphaHash:Ee,combine:S.combine,mapUv:Ne&&v(S.map.channel),aoMapUv:de&&v(S.aoMap.channel),lightMapUv:De&&v(S.lightMap.channel),bumpMapUv:Te&&v(S.bumpMap.channel),normalMapUv:Ve&&v(S.normalMap.channel),displacementMapUv:Ze&&v(S.displacementMap.channel),emissiveMapUv:Ye&&v(S.emissiveMap.channel),metalnessMapUv:Ie&&v(S.metalnessMap.channel),roughnessMapUv:$e&&v(S.roughnessMap.channel),anisotropyMapUv:J&&v(S.anisotropyMap.channel),clearcoatMapUv:ue&&v(S.clearcoatMap.channel),clearcoatNormalMapUv:fe&&v(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&v(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&v(S.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&v(S.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(S.sheenColorMap.channel),sheenRoughnessMapUv:Se&&v(S.sheenRoughnessMap.channel),specularMapUv:ve&&v(S.specularMap.channel),specularColorMapUv:Be&&v(S.specularColorMap.channel),specularIntensityMapUv:Ge&&v(S.specularIntensityMap.channel),transmissionMapUv:Ke&&v(S.transmissionMap.channel),thicknessMapUv:F&&v(S.thicknessMap.channel),alphaMapUv:ne&&v(S.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(Ve||D),vertexNormals:!!j.attributes.normal,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!j.attributes.uv&&(Ne||ne),fog:!!k,useFog:S.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||j.attributes.normal===void 0&&Ve===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:le,skinning:B.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:re,numSunLights:P.sun.length,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numSunLightShadows:P.sunShadowMap.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:V.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:ze,decodeVideoTexture:Ne&&S.map.isVideoTexture===!0&&it.getTransfer(S.map.colorSpace)===ft,decodeVideoTextureEmissive:Ye&&S.emissiveMap.isVideoTexture===!0&&it.getTransfer(S.emissiveMap.colorSpace)===ft,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===yi,flipSided:S.side===hn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:se&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&S.extensions.multiDraw===!0||oe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ue.vertexUv1s=c.has(1),Ue.vertexUv2s=c.has(2),Ue.vertexUv3s=c.has(3),c.clear(),Ue}function g(S){const P=[];if(S.shaderID?P.push(S.shaderID):(P.push(S.customVertexShaderID),P.push(S.customFragmentShaderID)),S.defines!==void 0)for(const L in S.defines)P.push(L),P.push(S.defines[L]);return S.isRawShaderMaterial===!1&&(f(P,S),x(P,S),P.push(t.outputColorSpace)),P.push(S.customProgramCacheKey),P.join()}function f(S,P){S.push(P.precision),S.push(P.outputColorSpace),S.push(P.envMapMode),S.push(P.envMapCubeUVHeight),S.push(P.mapUv),S.push(P.alphaMapUv),S.push(P.lightMapUv),S.push(P.aoMapUv),S.push(P.bumpMapUv),S.push(P.normalMapUv),S.push(P.displacementMapUv),S.push(P.emissiveMapUv),S.push(P.metalnessMapUv),S.push(P.roughnessMapUv),S.push(P.anisotropyMapUv),S.push(P.clearcoatMapUv),S.push(P.clearcoatNormalMapUv),S.push(P.clearcoatRoughnessMapUv),S.push(P.iridescenceMapUv),S.push(P.iridescenceThicknessMapUv),S.push(P.sheenColorMapUv),S.push(P.sheenRoughnessMapUv),S.push(P.specularMapUv),S.push(P.specularColorMapUv),S.push(P.specularIntensityMapUv),S.push(P.transmissionMapUv),S.push(P.thicknessMapUv),S.push(P.combine),S.push(P.fogExp2),S.push(P.sizeAttenuation),S.push(P.morphTargetsCount),S.push(P.morphAttributeCount),S.push(P.numSunLights),S.push(P.numDirLights),S.push(P.numPointLights),S.push(P.numSpotLights),S.push(P.numSpotLightMaps),S.push(P.numHemiLights),S.push(P.numRectAreaLights),S.push(P.numSunLightShadows),S.push(P.numDirLightShadows),S.push(P.numPointLightShadows),S.push(P.numSpotLightShadows),S.push(P.numSpotLightShadowsWithMaps),S.push(P.numLightProbes),S.push(P.shadowMapType),S.push(P.toneMapping),S.push(P.numClippingPlanes),S.push(P.numClipIntersection),S.push(P.depthPacking)}function x(S,P){a.disableAll(),P.instancing&&a.enable(0),P.instancingColor&&a.enable(1),P.instancingMorph&&a.enable(2),P.matcap&&a.enable(3),P.envMap&&a.enable(4),P.normalMapObjectSpace&&a.enable(5),P.normalMapTangentSpace&&a.enable(6),P.clearcoat&&a.enable(7),P.iridescence&&a.enable(8),P.alphaTest&&a.enable(9),P.vertexColors&&a.enable(10),P.vertexAlphas&&a.enable(11),P.vertexUv1s&&a.enable(12),P.vertexUv2s&&a.enable(13),P.vertexUv3s&&a.enable(14),P.vertexTangents&&a.enable(15),P.anisotropy&&a.enable(16),P.alphaHash&&a.enable(17),P.batching&&a.enable(18),P.dispersion&&a.enable(19),P.retroreflection&&a.enable(24),P.batchingColor&&a.enable(20),P.gradientMap&&a.enable(21),P.packedNormalMap&&a.enable(22),P.vertexNormals&&a.enable(23),S.push(a.mask),a.disableAll(),P.fog&&a.enable(0),P.useFog&&a.enable(1),P.flatShading&&a.enable(2),P.logarithmicDepthBuffer&&a.enable(3),P.reversedDepthBuffer&&a.enable(4),P.skinning&&a.enable(5),P.morphTargets&&a.enable(6),P.morphNormals&&a.enable(7),P.morphColors&&a.enable(8),P.premultipliedAlpha&&a.enable(9),P.shadowMapEnabled&&a.enable(10),P.doubleSided&&a.enable(11),P.flipSided&&a.enable(12),P.useDepthPacking&&a.enable(13),P.dithering&&a.enable(14),P.transmission&&a.enable(15),P.sheen&&a.enable(16),P.opaque&&a.enable(17),P.pointsUvs&&a.enable(18),P.decodeVideoTexture&&a.enable(19),P.decodeVideoTextureEmissive&&a.enable(20),P.alphaToCoverage&&a.enable(21),P.numLightProbeGrids>0&&a.enable(22),P.hasPositionAttribute&&a.enable(23),S.push(a.mask)}function b(S){const P=m[S.type];let L;if(P){const I=ri[P];L=Ly.clone(I.uniforms)}else L=S.uniforms;return L}function y(S,P){let L=h.get(P);return L!==void 0?++L.usedTimes:(L=new oT(t,P,S,r),u.push(L),h.set(P,L)),L}function w(S){if(--S.usedTimes===0){const P=u.indexOf(S);u[P]=u[u.length-1],u.pop(),h.delete(S.cacheKey),S.destroy()}}function T(S){o.remove(S)}function N(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:b,acquireProgram:y,releaseProgram:w,releaseShaderCache:T,programs:u,dispose:N}}function hT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,c){t.get(a)[o]=c}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function pT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function bm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Em(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(d){let m=0;return d.isInstancedMesh&&(m+=2),d.isSkinnedMesh&&(m+=1),m}function o(d,m,v,M,g,f){let x=t[e];return x===void 0?(x={id:d.id,object:d,geometry:m,material:v,materialVariant:a(d),groupOrder:M,renderOrder:d.renderOrder,z:g,group:f},t[e]=x):(x.id=d.id,x.object=d,x.geometry=m,x.material=v,x.materialVariant=a(d),x.groupOrder=M,x.renderOrder=d.renderOrder,x.z=g,x.group=f),e++,x}function c(d,m,v,M,g,f,x){x.reversedDepth===!0&&(g=-g);const b=o(d,m,v,M,g,f);v.transmission>0?i.push(b):v.transparent===!0?r.push(b):n.push(b)}function u(d,m,v,M,g,f){const x=o(d,m,v,M,g,f);v.transmission>0?i.unshift(x):v.transparent===!0?r.unshift(x):n.unshift(x)}function h(d,m){n.length>1&&n.sort(d||pT),i.length>1&&i.sort(m||bm),r.length>1&&r.sort(m||bm)}function p(){for(let d=e,m=t.length;d<m;d++){const v=t[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:c,unshift:u,finish:p,sort:h}}function mT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Em,t.set(i,[a])):r>=s.length?(a=new Em,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function gT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new q,color:new qe};break;case"SpotLight":n={position:new q,direction:new q,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new q,color:new qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new q,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":n={color:new qe,position:new q,halfWidth:new q,halfHeight:new q};break}return t[e.id]=n,n}}}function vT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let xT=0;function _T(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ST(t){const e=new gT,n=vT(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new q);const r=new q,s=new At,a=new At;function o(u){let h=0,p=0,d=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let m=0,v=0,M=0,g=0,f=0,x=0,b=0,y=0,w=0,T=0,N=0,S=0,P=0,L=0;u.sort(_T);for(let B=0,V=u.length;B<V;B++){const k=u[B],j=k.color,te=k.intensity,K=k.distance;let G=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Dr?G=k.shadow.map.texture:G=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)h+=j.r*te,p+=j.g*te,d+=j.b*te;else if(k.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(k.sh.coefficients[H],te);L++}else if(k.isSunLight){const H=e.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const A=k.shadow,C=n.get(k);C.shadowIntensity=A.intensity,C.shadowBias=A.bias,C.shadowNormalBias=A.normalBias,C.shadowRadius=A.radius,C.shadowMapSize.copy(A.mapSize).multiply(A.getFrameExtents()),i.sunShadow[v]=C,i.sunShadowMap[v]=G;const Q=A.getViewportCount();for(let re=0;re<Q;re++)i.sunShadowMatrix[M+re]=A.getMatrix(re),i.sunShadowCascade[M+re]=A._cascadeData[re];M+=Q,v++}i.sun[m]=H,m++}else if(k.isDirectionalLight){const H=e.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const A=k.shadow,C=n.get(k);C.shadowIntensity=A.intensity,C.shadowBias=A.bias,C.shadowNormalBias=A.normalBias,C.shadowRadius=A.radius,C.shadowMapSize=A.mapSize,i.directionalShadow[g]=C,i.directionalShadowMap[g]=G,i.directionalShadowMatrix[g]=k.shadow.matrix,w++}i.directional[g]=H,g++}else if(k.isSpotLight){const H=e.get(k);H.position.setFromMatrixPosition(k.matrixWorld),H.color.copy(j).multiplyScalar(te),H.distance=K,H.coneCos=Math.cos(k.angle),H.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),H.decay=k.decay,i.spot[x]=H;const A=k.shadow;if(k.map&&(i.spotLightMap[S]=k.map,S++,A.updateMatrices(k),k.castShadow&&P++),i.spotLightMatrix[x]=A.matrix,k.castShadow){const C=n.get(k);C.shadowIntensity=A.intensity,C.shadowBias=A.bias,C.shadowNormalBias=A.normalBias,C.shadowRadius=A.radius,C.shadowMapSize=A.mapSize,i.spotShadow[x]=C,i.spotShadowMap[x]=G,N++}x++}else if(k.isRectAreaLight){const H=e.get(k);H.color.copy(j).multiplyScalar(te),H.halfWidth.set(k.width*.5,0,0),H.halfHeight.set(0,k.height*.5,0),i.rectArea[b]=H,b++}else if(k.isPointLight){const H=e.get(k);if(H.color.copy(k.color).multiplyScalar(k.intensity),H.distance=k.distance,H.decay=k.decay,k.castShadow){const A=k.shadow,C=n.get(k);C.shadowIntensity=A.intensity,C.shadowBias=A.bias,C.shadowNormalBias=A.normalBias,C.shadowRadius=A.radius,C.shadowMapSize=A.mapSize,C.shadowCameraNear=A.camera.near,C.shadowCameraFar=A.camera.far,i.pointShadow[f]=C,i.pointShadowMap[f]=G,i.pointShadowMatrix[f]=k.shadow.matrix,T++}i.point[f]=H,f++}else if(k.isHemisphereLight){const H=e.get(k);H.skyColor.copy(k.color).multiplyScalar(te),H.groundColor.copy(k.groundColor).multiplyScalar(te),i.hemi[y]=H,y++}}b>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=p,i.ambient[2]=d;const I=i.hash;(I.sunLength!==m||I.directionalLength!==g||I.pointLength!==f||I.spotLength!==x||I.rectAreaLength!==b||I.hemiLength!==y||I.numSunShadows!==v||I.numDirectionalShadows!==w||I.numPointShadows!==T||I.numSpotShadows!==N||I.numSpotMaps!==S||I.numLightProbes!==L)&&(i.sun.length=m,i.directional.length=g,i.spot.length=x,i.rectArea.length=b,i.point.length=f,i.hemi.length=y,i.sunShadow.length=v,i.sunShadowMap.length=v,i.sunShadowMatrix.length=M,i.sunShadowCascade.length=M,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=T,i.pointShadowMap.length=T,i.pointShadowMatrix.length=T,i.spotShadow.length=N,i.spotShadowMap.length=N,i.spotLightMatrix.length=N+S-P,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=P,i.numLightProbes=L,I.sunLength=m,I.directionalLength=g,I.pointLength=f,I.spotLength=x,I.rectAreaLength=b,I.hemiLength=y,I.numSunShadows=v,I.numDirectionalShadows=w,I.numPointShadows=T,I.numSpotShadows=N,I.numSpotMaps=S,I.numLightProbes=L,i.version=xT++)}function c(u,h){let p=0,d=0,m=0,v=0,M=0,g=0;const f=h.matrixWorldInverse;for(let x=0,b=u.length;x<b;x++){const y=u[x];if(y.isSunLight){const w=i.sun[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),p++}else if(y.isDirectionalLight){const w=i.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),d++}else if(y.isSpotLight){const w=i.spot[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),w.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(r),w.direction.transformDirection(f),v++}else if(y.isRectAreaLight){const w=i.rectArea[M];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),a.identity(),s.copy(y.matrixWorld),s.premultiply(f),a.extractRotation(s),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),M++}else if(y.isPointLight){const w=i.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(f),m++}else if(y.isHemisphereLight){const w=i.hemi[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(f),g++}}}return{setup:o,setupView:c,state:i}}function wm(t){const e=new ST(t),n=[],i=[],r=[];function s(d){p.camera=d,n.length=0,i.length=0,r.length=0}function a(d){n.push(d)}function o(d){i.push(d)}function c(d){r.push(d)}function u(){e.setup(n)}function h(d){e.setupView(n,d)}const p={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:u,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function yT(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new wm(t),e.set(r,[o])):s>=a.length?(o=new wm(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const MT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ET=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],wT=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],Tm=new At,ea=new q,au=new q;function TT(t,e,n){let i=new h0;const r=new ct,s=new ct,a=new Ct,o=new Fy,c=new Oy,u={},h=n.maxTextureSize,p={[Lr]:hn,[hn]:Lr,[yi]:yi},d=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:MT,fragmentShader:bT}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Kn;v.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Di(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let f=this.type;this.render=function(T,N,S){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===MS&&(je("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ko);const P=t.getRenderTarget(),L=t.getActiveCubeFace(),I=t.getActiveMipmapLevel(),B=t.state;B.setBlending(Ti),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const V=f!==this.type;V&&N.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(j=>j.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,j=T.length;k<j;k++){const te=T[k],K=te.shadow;if(K===void 0){je("WebGLShadowMap:",te,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;r.copy(K.mapSize);const G=K.getFrameExtents();r.multiply(G),s.copy(K.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/G.x),r.x=s.x*G.x,K.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/G.y),r.y=s.y*G.y,K.mapSize.y=s.y));const H=t.state.buffers.depth.getReversed();if(K.camera._reversedDepth=H,K.map===null||V===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===sa){if(te.isPointLight){je("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new qn(r.x,r.y,{format:Dr,type:fi,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),K.map.texture.name=te.name+".shadowMap",K.map.depthTexture=new Oa(r.x,r.y,ai),K.map.depthTexture.name=te.name+".shadowMapDepth",K.map.depthTexture.format=Ii,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Vt,K.map.depthTexture.magFilter=Vt}else te.isPointLight?(K.map=new y0(r.x),K.map.depthTexture=new Ny(r.x,di)):(K.map=new qn(r.x,r.y),K.map.depthTexture=new Oa(r.x,r.y,di)),K.map.depthTexture.name=te.name+".shadowMap",K.map.depthTexture.format=Ii,this.type===Ko?(K.map.depthTexture.compareFunction=H?Kf:$f,K.map.depthTexture.minFilter=Zt,K.map.depthTexture.magFilter=Zt):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Vt,K.map.depthTexture.magFilter=Vt);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==r.x||K.map.height!==r.y)&&K.map.setSize(r.x,r.y);const A=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();te.isPointLight!==!0&&K.updateMatrices(te,S);for(let C=0;C<A;C++){const Q=K.getCamera(C);if(te.isPointLight){const re=K.camera,pe=K.matrix,he=te.distance||re.far;he!==re.far&&(re.far=he,re.updateProjectionMatrix()),ea.setFromMatrixPosition(te.matrixWorld),re.position.copy(ea),au.copy(re.position),au.add(ET[C]),re.up.copy(wT[C]),re.lookAt(au),re.updateMatrixWorld(),pe.makeTranslation(-ea.x,-ea.y,-ea.z),Tm.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Tm,re.coordinateSystem,re.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)t.setRenderTarget(K.map,C),t.clear();else{C===0&&(t.setRenderTarget(K.map),t.clear());const re=K.getViewport(C);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),B.viewport(a)}i=K.getFrustum(C),y(N,S,Q,te,this.type)}K.isPointLightShadow!==!0&&this.type===sa&&x(K,S),K.needsUpdate=!1}f=this.type,g.needsUpdate=!1,t.setRenderTarget(P,L,I)};function x(T,N){const S=e.update(M);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null?T.mapPass=new qn(r.x,r.y,{format:Dr,type:fi}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value.set(T.map.width,T.map.height),d.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(N,null,S,d,M,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value.set(T.map.width,T.map.height),m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(N,null,S,m,M,null)}function b(T,N,S,P){let L=null;const I=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(I!==void 0)L=I;else if(L=S.isPointLight===!0?c:o,t.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0||N.alphaToCoverage===!0){const B=L.uuid,V=N.uuid;let k=u[B];k===void 0&&(k={},u[B]=k);let j=k[V];j===void 0&&(j=L.clone(),k[V]=j,N.addEventListener("dispose",w)),L=j}if(L.visible=N.visible,L.wireframe=N.wireframe,P===sa?L.side=N.shadowSide!==null?N.shadowSide:N.side:L.side=N.shadowSide!==null?N.shadowSide:p[N.side],L.alphaMap=N.alphaMap,L.alphaTest=N.alphaToCoverage===!0?.5:N.alphaTest,L.map=N.map,L.clipShadows=N.clipShadows,L.clippingPlanes=N.clippingPlanes,L.clipIntersection=N.clipIntersection,L.displacementMap=N.displacementMap,L.displacementScale=N.displacementScale,L.displacementBias=N.displacementBias,L.wireframeLinewidth=N.wireframeLinewidth,L.linewidth=N.linewidth,S.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const B=t.properties.get(L);B.light=S}return L}function y(T,N,S,P,L){if(T.visible===!1)return;if(T.layers.test(N.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===sa)&&(!T.frustumCulled||T.intersectsFrustum(i))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const V=e.update(T),k=T.material;if(Array.isArray(k)){const j=V.groups;for(let te=0,K=j.length;te<K;te++){const G=j[te],H=k[G.materialIndex];if(H&&H.visible){const A=b(T,H,P,L);T.onBeforeShadow(t,T,N,S,V,A,G),t.renderBufferDirect(S,null,V,A,T,G),T.onAfterShadow(t,T,N,S,V,A,G)}}}else if(k.visible){const j=b(T,k,P,L);T.onBeforeShadow(t,T,N,S,V,j,null),t.renderBufferDirect(S,null,V,j,T,null),T.onAfterShadow(t,T,N,S,V,j,null)}}const B=T.children;for(let V=0,k=B.length;V<k;V++)y(B[V],N,S,P,L)}function w(T){T.target.removeEventListener("dispose",w);for(const S in u){const P=u[S],L=T.target.uuid;L in P&&(P[L].dispose(),delete P[L])}}}function CT(t,e){function n(){let F=!1;const xe=new Ct;let ne=null;const _e=new Ct(0,0,0,0);return{setMask:function(Ee){ne!==Ee&&!F&&(t.colorMask(Ee,Ee,Ee,Ee),ne=Ee)},setLocked:function(Ee){F=Ee},setClear:function(Ee,se,ze,Ue,gt){gt===!0&&(Ee*=Ue,se*=Ue,ze*=Ue),xe.set(Ee,se,ze,Ue),_e.equals(xe)===!1&&(t.clearColor(Ee,se,ze,Ue),_e.copy(xe))},reset:function(){F=!1,ne=null,_e.set(-1,0,0,0)}}}function i(){let F=!1,xe=!1,ne=null,_e=null,Ee=null;return{setReversed:function(se){if(xe!==se){const ze=e.get("EXT_clip_control");se?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),xe=se;const Ue=Ee;Ee=null,this.setClear(Ue)}},getReversed:function(){return xe},setTest:function(se){se?$(t.DEPTH_TEST):le(t.DEPTH_TEST)},setMask:function(se){ne!==se&&!F&&(t.depthMask(se),ne=se)},setFunc:function(se){if(xe&&(se=iy[se]),_e!==se){switch(se){case id:t.depthFunc(t.NEVER);break;case rd:t.depthFunc(t.ALWAYS);break;case sd:t.depthFunc(t.LESS);break;case Da:t.depthFunc(t.LEQUAL);break;case ad:t.depthFunc(t.EQUAL);break;case od:t.depthFunc(t.GEQUAL);break;case ld:t.depthFunc(t.GREATER);break;case cd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=se}},setLocked:function(se){F=se},setClear:function(se){Ee!==se&&(Ee=se,xe&&(se=1-se),t.clearDepth(se))},reset:function(){F=!1,ne=null,_e=null,Ee=null,xe=!1}}}function r(){let F=!1,xe=null,ne=null,_e=null,Ee=null,se=null,ze=null,Ue=null,gt=null;return{setTest:function(ut){F||(ut?$(t.STENCIL_TEST):le(t.STENCIL_TEST))},setMask:function(ut){xe!==ut&&!F&&(t.stencilMask(ut),xe=ut)},setFunc:function(ut,Un,Zn){(ne!==ut||_e!==Un||Ee!==Zn)&&(t.stencilFunc(ut,Un,Zn),ne=ut,_e=Un,Ee=Zn)},setOp:function(ut,Un,Zn){(se!==ut||ze!==Un||Ue!==Zn)&&(t.stencilOp(ut,Un,Zn),se=ut,ze=Un,Ue=Zn)},setLocked:function(ut){F=ut},setClear:function(ut){gt!==ut&&(t.clearStencil(ut),gt=ut)},reset:function(){F=!1,xe=null,ne=null,_e=null,Ee=null,se=null,ze=null,Ue=null,gt=null}}}const s=new n,a=new i,o=new r,c=new WeakMap,u=new WeakMap;let h={},p={},d={},m=new WeakMap,v=[],M=null,g=!1,f=null,x=null,b=null,y=null,w=null,T=null,N=null,S=new qe(0,0,0),P=0,L=!1,I=null,B=null,V=null,k=null,j=null;const te=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,G=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(H)[1]),K=G>=1):H.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),K=G>=2);let A=null,C={};const Q=t.getParameter(t.SCISSOR_BOX),re=t.getParameter(t.VIEWPORT),pe=new Ct().fromArray(Q),he=new Ct().fromArray(re);function me(F,xe,ne,_e){const Ee=new Uint8Array(4),se=t.createTexture();t.bindTexture(F,se),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ze=0;ze<ne;ze++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(xe,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,Ee):t.texImage2D(xe+ze,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ee);return se}const O={};O[t.TEXTURE_2D]=me(t.TEXTURE_2D,t.TEXTURE_2D,1),O[t.TEXTURE_CUBE_MAP]=me(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),O[t.TEXTURE_2D_ARRAY]=me(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),O[t.TEXTURE_3D]=me(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),$(t.DEPTH_TEST),a.setFunc(Da),Te(!1),Ve(Ap),$(t.CULL_FACE),de(Ti);function $(F){h[F]!==!0&&(t.enable(F),h[F]=!0)}function le(F){h[F]!==!1&&(t.disable(F),h[F]=!1)}function we(F,xe){return d[F]!==xe?(t.bindFramebuffer(F,xe),d[F]=xe,F===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=xe),F===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=xe),!0):!1}function oe(F,xe){let ne=v,_e=!1;if(F){ne=m.get(xe),ne===void 0&&(ne=[],m.set(xe,ne));const Ee=F.textures;if(ne.length!==Ee.length||ne[0]!==t.COLOR_ATTACHMENT0){for(let se=0,ze=Ee.length;se<ze;se++)ne[se]=t.COLOR_ATTACHMENT0+se;ne.length=Ee.length,_e=!0}}else ne[0]!==t.BACK&&(ne[0]=t.BACK,_e=!0);_e&&t.drawBuffers(ne)}function Ne(F){return M!==F?(t.useProgram(F),M=F,!0):!1}const Qe={[is]:t.FUNC_ADD,[ES]:t.FUNC_SUBTRACT,[wS]:t.FUNC_REVERSE_SUBTRACT};Qe[TS]=t.MIN,Qe[CS]=t.MAX;const ae={[AS]:t.ZERO,[RS]:t.ONE,[NS]:t.SRC_COLOR,[Gv]:t.SRC_ALPHA,[FS]:t.SRC_ALPHA_SATURATE,[DS]:t.DST_COLOR,[LS]:t.DST_ALPHA,[PS]:t.ONE_MINUS_SRC_COLOR,[jv]:t.ONE_MINUS_SRC_ALPHA,[US]:t.ONE_MINUS_DST_COLOR,[IS]:t.ONE_MINUS_DST_ALPHA,[OS]:t.CONSTANT_COLOR,[kS]:t.ONE_MINUS_CONSTANT_COLOR,[BS]:t.CONSTANT_ALPHA,[zS]:t.ONE_MINUS_CONSTANT_ALPHA};function de(F,xe,ne,_e,Ee,se,ze,Ue,gt,ut){if(F===Ti){g===!0&&(le(t.BLEND),g=!1);return}if(g===!1&&($(t.BLEND),g=!0),F!==bS){if(F!==f||ut!==L){if((x!==is||w!==is)&&(t.blendEquation(t.FUNC_ADD),x=is,w=is),ut)switch(F){case bs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rp:t.blendFunc(t.ONE,t.ONE);break;case Np:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Pp:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:ot("WebGLState: Invalid blending: ",F);break}else switch(F){case bs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Rp:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Np:ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Pp:ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ot("WebGLState: Invalid blending: ",F);break}b=null,y=null,T=null,N=null,S.set(0,0,0),P=0,f=F,L=ut}return}Ee=Ee||xe,se=se||ne,ze=ze||_e,(xe!==x||Ee!==w)&&(t.blendEquationSeparate(Qe[xe],Qe[Ee]),x=xe,w=Ee),(ne!==b||_e!==y||se!==T||ze!==N)&&(t.blendFuncSeparate(ae[ne],ae[_e],ae[se],ae[ze]),b=ne,y=_e,T=se,N=ze),(Ue.equals(S)===!1||gt!==P)&&(t.blendColor(Ue.r,Ue.g,Ue.b,gt),S.copy(Ue),P=gt),f=F,L=!1}function De(F,xe){F.side===yi?le(t.CULL_FACE):$(t.CULL_FACE);let ne=F.side===hn;xe&&(ne=!ne),Te(ne),F.blending===bs&&F.transparent===!1?de(Ti):de(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const _e=F.stencilWrite;o.setTest(_e),_e&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Ye(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?$(t.SAMPLE_ALPHA_TO_COVERAGE):le(t.SAMPLE_ALPHA_TO_COVERAGE)}function Te(F){I!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),I=F)}function Ve(F){F!==SS?($(t.CULL_FACE),F!==B&&(F===Ap?t.cullFace(t.BACK):F===yS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):le(t.CULL_FACE),B=F}function Ze(F){F!==V&&(K&&t.lineWidth(F),V=F)}function Ye(F,xe,ne){F?($(t.POLYGON_OFFSET_FILL),(k!==xe||j!==ne)&&(k=xe,j=ne,a.getReversed()&&(xe=-xe),t.polygonOffset(xe,ne))):le(t.POLYGON_OFFSET_FILL)}function Ie(F){F?$(t.SCISSOR_TEST):le(t.SCISSOR_TEST)}function $e(F){F===void 0&&(F=t.TEXTURE0+te-1),A!==F&&(t.activeTexture(F),A=F)}function D(F,xe,ne){ne===void 0&&(A===null?ne=t.TEXTURE0+te-1:ne=A);let _e=C[ne];_e===void 0&&(_e={type:void 0,texture:void 0},C[ne]=_e),(_e.type!==F||_e.texture!==xe)&&(A!==ne&&(t.activeTexture(ne),A=ne),t.bindTexture(F,xe||O[F]),_e.type=F,_e.texture=xe)}function st(){const F=C[A];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function He(){try{t.compressedTexImage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function R(){try{t.compressedTexImage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function _(){try{t.texSubImage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function z(){try{t.texSubImage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function Y(){try{t.compressedTexSubImage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function J(){try{t.compressedTexSubImage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function ue(){try{t.texStorage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function fe(){try{t.texStorage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function ee(){try{t.texImage2D(...arguments)}catch(F){ot("WebGLState:",F)}}function ie(){try{t.texImage3D(...arguments)}catch(F){ot("WebGLState:",F)}}function ge(F){return p[F]!==void 0?p[F]:t.getParameter(F)}function ke(F,xe){p[F]!==xe&&(t.pixelStorei(F,xe),p[F]=xe)}function Se(F){pe.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),pe.copy(F))}function ve(F){he.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),he.copy(F))}function Be(F,xe){let ne=u.get(xe);ne===void 0&&(ne=new WeakMap,u.set(xe,ne));let _e=ne.get(F);_e===void 0&&(_e=t.getUniformBlockIndex(xe,F.name),ne.set(F,_e))}function Ge(F,xe){const _e=u.get(xe).get(F);c.get(xe)!==_e&&(t.uniformBlockBinding(xe,_e,F.__bindingPointIndex),c.set(xe,_e))}function Ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},p={},A=null,C={},d={},m=new WeakMap,v=[],M=null,g=!1,f=null,x=null,b=null,y=null,w=null,T=null,N=null,S=new qe(0,0,0),P=0,L=!1,I=null,B=null,V=null,k=null,j=null,pe.set(0,0,t.canvas.width,t.canvas.height),he.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:$,disable:le,bindFramebuffer:we,drawBuffers:oe,useProgram:Ne,setBlending:de,setMaterial:De,setFlipSided:Te,setCullFace:Ve,setLineWidth:Ze,setPolygonOffset:Ye,setScissorTest:Ie,activeTexture:$e,bindTexture:D,unbindTexture:st,compressedTexImage2D:He,compressedTexImage3D:R,texImage2D:ee,texImage3D:ie,pixelStorei:ke,getParameter:ge,updateUBOMapping:Be,uniformBlockBinding:Ge,texStorage2D:ue,texStorage3D:fe,texSubImage2D:_,texSubImage3D:z,compressedTexSubImage2D:Y,compressedTexSubImage3D:J,scissor:Se,viewport:ve,reset:Ke}}function AT(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ct,h=new WeakMap,p=new Set;let d;const m=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,_){return v?new OffscreenCanvas(R,_):Ll("canvas")}function g(R,_,z){let Y=1;const J=He(R);if((J.width>z||J.height>z)&&(Y=z/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ue=Math.floor(Y*J.width),fe=Math.floor(Y*J.height);d===void 0&&(d=M(ue,fe));const ee=_?M(ue,fe):d;return ee.width=ue,ee.height=fe,ee.getContext("2d").drawImage(R,0,0,ue,fe),je("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+ue+"x"+fe+")."),ee}else return"data"in R&&je("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),R;return R}function f(R){return R.generateMipmaps}function x(R){t.generateMipmap(R)}function b(R){return R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?t.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(R,_,z,Y,J,ue=!1){if(R!==null){if(t[R]!==void 0)return t[R];je("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;Y&&(fe=e.get("EXT_texture_norm16"),fe||je("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ee=_;if(_===t.RED&&(z===t.FLOAT&&(ee=t.R32F),z===t.HALF_FLOAT&&(ee=t.R16F),z===t.UNSIGNED_BYTE&&(ee=t.R8),z===t.UNSIGNED_SHORT&&fe&&(ee=fe.R16_EXT),z===t.SHORT&&fe&&(ee=fe.R16_SNORM_EXT)),_===t.RED_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.R8UI),z===t.UNSIGNED_SHORT&&(ee=t.R16UI),z===t.UNSIGNED_INT&&(ee=t.R32UI),z===t.BYTE&&(ee=t.R8I),z===t.SHORT&&(ee=t.R16I),z===t.INT&&(ee=t.R32I)),_===t.RG&&(z===t.FLOAT&&(ee=t.RG32F),z===t.HALF_FLOAT&&(ee=t.RG16F),z===t.UNSIGNED_BYTE&&(ee=t.RG8),z===t.UNSIGNED_SHORT&&fe&&(ee=fe.RG16_EXT),z===t.SHORT&&fe&&(ee=fe.RG16_SNORM_EXT)),_===t.RG_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.RG8UI),z===t.UNSIGNED_SHORT&&(ee=t.RG16UI),z===t.UNSIGNED_INT&&(ee=t.RG32UI),z===t.BYTE&&(ee=t.RG8I),z===t.SHORT&&(ee=t.RG16I),z===t.INT&&(ee=t.RG32I)),_===t.RGB_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.RGB8UI),z===t.UNSIGNED_SHORT&&(ee=t.RGB16UI),z===t.UNSIGNED_INT&&(ee=t.RGB32UI),z===t.BYTE&&(ee=t.RGB8I),z===t.SHORT&&(ee=t.RGB16I),z===t.INT&&(ee=t.RGB32I)),_===t.RGBA_INTEGER&&(z===t.UNSIGNED_BYTE&&(ee=t.RGBA8UI),z===t.UNSIGNED_SHORT&&(ee=t.RGBA16UI),z===t.UNSIGNED_INT&&(ee=t.RGBA32UI),z===t.BYTE&&(ee=t.RGBA8I),z===t.SHORT&&(ee=t.RGBA16I),z===t.INT&&(ee=t.RGBA32I)),_===t.RGB&&(z===t.UNSIGNED_SHORT&&fe&&(ee=fe.RGB16_EXT),z===t.SHORT&&fe&&(ee=fe.RGB16_SNORM_EXT),z===t.UNSIGNED_INT_5_9_9_9_REV&&(ee=t.RGB9_E5),z===t.UNSIGNED_INT_10F_11F_11F_REV&&(ee=t.R11F_G11F_B10F)),_===t.RGBA){const ie=ue?Nl:it.getTransfer(J);z===t.FLOAT&&(ee=t.RGBA32F),z===t.HALF_FLOAT&&(ee=t.RGBA16F),z===t.UNSIGNED_BYTE&&(ee=ie===ft?t.SRGB8_ALPHA8:t.RGBA8),z===t.UNSIGNED_SHORT&&fe&&(ee=fe.RGBA16_EXT),z===t.SHORT&&fe&&(ee=fe.RGBA16_SNORM_EXT),z===t.UNSIGNED_SHORT_4_4_4_4&&(ee=t.RGBA4),z===t.UNSIGNED_SHORT_5_5_5_1&&(ee=t.RGB5_A1)}return(ee===t.R16F||ee===t.R32F||ee===t.RG16F||ee===t.RG32F||ee===t.RGBA16F||ee===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function w(R,_){let z;return R?_===null||_===di||_===Fa?z=t.DEPTH24_STENCIL8:_===ai?z=t.DEPTH32F_STENCIL8:_===Ua&&(z=t.DEPTH24_STENCIL8,je("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===di||_===Fa?z=t.DEPTH_COMPONENT24:_===ai?z=t.DEPTH_COMPONENT32F:_===Ua&&(z=t.DEPTH_COMPONENT16),z}function T(R,_){return f(R)===!0||R.isFramebufferTexture&&R.minFilter!==Vt&&R.minFilter!==Zt?Math.log2(Math.max(_.width,_.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?_.mipmaps.length:1}function N(R){const _=R.target;_.removeEventListener("dispose",N),P(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&p.delete(_)}function S(R){const _=R.target;_.removeEventListener("dispose",S),I(_)}function P(R){const _=i.get(R);if(_.__webglInit===void 0)return;const z=R.source,Y=m.get(z);if(Y){const J=Y[_.__cacheKey];J.usedTimes--,J.usedTimes===0&&L(R),Object.keys(Y).length===0&&m.delete(z)}i.remove(R)}function L(R){const _=i.get(R);t.deleteTexture(_.__webglTexture);const z=R.source,Y=m.get(z);delete Y[_.__cacheKey],a.memory.textures--}function I(R){const _=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(_.__webglFramebuffer[Y]))for(let J=0;J<_.__webglFramebuffer[Y].length;J++)t.deleteFramebuffer(_.__webglFramebuffer[Y][J]);else t.deleteFramebuffer(_.__webglFramebuffer[Y]);_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer[Y])}else{if(Array.isArray(_.__webglFramebuffer))for(let Y=0;Y<_.__webglFramebuffer.length;Y++)t.deleteFramebuffer(_.__webglFramebuffer[Y]);else t.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&t.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&t.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let Y=0;Y<_.__webglColorRenderbuffer.length;Y++)_.__webglColorRenderbuffer[Y]&&t.deleteRenderbuffer(_.__webglColorRenderbuffer[Y]);_.__webglDepthRenderbuffer&&t.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const z=R.textures;for(let Y=0,J=z.length;Y<J;Y++){const ue=i.get(z[Y]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(z[Y])}i.remove(R)}let B=0;function V(){B=0}function k(){return B}function j(R){B=R}function te(){const R=B;return R>=r.maxTextures&&je("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+r.maxTextures),B+=1,R}function K(R){const _=[];return _.push(R.wrapS),_.push(R.wrapT),_.push(R.wrapR||0),_.push(R.magFilter),_.push(R.minFilter),_.push(R.anisotropy),_.push(R.internalFormat),_.push(R.format),_.push(R.type),_.push(R.generateMipmaps),_.push(R.premultiplyAlpha),_.push(R.flipY),_.push(R.unpackAlignment),_.push(R.colorSpace),_.join()}function G(R,_){const z=i.get(R);if(R.isVideoTexture&&D(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&z.__version!==R.version){const Y=R.image;if(Y===null)je("WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)je("WebGLRenderer: Texture marked for update but image is incomplete");else{le(z,R,_);return}}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,z.__webglTexture,t.TEXTURE0+_)}function H(R,_){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){le(z,R,_);return}else R.isExternalTexture&&(z.__webglTexture=R.sourceTexture?R.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,z.__webglTexture,t.TEXTURE0+_)}function A(R,_){const z=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){le(z,R,_);return}n.bindTexture(t.TEXTURE_3D,z.__webglTexture,t.TEXTURE0+_)}function C(R,_){const z=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&z.__version!==R.version){we(z,R,_);return}n.bindTexture(t.TEXTURE_CUBE_MAP,z.__webglTexture,t.TEXTURE0+_)}const Q={[ud]:t.REPEAT,[Ei]:t.CLAMP_TO_EDGE,[dd]:t.MIRRORED_REPEAT},re={[Vt]:t.NEAREST,[GS]:t.NEAREST_MIPMAP_NEAREST,[ho]:t.NEAREST_MIPMAP_LINEAR,[Zt]:t.LINEAR,[Pc]:t.LINEAR_MIPMAP_NEAREST,[br]:t.LINEAR_MIPMAP_LINEAR},pe={[qS]:t.NEVER,[QS]:t.ALWAYS,[YS]:t.LESS,[$f]:t.LEQUAL,[$S]:t.EQUAL,[Kf]:t.GEQUAL,[KS]:t.GREATER,[ZS]:t.NOTEQUAL};function he(R,_){if(_.type===ai&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Zt||_.magFilter===Pc||_.magFilter===ho||_.magFilter===br||_.minFilter===Zt||_.minFilter===Pc||_.minFilter===ho||_.minFilter===br)&&je("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,Q[_.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,Q[_.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,Q[_.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,re[_.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,re[_.minFilter]),_.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Vt||_.minFilter!==ho&&_.minFilter!==br||_.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,r.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function me(R,_){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,_.addEventListener("dispose",N));const Y=_.source;let J=m.get(Y);J===void 0&&(J={},m.set(Y,J));const ue=K(_);if(ue!==R.__cacheKey){J[ue]===void 0&&(J[ue]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[ue].usedTimes++;const fe=J[R.__cacheKey];fe!==void 0&&(J[R.__cacheKey].usedTimes--,fe.usedTimes===0&&L(_)),R.__cacheKey=ue,R.__webglTexture=J[ue].texture}return z}function O(R,_,z){return Math.floor(Math.floor(R/z)/_)}function $(R,_,z,Y){const ue=R.updateRanges;if(ue.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,_.width,_.height,z,Y,_.data);else{ue.sort((ke,Se)=>ke.start-Se.start);let fe=0;for(let ke=1;ke<ue.length;ke++){const Se=ue[fe],ve=ue[ke],Be=Se.start+Se.count,Ge=O(ve.start,_.width,4),Ke=O(Se.start,_.width,4);ve.start<=Be+1&&Ge===Ke&&O(ve.start+ve.count-1,_.width,4)===Ge?Se.count=Math.max(Se.count,ve.start+ve.count-Se.start):(++fe,ue[fe]=ve)}ue.length=fe+1;const ee=n.getParameter(t.UNPACK_ROW_LENGTH),ie=n.getParameter(t.UNPACK_SKIP_PIXELS),ge=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,_.width);for(let ke=0,Se=ue.length;ke<Se;ke++){const ve=ue[ke],Be=Math.floor(ve.start/4),Ge=Math.ceil(ve.count/4),Ke=Be%_.width,F=Math.floor(Be/_.width),xe=Ge,ne=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(t.UNPACK_SKIP_ROWS,F),n.texSubImage2D(t.TEXTURE_2D,0,Ke,F,xe,ne,z,Y,_.data)}R.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,ee),n.pixelStorei(t.UNPACK_SKIP_PIXELS,ie),n.pixelStorei(t.UNPACK_SKIP_ROWS,ge)}}function le(R,_,z){let Y=t.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(Y=t.TEXTURE_2D_ARRAY),_.isData3DTexture&&(Y=t.TEXTURE_3D);const J=me(R,_),ue=_.source;n.bindTexture(Y,R.__webglTexture,t.TEXTURE0+z);const fe=i.get(ue);if(ue.version!==fe.__version||J===!0){if(n.activeTexture(t.TEXTURE0+z),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){const ne=it.getPrimaries(it.workingColorSpace),_e=_.colorSpace===Ki?null:it.getPrimaries(_.colorSpace),Ee=_.colorSpace===Ki||ne===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee)}n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment);let ie=g(_.image,!1,r.maxTextureSize);ie=st(_,ie);const ge=s.convert(_.format,_.colorSpace),ke=s.convert(_.type);let Se=y(_.internalFormat,ge,ke,_.normalized,_.colorSpace,_.isVideoTexture);he(Y,_);let ve;const Be=_.mipmaps,Ge=_.isVideoTexture!==!0,Ke=fe.__version===void 0||J===!0,F=ue.dataReady,xe=T(_,ie);if(_.isDepthTexture)Se=w(_.format===Er,_.type),Ke&&(Ge?n.texStorage2D(t.TEXTURE_2D,1,Se,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,Se,ie.width,ie.height,0,ge,ke,null));else if(_.isDataTexture)if(Be.length>0){Ge&&Ke&&n.texStorage2D(t.TEXTURE_2D,xe,Se,Be[0].width,Be[0].height);for(let ne=0,_e=Be.length;ne<_e;ne++)ve=Be[ne],Ge?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ve.width,ve.height,ge,ke,ve.data):n.texImage2D(t.TEXTURE_2D,ne,Se,ve.width,ve.height,0,ge,ke,ve.data);_.generateMipmaps=!1}else Ge?(Ke&&n.texStorage2D(t.TEXTURE_2D,xe,Se,ie.width,ie.height),F&&$(_,ie,ge,ke)):n.texImage2D(t.TEXTURE_2D,0,Se,ie.width,ie.height,0,ge,ke,ie.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ge&&Ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Se,Be[0].width,Be[0].height,ie.depth);for(let ne=0,_e=Be.length;ne<_e;ne++)if(ve=Be[ne],_.format!==jn)if(ge!==null)if(Ge){if(F)if(_.layerUpdates.size>0){const Ee=rm(ve.width,ve.height,_.format,_.type);for(const se of _.layerUpdates){const ze=ve.data.subarray(se*Ee/ve.data.BYTES_PER_ELEMENT,(se+1)*Ee/ve.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,se,ve.width,ve.height,1,ge,ze)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,ve.width,ve.height,ie.depth,ge,ve.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,Se,ve.width,ve.height,ie.depth,0,ve.data,0,0);else je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,ve.width,ve.height,ie.depth,ge,ke,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,Se,ve.width,ve.height,ie.depth,0,ge,ke,ve.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Ge&&Ke&&n.texStorage2D(t.TEXTURE_2D,xe,Se,Be[0].width,Be[0].height);for(let ne=0,_e=Be.length;ne<_e;ne++)ve=Be[ne],_.format!==jn?ge!==null?Ge?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,ve.width,ve.height,ge,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,Se,ve.width,ve.height,0,ve.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ve.width,ve.height,ge,ke,ve.data):n.texImage2D(t.TEXTURE_2D,ne,Se,ve.width,ve.height,0,ge,ke,ve.data)}else if(_.isDataArrayTexture)if(Ge){if(Ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Se,ie.width,ie.height,ie.depth),F)if(_.layerUpdates.size>0){const ne=rm(ie.width,ie.height,_.format,_.type);for(const _e of _.layerUpdates){const Ee=ie.data.subarray(_e*ne/ie.data.BYTES_PER_ELEMENT,(_e+1)*ne/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,_e,ie.width,ie.height,1,ge,ke,Ee)}_.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,ke,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Se,ie.width,ie.height,ie.depth,0,ge,ke,ie.data);else if(_.isData3DTexture)Ge?(Ke&&n.texStorage3D(t.TEXTURE_3D,xe,Se,ie.width,ie.height,ie.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,ke,ie.data)):n.texImage3D(t.TEXTURE_3D,0,Se,ie.width,ie.height,ie.depth,0,ge,ke,ie.data);else if(_.isFramebufferTexture){if(Ke)if(Ge)n.texStorage2D(t.TEXTURE_2D,xe,Se,ie.width,ie.height);else{let ne=ie.width,_e=ie.height;for(let Ee=0;Ee<xe;Ee++)n.texImage2D(t.TEXTURE_2D,Ee,Se,ne,_e,0,ge,ke,null),ne>>=1,_e>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in t){const ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),ie.parentNode!==ne){ne.appendChild(ie),p.add(_),ne.onpaint=_e=>{const Ee=_e.changedElements;for(const se of p)Ee.includes(se.image)&&(se.needsUpdate=!0)},ne.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,ie);else{const Ee=t.RGBA,se=t.RGBA,ze=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ee,se,ze,ie)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Be.length>0){if(Ge&&Ke){const ne=He(Be[0]);n.texStorage2D(t.TEXTURE_2D,xe,Se,ne.width,ne.height)}for(let ne=0,_e=Be.length;ne<_e;ne++)ve=Be[ne],Ge?F&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,ge,ke,ve):n.texImage2D(t.TEXTURE_2D,ne,Se,ge,ke,ve);_.generateMipmaps=!1}else if(Ge){if(Ke){const ne=He(ie);n.texStorage2D(t.TEXTURE_2D,xe,Se,ne.width,ne.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,ke,ie)}else n.texImage2D(t.TEXTURE_2D,0,Se,ge,ke,ie);f(_)&&x(Y),fe.__version=ue.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function we(R,_,z){if(_.image.length!==6)return;const Y=me(R,_),J=_.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+z);const ue=i.get(J);if(J.version!==ue.__version||Y===!0){n.activeTexture(t.TEXTURE0+z);const fe=it.getPrimaries(it.workingColorSpace),ee=_.colorSpace===Ki?null:it.getPrimaries(_.colorSpace),ie=_.colorSpace===Ki||fe===ee?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const ge=_.isCompressedTexture||_.image[0].isCompressedTexture,ke=_.image[0]&&_.image[0].isDataTexture,Se=[];for(let se=0;se<6;se++)!ge&&!ke?Se[se]=g(_.image[se],!0,r.maxCubemapSize):Se[se]=ke?_.image[se].image:_.image[se],Se[se]=st(_,Se[se]);const ve=Se[0],Be=s.convert(_.format,_.colorSpace),Ge=s.convert(_.type),Ke=y(_.internalFormat,Be,Ge,_.normalized,_.colorSpace),F=_.isVideoTexture!==!0,xe=ue.__version===void 0||Y===!0,ne=J.dataReady;let _e=T(_,ve);he(t.TEXTURE_CUBE_MAP,_);let Ee;if(ge){F&&xe&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,Ke,ve.width,ve.height);for(let se=0;se<6;se++){Ee=Se[se].mipmaps;for(let ze=0;ze<Ee.length;ze++){const Ue=Ee[ze];_.format!==jn?Be!==null?F?ne&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze,0,0,Ue.width,Ue.height,Be,Ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze,Ke,Ue.width,Ue.height,0,Ue.data):je("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze,0,0,Ue.width,Ue.height,Be,Ge,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze,Ke,Ue.width,Ue.height,0,Be,Ge,Ue.data)}}}else{if(Ee=_.mipmaps,F&&xe){Ee.length>0&&_e++;const se=He(Se[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,Ke,se.width,se.height)}for(let se=0;se<6;se++)if(ke){F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Se[se].width,Se[se].height,Be,Ge,Se[se].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ke,Se[se].width,Se[se].height,0,Be,Ge,Se[se].data);for(let ze=0;ze<Ee.length;ze++){const gt=Ee[ze].image[se].image;F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze+1,0,0,gt.width,gt.height,Be,Ge,gt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze+1,Ke,gt.width,gt.height,0,Be,Ge,gt.data)}}else{F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Be,Ge,Se[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ke,Be,Ge,Se[se]);for(let ze=0;ze<Ee.length;ze++){const Ue=Ee[ze];F?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze+1,0,0,Be,Ge,Ue.image[se]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+se,ze+1,Ke,Be,Ge,Ue.image[se])}}}f(_)&&x(t.TEXTURE_CUBE_MAP),ue.__version=J.version,_.onUpdate&&_.onUpdate(_)}R.__version=_.version}function oe(R,_,z,Y,J,ue){const fe=s.convert(z.format,z.colorSpace),ee=s.convert(z.type),ie=y(z.internalFormat,fe,ee,z.normalized,z.colorSpace),ge=i.get(_),ke=i.get(z);if(ke.__renderTarget=_,!ge.__hasExternalTextures){const Se=Math.max(1,_.width>>ue),ve=Math.max(1,_.height>>ue);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,ue,ie,Se,ve,_.depth,0,fe,ee,null):n.texImage2D(J,ue,ie,Se,ve,0,fe,ee,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),$e(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Y,J,ke.__webglTexture,0,Ie(_)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Y,J,ke.__webglTexture,ue),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Ne(R,_,z){if(t.bindRenderbuffer(t.RENDERBUFFER,R),_.depthBuffer){const Y=_.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,ue=w(_.stencilBuffer,J),fe=_.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;$e(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ie(_),ue,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie(_),ue,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ue,_.width,_.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,fe,t.RENDERBUFFER,R)}else{const Y=_.textures;for(let J=0;J<Y.length;J++){const ue=Y[J],fe=s.convert(ue.format,ue.colorSpace),ee=s.convert(ue.type),ie=y(ue.internalFormat,fe,ee,ue.normalized,ue.colorSpace);$e(_)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ie(_),ie,_.width,_.height):z?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ie(_),ie,_.width,_.height):t.renderbufferStorage(t.RENDERBUFFER,ie,_.width,_.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Qe(R,_,z){const Y=_.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const J=i.get(_.depthTexture);if(J.__renderTarget=_,(!J.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y){if(J.__webglInit===void 0&&(J.__webglInit=!0,_.depthTexture.addEventListener("dispose",N)),J.__webglTexture===void 0){J.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,J.__webglTexture),he(t.TEXTURE_CUBE_MAP,_.depthTexture);const ge=s.convert(_.depthTexture.format),ke=s.convert(_.depthTexture.type);let Se;_.depthTexture.format===Ii?Se=t.DEPTH_COMPONENT24:_.depthTexture.format===Er&&(Se=t.DEPTH24_STENCIL8);for(let ve=0;ve<6;ve++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,Se,_.width,_.height,0,ge,ke,null)}}else G(_.depthTexture,0);const ue=J.__webglTexture,fe=Ie(_),ee=Y?t.TEXTURE_CUBE_MAP_POSITIVE_X+z:t.TEXTURE_2D,ie=_.depthTexture.format===Er?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(_.depthTexture.format===Ii)$e(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,ue,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,ue,0);else if(_.depthTexture.format===Er)$e(_)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ie,ee,ue,0,fe):t.framebufferTexture2D(t.FRAMEBUFFER,ie,ee,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ae(R){const _=i.get(R),z=R.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==R.depthTexture){const Y=R.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),Y){const J=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),_.__depthDisposeCallback=J}_.__boundDepthTexture=Y}if(R.depthTexture&&!_.__autoAllocateDepthBuffer)if(z)for(let Y=0;Y<6;Y++)Qe(_.__webglFramebuffer[Y],R,Y);else{const Y=R.texture.mipmaps;Y&&Y.length>0?Qe(_.__webglFramebuffer[0],R,0):Qe(_.__webglFramebuffer,R,0)}else if(z){_.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[Y]),_.__webglDepthbuffer[Y]===void 0)_.__webglDepthbuffer[Y]=t.createRenderbuffer(),Ne(_.__webglDepthbuffer[Y],R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer[Y];t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ue)}}else{const Y=R.texture.mipmaps;if(Y&&Y.length>0?n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=t.createRenderbuffer(),Ne(_.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=_.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ue),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,ue)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function de(R,_,z){const Y=i.get(R);_!==void 0&&oe(Y.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),z!==void 0&&ae(R)}function De(R){const _=R.texture,z=i.get(R),Y=i.get(_);R.addEventListener("dispose",S);const J=R.textures,ue=R.isWebGLCubeRenderTarget===!0,fe=J.length>1;if(fe||(Y.__webglTexture===void 0&&(Y.__webglTexture=t.createTexture()),Y.__version=_.version,a.memory.textures++),ue){z.__webglFramebuffer=[];for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[ee]=[];for(let ie=0;ie<_.mipmaps.length;ie++)z.__webglFramebuffer[ee][ie]=t.createFramebuffer()}else z.__webglFramebuffer[ee]=t.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let ee=0;ee<_.mipmaps.length;ee++)z.__webglFramebuffer[ee]=t.createFramebuffer()}else z.__webglFramebuffer=t.createFramebuffer();if(fe)for(let ee=0,ie=J.length;ee<ie;ee++){const ge=i.get(J[ee]);ge.__webglTexture===void 0&&(ge.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&$e(R)===!1){z.__webglMultisampledFramebuffer=t.createFramebuffer(),z.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ee=0;ee<J.length;ee++){const ie=J[ee];z.__webglColorRenderbuffer[ee]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,z.__webglColorRenderbuffer[ee]);const ge=s.convert(ie.format,ie.colorSpace),ke=s.convert(ie.type),Se=y(ie.internalFormat,ge,ke,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),ve=Ie(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Se,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ee,t.RENDERBUFFER,z.__webglColorRenderbuffer[ee])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=t.createRenderbuffer(),Ne(z.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ue){n.bindTexture(t.TEXTURE_CUBE_MAP,Y.__webglTexture),he(t.TEXTURE_CUBE_MAP,_);for(let ee=0;ee<6;ee++)if(_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)oe(z.__webglFramebuffer[ee][ie],R,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ie);else oe(z.__webglFramebuffer[ee],R,_,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0);f(_)&&x(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(fe){for(let ee=0,ie=J.length;ee<ie;ee++){const ge=J[ee],ke=i.get(ge);let Se=t.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Se=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Se,ke.__webglTexture),he(Se,ge),oe(z.__webglFramebuffer,R,ge,t.COLOR_ATTACHMENT0+ee,Se,0),f(ge)&&x(Se)}n.unbindTexture()}else{let ee=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ee,Y.__webglTexture),he(ee,_),_.mipmaps&&_.mipmaps.length>0)for(let ie=0;ie<_.mipmaps.length;ie++)oe(z.__webglFramebuffer[ie],R,_,t.COLOR_ATTACHMENT0,ee,ie);else oe(z.__webglFramebuffer,R,_,t.COLOR_ATTACHMENT0,ee,0);f(_)&&x(ee),n.unbindTexture()}R.depthBuffer&&ae(R)}function Te(R){const _=R.textures;for(let z=0,Y=_.length;z<Y;z++){const J=_[z];if(f(J)){const ue=b(R),fe=i.get(J).__webglTexture;n.bindTexture(ue,fe),x(ue),n.unbindTexture()}}}const Ve=[],Ze=[];function Ye(R){if(R.samples>0){if($e(R)===!1){const _=R.textures,z=R.width,Y=R.height;let J=t.COLOR_BUFFER_BIT;const ue=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(R),ee=_.length>1;if(ee)for(let ge=0;ge<_.length;ge++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const ie=R.texture.mipmaps;ie&&ie.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let ge=0;ge<_.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ee){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);const ke=i.get(_[ge]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,z,Y,0,0,z,Y,J,t.NEAREST),c===!0&&(Ve.length=0,Ze.length=0,Ve.push(t.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Ve.push(ue),Ze.push(ue),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,Ze)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ve))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ee)for(let ge=0;ge<_.length;ge++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,fe.__webglColorRenderbuffer[ge]);const ke=i.get(_[ge]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const _=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[_])}}}function Ie(R){return Math.min(r.maxSamples,R.samples)}function $e(R){const _=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function D(R){const _=a.render.frame;h.get(R)!==_&&(h.set(R,_),R.update())}function st(R,_){const z=R.colorSpace,Y=R.format,J=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==Rl&&z!==Ki&&(it.getTransfer(z)===ft?(Y!==jn||J!==Nn)&&je("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ot("WebGLTextures: Unsupported texture color space:",z)),_}function He(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=te,this.resetTextureUnits=V,this.getTextureUnits=k,this.setTextureUnits=j,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=A,this.setTextureCube=C,this.rebindTextures=de,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=ae,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function RT(t,e){function n(i,r=Ki){let s;const a=it.getTransfer(r);if(i===Nn)return t.UNSIGNED_BYTE;if(i===jf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Wf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===n0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===i0)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===e0)return t.BYTE;if(i===t0)return t.SHORT;if(i===Ua)return t.UNSIGNED_SHORT;if(i===Gf)return t.INT;if(i===di)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===fi)return t.HALF_FLOAT;if(i===r0)return t.ALPHA;if(i===s0)return t.RGB;if(i===jn)return t.RGBA;if(i===Ii)return t.DEPTH_COMPONENT;if(i===Er)return t.DEPTH_STENCIL;if(i===a0)return t.RED;if(i===Xf)return t.RED_INTEGER;if(i===Dr)return t.RG;if(i===qf)return t.RG_INTEGER;if(i===Yf)return t.RGBA_INTEGER;if(i===Zo||i===Qo||i===Jo||i===el)if(a===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Zo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Zo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Qo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Jo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===el)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===fd||i===hd||i===pd||i===md)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===fd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===pd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===md)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gd||i===vd||i===xd||i===_d||i===Sd||i===Cl||i===yd)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===gd||i===vd)return a===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===_d)return s.COMPRESSED_R11_EAC;if(i===Sd)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Cl)return s.COMPRESSED_RG11_EAC;if(i===yd)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Md||i===bd||i===Ed||i===wd||i===Td||i===Cd||i===Ad||i===Rd||i===Nd||i===Pd||i===Ld||i===Id||i===Dd||i===Ud)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Md)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===bd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ed)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Td)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Cd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ad)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Pd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Ld)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Id)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Dd)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ud)return a===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fd||i===Od||i===kd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Fd)return a===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Od)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===kd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Bd||i===zd||i===Al||i===Hd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Bd)return s.COMPRESSED_RED_RGTC1_EXT;if(i===zd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Al)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Hd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const NT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,PT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class LT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new m0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new $n({vertexShader:NT,fragmentShader:PT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Di(new Ql(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class IT extends kr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",c=1,u=null,h=null,p=null,d=null,m=null,v=null;const M=typeof XRWebGLBinding<"u",g=new LT,f={},x=n.getContextAttributes();let b=null,y=null;const w=[],T=[],N=new ct;let S=null,P=null;const L=new Rn;L.viewport=new Ct;const I=new Rn;I.viewport=new Ct;const B=[L,I],V=new By;let k=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let $=w[O];return $===void 0&&($=new zc,w[O]=$),$.getTargetRaySpace()},this.getControllerGrip=function(O){let $=w[O];return $===void 0&&($=new zc,w[O]=$),$.getGripSpace()},this.getHand=function(O){let $=w[O];return $===void 0&&($=new zc,w[O]=$),$.getHandSpace()};function te(O){const $=T.indexOf(O.inputSource);if($===-1)return;const le=w[$];le!==void 0&&(le.update(O.inputSource,O.frame,u||a),le.dispatchEvent({type:O.type,data:O.inputSource}))}function K(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",K),r.removeEventListener("inputsourceschange",G);for(let O=0;O<w.length;O++){const $=T[O];$!==null&&(T[O]=null,w[O].disconnect($))}k=null,j=null,g.reset();for(const O in f)delete f[O];if(e.setRenderTarget(b),m=null,d=null,p=null,r=null,y=null,me.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(N.width,N.height,!1),P!==null){const O=P.camera;O.fov=P.fov,O.zoom=P.zoom,O.updateProjectionMatrix(),P=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&je("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&je("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(O){u=O},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return p===null&&M&&(p=new XRWebGLBinding(r,n)),p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",K),r.addEventListener("inputsourceschange",G),x.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(N),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let le=null,we=null,oe=null;x.depth&&(oe=x.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,le=x.stencil?Er:Ii,we=x.stencil?Fa:di);const Ne={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(Ne),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new qn(d.textureWidth,d.textureHeight,{format:jn,type:Nn,depthTexture:new Oa(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const le={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,le),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new qn(m.framebufferWidth,m.framebufferHeight,{format:jn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),u=null,a=await r.requestReferenceSpace(o),me.setContext(r),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function G(O){for(let $=0;$<O.removed.length;$++){const le=O.removed[$],we=T.indexOf(le);we>=0&&(T[we]=null,w[we].disconnect(le))}for(let $=0;$<O.added.length;$++){const le=O.added[$];let we=T.indexOf(le);if(we===-1){for(let Ne=0;Ne<w.length;Ne++)if(Ne>=T.length){T.push(le),we=Ne;break}else if(T[Ne]===null){T[Ne]=le,we=Ne;break}if(we===-1)break}const oe=w[we];oe&&oe.connect(le)}}const H=new q,A=new q;function C(O,$,le){H.setFromMatrixPosition($.matrixWorld),A.setFromMatrixPosition(le.matrixWorld);const we=H.distanceTo(A),oe=$.projectionMatrix.elements,Ne=le.projectionMatrix.elements,Qe=oe[14]/(oe[10]-1),ae=oe[14]/(oe[10]+1),de=(oe[9]+1)/oe[5],De=(oe[9]-1)/oe[5],Te=(oe[8]-1)/oe[0],Ve=(Ne[8]+1)/Ne[0],Ze=Qe*Te,Ye=Qe*Ve,Ie=we/(-Te+Ve),$e=Ie*-Te;if($.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX($e),O.translateZ(Ie),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),oe[10]===-1)O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const D=Qe+Ie,st=ae+Ie,He=Ze-$e,R=Ye+(we-$e),_=de*ae/st*D,z=De*ae/st*D;O.projectionMatrix.makePerspective(He,R,_,z,D,st),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function Q(O,$){$===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices($.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;let $=O.near,le=O.far;g.texture!==null&&(g.depthNear>0&&($=g.depthNear),g.depthFar>0&&(le=g.depthFar)),V.near=I.near=L.near=$,V.far=I.far=L.far=le,(k!==V.near||j!==V.far)&&(r.updateRenderState({depthNear:V.near,depthFar:V.far}),k=V.near,j=V.far),V.layers.mask=O.layers.mask|6,L.layers.mask=V.layers.mask&-5,I.layers.mask=V.layers.mask&-3;const we=O.parent,oe=V.cameras;Q(V,we);for(let Ne=0;Ne<oe.length;Ne++)Q(oe[Ne],we);oe.length===2?C(V,L,I):V.projectionMatrix.copy(L.projectionMatrix),P===null&&O.isPerspectiveCamera&&(P={camera:O,fov:O.fov,zoom:O.zoom}),re(O,V,we)};function re(O,$,le){le===null?O.matrix.copy($.matrixWorld):(O.matrix.copy(le.matrixWorld),O.matrix.invert(),O.matrix.multiply($.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy($.projectionMatrix),O.projectionMatrixInverse.copy($.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Vd*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(O){c=O,d!==null&&(d.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(O){return f[O]};let pe=null;function he(O,$){if(h=$.getViewerPose(u||a),v=$,h!==null){const le=h.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let we=!1;le.length!==V.cameras.length&&(V.cameras.length=0,we=!0);for(let ae=0;ae<le.length;ae++){const de=le[ae];let De=null;if(m!==null)De=m.getViewport(de);else{const Ve=p.getViewSubImage(d,de);De=Ve.viewport,ae===0&&(e.setRenderTargetTextures(y,Ve.colorTexture,Ve.depthStencilTexture),e.setRenderTarget(y))}let Te=B[ae];Te===void 0&&(Te=new Rn,Te.layers.enable(ae),Te.viewport=new Ct,B[ae]=Te),Te.matrix.fromArray(de.transform.matrix),Te.matrix.decompose(Te.position,Te.quaternion,Te.scale),Te.projectionMatrix.fromArray(de.projectionMatrix),Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),Te.viewport.set(De.x,De.y,De.width,De.height),ae===0&&(V.matrix.copy(Te.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),we===!0&&V.cameras.push(Te)}const oe=r.enabledFeatures;if(oe&&oe.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){p=i.getBinding();const ae=p.getDepthInformation(le[0]);ae&&ae.isValid&&ae.texture&&g.init(ae,r.renderState)}if(oe&&oe.includes("camera-access")&&M){e.state.unbindTexture(),p=i.getBinding();for(let ae=0;ae<le.length;ae++){const de=le[ae].camera;if(de){let De=f[de];De||(De=new m0,f[de]=De);const Te=p.getCameraImage(de);De.sourceTexture=Te}}}}for(let le=0;le<w.length;le++){const we=T[le],oe=w[le];we!==null&&oe!==void 0&&oe.update(we,$,u||a)}pe&&pe(O,$),$.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:$}),v=null}const me=new _0;me.setAnimationLoop(he),this.setAnimationLoop=function(O){pe=O},this.dispose=function(){}}}const DT=new At,T0=new Xe;T0.set(-1,0,0,0,1,0,0,0,1);function UT(t,e){function n(g,f){g.matrixAutoUpdate===!0&&g.updateMatrix(),f.value.copy(g.matrix)}function i(g,f){f.color.getRGB(g.fogColor.value,g0(t)),f.isFog?(g.fogNear.value=f.near,g.fogFar.value=f.far):f.isFogExp2&&(g.fogDensity.value=f.density)}function r(g,f,x,b,y){f.isNodeMaterial?f.uniformsNeedUpdate=!1:f.isMeshBasicMaterial?s(g,f):f.isMeshLambertMaterial?(s(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshToonMaterial?(s(g,f),p(g,f)):f.isMeshPhongMaterial?(s(g,f),h(g,f),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)):f.isMeshStandardMaterial?(s(g,f),d(g,f),f.isMeshPhysicalMaterial&&m(g,f,y)):f.isMeshMatcapMaterial?(s(g,f),v(g,f)):f.isMeshDepthMaterial?s(g,f):f.isMeshDistanceMaterial?(s(g,f),M(g,f)):f.isMeshNormalMaterial?s(g,f):f.isLineBasicMaterial?(a(g,f),f.isLineDashedMaterial&&o(g,f)):f.isPointsMaterial?c(g,f,x,b):f.isSpriteMaterial?u(g,f):f.isShadowMaterial?(g.color.value.copy(f.color),g.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(g,f){g.opacity.value=f.opacity,f.color&&g.diffuse.value.copy(f.color),f.emissive&&g.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.bumpMap&&(g.bumpMap.value=f.bumpMap,n(f.bumpMap,g.bumpMapTransform),g.bumpScale.value=f.bumpScale,f.side===hn&&(g.bumpScale.value*=-1)),f.normalMap&&(g.normalMap.value=f.normalMap,n(f.normalMap,g.normalMapTransform),g.normalScale.value.copy(f.normalScale),f.side===hn&&g.normalScale.value.negate()),f.displacementMap&&(g.displacementMap.value=f.displacementMap,n(f.displacementMap,g.displacementMapTransform),g.displacementScale.value=f.displacementScale,g.displacementBias.value=f.displacementBias),f.emissiveMap&&(g.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,g.emissiveMapTransform)),f.specularMap&&(g.specularMap.value=f.specularMap,n(f.specularMap,g.specularMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest);const x=e.get(f),b=x.envMap,y=x.envMapRotation;b&&(g.envMap.value=b,g.envMapRotation.value.setFromMatrix4(DT.makeRotationFromEuler(y)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(T0),g.reflectivity.value=f.reflectivity,g.ior.value=f.ior,g.refractionRatio.value=f.refractionRatio),f.lightMap&&(g.lightMap.value=f.lightMap,g.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,g.lightMapTransform)),f.aoMap&&(g.aoMap.value=f.aoMap,g.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,g.aoMapTransform))}function a(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform))}function o(g,f){g.dashSize.value=f.dashSize,g.totalSize.value=f.dashSize+f.gapSize,g.scale.value=f.scale}function c(g,f,x,b){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.size.value=f.size*x,g.scale.value=b*.5,f.map&&(g.map.value=f.map,n(f.map,g.uvTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function u(g,f){g.diffuse.value.copy(f.color),g.opacity.value=f.opacity,g.rotation.value=f.rotation,f.map&&(g.map.value=f.map,n(f.map,g.mapTransform)),f.alphaMap&&(g.alphaMap.value=f.alphaMap,n(f.alphaMap,g.alphaMapTransform)),f.alphaTest>0&&(g.alphaTest.value=f.alphaTest)}function h(g,f){g.specular.value.copy(f.specular),g.shininess.value=Math.max(f.shininess,1e-4)}function p(g,f){f.gradientMap&&(g.gradientMap.value=f.gradientMap)}function d(g,f){g.metalness.value=f.metalness,f.metalnessMap&&(g.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,g.metalnessMapTransform)),g.roughness.value=f.roughness,f.roughnessMap&&(g.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,g.roughnessMapTransform)),f.envMap&&(g.envMapIntensity.value=f.envMapIntensity)}function m(g,f,x){g.ior.value=f.ior,f.sheen>0&&(g.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),g.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(g.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,g.sheenColorMapTransform)),f.sheenRoughnessMap&&(g.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,g.sheenRoughnessMapTransform))),f.clearcoat>0&&(g.clearcoat.value=f.clearcoat,g.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(g.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,g.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(g.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===hn&&g.clearcoatNormalScale.value.negate())),f.dispersion>0&&(g.dispersion.value=f.dispersion),f.retroreflectivity>0&&(g.retroreflectivity.value=f.retroreflectivity),f.iridescence>0&&(g.iridescence.value=f.iridescence,g.iridescenceIOR.value=f.iridescenceIOR,g.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(g.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,g.iridescenceMapTransform)),f.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),f.transmission>0&&(g.transmission.value=f.transmission,g.transmissionSamplerMap.value=x.texture,g.transmissionSamplerSize.value.set(x.width,x.height),f.transmissionMap&&(g.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,g.transmissionMapTransform)),g.thickness.value=f.thickness,f.thicknessMap&&(g.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=f.attenuationDistance,g.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(g.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(g.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=f.specularIntensity,g.specularColor.value.copy(f.specularColor),f.specularColorMap&&(g.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,g.specularColorMapTransform)),f.specularIntensityMap&&(g.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,f){f.matcap&&(g.matcap.value=f.matcap)}function M(g,f){const x=e.get(f).light;g.referencePosition.value.setFromMatrixPosition(x.matrixWorld),g.nearDistance.value=x.shadow.camera.near,g.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function FT(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,w){const T=w.program;i.uniformBlockBinding(y,T)}function u(y,w){let T=r[y.id];T===void 0&&(g(y),T=h(y),r[y.id]=T,y.addEventListener("dispose",x));const N=w.program;i.updateUBOMapping(y,N);const S=e.render.frame;s[y.id]!==S&&(d(y),s[y.id]=S)}function h(y){const w=p();y.__bindingPointIndex=w;const T=t.createBuffer(),N=y.__size,S=y.usage;return t.bindBuffer(t.UNIFORM_BUFFER,T),t.bufferData(t.UNIFORM_BUFFER,N,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,w,T),T}function p(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const w=r[y.id],T=y.uniforms,N=y.__cache;t.bindBuffer(t.UNIFORM_BUFFER,w);for(let S=0,P=T.length;S<P;S++){const L=T[S];if(Array.isArray(L))for(let I=0,B=L.length;I<B;I++)m(L[I],S,I,N);else m(L,S,0,N)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(y,w,T,N){if(M(y,w,T,N)===!0){const S=y.__offset,P=y.value;if(Array.isArray(P)){let L=0;for(let I=0;I<P.length;I++){const B=P[I],V=f(B);v(B,y.__data,L),typeof B!="number"&&typeof B!="boolean"&&!B.isMatrix3&&!ArrayBuffer.isView(B)&&(L+=V.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(P,y.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,S,y.__data)}}function v(y,w,T){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,T)}function M(y,w,T,N){const S=y.value,P=w+"_"+T;if(N[P]===void 0)return typeof S=="number"||typeof S=="boolean"?N[P]=S:ArrayBuffer.isView(S)?N[P]=S.slice():N[P]=S.clone(),!0;{const L=N[P];if(typeof S=="number"||typeof S=="boolean"){if(L!==S)return N[P]=S,!0}else{if(ArrayBuffer.isView(S))return!0;if(L.equals(S)===!1)return L.copy(S),!0}}return!1}function g(y){const w=y.uniforms;let T=0;const N=16;for(let P=0,L=w.length;P<L;P++){const I=Array.isArray(w[P])?w[P]:[w[P]];for(let B=0,V=I.length;B<V;B++){const k=I[B],j=Array.isArray(k.value)?k.value:[k.value];for(let te=0,K=j.length;te<K;te++){const G=j[te],H=f(G),A=T%N,C=A%H.boundary,Q=A+C;T+=C,Q!==0&&N-Q<H.storage&&(T+=N-Q),k.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=T,T+=H.storage}}}const S=T%N;return S>0&&(T+=N-S),y.__size=T,y.__cache={},this}function f(y){const w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?je("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):je("WebGLRenderer: Unsupported uniform value type.",y),w}function x(y){const w=y.target;w.removeEventListener("dispose",x);const T=a.indexOf(w.__bindingPointIndex);a.splice(T,1),t.deleteBuffer(r[w.id]),delete r[w.id],delete s[w.id]}function b(){for(const y in r)t.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:c,update:u,dispose:b}}const OT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ti=null;function kT(){return ti===null&&(ti=new Ty(OT,16,16,Dr,fi),ti.name="DFG_LUT",ti.minFilter=Zt,ti.magFilter=Zt,ti.wrapS=Ei,ti.wrapT=Ei,ti.generateMipmaps=!1,ti.needsUpdate=!0),ti}class BT{constructor(e={}){const{canvas:n=ty(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:m=Nn}=e;this.isWebGLRenderer=!0;let v;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=i.getContextAttributes().alpha}else v=a;const M=m,g=new Set([Yf,qf,Xf]),f=new Set([Nn,di,Ua,Fa,jf,Wf]),x=new Uint32Array(4),b=new Int32Array(4),y=new q;let w=null,T=null;const N=[],S=[];let P=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let I=!1,B=null,V=null,k=null,j=null;this._outputColorSpace=Tn;let te=0,K=0,G=null,H=-1,A=null;const C=new Ct,Q=new Ct;let re=null;const pe=new qe(0);let he=0,me=n.width,O=n.height,$=1,le=null,we=null;const oe=new Ct(0,0,me,O),Ne=new Ct(0,0,me,O);let Qe=!1;const ae=new h0;let de=!1,De=!1;const Te=new At,Ve=new q,Ze=new Ct,Ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ie=!1;function $e(){return G===null?$:1}let D=i;function st(E,U){return n.getContext(E,U)}let He,R,_,z,Y,J,ue,fe,ee,ie,ge,ke,Se,ve,Be,Ge,Ke,F,xe,ne,_e,Ee,se;try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vf}`),n.addEventListener("webglcontextlost",gt,!1),n.addEventListener("webglcontextrestored",ut,!1),n.addEventListener("webglcontextcreationerror",Un,!1),D===null){const U="webgl2";if(D=st(U,E),D===null)throw st(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}ze()}catch(E){throw n.removeEventListener("webglcontextlost",gt,!1),n.removeEventListener("webglcontextrestored",ut,!1),n.removeEventListener("webglcontextcreationerror",Un,!1),ot("WebGLRenderer: "+E.message),E}function ze(){He=new kE(D),He.init(),_e=new RT(D,He),R=new AE(D,He,e,_e),_=new CT(D,He),R.reversedDepthBuffer&&d&&_.buffers.depth.setReversed(!0),V=D.createFramebuffer(),k=D.createFramebuffer(),j=D.createFramebuffer(),z=new HE(D),Y=new hT,J=new AT(D,He,_,Y,R,_e,z),ue=new OE(L),fe=new Gy(D),Ee=new TE(D,fe),ee=new BE(D,fe,z,Ee),ie=new GE(D,ee,fe,Ee,z),F=new VE(D,R,J),Be=new RE(Y),ge=new fT(L,ue,He,R,Ee,Be),ke=new UT(L,Y),Se=new mT,ve=new yT(He),Ke=new wE(L,ue,_,ie,v,c),Ge=new TT(L,ie,R),se=new FT(D,z,R,_),xe=new CE(D,He,z),ne=new zE(D,He,z),z.programs=ge.programs,L.capabilities=R,L.extensions=He,L.properties=Y,L.renderLists=Se,L.shadowMap=Ge,L.state=_,L.info=z}M!==Nn&&(P=new WE(M,n.width,n.height,o,r,s));const Ue=new IT(L,D);this.xr=Ue,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const E=He.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=He.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(me,O,!1))},this.getSize=function(E){return E.set(me,O)},this.setSize=function(E,U,Z=!0){if(Ue.isPresenting){je("WebGLRenderer: Can't change size while VR device is presenting.");return}me=E,O=U,n.width=Math.floor(E*$),n.height=Math.floor(U*$),Z===!0&&(n.style.width=E+"px",n.style.height=U+"px"),P!==null&&P.setSize(n.width,n.height),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(me*$,O*$).floor()},this.setDrawingBufferSize=function(E,U,Z){me=E,O=U,$=Z,n.width=Math.floor(E*Z),n.height=Math.floor(U*Z),this.setViewport(0,0,E,U)},this.setEffects=function(E){if(M===Nn){ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let U=0;U<E.length;U++)if(E[U].isOutputPass===!0){je("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(oe)},this.setViewport=function(E,U,Z,W){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,U,Z,W),_.viewport(C.copy(oe).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(Ne)},this.setScissor=function(E,U,Z,W){E.isVector4?Ne.set(E.x,E.y,E.z,E.w):Ne.set(E,U,Z,W),_.scissor(Q.copy(Ne).multiplyScalar($).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(E){_.setScissorTest(Qe=E)},this.setOpaqueSort=function(E){le=E},this.setTransparentSort=function(E){we=E},this.getClearColor=function(E){return E.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(E=!0,U=!0,Z=!0){let W=0;if(E){let X=!1;if(G!==null){const be=G.texture.format;X=g.has(be)}if(X){const be=G.texture.type,Ae=f.has(be),Me=Ke.getClearColor(),Pe=Ke.getClearAlpha(),Oe=Me.r,Je=Me.g,tt=Me.b;Ae?(x[0]=Oe,x[1]=Je,x[2]=tt,x[3]=Pe,D.clearBufferuiv(D.COLOR,0,x)):(b[0]=Oe,b[1]=Je,b[2]=tt,b[3]=Pe,D.clearBufferiv(D.COLOR,0,b))}else W|=D.COLOR_BUFFER_BIT}U&&(W|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W!==0&&D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),B=E},this.dispose=function(){n.removeEventListener("webglcontextlost",gt,!1),n.removeEventListener("webglcontextrestored",ut,!1),n.removeEventListener("webglcontextcreationerror",Un,!1),Ke.dispose(),Se.dispose(),ve.dispose(),Y.dispose(),ue.dispose(),ie.dispose(),Ee.dispose(),se.dispose(),ge.dispose(),Ue.dispose(),Ue.removeEventListener("sessionstart",oh),Ue.removeEventListener("sessionend",lh),fr.stop()};function gt(E){E.preventDefault(),Up("WebGLRenderer: Context Lost."),I=!0}function ut(){Up("WebGLRenderer: Context Restored."),I=!1;const E=z.autoReset,U=Ge.enabled,Z=Ge.autoUpdate,W=Ge.needsUpdate,X=Ge.type;ze(),z.autoReset=E,Ge.enabled=U,Ge.autoUpdate=Z,Ge.needsUpdate=W,Ge.type=X}function Un(E){ot("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Zn(E){const U=E.target;U.removeEventListener("dispose",Zn),C0(U)}function C0(E){A0(E),Y.remove(E)}function A0(E){const U=Y.get(E).programs;U!==void 0&&(U.forEach(function(Z){ge.releaseProgram(Z)}),E.isShaderMaterial&&ge.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,Z,W,X,be){U===null&&(U=Ye);const Ae=X.isMesh&&X.matrixWorld.determinantAffine()<0,Me=P0(E,U,Z,W,X);_.setMaterial(W,Ae);let Pe=Z.index,Oe=1;if(W.wireframe===!0){if(Pe=ee.getWireframeAttribute(Z),Pe===void 0)return;Oe=2}const Je=Z.drawRange,tt=Z.attributes.position;let Le=Je.start*Oe,dt=(Je.start+Je.count)*Oe;be!==null&&(Le=Math.max(Le,be.start*Oe),dt=Math.min(dt,(be.start+be.count)*Oe)),Pe!==null?(Le=Math.max(Le,0),dt=Math.min(dt,Pe.count)):tt!=null&&(Le=Math.max(Le,0),dt=Math.min(dt,tt.count));const Pt=dt-Le;if(Pt<0||Pt===1/0)return;Ee.setup(X,W,Me,Z,Pe);let _t,mt=xe;if(Pe!==null&&(_t=fe.get(Pe),mt=ne,mt.setIndex(_t)),X.isMesh)W.wireframe===!0?(_.setLineWidth(W.wireframeLinewidth*$e()),mt.setMode(D.LINES)):mt.setMode(D.TRIANGLES);else if(X.isLine){let Wt=W.linewidth;Wt===void 0&&(Wt=1),_.setLineWidth(Wt*$e()),X.isLineSegments?mt.setMode(D.LINES):X.isLineLoop?mt.setMode(D.LINE_LOOP):mt.setMode(D.LINE_STRIP)}else X.isPoints?mt.setMode(D.POINTS):X.isSprite&&mt.setMode(D.TRIANGLES);if(X.isBatchedMesh)if(He.get("WEBGL_multi_draw"))mt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Wt=X._multiDrawStarts,Ce=X._multiDrawCounts,Jt=X._multiDrawCount,at=Pe?fe.get(Pe).bytesPerElement:1,En=Y.get(W).currentProgram.getUniforms();for(let Qn=0;Qn<Jt;Qn++)En.setValue(D,"_gl_DrawID",Qn),mt.render(Wt[Qn]/at,Ce[Qn])}else if(X.isInstancedMesh)mt.renderInstances(Le,Pt,X.count);else if(Z.isInstancedBufferGeometry){const Wt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,Ce=Math.min(Z.instanceCount,Wt);mt.renderInstances(Le,Pt,Ce)}else mt.render(Le,Pt)};function ah(E,U,Z,W){B!==null&&E.isNodeMaterial&&B.setObject(W,E),de===!0&&Be.setState(E,Z,!1),E.transparent===!0&&E.side===yi&&E.forceSinglePass===!1?(E.side=hn,E.needsUpdate=!0,Ya(E,U,W),E.side=Lr,E.needsUpdate=!0,Ya(E,U,W),E.side=yi):Ya(E,U,W)}this.compile=function(E,U,Z=null){Z===null&&(Z=E),B!==null&&B.renderStart(E,U,Z),T=ve.get(Z),T.init(U),S.push(T),Z.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),E!==Z&&E.traverseVisible(function(X){X.isLight&&X.layers.test(U.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),B!==null&&B.updateLights(T.state.lightsArray),De=this.localClippingEnabled,de=Be.init(this.clippingPlanes,De),de===!0&&Be.setGlobalState(this.clippingPlanes,U),B!==null&&Ge.render(T.state.shadowsArray,Z,U);const W=new Set;return E.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const be=X.material;if(be)if(Array.isArray(be))for(let Ae=0;Ae<be.length;Ae++){const Me=be[Ae];ah(Me,Z,U,X),W.add(Me)}else ah(be,Z,U,X),W.add(be)}),T=S.pop(),B!==null&&B.renderEnd(),W},this.compileAsync=function(E,U,Z=null){const W=this.compile(E,U,Z);return new Promise(X=>{function be(){if(W.forEach(function(Ae){const Pe=Y.get(Ae).currentProgram;(Pe===void 0||Pe.isReady())&&W.delete(Ae)}),W.size===0){X(E);return}setTimeout(be,10)}He.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let tc=null;function R0(E){tc&&tc(E)}function oh(){fr.stop()}function lh(){fr.start()}const fr=new _0;fr.setAnimationLoop(R0),typeof self<"u"&&fr.setContext(self),this.setAnimationLoop=function(E){tc=E,Ue.setAnimationLoop(E),E===null?fr.stop():fr.start()},Ue.addEventListener("sessionstart",oh),Ue.addEventListener("sessionend",lh),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;B!==null&&B.renderStart(E,U);const Z=Ue.enabled===!0&&Ue.isPresenting===!0,W=P!==null&&(G===null||Z)&&P.begin(L,G);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Ue.enabled===!0&&Ue.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(Ue.cameraAutoUpdate===!0&&Ue.updateCamera(U),U=Ue.getCamera()),E.isScene===!0&&E.onBeforeRender(L,E,U,G),T=ve.get(E,S.length),T.init(U),T.state.textureUnits=J.getTextureUnits(),S.push(T),Te.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),ae.setFromProjectionMatrix(Te,oi,U.reversedDepth),De=this.localClippingEnabled,de=Be.init(this.clippingPlanes,De),w=Se.get(E,N.length),w.init(),N.push(w),Ue.enabled===!0&&Ue.isPresenting===!0){const Ae=L.xr.getDepthSensingMesh();Ae!==null&&nc(Ae,U,-1/0,L.sortObjects)}nc(E,U,0,L.sortObjects),w.finish(),B!==null&&B.updateLights(T.state.lightsArray),L.sortObjects===!0&&w.sort(le,we),Ie=Ue.enabled===!1||Ue.isPresenting===!1||Ue.hasDepthSensing()===!1,Ie&&Ke.addToRenderList(w,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),de===!0&&Be.beginShadows();const X=T.state.shadowsArray;if(Ge.render(X,E,U),de===!0&&Be.endShadows(),(W&&P.hasRenderPass())===!1){const Ae=w.opaque,Me=w.transmissive;if(T.setupLights(),U.isArrayCamera){const Pe=U.cameras;if(Me.length>0)for(let Oe=0,Je=Pe.length;Oe<Je;Oe++){const tt=Pe[Oe];uh(Ae,Me,E,tt)}Ie&&Ke.render(E);for(let Oe=0,Je=Pe.length;Oe<Je;Oe++){const tt=Pe[Oe];ch(w,E,tt,tt.viewport)}}else Me.length>0&&uh(Ae,Me,E,U),Ie&&Ke.render(E),ch(w,E,U)}G!==null&&K===0&&(J.updateMultisampleRenderTarget(G),J.updateRenderTargetMipmap(G)),W&&P.end(L),E.isScene===!0&&E.onAfterRender(L,E,U),Ee.resetDefaultState(),H=-1,A=null,S.pop(),S.length>0?(T=S[S.length-1],J.setTextureUnits(T.state.textureUnits),de===!0&&Be.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,N.pop(),N.length>0?w=N[N.length-1]:w=null,B!==null&&B.renderEnd()};function nc(E,U,Z,W){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)Z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(ae)){W&&Ze.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Te);const Ae=ie.update(E),Me=E.material;Me.visible&&w.push(E,Ae,Me,Z,Ze.z,null,U)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(ae))){const Ae=ie.update(E),Me=E.material;if(W&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ze.copy(E.boundingSphere.center)):(Ae.boundingSphere===null&&Ae.computeBoundingSphere(),Ze.copy(Ae.boundingSphere.center)),Ze.applyMatrix4(E.matrixWorld).applyMatrix4(Te)),Array.isArray(Me)){const Pe=Ae.groups;for(let Oe=0,Je=Pe.length;Oe<Je;Oe++){const tt=Pe[Oe],Le=Me[tt.materialIndex];Le&&Le.visible&&w.push(E,Ae,Le,Z,Ze.z,tt,U)}}else Me.visible&&w.push(E,Ae,Me,Z,Ze.z,null,U)}}const be=E.children;for(let Ae=0,Me=be.length;Ae<Me;Ae++)nc(be[Ae],U,Z,W)}function ch(E,U,Z,W){const{opaque:X,transmissive:be,transparent:Ae}=E;T.setupLightsView(Z),de===!0&&Be.setGlobalState(L.clippingPlanes,Z),W&&_.viewport(C.copy(W)),X.length>0&&qa(X,U,Z),be.length>0&&qa(be,U,Z),Ae.length>0&&qa(Ae,U,Z),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function uh(E,U,Z,W){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[W.id]===void 0){const Le=He.has("EXT_color_buffer_half_float")||He.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[W.id]=new qn(1,1,{generateMipmaps:!0,type:Le?fi:Nn,minFilter:br,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:it.workingColorSpace})}const be=T.state.transmissionRenderTarget[W.id],Ae=W.viewport||C;be.setSize(Ae.z*L.transmissionResolutionScale,Ae.w*L.transmissionResolutionScale);const Me=L.getRenderTarget(),Pe=L.getActiveCubeFace(),Oe=L.getActiveMipmapLevel();L.setRenderTarget(be),L.getClearColor(pe),he=L.getClearAlpha(),he<1&&L.setClearColor(16777215,.5),L.clear(),Ie&&Ke.render(Z);const Je=L.toneMapping;L.toneMapping=ui;const tt=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),T.setupLightsView(W),de===!0&&Be.setGlobalState(L.clippingPlanes,W),qa(E,Z,W),J.updateMultisampleRenderTarget(be),J.updateRenderTargetMipmap(be),He.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let dt=0,Pt=U.length;dt<Pt;dt++){const _t=U[dt],{object:mt,geometry:Wt,material:Ce,group:Jt}=_t;if(Ce.side===yi&&mt.layers.test(W.layers)){const at=Ce.side;Ce.side=hn,Ce.needsUpdate=!0,dh(mt,Z,W,Wt,Ce,Jt),Ce.side=at,Ce.needsUpdate=!0,Le=!0}}Le===!0&&(J.updateMultisampleRenderTarget(be),J.updateRenderTargetMipmap(be))}L.setRenderTarget(Me,Pe,Oe),L.setClearColor(pe,he),tt!==void 0&&(W.viewport=tt),L.toneMapping=Je}function qa(E,U,Z){const W=U.isScene===!0?U.overrideMaterial:null;for(let X=0,be=E.length;X<be;X++){const Ae=E[X],{object:Me,geometry:Pe,group:Oe}=Ae;let Je=Ae.material;Je.allowOverride===!0&&W!==null&&(Je=W),Me.layers.test(Z.layers)&&dh(Me,U,Z,Pe,Je,Oe)}}function dh(E,U,Z,W,X,be){B!==null&&X.isNodeMaterial&&B.setObject(E,X),E.onBeforeRender(L,U,Z,W,X,be),E.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),X.onBeforeRender(L,U,Z,W,E,be),X.transparent===!0&&X.side===yi&&X.forceSinglePass===!1?(X.side=hn,X.needsUpdate=!0,L.renderBufferDirect(Z,U,W,X,E,be),X.side=Lr,X.needsUpdate=!0,L.renderBufferDirect(Z,U,W,X,E,be),X.side=yi):L.renderBufferDirect(Z,U,W,X,E,be),E.onAfterRender(L,U,Z,W,X,be)}function Ya(E,U,Z){U.isScene!==!0&&(U=Ye);const W=Y.get(E),X=T.state.lights,be=T.state.shadowsArray,Ae=X.state.version,Me=ge.getParameters(E,X.state,be,U,Z,T.state.lightProbeGridArray),Pe=ge.getProgramCacheKey(Me);let Oe=W.programs;W.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?U.environment:null,W.fog=U.fog;const Je=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;W.envMap=ue.get(E.envMap||W.environment,Je),W.envMapRotation=W.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,Oe===void 0&&(E.addEventListener("dispose",Zn),Oe=new Map,W.programs=Oe);let tt=Oe.get(Pe);if(tt!==void 0){if(W.currentProgram===tt&&W.lightsStateVersion===Ae)return hh(E,Me),tt}else Me.uniforms=ge.getUniforms(E),B!==null&&E.isNodeMaterial&&B.build(E,Z,Me),E.onBeforeCompile(Me,L),tt=ge.acquireProgram(Me,Pe),Oe.set(Pe,tt),W.uniforms=Me.uniforms;const Le=W.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Le.clippingPlanes=Be.uniform),hh(E,Me),W.needsLights=I0(E),W.lightsStateVersion=Ae,W.needsLights&&(Le.ambientLightColor.value=X.state.ambient,Le.lightProbe.value=X.state.probe,Le.sunLights.value=X.state.sun,Le.sunLightShadows.value=X.state.sunShadow,Le.directionalLights.value=X.state.directional,Le.directionalLightShadows.value=X.state.directionalShadow,Le.spotLights.value=X.state.spot,Le.spotLightShadows.value=X.state.spotShadow,Le.rectAreaLights.value=X.state.rectArea,Le.ltc_1.value=X.state.rectAreaLTC1,Le.ltc_2.value=X.state.rectAreaLTC2,Le.pointLights.value=X.state.point,Le.pointLightShadows.value=X.state.pointShadow,Le.hemisphereLights.value=X.state.hemi,Le.sunShadowMatrix.value=X.state.sunShadowMatrix,Le.sunShadowCascade.value=X.state.sunShadowCascade,Le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Le.spotLightMatrix.value=X.state.spotLightMatrix,Le.spotLightMap.value=X.state.spotLightMap,Le.pointShadowMatrix.value=X.state.pointShadowMatrix),W.lightProbeGrid=T.state.lightProbeGridArray.length>0,W.currentProgram=tt,W.uniformsList=null,tt}function fh(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=tl.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function hh(E,U){const Z=Y.get(E);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function N0(E,U){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let Z=0,W=E.length;Z<W;Z++){const X=E[Z];if(X.texture!==null&&X.boundingBox.containsPoint(y))return X}return null}function P0(E,U,Z,W,X){U.isScene!==!0&&(U=Ye),J.resetTextureUnits();const be=U.fog,Ae=W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial?U.environment:null,Me=G===null?L.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:it.workingColorSpace,Pe=W.isMeshStandardMaterial||W.isMeshLambertMaterial&&!W.envMap||W.isMeshPhongMaterial&&!W.envMap,Oe=ue.get(W.envMap||Ae,Pe),Je=W.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,tt=!!Z.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!Z.morphAttributes.position,dt=!!Z.morphAttributes.normal,Pt=!!Z.morphAttributes.color;let _t=ui;W.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(_t=L.toneMapping);const mt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Wt=mt!==void 0?mt.length:0,Ce=Y.get(W),Jt=T.state.lights;if(de===!0&&(De===!0||E!==A)){const vt=E===A&&W.id===H;Be.setState(W,E,vt)}let at=!1;W.version===Ce.__version?(Ce.needsLights&&Ce.lightsStateVersion!==Jt.state.version||Ce.outputColorSpace!==Me||X.isBatchedMesh&&Ce.batching===!1||!X.isBatchedMesh&&Ce.batching===!0||X.isBatchedMesh&&Ce.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Ce.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Ce.instancing===!1||!X.isInstancedMesh&&Ce.instancing===!0||X.isSkinnedMesh&&Ce.skinning===!1||!X.isSkinnedMesh&&Ce.skinning===!0||X.isInstancedMesh&&Ce.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ce.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ce.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ce.instancingMorph===!1&&X.morphTexture!==null||Ce.envMap!==Oe||W.fog===!0&&Ce.fog!==be||Ce.numClippingPlanes!==void 0&&(Ce.numClippingPlanes!==Be.numPlanes||Ce.numIntersection!==Be.numIntersection)||Ce.vertexAlphas!==Je||Ce.vertexTangents!==tt||Ce.morphTargets!==Le||Ce.morphNormals!==dt||Ce.morphColors!==Pt||Ce.toneMapping!==_t||Ce.morphTargetsCount!==Wt||!!Ce.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(at=!0):(at=!0,Ce.__version=W.version);let En=Ce.currentProgram;at===!0&&(En=Ya(W,U,X),B&&W.isNodeMaterial&&B.onUpdateProgram(W,En,Ce));let Qn=!1,Fi=!1,Br=!1;const pt=En.getUniforms(),Rt=Ce.uniforms;if(_.useProgram(En.program)&&(Qn=!0,Fi=!0,Br=!0),W.id!==H&&(H=W.id,Fi=!0),Ce.needsLights){const vt=N0(T.state.lightProbeGridArray,X);Ce.lightProbeGrid!==vt&&(Ce.lightProbeGrid=vt,Fi=!0)}if(Qn||A!==E){_.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),pt.setValue(D,"projectionMatrix",E.projectionMatrix),pt.setValue(D,"viewMatrix",E.matrixWorldInverse);const ki=pt.map.cameraPosition;ki!==void 0&&ki.setValue(D,Ve.setFromMatrixPosition(E.matrixWorld)),R.logarithmicDepthBuffer&&pt.setValue(D,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&pt.setValue(D,"isOrthographic",E.isOrthographicCamera===!0),A!==E&&(A=E,Fi=!0,Br=!0)}if(Ce.needsLights&&(Jt.state.sunShadowMap.length>0&&pt.setValue(D,"sunShadowMap",Jt.state.sunShadowMap,J),Jt.state.directionalShadowMap.length>0&&pt.setValue(D,"directionalShadowMap",Jt.state.directionalShadowMap,J),Jt.state.spotShadowMap.length>0&&pt.setValue(D,"spotShadowMap",Jt.state.spotShadowMap,J),Jt.state.pointShadowMap.length>0&&pt.setValue(D,"pointShadowMap",Jt.state.pointShadowMap,J)),X.isSkinnedMesh){pt.setOptional(D,X,"bindMatrix"),pt.setOptional(D,X,"bindMatrixInverse");const vt=X.skeleton;vt&&(vt.boneTexture===null&&vt.computeBoneTexture(),pt.setValue(D,"boneTexture",vt.boneTexture,J))}X.isBatchedMesh&&(pt.setOptional(D,X,"batchingTexture"),pt.setValue(D,"batchingTexture",X._matricesTexture,J),pt.setOptional(D,X,"batchingIdTexture"),pt.setValue(D,"batchingIdTexture",X._indirectTexture,J),pt.setOptional(D,X,"batchingColorTexture"),X._colorsTexture!==null&&pt.setValue(D,"batchingColorTexture",X._colorsTexture,J));const Oi=Z.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&F.update(X,Z,En),(Fi||Ce.receiveShadow!==X.receiveShadow)&&(Ce.receiveShadow=X.receiveShadow,pt.setValue(D,"receiveShadow",X.receiveShadow)),(W.isMeshStandardMaterial||W.isMeshLambertMaterial||W.isMeshPhongMaterial)&&W.envMap===null&&U.environment!==null&&(Rt.envMapIntensity.value=U.environmentIntensity),Rt.dfgLUT!==void 0&&(Rt.dfgLUT.value=kT()),Fi){if(pt.setValue(D,"toneMappingExposure",L.toneMappingExposure),Ce.needsLights&&L0(Rt,Br),be&&W.fog===!0&&ke.refreshFogUniforms(Rt,be),ke.refreshMaterialUniforms(Rt,W,$,O,T.state.transmissionRenderTarget[E.id]),Ce.needsLights&&Ce.lightProbeGrid){const vt=Ce.lightProbeGrid;Rt.probesSH.value=vt.texture,Rt.probesMin.value.copy(vt.boundingBox.min),Rt.probesMax.value.copy(vt.boundingBox.max),Rt.probesResolution.value.copy(vt.resolution)}tl.upload(D,fh(Ce),Rt,J)}if(W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(tl.upload(D,fh(Ce),Rt,J),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&pt.setValue(D,"center",X.center),pt.setValue(D,"modelViewMatrix",X.modelViewMatrix),pt.setValue(D,"normalMatrix",X.normalMatrix),pt.setValue(D,"modelMatrix",X.matrixWorld),W.uniformsGroups!==void 0){const vt=W.uniformsGroups;for(let ki=0,zr=vt.length;ki<zr;ki++){const mh=vt[ki];se.update(mh,En),se.bind(mh,En)}}return En}function L0(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.sunLights.needsUpdate=U,E.sunLightShadows.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function I0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(E,U,Z){const W=Y.get(E);W.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Y.get(E.texture).__webglTexture=U,Y.get(E.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Z,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,U){const Z=Y.get(E);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,Z=0){G=E,te=U,K=Z;let W=null,X=!1,be=!1;if(E){const Me=Y.get(E);if(Me.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(D.FRAMEBUFFER,Me.__webglFramebuffer),C.copy(E.viewport),Q.copy(E.scissor),re=E.scissorTest,_.viewport(C),_.scissor(Q),_.setScissorTest(re),H=-1;return}else if(Me.__webglFramebuffer===void 0)J.setupRenderTarget(E);else if(Me.__hasExternalTextures)J.rebindTextures(E,Y.get(E.texture).__webglTexture,Y.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Je=E.depthTexture;if(Me.__boundDepthTexture!==Je){if(Je!==null&&Y.has(Je)&&(E.width!==Je.image.width||E.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");J.setupDepthRenderbuffer(E)}}const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(be=!0);const Oe=Y.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Oe[U])?W=Oe[U][Z]:W=Oe[U],X=!0):E.samples>0&&J.useMultisampledRTT(E)===!1?W=Y.get(E).__webglMultisampledFramebuffer:Array.isArray(Oe)?W=Oe[Z]:W=Oe,C.copy(E.viewport),Q.copy(E.scissor),re=E.scissorTest}else C.copy(oe).multiplyScalar($).floor(),Q.copy(Ne).multiplyScalar($).floor(),re=Qe;if(Z!==0&&(W=V),_.bindFramebuffer(D.FRAMEBUFFER,W)&&_.drawBuffers(E,W),_.viewport(C),_.scissor(Q),_.setScissorTest(re),X){const Me=Y.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Me.__webglTexture,Z)}else if(be){const Me=U;for(let Pe=0;Pe<E.textures.length;Pe++){const Oe=Y.get(E.textures[Pe]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Pe,Oe.__webglTexture,Z,Me)}}else if(E!==null&&Z!==0){const Me=Y.get(E.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Me.__webglTexture,Z)}H=-1};function ph(E){const U=Y.get(E);return(U.__readFormat!==E.format||U.__readType!==E.type)&&(U.__readFormat=E.format,U.__readType=E.type,U.__formatReadable=R.textureFormatReadable(E.format),U.__typeReadable=R.textureTypeReadable(E.type)),U}this.readRenderTargetPixels=function(E,U,Z,W,X,be,Ae,Me=0){if(!(E&&E.isWebGLRenderTarget)){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe){_.bindFramebuffer(D.FRAMEBUFFER,Pe);try{const Oe=E.textures[Me],Je=Oe.format,tt=Oe.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Me);const Le=ph(Oe);if(Le.__formatReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-W&&Z>=0&&Z<=E.height-X&&D.readPixels(U,Z,W,X,_e.convert(Je),_e.convert(tt),be)}finally{const Oe=G!==null?Y.get(G).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(E,U,Z,W,X,be,Ae,Me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=Y.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ae!==void 0&&(Pe=Pe[Ae]),Pe)if(U>=0&&U<=E.width-W&&Z>=0&&Z<=E.height-X){_.bindFramebuffer(D.FRAMEBUFFER,Pe);const Oe=E.textures[Me],Je=Oe.format,tt=Oe.type;E.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+Me);const Le=ph(Oe);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const dt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,dt),D.bufferData(D.PIXEL_PACK_BUFFER,be.byteLength,D.STREAM_READ),D.readPixels(U,Z,W,X,_e.convert(Je),_e.convert(tt),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);const Pt=G!==null?Y.get(G).__webglFramebuffer:null;_.bindFramebuffer(D.FRAMEBUFFER,Pt);const _t=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await ny(D,_t,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,dt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,be),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(dt),D.deleteSync(_t),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,U=null,Z=0){const W=Math.pow(2,-Z),X=Math.floor(E.image.width*W),be=Math.floor(E.image.height*W),Ae=U!==null?U.x:0,Me=U!==null?U.y:0;J.setTexture2D(E,0),D.copyTexSubImage2D(D.TEXTURE_2D,Z,0,0,Ae,Me,X,be),_.unbindTexture()},this.copyTextureToTexture=function(E,U,Z=null,W=null,X=0,be=0){let Ae,Me,Pe,Oe,Je,tt,Le,dt,Pt;const _t=E.isCompressedTexture?E.mipmaps[be]:E.image;if(Z!==null)Ae=Z.max.x-Z.min.x,Me=Z.max.y-Z.min.y,Pe=Z.isBox3?Z.max.z-Z.min.z:1,Oe=Z.min.x,Je=Z.min.y,tt=Z.isBox3?Z.min.z:0;else{const Rt=Math.pow(2,-X);Ae=Math.floor(_t.width*Rt),Me=Math.floor(_t.height*Rt),E.isDataArrayTexture?Pe=_t.depth:E.isData3DTexture?Pe=Math.floor(_t.depth*Rt):Pe=1,Oe=0,Je=0,tt=0}W!==null?(Le=W.x,dt=W.y,Pt=W.z):(Le=0,dt=0,Pt=0);const mt=_e.convert(U.format),Wt=_e.convert(U.type);let Ce;U.isData3DTexture?(J.setTexture3D(U,0),Ce=D.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(J.setTexture2DArray(U,0),Ce=D.TEXTURE_2D_ARRAY):(J.setTexture2D(U,0),Ce=D.TEXTURE_2D),_.activeTexture(D.TEXTURE0),_.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),_.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),_.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Jt=_.getParameter(D.UNPACK_ROW_LENGTH),at=_.getParameter(D.UNPACK_IMAGE_HEIGHT),En=_.getParameter(D.UNPACK_SKIP_PIXELS),Qn=_.getParameter(D.UNPACK_SKIP_ROWS),Fi=_.getParameter(D.UNPACK_SKIP_IMAGES);_.pixelStorei(D.UNPACK_ROW_LENGTH,_t.width),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,_t.height),_.pixelStorei(D.UNPACK_SKIP_PIXELS,Oe),_.pixelStorei(D.UNPACK_SKIP_ROWS,Je),_.pixelStorei(D.UNPACK_SKIP_IMAGES,tt);const Br=E.isDataArrayTexture||E.isData3DTexture,pt=U.isDataArrayTexture||U.isData3DTexture;if(E.isDepthTexture){const Rt=Y.get(E),Oi=Y.get(U),vt=Y.get(Rt.__renderTarget),ki=Y.get(Oi.__renderTarget);_.bindFramebuffer(D.READ_FRAMEBUFFER,vt.__webglFramebuffer),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,ki.__webglFramebuffer);for(let zr=0;zr<Pe;zr++)Br&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Y.get(E).__webglTexture,X,tt+zr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Y.get(U).__webglTexture,be,Pt+zr)),D.blitFramebuffer(Oe,Je,Ae,Me,Le,dt,Ae,Me,D.DEPTH_BUFFER_BIT,D.NEAREST);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(X!==0||E.isRenderTargetTexture||Y.has(E)){const Rt=Y.get(E),Oi=Y.get(U);_.bindFramebuffer(D.READ_FRAMEBUFFER,k),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,j);for(let vt=0;vt<Pe;vt++)Br?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Rt.__webglTexture,X,tt+vt):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Rt.__webglTexture,X),pt?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Oi.__webglTexture,be,Pt+vt):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Oi.__webglTexture,be),X!==0?D.blitFramebuffer(Oe,Je,Ae,Me,Le,dt,Ae,Me,D.COLOR_BUFFER_BIT,D.NEAREST):pt?D.copyTexSubImage3D(Ce,be,Le,dt,Pt+vt,Oe,Je,Ae,Me):D.copyTexSubImage2D(Ce,be,Le,dt,Oe,Je,Ae,Me);_.bindFramebuffer(D.READ_FRAMEBUFFER,null),_.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else pt?E.isDataTexture||E.isData3DTexture?D.texSubImage3D(Ce,be,Le,dt,Pt,Ae,Me,Pe,mt,Wt,_t.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(Ce,be,Le,dt,Pt,Ae,Me,Pe,mt,_t.data):D.texSubImage3D(Ce,be,Le,dt,Pt,Ae,Me,Pe,mt,Wt,_t):E.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,be,Le,dt,Ae,Me,mt,Wt,_t.data):E.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,be,Le,dt,_t.width,_t.height,mt,_t.data):D.texSubImage2D(D.TEXTURE_2D,be,Le,dt,Ae,Me,mt,Wt,_t);_.pixelStorei(D.UNPACK_ROW_LENGTH,Jt),_.pixelStorei(D.UNPACK_IMAGE_HEIGHT,at),_.pixelStorei(D.UNPACK_SKIP_PIXELS,En),_.pixelStorei(D.UNPACK_SKIP_ROWS,Qn),_.pixelStorei(D.UNPACK_SKIP_IMAGES,Fi),be===0&&U.generateMipmaps&&D.generateMipmap(Ce),_.unbindTexture()},this.initRenderTarget=function(E){Y.get(E).__webglFramebuffer===void 0&&J.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?J.setTextureCube(E,0):E.isData3DTexture?J.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?J.setTexture2DArray(E,0):J.setTexture2D(E,0),_.unbindTexture()},this.resetState=function(){te=0,K=0,G=null,_.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=it._getDrawingBufferColorSpace(e),n.unpackColorSpace=it._getUnpackColorSpace()}}function zT({scrolled:t}){const e=We.useRef(null);return We.useEffect(()=>{const n=e.current;if(!n)return;const i=new xy;let r=n.clientWidth||window.innerWidth,s=n.clientHeight||window.innerHeight;const a=new Rn(48,r/s,.1,1e3);a.position.set(0,0,110);const o=new BT({antialias:!0,alpha:!0,powerPreference:"high-performance"});o.setSize(r,s),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),o.domElement.style.position="absolute",o.domElement.style.top="0",o.domElement.style.left="0",o.domElement.style.width="100%",o.domElement.style.height="100%",o.domElement.style.pointerEvents="auto",n.appendChild(o.domElement);const c=14e3,u=2400,h=2400,p=3200,d=3e3,m=c+u+h+p+d,v=new Float32Array(m*3),M=new Float32Array(m*3),g=new Float32Array(m*3),f=new Float32Array(m),x=new Float32Array(m),b=[new qe("#10b981"),new qe("#06b6d4"),new qe("#1a73e8"),new qe("#10b981"),new qe("#f59e0b"),new qe("#8b5cf6")],y=28;let w=0;const T=()=>{let ae=0,de=0;for(;ae===0;)ae=Math.random();for(;de===0;)de=Math.random();return Math.sqrt(-2*Math.log(ae))*Math.cos(2*Math.PI*de)};for(let ae=0;ae<c;ae++){const de=Math.acos(1-2*(ae+.5)/c),De=Math.PI*(1+Math.sqrt(5))*ae,Ve=Math.sin(De*3)*Math.cos(de*2.5)+Math.sin(De*7+de*4)*.4>-.15,Ze=Ve?T()*.45:T()*.2,Ye=y+Ze,Ie=Ye*Math.sin(de)*Math.cos(De),$e=Ye*Math.cos(de),D=Ye*Math.sin(de)*Math.sin(De),st=w*3;v[st]=Ie,v[st+1]=$e,v[st+2]=D,M[st]=Ie,M[st+1]=$e,M[st+2]=D;const He=new qe,R=(de/Math.PI*.7+De/(Math.PI*2)*.3)%1;He.setHSL(R,.95,.58),g[st]=He.r,g[st+1]=He.g,g[st+2]=He.b;const _=Ve?2.2+Math.random()*1.6:1.2+Math.random()*.8;f[w]=_,x[w]=Math.random()*Math.PI*2,w++}const N=36;for(let ae=0;ae<u;ae++){const de=ae/u*Math.PI*2,De=T()*.65,Te=N+De,Ve=Te*Math.cos(de),Ze=Te*Math.sin(de)*Math.cos(1.1)+De*.5,Ye=Te*Math.sin(de)*Math.sin(1.1),Ie=w*3;v[Ie]=Ve,v[Ie+1]=Ze,v[Ie+2]=Ye,M[Ie]=Ve,M[Ie+1]=Ze,M[Ie+2]=Ye;const $e=new qe().setHSL(.55,1,.65);g[Ie]=$e.r,g[Ie+1]=$e.g,g[Ie+2]=$e.b,f[w]=1.4+Math.random()*1.5,x[w]=Math.random()*Math.PI*2,w++}const S=34;for(let ae=0;ae<h;ae++){const de=ae/h*Math.PI*2,De=T()*.5,Te=S+De,Ve=Te*Math.cos(de),Ze=Te*Math.sin(de)*Math.sin(.4)+De*.4,Ye=Te*Math.sin(de)*Math.cos(.4),Ie=w*3;v[Ie]=Ve,v[Ie+1]=Ze,v[Ie+2]=Ye,M[Ie]=Ve,M[Ie+1]=Ze,M[Ie+2]=Ye;const $e=new qe().setHSL(.35,1,.62);g[Ie]=$e.r,g[Ie+1]=$e.g,g[Ie+2]=$e.b,f[w]=1.3+Math.random()*1.4,x[w]=Math.random()*Math.PI*2,w++}for(let ae=0;ae<p;ae++){const de=ae/p,De=Math.floor(de*8),Te=de*8%1,Ve=.4+De*.35%2.2,Ze=De*1.5%(Math.PI*2),Ye=Ve+.8,Ie=Ze+1.2,$e=new q(y*Math.sin(Ve)*Math.cos(Ze),y*Math.cos(Ve),y*Math.sin(Ve)*Math.sin(Ze)),D=new q(y*Math.sin(Ye)*Math.cos(Ie),y*Math.cos(Ye),y*Math.sin(Ye)*Math.sin(Ie)),st=new q().addVectors($e,D).multiplyScalar(.5);st.normalize().multiplyScalar(y+7.5);const He=Te,R=new q;R.x=(1-He)*(1-He)*$e.x+2*(1-He)*He*st.x+He*He*D.x+T()*.35,R.y=(1-He)*(1-He)*$e.y+2*(1-He)*He*st.y+He*He*D.y+T()*.35,R.z=(1-He)*(1-He)*$e.z+2*(1-He)*He*st.z+He*He*D.z+T()*.35;const _=w*3;v[_]=R.x,v[_+1]=R.y,v[_+2]=R.z,M[_]=R.x,M[_+1]=R.y,M[_+2]=R.z;const z=new qe().setHSL(.12,1,.6);g[_]=z.r,g[_+1]=z.g,g[_+2]=z.b,f[w]=1.5+Math.random()*1.6,x[w]=Math.random()*Math.PI*2,w++}for(let ae=0;ae<d;ae++){const de=30+Math.random()*45,De=Math.random()*Math.PI*2,Te=Math.acos(2*Math.random()-1),Ve=de*Math.sin(Te)*Math.cos(De),Ze=de*Math.cos(Te),Ye=de*Math.sin(Te)*Math.sin(De),Ie=w*3;v[Ie]=Ve,v[Ie+1]=Ze,v[Ie+2]=Ye,M[Ie]=Ve,M[Ie+1]=Ze,M[Ie+2]=Ye;const $e=new qe().setHSL(Math.random(),.95,.62);g[Ie]=$e.r,g[Ie+1]=$e.g,g[Ie+2]=$e.b,f[w]=.8+Math.random()*2,x[w]=Math.random()*Math.PI*2,w++}const P=new Kn;P.setAttribute("position",new _n(v,3)),P.setAttribute("rainbowColor",new _n(g,3)),P.setAttribute("customSize",new _n(f,1)),P.setAttribute("aPhase",new _n(x,1));const L=b[0].clone(),I=new $n({uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)},uColorA:{value:L.clone()},uColorB:{value:L.clone()},uTransition:{value:0},uUseRainbow:{value:0},uWaveRadius:{value:-100},uWaveWidth:{value:45},uWaveCenter:{value:new q(0,0,0)}},vertexColors:!1,transparent:!0,depthWrite:!1,blending:bs,vertexShader:`
        attribute vec3 rainbowColor;
        attribute float customSize;
        attribute float aPhase;
        
        varying vec3 vColor;
        varying float vAlpha;
        
        uniform float uTime;
        uniform float uPixelRatio;
        uniform vec3 uColorA;
        uniform vec3 uColorB;
        uniform float uTransition;
        uniform float uUseRainbow;
        uniform float uWaveRadius;
        uniform float uWaveWidth;
        uniform vec3 uWaveCenter;

        void main() {
          float distToWave = length(position - uWaveCenter);

          float waveRing = 0.0;
          if (uWaveRadius >= 0.0) {
            float diff = abs(distToWave - uWaveRadius);
            if (diff < uWaveWidth) {
              waveRing = 1.0 - (diff / uWaveWidth);
            }
          }

          vec3 uniformCurrent = mix(uColorA, uColorB, uTransition);
          vec3 finalColor = mix(uniformCurrent, rainbowColor, uUseRainbow * uTransition);
          finalColor += vec3(waveRing * 0.75);

          vColor = finalColor;

          float pulse = 0.85 + 0.15 * sin(uTime * 2.2 + aPhase * 6.28318);
          vAlpha = pulse;

          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          float sizeBoost = 1.0 + waveRing * 1.8;
          gl_PointSize = (customSize * pulse * sizeBoost) * uPixelRatio * (290.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vec2 coord = gl_PointCoord - vec2(0.5);
          float dist = length(coord);
          if (dist > 0.5) discard;

          float core = 1.0 - smoothstep(0.0, 0.22, dist);
          float aura = 1.0 - smoothstep(0.18, 0.50, dist);
          float alpha = (core * 0.55 + aura * 0.45) * vAlpha;

          vec3 finalColor = mix(vColor, vec3(1.0, 1.0, 1.0), core * 0.45);
          gl_FragColor = vec4(finalColor, alpha);
        }
      `}),B=new Ry(P,I),V=new aa;V.add(B),V.rotation.z=-.22,V.rotation.x=.35,V.position.set(0,0,0),i.add(V);const k=new zy,j=new ct(-9999,-9999),te=new Si(new q(0,0,1),0),K=new q,G=new q(0,0,0);let H=!1,A=0,C=0,Q=1,re=-100,pe=!1;const he=260,me=280,O=ae=>{const de=n.getBoundingClientRect(),De=(ae.clientX-de.left)/de.width*2-1,Te=-((ae.clientY-de.top)/de.height)*2+1;j.x=De,j.y=Te,H=!0},$=()=>{H=!1,j.set(-9999,-9999)},le=()=>{if(k.setFromCamera(j,a),k.ray.intersectPlane(te,K)?(G.copy(K),V.worldToLocal(G)):G.set(0,0,0),I.uniforms.uWaveCenter.value.copy(G),re=0,pe=!0,Q<1){const ae=new qe().lerpColors(b[A],b[C],Q);I.uniforms.uColorA.value.copy(ae)}else I.uniforms.uColorA.value.copy(b[C]);A=C,C=(C+1)%b.length,I.uniforms.uColorB.value.copy(b[C]),I.uniforms.uUseRainbow.value=C===5?1:0,Q=0};window.addEventListener("pointermove",O,{passive:!0}),window.addEventListener("pointerleave",$),window.addEventListener("pointerdown",le);const we=()=>{n&&(r=n.clientWidth||window.innerWidth,s=n.clientHeight||window.innerHeight,a.aspect=r/s,a.updateProjectionMatrix(),o.setSize(r,s),o.setPixelRatio(Math.min(window.devicePixelRatio,2)),I.uniforms.uPixelRatio.value=Math.min(window.devicePixelRatio,2))};window.addEventListener("resize",we);let oe;const Ne=new Hy,Qe=()=>{oe=requestAnimationFrame(Qe);const ae=Math.min(Ne.getDelta(),.1),de=Ne.getElapsedTime();if(I.uniforms.uTime.value=de,B.rotation.y+=ae*.28,Q<1&&(Q=Math.min(1,Q+ae*2.2),I.uniforms.uTransition.value=Q),pe&&(re+=ae*he,I.uniforms.uWaveRadius.value=re,re>me&&(pe=!1,I.uniforms.uWaveRadius.value=-100)),H){const De=j.x*.35,Te=.35-j.y*.22;V.rotation.y+=(De-V.rotation.y)*.05,V.rotation.x+=(Te-V.rotation.x)*.05}else V.rotation.y+=(0-V.rotation.y)*.03,V.rotation.x+=(.35-V.rotation.x)*.03;V.position.y=Math.sin(de*.8)*1.8,o.render(i,a)};return Qe(),()=>{cancelAnimationFrame(oe),window.removeEventListener("pointermove",O),window.removeEventListener("pointerleave",$),window.removeEventListener("pointerdown",le),window.removeEventListener("resize",we),o.domElement&&n.contains(o.domElement)&&n.removeChild(o.domElement),P.dispose(),I.dispose(),o.dispose()}},[]),l.jsx("div",{ref:e,className:"carbon-globe-canvas-container",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",cursor:"pointer",zIndex:1,opacity:t?0:1,visibility:t?"hidden":"visible",transition:"opacity 2.5s cubic-bezier(0.16, 1, 0.3, 1), visibility 2.5s ease",pointerEvents:t?"none":"auto"}})}function HT({onOpenModal:t,scrolled:e,onExploreProjects:n}){const[i,r]=We.useState(""),[s,a]=We.useState(""),[o,c]=We.useState(""),[u,h]=We.useState(""),[p,d]=We.useState(1),[m,v]=We.useState(1),[M,g]=We.useState(!1),[f,x]=We.useState(!1);return We.useEffect(()=>{const b="Measuring, Predicting",y="and Reducing",w="Carbon Footprints with AI",T="CarboSafe";let N;const S=()=>{let B=0;d(1);const V=setInterval(()=>{B++,r(b.slice(0,B)),B>=b.length&&(clearInterval(V),d(2),N=setTimeout(P,160))},38)},P=()=>{let B=0;const V=setInterval(()=>{B++,a(y.slice(0,B)),B>=y.length&&(clearInterval(V),d(3),N=setTimeout(L,140))},44)},L=()=>{let B=0;const V=setInterval(()=>{B++,c(w.slice(0,B)),B>=w.length&&(clearInterval(V),d(4),N=setTimeout(I,180))},36)},I=()=>{let B=0;v(1);const V=setInterval(()=>{B++,h(T.slice(0,B)),B>=T.length&&(clearInterval(V),v(2),N=setTimeout(()=>{x(!0),N=setTimeout(()=>{g(!0)},280)},180))},55)};return N=setTimeout(S,300),()=>{clearTimeout(N)}},[]),l.jsxs("section",{id:"hero",className:`hero-stage ${e?"scrolled":""}`,children:[l.jsxs("div",{className:"hero-video-wrapper",children:[l.jsx(zT,{scrolled:e}),l.jsx("div",{className:`hero-white-cover ${e?"active":""}`}),l.jsx("div",{className:`hero-bottom-fade ${e?"active":""}`})]}),l.jsxs("div",{className:"hero-editorial-stage",children:[l.jsxs("div",{className:"hero-left-mid-block",children:[l.jsxs("div",{className:"hero-eyebrow-pill mb-3",children:[l.jsx("span",{className:"pulse-green-dot"}),l.jsx("span",{children:"ClimateTech • AI • Carbon Markets • Blockchain"})]}),l.jsxs("div",{className:"hero-typography-line hero-line-intelligence",children:[l.jsx("span",{children:i}),p===1&&l.jsx("span",{className:"type-caret"})]}),l.jsxs("div",{className:"hero-typography-line hero-line-behind",children:[l.jsx("span",{children:s}),p===2&&l.jsx("span",{className:"type-caret"})]}),l.jsxs("div",{className:"hero-typography-line hero-line-modern",children:[l.jsx("span",{className:"text-gradient-emerald",children:o}),p===3&&l.jsx("span",{className:"type-caret"})]}),l.jsx("div",{className:"hero-mission-note mt-3",children:l.jsxs("p",{children:[l.jsx("strong",{children:"Our Mission:"})," Make carbon credits more trustworthy, transparent, and fair to the people who help protect the environment."]})})]}),l.jsxs("div",{className:"hero-right-mid-block",children:[l.jsxs("div",{className:"hero-typography-line hero-line-triohms",children:[l.jsx("span",{className:"brand-logo-text",children:u}),m===1&&l.jsx("span",{className:"type-caret"})]}),l.jsx("div",{className:`hero-subheading-wrap ${f?"visible":""}`,children:l.jsx("div",{className:"hero-google-card",children:l.jsxs("div",{className:"hero-card-text",children:[l.jsx("div",{className:"hero-card-title",children:"AI-Powered, Blockchain-Ready Carbon Credit Marketplace"}),l.jsx("div",{className:"hero-card-subtitle",children:"Connecting farmers generating carbon reductions with industries seeking credible ways to offset their emissions — with 70–90% direct farmer payouts."}),l.jsxs("div",{className:"hero-card-tags d-flex flex-wrap gap-2 mt-2",children:[l.jsx("span",{className:"hero-mini-tag",children:"Satellite Verification"}),l.jsx("span",{className:"hero-mini-tag",children:"Zero Double-Counting"}),l.jsx("span",{className:"hero-mini-tag",children:"IT Decarbonization"})]})]})})}),l.jsxs("div",{className:`hero-cta-btn-wrap ${M?"visible":""}`,children:[l.jsxs("button",{type:"button",className:"hero-btn-pill hero-btn-premium",onClick:t,children:[l.jsx("span",{className:"btn-shimmer-sweep"}),l.jsx("span",{className:"btn-text",children:"Book Platform Demo"}),l.jsx("i",{className:"bi bi-arrow-right btn-arrow"})]}),l.jsxs("button",{type:"button",className:"hero-btn-pill hero-btn-outline-glow ms-3",onClick:n,children:[l.jsx("span",{className:"btn-text",children:"Explore Marketplace"}),l.jsx("i",{className:"bi bi-shop btn-arrow"})]})]})]})]})]})}const VT=[{id:"co2e",target:125e3,label:"Tonnes CO₂e Sequestration Potential",suffix:"+"},{id:"share",target:80,label:"Farmer Direct Revenue Target",suffix:"%"},{id:"farmers",target:1450,label:"Registered Rural Land Stewards",suffix:"+"},{id:"latency",target:50,label:"Smart Contract Settlement Latency",suffix:"ms"}];function GT({target:t,label:e,suffix:n="+",isVisible:i,delayIndex:r=0}){const[s,a]=We.useState(0);return We.useEffect(()=>{if(!i)return;let o=null,c;const u=2e3,h=p=>{o||(o=p);const d=p-o,m=Math.min(d/u,1),v=m===1?1:1-Math.pow(2,-10*m);a(Math.floor(v*t)),m<1?c=requestAnimationFrame(h):a(t)};return c=requestAnimationFrame(h),()=>cancelAnimationFrame(c)},[i,t]),l.jsxs("div",{className:`google-stat-card ${i?"card-revealed":""}`,style:{"--reveal-delay":`${r*.08}s`},children:[l.jsx("div",{className:"google-stat-card-sheen","aria-hidden":"true"}),l.jsxs("div",{className:"google-stat-card-inner",children:[l.jsxs("div",{className:"google-stat-num-row",children:[l.jsx("span",{className:"google-stat-number",children:s.toLocaleString()}),l.jsx("span",{className:"google-stat-suffix text-gradient-emerald",children:n})]}),l.jsx("div",{className:"google-stat-label",children:e})]})]})}const ts=[{id:"ai-verification",number:"01",category:"AI Remote Verification",highlight:"Multi-Spectral Biomass Analytics",desc:"High-resolution Sentinel-2 and drone computer vision models verify canopy density, NDVI time-series, and biomass volume with real-time anomaly detection.",metricNum:"99.2%",metricUnit:"Verification Confidence",metricSub:"Multi-spectral satellite & drone calibration",statusBadge:"AI Model v2.4 Live",statusDot:"dot-green",themeColor:"#10b981",glowClass:"aura-green",videoSrc:"/assets/video/1.mp4",icon:"bi-radar",chips:["Sentinel-2 Imagery","Drone Photogrammetry","Canopy Computer Vision","IoT Soil Probes"],highlights:["Continuous temporal monitoring detects reversals, fires, or unauthorized logging","Ground-truthed calibrated soil organic carbon (SOC) models prevent over-crediting","Automated alert dispatch to independent verifiers upon any canopy anomaly"]},{id:"farmer-first",number:"02",category:"Farmer-First Economics",highlight:"70–90% Direct Value to Farmers",desc:"Eliminating predatory intermediary brokers to ensure rural stewards, agroforestry growers, and regenerative farmers receive the vast majority of carbon offset proceeds.",metricNum:"80%",metricUnit:"Baseline Farmer Share",metricSub:"Direct distribution via smart contract / UPI",statusBadge:"Direct Routing Active",statusDot:"dot-blue",themeColor:"#1a73e8",glowClass:"aura-blue",videoSrc:"/assets/video/2.mp4",icon:"bi-wallet2",chips:["No Middlemen","Transparent Splits","Direct Bank & UPI","Working Capital Support"],highlights:["Empowering smallholders with verifiable income for restorative agriculture","Full public transparency of platform fees, audit deductions, and net payouts","Milestone-gated disbursements ensuring multi-year ecological permanence"]},{id:"blockchain-integrity",number:"03",category:"Blockchain Integrity",highlight:"Zero Double-Counting & Tamper-Evident Proof",desc:"Each issued credit receives a cryptographically unique identifier recorded on a public, immutable ledger with permanent retirement proof for ESG compliance.",metricNum:"100%",metricUnit:"Cryptographic Audit Trail",metricSub:"Tamper-evident issuance & retirement records",statusBadge:"Ledger Node Synced",statusDot:"dot-purple",themeColor:"#8b5cf6",glowClass:"aura-purple",videoSrc:"/assets/video/3.mp4",icon:"bi-link-45deg",chips:["Unique Token IDs","Anti-Double-Issuance","Atomic Smart Contracts","Public Ledger"],highlights:["Prevents double-selling across disparate international voluntary registries","Atomic swap mechanics ensure buyer payment and credit transfer execute simultaneously","Cryptographically signed retirement certificates mapped to corporate tax and ESG IDs"]},{id:"it-decarbonization",number:"04",category:"Enterprise Decarbonization",highlight:"Empowering IT, Cloud & Data Centres",desc:"Helping technology enterprises measure energy footprints, optimize server cooling & computing first, and offset remaining emissions with high-integrity carbon credits.",metricNum:"1,000+",metricUnit:"Tonnes CO₂e Offsets Mapped",metricSub:"GHG Protocol Scope 1, 2 & 3 reporting ready",statusBadge:"GHG Protocol Mapped",statusDot:"dot-amber",themeColor:"#f59e0b",glowClass:"aura-amber",videoSrc:"/assets/video/4.mp4",icon:"bi-cpu-fill",chips:["Data Centre PUE","AI Workload Offsets","Scope 1-3 Compliance","Enterprise ESG"],highlights:["Clear separation of internal emissions reduction vs external offset purchases","API integration with corporate carbon accounting suites (SAP, Salesforce, Workiva)","Verified co-benefits: biodiversity preservation, rural job creation, and water security"]}];function jT(){const[t,e]=We.useState(0),n=We.useRef(null),i=We.useRef(null),r=We.useRef(0);r.current=t;const s=We.useRef(!1),a=We.useRef(null),[o,c]=We.useState(!1),u=We.useRef(null);We.useEffect(()=>{if(!u.current)return;const d=new IntersectionObserver(([m])=>{m.isIntersecting&&(c(!0),d.disconnect())},{threshold:.05,rootMargin:"0px 0px -20px 0px"});return d.observe(u.current),()=>d.disconnect()},[]);const h=d=>{if(!n.current)return;const m=Math.max(0,Math.min(d,ts.length-1)),v=m*n.current.clientHeight;n.current.scrollTo({top:v,behavior:"smooth"}),e(m)},p=()=>{if(!n.current)return;const d=n.current,m=d.clientHeight;if(m<=0)return;const v=Math.round(d.scrollTop/m);v>=0&&v<ts.length&&v!==r.current&&e(v)};return We.useEffect(()=>{const d=i.current;if(!d)return;const m=f=>{const x=f.deltaY;if(Math.abs(x)<18)return;const b=r.current;if(x>0&&b<ts.length-1){if(f.preventDefault(),f.stopPropagation(),s.current)return;s.current=!0,h(b+1),clearTimeout(a.current),a.current=setTimeout(()=>{s.current=!1},500)}else if(x<0&&b>0){if(f.preventDefault(),f.stopPropagation(),s.current)return;s.current=!0,h(b-1),clearTimeout(a.current),a.current=setTimeout(()=>{s.current=!1},500)}};let v=0;const M=f=>{v=f.touches[0].clientY},g=f=>{const x=f.changedTouches[0].clientY,b=v-x;if(Math.abs(b)<40)return;const y=r.current;b>0&&y<ts.length-1?h(y+1):b<0&&y>0&&h(y-1)};return d.addEventListener("wheel",m,{passive:!1}),d.addEventListener("touchstart",M,{passive:!0}),d.addEventListener("touchend",g,{passive:!0}),()=>{d.removeEventListener("wheel",m),d.removeEventListener("touchstart",M),d.removeEventListener("touchend",g),clearTimeout(a.current)}},[]),l.jsxs("section",{id:"counts",className:"stats-strip-white",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{ref:i,className:"mini-screen-container","data-lenis-prevent":"true",children:[l.jsx("div",{className:"mini-screen-floating-dots","aria-label":"Slide indicators",children:ts.map((d,m)=>l.jsx("button",{type:"button",onClick:()=>h(m),className:`floating-dot-pill ${t===m?"pill-active":""}`,title:d.category,"aria-label":`Slide ${m+1}: ${d.category}`,children:l.jsx("span",{className:"dot-pill-num",children:d.number})},d.id))}),l.jsx("div",{ref:n,className:"mini-screen-viewport",onScroll:p,"data-lenis-prevent":"true",children:ts.map((d,m)=>l.jsx("div",{className:`mini-screen-slide ${d.glowClass}`,"data-slide-index":m,children:l.jsxs("div",{className:"slide-content-grid",children:[l.jsx("div",{className:"slide-video-col",children:l.jsxs("div",{className:"slide-video-square-card liquid-glass-strong",children:[l.jsx("div",{className:"liquid-glass-beam"}),l.jsx("div",{className:"square-video-ratio-box",children:l.jsx("video",{className:"square-video-element",src:d.videoSrc,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto"})})]})}),l.jsxs("div",{className:"slide-info-col",children:[l.jsx("h2",{className:"slide-panel-top-title",children:d.category}),l.jsxs("div",{className:"slide-info-panel liquid-glass",children:[l.jsx("div",{className:"liquid-glass-beam"}),l.jsx("h3",{className:"slide-main-heading",children:d.highlight}),l.jsx("p",{className:"slide-main-desc",children:d.desc}),l.jsxs("div",{className:"slide-metric-callout",children:[l.jsx("div",{className:"metric-large",style:{color:d.themeColor},children:d.metricNum}),l.jsxs("div",{className:"metric-details",children:[l.jsx("span",{className:"metric-unit-text",children:d.metricUnit}),l.jsx("span",{className:"metric-sub-text",children:d.metricSub})]})]}),l.jsx("div",{className:"slide-highlights-list",children:d.highlights.map((v,M)=>l.jsxs("div",{className:"slide-highlight-item",children:[l.jsx("i",{className:"bi bi-check-circle-fill me-2",style:{color:d.themeColor}}),l.jsx("span",{children:v})]},M))}),l.jsx("div",{className:"slide-chips-row mt-3",children:d.chips.map((v,M)=>l.jsx("span",{className:"slide-chip-item",children:v},M))})]})]})]})},d.id))})]}),l.jsxs("div",{className:"trust-badges-ribbon carbosafe-trust-ribbon",children:[l.jsx("div",{className:"trust-badge-item",title:"AI Satellite Verification",children:l.jsxs("div",{className:"trust-badge-pill",children:[l.jsx("i",{className:"bi bi-satellite text-success"}),l.jsx("span",{children:"Sentinel-2 AI Verification"})]})}),l.jsx("div",{className:"trust-badge-item",title:"Farmer Direct Value",children:l.jsxs("div",{className:"trust-badge-pill",children:[l.jsx("i",{className:"bi bi-wallet-fill text-primary"}),l.jsx("span",{children:"70–90% Direct Farmer Payouts"})]})}),l.jsx("div",{className:"trust-badge-item",title:"Blockchain Provenance",children:l.jsxs("div",{className:"trust-badge-pill",children:[l.jsx("i",{className:"bi bi-shield-check text-warning"}),l.jsx("span",{children:"Tamper-Evident Blockchain Registry"})]})}),l.jsx("div",{className:"trust-badge-item",title:"Zero Double-Counting",children:l.jsxs("div",{className:"trust-badge-pill",children:[l.jsx("i",{className:"bi bi-fingerprint text-info"}),l.jsx("span",{children:"Zero Double-Counting Safeguard"})]})})]}),l.jsxs("div",{className:"mini-screen-parallel-showcase",children:[l.jsxs("p",{className:"parallel-showcase-desc",children:[l.jsx("span",{className:"desc-lead",children:"CarboSafe"})," operates at the intersection of climate science, artificial intelligence, and decentralized markets to build the world’s most transparent carbon credit infrastructure. Our farmer-first revenue model empowers rural communities while giving industrial and IT buyers ",l.jsx("span",{className:"desc-highlight-value",children:"unimpeachable, satellite-verified environmental offsets"}),"."]}),l.jsx("div",{className:"quote-glass-stage-wrap",children:l.jsxs("div",{className:"quote-callout-card quote-glass-card",children:[l.jsx("div",{className:"liquid-glass-beam"}),l.jsxs("div",{className:"quote-callout-inner",children:[l.jsx("div",{className:"quote-premium-glyph","aria-hidden":"true",children:l.jsxs("svg",{width:"38",height:"28",viewBox:"0 0 38 28",fill:"none",children:[l.jsx("path",{d:"M0 16.8C0 7.5 6.2 1.9 15.4 0L17.2 3.8C10.8 5.3 8 8.4 7.7 12.5H15.4V28H0V16.8ZM20.6 16.8C20.6 7.5 26.8 1.9 36 0L37.8 3.8C31.4 5.3 28.6 8.4 28.3 12.5H36V28H20.6V16.8Z",fill:"url(#quoteGrad)"}),l.jsx("defs",{children:l.jsxs("linearGradient",{id:"quoteGrad",x1:"0",y1:"0",x2:"38",y2:"28",gradientUnits:"userSpaceOnUse",children:[l.jsx("stop",{stopColor:"#10b981"}),l.jsx("stop",{offset:"0.5",stopColor:"#06b6d4"}),l.jsx("stop",{offset:"1",stopColor:"#1a73e8"})]})})]})}),l.jsxs("p",{className:"quote-callout-text",children:["Make carbon credits more trustworthy, transparent, and fair to the people who help protect the environment.",l.jsx("span",{className:"quote-close-glyph","aria-hidden":"true",children:l.jsx("svg",{width:"26",height:"20",viewBox:"0 0 38 28",fill:"none",children:l.jsx("g",{transform:"rotate(180 19 14)",children:l.jsx("path",{d:"M0 16.8C0 7.5 6.2 1.9 15.4 0L17.2 3.8C10.8 5.3 8 8.4 7.7 12.5H15.4V28H0V16.8ZM20.6 16.8C20.6 7.5 26.8 1.9 36 0L37.8 3.8C31.4 5.3 28.6 8.4 28.3 12.5H36V28H20.6V16.8Z",fill:"url(#quoteGrad)"})})})})]}),l.jsx("div",{className:"quote-author-tag",children:"— The CarboSafe Mission"})]})]})})]})]}),l.jsx("div",{className:"stats-metric-strip-band",children:l.jsx("div",{className:"container",children:l.jsx("div",{ref:u,className:"parallel-stats-strip-grid",children:VT.map((d,m)=>l.jsx(GT,{target:d.target,label:d.label,suffix:d.suffix,isVisible:o,delayIndex:m},d.id))})})})]})}const nl={badgePills:["ClimateTech","Artificial Intelligence","Carbon Markets","Blockchain-ready"],oneLinePitch:"CarboSafe is an AI-powered, blockchain-ready carbon credit marketplace that connects farmers generating carbon reductions with industries seeking credible ways to offset their emissions.",mission:"Make carbon credits more trustworthy, transparent, and fair to the people who help protect the environment.",collegePitch:{title:"CarboSafe — Measuring, Predicting and Reducing Carbon Footprints with AI",summary:"The IT industry is growing rapidly, but data centres, cloud computing, and digital infrastructure also contribute to greenhouse gas emissions. At the same time, carbon markets face challenges involving verification, transparency, and fair compensation for farmers.",highlights:["AI-powered, blockchain-ready carbon credit marketplace connecting farmers with industries","Sustainable agricultural projects registered with satellite imagery & sensor telemetry","Traceable carbon credits with tamper-evident records & anti-double-counting safeguards","Farmer-first revenue model directing 70–90% of net distributable proceeds directly to farmers"]}},WT=[{id:"A",title:"Rising Carbon Emissions",category:"Industrial & IT Impact",summary:"IT companies, data centers, cement plants, steel manufacturers, and energy companies consume electricity and generate greenhouse gas emissions. Cloud computing and AI workloads accelerate energy demand.",icon:"bi-cloud-slash",stat:"High Growth",statLabel:"Cloud & AI Energy Demand",color:"#ea4335",bullets:["Massive server farms and hyperscale data centers require 24/7 cooling and power","Hardware manufacturing, transport, and e-waste generate significant Scope 3 emissions","Rapid explosion of generative AI training & inference workloads compounds power footprint"]},{id:"B",title:"Lack of Trust in Carbon Credits",category:"Market Integrity",summary:"Buyers need confidence that a credit represents a real, measurable reduction or removal of emissions. Weak verification, greenwashing, and double-counting severely undermine global market trust.",icon:"bi-shield-exclamation",stat:"Integrity Gap",statLabel:"Authenticity & Double-Counting Risks",color:"#f59e0b",bullets:["Paper-based manual accounting leads to frequent errors and lack of auditable provenance","Credits historically challenged for authenticity due to static unverified estimates","Duplicate claims across multiple voluntary registries without central cryptographic verification"]},{id:"C",title:"Farmers Receive Insufficient Value",category:"Farmer Inequity",summary:"Farmers using agroforestry, tree planting, and regenerative agricultural practices help store carbon, but struggle to access carbon markets and receive a fair share of revenue.",icon:"bi-cash-stack",stat:"Opaque Splits",statLabel:"Middlemen Drain Value",color:"#10b981",bullets:["Traditional brokers and intermediaries capture the majority of carbon finance margins","Smallholder farmers face complex paperwork, certification fees, and tech barriers","Delayed payouts leave farmers without working capital to sustain soil restoration"]},{id:"D",title:"The Climate Impact Gap",category:"Financing Bottleneck",summary:"When credits are difficult to verify and farmers lack incentives, credible climate projects become harder to finance and scale, widening the gap between corporate climate targets and real removal.",icon:"bi-graph-down-arrow",stat:"Capital Delay",statLabel:"High-Potential Projects Unfunded",color:"#6366f1",bullets:["Industries hesitate to purchase voluntary offsets due to reputation and greenwashing fears","High-potential nature-based carbon sinks remain under-resourced in developing regions","Lack of real-time monitoring means reversals or tree die-offs go undetected"]}],ou={headline:"The Central Problem Statement",statement:"Carbon markets need a reliable way to connect measurable environmental benefits with buyers while improving transparency, preventing duplicate claims, and ensuring that farmers receive a fair share of the value.",disclaimer:"Important: Statistics cited in preliminary pitch decks (e.g. claims of authenticity challenges or manual accounting error rates) represent initial presentation estimates that must be validated with independent empirical research before formal registry filings."},ns=[{step:"01",title:"Farmers Register Projects",subtitle:"Onboarding & Field Geofencing",desc:"Farmers submit land coordinates, agricultural practices (agroforestry, regenerative soil, tree planting), parcel boundary polygons, and baseline historical records.",icon:"bx-map-pin",badge:"Land Geofencing",accent:"#10b981",features:["Simple mobile-accessible UI for low-bandwidth rural connectivity","GPS polygon boundary tagging and land tenure documentation","Baseline crop, soil type, and agroforestry species cataloging"]},{step:"02",title:"Measure and Verify with AI",subtitle:"Multi-Sensor Environmental Telemetry",desc:"AI models analyse high-resolution Sentinel-2 and drone imagery alongside IoT soil moisture and organic carbon telemetry to track environmental changes over time.",icon:"bx-radar",badge:"Satellite & Drone AI",accent:"#0284c7",features:["NDVI, biomass volume, and canopy cover time-series computer vision","IoT sensor integration for ground-truth soil moisture and carbon flux","Automated anomaly flags for sudden clearing, drought, or degradation"]},{step:"03",title:"Validate Carbon Reductions",subtitle:"Rigorous Methodology Accounting",desc:"Standardized carbon accounting engines compute net CO₂e sequestered, deduct conservative uncertainty buffers, and coordinate independent third-party auditor validation.",icon:"bx-check-shield",badge:"Methodology Engine",accent:"#8b5cf6",features:["Calculations adhere to accepted IPCC / Verra / Gold Standard frameworks","Conservative uncertainty discounting prevents over-crediting","Independent verifier portal for transparent audit and sign-off"]},{step:"04",title:"Industries Purchase Credits",subtitle:"Transparent Corporate Offsetting",desc:"Enterprises browse verified project listings, inspect multi-year satellite evidence and audit reports, and execute atomic credit purchases with instant certificate retirement.",icon:"bx-building",badge:"Atomic Execution",accent:"#f59e0b",features:["Project-level evidence dossier: satellite time-lapse & audit proofs","Atomic transaction engine guaranteeing no double-issuance or overselling","Immutable retirement certificates mapped to corporate Scope 1, 2, or 3 reporting"]},{step:"05",title:"Transparent Farmer Payouts",subtitle:"70–90% Direct Value Routing",desc:"Smart contracts automatically disburse agreed proceeds (70–90%) directly to the project farmer's wallet, with every rupee logged in a public, tamper-evident ledger.",icon:"bx-wallet",badge:"Direct Distribution",accent:"#10b981",features:["Direct bank / UPI / smart wallet transfer with zero middleman deductions","Full public audit trail showing exact fee breakdown and farmer compensation","Ongoing milestone-based payouts incentivizing long-term permanence"]}],lu=[{id:"farmers",role:"Farmers",subrole:"Project Creators & Land Stewards",icon:"bx-user-pin",accent:"#10b981",tagline:"Monetize sustainable agriculture with dignity, transparency, and fair compensation.",capabilities:["Register land parcels and sustainability projects via simple smartphone workflow","Submit project details, GPS coordinates, area, and supporting photographs","Track satellite verification status and estimated carbon credits in real-time","View credit sales, live earnings balance, and transparent withdrawal history"],dashboardMock:{stat1:"12.4 Hectares",stat1Label:"Registered Agroforestry",stat2:"480 Tonnes",stat2Label:"Verified CO₂e Sequestered",stat3:"₹3,84,000",stat3Label:"Total Farmer Earnings (80%)",badge:"Active Farmer Node #208"}},{id:"industries",role:"Industries",subrole:"Credit Buyers & Corporate Off-takers",icon:"bx-buildings",accent:"#1a73e8",tagline:"Neutralize unavoidable emissions with verified, tamper-evident nature-based credits.",capabilities:["Browse high-integrity projects with satellite evidence and methodology ratings","Review independent verification reports, risk scores, and co-benefits","Purchase credits via secure atomic transactions with instant receipt generation","Retire credits permanently with unique cryptographic certificates for ESG disclosure"],dashboardMock:{stat1:"1,250 Tonnes",stat1Label:"Retired Offsets (FY 2026)",stat2:"100% Traceable",stat2Label:"Blockchain Proof of Retirement",stat3:"₹12.5 Lakhs",stat3Label:"Direct Farmer Climate Impact",badge:"Enterprise Tier: Tech Infra Ltd."}},{id:"verifiers",role:"Verifiers & Admins",subrole:"Market Integrity & Independent Validation",icon:"bx-check-double",accent:"#9333ea",tagline:"Ensure strict methodology adherence, investigate anomalies, and prevent fraud.",capabilities:["Review project documentation, land ownership records, and baseline data","Investigate suspicious sensor telemetry or satellite anomaly flags","Approve, reject, or request field corrections prior to credit issuance","Monitor transaction ledgers to prevent duplicate credit issuance across registries"],dashboardMock:{stat1:"99.4%",stat1Label:"Verification Confidence Index",stat2:"24 Projects",stat2Label:"Under Active Satellite Surveillance",stat3:"Zero",stat3Label:"Duplicate Issuances Allowed",badge:"Registry Integrity Council"}}],XT=[{layer:"Layer 1",title:"Data Collection",status:"Active MVP + Planned IoT",desc:"Collect project locations, polygon land area, agricultural practices, Sentinel-2 / Landsat satellite imagery, drone high-res surveys, IoT soil sensors, and relevant emissions records.",currentStatus:"Initial version: user-submitted project information stored in Supabase with spatial boundaries.",icon:"bi-layers-half",color:"#1a73e8"},{layer:"Layer 2",title:"AI Measurement & Verification Support",status:"Planned & Modeling",desc:"Estimate carbon changes through computer vision canopy models, predict longitudinal biomass outcomes, perform NDVI time-series analysis, and flag suspicious submissions.",currentStatus:"Planned: computer vision models trained on tropical agroforestry + Sentinel imagery pipelines.",icon:"bi-cpu",color:"#8b5cf6"},{layer:"Layer 3",title:"Carbon Credit Engine",status:"Methodology Pipeline",desc:"Convert eligible, verified net reductions into standardized credits where 1 carbon credit = 1 metric tonne of CO₂ equivalent reduced or removed.",currentStatus:"Methodology-based calculations, strict issuance state machine (Draft → Verified → Issued → Retired).",icon:"bi-calculator",color:"#10b981"},{layer:"Layer 4",title:"Blockchain & Payouts",status:"Smart Contract Architecture",desc:"Record credit minting, ownership transfers, and retirement with immutable cryptographic identifiers. Smart contracts automate agreed revenue distributions to farmers.",currentStatus:"Planned: tamper-evident ledger integration, ERC-1155 / audited smart contract escrow for payouts.",icon:"bi-link-45deg",color:"#f59e0b"}],qT=[{tech:"Satellite and drone imagery",purpose:"Observe land canopy, biomass density, and vegetation changes over time at scale",role:"Remote Observation"},{tech:"IoT soil & weather sensors",purpose:"Collect ground-truth field-level moisture, temperature, and carbon flux readings",role:"Ground Truth"},{tech:"AI & computer vision",purpose:"Analyse multi-spectral imagery, predict biomass yield, and flag potential anomalies",role:"Intelligent Analytics"},{tech:"Carbon accounting engine",purpose:"Estimate net emissions reductions using rigorous, standardized methodologies",role:"Quantification"},{tech:"Blockchain registry",purpose:"Provide tamper-evident, immutable records of credit issuance, ownership, and retirement",role:"Provenance & Integrity"},{tech:"Smart contracts",purpose:"Enforce programmed transaction rules, atomic swaps, and automated farmer payouts",role:"Autonomous Execution"}],Cm={headline:"An Important Distinction: AI + Blockchain Reality Check",text:"AI can support measurement and fraud detection, but it cannot prove every carbon claim by itself. Blockchain preserves records; it cannot guarantee that the original measurements were truthful. Strong carbon accounting, independent verification, and checks against double-counting are still necessary foundations."},Oo={emissionsSources:[{title:"Data Centres & Cloud Infrastructure",desc:"Massive round-the-clock electricity consumption for servers, high-density compute racks, and uninterrupted backup generators.",icon:"bi-server"},{title:"Cooling Systems & Thermal Power",desc:"HVAC chillers and water-cooling arrays required to prevent thermal throttling consume up to 40% of data centre facility power.",icon:"bi-snow2"},{title:"Hardware Manufacturing & Scope 3",desc:"Silicon fabrication, raw rare-earth minerals, semiconductor logistics, packaging, and rapid hardware replacement cycles.",icon:"bi-cpu-fill"},{title:"AI Workloads & LLM Training",desc:"Training and serving large frontier models consumes tens of megawatt-hours, dramatically inflating corporate power bills.",icon:"bi-lightning-charge-fill"}],fiveStepProcess:[{step:1,title:"Measure",desc:"The company calculates its emissions using electricity bills, PUE server data, and GHG Protocol standards."},{step:2,title:"Reduce First",desc:"It optimizes server utilization, software efficiency, green hosting, and shifts to renewable electricity."},{step:3,title:"Explore Eligible Credits",desc:"For remaining unavoidable emissions, it reviews independently verified, high-integrity projects on CarboSafe."},{step:4,title:"Purchase and Retire",desc:"It purchases verified credits with immutable retirement proof recorded against its chosen emissions claim."},{step:5,title:"Support Farmers",desc:"Eligible project proceeds are distributed directly (70–90%) to the rural stewards protecting the land."}],workedExample:{clarification:"If an IT company reports 1,000 tonnes of CO₂e emissions and purchases 100 tonnes of verified CarboSafe credits, that does NOT mean its actual operational emissions fell to 900 tonnes. The emissions (1,000 t) and the offsets (100 t) must be reported separately under GHG accounting guidelines.",positioning:"CarboSafe helps companies measure and reduce emissions first, then access credible carbon projects for any remaining emissions they choose to offset."}},Am={farmerFirstSplit:{note:"Illustrative calculation only. Actual payouts depend on fees, verification costs, project agreements, and the final revenue-sharing policy."},streams:[{stream:"Marketplace Commission",mechanism:"A transparent disclosed percentage on completed credit secondary and primary sales."},{stream:"Verification Services",mechanism:"Fixed coordination fees for high-precision satellite, drone, and auditor field validation."},{stream:"Enterprise Subscription",mechanism:"Premium corporate sustainability dashboards, Scope 1-3 audit exports, and API access."},{stream:"Data & Environmental Analytics",mechanism:"Canopy growth tracking, biodiversity indices, and longitudinal soil carbon analytics."},{stream:"Enterprise Integrations",mechanism:"Direct ERP and ESG software connectors (SAP, Salesforce Net Zero Cloud, Workiva)."}]},YT=[{id:1,title:"Evidence-Driven Verification",desc:"Build a connection between project claims and measurable environmental evidence instead of relying solely on uploaded paper documents.",icon:"bi-camera-video-fill",color:"#1a73e8"},{id:2,title:"Farmer-First Economics",desc:"Make the farmer's share (70–90%), deductions, project status, and payments visible with no hidden intermediary markups.",icon:"bi-heart-fill",color:"#10b981"},{id:3,title:"Traceable Carbon Credits",desc:"Give each issued credit a unique identifier and maintain a clear issuance, ownership, and retirement history to eliminate double-counting.",icon:"bi-qr-code",color:"#8b5cf6"},{id:4,title:"Industrial Buyer Experience",desc:"Help businesses find high-integrity projects, review evidence, manage purchases, and maintain compliance records for ESG reporting.",icon:"bi-briefcase-fill",color:"#f59e0b"}],cu={subhead:"Actual development progress from our Lovable and VS Code engineering sessions.",components:[{title:"Supabase Connection",desc:"Lovable connected the project to the live Supabase PostgreSQL project named carbosafe.",status:"Connected",badgeClass:"badge-success"},{title:"Authentication & User Roles",desc:"Email/password signup and login with Farmer and Industry roles and automatic profile creation.",status:"Functional",badgeClass:"badge-success"},{title:"Database Schema & RLS",desc:"Generated schema includes profiles, projects, and transactions with Row Level Security policies.",status:"Drafted",badgeClass:"badge-warning"},{title:"Farmer Dashboard (src/pages/Farmers.tsx)",desc:"Submit projects, list the farmer's projects, show wallet balance, and display withdrawal placeholder.",status:"Drafted UI",badgeClass:"badge-warning"},{title:"Industry Dashboard (src/pages/Industries.tsx)",desc:"Browse projects and initiate credit purchases with project details.",status:"Drafted UI",badgeClass:"badge-warning"},{title:"Transparency Page (src/pages/Transparency.tsx)",desc:"Display public transaction ledger and retirement status.",status:"Drafted UI",badgeClass:"badge-warning"}],issuesToFix:[{id:1,title:"Secure Purchases with Atomic RPC",desc:"The drafted industry page inserts a transaction, changes available credits, and calls increment_wallet separately. This must be refactored into a single atomic PostgreSQL transaction / RPC to avoid corrupted balances.",severity:"Critical"},{id:2,title:"Prevent Fake Credit Claims",desc:"Farmers should not be able to declare arbitrary CO₂ reductions and immediately have them treated as tradeable credits. Keep initial estimates strictly separate from verified and issued credits.",severity:"High"},{id:3,title:"Review Database Permissions & RLS",desc:"Publicly displaying transaction information on the Transparency page must not expose private user account details. Row Level Security policies require an exhaustive audit.",severity:"High"},{id:4,title:"Fix & Test Data Relationships",desc:"Fix drafted industry queries referencing p.farmer_id without selecting farmer_id. Securely implement the increment_wallet RPC function before production deployment.",severity:"Medium"},{id:5,title:"Verify Application End-to-End",desc:"Execute complete multi-role integration tests: registration, login, project submission, browsing, atomic purchase, wallet updates, and public transparency records.",severity:"Medium"}]},$T=[{phase:"Phase 1",title:"Working Marketplace MVP",desc:"Finish the React application, Supabase authentication, farmer project submission, industry browsing, and transparency views.",status:"Current In-Progress"},{phase:"Phase 2",title:"Secure Transaction Engine",desc:"Implement atomic credit purchases, server-side validation, transaction history, wallet accounting, and payout requests. Integrate payment gateways only after purchase flow is rock solid.",status:"Up Next"},{phase:"Phase 3",title:"Project Verification Workflow",desc:"Add project evidence uploads, geolocation boundary validation, project review, verification status states, and administrator approval. Enforce separation between estimates and approved credits.",status:"Planned"},{phase:"Phase 4",title:"AI Environmental Monitoring",desc:"Integrate satellite imagery APIs, computer vision canopy models, field sensor telemetry, and carbon estimation methodologies. Validate predictions against empirical measurements.",status:"Planned"},{phase:"Phase 5",title:"Blockchain Integration",desc:"Introduce unique cryptographic credit identifiers, auditable issuance and retirement records, and smart contracts to eliminate duplicate claims across registries.",status:"Planned"},{phase:"Phase 6",title:"Pilot with Real Users",desc:"Work with progressive farmers, environmental scientists, independent verifiers, and pilot corporate buyers. Establish accredited crediting methodologies before full public trading.",status:"Planned"}],KT=[{title:"Measurement Accuracy",desc:"Carbon stored in soil and vegetation is complex to quantify. Requires rigorous baseline surveys, uncertainty discount models, and periodic sensor checks.",icon:"bi-rulers"},{title:"Additionality & Permanence",desc:"Projects must prove they would not have occurred without carbon finance, and buffer pools must protect against wildfire or timber harvesting reversals.",icon:"bi-shield-check"},{title:"Double-Counting Prevention",desc:"The exact same tonne of CO₂e cannot be sold or claimed across multiple registries. Cryptographic hash registries eliminate double-issuance.",icon:"bi-fingerprint"},{title:"Regulatory Compliance",desc:"Navigating emerging Indian Carbon Market (ICM) rules, Bureau of Energy Efficiency guidelines, and international Article 6 compliance.",icon:"bi-journal-text"},{title:"Farmer Adoption",desc:"Software must function smoothly on low-cost Android smartphones in regional languages with minimal cognitive overhead.",icon:"bi-phone"},{title:"Commercial Viability",desc:"Market credit pricing, verification overhead, buyer demand, and net farmer compensation must be grounded in economic viability.",icon:"bi-currency-exchange"}],ZT=[{metric:"Farmer Participation",target:"Active farmers & registered hectares under sustainable management"},{metric:"Verification Quality",target:"Low measurement uncertainty (< 8%) and transparent audit coverage"},{metric:"Credit Integrity",target:"100% of credits issued, transferred & retired with zero duplication"},{metric:"Farmer Earnings",target:"Total payouts disbursed with an average 70–90% farmer value share"},{metric:"Industry Adoption",target:"Active corporate buyers with recurring quarterly emissions retirement"},{metric:"Climate Impact",target:"Verified tonnes of CO₂e sequestered or reduced, reported with rigor"},{metric:"Operational Efficiency",target:"Reduced verification turnaround time and automated compliance"}],ni=[{id:1,title:"Vidarbha Agroforestry & Teak Sequestration",shortTitle:"Vidarbha Agroforestry",category:"Agroforestry",location:"Maharashtra, India",farmerName:"Rameshwar Patil & Cooperative",hectares:"320 Ha",verifiedTonnes:4800,availableCredits:1250,pricePerCredit:"₹1,850",farmerShare:"82%",methodology:"VM0017 / Agroforestry Biomass",satelliteScore:98.4,status:"Verified & Issued",icon:"bx-leaf",description:"Multi-strata agroforestry system combining indigenous teak, moringa, and nitrogen-fixing pulses to enrich degraded cotton soil while generating certified carbon sequestration.",features:["High-resolution Sentinel-2 monthly canopy tracking","IoT ground soil organic carbon (SOC) telemetry probes","82% of credit sale routed directly to smallholder farmers","Verra VM0017 compliant methodology with 15% permanence buffer","Biodiversity co-benefit: restored habitat for endemic pollinators"]},{id:2,title:"Konkan Coastal Mangrove Blue Carbon",shortTitle:"Konkan Mangrove Blue Carbon",category:"Blue Carbon",location:"Ratnagiri Coast, India",farmerName:"Coastal Fisherfolk & Mangrove Trust",hectares:"185 Ha",verifiedTonnes:6200,availableCredits:2100,pricePerCredit:"₹2,400",farmerShare:"85%",methodology:"VM0033 / Tidal Wetland Restoration",satelliteScore:99.1,status:"Verified & Issued",icon:"bx-water",description:"Restoration of critical mangrove estuaries providing massive subterranean blue carbon storage alongside coastal storm-surge protection for fishing villages.",features:["Sub-surface sediment carbon core validation and SAR water level monitoring","85% direct compensation to coastal restoration communities","Zero deforestation enforcement via continuous radar imagery","High permanence score with community stewardship bylaws","Significant marine nursery and crab fishery co-benefits"]},{id:3,title:"Punjab Regenerative Soil & Stubble Abatement",shortTitle:"Punjab Regenerative Soil",category:"Soil Carbon",location:"Ludhiana District, Punjab",farmerName:"Harpreet Singh & 45 Farming Families",hectares:"540 Ha",verifiedTonnes:5100,availableCredits:890,pricePerCredit:"₹1,650",farmerShare:"80%",methodology:"VM0042 / Soil Organic Carbon",satelliteScore:96.8,status:"Verified & Issued",icon:"bx-landscape",description:"Zero-tillage Happy Seeder farming and biochar soil amendment replacing crop residue burning, preventing severe seasonal air pollution and locking carbon in soil.",features:["Thermal anomaly satellite monitoring proves zero stubble fire incidents","Direct laboratory lab-verified soil organic carbon increments","80% net revenue distributed every harvest cycle","Substantial PM2.5 air quality improvement for Delhi-NCR region","Reduces chemical fertilizer consumption by 35%"]},{id:4,title:"Western Ghats High-Canopy Coffee Agroforestry",shortTitle:"Coorg Coffee Canopy Sink",category:"Agroforestry",location:"Coorg, Karnataka",farmerName:"Coorg Organic Planters Guild",hectares:"290 Ha",verifiedTonnes:3950,availableCredits:1400,pricePerCredit:"₹2,100",farmerShare:"81%",methodology:"Plan Vivo / Agroforestry Standard",satelliteScore:97.9,status:"Verified & Issued",icon:"bx-tree",description:"Shade-grown multi-tier Arabica coffee estates preserving ancient rainforest canopy trees, native pepper vines, and deep subterranean root biomass.",features:["Multi-spectral LiDAR drone canopy height calibration","Strict preservation of native jungle hardwood trees over 40 years old","81% direct revenue share to family-owned small plantations","Preserves UNESCO Western Ghats wildlife migration corridor","Organically certified shade management practices"]},{id:5,title:"Deccan Biochar & Soil Regeneration Collective",shortTitle:"Deccan Biochar Collective",category:"Carbon Removal",location:"Ahmednagar, Maharashtra",farmerName:"Kisan Biochar Innovation Cluster",hectares:"210 Ha",verifiedTonnes:3200,availableCredits:750,pricePerCredit:"₹2,800",farmerShare:"84%",methodology:"Puro.earth / Biochar Carbon Removal",satelliteScore:99.5,status:"Verified & Issued",icon:"bx-cube",description:"Pyrolysis of agricultural waste into high-stability biochar, permanently locking recalcitrant carbon in drought-prone Deccan soil for 500+ years.",features:["500-year permanence benchmark accredited by Puro.earth carbon standard","84% revenue paid to farmers upon verified soil field incorporation","Improves soil water-holding capacity in drought-prone rainfed belt","IoT thermocouple logs verify complete smoke-free pyrolysis","Eliminates open-field burning of sugarcane bagasse"]},{id:6,title:"Sundarbans Community Mangrove Carbon Reserve",shortTitle:"Sundarbans Mangrove Reserve",category:"Blue Carbon",location:"West Bengal, India",farmerName:"Sundarbans Women’s Climate Self-Help Groups",hectares:"410 Ha",verifiedTonnes:7400,availableCredits:2800,pricePerCredit:"₹2,650",farmerShare:"88%",methodology:"VM0033 / Blue Carbon Mangrove",satelliteScore:98.9,status:"Verified & Issued",icon:"bx-anchor",description:"Community-driven afforestation of tidal mudflats with Rhizophora and Avicennia mangroves, stabilizing islands and sequestering extraordinary blue carbon.",features:["Weekly Sentinel-1 SAR and optical satellite flood-tide analysis","88% distributed directly to 280 women members of climate SHGs","Natural coastal defense shield against Bay of Bengal cyclones","Zero chemical input, 100% natural seed dispersal management","Cryptographic retirement certificate with GPS polygon mapping"]},{id:7,title:"Himalayan Foothills Bamboo & Mixed Forest Sink",shortTitle:"Himalayan Bamboo Sink",category:"Reforestation",location:"Dehradun, Uttarakhand",farmerName:"Shivalik Agroforestry Consortium",hectares:"340 Ha",verifiedTonnes:4100,availableCredits:960,pricePerCredit:"₹1,950",farmerShare:"80%",methodology:"Gold Standard / Afforestation",satelliteScore:97.4,status:"Verified & Issued",icon:"bx-trending-up",description:"Rapid biomass accumulation through clumping non-invasive bamboo varieties and broadleaf forest restoration on eroded sub-Himalayan terraced slopes.",features:["Rapid carbon uptake rate (4.8 tonnes CO₂e / ha / year)","High soil erosion mitigation on vulnerable landslide terraces","80% direct value distribution to mountain farmers","Annual drone photogrammetry biomass volume estimation","Sustainable handicraft raw material harvest from selective thinning"]},{id:8,title:"Rajasthan Agri-voltaic & Moringa Carbon Oasis",shortTitle:"Arid Zone Moringa & Solar",category:"Agroforestry",location:"Bikaner, Rajasthan",farmerName:"Thar Green Energy Farmers Alliance",hectares:"280 Ha",verifiedTonnes:3500,availableCredits:1120,pricePerCredit:"₹1,750",farmerShare:"82%",methodology:"VM0017 / Arid Land Afforestation",satelliteScore:96.2,status:"Verified & Issued",icon:"bx-sun",description:"Innovative desert farming cultivating drought-resilient Moringa oleifera beneath elevated solar agri-voltaic panels, conserving water and creating an arid carbon sink.",features:["Dual climate impact: clean solar generation + biological carbon sink","Drip irrigation powered 100% by on-site solar pumps","82% farmer payout supporting Thar desert agricultural resilience","Deep taproot carbon storage in sandy desert soils","Continuous IoT soil moisture telemetry"]}];function QT(){return l.jsx("section",{id:"problems",className:"carbosafe-problems-section section-padding",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"google-modules-header text-center",children:[l.jsxs("div",{className:"section-pill-badge mb-2",children:[l.jsx("i",{className:"bi bi-exclamation-triangle-fill text-danger me-2"}),l.jsx("span",{children:"Market Failures & Inefficiencies"})]}),l.jsxs("h2",{className:"section-title-google",children:["The Problems ",l.jsx("span",{className:"text-gradient-gemini",children:"We're Solving"})]}),l.jsx("p",{className:"section-subtitle-google mx-auto",style:{maxWidth:"720px"},children:"Traditional carbon markets are broken by opacity, slow verification, and predatory intermediary margins. CarboSafe addresses the four fundamental crises hindering global decarbonization."})]}),l.jsx("div",{className:"row g-4 mt-2",children:WT.map(t=>l.jsx("div",{className:"col-lg-6 col-md-6",children:l.jsxs("div",{className:"problem-feature-card liquid-glass-subtle",children:[l.jsxs("div",{className:"problem-card-top d-flex align-items-center justify-content-between mb-3",children:[l.jsxs("div",{className:"d-flex align-items-center gap-3",children:[l.jsx("div",{className:"problem-icon-squircle",style:{backgroundColor:`${t.color}18`,color:t.color},children:l.jsx("i",{className:`bi ${t.icon}`})}),l.jsxs("div",{children:[l.jsxs("span",{className:"problem-alpha-pill",children:["Problem ",t.id]}),l.jsx("h3",{className:"problem-title-text",children:t.title})]})]}),l.jsx("div",{className:"problem-category-tag",children:t.category})]}),l.jsx("p",{className:"problem-summary-desc",children:t.summary}),l.jsx("div",{className:"problem-bullet-list mt-3",children:t.bullets.map((e,n)=>l.jsxs("div",{className:"problem-bullet-item d-flex align-items-start gap-2",children:[l.jsx("i",{className:"bi bi-arrow-right-circle text-danger mt-1"}),l.jsx("span",{children:e})]},n))}),l.jsxs("div",{className:"problem-card-footer mt-4 pt-3 border-top d-flex align-items-center justify-content-between",children:[l.jsx("span",{className:"problem-stat-label",children:t.statLabel}),l.jsx("span",{className:"problem-stat-badge",style:{color:t.color},children:t.stat})]})]})},t.id))}),l.jsx("div",{className:"central-problem-banner mt-5",children:l.jsx("div",{className:"central-problem-inner liquid-glass-strong",children:l.jsxs("div",{className:"row align-items-center g-4",children:[l.jsx("div",{className:"col-lg-2 col-md-3 text-center",children:l.jsx("div",{className:"central-problem-glyph",children:l.jsx("i",{className:"bi bi-bullseye text-gradient-emerald"})})}),l.jsxs("div",{className:"col-lg-10 col-md-9",children:[l.jsx("span",{className:"central-tag-pill mb-2 d-inline-block",children:ou.headline}),l.jsxs("p",{className:"central-statement-text",children:['"',ou.statement,'"']}),l.jsxs("div",{className:"central-disclaimer-box mt-3",children:[l.jsx("i",{className:"bi bi-info-circle-fill me-2 text-warning"}),l.jsx("span",{children:ou.disclaimer})]})]})]})})})]})})}function JT({onOpenModal:t}){const[e,n]=We.useState(0),i=ns[e]||ns[0];return l.jsx("section",{id:"solution",className:"workflows-cinematic-section section-padding",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"google-modules-header text-center",children:[l.jsxs("div",{className:"section-pill-badge mb-2",children:[l.jsx("i",{className:"bi bi-gear-wide-connected text-primary me-2"}),l.jsx("span",{children:"End-to-End Pipeline"})]}),l.jsxs("h2",{className:"section-title-google",children:["Our Solution: ",l.jsx("span",{className:"text-gradient-gemini",children:"How CarboSafe Works"})]}),l.jsx("p",{className:"section-subtitle-google mx-auto",style:{maxWidth:"740px"},children:"CarboSafe seamlessly orchestrates rural farmers, remote satellite sensing, carbon accounting engines, and industrial buyers into an auditable 5-step lifecycle."})]}),l.jsxs("div",{className:"row g-4 align-items-stretch mt-3",children:[l.jsx("div",{className:"col-lg-4 col-md-5",children:l.jsx("div",{className:"workflow-tabs-stack",role:"tablist","aria-label":"Solution Steps",children:ns.map((r,s)=>{const a=e===s;return l.jsxs("div",{className:`workflow-tab-card ${a?"active":""}`,onClick:()=>n(s),role:"tab","aria-selected":a,tabIndex:0,onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),n(s))},title:`View Step ${r.step}: ${r.title}`,children:[l.jsx("div",{className:"workflow-tab-active-bar","aria-hidden":"true"}),l.jsx("div",{className:"workflow-tab-icon-box","aria-hidden":"true",children:l.jsx("i",{className:`bx ${r.icon}`})}),l.jsxs("div",{className:"workflow-tab-text",children:[l.jsx("div",{className:"workflow-tab-title",children:r.title}),l.jsx("div",{className:"workflow-tab-sub",children:r.subtitle})]}),l.jsxs("div",{className:"workflow-tab-end","aria-hidden":"true",children:[l.jsx("span",{className:"workflow-tab-index",children:r.step}),l.jsx("i",{className:"bi bi-chevron-right workflow-tab-arrow"})]})]},r.step)})})}),l.jsx("div",{className:"col-lg-8 col-md-7",children:l.jsxs("div",{className:"workflow-stage-card liquid-glass p-4 p-lg-5 h-100 d-flex flex-column justify-content-between",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4",children:[l.jsxs("div",{className:"d-flex align-items-center gap-3",children:[l.jsxs("span",{className:"step-large-badge",style:{backgroundColor:`${i.accent}15`,color:i.accent},children:["Step ",i.step]}),l.jsx("span",{className:"step-tag-pill",children:i.badge})]}),l.jsxs("span",{className:"step-stage-counter",children:["Stage ",e+1," of ",ns.length]})]}),l.jsx("h3",{className:"workflow-stage-heading mb-3",children:i.title}),l.jsx("p",{className:"workflow-stage-desc mb-4",children:i.desc}),l.jsxs("div",{className:"step-diagram-canvas liquid-glass-subtle p-4 rounded-4 mb-4",children:[l.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-3 border-bottom pb-2",children:[l.jsxs("div",{className:"d-flex align-items-center gap-2",children:[l.jsx("span",{className:"diagram-dot-live"}),l.jsxs("span",{className:"diagram-header-label",children:["System Workflow Blueprint: ",i.subtitle]})]}),l.jsx("span",{className:"diagram-status-chip",children:"Autonomous Verification Node"})]}),l.jsxs("div",{className:"diagram-flow-chain d-flex align-items-center justify-content-between flex-wrap gap-2 py-2",children:[l.jsxs("div",{className:"diagram-node",children:[l.jsx("i",{className:"bi bi-geo-alt-fill text-success"}),l.jsx("span",{children:"Field Geofence"})]}),l.jsx("i",{className:"bi bi-arrow-right text-muted"}),l.jsxs("div",{className:"diagram-node",children:[l.jsx("i",{className:"bi bi-satellite text-primary"}),l.jsx("span",{children:"Sentinel-2 Multiband"})]}),l.jsx("i",{className:"bi bi-arrow-right text-muted"}),l.jsxs("div",{className:"diagram-node",children:[l.jsx("i",{className:"bi bi-cpu text-purple"}),l.jsx("span",{children:"AI Canopy Engine"})]}),l.jsx("i",{className:"bi bi-arrow-right text-muted"}),l.jsxs("div",{className:"diagram-node",children:[l.jsx("i",{className:"bi bi-wallet2 text-warning"}),l.jsx("span",{children:"Smart Payout"})]})]})]}),l.jsxs("div",{className:"workflow-features-list",children:[l.jsxs("h4",{className:"workflow-features-title mb-3",children:[l.jsx("i",{className:"bi bi-shield-check text-success me-2"}),"Key Capabilities at this Stage"]}),l.jsx("div",{className:"row g-2",children:i.features.map((r,s)=>l.jsx("div",{className:"col-12",children:l.jsxs("div",{className:"workflow-feature-chip d-flex align-items-center gap-2",children:[l.jsx("i",{className:"bi bi-check-circle-fill text-success"}),l.jsx("span",{children:r})]})},s))})]})]}),l.jsxs("div",{className:"workflow-stage-bottom mt-5 pt-3 border-top d-flex align-items-center justify-content-between flex-wrap gap-3",children:[l.jsxs("div",{className:"d-flex align-items-center gap-2",children:[l.jsxs("button",{type:"button",className:"btn btn-sm btn-google-outline",disabled:e===0,onClick:()=>n(r=>Math.max(0,r-1)),children:[l.jsx("i",{className:"bi bi-arrow-left me-1"})," Prev Step"]}),l.jsxs("button",{type:"button",className:"btn btn-sm btn-google-outline",disabled:e===ns.length-1,onClick:()=>n(r=>Math.min(ns.length-1,r+1)),children:["Next Step ",l.jsx("i",{className:"bi bi-arrow-right ms-1"})]})]}),l.jsxs("button",{type:"button",className:"btn btn-google-primary btn-carbosafe-green",onClick:t,children:[l.jsx("i",{className:"bi bi-play-circle me-2"}),"Request Live Platform Walkthrough"]})]})]})})]})]})})}function e1({onOpenModal:t}){const[e,n]=We.useState("farmers"),i=lu.find(r=>r.id===e)||lu[0];return l.jsx("section",{id:"stakeholders",className:"stakeholders-section section-padding section-bg-subtle",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"google-modules-header text-center",children:[l.jsxs("div",{className:"section-pill-badge mb-2",children:[l.jsx("i",{className:"bi bi-people-fill text-success me-2"}),l.jsx("span",{children:"Three-Sided Ecosystem"})]}),l.jsxs("h2",{className:"section-title-google",children:["Who Will Use ",l.jsx("span",{className:"text-gradient-gemini",children:"CarboSafe?"})]}),l.jsx("p",{className:"section-subtitle-google mx-auto",style:{maxWidth:"720px"},children:"Built specifically for the distinct requirements of smallholder farmers, corporate off-takers, and environmental verifiers."})]}),l.jsx("div",{className:"role-switcher-pills d-flex align-items-center justify-content-center gap-2 mb-4 flex-wrap",children:lu.map(r=>{const s=e===r.id;return l.jsxs("button",{type:"button",className:`role-pill-btn ${s?"active":""}`,onClick:()=>n(r.id),children:[l.jsx("i",{className:`bx ${r.icon} me-2`}),l.jsx("span",{children:r.role})]},r.id)})}),l.jsx("div",{className:"stakeholder-active-card liquid-glass p-4 p-lg-5 rounded-4",children:l.jsxs("div",{className:"row g-4 align-items-center",children:[l.jsxs("div",{className:"col-lg-7",children:[l.jsxs("div",{className:"d-flex align-items-center gap-3 mb-3",children:[l.jsx("div",{className:"role-avatar-squircle",style:{backgroundColor:`${i.accent}15`,color:i.accent},children:l.jsx("i",{className:`bx ${i.icon}`})}),l.jsxs("div",{children:[l.jsx("span",{className:"role-eyebrow",children:i.subrole}),l.jsx("h3",{className:"role-main-title m-0",children:i.role})]})]}),l.jsxs("p",{className:"role-tagline-quote mb-4",children:['"',i.tagline,'"']}),l.jsxs("div",{className:"role-capabilities-stack mb-4",children:[l.jsxs("h4",{className:"capabilities-heading mb-3",children:[l.jsx("i",{className:"bi bi-check2-all text-success me-2"}),"Platform Capabilities & User Actions:"]}),l.jsx("div",{className:"capabilities-grid",children:i.capabilities.map((r,s)=>l.jsxs("div",{className:"capability-item d-flex align-items-start gap-2 mb-2",children:[l.jsx("i",{className:"bi bi-patch-check-fill text-success mt-1"}),l.jsx("span",{children:r})]},s))})]}),l.jsxs("button",{type:"button",className:"btn btn-google-primary btn-carbosafe-green",onClick:t,children:[l.jsxs("span",{children:["Launch ",i.role," Portal Demo"]}),l.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]}),l.jsx("div",{className:"col-lg-5",children:l.jsxs("div",{className:"role-dashboard-mockup liquid-glass-strong p-4 rounded-4",children:[l.jsxs("div",{className:"mockup-header d-flex align-items-center justify-content-between mb-3 border-bottom pb-2",children:[l.jsxs("div",{className:"d-flex align-items-center gap-2",children:[l.jsx("span",{className:"mockup-traffic-dot red"}),l.jsx("span",{className:"mockup-traffic-dot yellow"}),l.jsx("span",{className:"mockup-traffic-dot green"}),l.jsxs("span",{className:"mockup-title ms-2",children:[i.role," Console"]})]}),l.jsx("span",{className:"mockup-badge-live",children:i.dashboardMock.badge})]}),l.jsxs("div",{className:"mockup-stat-box mb-3",children:[l.jsx("div",{className:"mockup-stat-value",children:i.dashboardMock.stat1}),l.jsx("div",{className:"mockup-stat-label",children:i.dashboardMock.stat1Label})]}),l.jsxs("div",{className:"mockup-stat-box mb-3",children:[l.jsx("div",{className:"mockup-stat-value",children:i.dashboardMock.stat2}),l.jsx("div",{className:"mockup-stat-label",children:i.dashboardMock.stat2Label})]}),l.jsxs("div",{className:"mockup-stat-box highlight-stat",children:[l.jsx("div",{className:"mockup-stat-value text-gradient-emerald",children:i.dashboardMock.stat3}),l.jsx("div",{className:"mockup-stat-label",children:i.dashboardMock.stat3Label})]}),l.jsx("div",{className:"mockup-activity-strip mt-3 pt-3 border-top",children:l.jsxs("div",{className:"d-flex align-items-center justify-content-between text-muted fs-8",children:[l.jsxs("span",{children:[l.jsx("i",{className:"bi bi-clock-history me-1"})," Real-time Telemetry Synced"]}),l.jsx("span",{className:"text-success",children:"Live Status"})]})})]})})]})})]})})}function t1({onOpenModal:t}){const[e,n]=We.useState(null),i=e?ni.findIndex(a=>a.id===e.id):-1,r=a=>{a&&a.stopPropagation(),i>0?n(ni[i-1]):n(ni[ni.length-1])},s=a=>{a&&a.stopPropagation(),i<ni.length-1?n(ni[i+1]):n(ni[0])};return We.useEffect(()=>{if(!e)return;const a=o=>{o.key==="Escape"?n(null):o.key==="ArrowLeft"?r():o.key==="ArrowRight"&&s()};return window.addEventListener("keydown",a),document.body.style.overflow="hidden",window.__lenis&&window.__lenis.stop(),()=>{window.removeEventListener("keydown",a),document.body.style.overflow="",window.__lenis&&window.__lenis.start()}},[e,i]),l.jsxs("section",{id:"marketplace",className:"google-modules-section section-padding",children:[l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"google-modules-header text-center",children:[l.jsxs("div",{className:"section-pill-badge mb-2",children:[l.jsx("i",{className:"bi bi-shop text-success me-2"}),l.jsx("span",{children:"Verified Nature-Based Sinks"})]}),l.jsxs("h2",{className:"section-title-google",children:["Carbon Credit ",l.jsx("span",{className:"text-gradient-gemini",children:"Marketplace"})]}),l.jsx("p",{className:"section-subtitle-google mx-auto",style:{maxWidth:"720px"},children:"Explore satellite-verified agroforestry, blue carbon, and soil restoration projects across India. Click any project card to review empirical evidence and methodology audit reports."})]}),l.jsx("div",{className:"google-modules-grid",children:ni.map(a=>l.jsxs("div",{className:"google-module-tile",onClick:()=>n(a),role:"button",tabIndex:0,onKeyDown:o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),n(a))},title:`View ${a.shortTitle} details`,children:[l.jsxs("div",{className:"google-tile-top-row",children:[l.jsx("div",{className:"google-tile-icon-circle","aria-hidden":"true",children:l.jsx("i",{className:`bx ${a.icon}`})}),l.jsxs("div",{className:"google-tile-index","aria-hidden":"true",children:[l.jsx("span",{className:"tile-idx-num",children:String(a.id).padStart(2,"0")}),l.jsx("i",{className:"bi bi-arrow-up-right tile-idx-arrow"})]})]}),l.jsxs("div",{className:"google-tile-content",children:[l.jsx("div",{className:"tile-category-badge mb-1",children:a.category}),l.jsx("h3",{className:"google-tile-title",children:a.shortTitle}),l.jsx("div",{className:"google-tile-subtitle",children:a.location}),l.jsxs("div",{className:"tile-meta-footer mt-3 pt-2 border-top d-flex align-items-center justify-content-between",children:[l.jsxs("span",{className:"tile-credits-text text-gradient-emerald fw-bold",children:[a.availableCredits.toLocaleString()," tCO₂e"]}),l.jsxs("span",{className:"tile-price-pill",children:[a.pricePerCredit,"/t"]})]})]})]},a.id))})]}),e&&l.jsx("div",{className:"google-module-modal-overlay",onClick:()=>n(null),role:"dialog","aria-modal":"true","aria-labelledby":"modal-project-title","data-lenis-prevent":"true",children:l.jsxs("div",{className:"google-module-modal-card",onClick:a=>a.stopPropagation(),"data-lenis-prevent":"true",children:[l.jsxs("div",{className:"google-modal-header",children:[l.jsxs("div",{className:"d-flex align-items-center gap-3",children:[l.jsx("div",{className:"google-modal-icon-badge",children:l.jsx("i",{className:`bx ${e.icon}`})}),l.jsxs("div",{children:[l.jsxs("div",{className:"d-flex align-items-center gap-2 mb-1",children:[l.jsxs("span",{className:"google-modal-idx-pill",children:["Project ",String(e.id).padStart(2,"0")," of ",ni.length]}),l.jsx("span",{className:"google-modal-cat-badge",children:e.category}),l.jsx("span",{className:"google-modal-cat-badge bg-success text-white",children:e.status})]}),l.jsx("h3",{id:"modal-project-title",className:"google-modal-title",children:e.title})]})]}),l.jsxs("div",{className:"google-modal-header-actions",children:[l.jsx("button",{type:"button",className:"google-modal-nav-arrow",onClick:r,title:"Previous Project (←)","aria-label":"Previous Project",children:l.jsx("i",{className:"bi bi-chevron-left"})}),l.jsx("button",{type:"button",className:"google-modal-nav-arrow",onClick:s,title:"Next Project (→)","aria-label":"Next Project",children:l.jsx("i",{className:"bi bi-chevron-right"})}),l.jsx("button",{type:"button",className:"google-modal-close-btn",onClick:()=>n(null),title:"Close (Esc)","aria-label":"Close dialog",children:l.jsx("i",{className:"bi bi-x-lg"})})]})]}),l.jsxs("div",{className:"google-modal-body",children:[l.jsx("p",{className:"google-modal-desc",children:e.description}),l.jsxs("div",{className:"google-modal-meta-strip",children:[l.jsxs("div",{className:"meta-tag-item",children:[l.jsx("i",{className:"bi bi-geo-alt-fill text-danger me-1"}),l.jsx("span",{children:e.location})]}),l.jsxs("div",{className:"meta-tag-item",children:[l.jsx("i",{className:"bi bi-person-heart text-success me-1"}),l.jsx("span",{children:e.farmerName})]}),l.jsxs("div",{className:"meta-tag-item",children:[l.jsx("i",{className:"bi bi-aspect-ratio-fill text-primary me-1"}),l.jsx("span",{children:e.hectares})]}),l.jsxs("div",{className:"meta-tag-item",children:[l.jsx("i",{className:"bi bi-wallet-fill text-warning me-1"}),l.jsxs("span",{children:[e.farmerShare," to Farmer"]})]})]}),l.jsxs("div",{className:"modal-metric-card-grid row g-3 my-3",children:[l.jsx("div",{className:"col-md-4",children:l.jsxs("div",{className:"modal-stat-box p-3 rounded-3 liquid-glass-subtle text-center",children:[l.jsx("span",{className:"fs-8 text-muted d-block",children:"Available Credits"}),l.jsxs("strong",{className:"fs-5 text-gradient-emerald",children:[e.availableCredits.toLocaleString()," Tonnes"]})]})}),l.jsx("div",{className:"col-md-4",children:l.jsxs("div",{className:"modal-stat-box p-3 rounded-3 liquid-glass-subtle text-center",children:[l.jsx("span",{className:"fs-8 text-muted d-block",children:"Price Per Credit"}),l.jsx("strong",{className:"fs-5 text-primary",children:e.pricePerCredit})]})}),l.jsx("div",{className:"col-md-4",children:l.jsxs("div",{className:"modal-stat-box p-3 rounded-3 liquid-glass-subtle text-center",children:[l.jsx("span",{className:"fs-8 text-muted d-block",children:"AI Satellite Score"}),l.jsxs("strong",{className:"fs-5 text-success",children:[e.satelliteScore,"% Match"]})]})})]}),l.jsxs("div",{className:"google-modal-features-box",children:[l.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-3",children:[l.jsxs("h4",{className:"google-features-heading m-0",children:[l.jsx("i",{className:"bi bi-check-circle-fill text-success me-2"}),"Verification Evidence & Methodology Highlights"]}),l.jsxs("span",{className:"features-count-pill",children:[e.features.length," Proof Points"]})]}),l.jsx("div",{className:"google-features-grid",children:e.features.map((a,o)=>l.jsxs("div",{className:"google-feature-item",children:[l.jsx("i",{className:"bi bi-check-circle-fill google-check-icon"}),l.jsx("span",{children:a})]},o))})]}),l.jsxs("div",{className:"modal-methodology-note mt-3 p-3 rounded-3 bg-light d-flex align-items-center justify-content-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-muted fs-8 d-block",children:"Standard & Registry Methodology:"}),l.jsx("strong",{className:"text-dark fs-7",children:e.methodology})]}),l.jsx("span",{className:"badge bg-secondary",children:"Tamper-Proof Audit Trail"})]})]}),l.jsxs("div",{className:"google-modal-footer",children:[l.jsxs("div",{className:"google-modal-footer-nav",children:[l.jsxs("button",{type:"button",className:"btn btn-sm btn-google-nav-btn",onClick:r,title:"Previous Project",children:[l.jsx("i",{className:"bi bi-arrow-left me-1"})," Prev"]}),l.jsxs("span",{className:"footer-nav-counter",children:[String(e.id).padStart(2,"0")," / ",ni.length]}),l.jsxs("button",{type:"button",className:"btn btn-sm btn-google-nav-btn",onClick:s,title:"Next Project",children:["Next ",l.jsx("i",{className:"bi bi-arrow-right ms-1"})]})]}),l.jsxs("div",{className:"d-flex align-items-center gap-2",children:[l.jsx("button",{type:"button",className:"btn btn-google-outline",onClick:()=>n(null),children:"Close"}),l.jsxs("button",{type:"button",className:"btn btn-google-primary btn-carbosafe-green",onClick:()=>{n(null),t&&t()},children:[l.jsx("i",{className:"bi bi-cart-check me-2"}),"Purchase & Retire Credits"]})]})]})]})})]})}function n1(){return l.jsx("section",{id:"tech",className:"tech-architecture-section section-padding section-bg-subtle",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"google-modules-header text-center",children:[l.jsxs("div",{className:"section-pill-badge mb-2",children:[l.jsx("i",{className:"bi bi-cpu-fill text-purple me-2"}),l.jsx("span",{children:"Architecture & Technology Stack"})]}),l.jsxs("h2",{className:"section-title-google",children:["The Technology ",l.jsx("span",{className:"text-gradient-gemini",children:"Behind CarboSafe"})]}),l.jsx("p",{className:"section-subtitle-google mx-auto",style:{maxWidth:"740px"},children:"A modular 4-layer architecture combining remote sensing, AI computer vision, robust carbon accounting, and cryptographic blockchain integrity."})]}),l.jsx("div",{className:"row g-4 mt-2",children:XT.map((t,e)=>l.jsx("div",{className:"col-lg-6 col-md-6",children:l.jsxs("div",{className:"tech-layer-card liquid-glass-subtle h-100 p-4 rounded-4",children:[l.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-3",children:[l.jsxs("div",{className:"d-flex align-items-center gap-3",children:[l.jsx("div",{className:"layer-icon-squircle",style:{backgroundColor:`${t.color}15`,color:t.color},children:l.jsx("i",{className:`bi ${t.icon}`})}),l.jsxs("div",{children:[l.jsx("span",{className:"layer-tag-label",children:t.layer}),l.jsx("h3",{className:"layer-card-title m-0",children:t.title})]})]}),l.jsx("span",{className:"layer-status-pill",children:t.status})]}),l.jsx("p",{className:"layer-card-desc mb-3",children:t.desc}),l.jsxs("div",{className:"layer-current-status-box p-3 rounded-3 mt-auto",children:[l.jsx("span",{className:"fs-8 fw-semibold text-muted d-block mb-1",children:"Implementation Status:"}),l.jsx("p",{className:"m-0 fs-7 text-dark",children:t.currentStatus})]})]})},e))}),l.jsxs("div",{className:"synergy-table-container mt-5 liquid-glass p-4 p-lg-5 rounded-4",children:[l.jsxs("div",{className:"d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4",children:[l.jsxs("div",{children:[l.jsx("span",{className:"synergy-eyebrow text-gradient-emerald fw-semibold",children:"Complementary Synergies"}),l.jsx("h3",{className:"synergy-main-heading m-0",children:"Why Do We Need AI and Blockchain Together?"})]}),l.jsx("span",{className:"badge bg-primary px-3 py-2",children:"Symbiotic Verification Model"})]}),l.jsx("div",{className:"table-responsive",children:l.jsxs("table",{className:"table table-hover align-middle custom-synergy-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{scope:"col",style:{width:"28%"},children:"Technology"}),l.jsx("th",{scope:"col",style:{width:"48%"},children:"Specific Environmental Purpose"}),l.jsx("th",{scope:"col",style:{width:"24%"},children:"Architectural Role"})]})}),l.jsx("tbody",{children:qT.map((t,e)=>l.jsxs("tr",{children:[l.jsx("td",{children:l.jsxs("strong",{className:"text-dark d-flex align-items-center gap-2",children:[l.jsx("i",{className:"bi bi-check2-circle text-success"}),t.tech]})}),l.jsx("td",{className:"text-muted",children:t.purpose}),l.jsx("td",{children:l.jsx("span",{className:"role-tag-chip",children:t.role})})]},e))})]})}),l.jsx("div",{className:"distinction-alert-box mt-4 p-4 rounded-3 border-start border-4 border-warning",children:l.jsxs("div",{className:"d-flex align-items-start gap-3",children:[l.jsx("i",{className:"bi bi-shield-shaded text-warning fs-3 mt-1"}),l.jsxs("div",{children:[l.jsx("h4",{className:"distinction-alert-title mb-1 text-warning",children:Cm.headline}),l.jsx("p",{className:"distinction-alert-body m-0 text-muted",children:Cm.text})]})]})})]})]})})}function i1({onOpenModal:t}){const[e,n]=We.useState(1e3),[i,r]=We.useState(10),s=Math.round(e*i/100),a=s*1850,o=Math.round(a*.8);return l.jsx("section",{id:"it-carbon",className:"it-carbon-section section-padding",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"google-modules-header text-center",children:[l.jsxs("div",{className:"section-pill-badge mb-2",children:[l.jsx("i",{className:"bi bi-laptop text-primary me-2"}),l.jsx("span",{children:"College Presentation Focus"})]}),l.jsxs("h2",{className:"section-title-google",children:["How CarboSafe Helps the ",l.jsx("span",{className:"text-gradient-gemini",children:"IT Industry Specifically"})]}),l.jsx("p",{className:"section-subtitle-google mx-auto",style:{maxWidth:"750px"},children:"IT enterprises, hyperscale data centres, and frontier AI workloads are driving rapid electricity demand. Here is how CarboSafe powers a transparent, rigorous corporate decarbonization journey."})]}),l.jsx("div",{className:"row g-3 mt-3 mb-5",children:Oo.emissionsSources.map((c,u)=>l.jsx("div",{className:"col-lg-3 col-md-6",children:l.jsxs("div",{className:"it-source-card liquid-glass-subtle p-3 rounded-4 h-100",children:[l.jsx("div",{className:"source-icon-box mb-2 text-primary",children:l.jsx("i",{className:`bi ${c.icon} fs-4`})}),l.jsx("h4",{className:"source-title-text fs-6 mb-2",children:c.title}),l.jsx("p",{className:"source-desc-text text-muted fs-8 m-0",children:c.desc})]})},u))}),l.jsxs("div",{className:"it-journey-container liquid-glass p-4 p-lg-5 rounded-4 mb-5",children:[l.jsxs("div",{className:"text-center mb-4",children:[l.jsx("span",{className:"text-gradient-emerald fw-bold text-uppercase fs-8 letter-spacing-1",children:"Methodical 5-Step Process"}),l.jsx("h3",{className:"fs-3 fw-bold mt-1",children:"The IT Decarbonization Standard"})]}),l.jsx("div",{className:"row g-3",children:Oo.fiveStepProcess.map(c=>l.jsx("div",{className:"col-lg col-md-4 col-sm-6",children:l.jsxs("div",{className:"journey-step-box p-3 rounded-3 text-center h-100 border",children:[l.jsxs("div",{className:"step-circle-num mx-auto mb-2",children:["0",c.step]}),l.jsx("h5",{className:"fs-7 fw-bold mb-2",children:c.title}),l.jsx("p",{className:"text-muted fs-8 m-0",children:c.desc})]})},c.step))})]}),l.jsx("div",{className:"it-worked-scenario liquid-glass-strong p-4 p-lg-5 rounded-4",children:l.jsxs("div",{className:"row g-4 align-items-center",children:[l.jsxs("div",{className:"col-lg-6",children:[l.jsxs("div",{className:"d-flex align-items-center gap-2 mb-2",children:[l.jsx("span",{className:"badge bg-success",children:"Interactive Scenario"}),l.jsx("span",{className:"text-muted fs-8",children:"1,000 Tonnes Case Study"})]}),l.jsx("h3",{className:"fs-4 fw-bold mb-3",children:"Example: IT Enterprise Offsetting Model"}),l.jsxs("div",{className:"simulator-controls mb-4",children:[l.jsxs("div",{className:"mb-3",children:[l.jsxs("div",{className:"d-flex justify-content-between fs-7 mb-1",children:[l.jsx("span",{children:"Reported Annual IT Emissions:"}),l.jsxs("strong",{className:"text-dark",children:[e.toLocaleString()," tCO₂e"]})]}),l.jsx("input",{type:"range",className:"form-range",min:"200",max:"5000",step:"100",value:e,onChange:c=>n(Number(c.target.value))})]}),l.jsxs("div",{className:"mb-3",children:[l.jsxs("div",{className:"d-flex justify-content-between fs-7 mb-1",children:[l.jsx("span",{children:"Target High-Integrity Offsets (Unavoidable Residuals):"}),l.jsxs("strong",{className:"text-success",children:[i,"% (",s.toLocaleString()," tCO₂e)"]})]}),l.jsx("input",{type:"range",className:"form-range",min:"5",max:"30",step:"5",value:i,onChange:c=>r(Number(c.target.value))})]})]}),l.jsxs("div",{className:"row g-2 mb-3",children:[l.jsx("div",{className:"col-6",children:l.jsxs("div",{className:"p-3 bg-white rounded-3 border",children:[l.jsx("span",{className:"fs-8 text-muted d-block",children:"Offsets Purchased"}),l.jsxs("strong",{className:"fs-5 text-success",children:[s.toLocaleString()," tCO₂e"]})]})}),l.jsx("div",{className:"col-6",children:l.jsxs("div",{className:"p-3 bg-white rounded-3 border",children:[l.jsx("span",{className:"fs-8 text-muted d-block",children:"Direct to Farmers (80%)"}),l.jsxs("strong",{className:"fs-5 text-primary",children:["₹",o.toLocaleString()]})]})})]}),l.jsxs("button",{type:"button",className:"btn btn-google-primary btn-carbosafe-green w-100",onClick:t,children:[l.jsx("span",{children:"Calculate Your IT Company Footprint"}),l.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]}),l.jsx("div",{className:"col-lg-6",children:l.jsxs("div",{className:"scenario-clarification-card p-4 rounded-4 bg-white border border-2 border-primary-subtle shadow-sm",children:[l.jsxs("div",{className:"d-flex align-items-center gap-2 mb-3 text-primary",children:[l.jsx("i",{className:"bi bi-shield-check fs-4"}),l.jsx("h4",{className:"fs-6 fw-bold m-0",children:"Essential Greenhouse Gas Accounting Principle"})]}),l.jsx("p",{className:"scenario-clarification-text fs-7 text-dark mb-3",children:Oo.workedExample.clarification}),l.jsxs("div",{className:"positioning-highlight-box p-3 rounded-3 bg-light border-start border-4 border-success",children:[l.jsx("strong",{className:"fs-8 text-uppercase text-success d-block mb-1",children:"Our Core Positioning"}),l.jsxs("p",{className:"fs-7 text-dark m-0 fw-medium",children:['"',Oo.workedExample.positioning,'"']})]})]})})]})})]})})}function r1({onOpenModal:t}){const[e,n]=We.useState(1e5),[i,r]=We.useState(80),s=Math.round(e*i/100),a=e-s;return l.jsx("section",{id:"revenue",className:"revenue-section section-padding section-bg-subtle",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"google-modules-header text-center",children:[l.jsxs("div",{className:"section-pill-badge mb-2",children:[l.jsx("i",{className:"bi bi-wallet2 text-success me-2"}),l.jsx("span",{children:"Farmer-First Economics"})]}),l.jsxs("h2",{className:"section-title-google",children:["Proposed Revenue Model & ",l.jsx("span",{className:"text-gradient-gemini",children:"Farmer Payouts"})]}),l.jsx("p",{className:"section-subtitle-google mx-auto",style:{maxWidth:"720px"},children:"Sustainable platform economics designed to keep the vast majority of capital flowing directly to the rural communities safeguarding the environment."})]}),l.jsx("div",{className:"payout-simulator-card liquid-glass p-4 p-lg-5 rounded-4 mb-5",children:l.jsxs("div",{className:"row g-4 align-items-center",children:[l.jsxs("div",{className:"col-lg-6",children:[l.jsx("span",{className:"badge bg-success mb-2",children:"Our Farmer-First Payout Standard"}),l.jsx("h3",{className:"fs-3 fw-bold mb-3",children:"70% to 90% Direct Value to Land Stewards"}),l.jsx("p",{className:"text-muted fs-7 mb-4",children:"Unlike legacy brokers who pocket up to 60-70% of credit value in opaque consulting markups, CarboSafe guarantees transparent, smart-contract-enforced revenue distributions."}),l.jsxs("div",{className:"slider-group mb-4",children:[l.jsxs("div",{className:"d-flex justify-content-between mb-1 fs-7",children:[l.jsx("span",{className:"fw-medium",children:"Net Distributable Project Proceeds:"}),l.jsxs("strong",{className:"text-dark",children:["₹",e.toLocaleString()]})]}),l.jsx("input",{type:"range",className:"form-range",min:"20000",max:"1000000",step:"10000",value:e,onChange:o=>n(Number(o.target.value))})]}),l.jsxs("div",{className:"slider-group mb-4",children:[l.jsxs("div",{className:"d-flex justify-content-between mb-1 fs-7",children:[l.jsx("span",{className:"fw-medium",children:"Farmer Revenue Share Percentage:"}),l.jsxs("strong",{className:"text-success",children:[i,"% (Platform: ",100-i,"%)"]})]}),l.jsx("input",{type:"range",className:"form-range",min:"70",max:"90",step:"1",value:i,onChange:o=>r(Number(o.target.value))})]}),l.jsxs("div",{className:"p-3 bg-light rounded-3 text-muted fs-8",children:[l.jsx("i",{className:"bi bi-info-circle me-1 text-primary"}),Am.farmerFirstSplit.note]})]}),l.jsx("div",{className:"col-lg-6",children:l.jsxs("div",{className:"split-visualizer-box liquid-glass-strong p-4 rounded-4 text-center",children:[l.jsx("span",{className:"fs-8 text-uppercase tracking-wide text-muted fw-bold d-block mb-3",children:"Illustrative Proceeds Distribution"}),l.jsx("div",{className:"split-progress-bar-wrap mb-4",children:l.jsxs("div",{className:"progress",style:{height:"28px",borderRadius:"14px"},children:[l.jsxs("div",{className:"progress-bar bg-success fw-bold",style:{width:`${i}%`},children:["Farmer: ",i,"%"]}),l.jsxs("div",{className:"progress-bar bg-secondary fw-bold",style:{width:`${100-i}%`},children:["Platform: ",100-i,"%"]})]})}),l.jsxs("div",{className:"row g-3",children:[l.jsx("div",{className:"col-6",children:l.jsxs("div",{className:"p-3 bg-white rounded-3 border",children:[l.jsx("span",{className:"fs-8 text-muted d-block",children:"Farmer / Partner Share"}),l.jsxs("strong",{className:"fs-4 text-success d-block my-1",children:["₹",s.toLocaleString()]}),l.jsxs("span",{className:"badge bg-success-subtle text-success fs-9",children:[i,"% Share"]})]})}),l.jsx("div",{className:"col-6",children:l.jsxs("div",{className:"p-3 bg-white rounded-3 border",children:[l.jsx("span",{className:"fs-8 text-muted d-block",children:"Platform & Operations"}),l.jsxs("strong",{className:"fs-4 text-secondary d-block my-1",children:["₹",a.toLocaleString()]}),l.jsxs("span",{className:"badge bg-secondary-subtle text-secondary fs-9",children:[100-i,"% Share"]})]})})]}),l.jsxs("button",{type:"button",className:"btn btn-google-primary btn-carbosafe-green w-100 mt-4",onClick:t,children:[l.jsx("span",{children:"Explore Partner Revenue Sharing"}),l.jsx("i",{className:"bi bi-arrow-right ms-2"})]})]})})]})}),l.jsxs("div",{className:"revenue-streams-wrap mb-5",children:[l.jsxs("div",{className:"text-center mb-4",children:[l.jsx("h3",{className:"fs-4 fw-bold",children:"Diversified Platform Revenue Streams"}),l.jsx("p",{className:"text-muted fs-7",children:"How CarboSafe sustains infrastructure without compromising farmer payouts"})]}),l.jsx("div",{className:"row g-3",children:Am.streams.map((o,c)=>l.jsx("div",{className:"col-lg col-md-4 col-sm-6",children:l.jsxs("div",{className:"stream-card p-3 rounded-4 liquid-glass-subtle h-100",children:[l.jsxs("div",{className:"stream-num-badge mb-2",children:["0",c+1]}),l.jsx("h5",{className:"fs-7 fw-bold mb-2",children:o.stream}),l.jsx("p",{className:"text-muted fs-8 m-0",children:o.mechanism})]})},c))})]}),l.jsxs("div",{className:"differentiators-wrap",children:[l.jsxs("div",{className:"text-center mb-4",children:[l.jsx("span",{className:"text-gradient-emerald fw-bold text-uppercase fs-8",children:"Competitive Edge"}),l.jsx("h3",{className:"fs-4 fw-bold mt-1",children:"What Makes CarboSafe Different?"})]}),l.jsx("div",{className:"row g-4",children:YT.map(o=>l.jsx("div",{className:"col-lg-3 col-md-6",children:l.jsxs("div",{className:"differentiator-card liquid-glass-subtle p-4 rounded-4 h-100",children:[l.jsx("div",{className:"diff-icon-squircle mb-3",style:{backgroundColor:`${o.color}15`,color:o.color},children:l.jsx("i",{className:`bi ${o.icon} fs-4`})}),l.jsx("h4",{className:"fs-6 fw-bold mb-2",children:o.title}),l.jsx("p",{className:"text-muted fs-8 m-0",children:o.desc})]})},o.id))})]})]})})}function s1(){return l.jsx("section",{id:"mvp-status",className:"mvp-status-section section-padding",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"google-modules-header text-center",children:[l.jsxs("div",{className:"section-pill-badge mb-2",children:[l.jsx("i",{className:"bi bi-code-square text-primary me-2"}),l.jsx("span",{children:"Engineering Transparency"})]}),l.jsxs("h2",{className:"section-title-google",children:["What We Have Built ",l.jsx("span",{className:"text-gradient-gemini",children:"So Far"})]}),l.jsx("p",{className:"section-subtitle-google mx-auto",style:{maxWidth:"720px"},children:cu.subhead})]}),l.jsx("div",{className:"row g-3 mt-2 mb-5",children:cu.components.map((t,e)=>l.jsx("div",{className:"col-lg-4 col-md-6",children:l.jsx("div",{className:"mvp-comp-card liquid-glass-subtle p-3 rounded-4 h-100 d-flex flex-column justify-content-between",children:l.jsxs("div",{children:[l.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-2",children:[l.jsx("h4",{className:"fs-6 fw-bold m-0",children:t.title}),l.jsx("span",{className:`badge ${t.badgeClass==="badge-success"?"bg-success":"bg-warning text-dark"} fs-9`,children:t.status})]}),l.jsx("p",{className:"text-muted fs-8 m-0",children:t.desc})]})})},e))}),l.jsxs("div",{className:"row g-4 align-items-stretch",children:[l.jsx("div",{className:"col-lg-5",children:l.jsxs("div",{className:"tech-stack-table-card liquid-glass p-4 rounded-4 h-100",children:[l.jsxs("div",{className:"d-flex align-items-center gap-2 mb-3",children:[l.jsx("i",{className:"bi bi-stack text-success fs-5"}),l.jsx("h3",{className:"fs-5 fw-bold m-0",children:"Current Technology Stack"})]}),l.jsx("p",{className:"text-muted fs-8 mb-3",children:"Modern full-stack foundation deployed across Lovable, Vite, React, and Supabase."}),l.jsx("div",{className:"table-responsive",children:l.jsx("table",{className:"table table-sm align-middle fs-8",children:l.jsxs("tbody",{children:[l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Frontend"})}),l.jsx("td",{className:"text-muted",children:"React, TypeScript, Vite"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Styling"})}),l.jsx("td",{className:"text-muted",children:"Google Clean System + Tailwind CSS"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Authentication"})}),l.jsx("td",{className:"text-muted",children:"Supabase Auth (Farmer / Industry roles)"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Database"})}),l.jsx("td",{className:"text-muted",children:"Supabase PostgreSQL + RLS"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Security"})}),l.jsx("td",{className:"text-muted",children:"Row Level Security Policies"})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"AI Verification"})}),l.jsx("td",{className:"text-muted",children:l.jsx("span",{className:"badge bg-secondary-subtle text-secondary",children:"Planned Model"})})]}),l.jsxs("tr",{children:[l.jsx("td",{children:l.jsx("strong",{children:"Blockchain"})}),l.jsx("td",{className:"text-muted",children:l.jsx("span",{className:"badge bg-secondary-subtle text-secondary",children:"Planned Smart Contracts"})})]})]})})})]})}),l.jsx("div",{className:"col-lg-7",children:l.jsxs("div",{className:"issues-fix-card liquid-glass p-4 rounded-4 h-100",children:[l.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-3 flex-wrap gap-2",children:[l.jsxs("div",{className:"d-flex align-items-center gap-2",children:[l.jsx("i",{className:"bi bi-tools text-danger fs-5"}),l.jsx("h3",{className:"fs-5 fw-bold m-0",children:"Important Issues to Fix Before Production"})]}),l.jsx("span",{className:"badge bg-danger-subtle text-danger",children:"Engineering Action Items"})]}),l.jsx("p",{className:"text-muted fs-8 mb-3",children:"These are the immediate engineering tasks being addressed to ensure rock-solid marketplace integrity:"}),l.jsx("div",{className:"issues-stack",children:cu.issuesToFix.map(t=>l.jsxs("div",{className:"issue-item p-3 mb-2 rounded-3 bg-white border border-light shadow-sm",children:[l.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-1",children:[l.jsxs("strong",{className:"fs-7 text-dark d-flex align-items-center gap-2",children:[l.jsx("span",{className:"badge bg-secondary rounded-pill",children:t.id}),t.title]}),l.jsx("span",{className:`badge ${t.severity==="Critical"?"bg-danger":t.severity==="High"?"bg-warning text-dark":"bg-info text-dark"} fs-9`,children:t.severity})]}),l.jsx("p",{className:"text-muted fs-8 m-0 ps-4",children:t.desc})]},t.id))})]})})]})]})})}function a1(){return l.jsx("section",{id:"roadmap",className:"roadmap-section section-padding section-bg-subtle",children:l.jsxs("div",{className:"container",children:[l.jsxs("div",{className:"google-modules-header text-center",children:[l.jsxs("div",{className:"section-pill-badge mb-2",children:[l.jsx("i",{className:"bi bi-compass-fill text-primary me-2"}),l.jsx("span",{children:"Vision & Execution"})]}),l.jsxs("h2",{className:"section-title-google",children:["Development ",l.jsx("span",{className:"text-gradient-gemini",children:"Roadmap & Challenges"})]}),l.jsx("p",{className:"section-subtitle-google mx-auto",style:{maxWidth:"720px"},children:"Our phased engineering progression, proactive risk mitigations, and verifiable key performance indicators."})]}),l.jsxs("div",{className:"roadmap-timeline-wrap liquid-glass p-4 p-lg-5 rounded-4 mb-5",children:[l.jsxs("div",{className:"text-center mb-4",children:[l.jsx("span",{className:"text-gradient-emerald fw-bold text-uppercase fs-8",children:"Sequential Milestones"}),l.jsx("h3",{className:"fs-4 fw-bold mt-1",children:"6-Phase Engineering Progression"})]}),l.jsx("div",{className:"row g-3",children:$T.map((t,e)=>l.jsx("div",{className:"col-lg-4 col-md-6",children:l.jsx("div",{className:"roadmap-phase-card p-3 rounded-4 bg-white border border-light shadow-sm h-100 d-flex flex-column justify-content-between",children:l.jsxs("div",{children:[l.jsxs("div",{className:"d-flex align-items-center justify-content-between mb-2",children:[l.jsx("span",{className:"phase-pill-badge",children:t.phase}),l.jsx("span",{className:`badge ${t.status.includes("Current")?"bg-success":t.status.includes("Next")?"bg-primary":"bg-secondary"} fs-9`,children:t.status})]}),l.jsx("h5",{className:"fs-6 fw-bold mb-2",children:t.title}),l.jsx("p",{className:"text-muted fs-8 m-0",children:t.desc})]})})},e))})]}),l.jsxs("div",{className:"risks-challenges-wrap mb-5",children:[l.jsxs("div",{className:"text-center mb-4",children:[l.jsx("span",{className:"text-gradient-emerald fw-bold text-uppercase fs-8",children:"Integrity Safeguards"}),l.jsx("h3",{className:"fs-4 fw-bold mt-1",children:"Risks & Challenges We Must Solve"}),l.jsx("p",{className:"text-muted fs-7",children:"Proactively addressing climate accounting and decentralized market vulnerabilities"})]}),l.jsx("div",{className:"row g-4",children:KT.map((t,e)=>l.jsx("div",{className:"col-lg-4 col-md-6",children:l.jsxs("div",{className:"risk-card liquid-glass-subtle p-4 rounded-4 h-100",children:[l.jsx("div",{className:"risk-icon-box text-warning mb-3",children:l.jsx("i",{className:`bi ${t.icon} fs-4`})}),l.jsx("h4",{className:"fs-6 fw-bold mb-2",children:t.title}),l.jsx("p",{className:"text-muted fs-8 m-0",children:t.desc})]})},e))})]}),l.jsxs("div",{className:"success-metrics-card liquid-glass p-4 p-lg-5 rounded-4",children:[l.jsxs("div",{className:"d-flex align-items-center justify-content-between flex-wrap gap-2 mb-4",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-gradient-emerald fw-bold text-uppercase fs-8",children:"Verification Benchmarks"}),l.jsx("h3",{className:"fs-4 fw-bold m-0",children:"What Success Looks Like"})]}),l.jsx("span",{className:"badge bg-success px-3 py-2",children:"Beyond App User Vanity Metrics"})]}),l.jsx("div",{className:"table-responsive",children:l.jsxs("table",{className:"table table-hover align-middle custom-synergy-table",children:[l.jsx("thead",{children:l.jsxs("tr",{children:[l.jsx("th",{scope:"col",style:{width:"32%"},children:"Core Impact Metric"}),l.jsx("th",{scope:"col",style:{width:"68%"},children:"Target Benchmark & Objective"})]})}),l.jsx("tbody",{children:ZT.map((t,e)=>l.jsxs("tr",{children:[l.jsx("td",{children:l.jsxs("strong",{className:"text-dark d-flex align-items-center gap-2",children:[l.jsx("i",{className:"bi bi-graph-up-arrow text-success"}),t.metric]})}),l.jsx("td",{className:"text-muted",children:t.target})]},e))})]})})]})]})})}function o1({onOpenModal:t}){const{collegePitch:e}=nl;return l.jsx("section",{id:"college-pitch",className:"college-pitch-section section-padding",children:l.jsx("div",{className:"container",children:l.jsxs("div",{className:"college-pitch-banner liquid-glass-strong p-4 p-lg-5 rounded-4 border border-2 border-success-subtle position-relative overflow-hidden",children:[l.jsx("div",{className:"liquid-glass-beam"}),l.jsxs("div",{className:"row align-items-center g-4",children:[l.jsxs("div",{className:"col-lg-8",children:[l.jsxs("div",{className:"d-flex align-items-center gap-2 mb-3",children:[l.jsx("span",{className:"badge bg-success-subtle text-success px-3 py-2 fw-bold",children:"College Presentation Spotlight"}),l.jsx("span",{className:"badge bg-primary-subtle text-primary px-3 py-2",children:"Academic & Jury Executive Summary"})]}),l.jsx("h2",{className:"fs-3 fw-bold mb-3 text-dark",children:e.title}),l.jsx("p",{className:"fs-6 text-muted mb-4 leading-relaxed",children:e.summary}),l.jsx("div",{className:"pitch-highlights-grid row g-3 mb-4",children:e.highlights.map((n,i)=>l.jsx("div",{className:"col-md-6",children:l.jsxs("div",{className:"pitch-point-card p-3 rounded-3 bg-white border d-flex align-items-start gap-2 shadow-sm",children:[l.jsx("i",{className:"bi bi-patch-check-fill text-success fs-5 mt-1"}),l.jsx("span",{className:"fs-8 text-dark fw-medium",children:n})]})},i))}),l.jsxs("div",{className:"d-flex align-items-center gap-3 flex-wrap",children:[l.jsxs("button",{type:"button",className:"btn btn-google-primary btn-carbosafe-green",onClick:t,children:[l.jsx("i",{className:"bi bi-display me-2"}),"Request Full College Slide Deck & Demo"]}),l.jsxs("a",{href:"#hero",className:"btn btn-google-outline",children:[l.jsx("i",{className:"bi bi-arrow-up-circle me-2"}),"Back to Top"]})]})]}),l.jsx("div",{className:"col-lg-4 text-center",children:l.jsxs("div",{className:"academic-badge-emblem p-4 rounded-4 liquid-glass",children:[l.jsx("div",{className:"emblem-glyph mb-3 text-gradient-emerald",children:l.jsx("i",{className:"bi bi-mortarboard-fill display-3"})}),l.jsx("h4",{className:"fs-6 fw-bold mb-1",children:"CarboSafe Capstone Pitch"}),l.jsx("p",{className:"fs-8 text-muted m-0",children:"Built to demonstrate scalable climate technology, AI verification, and equitable decentralized finance."}),l.jsxs("div",{className:"mt-3 pt-3 border-top d-flex justify-content-center gap-2",children:[l.jsx("span",{className:"badge bg-light text-dark",children:"AI Vision"}),l.jsx("span",{className:"badge bg-light text-dark",children:"Blockchain"}),l.jsx("span",{className:"badge bg-light text-dark",children:"ESG Offsets"})]})]})})]})]})})})}var eh={};(function t(e,n,i,r){var s=!!(e.Worker&&e.Blob&&e.Promise&&e.OffscreenCanvas&&e.OffscreenCanvasRenderingContext2D&&e.HTMLCanvasElement&&e.HTMLCanvasElement.prototype.transferControlToOffscreen&&e.URL&&e.URL.createObjectURL),a=typeof Path2D=="function"&&typeof DOMMatrix=="function",o=function(){if(!e.OffscreenCanvas)return!1;try{var A=new OffscreenCanvas(1,1),C=A.getContext("2d");C.fillRect(0,0,1,1);var Q=A.transferToImageBitmap();C.createPattern(Q,"no-repeat")}catch{return!1}return!0}();function c(){}function u(A){var C=n.exports.Promise,Q=C!==void 0?C:e.Promise;return typeof Q=="function"?new Q(A):(A(c,c),null)}var h=function(A,C){return{transform:function(Q){if(A)return Q;if(C.has(Q))return C.get(Q);var re=new OffscreenCanvas(Q.width,Q.height),pe=re.getContext("2d");return pe.drawImage(Q,0,0),C.set(Q,re),re},clear:function(){C.clear()}}}(o,new Map),p=function(){var A=Math.floor(16.666666666666668),C,Q,re={},pe=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(C=function(he){var me=Math.random();return re[me]=requestAnimationFrame(function O($){pe===$||pe+A-1<$?(pe=$,delete re[me],he()):re[me]=requestAnimationFrame(O)}),me},Q=function(he){re[he]&&cancelAnimationFrame(re[he])}):(C=function(he){return setTimeout(he,A)},Q=function(he){return clearTimeout(he)}),{frame:C,cancel:Q}}(),d=function(){var A,C,Q={};function re(pe){function he(me,O){pe.postMessage({options:me||{},callback:O})}pe.init=function(O){var $=O.transferControlToOffscreen();pe.postMessage({canvas:$},[$])},pe.fire=function(O,$,le){if(C)return he(O,null),C;var we=Math.random().toString(36).slice(2);return C=u(function(oe){function Ne(Qe){Qe.data.callback===we&&(delete Q[we],pe.removeEventListener("message",Ne),C=null,h.clear(),le(),oe())}pe.addEventListener("message",Ne),he(O,we),Q[we]=Ne.bind(null,{data:{callback:we}})}),C},pe.reset=function(){pe.postMessage({reset:!0});for(var O in Q)Q[O](),delete Q[O]}}return function(){if(A)return A;if(!i&&s){var pe=["var CONFETTI, SIZE = {}, module = {};","("+t.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{A=new Worker(URL.createObjectURL(new Blob([pe])))}catch(he){return typeof console<"u"&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",he),null}re(A)}return A}}(),m={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function v(A,C){return C?C(A):A}function M(A){return A!=null}function g(A,C,Q){return v(A&&M(A[C])?A[C]:m[C],Q)}function f(A){return A<0?0:Math.floor(A)}function x(A,C){return Math.floor(Math.random()*(C-A))+A}function b(A){return parseInt(A,16)}function y(A){return A.map(w)}function w(A){var C=String(A).replace(/[^0-9a-f]/gi,"");return C.length<6&&(C=C[0]+C[0]+C[1]+C[1]+C[2]+C[2]),{r:b(C.substring(0,2)),g:b(C.substring(2,4)),b:b(C.substring(4,6))}}function T(A){var C=g(A,"origin",Object);return C.x=g(C,"x",Number),C.y=g(C,"y",Number),C}function N(A){A.width=document.documentElement.clientWidth,A.height=document.documentElement.clientHeight}function S(A){var C=A.getBoundingClientRect();A.width=C.width,A.height=C.height}function P(A){var C=document.createElement("canvas");return C.style.position="fixed",C.style.top="0px",C.style.left="0px",C.style.pointerEvents="none",C.style.zIndex=A,C}function L(A,C,Q,re,pe,he,me,O,$){A.save(),A.translate(C,Q),A.rotate(he),A.scale(re,pe),A.arc(0,0,1,me,O,$),A.restore()}function I(A){var C=A.angle*(Math.PI/180),Q=A.spread*(Math.PI/180);return{x:A.x,y:A.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:A.startVelocity*.5+Math.random()*A.startVelocity,angle2D:-C+(.5*Q-Math.random()*Q),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:A.color,shape:A.shape,tick:0,totalTicks:A.ticks,decay:A.decay,drift:A.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:A.gravity*3,ovalScalar:.6,scalar:A.scalar,flat:A.flat}}function B(A,C){C.x+=Math.cos(C.angle2D)*C.velocity+C.drift,C.y+=Math.sin(C.angle2D)*C.velocity+C.gravity,C.velocity*=C.decay,C.flat?(C.wobble=0,C.wobbleX=C.x+10*C.scalar,C.wobbleY=C.y+10*C.scalar,C.tiltSin=0,C.tiltCos=0,C.random=1):(C.wobble+=C.wobbleSpeed,C.wobbleX=C.x+10*C.scalar*Math.cos(C.wobble),C.wobbleY=C.y+10*C.scalar*Math.sin(C.wobble),C.tiltAngle+=.1,C.tiltSin=Math.sin(C.tiltAngle),C.tiltCos=Math.cos(C.tiltAngle),C.random=Math.random()+2);var Q=C.tick++/C.totalTicks,re=C.x+C.random*C.tiltCos,pe=C.y+C.random*C.tiltSin,he=C.wobbleX+C.random*C.tiltCos,me=C.wobbleY+C.random*C.tiltSin;if(A.fillStyle="rgba("+C.color.r+", "+C.color.g+", "+C.color.b+", "+(1-Q)+")",A.beginPath(),a&&C.shape.type==="path"&&typeof C.shape.path=="string"&&Array.isArray(C.shape.matrix))A.fill(K(C.shape.path,C.shape.matrix,C.x,C.y,Math.abs(he-re)*.1,Math.abs(me-pe)*.1,Math.PI/10*C.wobble));else if(C.shape.type==="bitmap"){var O=Math.PI/10*C.wobble,$=Math.abs(he-re)*.1,le=Math.abs(me-pe)*.1,we=C.shape.bitmap.width*C.scalar,oe=C.shape.bitmap.height*C.scalar,Ne=new DOMMatrix([Math.cos(O)*$,Math.sin(O)*$,-Math.sin(O)*le,Math.cos(O)*le,C.x,C.y]);Ne.multiplySelf(new DOMMatrix(C.shape.matrix));var Qe=A.createPattern(h.transform(C.shape.bitmap),"no-repeat");Qe.setTransform(Ne),A.globalAlpha=1-Q,A.fillStyle=Qe,A.fillRect(C.x-we/2,C.y-oe/2,we,oe),A.globalAlpha=1}else if(C.shape==="circle")A.ellipse?A.ellipse(C.x,C.y,Math.abs(he-re)*C.ovalScalar,Math.abs(me-pe)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI):L(A,C.x,C.y,Math.abs(he-re)*C.ovalScalar,Math.abs(me-pe)*C.ovalScalar,Math.PI/10*C.wobble,0,2*Math.PI);else if(C.shape==="star")for(var ae=Math.PI/2*3,de=4*C.scalar,De=8*C.scalar,Te=C.x,Ve=C.y,Ze=5,Ye=Math.PI/Ze;Ze--;)Te=C.x+Math.cos(ae)*De,Ve=C.y+Math.sin(ae)*De,A.lineTo(Te,Ve),ae+=Ye,Te=C.x+Math.cos(ae)*de,Ve=C.y+Math.sin(ae)*de,A.lineTo(Te,Ve),ae+=Ye;else A.moveTo(Math.floor(C.x),Math.floor(C.y)),A.lineTo(Math.floor(C.wobbleX),Math.floor(pe)),A.lineTo(Math.floor(he),Math.floor(me)),A.lineTo(Math.floor(re),Math.floor(C.wobbleY));return A.closePath(),A.fill(),C.tick<C.totalTicks}function V(A,C,Q,re,pe){var he=C.slice(),me=A.getContext("2d"),O,$,le=u(function(we){function oe(){O=$=null,me.clearRect(0,0,re.width,re.height),h.clear(),pe(),we()}function Ne(){i&&!(re.width===r.width&&re.height===r.height)&&(re.width=A.width=r.width,re.height=A.height=r.height),!re.width&&!re.height&&(Q(A),re.width=A.width,re.height=A.height),me.clearRect(0,0,re.width,re.height),he=he.filter(function(Qe){return B(me,Qe)}),he.length?O=p.frame(Ne):oe()}O=p.frame(Ne),$=oe});return{addFettis:function(we){return he=he.concat(we),le},canvas:A,promise:le,reset:function(){O&&p.cancel(O),$&&$()}}}function k(A,C){var Q=!A,re=!!g(C||{},"resize"),pe=!1,he=g(C,"disableForReducedMotion",Boolean),me=s&&!!g(C||{},"useWorker"),O=me?d():null,$=Q?N:S,le=A&&O?!!A.__confetti_initialized:!1,we=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,oe;function Ne(ae,de,De){for(var Te=g(ae,"particleCount",f),Ve=g(ae,"angle",Number),Ze=g(ae,"spread",Number),Ye=g(ae,"startVelocity",Number),Ie=g(ae,"decay",Number),$e=g(ae,"gravity",Number),D=g(ae,"drift",Number),st=g(ae,"colors",y),He=g(ae,"ticks",Number),R=g(ae,"shapes"),_=g(ae,"scalar"),z=!!g(ae,"flat"),Y=T(ae),J=Te,ue=[],fe=A.width*Y.x,ee=A.height*Y.y;J--;)ue.push(I({x:fe,y:ee,angle:Ve,spread:Ze,startVelocity:Ye,color:st[J%st.length],shape:R[x(0,R.length)],ticks:He,decay:Ie,gravity:$e,drift:D,scalar:_,flat:z}));return oe?oe.addFettis(ue):(oe=V(A,ue,$,de,De),oe.promise)}function Qe(ae){var de=he||g(ae,"disableForReducedMotion",Boolean),De=g(ae,"zIndex",Number);if(de&&we)return u(function(Ye){Ye()});Q&&oe?A=oe.canvas:Q&&!A&&(A=P(De),document.body.appendChild(A)),re&&!le&&$(A);var Te={width:A.width,height:A.height};O&&!le&&O.init(A),le=!0,O&&(A.__confetti_initialized=!0);function Ve(){if(O){var Ye={getBoundingClientRect:function(){if(!Q)return A.getBoundingClientRect()}};$(Ye),O.postMessage({resize:{width:Ye.width,height:Ye.height}});return}Te.width=Te.height=null}function Ze(){oe=null,re&&(pe=!1,e.removeEventListener("resize",Ve)),Q&&A&&(document.body.contains(A)&&document.body.removeChild(A),A=null,le=!1)}return re&&!pe&&(pe=!0,e.addEventListener("resize",Ve,!1)),O?O.fire(ae,Te,Ze):Ne(ae,Te,Ze)}return Qe.reset=function(){O&&O.reset(),oe&&oe.reset()},Qe}var j;function te(){return j||(j=k(null,{useWorker:!0,resize:!0})),j}function K(A,C,Q,re,pe,he,me){var O=new Path2D(A),$=new Path2D;$.addPath(O,new DOMMatrix(C));var le=new Path2D;return le.addPath($,new DOMMatrix([Math.cos(me)*pe,Math.sin(me)*pe,-Math.sin(me)*he,Math.cos(me)*he,Q,re])),le}function G(A){if(!a)throw new Error("path confetti are not supported in this browser");var C,Q;typeof A=="string"?C=A:(C=A.path,Q=A.matrix);var re=new Path2D(C),pe=document.createElement("canvas"),he=pe.getContext("2d");if(!Q){for(var me=1e3,O=me,$=me,le=0,we=0,oe,Ne,Qe=0;Qe<me;Qe+=2)for(var ae=0;ae<me;ae+=2)he.isPointInPath(re,Qe,ae,"nonzero")&&(O=Math.min(O,Qe),$=Math.min($,ae),le=Math.max(le,Qe),we=Math.max(we,ae));oe=le-O,Ne=we-$;var de=10,De=Math.min(de/oe,de/Ne);Q=[De,0,0,De,-Math.round(oe/2+O)*De,-Math.round(Ne/2+$)*De]}return{type:"path",path:C,matrix:Q}}function H(A){var C,Q=1,re="#000000",pe='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof A=="string"?C=A:(C=A.text,Q="scalar"in A?A.scalar:Q,pe="fontFamily"in A?A.fontFamily:pe,re="color"in A?A.color:re);var he=10*Q,me=""+he+"px "+pe,O=new OffscreenCanvas(he,he),$=O.getContext("2d");$.font=me;var le=$.measureText(C),we=Math.ceil(le.actualBoundingBoxRight+le.actualBoundingBoxLeft),oe=Math.ceil(le.actualBoundingBoxAscent+le.actualBoundingBoxDescent),Ne=2,Qe=le.actualBoundingBoxLeft+Ne,ae=le.actualBoundingBoxAscent+Ne;we+=Ne+Ne,oe+=Ne+Ne,O=new OffscreenCanvas(we,oe),$=O.getContext("2d"),$.font=me,$.fillStyle=re,$.fillText(C,Qe,ae);var de=1/Q;return{type:"bitmap",bitmap:O.transferToImageBitmap(),matrix:[de,0,0,de,-we*de/2,-oe*de/2]}}n.exports=function(){return te().apply(this,arguments)},n.exports.reset=function(){te().reset()},n.exports.create=k,n.exports.shapeFromPath=G,n.exports.shapeFromText=H})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),eh,!1);const l1=eh.exports;eh.exports.create;function c1({isOpen:t,onClose:e}){const[n,i]=We.useState("demo"),[r,s]=We.useState({name:"",email:"",organization:"",role:"industry",offsetTarget:"1000",message:""}),[a,o]=We.useState(!1),[c,u]=We.useState(!1);if(!t)return null;const h=d=>{d.preventDefault(),u(!0),setTimeout(()=>{u(!1),o(!0);try{l1({particleCount:80,spread:80,origin:{y:.5}})}catch{}},600)},p=()=>{o(!1),e()};return l.jsx("div",{className:"modal-overlay",onClick:p,children:l.jsxs("div",{className:"modal-dialog-box liquid-glass-strong",onClick:d=>d.stopPropagation(),children:[l.jsxs("div",{className:"modal-header-google",children:[l.jsxs("div",{className:"modal-title-wrap",children:[l.jsx("div",{className:"modal-header-icon-badge bg-success-subtle text-success",children:l.jsx("i",{className:"bi bi-tree-fill"})}),l.jsxs("div",{children:[l.jsx("h4",{className:"modal-title-main",children:"CarboSafe Platform Access"}),l.jsx("p",{className:"modal-subtitle-text",children:"Connect with our ClimateTech engineering & carbon markets team"})]})]}),l.jsx("button",{type:"button",className:"modal-close-btn",onClick:p,title:"Close dialog","aria-label":"Close dialog",children:l.jsx("i",{className:"bi bi-x-lg"})})]}),a?l.jsx("div",{className:"modal-body-google",children:l.jsxs("div",{className:"text-center py-4",children:[l.jsx("div",{className:"modal-success-icon-wrap mb-3 text-success",children:l.jsx("i",{className:"bi bi-check-circle-fill display-4"})}),l.jsx("h4",{className:"fs-5 fw-bold text-main mb-1",children:"Access Request Received!"}),l.jsxs("p",{className:"text-secondary fs-7 mb-4 px-2",children:["Thank you, ",l.jsx("strong",{children:r.name}),". Our climate verification and enterprise carbon coordinator will reach out to ",l.jsx("strong",{children:r.email})," shortly with your personalized sandbox credentials and satellite telemetry dossier."]}),l.jsxs("button",{type:"button",className:"btn btn-google-primary btn-carbosafe-green mx-auto",onClick:p,children:[l.jsx("i",{className:"bi bi-check2 me-1"}),l.jsx("span",{children:"Done"})]})]})}):l.jsxs("form",{onSubmit:h,className:"modal-form-layout",children:[l.jsxs("div",{className:"modal-body-google",children:[l.jsxs("div",{className:"modal-role-tabs d-flex gap-2 mb-3",children:[l.jsxs("button",{type:"button",className:`btn btn-sm ${n==="demo"?"btn-success text-white":"btn-outline-secondary"}`,onClick:()=>i("demo"),children:[l.jsx("i",{className:"bi bi-display me-1"})," Book Platform Demo"]}),l.jsxs("button",{type:"button",className:`btn btn-sm ${n==="offset"?"btn-success text-white":"btn-outline-secondary"}`,onClick:()=>i("offset"),children:[l.jsx("i",{className:"bi bi-building me-1"})," Corporate Offsets"]}),l.jsxs("button",{type:"button",className:`btn btn-sm ${n==="farmer"?"btn-success text-white":"btn-outline-secondary"}`,onClick:()=>i("farmer"),children:[l.jsx("i",{className:"bi bi-person-heart me-1"})," Farmer Registration"]})]}),l.jsxs("div",{className:"row g-3",children:[l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label fs-8 fw-semibold text-secondary",children:"Your Full Name *"}),l.jsx("input",{type:"text",required:!0,className:"form-control form-control-sm",placeholder:"e.g. Rajesh Sharma",value:r.name,onChange:d=>s({...r,name:d.target.value})})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label fs-8 fw-semibold text-secondary",children:"Work / Contact Email *"}),l.jsx("input",{type:"email",required:!0,className:"form-control form-control-sm",placeholder:"name@company.com",value:r.email,onChange:d=>s({...r,email:d.target.value})})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label fs-8 fw-semibold text-secondary",children:"Company / Organization / Farm Cooperative"}),l.jsx("input",{type:"text",className:"form-control form-control-sm",placeholder:"e.g. CloudTech Data Systems",value:r.organization,onChange:d=>s({...r,organization:d.target.value})})]}),l.jsxs("div",{className:"col-md-6",children:[l.jsx("label",{className:"form-label fs-8 fw-semibold text-secondary",children:"Est. Annual CO₂e Offset Goal"}),l.jsxs("select",{className:"form-select form-select-sm",value:r.offsetTarget,onChange:d=>s({...r,offsetTarget:d.target.value}),children:[l.jsx("option",{value:"100",children:"100 - 500 Tonnes CO₂e"}),l.jsx("option",{value:"1000",children:"500 - 2,500 Tonnes CO₂e"}),l.jsx("option",{value:"5000",children:"2,500 - 10,000 Tonnes CO₂e"}),l.jsx("option",{value:"10000",children:"10,000+ Tonnes CO₂e (Enterprise)"}),l.jsx("option",{value:"farmer",children:"I am a Farmer / Landowner"})]})]}),l.jsxs("div",{className:"col-12",children:[l.jsx("label",{className:"form-label fs-8 fw-semibold text-secondary",children:"Additional Notes / Inquiry"}),l.jsx("textarea",{rows:"3",className:"form-control form-control-sm",placeholder:"Tell us about your IT energy profile, agroforestry project, or verification timeline...",value:r.message,onChange:d=>s({...r,message:d.target.value})})]})]}),l.jsxs("div",{className:"mt-3 p-2 bg-light rounded text-muted fs-9 d-flex align-items-center gap-2",children:[l.jsx("i",{className:"bi bi-shield-lock-fill text-success"}),l.jsx("span",{children:"Your details are protected under strict climate registry confidentiality guidelines."})]})]}),l.jsxs("div",{className:"modal-footer-google border-top p-3 d-flex justify-content-end gap-2",children:[l.jsx("button",{type:"button",className:"btn btn-sm btn-google-outline",onClick:p,children:"Cancel"}),l.jsx("button",{type:"submit",disabled:c,className:"btn btn-sm btn-google-primary btn-carbosafe-green",children:c?l.jsxs("span",{children:[l.jsx("i",{className:"bi bi-arrow-repeat spin me-1"})," Submitting..."]}):l.jsxs("span",{children:[l.jsx("i",{className:"bi bi-send me-1"})," Submit Request"]})})]})]})]})})}function u1({onOpenModal:t}){const e=new Date().getFullYear(),n=i=>{const r=document.getElementById(i);if(r)if(window.__lenis)window.__lenis.scrollTo(r,{offset:-74,duration:1.15});else{const o=r.getBoundingClientRect().top+window.pageYOffset-74;window.scrollTo({top:o,behavior:"smooth"})}};return l.jsx("footer",{id:"footer",className:"carbosafe-footer bg-white border-top",children:l.jsxs("div",{className:"container py-5",children:[l.jsxs("div",{className:"row g-4 justify-content-between",children:[l.jsxs("div",{className:"col-lg-4 col-md-6",children:[l.jsxs("div",{className:"footer-brand-wrap mb-3",children:[l.jsxs("div",{className:"d-flex align-items-center gap-2 mb-2",children:[l.jsx("div",{className:"brand-leaf-icon","aria-hidden":"true",children:l.jsxs("svg",{width:"28",height:"28",viewBox:"0 0 32 32",fill:"none",children:[l.jsx("circle",{cx:"16",cy:"16",r:"15",fill:"#10b981"}),l.jsx("path",{d:"M16 6C11 10 9 16 11 22C13 18 17 15 22 14C23 19 20 24 15 26C21 26 26 21 26 15C26 9 21 6 16 6Z",fill:"#ffffff"}),l.jsx("path",{d:"M12 21C14 17 18 15 23 14",stroke:"#059669",strokeWidth:"1.5",strokeLinecap:"round"})]})}),l.jsxs("span",{className:"fs-5 fw-bold text-dark",children:["Carbo",l.jsx("span",{className:"text-success",children:"Safe"})]})]}),l.jsx("p",{className:"fs-8 text-muted mb-3",children:nl.oneLinePitch}),l.jsxs("div",{className:"mission-quote-box p-3 rounded-3 bg-light fs-8 text-dark border-start border-3 border-success",children:[l.jsx("strong",{children:"Our Mission:"})," ",nl.mission]})]}),l.jsx("div",{className:"footer-tag-pills d-flex flex-wrap gap-1 mt-3",children:nl.badgePills.map((i,r)=>l.jsx("span",{className:"badge bg-light text-muted border fs-9",children:i},r))})]}),l.jsxs("div",{className:"col-lg-2 col-md-3 col-6",children:[l.jsx("h5",{className:"fs-7 fw-bold text-dark mb-3",children:"Platform"}),l.jsxs("ul",{className:"list-unstyled footer-nav-list fs-8",children:[l.jsx("li",{className:"mb-2",children:l.jsx("a",{href:"#problems",onClick:i=>{i.preventDefault(),n("problems")},children:"Problems We Solve"})}),l.jsx("li",{className:"mb-2",children:l.jsx("a",{href:"#solution",onClick:i=>{i.preventDefault(),n("solution")},children:"How It Works"})}),l.jsx("li",{className:"mb-2",children:l.jsx("a",{href:"#stakeholders",onClick:i=>{i.preventDefault(),n("stakeholders")},children:"Who Uses CarboSafe"})}),l.jsx("li",{className:"mb-2",children:l.jsx("a",{href:"#marketplace",onClick:i=>{i.preventDefault(),n("marketplace")},children:"Carbon Marketplace"})}),l.jsx("li",{className:"mb-2",children:l.jsx("a",{href:"#tech",onClick:i=>{i.preventDefault(),n("tech")},children:"Technology Architecture"})})]})]}),l.jsxs("div",{className:"col-lg-2 col-md-3 col-6",children:[l.jsx("h5",{className:"fs-7 fw-bold text-dark mb-3",children:"Impact & Models"}),l.jsxs("ul",{className:"list-unstyled footer-nav-list fs-8",children:[l.jsx("li",{className:"mb-2",children:l.jsx("a",{href:"#it-carbon",onClick:i=>{i.preventDefault(),n("it-carbon")},children:"IT Industry Footprint"})}),l.jsx("li",{className:"mb-2",children:l.jsx("a",{href:"#revenue",onClick:i=>{i.preventDefault(),n("revenue")},children:"Farmer-First Payouts"})}),l.jsx("li",{className:"mb-2",children:l.jsx("a",{href:"#mvp-status",onClick:i=>{i.preventDefault(),n("mvp-status")},children:"Engineering Status"})}),l.jsx("li",{className:"mb-2",children:l.jsx("a",{href:"#roadmap",onClick:i=>{i.preventDefault(),n("roadmap")},children:"Development Roadmap"})}),l.jsx("li",{className:"mb-2",children:l.jsx("a",{href:"#college-pitch",onClick:i=>{i.preventDefault(),n("college-pitch")},children:"College Capstone Pitch"})})]})]}),l.jsxs("div",{className:"col-lg-3 col-md-6",children:[l.jsx("h5",{className:"fs-7 fw-bold text-dark mb-3",children:"Join the Movement"}),l.jsx("p",{className:"fs-8 text-muted mb-3",children:"Ready to pilot verifiable carbon removal or monetize your sustainable agroforestry acreage?"}),l.jsxs("button",{type:"button",className:"btn btn-sm btn-google-primary btn-carbosafe-green w-100 mb-3",onClick:t,children:[l.jsx("i",{className:"bi bi-calendar2-check me-2"}),"Schedule Live Demonstration"]}),l.jsxs("div",{className:"text-muted fs-9 d-flex align-items-center gap-2",children:[l.jsx("i",{className:"bi bi-shield-check text-success"}),l.jsx("span",{children:"70–90% Direct Farmer Compensation Model"})]})]})]}),l.jsxs("div",{className:"footer-bottom mt-5 pt-4 border-top d-flex align-items-center justify-content-between flex-wrap gap-2 text-muted fs-8",children:[l.jsxs("div",{children:["© ",e," CarboSafe Platform. All rights reserved. Built with AI & Blockchain for high-integrity ClimateTech."]}),l.jsxs("div",{className:"d-flex align-items-center gap-3",children:[l.jsx("span",{children:"GHG Protocol Compliant"}),l.jsx("span",{children:"•"}),l.jsx("span",{children:"IPCC Guidelines"}),l.jsx("span",{children:"•"}),l.jsx("span",{children:"Verra / Gold Standard Mapped"})]})]})]})})}function d1(){const[t,e]=We.useState(!1),[n,i]=We.useState(!1);We.useEffect(()=>{const s=new xS({duration:1.15,easing:u=>Math.min(1,1.001-Math.pow(2,-10*u)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,touchMultiplier:1.2,infinite:!1});window.__lenis=s;let a;function o(u){s.raf(u),a=requestAnimationFrame(o)}a=requestAnimationFrame(o);const c=()=>{const u=document.querySelector(".hero-line-intelligence")||document.querySelector(".hero-left-mid-block"),h=document.querySelector(".stats-strip-white")||document.getElementById("counts");if(u&&h){const p=u.getBoundingClientRect(),d=h.getBoundingClientRect();i(m=>m?d.top<=p.bottom+45||p.bottom<=85:d.top<=p.bottom+25||p.bottom<=72)}else{const p=window.innerHeight*.5+30;i(window.scrollY>=p)}};return s.on("scroll",c),window.addEventListener("resize",c,{passive:!0}),c(),()=>{cancelAnimationFrame(a),s.destroy(),window.__lenis=null,window.removeEventListener("resize",c)}},[]),We.useEffect(()=>{window.__lenis&&(t?window.__lenis.stop():window.__lenis.start())},[t]);const r=()=>{const s=document.getElementById("marketplace");s&&window.__lenis?window.__lenis.scrollTo(s,{offset:-74,duration:1.15}):s&&s.scrollIntoView({behavior:"smooth"})};return l.jsxs("div",{className:"carbosafe-app-root",children:[l.jsx(_S,{scrolled:n,onOpenModal:()=>e(!0)}),l.jsxs("main",{id:"main",children:[l.jsx(HT,{scrolled:n,onOpenModal:()=>e(!0),onExploreProjects:r}),l.jsx(jT,{}),l.jsx(QT,{}),l.jsx(JT,{onOpenModal:()=>e(!0)}),l.jsx(e1,{onOpenModal:()=>e(!0)}),l.jsx(t1,{onOpenModal:()=>e(!0)}),l.jsx(n1,{}),l.jsx(i1,{onOpenModal:()=>e(!0)}),l.jsx(r1,{onOpenModal:()=>e(!0)}),l.jsx(s1,{}),l.jsx(a1,{}),l.jsx(o1,{onOpenModal:()=>e(!0)})]}),l.jsx(u1,{onOpenModal:()=>e(!0)}),l.jsx(c1,{isOpen:t,onClose:()=>e(!1)})]})}uu.createRoot(document.getElementById("root")).render(l.jsx(Q0.StrictMode,{children:l.jsx(d1,{})}));
