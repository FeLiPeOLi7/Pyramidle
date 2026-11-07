var x2=Object.defineProperty;var b2=(e,r,i)=>r in e?x2(e,r,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[r]=i;var Qh=(e,r,i)=>b2(e,typeof r!="symbol"?r+"":r,i);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();function S2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var mc={exports:{}},Eo={},gc={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zh;function k2(){if(Zh)return qe;Zh=1;var e=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function $(O){return O===null||typeof O!="object"?null:(O=w&&O[w]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function N(O,F,ne){this.props=O,this.context=F,this.refs=C,this.updater=ne||S}N.prototype.isReactComponent={},N.prototype.setState=function(O,F){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,F,"setState")},N.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function k(){}k.prototype=N.prototype;function T(O,F,ne){this.props=O,this.context=F,this.refs=C,this.updater=ne||S}var A=T.prototype=new k;A.constructor=T,b(A,N.prototype),A.isPureReactComponent=!0;var D=Array.isArray,B=Object.prototype.hasOwnProperty,P={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function I(O,F,ne){var Q,we={},Se=null,Te=null;if(F!=null)for(Q in F.ref!==void 0&&(Te=F.ref),F.key!==void 0&&(Se=""+F.key),F)B.call(F,Q)&&!V.hasOwnProperty(Q)&&(we[Q]=F[Q]);var ze=arguments.length-2;if(ze===1)we.children=ne;else if(1<ze){for(var Pe=Array(ze),gt=0;gt<ze;gt++)Pe[gt]=arguments[gt+2];we.children=Pe}if(O&&O.defaultProps)for(Q in ze=O.defaultProps,ze)we[Q]===void 0&&(we[Q]=ze[Q]);return{$$typeof:e,type:O,key:Se,ref:Te,props:we,_owner:P.current}}function X(O,F){return{$$typeof:e,type:O.type,key:F,ref:O.ref,props:O.props,_owner:O._owner}}function te(O){return typeof O=="object"&&O!==null&&O.$$typeof===e}function me(O){var F={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ne){return F[ne]})}var de=/\/+/g;function pe(O,F){return typeof O=="object"&&O!==null&&O.key!=null?me(""+O.key):F.toString(36)}function G(O,F,ne,Q,we){var Se=typeof O;(Se==="undefined"||Se==="boolean")&&(O=null);var Te=!1;if(O===null)Te=!0;else switch(Se){case"string":case"number":Te=!0;break;case"object":switch(O.$$typeof){case e:case r:Te=!0}}if(Te)return Te=O,we=we(Te),O=Q===""?"."+pe(Te,0):Q,D(we)?(ne="",O!=null&&(ne=O.replace(de,"$&/")+"/"),G(we,F,ne,"",function(gt){return gt})):we!=null&&(te(we)&&(we=X(we,ne+(!we.key||Te&&Te.key===we.key?"":(""+we.key).replace(de,"$&/")+"/")+O)),F.push(we)),1;if(Te=0,Q=Q===""?".":Q+":",D(O))for(var ze=0;ze<O.length;ze++){Se=O[ze];var Pe=Q+pe(Se,ze);Te+=G(Se,F,ne,Pe,we)}else if(Pe=$(O),typeof Pe=="function")for(O=Pe.call(O),ze=0;!(Se=O.next()).done;)Se=Se.value,Pe=Q+pe(Se,ze++),Te+=G(Se,F,ne,Pe,we);else if(Se==="object")throw F=String(O),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return Te}function he(O,F,ne){if(O==null)return O;var Q=[],we=0;return G(O,Q,"","",function(Se){return F.call(ne,Se,we++)}),Q}function ye(O){if(O._status===-1){var F=O._result;F=F(),F.then(function(ne){(O._status===0||O._status===-1)&&(O._status=1,O._result=ne)},function(ne){(O._status===0||O._status===-1)&&(O._status=2,O._result=ne)}),O._status===-1&&(O._status=0,O._result=F)}if(O._status===1)return O._result.default;throw O._result}var ge={current:null},ee={transition:null},re={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:ee,ReactCurrentOwner:P};function ue(){throw Error("act(...) is not supported in production builds of React.")}return qe.Children={map:he,forEach:function(O,F,ne){he(O,function(){F.apply(this,arguments)},ne)},count:function(O){var F=0;return he(O,function(){F++}),F},toArray:function(O){return he(O,function(F){return F})||[]},only:function(O){if(!te(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},qe.Component=N,qe.Fragment=i,qe.Profiler=o,qe.PureComponent=T,qe.StrictMode=s,qe.Suspense=f,qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,qe.act=ue,qe.cloneElement=function(O,F,ne){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Q=b({},O.props),we=O.key,Se=O.ref,Te=O._owner;if(F!=null){if(F.ref!==void 0&&(Se=F.ref,Te=P.current),F.key!==void 0&&(we=""+F.key),O.type&&O.type.defaultProps)var ze=O.type.defaultProps;for(Pe in F)B.call(F,Pe)&&!V.hasOwnProperty(Pe)&&(Q[Pe]=F[Pe]===void 0&&ze!==void 0?ze[Pe]:F[Pe])}var Pe=arguments.length-2;if(Pe===1)Q.children=ne;else if(1<Pe){ze=Array(Pe);for(var gt=0;gt<Pe;gt++)ze[gt]=arguments[gt+2];Q.children=ze}return{$$typeof:e,type:O.type,key:we,ref:Se,props:Q,_owner:Te}},qe.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},qe.createElement=I,qe.createFactory=function(O){var F=I.bind(null,O);return F.type=O,F},qe.createRef=function(){return{current:null}},qe.forwardRef=function(O){return{$$typeof:c,render:O}},qe.isValidElement=te,qe.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:ye}},qe.memo=function(O,F){return{$$typeof:m,type:O,compare:F===void 0?null:F}},qe.startTransition=function(O){var F=ee.transition;ee.transition={};try{O()}finally{ee.transition=F}},qe.unstable_act=ue,qe.useCallback=function(O,F){return ge.current.useCallback(O,F)},qe.useContext=function(O){return ge.current.useContext(O)},qe.useDebugValue=function(){},qe.useDeferredValue=function(O){return ge.current.useDeferredValue(O)},qe.useEffect=function(O,F){return ge.current.useEffect(O,F)},qe.useId=function(){return ge.current.useId()},qe.useImperativeHandle=function(O,F,ne){return ge.current.useImperativeHandle(O,F,ne)},qe.useInsertionEffect=function(O,F){return ge.current.useInsertionEffect(O,F)},qe.useLayoutEffect=function(O,F){return ge.current.useLayoutEffect(O,F)},qe.useMemo=function(O,F){return ge.current.useMemo(O,F)},qe.useReducer=function(O,F,ne){return ge.current.useReducer(O,F,ne)},qe.useRef=function(O){return ge.current.useRef(O)},qe.useState=function(O){return ge.current.useState(O)},qe.useSyncExternalStore=function(O,F,ne){return ge.current.useSyncExternalStore(O,F,ne)},qe.useTransition=function(){return ge.current.useTransition()},qe.version="18.3.1",qe}var Yh;function Up(){return Yh||(Yh=1,gc.exports=k2()),gc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xh;function E2(){if(Xh)return Eo;Xh=1;var e=Up(),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(c,f,m){var y,w={},$=null,S=null;m!==void 0&&($=""+m),f.key!==void 0&&($=""+f.key),f.ref!==void 0&&(S=f.ref);for(y in f)s.call(f,y)&&!u.hasOwnProperty(y)&&(w[y]=f[y]);if(c&&c.defaultProps)for(y in f=c.defaultProps,f)w[y]===void 0&&(w[y]=f[y]);return{$$typeof:r,type:c,key:$,ref:S,props:w,_owner:o.current}}return Eo.Fragment=i,Eo.jsx=d,Eo.jsxs=d,Eo}var Jh;function T2(){return Jh||(Jh=1,mc.exports=E2()),mc.exports}var U=T2(),tt=Up();const C2=S2(tt);var fl={},yc={exports:{}},ir={},vc={exports:{}},wc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var em;function I2(){return em||(em=1,(function(e){function r(ee,re){var ue=ee.length;ee.push(re);e:for(;0<ue;){var O=ue-1>>>1,F=ee[O];if(0<o(F,re))ee[O]=re,ee[ue]=F,ue=O;else break e}}function i(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var re=ee[0],ue=ee.pop();if(ue!==re){ee[0]=ue;e:for(var O=0,F=ee.length,ne=F>>>1;O<ne;){var Q=2*(O+1)-1,we=ee[Q],Se=Q+1,Te=ee[Se];if(0>o(we,ue))Se<F&&0>o(Te,we)?(ee[O]=Te,ee[Se]=ue,O=Se):(ee[O]=we,ee[Q]=ue,O=Q);else if(Se<F&&0>o(Te,ue))ee[O]=Te,ee[Se]=ue,O=Se;else break e}}return re}function o(ee,re){var ue=ee.sortIndex-re.sortIndex;return ue!==0?ue:ee.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var d=Date,c=d.now();e.unstable_now=function(){return d.now()-c}}var f=[],m=[],y=1,w=null,$=3,S=!1,b=!1,C=!1,N=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,T=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(ee){for(var re=i(m);re!==null;){if(re.callback===null)s(m);else if(re.startTime<=ee)s(m),re.sortIndex=re.expirationTime,r(f,re);else break;re=i(m)}}function D(ee){if(C=!1,A(ee),!b)if(i(f)!==null)b=!0,ye(B);else{var re=i(m);re!==null&&ge(D,re.startTime-ee)}}function B(ee,re){b=!1,C&&(C=!1,k(I),I=-1),S=!0;var ue=$;try{for(A(re),w=i(f);w!==null&&(!(w.expirationTime>re)||ee&&!me());){var O=w.callback;if(typeof O=="function"){w.callback=null,$=w.priorityLevel;var F=O(w.expirationTime<=re);re=e.unstable_now(),typeof F=="function"?w.callback=F:w===i(f)&&s(f),A(re)}else s(f);w=i(f)}if(w!==null)var ne=!0;else{var Q=i(m);Q!==null&&ge(D,Q.startTime-re),ne=!1}return ne}finally{w=null,$=ue,S=!1}}var P=!1,V=null,I=-1,X=5,te=-1;function me(){return!(e.unstable_now()-te<X)}function de(){if(V!==null){var ee=e.unstable_now();te=ee;var re=!0;try{re=V(!0,ee)}finally{re?pe():(P=!1,V=null)}}else P=!1}var pe;if(typeof T=="function")pe=function(){T(de)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,he=G.port2;G.port1.onmessage=de,pe=function(){he.postMessage(null)}}else pe=function(){N(de,0)};function ye(ee){V=ee,P||(P=!0,pe())}function ge(ee,re){I=N(function(){ee(e.unstable_now())},re)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(ee){ee.callback=null},e.unstable_continueExecution=function(){b||S||(b=!0,ye(B))},e.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<ee?Math.floor(1e3/ee):5},e.unstable_getCurrentPriorityLevel=function(){return $},e.unstable_getFirstCallbackNode=function(){return i(f)},e.unstable_next=function(ee){switch($){case 1:case 2:case 3:var re=3;break;default:re=$}var ue=$;$=re;try{return ee()}finally{$=ue}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(ee,re){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var ue=$;$=ee;try{return re()}finally{$=ue}},e.unstable_scheduleCallback=function(ee,re,ue){var O=e.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?O+ue:O):ue=O,ee){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=ue+F,ee={id:y++,callback:re,priorityLevel:ee,startTime:ue,expirationTime:F,sortIndex:-1},ue>O?(ee.sortIndex=ue,r(m,ee),i(f)===null&&ee===i(m)&&(C?(k(I),I=-1):C=!0,ge(D,ue-O))):(ee.sortIndex=F,r(f,ee),b||S||(b=!0,ye(B))),ee},e.unstable_shouldYield=me,e.unstable_wrapCallback=function(ee){var re=$;return function(){var ue=$;$=re;try{return ee.apply(this,arguments)}finally{$=ue}}}})(wc)),wc}var tm;function z2(){return tm||(tm=1,vc.exports=I2()),vc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function N2(){if(rm)return ir;rm=1;var e=Up(),r=z2();function i(t){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(t,n){d(t,n),d(t+"Capture",n)}function d(t,n){for(o[t]=n,t=0;t<n.length;t++)s.add(n[t])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function $(t){return f.call(w,t)?!0:f.call(y,t)?!1:m.test(t)?w[t]=!0:(y[t]=!0,!1)}function S(t,n,a,l){if(a!==null&&a.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function b(t,n,a,l){if(n===null||typeof n>"u"||S(t,n,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function C(t,n,a,l,h,v,E){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=t,this.type=n,this.sanitizeURL=v,this.removeEmptyString=E}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){N[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var n=t[0];N[n]=new C(n,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){N[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){N[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){N[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){N[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){N[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){N[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){N[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var k=/[\-:]([a-z])/g;function T(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var n=t.replace(k,T);N[n]=new C(n,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var n=t.replace(k,T);N[n]=new C(n,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var n=t.replace(k,T);N[n]=new C(n,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){N[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),N.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){N[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function A(t,n,a,l){var h=N.hasOwnProperty(n)?N[n]:null;(h!==null?h.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(b(n,a,h,l)&&(a=null),l||h===null?$(n)&&(a===null?t.removeAttribute(n):t.setAttribute(n,""+a)):h.mustUseProperty?t[h.propertyName]=a===null?h.type===3?!1:"":a:(n=h.attributeName,l=h.attributeNamespace,a===null?t.removeAttribute(n):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,l?t.setAttributeNS(l,n,a):t.setAttribute(n,a))))}var D=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),P=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),X=Symbol.for("react.profiler"),te=Symbol.for("react.provider"),me=Symbol.for("react.context"),de=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),he=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),ee=Symbol.iterator;function re(t){return t===null||typeof t!="object"?null:(t=ee&&t[ee]||t["@@iterator"],typeof t=="function"?t:null)}var ue=Object.assign,O;function F(t){if(O===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);O=n&&n[1]||""}return`
`+O+t}var ne=!1;function Q(t,n){if(!t||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(Z){var l=Z}Reflect.construct(t,[],n)}else{try{n.call()}catch(Z){l=Z}t.call(n.prototype)}else{try{throw Error()}catch(Z){l=Z}t()}}catch(Z){if(Z&&l&&typeof Z.stack=="string"){for(var h=Z.stack.split(`
`),v=l.stack.split(`
`),E=h.length-1,M=v.length-1;1<=E&&0<=M&&h[E]!==v[M];)M--;for(;1<=E&&0<=M;E--,M--)if(h[E]!==v[M]){if(E!==1||M!==1)do if(E--,M--,0>M||h[E]!==v[M]){var L=`
`+h[E].replace(" at new "," at ");return t.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",t.displayName)),L}while(1<=E&&0<=M);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?F(t):""}function we(t){switch(t.tag){case 5:return F(t.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return t=Q(t.type,!1),t;case 11:return t=Q(t.type.render,!1),t;case 1:return t=Q(t.type,!0),t;default:return""}}function Se(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case P:return"Portal";case X:return"Profiler";case I:return"StrictMode";case pe:return"Suspense";case G:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case me:return(t.displayName||"Context")+".Consumer";case te:return(t._context.displayName||"Context")+".Provider";case de:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case he:return n=t.displayName||null,n!==null?n:Se(t.type)||"Memo";case ye:n=t._payload,t=t._init;try{return Se(t(n))}catch{}}return null}function Te(t){var n=t.type;switch(t.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=n.render,t=t.displayName||t.name||"",n.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(n);case 8:return n===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function ze(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Pe(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function gt(t){var n=Pe(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),l=""+t[n];if(!t.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,v=a.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return h.call(this)},set:function(E){l=""+E,v.call(this,E)}}),Object.defineProperty(t,n,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Gt(t){t._valueTracker||(t._valueTracker=gt(t))}function Ut(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return t&&(l=Pe(t)?t.checked?"true":"false":t.value),t=l,t!==a?(n.setValue(t),!0):!1}function pt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ve(t,n){var a=n.checked;return ue({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function st(t,n){var a=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;a=ze(n.value!=null?n.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function rt(t,n){n=n.checked,n!=null&&A(t,"checked",n,!1)}function St(t,n){rt(t,n);var a=ze(n.value),l=n.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}n.hasOwnProperty("value")?Ue(t,n.type,a):n.hasOwnProperty("defaultValue")&&Ue(t,n.type,ze(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(t.defaultChecked=!!n.defaultChecked)}function De(t,n,a){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+t._wrapperState.initialValue,a||n===t.value||(t.value=n),t.defaultValue=n}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Ue(t,n,a){(n!=="number"||pt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var ot=Array.isArray;function ct(t,n,a,l){if(t=t.options,n){n={};for(var h=0;h<a.length;h++)n["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=n.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&l&&(t[a].defaultSelected=!0)}else{for(a=""+ze(a),n=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,l&&(t[h].defaultSelected=!0);return}n!==null||t[h].disabled||(n=t[h])}n!==null&&(n.selected=!0)}}function It(t,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return ue({},n,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function sr(t,n){var a=n.value;if(a==null){if(a=n.children,n=n.defaultValue,a!=null){if(n!=null)throw Error(i(92));if(ot(a)){if(1<a.length)throw Error(i(93));a=a[0]}n=a}n==null&&(n=""),a=n}t._wrapperState={initialValue:ze(a)}}function Cn(t,n){var a=ze(n.value),l=ze(n.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),n.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function on(t){var n=t.textContent;n===t._wrapperState.initialValue&&n!==""&&n!==null&&(t.value=n)}function or(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mi(t,n){return t==null||t==="http://www.w3.org/1999/xhtml"?or(n):t==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Cr,gi=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,a,l,h){MSApp.execUnsafeLocalFunction(function(){return t(n,a,l,h)})}:t})(function(t,n){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=n;else{for(Cr=Cr||document.createElement("div"),Cr.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Cr.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;n.firstChild;)t.appendChild(n.firstChild)}});function yi(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var vr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jl=["Webkit","ms","Moz","O"];Object.keys(vr).forEach(function(t){jl.forEach(function(n){n=n+t.charAt(0).toUpperCase()+t.substring(1),vr[n]=vr[t]})});function ls(t,n,a){return n==null||typeof n=="boolean"||n===""?"":a||typeof n!="number"||n===0||vr.hasOwnProperty(t)&&vr[t]?(""+n).trim():n+"px"}function ds(t,n){t=t.style;for(var a in n)if(n.hasOwnProperty(a)){var l=a.indexOf("--")===0,h=ls(a,n[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,h):t[a]=h}}var cs=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vi(t,n){if(n){if(cs[t]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,t));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function ps(t,n){if(t.indexOf("-")===-1)return typeof n.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fs=null;function hs(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ms=null,In=null,zn=null;function gs(t){if(t=Ai(t)){if(typeof ms!="function")throw Error(i(280));var n=t.stateNode;n&&(n=Wa(n),ms(t.stateNode,t.type,n))}}function ys(t){In?zn?zn.push(t):zn=[t]:In=t}function qo(){if(In){var t=In,n=zn;if(zn=In=null,gs(t),n)for(t=0;t<n.length;t++)gs(n[t])}}function vs(t,n){return t(n)}function ws(){}var ia=!1;function ft(t,n,a){if(ia)return t(n,a);ia=!0;try{return vs(t,n,a)}finally{ia=!1,(In!==null||zn!==null)&&(ws(),qo())}}function Nn(t,n){var a=t.stateNode;if(a===null)return null;var l=Wa(a);if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(i(231,n,typeof a));return a}var aa=!1;if(c)try{var On={};Object.defineProperty(On,"passive",{get:function(){aa=!0}}),window.addEventListener("test",On,On),window.removeEventListener("test",On,On)}catch{aa=!1}function Ho(t,n,a,l,h,v,E,M,L){var Z=Array.prototype.slice.call(arguments,3);try{n.apply(a,Z)}catch(se){this.onError(se)}}var An=!1,wi=null,_i=!1,sa=null,Go={onError:function(t){An=!0,wi=t}};function Ko(t,n,a,l,h,v,E,M,L){An=!1,wi=null,Ho.apply(Go,arguments)}function Qo(t,n,a,l,h,v,E,M,L){if(Ko.apply(this,arguments),An){if(An){var Z=wi;An=!1,wi=null}else throw Error(i(198));_i||(_i=!0,sa=Z)}}function Gr(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function _s(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function Zo(t){if(Gr(t)!==t)throw Error(i(188))}function wr(t){var n=t.alternate;if(!n){if(n=Gr(t),n===null)throw Error(i(188));return n!==t?null:t}for(var a=t,l=n;;){var h=a.return;if(h===null)break;var v=h.alternate;if(v===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===v.child){for(v=h.child;v;){if(v===a)return Zo(h),t;if(v===l)return Zo(h),n;v=v.sibling}throw Error(i(188))}if(a.return!==l.return)a=h,l=v;else{for(var E=!1,M=h.child;M;){if(M===a){E=!0,a=h,l=v;break}if(M===l){E=!0,l=h,a=v;break}M=M.sibling}if(!E){for(M=v.child;M;){if(M===a){E=!0,a=v,l=h;break}if(M===l){E=!0,l=v,a=h;break}M=M.sibling}if(!E)throw Error(i(189))}}if(a.alternate!==l)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?t:n}function oa(t){return t=wr(t),t!==null?ua(t):null}function ua(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var n=ua(t);if(n!==null)return n;t=t.sibling}return null}var un=r.unstable_scheduleCallback,_r=r.unstable_cancelCallback,Yo=r.unstable_shouldYield,Wl=r.unstable_requestPaint,yt=r.unstable_now,Xo=r.unstable_getCurrentPriorityLevel,Ir=r.unstable_ImmediatePriority,la=r.unstable_UserBlockingPriority,Mt=r.unstable_NormalPriority,ur=r.unstable_LowPriority,da=r.unstable_IdlePriority,ca=null,$r=null;function Vl(t){if($r&&typeof $r.onCommitFiberRoot=="function")try{$r.onCommitFiberRoot(ca,t,void 0,(t.current.flags&128)===128)}catch{}}var lr=Math.clz32?Math.clz32:Kr,Fl=Math.log,ql=Math.LN2;function Kr(t){return t>>>=0,t===0?32:31-(Fl(t)/ql|0)|0}var ln=64,pa=4194304;function Rn(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function fa(t,n){var a=t.pendingLanes;if(a===0)return 0;var l=0,h=t.suspendedLanes,v=t.pingedLanes,E=a&268435455;if(E!==0){var M=E&~h;M!==0?l=Rn(M):(v&=E,v!==0&&(l=Rn(v)))}else E=a&~h,E!==0?l=Rn(E):v!==0&&(l=Rn(v));if(l===0)return 0;if(n!==0&&n!==l&&(n&h)===0&&(h=l&-l,v=n&-n,h>=v||h===16&&(v&4194240)!==0))return n;if((l&4)!==0&&(l|=a&16),n=t.entangledLanes,n!==0)for(t=t.entanglements,n&=l;0<n;)a=31-lr(n),h=1<<a,l|=t[a],n&=~h;return l}function Hl(t,n){switch(t){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gl(t,n){for(var a=t.suspendedLanes,l=t.pingedLanes,h=t.expirationTimes,v=t.pendingLanes;0<v;){var E=31-lr(v),M=1<<E,L=h[E];L===-1?((M&a)===0||(M&l)!==0)&&(h[E]=Hl(M,n)):L<=n&&(t.expiredLanes|=M),v&=~M}}function $s(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Jo(){var t=ln;return ln<<=1,(ln&4194240)===0&&(ln=64),t}function xs(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function $i(t,n,a){t.pendingLanes|=n,n!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,n=31-lr(n),t[n]=a}function Kl(t,n){var a=t.pendingLanes&~n;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=n,t.mutableReadLanes&=n,t.entangledLanes&=n,n=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var h=31-lr(a),v=1<<h;n[h]=0,l[h]=-1,t[h]=-1,a&=~v}}function bs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var l=31-lr(a),h=1<<l;h&n|t[l]&n&&(t[l]|=n),a&=~h}}var Qe=0;function eu(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var ha,Dn,tu,ma,ru,Ss=!1,ga=[],Qr=null,dr=null,Zr=null,Jt=new Map,jt=new Map,zr=[],ya="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function va(t,n){switch(t){case"focusin":case"focusout":Qr=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":Zr=null;break;case"pointerover":case"pointerout":Jt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jt.delete(n.pointerId)}}function Mn(t,n,a,l,h,v){return t===null||t.nativeEvent!==v?(t={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:v,targetContainers:[h]},n!==null&&(n=Ai(n),n!==null&&Dn(n)),t):(t.eventSystemFlags|=l,n=t.targetContainers,h!==null&&n.indexOf(h)===-1&&n.push(h),t)}function nu(t,n,a,l,h){switch(n){case"focusin":return Qr=Mn(Qr,t,n,a,l,h),!0;case"dragenter":return dr=Mn(dr,t,n,a,l,h),!0;case"mouseover":return Zr=Mn(Zr,t,n,a,l,h),!0;case"pointerover":var v=h.pointerId;return Jt.set(v,Mn(Jt.get(v)||null,t,n,a,l,h)),!0;case"gotpointercapture":return v=h.pointerId,jt.set(v,Mn(jt.get(v)||null,t,n,a,l,h)),!0}return!1}function iu(t){var n=yn(t.target);if(n!==null){var a=Gr(n);if(a!==null){if(n=a.tag,n===13){if(n=_s(a),n!==null){t.blockedOn=n,ru(t.priority,function(){tu(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Bn(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=ks(t.domEventName,t.eventSystemFlags,n[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);fs=l,a.target.dispatchEvent(l),fs=null}else return n=Ai(a),n!==null&&Dn(n),t.blockedOn=a,!1;n.shift()}return!0}function au(t,n,a){Bn(t)&&a.delete(n)}function su(){Ss=!1,Qr!==null&&Bn(Qr)&&(Qr=null),dr!==null&&Bn(dr)&&(dr=null),Zr!==null&&Bn(Zr)&&(Zr=null),Jt.forEach(au),jt.forEach(au)}function xi(t,n){t.blockedOn===n&&(t.blockedOn=null,Ss||(Ss=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,su)))}function dn(t){function n(h){return xi(h,t)}if(0<ga.length){xi(ga[0],t);for(var a=1;a<ga.length;a++){var l=ga[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Qr!==null&&xi(Qr,t),dr!==null&&xi(dr,t),Zr!==null&&xi(Zr,t),Jt.forEach(n),jt.forEach(n),a=0;a<zr.length;a++)l=zr[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<zr.length&&(a=zr[0],a.blockedOn===null);)iu(a),a.blockedOn===null&&zr.shift()}var Pn=D.ReactCurrentBatchConfig,wa=!0;function Ql(t,n,a,l){var h=Qe,v=Pn.transition;Pn.transition=null;try{Qe=1,Ln(t,n,a,l)}finally{Qe=h,Pn.transition=v}}function Zl(t,n,a,l){var h=Qe,v=Pn.transition;Pn.transition=null;try{Qe=4,Ln(t,n,a,l)}finally{Qe=h,Pn.transition=v}}function Ln(t,n,a,l){if(wa){var h=ks(t,n,a,l);if(h===null)Ua(t,n,l,_a,a),va(t,l);else if(nu(h,t,n,a,l))l.stopPropagation();else if(va(t,l),n&4&&-1<ya.indexOf(t)){for(;h!==null;){var v=Ai(h);if(v!==null&&ha(v),v=ks(t,n,a,l),v===null&&Ua(t,n,l,_a,a),v===h)break;h=v}h!==null&&l.stopPropagation()}else Ua(t,n,l,null,a)}}var _a=null;function ks(t,n,a,l){if(_a=null,t=hs(l),t=yn(t),t!==null)if(n=Gr(t),n===null)t=null;else if(a=n.tag,a===13){if(t=_s(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null);return _a=t,null}function ou(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xo()){case Ir:return 1;case la:return 4;case Mt:case ur:return 16;case da:return 536870912;default:return 16}default:return 16}}var Yr=null,Es=null,$a=null;function Ts(){if($a)return $a;var t,n=Es,a=n.length,l,h="value"in Yr?Yr.value:Yr.textContent,v=h.length;for(t=0;t<a&&n[t]===h[t];t++);var E=a-t;for(l=1;l<=E&&n[a-l]===h[v-l];l++);return $a=h.slice(t,1<l?1-l:void 0)}function xa(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ba(){return!0}function uu(){return!1}function Kt(t){function n(a,l,h,v,E){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=v,this.target=E,this.currentTarget=null;for(var M in t)t.hasOwnProperty(M)&&(a=t[M],this[M]=a?a(v):v[M]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?ba:uu,this.isPropagationStopped=uu,this}return ue(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),n}var Un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cs=Kt(Un),bi=ue({},Un,{view:0,detail:0}),Yl=Kt(bi),Sa,ka,jn,Ea=ue({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Os,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==jn&&(jn&&t.type==="mousemove"?(Sa=t.screenX-jn.screenX,ka=t.screenY-jn.screenY):ka=Sa=0,jn=t),Sa)},movementY:function(t){return"movementY"in t?t.movementY:ka}}),lu=Kt(Ea),du=ue({},Ea,{dataTransfer:0}),cu=Kt(du),Si=ue({},bi,{relatedTarget:0}),Is=Kt(Si),pu=ue({},Un,{animationName:0,elapsedTime:0,pseudoElement:0}),Xl=Kt(pu),Jl=ue({},Un,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ed=Kt(Jl),zs=ue({},Un,{data:0}),Ns=Kt(zs),td={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nd={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function id(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=nd[t])?!!n[t]:!1}function Os(){return id}var ad=ue({},bi,{key:function(t){if(t.key){var n=td[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=xa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?rd[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Os,charCode:function(t){return t.type==="keypress"?xa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?xa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),sd=Kt(ad),cn=ue({},Ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ki=Kt(cn),fu=ue({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Os}),od=Kt(fu),Ta=ue({},Un,{propertyName:0,elapsedTime:0,pseudoElement:0}),ud=Kt(Ta),ld=ue({},Ea,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),As=Kt(ld),Rs=[9,13,27,32],Ca=c&&"CompositionEvent"in window,Wn=null;c&&"documentMode"in document&&(Wn=document.documentMode);var hu=c&&"TextEvent"in window&&!Wn,Ds=c&&(!Ca||Wn&&8<Wn&&11>=Wn),Ms=" ",Bs=!1;function Ps(t,n){switch(t){case"keyup":return Rs.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mu(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pn=!1;function dd(t,n){switch(t){case"compositionend":return mu(n);case"keypress":return n.which!==32?null:(Bs=!0,Ms);case"textInput":return t=n.data,t===Ms&&Bs?null:t;default:return null}}function gu(t,n){if(pn)return t==="compositionend"||!Ca&&Ps(t,n)?(t=Ts(),$a=Es=Yr=null,pn=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ds&&n.locale!=="ko"?null:n.data;default:return null}}var yu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ei(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!yu[t.type]:n==="textarea"}function cr(t,n,a,l){ys(l),n=Ni(n,"onChange"),0<n.length&&(a=new Cs("onChange","change",null,a,l),t.push({event:a,listeners:n}))}var Nr=null,fn=null;function vu(t){eo(t,0)}function Ti(t){var n=Yn(t);if(Ut(n))return t}function wu(t,n){if(t==="change")return n}var Ia=!1;if(c){var za;if(c){var Na="oninput"in document;if(!Na){var je=document.createElement("div");je.setAttribute("oninput","return;"),Na=typeof je.oninput=="function"}za=Na}else za=!1;Ia=za&&(!document.documentMode||9<document.documentMode)}function Vn(){Nr&&(Nr.detachEvent("onpropertychange",Ls),fn=Nr=null)}function Ls(t){if(t.propertyName==="value"&&Ti(fn)){var n=[];cr(n,fn,t,hs(t)),ft(vu,n)}}function Le(t,n,a){t==="focusin"?(Vn(),Nr=n,fn=a,Nr.attachEvent("onpropertychange",Ls)):t==="focusout"&&Vn()}function Us(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ti(fn)}function We(t,n){if(t==="click")return Ti(n)}function _u(t,n){if(t==="input"||t==="change")return Ti(n)}function js(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var er=typeof Object.is=="function"?Object.is:js;function Fn(t,n){if(er(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!f.call(n,h)||!er(t[h],n[h]))return!1}return!0}function Ws(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Oa(t,n){var a=Ws(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=n&&l>=n)return{node:a,offset:n-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ws(a)}}function Vs(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Vs(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Fs(){for(var t=window,n=pt();n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=pt(t.document)}return n}function Aa(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function $u(t){var n=Fs(),a=t.focusedElem,l=t.selectionRange;if(n!==a&&a&&a.ownerDocument&&Vs(a.ownerDocument.documentElement,a)){if(l!==null&&Aa(a)){if(n=l.start,t=l.end,t===void 0&&(t=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(t,a.value.length);else if(t=(n=a.ownerDocument||document)&&n.defaultView||window,t.getSelection){t=t.getSelection();var h=a.textContent.length,v=Math.min(l.start,h);l=l.end===void 0?v:Math.min(l.end,h),!t.extend&&v>l&&(h=l,l=v,v=h),h=Oa(a,v);var E=Oa(a,l);h&&E&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(n=n.createRange(),n.setStart(h.node,h.offset),t.removeAllRanges(),v>l?(t.addRange(n),t.extend(E.node,E.offset)):(n.setEnd(E.node,E.offset),t.addRange(n)))}}for(n=[],t=a;t=t.parentNode;)t.nodeType===1&&n.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)t=n[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xu=c&&"documentMode"in document&&11>=document.documentMode,hn=null,Ra=null,qn=null,Da=!1;function qs(t,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Da||hn==null||hn!==pt(l)||(l=hn,"selectionStart"in l&&Aa(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),qn&&Fn(qn,l)||(qn=l,l=Ni(Ra,"onSelect"),0<l.length&&(n=new Cs("onSelect","select",null,n,a),t.push({event:n,listeners:l}),n.target=hn)))}function Ci(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var mn={animationend:Ci("Animation","AnimationEnd"),animationiteration:Ci("Animation","AnimationIteration"),animationstart:Ci("Animation","AnimationStart"),transitionend:Ci("Transition","TransitionEnd")},Ma={},Hs={};c&&(Hs=document.createElement("div").style,"AnimationEvent"in window||(delete mn.animationend.animation,delete mn.animationiteration.animation,delete mn.animationstart.animation),"TransitionEvent"in window||delete mn.transitionend.transition);function Ii(t){if(Ma[t])return Ma[t];if(!mn[t])return t;var n=mn[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Hs)return Ma[t]=n[a];return t}var Gs=Ii("animationend"),Ks=Ii("animationiteration"),Qs=Ii("animationstart"),Zs=Ii("transitionend"),Ys=new Map,Xs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,n){Ys.set(t,n),u(n,[t])}for(var Ba=0;Ba<Xs.length;Ba++){var Pa=Xs[Ba],bu=Pa.toLowerCase(),Su=Pa[0].toUpperCase()+Pa.slice(1);Or(bu,"on"+Su)}Or(Gs,"onAnimationEnd"),Or(Ks,"onAnimationIteration"),Or(Qs,"onAnimationStart"),Or("dblclick","onDoubleClick"),Or("focusin","onFocus"),Or("focusout","onBlur"),Or(Zs,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Hn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ku=new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));function Js(t,n,a){var l=t.type||"unknown-event";t.currentTarget=a,Qo(l,n,void 0,t),t.currentTarget=null}function eo(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],h=l.event;l=l.listeners;e:{var v=void 0;if(n)for(var E=l.length-1;0<=E;E--){var M=l[E],L=M.instance,Z=M.currentTarget;if(M=M.listener,L!==v&&h.isPropagationStopped())break e;Js(h,M,Z),v=L}else for(E=0;E<l.length;E++){if(M=l[E],L=M.instance,Z=M.currentTarget,M=M.listener,L!==v&&h.isPropagationStopped())break e;Js(h,M,Z),v=L}}}if(_i)throw t=sa,_i=!1,sa=null,t}function it(t,n){var a=n[uo];a===void 0&&(a=n[uo]=new Set);var l=t+"__bubble";a.has(l)||(to(n,t,2,!1),a.add(l))}function La(t,n,a){var l=0;n&&(l|=4),to(a,t,l,n)}var zi="_reactListening"+Math.random().toString(36).slice(2);function Gn(t){if(!t[zi]){t[zi]=!0,s.forEach(function(a){a!=="selectionchange"&&(ku.has(a)||La(a,!1,t),La(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[zi]||(n[zi]=!0,La("selectionchange",!1,n))}}function to(t,n,a,l){switch(ou(n)){case 1:var h=Ql;break;case 4:h=Zl;break;default:h=Ln}a=h.bind(null,n,a,t),h=void 0,!aa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(h=!0),l?h!==void 0?t.addEventListener(n,a,{capture:!0,passive:h}):t.addEventListener(n,a,!0):h!==void 0?t.addEventListener(n,a,{passive:h}):t.addEventListener(n,a,!1)}function Ua(t,n,a,l,h){var v=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var M=l.stateNode.containerInfo;if(M===h||M.nodeType===8&&M.parentNode===h)break;if(E===4)for(E=l.return;E!==null;){var L=E.tag;if((L===3||L===4)&&(L=E.stateNode.containerInfo,L===h||L.nodeType===8&&L.parentNode===h))return;E=E.return}for(;M!==null;){if(E=yn(M),E===null)return;if(L=E.tag,L===5||L===6){l=v=E;continue e}M=M.parentNode}}l=l.return}ft(function(){var Z=v,se=hs(a),le=[];e:{var ie=Ys.get(t);if(ie!==void 0){var ve=Cs,be=t;switch(t){case"keypress":if(xa(a)===0)break e;case"keydown":case"keyup":ve=sd;break;case"focusin":be="focus",ve=Is;break;case"focusout":be="blur",ve=Is;break;case"beforeblur":case"afterblur":ve=Is;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ve=lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ve=cu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ve=od;break;case Gs:case Ks:case Qs:ve=Xl;break;case Zs:ve=ud;break;case"scroll":ve=Yl;break;case"wheel":ve=As;break;case"copy":case"cut":case"paste":ve=ed;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ve=ki}var Ee=(n&4)!==0,xt=!Ee&&t==="scroll",q=Ee?ie!==null?ie+"Capture":null:ie;Ee=[];for(var W=Z,H;W!==null;){H=W;var ce=H.stateNode;if(H.tag===5&&ce!==null&&(H=ce,q!==null&&(ce=Nn(W,q),ce!=null&&Ee.push(Kn(W,ce,H)))),xt)break;W=W.return}0<Ee.length&&(ie=new ve(ie,be,null,a,se),le.push({event:ie,listeners:Ee}))}}if((n&7)===0){e:{if(ie=t==="mouseover"||t==="pointerover",ve=t==="mouseout"||t==="pointerout",ie&&a!==fs&&(be=a.relatedTarget||a.fromElement)&&(yn(be)||be[Rr]))break e;if((ve||ie)&&(ie=se.window===se?se:(ie=se.ownerDocument)?ie.defaultView||ie.parentWindow:window,ve?(be=a.relatedTarget||a.toElement,ve=Z,be=be?yn(be):null,be!==null&&(xt=Gr(be),be!==xt||be.tag!==5&&be.tag!==6)&&(be=null)):(ve=null,be=Z),ve!==be)){if(Ee=lu,ce="onMouseLeave",q="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(Ee=ki,ce="onPointerLeave",q="onPointerEnter",W="pointer"),xt=ve==null?ie:Yn(ve),H=be==null?ie:Yn(be),ie=new Ee(ce,W+"leave",ve,a,se),ie.target=xt,ie.relatedTarget=H,ce=null,yn(se)===Z&&(Ee=new Ee(q,W+"enter",be,a,se),Ee.target=H,Ee.relatedTarget=xt,ce=Ee),xt=ce,ve&&be)t:{for(Ee=ve,q=be,W=0,H=Ee;H;H=gn(H))W++;for(H=0,ce=q;ce;ce=gn(ce))H++;for(;0<W-H;)Ee=gn(Ee),W--;for(;0<H-W;)q=gn(q),H--;for(;W--;){if(Ee===q||q!==null&&Ee===q.alternate)break t;Ee=gn(Ee),q=gn(q)}Ee=null}else Ee=null;ve!==null&&ro(le,ie,ve,Ee,!1),be!==null&&xt!==null&&ro(le,xt,be,Ee,!0)}}e:{if(ie=Z?Yn(Z):window,ve=ie.nodeName&&ie.nodeName.toLowerCase(),ve==="select"||ve==="input"&&ie.type==="file")var Ce=wu;else if(Ei(ie))if(Ia)Ce=_u;else{Ce=Us;var Oe=Le}else(ve=ie.nodeName)&&ve.toLowerCase()==="input"&&(ie.type==="checkbox"||ie.type==="radio")&&(Ce=We);if(Ce&&(Ce=Ce(t,Z))){cr(le,Ce,a,se);break e}Oe&&Oe(t,ie,Z),t==="focusout"&&(Oe=ie._wrapperState)&&Oe.controlled&&ie.type==="number"&&Ue(ie,"number",ie.value)}switch(Oe=Z?Yn(Z):window,t){case"focusin":(Ei(Oe)||Oe.contentEditable==="true")&&(hn=Oe,Ra=Z,qn=null);break;case"focusout":qn=Ra=hn=null;break;case"mousedown":Da=!0;break;case"contextmenu":case"mouseup":case"dragend":Da=!1,qs(le,a,se);break;case"selectionchange":if(xu)break;case"keydown":case"keyup":qs(le,a,se)}var Ae;if(Ca)e:{switch(t){case"compositionstart":var Me="onCompositionStart";break e;case"compositionend":Me="onCompositionEnd";break e;case"compositionupdate":Me="onCompositionUpdate";break e}Me=void 0}else pn?Ps(t,a)&&(Me="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Me="onCompositionStart");Me&&(Ds&&a.locale!=="ko"&&(pn||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&pn&&(Ae=Ts()):(Yr=se,Es="value"in Yr?Yr.value:Yr.textContent,pn=!0)),Oe=Ni(Z,Me),0<Oe.length&&(Me=new Ns(Me,t,null,a,se),le.push({event:Me,listeners:Oe}),Ae?Me.data=Ae:(Ae=mu(a),Ae!==null&&(Me.data=Ae)))),(Ae=hu?dd(t,a):gu(t,a))&&(Z=Ni(Z,"onBeforeInput"),0<Z.length&&(se=new Ns("onBeforeInput","beforeinput",null,a,se),le.push({event:se,listeners:Z}),se.data=Ae))}eo(le,n)})}function Kn(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Ni(t,n){for(var a=n+"Capture",l=[];t!==null;){var h=t,v=h.stateNode;h.tag===5&&v!==null&&(h=v,v=Nn(t,a),v!=null&&l.unshift(Kn(t,v,h)),v=Nn(t,n),v!=null&&l.push(Kn(t,v,h))),t=t.return}return l}function gn(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function ro(t,n,a,l,h){for(var v=n._reactName,E=[];a!==null&&a!==l;){var M=a,L=M.alternate,Z=M.stateNode;if(L!==null&&L===l)break;M.tag===5&&Z!==null&&(M=Z,h?(L=Nn(a,v),L!=null&&E.unshift(Kn(a,L,M))):h||(L=Nn(a,v),L!=null&&E.push(Kn(a,L,M)))),a=a.return}E.length!==0&&t.push({event:n,listeners:E})}var Eu=/\r\n?/g,Ar=/\u0000|\uFFFD/g;function Tu(t){return(typeof t=="string"?t:""+t).replace(Eu,`
`).replace(Ar,"")}function Qn(t,n,a){if(n=Tu(n),Tu(t)!==n&&a)throw Error(i(425))}function ja(){}var no=null,io=null;function ao(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var so=typeof setTimeout=="function"?setTimeout:void 0,cd=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,pd=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu<"u"?function(t){return Cu.resolve(null).then(t).catch(fd)}:so;function fd(t){setTimeout(function(){throw t})}function oo(t,n){var a=n,l=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(l===0){t.removeChild(h),dn(n);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=h}while(a);dn(n)}function Xr(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return t}function Iu(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return t;n--}else a==="/$"&&n++}t=t.previousSibling}return null}var Zn=Math.random().toString(36).slice(2),xr="__reactFiber$"+Zn,Oi="__reactProps$"+Zn,Rr="__reactContainer$"+Zn,uo="__reactEvents$"+Zn,hd="__reactListeners$"+Zn,md="__reactHandles$"+Zn;function yn(t){var n=t[xr];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Rr]||a[xr]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Iu(t);t!==null;){if(a=t[xr])return a;t=Iu(t)}return n}t=a,a=t.parentNode}return null}function Ai(t){return t=t[xr]||t[Rr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Yn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(i(33))}function Wa(t){return t[Oi]||null}var lo=[],Xn=-1;function Jr(t){return{current:t}}function ut(t){0>Xn||(t.current=lo[Xn],lo[Xn]=null,Xn--)}function at(t,n){Xn++,lo[Xn]=t.current,t.current=n}var en={},zt=Jr(en),Wt=Jr(!1),vn=en;function Jn(t,n){var a=t.type.contextTypes;if(!a)return en;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var h={},v;for(v in a)h[v]=n[v];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=n,t.__reactInternalMemoizedMaskedChildContext=h),h}function Vt(t){return t=t.childContextTypes,t!=null}function Va(){ut(Wt),ut(zt)}function zu(t,n,a){if(zt.current!==en)throw Error(i(168));at(zt,n),at(Wt,a)}function Nu(t,n,a){var l=t.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var h in l)if(!(h in n))throw Error(i(108,Te(t)||"Unknown",h));return ue({},a,l)}function Fa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||en,vn=zt.current,at(zt,t),at(Wt,Wt.current),!0}function Ou(t,n,a){var l=t.stateNode;if(!l)throw Error(i(169));a?(t=Nu(t,n,vn),l.__reactInternalMemoizedMergedChildContext=t,ut(Wt),ut(zt),at(zt,t)):ut(Wt),at(Wt,a)}var Dr=null,qa=!1,ei=!1;function co(t){Dr===null?Dr=[t]:Dr.push(t)}function Au(t){qa=!0,co(t)}function p(){if(!ei&&Dr!==null){ei=!0;var t=0,n=Qe;try{var a=Dr;for(Qe=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Dr=null,qa=!1}catch(h){throw Dr!==null&&(Dr=Dr.slice(t+1)),un(Ir,p),h}finally{Qe=n,ei=!1}}return null}var g=[],x=0,_=null,z=0,R=[],j=0,Y=null,oe=1,fe="";function Ne(t,n){g[x++]=z,g[x++]=_,_=t,z=n}function Fe(t,n,a){R[j++]=oe,R[j++]=fe,R[j++]=Y,Y=t;var l=oe;t=fe;var h=32-lr(l)-1;l&=~(1<<h),a+=1;var v=32-lr(n)+h;if(30<v){var E=h-h%5;v=(l&(1<<E)-1).toString(32),l>>=E,h-=E,oe=1<<32-lr(n)+h|a<<h|l,fe=v+t}else oe=1<<v|a<<h|l,fe=t}function Ye(t){t.return!==null&&(Ne(t,1),Fe(t,1,0))}function et(t){for(;t===_;)_=g[--x],g[x]=null,z=g[--x],g[x]=null;for(;t===Y;)Y=R[--j],R[j]=null,fe=R[--j],R[j]=null,oe=R[--j],R[j]=null}var _t=null,Bt=null,lt=!1,Qt=null;function xf(t,n){var a=Er(5,null,null,0);a.elementType="DELETED",a.stateNode=n,a.return=t,n=t.deletions,n===null?(t.deletions=[a],t.flags|=16):n.push(a)}function bf(t,n){switch(t.tag){case 5:var a=t.type;return n=n.nodeType!==1||a.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(t.stateNode=n,_t=t,Bt=Xr(n.firstChild),!0):!1;case 6:return n=t.pendingProps===""||n.nodeType!==3?null:n,n!==null?(t.stateNode=n,_t=t,Bt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(a=Y!==null?{id:oe,overflow:fe}:null,t.memoizedState={dehydrated:n,treeContext:a,retryLane:1073741824},a=Er(18,null,null,0),a.stateNode=n,a.return=t,t.child=a,_t=t,Bt=null,!0):!1;default:return!1}}function gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yd(t){if(lt){var n=Bt;if(n){var a=n;if(!bf(t,n)){if(gd(t))throw Error(i(418));n=Xr(a.nextSibling);var l=_t;n&&bf(t,n)?xf(l,a):(t.flags=t.flags&-4097|2,lt=!1,_t=t)}}else{if(gd(t))throw Error(i(418));t.flags=t.flags&-4097|2,lt=!1,_t=t}}}function Sf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_t=t}function Ru(t){if(t!==_t)return!1;if(!lt)return Sf(t),lt=!0,!1;var n;if((n=t.tag!==3)&&!(n=t.tag!==5)&&(n=t.type,n=n!=="head"&&n!=="body"&&!ao(t.type,t.memoizedProps)),n&&(n=Bt)){if(gd(t))throw kf(),Error(i(418));for(;n;)xf(t,n),n=Xr(n.nextSibling)}if(Sf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(i(317));e:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(n===0){Bt=Xr(t.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++}t=t.nextSibling}Bt=null}}else Bt=_t?Xr(t.stateNode.nextSibling):null;return!0}function kf(){for(var t=Bt;t;)t=Xr(t.nextSibling)}function Ha(){Bt=_t=null,lt=!1}function vd(t){Qt===null?Qt=[t]:Qt.push(t)}var W_=D.ReactCurrentBatchConfig;function po(t,n,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(i(309));var l=a.stateNode}if(!l)throw Error(i(147,t));var h=l,v=""+t;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===v?n.ref:(n=function(E){var M=h.refs;E===null?delete M[v]:M[v]=E},n._stringRef=v,n)}if(typeof t!="string")throw Error(i(284));if(!a._owner)throw Error(i(290,t))}return t}function Du(t,n){throw t=Object.prototype.toString.call(n),Error(i(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t))}function Ef(t){var n=t._init;return n(t._payload)}function Tf(t){function n(q,W){if(t){var H=q.deletions;H===null?(q.deletions=[W],q.flags|=16):H.push(W)}}function a(q,W){if(!t)return null;for(;W!==null;)n(q,W),W=W.sibling;return null}function l(q,W){for(q=new Map;W!==null;)W.key!==null?q.set(W.key,W):q.set(W.index,W),W=W.sibling;return q}function h(q,W){return q=ui(q,W),q.index=0,q.sibling=null,q}function v(q,W,H){return q.index=H,t?(H=q.alternate,H!==null?(H=H.index,H<W?(q.flags|=2,W):H):(q.flags|=2,W)):(q.flags|=1048576,W)}function E(q){return t&&q.alternate===null&&(q.flags|=2),q}function M(q,W,H,ce){return W===null||W.tag!==6?(W=lc(H,q.mode,ce),W.return=q,W):(W=h(W,H),W.return=q,W)}function L(q,W,H,ce){var Ce=H.type;return Ce===V?se(q,W,H.props.children,ce,H.key):W!==null&&(W.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===ye&&Ef(Ce)===W.type)?(ce=h(W,H.props),ce.ref=po(q,W,H),ce.return=q,ce):(ce=al(H.type,H.key,H.props,null,q.mode,ce),ce.ref=po(q,W,H),ce.return=q,ce)}function Z(q,W,H,ce){return W===null||W.tag!==4||W.stateNode.containerInfo!==H.containerInfo||W.stateNode.implementation!==H.implementation?(W=dc(H,q.mode,ce),W.return=q,W):(W=h(W,H.children||[]),W.return=q,W)}function se(q,W,H,ce,Ce){return W===null||W.tag!==7?(W=ji(H,q.mode,ce,Ce),W.return=q,W):(W=h(W,H),W.return=q,W)}function le(q,W,H){if(typeof W=="string"&&W!==""||typeof W=="number")return W=lc(""+W,q.mode,H),W.return=q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case B:return H=al(W.type,W.key,W.props,null,q.mode,H),H.ref=po(q,null,W),H.return=q,H;case P:return W=dc(W,q.mode,H),W.return=q,W;case ye:var ce=W._init;return le(q,ce(W._payload),H)}if(ot(W)||re(W))return W=ji(W,q.mode,H,null),W.return=q,W;Du(q,W)}return null}function ie(q,W,H,ce){var Ce=W!==null?W.key:null;if(typeof H=="string"&&H!==""||typeof H=="number")return Ce!==null?null:M(q,W,""+H,ce);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case B:return H.key===Ce?L(q,W,H,ce):null;case P:return H.key===Ce?Z(q,W,H,ce):null;case ye:return Ce=H._init,ie(q,W,Ce(H._payload),ce)}if(ot(H)||re(H))return Ce!==null?null:se(q,W,H,ce,null);Du(q,H)}return null}function ve(q,W,H,ce,Ce){if(typeof ce=="string"&&ce!==""||typeof ce=="number")return q=q.get(H)||null,M(W,q,""+ce,Ce);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case B:return q=q.get(ce.key===null?H:ce.key)||null,L(W,q,ce,Ce);case P:return q=q.get(ce.key===null?H:ce.key)||null,Z(W,q,ce,Ce);case ye:var Oe=ce._init;return ve(q,W,H,Oe(ce._payload),Ce)}if(ot(ce)||re(ce))return q=q.get(H)||null,se(W,q,ce,Ce,null);Du(W,ce)}return null}function be(q,W,H,ce){for(var Ce=null,Oe=null,Ae=W,Me=W=0,At=null;Ae!==null&&Me<H.length;Me++){Ae.index>Me?(At=Ae,Ae=null):At=Ae.sibling;var Je=ie(q,Ae,H[Me],ce);if(Je===null){Ae===null&&(Ae=At);break}t&&Ae&&Je.alternate===null&&n(q,Ae),W=v(Je,W,Me),Oe===null?Ce=Je:Oe.sibling=Je,Oe=Je,Ae=At}if(Me===H.length)return a(q,Ae),lt&&Ne(q,Me),Ce;if(Ae===null){for(;Me<H.length;Me++)Ae=le(q,H[Me],ce),Ae!==null&&(W=v(Ae,W,Me),Oe===null?Ce=Ae:Oe.sibling=Ae,Oe=Ae);return lt&&Ne(q,Me),Ce}for(Ae=l(q,Ae);Me<H.length;Me++)At=ve(Ae,q,Me,H[Me],ce),At!==null&&(t&&At.alternate!==null&&Ae.delete(At.key===null?Me:At.key),W=v(At,W,Me),Oe===null?Ce=At:Oe.sibling=At,Oe=At);return t&&Ae.forEach(function(li){return n(q,li)}),lt&&Ne(q,Me),Ce}function Ee(q,W,H,ce){var Ce=re(H);if(typeof Ce!="function")throw Error(i(150));if(H=Ce.call(H),H==null)throw Error(i(151));for(var Oe=Ce=null,Ae=W,Me=W=0,At=null,Je=H.next();Ae!==null&&!Je.done;Me++,Je=H.next()){Ae.index>Me?(At=Ae,Ae=null):At=Ae.sibling;var li=ie(q,Ae,Je.value,ce);if(li===null){Ae===null&&(Ae=At);break}t&&Ae&&li.alternate===null&&n(q,Ae),W=v(li,W,Me),Oe===null?Ce=li:Oe.sibling=li,Oe=li,Ae=At}if(Je.done)return a(q,Ae),lt&&Ne(q,Me),Ce;if(Ae===null){for(;!Je.done;Me++,Je=H.next())Je=le(q,Je.value,ce),Je!==null&&(W=v(Je,W,Me),Oe===null?Ce=Je:Oe.sibling=Je,Oe=Je);return lt&&Ne(q,Me),Ce}for(Ae=l(q,Ae);!Je.done;Me++,Je=H.next())Je=ve(Ae,q,Me,Je.value,ce),Je!==null&&(t&&Je.alternate!==null&&Ae.delete(Je.key===null?Me:Je.key),W=v(Je,W,Me),Oe===null?Ce=Je:Oe.sibling=Je,Oe=Je);return t&&Ae.forEach(function($2){return n(q,$2)}),lt&&Ne(q,Me),Ce}function xt(q,W,H,ce){if(typeof H=="object"&&H!==null&&H.type===V&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case B:e:{for(var Ce=H.key,Oe=W;Oe!==null;){if(Oe.key===Ce){if(Ce=H.type,Ce===V){if(Oe.tag===7){a(q,Oe.sibling),W=h(Oe,H.props.children),W.return=q,q=W;break e}}else if(Oe.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===ye&&Ef(Ce)===Oe.type){a(q,Oe.sibling),W=h(Oe,H.props),W.ref=po(q,Oe,H),W.return=q,q=W;break e}a(q,Oe);break}else n(q,Oe);Oe=Oe.sibling}H.type===V?(W=ji(H.props.children,q.mode,ce,H.key),W.return=q,q=W):(ce=al(H.type,H.key,H.props,null,q.mode,ce),ce.ref=po(q,W,H),ce.return=q,q=ce)}return E(q);case P:e:{for(Oe=H.key;W!==null;){if(W.key===Oe)if(W.tag===4&&W.stateNode.containerInfo===H.containerInfo&&W.stateNode.implementation===H.implementation){a(q,W.sibling),W=h(W,H.children||[]),W.return=q,q=W;break e}else{a(q,W);break}else n(q,W);W=W.sibling}W=dc(H,q.mode,ce),W.return=q,q=W}return E(q);case ye:return Oe=H._init,xt(q,W,Oe(H._payload),ce)}if(ot(H))return be(q,W,H,ce);if(re(H))return Ee(q,W,H,ce);Du(q,H)}return typeof H=="string"&&H!==""||typeof H=="number"?(H=""+H,W!==null&&W.tag===6?(a(q,W.sibling),W=h(W,H),W.return=q,q=W):(a(q,W),W=lc(H,q.mode,ce),W.return=q,q=W),E(q)):a(q,W)}return xt}var Ga=Tf(!0),Cf=Tf(!1),Mu=Jr(null),Bu=null,Ka=null,wd=null;function _d(){wd=Ka=Bu=null}function $d(t){var n=Mu.current;ut(Mu),t._currentValue=n}function xd(t,n,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),t===a)break;t=t.return}}function Qa(t,n){Bu=t,wd=Ka=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&n)!==0&&(tr=!0),t.firstContext=null)}function br(t){var n=t._currentValue;if(wd!==t)if(t={context:t,memoizedValue:n,next:null},Ka===null){if(Bu===null)throw Error(i(308));Ka=t,Bu.dependencies={lanes:0,firstContext:t}}else Ka=Ka.next=t;return n}var Ri=null;function bd(t){Ri===null?Ri=[t]:Ri.push(t)}function If(t,n,a,l){var h=n.interleaved;return h===null?(a.next=a,bd(n)):(a.next=h.next,h.next=a),n.interleaved=a,wn(t,l)}function wn(t,n){t.lanes|=n;var a=t.alternate;for(a!==null&&(a.lanes|=n),a=t,t=t.return;t!==null;)t.childLanes|=n,a=t.alternate,a!==null&&(a.childLanes|=n),a=t,t=t.return;return a.tag===3?a.stateNode:null}var ti=!1;function Sd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function zf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _n(t,n){return{eventTime:t,lane:n,tag:0,payload:null,callback:null,next:null}}function ri(t,n,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(Xe&2)!==0){var h=l.pending;return h===null?n.next=n:(n.next=h.next,h.next=n),l.pending=n,wn(t,a)}return h=l.interleaved,h===null?(n.next=n,bd(l)):(n.next=h.next,h.next=n),l.interleaved=n,wn(t,a)}function Pu(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194240)!==0)){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,bs(t,a)}}function Nf(t,n){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?h=v=E:v=v.next=E,a=a.next}while(a!==null);v===null?h=v=n:v=v.next=n}else h=v=n;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:v,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}function Lu(t,n,a,l){var h=t.updateQueue;ti=!1;var v=h.firstBaseUpdate,E=h.lastBaseUpdate,M=h.shared.pending;if(M!==null){h.shared.pending=null;var L=M,Z=L.next;L.next=null,E===null?v=Z:E.next=Z,E=L;var se=t.alternate;se!==null&&(se=se.updateQueue,M=se.lastBaseUpdate,M!==E&&(M===null?se.firstBaseUpdate=Z:M.next=Z,se.lastBaseUpdate=L))}if(v!==null){var le=h.baseState;E=0,se=Z=L=null,M=v;do{var ie=M.lane,ve=M.eventTime;if((l&ie)===ie){se!==null&&(se=se.next={eventTime:ve,lane:0,tag:M.tag,payload:M.payload,callback:M.callback,next:null});e:{var be=t,Ee=M;switch(ie=n,ve=a,Ee.tag){case 1:if(be=Ee.payload,typeof be=="function"){le=be.call(ve,le,ie);break e}le=be;break e;case 3:be.flags=be.flags&-65537|128;case 0:if(be=Ee.payload,ie=typeof be=="function"?be.call(ve,le,ie):be,ie==null)break e;le=ue({},le,ie);break e;case 2:ti=!0}}M.callback!==null&&M.lane!==0&&(t.flags|=64,ie=h.effects,ie===null?h.effects=[M]:ie.push(M))}else ve={eventTime:ve,lane:ie,tag:M.tag,payload:M.payload,callback:M.callback,next:null},se===null?(Z=se=ve,L=le):se=se.next=ve,E|=ie;if(M=M.next,M===null){if(M=h.shared.pending,M===null)break;ie=M,M=ie.next,ie.next=null,h.lastBaseUpdate=ie,h.shared.pending=null}}while(!0);if(se===null&&(L=le),h.baseState=L,h.firstBaseUpdate=Z,h.lastBaseUpdate=se,n=h.shared.interleaved,n!==null){h=n;do E|=h.lane,h=h.next;while(h!==n)}else v===null&&(h.shared.lanes=0);Bi|=E,t.lanes=E,t.memoizedState=le}}function Of(t,n,a){if(t=n.effects,n.effects=null,t!==null)for(n=0;n<t.length;n++){var l=t[n],h=l.callback;if(h!==null){if(l.callback=null,l=a,typeof h!="function")throw Error(i(191,h));h.call(l)}}}var fo={},tn=Jr(fo),ho=Jr(fo),mo=Jr(fo);function Di(t){if(t===fo)throw Error(i(174));return t}function kd(t,n){switch(at(mo,n),at(ho,t),at(tn,fo),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:mi(null,"");break;default:t=t===8?n.parentNode:n,n=t.namespaceURI||null,t=t.tagName,n=mi(n,t)}ut(tn),at(tn,n)}function Za(){ut(tn),ut(ho),ut(mo)}function Af(t){Di(mo.current);var n=Di(tn.current),a=mi(n,t.type);n!==a&&(at(ho,t),at(tn,a))}function Ed(t){ho.current===t&&(ut(tn),ut(ho))}var vt=Jr(0);function Uu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Td=[];function Cd(){for(var t=0;t<Td.length;t++)Td[t]._workInProgressVersionPrimary=null;Td.length=0}var ju=D.ReactCurrentDispatcher,Id=D.ReactCurrentBatchConfig,Mi=0,wt=null,kt=null,Nt=null,Wu=!1,go=!1,yo=0,V_=0;function Ft(){throw Error(i(321))}function zd(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!er(t[a],n[a]))return!1;return!0}function Nd(t,n,a,l,h,v){if(Mi=v,wt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ju.current=t===null||t.memoizedState===null?G_:K_,t=a(l,h),go){v=0;do{if(go=!1,yo=0,25<=v)throw Error(i(301));v+=1,Nt=kt=null,n.updateQueue=null,ju.current=Q_,t=a(l,h)}while(go)}if(ju.current=qu,n=kt!==null&&kt.next!==null,Mi=0,Nt=kt=wt=null,Wu=!1,n)throw Error(i(300));return t}function Od(){var t=yo!==0;return yo=0,t}function rn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nt===null?wt.memoizedState=Nt=t:Nt=Nt.next=t,Nt}function Sr(){if(kt===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=kt.next;var n=Nt===null?wt.memoizedState:Nt.next;if(n!==null)Nt=n,kt=t;else{if(t===null)throw Error(i(310));kt=t,t={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Nt===null?wt.memoizedState=Nt=t:Nt=Nt.next=t}return Nt}function vo(t,n){return typeof n=="function"?n(t):n}function Ad(t){var n=Sr(),a=n.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var l=kt,h=l.baseQueue,v=a.pending;if(v!==null){if(h!==null){var E=h.next;h.next=v.next,v.next=E}l.baseQueue=h=v,a.pending=null}if(h!==null){v=h.next,l=l.baseState;var M=E=null,L=null,Z=v;do{var se=Z.lane;if((Mi&se)===se)L!==null&&(L=L.next={lane:0,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),l=Z.hasEagerState?Z.eagerState:t(l,Z.action);else{var le={lane:se,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null};L===null?(M=L=le,E=l):L=L.next=le,wt.lanes|=se,Bi|=se}Z=Z.next}while(Z!==null&&Z!==v);L===null?E=l:L.next=M,er(l,n.memoizedState)||(tr=!0),n.memoizedState=l,n.baseState=E,n.baseQueue=L,a.lastRenderedState=l}if(t=a.interleaved,t!==null){h=t;do v=h.lane,wt.lanes|=v,Bi|=v,h=h.next;while(h!==t)}else h===null&&(a.lanes=0);return[n.memoizedState,a.dispatch]}function Rd(t){var n=Sr(),a=n.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=t;var l=a.dispatch,h=a.pending,v=n.memoizedState;if(h!==null){a.pending=null;var E=h=h.next;do v=t(v,E.action),E=E.next;while(E!==h);er(v,n.memoizedState)||(tr=!0),n.memoizedState=v,n.baseQueue===null&&(n.baseState=v),a.lastRenderedState=v}return[v,l]}function Rf(){}function Df(t,n){var a=wt,l=Sr(),h=n(),v=!er(l.memoizedState,h);if(v&&(l.memoizedState=h,tr=!0),l=l.queue,Dd(Pf.bind(null,a,l,t),[t]),l.getSnapshot!==n||v||Nt!==null&&Nt.memoizedState.tag&1){if(a.flags|=2048,wo(9,Bf.bind(null,a,l,h,n),void 0,null),Ot===null)throw Error(i(349));(Mi&30)!==0||Mf(a,n,h)}return h}function Mf(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=wt.updateQueue,n===null?(n={lastEffect:null,stores:null},wt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Bf(t,n,a,l){n.value=a,n.getSnapshot=l,Lf(n)&&Uf(t)}function Pf(t,n,a){return a(function(){Lf(n)&&Uf(t)})}function Lf(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!er(t,a)}catch{return!0}}function Uf(t){var n=wn(t,1);n!==null&&Lr(n,t,1,-1)}function jf(t){var n=rn();return typeof t=="function"&&(t=t()),n.memoizedState=n.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:t},n.queue=t,t=t.dispatch=H_.bind(null,wt,t),[n.memoizedState,t]}function wo(t,n,a,l){return t={tag:t,create:n,destroy:a,deps:l,next:null},n=wt.updateQueue,n===null?(n={lastEffect:null,stores:null},wt.updateQueue=n,n.lastEffect=t.next=t):(a=n.lastEffect,a===null?n.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,n.lastEffect=t)),t}function Wf(){return Sr().memoizedState}function Vu(t,n,a,l){var h=rn();wt.flags|=t,h.memoizedState=wo(1|n,a,void 0,l===void 0?null:l)}function Fu(t,n,a,l){var h=Sr();l=l===void 0?null:l;var v=void 0;if(kt!==null){var E=kt.memoizedState;if(v=E.destroy,l!==null&&zd(l,E.deps)){h.memoizedState=wo(n,a,v,l);return}}wt.flags|=t,h.memoizedState=wo(1|n,a,v,l)}function Vf(t,n){return Vu(8390656,8,t,n)}function Dd(t,n){return Fu(2048,8,t,n)}function Ff(t,n){return Fu(4,2,t,n)}function qf(t,n){return Fu(4,4,t,n)}function Hf(t,n){if(typeof n=="function")return t=t(),n(t),function(){n(null)};if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Gf(t,n,a){return a=a!=null?a.concat([t]):null,Fu(4,4,Hf.bind(null,n,t),a)}function Md(){}function Kf(t,n){var a=Sr();n=n===void 0?null:n;var l=a.memoizedState;return l!==null&&n!==null&&zd(n,l[1])?l[0]:(a.memoizedState=[t,n],t)}function Qf(t,n){var a=Sr();n=n===void 0?null:n;var l=a.memoizedState;return l!==null&&n!==null&&zd(n,l[1])?l[0]:(t=t(),a.memoizedState=[t,n],t)}function Zf(t,n,a){return(Mi&21)===0?(t.baseState&&(t.baseState=!1,tr=!0),t.memoizedState=a):(er(a,n)||(a=Jo(),wt.lanes|=a,Bi|=a,t.baseState=!0),n)}function F_(t,n){var a=Qe;Qe=a!==0&&4>a?a:4,t(!0);var l=Id.transition;Id.transition={};try{t(!1),n()}finally{Qe=a,Id.transition=l}}function Yf(){return Sr().memoizedState}function q_(t,n,a){var l=si(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Xf(t))Jf(n,a);else if(a=If(t,n,a,l),a!==null){var h=Yt();Lr(a,t,l,h),eh(a,n,l)}}function H_(t,n,a){var l=si(t),h={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Xf(t))Jf(n,h);else{var v=t.alternate;if(t.lanes===0&&(v===null||v.lanes===0)&&(v=n.lastRenderedReducer,v!==null))try{var E=n.lastRenderedState,M=v(E,a);if(h.hasEagerState=!0,h.eagerState=M,er(M,E)){var L=n.interleaved;L===null?(h.next=h,bd(n)):(h.next=L.next,L.next=h),n.interleaved=h;return}}catch{}finally{}a=If(t,n,h,l),a!==null&&(h=Yt(),Lr(a,t,l,h),eh(a,n,l))}}function Xf(t){var n=t.alternate;return t===wt||n!==null&&n===wt}function Jf(t,n){go=Wu=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function eh(t,n,a){if((a&4194240)!==0){var l=n.lanes;l&=t.pendingLanes,a|=l,n.lanes=a,bs(t,a)}}var qu={readContext:br,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},G_={readContext:br,useCallback:function(t,n){return rn().memoizedState=[t,n===void 0?null:n],t},useContext:br,useEffect:Vf,useImperativeHandle:function(t,n,a){return a=a!=null?a.concat([t]):null,Vu(4194308,4,Hf.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Vu(4194308,4,t,n)},useInsertionEffect:function(t,n){return Vu(4,2,t,n)},useMemo:function(t,n){var a=rn();return n=n===void 0?null:n,t=t(),a.memoizedState=[t,n],t},useReducer:function(t,n,a){var l=rn();return n=a!==void 0?a(n):n,l.memoizedState=l.baseState=n,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:n},l.queue=t,t=t.dispatch=q_.bind(null,wt,t),[l.memoizedState,t]},useRef:function(t){var n=rn();return t={current:t},n.memoizedState=t},useState:jf,useDebugValue:Md,useDeferredValue:function(t){return rn().memoizedState=t},useTransition:function(){var t=jf(!1),n=t[0];return t=F_.bind(null,t[1]),rn().memoizedState=t,[n,t]},useMutableSource:function(){},useSyncExternalStore:function(t,n,a){var l=wt,h=rn();if(lt){if(a===void 0)throw Error(i(407));a=a()}else{if(a=n(),Ot===null)throw Error(i(349));(Mi&30)!==0||Mf(l,n,a)}h.memoizedState=a;var v={value:a,getSnapshot:n};return h.queue=v,Vf(Pf.bind(null,l,v,t),[t]),l.flags|=2048,wo(9,Bf.bind(null,l,v,a,n),void 0,null),a},useId:function(){var t=rn(),n=Ot.identifierPrefix;if(lt){var a=fe,l=oe;a=(l&~(1<<32-lr(l)-1)).toString(32)+a,n=":"+n+"R"+a,a=yo++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=V_++,n=":"+n+"r"+a.toString(32)+":";return t.memoizedState=n},unstable_isNewReconciler:!1},K_={readContext:br,useCallback:Kf,useContext:br,useEffect:Dd,useImperativeHandle:Gf,useInsertionEffect:Ff,useLayoutEffect:qf,useMemo:Qf,useReducer:Ad,useRef:Wf,useState:function(){return Ad(vo)},useDebugValue:Md,useDeferredValue:function(t){var n=Sr();return Zf(n,kt.memoizedState,t)},useTransition:function(){var t=Ad(vo)[0],n=Sr().memoizedState;return[t,n]},useMutableSource:Rf,useSyncExternalStore:Df,useId:Yf,unstable_isNewReconciler:!1},Q_={readContext:br,useCallback:Kf,useContext:br,useEffect:Dd,useImperativeHandle:Gf,useInsertionEffect:Ff,useLayoutEffect:qf,useMemo:Qf,useReducer:Rd,useRef:Wf,useState:function(){return Rd(vo)},useDebugValue:Md,useDeferredValue:function(t){var n=Sr();return kt===null?n.memoizedState=t:Zf(n,kt.memoizedState,t)},useTransition:function(){var t=Rd(vo)[0],n=Sr().memoizedState;return[t,n]},useMutableSource:Rf,useSyncExternalStore:Df,useId:Yf,unstable_isNewReconciler:!1};function Mr(t,n){if(t&&t.defaultProps){n=ue({},n),t=t.defaultProps;for(var a in t)n[a]===void 0&&(n[a]=t[a]);return n}return n}function Bd(t,n,a,l){n=t.memoizedState,a=a(l,n),a=a==null?n:ue({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Hu={isMounted:function(t){return(t=t._reactInternals)?Gr(t)===t:!1},enqueueSetState:function(t,n,a){t=t._reactInternals;var l=Yt(),h=si(t),v=_n(l,h);v.payload=n,a!=null&&(v.callback=a),n=ri(t,v,h),n!==null&&(Lr(n,t,h,l),Pu(n,t,h))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var l=Yt(),h=si(t),v=_n(l,h);v.tag=1,v.payload=n,a!=null&&(v.callback=a),n=ri(t,v,h),n!==null&&(Lr(n,t,h,l),Pu(n,t,h))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Yt(),l=si(t),h=_n(a,l);h.tag=2,n!=null&&(h.callback=n),n=ri(t,h,l),n!==null&&(Lr(n,t,l,a),Pu(n,t,l))}};function th(t,n,a,l,h,v,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,v,E):n.prototype&&n.prototype.isPureReactComponent?!Fn(a,l)||!Fn(h,v):!0}function rh(t,n,a){var l=!1,h=en,v=n.contextType;return typeof v=="object"&&v!==null?v=br(v):(h=Vt(n)?vn:zt.current,l=n.contextTypes,v=(l=l!=null)?Jn(t,h):en),n=new n(a,v),t.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Hu,t.stateNode=n,n._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=v),n}function nh(t,n,a,l){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==t&&Hu.enqueueReplaceState(n,n.state,null)}function Pd(t,n,a,l){var h=t.stateNode;h.props=a,h.state=t.memoizedState,h.refs={},Sd(t);var v=n.contextType;typeof v=="object"&&v!==null?h.context=br(v):(v=Vt(n)?vn:zt.current,h.context=Jn(t,v)),h.state=t.memoizedState,v=n.getDerivedStateFromProps,typeof v=="function"&&(Bd(t,n,v,a),h.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(n=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),n!==h.state&&Hu.enqueueReplaceState(h,h.state,null),Lu(t,a,h,l),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function Ya(t,n){try{var a="",l=n;do a+=we(l),l=l.return;while(l);var h=a}catch(v){h=`
Error generating stack: `+v.message+`
`+v.stack}return{value:t,source:n,stack:h,digest:null}}function Ld(t,n,a){return{value:t,source:null,stack:a??null,digest:n??null}}function Ud(t,n){try{console.error(n.value)}catch(a){setTimeout(function(){throw a})}}var Z_=typeof WeakMap=="function"?WeakMap:Map;function ih(t,n,a){a=_n(-1,a),a.tag=3,a.payload={element:null};var l=n.value;return a.callback=function(){Ju||(Ju=!0,tc=l),Ud(t,n)},a}function ah(t,n,a){a=_n(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var h=n.value;a.payload=function(){return l(h)},a.callback=function(){Ud(t,n)}}var v=t.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){Ud(t,n),typeof l!="function"&&(ii===null?ii=new Set([this]):ii.add(this));var E=n.stack;this.componentDidCatch(n.value,{componentStack:E!==null?E:""})}),a}function sh(t,n,a){var l=t.pingCache;if(l===null){l=t.pingCache=new Z_;var h=new Set;l.set(n,h)}else h=l.get(n),h===void 0&&(h=new Set,l.set(n,h));h.has(a)||(h.add(a),t=d2.bind(null,t,n,a),n.then(t,t))}function oh(t){do{var n;if((n=t.tag===13)&&(n=t.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return t;t=t.return}while(t!==null);return null}function uh(t,n,a,l,h){return(t.mode&1)===0?(t===n?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(n=_n(-1,1),n.tag=2,ri(a,n,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=h,t)}var Y_=D.ReactCurrentOwner,tr=!1;function Zt(t,n,a,l){n.child=t===null?Cf(n,null,a,l):Ga(n,t.child,a,l)}function lh(t,n,a,l,h){a=a.render;var v=n.ref;return Qa(n,h),l=Nd(t,n,a,l,v,h),a=Od(),t!==null&&!tr?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~h,$n(t,n,h)):(lt&&a&&Ye(n),n.flags|=1,Zt(t,n,l,h),n.child)}function dh(t,n,a,l,h){if(t===null){var v=a.type;return typeof v=="function"&&!uc(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(n.tag=15,n.type=v,ch(t,n,v,l,h)):(t=al(a.type,null,l,n,n.mode,h),t.ref=n.ref,t.return=n,n.child=t)}if(v=t.child,(t.lanes&h)===0){var E=v.memoizedProps;if(a=a.compare,a=a!==null?a:Fn,a(E,l)&&t.ref===n.ref)return $n(t,n,h)}return n.flags|=1,t=ui(v,l),t.ref=n.ref,t.return=n,n.child=t}function ch(t,n,a,l,h){if(t!==null){var v=t.memoizedProps;if(Fn(v,l)&&t.ref===n.ref)if(tr=!1,n.pendingProps=l=v,(t.lanes&h)!==0)(t.flags&131072)!==0&&(tr=!0);else return n.lanes=t.lanes,$n(t,n,h)}return jd(t,n,a,l,h)}function ph(t,n,a){var l=n.pendingProps,h=l.children,v=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},at(Ja,pr),pr|=a;else{if((a&1073741824)===0)return t=v!==null?v.baseLanes|a:a,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:t,cachePool:null,transitions:null},n.updateQueue=null,at(Ja,pr),pr|=t,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=v!==null?v.baseLanes:a,at(Ja,pr),pr|=l}else v!==null?(l=v.baseLanes|a,n.memoizedState=null):l=a,at(Ja,pr),pr|=l;return Zt(t,n,h,a),n.child}function fh(t,n){var a=n.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(n.flags|=512,n.flags|=2097152)}function jd(t,n,a,l,h){var v=Vt(a)?vn:zt.current;return v=Jn(n,v),Qa(n,h),a=Nd(t,n,a,l,v,h),l=Od(),t!==null&&!tr?(n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~h,$n(t,n,h)):(lt&&l&&Ye(n),n.flags|=1,Zt(t,n,a,h),n.child)}function hh(t,n,a,l,h){if(Vt(a)){var v=!0;Fa(n)}else v=!1;if(Qa(n,h),n.stateNode===null)Ku(t,n),rh(n,a,l),Pd(n,a,l,h),l=!0;else if(t===null){var E=n.stateNode,M=n.memoizedProps;E.props=M;var L=E.context,Z=a.contextType;typeof Z=="object"&&Z!==null?Z=br(Z):(Z=Vt(a)?vn:zt.current,Z=Jn(n,Z));var se=a.getDerivedStateFromProps,le=typeof se=="function"||typeof E.getSnapshotBeforeUpdate=="function";le||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(M!==l||L!==Z)&&nh(n,E,l,Z),ti=!1;var ie=n.memoizedState;E.state=ie,Lu(n,l,E,h),L=n.memoizedState,M!==l||ie!==L||Wt.current||ti?(typeof se=="function"&&(Bd(n,a,se,l),L=n.memoizedState),(M=ti||th(n,a,M,l,ie,L,Z))?(le||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(n.flags|=4194308)):(typeof E.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=L),E.props=l,E.state=L,E.context=Z,l=M):(typeof E.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{E=n.stateNode,zf(t,n),M=n.memoizedProps,Z=n.type===n.elementType?M:Mr(n.type,M),E.props=Z,le=n.pendingProps,ie=E.context,L=a.contextType,typeof L=="object"&&L!==null?L=br(L):(L=Vt(a)?vn:zt.current,L=Jn(n,L));var ve=a.getDerivedStateFromProps;(se=typeof ve=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(M!==le||ie!==L)&&nh(n,E,l,L),ti=!1,ie=n.memoizedState,E.state=ie,Lu(n,l,E,h);var be=n.memoizedState;M!==le||ie!==be||Wt.current||ti?(typeof ve=="function"&&(Bd(n,a,ve,l),be=n.memoizedState),(Z=ti||th(n,a,Z,l,ie,be,L)||!1)?(se||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,be,L),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,be,L)),typeof E.componentDidUpdate=="function"&&(n.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof E.componentDidUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=be),E.props=l,E.state=be,E.context=L,l=Z):(typeof E.componentDidUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(n.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||M===t.memoizedProps&&ie===t.memoizedState||(n.flags|=1024),l=!1)}return Wd(t,n,a,l,v,h)}function Wd(t,n,a,l,h,v){fh(t,n);var E=(n.flags&128)!==0;if(!l&&!E)return h&&Ou(n,a,!1),$n(t,n,v);l=n.stateNode,Y_.current=n;var M=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,t!==null&&E?(n.child=Ga(n,t.child,null,v),n.child=Ga(n,null,M,v)):Zt(t,n,M,v),n.memoizedState=l.state,h&&Ou(n,a,!0),n.child}function mh(t){var n=t.stateNode;n.pendingContext?zu(t,n.pendingContext,n.pendingContext!==n.context):n.context&&zu(t,n.context,!1),kd(t,n.containerInfo)}function gh(t,n,a,l,h){return Ha(),vd(h),n.flags|=256,Zt(t,n,a,l),n.child}var Vd={dehydrated:null,treeContext:null,retryLane:0};function Fd(t){return{baseLanes:t,cachePool:null,transitions:null}}function yh(t,n,a){var l=n.pendingProps,h=vt.current,v=!1,E=(n.flags&128)!==0,M;if((M=E)||(M=t!==null&&t.memoizedState===null?!1:(h&2)!==0),M?(v=!0,n.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),at(vt,h&1),t===null)return yd(n),t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((n.mode&1)===0?n.lanes=1:t.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(E=l.children,t=l.fallback,v?(l=n.mode,v=n.child,E={mode:"hidden",children:E},(l&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=E):v=sl(E,l,0,null),t=ji(t,l,a,null),v.return=n,t.return=n,v.sibling=t,n.child=v,n.child.memoizedState=Fd(a),n.memoizedState=Vd,t):qd(n,E));if(h=t.memoizedState,h!==null&&(M=h.dehydrated,M!==null))return X_(t,n,E,l,M,h,a);if(v){v=l.fallback,E=n.mode,h=t.child,M=h.sibling;var L={mode:"hidden",children:l.children};return(E&1)===0&&n.child!==h?(l=n.child,l.childLanes=0,l.pendingProps=L,n.deletions=null):(l=ui(h,L),l.subtreeFlags=h.subtreeFlags&14680064),M!==null?v=ui(M,v):(v=ji(v,E,a,null),v.flags|=2),v.return=n,l.return=n,l.sibling=v,n.child=l,l=v,v=n.child,E=t.child.memoizedState,E=E===null?Fd(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},v.memoizedState=E,v.childLanes=t.childLanes&~a,n.memoizedState=Vd,l}return v=t.child,t=v.sibling,l=ui(v,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=a),l.return=n,l.sibling=null,t!==null&&(a=n.deletions,a===null?(n.deletions=[t],n.flags|=16):a.push(t)),n.child=l,n.memoizedState=null,l}function qd(t,n){return n=sl({mode:"visible",children:n},t.mode,0,null),n.return=t,t.child=n}function Gu(t,n,a,l){return l!==null&&vd(l),Ga(n,t.child,null,a),t=qd(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function X_(t,n,a,l,h,v,E){if(a)return n.flags&256?(n.flags&=-257,l=Ld(Error(i(422))),Gu(t,n,E,l)):n.memoizedState!==null?(n.child=t.child,n.flags|=128,null):(v=l.fallback,h=n.mode,l=sl({mode:"visible",children:l.children},h,0,null),v=ji(v,h,E,null),v.flags|=2,l.return=n,v.return=n,l.sibling=v,n.child=l,(n.mode&1)!==0&&Ga(n,t.child,null,E),n.child.memoizedState=Fd(E),n.memoizedState=Vd,v);if((n.mode&1)===0)return Gu(t,n,E,null);if(h.data==="$!"){if(l=h.nextSibling&&h.nextSibling.dataset,l)var M=l.dgst;return l=M,v=Error(i(419)),l=Ld(v,l,void 0),Gu(t,n,E,l)}if(M=(E&t.childLanes)!==0,tr||M){if(l=Ot,l!==null){switch(E&-E){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(l.suspendedLanes|E))!==0?0:h,h!==0&&h!==v.retryLane&&(v.retryLane=h,wn(t,h),Lr(l,t,h,-1))}return oc(),l=Ld(Error(i(421))),Gu(t,n,E,l)}return h.data==="$?"?(n.flags|=128,n.child=t.child,n=c2.bind(null,t),h._reactRetry=n,null):(t=v.treeContext,Bt=Xr(h.nextSibling),_t=n,lt=!0,Qt=null,t!==null&&(R[j++]=oe,R[j++]=fe,R[j++]=Y,oe=t.id,fe=t.overflow,Y=n),n=qd(n,l.children),n.flags|=4096,n)}function vh(t,n,a){t.lanes|=n;var l=t.alternate;l!==null&&(l.lanes|=n),xd(t.return,n,a)}function Hd(t,n,a,l,h){var v=t.memoizedState;v===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=l,v.tail=a,v.tailMode=h)}function wh(t,n,a){var l=n.pendingProps,h=l.revealOrder,v=l.tail;if(Zt(t,n,l.children,a),l=vt.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&vh(t,a,n);else if(t.tag===19)vh(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(at(vt,l),(n.mode&1)===0)n.memoizedState=null;else switch(h){case"forwards":for(a=n.child,h=null;a!==null;)t=a.alternate,t!==null&&Uu(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=n.child,n.child=null):(h=a.sibling,a.sibling=null),Hd(n,!1,h,a,v);break;case"backwards":for(a=null,h=n.child,n.child=null;h!==null;){if(t=h.alternate,t!==null&&Uu(t)===null){n.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}Hd(n,!0,a,null,v);break;case"together":Hd(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ku(t,n){(n.mode&1)===0&&t!==null&&(t.alternate=null,n.alternate=null,n.flags|=2)}function $n(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Bi|=n.lanes,(a&n.childLanes)===0)return null;if(t!==null&&n.child!==t.child)throw Error(i(153));if(n.child!==null){for(t=n.child,a=ui(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=ui(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function J_(t,n,a){switch(n.tag){case 3:mh(n),Ha();break;case 5:Af(n);break;case 1:Vt(n.type)&&Fa(n);break;case 4:kd(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,h=n.memoizedProps.value;at(Mu,l._currentValue),l._currentValue=h;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(at(vt,vt.current&1),n.flags|=128,null):(a&n.child.childLanes)!==0?yh(t,n,a):(at(vt,vt.current&1),t=$n(t,n,a),t!==null?t.sibling:null);at(vt,vt.current&1);break;case 19:if(l=(a&n.childLanes)!==0,(t.flags&128)!==0){if(l)return wh(t,n,a);n.flags|=128}if(h=n.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),at(vt,vt.current),l)break;return null;case 22:case 23:return n.lanes=0,ph(t,n,a)}return $n(t,n,a)}var _h,Gd,$h,xh;_h=function(t,n){for(var a=n.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Gd=function(){},$h=function(t,n,a,l){var h=t.memoizedProps;if(h!==l){t=n.stateNode,Di(tn.current);var v=null;switch(a){case"input":h=Ve(t,h),l=Ve(t,l),v=[];break;case"select":h=ue({},h,{value:void 0}),l=ue({},l,{value:void 0}),v=[];break;case"textarea":h=It(t,h),l=It(t,l),v=[];break;default:typeof h.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=ja)}vi(a,l);var E;a=null;for(Z in h)if(!l.hasOwnProperty(Z)&&h.hasOwnProperty(Z)&&h[Z]!=null)if(Z==="style"){var M=h[Z];for(E in M)M.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else Z!=="dangerouslySetInnerHTML"&&Z!=="children"&&Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&Z!=="autoFocus"&&(o.hasOwnProperty(Z)?v||(v=[]):(v=v||[]).push(Z,null));for(Z in l){var L=l[Z];if(M=h!=null?h[Z]:void 0,l.hasOwnProperty(Z)&&L!==M&&(L!=null||M!=null))if(Z==="style")if(M){for(E in M)!M.hasOwnProperty(E)||L&&L.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in L)L.hasOwnProperty(E)&&M[E]!==L[E]&&(a||(a={}),a[E]=L[E])}else a||(v||(v=[]),v.push(Z,a)),a=L;else Z==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,M=M?M.__html:void 0,L!=null&&M!==L&&(v=v||[]).push(Z,L)):Z==="children"?typeof L!="string"&&typeof L!="number"||(v=v||[]).push(Z,""+L):Z!=="suppressContentEditableWarning"&&Z!=="suppressHydrationWarning"&&(o.hasOwnProperty(Z)?(L!=null&&Z==="onScroll"&&it("scroll",t),v||M===L||(v=[])):(v=v||[]).push(Z,L))}a&&(v=v||[]).push("style",a);var Z=v;(n.updateQueue=Z)&&(n.flags|=4)}},xh=function(t,n,a,l){a!==l&&(n.flags|=4)};function _o(t,n){if(!lt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function qt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(n)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&14680064,l|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=l,t.childLanes=a,n}function e2(t,n,a){var l=n.pendingProps;switch(et(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return Vt(n.type)&&Va(),qt(n),null;case 3:return l=n.stateNode,Za(),ut(Wt),ut(zt),Cd(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Ru(n)?n.flags|=4:t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qt!==null&&(ic(Qt),Qt=null))),Gd(t,n),qt(n),null;case 5:Ed(n);var h=Di(mo.current);if(a=n.type,t!==null&&n.stateNode!=null)$h(t,n,a,l,h),t.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(i(166));return qt(n),null}if(t=Di(tn.current),Ru(n)){l=n.stateNode,a=n.type;var v=n.memoizedProps;switch(l[xr]=n,l[Oi]=v,t=(n.mode&1)!==0,a){case"dialog":it("cancel",l),it("close",l);break;case"iframe":case"object":case"embed":it("load",l);break;case"video":case"audio":for(h=0;h<Hn.length;h++)it(Hn[h],l);break;case"source":it("error",l);break;case"img":case"image":case"link":it("error",l),it("load",l);break;case"details":it("toggle",l);break;case"input":st(l,v),it("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!v.multiple},it("invalid",l);break;case"textarea":sr(l,v),it("invalid",l)}vi(a,v),h=null;for(var E in v)if(v.hasOwnProperty(E)){var M=v[E];E==="children"?typeof M=="string"?l.textContent!==M&&(v.suppressHydrationWarning!==!0&&Qn(l.textContent,M,t),h=["children",M]):typeof M=="number"&&l.textContent!==""+M&&(v.suppressHydrationWarning!==!0&&Qn(l.textContent,M,t),h=["children",""+M]):o.hasOwnProperty(E)&&M!=null&&E==="onScroll"&&it("scroll",l)}switch(a){case"input":Gt(l),De(l,v,!0);break;case"textarea":Gt(l),on(l);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(l.onclick=ja)}l=h,n.updateQueue=l,l!==null&&(n.flags|=4)}else{E=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=or(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[xr]=n,t[Oi]=l,_h(t,n,!1,!1),n.stateNode=t;e:{switch(E=ps(a,l),a){case"dialog":it("cancel",t),it("close",t),h=l;break;case"iframe":case"object":case"embed":it("load",t),h=l;break;case"video":case"audio":for(h=0;h<Hn.length;h++)it(Hn[h],t);h=l;break;case"source":it("error",t),h=l;break;case"img":case"image":case"link":it("error",t),it("load",t),h=l;break;case"details":it("toggle",t),h=l;break;case"input":st(t,l),h=Ve(t,l),it("invalid",t);break;case"option":h=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},h=ue({},l,{value:void 0}),it("invalid",t);break;case"textarea":sr(t,l),h=It(t,l),it("invalid",t);break;default:h=l}vi(a,h),M=h;for(v in M)if(M.hasOwnProperty(v)){var L=M[v];v==="style"?ds(t,L):v==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,L!=null&&gi(t,L)):v==="children"?typeof L=="string"?(a!=="textarea"||L!=="")&&yi(t,L):typeof L=="number"&&yi(t,""+L):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?L!=null&&v==="onScroll"&&it("scroll",t):L!=null&&A(t,v,L,E))}switch(a){case"input":Gt(t),De(t,l,!1);break;case"textarea":Gt(t),on(t);break;case"option":l.value!=null&&t.setAttribute("value",""+ze(l.value));break;case"select":t.multiple=!!l.multiple,v=l.value,v!=null?ct(t,!!l.multiple,v,!1):l.defaultValue!=null&&ct(t,!!l.multiple,l.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=ja)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return qt(n),null;case 6:if(t&&n.stateNode!=null)xh(t,n,t.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(i(166));if(a=Di(mo.current),Di(tn.current),Ru(n)){if(l=n.stateNode,a=n.memoizedProps,l[xr]=n,(v=l.nodeValue!==a)&&(t=_t,t!==null))switch(t.tag){case 3:Qn(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qn(l.nodeValue,a,(t.mode&1)!==0)}v&&(n.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[xr]=n,n.stateNode=l}return qt(n),null;case 13:if(ut(vt),l=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(lt&&Bt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)kf(),Ha(),n.flags|=98560,v=!1;else if(v=Ru(n),l!==null&&l.dehydrated!==null){if(t===null){if(!v)throw Error(i(318));if(v=n.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(i(317));v[xr]=n}else Ha(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),v=!1}else Qt!==null&&(ic(Qt),Qt=null),v=!0;if(!v)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=a,n):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(t===null||(vt.current&1)!==0?Et===0&&(Et=3):oc())),n.updateQueue!==null&&(n.flags|=4),qt(n),null);case 4:return Za(),Gd(t,n),t===null&&Gn(n.stateNode.containerInfo),qt(n),null;case 10:return $d(n.type._context),qt(n),null;case 17:return Vt(n.type)&&Va(),qt(n),null;case 19:if(ut(vt),v=n.memoizedState,v===null)return qt(n),null;if(l=(n.flags&128)!==0,E=v.rendering,E===null)if(l)_o(v,!1);else{if(Et!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(E=Uu(t),E!==null){for(n.flags|=128,_o(v,!1),l=E.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=a,a=n.child;a!==null;)v=a,t=l,v.flags&=14680066,E=v.alternate,E===null?(v.childLanes=0,v.lanes=t,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=E.childLanes,v.lanes=E.lanes,v.child=E.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=E.memoizedProps,v.memoizedState=E.memoizedState,v.updateQueue=E.updateQueue,v.type=E.type,t=E.dependencies,v.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return at(vt,vt.current&1|2),n.child}t=t.sibling}v.tail!==null&&yt()>es&&(n.flags|=128,l=!0,_o(v,!1),n.lanes=4194304)}else{if(!l)if(t=Uu(E),t!==null){if(n.flags|=128,l=!0,a=t.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),_o(v,!0),v.tail===null&&v.tailMode==="hidden"&&!E.alternate&&!lt)return qt(n),null}else 2*yt()-v.renderingStartTime>es&&a!==1073741824&&(n.flags|=128,l=!0,_o(v,!1),n.lanes=4194304);v.isBackwards?(E.sibling=n.child,n.child=E):(a=v.last,a!==null?a.sibling=E:n.child=E,v.last=E)}return v.tail!==null?(n=v.tail,v.rendering=n,v.tail=n.sibling,v.renderingStartTime=yt(),n.sibling=null,a=vt.current,at(vt,l?a&1|2:a&1),n):(qt(n),null);case 22:case 23:return sc(),l=n.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(pr&1073741824)!==0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function t2(t,n){switch(et(n),n.tag){case 1:return Vt(n.type)&&Va(),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Za(),ut(Wt),ut(zt),Cd(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 5:return Ed(n),null;case 13:if(ut(vt),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Ha()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ut(vt),null;case 4:return Za(),null;case 10:return $d(n.type._context),null;case 22:case 23:return sc(),null;case 24:return null;default:return null}}var Qu=!1,Ht=!1,r2=typeof WeakSet=="function"?WeakSet:Set,$e=null;function Xa(t,n){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){$t(t,n,l)}else a.current=null}function Kd(t,n,a){try{a()}catch(l){$t(t,n,l)}}var bh=!1;function n2(t,n){if(no=wa,t=Fs(),Aa(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,v=l.focusNode;l=l.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var E=0,M=-1,L=-1,Z=0,se=0,le=t,ie=null;t:for(;;){for(var ve;le!==a||h!==0&&le.nodeType!==3||(M=E+h),le!==v||l!==0&&le.nodeType!==3||(L=E+l),le.nodeType===3&&(E+=le.nodeValue.length),(ve=le.firstChild)!==null;)ie=le,le=ve;for(;;){if(le===t)break t;if(ie===a&&++Z===h&&(M=E),ie===v&&++se===l&&(L=E),(ve=le.nextSibling)!==null)break;le=ie,ie=le.parentNode}le=ve}a=M===-1||L===-1?null:{start:M,end:L}}else a=null}a=a||{start:0,end:0}}else a=null;for(io={focusedElem:t,selectionRange:a},wa=!1,$e=n;$e!==null;)if(n=$e,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,$e=t;else for(;$e!==null;){n=$e;try{var be=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(be!==null){var Ee=be.memoizedProps,xt=be.memoizedState,q=n.stateNode,W=q.getSnapshotBeforeUpdate(n.elementType===n.type?Ee:Mr(n.type,Ee),xt);q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var H=n.stateNode.containerInfo;H.nodeType===1?H.textContent="":H.nodeType===9&&H.documentElement&&H.removeChild(H.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(ce){$t(n,n.return,ce)}if(t=n.sibling,t!==null){t.return=n.return,$e=t;break}$e=n.return}return be=bh,bh=!1,be}function $o(t,n,a){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var h=l=l.next;do{if((h.tag&t)===t){var v=h.destroy;h.destroy=void 0,v!==void 0&&Kd(n,a,v)}h=h.next}while(h!==l)}}function Zu(t,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==n)}}function Qd(t){var n=t.ref;if(n!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof n=="function"?n(t):n.current=t}}function Sh(t){var n=t.alternate;n!==null&&(t.alternate=null,Sh(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&(delete n[xr],delete n[Oi],delete n[uo],delete n[hd],delete n[md])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function kh(t){return t.tag===5||t.tag===3||t.tag===4}function Eh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||kh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zd(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(t,n):a.insertBefore(t,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(t,a)):(n=a,n.appendChild(t)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ja));else if(l!==4&&(t=t.child,t!==null))for(Zd(t,n,a),t=t.sibling;t!==null;)Zd(t,n,a),t=t.sibling}function Yd(t,n,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(Yd(t,n,a),t=t.sibling;t!==null;)Yd(t,n,a),t=t.sibling}var Pt=null,Br=!1;function ni(t,n,a){for(a=a.child;a!==null;)Th(t,n,a),a=a.sibling}function Th(t,n,a){if($r&&typeof $r.onCommitFiberUnmount=="function")try{$r.onCommitFiberUnmount(ca,a)}catch{}switch(a.tag){case 5:Ht||Xa(a,n);case 6:var l=Pt,h=Br;Pt=null,ni(t,n,a),Pt=l,Br=h,Pt!==null&&(Br?(t=Pt,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):Pt.removeChild(a.stateNode));break;case 18:Pt!==null&&(Br?(t=Pt,a=a.stateNode,t.nodeType===8?oo(t.parentNode,a):t.nodeType===1&&oo(t,a),dn(t)):oo(Pt,a.stateNode));break;case 4:l=Pt,h=Br,Pt=a.stateNode.containerInfo,Br=!0,ni(t,n,a),Pt=l,Br=h;break;case 0:case 11:case 14:case 15:if(!Ht&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){h=l=l.next;do{var v=h,E=v.destroy;v=v.tag,E!==void 0&&((v&2)!==0||(v&4)!==0)&&Kd(a,n,E),h=h.next}while(h!==l)}ni(t,n,a);break;case 1:if(!Ht&&(Xa(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(M){$t(a,n,M)}ni(t,n,a);break;case 21:ni(t,n,a);break;case 22:a.mode&1?(Ht=(l=Ht)||a.memoizedState!==null,ni(t,n,a),Ht=l):ni(t,n,a);break;default:ni(t,n,a)}}function Ch(t){var n=t.updateQueue;if(n!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new r2),n.forEach(function(l){var h=p2.bind(null,t,l);a.has(l)||(a.add(l),l.then(h,h))})}}function Pr(t,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l];try{var v=t,E=n,M=E;e:for(;M!==null;){switch(M.tag){case 5:Pt=M.stateNode,Br=!1;break e;case 3:Pt=M.stateNode.containerInfo,Br=!0;break e;case 4:Pt=M.stateNode.containerInfo,Br=!0;break e}M=M.return}if(Pt===null)throw Error(i(160));Th(v,E,h),Pt=null,Br=!1;var L=h.alternate;L!==null&&(L.return=null),h.return=null}catch(Z){$t(h,n,Z)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ih(n,t),n=n.sibling}function Ih(t,n){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Pr(n,t),nn(t),l&4){try{$o(3,t,t.return),Zu(3,t)}catch(Ee){$t(t,t.return,Ee)}try{$o(5,t,t.return)}catch(Ee){$t(t,t.return,Ee)}}break;case 1:Pr(n,t),nn(t),l&512&&a!==null&&Xa(a,a.return);break;case 5:if(Pr(n,t),nn(t),l&512&&a!==null&&Xa(a,a.return),t.flags&32){var h=t.stateNode;try{yi(h,"")}catch(Ee){$t(t,t.return,Ee)}}if(l&4&&(h=t.stateNode,h!=null)){var v=t.memoizedProps,E=a!==null?a.memoizedProps:v,M=t.type,L=t.updateQueue;if(t.updateQueue=null,L!==null)try{M==="input"&&v.type==="radio"&&v.name!=null&&rt(h,v),ps(M,E);var Z=ps(M,v);for(E=0;E<L.length;E+=2){var se=L[E],le=L[E+1];se==="style"?ds(h,le):se==="dangerouslySetInnerHTML"?gi(h,le):se==="children"?yi(h,le):A(h,se,le,Z)}switch(M){case"input":St(h,v);break;case"textarea":Cn(h,v);break;case"select":var ie=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!v.multiple;var ve=v.value;ve!=null?ct(h,!!v.multiple,ve,!1):ie!==!!v.multiple&&(v.defaultValue!=null?ct(h,!!v.multiple,v.defaultValue,!0):ct(h,!!v.multiple,v.multiple?[]:"",!1))}h[Oi]=v}catch(Ee){$t(t,t.return,Ee)}}break;case 6:if(Pr(n,t),nn(t),l&4){if(t.stateNode===null)throw Error(i(162));h=t.stateNode,v=t.memoizedProps;try{h.nodeValue=v}catch(Ee){$t(t,t.return,Ee)}}break;case 3:if(Pr(n,t),nn(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{dn(n.containerInfo)}catch(Ee){$t(t,t.return,Ee)}break;case 4:Pr(n,t),nn(t);break;case 13:Pr(n,t),nn(t),h=t.child,h.flags&8192&&(v=h.memoizedState!==null,h.stateNode.isHidden=v,!v||h.alternate!==null&&h.alternate.memoizedState!==null||(ec=yt())),l&4&&Ch(t);break;case 22:if(se=a!==null&&a.memoizedState!==null,t.mode&1?(Ht=(Z=Ht)||se,Pr(n,t),Ht=Z):Pr(n,t),nn(t),l&8192){if(Z=t.memoizedState!==null,(t.stateNode.isHidden=Z)&&!se&&(t.mode&1)!==0)for($e=t,se=t.child;se!==null;){for(le=$e=se;$e!==null;){switch(ie=$e,ve=ie.child,ie.tag){case 0:case 11:case 14:case 15:$o(4,ie,ie.return);break;case 1:Xa(ie,ie.return);var be=ie.stateNode;if(typeof be.componentWillUnmount=="function"){l=ie,a=ie.return;try{n=l,be.props=n.memoizedProps,be.state=n.memoizedState,be.componentWillUnmount()}catch(Ee){$t(l,a,Ee)}}break;case 5:Xa(ie,ie.return);break;case 22:if(ie.memoizedState!==null){Oh(le);continue}}ve!==null?(ve.return=ie,$e=ve):Oh(le)}se=se.sibling}e:for(se=null,le=t;;){if(le.tag===5){if(se===null){se=le;try{h=le.stateNode,Z?(v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(M=le.stateNode,L=le.memoizedProps.style,E=L!=null&&L.hasOwnProperty("display")?L.display:null,M.style.display=ls("display",E))}catch(Ee){$t(t,t.return,Ee)}}}else if(le.tag===6){if(se===null)try{le.stateNode.nodeValue=Z?"":le.memoizedProps}catch(Ee){$t(t,t.return,Ee)}}else if((le.tag!==22&&le.tag!==23||le.memoizedState===null||le===t)&&le.child!==null){le.child.return=le,le=le.child;continue}if(le===t)break e;for(;le.sibling===null;){if(le.return===null||le.return===t)break e;se===le&&(se=null),le=le.return}se===le&&(se=null),le.sibling.return=le.return,le=le.sibling}}break;case 19:Pr(n,t),nn(t),l&4&&Ch(t);break;case 21:break;default:Pr(n,t),nn(t)}}function nn(t){var n=t.flags;if(n&2){try{e:{for(var a=t.return;a!==null;){if(kh(a)){var l=a;break e}a=a.return}throw Error(i(160))}switch(l.tag){case 5:var h=l.stateNode;l.flags&32&&(yi(h,""),l.flags&=-33);var v=Eh(t);Yd(t,v,h);break;case 3:case 4:var E=l.stateNode.containerInfo,M=Eh(t);Zd(t,M,E);break;default:throw Error(i(161))}}catch(L){$t(t,t.return,L)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function i2(t,n,a){$e=t,zh(t)}function zh(t,n,a){for(var l=(t.mode&1)!==0;$e!==null;){var h=$e,v=h.child;if(h.tag===22&&l){var E=h.memoizedState!==null||Qu;if(!E){var M=h.alternate,L=M!==null&&M.memoizedState!==null||Ht;M=Qu;var Z=Ht;if(Qu=E,(Ht=L)&&!Z)for($e=h;$e!==null;)E=$e,L=E.child,E.tag===22&&E.memoizedState!==null?Ah(h):L!==null?(L.return=E,$e=L):Ah(h);for(;v!==null;)$e=v,zh(v),v=v.sibling;$e=h,Qu=M,Ht=Z}Nh(t)}else(h.subtreeFlags&8772)!==0&&v!==null?(v.return=h,$e=v):Nh(t)}}function Nh(t){for(;$e!==null;){var n=$e;if((n.flags&8772)!==0){var a=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ht||Zu(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!Ht)if(a===null)l.componentDidMount();else{var h=n.elementType===n.type?a.memoizedProps:Mr(n.type,a.memoizedProps);l.componentDidUpdate(h,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var v=n.updateQueue;v!==null&&Of(n,v,l);break;case 3:var E=n.updateQueue;if(E!==null){if(a=null,n.child!==null)switch(n.child.tag){case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}Of(n,E,a)}break;case 5:var M=n.stateNode;if(a===null&&n.flags&4){a=M;var L=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":L.autoFocus&&a.focus();break;case"img":L.src&&(a.src=L.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var Z=n.alternate;if(Z!==null){var se=Z.memoizedState;if(se!==null){var le=se.dehydrated;le!==null&&dn(le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Ht||n.flags&512&&Qd(n)}catch(ie){$t(n,n.return,ie)}}if(n===t){$e=null;break}if(a=n.sibling,a!==null){a.return=n.return,$e=a;break}$e=n.return}}function Oh(t){for(;$e!==null;){var n=$e;if(n===t){$e=null;break}var a=n.sibling;if(a!==null){a.return=n.return,$e=a;break}$e=n.return}}function Ah(t){for(;$e!==null;){var n=$e;try{switch(n.tag){case 0:case 11:case 15:var a=n.return;try{Zu(4,n)}catch(L){$t(n,a,L)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var h=n.return;try{l.componentDidMount()}catch(L){$t(n,h,L)}}var v=n.return;try{Qd(n)}catch(L){$t(n,v,L)}break;case 5:var E=n.return;try{Qd(n)}catch(L){$t(n,E,L)}}}catch(L){$t(n,n.return,L)}if(n===t){$e=null;break}var M=n.sibling;if(M!==null){M.return=n.return,$e=M;break}$e=n.return}}var a2=Math.ceil,Yu=D.ReactCurrentDispatcher,Xd=D.ReactCurrentOwner,kr=D.ReactCurrentBatchConfig,Xe=0,Ot=null,bt=null,Lt=0,pr=0,Ja=Jr(0),Et=0,xo=null,Bi=0,Xu=0,Jd=0,bo=null,rr=null,ec=0,es=1/0,xn=null,Ju=!1,tc=null,ii=null,el=!1,ai=null,tl=0,So=0,rc=null,rl=-1,nl=0;function Yt(){return(Xe&6)!==0?yt():rl!==-1?rl:rl=yt()}function si(t){return(t.mode&1)===0?1:(Xe&2)!==0&&Lt!==0?Lt&-Lt:W_.transition!==null?(nl===0&&(nl=Jo()),nl):(t=Qe,t!==0||(t=window.event,t=t===void 0?16:ou(t.type)),t)}function Lr(t,n,a,l){if(50<So)throw So=0,rc=null,Error(i(185));$i(t,a,l),((Xe&2)===0||t!==Ot)&&(t===Ot&&((Xe&2)===0&&(Xu|=a),Et===4&&oi(t,Lt)),nr(t,l),a===1&&Xe===0&&(n.mode&1)===0&&(es=yt()+500,qa&&p()))}function nr(t,n){var a=t.callbackNode;Gl(t,n);var l=fa(t,t===Ot?Lt:0);if(l===0)a!==null&&_r(a),t.callbackNode=null,t.callbackPriority=0;else if(n=l&-l,t.callbackPriority!==n){if(a!=null&&_r(a),n===1)t.tag===0?Au(Dh.bind(null,t)):co(Dh.bind(null,t)),pd(function(){(Xe&6)===0&&p()}),a=null;else{switch(eu(l)){case 1:a=Ir;break;case 4:a=la;break;case 16:a=Mt;break;case 536870912:a=da;break;default:a=Mt}a=Vh(a,Rh.bind(null,t))}t.callbackPriority=n,t.callbackNode=a}}function Rh(t,n){if(rl=-1,nl=0,(Xe&6)!==0)throw Error(i(327));var a=t.callbackNode;if(ts()&&t.callbackNode!==a)return null;var l=fa(t,t===Ot?Lt:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||n)n=il(t,l);else{n=l;var h=Xe;Xe|=2;var v=Bh();(Ot!==t||Lt!==n)&&(xn=null,es=yt()+500,Li(t,n));do try{u2();break}catch(M){Mh(t,M)}while(!0);_d(),Yu.current=v,Xe=h,bt!==null?n=0:(Ot=null,Lt=0,n=Et)}if(n!==0){if(n===2&&(h=$s(t),h!==0&&(l=h,n=nc(t,h))),n===1)throw a=xo,Li(t,0),oi(t,l),nr(t,yt()),a;if(n===6)oi(t,l);else{if(h=t.current.alternate,(l&30)===0&&!s2(h)&&(n=il(t,l),n===2&&(v=$s(t),v!==0&&(l=v,n=nc(t,v))),n===1))throw a=xo,Li(t,0),oi(t,l),nr(t,yt()),a;switch(t.finishedWork=h,t.finishedLanes=l,n){case 0:case 1:throw Error(i(345));case 2:Ui(t,rr,xn);break;case 3:if(oi(t,l),(l&130023424)===l&&(n=ec+500-yt(),10<n)){if(fa(t,0)!==0)break;if(h=t.suspendedLanes,(h&l)!==l){Yt(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=so(Ui.bind(null,t,rr,xn),n);break}Ui(t,rr,xn);break;case 4:if(oi(t,l),(l&4194240)===l)break;for(n=t.eventTimes,h=-1;0<l;){var E=31-lr(l);v=1<<E,E=n[E],E>h&&(h=E),l&=~v}if(l=h,l=yt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*a2(l/1960))-l,10<l){t.timeoutHandle=so(Ui.bind(null,t,rr,xn),l);break}Ui(t,rr,xn);break;case 5:Ui(t,rr,xn);break;default:throw Error(i(329))}}}return nr(t,yt()),t.callbackNode===a?Rh.bind(null,t):null}function nc(t,n){var a=bo;return t.current.memoizedState.isDehydrated&&(Li(t,n).flags|=256),t=il(t,n),t!==2&&(n=rr,rr=a,n!==null&&ic(n)),t}function ic(t){rr===null?rr=t:rr.push.apply(rr,t)}function s2(t){for(var n=t;;){if(n.flags&16384){var a=n.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var h=a[l],v=h.getSnapshot;h=h.value;try{if(!er(v(),h))return!1}catch{return!1}}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function oi(t,n){for(n&=~Jd,n&=~Xu,t.suspendedLanes|=n,t.pingedLanes&=~n,t=t.expirationTimes;0<n;){var a=31-lr(n),l=1<<a;t[a]=-1,n&=~l}}function Dh(t){if((Xe&6)!==0)throw Error(i(327));ts();var n=fa(t,0);if((n&1)===0)return nr(t,yt()),null;var a=il(t,n);if(t.tag!==0&&a===2){var l=$s(t);l!==0&&(n=l,a=nc(t,l))}if(a===1)throw a=xo,Li(t,0),oi(t,n),nr(t,yt()),a;if(a===6)throw Error(i(345));return t.finishedWork=t.current.alternate,t.finishedLanes=n,Ui(t,rr,xn),nr(t,yt()),null}function ac(t,n){var a=Xe;Xe|=1;try{return t(n)}finally{Xe=a,Xe===0&&(es=yt()+500,qa&&p())}}function Pi(t){ai!==null&&ai.tag===0&&(Xe&6)===0&&ts();var n=Xe;Xe|=1;var a=kr.transition,l=Qe;try{if(kr.transition=null,Qe=1,t)return t()}finally{Qe=l,kr.transition=a,Xe=n,(Xe&6)===0&&p()}}function sc(){pr=Ja.current,ut(Ja)}function Li(t,n){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,cd(a)),bt!==null)for(a=bt.return;a!==null;){var l=a;switch(et(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Va();break;case 3:Za(),ut(Wt),ut(zt),Cd();break;case 5:Ed(l);break;case 4:Za();break;case 13:ut(vt);break;case 19:ut(vt);break;case 10:$d(l.type._context);break;case 22:case 23:sc()}a=a.return}if(Ot=t,bt=t=ui(t.current,null),Lt=pr=n,Et=0,xo=null,Jd=Xu=Bi=0,rr=bo=null,Ri!==null){for(n=0;n<Ri.length;n++)if(a=Ri[n],l=a.interleaved,l!==null){a.interleaved=null;var h=l.next,v=a.pending;if(v!==null){var E=v.next;v.next=h,l.next=E}a.pending=l}Ri=null}return t}function Mh(t,n){do{var a=bt;try{if(_d(),ju.current=qu,Wu){for(var l=wt.memoizedState;l!==null;){var h=l.queue;h!==null&&(h.pending=null),l=l.next}Wu=!1}if(Mi=0,Nt=kt=wt=null,go=!1,yo=0,Xd.current=null,a===null||a.return===null){Et=1,xo=n,bt=null;break}e:{var v=t,E=a.return,M=a,L=n;if(n=Lt,M.flags|=32768,L!==null&&typeof L=="object"&&typeof L.then=="function"){var Z=L,se=M,le=se.tag;if((se.mode&1)===0&&(le===0||le===11||le===15)){var ie=se.alternate;ie?(se.updateQueue=ie.updateQueue,se.memoizedState=ie.memoizedState,se.lanes=ie.lanes):(se.updateQueue=null,se.memoizedState=null)}var ve=oh(E);if(ve!==null){ve.flags&=-257,uh(ve,E,M,v,n),ve.mode&1&&sh(v,Z,n),n=ve,L=Z;var be=n.updateQueue;if(be===null){var Ee=new Set;Ee.add(L),n.updateQueue=Ee}else be.add(L);break e}else{if((n&1)===0){sh(v,Z,n),oc();break e}L=Error(i(426))}}else if(lt&&M.mode&1){var xt=oh(E);if(xt!==null){(xt.flags&65536)===0&&(xt.flags|=256),uh(xt,E,M,v,n),vd(Ya(L,M));break e}}v=L=Ya(L,M),Et!==4&&(Et=2),bo===null?bo=[v]:bo.push(v),v=E;do{switch(v.tag){case 3:v.flags|=65536,n&=-n,v.lanes|=n;var q=ih(v,L,n);Nf(v,q);break e;case 1:M=L;var W=v.type,H=v.stateNode;if((v.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||H!==null&&typeof H.componentDidCatch=="function"&&(ii===null||!ii.has(H)))){v.flags|=65536,n&=-n,v.lanes|=n;var ce=ah(v,M,n);Nf(v,ce);break e}}v=v.return}while(v!==null)}Lh(a)}catch(Ce){n=Ce,bt===a&&a!==null&&(bt=a=a.return);continue}break}while(!0)}function Bh(){var t=Yu.current;return Yu.current=qu,t===null?qu:t}function oc(){(Et===0||Et===3||Et===2)&&(Et=4),Ot===null||(Bi&268435455)===0&&(Xu&268435455)===0||oi(Ot,Lt)}function il(t,n){var a=Xe;Xe|=2;var l=Bh();(Ot!==t||Lt!==n)&&(xn=null,Li(t,n));do try{o2();break}catch(h){Mh(t,h)}while(!0);if(_d(),Xe=a,Yu.current=l,bt!==null)throw Error(i(261));return Ot=null,Lt=0,Et}function o2(){for(;bt!==null;)Ph(bt)}function u2(){for(;bt!==null&&!Yo();)Ph(bt)}function Ph(t){var n=Wh(t.alternate,t,pr);t.memoizedProps=t.pendingProps,n===null?Lh(t):bt=n,Xd.current=null}function Lh(t){var n=t;do{var a=n.alternate;if(t=n.return,(n.flags&32768)===0){if(a=e2(a,n,pr),a!==null){bt=a;return}}else{if(a=t2(a,n),a!==null){a.flags&=32767,bt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Et=6,bt=null;return}}if(n=n.sibling,n!==null){bt=n;return}bt=n=t}while(n!==null);Et===0&&(Et=5)}function Ui(t,n,a){var l=Qe,h=kr.transition;try{kr.transition=null,Qe=1,l2(t,n,a,l)}finally{kr.transition=h,Qe=l}return null}function l2(t,n,a,l){do ts();while(ai!==null);if((Xe&6)!==0)throw Error(i(327));a=t.finishedWork;var h=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(i(177));t.callbackNode=null,t.callbackPriority=0;var v=a.lanes|a.childLanes;if(Kl(t,v),t===Ot&&(bt=Ot=null,Lt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||el||(el=!0,Vh(Mt,function(){return ts(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=kr.transition,kr.transition=null;var E=Qe;Qe=1;var M=Xe;Xe|=4,Xd.current=null,n2(t,a),Ih(a,t),$u(io),wa=!!no,io=no=null,t.current=a,i2(a),Wl(),Xe=M,Qe=E,kr.transition=v}else t.current=a;if(el&&(el=!1,ai=t,tl=h),v=t.pendingLanes,v===0&&(ii=null),Vl(a.stateNode),nr(t,yt()),n!==null)for(l=t.onRecoverableError,a=0;a<n.length;a++)h=n[a],l(h.value,{componentStack:h.stack,digest:h.digest});if(Ju)throw Ju=!1,t=tc,tc=null,t;return(tl&1)!==0&&t.tag!==0&&ts(),v=t.pendingLanes,(v&1)!==0?t===rc?So++:(So=0,rc=t):So=0,p(),null}function ts(){if(ai!==null){var t=eu(tl),n=kr.transition,a=Qe;try{if(kr.transition=null,Qe=16>t?16:t,ai===null)var l=!1;else{if(t=ai,ai=null,tl=0,(Xe&6)!==0)throw Error(i(331));var h=Xe;for(Xe|=4,$e=t.current;$e!==null;){var v=$e,E=v.child;if(($e.flags&16)!==0){var M=v.deletions;if(M!==null){for(var L=0;L<M.length;L++){var Z=M[L];for($e=Z;$e!==null;){var se=$e;switch(se.tag){case 0:case 11:case 15:$o(8,se,v)}var le=se.child;if(le!==null)le.return=se,$e=le;else for(;$e!==null;){se=$e;var ie=se.sibling,ve=se.return;if(Sh(se),se===Z){$e=null;break}if(ie!==null){ie.return=ve,$e=ie;break}$e=ve}}}var be=v.alternate;if(be!==null){var Ee=be.child;if(Ee!==null){be.child=null;do{var xt=Ee.sibling;Ee.sibling=null,Ee=xt}while(Ee!==null)}}$e=v}}if((v.subtreeFlags&2064)!==0&&E!==null)E.return=v,$e=E;else e:for(;$e!==null;){if(v=$e,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:$o(9,v,v.return)}var q=v.sibling;if(q!==null){q.return=v.return,$e=q;break e}$e=v.return}}var W=t.current;for($e=W;$e!==null;){E=$e;var H=E.child;if((E.subtreeFlags&2064)!==0&&H!==null)H.return=E,$e=H;else e:for(E=W;$e!==null;){if(M=$e,(M.flags&2048)!==0)try{switch(M.tag){case 0:case 11:case 15:Zu(9,M)}}catch(Ce){$t(M,M.return,Ce)}if(M===E){$e=null;break e}var ce=M.sibling;if(ce!==null){ce.return=M.return,$e=ce;break e}$e=M.return}}if(Xe=h,p(),$r&&typeof $r.onPostCommitFiberRoot=="function")try{$r.onPostCommitFiberRoot(ca,t)}catch{}l=!0}return l}finally{Qe=a,kr.transition=n}}return!1}function Uh(t,n,a){n=Ya(a,n),n=ih(t,n,1),t=ri(t,n,1),n=Yt(),t!==null&&($i(t,1,n),nr(t,n))}function $t(t,n,a){if(t.tag===3)Uh(t,t,a);else for(;n!==null;){if(n.tag===3){Uh(n,t,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ii===null||!ii.has(l))){t=Ya(a,t),t=ah(n,t,1),n=ri(n,t,1),t=Yt(),n!==null&&($i(n,1,t),nr(n,t));break}}n=n.return}}function d2(t,n,a){var l=t.pingCache;l!==null&&l.delete(n),n=Yt(),t.pingedLanes|=t.suspendedLanes&a,Ot===t&&(Lt&a)===a&&(Et===4||Et===3&&(Lt&130023424)===Lt&&500>yt()-ec?Li(t,0):Jd|=a),nr(t,n)}function jh(t,n){n===0&&((t.mode&1)===0?n=1:(n=pa,pa<<=1,(pa&130023424)===0&&(pa=4194304)));var a=Yt();t=wn(t,n),t!==null&&($i(t,n,a),nr(t,a))}function c2(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),jh(t,a)}function p2(t,n){var a=0;switch(t.tag){case 13:var l=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(n),jh(t,a)}var Wh;Wh=function(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps||Wt.current)tr=!0;else{if((t.lanes&a)===0&&(n.flags&128)===0)return tr=!1,J_(t,n,a);tr=(t.flags&131072)!==0}else tr=!1,lt&&(n.flags&1048576)!==0&&Fe(n,z,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Ku(t,n),t=n.pendingProps;var h=Jn(n,zt.current);Qa(n,a),h=Nd(null,n,l,t,h,a);var v=Od();return n.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Vt(l)?(v=!0,Fa(n)):v=!1,n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Sd(n),h.updater=Hu,n.stateNode=h,h._reactInternals=n,Pd(n,l,t,a),n=Wd(null,n,l,!0,v,a)):(n.tag=0,lt&&v&&Ye(n),Zt(null,n,h,a),n=n.child),n;case 16:l=n.elementType;e:{switch(Ku(t,n),t=n.pendingProps,h=l._init,l=h(l._payload),n.type=l,h=n.tag=h2(l),t=Mr(l,t),h){case 0:n=jd(null,n,l,t,a);break e;case 1:n=hh(null,n,l,t,a);break e;case 11:n=lh(null,n,l,t,a);break e;case 14:n=dh(null,n,l,Mr(l.type,t),a);break e}throw Error(i(306,l,""))}return n;case 0:return l=n.type,h=n.pendingProps,h=n.elementType===l?h:Mr(l,h),jd(t,n,l,h,a);case 1:return l=n.type,h=n.pendingProps,h=n.elementType===l?h:Mr(l,h),hh(t,n,l,h,a);case 3:e:{if(mh(n),t===null)throw Error(i(387));l=n.pendingProps,v=n.memoizedState,h=v.element,zf(t,n),Lu(n,l,null,a);var E=n.memoizedState;if(l=E.element,v.isDehydrated)if(v={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},n.updateQueue.baseState=v,n.memoizedState=v,n.flags&256){h=Ya(Error(i(423)),n),n=gh(t,n,l,a,h);break e}else if(l!==h){h=Ya(Error(i(424)),n),n=gh(t,n,l,a,h);break e}else for(Bt=Xr(n.stateNode.containerInfo.firstChild),_t=n,lt=!0,Qt=null,a=Cf(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ha(),l===h){n=$n(t,n,a);break e}Zt(t,n,l,a)}n=n.child}return n;case 5:return Af(n),t===null&&yd(n),l=n.type,h=n.pendingProps,v=t!==null?t.memoizedProps:null,E=h.children,ao(l,h)?E=null:v!==null&&ao(l,v)&&(n.flags|=32),fh(t,n),Zt(t,n,E,a),n.child;case 6:return t===null&&yd(n),null;case 13:return yh(t,n,a);case 4:return kd(n,n.stateNode.containerInfo),l=n.pendingProps,t===null?n.child=Ga(n,null,l,a):Zt(t,n,l,a),n.child;case 11:return l=n.type,h=n.pendingProps,h=n.elementType===l?h:Mr(l,h),lh(t,n,l,h,a);case 7:return Zt(t,n,n.pendingProps,a),n.child;case 8:return Zt(t,n,n.pendingProps.children,a),n.child;case 12:return Zt(t,n,n.pendingProps.children,a),n.child;case 10:e:{if(l=n.type._context,h=n.pendingProps,v=n.memoizedProps,E=h.value,at(Mu,l._currentValue),l._currentValue=E,v!==null)if(er(v.value,E)){if(v.children===h.children&&!Wt.current){n=$n(t,n,a);break e}}else for(v=n.child,v!==null&&(v.return=n);v!==null;){var M=v.dependencies;if(M!==null){E=v.child;for(var L=M.firstContext;L!==null;){if(L.context===l){if(v.tag===1){L=_n(-1,a&-a),L.tag=2;var Z=v.updateQueue;if(Z!==null){Z=Z.shared;var se=Z.pending;se===null?L.next=L:(L.next=se.next,se.next=L),Z.pending=L}}v.lanes|=a,L=v.alternate,L!==null&&(L.lanes|=a),xd(v.return,a,n),M.lanes|=a;break}L=L.next}}else if(v.tag===10)E=v.type===n.type?null:v.child;else if(v.tag===18){if(E=v.return,E===null)throw Error(i(341));E.lanes|=a,M=E.alternate,M!==null&&(M.lanes|=a),xd(E,a,n),E=v.sibling}else E=v.child;if(E!==null)E.return=v;else for(E=v;E!==null;){if(E===n){E=null;break}if(v=E.sibling,v!==null){v.return=E.return,E=v;break}E=E.return}v=E}Zt(t,n,h.children,a),n=n.child}return n;case 9:return h=n.type,l=n.pendingProps.children,Qa(n,a),h=br(h),l=l(h),n.flags|=1,Zt(t,n,l,a),n.child;case 14:return l=n.type,h=Mr(l,n.pendingProps),h=Mr(l.type,h),dh(t,n,l,h,a);case 15:return ch(t,n,n.type,n.pendingProps,a);case 17:return l=n.type,h=n.pendingProps,h=n.elementType===l?h:Mr(l,h),Ku(t,n),n.tag=1,Vt(l)?(t=!0,Fa(n)):t=!1,Qa(n,a),rh(n,l,h),Pd(n,l,h,a),Wd(null,n,l,!0,t,a);case 19:return wh(t,n,a);case 22:return ph(t,n,a)}throw Error(i(156,n.tag))};function Vh(t,n){return un(t,n)}function f2(t,n,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Er(t,n,a,l){return new f2(t,n,a,l)}function uc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function h2(t){if(typeof t=="function")return uc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===de)return 11;if(t===he)return 14}return 2}function ui(t,n){var a=t.alternate;return a===null?(a=Er(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function al(t,n,a,l,h,v){var E=2;if(l=t,typeof t=="function")uc(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case V:return ji(a.children,h,v,n);case I:E=8,h|=8;break;case X:return t=Er(12,a,n,h|2),t.elementType=X,t.lanes=v,t;case pe:return t=Er(13,a,n,h),t.elementType=pe,t.lanes=v,t;case G:return t=Er(19,a,n,h),t.elementType=G,t.lanes=v,t;case ge:return sl(a,h,v,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case te:E=10;break e;case me:E=9;break e;case de:E=11;break e;case he:E=14;break e;case ye:E=16,l=null;break e}throw Error(i(130,t==null?t:typeof t,""))}return n=Er(E,a,n,h),n.elementType=t,n.type=l,n.lanes=v,n}function ji(t,n,a,l){return t=Er(7,t,l,n),t.lanes=a,t}function sl(t,n,a,l){return t=Er(22,t,l,n),t.elementType=ge,t.lanes=a,t.stateNode={isHidden:!1},t}function lc(t,n,a){return t=Er(6,t,null,n),t.lanes=a,t}function dc(t,n,a){return n=Er(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function m2(t,n,a,l,h){this.tag=n,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xs(0),this.expirationTimes=xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xs(0),this.identifierPrefix=l,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function cc(t,n,a,l,h,v,E,M,L){return t=new m2(t,n,a,M,L),n===1?(n=1,v===!0&&(n|=8)):n=0,v=Er(3,null,null,n),t.current=v,v.stateNode=t,v.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Sd(v),t}function g2(t,n,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:l==null?null:""+l,children:t,containerInfo:n,implementation:a}}function Fh(t){if(!t)return en;t=t._reactInternals;e:{if(Gr(t)!==t||t.tag!==1)throw Error(i(170));var n=t;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Vt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(t.tag===1){var a=t.type;if(Vt(a))return Nu(t,a,n)}return n}function qh(t,n,a,l,h,v,E,M,L){return t=cc(a,l,!0,t,h,v,E,M,L),t.context=Fh(null),a=t.current,l=Yt(),h=si(a),v=_n(l,h),v.callback=n??null,ri(a,v,h),t.current.lanes=h,$i(t,h,l),nr(t,l),t}function ol(t,n,a,l){var h=n.current,v=Yt(),E=si(h);return a=Fh(a),n.context===null?n.context=a:n.pendingContext=a,n=_n(v,E),n.payload={element:t},l=l===void 0?null:l,l!==null&&(n.callback=l),t=ri(h,n,E),t!==null&&(Lr(t,h,E,v),Pu(t,h,E)),E}function ul(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Hh(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function pc(t,n){Hh(t,n),(t=t.alternate)&&Hh(t,n)}function y2(){return null}var Gh=typeof reportError=="function"?reportError:function(t){console.error(t)};function fc(t){this._internalRoot=t}ll.prototype.render=fc.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(i(409));ol(t,n,null,null)},ll.prototype.unmount=fc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Pi(function(){ol(null,t,null,null)}),n[Rr]=null}};function ll(t){this._internalRoot=t}ll.prototype.unstable_scheduleHydration=function(t){if(t){var n=ma();t={blockedOn:null,target:t,priority:n};for(var a=0;a<zr.length&&n!==0&&n<zr[a].priority;a++);zr.splice(a,0,t),a===0&&iu(t)}};function hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function dl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Kh(){}function v2(t,n,a,l,h){if(h){if(typeof l=="function"){var v=l;l=function(){var Z=ul(E);v.call(Z)}}var E=qh(n,l,t,0,null,!1,!1,"",Kh);return t._reactRootContainer=E,t[Rr]=E.current,Gn(t.nodeType===8?t.parentNode:t),Pi(),E}for(;h=t.lastChild;)t.removeChild(h);if(typeof l=="function"){var M=l;l=function(){var Z=ul(L);M.call(Z)}}var L=cc(t,0,!1,null,null,!1,!1,"",Kh);return t._reactRootContainer=L,t[Rr]=L.current,Gn(t.nodeType===8?t.parentNode:t),Pi(function(){ol(n,L,a,l)}),L}function cl(t,n,a,l,h){var v=a._reactRootContainer;if(v){var E=v;if(typeof h=="function"){var M=h;h=function(){var L=ul(E);M.call(L)}}ol(n,E,t,h)}else E=v2(a,n,t,h,l);return ul(E)}ha=function(t){switch(t.tag){case 3:var n=t.stateNode;if(n.current.memoizedState.isDehydrated){var a=Rn(n.pendingLanes);a!==0&&(bs(n,a|1),nr(n,yt()),(Xe&6)===0&&(es=yt()+500,p()))}break;case 13:Pi(function(){var l=wn(t,1);if(l!==null){var h=Yt();Lr(l,t,1,h)}}),pc(t,1)}},Dn=function(t){if(t.tag===13){var n=wn(t,134217728);if(n!==null){var a=Yt();Lr(n,t,134217728,a)}pc(t,134217728)}},tu=function(t){if(t.tag===13){var n=si(t),a=wn(t,n);if(a!==null){var l=Yt();Lr(a,t,n,l)}pc(t,n)}},ma=function(){return Qe},ru=function(t,n){var a=Qe;try{return Qe=t,n()}finally{Qe=a}},ms=function(t,n,a){switch(n){case"input":if(St(t,a),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==t&&l.form===t.form){var h=Wa(l);if(!h)throw Error(i(90));Ut(l),St(l,h)}}}break;case"textarea":Cn(t,a);break;case"select":n=a.value,n!=null&&ct(t,!!a.multiple,n,!1)}},vs=ac,ws=Pi;var w2={usingClientEntryPoint:!1,Events:[Ai,Yn,Wa,ys,qo,ac]},ko={findFiberByHostInstance:yn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_2={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=oa(t),t===null?null:t.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||y2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{ca=pl.inject(_2),$r=pl}catch{}}return ir.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w2,ir.createPortal=function(t,n){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hc(n))throw Error(i(200));return g2(t,n,null,a)},ir.createRoot=function(t,n){if(!hc(t))throw Error(i(299));var a=!1,l="",h=Gh;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(h=n.onRecoverableError)),n=cc(t,1,!1,null,null,a,!1,l,h),t[Rr]=n.current,Gn(t.nodeType===8?t.parentNode:t),new fc(n)},ir.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(i(188)):(t=Object.keys(t).join(","),Error(i(268,t)));return t=oa(n),t=t===null?null:t.stateNode,t},ir.flushSync=function(t){return Pi(t)},ir.hydrate=function(t,n,a){if(!dl(n))throw Error(i(200));return cl(null,t,n,!0,a)},ir.hydrateRoot=function(t,n,a){if(!hc(t))throw Error(i(405));var l=a!=null&&a.hydratedSources||null,h=!1,v="",E=Gh;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),n=qh(n,null,t,1,a??null,h,!1,v,E),t[Rr]=n.current,Gn(t),l)for(t=0;t<l.length;t++)a=l[t],h=a._getVersion,h=h(a._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[a,h]:n.mutableSourceEagerHydrationData.push(a,h);return new ll(n)},ir.render=function(t,n,a){if(!dl(n))throw Error(i(200));return cl(null,t,n,!1,a)},ir.unmountComponentAtNode=function(t){if(!dl(t))throw Error(i(40));return t._reactRootContainer?(Pi(function(){cl(null,null,t,!1,function(){t._reactRootContainer=null,t[Rr]=null})}),!0):!1},ir.unstable_batchedUpdates=ac,ir.unstable_renderSubtreeIntoContainer=function(t,n,a,l){if(!dl(a))throw Error(i(200));if(t==null||t._reactInternals===void 0)throw Error(i(38));return cl(t,n,a,!1,l)},ir.version="18.3.1-next-f1338f8080-20240426",ir}var nm;function O2(){if(nm)return yc.exports;nm=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(r){console.error(r)}}return e(),yc.exports=N2(),yc.exports}var im;function A2(){if(im)return fl;im=1;var e=O2();return fl.createRoot=e.createRoot,fl.hydrateRoot=e.hydrateRoot,fl}var R2=A2();function D2({mode:e,setMode:r,challengeNumber:i,streak:s,onOpenHelp:o,onOpenStats:u,onJumpToContext:d}){return U.jsx("header",{className:"app-header",children:U.jsxs("div",{className:"header-inner",children:[U.jsxs("div",{className:"brand-group",children:[U.jsxs("div",{className:"brand-logo","aria-hidden":"true",children:[U.jsx("span",{className:"dot dot-top"}),U.jsx("span",{className:"dot dot-left"}),U.jsx("span",{className:"dot dot-right"})]}),U.jsx("div",{children:U.jsxs("div",{className:"brand-title-row",children:[U.jsx("h1",{className:"brand-title",children:"PYRAMIDLE"}),U.jsxs("span",{className:"daily-badge",children:["#",i]})]})})]}),U.jsxs("nav",{className:"mode-tabs","aria-label":"Modo de jogo",children:[U.jsx("button",{type:"button",className:`mode-tab ${e==="daily"?"active":""}`,onClick:()=>r("daily"),children:"Desafio Diário"}),U.jsx("button",{type:"button",className:`mode-tab ${e==="free"?"active":""}`,onClick:()=>r("free"),children:"Modo Livre"})]}),U.jsxs("div",{className:"header-actions",children:[U.jsx("button",{type:"button",className:"text-link-btn",onClick:d,title:"Ver explicação técnica em slides",children:"Como Funciona"}),U.jsxs("div",{className:"streak-pill",title:"Sequência de dias seguidos",children:[U.jsx("span",{className:"streak-label",children:"Sequência"}),U.jsx("strong",{children:s})]}),U.jsx("button",{type:"button",className:"icon-btn",onClick:u,title:"Estatísticas","aria-label":"Estatísticas",children:"Stats"}),U.jsx("button",{type:"button",className:"icon-btn",onClick:o,title:"Regras do jogo","aria-label":"Regras",children:"Regras"})]})]})})}function M2({geometry:e,state:r,onBallClick:i,lastAiAction:s,solving:o,solved:u,showRadiusPreview:d}){const[c,f]=tt.useState(null),{balls:m,adjMatrix:y,radius:w,width:$,height:S}=e,b=new Set;c!==null&&y[c]&&y[c].forEach((N,k)=>{N===1&&b.add(k)});const C=c!==null?m[c]:null;return U.jsxs("div",{className:`board-card ${u?"board-solved":""}`,children:[U.jsxs("div",{className:"board-top-bar",children:[U.jsxs("div",{className:"legend-row",children:[U.jsxs("span",{className:"legend-item",children:[U.jsx("span",{className:"legend-ball white"})," Branca"]}),U.jsxs("span",{className:"legend-item",children:[U.jsx("span",{className:"legend-ball black"})," Preta (Alvo)"]}),s!==null&&U.jsxs("span",{className:"legend-item ai-legend",children:[U.jsx("span",{className:"legend-ball ai-ring"})," Passo Automático"]})]}),u&&U.jsx("span",{className:"solved-inline-tag",children:"Pirâmide Concluída"})]}),U.jsx("div",{className:"svg-wrapper",children:U.jsxs("svg",{viewBox:`0 0 ${$} ${S}`,className:"pyramid-svg",onMouseLeave:()=>f(null),children:[U.jsxs("defs",{children:[U.jsxs("radialGradient",{id:"ballBlackGrad",cx:"35%",cy:"30%",r:"70%",children:[U.jsx("stop",{offset:"0%",stopColor:"#475569"}),U.jsx("stop",{offset:"55%",stopColor:"#0f172a"}),U.jsx("stop",{offset:"100%",stopColor:"#020617"})]}),U.jsxs("radialGradient",{id:"ballWhiteGrad",cx:"35%",cy:"30%",r:"70%",children:[U.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),U.jsx("stop",{offset:"65%",stopColor:"#e2e8f0"}),U.jsx("stop",{offset:"100%",stopColor:"#94a3b8"})]}),U.jsxs("filter",{id:"aiGlow",x:"-30%",y:"-30%",width:"160%",height:"160%",children:[U.jsx("feGaussianBlur",{stdDeviation:"5",result:"blur"}),U.jsxs("feMerge",{children:[U.jsx("feMergeNode",{in:"blur"}),U.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),d&&C&&!o&&U.jsx("circle",{cx:C.x,cy:C.y,r:w*3,className:"radius-preview-circle"}),m.map(N=>{const k=r[N.index]===1,T=b.has(N.index),A=s===N.index;return U.jsxs("g",{className:`ball-group ${o?"disabled":""}`,onMouseEnter:()=>f(N.index),onClick:()=>!o&&i(N.index),children:[d&&T&&!o&&U.jsx("circle",{cx:N.x,cy:N.y,r:N.radius+4,className:"affected-halo"}),U.jsx("circle",{cx:N.x,cy:N.y,r:N.radius-2,fill:k?"url(#ballBlackGrad)":"url(#ballWhiteGrad)",stroke:k?"#38bdf8":"#cbd5e1",strokeWidth:k?"2.2":"1.5",className:"ball-circle"}),A&&U.jsx("circle",{cx:N.x,cy:N.y,r:N.radius+2,fill:"none",stroke:"#22c55e",strokeWidth:"4.5",filter:"url(#aiGlow)"})]},N.index)})]})})]})}function B2({mode:e,numBalls:r,onChangeNumBalls:i,clicks:s,maxClicks:o,aiPar:u,blackCount:d,totalBalls:c,solving:f,solved:m,canUseAi:y,onToggleSolve:w,onReset:$,onNewRandomBoard:S,showRadiusPreview:b,setShowRadiusPreview:C}){const N=Math.round(d/c*100);return U.jsxs("section",{className:"controls-panel",children:[U.jsxs("div",{className:"metrics-grid",children:[U.jsxs("div",{className:"metric-box",children:[U.jsx("span",{className:"metric-label",children:"Cliques (Limite 2× Par)"}),U.jsxs("strong",{className:"metric-value",children:[s," / ",o]})]}),U.jsxs("div",{className:"metric-box",children:[U.jsx("span",{className:"metric-label",children:"Referência (Par)"}),U.jsx("strong",{className:"metric-value accent",children:`${u} cliques`})]}),U.jsxs("div",{className:"metric-box",children:[U.jsx("span",{className:"metric-label",children:"Progresso"}),U.jsxs("strong",{className:"metric-value",children:[d,"/",c," (",N,"%)"]}),U.jsx("div",{className:"progress-bar-track",children:U.jsx("div",{className:"progress-bar-fill",style:{width:`${N}%`}})})]})]}),e==="free"&&U.jsxs("div",{className:"size-selector-bar",children:[U.jsxs("div",{className:"size-label-group",children:[U.jsxs("span",{className:"size-title",children:["Base da Pirâmide: ",r]}),U.jsxs("span",{className:"size-desc",children:[c," bolas no total •"," ",r<=8?"Resolvedor automático: Rede Neural (IA)":"Resolvedor automático: Álgebra Linear GF(2)"]})]}),U.jsxs("div",{className:"size-controls-right",children:[U.jsx("button",{type:"button",disabled:f||r<=2,className:"size-btn",onClick:()=>i(Math.max(2,r-1)),title:"Diminuir base",children:"−"}),U.jsx("input",{type:"range",min:2,max:20,value:r,disabled:f,onChange:k=>i(Number(k.target.value)),className:"size-slider"}),U.jsx("button",{type:"button",disabled:f||r>=20,className:"size-btn",onClick:()=>i(Math.min(20,r+1)),title:"Aumentar base",children:"+"}),U.jsx("div",{className:"size-buttons",children:[3,5,6,7,8,10,12,15,20].map(k=>U.jsx("button",{type:"button",disabled:f,className:`size-btn ${r===k?"active":""} ${k>8?"human-only":""}`,onClick:()=>i(k),children:k},k))})]})]}),U.jsxs("div",{className:"actions-row",children:[U.jsxs("div",{className:"left-actions",children:[U.jsx("button",{type:"button",className:"btn btn-secondary",onClick:$,disabled:f||s===0,children:"Reiniciar"}),e==="free"&&U.jsx("button",{type:"button",className:"btn btn-secondary",onClick:S,disabled:f,children:"Novo Tabuleiro"}),U.jsxs("label",{className:"preview-toggle",children:[U.jsx("input",{type:"checkbox",checked:b,onChange:k=>C(k.target.checked)}),U.jsx("span",{children:"Visualizar alcance"})]})]}),U.jsx("div",{className:"right-actions",children:y?U.jsx("button",{type:"button",className:`btn ${f?"btn-Warning":"btn-primary"}`,onClick:w,disabled:m,children:f?"Pausar Resolução":"Resolver Passo a Passo"}):U.jsx("span",{className:"human-challenge-pill",children:"Modo Manual"})})]})]})}function P2({onBackToGame:e}){return U.jsxs(U.Fragment,{children:[U.jsx("section",{className:"snap-slide context-slide",id:"slide-math",children:U.jsxs("div",{className:"slide-content",children:[U.jsx("span",{className:"slide-kicker",children:"01 / POR TRÁS DO TABULEIRO"}),U.jsx("h2",{className:"slide-title",children:"Como garantimos que nenhum desafio seja impossível"}),U.jsx("p",{className:"slide-lead",children:"Se as cores iniciais fossem sorteadas de forma totalmente cega, a maioria das pirâmides simplesmente não teria solução. Na pirâmide de base 3, por exemplo, 75% dos sorteios aleatórios são impossíveis de resolver porque algumas bolas invertem exatamente o mesmo grupo de vizinhas."}),U.jsxs("div",{className:"slide-grid-two",children:[U.jsxs("div",{className:"context-card",children:[U.jsx("h3",{children:"A lógica dos cliques — GF(2)"}),U.jsx("p",{children:"Duas regras simples comandam o jogo: a ordem em que você clica nas bolas não muda o resultado final, e clicar duas vezes na mesma bola desfaz a jogada (como um interruptor de luz)."}),U.jsx("div",{className:"formula-box",children:"A · x ≡ b (mod 2)"}),U.jsxs("p",{className:"card-subtext",children:["Onde ",U.jsx("code",{children:"A"})," representa quais bolas são vizinhas (alcance ≤ 3r),"," ",U.jsx("code",{children:"x"})," são os cliques necessários e ",U.jsx("code",{children:"b"})," são as bolas que ainda estão brancas."]})]}),U.jsxs("div",{className:"context-card",children:[U.jsx("h3",{children:"Filtro antes da partida começar"}),U.jsxs("p",{children:["Antes de mostrar qualquer tabuleiro na tela, o jogo resolve esse sistema em frações de milissegundo para ter certeza de que existe um caminho até a vitória e calcular a ",U.jsx("strong",{children:"Referência (Par)"})," de cliques."]}),U.jsx("p",{className:"card-subtext",children:"Assim você nunca cai em um quebra-cabeça sem saída — todo tabuleiro tem solução garantida."})]})]})]})}),U.jsx("section",{className:"snap-slide context-slide",id:"slide-ai",children:U.jsxs("div",{className:"slide-content",children:[U.jsx("span",{className:"slide-kicker",children:"02 / IA vs. MATEMÁTICA"}),U.jsx("h2",{className:"slide-title",children:"Dois cérebros diferentes para resolver a pirâmide"}),U.jsxs("p",{className:"slide-lead",children:["Até ",U.jsx("strong",{children:"8 bolas na base"}),", quem joga no botão de resolução é uma"," ",U.jsx("strong",{children:"Rede Neural (Double DQN)"})," que aprendeu sozinha tentando e errando. A partir de ",U.jsx("strong",{children:"9 bolas na base"})," (onde as combinações passam dos trilhões), o ",U.jsx("strong",{children:"Resolvedor Algébrico em GF(2)"})," ","assume para encarar pirâmides gigantes."]}),U.jsxs("div",{className:"ai-architecture-row",children:[U.jsxs("div",{className:"mini-spec",children:[U.jsx("strong",{children:"Por que usar IA se a matemática já resolve?"}),U.jsx("span",{children:"A equação matemática é presa às regras atuais do jogo. Já uma Rede Neural dá liberdade criativa: se mudarmos as regras (novas cores, obstáculos ou poderes), a IA aprende a jogar do zero sem precisarmos descobrir uma fórmula nova."})]}),U.jsxs("div",{className:"mini-spec",children:[U.jsx("strong",{children:"Mais viva e divertida de assistir"}),U.jsx("span",{children:"Enquanto o algoritmo matemático segue uma lista rígida como uma calculadora, a IA avalia o tabuleiro no “olho” a cada jogada: escolhe caminhos mais criativos e até corrige a própria rota se precisar."})]}),U.jsxs("div",{className:"mini-spec",children:[U.jsx("strong",{children:"Rodando direto no seu navegador"}),U.jsx("span",{children:"Os modelos treinados em PyTorch foram exportados para ONNX e rodam 100% no seu dispositivo em tempo real, lado a lado com o motor matemático para as pirâmides maiores (9 a 20 bolas)."})]})]}),U.jsx("div",{className:"slide-footer-action",children:U.jsx("button",{type:"button",className:"btn btn-secondary",onClick:e,children:"Voltar ao Jogo ↑"})})]})})]})}function L2({isOpen:e,onClose:r,stats:i,dailyResult:s,challengeNumber:o,aiPar:u}){const[d,c]=tt.useState(!1);if(!e)return null;const f=i.played>0?Math.round(i.wins/i.played*100):0,m=()=>{const y=(s==null?void 0:s.clicks)??"—",w=s==null?void 0:s.usedAi,$=typeof y=="number"?y-u:0,S=w?"Resolvido com resolução guiada":$<=0?"Atingiu a referência ótima":`+${$} cliques acima da referência`,b=[`PYRAMIDLE #${o}`,`Cliques: ${y} | Referência: ${u}`,S,`Sequência: ${i.currentStreak} dia(s)`].join(`
`);navigator.clipboard.writeText(b),c(!0),setTimeout(()=>c(!1),2500)};return U.jsx("div",{className:"modal-backdrop",onClick:r,children:U.jsxs("div",{className:"modal-card",onClick:y=>y.stopPropagation(),children:[U.jsxs("div",{className:"modal-header",children:[U.jsx("h2",{children:"Desempenho no Desafio Diário"}),U.jsx("button",{type:"button",className:"close-btn",onClick:r,children:"Fechar"})]}),U.jsxs("div",{className:"stats-summary-grid",children:[U.jsxs("div",{className:"stat-item",children:[U.jsx("strong",{children:i.played}),U.jsx("span",{children:"Jogos"})]}),U.jsxs("div",{className:"stat-item",children:[U.jsxs("strong",{children:[f,"%"]}),U.jsx("span",{children:"Vitórias"})]}),U.jsxs("div",{className:"stat-item",children:[U.jsx("strong",{children:i.currentStreak}),U.jsx("span",{children:"Sequência"})]}),U.jsxs("div",{className:"stat-item",children:[U.jsx("strong",{children:i.maxStreak}),U.jsx("span",{children:"Recorde"})]})]}),s?U.jsxs("div",{className:"daily-summary-card",children:[U.jsxs("h3",{children:["Desafio #",o," Concluído"]}),U.jsxs("p",{className:"daily-comparison",children:["Resolvido em ",U.jsxs("strong",{children:[s.clicks," cliques"]})," (Referência:"," ",U.jsxs("strong",{children:[u," cliques"]}),")."]}),s.usedAi&&U.jsx("p",{className:"ai-assisted-note",children:"Nota: A resolução passo a passo foi utilizada nesta partida."}),U.jsx("button",{type:"button",className:"btn btn-primary share-btn",onClick:m,children:d?"Resultado copiado":"Copiar Resultado"})]}):U.jsxs("p",{className:"pending-daily-msg",children:["Conclua o ",U.jsxs("strong",{children:["Desafio Diário #",o]})," para habilitar o resumo para compartilhamento."]})]})})}function U2({isOpen:e,onClose:r,onJumpToContext:i}){return e?U.jsx("div",{className:"modal-backdrop",onClick:r,children:U.jsxs("div",{className:"modal-card help-modal",onClick:s=>s.stopPropagation(),children:[U.jsxs("div",{className:"modal-header",children:[U.jsx("h2",{children:"Regras do Jogo"}),U.jsx("button",{type:"button",className:"close-btn",onClick:r,children:"Fechar"})]}),U.jsxs("div",{className:"help-body",children:[U.jsxs("section",{className:"help-section",children:[U.jsx("h3",{children:"Objetivo"}),U.jsxs("p",{children:["Deixe ",U.jsx("strong",{children:"todas as bolas da pirâmide pretas"})," utilizando a menor quantidade de cliques possível."]}),U.jsxs("p",{children:["Ao clicar em uma bola, ela própria e todas as bolas vizinhas dentro de um raio de alcance de ",U.jsx("code",{children:"3 × raio"})," invertem de cor simultaneamente."]})]}),U.jsxs("section",{className:"help-section",children:[U.jsx("h3",{children:"Modos Disponíveis"}),U.jsxs("ul",{children:[U.jsxs("li",{children:[U.jsx("strong",{children:"Desafio Diário:"})," Uma pirâmide única por dia (base 5, 15 bolas), igual para todos os jogadores."]}),U.jsxs("li",{children:[U.jsx("strong",{children:"Modo Livre:"})," Permite escolher o tamanho da base entre 2 e 10 bolas, sortear novos tabuleiros e assistir à resolução automática passo a passo (disponível até 8 bolas na base)."]})]})]}),U.jsx("div",{className:"help-footer",children:U.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{r(),i()},children:"Ver explicação matemática nos slides abaixo ↓"})})]})]})}):null}function am(e,r=760,i=500){const s=i*.78/(e*2),o=2*s*.866,u=(e-1)*o+2*s,d=(i-u)/2,c=[];let f=0;for(let w=0;w<e;w++){const $=i-d-s-o*w,S=e-w,b=S*2*s,C=(r-b)/2+s;for(let N=0;N<S;N++){const k=C+N*2*s;c.push({index:f++,x:k,y:$,radius:s,row:w,col:N})}}const m=c.length,y=Array.from({length:m},()=>Array(m).fill(0));for(let w=0;w<m;w++)for(let $=0;$<m;$++){const S=c[w].x-c[$].x,b=c[w].y-c[$].y;Math.hypot(S,b)<=3*s+1e-6&&(y[w][$]=1)}return{balls:c,adjMatrix:y,radius:s,width:r,height:i}}function j2(e,r){const i=r.length,s=r.map(d=>d===1?0:1),o=e.map((d,c)=>[...d,s[c]]);let u=0;for(let d=0;d<i;d++){let c=-1;for(let m=u;m<i;m++)if(o[m][d]===1){c=m;break}if(c===-1)continue;const f=o[u];o[u]=o[c],o[c]=f;for(let m=0;m<i;m++)if(m!==u&&o[m][d]===1)for(let y=0;y<=i;y++)o[m][y]^=o[u][y];u++}for(let d=0;d<i;d++){let c=0;for(let f=0;f<i;f++)c+=o[d][f];if(c===0&&o[d][i]===1)return!1}return!0}function sm(e,r){const i=r.length,s=r.map(c=>c===1?0:1),o=e.map((c,f)=>[...c,s[f]]);let u=0;for(let c=0;c<i;c++){let f=-1;for(let y=u;y<i;y++)if(o[y][c]===1){f=y;break}if(f===-1)continue;const m=o[u];o[u]=o[f],o[f]=m;for(let y=0;y<i;y++)if(y!==u&&o[y][c]===1)for(let w=0;w<=i;w++)o[y][w]^=o[u][w];u++}let d=0;for(let c=0;c<u;c++)d+=o[c][i];return d}function W2(e,r){const i=r.length,s=r.map(c=>c===1?0:1),o=e.map((c,f)=>[...c,s[f]]);let u=0;const d=[];for(let c=0;c<i;c++){let f=-1;for(let y=u;y<i;y++)if(o[y][c]===1){f=y;break}if(f===-1)continue;const m=o[u];o[u]=o[f],o[f]=m;for(let y=0;y<i;y++)if(y!==u&&o[y][c]===1)for(let w=0;w<=i;w++)o[y][w]^=o[u][w];d.push(c),u++}for(let c=0;c<u;c++)if(o[c][i]===1)return d[c];return 0}function Wo(e,r,i){const s=r[i];return e.map((o,u)=>s[u]===1?o^1:o)}function zl(e){return e.every(r=>r===1)}function V2(e,r=Math.random,i=8,s=2){const o=e.length,u=Math.min(i,o),d=Math.min(u,Math.max(1,s));for(let f=0;f<200;f++){let m=Array(o).fill(1);const y=new Set,w=d+Math.floor(r()*Math.max(1,u-d+1));let $=0;for(;y.size<w&&$<200;)y.add(Math.floor(r()*o)),$++;for(const S of y)m=Wo(m,e,S);if(!zl(m)&&j2(e,m)){const S=sm(e,m);if(S>=d||f>60)return{initialState:m,optimalHintClicks:S}}}let c=Wo(Array(o).fill(1),e,0);return{initialState:c,optimalHintClicks:sm(e,c)}}/*!
 * ONNX Runtime Web v1.31.1
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var jp=Object.defineProperty,F2=Object.getOwnPropertyDescriptor,q2=Object.getOwnPropertyNames,H2=Object.prototype.hasOwnProperty,G2=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(r,i)=>(typeof require<"u"?require:r)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),ae=(e,r,i)=>()=>{if(i)throw i[0];try{return e&&(r=e(e=0)),r}catch(s){throw i=[s],s}},us=(e,r)=>{for(var i in r)jp(e,i,{get:r[i],enumerable:!0})},K2=(e,r,i,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of q2(r))!H2.call(e,o)&&o!==i&&jp(e,o,{get:()=>r[o],enumerable:!(s=F2(r,o))||s.enumerable});return e},Vo=e=>K2(jp({},"__esModule",{value:!0}),e),rs,bn,_c,is,$c,K0,Q0,Wp=ae(()=>{"use strict";rs=new Map,bn=[],_c=new WeakMap,is=(e,r,i)=>{if(r&&typeof r.init=="function"&&typeof r.createInferenceSessionHandler=="function"){let s=rs.get(e);if(s===void 0)rs.set(e,{backend:r,priority:i});else{if(s.priority>i)return;if(s.priority===i&&s.backend!==r)throw new Error(`cannot register backend "${e}" using priority ${i}`)}if(i>=0){let o=bn.indexOf(e);o!==-1&&bn.splice(o,1);for(let u=0;u<bn.length;u++)if(rs.get(bn[u]).priority<=i){bn.splice(u,0,e);return}bn.push(e)}return}throw new TypeError("not a valid backend")},$c=async e=>{let r=rs.get(e);if(!r)return"backend not found.";if(r.initialized)return r.backend;if(r.aborted)return r.error;{let i=!!r.initPromise;try{if(!i){let s=r.backend,o=_c.get(s);r.initPromise=o?o.then(async()=>s.init(e),async()=>s.init(e)):s.init(e),_c.set(s,r.initPromise)}return await r.initPromise,r.initialized=!0,r.backend}catch(s){return i||(r.error=`${s}`,r.aborted=!0),r.error}finally{delete r.initPromise}}},K0=async e=>{let r=e.executionProviders||[],i=r.map(f=>typeof f=="string"?f:f.name),s=i.length===0?bn:i,o,u=[],d=new Set;for(let f of s){let m=await $c(f);typeof m=="string"?u.push({name:f,err:m}):(o||(o=m),o===m&&d.add(f))}if(!o)throw new Error(`no available backend found. ERR: ${u.map(f=>`[${f.name}] ${f.err}`).join(", ")}`);for(let{name:f,err:m}of u)i.includes(f)&&console.warn(`removing requested execution provider "${f}" from session options because it is not available: ${m}`);let c=r.filter(f=>d.has(typeof f=="string"?f:f.name));return[o,new Proxy(e,{get:(f,m)=>m==="executionProviders"?c:Reflect.get(f,m)})]},Q0=async()=>{let e=[];for(let i of bn){if(typeof rs.get(i).backend.createLoraAdapterHandler!="function")continue;let s=await $c(i);if(typeof s!="string")return s;e.push({name:i,err:s})}let r=e.length===0?"":` ERR: ${e.map(i=>`[${i.name}] ${i.err}`).join(", ")}`;throw new Error(`no available backend supports LoRA adapters.${r}`)}}),Q2=ae(()=>{"use strict";Wp()}),Z0,Z2=ae(()=>{"use strict";Z0="1.31.1"}),xc,Rt,Y0=ae(()=>{"use strict";Z2(),xc="warning",Rt={wasm:{},webgl:{},webgpu:{},versions:{common:Z0},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);xc=e}},get logLevel(){return xc}},Object.defineProperty(Rt,"logLevel",{enumerable:!0})}),dt,Y2=ae(()=>{"use strict";Y0(),dt=Rt}),Nl,bc,Tr,mr,Yi,Xi,Vp=ae(()=>{"use strict";Y0(),Nl=(e,r)=>{(typeof Rt.trace>"u"?!Rt.wasm.trace:!Rt.trace)||console.timeStamp(`${e}::ORT::${r}`)},bc=(e,r)=>{var o;let i=((o=new Error().stack)==null?void 0:o.split(/\r\n|\r|\n/g))||[],s=!1;for(let u=0;u<i.length;u++){if(s&&!i[u].includes("TRACE_FUNC")){let d=`FUNC_${e}::${i[u].trim().split(" ")[1]}`;r&&(d+=`::${r}`),Nl("CPU",d);return}i[u].includes("TRACE_FUNC")&&(s=!0)}},Tr=e=>{(typeof Rt.trace>"u"?!Rt.wasm.trace:!Rt.trace)||bc("BEGIN",e)},mr=e=>{(typeof Rt.trace>"u"?!Rt.wasm.trace:!Rt.trace)||bc("END",e)},Yi=e=>{(typeof Rt.trace>"u"?!Rt.wasm.trace:!Rt.trace)||console.time(`ORT::${e}`)},Xi=e=>{(typeof Rt.trace>"u"?!Rt.wasm.trace:!Rt.trace)||console.timeEnd(`ORT::${e}`)}}),Fp,X0=ae(()=>{"use strict";Wp(),Vp(),Fp=class J0{constructor(r,i){this.backend=r,this.handler=i}static async create(r){if(Tr(),typeof r!="string"&&!(r instanceof Uint8Array))throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let i=await Q0(),s=await i.createLoraAdapterHandler(r);return mr(),new J0(i,s)}async release(){return this.handler.dispose()}}}),ev,tv,X2=ae(()=>{"use strict";ev=(e,r)=>{let i=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=e.dims[3],i.height=e.dims[2];let s=i.getContext("2d");if(s!=null){let o,u;(r==null?void 0:r.tensorLayout)!==void 0&&r.tensorLayout==="NHWC"?(o=e.dims[2],u=e.dims[3]):(o=e.dims[3],u=e.dims[2]);let d=(r==null?void 0:r.format)!==void 0?r.format:"RGB",c=r==null?void 0:r.norm,f,m;c===void 0||c.mean===void 0?f=[255,255,255,255]:typeof c.mean=="number"?f=[c.mean,c.mean,c.mean,c.mean]:(f=[c.mean[0],c.mean[1],c.mean[2],0],c.mean[3]!==void 0&&(f[3]=c.mean[3])),c===void 0||c.bias===void 0?m=[0,0,0,0]:typeof c.bias=="number"?m=[c.bias,c.bias,c.bias,c.bias]:(m=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(m[3]=c.bias[3]));let y=u*o,w=0,$=y,S=y*2,b=-1;d==="RGBA"?(w=0,$=y,S=y*2,b=y*3):d==="RGB"?(w=0,$=y,S=y*2):d==="RBG"&&(w=0,S=y,$=y*2);for(let C=0;C<u;C++)for(let N=0;N<o;N++){let k=(e.data[w++]-m[0])*f[0],T=(e.data[$++]-m[1])*f[1],A=(e.data[S++]-m[2])*f[2],D=b===-1?255:(e.data[b++]-m[3])*f[3];s.fillStyle="rgba("+k+","+T+","+A+","+D+")",s.fillRect(N,C,1,1)}if("toDataURL"in i)return i.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},tv=(e,r)=>{let i=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),s;if(i!=null){let o,u,d;(r==null?void 0:r.tensorLayout)!==void 0&&r.tensorLayout==="NHWC"?(o=e.dims[2],u=e.dims[1],d=e.dims[3]):(o=e.dims[3],u=e.dims[2],d=e.dims[1]);let c=r!==void 0&&r.format!==void 0?r.format:"RGB",f=r==null?void 0:r.norm,m,y;f===void 0||f.mean===void 0?m=[255,255,255,255]:typeof f.mean=="number"?m=[f.mean,f.mean,f.mean,f.mean]:(m=[f.mean[0],f.mean[1],f.mean[2],255],f.mean[3]!==void 0&&(m[3]=f.mean[3])),f===void 0||f.bias===void 0?y=[0,0,0,0]:typeof f.bias=="number"?y=[f.bias,f.bias,f.bias,f.bias]:(y=[f.bias[0],f.bias[1],f.bias[2],0],f.bias[3]!==void 0&&(y[3]=f.bias[3]));let w=u*o;if(r!==void 0&&(r.format!==void 0&&d===4&&r.format!=="RGBA"||d===3&&r.format!=="RGB"&&r.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let $=4,S=0,b=1,C=2,N=3,k=0,T=w,A=w*2,D=-1;c==="RGBA"?(k=0,T=w,A=w*2,D=w*3):c==="RGB"?(k=0,T=w,A=w*2):c==="RBG"&&(k=0,A=w,T=w*2),s=i.createImageData(o,u);for(let B=0;B<u*o;S+=$,b+=$,C+=$,N+=$,B++)s.data[S]=(e.data[k++]-y[0])*m[0],s.data[b]=(e.data[T++]-y[1])*m[1],s.data[C]=(e.data[A++]-y[2])*m[2],s.data[N]=D===-1?255:(e.data[D++]-y[3])*m[3]}else throw new Error("Can not access image data");return s}}),hl,rv,nv,iv,av,sv,J2=ae(()=>{"use strict";qp(),hl=(e,r)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(r.height===void 0||r.width===void 0)throw new Error("Image height and width must be defined");if(r.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:i,width:s}=r,o=r.norm??{mean:255,bias:0},u,d;typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:u=[o.mean[0],o.mean[1],o.mean[2],o.mean[3]??255],typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:d=[o.bias[0],o.bias[1],o.bias[2],o.bias[3]??0];let c=r.format!==void 0?r.format:"RGBA",f=r.tensorFormat!==void 0&&r.tensorFormat!==void 0?r.tensorFormat:"RGB",m=i*s,y=f==="RGBA"?new Float32Array(m*4):new Float32Array(m*3),w=4,$=0,S=1,b=2,C=3,N=0,k=m,T=m*2,A=-1;c==="RGB"&&(w=3,$=0,S=1,b=2,C=-1),f==="RGBA"?A=m*3:f==="RBG"?(N=0,T=m,k=m*2):f==="BGR"&&(T=0,k=m,N=m*2);for(let D=0;D<m;D++,$+=w,b+=w,S+=w,C+=w)y[N++]=(e[$]+d[0])/u[0],y[k++]=(e[S]+d[1])/u[1],y[T++]=(e[b]+d[2])/u[2],A!==-1&&C!==-1&&(y[A++]=(e[C]+d[3])/u[3]);return f==="RGBA"?new hr("float32",y,[1,4,i,s]):new hr("float32",y,[1,3,i,s])},rv=async(e,r)=>{let i=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,s=typeof ImageData<"u"&&e instanceof ImageData,o=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,u=typeof e=="string",d,c=r??{},f=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},m=y=>typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||y instanceof OffscreenCanvas?y.getContext("2d"):null;if(i){let y=f();y.width=e.width,y.height=e.height;let w=m(y);if(w!=null){let $=e.height,S=e.width;if(r!==void 0&&r.resizedHeight!==void 0&&r.resizedWidth!==void 0&&($=r.resizedHeight,S=r.resizedWidth),r!==void 0){if(c=r,r.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");c.tensorFormat="RGBA",c.height=$,c.width=S}else c.tensorFormat="RGBA",c.height=$,c.width=S;w.drawImage(e,0,0),d=w.getImageData(0,0,S,$).data}else throw new Error("Can not access image data")}else if(s){let y,w;if(r!==void 0&&r.resizedWidth!==void 0&&r.resizedHeight!==void 0?(y=r.resizedHeight,w=r.resizedWidth):(y=e.height,w=e.width),r!==void 0&&(c=r),c.format="RGBA",c.height=y,c.width=w,r!==void 0){let $=f();$.width=w,$.height=y;let S=m($);if(S!=null)S.putImageData(e,0,0),d=S.getImageData(0,0,w,y).data;else throw new Error("Can not access image data")}else d=e.data}else if(o){if(r===void 0)throw new Error("Please provide image config with format for Imagebitmap");let y=f();y.width=e.width,y.height=e.height;let w=m(y);if(w!=null){let $=e.height,S=e.width;return w.drawImage(e,0,0,S,$),d=w.getImageData(0,0,S,$).data,c.height=$,c.width=S,hl(d,c)}else throw new Error("Can not access image data")}else{if(u)return new Promise((y,w)=>{let $=f(),S=m($);if(!e||!S)return w();let b=new Image;b.crossOrigin="Anonymous",b.src=e,b.onload=()=>{$.width=b.width,$.height=b.height,S.drawImage(b,0,0,$.width,$.height);let C=S.getImageData(0,0,$.width,$.height);c.height=$.height,c.width=$.width,y(hl(C.data,c))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(d!==void 0)return hl(d,c);throw new Error("Input data provided is not supported - aborted tensor creation")},nv=(e,r)=>{let{width:i,height:s,download:o,dispose:u}=r,d=[1,s,i,4];return new hr({location:"texture",type:"float32",texture:e,dims:d,download:o,dispose:u})},iv=(e,r)=>{let{dataType:i,dims:s,download:o,dispose:u}=r;return new hr({location:"gpu-buffer",type:i??"float32",gpuBuffer:e,dims:s,download:o,dispose:u})},av=(e,r)=>{let{dataType:i,dims:s,download:o,dispose:u}=r;return new hr({location:"ml-tensor",type:i??"float32",mlTensor:e,dims:s,download:o,dispose:u})},sv=(e,r,i)=>new hr({location:"cpu-pinned",type:e,data:r,dims:i??[r.length]})}),Ki,Po,Sc,ov,e$=ae(()=>{"use strict";Ki=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Po=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),Sc=!1,ov=()=>{if(!Sc){Sc=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,r=typeof BigUint64Array<"u"&&BigUint64Array.from,i=globalThis.Float16Array,s=typeof i<"u"&&i.from;e&&(Ki.set("int64",BigInt64Array),Po.set(BigInt64Array,"int64")),r&&(Ki.set("uint64",BigUint64Array),Po.set(BigUint64Array,"uint64")),s?(Ki.set("float16",i),Po.set(i,"float16")):Ki.set("float16",Uint16Array)}}}),uv,lv,t$=ae(()=>{"use strict";qp(),uv=e=>{let r=1;for(let i=0;i<e.length;i++){let s=e[i];if(typeof s!="number"||!Number.isSafeInteger(s))throw new TypeError(`dims[${i}] must be an integer, got: ${s}`);if(s<0)throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${s}`);r*=s}return r},lv=(e,r)=>{switch(e.location){case"cpu":return new hr(e.type,e.data,r);case"cpu-pinned":return new hr({location:"cpu-pinned",data:e.data,type:e.type,dims:r});case"texture":return new hr({location:"texture",texture:e.texture,type:e.type,dims:r});case"gpu-buffer":return new hr({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:r});case"ml-tensor":return new hr({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:r});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),hr,qp=ae(()=>{"use strict";X2(),J2(),e$(),t$(),hr=class{constructor(e,r,i){ov();let s,o;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,s=e.type,o=e.dims,e.location){case"cpu-pinned":{let d=Ki.get(s);if(!d)throw new TypeError(`unsupported type "${s}" to create tensor from pinned buffer`);if(!(e.data instanceof d))throw new TypeError(`buffer should be of type ${d.name}`);this.cpuData=e.data;break}case"texture":{if(s!=="float32")throw new TypeError(`unsupported type "${s}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint8"&&s!=="bool"&&s!=="uint4"&&s!=="int4")throw new TypeError(`unsupported type "${s}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint64"&&s!=="int8"&&s!=="uint8"&&s!=="bool"&&s!=="uint4"&&s!=="int4")throw new TypeError(`unsupported type "${s}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let d,c;if(typeof e=="string")if(s=e,c=i,e==="string"){if(!Array.isArray(r))throw new TypeError("A string tensor's data must be a string array.");d=r}else{let f=Ki.get(e);if(f===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(r)){if(e==="float16"&&f===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${f.name} as data.`);e==="uint64"||e==="int64"?d=f.from(r,BigInt):d=f.from(r)}else if(r instanceof f)d=r;else if(r instanceof Uint8ClampedArray)if(e==="uint8")d=Uint8Array.from(r);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&r instanceof Uint16Array&&f!==Uint16Array)d=new globalThis.Float16Array(r.buffer,r.byteOffset,r.length);else throw new TypeError(`A ${s} tensor's data must be type of ${f}`)}else if(c=r,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let f=typeof e[0];if(f==="string")s="string",d=e;else if(f==="boolean")s="bool",d=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${f}.`)}else if(e instanceof Uint8ClampedArray)s="uint8",d=Uint8Array.from(e);else{let f=Po.get(e.constructor);if(f===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);s=f,d=e}if(c===void 0)c=[d.length];else if(!Array.isArray(c))throw new TypeError("A tensor's dims must be a number array");o=c,this.cpuData=d,this.dataLocation="cpu"}let u=uv(o);if(this.cpuData&&u!==this.cpuData.length&&!((s==="uint4"||s==="int4")&&Math.ceil(u/2)===this.cpuData.length))throw new Error(`Tensor's size(${u}) does not match data length(${this.cpuData.length}).`);this.type=s,this.dims=o,this.size=u}static async fromImage(e,r){return rv(e,r)}static fromTexture(e,r){return nv(e,r)}static fromGpuBuffer(e,r){return iv(e,r)}static fromMLTensor(e,r){return av(e,r)}static fromPinnedBuffer(e,r,i){return sv(e,r,i)}toDataURL(e){return ev(this,e)}toImageData(e){return tv(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let r=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=r,e&&this.disposer&&(this.disposer(),this.disposer=void 0),r}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return lv(this,e)}}}),Hr,dv=ae(()=>{"use strict";qp(),Hr=hr}),cv,r$=ae(()=>{"use strict";Wp(),X0(),dv(),Vp(),cv=class pv{constructor(r,i){this.handler=r,this.backend=i}async run(r,i,s){Tr(),Yi("InferenceSession.run");let o={},u={};if(typeof r!="object"||r===null||r instanceof Hr||Array.isArray(r))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let d=!0;if(typeof i=="object"){if(i===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof Hr)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(i.length===0)throw new TypeError("'fetches' cannot be an empty array.");d=!1;for(let y of i){if(typeof y!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(y)===-1)throw new RangeError(`'fetches' contains invalid output name: ${y}.`);o[y]=null}if(typeof s=="object"&&s!==null)u=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else{let y=!1,w=Object.getOwnPropertyNames(i);for(let $ of this.outputNames)if(w.indexOf($)!==-1){let S=i[$];(S===null||S instanceof Hr)&&(y=!0,d=!1,o[$]=S)}if(y){if(typeof s=="object"&&s!==null)u=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else u=i}}else if(typeof i<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let y of this.inputNames)if(typeof r[y]>"u")throw new Error(`input '${y}' is missing in 'feeds'.`);if(d)for(let y of this.outputNames)o[y]=null;let c;if(u.activeLoraAdapters!==void 0){if(!Array.isArray(u.activeLoraAdapters))throw new TypeError("'activeLoraAdapters' must be an array.");c=u.activeLoraAdapters.map(y=>{if(!(y instanceof Fp))throw new TypeError("'activeLoraAdapters' must be an array of LoraAdapter objects.");if(y.backend!==this.backend)throw new Error("LoRA adapter was created by a different backend than the session.");return y.handler})}let f=await this.handler.run(r,o,u,c),m={};for(let y in f)if(Object.hasOwnProperty.call(f,y)){let w=f[y];w instanceof Hr?m[y]=w:m[y]=new Hr(w.type,w.data,w.dims)}return Xi("InferenceSession.run"),mr(),m}async release(){return this.handler.dispose()}static async create(r,i,s,o){Tr(),Yi("InferenceSession.create");let u,d={};if(typeof r=="string"){if(u=r,typeof i=="object"&&i!==null)d=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(r instanceof Uint8Array){if(u=r,typeof i=="object"&&i!==null)d=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(r instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&r instanceof SharedArrayBuffer){let y=r,w=0,$=r.byteLength;if(typeof i=="object"&&i!==null)d=i;else if(typeof i=="number"){if(w=i,!Number.isSafeInteger(w))throw new RangeError("'byteOffset' must be an integer.");if(w<0||w>=y.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${y.byteLength}).`);if($=r.byteLength-w,typeof s=="number"){if($=s,!Number.isSafeInteger($))throw new RangeError("'byteLength' must be an integer.");if($<=0||w+$>y.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${y.byteLength-w}].`);if(typeof o=="object"&&o!==null)d=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else if(typeof s<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof i<"u")throw new TypeError("'options' must be an object.");u=new Uint8Array(y,w,$)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[c,f]=await K0(d),m=await c.createInferenceSessionHandler(u,f);return Xi("InferenceSession.create"),mr(),new pv(m,c)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),Hp,n$=ae(()=>{"use strict";r$(),Hp=cv}),fv,i$=ae(()=>{"use strict";X0(),fv=Fp}),a$=ae(()=>{"use strict"}),s$=ae(()=>{"use strict"}),o$=ae(()=>{"use strict"}),u$=ae(()=>{"use strict"}),l$={};us(l$,{InferenceSession:()=>Hp,LoraAdapter:()=>fv,TRACE:()=>Nl,TRACE_EVENT_BEGIN:()=>Yi,TRACE_EVENT_END:()=>Xi,TRACE_FUNC_BEGIN:()=>Tr,TRACE_FUNC_END:()=>mr,Tensor:()=>Hr,env:()=>dt,registerBackend:()=>is});var yr=ae(()=>{"use strict";Q2(),Y2(),n$(),i$(),dv(),a$(),s$(),Vp(),o$(),u$()}),Gp=ae(()=>{"use strict"}),hv={};us(hv,{default:()=>mv});var kc,Ec,mv,d$=ae(()=>{"use strict";var e;S_(),ra(),Kp(),kc="ort-wasm-proxy-worker",Ec=((e=globalThis.self)==null?void 0:e.name)===kc,Ec&&(self.onmessage=r=>{let{type:i,in:s}=r.data;try{switch(i){case"init-wasm":Qp(s.wasm).then(()=>{ff(s).then(()=>{postMessage({type:i})},o=>{postMessage({type:i,err:o})})},o=>{postMessage({type:i,err:o})});break;case"init-ep":{let{epName:o,env:u}=s;hf(u,o).then(()=>{postMessage({type:i})},d=>{postMessage({type:i,err:d})});break}case"copy-from":{let{buffer:o}=s,u=Pl(o);postMessage({type:i,out:u});break}case"create":{let{model:o,options:u}=s;mf(o,u).then(d=>{postMessage({type:i,out:d})},d=>{postMessage({type:i,err:d})});break}case"release":gf(s),postMessage({type:i});break;case"run":{let{sessionId:o,inputIndices:u,inputs:d,outputIndices:c,options:f}=s;yf(o,u,d,c,new Array(c.length).fill(null),f).then(m=>{m.some(y=>y[3]!=="cpu")?postMessage({type:i,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:i,out:m},wf([...d,...m]))},m=>{postMessage({type:i,err:m})});break}case"end-profiling":vf(s),postMessage({type:i});break;default:}}catch(o){postMessage({type:i,err:o})}}),mv=Ec?null:r=>new Worker(r??fr,{type:"module",name:kc})}),gv={};us(gv,{default:()=>yv});async function om(e={}){var co,Au;var r=e,i=!!globalThis.window,s=!!globalThis.WorkerGlobalScope,o=s&&((co=self.name)==null?void 0:co.startsWith("em-pthread"));r.mountExternalData=(p,g)=>{p.startsWith("./")&&(p=p.substring(2)),(r.jd||(r.jd=new Map)).set(p,g)},r.unmountExternalData=()=>{delete r.jd,delete r.ke,delete r.je,delete r.le},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let u=p=>async(...g)=>{var x;try{if(r.hd)throw Error("Session already started");let _=r.hd={Vd:g[0],errors:[]},z=await p(...g);if(r.hd!==_)throw Error("Session mismatch");(x=r.pd)==null||x.flush();let R=_.errors;if(0<R.length){let j=await Promise.all(R);if(j=j.filter(Y=>Y),0<j.length)throw Error(j.join(`
`))}return z}finally{r.hd=null}};r.jsepInit=(p,g)=>{if(p==="webgpu"){[r.pd,r.Ld,r.Pd,r.rd,r.Od,r.ic,r.Qd,r.Sd,r.Md,r.Nd,r.Rd]=g;let x=r.pd;r.jsepRegisterBuffer=(_,z,R,j)=>x.registerBuffer(_,z,R,j),r.jsepGetBuffer=_=>x.getBuffer(_),r.jsepCreateDownloader=(_,z,R)=>x.createDownloader(_,z,R),r.jsepOnCreateSession=_=>{x.onCreateSession(_)},r.jsepOnReleaseSession=_=>{x.onReleaseSession(_)},r.jsepOnRunStart=_=>x.onRunStart(_),r.Td=(_,z)=>{x.upload(_,z)}}else if(p==="webnn"){let x=g[0];[r.ce,r.Cd,r.webnnEnsureTensor,r.Dd,r.webnnDownloadTensor,r.be,r.webnnEnableTraceEvent]=g.slice(1),r.webnnReleaseTensorId=r.Cd,r.webnnUploadTensor=r.Dd,r.webnnRegisterMLContext=r.be,r.webnnOnRunStart=_=>x.onRunStart(_),r.webnnOnRunEnd=x.onRunEnd.bind(x),r.webnnOnReleaseSession=_=>{x.onReleaseSession(_)},r.webnnCreateMLTensorDownloader=(_,z)=>x.createMLTensorDownloader(_,z),r.webnnRegisterMLTensor=(_,z,R,j)=>x.registerMLTensor(_,z,R,j),r.webnnCreateMLContext=_=>x.createMLContext(_),r.webnnRegisterGraphInput=x.registerGraphInput.bind(x),r.webnnIsGraphInput=x.isGraphInput.bind(x),r.webnnRegisterGraphOutput=x.registerGraphOutput.bind(x),r.webnnIsGraphOutput=x.isGraphOutput.bind(x),r.webnnCreateTemporaryTensor=x.createTemporaryTensor.bind(x),r.webnnIsGraphInputOutputTypeSupported=x.isGraphInputOutputTypeSupported.bind(x)}};let d=()=>{let p=g=>(...x)=>{let _=jt;return x=g(...x),jt!=_?new Promise((z,R)=>{Bn={resolve:z,reject:R}}):x};(g=>{for(let x of g)r[x]=p(r[x])})("_OrtAppendExecutionProvider _OrtAppendExecutionProviderV2 _OrtCreateSession _OrtRun _OrtRunWithBinding _OrtBindInput".split(" ")),u!==void 0&&(r._OrtRun=u(r._OrtRun),r._OrtRunWithBinding=u(r._OrtRunWithBinding)),d=void 0};r.asyncInit=()=>{d==null||d()};var c,f,m=(p,g)=>{throw g},y=import.meta.url,w="";if(i||s){try{w=new URL(".",y).href}catch{}s&&(f=p=>{var g=new XMLHttpRequest;return g.open("GET",p,!1),g.responseType="arraybuffer",g.send(null),new Uint8Array(g.response)}),c=async p=>{if(V(p))return new Promise((x,_)=>{var z=new XMLHttpRequest;z.open("GET",p,!0),z.responseType="arraybuffer",z.onload=()=>{z.status==200||z.status==0&&z.response?x(z.response):_(z.status)},z.onerror=_,z.send(null)});var g=await fetch(p,{credentials:"same-origin"});if(g.ok)return g.arrayBuffer();throw Error(g.status+" : "+g.url)}}var $,S,b,C,N,k,T=console.log.bind(console),A=console.error.bind(console),D=T,B=A,P=!1,V=p=>p.startsWith("file://");function I(){or.buffer!=te.buffer&&F()}if(o){let p=function(g){try{var x=g.data,_=x.bd;if(_==="load"){let z=[];self.onmessage=R=>z.push(R),k=()=>{postMessage({bd:"loaded"});for(let R of z)p(R);self.onmessage=p};for(let R of x.Hd)r[R]&&!r[R].proxy||(r[R]=(...j)=>{postMessage({bd:"callHandler",Fd:R,args:j})},R=="print"&&(D=r[R]),R=="printErr"&&(B=r[R]));or=x.Zd,F(),S=x.$d,Se(),ei()}else if(_==="run"){(function(z){var R=(I(),he)[z+52>>>2>>>0];z=(I(),he)[z+56>>>2>>>0],Ls(R,R-z),Le(R)})(x.ad),fn(x.ad,0,0,1,0,0),sr(),ha(x.ad),X||(yu(),X=!0);try{mi(x.Xd,x.nd)}catch(z){if(z!="unwind")throw z}}else x.target!=="setimmediate"&&(_==="checkMailbox"?X&&Dn():_&&(B(`worker: received unknown command ${_}`),B(x)))}catch(z){throw vu(),z}};var X=!1;self.onunhandledrejection=g=>{throw g.reason||g},self.onmessage=p}var te,me,de,pe,G,he,ye,ge,ee,re,ue,O=!1;function F(){var p=or.buffer;r.HEAP8=te=new Int8Array(p),de=new Int16Array(p),r.HEAPU8=me=new Uint8Array(p),pe=new Uint16Array(p),r.HEAP32=G=new Int32Array(p),r.HEAPU32=he=new Uint32Array(p),ye=new Float32Array(p),ge=new Float64Array(p),ee=new BigInt64Array(p),re=new BigUint64Array(p)}function ne(){O=!0,o?k():Ar.vb()}function Q(p){throw B(p="Aborted("+p+")"),P=!0,p=new WebAssembly.RuntimeError(p+". Build with -sASSERTIONS for more info."),N==null||N(p),p}function we(){return{a:{na:no,jb:ja,g:yi,G:jl,f:ps,o:fs,h:hs,$:ms,b:In,S:zn,Ja:ys,n:qo,aa:Nn,_a:aa,Fa:On,Ha:Ho,$a:An,Ya:wi,Ra:_i,Xa:sa,la:Go,Ga:Ko,Da:Qo,Za:Gr,Ea:_s,eb:Zo,ga:Wl,ya:yt,wa:$r,fa:lr,N:Fl,I:ql,xa:pa,_:$i,za:Kl,Ua:bs,Ba:tu,Ka:ru,ua:Ss,ha:ga,Ta:ha,bb:Qr,Q:xi,r:_a,c:la,kb:ks,y:ou,M:Yr,D:Es,m:$a,s:Ts,lb:xa,J:ba,R:uu,j:Kt,u:Un,q:Cs,k:bi,Oa:Yl,Pa:Ea,Qa:lu,Ma:du,Na:cu,va:pu,gb:Xl,db:ed,v:td,ba:rd,ia:nd,cb:Jl,V:id,ab:Os,Ca:ad,F:Is,U:sd,ma:Ta,Aa:ud,ib:od,hb:ld,Va:Wn,Wa:hu,Ia:St,T:Ds,La:Ms,ka:Bs,Sa:Ps,ja:pn,nb:Dr,oa:Va,ob:Ou,pa:Vt,H:Wa,e:cd,t:ao,w:io,B:uo,pb:Wt,Z:zt,x:oo,qa:vn,X:zu,ca:en,qb:at,ea:pd,O:hd,sb:Xn,ra:ut,tb:lo,L:Ai,Y:Jn,d:so,A:fd,l:Cu,mb:qa,p:Iu,z:Zn,C:Xr,E:xr,K:md,sa:Yn,P:Nu,da:yn,W:Fa,ub:Rr,ta:Oi,rb:Jr,i:dd,a:or,fb:st}}}async function Se(){function p(_,z){var R=Ar=_.exports;_={};for(let[j,Y]of Object.entries(R))typeof Y=="function"?(R=Zr(Y),_[j]=R):_[j]=Y;return Ar=_,Ar=(function(){var j=Ar,Y=fe=>Ne=>fe(Ne)>>>0,oe=fe=>()=>fe()>>>0;return(j=Object.assign({},j)).wb=Y(j.wb),j.ec=oe(j.ec),j.gc=Y(j.gc),j.uc=Y(j.uc),j.vc=oe(j.vc),j.zc=Y(j.zc),j})(),ot.push(Ar.hc),gu=(_=Ar).wb,yu=_.xb,r._OrtInit=_.yb,r._OrtGetLastError=_.zb,r._OrtCreateSessionOptions=_.Ab,r._OrtAppendExecutionProvider=_.Bb,r._OrtGetEpDevices=_.Cb,r._OrtEpDevice_EpName=_.Db,r._OrtAppendExecutionProviderV2=_.Eb,r._OrtAddFreeDimensionOverride=_.Fb,r._OrtAddSessionConfigEntry=_.Gb,r._OrtReleaseSessionOptions=_.Hb,r._OrtCreateSession=_.Ib,r._OrtReleaseSession=_.Jb,r._OrtGetInputOutputCount=_.Kb,r._OrtGetInputOutputMetadata=_.Lb,r._OrtFree=_.Mb,r._OrtCreateTensor=_.Nb,r._OrtGetTensorData=_.Ob,r._OrtReleaseTensor=_.Pb,r._OrtCreateLoraAdapter=_.Qb,r._OrtReleaseLoraAdapter=_.Rb,r._OrtCreateRunOptions=_.Sb,r._OrtAddRunConfigEntry=_.Tb,r._OrtRunOptionsAddActiveLoraAdapter=_.Ub,r._OrtReleaseRunOptions=_.Vb,r._OrtCreateBinding=_.Wb,r._OrtBindInput=_.Xb,r._OrtBindOutput=_.Yb,r._OrtClearBoundOutputs=_.Zb,r._OrtReleaseBinding=_._b,r._OrtRunWithBinding=_.$b,r._OrtRun=_.ac,r._OrtEndProfiling=_.bc,r._JsepOutput=_.cc,r._JsepGetNodeName=_.dc,Ei=_.ec,cr=r._free=_.fc,Nr=r._malloc=_.gc,fn=_.jc,vu=_.kc,Ti=_.lc,wu=_.mc,Ia=_.nc,za=_.oc,Na=_.pc,je=_.qc,Vn=_.rc,Ls=_.sc,Le=_.tc,Us=_.uc,We=_.vc,_u=_.wc,js=_.xc,er=_.yc,Fn=_.zc,Ws=_.Ac,Oa=_.Bc,Vs=_.Cc,Fs=_.Dc,Aa=_.Ec,$u=_.Fc,xu=_.Gc,hn=_.Hc,Ra=_.Ic,qn=_.Jc,Da=_.Kc,qs=_.Lc,Ci=_.Mc,mn=_.Nc,Ma=_.Oc,Hs=_.Pc,Ii=_.Qc,Gs=_.Rc,Ks=_.Sc,Qs=_.Tc,Zs=_.Uc,Ys=_.Vc,Xs=_.Wc,Or=_.Xc,Ba=_.Yc,Pa=_._c,bu=_.$c,Su=_.kd,Hn=_.ld,ku=_.qd,Js=_.vd,eo=_.wd,it=_.xd,La=_.yd,zi=_.zd,Gn=_.Ad,to=_.Bd,Ua=_.Gd,Kn=_.Jd,Ni=_.fe,gn=_.ge,ro=_.he,Eu=_.ie,S=z,Ar}var g,x=we();return r.instantiateWasm?new Promise(_=>{r.instantiateWasm(x,(z,R)=>{_(p(z,R))})}):o?p(new WebAssembly.Instance(S,we()),S):(ue??(ue=r.locateFile?r.locateFile?r.locateFile("ort-wasm-simd-threaded.jsep.wasm",w):w+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/ort-wasm-simd-threaded.jsep-Dt5UNR3U.wasm",import.meta.url).href),g=await(async function(_){var z=ue;if(!$&&!V(z))try{var R=fetch(z,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(R,_)}catch(j){B(`wasm streaming compile failed: ${j}`),B("falling back to ArrayBuffer instantiation")}return(async function(j,Y){try{var oe=await(async function(fe){if(!$)try{var Ne=await c(fe);return new Uint8Array(Ne)}catch{}if(fe==ue&&$)fe=new Uint8Array($);else{if(!f)throw"both async and sync fetching of the wasm failed";fe=f(fe)}return fe})(j);return await WebAssembly.instantiate(oe,Y)}catch(fe){B(`failed to asynchronously prepare wasm: ${fe}`),Q(fe)}})(z,_)})(x),p(g.instance,g.module))}class Te{constructor(g){Qh(this,"name","ExitStatus");this.message=`Program terminated with exit(${g})`,this.status=g}}var ze=p=>{p.terminate(),p.onmessage=()=>{}},Pe=[],gt=0,Gt=null,Ut=p=>{De.length==0&&(on(),Cn(De[0]));var g=De.pop();if(!g)return 6;Ue.push(g),ct[p.ad]=g,g.ad=p.ad;var x={bd:"run",Xd:p.Wd,nd:p.nd,ad:p.ad};return g.postMessage(x,p.ud),0},pt=0,Ve=(p,g,...x)=>{var _,z=16*x.length,R=We(),j=Us(z),Y=j>>>3;for(_ of x)typeof _=="bigint"?((I(),ee)[Y++>>>0]=1n,(I(),ee)[Y++>>>0]=_):((I(),ee)[Y++>>>0]=0n,(I(),ge)[Y++>>>0]=_);return p=Ti(p,0,z,j,g),Le(R),p};function st(p){if(o)return Ve(0,1,p);if(b=p,!(0<pt)){for(var g of Ue)ze(g);for(g of De)ze(g);De=[],Ue=[],ct={},P=!0}m(0,new Te(p))}function rt(p){if(o)return Ve(1,0,p);St(p)}var St=p=>{if(b=p,o)throw rt(p),"unwind";st(p)},De=[],Ue=[],ot=[],ct={},It=p=>{var g=p.ad;delete ct[g],De.push(p),Ue.splice(Ue.indexOf(p),1),p.ad=0,wu(g)};function sr(){ot.forEach(p=>p())}var Cn=p=>new Promise(g=>{p.onmessage=z=>{var R=z.data;if(z=R.bd,R.md&&R.md!=Ei()){var j=ct[R.md];j?j.postMessage(R,R.ud):B(`Internal error! Worker sent a message "${z}" to target pthread ${R.md}, but that thread no longer exists!`)}else z==="checkMailbox"?Dn():z==="spawnThread"?Ut(R):z==="cleanupThread"?Qe(()=>{It(ct[R.Yd])}):z==="loaded"?(p.loaded=!0,g(p)):R.target==="setimmediate"?p.postMessage(R):z==="uncaughtException"?p.onerror(R.error):z==="callHandler"?r[R.Fd](...R.args):z&&B(`worker sent an unknown command ${z}`)},p.onerror=z=>{throw B(`worker sent an error! ${z.filename}:${z.lineno}: ${z.message}`),z};var x,_=[];for(x of[])r.propertyIsEnumerable(x)&&_.push(x);p.postMessage({bd:"load",Hd:_,Zd:or,$d:S})});function on(){var p=new Worker((()=>{let g=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new g("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});De.push(p)}var or,mi=(p,g)=>{pt=0,p=Oa(p,g),0<pt?b=p:Ia(p)},Cr=[],gi=0;function yi(p){var g=new cs(p>>>=0);return(I(),te)[g.cd+12>>>0]==0&&(ls(g,!0),gi--),ds(g,!1),Cr.push(g),Fn(p)}var vr=0,jl=()=>{je(0,0);var p=Cr.pop();_u(p.od),vr=0};function ls(p,g){g=g?1:0,(I(),te)[p.cd+12>>>0]=g}function ds(p,g){g=g?1:0,(I(),te)[p.cd+13>>>0]=g}class cs{constructor(g){this.od=g,this.cd=g-24}}var vi=p=>{var g=vr;if(!g)return Vn(0),0;var x=new cs(g);(I(),he)[x.cd+16>>>2>>>0]=g;var _=(I(),he)[x.cd+4>>>2>>>0];if(!_)return Vn(0),g;for(var z of p){if(z===0||z===_)break;if(er(z,_,x.cd+16))return Vn(z),g}return Vn(_),g};function ps(){return vi([])}function fs(p){return vi([p>>>0])}function hs(p,g,x,_){return vi([p>>>0,g>>>0,x>>>0,_>>>0])}var ms=()=>{var p=Cr.pop();p||Q("no exception to throw");var g=p.od;throw(I(),te)[p.cd+13>>>0]==0&&(Cr.push(p),ds(p,!0),ls(p,!1),gi++),js(g),vr=g};function In(p,g,x){var _=new cs(p>>>=0);throw g>>>=0,x>>>=0,(I(),he)[_.cd+16>>>2>>>0]=0,(I(),he)[_.cd+4>>>2>>>0]=g,(I(),he)[_.cd+8>>>2>>>0]=x,js(p),gi++,vr=p}var zn=()=>gi;function gs(p,g,x,_){return o?Ve(2,1,p,g,x,_):ys(p,g,x,_)}function ys(p,g,x,_){if(p>>>=0,g>>>=0,x>>>=0,_>>>=0,!globalThis.SharedArrayBuffer)return 6;var z=[];return o&&z.length===0?gs(p,g,x,_):(p={Wd:x,ad:p,nd:_,ud:z},o?(p.bd="spawnThread",postMessage(p,z),0):Ut(p))}function qo(p){throw vr||(vr=p>>>0),vr}var vs=globalThis.TextDecoder&&new TextDecoder,ws=(p,g,x,_)=>{if(x=g+x,_)return x;for(;p[g]&&!(g>=x);)++g;return g},ia=(p,g=0,x,_)=>{if(16<(x=ws(p,g>>>=0,x,_))-g&&p.buffer&&vs)return vs.decode(p.buffer instanceof ArrayBuffer?p.subarray(g,x):p.slice(g,x));for(_="";g<x;){var z=p[g++];if(128&z){var R=63&p[g++];if((224&z)==192)_+=String.fromCharCode((31&z)<<6|R);else{var j=63&p[g++];65536>(z=(240&z)==224?(15&z)<<12|R<<6|j:(7&z)<<18|R<<12|j<<6|63&p[g++])?_+=String.fromCharCode(z):(z-=65536,_+=String.fromCharCode(55296|z>>10,56320|1023&z))}}else _+=String.fromCharCode(z)}return _},ft=(p,g,x)=>(p>>>=0)?ia((I(),me),p,g,x):"";function Nn(p,g,x){return o?Ve(3,1,p,g,x):0}function aa(p,g){if(o)return Ve(4,1,p,g)}function On(p,g){if(o)return Ve(5,1,p,g)}function Ho(p,g,x){if(o)return Ve(6,1,p,g,x)}function An(p,g,x){return o?Ve(7,1,p,g,x):0}function wi(p,g){if(o)return Ve(8,1,p,g)}function _i(p,g,x){if(o)return Ve(9,1,p,g,x)}function sa(p,g,x,_){if(o)return Ve(10,1,p,g,x,_)}function Go(p,g,x,_){if(o)return Ve(11,1,p,g,x,_)}function Ko(p,g,x,_){if(o)return Ve(12,1,p,g,x,_)}function Qo(p){if(o)return Ve(13,1,p)}function Gr(p,g){if(o)return Ve(14,1,p,g)}function _s(p,g,x){if(o)return Ve(15,1,p,g,x)}var Zo=()=>Q(""),wr=p=>{p>>>=0;for(var g="";;){var x=(I(),me)[p++>>>0];if(!x)return g;g+=String.fromCharCode(x)}},oa={},ua={},un=class extends Error{constructor(p){super(p),this.name="BindingError"}};function _r(p,g,x={}){return(function(_,z,R={}){var j=z.name;if(!_)throw new un(`type "${j}" must have a positive integer typeid pointer`);if(ua.hasOwnProperty(_)){if(R.Id)return;throw new un(`Cannot register type '${j}' twice`)}ua[_]=z,oa.hasOwnProperty(_)&&(z=oa[_],delete oa[_],z.forEach(Y=>Y()))})(p,g,x)}var Yo=(p,g,x)=>{switch(g){case 1:return x?_=>(I(),te)[_>>>0]:_=>(I(),me)[_>>>0];case 2:return x?_=>(I(),de)[_>>>1>>>0]:_=>(I(),pe)[_>>>1>>>0];case 4:return x?_=>(I(),G)[_>>>2>>>0]:_=>(I(),he)[_>>>2>>>0];case 8:return x?_=>(I(),ee)[_>>>3>>>0]:_=>(I(),re)[_>>>3>>>0];default:throw new TypeError(`invalid integer width (${g}): ${p}`)}};function Wl(p,g,x,_,z){p>>>=0,x>>>=0,g=wr(g>>>0);let R=j=>j;if(_=_===0n){let j=8*x;R=Y=>BigInt.asUintN(j,Y),z=R(z)}_r(p,{name:g,Zc:R,ed:(j,Y)=>(typeof Y=="number"&&(Y=BigInt(Y)),Y),dd:Yo(g,x,!_),gd:null})}function yt(p,g,x,_){_r(p>>>=0,{name:g=wr(g>>>0),Zc:function(z){return!!z},ed:function(z,R){return R?x:_},dd:function(z){return this.Zc((I(),me)[z>>>0])},gd:null})}var Xo=[],Ir=[0,1,,1,null,1,!0,1,!1,1];function la(p){9<(p>>>=0)&&--Ir[p+1]===0&&(Ir[p]=void 0,Xo.push(p))}var Mt=p=>{if(!p)throw new un(`Cannot use deleted val. handle = ${p}`);return Ir[p]},ur=p=>{switch(p){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let g=Xo.pop()||Ir.length;return Ir[g]=p,Ir[g+1]=1,g}};function da(p){return this.Zc((I(),he)[p>>>2>>>0])}var ca={name:"emscripten::val",Zc:p=>{var g=Mt(p);return la(p),g},ed:(p,g)=>ur(g),dd:da,gd:null};function $r(p){return _r(p>>>0,ca)}var Vl=(p,g)=>{switch(g){case 4:return function(x){return this.Zc((I(),ye)[x>>>2>>>0])};case 8:return function(x){return this.Zc((I(),ge)[x>>>3>>>0])};default:throw new TypeError(`invalid float width (${g}): ${p}`)}};function lr(p,g,x){x>>>=0,_r(p>>>=0,{name:g=wr(g>>>0),Zc:_=>_,ed:(_,z)=>z,dd:Vl(g,x),gd:null})}function Fl(p,g,x,_,z){p>>>=0,x>>>=0,g=wr(g>>>0);let R=Y=>Y;if(_===0){var j=32-8*x;R=Y=>Y<<j>>>j,z=R(z)}_r(p,{name:g,Zc:R,ed:(Y,oe)=>oe,dd:Yo(g,x,_!==0),gd:null})}function ql(p,g,x){function _(R){var j=(I(),he)[R>>>2>>>0];return R=(I(),he)[R+4>>>2>>>0],new z((I(),te).buffer,R,j)}var z=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][g];_r(p>>>=0,{name:x=wr(x>>>0),Zc:_,dd:_},{Id:!0})}var Kr=(p,g,x)=>{var _=(I(),me);if(g>>>=0,0<x){var z=g;x=g+x-1;for(var R=0;R<p.length;++R){var j=p.codePointAt(R);if(127>=j){if(g>=x)break;_[g++>>>0]=j}else if(2047>=j){if(g+1>=x)break;_[g++>>>0]=192|j>>6,_[g++>>>0]=128|63&j}else if(65535>=j){if(g+2>=x)break;_[g++>>>0]=224|j>>12,_[g++>>>0]=128|j>>6&63,_[g++>>>0]=128|63&j}else{if(g+3>=x)break;_[g++>>>0]=240|j>>18,_[g++>>>0]=128|j>>12&63,_[g++>>>0]=128|j>>6&63,_[g++>>>0]=128|63&j,R++}}_[g>>>0]=0,p=g-z}else p=0;return p},ln=p=>{for(var g=0,x=0;x<p.length;++x){var _=p.charCodeAt(x);127>=_?g++:2047>=_?g+=2:55296<=_&&57343>=_?(g+=4,++x):g+=3}return g};function pa(p,g){_r(p>>>=0,{name:g=wr(g>>>0),Zc(x){var _=(I(),he)[x>>>2>>>0];return _=ft(x+4,_,!0),cr(x),_},ed(x,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var z=typeof _=="string";if(!(z||ArrayBuffer.isView(_)&&_.BYTES_PER_ELEMENT==1))throw new un("Cannot pass non-string to std::string");var R=z?ln(_):_.length,j=Nr(4+R+1),Y=j+4;return(I(),he)[j>>>2>>>0]=R,z?Kr(_,Y,R+1):(I(),me).set(_,Y>>>0),x!==null&&x.push(cr,j),j},dd:da,gd(x){cr(x)}})}var Rn=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,fa=(p,g,x)=>{if(p>>>=1,16<(g=ws((I(),pe),p,g/2,x))-p&&Rn)return Rn.decode((I(),pe).slice(p,g));for(x="";p<g;++p){var _=(I(),pe)[p>>>0];x+=String.fromCharCode(_)}return x},Hl=(p,g,x)=>{if(x??(x=2147483647),2>x)return 0;var _=g;x=(x-=2)<2*p.length?x/2:p.length;for(var z=0;z<x;++z){var R=p.charCodeAt(z);(I(),de)[g>>>1>>>0]=R,g+=2}return(I(),de)[g>>>1>>>0]=0,g-_},Gl=p=>2*p.length,$s=(p,g,x)=>{var _="";p>>>=2;for(var z=0;!(z>=g/4);z++){var R=(I(),he)[p+z>>>0];if(!R&&!x)break;_+=String.fromCodePoint(R)}return _},Jo=(p,g,x)=>{if(g>>>=0,x??(x=2147483647),4>x)return 0;var _=g;x=_+x-4;for(var z=0;z<p.length;++z){var R=p.codePointAt(z);if(65535<R&&z++,(I(),G)[g>>>2>>>0]=R,(g+=4)+4>x)break}return(I(),G)[g>>>2>>>0]=0,g-_},xs=p=>{for(var g=0,x=0;x<p.length;++x)65535<p.codePointAt(x)&&x++,g+=4;return g};function $i(p,g,x){if(p>>>=0,g>>>=0,x=wr(x>>>=0),g===2)var _=fa,z=Hl,R=Gl;else _=$s,z=Jo,R=xs;_r(p,{name:x,Zc:j=>{var Y=(I(),he)[j>>>2>>>0];return Y=_(j+4,Y*g,!0),cr(j),Y},ed:(j,Y)=>{if(typeof Y!="string")throw new un(`Cannot pass non-string to C++ string type ${x}`);var oe=R(Y),fe=Nr(4+oe+g);return(I(),he)[fe>>>2>>>0]=oe/g,z(Y,fe+4,oe+g),j!==null&&j.push(cr,fe),fe},dd:da,gd(j){cr(j)}})}function Kl(p,g){_r(p>>>=0,{Kd:!0,name:g=wr(g>>>0),Zc:()=>{},ed:()=>{}})}function bs(p){fn(p>>>0,!s,1,!i,131072,!1),sr()}var Qe=p=>{if(!P)try{if(p(),!(0<pt))try{o?Ei()&&Ia(b):St(b)}catch(g){g instanceof Te||g=="unwind"||m(0,g)}}catch(g){g instanceof Te||g=="unwind"||m(0,g)}},eu=!Atomics.waitAsync||((Au=globalThis.navigator)==null?void 0:Au.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ha(p){p>>>=0,eu||(Atomics.waitAsync((I(),G),p>>>2,p).value.then(Dn),p+=128,Atomics.store((I(),G),p>>>2,1))}var Dn=()=>Qe(()=>{var p=Ei();p&&(ha(p),Na())});function tu(p,g){(p>>>=0)==g>>>0?setTimeout(Dn):o?postMessage({md:p,bd:"checkMailbox"}):(p=ct[p])&&p.postMessage({bd:"checkMailbox"})}var ma=[];function ru(p,g,x,_,z){for(g>>>=0,z>>>=0,ma.length=0,x=z>>>3,_=z+_>>>3;x<_;){var R;R=(I(),ee)[x++>>>0]?(I(),ee)[x++>>>0]:(I(),ge)[x++>>>0],ma.push(R)}return(g?Qn[g]:Tu[p])(...ma)}var Ss=()=>{pt=0};function ga(p){p>>>=0,o?postMessage({bd:"cleanupThread",Yd:p}):It(ct[p])}function Qr(p){}var dr=p=>{try{p()}catch(g){Q(g)}};function Zr(p){var g=(...x)=>{ya.push(p);try{return p(...x)}finally{P||(ya.pop(),jt&&Jt===1&&ya.length===0&&(Jt=0,pt+=1,dr(gn),typeof Fibers<"u"&&Fibers.ne()))}};return nu.set(p,g),g}var Jt=0,jt=null,zr=0,ya=[],va=new Map,Mn=new Map,nu=new Map,iu=0,Bn=null,au=[],su=p=>(function(g){if(!P){if(Jt===0){var x=!1,_=!1;g((z=0)=>{if(!P&&(zr=z,x=!0,_)){Jt=2,dr(()=>ro(jt)),typeof MainLoop<"u"&&MainLoop.Ed&&MainLoop.resume(),z=!1;try{var R=(function(){var oe=(I(),G)[jt+8>>>2>>>0];return oe=Mn.get(oe),oe=nu.get(oe),--pt,oe()})()}catch(oe){R=oe,z=!0}var j=!1;if(!jt){var Y=Bn;Y&&(Bn=null,(z?Y.reject:Y.resolve)(R),j=!0)}if(z&&!j)throw R}}),_=!0,x||(Jt=1,jt=(function(){var z=Nr(65548),R=z+12;if((I(),he)[z>>>2>>>0]=R,(I(),he)[z+4>>>2>>>0]=R+65536,R=ya[0],!va.has(R)){var j=iu++;va.set(R,j),Mn.set(j,R)}return R=va.get(R),(I(),G)[z+8>>>2>>>0]=R,z})(),typeof MainLoop<"u"&&MainLoop.Ed&&MainLoop.pause(),dr(()=>Ni(jt)))}else Jt===2?(Jt=0,dr(Eu),cr(jt),jt=null,au.forEach(Qe)):Q(`invalid state: ${Jt}`);return zr}})(g=>{p().then(g)});function xi(p){return p>>>=0,su(async()=>{var g=await Mt(p);return ur(g)})}var dn=[],Pn=p=>{var g=dn.length;return dn.push(p),g},wa=(p,g)=>{for(var x=Array(p),_=0;_<p;++_){var z=_,R=(I(),he)[g+4*_>>>2>>>0],j=ua[R];if(j===void 0)throw p=`parameter ${_}`,R=gu(R),g=wr(R),cr(R),new un(`${p} has unknown type ${g}`);x[z]=j}return x},Ql=(p,g,x)=>{var _=[];return p=p(_,x),_.length&&((I(),he)[g>>>2>>>0]=ur(_)),p},Zl={},Ln=p=>{var g=Zl[p];return g===void 0?wr(p):g};function _a(p,g,x){var[_,...z]=wa(p,g>>>0);g=_.ed.bind(_);var R=z.map(oe=>oe.dd.bind(oe));p--;var j={toValue:Mt};switch(p=R.map((oe,fe)=>{var Ne=`argFromPtr${fe}`;return j[Ne]=oe,`${Ne}(args${fe?"+"+8*fe:""})`}),x){case 0:var Y="toValue(handle)";break;case 2:Y="new (toValue(handle))";break;case 3:Y="";break;case 1:j.getStringOrSymbol=Ln,Y="toValue(handle)[getStringOrSymbol(methodName)]"}return Y+=`(${p})`,_.Kd||(j.toReturnWire=g,j.emval_returnValue=Ql,Y=`return emval_returnValue(toReturnWire, destructorsRef, ${Y})`),Y=`return function (handle, methodName, destructorsRef, args) {
  ${Y}
  }`,x=new Function(Object.keys(j),Y)(...Object.values(j)),Y=`methodCaller<(${z.map(oe=>oe.name)}) => ${_.name}>`,Pn(Object.defineProperty(x,"name",{value:Y}))}function ks(p,g){return g>>>=0,(p=Mt(p>>>0))==Mt(g)}function ou(p){return(p>>>=0)?(p=Ln(p),ur(globalThis[p])):ur(globalThis)}function Yr(p){return p=Ln(p>>>0),ur(r[p])}function Es(p,g){return g>>>=0,p=Mt(p>>>0),g=Mt(g),ur(p[g])}function $a(p){9<(p>>>=0)&&(Ir[p+1]+=1)}function Ts(p,g,x,_,z){return dn[p>>>0](g>>>0,x>>>0,_>>>0,z>>>0)}function xa(p,g,x,_,z){return Ts(p>>>0,g>>>0,x>>>0,_>>>0,z>>>0)}function ba(){return ur([])}function uu(p){p=Mt(p>>>0);for(var g=Array(p.length),x=0;x<p.length;x++)g[x]=p[x];return ur(g)}function Kt(p){return ur(Ln(p>>>0))}function Un(){return ur({})}function Cs(p){for(var g=Mt(p>>>=0);g.length;){var x=g.pop();g.pop()(x)}la(p)}function bi(p,g,x){g>>>=0,x>>>=0,p=Mt(p>>>0),g=Mt(g),x=Mt(x),p[g]=x}function Yl(p,g){p=-9007199254740992>p||9007199254740992<p?NaN:Number(p),g>>>=0,p=new Date(1e3*p),(I(),G)[g>>>2>>>0]=p.getUTCSeconds(),(I(),G)[g+4>>>2>>>0]=p.getUTCMinutes(),(I(),G)[g+8>>>2>>>0]=p.getUTCHours(),(I(),G)[g+12>>>2>>>0]=p.getUTCDate(),(I(),G)[g+16>>>2>>>0]=p.getUTCMonth(),(I(),G)[g+20>>>2>>>0]=p.getUTCFullYear()-1900,(I(),G)[g+24>>>2>>>0]=p.getUTCDay(),p=(p.getTime()-Date.UTC(p.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(I(),G)[g+28>>>2>>>0]=p}var Sa=p=>p%4==0&&(p%100!=0||p%400==0),ka=[0,31,60,91,121,152,182,213,244,274,305,335],jn=[0,31,59,90,120,151,181,212,243,273,304,334];function Ea(p,g){p=-9007199254740992>p||9007199254740992<p?NaN:Number(p),g>>>=0,p=new Date(1e3*p),(I(),G)[g>>>2>>>0]=p.getSeconds(),(I(),G)[g+4>>>2>>>0]=p.getMinutes(),(I(),G)[g+8>>>2>>>0]=p.getHours(),(I(),G)[g+12>>>2>>>0]=p.getDate(),(I(),G)[g+16>>>2>>>0]=p.getMonth(),(I(),G)[g+20>>>2>>>0]=p.getFullYear()-1900,(I(),G)[g+24>>>2>>>0]=p.getDay();var x=(Sa(p.getFullYear())?ka:jn)[p.getMonth()]+p.getDate()-1|0;(I(),G)[g+28>>>2>>>0]=x,(I(),G)[g+36>>>2>>>0]=-60*p.getTimezoneOffset(),x=new Date(p.getFullYear(),6,1).getTimezoneOffset();var _=new Date(p.getFullYear(),0,1).getTimezoneOffset();p=0|(x!=_&&p.getTimezoneOffset()==Math.min(_,x)),(I(),G)[g+32>>>2>>>0]=p}function lu(p){p>>>=0;var g=new Date((I(),G)[p+20>>>2>>>0]+1900,(I(),G)[p+16>>>2>>>0],(I(),G)[p+12>>>2>>>0],(I(),G)[p+8>>>2>>>0],(I(),G)[p+4>>>2>>>0],(I(),G)[p>>>2>>>0],0),x=(I(),G)[p+32>>>2>>>0],_=g.getTimezoneOffset(),z=new Date(g.getFullYear(),6,1).getTimezoneOffset(),R=new Date(g.getFullYear(),0,1).getTimezoneOffset(),j=Math.min(R,z);return 0>x?(I(),G)[p+32>>>2>>>0]=+(z!=R&&j==_):0<x!=(j==_)&&(z=Math.max(R,z),g.setTime(g.getTime()+6e4*((0<x?j:z)-_))),(I(),G)[p+24>>>2>>>0]=g.getDay(),x=(Sa(g.getFullYear())?ka:jn)[g.getMonth()]+g.getDate()-1|0,(I(),G)[p+28>>>2>>>0]=x,(I(),G)[p>>>2>>>0]=g.getSeconds(),(I(),G)[p+4>>>2>>>0]=g.getMinutes(),(I(),G)[p+8>>>2>>>0]=g.getHours(),(I(),G)[p+12>>>2>>>0]=g.getDate(),(I(),G)[p+16>>>2>>>0]=g.getMonth(),(I(),G)[p+20>>>2>>>0]=g.getYear(),p=g.getTime(),BigInt(isNaN(p)?-1:p/1e3)}function du(p,g,x,_,z,R,j){return o?Ve(16,1,p,g,x,_,z,R,j):-52}function cu(p,g,x,_,z,R){if(o)return Ve(17,1,p,g,x,_,z,R)}var Si={},Is=()=>performance.timeOrigin+performance.now();function pu(p,g){if(o)return Ve(18,1,p,g);if(Si[p]&&(clearTimeout(Si[p].id),delete Si[p]),!g)return 0;var x=setTimeout(()=>{delete Si[p],Qe(()=>za(p,performance.timeOrigin+performance.now()))},g);return Si[p]={id:x,me:g},0}function Xl(p,g,x,_){p>>>=0,g>>>=0,x>>>=0,_>>>=0;var z=new Date().getFullYear(),R=new Date(z,0,1).getTimezoneOffset();z=new Date(z,6,1).getTimezoneOffset();var j=Math.max(R,z);(I(),he)[p>>>2>>>0]=60*j,(I(),G)[g>>>2>>>0]=+(R!=z),p=(g=Y=>{var oe=Math.abs(Y);return`UTC${0<=Y?"-":"+"}${String(Math.floor(oe/60)).padStart(2,"0")}${String(oe%60).padStart(2,"0")}`})(R),g=g(z),z<R?(Kr(p,x,17),Kr(g,_,17)):(Kr(p,_,17),Kr(g,x,17))}var Jl=()=>Date.now();function ed(p,g,x){return x>>>=0,0<=p&&3>=p?(p===0?p=Date.now():p=performance.timeOrigin+performance.now(),p=Math.round(1e6*p),(I(),ee)[x>>>3>>>0]=BigInt(p),0):28}var zs=[],Ns=(p,g)=>{zs.length=0;for(var x;x=(I(),me)[p++>>>0];){var _=x!=105;g+=(_&=x!=112)&&g%8?4:0,zs.push(x==112?(I(),he)[g>>>2>>>0]:x==106?(I(),ee)[g>>>3>>>0]:x==105?(I(),G)[g>>>2>>>0]:(I(),ge)[g>>>3>>>0]),g+=_?8:4}return zs};function td(p,g,x){return p>>>=0,g=Ns(g>>>0,x>>>0),Qn[p](...g)}function rd(p,g,x){return p>>>=0,g=Ns(g>>>0,x>>>0),Qn[p](...g)}var nd=()=>{};function id(p,g){return B(ft(p>>>0,g>>>0))}var Os=()=>{throw pt+=1,"unwind"};function ad(){return 4294901760}var sd=()=>navigator.hardwareConcurrency,cn={},ki=p=>{var g;return(g=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(p))?+g[1]:(g=/:(\d+):\d+(?:\)|$)/.exec(p))?2147483648|+g[1]:0},fu=p=>{for(var g of p)(p=ki(g))&&(cn[p]=g)};function od(){var p=Error().stack.toString().split(`
`);return p[0]=="Error"&&p.shift(),fu(p),cn.sd=ki(p[3]),cn.Ud=p,cn.sd}function Ta(p){if(!(p=cn[p>>>0]))return 0;var g;if(g=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(p))p=g[1];else if(g=/^\s+at (.*) \(.*\)$/.exec(p))p=g[1];else{if(!(g=/^(.+?)@/.exec(p)))return 0;p=g[1]}cr(Ta.td??0),g=ln(p)+1;var x=Nr(g);return x&&Kr(p,x,g),Ta.td=x,Ta.td}function ud(p){p>>>=0;var g=(I(),me).length;if(p<=g||4294901760<p)return!1;for(var x=1;4>=x;x*=2){var _=g*(1+.2/x);_=Math.min(_,p+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(p,_)/65536))-or.buffer.byteLength+65535)/65536|0;try{or.grow(_),F();var z=1;break e}catch{}z=void 0}if(z)return!0}return!1}function ld(p,g,x){if(p>>>=0,g>>>=0,cn.sd==p)var _=cn.Ud;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),fu(_);for(var z=3;_[z]&&ki(_[z])!=p;)++z;for(p=0;p<x&&_[p+z];++p)(I(),G)[g+4*p>>>2>>>0]=ki(_[p+z]);return p}var As,Rs={},Ca=()=>{var _;if(!As){var p,g={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((_=globalThis.navigator)==null?void 0:_.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(p in Rs)Rs[p]===void 0?delete g[p]:g[p]=Rs[p];var x=[];for(p in g)x.push(`${p}=${g[p]}`);As=x}return As};function Wn(p,g){if(o)return Ve(19,1,p,g);p>>>=0,g>>>=0;var x,_=0,z=0;for(x of Ca()){var R=g+_;(I(),he)[p+z>>>2>>>0]=R,_+=Kr(x,R,1/0)+1,z+=4}return 0}function hu(p,g){if(o)return Ve(20,1,p,g);p>>>=0,g>>>=0;var x=Ca();for(var _ of((I(),he)[p>>>2>>>0]=x.length,p=0,x))p+=ln(_)+1;return(I(),he)[g>>>2>>>0]=p,0}function Ds(p){return o?Ve(21,1,p):52}function Ms(p,g,x,_,z){return o?Ve(22,1,p,g,x,_,z):52}function Bs(p,g,x,_){return o?Ve(23,1,p,g,x,_):52}function Ps(p,g,x,_){return o?Ve(24,1,p,g,x,_):70}var mu=[null,[],[]];function pn(p,g,x,_){if(o)return Ve(25,1,p,g,x,_);g>>>=0,x>>>=0,_>>>=0;for(var z=0,R=0;R<x;R++){var j=(I(),he)[g>>>2>>>0],Y=(I(),he)[g+4>>>2>>>0];g+=8;for(var oe=0;oe<Y;oe++){var fe=p,Ne=(I(),me)[j+oe>>>0],Fe=mu[fe];Ne===0||Ne===10?((fe===1?D:B)(ia(Fe)),Fe.length=0):Fe.push(Ne)}z+=Y}return(I(),he)[_>>>2>>>0]=z,0}function dd(p){return p>>>0}o||(function(){for(var p=r.numThreads-1;p--;)on();Pe.push(async()=>{var g=(async function(){if(!o)return Promise.all(De.map(Cn))})();gt++,await g,--gt==0&&Gt&&(g=Gt,Gt=null,g())})})(),o||(or=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),F()),r.wasmBinary&&($=r.wasmBinary),r.stackSave=()=>We(),r.stackRestore=p=>Le(p),r.stackAlloc=p=>Us(p),r.setValue=function(p,g,x="i8"){switch(x.endsWith("*")&&(x="*"),x){case"i1":case"i8":(I(),te)[p>>>0]=g;break;case"i16":(I(),de)[p>>>1>>>0]=g;break;case"i32":(I(),G)[p>>>2>>>0]=g;break;case"i64":(I(),ee)[p>>>3>>>0]=BigInt(g);break;case"float":(I(),ye)[p>>>2>>>0]=g;break;case"double":(I(),ge)[p>>>3>>>0]=g;break;case"*":(I(),he)[p>>>2>>>0]=g;break;default:Q(`invalid type for setValue: ${x}`)}},r.getValue=function(p,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":return(I(),te)[p>>>0];case"i16":return(I(),de)[p>>>1>>>0];case"i32":return(I(),G)[p>>>2>>>0];case"i64":return(I(),ee)[p>>>3>>>0];case"float":return(I(),ye)[p>>>2>>>0];case"double":return(I(),ge)[p>>>3>>>0];case"*":return(I(),he)[p>>>2>>>0];default:Q(`invalid type for getValue: ${g}`)}},r.UTF8ToString=ft,r.stringToUTF8=Kr,r.lengthBytesUTF8=ln;var gu,yu,Ei,cr,Nr,fn,vu,Ti,wu,Ia,za,Na,je,Vn,Ls,Le,Us,We,_u,js,er,Fn,Ws,Oa,Vs,Fs,Aa,$u,xu,hn,Ra,qn,Da,qs,Ci,mn,Ma,Hs,Ii,Gs,Ks,Qs,Zs,Ys,Xs,Or,Ba,Pa,bu,Su,Hn,ku,Js,eo,it,La,zi,Gn,to,Ua,Kn,Ni,gn,ro,Eu,Ar,Tu=[st,rt,gs,Nn,aa,On,Ho,An,wi,_i,sa,Go,Ko,Qo,Gr,_s,du,cu,pu,Wn,hu,Ds,Ms,Bs,Ps,pn],Qn={1124124:(p,g,x,_,z)=>{if(r===void 0||!r.jd)return 1;if((p=ft(Number(p>>>0))).startsWith("./")&&(p=p.substring(2)),!(p=r.jd.get(p)))return 2;if(g=Number(g>>>0),x=Number(x>>>0),_=Number(_>>>0),g+x>p.byteLength)return 3;try{let R=p.subarray(g,g+x);switch(z){case 0:(I(),me).set(R,_>>>0);break;case 1:r.ae?r.ae(_,R):r.Td(_,R);break;default:return 4}return 0}catch{return 4}},1124948:()=>typeof navigator<"u"&&navigator.de?1:0,1125020:(p,g,x)=>{r.Dd(p,(I(),me).subarray(g>>>0,g+x>>>0))},1125084:()=>r.ce(),1125126:p=>{r.Cd(p)},1125163:()=>{r.Md()},1125194:()=>{r.Nd()},1125223:()=>{r.Rd()},1125248:p=>r.Ld(p),1125281:p=>r.Pd(p),1125313:(p,g,x)=>{r.rd(Number(p),Number(g),Number(x),!0)},1125376:(p,g,x)=>{r.rd(Number(p),Number(g),Number(x))},1125433:()=>typeof wasmOffsetConverter<"u",1125490:p=>{r.ic("Abs",p,void 0)},1125541:p=>{r.ic("Neg",p,void 0)},1125592:p=>{r.ic("Floor",p,void 0)},1125645:p=>{r.ic("Ceil",p,void 0)},1125697:p=>{r.ic("Reciprocal",p,void 0)},1125755:p=>{r.ic("Sqrt",p,void 0)},1125807:p=>{r.ic("Exp",p,void 0)},1125858:p=>{r.ic("Erf",p,void 0)},1125909:p=>{r.ic("Sigmoid",p,void 0)},1125964:(p,g,x)=>{r.ic("HardSigmoid",p,{alpha:g,beta:x})},1126043:p=>{r.ic("HardSwish",p,void 0)},1126100:p=>{r.ic("Log",p,void 0)},1126151:p=>{r.ic("Sin",p,void 0)},1126202:p=>{r.ic("Cos",p,void 0)},1126253:p=>{r.ic("Tan",p,void 0)},1126304:p=>{r.ic("Asin",p,void 0)},1126356:p=>{r.ic("Acos",p,void 0)},1126408:p=>{r.ic("Atan",p,void 0)},1126460:p=>{r.ic("Sinh",p,void 0)},1126512:p=>{r.ic("Cosh",p,void 0)},1126564:p=>{r.ic("Asinh",p,void 0)},1126617:p=>{r.ic("Acosh",p,void 0)},1126670:p=>{r.ic("Atanh",p,void 0)},1126723:p=>{r.ic("Tanh",p,void 0)},1126775:p=>{r.ic("Not",p,void 0)},1126826:(p,g,x)=>{r.ic("Clip",p,{min:g,max:x})},1126895:p=>{r.ic("Clip",p,void 0)},1126947:(p,g)=>{r.ic("Elu",p,{alpha:g})},1127005:p=>{r.ic("Gelu",p,void 0)},1127057:p=>{r.ic("Relu",p,void 0)},1127109:(p,g)=>{r.ic("LeakyRelu",p,{alpha:g})},1127173:(p,g)=>{r.ic("ThresholdedRelu",p,{alpha:g})},1127243:(p,g)=>{r.ic("Cast",p,{to:g})},1127301:p=>{r.ic("Add",p,void 0)},1127352:p=>{r.ic("Sub",p,void 0)},1127403:p=>{r.ic("Mul",p,void 0)},1127454:p=>{r.ic("Div",p,void 0)},1127505:p=>{r.ic("Pow",p,void 0)},1127556:p=>{r.ic("Equal",p,void 0)},1127609:p=>{r.ic("Greater",p,void 0)},1127664:p=>{r.ic("GreaterOrEqual",p,void 0)},1127726:p=>{r.ic("Less",p,void 0)},1127778:p=>{r.ic("LessOrEqual",p,void 0)},1127837:(p,g,x,_,z)=>{r.ic("ReduceMean",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1128012:(p,g,x,_,z)=>{r.ic("ReduceMax",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1128186:(p,g,x,_,z)=>{r.ic("ReduceMin",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1128360:(p,g,x,_,z)=>{r.ic("ReduceProd",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1128535:(p,g,x,_,z)=>{r.ic("ReduceSum",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1128709:(p,g,x,_,z)=>{r.ic("ReduceL1",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1128882:(p,g,x,_,z)=>{r.ic("ReduceL2",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1129055:(p,g,x,_,z)=>{r.ic("ReduceLogSum",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1129232:(p,g,x,_,z)=>{r.ic("ReduceSumSquare",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1129412:(p,g,x,_,z)=>{r.ic("ReduceLogSumExp",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1129592:p=>{r.ic("Where",p,void 0)},1129645:(p,g,x)=>{r.ic("Transpose",p,{perm:g?Array.from((I(),G).subarray(Number(g)>>>0,Number(x)>>>0)):[]})},1129769:(p,g,x,_)=>{r.ic("DepthToSpace",p,{blocksize:g,mode:ft(x),format:_?"NHWC":"NCHW"})},1129902:(p,g,x,_)=>{r.ic("DepthToSpace",p,{blocksize:g,mode:ft(x),format:_?"NHWC":"NCHW"})},1130035:(p,g,x,_)=>{r.ic("DFT",p,{axis:g,inverse:x,onesided:_})},1130127:(p,g,x,_,z,R,j,Y,oe,fe,Ne,Fe,Ye,et,_t)=>{r.ic("ConvTranspose",p,{format:oe?"NHWC":"NCHW",autoPad:g,dilations:[x],group:_,kernelShape:[z],pads:[R,j],strides:[Y],wIsConst:()=>!!(I(),te)[fe>>>0],outputPadding:Ne?Array.from((I(),G).subarray(Number(Ne)>>>0,Number(Fe)>>>0)):[],outputShape:Ye?Array.from((I(),G).subarray(Number(Ye)>>>0,Number(et)>>>0)):[],activation:ft(_t)})},1130560:(p,g,x,_,z,R,j,Y,oe,fe,Ne,Fe,Ye,et)=>{r.ic("ConvTranspose",p,{format:Y?"NHWC":"NCHW",autoPad:g,dilations:Array.from((I(),G).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),group:_,kernelShape:Array.from((I(),G).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),pads:Array.from((I(),G).subarray(Number(R)>>>0,(Number(R)>>>0)+4>>>0)),strides:Array.from((I(),G).subarray(Number(j)>>>0,(Number(j)>>>0)+2>>>0)),wIsConst:()=>!!(I(),te)[oe>>>0],outputPadding:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(Ne)>>>0)):[],outputShape:Fe?Array.from((I(),G).subarray(Number(Fe)>>>0,Number(Ye)>>>0)):[],activation:ft(et)})},1131221:(p,g,x,_,z,R,j,Y,oe,fe,Ne,Fe,Ye,et,_t)=>{r.ic("ConvTranspose",p,{format:oe?"NHWC":"NCHW",autoPad:g,dilations:[x],group:_,kernelShape:[z],pads:[R,j],strides:[Y],wIsConst:()=>!!(I(),te)[fe>>>0],outputPadding:Ne?Array.from((I(),G).subarray(Number(Ne)>>>0,Number(Fe)>>>0)):[],outputShape:Ye?Array.from((I(),G).subarray(Number(Ye)>>>0,Number(et)>>>0)):[],activation:ft(_t)})},1131654:(p,g,x,_,z,R,j,Y,oe,fe,Ne,Fe,Ye,et)=>{r.ic("ConvTranspose",p,{format:Y?"NHWC":"NCHW",autoPad:g,dilations:Array.from((I(),G).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),group:_,kernelShape:Array.from((I(),G).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),pads:Array.from((I(),G).subarray(Number(R)>>>0,(Number(R)>>>0)+4>>>0)),strides:Array.from((I(),G).subarray(Number(j)>>>0,(Number(j)>>>0)+2>>>0)),wIsConst:()=>!!(I(),te)[oe>>>0],outputPadding:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(Ne)>>>0)):[],outputShape:Fe?Array.from((I(),G).subarray(Number(Fe)>>>0,Number(Ye)>>>0)):[],activation:ft(et)})},1132315:(p,g)=>{r.ic("GlobalAveragePool",p,{format:g?"NHWC":"NCHW"})},1132406:(p,g,x,_,z,R,j,Y,oe,fe,Ne,Fe,Ye,et)=>{r.ic("AveragePool",p,{format:et?"NHWC":"NCHW",auto_pad:g,ceil_mode:x,count_include_pad:_,storage_order:z,dilations:R?Array.from((I(),G).subarray(Number(R)>>>0,Number(j)>>>0)):[],kernel_shape:Y?Array.from((I(),G).subarray(Number(Y)>>>0,Number(oe)>>>0)):[],pads:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(Ne)>>>0)):[],strides:Fe?Array.from((I(),G).subarray(Number(Fe)>>>0,Number(Ye)>>>0)):[]})},1132885:(p,g)=>{r.ic("GlobalAveragePool",p,{format:g?"NHWC":"NCHW"})},1132976:(p,g,x,_,z,R,j,Y,oe,fe,Ne,Fe,Ye,et)=>{r.ic("AveragePool",p,{format:et?"NHWC":"NCHW",auto_pad:g,ceil_mode:x,count_include_pad:_,storage_order:z,dilations:R?Array.from((I(),G).subarray(Number(R)>>>0,Number(j)>>>0)):[],kernel_shape:Y?Array.from((I(),G).subarray(Number(Y)>>>0,Number(oe)>>>0)):[],pads:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(Ne)>>>0)):[],strides:Fe?Array.from((I(),G).subarray(Number(Fe)>>>0,Number(Ye)>>>0)):[]})},1133455:(p,g)=>{r.ic("GlobalMaxPool",p,{format:g?"NHWC":"NCHW"})},1133542:(p,g,x,_,z,R,j,Y,oe,fe,Ne,Fe,Ye,et)=>{r.ic("MaxPool",p,{format:et?"NHWC":"NCHW",auto_pad:g,ceil_mode:x,count_include_pad:_,storage_order:z,dilations:R?Array.from((I(),G).subarray(Number(R)>>>0,Number(j)>>>0)):[],kernel_shape:Y?Array.from((I(),G).subarray(Number(Y)>>>0,Number(oe)>>>0)):[],pads:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(Ne)>>>0)):[],strides:Fe?Array.from((I(),G).subarray(Number(Fe)>>>0,Number(Ye)>>>0)):[]})},1134017:(p,g)=>{r.ic("GlobalMaxPool",p,{format:g?"NHWC":"NCHW"})},1134104:(p,g,x,_,z,R,j,Y,oe,fe,Ne,Fe,Ye,et)=>{r.ic("MaxPool",p,{format:et?"NHWC":"NCHW",auto_pad:g,ceil_mode:x,count_include_pad:_,storage_order:z,dilations:R?Array.from((I(),G).subarray(Number(R)>>>0,Number(j)>>>0)):[],kernel_shape:Y?Array.from((I(),G).subarray(Number(Y)>>>0,Number(oe)>>>0)):[],pads:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(Ne)>>>0)):[],strides:Fe?Array.from((I(),G).subarray(Number(Fe)>>>0,Number(Ye)>>>0)):[]})},1134579:(p,g,x,_,z)=>{r.ic("Gemm",p,{alpha:g,beta:x,transA:_,transB:z})},1134683:p=>{r.ic("MatMul",p,void 0)},1134737:(p,g,x,_)=>{r.ic("ArgMax",p,{keepDims:!!g,selectLastIndex:!!x,axis:_})},1134845:(p,g,x,_)=>{r.ic("ArgMin",p,{keepDims:!!g,selectLastIndex:!!x,axis:_})},1134953:(p,g)=>{r.ic("Softmax",p,{axis:g})},1135016:(p,g)=>{r.ic("Concat",p,{axis:g})},1135076:(p,g,x,_,z)=>{r.ic("Split",p,{axis:g,numOutputs:x,splitSizes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1135232:p=>{r.ic("Expand",p,void 0)},1135286:(p,g)=>{r.ic("Gather",p,{axis:Number(g)})},1135357:(p,g)=>{r.ic("GatherElements",p,{axis:Number(g)})},1135436:(p,g)=>{r.ic("GatherND",p,{batch_dims:Number(g)})},1135515:(p,g,x,_,z,R,j,Y,oe,fe,Ne)=>{r.ic("Resize",p,{antialias:g,axes:x?Array.from((I(),G).subarray(Number(x)>>>0,Number(_)>>>0)):[],coordinateTransformMode:ft(z),cubicCoeffA:R,excludeOutside:j,extrapolationValue:Y,keepAspectRatioPolicy:ft(oe),mode:ft(fe),nearestMode:ft(Ne)})},1135877:(p,g,x,_,z,R,j)=>{r.ic("Slice",p,{starts:g?Array.from((I(),G).subarray(Number(g)>>>0,Number(x)>>>0)):[],ends:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[],axes:R?Array.from((I(),G).subarray(Number(R)>>>0,Number(j)>>>0)):[]})},1136141:p=>{r.ic("Tile",p,void 0)},1136193:(p,g,x)=>{r.ic("InstanceNormalization",p,{epsilon:g,format:x?"NHWC":"NCHW"})},1136307:(p,g,x)=>{r.ic("InstanceNormalization",p,{epsilon:g,format:x?"NHWC":"NCHW"})},1136421:p=>{r.ic("Range",p,void 0)},1136474:(p,g)=>{r.ic("Einsum",p,{equation:ft(g)})},1136555:(p,g,x,_,z)=>{r.ic("Pad",p,{mode:g,value:x,pads:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1136698:(p,g,x,_,z,R)=>{r.ic("BatchNormalization",p,{epsilon:g,momentum:x,spatial:!!z,trainingMode:!!_,format:R?"NHWC":"NCHW"})},1136867:(p,g,x,_,z,R)=>{r.ic("BatchNormalization",p,{epsilon:g,momentum:x,spatial:!!z,trainingMode:!!_,format:R?"NHWC":"NCHW"})},1137036:(p,g,x)=>{r.ic("CumSum",p,{exclusive:Number(g),reverse:Number(x)})},1137133:(p,g,x)=>{r.ic("DequantizeLinear",p,{axis:g,blockSize:x})},1137223:(p,g,x,_,z)=>{r.ic("GridSample",p,{align_corners:g,mode:ft(x),padding_mode:ft(_),format:z?"NHWC":"NCHW"})},1137393:(p,g,x,_,z)=>{r.ic("GridSample",p,{align_corners:g,mode:ft(x),padding_mode:ft(_),format:z?"NHWC":"NCHW"})},1137563:(p,g)=>{r.ic("ScatterND",p,{reduction:ft(g)})},1137648:(p,g,x,_,z,R,j,Y,oe)=>{r.ic("Attention",p,{numHeads:g,isUnidirectional:x,maskFilterValue:_,scale:z,doRotary:R,qkvHiddenSizes:j?Array.from((I(),G).subarray(Number(Y)>>>0,Number(Y)+j>>>0)):[],pastPresentShareBuffer:!!oe})},1137920:p=>{r.ic("BiasAdd",p,void 0)},1137975:p=>{r.ic("BiasSplitGelu",p,void 0)},1138036:p=>{r.ic("FastGelu",p,void 0)},1138092:(p,g,x,_,z,R,j,Y,oe,fe,Ne,Fe,Ye,et,_t,Bt)=>{r.ic("Conv",p,{format:Fe?"NHWC":"NCHW",auto_pad:g,dilations:x?Array.from((I(),G).subarray(Number(x)>>>0,Number(_)>>>0)):[],group:z,kernel_shape:R?Array.from((I(),G).subarray(Number(R)>>>0,Number(j)>>>0)):[],pads:Y?Array.from((I(),G).subarray(Number(Y)>>>0,Number(oe)>>>0)):[],strides:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(Ne)>>>0)):[],w_is_const:()=>!!(I(),te)[Number(Ye)>>>0],activation:ft(et),activation_params:_t?Array.from((I(),ye).subarray(Number(_t)>>>0,Number(Bt)>>>0)):[]})},1138676:p=>{r.ic("Gelu",p,void 0)},1138728:(p,g,x,_,z,R,j,Y,oe)=>{r.ic("GroupQueryAttention",p,{numHeads:g,kvNumHeads:x,scale:_,softcap:z,doRotary:R,rotaryInterleaved:j,smoothSoftmax:Y,localWindowSize:oe})},1138945:(p,g,x,_)=>{r.ic("LayerNormalization",p,{axis:g,epsilon:x,simplified:!!_})},1139056:(p,g,x,_)=>{r.ic("LayerNormalization",p,{axis:g,epsilon:x,simplified:!!_})},1139167:(p,g,x,_,z,R)=>{r.ic("MatMulNBits",p,{k:g,n:x,accuracyLevel:_,bits:z,blockSize:R})},1139294:(p,g,x,_,z,R)=>{r.ic("MultiHeadAttention",p,{numHeads:g,isUnidirectional:x,maskFilterValue:_,scale:z,doRotary:R})},1139453:(p,g)=>{r.ic("QuickGelu",p,{alpha:g})},1139517:(p,g,x,_,z)=>{r.ic("RotaryEmbedding",p,{interleaved:!!g,numHeads:x,rotaryEmbeddingDim:_,scale:z})},1139656:(p,g,x)=>{r.ic("SkipLayerNormalization",p,{epsilon:g,simplified:!!x})},1139758:(p,g,x)=>{r.ic("SkipLayerNormalization",p,{epsilon:g,simplified:!!x})},1139860:(p,g,x,_)=>{r.ic("GatherBlockQuantized",p,{gatherAxis:g,quantizeAxis:x,blockSize:_})},1139981:p=>{r.Qd(p)},1140015:(p,g)=>r.Sd(Number(p),Number(g),r.hd.Vd,r.hd.errors)};function ja(p,g,x){return su(async()=>{await r.Od(Number(p),Number(g),Number(x))})}function no(){return typeof wasmOffsetConverter<"u"}function io(p,g,x,_){var z=We();try{return Da(p,g,x,_)}catch(R){if(Le(z),R!==R+0)throw R;je(1,0)}}function ao(p,g,x){var _=We();try{return Ra(p,g,x)}catch(z){if(Le(_),z!==z+0)throw z;je(1,0)}}function so(p){var g=We();try{xu(p)}catch(x){if(Le(g),x!==x+0)throw x;je(1,0)}}function cd(p,g){var x=We();try{return Oa(p,g)}catch(_){if(Le(x),_!==_+0)throw _;je(1,0)}}function Cu(p,g,x){var _=We();try{Ws(p,g,x)}catch(z){if(Le(_),z!==z+0)throw z;je(1,0)}}function pd(p,g,x,_){var z=We();try{return Hs(p,g,x,_)}catch(R){if(Le(z),R!==R+0)throw R;je(1,0)}}function fd(p,g){var x=We();try{qs(p,g)}catch(_){if(Le(x),_!==_+0)throw _;je(1,0)}}function oo(p,g,x,_,z,R,j){var Y=We();try{return qn(p,g,x,_,z,R,j)}catch(oe){if(Le(Y),oe!==oe+0)throw oe;je(1,0)}}function Xr(p,g,x,_,z,R){var j=We();try{Vs(p,g,x,_,z,R)}catch(Y){if(Le(j),Y!==Y+0)throw Y;je(1,0)}}function Iu(p,g,x,_){var z=We();try{Aa(p,g,x,_)}catch(R){if(Le(z),R!==R+0)throw R;je(1,0)}}function Zn(p,g,x,_,z){var R=We();try{hn(p,g,x,_,z)}catch(j){if(Le(R),j!==j+0)throw j;je(1,0)}}function xr(p,g,x,_,z,R,j){var Y=We();try{mn(p,g,x,_,z,R,j)}catch(oe){if(Le(Y),oe!==oe+0)throw oe;je(1,0)}}function Oi(p,g,x,_,z,R,j){var Y=We();try{Ma(p,g,x,_,z,R,j)}catch(oe){if(Le(Y),oe!==oe+0)throw oe;je(1,0)}}function Rr(p,g,x,_,z,R,j,Y){var oe=We();try{Qs(p,g,x,_,z,R,j,Y)}catch(fe){if(Le(oe),fe!==fe+0)throw fe;je(1,0)}}function uo(p,g,x,_,z){var R=We();try{return Ci(p,g,x,_,z)}catch(j){if(Le(R),j!==j+0)throw j;je(1,0)}}function hd(p,g,x){var _=We();try{return $u(p,g,x)}catch(z){if(Le(_),z!==z+0)throw z;je(1,0)}}function md(p,g,x,_,z,R,j,Y){var oe=We();try{Zs(p,g,x,_,z,R,j,Y)}catch(fe){if(Le(oe),fe!==fe+0)throw fe;je(1,0)}}function yn(p,g,x,_,z,R,j,Y,oe,fe,Ne,Fe){var Ye=We();try{Ii(p,g,x,_,z,R,j,Y,oe,fe,Ne,Fe)}catch(et){if(Le(Ye),et!==et+0)throw et;je(1,0)}}function Ai(p,g,x){var _=We();try{return Ys(p,g,x)}catch(z){if(Le(_),z!==z+0)throw z;return je(1,0),0n}}function Yn(p,g,x,_,z,R,j,Y,oe){var fe=We();try{Fs(p,g,x,_,z,R,j,Y,oe)}catch(Ne){if(Le(fe),Ne!==Ne+0)throw Ne;je(1,0)}}function Wa(p){var g=We();try{return Xs(p)}catch(x){if(Le(g),x!==x+0)throw x;je(1,0)}}function lo(p,g){var x=We();try{return Ua(p,g)}catch(_){if(Le(x),_!==_+0)throw _;return je(1,0),0n}}function Xn(p,g,x,_){var z=We();try{return Or(p,g,x,_)}catch(R){if(Le(z),R!==R+0)throw R;je(1,0)}}function Jr(p,g,x,_,z,R,j){var Y=We();try{Kn(p,g,x,_,z,R,j)}catch(oe){if(Le(Y),oe!==oe+0)throw oe;je(1,0)}}function ut(p){var g=We();try{return Ba(p)}catch(x){if(Le(g),x!==x+0)throw x;return je(1,0),0n}}function at(p,g,x,_,z){var R=We();try{return Js(p,g,x,_,z)}catch(j){if(Le(R),j!==j+0)throw j;je(1,0)}}function en(p,g,x,_,z,R){var j=We();try{return eo(p,g,x,_,z,R)}catch(Y){if(Le(j),Y!==Y+0)throw Y;je(1,0)}}function zt(p,g,x,_,z,R){var j=We();try{return Gs(p,g,x,_,z,R)}catch(Y){if(Le(j),Y!==Y+0)throw Y;je(1,0)}}function Wt(p,g,x,_,z,R){var j=We();try{return it(p,g,x,_,z,R)}catch(Y){if(Le(j),Y!==Y+0)throw Y;je(1,0)}}function vn(p,g,x,_,z,R,j,Y){var oe=We();try{return Ks(p,g,x,_,z,R,j,Y)}catch(fe){if(Le(oe),fe!==fe+0)throw fe;je(1,0)}}function Jn(p,g,x,_,z){var R=We();try{return La(p,g,x,_,z)}catch(j){if(Le(R),j!==j+0)throw j;return je(1,0),0n}}function Vt(p,g,x,_){var z=We();try{return zi(p,g,x,_)}catch(R){if(Le(z),R!==R+0)throw R;je(1,0)}}function Va(p,g,x,_){var z=We();try{return Gn(p,g,x,_)}catch(R){if(Le(z),R!==R+0)throw R;je(1,0)}}function zu(p,g,x,_,z,R,j,Y,oe,fe,Ne,Fe){var Ye=We();try{return to(p,g,x,_,z,R,j,Y,oe,fe,Ne,Fe)}catch(et){if(Le(Ye),et!==et+0)throw et;je(1,0)}}function Nu(p,g,x,_,z,R,j,Y,oe,fe,Ne){var Fe=We();try{Hn(p,g,x,_,z,R,j,Y,oe,fe,Ne)}catch(Ye){if(Le(Fe),Ye!==Ye+0)throw Ye;je(1,0)}}function Fa(p,g,x,_,z,R,j,Y,oe,fe,Ne,Fe,Ye,et,_t,Bt){var lt=We();try{ku(p,g,x,_,z,R,j,Y,oe,fe,Ne,Fe,Ye,et,_t,Bt)}catch(Qt){if(Le(lt),Qt!==Qt+0)throw Qt;je(1,0)}}function Ou(p,g,x){var _=We();try{return Pa(p,g,x)}catch(z){if(Le(_),z!==z+0)throw z;je(1,0)}}function Dr(p,g,x){var _=We();try{return bu(p,g,x)}catch(z){if(Le(_),z!==z+0)throw z;je(1,0)}}function qa(p,g,x,_){var z=We();try{Su(p,g,x,_)}catch(R){if(Le(z),R!==R+0)throw R;je(1,0)}}function ei(){if(0<gt)Gt=ei;else if(o)C==null||C(r),ne();else{for(var p=Pe;0<p.length;)p.shift()(r);0<gt?Gt=ei:(r.calledRun=!0,P||(ne(),C==null||C(r)))}}return o||(Ar=await Se(),ei()),r.PTR_SIZE=4,O?r:new Promise((p,g)=>{C=p,N=g})}var yv,um,c$=ae(()=>{"use strict";var e,r;yv=om,um=(r=(e=globalThis.self)==null?void 0:e.name)==null?void 0:r.startsWith("em-pthread"),um&&om()}),Tc,kp,lm,fr,vv,ml,dm,cm,Cc,pm,Ic,wv,zc,_v,Kp=ae(()=>{"use strict";Gp(),Tc=typeof location>"u"?void 0:location.origin,kp=import.meta.url>"file:"&&import.meta.url<"file;",lm=()=>{if(kp){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Tc).href}return import.meta.url},fr=lm(),vv=()=>{if(fr&&!fr.startsWith("blob:"))return fr.substring(0,fr.lastIndexOf("/")+1)},ml=(e,r)=>{try{let i=r??fr;return(i?new URL(e,i):new URL(e)).origin===Tc}catch{return!1}},dm=(e,r)=>{let i=r??fr;try{return(i?new URL(e,i):new URL(e)).href}catch{return}},cm=(e,r)=>`${r??"./"}${e}`,Cc=async e=>{let r=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(r)},pm=async e=>(await import(e)).default,Ic=(d$(),Vo(hv)).default,wv=async()=>{if(!fr)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(ml(fr))return[void 0,Ic()];let e=await Cc(fr);return[e,Ic(e)]},zc=(c$(),Vo(gv)).default,_v=async(e,r,i,s)=>{let o=zc&&!(e||r);if(o)if(fr)o=ml(fr)||s&&!i;else if(s&&!i)o=!0;else throw new Error("cannot determine the script source URL.");if(o)return[void 0,zc];{let u="ort-wasm-simd-threaded.jsep.mjs",d=e??dm(u,r),c=i&&d&&!ml(d,r),f=c?await Cc(d):d??cm(u,r);return[c?f:void 0,await pm(f)]}}}),Nc,gl,To,Oc,fm,hm,mm,Qp,nt,ra=ae(()=>{"use strict";Kp(),gl=!1,To=!1,Oc=!1,fm=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},hm=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},mm=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Qp=async e=>{if(gl)return Promise.resolve();if(To)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Oc)throw new Error("previous call to 'initializeWebAssembly()' failed.");To=!0;let r=e.initTimeout,i=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!mm())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!hm())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let s=fm();i>1&&!s&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=i=1);let o=e.wasmPaths,u=typeof o=="string"?o:void 0,d=o==null?void 0:o.mjs,c=(d==null?void 0:d.href)??d,f=o==null?void 0:o.wasm,m=(f==null?void 0:f.href)??f,y=e.wasmBinary,[w,$]=await _v(c,u,i>1,!!y||!!m),S=!1,b=[];if(r>0&&b.push(new Promise(C=>{setTimeout(()=>{S=!0,C()},r)})),b.push(new Promise((C,N)=>{let k={numThreads:i};if(y)k.wasmBinary=y,k.locateFile=T=>T;else if(m||u)k.locateFile=T=>m??u+T;else if(c&&c.indexOf("blob:")!==0)k.locateFile=T=>new URL(T,c).href;else if(w){let T=vv();T&&(k.locateFile=A=>T+A)}$(k).then(T=>{To=!1,gl=!0,Nc=T,C(),w&&URL.revokeObjectURL(w)},T=>{To=!1,Oc=!0,N(T)})})),await Promise.race(b),S)throw new Error(`WebAssembly backend initializing failed due to timeout: ${r}ms`)},nt=()=>{if(gl&&Nc)return Nc;throw new Error("WebAssembly is not initialized yet.")}}),qr,Ol,Ke,Zp=ae(()=>{"use strict";ra(),qr=(e,r)=>{let i=nt(),s=i.lengthBytesUTF8(e)+1,o=i._malloc(s);return i.stringToUTF8(e,o,s),r.push(o),o},Ol=(e,r,i,s)=>{if(typeof e=="object"&&e!==null){if(i.has(e))throw new Error("Circular reference in options");i.add(e)}Object.entries(e).forEach(([o,u])=>{let d=r?r+o:o;if(typeof u=="object")Ol(u,d+".",i,s);else if(typeof u=="string"||typeof u=="number")s(d,u.toString());else if(typeof u=="boolean")s(d,u?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof u}`)})},Ke=e=>{let r=nt(),i=r.stackSave();try{let s=r.PTR_SIZE,o=r.stackAlloc(2*s);r._OrtGetLastError(o,o+s);let u=Number(r.getValue(o,s===4?"i32":"i64")),d=r.getValue(o+s,"*"),c=d?r.UTF8ToString(d):"";throw new Error(`${e} ERROR_CODE: ${u}, ERROR_MESSAGE: ${c}`)}finally{r.stackRestore(i)}}}),$v,p$=ae(()=>{"use strict";ra(),Zp(),$v=(e,r)=>{let i=nt(),s=0,o=[],u=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)u.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)u.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(u.terminate=!1);let d=0;(e==null?void 0:e.tag)!==void 0&&(d=qr(e.tag,o)),s=i._OrtCreateRunOptions(u.logSeverityLevel,u.logVerbosityLevel,!!u.terminate,d),s===0&&Ke("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Ol(e.extra,"",new WeakSet,(c,f)=>{let m=qr(c,o),y=qr(f,o);i._OrtAddRunConfigEntry(s,m,y)!==0&&Ke(`Can't set a run config entry: ${c} - ${f}.`)});for(let c of r)i._OrtRunOptionsAddActiveLoraAdapter(s,c)!==0&&Ke("Can't add an active LoRA adapter.");return[s,o]}catch(d){throw s!==0&&i._OrtReleaseRunOptions(s),o.forEach(c=>i._free(c)),d}}}),gm,ym,vm,Wi,wm,xv,f$=ae(()=>{"use strict";ra(),Zp(),gm=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},ym=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},vm=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let r=e.extra.session;r.use_ort_model_bytes_directly||(r.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(i=>(typeof i=="string"?i:i.name)==="webgpu")&&(e.enableMemPattern=!1)},Wi=(e,r,i,s)=>{let o=qr(r,s),u=qr(i,s);nt()._OrtAddSessionConfigEntry(e,o,u)!==0&&Ke(`Can't set a session config entry: ${r} - ${i}.`)},wm=async(e,r,i)=>{let s=r.executionProviders;for(let o of s){let u=typeof o=="string"?o:o.name,d=[],c;switch(u){case"webnn":if(u="WEBNN",Wi(e,"session.disable_quant_qdq","1",i),Wi(e,"session.disable_qdq_constant_folding","1",i),typeof o!="string"){let $=o==null?void 0:o.deviceType;$&&Wi(e,"deviceType",$,i)}break;case"webgpu":if(u="JS",typeof o!="string"){let $=o;if($!=null&&$.preferredLayout){if($.preferredLayout!=="NCHW"&&$.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${$.preferredLayout}`);Wi(e,"preferredLayout",$.preferredLayout,i)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${u}`)}let f=d.length,m=0,y=0;if(f>0){m=nt()._malloc(f*nt().PTR_SIZE),i.push(m),y=nt()._malloc(f*nt().PTR_SIZE),i.push(y);for(let $=0;$<f;$++)nt().setValue(m+$*nt().PTR_SIZE,d[$][0],"*"),nt().setValue(y+$*nt().PTR_SIZE,d[$][1],"*")}let w;if(c===void 0){let $=qr(u,i);w=await nt()._OrtAppendExecutionProvider(e,$,m,y,f)}w!==0&&Ke(`Can't append execution provider: ${u}.`)}},xv=async e=>{let r=nt(),i=0,s=[],o=e||{};vm(o);try{let u=gm(o.graphOptimizationLevel??"all"),d=ym(o.executionMode??"sequential"),c=typeof o.logId=="string"?qr(o.logId,s):0,f=o.logSeverityLevel??2;if(!Number.isInteger(f)||f<0||f>4)throw new Error(`log severity level is not valid: ${f}`);let m=o.logVerbosityLevel??0;if(!Number.isInteger(m)||m<0||m>4)throw new Error(`log verbosity level is not valid: ${m}`);let y=typeof o.optimizedModelFilePath=="string"?qr(o.optimizedModelFilePath,s):0;if(i=r._OrtCreateSessionOptions(u,!!o.enableCpuMemArena,!!o.enableMemPattern,d,!!o.enableProfiling,0,c,f,m,y),i===0&&Ke("Can't create session options."),o.executionProviders&&await wm(i,o,s),o.enableGraphCapture!==void 0){if(typeof o.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${o.enableGraphCapture}`);Wi(i,"enableGraphCapture",o.enableGraphCapture.toString(),s)}if(o.freeDimensionOverrides)for(let[w,$]of Object.entries(o.freeDimensionOverrides)){if(typeof w!="string")throw new Error(`free dimension override name must be a string: ${w}`);if(typeof $!="number"||!Number.isInteger($)||$<0)throw new Error(`free dimension override value must be a non-negative integer: ${$}`);let S=qr(w,s);r._OrtAddFreeDimensionOverride(i,S,$)!==0&&Ke(`Can't set a free dimension override: ${w} - ${$}.`)}return o.extra!==void 0&&Ol(o.extra,"",new WeakSet,(w,$)=>{Wi(i,w,$,s)}),[i,s]}catch(u){throw i!==0&&r._OrtReleaseSessionOptions(i)!==0&&Ke("Can't release session options."),s.forEach(d=>r._free(d)),u}}}),Qi,En,Zi,Ll,Al,Yp,Xp,Ep,Ie=ae(()=>{"use strict";Qi=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},En=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Zi=(e,r)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],s=typeof r=="number"?r:r.reduce((o,u)=>o*u,1);return i>0?Math.ceil(s*i):void 0},Ll=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Al=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Yp=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Xp=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Ep=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),Ul,Jp=ae(()=>{"use strict";Gp(),Ul=async e=>{if(typeof e=="string"){let r=await fetch(e);if(!r.ok)throw new Error(`failed to load external data file: ${e}`);let i=r.headers.get("Content-Length"),s=i?parseInt(i,10):0;if(s<1073741824)return new Uint8Array(await r.arrayBuffer());{if(!r.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let o=r.body.getReader(),u;try{u=new ArrayBuffer(s)}catch(c){if(c instanceof RangeError){let f=Math.ceil(s/65536);u=new WebAssembly.Memory({initial:f,maximum:f}).buffer}else throw c}let d=0;for(;;){let{done:c,value:f}=await o.read();if(c)break;let m=f.byteLength;new Uint8Array(u,d,m).set(f),d+=m}return new Uint8Array(u,0,s)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),_m,$m,xm,bm,ef,Sm,He,Tn=ae(()=>{"use strict";Ie(),_m=["V","I","W","E","F"],$m=(e,r)=>{console.log(`[${_m[e]},${new Date().toISOString()}]${r}`)},ef=(e,r)=>{xm=e,bm=r},Sm=(e,r)=>{let i=Al(e),s=Al(xm);i>=s&&$m(i,typeof r=="function"?r():r)},He=(...e)=>{bm&&Sm(...e)}}),km,ss,K,Rl,bv,Sv,kv,Re=ae(()=>{"use strict";km=class{static calcMatMulShape(e,r){return e[1]!==r[0]?void 0:[e[0],r[1]]}},ss=class{static calcShape(e,r,i=!1){let s=e.length,o=r.length;if(s===0)return r;if(o===0)return e;let u=Math.max(e.length,r.length),d=new Array(u);if(i){if(s<2||o<2)return;let c=km.calcMatMulShape([e[s-2],e[s-1]],[r[o-2],r[o-1]]);if(c===void 0)return;[d[u-2],d[u-1]]=c}for(let c=i?3:1;c<=u;c++){let f=s-c<0?1:e[s-c],m=o-c<0?1:r[o-c];if(f!==m&&f>1&&m>1)return;let y=Math.max(f,m);if(f&&m)d[u-c]=Math.max(f,m);else{if(y>1)return;d[u-c]=0}}return d}static isValidBroadcast(e,r){let i=e.length,s=r.length;if(i>s)return!1;for(let o=1;o<=i;o++)if(e[i-o]!==1&&e[i-o]!==r[s-o])return!1;return!0}},K=class Cl{static size(r){return Cl.getSizeFromDimensionRange(r,0,r.length)}static convertShape(r,i=4){let s=r.length;if(s===0)return[];let o=new Array(s),u=s-1;for(;u>=0;){if(r[u]%i===0){o[u]=r[u]/i;break}if(i%r[u]!==0)throw new Error("cannot convert shape");o[u]=1,i/=r[u],u--}for(u--;u>=0;u--)o[u]=r[u];return o}static sizeFromDimension(r,i){if(i<0||i>r.length)throw new Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${r.length} dimensions.`);return Cl.getSizeFromDimensionRange(r,i,r.length)}static sizeToDimension(r,i){if(i<0||i>r.length)throw new Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${r.length} dimensions.`);return Cl.getSizeFromDimensionRange(r,0,i)}static getSizeFromDimensionRange(r,i,s){let o=1;for(let u=i;u<s;u++){if(r[u]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");o*=Number(r[u])}return o}static computeStrides(r){let i=r.length;if(i===0)return[];if(i===1)return[1];let s=new Array(i);s[i-1]=1,s[i-2]=r[i-1];for(let o=i-3;o>=0;--o)s[o]=s[o+1]*r[o+1];return s}static normalizeAxis(r,i){if(r<-i&&r>=i)throw new Error("unsupported axis for this operation.");return r<0?r+i:r}static normalizeAxes(r,i){return r.map(s=>this.normalizeAxis(s,i??r.length))}static sortBasedOnPerm(r,i){return i?i.map(s=>r[s]):r.slice().reverse()}static padShape(r,i){let s=r.length;return r.map((o,u)=>o+i[u]+i[u+s])}static areEqual(r,i){return r.length!==i.length?!1:r.every((s,o)=>s===i[o])}},Rl=class pi{static adjustPoolAttributes(r,i,s,o,u,d){if(!r&&s.length!==i.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(r)for(let c=0;c<i.length-2;c++)c>=s.length?s.push(i[c+2]):s[c]=i[c+2];for(let c=0;c<s.length;c++)if(c<o.length){if(o[c]<0)throw new Error("strides should be greater than or equal to 1")}else o.push(1);for(let c=0;c<s.length;c++)if(c<u.length){if(u[c]<0)throw new Error("dilations should be greater than or equal to 1")}else u.push(1);for(let c=0;c<s.length*2;c++)if(c<d.length){if(d[c]<0)throw new Error("pad should be greater than or equal to 1")}else d.push(0);for(let c=0;c<s.length;c++){if(s[c]<=0)throw new Error("kernel shapes need to be greater than 0");if(d[c]>=s[c]||d[c+s.length]>=s[c])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(r,i,s,o,u,d,c){if(c){if(u.length!==2*(r.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(i.length!==r.length-2)throw new Error("length of strides should be the length of data dimensions");if(o.length!==r.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let f=0;f<r.length-2;f++)pi.adjustPadAndReturnShape(r[f+(d?1:2)],i[f],s[f],o[f],u,f,f+r.length-2,c)}}static computePoolOutputShape(r,i,s,o,u,d,c,f=0){if(i.length<=0)throw new Error("input shape must be of size greater than 0");let m=[i[0],i[1]];return pi.computeShapeHelper(r,i,m,s,o,u,d,c,f),m}static computeConvOutputShape(r,i,s,o,u,d,c){if(r.length<=0||i.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let f=[r[0],i[0]];return pi.computeShapeHelper(!1,r,f,s,o,u,d,c),f}static computeShapeHelper(r,i,s,o,u,d,c,f,m=0){if(r)for(let y=0;y<i.length-2;y++)s.push(1);else for(let y=0;y<i.length-2;y++)s.push(pi.adjustPadAndReturnShape(i[y+2],o[y],u[y],d[y],c,y,y+i.length-2,f,m))}static computeOutputSize(r,i,s,o,u){let d=Math.floor(r/i)+1;return u===1&&(d=Math.ceil(r/i)+1,(d-1)*i>=s+o&&(d-=1)),d}static adjustPadAndReturnShape(r,i,s,o,u,d,c,f,m=0){let y=s*(o-1)+1;if(f&&f!=="NOTSET")switch(f){case"VALID":return u[d]=0,u[c]=0,pi.computeOutputSize(r-y,i,r,0,m);case"SAME_LOWER":case"SAME_UPPER":if(s!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let w=(Math.floor((r+i-1)/i)-1)*i+o-r;return u[d]=Math.floor(f==="SAME_LOWER"?(w+1)/2:w/2),u[c]=w-u[d],pi.computeOutputSize(r+u[d]+u[c]-y,i,r,u[d],m)}default:throw new Error("Unsupported AutoPad type")}else return pi.computeOutputSize(r+u[d]+u[c]-y,i,r,u[d],m)}},bv=class{static getShapeOfGemmResult(e,r,i,s,o){if(e.length!==2||i.length!==2)throw new Error("shape need to be of size 2");let u,d,c;r?(u=e[1],d=e[0]):(u=e[0],d=e[1]);let f=-1;if(s?(c=i[0],f=1):(c=i[1],f=0),i[f]!==d)throw new Error("dimension mismatch");if(u<=0||c<=0||d<=0)throw new Error("invalid shape specified");if(o&&!ss.isValidBroadcast(o,[u,c]))throw new Error("gemm: invalid bias shape for broadcast");return[u,c,d]}},Sv=-34028234663852886e22,kv=34028234663852886e22}),tf,Ev=ae(()=>{"use strict";Ie(),tf=(e,r)=>new(Ll(r))(e)}),Ac,Em,Rc,Tm,Dc,Cm,Mc,Bc,Pc,Im,Tv,h$=ae(()=>{"use strict";Ie(),Tn(),Ac=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),Em=(e,r)=>{if(r==="int32")return e;let i=Ac.get(r);if(!i)throw new Error(`WebNN backend does not support data type: ${r}`);let s=i/8;if(e.byteLength%s!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${s}.`);let o=e.byteLength/s,u=new(Ll(r))(e.buffer,e.byteOffset,o);switch(r){case"int64":case"uint64":{let d=new Int32Array(o);for(let c=0;c<o;c++){let f=u[c];if(f>2147483647n||f<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");d[c]=Number(f)}return new Uint8Array(d.buffer)}case"int8":case"uint8":case"uint32":{if(r==="uint32"&&u.some(c=>c>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let d=Int32Array.from(u,Number);return new Uint8Array(d.buffer)}default:throw new Error(`Unsupported data conversion from ${r} to 'int32'`)}},Rc=(e,r)=>{if(r==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let i=e.byteLength/4,s=new Int32Array(e.buffer,e.byteOffset,i);switch(r){case"int64":{let o=BigInt64Array.from(s,BigInt);return new Uint8Array(o.buffer)}case"uint64":{if(s.some(u=>u<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let o=BigUint64Array.from(s,BigInt);return new Uint8Array(o.buffer)}case"int8":{if(s.some(u=>u<-128||u>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let o=Int8Array.from(s,Number);return new Uint8Array(o.buffer)}case"uint8":{if(s.some(o=>o<0||o>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(s,Number)}case"uint32":{if(s.some(u=>u<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let o=Uint32Array.from(s,Number);return new Uint8Array(o.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${r}`)}},Tm=1,Dc=()=>Tm++,Cm=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Mc=(e,r)=>{let i=Ac.get(e);if(!i)throw new Error(`WebNN backend does not support data type: ${e}`);return r.length>0?Math.ceil(r.reduce((s,o)=>s*o)*i/8):0},Bc=class{constructor(e){this.isDataConverted=!1;let{sessionId:r,context:i,tensor:s,dataType:o,shape:u,fallbackDataType:d}=e;this.sessionId=r,this.mlContext=i,this.mlTensor=s,this.dataType=o,this.tensorShape=u,this.fallbackDataType=d}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Mc(this.dataType,this.tensorShape)}destroy(){He("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let r=await this.mlContext.readTensor(this.mlTensor),i=Rc(new Uint8Array(r),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(i);return}else return new Uint8Array(i).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,r,i){return this.mlContext===e&&this.dataType===r&&this.tensorShape.length===i.length&&this.tensorShape.every((s,o)=>s===i[o])}setIsDataConverted(e){this.isDataConverted=e}},Pc=class{constructor(e,r){this.tensorManager=e,this.wrapper=r}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,r,i,s){let o=this.tensorManager.getMLContext(e),u=this.tensorManager.getMLOpSupportLimits(e),d;if(!(u!=null&&u.input.dataTypes.includes(r))){if(d=Cm.get(r),!d||!(u!=null&&u.input.dataTypes.includes(d)))throw new Error(`WebNN backend does not support data type: ${r}`);He("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${r} to ${d}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(o,r,i))return this.wrapper.tensor;if(s){if(this.wrapper.byteLength!==Mc(r,i))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let c=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,r,i,c,!0,!0,d),s&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let r=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")r=Em(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(r);return}else He("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(r):this.activeUpload=new Uint8Array(r)}async download(e){var r,i;if(this.activeUpload){let s=(r=this.wrapper)!=null&&r.isDataConverted?Rc(this.activeUpload,(i=this.wrapper)==null?void 0:i.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(s):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(s);return}else return s.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Im=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let r=this.backend.getMLContext(e);if(!r)throw new Error("MLContext not found for session.");return r}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Dc();return this.tensorTrackersById.set(e,new Pc(this)),e}releaseTensorId(e){let r=this.tensorTrackersById.get(e);r&&(this.tensorTrackersById.delete(e),r.tensorWrapper&&this.releaseTensor(r.tensorWrapper))}async ensureTensor(e,r,i,s,o){He("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${r}, dataType: ${i}, shape: ${s}, copyOld: ${o}}`);let u=this.tensorTrackersById.get(r);if(!u)throw new Error("Tensor not found.");return u.ensureTensor(e,i,s,o)}upload(e,r){let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");i.upload(r)}async download(e,r){He("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${r==null?void 0:r.byteLength}}`);let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");return i.download(r)}releaseTensorsForSession(e){for(let r of this.freeTensors)r.sessionId===e&&r.destroy();this.freeTensors=this.freeTensors.filter(r=>r.sessionId!==e)}registerTensor(e,r,i,s){let o=this.getMLContext(e),u=Dc(),d=new Bc({sessionId:e,context:o,tensor:r,dataType:i,shape:s});return this.tensorTrackersById.set(u,new Pc(this,d)),this.externalTensors.add(d),u}async getCachedTensor(e,r,i,s,o,u,d){let c=this.getMLContext(e);for(let[m,y]of this.freeTensors.entries())if(y.canReuseTensor(c,r,i)){He("verbose",()=>`[WebNN] Reusing tensor {dataType: ${r}, ${d?`fallbackDataType: ${d},`:""} shape: ${i}`);let w=this.freeTensors.splice(m,1)[0];return w.sessionId=e,w}He("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${r}, ${d?`fallbackDataType: ${d},`:""} shape: ${i}}`);let f=await c.createTensor({dataType:d??r,shape:i,dimensions:i,usage:s,writable:o,readable:u});return new Bc({sessionId:e,context:c,tensor:f,dataType:r,shape:i,fallbackDataType:d})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Tv=(...e)=>new Im(...e)}),Co,zm,Cv,m$=ae(()=>{"use strict";Ie(),ra(),Ev(),h$(),Tn(),Co=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),zm=(e,r)=>{if(e===r)return!0;if(e===void 0||r===void 0)return!1;let i=Object.keys(e).sort(),s=Object.keys(r).sort();return i.length===s.length&&i.every((o,u)=>o===s[u]&&e[o]===r[o])},Cv=class{constructor(e){this.tensorManager=Tv(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,ef(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){He("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){He("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let r=this.temporarySessionTensorIds.get(e);if(r){for(let i of r)He("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${i}}`),this.tensorManager.releaseTensorId(i);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let i=this.mlContextCache.findIndex(s=>s.gpuDevice===e);if(i!==-1)return this.mlContextCache[i].mlContext;{let s=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:s}),s}}else if(e===void 0){let i=this.mlContextCache.findIndex(s=>s.options===void 0&&s.gpuDevice===void 0);if(i!==-1)return this.mlContextCache[i].mlContext;{let s=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:s}),s}}let r=this.mlContextCache.findIndex(i=>zm(i.options,e));if(r!==-1)return this.mlContextCache[r].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:i}),i}}registerMLContext(e,r){this.mlContextBySessionId.set(e,r);let i=this.sessionIdsByMLContext.get(r);i||(i=new Set,this.sessionIdsByMLContext.set(r,i)),i.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,r.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let r=this.mlContextBySessionId.get(e);if(!r)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let i=this.sessionIdsByMLContext.get(r);if(i.delete(e),i.size===0){this.sessionIdsByMLContext.delete(r);let s=this.mlContextCache.findIndex(o=>o.mlContext===r);s!==-1&&this.mlContextCache.splice(s,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){He("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,r,i,s,o){let u=Co.get(i);if(!u)throw new Error(`Unsupported ONNX data type: ${i}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,r,u,s,o)}async createTemporaryTensor(e,r,i){He("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${r}, shape: ${i}}`);let s=Co.get(r);if(!s)throw new Error(`Unsupported ONNX data type: ${r}`);let o=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,o,s,i,!1);let u=this.temporarySessionTensorIds.get(e);return u?u.push(o):this.temporarySessionTensorIds.set(e,[o]),o}uploadTensor(e,r){if(!nt().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");He("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${r.byteLength}}`),this.tensorManager.upload(e,r)}async downloadTensor(e,r){return this.tensorManager.download(e,r)}createMLTensorDownloader(e,r){return async()=>{let i=await this.tensorManager.download(e);return tf(i,r)}}registerMLTensor(e,r,i,s){let o=Co.get(i);if(!o)throw new Error(`Unsupported ONNX data type: ${i}`);let u=this.tensorManager.registerTensor(e,r,o,s);return He("verbose",()=>`[WebNN] registerMLTensor {tensor: ${r}, dataType: ${o}, dimensions: ${s}} -> {tensorId: ${u}}`),u}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,r){let i=this.sessionGraphInputs.get(e);return i?i.includes(r):!1}isGraphOutput(e,r){let i=this.sessionGraphOutputs.get(e);return i?i.includes(r):!1}isGraphInputOutputTypeSupported(e,r,i=!0){let s=Co.get(Qi(r)),o=this.mlOpSupportLimitsBySessionId.get(e);return typeof s>"u"?!1:i?!!(o!=null&&o.input.dataTypes.includes(s)):!!(o!=null&&o.output.dataTypes.includes(s))}flush(){}}}),rf=ae(()=>{"use strict"}),Lc,yl,vl,Nm,Om,Uc,Tp,Am,Iv,g$=ae(()=>{"use strict";Tn(),rf(),Lc=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),yl=[],vl=e=>Math.ceil(Number(e)/16)*16,Nm=e=>{for(let r=0;r<yl.length;r++){let i=yl[r];if(e<=i)return i}return Math.ceil(e/16)*16},Om=1,Uc=()=>Om++,Tp=async(e,r,i,s)=>{let o=vl(i),u=e.device.createBuffer({size:o,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let d=e.getCommandEncoder();e.endComputePass(),d.copyBufferToBuffer(r,0,u,0,o),e.flush(),await u.mapAsync(GPUMapMode.READ);let c=u.getMappedRange();if(s){let f=s();return f.set(new Uint8Array(c,0,i)),f}else return new Uint8Array(c.slice(0,i))}finally{u.destroy()}},Am=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[r]of Lc)yl.push(r),this.freeBuffers.set(r,[]),this.freeUniformBuffers.set(r,[]);this.sessionCount=0}upload(e,r){let i=r.buffer,s=r.byteOffset,o=r.byteLength,u=vl(o),d=this.storageCache.get(e);if(!d)throw new Error("gpu data for uploading does not exist");if(Number(d.originalSize)!==o)throw new Error(`inconsistent data size. gpu data size=${d.originalSize}, data size=${o}`);if(u===o&&s%4===0)this.backend.device.queue.writeBuffer(d.gpuData.buffer,0,i,s,o);else{let c=new Uint8Array(u);c.set(r),this.backend.device.queue.writeBuffer(d.gpuData.buffer,0,c,0,u)}He("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,r){let i=this.storageCache.get(e);if(!i)throw new Error("source gpu data for memcpy does not exist");let s=this.storageCache.get(r);if(!s)throw new Error("destination gpu data for memcpy does not exist");if(i.originalSize!==s.originalSize)throw new Error("inconsistent source and destination gpu data size");let o=vl(i.originalSize),u=this.backend.getCommandEncoder();this.backend.endComputePass(),u.copyBufferToBuffer(i.gpuData.buffer,0,s.gpuData.buffer,0,o)}registerExternalBuffer(e,r,i){let s;if(i){if(s=i[0],e===i[1])return He("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${s}, buffer is the same, skip.`),s;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else s=Uc();return this.storageCache.set(s,{gpuData:{id:s,type:0,buffer:e},originalSize:r}),He("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${r}) => id=${s}, registered.`),s}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),He("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,r=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let i=Nm(e),s,o=(r&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,u=(r&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(o||u){let c=(o?this.freeBuffers:this.freeUniformBuffers).get(i);c?c.length>0?s=c.pop():s=this.backend.device.createBuffer({size:i,usage:r}):s=this.backend.device.createBuffer({size:i,usage:r})}else s=this.backend.device.createBuffer({size:i,usage:r});let d={id:Uc(),type:0,buffer:s};return this.storageCache.set(d.id,{gpuData:d,originalSize:Number(e)}),He("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${d.id}`),d}get(e){var r;return(r=this.storageCache.get(e))==null?void 0:r.gpuData}release(e){let r=typeof e=="bigint"?Number(e):e,i=this.storageCache.get(r);if(!i){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return He("verbose",()=>`[WebGPU] GpuDataManager.release(id=${r}), gpuDataId=${i.gpuData.id}`),this.storageCache.delete(r),this.buffersPending.push(i.gpuData.buffer),i.originalSize}async download(e,r){let i=this.storageCache.get(Number(e));if(!i)throw new Error("data does not exist");await Tp(this.backend,i.gpuData.buffer,i.originalSize,r)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let r=Lc.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let i=this.freeBuffers.get(e.size)||[];r===void 0||i.length>=r?e.destroy():i.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let i=this.freeUniformBuffers.get(e.size)||[];r===void 0||i.length>=r?e.destroy():i.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let r of this.buffersPending)e.push(r);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(r=>{r.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let r=this.capturedPendingBuffers.get(e);r&&(r.forEach(i=>{i.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(He("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(i=>{i.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Iv=(...e)=>new Am(...e)}),Rm,Ze,mt=ae(()=>{"use strict";Rm=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ze=e=>new Rm(e)}),os,wl,Ct,Tt,ke,ht,Cp,as,fi,xe,Io,J,_e,zv,nf,Dm,Nv,Be=ae(()=>{"use strict";Ie(),Re(),os=64,wl=(e,r)=>{if(r===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return r>1?`vec${r}<f16>`:"f16";case 1:return r>1?`vec${r}<f32>`:"f32";case 6:return r>1?`vec${r}<i32>`:"i32";case 12:return r>1?`vec${r}<u32>`:"u32";case 7:if(r>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(r>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(r!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ct=(e,r=1)=>{let i=wl(e,r);return typeof i=="string"?i:i[0]},Tt=(e,r=1)=>{let i=wl(e,r);return typeof i=="string"?i:i[1]},ke=(...e)=>{let r=[];return e.forEach(i=>{i.length!==0&&r.push({type:12,data:i},{type:12,data:K.computeStrides(i)})}),r},ht=e=>e%4===0?4:e%2===0?2:1,Cp=(e="f32",r,i="0")=>!r||r===1?`${e}(${i})`:`vec${r}<${e}>(${i})`,as=(e,r,i)=>e==="f32"?i:r===1?`f32(${i})`:`vec${r}<f32>(${i})`,fi=(e,r)=>r===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:r===2?`(${e}.x + ${e}.y)`:r===3?`(${e}.x + ${e}.y + ${e}.z)`:e,xe=(e,r,i,s)=>e.startsWith("uniforms.")&&i>4?typeof r=="string"?s==="f16"?`${e}[(${r}) / 8][(${r}) % 8 / 4][(${r}) % 8 % 4]`:`${e}[(${r}) / 4][(${r}) % 4]`:s==="f16"?`${e}[${Math.floor(r/8)}][${Math.floor(r%8/4)}][${r%8%4}]`:`${e}[${Math.floor(r/4)}][${r%4}]`:i>1?`${e}[${r}]`:e,Io=(e,r,i,s,o)=>{let u=typeof i=="number",d=u?i:i.length,c=[...new Array(d).keys()],f=d<2?"u32":d<=4?`vec${d}<u32>`:`array<u32, ${d}>`,m=wl(r,o),y=typeof m=="string"?m:m[1],w=typeof m=="string"?m:m[0],$={indices:f,value:y,storage:w,tensor:r},S=O=>typeof O=="string"?O:`${O}u`,b={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},C=u?"uniforms.":"",N=`${C}${e}_shape`,k=`${C}${e}_strides`,T="";for(let O=0;O<d-1;O++)T+=`
    let dim${O} = current / ${xe(k,O,d)};
    let rest${O} = current % ${xe(k,O,d)};
    indices[${O}] = dim${O};
    current = rest${O};
    `;T+=`indices[${d-1}] = current;`;let A=d<2?"":`
  fn o2i_${e}(offset: u32) -> ${$.indices} {
    var indices: ${$.indices};
    var current = offset;
    ${T}
    return indices;
  }`,D=O=>(b.offsetToIndices=!0,d<2?O:`o2i_${e}(${O})`),B=[];if(d>=2)for(let O=d-1;O>=0;O--)B.push(`${xe(k,O,d)} * (indices[${O}])`);let P=d<2?"":`
  fn i2o_${e}(indices: ${$.indices}) -> u32 {
    return ${B.join("+")};
  }`,V=O=>(b.indicesToOffset=!0,d<2?O:`i2o_${e}(${O})`),I=(...O)=>d===0?"0u":`${$.indices}(${O.map(S).join(",")})`,X=(O,F)=>d<2?`${O}`:`${xe(O,F,d)}`,te=(O,F,ne)=>d<2?`${O}=${ne};`:`${xe(O,F,d)}=${ne};`,me={},de=(O,F)=>{b.broadcastedIndicesToOffset=!0;let ne=`${F.name}broadcastedIndicesTo${e}Offset`;if(ne in me)return`${ne}(${O})`;let Q=[];for(let we=d-1;we>=0;we--){let Se=F.indicesGet("outputIndices",we+F.rank-d);Q.push(`${X(k,we)} * (${Se} % ${X(N,we)})`)}return me[ne]=`fn ${ne}(outputIndices: ${F.type.indices}) -> u32 {
             return ${Q.length>0?Q.join("+"):"0u"};
           }`,`${ne}(${O})`},pe=(O,F)=>(()=>{if($.storage===$.value)return`${e}[${O}]=${F};`;if($.storage==="vec2<u32>"&&$.value==="i32")return`${e}[${O}]=vec2<u32>(u32(${F}), select(0u, 0xFFFFFFFFu, ${F} < 0));`;if($.storage==="vec2<u32>"&&$.value==="u32")return`${e}[${O}]=vec2<u32>(u32(${F}), 0u);`;if($.storage==="u32"&&$.value==="vec4<bool>")return`${e}[${O}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${F}));`;throw new Error(`not supported combination of storage type ${$.storage} and value type ${$.value} yet`)})(),G=O=>(()=>{if($.storage===$.value)return`${e}[${O}]`;if($.storage==="vec2<u32>"&&$.value==="i32")return`i32(${e}[${O}].x)`;if($.storage==="vec2<u32>"&&$.value==="u32")return`u32(${e}[${O}].x)`;if($.storage==="u32"&&$.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${O}] & 0xFFu), bool(${e}[${O}] & 0xFF00u), bool(${e}[${O}] & 0xFF0000u), bool(${e}[${O}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${$.storage} and value type ${$.value} yet`)})(),he=d<2?"":`
  fn get_${e}ByIndices(indices: ${$.indices}) -> ${y} {
    return ${G(`i2o_${e}(indices)`)};
  }`,ye=d<2?"":(()=>{let O=c.map(ne=>`d${ne}: u32`).join(", "),F=c.map(ne=>`d${ne}`).join(", ");return`
  fn get_${e}(${O}) -> ${y} {
    return get_${e}ByIndices(${I(F)});
  }`})(),ge=(...O)=>{if(O.length!==d)throw new Error(`indices length must be ${d}`);let F=O.map(S).join(",");return d===0?G("0u"):d===1?G(F[0]):(b.get=!0,b.getByIndices=!0,b.indicesToOffset=!0,`get_${e}(${F})`)},ee=O=>d<2?G(O):(b.getByIndices=!0,b.indicesToOffset=!0,`get_${e}ByIndices(${O})`),re=d<2?"":`
  fn set_${e}ByIndices(indices: ${$.indices}, value: ${y}) {
    ${pe(`i2o_${e}(indices)`,"value")}
  }`,ue=d<2?"":(()=>{let O=c.map(ne=>`d${ne}: u32`).join(", "),F=c.map(ne=>`d${ne}`).join(", ");return`
  fn set_${e}(${O}, value: ${y}) {
    set_${e}ByIndices(${I(F)}, value);
  }`})();return{impl:()=>{let O=[],F=!1;return b.offsetToIndices&&(O.push(A),F=!0),b.indicesToOffset&&(O.push(P),F=!0),b.broadcastedIndicesToOffset&&(Object.values(me).forEach(ne=>O.push(ne)),F=!0),b.set&&(O.push(ue),F=!0),b.setByIndices&&(O.push(re),F=!0),b.get&&(O.push(ye),F=!0),b.getByIndices&&(O.push(he),F=!0),!u&&F&&O.unshift(`const ${N} = ${$.indices}(${i.join(",")});`,`const ${k} = ${$.indices}(${K.computeStrides(i).join(",")});`),O.join(`
`)},type:$,offsetToIndices:D,indicesToOffset:V,broadcastedIndicesToOffset:de,indices:I,indicesGet:X,indicesSet:te,set:(...O)=>{if(O.length!==d+1)throw new Error(`indices length must be ${d}`);let F=O[d];if(typeof F!="string")throw new Error("value must be string");let ne=O.slice(0,d).map(S).join(",");return d===0?pe("0u",F):d===1?pe(ne[0],F):(b.set=!0,b.setByIndices=!0,b.indicesToOffset=!0,`set_${e}(${ne}, ${F})`)},setByOffset:pe,setByIndices:(O,F)=>d<2?pe(O,F):(b.setByIndices=!0,b.indicesToOffset=!0,`set_${e}ByIndices(${O}, ${F});`),get:ge,getByOffset:G,getByIndices:ee,usage:s,name:e,strides:k,shape:N,rank:d}},J=(e,r,i,s=1)=>Io(e,r,i,"input",s),_e=(e,r,i,s=1)=>Io(e,r,i,"output",s),zv=(e,r,i)=>Io(e,r,i,"atomicOutput",1),nf=(e,r,i,s=1)=>Io(e,r,i,"internal",s),Dm=class{constructor(e,r){this.normalizedDispatchGroup=e,this.limits=r,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=os){let r=typeof e=="number"?e:e[0],i=typeof e=="number"?1:e[1],s=typeof e=="number"?1:e[2];if(r>this.limits.maxComputeWorkgroupSizeX||i>this.limits.maxComputeWorkgroupSizeY||s>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${r}, ${i}, ${s}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(r*i*s>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${r}, ${i}, ${s}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let o=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,u=o?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,d=o?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${r*i*s}u + local_idx;`;return`@compute @workgroup_size(${r}, ${i}, ${s})
  fn main(${u}) {
    ${d}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,r){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let i=e.usage==="input"?"read":"read_write",s=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${r}) var<storage, ${i}> ${e.name}: array<${s}>;`}declareVariables(...e){return e.map(r=>this.declareVariable(r,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(r=>this.registerInternalVariable(r)),this}registerUniform(e,r,i=1){return this.uniforms.push({name:e,type:r,length:i}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:r,type:i,length:s}of this.uniforms)if(s&&s>4)i==="f16"?e.push(`@align(16) ${r}:array<mat2x4<${i}>, ${Math.ceil(s/8)}>`):e.push(`${r}:array<vec4<${i}>, ${Math.ceil(s/4)}>`);else{let o=s==null||s===1?i:`vec${s}<${i}>`;e.push(`${r}:${o}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=r=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(r)];return this.uniforms.map(r=>[e(r.type),r.length??1])}},Nv=(e,r)=>new Dm(e,r)}),Mm,jc,Bm,Pm,Lm,Um,gr,Ov,Av,hi=ae(()=>{"use strict";Ie(),Re(),mt(),Be(),Mm=(e,r)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(r.length!==0&&r.length!==e[0].dims.length)throw new Error(`perm size ${r.length} does not match input rank ${e[0].dims.length}`)},jc=(e,r)=>r.length!==0?r:[...new Array(e).keys()].reverse(),Bm=(e,r)=>K.sortBasedOnPerm(e,jc(e.length,r)),Pm=(e,r,i,s)=>{let o=`fn perm(i: ${s.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let u=0;u<r;++u)o+=`a[${e[u]}]=i[${u}];`;return o+="return a;}"},Lm=(e,r)=>{let i=[],s=[];for(let o=0;o<e.length;++o)e[o]!==1&&i.push(e[o]),e[r[o]]!==1&&s.push(r[o]);return{newShape:i,newPerm:s}},Um=(e,r)=>{let i=0;for(let s=0;s<e.length;++s)if(r[e[s]]!==1){if(e[s]<i)return!1;i=e[s]}return!0},gr=(e,r)=>{let i=e.dataType,s=e.dims.length,o=jc(s,r),u=Bm(e.dims,o),d=e.dims,c=u,f=s<2||Um(o,e.dims),m;if(f)return m=b=>{let C=J("input",i,d,4),N=_e("output",i,c,4);return`
  ${b.registerUniform("output_size","u32").declareVariables(C,N)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=K.size(u);return{outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(b/64/4)},programUniforms:[{type:12,data:Math.ceil(b/4)}]}},getShaderSource:m};let{newShape:y,newPerm:w}=Lm(e.dims,o),$=K.areEqual(w,[2,3,1]),S=K.areEqual(w,[3,1,2]);if(y.length===2||$||S){d=$?[y[0],y[1]*y[2]]:S?[y[0]*y[1],y[2]]:y,c=[d[1],d[0]];let b=16;return m=C=>{let N=J("a",i,d.length),k=_e("output",i,c.length);return`
  ${C.registerUniform("output_size","u32").declareVariables(N,k)}
  var<workgroup> tile : array<array<${k.type.value}, ${b+1}>, ${b}>;
  ${C.mainStart([b,b,1])}
    let stride = (uniforms.output_shape[1] - 1) / ${b} + 1;
    let workgroup_id_x = workgroup_index % stride;
    let workgroup_id_y = workgroup_index / stride;
    let input_col = workgroup_id_y * ${b}u + local_id.x;
    let input_row = workgroup_id_x * ${b}u + local_id.y;
    if (input_row < uniforms.a_shape[0] && input_col < uniforms.a_shape[1]) {
      tile[local_id.y][local_id.x] = ${N.getByIndices(`${N.type.indices}(input_row, input_col)`)};
    }
    workgroupBarrier();

    let output_col = workgroup_id_x * ${b}u + local_id.x;
    let output_row = workgroup_id_y * ${b}u + local_id.y;
    if (output_row < uniforms.output_shape[0] && output_col < uniforms.output_shape[1]) {
      ${k.setByIndices(`${k.type.indices}(output_row, output_col)`,"tile[local_id.x][local_id.y]")}
    }
  }`},{name:"TransposeShared",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let C=K.size(u);return{outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(c[1]/b),y:Math.ceil(c[0]/b)},programUniforms:[{type:12,data:C},...ke(d,c)]}},getShaderSource:m}}return m=b=>{let C=J("a",i,d.length),N=_e("output",i,c.length);return`
  ${b.registerUniform("output_size","u32").declareVariables(C,N)}

  ${Pm(o,s,C,N)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${N.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${N.setByOffset("global_idx",C.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${r}`,inputDependencies:["rank"]},getRunData:()=>{let b=K.size(u);return{outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...ke(d,c)]}},getShaderSource:m}},Ov=(e,r)=>{Mm(e.inputs,r.perm),e.compute(gr(e.inputs[0],r.perm))},Av=e=>Ze({perm:e.perm})}),jm,Wm,Vm,Fm,qm,Hm,Gm,Km,Qm,Zm,Ur,Rv,Dv,Mv,Bv,Pv,Lv,Uv,jv,Wv,Vv,y$=ae(()=>{"use strict";Ie(),Re(),Be(),af(),hi(),jm={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},Wm={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Vm={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Fm={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},qm=(e,r)=>{let i=[];for(let s=r-e;s<r;++s)i.push(s);return i},Hm=(e,r)=>{let i=[],s=e.length;for(let u=0;u<s;u++)r.indexOf(u)===-1&&i.push(e[u]);let o=r.map(u=>e[u]);return[i,o]},Gm=(e,r)=>{let i=e.length+r.length,s=[],o=0;for(let u=0;u<i;u++)r.indexOf(u)===-1?s.push(e[o++]):s.push(1);return s},Km=(e,r)=>{for(let i=0;i<e.length;++i)if(e[e.length-i-1]!==r-1-i)return!1;return!0},Qm=(e,r)=>{let i=[];if(!Km(e,r)){for(let s=0;s<r;++s)e.indexOf(s)===-1&&i.push(s);e.forEach(s=>i.push(s))}return i},Zm=(e,r,i,s,o,u,d)=>{let c=i[0].dims,f=K.size(u),m=K.size(d),y=J("_A",i[0].dataType,c),w=_e("output",o,u),$=64;f===1&&($=256);let S=`
          var<workgroup> aBestValues : array<f32, ${$}>;
       `,b=C=>`
        ${C.registerUniform("reduceSize","u32").declareVariables(y,w)}
        ${S}
        fn DIV_CEIL(a : u32, b : u32) -> u32 {
          return ((a - 1u) / b + 1u);
         }
         ${C.mainStart($)}

          let outputIndex = global_idx / ${$};
          let offset = outputIndex * uniforms.reduceSize;

          var bestValue = f32(${Vm[s]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${$}) {
           let candidate = f32(${y.getByOffset("offset + k")});
           bestValue = ${jm[s]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${$}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${Wm[s]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${w.setByOffset("outputIndex",`${s==="mean"?`${w.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${w.type.storage}(${Fm[s]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${r};${$}`,inputDependencies:["type"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:f},programUniforms:[{type:12,data:m}]})}},Ur=(e,r,i,s)=>{let o=e.inputs.length===1?i:Ip(e.inputs,i),u=o.axes;u.length===0&&!o.noopWithEmptyAxes&&(u=e.inputs[0].dims.map((S,b)=>b));let d=K.normalizeAxes(u,e.inputs[0].dims.length),c=d,f=e.inputs[0],m=Qm(c,e.inputs[0].dims.length);m.length>0&&(f=e.compute(gr(e.inputs[0],m),{inputs:[0],outputs:[-1]})[0],c=qm(c.length,f.dims.length));let[y,w]=Hm(f.dims,c),$=y;o.keepDims&&($=Gm(y,d)),e.compute(Zm(r,o.cacheKey,[f],s,e.inputs[0].dataType,$,w),{inputs:[f]})},Rv=(e,r)=>{Ur(e,"ReduceMeanShared",r,"mean")},Dv=(e,r)=>{Ur(e,"ReduceL1Shared",r,"l1")},Mv=(e,r)=>{Ur(e,"ReduceL2Shared",r,"l2")},Bv=(e,r)=>{Ur(e,"ReduceLogSumExpShared",r,"logSumExp")},Pv=(e,r)=>{Ur(e,"ReduceMaxShared",r,"max")},Lv=(e,r)=>{Ur(e,"ReduceMinShared",r,"min")},Uv=(e,r)=>{Ur(e,"ReduceProdShared",r,"prod")},jv=(e,r)=>{Ur(e,"ReduceSumShared",r,"sum")},Wv=(e,r)=>{Ur(e,"ReduceSumSquareShared",r,"sumSquare")},Vv=(e,r)=>{Ur(e,"ReduceLogSumShared",r,"logSum")}}),jr,Ym,Dl,Ip,Wr,Xm,Jm,eg,tg,rg,ng,ig,ag,sg,og,Vr,Fv,qv,Hv,Gv,Kv,Qv,Zv,Yv,Xv,Jv,af=ae(()=>{"use strict";Ie(),Re(),mt(),Be(),y$(),jr=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Ym=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Dl=(e,r,i,s,o,u,d=!1,c=!1)=>{let f=[],m=i[0].dims,y=m.length,w=K.normalizeAxes(o,y),$=!c&&w.length===0;m.forEach((C,N)=>{$||w.indexOf(N)>=0?d&&f.push(1):f.push(C)});let S=f.length,b=K.size(f);return{name:e,shaderCache:r,getShaderSource:C=>{let N=[],k=J("_A",i[0].dataType,y),T=_e("output",u,S),A=s(k,T,w),D=A[2];for(let B=0,P=0;B<y;B++)$||w.indexOf(B)>=0?(d&&P++,D=`for(var j${B}: u32 = 0; j${B} < ${m[B]}; j${B}++) {
                  ${A[2].includes("last_index")?`let last_index = j${B};`:""}
                  ${k.indicesSet("input_indices",B,`j${B}`)}
                  ${D}
                }`):(N.push(`${k.indicesSet("input_indices",B,T.indicesGet("output_indices",P))};`),P++);return`

        ${C.registerUniform("output_size","u32").declareVariables(k,T)}

        ${C.mainStart()}
          ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${k.type.indices};
          let output_indices = ${T.offsetToIndices("global_idx")};

          ${N.join(`
`)}
          ${A[0]}       // init ops for reduce max/min
          ${A[1]}
          ${D}
          ${A[3]}
          ${A.length===4?T.setByOffset("global_idx","value"):A.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:f,dataType:u}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...ke(m,f)]})}},Ip=(e,r)=>{let i=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(s=>i.push(Number(s))),Ze({axes:i,keepDims:r.keepDims,noopWithEmptyAxes:r.noopWithEmptyAxes})},Wr=(e,r,i,s)=>{let o=e.inputs,u=o.length===1?i:Ip(o,i);e.compute(Dl(r,{hint:u.cacheKey,inputDependencies:["rank"]},[o[0]],u.noopWithEmptyAxes&&u.axes.length===0?Ym:s,u.axes,o[0].dataType,u.keepDims,u.noopWithEmptyAxes),{inputs:[0]})},Xm=(e,r)=>{jr(e.inputs),Wr(e,"ReduceLogSum",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,"value = log(value);"])},Jm=(e,r)=>{jr(e.inputs),Wr(e,"ReduceL1",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += abs(${i.getByIndices("input_indices")});`,""])},eg=(e,r)=>{jr(e.inputs),Wr(e,"ReduceL2",r,(i,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},tg=(e,r)=>{jr(e.inputs),Wr(e,"ReduceLogSumExp",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += exp(${i.getByIndices("input_indices")});`,"value = log(value);"])},rg=(e,r)=>{jr(e.inputs),Wr(e,"ReduceMax",r,(i,s,o)=>{let u=[];for(let d=0;d<i.rank;d++)(o.indexOf(d)>=0||o.length===0)&&u.push(i.indicesSet("input_indices",d,0));return[`${u.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = max(value, ${i.getByIndices("input_indices")});`,""]})},ng=(e,r)=>{jr(e.inputs),Wr(e,"ReduceMean",r,(i,s,o)=>{let u=1;for(let d=0;d<i.rank;d++)(o.indexOf(d)>=0||o.length===0)&&(u*=e.inputs[0].dims[d]);return["var sum = f32(0);","",`sum += f32(${i.getByIndices("input_indices")});`,`let value = ${s.type.value}(sum / ${u});`]})},ig=(e,r)=>{jr(e.inputs),Wr(e,"ReduceMin",r,(i,s,o)=>{let u=[];for(let d=0;d<i.rank;d++)(o.indexOf(d)>=0||o.length===0)&&u.push(`input_indices[${d}] = 0;`);return[`${u.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = min(value, ${i.getByIndices("input_indices")});`,""]})},ag=(e,r)=>{jr(e.inputs),Wr(e,"ReduceProd",r,(i,s)=>[`var value = ${s.type.storage}(1);`,"",`value *= ${i.getByIndices("input_indices")};`,""])},sg=(e,r)=>{jr(e.inputs),Wr(e,"ReduceSum",r,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,""])},og=(e,r)=>{jr(e.inputs),Wr(e,"ReduceSumSquare",r,(i,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += t * t;`,""])},Vr=(e,r,i)=>{if(r.length===0)return i;let s=1,o=1;for(let u=0;u<r.length;u++)r.indexOf(u)===-1?s*=e[u]:o*=e[u];return o<32&&s>1024},Fv=(e,r)=>{Vr(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?ng(e,r):Rv(e,r)},qv=(e,r)=>{Vr(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?Jm(e,r):Dv(e,r)},Hv=(e,r)=>{Vr(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?eg(e,r):Mv(e,r)},Gv=(e,r)=>{Vr(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?tg(e,r):Bv(e,r)},Kv=(e,r)=>{Vr(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?rg(e,r):Pv(e,r)},Qv=(e,r)=>{Vr(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?ig(e,r):Lv(e,r)},Zv=(e,r)=>{Vr(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?ag(e,r):Uv(e,r)},Yv=(e,r)=>{Vr(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?sg(e,r):jv(e,r)},Xv=(e,r)=>{Vr(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?og(e,r):Wv(e,r)},Jv=(e,r)=>{Vr(e.inputs[0].dims,r.axes,r.noopWithEmptyAxes)?Xm(e,r):Vv(e,r)}}),Wc,e1,t1,zp,v$=ae(()=>{"use strict";Ie(),mt(),af(),Wc=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},e1=(e,r)=>{Wc(e.inputs);let i=(s,o,u)=>{let d=[];for(let c=0;c<s.rank;c++)(u.indexOf(c)>=0||u.length===0)&&d.push(`input_indices[${c}] = 0;`);return[`${d.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${s.getByIndices("input_indices")} ${r.selectLastIndex>0?"<=":"<"} value) {
         value = ${s.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",o.setByOffset("global_idx","best_index")]};e.compute(Dl("ArgMin",{hint:r.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[r.axis],7,r.keepDims),{inputs:[0]})},t1=(e,r)=>{Wc(e.inputs);let i=(s,o,u)=>{let d=[];for(let c=0;c<s.rank;c++)(u.indexOf(c)>=0||u.length===0)&&d.push(`input_indices[${c}] = 0;`);return[`${d.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${s.getByIndices("input_indices")} ${r.selectLastIndex>0?">=":">"} value) {
         value = ${s.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",o.setByOffset("global_idx","best_index")]};e.compute(Dl("argMax",{hint:r.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[r.axis],7,r.keepDims),{inputs:[0]})},zp=e=>Ze(e)}),ug,_l,lg,dg,cg,Fo,pg,r1,sf=ae(()=>{"use strict";Ie(),Re(),rf(),Be(),ug=(e,r)=>{let i=e[0],s=e[1],o=e[2],u=e[3],d=e[4],c=e[5];if(d&&c)throw new Error("Attention cannot have both past and attention_bias");if(i.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let f=i.dims[0],m=i.dims[1],y=i.dims[2];if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(s.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(s.dims[0]!==y)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(o.dims[0]!==s.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let w=o.dims[0]/3,$=w,S=$;if(r.qkvHiddenSizes.length>0){if(r.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let A of r.qkvHiddenSizes)if(A%r.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");w=r.qkvHiddenSizes[0],$=r.qkvHiddenSizes[1],S=r.qkvHiddenSizes[2]}let b=m;if(w!==$)throw new Error("qkv_hidden_sizes first element should be same as the second");if(o.dims[0]!==w+$+S)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let C=0;if(d){if($!==S)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(d.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(d.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(d.dims[1]!==f)throw new Error('Input "past" second dimension must be batch_size');if(d.dims[2]!==r.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(d.dims[4]!==$/r.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');r.pastPresentShareBuffer||(C=d.dims[3])}let N=b+C,k=-1,T=0;if(u)throw new Error("Mask not supported");if(d)throw new Error("past is not supported");if(c){if(c.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(c.dims[0]!==f||c.dims[1]!==r.numHeads||c.dims[2]!==m||c.dims[3]!==N)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:m,pastSequenceLength:C,kvSequenceLength:b,totalSequenceLength:N,maxSequenceLength:k,inputHiddenSize:y,hiddenSize:w,vHiddenSize:S,headSize:Math.floor(w/r.numHeads),vHeadSize:Math.floor(S/r.numHeads),numHeads:r.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:r.maskFilterValue,maskType:T,scale:r.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},_l=(e,r,i)=>r&&e?`
      let total_sequence_length_input = u32(${r.getByOffset("0")});
      let present_sequence_length = max(total_sequence_length_input, uniforms.past_sequence_length);
      let is_subsequent_prompt: bool = sequence_length > 1 && sequence_length != total_sequence_length_input;
      let is_first_prompt: bool = is_subsequent_prompt == false && sequence_length == total_sequence_length_input;
      total_sequence_length = u32(${e==null?void 0:e.getByOffset("batchIdx")}) + 1;
      var past_sequence_length: u32 = 0;
      if (is_first_prompt == false) {
        past_sequence_length = total_sequence_length - sequence_length;
      }
       `:`
    ${i?"let past_sequence_length = uniforms.past_sequence_length":""};
    let present_sequence_length = total_sequence_length;
    `,lg=(e,r,i,s,o,u,d,c)=>{let f=ht(d?1:u),m=64,y=u/f;y<m&&(m=32);let w=Math.ceil(u/f/m),$=[{type:12,data:r},{type:12,data:i},{type:12,data:s},{type:12,data:o},{type:12,data:y},{type:12,data:w}],S=Ct(e.dataType,f),b=Tt(1,f),C=["type"];d&&C.push("type"),c&&C.push("type");let N=k=>{let T=_e("x",e.dataType,e.dims,f),A=[T],D=d?J("seq_lens",d.dataType,d.dims):void 0;D&&A.push(D);let B=c?J("total_sequence_length_input",c.dataType,c.dims):void 0;B&&A.push(B);let P=Tt(e.dataType),V=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
  var<workgroup> thread_max: array<f32, ${m}>;
  var<workgroup> thread_sum: array<f32, ${m}>;
  ${k.registerUniforms(V).declareVariables(...A)}
  ${k.mainStart([m,1,1])}
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let sequence_length = uniforms.sequence_length;
    var total_sequence_length = uniforms.total_sequence_length;
    ${_l(D,B,!1)}
    let local_offset = local_idx * uniforms.elements_per_thread;
    let offset = (global_idx / ${m}) * uniforms.total_sequence_length + local_offset;
    let seq_causal_length = ${d?"u32(past_sequence_length + workgroup_id.y + 1)":"total_sequence_length"};
    var thread_max_vector = ${b}(-3.4028234663852886e+38f);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      thread_max_vector = max(${b}(x[offset + i]), thread_max_vector);
    }
    thread_max[local_idx] = ${(()=>{switch(f){case 1:return"thread_max_vector";case 2:return"max(thread_max_vector.x, thread_max_vector.y)";case 4:return"max(max(thread_max_vector.x, thread_max_vector.y), max(thread_max_vector.z, thread_max_vector.w))";default:throw new Error(`Unsupported components: ${f}`)}})()};
    workgroupBarrier();

    var max_value =  f32(-3.4028234663852886e+38f);
    for (var i = 0u; i < ${m}; i++) {
      max_value = max(thread_max[i], max_value);
    }

    var sum_vector = ${b}(0);
    for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
      sum_vector += exp(${b}(x[offset + i]) - max_value);
    }
    thread_sum[local_idx] = ${(()=>{switch(f){case 1:return"sum_vector";case 2:return"sum_vector.x + sum_vector.y";case 4:return"sum_vector.x + sum_vector.y + sum_vector.z + sum_vector.w";default:throw new Error(`Unsupported components: ${f}`)}})()};
    workgroupBarrier();

    var sum: f32 = 0;
    for (var i = 0u; i < ${m}; i++) {
      sum += thread_sum[i];
    }

    if (sum == 0) {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        x[offset + i] = ${T.type.value}(${P}(1.0) / ${P}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${b}(x[offset + i]);
        x[offset + i] = ${T.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${d?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${T.type.value}(${P}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${m};${S};${f}`,inputDependencies:C},getShaderSource:N,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:o,z:r*i},programUniforms:$})}},dg=(e,r,i,s,o,u,d,c,f)=>{let m=d+u.kvSequenceLength,y=[u.batchSize,u.numHeads,u.sequenceLength,m],w=e>1&&s,$=u.kvNumHeads?u.kvNumHeads:u.numHeads,S=w?[u.batchSize,$,m,u.headSize]:void 0,b=u.nReps?u.nReps:1,C=u.scale===0?1/Math.sqrt(u.headSize):u.scale,N=ht(u.headSize),k=u.headSize/N,T=12,A={x:Math.ceil(m/T),y:Math.ceil(u.sequenceLength/T),z:u.batchSize*u.numHeads},D=[{type:12,data:u.sequenceLength},{type:12,data:k},{type:12,data:m},{type:12,data:u.numHeads},{type:12,data:u.headSize},{type:1,data:C},{type:12,data:d},{type:12,data:u.kvSequenceLength},{type:12,data:b}],B=w&&s&&K.size(s.dims)>0,P=["type","type"];B&&P.push("type"),o&&P.push("type"),c&&P.push("type"),f&&P.push("type");let V=[{dims:y,dataType:r.dataType,gpuDataType:0}];w&&V.push({dims:S,dataType:r.dataType,gpuDataType:0});let I=X=>{let te=J("q",r.dataType,r.dims,N),me=J("key",i.dataType,i.dims,N),de=[te,me];if(B){let re=J("past_key",s.dataType,s.dims,N);de.push(re)}o&&de.push(J("attention_bias",o.dataType,o.dims));let pe=c?J("seq_lens",c.dataType,c.dims):void 0;pe&&de.push(pe);let G=f?J("total_sequence_length_input",f.dataType,f.dims):void 0;G&&de.push(G);let he=_e("output",r.dataType,y),ye=[he];w&&ye.push(_e("present_key",r.dataType,S,N));let ge=Tt(1,N),ee=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${T}u;

  var<workgroup> tileQ: array<${te.type.storage}, ${T*T}>;
  var<workgroup> tileK: array<${te.type.storage}, ${T*T}>;
  ${X.registerUniforms(ee).declareVariables(...de,...ye)}
  ${X.mainStart([T,T,1])}
    // x holds the N and y holds the M
    let headIdx = workgroup_id.z % uniforms.num_heads;
    let kvHeadIdx = ${b===1?"headIdx":"headIdx / uniforms.n_reps"};
    let kv_num_heads = ${b===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
    let batchIdx = workgroup_id.z / uniforms.num_heads;
    let m = workgroup_id.y * TILE_SIZE;
    let n = workgroup_id.x * TILE_SIZE;
    let sequence_length = uniforms.M;
    var total_sequence_length = uniforms.N;
    ${_l(pe,G,!0)}
    let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx;
    let qOffset = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
    ${B&&w?"let pastKeyOffset = absKvHeadIdx * uniforms.past_sequence_length * uniforms.K;":""};
    let kOffset = absKvHeadIdx * uniforms.kv_sequence_length * uniforms.K;
    ${w?"let presentKeyOffset = absKvHeadIdx * uniforms.N * uniforms.K;":""}
    var value = ${ge}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (global_id.y < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = q[qOffset + local_id.y * uniforms.K + w + local_id.x];
      }
      if (n + local_id.y < uniforms.N && w + local_id.x < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
      ${B&&w?`
              if (n + local_id.y < past_sequence_length) {
                tileK[idx] = past_key[pastKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
              } else if (n + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
                tileK[idx] = key[kOffset + (n + local_id.y - past_sequence_length) * uniforms.K + w + local_id.x];
              }`:`
          if (n + local_id.y < uniforms.kv_sequence_length) {
            tileK[idx] = key[kOffset + (n + local_id.y) * uniforms.K + w + local_id.x];
          }`}
      ${w?`if (n + local_id.y < present_sequence_length) {
        present_key[presentKeyOffset + (n + local_id.y) * uniforms.K + w + local_id.x] = tileK[idx];
      }`:""}
      }
      workgroupBarrier();

      for (var k: u32 = 0u; k < TILE_SIZE && w+k < uniforms.K; k++) {
          value += ${ge}(tileQ[TILE_SIZE * local_id.y + k] * tileK[TILE_SIZE * local_id.x + k]);
      }

      workgroupBarrier();
    }

    if (global_id.y < uniforms.M && global_id.x < total_sequence_length) {
      let headOffset = workgroup_id.z * uniforms.M * uniforms.N;
      let outputIdx = headOffset + global_id.y * uniforms.N + global_id.x;
      var sum: f32 = ${(()=>{switch(N){case 1:return"value";case 2:return"value.x + value.y";case 4:return"value.x + value.y + value.z + value.w";default:throw new Error(`Unsupported components: ${N}`)}})()};
        output[outputIdx] = ${he.type.value} (sum * uniforms.alpha) + ${o?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${N};${o!==void 0};${s!==void 0};${e}`,inputDependencies:P},getRunData:()=>({outputs:V,dispatchGroup:A,programUniforms:D}),getShaderSource:I}},cg=(e,r,i,s,o,u,d=void 0,c=void 0)=>{let f=u+o.kvSequenceLength,m=o.nReps?o.nReps:1,y=o.vHiddenSize*m,w=e>1&&s,$=o.kvNumHeads?o.kvNumHeads:o.numHeads,S=w?[o.batchSize,$,f,o.headSize]:void 0,b=[o.batchSize,o.sequenceLength,y],C=12,N={x:Math.ceil(o.vHeadSize/C),y:Math.ceil(o.sequenceLength/C),z:o.batchSize*o.numHeads},k=[{type:12,data:o.sequenceLength},{type:12,data:f},{type:12,data:o.vHeadSize},{type:12,data:o.numHeads},{type:12,data:o.headSize},{type:12,data:y},{type:12,data:u},{type:12,data:o.kvSequenceLength},{type:12,data:m}],T=w&&s&&K.size(s.dims)>0,A=["type","type"];T&&A.push("type"),d&&A.push("type"),c&&A.push("type");let D=[{dims:b,dataType:r.dataType,gpuDataType:0}];w&&D.push({dims:S,dataType:r.dataType,gpuDataType:0});let B=P=>{let V=J("probs",r.dataType,r.dims),I=J("v",i.dataType,i.dims),X=[V,I];T&&X.push(J("past_value",s.dataType,s.dims));let te=d?J("seq_lens",d.dataType,d.dims):void 0;d&&X.push(te);let me=c?J("total_sequence_length_input",c.dataType,c.dims):void 0;c&&X.push(me);let de=[_e("output",r.dataType,b)];w&&de.push(_e("present_value",r.dataType,S));let pe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${C}u;
  var<workgroup> tileQ: array<${V.type.value}, ${C*C}>;
  var<workgroup> tileV: array<${V.type.value}, ${C*C}>;
  ${P.registerUniforms(pe).declareVariables(...X,...de)}
  ${P.mainStart([C,C,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${m===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${m===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${_l(te,me,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${T&&w?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${w?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${V.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${T&&w?`
        if (w + local_id.y < past_sequence_length) {
          tileV[idx] = past_value[pastValueOffset + (w + local_id.y) * uniforms.N];
        } else if (w + local_id.y - past_sequence_length < uniforms.kv_sequence_length) {
          tileV[idx] = v[vOffset + (w + local_id.y - past_sequence_length) * uniforms.N];
        }
      `:`
            if (w + local_id.y < uniforms.kv_sequence_length) {
              tileV[idx] = v[vOffset + (w + local_id.y) * uniforms.N];
            }`}
        ${w?`
            if (w + local_id.y < present_sequence_length) {
          present_value[presentValueOffset + (w + local_id.y) * uniforms.N] = tileV[idx];
        }`:""}
      }
     workgroupBarrier();
     for (var k: u32 = 0u; k < TILE_SIZE && w+k < total_sequence_length; k++) {
       value += tileQ[TILE_SIZE * local_id.y + k] * tileV[TILE_SIZE * k + local_id.x];
     }
     workgroupBarrier();
   }

   // we need to transpose output from BNSH_v to BSND_v
   if (m < uniforms.M && n < uniforms.N) {
     let outputIdx = batchIdx * uniforms.M * uniforms.v_hidden_size + m * uniforms.v_hidden_size
       + headIdx * uniforms.N + n;
     output[outputIdx] = value;
   }
  }`};return{name:"AttentionScore",shaderCache:{hint:`${s!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:D,dispatchGroup:N,programUniforms:k}),getShaderSource:B}},Fo=(e,r,i,s,o,u,d,c,f,m,y=void 0,w=void 0)=>{let $=Math.min(e.outputCount,1+(d?1:0)+(c?1:0)),S=$>1?d:void 0,b=$>1?c:void 0,C=$>1?m.pastSequenceLength:0,N=C+m.kvSequenceLength,k=f&&K.size(f.dims)>0?f:void 0,T=[r,i];S&&K.size(S.dims)>0&&T.push(S),k&&T.push(k),y&&T.push(y),w&&T.push(w);let A=e.compute(dg($,r,i,S,k,m,C,y,w),{inputs:T,outputs:$>1?[-1,1]:[-1]})[0];e.compute(lg(A,m.batchSize,m.numHeads,C,m.sequenceLength,N,y,w),{inputs:y&&w?[A,y,w]:[A],outputs:[]});let D=[A,s];b&&K.size(b.dims)>0&&D.push(b),y&&D.push(y),w&&D.push(w),e.compute(cg($,A,s,b,m,C,y,w),{inputs:D,outputs:$>1?[0,2]:[0]})},pg=(e,r)=>{let i=[r.batchSize,r.numHeads,r.sequenceLength,r.headSize],s=r.sequenceLength,o=r.inputHiddenSize,u=r.headSize,d=12,c={x:Math.ceil(r.headSize/d),y:Math.ceil(r.sequenceLength/d),z:r.batchSize*r.numHeads},f=[e.inputs[0],e.inputs[1],e.inputs[2]],m=[{type:12,data:s},{type:12,data:o},{type:12,data:u},{type:12,data:r.numHeads},{type:12,data:r.headSize},{type:12,data:r.hiddenSize},{type:12,data:r.hiddenSize+r.hiddenSize+r.vHiddenSize}],y=w=>{let $=_e("output_q",f[0].dataType,i),S=_e("output_k",f[0].dataType,i),b=_e("output_v",f[0].dataType,i),C=J("input",f[0].dataType,f[0].dims),N=J("weight",f[1].dataType,f[1].dims),k=J("bias",f[2].dataType,f[2].dims),T=C.type.storage,A=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${d}u;
  var<workgroup> tileInput: array<${T}, ${d*d}>;
  var<workgroup> tileWeightQ: array<${T}, ${d*d}>;
  var<workgroup> tileWeightK: array<${T}, ${d*d}>;
  var<workgroup> tileWeightV: array<${T}, ${d*d}>;
  ${w.registerUniforms(A).declareVariables(C,N,k,$,S,b)}
  ${w.mainStart([d,d,1])}
    let batchIndex = workgroup_id.z / uniforms.num_heads;
    let headNumber = workgroup_id.z % uniforms.num_heads;
    let m = global_id.y;
    let n = global_id.x;

    let inputOffset = batchIndex * (uniforms.M * uniforms.K) + m * uniforms.K;
    let biasOffsetQ = headNumber * uniforms.head_size;
    let biasOffsetK = uniforms.hidden_size + biasOffsetQ;
    let biasOffsetV = uniforms.hidden_size + biasOffsetK;

    var valueQ = ${T}(0);
    var valueK = ${T}(0);
    var valueV = ${T}(0);
    for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileInput[TILE_SIZE * local_id.y + local_id.x] = input[inputOffset + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        let offset = n + (w + local_id.y) * uniforms.ldb;
        tileWeightQ[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetQ + offset];
        tileWeightK[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetK + offset];
        tileWeightV[TILE_SIZE * local_id.y + local_id.x] = weight[biasOffsetV + offset];
      }
      workgroupBarrier();
      for (var k: u32 = 0u; k<TILE_SIZE && w+k < uniforms.K; k++) {
        let inputTileOffset = TILE_SIZE * local_id.y + k;
        let weightTileOffset = TILE_SIZE * k + local_id.x;
        valueQ += tileInput[inputTileOffset] * tileWeightQ[weightTileOffset];
        valueK += tileInput[inputTileOffset] * tileWeightK[weightTileOffset];
        valueV += tileInput[inputTileOffset] * tileWeightV[weightTileOffset];
      }

      workgroupBarrier();
    }

    let headOffset = (m * uniforms.N + n) % uniforms.head_size;
    valueQ += bias[headOffset + biasOffsetQ];
    valueK += bias[headOffset + biasOffsetK];
    valueV += bias[headOffset + biasOffsetV];

    let offset = workgroup_id.z * uniforms.M * uniforms.N;
    if (m < uniforms.M && n < uniforms.N) {
      let outputIdx = offset + m * uniforms.N + n;
      output_q[outputIdx] = valueQ;
      output_k[outputIdx] = valueK;
      output_v[outputIdx] = valueV;
    }
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:c,programUniforms:m}),getShaderSource:y},{inputs:f,outputs:[-1,-1,-1]})},r1=(e,r)=>{let i=ug(e.inputs,r),[s,o,u]=pg(e,i);return Fo(e,s,o,u,e.inputs[4],void 0,void 0,void 0,e.inputs[5],i)}}),fg,hg,mg,n1,w$=ae(()=>{"use strict";yr(),Ie(),Re(),mt(),Be(),fg=(e,r)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let i=(s,o,u)=>{let d=o.length;if(d!==s.length)throw new Error(`${u}: num dimensions != ${d}`);o.forEach((c,f)=>{if(c!==s[f])throw new Error(`${u}: dim[${f}] do not match`)})};if(e[0].dims.length>1){let s=r.format==="NHWC"?r.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,r.spatial?2:void 0);i(e[1].dims,s,"Invalid input scale"),i(e[2].dims,s,"Invalid input B"),i(e[3].dims,s,"Invalid input mean"),i(e[4].dims,s,"Invalid input var")}else i(e[1].dims,[1],"Invalid input scale"),i(e[2].dims,[1],"Invalid input B"),i(e[3].dims,[1],"Invalid input mean"),i(e[4].dims,[1],"Invalid input var")},hg=(e,r)=>{let{epsilon:i,spatial:s,format:o}=r,u=e[0].dims,d=s?ht(u[u.length-1]):1,c=o==="NHWC"&&u.length>1?d:1,f=K.size(u)/d,m=s,y=m?u.length:u,w=J("x",e[0].dataType,e[0].dims,d),$=J("scale",e[1].dataType,e[1].dims,c),S=J("bias",e[2].dataType,e[2].dims,c),b=J("inputMean",e[3].dataType,e[3].dims,c),C=J("inputVar",e[4].dataType,e[4].dims,c),N=_e("y",e[0].dataType,y,d),k=()=>{let A="";if(s)A=`let cOffset = ${u.length===1?"0u":o==="NHWC"?`outputIndices[${u.length-1}] / ${d}`:"outputIndices[1]"};`;else if(o==="NCHW")A=`
            ${N.indicesSet("outputIndices","0","0")}
            let cOffset = ${N.indicesToOffset("outputIndices")};`;else{A=`var cIndices = ${$.type.indices}(0);
                       cIndices[0] = outputIndices[${u.length-1}];`;for(let D=1;D<$.rank;D++)A+=`cIndices[${D}] = outputIndices[${D}];`;A+=`let cOffset = ${$.indicesToOffset("cIndices")};`}return A},T=A=>`
  const epsilon = ${i};
  ${A.registerUniform("outputSize","u32").declareVariables(w,$,S,b,C,N)}
  ${A.mainStart()}
  ${A.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
    var outputIndices = ${N.offsetToIndices(`global_idx * ${d}`)};
    ${k()}
    let scale = ${$.getByOffset("cOffset")};
    let bias = ${S.getByOffset("cOffset")};
    let inputMean = ${b.getByOffset("cOffset")};
    let inputVar = ${C.getByOffset("cOffset")};
    let x = ${w.getByOffset("global_idx")};
    let value = (x - inputMean) * inverseSqrt(inputVar + epsilon) * scale + bias;
    ${N.setByOffset("global_idx","value")}
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${r.epsilon}_${r.format}_${s}_${d}`,inputDependencies:m?["rank","type","type","type","type"]:void 0},getShaderSource:T,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m?[{type:12,data:f},...ke(u)]:[{type:12,data:f}]})}},mg=e=>Ze(e),n1=(e,r)=>{let{inputs:i,outputCount:s}=e,o=mg({...r,outputCount:s});if(dt.webgpu.validateInputContent&&fg(i,o),r.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(hg(i,o))}}),gg,yg,i1,_$=ae(()=>{"use strict";Re(),Be(),gg=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},yg=e=>{let r=e[0].dims,i=e[0].dims[2],s=K.size(r)/4,o=e[0].dataType,u=J("input",o,r,4),d=J("bias",o,[i],4),c=J("residual",o,r,4),f=_e("output",o,r,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:m=>`
  const channels = ${i}u / 4;
  ${m.declareVariables(u,d,c,f)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let value = ${u.getByOffset("global_idx")}
      + ${d.getByOffset("global_idx % channels")} + ${c.getByOffset("global_idx")};
    ${f.setByOffset("global_idx","value")}
  }`}},i1=e=>{gg(e.inputs),e.compute(yg(e.inputs))}}),vg,Ge,a1,s1,o1,u1,l1,d1,c1,p1,f1,wg,h1,m1,g1,y1,Lo,v1,Il,w1,_1,$1,x1,b1,S1,k1,E1,T1,C1,I1,z1,N1,O1,A1,R1,D1,Vc,M1,Np,Op,B1,P1,L1,_g,$g,U1,of=ae(()=>{"use strict";Ie(),Re(),mt(),Be(),vg=(e,r,i,s,o,u,d)=>{let c=Math.ceil(r/4),f="";typeof o=="string"?f=`${o}(a)`:f=o("a");let m=J("inputData",i,[c],4),y=_e("outputData",s,[c],4),w=[{name:"vec_size",type:"u32"}];return d&&w.push(...d),`
      ${e.registerUniforms(w).declareVariables(m,y)}

  ${u??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${m.getByOffset("global_idx")};
    ${y.setByOffset("global_idx",f)}
  }`},Ge=(e,r,i,s,o,u=e.dataType,d,c)=>{let f=[{type:12,data:Math.ceil(K.size(e.dims)/4)}];return d&&f.push(...d),{name:r,shaderCache:{hint:o,inputDependencies:["type"]},getShaderSource:m=>vg(m,K.size(e.dims),e.dataType,u,i,s,c),getRunData:m=>({outputs:[{dims:e.dims,dataType:u}],dispatchGroup:{x:Math.ceil(K.size(m[0].dims)/64/4)},programUniforms:f})}},a1=e=>{e.compute(Ge(e.inputs[0],"Abs","abs"))},s1=e=>{e.compute(Ge(e.inputs[0],"Acos","acos"))},o1=e=>{e.compute(Ge(e.inputs[0],"Acosh","acosh"))},u1=e=>{e.compute(Ge(e.inputs[0],"Asin","asin"))},l1=e=>{e.compute(Ge(e.inputs[0],"Asinh","asinh"))},d1=e=>{e.compute(Ge(e.inputs[0],"Atan","atan"))},c1=e=>{e.compute(Ge(e.inputs[0],"Atanh","atanh"))},p1=e=>Ze(e),f1=(e,r)=>{let i;switch(r.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${r.to}`)}e.compute(Ge(e.inputs[0],"Cast",i,void 0,r.cacheKey,r.to))},wg=e=>{let r,i,s=e.length>=2&&e[1].data!==0,o=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:r=s?e[1].getFloat32Array()[0]:-34028234663852886e22,i=o?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:r=s?e[1].getUint16Array()[0]:64511,i=o?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ze({min:r,max:i})},h1=(e,r)=>{let i=r||wg(e.inputs),s=Tt(e.inputs[0].dataType);e.compute(Ge(e.inputs[0],"Clip",o=>`clamp(${o}, vec4<${s}>(uniforms.min), vec4<${s}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:e.inputs[0].dataType,data:i.min},{type:e.inputs[0].dataType,data:i.max}],[{name:"min",type:s},{name:"max",type:s}]),{inputs:[0]})},m1=e=>{e.compute(Ge(e.inputs[0],"Ceil","ceil"))},g1=e=>{e.compute(Ge(e.inputs[0],"Cos","cos"))},y1=e=>{e.compute(Ge(e.inputs[0],"Cosh","cosh"))},Lo=e=>Ze(e),v1=(e,r)=>{let i=Tt(e.inputs[0].dataType);e.compute(Ge(e.inputs[0],"Elu",s=>`elu_vf32(${s})`,`
  const elu_alpha_ = ${i}(${r.alpha});

  fn elu_f32(a: ${i}) -> ${i} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${i}>) -> vec4<${i}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,r.cacheKey))},Il=(e="f32")=>`
const r0: ${e} = 0.3275911;
const r1: ${e} = 0.254829592;
const r2: ${e} = -0.284496736;
const r3: ${e} = 1.421413741;
const r4: ${e} = -1.453152027;
const r5: ${e} = 1.061405429;

fn erf_vf32(v: vec4<${e}>) -> vec4<${e}> {
  let absv = abs(v);
  let x = 1.0 / (1.0 + r0 * absv);
  return sign(v) * (1.0 - ((((r5 * x + r4) * x + r3) * x + r2) * x + r1) * x * exp(-absv * absv));
}`,w1=e=>{let r=Tt(e.inputs[0].dataType);e.compute(Ge(e.inputs[0],"Erf",i=>`erf_vf32(${i})`,Il(r)))},_1=e=>{e.compute(Ge(e.inputs[0],"Exp","exp"))},$1=e=>{e.compute(Ge(e.inputs[0],"Floor","floor"))},x1=e=>{let r=Tt(e.inputs[0].dataType);e.compute(Ge(e.inputs[0],"Gelu",i=>`0.5 * ${i} * (1.0 + erf_vf32(${i} * 0.7071067811865475))`,Il(r)))},b1=(e,r)=>{let i=Tt(e.inputs[0].dataType);e.compute(Ge(e.inputs[0],"LeakyRelu",s=>`select(leaky_relu_alpha_ * ${s}, ${s}, ${s} >= vec4<${i}>(0.0))`,`const leaky_relu_alpha_ = ${i}(${r.alpha});`,r.cacheKey))},S1=e=>{e.compute(Ge(e.inputs[0],"Not",r=>`!${r}`))},k1=e=>{e.compute(Ge(e.inputs[0],"Neg",r=>`-${r}`))},E1=e=>{e.compute(Ge(e.inputs[0],"Reciprocal",r=>`1.0/${r}`))},T1=e=>{let r=Tt(e.inputs[0].dataType);e.compute(Ge(e.inputs[0],"Relu",i=>`select(vec4<${r}>(0.0), ${i}, ${i} > vec4<${r}>(0.0))`))},C1=e=>{e.compute(Ge(e.inputs[0],"Sigmoid",r=>`(1.0 / (1.0 + exp(-${r})))`))},I1=e=>Ze(e),z1=(e,r)=>{let i=Tt(e.inputs[0].dataType);e.compute(Ge(e.inputs[0],"HardSigmoid",s=>`max(vec4<${i}>(0.0), min(vec4<${i}>(1.0), ${r.alpha} * ${s} + vec4<${i}>(${r.beta})))`,void 0,r.cacheKey))},N1=e=>{let r=Tt(e.inputs[0].dataType);e.compute(Ge(e.inputs[0],"HardSwish",i=>`${i} * max(vec4<${r}>(0.0), min(vec4<${r}>(1.0), vec4<${r}>(${r}(1.0 / 6.0)) * ${i} + vec4<${r}>(0.5)))`))},O1=e=>{e.compute(Ge(e.inputs[0],"Sin","sin"))},A1=e=>{e.compute(Ge(e.inputs[0],"Sinh","sinh"))},R1=e=>{e.compute(Ge(e.inputs[0],"Sqrt","sqrt"))},D1=e=>{e.compute(Ge(e.inputs[0],"Tan","tan"))},Vc=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,M1=e=>{e.compute(Ge(e.inputs[0],"Tanh",Vc))},Np=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Vc("v")};
}
`,Op=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,B1=e=>{let r=Tt(e.inputs[0].dataType);e.compute(Ge(e.inputs[0],"FastGelu",Op,Np(r),void 0,e.inputs[0].dataType))},P1=(e,r)=>{let i=Tt(e.inputs[0].dataType);return e.compute(Ge(e.inputs[0],"ThresholdedRelu",s=>`select(vec4<${i}>(0.0), ${s}, ${s} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${i}>(${r.alpha});`,r.cacheKey)),0},L1=e=>{e.compute(Ge(e.inputs[0],"Log","log"))},_g=(e,r)=>`
const alpha = vec4<${e}>(${r});
const one = ${e}(1.0);
const zero = ${e}(0.0);

fn quick_gelu_impl(x: vec4<${e}>) -> vec4<${e}> {
  let v = x *alpha;
  var x1 : vec4<${e}>;
  for (var i = 0; i < 4; i = i + 1) {
    if (v[i] >= zero) {
      x1[i] = one / (one + exp(-v[i]));
    } else {
      x1[i] = one - one / (one + exp(v[i]));
    }
  }
  return x * x1;
}
`,$g=e=>`quick_gelu_impl(${e})`,U1=(e,r)=>{let i=Tt(e.inputs[0].dataType);e.compute(Ge(e.inputs[0],"QuickGelu",$g,_g(i,r.alpha),r.cacheKey,e.inputs[0].dataType))}}),xg,bg,j1,$$=ae(()=>{"use strict";Re(),Be(),of(),xg=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},bg=e=>{let r=e[0].dims.slice();r[2]=r[2]/2;let i=J("input",e[0].dataType,e[0].dims,4),s=J("bias",e[0].dataType,[e[0].dims[2]],4),o=_e("output",e[0].dataType,r,4),u=K.size(r)/4,d=Ct(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:r,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)}}),getShaderSource:c=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${c.declareVariables(i,s,o)}

  ${Il(d)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes(u)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${o.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},j1=e=>{xg(e.inputs),e.compute(bg(e.inputs))}}),Sg,kg,Fr,W1,V1,F1,q1,H1,G1,K1,Q1,Z1,Y1,x$=ae(()=>{"use strict";Ie(),Re(),Be(),Sg=(e,r,i,s,o,u,d,c,f,m,y,w)=>{let $,S;typeof c=="string"?$=S=(T,A)=>`${c}((${T}),(${A}))`:typeof c=="function"?$=S=c:($=c.scalar,S=c.vector);let b=_e("outputData",y,s.length,4),C=J("aData",f,r.length,4),N=J("bData",m,i.length,4),k;if(o)if(u){let T=K.size(r)===1,A=K.size(i)===1,D=r.length>0&&r[r.length-1]%4===0,B=i.length>0&&i[i.length-1]%4===0;T||A?k=b.setByOffset("global_idx",S(T?`${C.type.value}(${C.getByOffset("0")}.x)`:C.getByOffset("global_idx"),A?`${N.type.value}(${N.getByOffset("0")}.x)`:N.getByOffset("global_idx"))):k=`
            let outputIndices = ${b.offsetToIndices("global_idx * 4u")};
            let offsetA = ${C.broadcastedIndicesToOffset("outputIndices",b)};
            let offsetB = ${N.broadcastedIndicesToOffset("outputIndices",b)};
            ${b.setByOffset("global_idx",S(d||D?C.getByOffset("offsetA / 4u"):`${C.type.value}(${C.getByOffset("offsetA / 4u")}[offsetA % 4u])`,d||B?N.getByOffset("offsetB / 4u"):`${N.type.value}(${N.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else k=b.setByOffset("global_idx",S(C.getByOffset("global_idx"),N.getByOffset("global_idx")));else{if(!u)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let T=(A,D,B="")=>{let P=`aData[indexA${D}][componentA${D}]`,V=`bData[indexB${D}][componentB${D}]`;return`
            let outputIndices${D} = ${b.offsetToIndices(`global_idx * 4u + ${D}u`)};
            let offsetA${D} = ${C.broadcastedIndicesToOffset(`outputIndices${D}`,b)};
            let offsetB${D} = ${N.broadcastedIndicesToOffset(`outputIndices${D}`,b)};
            let indexA${D} = offsetA${D} / 4u;
            let indexB${D} = offsetB${D} / 4u;
            let componentA${D} = offsetA${D} % 4u;
            let componentB${D} = offsetB${D} % 4u;
            ${A}[${D}] = ${B}(${$(P,V)});
          `};y===9?k=`
            var data = vec4<u32>(0);
            ${T("data",0,"u32")}
            ${T("data",1,"u32")}
            ${T("data",2,"u32")}
            ${T("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:k=`
            ${T("outputData[global_idx]",0)}
            ${T("outputData[global_idx]",1)}
            ${T("outputData[global_idx]",2)}
            ${T("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(C,N,b)}

        ${w??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${k}
      }`},kg=(e,r,i,s,o,u,d=i.dataType)=>{let c=i.dims.map(Number),f=s.dims.map(Number),m=!K.areEqual(c,f),y=c,w=K.size(c),$=!1,S=!1,b=[m];if(m){let C=ss.calcShape(c,f,!1);if(!C)throw new Error("Can't perform binary op on the given tensors");y=C.slice(),w=K.size(y);let N=K.size(c)===1,k=K.size(f)===1,T=c.length>0&&c[c.length-1]%4===0,A=f.length>0&&f[f.length-1]%4===0;b.push(N),b.push(k),b.push(T),b.push(A);let D=1;for(let B=1;B<y.length;B++){let P=c[c.length-B],V=f[f.length-B];if(P===V)D*=P;else break}D%4===0?(S=!0,$=!0):(N||k||T||A)&&($=!0)}else $=!0;return b.push($),{name:e,shaderCache:{hint:r+b.map(C=>C.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:C=>Sg(C,c,f,y,$,m,S,o,i.dataType,s.dataType,d,u),getRunData:()=>({outputs:[{dims:y,dataType:d}],dispatchGroup:{x:Math.ceil(w/64/4)},programUniforms:[{type:12,data:Math.ceil(K.size(y)/4)},...ke(c,f,y)]})}},Fr=(e,r,i,s,o,u)=>{e.compute(kg(r,o??"",e.inputs[0],e.inputs[1],i,s,u))},W1=e=>{Fr(e,"Add",(r,i)=>`${r}+${i}`)},V1=e=>{Fr(e,"Div",(r,i)=>`${r}/${i}`)},F1=e=>{Fr(e,"Equal",{scalar:(r,i)=>`u32(${r}==${i})`,vector:(r,i)=>`vec4<u32>(${r}==${i})`},void 0,void 0,9)},q1=e=>{Fr(e,"Mul",(r,i)=>`${r}*${i}`)},H1=e=>{let r=J("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;Fr(e,"Pow",{scalar:(i,s)=>`pow_custom(${i},${s})`,vector:(i,s)=>`pow_vector_custom(${i},${s})`},`
    fn pow_custom(a : ${r}, b : ${r}) -> ${r} {
      if (b == ${r}(0.0)) {
        return ${r}(1.0);
      } else if (a < ${r}(0.0) && f32(b) != floor(f32(b))) {
        return ${r}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${r}(1.0), round(f32(abs(b) % ${r}(2.0))) != 1.0) * ${r}(${r==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${r}>, b : vec4<${r}>) -> vec4<${r}> {
      // TODO: implement vectorized pow
      return vec4<${r}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},G1=e=>{Fr(e,"Sub",(r,i)=>`${r}-${i}`)},K1=e=>{Fr(e,"Greater",{scalar:(r,i)=>`u32(${r}>${i})`,vector:(r,i)=>`vec4<u32>(${r}>${i})`},void 0,void 0,9)},Q1=e=>{Fr(e,"Less",{scalar:(r,i)=>`u32(${r}<${i})`,vector:(r,i)=>`vec4<u32>(${r}<${i})`},void 0,void 0,9)},Z1=e=>{Fr(e,"GreaterOrEqual",{scalar:(r,i)=>`u32(${r}>=${i})`,vector:(r,i)=>`vec4<u32>(${r}>=${i})`},void 0,void 0,9)},Y1=e=>{Fr(e,"LessOrEqual",{scalar:(r,i)=>`u32(${r}<=${i})`,vector:(r,i)=>`vec4<u32>(${r}<=${i})`},void 0,void 0,9)}}),Eg,Tg,X1,J1,b$=ae(()=>{"use strict";Ie(),Re(),mt(),Be(),Eg=(e,r)=>{if(!e||e.length<1)throw new Error("too few inputs");let i=0,s=e[i],o=s.dataType,u=s.dims.length;e.forEach((d,c)=>{if(c!==i){if(d.dataType!==o)throw new Error("input tensors should be one type");if(d.dims.length!==u)throw new Error("input tensors should have the same shape");d.dims.forEach((f,m)=>{if(m!==r&&f!==s.dims[m])throw new Error("non concat dimensions must match")})}})},Tg=(e,r,i,s,o=0)=>{let u=e.reduce((k,T)=>k+K.size(T.dims),0),d=new Array(e.length),c=new Array(e.length),f=new Array(e.length),m=0,y=o,w=[],$=[],S=[{type:12,data:u}];for(let k=0;k<e.length;++k)d[k]=m,c[k]=y,m+=K.size(e[k].dims),y+=e[k].dims[r],$.push(e[k].dims.length),f[k]=J(`input${k}`,s,$[k]),w.push("rank"),S.push({type:12,data:d[k]}),S.push({type:12,data:c[k]});for(let k=0;k<e.length;++k)S.push(...ke(e[k].dims));S.push(...ke(i));let b=_e("output",s,i.length),C=f.map((k,T)=>{let A=`
        let inputOffset = ${`global_idx - uniforms.inputOffset${T}`};
        var outputIndices = ${k.offsetToIndices("inputOffset")};
        ${b.indicesGet("outputIndices",r)} += uniforms.outputAxisOffset${T};
        ${b.setByIndices("outputIndices",k.getByOffset("inputOffset"))}`;return e.length===1?A:T===0?`if (inputIndex == 0u) {${A}}`:T===e.length-1?`else {${A}}`:`else if (inputIndex == ${T}u) {${A}}`}).join(`
`),N=k=>`

  ${(()=>{k.registerUniform("outputSize","u32");for(let T=0;T<e.length;T++)k.registerUniform(`inputOffset${T}`,"u32"),k.registerUniform(`outputAxisOffset${T}`,"u32");return k.declareVariables(...f,b)})()}

  fn calculateInputIndex(global_idx: u32) -> u32 {
    ${f.slice(1).map((T,A)=>`if (global_idx < uniforms.inputOffset${A+1}) {
      return ${A}u;
    }`).join(`
`)}
    return ${e.length-1}u;
  }

  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    let inputIndex = calculateInputIndex(global_idx);
    ${C}
  }`;return{name:"Concat",shaderCache:{hint:`${r}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:S}),getShaderSource:N}},X1=(e,r)=>{let i=e.inputs,s=i[0].dims,o=K.normalizeAxis(r.axis,s.length);Eg(i,o);let u=s.slice();u[o]=i.reduce((m,y)=>m+(y.dims.length>o?y.dims[o]:0),0);let d=i.filter(m=>K.size(m.dims)>0);if(d.length===0){e.output(0,u);return}let c=e.deviceLimits.maxStorageBuffersPerShaderStage-1,f=0;for(let m=0;m<d.length;m+=c){let y=d.slice(m,m+c);e.compute(Tg(y,o,u,i[0].dataType,f),{inputs:y,outputs:[0]}),f+=y.reduce((w,$)=>w+$.dims[o],0)}},J1=e=>Ze({axis:e.axis})}),Ji,ea,ta,uf,na=ae(()=>{"use strict";Ie(),Re(),Ji=(e,r,i="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${r}(0.0));`;case"Sigmoid":return`value = (${r}(1.0) / (${r}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${r}(${i}(uniforms.clip_min)), ${r}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${r}(0.0), min(${r}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${r}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},ea=(e,r)=>{e.activation==="Clip"?r.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?r.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&r.push({type:1,data:e.alpha})},ta=(e,r)=>{e.activation==="Clip"?r.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?r.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&r.push({name:"alpha",type:"f32"})},uf=e=>{let r=(e==null?void 0:e.activation)||"";if(r==="HardSigmoid"){let[i,s]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:r,alpha:i,beta:s}}else if(r==="Clip"){let[i,s]=(e==null?void 0:e.activation_params)||[Sv,kv];return{activation:r,clipMax:s,clipMin:i}}else if(r==="LeakyRelu"){let[i]=(e==null?void 0:e.activation_params)||[.01];return{activation:r,alpha:i}}return{activation:r}}}),Dt,ew,lf=ae(()=>{"use strict";Dt=(e,r)=>{switch(e){case 1:return r;case 2:return`vec2<${r}>`;case 3:return`vec3<${r}>`;case 4:return`vec4<${r}>`;default:throw new Error(`${e}-component is not supported.`)}},ew=e=>`
      ${e?"value = value + getBiasByOutputCoords(coords);":""}
      `}),tw,S$=ae(()=>{"use strict";tw=e=>`
fn getIndexFromCoords4D(coords : vec4<i32>, shape : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
      shape.y * shape.z * shape.w, shape.z * shape.w, shape.w, 1));
}
fn getOutputIndexFromCoords(coords : vec4<i32>) -> i32 {
  return dot(coords, vec4<i32>(
    i32(${e}.x), i32(${e}.y), i32(${e}.z), 1));
}
`}),jo,df,cf=ae(()=>{"use strict";Ie(),Re(),Be(),na(),jo=(e,r,i,s,o)=>{let u=s-i;return`
      ${Array.from({length:i}).map((d,c)=>`
      if (${xe(r.shape,c,r.rank)} != 1) {
        ${r.indicesSet(e,c,xe(o,c+u,s))}
      } else {
        ${r.indicesSet(e,c,0)}
      }`).join("")}
`},df=(e,r,i,s,o=!1,u)=>{let d=e[0].dims,c=e[1].dims,f=d[d.length-2],m=c[c.length-1],y=d[d.length-1],w=ht(m),$=ht(y),S=ht(f),b=K.size(i)/w/S,C=e.length>2,N=s?s.slice(0,-2):i.slice(0,-2),k=[K.size(N),f,m],T=[{type:12,data:b},{type:12,data:f},{type:12,data:m},{type:12,data:y}];ea(r,T),T.push(...ke(N,d,c)),C&&T.push(...ke(e[2].dims)),T.push(...ke(k));let A=D=>{let B=nf("batch_dims",e[0].dataType,N.length),P=J("a",e[0].dataType,d.length,$),V=J("b",e[1].dataType,c.length,w),I=_e("output",e[0].dataType,k.length,w),X=Ct(I.type.tensor),te=Ji(r,I.type.value,X),me=[P,V],de="";if(C){let he=o?w:1;me.push(J("bias",e[2].dataType,e[2].dims.length,he)),de=`${o?`value += bias[col / ${he}];`:`value += ${I.type.value}(bias[row + i]);`}`}let pe=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];ta(r,pe);let G=()=>{let he=`var a_data: ${P.type.value};`;for(let ye=0;ye<$;ye++)he+=`
              let b_data${ye} = b[(b_offset + (k + ${ye}) * uniforms.N + col) / ${w}];`;for(let ye=0;ye<S;ye++){he+=`a_data = a[(a_offset + (row + ${ye}) * uniforms.K + k) / ${$}];`;for(let ge=0;ge<$;ge++)he+=`
            values[${ye}] = fma(${V.type.value}(a_data${$===1?"":`[${ge}]`}), b_data${ge}, values[${ye}]);
`}return he};return`
  ${D.registerUniforms(pe).registerInternalVariables(B).declareVariables(...me,I)}
  ${D.mainStart()}
    ${D.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let col = (global_idx % (uniforms.N / ${w})) * ${w};
    var index1 = global_idx / (uniforms.N / ${w});
    let stride1 = uniforms.M / ${S};
    let row = (index1 % stride1) * ${S};
    let batch = index1 / stride1;

    ${i.length===2?"":`let batch_indices = ${B.offsetToIndices("batch")};`}

    var a_indices: ${P.type.indices};
    ${jo("a_indices",P,P.rank-2,B.rank,"batch_indices")}
    ${P.indicesSet("a_indices",P.rank-2,0)}
    ${P.indicesSet("a_indices",P.rank-1,0)}
    let a_offset = ${P.indicesToOffset("a_indices")};

    var b_indices: ${V.type.indices};
    ${jo("b_indices",V,V.rank-2,B.rank,"batch_indices")}
    ${V.indicesSet("b_indices",V.rank-2,0)}
    ${V.indicesSet("b_indices",V.rank-1,0)}
    let b_offset = ${V.indicesToOffset("b_indices")};
    var values: array<${I.type.value}, ${S}>;
    for (var k: u32 = 0u; k < uniforms.K; k = k + ${$}) {
      ${G()}
    }
    for (var i = 0u; i < ${S}u; i++) {
      var value = values[i];
      ${de}
      ${te}
      let cur_indices = ${I.type.indices}(batch, row + i, col);
      let offset = ${I.indicesToOffset("cur_indices")};
      ${I.setByOffset(`offset / ${w}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${r.activation};${w};${$};${S};${o}`,inputDependencies:C?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:u?u(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:T}),getShaderSource:A}}}),Cg,Ig,Ap,Fc,zg,Rp,Ng,Ml,pf=ae(()=>{"use strict";Ie(),Re(),Be(),na(),cf(),lf(),Cg=(e,r)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${r?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${r?", batchIndices":""});
        `,Ig=(e,r)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${r===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${r===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${r===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Ap=(e,r,i="f32",s,o=!1,u=32,d=!1,c=32)=>{let f=r[1]*e[1],m=r[0]*e[0],y=o?f:u,w=o?u:f,$=y/r[0],S=u/r[1];if(!((o&&$===4&&e[1]===4||!o&&($===3||$===4))&&y%r[0]===0&&u%r[1]===0&&e[0]===4))throw new Error(`If transposeA ${o} is true, innerElementSize ${$} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${$} must be 3 or 4.
  tileAWidth ${y} must be divisible by workgroupSize[0]${r[0]}. tileInner ${u} must be divisible by workgroupSize[1] ${r[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${$}<${i}>, ${y/$}>, ${w}>;
var<workgroup> mm_Bsub: array<array<vec4<${i}>, ${m/e[0]}>, ${u}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${$};
const tileInner = ${u};

@compute @workgroup_size(${r[0]}, ${r[1]}, ${r[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
  let localRow = i32(localId.y);
  let tileRow = localRow * rowPerThread;
  let tileCol = i32(localId.x);

  let globalRow =i32(globalId.y) * rowPerThread;
  let globalCol = i32(globalId.x);
  let batch = ${d?"0":"i32(globalId.z)"};
  ${s?`let batchIndices = ${s.offsetToIndices("u32(batch)")};`:""}
  let globalRowStart = i32(workgroupId.y) * ${f};

  let num_tiles = ${d?`${Math.ceil(c/u)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
  var kStart = ${d?`i32(globalId.z) * ${c}`:"0"};

  var acc: array<vec4<${i}>, rowPerThread>;

  // Loop over shared dimension.
  let tileRowB = localRow * ${S};
  for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let inputRow = tileRow + innerRow;
          let inputCol = tileCol;
          ${Cg(o,s)}
      }

      // Load one tile of B into local memory.
      for (var innerRow = 0; innerRow < ${S}; innerRow = innerRow + 1) {
          let inputRow = tileRowB + innerRow;
          let inputCol = tileCol;
          mm_Bsub[inputRow][inputCol] = mm_readB(batch, kStart + inputRow, globalCol${s?", batchIndices":""});
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      for (var k = 0; k < tileInner / innerElementSize; k = k + 1) {
          let BCached0 = mm_Bsub[k * innerElementSize][tileCol];
          let BCached1 = mm_Bsub[k * innerElementSize + 1][tileCol];
          let BCached2 = mm_Bsub[k * innerElementSize + 2][tileCol];
          ${$===3?"":"let BCached3 = mm_Bsub[k * innerElementSize + 3][tileCol];"}

          ${Ig(o,$)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},Fc=(e,r)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${r?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${r?", batchIndices":""});
            `,zg=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Rp=(e,r,i="f32",s,o=!1,u=32,d=!1,c=32,f=!1)=>{let m=e[1]*r[1],y=e[0]*r[0],w=o?m:u,$=o?u:m;if(!($%r[1]===0&&w%r[0]===0&&u%r[1]===0))throw new Error(`tileAHight ${$} must be divisible by workgroupSize[1]${r[1]}, tileAWidth ${w} must be divisible by workgroupSize[0]${r[0]}, tileInner ${u} must be divisible by workgroupSize[1]${r[1]}`);let S=$/r[1],b=w/r[0],C=u/r[1],N=f?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${m};
    let globalColStart = i32(workgroupId.x) * ${y};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${$}; inputRow = inputRow + ${r[1]}) {
        for (var inputCol = localCol; inputCol < ${w}; inputCol = inputCol + ${r[0]}) {
          ${Fc(o,s)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${u}; inputRow = inputRow + ${r[1]}) {
            for (var inputCol = localCol; inputCol < ${y}; inputCol = inputCol + ${r[0]}) {
          mm_Bsub[inputRow][inputCol] = mm_readB(batch,
            kStart + inputRow,
            globalColStart + inputCol${s?", batchIndices":""});
        }
      }
      kStart = kStart + tileInner;
      workgroupBarrier();

      // Compute acc values for a single thread.
      var BCached : array<${i}, colPerThread>;
      for (var k = 0; k < tileInner; k = k + 1) {
        for (var inner = 0; inner < colPerThread; inner = inner + 1) {
          BCached[inner] = mm_Bsub[k][localCol + inner * ${r[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${o?`mm_Asub[k][localRow + innerRow * ${r[1]}];`:`mm_Asub[localRow + innerRow * ${r[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${r[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${r[0]};
        mm_write(batch, gRow, gCol, acc[innerRow][innerCol]);
      }
    }
    `:`
let tileRow = i32(localId.y) * rowPerThread;
let tileCol = i32(localId.x) * colPerThread;

let globalRow = i32(globalId.y) * rowPerThread;
let globalCol = i32(globalId.x) * colPerThread;
let globalRowStart = i32(workgroupId.y) * ${m};

let tileRowA = i32(localId.y) * ${S};
let tileColA = i32(localId.x) * ${b};
let tileRowB = i32(localId.y) * ${C};
// Loop over shared dimension.
for (var t = 0; t < num_tiles; t = t + 1) {
  // Load one tile of A into local memory.
  for (var innerRow = 0; innerRow < ${S}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < ${b}; innerCol = innerCol + 1) {
      let inputRow = tileRowA + innerRow;
      let inputCol = tileColA + innerCol;
      ${Fc(o,s)}
    }
  }

  // Load one tile of B into local memory.
  for (var innerRow = 0; innerRow < ${C}; innerRow = innerRow + 1) {
    for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
      let inputRow = tileRowB + innerRow;
      let inputCol = tileCol + innerCol;
      mm_Bsub[inputRow][inputCol] = mm_readB(batch,
        kStart + inputRow,
        globalCol + innerCol${s?", batchIndices":""});
    }
  }
  kStart = kStart + tileInner;
  workgroupBarrier();

  // Compute acc values for a single thread.
  var BCached : array<${i}, colPerThread>;
  for (var k = 0; k < tileInner; k = k + 1) {
    for (var inner = 0; inner < colPerThread; inner = inner + 1) {
      BCached[inner] = mm_Bsub[k][tileCol + inner];
    }

    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      ${zg(o)}
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        acc[innerRow][innerCol] = acc[innerRow][innerCol] + ACached * BCached[innerCol];
      }
    }
  }

  workgroupBarrier();
}

for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
  for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
    mm_write(batch, globalRow + innerRow, globalCol + innerCol,
        acc[innerRow][innerCol]);
  }
}
`;return`
  var<workgroup> mm_Asub : array<array<${i}, ${w}>, ${$}>;
  var<workgroup> mm_Bsub : array<array<${i}, ${y}>, ${u}>;
  const rowPerThread = ${e[1]};
  const colPerThread = ${e[0]};
  const tileInner = ${u};

@compute @workgroup_size(${r[0]}, ${r[1]}, ${r[2]})
fn main(@builtin(local_invocation_id) localId : vec3<u32>,
        @builtin(global_invocation_id) globalId : vec3<u32>,
        @builtin(workgroup_id) workgroupId : vec3<u32>) {
    let batch = ${d?"0":"i32(globalId.z)"};
    ${s?`let batchIndices = ${s.offsetToIndices("u32(batch)")};`:""}
    let num_tiles = ${d?`${Math.ceil(c/u)}`:"(uniforms.dim_inner - 1) / tileInner + 1"};
    var kStart = ${d?`i32(globalId.z) * ${c}`:"0"};

    var acc : array<array<${i}, colPerThread>, rowPerThread>;
    ${N}
  }
`},Ng=(e,r,i,s,o=!1)=>{let[u,d,c,f]=s,m=Ct(s[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${u.type.indices}) -> ${Dt(e,m)} {
      var value = ${Dt(e,m)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_a_outer && col < uniforms.dim_inner)
      {
        var aIndices: ${d.type.indices};
        ${jo("aIndices",d,d.rank-2,u.rank,"batchIndices")}
        ${d.indicesSet("aIndices",d.rank-2,"u32(row)")}
        ${d.indicesSet("aIndices",d.rank-1,"u32(colIn)")}
        value = ${d.getByIndices("aIndices")};
      }
      return value;
    }

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${u.type.indices}) -> ${Dt(e,m)} {
      var value = ${Dt(e,m)}(0.0);
      let col = colIn * ${e};
      if(row < uniforms.dim_inner && col < uniforms.dim_b_outer)
      {
        var bIndices: ${c.type.indices};
        ${jo("bIndices",c,c.rank-2,u.rank,"batchIndices")}
        ${c.indicesSet("bIndices",c.rank-2,"u32(row)")}
        ${c.indicesSet("bIndices",c.rank-1,"u32(colIn)")}
        value = ${c.getByIndices("bIndices")};
      }
      return value;
    }

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Dt(e,m)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${r?`value = value + ${o?"bias[colIn]":`${Dt(e,m)}(bias[row])`};`:""}
        ${i}
        ${f.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Ml=(e,r,i,s,o=!1,u)=>{let d=e[0].dims,c=e[1].dims,f=d.slice(0,-2),m=c.slice(0,-2),y=s?s.slice(0,-2):i.slice(0,-2),w=K.size(y),$=d[d.length-2],S=d[d.length-1],b=c[c.length-1],C=S%4===0&&b%4===0,N=$<=8?[4,1,1]:[4,4,1],k=[8,8,1],T=[Math.ceil(b/k[0]/N[0]),Math.ceil($/k[1]/N[1]),Math.ceil(w/k[2]/N[2])],A=C?4:1,D=[...f,$,S/A],B=D.length,P=[...m,S,b/A],V=P.length,I=[w,$,b/A],X=[{type:6,data:$},{type:6,data:b},{type:6,data:S}];ea(r,X),X.push(...ke(y,D,P));let te=["rank","rank"],me=e.length>2;me&&(X.push(...ke(e[2].dims)),te.push("rank")),X.push(...ke(I));let de=pe=>{let G=y.length,he=nf("batchDims",e[0].dataType,G,1),ye=Ct(e[0].dataType),ge=J("a",e[0].dataType,B,A),ee=J("b",e[1].dataType,V,A),re=_e("result",e[0].dataType,I.length,A),ue=[ge,ee];if(me){let we=o?A:1;ue.push(J("bias",e[2].dataType,e[2].dims.length,we))}let O=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];ta(r,O);let F=Ct(re.type.tensor),ne=Ji(r,re.type.value,F),Q=Ng(A,me,ne,[he,ge,ee,re],o);return`
  ${pe.registerUniforms(O).registerInternalVariables(he).declareVariables(...ue,re)}
  ${Q}
  ${C?Ap(N,k,ye,he):Rp(N,k,ye,he)}
                   `};return{name:"MatMul",shaderCache:{hint:`${N};${r.activation};${C};${o}`,inputDependencies:te},getRunData:()=>({outputs:[{dims:u?u(i):i,dataType:e[0].dataType}],dispatchGroup:{x:T[0],y:T[1],z:T[2]},programUniforms:X}),getShaderSource:de}}}),Og,rw,k$=ae(()=>{"use strict";Ie(),Tn(),Be(),na(),lf(),S$(),pf(),Og=(e,r,i,s,o=!1,u,d=4,c=4,f=4,m="f32")=>{let y=X=>{switch(X){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${m}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${X} is not supported.`)}},w=X=>{switch(X){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${X} is not supported.`)}},$=e?`
    let coord = vec4<i32>(batch, xRow, xCol, xCh);
    `:`
    let coord = vec4<i32>(batch, xCh, xRow, xCol);
    `,S=e?`
    let coords = vec4<i32>(
      batch,
      row / outWidth,
      row % outWidth,
      col);
    `:`
    let coords = vec4<i32>(
      batch,
      row,
      col / outWidth,
      col % outWidth);
    `,b=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",C=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",N=e?"row":"col",k=e?"col":"row",T=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${N} / outWidth;
    let outCol = ${N} % outWidth;

    let WRow = ${k} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${k} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${k} % inChannels;
    var resData = ${Dt(d,m)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${b} && xCol >= 0 && xCol < ${C}) {
      ${$}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${y(d)}
    }
    return resData;`,A=e?r&&s?`
    let col = colIn * ${d};
    ${T}`:`
    let col = colIn * ${d};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${T}
    }
    return ${Dt(d,m)}(0.0);`:s&&i?`
    let col = colIn * ${d};
    ${T}`:`
    let col = colIn * ${d};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${T}
    }
    return ${Dt(d,m)}(0.0);`,D=e?s&&i?w(c):`
    let col = colIn * ${c};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w(c)}
    }
    return ${Dt(c,m)}(0.0);`:`
    let col = colIn * ${c};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${w(c)}
    }
    return ${Dt(c,m)}(0.0);`,B=Dt(f,m),P=Dt(e?d:c,m),V=Dt(e?c:d,m),I=Ji(u,B,m);return`
    fn mm_readA(batch: i32, row : i32, colIn : i32) -> ${P} {
      ${e?A:D}
    }

    fn mm_readB(batch: i32, row : i32, colIn : i32) -> ${V} {
      ${e?D:A}
    }

    fn mm_write(batch: i32, row : i32, colIn : i32, valueIn : ${B}) {
      let col = colIn * ${f};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer)
      {
      var value = valueIn;
      let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
      ${S}
      ${ew(o)}
      ${I}
      setOutputAtCoords(coords[0], coords[1], coords[2], coords[3], value);
      }
    }`},rw=(e,r,i,s,o,u,d,c,f)=>{let m=r.format==="NHWC",y=m?e[0].dims[3]:e[0].dims[1],w=i[0],$=m?i[2]:i[3],S=m?i[1]:i[2],b=m?i[3]:i[1],C=m&&(y%4===0||y%3===0)&&b%4===0,N=m?b:$*S,k=m?$*S:b,T=[8,8,1],A=s<=8?[4,1,1]:[4,4,1],D=[Math.ceil(N/T[0]/A[0]),Math.ceil(k/T[1]/A[1]),Math.ceil(w/T[2]/A[2])];He("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${D}`);let B=C?m&&y%4!==0?3:4:1,P=T[1]*A[1],V=T[0]*A[0],I=Math.max(T[0]*B,T[1]),X=s%P===0,te=o%V===0,me=u%I===0,de=C?[B,4,4]:[1,1,1],pe=[{type:6,data:s},{type:6,data:o},{type:6,data:u},{type:6,data:[r.pads[0],r.pads[1]]},{type:6,data:r.strides},{type:6,data:r.dilations}];ea(r,pe),pe.push(...ke(e[0].dims,e[1].dims));let G=["rank","rank"];d&&(pe.push(...ke(e[2].dims)),G.push("rank")),pe.push(...ke(i));let he=ye=>{let ge=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];ta(r,ge);let ee=C?4:1,re=Ct(e[0].dataType),ue=`
      fn setOutputAtIndex(flatIndex : i32, value : ${C?`vec4<${re}>`:re}) {
        result[flatIndex] = ${C?`vec4<${re}>`:re}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${C?`vec4<${re}>`:re}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${C?"/ 4":""}, value);
      }`,O=J("x",e[0].dataType,e[0].dims.length,B===3?1:B),F=J("w",e[1].dataType,e[1].dims.length,ee),ne=[O,F],Q=_e("result",e[0].dataType,i.length,ee);if(d){let we=J("bias",e[2].dataType,e[2].dims.length,ee);ne.push(we),ue+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${C?`vec4<${re}>`:re} {
          return bias[coords.${m?"w":"y"}${C?"/ 4":""}];
        }`}return`
        ${tw("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${ye.registerUniforms(ge).declareVariables(...ne,Q)}
        ${ue}
        ${Og(m,X,te,me,d,r,de[0],de[1],de[2],re)}
        ${C?Ap(A,T,re,void 0,!m,I):Rp(A,T,re,void 0,!m,I,!1,void 0,c)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${r.cacheKey};${B};${C};${X};${te};${me};${P};${V};${I}`,inputDependencies:G},getRunData:()=>({outputs:[{dims:f?f(i):i,dataType:e[0].dataType}],dispatchGroup:{x:D[0],y:D[1],z:D[2]},programUniforms:pe}),getShaderSource:he}}}),Ag,qc,zo,Rg,Hc,Dg,nw,iw,E$=ae(()=>{"use strict";Ie(),Tn(),Re(),Be(),na(),lf(),Ag=e=>{let r=1;for(let i=0;i<e.length;i++)r*=e[i];return r},qc=e=>typeof e=="number"?[e,e,e]:e,zo=(e,r)=>r<=1?e:e+(e-1)*(r-1),Rg=(e,r,i,s=1)=>{let o=zo(r,s);return Math.floor((e[0]*(i-1)-i+o)/2)},Hc=(e,r,i,s,o)=>{o==null&&(o=Rg(e,r[0],s[0]));let u=[0,0,0,i];for(let d=0;d<3;d++)e[d]+2*o>=r[d]&&(u[d]=Math.trunc((e[d]-r[d]+2*o)/s[d]+1));return u},Dg=(e,r,i,s,o,u,d,c,f,m)=>{let y,w,$,S;if(e==="VALID"&&(e=0),typeof e=="number"){y={top:e,bottom:e,left:e,right:e,front:e,back:e};let b=Hc([r,i,s,1],[c,f,m],1,[o,u,d],e);w=b[0],$=b[1],S=b[2]}else if(Array.isArray(e)){if(!e.every((C,N,k)=>C===k[0]))throw Error(`Unsupported padding parameter: ${e}`);y={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let b=Hc([r,i,s,1],[c,f,m],1,[o,u,d],e[0]);w=b[0],$=b[1],S=b[2]}else if(e==="SAME_UPPER"){w=Math.ceil(r/o),$=Math.ceil(i/u),S=Math.ceil(s/d);let b=(w-1)*o+c-r,C=($-1)*u+f-i,N=(S-1)*d+m-s,k=Math.floor(b/2),T=b-k,A=Math.floor(C/2),D=C-A,B=Math.floor(N/2),P=N-B;y={top:A,bottom:D,left:B,right:P,front:k,back:T}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:y,outDepth:w,outHeight:$,outWidth:S}},nw=(e,r,i,s,o,u=!1,d="channelsLast")=>{let c,f,m,y,w;if(d==="channelsLast")[c,f,m,y,w]=e;else if(d==="channelsFirst")[c,w,f,m,y]=e;else throw new Error(`Unknown dataFormat ${d}`);let[$,,S,b,C]=r,[N,k,T]=qc(i),[A,D,B]=qc(s),P=zo(S,A),V=zo(b,D),I=zo(C,B),{padInfo:X,outDepth:te,outHeight:me,outWidth:de}=Dg(o,f,m,y,N,k,T,P,V,I),pe=u?$*w:$,G=[0,0,0,0,0];return d==="channelsFirst"?G=[c,pe,te,me,de]:d==="channelsLast"&&(G=[c,te,me,de,pe]),{batchSize:c,dataFormat:d,inDepth:f,inHeight:m,inWidth:y,inChannels:w,outDepth:te,outHeight:me,outWidth:de,outChannels:pe,padInfo:X,strideDepth:N,strideHeight:k,strideWidth:T,filterDepth:S,filterHeight:b,filterWidth:C,effectiveFilterDepth:P,effectiveFilterHeight:V,effectiveFilterWidth:I,dilationDepth:A,dilationHeight:D,dilationWidth:B,inShape:e,outShape:G,filterShape:r}},iw=(e,r,i,s,o,u)=>{let d=u==="channelsLast",c=d?e[0].dims[3]:e[0].dims[1],f=!1,m=[64,1,1],y={x:i.map((T,A)=>A)},w=[Math.ceil(Ag(y.x.map(T=>i[T]))/m[0]),1,1];He("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${w}`);let $=f?d&&c%4!==0?3:4:1,S=K.size(i),b=[{type:12,data:S},{type:12,data:s},{type:12,data:o},{type:12,data:r.strides},{type:12,data:r.dilations}];ea(r,b),b.push(...ke(e[0].dims,e[1].dims));let C=["rank","rank"],N=e.length===3;N&&(b.push(...ke(e[2].dims)),C.push("rank")),b.push(...ke(i));let k=T=>{let A=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:s.length},{name:"pads",type:"u32",length:o.length},{name:"strides",type:"u32",length:r.strides.length},{name:"dilations",type:"u32",length:r.dilations.length}];ta(r,A);let D=f?4:1,B=Ct(e[0].dataType),P=J("x",e[0].dataType,e[0].dims.length,$===3?1:$),V=J("W",e[1].dataType,e[1].dims.length,D),I=[P,V],X=_e("result",e[0].dataType,i.length,D),te="";if(N){let pe=J("bias",e[2].dataType,e[2].dims.length,D);I.push(pe),te+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${f?`vec4<${B}>`:B} {
          return bias[${d?xe("coords",4,5):xe("coords",1,5)}${f?"/ 4":""}];
        }`}let me=Dt($,B),de=Ji(r,me,B);return`
            ${te}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${B} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${P.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${B} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${V.getByIndices("aIndices")};
            }
          ${T.registerUniforms(A).declareVariables(...I,X)}
          ${T.mainStart()}
          ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${X.offsetToIndices("global_idx")};
              let batch = ${xe("coords",0,P.rank)};
              let d2 = ${d?xe("coords",P.rank-1,P.rank):xe("coords",1,P.rank)};
              let xFRCCorner = vec3<u32>(${d?xe("coords",1,P.rank):xe("coords",2,P.rank)},
              ${d?xe("coords",2,P.rank):xe("coords",3,P.rank)},
              ${d?xe("coords",3,P.rank):xe("coords",4,P.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${d?xe("uniforms.x_shape",1,P.rank):xe("uniforms.x_shape",2,P.rank)};
              let xShapeZ = ${d?xe("uniforms.x_shape",2,P.rank):xe("uniforms.x_shape",3,P.rank)};
              let xShapeW = ${d?xe("uniforms.x_shape",3,P.rank):xe("uniforms.x_shape",4,P.rank)};
              let xShapeU = ${d?xe("uniforms.x_shape",4,P.rank):xe("uniforms.x_shape",1,P.rank)};
              let inputDepthNearestVec4 = (xShapeU / 4) * 4;
              let inputDepthVec4Remainder = xShapeU % 4;

              var value = ${B}(0);
              for (var wF = 0u; wF < uniforms.filter_dims[0]; wF++) {
                let xF = xFCorner + wF * uniforms.dilations[0];
                if (xF < 0 || xF >= xShapeY) {
                  continue;
                }

                for (var wR = 0u; wR < uniforms.filter_dims[1]; wR++) {
                  let xR = xRCorner + wR * uniforms.dilations[1];
                  if (xR < 0 || xR >= xShapeZ) {
                    continue;
                  }

                  for (var wC = 0u; wC < uniforms.filter_dims[2]; wC++) {
                    let xC = xCCorner + wC * uniforms.dilations[2];
                    if (xC < 0 || xC >= xShapeW) {
                      continue;
                    }

                    for (var d1 = 0u; d1 < inputDepthNearestVec4; d1 += 4) {
                      ${d?`let xValues = vec4<${B}>(
                               getX(batch, xF, xR, xC, d1),
                               getX(batch, xF, xR, xC, d1 + 1),
                               getX(batch, xF, xR, xC, d1 + 2),
                               getX(batch, xF, xR, xC, d1 + 3));
                            `:`let xValues = vec4<${B}>(
                               getX(batch, d1, xF, xR, xC),
                               getX(batch, d1 + 1, xF, xR, xC),
                               getX(batch, d1 + 2, xF, xR, xC),
                               getX(batch, d1 + 3, xF, xR, xC));
                            `}
                            let wValues = vec4<${B}>(
                              getW(d2, d1, wF, wR, wC),
                              getW(d2, d1 + 1, wF, wR, wC),
                              getW(d2, d1 + 2, wF, wR, wC),
                              getW(d2, d1 + 3, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                    if (inputDepthVec4Remainder == 1) {
                        ${d?`value += getX(batch, xF, xR, xC, inputDepthNearestVec4)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`:`value += getX(batch, inputDepthNearestVec4, xF, xR, xC)
                          * getW(d2, inputDepthNearestVec4, wF, wR, wC);`}
                    } else if (inputDepthVec4Remainder == 2) {
                      ${d?`let xValues = vec2<${B}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1));
                      `:`let xValues = vec2<${B}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC));
                    `}
                    let wValues = vec2<${B}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC));
                      value += dot(xValues, wValues);
                    } else if (inputDepthVec4Remainder == 3) {
                      ${d?`let xValues = vec3<${B}>(
                        getX(batch, xF, xR, xC, inputDepthNearestVec4),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 1),
                        getX(batch, xF, xR, xC, inputDepthNearestVec4 + 2));
                      `:`let xValues = vec3<${B}>(
                        getX(batch, inputDepthNearestVec4, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 1, xF, xR, xC),
                        getX(batch, inputDepthNearestVec4 + 2, xF, xR, xC));
                    `}
                    let wValues = vec3<${B}>(
                      getW(d2, inputDepthNearestVec4, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 1, wF, wR, wC),
                      getW(d2, inputDepthNearestVec4 + 2, wF, wR, wC));
                      value += dot(xValues, wValues);
                    }
                  }
                }
              }
              ${N?"value = value + getBiasByOutputCoords(coords)":""};
              ${de}
              result[global_idx] = ${B}(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${r.cacheKey};${d};${$};${N}`,inputDependencies:C},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:b}),getShaderSource:k}}}),aw,sw,T$=ae(()=>{"use strict";Ie(),Re(),Be(),na(),aw=(e,r,i,s)=>{let o=e.length>2,u=o?"value += b[output_channel];":"",d=e[0].dims,c=e[1].dims,f=r.format==="NHWC",m=f?i[3]:i[1],y=m/r.group,w=f&&y>=4?ht(m):1,$=K.size(i)/w,S=[{type:12,data:$},{type:12,data:r.dilations},{type:12,data:[r.strides[0],r.strides[1]]},{type:12,data:[r.pads[0],r.pads[1]]},{type:12,data:y}];ea(r,S),S.push(...ke(d,[c[0],c[1],c[2],c[3]/w]));let b=o?["rank","rank","rank"]:["rank","rank"];S.push(...ke([i[0],i[1],i[2],i[3]/w]));let C=N=>{let k=_e("output",e[0].dataType,i.length,w),T=Ct(k.type.tensor),A=Ji(r,k.type.value,T),D=J("x",e[0].dataType,d.length),B=J("w",e[1].dataType,c.length,w),P=[D,B];o&&P.push(J("b",e[2].dataType,e[2].dims,w));let V=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:r.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];ta(r,V);let I=f?`
      for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[0]; wHeight++) {
        let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

        if (xHeight < 0u || xHeight >= uniforms.x_shape[1]) {
          continue;
        }

        for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[1]; wWidth++) {
          let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
          if (xWidth < 0u || xWidth >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[2]; wInChannel++) {
            let input_channel = in_channel_offset + wInChannel;
            let xVal = ${D.get("batch","xHeight","xWidth","input_channel")};
            let wVal = ${B.get("wHeight","wWidth","wInChannel","output_channel")};
            value += xVal * wVal;
          }
        }
      }
      `:`
      for (var wInChannel: u32 = 0u; wInChannel < uniforms.w_shape[1]; wInChannel++) {
        let input_channel = in_channel_offset + wInChannel;
        for (var wHeight: u32 = 0u; wHeight < uniforms.w_shape[2]; wHeight++) {
          let xHeight = xRCCorner.x + wHeight * uniforms.dilations[0];

          if (xHeight < 0u || xHeight >= uniforms.x_shape[2]) {
            continue;
          }

          for (var wWidth: u32 = 0u; wWidth < uniforms.w_shape[3]; wWidth++) {
            let xWidth = xRCCorner.y + wWidth * uniforms.dilations[1];
            if (xWidth < 0u || xWidth >= uniforms.x_shape[3]) {
              continue;
            }

            let xVal = ${D.get("batch","input_channel","xHeight","xWidth")};
            let wVal = ${B.get("output_channel","wInChannel","wHeight","wWidth")};
            value += xVal * wVal;
          }
        }
      }
      `;return`
  ${N.registerUniforms(V).declareVariables(...P,k)}

  ${N.mainStart()}
    ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let outputIndices = ${k.offsetToIndices("global_idx")};
    let batch: u32 = outputIndices[0];
    let output_channel: u32 = outputIndices[${f?3:1}];
    let xRCCorner: vec2<u32> = vec2<u32>(outputIndices[${f?1:2}], outputIndices[${f?2:3}]) * uniforms.strides - uniforms.pads;
    let group_id: u32 = output_channel * ${w} / uniforms.output_channels_per_group;
    var in_channel_offset = group_id * uniforms.w_shape[${f?2:1}];

    var value: ${k.type.value} = ${k.type.value}(0);
    ${I}
    ${u}
    ${A}
    ${k.setByOffset("global_idx","value")}
  }`};return{name:"GroupedConv",shaderCache:{hint:`${r.cacheKey}_${w}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:S}),getShaderSource:C}},sw=(e,r,i,s)=>{let o=e.length>2,u=ht(i[3]),d=ht(i[2]),c=K.size(i)/u/d,f=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/u],m=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/u],y=[i[0],i[1],i[2],i[3]/u],w=[{type:12,data:c},{type:6,data:[r.strides[0],r.strides[1]]},{type:6,data:[r.pads[0],r.pads[1]]}];ea(r,w),w.push(...ke(f,m,y));let $=(d-1)*r.strides[1]+m[1],S=b=>{let C=_e("output",e[0].dataType,y.length,u),N=Ct(C.type.tensor),k=Ji(r,C.type.value,N),T=J("x",e[0].dataType,f.length,u),A=J("w",e[1].dataType,m.length,u),D=[T,A];o&&D.push(J("b",e[2].dataType,e[2].dims,u));let B=o?"value += b[output_channel];":"",P=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return ta(r,P),`
  ${b.registerUniforms(P).declareVariables(...D,C)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let width0 = uniforms.output_shape[3];
    let output_channel = global_idx % width0;
    var index1 = global_idx / width0;
    let width1 = uniforms.output_shape[2] / ${d}u;
    let col = (index1 % width1) * ${d}u;
    index1 = index1 / width1;
    let row = index1 % uniforms.output_shape[1];
    let batch = index1 / uniforms.output_shape[1];

    let x_corner = vec2<i32>(i32(row), i32(col)) * uniforms.strides - uniforms.pads;

    var x_vals: array<${T.type.value}, ${$}>;
    var values: array<${C.type.value}, ${d}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${m[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${$}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${T.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${T.type.value}(0);
          }
        }
        for (var w_width: u32 = 0u; w_width < ${m[1]}; w_width++) {
          let w_val = ${A.get("w_height","w_width","0","output_channel")};
          for (var i = 0u; i < ${d}u; i++) {
            values[i] = fma(x_vals[i * u32(uniforms.strides[1]) + w_width], w_val, values[i]);
          }
        }
      }
    }

    for (var i = 0u; i < ${d}u; i++) {
      var value = values[i];
      ${B}
      ${k}
      ${C.set("batch","row","col + i","output_channel","value")};
    }
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${r.cacheKey};${u};${d};${$};${m[0]};${m[1]}`,inputDependencies:o?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:w}),getShaderSource:S}}}),Mg,$l,Bg,xl,Dp,Gc,Pg,Lg,Mp,C$=ae(()=>{"use strict";Re(),k$(),E$(),pf(),T$(),na(),cf(),hi(),Mg=(e,r,i,s,o,u)=>{let d=e[0],c=e.slice(u?1:2,u?3:4),f=c.length,m=r[0],y=r.slice(2).map(($,S)=>$+($-1)*(i[S]-1)),w=c.map(($,S)=>$+s[S]+s[S+f]).map(($,S)=>Math.floor(($-y[S]+o[S])/o[S]));return w.splice(0,0,d),w.splice(u?3:1,0,m),w},$l=[2,3,1,0],Bg=(e,r)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[r.format==="NHWC"?e[0].dims.length-1:1],s=e[1].dims[1]*r.group;if(i!==s)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let o=e[0].dims.length-2;if(r.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(r.strides.length!==o)throw new Error(`strides should be ${o}D`);if(r.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(r.kernelShape.length!==0&&r.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},xl=(e,r)=>{let i=e.kernelShape.slice();i.length<r[1].dims.length-2&&i.push(...Array(r[1].dims.length-2-i.length).fill(0));for(let u=2;u<r[1].dims.length;++u)i[u-2]===0&&(i[u-2]=r[1].dims[u]);let s=e.pads.slice();Rl.adjustPadsBasedOnAutoPad(r[0].dims,e.strides,e.dilations,i,s,e.format==="NHWC",e.autoPad);let o=Object.assign({},e);return Object.assign(o,{kernelShape:i,pads:s}),o},Dp=e=>{let r=uf(e),i=e.format,s=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],o=e.dilations,u=e.group,d=e.kernel_shape,c=e.pads,f=e.strides,m=e.w_is_const();return{autoPad:s,format:i,dilations:o,group:u,kernelShape:d,pads:c,strides:f,wIsConst:m,...r,cacheKey:`${e.format};${r.activation};`}},Gc=(e,r,i,s)=>{let o=i.format==="NHWC",u=Mg(r[0].dims,r[1].dims,i.dilations,i.pads,i.strides,o);if(i.group!==1){let P=[r[0]];if(o){let V=e.kernelCustomData.wT??e.compute(gr(r[1],$l),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=V),P.push(V)}else P.push(r[1]);r.length===3&&P.push(r[2]),!e.adapterInfo.isArchitecture("ampere")&&o&&r[1].dims[0]===i.group&&r[1].dims[1]===1&&i.dilations[0]===1&&i.dilations[1]===1?e.compute(sw(P,i,u,s),{inputs:P}):e.compute(aw(P,i,u,s),{inputs:P});return}let d=r.length===3,c=r[0].dims[o?1:2],f=r[0].dims[o?2:3],m=r[0].dims[o?3:1],y=r[1].dims[2],w=r[1].dims[3],$=u[o?1:2],S=u[o?2:3],b=u[o?3:1],C=o&&y===c&&w===f&&i.pads[0]===0&&i.pads[1]===0;if(C||y===1&&w===1&&i.dilations[0]===1&&i.dilations[1]===1&&i.strides[0]===1&&i.strides[1]===1&&i.pads[0]===0&&i.pads[1]===0){let P=u[0],V,I,X,te=[];if(o){let pe=e.kernelCustomData.wT??e.compute(gr(r[1],$l),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=pe),C){let G=c*f*m;V=r[0].reshape([1,P,G]),I=pe.reshape([1,G,b]),X=[1,P,b]}else V=r[0].reshape([P,c*f,m]),I=pe.reshape([1,m,b]),X=[P,$*S,b];te.push(V),te.push(I)}else V=r[0].reshape([P,m,c*f]),I=r[1].reshape([1,b,m]),X=[P,b,$*S],te.push(I),te.push(V);d&&te.push(r[2]);let me=X[2],de=te[0].dims[te[0].dims.length-1];me<8&&de<8?e.compute(df(te,i,u,X,o,s),{inputs:te}):e.compute(Ml(te,i,u,X,o,s),{inputs:te});return}let N=!0,k=e.kernelCustomData.wT??e.compute(gr(r[1],$l),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=k);let T=[r[0],k];d&&T.push(r[2]);let A=o?$*S:b,D=o?b:$*S,B=y*w*m;e.compute(rw(T,i,u,A,D,B,d,N,s),{inputs:T})},Pg=(e,r)=>{let i=r.format==="NHWC",s=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&s.push(e.inputs[2]);let o=[0,r.pads[0],0,r.pads[1]],u=[1].concat(r.strides),d=[1].concat(r.dilations),c=[1].concat(r.kernelShape),f=xl({...r,pads:o,strides:u,dilations:d,kernelShape:c},s);Gc(e,s,f,m=>i?[m[0],m[2],m[3]]:[m[0],m[1],m[3]])},Lg=(e,r,i)=>{let s=i.format==="NHWC"?"channelsLast":"channelsFirst",o=xl(i,r),u=i.autoPad==="NOTSET"?i.pads:i.autoPad,d=nw(r[0].dims,r[1].dims,i.strides,i.dilations,u,!1,s);e.compute(iw(r,o,d.outShape,[d.filterDepth,d.filterHeight,d.filterWidth],[d.padInfo.front,d.padInfo.top,d.padInfo.left],s))},Mp=(e,r)=>{if(Bg(e.inputs,r),e.inputs[0].dims.length===3)Pg(e,r);else if(e.inputs[0].dims.length===5)Lg(e,e.inputs,r);else{let i=xl(r,e.inputs);Gc(e,e.inputs,i)}}}),ow,I$=ae(()=>{"use strict";Ie(),Tn(),Re(),Be(),ow=(e,r,i)=>{let s=e.length>2,o=r.outputShape,u=r.format==="NHWC",d=r.group,c=e[1].dims,f=c[2]/d,m=c[3],y=u?ht(f):1,w=u&&m===1&&f>=4,$=w?Math.floor(f/4)*4:Math.floor(f/y)*y,S=f-$,b=u?ht(m):1,C=u?m===1?y:b:1,N=K.size(o)/b,k=[Math.ceil(N/64),1,1];He("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${k}`);let T=["rank","rank"],A=[r.strides[0],r.strides[1]],D=[r.kernelShape[u?1:2],r.kernelShape[u?2:3]],B=[r.dilations[0],r.dilations[1]],P=[D[0]+(r.dilations[0]<=1?0:(r.kernelShape[u?1:2]-1)*(r.dilations[0]-1)),D[1]+(r.dilations[1]<=1?0:(r.kernelShape[u?2:3]-1)*(r.dilations[1]-1))],V=[P[0]-1-Math.floor((r.pads[0]+r.pads[2])/2),P[1]-1-Math.floor((r.pads[1]+r.pads[3])/2)],I=[{type:12,data:N},{type:12,data:A},{type:12,data:D},{type:12,data:B},{type:12,data:P},{type:6,data:V},{type:12,data:$},{type:12,data:f},{type:12,data:m},...ke(e[0].dims,e[1].dims)];s&&(I.push(...ke(e[2].dims)),T.push("rank")),I.push(...ke(o));let X=te=>{let me=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:A.length},{name:"filter_dims",type:"u32",length:D.length},{name:"dilations",type:"u32",length:D.length},{name:"effective_filter_dims",type:"u32",length:P.length},{name:"pads",type:"i32",length:V.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],de=Ct(e[0].dataType),pe=u?1:2,G=u?2:3,he=u?3:1,ye=J("W",e[1].dataType,e[1].dims.length,C),ge=J("Dy",e[0].dataType,e[0].dims.length,y),ee=[ge,ye];s&&ee.push(J("bias",e[2].dataType,[o[he]].length,b));let re=_e("result",e[0].dataType,o.length,b),ue=()=>{let ne="";if(w)y===4?ne+=`
        let xValue = ${ge.getByOffset("x_offset")};
        let wValue = ${ye.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:y===2?ne+=`
          dotProd = dotProd + dot(vec4<${de}>(${ge.getByOffset("x_offset")}, ${ge.getByOffset("x_offset + 1u")}), vec4<${de}>(${ye.getByOffset("w_offset")}, ${ye.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:y===1&&(ne+=`
          dotProd = dotProd + dot(vec4<${de}>(${ge.getByOffset("x_offset")}, ${ge.getByOffset("x_offset + 1u")}, ${ge.getByOffset("x_offset + 2u")}, ${ge.getByOffset("x_offset + 3u")}), vec4<${de}>(${ye.getByOffset("w_offset")}, ${ye.getByOffset("w_offset + 1u")}, ${ye.getByOffset("w_offset + 2u")}, ${ye.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(ne+=`
                  let xValue = ${u?ge.getByOffset(`${ge.indicesToOffset(`${ge.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${y}`):ge.get("batch","inputChannel","idyR","idyC")};
        `,y===1)ne+=`
          let w_offset = ${ye.indicesToOffset(`${ye.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${ye.getByOffset(`w_offset / ${C}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let Q=0;Q<y;Q++)ne+=`
            let wValue${Q} = ${ye.getByOffset(`${ye.indicesToOffset(`${ye.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${Q}, wOutChannel)`)} / ${C}`)};
            dotProd = dotProd + xValue[${Q}] * wValue${Q};`;return ne},O=()=>{if(S===0)return"";if(!w)throw new Error(`packInputAs4 ${w} is not true.`);let ne="";if(y===1){ne+="dotProd = dotProd";for(let Q=0;Q<S;Q++)ne+=`
            + ${ge.getByOffset(`x_offset + ${Q}`)} * ${ye.getByOffset(`w_offset + ${Q}`)}`;ne+=";"}else if(y===2){if(S!==2)throw new Error(`Invalid inputChannelsRemainder ${S}.`);ne+=`
          let xValue = ${ge.getByOffset("x_offset")};
          let wValue = ${ye.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return ne},F=`
            let outputIndices = ${re.offsetToIndices(`global_idx * ${b}`)};
            let batch = ${re.indicesGet("outputIndices",0)};
            let d1 = ${re.indicesGet("outputIndices",he)};
            let r = ${re.indicesGet("outputIndices",pe)};
            let c = ${re.indicesGet("outputIndices",G)};
            let dyCorner = vec2<i32>(i32(r), i32(c)) - uniforms.pads;
            let dyRCorner = dyCorner.x;
            let dyCCorner = dyCorner.y;
            let groupId = d1 / uniforms.output_channels_per_group;
            let wOutChannel = d1 - groupId * uniforms.output_channels_per_group;
            // Convolve dy(?, ?, d2) with w(:, :, d1, d2) to compute dx(xR, xC, d1).
            // ? = to be determined. : = across all values in that axis.
            var dotProd = ${re.type.value}(0.0);
            var wR: u32 = 0;
            if (uniforms.dilations.x == 1) {
              // Minimum wR >= 0 that satisfies (dyRCorner + wR) % (uniforms.strides.x) == 0
              wR = u32(((dyRCorner + i32(uniforms.strides.x) - 1) / i32(uniforms.strides.x)) * i32(uniforms.strides.x) - dyRCorner);
            }
            for (; wR < uniforms.effective_filter_dims.x; wR = wR + 1) {
              if (wR % uniforms.dilations.x != 0) {
                continue;
              }
              let dyR = (${de}(dyRCorner) + ${de}(wR)) / ${de}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${de}(uniforms.Dy_shape[${pe}]) || fract(dyR) > 0.0 ||
                  wRPerm < 0) {
                continue;
              }
              let idyR: u32 = u32(dyR);
              var wC: u32 = 0;
              if (uniforms.dilations.y == 1) {
                // Minimum wC >= 0 that satisfies (dyCCorner + wC) % (uniforms.strides.y) == 0
                wC = u32(((dyCCorner + i32(uniforms.strides.y) - 1) / i32(uniforms.strides.y)) * i32(uniforms.strides.y) - dyCCorner);
              }
              for (; wC < uniforms.effective_filter_dims.y; wC = wC + 1) {
                if (wC % uniforms.dilations.y != 0) {
                  continue;
                }
                let dyC = (${de}(dyCCorner) + ${de}(wC)) / ${de}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${de}(uniforms.Dy_shape[${G}]) ||
                    fract(dyC) > 0.0 || wCPerm < 0) {
                  continue;
                }
                let idyC: u32 = u32(dyC);
                var inputChannel = groupId * uniforms.input_channels_per_group;
                ${w?`
                var x_offset = ${ge.indicesToOffset(`${ge.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${y};
                var w_offset = ${ye.indicesToOffset(`${ye.type.indices}(wRPerm, wCPerm, inputChannel, wOutChannel)`)} / ${C};
                  `:""}
                for (var d2: u32 = 0; d2 < uniforms.input_channels_per_group_int; d2 = d2 + ${w?4:y}) {
                  ${ue()}
                  inputChannel = inputChannel + ${w?4:y};
                }
                ${O()}
                wC = wC + uniforms.strides.y - 1;
              }
              wR = wR + uniforms.strides[0] - 1;
            }
            let value = dotProd${s?` + bias[d1 / ${b}]`:""};
            ${re.setByOffset("global_idx","value")};
          `;return`
    ${te.registerUniforms(me).declareVariables(...ee,re)}
      ${te.mainStart()}
      ${te.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${F}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${r.cacheKey};${y}${C}${b}${w}${S}`,inputDependencies:T},getRunData:()=>({dispatchGroup:{x:k[0],y:k[1],z:k[2]},outputs:[{dims:i?i(o):o,dataType:e[0].dataType}],programUniforms:I}),getShaderSource:X}}}),Ug,jg,Wg,Kc,uw,Vg,Qc,Fg,lw,z$=ae(()=>{"use strict";I$(),na(),hi(),Ug=(e,r,i,s,o,u)=>(e-1)*r+i+(s-1)*o+1-u,jg=(e,r,i,s,o)=>{let u=Math.floor(e/2);r==="SAME_UPPER"?(i[s]=u,i[o]=e-u):r==="SAME_LOWER"&&(i[s]=e-u,i[o]=u)},Wg=(e,r,i,s,o,u,d,c,f,m)=>{let y=e.length-2,w=m.length===0;f.length<y&&f.push(...Array(y-f.length).fill(0));let $=e[0],S=r[c?3:1]*o;for(let b=0,C=e.length-y-(c?1:0);b<y;++b,++C){let N=e[C],k=w?N*d[b]:m[b],T=Ug(N,d[b],u[b],r[C],i[b],k);jg(T,s,u,b,b+y),w&&m.push(d[b]*(N-1)+f[b]+(r[C]-1)*i[b]+1-u[b]-u[b+y])}m.splice(0,0,$),m.splice(c?3:1,0,S)},Kc=(e,r)=>{let i=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((w,$)=>w*$,1)===0){i.length=0;for(let w=2;w<r[1].dims.length;++w)i.push(r[1].dims[w])}let s=e.format==="NHWC";i.splice(0,0,r[1].dims[0]),i.splice(s?3:1,0,r[1].dims[1]);let o=e.pads.slice(),u=e.outputShape.slice(),d=e.outputPadding.slice(),c=r[0].dims,f=e.dilations.slice();if(f.reduce((w,$)=>w+$,0)===0){let w=r[0].dims.length-2;f=new Array(w).fill(1)}let m=e.strides.slice();if(m.reduce((w,$)=>w+$,0)===0){let w=r[0].dims.length-2;m=new Array(w).fill(1)}Wg(c,i,f,e.autoPad,e.group,o,m,s,d,u);let y=Object.assign({},e);return Object.assign(y,{kernelShape:i,pads:o,outputPadding:d,outputShape:u,dilations:f,strides:m}),y},uw=e=>{let r=uf(e),i=e.format,s=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],o=e.dilations,u=e.group??1,d=e.kernelShape,c=e.pads,f=e.strides,m=e.wIsConst(),y=e.outputPadding,w=e.outputShape;return{autoPad:s,format:i,dilations:o,group:u,kernelShape:d,outputPadding:y,outputShape:w,pads:c,strides:f,wIsConst:m,...r,cacheKey:`${e.format};${r.activation};`}},Vg=(e,r)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[r.format==="NHWC"?e[0].dims.length-1:1],s=e[1].dims[0];if(i!==s)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let o=e[1].dims[1]*r.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==o))throw new Error("invalid bias");let u=e[0].dims.length-2;if(r.dilations.reduce((d,c)=>d+c,0)>0&&r.dilations.length!==u)throw new Error(`dilations should be ${u}D`);if(r.strides.reduce((d,c)=>d+c,0)>0&&r.strides.length!==u)throw new Error(`strides should be ${u}D`);if(r.pads.reduce((d,c)=>d+c,0)>0&&r.pads.length!==u*2)throw new Error(`pads should be ${u*2}D`);if(r.outputPadding.length!==u&&r.outputPadding.length!==0)throw new Error(`output_padding should be ${u}D`);if(r.kernelShape.reduce((d,c)=>d+c,0)>0&&r.kernelShape.length!==0&&r.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(r.outputShape.length!==0&&r.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Qc=(e,r,i,s)=>{let o=e.kernelCustomData.wT??e.compute(gr(r[1],[2,3,0,1]),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=o);let u=[r[0],o];r.length===3&&u.push(r[2]),e.compute(ow(u,i,s),{inputs:u})},Fg=(e,r)=>{let i=r.format==="NHWC",s=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&s.push(e.inputs[2]);let o=r.kernelShape;(o.length===0||o[0]===0)&&(o=[e.inputs[1].dims[2]]);let u=r.dilations;(u.length===0||u[0]===0)&&(u=[1]);let d=r.strides;(d.length===0||d[0]===0)&&(d=[1]);let c=r.pads;c.length===0&&(c=[0,0]),c=[0,c[0],0,c[1]],d=[1].concat(d),u=[1].concat(u),o=[1].concat(o);let f=r.outputPadding;f=[0].concat(f);let m=Kc({...r,pads:c,strides:d,dilations:u,kernelShape:o,outputPadding:f},s);Qc(e,s,m,y=>i?[y[0],y[2],y[3]]:[y[0],y[1],y[3]])},lw=(e,r)=>{if(Vg(e.inputs,r),e.inputs[0].dims.length===3)Fg(e,r);else{let i=Kc(r,e.inputs);Qc(e,e.inputs,i)}}}),qg,dw,cw,N$=ae(()=>{"use strict";Ie(),Re(),mt(),Be(),qg=(e,r,i,s)=>{let o=K.size(r),u=r.length,d=J("input",e,u),c=_e("output",e,u),f=i.dataType===6?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),m=K.normalizeAxis(f,u),y=w=>{let $=` i32(${d.indicesGet("inputIndices","uniforms.axis")}) `,S=xe("uniforms.input_shape","uniforms.axis",u),b=s.reverse?$+(s.exclusive?" + 1":""):"0",C=s.reverse?S:$+(s.exclusive?"":" + 1");return`
                ${w.registerUniform("outputSize","u32").registerUniform("axis","u32").declareVariables(d,c)}
                ${w.mainStart()}
                  ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
                  var inputIndices = ${c.offsetToIndices("global_idx")};
                  var sum = ${c.type.value}(0);
                  let first : i32 = ${b};
                  let last : i32 = ${C};
                  for (var i : i32 = first; i < last; i++) {
                    ${d.indicesSet("inputIndices","uniforms.axis","u32(i)")};
                    sum = sum + ${d.getByIndices("inputIndices")};
                  }
                  ${c.setByOffset("global_idx","sum")};
                }`};return{name:"CumSum",shaderCache:{hint:s.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:r,dataType:e}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},{type:12,data:m},...ke(r,r)]}),getShaderSource:y}},dw=(e,r)=>{let i=e.inputs[0].dims,s=e.inputs[0].dataType,o=e.inputs[1];e.compute(qg(s,i,o,r),{inputs:[0]})},cw=e=>{let r=e.exclusive===1,i=e.reverse===1;return Ze({exclusive:r,reverse:i})}}),Hg,Gg,Kg,pw,fw,O$=ae(()=>{"use strict";Ie(),Re(),mt(),Be(),Hg=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Gg=(e,r,i,s)=>{let o=[];o.push(`fn perm(i: ${s.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let u=0;u<r;++u)o.push(i.indicesSet("a",e[u],`i[${u}]`));return o.push("return a;}"),o.join(`
`)},Kg=(e,r)=>{let i,s,o,u,d,c,f=r.format==="NHWC",m=r.blocksize,y=r.mode==="DCR";f?([i,s,o,u]=e.dims,d=y?[i,s,o,m,m,u/m**2]:[i,s,o,u/m**2,m,m],c=y?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,s,o,u]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],d=y?[i,m,m,u/m**2,s,o]:[i,u/m**2,m,m,s,o],c=y?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let w=e.reshape(d),$=w.dims.length,S=e.dataType,b=J("a",S,$),C=_e("output",S,$),N=k=>`
  ${k.registerUniform("output_size","u32").declareVariables(b,C)}

  ${Gg(c,$,b,C)}

  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${C.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${C.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${r.blocksize};${r.mode}`,inputDependencies:["rank"]},getRunData:k=>{let T=f?[i,s*m,o*m,u/m**2]:[i,u/m**2,s*m,o*m],A=K.size(T),D=w.dims,B=K.sortBasedOnPerm(D,c);return{outputs:[{dims:T,dataType:k[0].dataType}],dispatchGroup:{x:Math.ceil(A/64)},programUniforms:[{type:12,data:A},...ke(D,B)]}},getShaderSource:N}},pw=(e,r)=>{Hg(e.inputs),e.compute(Kg(e.inputs[0],r))},fw=e=>Ze({blocksize:e.blocksize,mode:e.mode,format:e.format})}),Sn,No,bl,Zc,di,Qg,Zg,Yg,Yc,Xc,Jc,Xg,Jg,ep,ey,hw,mw,A$=ae(()=>{"use strict";Ie(),Re(),mt(),Be(),Sn=256,No=512,bl=2*Math.PI,Zc=e=>{let r=[],i=e;for(let s of[4,2,3,5])for(;i%s===0;)r.push(s),i/=s;return i===1?r:void 0},di=e=>{let r=e.toPrecision(9);return/[.eE]/.test(r)?r:`${r}.0`},Qg=(e,r,i,s,o)=>{let u=i/e,d=No-s,c=m=>`smem[${d}u + base + ${m*r}u]`,f=`  for (var t = local_idx; t < ${u}u; t += ${Sn}u) {
`;f+=`    let twiddleIndex = t % ${r}u;
    let angleUnit = f32(twiddleIndex);
`,f+=`    var leg: array<vec2<f32>, 5>;
`;for(let m=0;m<e;m++){let y=`${s}u + t + ${m*u}u`;if(m===0)f+=`    leg[0] = smem[${y}];
`;else{let w=o*bl*m/(e*r);f+=`    { let a = ${di(w)} * angleUnit; leg[${m}] = cmul(smem[${y}], vec2<f32>(cos(a), sin(a))); }
`}}if(f+=`    let base = (t / ${r}u) * ${r*e}u + twiddleIndex;
`,e===2)f+=`    ${c(0)} = leg[0] + leg[1];
    ${c(1)} = leg[0] - leg[1];
`;else if(e===4){let m=o<0?"vec2<f32>(oddDiff.y, -oddDiff.x)":"vec2<f32>(-oddDiff.y, oddDiff.x)";f+=`    let evenSum = leg[0] + leg[2]; let evenDiff = leg[0] - leg[2];
`,f+=`    let oddSum = leg[1] + leg[3]; let oddDiff = leg[1] - leg[3];
`,f+=`    let oddRot = ${m};
`,f+=`    ${c(0)} = evenSum + oddSum;
    ${c(1)} = evenDiff + oddRot;
`,f+=`    ${c(2)} = evenSum - oddSum;
    ${c(3)} = evenDiff - oddRot;
`}else for(let m=0;m<e;m++){let y=["leg[0]"];for(let w=1;w<e;w++){let $=o*bl*(w*m)/e,S=di(Math.cos($)),b=di(Math.sin($));y.push(`vec2<f32>(leg[${w}].x*${S} - leg[${w}].y*${b}, leg[${w}].x*${b} + leg[${w}].y*${S})`)}f+=`    ${c(m)} = ${y.join(" + ")};
`}return`${f}  }
  workgroupBarrier();
`},Zg=(e,r,i)=>{let s="",o=1,u=0;for(let d of e)s+=Qg(d,o,r,u,i),o*=d,u=No-u;return{code:s,resultOffset:u}},Yg=(e,r,i,s,o)=>{let u=e.dims,d=u.length,c=u[d-1],f=u[r],m=i&&s?(f-1)*2:f;o!==void 0&&(m=o);let y=i&&s?1:2,w=s&&!i?Math.floor(m/2)+1:m,$=u.slice();$[r]=w,$[d-1]=y;let S=1;for(let C=r+1;C<d-1;C++)S*=u[C];let b=K.size(u)/c/f;return{dataType:e.dataType,outputDims:$,length:m,signalLength:f,inner:S,batch:b,inputComponents:c,outputComponents:y,outputLength:w,inverse:i,onesided:s}},Yc=(e,r)=>[r,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(";"),Xc=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],Jc=(e,r,i)=>e.registerUniform("batch","u32").registerUniform("signalLength","u32").registerUniform("inner","u32").registerUniform("outputLength","u32").declareVariables(r,i),Xg=e=>{let{dataType:r,length:i,inputComponents:s,outputComponents:o,inverse:u,onesided:d}=e,c=Tt(r),f=u?1:-1,m=u?1/i:1,y=Zc(i),w=$=>{let S=J("x",r,[1]),b=_e("y",r,[1]),C=B=>{let P=`inBase + (${B}) * uniforms.inner * ${s}u`,V=`f32(${S.getByOffset(P)})`,I=s===2?`f32(${S.getByOffset(`${P} + 1u`)})`:"0.0";return`vec2<f32>(${V}, ${I})`},N;if(u&&d){let B=Math.floor(i/2)+1,P=i%2===0?`select(provided, provided - 1u, provided == ${B}u)`:"provided";N=`
    let provided = min(uniforms.signalLength, ${B}u);
    for (var i = local_idx; i < ${i}u; i += ${Sn}u) {
      if (i < provided) { smem[i] = ${C("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${P}; k += ${Sn}u) {
      let h = smem[k];
      smem[${i}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else N=`
    let loadCount = min(uniforms.signalLength, ${i}u);
    for (var i = local_idx; i < ${i}u; i += ${Sn}u) {
      if (i < loadCount) { smem[i] = ${C("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:k,resultOffset:T}=Zg(y,i,f),A=m===1?`smem[${T}u + i]`:`smem[${T}u + i] * ${di(m)}`,D=o===2?b.setByOffset("off + 1u",`${c}(v.y)`):"";return`
  ${Jc($,S,b)}
  var<workgroup> smem: array<vec2<f32>, ${2*No}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${$.mainStart(Sn)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${s}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${o}u;
    ${N}
${k}    for (var i = local_idx; i < uniforms.outputLength; i += ${Sn}u) {
      let v = ${A};
      let off = outBase + i * uniforms.inner * ${o}u;
      ${b.setByOffset("off",`${c}(v.x)`)}
      ${D}
    }
  }`};return{name:"DFT",shaderCache:{hint:Yc(e,"fft"),inputDependencies:["type"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:r}],programUniforms:Xc(e),dispatchGroup:{x:e.batch}})}},Jg=e=>{let{dataType:r,length:i,inputComponents:s,outputComponents:o,inverse:u,onesided:d}=e,c=Tt(r),f=u?1:-1,m=u?1/i:1,y=w=>{let $=J("x",r,[1]),S=_e("y",r,[1]),b=A=>{let D=`inBase + (${A}) * uniforms.inner * ${s}u`,B=`f32(${$.getByOffset(D)})`,P=s===2?`f32(${$.getByOffset(`${D} + 1u`)})`:"0.0";return`vec2<f32>(${B}, ${P})`},C=u&&d?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
    let provided = min(uniforms.signalLength, ${Math.floor(i/2)+1}u);
    if (k < provided) { return ${b("k")}; }
    let m = ${i}u - k;
    if (m < provided) {
      let h = ${b("m")};
      return vec2<f32>(h.x, -h.y);
    }
    return vec2<f32>(0.0, 0.0);
  }`:`fn spectrum(inBase: u32, n: u32) -> vec2<f32> {
    if (n < uniforms.signalLength) { return ${b("n")}; }
    return vec2<f32>(0.0, 0.0);
  }`,N=`
      let angle = ${di(f*bl)} * f32(knMod) / ${di(i)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${i}u) { knMod -= ${i}u; }`,k=o===2?S.setByOffset("off + 1u",`${c}(v.y)`):"",T=m===1?"acc":`acc * ${di(m)}`;return`
  ${Jc(w,$,S)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${C}
  ${w.mainStart(Sn)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${s}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${o}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${Sn}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${i}u; n++) {${N}
      }
      let v = ${T};
      let off = outBase + k * uniforms.inner * ${o}u;
      ${S.setByOffset("off",`${c}(v.x)`)}
      ${k}
    }
  }`};return{name:"DFT",shaderCache:{hint:Yc(e,"direct"),inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:r}],programUniforms:Xc(e),dispatchGroup:{x:e.batch}})}},ep=e=>{if(!e||e.dataType===0)return;if(K.size(e.dims)!==1)throw new Error("DFT optional scalar inputs must have exactly 1 element.");if(e.dataType===6)return e.getInt32Array()[0];let r=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(r))throw new Error("DFT optional scalar inputs are out of JavaScript safe integer range.");return r},ey=e=>{if(!e||e.length<1)throw new Error("DFT requires at least 1 input.");let r=e[0].dims;if(r.length<2)throw new Error("DFT input must have at least 2 dimensions.");let i=r[r.length-1];if(i!==1&&i!==2)throw new Error("DFT input's innermost dimension must be 1 (real) or 2 (complex).")},hw=(e,r)=>{ey(e.inputs);let i=e.inputs[0],s=i.dims.length,o=r.inverse!==0,u=r.onesided!==0,d=ep(e.inputs[1]);if(d!==void 0&&d<=0)throw new Error("dft_length must be greater than zero.");let c=K.normalizeAxis(ep(e.inputs[2])??r.axis,s);if(c===s-1)throw new Error("DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.");if(o&&u&&i.dims[s-1]!==2)throw new Error("Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).");let f=Yg(i,c,o,u,d);if(f.length<=0)throw new Error(`Invalid DFT length: ${f.length}`);let m=f.length<=No&&Zc(f.length)!==void 0?Xg(f):Jg(f);e.compute(m,{inputs:[0]})},mw=e=>Ze({axis:e.axis??1,inverse:e.inverse??0,onesided:e.onesided??0})}),Sl,Oo,tp,ty,ry,ny,iy,rp,ay,gw,yw,R$=ae(()=>{"use strict";Ie(),Re(),mt(),Be(),Sl="[a-zA-Z]|\\.\\.\\.",Oo="("+Sl+")+",tp="^"+Oo+"$",ty="("+Oo+",)*"+Oo,ry="^"+ty+"$",ny=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,r){let i=this.symbolToIndices.get(e);i===void 0?i=[r]:i.push(r),this.symbolToIndices.set(e,i)}},iy=class{constructor(e,r){var o;this.equation=r,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[i,s]=r.includes("->")?r.split("->",2):[r,""];if(!i.match(RegExp(ry)))throw new Error("Invalid LHS term");if(i.split(",").forEach((u,d)=>{let c=e[d].dims.slice();if(!u.match(RegExp(tp)))throw new Error("Invalid LHS term");let f=this.processTerm(u,!0,c,d);this.lhs.push(f)}),s==="")s+=[...this.symbolToInfo.entries()].filter(([u,d])=>d.count===1||u==="...").map(([u])=>u).join("");else if(!s.match(RegExp(Oo)))throw new Error("Invalid RHS");(o=s.match(RegExp(Sl,"g")))==null||o.forEach(u=>{if(u==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let d=this.symbolToInfo.get(u);if(d===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(d.dimValue)}}),this.rhs=this.processTerm(s,!1,this.outputDims)}addSymbol(e,r,i){let s=this.symbolToInfo.get(e);if(s!==void 0){if(s.dimValue!==r&&s.count!==1)throw new Error("Dimension mismatch");s.count++,s.inputIndices.push(i)}else s={count:1,dimValue:r,inputIndices:[i]};this.symbolToInfo.set(e,s)}processTerm(e,r,i,s=-1){let o=i.length,u=!1,d=[],c=0;if(!e.match(RegExp(tp))&&!r&&e!=="")throw new Error("Invalid LHS term");let f=e.match(RegExp(Sl,"g")),m=new ny(s);return f==null||f.forEach((y,w)=>{if(y==="..."){if(u)throw new Error("Only one ellipsis is allowed per input term");u=!0;let $=o-f.length+1;if($<0)throw new Error("Ellipsis out of bounds");if(d=i.slice(c,c+$),this.hasEllipsis){if(this.ellipsisDims.length!==d.length||this.ellipsisDims.toString()!==d.toString())throw new Error("Ellipsis dimensions mismatch")}else if(r)this.hasEllipsis=!0,this.ellipsisDims=d;else throw new Error("Ellipsis must be specified in the LHS");for(let S=0;S<d.length;S++){let b=String.fromCharCode(48+S);m.addSymbol(b,w+S),this.addSymbol(b,i[c++],s)}}else m.addSymbol(y,w+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(y,i[c++],s)}),m}},rp=e=>e+"_max",ay=(e,r,i,s)=>{let o=e.map(m=>m.length).map((m,y)=>J(`input${y}`,r,m)),u=K.size(s),d=_e("output",r,s.length),c=[...i.symbolToInfo.keys()].filter(m=>!i.rhs.symbolToIndices.has(m)),f=m=>{let y=[],w="var prod = 1.0;",$="var sum = 0.0;",S="sum += prod;",b=[],C=[],N=[],k=[],T=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach((D,B)=>{var P;if(i.rhs.symbolToIndices.has(B)){let V=(P=i.rhs.symbolToIndices.get(B))==null?void 0:P[0];V!==void 0&&i.lhs.forEach((I,X)=>{if(D.inputIndices.includes(X)){let te=I.symbolToIndices.get(B);if(te===void 0)throw new Error("Invalid symbol error");te.forEach(me=>{y.push(`${o[X].indicesSet(`input${X}Indices`,me,d.indicesGet("outputIndices",V))}`)})}})}else i.lhs.forEach((V,I)=>{if(D.inputIndices.includes(I)){let X=V.symbolToIndices.get(B);if(X===void 0)throw new Error("Invalid symbol error");X.forEach(te=>{b.push(`${o[I].indicesSet(`input${I}Indices`,te,`${B}`)}`)}),k.push(`prod *= ${o[I].getByIndices(`input${I}Indices`)};`)}}),C.push(`for(var ${B}: u32 = 0; ${B} < uniforms.${rp(B)}; ${B}++) {`),N.push("}")});let A=T?[...y,`let sum = ${o.map((D,B)=>D.getByIndices(`input${B}Indices`)).join(" * ")};`]:[...y,$,...C,...b,w,...k,S,...N];return`
            ${m.registerUniforms(c.map(D=>({name:`${rp(D)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...o,d)}

            ${m.mainStart()}
            ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${d.offsetToIndices("global_idx")};
            ${o.map((D,B)=>`var input${B}Indices: ${o[B].type.indices};`).join(`
`)}
            ${A.join(`
`)};
            ${d.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let m=c.filter(w=>i.symbolToInfo.has(w)).map(w=>{var $;return{type:12,data:(($=i.symbolToInfo.get(w))==null?void 0:$.dimValue)||0}});m.push({type:12,data:u});let y=e.map((w,$)=>[...ke(w)]).reduce((w,$)=>w.concat($),m);return y.push(...ke(s)),{outputs:[{dims:s,dataType:r}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:y}},getShaderSource:f}},gw=(e,r)=>{let i=new iy(e.inputs,r.equation),s=i.outputDims,o=e.inputs.map((u,d)=>u.dims);e.compute(ay(o,e.inputs[0].dataType,i,s))},yw=e=>{let r=e.equation.replace(/\s+/g,"");return Ze({equation:r})}}),sy,np,oy,uy,vw,D$=ae(()=>{"use strict";Ie(),Re(),Be(),sy=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let r=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),s=i.length<r.length?0:i.length-r.length,o=r.length<i.length?0:r.length-i.length;for(;s<i.length&&o<r.length;++s,++o)if(i[s]!==r[o]&&i[s]!==1&&r[o]!==1)throw new Error("Expand requires shape to be broadcastable to input")},np=(e,r)=>{let i=e.length-r.length,s=[];for(let o=0;o<i;++o)s.push(e[o]);for(let o=0;o<r.length;++o)s.push(r[o]===1?e[o+i]:r[o]);return s},oy=(e,r)=>e.length>r.length?np(e,r):np(r,e),uy=e=>{let r=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),s=oy(r,i),o=e[0].dataType,u=o===9||K.size(r)===1,d=o===9||r.length>0&&r[r.length-1]%4===0?4:1,c=u||s.length>0&&s[s.length-1]%4===0?4:1,f=Math.ceil(K.size(s)/c),m=w=>{let $=J("input",o,r.length,d),S=_e("output",o,s.length,c),b;if(o===9){let C=(N,k,T="")=>`
          let outputIndices${k} = ${S.offsetToIndices(`outputOffset + ${k}u`)};
          let offset${k} = ${$.broadcastedIndicesToOffset(`outputIndices${k}`,S)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${N}[${k}] = ${T}(${$.getByOffset(`index${k}`)}[component${k}]);
        `;b=`
        let outputOffset = global_idx * ${c};
        var data = vec4<u32>(0);
        ${C("data",0,"u32")}
        ${C("data",1,"u32")}
        ${C("data",2,"u32")}
        ${C("data",3,"u32")}
        ${S.setByOffset("global_idx","data")}
      }`}else b=`
        let outputIndices = ${S.offsetToIndices(`global_idx * ${c}`)};
        let inputOffset = ${$.broadcastedIndicesToOffset("outputIndices",S)};
        let data = ${S.type.value}(${$.getByOffset(`inputOffset / ${d}`)});
        ${S.setByOffset("global_idx","data")}
      }`;return`
    ${w.registerUniform("vec_size","u32").declareVariables($,S)}
    ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
    ${b}`},y=[{type:12,data:f},...ke(r,s)];return{name:"Expand",shaderCache:{hint:`${s.length};${d}${c}`,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:y})}},vw=e=>{sy(e.inputs),e.compute(uy(e.inputs),{inputs:[0]})}}),ly,ww,M$=ae(()=>{"use strict";Ie(),Re(),Be(),of(),ly=e=>{let r=e[0].dataType,i=K.size(e[0].dims),s=K.size(e[1].dims),o=s%4===0,u=d=>{let c=J("x",r,[1],4),f=J("bias",r,[1],4),m=_e("y",r,[1],4),y=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],w=S=>`
      let bias${S}_offset: u32 = (global_idx * 4 + ${S}) % uniforms.bias_size;
      let bias${S} = ${f.getByOffset(`bias${S}_offset / 4`)}[bias${S}_offset % 4];`,$=o?`
      let bias = ${f.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${w(0)}${w(1)}${w(2)}${w(3)}
      let bias = ${c.type.value}(bias0, bias1, bias2, bias3);`;return`${d.registerUniforms(y).declareVariables(c,f,m)}

    ${Np(Tt(r))}

    ${d.mainStart(os)}
      ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${c.getByOffset("global_idx")};
      ${$}
      let x_in = x + bias;
      ${m.setByOffset("global_idx",Op("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${o}`,inputDependencies:["type","type"]},getShaderSource:u,getRunData:d=>({outputs:[{dims:d[0].dims,dataType:d[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:s}],dispatchGroup:{x:Math.ceil(i/os/4)}})}},ww=e=>{e.inputs.length<2||K.size(e.inputs[1].dims)===0?B1(e):e.compute(ly(e.inputs))}}),dy,cy,_w,$w,B$=ae(()=>{"use strict";Ie(),Re(),mt(),Be(),dy=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},cy=(e,r)=>{let i=e[0].dims,s=e[1].dims,o=i.length,u=K.normalizeAxis(r.axis,o),d=i.slice(0);d.splice(u,1,...s);let c=i[u],f=e[0].dataType===9?4:1,m=Math.ceil(K.size(d)/f),y=[{type:12,data:m},{type:6,data:c},{type:12,data:u},...ke(e[0].dims,e[1].dims,d)],w=$=>{let S=J("data",e[0].dataType,e[0].dims.length,f),b=J("inputIndices",e[1].dataType,e[1].dims.length),C=_e("output",e[0].dataType,d.length,f),N=T=>{let A=s.length,D=`var indicesIndices${T}  = ${b.type.indices}(0);`;for(let B=0;B<A;B++)D+=`${A>1?`indicesIndices${T}[${B}]`:`indicesIndices${T}`} = ${d.length>1?`outputIndices${T}[uniforms.axis + ${B}]`:`outputIndices${T}`};`;D+=`
          var idx${T} = ${b.getByIndices(`indicesIndices${T}`)};
          if (idx${T} < 0) {
            idx${T} = idx${T} + uniforms.axisDimLimit;
          }
          var dataIndices${T} : ${S.type.indices};
        `;for(let B=0,P=0;B<o;B++)B===u?(D+=`${o>1?`dataIndices${T}[${B}]`:`dataIndices${T}`} = u32(idx${T});`,P+=A):(D+=`${o>1?`dataIndices${T}[${B}]`:`dataIndices${T}`} = ${d.length>1?`outputIndices${T}[${P}]`:`outputIndices${T}`};`,P++);return D},k;if(e[0].dataType===9){let T=(A,D,B="")=>`
          let outputIndices${D} = ${C.offsetToIndices(`outputOffset + ${D}u`)};
          ${N(D)};
          let offset${D} = ${S.indicesToOffset(`dataIndices${D}`)};
          let index${D} = offset${D} / 4u;
          let component${D} = offset${D} % 4u;
          ${A}[${D}] = ${B}(${S.getByOffset(`index${D}`)}[component${D}]);
        `;k=`
        let outputOffset = global_idx * ${f};
        var value = vec4<u32>(0);
        ${T("value",0,"u32")}
        ${T("value",1,"u32")}
        ${T("value",2,"u32")}
        ${T("value",3,"u32")}
        ${C.setByOffset("global_idx","value")}
      `}else k=`
      let outputIndices = ${C.offsetToIndices("global_idx")};
      ${N("")};
      let value = ${S.getByIndices("dataIndices")};
      ${C.setByOffset("global_idx","value")};
      `;return`
      ${$.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(S,b,C)}
      ${$.mainStart()}
        ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        ${k}
      }`};return{name:"Gather",shaderCache:{hint:r.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:y}),getShaderSource:w}},_w=e=>Ze({axis:e.axis}),$w=(e,r)=>{let i=e.inputs;dy(i),e.compute(cy(e.inputs,r))}}),py,xw,bw,P$=ae(()=>{"use strict";Ie(),Re(),Be(),py=(e,r,i,s,o,u,d,c,f)=>{let m=[{type:12,data:u},{type:12,data:s},{type:12,data:o},{type:12,data:i},{type:12,data:d},{type:12,data:c},{type:12,data:f}],y=[u];m.push(...ke(r.dims,y));let w=$=>{let S=J("indices_data",r.dataType,r.dims.length),b=_e("input_slice_offsets_data",12,1,1),C=[S,b],N=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:o.length},{name:"sizes_from_slice_dims_data",type:"u32",length:i.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
  ${$.registerUniforms(N).declareVariables(...C)}
  ${$.mainStart()}
    ${$.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let batch_idx = global_idx / uniforms.num_slices_per_batch;
    let base_offset = batch_idx * uniforms.input_batch_stride;

    let slice_indices_base_offset = global_idx * uniforms.num_slice_dims;
    var relative_slice_offset = 0;
    for (var dim_idx = 0u; dim_idx < uniforms.num_slice_dims; dim_idx ++) {
      var index = i32(indices_data[dim_idx + slice_indices_base_offset].x);
      let input_dim_idx = uniforms.batch_dims + dim_idx;
      if (index < 0) {
        ${o.length===1?"index += i32(uniforms.input_dims);":"index += i32(uniforms.input_dims[input_dim_idx]);"}
      }
      ${i.length===1?"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data);":"relative_slice_offset += index * i32(uniforms.sizes_from_slice_dims_data[dim_idx]);"}
    }

    input_slice_offsets_data[global_idx] =  base_offset + u32(relative_slice_offset);
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${o.length}_${i.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:y,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:w},{inputs:[r],outputs:[-1]})[0]},xw=(e,r)=>{let i=e.inputs,s=i[0].dims,o=i[0].dataType,u=i[1].dims,d=u[u.length-1],c=K.sizeToDimension(u,u.length-1),f=K.sizeFromDimension(s,r.batchDims+d),m=K.sizeToDimension(s,r.batchDims),y=K.sizeFromDimension(s,r.batchDims),w=c/m,$=new Array(d),S=f;for(let D=0;D<d;++D)$[d-1-D]=S,S*=s[r.batchDims+d-1-D];let b=py(e,i[1],$,r.batchDims,s,c,w,y,d),C=r.batchDims+d;if(C>s.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let N=u.slice(0,-1).concat(s.slice(C)),k=K.size(N),T=[{type:12,data:k},{type:12,data:f},...ke(i[0].dims,b.dims,N)],A=D=>{let B=J("data",i[0].dataType,i[0].dims.length),P=J("slice_offsets",12,b.dims.length),V=_e("output",i[0].dataType,N.length);return`
          ${D.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(B,P,V)}
            ${D.mainStart()}
            ${D.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:r.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:N,dataType:o}],dispatchGroup:{x:Math.ceil(k/64)},programUniforms:T}),getShaderSource:A},{inputs:[i[0],b]})},bw=e=>({batchDims:e.batch_dims,cacheKey:""})}),fy,hy,Sw,kw,L$=ae(()=>{"use strict";Ie(),Re(),mt(),Be(),fy=(e,r)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=K.normalizeAxis(r.quantizeAxis,e[0].dims.length),s=r.blockSize,o=e[0],u=e[2],d=e.length===4?e[3]:void 0;if(u.dims.length!==o.dims.length||!o.dims.map((c,f)=>f===i?Math.ceil(c/s)===u.dims[f]:c===u.dims[f]).reduce((c,f)=>c&&f,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(d){if(d.dataType!==o.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(d.dims.length!==u.dims.length||!d.dims.map((c,f)=>c===u.dims[f]).reduce((c,f)=>c&&f,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},hy=(e,r)=>{let i=e[0].dims,s=e[1].dims,o=i.length,u=K.normalizeAxis(r.gatherAxis,o),d=K.normalizeAxis(r.quantizeAxis,o),c=i.slice(0);c.splice(u,1,...s);let f=K.size(c),m=e[2].dataType,y=e[0].dataType===22,w=[{type:12,data:f},{type:12,data:d},{type:12,data:u},{type:12,data:r.blockSize},...ke(...e.map((S,b)=>S.dims),c)],$=S=>{let b=J("data",e[0].dataType,e[0].dims.length),C=J("inputIndices",e[1].dataType,e[1].dims.length),N=J("scales",e[2].dataType,e[2].dims.length),k=e.length>3?J("zeroPoint",e[3].dataType,e[3].dims.length):void 0,T=_e("output",m,c.length),A=[b,C,N];k&&A.push(k);let D=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${S.registerUniforms(D).declareVariables(...A,T)}
        ${S.mainStart()}
        let output_indices = ${T.offsetToIndices("global_idx")};
        var indices_indices = ${C.type.indices}(0);
        ${s.length>1?`
          for (var i: u32 = 0; i < ${s.length}; i++) {
            let index = ${T.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${C.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${T.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${b.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${T.indicesGet("output_indices","i")};
          ${b.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${C.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${i[u]};
        }
        ${b.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${c.length}; i++) {
          let index = ${T.indicesGet("output_indices",`i + ${s.length} - 1`)};
          ${b.indicesSet("data_indices","i","index")};
        }
        let data_offset = ${b.indicesToOffset("data_indices")};
        let data_index = data_offset % 8;
        // Convert 4-bit packed data to 8-bit packed data.
        let packed_4bit_quantized_data = ${b.getByOffset("data_offset / 8")};
        let packed_8bit_quantized_data = (packed_4bit_quantized_data >> (4 * (data_index % 2))) & 0x0f0f0f0f;
        let quantized_data_vec = ${y?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_quantized_data));
        let quantized_data = quantized_data_vec[data_index / 2];
        var scale_indices = data_indices;
        let quantize_axis_index = ${N.indicesGet("data_indices","uniforms.quantize_axis")} / uniforms.block_size;
        ${N.indicesSet("scale_indices","uniforms.quantize_axis","quantize_axis_index")};
        var scale = ${N.getByIndices("scale_indices")};
        ${k?`
              let zero_point_indices = scale_indices;
              let zero_point_offset = ${k.indicesToOffset("zero_point_indices")};
              let zero_point_index = zero_point_offset % 8;
              let packed_4bit_zero_points = ${k.getByOffset("zero_point_offset / 8")};
              let packed_8bit_zero_points = (packed_4bit_zero_points >> (4 * (zero_point_index % 2))) & 0x0f0f0f0f;
              let zero_point_vec = ${y?"unpack4xI8":"unpack4xU8"}(u32(packed_8bit_zero_points));
              let zero_point = zero_point_vec[zero_point_index / 2];`:"var zero_point = 0"};
        let dequantized_data = ${Tt(m)}(quantized_data - zero_point) * scale;
        ${T.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${r.cacheKey};${e.filter((S,b)=>b!==1).map(S=>S.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(S,b)=>"rank")},getRunData:()=>({outputs:[{dims:c,dataType:m}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:w}),getShaderSource:$}},Sw=(e,r)=>{let i=e.inputs;fy(i,r),e.compute(hy(e.inputs,r))},kw=e=>Ze({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),my,gy,Ew,Tw,U$=ae(()=>{"use strict";Ie(),Re(),mt(),Be(),my=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},gy=(e,r)=>{let i=e[0].dims,s=e[0].dataType,o=i.length,u=e[1].dims,d=e[1].dataType,c=K.normalizeAxis(r.axis,o),f=i[c],m=u.slice(0),y=K.size(m),w=J("input",s,o),$=J("indicesInput",d,u.length),S=_e("output",s,m.length),b=[{type:12,data:y},{type:6,data:f},{type:12,data:c}];return b.push(...ke(i,u,m)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:m,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:b}),getShaderSource:C=>`
      ${C.registerUniform("outputSize","u32").registerUniform("axisDimLimit","i32").registerUniform("axis","u32").declareVariables(w,$,S)}
      ${C.mainStart()}
      ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

      let outputIndices = ${S.offsetToIndices("global_idx")};

      var idx = ${$.getByOffset("global_idx")};
      if (idx < 0) {
        idx = idx + uniforms.axisDimLimit;
      }
      var inputIndices = ${w.type.indices}(outputIndices);
      ${w.indicesSet("inputIndices","uniforms.axis","u32(idx)")};
      let value = ${w.getByIndices("inputIndices")};

      ${S.setByOffset("global_idx","value")};
  }`}},Ew=e=>Ze({axis:e.axis}),Tw=(e,r)=>{let i=e.inputs;my(i),e.compute(gy(e.inputs,r))}}),yy,vy,Cw,Iw,j$=ae(()=>{"use strict";Ie(),Re(),Be(),yy=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},vy=(e,r)=>{let i=e[0].dims.slice(),s=e[1].dims.slice(),[o,u,d]=bv.getShapeOfGemmResult(i,r.transA,s,r.transB,e.length===3?e[2].dims:void 0),c=[o,u];if(!c)throw new Error("Can't use gemm on the given tensors");let f=16,m=Math.ceil(u/f),y=Math.ceil(o/f),w=!0,$=K.size(c),S=[{type:12,data:w?m:$},{type:12,data:o},{type:12,data:u},{type:12,data:d},{type:1,data:r.alpha},{type:1,data:r.beta}],b=["type","type"];e.length===3&&(S.push(...ke(e[2].dims)),b.push("rank")),S.push(...ke(c));let C=k=>{let T="";r.transA&&r.transB?T="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":r.transA&&!r.transB?T="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!r.transA&&r.transB?T="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!r.transA&&!r.transB&&(T="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let A=r.alpha===1?"":"value *= uniforms.alpha;",D=J("a",e[0].dataType,e[0].dims),B=J("b",e[1].dataType,e[1].dims),P=D.type.value,V=null,I=[D,B];e.length===3&&(V=J("c",e[2].dataType,e[2].dims.length),I.push(V));let X=_e("output",e[0].dataType,c.length);I.push(X);let te=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${k.registerUniforms(te).declareVariables(...I)}

  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${P}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${T}
    }

    ${A}
    ${V!=null?`let cOffset = ${V.broadcastedIndicesToOffset("vec2(m, n)",X)}; value += ${P}(uniforms.beta) * ${V.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},N=k=>{let T=J("a",e[0].dataType,e[0].dims),A=J("b",e[1].dataType,e[1].dims),D=null,B=[T,A];e.length===3&&(D=J("c",e[2].dataType,e[2].dims.length),B.push(D));let P=_e("output",e[0].dataType,c.length);B.push(P);let V=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],I="",X="";r.transA&&r.transB?(X=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${T.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${A.type.value}(0);
      }
      `,I="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):r.transA&&!r.transB?(X=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${T.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${A.type.value}(0);
      }
      `,I="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!r.transA&&r.transB?(X=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${T.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${A.type.value}(0);
      }
      `,I="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!r.transA&&!r.transB&&(X=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${T.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${A.type.value}(0);
      }
      `,I="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let te=r.alpha===1?"":"value *= uniforms.alpha;";return`
  ${k.registerUniforms(V).declareVariables(...B)}
  var<workgroup> tile_a: array<array<${T.type.storage}, ${f}>, ${f}>;
  var<workgroup> tile_b: array<array<${A.type.storage}, ${f}>, ${f}>;
  ${k.mainStart([f,f,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${f};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${f};
    let num_tiles = (uniforms.K - 1) / ${f} + 1;
    var k_start = 0u;
    var value = ${P.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${X}
      k_start = k_start + ${f};
      workgroupBarrier();

      for (var k: u32 = 0u; k < ${f}; k++) {
        ${I}
      }
      workgroupBarrier();
    }

    ${te}
    let m = tile_row_start + local_id.y;
    let n = tile_col_start + local_id.x;
    ${D!=null?`let cOffset = ${D.broadcastedIndicesToOffset("vec2(m, n)",P)}; value += ${P.type.value}(uniforms.beta) * ${D.getByOffset("cOffset")};`:""}
    if (m < uniforms.M && n < uniforms.N) {
      output[m * uniforms.N + n] = value;
    }
  }`};return w?{name:"GemmShared",shaderCache:{hint:`${r.cacheKey}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:m*y},programUniforms:S}),getShaderSource:N}:{name:"Gemm",shaderCache:{hint:`${r.cacheKey}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:S}),getShaderSource:C}},Cw=e=>{let r=e.transA,i=e.transB,s=e.alpha,o=e.beta;return{transA:r,transB:i,alpha:s,beta:o,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Iw=(e,r)=>{yy(e.inputs),e.compute(vy(e.inputs,r))}}),an,kn,Vi,Fi,wy,_y,$y,xy,by,Sy,ky,Ey,zw,Nw,W$=ae(()=>{"use strict";Ie(),Re(),mt(),Be(),[an,kn,Vi,Fi]=[0,1,2,3],wy=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},_y=`
  fn gs_get_cubic_coeffs(x: f32) -> vec4<f32> {
    let cubic_alpha = -0.75f;
    let x_abs = abs(x);
    var coeffs: vec4<f32>;
    coeffs[0] = (((cubic_alpha * (x_abs + 1) - 5 * cubic_alpha) * (x_abs + 1) + 8 * cubic_alpha) * (x_abs + 1) - 4 * cubic_alpha);
    coeffs[1] = (((cubic_alpha + 2) * x_abs - (cubic_alpha + 3)) * x_abs * x_abs + 1);
    coeffs[2] = (((cubic_alpha + 2) * (1 - x_abs) - (cubic_alpha + 3)) * (1 - x_abs) * (1 - x_abs) + 1);
    coeffs[3] = (((cubic_alpha * (2 - x_abs) - 5 * cubic_alpha) * (2 - x_abs) + 8 * cubic_alpha) * (2 - x_abs) - 4 * cubic_alpha);
    return coeffs;
  }
`,$y=e=>`
  fn gs_bicubic_interpolate(p: mat4x4<${e}>, x: f32, y: f32) -> ${e} {
    var v: vec4<f32>;
    var coeffs = gs_get_cubic_coeffs(x);
    for (var i = 0; i < 4; i++) {
      v[i] = coeffs[0] * p[i][0] + coeffs[1] * p[i][1] + coeffs[2] * p[i][2] + coeffs[3] * p[i][3];
    }
    coeffs = gs_get_cubic_coeffs(y);
    let pixel = ${e}(coeffs[0] * v[0] + coeffs[1] * v[1] + coeffs[2] * v[2] + coeffs[3] * v[3]);
    return pixel;
  }
`,xy=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,by=e=>`
  ${e.paddingMode==="reflection"?`
      fn gs_reflect(x: i32, x_min: f32, x_max: f32) -> u32 {
        var dx = 0.0;
        var fx = f32(x);
        let range = x_max - x_min;
        if (fx < x_min) {
          dx = x_min - fx;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_min + r;
          } else {
            fx = x_max - r;
          }
        } else if (fx > x_max) {
          dx = fx - x_max;
          let n = u32(dx / range);
          let r = dx - f32(n) * range;
          if (n % 2 == 0) {
            fx = x_max - r;
          } else {
            fx = x_min + r;
          }
        }
        return u32(fx);
      }`:""}
`,Sy=(e,r,i)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${r} {
     var pixel = ${r}(0);
     var indices = vec4<u32>(0);
     indices[${an}] = batch;
     indices[${kn}] = channel;`+(()=>{switch(i.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Vi}] = u32(r);
            indices[${Fi}] = u32(c);
          } else {
            return ${r}(0);
          }
        `;case"border":return`
          indices[${Vi}] = u32(clamp(r, 0, H - 1));
          indices[${Fi}] = u32(clamp(c, 0, W - 1));
        `;case"reflection":return`
          indices[${Vi}] = gs_reflect(r, border[1], border[3]);
          indices[${Fi}] = gs_reflect(c, border[0], border[2]);
        `;default:throw new Error(`padding mode ${i.paddingMode} is not supported`)}})()+`
    return ${e.getByIndices("indices")};
  }
`,ky=(e,r,i)=>(()=>{switch(i.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${an}], indices[${kn}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${an}], indices[${kn}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${an}], indices[${kn}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${an}], indices[${kn}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${an}], indices[${kn}], border);

          let dx2 = ${r}(f32(x2) - x);
          let dx1 = ${r}(x - f32(x1));
          let dy2 = ${r}(f32(y2) - y);
          let dy1 = ${r}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${r}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${an}], indices[${kn}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${i.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,Ey=(e,r)=>{let i=J("x",e[0].dataType,e[0].dims.length),s=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],o=J("grid",e[1].dataType,s.length,2),u=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];r.format==="NHWC"&&(u=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[an,kn,Vi,Fi]=[0,3,1,2]);let d=_e("output",e[0].dataType,u.length),c=i.type.value,f=K.size(u),m=[{type:12,data:f},...ke(e[0].dims,s,u)],y=w=>`
  ${w.registerUniform("output_size","u32").declareVariables(i,o,d)}
  ${_y}
  ${$y(c)}
  ${xy(r)}
  ${by(r)}
  ${Sy(i,c,r)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Vi}]);
      let W_in = i32(uniforms.x_shape[${Fi}]);

      ${r.alignCorners===0?`
      let x_min = -0.5;
      let x_max = f32(W_in) - 0.5;
      let y_min = -0.5;
      let y_max = f32(H_in) - 0.5;
      `:`
      let x_min = 0.0;
      let x_max = f32(W_in) - 1.0;
      let y_min = 0.0;
      let y_max = f32(H_in) - 1.0;
      `};
      let border = vec4<f32>(x_min, y_min, x_max, y_max);

      let indices = ${d.offsetToIndices("global_idx")};
      var grid_indices = vec3<u32>(indices[${an}], indices[${Vi}], indices[${Fi}]);
      let nxy = ${o.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${ky(d,c,r)}
  }`;return{name:"GridSample",shaderCache:{hint:`${r.cacheKey}`,inputDependencies:["type","type"]},getRunData:w=>{let $=K.size(u);return{outputs:[{dims:u,dataType:w[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:m}},getShaderSource:y}},zw=(e,r)=>{wy(e.inputs),e.compute(Ey(e.inputs,r))},Nw=e=>Ze({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Xt,Ty,Ow,ip,Cy,Uo,Aw,Rw=ae(()=>{"use strict";Ie(),Re(),mt(),rf(),sf(),Be(),hi(),Xt=(e,r)=>e.length>r&&e[r].dims.length>0?e[r]:void 0,Ty=(e,r)=>{let i=e[0],s=Xt(e,1),o=Xt(e,2),u=Xt(e,3),d=Xt(e,4),c=Xt(e,5),f=Xt(e,6),m=Xt(e,7);if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let y=i.dims[0],w=i.dims[1],$=i.dims.length===3?i.dims[2]:r.numHeads*i.dims[4],S=w,b=0,C=0,N=Math.floor($/r.numHeads);if(f&&m&&K.size(f.dims)&&K.size(m.dims)){if(f.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(f.dims[0]!==y||f.dims[1]!==r.numHeads||f.dims[3]!==N)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(m.dims[0]!==y||m.dims[1]!==r.numHeads||m.dims[3]!==N)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(f.dims[2]!==m.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(m.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');b=f.dims[2],C=f.dims[2]}else if(f&&K.size(f.dims)||m&&K.size(m.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let k;if(s&&K.size(s.dims)>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(s.dims.length<3||s.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(s.dims.length===3){if(s.dims[2]!==i.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');k=2,S=s.dims[1]}else if(s.dims.length===5){if(s.dims[2]!==r.numHeads||s.dims[3]!==2||s.dims[4]!==N)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(o)throw new Error('Expect "value" be none when "key" has packed kv format.');k=5,S=s.dims[1]}else{if(s.dims[1]!==r.numHeads||s.dims[3]!==N)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');k=0,S=s.dims[2]}}else{if(i.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(i.dims[2]!==r.numHeads||i.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');k=3}if(u&&K.size(u.dims)>0){if(u.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(s&&s.dims.length===5&&s.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let T=b+S,A=0;if(d&&K.size(d.dims)>0){A=8;let V=d.dims;throw V.length===1?V[0]===y?A=1:V[0]===3*y+2&&(A=3):V.length===2&&V[0]===y&&V[1]===T&&(A=5),A===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let D=!1,B=$;if(o&&K.size(o.dims)>0){if(o.dims.length!==3&&o.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==o.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(o.dims.length===3){if(S!==o.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');B=o.dims[2]}else{if(S!==o.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');B=o.dims[1]*o.dims[3],D=!0}}let P=!1;if(d&&K.size(d.dims)>0)throw new Error("Key padding mask is not supported");if(c&&K.size(c.dims)>0){if(c.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(c.dims[0]!==y||c.dims[1]!==r.numHeads||c.dims[2]!==w||c.dims[3]!==T)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:y,sequenceLength:w,pastSequenceLength:b,kvSequenceLength:S,totalSequenceLength:T,maxSequenceLength:C,inputHiddenSize:0,hiddenSize:$,vHiddenSize:B,headSize:N,vHeadSize:Math.floor(B/r.numHeads),numHeads:r.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:r.maskFilterValue,maskType:A,scale:r.scale,broadcastResPosBias:P,passPastInKv:D,qkvFormat:k}},Ow=e=>Ze({...e}),ip=Ze({perm:[0,2,1,3]}),Cy=(e,r,i,s,o,u,d)=>{let c=[s,o,u],f=K.size(c),m=[{type:12,data:f},{type:12,data:d},{type:12,data:u}],y=w=>{let $=_e("qkv_with_bias",r.dataType,c),S=J("qkv",r.dataType,c),b=J("bias",i.dataType,c),C=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${w.registerUniforms(C).declareVariables(S,b,$)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:c,dataType:r.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:y},{inputs:[r,i],outputs:[-1]})[0]},Uo=(e,r,i,s,o,u,d,c)=>{let f=u;if(d&&K.size(d.dims)>0){if(s===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return f=Cy(e,u,d,r,s,i*o,c),f=f.reshape([r,s,i,o]),i===1||s===1?f:e.compute(gr(f,ip.perm),{inputs:[f],outputs:[-1]})[0]}else return u.dims.length===3&&(f=u.reshape([r,s,i,o])),i===1||s===1?f:e.compute(gr(f,ip.perm),{inputs:[f],outputs:[-1]})[0]},Aw=(e,r)=>{let i=Ty(e.inputs,r),s=e.inputs[0],o=Xt(e.inputs,1),u=Xt(e.inputs,2),d=Xt(e.inputs,3),c=Xt(e.inputs,4),f=Xt(e.inputs,5),m=Xt(e.inputs,6),y=Xt(e.inputs,7);if(s.dims.length===5)throw new Error("Packed QKV is not implemented");if((o==null?void 0:o.dims.length)===5)throw new Error("Packed KV is not implemented");let w=o&&u&&o.dims.length===4&&u.dims.length===4,$=Uo(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,s,d,0);if(w)return Fo(e,$,o,u,c,void 0,m,y,f,i);if(!o||!u)throw new Error("key and value must be provided");let S=Uo(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,o,d,i.hiddenSize),b=Uo(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,u,d,2*i.hiddenSize);Fo(e,$,S,b,c,void 0,m,y,f,i)}}),Iy,zy,Ny,Oy,Bp,Dw,Mw,Bw=ae(()=>{"use strict";Ie(),Re(),mt(),Be(),Iy=e=>{if(!e||e.length<1)throw new Error("too few inputs")},zy=(e,r)=>{let i=[],s=r.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(o=>i.push(Number(o))),s=i.length),Ze({numOutputs:s,axis:r.axis,splitSizes:i})},Ny=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${xe("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Oy=e=>{let r=e.length,i=[];for(let s=0;s<r;++s){let o=e[s].setByIndices("indices","input[global_idx]");r===1?i.push(o):s===0?i.push(`if (output_number == ${s}u) { ${o} }`):s===r-1?i.push(`else { ${o} }`):i.push(`else if (output_number == ${s}) { ${o} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`},Bp=(e,r)=>{let i=e[0].dims,s=K.size(i),o=e[0].dataType,u=K.normalizeAxis(r.axis,i.length),d=new Array(r.numOutputs),c=J("input",o,i.length),f=new Array(r.numOutputs),m=[],y=[],w=0,$=[{type:12,data:s}];for(let b=0;b<r.numOutputs;b++){w+=r.splitSizes[b],f[b]=w;let C=i.slice();C[u]=r.splitSizes[b],y.push(C),d[b]=_e(`output${b}`,o,C.length),m.push({dims:y[b],dataType:e[0].dataType})}$.push({type:12,data:f},...ke(i,...y));let S=b=>`
  ${b.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",f.length).declareVariables(c,...d)}
  ${Ny(f.length)}
  ${Oy(d)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${c.offsetToIndices("global_idx")};
    var index = ${c.indicesGet("indices",u)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${xe("uniforms.size_in_split_axis","output_number - 1u",f.length)};
      ${c.indicesSet("indices",u,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:r.cacheKey,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:m,dispatchGroup:{x:Math.ceil(s/64)},programUniforms:$})}},Dw=(e,r)=>{Iy(e.inputs);let i=e.inputs.length===1?r:zy(e.inputs,r);e.compute(Bp(e.inputs,i),{inputs:[0]})},Mw=e=>{let r=e.axis,i=e.splitSizes,s=e.numOutputs<0?i.length:e.numOutputs;if(s!==i.length)throw new Error("numOutputs and splitSizes length must be equal");return Ze({axis:r,numOutputs:s,splitSizes:i})}}),Ay,Bl,Pw,Lw=ae(()=>{"use strict";Ie(),Re(),mt(),Be(),Ay=(e,r)=>{let[i,s,o,u]=e,{numHeads:d,rotaryEmbeddingDim:c}=r;if(i.dims.length!==3&&i.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!K.areEqual(s.dims,[])&&!K.areEqual(s.dims,[1])&&s.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${s.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(u.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${u.dims.length}`);if(!K.areEqual(o.dims,u.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(c>0&&d===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let f=i.dims[0],m=i.dims[i.dims.length-2],y=o.dims[0],w=K.sizeFromDimension(i.dims,1)/m,$=c===0?o.dims[1]*2:w/d;if(c>$)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(s.dims.length===2){if(f!==s.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${s.dims[0]}`);if(m!==s.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${s.dims[1]}`)}if(m>y)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if($/2!==o.dims[1]&&c/2!==o.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${o.dims[1]}`)},Bl=(e,r)=>{let{interleaved:i,numHeads:s,rotaryEmbeddingDim:o,scale:u}=r,d=e[0].dims[0],c=K.sizeFromDimension(e[0].dims,1),f=e[0].dims[e[0].dims.length-2],m=c/f,y=e[2].dims[1],w=o===0?y*2:m/s,$=new Array(d,f,m/w,w-y),S=K.computeStrides($),b=[{type:1,data:u},{type:12,data:$},{type:12,data:S},...e[0].dims.length===3?new Array({type:12,data:[c,m,w,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[c,w,f*w,1]}):[],...ke(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],C=N=>{let k=J("input",e[0].dataType,e[0].dims.length),T=J("position_ids",e[1].dataType,e[1].dims.length),A=J("cos_cache",e[2].dataType,e[2].dims.length),D=J("sin_cache",e[3].dataType,e[3].dims.length),B=_e("output",e[0].dataType,e[0].dims.length);return N.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:$.length},{name:"global_strides",type:"u32",length:S.length},{name:"input_output_strides",type:"u32",length:S.length}]),`
        ${N.declareVariables(k,T,A,D,B)}

        ${N.mainStart(os)}
          let half_rotary_emb_dim = uniforms.${A.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${N.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${T.broadcastedIndicesToOffset("bsnh.xy",_e("",T.type.tensor,2))};
            let position_id =
                u32(${T.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
            let i = dot(bsnh, uniforms.input_output_strides) + select(0, bsnh[3], ${i});
            let j = i + select(half_rotary_emb_dim, 1, ${i});
            let re = ${k.getByOffset("i")} * ${A.get("position_id","bsnh[3]")} -
                ${k.getByOffset("j")} * ${D.get("position_id","bsnh[3]")};
            ${B.setByOffset("i","re")}
            let im = ${k.getByOffset("i")} * ${D.get("position_id","bsnh[3]")} +
                ${k.getByOffset("j")} * ${A.get("position_id","bsnh[3]")};
            ${B.setByOffset("j","im")}
          } else {
            let k = dot(bsnh, uniforms.input_output_strides) + half_rotary_emb_dim;
            ${B.setByOffset("k",k.getByOffset("k"))}
          }
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ze({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:C,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size($)/os)},programUniforms:b})}},Pw=(e,r)=>{Ay(e.inputs,r),e.compute(Bl(e.inputs,r))}}),Ry,Dy,ap,My,Uw,V$=ae(()=>{"use strict";mt(),Ie(),sf(),Rw(),Bw(),hi(),Lw(),Be(),Ry=(e,r)=>{if(r.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let i=e[0],s=e[1],o=e[2],u=e[3],d=e[4];if(r.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(r.localWindowSize!==-1)throw new Error("Local attention is not supported");if(r.softcap!==0)throw new Error("Softcap is not supported");if(r.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(r.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=!1,f=i.dims[0],m=i.dims[1],y=i.dims.length===3?c?i.dims[2]/3:i.dims[2]:r.numHeads*i.dims[4],w=m,$=0,S=!s||s.dims.length===0,b=Math.floor(S?y/(r.numHeads+2*r.kvNumHeads):y/r.numHeads);S&&(y=b*r.numHeads);let C=u&&u.dims.length!==0,N=d&&d.dims.length!==0;if(C&&u.dims.length===4&&u.dims[0]===f&&u.dims[1]!==r.kvNumHeads&&u.dims[2]===r.kvNumHeads&&u.dims[3]===b)throw new Error("BSNH pastKey/pastValue is not supported");if(C&&N){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');$=u.dims[2]}else if(C||N)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let k=1;if(s&&s.dims.length>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(s.dims.length<3||s.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(s.dims.length===3){if(i.dims[2]%s.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');w=s.dims[1]}else if(s.dims.length===5){if(s.dims[2]!==r.numHeads||s.dims[3]!==2||s.dims[4]!==b)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(o)throw new Error('Expect "value" be none when "key" has packed kv format.');w=s.dims[1]}else{if(s.dims[1]!==r.numHeads||s.dims[3]!==b)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');w=s.dims[2]}}else{if(i.dims.length!==3&&i.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(i.dims.length===5&&(i.dims[2]!==r.numHeads||i.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');k=3}let T=0,A=!1,D=r.kvNumHeads?b*r.kvNumHeads:y;if(o&&o.dims.length>0){if(o.dims.length!==3&&o.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==o.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(o.dims.length===3){if(w!==o.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');D=o.dims[2]}else{if(w!==o.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');D=o.dims[1]*o.dims[3],A=!0}}let B=e.length>4?e[5]:void 0;if(B){if(B.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let P=B.dims.reduce((V,I)=>V*I,1);if(P!==f)throw new Error(`seqlens_k must have batch_size (${f}) elements, got ${P}.`);for(let V=0;V<B.dims.length;V++)if(B.dims[V]!==1&&B.dims[V]!==f)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${f}), got dims[${V}] = ${B.dims[V]}.`)}return{batchSize:f,sequenceLength:m,pastSequenceLength:$,kvSequenceLength:w,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:y,vHiddenSize:D,headSize:b,vHeadSize:Math.floor(D/r.kvNumHeads),numHeads:r.numHeads,kvNumHeads:r.kvNumHeads,nReps:r.numHeads/r.kvNumHeads,pastPresentShareBuffer:!1,maskType:T,scale:r.scale,broadcastResPosBias:!1,passPastInKv:A,qkvFormat:k}},Dy=Ze({perm:[0,2,1,3]}),ap=(e,r,i)=>{let s=r,o=i.kvNumHeads;return r.dims.length===3&&i.kvSequenceLength!==0&&(s=r.reshape([i.batchSize,i.kvSequenceLength,o,i.headSize]),s=e.compute(gr(s,Dy.perm),{inputs:[s],outputs:[-1]})[0]),s},My=(e,r,i,s)=>{let o=7,u=["type","type"],d=[e*r],c=e*r,f=[{type:12,data:c},{type:12,data:r},{type:12,data:e}],m=y=>{let w=J("seq_lens",i.dataType,i.dims),$=J("total_seq_lens",s.dataType,s.dims),S=_e("pos_ids",o,d),b=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
  ${y.registerUniforms(b).declareVariables(w,$,S)}
  ${y.mainStart()}
    ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let total_sequence_length = u32(${$.getByOffset("0")});
    let is_subsequent_prompt = uniforms.sequence_length > 1 && uniforms.sequence_length != total_sequence_length;
    let is_first_prompt = !is_subsequent_prompt && uniforms.sequence_length == total_sequence_length;
    let batch_idx = global_idx / uniforms.sequence_length;
    let sequence_idx = i32(global_idx % uniforms.sequence_length);
    var pos_id: i32 = 0;
    let seqlen = ${w.getByOffset("batch_idx")};
    let total_seqlen = seqlen + 1;
    if (is_first_prompt) {
      if (sequence_idx < total_seqlen) {
        pos_id = sequence_idx;
      } else {
        pos_id = 1;
      }
      ${S.setByOffset("global_idx","pos_id")}
    } else if (is_subsequent_prompt) {
      let past_seqlen = total_seqlen - i32(uniforms.sequence_length);
      if (past_seqlen + sequence_idx < total_seqlen) {
        pos_id = past_seqlen + sequence_idx;
      } else {
        pos_id = 1;
      }
      ${S.setByOffset("global_idx","pos_id")}
    } else if (global_idx < uniforms.batch_size) {
      ${S.setByOffset("global_idx","seqlen")}
    };
  }
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${r}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:d,dataType:o}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f}),getShaderSource:m}},Uw=(e,r)=>{var D;if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw new Error("GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.");let i=Ry(e.inputs,r);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((D=e.inputs[1])==null?void 0:D.dims.length)===5)throw new Error("Packed KV is not implemented");let s=e.inputs[0],o=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,u=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,d=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,c=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,f=e.inputs.length>4?e.inputs[5]:void 0,m=e.inputs.length>5?e.inputs[6]:void 0,y=i.kvNumHeads?i.kvNumHeads:i.numHeads,w=Ze({axis:2,numOutputs:3,splitSizes:[i.numHeads*i.headSize,y*i.headSize,y*i.headSize]}),[$,S,b]=!o&&!u?e.compute(Bp([s],w),{inputs:[s],outputs:[-1,-1,-1]}):[s,o,u],C,N;if(r.doRotary){let B=e.compute(My(i.batchSize,i.sequenceLength,f,m),{inputs:[f,m],outputs:[-1]})[0],P=e.inputs[7],V=e.inputs[8],I=Ze({interleaved:r.rotaryInterleaved!==0,numHeads:i.numHeads,rotaryEmbeddingDim:0,scale:r.scale}),X=[$,B,P,V],te=[-1];C=e.compute(Bl(X,I),{inputs:X,outputs:te})[0],X.splice(0,1,S);let me=Ze({interleaved:r.rotaryInterleaved!==0,numHeads:i.kvNumHeads,rotaryEmbeddingDim:0,scale:r.scale});N=e.compute(Bl(X,me),{inputs:X,outputs:te})[0]}let k=Uo(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,r.doRotary?C:$,void 0,0),T=ap(e,r.doRotary?N:S,i),A=ap(e,b,i);Fo(e,k,T,A,void 0,void 0,d,c,void 0,i,f,m)}}),sp,By,Py,jw,F$=ae(()=>{"use strict";Ie(),Re(),hi(),Be(),sp=(e,r,i,s,o,u,d,c)=>{let f=ht(u),m=f===1?"f32":`vec${f}f`,y=f===1?"vec2f":`mat2x${f}f`,w=o*d,$=64;w===1&&($=256);let S=[o,d,u/f],b=[o,d,2],C=["rank","type","type"],N=[];N.push(...ke(S,b));let k=T=>{let A=J("x",r.dataType,3,f),D=J("scale",i.dataType,i.dims),B=J("bias",s.dataType,s.dims),P=_e("output",1,3,2),V=[A,D,B,P];return`
  var<workgroup> workgroup_shared : array<${y}, ${$}>;
  const workgroup_size = ${$}u;
  ${T.declareVariables(...V)}
  ${T.mainStart($)}
    let batch = workgroup_index / uniforms.x_shape[1];
    let channel = workgroup_index % uniforms.x_shape[1];
    let hight = uniforms.x_shape[2];
    // initialize workgroup memory
    var sum = ${m}(0);
    var squared_sum = ${m}(0);
    for (var h = local_idx; h < hight; h += workgroup_size) {
      let value = ${m}(${A.get("batch","channel","h")});
      sum += value;
      squared_sum += value * value;
    }
    workgroup_shared[local_idx] = ${y}(sum, squared_sum);
    workgroupBarrier();

    for (var currSize = workgroup_size >> 1;  currSize > 0; currSize = currSize >> 1) {
      if (local_idx < currSize) {
        workgroup_shared[local_idx] = workgroup_shared[local_idx] + workgroup_shared[local_idx + currSize];
      }
      workgroupBarrier();
    }
    if (local_idx == 0) {
      let sum_final = ${fi("workgroup_shared[0][0]",f)} / f32(hight * ${f});
      let squared_sum_final = ${fi("workgroup_shared[0][1]",f)} / f32(hight * ${f});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${c}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${f};${c};${$}`,inputDependencies:C},getRunData:()=>({outputs:[{dims:b,dataType:1}],dispatchGroup:{x:w},programUniforms:N}),getShaderSource:k},{inputs:[r,i,s],outputs:[-1]})[0]},By=(e,r,i)=>{let s=r[0].dims,o=s,u=2,d=s[0],c=s[1],f=K.sizeFromDimension(s,u),m=ht(f),y=K.size(o)/m,w=sp(e,r[0],r[1],r[2],d,f,c,i.epsilon),$=[d,c,f/m],S=[d,c],b=["type","none"],C=N=>{let k=J("x",r[0].dataType,$.length,m),T=J("scale_shift",1,S.length,2),A=_e("output",r[0].dataType,$.length,m),D=[k,T,A];return`
  ${N.registerUniform("output_size","u32").declareVariables(...D)}
  ${N.mainStart()}
  ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${A.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${T.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${k.getByOffset("global_idx")} * ${A.type.value}(scale_shift.x) + ${A.type.value}(scale_shift.y);
      ${A.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${m}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:o,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...ke($,S,$)]}),getShaderSource:C},{inputs:[r[0],w]})},Py=(e,r,i)=>{let s=r[0].dims,o=s,u=s[0],d=s[s.length-1],c=K.sizeFromDimension(s,1)/d,f=ht(d),m=K.size(o)/f,y=[{type:12,data:c},{type:12,data:Math.floor(d/f)}],w=["type","type"],$=!1,S=[0,s.length-1];for(let k=0;k<s.length-2;k++)$=$||s[k+1]!==1,S.push(k+1);$=$&&s[s.length-1]!==1;let b=$?e.compute(gr(e.inputs[0],S),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:s.length},(k,T)=>s[S[T]])),C=sp(e,b,r[1],r[2],u,c,d,i.epsilon),N=k=>{let T=Ct(r[0].dataType),A=f===1?"vec2f":`mat${f}x2f`,D=V=>{let I=V===0?"x":"y",X=f===1?"f32":`vec${f}f`;switch(f){case 1:return`${T}(${X}(scale.${I}))`;case 2:return`vec2<${T}>(${X}(scale[0].${I}, scale[1].${I}))`;case 4:return`vec4<${T}>(${X}(scale[0].${I}, scale[1].${I}, scale[2].${I}, scale[3].${I}))`;default:throw new Error(`Not supported compoents ${f}`)}},B=J("input",r[0].dataType,r[0].dims,f),P=_e("output",r[0].dataType,o,f);return`
  @group(0) @binding(0) var<storage, read> input : array<${B.type.storage}>;
  @group(0) @binding(1) var<storage, read> scale_input : array<${A}>;
  @group(0) @binding(2) var<storage, read_write> output : array<${P.type.storage}>;
  struct Uniforms {H: u32, C : u32};
  @group(0) @binding(3) var<uniform> uniforms: Uniforms;

  ${k.mainStart()}
    let current_image_number = global_idx / (uniforms.C * uniforms.H);
    let current_channel_number = global_idx % uniforms.C;

    let scale_offset = current_image_number * uniforms.C + current_channel_number;
    let scale = scale_input[scale_offset];
    output[global_idx] = fma(input[global_idx], ${D(0)}, ${D(1)});
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${f}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:o,dataType:r[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:y}),getShaderSource:N},{inputs:[r[0],C]})},jw=(e,r)=>{r.format==="NHWC"?Py(e,e.inputs,r):By(e,e.inputs,r)}}),Ly,Uy,Ww,q$=ae(()=>{"use strict";Ie(),Re(),Be(),Ly=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Uy=(e,r,i)=>{let s=r.simplified,o=e[0].dims,u=e[1],d=!s&&e[2],c=o,f=K.normalizeAxis(r.axis,o.length),m=K.sizeToDimension(o,f),y=K.sizeFromDimension(o,f),w=K.size(u.dims),$=d?K.size(d.dims):0;if(w!==y||d&&$!==y)throw new Error(`Size of X.shape()[axis:] == ${y}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${w} and bias size of ${$}`);let S=[];for(let B=0;B<o.length;++B)B<f?S.push(o[B]):S.push(1);let b=ht(y),C=["type","type"],N=[{type:12,data:m},{type:1,data:y},{type:12,data:Math.floor(y/b)},{type:1,data:r.epsilon}];d&&C.push("type");let k=i>1,T=i>2,A=B=>{let P=Ct(e[0].dataType),V=[J("x",e[0].dataType,e[0].dims,b),J("scale",u.dataType,u.dims,b)];d&&V.push(J("bias",d.dataType,d.dims,b)),V.push(_e("output",e[0].dataType,c,b)),k&&V.push(_e("mean_data_output",1,S)),T&&V.push(_e("inv_std_output",1,S));let I=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${B.registerUniforms(I).declareVariables(...V)}
  ${B.mainStart()}
    ${B.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Cp("f32",b)};
    var mean_square_vector = ${Cp("f32",b)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${as(P,b,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${fi("mean_vector",b)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${fi("mean_square_vector",b)} / uniforms.norm_size ${s?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${as(P,b,"x[j + offset]")};
      let f32scale = ${as(P,b,"scale[j]")};
      output[j + offset] = ${V[0].type.value}((f32input ${s?"":"- mean"}) * inv_std_dev * f32scale
        ${d?`+ ${as(P,b,"bias[j]")}`:""}
      );
    }

    ${k?"mean_data_output[global_idx] = mean":""};
    ${T?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},D=[{dims:c,dataType:e[0].dataType}];return k&&D.push({dims:S,dataType:1}),T&&D.push({dims:S,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${b};${i};${s}`,inputDependencies:C},getRunData:()=>({outputs:D,dispatchGroup:{x:Math.ceil(m/64)},programUniforms:N}),getShaderSource:A}},Ww=(e,r)=>{Ly(e.inputs),e.compute(Uy(e.inputs,r,e.outputCount))}}),jy,Vw,H$=ae(()=>{"use strict";Re(),cf(),pf(),jy=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Vw=e=>{jy(e.inputs);let r=ss.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!r)throw new Error("Can't use matmul on the given tensors");let i=r[r.length-1],s=e.inputs[0].dims[e.inputs[0].dims.length-1];if(i<8&&s<8)e.compute(df(e.inputs,{activation:""},r));else{let o=r[r.length-2],u=K.size(e.inputs[0].dims.slice(0,-2)),d=K.size(e.inputs[1].dims.slice(0,-2));if(u!==1&&o===1&&d===1){let c=e.inputs[0].reshape([1,u,s]),f=e.inputs[1].reshape([1,s,i]),m=[1,u,i],y=[c,f];e.compute(Ml(y,{activation:""},r,m),{inputs:y})}else e.compute(Ml(e.inputs,{activation:""},r))}}}),Wy,Vy,Fy,Fw,qw,G$=ae(()=>{"use strict";Ie(),Re(),mt(),Be(),Wy=(e,r)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let i=e[0],s=i.dims.length;if(i.dims[s-1]!==r.k)throw new Error("The last dim of input shape does not match the k value");let o=Math.floor((r.k+r.blockSize-1)/r.blockSize),u=r.blockSize/8*r.bits,d=e[1];if(!K.areEqual(d.dims,[r.n,o,u]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let c=e[2].dims;if(K.size(c)!==r.n*o)throw new Error("scales input size error.");if(e.length===4){let f=e[3].dims,m=r.n*(r.bits===8?o:Math.floor((o*r.bits+7)/8));if(K.size(f)!==m)throw new Error("zeroPoints input size error.")}},Vy=(e,r)=>{let i=e[0].dims,s=i.length,o=i[s-2],u=r.k,d=r.n,c=i.slice(0,s-2),f=K.size(c),m=e[1].dims[2]/4,y=e[0].dataType,w=ht(r.k),$=ht(m),S=ht(d),b=c.concat([o,d]),C=o>1&&d/S%2===0?2:1,N=K.size(b)/S/C,k=64,T=[],A=[f,o,u/w],D=K.convertShape(e[1].dims).slice();D.splice(-1,1,m/$),T.push(...ke(A)),T.push(...ke(D)),T.push(...ke(e[2].dims)),e.length===4&&T.push(...ke(K.convertShape(e[3].dims)));let B=[f,o,d/S];T.push(...ke(B));let P=V=>{let I=A.length,X=J("a",e[0].dataType,I,w),te=J("b",12,D.length,$),me=J("scales",e[2].dataType,e[2].dims.length),de=[X,te,me],pe=e.length===4?J("zero_points",12,e[3].dims.length):void 0;pe&&de.push(pe);let G=B.length,he=_e("output",e[0].dataType,G,S),ye=Ct(e[0].dataType),ge=(()=>{switch(w){case 1:return`array<${ye}, 8>`;case 2:return`mat4x2<${ye}>`;case 4:return`mat2x4<${ye}>`;default:throw new Error(`${w}-component is not supported.`)}})(),ee=Math.floor(32/r.bits),re=Math.floor(ee/8),ue=()=>{let ne="";for(let Q=0;Q<re;Q++){let we=Q*r.bits*4,Se=we+r.bits;ne+=`
          // reuse a data (pass ${Q})
            var input_offset${Q>0?Q:""} = ${Q===0?X.indicesToOffset(`${X.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${Q>0?Q:""}: ${ge};
            for (var j${Q>0?Q:""}: u32 = 0; j${Q>0?Q:""} < ${8/w}; j${Q>0?Q:""}++) {
              a_data${Q>0?Q:""}[j${Q>0?Q:""}] = ${X.getByOffset(`input_offset${Q>0?Q:""}`)};
              input_offset${Q>0?Q:""}++;
            }
          `;for(let Te=0;Te<S*C;Te++)ne+=`
            b_value = ${$===1?`b${Te}_data`:`b${Te}_data[i]`};
            ${r.bits===2?`{
              let half_word = b_value >> ${Q*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${we}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${Se}u) & b_mask);`}
            b_quantized_values = ${ge}(${Array.from({length:4},(ze,Pe)=>`${ye}(b_value_lower[${Pe}]), ${ye}(b_value_upper[${Pe}])`).join(", ")});
            b_dequantized_values = ${w===1?`${ge}(${Array.from({length:8},(ze,Pe)=>`(b_quantized_values[${Pe}] - ${pe?`zero_point${Te}`:"zero_point"}) * scale${Te}`).join(", ")});`:`(b_quantized_values - ${ge}(${Array(8).fill(`${pe?`zero_point${Te}`:"zero_point"}`).join(",")})) * scale${Te};`};
            workgroup_shared[local_id.x * ${C} + ${Math.floor(Te/S)}]${S>1?`[${Te%S}]`:""} += ${Array.from({length:8/w},(ze,Pe)=>`${w===1?`a_data${Q>0?Q:""}[${Pe}] * b_dequantized_values[${Pe}]`:`dot(a_data${Q>0?Q:""}[${Pe}], b_dequantized_values[${Pe}])`}`).join(" + ")};
          `}return ne},O=()=>{let ne=`
            var col_index = col * ${S};
            ${pe?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/r.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,r.bits-1)} for unsigned ${r.bits}-bit quantization.
            let zero_point = ${ye}(${Math.pow(2,r.bits-1).toFixed(1)});`}
            `;for(let Q=0;Q<S*C;Q++)ne+=`
            let scale${Q} = ${me.getByOffset("col_index * nBlocksPerCol + block")};
            ${pe?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${r.bits}u);
            zero_point_word = ${pe.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${Q} = ${ye}((zero_point_word) & ${r.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return ne},F=()=>{let ne=`col_index = col * ${S};`;for(let Q=0;Q<S*C;Q++)ne+=`
            let b${Q}_data = ${te.getByIndices(`${te.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return ne+=`
            var b_value: u32;
            let b_mask: u32 = ${r.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ge};
            var b_dequantized_values: ${ge};`,ne};return`
        var<workgroup> workgroup_shared: array<${he.type.value}, ${C*k}>;
        ${V.declareVariables(...de,he)}
        ${V.mainStart([k,1,1])}
          let output_indices = ${he.offsetToIndices(`(global_idx / ${k}) * ${C}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${k}) {
            //process one block
            var word_offset: u32 = block * ${r.blockSize/w};
            ${O()}
            for (var word: u32 = 0; word < ${m}; word += ${$}) {
              ${F()}
              for (var i: u32 = 0; i < ${$}; i++) {
                ${ue()}
                word_offset += ${ee/w};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${C}) {
            var output_value: ${he.type.value} = ${he.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${k}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${C};
            }
            ${he.setByIndices(`${he.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${r.blockSize};${r.bits};${w};${$};${S};${C};${k}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:b,dataType:y}],dispatchGroup:{x:N},programUniforms:T}),getShaderSource:P}},Fy=(e,r)=>{let i=e[0].dims,s=i.length,o=i[s-2],u=r.k,d=r.n,c=i.slice(0,s-2),f=K.size(c),m=e[1].dims[2]/4,y=e[0].dataType,w=ht(r.k),$=ht(m),S=c.concat([o,d]),b=128,C=d%8===0?8:d%4===0?4:1,N=b/C,k=Math.floor(32/r.bits),T=N*$*k,A=T/w,D=T/r.blockSize,B=K.size(S)/C,P=[],V=[f,o,u/w],I=K.convertShape(e[1].dims).slice();I.splice(-1,1,m/$),P.push(...ke(V)),P.push(...ke(I)),P.push(...ke(e[2].dims)),e.length===4&&P.push(...ke(K.convertShape(e[3].dims)));let X=[f,o,d];P.push(...ke(X));let te=me=>{let de=V.length,pe=J("a",e[0].dataType,de,w),G=J("b",12,I.length,$),he=J("scales",e[2].dataType,e[2].dims.length),ye=[pe,G,he],ge=e.length===4?J("zero_points",12,e[3].dims.length):void 0;ge&&ye.push(ge);let ee=X.length,re=_e("output",e[0].dataType,ee),ue=Ct(e[0].dataType),O=()=>{switch(w){case 1:return`
          let a_data0 = vec4<${ue}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${ue}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${ue}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${ue}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${w}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${pe.type.value}, ${A}>;
        var<workgroup> inter_results: array<array<${re.type.value}, ${N}>, ${C}>;
        ${me.declareVariables(...ye,re)}
        ${me.mainStart([N,C,1])}
          let output_indices = ${re.offsetToIndices(`workgroup_index * ${C}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let n_blocks_per_col = uniforms.b_shape[1];
          let num_tiles =  (n_blocks_per_col - 1) / ${D} + 1;

          // Loop over shared dimension.
          for (var tile: u32 = 0; tile < num_tiles; tile += 1) {
            let a_col_start = tile * ${A};
            // load one tile A data into shared memory.
            for (var a_offset = local_idx; a_offset < ${A}; a_offset += ${b})
            {
              let a_col = a_col_start + a_offset;
              if (a_col < uniforms.a_shape[2])
              {
                sub_a[a_offset] = ${pe.getByIndices(`${pe.type.indices}(batch, row, a_col)`)};
              } else {
                sub_a[a_offset] = ${pe.type.value}(0);
              }
            }
            workgroupBarrier();

            // each thread process one block
            let b_row = col + local_id.y;
            let block = tile * ${D} + local_id.x;
            ${ge?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/r.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${r.bits}u);
            let zero_point_word = ${ge.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${ue}((zero_point_word) & ${r.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,r.bits-1)} for unsigned ${r.bits}-bit quantization.
            let zero_point = ${ue}(${Math.pow(2,r.bits-1).toFixed(1)});`}
            let scale = ${he.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${G.getByIndices(`${G.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${r.blockSize/w};
            for (var i: u32 = 0; i < ${$}; i++) {
              let b_value = ${$===1?"b_data":"b_data[i]"};
              ${(()=>{let F=Math.floor(k/8),ne="";for(let Q=0;Q<F;Q++){let we=Q*r.bits*4,Se=we+r.bits;ne+=`
              ${O()}
              {${r.bits===2?`
                let half_word = b_value >> ${Q*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${we}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${Se}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${ue}>(${Array.from({length:4},(Te,ze)=>`${ue}(b_value_lower[${ze}]), ${ue}(b_value_upper[${ze}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${ue}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Te,ze)=>`${`dot(a_data${ze}, b_dequantized_values[${ze}])`}`).join(" + ")};
              }
              word_offset += ${8/w};`}return ne})()}
            }
            workgroupBarrier();
          }

          if (local_idx < ${C}) {
            var output_value: ${re.type.value} = ${re.type.value}(0);
            for (var b = 0u; b < ${N}; b++) {
              output_value += inter_results[local_idx][b];
            }
            if (col + local_idx < uniforms.output_shape[2])
            {
              ${re.setByIndices(`${re.type.indices}(batch, row, col + local_idx)`,"output_value")}
            }
          }
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${r.blockSize};${w};${$};${N};${C}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:S,dataType:y}],dispatchGroup:{x:B},programUniforms:P}),getShaderSource:te}},Fw=(e,r)=>{Wy(e.inputs,r),r.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Fy(e.inputs,r)):e.compute(Vy(e.inputs,r))},qw=e=>Ze(e)}),qy,Hy,Gy,Ky,Qy,Zy,Yy,Xy,Hw,K$=ae(()=>{"use strict";Ie(),Re(),Be(),qy=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let r=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(r=e[3].dims[0]*2===e[1].dims[0]),!r)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},Hy=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
            k = i32(${e.indicesGet("indices",o)}) - ${xe("uniforms.pads",o,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${xe("uniforms.x_shape",o,r)})) {
              break;
            }
            offset += k * i32(${xe("uniforms.x_strides",o,r)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${s}
            value = x[offset];
          }
      `},Gy=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${xe("uniforms.pads",o,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${xe("uniforms.x_shape",o,r)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${xe("uniforms.x_shape",o,r)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${xe("uniforms.x_strides",o,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},Ky=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${xe("uniforms.pads",o,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${xe("uniforms.x_shape",o,r)})) {
                  k = i32(${xe("uniforms.x_shape",o,r)}) - 1;
                }
                offset += k * i32(${xe("uniforms.x_strides",o,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},Qy=(e,r,i)=>{let s="";for(let o=r-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${xe("uniforms.pads",o,i)};
                if (k < 0)  {
                  k += i32(${xe("uniforms.x_shape",o,r)}]);
                }
                if (k >= i32(${xe("uniforms.x_shape",o,r)})) {
                  k -= i32(${xe("uniforms.x_shape",o,r)});
                }
                offset += k * i32(${xe("uniforms.x_strides",o,r)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},Zy=(e,r,i)=>{switch(i.mode){case 0:return Hy(e,r,i.pads.length);case 1:return Gy(e,r,i.pads.length);case 2:return Ky(e,r,i.pads.length);case 3:return Qy(e,r,i.pads.length);default:throw new Error("Invalid mode")}},Yy=(e,r)=>{let i=K.padShape(e[0].dims.slice(),r.pads),s=e[0].dims,o=K.size(i),u=[{type:12,data:o},{type:6,data:r.pads}],d=e.length>=3&&e[2].data;r.mode===0&&u.push({type:d?e[2].dataType:1,data:r.value}),u.push(...ke(e[0].dims,i));let c=["rank"],f=m=>{let y=_e("output",e[0].dataType,i.length),w=J("x",e[0].dataType,s.length),$=w.type.value,S=Zy(y,s.length,r),b=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:r.pads.length}];return r.mode===0&&b.push({name:"constant_value",type:d?$:"f32"}),`
            ${m.registerUniforms(b).declareVariables(w,y)}
            ${m.mainStart()}
            ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${y.offsetToIndices("global_idx")};

            var value = ${$}(0);
            ${S}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${r.mode}${d}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size(i)/64)},programUniforms:u}),getShaderSource:f}},Xy=(e,r)=>{if(e.length>1){let i=e[1].getBigInt64Array(),s=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,o=e[0].dims.length,u=new Int32Array(2*o).fill(0);if(e.length>=4){let c=e[3].getBigInt64Array();for(let f=0;f<c.length;f++)u[Number(c[f])]=Number(i[f]),u[Number(c[f])+o]=Number(i[f+c.length])}else i.forEach((c,f)=>u[Number(f)]=Number(c));let d=[];return u.forEach(c=>d.push(c)),{mode:r.mode,value:s,pads:d}}else return r},Hw=(e,r)=>{qy(e.inputs);let i=Xy(e.inputs,r);e.compute(Yy(e.inputs,i),{inputs:[0]})}}),Ao,op,up,lp,dp,Jy,e0,cp,pp,Gw,Kw,fp,Qw,Zw,hp,Yw,Xw,Jw,e_,Q$=ae(()=>{"use strict";yr(),Ie(),Re(),Be(),Ao=e=>{if(dt.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},op=(e,r,i)=>{let s=r.format==="NHWC",o=e.dims.slice();s&&o.splice(1,0,o.pop());let u=Object.hasOwnProperty.call(r,"dilations"),d=r.kernelShape.slice(),c=r.strides.slice(),f=u?r.dilations.slice():[],m=r.pads.slice();Rl.adjustPoolAttributes(i,o,d,c,f,m);let y=Rl.computePoolOutputShape(i,o,c,f,d,m,r.autoPad,r.ceilMode),w=Object.assign({},r);u?Object.assign(w,{kernelShape:d,strides:c,pads:m,dilations:f,cacheKey:r.cacheKey}):Object.assign(w,{kernelShape:d,strides:c,pads:m,cacheKey:r.cacheKey});let $=y.slice();return $.push($.splice(1,1)[0]),[w,s?$:y]},up=(e,r)=>{let i=r.format==="NHWC",s=K.size(e),o=K.size(r.kernelShape),u=[{type:12,data:s},{type:12,data:o}],d=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(r.kernelShape.length<=2){let c=r.kernelShape[r.kernelShape.length-1],f=r.strides[r.strides.length-1],m=r.pads[r.pads.length/2-1],y=r.pads[r.pads.length-1],w=!!(m+y);u.push({type:12,data:c},{type:12,data:f},{type:12,data:m},{type:12,data:y}),d.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let $=!1;if(r.kernelShape.length===2){let S=r.kernelShape[r.kernelShape.length-2],b=r.strides[r.strides.length-2],C=r.pads[r.pads.length/2-2],N=r.pads[r.pads.length-2];$=!!(C+N),u.push({type:12,data:S},{type:12,data:b},{type:12,data:C},{type:12,data:N}),d.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[u,d,!0,w,$]}else{if(i)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let c=K.computeStrides(r.kernelShape);u.push({type:12,data:c},{type:12,data:r.pads},{type:12,data:r.strides}),d.push({name:"kernelStrides",type:"u32",length:c.length},{name:"pads",type:"u32",length:r.pads.length},{name:"strides",type:"u32",length:r.strides.length});let f=r.pads.reduce((m,y)=>m+y);return[u,d,!!f,!1,!1]}},lp=(e,r,i,s,o,u,d,c,f,m,y,w)=>{let $=o.format==="NHWC",S=r.type.value,b=_e("output",r.type.tensor,s);if(o.kernelShape.length<=2){let C="",N="",k="",T=i-($?2:1);if(y?C=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${T}] < 0 || xIndices[${T}]
                      >= uniforms.x_shape[${T}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${r.indicesToOffset("xIndices")}];
                  ${u}
                }`:C=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${T}] = indices[${T}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${r.indicesToOffset("xIndices")}];
                  ${u}
                }`,o.kernelShape.length===2){let A=i-($?3:2);w?N=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${A}] = indices[${A}] * uniforms.sh - uniforms.phStart + j;
                  if (xIndices[${A}] < 0 || xIndices[${A}] >= uniforms.x_shape[${A}]) {
                    pad += i32(uniforms.kw);
                    continue;
                  }
              `:N=`
                for (var j: u32 = 0u; j < uniforms.kh; j++) {
                  xIndices[${A}] = indices[${A}] * uniforms.sh - uniforms.phStart + j;
                `,k=`
              }
            `}return`
            ${e.registerUniforms(f).declareVariables(r,b)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

              let indices = ${b.offsetToIndices("global_idx")};
              var xIndices = ${b.offsetToIndices("global_idx")};

              var value = ${S}(${c});
              var pad = 0;
              ${N}
              ${C}
              ${k}
              ${d}

              output[global_idx] = value;
            }`}else{if($)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let C=o.kernelShape.length,N=o.pads.length,k="";return m?k=`
                if (xIndices[j] >= uniforms.x_shape[j]) {
                  pad++;
                  isPad = true;
                  break;
                }
              }
              if (!isPad) {
                let x_val = x[${r.indicesToOffset("xIndices")}];
                ${u}
              }`:k=`
              }
              let x_val = x[${r.indicesToOffset("xIndices")}];
              ${u}
            `,`
            ${e.registerUniforms(f).declareVariables(r,b)}

            ${e.mainStart()}
              ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
              let indices = ${b.offsetToIndices("global_idx")};
              var xIndices = ${b.offsetToIndices("global_idx")};

              var offsets: array<u32, ${C}>;

              var value = ${S}(${c});
              var pad = 0;
              var isPad = false;

              for (var i: u32 = 0u; i < uniforms.kernelSize; i++) {
                var offset = i;
                for (var j = 0u; j < ${C-1}u; j++) {
                  offsets[j] = offset / ${xe("uniforms.kernelStrides","j",C)};
                  offset -= offsets[j] * ${xe("uniforms.kernelStrides","j",C)};
                }
                offsets[${C-1}] = offset;

                isPad = false;
                for (var j = ${i-C}u; j < ${i}u; j++) {
                  xIndices[j] = indices[j] * ${xe("uniforms.strides",`j - ${i-C}u`,C)}
                    + offsets[j - ${i-C}u] - ${xe("uniforms.pads","j - 2u",N)};
                  ${k}
              }
              ${d}

              output[global_idx] = value;
            }`}},dp=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Jy=e=>`${dp(e)};${e.countIncludePad}`,e0=e=>`${dp(e)};${e.storageOrder};${e.dilations}`,cp=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),pp=(e,r,i,s)=>{let[o,u]=op(r,s,i),d=J("x",r.dataType,r.dims.length),c=d.type.value,f="value += x_val;",m="";o.countIncludePad?m+=`value /= ${c}(uniforms.kernelSize);`:m+=`value /= ${c}(i32(uniforms.kernelSize) - pad);`;let[y,w,$,S,b]=up(u,o);y.push(...ke(r.dims,u));let C=["rank"];return{name:e,shaderCache:{hint:`${s.cacheKey};${$};${S};${b}`,inputDependencies:C},getRunData:()=>({outputs:[{dims:u,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(K.size(u)/64)},programUniforms:y}),getShaderSource:N=>lp(N,d,r.dims.length,u.length,o,f,m,0,w,$,S,b)}},Gw=e=>{let r=e.count_include_pad!==0,i=cp(e);if(i.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel");let s={countIncludePad:r,...i,cacheKey:""};return{...s,cacheKey:Jy(s)}},Kw=(e,r)=>{Ao(e.inputs),e.compute(pp("AveragePool",e.inputs[0],!1,r))},fp={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Qw=e=>{let r=e.format;return{format:r,...fp,cacheKey:r}},Zw=(e,r)=>{Ao(e.inputs),e.compute(pp("GlobalAveragePool",e.inputs[0],!0,r))},hp=(e,r,i,s)=>{let[o,u]=op(r,s,i),d=`
      value = max(x_val, value);
    `,c="",f=J("x",r.dataType,r.dims.length),m=["rank"],[y,w,$,S,b]=up(u,o);return y.push(...ke(r.dims,u)),{name:e,shaderCache:{hint:`${s.cacheKey};${$};${S};${b}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:u,dataType:r.dataType}],dispatchGroup:{x:Math.ceil(K.size(u)/64)},programUniforms:y}),getShaderSource:C=>lp(C,f,r.dims.length,u.length,o,d,c,r.dataType===10?-65504:-1e5,w,$,S,b)}},Yw=(e,r)=>{Ao(e.inputs),e.compute(hp("MaxPool",e.inputs[0],!1,r))},Xw=e=>{let r=e.storage_order,i=e.dilations,s=cp(e);if(r!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(s.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel");let o={storageOrder:r,dilations:i,...s,cacheKey:""};return{...o,cacheKey:e0(o)}},Jw=e=>{let r=e.format;return{format:r,...fp,cacheKey:r}},e_=(e,r)=>{Ao(e.inputs),e.compute(hp("GlobalMaxPool",e.inputs[0],!0,r))}}),t0,r0,t_,r_,Z$=ae(()=>{"use strict";Ie(),Re(),mt(),Be(),t0=(e,r)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((i,s)=>i===e[2].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(r.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((o,u)=>u===r.axis||o===e[0].dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let i=e[0].dims[r.axis],s=e[1].dims[r.axis];if(r.blockSize<Math.ceil(i/s)||r.blockSize>Math.ceil(i/(s-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},r0=(e,r)=>{let i=K.normalizeAxis(r.axis,e[0].dims.length),s=e[0].dataType,o=s===3,u=e[0].dims,d=e[1].dataType,c=K.size(u),f=s===3||s===2,m=f?[Math.ceil(K.size(e[0].dims)/4)]:e[0].dims,y=e[1].dims,w=e.length>2?e[2]:void 0,$=w?f?[Math.ceil(K.size(w.dims)/4)]:w.dims:void 0,S=y.length===0||y.length===1&&y[0]===1,b=S===!1&&y.length===1,C=ht(c),N=S&&(!f||C===4),k=N?C:1,T=N&&!f?C:1,A=J("input",f?12:s,m.length,T),D=J("scale",d,y.length),B=w?J("zero_point",f?12:s,$.length):void 0,P=_e("output",d,u.length,k),V=[A,D];B&&V.push(B);let I=[m,y];w&&I.push($);let X=[{type:12,data:c/k},{type:12,data:i},{type:12,data:r.blockSize},...ke(...I,u)],te=me=>{let de=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${me.registerUniforms(de).declareVariables(...V,P)}
      ${me.mainStart()}
          ${me.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let output_indices = ${P.offsetToIndices("global_idx")};

          // Set input x
          ${f?`
            let input = ${A.getByOffset("global_idx / 4")};
            let x_vec = ${o?"unpack4xI8(input)":"unpack4xU8(input)"};
            let x_value = ${k===1?"x_vec[global_idx % 4]":"x_vec"};`:`let x_value = ${A.getByOffset("global_idx")};`};

          // Set scale input
          ${S?`let scale_value= ${D.getByOffset("0")}`:b?`
            let scale_index = ${P.indicesGet("output_indices","uniforms.axis")};
            let scale_value= ${D.getByOffset("scale_index")};`:`
            var scale_indices: ${D.type.indices} = output_indices;
            let index = ${D.indicesGet("scale_indices","uniforms.axis")} / uniforms.block_size;
            ${D.indicesSet("scale_indices","uniforms.axis","index")};
            let scale_value= ${D.getByIndices("scale_indices")};`};

          // Set zero-point input
          ${B?S?f?`
                let zero_point_input = ${B.getByOffset("0")};
                let zero_point_vec =  ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value= zero_point_vec[0]`:`let zero_point_value = ${B.getByOffset("0")}`:b?f?`
                let zero_point_index = ${P.indicesGet("output_indices","uniforms.axis")};
                let zero_point_input = ${B.getByOffset("zero_point_index / 4")};
                let zero_point_vec =  ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_index % 4]`:`
                let zero_point_index = ${P.indicesGet("output_indices","uniforms.axis")};
                let zero_point_value = ${B.getByOffset("zero_point_index")};`:f?`
                let zero_point_offset = ${D.indicesToOffset("scale_indices")};
                let zero_point_input = ${B.getByOffset("zero_point_offset / 4")};
                let zero_point_vec = ${o?"unpack4xI8(zero_point_input)":"unpack4xU8(zero_point_input)"};
                let zero_point_value = zero_point_vec[zero_point_offset % 4];`:`let zero_point_value = ${B.getByIndices("scale_indices")};`:`let zero_point_value = ${f?o?"i32":"u32":A.type.value}(0);`};
      // Compute and write output
      ${P.setByOffset("global_idx",`${P.type.value}(x_value - zero_point_value) * scale_value`)};
      }`};return{name:"DequantizeLinear",shaderCache:{hint:r.cacheKey,inputDependencies:B?["rank","rank","rank"]:["rank","rank"]},getShaderSource:te,getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(c/k/64),y:1,z:1},programUniforms:X})}},t_=(e,r)=>{t0(e.inputs,r),e.compute(r0(e.inputs,r))},r_=e=>Ze({axis:e.axis,blockSize:e.blockSize})}),n0,i0,n_,Y$=ae(()=>{"use strict";yr(),Ie(),Be(),n0=(e,r,i)=>{let s=e===r,o=e<r&&i<0,u=e>r&&i>0;if(s||o||u)throw new Error("Range these inputs' contents are invalid.")},i0=(e,r,i,s)=>{let o=Math.abs(Math.ceil((r-e)/i)),u=[o],d=o,c=[{type:12,data:d},{type:s,data:e},{type:s,data:i},...ke(u)],f=m=>{let y=_e("output",s,u.length),w=y.type.value,$=[{name:"outputSize",type:"u32"},{name:"start",type:w},{name:"delta",type:w}];return`
        ${m.registerUniforms($).declareVariables(y)}
        ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${w}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${s}`},getShaderSource:f,getRunData:()=>({outputs:[{dims:u,dataType:s}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c})}},n_=e=>{let r=0,i=0,s=0;e.inputs[0].dataType===6?(r=e.inputs[0].getInt32Array()[0],i=e.inputs[1].getInt32Array()[0],s=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(r=e.inputs[0].getFloat32Array()[0],i=e.inputs[1].getFloat32Array()[0],s=e.inputs[2].getFloat32Array()[0]),dt.webgpu.validateInputContent&&n0(r,i,s),e.compute(i0(r,i,s,e.inputs[0].dataType),{inputs:[]})}}),a0,s0,i_,a_,X$=ae(()=>{"use strict";Ie(),Re(),mt(),Be(),a0=(e,r,i,s)=>{if(e!=="none"&&s!=="i32"&&s!=="u32"&&s!=="f32")throw new Error(`Input ${s} is not supported with reduction ${e}.`);let o=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,u=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${r}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${r}=${i};`;case"add":return s==="i32"||s==="u32"?`atomicAdd(&${r}, bitcast<${s}>(${i}));`:`
              ${o}bitcast<${s}>(oldValue) + (${i})${u}`;case"max":return s==="i32"||s==="u32"?`atomicMax(&${r}, bitcast<${s}>(${i}));`:`
                ${o}max(bitcast<f32>(oldValue), (${i}))${u}`;case"min":return s==="i32"||s==="u32"?`atomicMin(&${r}, bitcast<${s}>(${i}));`:`${o}min(bitcast<${s}>(oldValue), (${i}))${u}`;case"mul":return`${o}(bitcast<${s}>(oldValue) * (${i}))${u}`;default:throw new Error(`Reduction ${e} is not supported.`)}},s0=(e,r)=>{let i=e[0].dims,s=e[1].dims,o=i,u=1,d=Math.ceil(K.sizeToDimension(s,s.length-1)/u),c=s[s.length-1],f=K.sizeFromDimension(i,c),m=[{type:12,data:d},{type:12,data:c},{type:12,data:f},...ke(e[1].dims,e[2].dims,o)],y=w=>{let $=J("indices",e[1].dataType,e[1].dims.length),S=J("updates",e[2].dataType,e[2].dims.length,u),b=r.reduction!=="none"&&r.reduction!==""?zv("output",e[0].dataType,o.length):_e("output",e[0].dataType,o.length,u);return`
      ${w.registerUniform("output_size","u32").registerUniform("last_index_dimension","u32").registerUniform("num_updates_elements","u32").declareVariables($,S,b)}
      ${w.mainStart()}
        ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
  var data_offset = 0u;
  let indices_start = uniforms.last_index_dimension * global_idx;
  let indices_end = indices_start + uniforms.last_index_dimension;
  for (var i = indices_start; i < indices_end; i++) {
    var index = i32(indices[i].x);
    ${e[0].dims.length===1?`
    let element_count_dim = uniforms.output_strides;
    let dim_value = uniforms.output_shape;`:`
    let element_count_dim = uniforms.output_strides[i - indices_start];
    let dim_value = uniforms.output_shape[i - indices_start];`}
    if (index >= 0) {
      if (index >= i32(dim_value)) {
        index = i32(dim_value - 1);
      }
    } else {
      if (index < -i32(dim_value)) {
        index = 0;
      } else {
        index += i32(dim_value);
      }
    }
    data_offset += u32((u32(index) * element_count_dim));
  }

  for (var i = 0u; i < uniforms.num_updates_elements; i++) {
    let value = updates[uniforms.num_updates_elements * global_idx + i];
    ${a0(r.reduction,"output[data_offset + i]","value",b.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${r.cacheKey}_${r.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:y}},i_=e=>Ze({reduction:e.reduction}),a_=(e,r)=>{e.compute(s0(e.inputs,r),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),o0,u0,l0,mp,d0,c0,p0,f0,h0,m0,g0,y0,gp,v0,w0,_0,$0,x0,s_,o_,J$=ae(()=>{"use strict";Ie(),Re(),mt(),Be(),o0=(e,r)=>{if(e.every(i=>i>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(r.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(r.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},u0=(e,r,i)=>{r.every(o=>o>=0&&o<i||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let s=new Array(i).fill(1);return r.forEach((o,u)=>s[o]=e[u]),s},l0=(e,r,i,s,o,u)=>{let[d,c,f]=i>10?[1,2,3]:[-1,e.length>1?1:-1,-1],m=e[0].dims.length;if(d>0&&e.length>d&&e[d].dims.length>0)e[d].getFloat32Array().forEach(y=>u.push(y));else if(r.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(c>0&&e.length>c&&e[c].dims.length===1&&e[c].dims[0]>0){if(e[c].getFloat32Array().forEach(y=>s.push(y)),s.length!==0&&s.length!==m&&i>=18&&s.length!==r.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");o0(s,r),r.axes.length>0&&u0(s,r.axes,m).forEach((y,w)=>s[w]=y)}if(f>0&&e.length>f&&e[f].dims.length===1&&e[f].dims[0]>0&&(e[f].getBigInt64Array().forEach(y=>o.push(Number(y))),o.length!==0&&o.length!==m&&i>=18&&o.length!==r.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(r.axes.length>0){if(s.length!==0&&s.length!==r.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(o.length!==0&&o.length!==r.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof s<"u"&&typeof o<"u"&&s.length>0&&o.length>m)throw new Error("Resize requires only of scales or sizes to be specified")},mp=(e,r,i,s)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${r});
  let whole = ${s}(big / (${i}));
  let fract = ${s}(big % (${i})) / ${s}(${i});
  return whole + fract;
`,d0=(e,r)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${r} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${r}(xResized) / ${r}(xScale);
          } else {
            ${mp("xResized","lengthOriginal","lengthResized",r)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${r}(xResized) + 0.5) / ${r}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${r}(xResized) + 0.5) / ${r}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${mp("xResized","lengthOriginal - 1","lengthResized - 1",r)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${r}(roiStart) * ${r}(lengthOriginal - 1) +
                        (${r}(xResized) * ${r}(roiEnd - roiStart) * ${r}(lengthOriginal - 1)) /
                        ${r}(lengthResized - 1);
                  } else {
                    return 0.5 * ${r}(roiStart + roiEnd) * ${r}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${r}xScale * ${r}(lengthResized);
                  const adjustment = ${r}(lengthResized) / outputWidth;
                  const center = ${r}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${r}(xResized) + 0.5) / ${r}(xScale)) - 0.5;`;case"half_pixel":return`return ((${r}(xResized) + 0.5) / ${r}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",c0=(e,r,i)=>`fn getNearestPixelFromOriginal(xOriginal: ${i}, isDownSample: bool) -> ${i} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(r<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",p0=(e,r,i)=>{let s=new Array(i).fill(0).concat(new Array(i).fill(1)),o=e.length===0?s:e.slice();return r.length>0?(r.forEach((u,d)=>{s[u]=o[d],s[d+i]=o[r.length+d]}),s):o},f0=(e,r,i,s)=>{let o=[];if(i.length>0)if(s.length>0){if(e.forEach(u=>o.push(u)),Math.max(...s)>e.length)throw new Error("axes is out of bound");s.forEach((u,d)=>o[u]=i[d])}else i.forEach(u=>o.push(u));else{if(r.length===0)throw new Error("Resize requires either scales or sizes.");o=e.map((u,d)=>Math.round(u*r[d]))}return o},h0=(e,r,i)=>{let s=(()=>{switch(i.keepAspectRatioPolicy){case"not_larger":return i.axes.length>0?Math.min(...i.axes.map(u=>r[u]),Number.MAX_VALUE):Math.min(...r,Number.MAX_VALUE);case"not_smaller":return i.axes.length>0?Math.max(...i.axes.map(u=>r[u]),Number.MIN_VALUE):Math.max(...r,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${i.keepAspectRatioPolicy} is not supported`)}})();r.fill(1,0,r.length);let o=e.slice();return i.axes.length>0?(i.axes.forEach(u=>r[u]=s),i.axes.forEach(u=>o[u]=Math.round(e[u]*r[u]))):(r.fill(s,0,r.length),o.forEach((u,d)=>o[d]=Math.round(u*r[d]))),o},m0=(e,r,i,s,o)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${i.length}> {
      var original_indices: array<${e.type.value}, ${i.length}>;
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${xe("uniforms.scales","i",s)};
        var roi_low = ${xe("uniforms.roi","i",o)};
        var roi_hi = ${xe("uniforms.roi",`i + ${r.length}`,o)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${xe("uniforms.input_shape","i",r.length)};
          var output_shape_i = ${xe("uniforms.output_shape","i",i.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,g0=(e,r,i,s,o,u,d)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${r.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${s.length}; i++) {
        var output_index = ${r.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${xe("uniforms.scales","i",o)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${xe("uniforms.roi","i",u)};
          var roi_hi = ${xe("uniforms.roi",`i + ${i.length}`,u)};
          var input_shape_i = ${xe("uniforms.input_shape","i",i.length)};
          var output_shape_i = ${xe("uniforms.output_shape","i",s.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${d} || (original_idx >= 0 && original_idx < ${r.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${r.type.value}(input_shape_i - 1)) {
              input_index = input_shape_i - 1;
            } else {
              input_index = u32(getNearestPixelFromOriginal(original_idx, scale < 1));
            }
          } else {
            input_index = u32(original_idx);
          }
        }
        ${e.indicesSet("input_indices","i","input_index")}
      }
      return input_indices;
    }`,y0=(e,r)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${r.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${xe("uniforms.input_shape","i",r.length)}) {
          return false;
        }
      }
      return true;
    }`,gp=(e,r,i,s)=>e.rank>s?`
    ${e.indicesSet("input_indices",r,"channel")};
    ${e.indicesSet("input_indices",i,"batch")};
`:"",v0=(e,r,i,s,o)=>{let[u,d,c,f]=i.length===2?[-1,0,1,-1]:[0,2,3,1],m=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${m} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",d,`max(0, min(row, ${i[d]} - 1))`)};
      ${e.indicesSet("input_indices",c,`max(0, min(col, ${i[c]} - 1))`)};
      ${gp(e,f,u,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${r.type.indices}) -> ${m} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var row:${m} = originalIndices[${d}];
      var col:${m} = originalIndices[${c}];
      ${s?`if (row < 0 || row > (${i[d]} - 1) || col < 0 || col > (${i[c]} - 1)) {
        return ${o};
      }`:""};
      row = max(0, min(row, ${i[d]} - 1));
      col = max(0, min(col, ${i[c]} - 1));
      var row1: u32 = u32(row);
      var col1: u32 = u32(col);
      var row2: u32 = u32(row + 1);
      var col2: u32 = u32(col + 1);
      var channel: u32 = ${i.length>2?`u32(originalIndices[${f}])`:"0"};
      var batch: u32 =  ${i.length>2?`u32(originalIndices[${u}])`:"0"};
      var x11: ${m} = getInputValue(batch, channel, row1, col1);
      var x12: ${m} = getInputValue(batch, channel, row1, col2);
      var x21: ${m} = getInputValue(batch, channel, row2, col1);
      var x22: ${m} = getInputValue(batch, channel, row2, col2);
      var dx1: ${m} = abs(row - ${m}(row1));
      var dx2: ${m} = abs(${m}(row2) - row);
      var dy1: ${m} = abs(col - ${m}(col1));
      var dy2: ${m} = abs(${m}(col2) - col);
      if (row1 == row2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (col1 == col2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      return (x11 * dx2 * dy2 + x12 * dx2 * dy1 + x21 * dx1 * dy2 + x22 * dx1 * dy1);
    }`},w0=(e,r,i,s,o,u,d,c,f,m)=>{let y=i.length===2,w=!0,[$,S]=y?[0,1]:w?[2,3]:[1,2],b=e.type.value,C=N=>{let k=N===$?"row":"col";return`
      fn ${k}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${r.type.indices}) -> ${b} {
        var output_index = ${r.indicesGet("output_indices",N)};
        var originalIdx: ${b} = getOriginalCoordinateFromResizedCoordinate(output_index, ${o[N]},
        ${s[N]}, ${i[N]}, ${u[N]}, ${u[N]} + ${i.length});
        var fractOriginalIdx: ${b} = originalIdx - floor(originalIdx);
        var coefs = getCubicInterpolationCoefs(fractOriginalIdx);

        if (${c} && (originalIdx < 0 || originalIdx > (${i[N]} - 1))) {
          return ${f};
        }
        var data: array<${b}, 4> = array<${b}, 4>(0.0, 0.0, 0.0, 0.0);
        for (var i: i32 = -1; i < 3; i++) {
          var ${k}: ${b} = originalIdx + ${b}(i);
          if (${k} < 0 || ${k} >= ${i[N]}) {
            ${m?`coefs[i + 1] = 0.0;
                        continue;`:c?`return ${f};`:`${k} = max(0, min(${k}, ${i[N]} - 1));`};
          }
        var input_indices_copy: ${e.type.indices} = input_indices;
          ${e.indicesSet("input_indices_copy",N,`u32(${k})`)};
          data[i + 1] = ${N===$?e.getByIndices("input_indices_copy"):"rowCubicInterpolation(input_indices_copy, output_indices)"};
        }
        return cubicInterpolation1D(data, coefs);
      }`};return`
    ${C($)};
    ${C(S)};
  fn getCubicInterpolationCoefs(s: ${b}) -> array<${b}, 4> {
    var absS = abs(s);
    var coeffs: array<${b}, 4> = array<${b}, 4>(0.0, 0.0, 0.0, 0.0);
    var oneMinusAbsS: ${b} = 1.0 - absS;
    var twoMinusAbsS: ${b} = 2.0 - absS;
    var onePlusAbsS: ${b} = 1.0 + absS;
    coeffs[0] = ((${d} * onePlusAbsS - 5 * ${d}) * onePlusAbsS + 8 * ${d}) * onePlusAbsS - 4 * ${d};
    coeffs[1] = ((${d} + 2) * absS - (${d} + 3)) * absS * absS + 1;
    coeffs[2] = ((${d} + 2) * oneMinusAbsS - (${d} + 3)) * oneMinusAbsS * oneMinusAbsS + 1;
    coeffs[3] = ((${d} * twoMinusAbsS - 5 * ${d}) * twoMinusAbsS + 8 * ${d}) * twoMinusAbsS - 4 * ${d};
    return coeffs;
  }

  fn cubicInterpolation1D(x: array<${b}, 4>, coefs: array<${b}, 4>) -> ${b} {
    var coefsSum: ${b} = coefs[0] + coefs[1] + coefs[2] + coefs[3];
    return (x[0] * coefs[0] + x[1] * coefs[1]+ x[2] * coefs[2]+ x[3] * coefs[3]) / coefsSum;
  }

  fn bicubicInterpolation(output_indices: ${r.type.indices}) -> ${b} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},_0=(e,r,i,s,o)=>{let[u,d,c,f,m]=i.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],y=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${y} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",d,`max(0, min(depth, ${i[d]} - 1))`)};
      ${e.indicesSet("input_indices",c,`max(0, min(height, ${i[c]} - 1))`)};
      ${e.indicesSet("input_indices",f,`max(0, min(width, ${i[f]} - 1))`)};
      ${gp(e,m,u,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${r.type.indices}) -> ${y} {
      var originalIndices = calculateOriginalIndicesFromOutputIndices(output_indices);
      var depth:${y} = originalIndices[${d}];
      var height:${y} = originalIndices[${c}];
      var width:${y} = originalIndices[${f}];
      ${s?`if (depth < 0 || depth > (${i[d]} - 1) || height < 0 || height > (${i[c]} - 1) || width < 0 || (width > ${i[f]} - 1)) {
      return ${o};
        }`:""};

    depth = max(0, min(depth, ${i[d]} - 1));
      height = max(0, min(height, ${i[c]} - 1));
      width = max(0, min(width, ${i[f]} - 1));
      var depth1: u32 = u32(depth);
      var height1: u32 = u32(height);
      var width1: u32 = u32(width);
      var depth2: u32 = u32(depth + 1);
      var height2: u32 = u32(height + 1);
      var width2: u32 = u32(width + 1);
      var channel: u32 = ${i.length>3?`u32(originalIndices[${m}])`:"0"};
      var batch: u32 =  ${i.length>3?`u32(originalIndices[${u}])`:"0"};

      var x111: ${y} = getInputValue(batch, channel, depth1, height1, width1);
      var x112: ${y} = getInputValue(batch, channel, depth1, height1, width2);
      var x121: ${y} = getInputValue(batch, channel, depth1, height2, width1);
      var x122: ${y} = getInputValue(batch, channel, depth1, height2, width2);
      var x211: ${y} = getInputValue(batch, channel, depth2, height1, width1);
      var x212: ${y} = getInputValue(batch, channel, depth2, height1, width2);
      var x221: ${y} = getInputValue(batch, channel, depth2, height2, width1);
      var x222: ${y} = getInputValue(batch, channel, depth2, height2, width2);
      var dx1: ${y} = abs(depth - ${y}(depth1));
      var dx2: ${y} = abs(${y}(depth2) - depth);
      var dy1: ${y} = abs(height - ${y}(height1));
      var dy2: ${y} = abs(${y}(height2) - height);
      var dz1: ${y} = abs(width - ${y}(width1));
      var dz2: ${y} = abs(${y}(width2) - width);
      if (depth1 == depth2) {
        dx1 = 0.5;
        dx2 = 0.5;
      }
      if (height1 == height2) {
        dy1 = 0.5;
        dy2 = 0.5;
      }
      if (width1 == width2) {
        dz1 = 0.5;
        dz2 = 0.5;
      }
      return (x111 * dx2 * dy2 * dz2 + x112 * dx2 * dy2 * dz1 + x121 * dx2 * dy1 *dz2 + x122 * dx2 * dy1 * dz1 +
              x211 * dx1 * dy2 * dz2 + x212 * dx1 * dy2 * dz1 + x221 * dx1 * dy1 *dz2 + x222 * dx1 * dy1 * dz1);
    }`},$0=(e,r,i,s,o,u)=>{let d=e.dims,c=p0(u,r.axes,d.length),f=f0(d,s,o,r.axes),m=s.slice();s.length===0&&(m=d.map((T,A)=>T===0?1:f[A]/T),r.keepAspectRatioPolicy!=="stretch"&&(f=h0(d,m,r)));let y=_e("output",e.dataType,f.length),w=J("input",e.dataType,d.length),$=K.size(f),S=d.length===f.length&&d.every((T,A)=>T===f[A]),b=r.coordinateTransformMode==="tf_crop_and_resize",C=r.extrapolationValue,N=w.type.value,k=T=>`
      ${S?"":`
      ${d0(r.coordinateTransformMode,N)};
      ${(()=>{switch(r.mode){case"nearest":return`
              ${y0(w,d)};
              ${c0(r.nearestMode,i,N)};
              ${g0(w,y,d,f,m.length,c.length,b)};
              `;case"linear":return`
              ${m0(y,d,f,m.length,c.length)};
              ${(()=>{if(d.length===2||d.length===4)return`${v0(w,y,d,b,C)}`;if(d.length===3||d.length===5)return`${_0(w,y,d,b,C)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(d.length===2||d.length===4)return`${w0(w,y,d,f,m,c,r.cubicCoeffA,b,r.extrapolationValue,r.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${T.registerUniform("output_size","u32").registerUniform("scales","f32",m.length).registerUniform("roi","f32",c.length).declareVariables(w,y)}
      ${T.mainStart()}
        ${T.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${S?"output[global_idx] = input[global_idx];":`
        let output_indices = ${y.offsetToIndices("global_idx")};
        var input_indices: ${w.type.indices};
        ${(()=>{switch(r.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${w.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${r.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${d.length===2||d.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${r.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${r.cacheKey}|${i}|${m.length>0?r.mode==="cubic"?m:m.length:""}|${o.length>0?o:""}|${c.length>0?c:""}|${S}|${r.mode==="nearest"?d.length:d}`,inputDependencies:["rank"]},getShaderSource:k,getRunData:()=>({outputs:[{dims:f,dataType:e.dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},{type:1,data:m},{type:1,data:c},...ke(d,f)]})}},x0=e=>{let r=e.customDataBuffer;return new Uint32Array(r.buffer,r.byteOffset,1)[0]},s_=(e,r)=>{let i=[],s=[],o=[],u=x0(e);if(r.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");l0(e.inputs,r,u,i,s,o),e.compute($0(e.inputs[0],r,u,i,s,o),{inputs:[0]})},o_=e=>{let r=e.antialias,i=e.axes,s=e.coordinateTransformMode,o=e.cubicCoeffA,u=e.excludeOutside!==0,d=e.extrapolationValue,c=e.keepAspectRatioPolicy,f=e.mode,m=e.nearestMode===""?"simple":e.nearestMode;return Ze({antialias:r,axes:i,coordinateTransformMode:s,cubicCoeffA:o,excludeOutside:u,extrapolationValue:d,keepAspectRatioPolicy:c,mode:f,nearestMode:m})}}),b0,S0,u_,ex=ae(()=>{"use strict";Ie(),Re(),Be(),b0=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let r=e[0],i=e[1],s=e[2];if(r.dataType!==i.dataType||r.dataType!==s.dataType)throw new Error("All inputs must have the same data type");if(r.dims.length!==3&&r.dims.length!==2)throw new Error("Input must be 2D or 3D");if(i.dims.length!==3&&i.dims.length!==2)throw new Error("Skip must be 2D or 3D");let o=r.dims[r.dims.length-1],u=r.dims[r.dims.length-2];if(i.dims[i.dims.length-1]!==o)throw new Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==u)throw new Error("Skip must have the same sequence length as input");if(s.dims.length!==1)throw new Error("Gamma must be 1D");if(s.dims[s.dims.length-1]!==o)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let d=e[3];if(d.dims.length!==1)throw new Error("Beta must be 1D");if(d.dims[d.dims.length-1]!==o)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let d=e[4];if(d.dims.length!==1)throw new Error("Bias must be 1D");if(d.dims[d.dims.length-1]!==o)throw new Error("Bias must have the same hidden size as input")}},S0=(e,r,i,s)=>{let o=r.simplified,u=e[0].dims,d=K.size(u),c=u,f=d,m=u.slice(-1)[0],y=s?u.slice(0,-1).concat(1):[],w=!o&&e.length>3,$=e.length>4,S=s&&i>1,b=s&&i>2,C=i>3,N=64,k=ht(m),T=[{type:12,data:f},{type:12,data:k},{type:12,data:m},{type:1,data:r.epsilon}],A=B=>{let P=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],V=[J("x",e[0].dataType,e[0].dims,k),J("skip",e[1].dataType,e[1].dims,k),J("gamma",e[2].dataType,e[2].dims,k)];w&&V.push(J("beta",e[3].dataType,e[3].dims,k)),$&&V.push(J("bias",e[4].dataType,e[4].dims,k)),V.push(_e("output",e[0].dataType,c,k)),S&&V.push(_e("mean_output",1,y)),b&&V.push(_e("inv_std_output",1,y)),C&&V.push(_e("input_skip_bias_sum",e[0].dataType,c,k));let I=Ct(e[0].dataType),X=Ct(1,k);return`

      ${B.registerUniforms(P).declareVariables(...V)}
      var<workgroup> sum_shared : array<${X}, ${N}>;
      var<workgroup> sum_squared_shared : array<${X}, ${N}>;

      ${B.mainStart([N,1,1])}
        let ix = local_id.x;
        let iy = global_id.x / ${N};

        let hidden_size_vectorized: u32 = uniforms.hidden_size / uniforms.components;
        var stride = hidden_size_vectorized / ${N};
        let offset = ix * stride + iy * hidden_size_vectorized;
        let offset1d = stride * ix;
        if (ix == ${N-1}) {
          stride = hidden_size_vectorized - stride * ix;
        }
        for (var i: u32 = 0; i < stride; i++) {
          let skip_value = skip[offset + i];
          let bias_value = ${$?"bias[offset1d + i]":I+"(0.0)"};
          let input_value = x[offset + i];
          let value = input_value + skip_value + bias_value;
          ${C?"input_skip_bias_sum[offset + i] = value;":""}
          output[offset + i] = value;
          let f32_value = ${as(I,k,"value")};
          sum_shared[ix] += f32_value;
          sum_squared_shared[ix] += f32_value * f32_value;
        }
        workgroupBarrier();

        var reduce_size : u32 = ${N};
        for (var curr_size = reduce_size >> 1;  curr_size > 0; curr_size = reduce_size >> 1) {
          reduce_size = curr_size + (reduce_size & 1);
          if (ix < curr_size) {
            sum_shared[ix] += sum_shared[ix + reduce_size];
            sum_squared_shared[ix] += sum_squared_shared[ix + reduce_size];
          }
          workgroupBarrier();
        }

        let sum = sum_shared[0];
        let square_sum = sum_squared_shared[0];
        let mean = ${fi("sum",k)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${fi("square_sum",k)} / f32(uniforms.hidden_size) ${o?"":"- mean * mean"} + uniforms.epsilon);
        ${S?"mean_output[global_idx] = mean;":""}
        ${b?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${o?"":`- ${I}(mean)`}) *
            ${I}(inv_std_dev) * gamma[offset1d + i]
            ${w?"+ beta[offset1d + i]":""};
        }
      }`},D=[{dims:c,dataType:e[0].dataType}];return i>1&&D.push({dims:y,dataType:1}),i>2&&D.push({dims:y,dataType:1}),i>3&&D.push({dims:u,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${k};${S};${b};${C}`,inputDependencies:e.map((B,P)=>"type")},getShaderSource:A,getRunData:()=>({outputs:D,dispatchGroup:{x:Math.ceil(f/m)},programUniforms:T})}},u_=(e,r)=>{b0(e.inputs);let i=[0];e.outputCount>1&&i.push(-3),e.outputCount>2&&i.push(-3),e.outputCount>3&&i.push(3),e.compute(S0(e.inputs,r,e.outputCount,!1),{outputs:i})}}),k0,Ro,E0,yp,T0,C0,l_,d_,tx=ae(()=>{"use strict";Ie(),Re(),mt(),Be(),k0=(e,r)=>{if(!e||e.length<1)throw new Error("too few inputs");if(r.axes.length!==0){if(r.axes.length!==r.starts.length||r.axes.length!==r.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(r.starts.length!==r.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((i,s)=>{if(e[s+1].dataType!==6&&e[s+1].dataType!==7)throw new Error(`Input ${s} must be an array of int32 or int64`)})},Ro=(e,r)=>{let i=[];if(e.length>r)if(e[r].dataType===7)e[r].getBigInt64Array().forEach(s=>i.push(Number(s)));else if(e[r].dataType===6)e[r].getInt32Array().forEach(s=>i.push(Number(s)));else throw new Error(`Input ${r} must be an array of int32 or int64`);return i},E0=(e,r)=>{if(e.length>1){let i=Ro(e,1),s=Ro(e,2),o=Ro(e,3);return o.length===0&&(o=[...Array(e[0].dims.length).keys()]),Ze({starts:i,ends:s,axes:o})}else return r},yp=(e,r,i,s,o)=>{let u=e;return e<0&&(u+=i[s[r]]),o[r]<0?Math.max(0,Math.min(u,i[s[r]]-1)):Math.max(0,Math.min(u,i[s[r]]))},T0=(e,r,i)=>`fn calculateInputIndices(output_indices: ${r.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${i.length-1}; i >= 0; i--) {
            let input_shape_i = ${xe("uniforms.input_shape","i",i.length)};
            let steps_i = ${xe("uniforms.steps","i",i.length)};
            let signs_i = ${xe("uniforms.signs","i",i.length)};
            let starts_i = ${xe("uniforms.starts","i",i.length)};
            var output_index = ${r.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,C0=(e,r)=>{let i=e[0].dims,s=K.size(i),o=r.axes.length>0?K.normalizeAxes(r.axes,i.length):[...Array(i.length).keys()],u=Ro(e,4);u.forEach(k=>k!==0||(()=>{throw new Error("step cannot be 0")})),u.length===0&&(u=Array(o.length).fill(1));let d=r.starts.map((k,T)=>yp(k,T,i,o,u)),c=r.ends.map((k,T)=>yp(k,T,i,o,u));if(o.length!==d.length||o.length!==c.length)throw new Error("start, ends and axes should have the same number of elements");if(o.length!==i.length)for(let k=0;k<i.length;++k)o.includes(k)||(d.splice(k,0,0),c.splice(k,0,i[k]),u.splice(k,0,1));let f=u.map(k=>Math.sign(k));u.forEach((k,T,A)=>{if(k<0){let D=(c[T]-d[T])/k,B=d[T],P=B+D*u[T];d[T]=P,c[T]=B,A[T]=-k}});let m=i.slice(0);o.forEach((k,T)=>{m[k]=Math.ceil((c[k]-d[k])/u[k])});let y={dims:m,dataType:e[0].dataType},w=_e("output",e[0].dataType,m.length),$=J("input",e[0].dataType,e[0].dims.length),S=K.size(m),b=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:d.length},{name:"signs",type:"i32",length:f.length},{name:"steps",type:"u32",length:u.length}],C=[{type:12,data:S},{type:12,data:d},{type:6,data:f},{type:12,data:u},...ke(e[0].dims,m)],N=k=>`
      ${k.registerUniforms(b).declareVariables($,w)}
        ${T0($,w,i)}
        ${k.mainStart()}
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${w.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${w.setByOffset("global_idx",$.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${f.length}_${d.length}_${u.length}`,inputDependencies:["rank"]},getShaderSource:N,getRunData:()=>({outputs:[y],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:C})}},l_=(e,r)=>{k0(e.inputs,r);let i=E0(e.inputs,r);e.compute(C0(e.inputs,i),{inputs:[0]})},d_=e=>{let r=e.starts,i=e.ends,s=e.axes;return Ze({starts:r,ends:i,axes:s})}}),I0,z0,c_,p_,rx=ae(()=>{"use strict";Ie(),Re(),mt(),hi(),Be(),I0=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},z0=(e,r)=>{let i=e.inputs[0],s=i.dims,o=K.size(s),u=s.length,d=K.normalizeAxis(r.axis,u),c=d<s.length-1,f,m=[];c?(m=Array.from({length:u},(V,I)=>I),m[d]=u-1,m[u-1]=d,f=e.compute(gr(i,m),{inputs:[i],outputs:[-1]})[0]):f=i;let y=f.dims,w=y[u-1],$=o/w,S=ht(w),b=w/S,C=64;$===1&&(C=256);let N=(V,I)=>I===4?`max(max(${V}.x, ${V}.y), max(${V}.z, ${V}.w))`:I===2?`max(${V}.x, ${V}.y)`:I===3?`max(max(${V}.x, ${V}.y), ${V}.z)`:V,k=J("x",f.dataType,f.dims,S),T=_e("result",f.dataType,f.dims,S),A=k.type.value,D=Ct(f.dataType)==="f32"?`var threadMax = ${A}(-3.4028234663852886e+38f);`:`var threadMax = ${A}(-65504.0h);`,B=V=>`
      var<workgroup> rowMaxShared : ${A};
      var<workgroup> rowSumShared : ${A};
      var<workgroup> threadShared : array<${A}, ${C}>;

      fn getValue(row: i32, col: i32, row_stride: i32) -> ${A} {
        let index = row * row_stride + col;
        return x[index];
      }

      fn setValue(row: i32, col: i32, row_stride: i32, value: ${A}) {
        let index = row * row_stride + col;
        result[index] = value;
      }
      ${V.registerUniform("packedCols","i32").declareVariables(k,T)}
      ${V.mainStart(C)}
        let gindex = i32(global_idx);
        let lindex = i32(local_idx);
        const wg = ${C};
        let row = gindex / wg;
        let cols = uniforms.packedCols;
        let row_stride : i32 = uniforms.packedCols;

        // find the rows max
        ${D}
        for (var col = lindex; col < cols; col += wg) {
          let value = getValue(row, col, row_stride);
          threadMax = max(threadMax, value);
        }
        if (lindex < cols) {
          threadShared[lindex] = threadMax;
        }
        workgroupBarrier();

        var reduceSize = min(cols, wg);
        for (var currSize = reduceSize >> 1;  currSize > 0; currSize = reduceSize >> 1) {
          reduceSize = currSize + (reduceSize & 1);
          if (lindex < currSize) {
            threadShared[lindex] = max(threadShared[lindex], threadShared[lindex + reduceSize]);
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowMaxShared = ${A}(${N("threadShared[0]",S)});
        }
        workgroupBarrier();

        // find the rows sum
        var threadSum = ${A}(0.0);
        for (var col = lindex; col < cols; col += wg) {
          let subExp = exp(getValue(row, col, row_stride) - rowMaxShared);
          threadSum += subExp;
        }
        threadShared[lindex] = threadSum;
        workgroupBarrier();

        for (var currSize = wg >> 1;  currSize > 0; currSize = currSize >> 1) {
          if (lindex < currSize) {
            threadShared[lindex] = threadShared[lindex] + threadShared[lindex + currSize];
          }
          workgroupBarrier();
        }
        if (lindex == 0) {
          rowSumShared = ${A}(${fi("threadShared[0]",S)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${A}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,P=e.compute({name:"Softmax",shaderCache:{hint:`${S};${C}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:y,dataType:f.dataType}],dispatchGroup:{x:$},programUniforms:[{type:6,data:b}]}),getShaderSource:B},{inputs:[f],outputs:[c?-1:0]})[0];c&&e.compute(gr(P,m),{inputs:[P]})},c_=(e,r)=>{I0(e.inputs),z0(e,r)},p_=e=>Ze({axis:e.axis})}),vp,N0,O0,A0,f_,nx=ae(()=>{"use strict";Ie(),Re(),Be(),vp=e=>Array.from(e.getBigInt64Array(),Number),N0=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(vp(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},O0=(e,r)=>{let i=[];for(let s=0;s<e.length;++s)i.push(e[s]*r[s]);return i},A0=(e,r)=>{let i=e[0].dims,s=r??vp(e[1]),o=O0(i,s),u=K.size(o),d=e[0].dataType,c=J("input",d,i.length),f=_e("output",d,o.length),m=y=>`
      const inputShape = ${c.indices(...i)};
      ${y.registerUniform("output_size","u32").declareVariables(c,f)}
      ${y.mainStart()}
      ${y.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let output_indices = ${f.offsetToIndices("global_idx")};
      var input_indices: ${c.type.indices};
      for (var i = 0; i < ${i.length}; i++) {
        let input_dim_i = ${c.indicesGet("uniforms.input_shape","i")};
        let input_dim_value = ${f.indicesGet("output_indices","i")}  % input_dim_i;

        ${c.indicesSet("input_indices","i","input_dim_value")}
      }
      ${f.setByOffset("global_idx",c.getByIndices("input_indices"))}
    }`;return{name:"Tile",shaderCache:{hint:`${s}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:[{type:12,data:u},...ke(e[0].dims,o)]}),getShaderSource:m}},f_=e=>{N0(e.inputs),e.compute(A0(e.inputs),{inputs:[0]})}}),R0,D0,h_,ix=ae(()=>{"use strict";Ie(),Re(),Be(),R0=(e,r,i,s,o)=>{let u=_e("output_data",o,i.length,4),d=J("a_data",r[1].dataType,r[1].dims.length,4),c=J("b_data",r[2].dataType,r[2].dims.length,4),f=J("c_data",r[0].dataType,r[0].dims.length,4),m,y=(w,$,S)=>`select(${$}, ${w}, ${S})`;if(!s)m=u.setByOffset("global_idx",y(d.getByOffset("global_idx"),c.getByOffset("global_idx"),f.getByOffset("global_idx")));else{let w=($,S,b="")=>{let C=`a_data[index_a${S}][component_a${S}]`,N=`b_data[index_b${S}][component_b${S}]`,k=`bool(c_data[index_c${S}] & (0xffu << (component_c${S} * 8)))`;return`
            let output_indices${S} = ${u.offsetToIndices(`global_idx * 4u + ${S}u`)};
            let offset_a${S} = ${d.broadcastedIndicesToOffset(`output_indices${S}`,u)};
            let offset_b${S} = ${c.broadcastedIndicesToOffset(`output_indices${S}`,u)};
            let offset_c${S} = ${f.broadcastedIndicesToOffset(`output_indices${S}`,u)};
            let index_a${S} = offset_a${S} / 4u;
            let index_b${S} = offset_b${S} / 4u;
            let index_c${S} = offset_c${S} / 4u;
            let component_a${S} = offset_a${S} % 4u;
            let component_b${S} = offset_b${S} % 4u;
            let component_c${S} = offset_c${S} % 4u;
            ${$}[${S}] = ${b}(${y(C,N,k)});
          `};o===9?m=`
            var data = vec4<u32>(0);
            ${w("data",0,"u32")}
            ${w("data",1,"u32")}
            ${w("data",2,"u32")}
            ${w("data",3,"u32")}
            output_data[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:m=`
            ${w("output_data[global_idx]",0)}
            ${w("output_data[global_idx]",1)}
            ${w("output_data[global_idx]",2)}
            ${w("output_data[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(f,d,c,u)}
        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${m}
      }`},D0=e=>{let r=e[1].dims,i=e[2].dims,s=e[0].dims,o=e[1].dataType,u=!(K.areEqual(r,i)&&K.areEqual(i,s)),d=r,c=K.size(r);if(u){let m=ss.calcShape(ss.calcShape(r,i,!1),s,!1);if(!m)throw new Error("Can't perform where op on the given tensors");d=m,c=K.size(d)}let f=Math.ceil(c/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:m=>R0(m,e,d,u,o),getRunData:()=>({outputs:[{dims:d,dataType:o}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:f},...ke(s,r,i,d)]})}},h_=e=>{e.compute(D0(e.inputs))}}),m_,ax=ae(()=>{"use strict";v$(),sf(),w$(),_$(),$$(),x$(),b$(),C$(),z$(),N$(),O$(),A$(),R$(),D$(),M$(),B$(),P$(),L$(),U$(),j$(),W$(),V$(),F$(),q$(),H$(),G$(),Rw(),K$(),Q$(),Z$(),Y$(),X$(),af(),J$(),Lw(),ex(),tx(),rx(),Bw(),nx(),hi(),of(),ix(),m_=new Map([["Abs",[a1]],["Acos",[s1]],["Acosh",[o1]],["Add",[W1]],["ArgMax",[t1,zp]],["ArgMin",[e1,zp]],["Asin",[u1]],["Asinh",[l1]],["Atan",[d1]],["Atanh",[c1]],["Attention",[r1]],["AveragePool",[Kw,Gw]],["BatchNormalization",[n1]],["BiasAdd",[i1]],["BiasSplitGelu",[j1]],["Cast",[f1,p1]],["Ceil",[m1]],["Clip",[h1]],["Concat",[X1,J1]],["Conv",[Mp,Dp]],["ConvTranspose",[lw,uw]],["Cos",[g1]],["Cosh",[y1]],["CumSum",[dw,cw]],["DepthToSpace",[pw,fw]],["DequantizeLinear",[t_,r_]],["DFT",[hw,mw]],["Div",[V1]],["Einsum",[gw,yw]],["Elu",[v1,Lo]],["Equal",[F1]],["Erf",[w1]],["Exp",[_1]],["Expand",[vw]],["FastGelu",[ww]],["Floor",[$1]],["FusedConv",[Mp,Dp]],["Gather",[$w,_w]],["GatherElements",[Tw,Ew]],["GatherBlockQuantized",[Sw,kw]],["GatherND",[xw,bw]],["Gelu",[x1]],["Gemm",[Iw,Cw]],["GlobalAveragePool",[Zw,Qw]],["GlobalMaxPool",[e_,Jw]],["Greater",[K1]],["GreaterOrEqual",[Z1]],["GridSample",[zw,Nw]],["GroupQueryAttention",[Uw]],["HardSigmoid",[z1,I1]],["HardSwish",[N1]],["InstanceNormalization",[jw]],["LayerNormalization",[Ww]],["LeakyRelu",[b1,Lo]],["Less",[Q1]],["LessOrEqual",[Y1]],["Log",[L1]],["MatMul",[Vw]],["MatMulNBits",[Fw,qw]],["MaxPool",[Yw,Xw]],["Mul",[q1]],["MultiHeadAttention",[Aw,Ow]],["Neg",[k1]],["Not",[S1]],["Pad",[Hw]],["Pow",[H1]],["QuickGelu",[U1,Lo]],["Range",[n_]],["Reciprocal",[E1]],["ReduceMin",[Qv]],["ReduceMean",[Fv]],["ReduceMax",[Kv]],["ReduceSum",[Yv]],["ReduceProd",[Zv]],["ReduceL1",[qv]],["ReduceL2",[Hv]],["ReduceLogSum",[Jv]],["ReduceLogSumExp",[Gv]],["ReduceSumSquare",[Xv]],["Relu",[T1]],["Resize",[s_,o_]],["RotaryEmbedding",[Pw]],["ScatterND",[a_,i_]],["Sigmoid",[C1]],["Sin",[O1]],["Sinh",[A1]],["Slice",[l_,d_]],["SkipLayerNormalization",[u_]],["Split",[Dw,Mw]],["Sqrt",[R1]],["Softmax",[c_,p_]],["Sub",[G1]],["Tan",[D1]],["Tanh",[M1]],["ThresholdedRelu",[P1,Lo]],["Tile",[f_]],["Transpose",[Ov,Av]],["Where",[h_]]])}),g_,sx=ae(()=>{"use strict";yr(),Tn(),Be(),g_=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,r){this.repo.set(e,r)}run(e,r,i,s,o){Tr(e.programInfo.name);let u=this.backend.device,d=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let c=[];for(let m of r)c.push({binding:c.length,resource:{buffer:m.buffer}});for(let m of i)c.push({binding:c.length,resource:{buffer:m.buffer}});o&&c.push({binding:c.length,resource:o});let f=u.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:c,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let m={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:f,dispatchGroup:s};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(m)}d.setPipeline(e.computePipeline),d.setBindGroup(0,f),d.dispatchWorkgroups(...s),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),mr(e.programInfo.name)}dispose(){}build(e,r){Tr(e.name);let i=this.backend.device,s=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(m=>{i.features.has(m.feature)&&s.push(`enable ${m.extension};`)});let o=Nv(r,this.backend.device.limits),u=e.getShaderSource(o),d=`${s.join(`
`)}
${o.additionalImplementations}
${u}`,c=i.createShaderModule({code:d,label:e.name});He("verbose",()=>`[WebGPU] ${e.name} shader code: ${d}`);let f=i.createComputePipeline({compute:{module:c,entryPoint:"main"},layout:"auto",label:e.name});return mr(e.name),{programInfo:e,computePipeline:f,uniformVariablesInfo:o.variablesInfo}}normalizeDispatchGroupSize(e){let r=typeof e=="number"?e:e.x,i=typeof e=="number"?1:e.y||1,s=typeof e=="number"?1:e.z||1,o=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(r<=o&&i<=o&&s<=o)return[r,i,s];let u=r*i*s,d=Math.ceil(Math.sqrt(u));if(d>o){if(d=Math.ceil(Math.cbrt(u)),d>o)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[d,d,d]}else return[d,d,1]}}}),y_={};us(y_,{WebGpuBackend:()=>v_});var M0,B0,P0,v_,ox=ae(()=>{"use strict";yr(),Ie(),Tn(),Ev(),g$(),ax(),sx(),M0=(e,r)=>{if(r.length!==e.length)throw new Error(`inputDependencies length ${r.length} is not equal to inputTensors length ${e.length}.`);let i=[];for(let s=0;s<e.length;++s){let o=e[s].dataType;switch(r[s]){case"none":{i.push("");break}case"type":{i.push(`${o}`);break}case"rank":{let u=e[s].dims.length;i.push(`${o};${u}`);break}case"dims":{let u=e[s].dims.join(",");i.push(`${o};${u}`);break}default:throw new Error(`unsupported input dependency: ${r[s]}`)}}return i.join("|")},B0=(e,r,i)=>{var o,u;let s=e.name;return(o=e.shaderCache)!=null&&o.hint&&(s+="["+e.shaderCache.hint+"]"),s+=":"+i+`:${M0(r,((u=e.shaderCache)==null?void 0:u.inputDependencies)??new Array(r.length).fill("dims"))}`,s},P0=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},v_=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,r){this.env=e;let i=[],s={requiredLimits:{maxComputeWorkgroupStorageSize:r.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:r.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:r.limits.maxStorageBufferBindingSize,maxBufferSize:r.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:r.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:r.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:r.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:r.limits.maxComputeWorkgroupSizeZ},requiredFeatures:i},o=c=>r.features.has(c)&&i.push(c)&&!0;o("chromium-experimental-timestamp-query-inside-passes")||o("timestamp-query"),o("shader-f16"),o("subgroups"),this.device=await r.requestDevice(s);let u=r,d=r.info??(typeof u.requestAdapterInfo=="function"?await u.requestAdapterInfo():void 0);this.adapterInfo=new P0(d),this.gpuDataManager=Iv(this),this.programManager=new g_(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,ef(e.logLevel,!!e.debug),this.device.onuncapturederror=c=>{c.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${c.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:r,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),r={};this.queryType==="at-passes"&&(r.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(r)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Tr(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var s;let r=new BigUint64Array(e.getMappedRange()),i=this.pendingQueries.get(e);for(let o=0;o<r.length/2;o++){let u=i[o],d=u.kernelId,c=this.kernels.get(d),f=c.kernelType,m=c.kernelName,y=u.programName,w=u.inputTensorViews,$=u.outputTensorViews,S=r[o*2],b=r[o*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=S);let C=Number(S-this.queryTimeBase),N=Number(b-this.queryTimeBase);if(!Number.isSafeInteger(C)||!Number.isSafeInteger(N))throw new RangeError("incorrect timestamp range");if((s=this.env.webgpu.profiling)!=null&&s.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:w.map(k=>({dims:k.dims,dataType:En(k.dataType)})),outputsMetadata:$.map(k=>({dims:k.dims,dataType:En(k.dataType)})),kernelId:d,kernelType:f,kernelName:m,programName:y,startTime:C,endTime:N});else{let k="";w.forEach((A,D)=>{k+=`input[${D}]: [${A.dims}] | ${En(A.dataType)}, `});let T="";$.forEach((A,D)=>{T+=`output[${D}]: [${A.dims}] | ${En(A.dataType)}, `}),console.log(`[profiling] kernel "${d}|${f}|${m}|${y}" ${k}${T}start time: ${C} ns, execution time: ${N-C} ns`)}Nl("GPU",`${y}::${S}::${b}`)}e.unmap(),this.pendingQueries.delete(e)}),mr()}run(e,r,i,s,o,u){Tr(e.name);let d=[];for(let T=0;T<r.length;++T){let A=r[T].data;if(A===0)continue;let D=this.gpuDataManager.get(A);if(!D)throw new Error(`no GPU data for input: ${A}`);d.push(D)}let{outputs:c,dispatchGroup:f,programUniforms:m}=e.getRunData(r),y=i.length===0?c.map((T,A)=>A):i;if(y.length!==c.length)throw new Error(`Output size ${y.length} must be equal to ${c.length}.`);let w=[],$=[];for(let T=0;T<c.length;++T){if(!Number.isInteger(y[T])||y[T]<-3||y[T]>=u)throw new Error(`Invalid output index: ${y[T]}`);if(y[T]===-3)continue;let A=y[T]===-1,D=y[T]===-2,B=A||D?o(c[T].dataType,c[T].dims):s(y[T],c[T].dataType,c[T].dims);if(w.push(B),B.data===0)continue;let P=this.gpuDataManager.get(B.data);if(!P)throw new Error(`no GPU data for output: ${B.data}`);if(A&&this.temporaryData.push(P),D){let V=this.kernelPersistentData.get(this.currentKernelId);V||(V=[],this.kernelPersistentData.set(this.currentKernelId,V)),V.push(P)}$.push(P)}if(d.length!==r.length||$.length!==w.length){if($.length===0)return mr(e.name),w;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let S;if(m){let T=0,A=[];m.forEach(V=>{let I=typeof V.data=="number"?[V.data]:V.data;if(I.length===0)return;let X=V.type===10?2:4,te,me;V.type===10?(me=I.length>4?16:I.length>2?8:I.length*X,te=I.length>4?16:X*I.length):(me=I.length<=2?I.length*X:16,te=16),T=Math.ceil(T/me)*me,A.push(T);let de=V.type===10?8:4;T+=I.length>4?Math.ceil(I.length/de)*te:I.length*X});let D=16;T=Math.ceil(T/D)*D;let B=new ArrayBuffer(T);m.forEach((V,I)=>{let X=A[I],te=typeof V.data=="number"?[V.data]:V.data;if(V.type===6)new Int32Array(B,X,te.length).set(te);else if(V.type===12)new Uint32Array(B,X,te.length).set(te);else if(V.type===10)new Uint16Array(B,X,te.length).set(te);else if(V.type===1)new Float32Array(B,X,te.length).set(te);else throw new Error(`Unsupported uniform type: ${En(V.type)}`)});let P=this.gpuDataManager.create(T,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(P.buffer,0,B,0,T),this.gpuDataManager.release(P.id),S={offset:0,size:T,buffer:P.buffer}}let b=this.programManager.normalizeDispatchGroupSize(f),C=b[1]===1&&b[2]===1,N=B0(e,r,C),k=this.programManager.getArtifact(N);if(k||(k=this.programManager.build(e,b),this.programManager.setArtifact(N,k),He("info",()=>`[artifact] key: ${N}, programName: ${e.name}`)),m&&k.uniformVariablesInfo){if(m.length!==k.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${k.uniformVariablesInfo.length}, got ${m.length} in program "${k.programInfo.name}".`);for(let T=0;T<m.length;T++){let A=m[T],D=A.type,B=typeof A.data=="number"?1:A.data.length,[P,V]=k.uniformVariablesInfo[T];if(D!==P||B!==V)throw new Error(`Uniform variable ${T} mismatch: expect type ${P} with size ${V}, got type ${D} with size ${B} in program "${k.programInfo.name}".`)}}if(He("info",()=>`[ProgramManager] run "${e.name}" (key=${N}) with ${b[0]}x${b[1]}x${b[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let T={kernelId:this.currentKernelId,programName:k.programInfo.name,inputTensorViews:r,outputTensorViews:w};this.pendingKernels.push(T),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(T)}return this.programManager.run(k,d,$,b,S),mr(e.name),w}upload(e,r){this.gpuDataManager.upload(e,r)}memcpy(e,r){this.gpuDataManager.memcpy(e,r)}async download(e,r){await this.gpuDataManager.download(e,r)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,r,i,s){let o=m_.get(e);if(!o)throw new Error(`kernel not implemented: ${e}`);let u={kernelType:e,kernelName:s,kernelEntry:o[0],attributes:[o[1],i]};this.kernels.set(r,u)}releaseKernel(e){let r=this.kernelPersistentData.get(e);if(r){for(let i of r)this.gpuDataManager.release(i.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,r,i){let s=this.kernels.get(e);if(!s)throw new Error(`kernel not created: ${e}`);let o=s.kernelType,u=s.kernelName,d=s.kernelEntry,c=s.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${o}] ${u}" is not allowed to be called recursively`);this.currentKernelId=e,c[0]&&(c[1]=c[0](c[1]),c[0]=void 0),He("info",()=>`[WebGPU] Start to run kernel "[${o}] ${u}"...`);let f=this.env.debug;this.temporaryData=[];try{return f&&this.device.pushErrorScope("validation"),d(r,c[1]),0}catch(m){return i.push(Promise.resolve(`[WebGPU] Kernel "[${o}] ${u}" failed. ${m}`)),1}finally{f&&i.push(this.device.popErrorScope().then(m=>m?`GPU validation error for kernel "[${o}] ${u}": ${m.message}`:null));for(let m of this.temporaryData)this.gpuDataManager.release(m.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,r,i,s){let o=this.sessionExternalDataMapping.get(e);o||(o=new Map,this.sessionExternalDataMapping.set(e,o));let u=o.get(r),d=this.gpuDataManager.registerExternalBuffer(i,s,u);return o.set(r,[d,i]),d}unregisterBuffers(e){let r=this.sessionExternalDataMapping.get(e);r&&(r.forEach(i=>this.gpuDataManager.unregisterExternalBuffer(i[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let r=this.gpuDataManager.get(e);if(!r)throw new Error(`no GPU data for buffer: ${e}`);return r.buffer}createDownloader(e,r,i){return async()=>{let s=await Tp(this,e,r);return tf(s.buffer,i)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){He("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){He("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){He("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),r=this.capturedPendingKernels.get(this.currentSessionId),i=e.length;this.pendingKernels=[];for(let s=0;s<i;s++){let o=this.getComputePassEncoder(),u=e[s];this.writeTimestamp(this.pendingDispatchNumber*2),o.setPipeline(u.computePipeline),o.setBindGroup(0,u.bindGroup),o.dispatchWorkgroups(...u.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(r[s]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),w_={};us(w_,{init:()=>__});var kl,L0,__,ux=ae(()=>{"use strict";Ie(),Tn(),Re(),m$(),kl=class $_{constructor(r,i,s,o){this.module=r,this.dataType=i,this.data=s,this.dims=o}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let r=K.size(this.dims);return r===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,r)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let r=K.size(this.dims);return r===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,r)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let r=K.size(this.dims);return r===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,r)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let r=K.size(this.dims);return r===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,r)}reshape(r){if(K.size(r)!==K.size(this.dims))throw new Error("Invalid new shape");return new $_(this.module,this.dataType,this.data,r)}},L0=class{constructor(e,r,i){this.module=e,this.backend=r,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=r.adapterInfo,this.deviceLimits=r.device.limits;let s=e.PTR_SIZE,o=i/e.PTR_SIZE,u=s===4?"i32":"i64";this.opKernelContext=Number(e.getValue(s*o++,u));let d=Number(e.getValue(s*o++,u));this.outputCount=Number(e.getValue(s*o++,u)),this.customDataOffset=Number(e.getValue(s*o++,"*")),this.customDataSize=Number(e.getValue(s*o++,u));let c=[];for(let f=0;f<d;f++){let m=Number(e.getValue(s*o++,u)),y=Number(e.getValue(s*o++,"*")),w=Number(e.getValue(s*o++,u)),$=[];for(let S=0;S<w;S++)$.push(Number(e.getValue(s*o++,u)));c.push(new kl(e,m,y,$))}this.inputs=c}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,r){var d;let i=((d=r==null?void 0:r.inputs)==null?void 0:d.map(c=>typeof c=="number"?this.inputs[c]:c))??this.inputs,s=(r==null?void 0:r.outputs)??[],o=(c,f,m)=>new kl(this.module,f,this.output(c,m),m),u=(c,f)=>{let m=Zi(c,f);if(!m)throw new Error(`Unsupported data type: ${c}`);let y=m>0?this.backend.gpuDataManager.create(m).id:0;return new kl(this.module,c,y,f)};return this.backend.run(e,i,s,o,u,this.outputCount)}output(e,r){let i=this.module.stackSave();try{let s=this.module.PTR_SIZE,o=s===4?"i32":"i64",u=this.module.stackAlloc((1+r.length)*s);this.module.setValue(u,r.length,o);for(let d=0;d<r.length;d++)this.module.setValue(u+s*(d+1),r[d],o);return this.module._JsepOutput(this.opKernelContext,e,u)}catch(s){throw new Error(`Failed to generate kernel's output[${e}] with dims [${r}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${s}`)}finally{this.module.stackRestore(i)}}},__=async(e,r,i,s)=>{let o=r.jsepInit;if(!o)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let u=(ox(),Vo(y_)).WebGpuBackend,d=new u;await d.initialize(i,s),o("webgpu",[d,c=>d.alloc(Number(c)),c=>d.free(c),(c,f,m,y=!1)=>{if(y)He("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(c)}, dst=${Number(f)}, size=${Number(m)}`),d.memcpy(Number(c),Number(f));else{He("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(c)}, gpuDataId=${Number(f)}, size=${Number(m)}`);let w=r.HEAPU8.subarray(Number(c>>>0),Number(c>>>0)+Number(m));d.upload(Number(f),w)}},async(c,f,m)=>{He("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${c}, dataOffset=${f}, size=${m}`),await d.download(Number(c),()=>r.HEAPU8.subarray(Number(f)>>>0,Number(f+m)>>>0))},(c,f,m)=>d.createKernel(c,Number(f),m,r.UTF8ToString(r._JsepGetNodeName(Number(f)))),c=>d.releaseKernel(c),(c,f,m,y)=>{He("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${m}, kernel=${c}, contextDataOffset=${f}`);let w=new L0(r,d,Number(f));return d.computeKernel(Number(c),w,y)},()=>d.captureBegin(),()=>d.captureEnd(),()=>d.replay()])}else{let u=new Cv(i);o("webnn",[u,()=>u.reserveTensorId(),d=>u.releaseTensorId(d),async(d,c,f,m,y)=>u.ensureTensor(d,c,f,m,y),(d,c)=>{u.uploadTensor(d,c)},async(d,c)=>u.downloadTensor(d,c),(d,c)=>u.registerMLContext(d,c),!!i.trace])}}}),U0,ff,hf,ci,j0,wp,Pl,mf,gf,Do,W0,qi,x_,b_,_p,yf,vf,wf,S_=ae(()=>{"use strict";yr(),p$(),f$(),Ie(),ra(),Zp(),Jp(),U0=(e,r)=>{nt()._OrtInit(e,r)!==0&&Ke("Can't initialize onnxruntime.")},ff=async e=>{U0(e.wasm.numThreads,Al(e.logLevel))},hf=async(e,r)=>{var s,o;(o=(s=nt()).asyncInit)==null||o.call(s);let i=e.webgpu.adapter;if(r==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let u=e.webgpu.powerPreference;if(u!==void 0&&u!=="low-power"&&u!=="high-performance")throw new Error(`Invalid powerPreference setting: "${u}"`);let d=e.webgpu.forceFallbackAdapter;if(d!==void 0&&typeof d!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${d}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:u,forceFallbackAdapter:d}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(r==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let u=(ux(),Vo(w_)).init;r==="webgpu"&&await u("webgpu",nt(),e,i),r==="webnn"&&await u("webnn",nt(),e)}},ci=new Map,j0=e=>{let r=nt(),i=r.stackSave();try{let s=r.PTR_SIZE,o=r.stackAlloc(2*s);r._OrtGetInputOutputCount(e,o,o+s)!==0&&Ke("Can't get session input/output count.");let u=s===4?"i32":"i64";return[Number(r.getValue(o,u)),Number(r.getValue(o+s,u))]}finally{r.stackRestore(i)}},wp=(e,r)=>{let i=nt(),s=i.stackSave(),o=0;try{let u=i.PTR_SIZE,d=i.stackAlloc(2*u);i._OrtGetInputOutputMetadata(e,r,d,d+u)!==0&&Ke("Can't get session input/output metadata.");let c=Number(i.getValue(d,"*"));o=Number(i.getValue(d+u,"*"));let f=i.HEAP32[o/4];if(f===0)return[c,0];let m=i.HEAPU32[o/4+1],y=[];for(let w=0;w<m;w++){let $=Number(i.getValue(o+8+w*u,"*"));y.push($!==0?i.UTF8ToString($):Number(i.getValue(o+8+(w+m)*u,"*")))}return[c,f,y]}finally{i.stackRestore(s),o!==0&&i._OrtFree(o)}},Pl=e=>{let r=nt(),i=r._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return r.HEAPU8.set(e,i),[i,e.byteLength]},mf=async(e,r)=>{var w,$,S,b;let i,s,o=nt();Array.isArray(e)?[i,s]=e:e.buffer===o.HEAPU8.buffer?[i,s]=[e.byteOffset,e.byteLength]:[i,s]=Pl(e);let u=0,d=0,c=0,f=[],m=[],y=[];try{if([d,f]=await xv(r),(r==null?void 0:r.externalData)&&o.mountExternalData){let I=[];for(let X of r.externalData){let te=typeof X=="string"?X:X.path,me=typeof X=="string"?X:X.data;I.push(Ul(me).then(de=>{o.mountExternalData(te,de)}))}await Promise.all(I)}for(let I of(r==null?void 0:r.executionProviders)??[])if((typeof I=="string"?I:I.name)==="webnn"){if(o.shouldTransferToMLTensor=!1,typeof I!="string"){let X=I,te=X==null?void 0:X.context,me=X==null?void 0:X.gpuDevice,de=X==null?void 0:X.deviceType,pe=X==null?void 0:X.powerPreference;te?o.currentContext=te:me?o.currentContext=await o.webnnCreateMLContext(me):o.currentContext=await o.webnnCreateMLContext({deviceType:de,powerPreference:pe})}else o.currentContext=await o.webnnCreateMLContext();break}u=await o._OrtCreateSession(i,s,d),(w=o.webgpuOnCreateSession)==null||w.call(o,u),u===0&&Ke("Can't create a session."),($=o.jsepOnCreateSession)==null||$.call(o),o.currentContext&&(o.webnnRegisterMLContext(u,o.currentContext),o.currentContext=void 0,o.shouldTransferToMLTensor=!0);let[C,N]=j0(u),k=!!(r!=null&&r.enableGraphCapture),T=[],A=[],D=[],B=[],P=[];for(let I=0;I<C;I++){let[X,te,me]=wp(u,I);X===0&&Ke("Can't get an input name."),m.push(X);let de=o.UTF8ToString(X);T.push(de),D.push(te===0?{name:de,isTensor:!1}:{name:de,isTensor:!0,type:En(te),shape:me})}for(let I=0;I<N;I++){let[X,te,me]=wp(u,I+C);X===0&&Ke("Can't get an output name."),y.push(X);let de=o.UTF8ToString(X);A.push(de),B.push(te===0?{name:de,isTensor:!1}:{name:de,isTensor:!0,type:En(te),shape:me});{if(k&&(r==null?void 0:r.preferredOutputLocation)===void 0){P.push("gpu-buffer");continue}let pe=typeof(r==null?void 0:r.preferredOutputLocation)=="string"?r.preferredOutputLocation:((S=r==null?void 0:r.preferredOutputLocation)==null?void 0:S[de])??"cpu",G=o.webnnIsGraphOutput;if(pe==="cpu"&&G&&G(u,de)){P.push("ml-tensor-cpu-output");continue}if(pe!=="cpu"&&pe!=="cpu-pinned"&&pe!=="gpu-buffer"&&pe!=="ml-tensor")throw new Error(`Not supported preferred output location: ${pe}.`);if(k&&pe!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${pe}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);P.push(pe)}}let V=null;return P.some(I=>I==="gpu-buffer"||I==="ml-tensor"||I==="ml-tensor-cpu-output")&&(c=o._OrtCreateBinding(u),c===0&&Ke("Can't create IO binding."),V={handle:c,outputPreferredLocations:P,outputPreferredLocationsEncoded:P.map(I=>I==="ml-tensor-cpu-output"?"ml-tensor":I).map(I=>Ep(I))}),ci.set(u,[u,m,y,V,k,!1]),[u,T,A,D,B]}catch(C){throw m.forEach(N=>o._OrtFree(N)),y.forEach(N=>o._OrtFree(N)),c!==0&&o._OrtReleaseBinding(c)!==0&&Ke("Can't release IO binding."),u!==0&&o._OrtReleaseSession(u)!==0&&Ke("Can't release session."),C}finally{o._free(i),d!==0&&o._OrtReleaseSessionOptions(d)!==0&&Ke("Can't release session options."),f.forEach(C=>o._free(C)),(b=o.unmountExternalData)==null||b.call(o)}},gf=e=>{var f,m,y;let r=nt(),i=ci.get(e);if(!i)throw new Error(`cannot release session. invalid session id: ${e}`);let[s,o,u,d,c]=i;d&&(c&&r._OrtClearBoundOutputs(d.handle)!==0&&Ke("Can't clear bound outputs."),r._OrtReleaseBinding(d.handle)!==0&&Ke("Can't release IO binding.")),(f=r.jsepOnReleaseSession)==null||f.call(r,e),(m=r.webnnOnReleaseSession)==null||m.call(r,e),(y=r.webgpuOnReleaseSession)==null||y.call(r,e),o.forEach(w=>r._OrtFree(w)),u.forEach(w=>r._OrtFree(w)),r._OrtReleaseSession(s)!==0&&Ke("Can't release session."),ci.delete(e)},Do=new Map,W0=1,qi=new Map,x_=e=>{let r=nt(),i=r._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a LoRA adapter. failed to allocate a buffer of size ${e.byteLength}.`);try{r.HEAPU8.set(e,i);let s=r._OrtCreateLoraAdapter(i,e.byteLength);s===0&&Ke("Can't create a LoRA adapter.");let o=W0++;return Do.set(o,s),o}finally{r._free(i)}},b_=e=>{let r=nt(),i=Do.get(e);if(i===void 0)throw new Error(`cannot release LoRA adapter. invalid adapter id: ${e}`);if(qi.has(e))throw new Error(`cannot release LoRA adapter. the adapter is used by a run in progress. adapter id: ${e}`);r._OrtReleaseLoraAdapter(i)!==0&&Ke("Can't release LoRA adapter."),Do.delete(e)},_p=async(e,r,i,s,o,u,d=!1)=>{if(!e){r.push(0);return}let c=nt(),f=c.PTR_SIZE,m=e[0],y=e[1],w=e[3],$=w,S,b;if(m==="string"&&(w==="gpu-buffer"||w==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(d&&w!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${u} when enableGraphCapture is true.`);if(w==="gpu-buffer"){let k=e[2].gpuBuffer;b=Zi(Qi(m),y);{let T=c.jsepRegisterBuffer;if(!T)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');S=T(s,u,k,b)}}else if(w==="ml-tensor"){let k=e[2].mlTensor;b=Zi(Qi(m),y);let T=c.webnnRegisterMLTensor;if(!T)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');S=T(s,k,Qi(m),y)}else{let k=e[2];if(Array.isArray(k)){b=f*k.length,S=c._malloc(b),i.push(S);for(let T=0;T<k.length;T++){if(typeof k[T]!="string")throw new TypeError(`tensor data at index ${T} is not a string`);c.setValue(S+T*f,qr(k[T],i),"*")}}else{let T=c.webnnIsGraphInput,A=c.webnnIsGraphOutput;if(m!=="string"&&T&&A){let D=c.UTF8ToString(o);if(T(s,D)||A(s,D)){let B=Qi(m);b=Zi(B,y),$="ml-tensor";let P=c.webnnCreateTemporaryTensor,V=c.webnnUploadTensor;if(!P||!V)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let I=await P(s,B,y);V(I,new Uint8Array(k.buffer,k.byteOffset,k.byteLength)),S=I}else b=k.byteLength,S=c._malloc(b),i.push(S),c.HEAPU8.set(new Uint8Array(k.buffer,k.byteOffset,b),S)}else b=k.byteLength,S=c._malloc(b),i.push(S),c.HEAPU8.set(new Uint8Array(k.buffer,k.byteOffset,b),S)}}let C=c.stackSave(),N=c.stackAlloc(4*y.length);try{y.forEach((T,A)=>c.setValue(N+A*f,T,f===4?"i32":"i64"));let k=c._OrtCreateTensor(Qi(m),S,b,N,y.length,Ep($));k===0&&Ke(`Can't create tensor for input/output. session=${s}, index=${u}.`),r.push(k)}finally{c.stackRestore(C)}},yf=async(e,r,i,s,o,u,d=[])=>{var G,he,ye,ge;let c=nt(),f=c.PTR_SIZE,m=ci.get(e);if(!m)throw new Error(`cannot run inference. invalid session id: ${e}`);let y=m[0],w=m[1],$=m[2],S=m[3],b=m[4],C=m[5],N=[];if(d.length>0){if(S)throw new Error("LoRA adapters are not supported for a session that uses IO binding, e.g. when an output is preferred to be on GPU, or when the WebNN execution provider produces an output.");for(let ee of d){let re=Do.get(ee);if(re===void 0)throw new Error(`cannot run inference. invalid LoRA adapter id: ${ee}`);N.push(re)}}let k=r.length,T=s.length,A=0,D=[],B=[],P=[],V=[],I=[],X=c.stackSave(),te=c.stackAlloc(k*f),me=c.stackAlloc(k*f),de=c.stackAlloc(T*f),pe=c.stackAlloc(T*f);try{for(let O of d)qi.set(O,(qi.get(O)??0)+1);[A,D]=$v(u,N),Yi("wasm prepareInputOutputTensor");for(let O=0;O<k;O++)await _p(i[O],B,V,e,w[r[O]],r[O],b);for(let O=0;O<T;O++)await _p(o[O],P,V,e,$[s[O]],k+s[O],b);Xi("wasm prepareInputOutputTensor");for(let O=0;O<k;O++)c.setValue(te+O*f,B[O],"*"),c.setValue(me+O*f,w[r[O]],"*");for(let O=0;O<T;O++)c.setValue(de+O*f,P[O],"*"),c.setValue(pe+O*f,$[s[O]],"*");if(S&&!C){let{handle:O,outputPreferredLocations:F,outputPreferredLocationsEncoded:ne}=S;if(w.length!==k)throw new Error(`input count from feeds (${k}) is expected to be always equal to model's input count (${w.length}).`);Yi("wasm bindInputsOutputs");for(let Q=0;Q<k;Q++){let we=r[Q];await c._OrtBindInput(O,w[we],B[Q])!==0&&Ke(`Can't bind input[${Q}] for session=${e}.`)}for(let Q=0;Q<T;Q++){let we=s[Q];(G=o[Q])!=null&&G[3]?(I.push(P[Q]),c._OrtBindOutput(O,$[we],P[Q],0)!==0&&Ke(`Can't bind pre-allocated output[${Q}] for session=${e}.`)):c._OrtBindOutput(O,$[we],0,ne[we])!==0&&Ke(`Can't bind output[${Q}] to ${F[Q]} for session=${e}.`)}Xi("wasm bindInputsOutputs"),ci.set(e,[y,w,$,S,b,!0])}(he=c.jsepOnRunStart)==null||he.call(c,y),(ye=c.webnnOnRunStart)==null||ye.call(c,y);let ee;S?ee=await c._OrtRunWithBinding(y,S.handle,T,de,A):ee=await c._OrtRun(y,me,te,k,pe,T,de,A),ee!==0&&Ke("failed to call OrtRun().");let re=[],ue=[];Yi("wasm ProcessOutputTensor");for(let O=0;O<T;O++){let F=Number(c.getValue(de+O*f,"*"));if(F===P[O]||I.includes(P[O])){re.push(o[O]),F!==P[O]&&c._OrtReleaseTensor(F)!==0&&Ke("Can't release tensor.");continue}let ne=c.stackSave(),Q=c.stackAlloc(4*f),we=!1,Se,Te=0;try{c._OrtGetTensorData(F,Q,Q+f,Q+2*f,Q+3*f)!==0&&Ke(`Can't access output tensor data on index ${O}.`);let ze=f===4?"i32":"i64",Pe=Number(c.getValue(Q,ze));Te=c.getValue(Q+f,"*");let gt=c.getValue(Q+f*2,"*"),Gt=Number(c.getValue(Q+f*3,ze)),Ut=[];for(let st=0;st<Gt;st++)Ut.push(Number(c.getValue(gt+st*f,ze)));c._OrtFree(gt)!==0&&Ke("Can't free memory for tensor dims.");let pt=Ut.reduce((st,rt)=>st*rt,1);Se=En(Pe);let Ve=S==null?void 0:S.outputPreferredLocations[s[O]];if(Se==="string"){if(Ve==="gpu-buffer"||Ve==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let st=[];for(let rt=0;rt<pt;rt++){let St=c.getValue(Te+rt*f,"*"),De=c.getValue(Te+(rt+1)*f,"*"),Ue=rt===pt-1?void 0:De-St;st.push(c.UTF8ToString(St,Ue))}re.push([Se,Ut,st,"cpu"])}else if(Ve==="gpu-buffer"&&pt>0){let st=c.jsepGetBuffer;if(!st)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let rt=st(Te),St=Zi(Pe,pt);if(St===void 0||!Yp(Se))throw new Error(`Unsupported data type: ${Se}`);we=!0,re.push([Se,Ut,{gpuBuffer:rt,download:c.jsepCreateDownloader(rt,St,Se),dispose:()=>{c._OrtReleaseTensor(F)!==0&&Ke("Can't release tensor.")}},"gpu-buffer"])}else if(Ve==="ml-tensor"&&pt>0){let st=c.webnnEnsureTensor,rt=c.webnnIsGraphInputOutputTypeSupported;if(!st||!rt)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Zi(Pe,pt)===void 0||!Xp(Se))throw new Error(`Unsupported data type: ${Se}`);if(!rt(e,Se,!1))throw new Error(`preferredLocation "ml-tensor" for ${Se} output is not supported by current WebNN Context.`);let St=await st(e,Te,Pe,Ut,!1);we=!0,re.push([Se,Ut,{mlTensor:St,download:c.webnnCreateMLTensorDownloader(Te,Se),dispose:()=>{c.webnnReleaseTensorId(Te),c._OrtReleaseTensor(F)}},"ml-tensor"])}else if(Ve==="ml-tensor-cpu-output"&&pt>0){let st=c.webnnCreateMLTensorDownloader(Te,Se)(),rt=re.length;we=!0,ue.push((async()=>{let St=[rt,await st];return c.webnnReleaseTensorId(Te),c._OrtReleaseTensor(F),St})()),re.push([Se,Ut,[],"cpu"])}else{let st=Ll(Se),rt=new st(pt);new Uint8Array(rt.buffer,rt.byteOffset,rt.byteLength).set(c.HEAPU8.subarray(Te,Te+rt.byteLength)),re.push([Se,Ut,rt,"cpu"])}}finally{c.stackRestore(ne),Se==="string"&&Te&&c._free(Te),we||c._OrtReleaseTensor(F)}}S&&!b&&(c._OrtClearBoundOutputs(S.handle)!==0&&Ke("Can't clear bound outputs."),ci.set(e,[y,w,$,S,b,!1]));for(let[O,F]of await Promise.all(ue))re[O][2]=F;return Xi("wasm ProcessOutputTensor"),re}finally{(ge=c.webnnOnRunEnd)==null||ge.call(c,y),c.stackRestore(X),B.forEach(ee=>c._OrtReleaseTensor(ee)),P.forEach(ee=>c._OrtReleaseTensor(ee)),V.forEach(ee=>c._free(ee)),A!==0&&c._OrtReleaseRunOptions(A),D.forEach(ee=>c._free(ee));for(let ee of d){let re=qi.get(ee)-1;re===0?qi.delete(ee):qi.set(ee,re)}}},vf=e=>{let r=nt(),i=ci.get(e);if(!i)throw new Error("invalid session id");let s=i[0],o=r._OrtEndProfiling(s);o===0&&Ke("Can't get an profile file name."),r._OrtFree(o)},wf=e=>{let r=[];for(let i of e){let s=i[2];!Array.isArray(s)&&"buffer"in s&&r.push(s.buffer)}return r}}),sn,ar,ns,Mo,Bo,El,$p,Tl,Hi,Gi,V0,k_,E_,T_,C_,I_,z_,N_,O_,A_,_f=ae(()=>{"use strict";yr(),S_(),ra(),Kp(),Jp(),sn=()=>!!dt.wasm.proxy&&typeof document<"u",ns=!1,Mo=!1,Bo=!1,Tl=new Map,Hi=(e,r)=>{let i=Tl.get(e);i?i.push(r):Tl.set(e,[r])},Gi=()=>{if(ns||!Mo||Bo||!ar)throw new Error("worker not ready")},V0=e=>{switch(e.data.type){case"init-wasm":ns=!1,e.data.err?(Bo=!0,$p[1](e.data.err)):(Mo=!0,$p[0]()),El&&(URL.revokeObjectURL(El),El=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let r=Tl.get(e.data.type);e.data.err?r.shift()[1](e.data.err):r.shift()[0](e.data.out);break}default:}},k_=async()=>{if(!Mo){if(ns)throw new Error("multiple calls to 'initWasm()' detected.");if(Bo)throw new Error("previous call to 'initWasm()' failed.");if(ns=!0,sn())return new Promise((e,r)=>{ar==null||ar.terminate(),wv().then(([i,s])=>{try{ar=s,ar.onerror=u=>r(u),ar.onmessage=V0,$p=[e,r];let o={type:"init-wasm",in:dt};!o.in.wasm.wasmPaths&&(i||kp)&&(o.in.wasm.wasmPaths={wasm:new URL("/assets/ort-wasm-simd-threaded.jsep-Dt5UNR3U.wasm",import.meta.url).href}),ar.postMessage(o),El=i}catch(o){r(o)}},r)});try{await Qp(dt.wasm),await ff(dt),Mo=!0}catch(e){throw Bo=!0,e}finally{ns=!1}}},E_=async e=>{if(sn())return Gi(),new Promise((r,i)=>{Hi("init-ep",[r,i]);let s={type:"init-ep",in:{epName:e,env:dt}};ar.postMessage(s)});await hf(dt,e)},T_=async e=>sn()?(Gi(),new Promise((r,i)=>{Hi("copy-from",[r,i]);let s={type:"copy-from",in:{buffer:e}};ar.postMessage(s,[e.buffer])})):Pl(e),C_=async(e,r)=>{if(sn()){if(r!=null&&r.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Gi(),new Promise((i,s)=>{Hi("create",[i,s]);let o={type:"create",in:{model:e,options:{...r}}},u=[];e instanceof Uint8Array&&u.push(e.buffer),ar.postMessage(o,u)})}else return mf(e,r)},I_=async e=>{if(sn())return Gi(),new Promise((r,i)=>{Hi("release",[r,i]);let s={type:"release",in:e};ar.postMessage(s)});gf(e)},z_=async e=>{if(sn())throw new Error("LoRA adapter is not supported for proxy.");let r=typeof e=="string"?await Ul(e):e;return x_(r)},N_=async e=>{if(sn())throw new Error("LoRA adapter is not supported for proxy.");b_(e)},O_=async(e,r,i,s,o,u,d)=>{if(sn()){if(d.length>0)throw new Error("LoRA adapter is not supported for proxy.");if(i.some(c=>c[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(o.some(c=>c))throw new Error("pre-allocated output tensor is not supported for proxy.");return Gi(),new Promise((c,f)=>{Hi("run",[c,f]);let m=i,y={type:"run",in:{sessionId:e,inputIndices:r,inputs:m,outputIndices:s,options:u}};ar.postMessage(y,wf(m))})}else return yf(e,r,i,s,o,u,d)},A_=async e=>{if(sn())return Gi(),new Promise((r,i)=>{Hi("end-profiling",[r,i]);let s={type:"end-profiling",in:e};ar.postMessage(s)});vf(e)}}),$f,R_=ae(()=>{"use strict";yr(),_f(),$f=class{async loadAdapter(e){Tr(),this.adapterId=await z_(e),mr()}async dispose(){return N_(this.adapterId)}}}),xp,F0,D_,lx=ae(()=>{"use strict";yr(),R_(),_f(),Ie(),Gp(),Jp(),xp=(e,r)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${r()}`)}},F0=e=>{switch(e[3]){case"cpu":return new Hr(e[0],e[2],e[1]);case"gpu-buffer":{let r=e[0];if(!Yp(r))throw new Error(`not supported data type: ${r} for deserializing GPU tensor`);let{gpuBuffer:i,download:s,dispose:o}=e[2];return Hr.fromGpuBuffer(i,{dataType:r,dims:e[1],download:s,dispose:o})}case"ml-tensor":{let r=e[0];if(!Xp(r))throw new Error(`not supported data type: ${r} for deserializing MLTensor tensor`);let{mlTensor:i,download:s,dispose:o}=e[2];return Hr.fromMLTensor(i,{dataType:r,dims:e[1],download:s,dispose:o})}default:throw new Error(`invalid data location: ${e[3]}`)}},D_=class{async fetchModelAndCopyToWasmMemory(e){return T_(await Ul(e))}async loadModel(e,r){Tr();let i;typeof e=="string"?i=await this.fetchModelAndCopyToWasmMemory(e):i=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await C_(i,r),mr()}async dispose(){return I_(this.sessionId)}async run(e,r,i,s=[]){Tr();let o=s.map(S=>{if(!(S instanceof $f))throw new Error("LoRA adapter was not created by the WebAssembly backend.");return S.adapterId}),u=[],d=[];Object.entries(e).forEach(S=>{let b=S[0],C=S[1],N=this.inputNames.indexOf(b);if(N===-1)throw new Error(`invalid input '${b}'`);u.push(C),d.push(N)});let c=[],f=[];Object.entries(r).forEach(S=>{let b=S[0],C=S[1],N=this.outputNames.indexOf(b);if(N===-1)throw new Error(`invalid output '${b}'`);c.push(C),f.push(N)});let m=u.map((S,b)=>xp(S,()=>`input "${this.inputNames[d[b]]}"`)),y=c.map((S,b)=>S?xp(S,()=>`output "${this.outputNames[f[b]]}"`):null),w=await O_(this.sessionId,d,m,f,y,i,o),$={};for(let S=0;S<w.length;S++)$[this.outputNames[f[S]]]=c[S]??F0(w[S]);return mr(),$}startProfiling(){}endProfiling(){A_(this.sessionId)}}}),M_,dx=ae(()=>{"use strict";M_=e=>{if(e!=null&&e.epContextDataRead)throw new Error('session option "epContextDataRead" is not supported by ONNX Runtime Web')}}),B_={};us(B_,{OnnxruntimeWebAssemblyBackend:()=>Lp,initializeFlags:()=>Pp,wasmBackend:()=>P_});var Pp,Lp,P_,cx=ae(()=>{"use strict";yr(),R_(),_f(),lx(),dx(),Pp=()=>{(typeof dt.wasm.initTimeout!="number"||dt.wasm.initTimeout<0)&&(dt.wasm.initTimeout=0);let e=dt.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),dt.wasm.simd=!1),typeof dt.wasm.proxy!="boolean"&&(dt.wasm.proxy=!1),typeof dt.wasm.trace!="boolean"&&(dt.wasm.trace=!1),typeof dt.wasm.numThreads!="number"||!Number.isInteger(dt.wasm.numThreads)||dt.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)dt.wasm.numThreads=1;else{let r=typeof navigator>"u"?G2("node:os").cpus().length:navigator.hardwareConcurrency;dt.wasm.numThreads=Math.min(4,Math.ceil((r||1)/2))}},Lp=class{async init(e){Pp(),await k_(),await E_(e)}async createInferenceSessionHandler(e,r){M_(r);let i=new D_;return await i.loadModel(e,r),i}async createLoraAdapterHandler(e){let r=new $f;return await r.loadAdapter(e),r}},P_=new Lp});yr();yr();yr();var px="1.31.1";{let e=(cx(),Vo(B_)).wasmBackend;is("webgpu",e,5),is("webnn",e,5),is("cpu",e,10),is("wasm",e,10)}Object.defineProperty(dt.versions,"web",{value:px,enumerable:!0});/**
* @license
* Copyright 2021 Google LLC. All Rights Reserved.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
* =============================================================================
*//**
 * @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 *//**
 * @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */const fx=8;async function hx(e=fx){const r={};for(let i=1;i<=e;i++)try{r[String(i)]=await Hp.create(`/model_${i}.onnx`)}catch{console.warn(`Modelo /model_${i}.onnx não encontrado ou ainda não treinado.`)}return r}async function L_(e,r,i=null,s=new Set){const o=new Hr("float32",Float32Array.from(r),[1,r.length]),u=await e.run({state:o}),d=Array.from(u.q_values.data),c=d.length,f=r.join("");if(c>1){i!==null&&i>=0&&i<c&&(d[i]=-1/0);const w=[...d];for(let $=0;$<c;$++)s.has(`${f}:${$}`)&&(w[$]=-1/0);if(Math.max(...w)>-1/0)for(let $=0;$<c;$++)d[$]=w[$]}let m=0,y=-1/0;for(let w=0;w<c;w++)d[w]>y&&(y=d[w],m=w);return{action:m,qValues:d}}async function mx(e,r,i,s=4){if(!e)return s;let o=[...r],u=null;const d=new Set,c=o.length*2;for(let f=1;f<=c;f++){if(zl(o))return f-1;const m=o.join(""),{action:y}=await L_(e,o,u,d);if(d.add(`${m}:${y}`),u=y,o=Wo(o,i,y),zl(o))return f}return s}function U_(){const e=new Date,r=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${r}-${i}-${s}`}function gx(e=U_()){const r=new Date("2026-01-01T00:00:00"),i=new Date(`${e}T00:00:00`),s=Math.floor((i-r)/(1e3*60*60*24));return Math.max(1,s+1)}function q0(e){let r=2166136261;for(let s=0;s<e.length;s++)r^=e.charCodeAt(s),r=Math.imul(r,16777619);let i=r>>>0;return function(){i|=0,i=i+1831565813|0;let o=Math.imul(i^i>>>15,1|i);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}const H0=[5,6,7,8],bp=8,j_="pyramidle_stats_v1",G0="pyramidle_daily_",Sp=[{id:"slide-game",label:"Jogo"},{id:"slide-math",label:"01 Tabuleiro"},{id:"slide-ai",label:"02 Resolvedor"}];function yx(){try{const e=localStorage.getItem(j_);if(e)return JSON.parse(e)}catch{}return{played:0,wins:0,currentStreak:0,maxStreak:0,lastWinDate:null}}function vx(){const e=tt.useMemo(()=>U_(),[]),r=tt.useMemo(()=>gx(e),[e]),[i,s]=tt.useState("daily"),[o,u]=tt.useState(5),[d,c]=tt.useState(null),[f,m]=tt.useState([]),[y,w]=tt.useState([]),[$,S]=tt.useState(0),[b,C]=tt.useState(4),[N,k]=tt.useState(!1),[T,A]=tt.useState(!1),[D,B]=tt.useState(null),[P,V]=tt.useState(!0),[I,X]=tt.useState(0),[te,me]=tt.useState(()=>yx()),[de,pe]=tt.useState(()=>{try{const De=localStorage.getItem(`${G0}${e}`);return De?JSON.parse(De):null}catch{return null}}),[G,he]=tt.useState(!1),[ye,ge]=tt.useState(!1),[ee,re]=tt.useState(!1),ue=tt.useRef(null),O=tt.useRef(null),F=tt.useRef(new Set),ne=H0[(r-1)%H0.length],Q=i==="daily"?ne:o,we=tt.useMemo(()=>am(Q,760,420),[Q]);tt.useEffect(()=>{hx(bp).then(De=>c(De)).catch(De=>console.error("Erro ao carregar modelos ONNX:",De))},[]);const Se=(De=i,Ue=Q,ot=null)=>{k(!1),re(!1),B(null),A(!1),O.current=null,F.current=new Set;const ct=am(Ue,760,420),It=De==="daily"?q0(`PYRAMIDLE-${e}-BASE-${Ue}`):ot?q0(ot):Math.random,sr=Math.min(ct.balls.length,Ue+3),Cn=Ue<=2?1:Math.min(Ue-1,7),{initialState:on,optimalHintClicks:or}=V2(ct.adjMatrix,It,sr,Cn);m(on),w(on),S(0);const mi=d?d[String(Ue)]:null;mx(mi,on,ct.adjMatrix,or).then(Cr=>C(Cr))};tt.useEffect(()=>{Se(i,Q)},[i,Q,d]);const Te=Math.max(b*2,4),ze=y.length>0&&zl(y),Pe=!ze&&!N&&$>=Te;tt.useEffect(()=>{Pe&&re(!0)},[Pe]),tt.useEffect(()=>{if(ze&&(k(!1),i==="daily"&&!de)){const De={clicks:$,usedAi:T,date:e};pe(De);try{localStorage.setItem(`${G0}${e}`,JSON.stringify(De))}catch{}me(Ue=>{const ot=new Date;ot.setDate(ot.getDate()-1);const ct=`${ot.getFullYear()}-${String(ot.getMonth()+1).padStart(2,"0")}-${String(ot.getDate()).padStart(2,"0")}`,It=Ue.lastWinDate===ct?Ue.currentStreak+1:Ue.lastWinDate===e?Ue.currentStreak:1,sr={played:Ue.played+1,wins:Ue.wins+1,currentStreak:It,maxStreak:Math.max(Ue.maxStreak,It),lastWinDate:e};try{localStorage.setItem(j_,JSON.stringify(sr))}catch{}return sr}),setTimeout(()=>he(!0),600)}},[ze,i,de,$,T,e]),tt.useEffect(()=>{if(!N||ze)return;const De=Q<=bp,Ue=d?d[String(Q)]:null;if(De&&!Ue){k(!1);return}const ot=setTimeout(async()=>{const ct=y.join("");let It;De?It=(await L_(Ue,y,O.current,F.current)).action:It=W2(we.adjMatrix,y),F.current.add(`${ct}:${It}`),O.current=It,B(It),w(sr=>Wo(sr,we.adjMatrix,It))},500);return()=>clearTimeout(ot)},[N,ze,y,d,Q,we]);const gt=De=>{ze||N||Pe||(B(null),O.current=De,w(Ue=>Wo(Ue,we.adjMatrix,De)),S(Ue=>Ue+1))},Gt=()=>{k(!1),re(!1),B(null),O.current=null,F.current=new Set,w(f),S(0)},Ut=()=>{re(!1),A(!0),B(null),O.current=null,F.current=new Set,w(f),S(0),k(!0)},pt=()=>{N?k(!1):(A(!0),O.current=null,F.current=new Set,k(!0))},Ve=De=>{var ct;const Ue=(ct=Sp[De])==null?void 0:ct.id,ot=document.getElementById(Ue);ot&&(ot.scrollIntoView({behavior:"smooth"}),X(De))},st=De=>{const Ue=De.currentTarget,ot=Math.round(Ue.scrollTop/Ue.clientHeight);ot!==I&&ot>=0&&ot<Sp.length&&X(ot)},rt=Q>bp||!!(d&&d[String(Q)]),St=y.reduce((De,Ue)=>De+Ue,0);return U.jsxs("div",{className:"snap-container",ref:ue,onScroll:st,children:[U.jsx("aside",{className:"slide-dots","aria-label":"Navegação de seções",children:Sp.map((De,Ue)=>U.jsxs("button",{type:"button",className:`slide-dot-btn ${I===Ue?"active":""}`,onClick:()=>Ve(Ue),title:De.label,children:[U.jsx("span",{className:"slide-dot-label",children:De.label}),U.jsx("span",{className:"slide-dot-indicator"})]},De.id))}),U.jsxs("section",{className:"snap-slide game-slide",id:"slide-game",children:[U.jsx(D2,{mode:i,setMode:s,challengeNumber:r,streak:te.currentStreak,onOpenHelp:()=>ge(!0),onOpenStats:()=>he(!0),onJumpToContext:()=>Ve(1)}),U.jsxs("main",{className:"main-container",children:[U.jsx(M2,{geometry:we,state:y,onBallClick:gt,lastAiAction:D,solving:N,solved:ze,showRadiusPreview:P}),U.jsx(B2,{mode:i,numBalls:Q,onChangeNumBalls:De=>u(De),clicks:$,maxClicks:Te,aiPar:b,blackCount:St,totalBalls:we.balls.length,solving:N,solved:ze,canUseAi:rt,onToggleSolve:pt,onReset:Gt,onNewRandomBoard:()=>Se("free",Q),showRadiusPreview:P,setShowRadiusPreview:V})]}),U.jsx("div",{className:"scroll-hint-bar",children:U.jsx("button",{type:"button",className:"scroll-down-btn",onClick:()=>Ve(1),children:"Entenda a matemática e o algoritmo de resolução ↓"})})]}),U.jsx(P2,{onBackToGame:()=>Ve(0)}),U.jsx(L2,{isOpen:G,onClose:()=>he(!1),stats:te,dailyResult:de,challengeNumber:r,aiPar:b}),U.jsx(U2,{isOpen:ye,onClose:()=>ge(!1),onJumpToContext:()=>Ve(1)}),ee&&U.jsx("div",{className:"modal-backdrop",onClick:()=>re(!1),children:U.jsxs("div",{className:"modal-card gameover-card",onClick:De=>De.stopPropagation(),children:[U.jsxs("div",{className:"modal-header",children:[U.jsx("h2",{children:"Fim de Jogo — Limite de Cliques!"}),U.jsx("button",{type:"button",className:"close-btn",onClick:()=>re(!1),children:"Fechar"})]}),U.jsxs("div",{className:"gameover-body",children:[U.jsxs("p",{children:["Você atingiu o limite máximo de"," ",U.jsxs("strong",{children:[Te," cliques"]})," (2× a Referência de"," ",U.jsxs("strong",{children:[b," cliques"]}),") sem deixar todas as bolas pretas."]}),U.jsxs("div",{className:"gameover-actions",children:[U.jsx("button",{type:"button",className:"btn btn-secondary",onClick:Gt,children:"Tentar Novamente"}),rt&&U.jsx("button",{type:"button",className:"btn btn-primary",onClick:Ut,children:"Ver Resolução Passo a Passo"})]})]})]})})]})}R2.createRoot(document.getElementById("root")).render(U.jsx(C2.StrictMode,{children:U.jsx(vx,{})}));
