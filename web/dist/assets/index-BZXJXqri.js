var x2=Object.defineProperty;var b2=(e,t,i)=>t in e?x2(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var Kh=(e,t,i)=>b2(e,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();function S2(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var gc={exports:{}},Eo={},yc={exports:{}},qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qh;function k2(){if(Qh)return qe;Qh=1;var e=Symbol.for("react.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),d=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),w=Symbol.iterator;function $(O){return O===null||typeof O!="object"?null:(O=w&&O[w]||O["@@iterator"],typeof O=="function"?O:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,C={};function N(O,F,ne){this.props=O,this.context=F,this.refs=C,this.updater=ne||S}N.prototype.isReactComponent={},N.prototype.setState=function(O,F){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,F,"setState")},N.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function k(){}k.prototype=N.prototype;function E(O,F,ne){this.props=O,this.context=F,this.refs=C,this.updater=ne||S}var A=E.prototype=new k;A.constructor=E,b(A,N.prototype),A.isPureReactComponent=!0;var D=Array.isArray,B=Object.prototype.hasOwnProperty,P={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function I(O,F,ne){var X,ve={},$e=null,Te=null;if(F!=null)for(X in F.ref!==void 0&&(Te=F.ref),F.key!==void 0&&($e=""+F.key),F)B.call(F,X)&&!V.hasOwnProperty(X)&&(ve[X]=F[X]);var Re=arguments.length-2;if(Re===1)ve.children=ne;else if(1<Re){for(var Ae=Array(Re),ct=0;ct<Re;ct++)Ae[ct]=arguments[ct+2];ve.children=Ae}if(O&&O.defaultProps)for(X in Re=O.defaultProps,Re)ve[X]===void 0&&(ve[X]=Re[X]);return{$$typeof:e,type:O,key:$e,ref:Te,props:ve,_owner:P.current}}function Y(O,F){return{$$typeof:e,type:O.type,key:F,ref:O.ref,props:O.props,_owner:O._owner}}function te(O){return typeof O=="object"&&O!==null&&O.$$typeof===e}function he(O){var F={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(ne){return F[ne]})}var ce=/\/+/g;function pe(O,F){return typeof O=="object"&&O!==null&&O.key!=null?he(""+O.key):F.toString(36)}function G(O,F,ne,X,ve){var $e=typeof O;($e==="undefined"||$e==="boolean")&&(O=null);var Te=!1;if(O===null)Te=!0;else switch($e){case"string":case"number":Te=!0;break;case"object":switch(O.$$typeof){case e:case t:Te=!0}}if(Te)return Te=O,ve=ve(Te),O=X===""?"."+pe(Te,0):X,D(ve)?(ne="",O!=null&&(ne=O.replace(ce,"$&/")+"/"),G(ve,F,ne,"",function(ct){return ct})):ve!=null&&(te(ve)&&(ve=Y(ve,ne+(!ve.key||Te&&Te.key===ve.key?"":(""+ve.key).replace(ce,"$&/")+"/")+O)),F.push(ve)),1;if(Te=0,X=X===""?".":X+":",D(O))for(var Re=0;Re<O.length;Re++){$e=O[Re];var Ae=X+pe($e,Re);Te+=G($e,F,ne,Ae,ve)}else if(Ae=$(O),typeof Ae=="function")for(O=Ae.call(O),Re=0;!($e=O.next()).done;)$e=$e.value,Ae=X+pe($e,Re++),Te+=G($e,F,ne,Ae,ve);else if($e==="object")throw F=String(O),Error("Objects are not valid as a React child (found: "+(F==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":F)+"). If you meant to render a collection of children, use an array instead.");return Te}function me(O,F,ne){if(O==null)return O;var X=[],ve=0;return G(O,X,"","",function($e){return F.call(ne,$e,ve++)}),X}function ye(O){if(O._status===-1){var F=O._result;F=F(),F.then(function(ne){(O._status===0||O._status===-1)&&(O._status=1,O._result=ne)},function(ne){(O._status===0||O._status===-1)&&(O._status=2,O._result=ne)}),O._status===-1&&(O._status=0,O._result=F)}if(O._status===1)return O._result.default;throw O._result}var ge={current:null},ee={transition:null},re={ReactCurrentDispatcher:ge,ReactCurrentBatchConfig:ee,ReactCurrentOwner:P};function se(){throw Error("act(...) is not supported in production builds of React.")}return qe.Children={map:me,forEach:function(O,F,ne){me(O,function(){F.apply(this,arguments)},ne)},count:function(O){var F=0;return me(O,function(){F++}),F},toArray:function(O){return me(O,function(F){return F})||[]},only:function(O){if(!te(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},qe.Component=N,qe.Fragment=i,qe.Profiler=o,qe.PureComponent=E,qe.StrictMode=s,qe.Suspense=f,qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,qe.act=se,qe.cloneElement=function(O,F,ne){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var X=b({},O.props),ve=O.key,$e=O.ref,Te=O._owner;if(F!=null){if(F.ref!==void 0&&($e=F.ref,Te=P.current),F.key!==void 0&&(ve=""+F.key),O.type&&O.type.defaultProps)var Re=O.type.defaultProps;for(Ae in F)B.call(F,Ae)&&!V.hasOwnProperty(Ae)&&(X[Ae]=F[Ae]===void 0&&Re!==void 0?Re[Ae]:F[Ae])}var Ae=arguments.length-2;if(Ae===1)X.children=ne;else if(1<Ae){Re=Array(Ae);for(var ct=0;ct<Ae;ct++)Re[ct]=arguments[ct+2];X.children=Re}return{$$typeof:e,type:O.type,key:ve,ref:$e,props:X,_owner:Te}},qe.createContext=function(O){return O={$$typeof:d,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:u,_context:O},O.Consumer=O},qe.createElement=I,qe.createFactory=function(O){var F=I.bind(null,O);return F.type=O,F},qe.createRef=function(){return{current:null}},qe.forwardRef=function(O){return{$$typeof:c,render:O}},qe.isValidElement=te,qe.lazy=function(O){return{$$typeof:y,_payload:{_status:-1,_result:O},_init:ye}},qe.memo=function(O,F){return{$$typeof:m,type:O,compare:F===void 0?null:F}},qe.startTransition=function(O){var F=ee.transition;ee.transition={};try{O()}finally{ee.transition=F}},qe.unstable_act=se,qe.useCallback=function(O,F){return ge.current.useCallback(O,F)},qe.useContext=function(O){return ge.current.useContext(O)},qe.useDebugValue=function(){},qe.useDeferredValue=function(O){return ge.current.useDeferredValue(O)},qe.useEffect=function(O,F){return ge.current.useEffect(O,F)},qe.useId=function(){return ge.current.useId()},qe.useImperativeHandle=function(O,F,ne){return ge.current.useImperativeHandle(O,F,ne)},qe.useInsertionEffect=function(O,F){return ge.current.useInsertionEffect(O,F)},qe.useLayoutEffect=function(O,F){return ge.current.useLayoutEffect(O,F)},qe.useMemo=function(O,F){return ge.current.useMemo(O,F)},qe.useReducer=function(O,F,ne){return ge.current.useReducer(O,F,ne)},qe.useRef=function(O){return ge.current.useRef(O)},qe.useState=function(O){return ge.current.useState(O)},qe.useSyncExternalStore=function(O,F,ne){return ge.current.useSyncExternalStore(O,F,ne)},qe.useTransition=function(){return ge.current.useTransition()},qe.version="18.3.1",qe}var Zh;function Lp(){return Zh||(Zh=1,yc.exports=k2()),yc.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yh;function E2(){if(Yh)return Eo;Yh=1;var e=Lp(),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(c,f,m){var y,w={},$=null,S=null;m!==void 0&&($=""+m),f.key!==void 0&&($=""+f.key),f.ref!==void 0&&(S=f.ref);for(y in f)s.call(f,y)&&!u.hasOwnProperty(y)&&(w[y]=f[y]);if(c&&c.defaultProps)for(y in f=c.defaultProps,f)w[y]===void 0&&(w[y]=f[y]);return{$$typeof:t,type:c,key:$,ref:S,props:w,_owner:o.current}}return Eo.Fragment=i,Eo.jsx=d,Eo.jsxs=d,Eo}var Xh;function T2(){return Xh||(Xh=1,gc.exports=E2()),gc.exports}var U=T2(),et=Lp();const C2=S2(et);var fl={},vc={exports:{}},sr={},wc={exports:{}},_c={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jh;function I2(){return Jh||(Jh=1,(function(e){function t(ee,re){var se=ee.length;ee.push(re);e:for(;0<se;){var O=se-1>>>1,F=ee[O];if(0<o(F,re))ee[O]=re,ee[se]=F,se=O;else break e}}function i(ee){return ee.length===0?null:ee[0]}function s(ee){if(ee.length===0)return null;var re=ee[0],se=ee.pop();if(se!==re){ee[0]=se;e:for(var O=0,F=ee.length,ne=F>>>1;O<ne;){var X=2*(O+1)-1,ve=ee[X],$e=X+1,Te=ee[$e];if(0>o(ve,se))$e<F&&0>o(Te,ve)?(ee[O]=Te,ee[$e]=se,O=$e):(ee[O]=ve,ee[X]=se,O=X);else if($e<F&&0>o(Te,se))ee[O]=Te,ee[$e]=se,O=$e;else break e}}return re}function o(ee,re){var se=ee.sortIndex-re.sortIndex;return se!==0?se:ee.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var u=performance;e.unstable_now=function(){return u.now()}}else{var d=Date,c=d.now();e.unstable_now=function(){return d.now()-c}}var f=[],m=[],y=1,w=null,$=3,S=!1,b=!1,C=!1,N=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,E=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function A(ee){for(var re=i(m);re!==null;){if(re.callback===null)s(m);else if(re.startTime<=ee)s(m),re.sortIndex=re.expirationTime,t(f,re);else break;re=i(m)}}function D(ee){if(C=!1,A(ee),!b)if(i(f)!==null)b=!0,ye(B);else{var re=i(m);re!==null&&ge(D,re.startTime-ee)}}function B(ee,re){b=!1,C&&(C=!1,k(I),I=-1),S=!0;var se=$;try{for(A(re),w=i(f);w!==null&&(!(w.expirationTime>re)||ee&&!he());){var O=w.callback;if(typeof O=="function"){w.callback=null,$=w.priorityLevel;var F=O(w.expirationTime<=re);re=e.unstable_now(),typeof F=="function"?w.callback=F:w===i(f)&&s(f),A(re)}else s(f);w=i(f)}if(w!==null)var ne=!0;else{var X=i(m);X!==null&&ge(D,X.startTime-re),ne=!1}return ne}finally{w=null,$=se,S=!1}}var P=!1,V=null,I=-1,Y=5,te=-1;function he(){return!(e.unstable_now()-te<Y)}function ce(){if(V!==null){var ee=e.unstable_now();te=ee;var re=!0;try{re=V(!0,ee)}finally{re?pe():(P=!1,V=null)}}else P=!1}var pe;if(typeof E=="function")pe=function(){E(ce)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,me=G.port2;G.port1.onmessage=ce,pe=function(){me.postMessage(null)}}else pe=function(){N(ce,0)};function ye(ee){V=ee,P||(P=!0,pe())}function ge(ee,re){I=N(function(){ee(e.unstable_now())},re)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(ee){ee.callback=null},e.unstable_continueExecution=function(){b||S||(b=!0,ye(B))},e.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<ee?Math.floor(1e3/ee):5},e.unstable_getCurrentPriorityLevel=function(){return $},e.unstable_getFirstCallbackNode=function(){return i(f)},e.unstable_next=function(ee){switch($){case 1:case 2:case 3:var re=3;break;default:re=$}var se=$;$=re;try{return ee()}finally{$=se}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(ee,re){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var se=$;$=ee;try{return re()}finally{$=se}},e.unstable_scheduleCallback=function(ee,re,se){var O=e.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?O+se:O):se=O,ee){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=se+F,ee={id:y++,callback:re,priorityLevel:ee,startTime:se,expirationTime:F,sortIndex:-1},se>O?(ee.sortIndex=se,t(m,ee),i(f)===null&&ee===i(m)&&(C?(k(I),I=-1):C=!0,ge(D,se-O))):(ee.sortIndex=F,t(f,ee),b||S||(b=!0,ye(B))),ee},e.unstable_shouldYield=he,e.unstable_wrapCallback=function(ee){var re=$;return function(){var se=$;$=re;try{return ee.apply(this,arguments)}finally{$=se}}}})(_c)),_c}var em;function z2(){return em||(em=1,wc.exports=I2()),wc.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tm;function N2(){if(tm)return sr;tm=1;var e=Lp(),t=z2();function i(r){for(var n="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function u(r,n){d(r,n),d(r+"Capture",n)}function d(r,n){for(o[r]=n,r=0;r<n.length;r++)s.add(n[r])}var c=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),f=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},w={};function $(r){return f.call(w,r)?!0:f.call(y,r)?!1:m.test(r)?w[r]=!0:(y[r]=!0,!1)}function S(r,n,a,l){if(a!==null&&a.type===0)return!1;switch(typeof n){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function b(r,n,a,l){if(n===null||typeof n>"u"||S(r,n,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!n;case 4:return n===!1;case 5:return isNaN(n);case 6:return isNaN(n)||1>n}return!1}function C(r,n,a,l,h,v,T){this.acceptsBooleans=n===2||n===3||n===4,this.attributeName=l,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=r,this.type=n,this.sanitizeURL=v,this.removeEmptyString=T}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){N[r]=new C(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var n=r[0];N[n]=new C(n,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){N[r]=new C(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){N[r]=new C(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){N[r]=new C(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){N[r]=new C(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){N[r]=new C(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){N[r]=new C(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){N[r]=new C(r,5,!1,r.toLowerCase(),null,!1,!1)});var k=/[\-:]([a-z])/g;function E(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var n=r.replace(k,E);N[n]=new C(n,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var n=r.replace(k,E);N[n]=new C(n,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var n=r.replace(k,E);N[n]=new C(n,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){N[r]=new C(r,1,!1,r.toLowerCase(),null,!1,!1)}),N.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){N[r]=new C(r,1,!1,r.toLowerCase(),null,!0,!0)});function A(r,n,a,l){var h=N.hasOwnProperty(n)?N[n]:null;(h!==null?h.type!==0:l||!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(b(n,a,h,l)&&(a=null),l||h===null?$(n)&&(a===null?r.removeAttribute(n):r.setAttribute(n,""+a)):h.mustUseProperty?r[h.propertyName]=a===null?h.type===3?!1:"":a:(n=h.attributeName,l=h.attributeNamespace,a===null?r.removeAttribute(n):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,l?r.setAttributeNS(l,n,a):r.setAttribute(n,a))))}var D=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,B=Symbol.for("react.element"),P=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),te=Symbol.for("react.provider"),he=Symbol.for("react.context"),ce=Symbol.for("react.forward_ref"),pe=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),me=Symbol.for("react.memo"),ye=Symbol.for("react.lazy"),ge=Symbol.for("react.offscreen"),ee=Symbol.iterator;function re(r){return r===null||typeof r!="object"?null:(r=ee&&r[ee]||r["@@iterator"],typeof r=="function"?r:null)}var se=Object.assign,O;function F(r){if(O===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);O=n&&n[1]||""}return`
`+O+r}var ne=!1;function X(r,n){if(!r||ne)return"";ne=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(n)if(n=function(){throw Error()},Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(n,[])}catch(Q){var l=Q}Reflect.construct(r,[],n)}else{try{n.call()}catch(Q){l=Q}r.call(n.prototype)}else{try{throw Error()}catch(Q){l=Q}r()}}catch(Q){if(Q&&l&&typeof Q.stack=="string"){for(var h=Q.stack.split(`
`),v=l.stack.split(`
`),T=h.length-1,M=v.length-1;1<=T&&0<=M&&h[T]!==v[M];)M--;for(;1<=T&&0<=M;T--,M--)if(h[T]!==v[M]){if(T!==1||M!==1)do if(T--,M--,0>M||h[T]!==v[M]){var L=`
`+h[T].replace(" at new "," at ");return r.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",r.displayName)),L}while(1<=T&&0<=M);break}}}finally{ne=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?F(r):""}function ve(r){switch(r.tag){case 5:return F(r.type);case 16:return F("Lazy");case 13:return F("Suspense");case 19:return F("SuspenseList");case 0:case 2:case 15:return r=X(r.type,!1),r;case 11:return r=X(r.type.render,!1),r;case 1:return r=X(r.type,!0),r;default:return""}}function $e(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case V:return"Fragment";case P:return"Portal";case Y:return"Profiler";case I:return"StrictMode";case pe:return"Suspense";case G:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case he:return(r.displayName||"Context")+".Consumer";case te:return(r._context.displayName||"Context")+".Provider";case ce:var n=r.render;return r=r.displayName,r||(r=n.displayName||n.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case me:return n=r.displayName||null,n!==null?n:$e(r.type)||"Memo";case ye:n=r._payload,r=r._init;try{return $e(r(n))}catch{}}return null}function Te(r){var n=r.type;switch(r.tag){case 24:return"Cache";case 9:return(n.displayName||"Context")+".Consumer";case 10:return(n._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=n.render,r=r.displayName||r.name||"",n.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return n;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $e(n);case 8:return n===I?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n}return null}function Re(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ae(r){var n=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function ct(r){var n=Ae(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,n),l=""+r[n];if(!r.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,v=a.set;return Object.defineProperty(r,n,{configurable:!0,get:function(){return h.call(this)},set:function(T){l=""+T,v.call(this,T)}}),Object.defineProperty(r,n,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(T){l=""+T},stopTracking:function(){r._valueTracker=null,delete r[n]}}}}function er(r){r._valueTracker||(r._valueTracker=ct(r))}function Dt(r){if(!r)return!1;var n=r._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return r&&(l=Ae(r)?r.checked?"true":"false":r.value),r=l,r!==a?(n.setValue(r),!0):!1}function pt(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Ve(r,n){var a=n.checked;return se({},n,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function rt(r,n){var a=n.defaultValue==null?"":n.defaultValue,l=n.checked!=null?n.checked:n.defaultChecked;a=Re(n.value!=null?n.value:a),r._wrapperState={initialChecked:l,initialValue:a,controlled:n.type==="checkbox"||n.type==="radio"?n.checked!=null:n.value!=null}}function at(r,n){n=n.checked,n!=null&&A(r,"checked",n,!1)}function St(r,n){at(r,n);var a=Re(n.value),l=n.type;if(a!=null)l==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(l==="submit"||l==="reset"){r.removeAttribute("value");return}n.hasOwnProperty("value")?De(r,n.type,a):n.hasOwnProperty("defaultValue")&&De(r,n.type,Re(n.defaultValue)),n.checked==null&&n.defaultChecked!=null&&(r.defaultChecked=!!n.defaultChecked)}function Gt(r,n,a){if(n.hasOwnProperty("value")||n.hasOwnProperty("defaultValue")){var l=n.type;if(!(l!=="submit"&&l!=="reset"||n.value!==void 0&&n.value!==null))return;n=""+r._wrapperState.initialValue,a||n===r.value||(r.value=n),r.defaultValue=n}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function De(r,n,a){(n!=="number"||pt(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var We=Array.isArray;function Ge(r,n,a,l){if(r=r.options,n){n={};for(var h=0;h<a.length;h++)n["$"+a[h]]=!0;for(a=0;a<r.length;a++)h=n.hasOwnProperty("$"+r[a].value),r[a].selected!==h&&(r[a].selected=h),h&&l&&(r[a].defaultSelected=!0)}else{for(a=""+Re(a),n=null,h=0;h<r.length;h++){if(r[h].value===a){r[h].selected=!0,l&&(r[h].defaultSelected=!0);return}n!==null||r[h].disabled||(n=r[h])}n!==null&&(n.selected=!0)}}function xt(r,n){if(n.dangerouslySetInnerHTML!=null)throw Error(i(91));return se({},n,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function Mt(r,n){var a=n.value;if(a==null){if(a=n.children,n=n.defaultValue,a!=null){if(n!=null)throw Error(i(92));if(We(a)){if(1<a.length)throw Error(i(93));a=a[0]}n=a}n==null&&(n=""),a=n}r._wrapperState={initialValue:Re(a)}}function ur(r,n){var a=Re(n.value),l=Re(n.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),n.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),l!=null&&(r.defaultValue=""+l)}function In(r){var n=r.textContent;n===r._wrapperState.initialValue&&n!==""&&n!==null&&(r.value=n)}function Kt(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gi(r,n){return r==null||r==="http://www.w3.org/1999/xhtml"?Kt(n):r==="http://www.w3.org/2000/svg"&&n==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Ir,un=(function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(n,a,l,h){MSApp.execUnsafeLocalFunction(function(){return r(n,a,l,h)})}:r})(function(r,n){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=n;else{for(Ir=Ir||document.createElement("div"),Ir.innerHTML="<svg>"+n.valueOf().toString()+"</svg>",n=Ir.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;n.firstChild;)r.appendChild(n.firstChild)}});function yi(r,n){if(n){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=n;return}}r.textContent=n}var wr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Wl=["Webkit","ms","Moz","O"];Object.keys(wr).forEach(function(r){Wl.forEach(function(n){n=n+r.charAt(0).toUpperCase()+r.substring(1),wr[n]=wr[r]})});function ls(r,n,a){return n==null||typeof n=="boolean"||n===""?"":a||typeof n!="number"||n===0||wr.hasOwnProperty(r)&&wr[r]?(""+n).trim():n+"px"}function ds(r,n){r=r.style;for(var a in n)if(n.hasOwnProperty(a)){var l=a.indexOf("--")===0,h=ls(a,n[a],l);a==="float"&&(a="cssFloat"),l?r.setProperty(a,h):r[a]=h}}var cs=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vi(r,n){if(n){if(cs[r]&&(n.children!=null||n.dangerouslySetInnerHTML!=null))throw Error(i(137,r));if(n.dangerouslySetInnerHTML!=null){if(n.children!=null)throw Error(i(60));if(typeof n.dangerouslySetInnerHTML!="object"||!("__html"in n.dangerouslySetInnerHTML))throw Error(i(61))}if(n.style!=null&&typeof n.style!="object")throw Error(i(62))}}function ps(r,n){if(r.indexOf("-")===-1)return typeof n.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var fs=null;function hs(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var ms=null,zn=null,Nn=null;function gs(r){if(r=Ai(r)){if(typeof ms!="function")throw Error(i(280));var n=r.stateNode;n&&(n=Wa(n),ms(r.stateNode,r.type,n))}}function ys(r){zn?Nn?Nn.push(r):Nn=[r]:zn=r}function qo(){if(zn){var r=zn,n=Nn;if(Nn=zn=null,gs(r),n)for(r=0;r<n.length;r++)gs(n[r])}}function vs(r,n){return r(n)}function ws(){}var ia=!1;function ft(r,n,a){if(ia)return r(n,a);ia=!0;try{return vs(r,n,a)}finally{ia=!1,(zn!==null||Nn!==null)&&(ws(),qo())}}function On(r,n){var a=r.stateNode;if(a===null)return null;var l=Wa(a);if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(r=r.type,l=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!l;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(i(231,n,typeof a));return a}var aa=!1;if(c)try{var An={};Object.defineProperty(An,"passive",{get:function(){aa=!0}}),window.addEventListener("test",An,An),window.removeEventListener("test",An,An)}catch{aa=!1}function Ho(r,n,a,l,h,v,T,M,L){var Q=Array.prototype.slice.call(arguments,3);try{n.apply(a,Q)}catch(oe){this.onError(oe)}}var Rn=!1,wi=null,_i=!1,sa=null,Go={onError:function(r){Rn=!0,wi=r}};function Ko(r,n,a,l,h,v,T,M,L){Rn=!1,wi=null,Ho.apply(Go,arguments)}function Qo(r,n,a,l,h,v,T,M,L){if(Ko.apply(this,arguments),Rn){if(Rn){var Q=wi;Rn=!1,wi=null}else throw Error(i(198));_i||(_i=!0,sa=Q)}}function Kr(r){var n=r,a=r;if(r.alternate)for(;n.return;)n=n.return;else{r=n;do n=r,(n.flags&4098)!==0&&(a=n.return),r=n.return;while(r)}return n.tag===3?a:null}function _s(r){if(r.tag===13){var n=r.memoizedState;if(n===null&&(r=r.alternate,r!==null&&(n=r.memoizedState)),n!==null)return n.dehydrated}return null}function Zo(r){if(Kr(r)!==r)throw Error(i(188))}function _r(r){var n=r.alternate;if(!n){if(n=Kr(r),n===null)throw Error(i(188));return n!==r?null:r}for(var a=r,l=n;;){var h=a.return;if(h===null)break;var v=h.alternate;if(v===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===v.child){for(v=h.child;v;){if(v===a)return Zo(h),r;if(v===l)return Zo(h),n;v=v.sibling}throw Error(i(188))}if(a.return!==l.return)a=h,l=v;else{for(var T=!1,M=h.child;M;){if(M===a){T=!0,a=h,l=v;break}if(M===l){T=!0,l=h,a=v;break}M=M.sibling}if(!T){for(M=v.child;M;){if(M===a){T=!0,a=v,l=h;break}if(M===l){T=!0,l=v,a=h;break}M=M.sibling}if(!T)throw Error(i(189))}}if(a.alternate!==l)throw Error(i(190))}if(a.tag!==3)throw Error(i(188));return a.stateNode.current===a?r:n}function oa(r){return r=_r(r),r!==null?ua(r):null}function ua(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var n=ua(r);if(n!==null)return n;r=r.sibling}return null}var ln=t.unstable_scheduleCallback,$r=t.unstable_cancelCallback,Yo=t.unstable_shouldYield,Vl=t.unstable_requestPaint,gt=t.unstable_now,Xo=t.unstable_getCurrentPriorityLevel,zr=t.unstable_ImmediatePriority,la=t.unstable_UserBlockingPriority,Bt=t.unstable_NormalPriority,lr=t.unstable_LowPriority,da=t.unstable_IdlePriority,ca=null,xr=null;function Fl(r){if(xr&&typeof xr.onCommitFiberRoot=="function")try{xr.onCommitFiberRoot(ca,r,void 0,(r.current.flags&128)===128)}catch{}}var dr=Math.clz32?Math.clz32:Qr,ql=Math.log,Hl=Math.LN2;function Qr(r){return r>>>=0,r===0?32:31-(ql(r)/Hl|0)|0}var dn=64,pa=4194304;function Dn(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function fa(r,n){var a=r.pendingLanes;if(a===0)return 0;var l=0,h=r.suspendedLanes,v=r.pingedLanes,T=a&268435455;if(T!==0){var M=T&~h;M!==0?l=Dn(M):(v&=T,v!==0&&(l=Dn(v)))}else T=a&~h,T!==0?l=Dn(T):v!==0&&(l=Dn(v));if(l===0)return 0;if(n!==0&&n!==l&&(n&h)===0&&(h=l&-l,v=n&-n,h>=v||h===16&&(v&4194240)!==0))return n;if((l&4)!==0&&(l|=a&16),n=r.entangledLanes,n!==0)for(r=r.entanglements,n&=l;0<n;)a=31-dr(n),h=1<<a,l|=r[a],n&=~h;return l}function Gl(r,n){switch(r){case 1:case 2:case 4:return n+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Kl(r,n){for(var a=r.suspendedLanes,l=r.pingedLanes,h=r.expirationTimes,v=r.pendingLanes;0<v;){var T=31-dr(v),M=1<<T,L=h[T];L===-1?((M&a)===0||(M&l)!==0)&&(h[T]=Gl(M,n)):L<=n&&(r.expiredLanes|=M),v&=~M}}function $s(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function Jo(){var r=dn;return dn<<=1,(dn&4194240)===0&&(dn=64),r}function xs(r){for(var n=[],a=0;31>a;a++)n.push(r);return n}function $i(r,n,a){r.pendingLanes|=n,n!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,n=31-dr(n),r[n]=a}function Ql(r,n){var a=r.pendingLanes&~n;r.pendingLanes=n,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=n,r.mutableReadLanes&=n,r.entangledLanes&=n,n=r.entanglements;var l=r.eventTimes;for(r=r.expirationTimes;0<a;){var h=31-dr(a),v=1<<h;n[h]=0,l[h]=-1,r[h]=-1,a&=~v}}function bs(r,n){var a=r.entangledLanes|=n;for(r=r.entanglements;a;){var l=31-dr(a),h=1<<l;h&n|r[l]&n&&(r[l]|=n),a&=~h}}var Ze=0;function eu(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var ha,Mn,tu,ma,ru,Ss=!1,ga=[],Zr=null,cr=null,Yr=null,tr=new Map,jt=new Map,Nr=[],ya="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function va(r,n){switch(r){case"focusin":case"focusout":Zr=null;break;case"dragenter":case"dragleave":cr=null;break;case"mouseover":case"mouseout":Yr=null;break;case"pointerover":case"pointerout":tr.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":jt.delete(n.pointerId)}}function Bn(r,n,a,l,h,v){return r===null||r.nativeEvent!==v?(r={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:v,targetContainers:[h]},n!==null&&(n=Ai(n),n!==null&&Mn(n)),r):(r.eventSystemFlags|=l,n=r.targetContainers,h!==null&&n.indexOf(h)===-1&&n.push(h),r)}function nu(r,n,a,l,h){switch(n){case"focusin":return Zr=Bn(Zr,r,n,a,l,h),!0;case"dragenter":return cr=Bn(cr,r,n,a,l,h),!0;case"mouseover":return Yr=Bn(Yr,r,n,a,l,h),!0;case"pointerover":var v=h.pointerId;return tr.set(v,Bn(tr.get(v)||null,r,n,a,l,h)),!0;case"gotpointercapture":return v=h.pointerId,jt.set(v,Bn(jt.get(v)||null,r,n,a,l,h)),!0}return!1}function iu(r){var n=vn(r.target);if(n!==null){var a=Kr(n);if(a!==null){if(n=a.tag,n===13){if(n=_s(a),n!==null){r.blockedOn=n,ru(r.priority,function(){tu(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Pn(r){if(r.blockedOn!==null)return!1;for(var n=r.targetContainers;0<n.length;){var a=ks(r.domEventName,r.eventSystemFlags,n[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var l=new a.constructor(a.type,a);fs=l,a.target.dispatchEvent(l),fs=null}else return n=Ai(a),n!==null&&Mn(n),r.blockedOn=a,!1;n.shift()}return!0}function au(r,n,a){Pn(r)&&a.delete(n)}function su(){Ss=!1,Zr!==null&&Pn(Zr)&&(Zr=null),cr!==null&&Pn(cr)&&(cr=null),Yr!==null&&Pn(Yr)&&(Yr=null),tr.forEach(au),jt.forEach(au)}function xi(r,n){r.blockedOn===n&&(r.blockedOn=null,Ss||(Ss=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,su)))}function cn(r){function n(h){return xi(h,r)}if(0<ga.length){xi(ga[0],r);for(var a=1;a<ga.length;a++){var l=ga[a];l.blockedOn===r&&(l.blockedOn=null)}}for(Zr!==null&&xi(Zr,r),cr!==null&&xi(cr,r),Yr!==null&&xi(Yr,r),tr.forEach(n),jt.forEach(n),a=0;a<Nr.length;a++)l=Nr[a],l.blockedOn===r&&(l.blockedOn=null);for(;0<Nr.length&&(a=Nr[0],a.blockedOn===null);)iu(a),a.blockedOn===null&&Nr.shift()}var Ln=D.ReactCurrentBatchConfig,wa=!0;function Zl(r,n,a,l){var h=Ze,v=Ln.transition;Ln.transition=null;try{Ze=1,Un(r,n,a,l)}finally{Ze=h,Ln.transition=v}}function Yl(r,n,a,l){var h=Ze,v=Ln.transition;Ln.transition=null;try{Ze=4,Un(r,n,a,l)}finally{Ze=h,Ln.transition=v}}function Un(r,n,a,l){if(wa){var h=ks(r,n,a,l);if(h===null)Ua(r,n,l,_a,a),va(r,l);else if(nu(h,r,n,a,l))l.stopPropagation();else if(va(r,l),n&4&&-1<ya.indexOf(r)){for(;h!==null;){var v=Ai(h);if(v!==null&&ha(v),v=ks(r,n,a,l),v===null&&Ua(r,n,l,_a,a),v===h)break;h=v}h!==null&&l.stopPropagation()}else Ua(r,n,l,null,a)}}var _a=null;function ks(r,n,a,l){if(_a=null,r=hs(l),r=vn(r),r!==null)if(n=Kr(r),n===null)r=null;else if(a=n.tag,a===13){if(r=_s(n),r!==null)return r;r=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;r=null}else n!==r&&(r=null);return _a=r,null}function ou(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Xo()){case zr:return 1;case la:return 4;case Bt:case lr:return 16;case da:return 536870912;default:return 16}default:return 16}}var Xr=null,Es=null,$a=null;function Ts(){if($a)return $a;var r,n=Es,a=n.length,l,h="value"in Xr?Xr.value:Xr.textContent,v=h.length;for(r=0;r<a&&n[r]===h[r];r++);var T=a-r;for(l=1;l<=T&&n[a-l]===h[v-l];l++);return $a=h.slice(r,1<l?1-l:void 0)}function xa(r){var n=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&n===13&&(r=13)):r=n,r===10&&(r=13),32<=r||r===13?r:0}function ba(){return!0}function uu(){return!1}function Qt(r){function n(a,l,h,v,T){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=v,this.target=T,this.currentTarget=null;for(var M in r)r.hasOwnProperty(M)&&(a=r[M],this[M]=a?a(v):v[M]);return this.isDefaultPrevented=(v.defaultPrevented!=null?v.defaultPrevented:v.returnValue===!1)?ba:uu,this.isPropagationStopped=uu,this}return se(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),n}var jn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cs=Qt(jn),bi=se({},jn,{view:0,detail:0}),Xl=Qt(bi),Sa,ka,Wn,Ea=se({},bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Os,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Wn&&(Wn&&r.type==="mousemove"?(Sa=r.screenX-Wn.screenX,ka=r.screenY-Wn.screenY):ka=Sa=0,Wn=r),Sa)},movementY:function(r){return"movementY"in r?r.movementY:ka}}),lu=Qt(Ea),du=se({},Ea,{dataTransfer:0}),cu=Qt(du),Si=se({},bi,{relatedTarget:0}),Is=Qt(Si),pu=se({},jn,{animationName:0,elapsedTime:0,pseudoElement:0}),Jl=Qt(pu),ed=se({},jn,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),td=Qt(ed),zs=se({},jn,{data:0}),Ns=Qt(zs),rd={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},id={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ad(r){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(r):(r=id[r])?!!n[r]:!1}function Os(){return ad}var sd=se({},bi,{key:function(r){if(r.key){var n=rd[r.key]||r.key;if(n!=="Unidentified")return n}return r.type==="keypress"?(r=xa(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?nd[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Os,charCode:function(r){return r.type==="keypress"?xa(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?xa(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),od=Qt(sd),pn=se({},Ea,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ki=Qt(pn),fu=se({},bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Os}),ud=Qt(fu),Ta=se({},jn,{propertyName:0,elapsedTime:0,pseudoElement:0}),ld=Qt(Ta),dd=se({},Ea,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),As=Qt(dd),Rs=[9,13,27,32],Ca=c&&"CompositionEvent"in window,Vn=null;c&&"documentMode"in document&&(Vn=document.documentMode);var hu=c&&"TextEvent"in window&&!Vn,Ds=c&&(!Ca||Vn&&8<Vn&&11>=Vn),Ms=" ",Bs=!1;function Ps(r,n){switch(r){case"keyup":return Rs.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mu(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var fn=!1;function cd(r,n){switch(r){case"compositionend":return mu(n);case"keypress":return n.which!==32?null:(Bs=!0,Ms);case"textInput":return r=n.data,r===Ms&&Bs?null:r;default:return null}}function gu(r,n){if(fn)return r==="compositionend"||!Ca&&Ps(r,n)?(r=Ts(),$a=Es=Xr=null,fn=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ds&&n.locale!=="ko"?null:n.data;default:return null}}var yu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ei(r){var n=r&&r.nodeName&&r.nodeName.toLowerCase();return n==="input"?!!yu[r.type]:n==="textarea"}function pr(r,n,a,l){ys(l),n=Ni(n,"onChange"),0<n.length&&(a=new Cs("onChange","change",null,a,l),r.push({event:a,listeners:n}))}var Or=null,hn=null;function vu(r){eo(r,0)}function Ti(r){var n=Xn(r);if(Dt(n))return r}function wu(r,n){if(r==="change")return n}var Ia=!1;if(c){var za;if(c){var Na="oninput"in document;if(!Na){var Ue=document.createElement("div");Ue.setAttribute("oninput","return;"),Na=typeof Ue.oninput=="function"}za=Na}else za=!1;Ia=za&&(!document.documentMode||9<document.documentMode)}function Fn(){Or&&(Or.detachEvent("onpropertychange",Ls),hn=Or=null)}function Ls(r){if(r.propertyName==="value"&&Ti(hn)){var n=[];pr(n,hn,r,hs(r)),ft(vu,n)}}function Le(r,n,a){r==="focusin"?(Fn(),Or=n,hn=a,Or.attachEvent("onpropertychange",Ls)):r==="focusout"&&Fn()}function Us(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Ti(hn)}function je(r,n){if(r==="click")return Ti(n)}function _u(r,n){if(r==="input"||r==="change")return Ti(n)}function js(r,n){return r===n&&(r!==0||1/r===1/n)||r!==r&&n!==n}var rr=typeof Object.is=="function"?Object.is:js;function qn(r,n){if(rr(r,n))return!0;if(typeof r!="object"||r===null||typeof n!="object"||n===null)return!1;var a=Object.keys(r),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!f.call(n,h)||!rr(r[h],n[h]))return!1}return!0}function Ws(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Oa(r,n){var a=Ws(r);r=0;for(var l;a;){if(a.nodeType===3){if(l=r+a.textContent.length,r<=n&&l>=n)return{node:a,offset:n-r};r=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ws(a)}}function Vs(r,n){return r&&n?r===n?!0:r&&r.nodeType===3?!1:n&&n.nodeType===3?Vs(r,n.parentNode):"contains"in r?r.contains(n):r.compareDocumentPosition?!!(r.compareDocumentPosition(n)&16):!1:!1}function Fs(){for(var r=window,n=pt();n instanceof r.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)r=n.contentWindow;else break;n=pt(r.document)}return n}function Aa(r){var n=r&&r.nodeName&&r.nodeName.toLowerCase();return n&&(n==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||n==="textarea"||r.contentEditable==="true")}function $u(r){var n=Fs(),a=r.focusedElem,l=r.selectionRange;if(n!==a&&a&&a.ownerDocument&&Vs(a.ownerDocument.documentElement,a)){if(l!==null&&Aa(a)){if(n=l.start,r=l.end,r===void 0&&(r=n),"selectionStart"in a)a.selectionStart=n,a.selectionEnd=Math.min(r,a.value.length);else if(r=(n=a.ownerDocument||document)&&n.defaultView||window,r.getSelection){r=r.getSelection();var h=a.textContent.length,v=Math.min(l.start,h);l=l.end===void 0?v:Math.min(l.end,h),!r.extend&&v>l&&(h=l,l=v,v=h),h=Oa(a,v);var T=Oa(a,l);h&&T&&(r.rangeCount!==1||r.anchorNode!==h.node||r.anchorOffset!==h.offset||r.focusNode!==T.node||r.focusOffset!==T.offset)&&(n=n.createRange(),n.setStart(h.node,h.offset),r.removeAllRanges(),v>l?(r.addRange(n),r.extend(T.node,T.offset)):(n.setEnd(T.node,T.offset),r.addRange(n)))}}for(n=[],r=a;r=r.parentNode;)r.nodeType===1&&n.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<n.length;a++)r=n[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var xu=c&&"documentMode"in document&&11>=document.documentMode,mn=null,Ra=null,Hn=null,Da=!1;function qs(r,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Da||mn==null||mn!==pt(l)||(l=mn,"selectionStart"in l&&Aa(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Hn&&qn(Hn,l)||(Hn=l,l=Ni(Ra,"onSelect"),0<l.length&&(n=new Cs("onSelect","select",null,n,a),r.push({event:n,listeners:l}),n.target=mn)))}function Ci(r,n){var a={};return a[r.toLowerCase()]=n.toLowerCase(),a["Webkit"+r]="webkit"+n,a["Moz"+r]="moz"+n,a}var gn={animationend:Ci("Animation","AnimationEnd"),animationiteration:Ci("Animation","AnimationIteration"),animationstart:Ci("Animation","AnimationStart"),transitionend:Ci("Transition","TransitionEnd")},Ma={},Hs={};c&&(Hs=document.createElement("div").style,"AnimationEvent"in window||(delete gn.animationend.animation,delete gn.animationiteration.animation,delete gn.animationstart.animation),"TransitionEvent"in window||delete gn.transitionend.transition);function Ii(r){if(Ma[r])return Ma[r];if(!gn[r])return r;var n=gn[r],a;for(a in n)if(n.hasOwnProperty(a)&&a in Hs)return Ma[r]=n[a];return r}var Gs=Ii("animationend"),Ks=Ii("animationiteration"),Qs=Ii("animationstart"),Zs=Ii("transitionend"),Ys=new Map,Xs="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(r,n){Ys.set(r,n),u(n,[r])}for(var Ba=0;Ba<Xs.length;Ba++){var Pa=Xs[Ba],bu=Pa.toLowerCase(),Su=Pa[0].toUpperCase()+Pa.slice(1);Ar(bu,"on"+Su)}Ar(Gs,"onAnimationEnd"),Ar(Ks,"onAnimationIteration"),Ar(Qs,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(Zs,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),u("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),u("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),u("onBeforeInput",["compositionend","keypress","textInput","paste"]),u("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),u("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ku=new Set("cancel close invalid load scroll toggle".split(" ").concat(Gn));function Js(r,n,a){var l=r.type||"unknown-event";r.currentTarget=a,Qo(l,n,void 0,r),r.currentTarget=null}function eo(r,n){n=(n&4)!==0;for(var a=0;a<r.length;a++){var l=r[a],h=l.event;l=l.listeners;e:{var v=void 0;if(n)for(var T=l.length-1;0<=T;T--){var M=l[T],L=M.instance,Q=M.currentTarget;if(M=M.listener,L!==v&&h.isPropagationStopped())break e;Js(h,M,Q),v=L}else for(T=0;T<l.length;T++){if(M=l[T],L=M.instance,Q=M.currentTarget,M=M.listener,L!==v&&h.isPropagationStopped())break e;Js(h,M,Q),v=L}}}if(_i)throw r=sa,_i=!1,sa=null,r}function st(r,n){var a=n[uo];a===void 0&&(a=n[uo]=new Set);var l=r+"__bubble";a.has(l)||(to(n,r,2,!1),a.add(l))}function La(r,n,a){var l=0;n&&(l|=4),to(a,r,l,n)}var zi="_reactListening"+Math.random().toString(36).slice(2);function Kn(r){if(!r[zi]){r[zi]=!0,s.forEach(function(a){a!=="selectionchange"&&(ku.has(a)||La(a,!1,r),La(a,!0,r))});var n=r.nodeType===9?r:r.ownerDocument;n===null||n[zi]||(n[zi]=!0,La("selectionchange",!1,n))}}function to(r,n,a,l){switch(ou(n)){case 1:var h=Zl;break;case 4:h=Yl;break;default:h=Un}a=h.bind(null,n,a,r),h=void 0,!aa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(h=!0),l?h!==void 0?r.addEventListener(n,a,{capture:!0,passive:h}):r.addEventListener(n,a,!0):h!==void 0?r.addEventListener(n,a,{passive:h}):r.addEventListener(n,a,!1)}function Ua(r,n,a,l,h){var v=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var T=l.tag;if(T===3||T===4){var M=l.stateNode.containerInfo;if(M===h||M.nodeType===8&&M.parentNode===h)break;if(T===4)for(T=l.return;T!==null;){var L=T.tag;if((L===3||L===4)&&(L=T.stateNode.containerInfo,L===h||L.nodeType===8&&L.parentNode===h))return;T=T.return}for(;M!==null;){if(T=vn(M),T===null)return;if(L=T.tag,L===5||L===6){l=v=T;continue e}M=M.parentNode}}l=l.return}ft(function(){var Q=v,oe=hs(a),le=[];e:{var ie=Ys.get(r);if(ie!==void 0){var we=Cs,Se=r;switch(r){case"keypress":if(xa(a)===0)break e;case"keydown":case"keyup":we=od;break;case"focusin":Se="focus",we=Is;break;case"focusout":Se="blur",we=Is;break;case"beforeblur":case"afterblur":we=Is;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":we=lu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":we=cu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":we=ud;break;case Gs:case Ks:case Qs:we=Jl;break;case Zs:we=ld;break;case"scroll":we=Xl;break;case"wheel":we=As;break;case"copy":case"cut":case"paste":we=td;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":we=ki}var Ee=(n&4)!==0,$t=!Ee&&r==="scroll",q=Ee?ie!==null?ie+"Capture":null:ie;Ee=[];for(var W=Q,H;W!==null;){H=W;var de=H.stateNode;if(H.tag===5&&de!==null&&(H=de,q!==null&&(de=On(W,q),de!=null&&Ee.push(Qn(W,de,H)))),$t)break;W=W.return}0<Ee.length&&(ie=new we(ie,Se,null,a,oe),le.push({event:ie,listeners:Ee}))}}if((n&7)===0){e:{if(ie=r==="mouseover"||r==="pointerover",we=r==="mouseout"||r==="pointerout",ie&&a!==fs&&(Se=a.relatedTarget||a.fromElement)&&(vn(Se)||Se[Dr]))break e;if((we||ie)&&(ie=oe.window===oe?oe:(ie=oe.ownerDocument)?ie.defaultView||ie.parentWindow:window,we?(Se=a.relatedTarget||a.toElement,we=Q,Se=Se?vn(Se):null,Se!==null&&($t=Kr(Se),Se!==$t||Se.tag!==5&&Se.tag!==6)&&(Se=null)):(we=null,Se=Q),we!==Se)){if(Ee=lu,de="onMouseLeave",q="onMouseEnter",W="mouse",(r==="pointerout"||r==="pointerover")&&(Ee=ki,de="onPointerLeave",q="onPointerEnter",W="pointer"),$t=we==null?ie:Xn(we),H=Se==null?ie:Xn(Se),ie=new Ee(de,W+"leave",we,a,oe),ie.target=$t,ie.relatedTarget=H,de=null,vn(oe)===Q&&(Ee=new Ee(q,W+"enter",Se,a,oe),Ee.target=H,Ee.relatedTarget=$t,de=Ee),$t=de,we&&Se)t:{for(Ee=we,q=Se,W=0,H=Ee;H;H=yn(H))W++;for(H=0,de=q;de;de=yn(de))H++;for(;0<W-H;)Ee=yn(Ee),W--;for(;0<H-W;)q=yn(q),H--;for(;W--;){if(Ee===q||q!==null&&Ee===q.alternate)break t;Ee=yn(Ee),q=yn(q)}Ee=null}else Ee=null;we!==null&&ro(le,ie,we,Ee,!1),Se!==null&&$t!==null&&ro(le,$t,Se,Ee,!0)}}e:{if(ie=Q?Xn(Q):window,we=ie.nodeName&&ie.nodeName.toLowerCase(),we==="select"||we==="input"&&ie.type==="file")var Ce=wu;else if(Ei(ie))if(Ia)Ce=_u;else{Ce=Us;var Ne=Le}else(we=ie.nodeName)&&we.toLowerCase()==="input"&&(ie.type==="checkbox"||ie.type==="radio")&&(Ce=je);if(Ce&&(Ce=Ce(r,Q))){pr(le,Ce,a,oe);break e}Ne&&Ne(r,ie,Q),r==="focusout"&&(Ne=ie._wrapperState)&&Ne.controlled&&ie.type==="number"&&De(ie,"number",ie.value)}switch(Ne=Q?Xn(Q):window,r){case"focusin":(Ei(Ne)||Ne.contentEditable==="true")&&(mn=Ne,Ra=Q,Hn=null);break;case"focusout":Hn=Ra=mn=null;break;case"mousedown":Da=!0;break;case"contextmenu":case"mouseup":case"dragend":Da=!1,qs(le,a,oe);break;case"selectionchange":if(xu)break;case"keydown":case"keyup":qs(le,a,oe)}var Oe;if(Ca)e:{switch(r){case"compositionstart":var Be="onCompositionStart";break e;case"compositionend":Be="onCompositionEnd";break e;case"compositionupdate":Be="onCompositionUpdate";break e}Be=void 0}else fn?Ps(r,a)&&(Be="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(Be="onCompositionStart");Be&&(Ds&&a.locale!=="ko"&&(fn||Be!=="onCompositionStart"?Be==="onCompositionEnd"&&fn&&(Oe=Ts()):(Xr=oe,Es="value"in Xr?Xr.value:Xr.textContent,fn=!0)),Ne=Ni(Q,Be),0<Ne.length&&(Be=new Ns(Be,r,null,a,oe),le.push({event:Be,listeners:Ne}),Oe?Be.data=Oe:(Oe=mu(a),Oe!==null&&(Be.data=Oe)))),(Oe=hu?cd(r,a):gu(r,a))&&(Q=Ni(Q,"onBeforeInput"),0<Q.length&&(oe=new Ns("onBeforeInput","beforeinput",null,a,oe),le.push({event:oe,listeners:Q}),oe.data=Oe))}eo(le,n)})}function Qn(r,n,a){return{instance:r,listener:n,currentTarget:a}}function Ni(r,n){for(var a=n+"Capture",l=[];r!==null;){var h=r,v=h.stateNode;h.tag===5&&v!==null&&(h=v,v=On(r,a),v!=null&&l.unshift(Qn(r,v,h)),v=On(r,n),v!=null&&l.push(Qn(r,v,h))),r=r.return}return l}function yn(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function ro(r,n,a,l,h){for(var v=n._reactName,T=[];a!==null&&a!==l;){var M=a,L=M.alternate,Q=M.stateNode;if(L!==null&&L===l)break;M.tag===5&&Q!==null&&(M=Q,h?(L=On(a,v),L!=null&&T.unshift(Qn(a,L,M))):h||(L=On(a,v),L!=null&&T.push(Qn(a,L,M)))),a=a.return}T.length!==0&&r.push({event:n,listeners:T})}var Eu=/\r\n?/g,Rr=/\u0000|\uFFFD/g;function Tu(r){return(typeof r=="string"?r:""+r).replace(Eu,`
`).replace(Rr,"")}function Zn(r,n,a){if(n=Tu(n),Tu(r)!==n&&a)throw Error(i(425))}function ja(){}var no=null,io=null;function ao(r,n){return r==="textarea"||r==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var so=typeof setTimeout=="function"?setTimeout:void 0,pd=typeof clearTimeout=="function"?clearTimeout:void 0,Cu=typeof Promise=="function"?Promise:void 0,fd=typeof queueMicrotask=="function"?queueMicrotask:typeof Cu<"u"?function(r){return Cu.resolve(null).then(r).catch(hd)}:so;function hd(r){setTimeout(function(){throw r})}function oo(r,n){var a=n,l=0;do{var h=a.nextSibling;if(r.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(l===0){r.removeChild(h),cn(n);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=h}while(a);cn(n)}function Jr(r){for(;r!=null;r=r.nextSibling){var n=r.nodeType;if(n===1||n===3)break;if(n===8){if(n=r.data,n==="$"||n==="$!"||n==="$?")break;if(n==="/$")return null}}return r}function Iu(r){r=r.previousSibling;for(var n=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return r;n--}else a==="/$"&&n++}r=r.previousSibling}return null}var Yn=Math.random().toString(36).slice(2),br="__reactFiber$"+Yn,Oi="__reactProps$"+Yn,Dr="__reactContainer$"+Yn,uo="__reactEvents$"+Yn,md="__reactListeners$"+Yn,gd="__reactHandles$"+Yn;function vn(r){var n=r[br];if(n)return n;for(var a=r.parentNode;a;){if(n=a[Dr]||a[br]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(r=Iu(r);r!==null;){if(a=r[br])return a;r=Iu(r)}return n}r=a,a=r.parentNode}return null}function Ai(r){return r=r[br]||r[Dr],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function Xn(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(i(33))}function Wa(r){return r[Oi]||null}var lo=[],Jn=-1;function en(r){return{current:r}}function ut(r){0>Jn||(r.current=lo[Jn],lo[Jn]=null,Jn--)}function ot(r,n){Jn++,lo[Jn]=r.current,r.current=n}var tn={},It=en(tn),Wt=en(!1),wn=tn;function ei(r,n){var a=r.type.contextTypes;if(!a)return tn;var l=r.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===n)return l.__reactInternalMemoizedMaskedChildContext;var h={},v;for(v in a)h[v]=n[v];return l&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=n,r.__reactInternalMemoizedMaskedChildContext=h),h}function Vt(r){return r=r.childContextTypes,r!=null}function Va(){ut(Wt),ut(It)}function zu(r,n,a){if(It.current!==tn)throw Error(i(168));ot(It,n),ot(Wt,a)}function Nu(r,n,a){var l=r.stateNode;if(n=n.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var h in l)if(!(h in n))throw Error(i(108,Te(r)||"Unknown",h));return se({},a,l)}function Fa(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||tn,wn=It.current,ot(It,r),ot(Wt,Wt.current),!0}function Ou(r,n,a){var l=r.stateNode;if(!l)throw Error(i(169));a?(r=Nu(r,n,wn),l.__reactInternalMemoizedMergedChildContext=r,ut(Wt),ut(It),ot(It,r)):ut(Wt),ot(Wt,a)}var Mr=null,qa=!1,ti=!1;function co(r){Mr===null?Mr=[r]:Mr.push(r)}function Au(r){qa=!0,co(r)}function p(){if(!ti&&Mr!==null){ti=!0;var r=0,n=Ze;try{var a=Mr;for(Ze=1;r<a.length;r++){var l=a[r];do l=l(!0);while(l!==null)}Mr=null,qa=!1}catch(h){throw Mr!==null&&(Mr=Mr.slice(r+1)),ln(zr,p),h}finally{Ze=n,ti=!1}}return null}var g=[],x=0,_=null,z=0,R=[],j=0,Z=null,ue=1,fe="";function ze(r,n){g[x++]=z,g[x++]=_,_=r,z=n}function Fe(r,n,a){R[j++]=ue,R[j++]=fe,R[j++]=Z,Z=r;var l=ue;r=fe;var h=32-dr(l)-1;l&=~(1<<h),a+=1;var v=32-dr(n)+h;if(30<v){var T=h-h%5;v=(l&(1<<T)-1).toString(32),l>>=T,h-=T,ue=1<<32-dr(n)+h|a<<h|l,fe=v+r}else ue=1<<v|a<<h|l,fe=r}function Xe(r){r.return!==null&&(ze(r,1),Fe(r,1,0))}function nt(r){for(;r===_;)_=g[--x],g[x]=null,z=g[--x],g[x]=null;for(;r===Z;)Z=R[--j],R[j]=null,fe=R[--j],R[j]=null,ue=R[--j],R[j]=null}var wt=null,Pt=null,lt=!1,Zt=null;function $f(r,n){var a=Tr(5,null,null,0);a.elementType="DELETED",a.stateNode=n,a.return=r,n=r.deletions,n===null?(r.deletions=[a],r.flags|=16):n.push(a)}function xf(r,n){switch(r.tag){case 5:var a=r.type;return n=n.nodeType!==1||a.toLowerCase()!==n.nodeName.toLowerCase()?null:n,n!==null?(r.stateNode=n,wt=r,Pt=Jr(n.firstChild),!0):!1;case 6:return n=r.pendingProps===""||n.nodeType!==3?null:n,n!==null?(r.stateNode=n,wt=r,Pt=null,!0):!1;case 13:return n=n.nodeType!==8?null:n,n!==null?(a=Z!==null?{id:ue,overflow:fe}:null,r.memoizedState={dehydrated:n,treeContext:a,retryLane:1073741824},a=Tr(18,null,null,0),a.stateNode=n,a.return=r,r.child=a,wt=r,Pt=null,!0):!1;default:return!1}}function yd(r){return(r.mode&1)!==0&&(r.flags&128)===0}function vd(r){if(lt){var n=Pt;if(n){var a=n;if(!xf(r,n)){if(yd(r))throw Error(i(418));n=Jr(a.nextSibling);var l=wt;n&&xf(r,n)?$f(l,a):(r.flags=r.flags&-4097|2,lt=!1,wt=r)}}else{if(yd(r))throw Error(i(418));r.flags=r.flags&-4097|2,lt=!1,wt=r}}}function bf(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;wt=r}function Ru(r){if(r!==wt)return!1;if(!lt)return bf(r),lt=!0,!1;var n;if((n=r.tag!==3)&&!(n=r.tag!==5)&&(n=r.type,n=n!=="head"&&n!=="body"&&!ao(r.type,r.memoizedProps)),n&&(n=Pt)){if(yd(r))throw Sf(),Error(i(418));for(;n;)$f(r,n),n=Jr(n.nextSibling)}if(bf(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,n=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(n===0){Pt=Jr(r.nextSibling);break e}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++}r=r.nextSibling}Pt=null}}else Pt=wt?Jr(r.stateNode.nextSibling):null;return!0}function Sf(){for(var r=Pt;r;)r=Jr(r.nextSibling)}function Ha(){Pt=wt=null,lt=!1}function wd(r){Zt===null?Zt=[r]:Zt.push(r)}var W_=D.ReactCurrentBatchConfig;function po(r,n,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(i(309));var l=a.stateNode}if(!l)throw Error(i(147,r));var h=l,v=""+r;return n!==null&&n.ref!==null&&typeof n.ref=="function"&&n.ref._stringRef===v?n.ref:(n=function(T){var M=h.refs;T===null?delete M[v]:M[v]=T},n._stringRef=v,n)}if(typeof r!="string")throw Error(i(284));if(!a._owner)throw Error(i(290,r))}return r}function Du(r,n){throw r=Object.prototype.toString.call(n),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":r))}function kf(r){var n=r._init;return n(r._payload)}function Ef(r){function n(q,W){if(r){var H=q.deletions;H===null?(q.deletions=[W],q.flags|=16):H.push(W)}}function a(q,W){if(!r)return null;for(;W!==null;)n(q,W),W=W.sibling;return null}function l(q,W){for(q=new Map;W!==null;)W.key!==null?q.set(W.key,W):q.set(W.index,W),W=W.sibling;return q}function h(q,W){return q=li(q,W),q.index=0,q.sibling=null,q}function v(q,W,H){return q.index=H,r?(H=q.alternate,H!==null?(H=H.index,H<W?(q.flags|=2,W):H):(q.flags|=2,W)):(q.flags|=1048576,W)}function T(q){return r&&q.alternate===null&&(q.flags|=2),q}function M(q,W,H,de){return W===null||W.tag!==6?(W=dc(H,q.mode,de),W.return=q,W):(W=h(W,H),W.return=q,W)}function L(q,W,H,de){var Ce=H.type;return Ce===V?oe(q,W,H.props.children,de,H.key):W!==null&&(W.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===ye&&kf(Ce)===W.type)?(de=h(W,H.props),de.ref=po(q,W,H),de.return=q,de):(de=al(H.type,H.key,H.props,null,q.mode,de),de.ref=po(q,W,H),de.return=q,de)}function Q(q,W,H,de){return W===null||W.tag!==4||W.stateNode.containerInfo!==H.containerInfo||W.stateNode.implementation!==H.implementation?(W=cc(H,q.mode,de),W.return=q,W):(W=h(W,H.children||[]),W.return=q,W)}function oe(q,W,H,de,Ce){return W===null||W.tag!==7?(W=ji(H,q.mode,de,Ce),W.return=q,W):(W=h(W,H),W.return=q,W)}function le(q,W,H){if(typeof W=="string"&&W!==""||typeof W=="number")return W=dc(""+W,q.mode,H),W.return=q,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case B:return H=al(W.type,W.key,W.props,null,q.mode,H),H.ref=po(q,null,W),H.return=q,H;case P:return W=cc(W,q.mode,H),W.return=q,W;case ye:var de=W._init;return le(q,de(W._payload),H)}if(We(W)||re(W))return W=ji(W,q.mode,H,null),W.return=q,W;Du(q,W)}return null}function ie(q,W,H,de){var Ce=W!==null?W.key:null;if(typeof H=="string"&&H!==""||typeof H=="number")return Ce!==null?null:M(q,W,""+H,de);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case B:return H.key===Ce?L(q,W,H,de):null;case P:return H.key===Ce?Q(q,W,H,de):null;case ye:return Ce=H._init,ie(q,W,Ce(H._payload),de)}if(We(H)||re(H))return Ce!==null?null:oe(q,W,H,de,null);Du(q,H)}return null}function we(q,W,H,de,Ce){if(typeof de=="string"&&de!==""||typeof de=="number")return q=q.get(H)||null,M(W,q,""+de,Ce);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case B:return q=q.get(de.key===null?H:de.key)||null,L(W,q,de,Ce);case P:return q=q.get(de.key===null?H:de.key)||null,Q(W,q,de,Ce);case ye:var Ne=de._init;return we(q,W,H,Ne(de._payload),Ce)}if(We(de)||re(de))return q=q.get(H)||null,oe(W,q,de,Ce,null);Du(W,de)}return null}function Se(q,W,H,de){for(var Ce=null,Ne=null,Oe=W,Be=W=0,Ot=null;Oe!==null&&Be<H.length;Be++){Oe.index>Be?(Ot=Oe,Oe=null):Ot=Oe.sibling;var tt=ie(q,Oe,H[Be],de);if(tt===null){Oe===null&&(Oe=Ot);break}r&&Oe&&tt.alternate===null&&n(q,Oe),W=v(tt,W,Be),Ne===null?Ce=tt:Ne.sibling=tt,Ne=tt,Oe=Ot}if(Be===H.length)return a(q,Oe),lt&&ze(q,Be),Ce;if(Oe===null){for(;Be<H.length;Be++)Oe=le(q,H[Be],de),Oe!==null&&(W=v(Oe,W,Be),Ne===null?Ce=Oe:Ne.sibling=Oe,Ne=Oe);return lt&&ze(q,Be),Ce}for(Oe=l(q,Oe);Be<H.length;Be++)Ot=we(Oe,q,Be,H[Be],de),Ot!==null&&(r&&Ot.alternate!==null&&Oe.delete(Ot.key===null?Be:Ot.key),W=v(Ot,W,Be),Ne===null?Ce=Ot:Ne.sibling=Ot,Ne=Ot);return r&&Oe.forEach(function(di){return n(q,di)}),lt&&ze(q,Be),Ce}function Ee(q,W,H,de){var Ce=re(H);if(typeof Ce!="function")throw Error(i(150));if(H=Ce.call(H),H==null)throw Error(i(151));for(var Ne=Ce=null,Oe=W,Be=W=0,Ot=null,tt=H.next();Oe!==null&&!tt.done;Be++,tt=H.next()){Oe.index>Be?(Ot=Oe,Oe=null):Ot=Oe.sibling;var di=ie(q,Oe,tt.value,de);if(di===null){Oe===null&&(Oe=Ot);break}r&&Oe&&di.alternate===null&&n(q,Oe),W=v(di,W,Be),Ne===null?Ce=di:Ne.sibling=di,Ne=di,Oe=Ot}if(tt.done)return a(q,Oe),lt&&ze(q,Be),Ce;if(Oe===null){for(;!tt.done;Be++,tt=H.next())tt=le(q,tt.value,de),tt!==null&&(W=v(tt,W,Be),Ne===null?Ce=tt:Ne.sibling=tt,Ne=tt);return lt&&ze(q,Be),Ce}for(Oe=l(q,Oe);!tt.done;Be++,tt=H.next())tt=we(Oe,q,Be,tt.value,de),tt!==null&&(r&&tt.alternate!==null&&Oe.delete(tt.key===null?Be:tt.key),W=v(tt,W,Be),Ne===null?Ce=tt:Ne.sibling=tt,Ne=tt);return r&&Oe.forEach(function($2){return n(q,$2)}),lt&&ze(q,Be),Ce}function $t(q,W,H,de){if(typeof H=="object"&&H!==null&&H.type===V&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case B:e:{for(var Ce=H.key,Ne=W;Ne!==null;){if(Ne.key===Ce){if(Ce=H.type,Ce===V){if(Ne.tag===7){a(q,Ne.sibling),W=h(Ne,H.props.children),W.return=q,q=W;break e}}else if(Ne.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===ye&&kf(Ce)===Ne.type){a(q,Ne.sibling),W=h(Ne,H.props),W.ref=po(q,Ne,H),W.return=q,q=W;break e}a(q,Ne);break}else n(q,Ne);Ne=Ne.sibling}H.type===V?(W=ji(H.props.children,q.mode,de,H.key),W.return=q,q=W):(de=al(H.type,H.key,H.props,null,q.mode,de),de.ref=po(q,W,H),de.return=q,q=de)}return T(q);case P:e:{for(Ne=H.key;W!==null;){if(W.key===Ne)if(W.tag===4&&W.stateNode.containerInfo===H.containerInfo&&W.stateNode.implementation===H.implementation){a(q,W.sibling),W=h(W,H.children||[]),W.return=q,q=W;break e}else{a(q,W);break}else n(q,W);W=W.sibling}W=cc(H,q.mode,de),W.return=q,q=W}return T(q);case ye:return Ne=H._init,$t(q,W,Ne(H._payload),de)}if(We(H))return Se(q,W,H,de);if(re(H))return Ee(q,W,H,de);Du(q,H)}return typeof H=="string"&&H!==""||typeof H=="number"?(H=""+H,W!==null&&W.tag===6?(a(q,W.sibling),W=h(W,H),W.return=q,q=W):(a(q,W),W=dc(H,q.mode,de),W.return=q,q=W),T(q)):a(q,W)}return $t}var Ga=Ef(!0),Tf=Ef(!1),Mu=en(null),Bu=null,Ka=null,_d=null;function $d(){_d=Ka=Bu=null}function xd(r){var n=Mu.current;ut(Mu),r._currentValue=n}function bd(r,n,a){for(;r!==null;){var l=r.alternate;if((r.childLanes&n)!==n?(r.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),r===a)break;r=r.return}}function Qa(r,n){Bu=r,_d=Ka=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&n)!==0&&(nr=!0),r.firstContext=null)}function Sr(r){var n=r._currentValue;if(_d!==r)if(r={context:r,memoizedValue:n,next:null},Ka===null){if(Bu===null)throw Error(i(308));Ka=r,Bu.dependencies={lanes:0,firstContext:r}}else Ka=Ka.next=r;return n}var Ri=null;function Sd(r){Ri===null?Ri=[r]:Ri.push(r)}function Cf(r,n,a,l){var h=n.interleaved;return h===null?(a.next=a,Sd(n)):(a.next=h.next,h.next=a),n.interleaved=a,_n(r,l)}function _n(r,n){r.lanes|=n;var a=r.alternate;for(a!==null&&(a.lanes|=n),a=r,r=r.return;r!==null;)r.childLanes|=n,a=r.alternate,a!==null&&(a.childLanes|=n),a=r,r=r.return;return a.tag===3?a.stateNode:null}var ri=!1;function kd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function If(r,n){r=r.updateQueue,n.updateQueue===r&&(n.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function $n(r,n){return{eventTime:r,lane:n,tag:0,payload:null,callback:null,next:null}}function ni(r,n,a){var l=r.updateQueue;if(l===null)return null;if(l=l.shared,(Je&2)!==0){var h=l.pending;return h===null?n.next=n:(n.next=h.next,h.next=n),l.pending=n,_n(r,a)}return h=l.interleaved,h===null?(n.next=n,Sd(l)):(n.next=h.next,h.next=n),l.interleaved=n,_n(r,a)}function Pu(r,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194240)!==0)){var l=n.lanes;l&=r.pendingLanes,a|=l,n.lanes=a,bs(r,a)}}function zf(r,n){var a=r.updateQueue,l=r.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,v=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};v===null?h=v=T:v=v.next=T,a=a.next}while(a!==null);v===null?h=v=n:v=v.next=n}else h=v=n;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:v,shared:l.shared,effects:l.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=n:r.next=n,a.lastBaseUpdate=n}function Lu(r,n,a,l){var h=r.updateQueue;ri=!1;var v=h.firstBaseUpdate,T=h.lastBaseUpdate,M=h.shared.pending;if(M!==null){h.shared.pending=null;var L=M,Q=L.next;L.next=null,T===null?v=Q:T.next=Q,T=L;var oe=r.alternate;oe!==null&&(oe=oe.updateQueue,M=oe.lastBaseUpdate,M!==T&&(M===null?oe.firstBaseUpdate=Q:M.next=Q,oe.lastBaseUpdate=L))}if(v!==null){var le=h.baseState;T=0,oe=Q=L=null,M=v;do{var ie=M.lane,we=M.eventTime;if((l&ie)===ie){oe!==null&&(oe=oe.next={eventTime:we,lane:0,tag:M.tag,payload:M.payload,callback:M.callback,next:null});e:{var Se=r,Ee=M;switch(ie=n,we=a,Ee.tag){case 1:if(Se=Ee.payload,typeof Se=="function"){le=Se.call(we,le,ie);break e}le=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=Ee.payload,ie=typeof Se=="function"?Se.call(we,le,ie):Se,ie==null)break e;le=se({},le,ie);break e;case 2:ri=!0}}M.callback!==null&&M.lane!==0&&(r.flags|=64,ie=h.effects,ie===null?h.effects=[M]:ie.push(M))}else we={eventTime:we,lane:ie,tag:M.tag,payload:M.payload,callback:M.callback,next:null},oe===null?(Q=oe=we,L=le):oe=oe.next=we,T|=ie;if(M=M.next,M===null){if(M=h.shared.pending,M===null)break;ie=M,M=ie.next,ie.next=null,h.lastBaseUpdate=ie,h.shared.pending=null}}while(!0);if(oe===null&&(L=le),h.baseState=L,h.firstBaseUpdate=Q,h.lastBaseUpdate=oe,n=h.shared.interleaved,n!==null){h=n;do T|=h.lane,h=h.next;while(h!==n)}else v===null&&(h.shared.lanes=0);Bi|=T,r.lanes=T,r.memoizedState=le}}function Nf(r,n,a){if(r=n.effects,n.effects=null,r!==null)for(n=0;n<r.length;n++){var l=r[n],h=l.callback;if(h!==null){if(l.callback=null,l=a,typeof h!="function")throw Error(i(191,h));h.call(l)}}}var fo={},rn=en(fo),ho=en(fo),mo=en(fo);function Di(r){if(r===fo)throw Error(i(174));return r}function Ed(r,n){switch(ot(mo,n),ot(ho,r),ot(rn,fo),r=n.nodeType,r){case 9:case 11:n=(n=n.documentElement)?n.namespaceURI:gi(null,"");break;default:r=r===8?n.parentNode:n,n=r.namespaceURI||null,r=r.tagName,n=gi(n,r)}ut(rn),ot(rn,n)}function Za(){ut(rn),ut(ho),ut(mo)}function Of(r){Di(mo.current);var n=Di(rn.current),a=gi(n,r.type);n!==a&&(ot(ho,r),ot(rn,a))}function Td(r){ho.current===r&&(ut(rn),ut(ho))}var yt=en(0);function Uu(r){for(var n=r;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Cd=[];function Id(){for(var r=0;r<Cd.length;r++)Cd[r]._workInProgressVersionPrimary=null;Cd.length=0}var ju=D.ReactCurrentDispatcher,zd=D.ReactCurrentBatchConfig,Mi=0,vt=null,kt=null,zt=null,Wu=!1,go=!1,yo=0,V_=0;function Ft(){throw Error(i(321))}function Nd(r,n){if(n===null)return!1;for(var a=0;a<n.length&&a<r.length;a++)if(!rr(r[a],n[a]))return!1;return!0}function Od(r,n,a,l,h,v){if(Mi=v,vt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,ju.current=r===null||r.memoizedState===null?G_:K_,r=a(l,h),go){v=0;do{if(go=!1,yo=0,25<=v)throw Error(i(301));v+=1,zt=kt=null,n.updateQueue=null,ju.current=Q_,r=a(l,h)}while(go)}if(ju.current=qu,n=kt!==null&&kt.next!==null,Mi=0,zt=kt=vt=null,Wu=!1,n)throw Error(i(300));return r}function Ad(){var r=yo!==0;return yo=0,r}function nn(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?vt.memoizedState=zt=r:zt=zt.next=r,zt}function kr(){if(kt===null){var r=vt.alternate;r=r!==null?r.memoizedState:null}else r=kt.next;var n=zt===null?vt.memoizedState:zt.next;if(n!==null)zt=n,kt=r;else{if(r===null)throw Error(i(310));kt=r,r={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},zt===null?vt.memoizedState=zt=r:zt=zt.next=r}return zt}function vo(r,n){return typeof n=="function"?n(r):n}function Rd(r){var n=kr(),a=n.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=r;var l=kt,h=l.baseQueue,v=a.pending;if(v!==null){if(h!==null){var T=h.next;h.next=v.next,v.next=T}l.baseQueue=h=v,a.pending=null}if(h!==null){v=h.next,l=l.baseState;var M=T=null,L=null,Q=v;do{var oe=Q.lane;if((Mi&oe)===oe)L!==null&&(L=L.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),l=Q.hasEagerState?Q.eagerState:r(l,Q.action);else{var le={lane:oe,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};L===null?(M=L=le,T=l):L=L.next=le,vt.lanes|=oe,Bi|=oe}Q=Q.next}while(Q!==null&&Q!==v);L===null?T=l:L.next=M,rr(l,n.memoizedState)||(nr=!0),n.memoizedState=l,n.baseState=T,n.baseQueue=L,a.lastRenderedState=l}if(r=a.interleaved,r!==null){h=r;do v=h.lane,vt.lanes|=v,Bi|=v,h=h.next;while(h!==r)}else h===null&&(a.lanes=0);return[n.memoizedState,a.dispatch]}function Dd(r){var n=kr(),a=n.queue;if(a===null)throw Error(i(311));a.lastRenderedReducer=r;var l=a.dispatch,h=a.pending,v=n.memoizedState;if(h!==null){a.pending=null;var T=h=h.next;do v=r(v,T.action),T=T.next;while(T!==h);rr(v,n.memoizedState)||(nr=!0),n.memoizedState=v,n.baseQueue===null&&(n.baseState=v),a.lastRenderedState=v}return[v,l]}function Af(){}function Rf(r,n){var a=vt,l=kr(),h=n(),v=!rr(l.memoizedState,h);if(v&&(l.memoizedState=h,nr=!0),l=l.queue,Md(Bf.bind(null,a,l,r),[r]),l.getSnapshot!==n||v||zt!==null&&zt.memoizedState.tag&1){if(a.flags|=2048,wo(9,Mf.bind(null,a,l,h,n),void 0,null),Nt===null)throw Error(i(349));(Mi&30)!==0||Df(a,n,h)}return h}function Df(r,n,a){r.flags|=16384,r={getSnapshot:n,value:a},n=vt.updateQueue,n===null?(n={lastEffect:null,stores:null},vt.updateQueue=n,n.stores=[r]):(a=n.stores,a===null?n.stores=[r]:a.push(r))}function Mf(r,n,a,l){n.value=a,n.getSnapshot=l,Pf(n)&&Lf(r)}function Bf(r,n,a){return a(function(){Pf(n)&&Lf(r)})}function Pf(r){var n=r.getSnapshot;r=r.value;try{var a=n();return!rr(r,a)}catch{return!0}}function Lf(r){var n=_n(r,1);n!==null&&Ur(n,r,1,-1)}function Uf(r){var n=nn();return typeof r=="function"&&(r=r()),n.memoizedState=n.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vo,lastRenderedState:r},n.queue=r,r=r.dispatch=H_.bind(null,vt,r),[n.memoizedState,r]}function wo(r,n,a,l){return r={tag:r,create:n,destroy:a,deps:l,next:null},n=vt.updateQueue,n===null?(n={lastEffect:null,stores:null},vt.updateQueue=n,n.lastEffect=r.next=r):(a=n.lastEffect,a===null?n.lastEffect=r.next=r:(l=a.next,a.next=r,r.next=l,n.lastEffect=r)),r}function jf(){return kr().memoizedState}function Vu(r,n,a,l){var h=nn();vt.flags|=r,h.memoizedState=wo(1|n,a,void 0,l===void 0?null:l)}function Fu(r,n,a,l){var h=kr();l=l===void 0?null:l;var v=void 0;if(kt!==null){var T=kt.memoizedState;if(v=T.destroy,l!==null&&Nd(l,T.deps)){h.memoizedState=wo(n,a,v,l);return}}vt.flags|=r,h.memoizedState=wo(1|n,a,v,l)}function Wf(r,n){return Vu(8390656,8,r,n)}function Md(r,n){return Fu(2048,8,r,n)}function Vf(r,n){return Fu(4,2,r,n)}function Ff(r,n){return Fu(4,4,r,n)}function qf(r,n){if(typeof n=="function")return r=r(),n(r),function(){n(null)};if(n!=null)return r=r(),n.current=r,function(){n.current=null}}function Hf(r,n,a){return a=a!=null?a.concat([r]):null,Fu(4,4,qf.bind(null,n,r),a)}function Bd(){}function Gf(r,n){var a=kr();n=n===void 0?null:n;var l=a.memoizedState;return l!==null&&n!==null&&Nd(n,l[1])?l[0]:(a.memoizedState=[r,n],r)}function Kf(r,n){var a=kr();n=n===void 0?null:n;var l=a.memoizedState;return l!==null&&n!==null&&Nd(n,l[1])?l[0]:(r=r(),a.memoizedState=[r,n],r)}function Qf(r,n,a){return(Mi&21)===0?(r.baseState&&(r.baseState=!1,nr=!0),r.memoizedState=a):(rr(a,n)||(a=Jo(),vt.lanes|=a,Bi|=a,r.baseState=!0),n)}function F_(r,n){var a=Ze;Ze=a!==0&&4>a?a:4,r(!0);var l=zd.transition;zd.transition={};try{r(!1),n()}finally{Ze=a,zd.transition=l}}function Zf(){return kr().memoizedState}function q_(r,n,a){var l=oi(r);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},Yf(r))Xf(n,a);else if(a=Cf(r,n,a,l),a!==null){var h=Xt();Ur(a,r,l,h),Jf(a,n,l)}}function H_(r,n,a){var l=oi(r),h={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yf(r))Xf(n,h);else{var v=r.alternate;if(r.lanes===0&&(v===null||v.lanes===0)&&(v=n.lastRenderedReducer,v!==null))try{var T=n.lastRenderedState,M=v(T,a);if(h.hasEagerState=!0,h.eagerState=M,rr(M,T)){var L=n.interleaved;L===null?(h.next=h,Sd(n)):(h.next=L.next,L.next=h),n.interleaved=h;return}}catch{}finally{}a=Cf(r,n,h,l),a!==null&&(h=Xt(),Ur(a,r,l,h),Jf(a,n,l))}}function Yf(r){var n=r.alternate;return r===vt||n!==null&&n===vt}function Xf(r,n){go=Wu=!0;var a=r.pending;a===null?n.next=n:(n.next=a.next,a.next=n),r.pending=n}function Jf(r,n,a){if((a&4194240)!==0){var l=n.lanes;l&=r.pendingLanes,a|=l,n.lanes=a,bs(r,a)}}var qu={readContext:Sr,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},G_={readContext:Sr,useCallback:function(r,n){return nn().memoizedState=[r,n===void 0?null:n],r},useContext:Sr,useEffect:Wf,useImperativeHandle:function(r,n,a){return a=a!=null?a.concat([r]):null,Vu(4194308,4,qf.bind(null,n,r),a)},useLayoutEffect:function(r,n){return Vu(4194308,4,r,n)},useInsertionEffect:function(r,n){return Vu(4,2,r,n)},useMemo:function(r,n){var a=nn();return n=n===void 0?null:n,r=r(),a.memoizedState=[r,n],r},useReducer:function(r,n,a){var l=nn();return n=a!==void 0?a(n):n,l.memoizedState=l.baseState=n,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:n},l.queue=r,r=r.dispatch=q_.bind(null,vt,r),[l.memoizedState,r]},useRef:function(r){var n=nn();return r={current:r},n.memoizedState=r},useState:Uf,useDebugValue:Bd,useDeferredValue:function(r){return nn().memoizedState=r},useTransition:function(){var r=Uf(!1),n=r[0];return r=F_.bind(null,r[1]),nn().memoizedState=r,[n,r]},useMutableSource:function(){},useSyncExternalStore:function(r,n,a){var l=vt,h=nn();if(lt){if(a===void 0)throw Error(i(407));a=a()}else{if(a=n(),Nt===null)throw Error(i(349));(Mi&30)!==0||Df(l,n,a)}h.memoizedState=a;var v={value:a,getSnapshot:n};return h.queue=v,Wf(Bf.bind(null,l,v,r),[r]),l.flags|=2048,wo(9,Mf.bind(null,l,v,a,n),void 0,null),a},useId:function(){var r=nn(),n=Nt.identifierPrefix;if(lt){var a=fe,l=ue;a=(l&~(1<<32-dr(l)-1)).toString(32)+a,n=":"+n+"R"+a,a=yo++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=V_++,n=":"+n+"r"+a.toString(32)+":";return r.memoizedState=n},unstable_isNewReconciler:!1},K_={readContext:Sr,useCallback:Gf,useContext:Sr,useEffect:Md,useImperativeHandle:Hf,useInsertionEffect:Vf,useLayoutEffect:Ff,useMemo:Kf,useReducer:Rd,useRef:jf,useState:function(){return Rd(vo)},useDebugValue:Bd,useDeferredValue:function(r){var n=kr();return Qf(n,kt.memoizedState,r)},useTransition:function(){var r=Rd(vo)[0],n=kr().memoizedState;return[r,n]},useMutableSource:Af,useSyncExternalStore:Rf,useId:Zf,unstable_isNewReconciler:!1},Q_={readContext:Sr,useCallback:Gf,useContext:Sr,useEffect:Md,useImperativeHandle:Hf,useInsertionEffect:Vf,useLayoutEffect:Ff,useMemo:Kf,useReducer:Dd,useRef:jf,useState:function(){return Dd(vo)},useDebugValue:Bd,useDeferredValue:function(r){var n=kr();return kt===null?n.memoizedState=r:Qf(n,kt.memoizedState,r)},useTransition:function(){var r=Dd(vo)[0],n=kr().memoizedState;return[r,n]},useMutableSource:Af,useSyncExternalStore:Rf,useId:Zf,unstable_isNewReconciler:!1};function Br(r,n){if(r&&r.defaultProps){n=se({},n),r=r.defaultProps;for(var a in r)n[a]===void 0&&(n[a]=r[a]);return n}return n}function Pd(r,n,a,l){n=r.memoizedState,a=a(l,n),a=a==null?n:se({},n,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Hu={isMounted:function(r){return(r=r._reactInternals)?Kr(r)===r:!1},enqueueSetState:function(r,n,a){r=r._reactInternals;var l=Xt(),h=oi(r),v=$n(l,h);v.payload=n,a!=null&&(v.callback=a),n=ni(r,v,h),n!==null&&(Ur(n,r,h,l),Pu(n,r,h))},enqueueReplaceState:function(r,n,a){r=r._reactInternals;var l=Xt(),h=oi(r),v=$n(l,h);v.tag=1,v.payload=n,a!=null&&(v.callback=a),n=ni(r,v,h),n!==null&&(Ur(n,r,h,l),Pu(n,r,h))},enqueueForceUpdate:function(r,n){r=r._reactInternals;var a=Xt(),l=oi(r),h=$n(a,l);h.tag=2,n!=null&&(h.callback=n),n=ni(r,h,l),n!==null&&(Ur(n,r,l,a),Pu(n,r,l))}};function eh(r,n,a,l,h,v,T){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(l,v,T):n.prototype&&n.prototype.isPureReactComponent?!qn(a,l)||!qn(h,v):!0}function th(r,n,a){var l=!1,h=tn,v=n.contextType;return typeof v=="object"&&v!==null?v=Sr(v):(h=Vt(n)?wn:It.current,l=n.contextTypes,v=(l=l!=null)?ei(r,h):tn),n=new n(a,v),r.memoizedState=n.state!==null&&n.state!==void 0?n.state:null,n.updater=Hu,r.stateNode=n,n._reactInternals=r,l&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=h,r.__reactInternalMemoizedMaskedChildContext=v),n}function rh(r,n,a,l){r=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==r&&Hu.enqueueReplaceState(n,n.state,null)}function Ld(r,n,a,l){var h=r.stateNode;h.props=a,h.state=r.memoizedState,h.refs={},kd(r);var v=n.contextType;typeof v=="object"&&v!==null?h.context=Sr(v):(v=Vt(n)?wn:It.current,h.context=ei(r,v)),h.state=r.memoizedState,v=n.getDerivedStateFromProps,typeof v=="function"&&(Pd(r,n,v,a),h.state=r.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(n=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),n!==h.state&&Hu.enqueueReplaceState(h,h.state,null),Lu(r,a,h,l),h.state=r.memoizedState),typeof h.componentDidMount=="function"&&(r.flags|=4194308)}function Ya(r,n){try{var a="",l=n;do a+=ve(l),l=l.return;while(l);var h=a}catch(v){h=`
Error generating stack: `+v.message+`
`+v.stack}return{value:r,source:n,stack:h,digest:null}}function Ud(r,n,a){return{value:r,source:null,stack:a??null,digest:n??null}}function jd(r,n){try{console.error(n.value)}catch(a){setTimeout(function(){throw a})}}var Z_=typeof WeakMap=="function"?WeakMap:Map;function nh(r,n,a){a=$n(-1,a),a.tag=3,a.payload={element:null};var l=n.value;return a.callback=function(){Ju||(Ju=!0,rc=l),jd(r,n)},a}function ih(r,n,a){a=$n(-1,a),a.tag=3;var l=r.type.getDerivedStateFromError;if(typeof l=="function"){var h=n.value;a.payload=function(){return l(h)},a.callback=function(){jd(r,n)}}var v=r.stateNode;return v!==null&&typeof v.componentDidCatch=="function"&&(a.callback=function(){jd(r,n),typeof l!="function"&&(ai===null?ai=new Set([this]):ai.add(this));var T=n.stack;this.componentDidCatch(n.value,{componentStack:T!==null?T:""})}),a}function ah(r,n,a){var l=r.pingCache;if(l===null){l=r.pingCache=new Z_;var h=new Set;l.set(n,h)}else h=l.get(n),h===void 0&&(h=new Set,l.set(n,h));h.has(a)||(h.add(a),r=d2.bind(null,r,n,a),n.then(r,r))}function sh(r){do{var n;if((n=r.tag===13)&&(n=r.memoizedState,n=n!==null?n.dehydrated!==null:!0),n)return r;r=r.return}while(r!==null);return null}function oh(r,n,a,l,h){return(r.mode&1)===0?(r===n?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(n=$n(-1,1),n.tag=2,ni(a,n,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=h,r)}var Y_=D.ReactCurrentOwner,nr=!1;function Yt(r,n,a,l){n.child=r===null?Tf(n,null,a,l):Ga(n,r.child,a,l)}function uh(r,n,a,l,h){a=a.render;var v=n.ref;return Qa(n,h),l=Od(r,n,a,l,v,h),a=Ad(),r!==null&&!nr?(n.updateQueue=r.updateQueue,n.flags&=-2053,r.lanes&=~h,xn(r,n,h)):(lt&&a&&Xe(n),n.flags|=1,Yt(r,n,l,h),n.child)}function lh(r,n,a,l,h){if(r===null){var v=a.type;return typeof v=="function"&&!lc(v)&&v.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(n.tag=15,n.type=v,dh(r,n,v,l,h)):(r=al(a.type,null,l,n,n.mode,h),r.ref=n.ref,r.return=n,n.child=r)}if(v=r.child,(r.lanes&h)===0){var T=v.memoizedProps;if(a=a.compare,a=a!==null?a:qn,a(T,l)&&r.ref===n.ref)return xn(r,n,h)}return n.flags|=1,r=li(v,l),r.ref=n.ref,r.return=n,n.child=r}function dh(r,n,a,l,h){if(r!==null){var v=r.memoizedProps;if(qn(v,l)&&r.ref===n.ref)if(nr=!1,n.pendingProps=l=v,(r.lanes&h)!==0)(r.flags&131072)!==0&&(nr=!0);else return n.lanes=r.lanes,xn(r,n,h)}return Wd(r,n,a,l,h)}function ch(r,n,a){var l=n.pendingProps,h=l.children,v=r!==null?r.memoizedState:null;if(l.mode==="hidden")if((n.mode&1)===0)n.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(Ja,fr),fr|=a;else{if((a&1073741824)===0)return r=v!==null?v.baseLanes|a:a,n.lanes=n.childLanes=1073741824,n.memoizedState={baseLanes:r,cachePool:null,transitions:null},n.updateQueue=null,ot(Ja,fr),fr|=r,null;n.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=v!==null?v.baseLanes:a,ot(Ja,fr),fr|=l}else v!==null?(l=v.baseLanes|a,n.memoizedState=null):l=a,ot(Ja,fr),fr|=l;return Yt(r,n,h,a),n.child}function ph(r,n){var a=n.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(n.flags|=512,n.flags|=2097152)}function Wd(r,n,a,l,h){var v=Vt(a)?wn:It.current;return v=ei(n,v),Qa(n,h),a=Od(r,n,a,l,v,h),l=Ad(),r!==null&&!nr?(n.updateQueue=r.updateQueue,n.flags&=-2053,r.lanes&=~h,xn(r,n,h)):(lt&&l&&Xe(n),n.flags|=1,Yt(r,n,a,h),n.child)}function fh(r,n,a,l,h){if(Vt(a)){var v=!0;Fa(n)}else v=!1;if(Qa(n,h),n.stateNode===null)Ku(r,n),th(n,a,l),Ld(n,a,l,h),l=!0;else if(r===null){var T=n.stateNode,M=n.memoizedProps;T.props=M;var L=T.context,Q=a.contextType;typeof Q=="object"&&Q!==null?Q=Sr(Q):(Q=Vt(a)?wn:It.current,Q=ei(n,Q));var oe=a.getDerivedStateFromProps,le=typeof oe=="function"||typeof T.getSnapshotBeforeUpdate=="function";le||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(M!==l||L!==Q)&&rh(n,T,l,Q),ri=!1;var ie=n.memoizedState;T.state=ie,Lu(n,l,T,h),L=n.memoizedState,M!==l||ie!==L||Wt.current||ri?(typeof oe=="function"&&(Pd(n,a,oe,l),L=n.memoizedState),(M=ri||eh(n,a,M,l,ie,L,Q))?(le||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(n.flags|=4194308)):(typeof T.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=L),T.props=l,T.state=L,T.context=Q,l=M):(typeof T.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{T=n.stateNode,If(r,n),M=n.memoizedProps,Q=n.type===n.elementType?M:Br(n.type,M),T.props=Q,le=n.pendingProps,ie=T.context,L=a.contextType,typeof L=="object"&&L!==null?L=Sr(L):(L=Vt(a)?wn:It.current,L=ei(n,L));var we=a.getDerivedStateFromProps;(oe=typeof we=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(M!==le||ie!==L)&&rh(n,T,l,L),ri=!1,ie=n.memoizedState,T.state=ie,Lu(n,l,T,h);var Se=n.memoizedState;M!==le||ie!==Se||Wt.current||ri?(typeof we=="function"&&(Pd(n,a,we,l),Se=n.memoizedState),(Q=ri||eh(n,a,Q,l,ie,Se,L)||!1)?(oe||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(l,Se,L),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(l,Se,L)),typeof T.componentDidUpdate=="function"&&(n.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof T.componentDidUpdate!="function"||M===r.memoizedProps&&ie===r.memoizedState||(n.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||M===r.memoizedProps&&ie===r.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=Se),T.props=l,T.state=Se,T.context=L,l=Q):(typeof T.componentDidUpdate!="function"||M===r.memoizedProps&&ie===r.memoizedState||(n.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||M===r.memoizedProps&&ie===r.memoizedState||(n.flags|=1024),l=!1)}return Vd(r,n,a,l,v,h)}function Vd(r,n,a,l,h,v){ph(r,n);var T=(n.flags&128)!==0;if(!l&&!T)return h&&Ou(n,a,!1),xn(r,n,v);l=n.stateNode,Y_.current=n;var M=T&&typeof a.getDerivedStateFromError!="function"?null:l.render();return n.flags|=1,r!==null&&T?(n.child=Ga(n,r.child,null,v),n.child=Ga(n,null,M,v)):Yt(r,n,M,v),n.memoizedState=l.state,h&&Ou(n,a,!0),n.child}function hh(r){var n=r.stateNode;n.pendingContext?zu(r,n.pendingContext,n.pendingContext!==n.context):n.context&&zu(r,n.context,!1),Ed(r,n.containerInfo)}function mh(r,n,a,l,h){return Ha(),wd(h),n.flags|=256,Yt(r,n,a,l),n.child}var Fd={dehydrated:null,treeContext:null,retryLane:0};function qd(r){return{baseLanes:r,cachePool:null,transitions:null}}function gh(r,n,a){var l=n.pendingProps,h=yt.current,v=!1,T=(n.flags&128)!==0,M;if((M=T)||(M=r!==null&&r.memoizedState===null?!1:(h&2)!==0),M?(v=!0,n.flags&=-129):(r===null||r.memoizedState!==null)&&(h|=1),ot(yt,h&1),r===null)return vd(n),r=n.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((n.mode&1)===0?n.lanes=1:r.data==="$!"?n.lanes=8:n.lanes=1073741824,null):(T=l.children,r=l.fallback,v?(l=n.mode,v=n.child,T={mode:"hidden",children:T},(l&1)===0&&v!==null?(v.childLanes=0,v.pendingProps=T):v=sl(T,l,0,null),r=ji(r,l,a,null),v.return=n,r.return=n,v.sibling=r,n.child=v,n.child.memoizedState=qd(a),n.memoizedState=Fd,r):Hd(n,T));if(h=r.memoizedState,h!==null&&(M=h.dehydrated,M!==null))return X_(r,n,T,l,M,h,a);if(v){v=l.fallback,T=n.mode,h=r.child,M=h.sibling;var L={mode:"hidden",children:l.children};return(T&1)===0&&n.child!==h?(l=n.child,l.childLanes=0,l.pendingProps=L,n.deletions=null):(l=li(h,L),l.subtreeFlags=h.subtreeFlags&14680064),M!==null?v=li(M,v):(v=ji(v,T,a,null),v.flags|=2),v.return=n,l.return=n,l.sibling=v,n.child=l,l=v,v=n.child,T=r.child.memoizedState,T=T===null?qd(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},v.memoizedState=T,v.childLanes=r.childLanes&~a,n.memoizedState=Fd,l}return v=r.child,r=v.sibling,l=li(v,{mode:"visible",children:l.children}),(n.mode&1)===0&&(l.lanes=a),l.return=n,l.sibling=null,r!==null&&(a=n.deletions,a===null?(n.deletions=[r],n.flags|=16):a.push(r)),n.child=l,n.memoizedState=null,l}function Hd(r,n){return n=sl({mode:"visible",children:n},r.mode,0,null),n.return=r,r.child=n}function Gu(r,n,a,l){return l!==null&&wd(l),Ga(n,r.child,null,a),r=Hd(n,n.pendingProps.children),r.flags|=2,n.memoizedState=null,r}function X_(r,n,a,l,h,v,T){if(a)return n.flags&256?(n.flags&=-257,l=Ud(Error(i(422))),Gu(r,n,T,l)):n.memoizedState!==null?(n.child=r.child,n.flags|=128,null):(v=l.fallback,h=n.mode,l=sl({mode:"visible",children:l.children},h,0,null),v=ji(v,h,T,null),v.flags|=2,l.return=n,v.return=n,l.sibling=v,n.child=l,(n.mode&1)!==0&&Ga(n,r.child,null,T),n.child.memoizedState=qd(T),n.memoizedState=Fd,v);if((n.mode&1)===0)return Gu(r,n,T,null);if(h.data==="$!"){if(l=h.nextSibling&&h.nextSibling.dataset,l)var M=l.dgst;return l=M,v=Error(i(419)),l=Ud(v,l,void 0),Gu(r,n,T,l)}if(M=(T&r.childLanes)!==0,nr||M){if(l=Nt,l!==null){switch(T&-T){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(l.suspendedLanes|T))!==0?0:h,h!==0&&h!==v.retryLane&&(v.retryLane=h,_n(r,h),Ur(l,r,h,-1))}return uc(),l=Ud(Error(i(421))),Gu(r,n,T,l)}return h.data==="$?"?(n.flags|=128,n.child=r.child,n=c2.bind(null,r),h._reactRetry=n,null):(r=v.treeContext,Pt=Jr(h.nextSibling),wt=n,lt=!0,Zt=null,r!==null&&(R[j++]=ue,R[j++]=fe,R[j++]=Z,ue=r.id,fe=r.overflow,Z=n),n=Hd(n,l.children),n.flags|=4096,n)}function yh(r,n,a){r.lanes|=n;var l=r.alternate;l!==null&&(l.lanes|=n),bd(r.return,n,a)}function Gd(r,n,a,l,h){var v=r.memoizedState;v===null?r.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h}:(v.isBackwards=n,v.rendering=null,v.renderingStartTime=0,v.last=l,v.tail=a,v.tailMode=h)}function vh(r,n,a){var l=n.pendingProps,h=l.revealOrder,v=l.tail;if(Yt(r,n,l.children,a),l=yt.current,(l&2)!==0)l=l&1|2,n.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=n.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&yh(r,a,n);else if(r.tag===19)yh(r,a,n);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}l&=1}if(ot(yt,l),(n.mode&1)===0)n.memoizedState=null;else switch(h){case"forwards":for(a=n.child,h=null;a!==null;)r=a.alternate,r!==null&&Uu(r)===null&&(h=a),a=a.sibling;a=h,a===null?(h=n.child,n.child=null):(h=a.sibling,a.sibling=null),Gd(n,!1,h,a,v);break;case"backwards":for(a=null,h=n.child,n.child=null;h!==null;){if(r=h.alternate,r!==null&&Uu(r)===null){n.child=h;break}r=h.sibling,h.sibling=a,a=h,h=r}Gd(n,!0,a,null,v);break;case"together":Gd(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Ku(r,n){(n.mode&1)===0&&r!==null&&(r.alternate=null,n.alternate=null,n.flags|=2)}function xn(r,n,a){if(r!==null&&(n.dependencies=r.dependencies),Bi|=n.lanes,(a&n.childLanes)===0)return null;if(r!==null&&n.child!==r.child)throw Error(i(153));if(n.child!==null){for(r=n.child,a=li(r,r.pendingProps),n.child=a,a.return=n;r.sibling!==null;)r=r.sibling,a=a.sibling=li(r,r.pendingProps),a.return=n;a.sibling=null}return n.child}function J_(r,n,a){switch(n.tag){case 3:hh(n),Ha();break;case 5:Of(n);break;case 1:Vt(n.type)&&Fa(n);break;case 4:Ed(n,n.stateNode.containerInfo);break;case 10:var l=n.type._context,h=n.memoizedProps.value;ot(Mu,l._currentValue),l._currentValue=h;break;case 13:if(l=n.memoizedState,l!==null)return l.dehydrated!==null?(ot(yt,yt.current&1),n.flags|=128,null):(a&n.child.childLanes)!==0?gh(r,n,a):(ot(yt,yt.current&1),r=xn(r,n,a),r!==null?r.sibling:null);ot(yt,yt.current&1);break;case 19:if(l=(a&n.childLanes)!==0,(r.flags&128)!==0){if(l)return vh(r,n,a);n.flags|=128}if(h=n.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ot(yt,yt.current),l)break;return null;case 22:case 23:return n.lanes=0,ch(r,n,a)}return xn(r,n,a)}var wh,Kd,_h,$h;wh=function(r,n){for(var a=n.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Kd=function(){},_h=function(r,n,a,l){var h=r.memoizedProps;if(h!==l){r=n.stateNode,Di(rn.current);var v=null;switch(a){case"input":h=Ve(r,h),l=Ve(r,l),v=[];break;case"select":h=se({},h,{value:void 0}),l=se({},l,{value:void 0}),v=[];break;case"textarea":h=xt(r,h),l=xt(r,l),v=[];break;default:typeof h.onClick!="function"&&typeof l.onClick=="function"&&(r.onclick=ja)}vi(a,l);var T;a=null;for(Q in h)if(!l.hasOwnProperty(Q)&&h.hasOwnProperty(Q)&&h[Q]!=null)if(Q==="style"){var M=h[Q];for(T in M)M.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?v||(v=[]):(v=v||[]).push(Q,null));for(Q in l){var L=l[Q];if(M=h!=null?h[Q]:void 0,l.hasOwnProperty(Q)&&L!==M&&(L!=null||M!=null))if(Q==="style")if(M){for(T in M)!M.hasOwnProperty(T)||L&&L.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in L)L.hasOwnProperty(T)&&M[T]!==L[T]&&(a||(a={}),a[T]=L[T])}else a||(v||(v=[]),v.push(Q,a)),a=L;else Q==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,M=M?M.__html:void 0,L!=null&&M!==L&&(v=v||[]).push(Q,L)):Q==="children"?typeof L!="string"&&typeof L!="number"||(v=v||[]).push(Q,""+L):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(L!=null&&Q==="onScroll"&&st("scroll",r),v||M===L||(v=[])):(v=v||[]).push(Q,L))}a&&(v=v||[]).push("style",a);var Q=v;(n.updateQueue=Q)&&(n.flags|=4)}},$h=function(r,n,a,l){a!==l&&(n.flags|=4)};function _o(r,n){if(!lt)switch(r.tailMode){case"hidden":n=r.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||r.tail===null?r.tail=null:r.tail.sibling=null:l.sibling=null}}function qt(r){var n=r.alternate!==null&&r.alternate.child===r.child,a=0,l=0;if(n)for(var h=r.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&14680064,l|=h.flags&14680064,h.return=r,h=h.sibling;else for(h=r.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=r,h=h.sibling;return r.subtreeFlags|=l,r.childLanes=a,n}function e2(r,n,a){var l=n.pendingProps;switch(nt(n),n.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(n),null;case 1:return Vt(n.type)&&Va(),qt(n),null;case 3:return l=n.stateNode,Za(),ut(Wt),ut(It),Id(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(r===null||r.child===null)&&(Ru(n)?n.flags|=4:r===null||r.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Zt!==null&&(ac(Zt),Zt=null))),Kd(r,n),qt(n),null;case 5:Td(n);var h=Di(mo.current);if(a=n.type,r!==null&&n.stateNode!=null)_h(r,n,a,l,h),r.ref!==n.ref&&(n.flags|=512,n.flags|=2097152);else{if(!l){if(n.stateNode===null)throw Error(i(166));return qt(n),null}if(r=Di(rn.current),Ru(n)){l=n.stateNode,a=n.type;var v=n.memoizedProps;switch(l[br]=n,l[Oi]=v,r=(n.mode&1)!==0,a){case"dialog":st("cancel",l),st("close",l);break;case"iframe":case"object":case"embed":st("load",l);break;case"video":case"audio":for(h=0;h<Gn.length;h++)st(Gn[h],l);break;case"source":st("error",l);break;case"img":case"image":case"link":st("error",l),st("load",l);break;case"details":st("toggle",l);break;case"input":rt(l,v),st("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!v.multiple},st("invalid",l);break;case"textarea":Mt(l,v),st("invalid",l)}vi(a,v),h=null;for(var T in v)if(v.hasOwnProperty(T)){var M=v[T];T==="children"?typeof M=="string"?l.textContent!==M&&(v.suppressHydrationWarning!==!0&&Zn(l.textContent,M,r),h=["children",M]):typeof M=="number"&&l.textContent!==""+M&&(v.suppressHydrationWarning!==!0&&Zn(l.textContent,M,r),h=["children",""+M]):o.hasOwnProperty(T)&&M!=null&&T==="onScroll"&&st("scroll",l)}switch(a){case"input":er(l),Gt(l,v,!0);break;case"textarea":er(l),In(l);break;case"select":case"option":break;default:typeof v.onClick=="function"&&(l.onclick=ja)}l=h,n.updateQueue=l,l!==null&&(n.flags|=4)}else{T=h.nodeType===9?h:h.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=Kt(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=T.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof l.is=="string"?r=T.createElement(a,{is:l.is}):(r=T.createElement(a),a==="select"&&(T=r,l.multiple?T.multiple=!0:l.size&&(T.size=l.size))):r=T.createElementNS(r,a),r[br]=n,r[Oi]=l,wh(r,n,!1,!1),n.stateNode=r;e:{switch(T=ps(a,l),a){case"dialog":st("cancel",r),st("close",r),h=l;break;case"iframe":case"object":case"embed":st("load",r),h=l;break;case"video":case"audio":for(h=0;h<Gn.length;h++)st(Gn[h],r);h=l;break;case"source":st("error",r),h=l;break;case"img":case"image":case"link":st("error",r),st("load",r),h=l;break;case"details":st("toggle",r),h=l;break;case"input":rt(r,l),h=Ve(r,l),st("invalid",r);break;case"option":h=l;break;case"select":r._wrapperState={wasMultiple:!!l.multiple},h=se({},l,{value:void 0}),st("invalid",r);break;case"textarea":Mt(r,l),h=xt(r,l),st("invalid",r);break;default:h=l}vi(a,h),M=h;for(v in M)if(M.hasOwnProperty(v)){var L=M[v];v==="style"?ds(r,L):v==="dangerouslySetInnerHTML"?(L=L?L.__html:void 0,L!=null&&un(r,L)):v==="children"?typeof L=="string"?(a!=="textarea"||L!=="")&&yi(r,L):typeof L=="number"&&yi(r,""+L):v!=="suppressContentEditableWarning"&&v!=="suppressHydrationWarning"&&v!=="autoFocus"&&(o.hasOwnProperty(v)?L!=null&&v==="onScroll"&&st("scroll",r):L!=null&&A(r,v,L,T))}switch(a){case"input":er(r),Gt(r,l,!1);break;case"textarea":er(r),In(r);break;case"option":l.value!=null&&r.setAttribute("value",""+Re(l.value));break;case"select":r.multiple=!!l.multiple,v=l.value,v!=null?Ge(r,!!l.multiple,v,!1):l.defaultValue!=null&&Ge(r,!!l.multiple,l.defaultValue,!0);break;default:typeof h.onClick=="function"&&(r.onclick=ja)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(n.flags|=4)}n.ref!==null&&(n.flags|=512,n.flags|=2097152)}return qt(n),null;case 6:if(r&&n.stateNode!=null)$h(r,n,r.memoizedProps,l);else{if(typeof l!="string"&&n.stateNode===null)throw Error(i(166));if(a=Di(mo.current),Di(rn.current),Ru(n)){if(l=n.stateNode,a=n.memoizedProps,l[br]=n,(v=l.nodeValue!==a)&&(r=wt,r!==null))switch(r.tag){case 3:Zn(l.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&Zn(l.nodeValue,a,(r.mode&1)!==0)}v&&(n.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[br]=n,n.stateNode=l}return qt(n),null;case 13:if(ut(yt),l=n.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(lt&&Pt!==null&&(n.mode&1)!==0&&(n.flags&128)===0)Sf(),Ha(),n.flags|=98560,v=!1;else if(v=Ru(n),l!==null&&l.dehydrated!==null){if(r===null){if(!v)throw Error(i(318));if(v=n.memoizedState,v=v!==null?v.dehydrated:null,!v)throw Error(i(317));v[br]=n}else Ha(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qt(n),v=!1}else Zt!==null&&(ac(Zt),Zt=null),v=!0;if(!v)return n.flags&65536?n:null}return(n.flags&128)!==0?(n.lanes=a,n):(l=l!==null,l!==(r!==null&&r.memoizedState!==null)&&l&&(n.child.flags|=8192,(n.mode&1)!==0&&(r===null||(yt.current&1)!==0?Et===0&&(Et=3):uc())),n.updateQueue!==null&&(n.flags|=4),qt(n),null);case 4:return Za(),Kd(r,n),r===null&&Kn(n.stateNode.containerInfo),qt(n),null;case 10:return xd(n.type._context),qt(n),null;case 17:return Vt(n.type)&&Va(),qt(n),null;case 19:if(ut(yt),v=n.memoizedState,v===null)return qt(n),null;if(l=(n.flags&128)!==0,T=v.rendering,T===null)if(l)_o(v,!1);else{if(Et!==0||r!==null&&(r.flags&128)!==0)for(r=n.child;r!==null;){if(T=Uu(r),T!==null){for(n.flags|=128,_o(v,!1),l=T.updateQueue,l!==null&&(n.updateQueue=l,n.flags|=4),n.subtreeFlags=0,l=a,a=n.child;a!==null;)v=a,r=l,v.flags&=14680066,T=v.alternate,T===null?(v.childLanes=0,v.lanes=r,v.child=null,v.subtreeFlags=0,v.memoizedProps=null,v.memoizedState=null,v.updateQueue=null,v.dependencies=null,v.stateNode=null):(v.childLanes=T.childLanes,v.lanes=T.lanes,v.child=T.child,v.subtreeFlags=0,v.deletions=null,v.memoizedProps=T.memoizedProps,v.memoizedState=T.memoizedState,v.updateQueue=T.updateQueue,v.type=T.type,r=T.dependencies,v.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return ot(yt,yt.current&1|2),n.child}r=r.sibling}v.tail!==null&&gt()>es&&(n.flags|=128,l=!0,_o(v,!1),n.lanes=4194304)}else{if(!l)if(r=Uu(T),r!==null){if(n.flags|=128,l=!0,a=r.updateQueue,a!==null&&(n.updateQueue=a,n.flags|=4),_o(v,!0),v.tail===null&&v.tailMode==="hidden"&&!T.alternate&&!lt)return qt(n),null}else 2*gt()-v.renderingStartTime>es&&a!==1073741824&&(n.flags|=128,l=!0,_o(v,!1),n.lanes=4194304);v.isBackwards?(T.sibling=n.child,n.child=T):(a=v.last,a!==null?a.sibling=T:n.child=T,v.last=T)}return v.tail!==null?(n=v.tail,v.rendering=n,v.tail=n.sibling,v.renderingStartTime=gt(),n.sibling=null,a=yt.current,ot(yt,l?a&1|2:a&1),n):(qt(n),null);case 22:case 23:return oc(),l=n.memoizedState!==null,r!==null&&r.memoizedState!==null!==l&&(n.flags|=8192),l&&(n.mode&1)!==0?(fr&1073741824)!==0&&(qt(n),n.subtreeFlags&6&&(n.flags|=8192)):qt(n),null;case 24:return null;case 25:return null}throw Error(i(156,n.tag))}function t2(r,n){switch(nt(n),n.tag){case 1:return Vt(n.type)&&Va(),r=n.flags,r&65536?(n.flags=r&-65537|128,n):null;case 3:return Za(),ut(Wt),ut(It),Id(),r=n.flags,(r&65536)!==0&&(r&128)===0?(n.flags=r&-65537|128,n):null;case 5:return Td(n),null;case 13:if(ut(yt),r=n.memoizedState,r!==null&&r.dehydrated!==null){if(n.alternate===null)throw Error(i(340));Ha()}return r=n.flags,r&65536?(n.flags=r&-65537|128,n):null;case 19:return ut(yt),null;case 4:return Za(),null;case 10:return xd(n.type._context),null;case 22:case 23:return oc(),null;case 24:return null;default:return null}}var Qu=!1,Ht=!1,r2=typeof WeakSet=="function"?WeakSet:Set,xe=null;function Xa(r,n){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){_t(r,n,l)}else a.current=null}function Qd(r,n,a){try{a()}catch(l){_t(r,n,l)}}var xh=!1;function n2(r,n){if(no=wa,r=Fs(),Aa(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,v=l.focusNode;l=l.focusOffset;try{a.nodeType,v.nodeType}catch{a=null;break e}var T=0,M=-1,L=-1,Q=0,oe=0,le=r,ie=null;t:for(;;){for(var we;le!==a||h!==0&&le.nodeType!==3||(M=T+h),le!==v||l!==0&&le.nodeType!==3||(L=T+l),le.nodeType===3&&(T+=le.nodeValue.length),(we=le.firstChild)!==null;)ie=le,le=we;for(;;){if(le===r)break t;if(ie===a&&++Q===h&&(M=T),ie===v&&++oe===l&&(L=T),(we=le.nextSibling)!==null)break;le=ie,ie=le.parentNode}le=we}a=M===-1||L===-1?null:{start:M,end:L}}else a=null}a=a||{start:0,end:0}}else a=null;for(io={focusedElem:r,selectionRange:a},wa=!1,xe=n;xe!==null;)if(n=xe,r=n.child,(n.subtreeFlags&1028)!==0&&r!==null)r.return=n,xe=r;else for(;xe!==null;){n=xe;try{var Se=n.alternate;if((n.flags&1024)!==0)switch(n.tag){case 0:case 11:case 15:break;case 1:if(Se!==null){var Ee=Se.memoizedProps,$t=Se.memoizedState,q=n.stateNode,W=q.getSnapshotBeforeUpdate(n.elementType===n.type?Ee:Br(n.type,Ee),$t);q.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var H=n.stateNode.containerInfo;H.nodeType===1?H.textContent="":H.nodeType===9&&H.documentElement&&H.removeChild(H.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(i(163))}}catch(de){_t(n,n.return,de)}if(r=n.sibling,r!==null){r.return=n.return,xe=r;break}xe=n.return}return Se=xh,xh=!1,Se}function $o(r,n,a){var l=n.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var h=l=l.next;do{if((h.tag&r)===r){var v=h.destroy;h.destroy=void 0,v!==void 0&&Qd(n,a,v)}h=h.next}while(h!==l)}}function Zu(r,n){if(n=n.updateQueue,n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&r)===r){var l=a.create;a.destroy=l()}a=a.next}while(a!==n)}}function Zd(r){var n=r.ref;if(n!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof n=="function"?n(r):n.current=r}}function bh(r){var n=r.alternate;n!==null&&(r.alternate=null,bh(n)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(n=r.stateNode,n!==null&&(delete n[br],delete n[Oi],delete n[uo],delete n[md],delete n[gd])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Sh(r){return r.tag===5||r.tag===3||r.tag===4}function kh(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Sh(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Yd(r,n,a){var l=r.tag;if(l===5||l===6)r=r.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(r,n):a.insertBefore(r,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(r,a)):(n=a,n.appendChild(r)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ja));else if(l!==4&&(r=r.child,r!==null))for(Yd(r,n,a),r=r.sibling;r!==null;)Yd(r,n,a),r=r.sibling}function Xd(r,n,a){var l=r.tag;if(l===5||l===6)r=r.stateNode,n?a.insertBefore(r,n):a.appendChild(r);else if(l!==4&&(r=r.child,r!==null))for(Xd(r,n,a),r=r.sibling;r!==null;)Xd(r,n,a),r=r.sibling}var Lt=null,Pr=!1;function ii(r,n,a){for(a=a.child;a!==null;)Eh(r,n,a),a=a.sibling}function Eh(r,n,a){if(xr&&typeof xr.onCommitFiberUnmount=="function")try{xr.onCommitFiberUnmount(ca,a)}catch{}switch(a.tag){case 5:Ht||Xa(a,n);case 6:var l=Lt,h=Pr;Lt=null,ii(r,n,a),Lt=l,Pr=h,Lt!==null&&(Pr?(r=Lt,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):Lt.removeChild(a.stateNode));break;case 18:Lt!==null&&(Pr?(r=Lt,a=a.stateNode,r.nodeType===8?oo(r.parentNode,a):r.nodeType===1&&oo(r,a),cn(r)):oo(Lt,a.stateNode));break;case 4:l=Lt,h=Pr,Lt=a.stateNode.containerInfo,Pr=!0,ii(r,n,a),Lt=l,Pr=h;break;case 0:case 11:case 14:case 15:if(!Ht&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){h=l=l.next;do{var v=h,T=v.destroy;v=v.tag,T!==void 0&&((v&2)!==0||(v&4)!==0)&&Qd(a,n,T),h=h.next}while(h!==l)}ii(r,n,a);break;case 1:if(!Ht&&(Xa(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(M){_t(a,n,M)}ii(r,n,a);break;case 21:ii(r,n,a);break;case 22:a.mode&1?(Ht=(l=Ht)||a.memoizedState!==null,ii(r,n,a),Ht=l):ii(r,n,a);break;default:ii(r,n,a)}}function Th(r){var n=r.updateQueue;if(n!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new r2),n.forEach(function(l){var h=p2.bind(null,r,l);a.has(l)||(a.add(l),l.then(h,h))})}}function Lr(r,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l];try{var v=r,T=n,M=T;e:for(;M!==null;){switch(M.tag){case 5:Lt=M.stateNode,Pr=!1;break e;case 3:Lt=M.stateNode.containerInfo,Pr=!0;break e;case 4:Lt=M.stateNode.containerInfo,Pr=!0;break e}M=M.return}if(Lt===null)throw Error(i(160));Eh(v,T,h),Lt=null,Pr=!1;var L=h.alternate;L!==null&&(L.return=null),h.return=null}catch(Q){_t(h,n,Q)}}if(n.subtreeFlags&12854)for(n=n.child;n!==null;)Ch(n,r),n=n.sibling}function Ch(r,n){var a=r.alternate,l=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Lr(n,r),an(r),l&4){try{$o(3,r,r.return),Zu(3,r)}catch(Ee){_t(r,r.return,Ee)}try{$o(5,r,r.return)}catch(Ee){_t(r,r.return,Ee)}}break;case 1:Lr(n,r),an(r),l&512&&a!==null&&Xa(a,a.return);break;case 5:if(Lr(n,r),an(r),l&512&&a!==null&&Xa(a,a.return),r.flags&32){var h=r.stateNode;try{yi(h,"")}catch(Ee){_t(r,r.return,Ee)}}if(l&4&&(h=r.stateNode,h!=null)){var v=r.memoizedProps,T=a!==null?a.memoizedProps:v,M=r.type,L=r.updateQueue;if(r.updateQueue=null,L!==null)try{M==="input"&&v.type==="radio"&&v.name!=null&&at(h,v),ps(M,T);var Q=ps(M,v);for(T=0;T<L.length;T+=2){var oe=L[T],le=L[T+1];oe==="style"?ds(h,le):oe==="dangerouslySetInnerHTML"?un(h,le):oe==="children"?yi(h,le):A(h,oe,le,Q)}switch(M){case"input":St(h,v);break;case"textarea":ur(h,v);break;case"select":var ie=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!v.multiple;var we=v.value;we!=null?Ge(h,!!v.multiple,we,!1):ie!==!!v.multiple&&(v.defaultValue!=null?Ge(h,!!v.multiple,v.defaultValue,!0):Ge(h,!!v.multiple,v.multiple?[]:"",!1))}h[Oi]=v}catch(Ee){_t(r,r.return,Ee)}}break;case 6:if(Lr(n,r),an(r),l&4){if(r.stateNode===null)throw Error(i(162));h=r.stateNode,v=r.memoizedProps;try{h.nodeValue=v}catch(Ee){_t(r,r.return,Ee)}}break;case 3:if(Lr(n,r),an(r),l&4&&a!==null&&a.memoizedState.isDehydrated)try{cn(n.containerInfo)}catch(Ee){_t(r,r.return,Ee)}break;case 4:Lr(n,r),an(r);break;case 13:Lr(n,r),an(r),h=r.child,h.flags&8192&&(v=h.memoizedState!==null,h.stateNode.isHidden=v,!v||h.alternate!==null&&h.alternate.memoizedState!==null||(tc=gt())),l&4&&Th(r);break;case 22:if(oe=a!==null&&a.memoizedState!==null,r.mode&1?(Ht=(Q=Ht)||oe,Lr(n,r),Ht=Q):Lr(n,r),an(r),l&8192){if(Q=r.memoizedState!==null,(r.stateNode.isHidden=Q)&&!oe&&(r.mode&1)!==0)for(xe=r,oe=r.child;oe!==null;){for(le=xe=oe;xe!==null;){switch(ie=xe,we=ie.child,ie.tag){case 0:case 11:case 14:case 15:$o(4,ie,ie.return);break;case 1:Xa(ie,ie.return);var Se=ie.stateNode;if(typeof Se.componentWillUnmount=="function"){l=ie,a=ie.return;try{n=l,Se.props=n.memoizedProps,Se.state=n.memoizedState,Se.componentWillUnmount()}catch(Ee){_t(l,a,Ee)}}break;case 5:Xa(ie,ie.return);break;case 22:if(ie.memoizedState!==null){Nh(le);continue}}we!==null?(we.return=ie,xe=we):Nh(le)}oe=oe.sibling}e:for(oe=null,le=r;;){if(le.tag===5){if(oe===null){oe=le;try{h=le.stateNode,Q?(v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none"):(M=le.stateNode,L=le.memoizedProps.style,T=L!=null&&L.hasOwnProperty("display")?L.display:null,M.style.display=ls("display",T))}catch(Ee){_t(r,r.return,Ee)}}}else if(le.tag===6){if(oe===null)try{le.stateNode.nodeValue=Q?"":le.memoizedProps}catch(Ee){_t(r,r.return,Ee)}}else if((le.tag!==22&&le.tag!==23||le.memoizedState===null||le===r)&&le.child!==null){le.child.return=le,le=le.child;continue}if(le===r)break e;for(;le.sibling===null;){if(le.return===null||le.return===r)break e;oe===le&&(oe=null),le=le.return}oe===le&&(oe=null),le.sibling.return=le.return,le=le.sibling}}break;case 19:Lr(n,r),an(r),l&4&&Th(r);break;case 21:break;default:Lr(n,r),an(r)}}function an(r){var n=r.flags;if(n&2){try{e:{for(var a=r.return;a!==null;){if(Sh(a)){var l=a;break e}a=a.return}throw Error(i(160))}switch(l.tag){case 5:var h=l.stateNode;l.flags&32&&(yi(h,""),l.flags&=-33);var v=kh(r);Xd(r,v,h);break;case 3:case 4:var T=l.stateNode.containerInfo,M=kh(r);Yd(r,M,T);break;default:throw Error(i(161))}}catch(L){_t(r,r.return,L)}r.flags&=-3}n&4096&&(r.flags&=-4097)}function i2(r,n,a){xe=r,Ih(r)}function Ih(r,n,a){for(var l=(r.mode&1)!==0;xe!==null;){var h=xe,v=h.child;if(h.tag===22&&l){var T=h.memoizedState!==null||Qu;if(!T){var M=h.alternate,L=M!==null&&M.memoizedState!==null||Ht;M=Qu;var Q=Ht;if(Qu=T,(Ht=L)&&!Q)for(xe=h;xe!==null;)T=xe,L=T.child,T.tag===22&&T.memoizedState!==null?Oh(h):L!==null?(L.return=T,xe=L):Oh(h);for(;v!==null;)xe=v,Ih(v),v=v.sibling;xe=h,Qu=M,Ht=Q}zh(r)}else(h.subtreeFlags&8772)!==0&&v!==null?(v.return=h,xe=v):zh(r)}}function zh(r){for(;xe!==null;){var n=xe;if((n.flags&8772)!==0){var a=n.alternate;try{if((n.flags&8772)!==0)switch(n.tag){case 0:case 11:case 15:Ht||Zu(5,n);break;case 1:var l=n.stateNode;if(n.flags&4&&!Ht)if(a===null)l.componentDidMount();else{var h=n.elementType===n.type?a.memoizedProps:Br(n.type,a.memoizedProps);l.componentDidUpdate(h,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var v=n.updateQueue;v!==null&&Nf(n,v,l);break;case 3:var T=n.updateQueue;if(T!==null){if(a=null,n.child!==null)switch(n.child.tag){case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}Nf(n,T,a)}break;case 5:var M=n.stateNode;if(a===null&&n.flags&4){a=M;var L=n.memoizedProps;switch(n.type){case"button":case"input":case"select":case"textarea":L.autoFocus&&a.focus();break;case"img":L.src&&(a.src=L.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(n.memoizedState===null){var Q=n.alternate;if(Q!==null){var oe=Q.memoizedState;if(oe!==null){var le=oe.dehydrated;le!==null&&cn(le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(i(163))}Ht||n.flags&512&&Zd(n)}catch(ie){_t(n,n.return,ie)}}if(n===r){xe=null;break}if(a=n.sibling,a!==null){a.return=n.return,xe=a;break}xe=n.return}}function Nh(r){for(;xe!==null;){var n=xe;if(n===r){xe=null;break}var a=n.sibling;if(a!==null){a.return=n.return,xe=a;break}xe=n.return}}function Oh(r){for(;xe!==null;){var n=xe;try{switch(n.tag){case 0:case 11:case 15:var a=n.return;try{Zu(4,n)}catch(L){_t(n,a,L)}break;case 1:var l=n.stateNode;if(typeof l.componentDidMount=="function"){var h=n.return;try{l.componentDidMount()}catch(L){_t(n,h,L)}}var v=n.return;try{Zd(n)}catch(L){_t(n,v,L)}break;case 5:var T=n.return;try{Zd(n)}catch(L){_t(n,T,L)}}}catch(L){_t(n,n.return,L)}if(n===r){xe=null;break}var M=n.sibling;if(M!==null){M.return=n.return,xe=M;break}xe=n.return}}var a2=Math.ceil,Yu=D.ReactCurrentDispatcher,Jd=D.ReactCurrentOwner,Er=D.ReactCurrentBatchConfig,Je=0,Nt=null,bt=null,Ut=0,fr=0,Ja=en(0),Et=0,xo=null,Bi=0,Xu=0,ec=0,bo=null,ir=null,tc=0,es=1/0,bn=null,Ju=!1,rc=null,ai=null,el=!1,si=null,tl=0,So=0,nc=null,rl=-1,nl=0;function Xt(){return(Je&6)!==0?gt():rl!==-1?rl:rl=gt()}function oi(r){return(r.mode&1)===0?1:(Je&2)!==0&&Ut!==0?Ut&-Ut:W_.transition!==null?(nl===0&&(nl=Jo()),nl):(r=Ze,r!==0||(r=window.event,r=r===void 0?16:ou(r.type)),r)}function Ur(r,n,a,l){if(50<So)throw So=0,nc=null,Error(i(185));$i(r,a,l),((Je&2)===0||r!==Nt)&&(r===Nt&&((Je&2)===0&&(Xu|=a),Et===4&&ui(r,Ut)),ar(r,l),a===1&&Je===0&&(n.mode&1)===0&&(es=gt()+500,qa&&p()))}function ar(r,n){var a=r.callbackNode;Kl(r,n);var l=fa(r,r===Nt?Ut:0);if(l===0)a!==null&&$r(a),r.callbackNode=null,r.callbackPriority=0;else if(n=l&-l,r.callbackPriority!==n){if(a!=null&&$r(a),n===1)r.tag===0?Au(Rh.bind(null,r)):co(Rh.bind(null,r)),fd(function(){(Je&6)===0&&p()}),a=null;else{switch(eu(l)){case 1:a=zr;break;case 4:a=la;break;case 16:a=Bt;break;case 536870912:a=da;break;default:a=Bt}a=Wh(a,Ah.bind(null,r))}r.callbackPriority=n,r.callbackNode=a}}function Ah(r,n){if(rl=-1,nl=0,(Je&6)!==0)throw Error(i(327));var a=r.callbackNode;if(ts()&&r.callbackNode!==a)return null;var l=fa(r,r===Nt?Ut:0);if(l===0)return null;if((l&30)!==0||(l&r.expiredLanes)!==0||n)n=il(r,l);else{n=l;var h=Je;Je|=2;var v=Mh();(Nt!==r||Ut!==n)&&(bn=null,es=gt()+500,Li(r,n));do try{u2();break}catch(M){Dh(r,M)}while(!0);$d(),Yu.current=v,Je=h,bt!==null?n=0:(Nt=null,Ut=0,n=Et)}if(n!==0){if(n===2&&(h=$s(r),h!==0&&(l=h,n=ic(r,h))),n===1)throw a=xo,Li(r,0),ui(r,l),ar(r,gt()),a;if(n===6)ui(r,l);else{if(h=r.current.alternate,(l&30)===0&&!s2(h)&&(n=il(r,l),n===2&&(v=$s(r),v!==0&&(l=v,n=ic(r,v))),n===1))throw a=xo,Li(r,0),ui(r,l),ar(r,gt()),a;switch(r.finishedWork=h,r.finishedLanes=l,n){case 0:case 1:throw Error(i(345));case 2:Ui(r,ir,bn);break;case 3:if(ui(r,l),(l&130023424)===l&&(n=tc+500-gt(),10<n)){if(fa(r,0)!==0)break;if(h=r.suspendedLanes,(h&l)!==l){Xt(),r.pingedLanes|=r.suspendedLanes&h;break}r.timeoutHandle=so(Ui.bind(null,r,ir,bn),n);break}Ui(r,ir,bn);break;case 4:if(ui(r,l),(l&4194240)===l)break;for(n=r.eventTimes,h=-1;0<l;){var T=31-dr(l);v=1<<T,T=n[T],T>h&&(h=T),l&=~v}if(l=h,l=gt()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*a2(l/1960))-l,10<l){r.timeoutHandle=so(Ui.bind(null,r,ir,bn),l);break}Ui(r,ir,bn);break;case 5:Ui(r,ir,bn);break;default:throw Error(i(329))}}}return ar(r,gt()),r.callbackNode===a?Ah.bind(null,r):null}function ic(r,n){var a=bo;return r.current.memoizedState.isDehydrated&&(Li(r,n).flags|=256),r=il(r,n),r!==2&&(n=ir,ir=a,n!==null&&ac(n)),r}function ac(r){ir===null?ir=r:ir.push.apply(ir,r)}function s2(r){for(var n=r;;){if(n.flags&16384){var a=n.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var h=a[l],v=h.getSnapshot;h=h.value;try{if(!rr(v(),h))return!1}catch{return!1}}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===r)break;for(;n.sibling===null;){if(n.return===null||n.return===r)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ui(r,n){for(n&=~ec,n&=~Xu,r.suspendedLanes|=n,r.pingedLanes&=~n,r=r.expirationTimes;0<n;){var a=31-dr(n),l=1<<a;r[a]=-1,n&=~l}}function Rh(r){if((Je&6)!==0)throw Error(i(327));ts();var n=fa(r,0);if((n&1)===0)return ar(r,gt()),null;var a=il(r,n);if(r.tag!==0&&a===2){var l=$s(r);l!==0&&(n=l,a=ic(r,l))}if(a===1)throw a=xo,Li(r,0),ui(r,n),ar(r,gt()),a;if(a===6)throw Error(i(345));return r.finishedWork=r.current.alternate,r.finishedLanes=n,Ui(r,ir,bn),ar(r,gt()),null}function sc(r,n){var a=Je;Je|=1;try{return r(n)}finally{Je=a,Je===0&&(es=gt()+500,qa&&p())}}function Pi(r){si!==null&&si.tag===0&&(Je&6)===0&&ts();var n=Je;Je|=1;var a=Er.transition,l=Ze;try{if(Er.transition=null,Ze=1,r)return r()}finally{Ze=l,Er.transition=a,Je=n,(Je&6)===0&&p()}}function oc(){fr=Ja.current,ut(Ja)}function Li(r,n){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,pd(a)),bt!==null)for(a=bt.return;a!==null;){var l=a;switch(nt(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Va();break;case 3:Za(),ut(Wt),ut(It),Id();break;case 5:Td(l);break;case 4:Za();break;case 13:ut(yt);break;case 19:ut(yt);break;case 10:xd(l.type._context);break;case 22:case 23:oc()}a=a.return}if(Nt=r,bt=r=li(r.current,null),Ut=fr=n,Et=0,xo=null,ec=Xu=Bi=0,ir=bo=null,Ri!==null){for(n=0;n<Ri.length;n++)if(a=Ri[n],l=a.interleaved,l!==null){a.interleaved=null;var h=l.next,v=a.pending;if(v!==null){var T=v.next;v.next=h,l.next=T}a.pending=l}Ri=null}return r}function Dh(r,n){do{var a=bt;try{if($d(),ju.current=qu,Wu){for(var l=vt.memoizedState;l!==null;){var h=l.queue;h!==null&&(h.pending=null),l=l.next}Wu=!1}if(Mi=0,zt=kt=vt=null,go=!1,yo=0,Jd.current=null,a===null||a.return===null){Et=1,xo=n,bt=null;break}e:{var v=r,T=a.return,M=a,L=n;if(n=Ut,M.flags|=32768,L!==null&&typeof L=="object"&&typeof L.then=="function"){var Q=L,oe=M,le=oe.tag;if((oe.mode&1)===0&&(le===0||le===11||le===15)){var ie=oe.alternate;ie?(oe.updateQueue=ie.updateQueue,oe.memoizedState=ie.memoizedState,oe.lanes=ie.lanes):(oe.updateQueue=null,oe.memoizedState=null)}var we=sh(T);if(we!==null){we.flags&=-257,oh(we,T,M,v,n),we.mode&1&&ah(v,Q,n),n=we,L=Q;var Se=n.updateQueue;if(Se===null){var Ee=new Set;Ee.add(L),n.updateQueue=Ee}else Se.add(L);break e}else{if((n&1)===0){ah(v,Q,n),uc();break e}L=Error(i(426))}}else if(lt&&M.mode&1){var $t=sh(T);if($t!==null){($t.flags&65536)===0&&($t.flags|=256),oh($t,T,M,v,n),wd(Ya(L,M));break e}}v=L=Ya(L,M),Et!==4&&(Et=2),bo===null?bo=[v]:bo.push(v),v=T;do{switch(v.tag){case 3:v.flags|=65536,n&=-n,v.lanes|=n;var q=nh(v,L,n);zf(v,q);break e;case 1:M=L;var W=v.type,H=v.stateNode;if((v.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||H!==null&&typeof H.componentDidCatch=="function"&&(ai===null||!ai.has(H)))){v.flags|=65536,n&=-n,v.lanes|=n;var de=ih(v,M,n);zf(v,de);break e}}v=v.return}while(v!==null)}Ph(a)}catch(Ce){n=Ce,bt===a&&a!==null&&(bt=a=a.return);continue}break}while(!0)}function Mh(){var r=Yu.current;return Yu.current=qu,r===null?qu:r}function uc(){(Et===0||Et===3||Et===2)&&(Et=4),Nt===null||(Bi&268435455)===0&&(Xu&268435455)===0||ui(Nt,Ut)}function il(r,n){var a=Je;Je|=2;var l=Mh();(Nt!==r||Ut!==n)&&(bn=null,Li(r,n));do try{o2();break}catch(h){Dh(r,h)}while(!0);if($d(),Je=a,Yu.current=l,bt!==null)throw Error(i(261));return Nt=null,Ut=0,Et}function o2(){for(;bt!==null;)Bh(bt)}function u2(){for(;bt!==null&&!Yo();)Bh(bt)}function Bh(r){var n=jh(r.alternate,r,fr);r.memoizedProps=r.pendingProps,n===null?Ph(r):bt=n,Jd.current=null}function Ph(r){var n=r;do{var a=n.alternate;if(r=n.return,(n.flags&32768)===0){if(a=e2(a,n,fr),a!==null){bt=a;return}}else{if(a=t2(a,n),a!==null){a.flags&=32767,bt=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Et=6,bt=null;return}}if(n=n.sibling,n!==null){bt=n;return}bt=n=r}while(n!==null);Et===0&&(Et=5)}function Ui(r,n,a){var l=Ze,h=Er.transition;try{Er.transition=null,Ze=1,l2(r,n,a,l)}finally{Er.transition=h,Ze=l}return null}function l2(r,n,a,l){do ts();while(si!==null);if((Je&6)!==0)throw Error(i(327));a=r.finishedWork;var h=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(i(177));r.callbackNode=null,r.callbackPriority=0;var v=a.lanes|a.childLanes;if(Ql(r,v),r===Nt&&(bt=Nt=null,Ut=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||el||(el=!0,Wh(Bt,function(){return ts(),null})),v=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||v){v=Er.transition,Er.transition=null;var T=Ze;Ze=1;var M=Je;Je|=4,Jd.current=null,n2(r,a),Ch(a,r),$u(io),wa=!!no,io=no=null,r.current=a,i2(a),Vl(),Je=M,Ze=T,Er.transition=v}else r.current=a;if(el&&(el=!1,si=r,tl=h),v=r.pendingLanes,v===0&&(ai=null),Fl(a.stateNode),ar(r,gt()),n!==null)for(l=r.onRecoverableError,a=0;a<n.length;a++)h=n[a],l(h.value,{componentStack:h.stack,digest:h.digest});if(Ju)throw Ju=!1,r=rc,rc=null,r;return(tl&1)!==0&&r.tag!==0&&ts(),v=r.pendingLanes,(v&1)!==0?r===nc?So++:(So=0,nc=r):So=0,p(),null}function ts(){if(si!==null){var r=eu(tl),n=Er.transition,a=Ze;try{if(Er.transition=null,Ze=16>r?16:r,si===null)var l=!1;else{if(r=si,si=null,tl=0,(Je&6)!==0)throw Error(i(331));var h=Je;for(Je|=4,xe=r.current;xe!==null;){var v=xe,T=v.child;if((xe.flags&16)!==0){var M=v.deletions;if(M!==null){for(var L=0;L<M.length;L++){var Q=M[L];for(xe=Q;xe!==null;){var oe=xe;switch(oe.tag){case 0:case 11:case 15:$o(8,oe,v)}var le=oe.child;if(le!==null)le.return=oe,xe=le;else for(;xe!==null;){oe=xe;var ie=oe.sibling,we=oe.return;if(bh(oe),oe===Q){xe=null;break}if(ie!==null){ie.return=we,xe=ie;break}xe=we}}}var Se=v.alternate;if(Se!==null){var Ee=Se.child;if(Ee!==null){Se.child=null;do{var $t=Ee.sibling;Ee.sibling=null,Ee=$t}while(Ee!==null)}}xe=v}}if((v.subtreeFlags&2064)!==0&&T!==null)T.return=v,xe=T;else e:for(;xe!==null;){if(v=xe,(v.flags&2048)!==0)switch(v.tag){case 0:case 11:case 15:$o(9,v,v.return)}var q=v.sibling;if(q!==null){q.return=v.return,xe=q;break e}xe=v.return}}var W=r.current;for(xe=W;xe!==null;){T=xe;var H=T.child;if((T.subtreeFlags&2064)!==0&&H!==null)H.return=T,xe=H;else e:for(T=W;xe!==null;){if(M=xe,(M.flags&2048)!==0)try{switch(M.tag){case 0:case 11:case 15:Zu(9,M)}}catch(Ce){_t(M,M.return,Ce)}if(M===T){xe=null;break e}var de=M.sibling;if(de!==null){de.return=M.return,xe=de;break e}xe=M.return}}if(Je=h,p(),xr&&typeof xr.onPostCommitFiberRoot=="function")try{xr.onPostCommitFiberRoot(ca,r)}catch{}l=!0}return l}finally{Ze=a,Er.transition=n}}return!1}function Lh(r,n,a){n=Ya(a,n),n=nh(r,n,1),r=ni(r,n,1),n=Xt(),r!==null&&($i(r,1,n),ar(r,n))}function _t(r,n,a){if(r.tag===3)Lh(r,r,a);else for(;n!==null;){if(n.tag===3){Lh(n,r,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ai===null||!ai.has(l))){r=Ya(a,r),r=ih(n,r,1),n=ni(n,r,1),r=Xt(),n!==null&&($i(n,1,r),ar(n,r));break}}n=n.return}}function d2(r,n,a){var l=r.pingCache;l!==null&&l.delete(n),n=Xt(),r.pingedLanes|=r.suspendedLanes&a,Nt===r&&(Ut&a)===a&&(Et===4||Et===3&&(Ut&130023424)===Ut&&500>gt()-tc?Li(r,0):ec|=a),ar(r,n)}function Uh(r,n){n===0&&((r.mode&1)===0?n=1:(n=pa,pa<<=1,(pa&130023424)===0&&(pa=4194304)));var a=Xt();r=_n(r,n),r!==null&&($i(r,n,a),ar(r,a))}function c2(r){var n=r.memoizedState,a=0;n!==null&&(a=n.retryLane),Uh(r,a)}function p2(r,n){var a=0;switch(r.tag){case 13:var l=r.stateNode,h=r.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=r.stateNode;break;default:throw Error(i(314))}l!==null&&l.delete(n),Uh(r,a)}var jh;jh=function(r,n,a){if(r!==null)if(r.memoizedProps!==n.pendingProps||Wt.current)nr=!0;else{if((r.lanes&a)===0&&(n.flags&128)===0)return nr=!1,J_(r,n,a);nr=(r.flags&131072)!==0}else nr=!1,lt&&(n.flags&1048576)!==0&&Fe(n,z,n.index);switch(n.lanes=0,n.tag){case 2:var l=n.type;Ku(r,n),r=n.pendingProps;var h=ei(n,It.current);Qa(n,a),h=Od(null,n,l,r,h,a);var v=Ad();return n.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(n.tag=1,n.memoizedState=null,n.updateQueue=null,Vt(l)?(v=!0,Fa(n)):v=!1,n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,kd(n),h.updater=Hu,n.stateNode=h,h._reactInternals=n,Ld(n,l,r,a),n=Vd(null,n,l,!0,v,a)):(n.tag=0,lt&&v&&Xe(n),Yt(null,n,h,a),n=n.child),n;case 16:l=n.elementType;e:{switch(Ku(r,n),r=n.pendingProps,h=l._init,l=h(l._payload),n.type=l,h=n.tag=h2(l),r=Br(l,r),h){case 0:n=Wd(null,n,l,r,a);break e;case 1:n=fh(null,n,l,r,a);break e;case 11:n=uh(null,n,l,r,a);break e;case 14:n=lh(null,n,l,Br(l.type,r),a);break e}throw Error(i(306,l,""))}return n;case 0:return l=n.type,h=n.pendingProps,h=n.elementType===l?h:Br(l,h),Wd(r,n,l,h,a);case 1:return l=n.type,h=n.pendingProps,h=n.elementType===l?h:Br(l,h),fh(r,n,l,h,a);case 3:e:{if(hh(n),r===null)throw Error(i(387));l=n.pendingProps,v=n.memoizedState,h=v.element,If(r,n),Lu(n,l,null,a);var T=n.memoizedState;if(l=T.element,v.isDehydrated)if(v={element:l,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},n.updateQueue.baseState=v,n.memoizedState=v,n.flags&256){h=Ya(Error(i(423)),n),n=mh(r,n,l,a,h);break e}else if(l!==h){h=Ya(Error(i(424)),n),n=mh(r,n,l,a,h);break e}else for(Pt=Jr(n.stateNode.containerInfo.firstChild),wt=n,lt=!0,Zt=null,a=Tf(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ha(),l===h){n=xn(r,n,a);break e}Yt(r,n,l,a)}n=n.child}return n;case 5:return Of(n),r===null&&vd(n),l=n.type,h=n.pendingProps,v=r!==null?r.memoizedProps:null,T=h.children,ao(l,h)?T=null:v!==null&&ao(l,v)&&(n.flags|=32),ph(r,n),Yt(r,n,T,a),n.child;case 6:return r===null&&vd(n),null;case 13:return gh(r,n,a);case 4:return Ed(n,n.stateNode.containerInfo),l=n.pendingProps,r===null?n.child=Ga(n,null,l,a):Yt(r,n,l,a),n.child;case 11:return l=n.type,h=n.pendingProps,h=n.elementType===l?h:Br(l,h),uh(r,n,l,h,a);case 7:return Yt(r,n,n.pendingProps,a),n.child;case 8:return Yt(r,n,n.pendingProps.children,a),n.child;case 12:return Yt(r,n,n.pendingProps.children,a),n.child;case 10:e:{if(l=n.type._context,h=n.pendingProps,v=n.memoizedProps,T=h.value,ot(Mu,l._currentValue),l._currentValue=T,v!==null)if(rr(v.value,T)){if(v.children===h.children&&!Wt.current){n=xn(r,n,a);break e}}else for(v=n.child,v!==null&&(v.return=n);v!==null;){var M=v.dependencies;if(M!==null){T=v.child;for(var L=M.firstContext;L!==null;){if(L.context===l){if(v.tag===1){L=$n(-1,a&-a),L.tag=2;var Q=v.updateQueue;if(Q!==null){Q=Q.shared;var oe=Q.pending;oe===null?L.next=L:(L.next=oe.next,oe.next=L),Q.pending=L}}v.lanes|=a,L=v.alternate,L!==null&&(L.lanes|=a),bd(v.return,a,n),M.lanes|=a;break}L=L.next}}else if(v.tag===10)T=v.type===n.type?null:v.child;else if(v.tag===18){if(T=v.return,T===null)throw Error(i(341));T.lanes|=a,M=T.alternate,M!==null&&(M.lanes|=a),bd(T,a,n),T=v.sibling}else T=v.child;if(T!==null)T.return=v;else for(T=v;T!==null;){if(T===n){T=null;break}if(v=T.sibling,v!==null){v.return=T.return,T=v;break}T=T.return}v=T}Yt(r,n,h.children,a),n=n.child}return n;case 9:return h=n.type,l=n.pendingProps.children,Qa(n,a),h=Sr(h),l=l(h),n.flags|=1,Yt(r,n,l,a),n.child;case 14:return l=n.type,h=Br(l,n.pendingProps),h=Br(l.type,h),lh(r,n,l,h,a);case 15:return dh(r,n,n.type,n.pendingProps,a);case 17:return l=n.type,h=n.pendingProps,h=n.elementType===l?h:Br(l,h),Ku(r,n),n.tag=1,Vt(l)?(r=!0,Fa(n)):r=!1,Qa(n,a),th(n,l,h),Ld(n,l,h,a),Vd(null,n,l,!0,r,a);case 19:return vh(r,n,a);case 22:return ch(r,n,a)}throw Error(i(156,n.tag))};function Wh(r,n){return ln(r,n)}function f2(r,n,a,l){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tr(r,n,a,l){return new f2(r,n,a,l)}function lc(r){return r=r.prototype,!(!r||!r.isReactComponent)}function h2(r){if(typeof r=="function")return lc(r)?1:0;if(r!=null){if(r=r.$$typeof,r===ce)return 11;if(r===me)return 14}return 2}function li(r,n){var a=r.alternate;return a===null?(a=Tr(r.tag,n,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=n,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,n=r.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function al(r,n,a,l,h,v){var T=2;if(l=r,typeof r=="function")lc(r)&&(T=1);else if(typeof r=="string")T=5;else e:switch(r){case V:return ji(a.children,h,v,n);case I:T=8,h|=8;break;case Y:return r=Tr(12,a,n,h|2),r.elementType=Y,r.lanes=v,r;case pe:return r=Tr(13,a,n,h),r.elementType=pe,r.lanes=v,r;case G:return r=Tr(19,a,n,h),r.elementType=G,r.lanes=v,r;case ge:return sl(a,h,v,n);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case te:T=10;break e;case he:T=9;break e;case ce:T=11;break e;case me:T=14;break e;case ye:T=16,l=null;break e}throw Error(i(130,r==null?r:typeof r,""))}return n=Tr(T,a,n,h),n.elementType=r,n.type=l,n.lanes=v,n}function ji(r,n,a,l){return r=Tr(7,r,l,n),r.lanes=a,r}function sl(r,n,a,l){return r=Tr(22,r,l,n),r.elementType=ge,r.lanes=a,r.stateNode={isHidden:!1},r}function dc(r,n,a){return r=Tr(6,r,null,n),r.lanes=a,r}function cc(r,n,a){return n=Tr(4,r.children!==null?r.children:[],r.key,n),n.lanes=a,n.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},n}function m2(r,n,a,l,h){this.tag=n,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=xs(0),this.expirationTimes=xs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=xs(0),this.identifierPrefix=l,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function pc(r,n,a,l,h,v,T,M,L){return r=new m2(r,n,a,M,L),n===1?(n=1,v===!0&&(n|=8)):n=0,v=Tr(3,null,null,n),r.current=v,v.stateNode=r,v.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},kd(v),r}function g2(r,n,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:l==null?null:""+l,children:r,containerInfo:n,implementation:a}}function Vh(r){if(!r)return tn;r=r._reactInternals;e:{if(Kr(r)!==r||r.tag!==1)throw Error(i(170));var n=r;do{switch(n.tag){case 3:n=n.stateNode.context;break e;case 1:if(Vt(n.type)){n=n.stateNode.__reactInternalMemoizedMergedChildContext;break e}}n=n.return}while(n!==null);throw Error(i(171))}if(r.tag===1){var a=r.type;if(Vt(a))return Nu(r,a,n)}return n}function Fh(r,n,a,l,h,v,T,M,L){return r=pc(a,l,!0,r,h,v,T,M,L),r.context=Vh(null),a=r.current,l=Xt(),h=oi(a),v=$n(l,h),v.callback=n??null,ni(a,v,h),r.current.lanes=h,$i(r,h,l),ar(r,l),r}function ol(r,n,a,l){var h=n.current,v=Xt(),T=oi(h);return a=Vh(a),n.context===null?n.context=a:n.pendingContext=a,n=$n(v,T),n.payload={element:r},l=l===void 0?null:l,l!==null&&(n.callback=l),r=ni(h,n,T),r!==null&&(Ur(r,h,T,v),Pu(r,h,T)),T}function ul(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function qh(r,n){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<n?a:n}}function fc(r,n){qh(r,n),(r=r.alternate)&&qh(r,n)}function y2(){return null}var Hh=typeof reportError=="function"?reportError:function(r){console.error(r)};function hc(r){this._internalRoot=r}ll.prototype.render=hc.prototype.render=function(r){var n=this._internalRoot;if(n===null)throw Error(i(409));ol(r,n,null,null)},ll.prototype.unmount=hc.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var n=r.containerInfo;Pi(function(){ol(null,r,null,null)}),n[Dr]=null}};function ll(r){this._internalRoot=r}ll.prototype.unstable_scheduleHydration=function(r){if(r){var n=ma();r={blockedOn:null,target:r,priority:n};for(var a=0;a<Nr.length&&n!==0&&n<Nr[a].priority;a++);Nr.splice(a,0,r),a===0&&iu(r)}};function mc(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function dl(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Gh(){}function v2(r,n,a,l,h){if(h){if(typeof l=="function"){var v=l;l=function(){var Q=ul(T);v.call(Q)}}var T=Fh(n,l,r,0,null,!1,!1,"",Gh);return r._reactRootContainer=T,r[Dr]=T.current,Kn(r.nodeType===8?r.parentNode:r),Pi(),T}for(;h=r.lastChild;)r.removeChild(h);if(typeof l=="function"){var M=l;l=function(){var Q=ul(L);M.call(Q)}}var L=pc(r,0,!1,null,null,!1,!1,"",Gh);return r._reactRootContainer=L,r[Dr]=L.current,Kn(r.nodeType===8?r.parentNode:r),Pi(function(){ol(n,L,a,l)}),L}function cl(r,n,a,l,h){var v=a._reactRootContainer;if(v){var T=v;if(typeof h=="function"){var M=h;h=function(){var L=ul(T);M.call(L)}}ol(n,T,r,h)}else T=v2(a,n,r,h,l);return ul(T)}ha=function(r){switch(r.tag){case 3:var n=r.stateNode;if(n.current.memoizedState.isDehydrated){var a=Dn(n.pendingLanes);a!==0&&(bs(n,a|1),ar(n,gt()),(Je&6)===0&&(es=gt()+500,p()))}break;case 13:Pi(function(){var l=_n(r,1);if(l!==null){var h=Xt();Ur(l,r,1,h)}}),fc(r,1)}},Mn=function(r){if(r.tag===13){var n=_n(r,134217728);if(n!==null){var a=Xt();Ur(n,r,134217728,a)}fc(r,134217728)}},tu=function(r){if(r.tag===13){var n=oi(r),a=_n(r,n);if(a!==null){var l=Xt();Ur(a,r,n,l)}fc(r,n)}},ma=function(){return Ze},ru=function(r,n){var a=Ze;try{return Ze=r,n()}finally{Ze=a}},ms=function(r,n,a){switch(n){case"input":if(St(r,a),n=a.name,a.type==="radio"&&n!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+n)+'][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==r&&l.form===r.form){var h=Wa(l);if(!h)throw Error(i(90));Dt(l),St(l,h)}}}break;case"textarea":ur(r,a);break;case"select":n=a.value,n!=null&&Ge(r,!!a.multiple,n,!1)}},vs=sc,ws=Pi;var w2={usingClientEntryPoint:!1,Events:[Ai,Xn,Wa,ys,qo,sc]},ko={findFiberByHostInstance:vn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},_2={bundleType:ko.bundleType,version:ko.version,rendererPackageName:ko.rendererPackageName,rendererConfig:ko.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:D.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=oa(r),r===null?null:r.stateNode},findFiberByHostInstance:ko.findFiberByHostInstance||y2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pl.isDisabled&&pl.supportsFiber)try{ca=pl.inject(_2),xr=pl}catch{}}return sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=w2,sr.createPortal=function(r,n){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mc(n))throw Error(i(200));return g2(r,n,null,a)},sr.createRoot=function(r,n){if(!mc(r))throw Error(i(299));var a=!1,l="",h=Hh;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(h=n.onRecoverableError)),n=pc(r,1,!1,null,null,a,!1,l,h),r[Dr]=n.current,Kn(r.nodeType===8?r.parentNode:r),new hc(n)},sr.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var n=r._reactInternals;if(n===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=oa(n),r=r===null?null:r.stateNode,r},sr.flushSync=function(r){return Pi(r)},sr.hydrate=function(r,n,a){if(!dl(n))throw Error(i(200));return cl(null,r,n,!0,a)},sr.hydrateRoot=function(r,n,a){if(!mc(r))throw Error(i(405));var l=a!=null&&a.hydratedSources||null,h=!1,v="",T=Hh;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(v=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),n=Fh(n,null,r,1,a??null,h,!1,v,T),r[Dr]=n.current,Kn(r),l)for(r=0;r<l.length;r++)a=l[r],h=a._getVersion,h=h(a._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[a,h]:n.mutableSourceEagerHydrationData.push(a,h);return new ll(n)},sr.render=function(r,n,a){if(!dl(n))throw Error(i(200));return cl(null,r,n,!1,a)},sr.unmountComponentAtNode=function(r){if(!dl(r))throw Error(i(40));return r._reactRootContainer?(Pi(function(){cl(null,null,r,!1,function(){r._reactRootContainer=null,r[Dr]=null})}),!0):!1},sr.unstable_batchedUpdates=sc,sr.unstable_renderSubtreeIntoContainer=function(r,n,a,l){if(!dl(a))throw Error(i(200));if(r==null||r._reactInternals===void 0)throw Error(i(38));return cl(r,n,a,!1,l)},sr.version="18.3.1-next-f1338f8080-20240426",sr}var rm;function O2(){if(rm)return vc.exports;rm=1;function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}return e(),vc.exports=N2(),vc.exports}var nm;function A2(){if(nm)return fl;nm=1;var e=O2();return fl.createRoot=e.createRoot,fl.hydrateRoot=e.hydrateRoot,fl}var R2=A2();function D2({mode:e,setMode:t,challengeNumber:i,streak:s,onOpenHelp:o,onOpenStats:u,onJumpToContext:d}){return U.jsx("header",{className:"app-header",children:U.jsxs("div",{className:"header-inner",children:[U.jsxs("div",{className:"brand-group",children:[U.jsxs("div",{className:"brand-logo","aria-hidden":"true",children:[U.jsx("span",{className:"dot dot-top"}),U.jsx("span",{className:"dot dot-left"}),U.jsx("span",{className:"dot dot-right"})]}),U.jsx("div",{children:U.jsxs("div",{className:"brand-title-row",children:[U.jsx("h1",{className:"brand-title",children:"PYRAMIDLE"}),U.jsxs("span",{className:"daily-badge",children:["#",i]})]})})]}),U.jsxs("nav",{className:"mode-tabs","aria-label":"Modo de jogo",children:[U.jsx("button",{type:"button",className:`mode-tab ${e==="daily"?"active":""}`,onClick:()=>t("daily"),children:"Desafio Diário"}),U.jsx("button",{type:"button",className:`mode-tab ${e==="free"?"active":""}`,onClick:()=>t("free"),children:"Modo Livre"})]}),U.jsxs("div",{className:"header-actions",children:[U.jsx("button",{type:"button",className:"text-link-btn",onClick:d,title:"Ver explicação técnica em slides",children:"Como Funciona"}),U.jsxs("div",{className:"streak-pill",title:"Sequência de dias seguidos",children:[U.jsx("span",{className:"streak-label",children:"Sequência"}),U.jsx("strong",{children:s})]}),U.jsx("button",{type:"button",className:"icon-btn",onClick:u,title:"Estatísticas","aria-label":"Estatísticas",children:"Stats"}),U.jsx("button",{type:"button",className:"icon-btn",onClick:o,title:"Regras do jogo","aria-label":"Regras",children:"Regras"})]})]})})}function M2({geometry:e,state:t,onBallClick:i,lastAiAction:s,solving:o,solved:u,showRadiusPreview:d}){const[c,f]=et.useState(()=>{const N=new URLSearchParams(window.location.search);return N.has("hover")?Number(N.get("hover")):null}),{balls:m,adjMatrix:y,radius:w,width:$,height:S}=e,b=new Set;c!==null&&y[c]&&y[c].forEach((N,k)=>{N===1&&b.add(k)});const C=c!==null?m[c]:null;return U.jsxs("div",{className:`board-card ${u?"board-solved":""}`,children:[U.jsxs("div",{className:"board-top-bar",children:[U.jsxs("div",{className:"legend-row",children:[U.jsxs("span",{className:"legend-item",children:[U.jsx("span",{className:"legend-ball white"})," Branca"]}),U.jsxs("span",{className:"legend-item",children:[U.jsx("span",{className:"legend-ball black"})," Preta (Alvo)"]}),s!==null&&U.jsxs("span",{className:"legend-item ai-legend",children:[U.jsx("span",{className:"legend-ball ai-ring"})," Passo Automático"]})]}),u&&U.jsx("span",{className:"solved-inline-tag",children:"Pirâmide Concluída"})]}),U.jsx("div",{className:"svg-wrapper",children:U.jsxs("svg",{viewBox:`0 0 ${$} ${S}`,className:"pyramid-svg",onMouseLeave:()=>f(null),children:[U.jsxs("defs",{children:[U.jsxs("radialGradient",{id:"ballBlackGrad",cx:"35%",cy:"30%",r:"70%",children:[U.jsx("stop",{offset:"0%",stopColor:"#475569"}),U.jsx("stop",{offset:"55%",stopColor:"#0f172a"}),U.jsx("stop",{offset:"100%",stopColor:"#020617"})]}),U.jsxs("radialGradient",{id:"ballWhiteGrad",cx:"35%",cy:"30%",r:"70%",children:[U.jsx("stop",{offset:"0%",stopColor:"#ffffff"}),U.jsx("stop",{offset:"65%",stopColor:"#e2e8f0"}),U.jsx("stop",{offset:"100%",stopColor:"#94a3b8"})]}),U.jsxs("filter",{id:"aiGlow",x:"-30%",y:"-30%",width:"160%",height:"160%",children:[U.jsx("feGaussianBlur",{stdDeviation:"5",result:"blur"}),U.jsxs("feMerge",{children:[U.jsx("feMergeNode",{in:"blur"}),U.jsx("feMergeNode",{in:"SourceGraphic"})]})]})]}),d&&C&&!o&&U.jsx("circle",{cx:C.x,cy:C.y,r:w*3,className:"radius-preview-circle"}),m.map(N=>{const k=t[N.index]===1,E=b.has(N.index),A=s===N.index;return U.jsxs("g",{className:`ball-group ${o?"disabled":""}`,onMouseEnter:()=>f(N.index),onClick:()=>!o&&i(N.index),children:[d&&E&&!o&&U.jsx("circle",{cx:N.x,cy:N.y,r:N.radius+4,className:"affected-halo"}),U.jsx("circle",{cx:N.x,cy:N.y,r:N.radius-2,fill:k?"url(#ballBlackGrad)":"url(#ballWhiteGrad)",stroke:k?"#38bdf8":"#cbd5e1",strokeWidth:k?"2.2":"1.5",className:"ball-circle"}),A&&U.jsx("circle",{cx:N.x,cy:N.y,r:N.radius+2,fill:"none",stroke:"#22c55e",strokeWidth:"4.5",filter:"url(#aiGlow)"})]},N.index)})]})})]})}function B2({mode:e,numBalls:t,onChangeNumBalls:i,clicks:s,maxClicks:o,aiPar:u,blackCount:d,totalBalls:c,solving:f,solved:m,canUseAi:y,onToggleSolve:w,onReset:$,onNewRandomBoard:S,showRadiusPreview:b,setShowRadiusPreview:C}){const N=Math.round(d/c*100);return U.jsxs("section",{className:"controls-panel",children:[U.jsxs("div",{className:"metrics-grid",children:[U.jsxs("div",{className:"metric-box",children:[U.jsx("span",{className:"metric-label",children:"Cliques"}),U.jsxs("strong",{className:"metric-value",children:[s," / ",o]})]}),U.jsxs("div",{className:"metric-box",children:[U.jsx("span",{className:"metric-label",children:"Referência (Par)"}),U.jsx("strong",{className:"metric-value accent",children:`${u} cliques`})]}),U.jsxs("div",{className:"metric-box",children:[U.jsx("span",{className:"metric-label",children:"Progresso"}),U.jsxs("strong",{className:"metric-value",children:[d,"/",c," (",N,"%)"]}),U.jsx("div",{className:"progress-bar-track",children:U.jsx("div",{className:"progress-bar-fill",style:{width:`${N}%`}})})]})]}),e==="free"&&U.jsxs("div",{className:"size-selector-bar",children:[U.jsxs("div",{className:"size-label-group",children:[U.jsxs("span",{className:"size-title",children:["Base da Pirâmide: ",t]}),U.jsxs("span",{className:"size-desc",children:[c," bolas no total •"," ",t<=8?"Resolvedor automático: Rede Neural (IA)":"Resolvedor automático: Álgebra Linear GF(2)"]})]}),U.jsxs("div",{className:"size-controls-right",children:[U.jsx("button",{type:"button",disabled:f||t<=2,className:"size-btn",onClick:()=>i(Math.max(2,t-1)),title:"Diminuir base",children:"−"}),U.jsx("input",{type:"range",min:2,max:20,value:t,disabled:f,onChange:k=>i(Number(k.target.value)),className:"size-slider"}),U.jsx("button",{type:"button",disabled:f||t>=20,className:"size-btn",onClick:()=>i(Math.min(20,t+1)),title:"Aumentar base",children:"+"}),U.jsx("div",{className:"size-buttons",children:[3,5,6,7,8,10,12,15,20].map(k=>U.jsx("button",{type:"button",disabled:f,className:`size-btn ${t===k?"active":""} ${k>8?"human-only":""}`,onClick:()=>i(k),children:k},k))})]})]}),U.jsxs("div",{className:"actions-row",children:[U.jsxs("div",{className:"left-actions",children:[U.jsx("button",{type:"button",className:"btn btn-secondary",onClick:$,disabled:f||s===0,children:"Reiniciar"}),e==="free"&&U.jsx("button",{type:"button",className:"btn btn-secondary",onClick:S,disabled:f,children:"Novo Tabuleiro"}),U.jsxs("label",{className:"preview-toggle",children:[U.jsx("input",{type:"checkbox",checked:b,onChange:k=>C(k.target.checked)}),U.jsx("span",{children:"Visualizar alcance"})]})]}),U.jsx("div",{className:"right-actions",children:y?U.jsx("button",{type:"button",className:`btn ${f?"btn-Warning":"btn-primary"}`,onClick:w,disabled:m,children:f?"Pausar Resolução":"Resolver Passo a Passo"}):U.jsx("span",{className:"human-challenge-pill",children:"Modo Manual"})})]})]})}function P2({onBackToGame:e}){return U.jsxs(U.Fragment,{children:[U.jsx("section",{className:"snap-slide context-slide",id:"slide-math",children:U.jsxs("div",{className:"slide-content",children:[U.jsx("span",{className:"slide-kicker",children:"01 / POR TRÁS DO TABULEIRO"}),U.jsx("h2",{className:"slide-title",children:"Como garantimos que nenhum desafio seja impossível"}),U.jsx("p",{className:"slide-lead",children:"Se as cores iniciais fossem sorteadas de forma totalmente cega, a maioria das pirâmides simplesmente não teria solução. Na pirâmide de base 3, por exemplo, 75% dos sorteios aleatórios são impossíveis de resolver porque algumas bolas invertem exatamente o mesmo grupo de vizinhas."}),U.jsxs("div",{className:"slide-grid-two",children:[U.jsxs("div",{className:"context-card",children:[U.jsx("h3",{children:"A lógica dos cliques — GF(2)"}),U.jsx("p",{children:"Duas regras simples comandam o jogo: a ordem em que você clica nas bolas não muda o resultado final, e clicar duas vezes na mesma bola desfaz a jogada (como um interruptor de luz)."}),U.jsx("div",{className:"formula-box",children:"A · x ≡ b (mod 2)"}),U.jsxs("p",{className:"card-subtext",children:["Onde ",U.jsx("code",{children:"A"})," representa quais bolas são vizinhas (alcance ≤ 3r),"," ",U.jsx("code",{children:"x"})," são os cliques necessários e ",U.jsx("code",{children:"b"})," são as bolas que ainda estão brancas."]})]}),U.jsxs("div",{className:"context-card",children:[U.jsx("h3",{children:"Filtro antes da partida começar"}),U.jsxs("p",{children:["Antes de mostrar qualquer tabuleiro na tela, o jogo resolve esse sistema em frações de milissegundo para ter certeza de que existe um caminho até a vitória e calcular a ",U.jsx("strong",{children:"Referência (Par)"})," de cliques."]}),U.jsx("p",{className:"card-subtext",children:"Assim você nunca cai em um quebra-cabeça sem saída — todo tabuleiro tem solução garantida."})]})]})]})}),U.jsx("section",{className:"snap-slide context-slide",id:"slide-ai",children:U.jsxs("div",{className:"slide-content",children:[U.jsx("span",{className:"slide-kicker",children:"02 / IA vs. MATEMÁTICA"}),U.jsx("h2",{className:"slide-title",children:"Dois cérebros diferentes para resolver a pirâmide"}),U.jsxs("p",{className:"slide-lead",children:["Até ",U.jsx("strong",{children:"8 bolas na base"}),", quem joga no botão de resolução é uma"," ",U.jsx("strong",{children:"Rede Neural (Double DQN)"})," que aprendeu sozinha tentando e errando. A partir de ",U.jsx("strong",{children:"9 bolas na base"})," (onde as combinações passam dos trilhões), o ",U.jsx("strong",{children:"Resolvedor Algébrico em GF(2)"})," ","assume para encarar pirâmides gigantes."]}),U.jsxs("div",{className:"ai-architecture-row",children:[U.jsxs("div",{className:"mini-spec",children:[U.jsx("strong",{children:"Por que usar IA se a matemática já resolve?"}),U.jsx("span",{children:"A equação matemática é presa às regras atuais do jogo. Já uma Rede Neural dá liberdade criativa: se mudarmos as regras (novas cores, obstáculos ou poderes), a IA aprende a jogar do zero sem precisarmos descobrir uma fórmula nova."})]}),U.jsxs("div",{className:"mini-spec",children:[U.jsx("strong",{children:"Mais viva e divertida de assistir"}),U.jsx("span",{children:"Enquanto o algoritmo matemático segue uma lista rígida como uma calculadora, a IA avalia o tabuleiro no “olho” a cada jogada: escolhe caminhos mais criativos e até corrige a própria rota se precisar."})]}),U.jsxs("div",{className:"mini-spec",children:[U.jsx("strong",{children:"Rodando direto no seu navegador"}),U.jsx("span",{children:"Os modelos treinados em PyTorch foram exportados para ONNX e rodam 100% no seu dispositivo em tempo real, lado a lado com o motor matemático para as pirâmides maiores (9 a 20 bolas)."})]})]}),U.jsx("div",{className:"slide-footer-action",children:U.jsx("button",{type:"button",className:"btn btn-secondary",onClick:e,children:"Voltar ao Jogo ↑"})})]})})]})}function L2({isOpen:e,onClose:t,stats:i,dailyResult:s,challengeNumber:o,aiPar:u}){const[d,c]=et.useState(!1);if(!e)return null;const f=i.played>0?Math.round(i.wins/i.played*100):0,m=()=>{const y=(s==null?void 0:s.clicks)??"—",w=s==null?void 0:s.usedAi,$=typeof y=="number"?y-u:0,S=w?"Resolvido com resolução guiada":$<=0?"Atingiu a referência ótima":`+${$} cliques acima da referência`,b=[`PYRAMIDLE #${o}`,`Cliques: ${y} | Referência: ${u}`,S,`Sequência: ${i.currentStreak} dia(s)`,window.location.origin].join(`
`);navigator.clipboard.writeText(b),c(!0),setTimeout(()=>c(!1),2500)};return U.jsx("div",{className:"modal-backdrop",onClick:t,children:U.jsxs("div",{className:"modal-card",onClick:y=>y.stopPropagation(),children:[U.jsxs("div",{className:"modal-header",children:[U.jsx("h2",{children:"Desempenho no Desafio Diário"}),U.jsx("button",{type:"button",className:"close-btn",onClick:t,children:"Fechar"})]}),U.jsxs("div",{className:"stats-summary-grid",children:[U.jsxs("div",{className:"stat-item",children:[U.jsx("strong",{children:i.played}),U.jsx("span",{children:"Jogos"})]}),U.jsxs("div",{className:"stat-item",children:[U.jsxs("strong",{children:[f,"%"]}),U.jsx("span",{children:"Vitórias"})]}),U.jsxs("div",{className:"stat-item",children:[U.jsx("strong",{children:i.currentStreak}),U.jsx("span",{children:"Sequência"})]}),U.jsxs("div",{className:"stat-item",children:[U.jsx("strong",{children:i.maxStreak}),U.jsx("span",{children:"Recorde"})]})]}),s?U.jsxs("div",{className:"daily-summary-card",children:[U.jsxs("h3",{children:["Desafio #",o," Concluído"]}),U.jsxs("p",{className:"daily-comparison",children:["Resolvido em ",U.jsxs("strong",{children:[s.clicks," cliques"]})," (Referência:"," ",U.jsxs("strong",{children:[u," cliques"]}),")."]}),s.usedAi&&U.jsx("p",{className:"ai-assisted-note",children:"Nota: A resolução passo a passo foi utilizada nesta partida."}),U.jsx("button",{type:"button",className:"btn btn-primary share-btn",onClick:m,children:d?"Resultado copiado":"Copiar Resultado"})]}):U.jsxs("p",{className:"pending-daily-msg",children:["Conclua o ",U.jsxs("strong",{children:["Desafio Diário #",o]})," para habilitar o resumo para compartilhamento."]})]})})}function U2({isOpen:e,onClose:t,onJumpToContext:i}){return e?U.jsx("div",{className:"modal-backdrop",onClick:t,children:U.jsxs("div",{className:"modal-card help-modal",onClick:s=>s.stopPropagation(),children:[U.jsxs("div",{className:"modal-header",children:[U.jsx("h2",{children:"Regras do Jogo"}),U.jsx("button",{type:"button",className:"close-btn",onClick:t,children:"Fechar"})]}),U.jsxs("div",{className:"help-body",children:[U.jsxs("section",{className:"help-section",children:[U.jsx("h3",{children:"Objetivo"}),U.jsxs("p",{children:["Deixe ",U.jsx("strong",{children:"todas as bolas da pirâmide pretas"})," utilizando a menor quantidade de cliques possível."]}),U.jsxs("p",{children:["Ao clicar em uma bola, ela própria e todas as bolas vizinhas dentro de um raio de alcance de ",U.jsx("code",{children:"3 × raio"})," invertem de cor simultaneamente."]})]}),U.jsxs("section",{className:"help-section",children:[U.jsx("h3",{children:"Modos Disponíveis"}),U.jsxs("ul",{children:[U.jsxs("li",{children:[U.jsx("strong",{children:"Desafio Diário:"})," Uma pirâmide única por dia (base 5, 15 bolas), igual para todos os jogadores."]}),U.jsxs("li",{children:[U.jsx("strong",{children:"Modo Livre:"})," Permite escolher o tamanho da base entre 2 e 10 bolas, sortear novos tabuleiros e assistir à resolução automática passo a passo (disponível até 8 bolas na base)."]})]})]}),U.jsx("div",{className:"help-footer",children:U.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{t(),i()},children:"Ver explicação matemática nos slides abaixo ↓"})})]})]})}):null}function im(e,t=760,i=500){const s=i*.78/(e*2),o=2*s*.866,u=(e-1)*o+2*s,d=(i-u)/2,c=[];let f=0;for(let w=0;w<e;w++){const $=i-d-s-o*w,S=e-w,b=S*2*s,C=(t-b)/2+s;for(let N=0;N<S;N++){const k=C+N*2*s;c.push({index:f++,x:k,y:$,radius:s,row:w,col:N})}}const m=c.length,y=Array.from({length:m},()=>Array(m).fill(0));for(let w=0;w<m;w++)for(let $=0;$<m;$++){const S=c[w].x-c[$].x,b=c[w].y-c[$].y;Math.hypot(S,b)<=3*s+1e-6&&(y[w][$]=1)}return{balls:c,adjMatrix:y,radius:s,width:t,height:i}}function j2(e,t){const i=t.length,s=t.map(d=>d===1?0:1),o=e.map((d,c)=>[...d,s[c]]);let u=0;for(let d=0;d<i;d++){let c=-1;for(let m=u;m<i;m++)if(o[m][d]===1){c=m;break}if(c===-1)continue;const f=o[u];o[u]=o[c],o[c]=f;for(let m=0;m<i;m++)if(m!==u&&o[m][d]===1)for(let y=0;y<=i;y++)o[m][y]^=o[u][y];u++}for(let d=0;d<i;d++){let c=0;for(let f=0;f<i;f++)c+=o[d][f];if(c===0&&o[d][i]===1)return!1}return!0}function am(e,t){const i=t.length,s=t.map(c=>c===1?0:1),o=e.map((c,f)=>[...c,s[f]]);let u=0;for(let c=0;c<i;c++){let f=-1;for(let y=u;y<i;y++)if(o[y][c]===1){f=y;break}if(f===-1)continue;const m=o[u];o[u]=o[f],o[f]=m;for(let y=0;y<i;y++)if(y!==u&&o[y][c]===1)for(let w=0;w<=i;w++)o[y][w]^=o[u][w];u++}let d=0;for(let c=0;c<u;c++)d+=o[c][i];return d}function W2(e,t){const i=t.length,s=t.map(c=>c===1?0:1),o=e.map((c,f)=>[...c,s[f]]);let u=0;const d=[];for(let c=0;c<i;c++){let f=-1;for(let y=u;y<i;y++)if(o[y][c]===1){f=y;break}if(f===-1)continue;const m=o[u];o[u]=o[f],o[f]=m;for(let y=0;y<i;y++)if(y!==u&&o[y][c]===1)for(let w=0;w<=i;w++)o[y][w]^=o[u][w];d.push(c),u++}for(let c=0;c<u;c++)if(o[c][i]===1)return d[c];return 0}function Wo(e,t,i){const s=t[i];return e.map((o,u)=>s[u]===1?o^1:o)}function Nl(e){return e.every(t=>t===1)}function V2(e,t=Math.random,i=8,s=2){const o=e.length,u=Math.min(i,o),d=Math.min(u,Math.max(1,s));for(let f=0;f<200;f++){let m=Array(o).fill(1);const y=new Set,w=d+Math.floor(t()*Math.max(1,u-d+1));let $=0;for(;y.size<w&&$<200;)y.add(Math.floor(t()*o)),$++;for(const S of y)m=Wo(m,e,S);if(!Nl(m)&&j2(e,m)){const S=am(e,m);if(S>=d||f>60)return{initialState:m,optimalHintClicks:S}}}let c=Wo(Array(o).fill(1),e,0);return{initialState:c,optimalHintClicks:am(e,c)}}/*!
 * ONNX Runtime Web v1.31.1
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */var Up=Object.defineProperty,F2=Object.getOwnPropertyDescriptor,q2=Object.getOwnPropertyNames,H2=Object.prototype.hasOwnProperty,G2=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,i)=>(typeof require<"u"?require:t)[i]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')}),ae=(e,t,i)=>()=>{if(i)throw i[0];try{return e&&(t=e(e=0)),t}catch(s){throw i=[s],s}},us=(e,t)=>{for(var i in t)Up(e,i,{get:t[i],enumerable:!0})},K2=(e,t,i,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of q2(t))!H2.call(e,o)&&o!==i&&Up(e,o,{get:()=>t[o],enumerable:!(s=F2(t,o))||s.enumerable});return e},Vo=e=>K2(Up({},"__esModule",{value:!0}),e),rs,Sn,$c,is,xc,K0,Q0,jp=ae(()=>{"use strict";rs=new Map,Sn=[],$c=new WeakMap,is=(e,t,i)=>{if(t&&typeof t.init=="function"&&typeof t.createInferenceSessionHandler=="function"){let s=rs.get(e);if(s===void 0)rs.set(e,{backend:t,priority:i});else{if(s.priority>i)return;if(s.priority===i&&s.backend!==t)throw new Error(`cannot register backend "${e}" using priority ${i}`)}if(i>=0){let o=Sn.indexOf(e);o!==-1&&Sn.splice(o,1);for(let u=0;u<Sn.length;u++)if(rs.get(Sn[u]).priority<=i){Sn.splice(u,0,e);return}Sn.push(e)}return}throw new TypeError("not a valid backend")},xc=async e=>{let t=rs.get(e);if(!t)return"backend not found.";if(t.initialized)return t.backend;if(t.aborted)return t.error;{let i=!!t.initPromise;try{if(!i){let s=t.backend,o=$c.get(s);t.initPromise=o?o.then(async()=>s.init(e),async()=>s.init(e)):s.init(e),$c.set(s,t.initPromise)}return await t.initPromise,t.initialized=!0,t.backend}catch(s){return i||(t.error=`${s}`,t.aborted=!0),t.error}finally{delete t.initPromise}}},K0=async e=>{let t=e.executionProviders||[],i=t.map(f=>typeof f=="string"?f:f.name),s=i.length===0?Sn:i,o,u=[],d=new Set;for(let f of s){let m=await xc(f);typeof m=="string"?u.push({name:f,err:m}):(o||(o=m),o===m&&d.add(f))}if(!o)throw new Error(`no available backend found. ERR: ${u.map(f=>`[${f.name}] ${f.err}`).join(", ")}`);for(let{name:f,err:m}of u)i.includes(f)&&console.warn(`removing requested execution provider "${f}" from session options because it is not available: ${m}`);let c=t.filter(f=>d.has(typeof f=="string"?f:f.name));return[o,new Proxy(e,{get:(f,m)=>m==="executionProviders"?c:Reflect.get(f,m)})]},Q0=async()=>{let e=[];for(let i of Sn){if(typeof rs.get(i).backend.createLoraAdapterHandler!="function")continue;let s=await xc(i);if(typeof s!="string")return s;e.push({name:i,err:s})}let t=e.length===0?"":` ERR: ${e.map(i=>`[${i.name}] ${i.err}`).join(", ")}`;throw new Error(`no available backend supports LoRA adapters.${t}`)}}),Q2=ae(()=>{"use strict";jp()}),Z0,Z2=ae(()=>{"use strict";Z0="1.31.1"}),bc,At,Y0=ae(()=>{"use strict";Z2(),bc="warning",At={wasm:{},webgl:{},webgpu:{},versions:{common:Z0},set logLevel(e){if(e!==void 0){if(typeof e!="string"||["verbose","info","warning","error","fatal"].indexOf(e)===-1)throw new Error(`Unsupported logging level: ${e}`);bc=e}},get logLevel(){return bc}},Object.defineProperty(At,"logLevel",{enumerable:!0})}),dt,Y2=ae(()=>{"use strict";Y0(),dt=At}),Ol,Sc,Cr,gr,Yi,Xi,Wp=ae(()=>{"use strict";Y0(),Ol=(e,t)=>{(typeof At.trace>"u"?!At.wasm.trace:!At.trace)||console.timeStamp(`${e}::ORT::${t}`)},Sc=(e,t)=>{var o;let i=((o=new Error().stack)==null?void 0:o.split(/\r\n|\r|\n/g))||[],s=!1;for(let u=0;u<i.length;u++){if(s&&!i[u].includes("TRACE_FUNC")){let d=`FUNC_${e}::${i[u].trim().split(" ")[1]}`;t&&(d+=`::${t}`),Ol("CPU",d);return}i[u].includes("TRACE_FUNC")&&(s=!0)}},Cr=e=>{(typeof At.trace>"u"?!At.wasm.trace:!At.trace)||Sc("BEGIN",e)},gr=e=>{(typeof At.trace>"u"?!At.wasm.trace:!At.trace)||Sc("END",e)},Yi=e=>{(typeof At.trace>"u"?!At.wasm.trace:!At.trace)||console.time(`ORT::${e}`)},Xi=e=>{(typeof At.trace>"u"?!At.wasm.trace:!At.trace)||console.timeEnd(`ORT::${e}`)}}),Vp,X0=ae(()=>{"use strict";jp(),Wp(),Vp=class J0{constructor(t,i){this.backend=t,this.handler=i}static async create(t){if(Cr(),typeof t!="string"&&!(t instanceof Uint8Array))throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let i=await Q0(),s=await i.createLoraAdapterHandler(t);return gr(),new J0(i,s)}async release(){return this.handler.dispose()}}}),ev,tv,X2=ae(()=>{"use strict";ev=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas"):new OffscreenCanvas(1,1);i.width=e.dims[3],i.height=e.dims[2];let s=i.getContext("2d");if(s!=null){let o,u;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(o=e.dims[2],u=e.dims[3]):(o=e.dims[3],u=e.dims[2]);let d=(t==null?void 0:t.format)!==void 0?t.format:"RGB",c=t==null?void 0:t.norm,f,m;c===void 0||c.mean===void 0?f=[255,255,255,255]:typeof c.mean=="number"?f=[c.mean,c.mean,c.mean,c.mean]:(f=[c.mean[0],c.mean[1],c.mean[2],0],c.mean[3]!==void 0&&(f[3]=c.mean[3])),c===void 0||c.bias===void 0?m=[0,0,0,0]:typeof c.bias=="number"?m=[c.bias,c.bias,c.bias,c.bias]:(m=[c.bias[0],c.bias[1],c.bias[2],0],c.bias[3]!==void 0&&(m[3]=c.bias[3]));let y=u*o,w=0,$=y,S=y*2,b=-1;d==="RGBA"?(w=0,$=y,S=y*2,b=y*3):d==="RGB"?(w=0,$=y,S=y*2):d==="RBG"&&(w=0,S=y,$=y*2);for(let C=0;C<u;C++)for(let N=0;N<o;N++){let k=(e.data[w++]-m[0])*f[0],E=(e.data[$++]-m[1])*f[1],A=(e.data[S++]-m[2])*f[2],D=b===-1?255:(e.data[b++]-m[3])*f[3];s.fillStyle="rgba("+k+","+E+","+A+","+D+")",s.fillRect(N,C,1,1)}if("toDataURL"in i)return i.toDataURL();throw new Error("toDataURL is not supported")}else throw new Error("Can not access image data")},tv=(e,t)=>{let i=typeof document<"u"?document.createElement("canvas").getContext("2d"):new OffscreenCanvas(1,1).getContext("2d"),s;if(i!=null){let o,u,d;(t==null?void 0:t.tensorLayout)!==void 0&&t.tensorLayout==="NHWC"?(o=e.dims[2],u=e.dims[1],d=e.dims[3]):(o=e.dims[3],u=e.dims[2],d=e.dims[1]);let c=t!==void 0&&t.format!==void 0?t.format:"RGB",f=t==null?void 0:t.norm,m,y;f===void 0||f.mean===void 0?m=[255,255,255,255]:typeof f.mean=="number"?m=[f.mean,f.mean,f.mean,f.mean]:(m=[f.mean[0],f.mean[1],f.mean[2],255],f.mean[3]!==void 0&&(m[3]=f.mean[3])),f===void 0||f.bias===void 0?y=[0,0,0,0]:typeof f.bias=="number"?y=[f.bias,f.bias,f.bias,f.bias]:(y=[f.bias[0],f.bias[1],f.bias[2],0],f.bias[3]!==void 0&&(y[3]=f.bias[3]));let w=u*o;if(t!==void 0&&(t.format!==void 0&&d===4&&t.format!=="RGBA"||d===3&&t.format!=="RGB"&&t.format!=="BGR"))throw new Error("Tensor format doesn't match input tensor dims");let $=4,S=0,b=1,C=2,N=3,k=0,E=w,A=w*2,D=-1;c==="RGBA"?(k=0,E=w,A=w*2,D=w*3):c==="RGB"?(k=0,E=w,A=w*2):c==="RBG"&&(k=0,A=w,E=w*2),s=i.createImageData(o,u);for(let B=0;B<u*o;S+=$,b+=$,C+=$,N+=$,B++)s.data[S]=(e.data[k++]-y[0])*m[0],s.data[b]=(e.data[E++]-y[1])*m[1],s.data[C]=(e.data[A++]-y[2])*m[2],s.data[N]=D===-1?255:(e.data[D++]-y[3])*m[3]}else throw new Error("Can not access image data");return s}}),hl,rv,nv,iv,av,sv,J2=ae(()=>{"use strict";Fp(),hl=(e,t)=>{if(e===void 0)throw new Error("Image buffer must be defined");if(t.height===void 0||t.width===void 0)throw new Error("Image height and width must be defined");if(t.tensorLayout==="NHWC")throw new Error("NHWC Tensor layout is not supported yet");let{height:i,width:s}=t,o=t.norm??{mean:255,bias:0},u,d;typeof o.mean=="number"?u=[o.mean,o.mean,o.mean,o.mean]:u=[o.mean[0],o.mean[1],o.mean[2],o.mean[3]??255],typeof o.bias=="number"?d=[o.bias,o.bias,o.bias,o.bias]:d=[o.bias[0],o.bias[1],o.bias[2],o.bias[3]??0];let c=t.format!==void 0?t.format:"RGBA",f=t.tensorFormat!==void 0&&t.tensorFormat!==void 0?t.tensorFormat:"RGB",m=i*s,y=f==="RGBA"?new Float32Array(m*4):new Float32Array(m*3),w=4,$=0,S=1,b=2,C=3,N=0,k=m,E=m*2,A=-1;c==="RGB"&&(w=3,$=0,S=1,b=2,C=-1),f==="RGBA"?A=m*3:f==="RBG"?(N=0,E=m,k=m*2):f==="BGR"&&(E=0,k=m,N=m*2);for(let D=0;D<m;D++,$+=w,b+=w,S+=w,C+=w)y[N++]=(e[$]+d[0])/u[0],y[k++]=(e[S]+d[1])/u[1],y[E++]=(e[b]+d[2])/u[2],A!==-1&&C!==-1&&(y[A++]=(e[C]+d[3])/u[3]);return f==="RGBA"?new mr("float32",y,[1,4,i,s]):new mr("float32",y,[1,3,i,s])},rv=async(e,t)=>{let i=typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement,s=typeof ImageData<"u"&&e instanceof ImageData,o=typeof ImageBitmap<"u"&&e instanceof ImageBitmap,u=typeof e=="string",d,c=t??{},f=()=>{if(typeof document<"u")return document.createElement("canvas");if(typeof OffscreenCanvas<"u")return new OffscreenCanvas(1,1);throw new Error("Canvas is not supported")},m=y=>typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||y instanceof OffscreenCanvas?y.getContext("2d"):null;if(i){let y=f();y.width=e.width,y.height=e.height;let w=m(y);if(w!=null){let $=e.height,S=e.width;if(t!==void 0&&t.resizedHeight!==void 0&&t.resizedWidth!==void 0&&($=t.resizedHeight,S=t.resizedWidth),t!==void 0){if(c=t,t.tensorFormat!==void 0)throw new Error("Image input config format must be RGBA for HTMLImageElement");c.tensorFormat="RGBA",c.height=$,c.width=S}else c.tensorFormat="RGBA",c.height=$,c.width=S;w.drawImage(e,0,0),d=w.getImageData(0,0,S,$).data}else throw new Error("Can not access image data")}else if(s){let y,w;if(t!==void 0&&t.resizedWidth!==void 0&&t.resizedHeight!==void 0?(y=t.resizedHeight,w=t.resizedWidth):(y=e.height,w=e.width),t!==void 0&&(c=t),c.format="RGBA",c.height=y,c.width=w,t!==void 0){let $=f();$.width=w,$.height=y;let S=m($);if(S!=null)S.putImageData(e,0,0),d=S.getImageData(0,0,w,y).data;else throw new Error("Can not access image data")}else d=e.data}else if(o){if(t===void 0)throw new Error("Please provide image config with format for Imagebitmap");let y=f();y.width=e.width,y.height=e.height;let w=m(y);if(w!=null){let $=e.height,S=e.width;return w.drawImage(e,0,0,S,$),d=w.getImageData(0,0,S,$).data,c.height=$,c.width=S,hl(d,c)}else throw new Error("Can not access image data")}else{if(u)return new Promise((y,w)=>{let $=f(),S=m($);if(!e||!S)return w();let b=new Image;b.crossOrigin="Anonymous",b.src=e,b.onload=()=>{$.width=b.width,$.height=b.height,S.drawImage(b,0,0,$.width,$.height);let C=S.getImageData(0,0,$.width,$.height);c.height=$.height,c.width=$.width,y(hl(C.data,c))}});throw new Error("Input data provided is not supported - aborted tensor creation")}if(d!==void 0)return hl(d,c);throw new Error("Input data provided is not supported - aborted tensor creation")},nv=(e,t)=>{let{width:i,height:s,download:o,dispose:u}=t,d=[1,s,i,4];return new mr({location:"texture",type:"float32",texture:e,dims:d,download:o,dispose:u})},iv=(e,t)=>{let{dataType:i,dims:s,download:o,dispose:u}=t;return new mr({location:"gpu-buffer",type:i??"float32",gpuBuffer:e,dims:s,download:o,dispose:u})},av=(e,t)=>{let{dataType:i,dims:s,download:o,dispose:u}=t;return new mr({location:"ml-tensor",type:i??"float32",mlTensor:e,dims:s,download:o,dispose:u})},sv=(e,t,i)=>new mr({location:"cpu-pinned",type:e,data:t,dims:i??[t.length]})}),Ki,Po,kc,ov,e$=ae(()=>{"use strict";Ki=new Map([["float32",Float32Array],["uint8",Uint8Array],["int8",Int8Array],["uint16",Uint16Array],["int16",Int16Array],["int32",Int32Array],["bool",Uint8Array],["float64",Float64Array],["uint32",Uint32Array],["int4",Uint8Array],["uint4",Uint8Array]]),Po=new Map([[Float32Array,"float32"],[Uint8Array,"uint8"],[Int8Array,"int8"],[Uint16Array,"uint16"],[Int16Array,"int16"],[Int32Array,"int32"],[Float64Array,"float64"],[Uint32Array,"uint32"]]),kc=!1,ov=()=>{if(!kc){kc=!0;let e=typeof BigInt64Array<"u"&&BigInt64Array.from,t=typeof BigUint64Array<"u"&&BigUint64Array.from,i=globalThis.Float16Array,s=typeof i<"u"&&i.from;e&&(Ki.set("int64",BigInt64Array),Po.set(BigInt64Array,"int64")),t&&(Ki.set("uint64",BigUint64Array),Po.set(BigUint64Array,"uint64")),s?(Ki.set("float16",i),Po.set(i,"float16")):Ki.set("float16",Uint16Array)}}}),uv,lv,t$=ae(()=>{"use strict";Fp(),uv=e=>{let t=1;for(let i=0;i<e.length;i++){let s=e[i];if(typeof s!="number"||!Number.isSafeInteger(s))throw new TypeError(`dims[${i}] must be an integer, got: ${s}`);if(s<0)throw new RangeError(`dims[${i}] must be a non-negative integer, got: ${s}`);t*=s}return t},lv=(e,t)=>{switch(e.location){case"cpu":return new mr(e.type,e.data,t);case"cpu-pinned":return new mr({location:"cpu-pinned",data:e.data,type:e.type,dims:t});case"texture":return new mr({location:"texture",texture:e.texture,type:e.type,dims:t});case"gpu-buffer":return new mr({location:"gpu-buffer",gpuBuffer:e.gpuBuffer,type:e.type,dims:t});case"ml-tensor":return new mr({location:"ml-tensor",mlTensor:e.mlTensor,type:e.type,dims:t});default:throw new Error(`tensorReshape: tensor location ${e.location} is not supported`)}}}),mr,Fp=ae(()=>{"use strict";X2(),J2(),e$(),t$(),mr=class{constructor(e,t,i){ov();let s,o;if(typeof e=="object"&&"location"in e)switch(this.dataLocation=e.location,s=e.type,o=e.dims,e.location){case"cpu-pinned":{let d=Ki.get(s);if(!d)throw new TypeError(`unsupported type "${s}" to create tensor from pinned buffer`);if(!(e.data instanceof d))throw new TypeError(`buffer should be of type ${d.name}`);this.cpuData=e.data;break}case"texture":{if(s!=="float32")throw new TypeError(`unsupported type "${s}" to create tensor from texture`);this.gpuTextureData=e.texture,this.downloader=e.download,this.disposer=e.dispose;break}case"gpu-buffer":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint8"&&s!=="bool"&&s!=="uint4"&&s!=="int4")throw new TypeError(`unsupported type "${s}" to create tensor from gpu buffer`);this.gpuBufferData=e.gpuBuffer,this.downloader=e.download,this.disposer=e.dispose;break}case"ml-tensor":{if(s!=="float32"&&s!=="float16"&&s!=="int32"&&s!=="int64"&&s!=="uint32"&&s!=="uint64"&&s!=="int8"&&s!=="uint8"&&s!=="bool"&&s!=="uint4"&&s!=="int4")throw new TypeError(`unsupported type "${s}" to create tensor from MLTensor`);this.mlTensorData=e.mlTensor,this.downloader=e.download,this.disposer=e.dispose;break}default:throw new Error(`Tensor constructor: unsupported location '${this.dataLocation}'`)}else{let d,c;if(typeof e=="string")if(s=e,c=i,e==="string"){if(!Array.isArray(t))throw new TypeError("A string tensor's data must be a string array.");d=t}else{let f=Ki.get(e);if(f===void 0)throw new TypeError(`Unsupported tensor type: ${e}.`);if(Array.isArray(t)){if(e==="float16"&&f===Uint16Array||e==="uint4"||e==="int4")throw new TypeError(`Creating a ${e} tensor from number array is not supported. Please use ${f.name} as data.`);e==="uint64"||e==="int64"?d=f.from(t,BigInt):d=f.from(t)}else if(t instanceof f)d=t;else if(t instanceof Uint8ClampedArray)if(e==="uint8")d=Uint8Array.from(t);else throw new TypeError("A Uint8ClampedArray tensor's data must be type of uint8");else if(e==="float16"&&t instanceof Uint16Array&&f!==Uint16Array)d=new globalThis.Float16Array(t.buffer,t.byteOffset,t.length);else throw new TypeError(`A ${s} tensor's data must be type of ${f}`)}else if(c=t,Array.isArray(e)){if(e.length===0)throw new TypeError("Tensor type cannot be inferred from an empty array.");let f=typeof e[0];if(f==="string")s="string",d=e;else if(f==="boolean")s="bool",d=Uint8Array.from(e);else throw new TypeError(`Invalid element type of data array: ${f}.`)}else if(e instanceof Uint8ClampedArray)s="uint8",d=Uint8Array.from(e);else{let f=Po.get(e.constructor);if(f===void 0)throw new TypeError(`Unsupported type for tensor data: ${e.constructor}.`);s=f,d=e}if(c===void 0)c=[d.length];else if(!Array.isArray(c))throw new TypeError("A tensor's dims must be a number array");o=c,this.cpuData=d,this.dataLocation="cpu"}let u=uv(o);if(this.cpuData&&u!==this.cpuData.length&&!((s==="uint4"||s==="int4")&&Math.ceil(u/2)===this.cpuData.length))throw new Error(`Tensor's size(${u}) does not match data length(${this.cpuData.length}).`);this.type=s,this.dims=o,this.size=u}static async fromImage(e,t){return rv(e,t)}static fromTexture(e,t){return nv(e,t)}static fromGpuBuffer(e,t){return iv(e,t)}static fromMLTensor(e,t){return av(e,t)}static fromPinnedBuffer(e,t,i){return sv(e,t,i)}toDataURL(e){return ev(this,e)}toImageData(e){return tv(this,e)}get data(){if(this.ensureValid(),!this.cpuData)throw new Error("The data is not on CPU. Use `getData()` to download GPU data to CPU, or use `texture` or `gpuBuffer` property to access the GPU data directly.");return this.cpuData}get location(){return this.dataLocation}get texture(){if(this.ensureValid(),!this.gpuTextureData)throw new Error("The data is not stored as a WebGL texture.");return this.gpuTextureData}get gpuBuffer(){if(this.ensureValid(),!this.gpuBufferData)throw new Error("The data is not stored as a WebGPU buffer.");return this.gpuBufferData}get mlTensor(){if(this.ensureValid(),!this.mlTensorData)throw new Error("The data is not stored as a WebNN MLTensor.");return this.mlTensorData}async getData(e){switch(this.ensureValid(),this.dataLocation){case"cpu":case"cpu-pinned":return this.data;case"texture":case"gpu-buffer":case"ml-tensor":{if(!this.downloader)throw new Error("The current tensor is not created with a specified data downloader.");if(this.isDownloading)throw new Error("The current tensor is being downloaded.");try{this.isDownloading=!0;let t=await this.downloader();return this.downloader=void 0,this.dataLocation="cpu",this.cpuData=t,e&&this.disposer&&(this.disposer(),this.disposer=void 0),t}finally{this.isDownloading=!1}}default:throw new Error(`cannot get data from location: ${this.dataLocation}`)}}dispose(){if(this.isDownloading)throw new Error("The current tensor is being downloaded.");this.disposer&&(this.disposer(),this.disposer=void 0),this.cpuData=void 0,this.gpuTextureData=void 0,this.gpuBufferData=void 0,this.mlTensorData=void 0,this.downloader=void 0,this.isDownloading=void 0,this.dataLocation="none"}ensureValid(){if(this.dataLocation==="none")throw new Error("The tensor is disposed.")}reshape(e){if(this.ensureValid(),this.downloader||this.disposer)throw new Error("Cannot reshape a tensor that owns GPU resource.");return lv(this,e)}}}),Gr,dv=ae(()=>{"use strict";Fp(),Gr=mr}),cv,r$=ae(()=>{"use strict";jp(),X0(),dv(),Wp(),cv=class pv{constructor(t,i){this.handler=t,this.backend=i}async run(t,i,s){Cr(),Yi("InferenceSession.run");let o={},u={};if(typeof t!="object"||t===null||t instanceof Gr||Array.isArray(t))throw new TypeError("'feeds' must be an object that use input names as keys and OnnxValue as corresponding values.");let d=!0;if(typeof i=="object"){if(i===null)throw new TypeError("Unexpected argument[1]: cannot be null.");if(i instanceof Gr)throw new TypeError("'fetches' cannot be a Tensor");if(Array.isArray(i)){if(i.length===0)throw new TypeError("'fetches' cannot be an empty array.");d=!1;for(let y of i){if(typeof y!="string")throw new TypeError("'fetches' must be a string array or an object.");if(this.outputNames.indexOf(y)===-1)throw new RangeError(`'fetches' contains invalid output name: ${y}.`);o[y]=null}if(typeof s=="object"&&s!==null)u=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else{let y=!1,w=Object.getOwnPropertyNames(i);for(let $ of this.outputNames)if(w.indexOf($)!==-1){let S=i[$];(S===null||S instanceof Gr)&&(y=!0,d=!1,o[$]=S)}if(y){if(typeof s=="object"&&s!==null)u=s;else if(typeof s<"u")throw new TypeError("'options' must be an object.")}else u=i}}else if(typeof i<"u")throw new TypeError("Unexpected argument[1]: must be 'fetches' or 'options'.");for(let y of this.inputNames)if(typeof t[y]>"u")throw new Error(`input '${y}' is missing in 'feeds'.`);if(d)for(let y of this.outputNames)o[y]=null;let c;if(u.activeLoraAdapters!==void 0){if(!Array.isArray(u.activeLoraAdapters))throw new TypeError("'activeLoraAdapters' must be an array.");c=u.activeLoraAdapters.map(y=>{if(!(y instanceof Vp))throw new TypeError("'activeLoraAdapters' must be an array of LoraAdapter objects.");if(y.backend!==this.backend)throw new Error("LoRA adapter was created by a different backend than the session.");return y.handler})}let f=await this.handler.run(t,o,u,c),m={};for(let y in f)if(Object.hasOwnProperty.call(f,y)){let w=f[y];w instanceof Gr?m[y]=w:m[y]=new Gr(w.type,w.data,w.dims)}return Xi("InferenceSession.run"),gr(),m}async release(){return this.handler.dispose()}static async create(t,i,s,o){Cr(),Yi("InferenceSession.create");let u,d={};if(typeof t=="string"){if(u=t,typeof i=="object"&&i!==null)d=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof Uint8Array){if(u=t,typeof i=="object"&&i!==null)d=i;else if(typeof i<"u")throw new TypeError("'options' must be an object.")}else if(t instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&t instanceof SharedArrayBuffer){let y=t,w=0,$=t.byteLength;if(typeof i=="object"&&i!==null)d=i;else if(typeof i=="number"){if(w=i,!Number.isSafeInteger(w))throw new RangeError("'byteOffset' must be an integer.");if(w<0||w>=y.byteLength)throw new RangeError(`'byteOffset' is out of range [0, ${y.byteLength}).`);if($=t.byteLength-w,typeof s=="number"){if($=s,!Number.isSafeInteger($))throw new RangeError("'byteLength' must be an integer.");if($<=0||w+$>y.byteLength)throw new RangeError(`'byteLength' is out of range (0, ${y.byteLength-w}].`);if(typeof o=="object"&&o!==null)d=o;else if(typeof o<"u")throw new TypeError("'options' must be an object.")}else if(typeof s<"u")throw new TypeError("'byteLength' must be a number.")}else if(typeof i<"u")throw new TypeError("'options' must be an object.");u=new Uint8Array(y,w,$)}else throw new TypeError("Unexpected argument[0]: must be 'path' or 'buffer'.");let[c,f]=await K0(d),m=await c.createInferenceSessionHandler(u,f);return Xi("InferenceSession.create"),gr(),new pv(m,c)}startProfiling(){this.handler.startProfiling()}endProfiling(){this.handler.endProfiling()}get inputNames(){return this.handler.inputNames}get outputNames(){return this.handler.outputNames}get inputMetadata(){return this.handler.inputMetadata}get outputMetadata(){return this.handler.outputMetadata}}}),qp,n$=ae(()=>{"use strict";r$(),qp=cv}),fv,i$=ae(()=>{"use strict";X0(),fv=Vp}),a$=ae(()=>{"use strict"}),s$=ae(()=>{"use strict"}),o$=ae(()=>{"use strict"}),u$=ae(()=>{"use strict"}),l$={};us(l$,{InferenceSession:()=>qp,LoraAdapter:()=>fv,TRACE:()=>Ol,TRACE_EVENT_BEGIN:()=>Yi,TRACE_EVENT_END:()=>Xi,TRACE_FUNC_BEGIN:()=>Cr,TRACE_FUNC_END:()=>gr,Tensor:()=>Gr,env:()=>dt,registerBackend:()=>is});var vr=ae(()=>{"use strict";Q2(),Y2(),n$(),i$(),dv(),a$(),s$(),Wp(),o$(),u$()}),Hp=ae(()=>{"use strict"}),hv={};us(hv,{default:()=>mv});var Ec,Tc,mv,d$=ae(()=>{"use strict";var e;S_(),ra(),Gp(),Ec="ort-wasm-proxy-worker",Tc=((e=globalThis.self)==null?void 0:e.name)===Ec,Tc&&(self.onmessage=t=>{let{type:i,in:s}=t.data;try{switch(i){case"init-wasm":Kp(s.wasm).then(()=>{pf(s).then(()=>{postMessage({type:i})},o=>{postMessage({type:i,err:o})})},o=>{postMessage({type:i,err:o})});break;case"init-ep":{let{epName:o,env:u}=s;ff(u,o).then(()=>{postMessage({type:i})},d=>{postMessage({type:i,err:d})});break}case"copy-from":{let{buffer:o}=s,u=Ll(o);postMessage({type:i,out:u});break}case"create":{let{model:o,options:u}=s;hf(o,u).then(d=>{postMessage({type:i,out:d})},d=>{postMessage({type:i,err:d})});break}case"release":mf(s),postMessage({type:i});break;case"run":{let{sessionId:o,inputIndices:u,inputs:d,outputIndices:c,options:f}=s;gf(o,u,d,c,new Array(c.length).fill(null),f).then(m=>{m.some(y=>y[3]!=="cpu")?postMessage({type:i,err:"Proxy does not support non-cpu tensor location."}):postMessage({type:i,out:m},vf([...d,...m]))},m=>{postMessage({type:i,err:m})});break}case"end-profiling":yf(s),postMessage({type:i});break;default:}}catch(o){postMessage({type:i,err:o})}}),mv=Tc?null:t=>new Worker(t??hr,{type:"module",name:Ec})}),gv={};us(gv,{default:()=>yv});async function sm(e={}){var co,Au;var t=e,i=!!globalThis.window,s=!!globalThis.WorkerGlobalScope,o=s&&((co=self.name)==null?void 0:co.startsWith("em-pthread"));t.mountExternalData=(p,g)=>{p.startsWith("./")&&(p=p.substring(2)),(t.jd||(t.jd=new Map)).set(p,g)},t.unmountExternalData=()=>{delete t.jd,delete t.ke,delete t.je,delete t.le},globalThis.SharedArrayBuffer??new WebAssembly.Memory({initial:0,maximum:0,shared:!0}).buffer.constructor;let u=p=>async(...g)=>{var x;try{if(t.hd)throw Error("Session already started");let _=t.hd={Vd:g[0],errors:[]},z=await p(...g);if(t.hd!==_)throw Error("Session mismatch");(x=t.pd)==null||x.flush();let R=_.errors;if(0<R.length){let j=await Promise.all(R);if(j=j.filter(Z=>Z),0<j.length)throw Error(j.join(`
`))}return z}finally{t.hd=null}};t.jsepInit=(p,g)=>{if(p==="webgpu"){[t.pd,t.Ld,t.Pd,t.rd,t.Od,t.ic,t.Qd,t.Sd,t.Md,t.Nd,t.Rd]=g;let x=t.pd;t.jsepRegisterBuffer=(_,z,R,j)=>x.registerBuffer(_,z,R,j),t.jsepGetBuffer=_=>x.getBuffer(_),t.jsepCreateDownloader=(_,z,R)=>x.createDownloader(_,z,R),t.jsepOnCreateSession=_=>{x.onCreateSession(_)},t.jsepOnReleaseSession=_=>{x.onReleaseSession(_)},t.jsepOnRunStart=_=>x.onRunStart(_),t.Td=(_,z)=>{x.upload(_,z)}}else if(p==="webnn"){let x=g[0];[t.ce,t.Cd,t.webnnEnsureTensor,t.Dd,t.webnnDownloadTensor,t.be,t.webnnEnableTraceEvent]=g.slice(1),t.webnnReleaseTensorId=t.Cd,t.webnnUploadTensor=t.Dd,t.webnnRegisterMLContext=t.be,t.webnnOnRunStart=_=>x.onRunStart(_),t.webnnOnRunEnd=x.onRunEnd.bind(x),t.webnnOnReleaseSession=_=>{x.onReleaseSession(_)},t.webnnCreateMLTensorDownloader=(_,z)=>x.createMLTensorDownloader(_,z),t.webnnRegisterMLTensor=(_,z,R,j)=>x.registerMLTensor(_,z,R,j),t.webnnCreateMLContext=_=>x.createMLContext(_),t.webnnRegisterGraphInput=x.registerGraphInput.bind(x),t.webnnIsGraphInput=x.isGraphInput.bind(x),t.webnnRegisterGraphOutput=x.registerGraphOutput.bind(x),t.webnnIsGraphOutput=x.isGraphOutput.bind(x),t.webnnCreateTemporaryTensor=x.createTemporaryTensor.bind(x),t.webnnIsGraphInputOutputTypeSupported=x.isGraphInputOutputTypeSupported.bind(x)}};let d=()=>{let p=g=>(...x)=>{let _=jt;return x=g(...x),jt!=_?new Promise((z,R)=>{Pn={resolve:z,reject:R}}):x};(g=>{for(let x of g)t[x]=p(t[x])})("_OrtAppendExecutionProvider _OrtAppendExecutionProviderV2 _OrtCreateSession _OrtRun _OrtRunWithBinding _OrtBindInput".split(" ")),u!==void 0&&(t._OrtRun=u(t._OrtRun),t._OrtRunWithBinding=u(t._OrtRunWithBinding)),d=void 0};t.asyncInit=()=>{d==null||d()};var c,f,m=(p,g)=>{throw g},y=import.meta.url,w="";if(i||s){try{w=new URL(".",y).href}catch{}s&&(f=p=>{var g=new XMLHttpRequest;return g.open("GET",p,!1),g.responseType="arraybuffer",g.send(null),new Uint8Array(g.response)}),c=async p=>{if(V(p))return new Promise((x,_)=>{var z=new XMLHttpRequest;z.open("GET",p,!0),z.responseType="arraybuffer",z.onload=()=>{z.status==200||z.status==0&&z.response?x(z.response):_(z.status)},z.onerror=_,z.send(null)});var g=await fetch(p,{credentials:"same-origin"});if(g.ok)return g.arrayBuffer();throw Error(g.status+" : "+g.url)}}var $,S,b,C,N,k,E=console.log.bind(console),A=console.error.bind(console),D=E,B=A,P=!1,V=p=>p.startsWith("file://");function I(){Kt.buffer!=te.buffer&&F()}if(o){let p=function(g){try{var x=g.data,_=x.bd;if(_==="load"){let z=[];self.onmessage=R=>z.push(R),k=()=>{postMessage({bd:"loaded"});for(let R of z)p(R);self.onmessage=p};for(let R of x.Hd)t[R]&&!t[R].proxy||(t[R]=(...j)=>{postMessage({bd:"callHandler",Fd:R,args:j})},R=="print"&&(D=t[R]),R=="printErr"&&(B=t[R]));Kt=x.Zd,F(),S=x.$d,$e(),ti()}else if(_==="run"){(function(z){var R=(I(),me)[z+52>>>2>>>0];z=(I(),me)[z+56>>>2>>>0],Ls(R,R-z),Le(R)})(x.ad),hn(x.ad,0,0,1,0,0),Mt(),ha(x.ad),Y||(yu(),Y=!0);try{gi(x.Xd,x.nd)}catch(z){if(z!="unwind")throw z}}else x.target!=="setimmediate"&&(_==="checkMailbox"?Y&&Mn():_&&(B(`worker: received unknown command ${_}`),B(x)))}catch(z){throw vu(),z}};var Y=!1;self.onunhandledrejection=g=>{throw g.reason||g},self.onmessage=p}var te,he,ce,pe,G,me,ye,ge,ee,re,se,O=!1;function F(){var p=Kt.buffer;t.HEAP8=te=new Int8Array(p),ce=new Int16Array(p),t.HEAPU8=he=new Uint8Array(p),pe=new Uint16Array(p),t.HEAP32=G=new Int32Array(p),t.HEAPU32=me=new Uint32Array(p),ye=new Float32Array(p),ge=new Float64Array(p),ee=new BigInt64Array(p),re=new BigUint64Array(p)}function ne(){O=!0,o?k():Rr.vb()}function X(p){throw B(p="Aborted("+p+")"),P=!0,p=new WebAssembly.RuntimeError(p+". Build with -sASSERTIONS for more info."),N==null||N(p),p}function ve(){return{a:{na:no,jb:ja,g:yi,G:Wl,f:ps,o:fs,h:hs,$:ms,b:zn,S:Nn,Ja:ys,n:qo,aa:On,_a:aa,Fa:An,Ha:Ho,$a:Rn,Ya:wi,Ra:_i,Xa:sa,la:Go,Ga:Ko,Da:Qo,Za:Kr,Ea:_s,eb:Zo,ga:Vl,ya:gt,wa:xr,fa:dr,N:ql,I:Hl,xa:pa,_:$i,za:Ql,Ua:bs,Ba:tu,Ka:ru,ua:Ss,ha:ga,Ta:ha,bb:Zr,Q:xi,r:_a,c:la,kb:ks,y:ou,M:Xr,D:Es,m:$a,s:Ts,lb:xa,J:ba,R:uu,j:Qt,u:jn,q:Cs,k:bi,Oa:Xl,Pa:Ea,Qa:lu,Ma:du,Na:cu,va:pu,gb:Jl,db:td,v:rd,ba:nd,ia:id,cb:ed,V:ad,ab:Os,Ca:sd,F:Is,U:od,ma:Ta,Aa:ld,ib:ud,hb:dd,Va:Vn,Wa:hu,Ia:St,T:Ds,La:Ms,ka:Bs,Sa:Ps,ja:fn,nb:Mr,oa:Va,ob:Ou,pa:Vt,H:Wa,e:pd,t:ao,w:io,B:uo,pb:Wt,Z:It,x:oo,qa:wn,X:zu,ca:tn,qb:ot,ea:fd,O:md,sb:Jn,ra:ut,tb:lo,L:Ai,Y:ei,d:so,A:hd,l:Cu,mb:qa,p:Iu,z:Yn,C:Jr,E:br,K:gd,sa:Xn,P:Nu,da:vn,W:Fa,ub:Dr,ta:Oi,rb:en,i:cd,a:Kt,fb:rt}}}async function $e(){function p(_,z){var R=Rr=_.exports;_={};for(let[j,Z]of Object.entries(R))typeof Z=="function"?(R=Yr(Z),_[j]=R):_[j]=Z;return Rr=_,Rr=(function(){var j=Rr,Z=fe=>ze=>fe(ze)>>>0,ue=fe=>()=>fe()>>>0;return(j=Object.assign({},j)).wb=Z(j.wb),j.ec=ue(j.ec),j.gc=Z(j.gc),j.uc=Z(j.uc),j.vc=ue(j.vc),j.zc=Z(j.zc),j})(),We.push(Rr.hc),gu=(_=Rr).wb,yu=_.xb,t._OrtInit=_.yb,t._OrtGetLastError=_.zb,t._OrtCreateSessionOptions=_.Ab,t._OrtAppendExecutionProvider=_.Bb,t._OrtGetEpDevices=_.Cb,t._OrtEpDevice_EpName=_.Db,t._OrtAppendExecutionProviderV2=_.Eb,t._OrtAddFreeDimensionOverride=_.Fb,t._OrtAddSessionConfigEntry=_.Gb,t._OrtReleaseSessionOptions=_.Hb,t._OrtCreateSession=_.Ib,t._OrtReleaseSession=_.Jb,t._OrtGetInputOutputCount=_.Kb,t._OrtGetInputOutputMetadata=_.Lb,t._OrtFree=_.Mb,t._OrtCreateTensor=_.Nb,t._OrtGetTensorData=_.Ob,t._OrtReleaseTensor=_.Pb,t._OrtCreateLoraAdapter=_.Qb,t._OrtReleaseLoraAdapter=_.Rb,t._OrtCreateRunOptions=_.Sb,t._OrtAddRunConfigEntry=_.Tb,t._OrtRunOptionsAddActiveLoraAdapter=_.Ub,t._OrtReleaseRunOptions=_.Vb,t._OrtCreateBinding=_.Wb,t._OrtBindInput=_.Xb,t._OrtBindOutput=_.Yb,t._OrtClearBoundOutputs=_.Zb,t._OrtReleaseBinding=_._b,t._OrtRunWithBinding=_.$b,t._OrtRun=_.ac,t._OrtEndProfiling=_.bc,t._JsepOutput=_.cc,t._JsepGetNodeName=_.dc,Ei=_.ec,pr=t._free=_.fc,Or=t._malloc=_.gc,hn=_.jc,vu=_.kc,Ti=_.lc,wu=_.mc,Ia=_.nc,za=_.oc,Na=_.pc,Ue=_.qc,Fn=_.rc,Ls=_.sc,Le=_.tc,Us=_.uc,je=_.vc,_u=_.wc,js=_.xc,rr=_.yc,qn=_.zc,Ws=_.Ac,Oa=_.Bc,Vs=_.Cc,Fs=_.Dc,Aa=_.Ec,$u=_.Fc,xu=_.Gc,mn=_.Hc,Ra=_.Ic,Hn=_.Jc,Da=_.Kc,qs=_.Lc,Ci=_.Mc,gn=_.Nc,Ma=_.Oc,Hs=_.Pc,Ii=_.Qc,Gs=_.Rc,Ks=_.Sc,Qs=_.Tc,Zs=_.Uc,Ys=_.Vc,Xs=_.Wc,Ar=_.Xc,Ba=_.Yc,Pa=_._c,bu=_.$c,Su=_.kd,Gn=_.ld,ku=_.qd,Js=_.vd,eo=_.wd,st=_.xd,La=_.yd,zi=_.zd,Kn=_.Ad,to=_.Bd,Ua=_.Gd,Qn=_.Jd,Ni=_.fe,yn=_.ge,ro=_.he,Eu=_.ie,S=z,Rr}var g,x=ve();return t.instantiateWasm?new Promise(_=>{t.instantiateWasm(x,(z,R)=>{_(p(z,R))})}):o?p(new WebAssembly.Instance(S,ve()),S):(se??(se=t.locateFile?t.locateFile?t.locateFile("ort-wasm-simd-threaded.jsep.wasm",w):w+"ort-wasm-simd-threaded.jsep.wasm":new URL("/assets/ort-wasm-simd-threaded.jsep-Dt5UNR3U.wasm",import.meta.url).href),g=await(async function(_){var z=se;if(!$&&!V(z))try{var R=fetch(z,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(R,_)}catch(j){B(`wasm streaming compile failed: ${j}`),B("falling back to ArrayBuffer instantiation")}return(async function(j,Z){try{var ue=await(async function(fe){if(!$)try{var ze=await c(fe);return new Uint8Array(ze)}catch{}if(fe==se&&$)fe=new Uint8Array($);else{if(!f)throw"both async and sync fetching of the wasm failed";fe=f(fe)}return fe})(j);return await WebAssembly.instantiate(ue,Z)}catch(fe){B(`failed to asynchronously prepare wasm: ${fe}`),X(fe)}})(z,_)})(x),p(g.instance,g.module))}class Te{constructor(g){Kh(this,"name","ExitStatus");this.message=`Program terminated with exit(${g})`,this.status=g}}var Re=p=>{p.terminate(),p.onmessage=()=>{}},Ae=[],ct=0,er=null,Dt=p=>{Gt.length==0&&(In(),ur(Gt[0]));var g=Gt.pop();if(!g)return 6;De.push(g),Ge[p.ad]=g,g.ad=p.ad;var x={bd:"run",Xd:p.Wd,nd:p.nd,ad:p.ad};return g.postMessage(x,p.ud),0},pt=0,Ve=(p,g,...x)=>{var _,z=16*x.length,R=je(),j=Us(z),Z=j>>>3;for(_ of x)typeof _=="bigint"?((I(),ee)[Z++>>>0]=1n,(I(),ee)[Z++>>>0]=_):((I(),ee)[Z++>>>0]=0n,(I(),ge)[Z++>>>0]=_);return p=Ti(p,0,z,j,g),Le(R),p};function rt(p){if(o)return Ve(0,1,p);if(b=p,!(0<pt)){for(var g of De)Re(g);for(g of Gt)Re(g);Gt=[],De=[],Ge={},P=!0}m(0,new Te(p))}function at(p){if(o)return Ve(1,0,p);St(p)}var St=p=>{if(b=p,o)throw at(p),"unwind";rt(p)},Gt=[],De=[],We=[],Ge={},xt=p=>{var g=p.ad;delete Ge[g],Gt.push(p),De.splice(De.indexOf(p),1),p.ad=0,wu(g)};function Mt(){We.forEach(p=>p())}var ur=p=>new Promise(g=>{p.onmessage=z=>{var R=z.data;if(z=R.bd,R.md&&R.md!=Ei()){var j=Ge[R.md];j?j.postMessage(R,R.ud):B(`Internal error! Worker sent a message "${z}" to target pthread ${R.md}, but that thread no longer exists!`)}else z==="checkMailbox"?Mn():z==="spawnThread"?Dt(R):z==="cleanupThread"?Ze(()=>{xt(Ge[R.Yd])}):z==="loaded"?(p.loaded=!0,g(p)):R.target==="setimmediate"?p.postMessage(R):z==="uncaughtException"?p.onerror(R.error):z==="callHandler"?t[R.Fd](...R.args):z&&B(`worker sent an unknown command ${z}`)},p.onerror=z=>{throw B(`worker sent an error! ${z.filename}:${z.lineno}: ${z.message}`),z};var x,_=[];for(x of[])t.propertyIsEnumerable(x)&&_.push(x);p.postMessage({bd:"load",Hd:_,Zd:Kt,$d:S})});function In(){var p=new Worker((()=>{let g=URL;return import.meta.url>"file:"&&import.meta.url<"file;"?new g("ort.bundle.min.mjs",import.meta.url):new URL(import.meta.url)})(),{type:"module",workerData:"em-pthread",name:"em-pthread"});Gt.push(p)}var Kt,gi=(p,g)=>{pt=0,p=Oa(p,g),0<pt?b=p:Ia(p)},Ir=[],un=0;function yi(p){var g=new cs(p>>>=0);return(I(),te)[g.cd+12>>>0]==0&&(ls(g,!0),un--),ds(g,!1),Ir.push(g),qn(p)}var wr=0,Wl=()=>{Ue(0,0);var p=Ir.pop();_u(p.od),wr=0};function ls(p,g){g=g?1:0,(I(),te)[p.cd+12>>>0]=g}function ds(p,g){g=g?1:0,(I(),te)[p.cd+13>>>0]=g}class cs{constructor(g){this.od=g,this.cd=g-24}}var vi=p=>{var g=wr;if(!g)return Fn(0),0;var x=new cs(g);(I(),me)[x.cd+16>>>2>>>0]=g;var _=(I(),me)[x.cd+4>>>2>>>0];if(!_)return Fn(0),g;for(var z of p){if(z===0||z===_)break;if(rr(z,_,x.cd+16))return Fn(z),g}return Fn(_),g};function ps(){return vi([])}function fs(p){return vi([p>>>0])}function hs(p,g,x,_){return vi([p>>>0,g>>>0,x>>>0,_>>>0])}var ms=()=>{var p=Ir.pop();p||X("no exception to throw");var g=p.od;throw(I(),te)[p.cd+13>>>0]==0&&(Ir.push(p),ds(p,!0),ls(p,!1),un++),js(g),wr=g};function zn(p,g,x){var _=new cs(p>>>=0);throw g>>>=0,x>>>=0,(I(),me)[_.cd+16>>>2>>>0]=0,(I(),me)[_.cd+4>>>2>>>0]=g,(I(),me)[_.cd+8>>>2>>>0]=x,js(p),un++,wr=p}var Nn=()=>un;function gs(p,g,x,_){return o?Ve(2,1,p,g,x,_):ys(p,g,x,_)}function ys(p,g,x,_){if(p>>>=0,g>>>=0,x>>>=0,_>>>=0,!globalThis.SharedArrayBuffer)return 6;var z=[];return o&&z.length===0?gs(p,g,x,_):(p={Wd:x,ad:p,nd:_,ud:z},o?(p.bd="spawnThread",postMessage(p,z),0):Dt(p))}function qo(p){throw wr||(wr=p>>>0),wr}var vs=globalThis.TextDecoder&&new TextDecoder,ws=(p,g,x,_)=>{if(x=g+x,_)return x;for(;p[g]&&!(g>=x);)++g;return g},ia=(p,g=0,x,_)=>{if(16<(x=ws(p,g>>>=0,x,_))-g&&p.buffer&&vs)return vs.decode(p.buffer instanceof ArrayBuffer?p.subarray(g,x):p.slice(g,x));for(_="";g<x;){var z=p[g++];if(128&z){var R=63&p[g++];if((224&z)==192)_+=String.fromCharCode((31&z)<<6|R);else{var j=63&p[g++];65536>(z=(240&z)==224?(15&z)<<12|R<<6|j:(7&z)<<18|R<<12|j<<6|63&p[g++])?_+=String.fromCharCode(z):(z-=65536,_+=String.fromCharCode(55296|z>>10,56320|1023&z))}}else _+=String.fromCharCode(z)}return _},ft=(p,g,x)=>(p>>>=0)?ia((I(),he),p,g,x):"";function On(p,g,x){return o?Ve(3,1,p,g,x):0}function aa(p,g){if(o)return Ve(4,1,p,g)}function An(p,g){if(o)return Ve(5,1,p,g)}function Ho(p,g,x){if(o)return Ve(6,1,p,g,x)}function Rn(p,g,x){return o?Ve(7,1,p,g,x):0}function wi(p,g){if(o)return Ve(8,1,p,g)}function _i(p,g,x){if(o)return Ve(9,1,p,g,x)}function sa(p,g,x,_){if(o)return Ve(10,1,p,g,x,_)}function Go(p,g,x,_){if(o)return Ve(11,1,p,g,x,_)}function Ko(p,g,x,_){if(o)return Ve(12,1,p,g,x,_)}function Qo(p){if(o)return Ve(13,1,p)}function Kr(p,g){if(o)return Ve(14,1,p,g)}function _s(p,g,x){if(o)return Ve(15,1,p,g,x)}var Zo=()=>X(""),_r=p=>{p>>>=0;for(var g="";;){var x=(I(),he)[p++>>>0];if(!x)return g;g+=String.fromCharCode(x)}},oa={},ua={},ln=class extends Error{constructor(p){super(p),this.name="BindingError"}};function $r(p,g,x={}){return(function(_,z,R={}){var j=z.name;if(!_)throw new ln(`type "${j}" must have a positive integer typeid pointer`);if(ua.hasOwnProperty(_)){if(R.Id)return;throw new ln(`Cannot register type '${j}' twice`)}ua[_]=z,oa.hasOwnProperty(_)&&(z=oa[_],delete oa[_],z.forEach(Z=>Z()))})(p,g,x)}var Yo=(p,g,x)=>{switch(g){case 1:return x?_=>(I(),te)[_>>>0]:_=>(I(),he)[_>>>0];case 2:return x?_=>(I(),ce)[_>>>1>>>0]:_=>(I(),pe)[_>>>1>>>0];case 4:return x?_=>(I(),G)[_>>>2>>>0]:_=>(I(),me)[_>>>2>>>0];case 8:return x?_=>(I(),ee)[_>>>3>>>0]:_=>(I(),re)[_>>>3>>>0];default:throw new TypeError(`invalid integer width (${g}): ${p}`)}};function Vl(p,g,x,_,z){p>>>=0,x>>>=0,g=_r(g>>>0);let R=j=>j;if(_=_===0n){let j=8*x;R=Z=>BigInt.asUintN(j,Z),z=R(z)}$r(p,{name:g,Zc:R,ed:(j,Z)=>(typeof Z=="number"&&(Z=BigInt(Z)),Z),dd:Yo(g,x,!_),gd:null})}function gt(p,g,x,_){$r(p>>>=0,{name:g=_r(g>>>0),Zc:function(z){return!!z},ed:function(z,R){return R?x:_},dd:function(z){return this.Zc((I(),he)[z>>>0])},gd:null})}var Xo=[],zr=[0,1,,1,null,1,!0,1,!1,1];function la(p){9<(p>>>=0)&&--zr[p+1]===0&&(zr[p]=void 0,Xo.push(p))}var Bt=p=>{if(!p)throw new ln(`Cannot use deleted val. handle = ${p}`);return zr[p]},lr=p=>{switch(p){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:let g=Xo.pop()||zr.length;return zr[g]=p,zr[g+1]=1,g}};function da(p){return this.Zc((I(),me)[p>>>2>>>0])}var ca={name:"emscripten::val",Zc:p=>{var g=Bt(p);return la(p),g},ed:(p,g)=>lr(g),dd:da,gd:null};function xr(p){return $r(p>>>0,ca)}var Fl=(p,g)=>{switch(g){case 4:return function(x){return this.Zc((I(),ye)[x>>>2>>>0])};case 8:return function(x){return this.Zc((I(),ge)[x>>>3>>>0])};default:throw new TypeError(`invalid float width (${g}): ${p}`)}};function dr(p,g,x){x>>>=0,$r(p>>>=0,{name:g=_r(g>>>0),Zc:_=>_,ed:(_,z)=>z,dd:Fl(g,x),gd:null})}function ql(p,g,x,_,z){p>>>=0,x>>>=0,g=_r(g>>>0);let R=Z=>Z;if(_===0){var j=32-8*x;R=Z=>Z<<j>>>j,z=R(z)}$r(p,{name:g,Zc:R,ed:(Z,ue)=>ue,dd:Yo(g,x,_!==0),gd:null})}function Hl(p,g,x){function _(R){var j=(I(),me)[R>>>2>>>0];return R=(I(),me)[R+4>>>2>>>0],new z((I(),te).buffer,R,j)}var z=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][g];$r(p>>>=0,{name:x=_r(x>>>0),Zc:_,dd:_},{Id:!0})}var Qr=(p,g,x)=>{var _=(I(),he);if(g>>>=0,0<x){var z=g;x=g+x-1;for(var R=0;R<p.length;++R){var j=p.codePointAt(R);if(127>=j){if(g>=x)break;_[g++>>>0]=j}else if(2047>=j){if(g+1>=x)break;_[g++>>>0]=192|j>>6,_[g++>>>0]=128|63&j}else if(65535>=j){if(g+2>=x)break;_[g++>>>0]=224|j>>12,_[g++>>>0]=128|j>>6&63,_[g++>>>0]=128|63&j}else{if(g+3>=x)break;_[g++>>>0]=240|j>>18,_[g++>>>0]=128|j>>12&63,_[g++>>>0]=128|j>>6&63,_[g++>>>0]=128|63&j,R++}}_[g>>>0]=0,p=g-z}else p=0;return p},dn=p=>{for(var g=0,x=0;x<p.length;++x){var _=p.charCodeAt(x);127>=_?g++:2047>=_?g+=2:55296<=_&&57343>=_?(g+=4,++x):g+=3}return g};function pa(p,g){$r(p>>>=0,{name:g=_r(g>>>0),Zc(x){var _=(I(),me)[x>>>2>>>0];return _=ft(x+4,_,!0),pr(x),_},ed(x,_){_ instanceof ArrayBuffer&&(_=new Uint8Array(_));var z=typeof _=="string";if(!(z||ArrayBuffer.isView(_)&&_.BYTES_PER_ELEMENT==1))throw new ln("Cannot pass non-string to std::string");var R=z?dn(_):_.length,j=Or(4+R+1),Z=j+4;return(I(),me)[j>>>2>>>0]=R,z?Qr(_,Z,R+1):(I(),he).set(_,Z>>>0),x!==null&&x.push(pr,j),j},dd:da,gd(x){pr(x)}})}var Dn=globalThis.TextDecoder?new TextDecoder("utf-16le"):void 0,fa=(p,g,x)=>{if(p>>>=1,16<(g=ws((I(),pe),p,g/2,x))-p&&Dn)return Dn.decode((I(),pe).slice(p,g));for(x="";p<g;++p){var _=(I(),pe)[p>>>0];x+=String.fromCharCode(_)}return x},Gl=(p,g,x)=>{if(x??(x=2147483647),2>x)return 0;var _=g;x=(x-=2)<2*p.length?x/2:p.length;for(var z=0;z<x;++z){var R=p.charCodeAt(z);(I(),ce)[g>>>1>>>0]=R,g+=2}return(I(),ce)[g>>>1>>>0]=0,g-_},Kl=p=>2*p.length,$s=(p,g,x)=>{var _="";p>>>=2;for(var z=0;!(z>=g/4);z++){var R=(I(),me)[p+z>>>0];if(!R&&!x)break;_+=String.fromCodePoint(R)}return _},Jo=(p,g,x)=>{if(g>>>=0,x??(x=2147483647),4>x)return 0;var _=g;x=_+x-4;for(var z=0;z<p.length;++z){var R=p.codePointAt(z);if(65535<R&&z++,(I(),G)[g>>>2>>>0]=R,(g+=4)+4>x)break}return(I(),G)[g>>>2>>>0]=0,g-_},xs=p=>{for(var g=0,x=0;x<p.length;++x)65535<p.codePointAt(x)&&x++,g+=4;return g};function $i(p,g,x){if(p>>>=0,g>>>=0,x=_r(x>>>=0),g===2)var _=fa,z=Gl,R=Kl;else _=$s,z=Jo,R=xs;$r(p,{name:x,Zc:j=>{var Z=(I(),me)[j>>>2>>>0];return Z=_(j+4,Z*g,!0),pr(j),Z},ed:(j,Z)=>{if(typeof Z!="string")throw new ln(`Cannot pass non-string to C++ string type ${x}`);var ue=R(Z),fe=Or(4+ue+g);return(I(),me)[fe>>>2>>>0]=ue/g,z(Z,fe+4,ue+g),j!==null&&j.push(pr,fe),fe},dd:da,gd(j){pr(j)}})}function Ql(p,g){$r(p>>>=0,{Kd:!0,name:g=_r(g>>>0),Zc:()=>{},ed:()=>{}})}function bs(p){hn(p>>>0,!s,1,!i,131072,!1),Mt()}var Ze=p=>{if(!P)try{if(p(),!(0<pt))try{o?Ei()&&Ia(b):St(b)}catch(g){g instanceof Te||g=="unwind"||m(0,g)}}catch(g){g instanceof Te||g=="unwind"||m(0,g)}},eu=!Atomics.waitAsync||((Au=globalThis.navigator)==null?void 0:Au.userAgent)&&91>Number((navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)||[])[2]);function ha(p){p>>>=0,eu||(Atomics.waitAsync((I(),G),p>>>2,p).value.then(Mn),p+=128,Atomics.store((I(),G),p>>>2,1))}var Mn=()=>Ze(()=>{var p=Ei();p&&(ha(p),Na())});function tu(p,g){(p>>>=0)==g>>>0?setTimeout(Mn):o?postMessage({md:p,bd:"checkMailbox"}):(p=Ge[p])&&p.postMessage({bd:"checkMailbox"})}var ma=[];function ru(p,g,x,_,z){for(g>>>=0,z>>>=0,ma.length=0,x=z>>>3,_=z+_>>>3;x<_;){var R;R=(I(),ee)[x++>>>0]?(I(),ee)[x++>>>0]:(I(),ge)[x++>>>0],ma.push(R)}return(g?Zn[g]:Tu[p])(...ma)}var Ss=()=>{pt=0};function ga(p){p>>>=0,o?postMessage({bd:"cleanupThread",Yd:p}):xt(Ge[p])}function Zr(p){}var cr=p=>{try{p()}catch(g){X(g)}};function Yr(p){var g=(...x)=>{ya.push(p);try{return p(...x)}finally{P||(ya.pop(),jt&&tr===1&&ya.length===0&&(tr=0,pt+=1,cr(yn),typeof Fibers<"u"&&Fibers.ne()))}};return nu.set(p,g),g}var tr=0,jt=null,Nr=0,ya=[],va=new Map,Bn=new Map,nu=new Map,iu=0,Pn=null,au=[],su=p=>(function(g){if(!P){if(tr===0){var x=!1,_=!1;g((z=0)=>{if(!P&&(Nr=z,x=!0,_)){tr=2,cr(()=>ro(jt)),typeof MainLoop<"u"&&MainLoop.Ed&&MainLoop.resume(),z=!1;try{var R=(function(){var ue=(I(),G)[jt+8>>>2>>>0];return ue=Bn.get(ue),ue=nu.get(ue),--pt,ue()})()}catch(ue){R=ue,z=!0}var j=!1;if(!jt){var Z=Pn;Z&&(Pn=null,(z?Z.reject:Z.resolve)(R),j=!0)}if(z&&!j)throw R}}),_=!0,x||(tr=1,jt=(function(){var z=Or(65548),R=z+12;if((I(),me)[z>>>2>>>0]=R,(I(),me)[z+4>>>2>>>0]=R+65536,R=ya[0],!va.has(R)){var j=iu++;va.set(R,j),Bn.set(j,R)}return R=va.get(R),(I(),G)[z+8>>>2>>>0]=R,z})(),typeof MainLoop<"u"&&MainLoop.Ed&&MainLoop.pause(),cr(()=>Ni(jt)))}else tr===2?(tr=0,cr(Eu),pr(jt),jt=null,au.forEach(Ze)):X(`invalid state: ${tr}`);return Nr}})(g=>{p().then(g)});function xi(p){return p>>>=0,su(async()=>{var g=await Bt(p);return lr(g)})}var cn=[],Ln=p=>{var g=cn.length;return cn.push(p),g},wa=(p,g)=>{for(var x=Array(p),_=0;_<p;++_){var z=_,R=(I(),me)[g+4*_>>>2>>>0],j=ua[R];if(j===void 0)throw p=`parameter ${_}`,R=gu(R),g=_r(R),pr(R),new ln(`${p} has unknown type ${g}`);x[z]=j}return x},Zl=(p,g,x)=>{var _=[];return p=p(_,x),_.length&&((I(),me)[g>>>2>>>0]=lr(_)),p},Yl={},Un=p=>{var g=Yl[p];return g===void 0?_r(p):g};function _a(p,g,x){var[_,...z]=wa(p,g>>>0);g=_.ed.bind(_);var R=z.map(ue=>ue.dd.bind(ue));p--;var j={toValue:Bt};switch(p=R.map((ue,fe)=>{var ze=`argFromPtr${fe}`;return j[ze]=ue,`${ze}(args${fe?"+"+8*fe:""})`}),x){case 0:var Z="toValue(handle)";break;case 2:Z="new (toValue(handle))";break;case 3:Z="";break;case 1:j.getStringOrSymbol=Un,Z="toValue(handle)[getStringOrSymbol(methodName)]"}return Z+=`(${p})`,_.Kd||(j.toReturnWire=g,j.emval_returnValue=Zl,Z=`return emval_returnValue(toReturnWire, destructorsRef, ${Z})`),Z=`return function (handle, methodName, destructorsRef, args) {
  ${Z}
  }`,x=new Function(Object.keys(j),Z)(...Object.values(j)),Z=`methodCaller<(${z.map(ue=>ue.name)}) => ${_.name}>`,Ln(Object.defineProperty(x,"name",{value:Z}))}function ks(p,g){return g>>>=0,(p=Bt(p>>>0))==Bt(g)}function ou(p){return(p>>>=0)?(p=Un(p),lr(globalThis[p])):lr(globalThis)}function Xr(p){return p=Un(p>>>0),lr(t[p])}function Es(p,g){return g>>>=0,p=Bt(p>>>0),g=Bt(g),lr(p[g])}function $a(p){9<(p>>>=0)&&(zr[p+1]+=1)}function Ts(p,g,x,_,z){return cn[p>>>0](g>>>0,x>>>0,_>>>0,z>>>0)}function xa(p,g,x,_,z){return Ts(p>>>0,g>>>0,x>>>0,_>>>0,z>>>0)}function ba(){return lr([])}function uu(p){p=Bt(p>>>0);for(var g=Array(p.length),x=0;x<p.length;x++)g[x]=p[x];return lr(g)}function Qt(p){return lr(Un(p>>>0))}function jn(){return lr({})}function Cs(p){for(var g=Bt(p>>>=0);g.length;){var x=g.pop();g.pop()(x)}la(p)}function bi(p,g,x){g>>>=0,x>>>=0,p=Bt(p>>>0),g=Bt(g),x=Bt(x),p[g]=x}function Xl(p,g){p=-9007199254740992>p||9007199254740992<p?NaN:Number(p),g>>>=0,p=new Date(1e3*p),(I(),G)[g>>>2>>>0]=p.getUTCSeconds(),(I(),G)[g+4>>>2>>>0]=p.getUTCMinutes(),(I(),G)[g+8>>>2>>>0]=p.getUTCHours(),(I(),G)[g+12>>>2>>>0]=p.getUTCDate(),(I(),G)[g+16>>>2>>>0]=p.getUTCMonth(),(I(),G)[g+20>>>2>>>0]=p.getUTCFullYear()-1900,(I(),G)[g+24>>>2>>>0]=p.getUTCDay(),p=(p.getTime()-Date.UTC(p.getUTCFullYear(),0,1,0,0,0,0))/864e5|0,(I(),G)[g+28>>>2>>>0]=p}var Sa=p=>p%4==0&&(p%100!=0||p%400==0),ka=[0,31,60,91,121,152,182,213,244,274,305,335],Wn=[0,31,59,90,120,151,181,212,243,273,304,334];function Ea(p,g){p=-9007199254740992>p||9007199254740992<p?NaN:Number(p),g>>>=0,p=new Date(1e3*p),(I(),G)[g>>>2>>>0]=p.getSeconds(),(I(),G)[g+4>>>2>>>0]=p.getMinutes(),(I(),G)[g+8>>>2>>>0]=p.getHours(),(I(),G)[g+12>>>2>>>0]=p.getDate(),(I(),G)[g+16>>>2>>>0]=p.getMonth(),(I(),G)[g+20>>>2>>>0]=p.getFullYear()-1900,(I(),G)[g+24>>>2>>>0]=p.getDay();var x=(Sa(p.getFullYear())?ka:Wn)[p.getMonth()]+p.getDate()-1|0;(I(),G)[g+28>>>2>>>0]=x,(I(),G)[g+36>>>2>>>0]=-60*p.getTimezoneOffset(),x=new Date(p.getFullYear(),6,1).getTimezoneOffset();var _=new Date(p.getFullYear(),0,1).getTimezoneOffset();p=0|(x!=_&&p.getTimezoneOffset()==Math.min(_,x)),(I(),G)[g+32>>>2>>>0]=p}function lu(p){p>>>=0;var g=new Date((I(),G)[p+20>>>2>>>0]+1900,(I(),G)[p+16>>>2>>>0],(I(),G)[p+12>>>2>>>0],(I(),G)[p+8>>>2>>>0],(I(),G)[p+4>>>2>>>0],(I(),G)[p>>>2>>>0],0),x=(I(),G)[p+32>>>2>>>0],_=g.getTimezoneOffset(),z=new Date(g.getFullYear(),6,1).getTimezoneOffset(),R=new Date(g.getFullYear(),0,1).getTimezoneOffset(),j=Math.min(R,z);return 0>x?(I(),G)[p+32>>>2>>>0]=+(z!=R&&j==_):0<x!=(j==_)&&(z=Math.max(R,z),g.setTime(g.getTime()+6e4*((0<x?j:z)-_))),(I(),G)[p+24>>>2>>>0]=g.getDay(),x=(Sa(g.getFullYear())?ka:Wn)[g.getMonth()]+g.getDate()-1|0,(I(),G)[p+28>>>2>>>0]=x,(I(),G)[p>>>2>>>0]=g.getSeconds(),(I(),G)[p+4>>>2>>>0]=g.getMinutes(),(I(),G)[p+8>>>2>>>0]=g.getHours(),(I(),G)[p+12>>>2>>>0]=g.getDate(),(I(),G)[p+16>>>2>>>0]=g.getMonth(),(I(),G)[p+20>>>2>>>0]=g.getYear(),p=g.getTime(),BigInt(isNaN(p)?-1:p/1e3)}function du(p,g,x,_,z,R,j){return o?Ve(16,1,p,g,x,_,z,R,j):-52}function cu(p,g,x,_,z,R){if(o)return Ve(17,1,p,g,x,_,z,R)}var Si={},Is=()=>performance.timeOrigin+performance.now();function pu(p,g){if(o)return Ve(18,1,p,g);if(Si[p]&&(clearTimeout(Si[p].id),delete Si[p]),!g)return 0;var x=setTimeout(()=>{delete Si[p],Ze(()=>za(p,performance.timeOrigin+performance.now()))},g);return Si[p]={id:x,me:g},0}function Jl(p,g,x,_){p>>>=0,g>>>=0,x>>>=0,_>>>=0;var z=new Date().getFullYear(),R=new Date(z,0,1).getTimezoneOffset();z=new Date(z,6,1).getTimezoneOffset();var j=Math.max(R,z);(I(),me)[p>>>2>>>0]=60*j,(I(),G)[g>>>2>>>0]=+(R!=z),p=(g=Z=>{var ue=Math.abs(Z);return`UTC${0<=Z?"-":"+"}${String(Math.floor(ue/60)).padStart(2,"0")}${String(ue%60).padStart(2,"0")}`})(R),g=g(z),z<R?(Qr(p,x,17),Qr(g,_,17)):(Qr(p,_,17),Qr(g,x,17))}var ed=()=>Date.now();function td(p,g,x){return x>>>=0,0<=p&&3>=p?(p===0?p=Date.now():p=performance.timeOrigin+performance.now(),p=Math.round(1e6*p),(I(),ee)[x>>>3>>>0]=BigInt(p),0):28}var zs=[],Ns=(p,g)=>{zs.length=0;for(var x;x=(I(),he)[p++>>>0];){var _=x!=105;g+=(_&=x!=112)&&g%8?4:0,zs.push(x==112?(I(),me)[g>>>2>>>0]:x==106?(I(),ee)[g>>>3>>>0]:x==105?(I(),G)[g>>>2>>>0]:(I(),ge)[g>>>3>>>0]),g+=_?8:4}return zs};function rd(p,g,x){return p>>>=0,g=Ns(g>>>0,x>>>0),Zn[p](...g)}function nd(p,g,x){return p>>>=0,g=Ns(g>>>0,x>>>0),Zn[p](...g)}var id=()=>{};function ad(p,g){return B(ft(p>>>0,g>>>0))}var Os=()=>{throw pt+=1,"unwind"};function sd(){return 4294901760}var od=()=>navigator.hardwareConcurrency,pn={},ki=p=>{var g;return(g=/\bwasm-function\[\d+\]:(0x[0-9a-f]+)/.exec(p))?+g[1]:(g=/:(\d+):\d+(?:\)|$)/.exec(p))?2147483648|+g[1]:0},fu=p=>{for(var g of p)(p=ki(g))&&(pn[p]=g)};function ud(){var p=Error().stack.toString().split(`
`);return p[0]=="Error"&&p.shift(),fu(p),pn.sd=ki(p[3]),pn.Ud=p,pn.sd}function Ta(p){if(!(p=pn[p>>>0]))return 0;var g;if(g=/^\s+at .*\.wasm\.(.*) \(.*\)$/.exec(p))p=g[1];else if(g=/^\s+at (.*) \(.*\)$/.exec(p))p=g[1];else{if(!(g=/^(.+?)@/.exec(p)))return 0;p=g[1]}pr(Ta.td??0),g=dn(p)+1;var x=Or(g);return x&&Qr(p,x,g),Ta.td=x,Ta.td}function ld(p){p>>>=0;var g=(I(),he).length;if(p<=g||4294901760<p)return!1;for(var x=1;4>=x;x*=2){var _=g*(1+.2/x);_=Math.min(_,p+100663296);e:{_=(Math.min(4294901760,65536*Math.ceil(Math.max(p,_)/65536))-Kt.buffer.byteLength+65535)/65536|0;try{Kt.grow(_),F();var z=1;break e}catch{}z=void 0}if(z)return!0}return!1}function dd(p,g,x){if(p>>>=0,g>>>=0,pn.sd==p)var _=pn.Ud;else(_=Error().stack.toString().split(`
`))[0]=="Error"&&_.shift(),fu(_);for(var z=3;_[z]&&ki(_[z])!=p;)++z;for(p=0;p<x&&_[p+z];++p)(I(),G)[g+4*p>>>2>>>0]=ki(_[p+z]);return p}var As,Rs={},Ca=()=>{var _;if(!As){var p,g={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(((_=globalThis.navigator)==null?void 0:_.language)??"C").replace("-","_")+".UTF-8",_:"./this.program"};for(p in Rs)Rs[p]===void 0?delete g[p]:g[p]=Rs[p];var x=[];for(p in g)x.push(`${p}=${g[p]}`);As=x}return As};function Vn(p,g){if(o)return Ve(19,1,p,g);p>>>=0,g>>>=0;var x,_=0,z=0;for(x of Ca()){var R=g+_;(I(),me)[p+z>>>2>>>0]=R,_+=Qr(x,R,1/0)+1,z+=4}return 0}function hu(p,g){if(o)return Ve(20,1,p,g);p>>>=0,g>>>=0;var x=Ca();for(var _ of((I(),me)[p>>>2>>>0]=x.length,p=0,x))p+=dn(_)+1;return(I(),me)[g>>>2>>>0]=p,0}function Ds(p){return o?Ve(21,1,p):52}function Ms(p,g,x,_,z){return o?Ve(22,1,p,g,x,_,z):52}function Bs(p,g,x,_){return o?Ve(23,1,p,g,x,_):52}function Ps(p,g,x,_){return o?Ve(24,1,p,g,x,_):70}var mu=[null,[],[]];function fn(p,g,x,_){if(o)return Ve(25,1,p,g,x,_);g>>>=0,x>>>=0,_>>>=0;for(var z=0,R=0;R<x;R++){var j=(I(),me)[g>>>2>>>0],Z=(I(),me)[g+4>>>2>>>0];g+=8;for(var ue=0;ue<Z;ue++){var fe=p,ze=(I(),he)[j+ue>>>0],Fe=mu[fe];ze===0||ze===10?((fe===1?D:B)(ia(Fe)),Fe.length=0):Fe.push(ze)}z+=Z}return(I(),me)[_>>>2>>>0]=z,0}function cd(p){return p>>>0}o||(function(){for(var p=t.numThreads-1;p--;)In();Ae.push(async()=>{var g=(async function(){if(!o)return Promise.all(Gt.map(ur))})();ct++,await g,--ct==0&&er&&(g=er,er=null,g())})})(),o||(Kt=new WebAssembly.Memory({initial:256,maximum:65536,shared:!0}),F()),t.wasmBinary&&($=t.wasmBinary),t.stackSave=()=>je(),t.stackRestore=p=>Le(p),t.stackAlloc=p=>Us(p),t.setValue=function(p,g,x="i8"){switch(x.endsWith("*")&&(x="*"),x){case"i1":case"i8":(I(),te)[p>>>0]=g;break;case"i16":(I(),ce)[p>>>1>>>0]=g;break;case"i32":(I(),G)[p>>>2>>>0]=g;break;case"i64":(I(),ee)[p>>>3>>>0]=BigInt(g);break;case"float":(I(),ye)[p>>>2>>>0]=g;break;case"double":(I(),ge)[p>>>3>>>0]=g;break;case"*":(I(),me)[p>>>2>>>0]=g;break;default:X(`invalid type for setValue: ${x}`)}},t.getValue=function(p,g="i8"){switch(g.endsWith("*")&&(g="*"),g){case"i1":case"i8":return(I(),te)[p>>>0];case"i16":return(I(),ce)[p>>>1>>>0];case"i32":return(I(),G)[p>>>2>>>0];case"i64":return(I(),ee)[p>>>3>>>0];case"float":return(I(),ye)[p>>>2>>>0];case"double":return(I(),ge)[p>>>3>>>0];case"*":return(I(),me)[p>>>2>>>0];default:X(`invalid type for getValue: ${g}`)}},t.UTF8ToString=ft,t.stringToUTF8=Qr,t.lengthBytesUTF8=dn;var gu,yu,Ei,pr,Or,hn,vu,Ti,wu,Ia,za,Na,Ue,Fn,Ls,Le,Us,je,_u,js,rr,qn,Ws,Oa,Vs,Fs,Aa,$u,xu,mn,Ra,Hn,Da,qs,Ci,gn,Ma,Hs,Ii,Gs,Ks,Qs,Zs,Ys,Xs,Ar,Ba,Pa,bu,Su,Gn,ku,Js,eo,st,La,zi,Kn,to,Ua,Qn,Ni,yn,ro,Eu,Rr,Tu=[rt,at,gs,On,aa,An,Ho,Rn,wi,_i,sa,Go,Ko,Qo,Kr,_s,du,cu,pu,Vn,hu,Ds,Ms,Bs,Ps,fn],Zn={1124124:(p,g,x,_,z)=>{if(t===void 0||!t.jd)return 1;if((p=ft(Number(p>>>0))).startsWith("./")&&(p=p.substring(2)),!(p=t.jd.get(p)))return 2;if(g=Number(g>>>0),x=Number(x>>>0),_=Number(_>>>0),g+x>p.byteLength)return 3;try{let R=p.subarray(g,g+x);switch(z){case 0:(I(),he).set(R,_>>>0);break;case 1:t.ae?t.ae(_,R):t.Td(_,R);break;default:return 4}return 0}catch{return 4}},1124948:()=>typeof navigator<"u"&&navigator.de?1:0,1125020:(p,g,x)=>{t.Dd(p,(I(),he).subarray(g>>>0,g+x>>>0))},1125084:()=>t.ce(),1125126:p=>{t.Cd(p)},1125163:()=>{t.Md()},1125194:()=>{t.Nd()},1125223:()=>{t.Rd()},1125248:p=>t.Ld(p),1125281:p=>t.Pd(p),1125313:(p,g,x)=>{t.rd(Number(p),Number(g),Number(x),!0)},1125376:(p,g,x)=>{t.rd(Number(p),Number(g),Number(x))},1125433:()=>typeof wasmOffsetConverter<"u",1125490:p=>{t.ic("Abs",p,void 0)},1125541:p=>{t.ic("Neg",p,void 0)},1125592:p=>{t.ic("Floor",p,void 0)},1125645:p=>{t.ic("Ceil",p,void 0)},1125697:p=>{t.ic("Reciprocal",p,void 0)},1125755:p=>{t.ic("Sqrt",p,void 0)},1125807:p=>{t.ic("Exp",p,void 0)},1125858:p=>{t.ic("Erf",p,void 0)},1125909:p=>{t.ic("Sigmoid",p,void 0)},1125964:(p,g,x)=>{t.ic("HardSigmoid",p,{alpha:g,beta:x})},1126043:p=>{t.ic("HardSwish",p,void 0)},1126100:p=>{t.ic("Log",p,void 0)},1126151:p=>{t.ic("Sin",p,void 0)},1126202:p=>{t.ic("Cos",p,void 0)},1126253:p=>{t.ic("Tan",p,void 0)},1126304:p=>{t.ic("Asin",p,void 0)},1126356:p=>{t.ic("Acos",p,void 0)},1126408:p=>{t.ic("Atan",p,void 0)},1126460:p=>{t.ic("Sinh",p,void 0)},1126512:p=>{t.ic("Cosh",p,void 0)},1126564:p=>{t.ic("Asinh",p,void 0)},1126617:p=>{t.ic("Acosh",p,void 0)},1126670:p=>{t.ic("Atanh",p,void 0)},1126723:p=>{t.ic("Tanh",p,void 0)},1126775:p=>{t.ic("Not",p,void 0)},1126826:(p,g,x)=>{t.ic("Clip",p,{min:g,max:x})},1126895:p=>{t.ic("Clip",p,void 0)},1126947:(p,g)=>{t.ic("Elu",p,{alpha:g})},1127005:p=>{t.ic("Gelu",p,void 0)},1127057:p=>{t.ic("Relu",p,void 0)},1127109:(p,g)=>{t.ic("LeakyRelu",p,{alpha:g})},1127173:(p,g)=>{t.ic("ThresholdedRelu",p,{alpha:g})},1127243:(p,g)=>{t.ic("Cast",p,{to:g})},1127301:p=>{t.ic("Add",p,void 0)},1127352:p=>{t.ic("Sub",p,void 0)},1127403:p=>{t.ic("Mul",p,void 0)},1127454:p=>{t.ic("Div",p,void 0)},1127505:p=>{t.ic("Pow",p,void 0)},1127556:p=>{t.ic("Equal",p,void 0)},1127609:p=>{t.ic("Greater",p,void 0)},1127664:p=>{t.ic("GreaterOrEqual",p,void 0)},1127726:p=>{t.ic("Less",p,void 0)},1127778:p=>{t.ic("LessOrEqual",p,void 0)},1127837:(p,g,x,_,z)=>{t.ic("ReduceMean",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1128012:(p,g,x,_,z)=>{t.ic("ReduceMax",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1128186:(p,g,x,_,z)=>{t.ic("ReduceMin",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1128360:(p,g,x,_,z)=>{t.ic("ReduceProd",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1128535:(p,g,x,_,z)=>{t.ic("ReduceSum",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1128709:(p,g,x,_,z)=>{t.ic("ReduceL1",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1128882:(p,g,x,_,z)=>{t.ic("ReduceL2",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1129055:(p,g,x,_,z)=>{t.ic("ReduceLogSum",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1129232:(p,g,x,_,z)=>{t.ic("ReduceSumSquare",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1129412:(p,g,x,_,z)=>{t.ic("ReduceLogSumExp",p,{keepDims:!!g,noopWithEmptyAxes:!!x,axes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1129592:p=>{t.ic("Where",p,void 0)},1129645:(p,g,x)=>{t.ic("Transpose",p,{perm:g?Array.from((I(),G).subarray(Number(g)>>>0,Number(x)>>>0)):[]})},1129769:(p,g,x,_)=>{t.ic("DepthToSpace",p,{blocksize:g,mode:ft(x),format:_?"NHWC":"NCHW"})},1129902:(p,g,x,_)=>{t.ic("DepthToSpace",p,{blocksize:g,mode:ft(x),format:_?"NHWC":"NCHW"})},1130035:(p,g,x,_)=>{t.ic("DFT",p,{axis:g,inverse:x,onesided:_})},1130127:(p,g,x,_,z,R,j,Z,ue,fe,ze,Fe,Xe,nt,wt)=>{t.ic("ConvTranspose",p,{format:ue?"NHWC":"NCHW",autoPad:g,dilations:[x],group:_,kernelShape:[z],pads:[R,j],strides:[Z],wIsConst:()=>!!(I(),te)[fe>>>0],outputPadding:ze?Array.from((I(),G).subarray(Number(ze)>>>0,Number(Fe)>>>0)):[],outputShape:Xe?Array.from((I(),G).subarray(Number(Xe)>>>0,Number(nt)>>>0)):[],activation:ft(wt)})},1130560:(p,g,x,_,z,R,j,Z,ue,fe,ze,Fe,Xe,nt)=>{t.ic("ConvTranspose",p,{format:Z?"NHWC":"NCHW",autoPad:g,dilations:Array.from((I(),G).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),group:_,kernelShape:Array.from((I(),G).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),pads:Array.from((I(),G).subarray(Number(R)>>>0,(Number(R)>>>0)+4>>>0)),strides:Array.from((I(),G).subarray(Number(j)>>>0,(Number(j)>>>0)+2>>>0)),wIsConst:()=>!!(I(),te)[ue>>>0],outputPadding:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(ze)>>>0)):[],outputShape:Fe?Array.from((I(),G).subarray(Number(Fe)>>>0,Number(Xe)>>>0)):[],activation:ft(nt)})},1131221:(p,g,x,_,z,R,j,Z,ue,fe,ze,Fe,Xe,nt,wt)=>{t.ic("ConvTranspose",p,{format:ue?"NHWC":"NCHW",autoPad:g,dilations:[x],group:_,kernelShape:[z],pads:[R,j],strides:[Z],wIsConst:()=>!!(I(),te)[fe>>>0],outputPadding:ze?Array.from((I(),G).subarray(Number(ze)>>>0,Number(Fe)>>>0)):[],outputShape:Xe?Array.from((I(),G).subarray(Number(Xe)>>>0,Number(nt)>>>0)):[],activation:ft(wt)})},1131654:(p,g,x,_,z,R,j,Z,ue,fe,ze,Fe,Xe,nt)=>{t.ic("ConvTranspose",p,{format:Z?"NHWC":"NCHW",autoPad:g,dilations:Array.from((I(),G).subarray(Number(x)>>>0,(Number(x)>>>0)+2>>>0)),group:_,kernelShape:Array.from((I(),G).subarray(Number(z)>>>0,(Number(z)>>>0)+2>>>0)),pads:Array.from((I(),G).subarray(Number(R)>>>0,(Number(R)>>>0)+4>>>0)),strides:Array.from((I(),G).subarray(Number(j)>>>0,(Number(j)>>>0)+2>>>0)),wIsConst:()=>!!(I(),te)[ue>>>0],outputPadding:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(ze)>>>0)):[],outputShape:Fe?Array.from((I(),G).subarray(Number(Fe)>>>0,Number(Xe)>>>0)):[],activation:ft(nt)})},1132315:(p,g)=>{t.ic("GlobalAveragePool",p,{format:g?"NHWC":"NCHW"})},1132406:(p,g,x,_,z,R,j,Z,ue,fe,ze,Fe,Xe,nt)=>{t.ic("AveragePool",p,{format:nt?"NHWC":"NCHW",auto_pad:g,ceil_mode:x,count_include_pad:_,storage_order:z,dilations:R?Array.from((I(),G).subarray(Number(R)>>>0,Number(j)>>>0)):[],kernel_shape:Z?Array.from((I(),G).subarray(Number(Z)>>>0,Number(ue)>>>0)):[],pads:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(ze)>>>0)):[],strides:Fe?Array.from((I(),G).subarray(Number(Fe)>>>0,Number(Xe)>>>0)):[]})},1132885:(p,g)=>{t.ic("GlobalAveragePool",p,{format:g?"NHWC":"NCHW"})},1132976:(p,g,x,_,z,R,j,Z,ue,fe,ze,Fe,Xe,nt)=>{t.ic("AveragePool",p,{format:nt?"NHWC":"NCHW",auto_pad:g,ceil_mode:x,count_include_pad:_,storage_order:z,dilations:R?Array.from((I(),G).subarray(Number(R)>>>0,Number(j)>>>0)):[],kernel_shape:Z?Array.from((I(),G).subarray(Number(Z)>>>0,Number(ue)>>>0)):[],pads:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(ze)>>>0)):[],strides:Fe?Array.from((I(),G).subarray(Number(Fe)>>>0,Number(Xe)>>>0)):[]})},1133455:(p,g)=>{t.ic("GlobalMaxPool",p,{format:g?"NHWC":"NCHW"})},1133542:(p,g,x,_,z,R,j,Z,ue,fe,ze,Fe,Xe,nt)=>{t.ic("MaxPool",p,{format:nt?"NHWC":"NCHW",auto_pad:g,ceil_mode:x,count_include_pad:_,storage_order:z,dilations:R?Array.from((I(),G).subarray(Number(R)>>>0,Number(j)>>>0)):[],kernel_shape:Z?Array.from((I(),G).subarray(Number(Z)>>>0,Number(ue)>>>0)):[],pads:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(ze)>>>0)):[],strides:Fe?Array.from((I(),G).subarray(Number(Fe)>>>0,Number(Xe)>>>0)):[]})},1134017:(p,g)=>{t.ic("GlobalMaxPool",p,{format:g?"NHWC":"NCHW"})},1134104:(p,g,x,_,z,R,j,Z,ue,fe,ze,Fe,Xe,nt)=>{t.ic("MaxPool",p,{format:nt?"NHWC":"NCHW",auto_pad:g,ceil_mode:x,count_include_pad:_,storage_order:z,dilations:R?Array.from((I(),G).subarray(Number(R)>>>0,Number(j)>>>0)):[],kernel_shape:Z?Array.from((I(),G).subarray(Number(Z)>>>0,Number(ue)>>>0)):[],pads:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(ze)>>>0)):[],strides:Fe?Array.from((I(),G).subarray(Number(Fe)>>>0,Number(Xe)>>>0)):[]})},1134579:(p,g,x,_,z)=>{t.ic("Gemm",p,{alpha:g,beta:x,transA:_,transB:z})},1134683:p=>{t.ic("MatMul",p,void 0)},1134737:(p,g,x,_)=>{t.ic("ArgMax",p,{keepDims:!!g,selectLastIndex:!!x,axis:_})},1134845:(p,g,x,_)=>{t.ic("ArgMin",p,{keepDims:!!g,selectLastIndex:!!x,axis:_})},1134953:(p,g)=>{t.ic("Softmax",p,{axis:g})},1135016:(p,g)=>{t.ic("Concat",p,{axis:g})},1135076:(p,g,x,_,z)=>{t.ic("Split",p,{axis:g,numOutputs:x,splitSizes:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1135232:p=>{t.ic("Expand",p,void 0)},1135286:(p,g)=>{t.ic("Gather",p,{axis:Number(g)})},1135357:(p,g)=>{t.ic("GatherElements",p,{axis:Number(g)})},1135436:(p,g)=>{t.ic("GatherND",p,{batch_dims:Number(g)})},1135515:(p,g,x,_,z,R,j,Z,ue,fe,ze)=>{t.ic("Resize",p,{antialias:g,axes:x?Array.from((I(),G).subarray(Number(x)>>>0,Number(_)>>>0)):[],coordinateTransformMode:ft(z),cubicCoeffA:R,excludeOutside:j,extrapolationValue:Z,keepAspectRatioPolicy:ft(ue),mode:ft(fe),nearestMode:ft(ze)})},1135877:(p,g,x,_,z,R,j)=>{t.ic("Slice",p,{starts:g?Array.from((I(),G).subarray(Number(g)>>>0,Number(x)>>>0)):[],ends:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[],axes:R?Array.from((I(),G).subarray(Number(R)>>>0,Number(j)>>>0)):[]})},1136141:p=>{t.ic("Tile",p,void 0)},1136193:(p,g,x)=>{t.ic("InstanceNormalization",p,{epsilon:g,format:x?"NHWC":"NCHW"})},1136307:(p,g,x)=>{t.ic("InstanceNormalization",p,{epsilon:g,format:x?"NHWC":"NCHW"})},1136421:p=>{t.ic("Range",p,void 0)},1136474:(p,g)=>{t.ic("Einsum",p,{equation:ft(g)})},1136555:(p,g,x,_,z)=>{t.ic("Pad",p,{mode:g,value:x,pads:_?Array.from((I(),G).subarray(Number(_)>>>0,Number(z)>>>0)):[]})},1136698:(p,g,x,_,z,R)=>{t.ic("BatchNormalization",p,{epsilon:g,momentum:x,spatial:!!z,trainingMode:!!_,format:R?"NHWC":"NCHW"})},1136867:(p,g,x,_,z,R)=>{t.ic("BatchNormalization",p,{epsilon:g,momentum:x,spatial:!!z,trainingMode:!!_,format:R?"NHWC":"NCHW"})},1137036:(p,g,x)=>{t.ic("CumSum",p,{exclusive:Number(g),reverse:Number(x)})},1137133:(p,g,x)=>{t.ic("DequantizeLinear",p,{axis:g,blockSize:x})},1137223:(p,g,x,_,z)=>{t.ic("GridSample",p,{align_corners:g,mode:ft(x),padding_mode:ft(_),format:z?"NHWC":"NCHW"})},1137393:(p,g,x,_,z)=>{t.ic("GridSample",p,{align_corners:g,mode:ft(x),padding_mode:ft(_),format:z?"NHWC":"NCHW"})},1137563:(p,g)=>{t.ic("ScatterND",p,{reduction:ft(g)})},1137648:(p,g,x,_,z,R,j,Z,ue)=>{t.ic("Attention",p,{numHeads:g,isUnidirectional:x,maskFilterValue:_,scale:z,doRotary:R,qkvHiddenSizes:j?Array.from((I(),G).subarray(Number(Z)>>>0,Number(Z)+j>>>0)):[],pastPresentShareBuffer:!!ue})},1137920:p=>{t.ic("BiasAdd",p,void 0)},1137975:p=>{t.ic("BiasSplitGelu",p,void 0)},1138036:p=>{t.ic("FastGelu",p,void 0)},1138092:(p,g,x,_,z,R,j,Z,ue,fe,ze,Fe,Xe,nt,wt,Pt)=>{t.ic("Conv",p,{format:Fe?"NHWC":"NCHW",auto_pad:g,dilations:x?Array.from((I(),G).subarray(Number(x)>>>0,Number(_)>>>0)):[],group:z,kernel_shape:R?Array.from((I(),G).subarray(Number(R)>>>0,Number(j)>>>0)):[],pads:Z?Array.from((I(),G).subarray(Number(Z)>>>0,Number(ue)>>>0)):[],strides:fe?Array.from((I(),G).subarray(Number(fe)>>>0,Number(ze)>>>0)):[],w_is_const:()=>!!(I(),te)[Number(Xe)>>>0],activation:ft(nt),activation_params:wt?Array.from((I(),ye).subarray(Number(wt)>>>0,Number(Pt)>>>0)):[]})},1138676:p=>{t.ic("Gelu",p,void 0)},1138728:(p,g,x,_,z,R,j,Z,ue)=>{t.ic("GroupQueryAttention",p,{numHeads:g,kvNumHeads:x,scale:_,softcap:z,doRotary:R,rotaryInterleaved:j,smoothSoftmax:Z,localWindowSize:ue})},1138945:(p,g,x,_)=>{t.ic("LayerNormalization",p,{axis:g,epsilon:x,simplified:!!_})},1139056:(p,g,x,_)=>{t.ic("LayerNormalization",p,{axis:g,epsilon:x,simplified:!!_})},1139167:(p,g,x,_,z,R)=>{t.ic("MatMulNBits",p,{k:g,n:x,accuracyLevel:_,bits:z,blockSize:R})},1139294:(p,g,x,_,z,R)=>{t.ic("MultiHeadAttention",p,{numHeads:g,isUnidirectional:x,maskFilterValue:_,scale:z,doRotary:R})},1139453:(p,g)=>{t.ic("QuickGelu",p,{alpha:g})},1139517:(p,g,x,_,z)=>{t.ic("RotaryEmbedding",p,{interleaved:!!g,numHeads:x,rotaryEmbeddingDim:_,scale:z})},1139656:(p,g,x)=>{t.ic("SkipLayerNormalization",p,{epsilon:g,simplified:!!x})},1139758:(p,g,x)=>{t.ic("SkipLayerNormalization",p,{epsilon:g,simplified:!!x})},1139860:(p,g,x,_)=>{t.ic("GatherBlockQuantized",p,{gatherAxis:g,quantizeAxis:x,blockSize:_})},1139981:p=>{t.Qd(p)},1140015:(p,g)=>t.Sd(Number(p),Number(g),t.hd.Vd,t.hd.errors)};function ja(p,g,x){return su(async()=>{await t.Od(Number(p),Number(g),Number(x))})}function no(){return typeof wasmOffsetConverter<"u"}function io(p,g,x,_){var z=je();try{return Da(p,g,x,_)}catch(R){if(Le(z),R!==R+0)throw R;Ue(1,0)}}function ao(p,g,x){var _=je();try{return Ra(p,g,x)}catch(z){if(Le(_),z!==z+0)throw z;Ue(1,0)}}function so(p){var g=je();try{xu(p)}catch(x){if(Le(g),x!==x+0)throw x;Ue(1,0)}}function pd(p,g){var x=je();try{return Oa(p,g)}catch(_){if(Le(x),_!==_+0)throw _;Ue(1,0)}}function Cu(p,g,x){var _=je();try{Ws(p,g,x)}catch(z){if(Le(_),z!==z+0)throw z;Ue(1,0)}}function fd(p,g,x,_){var z=je();try{return Hs(p,g,x,_)}catch(R){if(Le(z),R!==R+0)throw R;Ue(1,0)}}function hd(p,g){var x=je();try{qs(p,g)}catch(_){if(Le(x),_!==_+0)throw _;Ue(1,0)}}function oo(p,g,x,_,z,R,j){var Z=je();try{return Hn(p,g,x,_,z,R,j)}catch(ue){if(Le(Z),ue!==ue+0)throw ue;Ue(1,0)}}function Jr(p,g,x,_,z,R){var j=je();try{Vs(p,g,x,_,z,R)}catch(Z){if(Le(j),Z!==Z+0)throw Z;Ue(1,0)}}function Iu(p,g,x,_){var z=je();try{Aa(p,g,x,_)}catch(R){if(Le(z),R!==R+0)throw R;Ue(1,0)}}function Yn(p,g,x,_,z){var R=je();try{mn(p,g,x,_,z)}catch(j){if(Le(R),j!==j+0)throw j;Ue(1,0)}}function br(p,g,x,_,z,R,j){var Z=je();try{gn(p,g,x,_,z,R,j)}catch(ue){if(Le(Z),ue!==ue+0)throw ue;Ue(1,0)}}function Oi(p,g,x,_,z,R,j){var Z=je();try{Ma(p,g,x,_,z,R,j)}catch(ue){if(Le(Z),ue!==ue+0)throw ue;Ue(1,0)}}function Dr(p,g,x,_,z,R,j,Z){var ue=je();try{Qs(p,g,x,_,z,R,j,Z)}catch(fe){if(Le(ue),fe!==fe+0)throw fe;Ue(1,0)}}function uo(p,g,x,_,z){var R=je();try{return Ci(p,g,x,_,z)}catch(j){if(Le(R),j!==j+0)throw j;Ue(1,0)}}function md(p,g,x){var _=je();try{return $u(p,g,x)}catch(z){if(Le(_),z!==z+0)throw z;Ue(1,0)}}function gd(p,g,x,_,z,R,j,Z){var ue=je();try{Zs(p,g,x,_,z,R,j,Z)}catch(fe){if(Le(ue),fe!==fe+0)throw fe;Ue(1,0)}}function vn(p,g,x,_,z,R,j,Z,ue,fe,ze,Fe){var Xe=je();try{Ii(p,g,x,_,z,R,j,Z,ue,fe,ze,Fe)}catch(nt){if(Le(Xe),nt!==nt+0)throw nt;Ue(1,0)}}function Ai(p,g,x){var _=je();try{return Ys(p,g,x)}catch(z){if(Le(_),z!==z+0)throw z;return Ue(1,0),0n}}function Xn(p,g,x,_,z,R,j,Z,ue){var fe=je();try{Fs(p,g,x,_,z,R,j,Z,ue)}catch(ze){if(Le(fe),ze!==ze+0)throw ze;Ue(1,0)}}function Wa(p){var g=je();try{return Xs(p)}catch(x){if(Le(g),x!==x+0)throw x;Ue(1,0)}}function lo(p,g){var x=je();try{return Ua(p,g)}catch(_){if(Le(x),_!==_+0)throw _;return Ue(1,0),0n}}function Jn(p,g,x,_){var z=je();try{return Ar(p,g,x,_)}catch(R){if(Le(z),R!==R+0)throw R;Ue(1,0)}}function en(p,g,x,_,z,R,j){var Z=je();try{Qn(p,g,x,_,z,R,j)}catch(ue){if(Le(Z),ue!==ue+0)throw ue;Ue(1,0)}}function ut(p){var g=je();try{return Ba(p)}catch(x){if(Le(g),x!==x+0)throw x;return Ue(1,0),0n}}function ot(p,g,x,_,z){var R=je();try{return Js(p,g,x,_,z)}catch(j){if(Le(R),j!==j+0)throw j;Ue(1,0)}}function tn(p,g,x,_,z,R){var j=je();try{return eo(p,g,x,_,z,R)}catch(Z){if(Le(j),Z!==Z+0)throw Z;Ue(1,0)}}function It(p,g,x,_,z,R){var j=je();try{return Gs(p,g,x,_,z,R)}catch(Z){if(Le(j),Z!==Z+0)throw Z;Ue(1,0)}}function Wt(p,g,x,_,z,R){var j=je();try{return st(p,g,x,_,z,R)}catch(Z){if(Le(j),Z!==Z+0)throw Z;Ue(1,0)}}function wn(p,g,x,_,z,R,j,Z){var ue=je();try{return Ks(p,g,x,_,z,R,j,Z)}catch(fe){if(Le(ue),fe!==fe+0)throw fe;Ue(1,0)}}function ei(p,g,x,_,z){var R=je();try{return La(p,g,x,_,z)}catch(j){if(Le(R),j!==j+0)throw j;return Ue(1,0),0n}}function Vt(p,g,x,_){var z=je();try{return zi(p,g,x,_)}catch(R){if(Le(z),R!==R+0)throw R;Ue(1,0)}}function Va(p,g,x,_){var z=je();try{return Kn(p,g,x,_)}catch(R){if(Le(z),R!==R+0)throw R;Ue(1,0)}}function zu(p,g,x,_,z,R,j,Z,ue,fe,ze,Fe){var Xe=je();try{return to(p,g,x,_,z,R,j,Z,ue,fe,ze,Fe)}catch(nt){if(Le(Xe),nt!==nt+0)throw nt;Ue(1,0)}}function Nu(p,g,x,_,z,R,j,Z,ue,fe,ze){var Fe=je();try{Gn(p,g,x,_,z,R,j,Z,ue,fe,ze)}catch(Xe){if(Le(Fe),Xe!==Xe+0)throw Xe;Ue(1,0)}}function Fa(p,g,x,_,z,R,j,Z,ue,fe,ze,Fe,Xe,nt,wt,Pt){var lt=je();try{ku(p,g,x,_,z,R,j,Z,ue,fe,ze,Fe,Xe,nt,wt,Pt)}catch(Zt){if(Le(lt),Zt!==Zt+0)throw Zt;Ue(1,0)}}function Ou(p,g,x){var _=je();try{return Pa(p,g,x)}catch(z){if(Le(_),z!==z+0)throw z;Ue(1,0)}}function Mr(p,g,x){var _=je();try{return bu(p,g,x)}catch(z){if(Le(_),z!==z+0)throw z;Ue(1,0)}}function qa(p,g,x,_){var z=je();try{Su(p,g,x,_)}catch(R){if(Le(z),R!==R+0)throw R;Ue(1,0)}}function ti(){if(0<ct)er=ti;else if(o)C==null||C(t),ne();else{for(var p=Ae;0<p.length;)p.shift()(t);0<ct?er=ti:(t.calledRun=!0,P||(ne(),C==null||C(t)))}}return o||(Rr=await $e(),ti()),t.PTR_SIZE=4,O?t:new Promise((p,g)=>{C=p,N=g})}var yv,om,c$=ae(()=>{"use strict";var e,t;yv=sm,om=(t=(e=globalThis.self)==null?void 0:e.name)==null?void 0:t.startsWith("em-pthread"),om&&sm()}),Cc,Sp,um,hr,vv,ml,lm,dm,Ic,cm,zc,wv,Nc,_v,Gp=ae(()=>{"use strict";Hp(),Cc=typeof location>"u"?void 0:location.origin,Sp=import.meta.url>"file:"&&import.meta.url<"file;",um=()=>{if(Sp){let e=URL;return new URL(new e("ort.bundle.min.mjs",import.meta.url).href,Cc).href}return import.meta.url},hr=um(),vv=()=>{if(hr&&!hr.startsWith("blob:"))return hr.substring(0,hr.lastIndexOf("/")+1)},ml=(e,t)=>{try{let i=t??hr;return(i?new URL(e,i):new URL(e)).origin===Cc}catch{return!1}},lm=(e,t)=>{let i=t??hr;try{return(i?new URL(e,i):new URL(e)).href}catch{return}},dm=(e,t)=>`${t??"./"}${e}`,Ic=async e=>{let t=await(await fetch(e,{credentials:"same-origin"})).blob();return URL.createObjectURL(t)},cm=async e=>(await import(e)).default,zc=(d$(),Vo(hv)).default,wv=async()=>{if(!hr)throw new Error("Failed to load proxy worker: cannot determine the script source URL.");if(ml(hr))return[void 0,zc()];let e=await Ic(hr);return[e,zc(e)]},Nc=(c$(),Vo(gv)).default,_v=async(e,t,i,s)=>{let o=Nc&&!(e||t);if(o)if(hr)o=ml(hr)||s&&!i;else if(s&&!i)o=!0;else throw new Error("cannot determine the script source URL.");if(o)return[void 0,Nc];{let u="ort-wasm-simd-threaded.jsep.mjs",d=e??lm(u,t),c=i&&d&&!ml(d,t),f=c?await Ic(d):d??dm(u,t);return[c?f:void 0,await cm(f)]}}}),Oc,gl,To,Ac,pm,fm,hm,Kp,it,ra=ae(()=>{"use strict";Gp(),gl=!1,To=!1,Ac=!1,pm=()=>{if(typeof SharedArrayBuffer>"u")return!1;try{return typeof MessageChannel<"u"&&new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)),WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,5,4,1,3,1,1,10,11,1,9,0,65,0,254,16,2,0,26,11]))}catch{return!1}},fm=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,30,1,28,0,65,0,253,15,253,12,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,253,186,1,26,11]))}catch{return!1}},hm=()=>{try{return WebAssembly.validate(new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,123,3,2,1,0,10,19,1,17,0,65,1,253,15,65,2,253,15,65,3,253,15,253,147,2,11]))}catch{return!1}},Kp=async e=>{if(gl)return Promise.resolve();if(To)throw new Error("multiple calls to 'initializeWebAssembly()' detected.");if(Ac)throw new Error("previous call to 'initializeWebAssembly()' failed.");To=!0;let t=e.initTimeout,i=e.numThreads;if(e.simd!==!1){if(e.simd==="relaxed"){if(!hm())throw new Error("Relaxed WebAssembly SIMD is not supported in the current environment.")}else if(!fm())throw new Error("WebAssembly SIMD is not supported in the current environment.")}let s=pm();i>1&&!s&&(typeof self<"u"&&!self.crossOriginIsolated&&console.warn("env.wasm.numThreads is set to "+i+", but this will not work unless you enable crossOriginIsolated mode. See https://web.dev/cross-origin-isolation-guide/ for more info."),console.warn("WebAssembly multi-threading is not supported in the current environment. Falling back to single-threading."),e.numThreads=i=1);let o=e.wasmPaths,u=typeof o=="string"?o:void 0,d=o==null?void 0:o.mjs,c=(d==null?void 0:d.href)??d,f=o==null?void 0:o.wasm,m=(f==null?void 0:f.href)??f,y=e.wasmBinary,[w,$]=await _v(c,u,i>1,!!y||!!m),S=!1,b=[];if(t>0&&b.push(new Promise(C=>{setTimeout(()=>{S=!0,C()},t)})),b.push(new Promise((C,N)=>{let k={numThreads:i};if(y)k.wasmBinary=y,k.locateFile=E=>E;else if(m||u)k.locateFile=E=>m??u+E;else if(c&&c.indexOf("blob:")!==0)k.locateFile=E=>new URL(E,c).href;else if(w){let E=vv();E&&(k.locateFile=A=>E+A)}$(k).then(E=>{To=!1,gl=!0,Oc=E,C(),w&&URL.revokeObjectURL(w)},E=>{To=!1,Ac=!0,N(E)})})),await Promise.race(b),S)throw new Error(`WebAssembly backend initializing failed due to timeout: ${t}ms`)},it=()=>{if(gl&&Oc)return Oc;throw new Error("WebAssembly is not initialized yet.")}}),Hr,Al,Qe,Qp=ae(()=>{"use strict";ra(),Hr=(e,t)=>{let i=it(),s=i.lengthBytesUTF8(e)+1,o=i._malloc(s);return i.stringToUTF8(e,o,s),t.push(o),o},Al=(e,t,i,s)=>{if(typeof e=="object"&&e!==null){if(i.has(e))throw new Error("Circular reference in options");i.add(e)}Object.entries(e).forEach(([o,u])=>{let d=t?t+o:o;if(typeof u=="object")Al(u,d+".",i,s);else if(typeof u=="string"||typeof u=="number")s(d,u.toString());else if(typeof u=="boolean")s(d,u?"1":"0");else throw new Error(`Can't handle extra config type: ${typeof u}`)})},Qe=e=>{let t=it(),i=t.stackSave();try{let s=t.PTR_SIZE,o=t.stackAlloc(2*s);t._OrtGetLastError(o,o+s);let u=Number(t.getValue(o,s===4?"i32":"i64")),d=t.getValue(o+s,"*"),c=d?t.UTF8ToString(d):"";throw new Error(`${e} ERROR_CODE: ${u}, ERROR_MESSAGE: ${c}`)}finally{t.stackRestore(i)}}}),$v,p$=ae(()=>{"use strict";ra(),Qp(),$v=(e,t)=>{let i=it(),s=0,o=[],u=e||{};try{if((e==null?void 0:e.logSeverityLevel)===void 0)u.logSeverityLevel=2;else if(typeof e.logSeverityLevel!="number"||!Number.isInteger(e.logSeverityLevel)||e.logSeverityLevel<0||e.logSeverityLevel>4)throw new Error(`log severity level is not valid: ${e.logSeverityLevel}`);if((e==null?void 0:e.logVerbosityLevel)===void 0)u.logVerbosityLevel=0;else if(typeof e.logVerbosityLevel!="number"||!Number.isInteger(e.logVerbosityLevel))throw new Error(`log verbosity level is not valid: ${e.logVerbosityLevel}`);(e==null?void 0:e.terminate)===void 0&&(u.terminate=!1);let d=0;(e==null?void 0:e.tag)!==void 0&&(d=Hr(e.tag,o)),s=i._OrtCreateRunOptions(u.logSeverityLevel,u.logVerbosityLevel,!!u.terminate,d),s===0&&Qe("Can't create run options."),(e==null?void 0:e.extra)!==void 0&&Al(e.extra,"",new WeakSet,(c,f)=>{let m=Hr(c,o),y=Hr(f,o);i._OrtAddRunConfigEntry(s,m,y)!==0&&Qe(`Can't set a run config entry: ${c} - ${f}.`)});for(let c of t)i._OrtRunOptionsAddActiveLoraAdapter(s,c)!==0&&Qe("Can't add an active LoRA adapter.");return[s,o]}catch(d){throw s!==0&&i._OrtReleaseRunOptions(s),o.forEach(c=>i._free(c)),d}}}),mm,gm,ym,Wi,vm,xv,f$=ae(()=>{"use strict";ra(),Qp(),mm=e=>{switch(e){case"disabled":return 0;case"basic":return 1;case"extended":return 2;case"layout":return 3;case"all":return 99;default:throw new Error(`unsupported graph optimization level: ${e}`)}},gm=e=>{switch(e){case"sequential":return 0;case"parallel":return 1;default:throw new Error(`unsupported execution mode: ${e}`)}},ym=e=>{e.extra||(e.extra={}),e.extra.session||(e.extra.session={});let t=e.extra.session;t.use_ort_model_bytes_directly||(t.use_ort_model_bytes_directly="1"),e.executionProviders&&e.executionProviders.some(i=>(typeof i=="string"?i:i.name)==="webgpu")&&(e.enableMemPattern=!1)},Wi=(e,t,i,s)=>{let o=Hr(t,s),u=Hr(i,s);it()._OrtAddSessionConfigEntry(e,o,u)!==0&&Qe(`Can't set a session config entry: ${t} - ${i}.`)},vm=async(e,t,i)=>{let s=t.executionProviders;for(let o of s){let u=typeof o=="string"?o:o.name,d=[],c;switch(u){case"webnn":if(u="WEBNN",Wi(e,"session.disable_quant_qdq","1",i),Wi(e,"session.disable_qdq_constant_folding","1",i),typeof o!="string"){let $=o==null?void 0:o.deviceType;$&&Wi(e,"deviceType",$,i)}break;case"webgpu":if(u="JS",typeof o!="string"){let $=o;if($!=null&&$.preferredLayout){if($.preferredLayout!=="NCHW"&&$.preferredLayout!=="NHWC")throw new Error(`preferredLayout must be either 'NCHW' or 'NHWC': ${$.preferredLayout}`);Wi(e,"preferredLayout",$.preferredLayout,i)}}break;case"wasm":case"cpu":continue;default:throw new Error(`not supported execution provider: ${u}`)}let f=d.length,m=0,y=0;if(f>0){m=it()._malloc(f*it().PTR_SIZE),i.push(m),y=it()._malloc(f*it().PTR_SIZE),i.push(y);for(let $=0;$<f;$++)it().setValue(m+$*it().PTR_SIZE,d[$][0],"*"),it().setValue(y+$*it().PTR_SIZE,d[$][1],"*")}let w;if(c===void 0){let $=Hr(u,i);w=await it()._OrtAppendExecutionProvider(e,$,m,y,f)}w!==0&&Qe(`Can't append execution provider: ${u}.`)}},xv=async e=>{let t=it(),i=0,s=[],o=e||{};ym(o);try{let u=mm(o.graphOptimizationLevel??"all"),d=gm(o.executionMode??"sequential"),c=typeof o.logId=="string"?Hr(o.logId,s):0,f=o.logSeverityLevel??2;if(!Number.isInteger(f)||f<0||f>4)throw new Error(`log severity level is not valid: ${f}`);let m=o.logVerbosityLevel??0;if(!Number.isInteger(m)||m<0||m>4)throw new Error(`log verbosity level is not valid: ${m}`);let y=typeof o.optimizedModelFilePath=="string"?Hr(o.optimizedModelFilePath,s):0;if(i=t._OrtCreateSessionOptions(u,!!o.enableCpuMemArena,!!o.enableMemPattern,d,!!o.enableProfiling,0,c,f,m,y),i===0&&Qe("Can't create session options."),o.executionProviders&&await vm(i,o,s),o.enableGraphCapture!==void 0){if(typeof o.enableGraphCapture!="boolean")throw new Error(`enableGraphCapture must be a boolean value: ${o.enableGraphCapture}`);Wi(i,"enableGraphCapture",o.enableGraphCapture.toString(),s)}if(o.freeDimensionOverrides)for(let[w,$]of Object.entries(o.freeDimensionOverrides)){if(typeof w!="string")throw new Error(`free dimension override name must be a string: ${w}`);if(typeof $!="number"||!Number.isInteger($)||$<0)throw new Error(`free dimension override value must be a non-negative integer: ${$}`);let S=Hr(w,s);t._OrtAddFreeDimensionOverride(i,S,$)!==0&&Qe(`Can't set a free dimension override: ${w} - ${$}.`)}return o.extra!==void 0&&Al(o.extra,"",new WeakSet,(w,$)=>{Wi(i,w,$,s)}),[i,s]}catch(u){throw i!==0&&t._OrtReleaseSessionOptions(i)!==0&&Qe("Can't release session options."),s.forEach(d=>t._free(d)),u}}}),Qi,Tn,Zi,Ul,Rl,Zp,Yp,kp,Ie=ae(()=>{"use strict";Qi=e=>{switch(e){case"int8":return 3;case"uint8":return 2;case"bool":return 9;case"int16":return 5;case"uint16":return 4;case"int32":return 6;case"uint32":return 12;case"float16":return 10;case"float32":return 1;case"float64":return 11;case"string":return 8;case"int64":return 7;case"uint64":return 13;case"int4":return 22;case"uint4":return 21;default:throw new Error(`unsupported data type: ${e}`)}},Tn=e=>{switch(e){case 3:return"int8";case 2:return"uint8";case 9:return"bool";case 5:return"int16";case 4:return"uint16";case 6:return"int32";case 12:return"uint32";case 10:return"float16";case 1:return"float32";case 11:return"float64";case 8:return"string";case 7:return"int64";case 13:return"uint64";case 22:return"int4";case 21:return"uint4";default:throw new Error(`unsupported data type: ${e}`)}},Zi=(e,t)=>{let i=[-1,4,1,1,2,2,4,8,-1,1,2,8,4,8,-1,-1,-1,-1,-1,-1,-1,.5,.5][e],s=typeof t=="number"?t:t.reduce((o,u)=>o*u,1);return i>0?Math.ceil(s*i):void 0},Ul=e=>{switch(e){case"float16":return typeof Float16Array<"u"?Float16Array:Uint16Array;case"float32":return Float32Array;case"uint8":return Uint8Array;case"int8":return Int8Array;case"uint16":return Uint16Array;case"int16":return Int16Array;case"int32":return Int32Array;case"bool":return Uint8Array;case"float64":return Float64Array;case"uint32":return Uint32Array;case"int64":return BigInt64Array;case"uint64":return BigUint64Array;default:throw new Error(`unsupported type: ${e}`)}},Rl=e=>{switch(e){case"verbose":return 0;case"info":return 1;case"warning":return 2;case"error":return 3;case"fatal":return 4;default:throw new Error(`unsupported logging level: ${e}`)}},Zp=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",Yp=e=>e==="float32"||e==="float16"||e==="int32"||e==="int64"||e==="uint32"||e==="uint64"||e==="int8"||e==="uint8"||e==="bool"||e==="uint4"||e==="int4",kp=e=>{switch(e){case"none":return 0;case"cpu":return 1;case"cpu-pinned":return 2;case"texture":return 3;case"gpu-buffer":return 4;case"ml-tensor":return 5;default:throw new Error(`unsupported data location: ${e}`)}}}),jl,Xp=ae(()=>{"use strict";Hp(),jl=async e=>{if(typeof e=="string"){let t=await fetch(e);if(!t.ok)throw new Error(`failed to load external data file: ${e}`);let i=t.headers.get("Content-Length"),s=i?parseInt(i,10):0;if(s<1073741824)return new Uint8Array(await t.arrayBuffer());{if(!t.body)throw new Error(`failed to load external data file: ${e}, no response body.`);let o=t.body.getReader(),u;try{u=new ArrayBuffer(s)}catch(c){if(c instanceof RangeError){let f=Math.ceil(s/65536);u=new WebAssembly.Memory({initial:f,maximum:f}).buffer}else throw c}let d=0;for(;;){let{done:c,value:f}=await o.read();if(c)break;let m=f.byteLength;new Uint8Array(u,d,m).set(f),d+=m}return new Uint8Array(u,0,s)}}else return e instanceof Blob?new Uint8Array(await e.arrayBuffer()):e instanceof Uint8Array?e:new Uint8Array(e)}}),wm,_m,$m,xm,Jp,bm,He,Cn=ae(()=>{"use strict";Ie(),wm=["V","I","W","E","F"],_m=(e,t)=>{console.log(`[${wm[e]},${new Date().toISOString()}]${t}`)},Jp=(e,t)=>{$m=e,xm=t},bm=(e,t)=>{let i=Rl(e),s=Rl($m);i>=s&&_m(i,typeof t=="function"?t():t)},He=(...e)=>{xm&&bm(...e)}}),Sm,ss,K,Dl,bv,Sv,kv,Me=ae(()=>{"use strict";Sm=class{static calcMatMulShape(e,t){return e[1]!==t[0]?void 0:[e[0],t[1]]}},ss=class{static calcShape(e,t,i=!1){let s=e.length,o=t.length;if(s===0)return t;if(o===0)return e;let u=Math.max(e.length,t.length),d=new Array(u);if(i){if(s<2||o<2)return;let c=Sm.calcMatMulShape([e[s-2],e[s-1]],[t[o-2],t[o-1]]);if(c===void 0)return;[d[u-2],d[u-1]]=c}for(let c=i?3:1;c<=u;c++){let f=s-c<0?1:e[s-c],m=o-c<0?1:t[o-c];if(f!==m&&f>1&&m>1)return;let y=Math.max(f,m);if(f&&m)d[u-c]=Math.max(f,m);else{if(y>1)return;d[u-c]=0}}return d}static isValidBroadcast(e,t){let i=e.length,s=t.length;if(i>s)return!1;for(let o=1;o<=i;o++)if(e[i-o]!==1&&e[i-o]!==t[s-o])return!1;return!0}},K=class Il{static size(t){return Il.getSizeFromDimensionRange(t,0,t.length)}static convertShape(t,i=4){let s=t.length;if(s===0)return[];let o=new Array(s),u=s-1;for(;u>=0;){if(t[u]%i===0){o[u]=t[u]/i;break}if(i%t[u]!==0)throw new Error("cannot convert shape");o[u]=1,i/=t[u],u--}for(u--;u>=0;u--)o[u]=t[u];return o}static sizeFromDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeFromDimension as Tensor has ${t.length} dimensions.`);return Il.getSizeFromDimensionRange(t,i,t.length)}static sizeToDimension(t,i){if(i<0||i>t.length)throw new Error(`invalid dimension of ${i} for sizeToDimension as Tensor has ${t.length} dimensions.`);return Il.getSizeFromDimensionRange(t,0,i)}static getSizeFromDimensionRange(t,i,s){let o=1;for(let u=i;u<s;u++){if(t[u]<0)throw new Error("cannot get valid size from specified dimension range. Most likely the range contains negative values in them.");o*=Number(t[u])}return o}static computeStrides(t){let i=t.length;if(i===0)return[];if(i===1)return[1];let s=new Array(i);s[i-1]=1,s[i-2]=t[i-1];for(let o=i-3;o>=0;--o)s[o]=s[o+1]*t[o+1];return s}static normalizeAxis(t,i){if(t<-i&&t>=i)throw new Error("unsupported axis for this operation.");return t<0?t+i:t}static normalizeAxes(t,i){return t.map(s=>this.normalizeAxis(s,i??t.length))}static sortBasedOnPerm(t,i){return i?i.map(s=>t[s]):t.slice().reverse()}static padShape(t,i){let s=t.length;return t.map((o,u)=>o+i[u]+i[u+s])}static areEqual(t,i){return t.length!==i.length?!1:t.every((s,o)=>s===i[o])}},Dl=class fi{static adjustPoolAttributes(t,i,s,o,u,d){if(!t&&s.length!==i.length-2)throw new Error("length of specified kernel shapes should be 2 less than length of input dimensions");if(t)for(let c=0;c<i.length-2;c++)c>=s.length?s.push(i[c+2]):s[c]=i[c+2];for(let c=0;c<s.length;c++)if(c<o.length){if(o[c]<0)throw new Error("strides should be greater than or equal to 1")}else o.push(1);for(let c=0;c<s.length;c++)if(c<u.length){if(u[c]<0)throw new Error("dilations should be greater than or equal to 1")}else u.push(1);for(let c=0;c<s.length*2;c++)if(c<d.length){if(d[c]<0)throw new Error("pad should be greater than or equal to 1")}else d.push(0);for(let c=0;c<s.length;c++){if(s[c]<=0)throw new Error("kernel shapes need to be greater than 0");if(d[c]>=s[c]||d[c+s.length]>=s[c])throw new Error("pads should be smaller than kernel")}}static adjustPadsBasedOnAutoPad(t,i,s,o,u,d,c){if(c){if(u.length!==2*(t.length-2))throw new Error("length of pads should be twice the length of data dimensions");if(i.length!==t.length-2)throw new Error("length of strides should be the length of data dimensions");if(o.length!==t.length-2)throw new Error("length of kernel shapes should be the length of data dimensions");for(let f=0;f<t.length-2;f++)fi.adjustPadAndReturnShape(t[f+(d?1:2)],i[f],s[f],o[f],u,f,f+t.length-2,c)}}static computePoolOutputShape(t,i,s,o,u,d,c,f=0){if(i.length<=0)throw new Error("input shape must be of size greater than 0");let m=[i[0],i[1]];return fi.computeShapeHelper(t,i,m,s,o,u,d,c,f),m}static computeConvOutputShape(t,i,s,o,u,d,c){if(t.length<=0||i.length<=0)throw new Error("invalid input tensor dims or invalid filter tensor dims");let f=[t[0],i[0]];return fi.computeShapeHelper(!1,t,f,s,o,u,d,c),f}static computeShapeHelper(t,i,s,o,u,d,c,f,m=0){if(t)for(let y=0;y<i.length-2;y++)s.push(1);else for(let y=0;y<i.length-2;y++)s.push(fi.adjustPadAndReturnShape(i[y+2],o[y],u[y],d[y],c,y,y+i.length-2,f,m))}static computeOutputSize(t,i,s,o,u){let d=Math.floor(t/i)+1;return u===1&&(d=Math.ceil(t/i)+1,(d-1)*i>=s+o&&(d-=1)),d}static adjustPadAndReturnShape(t,i,s,o,u,d,c,f,m=0){let y=s*(o-1)+1;if(f&&f!=="NOTSET")switch(f){case"VALID":return u[d]=0,u[c]=0,fi.computeOutputSize(t-y,i,t,0,m);case"SAME_LOWER":case"SAME_UPPER":if(s!==1)throw new Error("Dilation not supported for SAME_UPPER or SAME_LOWER");{let w=(Math.floor((t+i-1)/i)-1)*i+o-t;return u[d]=Math.floor(f==="SAME_LOWER"?(w+1)/2:w/2),u[c]=w-u[d],fi.computeOutputSize(t+u[d]+u[c]-y,i,t,u[d],m)}default:throw new Error("Unsupported AutoPad type")}else return fi.computeOutputSize(t+u[d]+u[c]-y,i,t,u[d],m)}},bv=class{static getShapeOfGemmResult(e,t,i,s,o){if(e.length!==2||i.length!==2)throw new Error("shape need to be of size 2");let u,d,c;t?(u=e[1],d=e[0]):(u=e[0],d=e[1]);let f=-1;if(s?(c=i[0],f=1):(c=i[1],f=0),i[f]!==d)throw new Error("dimension mismatch");if(u<=0||c<=0||d<=0)throw new Error("invalid shape specified");if(o&&!ss.isValidBroadcast(o,[u,c]))throw new Error("gemm: invalid bias shape for broadcast");return[u,c,d]}},Sv=-34028234663852886e22,kv=34028234663852886e22}),ef,Ev=ae(()=>{"use strict";Ie(),ef=(e,t)=>new(Ul(t))(e)}),Rc,km,Dc,Em,Mc,Tm,Bc,Pc,Lc,Cm,Tv,h$=ae(()=>{"use strict";Ie(),Cn(),Rc=new Map([["float32",32],["float16",16],["int32",32],["uint32",32],["int64",64],["uint64",64],["int8",8],["uint8",8],["int4",4],["uint4",4]]),km=(e,t)=>{if(t==="int32")return e;let i=Rc.get(t);if(!i)throw new Error(`WebNN backend does not support data type: ${t}`);let s=i/8;if(e.byteLength%s!==0)throw new Error(`Invalid Uint8Array length - must be a multiple of ${s}.`);let o=e.byteLength/s,u=new(Ul(t))(e.buffer,e.byteOffset,o);switch(t){case"int64":case"uint64":{let d=new Int32Array(o);for(let c=0;c<o;c++){let f=u[c];if(f>2147483647n||f<-2147483648n)throw new Error("Can not convert int64 data to int32 - value out of range.");d[c]=Number(f)}return new Uint8Array(d.buffer)}case"int8":case"uint8":case"uint32":{if(t==="uint32"&&u.some(c=>c>2147483647))throw new Error("Can not convert uint32 data to int32 - value out of range.");let d=Int32Array.from(u,Number);return new Uint8Array(d.buffer)}default:throw new Error(`Unsupported data conversion from ${t} to 'int32'`)}},Dc=(e,t)=>{if(t==="int32")return e;if(e.byteLength%4!==0)throw new Error("Invalid Uint8Array length - must be a multiple of 4 (int32).");let i=e.byteLength/4,s=new Int32Array(e.buffer,e.byteOffset,i);switch(t){case"int64":{let o=BigInt64Array.from(s,BigInt);return new Uint8Array(o.buffer)}case"uint64":{if(s.some(u=>u<0))throw new Error("Can not convert int32 data to uin64 - negative value found.");let o=BigUint64Array.from(s,BigInt);return new Uint8Array(o.buffer)}case"int8":{if(s.some(u=>u<-128||u>127))throw new Error("Can not convert int32 data to int8 - value out of range.");let o=Int8Array.from(s,Number);return new Uint8Array(o.buffer)}case"uint8":{if(s.some(o=>o<0||o>255))throw new Error("Can not convert int32 data to uint8 - value out of range.");return Uint8Array.from(s,Number)}case"uint32":{if(s.some(u=>u<0))throw new Error("Can not convert int32 data to uint32 - negative value found.");let o=Uint32Array.from(s,Number);return new Uint8Array(o.buffer)}default:throw new Error(`Unsupported data conversion from 'int32' to ${t}`)}},Em=1,Mc=()=>Em++,Tm=new Map([["int8","int32"],["uint8","int32"],["uint32","int32"],["int64","int32"]]),Bc=(e,t)=>{let i=Rc.get(e);if(!i)throw new Error(`WebNN backend does not support data type: ${e}`);return t.length>0?Math.ceil(t.reduce((s,o)=>s*o)*i/8):0},Pc=class{constructor(e){this.isDataConverted=!1;let{sessionId:t,context:i,tensor:s,dataType:o,shape:u,fallbackDataType:d}=e;this.sessionId=t,this.mlContext=i,this.mlTensor=s,this.dataType=o,this.tensorShape=u,this.fallbackDataType=d}get tensor(){return this.mlTensor}get type(){return this.dataType}get fallbackType(){return this.fallbackDataType}get shape(){return this.tensorShape}get byteLength(){return Bc(this.dataType,this.tensorShape)}destroy(){He("verbose",()=>"[WebNN] TensorWrapper.destroy"),this.mlTensor.destroy()}write(e){this.mlContext.writeTensor(this.mlTensor,e)}async read(e){if(this.fallbackDataType){let t=await this.mlContext.readTensor(this.mlTensor),i=Dc(new Uint8Array(t),this.dataType);if(e){(e instanceof ArrayBuffer?new Uint8Array(e):new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).set(i);return}else return new Uint8Array(i).buffer}else return e?this.mlContext.readTensor(this.mlTensor,e):this.mlContext.readTensor(this.mlTensor)}canReuseTensor(e,t,i){return this.mlContext===e&&this.dataType===t&&this.tensorShape.length===i.length&&this.tensorShape.every((s,o)=>s===i[o])}setIsDataConverted(e){this.isDataConverted=e}},Lc=class{constructor(e,t){this.tensorManager=e,this.wrapper=t}get tensorWrapper(){return this.wrapper}releaseTensor(){this.tensorWrapper&&(this.tensorManager.releaseTensor(this.tensorWrapper),this.wrapper=void 0)}async ensureTensor(e,t,i,s){let o=this.tensorManager.getMLContext(e),u=this.tensorManager.getMLOpSupportLimits(e),d;if(!(u!=null&&u.input.dataTypes.includes(t))){if(d=Tm.get(t),!d||!(u!=null&&u.input.dataTypes.includes(d)))throw new Error(`WebNN backend does not support data type: ${t}`);He("verbose",()=>`[WebNN] TensorIdTracker.ensureTensor: fallback dataType from ${t} to ${d}`)}if(this.wrapper){if(this.wrapper.canReuseTensor(o,t,i))return this.wrapper.tensor;if(s){if(this.wrapper.byteLength!==Bc(t,i))throw new Error("Unable to copy data to tensor with different size.");this.activeUpload=new Uint8Array(await this.wrapper.read())}this.tensorManager.releaseTensor(this.wrapper)}let c=typeof MLTensorUsage>"u"?void 0:MLTensorUsage.READ|MLTensorUsage.WRITE;return this.wrapper=await this.tensorManager.getCachedTensor(e,t,i,c,!0,!0,d),s&&this.activeUpload&&(this.wrapper.write(this.activeUpload),this.activeUpload=void 0),this.wrapper.tensor}upload(e){let t=e;if(this.wrapper){if(this.wrapper.fallbackType)if(this.wrapper.fallbackType==="int32")t=km(e,this.wrapper.type),this.wrapper.setIsDataConverted(!0);else throw new Error(`Unsupported fallback data type: ${this.wrapper.fallbackType}`);if(e.byteLength===this.wrapper.byteLength){this.wrapper.write(t);return}else He("verbose",()=>"Data size does not match tensor size. Releasing tensor."),this.releaseTensor()}this.activeUpload?this.activeUpload.set(t):this.activeUpload=new Uint8Array(t)}async download(e){var t,i;if(this.activeUpload){let s=(t=this.wrapper)!=null&&t.isDataConverted?Dc(this.activeUpload,(i=this.wrapper)==null?void 0:i.type):this.activeUpload;if(e){e instanceof ArrayBuffer?new Uint8Array(e).set(s):new Uint8Array(e.buffer,e.byteOffset,e.byteLength).set(s);return}else return s.buffer}if(!this.wrapper)throw new Error("Tensor has not been created.");return e?this.wrapper.read(e):this.wrapper.read()}},Cm=class{constructor(e){this.backend=e,this.tensorTrackersById=new Map,this.freeTensors=[],this.externalTensors=new Set}getMLContext(e){let t=this.backend.getMLContext(e);if(!t)throw new Error("MLContext not found for session.");return t}getMLOpSupportLimits(e){return this.backend.getMLOpSupportLimits(e)}reserveTensorId(){let e=Mc();return this.tensorTrackersById.set(e,new Lc(this)),e}releaseTensorId(e){let t=this.tensorTrackersById.get(e);t&&(this.tensorTrackersById.delete(e),t.tensorWrapper&&this.releaseTensor(t.tensorWrapper))}async ensureTensor(e,t,i,s,o){He("verbose",()=>`[WebNN] TensorManager.ensureTensor {tensorId: ${t}, dataType: ${i}, shape: ${s}, copyOld: ${o}}`);let u=this.tensorTrackersById.get(t);if(!u)throw new Error("Tensor not found.");return u.ensureTensor(e,i,s,o)}upload(e,t){let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");i.upload(t)}async download(e,t){He("verbose",()=>`[WebNN] TensorManager.download {tensorId: ${e}, dstBuffer: ${t==null?void 0:t.byteLength}}`);let i=this.tensorTrackersById.get(e);if(!i)throw new Error("Tensor not found.");return i.download(t)}releaseTensorsForSession(e){for(let t of this.freeTensors)t.sessionId===e&&t.destroy();this.freeTensors=this.freeTensors.filter(t=>t.sessionId!==e)}registerTensor(e,t,i,s){let o=this.getMLContext(e),u=Mc(),d=new Pc({sessionId:e,context:o,tensor:t,dataType:i,shape:s});return this.tensorTrackersById.set(u,new Lc(this,d)),this.externalTensors.add(d),u}async getCachedTensor(e,t,i,s,o,u,d){let c=this.getMLContext(e);for(let[m,y]of this.freeTensors.entries())if(y.canReuseTensor(c,t,i)){He("verbose",()=>`[WebNN] Reusing tensor {dataType: ${t}, ${d?`fallbackDataType: ${d},`:""} shape: ${i}`);let w=this.freeTensors.splice(m,1)[0];return w.sessionId=e,w}He("verbose",()=>`[WebNN] MLContext.createTensor {dataType: ${t}, ${d?`fallbackDataType: ${d},`:""} shape: ${i}}`);let f=await c.createTensor({dataType:d??t,shape:i,dimensions:i,usage:s,writable:o,readable:u});return new Pc({sessionId:e,context:c,tensor:f,dataType:t,shape:i,fallbackDataType:d})}releaseTensor(e){this.externalTensors.has(e)&&this.externalTensors.delete(e),this.freeTensors.push(e)}},Tv=(...e)=>new Cm(...e)}),Co,Im,Cv,m$=ae(()=>{"use strict";Ie(),ra(),Ev(),h$(),Cn(),Co=new Map([[1,"float32"],[10,"float16"],[6,"int32"],[12,"uint32"],[7,"int64"],[13,"uint64"],[22,"int4"],[21,"uint4"],[3,"int8"],[2,"uint8"],[9,"uint8"]]),Im=(e,t)=>{if(e===t)return!0;if(e===void 0||t===void 0)return!1;let i=Object.keys(e).sort(),s=Object.keys(t).sort();return i.length===s.length&&i.every((o,u)=>o===s[u]&&e[o]===t[o])},Cv=class{constructor(e){this.tensorManager=Tv(this),this.mlContextBySessionId=new Map,this.sessionIdsByMLContext=new Map,this.mlContextCache=[],this.sessionGraphInputs=new Map,this.sessionGraphOutputs=new Map,this.temporaryGraphInputs=[],this.temporaryGraphOutputs=[],this.temporarySessionTensorIds=new Map,this.mlOpSupportLimitsBySessionId=new Map,Jp(e.logLevel,!!e.debug)}get currentSessionId(){if(this.activeSessionId===void 0)throw new Error("No active session");return this.activeSessionId}onRunStart(e){He("verbose",()=>`[WebNN] onRunStart {sessionId: ${e}}`),this.activeSessionId=e}onRunEnd(e){He("verbose",()=>`[WebNN] onRunEnd {sessionId: ${e}}`);let t=this.temporarySessionTensorIds.get(e);if(t){for(let i of t)He("verbose",()=>`[WebNN] releasing temporary tensor {tensorId: ${i}}`),this.tensorManager.releaseTensorId(i);this.temporarySessionTensorIds.delete(e),this.activeSessionId=void 0}}async createMLContext(e){if(e instanceof GPUDevice){let i=this.mlContextCache.findIndex(s=>s.gpuDevice===e);if(i!==-1)return this.mlContextCache[i].mlContext;{let s=await navigator.ml.createContext(e);return this.mlContextCache.push({gpuDevice:e,mlContext:s}),s}}else if(e===void 0){let i=this.mlContextCache.findIndex(s=>s.options===void 0&&s.gpuDevice===void 0);if(i!==-1)return this.mlContextCache[i].mlContext;{let s=await navigator.ml.createContext();return this.mlContextCache.push({mlContext:s}),s}}let t=this.mlContextCache.findIndex(i=>Im(i.options,e));if(t!==-1)return this.mlContextCache[t].mlContext;{let i=await navigator.ml.createContext(e);return this.mlContextCache.push({options:e,mlContext:i}),i}}registerMLContext(e,t){this.mlContextBySessionId.set(e,t);let i=this.sessionIdsByMLContext.get(t);i||(i=new Set,this.sessionIdsByMLContext.set(t,i)),i.add(e),this.mlOpSupportLimitsBySessionId.has(e)||this.mlOpSupportLimitsBySessionId.set(e,t.opSupportLimits()),this.temporaryGraphInputs.length>0&&(this.sessionGraphInputs.set(e,this.temporaryGraphInputs),this.temporaryGraphInputs=[]),this.temporaryGraphOutputs.length>0&&(this.sessionGraphOutputs.set(e,this.temporaryGraphOutputs),this.temporaryGraphOutputs=[])}onReleaseSession(e){this.sessionGraphInputs.delete(e),this.sessionGraphOutputs.delete(e);let t=this.mlContextBySessionId.get(e);if(!t)return;this.tensorManager.releaseTensorsForSession(e),this.mlContextBySessionId.delete(e),this.mlOpSupportLimitsBySessionId.delete(e);let i=this.sessionIdsByMLContext.get(t);if(i.delete(e),i.size===0){this.sessionIdsByMLContext.delete(t);let s=this.mlContextCache.findIndex(o=>o.mlContext===t);s!==-1&&this.mlContextCache.splice(s,1)}}getMLContext(e){return this.mlContextBySessionId.get(e)}getMLOpSupportLimits(e){return this.mlOpSupportLimitsBySessionId.get(e)}reserveTensorId(){return this.tensorManager.reserveTensorId()}releaseTensorId(e){He("verbose",()=>`[WebNN] releaseTensorId {tensorId: ${e}}`),this.tensorManager.releaseTensorId(e)}async ensureTensor(e,t,i,s,o){let u=Co.get(i);if(!u)throw new Error(`Unsupported ONNX data type: ${i}`);return this.tensorManager.ensureTensor(e??this.currentSessionId,t,u,s,o)}async createTemporaryTensor(e,t,i){He("verbose",()=>`[WebNN] createTemporaryTensor {onnxDataType: ${t}, shape: ${i}}`);let s=Co.get(t);if(!s)throw new Error(`Unsupported ONNX data type: ${t}`);let o=this.tensorManager.reserveTensorId();await this.tensorManager.ensureTensor(e,o,s,i,!1);let u=this.temporarySessionTensorIds.get(e);return u?u.push(o):this.temporarySessionTensorIds.set(e,[o]),o}uploadTensor(e,t){if(!it().shouldTransferToMLTensor)throw new Error("Trying to upload to a MLTensor while shouldTransferToMLTensor is false");He("verbose",()=>`[WebNN] uploadTensor {tensorId: ${e}, data: ${t.byteLength}}`),this.tensorManager.upload(e,t)}async downloadTensor(e,t){return this.tensorManager.download(e,t)}createMLTensorDownloader(e,t){return async()=>{let i=await this.tensorManager.download(e);return ef(i,t)}}registerMLTensor(e,t,i,s){let o=Co.get(i);if(!o)throw new Error(`Unsupported ONNX data type: ${i}`);let u=this.tensorManager.registerTensor(e,t,o,s);return He("verbose",()=>`[WebNN] registerMLTensor {tensor: ${t}, dataType: ${o}, dimensions: ${s}} -> {tensorId: ${u}}`),u}registerGraphInput(e){this.temporaryGraphInputs.push(e)}registerGraphOutput(e){this.temporaryGraphOutputs.push(e)}isGraphInput(e,t){let i=this.sessionGraphInputs.get(e);return i?i.includes(t):!1}isGraphOutput(e,t){let i=this.sessionGraphOutputs.get(e);return i?i.includes(t):!1}isGraphInputOutputTypeSupported(e,t,i=!0){let s=Co.get(Qi(t)),o=this.mlOpSupportLimitsBySessionId.get(e);return typeof s>"u"?!1:i?!!(o!=null&&o.input.dataTypes.includes(s)):!!(o!=null&&o.output.dataTypes.includes(s))}flush(){}}}),tf=ae(()=>{"use strict"}),Uc,yl,vl,zm,Nm,jc,Ep,Om,Iv,g$=ae(()=>{"use strict";Cn(),tf(),Uc=new Map([[64,250],[128,200],[256,200],[512,200],[2048,230],[4096,200],[8192,50],[16384,50],[32768,50],[65536,50],[131072,50],[262144,50],[524288,50],[1048576,50],[2097152,30],[4194304,20],[8388608,10],[12582912,10],[16777216,10],[26214400,15],[33554432,22],[44236800,2],[58982400,6],[67108864,6],[134217728,6],[167772160,6]]),yl=[],vl=e=>Math.ceil(Number(e)/16)*16,zm=e=>{for(let t=0;t<yl.length;t++){let i=yl[t];if(e<=i)return i}return Math.ceil(e/16)*16},Nm=1,jc=()=>Nm++,Ep=async(e,t,i,s)=>{let o=vl(i),u=e.device.createBuffer({size:o,usage:GPUBufferUsage.COPY_DST|GPUBufferUsage.MAP_READ});try{let d=e.getCommandEncoder();e.endComputePass(),d.copyBufferToBuffer(t,0,u,0,o),e.flush(),await u.mapAsync(GPUMapMode.READ);let c=u.getMappedRange();if(s){let f=s();return f.set(new Uint8Array(c,0,i)),f}else return new Uint8Array(c.slice(0,i))}finally{u.destroy()}},Om=class{constructor(e){this.backend=e,this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.buffersPending=[],this.capturedPendingBuffers=new Map;for(let[t]of Uc)yl.push(t),this.freeBuffers.set(t,[]),this.freeUniformBuffers.set(t,[]);this.sessionCount=0}upload(e,t){let i=t.buffer,s=t.byteOffset,o=t.byteLength,u=vl(o),d=this.storageCache.get(e);if(!d)throw new Error("gpu data for uploading does not exist");if(Number(d.originalSize)!==o)throw new Error(`inconsistent data size. gpu data size=${d.originalSize}, data size=${o}`);if(u===o&&s%4===0)this.backend.device.queue.writeBuffer(d.gpuData.buffer,0,i,s,o);else{let c=new Uint8Array(u);c.set(t),this.backend.device.queue.writeBuffer(d.gpuData.buffer,0,c,0,u)}He("verbose",()=>`[WebGPU] GpuDataManager.upload(id=${e})`)}memcpy(e,t){let i=this.storageCache.get(e);if(!i)throw new Error("source gpu data for memcpy does not exist");let s=this.storageCache.get(t);if(!s)throw new Error("destination gpu data for memcpy does not exist");if(i.originalSize!==s.originalSize)throw new Error("inconsistent source and destination gpu data size");let o=vl(i.originalSize),u=this.backend.getCommandEncoder();this.backend.endComputePass(),u.copyBufferToBuffer(i.gpuData.buffer,0,s.gpuData.buffer,0,o)}registerExternalBuffer(e,t,i){let s;if(i){if(s=i[0],e===i[1])return He("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${s}, buffer is the same, skip.`),s;if(this.backend.capturedCommandList.has(this.backend.currentSessionId))throw new Error(`Registering a different external buffer under graph capture mode is not supported yet.
             Please use the previous external buffer!`)}else s=jc();return this.storageCache.set(s,{gpuData:{id:s,type:0,buffer:e},originalSize:t}),He("verbose",()=>`[WebGPU] GpuDataManager.registerExternalBuffer(size=${t}) => id=${s}, registered.`),s}unregisterExternalBuffer(e){e!==void 0&&(this.storageCache.delete(e),He("verbose",()=>`[WebGPU] GpuDataManager.unregisterExternalBuffer() => id=${e}`))}create(e,t=GPUBufferUsage.STORAGE|GPUBufferUsage.COPY_SRC|GPUBufferUsage.COPY_DST){let i=zm(e),s,o=(t&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE,u=(t&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM;if(o||u){let c=(o?this.freeBuffers:this.freeUniformBuffers).get(i);c?c.length>0?s=c.pop():s=this.backend.device.createBuffer({size:i,usage:t}):s=this.backend.device.createBuffer({size:i,usage:t})}else s=this.backend.device.createBuffer({size:i,usage:t});let d={id:jc(),type:0,buffer:s};return this.storageCache.set(d.id,{gpuData:d,originalSize:Number(e)}),He("verbose",()=>`[WebGPU] GpuDataManager.create(size=${e}) => id=${d.id}`),d}get(e){var t;return(t=this.storageCache.get(e))==null?void 0:t.gpuData}release(e){let t=typeof e=="bigint"?Number(e):e,i=this.storageCache.get(t);if(!i){if(this.storageCache.size===0)return 0;throw new Error("releasing data does not exist")}return He("verbose",()=>`[WebGPU] GpuDataManager.release(id=${t}), gpuDataId=${i.gpuData.id}`),this.storageCache.delete(t),this.buffersPending.push(i.gpuData.buffer),i.originalSize}async download(e,t){let i=this.storageCache.get(Number(e));if(!i)throw new Error("data does not exist");await Ep(this.backend,i.gpuData.buffer,i.originalSize,t)}refreshPendingBuffers(){if(this.buffersPending.length!==0)if(this.backend.sessionStatus==="default"){for(let e of this.buffersPending){let t=Uc.get(e.size);if((e.usage&GPUBufferUsage.STORAGE)===GPUBufferUsage.STORAGE){let i=this.freeBuffers.get(e.size)||[];t===void 0||i.length>=t?e.destroy():i.push(e)}else if((e.usage&GPUBufferUsage.UNIFORM)===GPUBufferUsage.UNIFORM){let i=this.freeUniformBuffers.get(e.size)||[];t===void 0||i.length>=t?e.destroy():i.push(e)}else e.destroy()}this.buffersPending=[]}else{let e=this.capturedPendingBuffers.get(this.backend.currentSessionId);e||(e=[],this.capturedPendingBuffers.set(this.backend.currentSessionId,e));for(let t of this.buffersPending)e.push(t);this.buffersPending=[]}}dispose(){this.freeBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.freeUniformBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache.forEach(e=>{e.gpuData.buffer.destroy()}),this.capturedPendingBuffers.forEach(e=>{e.forEach(t=>{t.destroy()})}),this.storageCache=new Map,this.freeBuffers=new Map,this.freeUniformBuffers=new Map,this.capturedPendingBuffers=new Map}onCreateSession(){this.sessionCount+=1}onReleaseSession(e){let t=this.capturedPendingBuffers.get(e);t&&(t.forEach(i=>{i.destroy()}),this.capturedPendingBuffers.delete(e)),this.sessionCount-=1,this.sessionCount===0&&(He("warning",()=>"[WebGPU] Clearing webgpu buffer cache"),this.storageCache.forEach(i=>{i.gpuData.buffer.destroy()}),this.storageCache=new Map)}},Iv=(...e)=>new Om(...e)}),Am,Ye,mt=ae(()=>{"use strict";Am=class{constructor(e){Object.assign(this,e)}get cacheKey(){return this.key||(this.key=Object.getOwnPropertyNames(this).sort().map(e=>`${this[e]}`).join(";")),this.key}},Ye=e=>new Am(e)}),os,wl,Ct,Tt,ke,ht,Tp,as,hi,be,Io,J,_e,zv,rf,Rm,Nv,Pe=ae(()=>{"use strict";Ie(),Me(),os=64,wl=(e,t)=>{if(t===3)throw new Error("vec3 has same alignment as vec4, use vec4 instead");switch(Number(e)){case 10:return t>1?`vec${t}<f16>`:"f16";case 1:return t>1?`vec${t}<f32>`:"f32";case 6:return t>1?`vec${t}<i32>`:"i32";case 12:return t>1?`vec${t}<u32>`:"u32";case 7:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","i32"];case 13:if(t>1)throw new Error("currently not supported vecX of uint64 yet");return["vec2<u32>","u32"];case 9:if(t!==4)throw new Error("bool must be vec4");return["u32","vec4<bool>"];case 22:return"i32";case 21:return"u32";default:throw new Error(`Unknown data type: ${e}`)}},Ct=(e,t=1)=>{let i=wl(e,t);return typeof i=="string"?i:i[0]},Tt=(e,t=1)=>{let i=wl(e,t);return typeof i=="string"?i:i[1]},ke=(...e)=>{let t=[];return e.forEach(i=>{i.length!==0&&t.push({type:12,data:i},{type:12,data:K.computeStrides(i)})}),t},ht=e=>e%4===0?4:e%2===0?2:1,Tp=(e="f32",t,i="0")=>!t||t===1?`${e}(${i})`:`vec${t}<${e}>(${i})`,as=(e,t,i)=>e==="f32"?i:t===1?`f32(${i})`:`vec${t}<f32>(${i})`,hi=(e,t)=>t===4?`(${e}.x + ${e}.y + ${e}.z + ${e}.w)`:t===2?`(${e}.x + ${e}.y)`:t===3?`(${e}.x + ${e}.y + ${e}.z)`:e,be=(e,t,i,s)=>e.startsWith("uniforms.")&&i>4?typeof t=="string"?s==="f16"?`${e}[(${t}) / 8][(${t}) % 8 / 4][(${t}) % 8 % 4]`:`${e}[(${t}) / 4][(${t}) % 4]`:s==="f16"?`${e}[${Math.floor(t/8)}][${Math.floor(t%8/4)}][${t%8%4}]`:`${e}[${Math.floor(t/4)}][${t%4}]`:i>1?`${e}[${t}]`:e,Io=(e,t,i,s,o)=>{let u=typeof i=="number",d=u?i:i.length,c=[...new Array(d).keys()],f=d<2?"u32":d<=4?`vec${d}<u32>`:`array<u32, ${d}>`,m=wl(t,o),y=typeof m=="string"?m:m[1],w=typeof m=="string"?m:m[0],$={indices:f,value:y,storage:w,tensor:t},S=O=>typeof O=="string"?O:`${O}u`,b={offsetToIndices:!1,indicesToOffset:!1,broadcastedIndicesToOffset:!1,set:!1,setByIndices:!1,get:!1,getByIndices:!1},C=u?"uniforms.":"",N=`${C}${e}_shape`,k=`${C}${e}_strides`,E="";for(let O=0;O<d-1;O++)E+=`
    let dim${O} = current / ${be(k,O,d)};
    let rest${O} = current % ${be(k,O,d)};
    indices[${O}] = dim${O};
    current = rest${O};
    `;E+=`indices[${d-1}] = current;`;let A=d<2?"":`
  fn o2i_${e}(offset: u32) -> ${$.indices} {
    var indices: ${$.indices};
    var current = offset;
    ${E}
    return indices;
  }`,D=O=>(b.offsetToIndices=!0,d<2?O:`o2i_${e}(${O})`),B=[];if(d>=2)for(let O=d-1;O>=0;O--)B.push(`${be(k,O,d)} * (indices[${O}])`);let P=d<2?"":`
  fn i2o_${e}(indices: ${$.indices}) -> u32 {
    return ${B.join("+")};
  }`,V=O=>(b.indicesToOffset=!0,d<2?O:`i2o_${e}(${O})`),I=(...O)=>d===0?"0u":`${$.indices}(${O.map(S).join(",")})`,Y=(O,F)=>d<2?`${O}`:`${be(O,F,d)}`,te=(O,F,ne)=>d<2?`${O}=${ne};`:`${be(O,F,d)}=${ne};`,he={},ce=(O,F)=>{b.broadcastedIndicesToOffset=!0;let ne=`${F.name}broadcastedIndicesTo${e}Offset`;if(ne in he)return`${ne}(${O})`;let X=[];for(let ve=d-1;ve>=0;ve--){let $e=F.indicesGet("outputIndices",ve+F.rank-d);X.push(`${Y(k,ve)} * (${$e} % ${Y(N,ve)})`)}return he[ne]=`fn ${ne}(outputIndices: ${F.type.indices}) -> u32 {
             return ${X.length>0?X.join("+"):"0u"};
           }`,`${ne}(${O})`},pe=(O,F)=>(()=>{if($.storage===$.value)return`${e}[${O}]=${F};`;if($.storage==="vec2<u32>"&&$.value==="i32")return`${e}[${O}]=vec2<u32>(u32(${F}), select(0u, 0xFFFFFFFFu, ${F} < 0));`;if($.storage==="vec2<u32>"&&$.value==="u32")return`${e}[${O}]=vec2<u32>(u32(${F}), 0u);`;if($.storage==="u32"&&$.value==="vec4<bool>")return`${e}[${O}]=dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(${F}));`;throw new Error(`not supported combination of storage type ${$.storage} and value type ${$.value} yet`)})(),G=O=>(()=>{if($.storage===$.value)return`${e}[${O}]`;if($.storage==="vec2<u32>"&&$.value==="i32")return`i32(${e}[${O}].x)`;if($.storage==="vec2<u32>"&&$.value==="u32")return`u32(${e}[${O}].x)`;if($.storage==="u32"&&$.value==="vec4<bool>")return`vec4<bool>(bool(${e}[${O}] & 0xFFu), bool(${e}[${O}] & 0xFF00u), bool(${e}[${O}] & 0xFF0000u), bool(${e}[${O}] & 0xFF000000u))`;throw new Error(`not supported combination of storage type ${$.storage} and value type ${$.value} yet`)})(),me=d<2?"":`
  fn get_${e}ByIndices(indices: ${$.indices}) -> ${y} {
    return ${G(`i2o_${e}(indices)`)};
  }`,ye=d<2?"":(()=>{let O=c.map(ne=>`d${ne}: u32`).join(", "),F=c.map(ne=>`d${ne}`).join(", ");return`
  fn get_${e}(${O}) -> ${y} {
    return get_${e}ByIndices(${I(F)});
  }`})(),ge=(...O)=>{if(O.length!==d)throw new Error(`indices length must be ${d}`);let F=O.map(S).join(",");return d===0?G("0u"):d===1?G(F[0]):(b.get=!0,b.getByIndices=!0,b.indicesToOffset=!0,`get_${e}(${F})`)},ee=O=>d<2?G(O):(b.getByIndices=!0,b.indicesToOffset=!0,`get_${e}ByIndices(${O})`),re=d<2?"":`
  fn set_${e}ByIndices(indices: ${$.indices}, value: ${y}) {
    ${pe(`i2o_${e}(indices)`,"value")}
  }`,se=d<2?"":(()=>{let O=c.map(ne=>`d${ne}: u32`).join(", "),F=c.map(ne=>`d${ne}`).join(", ");return`
  fn set_${e}(${O}, value: ${y}) {
    set_${e}ByIndices(${I(F)}, value);
  }`})();return{impl:()=>{let O=[],F=!1;return b.offsetToIndices&&(O.push(A),F=!0),b.indicesToOffset&&(O.push(P),F=!0),b.broadcastedIndicesToOffset&&(Object.values(he).forEach(ne=>O.push(ne)),F=!0),b.set&&(O.push(se),F=!0),b.setByIndices&&(O.push(re),F=!0),b.get&&(O.push(ye),F=!0),b.getByIndices&&(O.push(me),F=!0),!u&&F&&O.unshift(`const ${N} = ${$.indices}(${i.join(",")});`,`const ${k} = ${$.indices}(${K.computeStrides(i).join(",")});`),O.join(`
`)},type:$,offsetToIndices:D,indicesToOffset:V,broadcastedIndicesToOffset:ce,indices:I,indicesGet:Y,indicesSet:te,set:(...O)=>{if(O.length!==d+1)throw new Error(`indices length must be ${d}`);let F=O[d];if(typeof F!="string")throw new Error("value must be string");let ne=O.slice(0,d).map(S).join(",");return d===0?pe("0u",F):d===1?pe(ne[0],F):(b.set=!0,b.setByIndices=!0,b.indicesToOffset=!0,`set_${e}(${ne}, ${F})`)},setByOffset:pe,setByIndices:(O,F)=>d<2?pe(O,F):(b.setByIndices=!0,b.indicesToOffset=!0,`set_${e}ByIndices(${O}, ${F});`),get:ge,getByOffset:G,getByIndices:ee,usage:s,name:e,strides:k,shape:N,rank:d}},J=(e,t,i,s=1)=>Io(e,t,i,"input",s),_e=(e,t,i,s=1)=>Io(e,t,i,"output",s),zv=(e,t,i)=>Io(e,t,i,"atomicOutput",1),rf=(e,t,i,s=1)=>Io(e,t,i,"internal",s),Rm=class{constructor(e,t){this.normalizedDispatchGroup=e,this.limits=t,this.internalVariables=[],this.variables=[],this.uniforms=[],this.variableIndex=0}guardAgainstOutOfBoundsWorkgroupSizes(e){return`if (global_idx >= ${typeof e=="number"?`${e}u`:e}) { return; }`}mainStart(e=os){let t=typeof e=="number"?e:e[0],i=typeof e=="number"?1:e[1],s=typeof e=="number"?1:e[2];if(t>this.limits.maxComputeWorkgroupSizeX||i>this.limits.maxComputeWorkgroupSizeY||s>this.limits.maxComputeWorkgroupSizeZ)throw new Error(`workgroup size [${t}, ${i}, ${s}] exceeds the maximum workgroup size [${this.limits.maxComputeWorkgroupSizeX}, ${this.limits.maxComputeWorkgroupSizeY}, ${this.limits.maxComputeWorkgroupSizeZ}].`);if(t*i*s>this.limits.maxComputeInvocationsPerWorkgroup)throw new Error(`workgroup size [${t}, ${i}, ${s}] exceeds the maximum workgroup invocations ${this.limits.maxComputeInvocationsPerWorkgroup}.`);let o=this.normalizedDispatchGroup[1]===1&&this.normalizedDispatchGroup[2]===1,u=o?`@builtin(global_invocation_id) global_id : vec3<u32>,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(local_invocation_id) local_id : vec3<u32>`:`@builtin(global_invocation_id) global_id : vec3<u32>,
                                             @builtin(local_invocation_id) local_id : vec3<u32>,
    @builtin(local_invocation_index) local_idx : u32,
    @builtin(workgroup_id) workgroup_id : vec3<u32>,
    @builtin(num_workgroups) num_workgroups : vec3<u32>`,d=o?`let global_idx = global_id.x;
         let workgroup_index = workgroup_id.x;`:`let workgroup_index = workgroup_id.z * num_workgroups[0] * num_workgroups[1] +
             workgroup_id.y * num_workgroups[0] + workgroup_id.x;
         let global_idx = workgroup_index * ${t*i*s}u + local_idx;`;return`@compute @workgroup_size(${t}, ${i}, ${s})
  fn main(${u}) {
    ${d}
  `}appendVariableUniforms(e){e.rank!==0&&(e.shape.startsWith("uniforms.")&&this.uniforms.push({name:e.shape.replace("uniforms.",""),type:"u32",length:e.rank}),e.strides.startsWith("uniforms.")&&this.uniforms.push({name:e.strides.replace("uniforms.",""),type:"u32",length:e.rank}))}declareVariable(e,t){if(e.usage==="internal")throw new Error("cannot use internal variable with declareVariable(). use registerInternalVariables() instead.");this.variables.push(e),this.appendVariableUniforms(e);let i=e.usage==="input"?"read":"read_write",s=e.usage==="atomicOutput"?"atomic<i32>":e.type.storage;return`@group(0) @binding(${t}) var<storage, ${i}> ${e.name}: array<${s}>;`}declareVariables(...e){return e.map(t=>this.declareVariable(t,this.variableIndex++)).join(`
`)}registerInternalVariable(e){if(e.usage!=="internal")throw new Error("cannot use input or output variable with registerInternalVariable(). use declareVariables() instead.");this.internalVariables.push(e),this.appendVariableUniforms(e)}registerInternalVariables(...e){return e.forEach(t=>this.registerInternalVariable(t)),this}registerUniform(e,t,i=1){return this.uniforms.push({name:e,type:t,length:i}),this}registerUniforms(e){return this.uniforms=this.uniforms.concat(e),this}uniformDeclaration(){if(this.uniforms.length===0)return"";let e=[];for(let{name:t,type:i,length:s}of this.uniforms)if(s&&s>4)i==="f16"?e.push(`@align(16) ${t}:array<mat2x4<${i}>, ${Math.ceil(s/8)}>`):e.push(`${t}:array<vec4<${i}>, ${Math.ceil(s/4)}>`);else{let o=s==null||s===1?i:`vec${s}<${i}>`;e.push(`${t}:${o}`)}return`
      struct Uniforms { ${e.join(", ")} };
      @group(0) @binding(${this.variableIndex}) var<uniform> uniforms: Uniforms;`}get additionalImplementations(){return this.uniformDeclaration()+this.variables.map(e=>e.impl()).join(`
`)+this.internalVariables.map(e=>e.impl()).join(`
`)}get variablesInfo(){if(this.uniforms.length===0)return;let e=t=>[12,10,1,6][["u32","f16","f32","i32"].indexOf(t)];return this.uniforms.map(t=>[e(t.type),t.length??1])}},Nv=(e,t)=>new Rm(e,t)}),Dm,Wc,Mm,Bm,Pm,Lm,yr,Ov,Av,mi=ae(()=>{"use strict";Ie(),Me(),mt(),Pe(),Dm=(e,t)=>{if(!e||e.length!==1)throw new Error("Transpose requires 1 input.");if(t.length!==0&&t.length!==e[0].dims.length)throw new Error(`perm size ${t.length} does not match input rank ${e[0].dims.length}`)},Wc=(e,t)=>t.length!==0?t:[...new Array(e).keys()].reverse(),Mm=(e,t)=>K.sortBasedOnPerm(e,Wc(e.length,t)),Bm=(e,t,i,s)=>{let o=`fn perm(i: ${s.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`;for(let u=0;u<t;++u)o+=`a[${e[u]}]=i[${u}];`;return o+="return a;}"},Pm=(e,t)=>{let i=[],s=[];for(let o=0;o<e.length;++o)e[o]!==1&&i.push(e[o]),e[t[o]]!==1&&s.push(t[o]);return{newShape:i,newPerm:s}},Lm=(e,t)=>{let i=0;for(let s=0;s<e.length;++s)if(t[e[s]]!==1){if(e[s]<i)return!1;i=e[s]}return!0},yr=(e,t)=>{let i=e.dataType,s=e.dims.length,o=Wc(s,t),u=Mm(e.dims,o),d=e.dims,c=u,f=s<2||Lm(o,e.dims),m;if(f)return m=b=>{let C=J("input",i,d,4),N=_e("output",i,c,4);return`
  ${b.registerUniform("output_size","u32").declareVariables(C,N)}
  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    output[global_idx] = input[global_idx];
  }`},{name:"TransposeCopy",shaderCache:{inputDependencies:["type"]},getRunData:()=>{let b=K.size(u);return{outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(b/64/4)},programUniforms:[{type:12,data:Math.ceil(b/4)}]}},getShaderSource:m};let{newShape:y,newPerm:w}=Pm(e.dims,o),$=K.areEqual(w,[2,3,1]),S=K.areEqual(w,[3,1,2]);if(y.length===2||$||S){d=$?[y[0],y[1]*y[2]]:S?[y[0]*y[1],y[2]]:y,c=[d[1],d[0]];let b=16;return m=C=>{let N=J("a",i,d.length),k=_e("output",i,c.length);return`
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

  ${Bm(o,s,C,N)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${N.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${N.setByOffset("global_idx",C.getByIndices("aIndices"))}
  }`},{name:"Transpose",shaderCache:{hint:`${t}`,inputDependencies:["rank"]},getRunData:()=>{let b=K.size(u);return{outputs:[{dims:u,dataType:e.dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...ke(d,c)]}},getShaderSource:m}},Ov=(e,t)=>{Dm(e.inputs,t.perm),e.compute(yr(e.inputs[0],t.perm))},Av=e=>Ye({perm:e.perm})}),Um,jm,Wm,Vm,Fm,qm,Hm,Gm,Km,Qm,jr,Rv,Dv,Mv,Bv,Pv,Lv,Uv,jv,Wv,Vv,y$=ae(()=>{"use strict";Ie(),Me(),Pe(),nf(),mi(),Um={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate * candidate",logSumExp:"bestValue + exp(candidate)",l1:"bestValue + abs(candidate)",l2:"bestValue + candidate * candidate",logSum:"bestValue + candidate"},jm={max:"select(bestValue, candidate, candidate > bestValue)",min:"select(bestValue, candidate, candidate < bestValue)",mean:"bestValue + candidate",sum:"bestValue + candidate",prod:"bestValue * candidate",sumSquare:"bestValue + candidate",logSumExp:"bestValue + candidate",l1:"bestValue + candidate",l2:"bestValue + candidate",logSum:"bestValue + candidate"},Wm={max:"_A[offset]",min:"_A[offset]",mean:"0",sum:"0",prod:"1",sumSquare:"0",logSumExp:"0",l1:"0",l2:"0",logSum:"0"},Vm={max:"bestValue",min:"bestValue",sum:"bestValue",prod:"bestValue",sumSquare:"bestValue",logSumExp:"log(bestValue)",l1:"bestValue",l2:"sqrt(bestValue)",logSum:"log(bestValue)"},Fm=(e,t)=>{let i=[];for(let s=t-e;s<t;++s)i.push(s);return i},qm=(e,t)=>{let i=[],s=e.length;for(let u=0;u<s;u++)t.indexOf(u)===-1&&i.push(e[u]);let o=t.map(u=>e[u]);return[i,o]},Hm=(e,t)=>{let i=e.length+t.length,s=[],o=0;for(let u=0;u<i;u++)t.indexOf(u)===-1?s.push(e[o++]):s.push(1);return s},Gm=(e,t)=>{for(let i=0;i<e.length;++i)if(e[e.length-i-1]!==t-1-i)return!1;return!0},Km=(e,t)=>{let i=[];if(!Gm(e,t)){for(let s=0;s<t;++s)e.indexOf(s)===-1&&i.push(s);e.forEach(s=>i.push(s))}return i},Qm=(e,t,i,s,o,u,d)=>{let c=i[0].dims,f=K.size(u),m=K.size(d),y=J("_A",i[0].dataType,c),w=_e("output",o,u),$=64;f===1&&($=256);let S=`
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

          var bestValue = f32(${Wm[s]});
          let Length = uniforms.reduceSize;
          for (var k = local_idx; k < Length; k = k + ${$}) {
           let candidate = f32(${y.getByOffset("offset + k")});
           bestValue = ${Um[s]};
          }
          aBestValues[local_idx] = bestValue;
          workgroupBarrier();

         var reduceSize = min(Length, ${$}u);
         for (var currentSize = reduceSize / 2u; reduceSize > 1u;
             currentSize = reduceSize / 2u) {
           let interval = DIV_CEIL(reduceSize, 2u);
           if (local_idx < currentSize) {
            let candidate = aBestValues[local_idx + interval];
            bestValue = ${jm[s]};
            aBestValues[local_idx] = bestValue;
           }
           reduceSize = interval;
           workgroupBarrier();
         }

         if (local_idx == 0u) {
          ${w.setByOffset("outputIndex",`${s==="mean"?`${w.type.storage}(bestValue / f32(uniforms.reduceSize))`:`${w.type.storage}(${Vm[s]})`}`)};
         }
        }`;return{name:e,shaderCache:{hint:`${t};${$}`,inputDependencies:["type"]},getShaderSource:b,getRunData:()=>({outputs:[{dims:u,dataType:o}],dispatchGroup:{x:f},programUniforms:[{type:12,data:m}]})}},jr=(e,t,i,s)=>{let o=e.inputs.length===1?i:Cp(e.inputs,i),u=o.axes;u.length===0&&!o.noopWithEmptyAxes&&(u=e.inputs[0].dims.map((S,b)=>b));let d=K.normalizeAxes(u,e.inputs[0].dims.length),c=d,f=e.inputs[0],m=Km(c,e.inputs[0].dims.length);m.length>0&&(f=e.compute(yr(e.inputs[0],m),{inputs:[0],outputs:[-1]})[0],c=Fm(c.length,f.dims.length));let[y,w]=qm(f.dims,c),$=y;o.keepDims&&($=Hm(y,d)),e.compute(Qm(t,o.cacheKey,[f],s,e.inputs[0].dataType,$,w),{inputs:[f]})},Rv=(e,t)=>{jr(e,"ReduceMeanShared",t,"mean")},Dv=(e,t)=>{jr(e,"ReduceL1Shared",t,"l1")},Mv=(e,t)=>{jr(e,"ReduceL2Shared",t,"l2")},Bv=(e,t)=>{jr(e,"ReduceLogSumExpShared",t,"logSumExp")},Pv=(e,t)=>{jr(e,"ReduceMaxShared",t,"max")},Lv=(e,t)=>{jr(e,"ReduceMinShared",t,"min")},Uv=(e,t)=>{jr(e,"ReduceProdShared",t,"prod")},jv=(e,t)=>{jr(e,"ReduceSumShared",t,"sum")},Wv=(e,t)=>{jr(e,"ReduceSumSquareShared",t,"sumSquare")},Vv=(e,t)=>{jr(e,"ReduceLogSumShared",t,"logSum")}}),Wr,Zm,Ml,Cp,Vr,Ym,Xm,Jm,eg,tg,rg,ng,ig,ag,sg,Fr,Fv,qv,Hv,Gv,Kv,Qv,Zv,Yv,Xv,Jv,nf=ae(()=>{"use strict";Ie(),Me(),mt(),Pe(),y$(),Wr=e=>{if(!e||e.length===0||e.length>2)throw new Error("Reduce op requires 1 or 2 inputs.");if(e.length===2&&e[1].dims.length!==1)throw new Error("Invalid axes input dims.")},Zm=e=>["","",`var value = ${e.getByIndices("input_indices")};`,""],Ml=(e,t,i,s,o,u,d=!1,c=!1)=>{let f=[],m=i[0].dims,y=m.length,w=K.normalizeAxes(o,y),$=!c&&w.length===0;m.forEach((C,N)=>{$||w.indexOf(N)>=0?d&&f.push(1):f.push(C)});let S=f.length,b=K.size(f);return{name:e,shaderCache:t,getShaderSource:C=>{let N=[],k=J("_A",i[0].dataType,y),E=_e("output",u,S),A=s(k,E,w),D=A[2];for(let B=0,P=0;B<y;B++)$||w.indexOf(B)>=0?(d&&P++,D=`for(var j${B}: u32 = 0; j${B} < ${m[B]}; j${B}++) {
                  ${A[2].includes("last_index")?`let last_index = j${B};`:""}
                  ${k.indicesSet("input_indices",B,`j${B}`)}
                  ${D}
                }`):(N.push(`${k.indicesSet("input_indices",B,E.indicesGet("output_indices",P))};`),P++);return`

        ${C.registerUniform("output_size","u32").declareVariables(k,E)}

        ${C.mainStart()}
          ${C.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          var input_indices: ${k.type.indices};
          let output_indices = ${E.offsetToIndices("global_idx")};

          ${N.join(`
`)}
          ${A[0]}       // init ops for reduce max/min
          ${A[1]}
          ${D}
          ${A[3]}
          ${A.length===4?E.setByOffset("global_idx","value"):A.slice(4).join(`
`)}
        }`},getRunData:()=>({outputs:[{dims:f,dataType:u}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:[{type:12,data:b},...ke(m,f)]})}},Cp=(e,t)=>{let i=[];return e[1].dims[0]>0&&e[1].getBigInt64Array().forEach(s=>i.push(Number(s))),Ye({axes:i,keepDims:t.keepDims,noopWithEmptyAxes:t.noopWithEmptyAxes})},Vr=(e,t,i,s)=>{let o=e.inputs,u=o.length===1?i:Cp(o,i);e.compute(Ml(t,{hint:u.cacheKey,inputDependencies:["rank"]},[o[0]],u.noopWithEmptyAxes&&u.axes.length===0?Zm:s,u.axes,o[0].dataType,u.keepDims,u.noopWithEmptyAxes),{inputs:[0]})},Ym=(e,t)=>{Wr(e.inputs),Vr(e,"ReduceLogSum",t,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,"value = log(value);"])},Xm=(e,t)=>{Wr(e.inputs),Vr(e,"ReduceL1",t,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += abs(${i.getByIndices("input_indices")});`,""])},Jm=(e,t)=>{Wr(e.inputs),Vr(e,"ReduceL2",t,(i,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += (t * t);`,"value = sqrt(value);"])},eg=(e,t)=>{Wr(e.inputs),Vr(e,"ReduceLogSumExp",t,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += exp(${i.getByIndices("input_indices")});`,"value = log(value);"])},tg=(e,t)=>{Wr(e.inputs),Vr(e,"ReduceMax",t,(i,s,o)=>{let u=[];for(let d=0;d<i.rank;d++)(o.indexOf(d)>=0||o.length===0)&&u.push(i.indicesSet("input_indices",d,0));return[`${u.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = max(value, ${i.getByIndices("input_indices")});`,""]})},rg=(e,t)=>{Wr(e.inputs),Vr(e,"ReduceMean",t,(i,s,o)=>{let u=1;for(let d=0;d<i.rank;d++)(o.indexOf(d)>=0||o.length===0)&&(u*=e.inputs[0].dims[d]);return["var sum = f32(0);","",`sum += f32(${i.getByIndices("input_indices")});`,`let value = ${s.type.value}(sum / ${u});`]})},ng=(e,t)=>{Wr(e.inputs),Vr(e,"ReduceMin",t,(i,s,o)=>{let u=[];for(let d=0;d<i.rank;d++)(o.indexOf(d)>=0||o.length===0)&&u.push(`input_indices[${d}] = 0;`);return[`${u.join(`
`)}`,`var value = ${i.getByIndices("input_indices")};`,`value = min(value, ${i.getByIndices("input_indices")});`,""]})},ig=(e,t)=>{Wr(e.inputs),Vr(e,"ReduceProd",t,(i,s)=>[`var value = ${s.type.storage}(1);`,"",`value *= ${i.getByIndices("input_indices")};`,""])},ag=(e,t)=>{Wr(e.inputs),Vr(e,"ReduceSum",t,(i,s)=>[`var value = ${s.type.storage}(0);`,"",`value += ${i.getByIndices("input_indices")};`,""])},sg=(e,t)=>{Wr(e.inputs),Vr(e,"ReduceSumSquare",t,(i,s)=>[`var t = ${s.type.value}(0); var value = ${s.type.value}(0);`,"",`t = ${i.getByIndices("input_indices")}; value += t * t;`,""])},Fr=(e,t,i)=>{if(t.length===0)return i;let s=1,o=1;for(let u=0;u<t.length;u++)t.indexOf(u)===-1?s*=e[u]:o*=e[u];return o<32&&s>1024},Fv=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?rg(e,t):Rv(e,t)},qv=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Xm(e,t):Dv(e,t)},Hv=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Jm(e,t):Mv(e,t)},Gv=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?eg(e,t):Bv(e,t)},Kv=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?tg(e,t):Pv(e,t)},Qv=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ng(e,t):Lv(e,t)},Zv=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ig(e,t):Uv(e,t)},Yv=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?ag(e,t):jv(e,t)},Xv=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?sg(e,t):Wv(e,t)},Jv=(e,t)=>{Fr(e.inputs[0].dims,t.axes,t.noopWithEmptyAxes)?Ym(e,t):Vv(e,t)}}),Vc,e1,t1,Ip,v$=ae(()=>{"use strict";Ie(),mt(),nf(),Vc=e=>{if(!e||e.length===0||e.length>2)throw new Error("ArgMinMaxOp op requires 1 or 2 inputs.");if(e[0].dataType!==1)throw new Error("Invalid input type.")},e1=(e,t)=>{Vc(e.inputs);let i=(s,o,u)=>{let d=[];for(let c=0;c<s.rank;c++)(u.indexOf(c)>=0||u.length===0)&&d.push(`input_indices[${c}] = 0;`);return[`${d.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${s.getByIndices("input_indices")} ${t.selectLastIndex>0?"<=":"<"} value) {
         value = ${s.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",o.setByOffset("global_idx","best_index")]};e.compute(Ml("ArgMin",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},t1=(e,t)=>{Vc(e.inputs);let i=(s,o,u)=>{let d=[];for(let c=0;c<s.rank;c++)(u.indexOf(c)>=0||u.length===0)&&d.push(`input_indices[${c}] = 0;`);return[`${d.join(`
`)}`,`var value = ${s.getByIndices("input_indices")};
var best_index : i32 = 0;`,`if (${s.getByIndices("input_indices")} ${t.selectLastIndex>0?">=":">"} value) {
         value = ${s.getByIndices("input_indices")};
         best_index = i32(last_index);
       }`,"",o.setByOffset("global_idx","best_index")]};e.compute(Ml("argMax",{hint:t.cacheKey,inputDependencies:["rank"]},[e.inputs[0]],i,[t.axis],7,t.keepDims),{inputs:[0]})},Ip=e=>Ye(e)}),og,_l,ug,lg,dg,Fo,cg,r1,af=ae(()=>{"use strict";Ie(),Me(),tf(),Pe(),og=(e,t)=>{let i=e[0],s=e[1],o=e[2],u=e[3],d=e[4],c=e[5];if(d&&c)throw new Error("Attention cannot have both past and attention_bias");if(i.dims.length!==3)throw new Error('Input "input" must have 3 dimensions');let f=i.dims[0],m=i.dims[1],y=i.dims[2];if(o.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimensions');if(s.dims.length!==2)throw new Error('Input "weights" is expected to have 2 dimensions');if(s.dims[0]!==y)throw new Error("Input 1 dimension 0 should have same length as dimension 2 of input 0");if(o.dims[0]!==s.dims[1])throw new Error('Input "bias" dimension 0 should have same length as dimension 1 of input "weights"');let w=o.dims[0]/3,$=w,S=$;if(t.qkvHiddenSizes.length>0){if(t.qkvHiddenSizes.length!==3)throw new Error("qkv_hidden_sizes attribute should have 3 elements");for(let A of t.qkvHiddenSizes)if(A%t.numHeads!==0)throw new Error("qkv_hidden_sizes should be divisible by num_heads");w=t.qkvHiddenSizes[0],$=t.qkvHiddenSizes[1],S=t.qkvHiddenSizes[2]}let b=m;if(w!==$)throw new Error("qkv_hidden_sizes first element should be same as the second");if(o.dims[0]!==w+$+S)throw new Error('Input "bias" dimension 0 should have same length as sum of Q/K/V hidden sizes');let C=0;if(d){if($!==S)throw new Error('Input "past" expect k_hidden_size == v_hidden_size');if(d.dims.length!==5)throw new Error('Input "past" must have 5 dimensions');if(d.dims[0]!==2)throw new Error('Input "past" first dimension must be 2');if(d.dims[1]!==f)throw new Error('Input "past" second dimension must be batch_size');if(d.dims[2]!==t.numHeads)throw new Error('Input "past" third dimension must be num_heads');if(d.dims[4]!==$/t.numHeads)throw new Error('Input "past" fifth dimension must be k_hidden_size / num_heads');t.pastPresentShareBuffer||(C=d.dims[3])}let N=b+C,k=-1,E=0;if(u)throw new Error("Mask not supported");if(d)throw new Error("past is not supported");if(c){if(c.dims.length!==4)throw new Error('Input "attention_bias" must have 4 dimensions');if(c.dims[0]!==f||c.dims[1]!==t.numHeads||c.dims[2]!==m||c.dims[3]!==N)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:f,sequenceLength:m,pastSequenceLength:C,kvSequenceLength:b,totalSequenceLength:N,maxSequenceLength:k,inputHiddenSize:y,hiddenSize:w,vHiddenSize:S,headSize:Math.floor(w/t.numHeads),vHeadSize:Math.floor(S/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:E,scale:t.scale,broadcastResPosBias:!1,passPastInKv:!1,qkvFormat:1}},_l=(e,t,i)=>t&&e?`
      let total_sequence_length_input = u32(${t.getByOffset("0")});
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
    `,ug=(e,t,i,s,o,u,d,c)=>{let f=ht(d?1:u),m=64,y=u/f;y<m&&(m=32);let w=Math.ceil(u/f/m),$=[{type:12,data:t},{type:12,data:i},{type:12,data:s},{type:12,data:o},{type:12,data:y},{type:12,data:w}],S=Ct(e.dataType,f),b=Tt(1,f),C=["type"];d&&C.push("type"),c&&C.push("type");let N=k=>{let E=_e("x",e.dataType,e.dims,f),A=[E],D=d?J("seq_lens",d.dataType,d.dims):void 0;D&&A.push(D);let B=c?J("total_sequence_length_input",c.dataType,c.dims):void 0;B&&A.push(B);let P=Tt(e.dataType),V=[{name:"batch_size",type:"u32"},{name:"num_heads",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"sequence_length",type:"u32"},{name:"total_sequence_length",type:"u32"},{name:"elements_per_thread",type:"u32"}];return`
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
        x[offset + i] = ${E.type.value}(${P}(1.0) / ${P}(seq_causal_length));
      }
    } else {
      for (var i: u32 = 0; i < uniforms.elements_per_thread && i + local_offset < seq_causal_length; i++) {
        var f32input = ${b}(x[offset + i]);
        x[offset + i] = ${E.type.value}(exp(f32input - max_value) / sum);
      }
    }
      ${d?`
        for (var total_seq_id: u32 = seq_causal_length; total_seq_id + local_offset < uniforms.total_sequence_length; total_seq_id++) {
          x[offset + total_seq_id] = ${E.type.value}(${P}(0));
        }`:""};
  }`};return{name:"AttentionProbsSoftmax",shaderCache:{hint:`${m};${S};${f}`,inputDependencies:C},getShaderSource:N,getRunData:()=>({outputs:[],dispatchGroup:{x:1,y:o,z:t*i},programUniforms:$})}},lg=(e,t,i,s,o,u,d,c,f)=>{let m=d+u.kvSequenceLength,y=[u.batchSize,u.numHeads,u.sequenceLength,m],w=e>1&&s,$=u.kvNumHeads?u.kvNumHeads:u.numHeads,S=w?[u.batchSize,$,m,u.headSize]:void 0,b=u.nReps?u.nReps:1,C=u.scale===0?1/Math.sqrt(u.headSize):u.scale,N=ht(u.headSize),k=u.headSize/N,E=12,A={x:Math.ceil(m/E),y:Math.ceil(u.sequenceLength/E),z:u.batchSize*u.numHeads},D=[{type:12,data:u.sequenceLength},{type:12,data:k},{type:12,data:m},{type:12,data:u.numHeads},{type:12,data:u.headSize},{type:1,data:C},{type:12,data:d},{type:12,data:u.kvSequenceLength},{type:12,data:b}],B=w&&s&&K.size(s.dims)>0,P=["type","type"];B&&P.push("type"),o&&P.push("type"),c&&P.push("type"),f&&P.push("type");let V=[{dims:y,dataType:t.dataType,gpuDataType:0}];w&&V.push({dims:S,dataType:t.dataType,gpuDataType:0});let I=Y=>{let te=J("q",t.dataType,t.dims,N),he=J("key",i.dataType,i.dims,N),ce=[te,he];if(B){let re=J("past_key",s.dataType,s.dims,N);ce.push(re)}o&&ce.push(J("attention_bias",o.dataType,o.dims));let pe=c?J("seq_lens",c.dataType,c.dims):void 0;pe&&ce.push(pe);let G=f?J("total_sequence_length_input",f.dataType,f.dims):void 0;G&&ce.push(G);let me=_e("output",t.dataType,y),ye=[me];w&&ye.push(_e("present_key",t.dataType,S,N));let ge=Tt(1,N),ee=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"alpha",type:"f32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${E}u;

  var<workgroup> tileQ: array<${te.type.storage}, ${E*E}>;
  var<workgroup> tileK: array<${te.type.storage}, ${E*E}>;
  ${Y.registerUniforms(ee).declareVariables(...ce,...ye)}
  ${Y.mainStart([E,E,1])}
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
        output[outputIdx] = ${me.type.value} (sum * uniforms.alpha) + ${o?"attention_bias[outputIdx]":"0.0"};
    }
  }`};return{name:"AttentionProbs",shaderCache:{hint:`${N};${o!==void 0};${s!==void 0};${e}`,inputDependencies:P},getRunData:()=>({outputs:V,dispatchGroup:A,programUniforms:D}),getShaderSource:I}},dg=(e,t,i,s,o,u,d=void 0,c=void 0)=>{let f=u+o.kvSequenceLength,m=o.nReps?o.nReps:1,y=o.vHiddenSize*m,w=e>1&&s,$=o.kvNumHeads?o.kvNumHeads:o.numHeads,S=w?[o.batchSize,$,f,o.headSize]:void 0,b=[o.batchSize,o.sequenceLength,y],C=12,N={x:Math.ceil(o.vHeadSize/C),y:Math.ceil(o.sequenceLength/C),z:o.batchSize*o.numHeads},k=[{type:12,data:o.sequenceLength},{type:12,data:f},{type:12,data:o.vHeadSize},{type:12,data:o.numHeads},{type:12,data:o.headSize},{type:12,data:y},{type:12,data:u},{type:12,data:o.kvSequenceLength},{type:12,data:m}],E=w&&s&&K.size(s.dims)>0,A=["type","type"];E&&A.push("type"),d&&A.push("type"),c&&A.push("type");let D=[{dims:b,dataType:t.dataType,gpuDataType:0}];w&&D.push({dims:S,dataType:t.dataType,gpuDataType:0});let B=P=>{let V=J("probs",t.dataType,t.dims),I=J("v",i.dataType,i.dims),Y=[V,I];E&&Y.push(J("past_value",s.dataType,s.dims));let te=d?J("seq_lens",d.dataType,d.dims):void 0;d&&Y.push(te);let he=c?J("total_sequence_length_input",c.dataType,c.dims):void 0;c&&Y.push(he);let ce=[_e("output",t.dataType,b)];w&&ce.push(_e("present_value",t.dataType,S));let pe=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"v_hidden_size",type:"u32"},{name:"past_sequence_length",type:"u32"},{name:"kv_sequence_length",type:"u32"},{name:"n_reps",type:"u32"}];return`
  const TILE_SIZE = ${C}u;
  var<workgroup> tileQ: array<${V.type.value}, ${C*C}>;
  var<workgroup> tileV: array<${V.type.value}, ${C*C}>;
  ${P.registerUniforms(pe).declareVariables(...Y,...ce)}
  ${P.mainStart([C,C,1])}
   let headIdx = workgroup_id.z % uniforms.num_heads;
   let batchIdx = workgroup_id.z / uniforms.num_heads;
   let kvHeadIdx = ${m===1?"headIdx":"headIdx / uniforms.n_reps"};
   let kv_num_heads = ${m===1?"uniforms.num_heads":"uniforms.num_heads / uniforms.n_reps"};
   let m = global_id.y;
   let n = global_id.x;
   let sequence_length = uniforms.M;
   var total_sequence_length = uniforms.K;
   ${_l(te,he,!0)}
   let offsetA = workgroup_id.z * uniforms.M * uniforms.K + m * uniforms.K;
   let absKvHeadIdx = batchIdx * kv_num_heads + kvHeadIdx; // kvHeadIdx is relative to the batch
   ${E&&w?"let pastValueOffset = absKvHeadIdx * uniforms.N * uniforms.past_sequence_length + n;":""};
   let vOffset = absKvHeadIdx * uniforms.N * uniforms.kv_sequence_length + n;
   ${w?"let presentValueOffset = absKvHeadIdx * uniforms.N * uniforms.K + n;":""}
   var value = ${V.type.storage}(0);
   for (var w: u32 = 0u; w < uniforms.K; w += TILE_SIZE) {
      if (m < uniforms.M && w + local_id.x < uniforms.K) {
        tileQ[TILE_SIZE * local_id.y + local_id.x] = probs[offsetA + w + local_id.x];
      }
      if (n < uniforms.N && w + local_id.y < uniforms.K) {
        var idx = TILE_SIZE * local_id.y + local_id.x;
        ${E&&w?`
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
  }`};return{name:"AttentionScore",shaderCache:{hint:`${s!==void 0};${e}`,inputDependencies:A},getRunData:()=>({outputs:D,dispatchGroup:N,programUniforms:k}),getShaderSource:B}},Fo=(e,t,i,s,o,u,d,c,f,m,y=void 0,w=void 0)=>{let $=Math.min(e.outputCount,1+(d?1:0)+(c?1:0)),S=$>1?d:void 0,b=$>1?c:void 0,C=$>1?m.pastSequenceLength:0,N=C+m.kvSequenceLength,k=f&&K.size(f.dims)>0?f:void 0,E=[t,i];S&&K.size(S.dims)>0&&E.push(S),k&&E.push(k),y&&E.push(y),w&&E.push(w);let A=e.compute(lg($,t,i,S,k,m,C,y,w),{inputs:E,outputs:$>1?[-1,1]:[-1]})[0];e.compute(ug(A,m.batchSize,m.numHeads,C,m.sequenceLength,N,y,w),{inputs:y&&w?[A,y,w]:[A],outputs:[]});let D=[A,s];b&&K.size(b.dims)>0&&D.push(b),y&&D.push(y),w&&D.push(w),e.compute(dg($,A,s,b,m,C,y,w),{inputs:D,outputs:$>1?[0,2]:[0]})},cg=(e,t)=>{let i=[t.batchSize,t.numHeads,t.sequenceLength,t.headSize],s=t.sequenceLength,o=t.inputHiddenSize,u=t.headSize,d=12,c={x:Math.ceil(t.headSize/d),y:Math.ceil(t.sequenceLength/d),z:t.batchSize*t.numHeads},f=[e.inputs[0],e.inputs[1],e.inputs[2]],m=[{type:12,data:s},{type:12,data:o},{type:12,data:u},{type:12,data:t.numHeads},{type:12,data:t.headSize},{type:12,data:t.hiddenSize},{type:12,data:t.hiddenSize+t.hiddenSize+t.vHiddenSize}],y=w=>{let $=_e("output_q",f[0].dataType,i),S=_e("output_k",f[0].dataType,i),b=_e("output_v",f[0].dataType,i),C=J("input",f[0].dataType,f[0].dims),N=J("weight",f[1].dataType,f[1].dims),k=J("bias",f[2].dataType,f[2].dims),E=C.type.storage,A=[{name:"M",type:"u32"},{name:"K",type:"u32"},{name:"N",type:"u32"},{name:"num_heads",type:"u32"},{name:"head_size",type:"u32"},{name:"hidden_size",type:"u32"},{name:"ldb",type:"u32"}];return`
  const TILE_SIZE = ${d}u;
  var<workgroup> tileInput: array<${E}, ${d*d}>;
  var<workgroup> tileWeightQ: array<${E}, ${d*d}>;
  var<workgroup> tileWeightK: array<${E}, ${d*d}>;
  var<workgroup> tileWeightV: array<${E}, ${d*d}>;
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

    var valueQ = ${E}(0);
    var valueK = ${E}(0);
    var valueV = ${E}(0);
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
  }`};return e.compute({name:"AttentionPrepare",shaderCache:{inputDependencies:["type","type","type"]},getRunData:()=>({outputs:[{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0},{dims:i,dataType:e.inputs[0].dataType,gpuDataType:0}],dispatchGroup:c,programUniforms:m}),getShaderSource:y},{inputs:f,outputs:[-1,-1,-1]})},r1=(e,t)=>{let i=og(e.inputs,t),[s,o,u]=cg(e,i);return Fo(e,s,o,u,e.inputs[4],void 0,void 0,void 0,e.inputs[5],i)}}),pg,fg,hg,n1,w$=ae(()=>{"use strict";vr(),Ie(),Me(),mt(),Pe(),pg=(e,t)=>{if(!e||e.length!==5)throw new Error("BatchNormalization requires 5 inputs");let i=(s,o,u)=>{let d=o.length;if(d!==s.length)throw new Error(`${u}: num dimensions != ${d}`);o.forEach((c,f)=>{if(c!==s[f])throw new Error(`${u}: dim[${f}] do not match`)})};if(e[0].dims.length>1){let s=t.format==="NHWC"?t.spatial?e[0].dims.slice(-1):e[0].dims.slice(-1).concat(e[0].dims.slice(1,e[0].dims.length-1)):e[0].dims.slice(1,t.spatial?2:void 0);i(e[1].dims,s,"Invalid input scale"),i(e[2].dims,s,"Invalid input B"),i(e[3].dims,s,"Invalid input mean"),i(e[4].dims,s,"Invalid input var")}else i(e[1].dims,[1],"Invalid input scale"),i(e[2].dims,[1],"Invalid input B"),i(e[3].dims,[1],"Invalid input mean"),i(e[4].dims,[1],"Invalid input var")},fg=(e,t)=>{let{epsilon:i,spatial:s,format:o}=t,u=e[0].dims,d=s?ht(u[u.length-1]):1,c=o==="NHWC"&&u.length>1?d:1,f=K.size(u)/d,m=s,y=m?u.length:u,w=J("x",e[0].dataType,e[0].dims,d),$=J("scale",e[1].dataType,e[1].dims,c),S=J("bias",e[2].dataType,e[2].dims,c),b=J("inputMean",e[3].dataType,e[3].dims,c),C=J("inputVar",e[4].dataType,e[4].dims,c),N=_e("y",e[0].dataType,y,d),k=()=>{let A="";if(s)A=`let cOffset = ${u.length===1?"0u":o==="NHWC"?`outputIndices[${u.length-1}] / ${d}`:"outputIndices[1]"};`;else if(o==="NCHW")A=`
            ${N.indicesSet("outputIndices","0","0")}
            let cOffset = ${N.indicesToOffset("outputIndices")};`;else{A=`var cIndices = ${$.type.indices}(0);
                       cIndices[0] = outputIndices[${u.length-1}];`;for(let D=1;D<$.rank;D++)A+=`cIndices[${D}] = outputIndices[${D}];`;A+=`let cOffset = ${$.indicesToOffset("cIndices")};`}return A},E=A=>`
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
  }`;return{name:"BatchNormalization",shaderCache:{hint:`${t.epsilon}_${t.format}_${s}_${d}`,inputDependencies:m?["rank","type","type","type","type"]:void 0},getShaderSource:E,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m?[{type:12,data:f},...ke(u)]:[{type:12,data:f}]})}},hg=e=>Ye(e),n1=(e,t)=>{let{inputs:i,outputCount:s}=e,o=hg({...t,outputCount:s});if(dt.webgpu.validateInputContent&&pg(i,o),t.trainingMode)throw new Error("BatchNormalization trainingMode is not supported yet.");e.compute(fg(i,o))}}),mg,gg,i1,_$=ae(()=>{"use strict";Me(),Pe(),mg=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![320,640,1280].includes(e[0].dims[2]))throw new Error("number of channels should be 320, 640 or 1280");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},gg=e=>{let t=e[0].dims,i=e[0].dims[2],s=K.size(t)/4,o=e[0].dataType,u=J("input",o,t,4),d=J("bias",o,[i],4),c=J("residual",o,t,4),f=_e("output",o,t,4);return{name:"BiasAdd",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(s/64)}}),getShaderSource:m=>`
  const channels = ${i}u / 4;
  ${m.declareVariables(u,d,c,f)}

  ${m.mainStart()}
    ${m.guardAgainstOutOfBoundsWorkgroupSizes(s)}
    let value = ${u.getByOffset("global_idx")}
      + ${d.getByOffset("global_idx % channels")} + ${c.getByOffset("global_idx")};
    ${f.setByOffset("global_idx","value")}
  }`}},i1=e=>{mg(e.inputs),e.compute(gg(e.inputs))}}),yg,Ke,a1,s1,o1,u1,l1,d1,c1,p1,f1,vg,h1,m1,g1,y1,Lo,v1,zl,w1,_1,$1,x1,b1,S1,k1,E1,T1,C1,I1,z1,N1,O1,A1,R1,D1,Fc,M1,zp,Np,B1,P1,L1,wg,_g,U1,sf=ae(()=>{"use strict";Ie(),Me(),mt(),Pe(),yg=(e,t,i,s,o,u,d)=>{let c=Math.ceil(t/4),f="";typeof o=="string"?f=`${o}(a)`:f=o("a");let m=J("inputData",i,[c],4),y=_e("outputData",s,[c],4),w=[{name:"vec_size",type:"u32"}];return d&&w.push(...d),`
      ${e.registerUniforms(w).declareVariables(m,y)}

  ${u??""}

  ${e.mainStart()}
    ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}

    let a = ${m.getByOffset("global_idx")};
    ${y.setByOffset("global_idx",f)}
  }`},Ke=(e,t,i,s,o,u=e.dataType,d,c)=>{let f=[{type:12,data:Math.ceil(K.size(e.dims)/4)}];return d&&f.push(...d),{name:t,shaderCache:{hint:o,inputDependencies:["type"]},getShaderSource:m=>yg(m,K.size(e.dims),e.dataType,u,i,s,c),getRunData:m=>({outputs:[{dims:e.dims,dataType:u}],dispatchGroup:{x:Math.ceil(K.size(m[0].dims)/64/4)},programUniforms:f})}},a1=e=>{e.compute(Ke(e.inputs[0],"Abs","abs"))},s1=e=>{e.compute(Ke(e.inputs[0],"Acos","acos"))},o1=e=>{e.compute(Ke(e.inputs[0],"Acosh","acosh"))},u1=e=>{e.compute(Ke(e.inputs[0],"Asin","asin"))},l1=e=>{e.compute(Ke(e.inputs[0],"Asinh","asinh"))},d1=e=>{e.compute(Ke(e.inputs[0],"Atan","atan"))},c1=e=>{e.compute(Ke(e.inputs[0],"Atanh","atanh"))},p1=e=>Ye(e),f1=(e,t)=>{let i;switch(t.to){case 10:i="vec4<f16>";break;case 1:i="vec4<f32>";break;case 12:i="vec4<u32>";break;case 6:i="vec4<i32>";break;case 9:i="vec4<bool>";break;default:throw new RangeError(`not supported type (specified in attribute 'to' from 'Cast' operator): ${t.to}`)}e.compute(Ke(e.inputs[0],"Cast",i,void 0,t.cacheKey,t.to))},vg=e=>{let t,i,s=e.length>=2&&e[1].data!==0,o=e.length>=3&&e[2].data!==0;switch(e[0].dataType){case 1:t=s?e[1].getFloat32Array()[0]:-34028234663852886e22,i=o?e[2].getFloat32Array()[0]:34028234663852886e22;break;case 10:t=s?e[1].getUint16Array()[0]:64511,i=o?e[2].getUint16Array()[0]:31743;break;default:throw new Error("Unsupport data type")}return Ye({min:t,max:i})},h1=(e,t)=>{let i=t||vg(e.inputs),s=Tt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Clip",o=>`clamp(${o}, vec4<${s}>(uniforms.min), vec4<${s}>(uniforms.max))`,void 0,i.cacheKey,void 0,[{type:e.inputs[0].dataType,data:i.min},{type:e.inputs[0].dataType,data:i.max}],[{name:"min",type:s},{name:"max",type:s}]),{inputs:[0]})},m1=e=>{e.compute(Ke(e.inputs[0],"Ceil","ceil"))},g1=e=>{e.compute(Ke(e.inputs[0],"Cos","cos"))},y1=e=>{e.compute(Ke(e.inputs[0],"Cosh","cosh"))},Lo=e=>Ye(e),v1=(e,t)=>{let i=Tt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Elu",s=>`elu_vf32(${s})`,`
  const elu_alpha_ = ${i}(${t.alpha});

  fn elu_f32(a: ${i}) -> ${i} {
  return select((exp(a) - 1.0) * elu_alpha_, a, a >= 0.0);
  }

  fn elu_vf32(v: vec4<${i}>) -> vec4<${i}> {
  return vec4(elu_f32(v.x), elu_f32(v.y), elu_f32(v.z), elu_f32(v.w));
  }`,t.cacheKey))},zl=(e="f32")=>`
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
}`,w1=e=>{let t=Tt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Erf",i=>`erf_vf32(${i})`,zl(t)))},_1=e=>{e.compute(Ke(e.inputs[0],"Exp","exp"))},$1=e=>{e.compute(Ke(e.inputs[0],"Floor","floor"))},x1=e=>{let t=Tt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Gelu",i=>`0.5 * ${i} * (1.0 + erf_vf32(${i} * 0.7071067811865475))`,zl(t)))},b1=(e,t)=>{let i=Tt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"LeakyRelu",s=>`select(leaky_relu_alpha_ * ${s}, ${s}, ${s} >= vec4<${i}>(0.0))`,`const leaky_relu_alpha_ = ${i}(${t.alpha});`,t.cacheKey))},S1=e=>{e.compute(Ke(e.inputs[0],"Not",t=>`!${t}`))},k1=e=>{e.compute(Ke(e.inputs[0],"Neg",t=>`-${t}`))},E1=e=>{e.compute(Ke(e.inputs[0],"Reciprocal",t=>`1.0/${t}`))},T1=e=>{let t=Tt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"Relu",i=>`select(vec4<${t}>(0.0), ${i}, ${i} > vec4<${t}>(0.0))`))},C1=e=>{e.compute(Ke(e.inputs[0],"Sigmoid",t=>`(1.0 / (1.0 + exp(-${t})))`))},I1=e=>Ye(e),z1=(e,t)=>{let i=Tt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"HardSigmoid",s=>`max(vec4<${i}>(0.0), min(vec4<${i}>(1.0), ${t.alpha} * ${s} + vec4<${i}>(${t.beta})))`,void 0,t.cacheKey))},N1=e=>{let t=Tt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"HardSwish",i=>`${i} * max(vec4<${t}>(0.0), min(vec4<${t}>(1.0), vec4<${t}>(${t}(1.0 / 6.0)) * ${i} + vec4<${t}>(0.5)))`))},O1=e=>{e.compute(Ke(e.inputs[0],"Sin","sin"))},A1=e=>{e.compute(Ke(e.inputs[0],"Sinh","sinh"))},R1=e=>{e.compute(Ke(e.inputs[0],"Sqrt","sqrt"))},D1=e=>{e.compute(Ke(e.inputs[0],"Tan","tan"))},Fc=e=>`sign(${e}) * (1 - exp(-2 * abs(${e}))) / (1 + exp(-2 * abs(${e})))`,M1=e=>{e.compute(Ke(e.inputs[0],"Tanh",Fc))},zp=(e="f32")=>`
const fast_gelu_a: ${e} = 0.5;
const fast_gelu_b: ${e} = 0.7978845608028654;
const fast_gelu_c: ${e} = 0.035677408136300125;

fn tanh_v(v: vec4<${e}>) -> vec4<${e}> {
  return ${Fc("v")};
}
`,Np=e=>`(fast_gelu_a + fast_gelu_a * tanh_v(${e} * (fast_gelu_c * ${e} * ${e} + fast_gelu_b))) * ${e}`,B1=e=>{let t=Tt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"FastGelu",Np,zp(t),void 0,e.inputs[0].dataType))},P1=(e,t)=>{let i=Tt(e.inputs[0].dataType);return e.compute(Ke(e.inputs[0],"ThresholdedRelu",s=>`select(vec4<${i}>(0.0), ${s}, ${s} > thresholded_relu_alpha_)`,`const thresholded_relu_alpha_ = vec4<${i}>(${t.alpha});`,t.cacheKey)),0},L1=e=>{e.compute(Ke(e.inputs[0],"Log","log"))},wg=(e,t)=>`
const alpha = vec4<${e}>(${t});
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
`,_g=e=>`quick_gelu_impl(${e})`,U1=(e,t)=>{let i=Tt(e.inputs[0].dataType);e.compute(Ke(e.inputs[0],"QuickGelu",_g,wg(i,t.alpha),t.cacheKey,e.inputs[0].dataType))}}),$g,xg,j1,$$=ae(()=>{"use strict";Me(),Pe(),sf(),$g=e=>{if(e[0].dims.length!==3)throw new Error("input should have 3 dimensions");if(![2560,5120,10240].includes(e[0].dims[2]))throw new Error("hidden state should be 2560, 5120 or 10240");if(e[1].dims.length!==1)throw new Error("bias is expected to have 1 dimensions");if(e[0].dims[2]!==e[1].dims[0])throw new Error("last dimension of input and bias are not the same")},xg=e=>{let t=e[0].dims.slice();t[2]=t[2]/2;let i=J("input",e[0].dataType,e[0].dims,4),s=J("bias",e[0].dataType,[e[0].dims[2]],4),o=_e("output",e[0].dataType,t,4),u=K.size(t)/4,d=Ct(e[0].dataType);return{name:"BiasSplitGelu",getRunData:()=>({outputs:[{dims:t,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)}}),getShaderSource:c=>`
  const M_SQRT2 = sqrt(2.0);
  const halfChannels = ${e[0].dims[2]/4/2}u;

  ${c.declareVariables(i,s,o)}

  ${zl(d)}

  ${c.mainStart()}
    ${c.guardAgainstOutOfBoundsWorkgroupSizes(u)}
    let biasIdx = global_idx % halfChannels;
    let batchIndex = global_idx / halfChannels;
    let inputOffset = biasIdx + batchIndex * halfChannels * 2;
    let valueLeft = input[inputOffset] + bias[biasIdx];
    let valueRight = input[inputOffset + halfChannels] + bias[biasIdx + halfChannels];
    let geluRight = valueRight * 0.5 * (erf_vf32(valueRight / M_SQRT2) + 1);

    ${o.setByOffset("global_idx","valueLeft * geluRight")}
  }`}},j1=e=>{$g(e.inputs),e.compute(xg(e.inputs))}}),bg,Sg,qr,W1,V1,F1,q1,H1,G1,K1,Q1,Z1,Y1,x$=ae(()=>{"use strict";Ie(),Me(),Pe(),bg=(e,t,i,s,o,u,d,c,f,m,y,w)=>{let $,S;typeof c=="string"?$=S=(E,A)=>`${c}((${E}),(${A}))`:typeof c=="function"?$=S=c:($=c.scalar,S=c.vector);let b=_e("outputData",y,s.length,4),C=J("aData",f,t.length,4),N=J("bData",m,i.length,4),k;if(o)if(u){let E=K.size(t)===1,A=K.size(i)===1,D=t.length>0&&t[t.length-1]%4===0,B=i.length>0&&i[i.length-1]%4===0;E||A?k=b.setByOffset("global_idx",S(E?`${C.type.value}(${C.getByOffset("0")}.x)`:C.getByOffset("global_idx"),A?`${N.type.value}(${N.getByOffset("0")}.x)`:N.getByOffset("global_idx"))):k=`
            let outputIndices = ${b.offsetToIndices("global_idx * 4u")};
            let offsetA = ${C.broadcastedIndicesToOffset("outputIndices",b)};
            let offsetB = ${N.broadcastedIndicesToOffset("outputIndices",b)};
            ${b.setByOffset("global_idx",S(d||D?C.getByOffset("offsetA / 4u"):`${C.type.value}(${C.getByOffset("offsetA / 4u")}[offsetA % 4u])`,d||B?N.getByOffset("offsetB / 4u"):`${N.type.value}(${N.getByOffset("offsetB / 4u")}[offsetB % 4u])`))}
          `}else k=b.setByOffset("global_idx",S(C.getByOffset("global_idx"),N.getByOffset("global_idx")));else{if(!u)throw new Error("no necessary to use scalar implementation for element-wise binary op implementation.");let E=(A,D,B="")=>{let P=`aData[indexA${D}][componentA${D}]`,V=`bData[indexB${D}][componentB${D}]`;return`
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
            ${E("data",0,"u32")}
            ${E("data",1,"u32")}
            ${E("data",2,"u32")}
            ${E("data",3,"u32")}
            outputData[global_idx] = dot(vec4<u32>(0x1, 0x100, 0x10000, 0x1000000), vec4<u32>(data));`:k=`
            ${E("outputData[global_idx]",0)}
            ${E("outputData[global_idx]",1)}
            ${E("outputData[global_idx]",2)}
            ${E("outputData[global_idx]",3)}
          `}return`
        ${e.registerUniform("vec_size","u32").declareVariables(C,N,b)}

        ${w??""}

        ${e.mainStart()}
        ${e.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.vec_size")}
        ${k}
      }`},Sg=(e,t,i,s,o,u,d=i.dataType)=>{let c=i.dims.map(Number),f=s.dims.map(Number),m=!K.areEqual(c,f),y=c,w=K.size(c),$=!1,S=!1,b=[m];if(m){let C=ss.calcShape(c,f,!1);if(!C)throw new Error("Can't perform binary op on the given tensors");y=C.slice(),w=K.size(y);let N=K.size(c)===1,k=K.size(f)===1,E=c.length>0&&c[c.length-1]%4===0,A=f.length>0&&f[f.length-1]%4===0;b.push(N),b.push(k),b.push(E),b.push(A);let D=1;for(let B=1;B<y.length;B++){let P=c[c.length-B],V=f[f.length-B];if(P===V)D*=P;else break}D%4===0?(S=!0,$=!0):(N||k||E||A)&&($=!0)}else $=!0;return b.push($),{name:e,shaderCache:{hint:t+b.map(C=>C.toString()).join("_"),inputDependencies:["rank","rank"]},getShaderSource:C=>bg(C,c,f,y,$,m,S,o,i.dataType,s.dataType,d,u),getRunData:()=>({outputs:[{dims:y,dataType:d}],dispatchGroup:{x:Math.ceil(w/64/4)},programUniforms:[{type:12,data:Math.ceil(K.size(y)/4)},...ke(c,f,y)]})}},qr=(e,t,i,s,o,u)=>{e.compute(Sg(t,o??"",e.inputs[0],e.inputs[1],i,s,u))},W1=e=>{qr(e,"Add",(t,i)=>`${t}+${i}`)},V1=e=>{qr(e,"Div",(t,i)=>`${t}/${i}`)},F1=e=>{qr(e,"Equal",{scalar:(t,i)=>`u32(${t}==${i})`,vector:(t,i)=>`vec4<u32>(${t}==${i})`},void 0,void 0,9)},q1=e=>{qr(e,"Mul",(t,i)=>`${t}*${i}`)},H1=e=>{let t=J("input",e.inputs[0].dataType,e.inputs[0].dims).type.value;qr(e,"Pow",{scalar:(i,s)=>`pow_custom(${i},${s})`,vector:(i,s)=>`pow_vector_custom(${i},${s})`},`
    fn pow_custom(a : ${t}, b : ${t}) -> ${t} {
      if (b == ${t}(0.0)) {
        return ${t}(1.0);
      } else if (a < ${t}(0.0) && f32(b) != floor(f32(b))) {
        return ${t}(pow(f32(a), f32(b))); // NaN
      }
      return select(sign(a), ${t}(1.0), round(f32(abs(b) % ${t}(2.0))) != 1.0) * ${t}(${t==="i32"?"round":""}(pow(f32(abs(a)), f32(b))));
    }
    fn pow_vector_custom(a : vec4<${t}>, b : vec4<${t}>) -> vec4<${t}> {
      // TODO: implement vectorized pow
      return vec4<${t}>(pow_custom(a.x, b.x), pow_custom(a.y, b.y), pow_custom(a.z, b.z), pow_custom(a.w, b.w));
    }
      `)},G1=e=>{qr(e,"Sub",(t,i)=>`${t}-${i}`)},K1=e=>{qr(e,"Greater",{scalar:(t,i)=>`u32(${t}>${i})`,vector:(t,i)=>`vec4<u32>(${t}>${i})`},void 0,void 0,9)},Q1=e=>{qr(e,"Less",{scalar:(t,i)=>`u32(${t}<${i})`,vector:(t,i)=>`vec4<u32>(${t}<${i})`},void 0,void 0,9)},Z1=e=>{qr(e,"GreaterOrEqual",{scalar:(t,i)=>`u32(${t}>=${i})`,vector:(t,i)=>`vec4<u32>(${t}>=${i})`},void 0,void 0,9)},Y1=e=>{qr(e,"LessOrEqual",{scalar:(t,i)=>`u32(${t}<=${i})`,vector:(t,i)=>`vec4<u32>(${t}<=${i})`},void 0,void 0,9)}}),kg,Eg,X1,J1,b$=ae(()=>{"use strict";Ie(),Me(),mt(),Pe(),kg=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");let i=0,s=e[i],o=s.dataType,u=s.dims.length;e.forEach((d,c)=>{if(c!==i){if(d.dataType!==o)throw new Error("input tensors should be one type");if(d.dims.length!==u)throw new Error("input tensors should have the same shape");d.dims.forEach((f,m)=>{if(m!==t&&f!==s.dims[m])throw new Error("non concat dimensions must match")})}})},Eg=(e,t,i,s,o=0)=>{let u=e.reduce((k,E)=>k+K.size(E.dims),0),d=new Array(e.length),c=new Array(e.length),f=new Array(e.length),m=0,y=o,w=[],$=[],S=[{type:12,data:u}];for(let k=0;k<e.length;++k)d[k]=m,c[k]=y,m+=K.size(e[k].dims),y+=e[k].dims[t],$.push(e[k].dims.length),f[k]=J(`input${k}`,s,$[k]),w.push("rank"),S.push({type:12,data:d[k]}),S.push({type:12,data:c[k]});for(let k=0;k<e.length;++k)S.push(...ke(e[k].dims));S.push(...ke(i));let b=_e("output",s,i.length),C=f.map((k,E)=>{let A=`
        let inputOffset = ${`global_idx - uniforms.inputOffset${E}`};
        var outputIndices = ${k.offsetToIndices("inputOffset")};
        ${b.indicesGet("outputIndices",t)} += uniforms.outputAxisOffset${E};
        ${b.setByIndices("outputIndices",k.getByOffset("inputOffset"))}`;return e.length===1?A:E===0?`if (inputIndex == 0u) {${A}}`:E===e.length-1?`else {${A}}`:`else if (inputIndex == ${E}u) {${A}}`}).join(`
`),N=k=>`

  ${(()=>{k.registerUniform("outputSize","u32");for(let E=0;E<e.length;E++)k.registerUniform(`inputOffset${E}`,"u32"),k.registerUniform(`outputAxisOffset${E}`,"u32");return k.declareVariables(...f,b)})()}

  fn calculateInputIndex(global_idx: u32) -> u32 {
    ${f.slice(1).map((E,A)=>`if (global_idx < uniforms.inputOffset${A+1}) {
      return ${A}u;
    }`).join(`
`)}
    return ${e.length-1}u;
  }

  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}

    let inputIndex = calculateInputIndex(global_idx);
    ${C}
  }`;return{name:"Concat",shaderCache:{hint:`${t}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:i,dataType:s}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:S}),getShaderSource:N}},X1=(e,t)=>{let i=e.inputs,s=i[0].dims,o=K.normalizeAxis(t.axis,s.length);kg(i,o);let u=s.slice();u[o]=i.reduce((m,y)=>m+(y.dims.length>o?y.dims[o]:0),0);let d=i.filter(m=>K.size(m.dims)>0);if(d.length===0){e.output(0,u);return}let c=e.deviceLimits.maxStorageBuffersPerShaderStage-1,f=0;for(let m=0;m<d.length;m+=c){let y=d.slice(m,m+c);e.compute(Eg(y,o,u,i[0].dataType,f),{inputs:y,outputs:[0]}),f+=y.reduce((w,$)=>w+$.dims[o],0)}},J1=e=>Ye({axis:e.axis})}),Ji,ea,ta,of,na=ae(()=>{"use strict";Ie(),Me(),Ji=(e,t,i="f32")=>{switch(e.activation){case"Relu":return`value = max(value, ${t}(0.0));`;case"Sigmoid":return`value = (${t}(1.0) / (${t}(1.0) + exp(-value)));`;case"Clip":return`value = clamp(value, ${t}(${i}(uniforms.clip_min)), ${t}(${i}(uniforms.clip_max)));`;case"HardSigmoid":return`value = max(${t}(0.0), min(${t}(1.0), ${i}(uniforms.alpha) * value + ${i}(uniforms.beta)));`;case"LeakyRelu":return`value = select(${i}(uniforms.alpha) * value, value, value >= ${t}(0.0));`;case"Tanh":return`let e2x = exp(-2.0 * abs(value));
              value = sign(value) * (1.0 - e2x) / (1.0 + e2x);
        `;case"":return"";default:throw new Error(`Unsupported activation ${e.activation}`)}},ea=(e,t)=>{e.activation==="Clip"?t.push({type:1,data:e.clipMax},{type:1,data:e.clipMin}):e.activation==="HardSigmoid"?t.push({type:1,data:e.alpha},{type:1,data:e.beta}):e.activation==="LeakyRelu"&&t.push({type:1,data:e.alpha})},ta=(e,t)=>{e.activation==="Clip"?t.push({name:"clip_max",type:"f32"},{name:"clip_min",type:"f32"}):e.activation==="HardSigmoid"?t.push({name:"alpha",type:"f32"},{name:"beta",type:"f32"}):e.activation==="LeakyRelu"&&t.push({name:"alpha",type:"f32"})},of=e=>{let t=(e==null?void 0:e.activation)||"";if(t==="HardSigmoid"){let[i,s]=(e==null?void 0:e.activation_params)||[.2,.5];return{activation:t,alpha:i,beta:s}}else if(t==="Clip"){let[i,s]=(e==null?void 0:e.activation_params)||[Sv,kv];return{activation:t,clipMax:s,clipMin:i}}else if(t==="LeakyRelu"){let[i]=(e==null?void 0:e.activation_params)||[.01];return{activation:t,alpha:i}}return{activation:t}}}),Rt,ew,uf=ae(()=>{"use strict";Rt=(e,t)=>{switch(e){case 1:return t;case 2:return`vec2<${t}>`;case 3:return`vec3<${t}>`;case 4:return`vec4<${t}>`;default:throw new Error(`${e}-component is not supported.`)}},ew=e=>`
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
`}),jo,lf,df=ae(()=>{"use strict";Ie(),Me(),Pe(),na(),jo=(e,t,i,s,o)=>{let u=s-i;return`
      ${Array.from({length:i}).map((d,c)=>`
      if (${be(t.shape,c,t.rank)} != 1) {
        ${t.indicesSet(e,c,be(o,c+u,s))}
      } else {
        ${t.indicesSet(e,c,0)}
      }`).join("")}
`},lf=(e,t,i,s,o=!1,u)=>{let d=e[0].dims,c=e[1].dims,f=d[d.length-2],m=c[c.length-1],y=d[d.length-1],w=ht(m),$=ht(y),S=ht(f),b=K.size(i)/w/S,C=e.length>2,N=s?s.slice(0,-2):i.slice(0,-2),k=[K.size(N),f,m],E=[{type:12,data:b},{type:12,data:f},{type:12,data:m},{type:12,data:y}];ea(t,E),E.push(...ke(N,d,c)),C&&E.push(...ke(e[2].dims)),E.push(...ke(k));let A=D=>{let B=rf("batch_dims",e[0].dataType,N.length),P=J("a",e[0].dataType,d.length,$),V=J("b",e[1].dataType,c.length,w),I=_e("output",e[0].dataType,k.length,w),Y=Ct(I.type.tensor),te=Ji(t,I.type.value,Y),he=[P,V],ce="";if(C){let me=o?w:1;he.push(J("bias",e[2].dataType,e[2].dims.length,me)),ce=`${o?`value += bias[col / ${me}];`:`value += ${I.type.value}(bias[row + i]);`}`}let pe=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"}];ta(t,pe);let G=()=>{let me=`var a_data: ${P.type.value};`;for(let ye=0;ye<$;ye++)me+=`
              let b_data${ye} = b[(b_offset + (k + ${ye}) * uniforms.N + col) / ${w}];`;for(let ye=0;ye<S;ye++){me+=`a_data = a[(a_offset + (row + ${ye}) * uniforms.K + k) / ${$}];`;for(let ge=0;ge<$;ge++)me+=`
            values[${ye}] = fma(${V.type.value}(a_data${$===1?"":`[${ge}]`}), b_data${ge}, values[${ye}]);
`}return me};return`
  ${D.registerUniforms(pe).registerInternalVariables(B).declareVariables(...he,I)}
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
      ${ce}
      ${te}
      let cur_indices = ${I.type.indices}(batch, row + i, col);
      let offset = ${I.indicesToOffset("cur_indices")};
      ${I.setByOffset(`offset / ${w}`,"value")};
    }
  }
  `};return{name:"MatMulNaive",shaderCache:{hint:`${t.activation};${w};${$};${S};${o}`,inputDependencies:C?["rank","rank","rank"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:u?u(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(b/64)},programUniforms:E}),getShaderSource:A}}}),Tg,Cg,Op,qc,Ig,Ap,zg,Bl,cf=ae(()=>{"use strict";Ie(),Me(),Pe(),na(),df(),uf(),Tg=(e,t)=>e?`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          kStart + inputRow,
          globalRowStart / innerElementSize + inputCol${t?", batchIndices":""});
        `:`
        mm_Asub[inputRow][inputCol] = mm_readA(batch,
          globalRow + innerRow,
          kStart / innerElementSize + inputCol${t?", batchIndices":""});
        `,Cg=(e,t)=>e?`
        let ACached0 = mm_Asub[k * innerElementSize][localRow];
        let ACached1 = mm_Asub[k * innerElementSize + 1][localRow];
        let ACached2 = mm_Asub[k * innerElementSize + 2][localRow];
        ${t===3?"":"let ACached3 = mm_Asub[k * innerElementSize + 3][localRow];"}
        for (var i = 0; i < rowPerThread; i = i + 1) {
          acc[i] = BCached0 * ACached0[i] + acc[i];
          acc[i] = BCached1 * ACached1[i] + acc[i];
          acc[i] = BCached2 * ACached2[i] + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached3[i] + acc[i];"}
        }`:`
        for (var i = 0; i < rowPerThread; i = i + 1) {
          let ACached = mm_Asub[tileRow + i][k];
          acc[i] = BCached0 * ACached.x + acc[i];
          acc[i] = BCached1 * ACached.y + acc[i];
          acc[i] = BCached2 * ACached.z + acc[i];
          ${t===3?"":"acc[i] = BCached3 * ACached.w + acc[i];"}
        }`,Op=(e,t,i="f32",s,o=!1,u=32,d=!1,c=32)=>{let f=t[1]*e[1],m=t[0]*e[0],y=o?f:u,w=o?u:f,$=y/t[0],S=u/t[1];if(!((o&&$===4&&e[1]===4||!o&&($===3||$===4))&&y%t[0]===0&&u%t[1]===0&&e[0]===4))throw new Error(`If transposeA ${o} is true, innerElementSize ${$} and workPerThread[1] ${e[1]} must be 4.
      Otherwise, innerElementSize ${$} must be 3 or 4.
  tileAWidth ${y} must be divisible by workgroupSize[0]${t[0]}. tileInner ${u} must be divisible by workgroupSize[1] ${t[1]}. colPerThread ${e[0]} must be 4.`);return`
var<workgroup> mm_Asub: array<array<vec${$}<${i}>, ${y/$}>, ${w}>;
var<workgroup> mm_Bsub: array<array<vec4<${i}>, ${m/e[0]}>, ${u}>;

const rowPerThread = ${e[1]};
const colPerThread = ${e[0]};
const innerElementSize = ${$};
const tileInner = ${u};

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
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
          ${Tg(o,s)}
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

          ${Cg(o,$)}
      }

      workgroupBarrier();
  }

  for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      mm_write(batch, globalRow + innerRow, globalCol, acc[innerRow]);
  }
}`},qc=(e,t)=>e?`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              kStart + inputRow,
              globalRowStart + inputCol${t?", batchIndices":""});
            `:`
            mm_Asub[inputRow][inputCol] = mm_readA(batch,
              globalRowStart + inputRow,
              kStart + inputCol${t?", batchIndices":""});
            `,Ig=e=>e?"let ACached = mm_Asub[k][tileRow + innerRow];":"let ACached = mm_Asub[tileRow + innerRow][k];",Ap=(e,t,i="f32",s,o=!1,u=32,d=!1,c=32,f=!1)=>{let m=e[1]*t[1],y=e[0]*t[0],w=o?m:u,$=o?u:m;if(!($%t[1]===0&&w%t[0]===0&&u%t[1]===0))throw new Error(`tileAHight ${$} must be divisible by workgroupSize[1]${t[1]}, tileAWidth ${w} must be divisible by workgroupSize[0]${t[0]}, tileInner ${u} must be divisible by workgroupSize[1]${t[1]}`);let S=$/t[1],b=w/t[0],C=u/t[1],N=f?`
    let localRow = i32(localId.y);
    let localCol = i32(localId.x);
    let globalRowStart = i32(workgroupId.y) * ${m};
    let globalColStart = i32(workgroupId.x) * ${y};

    // Loop over shared dimension.
    for (var t = 0; t < num_tiles; t = t + 1) {
      // Load one tile of A into local memory.
      for (var inputRow = localRow; inputRow < ${$}; inputRow = inputRow + ${t[1]}) {
        for (var inputCol = localCol; inputCol < ${w}; inputCol = inputCol + ${t[0]}) {
          ${qc(o,s)}
        }
      }
      // Load one tile of B into local memory.
      for (var inputRow = localRow; inputRow < ${u}; inputRow = inputRow + ${t[1]}) {
            for (var inputCol = localCol; inputCol < ${y}; inputCol = inputCol + ${t[0]}) {
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
          BCached[inner] = mm_Bsub[k][localCol + inner * ${t[0]}];
        }
        for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
          let ACached = ${o?`mm_Asub[k][localRow + innerRow * ${t[1]}];`:`mm_Asub[localRow + innerRow * ${t[1]}][k];`}
          for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
            acc[innerRow][innerCol] = acc[innerRow][innerCol] +
                ACached * BCached[innerCol];
          }
        }
      }
      workgroupBarrier();
    }
    for (var innerRow = 0; innerRow < rowPerThread; innerRow = innerRow + 1) {
      let gRow = globalRowStart + localRow + innerRow * ${t[1]};
      for (var innerCol = 0; innerCol < colPerThread; innerCol = innerCol + 1) {
        let gCol = globalColStart + localCol + innerCol * ${t[0]};
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
      ${qc(o,s)}
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
      ${Ig(o)}
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

@compute @workgroup_size(${t[0]}, ${t[1]}, ${t[2]})
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
`},zg=(e,t,i,s,o=!1)=>{let[u,d,c,f]=s,m=Ct(s[0].type.tensor);return`
    fn mm_readA(batch: i32, row: i32, colIn: i32, batchIndices: ${u.type.indices}) -> ${Rt(e,m)} {
      var value = ${Rt(e,m)}(0.0);
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

    fn mm_readB(batch: i32, row: i32, colIn: i32, batchIndices: ${u.type.indices}) -> ${Rt(e,m)} {
      var value = ${Rt(e,m)}(0.0);
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

    fn mm_write(batch: i32, row: i32, colIn: i32, valueIn: ${Rt(e,m)}) {
      let col = colIn * ${e};
      if (row < uniforms.dim_a_outer && col < uniforms.dim_b_outer) {
        var value = valueIn;
        let coords = vec3<i32>(batch, row, colIn);
        ${t?`value = value + ${o?"bias[colIn]":`${Rt(e,m)}(bias[row])`};`:""}
        ${i}
        ${f.setByIndices("vec3<u32>(coords)","value")}
      }
    }
    `},Bl=(e,t,i,s,o=!1,u)=>{let d=e[0].dims,c=e[1].dims,f=d.slice(0,-2),m=c.slice(0,-2),y=s?s.slice(0,-2):i.slice(0,-2),w=K.size(y),$=d[d.length-2],S=d[d.length-1],b=c[c.length-1],C=S%4===0&&b%4===0,N=$<=8?[4,1,1]:[4,4,1],k=[8,8,1],E=[Math.ceil(b/k[0]/N[0]),Math.ceil($/k[1]/N[1]),Math.ceil(w/k[2]/N[2])],A=C?4:1,D=[...f,$,S/A],B=D.length,P=[...m,S,b/A],V=P.length,I=[w,$,b/A],Y=[{type:6,data:$},{type:6,data:b},{type:6,data:S}];ea(t,Y),Y.push(...ke(y,D,P));let te=["rank","rank"],he=e.length>2;he&&(Y.push(...ke(e[2].dims)),te.push("rank")),Y.push(...ke(I));let ce=pe=>{let G=y.length,me=rf("batchDims",e[0].dataType,G,1),ye=Ct(e[0].dataType),ge=J("a",e[0].dataType,B,A),ee=J("b",e[1].dataType,V,A),re=_e("result",e[0].dataType,I.length,A),se=[ge,ee];if(he){let ve=o?A:1;se.push(J("bias",e[2].dataType,e[2].dims.length,ve))}let O=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"}];ta(t,O);let F=Ct(re.type.tensor),ne=Ji(t,re.type.value,F),X=zg(A,he,ne,[me,ge,ee,re],o);return`
  ${pe.registerUniforms(O).registerInternalVariables(me).declareVariables(...se,re)}
  ${X}
  ${C?Op(N,k,ye,me):Ap(N,k,ye,me)}
                   `};return{name:"MatMul",shaderCache:{hint:`${N};${t.activation};${C};${o}`,inputDependencies:te},getRunData:()=>({outputs:[{dims:u?u(i):i,dataType:e[0].dataType}],dispatchGroup:{x:E[0],y:E[1],z:E[2]},programUniforms:Y}),getShaderSource:ce}}}),Ng,rw,k$=ae(()=>{"use strict";Ie(),Cn(),Pe(),na(),uf(),S$(),cf(),Ng=(e,t,i,s,o=!1,u,d=4,c=4,f=4,m="f32")=>{let y=Y=>{switch(Y){case 1:return"resData = x[xIndex];";case 3:return`resData = vec3<${m}>(x[xIndex], x[xIndex + 1], x[xIndex + 2]);`;case 4:return"resData = x[xIndex / 4];";default:throw new Error(`innerElementSize ${Y} is not supported.`)}},w=Y=>{switch(Y){case 1:return"return w[row * i32(uniforms.w_shape[3]) + colIn];";case 4:return"return w[row * i32(uniforms.w_shape[3]) / 4 + colIn];";default:throw new Error(`innerElementSize ${Y} is not supported.`)}},$=e?`
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
    `,b=e?"i32(uniforms.x_shape[1])":"i32(uniforms.x_shape[2])",C=e?"i32(uniforms.x_shape[2])":"i32(uniforms.x_shape[3])",N=e?"row":"col",k=e?"col":"row",E=`
    let inChannels = i32(uniforms.w_shape[2]);
    let outWidth = ${e?"i32(uniforms.result_shape[2])":"i32(uniforms.result_shape[3])"};
    let outRow = ${N} / outWidth;
    let outCol = ${N} % outWidth;

    let WRow = ${k} / (i32(uniforms.w_shape[1]) * inChannels);
    let WCol = ${k} / inChannels % i32(uniforms.w_shape[1]);
    let xRow = outRow * uniforms.stride[0] + uniforms.dilation[0] * WRow - uniforms.pad[0];
    let xCol = outCol * uniforms.stride[1] + uniforms.dilation[1] * WCol - uniforms.pad[1];
    let xCh = ${k} % inChannels;
    var resData = ${Rt(d,m)}(0.0);
    // The bounds checking is always needed since we use it to pad zero for
    // the 'same' padding type.
    if (xRow >= 0 && xRow < ${b} && xCol >= 0 && xCol < ${C}) {
      ${$}
      let xIndex = getIndexFromCoords4D(coord, vec4<i32>(uniforms.x_shape));
      ${y(d)}
    }
    return resData;`,A=e?t&&s?`
    let col = colIn * ${d};
    ${E}`:`
    let col = colIn * ${d};
    if (row < uniforms.dim_a_outer && col < uniforms.dim_inner) {
      ${E}
    }
    return ${Rt(d,m)}(0.0);`:s&&i?`
    let col = colIn * ${d};
    ${E}`:`
    let col = colIn * ${d};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${E}
    }
    return ${Rt(d,m)}(0.0);`,D=e?s&&i?w(c):`
    let col = colIn * ${c};
    if (row < uniforms.dim_inner && col < uniforms.dim_b_outer) {
      ${w(c)}
    }
    return ${Rt(c,m)}(0.0);`:`
    let col = colIn * ${c};
    if (row < uniforms.dim_inner && col < uniforms.dim_a_outer) {
      ${w(c)}
    }
    return ${Rt(c,m)}(0.0);`,B=Rt(f,m),P=Rt(e?d:c,m),V=Rt(e?c:d,m),I=Ji(u,B,m);return`
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
    }`},rw=(e,t,i,s,o,u,d,c,f)=>{let m=t.format==="NHWC",y=m?e[0].dims[3]:e[0].dims[1],w=i[0],$=m?i[2]:i[3],S=m?i[1]:i[2],b=m?i[3]:i[1],C=m&&(y%4===0||y%3===0)&&b%4===0,N=m?b:$*S,k=m?$*S:b,E=[8,8,1],A=s<=8?[4,1,1]:[4,4,1],D=[Math.ceil(N/E[0]/A[0]),Math.ceil(k/E[1]/A[1]),Math.ceil(w/E[2]/A[2])];He("verbose",()=>`[conv2d_mm_webgpu] dispatch = ${D}`);let B=C?m&&y%4!==0?3:4:1,P=E[1]*A[1],V=E[0]*A[0],I=Math.max(E[0]*B,E[1]),Y=s%P===0,te=o%V===0,he=u%I===0,ce=C?[B,4,4]:[1,1,1],pe=[{type:6,data:s},{type:6,data:o},{type:6,data:u},{type:6,data:[t.pads[0],t.pads[1]]},{type:6,data:t.strides},{type:6,data:t.dilations}];ea(t,pe),pe.push(...ke(e[0].dims,e[1].dims));let G=["rank","rank"];d&&(pe.push(...ke(e[2].dims)),G.push("rank")),pe.push(...ke(i));let me=ye=>{let ge=[{name:"dim_a_outer",type:"i32"},{name:"dim_b_outer",type:"i32"},{name:"dim_inner",type:"i32"},{name:"pad",type:"i32",length:2},{name:"stride",type:"i32",length:2},{name:"dilation",type:"i32",length:2}];ta(t,ge);let ee=C?4:1,re=Ct(e[0].dataType),se=`
      fn setOutputAtIndex(flatIndex : i32, value : ${C?`vec4<${re}>`:re}) {
        result[flatIndex] = ${C?`vec4<${re}>`:re}(value);
      }
      fn setOutputAtCoords(d0 : i32, d1 : i32, d2 : i32, d3 : i32, value : ${C?`vec4<${re}>`:re}) {
        let flatIndex = getOutputIndexFromCoords(vec4<i32>(d0, d1, d2, d3));
        setOutputAtIndex(flatIndex ${C?"/ 4":""}, value);
      }`,O=J("x",e[0].dataType,e[0].dims.length,B===3?1:B),F=J("w",e[1].dataType,e[1].dims.length,ee),ne=[O,F],X=_e("result",e[0].dataType,i.length,ee);if(d){let ve=J("bias",e[2].dataType,e[2].dims.length,ee);ne.push(ve),se+=`
        fn getBiasByOutputCoords(coords : vec4<i32>) -> ${C?`vec4<${re}>`:re} {
          return bias[coords.${m?"w":"y"}${C?"/ 4":""}];
        }`}return`
        ${tw("uniforms.result_strides")}
        //struct Uniforms { xShape : vec4<i32>, wShape : vec4<i32>, outShape : vec4<i32>,
        //  outShapeStrides: vec3<i32>, filterDims : vec2<i32>, pad : vec2<i32>, stride : vec2<i32>,
        //  dilation : vec2<i32>, dimAOuter : i32, dimBOuter : i32, dimInner : i32 };
        ${ye.registerUniforms(ge).declareVariables(...ne,X)}
        ${se}
        ${Ng(m,Y,te,he,d,t,ce[0],ce[1],ce[2],re)}
        ${C?Op(A,E,re,void 0,!m,I):Ap(A,E,re,void 0,!m,I,!1,void 0,c)}`};return{name:"Conv2DMatMul",shaderCache:{hint:`${t.cacheKey};${B};${C};${Y};${te};${he};${P};${V};${I}`,inputDependencies:G},getRunData:()=>({outputs:[{dims:f?f(i):i,dataType:e[0].dataType}],dispatchGroup:{x:D[0],y:D[1],z:D[2]},programUniforms:pe}),getShaderSource:me}}}),Og,Hc,zo,Ag,Gc,Rg,nw,iw,E$=ae(()=>{"use strict";Ie(),Cn(),Me(),Pe(),na(),uf(),Og=e=>{let t=1;for(let i=0;i<e.length;i++)t*=e[i];return t},Hc=e=>typeof e=="number"?[e,e,e]:e,zo=(e,t)=>t<=1?e:e+(e-1)*(t-1),Ag=(e,t,i,s=1)=>{let o=zo(t,s);return Math.floor((e[0]*(i-1)-i+o)/2)},Gc=(e,t,i,s,o)=>{o==null&&(o=Ag(e,t[0],s[0]));let u=[0,0,0,i];for(let d=0;d<3;d++)e[d]+2*o>=t[d]&&(u[d]=Math.trunc((e[d]-t[d]+2*o)/s[d]+1));return u},Rg=(e,t,i,s,o,u,d,c,f,m)=>{let y,w,$,S;if(e==="VALID"&&(e=0),typeof e=="number"){y={top:e,bottom:e,left:e,right:e,front:e,back:e};let b=Gc([t,i,s,1],[c,f,m],1,[o,u,d],e);w=b[0],$=b[1],S=b[2]}else if(Array.isArray(e)){if(!e.every((C,N,k)=>C===k[0]))throw Error(`Unsupported padding parameter: ${e}`);y={top:e[0],bottom:e[1],left:e[2],right:e[3],front:e[4],back:e[5]};let b=Gc([t,i,s,1],[c,f,m],1,[o,u,d],e[0]);w=b[0],$=b[1],S=b[2]}else if(e==="SAME_UPPER"){w=Math.ceil(t/o),$=Math.ceil(i/u),S=Math.ceil(s/d);let b=(w-1)*o+c-t,C=($-1)*u+f-i,N=(S-1)*d+m-s,k=Math.floor(b/2),E=b-k,A=Math.floor(C/2),D=C-A,B=Math.floor(N/2),P=N-B;y={top:A,bottom:D,left:B,right:P,front:k,back:E}}else throw Error(`Unknown padding parameter: ${e}`);return{padInfo:y,outDepth:w,outHeight:$,outWidth:S}},nw=(e,t,i,s,o,u=!1,d="channelsLast")=>{let c,f,m,y,w;if(d==="channelsLast")[c,f,m,y,w]=e;else if(d==="channelsFirst")[c,w,f,m,y]=e;else throw new Error(`Unknown dataFormat ${d}`);let[$,,S,b,C]=t,[N,k,E]=Hc(i),[A,D,B]=Hc(s),P=zo(S,A),V=zo(b,D),I=zo(C,B),{padInfo:Y,outDepth:te,outHeight:he,outWidth:ce}=Rg(o,f,m,y,N,k,E,P,V,I),pe=u?$*w:$,G=[0,0,0,0,0];return d==="channelsFirst"?G=[c,pe,te,he,ce]:d==="channelsLast"&&(G=[c,te,he,ce,pe]),{batchSize:c,dataFormat:d,inDepth:f,inHeight:m,inWidth:y,inChannels:w,outDepth:te,outHeight:he,outWidth:ce,outChannels:pe,padInfo:Y,strideDepth:N,strideHeight:k,strideWidth:E,filterDepth:S,filterHeight:b,filterWidth:C,effectiveFilterDepth:P,effectiveFilterHeight:V,effectiveFilterWidth:I,dilationDepth:A,dilationHeight:D,dilationWidth:B,inShape:e,outShape:G,filterShape:t}},iw=(e,t,i,s,o,u)=>{let d=u==="channelsLast",c=d?e[0].dims[3]:e[0].dims[1],f=!1,m=[64,1,1],y={x:i.map((E,A)=>A)},w=[Math.ceil(Og(y.x.map(E=>i[E]))/m[0]),1,1];He("verbose",()=>`[conv3d_naive_webgpu] dispatch = ${w}`);let $=f?d&&c%4!==0?3:4:1,S=K.size(i),b=[{type:12,data:S},{type:12,data:s},{type:12,data:o},{type:12,data:t.strides},{type:12,data:t.dilations}];ea(t,b),b.push(...ke(e[0].dims,e[1].dims));let C=["rank","rank"],N=e.length===3;N&&(b.push(...ke(e[2].dims)),C.push("rank")),b.push(...ke(i));let k=E=>{let A=[{name:"output_size",type:"u32"},{name:"filter_dims",type:"u32",length:s.length},{name:"pads",type:"u32",length:o.length},{name:"strides",type:"u32",length:t.strides.length},{name:"dilations",type:"u32",length:t.dilations.length}];ta(t,A);let D=f?4:1,B=Ct(e[0].dataType),P=J("x",e[0].dataType,e[0].dims.length,$===3?1:$),V=J("W",e[1].dataType,e[1].dims.length,D),I=[P,V],Y=_e("result",e[0].dataType,i.length,D),te="";if(N){let pe=J("bias",e[2].dataType,e[2].dims.length,D);I.push(pe),te+=`
        fn getBiasByOutputCoords(coords : array<u32, 5>) -> ${f?`vec4<${B}>`:B} {
          return bias[${d?be("coords",4,5):be("coords",1,5)}${f?"/ 4":""}];
        }`}let he=Rt($,B),ce=Ji(t,he,B);return`
            ${te}
            fn getX(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${B} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${P.getByIndices("aIndices")};
            }
            fn getW(d0 : u32, d1 : u32, d2 : u32, d3 : u32, d4 : u32) -> ${B} {
              let aIndices = array<u32, 5>(d0, d1, d2, d3, d4);
              return ${V.getByIndices("aIndices")};
            }
          ${E.registerUniforms(A).declareVariables(...I,Y)}
          ${E.mainStart()}
          ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
              let coords = ${Y.offsetToIndices("global_idx")};
              let batch = ${be("coords",0,P.rank)};
              let d2 = ${d?be("coords",P.rank-1,P.rank):be("coords",1,P.rank)};
              let xFRCCorner = vec3<u32>(${d?be("coords",1,P.rank):be("coords",2,P.rank)},
              ${d?be("coords",2,P.rank):be("coords",3,P.rank)},
              ${d?be("coords",3,P.rank):be("coords",4,P.rank)}) * uniforms.strides - uniforms.pads;
              let xFCorner = xFRCCorner.x;
              let xRCorner = xFRCCorner.y;
              let xCCorner = xFRCCorner.z;
              let xShapeY = ${d?be("uniforms.x_shape",1,P.rank):be("uniforms.x_shape",2,P.rank)};
              let xShapeZ = ${d?be("uniforms.x_shape",2,P.rank):be("uniforms.x_shape",3,P.rank)};
              let xShapeW = ${d?be("uniforms.x_shape",3,P.rank):be("uniforms.x_shape",4,P.rank)};
              let xShapeU = ${d?be("uniforms.x_shape",4,P.rank):be("uniforms.x_shape",1,P.rank)};
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
              ${ce}
              result[global_idx] = ${B}(value);
          }`};return{name:"Conv3DNaive",shaderCache:{hint:`${t.cacheKey};${d};${$};${N}`,inputDependencies:C},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:w[0],y:w[1],z:w[2]},programUniforms:b}),getShaderSource:k}}}),aw,sw,T$=ae(()=>{"use strict";Ie(),Me(),Pe(),na(),aw=(e,t,i,s)=>{let o=e.length>2,u=o?"value += b[output_channel];":"",d=e[0].dims,c=e[1].dims,f=t.format==="NHWC",m=f?i[3]:i[1],y=m/t.group,w=f&&y>=4?ht(m):1,$=K.size(i)/w,S=[{type:12,data:$},{type:12,data:t.dilations},{type:12,data:[t.strides[0],t.strides[1]]},{type:12,data:[t.pads[0],t.pads[1]]},{type:12,data:y}];ea(t,S),S.push(...ke(d,[c[0],c[1],c[2],c[3]/w]));let b=o?["rank","rank","rank"]:["rank","rank"];S.push(...ke([i[0],i[1],i[2],i[3]/w]));let C=N=>{let k=_e("output",e[0].dataType,i.length,w),E=Ct(k.type.tensor),A=Ji(t,k.type.value,E),D=J("x",e[0].dataType,d.length),B=J("w",e[1].dataType,c.length,w),P=[D,B];o&&P.push(J("b",e[2].dataType,e[2].dims,w));let V=[{name:"output_size",type:"u32"},{name:"dilations",type:"u32",length:t.dilations.length},{name:"strides",type:"u32",length:2},{name:"pads",type:"u32",length:2},{name:"output_channels_per_group",type:"u32"}];ta(t,V);let I=f?`
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
  }`};return{name:"GroupedConv",shaderCache:{hint:`${t.cacheKey}_${w}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:S}),getShaderSource:C}},sw=(e,t,i,s)=>{let o=e.length>2,u=ht(i[3]),d=ht(i[2]),c=K.size(i)/u/d,f=[e[0].dims[0],e[0].dims[1],e[0].dims[2],e[0].dims[3]/u],m=[e[1].dims[0],e[1].dims[1],e[1].dims[2],e[1].dims[3]/u],y=[i[0],i[1],i[2],i[3]/u],w=[{type:12,data:c},{type:6,data:[t.strides[0],t.strides[1]]},{type:6,data:[t.pads[0],t.pads[1]]}];ea(t,w),w.push(...ke(f,m,y));let $=(d-1)*t.strides[1]+m[1],S=b=>{let C=_e("output",e[0].dataType,y.length,u),N=Ct(C.type.tensor),k=Ji(t,C.type.value,N),E=J("x",e[0].dataType,f.length,u),A=J("w",e[1].dataType,m.length,u),D=[E,A];o&&D.push(J("b",e[2].dataType,e[2].dims,u));let B=o?"value += b[output_channel];":"",P=[{name:"output_size",type:"u32"},{name:"strides",type:"i32",length:2},{name:"pads",type:"i32",length:2}];return ta(t,P),`
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

    var x_vals: array<${E.type.value}, ${$}>;
    var values: array<${C.type.value}, ${d}>;
    let input_channel = output_channel;
    // Use constant instead of uniform can give better performance for w's height/width.
    for (var w_height: u32 = 0u; w_height < ${m[0]}; w_height++) {
      let x_height = x_corner.x + i32(w_height);
      if (x_height >= 0 && u32(x_height) < uniforms.x_shape[1]) {
        for (var i = 0; i < ${$}; i++) {
          let x_width = x_corner.y + i;
          if (x_width >= 0 && u32(x_width) < uniforms.x_shape[2]) {
            x_vals[i] = ${E.get("batch","u32(x_height)","u32(x_width)","input_channel")};
          } else {
            x_vals[i] = ${E.type.value}(0);
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
  }`};return{name:"GroupedConv-Vectorize",shaderCache:{hint:`${t.cacheKey};${u};${d};${$};${m[0]};${m[1]}`,inputDependencies:o?["rank","rank","type"]:["rank","rank"]},getRunData:()=>({outputs:[{dims:s?s(i):i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:w}),getShaderSource:S}}}),Dg,$l,Mg,xl,Rp,Kc,Bg,Pg,Dp,C$=ae(()=>{"use strict";Me(),k$(),E$(),cf(),T$(),na(),df(),mi(),Dg=(e,t,i,s,o,u)=>{let d=e[0],c=e.slice(u?1:2,u?3:4),f=c.length,m=t[0],y=t.slice(2).map(($,S)=>$+($-1)*(i[S]-1)),w=c.map(($,S)=>$+s[S]+s[S+f]).map(($,S)=>Math.floor(($-y[S]+o[S])/o[S]));return w.splice(0,0,d),w.splice(u?3:1,0,m),w},$l=[2,3,1,0],Mg=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length>5)throw new Error("greater than 5D is not supported");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],s=e[1].dims[1]*t.group;if(i!==s)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");if(e.length===3&&(e[2].dims.length!==1||e[1].dims[0]!==e[2].dims[0]))throw new Error("invalid bias");let o=e[0].dims.length-2;if(t.dilations.length!==o)throw new Error(`dilations should be ${o}D`);if(t.strides.length!==o)throw new Error(`strides should be ${o}D`);if(t.pads.length!==o*2)throw new Error(`pads should be ${o*2}D`);if(t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape")},xl=(e,t)=>{let i=e.kernelShape.slice();i.length<t[1].dims.length-2&&i.push(...Array(t[1].dims.length-2-i.length).fill(0));for(let u=2;u<t[1].dims.length;++u)i[u-2]===0&&(i[u-2]=t[1].dims[u]);let s=e.pads.slice();Dl.adjustPadsBasedOnAutoPad(t[0].dims,e.strides,e.dilations,i,s,e.format==="NHWC",e.autoPad);let o=Object.assign({},e);return Object.assign(o,{kernelShape:i,pads:s}),o},Rp=e=>{let t=of(e),i=e.format,s=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],o=e.dilations,u=e.group,d=e.kernel_shape,c=e.pads,f=e.strides,m=e.w_is_const();return{autoPad:s,format:i,dilations:o,group:u,kernelShape:d,pads:c,strides:f,wIsConst:m,...t,cacheKey:`${e.format};${t.activation};`}},Kc=(e,t,i,s)=>{let o=i.format==="NHWC",u=Dg(t[0].dims,t[1].dims,i.dilations,i.pads,i.strides,o);if(i.group!==1){let P=[t[0]];if(o){let V=e.kernelCustomData.wT??e.compute(yr(t[1],$l),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=V),P.push(V)}else P.push(t[1]);t.length===3&&P.push(t[2]),!e.adapterInfo.isArchitecture("ampere")&&o&&t[1].dims[0]===i.group&&t[1].dims[1]===1&&i.dilations[0]===1&&i.dilations[1]===1?e.compute(sw(P,i,u,s),{inputs:P}):e.compute(aw(P,i,u,s),{inputs:P});return}let d=t.length===3,c=t[0].dims[o?1:2],f=t[0].dims[o?2:3],m=t[0].dims[o?3:1],y=t[1].dims[2],w=t[1].dims[3],$=u[o?1:2],S=u[o?2:3],b=u[o?3:1],C=o&&y===c&&w===f&&i.pads[0]===0&&i.pads[1]===0;if(C||y===1&&w===1&&i.dilations[0]===1&&i.dilations[1]===1&&i.strides[0]===1&&i.strides[1]===1&&i.pads[0]===0&&i.pads[1]===0){let P=u[0],V,I,Y,te=[];if(o){let pe=e.kernelCustomData.wT??e.compute(yr(t[1],$l),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];if(i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=pe),C){let G=c*f*m;V=t[0].reshape([1,P,G]),I=pe.reshape([1,G,b]),Y=[1,P,b]}else V=t[0].reshape([P,c*f,m]),I=pe.reshape([1,m,b]),Y=[P,$*S,b];te.push(V),te.push(I)}else V=t[0].reshape([P,m,c*f]),I=t[1].reshape([1,b,m]),Y=[P,b,$*S],te.push(I),te.push(V);d&&te.push(t[2]);let he=Y[2],ce=te[0].dims[te[0].dims.length-1];he<8&&ce<8?e.compute(lf(te,i,u,Y,o,s),{inputs:te}):e.compute(Bl(te,i,u,Y,o,s),{inputs:te});return}let N=!0,k=e.kernelCustomData.wT??e.compute(yr(t[1],$l),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=k);let E=[t[0],k];d&&E.push(t[2]);let A=o?$*S:b,D=o?b:$*S,B=y*w*m;e.compute(rw(E,i,u,A,D,B,d,N,s),{inputs:E})},Bg=(e,t)=>{let i=t.format==="NHWC",s=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&s.push(e.inputs[2]);let o=[0,t.pads[0],0,t.pads[1]],u=[1].concat(t.strides),d=[1].concat(t.dilations),c=[1].concat(t.kernelShape),f=xl({...t,pads:o,strides:u,dilations:d,kernelShape:c},s);Kc(e,s,f,m=>i?[m[0],m[2],m[3]]:[m[0],m[1],m[3]])},Pg=(e,t,i)=>{let s=i.format==="NHWC"?"channelsLast":"channelsFirst",o=xl(i,t),u=i.autoPad==="NOTSET"?i.pads:i.autoPad,d=nw(t[0].dims,t[1].dims,i.strides,i.dilations,u,!1,s);e.compute(iw(t,o,d.outShape,[d.filterDepth,d.filterHeight,d.filterWidth],[d.padInfo.front,d.padInfo.top,d.padInfo.left],s))},Dp=(e,t)=>{if(Mg(e.inputs,t),e.inputs[0].dims.length===3)Bg(e,t);else if(e.inputs[0].dims.length===5)Pg(e,e.inputs,t);else{let i=xl(t,e.inputs);Kc(e,e.inputs,i)}}}),ow,I$=ae(()=>{"use strict";Ie(),Cn(),Me(),Pe(),ow=(e,t,i)=>{let s=e.length>2,o=t.outputShape,u=t.format==="NHWC",d=t.group,c=e[1].dims,f=c[2]/d,m=c[3],y=u?ht(f):1,w=u&&m===1&&f>=4,$=w?Math.floor(f/4)*4:Math.floor(f/y)*y,S=f-$,b=u?ht(m):1,C=u?m===1?y:b:1,N=K.size(o)/b,k=[Math.ceil(N/64),1,1];He("verbose",()=>`[conv2d_backprop_webgpu] dispatch = ${k}`);let E=["rank","rank"],A=[t.strides[0],t.strides[1]],D=[t.kernelShape[u?1:2],t.kernelShape[u?2:3]],B=[t.dilations[0],t.dilations[1]],P=[D[0]+(t.dilations[0]<=1?0:(t.kernelShape[u?1:2]-1)*(t.dilations[0]-1)),D[1]+(t.dilations[1]<=1?0:(t.kernelShape[u?2:3]-1)*(t.dilations[1]-1))],V=[P[0]-1-Math.floor((t.pads[0]+t.pads[2])/2),P[1]-1-Math.floor((t.pads[1]+t.pads[3])/2)],I=[{type:12,data:N},{type:12,data:A},{type:12,data:D},{type:12,data:B},{type:12,data:P},{type:6,data:V},{type:12,data:$},{type:12,data:f},{type:12,data:m},...ke(e[0].dims,e[1].dims)];s&&(I.push(...ke(e[2].dims)),E.push("rank")),I.push(...ke(o));let Y=te=>{let he=[{name:"output_size",type:"u32"},{name:"strides",type:"u32",length:A.length},{name:"filter_dims",type:"u32",length:D.length},{name:"dilations",type:"u32",length:D.length},{name:"effective_filter_dims",type:"u32",length:P.length},{name:"pads",type:"i32",length:V.length},{name:"input_channels_per_group_int",type:"u32"},{name:"input_channels_per_group",type:"u32"},{name:"output_channels_per_group",type:"u32"}],ce=Ct(e[0].dataType),pe=u?1:2,G=u?2:3,me=u?3:1,ye=J("W",e[1].dataType,e[1].dims.length,C),ge=J("Dy",e[0].dataType,e[0].dims.length,y),ee=[ge,ye];s&&ee.push(J("bias",e[2].dataType,[o[me]].length,b));let re=_e("result",e[0].dataType,o.length,b),se=()=>{let ne="";if(w)y===4?ne+=`
        let xValue = ${ge.getByOffset("x_offset")};
        let wValue = ${ye.getByOffset("w_offset")};
        dotProd = dotProd + dot(xValue, wValue);
        x_offset += 1u;
        w_offset += 1u;`:y===2?ne+=`
          dotProd = dotProd + dot(vec4<${ce}>(${ge.getByOffset("x_offset")}, ${ge.getByOffset("x_offset + 1u")}), vec4<${ce}>(${ye.getByOffset("w_offset")}, ${ye.getByOffset("w_offset + 1u")}));
          x_offset += 2u;
          w_offset += 2u;`:y===1&&(ne+=`
          dotProd = dotProd + dot(vec4<${ce}>(${ge.getByOffset("x_offset")}, ${ge.getByOffset("x_offset + 1u")}, ${ge.getByOffset("x_offset + 2u")}, ${ge.getByOffset("x_offset + 3u")}), vec4<${ce}>(${ye.getByOffset("w_offset")}, ${ye.getByOffset("w_offset + 1u")}, ${ye.getByOffset("w_offset + 2u")}, ${ye.getByOffset("w_offset + 3u")}));
          x_offset += 4u;
          w_offset += 4u;`);else if(ne+=`
                  let xValue = ${u?ge.getByOffset(`${ge.indicesToOffset(`${ge.type.indices}(batch, idyR, idyC, inputChannel)`)} / ${y}`):ge.get("batch","inputChannel","idyR","idyC")};
        `,y===1)ne+=`
          let w_offset = ${ye.indicesToOffset(`${ye.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel, wOutChannel)`)};
          let wValue = ${ye.getByOffset(`w_offset / ${C}`)};
          dotProd = dotProd + xValue * wValue;`;else for(let X=0;X<y;X++)ne+=`
            let wValue${X} = ${ye.getByOffset(`${ye.indicesToOffset(`${ye.type.indices}(u32(wRPerm), u32(wCPerm), inputChannel + ${X}, wOutChannel)`)} / ${C}`)};
            dotProd = dotProd + xValue[${X}] * wValue${X};`;return ne},O=()=>{if(S===0)return"";if(!w)throw new Error(`packInputAs4 ${w} is not true.`);let ne="";if(y===1){ne+="dotProd = dotProd";for(let X=0;X<S;X++)ne+=`
            + ${ge.getByOffset(`x_offset + ${X}`)} * ${ye.getByOffset(`w_offset + ${X}`)}`;ne+=";"}else if(y===2){if(S!==2)throw new Error(`Invalid inputChannelsRemainder ${S}.`);ne+=`
          let xValue = ${ge.getByOffset("x_offset")};
          let wValue = ${ye.getByOffset("w_offset")};
          dotProd = dotProd + dot(xValue, wValue);`}return ne},F=`
            let outputIndices = ${re.offsetToIndices(`global_idx * ${b}`)};
            let batch = ${re.indicesGet("outputIndices",0)};
            let d1 = ${re.indicesGet("outputIndices",me)};
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
              let dyR = (${ce}(dyRCorner) + ${ce}(wR)) / ${ce}(uniforms.strides[0]);
              let wRPerm = uniforms.filter_dims.x - 1 - wR / uniforms.dilations.x;
              if (dyR < 0.0 || dyR >= ${ce}(uniforms.Dy_shape[${pe}]) || fract(dyR) > 0.0 ||
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
                let dyC = (${ce}(dyCCorner) + ${ce}(wC)) / ${ce}(uniforms.strides.y);
                let wCPerm = uniforms.filter_dims.y - 1 - wC / uniforms.dilations.y;
                if (dyC < 0.0 || dyC >= ${ce}(uniforms.Dy_shape[${G}]) ||
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
                  ${se()}
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
    ${te.registerUniforms(he).declareVariables(...ee,re)}
      ${te.mainStart()}
      ${te.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")};
    ${F}}`};return{name:"ConvTranspose2D",shaderCache:{hint:`${t.cacheKey};${y}${C}${b}${w}${S}`,inputDependencies:E},getRunData:()=>({dispatchGroup:{x:k[0],y:k[1],z:k[2]},outputs:[{dims:i?i(o):o,dataType:e[0].dataType}],programUniforms:I}),getShaderSource:Y}}}),Lg,Ug,jg,Qc,uw,Wg,Zc,Vg,lw,z$=ae(()=>{"use strict";I$(),na(),mi(),Lg=(e,t,i,s,o,u)=>(e-1)*t+i+(s-1)*o+1-u,Ug=(e,t,i,s,o)=>{let u=Math.floor(e/2);t==="SAME_UPPER"?(i[s]=u,i[o]=e-u):t==="SAME_LOWER"&&(i[s]=e-u,i[o]=u)},jg=(e,t,i,s,o,u,d,c,f,m)=>{let y=e.length-2,w=m.length===0;f.length<y&&f.push(...Array(y-f.length).fill(0));let $=e[0],S=t[c?3:1]*o;for(let b=0,C=e.length-y-(c?1:0);b<y;++b,++C){let N=e[C],k=w?N*d[b]:m[b],E=Lg(N,d[b],u[b],t[C],i[b],k);Ug(E,s,u,b,b+y),w&&m.push(d[b]*(N-1)+f[b]+(t[C]-1)*i[b]+1-u[b]-u[b+y])}m.splice(0,0,$),m.splice(c?3:1,0,S)},Qc=(e,t)=>{let i=e.kernelShape.slice();if(e.kernelShape.length===0||e.kernelShape.reduce((w,$)=>w*$,1)===0){i.length=0;for(let w=2;w<t[1].dims.length;++w)i.push(t[1].dims[w])}let s=e.format==="NHWC";i.splice(0,0,t[1].dims[0]),i.splice(s?3:1,0,t[1].dims[1]);let o=e.pads.slice(),u=e.outputShape.slice(),d=e.outputPadding.slice(),c=t[0].dims,f=e.dilations.slice();if(f.reduce((w,$)=>w+$,0)===0){let w=t[0].dims.length-2;f=new Array(w).fill(1)}let m=e.strides.slice();if(m.reduce((w,$)=>w+$,0)===0){let w=t[0].dims.length-2;m=new Array(w).fill(1)}jg(c,i,f,e.autoPad,e.group,o,m,s,d,u);let y=Object.assign({},e);return Object.assign(y,{kernelShape:i,pads:o,outputPadding:d,outputShape:u,dilations:f,strides:m}),y},uw=e=>{let t=of(e),i=e.format,s=["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][typeof e.autoPad>"u"?0:e.autoPad],o=e.dilations,u=e.group??1,d=e.kernelShape,c=e.pads,f=e.strides,m=e.wIsConst(),y=e.outputPadding,w=e.outputShape;return{autoPad:s,format:i,dilations:o,group:u,kernelShape:d,outputPadding:y,outputShape:w,pads:c,strides:f,wIsConst:m,...t,cacheKey:`${e.format};${t.activation};`}},Wg=(e,t)=>{if(!e||e.length!==2&&e.length!==3)throw new Error("Conv requires 2 or 3 inputs");if(e[0].dims.length!==4&&e[0].dims.length!==3)throw new Error("currently only support 2-dimensional conv");if(e[0].dims.length!==e[1].dims.length)throw new Error("filter does not have same dimension as input");let i=e[0].dims[t.format==="NHWC"?e[0].dims.length-1:1],s=e[1].dims[0];if(i!==s)throw new Error("FILTER_IN_CHANNEL should be equal to DATA_CHANNEL");let o=e[1].dims[1]*t.group;if(e.length===3&&(e[2].dims.length!==1||e[2].dims[0]!==o))throw new Error("invalid bias");let u=e[0].dims.length-2;if(t.dilations.reduce((d,c)=>d+c,0)>0&&t.dilations.length!==u)throw new Error(`dilations should be ${u}D`);if(t.strides.reduce((d,c)=>d+c,0)>0&&t.strides.length!==u)throw new Error(`strides should be ${u}D`);if(t.pads.reduce((d,c)=>d+c,0)>0&&t.pads.length!==u*2)throw new Error(`pads should be ${u*2}D`);if(t.outputPadding.length!==u&&t.outputPadding.length!==0)throw new Error(`output_padding should be ${u}D`);if(t.kernelShape.reduce((d,c)=>d+c,0)>0&&t.kernelShape.length!==0&&t.kernelShape.length!==e[1].dims.length-2)throw new Error("invalid kernel shape");if(t.outputShape.length!==0&&t.outputShape.length!==e[0].dims.length-2)throw new Error("invalid output shape")},Zc=(e,t,i,s)=>{let o=e.kernelCustomData.wT??e.compute(yr(t[1],[2,3,0,1]),{inputs:[1],outputs:[i.wIsConst?-2:-1]})[0];i.wIsConst&&!e.kernelCustomData.wT&&(e.kernelCustomData.wT=o);let u=[t[0],o];t.length===3&&u.push(t[2]),e.compute(ow(u,i,s),{inputs:u})},Vg=(e,t)=>{let i=t.format==="NHWC",s=[e.inputs[0].reshape(i?[e.inputs[0].dims[0],1,e.inputs[0].dims[1],e.inputs[0].dims[2]]:[e.inputs[0].dims[0],e.inputs[0].dims[1],1,e.inputs[0].dims[2]]),e.inputs[1].reshape([e.inputs[1].dims[0],e.inputs[1].dims[1],1,e.inputs[1].dims[2]])];e.inputs.length===3&&s.push(e.inputs[2]);let o=t.kernelShape;(o.length===0||o[0]===0)&&(o=[e.inputs[1].dims[2]]);let u=t.dilations;(u.length===0||u[0]===0)&&(u=[1]);let d=t.strides;(d.length===0||d[0]===0)&&(d=[1]);let c=t.pads;c.length===0&&(c=[0,0]),c=[0,c[0],0,c[1]],d=[1].concat(d),u=[1].concat(u),o=[1].concat(o);let f=t.outputPadding;f=[0].concat(f);let m=Qc({...t,pads:c,strides:d,dilations:u,kernelShape:o,outputPadding:f},s);Zc(e,s,m,y=>i?[y[0],y[2],y[3]]:[y[0],y[1],y[3]])},lw=(e,t)=>{if(Wg(e.inputs,t),e.inputs[0].dims.length===3)Vg(e,t);else{let i=Qc(t,e.inputs);Zc(e,e.inputs,i)}}}),Fg,dw,cw,N$=ae(()=>{"use strict";Ie(),Me(),mt(),Pe(),Fg=(e,t,i,s)=>{let o=K.size(t),u=t.length,d=J("input",e,u),c=_e("output",e,u),f=i.dataType===6?i.getInt32Array()[0]:Number(i.getBigInt64Array()[0]),m=K.normalizeAxis(f,u),y=w=>{let $=` i32(${d.indicesGet("inputIndices","uniforms.axis")}) `,S=be("uniforms.input_shape","uniforms.axis",u),b=s.reverse?$+(s.exclusive?" + 1":""):"0",C=s.reverse?S:$+(s.exclusive?"":" + 1");return`
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
                }`};return{name:"CumSum",shaderCache:{hint:s.cacheKey,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:t,dataType:e}],dispatchGroup:{x:Math.ceil(o/64)},programUniforms:[{type:12,data:o},{type:12,data:m},...ke(t,t)]}),getShaderSource:y}},dw=(e,t)=>{let i=e.inputs[0].dims,s=e.inputs[0].dataType,o=e.inputs[1];e.compute(Fg(s,i,o,t),{inputs:[0]})},cw=e=>{let t=e.exclusive===1,i=e.reverse===1;return Ye({exclusive:t,reverse:i})}}),qg,Hg,Gg,pw,fw,O$=ae(()=>{"use strict";Ie(),Me(),mt(),Pe(),qg=e=>{if(!e||e.length!==1)throw new Error("DepthToSpace requires 1 input.");if(e[0].dims.length!==4)throw new Error("DepthToSpace requires 4D input.")},Hg=(e,t,i,s)=>{let o=[];o.push(`fn perm(i: ${s.type.indices}) -> ${i.type.indices} {
    var a: ${i.type.indices};`);for(let u=0;u<t;++u)o.push(i.indicesSet("a",e[u],`i[${u}]`));return o.push("return a;}"),o.join(`
`)},Gg=(e,t)=>{let i,s,o,u,d,c,f=t.format==="NHWC",m=t.blocksize,y=t.mode==="DCR";f?([i,s,o,u]=e.dims,d=y?[i,s,o,m,m,u/m**2]:[i,s,o,u/m**2,m,m],c=y?[0,1,3,2,4,5]:[0,1,4,2,5,3]):([i,s,o,u]=[e.dims[0],e.dims[2],e.dims[3],e.dims[1]],d=y?[i,m,m,u/m**2,s,o]:[i,u/m**2,m,m,s,o],c=y?[0,3,4,1,5,2]:[0,1,4,2,5,3]);let w=e.reshape(d),$=w.dims.length,S=e.dataType,b=J("a",S,$),C=_e("output",S,$),N=k=>`
  ${k.registerUniform("output_size","u32").declareVariables(b,C)}

  ${Hg(c,$,b,C)}

  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let indices = ${C.offsetToIndices("global_idx")};
    let aIndices = perm(indices);

    ${C.setByOffset("global_idx",b.getByIndices("aIndices"))}
  }`;return{name:"DepthToSpace",shaderCache:{hint:`${e.dims};${t.blocksize};${t.mode}`,inputDependencies:["rank"]},getRunData:k=>{let E=f?[i,s*m,o*m,u/m**2]:[i,u/m**2,s*m,o*m],A=K.size(E),D=w.dims,B=K.sortBasedOnPerm(D,c);return{outputs:[{dims:E,dataType:k[0].dataType}],dispatchGroup:{x:Math.ceil(A/64)},programUniforms:[{type:12,data:A},...ke(D,B)]}},getShaderSource:N}},pw=(e,t)=>{qg(e.inputs),e.compute(Gg(e.inputs[0],t))},fw=e=>Ye({blocksize:e.blocksize,mode:e.mode,format:e.format})}),kn,No,bl,Yc,ci,Kg,Qg,Zg,Xc,Jc,ep,Yg,Xg,tp,Jg,hw,mw,A$=ae(()=>{"use strict";Ie(),Me(),mt(),Pe(),kn=256,No=512,bl=2*Math.PI,Yc=e=>{let t=[],i=e;for(let s of[4,2,3,5])for(;i%s===0;)t.push(s),i/=s;return i===1?t:void 0},ci=e=>{let t=e.toPrecision(9);return/[.eE]/.test(t)?t:`${t}.0`},Kg=(e,t,i,s,o)=>{let u=i/e,d=No-s,c=m=>`smem[${d}u + base + ${m*t}u]`,f=`  for (var t = local_idx; t < ${u}u; t += ${kn}u) {
`;f+=`    let twiddleIndex = t % ${t}u;
    let angleUnit = f32(twiddleIndex);
`,f+=`    var leg: array<vec2<f32>, 5>;
`;for(let m=0;m<e;m++){let y=`${s}u + t + ${m*u}u`;if(m===0)f+=`    leg[0] = smem[${y}];
`;else{let w=o*bl*m/(e*t);f+=`    { let a = ${ci(w)} * angleUnit; leg[${m}] = cmul(smem[${y}], vec2<f32>(cos(a), sin(a))); }
`}}if(f+=`    let base = (t / ${t}u) * ${t*e}u + twiddleIndex;
`,e===2)f+=`    ${c(0)} = leg[0] + leg[1];
    ${c(1)} = leg[0] - leg[1];
`;else if(e===4){let m=o<0?"vec2<f32>(oddDiff.y, -oddDiff.x)":"vec2<f32>(-oddDiff.y, oddDiff.x)";f+=`    let evenSum = leg[0] + leg[2]; let evenDiff = leg[0] - leg[2];
`,f+=`    let oddSum = leg[1] + leg[3]; let oddDiff = leg[1] - leg[3];
`,f+=`    let oddRot = ${m};
`,f+=`    ${c(0)} = evenSum + oddSum;
    ${c(1)} = evenDiff + oddRot;
`,f+=`    ${c(2)} = evenSum - oddSum;
    ${c(3)} = evenDiff - oddRot;
`}else for(let m=0;m<e;m++){let y=["leg[0]"];for(let w=1;w<e;w++){let $=o*bl*(w*m)/e,S=ci(Math.cos($)),b=ci(Math.sin($));y.push(`vec2<f32>(leg[${w}].x*${S} - leg[${w}].y*${b}, leg[${w}].x*${b} + leg[${w}].y*${S})`)}f+=`    ${c(m)} = ${y.join(" + ")};
`}return`${f}  }
  workgroupBarrier();
`},Qg=(e,t,i)=>{let s="",o=1,u=0;for(let d of e)s+=Kg(d,o,t,u,i),o*=d,u=No-u;return{code:s,resultOffset:u}},Zg=(e,t,i,s,o)=>{let u=e.dims,d=u.length,c=u[d-1],f=u[t],m=i&&s?(f-1)*2:f;o!==void 0&&(m=o);let y=i&&s?1:2,w=s&&!i?Math.floor(m/2)+1:m,$=u.slice();$[t]=w,$[d-1]=y;let S=1;for(let C=t+1;C<d-1;C++)S*=u[C];let b=K.size(u)/c/f;return{dataType:e.dataType,outputDims:$,length:m,signalLength:f,inner:S,batch:b,inputComponents:c,outputComponents:y,outputLength:w,inverse:i,onesided:s}},Xc=(e,t)=>[t,e.length,e.inputComponents,e.outputComponents,e.inverse,e.onesided].join(";"),Jc=e=>[{type:12,data:e.batch},{type:12,data:e.signalLength},{type:12,data:e.inner},{type:12,data:e.outputLength}],ep=(e,t,i)=>e.registerUniform("batch","u32").registerUniform("signalLength","u32").registerUniform("inner","u32").registerUniform("outputLength","u32").declareVariables(t,i),Yg=e=>{let{dataType:t,length:i,inputComponents:s,outputComponents:o,inverse:u,onesided:d}=e,c=Tt(t),f=u?1:-1,m=u?1/i:1,y=Yc(i),w=$=>{let S=J("x",t,[1]),b=_e("y",t,[1]),C=B=>{let P=`inBase + (${B}) * uniforms.inner * ${s}u`,V=`f32(${S.getByOffset(P)})`,I=s===2?`f32(${S.getByOffset(`${P} + 1u`)})`:"0.0";return`vec2<f32>(${V}, ${I})`},N;if(u&&d){let B=Math.floor(i/2)+1,P=i%2===0?`select(provided, provided - 1u, provided == ${B}u)`:"provided";N=`
    let provided = min(uniforms.signalLength, ${B}u);
    for (var i = local_idx; i < ${i}u; i += ${kn}u) {
      if (i < provided) { smem[i] = ${C("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();
    for (var k = local_idx + 1u; k < ${P}; k += ${kn}u) {
      let h = smem[k];
      smem[${i}u - k] = vec2<f32>(h.x, -h.y);
    }
    workgroupBarrier();`}else N=`
    let loadCount = min(uniforms.signalLength, ${i}u);
    for (var i = local_idx; i < ${i}u; i += ${kn}u) {
      if (i < loadCount) { smem[i] = ${C("i")}; } else { smem[i] = vec2<f32>(0.0); }
    }
    workgroupBarrier();`;let{code:k,resultOffset:E}=Qg(y,i,f),A=m===1?`smem[${E}u + i]`:`smem[${E}u + i] * ${ci(m)}`,D=o===2?b.setByOffset("off + 1u",`${c}(v.y)`):"";return`
  ${ep($,S,b)}
  var<workgroup> smem: array<vec2<f32>, ${2*No}>;
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${$.mainStart(kn)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${s}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${o}u;
    ${N}
${k}    for (var i = local_idx; i < uniforms.outputLength; i += ${kn}u) {
      let v = ${A};
      let off = outBase + i * uniforms.inner * ${o}u;
      ${b.setByOffset("off",`${c}(v.x)`)}
      ${D}
    }
  }`};return{name:"DFT",shaderCache:{hint:Xc(e,"fft"),inputDependencies:["type"]},getShaderSource:w,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:Jc(e),dispatchGroup:{x:e.batch}})}},Xg=e=>{let{dataType:t,length:i,inputComponents:s,outputComponents:o,inverse:u,onesided:d}=e,c=Tt(t),f=u?1:-1,m=u?1/i:1,y=w=>{let $=J("x",t,[1]),S=_e("y",t,[1]),b=A=>{let D=`inBase + (${A}) * uniforms.inner * ${s}u`,B=`f32(${$.getByOffset(D)})`,P=s===2?`f32(${$.getByOffset(`${D} + 1u`)})`:"0.0";return`vec2<f32>(${B}, ${P})`},C=u&&d?`fn spectrum(inBase: u32, k: u32) -> vec2<f32> {
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
      let angle = ${ci(f*bl)} * f32(knMod) / ${ci(i)};
      acc += cmul(spectrum(inBase, n), vec2<f32>(cos(angle), sin(angle)));
      knMod += k;
      if (knMod >= ${i}u) { knMod -= ${i}u; }`,k=o===2?S.setByOffset("off + 1u",`${c}(v.y)`):"",E=m===1?"acc":`acc * ${ci(m)}`;return`
  ${ep(w,$,S)}
  fn cmul(a: vec2<f32>, b: vec2<f32>) -> vec2<f32> {
    return vec2<f32>(a.x * b.x - a.y * b.y, a.x * b.y + a.y * b.x);
  }
  ${C}
  ${w.mainStart(kn)}
    let row = workgroup_index;
    if (row >= uniforms.batch) { return; }
    let outer = row / uniforms.inner;
    let within = row % uniforms.inner;
    let inBase = (outer * uniforms.signalLength * uniforms.inner + within) * ${s}u;
    let outBase = (outer * uniforms.outputLength * uniforms.inner + within) * ${o}u;
    for (var k = local_idx; k < uniforms.outputLength; k += ${kn}u) {
      var acc = vec2<f32>(0.0, 0.0);
      var knMod = 0u;
      for (var n = 0u; n < ${i}u; n++) {${N}
      }
      let v = ${E};
      let off = outBase + k * uniforms.inner * ${o}u;
      ${S.setByOffset("off",`${c}(v.x)`)}
      ${k}
    }
  }`};return{name:"DFT",shaderCache:{hint:Xc(e,"direct"),inputDependencies:["type"]},getShaderSource:y,getRunData:()=>({outputs:[{dims:e.outputDims,dataType:t}],programUniforms:Jc(e),dispatchGroup:{x:e.batch}})}},tp=e=>{if(!e||e.dataType===0)return;if(K.size(e.dims)!==1)throw new Error("DFT optional scalar inputs must have exactly 1 element.");if(e.dataType===6)return e.getInt32Array()[0];let t=Number(e.getBigInt64Array()[0]);if(!Number.isSafeInteger(t))throw new Error("DFT optional scalar inputs are out of JavaScript safe integer range.");return t},Jg=e=>{if(!e||e.length<1)throw new Error("DFT requires at least 1 input.");let t=e[0].dims;if(t.length<2)throw new Error("DFT input must have at least 2 dimensions.");let i=t[t.length-1];if(i!==1&&i!==2)throw new Error("DFT input's innermost dimension must be 1 (real) or 2 (complex).")},hw=(e,t)=>{Jg(e.inputs);let i=e.inputs[0],s=i.dims.length,o=t.inverse!==0,u=t.onesided!==0,d=tp(e.inputs[1]);if(d!==void 0&&d<=0)throw new Error("dft_length must be greater than zero.");let c=K.normalizeAxis(tp(e.inputs[2])??t.axis,s);if(c===s-1)throw new Error("DFT axis must refer to a signal dimension, not the innermost (real/imaginary) dimension.");if(o&&u&&i.dims[s-1]!==2)throw new Error("Inverse one-sided DFT (IRFFT) requires complex-valued input (innermost dimension 2).");let f=Zg(i,c,o,u,d);if(f.length<=0)throw new Error(`Invalid DFT length: ${f.length}`);let m=f.length<=No&&Yc(f.length)!==void 0?Yg(f):Xg(f);e.compute(m,{inputs:[0]})},mw=e=>Ye({axis:e.axis??1,inverse:e.inverse??0,onesided:e.onesided??0})}),Sl,Oo,rp,ey,ty,ry,ny,np,iy,gw,yw,R$=ae(()=>{"use strict";Ie(),Me(),mt(),Pe(),Sl="[a-zA-Z]|\\.\\.\\.",Oo="("+Sl+")+",rp="^"+Oo+"$",ey="("+Oo+",)*"+Oo,ty="^"+ey+"$",ry=class{constructor(e=-1){this.symbolToIndices=new Map,this.inputIndex=e}addSymbol(e,t){let i=this.symbolToIndices.get(e);i===void 0?i=[t]:i.push(t),this.symbolToIndices.set(e,i)}},ny=class{constructor(e,t){var o;this.equation=t,this.hasEllipsis=!1,this.symbolToInfo=new Map,this.lhs=new Array,this.outputDims=[];let[i,s]=t.includes("->")?t.split("->",2):[t,""];if(!i.match(RegExp(ty)))throw new Error("Invalid LHS term");if(i.split(",").forEach((u,d)=>{let c=e[d].dims.slice();if(!u.match(RegExp(rp)))throw new Error("Invalid LHS term");let f=this.processTerm(u,!0,c,d);this.lhs.push(f)}),s==="")s+=[...this.symbolToInfo.entries()].filter(([u,d])=>d.count===1||u==="...").map(([u])=>u).join("");else if(!s.match(RegExp(Oo)))throw new Error("Invalid RHS");(o=s.match(RegExp(Sl,"g")))==null||o.forEach(u=>{if(u==="...")this.outputDims=this.outputDims.concat(this.ellipsisDims);else{let d=this.symbolToInfo.get(u);if(d===void 0)throw new Error("Invalid RHS symbol");this.outputDims.push(d.dimValue)}}),this.rhs=this.processTerm(s,!1,this.outputDims)}addSymbol(e,t,i){let s=this.symbolToInfo.get(e);if(s!==void 0){if(s.dimValue!==t&&s.count!==1)throw new Error("Dimension mismatch");s.count++,s.inputIndices.push(i)}else s={count:1,dimValue:t,inputIndices:[i]};this.symbolToInfo.set(e,s)}processTerm(e,t,i,s=-1){let o=i.length,u=!1,d=[],c=0;if(!e.match(RegExp(rp))&&!t&&e!=="")throw new Error("Invalid LHS term");let f=e.match(RegExp(Sl,"g")),m=new ry(s);return f==null||f.forEach((y,w)=>{if(y==="..."){if(u)throw new Error("Only one ellipsis is allowed per input term");u=!0;let $=o-f.length+1;if($<0)throw new Error("Ellipsis out of bounds");if(d=i.slice(c,c+$),this.hasEllipsis){if(this.ellipsisDims.length!==d.length||this.ellipsisDims.toString()!==d.toString())throw new Error("Ellipsis dimensions mismatch")}else if(t)this.hasEllipsis=!0,this.ellipsisDims=d;else throw new Error("Ellipsis must be specified in the LHS");for(let S=0;S<d.length;S++){let b=String.fromCharCode(48+S);m.addSymbol(b,w+S),this.addSymbol(b,i[c++],s)}}else m.addSymbol(y,w+(this.hasEllipsis?this.ellipsisDims.length-1:0)),this.addSymbol(y,i[c++],s)}),m}},np=e=>e+"_max",iy=(e,t,i,s)=>{let o=e.map(m=>m.length).map((m,y)=>J(`input${y}`,t,m)),u=K.size(s),d=_e("output",t,s.length),c=[...i.symbolToInfo.keys()].filter(m=>!i.rhs.symbolToIndices.has(m)),f=m=>{let y=[],w="var prod = 1.0;",$="var sum = 0.0;",S="sum += prod;",b=[],C=[],N=[],k=[],E=i.symbolToInfo.size===i.rhs.symbolToIndices.size;i.symbolToInfo.forEach((D,B)=>{var P;if(i.rhs.symbolToIndices.has(B)){let V=(P=i.rhs.symbolToIndices.get(B))==null?void 0:P[0];V!==void 0&&i.lhs.forEach((I,Y)=>{if(D.inputIndices.includes(Y)){let te=I.symbolToIndices.get(B);if(te===void 0)throw new Error("Invalid symbol error");te.forEach(he=>{y.push(`${o[Y].indicesSet(`input${Y}Indices`,he,d.indicesGet("outputIndices",V))}`)})}})}else i.lhs.forEach((V,I)=>{if(D.inputIndices.includes(I)){let Y=V.symbolToIndices.get(B);if(Y===void 0)throw new Error("Invalid symbol error");Y.forEach(te=>{b.push(`${o[I].indicesSet(`input${I}Indices`,te,`${B}`)}`)}),k.push(`prod *= ${o[I].getByIndices(`input${I}Indices`)};`)}}),C.push(`for(var ${B}: u32 = 0; ${B} < uniforms.${np(B)}; ${B}++) {`),N.push("}")});let A=E?[...y,`let sum = ${o.map((D,B)=>D.getByIndices(`input${B}Indices`)).join(" * ")};`]:[...y,$,...C,...b,w,...k,S,...N];return`
            ${m.registerUniforms(c.map(D=>({name:`${np(D)}`,type:"u32"}))).registerUniform("outputSize","u32").declareVariables(...o,d)}

            ${m.mainStart()}
            ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
            var outputIndices = ${d.offsetToIndices("global_idx")};
            ${o.map((D,B)=>`var input${B}Indices: ${o[B].type.indices};`).join(`
`)}
            ${A.join(`
`)};
            ${d.setByOffset("global_idx","sum")};
          }`};return{name:"Einsum",shaderCache:{hint:i.equation,inputDependencies:e.map(()=>"rank")},getRunData:()=>{let m=c.filter(w=>i.symbolToInfo.has(w)).map(w=>{var $;return{type:12,data:(($=i.symbolToInfo.get(w))==null?void 0:$.dimValue)||0}});m.push({type:12,data:u});let y=e.map((w,$)=>[...ke(w)]).reduce((w,$)=>w.concat($),m);return y.push(...ke(s)),{outputs:[{dims:s,dataType:t}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:y}},getShaderSource:f}},gw=(e,t)=>{let i=new ny(e.inputs,t.equation),s=i.outputDims,o=e.inputs.map((u,d)=>u.dims);e.compute(iy(o,e.inputs[0].dataType,i,s))},yw=e=>{let t=e.equation.replace(/\s+/g,"");return Ye({equation:t})}}),ay,ip,sy,oy,vw,D$=ae(()=>{"use strict";Ie(),Me(),Pe(),ay=e=>{if(!e||e.length!==2)throw new Error("Expand requires 2 input.");let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),s=i.length<t.length?0:i.length-t.length,o=t.length<i.length?0:t.length-i.length;for(;s<i.length&&o<t.length;++s,++o)if(i[s]!==t[o]&&i[s]!==1&&t[o]!==1)throw new Error("Expand requires shape to be broadcastable to input")},ip=(e,t)=>{let i=e.length-t.length,s=[];for(let o=0;o<i;++o)s.push(e[o]);for(let o=0;o<t.length;++o)s.push(t[o]===1?e[o+i]:t[o]);return s},sy=(e,t)=>e.length>t.length?ip(e,t):ip(t,e),oy=e=>{let t=e[0].dims,i=Array.from(e[1].getBigInt64Array(),Number),s=sy(t,i),o=e[0].dataType,u=o===9||K.size(t)===1,d=o===9||t.length>0&&t[t.length-1]%4===0?4:1,c=u||s.length>0&&s[s.length-1]%4===0?4:1,f=Math.ceil(K.size(s)/c),m=w=>{let $=J("input",o,t.length,d),S=_e("output",o,s.length,c),b;if(o===9){let C=(N,k,E="")=>`
          let outputIndices${k} = ${S.offsetToIndices(`outputOffset + ${k}u`)};
          let offset${k} = ${$.broadcastedIndicesToOffset(`outputIndices${k}`,S)};
          let index${k} = offset${k} / 4u;
          let component${k} = offset${k} % 4u;
          ${N}[${k}] = ${E}(${$.getByOffset(`index${k}`)}[component${k}]);
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
    ${b}`},y=[{type:12,data:f},...ke(t,s)];return{name:"Expand",shaderCache:{hint:`${s.length};${d}${c}`,inputDependencies:["rank"]},getShaderSource:m,getRunData:()=>({outputs:[{dims:s,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:y})}},vw=e=>{ay(e.inputs),e.compute(oy(e.inputs),{inputs:[0]})}}),uy,ww,M$=ae(()=>{"use strict";Ie(),Me(),Pe(),sf(),uy=e=>{let t=e[0].dataType,i=K.size(e[0].dims),s=K.size(e[1].dims),o=s%4===0,u=d=>{let c=J("x",t,[1],4),f=J("bias",t,[1],4),m=_e("y",t,[1],4),y=[{name:"output_vec_size",type:"u32"},{name:"bias_size",type:"u32"}],w=S=>`
      let bias${S}_offset: u32 = (global_idx * 4 + ${S}) % uniforms.bias_size;
      let bias${S} = ${f.getByOffset(`bias${S}_offset / 4`)}[bias${S}_offset % 4];`,$=o?`
      let bias = ${f.getByOffset("global_idx % (uniforms.bias_size / 4)")};`:`${w(0)}${w(1)}${w(2)}${w(3)}
      let bias = ${c.type.value}(bias0, bias1, bias2, bias3);`;return`${d.registerUniforms(y).declareVariables(c,f,m)}

    ${zp(Tt(t))}

    ${d.mainStart(os)}
      ${d.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_vec_size")}

      let x = ${c.getByOffset("global_idx")};
      ${$}
      let x_in = x + bias;
      ${m.setByOffset("global_idx",Np("x_in"))}
    }`};return{name:"FastGeluWithBias",shaderCache:{hint:`${o}`,inputDependencies:["type","type"]},getShaderSource:u,getRunData:d=>({outputs:[{dims:d[0].dims,dataType:d[0].dataType}],programUniforms:[{type:12,data:Math.ceil(i/4)},{type:12,data:s}],dispatchGroup:{x:Math.ceil(i/os/4)}})}},ww=e=>{e.inputs.length<2||K.size(e.inputs[1].dims)===0?B1(e):e.compute(uy(e.inputs))}}),ly,dy,_w,$w,B$=ae(()=>{"use strict";Ie(),Me(),mt(),Pe(),ly=e=>{if(!e||e.length!==2)throw new Error("Gather requires 2 inputs.")},dy=(e,t)=>{let i=e[0].dims,s=e[1].dims,o=i.length,u=K.normalizeAxis(t.axis,o),d=i.slice(0);d.splice(u,1,...s);let c=i[u],f=e[0].dataType===9?4:1,m=Math.ceil(K.size(d)/f),y=[{type:12,data:m},{type:6,data:c},{type:12,data:u},...ke(e[0].dims,e[1].dims,d)],w=$=>{let S=J("data",e[0].dataType,e[0].dims.length,f),b=J("inputIndices",e[1].dataType,e[1].dims.length),C=_e("output",e[0].dataType,d.length,f),N=E=>{let A=s.length,D=`var indicesIndices${E}  = ${b.type.indices}(0);`;for(let B=0;B<A;B++)D+=`${A>1?`indicesIndices${E}[${B}]`:`indicesIndices${E}`} = ${d.length>1?`outputIndices${E}[uniforms.axis + ${B}]`:`outputIndices${E}`};`;D+=`
          var idx${E} = ${b.getByIndices(`indicesIndices${E}`)};
          if (idx${E} < 0) {
            idx${E} = idx${E} + uniforms.axisDimLimit;
          }
          var dataIndices${E} : ${S.type.indices};
        `;for(let B=0,P=0;B<o;B++)B===u?(D+=`${o>1?`dataIndices${E}[${B}]`:`dataIndices${E}`} = u32(idx${E});`,P+=A):(D+=`${o>1?`dataIndices${E}[${B}]`:`dataIndices${E}`} = ${d.length>1?`outputIndices${E}[${P}]`:`outputIndices${E}`};`,P++);return D},k;if(e[0].dataType===9){let E=(A,D,B="")=>`
          let outputIndices${D} = ${C.offsetToIndices(`outputOffset + ${D}u`)};
          ${N(D)};
          let offset${D} = ${S.indicesToOffset(`dataIndices${D}`)};
          let index${D} = offset${D} / 4u;
          let component${D} = offset${D} % 4u;
          ${A}[${D}] = ${B}(${S.getByOffset(`index${D}`)}[component${D}]);
        `;k=`
        let outputOffset = global_idx * ${f};
        var value = vec4<u32>(0);
        ${E("value",0,"u32")}
        ${E("value",1,"u32")}
        ${E("value",2,"u32")}
        ${E("value",3,"u32")}
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
      }`};return{name:"Gather",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:d,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:y}),getShaderSource:w}},_w=e=>Ye({axis:e.axis}),$w=(e,t)=>{let i=e.inputs;ly(i),e.compute(dy(e.inputs,t))}}),cy,xw,bw,P$=ae(()=>{"use strict";Ie(),Me(),Pe(),cy=(e,t,i,s,o,u,d,c,f)=>{let m=[{type:12,data:u},{type:12,data:s},{type:12,data:o},{type:12,data:i},{type:12,data:d},{type:12,data:c},{type:12,data:f}],y=[u];m.push(...ke(t.dims,y));let w=$=>{let S=J("indices_data",t.dataType,t.dims.length),b=_e("input_slice_offsets_data",12,1,1),C=[S,b],N=[{name:"output_size",type:"u32"},{name:"batch_dims",type:"u32"},{name:"input_dims",type:"u32",length:o.length},{name:"sizes_from_slice_dims_data",type:"u32",length:i.length},{name:"num_slices_per_batch",type:"u32"},{name:"input_batch_stride",type:"u32"},{name:"num_slice_dims",type:"u32"}];return`
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
  }`};return e.compute({name:"computeSliceOffsets",shaderCache:{hint:`${o.length}_${i.length}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:y,dataType:e.inputs[1].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:m}),getShaderSource:w},{inputs:[t],outputs:[-1]})[0]},xw=(e,t)=>{let i=e.inputs,s=i[0].dims,o=i[0].dataType,u=i[1].dims,d=u[u.length-1],c=K.sizeToDimension(u,u.length-1),f=K.sizeFromDimension(s,t.batchDims+d),m=K.sizeToDimension(s,t.batchDims),y=K.sizeFromDimension(s,t.batchDims),w=c/m,$=new Array(d),S=f;for(let D=0;D<d;++D)$[d-1-D]=S,S*=s[t.batchDims+d-1-D];let b=cy(e,i[1],$,t.batchDims,s,c,w,y,d),C=t.batchDims+d;if(C>s.length)throw new Error("last dimension of indices must not be larger than rank of input tensor");let N=u.slice(0,-1).concat(s.slice(C)),k=K.size(N),E=[{type:12,data:k},{type:12,data:f},...ke(i[0].dims,b.dims,N)],A=D=>{let B=J("data",i[0].dataType,i[0].dims.length),P=J("slice_offsets",12,b.dims.length),V=_e("output",i[0].dataType,N.length);return`
          ${D.registerUniform("output_size","u32").registerUniform("slice_size","u32").declareVariables(B,P,V)}
            ${D.mainStart()}
            ${D.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
          let slice_offset = slice_offsets[global_idx / uniforms.slice_size];
          output[global_idx] = data[u32(slice_offset) + global_idx % uniforms.slice_size];
        }`};e.compute({name:"GatherND",shaderCache:{hint:t.cacheKey,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:N,dataType:o}],dispatchGroup:{x:Math.ceil(k/64)},programUniforms:E}),getShaderSource:A},{inputs:[i[0],b]})},bw=e=>({batchDims:e.batch_dims,cacheKey:""})}),py,fy,Sw,kw,L$=ae(()=>{"use strict";Ie(),Me(),mt(),Pe(),py=(e,t)=>{if(e.length<3||e.length>4)throw new Error("GatherBlockQuantized requires 3 or 4 inputs.");let i=K.normalizeAxis(t.quantizeAxis,e[0].dims.length),s=t.blockSize,o=e[0],u=e[2],d=e.length===4?e[3]:void 0;if(u.dims.length!==o.dims.length||!o.dims.map((c,f)=>f===i?Math.ceil(c/s)===u.dims[f]:c===u.dims[f]).reduce((c,f)=>c&&f,!0))throw new Error("Scales must have the same rank as the input tensor and the dims should match except on gatherAxis.");if(d){if(d.dataType!==o.dataType)throw new Error("Zero point must have the same data type as the input tensor.");if(d.dims.length!==u.dims.length||!d.dims.map((c,f)=>c===u.dims[f]).reduce((c,f)=>c&&f,!0))throw new Error("Zero point must have the same rank as the input tensor and the dims should match except on quantizeAxis.")}},fy=(e,t)=>{let i=e[0].dims,s=e[1].dims,o=i.length,u=K.normalizeAxis(t.gatherAxis,o),d=K.normalizeAxis(t.quantizeAxis,o),c=i.slice(0);c.splice(u,1,...s);let f=K.size(c),m=e[2].dataType,y=e[0].dataType===22,w=[{type:12,data:f},{type:12,data:d},{type:12,data:u},{type:12,data:t.blockSize},...ke(...e.map((S,b)=>S.dims),c)],$=S=>{let b=J("data",e[0].dataType,e[0].dims.length),C=J("inputIndices",e[1].dataType,e[1].dims.length),N=J("scales",e[2].dataType,e[2].dims.length),k=e.length>3?J("zeroPoint",e[3].dataType,e[3].dims.length):void 0,E=_e("output",m,c.length),A=[b,C,N];k&&A.push(k);let D=[{name:"output_size",type:"u32"},{name:"quantize_axis",type:"u32"},{name:"gather_axis",type:"u32"},{name:"block_size",type:"u32"}];return`
        ${S.registerUniforms(D).declareVariables(...A,E)}
        ${S.mainStart()}
        let output_indices = ${E.offsetToIndices("global_idx")};
        var indices_indices = ${C.type.indices}(0);
        ${s.length>1?`
          for (var i: u32 = 0; i < ${s.length}; i++) {
            let index = ${E.indicesGet("output_indices","uniforms.gather_axis + i")};
            ${C.indicesSet("indices_indices","i","index")};
          }`:`indices_indices = ${E.indicesGet("output_indices","uniforms.gather_axis")};`};
        var data_indices = ${b.type.indices}(0);
        for (var i: u32 = 0; i < uniforms.gather_axis; i++) {
          let index = ${E.indicesGet("output_indices","i")};
          ${b.indicesSet("data_indices","i","index")};
        }
        var index_from_indices = ${C.getByIndices("indices_indices")};
        if (index_from_indices < 0) {
          index_from_indices += ${i[u]};
        }
        ${b.indicesSet("data_indices","uniforms.gather_axis","u32(index_from_indices)")};
        for (var i = uniforms.gather_axis + 1; i < ${c.length}; i++) {
          let index = ${E.indicesGet("output_indices",`i + ${s.length} - 1`)};
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
        ${E.setByOffset("global_idx","dequantized_data")};
    }`};return{name:"GatherBlockQuantized",shaderCache:{hint:`${t.cacheKey};${e.filter((S,b)=>b!==1).map(S=>S.dims.join("_")).join(";")}`,inputDependencies:Array.from({length:e.length},(S,b)=>"rank")},getRunData:()=>({outputs:[{dims:c,dataType:m}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:w}),getShaderSource:$}},Sw=(e,t)=>{let i=e.inputs;py(i,t),e.compute(fy(e.inputs,t))},kw=e=>Ye({blockSize:e.blockSize,gatherAxis:e.gatherAxis,quantizeAxis:e.quantizeAxis})}),hy,my,Ew,Tw,U$=ae(()=>{"use strict";Ie(),Me(),mt(),Pe(),hy=e=>{if(!e||e.length!==2)throw new Error("GatherElements requires 2 inputs.");if(e[0].dims.length<1)throw new Error("GatherElements requires that the data input be rank >= 1.");if(e[0].dims.length!==e[1].dims.length)throw new Error(`GatherElements requires that the data input and
                     indices input tensors be of same rank.`)},my=(e,t)=>{let i=e[0].dims,s=e[0].dataType,o=i.length,u=e[1].dims,d=e[1].dataType,c=K.normalizeAxis(t.axis,o),f=i[c],m=u.slice(0),y=K.size(m),w=J("input",s,o),$=J("indicesInput",d,u.length),S=_e("output",s,m.length),b=[{type:12,data:y},{type:6,data:f},{type:12,data:c}];return b.push(...ke(i,u,m)),{name:"GatherElements",shaderCache:{inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:m,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:b}),getShaderSource:C=>`
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
  }`}},Ew=e=>Ye({axis:e.axis}),Tw=(e,t)=>{let i=e.inputs;hy(i),e.compute(my(e.inputs,t))}}),gy,yy,Cw,Iw,j$=ae(()=>{"use strict";Ie(),Me(),Pe(),gy=e=>{if(!e)throw new Error("Input is missing");if(e.length<2||e.length>3)throw new Error("Invaid input number.");if(e.length===3&&e[2].dims.length>2)throw new Error("Invalid input shape of C");if(e[0].dataType!==e[1].dataType||e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("Input types are mismatched")},yy=(e,t)=>{let i=e[0].dims.slice(),s=e[1].dims.slice(),[o,u,d]=bv.getShapeOfGemmResult(i,t.transA,s,t.transB,e.length===3?e[2].dims:void 0),c=[o,u];if(!c)throw new Error("Can't use gemm on the given tensors");let f=16,m=Math.ceil(u/f),y=Math.ceil(o/f),w=!0,$=K.size(c),S=[{type:12,data:w?m:$},{type:12,data:o},{type:12,data:u},{type:12,data:d},{type:1,data:t.alpha},{type:1,data:t.beta}],b=["type","type"];e.length===3&&(S.push(...ke(e[2].dims)),b.push("rank")),S.push(...ke(c));let C=k=>{let E="";t.transA&&t.transB?E="value += a[k * uniforms.M + m] * b[n * uniforms.K + k];":t.transA&&!t.transB?E="value += a[k * uniforms.M + m] * b[k * uniforms.N + n];":!t.transA&&t.transB?E="value += a[m * uniforms.K + k] * b[n * uniforms.K + k];":!t.transA&&!t.transB&&(E="value += a[m * uniforms.K + k] * b[k * uniforms.N + n];");let A=t.alpha===1?"":"value *= uniforms.alpha;",D=J("a",e[0].dataType,e[0].dims),B=J("b",e[1].dataType,e[1].dims),P=D.type.value,V=null,I=[D,B];e.length===3&&(V=J("c",e[2].dataType,e[2].dims.length),I.push(V));let Y=_e("output",e[0].dataType,c.length);I.push(Y);let te=[{name:"output_size",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}];return`
  ${k.registerUniforms(te).declareVariables(...I)}

  ${k.mainStart()}
    ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

    let m = global_idx / uniforms.N;
    let n = global_idx % uniforms.N;

    var value = ${P}(0);
    for (var k: u32 = 0u; k < uniforms.K; k++) {
      ${E}
    }

    ${A}
    ${V!=null?`let cOffset = ${V.broadcastedIndicesToOffset("vec2(m, n)",Y)}; value += ${P}(uniforms.beta) * ${V.getByOffset("cOffset")};`:""}
    output[global_idx] = value;
  }`},N=k=>{let E=J("a",e[0].dataType,e[0].dims),A=J("b",e[1].dataType,e[1].dims),D=null,B=[E,A];e.length===3&&(D=J("c",e[2].dataType,e[2].dims.length),B.push(D));let P=_e("output",e[0].dataType,c.length);B.push(P);let V=[{name:"num_tile_n",type:"u32"},{name:"M",type:"u32"},{name:"N",type:"u32"},{name:"K",type:"u32"},{name:"alpha",type:"f32"},{name:"beta",type:"f32"}],I="",Y="";t.transA&&t.transB?(Y=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${E.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${A.type.value}(0);
      }
      `,I="value += tile_a[k][local_id.y] * tile_b[local_id.x][k];"):t.transA&&!t.transB?(Y=`
      var col = tile_row_start + local_id.x;
      var row = k_start + local_id.y;
      if (col < uniforms.M && row < uniforms.K) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.M + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${E.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${A.type.value}(0);
      }
      `,I="value += tile_a[k][local_id.y] * tile_b[k][local_id.x];"):!t.transA&&t.transB?(Y=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${E.type.value}(0);
      }

      col = k_start + local_id.x;
      row = tile_col_start + local_id.y;
      if (col < uniforms.K && row < uniforms.N) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.K + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${A.type.value}(0);
      }
      `,I="value += tile_a[local_id.y][k] * tile_b[local_id.x][k];"):!t.transA&&!t.transB&&(Y=`
      var col = k_start + local_id.x;
      var row = tile_row_start + local_id.y;
      if (col < uniforms.K && row < uniforms.M) {
        tile_a[local_id.y][local_id.x] = a[row * uniforms.K + col];
      } else {
        tile_a[local_id.y][local_id.x] = ${E.type.value}(0);
      }

      col = tile_col_start + local_id.x;
      row = k_start + local_id.y;
      if (col < uniforms.N && row < uniforms.K) {
        tile_b[local_id.y][local_id.x] = b[row * uniforms.N + col];
      } else {
        tile_b[local_id.y][local_id.x] = ${A.type.value}(0);
      }
      `,I="value += tile_a[local_id.y][k] * tile_b[k][local_id.x];");let te=t.alpha===1?"":"value *= uniforms.alpha;";return`
  ${k.registerUniforms(V).declareVariables(...B)}
  var<workgroup> tile_a: array<array<${E.type.storage}, ${f}>, ${f}>;
  var<workgroup> tile_b: array<array<${A.type.storage}, ${f}>, ${f}>;
  ${k.mainStart([f,f,1])}
    let tile_col_start = (workgroup_index % uniforms.num_tile_n) * ${f};
    let tile_row_start = (workgroup_index / uniforms.num_tile_n) * ${f};
    let num_tiles = (uniforms.K - 1) / ${f} + 1;
    var k_start = 0u;
    var value = ${P.type.value}(0);
    for (var t: u32 = 0u; t < num_tiles; t++) {
      ${Y}
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
  }`};return w?{name:"GemmShared",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:m*y},programUniforms:S}),getShaderSource:N}:{name:"Gemm",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:c,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:S}),getShaderSource:C}},Cw=e=>{let t=e.transA,i=e.transB,s=e.alpha,o=e.beta;return{transA:t,transB:i,alpha:s,beta:o,cacheKey:`${e.transA};${e.transB};${e.alpha===1}`}},Iw=(e,t)=>{gy(e.inputs),e.compute(yy(e.inputs,t))}}),sn,En,Vi,Fi,vy,wy,_y,$y,xy,by,Sy,ky,zw,Nw,W$=ae(()=>{"use strict";Ie(),Me(),mt(),Pe(),[sn,En,Vi,Fi]=[0,1,2,3],vy=e=>{if(e[0].dims.length!==4)throw new Error("only 4-D tensor is supported.");if(e[0].dims.length!==e[1].dims.length)throw new Error("input dimensions must be equal to grid dimensions");if(e[0].dims.length-2!==e[1].dims[e[1].dims.length-1])throw new Error(`last dimension of grid must be equal to ${e[0].dims.length-2}`);if(e[0].dims[0]!==e[1].dims[0])throw new Error("grid batch size must match input batch size")},wy=`
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
`,_y=e=>`
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
`,$y=e=>`
  fn gs_denormalize(n: f32, length: i32) -> f32 {
    ${e.alignCorners===0?`
    // alignCorners: false => [-1, 1] to [-0.5, length - 0.5]
    return ((n + 1.0) * f32(length) - 1.0) / 2.0;
    `:`
    // alignCorners: true => [-1, 1] to [0, length - 1]
    return (n + 1.0) / 2.0 * (f32(length - 1));
    `}
  }
`,xy=e=>`
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
`,by=(e,t,i)=>`
  fn pixel_at_grid(r: i32, c: i32, H: i32, W: i32, batch: u32, channel: u32, border: vec4<f32>) -> ${t} {
     var pixel = ${t}(0);
     var indices = vec4<u32>(0);
     indices[${sn}] = batch;
     indices[${En}] = channel;`+(()=>{switch(i.paddingMode){case"zeros":return`
          if (r >= 0 && r < H && c >=0 && c < W) {
            indices[${Vi}] = u32(r);
            indices[${Fi}] = u32(c);
          } else {
            return ${t}(0);
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
`,Sy=(e,t,i)=>(()=>{switch(i.mode){case"nearest":return`
          let result = pixel_at_grid(i32(round(y)), i32(round(x)), H_in, W_in, indices[${sn}], indices[${En}], border);
        `;case"bilinear":return`
          let x1 = i32(floor(x));
          let y1 = i32(floor(y));
          let x2 = x1 + 1;
          let y2 = y1 + 1;

          let p11 = pixel_at_grid(y1, x1, H_in, W_in, indices[${sn}], indices[${En}], border);
          let p12 = pixel_at_grid(y1, x2, H_in, W_in, indices[${sn}], indices[${En}], border);
          let p21 = pixel_at_grid(y2, x1, H_in, W_in, indices[${sn}], indices[${En}], border);
          let p22 = pixel_at_grid(y2, x2, H_in, W_in, indices[${sn}], indices[${En}], border);

          let dx2 = ${t}(f32(x2) - x);
          let dx1 = ${t}(x - f32(x1));
          let dy2 = ${t}(f32(y2) - y);
          let dy1 = ${t}(y - f32(y1));
          let result = dy2 * (dx2 * p11 + dx1 * p12) + dy1 * (dx2 * p21 + dx1 * p22);
        `;case"bicubic":return`
          let x0 = i32(floor(x)) - 1;
          let y0 = i32(floor(y)) - 1;
          var p: mat4x4<${t}>;
          for (var h = 0; h < 4; h++) {
            for (var w = 0; w < 4; w++) {
              p[h][w] = pixel_at_grid(h + y0, w + x0, H_in, W_in, indices[${sn}], indices[${En}], border);
            }
          }

          let dx = x - f32(x0 + 1);
          let dy = y - f32(y0 + 1);
          let result = gs_bicubic_interpolate(p, dx, dy);
        `;default:throw new Error(`mode ${i.mode} is not supported`)}})()+`${e.setByOffset("global_idx","result")}`,ky=(e,t)=>{let i=J("x",e[0].dataType,e[0].dims.length),s=[e[1].dims[0],e[1].dims[1],e[1].dims[2]],o=J("grid",e[1].dataType,s.length,2),u=[e[0].dims[0],e[0].dims[1],e[1].dims[1],e[1].dims[2]];t.format==="NHWC"&&(u=[e[0].dims[0],e[1].dims[1],e[1].dims[2],e[0].dims[3]],[sn,En,Vi,Fi]=[0,3,1,2]);let d=_e("output",e[0].dataType,u.length),c=i.type.value,f=K.size(u),m=[{type:12,data:f},...ke(e[0].dims,s,u)],y=w=>`
  ${w.registerUniform("output_size","u32").declareVariables(i,o,d)}
  ${wy}
  ${_y(c)}
  ${$y(t)}
  ${xy(t)}
  ${by(i,c,t)}

  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let H_in = i32(uniforms.x_shape[${Vi}]);
      let W_in = i32(uniforms.x_shape[${Fi}]);

      ${t.alignCorners===0?`
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
      var grid_indices = vec3<u32>(indices[${sn}], indices[${Vi}], indices[${Fi}]);
      let nxy = ${o.getByIndices("grid_indices")};
      var x = gs_denormalize(f32(nxy[0]), W_in);
      var y = gs_denormalize(f32(nxy[1]), H_in);

      ${Sy(d,c,t)}
  }`;return{name:"GridSample",shaderCache:{hint:`${t.cacheKey}`,inputDependencies:["type","type"]},getRunData:w=>{let $=K.size(u);return{outputs:[{dims:u,dataType:w[0].dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:m}},getShaderSource:y}},zw=(e,t)=>{vy(e.inputs),e.compute(ky(e.inputs,t))},Nw=e=>Ye({alignCorners:e.align_corners,mode:e.mode,paddingMode:e.padding_mode,format:e.format})}),Jt,Ey,Ow,ap,Ty,Uo,Aw,Rw=ae(()=>{"use strict";Ie(),Me(),mt(),tf(),af(),Pe(),mi(),Jt=(e,t)=>e.length>t&&e[t].dims.length>0?e[t]:void 0,Ey=(e,t)=>{let i=e[0],s=Jt(e,1),o=Jt(e,2),u=Jt(e,3),d=Jt(e,4),c=Jt(e,5),f=Jt(e,6),m=Jt(e,7);if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let y=i.dims[0],w=i.dims[1],$=i.dims.length===3?i.dims[2]:t.numHeads*i.dims[4],S=w,b=0,C=0,N=Math.floor($/t.numHeads);if(f&&m&&K.size(f.dims)&&K.size(m.dims)){if(f.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(f.dims[0]!==y||f.dims[1]!==t.numHeads||f.dims[3]!==N)throw new Error('Input "past_key" shape (batch_size, num_heads, past_sequence_length, head_size)');if(m.dims[0]!==y||m.dims[1]!==t.numHeads||m.dims[3]!==N)throw new Error('Input "past_value" shape (batch_size, num_heads, past_sequence_length, head_size)');if(f.dims[2]!==m.dims[2])throw new Error('Input "past_key" and "past_value" shall have same dim 2 (past_sequence_length)');if(m.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');b=f.dims[2],C=f.dims[2]}else if(f&&K.size(f.dims)||m&&K.size(m.dims))throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let k;if(s&&K.size(s.dims)>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(s.dims.length<3||s.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(s.dims.length===3){if(s.dims[2]!==i.dims[2])throw new Error('Input "query" and "key" shall have same dim 2 (hidden_size)');k=2,S=s.dims[1]}else if(s.dims.length===5){if(s.dims[2]!==t.numHeads||s.dims[3]!==2||s.dims[4]!==N)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(o)throw new Error('Expect "value" be none when "key" has packed kv format.');k=5,S=s.dims[1]}else{if(s.dims[1]!==t.numHeads||s.dims[3]!==N)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');k=0,S=s.dims[2]}}else{if(i.dims.length!==5)throw new Error('Input "query" is expected to have 5 dimensions when key is empty');if(i.dims[2]!==t.numHeads||i.dims[3]!==3)throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');k=3}if(u&&K.size(u.dims)>0){if(u.dims.length!==1)throw new Error('Input "bias" is expected to have 1 dimension');if(s&&s.dims.length===5&&s.dims[3]===2)throw new Error("bias is not allowed for packed kv.")}let E=b+S,A=0;if(d&&K.size(d.dims)>0){A=8;let V=d.dims;throw V.length===1?V[0]===y?A=1:V[0]===3*y+2&&(A=3):V.length===2&&V[0]===y&&V[1]===E&&(A=5),A===8?new Error('Input "key_padding_mask" shape shall be (batch_size) or (batch_size, total_sequence_length)'):new Error("Mask not supported")}let D=!1,B=$;if(o&&K.size(o.dims)>0){if(o.dims.length!==3&&o.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==o.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(o.dims.length===3){if(S!==o.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');B=o.dims[2]}else{if(S!==o.dims[2])throw new Error('Input "key" and "value" shall have the same dim 2 (kv_sequence_length)');B=o.dims[1]*o.dims[3],D=!0}}let P=!1;if(d&&K.size(d.dims)>0)throw new Error("Key padding mask is not supported");if(c&&K.size(c.dims)>0){if(c.dims.length!==4)throw new Error('Input "attention_bias" is expected to have 4 dimensions');if(c.dims[0]!==y||c.dims[1]!==t.numHeads||c.dims[2]!==w||c.dims[3]!==E)throw new Error('Expect "attention_bias" shape (batch_size, num_heads, sequence_length, total_sequence_length)')}return{batchSize:y,sequenceLength:w,pastSequenceLength:b,kvSequenceLength:S,totalSequenceLength:E,maxSequenceLength:C,inputHiddenSize:0,hiddenSize:$,vHiddenSize:B,headSize:N,vHeadSize:Math.floor(B/t.numHeads),numHeads:t.numHeads,isUnidirectional:!1,pastPresentShareBuffer:!1,maskFilterValue:t.maskFilterValue,maskType:A,scale:t.scale,broadcastResPosBias:P,passPastInKv:D,qkvFormat:k}},Ow=e=>Ye({...e}),ap=Ye({perm:[0,2,1,3]}),Ty=(e,t,i,s,o,u,d)=>{let c=[s,o,u],f=K.size(c),m=[{type:12,data:f},{type:12,data:d},{type:12,data:u}],y=w=>{let $=_e("qkv_with_bias",t.dataType,c),S=J("qkv",t.dataType,c),b=J("bias",i.dataType,c),C=[{name:"output_size",type:"u32"},{name:"bias_offset",type:"u32"},{name:"hidden_size",type:"u32"}];return`
  ${w.registerUniforms(C).declareVariables(S,b,$)}
  ${w.mainStart()}
    ${w.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
    let bias_offset_idx = (global_idx % uniforms.hidden_size) + uniforms.bias_offset;

    qkv_with_bias[global_idx] = qkv[global_idx] + bias[bias_offset_idx];
  }`};return e.compute({name:"MultiHeadAttentionAddBias",shaderCache:{inputDependencies:["type","type"]},getRunData:()=>({outputs:[{dims:c,dataType:t.dataType,gpuDataType:0}],dispatchGroup:{x:Math.ceil(f/64)},programUniforms:m}),getShaderSource:y},{inputs:[t,i],outputs:[-1]})[0]},Uo=(e,t,i,s,o,u,d,c)=>{let f=u;if(d&&K.size(d.dims)>0){if(s===1)throw new Error("AddBiasReshape is not implemented. Please export your model with packed QKV or KV");return f=Ty(e,u,d,t,s,i*o,c),f=f.reshape([t,s,i,o]),i===1||s===1?f:e.compute(yr(f,ap.perm),{inputs:[f],outputs:[-1]})[0]}else return u.dims.length===3&&(f=u.reshape([t,s,i,o])),i===1||s===1?f:e.compute(yr(f,ap.perm),{inputs:[f],outputs:[-1]})[0]},Aw=(e,t)=>{let i=Ey(e.inputs,t),s=e.inputs[0],o=Jt(e.inputs,1),u=Jt(e.inputs,2),d=Jt(e.inputs,3),c=Jt(e.inputs,4),f=Jt(e.inputs,5),m=Jt(e.inputs,6),y=Jt(e.inputs,7);if(s.dims.length===5)throw new Error("Packed QKV is not implemented");if((o==null?void 0:o.dims.length)===5)throw new Error("Packed KV is not implemented");let w=o&&u&&o.dims.length===4&&u.dims.length===4,$=Uo(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,s,d,0);if(w)return Fo(e,$,o,u,c,void 0,m,y,f,i);if(!o||!u)throw new Error("key and value must be provided");let S=Uo(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.headSize,o,d,i.hiddenSize),b=Uo(e,i.batchSize,i.numHeads,i.kvSequenceLength,i.vHeadSize,u,d,2*i.hiddenSize);Fo(e,$,S,b,c,void 0,m,y,f,i)}}),Cy,Iy,zy,Ny,Mp,Dw,Mw,Bw=ae(()=>{"use strict";Ie(),Me(),mt(),Pe(),Cy=e=>{if(!e||e.length<1)throw new Error("too few inputs")},Iy=(e,t)=>{let i=[],s=t.numOutputs;return e[1].dims[0]>0&&(e[1].getBigInt64Array().forEach(o=>i.push(Number(o))),s=i.length),Ye({numOutputs:s,axis:t.axis,splitSizes:i})},zy=e=>`
fn calculateOutputIndex(index: u32) -> u32 {
    for (var i: u32 = 0u; i < ${e}u; i += 1u ) {
    if (index < ${be("uniforms.size_in_split_axis","i",e)}) {
        return i;
    }
    }
    return ${e}u;
}`,Ny=e=>{let t=e.length,i=[];for(let s=0;s<t;++s){let o=e[s].setByIndices("indices","input[global_idx]");t===1?i.push(o):s===0?i.push(`if (output_number == ${s}u) { ${o} }`):s===t-1?i.push(`else { ${o} }`):i.push(`else if (output_number == ${s}) { ${o} }`)}return`
      fn writeBufferData(output_number: u32, indices: ${e[0].type.indices}, global_idx: u32) {
        ${i.join(`
`)}
      }`},Mp=(e,t)=>{let i=e[0].dims,s=K.size(i),o=e[0].dataType,u=K.normalizeAxis(t.axis,i.length),d=new Array(t.numOutputs),c=J("input",o,i.length),f=new Array(t.numOutputs),m=[],y=[],w=0,$=[{type:12,data:s}];for(let b=0;b<t.numOutputs;b++){w+=t.splitSizes[b],f[b]=w;let C=i.slice();C[u]=t.splitSizes[b],y.push(C),d[b]=_e(`output${b}`,o,C.length),m.push({dims:y[b],dataType:e[0].dataType})}$.push({type:12,data:f},...ke(i,...y));let S=b=>`
  ${b.registerUniform("input_size","u32").registerUniform("size_in_split_axis","u32",f.length).declareVariables(c,...d)}
  ${zy(f.length)}
  ${Ny(d)}

  ${b.mainStart()}
    ${b.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.input_size")}

    var indices = ${c.offsetToIndices("global_idx")};
    var index = ${c.indicesGet("indices",u)};
    let output_number = calculateOutputIndex(index);
    if (output_number != 0) {
      index -= ${be("uniforms.size_in_split_axis","output_number - 1u",f.length)};
      ${c.indicesSet("indices",u,"index")};
    }
    writeBufferData(output_number, indices, global_idx);
  }`;return{name:"Split",shaderCache:{hint:t.cacheKey,inputDependencies:["rank"]},getShaderSource:S,getRunData:()=>({outputs:m,dispatchGroup:{x:Math.ceil(s/64)},programUniforms:$})}},Dw=(e,t)=>{Cy(e.inputs);let i=e.inputs.length===1?t:Iy(e.inputs,t);e.compute(Mp(e.inputs,i),{inputs:[0]})},Mw=e=>{let t=e.axis,i=e.splitSizes,s=e.numOutputs<0?i.length:e.numOutputs;if(s!==i.length)throw new Error("numOutputs and splitSizes length must be equal");return Ye({axis:t,numOutputs:s,splitSizes:i})}}),Oy,Pl,Pw,Lw=ae(()=>{"use strict";Ie(),Me(),mt(),Pe(),Oy=(e,t)=>{let[i,s,o,u]=e,{numHeads:d,rotaryEmbeddingDim:c}=t;if(i.dims.length!==3&&i.dims.length!==4)throw new Error(`Input 'x' is expected to have 3 or 4 dimensions, got ${i.dims.length}`);if(!K.areEqual(s.dims,[])&&!K.areEqual(s.dims,[1])&&s.dims.length!==2)throw new Error(`Input 'position_ids' is expected to have 0, 1, or 2 dimensions, got ${s.dims.length}`);if(o.dims.length!==2)throw new Error(`Input 'cos_cache' is expected to have 2 dimensions, got ${o.dims.length}`);if(u.dims.length!==2)throw new Error(`Input 'sin_cache' is expected to have 2 dimensions, got ${u.dims.length}`);if(!K.areEqual(o.dims,u.dims))throw new Error("Inputs 'cos_cache' and 'sin_cache' are expected to have the same shape");if(c>0&&d===0)throw new Error("num_heads must be provided if rotary_embedding_dim is specified");let f=i.dims[0],m=i.dims[i.dims.length-2],y=o.dims[0],w=K.sizeFromDimension(i.dims,1)/m,$=c===0?o.dims[1]*2:w/d;if(c>$)throw new Error("rotary_embedding_dim must be less than or equal to head_size");if(s.dims.length===2){if(f!==s.dims[0])throw new Error(`Input 'position_ids' dimension 0 should be of size batch_size, got ${s.dims[0]}`);if(m!==s.dims[1])throw new Error(`Input 'position_ids' dimension 1 should be of size sequence_length, got ${s.dims[1]}`)}if(m>y)throw new Error("Updating cos_cache and sin_cache in RotaryEmbedding is not currently supported");if($/2!==o.dims[1]&&c/2!==o.dims[1])throw new Error(`Input 'cos_cache' dimension 1 should be same as head_size / 2 or rotary_embedding_dim / 2, got ${o.dims[1]}`)},Pl=(e,t)=>{let{interleaved:i,numHeads:s,rotaryEmbeddingDim:o,scale:u}=t,d=e[0].dims[0],c=K.sizeFromDimension(e[0].dims,1),f=e[0].dims[e[0].dims.length-2],m=c/f,y=e[2].dims[1],w=o===0?y*2:m/s,$=new Array(d,f,m/w,w-y),S=K.computeStrides($),b=[{type:1,data:u},{type:12,data:$},{type:12,data:S},...e[0].dims.length===3?new Array({type:12,data:[c,m,w,1]}):[],...e[0].dims.length===4?new Array({type:12,data:[c,w,f*w,1]}):[],...ke(e[0].dims,e[1].dims,e[2].dims,e[3].dims,e[0].dims)],C=N=>{let k=J("input",e[0].dataType,e[0].dims.length),E=J("position_ids",e[1].dataType,e[1].dims.length),A=J("cos_cache",e[2].dataType,e[2].dims.length),D=J("sin_cache",e[3].dataType,e[3].dims.length),B=_e("output",e[0].dataType,e[0].dims.length);return N.registerUniforms([{name:"scale",type:"f32"},{name:"global_shape",type:"u32",length:$.length},{name:"global_strides",type:"u32",length:S.length},{name:"input_output_strides",type:"u32",length:S.length}]),`
        ${N.declareVariables(k,E,A,D,B)}

        ${N.mainStart(os)}
          let half_rotary_emb_dim = uniforms.${A.name}_shape[1];
          let bsnh = global_idx / uniforms.global_strides % uniforms.global_shape;
          let size = uniforms.global_shape[0] * uniforms.global_strides[0];
          ${N.guardAgainstOutOfBoundsWorkgroupSizes("size")}

          if (bsnh[3] < half_rotary_emb_dim) {
            let position_ids_idx =
                ${E.broadcastedIndicesToOffset("bsnh.xy",_e("",E.type.tensor,2))};
            let position_id =
                u32(${E.getByOffset("position_ids_idx")}) + select(0, bsnh[1], position_ids_idx == 0);
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
        }`};return{name:"RotaryEmbedding",shaderCache:{hint:Ye({interleaved:i}).cacheKey,inputDependencies:["rank","rank","rank","rank"]},getShaderSource:C,getRunData:()=>({outputs:[{dims:e[0].dims,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size($)/os)},programUniforms:b})}},Pw=(e,t)=>{Oy(e.inputs,t),e.compute(Pl(e.inputs,t))}}),Ay,Ry,sp,Dy,Uw,V$=ae(()=>{"use strict";mt(),Ie(),af(),Rw(),Bw(),mi(),Lw(),Pe(),Ay=(e,t)=>{if(t.doRotary&&e.length<=7)throw new Error("cos_cache and sin_cache inputs are required if do_rotary is specified");let i=e[0],s=e[1],o=e[2],u=e[3],d=e[4];if(t.doRotary!==0&&e.length<=7)throw new Error("cos_cast and sin_cache are expected if do_rotary attribute is non-zero");if(t.localWindowSize!==-1)throw new Error("Local attention is not supported");if(t.softcap!==0)throw new Error("Softcap is not supported");if(t.rotaryInterleaved!==0)throw new Error("Rotary interleaved is not supported");if(t.smoothSoftmax)throw new Error("Smooth softmax is not supported");if(i.dims.length!==3&&i.dims.length!==5)throw new Error("Input query is expected to have 3 or 5 dimensions");let c=!1,f=i.dims[0],m=i.dims[1],y=i.dims.length===3?c?i.dims[2]/3:i.dims[2]:t.numHeads*i.dims[4],w=m,$=0,S=!s||s.dims.length===0,b=Math.floor(S?y/(t.numHeads+2*t.kvNumHeads):y/t.numHeads);S&&(y=b*t.numHeads);let C=u&&u.dims.length!==0,N=d&&d.dims.length!==0;if(C&&u.dims.length===4&&u.dims[0]===f&&u.dims[1]!==t.kvNumHeads&&u.dims[2]===t.kvNumHeads&&u.dims[3]===b)throw new Error("BSNH pastKey/pastValue is not supported");if(C&&N){if(u.dims.length!==4)throw new Error('Input "past_key" is expected to have 4 dimensions');if(d.dims.length!==4)throw new Error('Input "past_value" is expected to have 4 dimensions');$=u.dims[2]}else if(C||N)throw new Error('Input "past_key" and "past_value" shall be both present or both absent');let k=1;if(s&&s.dims.length>0){if(i.dims.length!==3)throw new Error('Input "query" is expected to have 3 dimensions when key is given');if(s.dims.length<3||s.dims.length>5)throw new Error('Input "key" is expected to have 3, 4, or 5 dimensions');if(i.dims[0]!==s.dims[0])throw new Error('Input "query" and "key" shall have same dim 0 (batch size)');if(s.dims.length===3){if(i.dims[2]%s.dims[2]!==0)throw new Error('Dimension 2 of "query" should be a multiple of "key"');w=s.dims[1]}else if(s.dims.length===5){if(s.dims[2]!==t.numHeads||s.dims[3]!==2||s.dims[4]!==b)throw new Error('Expect "key" shape (batch_size, kv_sequence_length, num_heads, 2, head_size) for packed kv');if(o)throw new Error('Expect "value" be none when "key" has packed kv format.');w=s.dims[1]}else{if(s.dims[1]!==t.numHeads||s.dims[3]!==b)throw new Error('Expect "key" shape (batch_size, num_heads, kv_sequence_length, head_size) for past_key');w=s.dims[2]}}else{if(i.dims.length!==3&&i.dims.length!==5)throw new Error('Input "query" is expected to have 3 or 5 dimensions when key is empty');if(i.dims.length===5&&(i.dims[2]!==t.numHeads||i.dims[3]!==3))throw new Error('Expect "query" shape (batch_size, kv_sequence_length, num_heads, 3, head_size) for packed kv');k=3}let E=0,A=!1,D=t.kvNumHeads?b*t.kvNumHeads:y;if(o&&o.dims.length>0){if(o.dims.length!==3&&o.dims.length!==4)throw new Error('Input "value" is expected to have 3 or 4 dimensions');if(i.dims[0]!==o.dims[0])throw new Error('Input "query" and "value" shall have same dim 0 (batch_size)');if(o.dims.length===3){if(w!==o.dims[1])throw new Error('Input "key" and "value" shall have the same dim 1 (kv_sequence_length)');D=o.dims[2]}else{if(w!==o.dims[2])throw new Error('Input "past_key" and "past_value" shall have the same dim 2 (kv_sequence_length)');D=o.dims[1]*o.dims[3],A=!0}}let B=e.length>4?e[5]:void 0;if(B){if(B.dims.length===0)throw new Error("seqlens_k must be at least 1D, got scalar.");let P=B.dims.reduce((V,I)=>V*I,1);if(P!==f)throw new Error(`seqlens_k must have batch_size (${f}) elements, got ${P}.`);for(let V=0;V<B.dims.length;V++)if(B.dims[V]!==1&&B.dims[V]!==f)throw new Error(`seqlens_k has unexpected shape. Each dimension must be 1 or batch_size (${f}), got dims[${V}] = ${B.dims[V]}.`)}return{batchSize:f,sequenceLength:m,pastSequenceLength:$,kvSequenceLength:w,totalSequenceLength:-1,maxSequenceLength:-1,inputHiddenSize:0,hiddenSize:y,vHiddenSize:D,headSize:b,vHeadSize:Math.floor(D/t.kvNumHeads),numHeads:t.numHeads,kvNumHeads:t.kvNumHeads,nReps:t.numHeads/t.kvNumHeads,pastPresentShareBuffer:!1,maskType:E,scale:t.scale,broadcastResPosBias:!1,passPastInKv:A,qkvFormat:k}},Ry=Ye({perm:[0,2,1,3]}),sp=(e,t,i)=>{let s=t,o=i.kvNumHeads;return t.dims.length===3&&i.kvSequenceLength!==0&&(s=t.reshape([i.batchSize,i.kvSequenceLength,o,i.headSize]),s=e.compute(yr(s,Ry.perm),{inputs:[s],outputs:[-1]})[0]),s},Dy=(e,t,i,s)=>{let o=7,u=["type","type"],d=[e*t],c=e*t,f=[{type:12,data:c},{type:12,data:t},{type:12,data:e}],m=y=>{let w=J("seq_lens",i.dataType,i.dims),$=J("total_seq_lens",s.dataType,s.dims),S=_e("pos_ids",o,d),b=[{name:"output_size",type:"u32"},{name:"sequence_length",type:"u32"},{name:"batch_size",type:"u32"}];return`
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
  `};return{name:"GeneratePositionIds",shaderCache:{hint:`${e};${t}`,inputDependencies:u},getRunData:()=>({outputs:[{dims:d,dataType:o}],dispatchGroup:{x:Math.ceil(c/64)},programUniforms:f}),getShaderSource:m}},Uw=(e,t)=>{var D;if(e.inputs.length>14&&e.inputs[14]||e.inputs.length>15&&e.inputs[15])throw new Error("GroupQueryAttention (JSEP): q_norm_weight / k_norm_weight inputs are not supported. The per-head Q/K RMS normalization prologue is implemented only on the CUDA and native WebGPU EPs.");let i=Ay(e.inputs,t);if(e.inputs[0].dims.length===5)throw new Error("Packed QKV is not implemented");if(((D=e.inputs[1])==null?void 0:D.dims.length)===5)throw new Error("Packed KV is not implemented");let s=e.inputs[0],o=e.inputs[1]&&e.inputs[1].dims.length>0?e.inputs[1]:void 0,u=e.inputs[2]&&e.inputs[2].dims.length>0?e.inputs[2]:void 0,d=e.inputs[3]&&e.inputs[3].dims.length!==0?e.inputs[3]:void 0,c=e.inputs[4]&&e.inputs[4].dims.length!==0?e.inputs[4]:void 0,f=e.inputs.length>4?e.inputs[5]:void 0,m=e.inputs.length>5?e.inputs[6]:void 0,y=i.kvNumHeads?i.kvNumHeads:i.numHeads,w=Ye({axis:2,numOutputs:3,splitSizes:[i.numHeads*i.headSize,y*i.headSize,y*i.headSize]}),[$,S,b]=!o&&!u?e.compute(Mp([s],w),{inputs:[s],outputs:[-1,-1,-1]}):[s,o,u],C,N;if(t.doRotary){let B=e.compute(Dy(i.batchSize,i.sequenceLength,f,m),{inputs:[f,m],outputs:[-1]})[0],P=e.inputs[7],V=e.inputs[8],I=Ye({interleaved:t.rotaryInterleaved!==0,numHeads:i.numHeads,rotaryEmbeddingDim:0,scale:t.scale}),Y=[$,B,P,V],te=[-1];C=e.compute(Pl(Y,I),{inputs:Y,outputs:te})[0],Y.splice(0,1,S);let he=Ye({interleaved:t.rotaryInterleaved!==0,numHeads:i.kvNumHeads,rotaryEmbeddingDim:0,scale:t.scale});N=e.compute(Pl(Y,he),{inputs:Y,outputs:te})[0]}let k=Uo(e,i.batchSize,i.numHeads,i.sequenceLength,i.headSize,t.doRotary?C:$,void 0,0),E=sp(e,t.doRotary?N:S,i),A=sp(e,b,i);Fo(e,k,E,A,void 0,void 0,d,c,void 0,i,f,m)}}),op,My,By,jw,F$=ae(()=>{"use strict";Ie(),Me(),mi(),Pe(),op=(e,t,i,s,o,u,d,c)=>{let f=ht(u),m=f===1?"f32":`vec${f}f`,y=f===1?"vec2f":`mat2x${f}f`,w=o*d,$=64;w===1&&($=256);let S=[o,d,u/f],b=[o,d,2],C=["rank","type","type"],N=[];N.push(...ke(S,b));let k=E=>{let A=J("x",t.dataType,3,f),D=J("scale",i.dataType,i.dims),B=J("bias",s.dataType,s.dims),P=_e("output",1,3,2),V=[A,D,B,P];return`
  var<workgroup> workgroup_shared : array<${y}, ${$}>;
  const workgroup_size = ${$}u;
  ${E.declareVariables(...V)}
  ${E.mainStart($)}
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
      let sum_final = ${hi("workgroup_shared[0][0]",f)} / f32(hight * ${f});
      let squared_sum_final = ${hi("workgroup_shared[0][1]",f)} / f32(hight * ${f});

      let inv_std_dev = inverseSqrt(squared_sum_final - sum_final * sum_final + f32(${c}));
      let channel_scale = inv_std_dev * f32(scale[channel]);
      let channel_shift = f32(bias[channel]) - sum_final * channel_scale;
      output[workgroup_index] = vec2f(channel_scale, channel_shift);
    }
  }`};return e.compute({name:"InstanceNormComputeChannelScaleShift",shaderCache:{hint:`${f};${c};${$}`,inputDependencies:C},getRunData:()=>({outputs:[{dims:b,dataType:1}],dispatchGroup:{x:w},programUniforms:N}),getShaderSource:k},{inputs:[t,i,s],outputs:[-1]})[0]},My=(e,t,i)=>{let s=t[0].dims,o=s,u=2,d=s[0],c=s[1],f=K.sizeFromDimension(s,u),m=ht(f),y=K.size(o)/m,w=op(e,t[0],t[1],t[2],d,f,c,i.epsilon),$=[d,c,f/m],S=[d,c],b=["type","none"],C=N=>{let k=J("x",t[0].dataType,$.length,m),E=J("scale_shift",1,S.length,2),A=_e("output",t[0].dataType,$.length,m),D=[k,E,A];return`
  ${N.registerUniform("output_size","u32").declareVariables(...D)}
  ${N.mainStart()}
  ${N.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
      let outputIndices = ${A.offsetToIndices("global_idx")};
      let batch = outputIndices[0];
      let channel = outputIndices[1];
      let scale_shift = ${E.getByIndices("vec2<u32>(batch, channel)")};
      let value = ${k.getByOffset("global_idx")} * ${A.type.value}(scale_shift.x) + ${A.type.value}(scale_shift.y);
      ${A.setByOffset("global_idx","value")};
  }`};e.compute({name:"InstanceNormalization",shaderCache:{hint:`${m}`,inputDependencies:b},getRunData:()=>({outputs:[{dims:o,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(y/64)},programUniforms:[{type:12,data:y},...ke($,S,$)]}),getShaderSource:C},{inputs:[t[0],w]})},By=(e,t,i)=>{let s=t[0].dims,o=s,u=s[0],d=s[s.length-1],c=K.sizeFromDimension(s,1)/d,f=ht(d),m=K.size(o)/f,y=[{type:12,data:c},{type:12,data:Math.floor(d/f)}],w=["type","type"],$=!1,S=[0,s.length-1];for(let k=0;k<s.length-2;k++)$=$||s[k+1]!==1,S.push(k+1);$=$&&s[s.length-1]!==1;let b=$?e.compute(yr(e.inputs[0],S),{inputs:[e.inputs[0]],outputs:[-1]})[0]:e.inputs[0].reshape(Array.from({length:s.length},(k,E)=>s[S[E]])),C=op(e,b,t[1],t[2],u,c,d,i.epsilon),N=k=>{let E=Ct(t[0].dataType),A=f===1?"vec2f":`mat${f}x2f`,D=V=>{let I=V===0?"x":"y",Y=f===1?"f32":`vec${f}f`;switch(f){case 1:return`${E}(${Y}(scale.${I}))`;case 2:return`vec2<${E}>(${Y}(scale[0].${I}, scale[1].${I}))`;case 4:return`vec4<${E}>(${Y}(scale[0].${I}, scale[1].${I}, scale[2].${I}, scale[3].${I}))`;default:throw new Error(`Not supported compoents ${f}`)}},B=J("input",t[0].dataType,t[0].dims,f),P=_e("output",t[0].dataType,o,f);return`
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
  }`};e.compute({name:"InstanceNormalizationNHWC",shaderCache:{hint:`${f}`,inputDependencies:w},getRunData:()=>({outputs:[{dims:o,dataType:t[0].dataType}],dispatchGroup:{x:Math.ceil(m/64)},programUniforms:y}),getShaderSource:N},{inputs:[t[0],C]})},jw=(e,t)=>{t.format==="NHWC"?By(e,e.inputs,t):My(e,e.inputs,t)}}),Py,Ly,Ww,q$=ae(()=>{"use strict";Ie(),Me(),Pe(),Py=e=>{if(!e||e.length<2)throw new Error("layerNorm requires at least 2 inputs.")},Ly=(e,t,i)=>{let s=t.simplified,o=e[0].dims,u=e[1],d=!s&&e[2],c=o,f=K.normalizeAxis(t.axis,o.length),m=K.sizeToDimension(o,f),y=K.sizeFromDimension(o,f),w=K.size(u.dims),$=d?K.size(d.dims):0;if(w!==y||d&&$!==y)throw new Error(`Size of X.shape()[axis:] == ${y}.
       Size of scale and bias (if provided) must match this.
       Got scale size of ${w} and bias size of ${$}`);let S=[];for(let B=0;B<o.length;++B)B<f?S.push(o[B]):S.push(1);let b=ht(y),C=["type","type"],N=[{type:12,data:m},{type:1,data:y},{type:12,data:Math.floor(y/b)},{type:1,data:t.epsilon}];d&&C.push("type");let k=i>1,E=i>2,A=B=>{let P=Ct(e[0].dataType),V=[J("x",e[0].dataType,e[0].dims,b),J("scale",u.dataType,u.dims,b)];d&&V.push(J("bias",d.dataType,d.dims,b)),V.push(_e("output",e[0].dataType,c,b)),k&&V.push(_e("mean_data_output",1,S)),E&&V.push(_e("inv_std_output",1,S));let I=[{name:"norm_count",type:"u32"},{name:"norm_size",type:"f32"},{name:"norm_size_vectorized",type:"u32"},{name:"epsilon",type:"f32"}];return`
  ${B.registerUniforms(I).declareVariables(...V)}
  ${B.mainStart()}
    ${B.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.norm_count")}
    let offset = global_idx * uniforms.norm_size_vectorized;
    var mean_vector = ${Tp("f32",b)};
    var mean_square_vector = ${Tp("f32",b)};

    for (var h: u32 = 0u; h < uniforms.norm_size_vectorized; h++) {
      let value = ${as(P,b,"x[h + offset]")};
      mean_vector += value;
      mean_square_vector += value * value;
    }
    let mean = ${hi("mean_vector",b)} / uniforms.norm_size;
    let inv_std_dev = inverseSqrt(${hi("mean_square_vector",b)} / uniforms.norm_size ${s?"":"- mean * mean"} + uniforms.epsilon);

    for (var j: u32 = 0; j < uniforms.norm_size_vectorized; j++) {
      let f32input = ${as(P,b,"x[j + offset]")};
      let f32scale = ${as(P,b,"scale[j]")};
      output[j + offset] = ${V[0].type.value}((f32input ${s?"":"- mean"}) * inv_std_dev * f32scale
        ${d?`+ ${as(P,b,"bias[j]")}`:""}
      );
    }

    ${k?"mean_data_output[global_idx] = mean":""};
    ${E?"inv_std_output[global_idx] = inv_std_dev":""};
  }`},D=[{dims:c,dataType:e[0].dataType}];return k&&D.push({dims:S,dataType:1}),E&&D.push({dims:S,dataType:1}),{name:"LayerNormalization",shaderCache:{hint:`${b};${i};${s}`,inputDependencies:C},getRunData:()=>({outputs:D,dispatchGroup:{x:Math.ceil(m/64)},programUniforms:N}),getShaderSource:A}},Ww=(e,t)=>{Py(e.inputs),e.compute(Ly(e.inputs,t,e.outputCount))}}),Uy,Vw,H$=ae(()=>{"use strict";Me(),df(),cf(),Uy=e=>{if(!e||e.length!==2)throw new Error("MatMul requires 2 inputs.");if(e[0].dims[e[0].dims.length-1]!==e[1].dims[e[1].dims.length-2])throw new Error("shared dimension does not match.")},Vw=e=>{Uy(e.inputs);let t=ss.calcShape(e.inputs[0].dims,e.inputs[1].dims,!0);if(!t)throw new Error("Can't use matmul on the given tensors");let i=t[t.length-1],s=e.inputs[0].dims[e.inputs[0].dims.length-1];if(i<8&&s<8)e.compute(lf(e.inputs,{activation:""},t));else{let o=t[t.length-2],u=K.size(e.inputs[0].dims.slice(0,-2)),d=K.size(e.inputs[1].dims.slice(0,-2));if(u!==1&&o===1&&d===1){let c=e.inputs[0].reshape([1,u,s]),f=e.inputs[1].reshape([1,s,i]),m=[1,u,i],y=[c,f];e.compute(Bl(y,{activation:""},t,m),{inputs:y})}else e.compute(Bl(e.inputs,{activation:""},t))}}}),jy,Wy,Vy,Fw,qw,G$=ae(()=>{"use strict";Ie(),Me(),mt(),Pe(),jy=(e,t)=>{if(e.length<3||e.length>4)throw new Error("MatMulNBits requires 3 or 4 inputs");let i=e[0],s=i.dims.length;if(i.dims[s-1]!==t.k)throw new Error("The last dim of input shape does not match the k value");let o=Math.floor((t.k+t.blockSize-1)/t.blockSize),u=t.blockSize/8*t.bits,d=e[1];if(!K.areEqual(d.dims,[t.n,o,u]))throw new Error("The second inputs must be 3D tensor with shape N X nBlocksPerCol X blobSize");let c=e[2].dims;if(K.size(c)!==t.n*o)throw new Error("scales input size error.");if(e.length===4){let f=e[3].dims,m=t.n*(t.bits===8?o:Math.floor((o*t.bits+7)/8));if(K.size(f)!==m)throw new Error("zeroPoints input size error.")}},Wy=(e,t)=>{let i=e[0].dims,s=i.length,o=i[s-2],u=t.k,d=t.n,c=i.slice(0,s-2),f=K.size(c),m=e[1].dims[2]/4,y=e[0].dataType,w=ht(t.k),$=ht(m),S=ht(d),b=c.concat([o,d]),C=o>1&&d/S%2===0?2:1,N=K.size(b)/S/C,k=64,E=[],A=[f,o,u/w],D=K.convertShape(e[1].dims).slice();D.splice(-1,1,m/$),E.push(...ke(A)),E.push(...ke(D)),E.push(...ke(e[2].dims)),e.length===4&&E.push(...ke(K.convertShape(e[3].dims)));let B=[f,o,d/S];E.push(...ke(B));let P=V=>{let I=A.length,Y=J("a",e[0].dataType,I,w),te=J("b",12,D.length,$),he=J("scales",e[2].dataType,e[2].dims.length),ce=[Y,te,he],pe=e.length===4?J("zero_points",12,e[3].dims.length):void 0;pe&&ce.push(pe);let G=B.length,me=_e("output",e[0].dataType,G,S),ye=Ct(e[0].dataType),ge=(()=>{switch(w){case 1:return`array<${ye}, 8>`;case 2:return`mat4x2<${ye}>`;case 4:return`mat2x4<${ye}>`;default:throw new Error(`${w}-component is not supported.`)}})(),ee=Math.floor(32/t.bits),re=Math.floor(ee/8),se=()=>{let ne="";for(let X=0;X<re;X++){let ve=X*t.bits*4,$e=ve+t.bits;ne+=`
          // reuse a data (pass ${X})
            var input_offset${X>0?X:""} = ${X===0?Y.indicesToOffset(`${Y.type.indices}(batch, row, word_offset)`):"input_offset"};
            var a_data${X>0?X:""}: ${ge};
            for (var j${X>0?X:""}: u32 = 0; j${X>0?X:""} < ${8/w}; j${X>0?X:""}++) {
              a_data${X>0?X:""}[j${X>0?X:""}] = ${Y.getByOffset(`input_offset${X>0?X:""}`)};
              input_offset${X>0?X:""}++;
            }
          `;for(let Te=0;Te<S*C;Te++)ne+=`
            b_value = ${$===1?`b${Te}_data`:`b${Te}_data[i]`};
            ${t.bits===2?`{
              let half_word = b_value >> ${X*16}u;
              let byte_lo = half_word & 0xFFu;
              let byte_hi = (half_word >> 8u) & 0xFFu;
              let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
              b_value_lower = unpack4xU8(spread_word & b_mask);
              b_value_upper = unpack4xU8((spread_word >> 2u) & b_mask);
            }`:`b_value_lower = unpack4xU8((b_value >> ${ve}u) & b_mask);
            b_value_upper = unpack4xU8((b_value >> ${$e}u) & b_mask);`}
            b_quantized_values = ${ge}(${Array.from({length:4},(Re,Ae)=>`${ye}(b_value_lower[${Ae}]), ${ye}(b_value_upper[${Ae}])`).join(", ")});
            b_dequantized_values = ${w===1?`${ge}(${Array.from({length:8},(Re,Ae)=>`(b_quantized_values[${Ae}] - ${pe?`zero_point${Te}`:"zero_point"}) * scale${Te}`).join(", ")});`:`(b_quantized_values - ${ge}(${Array(8).fill(`${pe?`zero_point${Te}`:"zero_point"}`).join(",")})) * scale${Te};`};
            workgroup_shared[local_id.x * ${C} + ${Math.floor(Te/S)}]${S>1?`[${Te%S}]`:""} += ${Array.from({length:8/w},(Re,Ae)=>`${w===1?`a_data${X>0?X:""}[${Ae}] * b_dequantized_values[${Ae}]`:`dot(a_data${X>0?X:""}[${Ae}], b_dequantized_values[${Ae}])`}`).join(" + ")};
          `}return ne},O=()=>{let ne=`
            var col_index = col * ${S};
            ${pe?`
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (nBlocksPerCol + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            var zero_point_byte_count: u32;
            var zero_point_word_index: u32;
            var zero_point_byte_offset: u32;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            var zero_point_bits_offset: u32;
            var zero_point_word: u32;`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${ye}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            `;for(let X=0;X<S*C;X++)ne+=`
            let scale${X} = ${he.getByOffset("col_index * nBlocksPerCol + block")};
            ${pe?`
            zero_point_byte_count = col_index * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            zero_point_word_index = zero_point_byte_count >> 0x2u;
            zero_point_byte_offset = zero_point_byte_count & 0x3u;
            zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            zero_point_word = ${pe.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point${X} = ${ye}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:""}
            col_index += 1;`;return ne},F=()=>{let ne=`col_index = col * ${S};`;for(let X=0;X<S*C;X++)ne+=`
            let b${X}_data = ${te.getByIndices(`${te.type.indices}(col_index, block, word)`)};
            col_index += 1;`;return ne+=`
            var b_value: u32;
            let b_mask: u32 = ${t.bits===2?"0x03030303u":"0x0F0F0F0Fu"};
            var b_value_lower: vec4<u32>;
            var b_value_upper: vec4<u32>;
            var b_quantized_values: ${ge};
            var b_dequantized_values: ${ge};`,ne};return`
        var<workgroup> workgroup_shared: array<${me.type.value}, ${C*k}>;
        ${V.declareVariables(...ce,me)}
        ${V.mainStart([k,1,1])}
          let output_indices = ${me.offsetToIndices(`(global_idx / ${k}) * ${C}`)};
          let col = output_indices[2];
          let row = output_indices[1];
          let batch = output_indices[0];
          let nBlocksPerCol = uniforms.b_shape[1];

          for (var block = local_id.x; block < nBlocksPerCol; block += ${k}) {
            //process one block
            var word_offset: u32 = block * ${t.blockSize/w};
            ${O()}
            for (var word: u32 = 0; word < ${m}; word += ${$}) {
              ${F()}
              for (var i: u32 = 0; i < ${$}; i++) {
                ${se()}
                word_offset += ${ee/w};
              }
            }
          }
          workgroupBarrier();

          if (local_id.x < ${C}) {
            var output_value: ${me.type.value} = ${me.type.value}(0);
            var workgroup_shared_offset: u32 = local_id.x;
            for (var b: u32 = 0u; b < ${k}u; b++) {
              output_value += workgroup_shared[workgroup_shared_offset];
              workgroup_shared_offset += ${C};
            }
            ${me.setByIndices(`${me.type.indices}(batch, row, col + local_id.x)`,"output_value")};
          }
        }`};return{name:"MatMulNBits",shaderCache:{hint:`${t.blockSize};${t.bits};${w};${$};${S};${C};${k}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:b,dataType:y}],dispatchGroup:{x:N},programUniforms:E}),getShaderSource:P}},Vy=(e,t)=>{let i=e[0].dims,s=i.length,o=i[s-2],u=t.k,d=t.n,c=i.slice(0,s-2),f=K.size(c),m=e[1].dims[2]/4,y=e[0].dataType,w=ht(t.k),$=ht(m),S=c.concat([o,d]),b=128,C=d%8===0?8:d%4===0?4:1,N=b/C,k=Math.floor(32/t.bits),E=N*$*k,A=E/w,D=E/t.blockSize,B=K.size(S)/C,P=[],V=[f,o,u/w],I=K.convertShape(e[1].dims).slice();I.splice(-1,1,m/$),P.push(...ke(V)),P.push(...ke(I)),P.push(...ke(e[2].dims)),e.length===4&&P.push(...ke(K.convertShape(e[3].dims)));let Y=[f,o,d];P.push(...ke(Y));let te=he=>{let ce=V.length,pe=J("a",e[0].dataType,ce,w),G=J("b",12,I.length,$),me=J("scales",e[2].dataType,e[2].dims.length),ye=[pe,G,me],ge=e.length===4?J("zero_points",12,e[3].dims.length):void 0;ge&&ye.push(ge);let ee=Y.length,re=_e("output",e[0].dataType,ee),se=Ct(e[0].dataType),O=()=>{switch(w){case 1:return`
          let a_data0 = vec4<${se}>(sub_a[word_offset], sub_a[word_offset + 1], sub_a[word_offset + 2], sub_a[word_offset + 3]);
          let a_data1 = vec4<${se}>(sub_a[word_offset + 4], sub_a[word_offset + 5], sub_a[word_offset + 6], sub_a[word_offset + 7]);`;case 2:return`
          let a_data0 = vec4<${se}>(sub_a[word_offset], sub_a[word_offset + 1]);
          let a_data1 = vec4<${se}>(sub_a[word_offset + 2], sub_a[word_offset + 3]);`;case 4:return`
          let a_data0 = sub_a[word_offset];
          let a_data1 = sub_a[word_offset + 1];`;default:throw new Error(`${w}-component is not supported.`)}};return`
        var<workgroup> sub_a: array<${pe.type.value}, ${A}>;
        var<workgroup> inter_results: array<array<${re.type.value}, ${N}>, ${C}>;
        ${he.declareVariables(...ye,re)}
        ${he.mainStart([N,C,1])}
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
            let zero_point_values_per_byte: u32 = ${Math.floor(8/t.bits)}u;
            let zero_point_bytes_per_col = (n_blocks_per_col + zero_point_values_per_byte - 1u) / zero_point_values_per_byte;
            let zero_point_byte_count = b_row * zero_point_bytes_per_col + (block / zero_point_values_per_byte);
            let zero_point_word_index = zero_point_byte_count >> 0x2u;
            let zero_point_byte_offset = zero_point_byte_count & 0x3u;
            let zero_point_sub_offset: u32 = block % zero_point_values_per_byte;
            let zero_point_bits_offset = (zero_point_byte_offset << 3) + (zero_point_sub_offset * ${t.bits}u);
            let zero_point_word = ${ge.getByOffset("zero_point_word_index")} >> zero_point_bits_offset;
            let zero_point = ${se}((zero_point_word) & ${t.bits===2?"0x3u":"0xFu"});`:`
            // The default zero point is ${Math.pow(2,t.bits-1)} for unsigned ${t.bits}-bit quantization.
            let zero_point = ${se}(${Math.pow(2,t.bits-1).toFixed(1)});`}
            let scale = ${me.getByOffset("b_row * n_blocks_per_col + block")};
            let b_data = ${G.getByIndices(`${G.type.indices}(b_row, block, 0)`)};
            var word_offset = local_id.x * ${t.blockSize/w};
            for (var i: u32 = 0; i < ${$}; i++) {
              let b_value = ${$===1?"b_data":"b_data[i]"};
              ${(()=>{let F=Math.floor(k/8),ne="";for(let X=0;X<F;X++){let ve=X*t.bits*4,$e=ve+t.bits;ne+=`
              ${O()}
              {${t.bits===2?`
                let half_word = b_value >> ${X*16}u;
                let byte_lo = half_word & 0xFFu;
                let byte_hi = (half_word >> 8u) & 0xFFu;
                let spread_word = (byte_lo & 0xFu) | ((byte_lo >> 4u) << 8u) | ((byte_hi & 0xFu) << 16u) | ((byte_hi >> 4u) << 24u);
                let b_value_lower = unpack4xU8(spread_word & 0x03030303u);
                let b_value_upper = unpack4xU8((spread_word >> 2u) & 0x03030303u);`:`
                let b_value_lower = unpack4xU8((b_value >> ${ve}u) & 0x0F0F0F0Fu);
                let b_value_upper = unpack4xU8((b_value >> ${$e}u) & 0x0F0F0F0Fu);`}
                let b_quantized_values = mat2x4<${se}>(${Array.from({length:4},(Te,Re)=>`${se}(b_value_lower[${Re}]), ${se}(b_value_upper[${Re}])`).join(", ")});
                let b_dequantized_values = (b_quantized_values - mat2x4<${se}>(${Array(8).fill("zero_point").join(",")})) * scale;
                inter_results[local_id.y][local_id.x] += ${Array.from({length:2},(Te,Re)=>`${`dot(a_data${Re}, b_dequantized_values[${Re}])`}`).join(" + ")};
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
        }`};return{name:"BlockwiseMatMulNBits32",shaderCache:{hint:`${t.blockSize};${w};${$};${N};${C}`,inputDependencies:Array(e.length).fill("rank")},getRunData:()=>({outputs:[{dims:S,dataType:y}],dispatchGroup:{x:B},programUniforms:P}),getShaderSource:te}},Fw=(e,t)=>{jy(e.inputs,t),t.blockSize===32&&e.adapterInfo.isVendor("intel")&&e.adapterInfo.isArchitecture("gen-12lp")?e.compute(Vy(e.inputs,t)):e.compute(Wy(e.inputs,t))},qw=e=>Ye(e)}),Fy,qy,Hy,Gy,Ky,Qy,Zy,Yy,Hw,K$=ae(()=>{"use strict";Ie(),Me(),Pe(),Fy=e=>{if(!e||e.length<1)throw new Error("Too few inputs");if(e[0].dataType!==1&&e[0].dataType!==10)throw new Error("Input type must be float or float16.");if(e.length>=2){let t=e[0].dims.length*2===e[1].dims[0];if(e.length===4&&(t=e[3].dims[0]*2===e[1].dims[0]),!t)throw new Error("The pads should be a 1D tensor of shape [2 * input_rank] or [2 * num_axes].")}},qy=(e,t,i)=>{let s="";for(let o=t-1;o>=0;--o)s+=`
            k = i32(${e.indicesGet("indices",o)}) - ${be("uniforms.pads",o,i)};
            if (k < 0) {
              break;
            }
            if (k >= i32(${be("uniforms.x_shape",o,t)})) {
              break;
            }
            offset += k * i32(${be("uniforms.x_strides",o,t)});
        `;return`
          value = ${e.type.value}(uniforms.constant_value);
          for (var i = 0; i < 1; i++) {
            var offset = 0;
            var k = 0;
            ${s}
            value = x[offset];
          }
      `},Hy=(e,t,i)=>{let s="";for(let o=t-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${be("uniforms.pads",o,i)};
                if (k < 0) {
                  k = -k;
                }
                {
                  let _2n_1 = 2 * (i32(${be("uniforms.x_shape",o,t)}) - 1);
                  k = k % _2n_1;
                  if(k >= i32(${be("uniforms.x_shape",o,t)})) {
                    k = _2n_1 - k;
                  }
                }
                offset += k * i32(${be("uniforms.x_strides",o,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},Gy=(e,t,i)=>{let s="";for(let o=t-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${be("uniforms.pads",o,i)};
                if (k < 0) {
                  k = 0;
                }
                if (k >= i32(${be("uniforms.x_shape",o,t)})) {
                  k = i32(${be("uniforms.x_shape",o,t)}) - 1;
                }
                offset += k * i32(${be("uniforms.x_strides",o,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},Ky=(e,t,i)=>{let s="";for(let o=t-1;o>=0;--o)s+=`
                k = i32(${e.indicesGet("indices",o)}) - ${be("uniforms.pads",o,i)};
                if (k < 0)  {
                  k += i32(${be("uniforms.x_shape",o,t)}]);
                }
                if (k >= i32(${be("uniforms.x_shape",o,t)})) {
                  k -= i32(${be("uniforms.x_shape",o,t)});
                }
                offset += k * i32(${be("uniforms.x_strides",o,t)});
            `;return`
              var offset = 0;
              var k = 0;
              ${s}
              value = x[offset];
          `},Qy=(e,t,i)=>{switch(i.mode){case 0:return qy(e,t,i.pads.length);case 1:return Hy(e,t,i.pads.length);case 2:return Gy(e,t,i.pads.length);case 3:return Ky(e,t,i.pads.length);default:throw new Error("Invalid mode")}},Zy=(e,t)=>{let i=K.padShape(e[0].dims.slice(),t.pads),s=e[0].dims,o=K.size(i),u=[{type:12,data:o},{type:6,data:t.pads}],d=e.length>=3&&e[2].data;t.mode===0&&u.push({type:d?e[2].dataType:1,data:t.value}),u.push(...ke(e[0].dims,i));let c=["rank"],f=m=>{let y=_e("output",e[0].dataType,i.length),w=J("x",e[0].dataType,s.length),$=w.type.value,S=Qy(y,s.length,t),b=[{name:"output_size",type:"u32"},{name:"pads",type:"i32",length:t.pads.length}];return t.mode===0&&b.push({name:"constant_value",type:d?$:"f32"}),`
            ${m.registerUniforms(b).declareVariables(w,y)}
            ${m.mainStart()}
            ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}

            let indices = ${y.offsetToIndices("global_idx")};

            var value = ${$}(0);
            ${S}
            output[global_idx] = value;
        }`};return{name:"Pad",shaderCache:{hint:`${t.mode}${d}`,inputDependencies:c},getRunData:()=>({outputs:[{dims:i,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(K.size(i)/64)},programUniforms:u}),getShaderSource:f}},Yy=(e,t)=>{if(e.length>1){let i=e[1].getBigInt64Array(),s=e.length>=3&&e[2].data?e[2].dataType===10?e[2].getUint16Array()[0]:e[2].getFloat32Array()[0]:0,o=e[0].dims.length,u=new Int32Array(2*o).fill(0);if(e.length>=4){let c=e[3].getBigInt64Array();for(let f=0;f<c.length;f++)u[Number(c[f])]=Number(i[f]),u[Number(c[f])+o]=Number(i[f+c.length])}else i.forEach((c,f)=>u[Number(f)]=Number(c));let d=[];return u.forEach(c=>d.push(c)),{mode:t.mode,value:s,pads:d}}else return t},Hw=(e,t)=>{Fy(e.inputs);let i=Yy(e.inputs,t);e.compute(Zy(e.inputs,i),{inputs:[0]})}}),Ao,up,lp,dp,cp,Xy,Jy,pp,fp,Gw,Kw,hp,Qw,Zw,mp,Yw,Xw,Jw,e_,Q$=ae(()=>{"use strict";vr(),Ie(),Me(),Pe(),Ao=e=>{if(dt.webgpu.validateInputContent&&(!e||e.length!==1))throw new Error("Pool ops requires 1 input.")},up=(e,t,i)=>{let s=t.format==="NHWC",o=e.dims.slice();s&&o.splice(1,0,o.pop());let u=Object.hasOwnProperty.call(t,"dilations"),d=t.kernelShape.slice(),c=t.strides.slice(),f=u?t.dilations.slice():[],m=t.pads.slice();Dl.adjustPoolAttributes(i,o,d,c,f,m);let y=Dl.computePoolOutputShape(i,o,c,f,d,m,t.autoPad,t.ceilMode),w=Object.assign({},t);u?Object.assign(w,{kernelShape:d,strides:c,pads:m,dilations:f,cacheKey:t.cacheKey}):Object.assign(w,{kernelShape:d,strides:c,pads:m,cacheKey:t.cacheKey});let $=y.slice();return $.push($.splice(1,1)[0]),[w,s?$:y]},lp=(e,t)=>{let i=t.format==="NHWC",s=K.size(e),o=K.size(t.kernelShape),u=[{type:12,data:s},{type:12,data:o}],d=[{name:"outputSize",type:"u32"},{name:"kernelSize",type:"u32"}];if(t.kernelShape.length<=2){let c=t.kernelShape[t.kernelShape.length-1],f=t.strides[t.strides.length-1],m=t.pads[t.pads.length/2-1],y=t.pads[t.pads.length-1],w=!!(m+y);u.push({type:12,data:c},{type:12,data:f},{type:12,data:m},{type:12,data:y}),d.push({name:"kw",type:"u32"},{name:"sw",type:"u32"},{name:"pwStart",type:"u32"},{name:"pwEnd",type:"u32"});let $=!1;if(t.kernelShape.length===2){let S=t.kernelShape[t.kernelShape.length-2],b=t.strides[t.strides.length-2],C=t.pads[t.pads.length/2-2],N=t.pads[t.pads.length-2];$=!!(C+N),u.push({type:12,data:S},{type:12,data:b},{type:12,data:C},{type:12,data:N}),d.push({name:"kh",type:"u32"},{name:"sh",type:"u32"},{name:"phStart",type:"u32"},{name:"phEnd",type:"u32"})}return[u,d,!0,w,$]}else{if(i)throw new Error("Pooling with kernelShape.length > 2 is not supported for NHWC format.");let c=K.computeStrides(t.kernelShape);u.push({type:12,data:c},{type:12,data:t.pads},{type:12,data:t.strides}),d.push({name:"kernelStrides",type:"u32",length:c.length},{name:"pads",type:"u32",length:t.pads.length},{name:"strides",type:"u32",length:t.strides.length});let f=t.pads.reduce((m,y)=>m+y);return[u,d,!!f,!1,!1]}},dp=(e,t,i,s,o,u,d,c,f,m,y,w)=>{let $=o.format==="NHWC",S=t.type.value,b=_e("output",t.type.tensor,s);if(o.kernelShape.length<=2){let C="",N="",k="",E=i-($?2:1);if(y?C=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${E}] = indices[${E}] * uniforms.sw - uniforms.pwStart + i;
                  if (xIndices[${E}] < 0 || xIndices[${E}]
                      >= uniforms.x_shape[${E}]) {
                    pad++;
                    continue;
                  }
                  let x_val = x[${t.indicesToOffset("xIndices")}];
                  ${u}
                }`:C=`
                for (var i: u32 = 0u; i < uniforms.kw; i++) {
                  xIndices[${E}] = indices[${E}] * uniforms.sw - uniforms.pwStart + i;
                  let x_val = x[${t.indicesToOffset("xIndices")}];
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
            ${e.registerUniforms(f).declareVariables(t,b)}

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
                let x_val = x[${t.indicesToOffset("xIndices")}];
                ${u}
              }`:k=`
              }
              let x_val = x[${t.indicesToOffset("xIndices")}];
              ${u}
            `,`
            ${e.registerUniforms(f).declareVariables(t,b)}

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
                  offsets[j] = offset / ${be("uniforms.kernelStrides","j",C)};
                  offset -= offsets[j] * ${be("uniforms.kernelStrides","j",C)};
                }
                offsets[${C-1}] = offset;

                isPad = false;
                for (var j = ${i-C}u; j < ${i}u; j++) {
                  xIndices[j] = indices[j] * ${be("uniforms.strides",`j - ${i-C}u`,C)}
                    + offsets[j - ${i-C}u] - ${be("uniforms.pads","j - 2u",N)};
                  ${k}
              }
              ${d}

              output[global_idx] = value;
            }`}},cp=e=>`${e.format};${e.ceilMode};${e.autoPad};${e.kernelShape.length}`,Xy=e=>`${cp(e)};${e.countIncludePad}`,Jy=e=>`${cp(e)};${e.storageOrder};${e.dilations}`,pp=e=>({format:e.format,autoPad:["NOTSET","VALID","SAME_UPPER","SAME_LOWER"][e.auto_pad],ceilMode:e.ceil_mode,kernelShape:e.kernel_shape,strides:e.strides,pads:e.pads}),fp=(e,t,i,s)=>{let[o,u]=up(t,s,i),d=J("x",t.dataType,t.dims.length),c=d.type.value,f="value += x_val;",m="";o.countIncludePad?m+=`value /= ${c}(uniforms.kernelSize);`:m+=`value /= ${c}(i32(uniforms.kernelSize) - pad);`;let[y,w,$,S,b]=lp(u,o);y.push(...ke(t.dims,u));let C=["rank"];return{name:e,shaderCache:{hint:`${s.cacheKey};${$};${S};${b}`,inputDependencies:C},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(K.size(u)/64)},programUniforms:y}),getShaderSource:N=>dp(N,d,t.dims.length,u.length,o,f,m,0,w,$,S,b)}},Gw=e=>{let t=e.count_include_pad!==0,i=pp(e);if(i.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding/divisor) is not yet implemented in the WebGPU AveragePool kernel");let s={countIncludePad:t,...i,cacheKey:""};return{...s,cacheKey:Xy(s)}},Kw=(e,t)=>{Ao(e.inputs),e.compute(fp("AveragePool",e.inputs[0],!1,t))},hp={autoPad:"",ceilMode:0,countIncludePad:!1,kernelShape:[],strides:[],pads:[],storageOrder:0,dilations:[]},Qw=e=>{let t=e.format;return{format:t,...hp,cacheKey:t}},Zw=(e,t)=>{Ao(e.inputs),e.compute(fp("GlobalAveragePool",e.inputs[0],!0,t))},mp=(e,t,i,s)=>{let[o,u]=up(t,s,i),d=`
      value = max(x_val, value);
    `,c="",f=J("x",t.dataType,t.dims.length),m=["rank"],[y,w,$,S,b]=lp(u,o);return y.push(...ke(t.dims,u)),{name:e,shaderCache:{hint:`${s.cacheKey};${$};${S};${b}`,inputDependencies:m},getRunData:()=>({outputs:[{dims:u,dataType:t.dataType}],dispatchGroup:{x:Math.ceil(K.size(u)/64)},programUniforms:y}),getShaderSource:C=>dp(C,f,t.dims.length,u.length,o,d,c,t.dataType===10?-65504:-1e5,w,$,S,b)}},Yw=(e,t)=>{Ao(e.inputs),e.compute(mp("MaxPool",e.inputs[0],!1,t))},Xw=e=>{let t=e.storage_order,i=e.dilations,s=pp(e);if(t!==0)throw new Error("column major storage order is not yet supported for MaxPool");if(s.ceilMode!==0)throw new Error("ceil_mode output-shape is computed, but ceil_mode kernel execution (padding) is not yet implemented in the WebGPU MaxPool kernel");let o={storageOrder:t,dilations:i,...s,cacheKey:""};return{...o,cacheKey:Jy(o)}},Jw=e=>{let t=e.format;return{format:t,...hp,cacheKey:t}},e_=(e,t)=>{Ao(e.inputs),e.compute(mp("GlobalMaxPool",e.inputs[0],!0,t))}}),e0,t0,t_,r_,Z$=ae(()=>{"use strict";Ie(),Me(),mt(),Pe(),e0=(e,t)=>{if(e.length<2||e.length>3)throw new Error("DequantizeLinear requires 2 or 3 inputs.");if(e.length===3&&e[1].dims===e[2].dims)throw new Error("x-scale and x-zero-point must have the same shape.");if(e.length===3&&e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==0&&e[1].dims.length!==1&&e[1].dims.length!==e[0].dims.length)throw new Error("scale input must be a scalar, a 1D tensor, or have the same rank as the input tensor.");if(e.length>2){if(e[0].dataType!==e[2].dataType)throw new Error("x and x-zero-point must have the same data type.");if(e[1].dims.length!==e[2].dims.length)throw new Error("scale and zero-point inputs must have the same rank.");if(!e[1].dims.map((i,s)=>i===e[2].dims[s]).reduce((i,s)=>i&&s,!0))throw new Error("scale and zero-point inputs must have the same shape.")}if(t.blockSize>0){if(e[1].dims.length===0||e[1].dims.length===1&&e[1].dims[0]===1)throw new Error("blockSize must be set only for block quantization.");if(!e[1].dims.map((o,u)=>u===t.axis||o===e[0].dims[u]).reduce((o,u)=>o&&u,!0))throw new Error("For block qunatization, scale input shape to match the input shape except for the axis");if(e[1].dims.length!==e[0].dims.length)throw new Error("For block qunatization the scale input rank must be the same as the x rank.");let i=e[0].dims[t.axis],s=e[1].dims[t.axis];if(t.blockSize<Math.ceil(i/s)||t.blockSize>Math.ceil(i/(s-1)-1))throw new Error("blockSize must be with in the range [ceil(dI / Si), ceil(dI / (Si - 1) - 1)].")}},t0=(e,t)=>{let i=K.normalizeAxis(t.axis,e[0].dims.length),s=e[0].dataType,o=s===3,u=e[0].dims,d=e[1].dataType,c=K.size(u),f=s===3||s===2,m=f?[Math.ceil(K.size(e[0].dims)/4)]:e[0].dims,y=e[1].dims,w=e.length>2?e[2]:void 0,$=w?f?[Math.ceil(K.size(w.dims)/4)]:w.dims:void 0,S=y.length===0||y.length===1&&y[0]===1,b=S===!1&&y.length===1,C=ht(c),N=S&&(!f||C===4),k=N?C:1,E=N&&!f?C:1,A=J("input",f?12:s,m.length,E),D=J("scale",d,y.length),B=w?J("zero_point",f?12:s,$.length):void 0,P=_e("output",d,u.length,k),V=[A,D];B&&V.push(B);let I=[m,y];w&&I.push($);let Y=[{type:12,data:c/k},{type:12,data:i},{type:12,data:t.blockSize},...ke(...I,u)],te=he=>{let ce=[{name:"output_size",type:"u32"},{name:"axis",type:"u32"},{name:"block_size",type:"u32"}];return`
      ${he.registerUniforms(ce).declareVariables(...V,P)}
      ${he.mainStart()}
          ${he.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
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
      }`};return{name:"DequantizeLinear",shaderCache:{hint:t.cacheKey,inputDependencies:B?["rank","rank","rank"]:["rank","rank"]},getShaderSource:te,getRunData:()=>({outputs:[{dims:u,dataType:d}],dispatchGroup:{x:Math.ceil(c/k/64),y:1,z:1},programUniforms:Y})}},t_=(e,t)=>{e0(e.inputs,t),e.compute(t0(e.inputs,t))},r_=e=>Ye({axis:e.axis,blockSize:e.blockSize})}),r0,n0,n_,Y$=ae(()=>{"use strict";vr(),Ie(),Pe(),r0=(e,t,i)=>{let s=e===t,o=e<t&&i<0,u=e>t&&i>0;if(s||o||u)throw new Error("Range these inputs' contents are invalid.")},n0=(e,t,i,s)=>{let o=Math.abs(Math.ceil((t-e)/i)),u=[o],d=o,c=[{type:12,data:d},{type:s,data:e},{type:s,data:i},...ke(u)],f=m=>{let y=_e("output",s,u.length),w=y.type.value,$=[{name:"outputSize",type:"u32"},{name:"start",type:w},{name:"delta",type:w}];return`
        ${m.registerUniforms($).declareVariables(y)}
        ${m.mainStart()}
        ${m.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
        output[global_idx] = uniforms.start + ${w}(global_idx) * uniforms.delta;
      }`};return{name:"Range",shaderCache:{hint:`${s}`},getShaderSource:f,getRunData:()=>({outputs:[{dims:u,dataType:s}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:c})}},n_=e=>{let t=0,i=0,s=0;e.inputs[0].dataType===6?(t=e.inputs[0].getInt32Array()[0],i=e.inputs[1].getInt32Array()[0],s=e.inputs[2].getInt32Array()[0]):e.inputs[0].dataType===1&&(t=e.inputs[0].getFloat32Array()[0],i=e.inputs[1].getFloat32Array()[0],s=e.inputs[2].getFloat32Array()[0]),dt.webgpu.validateInputContent&&r0(t,i,s),e.compute(n0(t,i,s,e.inputs[0].dataType),{inputs:[]})}}),i0,a0,i_,a_,X$=ae(()=>{"use strict";Ie(),Me(),mt(),Pe(),i0=(e,t,i,s)=>{if(e!=="none"&&s!=="i32"&&s!=="u32"&&s!=="f32")throw new Error(`Input ${s} is not supported with reduction ${e}.`);let o=`{
                var oldValue = 0;
                loop {
                  let newValueF32 =`,u=`;
                  let newValue = bitcast<i32>(newValueF32);
                  let res = atomicCompareExchangeWeak(&${t}, oldValue, newValue);
                  if res.exchanged {
                    break;
                  }
                  oldValue = res.old_value;
                }
              }`;switch(e){case"none":return`${t}=${i};`;case"add":return s==="i32"||s==="u32"?`atomicAdd(&${t}, bitcast<${s}>(${i}));`:`
              ${o}bitcast<${s}>(oldValue) + (${i})${u}`;case"max":return s==="i32"||s==="u32"?`atomicMax(&${t}, bitcast<${s}>(${i}));`:`
                ${o}max(bitcast<f32>(oldValue), (${i}))${u}`;case"min":return s==="i32"||s==="u32"?`atomicMin(&${t}, bitcast<${s}>(${i}));`:`${o}min(bitcast<${s}>(oldValue), (${i}))${u}`;case"mul":return`${o}(bitcast<${s}>(oldValue) * (${i}))${u}`;default:throw new Error(`Reduction ${e} is not supported.`)}},a0=(e,t)=>{let i=e[0].dims,s=e[1].dims,o=i,u=1,d=Math.ceil(K.sizeToDimension(s,s.length-1)/u),c=s[s.length-1],f=K.sizeFromDimension(i,c),m=[{type:12,data:d},{type:12,data:c},{type:12,data:f},...ke(e[1].dims,e[2].dims,o)],y=w=>{let $=J("indices",e[1].dataType,e[1].dims.length),S=J("updates",e[2].dataType,e[2].dims.length,u),b=t.reduction!=="none"&&t.reduction!==""?zv("output",e[0].dataType,o.length):_e("output",e[0].dataType,o.length,u);return`
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
    ${i0(t.reduction,"output[data_offset + i]","value",b.type.value)}
  }

      }`};return{name:"ScatterND",shaderCache:{hint:`${t.cacheKey}_${t.reduction}`,inputDependencies:["rank","rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(d/64)},programUniforms:m}),getShaderSource:y}},i_=e=>Ye({reduction:e.reduction}),a_=(e,t)=>{e.compute(a0(e.inputs,t),{inputs:[e.inputs[1],e.inputs[2]],outputs:[]})}}),s0,o0,u0,gp,l0,d0,c0,p0,f0,h0,m0,g0,yp,y0,v0,w0,_0,$0,s_,o_,J$=ae(()=>{"use strict";Ie(),Me(),mt(),Pe(),s0=(e,t)=>{if(e.every(i=>i>0||(()=>{throw new Error("Resize requires scales input values to be positive")})),e.length>0){if(t.mode==="linear"){if(!(e.length===2||e.length===3||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1||e.length===5&&e[0]===1&&e[1]===1))throw new Error(`For linear mode, Resize requires scales to be 2D, 3D, 4D with either two outermost or one innermost and
            one outermost scale values equal to 1, or 5D with two outermost scale values equal to 1`)}else if(t.mode==="cubic"&&!(e.length===2||e.length===4&&e[0]===1&&e[1]===1||e.length===4&&e[0]===1&&e[3]===1))throw new Error("Resize requires scales input size to be 2 or 4 for cubic mode")}},o0=(e,t,i)=>{t.every(o=>o>=0&&o<i||(()=>{throw new Error("Resize requires axes input values to be positive and less than rank")}));let s=new Array(i).fill(1);return t.forEach((o,u)=>s[o]=e[u]),s},u0=(e,t,i,s,o,u)=>{let[d,c,f]=i>10?[1,2,3]:[-1,e.length>1?1:-1,-1],m=e[0].dims.length;if(d>0&&e.length>d&&e[d].dims.length>0)e[d].getFloat32Array().forEach(y=>u.push(y));else if(t.coordinateTransformMode==="tf_crop_and_resize")throw new Error("Resize requires RoI input to be specified when coordinateTransformMode is tfCropAndResize");if(c>0&&e.length>c&&e[c].dims.length===1&&e[c].dims[0]>0){if(e[c].getFloat32Array().forEach(y=>s.push(y)),s.length!==0&&s.length!==m&&i>=18&&s.length!==t.axes.length)throw new Error("Resize requires scales input size to be same as input rank or axes size for opset 18 and up");s0(s,t),t.axes.length>0&&o0(s,t.axes,m).forEach((y,w)=>s[w]=y)}if(f>0&&e.length>f&&e[f].dims.length===1&&e[f].dims[0]>0&&(e[f].getBigInt64Array().forEach(y=>o.push(Number(y))),o.length!==0&&o.length!==m&&i>=18&&o.length!==t.axes.length))throw new Error("Resize requires sizes input size to be same as input rank or axes size for opset 18 and up");if(t.axes.length>0){if(s.length!==0&&s.length!==t.axes.length)throw new Error('Resize requires "scales" input size to be of axes rank when axes attributes is specified');if(o.length!==0&&o.length!==t.axes.length)throw new Error('Resize requires "sizes" input size to be of rank axes rank when axes attributes is specified')}if(typeof s<"u"&&typeof o<"u"&&s.length>0&&o.length>m)throw new Error("Resize requires only of scales or sizes to be specified")},gp=(e,t,i,s)=>`
  // The whole part and the fractional part are calculated separately due to inaccuracy of floating
  // point division. As an example, f32(21) / f32(7) may evaluate to 2.99... instead of 3, causing an
  // offset-by-one error later in floor().
  let big = (${e}) * (${t});
  let whole = ${s}(big / (${i}));
  let fract = ${s}(big % (${i})) / ${s}(${i});
  return whole + fract;
`,l0=(e,t)=>`fn getOriginalCoordinateFromResizedCoordinate(xResized: u32, xScale: f32, lengthResized: u32,
     lengthOriginal: u32, roiStart: f32, roiEnd: f32) -> ${t} { `+(()=>{switch(e){case"asymmetric":return`
          if (xScale < 1.0 || floor(xScale) != xScale) {
            return ${t}(xResized) / ${t}(xScale);
          } else {
            ${gp("xResized","lengthOriginal","lengthResized",t)}
          }
        `;case"pytorch_half_pixel":return`if (lengthResized > 1) {
                    return (${t}(xResized) + 0.5) / ${t}(xScale) - 0.5;
                  } else {
                    return 0.0;
                  }`;case"tf_half_pixel_for_nn":return`return (${t}(xResized) + 0.5) / ${t}(xScale);`;case"align_corners":return`if (lengthResized == 1) {
                    return 0.0;
                  } else {
                    ${gp("xResized","lengthOriginal - 1","lengthResized - 1",t)}
                  }`;case"tf_crop_and_resize":return`if (lengthResized > 1) {
                    return ${t}(roiStart) * ${t}(lengthOriginal - 1) +
                        (${t}(xResized) * ${t}(roiEnd - roiStart) * ${t}(lengthOriginal - 1)) /
                        ${t}(lengthResized - 1);
                  } else {
                    return 0.5 * ${t}(roiStart + roiEnd) * ${t}(lengthOriginal - 1);
                  }`;case"half_pixel_symmetric":return`const outputWidth = ${t}xScale * ${t}(lengthResized);
                  const adjustment = ${t}(lengthResized) / outputWidth;
                  const center = ${t}(lengthOriginal) / 2;
                  const offset = center * (1 - adjustment);
                  return offset + ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;case"half_pixel":return`return ((${t}(xResized) + 0.5) / ${t}(xScale)) - 0.5;`;default:throw new Error(`Coordinate transform mode ${e} is not supported`)}})()+"}",d0=(e,t,i)=>`fn getNearestPixelFromOriginal(xOriginal: ${i}, isDownSample: bool) -> ${i} {`+(()=>{switch(e){case"round_prefer_ceil":return"if (fract(xOriginal) == 0.5) {             return ceil(xOriginal);           } else {             return round(xOriginal);           }";case"floor":return"return floor(xOriginal);";case"ceil":return"return ceil(xOriginal);";case"round_prefer_floor":return"if (fract(xOriginal) == 0.5) {                     return floor(xOriginal);                   } else {                     return round(xOriginal);                   }";default:if(t<11)return"if (isDownSample)                     {                       return ceil(xOriginal);                     } else {                       return xOriginal;                     }";throw new Error(`Nearest mode ${e} is not supported`)}})()+"}",c0=(e,t,i)=>{let s=new Array(i).fill(0).concat(new Array(i).fill(1)),o=e.length===0?s:e.slice();return t.length>0?(t.forEach((u,d)=>{s[u]=o[d],s[d+i]=o[t.length+d]}),s):o},p0=(e,t,i,s)=>{let o=[];if(i.length>0)if(s.length>0){if(e.forEach(u=>o.push(u)),Math.max(...s)>e.length)throw new Error("axes is out of bound");s.forEach((u,d)=>o[u]=i[d])}else i.forEach(u=>o.push(u));else{if(t.length===0)throw new Error("Resize requires either scales or sizes.");o=e.map((u,d)=>Math.round(u*t[d]))}return o},f0=(e,t,i)=>{let s=(()=>{switch(i.keepAspectRatioPolicy){case"not_larger":return i.axes.length>0?Math.min(...i.axes.map(u=>t[u]),Number.MAX_VALUE):Math.min(...t,Number.MAX_VALUE);case"not_smaller":return i.axes.length>0?Math.max(...i.axes.map(u=>t[u]),Number.MIN_VALUE):Math.max(...t,Number.MIN_VALUE);default:throw new Error(`Keep aspect ratio policy ${i.keepAspectRatioPolicy} is not supported`)}})();t.fill(1,0,t.length);let o=e.slice();return i.axes.length>0?(i.axes.forEach(u=>t[u]=s),i.axes.forEach(u=>o[u]=Math.round(e[u]*t[u]))):(t.fill(s,0,t.length),o.forEach((u,d)=>o[d]=Math.round(u*t[d]))),o},h0=(e,t,i,s,o)=>`
    fn calculateOriginalIndicesFromOutputIndices(output_indices: ${e.type.indices}) -> array<${e.type.value}, ${i.length}> {
      var original_indices: array<${e.type.value}, ${i.length}>;
      for (var i:u32 = 0; i < ${i.length}; i++) {
        var output_index = ${e.indicesGet("output_indices","i")};
        var scale = ${be("uniforms.scales","i",s)};
        var roi_low = ${be("uniforms.roi","i",o)};
        var roi_hi = ${be("uniforms.roi",`i + ${t.length}`,o)};
        if (scale == 1.0) {
          original_indices[i] = ${e.type.value}(output_index);
        } else {
          var input_shape_i = ${be("uniforms.input_shape","i",t.length)};
          var output_shape_i = ${be("uniforms.output_shape","i",i.length)};
          original_indices[i] = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                           input_shape_i, roi_low, roi_hi);
        }
      }
      return original_indices;
    }`,m0=(e,t,i,s,o,u,d)=>`
    fn calculateInputIndicesFromOutputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
      var input_indices: ${e.type.indices};
      for (var i:u32 = 0; i < ${s.length}; i++) {
        var output_index = ${t.indicesGet("output_indices","i")};
        var input_index: u32;
        var scale = ${be("uniforms.scales","i",o)};
        if (scale == 1.0) {
          input_index = output_index;
        } else {
          var roi_low = ${be("uniforms.roi","i",u)};
          var roi_hi = ${be("uniforms.roi",`i + ${i.length}`,u)};
          var input_shape_i = ${be("uniforms.input_shape","i",i.length)};
          var output_shape_i = ${be("uniforms.output_shape","i",s.length)};
          var original_idx = getOriginalCoordinateFromResizedCoordinate(output_index, scale, output_shape_i,
                                                                        input_shape_i, roi_low, roi_hi);
          if (!${d} || (original_idx >= 0 && original_idx < ${t.type.value}(input_shape_i))) {
            if (original_idx < 0) {
              input_index = 0;
            } else if (original_idx > ${t.type.value}(input_shape_i - 1)) {
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
    }`,g0=(e,t)=>`
    fn checkInputIndices(input_indices: ${e.type.indices}) -> bool {
      for (var i:u32 = 0; i < ${t.length}; i++) {
        var input_index = ${e.indicesGet("input_indices","i")};
        if (input_index < 0 || input_index >= ${be("uniforms.input_shape","i",t.length)}) {
          return false;
        }
      }
      return true;
    }`,yp=(e,t,i,s)=>e.rank>s?`
    ${e.indicesSet("input_indices",t,"channel")};
    ${e.indicesSet("input_indices",i,"batch")};
`:"",y0=(e,t,i,s,o)=>{let[u,d,c,f]=i.length===2?[-1,0,1,-1]:[0,2,3,1],m=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, row: u32, col: u32) -> ${m} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",d,`max(0, min(row, ${i[d]} - 1))`)};
      ${e.indicesSet("input_indices",c,`max(0, min(col, ${i[c]} - 1))`)};
      ${yp(e,f,u,2)}
      return ${e.getByIndices("input_indices")};
    }

    fn bilinearInterpolation(output_indices: ${t.type.indices}) -> ${m} {
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
    }`},v0=(e,t,i,s,o,u,d,c,f,m)=>{let y=i.length===2,w=!0,[$,S]=y?[0,1]:w?[2,3]:[1,2],b=e.type.value,C=N=>{let k=N===$?"row":"col";return`
      fn ${k}CubicInterpolation(input_indices: ${e.type.indices}, output_indices: ${t.type.indices}) -> ${b} {
        var output_index = ${t.indicesGet("output_indices",N)};
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

  fn bicubicInterpolation(output_indices: ${t.type.indices}) -> ${b} {
    var input_indices: ${e.type.indices} = output_indices;
    return colCubicInterpolation(input_indices, output_indices);
  }
    `},w0=(e,t,i,s,o)=>{let[u,d,c,f,m]=i.length===3?[-1,0,1,2,-1]:[0,2,3,4,1],y=e.type.value;return`
    fn getInputValue(batch: u32, channel: u32, depth:u32, height: u32, width: u32) -> ${y} {
      var input_indices: ${e.type.indices};
      ${e.indicesSet("input_indices",d,`max(0, min(depth, ${i[d]} - 1))`)};
      ${e.indicesSet("input_indices",c,`max(0, min(height, ${i[c]} - 1))`)};
      ${e.indicesSet("input_indices",f,`max(0, min(width, ${i[f]} - 1))`)};
      ${yp(e,m,u,3)}
      return ${e.getByIndices("input_indices")};
    }

    fn trilinearInterpolation(output_indices: ${t.type.indices}) -> ${y} {
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
    }`},_0=(e,t,i,s,o,u)=>{let d=e.dims,c=c0(u,t.axes,d.length),f=p0(d,s,o,t.axes),m=s.slice();s.length===0&&(m=d.map((E,A)=>E===0?1:f[A]/E),t.keepAspectRatioPolicy!=="stretch"&&(f=f0(d,m,t)));let y=_e("output",e.dataType,f.length),w=J("input",e.dataType,d.length),$=K.size(f),S=d.length===f.length&&d.every((E,A)=>E===f[A]),b=t.coordinateTransformMode==="tf_crop_and_resize",C=t.extrapolationValue,N=w.type.value,k=E=>`
      ${S?"":`
      ${l0(t.coordinateTransformMode,N)};
      ${(()=>{switch(t.mode){case"nearest":return`
              ${g0(w,d)};
              ${d0(t.nearestMode,i,N)};
              ${m0(w,y,d,f,m.length,c.length,b)};
              `;case"linear":return`
              ${h0(y,d,f,m.length,c.length)};
              ${(()=>{if(d.length===2||d.length===4)return`${y0(w,y,d,b,C)}`;if(d.length===3||d.length===5)return`${w0(w,y,d,b,C)}`;throw Error("Linear mode only supports input dims 2, 3, 4 and 5 are supported in linear mode.")})()};
            `;case"cubic":return`
            ${(()=>{if(d.length===2||d.length===4)return`${v0(w,y,d,f,m,c,t.cubicCoeffA,b,t.extrapolationValue,t.excludeOutside)}`;throw Error("Cubic mode only supports input dims 2 and 4 are supported in linear mode.")})()};
            `;default:throw Error("Invalid resize mode")}})()};
      `}
      ${E.registerUniform("output_size","u32").registerUniform("scales","f32",m.length).registerUniform("roi","f32",c.length).declareVariables(w,y)}
      ${E.mainStart()}
        ${E.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.output_size")}
        ${S?"output[global_idx] = input[global_idx];":`
        let output_indices = ${y.offsetToIndices("global_idx")};
        var input_indices: ${w.type.indices};
        ${(()=>{switch(t.mode){case"nearest":return`input_indices = calculateInputIndicesFromOutputIndices(output_indices);
                if (checkInputIndices(input_indices)) {
                  output[global_idx] = ${w.getByIndices("input_indices")};
                } else {
                  output[global_idx] = ${t.extrapolationValue};
                }`;case"linear":return`output[global_idx] = ${d.length===2||d.length===4?"bilinearInterpolation":"trilinearInterpolation"}(output_indices);`;case"cubic":return"output[global_idx] = bicubicInterpolation(output_indices);";default:throw Error(`Unsupported resize mode: ${t.mode}`)}})()};
`}
      }`;return{name:"Resize",shaderCache:{hint:`${t.cacheKey}|${i}|${m.length>0?t.mode==="cubic"?m:m.length:""}|${o.length>0?o:""}|${c.length>0?c:""}|${S}|${t.mode==="nearest"?d.length:d}`,inputDependencies:["rank"]},getShaderSource:k,getRunData:()=>({outputs:[{dims:f,dataType:e.dataType}],dispatchGroup:{x:Math.ceil($/64)},programUniforms:[{type:12,data:$},{type:1,data:m},{type:1,data:c},...ke(d,f)]})}},$0=e=>{let t=e.customDataBuffer;return new Uint32Array(t.buffer,t.byteOffset,1)[0]},s_=(e,t)=>{let i=[],s=[],o=[],u=$0(e);if(t.antialias!==0)throw Error("Only default value (0) for Antialias attribute is supported");u0(e.inputs,t,u,i,s,o),e.compute(_0(e.inputs[0],t,u,i,s,o),{inputs:[0]})},o_=e=>{let t=e.antialias,i=e.axes,s=e.coordinateTransformMode,o=e.cubicCoeffA,u=e.excludeOutside!==0,d=e.extrapolationValue,c=e.keepAspectRatioPolicy,f=e.mode,m=e.nearestMode===""?"simple":e.nearestMode;return Ye({antialias:t,axes:i,coordinateTransformMode:s,cubicCoeffA:o,excludeOutside:u,extrapolationValue:d,keepAspectRatioPolicy:c,mode:f,nearestMode:m})}}),x0,b0,u_,ex=ae(()=>{"use strict";Ie(),Me(),Pe(),x0=e=>{if(!e||e.length<3)throw new Error("layerNorm requires at least 3 inputs.");let t=e[0],i=e[1],s=e[2];if(t.dataType!==i.dataType||t.dataType!==s.dataType)throw new Error("All inputs must have the same data type");if(t.dims.length!==3&&t.dims.length!==2)throw new Error("Input must be 2D or 3D");if(i.dims.length!==3&&i.dims.length!==2)throw new Error("Skip must be 2D or 3D");let o=t.dims[t.dims.length-1],u=t.dims[t.dims.length-2];if(i.dims[i.dims.length-1]!==o)throw new Error("Skip must have the same hidden size as input");if(i.dims[i.dims.length-2]!==u)throw new Error("Skip must have the same sequence length as input");if(s.dims.length!==1)throw new Error("Gamma must be 1D");if(s.dims[s.dims.length-1]!==o)throw new Error("Gamma must have the same hidden size as input");if(e.length>3){let d=e[3];if(d.dims.length!==1)throw new Error("Beta must be 1D");if(d.dims[d.dims.length-1]!==o)throw new Error("Beta must have the same hidden size as input")}if(e.length>4){let d=e[4];if(d.dims.length!==1)throw new Error("Bias must be 1D");if(d.dims[d.dims.length-1]!==o)throw new Error("Bias must have the same hidden size as input")}},b0=(e,t,i,s)=>{let o=t.simplified,u=e[0].dims,d=K.size(u),c=u,f=d,m=u.slice(-1)[0],y=s?u.slice(0,-1).concat(1):[],w=!o&&e.length>3,$=e.length>4,S=s&&i>1,b=s&&i>2,C=i>3,N=64,k=ht(m),E=[{type:12,data:f},{type:12,data:k},{type:12,data:m},{type:1,data:t.epsilon}],A=B=>{let P=[{name:"output_size",type:"u32"},{name:"components",type:"u32"},{name:"hidden_size",type:"u32"},{name:"epsilon",type:"f32"}],V=[J("x",e[0].dataType,e[0].dims,k),J("skip",e[1].dataType,e[1].dims,k),J("gamma",e[2].dataType,e[2].dims,k)];w&&V.push(J("beta",e[3].dataType,e[3].dims,k)),$&&V.push(J("bias",e[4].dataType,e[4].dims,k)),V.push(_e("output",e[0].dataType,c,k)),S&&V.push(_e("mean_output",1,y)),b&&V.push(_e("inv_std_output",1,y)),C&&V.push(_e("input_skip_bias_sum",e[0].dataType,c,k));let I=Ct(e[0].dataType),Y=Ct(1,k);return`

      ${B.registerUniforms(P).declareVariables(...V)}
      var<workgroup> sum_shared : array<${Y}, ${N}>;
      var<workgroup> sum_squared_shared : array<${Y}, ${N}>;

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
        let mean = ${hi("sum",k)} / f32(uniforms.hidden_size);
        let inv_std_dev = inverseSqrt(${hi("square_sum",k)} / f32(uniforms.hidden_size) ${o?"":"- mean * mean"} + uniforms.epsilon);
        ${S?"mean_output[global_idx] = mean;":""}
        ${b?"inv_std_output[global_idx] = inv_std_dev;":""}

        for (var i: u32 = 0; i < stride; i++) {
          output[offset + i] = (output[offset + i] ${o?"":`- ${I}(mean)`}) *
            ${I}(inv_std_dev) * gamma[offset1d + i]
            ${w?"+ beta[offset1d + i]":""};
        }
      }`},D=[{dims:c,dataType:e[0].dataType}];return i>1&&D.push({dims:y,dataType:1}),i>2&&D.push({dims:y,dataType:1}),i>3&&D.push({dims:u,dataType:e[0].dataType}),{name:"SkipLayerNormalization",shaderCache:{hint:`${k};${S};${b};${C}`,inputDependencies:e.map((B,P)=>"type")},getShaderSource:A,getRunData:()=>({outputs:D,dispatchGroup:{x:Math.ceil(f/m)},programUniforms:E})}},u_=(e,t)=>{x0(e.inputs);let i=[0];e.outputCount>1&&i.push(-3),e.outputCount>2&&i.push(-3),e.outputCount>3&&i.push(3),e.compute(b0(e.inputs,t,e.outputCount,!1),{outputs:i})}}),S0,Ro,k0,vp,E0,T0,l_,d_,tx=ae(()=>{"use strict";Ie(),Me(),mt(),Pe(),S0=(e,t)=>{if(!e||e.length<1)throw new Error("too few inputs");if(t.axes.length!==0){if(t.axes.length!==t.starts.length||t.axes.length!==t.ends.length)throw new Error("axes, starts and ends must have the same length")}else if(t.starts.length!==t.ends.length)throw new Error("starts and ends must have the same length");e.slice(1).forEach((i,s)=>{if(e[s+1].dataType!==6&&e[s+1].dataType!==7)throw new Error(`Input ${s} must be an array of int32 or int64`)})},Ro=(e,t)=>{let i=[];if(e.length>t)if(e[t].dataType===7)e[t].getBigInt64Array().forEach(s=>i.push(Number(s)));else if(e[t].dataType===6)e[t].getInt32Array().forEach(s=>i.push(Number(s)));else throw new Error(`Input ${t} must be an array of int32 or int64`);return i},k0=(e,t)=>{if(e.length>1){let i=Ro(e,1),s=Ro(e,2),o=Ro(e,3);return o.length===0&&(o=[...Array(e[0].dims.length).keys()]),Ye({starts:i,ends:s,axes:o})}else return t},vp=(e,t,i,s,o)=>{let u=e;return e<0&&(u+=i[s[t]]),o[t]<0?Math.max(0,Math.min(u,i[s[t]]-1)):Math.max(0,Math.min(u,i[s[t]]))},E0=(e,t,i)=>`fn calculateInputIndices(output_indices: ${t.type.indices}) -> ${e.type.indices} {
          var input_indices: ${e.type.indices};
          var carry = 0u;
          for (var i = ${i.length-1}; i >= 0; i--) {
            let input_shape_i = ${be("uniforms.input_shape","i",i.length)};
            let steps_i = ${be("uniforms.steps","i",i.length)};
            let signs_i = ${be("uniforms.signs","i",i.length)};
            let starts_i = ${be("uniforms.starts","i",i.length)};
            var output_index = ${t.indicesGet("output_indices","i")};
            var input_index = output_index * steps_i + starts_i + carry;
            carry = input_index / input_shape_i;
            input_index = input_index % input_shape_i;
            if (signs_i < 0) {
              input_index = input_shape_i - input_index - 1u + starts_i;
            }
            ${e.indicesSet("input_indices","i","input_index")};
          }
          return input_indices;
      }`,T0=(e,t)=>{let i=e[0].dims,s=K.size(i),o=t.axes.length>0?K.normalizeAxes(t.axes,i.length):[...Array(i.length).keys()],u=Ro(e,4);u.forEach(k=>k!==0||(()=>{throw new Error("step cannot be 0")})),u.length===0&&(u=Array(o.length).fill(1));let d=t.starts.map((k,E)=>vp(k,E,i,o,u)),c=t.ends.map((k,E)=>vp(k,E,i,o,u));if(o.length!==d.length||o.length!==c.length)throw new Error("start, ends and axes should have the same number of elements");if(o.length!==i.length)for(let k=0;k<i.length;++k)o.includes(k)||(d.splice(k,0,0),c.splice(k,0,i[k]),u.splice(k,0,1));let f=u.map(k=>Math.sign(k));u.forEach((k,E,A)=>{if(k<0){let D=(c[E]-d[E])/k,B=d[E],P=B+D*u[E];d[E]=P,c[E]=B,A[E]=-k}});let m=i.slice(0);o.forEach((k,E)=>{m[k]=Math.ceil((c[k]-d[k])/u[k])});let y={dims:m,dataType:e[0].dataType},w=_e("output",e[0].dataType,m.length),$=J("input",e[0].dataType,e[0].dims.length),S=K.size(m),b=[{name:"outputSize",type:"u32"},{name:"starts",type:"u32",length:d.length},{name:"signs",type:"i32",length:f.length},{name:"steps",type:"u32",length:u.length}],C=[{type:12,data:S},{type:12,data:d},{type:6,data:f},{type:12,data:u},...ke(e[0].dims,m)],N=k=>`
      ${k.registerUniforms(b).declareVariables($,w)}
        ${E0($,w,i)}
        ${k.mainStart()}
          ${k.guardAgainstOutOfBoundsWorkgroupSizes("uniforms.outputSize")}
          let output_indices = ${w.offsetToIndices("global_idx")};
          let input_indices = calculateInputIndices(output_indices);
          ${w.setByOffset("global_idx",$.getByIndices("input_indices"))}
      }`;return{name:"Slice",shaderCache:{hint:`${f.length}_${d.length}_${u.length}`,inputDependencies:["rank"]},getShaderSource:N,getRunData:()=>({outputs:[y],dispatchGroup:{x:Math.ceil(s/64)},programUniforms:C})}},l_=(e,t)=>{S0(e.inputs,t);let i=k0(e.inputs,t);e.compute(T0(e.inputs,i),{inputs:[0]})},d_=e=>{let t=e.starts,i=e.ends,s=e.axes;return Ye({starts:t,ends:i,axes:s})}}),C0,I0,c_,p_,rx=ae(()=>{"use strict";Ie(),Me(),mt(),mi(),Pe(),C0=e=>{if(!e||e.length!==1)throw new Error("Softmax op requires 1 input.")},I0=(e,t)=>{let i=e.inputs[0],s=i.dims,o=K.size(s),u=s.length,d=K.normalizeAxis(t.axis,u),c=d<s.length-1,f,m=[];c?(m=Array.from({length:u},(V,I)=>I),m[d]=u-1,m[u-1]=d,f=e.compute(yr(i,m),{inputs:[i],outputs:[-1]})[0]):f=i;let y=f.dims,w=y[u-1],$=o/w,S=ht(w),b=w/S,C=64;$===1&&(C=256);let N=(V,I)=>I===4?`max(max(${V}.x, ${V}.y), max(${V}.z, ${V}.w))`:I===2?`max(${V}.x, ${V}.y)`:I===3?`max(max(${V}.x, ${V}.y), ${V}.z)`:V,k=J("x",f.dataType,f.dims,S),E=_e("result",f.dataType,f.dims,S),A=k.type.value,D=Ct(f.dataType)==="f32"?`var threadMax = ${A}(-3.4028234663852886e+38f);`:`var threadMax = ${A}(-65504.0h);`,B=V=>`
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
      ${V.registerUniform("packedCols","i32").declareVariables(k,E)}
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
          rowSumShared = ${A}(${hi("threadShared[0]",S)});
        }
        workgroupBarrier();

        // calculate final value for each element in the row
        for (var col = lindex; col < cols; col += wg) {
          var value = exp(getValue(row, col, row_stride) - rowMaxShared) / rowSumShared;
          // max operation protects against NaN since all values should be >=0
          value = max(value, ${A}(0.0));
          setValue(row, col, row_stride, value);
        }
      }`,P=e.compute({name:"Softmax",shaderCache:{hint:`${S};${C}`,inputDependencies:["type"]},getRunData:()=>({outputs:[{dims:y,dataType:f.dataType}],dispatchGroup:{x:$},programUniforms:[{type:6,data:b}]}),getShaderSource:B},{inputs:[f],outputs:[c?-1:0]})[0];c&&e.compute(yr(P,m),{inputs:[P]})},c_=(e,t)=>{C0(e.inputs),I0(e,t)},p_=e=>Ye({axis:e.axis})}),wp,z0,N0,O0,f_,nx=ae(()=>{"use strict";Ie(),Me(),Pe(),wp=e=>Array.from(e.getBigInt64Array(),Number),z0=e=>{if(!e||e.length!==2)throw new Error("Tile requires 2 inputs.");if(e[0].dataType!==1&&e[0].dataType!==10&&e[0].dataType!==6&&e[0].dataType!==12)throw new Error("Tile only support float, float16, int32, and uint32 data types");if(e[1].dataType!==7)throw new Error("Tile `repeats` input should be of int64 data type");if(e[1].dims.length!==1)throw new Error("Tile `repeats` input should be 1-D");if(wp(e[1]).length!==e[0].dims.length)throw new Error("Tile `repeats` input should have same number of elements as rank of input data tensor")},N0=(e,t)=>{let i=[];for(let s=0;s<e.length;++s)i.push(e[s]*t[s]);return i},O0=(e,t)=>{let i=e[0].dims,s=t??wp(e[1]),o=N0(i,s),u=K.size(o),d=e[0].dataType,c=J("input",d,i.length),f=_e("output",d,o.length),m=y=>`
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
    }`;return{name:"Tile",shaderCache:{hint:`${s}`,inputDependencies:["rank"]},getRunData:()=>({outputs:[{dims:o,dataType:e[0].dataType}],dispatchGroup:{x:Math.ceil(u/64)},programUniforms:[{type:12,data:u},...ke(e[0].dims,o)]}),getShaderSource:m}},f_=e=>{z0(e.inputs),e.compute(O0(e.inputs),{inputs:[0]})}}),A0,R0,h_,ix=ae(()=>{"use strict";Ie(),Me(),Pe(),A0=(e,t,i,s,o)=>{let u=_e("output_data",o,i.length,4),d=J("a_data",t[1].dataType,t[1].dims.length,4),c=J("b_data",t[2].dataType,t[2].dims.length,4),f=J("c_data",t[0].dataType,t[0].dims.length,4),m,y=(w,$,S)=>`select(${$}, ${w}, ${S})`;if(!s)m=u.setByOffset("global_idx",y(d.getByOffset("global_idx"),c.getByOffset("global_idx"),f.getByOffset("global_idx")));else{let w=($,S,b="")=>{let C=`a_data[index_a${S}][component_a${S}]`,N=`b_data[index_b${S}][component_b${S}]`,k=`bool(c_data[index_c${S}] & (0xffu << (component_c${S} * 8)))`;return`
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
      }`},R0=e=>{let t=e[1].dims,i=e[2].dims,s=e[0].dims,o=e[1].dataType,u=!(K.areEqual(t,i)&&K.areEqual(i,s)),d=t,c=K.size(t);if(u){let m=ss.calcShape(ss.calcShape(t,i,!1),s,!1);if(!m)throw new Error("Can't perform where op on the given tensors");d=m,c=K.size(d)}let f=Math.ceil(c/4);return{name:"Where",shaderCache:{inputDependencies:["rank","rank","rank"]},getShaderSource:m=>A0(m,e,d,u,o),getRunData:()=>({outputs:[{dims:d,dataType:o}],dispatchGroup:{x:Math.ceil(c/64/4)},programUniforms:[{type:12,data:f},...ke(s,t,i,d)]})}},h_=e=>{e.compute(R0(e.inputs))}}),m_,ax=ae(()=>{"use strict";v$(),af(),w$(),_$(),$$(),x$(),b$(),C$(),z$(),N$(),O$(),A$(),R$(),D$(),M$(),B$(),P$(),L$(),U$(),j$(),W$(),V$(),F$(),q$(),H$(),G$(),Rw(),K$(),Q$(),Z$(),Y$(),X$(),nf(),J$(),Lw(),ex(),tx(),rx(),Bw(),nx(),mi(),sf(),ix(),m_=new Map([["Abs",[a1]],["Acos",[s1]],["Acosh",[o1]],["Add",[W1]],["ArgMax",[t1,Ip]],["ArgMin",[e1,Ip]],["Asin",[u1]],["Asinh",[l1]],["Atan",[d1]],["Atanh",[c1]],["Attention",[r1]],["AveragePool",[Kw,Gw]],["BatchNormalization",[n1]],["BiasAdd",[i1]],["BiasSplitGelu",[j1]],["Cast",[f1,p1]],["Ceil",[m1]],["Clip",[h1]],["Concat",[X1,J1]],["Conv",[Dp,Rp]],["ConvTranspose",[lw,uw]],["Cos",[g1]],["Cosh",[y1]],["CumSum",[dw,cw]],["DepthToSpace",[pw,fw]],["DequantizeLinear",[t_,r_]],["DFT",[hw,mw]],["Div",[V1]],["Einsum",[gw,yw]],["Elu",[v1,Lo]],["Equal",[F1]],["Erf",[w1]],["Exp",[_1]],["Expand",[vw]],["FastGelu",[ww]],["Floor",[$1]],["FusedConv",[Dp,Rp]],["Gather",[$w,_w]],["GatherElements",[Tw,Ew]],["GatherBlockQuantized",[Sw,kw]],["GatherND",[xw,bw]],["Gelu",[x1]],["Gemm",[Iw,Cw]],["GlobalAveragePool",[Zw,Qw]],["GlobalMaxPool",[e_,Jw]],["Greater",[K1]],["GreaterOrEqual",[Z1]],["GridSample",[zw,Nw]],["GroupQueryAttention",[Uw]],["HardSigmoid",[z1,I1]],["HardSwish",[N1]],["InstanceNormalization",[jw]],["LayerNormalization",[Ww]],["LeakyRelu",[b1,Lo]],["Less",[Q1]],["LessOrEqual",[Y1]],["Log",[L1]],["MatMul",[Vw]],["MatMulNBits",[Fw,qw]],["MaxPool",[Yw,Xw]],["Mul",[q1]],["MultiHeadAttention",[Aw,Ow]],["Neg",[k1]],["Not",[S1]],["Pad",[Hw]],["Pow",[H1]],["QuickGelu",[U1,Lo]],["Range",[n_]],["Reciprocal",[E1]],["ReduceMin",[Qv]],["ReduceMean",[Fv]],["ReduceMax",[Kv]],["ReduceSum",[Yv]],["ReduceProd",[Zv]],["ReduceL1",[qv]],["ReduceL2",[Hv]],["ReduceLogSum",[Jv]],["ReduceLogSumExp",[Gv]],["ReduceSumSquare",[Xv]],["Relu",[T1]],["Resize",[s_,o_]],["RotaryEmbedding",[Pw]],["ScatterND",[a_,i_]],["Sigmoid",[C1]],["Sin",[O1]],["Sinh",[A1]],["Slice",[l_,d_]],["SkipLayerNormalization",[u_]],["Split",[Dw,Mw]],["Sqrt",[R1]],["Softmax",[c_,p_]],["Sub",[G1]],["Tan",[D1]],["Tanh",[M1]],["ThresholdedRelu",[P1,Lo]],["Tile",[f_]],["Transpose",[Ov,Av]],["Where",[h_]]])}),g_,sx=ae(()=>{"use strict";vr(),Cn(),Pe(),g_=class{constructor(e){this.backend=e,this.repo=new Map,this.attributesBound=!1}getArtifact(e){return this.repo.get(e)}setArtifact(e,t){this.repo.set(e,t)}run(e,t,i,s,o){Cr(e.programInfo.name);let u=this.backend.device,d=this.backend.getComputePassEncoder();this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2);let c=[];for(let m of t)c.push({binding:c.length,resource:{buffer:m.buffer}});for(let m of i)c.push({binding:c.length,resource:{buffer:m.buffer}});o&&c.push({binding:c.length,resource:o});let f=u.createBindGroup({layout:e.computePipeline.getBindGroupLayout(0),entries:c,label:e.programInfo.name});if(this.backend.sessionStatus==="capturing"){let m={kernelId:this.backend.currentKernelId,computePipeline:e.computePipeline,bindGroup:f,dispatchGroup:s};this.backend.capturedCommandList.get(this.backend.currentSessionId).push(m)}d.setPipeline(e.computePipeline),d.setBindGroup(0,f),d.dispatchWorkgroups(...s),this.backend.writeTimestamp(this.backend.pendingDispatchNumber*2+1),this.backend.pendingDispatchNumber++,(this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber||this.backend.queryType==="at-passes")&&this.backend.endComputePass(),this.backend.pendingDispatchNumber>=this.backend.maxDispatchNumber&&this.backend.flush(),gr(e.programInfo.name)}dispose(){}build(e,t){Cr(e.name);let i=this.backend.device,s=[];[{feature:"shader-f16",extension:"f16"},{feature:"subgroups",extension:"subgroups"}].forEach(m=>{i.features.has(m.feature)&&s.push(`enable ${m.extension};`)});let o=Nv(t,this.backend.device.limits),u=e.getShaderSource(o),d=`${s.join(`
`)}
${o.additionalImplementations}
${u}`,c=i.createShaderModule({code:d,label:e.name});He("verbose",()=>`[WebGPU] ${e.name} shader code: ${d}`);let f=i.createComputePipeline({compute:{module:c,entryPoint:"main"},layout:"auto",label:e.name});return gr(e.name),{programInfo:e,computePipeline:f,uniformVariablesInfo:o.variablesInfo}}normalizeDispatchGroupSize(e){let t=typeof e=="number"?e:e.x,i=typeof e=="number"?1:e.y||1,s=typeof e=="number"?1:e.z||1,o=this.backend.device.limits.maxComputeWorkgroupsPerDimension;if(t<=o&&i<=o&&s<=o)return[t,i,s];let u=t*i*s,d=Math.ceil(Math.sqrt(u));if(d>o){if(d=Math.ceil(Math.cbrt(u)),d>o)throw new Error("Total dispatch size exceeds WebGPU maximum.");return[d,d,d]}else return[d,d,1]}}}),y_={};us(y_,{WebGpuBackend:()=>v_});var D0,M0,B0,v_,ox=ae(()=>{"use strict";vr(),Ie(),Cn(),Ev(),g$(),ax(),sx(),D0=(e,t)=>{if(t.length!==e.length)throw new Error(`inputDependencies length ${t.length} is not equal to inputTensors length ${e.length}.`);let i=[];for(let s=0;s<e.length;++s){let o=e[s].dataType;switch(t[s]){case"none":{i.push("");break}case"type":{i.push(`${o}`);break}case"rank":{let u=e[s].dims.length;i.push(`${o};${u}`);break}case"dims":{let u=e[s].dims.join(",");i.push(`${o};${u}`);break}default:throw new Error(`unsupported input dependency: ${t[s]}`)}}return i.join("|")},M0=(e,t,i)=>{var o,u;let s=e.name;return(o=e.shaderCache)!=null&&o.hint&&(s+="["+e.shaderCache.hint+"]"),s+=":"+i+`:${D0(t,((u=e.shaderCache)==null?void 0:u.inputDependencies)??new Array(t.length).fill("dims"))}`,s},B0=class{constructor(e){e&&(this.architecture=e.architecture,this.vendor=e.vendor)}isArchitecture(e){return this.architecture===e}isVendor(e){return this.vendor===e}},v_=class{constructor(){this.currentSessionId=null,this.currentKernelId=null,this.commandEncoder=null,this.computePassEncoder=null,this.maxDispatchNumber=16,this.pendingDispatchNumber=0,this.pendingKernels=[],this.pendingQueries=new Map,this.sessionStatus="default",this.capturedCommandList=new Map,this.capturedPendingKernels=new Map,this.sessionExternalDataMapping=new Map}get currentKernelCustomData(){if(this.currentKernelId===null)throw new Error("currentKernelCustomData(): currentKernelId is null. (should not happen)");let e=this.kernelCustomData.get(this.currentKernelId);return e||(e={},this.kernelCustomData.set(this.currentKernelId,e)),e}async initialize(e,t){this.env=e;let i=[],s={requiredLimits:{maxComputeWorkgroupStorageSize:t.limits.maxComputeWorkgroupStorageSize,maxComputeWorkgroupsPerDimension:t.limits.maxComputeWorkgroupsPerDimension,maxStorageBufferBindingSize:t.limits.maxStorageBufferBindingSize,maxBufferSize:t.limits.maxBufferSize,maxComputeInvocationsPerWorkgroup:t.limits.maxComputeInvocationsPerWorkgroup,maxComputeWorkgroupSizeX:t.limits.maxComputeWorkgroupSizeX,maxComputeWorkgroupSizeY:t.limits.maxComputeWorkgroupSizeY,maxComputeWorkgroupSizeZ:t.limits.maxComputeWorkgroupSizeZ},requiredFeatures:i},o=c=>t.features.has(c)&&i.push(c)&&!0;o("chromium-experimental-timestamp-query-inside-passes")||o("timestamp-query"),o("shader-f16"),o("subgroups"),this.device=await t.requestDevice(s);let u=t,d=t.info??(typeof u.requestAdapterInfo=="function"?await u.requestAdapterInfo():void 0);this.adapterInfo=new B0(d),this.gpuDataManager=Iv(this),this.programManager=new g_(this),this.kernels=new Map,this.kernelPersistentData=new Map,this.kernelCustomData=new Map,Jp(e.logLevel,!!e.debug),this.device.onuncapturederror=c=>{c.error instanceof GPUValidationError&&console.error(`An uncaught WebGPU validation error was raised: ${c.error.message}`)},Object.defineProperty(this.env.webgpu,"device",{value:this.device,writable:!1,enumerable:!0,configurable:!0}),Object.defineProperty(this.env.webgpu,"adapter",{value:t,writable:!1,enumerable:!0,configurable:!1}),this.setQueryType()}dispose(){var e;typeof this.querySet<"u"&&this.querySet.destroy(),this.gpuDataManager.dispose(),this.device&&((e=this.env)!=null&&e.webgpu)&&this.device.lost.then(()=>{delete this.env.webgpu.device})}getCommandEncoder(){return this.commandEncoder||(this.commandEncoder=this.device.createCommandEncoder()),this.commandEncoder}getComputePassEncoder(){if(!this.computePassEncoder){let e=this.getCommandEncoder(),t={};this.queryType==="at-passes"&&(t.timestampWrites={querySet:this.querySet,beginningOfPassWriteIndex:this.pendingDispatchNumber*2,endOfPassWriteIndex:this.pendingDispatchNumber*2+1}),this.computePassEncoder=e.beginComputePass(t)}return this.computePassEncoder}endComputePass(){this.computePassEncoder&&(this.computePassEncoder.end(),this.computePassEncoder=null)}flush(){if(!this.commandEncoder)return;Cr(),this.endComputePass();let e;this.queryType!=="none"&&(this.commandEncoder.resolveQuerySet(this.querySet,0,this.pendingDispatchNumber*2,this.queryResolveBuffer,0),e=this.device.createBuffer({size:this.pendingDispatchNumber*2*8,usage:GPUBufferUsage.MAP_READ|GPUBufferUsage.COPY_DST}),this.pendingQueries.set(e,this.pendingKernels),this.pendingKernels=[],this.commandEncoder.copyBufferToBuffer(this.queryResolveBuffer,0,e,0,this.pendingDispatchNumber*2*8)),this.device.queue.submit([this.commandEncoder.finish()]),this.gpuDataManager.refreshPendingBuffers(),this.commandEncoder=null,this.pendingDispatchNumber=0,this.queryType!=="none"&&e.mapAsync(GPUMapMode.READ).then(()=>{var s;let t=new BigUint64Array(e.getMappedRange()),i=this.pendingQueries.get(e);for(let o=0;o<t.length/2;o++){let u=i[o],d=u.kernelId,c=this.kernels.get(d),f=c.kernelType,m=c.kernelName,y=u.programName,w=u.inputTensorViews,$=u.outputTensorViews,S=t[o*2],b=t[o*2+1];typeof this.queryTimeBase>"u"&&(this.queryTimeBase=S);let C=Number(S-this.queryTimeBase),N=Number(b-this.queryTimeBase);if(!Number.isSafeInteger(C)||!Number.isSafeInteger(N))throw new RangeError("incorrect timestamp range");if((s=this.env.webgpu.profiling)!=null&&s.ondata)this.env.webgpu.profiling.ondata({version:1,inputsMetadata:w.map(k=>({dims:k.dims,dataType:Tn(k.dataType)})),outputsMetadata:$.map(k=>({dims:k.dims,dataType:Tn(k.dataType)})),kernelId:d,kernelType:f,kernelName:m,programName:y,startTime:C,endTime:N});else{let k="";w.forEach((A,D)=>{k+=`input[${D}]: [${A.dims}] | ${Tn(A.dataType)}, `});let E="";$.forEach((A,D)=>{E+=`output[${D}]: [${A.dims}] | ${Tn(A.dataType)}, `}),console.log(`[profiling] kernel "${d}|${f}|${m}|${y}" ${k}${E}start time: ${C} ns, execution time: ${N-C} ns`)}Ol("GPU",`${y}::${S}::${b}`)}e.unmap(),this.pendingQueries.delete(e)}),gr()}run(e,t,i,s,o,u){Cr(e.name);let d=[];for(let E=0;E<t.length;++E){let A=t[E].data;if(A===0)continue;let D=this.gpuDataManager.get(A);if(!D)throw new Error(`no GPU data for input: ${A}`);d.push(D)}let{outputs:c,dispatchGroup:f,programUniforms:m}=e.getRunData(t),y=i.length===0?c.map((E,A)=>A):i;if(y.length!==c.length)throw new Error(`Output size ${y.length} must be equal to ${c.length}.`);let w=[],$=[];for(let E=0;E<c.length;++E){if(!Number.isInteger(y[E])||y[E]<-3||y[E]>=u)throw new Error(`Invalid output index: ${y[E]}`);if(y[E]===-3)continue;let A=y[E]===-1,D=y[E]===-2,B=A||D?o(c[E].dataType,c[E].dims):s(y[E],c[E].dataType,c[E].dims);if(w.push(B),B.data===0)continue;let P=this.gpuDataManager.get(B.data);if(!P)throw new Error(`no GPU data for output: ${B.data}`);if(A&&this.temporaryData.push(P),D){let V=this.kernelPersistentData.get(this.currentKernelId);V||(V=[],this.kernelPersistentData.set(this.currentKernelId,V)),V.push(P)}$.push(P)}if(d.length!==t.length||$.length!==w.length){if($.length===0)return gr(e.name),w;throw new Error(`Program ${e.name} has zero-sized tensor(s) in inputs or outputs. This is not supported now.`)}let S;if(m){let E=0,A=[];m.forEach(V=>{let I=typeof V.data=="number"?[V.data]:V.data;if(I.length===0)return;let Y=V.type===10?2:4,te,he;V.type===10?(he=I.length>4?16:I.length>2?8:I.length*Y,te=I.length>4?16:Y*I.length):(he=I.length<=2?I.length*Y:16,te=16),E=Math.ceil(E/he)*he,A.push(E);let ce=V.type===10?8:4;E+=I.length>4?Math.ceil(I.length/ce)*te:I.length*Y});let D=16;E=Math.ceil(E/D)*D;let B=new ArrayBuffer(E);m.forEach((V,I)=>{let Y=A[I],te=typeof V.data=="number"?[V.data]:V.data;if(V.type===6)new Int32Array(B,Y,te.length).set(te);else if(V.type===12)new Uint32Array(B,Y,te.length).set(te);else if(V.type===10)new Uint16Array(B,Y,te.length).set(te);else if(V.type===1)new Float32Array(B,Y,te.length).set(te);else throw new Error(`Unsupported uniform type: ${Tn(V.type)}`)});let P=this.gpuDataManager.create(E,GPUBufferUsage.COPY_DST|GPUBufferUsage.UNIFORM);this.device.queue.writeBuffer(P.buffer,0,B,0,E),this.gpuDataManager.release(P.id),S={offset:0,size:E,buffer:P.buffer}}let b=this.programManager.normalizeDispatchGroupSize(f),C=b[1]===1&&b[2]===1,N=M0(e,t,C),k=this.programManager.getArtifact(N);if(k||(k=this.programManager.build(e,b),this.programManager.setArtifact(N,k),He("info",()=>`[artifact] key: ${N}, programName: ${e.name}`)),m&&k.uniformVariablesInfo){if(m.length!==k.uniformVariablesInfo.length)throw new Error(`Uniform variables count mismatch: expect ${k.uniformVariablesInfo.length}, got ${m.length} in program "${k.programInfo.name}".`);for(let E=0;E<m.length;E++){let A=m[E],D=A.type,B=typeof A.data=="number"?1:A.data.length,[P,V]=k.uniformVariablesInfo[E];if(D!==P||B!==V)throw new Error(`Uniform variable ${E} mismatch: expect type ${P} with size ${V}, got type ${D} with size ${B} in program "${k.programInfo.name}".`)}}if(He("info",()=>`[ProgramManager] run "${e.name}" (key=${N}) with ${b[0]}x${b[1]}x${b[2]}`),this.queryType!=="none"||this.sessionStatus==="capturing"){let E={kernelId:this.currentKernelId,programName:k.programInfo.name,inputTensorViews:t,outputTensorViews:w};this.pendingKernels.push(E),this.sessionStatus==="capturing"&&this.capturedPendingKernels.get(this.currentSessionId).push(E)}return this.programManager.run(k,d,$,b,S),gr(e.name),w}upload(e,t){this.gpuDataManager.upload(e,t)}memcpy(e,t){this.gpuDataManager.memcpy(e,t)}async download(e,t){await this.gpuDataManager.download(e,t)}alloc(e){return this.gpuDataManager.create(e).id}free(e){return this.gpuDataManager.release(e)}createKernel(e,t,i,s){let o=m_.get(e);if(!o)throw new Error(`kernel not implemented: ${e}`);let u={kernelType:e,kernelName:s,kernelEntry:o[0],attributes:[o[1],i]};this.kernels.set(t,u)}releaseKernel(e){let t=this.kernelPersistentData.get(e);if(t){for(let i of t)this.gpuDataManager.release(i.id);this.kernelPersistentData.delete(e)}this.kernelCustomData.delete(e),this.kernels.delete(e)}computeKernel(e,t,i){let s=this.kernels.get(e);if(!s)throw new Error(`kernel not created: ${e}`);let o=s.kernelType,u=s.kernelName,d=s.kernelEntry,c=s.attributes;if(this.currentKernelId!==null)throw new Error(`kernel "[${o}] ${u}" is not allowed to be called recursively`);this.currentKernelId=e,c[0]&&(c[1]=c[0](c[1]),c[0]=void 0),He("info",()=>`[WebGPU] Start to run kernel "[${o}] ${u}"...`);let f=this.env.debug;this.temporaryData=[];try{return f&&this.device.pushErrorScope("validation"),d(t,c[1]),0}catch(m){return i.push(Promise.resolve(`[WebGPU] Kernel "[${o}] ${u}" failed. ${m}`)),1}finally{f&&i.push(this.device.popErrorScope().then(m=>m?`GPU validation error for kernel "[${o}] ${u}": ${m.message}`:null));for(let m of this.temporaryData)this.gpuDataManager.release(m.id);this.temporaryData=[],this.currentKernelId=null}}registerBuffer(e,t,i,s){let o=this.sessionExternalDataMapping.get(e);o||(o=new Map,this.sessionExternalDataMapping.set(e,o));let u=o.get(t),d=this.gpuDataManager.registerExternalBuffer(i,s,u);return o.set(t,[d,i]),d}unregisterBuffers(e){let t=this.sessionExternalDataMapping.get(e);t&&(t.forEach(i=>this.gpuDataManager.unregisterExternalBuffer(i[0])),this.sessionExternalDataMapping.delete(e))}getBuffer(e){let t=this.gpuDataManager.get(e);if(!t)throw new Error(`no GPU data for buffer: ${e}`);return t.buffer}createDownloader(e,t,i){return async()=>{let s=await Ep(this,e,t);return ef(s.buffer,i)}}writeTimestamp(e){this.queryType==="inside-passes"&&this.computePassEncoder.writeTimestamp(this.querySet,e)}setQueryType(){var e;this.queryType="none",(((e=this.env.webgpu.profiling)==null?void 0:e.mode)==="default"||(typeof this.env.trace>"u"?this.env.wasm.trace:this.env.trace))&&(this.device.features.has("chromium-experimental-timestamp-query-inside-passes")?this.queryType="inside-passes":this.device.features.has("timestamp-query")&&(this.queryType="at-passes"),this.queryType!=="none"&&typeof this.querySet>"u"&&(this.querySet=this.device.createQuerySet({type:"timestamp",count:this.maxDispatchNumber*2}),this.queryResolveBuffer=this.device.createBuffer({size:this.maxDispatchNumber*2*8,usage:GPUBufferUsage.COPY_SRC|GPUBufferUsage.QUERY_RESOLVE})))}captureBegin(){He("info","captureBegin"),this.capturedCommandList.get(this.currentSessionId)||this.capturedCommandList.set(this.currentSessionId,[]),this.capturedPendingKernels.get(this.currentSessionId)||this.capturedPendingKernels.set(this.currentSessionId,[]),this.flush(),this.sessionStatus="capturing"}captureEnd(){He("info","captureEnd"),this.flush(),this.sessionStatus="default"}replay(){He("info","replay"),this.sessionStatus="replaying";let e=this.capturedCommandList.get(this.currentSessionId),t=this.capturedPendingKernels.get(this.currentSessionId),i=e.length;this.pendingKernels=[];for(let s=0;s<i;s++){let o=this.getComputePassEncoder(),u=e[s];this.writeTimestamp(this.pendingDispatchNumber*2),o.setPipeline(u.computePipeline),o.setBindGroup(0,u.bindGroup),o.dispatchWorkgroups(...u.dispatchGroup),this.writeTimestamp(this.pendingDispatchNumber*2+1),this.pendingDispatchNumber++,this.queryType!=="none"&&this.pendingKernels.push(t[s]),(this.pendingDispatchNumber>=this.maxDispatchNumber||this.queryType==="at-passes")&&this.endComputePass(),this.pendingDispatchNumber>=this.maxDispatchNumber&&this.flush()}this.flush(),this.sessionStatus="default"}onCreateSession(){this.gpuDataManager.onCreateSession()}onReleaseSession(e){this.unregisterBuffers(e),this.capturedCommandList.has(e)&&this.capturedCommandList.delete(e),this.capturedPendingKernels.has(e)&&this.capturedPendingKernels.delete(e),this.gpuDataManager.onReleaseSession(e)}onRunStart(e){this.currentSessionId=e,this.setQueryType()}}}),w_={};us(w_,{init:()=>__});var kl,P0,__,ux=ae(()=>{"use strict";Ie(),Cn(),Me(),m$(),kl=class $_{constructor(t,i,s,o){this.module=t,this.dataType=i,this.data=s,this.dims=o}getFloat32Array(){if(this.dataType!==1)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new Float32Array:new Float32Array(this.module.HEAP8.buffer,this.data,t)}getBigInt64Array(){if(this.dataType!==7)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new BigInt64Array:new BigInt64Array(this.module.HEAP8.buffer,this.data,t)}getInt32Array(){if(this.dataType!==6)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new Int32Array:new Int32Array(this.module.HEAP8.buffer,this.data,t)}getUint16Array(){if(this.dataType!==10&&this.dataType!==4)throw new Error("Invalid data type");let t=K.size(this.dims);return t===0?new Uint16Array:new Uint16Array(this.module.HEAP8.buffer,this.data,t)}reshape(t){if(K.size(t)!==K.size(this.dims))throw new Error("Invalid new shape");return new $_(this.module,this.dataType,this.data,t)}},P0=class{constructor(e,t,i){this.module=e,this.backend=t,this.customDataOffset=0,this.customDataSize=0,this.adapterInfo=t.adapterInfo,this.deviceLimits=t.device.limits;let s=e.PTR_SIZE,o=i/e.PTR_SIZE,u=s===4?"i32":"i64";this.opKernelContext=Number(e.getValue(s*o++,u));let d=Number(e.getValue(s*o++,u));this.outputCount=Number(e.getValue(s*o++,u)),this.customDataOffset=Number(e.getValue(s*o++,"*")),this.customDataSize=Number(e.getValue(s*o++,u));let c=[];for(let f=0;f<d;f++){let m=Number(e.getValue(s*o++,u)),y=Number(e.getValue(s*o++,"*")),w=Number(e.getValue(s*o++,u)),$=[];for(let S=0;S<w;S++)$.push(Number(e.getValue(s*o++,u)));c.push(new kl(e,m,y,$))}this.inputs=c}get kernelCustomData(){return this.backend.currentKernelCustomData}get customDataBuffer(){return this.module.HEAPU8.subarray(this.customDataOffset,this.customDataOffset+this.customDataSize)}compute(e,t){var d;let i=((d=t==null?void 0:t.inputs)==null?void 0:d.map(c=>typeof c=="number"?this.inputs[c]:c))??this.inputs,s=(t==null?void 0:t.outputs)??[],o=(c,f,m)=>new kl(this.module,f,this.output(c,m),m),u=(c,f)=>{let m=Zi(c,f);if(!m)throw new Error(`Unsupported data type: ${c}`);let y=m>0?this.backend.gpuDataManager.create(m).id:0;return new kl(this.module,c,y,f)};return this.backend.run(e,i,s,o,u,this.outputCount)}output(e,t){let i=this.module.stackSave();try{let s=this.module.PTR_SIZE,o=s===4?"i32":"i64",u=this.module.stackAlloc((1+t.length)*s);this.module.setValue(u,t.length,o);for(let d=0;d<t.length;d++)this.module.setValue(u+s*(d+1),t[d],o);return this.module._JsepOutput(this.opKernelContext,e,u)}catch(s){throw new Error(`Failed to generate kernel's output[${e}] with dims [${t}]. If you are running with pre-allocated output, please make sure the output type/dims are correct. Error: ${s}`)}finally{this.module.stackRestore(i)}}},__=async(e,t,i,s)=>{let o=t.jsepInit;if(!o)throw new Error("Failed to initialize JSEP. The WebAssembly module is not built with JSEP support.");if(e==="webgpu"){let u=(ox(),Vo(y_)).WebGpuBackend,d=new u;await d.initialize(i,s),o("webgpu",[d,c=>d.alloc(Number(c)),c=>d.free(c),(c,f,m,y=!1)=>{if(y)He("verbose",()=>`[WebGPU] jsepCopyGpuToGpu: src=${Number(c)}, dst=${Number(f)}, size=${Number(m)}`),d.memcpy(Number(c),Number(f));else{He("verbose",()=>`[WebGPU] jsepCopyCpuToGpu: dataOffset=${Number(c)}, gpuDataId=${Number(f)}, size=${Number(m)}`);let w=t.HEAPU8.subarray(Number(c>>>0),Number(c>>>0)+Number(m));d.upload(Number(f),w)}},async(c,f,m)=>{He("verbose",()=>`[WebGPU] jsepCopyGpuToCpu: gpuDataId=${c}, dataOffset=${f}, size=${m}`),await d.download(Number(c),()=>t.HEAPU8.subarray(Number(f)>>>0,Number(f+m)>>>0))},(c,f,m)=>d.createKernel(c,Number(f),m,t.UTF8ToString(t._JsepGetNodeName(Number(f)))),c=>d.releaseKernel(c),(c,f,m,y)=>{He("verbose",()=>`[WebGPU] jsepRun: sessionHandle=${m}, kernel=${c}, contextDataOffset=${f}`);let w=new P0(t,d,Number(f));return d.computeKernel(Number(c),w,y)},()=>d.captureBegin(),()=>d.captureEnd(),()=>d.replay()])}else{let u=new Cv(i);o("webnn",[u,()=>u.reserveTensorId(),d=>u.releaseTensorId(d),async(d,c,f,m,y)=>u.ensureTensor(d,c,f,m,y),(d,c)=>{u.uploadTensor(d,c)},async(d,c)=>u.downloadTensor(d,c),(d,c)=>u.registerMLContext(d,c),!!i.trace])}}}),L0,pf,ff,pi,U0,_p,Ll,hf,mf,Do,j0,qi,x_,b_,$p,gf,yf,vf,S_=ae(()=>{"use strict";vr(),p$(),f$(),Ie(),ra(),Qp(),Xp(),L0=(e,t)=>{it()._OrtInit(e,t)!==0&&Qe("Can't initialize onnxruntime.")},pf=async e=>{L0(e.wasm.numThreads,Rl(e.logLevel))},ff=async(e,t)=>{var s,o;(o=(s=it()).asyncInit)==null||o.call(s);let i=e.webgpu.adapter;if(t==="webgpu"){if(typeof navigator>"u"||!navigator.gpu)throw new Error("WebGPU is not supported in current environment");if(i){if(typeof i.limits!="object"||typeof i.features!="object"||typeof i.requestDevice!="function")throw new Error("Invalid GPU adapter set in `env.webgpu.adapter`. It must be a GPUAdapter object.")}else{let u=e.webgpu.powerPreference;if(u!==void 0&&u!=="low-power"&&u!=="high-performance")throw new Error(`Invalid powerPreference setting: "${u}"`);let d=e.webgpu.forceFallbackAdapter;if(d!==void 0&&typeof d!="boolean")throw new Error(`Invalid forceFallbackAdapter setting: "${d}"`);if(i=await navigator.gpu.requestAdapter({powerPreference:u,forceFallbackAdapter:d}),!i)throw new Error('Failed to get GPU adapter. You may need to enable flag "--enable-unsafe-webgpu" if you are using Chrome.')}}if(t==="webnn"&&(typeof navigator>"u"||!navigator.ml))throw new Error("WebNN is not supported in current environment");{let u=(ux(),Vo(w_)).init;t==="webgpu"&&await u("webgpu",it(),e,i),t==="webnn"&&await u("webnn",it(),e)}},pi=new Map,U0=e=>{let t=it(),i=t.stackSave();try{let s=t.PTR_SIZE,o=t.stackAlloc(2*s);t._OrtGetInputOutputCount(e,o,o+s)!==0&&Qe("Can't get session input/output count.");let u=s===4?"i32":"i64";return[Number(t.getValue(o,u)),Number(t.getValue(o+s,u))]}finally{t.stackRestore(i)}},_p=(e,t)=>{let i=it(),s=i.stackSave(),o=0;try{let u=i.PTR_SIZE,d=i.stackAlloc(2*u);i._OrtGetInputOutputMetadata(e,t,d,d+u)!==0&&Qe("Can't get session input/output metadata.");let c=Number(i.getValue(d,"*"));o=Number(i.getValue(d+u,"*"));let f=i.HEAP32[o/4];if(f===0)return[c,0];let m=i.HEAPU32[o/4+1],y=[];for(let w=0;w<m;w++){let $=Number(i.getValue(o+8+w*u,"*"));y.push($!==0?i.UTF8ToString($):Number(i.getValue(o+8+(w+m)*u,"*")))}return[c,f,y]}finally{i.stackRestore(s),o!==0&&i._OrtFree(o)}},Ll=e=>{let t=it(),i=t._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a session. failed to allocate a buffer of size ${e.byteLength}.`);return t.HEAPU8.set(e,i),[i,e.byteLength]},hf=async(e,t)=>{var w,$,S,b;let i,s,o=it();Array.isArray(e)?[i,s]=e:e.buffer===o.HEAPU8.buffer?[i,s]=[e.byteOffset,e.byteLength]:[i,s]=Ll(e);let u=0,d=0,c=0,f=[],m=[],y=[];try{if([d,f]=await xv(t),(t==null?void 0:t.externalData)&&o.mountExternalData){let I=[];for(let Y of t.externalData){let te=typeof Y=="string"?Y:Y.path,he=typeof Y=="string"?Y:Y.data;I.push(jl(he).then(ce=>{o.mountExternalData(te,ce)}))}await Promise.all(I)}for(let I of(t==null?void 0:t.executionProviders)??[])if((typeof I=="string"?I:I.name)==="webnn"){if(o.shouldTransferToMLTensor=!1,typeof I!="string"){let Y=I,te=Y==null?void 0:Y.context,he=Y==null?void 0:Y.gpuDevice,ce=Y==null?void 0:Y.deviceType,pe=Y==null?void 0:Y.powerPreference;te?o.currentContext=te:he?o.currentContext=await o.webnnCreateMLContext(he):o.currentContext=await o.webnnCreateMLContext({deviceType:ce,powerPreference:pe})}else o.currentContext=await o.webnnCreateMLContext();break}u=await o._OrtCreateSession(i,s,d),(w=o.webgpuOnCreateSession)==null||w.call(o,u),u===0&&Qe("Can't create a session."),($=o.jsepOnCreateSession)==null||$.call(o),o.currentContext&&(o.webnnRegisterMLContext(u,o.currentContext),o.currentContext=void 0,o.shouldTransferToMLTensor=!0);let[C,N]=U0(u),k=!!(t!=null&&t.enableGraphCapture),E=[],A=[],D=[],B=[],P=[];for(let I=0;I<C;I++){let[Y,te,he]=_p(u,I);Y===0&&Qe("Can't get an input name."),m.push(Y);let ce=o.UTF8ToString(Y);E.push(ce),D.push(te===0?{name:ce,isTensor:!1}:{name:ce,isTensor:!0,type:Tn(te),shape:he})}for(let I=0;I<N;I++){let[Y,te,he]=_p(u,I+C);Y===0&&Qe("Can't get an output name."),y.push(Y);let ce=o.UTF8ToString(Y);A.push(ce),B.push(te===0?{name:ce,isTensor:!1}:{name:ce,isTensor:!0,type:Tn(te),shape:he});{if(k&&(t==null?void 0:t.preferredOutputLocation)===void 0){P.push("gpu-buffer");continue}let pe=typeof(t==null?void 0:t.preferredOutputLocation)=="string"?t.preferredOutputLocation:((S=t==null?void 0:t.preferredOutputLocation)==null?void 0:S[ce])??"cpu",G=o.webnnIsGraphOutput;if(pe==="cpu"&&G&&G(u,ce)){P.push("ml-tensor-cpu-output");continue}if(pe!=="cpu"&&pe!=="cpu-pinned"&&pe!=="gpu-buffer"&&pe!=="ml-tensor")throw new Error(`Not supported preferred output location: ${pe}.`);if(k&&pe!=="gpu-buffer")throw new Error(`Not supported preferred output location: ${pe}. Only 'gpu-buffer' location is supported when enableGraphCapture is true.`);P.push(pe)}}let V=null;return P.some(I=>I==="gpu-buffer"||I==="ml-tensor"||I==="ml-tensor-cpu-output")&&(c=o._OrtCreateBinding(u),c===0&&Qe("Can't create IO binding."),V={handle:c,outputPreferredLocations:P,outputPreferredLocationsEncoded:P.map(I=>I==="ml-tensor-cpu-output"?"ml-tensor":I).map(I=>kp(I))}),pi.set(u,[u,m,y,V,k,!1]),[u,E,A,D,B]}catch(C){throw m.forEach(N=>o._OrtFree(N)),y.forEach(N=>o._OrtFree(N)),c!==0&&o._OrtReleaseBinding(c)!==0&&Qe("Can't release IO binding."),u!==0&&o._OrtReleaseSession(u)!==0&&Qe("Can't release session."),C}finally{o._free(i),d!==0&&o._OrtReleaseSessionOptions(d)!==0&&Qe("Can't release session options."),f.forEach(C=>o._free(C)),(b=o.unmountExternalData)==null||b.call(o)}},mf=e=>{var f,m,y;let t=it(),i=pi.get(e);if(!i)throw new Error(`cannot release session. invalid session id: ${e}`);let[s,o,u,d,c]=i;d&&(c&&t._OrtClearBoundOutputs(d.handle)!==0&&Qe("Can't clear bound outputs."),t._OrtReleaseBinding(d.handle)!==0&&Qe("Can't release IO binding.")),(f=t.jsepOnReleaseSession)==null||f.call(t,e),(m=t.webnnOnReleaseSession)==null||m.call(t,e),(y=t.webgpuOnReleaseSession)==null||y.call(t,e),o.forEach(w=>t._OrtFree(w)),u.forEach(w=>t._OrtFree(w)),t._OrtReleaseSession(s)!==0&&Qe("Can't release session."),pi.delete(e)},Do=new Map,j0=1,qi=new Map,x_=e=>{let t=it(),i=t._malloc(e.byteLength);if(i===0)throw new Error(`Can't create a LoRA adapter. failed to allocate a buffer of size ${e.byteLength}.`);try{t.HEAPU8.set(e,i);let s=t._OrtCreateLoraAdapter(i,e.byteLength);s===0&&Qe("Can't create a LoRA adapter.");let o=j0++;return Do.set(o,s),o}finally{t._free(i)}},b_=e=>{let t=it(),i=Do.get(e);if(i===void 0)throw new Error(`cannot release LoRA adapter. invalid adapter id: ${e}`);if(qi.has(e))throw new Error(`cannot release LoRA adapter. the adapter is used by a run in progress. adapter id: ${e}`);t._OrtReleaseLoraAdapter(i)!==0&&Qe("Can't release LoRA adapter."),Do.delete(e)},$p=async(e,t,i,s,o,u,d=!1)=>{if(!e){t.push(0);return}let c=it(),f=c.PTR_SIZE,m=e[0],y=e[1],w=e[3],$=w,S,b;if(m==="string"&&(w==="gpu-buffer"||w==="ml-tensor"))throw new Error("String tensor is not supported on GPU.");if(d&&w!=="gpu-buffer")throw new Error(`External buffer must be provided for input/output index ${u} when enableGraphCapture is true.`);if(w==="gpu-buffer"){let k=e[2].gpuBuffer;b=Zi(Qi(m),y);{let E=c.jsepRegisterBuffer;if(!E)throw new Error('Tensor location "gpu-buffer" is not supported without using WebGPU.');S=E(s,u,k,b)}}else if(w==="ml-tensor"){let k=e[2].mlTensor;b=Zi(Qi(m),y);let E=c.webnnRegisterMLTensor;if(!E)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');S=E(s,k,Qi(m),y)}else{let k=e[2];if(Array.isArray(k)){b=f*k.length,S=c._malloc(b),i.push(S);for(let E=0;E<k.length;E++){if(typeof k[E]!="string")throw new TypeError(`tensor data at index ${E} is not a string`);c.setValue(S+E*f,Hr(k[E],i),"*")}}else{let E=c.webnnIsGraphInput,A=c.webnnIsGraphOutput;if(m!=="string"&&E&&A){let D=c.UTF8ToString(o);if(E(s,D)||A(s,D)){let B=Qi(m);b=Zi(B,y),$="ml-tensor";let P=c.webnnCreateTemporaryTensor,V=c.webnnUploadTensor;if(!P||!V)throw new Error('Tensor location "ml-tensor" is not supported without using WebNN.');let I=await P(s,B,y);V(I,new Uint8Array(k.buffer,k.byteOffset,k.byteLength)),S=I}else b=k.byteLength,S=c._malloc(b),i.push(S),c.HEAPU8.set(new Uint8Array(k.buffer,k.byteOffset,b),S)}else b=k.byteLength,S=c._malloc(b),i.push(S),c.HEAPU8.set(new Uint8Array(k.buffer,k.byteOffset,b),S)}}let C=c.stackSave(),N=c.stackAlloc(4*y.length);try{y.forEach((E,A)=>c.setValue(N+A*f,E,f===4?"i32":"i64"));let k=c._OrtCreateTensor(Qi(m),S,b,N,y.length,kp($));k===0&&Qe(`Can't create tensor for input/output. session=${s}, index=${u}.`),t.push(k)}finally{c.stackRestore(C)}},gf=async(e,t,i,s,o,u,d=[])=>{var G,me,ye,ge;let c=it(),f=c.PTR_SIZE,m=pi.get(e);if(!m)throw new Error(`cannot run inference. invalid session id: ${e}`);let y=m[0],w=m[1],$=m[2],S=m[3],b=m[4],C=m[5],N=[];if(d.length>0){if(S)throw new Error("LoRA adapters are not supported for a session that uses IO binding, e.g. when an output is preferred to be on GPU, or when the WebNN execution provider produces an output.");for(let ee of d){let re=Do.get(ee);if(re===void 0)throw new Error(`cannot run inference. invalid LoRA adapter id: ${ee}`);N.push(re)}}let k=t.length,E=s.length,A=0,D=[],B=[],P=[],V=[],I=[],Y=c.stackSave(),te=c.stackAlloc(k*f),he=c.stackAlloc(k*f),ce=c.stackAlloc(E*f),pe=c.stackAlloc(E*f);try{for(let O of d)qi.set(O,(qi.get(O)??0)+1);[A,D]=$v(u,N),Yi("wasm prepareInputOutputTensor");for(let O=0;O<k;O++)await $p(i[O],B,V,e,w[t[O]],t[O],b);for(let O=0;O<E;O++)await $p(o[O],P,V,e,$[s[O]],k+s[O],b);Xi("wasm prepareInputOutputTensor");for(let O=0;O<k;O++)c.setValue(te+O*f,B[O],"*"),c.setValue(he+O*f,w[t[O]],"*");for(let O=0;O<E;O++)c.setValue(ce+O*f,P[O],"*"),c.setValue(pe+O*f,$[s[O]],"*");if(S&&!C){let{handle:O,outputPreferredLocations:F,outputPreferredLocationsEncoded:ne}=S;if(w.length!==k)throw new Error(`input count from feeds (${k}) is expected to be always equal to model's input count (${w.length}).`);Yi("wasm bindInputsOutputs");for(let X=0;X<k;X++){let ve=t[X];await c._OrtBindInput(O,w[ve],B[X])!==0&&Qe(`Can't bind input[${X}] for session=${e}.`)}for(let X=0;X<E;X++){let ve=s[X];(G=o[X])!=null&&G[3]?(I.push(P[X]),c._OrtBindOutput(O,$[ve],P[X],0)!==0&&Qe(`Can't bind pre-allocated output[${X}] for session=${e}.`)):c._OrtBindOutput(O,$[ve],0,ne[ve])!==0&&Qe(`Can't bind output[${X}] to ${F[X]} for session=${e}.`)}Xi("wasm bindInputsOutputs"),pi.set(e,[y,w,$,S,b,!0])}(me=c.jsepOnRunStart)==null||me.call(c,y),(ye=c.webnnOnRunStart)==null||ye.call(c,y);let ee;S?ee=await c._OrtRunWithBinding(y,S.handle,E,ce,A):ee=await c._OrtRun(y,he,te,k,pe,E,ce,A),ee!==0&&Qe("failed to call OrtRun().");let re=[],se=[];Yi("wasm ProcessOutputTensor");for(let O=0;O<E;O++){let F=Number(c.getValue(ce+O*f,"*"));if(F===P[O]||I.includes(P[O])){re.push(o[O]),F!==P[O]&&c._OrtReleaseTensor(F)!==0&&Qe("Can't release tensor.");continue}let ne=c.stackSave(),X=c.stackAlloc(4*f),ve=!1,$e,Te=0;try{c._OrtGetTensorData(F,X,X+f,X+2*f,X+3*f)!==0&&Qe(`Can't access output tensor data on index ${O}.`);let Re=f===4?"i32":"i64",Ae=Number(c.getValue(X,Re));Te=c.getValue(X+f,"*");let ct=c.getValue(X+f*2,"*"),er=Number(c.getValue(X+f*3,Re)),Dt=[];for(let rt=0;rt<er;rt++)Dt.push(Number(c.getValue(ct+rt*f,Re)));c._OrtFree(ct)!==0&&Qe("Can't free memory for tensor dims.");let pt=Dt.reduce((rt,at)=>rt*at,1);$e=Tn(Ae);let Ve=S==null?void 0:S.outputPreferredLocations[s[O]];if($e==="string"){if(Ve==="gpu-buffer"||Ve==="ml-tensor")throw new Error("String tensor is not supported on GPU.");let rt=[];for(let at=0;at<pt;at++){let St=c.getValue(Te+at*f,"*"),Gt=c.getValue(Te+(at+1)*f,"*"),De=at===pt-1?void 0:Gt-St;rt.push(c.UTF8ToString(St,De))}re.push([$e,Dt,rt,"cpu"])}else if(Ve==="gpu-buffer"&&pt>0){let rt=c.jsepGetBuffer;if(!rt)throw new Error('preferredLocation "gpu-buffer" is not supported without using WebGPU.');let at=rt(Te),St=Zi(Ae,pt);if(St===void 0||!Zp($e))throw new Error(`Unsupported data type: ${$e}`);ve=!0,re.push([$e,Dt,{gpuBuffer:at,download:c.jsepCreateDownloader(at,St,$e),dispose:()=>{c._OrtReleaseTensor(F)!==0&&Qe("Can't release tensor.")}},"gpu-buffer"])}else if(Ve==="ml-tensor"&&pt>0){let rt=c.webnnEnsureTensor,at=c.webnnIsGraphInputOutputTypeSupported;if(!rt||!at)throw new Error('preferredLocation "ml-tensor" is not supported without using WebNN.');if(Zi(Ae,pt)===void 0||!Yp($e))throw new Error(`Unsupported data type: ${$e}`);if(!at(e,$e,!1))throw new Error(`preferredLocation "ml-tensor" for ${$e} output is not supported by current WebNN Context.`);let St=await rt(e,Te,Ae,Dt,!1);ve=!0,re.push([$e,Dt,{mlTensor:St,download:c.webnnCreateMLTensorDownloader(Te,$e),dispose:()=>{c.webnnReleaseTensorId(Te),c._OrtReleaseTensor(F)}},"ml-tensor"])}else if(Ve==="ml-tensor-cpu-output"&&pt>0){let rt=c.webnnCreateMLTensorDownloader(Te,$e)(),at=re.length;ve=!0,se.push((async()=>{let St=[at,await rt];return c.webnnReleaseTensorId(Te),c._OrtReleaseTensor(F),St})()),re.push([$e,Dt,[],"cpu"])}else{let rt=Ul($e),at=new rt(pt);new Uint8Array(at.buffer,at.byteOffset,at.byteLength).set(c.HEAPU8.subarray(Te,Te+at.byteLength)),re.push([$e,Dt,at,"cpu"])}}finally{c.stackRestore(ne),$e==="string"&&Te&&c._free(Te),ve||c._OrtReleaseTensor(F)}}S&&!b&&(c._OrtClearBoundOutputs(S.handle)!==0&&Qe("Can't clear bound outputs."),pi.set(e,[y,w,$,S,b,!1]));for(let[O,F]of await Promise.all(se))re[O][2]=F;return Xi("wasm ProcessOutputTensor"),re}finally{(ge=c.webnnOnRunEnd)==null||ge.call(c,y),c.stackRestore(Y),B.forEach(ee=>c._OrtReleaseTensor(ee)),P.forEach(ee=>c._OrtReleaseTensor(ee)),V.forEach(ee=>c._free(ee)),A!==0&&c._OrtReleaseRunOptions(A),D.forEach(ee=>c._free(ee));for(let ee of d){let re=qi.get(ee)-1;re===0?qi.delete(ee):qi.set(ee,re)}}},yf=e=>{let t=it(),i=pi.get(e);if(!i)throw new Error("invalid session id");let s=i[0],o=t._OrtEndProfiling(s);o===0&&Qe("Can't get an profile file name."),t._OrtFree(o)},vf=e=>{let t=[];for(let i of e){let s=i[2];!Array.isArray(s)&&"buffer"in s&&t.push(s.buffer)}return t}}),on,or,ns,Mo,Bo,El,xp,Tl,Hi,Gi,W0,k_,E_,T_,C_,I_,z_,N_,O_,A_,wf=ae(()=>{"use strict";vr(),S_(),ra(),Gp(),Xp(),on=()=>!!dt.wasm.proxy&&typeof document<"u",ns=!1,Mo=!1,Bo=!1,Tl=new Map,Hi=(e,t)=>{let i=Tl.get(e);i?i.push(t):Tl.set(e,[t])},Gi=()=>{if(ns||!Mo||Bo||!or)throw new Error("worker not ready")},W0=e=>{switch(e.data.type){case"init-wasm":ns=!1,e.data.err?(Bo=!0,xp[1](e.data.err)):(Mo=!0,xp[0]()),El&&(URL.revokeObjectURL(El),El=void 0);break;case"init-ep":case"copy-from":case"create":case"release":case"run":case"end-profiling":{let t=Tl.get(e.data.type);e.data.err?t.shift()[1](e.data.err):t.shift()[0](e.data.out);break}default:}},k_=async()=>{if(!Mo){if(ns)throw new Error("multiple calls to 'initWasm()' detected.");if(Bo)throw new Error("previous call to 'initWasm()' failed.");if(ns=!0,on())return new Promise((e,t)=>{or==null||or.terminate(),wv().then(([i,s])=>{try{or=s,or.onerror=u=>t(u),or.onmessage=W0,xp=[e,t];let o={type:"init-wasm",in:dt};!o.in.wasm.wasmPaths&&(i||Sp)&&(o.in.wasm.wasmPaths={wasm:new URL("/assets/ort-wasm-simd-threaded.jsep-Dt5UNR3U.wasm",import.meta.url).href}),or.postMessage(o),El=i}catch(o){t(o)}},t)});try{await Kp(dt.wasm),await pf(dt),Mo=!0}catch(e){throw Bo=!0,e}finally{ns=!1}}},E_=async e=>{if(on())return Gi(),new Promise((t,i)=>{Hi("init-ep",[t,i]);let s={type:"init-ep",in:{epName:e,env:dt}};or.postMessage(s)});await ff(dt,e)},T_=async e=>on()?(Gi(),new Promise((t,i)=>{Hi("copy-from",[t,i]);let s={type:"copy-from",in:{buffer:e}};or.postMessage(s,[e.buffer])})):Ll(e),C_=async(e,t)=>{if(on()){if(t!=null&&t.preferredOutputLocation)throw new Error('session option "preferredOutputLocation" is not supported for proxy.');return Gi(),new Promise((i,s)=>{Hi("create",[i,s]);let o={type:"create",in:{model:e,options:{...t}}},u=[];e instanceof Uint8Array&&u.push(e.buffer),or.postMessage(o,u)})}else return hf(e,t)},I_=async e=>{if(on())return Gi(),new Promise((t,i)=>{Hi("release",[t,i]);let s={type:"release",in:e};or.postMessage(s)});mf(e)},z_=async e=>{if(on())throw new Error("LoRA adapter is not supported for proxy.");let t=typeof e=="string"?await jl(e):e;return x_(t)},N_=async e=>{if(on())throw new Error("LoRA adapter is not supported for proxy.");b_(e)},O_=async(e,t,i,s,o,u,d)=>{if(on()){if(d.length>0)throw new Error("LoRA adapter is not supported for proxy.");if(i.some(c=>c[3]!=="cpu"))throw new Error("input tensor on GPU is not supported for proxy.");if(o.some(c=>c))throw new Error("pre-allocated output tensor is not supported for proxy.");return Gi(),new Promise((c,f)=>{Hi("run",[c,f]);let m=i,y={type:"run",in:{sessionId:e,inputIndices:t,inputs:m,outputIndices:s,options:u}};or.postMessage(y,vf(m))})}else return gf(e,t,i,s,o,u,d)},A_=async e=>{if(on())return Gi(),new Promise((t,i)=>{Hi("end-profiling",[t,i]);let s={type:"end-profiling",in:e};or.postMessage(s)});yf(e)}}),_f,R_=ae(()=>{"use strict";vr(),wf(),_f=class{async loadAdapter(e){Cr(),this.adapterId=await z_(e),gr()}async dispose(){return N_(this.adapterId)}}}),bp,V0,D_,lx=ae(()=>{"use strict";vr(),R_(),wf(),Ie(),Hp(),Xp(),bp=(e,t)=>{switch(e.location){case"cpu":return[e.type,e.dims,e.data,"cpu"];case"gpu-buffer":return[e.type,e.dims,{gpuBuffer:e.gpuBuffer},"gpu-buffer"];case"ml-tensor":return[e.type,e.dims,{mlTensor:e.mlTensor},"ml-tensor"];default:throw new Error(`invalid data location: ${e.location} for ${t()}`)}},V0=e=>{switch(e[3]){case"cpu":return new Gr(e[0],e[2],e[1]);case"gpu-buffer":{let t=e[0];if(!Zp(t))throw new Error(`not supported data type: ${t} for deserializing GPU tensor`);let{gpuBuffer:i,download:s,dispose:o}=e[2];return Gr.fromGpuBuffer(i,{dataType:t,dims:e[1],download:s,dispose:o})}case"ml-tensor":{let t=e[0];if(!Yp(t))throw new Error(`not supported data type: ${t} for deserializing MLTensor tensor`);let{mlTensor:i,download:s,dispose:o}=e[2];return Gr.fromMLTensor(i,{dataType:t,dims:e[1],download:s,dispose:o})}default:throw new Error(`invalid data location: ${e[3]}`)}},D_=class{async fetchModelAndCopyToWasmMemory(e){return T_(await jl(e))}async loadModel(e,t){Cr();let i;typeof e=="string"?i=await this.fetchModelAndCopyToWasmMemory(e):i=e,[this.sessionId,this.inputNames,this.outputNames,this.inputMetadata,this.outputMetadata]=await C_(i,t),gr()}async dispose(){return I_(this.sessionId)}async run(e,t,i,s=[]){Cr();let o=s.map(S=>{if(!(S instanceof _f))throw new Error("LoRA adapter was not created by the WebAssembly backend.");return S.adapterId}),u=[],d=[];Object.entries(e).forEach(S=>{let b=S[0],C=S[1],N=this.inputNames.indexOf(b);if(N===-1)throw new Error(`invalid input '${b}'`);u.push(C),d.push(N)});let c=[],f=[];Object.entries(t).forEach(S=>{let b=S[0],C=S[1],N=this.outputNames.indexOf(b);if(N===-1)throw new Error(`invalid output '${b}'`);c.push(C),f.push(N)});let m=u.map((S,b)=>bp(S,()=>`input "${this.inputNames[d[b]]}"`)),y=c.map((S,b)=>S?bp(S,()=>`output "${this.outputNames[f[b]]}"`):null),w=await O_(this.sessionId,d,m,f,y,i,o),$={};for(let S=0;S<w.length;S++)$[this.outputNames[f[S]]]=c[S]??V0(w[S]);return gr(),$}startProfiling(){}endProfiling(){A_(this.sessionId)}}}),M_,dx=ae(()=>{"use strict";M_=e=>{if(e!=null&&e.epContextDataRead)throw new Error('session option "epContextDataRead" is not supported by ONNX Runtime Web')}}),B_={};us(B_,{OnnxruntimeWebAssemblyBackend:()=>Pp,initializeFlags:()=>Bp,wasmBackend:()=>P_});var Bp,Pp,P_,cx=ae(()=>{"use strict";vr(),R_(),wf(),lx(),dx(),Bp=()=>{(typeof dt.wasm.initTimeout!="number"||dt.wasm.initTimeout<0)&&(dt.wasm.initTimeout=0);let e=dt.wasm.simd;if(typeof e!="boolean"&&e!==void 0&&e!=="fixed"&&e!=="relaxed"&&(console.warn(`Property "env.wasm.simd" is set to unknown value "${e}". Reset it to \`false\` and ignore SIMD feature checking.`),dt.wasm.simd=!1),typeof dt.wasm.proxy!="boolean"&&(dt.wasm.proxy=!1),typeof dt.wasm.trace!="boolean"&&(dt.wasm.trace=!1),typeof dt.wasm.numThreads!="number"||!Number.isInteger(dt.wasm.numThreads)||dt.wasm.numThreads<=0)if(typeof self<"u"&&!self.crossOriginIsolated)dt.wasm.numThreads=1;else{let t=typeof navigator>"u"?G2("node:os").cpus().length:navigator.hardwareConcurrency;dt.wasm.numThreads=Math.min(4,Math.ceil((t||1)/2))}},Pp=class{async init(e){Bp(),await k_(),await E_(e)}async createInferenceSessionHandler(e,t){M_(t);let i=new D_;return await i.loadModel(e,t),i}async createLoraAdapterHandler(e){let t=new _f;return await t.loadAdapter(e),t}},P_=new Pp});vr();vr();vr();var px="1.31.1";{let e=(cx(),Vo(B_)).wasmBackend;is("webgpu",e,5),is("webnn",e,5),is("cpu",e,10),is("wasm",e,10)}Object.defineProperty(dt.versions,"web",{value:px,enumerable:!0});/**
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
 */const fx=8;async function hx(e=fx){const t={};for(let i=1;i<=e;i++)try{t[String(i)]=await qp.create(`/model_${i}.onnx`)}catch{console.warn(`Modelo /model_${i}.onnx não encontrado ou ainda não treinado.`)}return t}async function L_(e,t,i=null,s=new Set){const o=new Gr("float32",Float32Array.from(t),[1,t.length]),u=await e.run({state:o}),d=Array.from(u.q_values.data),c=d.length,f=t.join("");if(c>1){i!==null&&i>=0&&i<c&&(d[i]=-1/0);const w=[...d];for(let $=0;$<c;$++)s.has(`${f}:${$}`)&&(w[$]=-1/0);if(Math.max(...w)>-1/0)for(let $=0;$<c;$++)d[$]=w[$]}let m=0,y=-1/0;for(let w=0;w<c;w++)d[w]>y&&(y=d[w],m=w);return{action:m,qValues:d}}async function mx(e,t,i,s=4){if(!e)return s;let o=[...t],u=null;const d=new Set,c=o.length*2;for(let f=1;f<=c;f++){if(Nl(o))return f-1;const m=o.join(""),{action:y}=await L_(e,o,u,d);if(d.add(`${m}:${y}`),u=y,o=Wo(o,i,y),Nl(o))return f}return s}function U_(){const e=new Date,t=e.getFullYear(),i=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getDate()).padStart(2,"0");return`${t}-${i}-${s}`}function gx(e=U_()){const t=new Date("2026-01-01T00:00:00"),i=new Date(`${e}T00:00:00`),s=Math.floor((i-t)/(1e3*60*60*24));return Math.max(1,s+1)}function F0(e){let t=2166136261;for(let s=0;s<e.length;s++)t^=e.charCodeAt(s),t=Math.imul(t,16777619);let i=t>>>0;return function(){i|=0,i=i+1831565813|0;let o=Math.imul(i^i>>>15,1|i);return o=o+Math.imul(o^o>>>7,61|o)^o,((o^o>>>14)>>>0)/4294967296}}const q0=[5,6,7,8],H0=8,j_="pyramidle_stats_v1",G0="pyramidle_daily_",Cl=[{id:"slide-game",label:"Jogo"},{id:"slide-math",label:"01 Tabuleiro"},{id:"slide-ai",label:"02 Resolvedor"}];function yx(){try{const e=localStorage.getItem(j_);if(e)return JSON.parse(e)}catch{}return{played:0,wins:0,currentStreak:0,maxStreak:0,lastWinDate:null}}function vx(){const e=et.useMemo(()=>new URLSearchParams(window.location.search),[]),t=et.useMemo(()=>U_(),[]),i=et.useMemo(()=>gx(t),[t]),[s,o]=et.useState(()=>e.get("mode")==="free"?"free":"daily"),[u,d]=et.useState(()=>Number(e.get("size"))||5),[c,f]=et.useState(null),[m,y]=et.useState([]),[w,$]=et.useState([]),[S,b]=et.useState(0),[C,N]=et.useState(4),[k,E]=et.useState(!1),[A,D]=et.useState(!1),[B,P]=et.useState(()=>e.has("aiStep")?Number(e.get("aiStep")):null),[V,I]=et.useState(!0),[Y,te]=et.useState(()=>Number(e.get("slide"))||0),[he,ce]=et.useState(()=>yx()),[pe,G]=et.useState(()=>{try{const De=localStorage.getItem(`${G0}${t}`);return De?JSON.parse(De):null}catch{return null}}),[me,ye]=et.useState(()=>e.get("modal")==="stats"),[ge,ee]=et.useState(()=>e.get("modal")==="help"),[re,se]=et.useState(()=>e.get("modal")==="gameover"),O=et.useRef(null),F=et.useRef(null),ne=et.useRef(new Set),X=q0[(i-1)%q0.length],ve=s==="daily"?X:u,$e=et.useMemo(()=>im(ve,760,420),[ve]);et.useEffect(()=>{hx(H0).then(De=>f(De)).catch(De=>console.error("Erro ao carregar modelos ONNX:",De))},[]);const Te=(De=s,We=ve,Ge=null)=>{E(!1),e.has("modal")||se(!1),P(e.has("aiStep")?Number(e.get("aiStep")):null),D(!1),F.current=null,ne.current=new Set;const xt=im(We,760,420),Mt=De==="daily"?F0(`PYRAMIDLE-${t}-BASE-${We}`):Ge?F0(Ge):Math.random,ur=Math.min(xt.balls.length,We+3),In=We<=2?1:Math.min(We-1,7),{initialState:Kt,optimalHintClicks:gi}=V2(xt.adjMatrix,Mt,ur,In);y(Kt),$(Kt),b(0);const Ir=c?c[String(We)]:null;mx(Ir,Kt,xt.adjMatrix,gi).then(un=>N(un))};et.useEffect(()=>{Te(s,ve)},[s,ve,c]),et.useEffect(()=>{var We;const De=Number(e.get("slide"));if(De>0&&O.current){const Ge=(We=Cl[De])==null?void 0:We.id,xt=document.getElementById(Ge);xt&&xt.scrollIntoView({behavior:"instant"})}},[]);const Re=Math.max(C*2,4),Ae=w.length>0&&Nl(w),ct=!Ae&&!k&&S>=Re;et.useEffect(()=>{ct&&se(!0)},[ct]),et.useEffect(()=>{if(Ae&&(E(!1),s==="daily"&&!pe)){const De={clicks:S,usedAi:A,date:t};G(De);try{localStorage.setItem(`${G0}${t}`,JSON.stringify(De))}catch{}ce(We=>{const Ge=new Date;Ge.setDate(Ge.getDate()-1);const xt=`${Ge.getFullYear()}-${String(Ge.getMonth()+1).padStart(2,"0")}-${String(Ge.getDate()).padStart(2,"0")}`,Mt=We.lastWinDate===xt?We.currentStreak+1:We.lastWinDate===t?We.currentStreak:1,ur={played:We.played+1,wins:We.wins+1,currentStreak:Mt,maxStreak:Math.max(We.maxStreak,Mt),lastWinDate:t};try{localStorage.setItem(j_,JSON.stringify(ur))}catch{}return ur}),setTimeout(()=>ye(!0),600)}},[Ae,s,pe,S,A,t]),et.useEffect(()=>{if(!k||Ae)return;const De=c?c[String(ve)]:null,We=ve<=H0&&!!De,Ge=setTimeout(async()=>{const xt=w.join("");let Mt;We?Mt=(await L_(De,w,F.current,ne.current)).action:Mt=W2($e.adjMatrix,w),ne.current.add(`${xt}:${Mt}`),F.current=Mt,P(Mt),$(ur=>Wo(ur,$e.adjMatrix,Mt))},500);return()=>clearTimeout(Ge)},[k,Ae,w,c,ve,$e]);const er=De=>{Ae||k||ct||(P(null),F.current=De,$(We=>Wo(We,$e.adjMatrix,De)),b(We=>We+1))},Dt=()=>{E(!1),se(!1),P(null),F.current=null,ne.current=new Set,$(m),b(0)},pt=()=>{se(!1),D(!0),P(null),F.current=null,ne.current=new Set,$(m),b(0),E(!0)},Ve=()=>{k?E(!1):(D(!0),F.current=null,ne.current=new Set,E(!0))},rt=De=>{var xt;const We=(xt=Cl[De])==null?void 0:xt.id,Ge=document.getElementById(We);Ge&&(Ge.scrollIntoView({behavior:"smooth"}),te(De))},at=De=>{const We=De.currentTarget,Ge=Math.round(We.scrollTop/We.clientHeight);Ge!==Y&&Ge>=0&&Ge<Cl.length&&te(Ge)},St=!0,Gt=w.reduce((De,We)=>De+We,0);return U.jsxs("div",{className:"snap-container",ref:O,onScroll:at,children:[U.jsx("aside",{className:"slide-dots","aria-label":"Navegação de seções",children:Cl.map((De,We)=>U.jsxs("button",{type:"button",className:`slide-dot-btn ${Y===We?"active":""}`,onClick:()=>rt(We),title:De.label,children:[U.jsx("span",{className:"slide-dot-label",children:De.label}),U.jsx("span",{className:"slide-dot-indicator"})]},De.id))}),U.jsxs("section",{className:"snap-slide game-slide",id:"slide-game",children:[U.jsx(D2,{mode:s,setMode:o,challengeNumber:i,streak:he.currentStreak,onOpenHelp:()=>ee(!0),onOpenStats:()=>ye(!0),onJumpToContext:()=>rt(1)}),U.jsxs("main",{className:"main-container",children:[U.jsx(M2,{geometry:$e,state:w,onBallClick:er,lastAiAction:B,solving:k,solved:Ae,showRadiusPreview:V}),U.jsx(B2,{mode:s,numBalls:ve,onChangeNumBalls:De=>d(De),clicks:S,maxClicks:Re,aiPar:C,blackCount:Gt,totalBalls:$e.balls.length,solving:k,solved:Ae,canUseAi:St,onToggleSolve:Ve,onReset:Dt,onNewRandomBoard:()=>Te("free",ve),showRadiusPreview:V,setShowRadiusPreview:I})]}),U.jsx("div",{className:"scroll-hint-bar",children:U.jsx("button",{type:"button",className:"scroll-down-btn",onClick:()=>rt(1),children:"Entenda a matemática e o algoritmo de resolução ↓"})})]}),U.jsx(P2,{onBackToGame:()=>rt(0)}),U.jsx(L2,{isOpen:me,onClose:()=>ye(!1),stats:he,dailyResult:pe,challengeNumber:i,aiPar:C}),U.jsx(U2,{isOpen:ge,onClose:()=>ee(!1),onJumpToContext:()=>rt(1)}),re&&U.jsx("div",{className:"modal-backdrop",onClick:()=>se(!1),children:U.jsxs("div",{className:"modal-card gameover-card",onClick:De=>De.stopPropagation(),children:[U.jsxs("div",{className:"modal-header",children:[U.jsx("h2",{children:"Fim de Jogo — Limite de Cliques!"}),U.jsx("button",{type:"button",className:"close-btn",onClick:()=>se(!1),children:"Fechar"})]}),U.jsxs("div",{className:"gameover-body",children:[U.jsxs("p",{children:["Você atingiu o limite máximo de"," ",U.jsxs("strong",{children:[Re," cliques"]})," (2× a Referência de"," ",U.jsxs("strong",{children:[C," cliques"]}),") sem deixar todas as bolas pretas."]}),U.jsxs("div",{className:"gameover-actions",children:[U.jsx("button",{type:"button",className:"btn btn-secondary",onClick:Dt,children:"Tentar Novamente"}),U.jsx("button",{type:"button",className:"btn btn-primary",onClick:pt,children:"Ver Resolução Passo a Passo"})]})]})]})})]})}R2.createRoot(document.getElementById("root")).render(U.jsx(C2.StrictMode,{children:U.jsx(vx,{})}));
